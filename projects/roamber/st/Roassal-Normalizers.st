Smalltalk current createPackage: 'Roassal-Normalizers'!
ROObject subclass: #RONAbstractNormalizer
	instanceVariableNames: 'command'
	package: 'Roassal-Normalizers'!

!RONAbstractNormalizer methodsFor: 'accessing'!

command
	
	^command
!

command: aBlock
	
	command := aBlock
!

roValue: anEntity
	
	self subclassResponsibility
! !

RONAbstractNormalizer subclass: #ROMultipleColorLinearNormalizer
	instanceVariableNames: 'normalizers'
	package: 'Roassal-Normalizers'!

!ROMultipleColorLinearNormalizer methodsFor: 'accessing'!

roValue: anEntity

	| value |
	value := self command value: anEntity.
	"detect range for the value, retrieve and call corresponding normalizers"
	^ (self detectNormalizerFor: value) roValue: value
! !

!ROMultipleColorLinearNormalizer methodsFor: 'initialize-release'!

initialize

	command := #yourself
!

valueRange: anArrayOfNumbers colorRange: anArrayOfColors
	" {1. 2. 3} {Color red. Color yellow. Color green}"
	
	| size start end |
	normalizers := Dictionary new.
	self assert: anArrayOfNumbers size = anArrayOfColors size.
	size := anArrayOfNumbers size.
	1 to: size - 1 do: [ :i |
		start := anArrayOfNumbers at: i.
		end :=  anArrayOfNumbers at: i + 1.
		normalizers
			at: (start to: end)
			put: (RONColorLinearNormalizer
						inContext: (Array with: start with: end)
						lowColor: (anArrayOfColors at: i)
						highColor: (anArrayOfColors at: i + 1))
	].
! !

!ROMultipleColorLinearNormalizer methodsFor: 'private-accessing'!

detectNormalizerFor: aValue

	normalizers keysAndValuesDo: [:range :norm |
		(range rangeIncludes: aValue)
			ifTrue: [^ norm] ].
	self error: aValue asString, ' not in declared ranges'
! !

!ROMultipleColorLinearNormalizer class methodsFor: 'instance creation'!

valueRange: anArrayOfNumbers colorRange: anArrayOfColors

	^ self new valueRange: anArrayOfNumbers colorRange: anArrayOfColors
! !

RONAbstractNormalizer subclass: #RONIdentityNormalizer
	instanceVariableNames: 'dictionary colorIndex'
	package: 'Roassal-Normalizers'!

!RONIdentityNormalizer methodsFor: 'accessing'!

roValue: anEntity
	
	^dictionary
		at: (command roValue: anEntity)
		ifAbsentPut: [ self nextColor ]
! !

!RONIdentityNormalizer methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	colorIndex := 0.
	dictionary := IdentityDictionary new.
	command := #yourself
! !

!RONIdentityNormalizer methodsFor: 'private'!

nextColor
	
	colorIndex := colorIndex \\ Color colorNames size + 1.
	^Color perform: (Color colorNames at: colorIndex)
!

setIndexTo: colorAsSymbol
	"colorAsSymbol has to be one of Color colorNames. 
	The method set the current index to the color given in parameter"
	
	colorIndex := (Color colorNames indexOf: colorAsSymbol) - 1
! !

!RONIdentityNormalizer class methodsFor: 'instance creation'!

beginingAtBlue
	^ self new
			setIndexTo: #blue;
			yourself
!

beginingAtRed
	^ self new
			setIndexTo: #red;
			yourself
!

withCommand: aBlock
	
	^(self new)
		command: aBlock;
		yourself
! !

RONIdentityNormalizer subclass: #RONExplicitIdentityNormalizer
	instanceVariableNames: 'colors defaultColor'
	package: 'Roassal-Normalizers'!

!RONExplicitIdentityNormalizer methodsFor: 'accessing'!

colors
	
	^colors
!

colors: anObject
	
	colors := anObject
!

defaultColor
	
	^defaultColor
!

defaultColor: anObject
	
	defaultColor := anObject
! !

!RONExplicitIdentityNormalizer methodsFor: 'private'!

nextColor
	
	colorIndex := colorIndex + 1.
	^colorIndex > self colors size
		ifTrue: [ self defaultColor ]
		ifFalse: [ self colors at: colorIndex ]
! !

!RONExplicitIdentityNormalizer class methodsFor: 'instance creation'!

withCommand: aBlock withColors: aCollection withDefaultColor: aColor
	
	^(self withCommand: aBlock)
		colors: aCollection;
		defaultColor: aColor;
		yourself
! !

RONAbstractNormalizer subclass: #RONLinearNormalizer
	instanceVariableNames: 'maximumValue context minimumValue'
	package: 'Roassal-Normalizers'!

!RONLinearNormalizer methodsFor: 'accessing'!

command: aBlock
	
	super command: aBlock.
	self flushCache
!

context
	
	^context
!

context: aContext
	
	context := aContext.
	self flushCache
!

flushCache
	
	maximumValue := nil
! !

!RONLinearNormalizer methodsFor: 'initialize-release'!

initialize
	"Initialize a newly created instance. This method must answer the receiver."
	
	super initialize.
	maximumValue := nil
! !

!RONLinearNormalizer methodsFor: 'private'!

maximumValue: anEntity
	"Returns the largest value that the color metric provides"
	
	maximumValue isNil
		ifTrue:
			[maximumValue := (self context roValue: anEntity)
				inject: 1
				into:
					[:maximum :entity | maximum max: (self command roValue: entity)]].
	^maximumValue
!

minimumValue: anEntity
	"Returns the smallest value that the color metric provides"
	
	minimumValue isNil
		ifTrue:
			[minimumValue := (self context roValue: anEntity)
				inject: 100000000000 
				into:
					[:minimum :entity | minimum min: (self command roValue: entity)]].
	^minimumValue
! !

!RONLinearNormalizer class methodsFor: 'instance creation'!

inContext: aCollection
	
	^self inContext: aCollection withCommand: [:obj | obj]
!

inContext: aCollection withCommand: aBlock
	
	^(self new)
		context: aCollection;
		command: aBlock;
		yourself
! !

RONLinearNormalizer subclass: #RONColorLinearNormalizer
	instanceVariableNames: 'minBrightness maxBrightness lowColor highColor'
	package: 'Roassal-Normalizers'!

!RONColorLinearNormalizer methodsFor: 'accessing'!

highColor: aBlock
	
	highColor := aBlock
!

lowColor: aBlock
	
	lowColor := aBlock
!

maxBrightness: aBlock
	
	maxBrightness := aBlock
!

minBrightness: aBlock
	
	minBrightness := aBlock
!

roValue: anEntity
	"Calculates the color of the entity based on the context."
	
	| myValue myHighColor myLowColor myMinBrightness myMaxBrightness weight minValue maxValue |
	"Get color specific data"
	minValue :=  self minimumValue: anEntity.
	maxValue :=  self maximumValue: anEntity.
	myMinBrightness := self minBrightnessFor: anEntity.
	myMaxBrightness := self maxBrightnessFor: anEntity.
	myHighColor := self highColorFor: anEntity.
	myLowColor := self lowColorFor: anEntity.	"Get data"
	weight := minValue = maxValue 
		ifTrue: [(myMinBrightness + myMaxBrightness) / 2]
		ifFalse: [	
			myValue := (self command value: anEntity) - (self minimumValue: anEntity).
			myMinBrightness + (myValue abs / (maxValue - minValue) * (myMaxBrightness - myMinBrightness)) ].
	^self blend: myLowColor with: myHighColor weight: weight
! !

!RONColorLinearNormalizer methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	lowColor := Color white.
	highColor := Color black
! !

!RONColorLinearNormalizer methodsFor: 'private'!

blend: aColor with: aColorValue weight: wt
	"Answer a new ColorValue which is a weighted blend of the receiver and the
	supplied ColorValue."
	"Simply interpolates in RGB space."

	| rv gv bv invWt |
	
	invWt := 1-wt.
	rv := ((aColor red * invWt) + ((aColorValue red)*wt)) "rounded".
	gv := ((aColor green  * invWt) + ((aColorValue green)*wt)) "rounded".
	bv := ((aColor blue *invWt)+ ((aColorValue blue)*wt)) "rounded".
	^Color r: rv g: gv b: bv
! !

!RONColorLinearNormalizer methodsFor: 'translator protocol'!

highColorFor: anEntity
	
	^highColor roValue: anEntity
!

lowColorFor: anEntity
	
	^lowColor roValue: anEntity
!

maxBrightnessFor: anEntity
	
	^maxBrightness isNil
		ifTrue: [1.0]
		ifFalse: [maxBrightness roValue: anEntity]
!

minBrightnessFor: anEntity
	
	^minBrightness isNil
		ifTrue: [0.0]
		ifFalse: [minBrightness roValue: anEntity]
! !

!RONColorLinearNormalizer class methodsFor: 'instance creation'!

inContext: aCollection lowColor: lowColor highColor: highColor
	
	| normalizer |
	normalizer := self inContext: aCollection.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	^normalizer
!

inContext: aCollection lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold
	
	| normalizer |
	normalizer := self inContext: aCollection.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	normalizer minBrightness: lowThreshold.
	normalizer maxBrightness: highThreshold.
	^normalizer
!

inContext: aCollection withCommand: aBlock lowColor: lowColor highColor: highColor
	
	| normalizer |
	normalizer := self inContext: aCollection withCommand: aBlock.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	^normalizer
!

inContext: aCollection withCommand: aBlock lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold
	
	| normalizer |
	normalizer := self inContext: aCollection withCommand: aBlock.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	normalizer minBrightness: lowThreshold.
	normalizer maxBrightness: highThreshold.
	^normalizer
! !

RONLinearNormalizer subclass: #RONFontLinearNormalizer
	instanceVariableNames: ''
	package: 'Roassal-Normalizers'!

!RONFontLinearNormalizer methodsFor: 'accessing'!

roValue: anEntity
	"Calculates the color of the entity based on the context."
	
	| value |
	value := self command roValue: anEntity.
	^5 + (38 * (value abs / (self maximumValue: anEntity))) asInteger
! !

RONLinearNormalizer subclass: #RONumberLinearNormalizer
	instanceVariableNames: 'scale'
	package: 'Roassal-Normalizers'!

!RONumberLinearNormalizer methodsFor: 'accessing'!

roValue: anEntity
	"Normalize value based on maximum value."
	
	| value |
	value := self command roValue: anEntity.
	^ ((value abs / (self maximumValue: anEntity)) asFloat * self scale) asInteger
!

scale
	^ scale
!

scale: anObject
	scale := anObject
! !

!RONumberLinearNormalizer methodsFor: 'initialization'!

initialize
	super initialize.
	scale := 1
! !

RONLinearNormalizer subclass: #ROValueLinearNormalizer
	instanceVariableNames: 'minScale maxScale'
	package: 'Roassal-Normalizers'!

!ROValueLinearNormalizer methodsFor: 'accessing'!

maxScale

	^maxScale.
!

maxScale: aValue

	^maxScale := aValue.
!

minScale

	^minScale.
!

minScale: aValue

	minScale := aValue.
!

roValue: anEntity
	
	"Normalize value based on minimum and maximum value."
	| value slope |
	value := self command roValue: anEntity.
	slope := self slope: anEntity.
	^ ((value abs * slope) + self maxScale - ((self maximumValue: anEntity) asFloat * slope)) asInteger
! !

!ROValueLinearNormalizer methodsFor: 'as yet unclassified'!

slope: anEntity
	
	^ (maxScale - minScale) / ((self maximumValue: anEntity) asFloat - (self minimumValue: anEntity )asFloat).
! !

!ROValueLinearNormalizer methodsFor: 'initialize-release'!

initialize

	super initialize.
	minScale := 0.
	maxScale := 1.
! !

