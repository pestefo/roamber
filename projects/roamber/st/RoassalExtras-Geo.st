Smalltalk current createPackage: 'RoassalExtras-Geo'!
ROObject subclass: #ROCityShapeBuilder
	instanceVariableNames: 'shape withLabel size color'
	package: 'RoassalExtras-Geo'!

!ROCityShapeBuilder methodsFor: 'accessing'!

color
	^ color
!

color: aColorOrAOneArgBlock
	"aColorOrAOneArgBlock could either be a color, a one-arg block, or a symbol"
	color := aColorOrAOneArgBlock
!

line

	shape := ROLine new.
	self initLineShape.
	^ shape
!

rectangle

	shape := ROBox new.
	self initShape
!

size
	^ size
!

size: aSize
	size := aSize
!

withLabel

	withLabel := true
! !

!ROCityShapeBuilder methodsFor: 'adding'!

addLabelFor: city inView: view
	| label s |
	label := ROLabel elementOn: city model asString.
	view add: label.
	ROConstraint move: label above: city.
	
	s := city bounds width.
	label translateBy: ((label extent x negated / 2 @ 0) + ((size @ 0) /2))
! !

!ROCityShapeBuilder methodsFor: 'configuration'!

defaultCitySize
	^ 15
! !

!ROCityShapeBuilder methodsFor: 'initialize-release'!

initLineShape
	color := Color lightGray.
	shape color: color.
	shape width: 3
!

initShape
	color := Color red.
	shape color: color.
	shape size: 15
!

initialize
	super initialize.
	self circle.	"We set the marker to false. No city name are displayed first"
	withLabel := false.
	size := self defaultCitySize.
	
	self initShape
! !

!ROCityShapeBuilder methodsFor: 'normalizers'!

linearFillColor: block
	"Set the linear fill color for the nodes. The gradient goes from white to black. anObject could be a symbol, a block or a value. anObject is evaluated against the model of the node to be paint. aGroup is a collection of the model values. This is where the maximum is looked into."

	color := [ :element | 
		| max |
		max := (element view attributes includesKey: #tmpMaxValue)
			ifTrue: [ element view attributeAt: #tmpMaxValue ]
			ifFalse: [ element view attributeAt: #tmpMaxValue put: ((element view elements collect: #model) maxValue: block )].
			
		Color gray256: 256 - ((block roValue: element model) max: max in: (1 to: 256)) ]
! !

!ROCityShapeBuilder methodsFor: 'public'!

buildCityNamed: aCityName using: mapBuilder

	| city s  geoPosition |
	city := ROElement new on: aCityName.
	shape size: size.

	shape color: color.
	city + shape copy.
	mapBuilder view add: city.
	
	s := size roValue: city.
	
	"city translateTo: position - ((s @ s) / 2)."	
	geoPosition := mapBuilder positionOf: aCityName.
	city translateTo: ((mapBuilder translateGeoPositionIntoPixelsPosition: geoPosition) - ((s @ s) / 2)).

	
	"Set the label if we need to"
	withLabel ifTrue: 
 		[ self addLabelFor: city inView: mapBuilder view ].
	
	^ city
!

buildRouteFromCityNamed: aCityName toCityNamed: toCityName using: mapBuilder

	| route |
	route := ROEdge from: (mapBuilder view elementFromModel: aCityName) to: (mapBuilder view elementFromModel: toCityName).
	
"	shape color: color."
	route + shape copy.
	mapBuilder view add: route.
	^ route
! !

!ROCityShapeBuilder methodsFor: 'shapes - nodes'!

circle

	shape := ROEllipse new.
	self initShape
! !

ROObject subclass: #ROCountryInfo
	instanceVariableNames: ''
	package: 'RoassalExtras-Geo'!

!ROCountryInfo class methodsFor: 'list of countries'!

countries
	^ #(#Afghanistan #Albania #Algeria #Angola #Argentina #Armenia #Australia #Austria #Azerbaijan #Bangladesh #Belarus #Belgium #Belize #Benin #Bhutan #Bolivia #BosniaandHerzegovina #Botswana #Brazil #BruneiDarussalam #Bulgaria #BurkinaFaso #Burundi #Cambodia #Cameroon #Canada #CentralAfricanRepublic #Chad #Chile #China #Colombia #Congo #CostaRica #Croatia #Cuba #Cyprus #CzechRepubilc #DemocraticRepublicCongo #Denmark #Djibouti #DominicanRepublic #Ecuador #Egypt #ElSalvador #EquatorialGuinea #Eritrea #Estonia #Ethiopia #FalklandIslandsMalvinas #Fiji #Finland #France #FrenchGuyana #GM #Gabon #Georgia #Germany #Ghana #GreatBritian #Greece #Greenland #Guatemala #Guinea #GuineaBissau #Guyana #Haiti #Honduras #Hungary #Iceland #India #Indonesia #Iran #Iraq #Ireland #Israel #Italy #IvoryCoast #Jamacia #Japan #Jordan #Kazakhstan #Kenya #Kuwait #Kyrgyzstan #Laos #Latvia #Lebanon #Lesotho #Liberia #Libya #Lithuania #Luxembourg #Madagascar #Malawi #Malaysia #Mali #Mauritania #Mexico #Moldova #Mongolia #Morocco #Mozambique #MyanmarBurma #Nambia #Nepal #Netherlands #NewZealand #Nicaragua #Niger #Nigeria #NorthKorea #Norway #Noumea #Oman #Pakistan #Palestine #Panama #PapuaNewGuinea #Paraguay #Peru #Phillipines #Poland #Portugal #PuertoRico #Qatar #RepublicofMacedonia #RepublicofTurkey #Romania #Russia #Rwanda #SaudiArabia #Senegal #Serbia #SierraLeone #Slovakia #SolomonIslands #Somolia #SouthAfrica #SouthKorea #Spain #SriLanka #Sudan #Suriname #SvalbardJanMayen #Swaziland #Sweden #Switzerland #Syria #Taiwan #Tajikistan #Tanzania #Thailand #TimorLeste #Togo #Tunisia #Turkmenistan #Uganda #Ukraine #UnitedArabEmirates #UnitedStates #Uruguay #Uzbekistan #Vanuatu #Venezuela #Vietnam #WesternSahara #Yemen #Zambia #Zimbabwe)
!

southAmerica
	^ #(#Argentina #Brazil #Chile #Colombia #Ecuador #Paraguay #Peru #Uruguay #Venezuela)
!

world
	^ self countries
! !

ROObject subclass: #ROInteractionBuilder
	instanceVariableNames: 'selfDefinedInteraction'
	package: 'RoassalExtras-Geo'!

!ROInteractionBuilder methodsFor: 'as yet unclassified'!

action: aBlockOrSymbol
	^ self item: aBlockOrSymbol printString action: aBlockOrSymbol
!

applyToElement: roElement
	selfDefinedInteraction do: [:int | int value: roElement ]
!

highlightWhenOver: aBlockOrSymbol color: aColorAsBlockOrSymbol
	"We use 'nodes asSet' to make sure that we do not go twice over the same node, else it behaves strangely'"
	
	self on: ROMouseEnter do: [ :n | 
		| nodes |
		nodes := n view elementsFromModels: (aBlockOrSymbol roValue: n element model) . 
		ROBlink 
			highlightElements: nodes asSet
			color: (aColorAsBlockOrSymbol roValue: n element model) ].

	self on: ROMouseLeave do: [ :n | 
		| nodes |
		nodes := n view elementsFromModels:  (aBlockOrSymbol roValue: n element model).
		ROBlink  
			unhighlightElements: nodes asSet ].
!

initialize
	super initialize.
	selfDefinedInteraction := OrderedCollection new.
!

noPopup 

	selfDefinedInteraction add: [ :listOfElements | 
		listOfElements do: [ :element | element removeInteraction: ROPopup ] ].
!

numberOfDefinedInteractions
	"Used essentially for debugging purpose"

	^ selfDefinedInteraction size
!

on: event do: block
	selfDefinedInteraction add: [ :element | element on: event do: block ]
!

popupText
	^ self popupText: [ :v | (v class == 'ab' class) ifTrue: [ v ] ifFalse: [ v printString ] ]
!

popupText: aBlockOrSelector

	^ selfDefinedInteraction add: [ :element | 
			| int |
			int := ROPopup text: aBlockOrSelector.
			int textColor: Color black.
			element changeInteraction: ROPopup for: int.
			 ]
!

popupView: aTwoArgsBlock

	^ selfDefinedInteraction add: [ :element | 
			element changeInteraction: ROPopup for: 
				(ROPopupView new 
					view: [ :anElement | 
						| roView |
						roView := ROView new.
						aTwoArgsBlock value: anElement model value: roView.
						roView ] )  ]
! !

ROObject subclass: #ROMapBuilder
	instanceVariableNames: 'view cities shapeBuilder interactionBuilder'
	package: 'RoassalExtras-Geo'!

!ROMapBuilder methodsFor: 'accessing'!

cities: cityNames
	cityNames do: [ :c | self cityWithoutResetting: c ]
!

interaction
	^ interactionBuilder
!

numberOfCities
	^ cities size
!

positionOf: aCityName
	^ cities at: aCityName
!

shape
	shapeBuilder := ROCityShapeBuilder new.
	^ shapeBuilder
!

view
	^ view
! !

!ROMapBuilder methodsFor: 'adding'!

allCountries
	(ROCountryInfo countries) do: [:c | self country: c]
!

city: aCityName
	^ self cityWithoutResetting: aCityName
!

city: aCityName position: aPoint
	"aPoint should describe the geographical location of the city you are adding.
	For example, the website http://www.travelmath.com/cities/Vancouver,+Canada
	gives for Vancouver Latitude: 49.25 Longitude: -123.133333.
	So the point to add is  49.25 @ -123.133333"
	cities at: aCityName put: aPoint.
	self city: aCityName
!

cityWithoutResetting: aCityName
	| roElement  |
		
	roElement := shapeBuilder buildCityNamed: aCityName using: self.
	interactionBuilder applyToElement: roElement.
	^ roElement
!

countries: countryNames

	countryNames do: [ :name | self country: name ]
!

country: aCountryName
	| symbol |
	symbol := aCountryName asSymbol.
	view add: ((ROPath path: (ROCountryInfo perform: symbol)) elementOn: symbol)
!

edgesFrom: aCityName toAll: cityNames

	cityNames do: [ :toCityName |
		shapeBuilder buildRouteFromCityNamed: aCityName toCityNamed: toCityName using: self
	]
!

pib
	^ #(#('UnitedStates' 16244) #('China' 12261) #('India' 4716) #('Japan' 4575) #('Germany' 3167) #('Russia' 2486) #('Brazil' 2330) #('France' 2252) #('Italy' 1813) #('Mexico' 1758) #('SouthKorea' 1622) #('Canada' 1446) #('Spain' 1407) #('Indonesia' 1212) #('Iran' 988) #('Australia' 961) #('Taiwan' 902) #('Poland' 802) #('Argentina' 747) #('SaudiArabia' 741) #('Netherlands' 710) #('Thailand' 646) #('SouthAfrica' 579) #('Egypt' 538) #('Pakistan' 515) #('Colombia' 500) #('Malaysia' 492) #('Nigeria' 451) #('Belgium' 421) #('Venezuela' 402) #('Sweden' 396) #('Switzerland' 362) #('Austria' 359) #('Ukraine' 335) #('Peru' 325) #('Vietnam' 320) #('Chile' 319) #('Bangladesh' 306) #('Greece' 281) #('Norway' 278) #('Algeria' 274) #('Romania' 274) #('UnitedArabEmirates' 271) #('Israel' 248) #('Portugal' 245) #('Kazakhstan' 232) #('Denmark' 210) #('Finland' 198) #('Hungary' 197) #('Ireland' 191) #('Qatar' 189) #('Morocco' 171) #('Kuwait' 166) #('Iraq' 155) #('Belarus' 150) #('Ecuador' 135) #('NewZealand' 129) #('Angola' 126) #('SriLanka' 126) #('Tunisia' 104) #('Uzbekistan' 103) #('Bulgaria' 103) #('Ethiopia' 103) #('DominicanRepublic' 99) #('Azerbaijan' 98) #('Oman' 91) #('Libya' 88) #('Ghana' 83) #('Sudan' 80) #('Croatia' 79) #('Serbia' 79) #('Guatemala' 78) #('Kenya' 76) #('Tanzania' 74) #('Lithuania' 64) #('Lebanon' 63) #('CostaRica' 59) #('Yemen' 57) #('Panama' 56) #('Bolivia' 54) #('Uruguay' 53) #('Uganda' 51) #('Cameroon' 50) #('Turkmenistan' 48) #('ElSalvador' 46) #('Luxembourg' 42) #('Paraguay' 40) #('Nepal' 40) #('Jordan' 38) #('Honduras' 38) #('Latvia' 37) #('Cambodia' 36) #('BosniaandHerzegovina' 32) #('Afghanistan' 31) #('Botswana' 31) #('Estonia' 28) #('EquatorialGuinea' 28) #('Gabon' 26) #('Georgia' 26) #('Senegal' 26) #('Mozambique' 26) #('Albania' 25) #('BurkinaFaso' 24) #('Zambia' 23) #('Cyprus' 23) #('BruneiDarussalam' 21) #('Madagascar' 21) #('Chad' 21) #('Nicaragua' 19) #('Laos' 19) #('Armenia' 19) #('PapuaNewGuinea' 18) #('Tajikistan' 17) #('Mali' 17) #('Benin' 15) #('Mongolia' 15) #('Rwanda' 14) #('Malawi' 14) #('Niger' 13) #('Kyrgyzstan' 13) #('Haiti' 13) #('Iceland' 13) #('Moldova' 12) #('Guinea' 12) #('SierraLeone' 8) #('Mauritania' 7) #('Zimbabwe' 6) #('Togo' 6) #('Suriname' 6) #('Guyana' 6) #('Swaziland' 6) #('Burundi' 5) #('Bhutan' 4) #('Eritrea' 4) #('Fiji' 4) #('Lesotho' 3) #('CentralAfricanRepublic' 3) #('Belize' 2) #('Liberia' 2) #('Djibouti' 2) #('SolomonIslands' 1) #('Vanuatu' 1))
!

view: aROView
	view := aROView
! !

!ROMapBuilder methodsFor: 'example'!

example

	| builder |
	builder := ROMapBuilder new.
	builder country: 'UnitedStates'.
	builder cities: #('New York City' 'Washington, D.C.').
	builder open
!

example2

	| builder |
	builder := ROMapBuilder new.
	builder countries: #('UnitedStates' 'Canada').
	builder open
!

example3

	| builder |
	builder := ROMapBuilder new.
	builder country: 'UnitedStates'.
	builder cities: #('New York City' 'Washington, D.C.').
	builder open
!

example4

	| builder |
	builder := ROMapBuilder new.
	builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').
	builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').
	builder open
!

example5
	"
	self new example5
	"

	| builder |
	builder := ROMapBuilder new.
	builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').

	builder shape circle size: 8; color: (Color red alpha: 0.5).
	builder interaction popupText.
	builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').

	builder shape circle size: 20; color: (Color red alpha: 0.5).
	builder interaction popupText.	
	builder city: 'Vancouver' position: 49.25 @ -123.133333.
	
	builder shape line width: 3; color: (Color blue alpha: 0.5).
	builder edgesFrom: 'Paris' toAll: #('New York City' 'Washington, D.C.' 'Santiago' 'Bogota' 'Vancouver').

	builder open
! !

!ROMapBuilder methodsFor: 'initialize-release'!

initInteractionBuilder
	interactionBuilder := ROInteractionBuilder new
!

initShapeBuilder
	shapeBuilder := ROCityShapeBuilder new
!

initialize
	super initialize.
	self initializeCities.
	self initShapeBuilder.
	self initInteractionBuilder.
	view := ROView new.
!

initializeCities

	cities := Dictionary new.
	cities at: 'New York City' put: 40 @ -74 .
	cities at: 'Washington, D.C.' put: 38 @ -77.
	cities at: 'Paris' put: 48 @ 2.
	cities at: 'Nice' put: 43 @ 7.
	cities at: 'Bordeaux' put: 44 @ -0.5.

	cities at: 'Santiago' put: -33 @ -70.
	cities at: 'Bogota' put: 4 @ -74.
	cities at: 'Buenos Aires' put: -34 @ -58.
! !

!ROMapBuilder methodsFor: 'instance creation'!

open
	^ view open
! !

!ROMapBuilder methodsFor: 'utility'!

translateGeoPositionIntoPixelsPosition2: point
	"From http://stackoverflow.com/questions/1369512/converting-longitude-latitude-to-x-y-on-a-map-with-calibration-points"
	| longitud latitud mapWidth mapHeight |
	longitud := point x.
	latitud := point y.

	mapWidth := 977.
	mapHeight := 378.
	
	^ ((mapWidth/360.0) * (180 + longitud)) @ ((mapHeight/180.0) * (90 - latitud))
!

translateGeoPositionIntoPixelsPosition: point
	"From https://github.com/thebyrd/world-news"
	
	| longitud latitud xFactor xoffset yFactor yoffset |
	latitud := point x.
	longitud := point y.
	
	xFactor := 2.6938.
	xoffset := 465.4.
	
	yFactor := -2.6938.
	yoffset := 227.066.
	^ ((longitud * xFactor) + xoffset) @ ((latitud * yFactor) + yoffset)
! !

