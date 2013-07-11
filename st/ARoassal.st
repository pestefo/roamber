Smalltalk current createPackage: 'ARoassal'!
TestCase subclass: #ROElementTest
	instanceVariableNames: ''
	package: 'ARoassal'!

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

Object subclass: #ROLayout
	instanceVariableNames: 'translator'
	package: 'ARoassal'!

!ROLayout methodsFor: 'not yet classified'!

applyOn: elements
	
	self executeOnElements: elements
!

executeOnElements: elements 
	"Execute the layout, myself, on the elements"
		
"	self doInitialize: elements."
	self doExecute: elements asOrderedCollection.
"	self doPost: elements."
!

initialize
	translator := ROLayoutTranslator default.
! !

!ROLayout class methodsFor: 'not yet classified'!

on: aCollection
	self new applyOn: aCollection.
	^ aCollection
! !

ROLayout subclass: #ROAbstractLineLayout
	instanceVariableNames: 'gapSize horizontalGap verticalGap horizontalOutGap verticalOutGap alignment horizontallyStretchable verticallyStretchable'
	package: 'ARoassal'!

!ROAbstractLineLayout methodsFor: 'not yet classified'!

alignTop
	
	alignment := #top
!

alignment
	
	^alignment
!

alignment: anObject
	
	alignment := anObject
!

horizontalGap
	
	^horizontalGap
!

horizontalOutGap
	
	^horizontalOutGap
!

initialize
	
	super initialize.
	verticalGap := 10.
	horizontalGap := 10.
	horizontalOutGap := 5.
	verticalOutGap := 5.
	horizontallyStretchable := verticallyStretchable := false
!

verticalOutGap
	
	^verticalOutGap
! !

ROAbstractLineLayout subclass: #ROHorizontalLineLayout
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROHorizontalLineLayout methodsFor: 'not yet classified'!

deltaFor: aNodeFigure
	
	| delta |
	delta := 0.
	self alignment == #bottom ifTrue: [delta := aNodeFigure height].
	self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].
	^0 @ delta
!

doExecute: elements 
	| pointer delta |
	pointer := self positionOriginalPointer: elements.
"
	horizontallyStretchable ifTrue: 
		[ self doStretchHorizontal: elements ].
"
	elements do: 
		[ :element | 
		delta := self deltaFor: element.
		translator translate: element to: pointer - delta.
		pointer := self 
					movePointer: pointer
					accordingToFigure: element.
 ].	
"
	verticallyStretchable ifTrue: 
		[ self doStretchVertical: elements ]
"
!

initialize
	
	super initialize.
	self alignTop
!

movePointer: pointer accordingToFigure: element
	
	^ (pointer x + element width + self horizontalGap) @ pointer y
!

positionOriginalPointer: aGraph 
	| maxHeight delta |
	delta := 0.
	self alignment == #bottom ifTrue: 
		[ maxHeight := aGraph nodes maxValue: #height.
		delta := maxHeight ].
	self alignment == #center ifTrue: 
		[ maxHeight := aGraph nodes maxValue: #height.
		delta := maxHeight / 2.0 ].
	^ self horizontalOutGap @ (self verticalOutGap + delta)
! !

Object subclass: #ROLayoutTranslator
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROLayoutTranslator methodsFor: 'not yet classified'!

translate: element to: newPosition
	self subclassResponsibility
! !

ROLayoutTranslator class instanceVariableNames: 'defaultTranslator'!

!ROLayoutTranslator class methodsFor: 'not yet classified'!

default
	"Return the default translator, the one used in the layouts"

	defaultTranslator ifNotNil: [ ^ defaultTranslator ].
	^ defaultTranslator := self defaultClass new
!

defaultClass
	^ RODirectLayoutTranslator
! !

ROLayoutTranslator subclass: #RODirectLayoutTranslator
	instanceVariableNames: ''
	package: 'ARoassal'!

!RODirectLayoutTranslator methodsFor: 'not yet classified'!

translate: element to: newPosition
	element translateTo: newPosition
! !

Object subclass: #ROObject
	instanceVariableNames: ''
	package: 'ARoassal'!

ROObject subclass: #ROElement
	instanceVariableNames: 'model shape position'
	package: 'ARoassal'!

!ROElement methodsFor: 'accessing'!

bounds
	"Return the bounds of the element"
	
	^ self position extent: (shape extentFor: self)
!

height
	^ shape heightFor: self
!

model
	^ model
!

model: anObject
	model := anObject
!

position
	"Return the position of the element. Return a point of floats"
	
	^ position
!

shape
	^ shape
!

shape: aROShape
	shape := aROShape
!

translateTo: aPoint 
	position := aPoint
!

width
	^ shape widthFor: self
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

circle
	| view |
	view := ROView new.
	view add: (ROElement new shape: (ROCircle new)).
	view open.
!

create
	| view |
	view := ROView new.
	view add: (ROElement new shape: (ROBox new)).
	view open.
!

horizontalLayout
	| view |
	view := ROView new.
	10 timesRepeat: [view add: (ROElement new shape: (ROBox new))].
	ROHorizontalLineLayout on: view elements.
	view open.
	^ view.
!

horizontalLayout2
	| view |

	view := ROView new.
	1 to: 20 do: [ :i |
		view add: ((ROElement new model: i) shape: 
			(ROBox new height: i*10)) ].
	ROHorizontalLineLayout on: view elements.
	view open.
! !

ROObject subclass: #ROShape
	instanceVariableNames: 'height width color'
	package: 'ARoassal'!

!ROShape methodsFor: 'accessing'!

height
	^ height
!

height: aNumberOrABlock
	height := aNumberOrABlock
!

heightFor: anElement
	^ height roValue: anElement
!

width
	^ width
!

width: aNumberOrABlock
	width := aNumberOrABlock
!

widthFor: anElement
	^ width roValue: anElement
! !

!ROShape methodsFor: 'drawing'!

drawOn: canvas for: anElement
	"abstract method - Please override it to do what you actually need"
!

extentFor: element
	"Return the extent of element"
	
	| res |
	"
	(widthCache notNil and: [ heightCache notNil ]) ifTrue: [ ^ widthCache @ heightCache ].
	"
	"res := ((width roValue: element) @ (height roValue: element)) max: (next extentFor: element)."
	res := ((width roValue: element) @ (height roValue: element)) .
	"
	widthCache := res x.
	heightCache := res y.
	"
	^ res
! !

ROShape subclass: #ROBox
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROBox methodsFor: 'configuration'!

defaultSize
	^ 10
! !

!ROBox methodsFor: 'drawing'!

drawOn: canvas for: anElement
	canvas 
		rect: (anElement position x)
		with: (anElement position y) 
		with: (self width) 
		with: (self height) .
	"
	| nodes |
	nodes := (canvas selectAll: 'rect') data: anElement .
	nodes enter append: 'rect'.
	nodes attr: 'class' value: 'elements'.
	nodes attr: 'height' value: 10.
	nodes attr: 'width' value: 10.
	nodes attr: 'fill' value: 'green'.
	nodes attr: 'x' value: (anElement position x).
	nodes attr: 'y' value: 20.
	"
! !

!ROBox methodsFor: 'initialize'!

height
	^ height
!

initialize
	super initialize.
	width := self defaultSize.
	height := self defaultSize.
!

width
	^ width
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
	canvas 
		circle: (anElement position x)
		with: (anElement position y) 
		with: (self radius) .
!

radius
	^ radius
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

elements
	^ elements
!

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
	elements := Array new.
	svgCanvas := self paper.
! !

!ROView methodsFor: 'public - opening'!

clear
	self paper clear
!

open
	
	elements do: [ :each | each drawOn: svgCanvas].
!

paper
	< return Raphael("container", 800, 600);>
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

!Object methodsFor: '*ARoassal'!

roValue: anElement
	^ self
! !

!Number methodsFor: '*ARoassal'!

roValue: aBlock

	^ self
! !

