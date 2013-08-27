Smalltalk current createPackage: 'ARoassal-Demo'!
Object subclass: #RODemo
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!RODemo methodsFor: 'not yet classified'!

initializeDropdown
	| htmlSelectorList |
	htmlSelectorList := ''.
	ROExample selectors do: [:selector |
		htmlSelectorList := htmlSelectorList,'<li><a href="#" onClick="smalltalk.RODemo._show(''',selector,''')">',selector,'</li>'.
	].
	('#selectorList' asJQuery) html: htmlSelectorList.
!

show: selector
	self updateTextArea: selector.
	self updateCanvas: selector.
!

updateCanvas: selector
	"execute 'ROExample new selector' command"
!

updateTextArea: selector
	"put the code into #roassal-text textarea"
	('#roassal-text' asJQuery) html: ((ROExample>>selector) source).
! !

!RODemo class methodsFor: 'not yet classified'!

show: selector
	|demo|
	demo := self new.
	demo updateTextArea: selector.
	demo updateCanvas: selector.
! !

