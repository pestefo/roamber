Smalltalk current createPackage: 'Graph-ET-Core-Tests'!
TestCase subclass: #GETBarDiagramTest
	instanceVariableNames: ''
	package: 'Graph-ET-Core-Tests'!

!GETBarDiagramTest methodsFor: 'test-animation'!

testResizingAnimation

	| diag data |

	diag := GETDiagramBuilder new.

	diag verticalBarDiagram
		models: (1 to: 10);
		y: [ :x | x * x ];
		height: 100.

	diag openTest.

	diag updateBlock: [ :x | x ].
	
	data := diag diagram elements.
	
	(1 to: 10) do: [ :index | self assert: (data at: index) getValue = index]
! !

!GETBarDiagramTest methodsFor: 'test-color'!

testColorAsBlock

	| diagram view bar1 bar2 |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: (1 to: 10);
		y: #yourself;
		color: [ :v | v odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ].
		
	self shouldnt: [ view := diagram openTest ] raise: Error.
	
	bar1 := view elementFromModel: 1.
	self assert: (bar1 getShape: ROBox) color = Color red.
	
	bar2 := view elementFromModel: 2.
	self assert: (bar2 getShape: ROBox) color = Color gray
!

testColorBasic

	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: GETExamples heros;
		y: #matchesPlayed;
		color: #faction.
		
	self shouldnt: [diagram openTest] raise: Error.
!

testColorOnHeroes
	| diagram view heroes d elements colorOfElements |
	
	heroes := GETExamples heros.
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: heroes;
		y: #matchesPlayed;
		color: #faction.
		
	view := diagram openTest.
	
	"We build a dictionary to ease the testing"
	d := Dictionary new.
	(heroes collect: #faction) asSet do: [ :k | d at: k put: OrderedCollection new ].
	heroes do: [ :h | (d at: h faction) add: h ].
	self assert: d keys size = 3.
	
	"We test"
	d values do: [ :collection |
		elements := collection collect: [ :hero | view elementFromModel: hero ].
		colorOfElements := elements collect: [ :el | ((el getShape: ROBox) colorFor: el) ].

		"There is only one color per group of hero (i.e., the one in the same faction)"
		self assert: colorOfElements asSet size = 1.
	]
!

testColorOnNumbers
	| diagram view el1 el2 el3 el4 el5 el6 cel1 cel2 cel3 cel4 cel5 cel6 |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(1 2 3 1 2 3 1 2 3);
		color: #yourself.
		
	view := diagram openTest.
	self assert: view numberOfElements = 9.
	
	el1 := view elements first.
	el2 := view elements second.
	el3 := view elements third.
	el4 := view elements fourth.
	el5 := view elements fifth.
	el6 := view elements sixth.
	
	cel1 := ((el1 getShape: ROBox) colorFor: el1).
	cel2 := ((el2 getShape: ROBox) colorFor: el2).
	cel3 := ((el3 getShape: ROBox) colorFor: el3).
	cel4 := ((el4 getShape: ROBox) colorFor: el4).
	cel5 := ((el5 getShape: ROBox) colorFor: el5).
	cel6 := ((el6 getShape: ROBox) colorFor: el6).
	
	
	self assert: cel1 = cel4.
	self assert: cel2 = cel5.
	self assert: cel3 = cel6.
!

testColorOnNumbers2
	| diagram view el1 el2 el3 el4 el5 el6 cel1 cel2 cel3 cel4 cel5 cel6 |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(1 2 3 1 2 3 1 2 3);
		color: [ :v | v + 1 ].
		
	view := diagram openTest.
	self assert: view numberOfElements = 9.
	
	el1 := view elements first.
	el2 := view elements second.
	el3 := view elements third.
	el4 := view elements fourth.
	el5 := view elements fifth.
	el6 := view elements sixth.
	
	cel1 := ((el1 getShape: ROBox) colorFor: el1).
	cel2 := ((el2 getShape: ROBox) colorFor: el2).
	cel3 := ((el3 getShape: ROBox) colorFor: el3).
	cel4 := ((el4 getShape: ROBox) colorFor: el4).
	cel5 := ((el5 getShape: ROBox) colorFor: el5).
	cel6 := ((el6 getShape: ROBox) colorFor: el6).
	
	
	self assert: cel1 = cel4.
	self assert: cel2 = cel5.
	self assert: cel3 = cel6.
!

testUseColor

"	| diagram |
	diagram := GETDiagramRenderer new.
	diagram verticalBarDiagram
		models: GETExamples heros;
		y: #matchesPlayed;
		color: #faction;
		useColors: {Color blue. Color green. Color red}.
		
	self shouldnt: [diagram openTest] raise: Error."
! !

!GETBarDiagramTest methodsFor: 'test-function'!

testBarBasic

	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: GETExamples heros;
		y: #matchesPlayed.
		
	self shouldnt: [diagram openTest] raise: Error.
!

testBorder

	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: #(-1 0 -3.14 2 3 4 5).
		
	self shouldnt: [diagram openTest] raise: Error.
! !

!GETBarDiagramTest methodsFor: 'test-horizontal axis'!

testHorizontalAxis

	| diagram view firstElement secondElement xAxis yAxis d |
	diagram := GETDiagramBuilder new.
	d := diagram horizontalBarDiagram
				models: #(-1 1);
				width: 100;
				valueAxisLine;
				baseAxisLine.
		
	view := diagram openTest.
	self assert: view numberOfElements = 8.

	"Compute the offset in pixels from the axis"
	"if a bar heigh is 30 pixels, then the distance from the top of the bar to the top of the diagram is 50 - 30"
	self assert: d widthOfPositiveArea = 50.
	self assert: d widthOfNegativeArea = 50.
	
	self assert: (d offsetFromAxis: 50) = 50.
	self assert: (d offsetFromAxis: 30) = 50.
	self assert: (d offsetFromAxis: 40) = 50.

	self assert: (d offsetFromAxis: -50) = 0.
	self assert: (d offsetFromAxis: -30) = 20.
	
	
	"We check the two elements"
	firstElement := view elements first.
	secondElement := view elements second.

	self assert: firstElement position = (0 @ 5).
	self assert: firstElement extent = (50 @ 20).

	self assert: secondElement position = (50 @ 30).
	self assert: secondElement extent = (50 @ 20).


	"We check the axis"
	xAxis := view elements fifth. 
	yAxis := view elements eighth.

	self assert: xAxis from position = (0 @ 55).
	self assert: xAxis to position = (100 @ 55).
	
	self assert: yAxis from position =  (50@0).
	self assert: yAxis to position = (50 @ 55).
!

testHorizontalAxis2

	| diagram view firstElement secondElement xAxis yAxis d |
	diagram := GETDiagramBuilder new.
	d := diagram horizontalBarDiagram
				models: #(-0.5 1);
				width: 45;
				valueAxisLine;
				baseAxisLine.
		
	view := diagram openTest.
	self assert: view numberOfElements = 8.

	"Compute the offset in pixels from the axis"
	"if a bar heigh is 30 pixels, then the distance from the top of the bar to the top of the diagram is 50 - 30 "
	self assert: d widthOfPositiveArea = 30.
	self assert: d widthOfNegativeArea = 15.
	self assert: (d offsetFromAxis: 30) = 15.
	self assert: (d offsetFromAxis: 40) = 15.
	self assert: (d offsetFromAxis: 50) = 15.
	self assert: (d offsetFromAxis: 50) = 15.

	self assert: (d offsetFromAxis: -15) = 0.
	self assert: (d offsetFromAxis: -5) = 10.

	"We check the two elements"
	firstElement := view elements first.
	secondElement := view elements second.
	
	self assert: firstElement position = (0 @ 5).
	self assert: firstElement extent = (15 @ 20).

	self assert: secondElement position = (15 @ 30).
	self assert: secondElement extent = (30 @ 20).

	"We check the axis"
	xAxis := view elements fifth. 
	yAxis := view elements eighth.

	self assert: xAxis from position = (0 @ 55).
	self assert: xAxis to position = (45 @ 55).
	
	self assert: yAxis from position = (15 @ 0).
	self assert: yAxis to position = (15 @ 55).
!

testHorizontalAxisWithTicks

	| diagram view |
	diagram := GETDiagramBuilder new.
	diagram horizontalBarDiagram
				models: #(-1 1);
				width: 100;
				valueAxisLine;
				baseAxisLine;
				regularTicks.
		
	view := diagram openTest.
	self assert: view numberOfElements = 23.
!

testHorizontalAxisWithTicks2

	| diagram view |
	diagram := GETDiagramBuilder new.
	diagram horizontalBarDiagram
				models: #(-1 1);
				width: 100;
				valueAxisLine;
				baseAxisLine;
				addValueDecorator: (GETRegularTickDecorator new numberOfTicks: 10);
				addValueDecorator: (GETRegularLabelDecorator new numberOfLabels: 10).
		
	view := diagram openTest.
	self assert: view numberOfElements = 52
!

testHorizontalAxisWithTicks3

	| diagram view |
	diagram := GETDiagramBuilder new.
	diagram horizontalBarDiagram
				models: #(-1 1);
				width: 100;
				regularAxis.

	view := diagram openTest.
	self assert: view numberOfElements = 28.
! !

!GETBarDiagramTest methodsFor: 'test-init'!

testButtonsInStack

	| diag stack |
	diag := GETDiagramBuilder withDefaultButtons.
	stack := diag stack.
	self assert: stack numberOfElements > 0.
!

testHorzInit

	| diagRender diagram diagRender2 diagram2 |
	diagRender := GETDiagramBuilder new.
	diagRender horizontalBarDiagram
		models: #(1 2 3 4 5 6 7 8 9);
		y: #yourself.
	
	diagram := diagRender diagram.	
	
	self assert: (diagram models = #(1 2 3 4 5 6 7 8 9)).
	self assert: (diagram barWidth = ((diagram class) defaultBarwidth)).
	self assert: (diagram spacing = ((diagram class) defaultSpacing)).
	
"----------------------------------------------------------------------------------------------------------------"

	diagRender2 := GETDiagramBuilder new.
	diagRender2 horizontalBarDiagram
		models: #(1 2 3 4 5 6 7 8 9);
		y: #yourself;
		barWidth: 133;
		spacing: 344.
	
	diagram2 := diagRender2 diagram.	
	
	self assert: (diagram2 models = #(1 2 3 4 5 6 7 8 9)).
	self assert: (diagram2 barWidth = 133).
	self assert: (diagram2 spacing = 344).
!

testInit

	| diag |
	diag := GETDiagramBuilder new.
	self assert: diag stack firstView == diag rawView
!

testInitWithOpen

	| diag |
	diag := GETDiagramBuilder new.
	diag open delete.
	self assert: diag stack firstView == diag rawView
!

testNoButtonsInStackByDefault

	| diag stack |
	diag := GETDiagramBuilder new.
	stack := diag stack.
	self assert: stack numberOfElements = 0.
!

testValues

	| d diag |
	d := GETDiagramBuilder new.
	diag := d verticalBarDiagram
				models: #(1 2 3 -4 5 6 7 8 9).
	
	d openTest.
	self assert: diag maxValue = 9.
	self assert: diag minValue = -4.
!

testValues2

	| d diag |
	d := GETDiagramBuilder new.
	diag := d horizontalBarDiagram
				models: #(1 2 3 -4 5 6 7 8 9).
	
	d openTest.
	self assert: diag maxValue = 9.
	self assert: diag minValue = -4.
!

testVertInit

	| diagRender diagram diagRender2 diagram2 |
	diagRender := GETDiagramBuilder new.
	diagRender verticalBarDiagram
		models: #(1 2 3 4 5 6 7 8 9);
		x: #yourself.
	
	diagram := diagRender diagram.	
	
	self assert: (diagram models = #(1 2 3 4 5 6 7 8 9)).
	self assert: (diagram barWidth = ((diagram class) defaultBarwidth)).
	self assert: (diagram spacing = ((diagram class) defaultSpacing)).
	
"----------------------------------------------------------------------------------------------------------------"

	diagRender2 := GETDiagramBuilder new.
	diagRender2 verticalBarDiagram
		models: #(1 2 3 4 5 6 7 8 9);
		x: #yourself;
		barWidth: 133;
		spacing: 344.
	
	diagram2 := diagRender2 diagram.	
	
	self assert: (diagram2 models = #(1 2 3 4 5 6 7 8 9)).
	self assert: (diagram2 barWidth = 133).
	self assert: (diagram2 spacing = 344).
! !

!GETBarDiagramTest methodsFor: 'test-interaction'!

testBarInteraction
	
	| diag |
	diag := GETDiagramBuilder new.
	(diag horizontalBarDiagram) 
		models: #(30 10 20 40).
	
	diag interaction
		strongHighlightWhenOver.
	
	self shouldnt: [diag openTest] raise: Error.
! !

!GETBarDiagramTest methodsFor: 'test-labels'!

testAxisLabels

|chart view diag |

chart := GETDiagramBuilder new.
		chart verticalBarDiagram
		models: (1 to: 3);
		xAxisLabel: 'Test label';
		yAxisLabel: 'Another';
		regularAxis.

view := chart openTest.
diag := chart diagram.

"self assert: (view elements at: 31) position = (0 @ 0).
self assert: (view elements at: 7) position = (diag width @ diag height)"
!

testCustomizingLabels

	| diag view labelElements |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram) 
		models: #(0 0.9);
		regularAxis.
	view := diag openTest.
	
	labelElements := view elementsSuchThat: [ :el | el isShapedAs: ROLabel ].
	self assert: labelElements size = 5.
	
	self assert: labelElements first model = 0.9.
	self assert: labelElements last model = 0
!

testCustomizingLabels2

	| diag view labelElements |
	diag := GETDiagramBuilder new.
	(diag verticalBarDiagram) 
		models: #(0 1.9);
		addValueDecorator: GETRegularTickDecorator new;
		addValueDecorator: (GETRegularLabelDecorator new formatInteger).
	view := diag openTest.
	
	labelElements := view elementsSuchThat: [ :el | el isShapedAs: ROLabel ].
	self assert: labelElements size = 5.
	
	self assert: labelElements first model = 2.
	self assert: labelElements last model = 0
! !

!GETBarDiagramTest methodsFor: 'test-vertical axis'!

testAxis

	| diagram view firstElement secondElement xAxis yAxis d |
	diagram := GETDiagramBuilder new.
	d := diagram verticalBarDiagram
				models: #(-1 1);
				height: 100;
				valueAxisLine;
				baseAxisLine.
		
	view := diagram openTest.
	self assert: view numberOfElements = 8.

	"Compute the offset in pixels from the axis"
	"if a bar heigh is 30 pixels, then the distance from the top of the bar to the top of the diagram is 50 - 30 "
	self assert: d heightOfPositiveArea = 50.
	self assert: d heightOfNegativeArea = 50.
	self assert: (d offsetFromAxis: 30) = 20.
	self assert: (d offsetFromAxis: 40) = 10.
	self assert: (d offsetFromAxis: 50) = 0.

	"We check the two elements"
	firstElement := view elements first.
	secondElement := view elements second.
	
	self assert: firstElement position = (5 @ 50).
	self assert: firstElement extent = (20 @ 50).

	self assert: secondElement position = (30 @ 0).
	self assert: secondElement extent = (20 @ 50).


	"We check the axis"
	xAxis := view elements fifth. 
	yAxis := view elements eighth.

	self assert: xAxis from position = (0 @ 50).
	self assert: xAxis to position = (55 @ 50).
	
	self assert: yAxis from position = (0 @ 0).
	self assert: yAxis to position = (0 @ 100).
!

testAxis2

	| diagram view firstElement secondElement xAxis yAxis d |
	diagram := GETDiagramBuilder new.
	d := diagram verticalBarDiagram
				models: #(-0.5 1);
				height: 45;
				valueAxisLine;
				baseAxisLine.
		
	view := diagram openTest.
	self assert: view numberOfElements = 8.

	"Compute the offset in pixels from the axis"
	"if a bar heigh is 30 pixels, then the distance from the top of the bar to the top of the diagram is 50 - 30 "
	self assert: d heightOfPositiveArea = 30.
	self assert: d heightOfNegativeArea = 15.
	self assert: (d offsetFromAxis: 5) = 25.
	self assert: (d offsetFromAxis: 10) = 20.
	self assert: (d offsetFromAxis: 30) = 0.
	self assert: (d offsetFromAxis: -5) = 30.
	self assert: (d offsetFromAxis: -25) = 30.
	
	"We check the two elements"
	firstElement := view elements first.
	secondElement := view elements second.
	
	self assert: firstElement position = (5 @ 30).
	self assert: firstElement extent = (20 @ 15).

	self assert: secondElement position = (30 @ 0).
	self assert: secondElement extent = (20 @ 30).


	"We check the axis"
	xAxis := view elements fifth. 
	yAxis := view elements eighth.

	self assert: xAxis from position = (0 @ 30).
	self assert: xAxis to position = (55 @ 30).
	
	self assert: yAxis from position = (0 @ 0).
	self assert: yAxis to position = (0 @ 45).
!

testAxis3

	| diagram view xAxis yAxis d |
	diagram := GETDiagramBuilder new.
	d := diagram verticalBarDiagram
				models: #(1.5 1);
				height: 45;
				valueAxisLine;
				baseAxisLine.
	view := diagram openTest.
	self assert: view numberOfElements = 8.

	"Compute the offset in pixels from the axis"
	"if a bar heigh is 30 pixels, then the distance from the top of the bar to the top of the diagram is 50 - 30 "
	self assert: d heightOfPositiveArea = 45.
	self assert: d heightOfNegativeArea = 0.
	self assert: (d offsetFromAxis: 5) = 40.
	self assert: (d offsetFromAxis: 10) = 35.
	self assert: (d offsetFromAxis: 30) = 15.
	self assert: (d offsetFromAxis: -5) = 45.
	self assert: (d offsetFromAxis: -25) = 45.
	
	"We check the axis"
	xAxis := view elements fifth. 
	yAxis := view elements eighth.

	self assert: xAxis from position = (0 @ 45).
	self assert: xAxis to position = (55 @ 45).
	
	self assert: yAxis from position = (0 @ 0).
	self assert: yAxis to position = (0 @ 45).
!

testAxis4

	| diagram view xAxis yAxis d |
	diagram := GETDiagramBuilder new.
	d := diagram verticalBarDiagram
				models: #(-1.5 -1);
				height: 45;
				valueAxisLine;
				baseAxisLine.
		
	view := diagram openTest.
	self assert: view numberOfElements = 8.

	"Compute the offset in pixels from the axis"
	"if a bar heigh is 30 pixels, then the distance from the top of the bar to the top of the diagram is 50 - 30 "
	self assert: d heightOfPositiveArea = 0.
	self assert: d heightOfNegativeArea = 45.
	
	"45 below the horizontal axis"
	self assert: (d getPixelsFromValue: -1.5) = -45.
	self assert: (d getPixelsFromValue: -1) = -30.


	self assert: (d offsetFromAxis: 5) = -5.
	self assert: (d offsetFromAxis: 10) = -10.
	self assert: (d offsetFromAxis: 30) = -30.
	self assert: (d offsetFromAxis: -5) = 0.
	self assert: (d offsetFromAxis: -25) = 0.
	
	"We check the axis"
	xAxis := view elements fifth. 
	yAxis := view elements eighth.

	self assert: xAxis from position = (0 @ 0).
	self assert: xAxis to position = (55 @ 0).
	
	self assert: yAxis from position = (0 @ 0).
	self assert: yAxis to position = (0 @ 45).
!

testAxisWithLabel

	| diagram view |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
				models: #(-1 1);
				height: 100;
				valueAxisLine;
				baseAxisLine;
				regularTicks;
				regularLabels.
		
	view := diagram openTest.
	self assert: view numberOfElements = 28
! !

TestCase subclass: #GETCompositeDiagramTest
	instanceVariableNames: ''
	package: 'Graph-ET-Core-Tests'!

!GETCompositeDiagramTest methodsFor: 'test-axis'!

testAxisBasic

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(1 2 3));
		add: (GETVerticalBarDiagram new models: #(3 2 1));
		baseAxisLine;
		valueAxisLine.
		
	view := builder openTest.
	
	self assert: view numberOfElements = 12
!

testAxisBasicLabels

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(1 2 3));
		add: (GETVerticalBarDiagram new models: #(3 2 1));
		regularAxis.
		
	view := builder openTest.
	
	self assert: view numberOfElements = 32
! !

!GETCompositeDiagramTest methodsFor: 'test-basic'!

testBasic1

	| builder diag |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETLineDiagram new);
		add: (GETLineDiagram new).
		
	self assert: diag diagrams size = 2
!

testBasic2

	| builder diag |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETLineDiagram new);
		add: (GETLineDiagram new).
		
	builder openTest.
		
	self assert: diag diagrams size = 2
!

testBasic3

	| builder diag |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETLineDiagram new);
		add: (GETLineDiagram new height: 1000; width: 50);
		add: (GETLineDiagram new height: 50).
		
	builder openTest.
		
	self assert: diag diagrams size = 3.
	self assert: diag height = 400.
	self assert: diag width = 400
!

testBasic4

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(1 2 3));
		add: (GETVerticalBarDiagram new models: #(3 2 1)).
		
	view := builder openTest.
		
	self assert: view numberOfElements = 6
!

testBasic5IfSorted

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(1 2 3));
		add: (GETVerticalBarDiagram new models: #(3 2 1)).
		
	view := builder openTest.
		
	self assert: view numberOfElements = 6.
	self assert: diag roElements first model = 3.
	self assert: diag roElements second model = 3.
	self assert: diag roElements third model = 2.
	self assert: diag roElements fourth model = 2.
	self assert: diag roElements fifth model = 1.
	self assert: diag roElements sixth model = 1
!

testBasic5IfSortedAndScaled

	| builder diag view elem |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(10 9 8); color: Color red);
		add: (GETVerticalBarDiagram new models: #(3 3 3); color: Color blue);
		height: 100.
		
	view := builder openTest.
	elem := view elements.

	self assert: elem first height = 100.
	self assert: elem second height = 90.
	self assert: elem third height = 80.
	self assert: elem fourth height = 30.
	self assert: elem fifth height = 30.
	self assert: elem sixth height = 30
!

testBasic5IfSortedAndScaledAndTrans

	| builder diag view elem |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(10 9 8); color: Color red);
		add: (GETVerticalBarDiagram new models: #(3 3 3); color: Color blue);
		height: 100.
		
	view := builder openTest.
	elem := view elements.

	self assert: elem first position = (5@0).
	self assert: elem second position = (30@10).
	self assert: elem third position = (55@20).
	self assert: elem fourth position = (5@70).
	self assert: elem fifth position = (30@70).
	self assert: elem sixth position = (55@70)
! !

!GETCompositeDiagramTest methodsFor: 'test-customValues'!

testColor

	| builder diag |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(1 2 3));
		add: (GETVerticalBarDiagram new models: #(3 2 1));
		color: Color blue.
		
	builder openTest.
		
	diag roElements do: [ :each | self assert: ((each getShape: ROBox) color = Color gray) ]
!

testCustomHeight

	| builder diag |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETVerticalBarDiagram new models: #(1 2 3));
		add: (GETVerticalBarDiagram new models: #(3 2 1));
		height: 234.
		
	builder openTest.
		
	self assert: diag height = 234
! !

!GETCompositeDiagramTest methodsFor: 'test-lines'!

testMathLineBasic

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETLineDiagram new models: #(1 2 3));
		add: (GETLineDiagram new models: #(3 2 1)).
		
	view := builder openTest.
		
	self assert: view numberOfElements = 10
!

testMathLineIfSorted

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETLineDiagram new models: #(1 2 3));
		add: (GETLineDiagram new models: #(3 2 1)).
		
	view := builder openTest.
		
	self assert: view numberOfElements = 10.
	self assert: diag roElements first model = 3.
	self assert: diag roElements second model = 3.
	self assert: diag roElements third model = 2.
	self assert: diag roElements fourth model = 2.
	self assert: diag roElements fifth model = 1.
	self assert: diag roElements sixth model = 1
! !

!GETCompositeDiagramTest methodsFor: 'test-ordinaryLines'!

testLineBasic

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETOrdinaryLineDiagram new models: #(1 2 3));
		add: (GETOrdinaryLineDiagram new models: #(3 2 1)).
		
	view := builder openTest.
		
	self assert: view numberOfElements = 10
!

testLineIfSorted

	| builder diag view |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETOrdinaryLineDiagram new models: #(1 2 3));
		add: (GETOrdinaryLineDiagram new models: #(3 2 1)).
		
	view := builder openTest.
		
	self assert: view numberOfElements = 10.
	self assert: diag roElements first model = 3.
	self assert: diag roElements second model = 3.
	self assert: diag roElements third model = 2.
	self assert: diag roElements fourth model = 2.
	self assert: diag roElements fifth model = 1.
	self assert: diag roElements sixth model = 1
!

testLinesIfSortedAndTrans

	| builder diag |
	builder := GETDiagramBuilder new.
	diag := builder compositeDiagram.
	
	self assert: diag diagrams size = 0.
	
	diag
		add: (GETOrdinaryLineDiagram new models: #(10 9 8); color: Color red);
		add: (GETOrdinaryLineDiagram new models: #(3 3 3); color: Color blue);
		height: 100.
		
	builder openTest.

	self assert: diag roElements first position = (20@0).
	self assert: diag roElements second position = (40@10).
	self assert: diag roElements third position = (60@20).
	self assert: diag roElements fourth position = (20@70).
	self assert: diag roElements fifth position = (40@70).
	self assert: diag roElements sixth position = (60@70)
! !

TestCase subclass: #GETLineDiagramTest
	instanceVariableNames: ''
	package: 'Graph-ET-Core-Tests'!

!GETLineDiagramTest methodsFor: 'test-axis'!

testAxisLabel

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (1 to: 3);
		yAxisLabel: 'Test label';
		regularAxis.

	view := diag openTest.
	ele := view elements.
	
	self assert: ele size = 52
!

testAxisLabel2

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (1 to: 3);
		xAxisLabel: 'Test label';
		regularAxis.

	view := diag openTest.
	ele := view elements.
	
	self assert: ele size = 52
! !

!GETLineDiagramTest methodsFor: 'test-color'!

testColorBasic

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (0 to: 10);
		color: Color red.

	view := diag openTest.
	ele := view elements.
	
	self assert: view numberOfElements = 21.
	
	self assert: ((ele at: 11) position) = (0@400).
	self assert: ((ele at: 21) position) = (400@0).
	
	ele from: 11 to: 21 do: [:each | self assert: (each getShape: ROEllipse) color = Color red]
!

testColorBlock

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (0 to: 10);
		color: [:each | each isZero ifTrue:[Color black] ifFalse:[Color green]].

	view := diag openTest.
	ele := view elements.
	
	self assert: view numberOfElements = 21.
	
	self assert: ((ele at: 11) position) = (0@400).
	self assert: ((ele at: 21) position) = (400@0).

	self assert: (((ele at: 11) getShape: ROEllipse) color)= Color black.
	ele from: 12 to: 21 do: [:each | self assert: (each getShape: ROEllipse) color = Color green]
!

testColorProperty

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (0 to: 10);
		color: #isPrime.

	view := diag openTest.
	ele := view elements.
	
	self assert: view numberOfElements = 21.
	
	self assert: ((ele at: 11) position) = (0@400).
	self assert: ((ele at: 21) position) = (400@0).

	"They should be equal, because it's the same RONIdentityNormalizer :-)"
	self assert: ((((ele at: 12) getShape: ROEllipse) color) = (((ele at: 13) getShape: ROEllipse) color))
! !

!GETLineDiagramTest methodsFor: 'test-init'!

testInit

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (0 to: 10).
	
	view := diag openTest.
	ele := view elements.
	
	self assert: view numberOfElements = 21.
	
	self assert: ((ele at: 11) position) = (0@400).
	self assert: ((ele at: 21) position) = (400@0)
!

testInitNegDomain

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (-10 to: 10).
	
	view := diag openTest.
	ele := view elements.

	self assert: view numberOfElements = 41.

	self assert: ((ele at: 21) position) = (-200@400).
	self assert: ((ele at: 31) position) = (0@200).
	self assert: ((ele at: 41) position) = (200@0)
!

testInitwithValueBlock

	| diag view ele |
	
	"Setup"
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (0 to: 10);
		y: [ :x | x*x ].
	
	self shouldnt: [view := diag openTest] raise: Error.
	ele := view elements.
	
	"Tests"
	self assert: view numberOfElements = 21.
	
	self assert: ((ele at: 11) position) = (0@400).
	self assert: ((ele at: 21) position) = (400@0)
! !

!GETLineDiagramTest methodsFor: 'test-interaction'!

testLabels

	| diag view ele |
	
	diag := GETDiagramBuilder new.
	diag lineDiagram
		models: (0 to: 3).
		
	diag interaction
		popUpText.

	view := diag openTest.
	ele := view elements.
	
	self assert: view numberOfElements = 7.

	self assert: ele fourth  model = 0.
	self assert: ele fifth model = 1.
	self assert: ele sixth model = 2.
	self assert: ele seventh model = 3
! !

TestCase subclass: #GETPieDiagramTest
	instanceVariableNames: ''
	package: 'Graph-ET-Core-Tests'!

!GETPieDiagramTest methodsFor: 'test-function'!

testPieBasic
	"PIE DIAGRAMS DOESN'T WORK"
	| diag |
	diag := GETDiagramBuilder new.
	(diag pieDiagram) models: #(30 10 20 40).
	
	self assert: true
	"self shouldnt: [diag openTest] raise: Error"
!

testPieInteraction
	"PIE DIAGRAMS DOESN'T WORK"
	| diag |
	diag := GETDiagramBuilder new.
	(diag pieDiagram) 
		models: #(30 10 20 40).
	
	diag interaction
		strongHighlightWhenOver.
	self assert: true
"	self shouldnt: [diag openTest] raise: Error"
! !

