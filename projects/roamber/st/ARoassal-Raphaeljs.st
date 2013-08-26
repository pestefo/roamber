Smalltalk current createPackage: 'ARoassal-Raphaeljs'!
Object subclass: #RORaphael
	instanceVariableNames: 'view canvas eventBeginingDragging elementBeingPointed animationBlock'
	package: 'ARoassal-Raphaeljs'!
!RORaphael commentStamp!
A ROMorph is the unique interface between Roassal and Morphic

Instance Variables
	animationBlock:		<Object>
	canvas:		<Object>
	elementBeingPointed:		<Object>
	eventBeginingDragging:		<Object>
	view:		<Object>

animationBlock
	- xxxxx

canvas
	- xxxxx

elementBeingPointed
	- xxxxx

eventBeginingDragging
	- xxxxx

view
	- xxxxx!

!RORaphael methodsFor: 'accessing'!

bitmap
	"view camera realExtent: self bounds extent. "
	^ view bitmap
!

canvas
	| c |
	c := view canvasForRealSize: self bounds extent.
	c extent: self extent.
	^ c
!

elementForEvent: evt
	"evt contains a real position, since this is where the user click on the screen"
	
	^ self elementForRealPosition: (self relativePositionFor: evt)
!

elementForRealPosition: position
	"evt contains a real position, since this is where the user click on the screen"
	
	^ view elementAtRealPosition: position
! !

!RORaphael methodsFor: 'drawing'!

drawOn: aCanvas
	aCanvas clipBy: self bounds during: [ :c |
		c translateBy: self bounds origin during:
			[ :can | 
				canvas canvas: can.
				view drawOn: canvas ] ].
!

extent: v
	
	super extent: v.	
	canvas extent: v.
	view windowSize: v.
! !

!RORaphael methodsFor: 'events-processing'!

handleKeyDown: anEvent
	
	"COMENTED FOR NOW"

	"System level event handling."
"	anEvent wasHandled ifTrue:[^self].
	(self handlesKeyboard: anEvent) ifFalse:[^self].
	anEvent wasHandled: true.
	^self keyDown: anEvent"
!

handleKeyUp: anEvent

	"COMENTED FOR NOW"
	"System level event handling."
"	anEvent wasHandled ifTrue:[^self].
	(self handlesKeyboard: anEvent) ifFalse:[^self].
	anEvent wasHandled: true.
	^self keyDown: anEvent"
!

handleKeystroke: anEvent
	
	self roKeyStroke: anEvent.
!

handleMouseMove: anEvent

	super handleMouseMove: anEvent.
		
	self roMouseMoving: anEvent.
!

handleMouseOver: anEvent

	| currentElement |
	anEvent wasHandled ifTrue:[ ^ self ]. "not interested"
	"Do nothing if we are dragging"
	self isDragging ifTrue: [ ^ self ].
	 
	elementBeingPointed ifNil: [ elementBeingPointed := self elementForEvent: anEvent ].
	
	currentElement := self elementForEvent: anEvent.

"Transcript show: (view camera realToVirtualPoint: (self relativePositionFor: anEvent)) printString, '   ',  (elementBeingPointed == currentElement) printString; cr."

	(currentElement ~~ elementBeingPointed)
		ifTrue: [ 
			"Transcript show: 'mouse over: ', anEvent  printString, '  ', elementBeingPointed printString, '   ', currentElement printString; cr."
			"self roMouseLeave: anEvent."
			elementBeingPointed announce: ROMouseLeave.
			elementBeingPointed := currentElement.
			self roMouseEnter: anEvent ].
		
"	self roMouseMoving: anEvent."
!

handlesKeyboard: evt

	^true
!

handlesMouseDown: anEvent
	anEvent wasHandled ifTrue:[ ^ false ]. "not interested"

	^ true
!

handlesMouseOver: evt
	^ true
!

log: relativePosition
	Transcript
		show: 'leave: ' , (self elementForRealPosition: relativePosition) printString;
		cr
!

mouseDown: evt

	eventBeginingDragging ifNil: [
		evt hand 
					waitForClicksOrDrag: self 
					event: evt 
					selectors: { #roMouseClick:. nil. nil. #roMouseDragBegin: }
					threshold: 5.
		^ self ].
	
	evt anyButtonPressed ifTrue: [
		self roMouseDragging: evt.
	].
	evt wasHandled: true.
	^ true
!

mouseEnter: evt
"	Transcript show: 'mouseEnter ', evt printString; cr."
	
	evt anyButtonPressed ifFalse: [
		self roMouseEnter: evt.
	].
	evt wasHandled: true.
	^ true
!

mouseLeave: evt
	
	evt anyButtonPressed ifFalse: [
		self roMouseLeave: evt.
	].
	evt wasHandled: true.
	^ true
!

mouseMove: evt
	
	evt anyButtonPressed
		ifTrue: [ self roMouseDragging: evt ] 
		ifFalse: [ self roMouseMoving: evt ].
	evt wasHandled: true.
	^ true
!

mouseUp: evt
	self isDragging ifTrue: 
		[self roMouseDragEnd: evt ].
	evt wasHandled: true.
!

relativePositionFor: evt
	"Return the position within the window"
	
	^ evt position - self bounds origin
!

roKeyStroke: evt
	| relativePosition ev virtualPosition keyValue |
	
	view announce: (ROKeyDown new keyValue: evt keyValue).
!

roMouseClick: evt
	| relativePosition ev virtualPosition |
	relativePosition := self relativePositionFor: evt.	
	evt yellowButtonChanged
		ifTrue: [ ev := ROMouseRightClick new ].
	evt redButtonChanged
		ifTrue: [ ev := ROMouseLeftClick new ].
	evt blueButtonChanged
		ifTrue: [ ev := ROMouseClick new ].

	ev commandKeyPressed: evt commandKeyPressed.
	ev controlKeyPressed: evt controlKeyPressed.
	ev shiftKeyPressed: evt shiftPressed.

	virtualPosition := self realToVirtualPoint: relativePosition.
	ev position: virtualPosition.
"	Transcript show: (self elementForRealPosition: relativePosition) printString, '     ', relativePosition printString; cr."
	(self elementForRealPosition: relativePosition) announce: ev.
	
"Transcript show: 'click: ', virtualPosition printString; cr"
!

roMouseDragBegin: evt
"	Transcript show: 'drag begin: ', evt printString; cr."
	| relativePosition |
	eventBeginingDragging := evt copy.
	
	relativePosition := self relativePositionFor: evt.
	elementBeingPointed := self elementForRealPosition: relativePosition
	"elementBeingDragged := (view elementAt: (self realToVirtualPoint: relativePosition))"
!

roMouseDragEnd: evt
	"Transcript show: 'drag end: ', evt printString; cr."

	| relativePosition step event |
	relativePosition := self relativePositionFor: evt.
	step := evt position - eventBeginingDragging position.

	event := ROMouseDragged new 
				step: step; 
				yourself.
	
	event position: (self realToVirtualPoint: relativePosition).
	elementBeingPointed announce: event.

	eventBeginingDragging := nil.
	elementBeingPointed := nil
!

roMouseDragging: evt
	| step relativePosition event virtualStep |
"	Transcript show: 'drag dragging: ', evt printString; cr."

	eventBeginingDragging ifNil: [ ^ self ].
	relativePosition := self relativePositionFor: evt.
	step := evt position - eventBeginingDragging position.
	"step := (self realToVirtualPoint: evt position) - (self realToVirtualPoint: eventBeginingDragging position)."

	elementBeingPointed ifNil: 
		[ elementBeingPointed := self elementForRealPosition: relativePosition ].
	
"	virtualStep := (elementBeingPointed view canvasForRealSize: self extent) realToVirtualPoint: step.
	Transcript show: 'drag: ', elementBeingPointed printString, '   ', step printString, '  ', virtualStep printString; cr.
"	
	event := ROMouseDragging new 
				step: step; 
				yourself.
				
				
	event commandKeyPressed: evt commandKeyPressed.
	event controlKeyPressed: evt controlKeyPressed.
	event shiftKeyPressed: evt shiftPressed.				
	"Transcript show: 'dragging real step = ', step printString; cr."
	event position: relativePosition.
	elementBeingPointed announce: event.

	eventBeginingDragging := evt copy.
!

roMouseEnter: evt
	| relativePosition ev virtualPosition element |
	
	relativePosition := self relativePositionFor: evt.
	"Transcript show: 'enter ', (relativePosition) printString; cr."

	element := self elementForRealPosition: relativePosition.
	virtualPosition := element view camera realToVirtualPoint: relativePosition.
	ev := ROMouseEnter new.
	ev position: virtualPosition.
	ev realPosition: relativePosition.
	ev element: element.
	element announce: ev.
!

roMouseLeave: evt
	| relativePosition ev virtualPosition element |
	
	relativePosition := self relativePositionFor: evt.
	element := self elementForRealPosition: relativePosition.
	"Transcript show: 'leave: ', (self elementForRealPosition: relativePosition) printString; cr."

	virtualPosition := element view camera realToVirtualPoint: relativePosition.
	ev := ROMouseLeave new.
	ev position: virtualPosition.
	element announce: ev
!

roMouseMoving: evt

	| relativePosition ev |
	relativePosition := self relativePositionFor: evt.	
	ev := ROMouseMove new.
	ev position: (view camera realToVirtualPoint: relativePosition).
	"Transcript show: 'moving: '; cr."
	(self elementForRealPosition: relativePosition) announce: ev
!

takesKeyboardFocus
	"Answer whether the receiver can normally take keyboard focus."

	^ true
! !

!RORaphael methodsFor: 'initialize'!

setView: anROView
	view := anROView.
	
	"Maybe something smarter with #invalidRect: can be done here. Need to check."
	view on: RORefreshNeeded do: [ :event | self changed ].
	view on: ROViewChanged do: [ :event |   
		event newView on: RORefreshNeeded do: [ :e | self changed ].
		 self changed ].

	canvas := view camera canvas.
	self extent: view defaultWindowSize.
	canvas extent: self extent.
!

view 
	^ view
! !

!RORaphael methodsFor: 'morph'!

openInWindow
	"Open a window that contains the morph"

	^ self openInWindowLabeled: view title
!

step
	animationBlock isComplete ifTrue: [ animationBlock := nil. self stopStepping. ^ self ].
	animationBlock incrementStep.
	self changed.
!

stepTime
	"Answer the desired time between steps in milliseconds. This default implementation requests that the 'step' method be called once every second."

	^ 5
!

wantsSteps
	^ animationBlock notNil
! !

!RORaphael methodsFor: 'testing'!

isDragging
	^ eventBeginingDragging notNil
! !

!RORaphael methodsFor: 'util'!

realToVirtualPoint: aPoint
	"^ (view canvasForRealSize: self extent) realToVirtualPoint: aPoint"
	^ view camera realToVirtualPoint: aPoint
! !

!RORaphael class methodsFor: 'public'!

on: aView
	^ self new setView: aView; yourself
! !

ROObject subclass: #RORaphaelCanvas
	instanceVariableNames: 'svgCanvas'
	package: 'ARoassal-Raphaeljs'!

!RORaphaelCanvas methodsFor: 'as yet unclassified'!

canvas
	^ svgCanvas
!

initialize
	super initialize.
	svgCanvas := self paper.
	^ self
!

paper
	< return Raphael("roassal-canvas", 800, 600);>
! !

RORaphaelCanvas class instanceVariableNames: 'paper'!

!RORaphaelCanvas class methodsFor: 'as yet unclassified'!

canvas
paper ifNil: [paper := self basicNew initialize].
       ^ paper canvas
!

new	
	self error: 'Use canvas instead.'
! !

