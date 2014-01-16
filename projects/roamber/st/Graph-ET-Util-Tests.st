Smalltalk current createPackage: 'Graph-ET-Util-Tests'!
TestCase subclass: #GETDistributionTest
	instanceVariableNames: ''
	package: 'Graph-ET-Util-Tests'!

!GETDistributionTest methodsFor: 'as yet unclassified'!

testBasic

	| numbers distribution values |
	numbers := #(5 2 1 8 1 2 4 8 1 9 7 3 7).
	distribution := GETDistribution on: numbers.
	values := distribution frequencyMin: 1 max: 9 amountOfIntervals: 3.
	
	self assert: values size = 3.
	self assert: values first = (numbers select: [ :n | n < 4 ]).
	self assert: values second = (numbers select: [ :n | n >= 4 and: [ n < 6 ] ]).
	self assert: values third = (numbers select: [ :n | n >= 6 ]).
!

testBasic2

	| numbers distribution values |
	numbers := #(5 2 1 8 1 2 4 8 1 9 7 3 7).
	distribution := GETDistribution on: numbers.
	values := distribution frequencyWithAmountOfIntervals: 3.
	
	self assert: values size = 3.
	self assert: values first = (numbers select: [ :n | n < 4 ]).
	self assert: values second = (numbers select: [ :n | n >= 4 and: [ n < 6 ] ]).
	self assert: values third = (numbers select: [ :n | n >= 6 ]).
! !

