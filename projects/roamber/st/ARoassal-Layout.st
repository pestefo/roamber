Smalltalk current createPackage: 'ARoassal-Layout'!
Object subclass: #ROLayout
	instanceVariableNames: 'translator'
	package: 'ARoassal-Layout'!

!ROLayout methodsFor: 'not yet classified'!

applyOn: elements
	
	self executeOnElements: elements
!

executeOnElements: elements 
	"Execute the layout, myself, on the elements"
		
"	self doInitialize: elements."
	self doExecute: elements asOrderedCollection.
"	self doPost: elements."
!

initialize
	translator := ROLayoutTranslator default.
! !

!ROLayout class methodsFor: 'not yet classified'!

on: aCollection
	self new applyOn: aCollection.
	^ aCollection
! !

ROLayout subclass: #ROAbstractLineLayout
	instanceVariableNames: 'gapSize horizontalGap verticalGap horizontalOutGap verticalOutGap alignment horizontallyStretchable verticallyStretchable'
	package: 'ARoassal-Layout'!

!ROAbstractLineLayout methodsFor: 'not yet classified'!

alignTop
	
	alignment := #top
!

alignment
	
	^alignment
!

alignment: anObject
	
	alignment := anObject
!

horizontalGap
	
	^horizontalGap
!

horizontalOutGap
	
	^horizontalOutGap
!

initialize
	
	super initialize.
	verticalGap := 10.
	horizontalGap := 10.
	horizontalOutGap := 5.
	verticalOutGap := 5.
	horizontallyStretchable := verticallyStretchable := false
!

verticalOutGap
	
	^verticalOutGap
! !

ROAbstractLineLayout subclass: #ROHorizontalLineLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!ROHorizontalLineLayout methodsFor: 'not yet classified'!

deltaFor: aNodeFigure
	
	| delta |
	delta := 0.
	self alignment == #bottom ifTrue: [delta := aNodeFigure height].
	self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].
	^0 @ delta
!

doExecute: elements 
	| pointer delta |
	pointer := self positionOriginalPointer: elements.
"
	horizontallyStretchable ifTrue: 
		[ self doStretchHorizontal: elements ].
"
	elements do: 
		[ :element | 
		delta := self deltaFor: element.
		translator translate: element to: pointer - delta.
		pointer := self 
					movePointer: pointer
					accordingToFigure: element.
 ].	
"
	verticallyStretchable ifTrue: 
		[ self doStretchVertical: elements ]
"
!

initialize
	
	super initialize.
	self alignTop
!

movePointer: pointer accordingToFigure: element
	
	^ (pointer x + element width + self horizontalGap) @ pointer y
!

positionOriginalPointer: aGraph 
	| maxHeight delta |
	delta := 0.
	self alignment == #bottom ifTrue: 
		[ maxHeight := aGraph nodes maxValue: #height.
		delta := maxHeight ].
	self alignment == #center ifTrue: 
		[ maxHeight := aGraph nodes maxValue: #height.
		delta := maxHeight / 2.0 ].
	^ self horizontalOutGap @ (self verticalOutGap + delta)
! !

Object subclass: #ROLayoutTranslator
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!ROLayoutTranslator methodsFor: 'not yet classified'!

translate: element to: newPosition
	self subclassResponsibility
! !

ROLayoutTranslator class instanceVariableNames: 'defaultTranslator'!

!ROLayoutTranslator class methodsFor: 'not yet classified'!

default
	"Return the default translator, the one used in the layouts"

	defaultTranslator ifNotNil: [ ^ defaultTranslator ].
	^ defaultTranslator := self defaultClass new
!

defaultClass
	^ RODirectLayoutTranslator
! !

ROLayoutTranslator subclass: #RODirectLayoutTranslator
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!RODirectLayoutTranslator methodsFor: 'not yet classified'!

translate: element to: newPosition
	element translateTo: newPosition
! !

