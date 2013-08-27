Smalltalk current createPackage: 'ARoassal-Demo'!
Widget subclass: #RODemo
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!RODemo methodsFor: 'not yet classified'!

renderOn: html
	| selectorList ul li a |
	ul := html ul.
	ul class: 'dropdown-menu'.
	
	ROExample selectors do: [:selector |

		li := html li.
		a := html a.
		a href: '#'.
		a onClick: [RODemo new show: selector].
		a with: selector.
		li append: a.
		ul append: li.
	].
!

show: selector
	self updateTextArea: selector.
	self updateCanvas: selector.
!

updateCanvas: selector
	"execute 'ROExample new selector' command"
	ROExample new perform:selector.
!

updateTextArea: selector
	"put the code into #roassal-text textarea"
	('#roassal-text' asJQuery) html: ((ROExample>>selector) source).
! !

!RODemo class methodsFor: 'not yet classified'!

init
	self new appendToJQuery: '#selectorList' asJQuery
! !

