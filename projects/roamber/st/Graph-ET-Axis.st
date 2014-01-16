Smalltalk current createPackage: 'Graph-ET-Axis'!
Object subclass: #GETAbstractAxisDecorator
	instanceVariableNames: 'axis'
	package: 'Graph-ET-Axis'!

!GETAbstractAxisDecorator methodsFor: 'accessing'!

axis
	
	^ axis
!

axis: anObject
	
	axis := anObject
! !

!GETAbstractAxisDecorator methodsFor: 'displaying'!

createLabel: string at: aPosition
	"Define a label located at aPosition.
	the label is on the right of aPosition"
	
	| labelElement |
	labelElement := ROLabel elementOn: string.
	labelElement translateTo: (aPosition - (0 @ (labelElement height / 2))) .
	self axis 
		add: labelElement
!

createLabel: string atBottomOf: aPosition
	"Define a label located at aPosition.
	the label is on the bottom of aPosition"
	
	| labelElement |
	labelElement := ROLabel elementOn: string.
	labelElement translateTo: (aPosition - ((labelElement width / 2) @ 0)).
	self axis 
		add: labelElement
!

createLabel: string atLeftOf: aPosition
	"Define a label located at aPosition.
	the label is on the left of aPosition"
	
	| labelElement |
	labelElement := ROLabel elementOn: string.
	labelElement translateTo: (aPosition - (labelElement width @ (labelElement height / 2))) .
	self axis 
		add: labelElement
!

createLabel: string atTopOf: aPosition
	"Define a label located at aPosition.
	the label is on the left of aPosition"
	
	| labelElement |
	labelElement := ROLabel elementOn: string.
	labelElement translateTo: (aPosition - (0 @ labelElement height)) .
	self axis 
		add: labelElement
!

createLineFrom: startingPoint to: endingPoint 

	self createLineFrom: startingPoint to: endingPoint color: self class defaultColor
!

createLineFrom: startingPoint to: endingPoint color: aColor

	| origin end edge |
	origin := ROElement new translateTo: startingPoint; size: 0.
	end := ROElement new translateTo: endingPoint; size: 0.
	
	edge := (ROEdge from: origin to: end).
	edge + (ROLine new color: aColor; yourself).
	self axis 
		add: origin;
		add: end;
		add: edge
!

decorate: anAxis 

	self subclassResponsibility
! !

!GETAbstractAxisDecorator class methodsFor: 'configuration'!

defaultColor
	"Default color for lines in the axi"

	^ Color black
! !

GETAbstractAxisDecorator subclass: #GETBaseLineDecorator
	instanceVariableNames: ''
	package: 'Graph-ET-Axis'!

!GETBaseLineDecorator methodsFor: 'displaying'!

decorate: anAxis 

	self axis: anAxis.	
	self createLineFrom: self axis start to: self axis end
! !

GETAbstractAxisDecorator subclass: #GETRegularLabelDecorator
	instanceVariableNames: 'numberOfLabels valueFormater'
	package: 'Graph-ET-Axis'!

!GETRegularLabelDecorator methodsFor: 'accessing'!

numberOfLabels
	
	^ numberOfLabels
!

numberOfLabels: anObject
	
	numberOfLabels := anObject
! !

!GETRegularLabelDecorator methodsFor: 'customizing labels'!

formatFloat
	self useValueFormater: [ :v | v asFloat ]
!

formatInteger
	self useValueFormater: [ :v | v rounded asInteger ]
!

formatTruncatedFloat
	self formatTruncatedFloatBy: 2
!

formatTruncatedFloatBy: nbOfDecimal
	| shift |
	shift := 10 raisedTo: nbOfDecimal.
	self useValueFormater: [ :v | ((v * shift) asInteger / shift) asFloat ]
!

getCustomizedValue: runningValue
	"Take as input a number, possibly a float or a fraction. Return a number (possibly an integer, a float or a fraction) that complies to the user wish"
	^ valueFormater value: runningValue
!

useValueFormater: aOneArg
	valueFormater := aOneArg
! !

!GETRegularLabelDecorator methodsFor: 'displaying'!

decorate: anAxis
	| runningPosition runningValue deltaValue deltaPixels labelAsNumber |
	self axis: anAxis.
	runningPosition := self axis start.
	runningValue := self axis runningValue.
	deltaPixels := (self axis end - self axis start) / self numberOfLabels.
	deltaValue := (self axis minValue - self axis maxValue) / self numberOfLabels.
	self numberOfLabels + 1
		timesRepeat: [ 
			labelAsNumber := self getCustomizedValue: runningValue.
			deltaPixels x = 0
				ifTrue: [ self createLabel: labelAsNumber atLeftOf: runningPosition ]
				ifFalse: [ self createLabel: labelAsNumber atBottomOf: runningPosition ].
			runningPosition := runningPosition + deltaPixels.
			runningValue := self axis nextFrom: runningValue by: deltaValue ]
! !

!GETRegularLabelDecorator methodsFor: 'initialize-release'!

initialize

	super initialize.
	numberOfLabels := self class defaultNumberOfLabels.
	self formatTruncatedFloat.
! !

!GETRegularLabelDecorator class methodsFor: 'configuration'!

defaultNumberOfLabels
	"Default number in Numbers, the apple version of Excel"
	^ 4
! !

GETAbstractAxisDecorator subclass: #GETRegularTickDecorator
	instanceVariableNames: 'numberOfTicks'
	package: 'Graph-ET-Axis'!

!GETRegularTickDecorator methodsFor: 'accessing'!

numberOfTicks
	"Return the number of ticks we will have on the axis"
	^ numberOfTicks
!

numberOfTicks: anObject
	numberOfTicks := anObject
! !

!GETRegularTickDecorator methodsFor: 'displaying'!

decorate: anAxis 

	| runningPosition delta tickDelta |
	
	self axis: anAxis.
	
	runningPosition := self axis start.
	delta := self axis end - self axis start / self numberOfTicks.
	tickDelta := self axis delta.

	(self numberOfTicks + 1) timesRepeat: [
		self createLineFrom: runningPosition - tickDelta to: runningPosition + tickDelta.
		runningPosition := runningPosition + delta ]
! !

!GETRegularTickDecorator methodsFor: 'initialize-release'!

initialize

	super initialize.
	numberOfTicks := self class defaultNumberOfTicks
! !

!GETRegularTickDecorator class methodsFor: 'configuration'!

defaultNumberOfTicks
	"Default number in Numbers, the apple version of Excel"
	^ 4
! !

GETAbstractAxisDecorator subclass: #GETTitleDecorator
	instanceVariableNames: ''
	package: 'Graph-ET-Axis'!

!GETTitleDecorator methodsFor: 'displaying'!

decorate: anAxis
	
	self axis: anAxis.
	
	(self axis delta x = 0)
		ifTrue: [ self createLabel: self axis label at: self axis end ]
		ifFalse: [ self createLabel: self axis label atTopOf: self axis start ]
! !

Object subclass: #GETAbstractAxisStrategy
	instanceVariableNames: 'axis'
	package: 'Graph-ET-Axis'!

!GETAbstractAxisStrategy methodsFor: 'accessing'!

axis
	
	^ axis
!

axis: anObject
	
	axis := anObject
! !

!GETAbstractAxisStrategy methodsFor: 'initialize-release'!

on: anAxis 

	self axis: anAxis
! !

!GETAbstractAxisStrategy methodsFor: 'processing'!

delta

	^ self subclassResponsibility
!

nextFrom: runningValue by: delta

	^ self subclassResponsibility
!

runningValue

	^ self subclassResponsibility
! !

GETAbstractAxisStrategy subclass: #GETLeftRightAxisStrategy
	instanceVariableNames: ''
	package: 'Graph-ET-Axis'!

!GETLeftRightAxisStrategy methodsFor: 'processing'!

delta 

	^ (0@2)
!

nextFrom: runningValue by: delta

	^ runningValue - delta
!

runningValue 

	^ self axis minValue
! !

GETAbstractAxisStrategy subclass: #GETTopDownAxisStrategy
	instanceVariableNames: ''
	package: 'Graph-ET-Axis'!

!GETTopDownAxisStrategy methodsFor: 'processing'!

delta 

	^ (2@0)
!

nextFrom: runningValue by: delta

	^ runningValue + delta
!

runningValue 

	^ self axis maxValue
! !

Object subclass: #GETAxis
	instanceVariableNames: 'elements decorators label strategy startingPoint endingPoint maxValue minValue'
	package: 'Graph-ET-Axis'!

!GETAxis methodsFor: 'accessing'!

decorators
	^ decorators
!

decorators: anObject
	decorators := anObject
!

elements
	
	^ elements
!

elements: anObject
	
	elements := anObject
!

end
	
	^ endingPoint
!

end: anEndingPoint
	
	endingPoint := anEndingPoint
!

from: aStartingPoint to: anEndingPoint

	self start: aStartingPoint;
		 end: anEndingPoint
!

label
	^ label
!

label: anObject
	label := anObject
!

max: aValue min: anotherValue

	self maxValue: aValue;
		 minValue: anotherValue
!

maxValue
	
	^ maxValue
!

maxValue: anObject
	
	maxValue := anObject
!

minValue
	
	^ minValue
!

minValue: anObject
	
	minValue := anObject
!

start
	
	^ startingPoint
!

start: aStartingPoint
	
	startingPoint := aStartingPoint
!

strategy
	
	^ strategy
!

strategy: anObject
	
	strategy := anObject
! !

!GETAxis methodsFor: 'initialize-release'!

initialize 

	self elements: OrderedCollection new.
	self decorators: OrderedCollection new
! !

!GETAxis methodsFor: 'interface'!

add: aROElement 

	self elements add: aROElement
! !

!GETAxis methodsFor: 'processing'!

delta

	^ self strategy delta
!

nextFrom: runningValue by: delta

	^ self strategy nextFrom: runningValue by: delta
!

runningValue

	^ self strategy runningValue
! !

