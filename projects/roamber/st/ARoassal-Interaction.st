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
	| el |
	el := self createElementFor: element.
	el on: ROMouseLeave do: [ :e | el view remove: el ifAbsent: [  ] ].

	(self receivingViewFor: element) add: el.	

	self popups add: el.

	^ el
!

initializeElement: element
	| svgElement   |
	svgElement := element shape svgElement.
	
	svgElement	
		mouseover: [ :x :y |
			| el popupPosition |
			self removeAllPopups.
			
			el := self createPopupFor: element.
			
"	
			popupPosition := self 
			closestPositionOf: el 
			from: event 
			realPosition 
			in: (self receivingViewFor: element).
			el translateTo: popupPosition.
"	
			popupPosition := (element position x + 10)@(element position y + 10).
			el translateTo: popupPosition.
			element signalUpdate.

		].

"
	element on: ROMouseLeave do: [ :event | 
"
	svgElement
		unmouseover: [
		" remove popup and redraw"
		self removeAllPopups.
		element announce: ROMouseLeave.
		element signalUpdate  
	].
			
	element on: ROMouseDragging do: [ :event | 
	self removeAllPopups ].
!

popups
	^self class popups
!

receivingViewFor: element
	^ element view
!

removeAllPopups
	" TODO "
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
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!

!ROPopup methodsFor: 'not yet classified'!

createElementFor: anElement
"
	^ ROElement new
			add: (ROElement new 
					+ ((ROLabel 
						text: (text roValue: element model)) color: textColor))
					+ box copy;
			yourself
"			
			
		^ (ROElement on: (anElement model)) + ROLabel.
! !

ROInteraction subclass: #ROClickable
	instanceVariableNames: ''
	package: 'ARoassal-Interaction'!

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
			" Save mouse position when click"
			originX := (x - (RORaphaelCanvas origin x)) - element position x.
			originY := (y - (RORaphaelCanvas origin y)) - element position y.
		]
     	onEnd: [ 
			"do nothing"
		].
! !

