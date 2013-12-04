Smalltalk current createPackage: 'Roassal-Plot'!
Object subclass: #ROData
	instanceVariableNames: 'rawData token'
	package: 'Roassal-Plot'!

!ROData methodsFor: 'accessors'!

rawData
	^ rawData
! !

!ROData methodsFor: 'not yet classified'!

asArray
	^ ((rawData subStrings: self token) collect:#asNumber)
!

rawData: aString
	rawData := aString
!

rawData: aString from: anObject
	rawData := aString.	
	anObject continue.
!

separators
	^ { 
	' '.   " single space "
	','.   " comma "
	';'.   " semicolon "
	'	'  "tab"
	}.
!

token
	^ token
!

token: aString
	(aString size = 1) ifFalse: [ self error: 'Separator must be one character' ].
	
	token := aString
! !

!ROData class methodsFor: 'not yet classified'!

rawData: aString
	^ self new rawData: aString.
!

rawData: aString withToken: token
	^ self new rawData: aString; token: token; yourself
!

token: token
	^ self new token: token; yourself
! !

ROTest subclass: #RODataTest
	instanceVariableNames: 'data'
	package: 'Roassal-Plot'!

!RODataTest methodsFor: 'not yet classified'!

testCSV
	|str token|
	token := ','.
	
	str :=  '1,4,9,2,23,45,63'.
	data := ROData rawData: str withToken: token.
	self assert: data asArray = #(1 4 9 2 23 45 63).
	
	str :=  '1,4,9,2,23,45,63,'.
	data := ROData rawData: str withToken: token.
	self assert: data asArray = #(1 4 9 2 23 45 63).

	str :=  ',1,4,9,2,23,45,63,'.
	data := ROData rawData: str withToken: token.
	self assert: data asArray = #(1 4 9 2 23 45 63).
!

testSpaceToken
	|str token|
	token := ' '.
	str :=  '1 4 9 2 23 45 63'.
	
	data := ROData rawData: str withToken: token.
	self assert: data asArray = #(1 4 9 2 23 45 63).
	
	str :=  '1 4 9 2 23 45 63 '.
	data := ROData rawData: str withToken: token.
	self assert: data asArray = #(1 4 9 2 23 45 63).

	str :=  ' 1 4 9 2 23 45 63 '.
	data := ROData rawData: str withToken: token.
	self assert: data asArray = #(1 4 9 2 23 45 63).
!

testToken
	"Separators must be a single character"
	
	self should: [ ROData new token: ',,'  ] raise: Error.
	self shouldnt: [ ROData new token: ','  ] raise: Error.
! !

Object subclass: #ROPlot
	instanceVariableNames: 'url data drawBlock'
	package: 'Roassal-Plot'!

!ROPlot class methodsFor: 'public'!

example
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt';
		plot.
!

example2
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';
		token: ',';
		plot.
!

example3
	"Like example2 but the comma separator is not given"
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';
		plot.
!

url: aString
	^ self new url: aString
! !

