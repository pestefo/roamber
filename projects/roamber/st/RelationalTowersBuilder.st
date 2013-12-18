Smalltalk current createPackage: 'RelationalTowersBuilder'!
ROAttachPoint subclass: #ROLeftBorderAttachPoint
	instanceVariableNames: ''
	package: 'RelationalTowersBuilder'!
!ROLeftBorderAttachPoint commentStamp!
A ROLeftBorderAttachPoint is xxxxxxxxx.!

!ROLeftBorderAttachPoint methodsFor: 'as yet unclassified'!

endingPointOf: anEdge
	^  (anEdge to absolutePosition) + ((anEdge to bounds width) @ ((anEdge to bounds height / 2 ) asInteger))
!

startingPointOf: anEdge
	^  (anEdge from absolutePosition) + (0 @ ((anEdge from bounds height / 2) asInteger))
! !

ROAttachPoint subclass: #RORightBorderAttachPoint
	instanceVariableNames: ''
	package: 'RelationalTowersBuilder'!
!RORightBorderAttachPoint commentStamp!
A RORightBorderAttachPoint is xxxxxxxxx.!

!RORightBorderAttachPoint methodsFor: 'public - hooks'!

endingPointOf: anEdge
	^  (anEdge to absolutePosition) + (0 @  ((anEdge to bounds height / 2) asInteger))
!

startingPointOf: anEdge
	^ (anEdge from absolutePosition) + ((anEdge from bounds width) asInteger @ ((anEdge from bounds height / 2 ) asInteger))
! !

RODraggable subclass: #ROVerticalDraggable
	instanceVariableNames: ''
	package: 'RelationalTowersBuilder'!
!ROVerticalDraggable commentStamp!
A ROVerticalDraggable is xxxxxxxxx.!

!ROVerticalDraggable methodsFor: 'as yet unclassified'!

initializeElement: element
	 element on: ROMouseDragging do: [ :event | 			
			element translateByRealPoint: (0 @ event step y).
			element signalUpdate ]
! !

Object subclass: #RelationalTowersBuilder
	instanceVariableNames: 'view models title legend left right labelLeft labelRight colorLeft colorRight viewWidth distance direction popups popupElement edges height width'
	package: 'RelationalTowersBuilder'!
!RelationalTowersBuilder commentStamp!
A RelationalTowersBuilder is xxxxxxxxx.

Instance Variables
	colorLeft:		<Object>
	colorRight:		<Object>
	direction:		<Object>
	distance:		<Object>
	height:		<Object>
	labelLeft:		<Object>
	labelRight:		<Object>
	left:		<Object>
	legend:		<Object>
	models:		<Object>
	popupElement:		<Object>
	popups:		<Object>
	right:		<Object>
	title:		<Object>
	view:		<Object>
	viewWidth:		<Object>
	width:		<Object>

colorLeft
	- xxxxx

colorRight
	- xxxxx

direction
	- xxxxx

distance
	- xxxxx

height
	- xxxxx

labelLeft
	- xxxxx

labelRight
	- xxxxx

left
	- xxxxx

legend
	- xxxxx

models
	- xxxxx

popupElement
	- xxxxx

popups
	- xxxxx

right
	- xxxxx

title
	- xxxxx

view
	- xxxxx

viewWidth
	- xxxxx

width
	- xxxxx!

!RelationalTowersBuilder methodsFor: 'accessing'!

color
	^color
!

color: aColor
	self colorLeft: aColor.
	self colorRight: aColor
!

colorLeft
	^colorLeft
!

colorLeft: aMessage
	^colorLeft := aMessage
!

colorRight
	^colorRight
!

colorRight: aMessage
	^colorRight := aMessage
!

distance
	^distance
!

distance: aNumber
	distance := aNumber
!

height
	^height
!

height: aNumber
	height := aNumber
!

label: aMessage
	self labelLeft: aMessage.
	self labelRight: aMessage
!

labelLeft
	^labelLeft
!

labelLeft: aMessage
	labelLeft := aMessage
!

labelRight
	^labelRight
!

labelRight: aMessage
	labelRight := aMessage
!

left
	^left
!

left: aCollection
	self models addAll: aCollection.
	left := self from: aCollection in: 'left'.
!

legend
	^legend
!

legend: aString
	legend := aString
!

models
	^models
!

models: aCollection
	models := aCollection
!

onLeftAndRight: aCollection
	self left: aCollection.
	self right: aCollection.
!

popupElement
	^popupElement
!

popupElement: aBlock
	popupElement := aBlock
!

popups
	^popups
!

right
	^ right
!

right: aCollection
	self models addAll: aCollection.
	right := self from: aCollection in: 'right'.
!

title
	^title
!

title: aString
	title := aString
!

view
	^view
!

view: aView
	view := aView
!

viewWidth
	^viewWidth
!

width
	^width
!

width: aNumber
	width := aNumber
! !

!RelationalTowersBuilder methodsFor: 'adding edges'!

edgesFrom: aBlock
	self edgesFromLeft: aBlock.
	self edgesToLeft: aBlock.
!

edgesFromLeft:  aBlock
	left ifEmpty: [ left := self fromModel ].
	right ifEmpty: [ self assignMissing: aBlock from: left ].
	direction := 'from'.
	self relationLeft: aBlock.
	self view addAll: left.
!

edgesFromLeft: aBlock edgesFromRight: anotherBlock
	self edgesFromLeft: aBlock.
	self edgesFromRight: anotherBlock.
!

edgesFromLeft: aBlock edgesToLeft: anotherBlock
	self edgesFromLeft: aBlock.
	self edgesToLeft: anotherBlock.
!

edgesFromRight: aBlock
	right ifEmpty: [ right := self fromModel ].
	left ifEmpty: [ self assignMissing: aBlock from: right ].
	direction := 'from'.
	self relationRight: aBlock.
	self view addAll: right
!

edgesTo: aBlock
	self edgesToRight: aBlock.
	self edgesFromRight: aBlock.
!

edgesToLeft:  aBlock
	right ifEmpty: [ right :=  self fromModel].
	left ifEmpty: [ self assignMissing: aBlock from: right ].
	direction := 'to'.
	self relationRight: aBlock.
	self view addAll: right.
!

edgesToLeft: aBlock edgesToRight: anotherBlock
	self edgesToRight: aBlock.
	self edgesToLeft: anotherBlock.
!

edgesToRight:  aBlock
	left ifEmpty: [ left := self fromModel].
	right ifEmpty: [ self assignMissing: aBlock from: left ].
	direction := 'to'.
	self relationLeft: aBlock.
	self view addAll: left.
!

edgesToRight: aBlock edgesFromRight: anotherBlock
	self edgesToRight: aBlock.
	self edgesFromRight: anotherBlock.
! !

!RelationalTowersBuilder methodsFor: 'edge-management'!

addLinesfrom: aNode toAll: aCollection from: anotherCollection color: aColor
	| at ce1 ce2 ce3 ce4 p1 p2 p3 p4 lines |
	lines := OrderedCollection new.
	anotherCollection = left
		ifTrue: [ at := RORightBorderAttachPoint instance ]
		ifFalse: [ at := ROLeftBorderAttachPoint instance ].
	p3 := self controlPointStart: aNode from: anotherCollection.
	ce3 := self controlElement: p3.
	aCollection
		do: [ :l | | ed |
			p2 := self controlPointEnd: l from: anotherCollection.
			"p1 := self companion: p3 with: p2.
			p4 := self companion: p2 with: p3."
			"ce1 := self controlElement: p1."
			ce2 := self controlElement: p2.
			"ce4 := self controlElement: p4."
			ed := (ROEdge from: aNode to: l) + (self splineLine: at	with: nil"ce1" with: ce2	with: ce3 with:  nil"ce4" color: aColor).	
			lines add: ed.
			view add: ed ].
	self view signalUpdate.
	^lines
!

blueLines: aNode in: aCollection to: links cache: prompLinks
	aNode
		on: ROMouseClick
		do: [ :event | 
			(aNode allEdgesFrom reject: [ :e | prompLinks includes: e ]) isEmpty
				ifTrue: [ 
					self
						addLinesfrom: aNode
						toAll: links
						from: aCollection
						color: Color blue.
					self addPopup: aNode from: aCollection.]
				ifFalse: [ 
					self removePopup: aNode.
					aNode allEdgesFrom do: [ :e | e remove ].
					self view signalUpdate ] ]
	"aNode
		on: ROMouseClick
		do: [ :event | 
			edges at: aNode		
				ifPresent: [
					(edges at: aNode) first shape 
					self removePopup: aNode.
					aNode allEdgesFrom do: [ :e | e shape hide ].
					self view signalUpdate]
				ifAbsent: [
					edges at: aNode put: 
					(self
						addLinesfrom: aNode
						toAll: links
						from: aCollection
						color: Color blue).
					self addPopup: aNode from: aCollection] ]"
!

check: aBlock from: s to: f
       | v r|
	   (aBlock numArgs = 2)
	       ifTrue: [r := (aBlock value: s value: f)]
	   	   ifFalse: [
			   v := ((aBlock value: s) = f).
			   (aBlock value: s) isCollection
			   		ifTrue: [r := (aBlock value: s) includes: f]
					ifFalse: [r := ((aBlock value: s) = f)]].
       ^r
!

companion: aPoint with: anotherPoint
	^(aPoint x < (anotherPoint x)) 
		ifTrue:  [ ((aPoint y - (anotherPoint y)) > 150) 
					ifTrue: [aPoint + ((distance / 12) negated @ (distance / 12))] 
					ifFalse: [ ((aPoint y - (anotherPoint y)) < (150 negated)) 
								ifTrue:  [aPoint + ((distance / 12) @ (distance / 12 negated))]
								ifFalse: [aPoint]]]
		ifFalse: [ ((aPoint y - (anotherPoint y)) > 150) 
					ifTrue: [aPoint + ((distance / 12) @ (distance / 12))] 
					ifFalse: [ ((aPoint y - (anotherPoint y)) < (150 negated)) 
								ifTrue:  [aPoint + ((distance / 12) negated @ (distance / 12) negated)]
								ifFalse: [aPoint]]]
!

controlElement: p1
	| elem |
	elem := (ROBox new color: Color transparent) element translateTo: p1.
	view add: elem.
	^elem
!

controlPointEnd: aNode from: aCollection
	^(aCollection = left) 
		ifTrue:  [aNode absolutePosition 
			+ ((distance / 3) negated @ (aNode bounds height / 2) asInteger)]
		ifFalse: [ aNode absolutePosition
			+ ((distance / 3) @ (aNode bounds height / 2) asInteger)]
!

controlPointStart: aNode from: aCollection
	^(aCollection = left) 
		ifTrue:  [aNode absolutePosition
			+ ((distance / 3) @ (aNode bounds height / 2) asInteger) ]
		ifFalse: [ aNode absolutePosition 
			+ ((distance / 3) negated @ (aNode bounds height / 2) asInteger)]
!

greyLinesfrom: aNode in: aCollection to: links cache: prompLinks
	aNode
		on: ROMouseEnter
		do: [ :event | 
			prompLinks
				addAll:
					(self
						addLinesfrom: aNode
						toAll: links
						from: aCollection
						color: Color veryVeryLightGray) ].
	aNode
		on: ROMouseLeave
		do: [ :event | 
			prompLinks do: [ :e | e remove ].
			self view signalUpdate ]
!

killLinksFrom: prompLinks
	"self view
		on: ROMouseMove
		do: [ :event | 
			prompLinks do: [ :e | e remove ].
			self view signalUpdate ]"
!

linesFrom: aCollection with: aBlock
	| otherCollection prompLinks |
	prompLinks := OrderedCollection new.
	aCollection = left
		ifTrue: [ otherCollection := right ]
		ifFalse: [ otherCollection := left ].
	aCollection
		do: [ :n1 | 
			| links |
			links := self linksFrom: n1 with: aBlock to: otherCollection.
			self
				blueLines: n1
				in: aCollection
				to: links
				cache: prompLinks.
			self
				greyLinesfrom: n1
				in: aCollection
				to: links
				cache: prompLinks ].
	self killLinksFrom: prompLinks
!

linesTo: aCollection with: aBlock
	| otherCollection prompLinks |
	prompLinks := OrderedCollection new.
	aCollection = left
		ifTrue: [ otherCollection := right ]
		ifFalse: [ otherCollection := left ].
	aCollection
		do: [ :n1 | 
			| links |
			links := self linksTo: n1 with: aBlock to: otherCollection.
			self
				blueLines: n1
				in: aCollection
				to: links
				cache: prompLinks.
			self
				greyLinesfrom: n1
				in: aCollection
				to: links
				cache: prompLinks ].
	self killLinksFrom: prompLinks
!

linksFrom: aNode with: aBlock to: otherCollection
	| links aux |
	aux := otherCollection
		collect: [ :e | 
			{e.
			aNode} ].
	links := aux
		select: [ :e | 
			| f s v |
			f := e first model.
			s := e second model.
			v := self check: aBlock from: f to: s.
			v ].
	links := links collect: [ :l | l first ].
	^ links
!

linksTo: aNode with: aBlock to: otherCollection
	| links aux |
	aux := otherCollection
		collect: [ :e | 
			{e.
			aNode} ].
	links := aux
		select: [ :e | 
			| f s v |
			f := e first model.
			s := e second model.
			v := self check: aBlock from: s to: f.
			v ].
	links := links collect: [ :l | l first ].
	^ links
!

splineLine: attachpoint with: controlPoint1 with: controlPoint2 with: controlPoint3 with: controlPoint4 color: aColor
	^ ROBSplineLine new
		attachPoint: attachpoint;
		color: aColor;
		addControlElement: controlPoint2;
		addControlElement: controlPoint3";
		addControlElement: controlPoint1;
		addControlElement: controlPoint4"
! !

!RelationalTowersBuilder methodsFor: 'examples'!

example1
	"
	self new example1
	"
	|a |
	a := RelationalTowersBuilder new.
	a left: { 'a' . 'b' . 'c' }.
	a edgesTo: #yourself.
	a open.
!

example2
	"
	self new example2
	"
	| a |
	a := RelationalTowersBuilder new.
	a label: [ :c | c name asString].
	a height: #numberOfMethods.
	a color: #numberOfLinesOfCode.
	a onLeftAndRight: Number withAllSubclasses.
	a edgesTo: #allSubclasses.
	a open.
!

example3
	"
	self new example3
	"
	| builder |

	builder := RelationalTowersBuilder new.
	builder height:  [ :e | e numberOfLinesOfCode  / 10].
	builder color: #numberOfMethods.
	builder left: ROShape withAllSubclasses.
	builder edgesTo: #referencedClasses.
	builder open
!

example4
	"
	self new example4
	"
	| builder |

	builder := RelationalTowersBuilder new.
	builder legend: 'Example of a relation between two set of integers'.
	builder left: (1 to: 10).
	builder right: (1 to: 20).
	builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ] edgesToLeft: [ :v | (v / 2) ].
	builder open
!

example5
	"
	self new example5
	"
	| builder | 
	builder := RelationalTowersBuilder new.
	builder legend: 'Power'.
	builder onLeftAndRight: (1 to: 20).
	builder edgesTo: [ :v | v * v].
	builder open
!

example6
	"
	self new example6
	"
	| builder | 
	builder := RelationalTowersBuilder new.
	builder left: (1 to: 20).
	builder right: (ROObject withAllSubclasses).
	builder edgesFrom: [ :a :b | a numberOfSubclasses = b].
	builder open
!

example7
	"
	self new example7
	"
	| builder |

	builder := RelationalTowersBuilder new.
	builder legend: 'Example of a relation between two set of integers'.
	builder left: (1 to: 10).
	builder right: (1 to: 20).
	builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ].
	builder popupElement: [ :v | |elem elems|
			elem := ROElement new.
			elems := OrderedCollection new.
			(((v model) - 5) to: ((v model) + 5)) do: [:n | |e| e := ROElement new. e addShape: ROBox blue. elems add: e. ].
			elem addAll: elems.
			ROGridLayout on: elems.
			elem].
	builder open
!

example8
	"
	self new example8 
	"
	| builder |

	builder := RelationalTowersBuilder new.
	builder legend: 'Compiler instance variables usage'.
	builder labelRight: [:a | a selector asString]. 
	builder left: Compiler instanceVariables.
	builder right: Compiler methods.
	builder edgesTo: [ :a :b | b referredInstVars includes: a  ].
	builder open
! !

!RelationalTowersBuilder methodsFor: 'initialization'!

initialize
	view := ROView new.
	models := OrderedCollection new.
	left := OrderedCollection new.
	right := OrderedCollection new.
	popups := Dictionary new.
	edges := Dictionary new. "not in Pharo"
	title := 'RelationalTowers'.
	legend := 'Relational Towers'.
	self label: #asString.
	self color: (Color blue).
	height := 10.
	width := 10.
	popupElement := [ :elem | (ROElement on: ((elem allEdgesFrom select: [:e | e shape color = (Color blue)]) size)) + (ROLabel new "fontSize: 20;" color: Color blue)].
	viewWidth := 500.
! !

!RelationalTowersBuilder methodsFor: 'instance creation'!

open
	"self view title: (self title)."
	(self view elements includes: (left anyOne)) ifFalse: [self view addAll: left].
	(self view elements includes: (right anyOne)) ifFalse: [self view addAll: right].
	"self view @ ROVerticalDraggable."
	"self view openInWindowSized: (self viewWidth) @ 500."
	self view signalUpdate.
	self view open.
! !

!RelationalTowersBuilder methodsFor: 'relations'!

assignMissing: aBlock from: aCollection
	| values aux otherCollection |
	aCollection = left
		ifTrue: [ otherCollection := right ]
		ifFalse:[ otherCollection := left ].
	values := OrderedCollection new.
	aux := aCollection collect: [ :l | (aBlock value: l model) asOrderedCollection ].
	aux do: [ :e | values addAll: e ].
	values removeDuplicates.
	otherCollection = left
		ifTrue: [ left := (self from: values in: 'left') ]
		ifFalse:[ right := (self from: values in: 'right')].
!

relation: aBlock	
	self relationLeft: aBlock.
	self relationRight: aBlock.
!

relationLeft: aBlock
	| newBlock |
	aBlock isBlock 
		ifTrue: [ newBlock	:= aBlock ]
		ifFalse: 	[ newBlock := [ :a :b | (a perform: aBlock) includes: b ] ]. 
	self distance isNil ifTrue: [ distance := self positionateTowers].
	direction = 'to' 
		ifTrue: [ self linesTo: left with: newBlock]
		ifFalse: [ self linesFrom: left with: newBlock]
!

relationRight: aBlock	
	| newBlock |
	aBlock isBlock 
		ifTrue: [ newBlock	:= aBlock ]
		ifFalse: 	[ newBlock := [ :a :b | (a perform: aBlock) includes: b ] ]. 
	self distance isNil ifTrue: [ distance := self positionateTowers].
	direction = 'to' 
		ifTrue: [ self linesTo: right with: newBlock]
		ifFalse: [ self linesFrom: right with: newBlock]
! !

!RelationalTowersBuilder methodsFor: 'shape-managment'!

addPopup: element from: aCollection
	| pop |
	element allEdgesFrom isEmpty 
		ifFalse: [  
			popups 
				at: 0 
				ifPresent: [ :e | e show]
				ifAbsent: [
					pop := self popupElement value: element.	
					popups at: element put:pop.
					self view add: pop.
					self stickTop: pop on: element from: aCollection.
					(aCollection = left)
						ifTrue:  [ pop translateBy: (5 negated) @ 0]
						ifFalse: [ pop translateBy: 5 @ 0]]].
!

from: aCollection in: aString
	|h w dictionary normalizer c color|
	(aString = 'left')
		ifTrue: [ color := self colorLeft ]
		ifFalse: [ color := self colorRight ].
	color ifNil: [ color := self colorRight].
	h := [ :v | [(self height value: v)] on: Error do: [ 10 ] ].
	w := [ :v | [(self width value: v)] on: Error do:[ 10 ] ].
	dictionary := Dictionary new.
	aCollection do: [ :e | dictionary at: e put: ([(color value: e)]  on: Error do: [0] ) ].
	normalizer := self getNormalizerfrom: dictionary.
	c := [ :v | [normalizer roValue: (color value: v)] on: Error do: [ Color lightGray ] ].
	^(aCollection collect: [ :m | | elem |
		elem := ROElement on: m.
		elem + (ROBox new height: (h value: m); width: (w value: m); color: (c value: m))]).
!

fromModel
	^(self from: (self models) in: 'left')
!

getNormalizerfrom: aDictionary
	^(RONColorLinearNormalizer inContext: (aDictionary values) lowColor: Color yellow highColor: Color green).
!

labels: aCollection
	| maxWidth label|
	maxWidth := 0.
	(aCollection = left) 
		ifTrue: [ label := self labelLeft ]
		ifFalse: [ label := self labelRight ].
	aCollection do: [:l | | lab | 
		lab := (ROElement on: (label value: l model))+  ROLabel.
		lab @ ROHighlight"ROLightlyHighlightable lightGray".
		maxWidth := maxWidth max: (lab width).
		self view add: lab.
		self stick: lab on: l from: aCollection].
	^maxWidth
!

positionateTowers
	| maxwl maxwr maxl maxr max leg |
	
	maxl := (left collect: [ :l | l height ]) max.
	maxr := (right collect: [ :l | l height ]) max.
	max := maxl max: maxr.

	ROVerticalLineLayout on: left.
	ROVerticalLineLayout on: right.	
	
	maxwl := self labels: left.
	maxwr := self labels: right.
	
	distance := ((self models size * max ln * 5) max: 300) min: 400.	

	left do: [ :e | e translateBy: (maxwl + 30) @ 30 ].
	right do: [ :e | e translateBy: (maxwl + distance + 30) @ 30 ].
	
	leg := (ROElement on: (self legend)) +  ROLabel.
	self view add: leg.
	leg translateBy: (maxwl + 40 + (distance / 2) - (leg width / 2)) @ 0.
	
	viewWidth := distance + maxwl + maxwr + 80.
	
	^ distance
!

removePopup: element
	(popups at: element) hide"remove". 
	self view signalUpdate.
!

stick: aLabel on: anElement from: aCollection
	(aCollection = left)
		ifTrue: [ ROConstraint stick: aLabel onTheLeftCenteredOf: anElement ]
		ifFalse: [ ROConstraint stick: aLabel onTheRightCenteredOf: anElement ]
!

stickTop: aLabel on: anElement from: aCollection
	(aCollection = left)
		ifTrue: [ ROConstraint stick: aLabel onTheLeftOf: anElement ]
		ifFalse: [ ROConstraint stick: aLabel onTheRightOf: anElement ]
! !

TestCase subclass: #RelationalTowersBuilderTest
	instanceVariableNames: 'builder'
	package: 'RelationalTowersBuilder'!
!RelationalTowersBuilderTest commentStamp!
A RelationalTowersBuilderTest is xxxxxxxxx.

Instance Variables
	builder:		<Object>

builder
	- xxxxx!

!RelationalTowersBuilderTest methodsFor: 'initialization'!

initialize
	builder := RelationalTowersBuilder new.
!

setUp
	super setUp.
	builder := RelationalTowersBuilder new.
! !

!RelationalTowersBuilderTest methodsFor: 'tests'!

testAssociation
	builder label: [ :c | c name asString].
	builder height: #numberOfMethods.
	builder color: #numberOfLinesOfCode.
	builder onLeftAndRight: Number withAllSubclasses.
	builder edgesTo: #allSubclasses.
	
	self assert: builder left size equals: (builder right size). 
	self assert: builder left first allEdgesFrom size equals: 0.
	self assert: builder distance equals: 400.
!

testConstruction
	builder models: { 'a' . 'b' . 'c' }.
	builder edgesTo: #yourself.
	
	self assert: builder labelLeft equals: #asString. 
	self assert: builder left size equals: builder right size. 
	self assert: builder viewWidth equals: 408. 
	self assert: builder legend equals: 'Relational Towers'.
! !

