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
	instanceVariableNames: 'view models title legend body bodyElement left right labelLeft labelRight colorLeft colorRight edgeColor viewWidth distance direction popups popupElement heightLeft heightRight width lineShape edges shadowEdges'
	package: 'RelationalTowersBuilder'!
!RelationalTowersBuilder commentStamp!
A RelationalTowersBuilder is xxxxxxxxx.

Instance Variables
	body:		<Object>
	bodyElement:		<Object>
	colorLeft:		<Object>
	colorRight:		<Object>
	direction:		<Object>
	distance:		<Object>
	edgeColor:		<Object>
	edges:		<Object>
	heightLeft:		<Object>
	heightRight:		<Object>
	labelLeft:		<Object>
	labelRight:		<Object>
	left:		<Object>
	legend:		<Object>
	lineShape:		<Object>
	models:		<Object>
	popupElement:		<Object>
	popups:		<Object>
	right:		<Object>
	shadowEdges:		<Object>
	title:		<Object>
	view:		<Object>
	viewWidth:		<Object>
	width:		<Object>

body
	- xxxxx

bodyElement
	- xxxxx

colorLeft
	- xxxxx

colorRight
	- xxxxx

direction
	- xxxxx

distance
	- xxxxx

edgeColor
	- xxxxx

edges
	- xxxxx

heightLeft
	- xxxxx

heightRight
	- xxxxx

labelLeft
	- xxxxx

labelRight
	- xxxxx

left
	- xxxxx

legend
	- xxxxx

lineShape
	- xxxxx

models
	- xxxxx

popupElement
	- xxxxx

popups
	- xxxxx

right
	- xxxxx

shadowEdges
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

body
	^body
!

body: aText
	body := aText
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

edgeColor
	^edgeColor
!

edgeColor: aColor
	edgeColor := aColor
!

height: aBlock
	self heightLeft: aBlock.
	self heightRight: aBlock.
!

heightLeft
	^heightLeft
!

heightLeft: aBlock
	heightLeft := aBlock
!

heightRight
	^heightRight
!

heightRight: aBlock
	heightRight := aBlock
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

octopiEdges
	lineShape := true.
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
	self edgesToLeft: aBlock.
	self edgesToRight: anotherBlock.
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
	| at ce1 ce2 p1 p2 lines |
	lines := OrderedCollection new.
	anotherCollection = left
		ifTrue: [ at := RORightBorderAttachPoint instance ]
		ifFalse: [ at := ROLeftBorderAttachPoint instance ].
	aCollection
		do: [ :l | | ed |
			p2 := self controlPoint: aNode with: l.
			ce2 := self controlElement: p2.
			p1 := self controlPoint: l with: aNode.
			ce1 := self controlElement: p1.
			ed := (ROEdge from: aNode to: l) + (self splineLine: at	with: ce1 with: ce2	color: aColor).	
			lines add: ed.
			view add: ed ].
	self view signalUpdate.
	^lines
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

controlElement: p1
	| elem |
	elem := (ROBox new color: Color transparent) element translateTo: p1.
	"view add: elem."
	^elem
!

controlPoint: aNode with: anotherNode
	| p1 p2 |
	p1 := aNode absolutePosition.
	p2 := anotherNode absolutePosition.
	^(p1 x < p2 x)
		ifTrue: [ (p1 x + aNode width) @ (p2 y + (anotherNode height /2)) ]
		ifFalse: [ (p1 x + aNode width) @ (p2 y) ]
!

greyLinesfrom: aNode in: aCollection to: links
	aNode
		on: ROMouseEnter
		do: [ :event | 
			shadowEdges at: aNode	
				ifPresent: [ :v | v do: [ :e | e shape show"self view add: e"]. 
							self view signalUpdate]
				ifAbsent: [
					shadowEdges at: aNode put: 
					(self
						addLinesfrom: aNode
						toAll: links
						from: aCollection
						color: self class defaultLightEdgeColor)].
			bodyElement shape"s first" color: Color veryVeryLightGray ].
	aNode
		on: ROMouseLeave
		do: [ :event | |v|
			(shadowEdges at: aNode) do: [ :e | e shape hide"remove"].
			self view signalUpdate.
			v := (edges at: aNode ifAbsent: [{ROElement new}]).
			((v isEmpty not) and: [v first shape isHidden"isRendered"])
				"ifFalse:"ifTrue: [ bodyElement shape"s first" color: Color darkGray]].
!

killLinksFrom
	"self view
		on: ROMouseMove
		do: [ :event | 
			shadowEdges do: [ :e | e do: [:each | each remove] ].
			self view signalUpdate ]"
!

lines: aNode in: aCollection to: links
	aNode
		on: ROMouseClick
		do: [ :event | 
			edges at: aNode		
				ifPresent: [ :v |
					((v isEmpty not) and: [v first shape isHidden"isRendered"])
						"ifTrue:"ifFalse: [ v do: [ :e | e shape hide"remove"].
								self removePopup: aNode.
								bodyElement shape"s first" color: Color veryVeryLightGray]
						"ifFalse:"ifTrue: [ v do: [ :e | e shape show"self view add: e"]. 
								self addPopup: aNode from: aCollection.
								((shadowEdges at: aNode ifAbsent: [{ROElement new}]) first shape isHidden"isRendered")
									"ifFalse:"ifTrue: [ bodyElement shape"s first" color: Color darkGray]].
					self view signalUpdate]
				ifAbsent: [
					edges at: aNode put: 
					(self
						addLinesfrom: aNode
						toAll: links
						from: aCollection
						color: self edgeColor).
					self addPopup: aNode from: aCollection.
					bodyElement shape"s first" color: Color veryVeryLightGray]]
!

linesFrom: aCollection with: aBlock
	| otherCollection  |
	aCollection = left
		ifTrue: [ otherCollection := right ]
		ifFalse: [ otherCollection := left ].
	aCollection
		do: [ :n1 | 
			| links |
			links := self linksFrom: n1 with: aBlock to: otherCollection.
			self
				lines: n1
				in: aCollection
				to: links.
			self
				greyLinesfrom: n1
				in: aCollection
				to: links ].
	self killLinksFrom
!

linesTo: aCollection with: aBlock
	| otherCollection |
	aCollection = left
		ifTrue: [ otherCollection := right ]
		ifFalse: [ otherCollection := left ].
	aCollection
		do: [ :n1 | 
			| links |
			links := self linksTo: n1 with: aBlock to: otherCollection.
			self
				lines: n1
				in: aCollection
				to: links.
			self
				greyLinesfrom: n1
				in: aCollection
				to: links ].
	self killLinksFrom
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
	links := links collect: [ :l | l first].
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

splineLine: attachpoint with: controlPoint1 with: controlPoint2 color: aColor
	| line |
	line := ROBSplineLine new attachPoint: attachpoint; color: aColor.
	lineShape 
		ifTrue: [  
			line addControlElement: controlPoint2;
			addControlElement: controlPoint1]
		ifFalse:[
			line addControlElement: controlPoint1;
			addControlElement: controlPoint2].
	^line
! !

!RelationalTowersBuilder methodsFor: 'examples'!

example1
	"
	self new example1
	"
	|a |
	a := RelationalTowersBuilder new.
	a left: { 'a' . 'b' . 'c' }.
	a body: 'a b c a b c'.
	a edgesTo: #yourself.
	a open.
!

example10
	"
	self new example10
	"
	|builder maiden1 maiden2 |
	
	maiden1 := {{2013 . 46 . { 'United States' . 'Germany' . 'United Kingdom' . 'Brazil' . 'Spain' . 'Russia' . 'France' . 'Poland' . 'Sweden' . 'Austria' . 'Finland' . 'Argentina' . 'Switzerland' . 'Romania' . 'Paraguay' . 'Netherlands' . 'Turkey' . 'Chile' . 'Portugal' . 'Slovakia' . 'Czech Republic' . 'Belgium' . 'Croatia' . 'Italy' . 'Mexico' }}.
{2012 . 34 . { 'United States' . 'Canada' }} .
{2011 . 63 . { 'United Kingdom'	. 'Brazil' . 'Australia' . 'Germany' . 'France' . 'Russia' . 'Indonesia' . 'United States' . 'Mexico' . 'Colombia' . 'Netherlands' . 'Peru' . 'Poland' . 'Denmark' . 'Czech Republic' . 'Sweden' . 'Singapore' . 'Argentina' . 'Austria' . 'Belgium' . 'Chile' . 'Greece' . 'Norway' . 'Puerto Rico' . 'Turkey' . 'Finland' . 'South Korea'	. 'Switzerland' . 'Portugal' . 'Italy' . 'Spain' }} .
{2010 . 36 . { 'United States' . 'Canada' . 'Italy' . 'Ireland' . 'Belgium' . 'United Kingdom' . 'Spain' . 'Sweden' . 'Germany' . 'Finland' . 'Norway' . 'Hungary' .  'Romania' }} .
{2009 . 22 . { 'Brazil' . 'Mexico' . 'New Zealand' . 'Colombia' . 'Ecuador' . 'Serbia' . 'India' . 'Chile' . 'United Arab Emirates' . 'Peru' . 'Argentina' . 'United States' . 'Venezuela' . 'Costa Rica'}} .
{2008 . 68 . { 'United States' . 'Canada' . 'Australia' . 'Mexico' . 'Brazil' . 'Japan' . 'Sweden' . 'Norway' . 'France' . 'Finland' . 'Argentina' . 'Puerto Rico' . 'Czech Republic' . 'Chile' . 'Poland' . 'Hungary' . 'Portugal' . 'Costa Rica' . 'Romania' . 'Colombia' . 'Greece' . 'United Kingdom' . 'Croatia' . 'Denmark' . 'Netherlands' . 'Russia' . 'India' . 'Switzerland' . 'Germany' . 'Italy' . 'Belgium' . 'Spain' }} .
{2007 . 16 . { 'United Kingdom' . 'Germany' . 'Italy' . 'Slovenia' . 'Belgium' . 'India' . 'Greece' . 'United Arab Emirates' . 'Spain' . 'Serbia' . 'Netherlands' . 'Czech Republic' . 'Bulgaria' }} .
{2006 . 45 . { 'United Kingdom'	. 'United States' . 'Japan' . 'Sweden' . 'Finland' . 'Canada' . 'Norway' . 'Italy' . 'Denmark' . 'Germany' . 'Switzerland' . 'Ireland' . 'France' . 'Spain' . 'Netherlands' }} .
{2005 . 46 . { 'United States' . 'United Kingdom' . 'Germany' . 'Finland' . 'Norway' . 'Canada' . 'Portugal' . 'Belgium' . 'Czech Republic' . 'Switzerland' . 'Netherlands' . 'Greece' . 'Austria' . 'Sweden' . 'Poland' . 'Ireland' . 'Iceland' . 'Italy' . 'France' . 'Spain' }} .
{2004 . 14 . { 'United States' . 'Japan' . 'Brazil' . 'Canada' . 'Argentina' . 'Chile' }} .
{2003 . 90 . { 'United States' . 'Germany' . 'United Kingdom' . 'Spain' . 'France' . 'Sweden' . 'Italy' . 'Canada' . 'Belgium' . 'Czech Republic' . 'Denmark' . 'Switzerland' . 'Finland' . 'Hungary' . 'Netherlands' . 'Poland' . 'Norway' . 'Croatia' . 'Portugal' . 'Slovakia' . 'Austria' . 'Ireland'}} .
{2002 . 4 . { 'United Kingdom' }} . 
{2001 . 6 . { 'United Kingdom' . 'Argentina' . 'Brazil' . 'Mexico' . 'Chile' }} .
{2000 . 79 . { 'United States' . 'Japan' . 'United Kingdom' . 'Germany' . 'Canada' . 'Spain' . 'France' . 'Poland' . 'Czech Republic' . 'Switzerland' . 'Sweden' . 'Slovenia' . 'Portugal' . 'Norway' . 'Greece' . 'Belgium' . 'Netherlands' . 'Hungary' . 'Denmark' . 'Slovakia' . 'Finland' . 'Italy' . 'Austria' . 'Estonia' }} .
{1999 . 28 . { 'United States' . 'Canada' . 'Germany' . 'Spain' . 'Sweden' . 'Italy' . 'Netherlands' . 'Greece' . 'France' . 'Finland'}} .
{1998 . 87 .  {'United States' . 'Germany' . 'United Kingdom' . 'France' . 'Spain' . 'Italy' . 'Japan' . 'Brazil' . 'Canada' . 'Mexico' . 'Turkey' . 'Greece' . 'Argentina' . 'Hungary' . 'Poland' . 'Finland' . 'Czech Republic' . 'Portugal' . 'Malta' . 'Belgium' . 'Denmark' . 'Sweden' . 'Switzerland' . 'Netherlands' }} .
{1996 . 75 . {'United States' . 'France' . 'Japan' . 'Spain' . 'Italy' . 'Brazil' . 'Canada' . 'Argentina' . 'United Kingdom' . 'Greece' . 'Mexico' . 'Slovenia' . 'Denmark' . 'Netherlands' . 'Chile' . 'Ireland' . 'Colombia' . 'Finland' . 'Belgium' }} .
{1995 . 55 . {'Germany' . 'Italy' . 'United Kingdom' . 'Spain' . 'Israel' . 'South Africa' . 'Sweden' . 'Switzerland' . 'Greece' . 'Denmark' . 'Norway' . 'Romania' . 'Belgium' . 'Finland' . 'France' . 'Portugal' . 'Bulgaria' . 'Austria' . 'Poland' . 'Slovakia' . 'Netherlands' . 'Hungary' . 'Czech Republic'}} .
{1993  . 45 . {'Italy'  . 'United Kingdom' . 'Germany' . 'France' . 'Russia' . 'Spain' . 'Czech Republic' . 'Slovakia' . 'Sweden' . 'Netherlands' . 'Ireland' . 'Austria' . 'Switzerland' . 'Portugal' }} .
{1992  . 65 . {'United States' . 'Japan' . 'Canada' . 'Spain' . 'France' . 'Mexico' . 'Brazil' . 'Australia' . 'United Kingdom' . 'Venezuela' . 'Sweden' . 'Italy' . 'Germany' . 'Belgium' . 'Argentina' . 'Puerto Rico' . 'Finland' . 'Norway' . 'Denmark' . 'Switzerland' . 'Uruguay' . 'Iceland' . 'Netherlands' . 'New Zealand' }} .
{1991 . 50 . {'United States' . 'Canada' . 'Japan' . 'Switzerland' . 'Denmark' . 'France'}} .
{1990 . 56 . {'United Kingdom' . 'Germany' . 'Italy' . 'Spain' . 'Netherlands' . 'Belgium' . 'France' . 'Sweden' . 'Finland' . 'Ireland' . 'Portugal' . 'Norway' . 'Denmark' }} .
{1988 . 97 . {'United States' . 'United Kingdom' . 'Canada' . 'Germany' . 'Spain' . 'France' . 'Sweden' . 'Finland' . 'Portugal' . 'Italy' . 'Belgium' . 'Hungary' . 'Denmark' . 'Netherlands' . 'Austria'	. 'Switzerland' . 'Norway' . 'Greece' }} .
{1987  . 85 .  {'United States' . 'Canada' . 'Japan'}} .
{1986  . 66 .  {'United Kingdom' . 'Germany' . 'Poland' . 'France' . 'Italy' . 'Sweden' . 'Spain' . 'Austria' . 'Serbia' . 'Portugal' . 'Hungary' . 'Switzerland' . 'Croatia' . 'Slovenia' . 'Netherlands' . 'Norway' . 'Belgium' . 'Finland' }} .
{1985 . 104 .  {'United States' . 'Japan' . 'Australia' . 'Brazil' . 'United Kingdom' }} .
{1984 . 87 . {'United Kingdom' . 'Canada' . 'Germany' . 'United States' . 'France' . 'Poland' . 'Italy' . 'Spain' . 'Portugal' . 'Sweden' . 'Slovenia' . 'Switzerland' . 'Finland' . 'Hungary' . 'Belgium' . 'Netherlands' . 'Austria' . 'Denmark' . 'Serbia' }} .
{1983 . 137 .  {'United States' . 'United Kingdom' . 'Germany' . 'Canada' . 'France' . 'Spain' . 'Sweden' . 'Netherlands' . 'Denmark' . 'Belgium' . 'Finland' . 'Switzerland' . 'Norway' }} .
{1982  . 181 . {'United States' . 'United Kingdom' . 'France' . 'Canada' . 'Australia' . 'Japan' . 'Germany' . 'Spain' . 'Belgium' . 'Switzerland' . 'Netherlands' }} .
{1981  . 137 .  {'United States' . 'United Kingdom' . 'France' . 'Germany' . 'Italy' . 'Sweden' . 'Netherlands' . 'Japan' . 'Canada' . 'Denmark' . 'Belgium' . 'Serbia' . 'Switzerland' }} .
{1980  . 157 .	{'United Kingdom' . 'Germany' . 'Italy' . 'France' . 'Belgium' . 'Sweden' . 'Portugal' . 'Netherlands' . 'Finland' . 'Norway' . 'Switzerland' . 'Ireland' .	'Denmark' }} .
{ 1979 . 89 . { 'United Kingdom' }} .
{ 1978 . 4 . { 'United Kingdom' }} .
{ 1977 . 38 . { 'United Kingdom' }} .
{ 1976 . 34 . { 'United Kingdom' }}}.
	maiden2 := {'United States' -> 686 . 'United Kingdom' -> 538 . 'Germany' -> 154 . 'Canada' -> 111 . 'France' -> 109 . 'Japan' -> 70 . 'Italy' -> 70 . 'Spain' -> 68 . 'Sweden'	-> 39 . 'Australia' -> 32 . 'Brazil' -> 32 . 'Netherlands' -> 28 . 'Finland' -> 24 . 'Belgium' -> 24 . 'Poland' -> 23 . 'Switzerland' -> 22 . 'Denmark' -> 19 . 'Norway' -> 18 . 'Mexico' -> 17 . 'Portugal' -> 16 . 'Greece' -> 13 . 'Czech Republic' -> 11 . 'Austria' -> 11 . 'Hungary' -> 10 . 'Argentina' -> 10 . 'Ireland' -> 8 . 'Russia' -> 8 . 'Chile' -> 7 . 'Serbia' -> 5 . 'Slovenia' -> 5 . 'Slovakia' -> 5 . 'Croatia' -> 4 . 'Romania' -> 4 .'Colombia' -> 4 . 'Turkey' -> 4 . 'New Zealand' -> 3 . 'Venezuela' -> 3 . 'India' -> 3 . 'Israel' -> 3 . 'South Africa' -> 3 . 'Puerto Rico' -> 3. 'United Arab Emirates' -> 2 . 'Indonesia' -> 2 . 'Bulgaria'	-> 2 . 'Peru' -> 2 . 'Iceland' -> 2 . 'Costa Rica' -> 2 . 'South Korea' -> 1 . 'Uruguay' -> 1 . 'Ecuador' -> 1 . 'Estonia' -> 1 . 'Malta' -> 1 . 'Singapore' -> 1 . 'Paraguay' -> 1}.
	
	builder := RelationalTowersBuilder new.
	builder title: 'Iron Maiden'.
	builder legend: 'Concerts around the word per year'.
	builder body: 'Iron Maiden are an English heavy metal band 
formed in Leyton, east London, in 1975 by 
bassist and primary songwriter Steve Harris. 
The band''s discography has grown to 
thirty-seven albums, including fifteen studio 
albums, eleven live albums, four EPs, and 
seven compilations.

Pioneers of the New Wave of British Heavy 
Metal, Iron Maiden achieved initial success 
during the early 1980s. After several line-up 
changes, the band went on to release a 
series of US and UK platinum and gold 
albums, including 1982''s The Number of the 
Beast, 1983''s Piece of Mind, 1984''s 
Powerslave, 1985''s live release Live After 
Death, 1986''s Somewhere in Time and 
1988''s Seventh Son of a Seventh Son. 
Since the return of lead vocalist Bruce 
Dickinson and guitarist Adrian Smith in 1999, 
the band have undergone a resurgence in 
popularity, with their latest studio offering, 
The Final Frontier, peaking at No. 1 in 28 
different countries and receiving 
widespread critical acclaim.

Considered one of the most successful 
heavy metal bands in history, Iron Maiden 
have sold over 85 million records worldwide 
with little radio or television support. The 
band won the Ivor Novello Award for 
international achievement in 2002, and were 
also inducted into the Hollywood RockWalk in 
Sunset Boulevard, Los Angeles, California 
during their United States tour in 2005. As of 
October 2013, the band have played over 
2000 live shows throughout their career. For 
the past 35 years, the band have been 
supported by their famous mascot, "Eddie", 
who has appeared on almost all of their album 
and single covers, as well as in their live 
shows.'.
	builder colorLeft: #second.
	builder colorRight: #value.
	builder heightLeft: #second.
	builder heightRight: [:v| v value / 10].
	builder left: maiden1.
	builder right: maiden2.
	builder labelLeft: #first.
	builder labelRight: #key.
	builder edgesTo: [:a :b | a third includes: (b key) ].
	builder open.
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
	builder octopiEdges.
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
!

example9
	"
	self new example9
	"
	|builder hohoho|
	
	hohoho := {'Afghanistan' -> 'Baba Chaghaloo'.'Albania' -> 'Babadimri'. 'Argentina' -> 'Papá Noel'. 'Armenia' -> 'Gaghant Baba'. 'Belgium' -> 'Pere Noel'. 'Bosnia and Herzegovina' -> 'Deda Mraz'. 'Bolivia' -> 'Papá Noel'. 'Brazil' -> 'Papai Noel'. 'Bulgaria' -> 'Dyado Koleda'. 'Canada' -> 'Santa Claus'. 'Chile' -> 'Viejo Pascuero'. 'China' -> 'Dun Che Lao Ren'. 'Colombia' -> 'Papá Noel'. 'Denmark' -> 'Julemanden'. 'Ecuador' -> 'Papá Noel'. 'Egypt' -> 'Papa Noël'. 'France' -> 'Pere Noel'. 'French Canada' -> 'Père Noël'. 'Finland' -> 'Joulupukki'. 'Germany' -> 'Weihnachtsmann'. 'Hawaii' -> 'Kanakaloka'. 'Hungary' -> 'Mikulas'. 'Iran' -> 'Baba Noel'. 'Iraq' -> 'Vader Kersfees'. 'Ireland' -> 'Daidí na Nollaig'. 'Italy' -> 'Babbo Natale'. 'Jamaica' -> 'Santa Claus'. 'Japan' -> 'Hoteiosho'. 'Lithuania' -> 'Kaledu Senelis'. 'Malta' -> 'San Niklaw'. 'Netherlands' -> 'Kerstman'. 'Norway' -> 'Julenissen'. 'Perú' -> 'Papá Noel'. 'Poland' -> 'Swiety Mikolaj'. 'Portugal' -> 'Pai Natal'. 'Romania' -> 'Mos Craciun'. 'Russia' -> 'Ded Moroz'. 'Serbia' -> 'Deda Mraz'. 'Scottish Highlands' -> 'Daidaín na Nollaig'. 'South Africa' -> 'Vader Kersfees'. 'Spain' -> 'Papá Noel'. 'Sweden' -> 'Jultomten'. 'Turkey' -> 'Noel Baba'. 'United Kingdom' -> 'Father Christmas'. 'US' -> 'Santa Claus'}.
	
	builder := RelationalTowersBuilder new.
	builder title: 'Merry Christmas'.
	builder legend: 'Santa Claus over the World'.
	builder colorLeft: (Color green).
	builder colorRight: (Color red).
	builder left: hohoho.
	builder labelLeft: #key.
	builder edgesTo: #value.
	builder open.
! !

!RelationalTowersBuilder methodsFor: 'initialization'!

initialize
	view := ROView new.
	models := OrderedCollection new.
	left := OrderedCollection new.
	right := OrderedCollection new.
	popups := Dictionary new.
	edges := Dictionary new.
	shadowEdges := Dictionary new.
	title := 'RelationalTowers'.
	legend := 'Relational Towers'.
	body := ''.
	self label: #asString.
	self color: self class defaultElementColor.
	self edgeColor: self class defaultEdgeColor.
	self height: 10.
	width := 10.
	lineShape := false.
	popupElement := [ :elem | (ROElement on: ((elem allEdgesFrom select: [:e | e shape"s first" color = self edgeColor]) size)) 
		+ (ROLabel new "fontSize: 14;" color: self edgeColor) ].
	viewWidth := 500.
! !

!RelationalTowersBuilder methodsFor: 'instance creation'!

open
	"self view title: (self title)."
	(self view elements includes: (left anyOne)) ifFalse: [self view addAll: left].
	(self view elements includes: (right anyOne)) ifFalse: [self view addAll: right].
	"self view @ ROVerticalDraggable."
	self view signalUpdate.
	self view open.
	"self view openInWindowSized: (self viewWidth) @ 500."
! !

!RelationalTowersBuilder methodsFor: 'relations'!

assignMissing: aBlock from: aCollection
	| values aux otherCollection |
	aCollection = left
		ifTrue: [ otherCollection := right ]
		ifFalse:[ otherCollection := left ].
	values := OrderedCollection new.
	aux := aCollection collect: [ :l | (aBlock value: l model) "asOrderedCollection" ].
	aux do: [ :e | e isString ifTrue: [values add: e] ifFalse: [values addAll: e] ].
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
		ifFalse: 	[ newBlock := [ :a :b | |v|
				v := (aBlock value: a).
				(v includes: b) ifTrue: [true] ifFalse: [v = b] ]]. 
	self distance isNil ifTrue: [ distance := self positionateTowers].
	direction = 'to' 
		ifTrue: [ self linesTo: left with: newBlock]
		ifFalse: [ self linesFrom: left with: newBlock]
!

relationRight: aBlock	
	| newBlock |
	aBlock isBlock 
		ifTrue: [ newBlock	:= aBlock ]
		ifFalse: 	[ newBlock := [ :a :b | |v|
				v := (aBlock value: a).
				(v includes: b) ifTrue: [true] ifFalse: [v = b] ]]. 
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
			pop := self popupElement value: element.
			pop model = 1 ifFalse: [  
				popups at: element 
				ifPresent: [:v |  v hide"self view add: v" ]
				ifAbsent: [
					popups at: element put: pop.
					self view add: pop.
					self stickTop: pop on: element from: aCollection.
					(aCollection = left)
						ifTrue:  [ pop translateBy: (element width + (pop width) + 5) @ ((element height / 2) - (pop height))]
						ifFalse: [ pop translateBy: (element width + (pop width) + 5) negated @ ((element height / 2) - (pop height))]]]].
!

from: aCollection in: aString
	|h w dictionary normalizer c color height|
	(aString = 'left')
		ifTrue: [ color := self colorLeft. 
				 height := self heightLeft  ]
		ifFalse: [ color := self colorRight.
				 height := self heightRight ].
	color ifNil: [ color := self colorRight].
	height ifNil: [ height := self heightRight].
	h := [ :v | [(height value: v)] on: Error do: [ 10 ] ].
	w := [ :v | [(self width value: v)] on: Error do: [ 10 ] ].
	color isColor 
		ifTrue: [ c := [ :v | color]]
		ifFalse: [  
			dictionary := Dictionary new.
			aCollection do: [ :e | dictionary at: e put: ([(color value: e)] on: Error do: [0] ) ].
			normalizer := self getNormalizerfrom: dictionary.
			c := [ :v | [normalizer roValue: (color value: v)] on: Error do: [ self class errorColor ] ]].
	^(aCollection collect: [ :m | | elem |
		elem := ROElement on: m.
		elem + (ROBox new height: (h value: m); width: (w value: m); color: (c value: m))]).
!

fromModel
	^(self from: (self models) in: 'left')
!

getNormalizerfrom: aDictionary
	^(RONColorLinearNormalizer inContext: (aDictionary values) lowColor: (self class normalizerBotom) highColor: (self class normalizerTop)).
!

labels: aCollection
	| maxWidth label|
	maxWidth := 0.
	(aCollection = left) 
		ifTrue: [ label := self labelLeft ]
		ifFalse: [ label := self labelRight ].
	aCollection do: [:l | | lab | 
		lab := (ROElement on: (label value: l model)) + ROLabel.
		lab @ ROHighlight"ROLightlyHighlightable lightGray".
		maxWidth := maxWidth max: (lab width).
		self view add: lab.
		self stick: lab on: l from: aCollection].
	^maxWidth
!

positionateTowers
	| maxwl maxwr maxl maxr max leg legTrans leftTrans rightTrans bod|
	
	maxl := (left collect: [ :l | l height ]) max.
	maxr := (right collect: [ :l | l height ]) max.
	max := maxl max: maxr.

	ROVerticalLineLayout on: left.
	ROVerticalLineLayout on: right.	
	
	maxwl := self labels: left.
	maxwr := self labels: right.
	
	distance := ((self models size * max ln * 5) max: 300) min: 400.	

	leg := (ROElement on: (self legend)) +  (ROLabel new fontSize: 18).
	self view add: leg.
	legTrans := (maxwl + 40 + (distance / 2) - (leg width / 2)) max: 0.
	leg translateBy: legTrans @ 0.

	legTrans = 0
		ifTrue: [ leftTrans :=  (leg width / 2) - ((distance / 2) + maxwl).
				 rightTrans := (leftTrans + distance) ]
		ifFalse: [ leftTrans :=  (maxwl + 30).
				 rightTrans := (maxwl + distance + 30)].
	left do: [ :e | e translateBy: leftTrans @ 40 ].
	right do: [ :e | e translateBy: rightTrans @ 40 ].	
	
	bod := (ROElement on: (self body)) +  (ROLabel new color: Color darkGray).
	bodyElement := bod.
	bod width: distance.
	self view add: bod.
	bod translateBy: (maxwl + 60 @ 30 ).
	bod forward: (bod view). 
	"bod on: ROEvent do: [:e | bod parentAnnounce: e]."
	
	viewWidth := distance + maxwl + maxwr + 80  max: (leg width).
	
	^ distance
!

removePopup: element
	"(popups at: element ifAbsent:[^false]) remove."
	| pop |
	pop := 	(popups at: element ifAbsent: [nil]). 
	pop isNil ifFalse: [ pop shape isNil 
											ifFalse: [pop shape svgElement isNil 
																					ifFalse: [pop hide"remove". 
								 						 										self view signalUpdate]]].
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

!RelationalTowersBuilder class methodsFor: 'coloring'!

defaultEdgeColor
	^ Color r: (123/256) g: (50/256) b: (148/256)
!

defaultElementColor
	^ Color r: (0/256) g: (136/256) b: (55/256)
!

defaultLightEdgeColor
	^ Color r: (194/256) g: (165/256) b: (207/256)
!

errorColor
	^ Color r: (202/256) g: 0 b: (32/256)
!

normalizerBotom
	^ Color r: (199/256) g: (233/256) b: (192/256)
!

normalizerTop
	^ Color r: 0 g: (68/256) b: (27/256)
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

