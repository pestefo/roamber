Smalltalk current createPackage: 'ARoassal-Demo'!
Object subclass: #RODemo
	instanceVariableNames: 'workspace selector'
	package: 'ARoassal-Demo'!

!RODemo methodsFor: 'not yet classified'!

init
	" Initializes widgets"
	selector := ROExampleSelector init.
	workspace := ROWorkspace init.
!

writeExample: aString
	workspace clear.
	workspace val: aString.
	workspace doIt.
! !

RODemo class instanceVariableNames: 'demo'!

!RODemo class methodsFor: 'not yet classified'!

current
	demo ifNil: [  demo := self new].
	^ demo
!

init
	" Initializes widgets"
	self current init.
! !

ROObject subclass: #ROExample
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!ROExample methodsFor: 'demo'!

boxGenerator
	" Click on the square multiple times "
	| view el e |
	view := ROView new.
	el := ROElement new.
	el shape: (ROBox new).
	view add: el.
	el on: ROMouseClick do: [:event | 
		e := ROBox element.
		e extent: view elements size @ view elements size.
		Transcript show: view elements size printString; cr.
		view add: e. 
		ROCellLayout on: view elements.
		view signalUpdate].
	view open.
! !

Widget subclass: #ROExampleSelector
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!ROExampleSelector methodsFor: 'not yet classified'!

renderOn: html
	| ul li a |
	ul := html ul.
	ul class: 'dropdown-menu'.
	
	ROExample selectors do: [:selector |

		li := html li.
		a := html a.
		a href: '#'.
		a onClick: [self show: selector].
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
	RODemo current writeExample:  (self sourceCodeWithoutMethodnameOf: (ROExample>>selector)	).
! !

!ROExampleSelector methodsFor: 'utils'!

sourceCodeWithoutMethodnameOf: method
	| sourceCodeLines |
	sourceCodeLines := method source lines.
	sourceCodeLines removeFirst.
	" Remove newlines, empty and one-space lines"
	^ (sourceCodeLines reject: [:line | line = (String cr) 
																or: [ line = ' ' 
																or: [ line = '' ]]])
	"then join them into one string and return"															
			inject: '' into: [:sourceCode :line | sourceCode,(String cr),line ]
! !

!ROExampleSelector class methodsFor: 'not yet classified'!

init
	^ self new appendToJQuery: '#selectorList' asJQuery; yourself.
! !

Widget subclass: #ROWorkspace
	instanceVariableNames: 'workspace'
	package: 'ARoassal-Demo'!

!ROWorkspace methodsFor: 'not yet classified'!

clear 
	workspace clear.
!

doIt
	workspace doIt
!

renderButtonsOn: html
    html a
	with: 'DoIt';
	class: 'btn';
	title: 'ctrl+d';
	onClick: [self workspace doIt].
"	
    html a
	with: 'PrintIt';
	class: 'btn';
	title: 'ctrl+p';
	onClick: [self workspace printIt].
    
	html a
	with: 'InspectIt';
	class: 'btn';
	title: 'ctrl+i';
	onClick: [self workspace inspectIt]
"
!

renderOn: html
	| div |
	html div 
		class: 'roworkspace';
		with: [self renderButtonsOn: html];
		with: [self workspace renderOn: html].
!

val: aString
	workspace val: aString.
!

workspace
	^ workspace ifNil: [
          	workspace := SourceArea new]
! !

!ROWorkspace class methodsFor: 'not yet classified'!

init
	^ self new appendToJQuery: '#roassaltext' asJQuery; yourself.
! !

