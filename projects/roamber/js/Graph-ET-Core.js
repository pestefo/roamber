define("roamber/Graph-ET-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Graph-ET-Core');
smalltalk.packages["Graph-ET-Core"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('GETAbstractDiagram', smalltalk.Object, ['models', 'elements', 'extraElements', 'width', 'height', 'minValue', 'color', 'interactions', 'values', 'colorNormalizer', 'axiCollection', 'maxValue', 'titleLabel'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addAxisToView:",
category: 'displaying',
fn: function (rawView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._axiCollection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(rawView)._addAll_(_st(each)._elements());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAxisToView:",{rawView:rawView},smalltalk.GETAbstractDiagram)})},
args: ["rawView"],
source: "addAxisToView: rawView\x0a\x0a\x09self axiCollection do: [ :each | rawView addAll: each elements ]",
messageSends: ["do:", "axiCollection", "addAll:", "elements"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addElementsToView:",
category: 'displaying',
fn: function (rawView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(rawView)._addAll_(self._extraElements());
$ctx1.sendIdx["addAll:"]=1;
$1=_st(rawView)._addAll_(self._roElements());
return self}, function($ctx1) {$ctx1.fill(self,"addElementsToView:",{rawView:rawView},smalltalk.GETAbstractDiagram)})},
args: ["rawView"],
source: "addElementsToView: rawView\x0a\x0a\x09rawView\x0a\x09\x09addAll: self extraElements;\x0a\x09\x09addAll: self roElements",
messageSends: ["addAll:", "extraElements", "roElements"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteractions",
category: 'interaction',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._roElements())._reject_((function(ele){
return smalltalk.withContext(function($ctx3) {
return _st(_st(ele)._model())._isNil();
}, function($ctx3) {$ctx3.fillBlock({ele:ele},$ctx2,2)})})))._do_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"addInteractions",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "addInteractions\x0a\x09interactions do: [ :each | (self roElements reject: [ :ele | ele model isNil ]) do: each ]",
messageSends: ["do:", "reject:", "roElements", "isNil", "model"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addTitle:",
category: 'displaying',
fn: function (aROView){
var self=this;
var label;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$7,$6,$5,$4;
$2=self._titleLabel();
$ctx1.sendIdx["titleLabel"]=1;
$1=_st($2)._isNil();
if(! smalltalk.assert($1)){
label=_st($ROLabel())._elementOn_(self._titleLabel());
label;
$3=label;
$7=self._width();
$ctx1.sendIdx["width"]=1;
$6=_st($7).__minus(_st(label)._width());
$5=_st($6).__slash((2));
$4=_st($5).__at((-30));
_st($3)._translateTo_($4);
_st(aROView)._add_(label);
};
return self}, function($ctx1) {$ctx1.fill(self,"addTitle:",{aROView:aROView,label:label},smalltalk.GETAbstractDiagram)})},
args: ["aROView"],
source: "addTitle: aROView\x0a\x0a\x09| label |\x0a\x09\x0a\x09(self titleLabel isNil)\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09label := (ROLabel elementOn: self titleLabel).\x0a\x09\x09\x09label translateTo: (((self width  - label width) / 2) @ -30).\x0a\x0a\x09\x09\x09aROView add: label ]",
messageSends: ["ifFalse:", "isNil", "titleLabel", "elementOn:", "translateTo:", "@", "/", "-", "width", "add:"],
referencedClasses: ["ROLabel"]
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "axiCollection",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@axiCollection"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"axiCollection",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "axiCollection\x0a\x09\x0a\x09^ axiCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "axiCollection:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@axiCollection"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"axiCollection:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "axiCollection: anObject\x0a\x09\x0a\x09axiCollection := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

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
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "color\x0a\x09\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isColor();
if(smalltalk.assert($1)){
self["@color"]=(function(x){
return smalltalk.withContext(function($ctx2) {
return anObject;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})});
self["@color"];
} else {
self["@color"]=anObject;
self["@color"];
};
return self}, function($ctx1) {$ctx1.fill(self,"color:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "color: anObject\x0a\x09\x0a\x09(anObject isColor)\x0a\x09\x09ifTrue: [color := [ :x | anObject ]]\x0a\x09\x09ifFalse: [color := anObject]",
messageSends: ["ifTrue:ifFalse:", "isColor"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
category: 'coloring',
fn: function (anElement){
var self=this;
var aColor;
function $RONIdentityNormalizer(){return smalltalk.RONIdentityNormalizer||(typeof RONIdentityNormalizer=="undefined"?nil:RONIdentityNormalizer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$8,$3;
$1=self._color();
$2=_st(anElement)._model();
$ctx1.sendIdx["model"]=1;
aColor=_st($1)._value_($2);
$4=_st(aColor)._isColor();
if(smalltalk.assert($4)){
$3=aColor;
} else {
$5=self._colorNormalizer();
$ctx1.sendIdx["colorNormalizer"]=1;
if(($receiver = $5) == nil || $receiver == null){
$6=_st($RONIdentityNormalizer())._new();
_st($6)._command_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(self["@color"])._roValue_(_st(el)._model());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1,4)})}));
_st($6)._setIndexTo_("blue");
$7=_st($6)._yourself();
self._colorNormalizer_($7);
} else {
$5;
};
$8=self._colorNormalizer();
return $8;
};
return $3;
}, function($ctx1) {$ctx1.fill(self,"colorFor:",{anElement:anElement,aColor:aColor},smalltalk.GETAbstractDiagram)})},
args: ["anElement"],
source: "colorFor: anElement\x0a\x0a\x09| aColor |\x0a\x09aColor := self color value: anElement model.\x0a\x09^ aColor isColor\x0a\x09\x09ifTrue: [aColor]\x0a\x09\x09ifFalse: [self colorNormalizer\x0a\x09\x09\x09\x09ifNil: [self colorNormalizer: (RONIdentityNormalizer new \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09command: [ :el | color roValue: el model ];\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09setIndexTo: #blue;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09yourself) ].\x0a\x09\x09\x09^ self colorNormalizer]",
messageSends: ["value:", "color", "model", "ifTrue:ifFalse:", "isColor", "ifNil:", "colorNormalizer", "colorNormalizer:", "command:", "new", "roValue:", "setIndexTo:", "yourself"],
referencedClasses: ["RONIdentityNormalizer"]
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "colorNormalizer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorNormalizer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorNormalizer",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "colorNormalizer\x0a\x09\x0a\x09^ colorNormalizer",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "colorNormalizer:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorNormalizer"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"colorNormalizer:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "colorNormalizer: anObject\x0a\x09\x0a\x09colorNormalizer := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "displayIn:",
category: 'displaying',
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
args: ["aView"],
source: "displayIn: aView \x0a\x09\x0a\x09self hasModels\x0a\x09\x09ifTrue: [ self generateIn: aView.\x0a\x09\x09\x09\x09self createAxis: aView.\x0a\x09\x09\x09\x09self addTitle: aView.\x0a\x09\x09\x09\x09self addInteractions ]",
messageSends: ["ifTrue:", "hasModels", "generateIn:", "createAxis:", "addTitle:", "addInteractions"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'interaction',
fn: function (anInteraction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._add_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each).__at(anInteraction);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{anInteraction:anInteraction},smalltalk.GETAbstractDiagram)})},
args: ["anInteraction"],
source: "do: anInteraction\x0a\x0a\x09interactions\x0a\x09\x09add: [:each | each @ anInteraction]",
messageSends: ["add:", "@"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "drawAxis:",
category: 'displaying',
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aROView)._addAll_(self._axisElements());
return self}, function($ctx1) {$ctx1.fill(self,"drawAxis:",{aROView:aROView},smalltalk.GETAbstractDiagram)})},
args: ["aROView"],
source: "drawAxis: aROView \x0a\x0a\x09aROView addAll: self axisElements",
messageSends: ["addAll:", "axisElements"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@elements"]=_st(self["@elements"])._reject_("isNil");
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "elements\x0a\x09elements := elements reject: #isNil.\x0a\x09^ elements",
messageSends: ["reject:"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
category: 'accessing',
fn: function (aROElementCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=aROElementCollection;
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{aROElementCollection:aROElementCollection},smalltalk.GETAbstractDiagram)})},
args: ["aROElementCollection"],
source: "elements: aROElementCollection\x0a\x0a\x09elements := aROElementCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "extraElements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extraElements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extraElements",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "extraElements\x0a\x09^ extraElements",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "extraElements:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extraElements"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"extraElements:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "extraElements: anObject\x0a\x09extraElements := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "generateIn: anObject\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModels",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._models())._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModels",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "hasModels\x0a\x0a\x09^self models isEmpty not",
messageSends: ["not", "isEmpty", "models"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "height\x0a\x0a\x09^ height.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "height: anObject\x0a\x0a\x09height := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$6,$9,$8;
smalltalk.GETAbstractDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
self._models_($1);
$2=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=2;
self._values_($2);
$3=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=3;
self._elements_($3);
$4=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=4;
self._extraElements_($4);
$5=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=5;
self._interactions_($5);
self._axiCollection_(_st($OrderedCollection())._new());
$7=self._class();
$ctx1.sendIdx["class"]=1;
$6=_st($7)._defaultHeight();
self._height_($6);
$9=self._class();
$ctx1.sendIdx["class"]=2;
$8=_st($9)._defaultWidth();
self._width_($8);
self._color_(_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self models: OrderedCollection new.\x0a\x09self values: OrderedCollection new.\x0a\x09self elements: OrderedCollection new.\x0a\x09self extraElements: OrderedCollection new.\x0a\x09self interactions: OrderedCollection new.\x0a\x09self axiCollection: OrderedCollection new.\x09\x0a\x09\x0a\x09self height: (self class) defaultHeight.\x0a\x09self width: (self class) defaultWidth.\x0a\x09self color: (self class) defaultColor",
messageSends: ["initialize", "models:", "new", "values:", "elements:", "extraElements:", "interactions:", "axiCollection:", "height:", "defaultHeight", "class", "width:", "defaultWidth", "color:", "defaultColor"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "interactions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interactions"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interactions",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "interactions\x0a\x09\x0a\x09^ interactions",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "interactions:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interactions"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"interactions:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "interactions: anObject\x0a\x09\x0a\x09interactions := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "isGETDiagram",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isGETDiagram",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "isGETDiagram\x0a\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "maxValue\x0a\x0a\x09^ maxValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxValue"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"maxValue:",{aNumber:aNumber},smalltalk.GETAbstractDiagram)})},
args: ["aNumber"],
source: "maxValue: aNumber\x0a\x09maxValue := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "minValue\x0a\x0a\x09^ minValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minValue"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"minValue:",{aNumber:aNumber},smalltalk.GETAbstractDiagram)})},
args: ["aNumber"],
source: "minValue: aNumber\x0a\x0a\x09minValue := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "models",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@models"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"models",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "models\x0a\x0a\x09^ models.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "models:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@models"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"models:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "models: anObject\x0a\x0a\x09models := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'interaction',
fn: function (aROEvent,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._add_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._on_do_(aROEvent,aBlock);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{aROEvent:aROEvent,aBlock:aBlock},smalltalk.GETAbstractDiagram)})},
args: ["aROEvent", "aBlock"],
source: "on: aROEvent do: aBlock\x0a\x0a\x09interactions add: [:each |\x0a\x09\x09each on: aROEvent do: aBlock.].",
messageSends: ["add:", "on:do:"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "roElements",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elements())._select_thenCollect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._isNil())._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._roElement();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"roElements",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "roElements\x0a\x09^ self elements select: [ :each | (each isNil) not ]  thenCollect: [ :each | each roElement ]",
messageSends: ["select:thenCollect:", "elements", "not", "isNil", "roElement"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setMaxAndMinValues",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._values();
$ctx1.sendIdx["values"]=1;
$2=_st($3)._max();
$1=_st($2)._max_((0));
self._maxValue_($1);
self._minValue_(_st(_st(self._values())._min())._min_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"setMaxAndMinValues",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "setMaxAndMinValues\x0a\x09self maxValue: (self values max max: 0).\x0a\x09self minValue: (self values min min: 0)",
messageSends: ["maxValue:", "max:", "max", "values", "minValue:", "min:", "min"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "titleLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@titleLabel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"titleLabel",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "titleLabel\x0a\x09\x0a\x09^ titleLabel",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "titleLabel:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@titleLabel"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"titleLabel:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "titleLabel: anObject\x0a\x09\x0a\x09titleLabel := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
category: 'animation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETAbstractDiagram)})},
args: ["aBlock"],
source: "updateBlock: aBlock\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@values"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"values",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "values\x0a\x09\x0a\x09^ values",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "values:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@values"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"values:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "values: anObject\x0a\x09\x0a\x09values := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.GETAbstractDiagram)})},
args: [],
source: "width\x0a\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{anObject:anObject},smalltalk.GETAbstractDiagram)})},
args: ["anObject"],
source: "width: anObject\x0a\x0a\x09width := anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'default',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._gray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.GETAbstractDiagram.klass)})},
args: [],
source: "defaultColor\x0a\x0a\x09^ Color gray.",
messageSends: ["gray"],
referencedClasses: ["Color"]
}),
smalltalk.GETAbstractDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHeight",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (400);
}, function($ctx1) {$ctx1.fill(self,"defaultHeight",{},smalltalk.GETAbstractDiagram.klass)})},
args: [],
source: "defaultHeight\x0a\x0a\x09^ 400.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWidth",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (400);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.GETAbstractDiagram.klass)})},
args: [],
source: "defaultWidth\x0a\x0a\x09^ 400.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractDiagram.klass);


smalltalk.addClass('GETAbstract2DDiagram', smalltalk.GETAbstractDiagram, ['xAxisDecorators', 'yAxisDecorators', 'xAxis', 'yAxis', 'xAxisLabel', 'yAxisLabel'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addXDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._xAxis())._decorators())._add_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addXDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstract2DDiagram)})},
args: ["aDecorator"],
source: "addXDecorator: aDecorator\x0a\x0a\x09self xAxis decorators add: aDecorator",
messageSends: ["add:", "decorators", "xAxis"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addYDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._yAxis())._decorators())._add_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addYDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstract2DDiagram)})},
args: ["aDecorator"],
source: "addYDecorator: aDecorator\x0a\x0a\x09self yAxis decorators add: aDecorator",
messageSends: ["add:", "decorators", "yAxis"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "createAxis:",
category: 'private',
fn: function (aROView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._scaleXAxis();
self._scaleYAxis();
self._setXAxisValues();
self._setYAxisValues();
self._setXAxisLabel();
self._setYAxisLabel();
self._setDecorators();
$1=self._axiCollection();
$ctx1.sendIdx["axiCollection"]=1;
_st($1)._add_(self._xAxis());
$ctx1.sendIdx["add:"]=1;
_st(self._axiCollection())._add_(self._yAxis());
self._addAxisToView_(aROView);
return self}, function($ctx1) {$ctx1.fill(self,"createAxis:",{aROView:aROView},smalltalk.GETAbstract2DDiagram)})},
args: ["aROView"],
source: "createAxis: aROView\x0a\x0a\x09self scaleXAxis.\x0a\x09self scaleYAxis.\x0a\x09self setXAxisValues.\x0a\x09self setYAxisValues.\x0a\x09\x0a\x09self setXAxisLabel.\x0a\x09self setYAxisLabel.\x0a\x09\x0a\x09self setDecorators.\x0a\x0a\x09self axiCollection add: self xAxis.\x0a\x09self axiCollection add: self yAxis.\x0a\x09self addAxisToView: aROView",
messageSends: ["scaleXAxis", "scaleYAxis", "setXAxisValues", "setYAxisValues", "setXAxisLabel", "setYAxisLabel", "setDecorators", "add:", "axiCollection", "xAxis", "yAxis", "addAxisToView:"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $GETAxis(){return smalltalk.GETAxis||(typeof GETAxis=="undefined"?nil:GETAxis)}
function $GETLeftRightAxisStrategy(){return smalltalk.GETLeftRightAxisStrategy||(typeof GETLeftRightAxisStrategy=="undefined"?nil:GETLeftRightAxisStrategy)}
function $GETTopDownAxisStrategy(){return smalltalk.GETTopDownAxisStrategy||(typeof GETTopDownAxisStrategy=="undefined"?nil:GETTopDownAxisStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6;
smalltalk.GETAbstract2DDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=_st($GETAxis())._new();
$ctx1.sendIdx["new"]=1;
self._xAxis_($1);
$2=_st($GETAxis())._new();
$ctx1.sendIdx["new"]=2;
self._yAxis_($2);
$3=self._xAxis();
$ctx1.sendIdx["xAxis"]=1;
$5=_st($GETLeftRightAxisStrategy())._new();
$ctx1.sendIdx["new"]=3;
$4=_st($5)._on_(self._xAxis());
$ctx1.sendIdx["on:"]=1;
_st($3)._strategy_($4);
$ctx1.sendIdx["strategy:"]=1;
$6=self._yAxis();
$ctx1.sendIdx["yAxis"]=1;
_st($6)._strategy_(_st(_st($GETTopDownAxisStrategy())._new())._on_(self._yAxis()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "initialize \x0a\x0a\x09super initialize.\x0a\x09self xAxis: GETAxis new.\x0a\x09self yAxis: GETAxis new.\x0a\x09\x0a\x09self xAxis strategy: (GETLeftRightAxisStrategy new on: self xAxis).\x0a\x09self yAxis strategy: (GETTopDownAxisStrategy new on: self yAxis)",
messageSends: ["initialize", "xAxis:", "new", "yAxis:", "strategy:", "xAxis", "on:", "yAxis"],
referencedClasses: ["GETAxis", "GETLeftRightAxisStrategy", "GETTopDownAxisStrategy"]
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self._xAxis();
$4=self._height();
$ctx1.sendIdx["height"]=1;
$3=(0).__at($4);
$ctx1.sendIdx["@"]=1;
$1=_st($2)._from_to_($3,_st(self._width()).__at(self._height()));
self._xAxis_($1);
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "scaleXAxis\x0a\x0a\x09self xAxis:\x0a\x09(self xAxis\x0a\x09\x09from: 0 @ self height \x0a\x09\x09to: self width @ self height)",
messageSends: ["xAxis:", "from:to:", "xAxis", "@", "height", "width"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleYAxis",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._yAxis();
$3=(0).__at((0));
$ctx1.sendIdx["@"]=1;
$1=_st($2)._from_to_($3,(0).__at(self._height()));
self._yAxis_($1);
return self}, function($ctx1) {$ctx1.fill(self,"scaleYAxis",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "scaleYAxis\x0a\x0a\x09self yAxis:\x0a\x09(self yAxis\x0a\x09\x09from: 0 @ 0\x0a\x09\x09to: 0 @ self height)",
messageSends: ["yAxis:", "from:to:", "yAxis", "@", "height"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setDecorators",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
$2=self._xAxis();
$ctx1.sendIdx["xAxis"]=1;
$1=_st($2)._decorators();
$ctx1.sendIdx["decorators"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._decorate_(self._xAxis());
$ctx2.sendIdx["decorate:"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
$4=self._yAxis();
$ctx1.sendIdx["yAxis"]=1;
$3=_st($4)._decorators();
_st($3)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._decorate_(self._yAxis());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setDecorators",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "setDecorators\x0a\x0a\x09self xAxis decorators\x0a\x09\x09do: [:each | each decorate: self xAxis].\x0a\x09self yAxis decorators\x0a\x09\x09do: [:each | each decorate: self yAxis]",
messageSends: ["do:", "decorators", "xAxis", "decorate:", "yAxis"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setXAxisLabel",
category: 'scripting',
fn: function (){
var self=this;
function $GETTitleDecorator(){return smalltalk.GETTitleDecorator||(typeof GETTitleDecorator=="undefined"?nil:GETTitleDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._xAxisLabel();
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self._xAxis())._label_(self["@xAxisLabel"]);
self._addXDecorator_(_st($GETTitleDecorator())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"setXAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "setXAxisLabel\x0a\x0a\x09self xAxisLabel\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self xAxis label: xAxisLabel.\x0a\x09\x09\x09self addXDecorator: GETTitleDecorator new ]",
messageSends: ["ifNotNil:", "xAxisLabel", "label:", "xAxis", "addXDecorator:", "new"],
referencedClasses: ["GETTitleDecorator"]
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setXAxisValues",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._max_min_(self["@maxValue"],self["@minValue"]));
return self}, function($ctx1) {$ctx1.fill(self,"setXAxisValues",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "setXAxisValues\x0a\x0a\x09self xAxis:\x0a\x09(self xAxis\x0a\x09\x09max: maxValue\x0a\x09\x09min: minValue)",
messageSends: ["xAxis:", "max:min:", "xAxis"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setYAxisLabel",
category: 'scripting',
fn: function (){
var self=this;
function $GETTitleDecorator(){return smalltalk.GETTitleDecorator||(typeof GETTitleDecorator=="undefined"?nil:GETTitleDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._yAxisLabel();
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self._yAxis())._label_(self["@yAxisLabel"]);
self._addYDecorator_(_st($GETTitleDecorator())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"setYAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "setYAxisLabel\x0a\x0a\x09self yAxisLabel\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self yAxis label: yAxisLabel.\x0a\x09\x09\x09self addYDecorator: GETTitleDecorator new ]",
messageSends: ["ifNotNil:", "yAxisLabel", "label:", "yAxis", "addYDecorator:", "new"],
referencedClasses: ["GETTitleDecorator"]
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setYAxisValues",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._yAxis_(_st(self._yAxis())._max_min_(self["@maxValue"],self["@minValue"]));
return self}, function($ctx1) {$ctx1.fill(self,"setYAxisValues",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "setYAxisValues\x0a\x0a\x09self yAxis:\x0a\x09(self yAxis\x0a\x09\x09max: maxValue\x0a\x09\x09min: minValue)",
messageSends: ["yAxis:", "max:min:", "yAxis"],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxis",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xAxis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xAxis",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "xAxis\x0a\x09\x0a\x09^ xAxis",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxis:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xAxis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"xAxis:",{anObject:anObject},smalltalk.GETAbstract2DDiagram)})},
args: ["anObject"],
source: "xAxis: anObject\x0a\x09\x0a\x09xAxis := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxisLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xAxisLabel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "xAxisLabel\x0a\x09\x0a\x09^ xAxisLabel",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xAxisLabel:",
category: 'scripting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xAxisLabel"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"xAxisLabel:",{aString:aString},smalltalk.GETAbstract2DDiagram)})},
args: ["aString"],
source: "xAxisLabel: aString\x0a\x0a\x09xAxisLabel := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxis",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@yAxis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"yAxis",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "yAxis\x0a\x09\x0a\x09^ yAxis",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxis:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@yAxis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"yAxis:",{anObject:anObject},smalltalk.GETAbstract2DDiagram)})},
args: ["anObject"],
source: "yAxis: anObject\x0a\x09\x0a\x09yAxis := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxisLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@yAxisLabel"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"yAxisLabel",{},smalltalk.GETAbstract2DDiagram)})},
args: [],
source: "yAxisLabel\x0a\x09\x0a\x09^ yAxisLabel",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "yAxisLabel:",
category: 'scripting',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@yAxisLabel"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"yAxisLabel:",{aString:aString},smalltalk.GETAbstract2DDiagram)})},
args: ["aString"],
source: "yAxisLabel: aString\x0a\x0a\x09yAxisLabel := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstract2DDiagram);



smalltalk.addClass('GETPieDiagram', smalltalk.GETAbstract2DDiagram, ['radius', 'lineColor'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
var body,center,angles,edges,rad;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2,$7,$8,$9,$10;
rad=self._radius();
$1=_st($ROElement())._new();
$ctx1.sendIdx["new"]=1;
$3=_st($ROEllipse())._new();
$ctx1.sendIdx["new"]=2;
_st($3)._size_((2).__star(rad));
$ctx1.sendIdx["size:"]=1;
_st($3)._color_(_st(_st($Color())._white())._alpha_((0.1)));
$ctx1.sendIdx["color:"]=1;
$4=$3;
$5=self._lineColor();
$ctx1.sendIdx["lineColor"]=1;
_st($4)._borderColor_($5);
$6=_st($3)._borderWidth_((1));
$2=$6;
body=_st($1).__plus($2);
$ctx1.sendIdx["+"]=1;
$7=_st($ROElement())._new();
$ctx1.sendIdx["new"]=3;
_st($7)._translateTo_(_st(rad).__at(rad));
$8=_st($7)._size_((0));
center=$8;
angles=self._getElementsFromModel();
edges=_st(angles)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROEdge())._from_to_(center,each)).__plus(_st(_st($ROLine())._new())._color_(self._lineColor()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$9=self._elements();
_st($9)._add_(body);
$ctx1.sendIdx["add:"]=1;
_st($9)._add_(center);
_st($9)._addAll_(angles);
$ctx1.sendIdx["addAll:"]=1;
$10=_st($9)._addAll_(edges);
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,body:body,center:center,angles:angles,edges:edges,rad:rad},smalltalk.GETPieDiagram)})},
args: ["aView"],
source: "generateIn: aView\x0a\x09\x0a\x09| body center angles edges rad |\x0a\x09\x0a\x09rad := self radius.\x0a\x09\x0a\x09body := ROElement new + ((ROEllipse new) size: (2*rad); color: (Color white alpha:0.1); borderColor: (self lineColor); borderWidth: 1).\x0a\x09center := ((ROElement new) translateTo: (rad@rad); size: 0).\x0a\x09angles := self getElementsFromModel.\x0a\x09edges := (angles collect: [:each |  ((ROEdge from: center to: each) + (ROLine new color: (self lineColor)))]).\x0a\x09\x0a\x09self elements add: body; add: center; addAll: angles; addAll: edges.\x0a\x09self addElementsToView: aView",
messageSends: ["radius", "+", "new", "size:", "*", "color:", "alpha:", "white", "borderColor:", "lineColor", "borderWidth:", "translateTo:", "@", "getElementsFromModel", "collect:", "from:to:", "add:", "elements", "addAll:", "addElementsToView:"],
referencedClasses: ["ROElement", "ROEllipse", "Color", "ROEdge", "ROLine"]
}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModel",
category: 'procesing',
fn: function (){
var self=this;
var angsum,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$7,$6,$10,$9,$8,$11,$4;
$3=self._models();
$ctx1.sendIdx["models"]=1;
$2=_st($3)._size();
$1=(1)._to_($2);
rawElements=_st($ROElement())._forCollection_($1);
angsum=(0);
$5=rawElements;
$7=self._models();
$ctx1.sendIdx["models"]=2;
$6=_st($7)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each).__slash(_st(self._models())._sum())).__star((360));
$ctx2.sendIdx["*"]=1;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$4=_st($5)._with_do_($6,(function(ele,ang){
return smalltalk.withContext(function($ctx2) {
angsum=_st(angsum).__plus(ang);
$ctx2.sendIdx["+"]=1;
angsum;
$10=self._radius();
$ctx2.sendIdx["radius"]=1;
$9=_st($10).__star(_st(_st(angsum)._degreeSin()).__plus((1)));
$ctx2.sendIdx["*"]=2;
$8=_st($9).__at(_st(self._radius()).__star((1).__minus(_st(angsum)._degreeCos())));
_st(ele)._translateTo_($8);
$11=_st(ele)._size_((0));
return $11;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,ang:ang},$ctx1,2)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModel",{angsum:angsum,rawElements:rawElements},smalltalk.GETPieDiagram)})},
args: [],
source: "getElementsFromModel\x0a\x09| angsum rawElements |\x0a\x09\x0a\x09rawElements := (ROElement forCollection: (1 to: (self models size))).\x0a\x09angsum := 0.\x0a\x09\x0a\x09^ rawElements\x0a\x09\x09with: ((self models) collect: [:each | each/(self models sum)*360])\x0a\x09\x09do: [:ele :ang |\x0a\x09\x09\x09angsum := angsum + ang.\x0a\x09\x09\x09ele translateTo: (((self radius)*((angsum degreeSin) + 1))@((self radius)*(1 - (angsum degreeCos)))); size: 0]",
messageSends: ["forCollection:", "to:", "size", "models", "with:do:", "collect:", "*", "/", "sum", "+", "translateTo:", "@", "radius", "degreeSin", "-", "degreeCos", "size:"],
referencedClasses: ["ROElement"]
}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
smalltalk.GETPieDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2)._defaultRadius();
self._radius_($1);
self._lineColor_(_st(self._class())._defaultLineColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETPieDiagram)})},
args: [],
source: "initialize \x0a\x09\x0a\x09super initialize.\x0a\x09self radius: (self class defaultRadius).\x0a\x09self lineColor: (self class defaultLineColor).",
messageSends: ["initialize", "radius:", "defaultRadius", "class", "lineColor:", "defaultLineColor"],
referencedClasses: []
}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "lineColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lineColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineColor",{},smalltalk.GETPieDiagram)})},
args: [],
source: "lineColor\x0a\x0a\x09^ lineColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "lineColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@lineColor"]=aColor;
$1=self["@lineColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineColor:",{aColor:aColor},smalltalk.GETPieDiagram)})},
args: ["aColor"],
source: "lineColor: aColor\x0a\x0a\x09^ lineColor := aColor.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.GETPieDiagram)})},
args: [],
source: "radius\x0a\x0a\x09^ radius.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETPieDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
category: 'accessing',
fn: function (aRadius){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@radius"]=aRadius;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius:",{aRadius:aRadius},smalltalk.GETPieDiagram)})},
args: ["aRadius"],
source: "radius: aRadius\x0a\x0a\x09^ radius := aRadius.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETPieDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultLineColor",
category: 'default',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLineColor",{},smalltalk.GETPieDiagram.klass)})},
args: [],
source: "defaultLineColor\x0a\x0a\x09^ Color black.",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.GETPieDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (150);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.GETPieDiagram.klass)})},
args: [],
source: "defaultRadius\x0a\x0a\x09^ 150.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETPieDiagram.klass);


smalltalk.addClass('GETScatterPlot', smalltalk.GETAbstract2DDiagram, ['x', 'y'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView},smalltalk.GETScatterPlot)})},
args: ["aView"],
source: "generateIn: aView",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.GETScatterPlot)})},
args: [],
source: "x\x0a\x0a\x09^ x.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (newX){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=newX;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{newX:newX},smalltalk.GETScatterPlot)})},
args: ["newX"],
source: "x: newX\x0a\x0a\x09x := newX",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.GETScatterPlot)})},
args: [],
source: "y\x0a\x0a\x09^ y",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETScatterPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (newY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=newY;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{newY:newY},smalltalk.GETScatterPlot)})},
args: ["newY"],
source: "y: newY\x0a\x0a\x09y := newY",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETScatterPlot);



smalltalk.addClass('GETSingleAxisDiagram', smalltalk.GETAbstract2DDiagram, ['x', 'y'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETSingleAxisDiagram)})},
args: ["aDecorator"],
source: "addBaseDecorator: aDecorator \x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETSingleAxisDiagram)})},
args: ["aDecorator"],
source: "addValueDecorator: aDecorator \x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "baseAxisLine",
category: 'scripting',
fn: function (){
var self=this;
function $GETBaseLineDecorator(){return smalltalk.GETBaseLineDecorator||(typeof GETBaseLineDecorator=="undefined"?nil:GETBaseLineDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addBaseDecorator_(_st($GETBaseLineDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"baseAxisLine",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "baseAxisLine\x0a\x09\x22Add a plain line for the base axis\x22\x0a\x09self addBaseDecorator: GETBaseLineDecorator new",
messageSends: ["addBaseDecorator:", "new"],
referencedClasses: ["GETBaseLineDecorator"]
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
smalltalk.GETSingleAxisDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2)._defaultProperty();
$ctx1.sendIdx["defaultProperty"]=1;
self._x_($1);
self._y_(_st(self._class())._defaultProperty());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self x: (self class) defaultProperty.\x0a\x09self y: (self class) defaultProperty",
messageSends: ["initialize", "x:", "defaultProperty", "class", "y:"],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxis",
category: 'scripting',
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._valueAxisLine();
self._baseAxisLine();
$1=_st($GETRegularTickDecorator())._new();
$ctx1.sendIdx["new"]=1;
self._addValueDecorator_($1);
$ctx1.sendIdx["addValueDecorator:"]=1;
self._addValueDecorator_(_st($GETRegularLabelDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxis",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "regularAxis\x0a\x09\x22Add the vertical and horizontal axis. The value axis has ticks and labels.\x22\x0a\x09self valueAxisLine.\x0a\x09self baseAxisLine.\x0a\x09self addValueDecorator: GETRegularTickDecorator new.\x0a\x09self addValueDecorator: GETRegularLabelDecorator new",
messageSends: ["valueAxisLine", "baseAxisLine", "addValueDecorator:", "new"],
referencedClasses: ["GETRegularTickDecorator", "GETRegularLabelDecorator"]
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxisAsInteger",
category: 'scripting',
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._valueAxisLine();
self._baseAxisLine();
$1=_st($GETRegularTickDecorator())._new();
$ctx1.sendIdx["new"]=1;
self._addValueDecorator_($1);
$ctx1.sendIdx["addValueDecorator:"]=1;
self._addValueDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatInteger());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxisAsInteger",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "regularAxisAsInteger\x0a\x09\x22Add the vertical and horizontal axis. The value axis has ticks and labels. All the labels are as Integer\x22\x0a\x09self valueAxisLine.\x0a\x09self baseAxisLine.\x0a\x09self addValueDecorator: GETRegularTickDecorator new.\x0a\x09self addValueDecorator: (GETRegularLabelDecorator new formatInteger)",
messageSends: ["valueAxisLine", "baseAxisLine", "addValueDecorator:", "new", "formatInteger"],
referencedClasses: ["GETRegularTickDecorator", "GETRegularLabelDecorator"]
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularLabels",
category: 'scripting',
fn: function (){
var self=this;
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addValueDecorator_(_st($GETRegularLabelDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularLabels",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "regularLabels\x0a\x09\x0a\x09self addValueDecorator: GETRegularLabelDecorator new",
messageSends: ["addValueDecorator:", "new"],
referencedClasses: ["GETRegularLabelDecorator"]
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularTicks",
category: 'scripting',
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addValueDecorator_(_st($GETRegularTickDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularTicks",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "regularTicks\x0a\x0a\x09self addValueDecorator: GETRegularTickDecorator new",
messageSends: ["addValueDecorator:", "new"],
referencedClasses: ["GETRegularTickDecorator"]
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeInPixelsOfPositiveArea:",
category: 'processing',
fn: function (maxSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1,$7,$6,$8,$5,$11,$10,$13,$15,$14,$12,$9,$17,$16,$18;
$3=self._minValue();
$ctx1.sendIdx["minValue"]=1;
$2=_st($3).__gt((0));
$ctx1.sendIdx[">"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self._maxValue();
$ctx2.sendIdx["maxValue"]=1;
return _st($4).__gt((0));
$ctx2.sendIdx[">"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
if(smalltalk.assert($1)){
return maxSize;
};
$7=self._minValue();
$ctx1.sendIdx["minValue"]=2;
$6=_st($7).__lt_eq((0));
$ctx1.sendIdx["<="]=1;
$5=_st($6)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$8=self._maxValue();
$ctx2.sendIdx["maxValue"]=2;
return _st($8).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["and:"]=2;
if(smalltalk.assert($5)){
$11=self._maxValue();
$ctx1.sendIdx["maxValue"]=3;
$10=_st(maxSize).__star($11);
$13=self._maxValue();
$ctx1.sendIdx["maxValue"]=4;
$15=self._minValue();
$ctx1.sendIdx["minValue"]=3;
$14=_st($15)._abs();
$12=_st($13).__plus($14);
$9=_st($10).__slash($12);
return $9;
};
$17=_st(self._minValue()).__lt_eq((0));
$ctx1.sendIdx["<="]=2;
$16=_st($17)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__lt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
if(smalltalk.assert($16)){
return (0);
};
$18=self._error_("should not be here");
return $18;
}, function($ctx1) {$ctx1.fill(self,"sizeInPixelsOfPositiveArea:",{maxSize:maxSize},smalltalk.GETSingleAxisDiagram)})},
args: ["maxSize"],
source: "sizeInPixelsOfPositiveArea: maxSize\x0a\x09\x22return the bar size (width or height) for the corresponding maxSize\x22\x0a\x09\x0a\x09(self minValue > 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize ].\x0a\x09(self minValue <= 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize * self maxValue / (self maxValue + (self minValue abs))  ].\x0a\x09(self minValue <= 0 and: [ self maxValue <= 0 ]) ifTrue: [ ^ 0 ].\x0a\x0a\x09^ self error: 'should not be here'",
messageSends: ["ifTrue:", "and:", ">", "minValue", "maxValue", "<=", "/", "*", "+", "abs", "error:"],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "valueAxisLine",
category: 'scripting',
fn: function (){
var self=this;
function $GETBaseLineDecorator(){return smalltalk.GETBaseLineDecorator||(typeof GETBaseLineDecorator=="undefined"?nil:GETBaseLineDecorator)}
return smalltalk.withContext(function($ctx1) { 
self._addValueDecorator_(_st($GETBaseLineDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"valueAxisLine",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "valueAxisLine\x0a\x09\x22Add a plain line\x22\x0a\x09self addValueDecorator: GETBaseLineDecorator new",
messageSends: ["addValueDecorator:", "new"],
referencedClasses: ["GETBaseLineDecorator"]
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@x"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"x",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "x\x0a\x0a\x09^ x",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"x:",{anObject:anObject},smalltalk.GETSingleAxisDiagram)})},
args: ["anObject"],
source: "x: anObject\x0a\x0a\x09x := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@y"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"y",{},smalltalk.GETSingleAxisDiagram)})},
args: [],
source: "y\x0a\x0a\x09^ y",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@y"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"y:",{anObject:anObject},smalltalk.GETSingleAxisDiagram)})},
args: ["anObject"],
source: "y: anObject\x0a\x0a\x09y := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultProperty",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "yourself";
}, function($ctx1) {$ctx1.fill(self,"defaultProperty",{},smalltalk.GETSingleAxisDiagram.klass)})},
args: [],
source: "defaultProperty\x0a\x0a\x09^#yourself",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETSingleAxisDiagram.klass);


smalltalk.addClass('GETAbstractBarDiagram', smalltalk.GETSingleAxisDiagram, ['spacing', 'barWidth', 'barGap'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "barWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@barWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"barWidth",{},smalltalk.GETAbstractBarDiagram)})},
args: [],
source: "barWidth\x0a\x0a\x09^ barWidth.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "barWidth:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@barWidth"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"barWidth:",{aNumber:aNumber},smalltalk.GETAbstractBarDiagram)})},
args: ["aNumber"],
source: "barWidth: aNumber\x0a\x0a\x09barWidth := aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
smalltalk.GETAbstractBarDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
$2=self._class();
$ctx1.sendIdx["class"]=1;
$1=_st($2)._defaultBarwidth();
self._barWidth_($1);
self._spacing_(_st(self._class())._defaultSpacing());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstractBarDiagram)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09self barWidth: (self class) defaultBarwidth.\x0a\x09self spacing: (self class) defaultSpacing",
messageSends: ["initialize", "barWidth:", "defaultBarwidth", "class", "spacing:", "defaultSpacing"],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nonValuedParameter",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$7,$8,$6,$2,$1;
$5=self._values();
$ctx1.sendIdx["values"]=1;
$4=_st($5)._size();
$ctx1.sendIdx["size"]=1;
$3=_st($4).__star(self._barWidth());
$ctx1.sendIdx["*"]=1;
$7=_st(_st(self._values())._size()).__minus((1));
$8=self._spacing();
$ctx1.sendIdx["spacing"]=1;
$6=_st($7).__star($8);
$ctx1.sendIdx["*"]=2;
$2=_st($3).__plus($6);
$1=_st($2).__plus((2).__star(self._spacing()));
$ctx1.sendIdx["+"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonValuedParameter",{},smalltalk.GETAbstractBarDiagram)})},
args: [],
source: "nonValuedParameter\x0a\x09\x22Return the size of the axis that enumerates over the elements\x22\x0a\x09^ (self values size * self barWidth) + (self values size - 1 * self spacing) + (2 * self spacing)",
messageSends: ["+", "*", "size", "values", "barWidth", "-", "spacing"],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@spacing"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"spacing",{},smalltalk.GETAbstractBarDiagram)})},
args: [],
source: "spacing\x0a\x0a\x09^ spacing.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@spacing"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"spacing:",{aNumber:aNumber},smalltalk.GETAbstractBarDiagram)})},
args: ["aNumber"],
source: "spacing: aNumber\x0a\x0a\x09spacing := aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBarwidth",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"defaultBarwidth",{},smalltalk.GETAbstractBarDiagram.klass)})},
args: [],
source: "defaultBarwidth\x0a\x0a\x09^ 20",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultGap",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"defaultGap",{},smalltalk.GETAbstractBarDiagram.klass)})},
args: [],
source: "defaultGap\x0a\x09\x22Default gap between bars and axi in pixels.\x22\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultSpacing",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultSpacing",{},smalltalk.GETAbstractBarDiagram.klass)})},
args: [],
source: "defaultSpacing\x0a\x09\x22Default gap between bars in pixels.\x22\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractBarDiagram.klass);


smalltalk.addClass('GETHorizontalBarDiagram', smalltalk.GETAbstractBarDiagram, [], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETHorizontalBarDiagram)})},
args: ["aDecorator"],
source: "addBaseDecorator: aDecorator \x0a\x0a\x09self addYDecorator: aDecorator",
messageSends: ["addYDecorator:"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETHorizontalBarDiagram)})},
args: ["aDecorator"],
source: "addValueDecorator: aDecorator \x0a\x0a\x09self addXDecorator: aDecorator",
messageSends: ["addXDecorator:"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
var bars;
return smalltalk.withContext(function($ctx1) { 
self._values_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._x())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
self._setMaxAndMinValues();
self._height_(smalltalk.GETHorizontalBarDiagram.superclass.fn.prototype._nonValuedParameter.apply(_st(self), []));
bars=self._getElementsFromModels();
_st(self._elements())._addAll_(bars);
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,bars:bars},smalltalk.GETHorizontalBarDiagram)})},
args: ["aView"],
source: "generateIn: aView\x0a\x0a\x09| bars |\x0a\x09self values: (self models collect: [ :each | self x roValue: each ]).\x0a\x09self setMaxAndMinValues.\x0a\x09self height: super nonValuedParameter.\x0a\x09\x0a\x09bars := self getElementsFromModels.\x0a\x09\x0a\x09self elements addAll: bars.\x0a\x09self addElementsToView: aView.",
messageSends: ["values:", "collect:", "models", "roValue:", "x", "setMaxAndMinValues", "height:", "nonValuedParameter", "getElementsFromModels", "addAll:", "elements", "addElementsToView:"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
category: 'processing',
fn: function (){
var self=this;
var count,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$6,$5,$7,$11,$15,$16,$14,$13,$17,$12,$10,$9,$8,$19,$20,$18,$21,$22,$4;
$3=self._models();
$ctx1.sendIdx["models"]=1;
$2=_st($3)._size();
$1=(1)._to_($2);
rawElements=_st($ROElement())._forCollection_($1);
count=(1);
$4=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var value;
return smalltalk.withContext(function($ctx2) {
$6=self._x();
$ctx2.sendIdx["x"]=1;
$5=_st($6)._value_(model);
$ctx2.sendIdx["value:"]=1;
value=self._getPixelsFromValue_($5);
value;
$7=_st(value)._abs();
$ctx2.sendIdx["abs"]=1;
_st(ele)._width_($7);
$ctx2.sendIdx["width:"]=1;
_st(ele)._model_(model);
$11=self._offsetFromAxis_(value);
$15=self._spacing();
$16=self._barWidth();
$ctx2.sendIdx["barWidth"]=1;
$14=_st($15).__plus($16);
$ctx2.sendIdx["+"]=2;
$13=_st($14).__star(count);
$17=self._barWidth();
$ctx2.sendIdx["barWidth"]=2;
$12=_st($13).__minus($17);
$10=_st($11).__at($12);
$9=_st(ele)._translateTo_($10);
$8=$9;
$19=_st($ROBox())._new();
$ctx2.sendIdx["new"]=1;
_st($19)._width_(_st(value)._abs());
_st($19)._height_(self._barWidth());
$20=_st($19)._color_(self._colorFor_(ele));
$18=$20;
_st($8).__plus($18);
$ctx2.sendIdx["+"]=1;
count=_st(count).__plus((1));
count;
$21=_st($GETDataObject())._new();
_st($21)._roElement_(ele);
_st($21)._value_(_st(self._x())._value_(model));
$ctx2.sendIdx["value:"]=2;
$22=_st($21)._isBig_(true);
return $22;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,value:value},$ctx1,1)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{count:count,rawElements:rawElements},smalltalk.GETHorizontalBarDiagram)})},
args: [],
source: "getElementsFromModels\x0a\x09| count rawElements |\x0a\x09\x0a\x09rawElements := ROElement forCollection: (1 to: self models size).\x0a\x09count := 1.\x0a\x09\x0a\x09^ rawElements\x0a\x09\x09with: self models\x0a\x09\x09collect: [:ele :model |\x0a\x09\x09\x09| value |\x0a\x09\x09\x09value := self getPixelsFromValue: (self x value: model).\x0a\x09\x09\x09\x0a\x09\x09\x09ele width: (value abs).\x0a\x0a\x09\x09\x09(ele model: model; \x0a\x09\x09\x09translateTo: (self offsetFromAxis: value)@((self spacing + self barWidth) * count - self barWidth))\x0a\x09\x09\x09\x09+\x0a\x09\x09\x09\x09\x09(ROBox new\x0a\x09\x09\x09\x09\x09\x09width: value abs;\x0a\x09\x09\x09\x09\x09\x09height: self barWidth;\x0a\x09\x09\x09\x09\x09\x09color: (self colorFor: ele)).\x0a\x09\x09\x09count := count + 1.\x0a\x09\x09\x09\x0a\x09\x09\x09GETDataObject new\x0a\x09\x09\x09\x09roElement: ele;\x0a\x09\x09\x09\x09value: (self x value: model);\x0a\x09\x09\x09\x09isBig: true]",
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "getPixelsFromValue:", "value:", "x", "width:", "abs", "+", "model:", "translateTo:", "@", "offsetFromAxis:", "-", "*", "spacing", "barWidth", "new", "height:", "color:", "colorFor:", "roElement:", "isBig:"],
referencedClasses: ["ROElement", "ROBox", "GETDataObject"]
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
category: 'processing',
fn: function (value){
var self=this;
var semiresult;
return smalltalk.withContext(function($ctx1) { 
var $1;
semiresult=_st(_st(value).__star(self._width())).__slash(_st(self._maxValue()).__minus(self._minValue()));
$1=_st(semiresult)._roundUpTo_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value,semiresult:semiresult},smalltalk.GETHorizontalBarDiagram)})},
args: ["value"],
source: "getPixelsFromValue: value\x0a\x0a\x09| semiresult |\x0a\x0a\x09semiresult := value * (self width) / (self maxValue - self minValue).\x0a\x09\x0a\x09\x22This ensures that if the division is not whole, it rounds up to the top.\x22\x0a\x09^ semiresult roundUpTo: 1",
messageSends: ["/", "*", "width", "-", "maxValue", "minValue", "roundUpTo:"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetFromAxis:",
category: 'processing',
fn: function (amountOfPixels){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(amountOfPixels).__gt((0));
if(smalltalk.assert($2)){
$1=self._widthOfNegativeArea();
$ctx1.sendIdx["widthOfNegativeArea"]=1;
} else {
$1=_st(self._widthOfNegativeArea()).__plus(amountOfPixels);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"offsetFromAxis:",{amountOfPixels:amountOfPixels},smalltalk.GETHorizontalBarDiagram)})},
args: ["amountOfPixels"],
source: "offsetFromAxis: amountOfPixels\x0a\x09\x22Return the offset in pixels from the axis\x22\x0a\x09^ amountOfPixels > 0\x0a\x09\x09ifTrue: [ self widthOfNegativeArea ]\x0a\x09\x09ifFalse: [ self widthOfNegativeArea + amountOfPixels ]",
messageSends: ["ifTrue:ifFalse:", ">", "widthOfNegativeArea", "+"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleYAxis",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self._yAxis();
$4=self._widthOfNegativeArea();
$ctx1.sendIdx["widthOfNegativeArea"]=1;
$3=_st($4).__at((0));
$ctx1.sendIdx["@"]=1;
$1=_st($2)._from_to_($3,_st(self._widthOfNegativeArea()).__at(self._nonValuedParameter()));
self._yAxis_($1);
return self}, function($ctx1) {$ctx1.fill(self,"scaleYAxis",{},smalltalk.GETHorizontalBarDiagram)})},
args: [],
source: "scaleYAxis\x09\x09\x0a\x0a\x09self yAxis:\x0a\x09(self yAxis\x0a\x09\x09from: self widthOfNegativeArea @ 0\x0a\x09\x09to: self widthOfNegativeArea @ self nonValuedParameter)",
messageSends: ["yAxis:", "from:to:", "yAxis", "@", "widthOfNegativeArea", "nonValuedParameter"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
category: 'animation',
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
$ctx2.sendIdx["value:"]=1;
value;
newBounds=_st(self._getPixelsFromValue_(value)).__at(self._barWidth());
newBounds;
_st(each)._value_(value);
return _st($ROAnimatedResizing())._for_resizeAndFixTopLeft_(roElement,newBounds);
}, function($ctx2) {$ctx2.fillBlock({each:each,newBounds:newBounds,roElement:roElement,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETHorizontalBarDiagram)})},
args: ["aBlock"],
source: "updateBlock: aBlock\x0a\x0a\x09self x: aBlock.\x0a\x09\x0a\x09elements do: [ :each | | newBounds roElement value |\x0a\x09\x09\x09roElement := each roElement.\x0a\x09\x09\x09value := x value: roElement model.\x0a\x09\x09\x09newBounds :=  (self getPixelsFromValue: value) @ self barWidth.\x0a\x09\x09\x09\x0a\x09\x09\x09each value: value.\x0a\x09\x09\x09ROAnimatedResizing for: roElement resizeAndFixTopLeft: newBounds ]",
messageSends: ["x:", "do:", "roElement", "value:", "model", "@", "getPixelsFromValue:", "barWidth", "for:resizeAndFixTopLeft:"],
referencedClasses: ["ROAnimatedResizing"]
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfNegativeArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__minus(self._widthOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfNegativeArea",{},smalltalk.GETHorizontalBarDiagram)})},
args: [],
source: "widthOfNegativeArea\x0a\x09^ self width - self widthOfPositiveArea",
messageSends: ["-", "width", "widthOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfPositiveArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfPositiveArea",{},smalltalk.GETHorizontalBarDiagram)})},
args: [],
source: "widthOfPositiveArea\x0a\x09^ self sizeInPixelsOfPositiveArea: self width",
messageSends: ["sizeInPixelsOfPositiveArea:", "width"],
referencedClasses: []
}),
smalltalk.GETHorizontalBarDiagram);



smalltalk.addClass('GETVerticalBarDiagram', smalltalk.GETAbstractBarDiagram, [], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETVerticalBarDiagram)})},
args: ["aDecorator"],
source: "addBaseDecorator: aDecorator \x0a\x0a\x09self addXDecorator: aDecorator",
messageSends: ["addXDecorator:"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETVerticalBarDiagram)})},
args: ["aDecorator"],
source: "addValueDecorator: aDecorator \x0a\x0a\x09self addYDecorator: aDecorator",
messageSends: ["addYDecorator:"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
var bars;
return smalltalk.withContext(function($ctx1) { 
self._values_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._y())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
self._setMaxAndMinValues();
self._width_(smalltalk.GETVerticalBarDiagram.superclass.fn.prototype._nonValuedParameter.apply(_st(self), []));
bars=self._getElementsFromModels();
_st(self._elements())._addAll_(bars);
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,bars:bars},smalltalk.GETVerticalBarDiagram)})},
args: ["aView"],
source: "generateIn: aView\x0a\x0a\x09| bars |\x0a\x09\x0a\x09self values: (self models collect: [ :each | self y roValue: each ]).\x0a\x09\x0a\x09self setMaxAndMinValues.\x0a\x09self width: super nonValuedParameter.\x0a\x09\x0a\x09bars := self getElementsFromModels.\x0a\x09\x0a\x09self elements addAll: bars.\x0a\x09self addElementsToView: aView",
messageSends: ["values:", "collect:", "models", "roValue:", "y", "setMaxAndMinValues", "width:", "nonValuedParameter", "getElementsFromModels", "addAll:", "elements", "addElementsToView:"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
category: 'processing',
fn: function (){
var self=this;
var count,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$6,$5,$7,$14,$15,$13,$12,$16,$11,$10,$9,$8,$18,$19,$17,$20,$21,$4;
$3=self._models();
$ctx1.sendIdx["models"]=1;
$2=_st($3)._size();
$1=(1)._to_($2);
rawElements=_st($ROElement())._forCollection_($1);
count=(1);
$4=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var value;
return smalltalk.withContext(function($ctx2) {
$6=self._y();
$ctx2.sendIdx["y"]=1;
$5=_st($6)._roValue_(model);
$ctx2.sendIdx["roValue:"]=1;
value=self._getPixelsFromValue_($5);
value;
$7=_st(value)._abs();
$ctx2.sendIdx["abs"]=1;
_st(ele)._height_($7);
$ctx2.sendIdx["height:"]=1;
_st(ele)._model_(model);
$14=self._spacing();
$15=self._barWidth();
$ctx2.sendIdx["barWidth"]=1;
$13=_st($14).__plus($15);
$ctx2.sendIdx["+"]=2;
$12=_st($13).__star(count);
$16=self._barWidth();
$ctx2.sendIdx["barWidth"]=2;
$11=_st($12).__minus($16);
$10=_st($11).__at(self._offsetFromAxis_(value));
$9=_st(ele)._translateTo_($10);
$8=$9;
$18=_st($ROBox())._new();
$ctx2.sendIdx["new"]=1;
_st($18)._width_(self._barWidth());
_st($18)._height_(_st(value)._abs());
$19=_st($18)._color_(self._colorFor_(ele));
$17=$19;
_st($8).__plus($17);
$ctx2.sendIdx["+"]=1;
count=_st(count).__plus((1));
count;
$20=_st($GETDataObject())._new();
_st($20)._roElement_(ele);
_st($20)._value_(_st(self._y())._roValue_(model));
$21=_st($20)._isBig_(true);
return $21;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,value:value},$ctx1,1)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{count:count,rawElements:rawElements},smalltalk.GETVerticalBarDiagram)})},
args: [],
source: "getElementsFromModels\x0a\x09| count rawElements |\x0a\x09\x0a\x09rawElements := ROElement forCollection: (1 to: self models size).\x0a\x09count := 1.\x0a\x0a\x09^ rawElements\x0a\x09\x09with: self models\x0a\x09\x09collect: [ :ele :model |\x0a\x09\x09\x09| value |\x0a\x09\x09\x09value := self getPixelsFromValue: (self y roValue: model).\x0a\x0a\x09\x09\x09ele height: (value abs).\x0a\x0a\x09\x09\x09(ele model: model;\x0a\x09\x09\x09translateTo: ((self spacing + self barWidth) * count - self barWidth) @ (self offsetFromAxis: value))\x0a\x09\x09\x09\x09+\x0a\x09\x09\x09\x09\x09(ROBox new\x0a\x09\x09\x09\x09\x09\x09width: self barWidth;\x0a\x09\x09\x09\x09\x09\x09height: (value abs);\x0a\x09\x09\x09\x09\x09\x09color:  (self colorFor: ele)).\x0a\x09\x09\x09count := count + 1.\x0a\x09\x09\x09\x0a\x09\x09\x09GETDataObject new\x0a\x09\x09\x09\x09roElement: ele;\x0a\x09\x09\x09\x09value: (self y roValue: model);\x0a\x09\x09\x09\x09isBig: true]",
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "getPixelsFromValue:", "roValue:", "y", "height:", "abs", "+", "model:", "translateTo:", "@", "-", "*", "spacing", "barWidth", "offsetFromAxis:", "width:", "new", "color:", "colorFor:", "roElement:", "value:", "isBig:"],
referencedClasses: ["ROElement", "ROBox", "GETDataObject"]
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
category: 'processing',
fn: function (value){
var self=this;
var semiresult;
return smalltalk.withContext(function($ctx1) { 
var $1;
semiresult=_st(_st(value).__star(self._height())).__slash(_st(self._maxValue()).__minus(self._minValue()));
$1=_st(semiresult)._roundUpTo_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value,semiresult:semiresult},smalltalk.GETVerticalBarDiagram)})},
args: ["value"],
source: "getPixelsFromValue: value\x0a\x0a\x09| semiresult |\x0a\x09\x0a\x09semiresult := value * (self height) / (self maxValue - self minValue).\x0a\x09\x0a\x09\x22This ensures that if the division is not whole, it rounds up to the top.\x22\x0a\x09^ semiresult roundUpTo: 1",
messageSends: ["/", "*", "height", "-", "maxValue", "minValue", "roundUpTo:"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfNegativeArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__minus(self._heightOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfNegativeArea",{},smalltalk.GETVerticalBarDiagram)})},
args: [],
source: "heightOfNegativeArea\x0a\x09^ self height - self heightOfPositiveArea",
messageSends: ["-", "height", "heightOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfPositiveArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfPositiveArea",{},smalltalk.GETVerticalBarDiagram)})},
args: [],
source: "heightOfPositiveArea\x0a\x09^ self sizeInPixelsOfPositiveArea: self height",
messageSends: ["sizeInPixelsOfPositiveArea:", "height"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetFromAxis:",
category: 'processing',
fn: function (amountOfPixels){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(amountOfPixels).__gt((0));
if(smalltalk.assert($2)){
$3=self._heightOfPositiveArea();
$ctx1.sendIdx["heightOfPositiveArea"]=1;
$1=_st($3).__minus(amountOfPixels);
} else {
$1=self._heightOfPositiveArea();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"offsetFromAxis:",{amountOfPixels:amountOfPixels},smalltalk.GETVerticalBarDiagram)})},
args: ["amountOfPixels"],
source: "offsetFromAxis: amountOfPixels\x0a\x09\x22Return the offset in pixels from the axis\x22\x0a\x09^ amountOfPixels > 0\x0a\x09\x09ifTrue: [ self heightOfPositiveArea - amountOfPixels ]\x0a\x09\x09ifFalse: [ self heightOfPositiveArea ]",
messageSends: ["ifTrue:ifFalse:", ">", "-", "heightOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self._xAxis();
$4=self._heightOfPositiveArea();
$ctx1.sendIdx["heightOfPositiveArea"]=1;
$3=(0).__at($4);
$ctx1.sendIdx["@"]=1;
$1=_st($2)._from_to_($3,_st(self._nonValuedParameter()).__at(self._heightOfPositiveArea()));
self._xAxis_($1);
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETVerticalBarDiagram)})},
args: [],
source: "scaleXAxis\x0a\x0a\x09self xAxis:\x0a\x09\x09(self xAxis\x0a\x09\x09\x09from: 0 @ self heightOfPositiveArea\x0a\x09\x09\x09to: self nonValuedParameter @ self heightOfPositiveArea)",
messageSends: ["xAxis:", "from:to:", "xAxis", "@", "heightOfPositiveArea", "nonValuedParameter"],
referencedClasses: []
}),
smalltalk.GETVerticalBarDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
category: 'animation',
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
$ctx2.sendIdx["value:"]=1;
value;
newBounds=_st(self._barWidth()).__at(self._getPixelsFromValue_(value));
newBounds;
_st(each)._value_(value);
return _st($ROAnimatedResizing())._for_resizeAndFixBottomLeft_(roElement,newBounds);
}, function($ctx2) {$ctx2.fillBlock({each:each,newBounds:newBounds,roElement:roElement,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETVerticalBarDiagram)})},
args: ["aBlock"],
source: "updateBlock: aBlock\x0a\x0a\x09self y: aBlock.\x0a\x09\x0a\x09elements do: [ :each | | newBounds roElement value |\x0a\x09\x09\x09roElement := each roElement.\x0a\x09\x09\x09value := y value: roElement model.\x0a\x09\x09\x09newBounds := self barWidth @ (self getPixelsFromValue: value).\x0a\x09\x09\x09\x0a\x09\x09\x09each value: value.\x0a\x09\x09\x09ROAnimatedResizing for: roElement resizeAndFixBottomLeft: newBounds ]",
messageSends: ["y:", "do:", "roElement", "value:", "model", "@", "barWidth", "getPixelsFromValue:", "for:resizeAndFixBottomLeft:"],
referencedClasses: ["ROAnimatedResizing"]
}),
smalltalk.GETVerticalBarDiagram);



smalltalk.addClass('GETAbstractLineDiagram', smalltalk.GETSingleAxisDiagram, ['dotSize'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstractLineDiagram)})},
args: ["aDecorator"],
source: "addBaseDecorator: aDecorator \x0a\x0a\x09self addXDecorator: aDecorator",
messageSends: ["addXDecorator:"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETAbstractLineDiagram)})},
args: ["aDecorator"],
source: "addValueDecorator: aDecorator \x0a\x0a\x09self addYDecorator: aDecorator",
messageSends: ["addYDecorator:"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "dotSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dotSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dotSize",{},smalltalk.GETAbstractLineDiagram)})},
args: [],
source: "dotSize\x0a\x09\x0a\x09^ dotSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "dotSize:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dotSize"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"dotSize:",{anObject:anObject},smalltalk.GETAbstractLineDiagram)})},
args: ["anObject"],
source: "dotSize: anObject\x0a\x09\x0a\x09dotSize := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
var dots;
return smalltalk.withContext(function($ctx1) { 
self._values_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._y())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
self._setMaxAndMinValues();
self._width_(self._nonValuedParameter());
dots=self._getElementsFromModels();
_st(self._elements())._addAll_(dots);
$ctx1.sendIdx["addAll:"]=1;
_st(self._extraElements())._addAll_(self._linesForElements_(self._roElements()));
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView,dots:dots},smalltalk.GETAbstractLineDiagram)})},
args: ["aView"],
source: "generateIn: aView\x0a\x0a\x09| dots |\x0a\x09\x0a\x09self values: ( self models collect: [ :each | self y roValue: each ] ).\x0a\x09\x0a\x09self setMaxAndMinValues.\x0a\x09self width: self nonValuedParameter.\x0a\x09\x0a\x09dots := self getElementsFromModels.\x0a\x09\x0a\x09self elements addAll: dots.\x0a\x09self extraElements addAll: (self linesForElements: self roElements).\x0a\x09self addElementsToView: aView",
messageSends: ["values:", "collect:", "models", "roValue:", "y", "setMaxAndMinValues", "width:", "nonValuedParameter", "getElementsFromModels", "addAll:", "elements", "extraElements", "linesForElements:", "roElements", "addElementsToView:"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{},smalltalk.GETAbstractLineDiagram)})},
args: [],
source: "getElementsFromModels\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
category: 'processing',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(value).__star(self._height())).__slash(_st(self._maxValue()).__minus(self._minValue()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value},smalltalk.GETAbstractLineDiagram)})},
args: ["value"],
source: "getPixelsFromValue: value\x0a\x0a\x09^ value * (self height) / (self maxValue - self minValue)",
messageSends: ["/", "*", "height", "-", "maxValue", "minValue"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfNegativeArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__minus(self._heightOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfNegativeArea",{},smalltalk.GETAbstractLineDiagram)})},
args: [],
source: "heightOfNegativeArea\x0a\x09^ self height - self heightOfPositiveArea",
messageSends: ["-", "height", "heightOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfPositiveArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfPositiveArea",{},smalltalk.GETAbstractLineDiagram)})},
args: [],
source: "heightOfPositiveArea\x0a\x09^ self sizeInPixelsOfPositiveArea: self height",
messageSends: ["sizeInPixelsOfPositiveArea:", "height"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETAbstractLineDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._dotSize_(_st(self._class())._defaultDotSize());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAbstractLineDiagram)})},
args: [],
source: "initialize \x0a\x0a\x09super initialize.\x0a\x09self dotSize: self class defaultDotSize",
messageSends: ["initialize", "dotSize:", "defaultDotSize", "class"],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "linesForElements:",
category: 'processing',
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
$ctx1.sendIdx["new"]=1;
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
}, function($ctx2) {$ctx2.fillBlock({el:el,index:index},$ctx1,1)})}));
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"linesForElements:",{rawElements:rawElements,result:result,previous:previous,edge:edge,lineShape:lineShape},smalltalk.GETAbstractLineDiagram)})},
args: ["rawElements"],
source: "linesForElements: rawElements\x0a\x09\x22Return a list of edges that lines all the elements\x22\x0a\x0a\x09| result previous edge lineShape |\x0a\x09result := OrderedCollection new.\x0a\x09previous := rawElements first.\x0a\x09rawElements allButFirst doWithIndex: [ :el :index | \x0a\x09\x09edge := ROEdge from: previous to: el.\x0a\x09\x09lineShape := ROLine new.\x0a\x09\x09lineShape attachPoint: (ROCenteredAttachPoint instance).\x0a\x09\x09edge + lineShape.\x0a\x09\x09result add: edge.\x0a\x09\x09previous := el ].\x0a\x09^ result.",
messageSends: ["new", "first", "doWithIndex:", "allButFirst", "from:to:", "attachPoint:", "instance", "+", "add:"],
referencedClasses: ["OrderedCollection", "ROEdge", "ROLine", "ROCenteredAttachPoint"]
}),
smalltalk.GETAbstractLineDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultDotSize",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (2);
}, function($ctx1) {$ctx1.fill(self,"defaultDotSize",{},smalltalk.GETAbstractLineDiagram.klass)})},
args: [],
source: "defaultDotSize\x0a\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractLineDiagram.klass);


smalltalk.addClass('GETLineDiagram', smalltalk.GETAbstractLineDiagram, ['minXValue', 'xValues', 'maxXValue'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xValues_(_st(self._models())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self._x())._roValue_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
self._setMaxAndMinXValues();
smalltalk.GETLineDiagram.superclass.fn.prototype._generateIn_.apply(_st(self), [aView]);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView},smalltalk.GETLineDiagram)})},
args: ["aView"],
source: "generateIn: aView\x0a\x0a\x09self xValues: (self models collect: [ :each | self x roValue: each ]).\x0a\x0a\x09self setMaxAndMinXValues.\x0a\x09super generateIn: aView",
messageSends: ["xValues:", "collect:", "models", "roValue:", "x", "setMaxAndMinXValues", "generateIn:"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
category: 'processing',
fn: function (){
var self=this;
var rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$7,$6,$10,$9,$8,$12,$13,$14,$15,$11,$16,$17,$4;
$3=self._models();
$ctx1.sendIdx["models"]=1;
$2=_st($3)._size();
$1=(1)._to_($2);
rawElements=_st($ROElement())._forCollection_($1);
$4=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var dotX,dotY;
return smalltalk.withContext(function($ctx2) {
$5=_st(self._x())._value_(model);
$ctx2.sendIdx["value:"]=1;
dotX=self._getPixelsFromXValue_($5);
dotX;
$7=self._y();
$ctx2.sendIdx["y"]=1;
$6=_st($7)._value_(model);
$ctx2.sendIdx["value:"]=2;
dotY=self._getPixelsFromValue_($6);
dotY;
_st(ele)._model_(model);
_st(ele)._translateTo_(_st(dotX).__at(_st(self._heightOfPositiveArea()).__minus(dotY)));
$10=self._dotSize();
$ctx2.sendIdx["dotSize"]=1;
$9=_st(ele)._size_($10);
$8=$9;
$12=_st($ROEllipse())._new();
$ctx2.sendIdx["new"]=1;
_st($12)._color_(self._colorFor_(ele));
$13=$12;
$14=self._dotSize();
$ctx2.sendIdx["dotSize"]=2;
_st($13)._width_($14);
$15=_st($12)._height_(self._dotSize());
$11=$15;
_st($8).__plus($11);
$16=_st($GETDataObject())._new();
_st($16)._roElement_(ele);
$17=_st($16)._value_(_st(self._y())._value_(model));
$ctx2.sendIdx["value:"]=3;
return $17;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,dotX:dotX,dotY:dotY},$ctx1,1)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{rawElements:rawElements},smalltalk.GETLineDiagram)})},
args: [],
source: "getElementsFromModels\x0a\x0a\x09| rawElements |\x0a\x09rawElements := ROElement forCollection: (1 to: self models size).\x0a\x09\x0a\x09^ rawElements \x0a\x09\x09with: self models\x0a\x09\x09collect: [ :ele :model | \x0a\x09\x09\x09| dotX dotY |\x0a\x09\x09\x09dotX := self getPixelsFromXValue: (self x value: model).\x0a\x09\x09\x09dotY := self getPixelsFromValue: (self y value: model).\x0a\x0a\x09\x09\x09(ele model: model;\x0a\x09\x09\x09translateTo: (dotX@(self heightOfPositiveArea - dotY));\x0a\x09\x09\x09size: self dotSize)\x0a\x09\x09\x09+\x0a\x09\x09\x09(ROEllipse new color: (self colorFor: ele); width: self dotSize; height: self dotSize).\x0a\x09\x09\x09\x0a\x09\x09\x09GETDataObject new\x0a\x09\x09\x09\x09roElement: ele;\x0a\x09\x09\x09\x09value: (self y value: model) ]",
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "getPixelsFromXValue:", "value:", "x", "getPixelsFromValue:", "y", "+", "model:", "translateTo:", "@", "-", "heightOfPositiveArea", "size:", "dotSize", "color:", "new", "colorFor:", "width:", "height:", "roElement:"],
referencedClasses: ["ROElement", "ROEllipse", "GETDataObject"]
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromXValue:",
category: 'processing',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(value).__star(self._width())).__slash(_st(self._maxXValue()).__minus(self._minXValue()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromXValue:",{value:value},smalltalk.GETLineDiagram)})},
args: ["value"],
source: "getPixelsFromXValue: value\x0a\x0a\x09^ value * (self width) / (self maxXValue - self minXValue)",
messageSends: ["/", "*", "width", "-", "maxXValue", "minXValue"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxXValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxXValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxXValue",{},smalltalk.GETLineDiagram)})},
args: [],
source: "maxXValue\x0a\x09\x0a\x09^ maxXValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "maxXValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxXValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"maxXValue:",{anObject:anObject},smalltalk.GETLineDiagram)})},
args: ["anObject"],
source: "maxXValue: anObject\x0a\x09\x0a\x09maxXValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minXValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minXValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minXValue",{},smalltalk.GETLineDiagram)})},
args: [],
source: "minXValue\x0a\x09\x0a\x09^ minXValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "minXValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minXValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"minXValue:",{anObject:anObject},smalltalk.GETLineDiagram)})},
args: ["anObject"],
source: "minXValue: anObject\x0a\x09\x0a\x09minXValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nonValuedParameter",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonValuedParameter",{},smalltalk.GETLineDiagram)})},
args: [],
source: "nonValuedParameter\x0a\x09^ self width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxis",
category: 'scripting',
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.GETLineDiagram.superclass.fn.prototype._regularAxis.apply(_st(self), []);
$1=_st($GETRegularTickDecorator())._new();
$ctx1.sendIdx["new"]=1;
self._addBaseDecorator_($1);
$ctx1.sendIdx["addBaseDecorator:"]=1;
self._addBaseDecorator_(_st($GETRegularLabelDecorator())._new());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxis",{},smalltalk.GETLineDiagram)})},
args: [],
source: "regularAxis\x0a\x09\x22Add the vertical and horizontal axis. The value axis has ticks and labels.\x22\x0a\x09super regularAxis.\x0a\x09\x0a\x09self addBaseDecorator: GETRegularTickDecorator new.\x0a\x09self addBaseDecorator: GETRegularLabelDecorator new",
messageSends: ["regularAxis", "addBaseDecorator:", "new"],
referencedClasses: ["GETRegularTickDecorator", "GETRegularLabelDecorator"]
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "regularAxisAsInteger",
category: 'scripting',
fn: function (){
var self=this;
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.GETLineDiagram.superclass.fn.prototype._regularAxisAsInteger.apply(_st(self), []);
$1=_st($GETRegularTickDecorator())._new();
$ctx1.sendIdx["new"]=1;
self._addBaseDecorator_($1);
$ctx1.sendIdx["addBaseDecorator:"]=1;
self._addBaseDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatInteger());
return self}, function($ctx1) {$ctx1.fill(self,"regularAxisAsInteger",{},smalltalk.GETLineDiagram)})},
args: [],
source: "regularAxisAsInteger\x0a\x09\x22Add the vertical and horizontal axis. The value axis has ticks and labels. All the labels are as Integer\x22\x0a\x09super regularAxisAsInteger.\x0a\x09\x0a\x09self addBaseDecorator: GETRegularTickDecorator new.\x0a\x09self addBaseDecorator: (GETRegularLabelDecorator new formatInteger)",
messageSends: ["regularAxisAsInteger", "addBaseDecorator:", "new", "formatInteger"],
referencedClasses: ["GETRegularTickDecorator", "GETRegularLabelDecorator"]
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1;
$2=self._xAxis();
$4=_st(self._widthOfNegativeArea())._negated();
$5=self._heightOfPositiveArea();
$ctx1.sendIdx["heightOfPositiveArea"]=1;
$3=_st($4).__at($5);
$ctx1.sendIdx["@"]=1;
$1=_st($2)._from_to_($3,_st(self._widthOfPositiveArea()).__at(self._heightOfPositiveArea()));
self._xAxis_($1);
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETLineDiagram)})},
args: [],
source: "scaleXAxis\x0a\x0a\x09self xAxis:\x0a\x09\x09(self xAxis\x0a\x09\x09\x09from: (self widthOfNegativeArea negated) @ self heightOfPositiveArea\x0a\x09\x09\x09to: self widthOfPositiveArea @ self heightOfPositiveArea).",
messageSends: ["xAxis:", "from:to:", "xAxis", "@", "negated", "widthOfNegativeArea", "heightOfPositiveArea", "widthOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setMaxAndMinXValues",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=self._xValues();
$ctx1.sendIdx["xValues"]=1;
$2=_st($3)._max();
$1=_st($2)._max_((0));
self._maxXValue_($1);
self._minXValue_(_st(_st(self._xValues())._min())._min_((0)));
return self}, function($ctx1) {$ctx1.fill(self,"setMaxAndMinXValues",{},smalltalk.GETLineDiagram)})},
args: [],
source: "setMaxAndMinXValues\x0a\x0a\x09self maxXValue: (self xValues max max: 0).\x0a\x09self minXValue: (self xValues min min: 0)",
messageSends: ["maxXValue:", "max:", "max", "xValues", "minXValue:", "min:", "min"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "setXAxisValues",
category: 'scripting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._xAxis_(_st(self._xAxis())._max_min_(self["@maxXValue"],self["@minXValue"]));
return self}, function($ctx1) {$ctx1.fill(self,"setXAxisValues",{},smalltalk.GETLineDiagram)})},
args: [],
source: "setXAxisValues\x0a\x0a\x09self xAxis:\x0a\x09(self xAxis\x0a\x09\x09max: maxXValue\x0a\x09\x09min: minXValue)",
messageSends: ["xAxis:", "max:min:", "xAxis"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeInPixelsOfPositiveXArea:",
category: 'processing',
fn: function (maxSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1,$7,$6,$8,$5,$11,$10,$9,$13,$12,$14;
$3=self._minValue();
$ctx1.sendIdx["minValue"]=1;
$2=_st($3).__gt((0));
$ctx1.sendIdx[">"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self._maxValue();
$ctx2.sendIdx["maxValue"]=1;
return _st($4).__gt((0));
$ctx2.sendIdx[">"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
if(smalltalk.assert($1)){
return maxSize;
};
$7=self._minValue();
$ctx1.sendIdx["minValue"]=2;
$6=_st($7).__lt_eq((0));
$ctx1.sendIdx["<="]=1;
$5=_st($6)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$8=self._maxValue();
$ctx2.sendIdx["maxValue"]=2;
return _st($8).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["and:"]=2;
if(smalltalk.assert($5)){
$11=self._maxXValue();
$ctx1.sendIdx["maxXValue"]=1;
$10=_st(maxSize).__star($11);
$9=_st($10).__slash(_st(self._maxXValue()).__plus(_st(self._minXValue())._abs()));
return $9;
};
$13=_st(self._minValue()).__lt_eq((0));
$ctx1.sendIdx["<="]=2;
$12=_st($13)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._maxValue()).__lt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
if(smalltalk.assert($12)){
return (0);
};
$14=self._error_("should not be here");
return $14;
}, function($ctx1) {$ctx1.fill(self,"sizeInPixelsOfPositiveXArea:",{maxSize:maxSize},smalltalk.GETLineDiagram)})},
args: ["maxSize"],
source: "sizeInPixelsOfPositiveXArea: maxSize\x0a\x09\x22return the bar size (width or height) for the corresponding maxSize\x22\x0a\x09\x0a\x09(self minValue > 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize ].\x0a\x09(self minValue <= 0 and: [ self maxValue > 0 ]) ifTrue: [ ^ maxSize * self maxXValue / (self maxXValue + (self minXValue abs))  ].\x0a\x09(self minValue <= 0 and: [ self maxValue <= 0 ]) ifTrue: [ ^ 0 ].\x0a\x0a\x09^ self error: 'should not be here'",
messageSends: ["ifTrue:", "and:", ">", "minValue", "maxValue", "<=", "/", "*", "maxXValue", "+", "abs", "minXValue", "error:"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "updateY:",
category: 'animation',
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
$ctx2.sendIdx["value:"]=1;
value;
newPosition=_st(_st(_st(roElement)._position())._x()).__at(_st(self._heightOfPositiveArea()).__minus(self._getPixelsFromValue_(value)));
newPosition;
_st(each)._value_(value);
return _st($ROLinearMove())._for_to_(roElement,newPosition);
}, function($ctx2) {$ctx2.fillBlock({each:each,newPosition:newPosition,roElement:roElement,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateY:",{aBlock:aBlock},smalltalk.GETLineDiagram)})},
args: ["aBlock"],
source: "updateY: aBlock\x0a\x0a\x09self y: aBlock.\x0a\x09\x0a\x09elements do: [ :each | | newPosition roElement value |\x0a\x09\x09\x09roElement := each roElement.\x0a\x09\x09\x09value := y value: roElement model.\x0a\x09\x09\x09newPosition := (roElement position x) @ (self heightOfPositiveArea - (self getPixelsFromValue: value)).\x0a\x09\x09\x09\x0a\x09\x09\x09each value: value.\x0a\x09\x09\x09ROLinearMove for: roElement to: newPosition ]",
messageSends: ["y:", "do:", "roElement", "value:", "model", "@", "x", "position", "-", "heightOfPositiveArea", "getPixelsFromValue:", "for:to:"],
referencedClasses: ["ROLinearMove"]
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfNegativeArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__minus(self._widthOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfNegativeArea",{},smalltalk.GETLineDiagram)})},
args: [],
source: "widthOfNegativeArea\x0a\x09^ self width - self widthOfPositiveArea",
messageSends: ["-", "width", "widthOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfPositiveArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveXArea_(self._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfPositiveArea",{},smalltalk.GETLineDiagram)})},
args: [],
source: "widthOfPositiveArea\x0a\x09^ self sizeInPixelsOfPositiveXArea: self width",
messageSends: ["sizeInPixelsOfPositiveXArea:", "width"],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xValues",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xValues"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xValues",{},smalltalk.GETLineDiagram)})},
args: [],
source: "xValues\x0a\x09\x0a\x09^ xValues",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "xValues:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xValues"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"xValues:",{anObject:anObject},smalltalk.GETLineDiagram)})},
args: ["anObject"],
source: "xValues: anObject\x0a\x09\x0a\x09xValues := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETLineDiagram);



smalltalk.addClass('GETOrdinaryLineDiagram', smalltalk.GETAbstractLineDiagram, ['spacing'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "getElementsFromModels",
category: 'processing',
fn: function (){
var self=this;
var count,rawElements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $GETDataObject(){return smalltalk.GETDataObject||(typeof GETDataObject=="undefined"?nil:GETDataObject)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$8,$7,$6,$9,$11,$12,$13,$14,$10,$15,$16,$4;
$3=self._models();
$ctx1.sendIdx["models"]=1;
$2=_st($3)._size();
$1=(1)._to_($2);
rawElements=_st($ROElement())._forCollection_($1);
count=(1);
$4=_st(rawElements)._with_collect_(self._models(),(function(ele,model){
var dotY,dotX;
return smalltalk.withContext(function($ctx2) {
$5=self._heightOfPositiveArea();
$8=self._y();
$ctx2.sendIdx["y"]=1;
$7=_st($8)._value_(model);
$ctx2.sendIdx["value:"]=1;
$6=self._getPixelsFromValue_($7);
dotY=_st($5).__minus($6);
dotY;
dotX=_st(self._spacing()).__star(count);
dotX;
_st(ele)._model_(model);
$9=_st(ele)._translateTo_(_st(dotX).__at(dotY));
$9;
$11=_st($ROEllipse())._new();
$ctx2.sendIdx["new"]=1;
_st($11)._color_(self._colorFor_(ele));
$12=$11;
$13=self._dotSize();
$ctx2.sendIdx["dotSize"]=1;
_st($12)._width_($13);
$14=_st($11)._height_(self._dotSize());
$10=$14;
_st(ele).__plus($10);
$ctx2.sendIdx["+"]=1;
count=_st(count).__plus((1));
count;
$15=_st($GETDataObject())._new();
_st($15)._roElement_(ele);
$16=_st($15)._value_(_st(self._y())._value_(model));
$ctx2.sendIdx["value:"]=2;
return $16;
}, function($ctx2) {$ctx2.fillBlock({ele:ele,model:model,dotY:dotY,dotX:dotX},$ctx1,1)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"getElementsFromModels",{count:count,rawElements:rawElements},smalltalk.GETOrdinaryLineDiagram)})},
args: [],
source: "getElementsFromModels\x0a\x0a\x09| count rawElements |\x0a\x09rawElements := ROElement forCollection: (1 to: self models size).\x0a\x09count := 1.\x0a\x0a\x09^ rawElements\x0a\x09\x09with: self models\x0a\x09\x09collect: [ :ele :model | \x0a\x09\x09\x09| dotY dotX |\x0a\x09\x09\x09dotY := self heightOfPositiveArea - (self getPixelsFromValue: (self y value: model)).\x0a\x09\x09\x09dotX := self spacing * count.\x0a\x09\x09\x09\x0a\x09\x09\x09ele model: model;\x0a\x09\x09\x09\x09translateTo: dotX @ dotY.\x0a\x09\x09\x09ele + (ROEllipse new\x0a\x09\x09\x09\x09\x09\x09color: (self colorFor: ele);\x0a\x09\x09\x09\x09\x09\x09width: self dotSize;\x0a\x09\x09\x09\x09\x09\x09height: self dotSize).\x0a\x0a\x09\x09\x09count := count + 1.\x0a\x09\x09\x09\x0a\x09\x09\x09GETDataObject new\x0a\x09\x09\x09\x09roElement: ele;\x0a\x09\x09\x09\x09value: (self y value: model)]",
messageSends: ["forCollection:", "to:", "size", "models", "with:collect:", "-", "heightOfPositiveArea", "getPixelsFromValue:", "value:", "y", "*", "spacing", "model:", "translateTo:", "@", "+", "color:", "new", "colorFor:", "width:", "dotSize", "height:", "roElement:"],
referencedClasses: ["ROElement", "ROEllipse", "GETDataObject"]
}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETOrdinaryLineDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._spacing_(_st(self._class())._defaultSpacing());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETOrdinaryLineDiagram)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self spacing: (self class) defaultSpacing",
messageSends: ["initialize", "spacing:", "defaultSpacing", "class"],
referencedClasses: []
}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nonValuedParameter",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._values())._size()).__plus((1))).__star(self._spacing());
return $1;
}, function($ctx1) {$ctx1.fill(self,"nonValuedParameter",{},smalltalk.GETOrdinaryLineDiagram)})},
args: [],
source: "nonValuedParameter\x0a\x09\x22Return the size of the axis that enumerates over the elements\x22\x0a\x09^ (self values size + 1) * self spacing",
messageSends: ["*", "+", "size", "values", "spacing"],
referencedClasses: []
}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleXAxis",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=self._xAxis();
$4=self._heightOfPositiveArea();
$ctx1.sendIdx["heightOfPositiveArea"]=1;
$3=(0).__at($4);
$ctx1.sendIdx["@"]=1;
$1=_st($2)._from_to_($3,_st(self._nonValuedParameter()).__at(self._heightOfPositiveArea()));
self._xAxis_($1);
return self}, function($ctx1) {$ctx1.fill(self,"scaleXAxis",{},smalltalk.GETOrdinaryLineDiagram)})},
args: [],
source: "scaleXAxis\x0a\x0a\x09self xAxis:\x0a\x09\x09(self xAxis\x0a\x09\x09\x09from: 0 @ self heightOfPositiveArea\x0a\x09\x09\x09to: self nonValuedParameter @ self heightOfPositiveArea)",
messageSends: ["xAxis:", "from:to:", "xAxis", "@", "heightOfPositiveArea", "nonValuedParameter"],
referencedClasses: []
}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@spacing"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"spacing",{},smalltalk.GETOrdinaryLineDiagram)})},
args: [],
source: "spacing\x0a\x09^ spacing",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETOrdinaryLineDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "spacing:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@spacing"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"spacing:",{anObject:anObject},smalltalk.GETOrdinaryLineDiagram)})},
args: ["anObject"],
source: "spacing: anObject\x0a\x09spacing := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETOrdinaryLineDiagram);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultSpacing",
category: 'default',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"defaultSpacing",{},smalltalk.GETOrdinaryLineDiagram.klass)})},
args: [],
source: "defaultSpacing\x0a\x0a\x09^ 20",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETOrdinaryLineDiagram.klass);


smalltalk.addClass('GETCompositeDiagram', smalltalk.GETSingleAxisDiagram, ['diagrams'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'accessing',
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
args: ["aDiagram"],
source: "add: aDiagram \x0a\x0a\x09aDiagram isGETDiagram\x0a\x09\x09ifTrue: [ self diagrams add: aDiagram ]\x0a\x09\x09ifFalse: [ self error: 'Can not add something that is not a Diagram' ]",
messageSends: ["ifTrue:ifFalse:", "isGETDiagram", "add:", "diagrams", "error:"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addBaseDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addXDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addBaseDecorator:",{aDecorator:aDecorator},smalltalk.GETCompositeDiagram)})},
args: ["aDecorator"],
source: "addBaseDecorator: aDecorator \x0a\x0a\x09self addXDecorator: aDecorator",
messageSends: ["addXDecorator:"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "addValueDecorator:",
category: 'scripting',
fn: function (aDecorator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addYDecorator_(aDecorator);
return self}, function($ctx1) {$ctx1.fill(self,"addValueDecorator:",{aDecorator:aDecorator},smalltalk.GETCompositeDiagram)})},
args: ["aDecorator"],
source: "addValueDecorator: aDecorator \x0a\x0a\x09self addYDecorator: aDecorator",
messageSends: ["addYDecorator:"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "diagrams",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@diagrams"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"diagrams",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "diagrams\x0a\x09\x0a\x09^ diagrams",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "diagrams:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@diagrams"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"diagrams:",{anObject:anObject},smalltalk.GETCompositeDiagram)})},
args: ["anObject"],
source: "diagrams: anObject\x0a\x09\x0a\x09diagrams := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "generateIn:",
category: 'displaying',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
self._initializeDiagrams();
$2=self._diagrams();
$ctx1.sendIdx["diagrams"]=1;
$1=_st($2)._collect_("values");
$ctx1.sendIdx["collect:"]=1;
_st($1)._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(self["@values"])._addAll_(col);
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1,1)})}));
$3=self._hasValues();
if(smalltalk.assert($3)){
self._setMaxAndMinValues();
};
self._width_(_st(_st(self._diagrams())._collect_("width"))._max());
self._operateElements();
self._addElementsToView_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"generateIn:",{aView:aView},smalltalk.GETCompositeDiagram)})},
args: ["aView"],
source: "generateIn: aView\x0a\x0a\x09self initializeDiagrams.\x0a\x09\x0a\x09(self diagrams collect: #values) do: [ :col | values addAll: col ].\x0a\x09self hasValues ifTrue: [ self setMaxAndMinValues ].\x0a\x09\x0a\x09self width: (self diagrams collect: #width) max.\x0a\x09\x0a\x09self operateElements.\x0a\x09\x0a\x09self addElementsToView: aView",
messageSends: ["initializeDiagrams", "do:", "collect:", "diagrams", "addAll:", "ifTrue:", "hasValues", "setMaxAndMinValues", "width:", "max", "operateElements", "addElementsToView:"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "getPixelsFromValue:",
category: 'processing',
fn: function (value){
var self=this;
var semiresult;
return smalltalk.withContext(function($ctx1) { 
var $1;
semiresult=_st(_st(value).__star(self._height())).__slash(_st(self._maxValue()).__minus(self._minValue()));
$1=_st(semiresult)._roundUpTo_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getPixelsFromValue:",{value:value,semiresult:semiresult},smalltalk.GETCompositeDiagram)})},
args: ["value"],
source: "getPixelsFromValue: value\x0a\x0a\x09| semiresult |\x0a\x09\x0a\x09semiresult := value * (self height) / (self maxValue - self minValue).\x0a\x09\x0a\x09\x22This ensures that if the division is not whole, it rounds up to the top.\x22\x0a\x09^ semiresult roundUpTo: 1",
messageSends: ["/", "*", "height", "-", "maxValue", "minValue", "roundUpTo:"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "hasModels",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._diagrams())._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasModels",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "hasModels\x0a\x0a\x09^self diagrams isEmpty not",
messageSends: ["not", "isEmpty", "diagrams"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "hasValues",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._values())._isEmpty())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasValues",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "hasValues\x0a\x0a\x09^self values isEmpty not",
messageSends: ["not", "isEmpty", "values"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfNegativeArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__minus(self._heightOfPositiveArea());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfNegativeArea",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "heightOfNegativeArea\x0a\x09^ self height - self heightOfPositiveArea",
messageSends: ["-", "height", "heightOfPositiveArea"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "heightOfPositiveArea",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._sizeInPixelsOfPositiveArea_(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightOfPositiveArea",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "heightOfPositiveArea\x0a\x09^ self sizeInPixelsOfPositiveArea: self height",
messageSends: ["sizeInPixelsOfPositiveArea:", "height"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETCompositeDiagram.superclass.fn.prototype._initialize.apply(_st(self), []);
self._diagrams_(_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "initialize \x0a\x09\x0a\x09super initialize.\x0a\x09self diagrams: OrderedCollection new",
messageSends: ["initialize", "diagrams:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeDiagrams",
category: 'initialize-release',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagrams())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._displayIn_(_st($ROView())._new());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeDiagrams",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "initializeDiagrams\x0a\x0a\x09self diagrams do: [ :each | each displayIn: ROView new ]",
messageSends: ["do:", "diagrams", "displayIn:", "new"],
referencedClasses: ["ROView"]
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "joinElements",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._diagrams();
$ctx1.sendIdx["diagrams"]=1;
$1=_st($2)._collect_("elements");
$ctx1.sendIdx["collect:"]=1;
_st($1)._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(self["@elements"])._addAll_(col);
$ctx2.sendIdx["addAll:"]=1;
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(_st(self._diagrams())._collect_("extraElements"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(self["@extraElements"])._addAll_(col);
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"joinElements",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "joinElements\x0a\x0a\x09(self diagrams collect: #elements) do: [ :col | elements addAll: col ].\x0a\x09(self diagrams collect: #extraElements) do: [ :col | extraElements addAll: col ]",
messageSends: ["do:", "collect:", "diagrams", "addAll:"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "nullifyElements",
category: 'processing',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._diagrams();
$ctx1.sendIdx["diagrams"]=1;
$1=_st($2)._collect_("elements");
$ctx1.sendIdx["collect:"]=1;
_st($1)._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(col)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
$3=_st(each)._roElement();
$4=_st($ROView())._nullView();
$ctx3.sendIdx["nullView"]=1;
return _st($3)._view_($4);
$ctx3.sendIdx["view:"]=1;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
$ctx2.sendIdx["do:"]=2;
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(_st(self._diagrams())._collect_("extraElements"))._do_((function(col){
return smalltalk.withContext(function($ctx2) {
return _st(col)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._view_(_st($ROView())._nullView());
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1,3)})}));
$ctx1.sendIdx["do:"]=3;
return self}, function($ctx1) {$ctx1.fill(self,"nullifyElements",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "nullifyElements\x0a\x0a\x09(self diagrams collect: #elements) do: [ :col | col do: [ :each | each roElement view: ROView nullView ] ].\x0a\x09(self diagrams collect: #extraElements) do: [ :col | col do: [ :each | each view: ROView nullView ] ]",
messageSends: ["do:", "collect:", "diagrams", "view:", "roElement", "nullView"],
referencedClasses: ["ROView"]
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "operateElements",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nullifyElements();
self._joinElements();
self._scaleElements();
self._transElements();
self._sortElements();
return self}, function($ctx1) {$ctx1.fill(self,"operateElements",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "operateElements\x0a\x0a\x09self nullifyElements.\x0a\x09self joinElements.\x0a\x09self scaleElements.\x0a\x09self transElements.\x0a\x09self sortElements",
messageSends: ["nullifyElements", "joinElements", "scaleElements", "transElements", "sortElements"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleElements",
category: 'processing',
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"scaleElements",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "scaleElements\x0a\x0a\x09elements do: [ :each | each isBig ifTrue: [ each roElement height: (self getPixelsFromValue: each getValue) ] ]",
messageSends: ["do:", "ifTrue:", "isBig", "height:", "roElement", "getPixelsFromValue:", "getValue"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "sortElements",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
_st(self["@elements"])._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$2=_st(a)._getValue();
$ctx2.sendIdx["getValue"]=1;
$1=_st($2)._abs();
$ctx2.sendIdx["abs"]=1;
return _st($1).__gt_eq(_st(_st(b)._getValue())._abs());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"sortElements",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "sortElements\x0a\x0a\x09elements sort: [ :a :b | (a getValue abs) >= (b getValue abs) ]",
messageSends: ["sort:", ">=", "abs", "getValue"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);

smalltalk.addMethod(
smalltalk.method({
selector: "transElements",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
_st(self._elements())._do_((function(each){
var trans,actualX,pixels;
return smalltalk.withContext(function($ctx2) {
pixels=self._getPixelsFromValue_(_st(each)._getValue());
pixels;
$1=_st(each)._isBig();
if(smalltalk.assert($1)){
$2=_st(pixels).__gt((0));
if(smalltalk.assert($2)){
$3=self._heightOfPositiveArea();
$ctx2.sendIdx["heightOfPositiveArea"]=1;
trans=_st($3).__minus(pixels);
$ctx2.sendIdx["-"]=1;
trans;
} else {
trans=self._heightOfPositiveArea();
$ctx2.sendIdx["heightOfPositiveArea"]=2;
trans;
};
} else {
trans=_st(self._heightOfPositiveArea()).__minus(pixels);
trans;
};
$5=_st(each)._roElement();
$ctx2.sendIdx["roElement"]=1;
$4=_st($5)._position();
actualX=_st($4)._x();
actualX;
return _st(_st(each)._roElement())._translateTo_(_st(actualX).__at(trans));
}, function($ctx2) {$ctx2.fillBlock({each:each,trans:trans,actualX:actualX,pixels:pixels},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"transElements",{},smalltalk.GETCompositeDiagram)})},
args: [],
source: "transElements\x0a\x0a\x09self elements do: [ :each | | trans actualX pixels |\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09pixels := self getPixelsFromValue: each getValue.\x0a\x09\x09\x09\x09\x09\x09\x09\x09(each isBig)\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ pixels > 0\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ trans := self heightOfPositiveArea - pixels ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ trans := self heightOfPositiveArea ]  ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ trans := self heightOfPositiveArea - pixels ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09actualX := each roElement position x.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09each roElement translateTo: (actualX@trans) ]",
messageSends: ["do:", "elements", "getPixelsFromValue:", "getValue", "ifTrue:ifFalse:", "isBig", ">", "-", "heightOfPositiveArea", "x", "position", "roElement", "translateTo:", "@"],
referencedClasses: []
}),
smalltalk.GETCompositeDiagram);



smalltalk.addClass('GETDataObject', smalltalk.Object, ['value', 'roElement', 'isBig'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "getValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"getValue",{},smalltalk.GETDataObject)})},
args: [],
source: "getValue\x0a\x09\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETDataObject.superclass.fn.prototype._initialize.apply(_st(self), []);
self._roElement_(_st($ROElement())._new());
self._value_((0));
self._isBig_(false);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETDataObject)})},
args: [],
source: "initialize \x0a\x09\x0a\x09super initialize.\x0a\x09self roElement: ROElement new.\x0a\x09self value: 0.\x0a\x09self isBig: false",
messageSends: ["initialize", "roElement:", "new", "value:", "isBig:"],
referencedClasses: ["ROElement"]
}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isBig",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isBig"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isBig",{},smalltalk.GETDataObject)})},
args: [],
source: "isBig\x0a\x09^ isBig",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isBig:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isBig"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"isBig:",{anObject:anObject},smalltalk.GETDataObject)})},
args: ["anObject"],
source: "isBig: anObject\x0a\x09isBig := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "roElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@roElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"roElement",{},smalltalk.GETDataObject)})},
args: [],
source: "roElement\x0a\x09\x0a\x09^ roElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "roElement:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@roElement"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"roElement:",{anObject:anObject},smalltalk.GETDataObject)})},
args: ["anObject"],
source: "roElement: anObject\x0a\x09\x0a\x09roElement := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDataObject);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.GETDataObject)})},
args: ["anObject"],
source: "value: anObject\x0a\x09\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDataObject);



smalltalk.addClass('GETDiagramBuilder', smalltalk.Object, ['diagram', 'intWrapper', 'rawView', 'stack'], 'Graph-ET-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "compositeDiagram",
category: 'diagrams',
fn: function (){
var self=this;
function $GETCompositeDiagram(){return smalltalk.GETCompositeDiagram||(typeof GETCompositeDiagram=="undefined"?nil:GETCompositeDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETCompositeDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"compositeDiagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "compositeDiagram\x0a\x0a\x09^ diagram := GETCompositeDiagram new",
messageSends: ["new"],
referencedClasses: ["GETCompositeDiagram"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "diagram",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"diagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "diagram\x0a\x0a\x09^ diagram.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalBarDiagram",
category: 'diagrams',
fn: function (){
var self=this;
function $GETHorizontalBarDiagram(){return smalltalk.GETHorizontalBarDiagram||(typeof GETHorizontalBarDiagram=="undefined"?nil:GETHorizontalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETHorizontalBarDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalBarDiagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "horizontalBarDiagram\x0a\x0a\x09^ diagram := GETHorizontalBarDiagram new.",
messageSends: ["new"],
referencedClasses: ["GETHorizontalBarDiagram"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initDefaultButtons",
category: 'initialize-release',
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
args: [],
source: "initDefaultButtons\x0a\x0a\x09stack \x0a\x09\x09exportButton;\x0a\x09\x09findButton;\x0a\x09\x09zoomInButton;\x0a\x09\x09zoomOutButton",
messageSends: ["exportButton", "findButton", "zoomInButton", "zoomOutButton"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETDiagramBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@rawView"]=_st($ROView())._new();
self._verticalBarDiagram();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x22\x09\x0a\x09stack := ROViewStack new.\x0a\x09rawView := ROView new @ RODraggable.\x0a\x22\x0a\x09rawView := ROView new.\x0a\x22\x09stack addView: rawView.\x22\x09\x22Default\x22\x0a\x09self verticalBarDiagram",
messageSends: ["initialize", "new", "verticalBarDiagram"],
referencedClasses: ["ROView"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "intWrapper",
category: 'accessing',
fn: function (){
var self=this;
function $GETInteractionWrapper(){return smalltalk.GETInteractionWrapper||(typeof GETInteractionWrapper=="undefined"?nil:GETInteractionWrapper)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@intWrapper"];
if(($receiver = $2) == nil || $receiver == null){
self._intWrapper_(_st($GETInteractionWrapper())._new());
$1=self._intWrapper();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"intWrapper",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "intWrapper\x0a\x09\x0a\x09^ intWrapper ifNil: [\x0a\x09\x09self intWrapper: GETInteractionWrapper new.\x0a\x09\x09self intWrapper.].",
messageSends: ["ifNil:", "intWrapper:", "new", "intWrapper"],
referencedClasses: ["GETInteractionWrapper"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "intWrapper:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@intWrapper"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"intWrapper:",{anObject:anObject},smalltalk.GETDiagramBuilder)})},
args: ["anObject"],
source: "intWrapper: anObject\x0a\x09\x0a\x09intWrapper := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interaction",
category: 'interaction',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._intWrapper())._diagram_(self._diagram());
return $1;
}, function($ctx1) {$ctx1.fill(self,"interaction",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "interaction\x0a\x09\x0a\x09^ (self intWrapper) diagram: (self diagram).",
messageSends: ["diagram:", "intWrapper", "diagram"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "lineDiagram",
category: 'diagrams',
fn: function (){
var self=this;
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETLineDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineDiagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "lineDiagram\x0a\x0a\x09^ diagram := GETLineDiagram new",
messageSends: ["new"],
referencedClasses: ["GETLineDiagram"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'public-ui',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rawView();
$ctx1.sendIdx["rawView"]=1;
self._openIn_($1);
_st(self._rawView())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "open\x0a\x09\x22Public method\x22\x0a\x09\x0a\x09self openIn: self rawView.\x0a\x22\x09^ stack open\x22\x0a\x09self rawView open.",
messageSends: ["openIn:", "rawView", "open"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "openIn:",
category: 'public-ui',
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
args: ["aROView"],
source: "openIn: aROView\x0a\x0a\x09self rawView: aROView.\x0a\x22\x09self stack addView: self rawView.\x22\x0a\x09\x0a\x09self diagram displayIn: aROView.\x0a\x09self relocateView.\x0a\x09\x0a\x09^ self stack",
messageSends: ["rawView:", "displayIn:", "diagram", "relocateView", "stack"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "openTest",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._openIn_(self["@rawView"]);
$1=self["@rawView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"openTest",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "openTest\x0a\x09\x22Simulate the action of opening the view\x22\x0a\x09self openIn: rawView.\x0a\x09^ rawView",
messageSends: ["openIn:"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ordinaryLineDiagram",
category: 'diagrams',
fn: function (){
var self=this;
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETOrdinaryLineDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"ordinaryLineDiagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "ordinaryLineDiagram\x0a\x0a\x09^ diagram := GETOrdinaryLineDiagram new",
messageSends: ["new"],
referencedClasses: ["GETOrdinaryLineDiagram"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "pieDiagram",
category: 'diagrams',
fn: function (){
var self=this;
function $GETPieDiagram(){return smalltalk.GETPieDiagram||(typeof GETPieDiagram=="undefined"?nil:GETPieDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETPieDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"pieDiagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "pieDiagram\x0a\x0a\x09^ diagram := GETPieDiagram new",
messageSends: ["new"],
referencedClasses: ["GETPieDiagram"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawView",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rawView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawView",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "rawView\x0a\x09\x0a\x09^ rawView",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rawView:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawView"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"rawView:",{anObject:anObject},smalltalk.GETDiagramBuilder)})},
args: ["anObject"],
source: "rawView: anObject\x0a\x09\x0a\x09rawView := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relocateView",
category: 'private',
fn: function (){
var self=this;
var all;
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$4,$3,$2,$6,$8,$7;
all=_st(self._rawView())._elements();
$1=_st(all)._isEmpty();
if(! smalltalk.assert($1)){
var transX,transY;
$4=_st(all)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
$5=_st(each)._position();
$ctx2.sendIdx["position"]=1;
return _st($5)._x();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$ctx1.sendIdx["collect:"]=1;
$3=_st($4)._min();
$ctx1.sendIdx["min"]=1;
$2=_st($3)._min_((0));
$ctx1.sendIdx["min:"]=1;
transX=_st($2)._negated();
$ctx1.sendIdx["negated"]=1;
transX;
transY=_st(_st(_st(_st(all)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._position())._y();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})})))._min())._min_((0)))._negated();
transY;
$6=self["@rawView"];
$8=_st(transX).__plus((10));
$ctx1.sendIdx["+"]=1;
$7=_st($8).__at(_st(transY).__plus((50)));
_st($6)._translateBy_($7);
};
return self}, function($ctx1) {$ctx1.fill(self,"relocateView",{all:all},smalltalk.GETDiagramBuilder)})},
args: [],
source: "relocateView\x0a\x09\x0a\x09| all |\x0a\x09\x0a\x09all := self rawView elements.\x0a\x09all isEmpty ifFalse: [ | transX transY |\x0a\x09\x09transX := ((all collect: [ :each | each position x ]) min min: 0) negated.\x0a\x09\x09transY := ((all collect: [ :each | each position y ]) min min: 0) negated.\x0a\x09\x09rawView translateBy: (transX + 10) @ (transY + 50) \x0a\x09]",
messageSends: ["elements", "rawView", "ifFalse:", "isEmpty", "negated", "min:", "min", "collect:", "x", "position", "y", "translateBy:", "@", "+"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "scatterplot",
category: 'diagrams',
fn: function (){
var self=this;
function $GETScatterPlot(){return smalltalk.GETScatterPlot||(typeof GETScatterPlot=="undefined"?nil:GETScatterPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETScatterPlot())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scatterplot",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "scatterplot\x0a\x0a\x09^ diagram := GETScatterPlot new",
messageSends: ["new"],
referencedClasses: ["GETScatterPlot"]
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "stack",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@stack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"stack",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "stack\x0a\x09^ stack",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "updateBlock:",
category: 'animation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._diagram())._updateBlock_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"updateBlock:",{aBlock:aBlock},smalltalk.GETDiagramBuilder)})},
args: ["aBlock"],
source: "updateBlock: aBlock\x0a\x0a\x09^ self diagram updateBlock: aBlock",
messageSends: ["updateBlock:", "diagram"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "updateY:",
category: 'animation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._diagram())._updateY_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"updateY:",{aBlock:aBlock},smalltalk.GETDiagramBuilder)})},
args: ["aBlock"],
source: "updateY: aBlock\x0a\x0a\x09^ self diagram updateY: aBlock",
messageSends: ["updateY:", "diagram"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarDiagram",
category: 'diagrams',
fn: function (){
var self=this;
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@diagram"]=_st($GETVerticalBarDiagram())._new();
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalBarDiagram",{},smalltalk.GETDiagramBuilder)})},
args: [],
source: "verticalBarDiagram\x0a\x0a\x09^ diagram := GETVerticalBarDiagram new",
messageSends: ["new"],
referencedClasses: ["GETVerticalBarDiagram"]
}),
smalltalk.GETDiagramBuilder);


smalltalk.addMethod(
smalltalk.method({
selector: "withDefaultButtons",
category: 'instance creation',
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
args: [],
source: "withDefaultButtons\x0a\x09^ self new \x0a\x09\x09initialize;\x0a\x09\x09initDefaultButtons;\x0a\x09\x09yourself",
messageSends: ["initialize", "new", "initDefaultButtons", "yourself"],
referencedClasses: []
}),
smalltalk.GETDiagramBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isGETDiagram",
category: '*Graph-ET-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isGETDiagram",{},smalltalk.Object)})},
args: [],
source: "isGETDiagram\x0a\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "plotBar",
category: '*Graph-ET-Core',
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
args: [],
source: "plotBar\x0a\x09\x22(1 to: 10) plotBar\x22\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: self;\x0a\x09\x09y: #yourself;\x0a\x09\x09height: 150;\x0a\x09\x09regularAxis.\x0a\x09diagram interaction popUpText.\x0a\x09diagram open",
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "height:", "regularAxis", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "plotDistribution",
category: '*Graph-ET-Core',
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
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
_st($1)._height_((150));
$2=_st($1)._regularAxisAsInteger();
_st(_st(diagram)._interaction())._popUpText();
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"plotDistribution",{diagram:diagram,values:values},smalltalk.SequenceableCollection)})},
args: [],
source: "plotDistribution\x0a\x09\x22\x0a\x09((1 to: 10)  collect: [ :i | 10 atRandom]) plotDistribution\x0a\x09\x22\x0a\x09\x0a\x09| diagram values |\x0a\x09values := (GETDistribution on: self) annotatedFrequency.\x0a\x09\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: values;\x0a\x09\x09y: [ :v | v third size ];\x0a\x09\x09height: 150;\x0a\x09\x09regularAxisAsInteger.\x0a\x09diagram interaction popUpText.\x0a\x09diagram open",
messageSends: ["annotatedFrequency", "on:", "new", "models:", "verticalBarDiagram", "y:", "size", "third", "height:", "regularAxisAsInteger", "popUpText", "interaction", "open"],
referencedClasses: ["GETDistribution", "GETDiagramBuilder"]
}),
smalltalk.SequenceableCollection);

});
