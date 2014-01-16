Smalltalk current createPackage: 'ARoassal-Layout-Test'!
TestCase subclass: #ROLayoutTest
	instanceVariableNames: 'view elements'
	package: 'ARoassal-Layout-Test'!

!ROLayoutTest methodsFor: 'as yet unclassified'!

setUp

	elements := ROElement forCollection: (1 to: 20).
	elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].
	view := ROView new.
	view addAll: elements.
	elements allButFirst do: [:e | 
	 	view add: (ROEdge lineFrom: elements first to: e) ]
!

testLayout
! !

ROLayoutTest subclass: #ROTreeLayoutTest
	instanceVariableNames: ''
	package: 'ARoassal-Layout-Test'!

!ROTreeLayoutTest methodsFor: 'as yet unclassified'!

testLayout
	| result |
	ROTreeLayout on: elements.
	
	result := ((Array new: 20) at: 1 put: ((482@5)); at: 2 put: ((5@75)); at: 3 put: ((58@75)); at: 4 put: ((111@75)); at: 5 put: ((164@75)); at: 6 put: ((217@75)); at: 7 put: ((270@75)); at: 8 put: ((323@75)); at: 9 put: ((376@75)); at: 10 put: ((429@75)); at: 11 put: ((482@75)); at: 12 put: ((535@75)); at: 13 put: ((588@75)); at: 14 put: ((641@75)); at: 15 put: ((694@75)); at: 16 put: ((747@75)); at: 17 put: ((800@75)); at: 18 put: ((853@75)); at: 19 put: ((906@75)); at: 20 put: ((959@75)); yourself).
	self assert:  (result includesAll: (elements collect: #positionAsInteger))
! !

