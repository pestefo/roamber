Smalltalk current createPackage: 'ARoassal-Demo'!
Widget subclass: #RODemo
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

initializeDropdown2
| selectorListDiv ul li a |
	selectorListDiv := '#selectorListDiv' asJQuery.

	[:html | 
			ROExample selectors do: [:selector |
				ul := html ul.
				li := html li.
				a := html a.
				a href: '#'.
				a onClick: [RODemo new show: selector].
				a html: selector.
				li append: a.
				ul append: li.
			].
		] appendToJQuery: selectorListDiv.
!

renderOn: html
	| selectorList ul li a |
	"selectorListDiv := '#selectorListDiv' asJQuery."
	"ul := html ul."
	selectorList := '#selectorList' asJQuery.
	ROExample selectors do: [:selector |

		li := html li.
		a := html a.
		a href: '#'.
		a onClick: [RODemo new show: selector].
		a with: selector.
		li append: a.
		selectorList append: li.
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
	self new appendToJQuery: 'body' asJQuery
!

show: selector
	|demo|
	demo := self new.
	demo updateTextArea: selector.
	demo updateCanvas: selector.
! !

