Smalltalk current createPackage: 'ARoassal-Demo'!
Object subclass: #RODemo
	instanceVariableNames: 'workspace selector'
	package: 'ARoassal-Demo'!

!RODemo methodsFor: 'not yet classified'!

init
	" Initializes widgets"
	selector := ROExampleSelector init.
	workspace := ROWorkspace init.
!

writeExample: aString
	workspace clear.
	workspace val: aString.
	workspace doIt.
! !

RODemo class instanceVariableNames: 'demo'!

!RODemo class methodsFor: 'not yet classified'!

current
	demo ifNil: [  demo := self new].
	^ demo
!

init
	" Initializes widgets"
	self current init.
! !

ROObject subclass: #ROExample
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!ROExample methodsFor: 'demo'!

barAndLines

|builder values|
values := #(10 12 13 80 70 20 56).
builder := GETDiagramBuilder new.
builder compositeDiagram
	add: (GETVerticalBarDiagram new
			models: values;
			color: Color lightGreen);

	add: (GETOrdinaryLineDiagram new
			models: values;
			y: [:v | v cos abs * 50];
			color: Color brown);
	height: 250;
	regularAxis.

builder interaction popUpText.
builder open.
!

boxGenerator

	" Click on the green square multiple times "
	| view el e |
	view := ROView new.
	el := ROBox element color: (Color green).
	view add: el.
	el on: ROMouseClick do: [:event | 
		e := ROBox element.
		e size: (view elements size).
		view add: e. 
		ROCellLayout on: view elements.
		view signalUpdate
	].
	view open.
!

collectionHierarchy
| view classElements edges associations |
view := ROView new.
classElements := ROElement forCollection: Collection withAllSubclasses.
classElements
	do: [:c | | instVar numMethods |
		instVar := c model numberOfVariables.
		c shape width: (( instVar = 0) ifTrue: [ 10 ] ifFalse: [ instVar * 15]) .

		numMethods := c model numberOfMethods.
		c shape height: (( numMethods = 0) ifTrue: [ 3 ] ifFalse: [ numMethods * 2]) . 	
		c + ROBox @ RODraggable @ ROHighlight  @ ROPopup.

].
view addAll: classElements.

" Build and add edges "
associations := classElements collect: [:c |
			(c model superclass = Object)
			ifFalse: [ (view elementFromModel: c
				model superclass) -> c]
			] thenSelect: [:assoc | assoc isNil not ].
			
edges := ROEdge linesFor: associations.
view addAll: edges.

" Show the hierarchy as a tree "
ROTreeLayout on: (view elements) edges: edges.


view open.
!

gdp
| view cityBuilder values graphBuilder color|
	view := ROView new.
	color := Color lightBlue.
	
	"Maps"
	cityBuilder := ROMapBuilder new.
	cityBuilder view: view.
	cityBuilder allCountries.
	
	"Values"
	values := ROMapBuilder new pib 
			sorted: [ :ar1 :ar2 | ar2 second < ar1 second ].
	graphBuilder := GETDiagramBuilder new.
	graphBuilder rawView: view.
	graphBuilder verticalBarDiagram
			models: (values copyFrom: 1 to: 40);
			y: #second;
			color: color;
			regularAxisAsInteger;
			barWidth: 2;
			titleLabel: 'Gross Domestic Product (GDP)'.
	graphBuilder interaction popUpText
		on: ROMouseEnter 
		do: [ :event |  
				(view elementFromModel: 
					event element model first asSymbol) color: color  ];
		on: ROMouseLeave 
		do: [ :event |  
				(view elementFromModel: 
					event element model first asSymbol) color: Color white  ] 			.
	graphBuilder openIn: view.
	
	"Openining the thing"
	view open.
	"view openInWindowSized: 1000 @ 600."
!

greenAndRedNumbers

| diagram values |
values := (1 to: 10) collect: [ :v | 10 atRandom - 5 ].
diagram := GETDiagramBuilder new.
diagram verticalBarDiagram
models: values;
height: 150;
color: [:each | each < 0 ifTrue: [ Color red ] ifFalse: [ Color green ] ];
regularAxis.

diagram rawView translateBy: -100 @ -100.
diagram interaction popUpText: [:el | 
		(el > 0) 
			ifTrue: [(el asString),' is a green number']
			ifFalse: [(el asString),' is a red number :(']
].
diagram open
!

ironMaiden

	|builder maiden1 maiden2 |
	
	maiden1 := {{2013 . 46 . { 'United States' . 'Germany' . 'United Kingdom' . 'Brazil' . 'Spain' . 'Russia' . 'France' . 'Poland' . 'Sweden' . 'Austria' . 'Finland' . 'Argentina' . 'Switzerland' . 'Romania' . 'Paraguay' . 'Netherlands' . 'Turkey' . 'Chile' . 'Portugal' . 'Slovakia' . 'Czech Republic' . 'Belgium' . 'Croatia' . 'Italy' . 'Mexico' }}.
{2012 . 34 . { 'United States' . 'Canada' }} .
{2011 . 63 . { 'United Kingdom'	. 'Brazil' . 'Australia' . 'Germany' . 'France' . 'Russia' . 'Indonesia' . 'United States' . 'Mexico' . 'Colombia' . 'Netherlands' . 'Peru' . 'Poland' . 'Denmark' . 'Czech Republic' . 'Sweden' . 'Singapore' . 'Argentina' . 'Austria' . 'Belgium' . 'Chile' . 'Greece' . 'Norway' . 'Puerto Rico' . 'Turkey' . 'Finland' . 'South Korea'	. 'Switzerland' . 'Portugal' . 'Italy' . 'Spain' }} .
{2010 . 36 . { 'United States' . 'Canada' . 'Italy' . 'Ireland' . 'Belgium' . 'United Kingdom' . 'Spain' . 'Sweden' . 'Germany' . 'Finland' . 'Norway' . 'Hungary' .  'Romania' }} .
{2009 . 22 . { 'Brazil' . 'Mexico' . 'New Zealand' . 'Colombia' . 'Ecuador' . 'Serbia' . 'India' . 'Chile' . 'United Arab Emirates' . 'Peru' . 'Argentina' . 'United States' . 'Venezuela' . 'Costa Rica'}} .
{2008 . 68 . { 'United States' . 'Canada' . 'Australia' . 'Mexico' . 'Brazil' . 'Japan' . 'Sweden' . 'Norway' . 'France' . 'Finland' . 'Argentina' . 'Puerto Rico' . 'Czech Republic' . 'Chile' . 'Poland' . 'Hungary' . 'Portugal' . 'Costa Rica' . 'Romania' . 'Colombia' . 'Greece' . 'United Kingdom' . 'Croatia' . 'Denmark' . 'Netherlands' . 'Russia' . 'India' . 'Switzerland' . 'Germany' . 'Italy' . 'Belgium' . 'Spain' }} .
{2007 . 16 . { 'United Kingdom' . 'Germany' . 'Italy' . 'Slovenia' . 'Belgium' . 'India' . 'Greece' . 'United Arab Emirates' . 'Spain' . 'Serbia' . 'Netherlands' . 'Czech Republic' . 'Bulgaria' }} .
{2006 . 45 . { 'United Kingdom'	. 'United States' . 'Japan' . 'Sweden' . 'Finland' . 'Canada' . 'Norway' . 'Italy' . 'Denmark' . 'Germany' . 'Switzerland' . 'Ireland' . 'France' . 'Spain' . 'Netherlands' }} .
{2005 . 46 . { 'United States' . 'United Kingdom' . 'Germany' . 'Finland' . 'Norway' . 'Canada' . 'Portugal' . 'Belgium' . 'Czech Republic' . 'Switzerland' . 'Netherlands' . 'Greece' . 'Austria' . 'Sweden' . 'Poland' . 'Ireland' . 'Iceland' . 'Italy' . 'France' . 'Spain' }} .
{2004 . 14 . { 'United States' . 'Japan' . 'Brazil' . 'Canada' . 'Argentina' . 'Chile' }} .
{2003 . 90 . { 'United States' . 'Germany' . 'United Kingdom' . 'Spain' . 'France' . 'Sweden' . 'Italy' . 'Canada' . 'Belgium' . 'Czech Republic' . 'Denmark' . 'Switzerland' . 'Finland' . 'Hungary' . 'Netherlands' . 'Poland' . 'Norway' . 'Croatia' . 'Portugal' . 'Slovakia' . 'Austria' . 'Ireland'}} .
{2002 . 4 . { 'United Kingdom' }} . 
{2001 . 6 . { 'United Kingdom' . 'Argentina' . 'Brazil' . 'Mexico' . 'Chile' }} .
{2000 . 79 . { 'United States' . 'Japan' . 'United Kingdom' . 'Germany' . 'Canada' . 'Spain' . 'France' . 'Poland' . 'Czech Republic' . 'Switzerland' . 'Sweden' . 'Slovenia' . 'Portugal' . 'Norway' . 'Greece' . 'Belgium' . 'Netherlands' . 'Hungary' . 'Denmark' . 'Slovakia' . 'Finland' . 'Italy' . 'Austria' . 'Estonia' }} .
{1999 . 28 . { 'United States' . 'Canada' . 'Germany' . 'Spain' . 'Sweden' . 'Italy' . 'Netherlands' . 'Greece' . 'France' . 'Finland'}} .
{1998 . 87 .  {'United States' . 'Germany' . 'United Kingdom' . 'France' . 'Spain' . 'Italy' . 'Japan' . 'Brazil' . 'Canada' . 'Mexico' . 'Turkey' . 'Greece' . 'Argentina' . 'Hungary' . 'Poland' . 'Finland' . 'Czech Republic' . 'Portugal' . 'Malta' . 'Belgium' . 'Denmark' . 'Sweden' . 'Switzerland' . 'Netherlands' }} .
{1996 . 75 . {'United States' . 'France' . 'Japan' . 'Spain' . 'Italy' . 'Brazil' . 'Canada' . 'Argentina' . 'United Kingdom' . 'Greece' . 'Mexico' . 'Slovenia' . 'Denmark' . 'Netherlands' . 'Chile' . 'Ireland' . 'Colombia' . 'Finland' . 'Belgium' }} .
{1995 . 55 . {'Germany' . 'Italy' . 'United Kingdom' . 'Spain' . 'Israel' . 'South Africa' . 'Sweden' . 'Switzerland' . 'Greece' . 'Denmark' . 'Norway' . 'Romania' . 'Belgium' . 'Finland' . 'France' . 'Portugal' . 'Bulgaria' . 'Austria' . 'Poland' . 'Slovakia' . 'Netherlands' . 'Hungary' . 'Czech Republic'}} .
{1993  . 45 . {'Italy'  . 'United Kingdom' . 'Germany' . 'France' . 'Russia' . 'Spain' . 'Czech Republic' . 'Slovakia' . 'Sweden' . 'Netherlands' . 'Ireland' . 'Austria' . 'Switzerland' . 'Portugal' }} .
{1992  . 65 . {'United States' . 'Japan' . 'Canada' . 'Spain' . 'France' . 'Mexico' . 'Brazil' . 'Australia' . 'United Kingdom' . 'Venezuela' . 'Sweden' . 'Italy' . 'Germany' . 'Belgium' . 'Argentina' . 'Puerto Rico' . 'Finland' . 'Norway' . 'Denmark' . 'Switzerland' . 'Uruguay' . 'Iceland' . 'Netherlands' . 'New Zealand' }} .
{1991 . 50 . {'United States' . 'Canada' . 'Japan' . 'Switzerland' . 'Denmark' . 'France'}} .
{1990 . 56 . {'United Kingdom' . 'Germany' . 'Italy' . 'Spain' . 'Netherlands' . 'Belgium' . 'France' . 'Sweden' . 'Finland' . 'Ireland' . 'Portugal' . 'Norway' . 'Denmark' }} .
{1988 . 97 . {'United States' . 'United Kingdom' . 'Canada' . 'Germany' . 'Spain' . 'France' . 'Sweden' . 'Finland' . 'Portugal' . 'Italy' . 'Belgium' . 'Hungary' . 'Denmark' . 'Netherlands' . 'Austria'	. 'Switzerland' . 'Norway' . 'Greece' }} .
{1987  . 85 .  {'United States' . 'Canada' . 'Japan'}} .
{1986  . 66 .  {'United Kingdom' . 'Germany' . 'Poland' . 'France' . 'Italy' . 'Sweden' . 'Spain' . 'Austria' . 'Serbia' . 'Portugal' . 'Hungary' . 'Switzerland' . 'Croatia' . 'Slovenia' . 'Netherlands' . 'Norway' . 'Belgium' . 'Finland' }} .
{1985 . 104 .  {'United States' . 'Japan' . 'Australia' . 'Brazil' . 'United Kingdom' }} .
{1984 . 87 . {'United Kingdom' . 'Canada' . 'Germany' . 'United States' . 'France' . 'Poland' . 'Italy' . 'Spain' . 'Portugal' . 'Sweden' . 'Slovenia' . 'Switzerland' . 'Finland' . 'Hungary' . 'Belgium' . 'Netherlands' . 'Austria' . 'Denmark' . 'Serbia' }} .
{1983 . 137 .  {'United States' . 'United Kingdom' . 'Germany' . 'Canada' . 'France' . 'Spain' . 'Sweden' . 'Netherlands' . 'Denmark' . 'Belgium' . 'Finland' . 'Switzerland' . 'Norway' }} .
{1982  . 181 . {'United States' . 'United Kingdom' . 'France' . 'Canada' . 'Australia' . 'Japan' . 'Germany' . 'Spain' . 'Belgium' . 'Switzerland' . 'Netherlands' }} .
{1981  . 137 .  {'United States' . 'United Kingdom' . 'France' . 'Germany' . 'Italy' . 'Sweden' . 'Netherlands' . 'Japan' . 'Canada' . 'Denmark' . 'Belgium' . 'Serbia' . 'Switzerland' }} .
{1980  . 157 .	{'United Kingdom' . 'Germany' . 'Italy' . 'France' . 'Belgium' . 'Sweden' . 'Portugal' . 'Netherlands' . 'Finland' . 'Norway' . 'Switzerland' . 'Ireland' .	'Denmark' }} .
{ 1979 . 89 . { 'United Kingdom' }} .
{ 1978 . 4 . { 'United Kingdom' }} .
{ 1977 . 38 . { 'United Kingdom' }} .
{ 1976 . 34 . { 'United Kingdom' }}}.
	maiden2 := {'United States' -> 686 . 'United Kingdom' -> 538 . 'Germany' -> 154 . 'Canada' -> 111 . 'France' -> 109 . 'Japan' -> 70 . 'Italy' -> 70 . 'Spain' -> 68 . 'Sweden'	-> 39 . 'Australia' -> 32 . 'Brazil' -> 32 . 'Netherlands' -> 28 . 'Finland' -> 24 . 'Belgium' -> 24 . 'Poland' -> 23 . 'Switzerland' -> 22 . 'Denmark' -> 19 . 'Norway' -> 18 . 'Mexico' -> 17 . 'Portugal' -> 16 . 'Greece' -> 13 . 'Czech Republic' -> 11 . 'Austria' -> 11 . 'Hungary' -> 10 . 'Argentina' -> 10 . 'Ireland' -> 8 . 'Russia' -> 8 . 'Chile' -> 7 . 'Serbia' -> 5 . 'Slovenia' -> 5 . 'Slovakia' -> 5 . 'Croatia' -> 4 . 'Romania' -> 4 .'Colombia' -> 4 . 'Turkey' -> 4 . 'New Zealand' -> 3 . 'Venezuela' -> 3 . 'India' -> 3 . 'Israel' -> 3 . 'South Africa' -> 3 . 'Puerto Rico' -> 3. 'United Arab Emirates' -> 2 . 'Indonesia' -> 2 . 'Bulgaria'	-> 2 . 'Peru' -> 2 . 'Iceland' -> 2 . 'Costa Rica' -> 2 . 'South Korea' -> 1 . 'Uruguay' -> 1 . 'Ecuador' -> 1 . 'Estonia' -> 1 . 'Malta' -> 1 . 'Singapore' -> 1 . 'Paraguay' -> 1}.
	
	builder := RelationalTowersBuilder new.
	builder title: 'Iron Maiden'.
	builder legend: 'Concerts around the word per year'.
	builder body: 'Iron Maiden are an English heavy metal band 
formed in Leyton, east London, in 1975 by 
bassist and primary songwriter Steve Harris. 
The band''s discography has grown to 
thirty-seven albums, including fifteen studio 
albums, eleven live albums, four EPs, and 
seven compilations.

Pioneers of the New Wave of British Heavy 
Metal, Iron Maiden achieved initial success 
during the early 1980s. After several line-up 
changes, the band went on to release a 
series of US and UK platinum and gold 
albums, including 1982''s The Number of the 
Beast, 1983''s Piece of Mind, 1984''s 
Powerslave, 1985''s live release Live After 
Death, 1986''s Somewhere in Time and 
1988''s Seventh Son of a Seventh Son. 
Since the return of lead vocalist Bruce 
Dickinson and guitarist Adrian Smith in 1999, 
the band have undergone a resurgence in 
popularity, with their latest studio offering, 
The Final Frontier, peaking at No. 1 in 28 
different countries and receiving 
widespread critical acclaim.

Considered one of the most successful 
heavy metal bands in history, Iron Maiden 
have sold over 85 million records worldwide 
with little radio or television support. The 
band won the Ivor Novello Award for 
international achievement in 2002, and were 
also inducted into the Hollywood RockWalk in 
Sunset Boulevard, Los Angeles, California 
during their United States tour in 2005. As of 
October 2013, the band have played over 
2000 live shows throughout their career. For 
the past 35 years, the band have been 
supported by their famous mascot, "Eddie", 
who has appeared on almost all of their album 
and single covers, as well as in their live 
shows.'.
	builder colorLeft: #second.
	builder colorRight: #value.
	builder heightLeft: #second.
	builder heightRight: [:v| v value / 10].
	builder left: maiden1.
	builder right: maiden2.
	builder labelLeft: #first.
	builder labelRight: #key.
	builder edgesTo: [:a :b | a third includes: (b key) ].
	builder open.
!

plotFromCSV
"
This is a chart of the column 'NC'  of the table in a CSV file hosted on dropbox 
"
|block|
block := [:d :t |
d verticalBarDiagram
"try yourself by changing 'NNEC' to 'NC' and re-do"
models: (t dataFromColumn: 'NC');
"or maybe change the color"
color: Color brown;
regularAxisAsInteger;
height: 100;
width: 300
].
ROPlot new 
url: 'https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv';
drawBlock: block
!

punchcard

|builder|
builder := ROPunchcardBuilder new.
builder addModels: #( 'Sed' 'molestie' 'nec' 'nisi quis' 'vestibulum' 'Morbi tempus' 'luctus' 'commodo' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder addMetric: [:word | word size * 3 ] namedAs: 'length * 3'.
builder addMetric: [:word | word size / 2 ] namedAs: 'length / 2'.
builder minColor: Color green.
builder maxColor: Color red.
builder open.
!

relationalTowers

	| builder |

	builder := RelationalTowersBuilder new.
	builder legend: 'Example of a relation between two set of integers'.
	builder left: (1 to: 10).
	builder right: (1 to: 20).
	builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ] edgesToLeft: [ :v | (v / 2) ].
	builder open
!

worldConnections
	| builder |
	builder := ROMapBuilder new.
	builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').

	builder shape circle size: 8; color: (Color red alpha: 0.5).

	builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').

	builder shape circle size: 20; color: (Color red alpha: 0.5).

	builder city: 'Vancouver' position: 49.25 @ -123.133333.
	
	builder shape line width: 3; color: (Color blue alpha: 0.5).
	builder edgesFrom: 'Paris' toAll: #('New York City' 'Washington, D.C.' 'Santiago' 'Bogota' 'Vancouver').

	builder open
! !

!ROExample methodsFor: 'not yet classified'!

cellLayout
| view |
view := ROView new.
view clear.
" Play changing the number of squares"
1 to: 200 do: [ :i |
	view add: (ROBox elementOn: i) @RODraggable ].
	ROCellLayout on: view elements .
	view open.
!

circle
	| view |
	view := ROView new.
	view add: ((ROEllipse element translateTo: 50 @ 50) @ RODraggable color: Color green).
	view open.
!

create
	| view |
	view := ROView new.
	view add: (ROElement new shape: (ROBox new)).
	view open.
!

drag
	| view elements b |
	view := ROView new.
	elements := OrderedCollection new.
	b := (ROBox element translateTo: 50 @ 50).
	elements add: b."; 
			 add: (ROCircle element translateTo: 200 @ 150). "
	
	elements do: [:each | each addInteraction: RODraggable. view add: each].
	view open.
!

exampleImage
|view url el sh|
url := 'https://www.google.cl/images/srpr/logo11w.png'.
view := ROView new.
view add: (ROBox new elementOn: 1) @RODraggable.
el := ((ROImage url: url) elementOn: 1) @ RODraggable.
el size: 200.
view add: el.



view open.
!

exampleImage2
	" two buttons + and - and an image. When clicking any of them, resize the image "
!

horizontalLayout
	| view |
	view := ROView new.
	view clear.
	10 timesRepeat: [view add: (ROElement new shape: (ROBox new))].
	ROHorizontalLineLayout on: view elements.
	view open.
	^ view.
!

horizontalLayout2
	| view |
	view := ROView new.
	view clear.
	1 to: 20 do: [ :i |
		view add: ((ROElement new model: i) shape: 
			(ROBox new height: [ :el | el model * 13 ]; width: [ :el | el model * 5 ])) ].
	ROHorizontalLineLayout on: view elements.
	view open.
!

horizontalLineLayout
	| view colorWheel |
	view := ROView new.
	view clear.
	colorWheel := (Color red) wheel: 20 to: (Color green).
	colorWheel do: [:c | 
		view add: (ROBox element color:  c ) @ RODraggable].
	ROHorizontalLineLayout on: view elements.
	view open.
!

hover
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
"Open an inspector when clicking"
element on: ROMouseEnter do: [ :event | event element color: Color red. event element view signalUpdate. ].
element on: ROMouseLeave do: [ :event | event element color: Color blue.  event element view signalUpdate. ].
view add: element.
view open.
!

label
|view element |
view := ROView new.
element := ROElement new size: 100.

element + ROLabel.
view add: element.

view open.
!

line
	| view el1 el2 edge |
	view := ROView new.

	el1 := ROBox element.
	el2 := ROBox element.
	
	el1 translateTo: 20 @ 30.
	el2 translateTo: 300 @ 100.
	
	edge := ROLine edgeFrom: el1 to: el2.

	view add: el1; add: el2; add: edge.
	
	view open.
!

line2

	| view el1 el2 edge el3 el4 edge2 |
	view := ROView new.

	el1 := ROEllipse element.
	el2 := ROEllipse element.
	
	el1 translateTo: 20 @ 30.
	el2 translateTo: 300 @ 100.
	
	edge := ROLine edgeFrom: el1 to: el2.
	
	el3 := ROBox element.
	el4 := ROBox element.
	
	el3 translateTo: 150 @ 20.
	el4 translateTo: 150 @ 300.
	
	edge2 := ROLine edgeFrom: el3 to: el4.

	view add: el1; add: el2; add: edge; add: el3; add: el4; add: edge2.
	
	view open.
!

mouseclick
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
"Open an inspector when clicking"
element on: ROMouseClick do: [ :event | event element hide].
view add: element.
view open.
!

mouseclick2
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
"Open an inspector when clicking"
element on: ROMouseLeftClick do: [ :event | event element hide].
view add: element.
view open.
!

mouseclick3
|view element element2|
view := ROView new.
element := ROElement new size: 100.
element2 := ROElement new size: 50.
element + ROBox.
element2 + ROBox.
"Open an inspector when clicking"
element on: ROMouseLeftClick do: [ :event | Transcript show: 'e1',(String cr)].
element2 on: ROMouseLeftClick do: [ :event | Transcript show: '-e2-',(String cr)].
view add: element.
view add: element2.
ROHorizontalLineLayout on: {element . element2}.
view open.
!

popup
	|view element|
	view := ROView new.
	element := (ROElement on: 'Text 1') size: 40.
	element + ROBox color: Color lightRed.
	element @ RODraggable.
	element @ (ROPopup text: [:el |  el , ' y 2']).
	view add: element.
	view open.
!

popupAndDrag
"not working properly right now"
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
element @ RODraggable.
element @ ROPopup.
"Open an inspector when clicking"

view add: element.
view open.
!

scale

	| view url elements scaleFactor tux|
	url := 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/p320x320/1457530_768681953149154_113448858_n.jpg'.
	elements := { 
			((ROImageShape url: url) element @RODraggable) .
			ROEllipse element @RODraggable .
			ROBox element @RODraggable .
			ROTux element @RODraggable 
	}.
	scaleFactor := #( 0.9 1.001 1.1 1.2 ).

	view := ROView new.
	tux :=  ROTux element @RODraggable.
	view addAll: elements.
	ROHorizontalLineLayout on: view elements.
	tux on: ROMouseClick do: [:evt | 
		elements do: [:e |
			e shape scale: (scaleFactor at: (elements indexOf: e)).  
		].
		view signalUpdate.].

	view add: tux.
	view open
!

scaleLabel
|view plus tux|
plus := (ROLabel element on: '+').
view := ROView new.
view add: plus.

tux :=  ROTux element @RODraggable.

tux on: ROMouseClick do: [:evt | 
	Transcript show: (plus shape width asString),',',(plus shape svgElement attr: 'width'),'   '.
	plus shape scale: 2.  
	Transcript show: (plus shape width asString),',',(plus shape svgElement attr: 'width'),(String cr).
	view signalUpdate.].
	
	view add: tux.

view open
!

theWorld

	|view color|
	view := ROView new.
	
	view addAll: ((ROCountryInfo world) collect: [:country |
		|el|
		el := (ROPath path: (ROCountryInfo perform: country)) 
					elementOn: country.
		el @ (ROHighlight color: Color brown).
		el @ ROPopup.
	]).
	
	view open.
!

theWorld2

	|view color|
	view := ROView new.
	
	view addAll: ((ROCountryInfo world) collect: [:country |
		|el|
		el := (ROPath path: (ROCountryInfo perform: country)) 
					elementOn: country.
		el @ ROPopup.
	]).
	
	view open.
!

treeLayout 
	"
	self new treeLayout
	"
	
	| view elements edges |
	view := ROView new.
	elements := ROElement spritesOn: (1 to: 5).
	elements do:[:el | el addInteraction: RODraggable].
	view addAll: elements.
	view addAll: (edges := ROEdge linesFor: { (elements at: 1) -> (elements at: 2) . 
											  (elements at: 2) -> (elements at: 5) . 
											  (elements at: 2) -> (elements at: 3) }).
	
	ROTreeLayout on: elements edges: edges.

	view open.
!

treeLayout2
	"
	self new treeLayout
	"
	
	| view elements |
	elements := ROElement forCollection: (1 to: 20).
	elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].
	view := ROView new.
	view addAll: elements.
	elements allButFirst do: [:e | 
	 	view add: (ROEdge lineFrom: elements first to: e) ].

	ROTreeLayout on: elements.
	view open.
!

tux

	| view |
	view := ROView new.
	view add: (ROTux element).
	view open
! !

Widget subclass: #ROExampleSelector
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!ROExampleSelector methodsFor: 'not yet classified'!

renderOn: html
	| ul li a |
	ul := html ul.
	ul class: 'dropdown-menu'.
	
	((ROExample methodDictionary values select: [:m | m category = 'demo']) collect: [:mtd | mtd selector])  do: [:selector |

		li := html li.
		a := html a.
		a href: '#'.
		a onClick: [self show: selector].
		a with: selector.
		li append: a.
		ul append: li.
	].
!

show: selector
	self updateTextArea: selector.
	self updateCanvas: selector.
!

updateCanvas: selector
	"execute 'ROExample new selector' command"
	ROExample new perform:selector.
!

updateTextArea: selector
	"put the code into #roassal-text textarea"
	RODemo current writeExample:  (self sourceCodeWithoutMethodnameOf: (ROExample>>selector)	).
! !

!ROExampleSelector methodsFor: 'utils'!

sourceCodeWithoutMethodnameOf: method
	| sourceCodeLines |
	sourceCodeLines := method source lines.
	sourceCodeLines removeFirst.
	" Remove newlines, empty and one-space lines"
	^ (sourceCodeLines reject: [:line | line = (String cr) 
																or: [ line = ' ' 
																or: [ line = '' ]]])
	"then join them into one string and return"															
			inject: '' into: [:sourceCode :line | sourceCode,(String cr),line ]
! !

!ROExampleSelector class methodsFor: 'not yet classified'!

init
	^ self new appendToJQuery: '#selectorList' asJQuery; yourself.
! !

Widget subclass: #ROWorkspace
	instanceVariableNames: 'workspace'
	package: 'ARoassal-Demo'!

!ROWorkspace methodsFor: 'not yet classified'!

clear 
	workspace clear.
!

doIt
	workspace doIt
!

renderButtonsOn: html
    html a
	with: 'DoIt';
	class: 'btn';
	title: 'ctrl+d';
	onClick: [self workspace doIt].
"	
    html a
	with: 'PrintIt';
	class: 'btn';
	title: 'ctrl+p';
	onClick: [self workspace printIt].
    
	html a
	with: 'InspectIt';
	class: 'btn';
	title: 'ctrl+i';
	onClick: [self workspace inspectIt]
"
!

renderOn: html
	| div |
	html div 
		class: 'roworkspace';
		with: [self renderButtonsOn: html];
		with: [self workspace renderOn: html].
!

val: aString
	workspace val: aString.
!

workspace
	^ workspace ifNil: [
          	workspace := SourceArea new]
! !

!ROWorkspace class methodsFor: 'not yet classified'!

init
	^ self new appendToJQuery: '#roassaltext' asJQuery; yourself.
! !

