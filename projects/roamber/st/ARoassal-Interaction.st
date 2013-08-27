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
	| svgElement canvasPosX canvasPosY |
	svgElement := element shape svgElement.
	canvasPosX := RORaphaelCanvas canvas canvas offsetLeft.
	canvasPosY := RORaphaelCanvas canvas canvas offsetTop.
	svgElement	
		drag: [ :dx :dy :x :y |
			"Transcript show: 'el-x ',(element position x),' x ',x,' el-y ', (element position y) ,' y ',y,String cr."

			"update element position and redraw"
			element translateTo: (x - (element width * 1.5) - canvasPosX ) @ (y - (element height * 1.5) - canvasPosY). "width/height * 1.5 for mouse position correction"
			element signalUpdate.
		]
 		onStart: [ "do nothing"
			| bboxStart |
			"
			Transcript clear.
			Transcript show: 'Element ',(element position asString),String cr.
			bboxStart := svgElement getBBox.
			Transcript show: 'BBox ',(bboxStart x),'@',(bboxStart y),String cr.
			"
		]
     	onEnd: [ "do nothing"
		].
! !

