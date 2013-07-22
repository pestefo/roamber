Smalltalk current createPackage: 'ARoassal-Layout'!
Object subclass: #ROLayout
	instanceVariableNames: 'translator affectedNodes'
	package: 'ARoassal-Layout'!

!ROLayout methodsFor: 'not yet classified'!

applyOn: elements
	
	self executeOnElements: elements
!

executeOnElements: elements 
	"Execute the layout, myself, on the elements"
		
"	self doInitialize: elements."
	self doExecute: elements asOrderedCollection.
"	self doPost: elements."
!

initialize
	translator := ROLayoutTranslator default.
! !

!ROLayout class methodsFor: 'not yet classified'!

on: aCollection
	self new applyOn: aCollection.
	^ aCollection
! !

ROLayout subclass: #ROAbstractLineLayout
	instanceVariableNames: 'gapSize horizontalGap verticalGap horizontalOutGap verticalOutGap alignment horizontallyStretchable verticallyStretchable'
	package: 'ARoassal-Layout'!

!ROAbstractLineLayout methodsFor: 'not yet classified'!

alignTop
	
	alignment := #top
!

alignment
	
	^alignment
!

alignment: anObject
	
	alignment := anObject
!

horizontalGap
	
	^horizontalGap
!

horizontalOutGap
	
	^horizontalOutGap
!

initialize
	
	super initialize.
	verticalGap := 10.
	horizontalGap := 10.
	horizontalOutGap := 5.
	verticalOutGap := 5.
	horizontallyStretchable := verticallyStretchable := false
!

verticalOutGap
	
	^verticalOutGap
! !

ROAbstractLineLayout subclass: #ROHorizontalLineLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!ROHorizontalLineLayout methodsFor: 'not yet classified'!

deltaFor: aNodeFigure
	
	| delta |
	delta := 0.
	self alignment == #bottom ifTrue: [delta := aNodeFigure height].
	self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].
	^0 @ delta
!

doExecute: elements 
	| pointer delta |
	pointer := self positionOriginalPointer: elements.
"
	horizontallyStretchable ifTrue: 
		[ self doStretchHorizontal: elements ].
"
	elements do: 
		[ :element | 
		delta := self deltaFor: element.
		translator translate: element to: pointer - delta.
		pointer := self 
					movePointer: pointer
					accordingToFigure: element.
 ].	
"
	verticallyStretchable ifTrue: 
		[ self doStretchVertical: elements ]
"
!

initialize
	
	super initialize.
	self alignTop
!

movePointer: pointer accordingToFigure: element
	
	^ (pointer x + element width + self horizontalGap) @ pointer y
!

positionOriginalPointer: aGraph 
	| maxHeight delta |
	delta := 0.
	self alignment == #bottom ifTrue: 
		[ maxHeight := aGraph nodes maxValue: #height.
		delta := maxHeight ].
	self alignment == #center ifTrue: 
		[ maxHeight := aGraph nodes maxValue: #height.
		delta := maxHeight / 2.0 ].
	^ self horizontalOutGap @ (self verticalOutGap + delta)
! !

ROLayout subclass: #ROEdgeDrivenLayout
	instanceVariableNames: 'edges userDefinedEdges fromPositions toPositions'
	package: 'ARoassal-Layout'!

!ROEdgeDrivenLayout methodsFor: 'accessing'!

affectedNodes
	
	^affectedNodes
!

affectedNodes: anObject
	
	affectedNodes := anObject
!

affectedNodesOf:  aNode 
	^ affectedNodes ifNil: [ aNode nodes ]
!

edges: aCollection
	
	edges := aCollection
!

fromPositions: anArray
	
	fromPositions := anArray
!

setEdgesFromElements: elements 
	| view |
	elements isEmpty ifTrue: [ ^ self ].
	self assert: [ (elements collect: #view) asSet size = 1 ].
	
	elements isEmpty ifTrue: [ ^ self ].
	
	view := elements anyOne view.
	self edges: (view elementsSuchThat: [ :el | ((el isKindOf: ROEdge) and: [ elements includes: el from ]) and: [ elements includes: el to ] ]).
!

toPositions: anArray
	
	toPositions := anArray
! !

!ROEdgeDrivenLayout methodsFor: 'default values'!

defaultFromPositions
	^ #()
!

defaultToPositions
	^ #()
! !

!ROEdgeDrivenLayout methodsFor: 'hook'!

doExecute: aGraphElement
	
	self subclassResponsibility
!

doIncrementallyExecute: anElementNode
	"called by refreshLayoutEvery: ms. It is used to convey a feeling of incremental execution."
	
	self doExecute: anElementNode
!

executeOnElements: elements 
	"Execute the layout, myself, on the elements"

	self userDefinedEdges isNil 
		ifTrue: [ self setEdgesFromElements: elements ]
		ifFalse: 
			[ | flat |
			flat := OrderedCollection new.
			self userDefinedEdges do: 
				[ :each | 
				each isCollection 
					ifTrue: [ flat addAll: each ]
					ifFalse: [ flat add: each ] ].
			self edges: flat ].
		
	super executeOnElements: elements
! !

!ROEdgeDrivenLayout methodsFor: 'initialize-release'!

initialize
	"Initialization"
	super initialize.
	edges := nil
!

userDefinedEdges: aCollectionOfEdges
	"useful to tell to the layout which edges have to be used for the layout"

	userDefinedEdges := aCollectionOfEdges.
! !

!ROEdgeDrivenLayout methodsFor: 'iterator'!

edgesDo: aBlock
	"Iterates over all the edges of the receiver."
	
	edges ifNil: [ ^ self ].
	edges do: aBlock
! !

!ROEdgeDrivenLayout methodsFor: 'private'!

edges
	
	^edges
!

fromPositions
	
	^fromPositions ifNil: [fromPositions := self defaultFromPositions]
!

toPositions
	
	^toPositions ifNil: [toPositions := self defaultToPositions]
!

userDefinedEdges
	
	^userDefinedEdges
! !

!ROEdgeDrivenLayout methodsFor: 'testing'!

isLineLayout
	^ false
! !

ROEdgeDrivenLayout subclass: #ROAbstractGraphLayout
	instanceVariableNames: 'verticalGap horizontalGap cachedChildren cachedParents cachedParentsWithHighestNestings'
	package: 'ARoassal-Layout'!

!ROAbstractGraphLayout methodsFor: 'accessing'!

horizontalGap
	
	^horizontalGap ifNil: [self class horizontalGap]
!

horizontalGap: anInteger
	
	horizontalGap := anInteger
!

verticalGap
	
	^verticalGap ifNil: [self class verticalGap]
!

verticalGap: anInteger
	
	verticalGap := anInteger
! !

!ROAbstractGraphLayout methodsFor: 'actions'!

on: el edges: edgs
	"Do the layout of the elements tacking into account the provided edges"

	self userDefinedEdges ifNil: [ self userDefinedEdges: edgs ].

	^ self applyOn: el.
! !

!ROAbstractGraphLayout methodsFor: 'battista'!

greedyCycleRemoval: aCollection
	"Di Battista Greedy-Cycle-Removal algorithm. Chapter 9.4, page 297. The last part is not like in the book. The original algorithm only takes
	 local optimas into account. This will break ordinary trees sometimes. This version also takes global optimas into account."
	
	| g sl sr s indeg outdeg degrees vertex |
	g := aCollection copy asOrderedCollection.
	sl := OrderedCollection new.
	sr := OrderedCollection new.	"While g contains a sink (aka leaf)"
	g copy
		do:
			[:node | 
			(self childrenFor: node) isEmpty
				ifTrue:
					[sr addFirst: node.
					g remove: node]	"self edges detect: [:edge | edge fromFigure == node] ifNone: [sr addFirst: node. g remove: node]"].	"While g contains a source (aka root)"
	g copy
		do:
			[:node | 
			(self parentsFor: node) isEmpty
				ifTrue:
					[sl addLast: node.
					g remove: node]	"self edges detect: [:edge | edge toFigure == node] ifNone: [sl addLast: node. g remove: node]"].	"Calculate deg for all remaining vertices"
	degrees := IdentityDictionary new.
	g
		do:
			[:node | 
			indeg := (self parentsFor: node) size.
			outdeg := (self childrenFor: node) size.	"indeg := self edges inject: 0 into: [:sum :edge | (edge toFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].
		outdeg := self edges inject: 0 into: [:sum :edge | (edge fromFigure == node) ifTrue: [sum + 1] ifFalse: [sum]]."
			degrees
				at: node
				put: outdeg - indeg].	"While g not empty"
	g := g asSortedCollection: [:a :b | (degrees at: a) >= (degrees at: b)].
	[g isEmpty]
		whileFalse:
			[vertex := g
				detect: [:v | (self parentsFor: v) anySatisfy: [:w | sl includes: w]]
				ifNone: [g first].	"Corner case: Closed cycle with not root at all. Eg 1 -> 2 -> 3 -> 1"
			sl addLast: vertex.
			g remove: vertex].	"Remove all leftward edges"
	s := sl , sr.
	self edges notNil
		ifTrue: 
			[ self edges copy
				do:
					[:edge | 
					(s indexOf: edge source) > (s indexOf: edge target)
						ifTrue: [self edges remove: edge ] ] ].	
	"Reset the cache"
	self clear
! !

!ROAbstractGraphLayout methodsFor: 'default values'!

defaultFromPositions
	
	^#(#bottomCenter)
!

defaultToPositions
	
	^#(#topCenter)
! !

!ROAbstractGraphLayout methodsFor: 'hooks'!

doInitialize: elements 
	super doInitialize: elements.
	self clear.
	self greedyCycleRemoval: elements
! !

!ROAbstractGraphLayout methodsFor: 'private'!

cachedChildren
	
	cachedChildren ifNil: [cachedChildren := IdentityDictionary new: 1000].
	^cachedChildren
!

cachedParents
	
	cachedParents ifNil: [cachedParents := IdentityDictionary new: 1000].
	^cachedParents
!

cachedParentsWithHighestNestings
	
	cachedParentsWithHighestNestings
		ifNil: [cachedParentsWithHighestNestings := IdentityDictionary new: 1000].
	^cachedParentsWithHighestNestings
!

childrenFor: aNode
	
	^self cachedChildren
		at: aNode
		ifAbsentPut:
			[| nodes |
			nodes := OrderedCollection new.
			self edgesDo:
					[:edge | 
					(edge from == aNode and: [edge to ~= aNode])
						ifTrue:
							[(nodes includes: edge from) ifFalse: [nodes add: edge to]]].
			nodes]
!

childrenFor: aNode except: aNodeCollection
	
	^(self childrenFor: aNode) 
		reject: [:each | aNodeCollection includes: each]
	
	"we are explicitly not using the default Collection>>difference: behavior here because we want to preserve the order of the collection"
!

childrenWithHighestNestingLevelFor: aNode
	
	^(self childrenFor: aNode)
		select: [:eachChild | (self highestNestingParentFor: eachChild) == aNode]
!

clear
	
	cachedParents := nil.
	cachedChildren := nil.
	cachedParentsWithHighestNestings := nil
!

highestNestingParentFor: aNodeFigure
	
	| parents |
	^self cachedParentsWithHighestNestings
		at: aNodeFigure
		ifAbsentPut:
			[parents := self parentsFor: aNodeFigure.
			parents isEmpty
				ifTrue: [0]
				ifFalse:
					[parents detectMax: [:eachParent | self nestingLevelFor: eachParent]]]
!

nestingLevelFor: aNodeFigure
	
	| parents parentsNesting |
	parents := self parentsFor: aNodeFigure.
	parentsNesting := parents
		collect: [:eachParent | self nestingLevelFor: eachParent].
	^parentsNesting isEmpty
		ifTrue: [0]
		ifFalse: [parentsNesting max + 1]
!

parentsFor: aNode
	^ self cachedParents
		at: aNode
		ifAbsentPut:
			[ | nodes |
			nodes := OrderedCollection new.
			self edgesDo:
					[:edge | edge to == aNode ifTrue: [ nodes add: edge from ] ].
			nodes ]
!

rootNodesFor: aCollection
	^ aCollection select: [:node | 
		node isNotEdge and: 
			[ (self parentsFor: node) isEmpty ] ].
! !

!ROAbstractGraphLayout class methodsFor: 'constants'!

horizontalGap
	
	^3.0
!

verticalGap
	
	^20.0
! !

!ROAbstractGraphLayout class methodsFor: 'public'!

on: elements edges: edges
	"Do the layout of the elements tacking into account the provided edges"

	^ self new 
		userDefinedEdges: edges;
		applyOn: elements.
! !

ROAbstractGraphLayout subclass: #ROAbstractRegularTreeLayout
	instanceVariableNames: 'alreadyLayoutedNodes topGap leftGap nodesByLayer isLayered'
	package: 'ARoassal-Layout'!

!ROAbstractRegularTreeLayout methodsFor: 'accessing'!

isLayered
	"Is the layout layered"
	
	^ isLayered
!

isLayered: boolean
	"Is the layout layered"
	
	isLayered := boolean
!

layered
	self isLayered: true
!

leftGap
	^ leftGap
!

leftGap: anInteger
	leftGap := anInteger
!

topGap
	^ topGap
!

topGap: anInteger
	topGap := anInteger
! !

!ROAbstractRegularTreeLayout methodsFor: 'hook'!

doExecute: elements
	| rootNodes |
	alreadyLayoutedNodes := OrderedCollection new.
	rootNodes := self rootNodesFor: elements.
	nodesByLayer := OrderedCollection new.
	self
		layout: rootNodes
		atPoint: self leftGap @ self topGap
		atLayer: 1.
	self isLayered ifTrue: [
		self rearrangeByLayers: elements ]
! !

!ROAbstractRegularTreeLayout methodsFor: 'hook-private'!

layout: aNodeCollection atPoint: aPoint atLayer: anObject
	self subclassResponsibility
! !

!ROAbstractRegularTreeLayout methodsFor: 'initialize'!

initialize
	super initialize.
	topGap := 5.
	leftGap := 5.
	isLayered := false
! !

!ROAbstractRegularTreeLayout methodsFor: 'private'!

atLayer: aNumber add: aNodeCollection
	| collection |
	collection := nodesByLayer at: aNumber ifAbsentPut: [OrderedCollection new].
	collection addAll: aNodeCollection
!

rearrangeByLayers: aGraph
	self subclassResponsibility
! !

ROAbstractRegularTreeLayout subclass: #ROAbstractVerticalTreeLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!ROAbstractVerticalTreeLayout methodsFor: 'hook-private'!

layout: aNodeCollection atPoint: aPoint atLayer: aNumber
	| treeSize childrenPosition x y middleOfTree |
	aNodeCollection isEmpty ifTrue: [ ^ 0 ].
	x := aPoint x.
	y := aPoint y.
	alreadyLayoutedNodes addAll: aNodeCollection.
	self atLayer: aNumber add: aNodeCollection.
	aNodeCollection do: [ :each | 
		childrenPosition := y + each height + self verticalGap.
		treeSize := each width
			max: (self layout: (self computeChildrenFor: each) atPoint: x @ childrenPosition atLayer: aNumber + 1).
		middleOfTree := x + (treeSize / 2.0) - (each width / 2.0).
		translator translate: each to: middleOfTree @ y.
		x := x + treeSize + self horizontalGap.
		self step ].
	^ x - aPoint x - self horizontalGap
! !

!ROAbstractVerticalTreeLayout methodsFor: 'initialize-release'!

initialize
	super initialize.
	verticalGap := 20.
	horizontalGap := 3
! !

!ROAbstractVerticalTreeLayout methodsFor: 'private'!

rearrangeByLayers: aGraph
	| cursor layerDepthSize |
	cursor := self topGap.
	nodesByLayer do: [:eachSetOfNodes |
		layerDepthSize := eachSetOfNodes inject: 0 into: [:max :eachNode | 
			eachNode translateTo: (eachNode bounds left @ cursor ).
			max max: eachNode height ].
		cursor := cursor + layerDepthSize + self verticalGap ]
! !

ROAbstractVerticalTreeLayout subclass: #RODominanceTreeLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!RODominanceTreeLayout methodsFor: 'hook-private'!

computeChildrenFor: aNode
	^ self childrenWithHighestNestingLevelFor: aNode
! !

ROAbstractVerticalTreeLayout subclass: #ROTreeLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!ROTreeLayout methodsFor: 'hook-private'!

computeChildrenFor: aNode
	^ self childrenFor: aNode except: alreadyLayoutedNodes
! !

Object subclass: #ROLayoutTranslator
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!ROLayoutTranslator methodsFor: 'not yet classified'!

translate: element to: newPosition
	self subclassResponsibility
! !

ROLayoutTranslator class instanceVariableNames: 'defaultTranslator'!

!ROLayoutTranslator class methodsFor: 'not yet classified'!

default
	"Return the default translator, the one used in the layouts"

	defaultTranslator ifNotNil: [ ^ defaultTranslator ].
	^ defaultTranslator := self defaultClass new
!

defaultClass
	^ RODirectLayoutTranslator
! !

ROLayoutTranslator subclass: #RODirectLayoutTranslator
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!RODirectLayoutTranslator methodsFor: 'not yet classified'!

translate: element to: newPosition
	element translateTo: newPosition
! !

