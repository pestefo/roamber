Smalltalk current createPackage: 'ARoassal-Test'!
TestCase subclass: #ROTest
	instanceVariableNames: ''
	package: 'ARoassal-Test'!

ROTest subclass: #ROEdgeTest
	instanceVariableNames: ''
	package: 'ARoassal-Test'!

!ROEdgeTest methodsFor: 'not yet classified'!

testCreation
	| el1 el2 edge |
	el1 := ROBox new element.
	el2 := ROBox new element.
	edge := ROEdge from: el1 to: el2.
	self assert: (edge from == el1).
	self assert: (edge to == el2).
!

testCreationFromShape
	| el1 el2 edge |
	el1 := ROBox element.
	el2 := ROBox element.

	edge := ROLine elementFrom: el1 to: el2.
	self assert: edge class == ROEdge.
! !

ROTest subclass: #ROElementTest
	instanceVariableNames: ''
	package: 'ARoassal-Test'!

!ROElementTest methodsFor: 'test'!

testCreation
	| element |
	element := ROElement new.
	self assert: element position = (0 @ 0).
!

testExtent
	| element shape |
	element := ROElement new.
	shape := ROBox new.
	shape width: 20.
	shape height: 30.
	element shape: shape.
	self assert: element width = 20.
	self assert: element height = 30.
! !

!ROElementTest methodsFor: 'test shape size'!

testShapeSize

	| shape el |
	shape := ROBox new.
	shape width: [ :e | e model + 1 ]; height: [ :e | e model + 2].
	el := shape elementOn: 4.
	self assert: (el width = 5).
	self assert: (el height = 6).
! !

ROTest subclass: #ROShapeTest
	instanceVariableNames: ''
	package: 'ARoassal-Test'!

!ROShapeTest methodsFor: 'not yet classified'!

testElementsOn
	| elements view |
	elements := (ROBox new size: 20) elementsOn: (1 to: 10).
	self assert: elements size = 10.
	self assert: (elements anyOne extent = (20@20)).
	self assert: elements anyOne height = 20.
	self assert: elements anyOne width = 20.
	
	view := ROView new addAll: elements. 
	self assert: (view elements size = 10).

	ROHorizontalLineLayout on: view elements.
	self deny: ( (view elements at: 1) position x  = ((view elements copyFrom: 2 to: 10) anyOne position x )).
	"
	ROAbstractComponent>>addShape
	con cuales medidas me quedo?
	
	"
!

testElementsOn2
	| elements view |
	view := ROView new.
	elements := (ROBox new size: 20) elementsOn: (1 to: 10).
	view addAll: elements.
	ROHorizontalLineLayout on: view elements.
	
	self assert: elements size = 10.
	self assert: (elements allSatisfy: [ :el | el class == ROElement and: [ el shape class == ROBox ] ]).
	self assert: (elements collect: [ :e | e position x ]) asSet size = 10.
!

testExtentStrategy
	| e newShape |
	"  Element is initialized with nullShape with an extent of 15@15  "
	e := (ROElement on: 1) size: 15.
	self assert: ((e width = 15) and: [ e height = 15 ]).
	
	" Add a ROBox shape with extent 5@20"
	newShape := ROBox new height: 20.
	e + newShape.
	
	" Element extent is now 15@20 "
	self assert: ( (e width = 15) and: [ e height = 20] )
! !

ROTest subclass: #ROViewTest
	instanceVariableNames: 'view'
	package: 'ARoassal-Test'!

!ROViewTest methodsFor: 'running'!

setUp
	view := ROView new.
! !

!ROViewTest methodsFor: 'test'!

testCreation

	self assert: view numberOfElements equals: 0.
!

testTwoElements
	| el1 el2 |
	el1 := ROElement new shape: (ROBox new); yourself.
	el2 := ROElement new shape: (ROBox new); yourself.
	view add: el1; add: el2.
	
	self assert: view numberOfElements equals: 2
! !

