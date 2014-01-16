Smalltalk current createPackage: 'RoassalExtras-Geo-Tests'!
ROTest subclass: #ROFranceMapBuilderTest
	instanceVariableNames: 'builder'
	package: 'RoassalExtras-Geo-Tests'!

!ROFranceMapBuilderTest methodsFor: 'city shape builder'!

expectedFailures
	^ #(#testShapeBuilder #testShapeSize)
!

testLinearFillColor
	| nice paris |
	builder shape linearFillColor: [ :cityName | cityName size ].
	builder cities: #('Nice' 'Paris'). 
	
	nice := builder view elementFromModel: 'Nice'.
	paris := builder view elementFromModel: 'Paris'.
	self assert: ((nice getShape: ROEllipse) colorFor: nice) ~= ((paris getShape: ROEllipse) colorFor: paris)
!

testShapeBuilder

	| element |
	builder shape rectangle.
	builder city: 'Nice'.
	
	builder city: 'Paris'.
	
	element := builder view elementFromModel: 'Nice'.
	self assert: (element isShapedAs: ROBox).
	
	element := builder view elementFromModel: 'Paris'.
	self assert: (element isShapedAs: ROEllipse).
!

testShapeBuilderWithLabel
	builder shape withLabel.
	builder city: 'Nice'.
	
	self assert: builder view numberOfElements = 2.
!

testShapeColor

	| nice paris |
	builder shape color: Color blue.
	builder city: 'Nice'. 
	
	builder shape color: Color gray.
	builder city: 'Paris'.
	
	nice := builder view elementFromModel: 'Nice'.
	paris := builder view elementFromModel: 'Paris'.
	
	self assert: ((nice getShape: ROEllipse) colorFor: nice) = Color blue.
	self assert: ((paris getShape: ROEllipse) colorFor: paris) = Color gray
!

testShapeColor2
	| nice |
	self assert: builder shape color = Color red.
	
	builder city: 'Nice'. 
	
	nice := builder view elementFromModel: 'Nice'.
	self assert: ((nice getShape: ROEllipse) colorFor: nice) = Color red.
!

testShapeColor3
	| nice |
	builder shape color: [ :v | Color green ].
	builder city: 'Nice'. 
	
	nice := builder view elementFromModel: 'Nice'.
	self assert: ((nice getShape: ROEllipse) colorFor: nice) = Color green.
!

testShapeSize

	| nice paris |
	builder shape size: 20.
	builder city: 'Nice'. 
	
	builder city: 'Paris'.
	
	nice := builder view elementFromModel: 'Nice'.
	paris := builder view elementFromModel: 'Paris'.
	
	self assert: ((nice getShape: ROEllipse) extentFor: nice) x = 20.
	self assert: ((paris getShape: ROEllipse) extentFor: paris) x = builder shape defaultCitySize.
! !

!ROFranceMapBuilderTest methodsFor: 'events'!

testEvent
	| t nice |
	t := false.
	builder interaction on: ROMouseEnter do: [ :event | t := true ].
	nice := builder city: 'Nice'.
	
	self deny: t.
	nice announce: ROMouseEnter.
	self assert: t
! !

!ROFranceMapBuilderTest methodsFor: 'running'!

setUp
	super setUp.
	builder := ROMapBuilder new
! !

!ROFranceMapBuilderTest methodsFor: 'tests'!

testCities

	self assert: builder numberOfCities > 0
!

testOpening

	| window |
	window := builder open.
	self assert: window notNil.
	window delete.
!

testShapeCityBuilder

	builder city: 'Nice'.
	self assert: builder view numberOfElements = 1
! !

ROTest subclass: #ROMapBuilderTest
	instanceVariableNames: 'builder'
	package: 'RoassalExtras-Geo-Tests'!

!ROMapBuilderTest methodsFor: 'running'!

setUp
	super setUp.
	builder := ROMapBuilder new.
! !

!ROMapBuilderTest methodsFor: 'tests'!

testEdges

	| edge |
	builder country: 'UnitedStates'.

	builder cities: #('New York City' 'Washington, D.C.').
	
	builder shape line width: 3; color: (Color blue alpha: 0.5).
	builder edgesFrom: 'New York City' toAll: #('Washington, D.C.').

	self assert: builder view elementsAsEdge size = 1.
	
	edge := builder view elementsAsEdge anyOne.
	self assert: (edge getShape: ROLine) color = (Color blue alpha: 0.5)
! !

