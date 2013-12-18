Smalltalk current createPackage: 'ARoassal-Layout'!
ROObject subclass: #ROCell
	instanceVariableNames: 'elements columns element number rowHeights columnWidths'
	package: 'ARoassal-Layout'!

!ROCell methodsFor: 'accessing'!

column

	^((number - 1) rem: columns) + 1
!

columnWidthAt: index
	"private"

	^ columnWidths at: index
!

columns
	^ columns
!

columns: anObject
	columns := anObject
!

computeColumnWidths

	columnWidths := Array new: elements columnCount.
	1 to: elements columnCount do: [ :columnIndex |
		columnWidths at: columnIndex put: ((elements atColumn: columnIndex) select: [:el | el notNil] thenCollect: [:el  | el width]) max
	 ].
!

computeRowHeights

	rowHeights := Array new: elements rowCount.
	1 to: elements rowCount do: [ :rowIndex |
		rowHeights at: rowIndex put: ((elements atRow: rowIndex) select: [:el | el notNil] thenCollect: [:el  | el height]) max
	 ].
!

element
	^ element
!

element: anObject
	element := anObject
!

elements: aCollection 

	| rows  col |
	rows := (aCollection size / columns) ceiling rounded.
	col := Array new: rows * columns.
	1 to: aCollection size do: [ :i | col at: i put: (aCollection at: i)].
	elements := ROCellMatrix 
					rows: rows
					columns: columns 
					contents: col.
	self computeColumnWidths.
	self computeRowHeights.
!

extent

	^ self width @ self height
!

height

	^ self rowHeightAt: self row
!

number
	^ number
!

number: anObject
	number := anObject
!

row

	^((number - 1) quo: columns) + 1
!

rowHeightAt: index
	"private"

	^ rowHeights at: index
!

width

	^ self columnWidthAt: self column
! !

!ROCell class methodsFor: 'instance creation'!

elements: aCollection columns: anInteger 
	
	^ self new columns: anInteger; elements: aCollection; yourself
! !

ROObject subclass: #ROCellMatrix
	instanceVariableNames: 'nrows ncols contents'
	package: 'ARoassal-Layout'!

!ROCellMatrix methodsFor: 'accessing'!

columnCount
	^ ncols
!

rowCount
	^ nrows
! !

!ROCellMatrix methodsFor: 'accessing rows/columns'!

atColumn: column
	| p |
	p := (self indexForRow: 1 andColumn: column) - ncols.
	^ (1 to: nrows) collect: [ :row | contents at: (p := p+ncols) ]
!

atRow: row
	(row between: 1 and: nrows)
		ifFalse: [ self error: '1st subscript out of range' ].
	^ contents copyFrom: (row - 1) * ncols + 1 to: row * ncols
! !

!ROCellMatrix methodsFor: 'private'!

indexForRow: row andColumn: column
	(row between: 1 and: nrows)
		ifFalse: [self error: '1st subscript out of range'].
	(column between: 1 and: ncols)
		ifFalse: [self error: '2nd subscript out of range'].
	^ (row - 1) * ncols + column
!

rows: rows columns: columns contents: anArray
	(((rows isInteger and: [rows >= 0]) and: 
		[columns isInteger and: [columns >= 0]]) and:
			[ rows * columns = anArray size ]) ifFalse: [ self error: 'Wrong parameters' ].
	nrows := rows.
	ncols := columns.
	contents := anArray
! !

!ROCellMatrix class methodsFor: 'as yet unclassified'!

rows: rows columns: columns contents: contents
	^self new rows: rows columns: columns contents: contents
! !

Object subclass: #ROLayout
	instanceVariableNames: 'translator affectedNodes'
	package: 'ARoassal-Layout'!

!ROLayout class methodsFor: 'not yet classified'!

on: aCollection
	self new applyOn: aCollection.
	^ aCollection
! !

ROLayout subclass: #ROAbstractGridLayout
	instanceVariableNames: 'gapSize lineItemsCountBlock'
	package: 'ARoassal-Layout'!

!ROAbstractGridLayout methodsFor: 'accessing'!

defaultLineItemsCount
	
	^ [ :elements | 
			| height width |
			(elements size < 3 
				ifTrue: [ (elements size max: 1) @ 1 ]
				ifFalse: 
					[ height := (elements size * 0.618034) sqrt ceiling truncated.
					width := (elements size / height) ceiling truncated.
					width @ height ]) x ]
!

gapSize
	
	^gapSize
!

gapSize: anInteger
	gapSize := anInteger
!

lineItemsCount: aBlock
	
	lineItemsCountBlock := aBlock
!

lineItemsCountBlock
	
	^ lineItemsCountBlock
! !

!ROAbstractGridLayout methodsFor: 'initialize-release'!

defaultGapSize
	^ 5
!

initialize
	super initialize.
	gapSize := self defaultGapSize.
	lineItemsCountBlock := self defaultLineItemsCount.
! !

!ROAbstractGridLayout class methodsFor: 'instance creation'!

withGap: anInteger 

	^ self new 
			gapSize: anInteger; 
			yourself
!

withGap: anInteger withLineItemsCount: aBlock
	
	^self new
		gapSize: anInteger;
		lineItemsCount: aBlock;
		yourself
!

withLineItemsCount: aBlock
	
	^self new
		lineItemsCount: aBlock;
		yourself
! !

!ROAbstractGridLayout class methodsFor: 'public'!

isAbstract
	^ self name =  #ROAbstractGridLayout
!

on: aCollectionOfElements withGap: anInteger withLineItemsCount: aBlock
	"place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally"
	
	| myLayout |
	myLayout := self new gapSize: anInteger;  lineItemsCount: aBlock; yourself.
	myLayout applyOn: aCollectionOfElements.
	^ aCollectionOfElements
!

on: aCollectionOfElements withLineItemsCount: aBlock
	"place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally

	For example:
	self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: 5
	=> place the 20 elements on a grid 5 x 4
	
	self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: [ :elements | elements size // 3 ]
	=> place the 20 elements on a grid 3 x 7
	"
	
	
	| myLayout |
	myLayout := self new lineItemsCount: aBlock; yourself.
	myLayout applyOn: aCollectionOfElements.
	^ aCollectionOfElements
! !

ROAbstractGridLayout subclass: #ROCellLayout
	instanceVariableNames: 'inCellPosition'
	package: 'ARoassal-Layout'!
!ROCellLayout commentStamp!
A ROCellLayout is like ROGridLayout. Elements of each column are centered along the same vertical line. And elements of each row are centered along the same horizontal line.

Instance Variables
	inCellPosition:		<Object | Block>

inCellPosition
	- Object which computes position of each element inside a cell. The cell is the space allocated for an element. Its height is maximum of heights of elements on the row. Its width is maximum of widths of elements on the column. By default elements are in the middle of their cell.!

!ROCellLayout methodsFor: 'accessing'!

inCellPosition: anObjectOrOneArgBlock

	inCellPosition := anObjectOrOneArgBlock
!

leftCentred

	self inCellPosition: [ :cell | 0 @ ((cell extent y - cell element height) / 2) ]
! !

!ROCellLayout methodsFor: 'hook'!

doExecute: elements 
	| pointer lineItemCount lineItemSize cell |
	lineItemSize := self lineItemsCountBlock roValue: elements.
	cell := ROCell elements: elements columns: lineItemSize.
	pointer := self gapSize @ self gapSize.
	lineItemCount := 0.
	elements withIndexDo: 
		[ :element :index | | inCellPointer |
		cell element: element; number: index.
		inCellPointer := inCellPosition roValue: cell.
		translator translate: element to: pointer + inCellPointer.
		pointer := (pointer x + cell extent x + (self gapSize * 2)) @ pointer y.
		lineItemCount := lineItemCount + 1.
		lineItemCount >= lineItemSize ifTrue: 
			[ pointer := self gapSize @ (pointer y + (self gapSize * 2) + cell extent y).
			lineItemCount := 0 ].
		self step ]
! !

!ROCellLayout methodsFor: 'initialize-release'!

initialize

	super initialize.
	inCellPosition :=  [ :cell |
		((cell extent x - cell element width) / 2) @ ((cell extent y - cell element height) / 2)]
! !

ROAbstractGridLayout subclass: #ROGridLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!
!ROGridLayout commentStamp!
A ROGridLayout places elements as a grid.

Instance Variables
	gapSize:		<SmallInteger>
	lineItemsCountBlock:		<BlockContext>

gapSize
	- number of pixels between each elements, horizontally and vertically

lineItemsCountBlock
	- tells the amount of item per line should be used!

!ROGridLayout methodsFor: 'hook'!

doExecute: elements
	| pointer lineItemCount lineItemSize maxLastLineHeight originalGapLeft originalGapTop parent oldParentStrategy |
	originalGapLeft := self paddingLeftFor: elements.
	originalGapTop := self paddingTopFor: elements.
	
	pointer := originalGapLeft @ originalGapTop.
	lineItemSize := self lineItemsCountBlock roValue: elements.
	lineItemCount := 0.
	maxLastLineHeight := 0.

	"We are here assuming all the elements have the same parent"
	parent := elements anyOne parent.
	parent isView ifFalse:
		[oldParentStrategy := elements anyOne parent resizeStrategy.
		parent resizeStrategy: (ROPermissiveParent new padding: oldParentStrategy padding)].

	elements
		do: [ :element | 
			translator translate: element to: pointer.
			pointer := (pointer x + element width + (self gapSize * 2)) @ pointer y.
			lineItemCount := lineItemCount + 1.
			maxLastLineHeight := maxLastLineHeight max: element height.
			lineItemCount >= lineItemSize
				ifTrue: [ 
					pointer := originalGapLeft @ (pointer y + (self gapSize * 2) + maxLastLineHeight).
					
					maxLastLineHeight := 0.
					lineItemCount := 0 ].
			self step ].
		
	"We set the old strategy and adjust the size of the parent"
	parent isView ifFalse:
		[parent resizeStrategy: oldParentStrategy.
		parent adjustSizeIfNecessary].
! !

ROLayout subclass: #ROAbstractLineLayout
	instanceVariableNames: 'gapSize horizontalGap verticalGap horizontalOutGap verticalOutGap alignment horizontallyStretchable verticallyStretchable'
	package: 'ARoassal-Layout'!

!ROAbstractLineLayout methodsFor: 'not yet classified'!

alignLeft
	
	alignment := #left
!

alignTop
	
	alignment := #top
!

alignment
	
	^alignment
!

alignment: anObject
	
	alignment := anObject
!

doExecute: elements 
	| pointer delta |
	horizontallyStretchable ifTrue: 
		[ self doStretchHorizontal: elements ].
	verticallyStretchable ifTrue: 
		[ self doStretchVertical: elements ].
	pointer := self positionOriginalPointer: elements.
	elements do: 
		[ :element |
		delta := self deltaFor: element.
		translator translate: element to: pointer - delta.
		pointer := self 
					movePointer: pointer
					accordingToFigure: element.
		self step ].
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

verticalGap
	
	^verticalGap
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

ROAbstractLineLayout subclass: #ROVerticalLineLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!
!ROVerticalLineLayout commentStamp!
A ROVerticalLineLayout locates all the elements vertically!

!ROVerticalLineLayout methodsFor: 'hook'!

deltaFor: aNodeFigure
	
	| delta |
	delta := 0.
	self alignment == #right ifTrue: [delta := aNodeFigure width].
	self alignment == #center ifTrue: [delta := aNodeFigure width / 2.0].
	^delta @ 0
!

doCenter: aGraph 

 	| midWidest step |
	midWidest := aGraph nodes 
		inject: 0
		into: [ :m :el | m max: (el bounds width )].
	midWidest := midWidest / 2.
	aGraph nodes do: [ :node | 
		step := (midWidest - (node bounds width /2)) asInteger @ 0.
		node bounds origin: (node bounds origin + step).
		node bounds corner: (node bounds corner + step).
	]
!

doStretchHorizontal: aCollectionOfElements 
	
 	| parent parentBounds |
	aCollectionOfElements isNil ifTrue: [ ^ self "nothing to do" ].
	parent := aCollectionOfElements anyOne parent.
	parent isView ifTrue: [ ^ self "ROView does not have bounds" ].
	parentBounds := parent bounds.

	aCollectionOfElements do: [ :element | 
		element width: parentBounds width ]
!

doStretchVertical: aCollectionOfElements 

 	| parent parentBounds addedHeight parentBoundsHeight runningIndex newHeight |

	aCollectionOfElements isEmpty ifTrue: [ ^ self "nothing to do" ].
	parent := aCollectionOfElements anyOne parent.
	parent isView ifTrue: [ ^ self "ROView does not have bounds" ].
	parentBounds := parent bounds.

	addedHeight := aCollectionOfElements 
		inject: 0
		into: [ :m :el | m + el height ].

	parentBoundsHeight := parentBounds height.
	"parentBoundsHeight := parentBoundsHeight - ((aCollectionOfElements size - 1) * verticalGap) - (2 * verticalOutGap)."
	
	runningIndex := 0.
	parentBounds height > addedHeight
		ifTrue: [ aCollectionOfElements do: [ :element | 
						newHeight := (element height * parentBoundsHeight / addedHeight) asInteger.
						element height: newHeight.
						runningIndex := runningIndex + newHeight + verticalGap ] ]
!

movePointer: pointer accordingToFigure: aNodeFigure
	
	^ pointer setX: pointer x setY: pointer y + aNodeFigure height + self verticalGap
!

positionOriginalPointer: elements 
	| maxWidth delta |
	delta := 0.
	self alignment == #right ifTrue: 
		[ maxWidth := elements maxValue: #width.
		delta := maxWidth ].
	self alignment == #center ifTrue: 
		[ maxWidth := elements maxValue: #width.
		delta := maxWidth / 2.0 ].
	^ (self horizontalOutGap + delta) @ self verticalOutGap
! !

!ROVerticalLineLayout methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	self alignLeft
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
"	self assert: [ (elements collect: #view) asSet size = 1 ]."
	
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

	| g sl sr s indeg outdeg degrees vertex gcopy |
	g := aCollection copy.
	sl := OrderedCollection new.
	sr := OrderedCollection new. "While g contains a sink (aka leaf)"

" - - - " 
gcopy := g copy.
" - - - " 
gcopy "g copy"
do:
[:node |	
(self childrenFor: node) isEmpty
ifTrue:
[sr addFirst: node.	
g remove: node]	].	"While g contains a source (aka root)"
" - - - " 
gcopy := nil.
gcopy := g copy.	
" - - - " 
gcopy "g copy"
do:
[:node | 
(self parentsFor: node) isEmpty
ifTrue:
[sl addLast: node.
g remove: node]	].	"Calculate deg for all remaining vertices"
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
(s indexOf: edge from) > (s indexOf: edge to)
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
	
	cachedChildren ifNil: [cachedChildren := Dictionary new: 1000].
	^cachedChildren
!

cachedParents
	
	cachedParents ifNil: [cachedParents := Dictionary new: 1000].
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
	
	^3
!

verticalGap
	
	^20
! !

!ROAbstractGraphLayout class methodsFor: 'public'!

on: elements edges: edges
	"Do the layout of the elements tacking into account the provided edges"

	^ self new 
		userDefinedEdges: edges;
		applyOn: elements.
! !

ROAbstractGraphLayout subclass: #ROAbstractCompactTree
	instanceVariableNames: 'sonsDictionary root initialLayout margin'
	package: 'ARoassal-Layout'!

!ROAbstractCompactTree methodsFor: 'algorithm'!

compareContourOf: aNode with: another
	"return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode"

	| difference max nodeA nodeB |
	nodeB := aNode.	"the right one"
	nodeA := another.	"the left one"
	max := aNode = another
		ifTrue: [ 0 ]
		ifFalse: [ horizontalGap / 2 - (nodeB x - (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)) ].
	nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.
	nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1.
	[ nodeB isNil not & nodeA isNil not ]
		whileTrue: [ 
			difference := horizontalGap
				-
					((self getAbcissaOf: nodeB inSubtreeFromLayer: aNode layer - 1)
						- (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)).
			max := max max: difference.
			nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.
			nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1 ].
	^ max
!

computePosition: aNode
"compute the position of the given node and of his sons recursively"

	| children neighbor nodeA |
	
	children := self childrenFor: aNode.
	neighbor := self leftSiblingOf: aNode.
	
	children isEmpty ifTrue: [ neighbor isNil ifTrue: [ aNode x: 0; mod: 0.]  
											 ifFalse: [ aNode x: (neighbor x + (horizontalGap /2)); mod: (neighbor mod);
													  pointer: (self followRightContour: neighbor toLayer: (aNode layer + 1)) ] ]
					 
					 ifFalse: [aNode leftContour: children first;
									rightContour: children last.
							  children do: [:e | self computePosition: e ].
							      aNode x: (aNode leftContour x + aNode rightContour x + aNode rightContour mod ) /2;
										mod: 0. 
								neighbor isNil ifFalse: [ aNode mod: (self compareContourOf: aNode with: neighbor).
									
													  nodeA := (self followLeftContour: (aNode father) toLayer: (aNode layer)).
													  [(self followLeftContour: nodeA toLayer: (nodeA layer + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: (nodeA layer + 1) ].
													 nodeA pointer: (self followLeftContour: aNode toLayer: (nodeA layer + 1)).
													
													 nodeA := self followRightContour: aNode toLayer: (aNode layer + 1).
													 [(self followRightContour: nodeA toLayer: (nodeA layer +1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: (nodeA layer +1) ].
													nodeA pointer: (self followRightContour: neighbor toLayer: (nodeA layer +1) ) ] ]
!

followLeftContour: aNode toLayer: anInteger
	"return the last node in the left contour begining at anode"
	
	(aNode layer = anInteger ) ifTrue: [^ aNode  ].
	(aNode layer > anInteger ) ifTrue: [^ nil  ].
	
	aNode leftContour isNil ifTrue: [ aNode pointer isNil ifTrue: [ ^ nil ] 
														 ifFalse: [ ^ ( self followLeftContour: aNode pointer toLayer: anInteger ) ] ]
	
			  				ifFalse: [ ^ (self followLeftContour: aNode leftContour toLayer: anInteger ) ]
!

followRightContour: aNode toLayer: anInteger
	"return the node in the right contour begining at anode in layer anInteger"

	(aNode layer = anInteger ) ifTrue: [^ aNode  ].
	(aNode layer > anInteger ) ifTrue: [^ nil  ].

	aNode rightContour isNil ifTrue: [ aNode pointer isNil ifTrue: [ ^ nil ] 
														 ifFalse: [ ^ ( self followRightContour: aNode pointer toLayer: anInteger ) ] ]
	
			  				ifFalse: [ ^ (self followRightContour: aNode rightContour toLayer: anInteger ) ]
!

getAbcissaOf: aNode inSubtreeFromLayer: anInteger

	| node x |
	
	(anInteger < 0) ifTrue: [^ self getAbcissaOf: aNode inSubtreeFromLayer: 0 ].
	
	(aNode layer = anInteger ) ifTrue: [ ^ aNode x ].
	(aNode layer < anInteger ) ifTrue: [ ^ nil ].
	
	x := aNode x + aNode mod.
	
	node := aNode father.
	
	[node layer = anInteger  ] whileFalse: [ x := x + node mod.
									node := node father].
								
	^ x
!

leftSiblingOf: aNode
"return the left sibling of the given node "

	| children |

	aNode father isNil ifTrue: ["has no sibling" ^ nil]
					    ifFalse: [ children := self childrenFor: aNode father.
								(children first) = aNode ifTrue: ["as no left sibling" ^ nil ]
																    ifFalse: [^ children at: ((children indexOf: aNode)-1) ] ]
!

nodeAbcissaWithNeighbor: aNode

	self subclassResponsibility
! !

!ROAbstractCompactTree methodsFor: 'hook'!

coordinate: aNode withMod: aFloat
	self subclassResponsibility
!

doExecute: nodeElements 
	| rootNodes |
	
	initialLayout isNil  ifFalse: [ initialLayout new executeOnElements: nodeElements. ].
	
	rootNodes := self rootNodesFor: nodeElements.

"	root isNil ifTrue: [ rootNodes := self rootNodesFor: nodeElements. ]
			 ifFalse: [ rootNodes := Array with: root.
						self coveringTreeFor: nodeElements from: root ].
"	
	rootNodes do: [:e | self initialize: e whoseFatherIs: nil ];
		do: [:e | self computePosition:e].
	
	rootNodes  do: [:e |
					self draw:e withMod: 0  ]
!

draw: aNode withMod: aFloat
	self subclassResponsibility
! !

!ROAbstractCompactTree methodsFor: 'initialize-release'!

greedyCycleRemoval: aGraph
!

initialLayout: aLayout

	initialLayout := aLayout
!

initialize 

	super initialize.
	verticalGap := 20.
	horizontalGap := 30.
	margin := 40. 
	sonsDictionary := Dictionary new
!

initialize: aNode whoseFatherIs: another 

	aNode father: another.
	
	another isNil ifTrue: [ aNode layer: 0 ] ifFalse: [ aNode layer: another layer + 1 ] .
	
	( self childrenFor: aNode ) do: [ :e | self initialize: e whoseFatherIs: aNode ]
!

root: aNode 

	root := aNode
! !

!ROAbstractCompactTree methodsFor: 'private'!

childrenFor: aNode 

	sonsDictionary isEmpty ifTrue: [ ^ super childrenFor: aNode ] 
							ifFalse: [ ^sonsDictionary at: aNode ifAbsent: [ ^ OrderedCollection new ] ]
! !

!ROAbstractCompactTree class methodsFor: 'testing'!

horizontalGap: anInt

	| new |
	
	new := self new.
	new horizontalGap: anInt.
	
	^ new
!

horizontalGap: anInt verticalGap: another

	| new |
	
	new := self new.
	new horizontalGap: anInt.
	new verticalGap: another.
	
	
	^ new
!

isAbstract
	^ self name = #ROAbstractCompactTree
!

verticalGap: anInt

	| new |
	
	new := self new.
	new verticalGap: anInt.
	
	^ new
! !

ROAbstractCompactTree subclass: #RORadialTreeLayout
	instanceVariableNames: ''
	package: 'ARoassal-Layout'!

!RORadialTreeLayout methodsFor: 'algorithm'!

compareContourOf: aNode with: another
	"return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode"

	| difference max nodeA nodeB |
	nodeB := aNode.	"the right one"
	nodeA := another.	"the left one"
	max := aNode = another
		ifTrue: [ 0 ]
		ifFalse: [ horizontalGap / nodeB layer / 2 - (nodeB x - (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)) ].
	nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.
	nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1.
	[ nodeB isNil not & nodeA isNil not ]
		whileTrue: [ 
			difference := horizontalGap / nodeA layer
				-
					((self getAbcissaOf: nodeB inSubtreeFromLayer: aNode layer - 1)
						- (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)).
			max := max max: difference.
			nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.
			nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1 ].
	^ max
!

computePosition: aNode
"compute the position of the given node and of his sons recursively"

	| children neighbor nodeA |
	
	children :=self childrenFor: aNode.
	neighbor := self leftSiblingOf: aNode.
	
	children isEmpty ifTrue: [ neighbor isNil ifTrue: [ aNode x: 0; mod: 0. ]  
											 ifFalse: [ aNode x: (neighbor x + (horizontalGap /aNode layer /2)); mod: (neighbor mod);
													  pointer: (self followRightContour: neighbor toLayer: (aNode layer + 1)) ] ]
					 
					 ifFalse: [aNode leftContour: children first;
									rightContour: children last.
							  children do: [:e | self computePosition: e ].
							      aNode x: (aNode leftContour x + aNode rightContour x + aNode rightContour mod ) /2;
										mod: 0. 
								neighbor isNil ifFalse: [ aNode mod: (self compareContourOf: aNode with: neighbor).
									
													  nodeA := (self followLeftContour: (aNode father) toLayer: (aNode layer)).
													  [(self followLeftContour: nodeA toLayer: (nodeA layer + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: (nodeA layer + 1) ].
													 nodeA pointer: (self followLeftContour: aNode toLayer: (nodeA layer + 1)).
													
													 nodeA := self followRightContour: aNode toLayer: (aNode layer + 1).
													 [(self followRightContour: nodeA toLayer: (nodeA layer +1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: (nodeA layer +1) ].
													nodeA pointer: (self followRightContour: neighbor toLayer: (nodeA layer +1) ) ] ].
!

diameterOf: aNode

	|diam|
	
	(aNode shapes first isKindOf: ROEllipse) ifTrue: [ diam := aNode width max: aNode height ]
										ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].
	
	^ diam
!

halfDiameterOf: aNode

	|diam|
	
	(aNode shapes first isKindOf: ROEllipse) ifTrue: [ diam := aNode width max: aNode height ]
										ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].
	
	^ diam / 2
!

nodeAbcissaWithNeighbor: aNode

	^ aNode x + (horizontalGap / aNode layer /2) + ((self halfDiameterOf: aNode) / aNode layer)
!

radialDraw: aNode
	"draw the subtree induced by the given node"

	| children |
	aNode translateTo: (Point radius: (aNode r) theta: (aNode theta) ).
	children := self childrenFor: aNode.
	children do: [ :e | self radialDraw: e ]
!

toRadialTree: aNode withMod: aFloat
	"compute polar coordinates of the subtree induced by anode from its cartesian coordinates "
	| children |
	aNode r: (aNode layer * verticalGap ).
	(aNode r = 0) ifTrue: [ aNode theta: 0 ] 
					ifFalse: [aNode theta: (aNode x + aFloat + aNode mod) / verticalGap ].
	
	children := self childrenFor: aNode.
	
	children do: [ :e | self toRadialTree: e withMod: ( aNode mod + aFloat) ]
! !

!RORadialTreeLayout methodsFor: 'hook'!

computeGap: aNode
	" compute the vertical gap needed for drawing the radial tree "
	| gap maxAbcissa i abc nodeL nodeR layer |	
	gap := 0.
	maxAbcissa := 0.
	layer := 1.
	
	i := 1.
	[ nodeL :=(self followLeftContour: aNode toLayer: i).
	nodeR := (self followRightContour: aNode toLayer: i).
	nodeL isNil not & nodeR isNil not ] whileTrue: [ abc := (((self getAbcissaOf: nodeR inSubtreeFromLayer: 0) - (self getAbcissaOf: nodeL inSubtreeFromLayer: 0 ) + (horizontalGap / layer/2)) / layer).
																	(abc > maxAbcissa) ifTrue: [ maxAbcissa := abc. 
																								layer := layer ].
																	i := i + 1 ].

	
	gap:= (maxAbcissa / 2 /Float pi ) floor +1.
	
	((verticalGap isNil) or: [gap > verticalGap])  ifTrue: [ self verticalGap: gap ]
!

doExecute: nodeElements
	| rootNodes |
	initialLayout isNil
		ifFalse: [ initialLayout new executeOnElements: nodeElements ].
		
	rootNodes := self rootNodesFor: nodeElements.

"	root isNil
		ifTrue: [ rootNodes := self rootNodesFor: nodeElements ]
		ifFalse: [ 
			rootNodes := Array with: root.
			self coveringTreeFor: nodeElements from: root ].
"	rootNodes
		do: [ :e | self initialize: e whoseFatherIs: nil ];
		do: [ :e | self computePosition: e. self step ];
		do: [ :e | self computeGap: e ];
		do: [ :e | self toRadialTree: e withMod: 0 ].
	rootNodes
		do: [ :e | 
			self radialDraw: e ]
!

rotateSubtreeFrom: aNode by: aFloat
	
	aNode theta: aNode theta + aFloat.
	
	(self childrenFor: aNode) do: [ :e | self rotateSubtreeFrom: e by: aFloat ]
!

spreadNodes: nodeElements around: aNode

	|nodeL nodeR i angle beta lay1 |
	
	i := 1.
	angle := 0.
	
	[ nodeL :=(self followLeftContour: aNode toLayer: i).
	nodeR := (self followRightContour: aNode toLayer: i).
	nodeL isNil not & nodeR isNil not ] whileTrue: [ angle := angle max: ((nodeR theta - nodeL theta) + ((self halfDiameterOf: nodeR) + (self halfDiameterOf: nodeL) + horizontalGap  /i /verticalGap )).
													i := i+1. ].

	lay1 := nodeElements select: [ :e | e layer = 1 ].

	beta := Float pi * 2 - angle / lay1 size.
	
	lay1 do: [ :e | self rotateSubtreeFrom: e by: (lay1 indexOf: e) - 1 * beta ].
! !

!RORadialTreeLayout methodsFor: 'private'!

gap
	
	^ self verticalGap
!

layoutLayer: aCollection radius: oldRadius from: aFromAngle to: aToAngle
	
	| delta childRadius maximumRadius myRadius fromAngle toAngle |
	"Initialize with default value"
	maximumRadius := oldRadius.
	aCollection isEmpty
		ifFalse:
			[myRadius := oldRadius + self gap + (self maximumRadius: aCollection).
			childRadius := oldRadius + self gap + (self maximumDiameter: aCollection).	"This is a purely optical tweak"
			(aCollection size = 1 and: [aToAngle - aFromAngle = (2 * Float pi)])
				ifTrue:
					[delta := 0.4 * Float pi.
					fromAngle := 0.8 * Float pi.
					toAngle := fromAngle + delta]
				ifFalse:
					[delta := (aToAngle - aFromAngle) / aCollection size.
					fromAngle := aFromAngle.
					toAngle := aFromAngle + delta].
			aCollection
				do:
					[:child | 
					child
						translateTo:
							(Point
								radius: myRadius
								theta: toAngle - (delta / 2.0)).
					maximumRadius := maximumRadius
						max:
							(self
								layoutLayer: (self childrenFor: child)
								radius: childRadius
								from: fromAngle
								to: toAngle).
					fromAngle := toAngle.
					toAngle := toAngle + delta]].
	^maximumRadius
!

maximumDiameter: aCollection
	
	^aCollection
		inject: 0
		into: [:max :node | max max: (node radius * 2) ]
!

maximumRadius: aCollection
	
	^aCollection
		inject: 0
		into: [:max :node | max max: node radius]
!

shiftTree: aNode by: aPoint
	
	aNode translateBy: aPoint.
	(self childrenFor: aNode) do: [:child | self shiftTree: child by: aPoint]
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
		"self step" ].
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

