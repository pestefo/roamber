Smalltalk current createPackage: 'ARoassal-Test'!
TestCase subclass: #ROEdgeTest
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

	edge := ROLineShape elementFrom: el1 to: el2.
	self assert: edge class == ROEdge.
! !

TestCase subclass: #ROElementTest
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

TestCase subclass: #ROViewTest
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

