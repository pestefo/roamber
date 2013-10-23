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
	
	" set height and width from previous shape <--- needs to be changed when implementing chain of shapes "
	self shape isNil ifFalse: [
		s width: self shape width.
		s height: self shape height.	
	].
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

ROShape subclass: #ROLabel
	instanceVariableNames: 'text'
	package: 'ARoassal'!

!ROLabel methodsFor: 'not yet classified'!

height
"	^ svgElement attr: 'height'."
	^ 20
!

initialize 
	super initialize.
	text := #model.
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
	|str svgText svgRect |
	"str := self textFor: anElement."
	
	" container rectangle"
	svgRect := canvas rect: 0
				y: 0 
				width: 1
				rect: 1.
	svgRect attr: 'fill' value: 'white'.			
	svgRect attr: 'stroke' value: 'gray'.
	svgRect attr: 'stroke-width' value: 2.
				
	" text "
	svgText := canvas text: 0
			y:10
			string: text.
	
	" create set and add the elements "
	svgElement := canvas  set.
	svgElement push: svgRect; push: svgText.
	
	" adapt the size of rectangle "
	svgRect attr: 'width'  value: svgElement getBBox width + 10.
	svgRect attr: 'height' value: svgElement getBBox height + 10.

	" aling text in the middle first horizontally and then vertically"
	svgText attr: 'x' value: ((svgRect attr: 'width') / 2) asInteger.
	svgText  attr: 'text-anchor' value: 'middle'.			" fill:'#ff0000','font-size': 14});			"	
	svgText attr: 'y' value: ((svgRect attr: 'height') / 2) asInteger.
	
	" enable translating "
	svgElement translate:  (anElement position x) y: (anElement position y).
!

removeSVGElement
	svgElement clear.
!

text
	^ text
!

text: anObject
	text := anObject
!

textFor: aROElement
	 | v |
	self halt.
	v := (text roValue: aROElement).
	^ (v class == 'abc' class)
			ifTrue: [ v ]
			ifFalse: [ v printString ]
!

updateSVGElementOn: canvas for: anElement
	svgElement transform: 'T0,0'.
	svgElement transform: 'T',(anElement position x),',',(anElement position y).
"
	svgElement translate: 0 y: 0.
	svgElement translate: (anElement position x) y: (anElement position y).
"
!

width
"	^ svgElement attr: 'width'."
" ^	text size * 5."
^ 25
! !

!ROLabel class methodsFor: 'not yet classified'!

text: aBlock
	^ self new text: aBlock
! !

ROShape subclass: #ROLabel2
	instanceVariableNames: 'text'
	package: 'ARoassal'!

!ROLabel2 methodsFor: 'not yet classified'!

initialize 
	super initialize.
	text := #model.
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
	|str|
	str := self textFor: anElement.
	svgElement:= canvas 
		text: 100
		y: 50
		string: str.
!

text
	^ text
!

text: anObject
	text := anObject
!

textFor: aROElement
	 | v |
	v := (text roValue: aROElement).
	^ (v class == 'abc' class)
			ifTrue: [ v ]
			ifFalse: [ v printString ]
!

updateSVGElementOn: canvas for: anElement
	self initializeSVGElementOn: canvas for: anElement
"
	svgElement 
		attr: 'x' with: (anElement position x);
		attr: 'y' with: (anElement position y);
		attr: 'width' with: (self widthFor: anElement);
		attr: 'height' with: (self heightFor: anElement);
		attr:'fill' with: 'lightGray'.
"
! !

!ROLabel2 class methodsFor: 'not yet classified'!

text: aBlock
	^ self new text: aBlock
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

ROShape subclass: #ROTux
	instanceVariableNames: ''
	package: 'ARoassal'!

!ROTux methodsFor: 'not yet classified'!

initializeSVGElementOn: canvas for: anElement
	svgElement := canvas path:
	'M11.791,25.229c1.027-0.104,1.162-1.191,0.68-1.666c-0.398-0.392-2.598-2.022-3.171-2.664C9.033,20.6,8.673,20.454,8.52,20.12c-0.352-0.771-0.598-1.869-0.151-2.658c0.081-0.144,0.133-0.078,0.071,0.22c-0.351,1.684,0.746,3.059,0.986,2.354c0.167-0.487,0.013-1.358,0.102-2.051c0.158-1.226,1.273-3.577,1.763-3.712c-0.755-1.398,0.886-2.494,0.866-3.723c-0.014-0.798,0.701,0.982,1.419,1.359c0.802,0.422,1.684-0.794,2.936-1.41c0.354-0.176,0.809-0.376,0.776-0.524c-0.146-0.718-1.644,0.886-2.979,0.939c-0.61,0.024-0.837-0.12-1.072-0.347c-0.712-0.689,0.073-0.115,1.132-0.307c0.471-0.085,0.629-0.163,1.128-0.365c0.5-0.201,1.069-0.5,1.636-0.654c0.395-0.106,0.361-0.402,0.208-0.491c-0.088-0.051-0.219-0.046-0.321,0.133c-0.244,0.419-1.383,0.661-1.74,0.771c-0.457,0.14-0.962,0.271-1.634,0.243c-1.021-0.042-0.782-0.509-1.513-0.928c-0.213-0.122-0.156-0.444,0.129-0.729c0.148-0.148,0.557-0.232,0.76-0.572c0.028-0.047,0.289-0.32,0.494-0.461c0.07-0.049,0.076-1.295-0.562-1.32c-0.543-0.021-0.697,0.398-0.675,0.818c0.022,0.419,0.245,0.765,0.393,0.764c0.285-0.004,0.019,0.311-0.138,0.361c-0.237,0.078-0.562-0.934-0.525-1.418c0.039-0.506,0.303-1.4,0.942-1.383c0.576,0.016,0.993,0.737,0.973,1.983c-0.003,0.211,0.935-0.101,1.247,0.229c0.224,0.236-0.767-2.207,1.438-2.375c0.582,0.111,1.14,0.305,1.371,1.641c-0.086,0.139,0.146,1.07-0.215,1.182c-0.438,0.135-0.707-0.02-0.453-0.438c0.172-0.418,0.004-1.483-0.882-1.42c-0.887,0.064-0.769,1.637-0.526,1.668c0.243,0.031,0.854,0.465,1.282,0.549c1.401,0.271,0.371,1.075,0.555,2.048c0.205,1.099,0.929,0.809,1.578,3.717c0.137,0.177,0.676,0.345,1.199,2.579c0.473,2.011-0.195,3.473,0.938,3.353c0.256-0.026,0.629-0.1,0.792-0.668c0.425-1.489-0.213-3.263-0.855-4.46c-0.375-0.698-0.729-1.174-0.916-1.337c0.738,0.436,1.683,1.829,1.898,2.862c0.286,1.358,0.49,1.934,0.059,3.37c0.25,0.125,0.871,0.39,0.871,0.685c-0.647-0.53-2.629-0.625-2.68,0.646c-0.338,0.008-0.594,0.034-0.811,0.293c-0.797,0.944-0.059,2.842-0.139,3.859c-0.07,0.896-0.318,1.783-0.46,2.683c-0.474-0.019-0.428-0.364-0.274-0.852c0.135-0.431,0.351-0.968,0.365-1.484c0.012-0.467-0.039-0.759-0.156-0.831c-0.118-0.072-0.303,0.074-0.559,0.485c-0.543,0.875-1.722,1.261-2.821,1.397c-1.099,0.138-2.123,0.028-2.664-0.578c-0.186-0.207-0.492,0.058-0.529,0.111c-0.049,0.074,0.18,0.219,0.352,0.533c0.251,0.461,0.49,1.159-0.105,1.479C12.83,26.314,12.316,26.221,11.791,25.229L11.791,25.229zM11.398,25.188c0.395,0.621,1.783,3.232-0.652,3.571c-0.814,0.114-2.125-0.474-3.396-0.784c-1.142-0.279-2.301-0.444-2.949-0.627c-0.391-0.108-0.554-0.25-0.588-0.414c-0.091-0.434,0.474-1.041,0.503-1.555c0.028-0.514-0.188-0.779-0.364-1.199c-0.177-0.42-0.224-0.734-0.081-0.914c0.109-0.141,0.334-0.199,0.698-0.164c0.462,0.047,1.02-0.049,1.319-0.23c0.505-0.309,0.742-0.939,0.516-1.699c0,0.744-0.244,1.025-0.855,1.366c-0.577,0.319-1.467,0.062-1.875,0.416c-0.492,0.427,0.175,1.528,0.12,2.338c-0.042,0.622-0.69,1.322-0.401,1.946c0.291,0.627,1.648,0.695,3.064,0.99c2.012,0.422,3.184,1.153,4.113,1.188c1.356,0.05,1.564-1.342,3.693-1.36c0.621-0.033,1.229-0.052,1.835-0.06c0.688-0.009,1.375-0.003,2.079,0.014c1.417,0.034,0.931,0.773,1.851,1.246c0.774,0.397,2.17,0.241,2.504-0.077c0.451-0.431,1.662-1.467,2.592-1.935c1.156-0.583,3.876-1.588,1.902-2.812c-0.461-0.285-1.547-0.588-1.639-2.676c-0.412,0.366-0.365,2.312,0.784,2.697c1.283,0.431,2.085,1.152-0.301,1.969c-1.58,0.54-1.849,0.706-3.099,1.747c-1.267,1.054-3.145,0.636-2.815-1.582c0.171-1.155,0.269-2.11-0.019-3.114c-0.142-0.49-0.211-1.119-0.114-1.562c0.187-0.858,0.651-1.117,1.106-0.293c0.285,0.519,0.385,1.122,1.408,1.171c1.607,0.077,1.926-1.553,2.439-1.627c0.343-0.05,0.686-1.02,0.425-2.589c-0.28-1.681-1.269-4.332-2.536-5.677c-1.053-1.118-1.717-2.098-2.135-3.497c-0.352-1.175-0.547-2.318-0.475-3.412c0.094-1.417-0.691-3.389-1.943-4.316c-0.782-0.581-2.011-0.893-3.122-0.88c-0.623,0.007-1.21,0.099-1.661,0.343c-1.855,1.008-2.113,2.445-2.086,4.088c0.025,1.543,0.078,3.303,0.254,4.977c-0.208,0.77-1.288,2.227-1.979,3.114C8.59,14.233,8.121,16.01,7.52,17.561c-0.321,0.828-0.862,1.2-0.908,2.265C6.6,20.122,6.61,20.891,6.894,20.672C7.98,19.829,9.343,21.95,11.398,25.188L11.398,25.188zM17.044,2.953c-0.06,0.176-0.3,0.321-0.146,0.443c0.152,0.123,0.24-0.171,0.549-0.281c0.08-0.028,0.449,0.012,0.519-0.164c0.03-0.077-0.19-0.164-0.321-0.291c-0.133-0.125-0.262-0.236-0.386-0.229C16.938,2.451,17.096,2.798,17.044,2.953L17.044,2.953zM18.934,9.35c0.115-0.121,0.174,0.207,0.483,0.402c0.244,0.154,0.481,0.04,0.545,0.354c0.044,0.225-0.097,0.467-0.284,0.436C19.35,10.486,18.596,9.705,18.934,9.35L18.934,9.35zM13.832,7.375c-0.508-0.037-0.543,0.33-0.375,0.324C13.629,7.693,13.523,7.408,13.832,7.375L13.832,7.375zM12.96,6.436c0.06-0.013,0.146,0.09,0.119,0.233c-0.037,0.199-0.021,0.324,0.117,0.325c0.022,0,0.048-0.005,0.056-0.057c0.066-0.396-0.14-0.688-0.225-0.711C12.834,6.178,12.857,6.458,12.96,6.436L12.96,6.436zM16.663,6.268c0.129,0.039,0.253,0.262,0.28,0.504c0.002,0.021,0.168-0.035,0.17-0.088c0.011-0.389-0.321-0.571-0.408-0.562C16.506,6.139,16.562,6.238,16.663,6.268L16.663,6.268zM14.765,7.423c0.463-0.214,0.625,0.118,0.465,0.171C15.066,7.648,15.065,7.345,14.765,7.423L14.765,7.423zM9.178,15.304c-0.219-0.026,0.063-0.19,0.184-0.397c0.131-0.227,0.105-0.511,0.244-0.469s0.061,0.2-0.033,0.461C9.491,15.121,9.258,15.313,9.178,15.304L9.178,15.304z'
!

updateSVGElementOn: canvas for: anElement
	self initializeSVGElementOn: canvas for: anElement.
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

