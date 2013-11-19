Smalltalk current createPackage: 'Graph-ET-Util'!
Object subclass: #GETDistribution
	instanceVariableNames: 'numbers'
	package: 'Graph-ET-Util'!

!GETDistribution methodsFor: 'as yet unclassified'!

on: collectionOfNumbers
	numbers := collectionOfNumbers
! !

!GETDistribution methodsFor: 'public'!

annotatedFrequency
	^ self annotatedFrequencyWithAmountOfIntervals: 4
!

annotatedFrequencyMin: numberMin max: numberMax amountOfIntervals: nbOfIntervals

	| interval running tmp result |
	interval := ((numberMax + 1 - numberMin) / nbOfIntervals).
	running := numberMin.
	
	tmp := numbers copy.
	result := OrderedCollection new.
	[ running asFloat < numberMax ] whileTrue: [ 
		| c |
		c := tmp select: [ :v | v >= running and: [ v < (running + interval) ]].
		result add: (Array with: running with: interval + running with: c asArray).
		tmp := tmp copyWithoutAll: c.
		running := running + interval ].
	
	^ result asArray
!

annotatedFrequencyWithAmountOfIntervals: aSmallInteger 
	^ self annotatedFrequencyMin: numbers min max: numbers max amountOfIntervals: aSmallInteger
!

frequency
	^ self frequencyWithAmountOfIntervals: 4
!

frequencyMin: numberMin max: numberMax amountOfIntervals: nbOfIntervals

	| interval running tmp result |
	interval := ((numberMax + 1 - numberMin) / nbOfIntervals).
	running := numberMin.
	
	tmp := numbers copy.
	result := OrderedCollection new.
	[ running asFloat < numberMax ] whileTrue: [ 
		| c |
		c := tmp select: [ :v | v >= running and: [ v < (running + interval) ]].
		result add: c asArray.
		tmp := tmp copyWithoutAll: c.
		running := running + interval ].
	
	^ result asArray
!

frequencyWithAmountOfIntervals: aSmallInteger 
	^ self frequencyMin: numbers min max: numbers max amountOfIntervals: aSmallInteger
! !

!GETDistribution class methodsFor: 'public'!

on: anArray 
	^ self new on: anArray
! !

Object subclass: #GETInteractionWrapper
	instanceVariableNames: 'diagram'
	package: 'Graph-ET-Util'!

!GETInteractionWrapper methodsFor: 'accessing'!

diagram
	
	^ diagram
!

diagram: anObject
	
	diagram := anObject
! !

!GETInteractionWrapper methodsFor: 'interaction'!

draggable

	(self diagram) do: RODraggable.
!

growable

	(self diagram) do: ROGrowable.
!

on: anEvent do: aBlock

	(self diagram) on: anEvent do: aBlock.
!

popUpText

	(self diagram) do: ROPopup.
!

popUpText: aBlock

	(self diagram) do: (ROPopup text: [:event | aBlock value: event]).
!

strongHighlightWhenClick

	(self diagram) on: ROMouseClick do: [:event |
		| attributes |
		attributes := event element attributes.
		
		(attributes includesKey: #isPressed)
			ifTrue: [ROBlink unhighlight:  event element. 
				attributes removeKey: #isPressed ];
			ifFalse: [ROBlink highlight: event element.
				attributes at: #isPressed put: true ].
		].
!

strongHighlightWhenOver

	(self diagram) on: ROMouseEnter do: [:event | ROBlink highlight: event element].
	(self diagram) on: ROMouseLeave do: [:event | ROBlink unhighlight: event element].
! !

