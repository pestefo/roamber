Smalltalk current createPackage: 'Graph-ET-Examples'!
Object subclass: #DotaHero
	instanceVariableNames: 'winrate matchesPlayed name faction'
	package: 'Graph-ET-Examples'!

!DotaHero methodsFor: 'accesing'!

faction
	^faction.
!

faction: aString
	faction := aString.
!

matchesPlayed
	^matchesPlayed.
!

matchesPlayed: aNumber
	matchesPlayed := aNumber.
!

name
	^name.
!

name:aName
	name := aName.
!

winrate
	^winrate.
!

winrate: wR
	winrate := wR.
! !

Object subclass: #GETExamples
	instanceVariableNames: ''
	package: 'Graph-ET-Examples'!

!GETExamples methodsFor: 'barDiagram'!

distributionOfClasses
	"
	self new distributionOfClasses
	"
	
	| diagram |
	diagram := GETDiagramBuilder new.
	self distributionOfClassesOn: diagram.
		
	^ diagram open
!

distributionOfClassesOn: builder
	| d distribution |
	d := Dictionary new.
	ROObject withAllSubclasses do: [ :cls | d at: cls put: cls numberOfLinesOfCode ].
	distribution := (GETDistribution on: d values) annotatedFrequency.
	
	builder verticalBarDiagram
		models: distribution;
		y: [ :v | v third size ];
		regularAxisAsInteger;
		titleLabel: 'Size distribution of Roassal classes'.
	builder interaction popUpText
!

verticalBarWithTitle
	"
	self new verticalBarWithTitle
	"
	
	| diagram |
	diagram := GETDiagramBuilder new.
	self verticalBarWithTitleOn: diagram.
		
	^ diagram open
!

verticalBarWithTitleOn: builder
	| d |
	d := Dictionary new.
	ROObject withAllSubclasses do: [ :cls | d at: cls put: cls numberOfLinesOfCode ].
	
	builder verticalBarDiagram
		models: (ROObject withAllSubclasses sortedAs: [ :c | d at: c ] ) reverse;
		y: [ :cls | d at: cls ];
		color: [ :cls | ((d at: cls) * 1.1) >= d values max ifTrue: [ Color red ] ifFalse: [ Color lightGray ] ];
		regularAxisAsInteger;
		barWidth: 2;
		titleLabel: 'Size of Roassal classes'.
	builder interaction popUpText
! !

!GETExamples methodsFor: 'execute'!

executeAll

	^ self class class methodDictionary do: [:aMethod | (self class) perform: aMethod selector  ]
! !

!GETExamples class methodsFor: 'animation'!

basicAnimationExample

	"self basicAnimationExample"

	| diag button ys index |
	
	diag := GETDiagramBuilder new.
	
	diag verticalBarDiagram
		models: (0 to: 10);
		y: [ :x | x * x ];
		regularAxis.
		
	diag open.
	
	index := 2.
	ys := { [ :x | x * x ] . [ :x | x ] . [ :x | x *4 + 5 ] . [ :x | x *8 + 5 ] . [ :x | 100 - (x * x) ] }.
	button := ROLabel elementOn: 'next'.
	button + ROBorder.
	button on: ROMouseClick do: [ :event |  
		diag updateBlock: (ys at: index).
		index := (index \\ 5) + 1 ].
	
	diag rawView add: button.
	button translateTo: 350 @ 0
!

basicAnimationHorzExample

	"self basicAnimationHorzExample"

	| diag button ys index |
	
	diag := GETDiagramBuilder new.
	
	diag horizontalBarDiagram
		models: (0 to: 10);
		x: [ :x | x * x ];
		regularAxis.
		
	diag open.
	
	index := 2.
	ys := { [ :x | x * x ] . [ :x | x ] . [ :x | x *4 + 5 ] . [ :x | x *8 + 5 ] . [ :x | 100 - (x * x) ] }.
	button := ROLabel elementOn: 'next'.
	button + ROBorder.
	button on: ROMouseClick do: [ :event |  
		diag updateBlock: (ys at: index).
		index := (index \\ 5) + 1 ].
	
	diag rawView add: button.
	button translateTo: 0 @ 350
!

basicAnimationLineExample

	"self basicAnimationLineExample"

	| diag button ys index |
	
	diag := GETDiagramBuilder new.
	
	diag lineDiagram
		models: (0 to: 10);
		y: [ :x | x * x ];
		regularAxisAsInteger.
		
	diag open.
	
	index := 2.
	ys := { [ :x | x * x ] . [ :x | x ] . [ :x | x *4 + 5 ] . [ :x | x *8 + 5 ] . [ :x | 100 - (x * x) ] }.
	button := ROLabel elementOn: 'next'.
	button + ROBorder.
	button on: ROMouseClick do: [ :event |  
		diag updateY: (ys at: index).
		index := (index \\ 5) + 1 ].
	
	diag rawView add: button.
	button translateTo: 420 @ 0
!

basicInterfaceExample

	"self basicAnimationExample"

	| diag button ys index paso |
	
	diag := GETDiagramBuilder new.
	
	diag verticalBarDiagram
		models: (0 to: 10);
		y: [ :x | x * x ];
		regularAxis.
	
	diag interaction
		popUpText.	
	
	diag animation
		horizontalScrolling on: paso.

	diag open.
! !

!GETExamples class methodsFor: 'as yet unclassified'!

scatterPlotExample

"	| diag |
	diag := GETDiagramBuilder new.
	
	(diag scatterplot)
		y: #winrate;
		x: #matchesPlayed;
		models: self heros.
		
	^ diag open."
! !

!GETExamples class methodsFor: 'barDiagram'!

horizontalBarExample
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram horizontalBarDiagram
		models: #(10 12 13 200 150 -13 149 -151);
		regularAxis.
	^ diagram open
!

verticalBarCustomLabelExample
	"Each matchesPlayed is an Integer (max ~3.000.000), so matchedPlayed/pi can not be an Integer, the decorator will round it to the nearest Integer"
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: self heros;
		y: [:each | (#matchesPlayed value: each) / (Float pi)];
		valueAxisLine;
		addValueDecorator: (GETRegularLabelDecorator new formatInteger).
		
	^ diagram open
!

verticalBarCustomLabelExample2
	"Each matchesPlayed is an Integer (max ~3.000.000), so matchedPlayed/pi can not be an Integer, the decorator will round it the 2 most significant decimals"
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: self heros;
		y: [:each | (#matchesPlayed value: each) / (Float pi)];
		valueAxisLine;
		addValueDecorator: (GETRegularLabelDecorator new formatTruncatedFloat).
		
	^ diagram open
!

verticalBarExample
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(10 12 13 200 150 -13 149 -151);
		spacing: 1.
	^ diagram open
!

verticalBarExample2
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: self heros;
		y: #matchesPlayed.
		
	^ diagram open
!

verticalBarExample3
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(1 2 3 4 5);
		y: #yourself;
		color: Color blue.
		
	^ diagram open
!

verticalBarExample4
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(1 2 3 4 5);
		y: #yourself;
		color:  [ :v | v odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ].
	^ diagram open
!

verticalBarExample5
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(#asd #sadf #sadasd #asdasdr #adasdd);
		y: #size;
		color:  [ :v | (v size) odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ].
	^ diagram open
!

verticalBarExample6

	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: self heros;
		y: #matchesPlayed;
		color: #faction;
		regularAxis.
		
	diagram interaction
		popUpText: [ :each | each name ].
		
	^ diagram open
!

verticalBarExample7
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: self heros;
		y: #matchesPlayed;
		color: [:each | ((each faction) = 'STR') ifTrue: [ Color red ] ifFalse: [ Color green ] ];
		regularAxis;
		titleLabel: '10 most played Heros by matchesPlayed';
		yAxisLabel: 'Matches Played'.
		
	^ diagram open
!

verticalBarExample8WithNegativeValues
	
	| diagram values |
	values := (1 to: 10) collect: [ :v | 10 atRandom - 5 ].
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: values;
		height: 150;
		color: [:each | each < 0 ifTrue: [ Color red ] ifFalse: [ Color green ] ];
		regularAxis.
	diagram interaction 
		popUpText.
		
	^ diagram open
!

verticalBarExampleAxis
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(1 2 3 4 5);
		y: #yourself;
		color: Color blue;
		regularAxis.
		
	^ diagram open
!

verticalBarInteractionExample
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram) 
		models: #(30 10 20 40).
	
	diag interaction
		strongHighlightWhenOver.
		
	diag open.
!

verticalBarInteractionExample2
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram) 
		models: #(30 10 20 40).
	
	diag interaction
		strongHighlightWhenClick.
		
	diag open.
!

verticalBarInteractionExample3
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram) 
		models: #(30 10 20 40);
		height: 80;
		regularAxis.
	
	diag interaction
		strongHighlightWhenClick;
		popUpText.
		
	diag open
!

verticalBarInteractionExample4
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram)
		y: #winrate;
		models: self heros.
	
	diag interaction
		strongHighlightWhenClick;
		popUpText.
		
	diag open
!

verticalBarInteractionExample5
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram)
		y: #winrate;
		models: self heros.
	
	diag interaction
		popUpText: #winrate.
		
	diag open.
!

verticalBarInteractionExample6
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram)
		y: #winrate;
		models: self heros.
	
	diag interaction
		popUpText: [:each | 'Click me'];
		on: ROMouseClick do: [:each | self inform: 'You clicked on the bars, good one ;)'].
		
	diag open.
!

verticalBarInteractionExample7
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram)
		y: #winrate;
		models: self heros.
	
	diag interaction
		draggable.
		
	diag open.
! !

!GETExamples class methodsFor: 'compositeDiagram'!

composite2Diff

	| builder |
	builder := GETDiagramBuilder new.
	builder compositeDiagram
		add: (GETOrdinaryLineDiagram new 
				models: self heros;
				y: #matchesPlayed;
				color: Color blue);
		add: (GETVerticalBarDiagram new
				models: #(3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000);
				color: Color red);
		regularAxis;
		height: 200.
	builder interaction popUpText.
	builder open
!

composite2Lines

	| builder |
	builder := GETDiagramBuilder new.
	builder compositeDiagram
		add: (GETOrdinaryLineDiagram new 
				models: self heros;
				y: #matchesPlayed;
				color: Color blue);
		add: (GETOrdinaryLineDiagram new
				models: #(3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000);
				color: Color red);
		regularAxis;
		height: 200.
	builder interaction popUpText.
	builder open
!

compositeBasicAxisExample2Bar

	| builder |
	builder := GETDiagramBuilder new.
	builder compositeDiagram
		add: (GETVerticalBarDiagram new 
				models: #(1 2 3 4 5 6 7 8 9);
				color: Color red);
		add: (GETVerticalBarDiagram new
				models: #(9 8 7 6 5 4 3 2 1);
				color: Color blue);
		regularAxis.
		
	builder open
!

compositeBasicExample2Bar

	| builder |
	builder := GETDiagramBuilder new.
	builder compositeDiagram
		add: (GETVerticalBarDiagram new 
				models: #(1 2 3);
				color: Color red);
		add: (GETVerticalBarDiagram new
				models: #(3 2 1);
				color: Color blue).
		
	builder open
!

compositeDifferentScale2Bar

	| builder |
	builder := GETDiagramBuilder new.
	builder compositeDiagram
		add: (GETVerticalBarDiagram new 
				models: #(1 2 3 4 5 6 7 8 9);
				color: Color red);
		add: (GETVerticalBarDiagram new
				models: #(3 2 1 2 3 2 1 2 3);
				color: Color blue);
		regularAxis;
		height: 200.
		
	builder interaction draggable.
	
	builder open
! !

!GETExamples class methodsFor: 'coolExamples'!

GETinGET

	"self GETinGET"
"
	| diagBuilder classes view container rawView |

	classes := ROShape withAllSubclasses.
	
	rawView := ROView new.
	view := ROMondrianViewBuilder view: rawView.
	rawView @ RODraggable.
	
	container := ROBorder element.
	container translateTo: (0 @ 250).
	container resizeStrategy: (ROShrinkingParent new padding: (5 @ 5) ).
	
	diagBuilder := GETDiagramBuilder new.
	diagBuilder verticalBarDiagram
		models: classes;
		y: #numberOfLinesOfCode;
		height: 200;
		yAxisLabel: 'LoC';
		regularAxisAsInteger.
	
	diagBuilder interaction 
		strongHighlightWhenOver;
		popUpText;
		on: ROMouseClick do: [ :event | | diagMethodBuilder |
				diagMethodBuilder := GETDiagramBuilder new.
				diagBuilder verticalBarDiagram
					models: event model methods;
					y: #linesOfCode.
				
				diagMethodBuilder openIn: container.
				container addAll: diagMethodBuilder diagram roElements].
			
	diagBuilder openIn: view.
	view add: container.
	view open"
!

GETinRO

	| rawView view |

	rawView := ROView new.
	view := ROMondrianViewBuilder view: rawView.
	
	view nodes: ROShape withAllSubclasses forEach: [ :each |
		| diag |

		diag := GETDiagramBuilder new.
		
		diag verticalBarDiagram
			models: each methods; 
			y: #linesOfCode;
			height: 50;
			barWidth: 1;
			color: [ :method | method linesOfCode > 10 ifTrue: [ Color red ] ].
			
		diag interaction
			popUpText: [ :m | m printString];
			on: ROMouseClick do: [ :e | e model browse].
			
		diag openIn: view raw].
		
	view edgesFrom: #superclass.
	view treeLayout.
	view open
!

roassalHierarchy

	"self roassalHierarchy"

	| view diagBuilder classes container el shape hierarchy |

	"Prepare the data"
	classes := ROShape withAllSubclasses.
	
	view := ROView new.
	view @ RODraggable.
	
	hierarchy := ROBorder element.
	hierarchy addAll: (ROBox elementsOn: classes).
	ROLine buildEdgesFromElements: hierarchy elements from: #superclass to: #yourself.
	ROTreeLayout on: hierarchy elementsNotEdge edges: hierarchy elementsAsEdge.
	view add: hierarchy.
	hierarchy translateTo: 530 @ 0.
	
	container := ROBorder element.
	container translateTo: (0 @ 250).
	container resizeStrategy: (ROShrinkingParent new padding: (5 @ 5) ).
	
	diagBuilder := GETDiagramBuilder new.
	diagBuilder verticalBarDiagram
		models: classes;
		y: #numberOfLinesOfCode;
		height: 200;
		yAxisLabel: 'LoC';
		regularAxisAsInteger.
	
	diagBuilder interaction 
		strongHighlightWhenOver;
		popUpText;
		on: ROMouseClick do: [ :event | 
			container elements do: #remove.
			event model methods do: [ :cm | 
				shape := ROBox new extent: 8 @ 8.
				cm linesOfCode > 10 ifTrue: [ shape color: Color red ].
				el := shape elementOn: cm.
				el @ (ROPopup text: [ :e | e getSource ]).
				el @ (ROMenuActivable new 
				item: 'browse' action: [ :e | e model browse ]).
	
				container add: el ].
			
			ROGridLayout on: container elements.
			container translateTo: (0 @ 250)];
		
		on: ROMouseEnter do: [ :event |
			ROBlink highlight: (hierarchy elementFromModel: event model) ];
		on: ROMouseLeave do: [ :event |
			ROBlink unhighlight: (hierarchy elementFromModel: event model) ].

	diagBuilder openIn: view.

	view add: container.
	view openInWindowSized: 1000 @ 550
!

ubercoolAnimationExample

	"self ubercoolAnimationExample"

	| diag button ys index |
	
	diag := GETDiagramBuilder new.
	
	diag lineDiagram
		models: (0 to: (2 * Float pi) by: 0.05);
		y: [ :x | x sin ];
		height: 200;
		yAxisLabel: 'sin/cos sequence';
		regularAxis.
		
	diag open.
	
	index := 2.
	ys := { [ :x | x sin ] . [ :x | x cos ] .  [ :x | x sin negated ] . [ :x | x cos negated ] }.
	button := ROLabel elementOn: 'next'.
	button + ROBorder.
	button on: ROMouseClick do: [ :event |  
		diag updateY: (ys at: index).
		index := (index \\ 4) + 1 ].
	
	diag rawView add: button.
	button translateTo: -20 @ 250
! !

!GETExamples class methodsFor: 'lineDiagram'!

lineBasicExample

	| diag |
	diag := GETDiagramBuilder new.
	(diag lineDiagram)
		models: (0 to: 100);
		y: [ :x | x*x ].
		
	diag open
!

lineBasicExample2

	| diag |
	diag := GETDiagramBuilder new.
	diag lineDiagram
		height: 200;
		models: (-20 to: 20 by: 0.05);
		y: [ :x | ((x negated) exp)*((100*x) cos) ];
		color: Color black;
		regularAxisAsInteger.
	diag interaction popUpText.
	diag open
!

lineBasicExample3

	| diag |
	diag := GETDiagramBuilder new.
	diag lineDiagram
		height: 200;
		models: (0 to: 100);
		y: [ :x | x*x ];
		x: [:x | x + 100 ];
		regularAxis. 
	diag interaction popUpText.
	diag open
!

lineBasicExample4

	| diag |
	diag := GETDiagramBuilder new.
	diag lineDiagram
		height: 200;
		models: (-20 to: 20 by: 0.05);
		y: [ :x | x*x ];
		color: Color black;
		regularAxisAsInteger.
	diag interaction popUpText.
	diag open
!

lineBasicExampleWithCustomDotSize

	| diag |
	diag := GETDiagramBuilder new.
	(diag lineDiagram)
		models: (0 to: 100);
		y: [ :x | x*x ];
		dotSize: 10.
		
	diag open
!

lineExample

	| diag |
	diag := GETDiagramBuilder new.
	diag lineDiagram
		height: 200;
		models: (-2* Float pi to: 2 * Float pi by: 0.01);
		y: [ :x | ((x * Float pi) sin * (x squared * Float pi) cos) * x ];
		regularAxis.
		
	diag interaction popUpText.
	diag open
!

lineExample2

	| diag |
	diag := GETDiagramBuilder new.
	diag lineDiagram 
		height: 200;
		models: (0 to: 50);
		y: [ :x | -1 ** x ];
		regularAxis.
		
	diag interaction popUpText.
	diag open
!

ordinaryLineExample

	| diag |
	
	diag := GETDiagramBuilder new.
	diag ordinaryLineDiagram
		y: #loc;
		height: 200;
		"identifier: #versionNumber;"
		yAxisLabel: 'LoC';
		"rotatedLabels: true;"
		regularAxis; "valueAxis;"
		color: Color blue;
		"deviationValue: (self versions collect: #loc) average;"
		"deviationDescription: 'average';"
		"preferredAxisMinY: (self versions minValue: #loc);"
		models: self versions.
	
	^ diag open
! !

!GETExamples class methodsFor: 'pieDiagram'!

pieExample

"	| diag |
	diag := GETDiagramBuilder new.
	(diag pieDiagram) models: #(30 10 20 40).
	
	^ diag open."
! !

!GETExamples class methodsFor: 'support'!

heros
	
	| heros |
	heros := OrderedCollection new.
	heros
		add:
				((DotaHero new)
						name: 'Pudge';
						faction: 'STR';
						winrate: 47.48;
						matchesPlayed: 3078298);
		add:
				((DotaHero new)
						name: 'Drow Ranger';
						faction: 'AGI';
						winrate: 53.41;
						matchesPlayed: 2653449);
		add:
				((DotaHero new)
						name: 'Sniper';
						faction: 'AGI';
						winrate: 48.04;
						matchesPlayed: 2459542);
		add:
				((DotaHero new)
						name: 'Bounty Hunter';
						faction: 'AGI';
						winrate: 46.85;
						matchesPlayed: 2236704);
		add:
				((DotaHero new)
						name: 'Riki';
						faction: 'AGI';
						winrate: 51.75;
						matchesPlayed: 2193433);
		add:
				((DotaHero new)
						name: 'LifeStealer';
						faction: 'STR';
						winrate: 51.81;
						matchesPlayed: 2079754);
		add:
				((DotaHero new)
						name: 'Phantom Lancer';
						faction: 'AGI';
						winrate: 53.63;
						matchesPlayed: 1960633);
		add:
				((DotaHero new)
						name: 'Spirit Breaker';
						faction: 'STR';
						winrate: 55.26;
						matchesPlayed: 1873585);
		add:
				((DotaHero new)
						name: 'Natures Prophet';
						faction: 'INT';
						winrate: 47.32;
						matchesPlayed: 1852062);
		add:
				((DotaHero new)
						name: 'Juggernaut';
						faction: 'AGI';
						winrate: 48.37;
						matchesPlayed: 1813474).
	^heros.
!

versions
	
	| versions |
	versions := OrderedCollection new.
	versions
		add:
				((GETVersion new)
						versionNumber: '1.0';
						loc: 3346);
		add:
				((GETVersion new)
						versionNumber: '1.1';
						loc: 3455);
		add:
				((GETVersion new)
						versionNumber: '1.2';
						loc: 3755);
		add:
				((GETVersion new)
						versionNumber: '1.3';
						loc: 4674);
		add:
				((GETVersion new)
						versionNumber: '1.4';
						loc: 4738);
		add:
				((GETVersion new)
						versionNumber: '1.5';
						loc: 4378);
		add:
				((GETVersion new)
						versionNumber: '1.6';
						loc: 4890);
		add:
				((GETVersion new)
						versionNumber: '1.7';
						loc: 4908);
		add:
				((GETVersion new)
						versionNumber: '1.8';
						loc: 5013).
	^ versions
! !

Object subclass: #GETVersion
	instanceVariableNames: 'loc versionNumber'
	package: 'Graph-ET-Examples'!

!GETVersion methodsFor: 'accessing'!

loc
	^ loc
!

loc: anObject
	loc := anObject
!

versionNumber
	
	^ versionNumber
!

versionNumber: anObject
	
	versionNumber := anObject
! !

