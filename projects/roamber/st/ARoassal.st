Smalltalk current createPackage: 'ARoassal'!
Object subclass: #Color
	instanceVariableNames: 'r g b'
	package: 'ARoassal'!

!Color methodsFor: 'not yet classified'!

b
	^ b
!

cleanValue: anInteger
	" Clean for possible mistaken values"
	(anInteger > 255) 
		ifTrue: [^ 255]
		ifFalse: [
			(anInteger < 0) ifTrue: [^ 0] ].
	^ anInteger.
!

g
	^ g
!

r
	^ r
!

r: rVal g: gVal b: bVal
	r :=  self cleanValue: rVal.
	g :=  self cleanValue: gVal.
	b:=  self cleanValue: bVal.
! !

!Color class methodsFor: 'not yet classified'!

black
	^ self new r: 0 g: 0 b: 0
!

blue
	^ self new r: 0 g: 0 b: 255
!

green
	^ self new r: 0 g: 255 b: 0
!

lightGray
	^ self new r: 211 g: 211 b: 211
!

r: rVal g: gVal b: bVal
	^ self new r: rVal g: gVal b: bVal.
!

red
	^ self new r: 255 g: 0 b: 0
!

white
	^ self new r: 255 g: 255 b: 255
! !

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

ROObject subclass: #ROContainer
	instanceVariableNames: 'elements attributes'
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

elementsDo: aBlock
	^ elements copy do: aBlock
!

elementsSuchThat: aBlock
	^ elements select: aBlock
!

initialize
	super initialize.
	elements := OrderedCollection new.
! !

ROContainer subclass: #ROAbstractComponent
	instanceVariableNames: 'model view interactions shape eventHandler'
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
	model := anObject
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
	
	eventHandler := ROAnnouncer new.
	view := ROView nullView.
	
	"Actually, I am not sure we need to have a variable interactions"
"	interactions := IdentityDictionary new.

	zIndex := 0
"
! !

!ROAbstractComponent methodsFor: 'drawing'!

addShape: aShape 
	"Add a shape to myself. aShape could either be an instance of a shape class or simply a class"

	| s |
	s := (aShape installedOn: self).
"	s addLast: shape."
	Transcript show: (s width asString),'-BEFOREinstalledOn:-',(s class asString),(String cr).
	" set height and width from previous shape <--- needs to be changed when implementing chain of shapes "
	self shape isNil ifFalse: [
		s width: self shape width.
		s height: self shape height.	
	].
	Transcript show: (s width asString),'-AFTERinstalledOn:-',(s class asString),(String cr).
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

isElement
	^ self isEdge not
!

isNotEdge
	^ self isEdge not
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
"	self announce: ROElementResized."
	shape extent: aPoint
!

height
	^ shape heightFor: self
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

translateTo: aPoint 
	position := aPoint
!

width
	^ shape widthFor: self
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
	element removeShape.
	elements remove: element
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
	elements := Array new.
	svgCanvas := self paper.
	self clear
! !

!ROView methodsFor: 'public - opening'!

clear
	self paper clear
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
	instanceVariableNames: 'svgElement height width color'
	package: 'ARoassal'!

!ROShape methodsFor: 'accessing'!

color:	 aColor
	color := aColor.
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

removeSVGElement
	svgElement remove.
!

rgbColor
	^ 'rgb(',(color r asString),',',(color g asString),',',(color b asString),')'.
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

hide
	svgElement hide.
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
!

initializeSVGElementOn: canvas for: anElement
	"Initialize svgElement"
	self subclassResponsibility
!

updateSVGElementOn: canvas for: anElement
	"Redraw svgElement with current attributes"
	self subclassResponsibility
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

installedOn: element
	^ self new installedOn: element; yourself
! !

ROShape subclass: #ROAbstractLineShape
	instanceVariableNames: 'attachPoint'
	package: 'ARoassal'!

!ROAbstractLineShape methodsFor: 'not yet classified'!

attachPoint
	
	^ attachPoint
!

attachPoint: attach
	
	attachPoint := attach
!

endingPointOf: anEdge
	 ^ attachPoint endingPointOf: anEdge
!

initialize
	super initialize.
	attachPoint := ROShorterDistanceAttachPoint instance.
"	strokeWidth := self defaultWidth.
	arrows := OrderedCollection new"
!

startingPointOf: anEdge
	^ attachPoint startingPointOf: anEdge
! !

!ROAbstractLineShape class methodsFor: 'not yet classified'!

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

ROShape subclass: #ROAbstractPathShape
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROAbstractPathShape methodsFor: 'not yet classified'!

centeringPath: svgPath into: svgRect
	svgPath attr: 'x' value: ((svgRect attr: 'width') / 2) asInteger.
	svgPath attr: 'y' value: ((svgRect attr: 'height') / 2) asInteger.
!

createSetWith: svgRect and: svgPath on: canvas for: anElement
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
	| svgRect svgPath |
	
	svgRect := self initializeContainterOn: canvas for: anElement.
	svgPath := self initializePathOn: canvas for: anElement.
	
	self resizeContainer: svgRect for: svgPath. 
	self centeringPath: svgPath into: svgRect.
	self createSetWith: svgRect and: svgPath on: canvas for: anElement.
!

padding
	^ 0
!

removeSVGElement
	svgElement clear.
!

resizeContainer: svgRect for: svgPath
	self subclassResponsibility
!

updateSVGElementOn: canvas for: anElement
	svgElement transform: 'T0,0'.
	svgElement transform: 'T',(anElement position x),',',(anElement position y).
"
	svgElement translate: 0 y: 0.
	svgElement translate: (anElement position x) y: (anElement position y).
"
! !

ROAbstractPathShape subclass: #ROLabel
	instanceVariableNames: 'text'
	package: 'ARoassal'!

!ROLabel methodsFor: 'not yet classified'!

centeringPath: svgPath into: svgRect
	super centeringPath: svgPath into: svgRect.
	svgPath  attr: 'text-anchor' value: 'middle'.
!

initialize 
	super initialize.
	text := #model.
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
			string: (self text).
!

initializeSVGElementOn: canvas for: anElement
"Paper.print(x, y, string, font, [size], [origin], [letter_spacing])
	x - position of the text
	y - position of the text
	string - text to print
	font - font object, see --> Paper.getFont(family, [weight], [style], [stretch])
	size - size of the font, default is 16
	origin - could be baseline' or 'middle' (default)
	letter_spacing - number number in range -1..1, default is 0
	Returns: object resulting path element, which consist of all letters
   ----------- how to use getFont?????
   
   using paper.text() instead
	"
	
	"example from: http://stackoverflow.com/questions/8771635/wrap-text-to-fit-into-a-rectangle-raphael"
		self text: anElement model asString.
		super initializeSVGElementOn: canvas for: anElement.
!

installedOn: anElement
	height := 7 + (2 * 5).
	width := anElement model asString size * 7.
	
	" Change NullShape extent"
	anElement extent: width@height.
!

padding
	^ 5
!

resizeContainer: svgRect for: svgPath 
	svgRect attr: 'width'  value: (self width).
	svgRect attr: 'height' value: self textHeight + (self padding * 2).
!

setBoderTo: container
	container attr: 'stroke' value: 'lightGray'.
	container attr: 'stroke-width' value: 0.
!

text
	^ text
!

text: anObject
	text := anObject
!

textHeight 
	" Measured empirically. It's ugly, I know"
	^  8
! !

!ROLabel class methodsFor: 'not yet classified'!

text: aBlock
	^ self new text: aBlock
! !

ROAbstractPathShape subclass: #ROTux
	instanceVariableNames: ''
	package: 'ARoassal'!

ROShape subclass: #ROBox
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROBox methodsFor: 'configuration'!

defaultSize
	^ 15
! !

!ROBox methodsFor: 'drawing'!

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
		attr: 'width' with: ((self widthFor: anElement ) max: (self defaultSize));
		attr: 'height' with: ((self heightFor: anElement) max: (self defaultSize));
		attr:'fill' with: (self rgbColor).
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
	
	" create svgElement and hide it"
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
	self radius: anInteger
!

updateSVGElementOn: canvas for: anElement
	svgElement 
		attr: 'cx' with: (anElement position x);
		attr: 'cy' with: (anElement position y);
		attr: 'r' with: (self radius);
		attr:'fill' with: (self rgbColor).
!

width
	^ self radius * 2.
! !

!ROCircle methodsFor: 'initialize'!

initialize
	super initialize.
	radius := self defaultRadius.
	width := self defaultRadius * 1.5.
	height := self defaultRadius * 1.5.
! !

ROShape subclass: #RONullShape
	instanceVariableNames: ''
	package: 'ARoassal'!

!RONullShape methodsFor: 'hook'!

extent: anExtentPoint
	width := anExtentPoint x.
	height := anExtentPoint y.
!

extentFor: element
	^ (width roValue: element) @ (height roValue: element)
!

initialize
		self extent: self defaultExtent.
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

!Number methodsFor: '*ARoassal'!

roValue: aBlock

	^ self
! !

