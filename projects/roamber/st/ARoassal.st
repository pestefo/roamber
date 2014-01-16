Smalltalk current createPackage: 'ARoassal'!
Announcer subclass: #ROAnnouncer
	instanceVariableNames: 'forwarding announcer'
	package: 'ARoassal'!
!ROAnnouncer commentStamp!
A ROAnnouncer is a wrapper of Announcer, this object receive and emit events. Each roassal element has an roannouncer.!

!ROAnnouncer methodsFor: 'announce'!

sendToParent: event
	"Do nothing if an event class"
	event isBehavior ifTrue: [ ^ self ].
	
	event hasElement ifTrue: [ event element parentAnnounce: event ]
! !

!ROAnnouncer methodsFor: 'forwarding'!

forward
	self forward: ROEvent
!

forward: anEventClass

	forwarding ifNil: [ forwarding := IdentitySet new ].
	forwarding add: anEventClass
! !

!ROAnnouncer methodsFor: 'testing'!

isForwarded: anEventClass
	anEventClass isBehavior ifFalse: [ ^ self isForwarded: anEventClass class ].
	 
	forwarding ifNil: [ ^ false ].
	^ forwarding anySatisfy: [ :c | (c == anEventClass) or: [ anEventClass inheritsFrom: c ] ]
!

isForwarder
	^ forwarding notNil and: [ forwarding notEmpty ]
! !

Object subclass: #ROObject
	instanceVariableNames: ''
	package: 'ARoassal'!

ROObject subclass: #ROAbstractCanvas
	instanceVariableNames: 'camera extent nativeCanvas offset'
	package: 'ARoassal'!

!ROAbstractCanvas methodsFor: 'accessing'!

camera
"	^ camera"
	self error: 'Wow. Such ',(thisContext selector asString),' very ',(self class asString).
!

camera: aROCamera
	camera := aROCamera
!

canvas
	^ nativeCanvas
!

canvas: aNativeCanvas 
	nativeCanvas := aNativeCanvas
!

extent: aPoint
	extent := aPoint
!

offset
	^ offset
!

offset: anOffsetAsPoint
	offset := anOffsetAsPoint
! !

!ROAbstractCanvas methodsFor: 'convenient'!

paintBackground: color

	self 
		frameAndFillRectangle: (camera realToVirtualRectangle: (0@0 extent: extent)) 
		fillColor: color
		borderWidth: 0 
		borderColor: Color white.
! !

!ROAbstractCanvas methodsFor: 'hooks'!

drawPolygon: listOfPoints color: color borderWidth: borderWidthValue borderColor: borderColorValue
	"Render a polygon at a given position. 
		nativeCanvas 
			drawPolygon: (listOfPoints collect: [ :p | self virtualToRealPoint: p ])
			color: color
			borderWidth: borderWidthValue 
			borderColor: borderColorValue.
	"
	self subclassResponsibility
!

drawString: aByteString at: aPoint 
	"Render a string at a given position. No specification about the font is given. Use the default then"
	"Implementation example:
		canvas drawString: aByteString at:  (self virtualToRealPoint: aPoint) font: nil color: Color black
	"
	self subclassResponsibility
!

drawString: aByteString at: aPoint color: color
	"Render a colored string at a given position. No specification about the font is given. Use the default then"
	"Implementation example:
			canvas drawString: aByteString at:  (self virtualToRealPoint: aPoint) font: nil color: color
	"
	self subclassResponsibility
!

drawString: aByteString at:  p font: f color: color
	"Render a colored string at a given position using a particular font."
	"Implementation example:
		canvas drawString: aByteString at:  (self virtualToRealPoint: p) font: f color: color
	"
	self subclassResponsibility
!

fillOval: aRectangle color: aColor borderWidth: aSmallInteger borderColor: aColor4 
	"Render an oval"
	"Implementation example
		canvas
		fillOval: (self virtualToRealRectangle: aRectangle)  color: aColor borderWidth: aSmallInteger borderColor: aColor4 
	"
	self subclassResponsibility
!

fillRectangle: aRectangle color: fillColor 
	"Render a rectangle"
	"Implementation example
	
		canvas fillRectangle: (self virtualToRealRectangle: aRectangle) color: fillColor
	"
	
	self subclassResponsibility
!

form
	"Return a bitmap"
	"Implementation example
		^ canvas form
	"
	self subclassResponsibility
!

frameAndFillRectangle: aRectangle fillColor: fillColor borderWidth: aSmallInteger borderColor: aColor 
	"Render a framed rectangle. Implementation example:

	canvas 
		frameAndFillRectangle: (self virtualToRealRectangle: aRectangle) fillColor: fillColor borderWidth: aSmallInteger borderColor: aColor.
	"
	
	self subclassResponsibility.
!

line: aPoint to: aPoint2 width: aSmallInteger color: aColor 
	"Draw a line between two points"
	"Implementation example
		canvas line: (self virtualToRealPoint: aPoint) to: (self virtualToRealPoint: aPoint2) width: aSmallInteger color: aColor.

	"
	self subclassResponsibility
!

paintImage: aForm at: aPoint
	"Render a bitmap on screen"
	"Implementation example
		canvas paintImage: aForm at:  (self virtualToRealPoint: aPoint) 

	"
	self subclassResponsibility
! !

!ROAbstractCanvas methodsFor: 'initialize'!

initialize 
	super initialize.
	
	extent := self class defaultExtent.
	
	"Maybe a global camera would be useful. The camera object is never used normally. Since the camera of the view has to be set prior any drawing"
	camera := ROCamera new.
	
	offset := 0 @ 0
!

realToVirtualPoint: aPoint
	"Return a real point from a one expressed in the virtual coordinates"

	^ camera realToVirtualPoint: aPoint
!

realToVirtualRectangle: aRectangle
	"Return a rectangle with virtual coordinates from one expressed in the real coordinates"
	
	^ camera realToVirtualRectangle: aRectangle
! !

!ROAbstractCanvas methodsFor: 'util'!

virtualToRealPoint: aPoint
	"Return a real point from a one expressed in the virtual coordinates"

	^ (camera virtualToRealPoint: aPoint) + offset
!

virtualToRealRectangle: aRectangle
	"Return a rectangle with real coordinates from one expressed in the virtual coordinates"
	
	^ (camera virtualToRealRectangle: aRectangle) translateBy: offset
! !

!ROAbstractCanvas class methodsFor: 'configuration'!

defaultExtent
	^ 40 @ 30
! !

!ROAbstractCanvas class methodsFor: 'hooks'!

onCamera: camera
	"Return a new canvas with a created canvas"
	"Implementation example: 
		| form canvas |
		form := Form extent: camera realExtent depth: Display depth.
		canvas := FormCanvas on: form.
		^ self canvas: canvas camera: camera
	"
	self subclassResponsibility
! !

!ROAbstractCanvas class methodsFor: 'public'!

canvas: canvas camera: camera
	^ self new canvas: canvas; camera: camera; yourself
! !

ROObject subclass: #ROConstraint
	instanceVariableNames: ''
	package: 'ARoassal'!
!ROConstraint commentStamp!
A ROConstraint is a utility class that contains methods to position elements against others.!

!ROConstraint class methodsFor: 'public'!

constraintInItsParent: element
	
	element
		on: ROElementTranslated
		do2: [ :event | 
			element translateTo: ((element position max: (0 @ 0)) min: (element parent extent - element extent)) ]
!

stick: element above: anotherElement
	self move: element above: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element above: anotherElement ]
!

stick: element below: anotherElement
	self move: element below: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element below: anotherElement ].
!

stick: element between: el1 and: el2
	self move: element between: el1 and: el2.
	el1
		on: ROElementEvent
		do2: [ :event | self move: element between: el1 and: el2. ].
	el2
		on: ROElementEvent
		do2: [ :event | self move: element between: el1 and: el2. ].
!

stick: element onTheCenterOf: anotherElement
	self move: element onTheCenterOf: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element onTheCenterOf: anotherElement ].
!

stick: element onTheLeftCenteredOf: anotherElement
	self move: element onTheLeftCenteredOf: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element onTheLeftCenteredOf: anotherElement ].
!

stick: element onTheLeftOf: anotherElement
	self move: element onTheLeftOf: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element onTheLeftOf: anotherElement ].
!

stick: element onTheRightCenteredOf: anotherElement
	self move: element onTheRightCenteredOf: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element onTheRightCenteredOf: anotherElement ].
!

stick: element onTheRightOf: anotherElement
	self move: element onTheRightOf: anotherElement.
	anotherElement
		on: ROElementEvent
		do2: [ :event | self move: element onTheRightOf: anotherElement ].
! !

!ROConstraint class methodsFor: 'public - window'!

stickAtBottomRightOfTheWindow: element 
	self moveAtBottomRightOfTheWindow: element.
	element view
		on: ROWindowResized
		do2: [ :event | self moveAtBottomRightOfTheWindow: element ]
!

stickAtCenterOfTheWindow: element 
	self moveAtCenterOfTheWindow: element.
	element view
		on: ROWindowResized
		do2: [ :event | self moveAtCenterOfTheWindow: element ]
!

stickAtTheBottomOfTheWindow: element 
	self moveAtTheBottomOfTheWindow: element.
	element view
		on: ROWindowResized
		do2: [ :event | self moveAtTheBottomOfTheWindow: element ]
!

stickAtTheTopRightOfTheWindow: element 
	self moveAtTheTopRightOfTheWindow: element.
	element view
		on: ROWindowResized
		do2: [ :event | self moveAtTheTopRightOfTheWindow: element ]
!

stickToBottomLeft: element 
	^ self stickToBottomLeft: element offset: 0
!

stickToBottomLeft: element offset: aNumber
	element translateTo: (aNumber @ element view camera windowSize y - element height - aNumber).
	element view
		on: ROWindowResized
		do2: [ :event | element translateTo: (aNumber @ (event extent y - element height - aNumber)) ].
!

stickToTopRight: element
	^ self stickToTopRight: element offset: 0
!

stickToTopRight: element offset: aNumber
	element translateTo: ((element view camera windowSize x - element width) - aNumber @ aNumber).
	element view
		on: ROWindowResized
		do2: [ :event | element translateTo:  ((event extent x - element width) - aNumber @ aNumber)].
! !

!ROConstraint class methodsFor: 'util'!

move: element above: anotherElement
	^ element translateTo: anotherElement position - (0 @ element height)
!

move: element below: anotherElement
	^ element translateTo: anotherElement position + (0 @ anotherElement height)
!

move: element between: el1 and: el2

	^ element translateTo: ((el1 position + el2 position) / 2)
!

move: element onTheCenterOf: anotherElement

	|p|
	p := ((anotherElement width - element width) /2) @ ((anotherElement height - element height ) /2).
	^ element translateTo: anotherElement position + p.
!

move: element onTheLeftCenteredOf: anotherElement
	^ element translateTo: (anotherElement position - (element width @ 0) + (0 @ (anotherElement height /2 - (element height / 2))))
!

move: element onTheLeftOf: anotherElement
	^ element translateTo: anotherElement position - (element width @ 0)
!

move: element onTheRightCenteredOf: anotherElement
	^ element translateTo: anotherElement position + (anotherElement width @ (anotherElement height /2 - (element height / 2)))
!

move: element onTheRightOf: anotherElement
	^ element translateTo: anotherElement position + (anotherElement width @ 0)
! !

!ROConstraint class methodsFor: 'util - window'!

moveAtBottomRightOfTheWindow: element

	| windowSize |
	windowSize := element view camera windowSize.
	element translateTo: windowSize - (element extent)
!

moveAtCenterOfTheWindow: element

	| windowSize |
	windowSize := element view camera windowSize.
	element translateTo: ((windowSize / 2) asIntegerPoint - (element bounds extent / 2) asIntegerPoint )
!

moveAtTheBottomOfTheWindow: element

	| windowSize |
	windowSize := element view camera windowSize.
	element translateTo: (0 @ (windowSize y - element height))
!

moveAtTheTopRightOfTheWindow: element

	| windowSize |
	windowSize := element view camera windowSize.
	element translateTo: ((windowSize x - element width) @ 0)
! !

ROObject subclass: #ROContainer
	instanceVariableNames: 'elements attributes eventHandler interactions'
	package: 'ARoassal'!

!ROContainer methodsFor: 'actions'!

elementFromModel: object
	"Recursively look for the element with a model object"
	| v |
	
	(self model = object) ifTrue: [ ^ self ].
	
	v :=  elements reverse
				detect: [ :e | (e model = object) and: [ e isElement ] ]
				ifNone: [ nil ].
	v ifNotNil: [ ^ v ].
	
	elements reverse do: [ :e |
		v := e elementFromModel: object.
		v ifNotNil: [ ^ v ] ].
	
	^ nil

	"^ (self elementsSuchThat: [ :el | object = el model ]) first"
! !

!ROContainer methodsFor: 'as yet unclassified'!

allElementsDo: aBlockOrSymbol
	"Recursively perform an action for each elements."
	self elementsDo: [ :each | each withAllElementsDo: aBlockOrSymbol ]
!

announce: anEvent
	"trigger an event. Objects who registered to me will get notified"

	| eventToBeSent |
	eventToBeSent := anEvent isBehavior 
						ifTrue: [ anEvent new ]
						ifFalse: [ anEvent ]. 
	
	eventToBeSent element: self.
	eventHandler announce: eventToBeSent
!

elementsAsEdge
"	^ elements select: #isEdge"
	^ elements select: [:e | e isEdge]
!

elementsDo: aBlock
	^ elements copy do: aBlock
!

elementsSuchThat: aBlock
	^ elements select: aBlock
!

forward: obj
	eventHandler forward: obj
!

initialize
	super initialize.
	elements := OrderedCollection new.
	eventHandler := ROAnnouncer new.
!

on: eventClass do2: aBlock
	"Register a block as an handler for eventClass"
	

	"eventHandler on: eventClass do: aBlock."
	interactions at: eventClass put: aBlock
!

on: eventClass do: aBlock
	"Register a block as an handler for eventClass"
	

	eventHandler on: eventClass do: aBlock.
	"interactions at: eventClass put: aBlock"
!

on: eventClass doOnce: aBlock
	"Register a block as an handler for eventClass. The callback is removed when exected"
	
	eventHandler on: eventClass do: [ :arg | 
		aBlock value: arg.
		eventHandler unsubscribeForEvent: eventClass.
		"self removeInteraction: eventClass "]
!

removeInteraction: anInteractionClass
	"Remove an interaction from the receiver. No error is raised if no interaction is found"
	
	| ds |
	ds := interactions select: [ :d | d isKindOf: anInteractionClass ].
	ds associationsDo: [ :assoc | 
		interactions removeKey: assoc key.
		eventHandler unsubscribe: assoc value ].
! !

ROContainer subclass: #ROAbstractComponent
	instanceVariableNames: 'model view shape'
	package: 'ARoassal'!

!ROAbstractComponent methodsFor: 'accessing'!

+ aShape 
	"Add a shape to myself. aShape could either be an instance of a shape class or a class"
	
	self addShape: aShape.
	^ self
!

model
	^ model
!

model: anObject
	model := anObject.
	self modelChanged.
!

on: anObject 
	"Set the object model of myself. The object model is used by the shape when computing metrics that may be used by the shapes"

	self model: anObject
!

view
	"Answer the view in which I am defined"
	^ view
!

view: aView
	"Set the view in which I am defined. All my elements should also belong to the same view"
	view := aView.
! !

!ROAbstractComponent methodsFor: 'as yet unclassified'!

@ anInteractionClassOrInstance
	"Add an interaction to the node"
	
	self addInteraction: anInteractionClassOrInstance
!

initialize
	super initialize.
"	parent := ROView nullView."
	
	view := ROView nullView.
	
	"Actually, I am not sure we need to have a variable interactions"
"	interactions := IdentityDictionary new.

	zIndex := 0
"
!

remove
	"Remove myself from the view I belong to (if I actually belong to the view, else do nothing) and from my parent."

	"self removeFromParent."
	"self view removeElementToRender: self.	""We remove all the subelements"
	self shape remove.
	self view remove: self.
	"self allElementsDo: #remove"
!

withAllElementsDo: aBlock
	aBlock value: self.
	self allElementsDo: aBlock
! !

!ROAbstractComponent methodsFor: 'drawing'!

addShape: aShape 
	"Add a shape to myself. aShape could either be an instance of a shape class or simply a class"

	| s |
	s := (aShape installedOn: self).
"	s addLast: shape."
"	Transcript show: (s width asString),'-BEFOREinstalledOn:-',(s class asString),(String cr)."
	" set height and width from previous shape <--- needs to be changed when implementing chain of shapes "

	self shape isNil ifFalse: [
"		Transcript show: 's ',(s class asString) , ' ' , (s width asString) , ' -' , (s height asString) , ' ' , (s class asString) , ' ' , (String cr).
		Transcript show: 'shape ',(shape class asString) , ' ' , (shape width asString) , ' -' , (shape height asString) , ' ' , (shape class asString) , ' ' , (String cr), (String cr)."
		s width: (s width max: (self shape width)).
		s height: (s height max: (self shape height)).	
	]. 

"	Transcript show: (s width asString),'-AFTERinstalledOn:-',(s class asString),(String cr)."
	shape := s.
! !

!ROAbstractComponent methodsFor: 'events'!

announce: anEvent
	"trigger an event. Objects who registered to me will get notified"

	| eventToBeSent |
	eventToBeSent := anEvent isBehavior 
						ifTrue: [ anEvent new ]
						ifFalse: [ anEvent ]. 
	
	eventToBeSent element: self.
	eventHandler announce: eventToBeSent
!

forward: obj
	eventHandler forward: obj
!

modelChanged
	
	"We should do an annoucement like ROModelChanged. 
	But for now it is not useful. It is here just because of cache of ROLabel."
	
	self shape modelChanged: self
!

on: eventClass do: aBlock
	"Register a block as an handler for eventClass"
	

	eventHandler on: eventClass do: aBlock.
	"interactions at: eventClass put: aBlock"
!

on: eventClass doOnce: aBlock
	"Register a block as an handler for eventClass. The callback is removed when exected"
	
	eventHandler on: eventClass do: [ :arg | 
		aBlock value: arg.
		eventHandler unsubscribeForEvent: eventClass.
		"self removeInteraction: eventClass "]
!

removeInteraction: anInteractionClass
	"Remove an interaction from the receiver. No error is raised if no interaction is found"
	
	| ds |
	ds := interactions select: [ :d | d isKindOf: anInteractionClass ].
	ds associationsDo: [ :assoc | 
		interactions removeKey: assoc key.
		eventHandler unsubscribe: assoc value ].
!

signalUpdate
	"Trigger a redisplay of the view"
	
	^ view signalUpdate
! !

!ROAbstractComponent methodsFor: 'testing'!

getShape: shapeClass
	"Return a shape instance, instance of the shape class provided as parameter"

	^ self shapeDetect: [ :de | de isKindOf: shapeClass ]
!

isElement
	^ self isEdge not
!

isNotEdge
	^ self isEdge not
!

isShapedAs: aShapeClass
	^ shape isShapedAs: aShapeClass
!

shapeDetect: aBlock
	^ shape shapeDetect: aBlock
! !

!ROAbstractComponent class methodsFor: 'as yet unclassified'!

on: anObject 
	^ self basicNew on: anObject; initialize; yourself
! !

ROAbstractComponent subclass: #ROEdge
	instanceVariableNames: 'from to'
	package: 'ARoassal'!

!ROEdge methodsFor: 'accessing'!

drawOn: canvas
	shape drawOn: canvas for: self
!

from
	^ from
!

from: anElement
	from := anElement
!

position 
	
	^self from position
!

shape
	^ shape
!

shape: aShape
	shape := aShape
!

to
	^ to
!

to: anElement
	to := anElement
!

translateBy: aPoint
! !

!ROEdge methodsFor: 'testing'!

elementsDo: aBlock
	"Do nothing"
!

isEdge
	^ true
! !

!ROEdge class methodsFor: 'public'!

from: el1 to: el2
	^ self new from: el1; to: el2; yourself
!

lineFrom: f to: t
	^ (self from: f to: t)
		+ (ROLine new) ;
		yourself
!

linesFor: associations 
	"Return a collection of edges, one for each provided association"

	^ associations collect: [ :assoc | self lineFrom: assoc key to: assoc value ]
! !

!ROEdge class methodsFor: 'public - edges constructions'!

buildEdgesFromAssociations: associations inView: view
	"associations could be {2 -> 5 . 1 -> 5 }.
	 Takes the model of element into account"
	
	^ self buildEdgesFromElements: associations from: #key to: #value inView: view
!

buildEdgesFromAssociations: associations using: aLineShape
	"associations could be {2 -> 5 . 1 -> 5 }.
	 Takes the model of element into account"
	
	^ self buildEdgesFromElements: associations from: #key to: #value using: aLineShape
!

buildEdgesFromAssociations: associations using: aLineShape inView: view
	"associations could be {2 -> 5 . 1 -> 5 }.
	 Takes the model of element into account"
	
	| edges associationsOfElements |
	associationsOfElements := associations collect: [ :assoc | (view elementFromModel: assoc key) -> (view elementFromModel: assoc value) ].
	associationsOfElements ifEmpty: [ ^ #() ].
	
	edges := OrderedCollection new.
	associationsOfElements do: [ :associationOfTwoElements |
				| edge |
				edge := ROEdge from: associationOfTwoElements key to: associationOfTwoElements value. 
				edge + aLineShape.
				edges add: edge ].
	view addAll: edges.
	^ edges
!

buildEdgesFromElements: elements from: fromBlock to: toBlock
	"Handy method to easily build edges. Return a list of edges"

	^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: ROLine
!

buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	| edges container fromElement toElement elementsWithModels |
	elements ifEmpty: [ ^ #() ].
	edges := OrderedCollection new.
	elementsWithModels := elements select: [ :el | el model notNil ].
	elementsWithModels do: [ :element |
		container := element parent.
		fromElement := container elementFromModel: (fromBlock roValue: element model).
		toElement := container elementFromModel: (toBlock roValue: element model).
		(fromElement notNil and: [ toElement notNil ])
			ifTrue: [  
				| edge |
				edge := ROEdge from: fromElement to: toElement. 
				edge + aLineShape.
				edges add: edge.
				container add: edge ] ].
	^ edges
! !

ROAbstractComponent subclass: #ROElement
	instanceVariableNames: 'position'
	package: 'ARoassal'!

!ROElement methodsFor: 'accessing'!

absolutePosition
	"Return the absolute position of the element, the top left corner"

"	^ parent 
		ifNil: [ self position ]
		ifNotNil: [ self position + parent absolutePosition ]"
		
	^ self position
!

allEdgesFrom
	"Return all the edges that begins from me"
	| edges |
	edges := OrderedCollection new.
	self view allElementsDo:  [ :edge | 
		(edge isEdge and: [ edge from == self ]) 
			ifTrue: [ edges add: edge ] ].
	^ edges
!

allEdgesTo
	"Return all the edges that ends to me"
	| edges |
	edges := OrderedCollection new.
	self view allElementsDo:  [ :edge | 
		(edge isEdge and: [ edge to == self ]) 
			ifTrue: [ edges add: edge ] ].
	^ edges
!

bounds
	"Return the bounds of the element"
	
	^ self position extent: (shape extentFor: self)
!

color: aColor
	self shape color: aColor.
!

extent
	^ shape extentFor: self
!

extent: aPoint 
	(aPoint = self extent) ifTrue: [ ^ self ].

	shape extent: aPoint
!

height
"	^ shape heightFor: self"
	^ shape height
!

height: aValue
	shape height: aValue
!

position
	"Return the position of the element. Return a point of floats"
	
	^ position
!

positionAsInteger
	"Return the position as integer"
	
	^ self position asIntegerPoint
!

shape
	^ shape
!

shape: aROShape
	shape := aROShape
!

size: d
	self extent: d @ d
!

translateBy: aPoint 
	self translateTo: position + aPoint
!

translateTo: aPoint 
	position := aPoint
!

width
"	^ shape widthFor: self"
	^ shape width
!

width: aValue
	shape width: aValue
! !

!ROElement methodsFor: 'as yet unclassified'!

activateInteractions
	interactions values do: [:each | each value].
!

addInteraction: anInteractionClassOrInstance
	"Add an interaction to the node"
	
	interactions at: anInteractionClassOrInstance key put: [anInteractionClassOrInstance initializeElement: self]
! !

!ROElement methodsFor: 'drawing'!

drawOn: canvas
	shape drawOn: canvas for: self
! !

!ROElement methodsFor: 'initialize'!

hide
	shape hide
!

initialize
	super initialize.
	position := 0 @ 0.
	interactions := Dictionary new.
	shape := RONullShape new.
	self @ ROClickable.
	self @ ROHoverable.
!

removeShape
	shape removeSVGElement
!

show
	shape show
! !

!ROElement methodsFor: 'testing'!

isEdge
	^ false
!

remove
	"Remove myself from the view I belong to (if I actually belong to the view, else do nothing) and from my parent."

"	self removeFromParent."
"	self view removeElementToRender: self."	"We remove all the subelements"
"	self allElementsDo: #remove"
	self removeShape
! !

!ROElement class methodsFor: 'public'!

forCollection: aCollection 
	^ (aCollection collect: [ :v | self on: v ]) asArray
!

on: anObject
	^ self new model: anObject; yourself
!

sprite

	^ self new
			extent: 50 @ 50;
			addInteraction: RODraggable;
"			addShape: (ROBorder new color: Color red);"
			addShape: (ROBox new);
			yourself
!

spriteOn: value
	^ self sprite on: value
!

spritesOn: values
	^ values collect: [:v | self sprite on: v ]
! !

ROContainer subclass: #ROView
	instanceVariableNames: 'elements svgCanvas'
	package: 'ARoassal'!

!ROView methodsFor: 'accessing'!

elements
	^ elements
!

model
	"To be polymorphic with ROElement"
	
	^ self
!

numberOfElements
	^ elements size
!

remove: element
	"Remove the element from myself. However, the element is not removed from the visualization. Send #remove to element to actually remove it."
	"element removeShape."
	elements remove: element ifAbsent: [].
	self signalUpdate.
!

view
	^ self
! !

!ROView methodsFor: 'adding'!

add: anElement
	"Add an element in the view. Do nothing if the element is already in"
	"(element view ~~ ROView nullView) ifTrue: [ ^ self ]."
	"
	self addElement: element.
	element parent: self.
	element view: self.

	self addElementRecursivelyToRender: element
	"
	self addElement: anElement.
	anElement view: self.
!

addAll: els 
	"self assert: [ els isKindOf: Collection ]."
	els do: [:n | self add: n ]
!

addElement: element
	elements add: element.
! !

!ROView methodsFor: 'initialize'!

absolutePosition
	^ 0 @ 0
!

initialize
	super initialize.
	self clear.
	elements := Array new.
	svgCanvas := self paper.
! !

!ROView methodsFor: 'public - opening'!

clear
	self paper clear.
!

open
	
	elements do: [ :each | each drawOn: svgCanvas].
!

paper
	^ RORaphaelCanvas canvas
!

signalUpdate
	"self announce: RORefreshNeeded"
	
	self elements do: [:el | el drawOn: svgCanvas].
!

translateBy: aPoint
	self elementsDo: [:el | el translateBy: aPoint ]
! !

ROView class instanceVariableNames: 'nullView'!

!ROView class methodsFor: 'as yet unclassified'!

initialize
	self resetNullView
!

nullView
	"Used when creating new element. For example, we have the relation:
	  ROElement new view == ROView nullView"
	
	^ nullView ifNil: [ nullView := self new ].
!

resetNullView 
	nullView := nil
! !

ROObject subclass: #ROShape
	instanceVariableNames: 'svgElement height width color colorCache'
	package: 'ARoassal'!

!ROShape methodsFor: 'accessing'!

color
	^ color
!

color:	 aColor
	color := aColor.
	colorCache := nil.
!

height
	^ height
!

height: aNumberOrABlock
	height := aNumberOrABlock
!

heightFor: anElement
	^ height roValue: anElement
!

initialize
	super initialize.
	self color: self class defaultColor.
!

installedOn: element
	"This method is meant to be overriden in case a special treatment has to be realized on the element"
	
	"self extent: (self preferedExtentFor: element)."
	"element extent: (element extent max: extent)."
!

remove
	self removeSVGElement.
!

removeSVGElement
	svgElement = nil ifFalse:[ svgElement remove]
!

rgbColor
	| triplet |
	triplet := color rgbTriplet255.
	^ 'rgb(',(triplet first  asString),',',(triplet second asString),',',(triplet third asString),')'.
!

scale: factor
	self size: self width * factor
!

size: value
	self extent: value @ value
!

svgElement
	^ svgElement
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

!ROShape methodsFor: 'creation'!

colorFor: element
	"Compute the color of the element"

	"We use a cache mechanism since computing the cache can be quite slow"
	colorCache notNil ifTrue: [ ^ colorCache ].
	^ colorCache := color roValue: element.

"	(element hasAttribute: (#element, self class name) asSymbol)
		ifTrue: [ ^ element attributeAt: (#element, self class name) asSymbol ].
 
	colorCache := color roValue: element.
	element attributeAt: (#element, self class name) asSymbol put: colorCache.
	^ colorCache"
!

defaultExtent
	"Each shape has a minimum size of 5@5"

	^ 5 @ 5
!

element
	^ self elementOn: nil
!

elementOn: anObject
	^ (ROElement on: anObject) + self
!

elementsOn: collectionOfObjects
	"Easy way to create element from a shape"
	
	^ collectionOfObjects collect: [ :object | self copy elementOn: object ]
!

hide
	svgElement hide.
!

modelChanged: aROElement
	"do nothing"
!

show
	svgElement show
! !

!ROShape methodsFor: 'drawing'!

activateInteractionsOn: anElement
	"add interactions to svgElement"
	anElement activateInteractions.
!

drawOn: canvas for: anElement
	"Create svgElement if necessary and redraw with current attributes"
	(svgElement isNil) 
		ifTrue: [
			self initializeSVGElementOn: canvas for: anElement.
			self activateInteractionsOn: anElement.].

		self updateSVGElementOn: canvas for: anElement.
!

extent: aPoint
	self width: aPoint x.
	self height: aPoint y.
!

extentFor: element
	"Return the extent of element"
	
	"^ ((width roValue: element) @ (height roValue: element)) ."
	^ width @ height
!

initializeSVGElementOn: canvas for: anElement
	"Initialize svgElement"
	self subclassResponsibility
!

isShapedAs: aShapeClass
"	^ (self isKindOf: aShapeClass) or: [ self next isShapedAs: aShapeClass ]"
	^ (self isKindOf: aShapeClass)
!

shapeDetect: aBlock

	(aBlock value: self) ifTrue: [ ^ self ].
	self error: 'Not found'
"	^ self next shapeDetect: aBlock"
!

shapesDo: aBlock

	^ aBlock value: self.
"	^ self next shapesDo: aBlock"
!

updateSVGElementOn: canvas for: anElement
	"Redraw svgElement with current attributes"
	self subclassResponsibility
! !

!ROShape methodsFor: 'testing'!

isHidden
	^(svgElement node style display = 'none')
! !

!ROShape class methodsFor: 'not yet classified'!

defaultColor
	^ Color lightGray.
!

element
	^ self new element
!

elementOn: anObject
	"Easy way to create element from a shape"
	
	^ (ROElement on: anObject) + self
!

elementsOn: collectionOfObjects
	"Easy way to create element from a shape"
	
	^ collectionOfObjects collect: [ :object | self elementOn: object ]
!

installedOn: element
	^ self new installedOn: element; yourself
! !

ROShape subclass: #ROAbstractLineShape
	instanceVariableNames: 'attachPoint strokeWidth'
	package: 'ARoassal'!

!ROAbstractLineShape methodsFor: 'not yet classified'!

attachPoint
	
	^ attachPoint
!

attachPoint: attach
	
	attachPoint := attach
!

defaultWidth
	^ 1
!

endingPointOf: anEdge
	 ^ attachPoint endingPointOf: anEdge
!

initialize
	super initialize.
	attachPoint := ROShorterDistanceAttachPoint instance.
	strokeWidth := self defaultWidth.
"	arrows := OrderedCollection new"
!

startingPointOf: anEdge
	^ attachPoint startingPointOf: anEdge
!

width
	^ strokeWidth
!

width: aNumber
	strokeWidth := aNumber
! !

!ROAbstractLineShape class methodsFor: 'not yet classified'!

defaultColor
	^ Color black
!

edgeFrom: el1 to: el2
	^ (ROEdge from: el1 to: el2) shape: self new; yourself
!

elementFrom: el1 to: el2
	^ self edgeFrom: el1 to: el2
! !

ROAbstractLineShape subclass: #ROLine
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROLine methodsFor: 'drawing'!

activateInteractionsOn: anElement
!

initializeSVGElementOn: canvas for: anEdge
	| x1 y1 x2 y2 |
	x1 := anEdge from position x.
	y1 := anEdge from position y.

	x2 := anEdge to position x.
	y2 := anEdge to position y.

	svgElement := canvas path: 'M', x1,' ', y1, 'L', x2, ' ', y2 

"	canvas path: 'M10 10L90 90'
"
!

updateSVGElementOn: canvas for: anEdge
	| maxArrowSize unit startingPoint endingPoint rawStartingPoint rawEndingPoint |
	rawEndingPoint  := attachPoint startingPointOf: anEdge.
	rawStartingPoint := attachPoint endingPointOf: anEdge.

	(rawStartingPoint = rawEndingPoint)
		ifTrue: [ ^ self ].

"	Transcript show: 'x1 ', x,' y1', y, ' x2 ', z, ' y2 ', w, (String cr)."

	svgElement attr: 'path' with: 'M', ( rawEndingPoint x asInteger),' ',  (rawEndingPoint y asInteger), 'L', ( rawStartingPoint x asInteger), ' ', ( rawStartingPoint y asInteger) .
	svgElement attr: 'stroke-width' value: (self width).
	svgElement attr: 'stroke' value: (self rgbColor).


	
"	x1 := anEdge from position x.
	y1 := anEdge from position y.

	x2 := anEdge to position x.
	y2 := anEdge to position y.
	
	svgElement attr: 'path' with: 'M', x1,' ', y1, 'L', x2, ' ', y2 ."
	
	"We draw a line before each arrow"
"	
	arrows do: [ :arrow | 
		| arr |
		arr := arrow drawOn: aCanvas for: anEdge line: self.
		aCanvas 
			line: rawStartingPoint 
			to: arr first 
			width: (self widthFor: anEdge) 
			color: (self colorFor: anEdge).
		rawStartingPoint := arr second.
		 ].
"	
	"We draw a line after the arrow"
"	aCanvas line: rawStartingPoint to: rawEndingPoint width: (self widthFor: anEdge) color: (self colorFor: anEdge)."
! !

ROLine subclass: #ROBSplineLine
	instanceVariableNames: 'controlElements'
	package: 'ARoassal'!

!ROBSplineLine methodsFor: 'not yet classified'!

addControlElement: anElement
	self controlElements add: anElement
!

controlElements
	^controlElements
!

initialize
	controlElements := OrderedCollection new.
	super initialize.
!

initializeSVGElementOn: canvas for: anEdge
	|startPoint  endPoint x1 y1 xn yn mid p|
	endPoint  := attachPoint endingPointOf: anEdge.
	startPoint := attachPoint startingPointOf: anEdge.
	x1 := startPoint x.
	y1 := startPoint y.
	xn := endPoint x.
	yn := endPoint y.
	p :=''.
	controlElements do: [ :e | p:= p,(e position x asString), ' ', (e position y asString),' ' ].
	p :=  'M', x1,' ', y1, 'C', p, xn, ' ', yn.
	svgElement := canvas path: p
!

updateSVGElementOn: canvas for: anEdge
	| "maxArrowSize unit startingPoint endingPoint" rawStartingPoint rawEndingPoint |
	rawStartingPoint  := attachPoint startingPointOf: anEdge.
	rawEndingPoint := attachPoint endingPointOf: anEdge.

	(rawStartingPoint = rawEndingPoint)
		ifTrue: [ ^ self ].
	"svgElement attr: 'path' with: 'M', ( rawEndingPoint x asInteger),' ',  (rawEndingPoint y asInteger), 'L', ( rawStartingPoint x asInteger), ' ', ( rawStartingPoint y asInteger) ."
	svgElement attr: 'stroke-width' value: (self width).
	svgElement attr: 'stroke' value: (self rgbColor).
! !

ROShape subclass: #ROAbstractPathShape
	instanceVariableNames: 'svgRect svgPath'
	package: 'ARoassal'!

!ROAbstractPathShape methodsFor: 'configuration'!

padding
	^ 0
! !

!ROAbstractPathShape methodsFor: 'not yet classified'!

adaptContainerOn: canvas for: anElement

	self resizeContainerWith: anElement. 
	self centeringPathWith: anElement.
	self createSetOn: canvas for: anElement.
!

centeringPathWith: anElement

	svgPath attr: 'x' value: 0.
	svgPath attr: 'y' value: 0.
!

createSetOn: canvas for: anElement
	svgElement := canvas  set.
	svgElement push: svgRect; push: svgPath.
	
	" enable translating "
	svgElement translate:  (anElement position x) y: (anElement position y).
!

initializeContainterOn: canvas for: anElement
	| container |
	container :=  canvas rect: 0
				y: 0 
				width: 1
				rect: 1.
	container attr: 'fill' value: 'white'.			
	container attr: 'stroke-width' value: 0. " no border "
	^ container
!

initializePathOn: canvas for: anElement
	self subclassResponsibility
!

initializeSVGElementOn: canvas for: anElement

	
	svgRect := self initializeContainterOn: canvas for: anElement.
	svgPath := self initializePathOn: canvas for: anElement.
	
	self adaptContainerOn: canvas for: anElement.
!

removeSVGElement
	"svgElement clear."
	svgElement remove
!

resizeContainerWith: anElement
	self subclassResponsibility
!

updateSVGElementOn: canvas for: anElement
	svgElement transform: 'T0,0'.
	svgElement transform: 'T',(anElement position x),',',(anElement position y).
	svgPath attr: 'fill' value: (self color asHTMLRGBA).
! !

ROAbstractPathShape subclass: #ROImageShape
	instanceVariableNames: 'url imgExtent'
	package: 'ARoassal'!
!ROImageShape commentStamp!
Each ROImage is binded to a url to the image that cannot be changed.!

!ROImageShape methodsFor: 'initialize-release'!

imageExtent
	| myImg |
	myImg := Image new.
	myImg src: self url.
	^ (myImg width)@(myImg height)
!

initialize
	super initialize.
	
	" Initialize default values "
	imgExtent := (self imageExtent).
	width := imgExtent x.
	height := imgExtent y.
! !

!ROImageShape methodsFor: 'not yet classified'!

initializePathOn: canvas for: anElement
	^  canvas 
		image: (self url)
		x: (anElement position x)
		y: (anElement position y) 
		width: ((self width) max: (self defaultExtent x)) 
		height: ((self height) max: (self defaultExtent y)) .
!

resizeContainerWith: anElement
	svgRect 		
		attr: 'width' with: ((self widthFor: anElement ) max: (self defaultExtent x));
		attr: 'height' with: ((self heightFor: anElement) max: (self defaultExtent y))
!

updateSVGElementOn: canvas for: anElement
	super updateSVGElementOn: canvas for: anElement.
	svgElement transform: 'S',(self scaleFactor asString).
!

url
	^ url
! !

!ROImageShape methodsFor: 'private'!

scale: factor
	self size: self width * factor
!

scaleFactor
	"self assert: (width / imgExtent ) = (height / imgExtent )."

	^ width / (imgExtent x)
!

url: aString
	url := aString
! !

!ROImageShape class methodsFor: 'not yet classified'!

url: aString
	^ self basicNew url: aString; initialize; yourself
! !

ROAbstractPathShape subclass: #ROLabel
	instanceVariableNames: 'text textCache'
	package: 'ARoassal'!
!ROLabel commentStamp!
text represents a Block or a Symbol
textCache is a String generated after evaluating 

text roValue: anElement model

which is done in textFor:!

!ROLabel methodsFor: 'not yet classified'!

centeringPathWith: anElement
	svgPath attr: 'x' value: ((svgRect attr: 'width') / 2) asInteger.
	svgPath attr: 'y' value: ((svgRect attr: 'height') / 2) asInteger.
	svgPath  attr: 'text-anchor' value: 'middle'.
!

fontSize: aNumber
!

initialize 
	super initialize.
	text := #model.
	textCache := nil.
!

initializeContainterOn: canvas for: anElement
	| container |
	container := super initializeContainterOn: canvas for: anElement.
	self setBoderTo: container.
	^ container.
!

initializePathOn: canvas for: anElement
	^ canvas text: 0
			y:10
			string: (self textFor: anElement).
!

installedOn: anElement
	height := 7 + (2 * 5).
	width := anElement model asString size * 7.
	
	" Change NullShape extent"
	anElement extent: width@height.
!

modelChanged: aROElement
	textCache := nil
!

padding
	^ 5
!

resizeContainerWith: anElement

	| textBBox |
	textBBox := svgPath getBBox.	
	svgRect attr: 'width'  value: (textBBox width + 5).
	svgRect attr: 'height' value:(textBBox height + 5).
!

scaleFactor
	^ width/ (svgElement attr: 'width').
!

setBoderTo: container
	container attr: 'stroke' value: 'lightGray'.
	container attr: 'stroke-width' value: 0.
!

svgPath
	^ svgPath
!

text
	^ text
!

text: anOneArgumentBlockOrSymbol
	text := anOneArgumentBlockOrSymbol.
	textCache := nil.
!

textCache: aString
	textCache := aString.
!

textFor: anElement
	^  textCache ifNil: [
			| v |
				v := (text roValue: anElement).
				 (v class == 'abc' class)
					ifFalse: [ v := v printString ].
				textCache := v.
			  v 
		]
!

updateSVGElementOn: canvas for: anElement
"	self text: anElement model asString."

	svgPath attr: 'text' value: (self textFor: anElement).
	self adaptContainerOn: canvas for: anElement.
	
	super updateSVGElementOn: canvas for: anElement.
! !

!ROLabel class methodsFor: 'not yet classified'!

defaultColor
	^ Color black.
!

text: aBlock
	^ self new text: aBlock
! !

ROShape subclass: #ROBox
	instanceVariableNames: 'borderColor borderWidth'
	package: 'ARoassal'!

!ROBox methodsFor: 'configuration'!

defaultSize
	^ 15
! !

!ROBox methodsFor: 'drawing'!

borderColor
	"Color of a box is set by setting a color, a block or a symbol, which is evaluated against the model of the element"
	"Return a color, a block or a symbol"
	^ borderColor
!

borderColor: aBlockOrSymbolOrObject
	"Color of a box is set by setting a color, a block or a symbol, which is evaluated against the model of the element"

	borderColor := aBlockOrSymbolOrObject
!

borderColorFor: element
	^ borderColor roValue: element
!

borderWidth
	^ borderWidth
!

borderWidth: aBlockOrSymbolOrObject
	borderWidth := aBlockOrSymbolOrObject.
!

borderWidthFor: element
	^ borderWidth roValue: element
!

initializeSVGElementOn: canvas for: anElement
	svgElement:= canvas 
		rect: (anElement position x)
		y: (anElement position y) 
		width: ((self widthFor: anElement ) max: (self defaultSize)) 
		height: ((self heightFor: anElement) max: (self defaultSize)) .
!

updateSVGElementOn: canvas for: anElement
	svgElement 
		attr: 'x' with: (anElement position x);
		attr: 'y' with: (anElement position y);
		attr: 'width' with: (self widthFor: anElement );
		attr: 'height' with: (self heightFor: anElement);
"
		attr: 'width' with: ((self widthFor: anElement ) max: (self defaultSize));
		attr: 'height' with: ((self heightFor: anElement) max: (self defaultSize));
"
		attr:'fill' with: (color asHTMLRGBA);
		attr: 'stroke-width' value: (self borderWidth);
		attr: 'stroke' value: (self borderColor asHTMLRGBA).
! !

!ROBox methodsFor: 'initialize'!

height
	^ height
!

initialize
	super initialize.
	" Initialize default values "
	width := self defaultSize.
	height := self defaultSize.
	
	borderColor := self class defaultBorderColor.
	borderWidth := 0
!

width
	^ width
! !

!ROBox class methodsFor: 'not yet classified'!

defaultBorderColor
	^ Color black
! !

ROBox subclass: #ROBorder
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROBorder methodsFor: 'not yet classified'!

color
	^ self borderColor
!

color: aColor
	^ self borderColor: aColor
!

initialize
	super initialize.
	" Fill color is inmutable. color and color: methods redirect to borderColor and borderColor:"
	color := Color white.
	borderColor := self class defaultColor.
	borderWidth := self class defaultBorderWidth
! !

!ROBorder class methodsFor: 'not yet classified'!

defaultBorderColor
	^ Color black
!

defaultBorderWidth
	^ 3
!

defaultColor
	^ self defaultBorderColor
! !

ROShape subclass: #ROEllipse
	instanceVariableNames: 'radius borderWidth borderColor'
	package: 'ARoassal'!

!ROEllipse methodsFor: 'configuration'!

borderWidth: anInteger
	borderWidth := anInteger
!

defaultRadius
	^ 3
! !

!ROEllipse methodsFor: 'drawing'!

borderColor
	^ borderColor
!

borderColor: aBlockOrSymbolOrObject
	borderColor := aBlockOrSymbolOrObject.
!

height
	^ self radius * 2.
!

initializeSVGElementOn: canvas for: anElement
	svgElement := canvas 
		circle: (anElement position x)
		y: (anElement position y) 
		r: (self radius) .
!

radius
	^ radius
!

radius: anInteger
	radius := anInteger
!

size: anInteger
	self radius: anInteger/2
!

updateSVGElementOn: canvas for: anElement
	svgElement 

		attr: 'cx' with: (anElement position x + (self radius ) );
		attr: 'cy' with: (anElement position y + (self radius ) );

		attr: 'r' with: (self radius);
		attr:'fill' with: (color asHTMLRGBA);
		attr: 'stroke-width' value: (self borderWidth);
		attr: 'stroke' value: (self borderColor asHTMLRGBA).
!

width
	^ self radius * 2.
! !

!ROEllipse methodsFor: 'initialize'!

borderWidth
	^ borderWidth
!

initialize
	super initialize.
	radius := self defaultRadius.
	width := self defaultRadius * 1.5.
	height := self defaultRadius * 1.5.
	borderWidth := 0. 
	borderColor := Color black.
! !

ROShape subclass: #RONullShape
	instanceVariableNames: ''
	package: 'ARoassal'!

!RONullShape methodsFor: 'hook'!

drawOn: canvas for: anElement
!

extent: anExtentPoint
	width := anExtentPoint x.
	height := anExtentPoint y.
!

extentFor: element
	^ (width roValue: element) @ (height roValue: element)
!

initialize
		self extent: self defaultExtent.
!

isHidden
	^true
!

isShapedAs: aShapeClass
	^ false
!

shapeDetect: aBlock
	(aBlock value: self) ifTrue: [ ^ self ].
	self error: 'Not found'
!

shapesDetect: aBlock
	self error: 'Not found'
! !

ROShape subclass: #ROPath
	instanceVariableNames: 'path borderColor borderWidth'
	package: 'ARoassal'!

!ROPath methodsFor: 'not yet classified'!

borderColor
	^ borderColor
!

borderWidth
	^ borderWidth
!

initialize
	super initialize.
	self path: ''.
	borderWidth := 1. 
	borderColor := self class defaultBorderColor.
	color := self class defaultColor.
	
	" added for Amber version "
	width := height := 20.
!

initializeSVGElementOn: canvas for: anElement
	svgElement := canvas path: path
!

path: aString
	path := aString
!

updateSVGElementOn: canvas for: anElement
	svgElement 
		transform: 'T0,0';
		transform: 'T',(anElement position x),',',(anElement position y);
		attr:'fill' with: (color asHTMLRGBA);
		attr: 'stroke-width' value: (self borderWidth);
		attr: 'stroke' value: (self borderColor asHTMLRGBA).
! !

!ROPath class methodsFor: 'not yet classified'!

defaultBorderColor
	^ Color black
!

defaultColor
	^ Color white
!

path: aString
	^ self new path: aString
! !

!Number methodsFor: '*ARoassal'!

raisedTo: exponent
< return Math.pow( self , exponent ) >
!

roValue: aBlock

	^ self
! !

!Collection methodsFor: '*ARoassal'!

asSortedCollection
        ^self class new
                addAll: self asArray sorted;
                yourself
!

asSortedCollection: aBlock
        ^self class new
                addAll: (self asArray sorted: aBlock);
                yourself
!

collect: collectBlock thenSelect: selectBlock
	"Utility method to improve readability."

	^ (self collect: collectBlock) select: selectBlock
! !

!SequenceableCollection methodsFor: '*ARoassal'!

anyOne
	^ self first
! !

