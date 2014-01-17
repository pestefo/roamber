Smalltalk current createPackage: 'ARoassal-AttachPoint'!
ROObject subclass: #ROAttachPoint
	instanceVariableNames: ''
	package: 'ARoassal-AttachPoint'!

!ROAttachPoint methodsFor: 'public - hooks'!

endingPointOf: anEdge
	self subclassResponsibility
!

startingPointOf: anEdge
	self subclassResponsibility
! !

ROAttachPoint class instanceVariableNames: 'instance'!

!ROAttachPoint class methodsFor: 'public - creation'!

instance
	"Useful to avoid create unnecessary instances"
	
	instance ifNil: [ instance := self new ].
	^ instance
!

resetInstance
	"
	self withAllSubclassesDo: #resetInstance
	"

	instance := nil.
! !

ROAttachPoint subclass: #ROCenteredAttachPoint
	instanceVariableNames: ''
	package: 'ARoassal-AttachPoint'!

!ROCenteredAttachPoint methodsFor: 'public - hooks'!

endingPointOf: anEdge
	^ anEdge to absolutePosition + (anEdge to extent / 2) asIntegerPoint
!

startingPointOf: anEdge
	^ (anEdge from absolutePosition + (anEdge from extent / 2)) asIntegerPoint
! !

ROAttachPoint subclass: #ROHorizontalAttachPoint
	instanceVariableNames: ''
	package: 'ARoassal-AttachPoint'!

!ROHorizontalAttachPoint methodsFor: 'public - hooks'!

endingPointOf: anEdge
	^ anEdge to absolutePosition + (0 @ (anEdge to bounds height / 2) asInteger)
!

startingPointOf: anEdge
	^ anEdge from absolutePosition + (anEdge from bounds width @ (anEdge from bounds height / 2) asInteger)
! !

ROAttachPoint subclass: #ROShorterDistanceAttachPoint
	instanceVariableNames: 'offset'
	package: 'ARoassal-AttachPoint'!

!ROShorterDistanceAttachPoint methodsFor: 'accessing'!

offset
	^ offset.
!

offset: aNumber
	offset := aNumber.
! !

!ROShorterDistanceAttachPoint methodsFor: 'initialize-release'!

initialize
	super initialize.
	offset := 0.
! !

!ROShorterDistanceAttachPoint methodsFor: 'public - hooks'!

endingPointOf: anEdge
	^ self attachPointFor: anEdge on: (anEdge from) with: (self destinationAttachPointsFor: anEdge).
!

startingPointOf: anEdge
	^ self attachPointFor: anEdge on: (anEdge to) with: (self startingAttachPointsFor: anEdge).
! !

!ROShorterDistanceAttachPoint methodsFor: 'util'!

attachPointFor: anEdge on: anElement with: elementsPossibleAttachPoints
	"Returns the attach point having the shortest route for given edge on given element."
	| p dp t |
	p := anElement absolutePosition + (anElement width @ anElement height).
	
	"We get the list of dot products"
	dp := elementsPossibleAttachPoints collect: [ :pp | 
		t := p - pp.
		Array with: (t dotProduct: t) with:  pp ].
	
	"We look for the shortest path and return the point"
	^ (dp inject: dp first into: [ :shorter :el | (shorter first < el first) ifTrue: [ shorter ] ifFalse: [ el ]]) second
!

attachPointsFor: anEdge on: anElement
	"Return the four possible attach points for each of the four sides for given edge on given element."
	^ Array 
		"upper side"
		with: (anElement absolutePosition) + (((anElement bounds width / 2) + offset) asInteger @ 0) 
		 "right side"
		with: (anElement absolutePosition) + (anElement bounds width @ ((anElement  bounds height / 2) + offset) asInteger)
		"lower side"
		with: (anElement absolutePosition) + (((anElement bounds width / 2) + offset) asInteger @ (anElement bounds height)) 
		"left side"
		with: (anElement absolutePosition) + (0 @ ((anElement bounds height / 2) + offset) asInteger)
!

destinationAttachPointsFor: anEdge
	"Return the four possible attach points for each of the four sides for this edges destination node."
	^ self attachPointsFor: anEdge on: (anEdge to).
!

startingAttachPointsFor: anEdge
	"Return the four possible attach points for each of the four sides for this edges starting node."
	^ self attachPointsFor: anEdge on: (anEdge from).
! !

ROAttachPoint subclass: #ROVerticalAttachPoint
	instanceVariableNames: ''
	package: 'ARoassal-AttachPoint'!

!ROVerticalAttachPoint methodsFor: 'public - hooks'!

endingPointOf: anEdge
	^  (anEdge to absolutePosition) + ((anEdge to bounds width / 2) asInteger @ 0)
!

startingPointOf: anEdge
	^ (anEdge from absolutePosition) + ((anEdge from bounds width / 2) asInteger @ (anEdge from bounds height ))
! !

