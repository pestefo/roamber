Smalltalk current createPackage: 'Roassal-Amber-Extensions'!
Object subclass: #AmberExtention
	instanceVariableNames: ''
	package: 'Roassal-Amber-Extensions'!

Object subclass: #Color
	instanceVariableNames: 'r g b a'
	package: 'Roassal-Amber-Extensions'!

!Color methodsFor: 'accessing'!

alpha
	^ a
!

alpha: aVal
	a := aVal
!

blue
	^ b
!

brightness
	" From http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color  "
"	^ 0.2126*(self privateRed) + ( 0.7152*(self privateGreen)  + (0.0722*(self privateBlue)) )"
	^ 0.2126*(self privateRed)* 255.0 
			+ ( 0.7152*(self privateGreen) * 255.0  
			+ (0.0722*(self privateBlue)* 255.0 ) )
!

green
	^ g
!

hue
	"Return the hue of this color, an angle in the range [0.0..360.0]."
	| red green blue max min span h |
	red := self privateRed.
	green := self privateGreen.
	blue := self privateBlue.
	max := (red max: green) max: blue.
	min := (red min: green) min: blue.
	span := (max - min) asFloat.
	span = 0.0 ifTrue: [ ^ 0.0 ].
	red = max 
		ifTrue: [ h := (green - blue) asFloat / span * 60.0 ]
		ifFalse: 
			[ green = max 
				ifTrue: [ h := 120.0 + ((blue - red) asFloat / span * 60.0) ]
				ifFalse: [ h := 240.0 + ((red - green) asFloat / span * 60.0) ] ].
	h < 0.0 ifTrue: [ h := 360.0 + h ].
	^ h
!

red
	^ r
! !

!Color methodsFor: 'comparing'!

= aColor
	self class ~~ aColor class ifTrue: [ ^ false ].
	^ ((self red = aColor red and: [ self green = aColor green ]) and: [ self blue = aColor blue ]) and: [ self alpha = aColor alpha]
! !

!Color methodsFor: 'not yet classified'!

rgbTriplet
	^ { r copy . g copy . b copy }
!

rgbTriplet255
	^ { r copy * 255 . g copy * 255 . b copy * 255 }
!

wheel: thisMany 
	"An array of thisMany colors around the color wheel starting at self and ending all the way around the hue space just before self.  Array is of length thisMany.  Very useful for displaying color based on a variable in your program.  "
	| sat bri step hue |
	sat := self saturation.
	bri := self brightness.
	hue := self hue.
	step := 360.0 / (thisMany max: 1).
	^ (1 to: thisMany) collect: 
		[ :num | | c | 
		c := Color 
			h: hue
			s: sat
			v: bri.	"hue is taken mod 360"
		hue := hue + step.
		c ]
	"
(Color wheel: 8) withIndexDo: [:c :i | Display fill: (i*10@20 extent: 10@20) fillColor: c]
"
!

wheel: thisMany to: aColor
	"An array of thisMany colors around the color wheel starting at self and ending all the way around the hue space just before self.  Array is of length thisMany.  Very useful for displaying color based on a variable in your program.  "
	| sat bri step hue finishHue |
	sat := self saturation.
	bri := self brightness.
	hue := self hue.
	finishHue := aColor hue.
	step := ( finishHue - hue) / (thisMany max: 1).
	^ (1 to: thisMany) collect: 
		[ :num | | c | 
		c := Color 
			h: hue
			s: sat
			v: bri.	"hue is taken mod 360"
		hue := hue + step.
		c ]
	"
(Color wheel: 8) withIndexDo: [:c :i | Display fill: (i*10@20 extent: 10@20) fillColor: c]
"
! !

!Color methodsFor: 'other'!

cleanValue: value
	" Clean for possible mistaken values"
	(value > 1.0) 
		ifTrue: [^ 1.0]
		ifFalse: [
			(value < 0.0) ifTrue: [^ 0.0] ].
	^ value.
!

saturation
	"Return the saturation of this color, a value between 0.0 and 1.0."
	| red green blue max min |
	red := self privateRed.
	green := self privateGreen.
	blue := self privateBlue.
	max := min := red.
	green > max ifTrue: [ max := green ].
	blue > max ifTrue: [ max := blue ].
	green < min ifTrue: [ min := green ].
	blue < min ifTrue: [ min := blue ].
	max = 0 
		ifTrue: [ ^ 0.0 ]
		ifFalse: [ ^ (max - min) asFloat / max asFloat ]
! !

!Color methodsFor: 'private'!

asHTMLRGB

	^ 'rgb(',(r*255  asString),',',(g*255 asString),',',(b*255 asString),')'.
!

asHTMLRGBA

	^ 'rgba(',(r*255  asString),',',(g*255 asString),',',(b*255 asString),',',(a asString),')'.
!

privateBlue
	^ b
!

privateGreen
	^ g
!

privateRed
	^ r
!

r: rVal g: gVal b: bVal
	" values are from 0.0 .. 1.0 "
	self setRed: rVal green: gVal blue: bVal alpha: 1.0
!

r: rVal g: gVal b: bVal a: aVal
	" values are from 0.0 .. 1.0 "
	self setRed: rVal green: gVal blue: bVal alpha: aVal
!

setHue: hue saturation: saturation brightness: brightness 
	"Initialize this color to the given hue, saturation, and brightness. See the comment in the instance creation method for details."
	| s v hf i f p q t |
	s := (saturation asFloat max: 0.0) min: 1.0.
	v := (brightness asFloat max: 0.0) min: 1.0.

	"zero saturation yields gray with the given brightness"
	s = 0.0 ifTrue: 
		[ ^ self 
			setRed: v
			green: v
			blue: v ].
	hf := hue asFloat.
	(hf < 0.0 or: [ hf >= 360.0 ]) ifTrue: [ hf := hf - ((hf quo: 360.0) asFloat * 360.0) ].
	hf := hf / 60.0.
	i := hf asInteger.	"integer part of hue"
	f := hf fractionPart.	"fractional part of hue"
	p := (1.0 - s) * v.
	q := (1.0 - (s * f)) * v.
	t := (1.0 - (s * (1.0 - f))) * v.
	0 = i ifTrue: 
		[ ^ self 
			setRed: v
			green: t
			blue: p ].
	1 = i ifTrue: 
		[ ^ self 
			setRed: q
			green: v
			blue: p ].
	2 = i ifTrue: 
		[ ^ self 
			setRed: p
			green: v
			blue: t ].
	3 = i ifTrue: 
		[ ^ self 
			setRed: p
			green: q
			blue: v ].
	4 = i ifTrue: 
		[ ^ self 
			setRed: t
			green: p
			blue: v ].
	5 = i ifTrue: 
		[ ^ self 
			setRed: v
			green: p
			blue: q ].
	self error: 'implementation error'
!

setRed: rVal green: gVal blue: bVal 
	self setRed: rVal green: gVal blue: bVal alpha: 1.0
!

setRed: rVal green: gVal blue: bVal alpha: aVal
	"Initialize this color's r, g, and b components to the given values in the range [0.0..1.0]. "
	r :=  self cleanValue: rVal.
	g :=  self cleanValue: gVal.
	b:=  self cleanValue: bVal. 
	a:=  self cleanValue: aVal.
! !

!Color methodsFor: 'testing'!

isColor
	^ true
! !

!Color class methodsFor: 'not yet classified'!

black
	^ self new r: 0 g: 0 b: 0
!

blue
	^ self new r: 0 g: 0 b: 1
!

gray
	^ self new r: 0.5 g: 0.5  b: 0.5
!

gray: brightness
	"Return a gray shade with the given brightness in the range [0.0..1.0]."

	^ self r: brightness g: brightness b: brightness
!

green
	^ self new r: 0 g: 1 b: 0
!

h: hue s: saturation v: brightness
	"Create a color with the given hue, saturation, and brightness. Hue is given as the angle in degrees of the color on the color circle where red is zero degrees. Saturation and brightness are numbers in [0.0..1.0] where larger values are more saturated or brighter colors. For example, (Color h: 0 s: 1 v: 1) is pure red."
	"Note: By convention, brightness is abbreviated 'v' to to avoid confusion with blue."

	^ self basicNew setHue: hue saturation: saturation brightness: brightness
!

lightBlue
	^ self new r:0.7996089931573802
 g:1 b:1
!

lightGray
	^ self new r: 0.827 g: 0.827  b: 0.827
!

r: rVal g: gVal b: bVal
	^ self r: rVal g: gVal b: bVal a: 1.0
!

r: rVal g: gVal b: bVal a: aVal
	^ self new r: rVal g: gVal b: bVal a: aVal.
!

red
	^ self new r: 1 g: 0 b: 0
!

veryDarkGray
	^ self new r: 0.25 g: 0.25 b: 0.25
!

veryVeryDarkGray
	^ self new r: 0.125 g: 0.125 b: 0.125
!

wheel: thisMany
	"Return a collection of thisMany colors evenly spaced around the color wheel."
	"Color showColors: (Color wheel: 12)"

	^ Color wheel: thisMany saturation: 0.9 brightness: 0.7
!

wheel: thisMany saturation: s brightness: v
	"Return a collection of thisMany colors evenly spaced around the color wheel, all of the given saturation and brightness."
	"Color showColors: (Color wheel: 12 saturation: 0.4 brightness: 1.0)"
	"Color showColors: (Color wheel: 12 saturation: 0.8 brightness: 0.5)"

	^ (Color h: 0.0 s: s v: v) wheel: thisMany
!

white
	^ self new r: 1 g: 1 b: 1
!

yellow
	^ self new r: 1 g: 1 b: 0
! !

Dictionary subclass: #IdentityDictionary
	instanceVariableNames: ''
	package: 'Roassal-Amber-Extensions'!

Set subclass: #IdentitySet
	instanceVariableNames: ''
	package: 'Roassal-Amber-Extensions'!

Object subclass: #Rectangle
	instanceVariableNames: 'origin corner'
	package: 'Roassal-Amber-Extensions'!
!Rectangle commentStamp!
I represent a rectangular area of the screen. Arithmetic functions take points as arguments and carry out scaling and translating operations to create new instances of me. Rectangle functions create new instances by determining intersections of rectangles with rectangles.

Note 1: only rectangles parallel to reference frame (Screen) can be represented by this class.

Note 2: the Rectangle is represented by two extremities of one diagonal. By convention, it must be the diagonal:
	from rectangle origin (the point having smallest coordinates in reference frame),
	to rectangle corner (the point having largest coordinates in reference frame).

Note 3: Screen coordinates conventions are:
	x is horizontal axis, zero at left border, oriented toward right;
	y is vertical axis, zero at top border, oriented toward bottom.
This corresponds to the latin convention for writing text from left to right and top to bottom.

Note 4: the Rectangle extent is obtained by subtracting rectangle origin to rectangle corner coordinates.
If this leads to a negative width (extent x coordinate) and/or a negative height (extent y coordinate), then the Rectangle is degenerated and considered empty.

Instance variables:
	origin	<Point> the coordinates of corner having smallest coordinates (top left in Screen coordinates)
	corner	<Point> the coordinates of corner having largest coordinates (bottom right in Screen coordinates)!

!Rectangle methodsFor: 'accessing'!

aboveCenter
	"Answer the point slightly above the center of the receiver."

	^self topLeft + self bottomRight // (2@3)
!

area
	"Answer the receiver's area, the product of width and height."
	| w |
	(w := self width) <= 0 ifTrue: [ ^ 0 ].
	^ w * self height max: 0
!

bottom
	"Answer the position of the receiver's bottom horizontal line."

	^corner y
!

bottom: aNumber
	^origin corner: corner x @ aNumber
!

bottomCenter
	"Answer the point at the center of the bottom horizontal line of the 
	receiver."

	^self center x @ self bottom
!

bottomLeft
	"Answer the point at the left edge of the bottom horizontal line of the 
	receiver."

	^origin x @ corner y
!

bottomRight
	"Answer the point at the right edge of the bottom horizontal line of the 
	receiver."

	^corner
!

boundingBox
	^ self
!

center
	"Answer the point at the center of the receiver."

	^self topLeft + self bottomRight // 2
!

corner
	"Answer the point at the bottom right corner of the receiver."

	^corner
!

corners
	"Return an array of corner points in the order of a quadrilateral spec for WarpBlt."

	^ Array
		with: self topLeft
		with: self bottomLeft
		with: self bottomRight
		with: self topRight
!

extent
	"Answer a point with the receiver's width @ the receiver's height."

	^corner - origin
!

height
	"Answer the height of the receiver."

	^corner y - origin y
!

innerCorners
	"Return an array of inner corner points,
	ie, the most extreme pixels included,
	in the order of a quadrilateral spec for WarpBlt"
	| r1 |
	r1 := self topLeft corner: self bottomRight - (1 @ 1).
	^ Array 
		with: r1 topLeft
		with: r1 bottomLeft
		with: r1 bottomRight
		with: r1 topRight
!

left
	"Answer the position of the receiver's left vertical line."

	^origin x
!

left: aNumber
	^aNumber @ origin y corner: corner
!

leftCenter
	"Answer the point at the center of the receiver's left vertical line."

	^self left @ self center y
!

origin
	"Answer the point at the top left corner of the receiver."

	^origin
!

pointAtSideOrCorner: loc
	"Answer the point represented by the given location."
	
	^ self
		perform: (#(topLeft topCenter topRight rightCenter
					bottomRight bottomCenter bottomLeft leftCenter)
						at: (#(topLeft top topRight right
					bottomRight bottom bottomLeft left) indexOf: loc))
!

right
	"Answer the position of the receiver's right vertical line."

	^corner x
!

right: aNumber
	^origin corner: aNumber @ corner y
!

rightCenter
	"Answer the point at the center of the receiver's right vertical line."

	^self right @ self center y
!

top
	"Answer the position of the receiver's top horizontal line."

	^origin y
!

top: aNumber
	^origin x @ aNumber corner: corner
!

topCenter
	"Answer the point at the center of the receiver's top horizontal line."

	^self center x @ self top
!

topLeft
	"Answer the point at the top left corner of the receiver's top horizontal line."

	^origin
!

topRight
	"Answer the point at the top right corner of the receiver's top horizontal 
	line."

	^corner x @ origin y
!

width
	"Answer the width of the receiver."

	^corner x - origin x
! !

!Rectangle methodsFor: 'comparing'!

= aRectangle 
	"Answer true if the receiver's species, origin and corner match aRectangle's."

	self species = aRectangle species
		ifTrue: [^origin = aRectangle origin and: [corner = aRectangle corner]]
		ifFalse: [^false]
!

hash
	"Hash is reimplemented because = is implemented."

	^origin hash bitXor: corner hash
! !

!Rectangle methodsFor: 'fmp'!

deltaToEnsureInOrCentered: r extra: aNumber 
	| dX dY halfXDiff halfYDiff |
	dX := dY := 0.
	halfXDiff := ((r width - self width) * aNumber) truncated.
	halfYDiff := ((r height - self height) * aNumber) truncated.
	self left < r left 
		ifTrue: [ dX := self left - r left - halfXDiff ]
		ifFalse: 
			[ self right > r right ifTrue: [ dX := self right - r right + halfXDiff ] ].
	self top < r top 
		ifTrue: [ dY := self top - r top - halfYDiff ]
		ifFalse: 
			[ self bottom > r bottom ifTrue: [ dY := self bottom - r bottom + halfYDiff ] ].
	^ dX @ dY
! !

!Rectangle methodsFor: 'printing'!

printOn: aStream 
	"Refer to the comment in Object|printOn:."

	origin printOn: aStream.
	aStream nextPutAll: ' corner: '.
	corner printOn: aStream
!

storeOn: aStream 
	"printed form is good for storing too"
	
	aStream nextPut: '('.
	self printOn: aStream.
	aStream nextPut: ')'.
! !

!Rectangle methodsFor: 'private'!

setOrigin: topLeft corner: bottomRight 
	origin := topLeft.
	corner := bottomRight
! !

!Rectangle methodsFor: 'rectangle functions'!

adjustTo: newRect along: side 
	"Return a copy adjusted to fit a neighbor that has changed size."
	side = #left ifTrue: [^ self withRight: newRect left].
	side = #right ifTrue: [^ self withLeft: newRect right].
	side = #top ifTrue: [^ self withBottom: newRect top].
	side = #bottom ifTrue: [^ self withTop: newRect bottom].
!

allAreasOutsideList: aCollection do: aBlock
	"Enumerate aBlock with all areas of the receiver not overlapping 
	any rectangle in the given collection"
	^self allAreasOutsideList: aCollection startingAt: 1 do: aBlock
!

allAreasOutsideList: aCollection startingAt: startIndex do: aBlock 
	"Enumerate aBlock with all areas of the receiver not overlapping 
	any rectangle in the given collection"
	| yOrigin yCorner aRectangle index rr |
	index := startIndex.

	"Find the next intersecting rectangle from aCollection"
	
	[ index <= aCollection size ifFalse: [ ^ aBlock value: self ].
	aRectangle := aCollection at: index.
	origin <= aRectangle corner and: [ aRectangle origin <= corner ] ] whileFalse: [ index := index + 1 ].

	"aRectangle is intersecting; process it"
	aRectangle origin y > origin y 
		ifTrue: 
			[ rr := origin corner: corner x @ (yOrigin := aRectangle origin y).
			rr 
				allAreasOutsideList: aCollection
				startingAt: index + 1
				do: aBlock ]
		ifFalse: [ yOrigin := origin y ].
	aRectangle corner y < corner y 
		ifTrue: 
			[ rr := origin x @ (yCorner := aRectangle corner y) corner: corner.
			rr 
				allAreasOutsideList: aCollection
				startingAt: index + 1
				do: aBlock ]
		ifFalse: [ yCorner := corner y ].
	aRectangle origin x > origin x ifTrue: 
		[ rr := origin x @ yOrigin corner: aRectangle origin x @ yCorner.
		rr 
			allAreasOutsideList: aCollection
			startingAt: index + 1
			do: aBlock ].
	aRectangle corner x < corner x ifTrue: 
		[ rr := aRectangle corner x @ yOrigin corner: corner x @ yCorner.
		rr 
			allAreasOutsideList: aCollection
			startingAt: index + 1
			do: aBlock ]
!

amountToTranslateWithin: aRectangle 
	"Answer a Point, delta, such that self + delta is forced within aRectangle.
	Keep self topLeft inside when all of self cannot be made to fit"
	| dx dy |
	dx := 0.
	dy := 0.
	self right > aRectangle right ifTrue: [ dx := aRectangle right - self right ].
	self bottom > aRectangle bottom ifTrue: [ dy := aRectangle bottom - self bottom ].
	self left + dx < aRectangle left ifTrue: [ dx := aRectangle left - self left ].
	self top + dy < aRectangle top ifTrue: [ dy := aRectangle top - self top ].
	^ dx @ dy
!

areasOutside: aRectangle 
	"Answer an Array of Rectangles comprising the parts of the receiver not 
	intersecting aRectangle."
	"Make sure the intersection is non-empty"
	| areas yOrigin yCorner |
	(self intersects: aRectangle) ifFalse: [ ^ Array with: self ].
	areas := OrderedCollection new.
	aRectangle origin y > origin y 
		ifTrue: 
			[ areas addLast: (origin corner: corner x @ (yOrigin := aRectangle origin y)) ]
		ifFalse: [ yOrigin := origin y ].
	aRectangle corner y < corner y 
		ifTrue: 
			[ areas addLast: (origin x @ (yCorner := aRectangle corner y) corner: corner) ]
		ifFalse: [ yCorner := corner y ].
	aRectangle origin x > origin x ifTrue: 
		[ areas addLast: (origin x @ yOrigin corner: aRectangle origin x @ yCorner) ].
	aRectangle corner x < corner x ifTrue: 
		[ areas addLast: (aRectangle corner x @ yOrigin corner: corner x @ yCorner) ].
	^ areas
!

bordersOn: her along: herSide 
	(herSide = #right and: [self left = her right])
	| (herSide = #left and: [self right = her left])
		ifTrue:
		[^ (self top max: her top) < (self bottom min: her bottom)].
	(herSide = #bottom and: [self top = her bottom])
	| (herSide = #top and: [self bottom = her top])
		ifTrue:
		[^ (self left max: her left) < (self right min: her right)].
	^ false
!

encompass: aPoint 
	"Answer a Rectangle that contains both the receiver and aPoint."

	^ Rectangle 
		origin: (origin min: aPoint)
		corner: (corner max:  aPoint)
!

expandBy: delta 
	"Answer a Rectangle that is outset from the receiver by delta. delta is a 
	Rectangle, Point, or scalar."

	(delta isRectangle)
		ifTrue: [^Rectangle 
					origin: origin - delta origin 
					corner: corner + delta corner]
		ifFalse: [^Rectangle 
					origin: origin - delta 
					corner: corner + delta]
!

extendBy: delta 
	"Answer a Rectangle with the same origin as the receiver, but whose corner is offset by delta. delta is a 
	Rectangle, Point, or scalar."

	(delta isRectangle)
		ifTrue: [^Rectangle 
					origin: origin
					corner: corner + delta corner]
		ifFalse: [^Rectangle 
					origin: origin
					corner: corner + delta]
!

forPoint: aPoint closestSideDistLen: sideDistLenBlock 
	"Evaluate the block with my side (symbol) closest to aPoint,
		the approx distance of aPoint from that side, and
		the length of the side (or 0 if aPoint is beyond the side)"
	| side |
	side := self sideNearestTo: aPoint.
	side == #right ifTrue: 
		[ ^ sideDistLenBlock 
			value: side
			value: (self right - aPoint x) abs
			value: ((aPoint y 
					between: self top
					and: self bottom) 
					ifTrue: [ self height ]
					ifFalse: [ 0 ]) ].
	side == #left ifTrue: 
		[ ^ sideDistLenBlock 
			value: side
			value: (self left - aPoint x) abs
			value: ((aPoint y 
					between: self top
					and: self bottom) 
					ifTrue: [ self height ]
					ifFalse: [ 0 ]) ].
	side == #bottom ifTrue: 
		[ ^ sideDistLenBlock 
			value: side
			value: (self bottom - aPoint y) abs
			value: ((aPoint x 
					between: self left
					and: self right) 
					ifTrue: [ self width ]
					ifFalse: [ 0 ]) ].
	side == #top ifTrue: 
		[ ^ sideDistLenBlock 
			value: side
			value: (self top - aPoint y) abs
			value: ((aPoint x 
					between: self left
					and: self right) 
					ifTrue: [ self width ]
					ifFalse: [ 0 ]) ]
!

insetBy: delta 
	"Answer a Rectangle that is inset from the receiver by delta. delta is a 
	Rectangle, Point, or scalar."

	
	(delta isRectangle)
		ifTrue: [^Rectangle 
					origin: origin + delta origin 
					corner: corner - delta corner]
		ifFalse: [^Rectangle 
					origin: origin + delta 
					corner: corner - delta]
!

insetOriginBy: originDeltaPoint cornerBy: cornerDeltaPoint 
	"Answer a Rectangle that is inset from the receiver by a given amount in 
	the origin and corner."

	^Rectangle
		origin: origin + originDeltaPoint
		corner: corner - cornerDeltaPoint
!

intersect: aRectangle 
	"Answer a Rectangle that is the area in which the receiver overlaps with 
	aRectangle. Optimized for speed; old code read:
		^Rectangle 
			origin: (origin max: aRectangle origin)
			corner: (corner min: aRectangle corner)
	"
	| aPoint left right top bottom |
	aPoint := aRectangle origin.
	aPoint x > origin x 
		ifTrue: [ left := aPoint x ]
		ifFalse: [ left := origin x ].
	aPoint y > origin y 
		ifTrue: [ top := aPoint y ]
		ifFalse: [ top := origin y ].
	aPoint := aRectangle corner.
	aPoint x < corner x 
		ifTrue: [ right := aPoint x ]
		ifFalse: [ right := corner x ].
	aPoint y < corner y 
		ifTrue: [ bottom := aPoint y ]
		ifFalse: [ bottom := corner y ].
	^ Rectangle 
		origin: left @ top
		corner: right @ bottom
!

intersect: aRectangle ifNone: aBlock
	"Answer a Rectangle that is the area in which the receiver overlaps with 
	aRectangle. 
	If there's no overlap, evaluate the block instead 
	"
	| aPoint left right top bottom |
	(self intersects: aRectangle) ifFalse: [ ^ aBlock value ].
	 
	aPoint := aRectangle origin.
	aPoint x > origin x 
		ifTrue: [ left := aPoint x ]
		ifFalse: [ left := origin x ].
	aPoint y > origin y 
		ifTrue: [ top := aPoint y ]
		ifFalse: [ top := origin y ].
	aPoint := aRectangle corner.
	aPoint x < corner x 
		ifTrue: [ right := aPoint x ]
		ifFalse: [ right := corner x ].
	aPoint y < corner y 
		ifTrue: [ bottom := aPoint y ]
		ifFalse: [ bottom := corner y ].
	^ Rectangle 
		origin: left @ top
		corner: right @ bottom
!

merge: aRectangle 
	"Answer a Rectangle that contains both the receiver and aRectangle."

	^Rectangle 
		origin: (origin min: aRectangle origin)
		corner: (corner max: aRectangle corner)
!

outsetBy: delta 
	"Answer a Rectangle that is outset from the receiver by delta. delta is a 
	Rectangle, Point, or scalar."

	(delta isRectangle)
		ifTrue: [^Rectangle 
					origin: origin - delta origin 
					corner: corner + delta corner]
		ifFalse: [^Rectangle 
					origin: origin - delta 
					corner: corner + delta]
!

pointNearestTo: aPoint 
	"Return the point on my border closest to aPoint"
	| side |
	(self containsPoint: aPoint) 
		ifTrue: 
			[ side := self sideNearestTo: aPoint.
			side == #right ifTrue: [ ^ self right @ aPoint y ].
			side == #left ifTrue: [ ^ self left @ aPoint y ].
			side == #bottom ifTrue: [ ^ aPoint x @ self bottom ].
			side == #top ifTrue: [ ^ aPoint x @ self top ] ]
		ifFalse: [ ^ aPoint adhereTo: self ]
!

quickMerge: aRectangle 
	"Answer the receiver if it encloses the given rectangle or the merge of the two rectangles if it doesn't. THis method is an optimization to reduce extra rectangle creations."
	| useRcvr rOrigin rCorner minX maxX minY maxY |
	
	aRectangle ifNil: [ ^self ].
	
	useRcvr := true.
	rOrigin := aRectangle topLeft.
	rCorner := aRectangle bottomRight.
	minX := rOrigin x < origin x 
		ifTrue: 
			[ useRcvr := false.
			rOrigin x ]
		ifFalse: [ origin x ].
	maxX := rCorner x > corner x 
		ifTrue: 
			[ useRcvr := false.
			rCorner x ]
		ifFalse: [ corner x ].
	minY := rOrigin y < origin y 
		ifTrue: 
			[ useRcvr := false.
			rOrigin y ]
		ifFalse: [ origin y ].
	maxY := rCorner y > corner y 
		ifTrue: 
			[ useRcvr := false.
			rCorner y ]
		ifFalse: [ corner y ].
	useRcvr 
		ifTrue: [ ^ self ]
		ifFalse: 
			[ ^ Rectangle 
				origin: minX @ minY
				corner: maxX @ maxY ]
!

rectanglesAt: y height: ht
	(y+ht) > self bottom ifTrue: [^ Array new].
	^ Array with: (origin x @ y corner: corner x @ (y+ht))
!

sideNearestTo: aPoint 
	| distToLeft distToRight distToTop distToBottom closest side |
	distToLeft := aPoint x - self left.
	distToRight := self right - aPoint x.
	distToTop := aPoint y - self top.
	distToBottom := self bottom - aPoint y.
	closest := distToLeft.
	side := #left.
	distToRight < closest ifTrue: 
		[ closest := distToRight.
		side := #right ].
	distToTop < closest ifTrue: 
		[ closest := distToTop.
		side := #top ].
	distToBottom < closest ifTrue: 
		[ closest := distToBottom.
		side := #bottom ].
	^ side
	"
 | r | r := Rectangle fromUser.
Display border: r width: 1.
[Sensor anyButtonPressed] whileFalse:
	[(r sideNearestTo: Sensor cursorPoint) , '      ' displayAt: 0@0]
"
!

translatedToBeWithin: aRectangle
	"Answer a copy of the receiver that does not extend beyond aRectangle."

	^ self translateBy: (self amountToTranslateWithin: aRectangle)
!

withBottom: y 
	"Return a copy of me with a different bottom y"
	^ origin x @ origin y corner: corner x @ y
!

withHeight: height 
	"Return a copy of me with a different height"
	^ origin corner: corner x @ (origin y + height)
!

withLeft: x 
	"Return a copy of me with a different left x"
	^ x @ origin y corner: corner x @ corner y
!

withRight: x 
	"Return a copy of me with a different right x"
	^ origin x @ origin y corner: x @ corner y
!

withSide: side setTo: value  "return a copy with side set to value"
	^ self perform: (#(withLeft: withRight: withTop: withBottom: )
							at: (#(left right top bottom) indexOf: side))
		with: value
!

withSideOrCorner: side setToPoint: newPoint
	"Return a copy with side set to newPoint"

	^ self withSideOrCorner: side setToPoint: newPoint minExtent: 0@0
!

withSideOrCorner: side setToPoint: newPoint minExtent: minExtent
	"Return a copy with side set to newPoint"
	^self withSideOrCorner: side setToPoint: newPoint minExtent: minExtent
		limit: ((#(left top) includes: side) ifTrue: [SmallInteger minVal] ifFalse: [SmallInteger maxVal])
!

withSideOrCorner: side setToPoint: newPoint minExtent: minExtent limit: limit
	"Return a copy with side set to newPoint"
	side = #top ifTrue: [^ self withTop: (newPoint y min: corner y - minExtent y max: limit + minExtent y)].
	side = #bottom ifTrue: [^ self withBottom: (newPoint y min: limit - minExtent y max: origin y + minExtent y)].
	side = #left ifTrue: [^ self withLeft: (newPoint x min: corner x - minExtent x max: limit + minExtent x)].
	side = #right ifTrue: [^ self withRight: (newPoint x min: limit - minExtent x max: origin x + minExtent x)].
	side = #topLeft ifTrue: [^ (newPoint min: corner - minExtent) corner: self bottomRight].
	side = #bottomRight ifTrue: [^ self topLeft corner: (newPoint max: origin + minExtent)].
	side = #bottomLeft ifTrue: [^ self topRight rect: ((newPoint x min: corner x - minExtent x) @ (newPoint y max: origin y + minExtent y))].
	side = #topRight ifTrue: [^ self bottomLeft rect: ((newPoint x max: origin x + minExtent x) @ (newPoint y min: corner y - minExtent y))].
!

withTop: y 
	"Return a copy of me with a different top y"
	^ origin x @ y corner: corner x @ corner y
!

withWidth: width 
	"Return a copy of me with a different width"
	^ origin corner: (origin x + width) @ corner y
! !

!Rectangle methodsFor: 'self evaluating'!

isSelfEvaluating
	^ self class == Rectangle
! !

!Rectangle methodsFor: 'testing'!

containsPoint: aPoint 
	"Answer whether aPoint is within the receiver."

	^origin <= aPoint and: [aPoint < corner]
!

containsRect: aRect
	"Answer whether aRect is within the receiver (OK to coincide)."

	^ aRect origin >= origin and: [aRect corner <= corner]
!

hasPositiveExtent
	^ (corner x > origin x) and: [corner y > origin y]
!

intersects: aRectangle 
	"Answer whether aRectangle intersects the receiver anywhere."
	"Optimized; old code answered:
		(origin max: aRectangle origin) < (corner min: aRectangle corner)"
	| rOrigin rCorner |
	rOrigin := aRectangle origin.
	rCorner := aRectangle corner.
	rCorner x <= origin x ifTrue: [ ^ false ].
	rCorner y <= origin y ifTrue: [ ^ false ].
	rOrigin x >= corner x ifTrue: [ ^ false ].
	rOrigin y >= corner y ifTrue: [ ^ false ].
	^ true
!

isRectangle
	^true
!

isTall
	^ self height > self width
!

isWide
	^ self width > self height
!

isZero
	^origin isZero and:[corner isZero]
! !

!Rectangle methodsFor: 'transforming'!

align: aPoint1 with: aPoint2 
	"Answer a Rectangle that is a translated by aPoint2 - aPoint1."

	^self translateBy: aPoint2 - aPoint1
!

centeredBeneath: aRectangle
	 "Move the reciever so that its top center point coincides with the bottom center point of aRectangle."

	^ self align: self topCenter with: aRectangle bottomCenter
!

flipBy: direction centerAt: aPoint 
	"Return a copy flipped #vertical or #horizontal, about aPoint."
	^ (origin flipBy: direction centerAt: aPoint)
		rect: (corner flipBy: direction centerAt: aPoint)
!

interpolateTo: end at: amountDone
	"Interpolate between the instance and end after the specified amount has been done (0 - 1)."

	^(self origin interpolateTo: end origin at: amountDone)
		corner: (self corner interpolateTo: end corner at: amountDone)
!

quickMergePoint: aPoint
	"Answer the receiver if it encloses the given point or the expansion of the
	receiver to do so if it doesn't. "

	| useRcvr minX maxX minY maxY |
	useRcvr := true.
	minX := aPoint x < origin x ifTrue: [useRcvr := false. aPoint x] ifFalse: [origin x].
	maxX := aPoint x >= corner x ifTrue: [useRcvr := false. aPoint x + 1] ifFalse: [corner x].
	minY := aPoint y < origin y ifTrue: [useRcvr := false. aPoint y] ifFalse: [origin y].
	maxY := aPoint y >= corner y ifTrue: [useRcvr := false. aPoint y + 1] ifFalse: [corner y].
	^useRcvr
		ifTrue: [self]
		ifFalse: [minX@minY corner: maxX@maxY]
!

rotateBy: direction centerAt: aPoint
	"Return a copy rotated #right, #left, or #pi about aPoint"
	^ (origin rotateBy: direction centerAt: aPoint)
		rect: (corner rotateBy: direction centerAt: aPoint)
!

scaleBy: scale 
	"Answer a Rectangle scaled by scale, a Point or a scalar."

	^Rectangle origin: origin * scale corner: corner * scale
!

scaleFrom: rect1 to: rect2
	"Produce a rectangle stretched according to the stretch from rect1 to rect2"
	^ (origin scaleFrom: rect1 to: rect2)
		corner: (corner scaleFrom: rect1 to: rect2)
!

scaledAndCenteredIn: aRect
	"Answer a new rectangle that fits into aRectangle and is centered
	but with the same aspect ratio as the receiver."
	
	^self width / aRect width > (self height / aRect height)
		ifTrue: [aRect left @ (aRect leftCenter y - (self height * (aRect width / self width) / 2))
					corner: aRect right @ (aRect rightCenter y + (self height * (aRect width / self width) / 2))]
		ifFalse: [aRect topCenter x - (self width * (aRect height / self height) / 2) @ aRect top
					corner: (aRect topCenter x + (self width * (aRect height / self height) / 2)) @ aRect bottom]
!

squishedWithin: aRectangle
	"Return an adjustment of the receiver that fits within aRectangle by reducing its size, not by changing its origin.  "

	^ origin corner: (corner min: aRectangle bottomRight)

"(50 @ 50 corner: 160 @ 100) squishedWithin:  (20 @ 10 corner: 90 @ 85)"
!

translateBy: factor 
	"Answer a Rectangle translated by factor, a Point or a scalar."

	^Rectangle origin: origin + factor corner: corner + factor
!

translatedAndSquishedToBeWithin: aRectangle
	"Return an adjustment of the receiver that fits within aRectangle by
		- translating it to be within aRectangle if necessary, then
		- reducing its size, if necessary"

	^ (self translatedToBeWithin: aRectangle) squishedWithin: aRectangle
! !

!Rectangle methodsFor: 'truncation and round off'!

rounded
	"Answer a Rectangle whose origin and corner are rounded."

	^Rectangle origin: origin rounded corner: corner rounded
!

truncateTo: grid
	"Answer a Rectangle whose origin and corner are truncated to grid x and grid y."

	^Rectangle origin: (origin truncateTo: grid)
				corner: (corner truncateTo: grid)
!

truncated
	"Answer a Rectangle whose origin and corner have any fractional parts removed. Answer the receiver if its coordinates are already integral."

	(origin x isInteger and:
	[origin y isInteger and:
	[corner x isInteger and:
	[corner y isInteger]]])
		ifTrue: [^ self].

	^ Rectangle origin: origin truncated corner: corner truncated
! !

!Rectangle methodsFor: 'truncation and roundoff'!

ceiling
	"Answer the integer rectange to the bottom right of receiver.
	Return reciever if it already and integerRectange."

	self isIntegerRectangle ifTrue: [ ^ self ].
	^origin ceiling corner: corner ceiling
!

compressTo: grid
	"Answer a Rectangle whose origin and corner are rounded to grid x and grid y.
	Rounding is done by upper value on origin and lower value on corner so that
	rounded rectangle is inside self."

	^Rectangle origin: (origin roundUpTo: grid)
				corner: (corner roundDownTo: grid)
!

compressed
	"Answer a Rectangle whose origin and corner are rounded to integers.
	Rounding is done by upper value on origin and lower value on corner so that
	rounded rectangle is inside self."

	^Rectangle origin: origin ceiling corner: corner floor
!

expandTo: grid
	"Answer a Rectangle whose origin and corner are rounded to grid x and grid y.
	Rounding is done by upper value on origin and lower value on corner so that
	self is inside rounded rectangle."

	^Rectangle origin: (origin roundDownTo: grid)
				corner: (corner roundUpTo: grid)
!

expanded
	"Answer a Rectangle whose origin and corner are rounded to integers.
	Rounding is done by upper value on origin and lower value on corner so that
	self is inside rounded rectangle."

	^Rectangle origin: origin floor corner: corner ceiling
!

floor
"Answer the integer rectange to the topleft of receiver.
Return reciever if it already and integerRectange."

self isIntegerRectangle ifTrue: [ ^ self ] .

^origin floor corner: corner floor
!

isIntegerRectangle
"Answer true if all component of receiver are integral."

^origin isIntegerPoint and: [ corner isIntegerPoint ]
!

roundTo: grid
	"Answer a Rectangle whose origin and corner are rounded to grid x and grid y."

	^Rectangle origin: (origin roundTo: grid)
				corner: (corner roundTo: grid)
! !

!Rectangle class methodsFor: 'instance creation'!

center: centerPoint extent: extentPoint 
	"Answer an instance of me whose center is centerPoint and width 
	by height is extentPoint.  "

	^self origin: centerPoint - (extentPoint//2) extent: extentPoint
!

encompassing: listOfPoints 
	"A number of callers of encompass: should use this method."
	| topLeft bottomRight |
	topLeft := bottomRight := nil.
	listOfPoints do: 
		[ :p | 
		topLeft == nil 
			ifTrue: [ topLeft := bottomRight := p ]
			ifFalse: 
				[ topLeft := topLeft min: p.
				bottomRight := bottomRight max: p ] ].
	^ topLeft corner: bottomRight
!

left: leftNumber right: rightNumber top: topNumber bottom: bottomNumber 
	"Answer an instance of me whose left, right, top, and bottom coordinates 
	are determined by the arguments."

	^ self basicNew setOrigin: leftNumber @ topNumber corner: rightNumber @ bottomNumber
!

merging: listOfRects 
	"A number of callers of merge: should use this method."
	| minX minY maxX maxY |
	listOfRects do: 
		[ :r | 
		minX 
			ifNil: 
				[ minX := r topLeft x.
				minY := r topLeft y.
				maxX := r bottomRight x.
				maxY := r bottomRight y ]
			ifNotNil: 
				[ minX := minX min: r topLeft x.
				minY := minY min: r topLeft y.
				maxX := maxX max: r bottomRight x.
				maxY := maxY max: r bottomRight y ] ].
	^ minX @ minY corner: maxX @ maxY
!

origin: originPoint corner: cornerPoint 
	"Answer an instance of me whose corners (top left and bottom right) are 
	determined by the arguments."

	^self basicNew setOrigin: originPoint corner: cornerPoint
!

origin: originPoint extent: extentPoint 
	"Answer an instance of me whose top left corner is originPoint and width 
	by height is extentPoint."

	^self basicNew setOrigin: originPoint corner: originPoint + extentPoint
! !

String subclass: #Symbol
	instanceVariableNames: ''
	package: 'Roassal-Amber-Extensions'!

!Object methodsFor: '*Roassal-Amber-Extensions'!

assert: aBlock
	aBlock value ifFalse: [AssertionFailure signal: 'Assertion failed']
!

assert: aBlock description: aString
	aBlock value ifFalse: [AssertionFailure signal: aString]
!

assert: aBlock descriptionBlock: descriptionBlock
	"Throw an assertion error if aBlock does not evaluate to true."
	
	aBlock value ifFalse: [AssertionFailure signal: descriptionBlock value asString ]
!

browse
	Browser openOn: self class.
!

deny: aBlock
	aBlock value ifTrue: [AssertionFailure signal: 'Assertion failed']
!

instVarNamed: aString
	"Return the value of the instance variable in me with that name.  Slow and unclean, but very useful. "

	^ self instVarAt: aString
!

isBehavior
	^false
!

isCollection
	^false.
!

isColor
	^ false
!

isPoint
	^false
!

isRORectangle
	^false
!

isRectangle
	^false
!

roValue: anArgument 
	^ self
!

shouldnt: aBlock raise: anExceptionClass

	self assert: ([aBlock value. true] 
		on: anExceptionClass 
		do: [:ex | false])
! !

!Announcer methodsFor: '*Roassal-Amber-Extensions'!

numberOfSubscriptions
	subscriptions ifNil:[^ 0].
	^ subscriptions size
!

unsubscribe: anEvent
	
	subscriptions removeAllSuchThat: [:announSubscript | announSubscript announcementClass ==  anEvent class].
!

when: aClass do: aBlock
	subscriptions add: (AnnouncementSubscription new
		block: aBlock;
		announcementClass: aClass;
		yourself)
! !

!Behavior methodsFor: '*Roassal-Amber-Extensions'!

>> aString

	^self methodAt: aString
!

allSuperclasses

	(self superclass isNil) 
		ifTrue:[^ Array new]
		ifFalse:[^((Array with: self superclass) addAll: (self superclass allSuperclasses); yourself)]
!

instVarNames

	"Compatibility with Pahro for Roassal Examples"
	^ self instanceVariableNames
!

isBehavior
	^true
!

linesOfCode

	|linesCount|

	linesCount := 0.

	self methods do:[:m | linesCount := linesCount + (m source lineCount)].

	^ linesCount
!

methods
	"Compatibility with Pharo for Roassal Examples"

"	^self methodDictionary"

	<var arr = smalltalk.Array._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			arr._add_(methods[i]);
		}
	};
	return arr>
!

numberOfLinesOfCode

	^self linesOfCode
!

numberOfMethods
	^self methodDictionary size
!

numberOfSubclasses
	^self subclasses size
!

numberOfVariables
	^self instanceVariableNames size
!

withAllSuperclasses
	^(Array with: self) addAll: self allSuperclasses; yourself
! !

!BlockClosure methodsFor: '*Roassal-Amber-Extensions'!

fork
	^self value
!

roValue: valueOrArray
	self numArgs = 0 ifTrue: [ ^ self value ].  
	self numArgs = 1 ifTrue: [ ^ self value: valueOrArray ].
	
	"if I have more than 1 argument, then the valueOrArray is a collection"
	valueOrArray isCollection ifFalse: [ self error: 'A block with more than one argument can only be evaluated with a collection ' ].
	
	self numArgs = valueOrArray size ifTrue: [ ^ self valueWithArguments: valueOrArray ]. 
	
	self error: 'Incorrect number of arguments'
! !

!Collection methodsFor: '*Roassal-Amber-Extensions'!

allSatisfy: aBlock
	"Evaluate aBlock with the elements of the receiver.
	If aBlock returns true for any element return true.
	Otherwise return false."

	self do: [:each | (aBlock value: each) ifFalse: [^ false]].
	^ true
!

anySatisfy: aBlock
	"Evaluate aBlock with the elements of the receiver.
	If aBlock returns true for any element return true.
	Otherwise return false."

	self do: [:each | (aBlock value: each) ifTrue: [^ true]].
	^ false
!

copyWithout: anObject

	^self copyWithoutAll: (Array with: anObject)
!

detectMax: aBlock
	"Evaluate aBlock with each of the receiver's elements as the argument. 
	Answer the element for which aBlock evaluates to the highest magnitude.
	If collection empty, return nil.  This method might also be called elect:."

	| maxElement maxValue |
	self do: [:each | | val | 
		maxValue == nil
			ifFalse: [
				(val := aBlock value: each) > maxValue ifTrue: [
					maxElement := each.
					maxValue := val]]
			ifTrue: ["first element"
				maxElement := each.
				maxValue := aBlock value: each].
				"Note that there is no way to get the first element that works 
				for all kinds of Collections.  Must test every one."].
	^ maxElement
!

difference: aCollection
	"Answer the set theoretic difference of two collections."

	| set|
	
	set := self asSet.
	aCollection do: [ :each|
		set remove: each ifAbsent: []].
	
	^ self class withAll: set asArray
!

includesAll: aCollection

	"Answer whether all the elements of aCollection are in the receiver."
	aCollection do: [:elem | (self includes: elem) ifFalse: [^ false]].
	^ true
!

includesAllOf: aCollection

	^self includesAll: aCollection
!

isCollection
	^true
!

max
	^ self inject: self first into: [:max :each | max max: each]
!

min
	^ self inject: self first into: [:min :each | min min: each]
!

removeAllSuchThat: aBlock 
	"Evaluate aBlock for each element and remove all that elements from
	the receiver for that aBlock evaluates to true.  Use a copy to enumerate 
	collections whose order changes when an element is removed (i.e. Sets)."

	self copy do: [:each | (aBlock value: each) ifTrue: [self remove: each]]
!

select: selectBlock thenCollect: collectBlock
	"Utility method to improve readability."

	^ (self select: selectBlock) collect: collectBlock
!

sum: aBlock
	"This is implemented using a variant of the normal inject:into: pattern. 
	The reason for this is that it is not known whether we're in the normal 
	number line, i.e. whether 0 is a good initial value for the sum. 
	Consider a collection of measurement objects, 0 would be the unitless 
	value and would not be appropriate to add with the unit-ed objects."
	| sum sample |
	sample := aBlock value: self first.
	sum := self inject: sample into: [ :previousValue :each |  previousValue + (aBlock value: each) ].
	^ sum - sample
!

with: otherCollection collect: twoArgBlock 
	"Collect and return the result of evaluating twoArgBlock with 
	corresponding elements from this collection and otherCollection."
	| result |
	otherCollection size = self size ifFalse: [self error: 'otherCollection must be the same size'].
	result := self class new: self size.
	1 to: self size do:
		[:index | result addLast: (twoArgBlock value: (self at: index)
									value: (otherCollection at: index))].
	^ result
! !

!HashedCollection methodsFor: '*Roassal-Amber-Extensions'!

doWithIndex: aBlock2
	"Support Set enumeration with a counter, even though not ordered"
	| index |
	index := 0.
	self do: [:item | aBlock2 value: item value: (index := index+1)]
! !

!Dictionary methodsFor: '*Roassal-Amber-Extensions'!

at: anIndex ifAbsentPut: aBlock
	^self at: anIndex ifAbsent: [
	    self at: anIndex put: aBlock value]
! !

!SequenceableCollection methodsFor: '*Roassal-Amber-Extensions'!

atAllPut: anObject 
	"Put anObject at every one of the receiver's indices."

	| size |
	(size := self size) > 26 "first method faster from 27 accesses and on"
		ifTrue: [self from: 1 to: size put: anObject]
		ifFalse: [1 to: size do: [:index | self at: index put: anObject]]
!

doWithIndex: elementAndIndexBlock
	"Use the new version with consistent naming"
	^ self withIndexDo: elementAndIndexBlock
!

eighth
	^self at: 8
!

fifth
	^self at: 5
!

nineth
	^self at: 9
!

reverse
	^self reversed
!

roSwapElement: u withElement: v
	| index1 index2 |
	index1 := self indexOf: u.
	index2 := self indexOf: v.
	self at: index2 put: u.
	self at: index1 put: v.
!

seventth
	^self at: 7
!

sixth
	^self at: 6
!

with: otherCollection do: twoArgBlock 
	"Evaluate twoArgBlock with corresponding elements from this collection and otherCollection."
	otherCollection size = self size ifFalse: [self error: 'otherCollection must be the same size'].
	1 to: self size do:
		[:index |
		twoArgBlock value: (self at: index)
				value: (otherCollection at: index)]
! !

!Array methodsFor: '*Roassal-Amber-Extensions'!

@ interactionClassOrObject
	| obj |
	obj := interactionClassOrObject elementToBeAdded.
	self do: [ :el | el addInteraction: obj ].
	^ self
!

addFirst: anObject
	<self.unshift(anObject); return anObject;>
!

asSorted: aBlockOrSymbol
	| c b |
	c := self copy.
	(aBlockOrSymbol isKindOf: BlockClosure)
		ifTrue: [ b := aBlockOrSymbol ].
		
	(aBlockOrSymbol isKindOf: Symbol)
		ifTrue: [ b := [ :v1 :v2 | (v1 perform: aBlockOrSymbol) <= (v2 perform: aBlockOrSymbol) ] ].
		
	c sort: b.
	^ c
!

at: anIndex ifAbsentPut: aBlock
	^self at: anIndex ifAbsent: [
	    self at: anIndex put: aBlock value]
!

rangeIncludes: aNumber

	"As there is not Interval class, this method is under the implementation of this in Amber"

	^(aNumber >= self first and:[aNumber <= self last])
!

removeFirst
	<var o = self.shift(); return o;>
!

removeFirst: anObject
	<self.shift(anObject); return anObject;>
! !

!Array class methodsFor: '*Roassal-Amber-Extensions'!

with: anObject with: anObject2 with: anObject3 with: anObject4
	    ^(self new: 3)
		at: 1 put: anObject;
		at: 2 put: anObject2;
		at: 3 put: anObject3;
		at: 4 put: anObject4;
		yourself
! !

!String methodsFor: '*Roassal-Amber-Extensions'!

beginsWith: aString

	<return(self.indexOf(aString) == 0)>
!

capitalized

	^self
!

copyReplaceAll: aString with: anotherString

	^self copy replace: aString with: anotherString
!

endsWith: suffix

	<return self.indexOf(suffix, self.length - suffix.length) !!== -1>
!

lineCount
	"Answer the number of lines represented by the receiver, where every line delimiter CR, LF or CRLF pair adds one line."

	| lineCount |
	lineCount := 0.
	self lineIndicesDo: [:start :endWithoutDelimiters :end |
		lineCount := lineCount + 1].
	^lineCount
!

roValue: anObject 
	^ anObject perform: self
!

value: anObject 
	^ anObject perform: self
! !

!String class methodsFor: '*Roassal-Amber-Extensions'!

with: aUTFCharCode

	^self fromString: aUTFCharCode
! !

!Symbol methodsFor: '*Roassal-Amber-Extensions'!

roValue: anObject
	^anObject perform: self
!

value: anObject
	^anObject perform: self
! !

!Set methodsFor: '*Roassal-Amber-Extensions'!

remove: anObject ifAbsent: aBlock
	elements remove: anObject ifAbsent: aBlock
! !

!Number methodsFor: '*Roassal-Amber-Extensions'!

// aNumber

	<return Math.floor( self / aNumber ) >
!

abs
	^Math abs: self
!

asFloat
	^self
!

asInteger
	^self truncated
!

between: min and: max 
	"Answer whether the receiver is less than or equal to the argument, max, 
	and greater than or equal to the argument, min."

	^self >= min and: [self <= max]
!

ceiling
	
	< return Math.ceil(self); >
!

cos
	<return Math.cos(self)>
!

exp
	<return Math.exp(self)>
!

floor
	
	< return Math.floor(self); >
!

fractionPart
	^ self - (self floor)
!

isInteger
	^ self = (self asInteger)
!

max: max in: anInterval 
	"
	(0 max: 20 in: (1 to: 10)) == 1
	(0 max: 20 in: (0 to: 10)) == 0
	(0 max: 20 in: (1 to: 10)) == 1
	(2 max: 20 in: (0 to: 10)) == 1 
	(4 max: 20 in: (0 to: 10)) == 2
	(20 max: 20 in: (0 to: 10)) == 10
	"
	^ self min: 0 max: max in: anInterval
!

min: min max: max in: anInterval 
	"
	(0 max: 20 in: (1 to: 10)) == 1
	(0 max: 20 in: (0 to: 10)) == 0
	(0 max: 20 in: (1 to: 10)) == 1
	(2 max: 20 in: (0 to: 10)) == 1 
	(4 max: 20 in: (0 to: 10)) == 2
	(19 max: 20 in: (0 to: 10)) == 10
	"
	^ (self - min) / (max - min) * (anInterval last - anInterval first) + anInterval first
!

quo: aNumber 
	"Integer quotient defined by division with truncation toward zero. 
	
	-9 quo: 4 = -2.
	-0.9 quo: 0.4 = -2. 
	
	rem: answers the remainder from this division."

	^(self / aNumber) truncated
!

rem: aNumber 
	"Remainder defined in terms of quo:. Answer a Number with the same 
	sign as self. e.g. 9 rem: 4 = 1, -9 rem: 4 = -1. 0.9 rem: 0.4 = 0.1."

	^self - ((self quo: aNumber) * aNumber)
!

roundTo: quantum 
	"Answer the nearest number that is a multiple of quantum."

	^(self / quantum) rounded * quantum
!

roundUpTo: aNumber 
	"Answer the next multiple of aNumber toward infinity that is nearest the receiver.
	Examples:
               3.1479 roundUpTo: 0.01 -> 3.15
               3.1479 roundUpTo: 0.1 -> 3.2
               1923 roundUpTo: 10 -> 1930
               3.1479 roundUpTo: 0.005 -> 3.15
               -3.1479 roundUpTo: 0.01 -> -3.14"

	^(self / aNumber) ceiling * aNumber
!

sin
	<return Math.sin(self)>
!

tan
	<return Math.tan(self)>
! !

!Point methodsFor: '*Roassal-Amber-Extensions'!

// arg 
	"Answer a Point that is the quotient of the receiver and arg."

	arg isPoint ifTrue: [^ (x // arg x) @ (y // arg y)].
	"I prefer not to add many methods, so this will
	be done like this for now. Maybe change it in the future."	
"	^ arg adaptToPoint: self andSend: #//"
	^ self // (arg@arg)
!

< aPoint 
	"Answer whether the receiver is above and to the left of aPoint."

	^x < aPoint x and: [y < aPoint y]
!

<= aPoint 
	"Answer whether the receiver is above and to the left of aPoint."

	^x <= aPoint x and: [y <= aPoint y]
!

> aPoint 
	"Answer whether the receiver is above and to the left of aPoint."

	^x > aPoint x and: [y > aPoint y]
!

>= aPoint 
	"Answer whether the receiver is above and to the left of aPoint."

	^x >= aPoint x and: [y >= aPoint y]
!

asIntegerPoint

	 ^(self x truncated)@(self y truncated)
!

corner: aPoint
	^Rectangle origin: self corner: aPoint
!

dotProduct: aPoint 
	"Answer a Number that is the dot product of the receiver and the argument, aPoint.
	That is, the two points are multiplied and the coordinates of the result summed."

	^(x* aPoint x) +  (y * aPoint y)
!

extent: aPoint
	^Rectangle origin: self extent: aPoint
!

isPoint
	^true
!

max: aPoint 
	"Answer the lower right corner of the rectangle uniquely defined by the 
	receiver and the argument, aPoint."

	^ (x max: aPoint x) @ (y max: aPoint y)
!

min: aPoint 
	"Answer the lower right corner of the rectangle uniquely defined by the 
	receiver and the argument, aPoint."

	^ (x min: aPoint x) @ (y min: aPoint y)
!

negated
	^(0-x)@(0-y)
!

normal
	"Answer a new Point representing the unit vector rotated 90 deg 
	toward the y axis."

	^(y negated @ x) unitVector
!

r
	"Answer the receiver's radius in polar coordinate system."

	^(self dotProduct: self) sqrt
!

setX: aValueX setY: aValueY

	x := aValueX.
	y := aValueY.
!

translatedBy: aPoint
	"Compatibility with visualworks"
	^ self translateBy: aPoint
!

unitVector
	"Answer the receiver scaled to unit length."

	^self / self r
! !

!Point class methodsFor: '*Roassal-Amber-Extensions'!

r: rad theta: angle
	^(rad * (Math cos: angle))@(rad * (Math sin: angle))
!

radius: rad theta: angle
	^(rad * (Math cos: angle))@(rad * (Math sin: angle))
! !

!ROElement methodsFor: '*Roassal-Amber-Extensions'!

printString
	^model isNil
		 ifTrue:[super printString]
		ifFalse:[super printString, ('<', model printString, '>')]	
"	^(super printString,
		(model ifNotNil: [ 
		'<',	model printString, '>' ]))"
! !

!ROEvent methodsFor: '*Roassal-Amber-Extensions'!

asAnnouncement
	^self
! !

!ROEvent class methodsFor: '*Roassal-Amber-Extensions'!

asAnnouncement
	^self new
! !

