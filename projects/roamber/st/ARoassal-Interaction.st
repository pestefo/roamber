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

