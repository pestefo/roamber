smalltalk.addPackage('RoassalExtras-Geo');
smalltalk.addClass('ROCityShapeBuilder', smalltalk.ROObject, ['shape', 'withLabel', 'size', 'color'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "addLabelFor:inView:",
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
messageSends: ["elementOn:", "asString", "model", "add:", "move:above:", "width", "bounds", "translateBy:", "+", "/", "@", "negated", "x", "extent"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "buildCityNamed:using:",
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
messageSends: ["on:", "new", "size:", "color:", "+", "copy", "add:", "view", "roValue:", "positionOf:", "translateTo:", "-", "/", "@", "translateGeoPositionIntoPixelsPosition:", "ifTrue:", "addLabelFor:inView:"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "buildRouteFromCityNamed:toCityNamed:using:",
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
messageSends: ["from:to:", "elementFromModel:", "view", "+", "copy", "add:"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
fn: function (){
var self=this;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($ROEllipse())._new();
self._initShape();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{},smalltalk.ROCityShapeBuilder)})},
messageSends: ["new", "initShape"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROCityShapeBuilder)})},
messageSends: []}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColorOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColorOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColorOrAOneArgBlock:aColorOrAOneArgBlock},smalltalk.ROCityShapeBuilder)})},
messageSends: []}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultCitySize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (15);
}, function($ctx1) {$ctx1.fill(self,"defaultCitySize",{},smalltalk.ROCityShapeBuilder)})},
messageSends: []}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initLineShape",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._lightGray();
_st(self["@shape"])._color_(self["@color"]);
_st(self["@shape"])._width_((3));
return self}, function($ctx1) {$ctx1.fill(self,"initLineShape",{},smalltalk.ROCityShapeBuilder)})},
messageSends: ["lightGray", "color:", "width:"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initShape",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._red();
_st(self["@shape"])._color_(self["@color"]);
_st(self["@shape"])._size_((15));
return self}, function($ctx1) {$ctx1.fill(self,"initShape",{},smalltalk.ROCityShapeBuilder)})},
messageSends: ["red", "color:", "size:"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCityShapeBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self._circle();
self["@withLabel"]=false;
self["@size"]=self._defaultCitySize();
self._initShape();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCityShapeBuilder)})},
messageSends: ["initialize", "circle", "defaultCitySize", "initShape"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
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
messageSends: ["new", "initLineShape"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linearFillColor:",
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
messageSends: ["ifTrue:ifFalse:", "attributeAt:", "view", "attributeAt:put:", "maxValue:", "collect:", "elements", "includesKey:", "attributes", "gray256:", "-", "max:in:", "to:", "roValue:", "model"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
fn: function (){
var self=this;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($ROBox())._new();
self._initShape();
return self}, function($ctx1) {$ctx1.fill(self,"rectangle",{},smalltalk.ROCityShapeBuilder)})},
messageSends: ["new", "initShape"]}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@size"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.ROCityShapeBuilder)})},
messageSends: []}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (aSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@size"]=aSize;
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aSize:aSize},smalltalk.ROCityShapeBuilder)})},
messageSends: []}),
smalltalk.ROCityShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "withLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@withLabel"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"withLabel",{},smalltalk.ROCityShapeBuilder)})},
messageSends: []}),
smalltalk.ROCityShapeBuilder);



smalltalk.addClass('ROInteractionBuilder', smalltalk.ROObject, ['selfDefinedInteraction'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "action:",
fn: function (aBlockOrSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._item_action_(_st(aBlockOrSymbol)._printString(),aBlockOrSymbol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"action:",{aBlockOrSymbol:aBlockOrSymbol},smalltalk.ROInteractionBuilder)})},
messageSends: ["item:action:", "printString"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "applyToElement:",
fn: function (roElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selfDefinedInteraction"])._do_((function(int){
return smalltalk.withContext(function($ctx2) {
return _st(int)._value_(roElement);
}, function($ctx2) {$ctx2.fillBlock({int:int},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"applyToElement:",{roElement:roElement},smalltalk.ROInteractionBuilder)})},
messageSends: ["do:", "value:"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightWhenOver:color:",
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
messageSends: ["on:do:", "elementsFromModels:", "roValue:", "model", "element", "view", "highlightElements:color:", "asSet", "unhighlightElements:"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROInteractionBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@selfDefinedInteraction"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROInteractionBuilder)})},
messageSends: ["initialize", "new"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "noPopup",
fn: function (){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@selfDefinedInteraction"])._add_((function(listOfElements){
return smalltalk.withContext(function($ctx2) {
return _st(listOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx3) {
return _st(element)._removeInteraction_($ROPopup());
}, function($ctx3) {$ctx3.fillBlock({element:element},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({listOfElements:listOfElements},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"noPopup",{},smalltalk.ROInteractionBuilder)})},
messageSends: ["add:", "do:", "removeInteraction:"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfDefinedInteractions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selfDefinedInteraction"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfDefinedInteractions",{},smalltalk.ROInteractionBuilder)})},
messageSends: ["size"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (event,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selfDefinedInteraction"])._add_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._on_do_(event,block);
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{event:event,block:block},smalltalk.ROInteractionBuilder)})},
messageSends: ["add:", "on:do:"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupText",
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
messageSends: ["popupText:", "ifTrue:ifFalse:", "printString", "==", "class"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupText:",
fn: function (aBlockOrSelector){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selfDefinedInteraction"])._add_((function(element){
var int;
return smalltalk.withContext(function($ctx2) {
int=_st($ROPopup())._text_(aBlockOrSelector);
int;
_st(int)._textColor_(_st($Color())._black());
return _st(element)._changeInteraction_for_($ROPopup(),int);
}, function($ctx2) {$ctx2.fillBlock({element:element,int:int},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupText:",{aBlockOrSelector:aBlockOrSelector},smalltalk.ROInteractionBuilder)})},
messageSends: ["add:", "text:", "textColor:", "black", "changeInteraction:for:"]}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupView:",
fn: function (aTwoArgsBlock){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROPopupView(){return smalltalk.ROPopupView||(typeof ROPopupView=="undefined"?nil:ROPopupView)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@selfDefinedInteraction"])._add_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._changeInteraction_for_($ROPopup(),_st(_st($ROPopupView())._new())._view_((function(anElement){
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
messageSends: ["add:", "changeInteraction:for:", "view:", "new", "value:value:", "model"]}),
smalltalk.ROInteractionBuilder);



smalltalk.addClass('ROMapBuilder', smalltalk.ROObject, ['view', 'cities', 'shapeBuilder', 'interactionBuilder'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "allCountries",
fn: function (){
var self=this;
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROSVGPath())._countries())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._country_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allCountries",{},smalltalk.ROMapBuilder)})},
messageSends: ["do:", "country:", "countries"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cities:",
fn: function (cityNames){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(cityNames)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._cityWithoutResetting_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cities:",{cityNames:cityNames},smalltalk.ROMapBuilder)})},
messageSends: ["do:", "cityWithoutResetting:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "city:",
fn: function (aCityName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._cityWithoutResetting_(aCityName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"city:",{aCityName:aCityName},smalltalk.ROMapBuilder)})},
messageSends: ["cityWithoutResetting:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "city:position:",
fn: function (aCityName,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cities"])._at_put_(aCityName,aPoint);
self._city_(aCityName);
return self}, function($ctx1) {$ctx1.fill(self,"city:position:",{aCityName:aCityName,aPoint:aPoint},smalltalk.ROMapBuilder)})},
messageSends: ["at:put:", "city:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "cityWithoutResetting:",
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
messageSends: ["buildCityNamed:using:", "applyToElement:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "countries:",
fn: function (countryNames){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(countryNames)._do_((function(name){
return smalltalk.withContext(function($ctx2) {
return self._country_(name);
}, function($ctx2) {$ctx2.fillBlock({name:name},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"countries:",{countryNames:countryNames},smalltalk.ROMapBuilder)})},
messageSends: ["do:", "country:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "country:",
fn: function (aCountryName){
var self=this;
var symbol;
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
function $ROPath(){return smalltalk.ROPath||(typeof ROPath=="undefined"?nil:ROPath)}
return smalltalk.withContext(function($ctx1) { 
symbol=_st(aCountryName)._asSymbol();
_st(self["@view"])._add_(_st(_st($ROPath())._path_(_st($ROSVGPath())._perform_(symbol)))._elementOn_(symbol));
return self}, function($ctx1) {$ctx1.fill(self,"country:",{aCountryName:aCountryName,symbol:symbol},smalltalk.ROMapBuilder)})},
messageSends: ["asSymbol", "add:", "elementOn:", "path:", "perform:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFrom:toAll:",
fn: function (aCityName,cityNames){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(cityNames)._do_((function(toCityName){
return smalltalk.withContext(function($ctx2) {
return _st(self["@shapeBuilder"])._buildRouteFromCityNamed_toCityNamed_using_(aCityName,toCityName,self);
}, function($ctx2) {$ctx2.fillBlock({toCityName:toCityName},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"edgesFrom:toAll:",{aCityName:aCityName,cityNames:cityNames},smalltalk.ROMapBuilder)})},
messageSends: ["do:", "buildRouteFromCityNamed:toCityNamed:using:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example",
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
messageSends: ["new", "country:", "cities:", "open"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($ROMapBuilder())._new();
_st(builder)._countries_(["UnitedStates", "Canada"]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{builder:builder},smalltalk.ROMapBuilder)})},
messageSends: ["new", "countries:", "open"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
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
messageSends: ["new", "country:", "cities:", "open"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example4",
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
messageSends: ["new", "countries:", "cities:", "open"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example5",
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
messageSends: ["new", "countries:", "size:", "circle", "shape", "color:", "alpha:", "red", "popupText", "interaction", "cities:", "city:position:", "@", "width:", "line", "blue", "edgesFrom:toAll:", "open"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initInteractionBuilder",
fn: function (){
var self=this;
function $ROInteractionBuilder(){return smalltalk.ROInteractionBuilder||(typeof ROInteractionBuilder=="undefined"?nil:ROInteractionBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@interactionBuilder"]=_st($ROInteractionBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initInteractionBuilder",{},smalltalk.ROMapBuilder)})},
messageSends: ["new"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initShapeBuilder",
fn: function (){
var self=this;
function $ROCityShapeBuilder(){return smalltalk.ROCityShapeBuilder||(typeof ROCityShapeBuilder=="undefined"?nil:ROCityShapeBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@shapeBuilder"]=_st($ROCityShapeBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initShapeBuilder",{},smalltalk.ROMapBuilder)})},
messageSends: ["new"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "initializeCities", "initShapeBuilder", "initInteractionBuilder", "new"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCities",
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
messageSends: ["new", "at:put:", "@"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interaction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interactionBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interaction",{},smalltalk.ROMapBuilder)})},
messageSends: []}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfCities",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cities"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfCities",{},smalltalk.ROMapBuilder)})},
messageSends: ["size"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROMapBuilder)})},
messageSends: ["open"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[["UnitedStates", (16244)], ["China", (12261)], ["India", (4716)], ["Japan", (4575)], ["Germany", (3167)], ["Russia", (2486)], ["Brazil", (2330)], ["France", (2252)], ["Italy", (1813)], ["Mexico", (1758)], ["SouthKorea", (1622)], ["Canada", (1446)], ["Spain", (1407)], ["Indonesia", (1212)], ["Iran", (988)], ["Australia", (961)], ["Taiwan", (902)], ["Poland", (802)], ["Argentina", (747)], ["SaudiArabia", (741)], ["Netherlands", (710)], ["Thailand", (646)], ["SouthAfrica", (579)], ["Egypt", (538)], ["Pakistan", (515)], ["Colombia", (500)], ["Malaysia", (492)], ["Nigeria", (451)], ["Belgium", (421)], ["Venezuela", (402)], ["Sweden", (396)], ["Switzerland", (362)], ["Austria", (359)], ["Ukraine", (335)], ["Peru", (325)], ["Vietnam", (320)], ["Chile", (319)], ["Bangladesh", (306)], ["Greece", (281)], ["Norway", (278)], ["Algeria", (274)], ["Romania", (274)], ["UnitedArabEmirates", (271)], ["Israel", (248)], ["Portugal", (245)], ["Kazakhstan", (232)], ["Denmark", (210)], ["Finland", (198)], ["Hungary", (197)], ["Ireland", (191)], ["Qatar", (189)], ["Morocco", (171)], ["Kuwait", (166)], ["Iraq", (155)], ["Belarus", (150)], ["Ecuador", (135)], ["NewZealand", (129)], ["Angola", (126)], ["SriLanka", (126)], ["Tunisia", (104)], ["Uzbekistan", (103)], ["Bulgaria", (103)], ["Ethiopia", (103)], ["DominicanRepublic", (99)], ["Azerbaijan", (98)], ["Oman", (91)], ["Libya", (88)], ["Ghana", (83)], ["Sudan", (80)], ["Croatia", (79)], ["Serbia", (79)], ["Guatemala", (78)], ["Kenya", (76)], ["Tanzania", (74)], ["Lithuania", (64)], ["Lebanon", (63)], ["CostaRica", (59)], ["Yemen", (57)], ["Panama", (56)], ["Bolivia", (54)], ["Uruguay", (53)], ["Uganda", (51)], ["Cameroon", (50)], ["Turkmenistan", (48)], ["ElSalvador", (46)], ["Luxembourg", (42)], ["Paraguay", (40)], ["Nepal", (40)], ["Jordan", (38)], ["Honduras", (38)], ["Latvia", (37)], ["Cambodia", (36)], ["BosniaandHerzegovina", (32)], ["Afghanistan", (31)], ["Botswana", (31)], ["Estonia", (28)], ["EquatorialGuinea", (28)], ["Gabon", (26)], ["Georgia", (26)], ["Senegal", (26)], ["Mozambique", (26)], ["Albania", (25)], ["BurkinaFaso", (24)], ["Zambia", (23)], ["Cyprus", (23)], ["BruneiDarussalam", (21)], ["Madagascar", (21)], ["Chad", (21)], ["Nicaragua", (19)], ["Laos", (19)], ["Armenia", (19)], ["PapuaNewGuinea", (18)], ["Tajikistan", (17)], ["Mali", (17)], ["Benin", (15)], ["Mongolia", (15)], ["Rwanda", (14)], ["Malawi", (14)], ["Niger", (13)], ["Kyrgyzstan", (13)], ["Haiti", (13)], ["Iceland", (13)], ["Moldova", (12)], ["Guinea", (12)], ["SierraLeone", (8)], ["Mauritania", (7)], ["Zimbabwe", (6)], ["Togo", (6)], ["Suriname", (6)], ["Guyana", (6)], ["Swaziland", (6)], ["Burundi", (5)], ["Bhutan", (4)], ["Eritrea", (4)], ["Fiji", (4)], ["Lesotho", (3)], ["CentralAfricanRepublic", (3)], ["Belize", (2)], ["Liberia", (2)], ["Djibouti", (2)], ["SolomonIslands", (1)], ["Vanuatu", (1)]];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pib",{},smalltalk.ROMapBuilder)})},
messageSends: []}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
fn: function (aCityName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cities"])._at_(aCityName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aCityName:aCityName},smalltalk.ROMapBuilder)})},
messageSends: ["at:"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function (){
var self=this;
function $ROCityShapeBuilder(){return smalltalk.ROCityShapeBuilder||(typeof ROCityShapeBuilder=="undefined"?nil:ROCityShapeBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@shapeBuilder"]=_st($ROCityShapeBuilder())._new();
$1=self["@shapeBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROMapBuilder)})},
messageSends: ["new"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "translateGeoPositionIntoPixelsPosition2:",
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
messageSends: ["x", "y", "@", "*", "-", "/", "+"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "translateGeoPositionIntoPixelsPosition:",
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
messageSends: ["x", "y", "@", "+", "*"]}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROMapBuilder)})},
messageSends: []}),
smalltalk.ROMapBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aROView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aROView:aROView},smalltalk.ROMapBuilder)})},
messageSends: []}),
smalltalk.ROMapBuilder);



