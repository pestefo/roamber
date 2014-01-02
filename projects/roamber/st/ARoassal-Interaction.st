Smalltalk current createPackage: 'ARoassal-Interaction'!
ROObject subclass: #ROInteraction
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!

!ROInteraction methodsFor: 'as yet unclassified'!

elementToBeAdded
	^ self
!

initializeElement: element
	self subclassResponsibility
!

key 
	"Used in the dictionary each element has"

	^ self class
! !

!ROInteraction class methodsFor: 'as yet unclassified'!

elementToBeAdded
	^ self new
!

initializeElement: element
	^ self elementToBeAdded initializeElement: element; yourself
!

key 
	"Used in the dictionary each element has"

	^ self
! !

ROInteraction subclass: #ROClickable
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!
!ROClickable commentStamp!
REFACTOR:
- Move to ARoassal-Raphaeljs!

!ROClickable methodsFor: 'not yet classified'!

initializeElement: element
	| svgElement |
	svgElement := element shape svgElement.
	svgElement unclick.
	svgElement	click: [ 
		| ev |
		" see ROMorph>>roMouseClick:"
		ev := ROMouseLeftClick new.
		element announce: ev.
		].
! !

ROInteraction subclass: #RODraggable
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!

!RODraggable methodsFor: 'as yet unclassified'!

initializeElement: element
	| svgElement originX originY |
	svgElement := element shape svgElement.
	
	svgElement	
		drag: [ :dx :dy :x :y |
			"update element position and redraw"
			element translateTo: (x  - (RORaphaelCanvas origin x) - originX ) @ (y  - (RORaphaelCanvas origin y) - originY). 
			element signalUpdate.
		]
 		onStart: [ :x :y |
			| evt |
			" Save mouse position when click"
			originX := (x - (RORaphaelCanvas origin x)) - element position x.
			originY := (y - (RORaphaelCanvas origin y)) - element position y.
			
			" Announce that an element is being dragged"
			evt := ROMouseDragging new.
			element announce: evt.
		]
     	onEnd: [ 
			| evt |
			" Announce that an element is was dragged"
			evt := ROMouseDragged new.
			element announce: evt.
		].
! !

ROInteraction subclass: #ROHighlight
	instanceVariableNames: 'color'
	package: 'ARoassal-Interaction'!
!ROHighlight commentStamp!
REFACTOR:
- Move to ARoassal-Raphaeljs!

!ROHighlight methodsFor: 'not yet classified'!

color
	^ color
!

color: aColor
	color := aColor
!

initialize
	super initialize.
	color := self class defaultColor.
!

initializeElement: element

	element 
		on:  ROMouseEnter 
		do: [:evt | 
					evt element color: (self color). 
					evt element view signalUpdate
	].
	
	element 
		on: ROMouseLeave 
		do: [:evt | 
					evt element color: (element shape class defaultColor). 
					evt element view signalUpdate
	].
! !

!ROHighlight class methodsFor: 'not yet classified'!

color: aColor
	^ self new color: aColor
!

defaultColor
	^ Color red.
! !

ROInteraction subclass: #ROHoverable
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!

!ROHoverable methodsFor: 'not yet classified'!

initializeElement: element
	| svgElement      |
	svgElement := element shape svgElement.

	svgElement	
		hover: [ :e|
		| ev |
		ev := ROMouseEnter new.
"		ev position: (e clientX  -  (RORaphaelCanvas origin x)) @ (e clientY -  (RORaphaelCanvas origin y))."
"		ev position: (e pageX  -  (RORaphaelCanvas origin x) + ('#roassal-canvas' asJQuery scrollLeft) ) @ (e pageY -  (RORaphaelCanvas origin y) + ('#roassal-canvas' asJQuery scrollTop))."
		ev position: (e pageX  -  (RORaphaelCanvas origin x) ) @ (e pageY -  (RORaphaelCanvas origin y) ).	
		ev element: element.
		element announce: ev.
		]
		whenLeave: [
		| ev |
		ev := ROMouseLeave new.
		element announce: ev.
	].
! !

ROInteraction subclass: #ROPopup
	instanceVariableNames: 'text'
	package: 'ARoassal-Interaction'!

!ROPopup methodsFor: 'not yet classified'!

addPopupToView: element
	| view |
	view := self receivingViewFor: element.	
	
	" Is popupElement added to current view? "
	view = self popupElement view
		ifFalse: [ 	
			self class resetPopupElement.
			self class addPopupToView: view.
		]
!

initialize 
	super initialize.
	text := #yourself.
!

initializeElement: element
	
	self addPopupToView: element.
	
	element 
		on: ROMouseEnter 
		do: [ :evt |
			self updatePopupElementFor: element withEvent: evt.	
			self popupElement show.
	].
	
	element 
		on: ROMouseLeave 
		do: [:evt |
			self popupElement hide.
	].
			
	element 
		on: ROMouseDragging 
		do: [ :evt | 
			self popupElement hide.		
	].	

	element 
		on: ROMouseDragged 
		do: [ :evt | 
			self popupElement hide.		
	].
!

popupElement
	^ self class popupElement
!

receivingViewFor: element
	^ element view
!

text
		^text
!

text: textBlock
	" It is one-argument block. This argument represents the model of the bound element "
	text := textBlock
!

updatePopupElementFor: element withEvent: evt
	
	" change model of popupElement to change its text "
	self popupElement model: (text roValue: element model).
	
	" update the position to the event position  and update view"
	self popupElement translateTo: (evt position) + (10@10).
	self popupElement signalUpdate.
! !

ROPopup class instanceVariableNames: 'popupElement'!

!ROPopup class methodsFor: 'not yet classified'!

addPopupToView: view

	view add: self popupElement. 

	view signalUpdate.
	
	popupElement hide.
!

elementToBeAdded
	self popupElement. "initialize the roassal element for popup"
	^ super elementToBeAdded
!

popupElement
	^ popupElement ifNil: [ popupElement := (ROLabel elementOn: '#model') color: Color black.]
!

resetPopupElement
	popupElement := nil.
!

text: aString
	^ self new text: aString.
! !

ROInteraction subclass: #ROPopup2
	instanceVariableNames: 'text'
	package: 'ARoassal-Interaction'!
!ROPopup2 commentStamp!
OLD ROPopup!

!ROPopup2 methodsFor: 'not yet classified'!

createElementFor: anElement

	^ (ROLabel new elementOn: (text roValue: anElement model)) color: Color black
!

createPopupFor: element
	| popupElement popupPosition |
	popupElement := self createElementFor: element.

	" Add it to the view "
	(self receivingViewFor: element) add: popupElement.	

	^ popupElement
!

initialize 
	super initialize.
	text := #yourself.
!

initializeElement: element
	|  popupElement     |
	
	popupElement := self createPopupFor: element.
	
	popupElement signalUpdate.
	popupElement hide.

	
	element on: ROMouseEnter 
		do: [ :evt |

			popupElement translateTo: evt position.
			popupElement signalUpdate.

			popupElement show.

	].
	element on: ROMouseLeave 
		do: [:evt |
		popupElement hide.
	].
			
	element on: ROMouseDragging 
		do: [ :evt | 

			popupElement hide.		
	].	

	element on: ROMouseDragged 
		do: [ :evt | 
			popupElement hide.		
	].
!

receivingViewFor: element
	^ element view
!

text: textBlock
	text := textBlock
! !

!ROPopup2 class methodsFor: 'not yet classified'!

text: aString
	^ self new text: aString.
! !

