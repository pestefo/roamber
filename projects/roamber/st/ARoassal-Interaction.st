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

	element on: ROMouseEnter do: [:evt | evt element color: (self color). evt element view signalUpdate].
	element on: ROMouseLeave do: [:evt | evt element color: (element shape class defaultColor). evt element view signalUpdate].
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
		ev position: (e pageX  -  (RORaphaelCanvas origin x) - ('#roassal-canvas' asJQuery scrollLeft) ) @ (e pageY -  (RORaphaelCanvas origin y) - ('#roassal-canvas' asJQuery scrollTop)).
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

