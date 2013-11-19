Smalltalk current createPackage: 'Graph-ET-Core'!
Object subclass: #GETAbstractDiagram
	instanceVariableNames: 'models elements extraElements width height minValue color interactions values colorNormalizer axiCollection maxValue titleLabel'
	package: 'Graph-ET-Core'!

!GETAbstractDiagram methodsFor: 'accessing'!

axiCollection
	
	^ axiCollection
!

axiCollection: anObject
	
	axiCollection := anObject
!

color
	
	^ color
!

color: anObject
	
	(anObject isColor)
		ifTrue: [color := [ :x | anObject ]]
		ifFalse: [color := anObject]
!

colorNormalizer
	
	^ colorNormalizer
!

colorNormalizer: anObject
	
	colorNormalizer := anObject
!

elements

	^ elements
!

elements: aROElementCollection

	elements := aROElementCollection
!

extraElements
	^ extraElements
!

extraElements: anObject
	extraElements := anObject
!

height

	^ height.
!

height: anObject

	height := anObject.
!

interactions
	
	^ interactions
!

interactions: anObject
	
	interactions := anObject
!

maxValue

	^ maxValue
!

maxValue: aNumber
	maxValue := aNumber
!

minValue

	^ minValue
!

minValue: aNumber

	minValue := aNumber
!

models

	^ models.
!

models: anObject

	models := anObject.
!

titleLabel
	
	^ titleLabel
!

titleLabel: anObject
	
	titleLabel := anObject
!

values
	
	^ values
!

values: anObject
	
	values := anObject
!

width

	^ width
!

width: anObject

	width := anObject.
! !

!GETAbstractDiagram methodsFor: 'animation'!

updateBlock: aBlock

	self subclassResponsibility
! !

!GETAbstractDiagram methodsFor: 'coloring'!

colorFor: anElement

	| aColor |
	aColor := self color value: anElement model.
	^ aColor isColor
		ifTrue: [aColor]
		ifFalse: [self colorNormalizer
				ifNil: [self colorNormalizer: (RONIdentityNormalizer new 
																command: [ :el | color roValue: el model ];
																setIndexTo: #blue;
																yourself) ].
			^ self colorNormalizer]
!

roElements
	^ self elements select: [ :each | (each isNil) not ]  thenCollect: [ :each | each roElement ]
! !

!GETAbstractDiagram methodsFor: 'displaying'!

addAxisToView: rawView

	self axiCollection do: [ :each | rawView addAll: each elements ]
!

addElementsToView: rawView

	rawView
		addAll: self extraElements;
		addAll: self roElements
!

addTitle: aROView

	| label |
	
	(self titleLabel isNil)
		ifFalse: [
			label := (ROLabel elementOn: self titleLabel).
			label translateTo: (((self width  - label width) / 2) @ -30).

			aROView add: label ]
!

displayIn: aView 
	
	self hasModels
		ifTrue: [ self generateIn: aView.
				self createAxis: aView.
				self addTitle: aView.
				self addInteractions ]
!

drawAxis: aROView 

	aROView addAll: self axisElements
!

generateIn: anObject
	
	self subclassResponsibility
! !

!GETAbstractDiagram methodsFor: 'initialize-release'!

initialize

	super initialize.
	self models: OrderedCollection new.
	self values: OrderedCollection new.
	self elements: OrderedCollection new.
	self extraElements: OrderedCollection new.
	self interactions: OrderedCollection new.
	self axiCollection: OrderedCollection new.	
	
	self height: (self class) defaultHeight.
	self width: (self class) defaultWidth.
	self color: (self class) defaultColor
! !

!GETAbstractDiagram methodsFor: 'interaction'!

addInteractions
	interactions do: [ :each | (self roElements reject: [ :ele | ele model isNil ]) do: each ]
!

do: anInteraction

	interactions
		add: [:each | each @ anInteraction]
!

on: aROEvent do: aBlock

	interactions add: [:each |
		each on: aROEvent do: aBlock.].
! !

!GETAbstractDiagram methodsFor: 'private'!

hasModels

	^self models isEmpty not
!

isGETDiagram

	^ true
!

setMaxAndMinValues
	self maxValue: (self values max max: 0).
	self minValue: (self values min min: 0)
! !

!GETAbstractDiagram class methodsFor: 'default'!

defaultColor

	^ Color gray.
!

defaultHeight

	^ 400.
!

defaultWidth

	^ 400.
! !

GETAbstractDiagram subclass: #GETAbstract2DDiagram
	instanceVariableNames: 'xAxisDecorators yAxisDecorators xAxis yAxis xAxisLabel yAxisLabel'
	package: 'Graph-ET-Core'!

!GETAbstract2DDiagram methodsFor: 'accessing'!

xAxis
	
	^ xAxis
!

xAxis: anObject
	
	xAxis := anObject
!

xAxisLabel
	
	^ xAxisLabel
!

yAxis
	
	^ yAxis
!

yAxis: anObject
	
	yAxis := anObject
!

yAxisLabel
	
	^ yAxisLabel
! !

!GETAbstract2DDiagram methodsFor: 'initialize-release'!

initialize 

	super initialize.
	self xAxis: GETAxis new.
	self yAxis: GETAxis new.
	
	self xAxis strategy: (GETLeftRightAxisStrategy new on: self xAxis).
	self yAxis strategy: (GETTopDownAxisStrategy new on: self yAxis)
! !

!GETAbstract2DDiagram methodsFor: 'private'!

createAxis: aROView

	self scaleXAxis.
	self scaleYAxis.
	self setXAxisValues.
	self setYAxisValues.
	
	self setXAxisLabel.
	self setYAxisLabel.
	
	self setDecorators.

	self axiCollection add: self xAxis.
	self axiCollection add: self yAxis.
	self addAxisToView: aROView
!

scaleXAxis

	self xAxis:
	(self xAxis
		from: 0 @ self height 
		to: self width @ self height)
!

scaleYAxis

	self yAxis:
	(self yAxis
		from: 0 @ 0
		to: 0 @ self height)
!

setDecorators

	self xAxis decorators
		do: [:each | each decorate: self xAxis].
	self yAxis decorators
		do: [:each | each decorate: self yAxis]
!

setXAxisValues

	self xAxis:
	(self xAxis
		max: maxValue
		min: minValue)
!

setYAxisValues

	self yAxis:
	(self yAxis
		max: maxValue
		min: minValue)
! !

!GETAbstract2DDiagram methodsFor: 'scripting'!

addXDecorator: aDecorator

	self xAxis decorators add: aDecorator
!

addYDecorator: aDecorator

	self yAxis decorators add: aDecorator
!

setXAxisLabel

	self xAxisLabel
		ifNotNil: [ 
			self xAxis label: xAxisLabel.
			self addXDecorator: GETTitleDecorator new ]
!

setYAxisLabel

	self yAxisLabel
		ifNotNil: [ 
			self yAxis label: yAxisLabel.
			self addYDecorator: GETTitleDecorator new ]
!

xAxisLabel: aString

	xAxisLabel := aString
!

yAxisLabel: aString

	yAxisLabel := aString
! !

GETAbstract2DDiagram subclass: #GETPieDiagram
	instanceVariableNames: 'radius lineColor'
	package: 'Graph-ET-Core'!

!GETPieDiagram methodsFor: 'accessing'!

lineColor

	^ lineColor.
!

lineColor: aColor

	^ lineColor := aColor.
!

radius

	^ radius.
!

radius: aRadius

	^ radius := aRadius.
! !

!GETPieDiagram methodsFor: 'displaying'!

generateIn: aView
	
	| body center angles edges rad |
	
	rad := self radius.
	
	body := ROElement new + ((ROEllipse new) size: (2*rad); color: (Color white alpha:0.1); borderColor: (self lineColor); borderWidth: 1).
	center := ((ROElement new) translateTo: (rad@rad); size: 0).
	angles := self getElementsFromModel.
	edges := (angles collect: [:each |  ((ROEdge from: center to: each) + (ROLine new color: (self lineColor)))]).
	
	self elements add: body; add: center; addAll: angles; addAll: edges.
	self addElementsToView: aView
! !

!GETPieDiagram methodsFor: 'initialize-release'!

initialize 
	
	super initialize.
	self radius: (self class defaultRadius).
	self lineColor: (self class defaultLineColor).
! !

!GETPieDiagram methodsFor: 'procesing'!

getElementsFromModel
	| angsum rawElements |
	
	rawElements := (ROElement forCollection: (1 to: (self models size))).
	angsum := 0.
	
	^ rawElements
		with: ((self models) collect: [:each | each/(self models sum)*360])
		do: [:ele :ang |
			angsum := angsum + ang.
			ele translateTo: (((self radius)*((angsum degreeSin) + 1))@((self radius)*(1 - (angsum degreeCos)))); size: 0]
! !

!GETPieDiagram class methodsFor: 'default'!

defaultLineColor

	^ Color black.
!

defaultRadius

	^ 150.
! !

GETAbstract2DDiagram subclass: #GETScatterPlot
	instanceVariableNames: 'x y'
	package: 'Graph-ET-Core'!

!GETScatterPlot methodsFor: 'accessing'!

x

	^ x.
!

x: newX

	x := newX
!

y

	^ y
!

y: newY

	y := newY
! !

!GETScatterPlot methodsFor: 'displaying'!

generateIn: aView
! !

GETAbstract2DDiagram subclass: #GETSingleAxisDiagram
	instanceVariableNames: 'x y'
	package: 'Graph-ET-Core'!

!GETSingleAxisDiagram methodsFor: 'accessing'!

x

	^ x
!

x: anObject

	x := anObject
!

y

	^ y
!

y: anObject

	y := anObject
! !

!GETSingleAxisDiagram methodsFor: 'initialize-release'!

initialize

	super initialize.
	self x: (self class) defaultProperty.
	self y: (self class) defaultProperty
! !

!GETSingleAxisDiagram methodsFor: 'processing'!

sizeInPixelsOfPositiveArea: maxSize
	"return the bar size (width or height) for the corresponding maxSize"
	
	(self minValue > 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize ].
	(self minValue <= 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize * self maxValue / (self maxValue + (self minValue abs))  ].
	(self minValue <= 0 and: [ self maxValue <= 0 ]) ifTrue: [ ^ 0 ].

	^ self error: 'should not be here'
! !

!GETSingleAxisDiagram methodsFor: 'scripting'!

addBaseDecorator: aDecorator 

	self subclassResponsibility
!

addValueDecorator: aDecorator 

	self subclassResponsibility
!

baseAxisLine
	"Add a plain line for the base axis"
	self addBaseDecorator: GETBaseLineDecorator new
!

regularAxis
	"Add the vertical and horizontal axis. The value axis has ticks and labels."
	self valueAxisLine.
	self baseAxisLine.
	self addValueDecorator: GETRegularTickDecorator new.
	self addValueDecorator: GETRegularLabelDecorator new
!

regularAxisAsInteger
	"Add the vertical and horizontal axis. The value axis has ticks and labels. All the labels are as Integer"
	self valueAxisLine.
	self baseAxisLine.
	self addValueDecorator: GETRegularTickDecorator new.
	self addValueDecorator: (GETRegularLabelDecorator new formatInteger)
!

regularLabels
	
	self addValueDecorator: GETRegularLabelDecorator new
!

regularTicks

	self addValueDecorator: GETRegularTickDecorator new
!

valueAxisLine
	"Add a plain line"
	self addValueDecorator: GETBaseLineDecorator new
! !

!GETSingleAxisDiagram class methodsFor: 'default'!

defaultProperty

	^#yourself
! !

GETSingleAxisDiagram subclass: #GETAbstractBarDiagram
	instanceVariableNames: 'spacing barWidth barGap'
	package: 'Graph-ET-Core'!

!GETAbstractBarDiagram methodsFor: 'accessing'!

barWidth

	^ barWidth.
!

barWidth: aNumber

	barWidth := aNumber.
!

spacing

	^ spacing.
!

spacing: aNumber

	spacing := aNumber.
! !

!GETAbstractBarDiagram methodsFor: 'initialize-release'!

initialize

	super initialize.
	self barWidth: (self class) defaultBarwidth.
	self spacing: (self class) defaultSpacing
! !

!GETAbstractBarDiagram methodsFor: 'private'!

nonValuedParameter
	"Return the size of the axis that enumerates over the elements"
	^ (self values size * self barWidth) + (self values size - 1 * self spacing) + (2 * self spacing)
! !

!GETAbstractBarDiagram class methodsFor: 'default'!

defaultBarwidth

	^ 20
!

defaultGap
	"Default gap between bars and axi in pixels."
	^ 0
!

defaultSpacing
	"Default gap between bars in pixels."
	^ 5
! !

GETAbstractBarDiagram subclass: #GETHorizontalBarDiagram
	instanceVariableNames: ''
	package: 'Graph-ET-Core'!

!GETHorizontalBarDiagram methodsFor: 'animation'!

updateBlock: aBlock

	self x: aBlock.
	
	elements do: [ :each | | newBounds roElement value |
			roElement := each roElement.
			value := x value: roElement model.
			newBounds :=  (self getPixelsFromValue: value) @ self barWidth.
			
			each value: value.
			ROAnimatedResizing for: roElement resizeAndFixTopLeft: newBounds ]
! !

!GETHorizontalBarDiagram methodsFor: 'displaying'!

generateIn: aView

	| bars |
	self values: (self models collect: [ :each | self x roValue: each ]).
	self setMaxAndMinValues.
	self height: super nonValuedParameter.
	
	bars := self getElementsFromModels.
	
	self elements addAll: bars.
	self addElementsToView: aView.
! !

!GETHorizontalBarDiagram methodsFor: 'private'!

scaleYAxis		

	self yAxis:
	(self yAxis
		from: self widthOfNegativeArea @ 0
		to: self widthOfNegativeArea @ self nonValuedParameter)
! !

!GETHorizontalBarDiagram methodsFor: 'processing'!

getElementsFromModels
	| count rawElements |
	
	rawElements := ROElement forCollection: (1 to: self models size).
	count := 1.
	
	^ rawElements
		with: self models
		collect: [:ele :model |
			| value |
			value := self getPixelsFromValue: (self x value: model).
			
			ele width: (value abs).

			(ele model: model; 
			translateTo: (self offsetFromAxis: value)@((self spacing + self barWidth) * count - self barWidth))
				+
					(ROBox new
						width: value abs;
						height: self barWidth;
						color: (self colorFor: ele)).
			count := count + 1.
			
			GETDataObject new
				roElement: ele;
				value: (self x value: model);
				isBig: true]
!

getPixelsFromValue: value

	| semiresult |

	semiresult := value * (self width) / (self maxValue - self minValue).
	
	"This ensures that if the division is not whole, it rounds up to the top."
	^ semiresult roundUpTo: 1
!

offsetFromAxis: amountOfPixels
	"Return the offset in pixels from the axis"
	^ amountOfPixels > 0
		ifTrue: [ self widthOfNegativeArea ]
		ifFalse: [ self widthOfNegativeArea + amountOfPixels ]
!

widthOfNegativeArea
	^ self width - self widthOfPositiveArea
!

widthOfPositiveArea
	^ self sizeInPixelsOfPositiveArea: self width
! !

!GETHorizontalBarDiagram methodsFor: 'scripting'!

addBaseDecorator: aDecorator 

	self addYDecorator: aDecorator
!

addValueDecorator: aDecorator 

	self addXDecorator: aDecorator
! !

GETAbstractBarDiagram subclass: #GETVerticalBarDiagram
	instanceVariableNames: ''
	package: 'Graph-ET-Core'!

!GETVerticalBarDiagram methodsFor: 'animation'!

updateBlock: aBlock

	self y: aBlock.
	
	elements do: [ :each | | newBounds roElement value |
			roElement := each roElement.
			value := y value: roElement model.
			newBounds := self barWidth @ (self getPixelsFromValue: value).
			
			each value: value.
			ROAnimatedResizing for: roElement resizeAndFixBottomLeft: newBounds ]
! !

!GETVerticalBarDiagram methodsFor: 'displaying'!

generateIn: aView

	| bars |
	
	self values: (self models collect: [ :each | self y roValue: each ]).
	
	self setMaxAndMinValues.
	self width: super nonValuedParameter.
	
	bars := self getElementsFromModels.
	
	self elements addAll: bars.
	self addElementsToView: aView
! !

!GETVerticalBarDiagram methodsFor: 'private'!

scaleXAxis

	self xAxis:
		(self xAxis
			from: 0 @ self heightOfPositiveArea
			to: self nonValuedParameter @ self heightOfPositiveArea)
! !

!GETVerticalBarDiagram methodsFor: 'processing'!

getElementsFromModels
	| count rawElements |
	
	rawElements := ROElement forCollection: (1 to: self models size).
	count := 1.

	^ rawElements
		with: self models
		collect: [ :ele :model |
			| value |
			value := self getPixelsFromValue: (self y roValue: model).

			ele height: (value abs).

			(ele model: model;
			translateTo: ((self spacing + self barWidth) * count - self barWidth) @ (self offsetFromAxis: value))
				+
					(ROBox new
						width: self barWidth;
						height: (value abs);
						color:  (self colorFor: ele)).
			count := count + 1.
			
			GETDataObject new
				roElement: ele;
				value: (self y roValue: model);
				isBig: true]
!

getPixelsFromValue: value

	| semiresult |
	
	semiresult := value * (self height) / (self maxValue - self minValue).
	
	"This ensures that if the division is not whole, it rounds up to the top."
	^ semiresult roundUpTo: 1
!

heightOfNegativeArea
	^ self height - self heightOfPositiveArea
!

heightOfPositiveArea
	^ self sizeInPixelsOfPositiveArea: self height
!

offsetFromAxis: amountOfPixels
	"Return the offset in pixels from the axis"
	^ amountOfPixels > 0
		ifTrue: [ self heightOfPositiveArea - amountOfPixels ]
		ifFalse: [ self heightOfPositiveArea ]
! !

!GETVerticalBarDiagram methodsFor: 'scripting'!

addBaseDecorator: aDecorator 

	self addXDecorator: aDecorator
!

addValueDecorator: aDecorator 

	self addYDecorator: aDecorator
! !

GETSingleAxisDiagram subclass: #GETAbstractLineDiagram
	instanceVariableNames: 'dotSize'
	package: 'Graph-ET-Core'!

!GETAbstractLineDiagram methodsFor: 'accessing'!

dotSize
	
	^ dotSize
!

dotSize: anObject
	
	dotSize := anObject
! !

!GETAbstractLineDiagram methodsFor: 'displaying'!

generateIn: aView

	| dots |
	
	self values: ( self models collect: [ :each | self y roValue: each ] ).
	
	self setMaxAndMinValues.
	self width: self nonValuedParameter.
	
	dots := self getElementsFromModels.
	
	self elements addAll: dots.
	self extraElements addAll: (self linesForElements: self roElements).
	self addElementsToView: aView
! !

!GETAbstractLineDiagram methodsFor: 'initialize-release'!

initialize 

	super initialize.
	self dotSize: self class defaultDotSize
! !

!GETAbstractLineDiagram methodsFor: 'processing'!

getElementsFromModels
	self subclassResponsibility
!

getPixelsFromValue: value

	^ value * (self height) / (self maxValue - self minValue)
!

heightOfNegativeArea
	^ self height - self heightOfPositiveArea
!

heightOfPositiveArea
	^ self sizeInPixelsOfPositiveArea: self height
!

linesForElements: rawElements
	"Return a list of edges that lines all the elements"

	| result previous edge lineShape |
	result := OrderedCollection new.
	previous := rawElements first.
	rawElements allButFirst doWithIndex: [ :el :index | 
		edge := ROEdge from: previous to: el.
		lineShape := ROLine new.
		lineShape attachPoint: (ROCenteredAttachPoint instance).
		edge + lineShape.
		result add: edge.
		previous := el ].
	^ result.
! !

!GETAbstractLineDiagram methodsFor: 'scripting'!

addBaseDecorator: aDecorator 

	self addXDecorator: aDecorator
!

addValueDecorator: aDecorator 

	self addYDecorator: aDecorator
! !

!GETAbstractLineDiagram class methodsFor: 'default'!

defaultDotSize

	^ 2
! !

GETAbstractLineDiagram subclass: #GETLineDiagram
	instanceVariableNames: 'minXValue xValues maxXValue'
	package: 'Graph-ET-Core'!

!GETLineDiagram methodsFor: 'accessing'!

maxXValue
	
	^ maxXValue
!

maxXValue: anObject
	
	maxXValue := anObject
!

minXValue
	
	^ minXValue
!

minXValue: anObject
	
	minXValue := anObject
!

xValues
	
	^ xValues
!

xValues: anObject
	
	xValues := anObject
! !

!GETLineDiagram methodsFor: 'animation'!

updateY: aBlock

	self y: aBlock.
	
	elements do: [ :each | | newPosition roElement value |
			roElement := each roElement.
			value := y value: roElement model.
			newPosition := (roElement position x) @ (self heightOfPositiveArea - (self getPixelsFromValue: value)).
			
			each value: value.
			ROLinearMove for: roElement to: newPosition ]
! !

!GETLineDiagram methodsFor: 'displaying'!

generateIn: aView

	self xValues: (self models collect: [ :each | self x roValue: each ]).

	self setMaxAndMinXValues.
	super generateIn: aView
! !

!GETLineDiagram methodsFor: 'private'!

nonValuedParameter
	^ self width
!

scaleXAxis

	self xAxis:
		(self xAxis
			from: (self widthOfNegativeArea negated) @ self heightOfPositiveArea
			to: self widthOfPositiveArea @ self heightOfPositiveArea).
! !

!GETLineDiagram methodsFor: 'processing'!

getElementsFromModels

	| rawElements |
	rawElements := ROElement forCollection: (1 to: self models size).
	
	^ rawElements 
		with: self models
		collect: [ :ele :model | 
			| dotX dotY |
			dotX := self getPixelsFromXValue: (self x value: model).
			dotY := self getPixelsFromValue: (self y value: model).

			(ele model: model;
			translateTo: (dotX@(self heightOfPositiveArea - dotY));
			size: self dotSize)
			+
			(ROEllipse new color: (self colorFor: ele); width: self dotSize; height: self dotSize).
			
			GETDataObject new
				roElement: ele;
				value: (self y value: model) ]
!

getPixelsFromXValue: value

	^ value * (self width) / (self maxXValue - self minXValue)
!

setMaxAndMinXValues

	self maxXValue: (self xValues max max: 0).
	self minXValue: (self xValues min min: 0)
!

sizeInPixelsOfPositiveXArea: maxSize
	"return the bar size (width or height) for the corresponding maxSize"
	
	(self minValue > 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize ].
	(self minValue <= 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize * self maxXValue / (self maxXValue + (self minXValue abs))  ].
	(self minValue <= 0 and: [ self maxValue <= 0 ]) ifTrue: [ ^ 0 ].

	^ self error: 'should not be here'
!

widthOfNegativeArea
	^ self width - self widthOfPositiveArea
!

widthOfPositiveArea
	^ self sizeInPixelsOfPositiveXArea: self width
! !

!GETLineDiagram methodsFor: 'scripting'!

regularAxis
	"Add the vertical and horizontal axis. The value axis has ticks and labels."
	super regularAxis.
	
	self addBaseDecorator: GETRegularTickDecorator new.
	self addBaseDecorator: GETRegularLabelDecorator new
!

regularAxisAsInteger
	"Add the vertical and horizontal axis. The value axis has ticks and labels. All the labels are as Integer"
	super regularAxisAsInteger.
	
	self addBaseDecorator: GETRegularTickDecorator new.
	self addBaseDecorator: (GETRegularLabelDecorator new formatInteger)
!

setXAxisValues

	self xAxis:
	(self xAxis
		max: maxXValue
		min: minXValue)
! !

GETAbstractLineDiagram subclass: #GETOrdinaryLineDiagram
	instanceVariableNames: 'spacing'
	package: 'Graph-ET-Core'!

!GETOrdinaryLineDiagram methodsFor: 'accessing'!

spacing
	^ spacing
!

spacing: anObject
	spacing := anObject
! !

!GETOrdinaryLineDiagram methodsFor: 'initialize-release'!

initialize
	super initialize.
	self spacing: (self class) defaultSpacing
! !

!GETOrdinaryLineDiagram methodsFor: 'private'!

nonValuedParameter
	"Return the size of the axis that enumerates over the elements"
	^ (self values size + 1) * self spacing
!

scaleXAxis

	self xAxis:
		(self xAxis
			from: 0 @ self heightOfPositiveArea
			to: self nonValuedParameter @ self heightOfPositiveArea)
! !

!GETOrdinaryLineDiagram methodsFor: 'processing'!

getElementsFromModels

	| count rawElements |
	rawElements := ROElement forCollection: (1 to: self models size).
	count := 1.

	^ rawElements
		with: self models
		collect: [ :ele :model | 
			| dotY dotX |
			dotY := self heightOfPositiveArea - (self getPixelsFromValue: (self y value: model)).
			dotX := self spacing * count.
			
			ele model: model;
				translateTo: dotX @ dotY.
			ele + (ROEllipse new
						color: (self colorFor: ele);
						width: self dotSize;
						height: self dotSize).

			count := count + 1.
			
			GETDataObject new
				roElement: ele;
				value: (self y value: model)]
! !

!GETOrdinaryLineDiagram class methodsFor: 'default'!

defaultSpacing

	^ 20
! !

GETSingleAxisDiagram subclass: #GETCompositeDiagram
	instanceVariableNames: 'diagrams'
	package: 'Graph-ET-Core'!

!GETCompositeDiagram methodsFor: 'accessing'!

add: aDiagram 

	aDiagram isGETDiagram
		ifTrue: [ self diagrams add: aDiagram ]
		ifFalse: [ self error: 'Can not add something that is not a Diagram' ]
!

diagrams
	
	^ diagrams
!

diagrams: anObject
	
	diagrams := anObject
! !

!GETCompositeDiagram methodsFor: 'displaying'!

generateIn: aView

	self initializeDiagrams.
	
	(self diagrams collect: #values) do: [ :col | values addAll: col ].
	self hasValues ifTrue: [ self setMaxAndMinValues ].
	
	self width: (self diagrams collect: #width) max.
	
	self operateElements.
	
	self addElementsToView: aView
! !

!GETCompositeDiagram methodsFor: 'initialize-release'!

initialize 
	
	super initialize.
	self diagrams: OrderedCollection new
!

initializeDiagrams

	self diagrams do: [ :each | each displayIn: ROView new ]
! !

!GETCompositeDiagram methodsFor: 'private'!

hasModels

	^self diagrams isEmpty not
!

hasValues

	^self values isEmpty not
! !

!GETCompositeDiagram methodsFor: 'processing'!

getPixelsFromValue: value

	| semiresult |
	
	semiresult := value * (self height) / (self maxValue - self minValue).
	
	"This ensures that if the division is not whole, it rounds up to the top."
	^ semiresult roundUpTo: 1
!

heightOfNegativeArea
	^ self height - self heightOfPositiveArea
!

heightOfPositiveArea
	^ self sizeInPixelsOfPositiveArea: self height
!

joinElements

	(self diagrams collect: #elements) do: [ :col | elements addAll: col ].
	(self diagrams collect: #extraElements) do: [ :col | extraElements addAll: col ]
!

nullifyElements

	(self diagrams collect: #elements) do: [ :col | col do: [ :each | each roElement view: ROView nullView ] ].
	(self diagrams collect: #extraElements) do: [ :col | col do: [ :each | each view: ROView nullView ] ]
!

operateElements

	self nullifyElements.
	self joinElements.
	self scaleElements.
	self transElements.
	self sortElements
!

scaleElements

	elements do: [ :each | each isBig ifTrue: [ each roElement height: (self getPixelsFromValue: each getValue) ] ]
!

sortElements

	elements sort: [ :a :b | (a getValue abs) >= (b getValue abs) ]
!

transElements

	self elements do: [ :each | | trans actualX pixels |
								
								pixels := self getPixelsFromValue: each getValue.
								(each isBig)	
									ifTrue: [ pixels > 0
											ifTrue: [ trans := self heightOfPositiveArea - pixels ]
											ifFalse: [ trans := self heightOfPositiveArea ]  ]
										
									ifFalse: [ trans := self heightOfPositiveArea - pixels ].
									
									actualX := each roElement position x.
									each roElement translateTo: (actualX@trans) ]
! !

!GETCompositeDiagram methodsFor: 'scripting'!

addBaseDecorator: aDecorator 

	self addXDecorator: aDecorator
!

addValueDecorator: aDecorator 

	self addYDecorator: aDecorator
! !

Object subclass: #GETDataObject
	instanceVariableNames: 'value roElement isBig'
	package: 'Graph-ET-Core'!

!GETDataObject methodsFor: 'accessing'!

getValue
	
	^ value
!

isBig
	^ isBig
!

isBig: anObject
	isBig := anObject
!

roElement
	
	^ roElement
!

roElement: anObject
	
	roElement := anObject
!

value: anObject
	
	value := anObject
! !

!GETDataObject methodsFor: 'initialize-release'!

initialize 
	
	super initialize.
	self roElement: ROElement new.
	self value: 0.
	self isBig: false
! !

Object subclass: #GETDiagramBuilder
	instanceVariableNames: 'diagram intWrapper rawView stack'
	package: 'Graph-ET-Core'!

!GETDiagramBuilder methodsFor: 'accessing'!

diagram

	^ diagram.
!

intWrapper
	
	^ intWrapper ifNil: [
		self intWrapper: GETInteractionWrapper new.
		self intWrapper.].
!

intWrapper: anObject
	
	intWrapper := anObject
!

rawView
	
	^ rawView
!

rawView: anObject
	
	rawView := anObject
!

stack
	^ stack
! !

!GETDiagramBuilder methodsFor: 'animation'!

updateBlock: aBlock

	^ self diagram updateBlock: aBlock
!

updateY: aBlock

	^ self diagram updateY: aBlock
! !

!GETDiagramBuilder methodsFor: 'diagrams'!

compositeDiagram

	^ diagram := GETCompositeDiagram new
!

horizontalBarDiagram

	^ diagram := GETHorizontalBarDiagram new.
!

lineDiagram

	^ diagram := GETLineDiagram new
!

ordinaryLineDiagram

	^ diagram := GETOrdinaryLineDiagram new
!

pieDiagram

	^ diagram := GETPieDiagram new
!

scatterplot

	^ diagram := GETScatterPlot new
!

verticalBarDiagram

	^ diagram := GETVerticalBarDiagram new
! !

!GETDiagramBuilder methodsFor: 'initialize-release'!

initDefaultButtons

	stack 
		exportButton;
		findButton;
		zoomInButton;
		zoomOutButton
!

initialize
	super initialize.
"	
	stack := ROViewStack new.
	rawView := ROView new @ RODraggable.
"
	rawView := ROView new.
"	stack addView: rawView."	"Default"
	self verticalBarDiagram
! !

!GETDiagramBuilder methodsFor: 'interaction'!

interaction
	
	^ (self intWrapper) diagram: (self diagram).
! !

!GETDiagramBuilder methodsFor: 'private'!

relocateView
	
	| all |
	
	all := self rawView elements.
	all isEmpty ifFalse: [ | transX transY |
		transX := ((all collect: [ :each | each position x ]) min min: 0) negated.
		transY := ((all collect: [ :each | each position y ]) min min: 0) negated.
"		rawView translateByRealPoint: (transX + 10) @ (transY + 50) "
	]
! !

!GETDiagramBuilder methodsFor: 'public-ui'!

open
	"Public method"
	
	self openIn: self rawView.
"	^ stack open"
	self rawView open.
!

openIn: aROView

	self rawView: aROView.
"	self stack addView: self rawView."
	
	self diagram displayIn: aROView.
	self relocateView.
	
	^ self stack
! !

!GETDiagramBuilder methodsFor: 'testing'!

openTest
	"Simulate the action of opening the view"
	self openIn: rawView.
	^ rawView
! !

!GETDiagramBuilder class methodsFor: 'instance creation'!

withDefaultButtons
	^ self new 
		initialize;
		initDefaultButtons;
		yourself
! !

!Object methodsFor: '*Graph-ET-Core'!

isGETDiagram

	^ false
! !

!SequenceableCollection methodsFor: '*Graph-ET-Core'!

plotBar
	"(1 to: 10) plotBar"
	
	| diagram |
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: self;
		y: #yourself;
		height: 150;
		regularAxis.
	diagram interaction popUpText.
	diagram open
!

plotDistribution
	"
	((1 to: 10)  collect: [ :i | 10 atRandom]) plotDistribution
	"
	
	| diagram values |
	values := (GETDistribution on: self) annotatedFrequency.
	
	diagram := GETDiagramBuilder new.
	diagram verticalBarDiagram
		models: values;
		y: [ :v | v third size ];
		height: 150;
		regularAxisAsInteger.
	diagram interaction popUpText.
	diagram open
! !

