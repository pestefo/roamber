Smalltalk current createPackage: 'Roassal-Plot'!
Object subclass: #ROConfigParser
	instanceVariableNames: 'drawBlock typeChartDict jsonObj'
	package: 'Roassal-Plot'!

!ROConfigParser methodsFor: 'command'!

asString
	^ drawBlock
!

block
	^ self drawBlock
!

buildBlock
	|str|
	str := ' [:d :t | 
	d '.
	str := self parseTypeDiagram: str.
	str := self parseValues: str.
	str := self parseY: str.
	str := self parseAxis: str.
	str := self parseColor: str.	
	str := str,']'.
	
	^ str
!

drawBlock
"	^ Compiler evaluate: drawBlock"
	^ Compiler new evaluateExpression: drawBlock
!

initDiagramDict
	^ { 
	'verticalBar' -> 'verticalBarDiagram'.
	'horizontalBar' -> 'horizontalBarDiagram'
"	'scatter' -> 'scatterplot'.
	'line' -> 'lineDiagram'.
	'line' -> 'ordinaryLineDiagram'.
	'pie' -> 'pieDiagram'.
	'composite' -> 'compositeDiagram'."
	 }
!

initialize
	super initialize.
	typeChartDict := self initDiagramDict asDictionary.
!

jsonParse: aString
"	^ NeoJSONReaderWrapper fromString: aString."
	^ jQuery parseJSON: aString
!

parse: aString 
	jsonObj := self jsonParse: aString.
	
	drawBlock := self buildBlock.
!

parseAxis: str
	^ str,(jsonObj axis),';',(String cr).
!

parseColor: str
	^ str,'color: Color ',(jsonObj color),'',(String cr)
!

parseTypeDiagram: str
	^ str,(typeChartDict  at: (jsonObj type)),(String cr).
!

parseValues: str
	^ str,'models: (t dataFromColumn:''',(jsonObj values),''');',(String cr).
!

parseY: str
	^ str,'y: ',(jsonObj y),';',(String cr)
! !

!ROConfigParser class methodsFor: 'instance creation'!

parse: aString 
	^ self new parse: aString
! !

Object subclass: #RODataParser
	instanceVariableNames: 'rawData token'
	package: 'Roassal-Plot'!

!RODataParser methodsFor: 'as yet unclassified'!

asArray: aString
	^ (((self token split: aString) 
		reject: [:str | str = ''])
		collect:#trim )
!

asOrderedCollection
	^  self asArray: rawData
!

asTable
	| cols |
	cols := self columnize: (((self newLineChar split: rawData ) reject: [:line | line = '' ]) collect: [ :line |

		self asArray: line.
		]).

	^ ROTable columns: cols.
!

columnize: rows
 	"It receives a collection of rows"
	| ncols cols|
	ncols := rows first size.
	cols := OrderedCollection new.
	ncols timesRepeat: [cols add: (OrderedCollection new)].

	rows do: [:row | 
		(1 to: ncols) do: [:i |
			(cols at: i) add: (row at: i) 
		]].
	
	^ cols
!

inferToken
	|inferedToken|
	inferedToken := self separators collect: [ :t | t first ] thenSelect: [ :t | rawData includes: t ].
	inferedToken := inferedToken asOrderedCollection.
	" Checking we have just one delimiter "
	(inferedToken size = 1 )
		" In case we have two delimiters, probably we catched a space and another delimiter"
		ifFalse: [
			inferedToken remove: (' ' first).
			(inferedToken size = 1) 
				ifFalse: [ self error: 'Could not find a delimiter' 
		].
	].
	^ inferedToken first asString.
!

newLineChar
	^ 
	"String cr "
	 String lf
!

rawData
	^ rawData
!

rawData: aString
	rawData := aString
!

separator
	^ self token
!

separators
	^ { 
	' '.   " single space "
	','.   " comma "
	';'.   " semicolon "
	'	'.  " tab " 
	'&' 	 " latex table "	
	}.
!

token
	^ token ifNil: [ token := self inferToken ]
!

token: aString	
	token := aString
! !

!RODataParser class methodsFor: 'as yet unclassified'!

rawData: aString withToken: token
	^ self new 
		rawData: aString; 
		token: token
! !

TestCase subclass: #RODataParserTest
	instanceVariableNames: 'data'
	package: 'Roassal-Plot'!

!RODataParserTest methodsFor: 'as yet unclassified'!

testAsTable
	| str |
	str := '1,1
2,3
4,6'.
!

testCSV
	|str token|
	token := ','.
	
	str :=  '1,4,9,2,23,45,63'.
	data := RODataParser rawData: str withToken: token.
	self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.
	
	str :=  '1,4,9,2,23,45,63,'.
	data := RODataParser rawData: str withToken: token.
	self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.

	str :=  ',1,4,9,2,23,45,63,'.
	data := RODataParser rawData: str withToken: token.
	self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.
!

testInferSeparator
	|str|
	str :=  '1,4,9,2,23,45,63'.
	data := RODataParser rawData: str withToken: nil.
	self assert: data separator = ','.
	
	str :=  '1 4 9 2 23 45 63'.
	data := RODataParser rawData: str withToken: nil.
	self assert: data separator = ' '.
	
	str :=  '1	4	9	2	23	45	63'.
	data := RODataParser rawData: str withToken: nil.
	self assert: data separator = '	'.
	
	str :=  '1;4;9;2;23;45;63'.
	data := RODataParser rawData: str withToken: nil.
	self assert: data separator = ';'.
	
	str :=  '1&4&9&2&23&45&63'.
	data := RODataParser rawData: str withToken: nil.
	self assert: data separator = '&'.
	
	"If there is any space and other delimiter, we consider the other character as delimiter"
	str :=  '1 & 4 & 9 & 2 & 23 & 45 & 63'.
	data := RODataParser rawData: str withToken: nil.
	self assert: data separator = '&'.
!

testSpaceToken
	|str token|
	token := ' '.
	str :=  '1 4 9 2 23 45 63'.
	
	data := RODataParser rawData: str withToken: token.
	self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.
	
	str :=  '1 4 9 2 23 45 63 '.
	data := RODataParser rawData: str withToken: token.
	self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.

	str :=  ' 1 4 9 2 23 45 63 '.
	data := RODataParser rawData: str withToken: token.
	self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.
! !

Object subclass: #ROPlot
	instanceVariableNames: 'url drawBlock table token'
	package: 'Roassal-Plot'!

!ROPlot methodsFor: 'accessing'!

drawBlock: aBlock
	drawBlock := aBlock.
	
	self isReadyToPlot ifTrue: [ self plot ]
!

table: aROTable
	table := aROTable.
	
	self isReadyToPlot ifTrue: [ self plot ]
!

token: aString
	token := aString
!

url: aString
	(aString match:  '.*dropbox.*') 
		ifTrue: [ url := self processDropboxURL: aString]
		ifFalse: [ url := aString ].
	
	self fetchData.
! !

!ROPlot methodsFor: 'as yet unclassified'!

isReadyToPlot
	^ table notNil and: [ drawBlock notNil ]
! !

!ROPlot methodsFor: 'data'!

fetchData
"
  jQuery
    ajax: url
    options: #{
        'type' -> 'GET' .
       'success' -> [ :rawData | self fromText: rawData ] .
        'error' -> [window alert: 'error']
    }
"	
jQuery
    ajax: url
    options: #{
		'accept' -> 'text/plain'.
        'type' -> 'GET'. 
       'success' -> [  :data :txtStatus :xhr | self fromText: data  ] .
        'error' -> [window alert: 'Request failed at:  ', url] } 


"$.ajax('https://dl.dropboxusercontent.com/s/hh1ujh8mofphbnl/data1.csv', {  'type' : 'GET', 'success' : function () {alert('Exito')}, 'error' : function() {alert('Error')} } )"
!

fromText: aString
	|splittedData chartSpecString dataString|
	splittedData := (self specAndDataSeparator split: aString).

	"Text contains just data"
	splittedData size = 1 
		ifTrue: [ 
			self table: (RODataParser rawData: aString withToken: token) asTable.
	]
		ifFalse: [ 
			
			"Text contains both chart specfication and data"
			splittedData size = 2
				ifTrue:  [ 
					chartSpecString := splittedData first.
					dataString := splittedData second.
	
					self drawBlock: (ROConfigParser parse: chartSpecString) block.
					self table: (RODataParser rawData: dataString withToken: token) asTable.
					
			]
				ifFalse: [ self error: 'File without proper structure' 
			]
	].
!

specAndDataSeparator
	"String that delimits the Chart Specification and Data"
	^ '--'
! !

!ROPlot methodsFor: 'drawing'!

plot
	|diagram|
	diagram := GETDiagramBuilder new.
	
	drawBlock value: diagram 
				value: table.
	diagram open.
! !

!ROPlot methodsFor: 'utils'!

processDropboxURL: aString 
	"
	Dropbox share looks like:
	https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt
	The direct link to the file is:
	https://dl.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt	
	"
	|str prefix|
	prefix := 'http://dl.dropboxusercontent.' .
	str := aString.
	str :=(str copyFrom: (str indexOf: '.' ) + 1 to: str size ).
	str :=(str copyFrom: (str indexOf: '.' ) + 1 to: str size ).
	 ^ prefix , str.
! !

!ROPlot class methodsFor: 'example'!

example1
	"Data and block are given separately"
	"
	self example1
	"
	ROPlot new 
		url: 'https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv';
		drawBlock: (self block1)
!

example1a
	"Data and block are given separately"
	"
	self example1a
	"
	ROPlot new 
		fromText: self data1;
		drawBlock: self block1
!

example1b
	"Data and block are given separately"
	"
	self example1b
	"
	ROPlot new 
		table: (RODataParser rawData: (ROTableTest data2) withToken:'&') asTable;
		drawBlock: self block1
!

example2
	"Data and block are given together in one text"
	"
	self example2
	"
	ROPlot new 
		url: 'https://www.dropbox.com/s/yweot8dvr74hmje/verticalBar.txt'
!

example2a
	"Data and block are given together in one text"
	"
	self example2a
	"
	ROPlot new 
		fromText: self verticalBar
! !

!ROPlot class methodsFor: 'examples data'!

block1
	^ [ :diagram :table |
		diagram verticalBarDiagram
			models: (table dataFromColumn: 'NC');
			y: #yourself;
			color: Color paleBlue;
			regularAxis;
			yAxisLabel: 'NC'
			"color:  [ :v | v odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ]."
		"^ diagram open "
	 ]
!

data1
^
'bench. & NC & NNEC
1 & 643603 & 151665
2 & 13 & 12
3 & 78977 & 34912
4 & 1690 & 512
5 & 3551 & 2009
6 & 96 & 44
7 & 644 & 218
8 & 2 & 0
9 & 158399 & 58333
10 & 1432306 & 14891
11 & 6839 & 2058
12 & 7870 & 3472
13 & 108571 & 57590
14 & 10305 & 586
15 & 20815 & 14886
16 & 766 & 172
17 & 1203 & 880
total & 2475650 & 342240'
!

verticalBar
^
'
{
	"type" : "verticalBar",
	"values" : "NC",
	"y" : "[:x | x * 2 ]",
	"color": "brown",
	"axis": "regularAxisAsInteger"
}
---', (self data1)
! !

!ROPlot class methodsFor: 'examples deprecated'!

OLDexample
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt';
		plot.
!

OLDexample2
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';
		token: ',';
		plot.
!

OLDexample3
	"Like example2 but the comma separator is not given"
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';
		plot.
! !

Object subclass: #ROTable
	instanceVariableNames: 'columns header'
	package: 'Roassal-Plot'!

!ROTable methodsFor: 'accessing'!

columnTitled: aString 
	self hasHeader 
			ifFalse: [ self error: 'This table does not have header' ].
	
	^ self column: (header indexOf: aString)
!

columns: aCollection
	columns := aCollection.
	self checkForHeader ifTrue: [ self withHeader ].
	^ self
!

dataFromColumn: aString 
	^ (self columnTitled: aString) removeFirst; yourself.
!

header
	^ header copy
!

process: anArray
	^ anArray collect: [ :d |
		| newD |
		d isNumeric 
			ifTrue: [ newD := d asNumber ]
			ifFalse: [ newD := d].
			newD.
		 ]
!

row: index
	|i|
	i := index.
	self hasHeader ifTrue: [ i := i + 1  ]. "If it has a header, data starts one row below"
	^ self process: (columns collect: [:c | c at: i ])
! !

!ROTable methodsFor: 'instance creation'!

col: i row: j
	^ (self row: j) at: i
!

column: index
	^ self process: (columns at: index) copy
! !

!ROTable methodsFor: 'private'!

checkForHeader
	^ (self row: 1) 
		inject: true 
		into: [ :bool :element | bool and: [ element isString] ]
!

columns
	^ self process: columns copy
!

withHeader
	self hasHeader ifFalse: [ header := self row: 1 ]
! !

!ROTable methodsFor: 'testing'!

hasHeader
	^ header notNil
! !

!ROTable class methodsFor: 'as yet unclassified'!

columns: aCollection
	^ self new columns:aCollection
! !

TestCase subclass: #ROTableTest
	instanceVariableNames: ''
	package: 'Roassal-Plot'!

!ROTableTest methodsFor: 'as yet unclassified'!

setUp1
	|str |
	str := self class data1.
	table := (RODataParser rawData: str withToken: ',') asTable.
!

setUp2
	|str |
	str := self class data2.
	table := (RODataParser rawData: str withToken: '&') asTable.
!

testCheckHeader
	|str table|
	str := self class data1.
	table := (RODataParser rawData: str withToken: ',') asTable.
	self deny: table hasHeader.
	
	str := self class data2.
	table := (RODataParser rawData: str withToken: '&') asTable.
	self setUp2.
	self assert: table hasHeader.
!

testColRow
	|str table|
	str := self class data1.
	table := (RODataParser rawData: str withToken: ',') asTable.
	
	self assert: (table col: 1 row: 1) = 1. 
	self assert: (table col: 2 row: 3) = 6.
	self assert: (table col: 2 row: 2) = 3.
	
	self should: [ table col: 3 row: 1 ] raise: Error.
	self should: [ table col: 1 row: 5 ] raise: Error.
!

testColRow2
	|str table|
	str := self class data2.
	table := (RODataParser rawData: str withToken: '&') asTable.

	self assert: (table col: 1 row: 11) = 11. 
	self assert: (table col: 2 row: 1) = 643603. 
	self assert: (table col: 3 row: 14) = 586.
	self assert: (table col: 2 row: 10) = 1432306.
	self assert: (table col: 1 row: 18) = 'total'.
	
	self should: [ table col: 4 row: 1 ] raise: Error.
	self should: [ table col: 1 row: 19 ] raise: Error.
!

testColumn
	| str col1 col2 table|
	str := self class data1.
	table := (RODataParser rawData: str withToken: ',') asTable.
	col1 := #(1 2 4 ) asOrderedCollection.
	col2 := #(1 3 6 ) asOrderedCollection.
	
	self assert: (table column: 1) = col1.
	self assert: (table column: 2) = col2 .
!

testDataFrom
	|str table|
	str := self class data2.
	table := (RODataParser rawData: str withToken: '&') asTable.

	self assert: ((table columnTitled: 'bench.') asArray) = #('bench.' 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 'total').
	self assert: ((table dataFromColumn: 'bench.') asArray) = #(1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 'total').
!

testRow
	| row1 row2 row3 str table|
	str := self class data1.
	table := (RODataParser rawData: str withToken: ',') asTable.
	row1 := #(1 1) asOrderedCollection.
	row2 := #(2 3) asOrderedCollection.
	row3 := #(4 6) asOrderedCollection.	
		
	self assert: (table row: 1) = row1.
	self assert: (table row: 2) = row2.
	self assert: (table row: 3) = row3.
!

testRow2
	| str row1 row5 row10 row17 row18 table|
	str := self class data2.
	table := (RODataParser rawData: str withToken: '&') asTable.
	row1 := #(1 643603 151665) asOrderedCollection.
	row5 := #(5 3551 2009) asOrderedCollection.
	row10 := #(10 1432306 14891) asOrderedCollection.
	row17 := #(17 1203 880) asOrderedCollection.	
	row18 := #('total' 2475650 342240) asOrderedCollection.
			
	self assert: (table row: 1) = row1.
	self assert: (table row: 5) = row5.
	self assert: (table row: 10) = row10.
	self assert: (table row: 17) = row17.
	self assert: (table row: 18) = row18.
!

testWithHeader
		
	|str table|
	str := self class data2.
	table := (RODataParser rawData: str withToken: '&') asTable.

	self assert: table hasHeader.
	self assert: table header asArray = #('bench.' 'NC' 'NNEC').
! !

!ROTableTest class methodsFor: 'as yet unclassified'!

data1
	^ '1,1
2,3
4,6'
!

data2
	^ 'bench. & NC & NNEC
1 & 643603 & 151665
2 & 13 & 12
3 & 78977 & 34912
4 & 1690 & 512
5 & 3551 & 2009
6 & 96 & 44
7 & 644 & 218
8 & 2 & 0
9 & 158399 & 58333
10 & 1432306 & 14891
11 & 6839 & 2058
12 & 7870 & 3472
13 & 108571 & 57590
14 & 10305 & 586
15 & 20815 & 14886
16 & 766 & 172
17 & 1203 & 880
total & 2475650 & 342240'.
! !

