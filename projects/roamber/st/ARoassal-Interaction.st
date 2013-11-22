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

ROInteraction subclass: #ROAbstractPopup
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!

!ROAbstractPopup methodsFor: 'not yet classified'!

createPopupFor: element
	| popupElement popupPosition |
	popupElement := self createElementFor: element.
	"	popupElement := (ROElement on: 'toasty!!') + ROBox."
	
	" positioning "
	popupElement translateTo: (self popupPositionFor: element).

"	popupElement on: ROMouseLeave do: [ :e | popupElement view remove: popupElement ifAbsent: [  ] ]."
	popupElement on: ROMouseDragged do: [ :e | 
		Transcript show: 'ROMouseDragged event catched',(String cr).
		popupElement svgElement 
				translate: (element position x - (popupElement position x) )
				y: (element position y - (popupElement position y) ).
		popupElement translateTo: (self popupPositionFor: (e element)).

	].

	(self receivingViewFor: element) add: popupElement.	


"	self popups add: popupElement."

	^ popupElement
!

initializeElement: element
	| svgElement popupElement     |
	svgElement := element shape svgElement.
	
	popupElement := self createPopupFor: element.
	
	element signalUpdate.
	popupElement hide.

	
	element on: ROMouseEnter 
		do: [ :evt |
"			popupElement translateTo: (self popupPositionFor: element)."
			popupElement translateTo: evt position.
	"
			popupElement shape svgElement 
				translate: (element position x - (popupElement position x) )
				y: (element position y - (popupElement position y) ).
			popupElement translateTo: (self popupPositionFor: element).
"			

			popupElement show.

"
			self removeAllPopups.
			
			el := self createPopupFor: element.
			
			popupPosition := (element position x + 10)@(element position y + 10).
			el translateTo: popupPosition.
			element signalUpdate.
"			
	].
	element on: ROMouseLeave 
		do: [:evt |

		" remove popup and redraw"
"		popupElement translateTo: (self popupPositionFor: element)."
		popupElement hide.
"		self removeAllPopups.
		element announce: ROMouseLeave.
		element signalUpdate  
"	].
			
	element on: ROMouseDragging 
		do: [ :evt | 
"			popupElement translateTo: (self popupPositionFor: element)."
			popupElement hide.		
"			element signalUpdate."
"			self removeAllPopups.
			element announce: ROMouseLeave.
			element signalUpdate   
"		
	].	
	element on: ROMouseDragged 
		do: [ :evt | 
"			popupElement translateTo: (self popupPositionFor: element)."
			popupElement hide.		
"			element signalUpdate."
"			self removeAllPopups.
			element announce: ROMouseLeave.
			element signalUpdate   
"		
	].
!

popupPositionFor: element
	^  (element position x + 10)@(element position y + 10).
!

popups
	^self class popups
!

receivingViewFor: element
	^ element view
!

removeAllPopups
	
	self popups do: [ :p | self removePopup: p ].
	self class resetPopups
!

removePopup: el
	el ifNotNil: [ el remove ].
! !

ROAbstractPopup class instanceVariableNames: 'popups'!

!ROAbstractPopup class methodsFor: 'not yet classified'!

popups

	^ popups ifNil: [ popups := OrderedCollection new ]
!

resetPopups

	popups := nil
! !

ROAbstractPopup subclass: #ROPopup
	instanceVariableNames: 'text'
	package: 'ARoassal-Interaction'!

!ROPopup methodsFor: 'not yet classified'!

createElementFor: anElement

	^ (ROLabel new elementOn: (text value: anElement)) color: Color black
!

initialize 
	super initialize.
	text := [:el | el model asString].
!

text: textBlock
	text := textBlock value
	self halt.
! !

!ROPopup class methodsFor: 'not yet classified'!

text: aString
	^ self new text: aString.
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
		ev position: (e clientX  -  (RORaphaelCanvas origin x)) @ (e clientY -  (RORaphaelCanvas origin y)).
		element announce: ev.
		]
		whenLeave: [
		| ev |
		ev := ROMouseLeave new.
		element announce: ev.
	].
! !

