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

!ROExample methodsFor: 'not yet classified'!

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
!

cellLayout
| view |
view := ROView new.
view clear.
" Play changing the number of squares"
1 to: 200 do: [ :i |
	view add: ((ROElement new model: i) shape: 
		(ROBox new)) @RODraggable ].
	ROCellLayout on: view elements .
	view open.
!

circle
	| view |
	view := ROView new.
	view add: (ROCircle element translateTo: 50 @ 50).
	view open.
!

collectionHierarchy
| view classElements edges associations |
view := ROView new.
classElements := ROElement forCollection: Collection withAllSubclasses.
classElements
	do: [:c | | instVar numMethods |
		instVar := c model instVarNames size.
		c shape width: (( instVar = 0) ifTrue: [ 10 ] ifFalse: [ instVar * 15]) .

		numMethods := c model selectors size.
		c shape height: (( numMethods = 0) ifTrue: [ 3 ] ifFalse: [ numMethods * 2]) . 	
		c + ROBox.
		c @ RODraggable.
		c @ ROPopup.
		c on: ROMouseEnter do: [c shape svgElement attr: 'fill' value: 'red'].
		c on: ROMouseLeave do: [c shape svgElement attr: 'fill' value: 'lightGray'].
		].
view addAll: classElements.

" Build and add edges "
associations := classElements collect: [:c |
			(c model superclass = Object)
			ifFalse: [ (view elementFromModel: c
				model superclass) -> c]
			] thenSelect: [:assoc | assoc isNil not ].
			
edges := ROEdge linesFor: associations.
view addAll: edges.

" Show the hierarchy as a tree "
ROTreeLayout on: (view elements) edges: edges.


view open.
!

create
	| view |
	view := ROView new.
	view add: (ROElement new shape: (ROBox new)).
	view open.
!

drag
	| view elements b |
	view := ROView new.
	elements := OrderedCollection new.
	b := (ROBox element translateTo: 50 @ 50).
	elements add: b."; 
			 add: (ROCircle element translateTo: 200 @ 150). "
	
	elements do: [:each | each addInteraction: RODraggable. view add: each].
	view open.
!

horizontalLayout
	| view |
	view := ROView new.
	view clear.
	10 timesRepeat: [view add: (ROElement new shape: (ROBox new))].
	ROHorizontalLineLayout on: view elements.
	view open.
	^ view.
!

horizontalLayout2
	| view |
	view := ROView new.
	view clear.
	1 to: 20 do: [ :i |
		view add: ((ROElement new model: i) shape: 
			(ROBox new height: [ :el | el model * 13 ]; width: [ :el | el model * 5 ])) ].
	ROHorizontalLineLayout on: view elements.
	view open.
!

hover
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
"Open an inspector when clicking"
element on: ROMouseEnter do: [ :event | event element shape svgElement attr: 'fill' value: 'red'].
element on: ROMouseEnter do: [ :event | event element shape svgElement attr: 'fill' value: 'lightGray'].
view add: element.
view open.
!

label
|view element |
view := ROView new.
element := ROElement new size: 100.

element + ROLabel.
view add: element.

view open.
!

line
	| view el1 el2 edge |
	view := ROView new.

	el1 := ROBox element.
	el2 := ROBox element.
	
	el1 translateTo: 20 @ 30.
	el2 translateTo: 300 @ 100.
	
	edge := ROLine edgeFrom: el1 to: el2.

	view add: el1; add: el2; add: edge.
	
	view open.
!

line2

	| view el1 el2 edge el3 el4 edge2 |
	view := ROView new.

	el1 := ROCircle element.
	el2 := ROCircle element.
	
	el1 translateTo: 20 @ 30.
	el2 translateTo: 300 @ 100.
	
	edge := ROLine edgeFrom: el1 to: el2.
	
	el3 := ROBox element.
	el4 := ROBox element.
	
	el3 translateTo: 150 @ 20.
	el4 translateTo: 150 @ 300.
	
	edge2 := ROLine edgeFrom: el3 to: el4.

	view add: el1; add: el2; add: edge; add: el3; add: el4; add: edge2.
	
	view open.
!

mouseclick
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
"Open an inspector when clicking"
element on: ROMouseClick do: [ :event | event element shape svgElement hide].
view add: element.
view open.
!

mouseclick2
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
"Open an inspector when clicking"
element on: ROMouseLeftClick do: [ :event | event element shape svgElement hide].
view add: element.
view open.
!

mouseclick3
|view element element2|
view := ROView new.
element := ROElement new size: 100.
element2 := ROElement new size: 50.
element + ROBox.
element2 + ROBox.
"Open an inspector when clicking"
element on: ROMouseLeftClick do: [ :event | Transcript show: 'e1',(String cr)].
element2 on: ROMouseLeftClick do: [ :event | Transcript show: '-e2-',(String cr)].
view add: element.
view add: element2.
ROHorizontalLineLayout on: {element . element2}.
view open.
!

popup
|view element|
view := ROView new.
"element := (ROElement on: 'Hi there!!') size: 100."
element := (ROElement forCollection: Collection withAllSubclasses) first.
element + ROBox.
element @ ROPopup.
"Open an inspector when clicking"

view add: element.
view open.
!

popupAndDrag
"not working properly right now"
|view element|
view := ROView new.
element := ROElement new size: 100.
element + ROBox.
element @ RODraggable.
element @ ROPopup.
"Open an inspector when clicking"

view add: element.
view open.
!

treeLayout 
	"
	self new treeLayout
	"
	
	| view elements edges |
	view := ROView new.
	elements := ROElement spritesOn: (1 to: 5).
	elements do:[:el | el addInteraction: RODraggable].
	view addAll: elements.
	view addAll: (edges := ROEdge linesFor: { (elements at: 1) -> (elements at: 2) . 
											  (elements at: 2) -> (elements at: 5) . 
											  (elements at: 2) -> (elements at: 3) }).
	
	ROTreeLayout on: elements edges: edges.

	view open.
!

treeLayout2
	"
	self new treeLayout
	"
	
	| view elements |
	elements := ROElement forCollection: (1 to: 20).
	elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].
	view := ROView new.
	view addAll: elements.
	elements allButFirst do: [:e | 
	 	view add: (ROEdge lineFrom: elements first to: e) ].

	ROTreeLayout on: elements.
	view open.
!

tux

	| view |
	view := ROView new.
	view add: (ROTux element).
	view open
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

