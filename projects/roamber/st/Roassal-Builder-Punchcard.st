Smalltalk current createPackage: 'Roassal-Builder-Punchcard'!
ROObject subclass: #ROPunchcardBuilder
	instanceVariableNames: 'models metrics view minColor maxColor popupText'
	package: 'Roassal-Builder-Punchcard'!

!ROPunchcardBuilder methodsFor: 'accessing'!

maxColor: aColor
	maxColor := aColor
!

minColor: aColor
	minColor := aColor
!

popupText: aTreeArgBlock
	"Block has to match the pattern [ :object :metricName :value |  ... ]."
	popupText :=  aTreeArgBlock
! !

!ROPunchcardBuilder methodsFor: 'adding'!

addMetric: aBlock namedAs: metricName
	metrics add: { aBlock . metricName }.
!

addModels: aCollection
	models addAll: aCollection.
! !

!ROPunchcardBuilder methodsFor: 'initialize-release'!

initialize
	super initialize.
	metrics := OrderedCollection new.
	models := OrderedCollection new.
	minColor := maxColor := Color lightGray.
	popupText := [ :object :metricName :value | value ]
! !

!ROPunchcardBuilder methodsFor: 'instance creation'!

open

	|  aView |
	aView := ROView new.
	self renderOn: aView.
	aView open
! !

!ROPunchcardBuilder methodsFor: 'metrics'!

numberOfMetrics
	^ metrics size
!

numberOfModels
	^ models size
! !

!ROPunchcardBuilder methodsFor: 'rendering'!

renderOn: aView
	|  layout |
	
	metrics do: [ :metric |
		| m name normalizer | 
		m := metric first.
		name := metric second.
		"thresholds :=  self thresholdsFor: metric."
		normalizer := RONColorLinearNormalizer inContext: (models collect: [:obj | m roValue: obj]) lowColor: minColor highColor: maxColor.
		models do: [ :obj |
			| circle metricValue |
			metricValue := m roValue: obj.
			circle := ((ROEllipse new size: metricValue ) color: (normalizer roValue: metricValue)) elementOn: obj  .
			circle @ (ROPopup text: [ :roElement | (popupText value: obj  value: name value: metricValue) asString ]).
			aView add: circle.
			 ].
			 
		aView add: (ROLabel new elementOn: name) 
	].
	
	models do: [ :obj | aView add: (ROLabel new elementOn: obj) ].
	
	layout := ROCellLayout withLineItemsCount: (self numberOfModels + 1).
	layout on: aView elements
! !

ROTest subclass: #ROPunchcardBuilderTest
	instanceVariableNames: 'builder emptyBuilder view'
	package: 'Roassal-Builder-Punchcard'!

!ROPunchcardBuilderTest methodsFor: 'as yet unclassified'!

setUp

	builder := ROPunchcardBuilder new.
	builder addModels: #( 'hello' 'world' 'hello world' ).
	builder addMetric: [:word | word size] namedAs: 'length'.

	emptyBuilder := ROPunchcardBuilder new.
!

testCreation

	self assert: emptyBuilder numberOfModels = 0.
	self assert: emptyBuilder numberOfMetrics = 0.
!

testRendering

	view := ROView new.
	builder renderOn: view.
	self assert: view numberOfElements = 7
!

testSimpleScenario
	self assert: builder numberOfModels = 3.
	self assert: builder numberOfMetrics = 1.
!

testTwoMetricsScenario
	builder addMetric: [:word | word size * 2] namedAs: 'double lenght'.
	
	self assert: builder numberOfModels = 3.
	self assert: builder numberOfMetrics = 2.
! !

ROObject subclass: #ROPunchcardExample
	instanceVariableNames: 'builder'
	package: 'Roassal-Builder-Punchcard'!

!ROPunchcardExample methodsFor: 'as yet unclassified'!

example

"
self new example
"

builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder open
!

example2

"
self new example2
"

builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder addMetric: [:word | word size * 2 ] namedAs: 'length 2'.
builder open.
!

example3

"
self new example3
"

builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder addMetric: [:word | word size * 2 ] namedAs: 'length 2'.
builder minColor: Color green.
builder maxColor: Color red.
builder open.
!

example4

"
self new example4
"

builder := ROPunchcardBuilder new.
builder addModels: (ROObject withAllSubclasses copyFrom: 3 to: 9).
builder addMetric: [ :c | c numberOfMethods + 5] namedAs: 'NOM'.
builder addMetric: [ :c | c numberOfVariables * 5 ] namedAs: 'NOA'.
builder addMetric: [ :c | c numberOfSubclasses * 5  ] namedAs: 'NOS'.
builder popupText: [ :class :metricName :value | 'The value of ', metricName, ' for ', class name, ' is ', value asString ].
builder minColor: Color green.
builder maxColor: Color red.
builder open.
! !

