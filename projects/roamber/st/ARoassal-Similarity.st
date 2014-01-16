Smalltalk current createPackage: 'ARoassal-Similarity'!
Object subclass: #Comparison
	instanceVariableNames: 'lhs rhs similarity'
	package: 'ARoassal-Similarity'!
!Comparison commentStamp!
A Comparison bundles two entities to be compared in a SimilarityMatrix.!

!Comparison methodsFor: 'accessing'!

lhs
	^ lhs
!

rhs
	^ rhs
!

similarity
	^ similarity
! !

!Comparison methodsFor: 'initialize-release'!

of: anObject with: anotherObject by: similarityBlock
	"similarityBlock should take two arguments and return a float in the range [0,1]"
	lhs := anObject.
	rhs := anotherObject.
	similarity := similarityBlock value: lhs value: rhs.
	self
		assert: ((0 <= similarity) & (similarity <= 1))
		descriptionBlock: ['Expected similarity in range [0,1], got ', similarity printString]
! !

!Comparison class methodsFor: 'as yet unclassified'!

of: anObject with: anotherObject by: similarityBlock
	^ self new of: anObject with: anotherObject by: similarityBlock
! !

Object subclass: #SimilarityMatrix
	instanceVariableNames: 'elements pairs action'
	package: 'ARoassal-Similarity'!
!SimilarityMatrix commentStamp!
A TSOverview is a visualization of similarity between test methods as measured by TestSurgeon.

	TSOverview demo!

!SimilarityMatrix methodsFor: 'as yet unclassified'!

printOn: aStream
	"why can't I delete this method?"
	super printOn: aStream
! !

!SimilarityMatrix methodsFor: 'defaults'!

defaultExtent
	^ 10@10
! !

!SimilarityMatrix methodsFor: 'initialize-release'!

on: aCollection by: similarity
	^ self on: aCollection by: similarity withAction: nil
!

on: aCollection by: similarity withAction: aCallBack
	"initialize model"
	elements := aCollection.
	pairs := OrderedCollection new.
	action := aCallBack.
	elements
		do: [ : lhs |
			elements do: [ : rhs | | pair |
				pair := (Comparison of: lhs with: rhs by: similarity).
				pairs add: pair ] ]
		displayingProgress: 'comparing elements ...'.
! !

!SimilarityMatrix methodsFor: 'interactions'!

action: aComparison
	action
		ifNotNil: [ action value: aComparison lhs value: aComparison rhs ]
!

popupTextFor: elt
	^ elt model lhs printString, String lf,
		elt model rhs printString, String lf,
		'similarity = ', elt model similarity printString
! !

!SimilarityMatrix methodsFor: 'visualization'!

colorForElement: elt
	^ Color gray: (1 - elt model similarity)
!

elementOn: pair forView: view
	| elt |
	elt := (ROElement on: pair ).
	elt + (ROBox new
		color: (self colorForElement: elt);
		extent: self defaultExtent
	).
	elt @ (ROPopup new
			text: [self popupTextFor: elt]).
	elt on: ROMouseClick do: [:event | self action: pair ].
	elt forward: ROMouseDragging.
	^ elt
!

elementOn: pair forView: view andStack: stack
	| elt |
	elt := (ROElement on: pair ).
	elt + (ROBox new
		color: (self colorForElement: elt);
		extent: self defaultExtent
	).
	elt @ (ROPopup new
			text: [self popupTextFor: elt];
			receivingView: stack
			).
	elt on: ROMouseClick do: [:event | self action: pair ].
	elt forward: ROMouseDragging.
	^ elt
!

gridSize
	^ elements size
!

viewMatrix
	"display the matrix view"
	| view zoomIn zoomOut |
	"stack := ROViewStack new."
	
	view := ROView new.
	view addAll:
		(pairs collect: [ : pair |
			self
				elementOn: pair 
				forView: view
				"andStack: stack" ]).
	ROGridLayout new 
		gapSize: 0;
		lineItemsCount: self gridSize;
		on: view elements.
	"view @ RODraggable."

	"stack addView: view."
	
	"zoomIn := self zoomInButtonOn: view.
	zoomOut := self zoomOutButtonOn: view.
	stack addAll: { zoomIn . zoomOut }.
	ROHorizontalLineLayout on: { zoomIn . zoomOut }.
	view @ (ROMiniMap new targetView: stack).
	stack open."
	
	view open.
!

zoomInButtonOn: view
	| zoomInButton |
	zoomInButton := (ROElement on: 'Zoom +') + ROLabel + ROBorder.
	zoomInButton @ ROLightlyHighlightable.
	zoomInButton on: ROMouseClick do: [ :event | ROZoomInMove new on: view ].
	^ zoomInButton
!

zoomOutButtonOn: view
	| zoomOutButton |
	zoomOutButton := (ROElement on: 'Zoom -') + ROLabel + ROBorder.
	zoomOutButton @ ROLightlyHighlightable.
	zoomOutButton on: ROMouseClick do: [ :event | ROZoomOutMove new on: view ].
	^ zoomOutButton
! !

!SimilarityMatrix class methodsFor: 'not yet classified'!

demo1
	^ SimilarityMatrix new
		on: (1 to: 10)
		by: [ :a :b |
			(a + b) odd
				ifTrue: [ 1 ]
				ifFalse: [ 0 ]
			];
		viewMatrix
!

demo2
	"show which Collection subclasses have a similar number of methods"
	^ SimilarityMatrix new
		on: (Collection allSubclasses
			sort: [:a :b | a numberOfMethods < b numberOfMethods])
		by: [ :classA : classB | |a b|
			a := classA numberOfMethods.
			b := classB numberOfMethods.
			((a min: b) / ((b max: a) max: 1)) asFloat ]
		withAction: [:classA :classB |
			Browser openOn: classA.
			Browser openOn: classB ] ;
		viewMatrix
! !

