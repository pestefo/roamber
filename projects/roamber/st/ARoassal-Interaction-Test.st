Smalltalk current createPackage: 'ARoassal-Interaction-Test'!
ROTest subclass: #ROPopupTest
	instanceVariableNames: 'text'
	package: 'ARoassal-Interaction-Test'!

!ROPopupTest methodsFor: 'not yet classified'!

test1
	|view element|
	view := ROView new.
	element := ROElement new size: 100.
	element + ROBox.
	element @ ROPopup.
	
	view add: element.
	
	self deny: ROPopup popup isNil.
	self assert: ROPopup popup size = 1.
! !

