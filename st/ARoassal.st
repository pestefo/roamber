Smalltalk current createPackage: 'ARoassal'!
TestCase subclass: #ROElementTest
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROElementTest methodsFor: 'test'!

testCreation
	| element |
	element := ROElement new.
	self assert: element position = (0 @ 0).
! !

Object subclass: #ROObject
	instanceVariableNames: ''
	package: 'ARoassal'!

ROObject subclass: #ROElement
	instanceVariableNames: 'shape position'
	package: 'ARoassal'!

!ROElement methodsFor: 'accessing'!

position
	^ position
!

shape
	^ shape
!

shape: aROShape
	shape := aROShape
! !

!ROElement methodsFor: 'initialize'!

initialize
	super initialize.
	position := 0 @ 0
! !

ROObject subclass: #ROShape
	instanceVariableNames: 'd3Shape color'
	package: 'ARoassal'!

ROShape subclass: #ROBox
	instanceVariableNames: 'height width'
	package: 'ARoassal'!

!ROBox methodsFor: 'configuration'!

defaultSize
	^ 10
! !

!ROBox methodsFor: 'initialize'!

initialize
	super initialize.
	width := self defaultSize.
	height := self defaultSize.
! !

ROShape subclass: #ROCircle
	instanceVariableNames: 'radius'
	package: 'ARoassal'!

!ROCircle methodsFor: 'configuration'!

defaultRadius
	^ 10
! !

!ROCircle methodsFor: 'initialize'!

initialize
	super initialize.
	radius := self defaultRadius
! !

ROObject subclass: #ROView
	instanceVariableNames: 'elements'
	package: 'ARoassal'!

!ROView methodsFor: 'accessing'!

numberOfElements
	^ elements size
! !

!ROView methodsFor: 'adding'!

add: anElement
	elements add: anElement
! !

!ROView methodsFor: 'initialize'!

initialize
	super initialize.
	elements := Array new
! !

TestCase subclass: #ROViewTest
	instanceVariableNames: 'view'
	package: 'ARoassal'!

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

