Smalltalk current createPackage: 'ARoassal-Builder-Punchcard'!
ROObject subclass: #ROPunchcardBuilder
	instanceVariableNames: 'models metrics view minColor maxColor popupText'
	package: 'ARoassal-Builder-Punchcard'!
!ROPunchcardBuilder commentStamp!
| builder |
builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder open!

!ROPunchcardBuilder methodsFor: 'adding'!

addMetric: aBlock namedAs: metricName
	metrics add: { aBlock . metricName }.
!

addModels: aCollection
	models addAll: aCollection.
!

popupText: aTreeArgBlock
	"Block has to match the pattern [ :object :metricName :value |  ... ]."
	popupText :=  aTreeArgBlock
! !

!ROPunchcardBuilder methodsFor: 'color'!

maxColor: aColor
	maxColor := aColor
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

colorFor: obj thresholds: thresholds
"	| wheel max min |
	min := thresholds first.
	max := thresholds second.
	wheel := Color wheel: minColor to: maxColor.
"
	^ Color lightGray
!

minColor: aColor
	minColor := aColor
!

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
			circle := ((ROCircle new size: metricValue) elementOn: obj) color: (normalizer roValue: metricValue).
			circle @ (ROPopup text: [ :roElement | (popupText value: obj  value: name value: metricValue) asString ]).
			aView add: circle.
			 ].
			 
		aView add: (ROLabel new elementOn: name) 
	].
	
	models do: [ :obj | aView add: (ROLabel new elementOn: obj) ].
	
	layout := ROCellLayout withLineItemsCount: (self numberOfModels + 1).
	layout on: aView elements
!

thresholdsFor: metric
	
	^  { 	(models collect: [:obj | obj roValue: metric ]) min .
			 (models collect: [:obj | obj roValue: metric ]) max }
! !

ROTest subclass: #ROPunchcardBuilderTest
	instanceVariableNames: 'builder emptyBuilder view'
	package: 'ARoassal-Builder-Punchcard'!
!ROPunchcardBuilderTest commentStamp!
ROPunchcardBuilderTest new setUp!

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

Object subclass: #ROPunchcardExample
	instanceVariableNames: 'builder'
	package: 'ARoassal-Builder-Punchcard'!

!ROPunchcardExample methodsFor: 'not yet classified'!

example
builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder open
!

example2

builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder addMetric: [:word | word size * 2 ] namedAs: 'length 2'.
builder open.
!

example3

builder := ROPunchcardBuilder new.
builder addModels: #( 'hello' 'world' 'hello world' ).
builder addMetric: [:word | word size] namedAs: 'length'.
builder addMetric: [:word | word size * 2 ] namedAs: 'length 2'.
builder minColor: Color green.
builder maxColor: Color red.
builder open.
!

example4

builder := ROPunchcardBuilder new.
builder addModels: (ROObject withAllSubclasses copyFrom: 1 to: 5).
builder addMetric: [ :c | c numberOfMethods + 1] namedAs: 'NOM'.
builder addMetric: [ :c | c numberOfVariables * 2 ] namedAs: 'NOA'.
builder popupText: [ :class :metricName :value | ].
builder minColor: Color green.
builder maxColor: Color red.
builder open.
! !

