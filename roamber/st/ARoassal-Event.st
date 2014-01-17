Smalltalk current createPackage: 'ARoassal-Event'!
SystemAnnouncement subclass: #ROEvent
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

!ROEvent class methodsFor: 'as yet unclassified'!

new
	^ self basicNew initialize
! !

ROEvent subclass: #ROCameraEvent
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROCameraEvent subclass: #ROCameraResized
	instanceVariableNames: 'oldBounds newBounds'
	package: 'ARoassal-Event'!

!ROCameraResized methodsFor: 'accessing'!

newBounds
	^ newBounds
!

newBounds: anObject
	newBounds := anObject
!

oldBounds
	^ oldBounds
!

oldBounds: anObject
	oldBounds := anObject
! !

ROCameraEvent subclass: #ROCameraTranslated
	instanceVariableNames: 'step'
	package: 'ARoassal-Event'!

!ROCameraTranslated methodsFor: 'as yet unclassified'!

step

	^step
!

step: aPoint

	step := aPoint
! !

ROEvent subclass: #ROComponentEvent
	instanceVariableNames: 'position element realPosition'
	package: 'ARoassal-Event'!

!ROComponentEvent methodsFor: 'accessing'!

element
	^ element
!

element: anObject
	element := anObject
!

model 
	^ element isNil
		ifTrue: [ nil ]
		ifFalse: [ self element model ]
!

position
	^ position
!

position: aPoint
	"Set the position of the even in the view.  The position does not necessary correspond to the position on the screen"
	position := aPoint
!

realPosition
	^ realPosition
!

realPosition: aPoint
	"aPoint corresponds to the position on the screen. This is useful to process later on"
	realPosition := aPoint
! !

!ROComponentEvent methodsFor: 'action'!

emitToParent
	element ifNil: [ ^ self ].
	element parent announce: self
! !

!ROComponentEvent methodsFor: 'initialize-release'!

initialize
	super initialize.
	position := 0 @ 0.
	realPosition := 0 @ 0
! !

!ROComponentEvent methodsFor: 'testing'!

hasElement
	^ element notNil
! !

ROComponentEvent subclass: #ROAbstractMouseDragging
	instanceVariableNames: 'step commandKeyPressed controlKeyPressed shiftKeyPressed buttons'
	package: 'ARoassal-Event'!

!ROAbstractMouseDragging methodsFor: 'accessing'!

buttons
	^ buttons
!

buttons: anObject
	buttons := anObject
!

commandKeyPressed

	^commandKeyPressed
!

commandKeyPressed: anObject
	commandKeyPressed := anObject
!

controlKeyPressed
	^ controlKeyPressed
!

controlKeyPressed: anObject
	controlKeyPressed := anObject
!

shiftKeyPressed
	^ shiftKeyPressed
!

shiftKeyPressed: anObject
	shiftKeyPressed := anObject
!

step
	^ step
!

step: anObject
	step := anObject
! !

ROAbstractMouseDragging subclass: #ROMouseDragged
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROAbstractMouseDragging subclass: #ROMouseDragging
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

!ROMouseDragging class methodsFor: 'as yet unclassified'!

step: value
	^ self new step: value
! !

ROComponentEvent subclass: #ROElementEvent
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROElementEvent subclass: #ROElementResized
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROElementEvent subclass: #ROElementTranslated
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROComponentEvent subclass: #ROKeyDown
	instanceVariableNames: 'keyValue'
	package: 'ARoassal-Event'!

!ROKeyDown methodsFor: 'as yet unclassified'!

keyValue 
	^keyValue
!

keyValue: aValue
	
		keyValue := aValue
! !

ROComponentEvent subclass: #ROMouseClick
	instanceVariableNames: 'commandKeyPressed controlKeyPressed shiftKeyPressed'
	package: 'ARoassal-Event'!

!ROMouseClick methodsFor: 'accessing'!

commandKeyPressed
	^ commandKeyPressed
!

commandKeyPressed: anObject
	commandKeyPressed := anObject
!

controlKeyPressed
	^ controlKeyPressed
!

controlKeyPressed: anObject
	controlKeyPressed := anObject
!

initialize 
	super initialize.
	commandKeyPressed := false.
	controlKeyPressed := false.
	shiftKeyPressed := false.
!

shiftKeyPressed
	^ shiftKeyPressed
!

shiftKeyPressed: anObject
	shiftKeyPressed := anObject
! !

ROMouseClick subclass: #ROMouseLeftClick
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROMouseClick subclass: #ROMouseRightClick
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROComponentEvent subclass: #ROMouseEnter
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROComponentEvent subclass: #ROMouseLeave
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROComponentEvent subclass: #ROMouseMove
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROEvent subclass: #ROLayoutEvent
	instanceVariableNames: 'layout elements'
	package: 'ARoassal-Event'!

!ROLayoutEvent methodsFor: 'accessing'!

elements
	^ elements
!

elements: anObject
	elements := anObject
!

layout
	^ layout
!

layout: anObject
	layout := anObject
! !

ROLayoutEvent subclass: #ROLayoutBegin
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROLayoutEvent subclass: #ROLayoutEnd
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROLayoutEvent subclass: #ROLayoutStep
	instanceVariableNames: 'currentIteration maxInterations'
	package: 'ARoassal-Event'!

!ROLayoutStep methodsFor: 'accessing'!

currentIteration
	^ currentIteration
!

currentIteration: number
	currentIteration := number
!

maxInterations
	^ maxInterations
!

maxInterations: anObject
	maxInterations := anObject
! !

!ROLayoutStep methodsFor: 'initialize-release'!

initialize
	super initialize.
	currentIteration := 0.
	maxInterations := 0.
! !

ROEvent subclass: #RORefreshNeeded
	instanceVariableNames: ''
	package: 'ARoassal-Event'!

ROEvent subclass: #ROViewChanged
	instanceVariableNames: 'newView'
	package: 'ARoassal-Event'!

!ROViewChanged methodsFor: 'accessing'!

newView 
	^ newView
!

newView: aView
	newView := aView
! !

ROEvent subclass: #ROWindowResized
	instanceVariableNames: 'oldExtent extent'
	package: 'ARoassal-Event'!

!ROWindowResized methodsFor: 'accessing'!

extent
	^ extent
!

extent: anObject
	extent := anObject
!

oldExtent
	^ oldExtent
!

oldExtent: anObject
	oldExtent := anObject
! !

