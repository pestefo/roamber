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

pib
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

theWorld

	|view color|
	view := ROView new.
	
	view addAll: ((ROSVGPath world) collect: [:country |
			(ROSVGPath path: (ROSVGPath perform: country)) elementOn: country]).
	color := Color r: 0.746 g: 0.652 b: 0.188.		
	view elementsDo: [:e |
		e @ (ROHighlight color: color).
		e @ ROPopup.
	].
	view open.
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

