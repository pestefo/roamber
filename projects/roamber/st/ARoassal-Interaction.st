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
	| svgElement |
	svgElement := element shape svgElement.
	svgElement	
		drag: [ :dx :dy |
			| bboxCurrent |
			bboxCurrent := svgElement getBBox.
			svgElement translate: ((element position x) - (bboxCurrent x) + dx) y: ((element position y) -(bboxCurrent y) + dy).

		]
  		onStart: [ "do nothing"]
      	onEnd: [ 
			| bboxAfterDrag | 
			bboxAfterDrag := svgElement getBBox.
			"update current position"
			"element translateTo: (bboxAfterDrag x)@(bboxAfterDrag y)."
		].
! !

