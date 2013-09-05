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

ROObject subclass: #ROExample
	instanceVariableNames: ''
	package: 'ARoassal-Demo'!

!ROExample methodsFor: 'not yet classified'!

circle
	| view |
	view := ROView new.
	view add: (ROCircle element translateTo: 50 @ 50).
	view open.
!

collectionHierarchy
|view classElements edges associations|
view := ROView new.
classElements := ROElement forCollection: Collection withAllSubclasses.
classElements
	do: [:c | | instVar |
		instVar := c model instVarNames size.
		c shape width: (( instVar = 0) ifTrue: [ 10 ] ifFalse: [ instVar * 15]) .
"		c shape height: c model methods size."
		c shape height: c model allSelectors size.	
		c + ROBox.
		c @ RODraggable ].
		view addAll: classElements.
associations := classElements collect: [:c |
			(c model superclass = Object)
			ifFalse: [ (view elementFromModel: c
				model superclass) -> c]
			] thenSelect: [:assoc | assoc isNil not ].
edges := ROEdge linesFor: associations.
view addAll: edges.
ROTreeLayout on: (view elements) edges: edges.
"ROTreeLayout new on: view elements."

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
element := ROElement new size: 100.
element + ROBox.
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

