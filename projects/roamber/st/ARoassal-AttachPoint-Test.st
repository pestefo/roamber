Smalltalk current createPackage: 'ARoassal-AttachPoint-Test'!
ROTest subclass: #ROAttachPointTest
	instanceVariableNames: 'view el1 el2 edge shape'
	package: 'ARoassal-AttachPoint-Test'!

!ROAttachPointTest methodsFor: 'rendering'!

testRenderingEmbeddedVerticalAttachPoint

	| canvas str spr embedding trace1 |
	
	view := ROView new.
	el1 := ROElement sprite.
	el2 := ROElement sprite.
	shape := ROLine new.
	shape attachPoint: (ROVerticalAttachPoint new).
	edge := (ROEdge from: el1 to: el2) + shape.
	embedding := ROElement sprite.
	embedding add: el1; add: el2; add: edge.
	ROHorizontalLineLayout on: (Array with: el1 with: el2).  
 
	embedding translateBy: 40 @ 30.

	canvas := ROTracingCanvas new.
	view add: embedding.
	view drawOn: canvas.
 
	self assert: canvas trace = #(#(#frameAndFillRectangle: '(0@0) corner: (40@30)' 'Color white' 0 'Color white') #(#line '(40@30)' '(160@30)' 1 'Color red') #(#line '(160@30)' '(160@90)' 1 'Color red') #(#line '(160@90)' '(40@90)' 1 'Color red') #(#line '(40@90)' '(40@30)' 1 'Color red') #(#line '(45@35)' '(95@35)' 1 'Color red') #(#line '(95@35)' '(95@85)' 1 'Color red') #(#line '(95@85)' '(45@85)' 1 'Color red') #(#line '(45@85)' '(45@35)' 1 'Color red') #(#line '(105@35)' '(155@35)' 1 'Color red') #(#line '(155@35)' '(155@85)' 1 'Color red') #(#line '(155@85)' '(105@85)' 1 'Color red') #(#line '(105@85)' '(105@35)' 1 'Color red') #(#line '(130@35)' '(70@85)' 1 'Color veryLightGray'))
!

testRenderingVerticalAttachPoint

	| canvas |
	shape attachPoint: (ROVerticalAttachPoint new).
	canvas := ROTracingCanvas new.
	view drawOn: canvas.
	
	self assert: canvas trace = #(#(#frameAndFillRectangle: '(0@0) corner: (40@30)' 'Color white' 0 'Color white') #(#line '(5@5)' '(55@5)' 1 'Color red') #(#line '(55@5)' '(55@55)' 1 'Color red') #(#line '(55@55)' '(5@55)' 1 'Color red') #(#line '(5@55)' '(5@5)' 1 'Color red') #(#line '(65@5)' '(115@5)' 1 'Color red') #(#line '(115@5)' '(115@55)' 1 'Color red') #(#line '(115@55)' '(65@55)' 1 'Color red') #(#line '(65@55)' '(65@5)' 1 'Color red') #(#line '(90@5)' '(30@55)' 1 'Color black'))
! !

!ROAttachPointTest methodsFor: 'running'!

setUp
	
	view := ROView new.
	el1 := ROElement spriteOn: 1.
	el2 := ROElement spriteOn: 2.
"	el1 @ ROPopup.
	el2 @ ROPopup."
	el1 @ RODraggable.
	el2 @ RODraggable.
	
	edge := ROEdge from: el1 to: el2.
	view addAll: (Array with: el1 with: el2 with: edge).
	shape := ROLine new color: Color black.
	edge + shape.
	ROHorizontalLineLayout on: (Array with: el1 with: el2)
! !

!ROAttachPointTest methodsFor: 'tests'!

testHorizontalAttachPoint
	shape attachPoint: (ROHorizontalAttachPoint new).
	self assert: (shape startingPointOf: edge) = (el1 bounds topRight + (0 @ (el1 bounds extent y / 2)) asIntegerPoint ) .
	self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + (0 @ (el2 bounds extent y / 2)) asIntegerPoint )  .
!

testShorterDistancePoint1
	shape attachPoint: (ROShorterDistanceAttachPoint new).
	
	"el1 and el2 are on the same horizontal line. el1 is on the left of el2"
	self assert: (shape startingPointOf: edge) = (el1 bounds topRight + (0 @ (el1 bounds extent y / 2)) asIntegerPoint)  .
	self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + (0 @ (el2 bounds extent y / 2)) asIntegerPoint)
!

testShorterDistancePoint2
	| p |
	shape attachPoint: (ROShorterDistanceAttachPoint new).
	
	"el1 and el2 are on the same horizontal line. el2 is on the left of el1"
	p := el1 position.
	el1 translateTo: el2 position.
	el2 translateTo: p.
	
	self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + (0 @ (el1 bounds extent y / 2)) asIntegerPoint)  .
	self assert: (shape endingPointOf: edge) = (el2 bounds topRight + (0 @ (el2 bounds extent y / 2)) asIntegerPoint)
!

testShorterDistancePoint3
	| p |
	shape attachPoint: (ROShorterDistanceAttachPoint new).
	
	"el1 and el2 are on the same horizontal line. el2 is on the left of el1"
	p := el1 position.
	el1 translateBy: 0 @ 80.
	el2 translateTo: p.
	
	self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + ((el1 bounds width / 2) asInteger @0)) .
	self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ el2 bounds width))
!

testShorterDistancePoint4
	| p |
	shape attachPoint: (ROShorterDistanceAttachPoint new).
	
	"el1 and el2 are on the same vertical line. el1 is above el2"
	el2 translateTo: el1 position.
	el2 translateBy: 0 @ 80.
	
	self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + ((el1 bounds width / 2) asInteger @ el1 bounds height)) .
	self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ 0))
!

testShorterDistancePoint4WithOffset
	| p |
	shape attachPoint: (ROShorterDistanceAttachPoint new offset: 5).
	
	"el1 and el2 are on the same vertical line. el1 is above el2"
	el2 translateTo: el1 position.
	el2 translateBy: 0 @ 80.
	
	self assert: (shape startingPointOf: edge) = ((el1 bounds topLeft + ((el1 bounds width / 2) asInteger @ el1 bounds height)) + (5 @ 0)) .
	self assert: (shape endingPointOf: edge) = ((el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ 0) + (5 @ 0)))
!

testVerticalAttachPoint
	shape attachPoint: (ROVerticalAttachPoint new).
	self assert: (shape startingPointOf: edge) = (el1 bounds bottomLeft + ((el1 bounds extent x / 2) asInteger @ 0))  .
	self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds extent x / 2) asInteger @ 0))  .
! !

