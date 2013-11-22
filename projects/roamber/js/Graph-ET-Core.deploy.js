smalltalk.addPackage('Graph-ET-Core');
smalltalk.addClass('GETAbstractDiagram', smalltalk.Object, ['models', 'elements', 'extraElements', 'width', 'height', 'minValue', 'color', 'interactions', 'values', 'colorNormalizer', 'axiCollection', 'maxValue', 'titleLabel'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addAxisToView:",
fn: function (rawView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._axiCollection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(rawView)._addAll_(_st(each)._elements());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAxisToView:",{rawView:rawView},smalltalk.GETAbstractDiagram)})},
messageSends: ["do:", "addAll:", "elements", "axiCollection"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addElementsToView:",
fn: function (rawView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=rawView;
_st($1)._addAll_(self._extraElements());
$2=_st($1)._addAll_(self._roElements());
return self}, function($ctx1) {$ctx1.fill(self,"addElementsToView:",{rawView:rawView},smalltalk.GETAbstractDiagram)})},
messageSends: ["addAll:", "extraElements", "roElements"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteractions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._roElements())._reject_((function(ele){
return smalltalk.withContext(function($ctx3) {
return _st(_st(ele)._model())._isNil();
}, function($ctx3) {$ctx3.fillBlock({ele:ele},$ctx2)})})))._do_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addInteractions",{},smalltalk.GETAbstractDiagram)})},
messageSends: ["do:", "reject:", "isNil", "model", "roElements"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addTitle:",
fn: function (aROView){
var self=this;
var label;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._titleLabel())._isNil();
if(! smalltalk.assert($1)){
label=_st($ROLabel())._elementOn_(self._titleLabel());
label;
_st(label)._translateTo_(_st(_st(_st(self._width()).__minus(_st(label)._width())).__slash((2))).__at((-30)));
_st(aROView)._add_(label);
};
return self}, function($ctx1) {$ctx1.fill(self,"addTitle:",{aROView:aROView,label:label},smalltalk.GETAbstractDiagram)})},
messageSends: ["ifFalse:", "elementOn:", "titleLabel", "translateTo:", "@", "/", "-", "width", "add:", "isNil"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "axiCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@axiCollection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"axiCollection",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "axiCollection:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@axiCollection"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"axiCollection:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isColor();
if(smalltalk.assert($1)){
self["@color"]=(function(x){
return smalltalk.withContext(function($ctx2) {
return anObject;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})});
self["@color"];
} else {
self["@color"]=anObject;
self["@color"];
};
return self}, function($ctx1) {$ctx1.fill(self,"color:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: ["ifTrue:ifFalse:", "isColor"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
fn: function (anElement){
var self=this;
var aColor;
function $RONIdentityNormalizer(){return smalltalk.RONIdentityNormalizer||(typeof RONIdentityNormalizer=="undefined"?nil:RONIdentityNormalizer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$1;
aColor=_st(self._color())._value_(_st(anElement)._model());
$2=_st(aColor)._isColor();
if(smalltalk.assert($2)){
$1=aColor;
} else {
$3=self._colorNormalizer();
if(($receiver = $3) == nil || $receiver == undefined){
$4=_st($RONIdentityNormalizer())._new();
_st($4)._command_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(self["@color"])._roValue_(_st(el)._model());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st($4)._setIndexTo_("blue");
$5=_st($4)._yourself();
self._colorNormalizer_($5);
} else {
$3;
};
$6=self._colorNormalizer();
return $6;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorFor:",{anElement:anElement,aColor:aColor},smalltalk.GETAbstractDiagram)})},
messageSends: ["value:", "model", "color", "ifTrue:ifFalse:", "ifNil:", "colorNormalizer:", "command:", "roValue:", "new", "setIndexTo:", "yourself", "colorNormalizer", "isColor"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "colorNormalizer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorNormalizer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorNormalizer",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "colorNormalizer:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorNormalizer"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"colorNormalizer:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "displayIn:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasModels();
if(smalltalk.assert($1)){
self._generateIn_(aView);
self._createAxis_(aView);
self._addTitle_(aView);
self._addInteractions();
};
return self}, function($ctx1) {$ctx1.fill(self,"displayIn:",{aView:aView},smalltalk.GETAbstractDiagram)})},
messageSends: ["ifTrue:", "generateIn:", "createAxis:", "addTitle:", "addInteractions", "hasModels"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (anInteraction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._add_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__at(anInteraction);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{anInteraction:anInteraction},smalltalk.GETAbstractDiagram)})},
messageSends: ["add:", "@"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "drawAxis:",
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aROView)._addAll_(self._axisElements());
return self}, function($ctx1) {$ctx1.fill(self,"drawAxis:",{aROView:aROView},smalltalk.GETAbstractDiagram)})},
messageSends: ["addAll:", "axisElements"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@elements"]=_st(self["@elements"])._reject_("isNil");
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.GETAbstractDiagram)})},
messageSends: ["reject:"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
fn: function (aROElementCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=aROElementCollection;
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{aROElementCollection:aROElementCollection},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "extraElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extraElements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extraElements",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "extraElements:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extraElements"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"extraElements:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._models())._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModels",{},smalltalk.GETAbstractDiagram)})},
messageSends: ["not", "isEmpty", "models"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETAbstractDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._models_(_st($OrderedCollection())._new());
self._values_(_st($OrderedCollection())._new());
self._elements_(_st($OrderedCollection())._new());
self._extraElements_(_st($OrderedCollection())._new());
self._interactions_(_st($OrderedCollection())._new());
self._axiCollection_(_st($OrderedCollection())._new());
self._height_(_st(self._class())._defaultHeight());
self._width_(_st(self._class())._defaultWidth());
self._color_(_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstractDiagram)})},
messageSends: ["initialize", "models:", "new", "values:", "elements:", "extraElements:", "interactions:", "axiCollection:", "height:", "defaultHeight", "class", "width:", "defaultWidth", "color:", "defaultColor"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "interactions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interactions"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interactions",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "interactions:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interactions"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"interactions:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "isGETDiagram",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isGETDiagram",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxValue"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"maxValue:",{aNumber:aNumber},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minValue"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"minValue:",{aNumber:aNumber},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "models",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@models"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"models",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "models:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@models"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"models:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (aROEvent,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._add_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._on_do_(aROEvent,aBlock);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{aROEvent:aROEvent,aBlock:aBlock},smalltalk.GETAbstractDiagram)})},
messageSends: ["add:", "on:do:"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "roElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elements())._select_thenCollect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isNil())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}),(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._roElement();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"roElements",{},smalltalk.GETAbstractDiagram)})},
messageSends: ["select:thenCollect:", "not", "isNil", "roElement", "elements"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setMaxAndMinValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._maxValue_(_st(_st(self._values())._max())._max_((0)));
self._minValue_(_st(_st(self._values())._min())._min_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"setMaxAndMinValues",{},smalltalk.GETAbstractDiagram)})},
messageSends: ["maxValue:", "max:", "max", "values", "minValue:", "min:", "min"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "titleLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@titleLabel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"titleLabel",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "titleLabel:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@titleLabel"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"titleLabel:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETAbstractDiagram)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@values"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "values:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@values"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"values:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
messageSends: []}),
smalltalk.GETAbstractDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._gray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.GETAbstractDiagram.klass)})},
messageSends: ["gray"]}),
smalltalk.GETAbstractDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (400);
}, function($ctx1) {$ctx1.fill(self,"defaultHeight",{},smalltalk.GETAbstractDiagram.klass)})},
messageSends: []}),
smalltalk.GETAbstractDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (400);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.GETAbstractDiagram.klass)})},
messageSends: []}),
smalltalk.GETAbstractDiagram.klass);


smalltalk.addClass('GETAbstract2DDiagram', smalltalk.GETAbstractDiagram, ['xAxisDecorators', 'yAxisDecorators', 'xAxis', 'yAxis', 'xAxisLabel', 'yAxisLabel'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addXDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._xAxis())._decorators())._add_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addXDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["add:", "decorators", "xAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addYDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._yAxis())._decorators())._add_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addYDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["add:", "decorators", "yAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "createAxis:",
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._scaleXAxis();
self._scaleYAxis();
self._setXAxisValues();
self._setYAxisValues();
self._setXAxisLabel();
self._setYAxisLabel();
self._setDecorators();
_st(self._axiCollection())._add_(self._xAxis());
_st(self._axiCollection())._add_(self._yAxis());
self._addAxisToView_(aROView);
return self}, function($ctx1) {$ctx1.fill(self,"createAxis:",{aROView:aROView},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["scaleXAxis", "scaleYAxis", "setXAxisValues", "setYAxisValues", "setXAxisLabel", "setYAxisLabel", "setDecorators", "add:", "xAxis", "axiCollection", "yAxis", "addAxisToView:"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $GETAxis(){return smalltalk.GETAxis||(typeof GETAxis=="undefined"?nil:GETAxis)}
function $GETLeftRightAxisStrategy(){return smalltalk.GETLeftRightAxisStrategy||(typeof GETLeftRightAxisStrategy=="undefined"?nil:GETLeftRightAxisStrategy)}
function $GETTopDownAxisStrategy(){return smalltalk.GETTopDownAxisStrategy||(typeof GETTopDownAxisStrategy=="undefined"?nil:GETTopDownAxisStrategy)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETAbstract2DDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._xAxis_(_st($GETAxis())._new());
self._yAxis_(_st($GETAxis())._new());
_st(self._xAxis())._strategy_(_st(_st($GETLeftRightAxisStrategy())._new())._on_(self._xAxis()));
_st(self._yAxis())._strategy_(_st(_st($GETTopDownAxisStrategy())._new())._on_(self._yAxis()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["initialize", "xAxis:", "new", "yAxis:", "strategy:", "on:", "xAxis", "yAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._from_to_((0).__at(self._height()),_st(self._width()).__at(self._height())));
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["xAxis:", "from:to:", "@", "height", "width", "xAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleYAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._yAxis_(_st(self._yAxis())._from_to_((0).__at((0)),(0).__at(self._height())));
return self}, function($ctx1) {$ctx1.fill(self,"scaleYAxis",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["yAxis:", "from:to:", "@", "height", "yAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setDecorators",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._xAxis())._decorators())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._decorate_(self._xAxis());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st(self._yAxis())._decorators())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._decorate_(self._yAxis());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setDecorators",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["do:", "decorate:", "xAxis", "decorators", "yAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setXAxisLabel",
fn: function (){
var self=this;
function $GETTitleDecorator(){return smalltalk.GETTitleDecorator||(typeof GETTitleDecorator=="undefined"?nil:GETTitleDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._xAxisLabel();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._xAxis())._label_(self["@xAxisLabel"]);
self._addXDecorator_(_st($GETTitleDecorator())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"setXAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["ifNotNil:", "label:", "xAxis", "addXDecorator:", "new", "xAxisLabel"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setXAxisValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._max_min_(self["@maxValue"],self["@minValue"]));
return self}, function($ctx1) {$ctx1.fill(self,"setXAxisValues",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["xAxis:", "max:min:", "xAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setYAxisLabel",
fn: function (){
var self=this;
function $GETTitleDecorator(){return smalltalk.GETTitleDecorator||(typeof GETTitleDecorator=="undefined"?nil:GETTitleDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._yAxisLabel();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self._yAxis())._label_(self["@yAxisLabel"]);
self._addYDecorator_(_st($GETTitleDecorator())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"setYAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["ifNotNil:", "label:", "yAxis", "addYDecorator:", "new", "yAxisLabel"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setYAxisValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._yAxis_(_st(self._yAxis())._max_min_(self["@maxValue"],self["@minValue"]));
return self}, function($ctx1) {$ctx1.fill(self,"setYAxisValues",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: ["yAxis:", "max:min:", "yAxis"]}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xAxis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xAxis",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxis:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xAxis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"xAxis:",{anObject:anObject},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxisLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xAxisLabel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxisLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xAxisLabel"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"xAxisLabel:",{aString:aString},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@yAxis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"yAxis",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxis:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@yAxis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"yAxis:",{anObject:anObject},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxisLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@yAxisLabel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"yAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxisLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@yAxisLabel"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"yAxisLabel:",{aString:aString},smalltalk.GETAbstract2DDiagram)})},
messageSends: []}),
smalltalk.GETAbstract2DDiagram);



smalltalk.addClass('GETPieDiagram', smalltalk.GETAbstract2DDiagram, ['radius', 'lineColor'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
var body,center,angles,edges,rad;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
rad=self._radius();
$1=_st($ROEllipse())._new();
_st($1)._size_((2).__star(rad));
_st($1)._color_(_st(_st($Color())._white())._alpha_((0.1)));
_st($1)._borderColor_(self._lineColor());
$2=_st($1)._borderWidth_((1));
body=_st(_st($ROElement())._new()).__plus($2);
$3=_st($ROElement())._new();
_st($3)._translateTo_(_st(rad).__at(rad));
$4=_st($3)._size_((0));
center=$4;
angles=self._getElementsFromModel();
edges=_st(angles)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROEdge())._from_to_(center,each)).__plus(_st(_st($ROLine())._new())._color_(self._lineColor()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$5=self._elements();
_st($5)._add_(body);
_st($5)._add_(center);
_st($5)._addAll_(angles);
$6=_st($5)._addAll_(edges);
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,body:body,center:center,angles:angles,edges:edges,rad:rad},smalltalk.GETPieDiagram)})},
messageSends: ["radius", "+", "size:", "*", "new", "color:", "alpha:", "white", "borderColor:", "lineColor", "borderWidth:", "translateTo:", "@", "getElementsFromModel", "collect:", "from:to:", "add:", "elements", "addAll:", "addElementsToView:"]}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModel",
fn: function (){
var self=this;
var angsum,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
rawElements=_st($ROElement())._forCollection_((1)._to_(_st(self._models())._size()));
angsum=(0);
$1=_st(rawElements)._with_do_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each).__slash(_st(self._models())._sum())).__star((360));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})),(function(ele,ang){
return smalltalk.withContext(function($ctx2) {
angsum=_st(angsum).__plus(ang);
angsum;
$2=ele;
_st($2)._translateTo_(_st(_st(self._radius()).__star(_st(_st(angsum)._degreeSin()).__plus((1)))).__at(_st(self._radius()).__star((1).__minus(_st(angsum)._degreeCos()))));
$3=_st($2)._size_((0));
return $3;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,ang:ang},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModel",{angsum:angsum,rawElements:rawElements},smalltalk.GETPieDiagram)})},
messageSends: ["forCollection:", "to:", "size", "models", "with:do:", "collect:", "*", "/", "sum", "+", "translateTo:", "@", "-", "degreeCos", "radius", "degreeSin", "size:"]}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETPieDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._radius_(_st(self._class())._defaultRadius());
self._lineColor_(_st(self._class())._defaultLineColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETPieDiagram)})},
messageSends: ["initialize", "radius:", "defaultRadius", "class", "lineColor:", "defaultLineColor"]}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "lineColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lineColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineColor",{},smalltalk.GETPieDiagram)})},
messageSends: []}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "lineColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@lineColor"]=aColor;
$1=self["@lineColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineColor:",{aColor:aColor},smalltalk.GETPieDiagram)})},
messageSends: []}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.GETPieDiagram)})},
messageSends: []}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
fn: function (aRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@radius"]=aRadius;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius:",{aRadius:aRadius},smalltalk.GETPieDiagram)})},
messageSends: []}),
smalltalk.GETPieDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultLineColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLineColor",{},smalltalk.GETPieDiagram.klass)})},
messageSends: ["black"]}),
smalltalk.GETPieDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (150);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.GETPieDiagram.klass)})},
messageSends: []}),
smalltalk.GETPieDiagram.klass);


smalltalk.addClass('GETScatterPlot', smalltalk.GETAbstract2DDiagram, ['x', 'y'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView},smalltalk.GETScatterPlot)})},
messageSends: []}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.GETScatterPlot)})},
messageSends: []}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
fn: function (newX){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=newX;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{newX:newX},smalltalk.GETScatterPlot)})},
messageSends: []}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.GETScatterPlot)})},
messageSends: []}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
fn: function (newY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=newY;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{newY:newY},smalltalk.GETScatterPlot)})},
messageSends: []}),
smalltalk.GETScatterPlot);



smalltalk.addClass('GETSingleAxisDiagram', smalltalk.GETAbstract2DDiagram, ['x', 'y'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "baseAxisLine",
fn: function (){
var self=this;
function $GETBaseLineDecorator(){return smalltalk.GETBaseLineDecorator||(typeof GETBaseLineDecorator=="undefined"?nil:GETBaseLineDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addBaseDecorator_(_st($GETBaseLineDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"baseAxisLine",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["addBaseDecorator:", "new"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETSingleAxisDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._x_(_st(self._class())._defaultProperty());
self._y_(_st(self._class())._defaultProperty());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["initialize", "x:", "defaultProperty", "class", "y:"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxis",
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._valueAxisLine();
self._baseAxisLine();
self._addValueDecorator_(_st($GETRegularTickDecorator())._new());
self._addValueDecorator_(_st($GETRegularLabelDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxis",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["valueAxisLine", "baseAxisLine", "addValueDecorator:", "new"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxisAsInteger",
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._valueAxisLine();
self._baseAxisLine();
self._addValueDecorator_(_st($GETRegularTickDecorator())._new());
self._addValueDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatInteger());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxisAsInteger",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["valueAxisLine", "baseAxisLine", "addValueDecorator:", "new", "formatInteger"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularLabels",
fn: function (){
var self=this;
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addValueDecorator_(_st($GETRegularLabelDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularLabels",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["addValueDecorator:", "new"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularTicks",
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addValueDecorator_(_st($GETRegularTickDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularTicks",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["addValueDecorator:", "new"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeInPixelsOfPositiveArea:",
fn: function (maxSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(_st(self._minValue()).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=maxSize;
return $2;
};
$3=_st(_st(self._minValue()).__lt_eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$4=_st(_st(maxSize).__star(self._maxValue())).__slash(_st(self._maxValue()).__plus(_st(self._minValue())._abs()));
return $4;
};
$5=_st(_st(self._minValue()).__lt_eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__lt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($5)){
return (0);
};
$6=self._error_("should not be here");
return $6;
}, function($ctx1) {$ctx1.fill(self,"sizeInPixelsOfPositiveArea:",{maxSize:maxSize},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["ifTrue:", "and:", ">", "maxValue", "minValue", "/", "+", "abs", "*", "<=", "error:"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "valueAxisLine",
fn: function (){
var self=this;
function $GETBaseLineDecorator(){return smalltalk.GETBaseLineDecorator||(typeof GETBaseLineDecorator=="undefined"?nil:GETBaseLineDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addValueDecorator_(_st($GETBaseLineDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"valueAxisLine",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: ["addValueDecorator:", "new"]}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: []}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{anObject:anObject},smalltalk.GETSingleAxisDiagram)})},
messageSends: []}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.GETSingleAxisDiagram)})},
messageSends: []}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{anObject:anObject},smalltalk.GETSingleAxisDiagram)})},
messageSends: []}),
smalltalk.GETSingleAxisDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultProperty",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "yourself";
}, function($ctx1) {$ctx1.fill(self,"defaultProperty",{},smalltalk.GETSingleAxisDiagram.klass)})},
messageSends: []}),
smalltalk.GETSingleAxisDiagram.klass);


smalltalk.addClass('GETAbstractBarDiagram', smalltalk.GETSingleAxisDiagram, ['spacing', 'barWidth', 'barGap'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "barWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@barWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"barWidth",{},smalltalk.GETAbstractBarDiagram)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "barWidth:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@barWidth"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"barWidth:",{aNumber:aNumber},smalltalk.GETAbstractBarDiagram)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETAbstractBarDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._barWidth_(_st(self._class())._defaultBarwidth());
self._spacing_(_st(self._class())._defaultSpacing());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstractBarDiagram)})},
messageSends: ["initialize", "barWidth:", "defaultBarwidth", "class", "spacing:", "defaultSpacing"]}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nonValuedParameter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self._values())._size()).__star(self._barWidth())).__plus(_st(_st(_st(self._values())._size()).__minus((1))).__star(self._spacing()))).__plus((2).__star(self._spacing()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonValuedParameter",{},smalltalk.GETAbstractBarDiagram)})},
messageSends: ["+", "*", "spacing", "-", "size", "values", "barWidth"]}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@spacing"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"spacing",{},smalltalk.GETAbstractBarDiagram)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@spacing"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"spacing:",{aNumber:aNumber},smalltalk.GETAbstractBarDiagram)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBarwidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"defaultBarwidth",{},smalltalk.GETAbstractBarDiagram.klass)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"defaultGap",{},smalltalk.GETAbstractBarDiagram.klass)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultSpacing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultSpacing",{},smalltalk.GETAbstractBarDiagram.klass)})},
messageSends: []}),
smalltalk.GETAbstractBarDiagram.klass);


smalltalk.addClass('GETHorizontalBarDiagram', smalltalk.GETAbstractBarDiagram, [], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["addYDecorator:"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["addXDecorator:"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
var bars;
return smalltalk.withContext(function($ctx1) { 
self._values_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._x())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
self._setMaxAndMinValues();
self._height_(smalltalk.GETHorizontalBarDiagram.superclass.fn.prototype._nonValuedParameter.apply(_st(self), []));
bars=self._getElementsFromModels();
_st(self._elements())._addAll_(bars);
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,bars:bars},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["values:", "collect:", "roValue:", "x", "models", "setMaxAndMinValues", "height:", "nonValuedParameter", "getElementsFromModels", "addAll:", "elements", "addElementsToView:"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
fn: function (){
var self=this;
var count,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$1;
rawElements=_st($ROElement())._forCollection_((1)._to_(_st(self._models())._size()));
count=(1);
$1=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var value;
return smalltalk.withContext(function($ctx2) {
value=self._getPixelsFromValue_(_st(self._x())._value_(model));
value;
_st(ele)._width_(_st(value)._abs());
$2=ele;
_st($2)._model_(model);
$3=_st($2)._translateTo_(_st(self._offsetFromAxis_(value)).__at(_st(_st(_st(self._spacing()).__plus(self._barWidth())).__star(count)).__minus(self._barWidth())));
$4=_st($ROBox())._new();
_st($4)._width_(_st(value)._abs());
_st($4)._height_(self._barWidth());
$5=_st($4)._color_(self._colorFor_(ele));
_st($3).__plus($5);
count=_st(count).__plus((1));
count;
$6=_st($GETDataObject())._new();
_st($6)._roElement_(ele);
_st($6)._value_(_st(self._x())._value_(model));
$7=_st($6)._isBig_(true);
return $7;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,value:value},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{count:count,rawElements:rawElements},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "getPixelsFromValue:", "value:", "x", "width:", "abs", "+", "new", "height:", "barWidth", "color:", "colorFor:", "model:", "translateTo:", "@", "-", "*", "spacing", "offsetFromAxis:", "roElement:", "isBig:"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
fn: function (value){
var self=this;
var semiresult;
return smalltalk.withContext(function($ctx1) { 
var $1;
semiresult=_st(_st(value).__star(self._width())).__slash(_st(self._maxValue()).__minus(self._minValue()));
$1=_st(semiresult)._roundUpTo_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value,semiresult:semiresult},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["/", "-", "minValue", "maxValue", "*", "width", "roundUpTo:"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetFromAxis:",
fn: function (amountOfPixels){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(amountOfPixels).__gt((0));
if(smalltalk.assert($2)){
$1=self._widthOfNegativeArea();
} else {
$1=_st(self._widthOfNegativeArea()).__plus(amountOfPixels);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"offsetFromAxis:",{amountOfPixels:amountOfPixels},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["ifTrue:ifFalse:", "widthOfNegativeArea", "+", ">"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleYAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._yAxis_(_st(self._yAxis())._from_to_(_st(self._widthOfNegativeArea()).__at((0)),_st(self._widthOfNegativeArea()).__at(self._nonValuedParameter())));
return self}, function($ctx1) {$ctx1.fill(self,"scaleYAxis",{},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["yAxis:", "from:to:", "@", "widthOfNegativeArea", "nonValuedParameter", "yAxis"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
fn: function (aBlock){
var self=this;
function $ROAnimatedResizing(){return smalltalk.ROAnimatedResizing||(typeof ROAnimatedResizing=="undefined"?nil:ROAnimatedResizing)}
return smalltalk.withContext(function($ctx1) { 
self._x_(aBlock);
_st(self["@elements"])._do_((function(each){
var newBounds,roElement,value;
return smalltalk.withContext(function($ctx2) {
roElement=_st(each)._roElement();
roElement;
value=_st(self["@x"])._value_(_st(roElement)._model());
value;
newBounds=_st(self._getPixelsFromValue_(value)).__at(self._barWidth());
newBounds;
_st(each)._value_(value);
return _st($ROAnimatedResizing())._for_resizeAndFixTopLeft_(roElement,newBounds);
}, function($ctx2) {$ctx2.fillBlock({each:each,newBounds:newBounds,roElement:roElement,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["x:", "do:", "roElement", "value:", "model", "@", "barWidth", "getPixelsFromValue:", "for:resizeAndFixTopLeft:"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfNegativeArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__minus(self._widthOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfNegativeArea",{},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["-", "widthOfPositiveArea", "width"]}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfPositiveArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfPositiveArea",{},smalltalk.GETHorizontalBarDiagram)})},
messageSends: ["sizeInPixelsOfPositiveArea:", "width"]}),
smalltalk.GETHorizontalBarDiagram);



smalltalk.addClass('GETVerticalBarDiagram', smalltalk.GETAbstractBarDiagram, [], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["addXDecorator:"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["addYDecorator:"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
var bars;
return smalltalk.withContext(function($ctx1) { 
self._values_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._y())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
self._setMaxAndMinValues();
self._width_(smalltalk.GETVerticalBarDiagram.superclass.fn.prototype._nonValuedParameter.apply(_st(self), []));
bars=self._getElementsFromModels();
_st(self._elements())._addAll_(bars);
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,bars:bars},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["values:", "collect:", "roValue:", "y", "models", "setMaxAndMinValues", "width:", "nonValuedParameter", "getElementsFromModels", "addAll:", "elements", "addElementsToView:"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
fn: function (){
var self=this;
var count,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$1;
rawElements=_st($ROElement())._forCollection_((1)._to_(_st(self._models())._size()));
count=(1);
$1=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var value;
return smalltalk.withContext(function($ctx2) {
value=self._getPixelsFromValue_(_st(self._y())._roValue_(model));
value;
_st(ele)._height_(_st(value)._abs());
$2=ele;
_st($2)._model_(model);
$3=_st($2)._translateTo_(_st(_st(_st(_st(self._spacing()).__plus(self._barWidth())).__star(count)).__minus(self._barWidth())).__at(self._offsetFromAxis_(value)));
$4=_st($ROBox())._new();
_st($4)._width_(self._barWidth());
_st($4)._height_(_st(value)._abs());
$5=_st($4)._color_(self._colorFor_(ele));
_st($3).__plus($5);
count=_st(count).__plus((1));
count;
$6=_st($GETDataObject())._new();
_st($6)._roElement_(ele);
_st($6)._value_(_st(self._y())._roValue_(model));
$7=_st($6)._isBig_(true);
return $7;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,value:value},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{count:count,rawElements:rawElements},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "getPixelsFromValue:", "roValue:", "y", "height:", "abs", "+", "width:", "barWidth", "new", "color:", "colorFor:", "model:", "translateTo:", "@", "offsetFromAxis:", "-", "*", "spacing", "roElement:", "value:", "isBig:"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
fn: function (value){
var self=this;
var semiresult;
return smalltalk.withContext(function($ctx1) { 
var $1;
semiresult=_st(_st(value).__star(self._height())).__slash(_st(self._maxValue()).__minus(self._minValue()));
$1=_st(semiresult)._roundUpTo_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value,semiresult:semiresult},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["/", "-", "minValue", "maxValue", "*", "height", "roundUpTo:"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfNegativeArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__minus(self._heightOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfNegativeArea",{},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["-", "heightOfPositiveArea", "height"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfPositiveArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfPositiveArea",{},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["sizeInPixelsOfPositiveArea:", "height"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetFromAxis:",
fn: function (amountOfPixels){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(amountOfPixels).__gt((0));
if(smalltalk.assert($2)){
$1=_st(self._heightOfPositiveArea()).__minus(amountOfPixels);
} else {
$1=self._heightOfPositiveArea();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"offsetFromAxis:",{amountOfPixels:amountOfPixels},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["ifTrue:ifFalse:", "-", "heightOfPositiveArea", ">"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._from_to_((0).__at(self._heightOfPositiveArea()),_st(self._nonValuedParameter()).__at(self._heightOfPositiveArea())));
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["xAxis:", "from:to:", "@", "heightOfPositiveArea", "nonValuedParameter", "xAxis"]}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
fn: function (aBlock){
var self=this;
function $ROAnimatedResizing(){return smalltalk.ROAnimatedResizing||(typeof ROAnimatedResizing=="undefined"?nil:ROAnimatedResizing)}
return smalltalk.withContext(function($ctx1) { 
self._y_(aBlock);
_st(self["@elements"])._do_((function(each){
var newBounds,roElement,value;
return smalltalk.withContext(function($ctx2) {
roElement=_st(each)._roElement();
roElement;
value=_st(self["@y"])._value_(_st(roElement)._model());
value;
newBounds=_st(self._barWidth()).__at(self._getPixelsFromValue_(value));
newBounds;
_st(each)._value_(value);
return _st($ROAnimatedResizing())._for_resizeAndFixBottomLeft_(roElement,newBounds);
}, function($ctx2) {$ctx2.fillBlock({each:each,newBounds:newBounds,roElement:roElement,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETVerticalBarDiagram)})},
messageSends: ["y:", "do:", "roElement", "value:", "model", "@", "getPixelsFromValue:", "barWidth", "for:resizeAndFixBottomLeft:"]}),
smalltalk.GETVerticalBarDiagram);



smalltalk.addClass('GETAbstractLineDiagram', smalltalk.GETSingleAxisDiagram, ['dotSize'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["addXDecorator:"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["addYDecorator:"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "dotSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dotSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dotSize",{},smalltalk.GETAbstractLineDiagram)})},
messageSends: []}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "dotSize:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dotSize"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"dotSize:",{anObject:anObject},smalltalk.GETAbstractLineDiagram)})},
messageSends: []}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
var dots;
return smalltalk.withContext(function($ctx1) { 
self._values_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._y())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
self._setMaxAndMinValues();
self._width_(self._nonValuedParameter());
dots=self._getElementsFromModels();
_st(self._elements())._addAll_(dots);
_st(self._extraElements())._addAll_(self._linesForElements_(self._roElements()));
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,dots:dots},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["values:", "collect:", "roValue:", "y", "models", "setMaxAndMinValues", "width:", "nonValuedParameter", "getElementsFromModels", "addAll:", "elements", "linesForElements:", "roElements", "extraElements", "addElementsToView:"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(value).__star(self._height())).__slash(_st(self._maxValue()).__minus(self._minValue()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["/", "-", "minValue", "maxValue", "*", "height"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfNegativeArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__minus(self._heightOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfNegativeArea",{},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["-", "heightOfPositiveArea", "height"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfPositiveArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfPositiveArea",{},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["sizeInPixelsOfPositiveArea:", "height"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETAbstractLineDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._dotSize_(_st(self._class())._defaultDotSize());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["initialize", "dotSize:", "defaultDotSize", "class"]}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "linesForElements:",
fn: function (rawElements){
var self=this;
var result,previous,edge,lineShape;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROCenteredAttachPoint(){return smalltalk.ROCenteredAttachPoint||(typeof ROCenteredAttachPoint=="undefined"?nil:ROCenteredAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
result=_st($OrderedCollection())._new();
previous=_st(rawElements)._first();
_st(_st(rawElements)._allButFirst())._doWithIndex_((function(el,index){
return smalltalk.withContext(function($ctx2) {
edge=_st($ROEdge())._from_to_(previous,el);
edge;
lineShape=_st($ROLine())._new();
lineShape;
_st(lineShape)._attachPoint_(_st($ROCenteredAttachPoint())._instance());
_st(edge).__plus(lineShape);
_st(result)._add_(edge);
previous=el;
return previous;
}, function($ctx2) {$ctx2.fillBlock({el:el,index:index},$ctx1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"linesForElements:",{rawElements:rawElements,result:result,previous:previous,edge:edge,lineShape:lineShape},smalltalk.GETAbstractLineDiagram)})},
messageSends: ["new", "first", "doWithIndex:", "from:to:", "attachPoint:", "instance", "+", "add:", "allButFirst"]}),
smalltalk.GETAbstractLineDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultDotSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (2);
}, function($ctx1) {$ctx1.fill(self,"defaultDotSize",{},smalltalk.GETAbstractLineDiagram.klass)})},
messageSends: []}),
smalltalk.GETAbstractLineDiagram.klass);


smalltalk.addClass('GETLineDiagram', smalltalk.GETAbstractLineDiagram, ['minXValue', 'xValues', 'maxXValue'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xValues_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._x())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
self._setMaxAndMinXValues();
smalltalk.GETLineDiagram.superclass.fn.prototype._generateIn_.apply(_st(self), [aView]);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView},smalltalk.GETLineDiagram)})},
messageSends: ["xValues:", "collect:", "roValue:", "x", "models", "setMaxAndMinXValues", "generateIn:"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
fn: function (){
var self=this;
var rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$1;
rawElements=_st($ROElement())._forCollection_((1)._to_(_st(self._models())._size()));
$1=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var dotX,dotY;
return smalltalk.withContext(function($ctx2) {
dotX=self._getPixelsFromXValue_(_st(self._x())._value_(model));
dotX;
dotY=self._getPixelsFromValue_(_st(self._y())._value_(model));
dotY;
$2=ele;
_st($2)._model_(model);
_st($2)._translateTo_(_st(dotX).__at(_st(self._heightOfPositiveArea()).__minus(dotY)));
$3=_st($2)._size_(self._dotSize());
$4=_st($ROEllipse())._new();
_st($4)._color_(self._colorFor_(ele));
_st($4)._width_(self._dotSize());
$5=_st($4)._height_(self._dotSize());
_st($3).__plus($5);
$6=_st($GETDataObject())._new();
_st($6)._roElement_(ele);
$7=_st($6)._value_(_st(self._y())._value_(model));
return $7;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,dotX:dotX,dotY:dotY},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{rawElements:rawElements},smalltalk.GETLineDiagram)})},
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "getPixelsFromXValue:", "value:", "x", "getPixelsFromValue:", "y", "+", "color:", "colorFor:", "new", "width:", "dotSize", "height:", "model:", "translateTo:", "@", "-", "heightOfPositiveArea", "size:", "roElement:"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromXValue:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(value).__star(self._width())).__slash(_st(self._maxXValue()).__minus(self._minXValue()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromXValue:",{value:value},smalltalk.GETLineDiagram)})},
messageSends: ["/", "-", "minXValue", "maxXValue", "*", "width"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxXValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxXValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxXValue",{},smalltalk.GETLineDiagram)})},
messageSends: []}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxXValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxXValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"maxXValue:",{anObject:anObject},smalltalk.GETLineDiagram)})},
messageSends: []}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minXValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minXValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minXValue",{},smalltalk.GETLineDiagram)})},
messageSends: []}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minXValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minXValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"minXValue:",{anObject:anObject},smalltalk.GETLineDiagram)})},
messageSends: []}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nonValuedParameter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonValuedParameter",{},smalltalk.GETLineDiagram)})},
messageSends: ["width"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxis",
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETLineDiagram.superclass.fn.prototype._regularAxis.apply(_st(self), []);
self._addBaseDecorator_(_st($GETRegularTickDecorator())._new());
self._addBaseDecorator_(_st($GETRegularLabelDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxis",{},smalltalk.GETLineDiagram)})},
messageSends: ["regularAxis", "addBaseDecorator:", "new"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxisAsInteger",
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETLineDiagram.superclass.fn.prototype._regularAxisAsInteger.apply(_st(self), []);
self._addBaseDecorator_(_st($GETRegularTickDecorator())._new());
self._addBaseDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatInteger());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxisAsInteger",{},smalltalk.GETLineDiagram)})},
messageSends: ["regularAxisAsInteger", "addBaseDecorator:", "new", "formatInteger"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._from_to_(_st(_st(self._widthOfNegativeArea())._negated()).__at(self._heightOfPositiveArea()),_st(self._widthOfPositiveArea()).__at(self._heightOfPositiveArea())));
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETLineDiagram)})},
messageSends: ["xAxis:", "from:to:", "@", "heightOfPositiveArea", "negated", "widthOfNegativeArea", "widthOfPositiveArea", "xAxis"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setMaxAndMinXValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._maxXValue_(_st(_st(self._xValues())._max())._max_((0)));
self._minXValue_(_st(_st(self._xValues())._min())._min_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"setMaxAndMinXValues",{},smalltalk.GETLineDiagram)})},
messageSends: ["maxXValue:", "max:", "max", "xValues", "minXValue:", "min:", "min"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setXAxisValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._max_min_(self["@maxXValue"],self["@minXValue"]));
return self}, function($ctx1) {$ctx1.fill(self,"setXAxisValues",{},smalltalk.GETLineDiagram)})},
messageSends: ["xAxis:", "max:min:", "xAxis"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeInPixelsOfPositiveXArea:",
fn: function (maxSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(_st(self._minValue()).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=maxSize;
return $2;
};
$3=_st(_st(self._minValue()).__lt_eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
$4=_st(_st(maxSize).__star(self._maxXValue())).__slash(_st(self._maxXValue()).__plus(_st(self._minXValue())._abs()));
return $4;
};
$5=_st(_st(self._minValue()).__lt_eq((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__lt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($5)){
return (0);
};
$6=self._error_("should not be here");
return $6;
}, function($ctx1) {$ctx1.fill(self,"sizeInPixelsOfPositiveXArea:",{maxSize:maxSize},smalltalk.GETLineDiagram)})},
messageSends: ["ifTrue:", "and:", ">", "maxValue", "minValue", "/", "+", "abs", "minXValue", "maxXValue", "*", "<=", "error:"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateY:",
fn: function (aBlock){
var self=this;
function $ROLinearMove(){return smalltalk.ROLinearMove||(typeof ROLinearMove=="undefined"?nil:ROLinearMove)}
return smalltalk.withContext(function($ctx1) { 
self._y_(aBlock);
_st(self["@elements"])._do_((function(each){
var newPosition,roElement,value;
return smalltalk.withContext(function($ctx2) {
roElement=_st(each)._roElement();
roElement;
value=_st(self["@y"])._value_(_st(roElement)._model());
value;
newPosition=_st(_st(_st(roElement)._position())._x()).__at(_st(self._heightOfPositiveArea()).__minus(self._getPixelsFromValue_(value)));
newPosition;
_st(each)._value_(value);
return _st($ROLinearMove())._for_to_(roElement,newPosition);
}, function($ctx2) {$ctx2.fillBlock({each:each,newPosition:newPosition,roElement:roElement,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateY:",{aBlock:aBlock},smalltalk.GETLineDiagram)})},
messageSends: ["y:", "do:", "roElement", "value:", "model", "@", "-", "getPixelsFromValue:", "heightOfPositiveArea", "x", "position", "for:to:"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfNegativeArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__minus(self._widthOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfNegativeArea",{},smalltalk.GETLineDiagram)})},
messageSends: ["-", "widthOfPositiveArea", "width"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfPositiveArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveXArea_(self._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfPositiveArea",{},smalltalk.GETLineDiagram)})},
messageSends: ["sizeInPixelsOfPositiveXArea:", "width"]}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xValues"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xValues",{},smalltalk.GETLineDiagram)})},
messageSends: []}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xValues:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xValues"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"xValues:",{anObject:anObject},smalltalk.GETLineDiagram)})},
messageSends: []}),
smalltalk.GETLineDiagram);



smalltalk.addClass('GETOrdinaryLineDiagram', smalltalk.GETAbstractLineDiagram, ['spacing'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
fn: function (){
var self=this;
var count,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$7,$1;
rawElements=_st($ROElement())._forCollection_((1)._to_(_st(self._models())._size()));
count=(1);
$1=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var dotY,dotX;
return smalltalk.withContext(function($ctx2) {
dotY=_st(self._heightOfPositiveArea()).__minus(self._getPixelsFromValue_(_st(self._y())._value_(model)));
dotY;
dotX=_st(self._spacing()).__star(count);
dotX;
$2=ele;
_st($2)._model_(model);
$3=_st($2)._translateTo_(_st(dotX).__at(dotY));
$3;
$4=_st($ROEllipse())._new();
_st($4)._color_(self._colorFor_(ele));
_st($4)._width_(self._dotSize());
$5=_st($4)._height_(self._dotSize());
_st(ele).__plus($5);
count=_st(count).__plus((1));
count;
$6=_st($GETDataObject())._new();
_st($6)._roElement_(ele);
$7=_st($6)._value_(_st(self._y())._value_(model));
return $7;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,dotY:dotY,dotX:dotX},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{count:count,rawElements:rawElements},smalltalk.GETOrdinaryLineDiagram)})},
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "-", "getPixelsFromValue:", "value:", "y", "heightOfPositiveArea", "*", "spacing", "model:", "translateTo:", "@", "+", "color:", "colorFor:", "new", "width:", "dotSize", "height:", "roElement:"]}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETOrdinaryLineDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._spacing_(_st(self._class())._defaultSpacing());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETOrdinaryLineDiagram)})},
messageSends: ["initialize", "spacing:", "defaultSpacing", "class"]}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nonValuedParameter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._values())._size()).__plus((1))).__star(self._spacing());
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonValuedParameter",{},smalltalk.GETOrdinaryLineDiagram)})},
messageSends: ["*", "spacing", "+", "size", "values"]}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._from_to_((0).__at(self._heightOfPositiveArea()),_st(self._nonValuedParameter()).__at(self._heightOfPositiveArea())));
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETOrdinaryLineDiagram)})},
messageSends: ["xAxis:", "from:to:", "@", "heightOfPositiveArea", "nonValuedParameter", "xAxis"]}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@spacing"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"spacing",{},smalltalk.GETOrdinaryLineDiagram)})},
messageSends: []}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@spacing"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"spacing:",{anObject:anObject},smalltalk.GETOrdinaryLineDiagram)})},
messageSends: []}),
smalltalk.GETOrdinaryLineDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultSpacing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"defaultSpacing",{},smalltalk.GETOrdinaryLineDiagram.klass)})},
messageSends: []}),
smalltalk.GETOrdinaryLineDiagram.klass);


smalltalk.addClass('GETCompositeDiagram', smalltalk.GETSingleAxisDiagram, ['diagrams'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (aDiagram){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aDiagram)._isGETDiagram();
if(smalltalk.assert($1)){
_st(self._diagrams())._add_(aDiagram);
} else {
self._error_("Can not add something that is not a Diagram");
};
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aDiagram:aDiagram},smalltalk.GETCompositeDiagram)})},
messageSends: ["ifTrue:ifFalse:", "add:", "diagrams", "error:", "isGETDiagram"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETCompositeDiagram)})},
messageSends: ["addXDecorator:"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETCompositeDiagram)})},
messageSends: ["addYDecorator:"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "diagrams",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@diagrams"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"diagrams",{},smalltalk.GETCompositeDiagram)})},
messageSends: []}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "diagrams:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@diagrams"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"diagrams:",{anObject:anObject},smalltalk.GETCompositeDiagram)})},
messageSends: []}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._initializeDiagrams();
_st(_st(self._diagrams())._collect_("values"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(self["@values"])._addAll_(col);
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
$1=self._hasValues();
if(smalltalk.assert($1)){
self._setMaxAndMinValues();
};
self._width_(_st(_st(self._diagrams())._collect_("width"))._max());
self._operateElements();
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView},smalltalk.GETCompositeDiagram)})},
messageSends: ["initializeDiagrams", "do:", "addAll:", "collect:", "diagrams", "ifTrue:", "setMaxAndMinValues", "hasValues", "width:", "max", "operateElements", "addElementsToView:"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
fn: function (value){
var self=this;
var semiresult;
return smalltalk.withContext(function($ctx1) { 
var $1;
semiresult=_st(_st(value).__star(self._height())).__slash(_st(self._maxValue()).__minus(self._minValue()));
$1=_st(semiresult)._roundUpTo_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value,semiresult:semiresult},smalltalk.GETCompositeDiagram)})},
messageSends: ["/", "-", "minValue", "maxValue", "*", "height", "roundUpTo:"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._diagrams())._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModels",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["not", "isEmpty", "diagrams"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "hasValues",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._values())._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasValues",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["not", "isEmpty", "values"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfNegativeArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__minus(self._heightOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfNegativeArea",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["-", "heightOfPositiveArea", "height"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfPositiveArea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfPositiveArea",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["sizeInPixelsOfPositiveArea:", "height"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETCompositeDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._diagrams_(_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["initialize", "diagrams:", "new"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeDiagrams",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagrams())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._displayIn_(_st($ROView())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeDiagrams",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["do:", "displayIn:", "new", "diagrams"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "joinElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._diagrams())._collect_("elements"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(self["@elements"])._addAll_(col);
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
_st(_st(self._diagrams())._collect_("extraElements"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(self["@extraElements"])._addAll_(col);
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"joinElements",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["do:", "addAll:", "collect:", "diagrams"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nullifyElements",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._diagrams())._collect_("elements"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(col)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._roElement())._view_(_st($ROView())._nullView());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
_st(_st(self._diagrams())._collect_("extraElements"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(col)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._view_(_st($ROView())._nullView());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"nullifyElements",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["do:", "view:", "nullView", "roElement", "collect:", "diagrams"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "operateElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nullifyElements();
self._joinElements();
self._scaleElements();
self._transElements();
self._sortElements();
return self}, function($ctx1) {$ctx1.fill(self,"operateElements",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["nullifyElements", "joinElements", "scaleElements", "transElements", "sortElements"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._isBig();
if(smalltalk.assert($1)){
return _st(_st(each)._roElement())._height_(self._getPixelsFromValue_(_st(each)._getValue()));
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"scaleElements",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["do:", "ifTrue:", "height:", "getPixelsFromValue:", "getValue", "roElement", "isBig"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "sortElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(a)._getValue())._abs()).__gt_eq(_st(_st(b)._getValue())._abs());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"sortElements",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["sort:", ">=", "abs", "getValue"]}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "transElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._elements())._do_((function(each){
var trans,actualX,pixels;
return smalltalk.withContext(function($ctx2) {
pixels=self._getPixelsFromValue_(_st(each)._getValue());
pixels;
$1=_st(each)._isBig();
if(smalltalk.assert($1)){
$2=_st(pixels).__gt((0));
if(smalltalk.assert($2)){
trans=_st(self._heightOfPositiveArea()).__minus(pixels);
trans;
} else {
trans=self._heightOfPositiveArea();
trans;
};
} else {
trans=_st(self._heightOfPositiveArea()).__minus(pixels);
trans;
};
actualX=_st(_st(_st(each)._roElement())._position())._x();
actualX;
return _st(_st(each)._roElement())._translateTo_(_st(actualX).__at(trans));
}, function($ctx2) {$ctx2.fillBlock({each:each,trans:trans,actualX:actualX,pixels:pixels},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"transElements",{},smalltalk.GETCompositeDiagram)})},
messageSends: ["do:", "getPixelsFromValue:", "getValue", "ifTrue:ifFalse:", "-", "heightOfPositiveArea", ">", "isBig", "x", "position", "roElement", "translateTo:", "@", "elements"]}),
smalltalk.GETCompositeDiagram);



smalltalk.addClass('GETDataObject', smalltalk.Object, ['value', 'roElement', 'isBig'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "getValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"getValue",{},smalltalk.GETDataObject)})},
messageSends: []}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETDataObject.superclass.fn.prototype._initialize.apply(_st(self), []);
self._roElement_(_st($ROElement())._new());
self._value_((0));
self._isBig_(false);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETDataObject)})},
messageSends: ["initialize", "roElement:", "new", "value:", "isBig:"]}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isBig",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isBig"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBig",{},smalltalk.GETDataObject)})},
messageSends: []}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isBig:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isBig"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"isBig:",{anObject:anObject},smalltalk.GETDataObject)})},
messageSends: []}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "roElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@roElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"roElement",{},smalltalk.GETDataObject)})},
messageSends: []}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "roElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@roElement"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"roElement:",{anObject:anObject},smalltalk.GETDataObject)})},
messageSends: []}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.GETDataObject)})},
messageSends: []}),
smalltalk.GETDataObject);



smalltalk.addClass('GETDiagramBuilder', smalltalk.Object, ['diagram', 'intWrapper', 'rawView', 'stack'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "compositeDiagram",
fn: function (){
var self=this;
function $GETCompositeDiagram(){return smalltalk.GETCompositeDiagram||(typeof GETCompositeDiagram=="undefined"?nil:GETCompositeDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETCompositeDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"compositeDiagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "diagram",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"diagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: []}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalBarDiagram",
fn: function (){
var self=this;
function $GETHorizontalBarDiagram(){return smalltalk.GETHorizontalBarDiagram||(typeof GETHorizontalBarDiagram=="undefined"?nil:GETHorizontalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETHorizontalBarDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalBarDiagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initDefaultButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@stack"];
_st($1)._exportButton();
_st($1)._findButton();
_st($1)._zoomInButton();
$2=_st($1)._zoomOutButton();
return self}, function($ctx1) {$ctx1.fill(self,"initDefaultButtons",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["exportButton", "findButton", "zoomInButton", "zoomOutButton"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETDiagramBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@rawView"]=_st($ROView())._new();
self._verticalBarDiagram();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["initialize", "new", "verticalBarDiagram"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "intWrapper",
fn: function (){
var self=this;
function $GETInteractionWrapper(){return smalltalk.GETInteractionWrapper||(typeof GETInteractionWrapper=="undefined"?nil:GETInteractionWrapper)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@intWrapper"];
if(($receiver = $2) == nil || $receiver == undefined){
self._intWrapper_(_st($GETInteractionWrapper())._new());
$1=self._intWrapper();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"intWrapper",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["ifNil:", "intWrapper:", "new", "intWrapper"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "intWrapper:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@intWrapper"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"intWrapper:",{anObject:anObject},smalltalk.GETDiagramBuilder)})},
messageSends: []}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interaction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._intWrapper())._diagram_(self._diagram());
return $1;
}, function($ctx1) {$ctx1.fill(self,"interaction",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["diagram:", "diagram", "intWrapper"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineDiagram",
fn: function (){
var self=this;
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETLineDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineDiagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._openIn_(self._rawView());
_st(self._rawView())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["openIn:", "rawView", "open"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "openIn:",
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._rawView_(aROView);
_st(self._diagram())._displayIn_(aROView);
self._relocateView();
$1=self._stack();
return $1;
}, function($ctx1) {$ctx1.fill(self,"openIn:",{aROView:aROView},smalltalk.GETDiagramBuilder)})},
messageSends: ["rawView:", "displayIn:", "diagram", "relocateView", "stack"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "openTest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._openIn_(self["@rawView"]);
$1=self["@rawView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"openTest",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["openIn:"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ordinaryLineDiagram",
fn: function (){
var self=this;
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETOrdinaryLineDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"ordinaryLineDiagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pieDiagram",
fn: function (){
var self=this;
function $GETPieDiagram(){return smalltalk.GETPieDiagram||(typeof GETPieDiagram=="undefined"?nil:GETPieDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETPieDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pieDiagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawView",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rawView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawView",{},smalltalk.GETDiagramBuilder)})},
messageSends: []}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawView:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawView"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"rawView:",{anObject:anObject},smalltalk.GETDiagramBuilder)})},
messageSends: []}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relocateView",
fn: function (){
var self=this;
var all;
return smalltalk.withContext(function($ctx1) { 
var $1;
all=_st(self._rawView())._elements();
$1=_st(all)._isEmpty();
if(! smalltalk.assert($1)){
var transX,transY;
transX=_st(_st(_st(_st(all)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._position())._x();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._min())._min_((0)))._negated();
transX;
transY=_st(_st(_st(_st(all)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._position())._y();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._min())._min_((0)))._negated();
transY;
_st(self["@rawView"])._translateBy_(_st(_st(transX).__plus((10))).__at(_st(transY).__plus((50))));
};
return self}, function($ctx1) {$ctx1.fill(self,"relocateView",{all:all},smalltalk.GETDiagramBuilder)})},
messageSends: ["elements", "rawView", "ifFalse:", "negated", "min:", "min", "collect:", "x", "position", "y", "translateBy:", "@", "+", "isEmpty"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "scatterplot",
fn: function (){
var self=this;
function $GETScatterPlot(){return smalltalk.GETScatterPlot||(typeof GETScatterPlot=="undefined"?nil:GETScatterPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETScatterPlot())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scatterplot",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "stack",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@stack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stack",{},smalltalk.GETDiagramBuilder)})},
messageSends: []}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._diagram())._updateBlock_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETDiagramBuilder)})},
messageSends: ["updateBlock:", "diagram"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "updateY:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._diagram())._updateY_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"updateY:",{aBlock:aBlock},smalltalk.GETDiagramBuilder)})},
messageSends: ["updateY:", "diagram"]}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarDiagram",
fn: function (){
var self=this;
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETVerticalBarDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalBarDiagram",{},smalltalk.GETDiagramBuilder)})},
messageSends: ["new"]}),
smalltalk.GETDiagramBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "withDefaultButtons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._initialize();
_st($2)._initDefaultButtons();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withDefaultButtons",{},smalltalk.GETDiagramBuilder.klass)})},
messageSends: ["initialize", "new", "initDefaultButtons", "yourself"]}),
smalltalk.GETDiagramBuilder.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "isGETDiagram",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isGETDiagram",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "plotBar",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(self);
_st($1)._y_("yourself");
_st($1)._height_((150));
$2=_st($1)._regularAxis();
_st(_st(diagram)._interaction())._popUpText();
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"plotBar",{diagram:diagram},smalltalk.SequenceableCollection)})},
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "height:", "regularAxis", "popUpText", "interaction", "open"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "plotDistribution",
fn: function (){
var self=this;
var diagram,values;
function $GETDistribution(){return smalltalk.GETDistribution||(typeof GETDistribution=="undefined"?nil:GETDistribution)}
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
values=_st(_st($GETDistribution())._on_(self))._annotatedFrequency();
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(values);
_st($1)._y_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v)._third())._size();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st($1)._height_((150));
$2=_st($1)._regularAxisAsInteger();
_st(_st(diagram)._interaction())._popUpText();
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"plotDistribution",{diagram:diagram,values:values},smalltalk.SequenceableCollection)})},
messageSends: ["annotatedFrequency", "on:", "new", "models:", "verticalBarDiagram", "y:", "size", "third", "height:", "regularAxisAsInteger", "popUpText", "interaction", "open"]}),
smalltalk.SequenceableCollection);

