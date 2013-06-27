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

!ROElement methodsFor: 'drawing'!

drawOn: canvas
	shape drawOn: canvas for: self
! !

!ROElement methodsFor: 'initialize'!

initialize
	super initialize.
	position := 0 @ 0
! !

ROObject subclass: #ROExample
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROExample methodsFor: 'not yet classified'!

create
	| view |
	view := ROView new.
	view add: (ROElement new shape: (ROBox new)).
	view open.
! !

ROObject subclass: #ROShape
	instanceVariableNames: 'd3Shape color'
	package: 'ARoassal'!

!ROShape methodsFor: 'drawing'!

drawOn: canvas for: anElement
	"abstract method - Please override it to do what you actually need"
! !

ROShape subclass: #ROBox
	instanceVariableNames: 'height width'
	package: 'ARoassal'!

!ROBox methodsFor: 'configuration'!

defaultSize
	^ 10
! !

!ROBox methodsFor: 'drawing'!

drawOn: canvas for: anElement
	| nodes |
	nodes := (canvas selectAll: 'rect') data: anElement .
	nodes enter append: 'rect'.
	nodes attr: 'class' value: 'elements'.
	nodes attr: 'height' value: 10.
	nodes attr: 'width' value: 10.
	nodes attr: 'fill' value: 'green'.
	nodes attr: 'x' value: (anElement position x).
	nodes attr: 'y' value: 20.
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

!ROCircle methodsFor: 'drawing'!

drawOn: canvas for: anElement
! !

!ROCircle methodsFor: 'initialize'!

initialize
	super initialize.
	radius := self defaultRadius
! !

ROObject subclass: #ROView
	instanceVariableNames: 'elements svgCanvas'
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

!ROView methodsFor: 'public - opening'!

open
	svgCanvas := d3 select: '#svgCanvas'.
	elements do: [ :each | each drawOn: svgCanvas].
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

