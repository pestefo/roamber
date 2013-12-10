smalltalk.addPackage('RoassalExtras-Geo');
smalltalk.addClass('ROCityShapeBuilder', smalltalk.ROObject, ['shape', 'withLabel', 'size', 'color'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "addLabelFor:inView:",
category: 'adding',
fn: function (city,view){
var self=this;
var label,s;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROConstraint(){return smalltalk.ROConstraint||(typeof ROConstraint=="undefined"?nil:ROConstraint)}
return smalltalk.withContext(function($ctx1) { 
label=_st($ROLabel())._elementOn_(_st(_st(city)._model())._asString());
_st(view)._add_(label);
_st($ROConstraint())._move_above_(label,city);
s=_st(_st(city)._bounds())._width();
_st(label)._translateBy_(_st(_st(_st(_st(_st(_st(label)._extent())._x())._negated()).__slash((2))).__at((0))).__plus(_st(_st(self["@size"]).__at((0))).__slash((2))));
return self}, function($ctx1) {$ctx1.fill(self,"addLabelFor:inView:",{city:city,view:view,label:label,s:s},smalltalk.ROCityShapeBuilder)})},
args: ["city", "view"],
source: "addLabelFor: city inView: view\x0a\x09| label s |\x0a\x09label := ROLabel elementOn: city model asString.\x0a\x09view add: label.\x0a\x09ROConstraint move: label above: city.\x0a\x09\x0a\x09s := city bounds width.\x0a\x09label translateBy: ((label extent x negated / 2 @ 0) + ((size @ 0) /2))",
messageSends: ["elementOn:", "asString", "model", "add:", "move:above:", "width", "bounds", "translateBy:", "+", "/", "@", "negated", "x", "extent"],
referencedClasses: ["ROLabel", "ROConstraint"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "buildCityNamed:using:",
category: 'public',
fn: function (aCityName,mapBuilder){
var self=this;
var city,s,geoPosition;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
city=_st(_st($ROElement())._new())._on_(aCityName);
_st(self["@shape"])._size_(self["@size"]);
_st(self["@shape"])._color_(self["@color"]);
_st(city).__plus(_st(self["@shape"])._copy());
_st(_st(mapBuilder)._view())._add_(city);
s=_st(self["@size"])._roValue_(city);
geoPosition=_st(mapBuilder)._positionOf_(aCityName);
_st(city)._translateTo_(_st(_st(mapBuilder)._translateGeoPositionIntoPixelsPosition_(geoPosition)).__minus(_st(_st(s).__at(s)).__slash((2))));
$1=self["@withLabel"];
if(smalltalk.assert($1)){
self._addLabelFor_inView_(city,_st(mapBuilder)._view());
};
$2=city;
return $2;
}, function($ctx1) {$ctx1.fill(self,"buildCityNamed:using:",{aCityName:aCityName,mapBuilder:mapBuilder,city:city,s:s,geoPosition:geoPosition},smalltalk.ROCityShapeBuilder)})},
args: ["aCityName", "mapBuilder"],
source: "buildCityNamed: aCityName using: mapBuilder\x0a\x0a\x09| city s  geoPosition |\x0a\x09city := ROElement new on: aCityName.\x0a\x09shape size: size.\x0a\x0a\x09shape color: color.\x0a\x09city + shape copy.\x0a\x09mapBuilder view add: city.\x0a\x09\x0a\x09s := size roValue: city.\x0a\x09\x0a\x09\x22city translateTo: position - ((s @ s) / 2).\x22\x09\x0a\x09geoPosition := mapBuilder positionOf: aCityName.\x0a\x09city translateTo: ((mapBuilder translateGeoPositionIntoPixelsPosition: geoPosition) - ((s @ s) / 2)).\x0a\x0a\x09\x0a\x09\x22Set the label if we need to\x22\x0a\x09withLabel ifTrue: \x0a \x09\x09[ self addLabelFor: city inView: mapBuilder view ].\x0a\x09\x0a\x09^ city",
messageSends: ["on:", "new", "size:", "color:", "+", "copy", "add:", "view", "roValue:", "positionOf:", "translateTo:", "-", "/", "@", "translateGeoPositionIntoPixelsPosition:", "ifTrue:", "addLabelFor:inView:"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "buildRouteFromCityNamed:toCityNamed:using:",
category: 'public',
fn: function (aCityName,toCityName,mapBuilder){
var self=this;
var route;
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1;
route=_st($ROEdge())._from_to_(_st(_st(mapBuilder)._view())._elementFromModel_(aCityName),_st(_st(mapBuilder)._view())._elementFromModel_(toCityName));
_st(route).__plus(_st(self["@shape"])._copy());
_st(_st(mapBuilder)._view())._add_(route);
$1=route;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildRouteFromCityNamed:toCityNamed:using:",{aCityName:aCityName,toCityName:toCityName,mapBuilder:mapBuilder,route:route},smalltalk.ROCityShapeBuilder)})},
args: ["aCityName", "toCityName", "mapBuilder"],
source: "buildRouteFromCityNamed: aCityName toCityNamed: toCityName using: mapBuilder\x0a\x0a\x09| route |\x0a\x09route := ROEdge from: (mapBuilder view elementFromModel: aCityName) to: (mapBuilder view elementFromModel: toCityName).\x0a\x09\x0a\x22\x09shape color: color.\x22\x0a\x09route + shape copy.\x0a\x09mapBuilder view add: route.\x0a\x09^ route",
messageSends: ["from:to:", "elementFromModel:", "view", "+", "copy", "add:"],
referencedClasses: ["ROEdge"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
category: 'shapes - nodes',
fn: function (){
var self=this;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($ROEllipse())._new();
self._initShape();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "circle\x0a\x0a\x09shape := ROEllipse new.\x0a\x09self initShape",
messageSends: ["new", "initShape"],
referencedClasses: ["ROEllipse"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "color\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColorOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColorOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColorOrAOneArgBlock:aColorOrAOneArgBlock},smalltalk.ROCityShapeBuilder)})},
args: ["aColorOrAOneArgBlock"],
source: "color: aColorOrAOneArgBlock\x0a\x09\x22aColorOrAOneArgBlock could either be a color, a one-arg block, or a symbol\x22\x0a\x09color := aColorOrAOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCitySize",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (15);
}, function($ctx1) {$ctx1.fill(self,"defaultCitySize",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "defaultCitySize\x0a\x09^ 15",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initLineShape",
category: 'initialize-release',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._lightGray();
_st(self["@shape"])._color_(self["@color"]);
_st(self["@shape"])._width_((3));
return self}, function($ctx1) {$ctx1.fill(self,"initLineShape",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "initLineShape\x0a\x09color := Color lightGray.\x0a\x09shape color: color.\x0a\x09shape width: 3",
messageSends: ["lightGray", "color:", "width:"],
referencedClasses: ["Color"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initShape",
category: 'initialize-release',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._red();
_st(self["@shape"])._color_(self["@color"]);
_st(self["@shape"])._size_((15));
return self}, function($ctx1) {$ctx1.fill(self,"initShape",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "initShape\x0a\x09color := Color red.\x0a\x09shape color: color.\x0a\x09shape size: 15",
messageSends: ["red", "color:", "size:"],
referencedClasses: ["Color"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCityShapeBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self._circle();
self["@withLabel"]=false;
self["@size"]=self._defaultCitySize();
self._initShape();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self circle.\x09\x22We set the marker to false. No city name are displayed first\x22\x0a\x09withLabel := false.\x0a\x09size := self defaultCitySize.\x0a\x09\x0a\x09self initShape",
messageSends: ["initialize", "circle", "defaultCitySize", "initShape"],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
category: 'accessing',
fn: function (){
var self=this;
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@shape"]=_st($ROLine())._new();
self._initLineShape();
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "line\x0a\x0a\x09shape := ROLine new.\x0a\x09self initLineShape.\x0a\x09^ shape",
messageSends: ["new", "initLineShape"],
referencedClasses: ["ROLine"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linearFillColor:",
category: 'normalizers',
fn: function (block){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@color"]=(function(element){
var max;
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(element)._view())._attributes())._includesKey_("tmpMaxValue");
if(smalltalk.assert($1)){
max=_st(_st(element)._view())._attributeAt_("tmpMaxValue");
} else {
max=_st(_st(element)._view())._attributeAt_put_("tmpMaxValue",_st(_st(_st(_st(element)._view())._elements())._collect_("model"))._maxValue_(block));
};
max;
return _st($Color())._gray256_((256).__minus(_st(_st(block)._roValue_(_st(element)._model()))._max_in_(max,(1)._to_((256)))));
}, function($ctx2) {$ctx2.fillBlock({element:element,max:max},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"linearFillColor:",{block:block},smalltalk.ROCityShapeBuilder)})},
args: ["block"],
source: "linearFillColor: block\x0a\x09\x22Set the linear fill color for the nodes. The gradient goes from white to black. anObject could be a symbol, a block or a value. anObject is evaluated against the model of the node to be paint. aGroup is a collection of the model values. This is where the maximum is looked into.\x22\x0a\x0a\x09color := [ :element | \x0a\x09\x09| max |\x0a\x09\x09max := (element view attributes includesKey: #tmpMaxValue)\x0a\x09\x09\x09ifTrue: [ element view attributeAt: #tmpMaxValue ]\x0a\x09\x09\x09ifFalse: [ element view attributeAt: #tmpMaxValue put: ((element view elements collect: #model) maxValue: block )].\x0a\x09\x09\x09\x0a\x09\x09Color gray256: 256 - ((block roValue: element model) max: max in: (1 to: 256)) ]",
messageSends: ["ifTrue:ifFalse:", "attributeAt:", "view", "attributeAt:put:", "maxValue:", "collect:", "elements", "includesKey:", "attributes", "gray256:", "-", "max:in:", "to:", "roValue:", "model"],
referencedClasses: ["Color"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
category: 'accessing',
fn: function (){
var self=this;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($ROBox())._new();
self._initShape();
return self}, function($ctx1) {$ctx1.fill(self,"rectangle",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "rectangle\x0a\x0a\x09shape := ROBox new.\x0a\x09self initShape",
messageSends: ["new", "initShape"],
referencedClasses: ["ROBox"]
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@size"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "size\x0a\x09^ size",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (aSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@size"]=aSize;
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aSize:aSize},smalltalk.ROCityShapeBuilder)})},
args: ["aSize"],
source: "size: aSize\x0a\x09size := aSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "withLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@withLabel"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"withLabel",{},smalltalk.ROCityShapeBuilder)})},
args: [],
source: "withLabel\x0a\x0a\x09withLabel := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCityShapeBuilder);



smalltalk.addClass('ROInteractionBuilder', smalltalk.ROObject, ['selfDefinedInteraction'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "action:",
category: 'as yet unclassified',
fn: function (aBlockOrSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._item_action_(_st(aBlockOrSymbol)._printString(),aBlockOrSymbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"action:",{aBlockOrSymbol:aBlockOrSymbol},smalltalk.ROInteractionBuilder)})},
args: ["aBlockOrSymbol"],
source: "action: aBlockOrSymbol\x0a\x09^ self item: aBlockOrSymbol printString action: aBlockOrSymbol",
messageSends: ["item:action:", "printString"],
referencedClasses: []
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "applyToElement:",
category: 'as yet unclassified',
fn: function (roElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selfDefinedInteraction"])._do_((function(int){
return smalltalk.withContext(function($ctx2) {
return _st(int)._value_(roElement);
}, function($ctx2) {$ctx2.fillBlock({int:int},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"applyToElement:",{roElement:roElement},smalltalk.ROInteractionBuilder)})},
args: ["roElement"],
source: "applyToElement: roElement\x0a\x09selfDefinedInteraction do: [:int | int value: roElement ]",
messageSends: ["do:", "value:"],
referencedClasses: []
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightWhenOver:color:",
category: 'as yet unclassified',
fn: function (aBlockOrSymbol,aColorAsBlockOrSymbol){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROBlink(){return smalltalk.ROBlink||(typeof ROBlink=="undefined"?nil:ROBlink)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
self._on_do_($ROMouseEnter(),(function(n){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st(_st(n)._view())._elementsFromModels_(_st(aBlockOrSymbol)._roValue_(_st(_st(n)._element())._model()));
nodes;
return _st($ROBlink())._highlightElements_color_(_st(nodes)._asSet(),_st(aColorAsBlockOrSymbol)._roValue_(_st(_st(n)._element())._model()));
}, function($ctx2) {$ctx2.fillBlock({n:n,nodes:nodes},$ctx1)})}));
self._on_do_($ROMouseLeave(),(function(n){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st(_st(n)._view())._elementsFromModels_(_st(aBlockOrSymbol)._roValue_(_st(_st(n)._element())._model()));
nodes;
return _st($ROBlink())._unhighlightElements_(_st(nodes)._asSet());
}, function($ctx2) {$ctx2.fillBlock({n:n,nodes:nodes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"highlightWhenOver:color:",{aBlockOrSymbol:aBlockOrSymbol,aColorAsBlockOrSymbol:aColorAsBlockOrSymbol},smalltalk.ROInteractionBuilder)})},
args: ["aBlockOrSymbol", "aColorAsBlockOrSymbol"],
source: "highlightWhenOver: aBlockOrSymbol color: aColorAsBlockOrSymbol\x0a\x09\x22We use 'nodes asSet' to make sure that we do not go twice over the same node, else it behaves strangely'\x22\x0a\x09\x0a\x09self on: ROMouseEnter do: [ :n | \x0a\x09\x09| nodes |\x0a\x09\x09nodes := n view elementsFromModels: (aBlockOrSymbol roValue: n element model) . \x0a\x09\x09ROBlink \x0a\x09\x09\x09highlightElements: nodes asSet\x0a\x09\x09\x09color: (aColorAsBlockOrSymbol roValue: n element model) ].\x0a\x0a\x09self on: ROMouseLeave do: [ :n | \x0a\x09\x09| nodes |\x0a\x09\x09nodes := n view elementsFromModels:  (aBlockOrSymbol roValue: n element model).\x0a\x09\x09ROBlink  \x0a\x09\x09\x09unhighlightElements: nodes asSet ].",
messageSends: ["on:do:", "elementsFromModels:", "roValue:", "model", "element", "view", "highlightElements:color:", "asSet", "unhighlightElements:"],
referencedClasses: ["ROMouseEnter", "ROBlink", "ROMouseLeave"]
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROInteractionBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@selfDefinedInteraction"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROInteractionBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09selfDefinedInteraction := OrderedCollection new.",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "noPopup",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROAbstractPopup(){return smalltalk.ROAbstractPopup||(typeof ROAbstractPopup=="undefined"?nil:ROAbstractPopup)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@selfDefinedInteraction"])._add_((function(listOfElements){
return smalltalk.withContext(function($ctx2) {
return _st(listOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx3) {
return _st(element)._removeInteraction_($ROAbstractPopup());
}, function($ctx3) {$ctx3.fillBlock({element:element},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({listOfElements:listOfElements},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"noPopup",{},smalltalk.ROInteractionBuilder)})},
args: [],
source: "noPopup \x0a\x0a\x09selfDefinedInteraction add: [ :listOfElements | \x0a\x09\x09listOfElements do: [ :element | element removeInteraction: ROAbstractPopup ] ].",
messageSends: ["add:", "do:", "removeInteraction:"],
referencedClasses: ["ROAbstractPopup"]
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfDefinedInteractions",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selfDefinedInteraction"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfDefinedInteractions",{},smalltalk.ROInteractionBuilder)})},
args: [],
source: "numberOfDefinedInteractions\x0a\x09\x22Used essentially for debugging purpose\x22\x0a\x0a\x09^ selfDefinedInteraction size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'as yet unclassified',
fn: function (event,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selfDefinedInteraction"])._add_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._on_do_(event,block);
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{event:event,block:block},smalltalk.ROInteractionBuilder)})},
args: ["event", "block"],
source: "on: event do: block\x0a\x09selfDefinedInteraction add: [ :element | element on: event do: block ]",
messageSends: ["add:", "on:do:"],
referencedClasses: []
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupText",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=self._popupText_((function(v){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(v)._class()).__eq_eq("ab"._class());
if(smalltalk.assert($2)){
return v;
} else {
return _st(v)._printString();
};
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupText",{},smalltalk.ROInteractionBuilder)})},
args: [],
source: "popupText\x0a\x09^ self popupText: [ :v | (v class == 'ab' class) ifTrue: [ v ] ifFalse: [ v printString ] ]",
messageSends: ["popupText:", "ifTrue:ifFalse:", "printString", "==", "class"],
referencedClasses: []
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupText:",
category: 'as yet unclassified',
fn: function (aBlockOrSelector){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROAbstractPopup(){return smalltalk.ROAbstractPopup||(typeof ROAbstractPopup=="undefined"?nil:ROAbstractPopup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selfDefinedInteraction"])._add_((function(element){
var int;
return smalltalk.withContext(function($ctx2) {
int=_st($ROPopup())._text_(aBlockOrSelector);
int;
_st(int)._textColor_(_st($Color())._black());
return _st(element)._changeInteraction_for_($ROAbstractPopup(),int);
}, function($ctx2) {$ctx2.fillBlock({element:element,int:int},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupText:",{aBlockOrSelector:aBlockOrSelector},smalltalk.ROInteractionBuilder)})},
args: ["aBlockOrSelector"],
source: "popupText: aBlockOrSelector\x0a\x0a\x09^ selfDefinedInteraction add: [ :element | \x0a\x09\x09\x09| int |\x0a\x09\x09\x09int := ROPopup text: aBlockOrSelector.\x0a\x09\x09\x09int textColor: Color black.\x0a\x09\x09\x09element changeInteraction: ROAbstractPopup for: int.\x0a\x09\x09\x09 ]",
messageSends: ["add:", "text:", "textColor:", "black", "changeInteraction:for:"],
referencedClasses: ["ROPopup", "Color", "ROAbstractPopup"]
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupView:",
category: 'as yet unclassified',
fn: function (aTwoArgsBlock){
var self=this;
function $ROAbstractPopup(){return smalltalk.ROAbstractPopup||(typeof ROAbstractPopup=="undefined"?nil:ROAbstractPopup)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROPopupView(){return smalltalk.ROPopupView||(typeof ROPopupView=="undefined"?nil:ROPopupView)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selfDefinedInteraction"])._add_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._changeInteraction_for_($ROAbstractPopup(),_st(_st($ROPopupView())._new())._view_((function(anElement){
var roView;
return smalltalk.withContext(function($ctx3) {
roView=_st($ROView())._new();
roView;
_st(aTwoArgsBlock)._value_value_(_st(anElement)._model(),roView);
return roView;
}, function($ctx3) {$ctx3.fillBlock({anElement:anElement,roView:roView},$ctx2)})})));
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupView:",{aTwoArgsBlock:aTwoArgsBlock},smalltalk.ROInteractionBuilder)})},
args: ["aTwoArgsBlock"],
source: "popupView: aTwoArgsBlock\x0a\x0a\x09^ selfDefinedInteraction add: [ :element | \x0a\x09\x09\x09element changeInteraction: ROAbstractPopup for: \x0a\x09\x09\x09\x09(ROPopupView new \x0a\x09\x09\x09\x09\x09view: [ :anElement | \x0a\x09\x09\x09\x09\x09\x09| roView |\x0a\x09\x09\x09\x09\x09\x09roView := ROView new.\x0a\x09\x09\x09\x09\x09\x09aTwoArgsBlock value: anElement model value: roView.\x0a\x09\x09\x09\x09\x09\x09roView ] )  ]",
messageSends: ["add:", "changeInteraction:for:", "view:", "new", "value:value:", "model"],
referencedClasses: ["ROAbstractPopup", "ROView", "ROPopupView"]
}),
smalltalk.ROInteractionBuilder);



smalltalk.addClass('ROMapBuilder', smalltalk.ROObject, ['view', 'cities', 'shapeBuilder', 'interactionBuilder'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "allCountries",
category: 'adding',
fn: function (){
var self=this;
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROSVGPath())._countries())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._country_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allCountries",{},smalltalk.ROMapBuilder)})},
args: [],
source: "allCountries\x0a\x09(ROSVGPath countries) do: [:c | self country: c]",
messageSends: ["do:", "country:", "countries"],
referencedClasses: ["ROSVGPath"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cities:",
category: 'accessing',
fn: function (cityNames){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(cityNames)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._cityWithoutResetting_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cities:",{cityNames:cityNames},smalltalk.ROMapBuilder)})},
args: ["cityNames"],
source: "cities: cityNames\x0a\x09cityNames do: [ :c | self cityWithoutResetting: c ]",
messageSends: ["do:", "cityWithoutResetting:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "city:",
category: 'adding',
fn: function (aCityName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._cityWithoutResetting_(aCityName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"city:",{aCityName:aCityName},smalltalk.ROMapBuilder)})},
args: ["aCityName"],
source: "city: aCityName\x0a\x09^ self cityWithoutResetting: aCityName",
messageSends: ["cityWithoutResetting:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "city:position:",
category: 'adding',
fn: function (aCityName,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cities"])._at_put_(aCityName,aPoint);
self._city_(aCityName);
return self}, function($ctx1) {$ctx1.fill(self,"city:position:",{aCityName:aCityName,aPoint:aPoint},smalltalk.ROMapBuilder)})},
args: ["aCityName", "aPoint"],
source: "city: aCityName position: aPoint\x0a\x09\x22aPoint should describe the geographical location of the city you are adding.\x0a\x09For example, the website http://www.travelmath.com/cities/Vancouver,+Canada\x0a\x09gives for Vancouver Latitude: 49.25 Longitude: -123.133333.\x0a\x09So the point to add is  49.25 @ -123.133333\x22\x0a\x09cities at: aCityName put: aPoint.\x0a\x09self city: aCityName",
messageSends: ["at:put:", "city:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cityWithoutResetting:",
category: 'adding',
fn: function (aCityName){
var self=this;
var roElement;
return smalltalk.withContext(function($ctx1) { 
var $1;
roElement=_st(self["@shapeBuilder"])._buildCityNamed_using_(aCityName,self);
_st(self["@interactionBuilder"])._applyToElement_(roElement);
$1=roElement;
return $1;
}, function($ctx1) {$ctx1.fill(self,"cityWithoutResetting:",{aCityName:aCityName,roElement:roElement},smalltalk.ROMapBuilder)})},
args: ["aCityName"],
source: "cityWithoutResetting: aCityName\x0a\x09| roElement  |\x0a\x09\x09\x0a\x09roElement := shapeBuilder buildCityNamed: aCityName using: self.\x0a\x09interactionBuilder applyToElement: roElement.\x0a\x09^ roElement",
messageSends: ["buildCityNamed:using:", "applyToElement:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "countries:",
category: 'adding',
fn: function (countryNames){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(countryNames)._do_((function(name){
return smalltalk.withContext(function($ctx2) {
return self._country_(name);
}, function($ctx2) {$ctx2.fillBlock({name:name},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"countries:",{countryNames:countryNames},smalltalk.ROMapBuilder)})},
args: ["countryNames"],
source: "countries: countryNames\x0a\x0a\x09countryNames do: [ :name | self country: name ]",
messageSends: ["do:", "country:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "country:",
category: 'adding',
fn: function (aCountryName){
var self=this;
var symbol;
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
function $ROPath(){return smalltalk.ROPath||(typeof ROPath=="undefined"?nil:ROPath)}
return smalltalk.withContext(function($ctx1) { 
symbol=_st(aCountryName)._asSymbol();
_st(self["@view"])._add_(_st(_st($ROPath())._path_(_st($ROSVGPath())._perform_(symbol)))._elementOn_(symbol));
return self}, function($ctx1) {$ctx1.fill(self,"country:",{aCountryName:aCountryName,symbol:symbol},smalltalk.ROMapBuilder)})},
args: ["aCountryName"],
source: "country: aCountryName\x0a\x09| symbol |\x0a\x09symbol := aCountryName asSymbol.\x0a\x09view add: ((ROPath path: (ROSVGPath perform: symbol)) elementOn: symbol)",
messageSends: ["asSymbol", "add:", "elementOn:", "path:", "perform:"],
referencedClasses: ["ROSVGPath", "ROPath"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFrom:toAll:",
category: 'adding',
fn: function (aCityName,cityNames){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(cityNames)._do_((function(toCityName){
return smalltalk.withContext(function($ctx2) {
return _st(self["@shapeBuilder"])._buildRouteFromCityNamed_toCityNamed_using_(aCityName,toCityName,self);
}, function($ctx2) {$ctx2.fillBlock({toCityName:toCityName},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"edgesFrom:toAll:",{aCityName:aCityName,cityNames:cityNames},smalltalk.ROMapBuilder)})},
args: ["aCityName", "cityNames"],
source: "edgesFrom: aCityName toAll: cityNames\x0a\x0a\x09cityNames do: [ :toCityName |\x0a\x09\x09shapeBuilder buildRouteFromCityNamed: aCityName toCityNamed: toCityName using: self\x0a\x09]",
messageSends: ["do:", "buildRouteFromCityNamed:toCityNamed:using:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example",
category: 'example',
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($ROMapBuilder())._new();
_st(builder)._country_("UnitedStates");
_st(builder)._cities_(["New York City", "Washington, D.C."]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example",{builder:builder},smalltalk.ROMapBuilder)})},
args: [],
source: "example\x0a\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder country: 'UnitedStates'.\x0a\x09builder cities: #('New York City' 'Washington, D.C.').\x0a\x09builder open",
messageSends: ["new", "country:", "cities:", "open"],
referencedClasses: ["ROMapBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
category: 'example',
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($ROMapBuilder())._new();
_st(builder)._countries_(["UnitedStates", "Canada"]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{builder:builder},smalltalk.ROMapBuilder)})},
args: [],
source: "example2\x0a\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder countries: #('UnitedStates' 'Canada').\x0a\x09builder open",
messageSends: ["new", "countries:", "open"],
referencedClasses: ["ROMapBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
category: 'example',
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($ROMapBuilder())._new();
_st(builder)._country_("UnitedStates");
_st(builder)._cities_(["New York City", "Washington, D.C."]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{builder:builder},smalltalk.ROMapBuilder)})},
args: [],
source: "example3\x0a\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder country: 'UnitedStates'.\x0a\x09builder cities: #('New York City' 'Washington, D.C.').\x0a\x09builder open",
messageSends: ["new", "country:", "cities:", "open"],
referencedClasses: ["ROMapBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example4",
category: 'example',
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($ROMapBuilder())._new();
_st(builder)._countries_(["Canada", "UnitedStates", "France", "Chile", "Colombia"]);
_st(builder)._cities_(["New York City", "Washington, D.C.", "Paris", "Bordeaux", "Santiago", "Bogota"]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example4",{builder:builder},smalltalk.ROMapBuilder)})},
args: [],
source: "example4\x0a\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').\x0a\x09builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').\x0a\x09builder open",
messageSends: ["new", "countries:", "cities:", "open"],
referencedClasses: ["ROMapBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example5",
category: 'example',
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($ROMapBuilder())._new();
_st(builder)._countries_(["Canada", "UnitedStates", "France", "Chile", "Colombia"]);
$1=_st(_st(builder)._shape())._circle();
_st($1)._size_((8));
$2=_st($1)._color_(_st(_st($Color())._red())._alpha_((0.5)));
_st(_st(builder)._interaction())._popupText();
_st(builder)._cities_(["New York City", "Washington, D.C.", "Paris", "Bordeaux", "Santiago", "Bogota"]);
$3=_st(_st(builder)._shape())._circle();
_st($3)._size_((20));
$4=_st($3)._color_(_st(_st($Color())._red())._alpha_((0.5)));
_st(_st(builder)._interaction())._popupText();
_st(builder)._city_position_("Vancouver",(49.25).__at((-123.133333)));
$5=_st(_st(builder)._shape())._line();
_st($5)._width_((3));
$6=_st($5)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(builder)._edgesFrom_toAll_("Paris",["New York City", "Washington, D.C.", "Santiago", "Bogota", "Vancouver"]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example5",{builder:builder},smalltalk.ROMapBuilder)})},
args: [],
source: "example5\x0a\x09\x22\x0a\x09self new example5\x0a\x09\x22\x0a\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').\x0a\x0a\x09builder shape circle size: 8; color: (Color red alpha: 0.5).\x0a\x09builder interaction popupText.\x0a\x09builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').\x0a\x0a\x09builder shape circle size: 20; color: (Color red alpha: 0.5).\x0a\x09builder interaction popupText.\x09\x0a\x09builder city: 'Vancouver' position: 49.25 @ -123.133333.\x0a\x09\x0a\x09builder shape line width: 3; color: (Color blue alpha: 0.5).\x0a\x09builder edgesFrom: 'Paris' toAll: #('New York City' 'Washington, D.C.' 'Santiago' 'Bogota' 'Vancouver').\x0a\x0a\x09builder open",
messageSends: ["new", "countries:", "size:", "circle", "shape", "color:", "alpha:", "red", "popupText", "interaction", "cities:", "city:position:", "@", "width:", "line", "blue", "edgesFrom:toAll:", "open"],
referencedClasses: ["ROMapBuilder", "Color"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initInteractionBuilder",
category: 'initialize-release',
fn: function (){
var self=this;
function $ROInteractionBuilder(){return smalltalk.ROInteractionBuilder||(typeof ROInteractionBuilder=="undefined"?nil:ROInteractionBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@interactionBuilder"]=_st($ROInteractionBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initInteractionBuilder",{},smalltalk.ROMapBuilder)})},
args: [],
source: "initInteractionBuilder\x0a\x09interactionBuilder := ROInteractionBuilder new",
messageSends: ["new"],
referencedClasses: ["ROInteractionBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initShapeBuilder",
category: 'initialize-release',
fn: function (){
var self=this;
function $ROCityShapeBuilder(){return smalltalk.ROCityShapeBuilder||(typeof ROCityShapeBuilder=="undefined"?nil:ROCityShapeBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@shapeBuilder"]=_st($ROCityShapeBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initShapeBuilder",{},smalltalk.ROMapBuilder)})},
args: [],
source: "initShapeBuilder\x0a\x09shapeBuilder := ROCityShapeBuilder new",
messageSends: ["new"],
referencedClasses: ["ROCityShapeBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROMapBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self._initializeCities();
self._initShapeBuilder();
self._initInteractionBuilder();
self["@view"]=_st($ROView())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROMapBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeCities.\x0a\x09self initShapeBuilder.\x0a\x09self initInteractionBuilder.\x0a\x09view := ROView new.",
messageSends: ["initialize", "initializeCities", "initShapeBuilder", "initInteractionBuilder", "new"],
referencedClasses: ["ROView"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCities",
category: 'initialize-release',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@cities"]=_st($Dictionary())._new();
_st(self["@cities"])._at_put_("New York City",(40).__at((-74)));
_st(self["@cities"])._at_put_("Washington, D.C.",(38).__at((-77)));
_st(self["@cities"])._at_put_("Paris",(48).__at((2)));
_st(self["@cities"])._at_put_("Nice",(43).__at((7)));
_st(self["@cities"])._at_put_("Bordeaux",(44).__at((-0.5)));
_st(self["@cities"])._at_put_("Santiago",(-33).__at((-70)));
_st(self["@cities"])._at_put_("Bogota",(4).__at((-74)));
_st(self["@cities"])._at_put_("Buenos Aires",(-34).__at((-58)));
return self}, function($ctx1) {$ctx1.fill(self,"initializeCities",{},smalltalk.ROMapBuilder)})},
args: [],
source: "initializeCities\x0a\x0a\x09cities := Dictionary new.\x0a\x09cities at: 'New York City' put: 40 @ -74 .\x0a\x09cities at: 'Washington, D.C.' put: 38 @ -77.\x0a\x09cities at: 'Paris' put: 48 @ 2.\x0a\x09cities at: 'Nice' put: 43 @ 7.\x0a\x09cities at: 'Bordeaux' put: 44 @ -0.5.\x0a\x0a\x09cities at: 'Santiago' put: -33 @ -70.\x0a\x09cities at: 'Bogota' put: 4 @ -74.\x0a\x09cities at: 'Buenos Aires' put: -34 @ -58.",
messageSends: ["new", "at:put:", "@"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interaction",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interactionBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interaction",{},smalltalk.ROMapBuilder)})},
args: [],
source: "interaction\x0a\x09^ interactionBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfCities",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cities"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfCities",{},smalltalk.ROMapBuilder)})},
args: [],
source: "numberOfCities\x0a\x09^ cities size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROMapBuilder)})},
args: [],
source: "open\x0a\x09^ view open",
messageSends: ["open"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pib",
category: 'adding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[["UnitedStates", (16244)], ["China", (12261)], ["India", (4716)], ["Japan", (4575)], ["Germany", (3167)], ["Russia", (2486)], ["Brazil", (2330)], ["France", (2252)], ["Italy", (1813)], ["Mexico", (1758)], ["SouthKorea", (1622)], ["Canada", (1446)], ["Spain", (1407)], ["Indonesia", (1212)], ["Iran", (988)], ["Australia", (961)], ["Taiwan", (902)], ["Poland", (802)], ["Argentina", (747)], ["SaudiArabia", (741)], ["Netherlands", (710)], ["Thailand", (646)], ["SouthAfrica", (579)], ["Egypt", (538)], ["Pakistan", (515)], ["Colombia", (500)], ["Malaysia", (492)], ["Nigeria", (451)], ["Belgium", (421)], ["Venezuela", (402)], ["Sweden", (396)], ["Switzerland", (362)], ["Austria", (359)], ["Ukraine", (335)], ["Peru", (325)], ["Vietnam", (320)], ["Chile", (319)], ["Bangladesh", (306)], ["Greece", (281)], ["Norway", (278)], ["Algeria", (274)], ["Romania", (274)], ["UnitedArabEmirates", (271)], ["Israel", (248)], ["Portugal", (245)], ["Kazakhstan", (232)], ["Denmark", (210)], ["Finland", (198)], ["Hungary", (197)], ["Ireland", (191)], ["Qatar", (189)], ["Morocco", (171)], ["Kuwait", (166)], ["Iraq", (155)], ["Belarus", (150)], ["Ecuador", (135)], ["NewZealand", (129)], ["Angola", (126)], ["SriLanka", (126)], ["Tunisia", (104)], ["Uzbekistan", (103)], ["Bulgaria", (103)], ["Ethiopia", (103)], ["DominicanRepublic", (99)], ["Azerbaijan", (98)], ["Oman", (91)], ["Libya", (88)], ["Ghana", (83)], ["Sudan", (80)], ["Croatia", (79)], ["Serbia", (79)], ["Guatemala", (78)], ["Kenya", (76)], ["Tanzania", (74)], ["Lithuania", (64)], ["Lebanon", (63)], ["CostaRica", (59)], ["Yemen", (57)], ["Panama", (56)], ["Bolivia", (54)], ["Uruguay", (53)], ["Uganda", (51)], ["Cameroon", (50)], ["Turkmenistan", (48)], ["ElSalvador", (46)], ["Luxembourg", (42)], ["Paraguay", (40)], ["Nepal", (40)], ["Jordan", (38)], ["Honduras", (38)], ["Latvia", (37)], ["Cambodia", (36)], ["BosniaandHerzegovina", (32)], ["Afghanistan", (31)], ["Botswana", (31)], ["Estonia", (28)], ["EquatorialGuinea", (28)], ["Gabon", (26)], ["Georgia", (26)], ["Senegal", (26)], ["Mozambique", (26)], ["Albania", (25)], ["BurkinaFaso", (24)], ["Zambia", (23)], ["Cyprus", (23)], ["BruneiDarussalam", (21)], ["Madagascar", (21)], ["Chad", (21)], ["Nicaragua", (19)], ["Laos", (19)], ["Armenia", (19)], ["PapuaNewGuinea", (18)], ["Tajikistan", (17)], ["Mali", (17)], ["Benin", (15)], ["Mongolia", (15)], ["Rwanda", (14)], ["Malawi", (14)], ["Niger", (13)], ["Kyrgyzstan", (13)], ["Haiti", (13)], ["Iceland", (13)], ["Moldova", (12)], ["Guinea", (12)], ["SierraLeone", (8)], ["Mauritania", (7)], ["Zimbabwe", (6)], ["Togo", (6)], ["Suriname", (6)], ["Guyana", (6)], ["Swaziland", (6)], ["Burundi", (5)], ["Bhutan", (4)], ["Eritrea", (4)], ["Fiji", (4)], ["Lesotho", (3)], ["CentralAfricanRepublic", (3)], ["Belize", (2)], ["Liberia", (2)], ["Djibouti", (2)], ["SolomonIslands", (1)], ["Vanuatu", (1)]];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pib",{},smalltalk.ROMapBuilder)})},
args: [],
source: "pib\x0a\x09^ #(#('UnitedStates' 16244) #('China' 12261) #('India' 4716) #('Japan' 4575) #('Germany' 3167) #('Russia' 2486) #('Brazil' 2330) #('France' 2252) #('Italy' 1813) #('Mexico' 1758) #('SouthKorea' 1622) #('Canada' 1446) #('Spain' 1407) #('Indonesia' 1212) #('Iran' 988) #('Australia' 961) #('Taiwan' 902) #('Poland' 802) #('Argentina' 747) #('SaudiArabia' 741) #('Netherlands' 710) #('Thailand' 646) #('SouthAfrica' 579) #('Egypt' 538) #('Pakistan' 515) #('Colombia' 500) #('Malaysia' 492) #('Nigeria' 451) #('Belgium' 421) #('Venezuela' 402) #('Sweden' 396) #('Switzerland' 362) #('Austria' 359) #('Ukraine' 335) #('Peru' 325) #('Vietnam' 320) #('Chile' 319) #('Bangladesh' 306) #('Greece' 281) #('Norway' 278) #('Algeria' 274) #('Romania' 274) #('UnitedArabEmirates' 271) #('Israel' 248) #('Portugal' 245) #('Kazakhstan' 232) #('Denmark' 210) #('Finland' 198) #('Hungary' 197) #('Ireland' 191) #('Qatar' 189) #('Morocco' 171) #('Kuwait' 166) #('Iraq' 155) #('Belarus' 150) #('Ecuador' 135) #('NewZealand' 129) #('Angola' 126) #('SriLanka' 126) #('Tunisia' 104) #('Uzbekistan' 103) #('Bulgaria' 103) #('Ethiopia' 103) #('DominicanRepublic' 99) #('Azerbaijan' 98) #('Oman' 91) #('Libya' 88) #('Ghana' 83) #('Sudan' 80) #('Croatia' 79) #('Serbia' 79) #('Guatemala' 78) #('Kenya' 76) #('Tanzania' 74) #('Lithuania' 64) #('Lebanon' 63) #('CostaRica' 59) #('Yemen' 57) #('Panama' 56) #('Bolivia' 54) #('Uruguay' 53) #('Uganda' 51) #('Cameroon' 50) #('Turkmenistan' 48) #('ElSalvador' 46) #('Luxembourg' 42) #('Paraguay' 40) #('Nepal' 40) #('Jordan' 38) #('Honduras' 38) #('Latvia' 37) #('Cambodia' 36) #('BosniaandHerzegovina' 32) #('Afghanistan' 31) #('Botswana' 31) #('Estonia' 28) #('EquatorialGuinea' 28) #('Gabon' 26) #('Georgia' 26) #('Senegal' 26) #('Mozambique' 26) #('Albania' 25) #('BurkinaFaso' 24) #('Zambia' 23) #('Cyprus' 23) #('BruneiDarussalam' 21) #('Madagascar' 21) #('Chad' 21) #('Nicaragua' 19) #('Laos' 19) #('Armenia' 19) #('PapuaNewGuinea' 18) #('Tajikistan' 17) #('Mali' 17) #('Benin' 15) #('Mongolia' 15) #('Rwanda' 14) #('Malawi' 14) #('Niger' 13) #('Kyrgyzstan' 13) #('Haiti' 13) #('Iceland' 13) #('Moldova' 12) #('Guinea' 12) #('SierraLeone' 8) #('Mauritania' 7) #('Zimbabwe' 6) #('Togo' 6) #('Suriname' 6) #('Guyana' 6) #('Swaziland' 6) #('Burundi' 5) #('Bhutan' 4) #('Eritrea' 4) #('Fiji' 4) #('Lesotho' 3) #('CentralAfricanRepublic' 3) #('Belize' 2) #('Liberia' 2) #('Djibouti' 2) #('SolomonIslands' 1) #('Vanuatu' 1))",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
category: 'accessing',
fn: function (aCityName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cities"])._at_(aCityName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aCityName:aCityName},smalltalk.ROMapBuilder)})},
args: ["aCityName"],
source: "positionOf: aCityName\x0a\x09^ cities at: aCityName",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
function $ROCityShapeBuilder(){return smalltalk.ROCityShapeBuilder||(typeof ROCityShapeBuilder=="undefined"?nil:ROCityShapeBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@shapeBuilder"]=_st($ROCityShapeBuilder())._new();
$1=self["@shapeBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROMapBuilder)})},
args: [],
source: "shape\x0a\x09shapeBuilder := ROCityShapeBuilder new.\x0a\x09^ shapeBuilder",
messageSends: ["new"],
referencedClasses: ["ROCityShapeBuilder"]
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "translateGeoPositionIntoPixelsPosition2:",
category: 'utility',
fn: function (point){
var self=this;
var longitud,latitud,mapWidth,mapHeight;
return smalltalk.withContext(function($ctx1) { 
var $1;
longitud=_st(point)._x();
latitud=_st(point)._y();
mapWidth=(977);
mapHeight=(378);
$1=_st(_st(_st(mapWidth).__slash((360))).__star((180).__plus(longitud))).__at(_st(_st(mapHeight).__slash((180))).__star((90).__minus(latitud)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateGeoPositionIntoPixelsPosition2:",{point:point,longitud:longitud,latitud:latitud,mapWidth:mapWidth,mapHeight:mapHeight},smalltalk.ROMapBuilder)})},
args: ["point"],
source: "translateGeoPositionIntoPixelsPosition2: point\x0a\x09\x22From http://stackoverflow.com/questions/1369512/converting-longitude-latitude-to-x-y-on-a-map-with-calibration-points\x22\x0a\x09| longitud latitud mapWidth mapHeight |\x0a\x09longitud := point x.\x0a\x09latitud := point y.\x0a\x0a\x09mapWidth := 977.\x0a\x09mapHeight := 378.\x0a\x09\x0a\x09^ ((mapWidth/360.0) * (180 + longitud)) @ ((mapHeight/180.0) * (90 - latitud))",
messageSends: ["x", "y", "@", "*", "-", "/", "+"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "translateGeoPositionIntoPixelsPosition:",
category: 'utility',
fn: function (point){
var self=this;
var longitud,latitud,xFactor,xoffset,yFactor,yoffset;
return smalltalk.withContext(function($ctx1) { 
var $1;
latitud=_st(point)._x();
longitud=_st(point)._y();
xFactor=(2.6938);
xoffset=(465.4);
yFactor=(-2.6938);
yoffset=(227.066);
$1=_st(_st(_st(longitud).__star(xFactor)).__plus(xoffset)).__at(_st(_st(latitud).__star(yFactor)).__plus(yoffset));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateGeoPositionIntoPixelsPosition:",{point:point,longitud:longitud,latitud:latitud,xFactor:xFactor,xoffset:xoffset,yFactor:yFactor,yoffset:yoffset},smalltalk.ROMapBuilder)})},
args: ["point"],
source: "translateGeoPositionIntoPixelsPosition: point\x0a\x09\x22From https://github.com/thebyrd/world-news\x22\x0a\x09\x0a\x09| longitud latitud xFactor xoffset yFactor yoffset |\x0a\x09latitud := point x.\x0a\x09longitud := point y.\x0a\x09\x0a\x09xFactor := 2.6938.\x0a\x09xoffset := 465.4.\x0a\x09\x0a\x09yFactor := -2.6938.\x0a\x09yoffset := 227.066.\x0a\x09^ ((longitud * xFactor) + xoffset) @ ((latitud * yFactor) + yoffset)",
messageSends: ["x", "y", "@", "+", "*"],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROMapBuilder)})},
args: [],
source: "view\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'adding',
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aROView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aROView:aROView},smalltalk.ROMapBuilder)})},
args: ["aROView"],
source: "view: aROView\x0a\x09view := aROView\x09\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMapBuilder);



