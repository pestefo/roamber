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



smalltalk.addClass('ROCountryInfo', smalltalk.ROObject, [], 'RoassalExtras-Geo');

smalltalk.addMethod(
smalltalk.method({
selector: "Afghanistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l2.832,1.030l2.059,-0.257l0.517,-1.288l2.058,-0.386l1.546,-0.772l0.515,-2.188l2.317,-0.516l0.387,-1.030l1.285,0.774l0.902,0.128l1.416,0l2.059,0.515l0.773,0.385l2.059,-0.900l0.901,0.515l0.773,-1.287l1.674,0.128l0.386,-0.387l0.256,-1.157l1.160,-0.903l1.543,0.645l-0.384,0.772l0.901,0.129l-0.259,2.317l1.030,0.900l0.904,-0.643l1.285,-0.257l1.674,-1.159l1.802,0.129l2.832,0l0.387,0.773l-1.545,0.385l-1.416,0.516l-3.090,0.256l-2.833,0.517l-1.545,1.287l0.645,1.029l0.257,1.416l-1.287,1.159l0.129,1.029l-0.773,0.902l-2.575,0l1.030,1.673l-1.673,0.772l-1.158,1.545l0.129,1.674l-1.031,0.772l-1.029,-0.257l-2.061,0.386l-0.257,0.644l-2.058,0l-1.417,1.544l-0.129,2.317l-3.476,1.159l-1.931,-0.257l-0.514,0.643l-1.674,-0.386l-2.704,0.386l-4.504,-1.415l2.445,-2.447l-0.129,-1.673l-2.060,-0.515l-0.256,-1.674l-0.902,-2.188l1.158,-1.416l-1.158,-0.386l0.773,-1.930l-1.029,3.477z";
}, function($ctx1) {$ctx1.fill(self,"Afghanistan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Afghanistan\x0a\x09^ 'M630.069,130.876l2.832,1.030l2.059,-0.257l0.517,-1.288l2.058,-0.386l1.546,-0.772l0.515,-2.188l2.317,-0.516l0.387,-1.030l1.285,0.774l0.902,0.128l1.416,0l2.059,0.515l0.773,0.385l2.059,-0.900l0.901,0.515l0.773,-1.287l1.674,0.128l0.386,-0.387l0.256,-1.157l1.160,-0.903l1.543,0.645l-0.384,0.772l0.901,0.129l-0.259,2.317l1.030,0.900l0.904,-0.643l1.285,-0.257l1.674,-1.159l1.802,0.129l2.832,0l0.387,0.773l-1.545,0.385l-1.416,0.516l-3.090,0.256l-2.833,0.517l-1.545,1.287l0.645,1.029l0.257,1.416l-1.287,1.159l0.129,1.029l-0.773,0.902l-2.575,0l1.030,1.673l-1.673,0.772l-1.158,1.545l0.129,1.674l-1.031,0.772l-1.029,-0.257l-2.061,0.386l-0.257,0.644l-2.058,0l-1.417,1.544l-0.129,2.317l-3.476,1.159l-1.931,-0.257l-0.514,0.643l-1.674,-0.386l-2.704,0.386l-4.504,-1.415l2.445,-2.447l-0.129,-1.673l-2.060,-0.515l-0.256,-1.674l-0.902,-2.188l1.158,-1.416l-1.158,-0.386l0.773,-1.930l-1.029,3.477z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Albania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l-0.257,0.900l0.385,1.160l1.029,0.643l0,0.644l-0.901,0.386l-0.128,0.901l-1.288,1.287l-0.386,-0.128l-0.127,-0.644l-1.417,-0.900l-0.259,-1.288l0.259,-1.803l0.256,-0.901l-0.384,-0.386l-0.258,-0.901l1.287,-1.288l0.129,0.516l0.771,-0.258l0.516,0.773l0.643,0.257l-0.130,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Albania",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Albania\x0a\x09^ 'M520.651,114.27l-0.257,0.900l0.385,1.160l1.029,0.643l0,0.644l-0.901,0.386l-0.128,0.901l-1.288,1.287l-0.386,-0.128l-0.127,-0.644l-1.417,-0.900l-0.259,-1.288l0.259,-1.803l0.256,-0.901l-0.384,-0.386l-0.258,-0.901l1.287,-1.288l0.129,0.516l0.771,-0.258l0.516,0.773l0.643,0.257l-0.130,-1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Algeria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z";
}, function($ctx1) {$ctx1.fill(self,"Algeria",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Algeria\x0a\x09^ 'M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Angola",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.994,242.615l-0.643,-2.060l1.030,-1.159l0.900,-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773,-0.386zM496.836,273.64l-0.257,-1.804l0.385,-2.317l0.900,-2.445l0.130,-1.158l0.901,-2.447l0.643,-1.157l1.545,-1.674l0.902,-1.288l0.257,-1.931l-0.129,-1.544l-0.771,-0.902l-0.775,-1.673l-0.642,-1.674l0.129,-0.515l0.772,-1.029l-0.772,-2.704l-0.516,-1.802l-1.414,-1.674l0.257,-0.515l1.157,-0.387l0.774,0.131l0.900,-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801,-0.128l0.900,-0.387l1.418,0.387l0.514,-0.772l0.644,-1.545l1.673,-0.128l0.128,-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645,-0.131l1.158,0l1.674,-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536,-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566,-0.385l-1.801,-1.287l-10.944,0.128l-0.384,0.128l-1.674,-1.159l-1.672,-0.128l-1.674,0.515l1.288,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Angola",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Angola\x0a\x09^ 'M497.994,242.615l-0.643,-2.060l1.030,-1.159l0.900,-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773,-0.386zM496.836,273.64l-0.257,-1.804l0.385,-2.317l0.900,-2.445l0.130,-1.158l0.901,-2.447l0.643,-1.157l1.545,-1.674l0.902,-1.288l0.257,-1.931l-0.129,-1.544l-0.771,-0.902l-0.775,-1.673l-0.642,-1.674l0.129,-0.515l0.772,-1.029l-0.772,-2.704l-0.516,-1.802l-1.414,-1.674l0.257,-0.515l1.157,-0.387l0.774,0.131l0.900,-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801,-0.128l0.900,-0.387l1.418,0.387l0.514,-0.772l0.644,-1.545l1.673,-0.128l0.128,-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645,-0.131l1.158,0l1.674,-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536,-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566,-0.385l-1.801,-1.287l-10.944,0.128l-0.384,0.128l-1.674,-1.159l-1.672,-0.128l-1.674,0.515l1.288,-0.516z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Argentina",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.448,295.781l1.288,1.544l0,2.189l-2.319,1.416l-1.801,1.158l-2.961,2.576l-3.605,3.732l-0.772,2.189l-0.644,2.702l0,2.705l-0.643,0.643l-0.129,1.674l-0.257,1.417l3.475,2.317l-0.387,1.802l1.675,1.287l-0.129,1.288l-2.574,3.475l-3.991,1.417l-5.406,0.513l-2.961,-0.257l0.514,1.674l-0.514,1.931l0.514,1.415l-1.673,0.902l-2.703,0.385l-2.575,-1.028l-1.029,0.770l0.386,2.705l1.801,0.772l1.417,-0.901l0.901,1.416l-2.575,0.902l-2.188,1.673l-0.386,2.705l-0.643,1.414l-2.448,0l-2.188,1.416l-0.772,1.932l2.704,2.059l2.574,0.516l-0.901,2.445l-3.218,1.545l-1.803,3.090l-2.445,1.030l-1.031,1.287l0.774,2.832l1.802,1.543l-1.030,-0.127l-2.574,-0.387l-6.436,-0.385l-1.160,-1.545l0,-2.060l-1.801,0.129l-0.902,-0.902l-0.258,-2.831l2.060,-1.288l0.901,-1.674l-0.386,-1.288l1.546,-2.316l0.900,-3.605l-0.257,-1.545l1.158,-0.515l-0.258,-1.030l-1.287,-0.514l0.901,-1.158l-1.157,-1.030l-0.645,-3.089l1.030,-0.516l-0.385,-3.347l0.513,-2.703l0.773,-2.447l1.673,-1.030l-0.900,-2.574l0,-2.446l2.060,-1.802l0,-2.189l1.415,-2.702l0.129,-2.447l-0.772,-0.514l-1.287,-4.636l1.672,-2.831l-0.257,-2.575l1.030,-2.446l1.802,-2.574l1.802,-1.673l-0.772,-1.031l0.515,-0.900l0,-4.378l2.960,-1.415l0.902,-2.704l-0.386,-0.772l2.316,-2.447l3.477,0.644l1.544,2.060l1.030,-2.187l3.089,0.127l0.515,0.515l4.892,4.377l2.188,0.387l3.348,2.059l2.703,1.030l0.386,1.157l-2.574,4.121l2.702,0.772l2.961,0.387l2.189,-0.387l2.446,-2.059l0.386,-2.445l-1.416,0.516zM282.761,371.99l3.475,1.674l3.733,0.642l-1.159,1.417l-2.574,0.130l-1.416,-1.031l-1.546,0l-2.960,0l0.129,-5.923l0.901,1.160l-1.417,-1.931z";
}, function($ctx1) {$ctx1.fill(self,"Argentina",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Argentina\x0a\x09^ 'M319.448,295.781l1.288,1.544l0,2.189l-2.319,1.416l-1.801,1.158l-2.961,2.576l-3.605,3.732l-0.772,2.189l-0.644,2.702l0,2.705l-0.643,0.643l-0.129,1.674l-0.257,1.417l3.475,2.317l-0.387,1.802l1.675,1.287l-0.129,1.288l-2.574,3.475l-3.991,1.417l-5.406,0.513l-2.961,-0.257l0.514,1.674l-0.514,1.931l0.514,1.415l-1.673,0.902l-2.703,0.385l-2.575,-1.028l-1.029,0.770l0.386,2.705l1.801,0.772l1.417,-0.901l0.901,1.416l-2.575,0.902l-2.188,1.673l-0.386,2.705l-0.643,1.414l-2.448,0l-2.188,1.416l-0.772,1.932l2.704,2.059l2.574,0.516l-0.901,2.445l-3.218,1.545l-1.803,3.090l-2.445,1.030l-1.031,1.287l0.774,2.832l1.802,1.543l-1.030,-0.127l-2.574,-0.387l-6.436,-0.385l-1.160,-1.545l0,-2.060l-1.801,0.129l-0.902,-0.902l-0.258,-2.831l2.060,-1.288l0.901,-1.674l-0.386,-1.288l1.546,-2.316l0.900,-3.605l-0.257,-1.545l1.158,-0.515l-0.258,-1.030l-1.287,-0.514l0.901,-1.158l-1.157,-1.030l-0.645,-3.089l1.030,-0.516l-0.385,-3.347l0.513,-2.703l0.773,-2.447l1.673,-1.030l-0.900,-2.574l0,-2.446l2.060,-1.802l0,-2.189l1.415,-2.702l0.129,-2.447l-0.772,-0.514l-1.287,-4.636l1.672,-2.831l-0.257,-2.575l1.030,-2.446l1.802,-2.574l1.802,-1.673l-0.772,-1.031l0.515,-0.900l0,-4.378l2.960,-1.415l0.902,-2.704l-0.386,-0.772l2.316,-2.447l3.477,0.644l1.544,2.060l1.030,-2.187l3.089,0.127l0.515,0.515l4.892,4.377l2.188,0.387l3.348,2.059l2.703,1.030l0.386,1.157l-2.574,4.121l2.702,0.772l2.961,0.387l2.189,-0.387l2.446,-2.059l0.386,-2.445l-1.416,0.516zM282.761,371.99l3.475,1.674l3.733,0.642l-1.159,1.417l-2.574,0.130l-1.416,-1.031l-1.546,0l-2.960,0l0.129,-5.923l0.901,1.160l-1.417,-1.931z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Armenia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M582.697,116.33l3.605,-0.515l0.642,0.772l1.032,0.386l-0.516,0.773l1.416,0.900l-0.772,0.902l1.159,0.643l1.158,0.516l0.129,1.801l-1.029,0.129l-1.032,-1.544l0,-0.515l-1.287,0.129l-0.771,-0.772l-0.516,0l-1.029,-0.773l-2.059,-0.643l0.256,-1.288l0.386,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Armenia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Armenia\x0a\x09^ 'M582.697,116.33l3.605,-0.515l0.642,0.772l1.032,0.386l-0.516,0.773l1.416,0.900l-0.772,0.902l1.159,0.643l1.158,0.516l0.129,1.801l-1.029,0.129l-1.032,-1.544l0,-0.515l-1.287,0.129l-0.771,-0.772l-0.516,0l-1.029,-0.773l-2.059,-0.643l0.256,-1.288l0.386,0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Australia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M863.067,336.975l1.674,0.129l0.129,3.218l-0.900,0.901l-0.258,2.188l-0.900,-0.772l-1.934,1.931l-0.514,-0.129l-1.672,-0.129l-1.675,-2.316l-0.385,-1.803l-1.545,-2.318l0.127,-1.287l1.674,0.259l2.576,0.901l1.545,-0.258l-2.058,0.515zM805.011,313.803l-2.832,1.288l-2.317,0.643l-0.513,1.416l-1.034,1.159l-2.185,0l-1.803,0.256l-2.318,-0.513l-1.930,0.386l-1.930,0.127l-1.546,1.417l-0.772,-0.128l-1.416,0.772l-1.287,0.772l-1.932,-0.128l-1.800,0l-2.834,-1.674l-1.416,-0.514l0,-1.545l1.289,-0.387l0.515,-0.515l-0.131,-1.029l0.387,-1.932l-0.256,-1.545l-1.547,-2.702l-0.386,-1.546l0.129,-1.545l-1.030,-1.801l-0.127,-0.773l-1.160,-1.030l-0.387,-2.058l-1.545,-2.189l-0.384,-1.160l1.287,1.160l-1.029,-2.447l1.416,0.774l0.771,1.030l0,-1.417l-1.416,-2.061l-0.258,-0.900l-0.644,-0.773l0.386,-1.545l0.516,-0.644l0.387,-1.415l-0.258,-1.546l1.029,-1.930l0.258,2.060l1.158,-1.932l2.188,-0.900l1.287,-1.160l2.060,-0.901l1.159,-0.257l0.773,0.387l2.188,-1.029l1.544,-0.258l0.516,-0.644l0.643,-0.257l1.545,0.128l2.832,-0.901l1.418,-1.160l0.640,-1.414l1.676,-1.416l0.129,-1.030l0,-1.417l1.930,-2.318l1.158,2.318l1.031,-0.514l-0.902,-1.287l0.902,-1.287l1.156,0.516l0.260,-2.061l1.545,-1.289l0.643,-1.028l1.289,-0.516l0.127,-0.773l1.158,0.386l0,-0.643l1.158,-0.387l1.416,-0.385l1.930,1.157l1.547,1.675l1.671,0l1.676,0.258l-0.515,-1.545l1.287,-2.060l1.158,-0.772l-0.385,-0.643l1.158,-1.545l1.672,-1.031l1.289,0.385l2.317,-0.514l-0.129,-1.416l-1.932,-0.900l1.418,-0.388l1.801,0.775l1.416,1.029l2.316,0.772l0.774,-0.387l1.674,0.902l1.544,-0.773l1.030,0.258l0.644,-0.516l1.158,1.289l-0.644,1.416l-1.029,1.157l-0.903,0l0.260,1.160l-0.773,1.286l-0.901,1.289l0.127,0.772l2.190,1.545l2.058,0.900l1.418,0.902l1.930,1.544l0.771,0l1.418,0.773l0.387,0.772l2.574,0.900l1.801,-0.900l0.516,-1.416l0.513,-1.289l0.387,-1.415l0.772,-2.188l-0.385,-1.286l0.127,-0.775l-0.256,-1.542l0.387,-2.062l0.513,-0.514l-0.386,-0.901l0.644,-1.417l0.516,-1.414l0,-0.772l1.029,-1.032l0.772,1.288l0.130,1.674l0.641,0.385l0.131,1.029l1.029,1.417l0.258,1.544l-0.129,1.031l0.902,2.061l1.801,-1.031l0.903,1.158l1.285,1.031l-0.256,1.158l0.515,2.317l0.387,1.416l0.641,0.257l0.773,2.319l-0.256,1.414l0.901,1.805l2.961,1.414l1.800,1.288l1.803,1.159l-0.258,0.642l1.545,1.674l1.030,2.961l1.031,-0.642l1.158,1.286l0.643,-0.516l0.386,2.961l1.932,1.544l1.287,1.030l2.061,2.189l0.771,2.189l0.129,1.545l-0.260,1.674l1.289,2.316l-0.129,2.317l-0.515,1.287l-0.645,2.447l0,1.545l-0.513,1.930l-1.159,2.446l-2.058,1.288l-0.903,2.060l-0.900,1.415l-0.902,2.317l-1.030,1.288l-0.642,2.060l-0.387,1.802l0.129,0.900l-1.545,0.902l-2.961,0.128l-2.445,1.031l-1.287,1.030l-1.674,1.157l-2.188,-1.157l-1.675,-0.515l0.517,-1.287l-1.547,0.516l-2.316,1.929l-2.316,-0.773l-1.547,-0.385l-1.545,-0.258l-2.572,-0.772l-1.803,-1.674l-0.516,-2.060l-0.644,-1.288l-1.287,-1.157l-2.575,-0.258l0.903,-1.287l-0.645,-2.060l-1.287,1.931l-2.445,0.387l1.416,-1.416l0.386,-1.545l1.030,-1.288l-0.258,-2.059l-2.188,2.316l-1.673,0.902l-1.032,2.189l-2.058,-1.159l0.129,-1.416l-1.674,-1.932l-1.545,-1.029l0.516,-0.643l-3.348,-1.675l-1.932,0l-2.574,-1.286l-4.893,0.256l-3.474,0.902l-3.090,0.902l2.574,0.130z";
}, function($ctx1) {$ctx1.fill(self,"Australia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Australia\x0a\x09^ 'M863.067,336.975l1.674,0.129l0.129,3.218l-0.900,0.901l-0.258,2.188l-0.900,-0.772l-1.934,1.931l-0.514,-0.129l-1.672,-0.129l-1.675,-2.316l-0.385,-1.803l-1.545,-2.318l0.127,-1.287l1.674,0.259l2.576,0.901l1.545,-0.258l-2.058,0.515zM805.011,313.803l-2.832,1.288l-2.317,0.643l-0.513,1.416l-1.034,1.159l-2.185,0l-1.803,0.256l-2.318,-0.513l-1.930,0.386l-1.930,0.127l-1.546,1.417l-0.772,-0.128l-1.416,0.772l-1.287,0.772l-1.932,-0.128l-1.800,0l-2.834,-1.674l-1.416,-0.514l0,-1.545l1.289,-0.387l0.515,-0.515l-0.131,-1.029l0.387,-1.932l-0.256,-1.545l-1.547,-2.702l-0.386,-1.546l0.129,-1.545l-1.030,-1.801l-0.127,-0.773l-1.160,-1.030l-0.387,-2.058l-1.545,-2.189l-0.384,-1.160l1.287,1.160l-1.029,-2.447l1.416,0.774l0.771,1.030l0,-1.417l-1.416,-2.061l-0.258,-0.900l-0.644,-0.773l0.386,-1.545l0.516,-0.644l0.387,-1.415l-0.258,-1.546l1.029,-1.930l0.258,2.060l1.158,-1.932l2.188,-0.900l1.287,-1.160l2.060,-0.901l1.159,-0.257l0.773,0.387l2.188,-1.029l1.544,-0.258l0.516,-0.644l0.643,-0.257l1.545,0.128l2.832,-0.901l1.418,-1.160l0.640,-1.414l1.676,-1.416l0.129,-1.030l0,-1.417l1.930,-2.318l1.158,2.318l1.031,-0.514l-0.902,-1.287l0.902,-1.287l1.156,0.516l0.260,-2.061l1.545,-1.289l0.643,-1.028l1.289,-0.516l0.127,-0.773l1.158,0.386l0,-0.643l1.158,-0.387l1.416,-0.385l1.930,1.157l1.547,1.675l1.671,0l1.676,0.258l-0.515,-1.545l1.287,-2.060l1.158,-0.772l-0.385,-0.643l1.158,-1.545l1.672,-1.031l1.289,0.385l2.317,-0.514l-0.129,-1.416l-1.932,-0.900l1.418,-0.388l1.801,0.775l1.416,1.029l2.316,0.772l0.774,-0.387l1.674,0.902l1.544,-0.773l1.030,0.258l0.644,-0.516l1.158,1.289l-0.644,1.416l-1.029,1.157l-0.903,0l0.260,1.160l-0.773,1.286l-0.901,1.289l0.127,0.772l2.190,1.545l2.058,0.900l1.418,0.902l1.930,1.544l0.771,0l1.418,0.773l0.387,0.772l2.574,0.900l1.801,-0.900l0.516,-1.416l0.513,-1.289l0.387,-1.415l0.772,-2.188l-0.385,-1.286l0.127,-0.775l-0.256,-1.542l0.387,-2.062l0.513,-0.514l-0.386,-0.901l0.644,-1.417l0.516,-1.414l0,-0.772l1.029,-1.032l0.772,1.288l0.130,1.674l0.641,0.385l0.131,1.029l1.029,1.417l0.258,1.544l-0.129,1.031l0.902,2.061l1.801,-1.031l0.903,1.158l1.285,1.031l-0.256,1.158l0.515,2.317l0.387,1.416l0.641,0.257l0.773,2.319l-0.256,1.414l0.901,1.805l2.961,1.414l1.800,1.288l1.803,1.159l-0.258,0.642l1.545,1.674l1.030,2.961l1.031,-0.642l1.158,1.286l0.643,-0.516l0.386,2.961l1.932,1.544l1.287,1.030l2.061,2.189l0.771,2.189l0.129,1.545l-0.260,1.674l1.289,2.316l-0.129,2.317l-0.515,1.287l-0.645,2.447l0,1.545l-0.513,1.930l-1.159,2.446l-2.058,1.288l-0.903,2.060l-0.900,1.415l-0.902,2.317l-1.030,1.288l-0.642,2.060l-0.387,1.802l0.129,0.900l-1.545,0.902l-2.961,0.128l-2.445,1.031l-1.287,1.030l-1.674,1.157l-2.188,-1.157l-1.675,-0.515l0.517,-1.287l-1.547,0.516l-2.316,1.929l-2.316,-0.773l-1.547,-0.385l-1.545,-0.258l-2.572,-0.772l-1.803,-1.674l-0.516,-2.060l-0.644,-1.288l-1.287,-1.157l-2.575,-0.258l0.903,-1.287l-0.645,-2.060l-1.287,1.931l-2.445,0.387l1.416,-1.416l0.386,-1.545l1.030,-1.288l-0.258,-2.059l-2.188,2.316l-1.673,0.902l-1.032,2.189l-2.058,-1.159l0.129,-1.416l-1.674,-1.932l-1.545,-1.029l0.516,-0.643l-3.348,-1.675l-1.932,0l-2.574,-1.286l-4.893,0.256l-3.474,0.902l-3.090,0.902l2.574,0.130z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Austria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.996,97.278l-0.257,1.158l-1.545,0l0.643,0.643l-0.900,1.674l-0.515,0.515l-2.446,0l-1.289,0.644l-2.315,-0.258l-3.734,-0.644l-0.644,-0.900l-2.703,0.386l-0.258,0.514l-1.672,-0.386l-1.416,0l-1.160,-0.514l0.385,-0.644l-0.128,-0.515l0.903,-0.128l1.285,0.772l0.387,-0.772l2.446,0.128l1.931,-0.515l1.287,0.128l0.773,0.515l0.258,-0.386l-0.387,-1.802l1.030,-0.386l0.901,-1.158l2.058,0.772l1.417,-1.030l1.030,-0.258l2.061,0.901l1.286,-0.129l1.158,0.516l-0.127,0.256l-0.257,-0.903z";
}, function($ctx1) {$ctx1.fill(self,"Austria",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Austria\x0a\x09^ 'M510.996,97.278l-0.257,1.158l-1.545,0l0.643,0.643l-0.900,1.674l-0.515,0.515l-2.446,0l-1.289,0.644l-2.315,-0.258l-3.734,-0.644l-0.644,-0.900l-2.703,0.386l-0.258,0.514l-1.672,-0.386l-1.416,0l-1.160,-0.514l0.385,-0.644l-0.128,-0.515l0.903,-0.128l1.285,0.772l0.387,-0.772l2.446,0.128l1.931,-0.515l1.287,0.128l0.773,0.515l0.258,-0.386l-0.387,-1.802l1.030,-0.386l0.901,-1.158l2.058,0.772l1.417,-1.030l1.030,-0.258l2.061,0.901l1.286,-0.129l1.158,0.516l-0.127,0.256l-0.257,-0.903z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Azerbaijan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M590.292,114.27l0.643,0l1.931,1.673l1.158,0.129l0.516,-0.644l1.545,-1.030l1.416,1.417l1.417,1.802l1.286,0.129l0.774,0.773l-2.190,0.257l-0.514,2.059l-0.386,0.901l-1.031,0.644l0,1.416l-0.643,0.129l-1.674,-1.417l0.902,-1.415l-0.773,-0.773l-1.030,0.258l-3.089,1.930l-0.129,-1.801l-1.158,-0.516l-1.159,-0.643l0.772,-0.902l-1.416,-0.900l0.516,-0.773l-1.032,-0.386l-0.642,-0.772l0.129,0l0.644,-0.387l1.930,0.772l1.545,0.130l0.258,-0.258l-1.287,-1.545l-0.771,0.257zM589.521,122.637l-1.804,-0.386l-1.415,-1.288l-0.387,-1.028l0.516,0l0.771,0.772l1.287,-0.129l0,0.515l-1.032,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Azerbaijan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Azerbaijan\x0a\x09^ 'M590.292,114.27l0.643,0l1.931,1.673l1.158,0.129l0.516,-0.644l1.545,-1.030l1.416,1.417l1.417,1.802l1.286,0.129l0.774,0.773l-2.190,0.257l-0.514,2.059l-0.386,0.901l-1.031,0.644l0,1.416l-0.643,0.129l-1.674,-1.417l0.902,-1.415l-0.773,-0.773l-1.030,0.258l-3.089,1.930l-0.129,-1.801l-1.158,-0.516l-1.159,-0.643l0.772,-0.902l-1.416,-0.900l0.516,-0.773l-1.032,-0.386l-0.642,-0.772l0.129,0l0.644,-0.387l1.930,0.772l1.545,0.130l0.258,-0.258l-1.287,-1.545l-0.771,0.257zM589.521,122.637l-1.804,-0.386l-1.415,-1.288l-0.387,-1.028l0.516,0l0.771,0.772l1.287,-0.129l0,0.515l-1.032,-1.544z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bangladesh",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M714.901,167.564l-0.129,1.932l-0.900,-0.387l0.127,2.189l-0.771,-1.417l-0.129,-1.415l-0.514,-1.287l-1.031,-1.545l-2.575,-0.129l0.258,1.159l-0.771,1.544l-1.158,-0.644l-0.389,0.516l-0.772,-0.258l-1.029,-0.258l-0.515,-2.188l-0.901,-2.059l0.514,-1.674l-1.672,-0.643l0.514,-1.031l1.802,-1.030l-2.060,-1.415l1.031,-1.803l2.061,1.159l1.285,0.128l0.260,1.931l2.574,0.386l2.574,-0.128l1.545,0.515l-1.289,2.317l-1.158,0.129l-0.901,1.545l1.545,1.416l0.387,-1.802l0.771,0l-1.416,-4.247z";
}, function($ctx1) {$ctx1.fill(self,"Bangladesh",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Bangladesh\x0a\x09^ 'M714.901,167.564l-0.129,1.932l-0.900,-0.387l0.127,2.189l-0.771,-1.417l-0.129,-1.415l-0.514,-1.287l-1.031,-1.545l-2.575,-0.129l0.258,1.159l-0.771,1.544l-1.158,-0.644l-0.389,0.516l-0.772,-0.258l-1.029,-0.258l-0.515,-2.188l-0.901,-2.059l0.514,-1.674l-1.672,-0.643l0.514,-1.031l1.802,-1.030l-2.060,-1.415l1.031,-1.803l2.061,1.159l1.285,0.128l0.260,1.931l2.574,0.386l2.574,-0.128l1.545,0.515l-1.289,2.317l-1.158,0.129l-0.901,1.545l1.545,1.416l0.387,-1.802l0.771,0l-1.416,-4.247z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belarus",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M528.503,81.701l2.574,0l2.961,-0.901l0.643,-1.545l2.189,-0.901l-0.258,-1.159l1.674,-0.514l2.831,-1.031l2.833,0.644l0.387,0.772l1.416,-0.385l2.703,0.643l0.258,1.287l-0.645,0.644l1.672,1.802l1.160,0.515l-0.129,0.515l1.803,0.387l0.772,0.772l-1.030,0.643l-2.187,-0.128l-0.516,0.257l0.644,0.901l0.643,1.674l-2.318,0.129l-0.900,0.643l-0.128,1.416l-1.031,-0.258l-2.446,0.129l-0.772,-0.643l-1.030,0.386l-0.900,-0.386l-2.189,0l-2.959,-0.644l-2.706,-0.258l-2.187,0.129l-1.417,0.644l-1.286,0.129l-0.129,-1.159l-0.772,-1.287l1.672,-0.516l0,-1.029l-0.771,-1.029l0.129,1.288z";
}, function($ctx1) {$ctx1.fill(self,"Belarus",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Belarus\x0a\x09^ 'M528.503,81.701l2.574,0l2.961,-0.901l0.643,-1.545l2.189,-0.901l-0.258,-1.159l1.674,-0.514l2.831,-1.031l2.833,0.644l0.387,0.772l1.416,-0.385l2.703,0.643l0.258,1.287l-0.645,0.644l1.672,1.802l1.160,0.515l-0.129,0.515l1.803,0.387l0.772,0.772l-1.030,0.643l-2.187,-0.128l-0.516,0.257l0.644,0.901l0.643,1.674l-2.318,0.129l-0.900,0.643l-0.128,1.416l-1.031,-0.258l-2.446,0.129l-0.772,-0.643l-1.030,0.386l-0.900,-0.386l-2.189,0l-2.959,-0.644l-2.706,-0.258l-2.187,0.129l-1.417,0.644l-1.286,0.129l-0.129,-1.159l-0.772,-1.287l1.672,-0.516l0,-1.029l-0.771,-1.029l0.129,1.288z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belgium",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M474.179,88.652l1.932,0.258l2.574,-0.643l1.673,1.158l1.416,0.644l-0.258,1.930l-0.644,0l-0.385,1.544l-2.318,-1.286l-1.416,0.257l-1.801,-1.287l-1.288,-1.029l-1.287,0l-0.385,-1.031l-2.187,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Belgium",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Belgium\x0a\x09^ 'M474.179,88.652l1.932,0.258l2.574,-0.643l1.673,1.158l1.416,0.644l-0.258,1.930l-0.644,0l-0.385,1.544l-2.318,-1.286l-1.416,0.257l-1.801,-1.287l-1.288,-1.029l-1.287,0l-0.385,-1.031l-2.187,0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belize",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M225.09,179.022l0,-0.387l0.257,-0.129l0.515,0.258l1.030,-1.544l0.515,-0.130l0,0.387l0.515,0.128l-0.129,0.645l-0.386,1.159l0.258,0.513l-0.258,0.902l0.128,0.258l-0.256,1.416l-0.644,0.643l-0.387,0.129l-0.643,0.901l-0.772,0l0.257,-3.089l0,2.060z";
}, function($ctx1) {$ctx1.fill(self,"Belize",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Belize\x0a\x09^ 'M225.09,179.022l0,-0.387l0.257,-0.129l0.515,0.258l1.030,-1.544l0.515,-0.130l0,0.387l0.515,0.128l-0.129,0.645l-0.386,1.159l0.258,0.513l-0.258,0.902l0.128,0.258l-0.256,1.416l-0.644,0.643l-0.387,0.129l-0.643,0.901l-0.772,0l0.257,-3.089l0,2.060z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Benin",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M472.505,210.174l-2.188,0.258l-0.773,-1.803l0.131,-6.307l-0.516,-0.515l-0.129,-1.287l-0.900,-0.902l-0.775,-0.900l0.259,-1.417l1.030,-0.256l0.515,-1.159l1.287,-0.257l0.645,-0.774l0.901,-0.773l0.901,-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130,-4.376z";
}, function($ctx1) {$ctx1.fill(self,"Benin",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Benin\x0a\x09^ 'M472.505,210.174l-2.188,0.258l-0.773,-1.803l0.131,-6.307l-0.516,-0.515l-0.129,-1.287l-0.900,-0.902l-0.775,-0.900l0.259,-1.417l1.030,-0.256l0.515,-1.159l1.287,-0.257l0.645,-0.774l0.901,-0.773l0.901,-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130,-4.376z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bhutan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M712.198,152.117l1.158,0.901l-0.257,1.674l-2.188,0l-2.189,-0.129l-1.672,0.386l-2.447,-1.029l-0.129,-0.516l1.804,-1.931l1.414,-0.773l1.930,0.645l1.416,0.128l-1.160,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bhutan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Bhutan\x0a\x09^ 'M712.198,152.117l1.158,0.901l-0.257,1.674l-2.188,0l-2.189,-0.129l-1.672,0.386l-2.447,-1.029l-0.129,-0.516l1.804,-1.931l1.414,-0.773l1.930,0.645l1.416,0.128l-1.160,-0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bolivia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M295.89,286.383l-3.089,-0.127l-1.030,2.187l-1.544,-2.060l-3.477,-0.644l-2.316,2.447l-1.932,0.386l-1.028,-3.733l-1.417,-2.960l0.773,-2.576l-1.417,-1.157l-0.387,-1.933l-1.286,-1.932l1.673,-2.830l-1.158,-2.318l0.643,-0.901l-0.515,-1.029l1.159,-1.287l0,-2.317l0.128,-1.931l0.644,-0.901l-2.445,-4.248l2.060,0.127l1.415,0l0.515,-0.771l2.446,-1.160l1.416,-1.029l3.476,-0.386l-0.258,1.930l0.387,1.159l-0.258,1.802l2.960,2.317l2.962,0.515l1.030,1.030l1.801,0.515l1.159,0.772l1.673,0l1.545,0.773l0.128,1.544l0.516,0.773l0.128,1.158l-0.772,0l1.031,3.219l5.148,0.131l-0.386,1.542l0.258,1.030l1.416,0.771l0.643,1.676l-0.386,2.061l-0.772,1.158l0.257,1.544l-0.901,0.643l0,-0.902l-2.575,-1.285l-2.446,-0.130l-4.634,0.772l-1.416,2.447l0,1.414l-1.030,3.219l0.515,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Bolivia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Bolivia\x0a\x09^ 'M295.89,286.383l-3.089,-0.127l-1.030,2.187l-1.544,-2.060l-3.477,-0.644l-2.316,2.447l-1.932,0.386l-1.028,-3.733l-1.417,-2.960l0.773,-2.576l-1.417,-1.157l-0.387,-1.933l-1.286,-1.932l1.673,-2.830l-1.158,-2.318l0.643,-0.901l-0.515,-1.029l1.159,-1.287l0,-2.317l0.128,-1.931l0.644,-0.901l-2.445,-4.248l2.060,0.127l1.415,0l0.515,-0.771l2.446,-1.160l1.416,-1.029l3.476,-0.386l-0.258,1.930l0.387,1.159l-0.258,1.802l2.960,2.317l2.962,0.515l1.030,1.030l1.801,0.515l1.159,0.772l1.673,0l1.545,0.773l0.128,1.544l0.516,0.773l0.128,1.158l-0.772,0l1.031,3.219l5.148,0.131l-0.386,1.542l0.258,1.030l1.416,0.771l0.643,1.676l-0.386,2.061l-0.772,1.158l0.257,1.544l-0.901,0.643l0,-0.902l-2.575,-1.285l-2.446,-0.130l-4.634,0.772l-1.416,2.447l0,1.414l-1.030,3.219l0.515,0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BosniaandHerzegovina",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.403,106.159l1.030,0l-0.645,1.159l1.289,1.030l-0.389,1.287l-1.158,0.387l-0.900,0.515l-0.387,1.545l-2.445,-1.030l-1.031,-1.159l-0.901,-0.514l-1.286,-1.031l-0.643,-0.901l-1.290,-1.158l0.516,-1.159l1.031,0.643l0.643,-0.643l1.159,0l2.316,0.386l1.931,0l-1.160,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"BosniaandHerzegovina",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "BosniaandHerzegovina\x0a\x09^ 'M516.403,106.159l1.030,0l-0.645,1.159l1.289,1.030l-0.389,1.287l-1.158,0.387l-0.900,0.515l-0.387,1.545l-2.445,-1.030l-1.031,-1.159l-0.901,-0.514l-1.286,-1.031l-0.643,-0.901l-1.290,-1.158l0.516,-1.159l1.031,0.643l0.643,-0.643l1.159,0l2.316,0.386l1.931,0l-1.160,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Botswana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z";
}, function($ctx1) {$ctx1.fill(self,"Botswana",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Botswana\x0a\x09^ 'M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Brazil",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l3.605,-3.732l2.961,-2.576l1.801,-1.158l2.319,-1.416l0,-2.189l-1.288,-1.544l-1.416,0.516l0.515,-1.546l0.386,-1.545l0,-1.544l-0.901,-0.516l-1.031,0.516l-1.028,-0.129l-0.259,-1.031l-0.256,-2.443l-0.516,-0.903l-1.801,-0.642l-1.160,0.513l-2.831,-0.513l0.128,-3.736l-0.772,-1.415l0.901,-0.643l-0.257,-1.544l0.772,-1.158l0.386,-2.061l-0.643,-1.676l-1.416,-0.771l-0.258,-1.030l0.386,-1.542l-5.148,-0.131l-1.031,-3.219l0.772,0l-0.128,-1.158l-0.516,-0.773l-0.128,-1.544l-1.545,-0.773l-1.673,0l-1.159,-0.772l-1.801,-0.515l-1.030,-1.030l-2.962,-0.515l-2.960,-2.317l0.258,-1.802l-0.387,-1.159l0.258,-1.930l-3.476,0.386l-1.416,1.029l-2.446,1.160l-0.515,0.771l-1.415,0l-2.060,-0.127l-1.416,0.384l-1.287,-0.257l0.256,-4.119l-2.317,1.545l-2.317,0l-1.030,-1.416l-1.801,-0.129l0.644,-1.158l-1.546,-1.674l-1.158,-2.445l0.772,-0.516l0,-1.158l1.545,-0.773l-0.257,-1.416l0.772,-0.901l0.129,-1.288l3.089,-1.802l2.188,-0.515l0.386,-0.514l2.446,0.129l1.159,-7.338l0.129,-1.159l-0.515,-1.544l-1.159,-1.030l0,-1.931l1.545,-0.387l0.515,0.258l0.129,-1.029l-1.545,-0.258l-0.129,-1.674l5.278,0l0.900,-0.902l0.773,0.902l0.515,1.545l0.516,-0.387l1.544,1.417l2.060,-0.129l0.515,-0.772l1.930,-0.644l1.159,-0.515l0.257,-1.159l1.931,-0.772l-0.128,-0.514l-2.188,-0.259l-0.387,-1.672l0,-1.804l-1.158,-0.643l0.514,-0.257l2.060,0.257l2.059,0.773l0.774,-0.643l1.930,-0.515l3.090,-0.902l0.900,-1.030l-0.257,-0.772l1.287,-0.129l0.644,0.643l-0.257,1.159l0.900,0.386l0.644,1.288l-0.772,0.902l-0.515,2.316l0.773,1.287l0.128,1.287l1.674,1.288l1.287,0.128l0.386,-0.515l0.772,-0.128l1.288,-0.515l0.901,-0.644l1.416,0.259l0.643,-0.130l1.546,0.130l0.257,-0.517l-0.516,-0.514l0.259,-0.773l1.158,0.259l1.159,-0.259l1.545,0.515l1.287,0.516l0.772,-0.644l0.643,0.128l0.387,0.772l1.287,-0.256l1.030,-1.031l0.772,-1.930l1.545,-2.446l1.029,-0.128l0.645,1.415l1.544,4.763l1.416,0.386l0,1.931l-1.931,2.189l0.773,0.772l4.763,0.387l0.128,2.702l2.059,-1.674l3.348,0.902l4.505,1.674l1.288,1.545l-0.387,1.545l3.090,-0.901l5.278,1.415l3.991,0l3.990,2.189l3.476,2.961l2.059,0.772l2.318,0.128l0.900,0.902l0.901,3.475l0.516,1.545l-1.159,4.505l-1.287,1.675l-3.862,3.863l-1.674,2.959l-2.059,2.317l-0.643,0.129l-0.773,1.931l0.257,5.020l-0.773,4.250l-0.256,1.672l-0.902,1.158l-0.515,3.605l-2.703,3.475l-0.387,2.833l-2.187,1.158l-0.644,1.546l-2.960,0l-4.249,1.028l-1.931,1.288l-2.960,0.773l-3.219,2.060l-2.188,2.703l-0.386,2.060l0.386,1.416l-0.515,2.703l-0.644,1.416l-1.803,1.416l-2.960,4.764l-2.446,2.189l-1.802,1.157l-1.287,2.574l-1.673,1.545l-0.772,-1.545l1.158,-1.286l-1.545,-1.804l-2.189,-1.414l-2.702,-1.805l-1.030,0.130l-2.704,-2.059l1.674,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Brazil",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Brazil\x0a\x09^ 'M310.05,308.396l3.605,-3.732l2.961,-2.576l1.801,-1.158l2.319,-1.416l0,-2.189l-1.288,-1.544l-1.416,0.516l0.515,-1.546l0.386,-1.545l0,-1.544l-0.901,-0.516l-1.031,0.516l-1.028,-0.129l-0.259,-1.031l-0.256,-2.443l-0.516,-0.903l-1.801,-0.642l-1.160,0.513l-2.831,-0.513l0.128,-3.736l-0.772,-1.415l0.901,-0.643l-0.257,-1.544l0.772,-1.158l0.386,-2.061l-0.643,-1.676l-1.416,-0.771l-0.258,-1.030l0.386,-1.542l-5.148,-0.131l-1.031,-3.219l0.772,0l-0.128,-1.158l-0.516,-0.773l-0.128,-1.544l-1.545,-0.773l-1.673,0l-1.159,-0.772l-1.801,-0.515l-1.030,-1.030l-2.962,-0.515l-2.960,-2.317l0.258,-1.802l-0.387,-1.159l0.258,-1.930l-3.476,0.386l-1.416,1.029l-2.446,1.160l-0.515,0.771l-1.415,0l-2.060,-0.127l-1.416,0.384l-1.287,-0.257l0.256,-4.119l-2.317,1.545l-2.317,0l-1.030,-1.416l-1.801,-0.129l0.644,-1.158l-1.546,-1.674l-1.158,-2.445l0.772,-0.516l0,-1.158l1.545,-0.773l-0.257,-1.416l0.772,-0.901l0.129,-1.288l3.089,-1.802l2.188,-0.515l0.386,-0.514l2.446,0.129l1.159,-7.338l0.129,-1.159l-0.515,-1.544l-1.159,-1.030l0,-1.931l1.545,-0.387l0.515,0.258l0.129,-1.029l-1.545,-0.258l-0.129,-1.674l5.278,0l0.900,-0.902l0.773,0.902l0.515,1.545l0.516,-0.387l1.544,1.417l2.060,-0.129l0.515,-0.772l1.930,-0.644l1.159,-0.515l0.257,-1.159l1.931,-0.772l-0.128,-0.514l-2.188,-0.259l-0.387,-1.672l0,-1.804l-1.158,-0.643l0.514,-0.257l2.060,0.257l2.059,0.773l0.774,-0.643l1.930,-0.515l3.090,-0.902l0.900,-1.030l-0.257,-0.772l1.287,-0.129l0.644,0.643l-0.257,1.159l0.900,0.386l0.644,1.288l-0.772,0.902l-0.515,2.316l0.773,1.287l0.128,1.287l1.674,1.288l1.287,0.128l0.386,-0.515l0.772,-0.128l1.288,-0.515l0.901,-0.644l1.416,0.259l0.643,-0.130l1.546,0.130l0.257,-0.517l-0.516,-0.514l0.259,-0.773l1.158,0.259l1.159,-0.259l1.545,0.515l1.287,0.516l0.772,-0.644l0.643,0.128l0.387,0.772l1.287,-0.256l1.030,-1.031l0.772,-1.930l1.545,-2.446l1.029,-0.128l0.645,1.415l1.544,4.763l1.416,0.386l0,1.931l-1.931,2.189l0.773,0.772l4.763,0.387l0.128,2.702l2.059,-1.674l3.348,0.902l4.505,1.674l1.288,1.545l-0.387,1.545l3.090,-0.901l5.278,1.415l3.991,0l3.990,2.189l3.476,2.961l2.059,0.772l2.318,0.128l0.900,0.902l0.901,3.475l0.516,1.545l-1.159,4.505l-1.287,1.675l-3.862,3.863l-1.674,2.959l-2.059,2.317l-0.643,0.129l-0.773,1.931l0.257,5.020l-0.773,4.250l-0.256,1.672l-0.902,1.158l-0.515,3.605l-2.703,3.475l-0.387,2.833l-2.187,1.158l-0.644,1.546l-2.960,0l-4.249,1.028l-1.931,1.288l-2.960,0.773l-3.219,2.060l-2.188,2.703l-0.386,2.060l0.386,1.416l-0.515,2.703l-0.644,1.416l-1.803,1.416l-2.960,4.764l-2.446,2.189l-1.802,1.157l-1.287,2.574l-1.673,1.545l-0.772,-1.545l1.158,-1.286l-1.545,-1.804l-2.189,-1.414l-2.702,-1.805l-1.030,0.130l-2.704,-2.059l1.674,-0.257z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BruneiDarussalam",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M772.829,214.809l1.160,-1.030l2.315,-1.416l-0.127,1.287l-0.260,1.674l-1.285,0l-0.516,0.902l1.287,1.417z";
}, function($ctx1) {$ctx1.fill(self,"BruneiDarussalam",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "BruneiDarussalam\x0a\x09^ 'M772.829,214.809l1.160,-1.030l2.315,-1.416l-0.127,1.287l-0.260,1.674l-1.285,0l-0.516,0.902l1.287,1.417z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bulgaria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.314,107.833l0.773,1.030l1.031,-0.129l2.059,0.386l3.990,0.130l1.287,-0.644l3.219,-0.644l1.930,1.030l1.544,0.258l-1.416,1.158l-0.900,1.931l0.772,1.416l-2.317,-0.257l-2.705,0.772l0,1.417l-2.445,0.256l-1.930,-1.029l-2.187,0.773l-1.932,-0.130l-0.258,-1.674l-1.287,-0.900l0.385,-0.387l-0.256,-0.386l0.515,-0.772l1.030,-0.901l-1.415,-1.158l-0.259,-0.902l-0.772,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bulgaria",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Bulgaria\x0a\x09^ 'M526.314,107.833l0.773,1.030l1.031,-0.129l2.059,0.386l3.990,0.130l1.287,-0.644l3.219,-0.644l1.930,1.030l1.544,0.258l-1.416,1.158l-0.900,1.931l0.772,1.416l-2.317,-0.257l-2.705,0.772l0,1.417l-2.445,0.256l-1.930,-1.029l-2.187,0.773l-1.932,-0.130l-0.258,-1.674l-1.287,-0.900l0.385,-0.387l-0.256,-0.386l0.515,-0.772l1.030,-0.901l-1.415,-1.158l-0.259,-0.902l-0.772,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BurkinaFaso",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z";
}, function($ctx1) {$ctx1.fill(self,"BurkinaFaso",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "BurkinaFaso\x0a\x09^ 'M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Burundi",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M544.208,239.14l-0.130,-3.347l-0.643,-1.159l1.673,0.258l0.773,-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Burundi",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Burundi\x0a\x09^ 'M544.208,239.14l-0.130,-3.347l-0.643,-1.159l1.673,0.258l0.773,-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cambodia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M743.995,198.331l-1.031,-1.415l-1.416,-2.834l-0.643,-3.217l1.801,-2.189l3.475,-0.514l2.447,0.387l2.316,1.029l1.160,-1.803l2.446,0.901l0.644,1.803l-0.386,3.218l-4.506,2.059l1.160,1.674l-2.834,0.258l-2.316,1.030l2.317,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cambodia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Cambodia\x0a\x09^ 'M743.995,198.331l-1.031,-1.415l-1.416,-2.834l-0.643,-3.217l1.801,-2.189l3.475,-0.514l2.447,0.387l2.316,1.029l1.160,-1.803l2.446,0.901l0.644,1.803l-0.386,3.218l-4.506,2.059l1.160,1.674l-2.834,0.258l-2.316,1.030l2.317,0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cameroon",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Cameroon",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Cameroon\x0a\x09^ 'M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Canada",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M212.989,24.93l-1.416,1.159l-3.862,-0.257l-3.347,-0.644l1.417,-1.288l3.990,-0.772l2.317,1.030l-0.901,-0.772zM212.474,18.107l-1.287,0.130l-5.020,-0.130l-0.772,-0.772l5.535,0l1.802,0.515l0.258,-0.257zM204.622,14.761l3.218,0.901l-0.772,1.030l-3.991,0.515l-2.188,-0.644l-1.159,-0.901l-0.257,-1.159l3.604,0.129l-1.545,-0.129zM227.793,26.604l-4.377,-0.387l-7.208,-0.900l-0.901,-1.417l-0.258,-1.287l-2.703,-1.287l-5.664,-0.257l-3.090,-0.901l1.030,-1.031l5.535,0.130l2.962,0.901l5.406,0l2.317,0.901l-0.643,1.029l3.089,0.515l1.673,0.643l3.605,0.130l3.990,0.257l4.248,-0.643l5.535,-0.129l4.377,0.129l2.832,1.029l0.644,1.159l-1.674,0.644l-3.991,0.644l-3.475,-0.387l-7.724,0.387l5.535,-0.128zM165.489,16.434l3.862,0.386l-0.902,0.901l-5.020,0.772l-3.991,-0.900l2.188,-0.901l-3.863,0.258zM166.261,14.632l3.604,0.644l-3.347,0.515l-4.505,0l0.128,-0.387l2.704,-0.901l-1.416,-0.129zM205.137,40.636l2.703,1.158l-1.673,0.902l-3.605,-1.031l-2.188,0.516l-3.090,-0.387l1.803,-1.673l1.931,-1.159l2.059,0.643l-2.060,-1.031zM315.458,88.781l-1.417,1.673l-1.802,2.317l1.802,-0.900l1.802,0.643l-1.030,0.902l2.447,0.772l1.287,-0.772l2.574,0.901l-0.772,1.930l1.931,-0.386l0.257,1.417l0.901,1.673l-1.158,2.317l-1.288,0.129l-1.673,-0.515l0.515,-2.189l-0.772,-0.386l-3.089,2.317l-1.545,0l1.801,-1.287l-2.574,-0.644l-2.832,0.130l-5.278,-0.130l-0.386,-0.772l1.674,-0.901l-1.159,-0.773l2.317,-1.673l2.702,-4.248l1.675,-1.545l2.317,-0.901l1.288,0.129l0.515,-0.772zM239.25,51.578l2.960,0.901l3.090,0.901l0.258,1.287l1.930,-0.257l1.931,0.900l-2.316,0.903l-4.249,-0.774l-1.544,-1.158l-2.575,1.416l-3.861,1.416l-0.902,-1.544l-3.733,0.257l2.317,-1.416l0.386,-2.060l0.901,-2.445l1.931,0.257l0.515,1.158l1.417,-0.514l-1.544,-0.772zM218.525,6.393l7.080,-0.643l5.278,-0.386l5.921,-0.130l3.604,-1.415l11.199,-0.773l9.656,0.129l7.723,-0.386l18.924,0.514l10.555,1.802l-6.565,1.159l-6.437,0.515l-2.445,0.644l5.792,0l-10.684,2.317l-10.169,2.704l-9.913,0.900l3.734,0.258l-1.931,0.515l2.317,1.287l-6.694,1.674l-1.287,1.159l-3.863,0.772l0.387,0.643l3.604,0.258l0,0.644l-6.049,1.158l-7.081,-0.643l-7.981,0.386l-9.012,-0.515l-0.385,-1.288l5.020,-0.643l-1.158,-0.902l2.187,-0.900l6.437,0.900l-7.981,-2.316l2.188,-1.030l4.763,-0.644l0.773,-0.901l-3.862,-1.030l-1.159,-1.416l7.338,0.129l6.437,-0.644l-15.577,-0.128l-4.762,-1.031l-5.407,-1.802l0.515,0.901zM253.024,32.01l2.574,-1.030l5.922,1.417l3.734,1.287l0.385,1.158l5.020,-0.643l2.833,1.674l6.437,1.158l2.317,1.030l2.574,2.575l-4.891,1.158l6.307,1.803l4.248,0.643l3.862,2.446l4.248,0.128l-0.773,1.932l-4.763,3.089l-3.347,-1.158l-4.248,-2.575l-3.476,0.386l-0.257,1.545l2.832,1.545l3.605,1.287l1.159,0.644l1.673,2.704l-0.902,1.930l-3.347,-0.772l-6.821,-2.061l3.862,2.318l2.702,1.545l0.516,1.030l-7.339,-1.159l-5.793,-1.545l-3.218,-1.286l0.903,-0.774l-3.991,-1.415l-3.992,-1.287l0.129,0.772l-7.853,0.386l-2.188,-0.901l1.675,-1.931l5.149,-0.129l5.535,-0.257l-0.901,-1.031l0.901,-1.287l3.475,-2.702l-0.772,-1.159l-1.030,-0.901l-4.120,-1.288l-5.406,-0.901l1.674,-0.772l-2.832,-1.674l-2.317,-0.129l-2.189,-0.900l-1.416,0.772l-4.891,0.385l-9.784,-0.643l-5.664,-0.772l-4.377,-0.386l-2.317,-0.901l2.832,-1.287l-3.862,0l-0.772,-2.704l2.059,-2.446l2.704,-1.030l6.951,-0.772l-1.931,1.802l2.188,1.674l2.447,-2.189l6.823,-1.159l4.633,2.832l-0.386,1.675l-5.278,0.774zM210.672,27.248l5.536,0.128l5.148,0.645l-3.989,2.445l-3.219,0.514l-2.833,1.932l-3.088,-0.128l-1.675,-2.318l0,-1.287l1.417,-1.158l-2.703,0.773zM206.552,9.869l1.931,-0.901l2.704,-0.128l-1.159,-0.644l6.308,-0.129l3.348,1.416l8.753,1.673l5.664,2.060l-3.733,0.772l-5.021,2.060l-4.763,0.258l-5.535,-0.386l-2.961,-1.031l0.129,-1.030l2.059,-0.772l-4.891,0.129l-2.961,-0.902l-1.673,-1.287l-1.801,1.158zM194.71,31.109l-2.832,-2.574l2.961,-0.514l3.218,0.643l4.119,-0.258l0.515,1.030l-1.544,0.901l3.604,1.803l-0.644,1.416l-3.862,1.415l-2.574,-0.257l-1.803,-1.030l-5.535,-1.544l-1.673,-1.160l-6.050,-0.129zM178.233,30.08l3.089,1.158l1.674,2.574l0.772,1.932l4.634,1.287l4.764,1.287l-0.258,1.159l-4.377,0.257l1.673,1.030l-0.900,1.030l-6.436,0l-1.804,-0.644l-4.376,-0.386l-5.278,1.545l-6.565,0.644l-3.604,0.128l-2.704,-2.059l-6.050,-0.386l-4.505,-1.674l2.960,-0.772l4.119,-0.386l3.863,0.129l3.475,-0.516l-5.149,-0.644l-5.793,0.258l-3.862,-0.129l-1.416,-0.901l6.308,-1.159l-4.249,0.129l-4.634,-0.772l2.189,-2.059l1.932,-1.031l7.208,-1.673l2.703,0.515l-1.287,1.287l5.922,-0.772l3.861,1.287l2.961,-1.287l2.446,0.901l2.189,2.574l1.416,-1.157l-1.932,-2.704l2.446,-0.387l-2.575,-0.387zM174.757,22.613l2.446,-0.385l2.832,0.128l0.385,1.287l-1.543,1.287l-9.141,0.387l-6.822,1.159l-4.120,0.128l-0.257,-0.901l5.535,-1.159l-12.228,0.257l-3.734,-0.514l3.734,-2.575l2.445,-0.772l7.596,0.901l4.891,1.673l4.634,0.129l-3.862,-2.574l2.446,-1.030l1.803,0.643l0.900,1.287l-2.060,-0.644zM134.336,21.969l4.506,-2.059l5.535,-1.803l4.120,0.130l3.732,-0.387l-0.385,2.060l-2.060,0.901l-2.575,0.129l-5.020,1.158l-4.248,0.386l3.605,0.515zM137.812,26.476l3.862,0.514l6.823,0.129l2.703,0.772l2.832,1.158l-3.347,0.644l-6.694,1.674l-3.991,2.060l-0.643,1.287l-5.664,1.287l-1.802,-1.030l-5.922,-1.544l0.129,-0.902l2.188,-2.317l2.060,-1.159l-1.673,-2.188l-9.139,0.385zM107.69,81.443l2.574,-0.256l-0.773,3.088l2.318,2.188l-1.030,0l-1.674,-1.287l-0.900,-1.287l-1.416,-0.772l-0.516,-1.158l0.130,-0.902l-1.287,-0.386zM199.73,20.682l1.288,0.901l0,1.417l-1.416,1.801l-3.218,0.387l-2.961,-0.387l0.129,-1.545l-4.507,0.130l-0.128,-2.060l2.961,0.129l3.990,-0.901l-3.862,-0.128zM181.064,13.344l5.279,0.387l7.337,0.901l2.060,1.288l1.030,1.158l-4.377,-0.258l-4.506,-0.900l-5.922,-0.129l2.576,-0.773l-3.348,-0.644l0.129,1.030zM127.385,92.386l1.288,1.287l2.702,1.158l1.160,1.416l-1.417,0.387l-4.376,-1.159l-0.773,-1.029l-2.446,-0.903l-0.515,-0.772l-2.703,-0.514l-1.030,-1.416l0.129,-0.643l2.832,0.643l1.673,0.386l2.575,0.257l-0.901,-0.902zM315.071,83.502l0.129,2.961l-1.931,1.031l-1.932,0.901l-4.376,1.030l-3.476,2.188l-4.505,0.386l-5.793,-0.515l-3.990,0l-2.832,0.129l-2.318,1.930l-3.346,1.288l-3.863,3.476l-3.089,2.575l2.189,-0.515l4.376,-3.476l5.664,-2.317l3.991,-0.257l2.445,1.286l-2.573,1.932l0.772,2.832l0.901,2.060l3.476,1.287l4.504,-0.387l2.704,-2.960l0.258,1.931l1.673,1.029l-3.347,1.674l-5.921,1.674l-2.703,1.029l-2.961,1.931l-2.060,-0.128l-0.128,-2.317l4.633,-2.189l-4.247,0l-2.961,0.387l-1.803,-1.545l0,-3.605l-1.157,-0.772l-1.804,0.386l-0.900,-0.644l-2.060,1.932l-0.901,2.187l-0.902,1.159l-1.158,0.515l-0.901,0l-0.258,0.772l-4.891,0l-4.120,0l-1.287,0.516l-2.703,1.801l-0.387,0.258l-0.256,0.258l-0.387,0.386l-0.257,0.515l-0.643,0l-0.516,0l-0.901,0l-0.772,-0.128l-0.902,0l-0.643,0l-0.772,0.128l-0.258,0l-0.515,0.257l-0.386,0.129l0.257,0.386l0,0.129l0.387,0.772l0,0.258l0,0.128l-0.258,0.130l-0.386,0.128l-0.772,0.258l-0.902,0.257l-0.643,0.257l-0.643,0.258l-0.644,0.129l-0.128,0l-0.387,0l-0.900,0.128l-0.645,0.129l-0.644,0.258l-0.643,0.385l-0.644,0.258l-0.644,0.257l-0.643,0.258l-0.644,0l-0.514,-0.129l-0.387,-0.257l-0.257,-0.257l0,-0.130l0,-0.257l0.644,-0.900l1.286,-1.546l0,-0.128l0,-0.129l0.259,-0.515l0.385,-0.515l0.129,-0.258l-0.258,-0.772l-0.129,-0.515l0,-0.386l-0.127,-0.515l-0.130,-0.515l-0.129,-0.515l-0.128,-0.386l-0.130,-0.515l0,-0.257l-0.128,-0.387l-0.515,-0.386l-0.514,-0.128l-0.644,-0.258l-0.643,-0.257l-0.516,-0.257l0.386,-0.515l0,-0.129l-0.128,0l-0.258,-0.258l-0.128,0l-0.258,0.128l-0.386,-0.128l-0.258,-0.129l-0.128,0l-0.129,-0.257l-0.129,0l0,-0.258l0,-0.128l0,-0.129l0,-0.129l-0.257,0l-0.258,0.258l-0.772,0l0.128,-0.258l-0.257,0l-0.386,-0.257l-0.128,-0.387l-0.130,-0.386l-0.514,-0.257l-0.515,-0.129l-0.515,-0.258l-0.515,-0.257l-0.515,-0.128l-0.515,-0.258l-0.515,-0.258l-0.514,-0.128l-0.258,-0.128l-0.387,-0.130l-0.643,-0.257l-0.772,-0.386l-0.772,-0.258l-0.773,-0.257l-0.386,-0.257l-0.258,0l-0.386,-0.258l-0.644,-0.129l-0.643,0.129l-0.772,0.258l-0.387,0.128l-0.386,0.129l-0.258,0.129l-0.515,0l-0.385,0l-3.219,-0.773l-2.188,0.387l-2.703,-0.773l-2.704,-0.515l-1.930,-0.129l-0.772,-0.514l-0.516,-1.417l-0.901,0l0,1.030l-5.536,0l-9.139,0l-9.397,0l-32.182,0l-2.704,0l-15.962,0l-5.149,-2.574l-1.931,-1.287l-4.891,-1.030l-1.545,-2.446l0.385,-1.673l-3.474,-1.031l-0.387,-2.188l-3.348,-2.061l0,-1.287l1.417,-1.287l0,-1.802l-4.634,-1.673l-2.703,-3.090l-1.674,-1.930l-2.446,-1.159l-1.802,-1.159l-1.545,-1.417l-2.703,0.902l-2.575,1.545l-2.445,-1.803l-1.802,-1.157l-2.704,-0.774l-2.574,0l0,-15.446l0,-9.913l5.019,0.644l4.249,1.286l2.832,0.258l2.317,-1.158l3.347,-0.901l3.990,0.385l3.992,-1.157l4.376,-0.644l1.931,1.029l1.931,-0.644l0.643,-1.158l1.803,0.257l4.634,2.447l3.604,-1.931l0.387,2.059l3.218,-0.387l1.029,-0.772l3.219,0.129l4.120,1.159l6.307,0.901l3.733,0.515l2.704,-0.129l3.604,1.288l-3.734,1.415l4.763,0.515l7.338,-0.257l2.317,-0.515l2.832,1.544l2.960,-1.287l-2.832,-1.158l1.803,-0.901l3.218,-0.129l2.189,-0.258l2.188,0.644l2.703,1.417l2.961,-0.258l4.763,1.287l4.248,-0.386l3.862,0l-0.258,-1.673l2.446,-0.515l4.120,0.900l0,2.576l1.673,-2.060l2.188,0l1.288,-2.704l-2.962,-1.673l-3.088,-1.030l0.128,-2.961l3.218,-2.060l3.605,0.515l2.703,1.158l3.604,3.091l-2.317,1.287l5.020,0.514l0,2.832l3.605,-2.189l3.218,1.804l-0.900,1.930l2.702,1.802l2.704,-1.931l2.060,-2.317l0.129,-2.960l3.861,0.257l3.862,0.387l3.733,1.287l0.128,1.416l-2.059,1.416l1.931,1.416l-0.386,1.286l-5.277,1.932l-3.734,0.386l-2.704,-0.772l-0.901,1.287l-2.574,2.317l-0.773,1.159l-3.089,1.802l-3.862,0.257l-2.188,1.031l-0.130,1.802l-3.089,0.386l-3.347,2.188l-2.961,2.961l-1.028,2.188l-0.130,3.090l3.991,0.386l1.159,2.576l1.287,2.059l3.733,-0.515l5.020,1.159l2.704,1.029l1.930,1.288l3.347,0.643l2.832,1.158l4.507,0.129l2.959,0.258l-0.514,2.446l0.901,2.702l1.931,2.961l3.991,2.576l2.059,-0.902l1.545,-2.703l-1.416,-4.247l-1.931,-1.545l4.247,-1.159l3.090,-1.931l1.545,-1.931l-0.257,-1.803l-1.802,-2.188l-3.348,-2.060l3.219,-2.832l-1.158,-2.445l-0.902,-4.249l1.931,-0.514l4.506,0.643l2.832,0.257l2.188,-0.644l2.575,0.902l3.347,1.545l0.772,1.029l4.763,0.259l0,2.187l0.901,3.476l2.446,0.386l1.931,1.545l3.862,-1.416l2.574,-2.961l1.802,-1.287l2.060,2.446l3.605,3.347l2.960,3.218l-1.159,1.802l3.604,1.417l2.446,1.545l4.249,0.772l1.802,0.772l1.030,2.317l2.060,0.387l-1.158,-1.028z";
}, function($ctx1) {$ctx1.fill(self,"Canada",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Canada\x0a\x09^ 'M212.989,24.93l-1.416,1.159l-3.862,-0.257l-3.347,-0.644l1.417,-1.288l3.990,-0.772l2.317,1.030l-0.901,-0.772zM212.474,18.107l-1.287,0.130l-5.020,-0.130l-0.772,-0.772l5.535,0l1.802,0.515l0.258,-0.257zM204.622,14.761l3.218,0.901l-0.772,1.030l-3.991,0.515l-2.188,-0.644l-1.159,-0.901l-0.257,-1.159l3.604,0.129l-1.545,-0.129zM227.793,26.604l-4.377,-0.387l-7.208,-0.900l-0.901,-1.417l-0.258,-1.287l-2.703,-1.287l-5.664,-0.257l-3.090,-0.901l1.030,-1.031l5.535,0.130l2.962,0.901l5.406,0l2.317,0.901l-0.643,1.029l3.089,0.515l1.673,0.643l3.605,0.130l3.990,0.257l4.248,-0.643l5.535,-0.129l4.377,0.129l2.832,1.029l0.644,1.159l-1.674,0.644l-3.991,0.644l-3.475,-0.387l-7.724,0.387l5.535,-0.128zM165.489,16.434l3.862,0.386l-0.902,0.901l-5.020,0.772l-3.991,-0.900l2.188,-0.901l-3.863,0.258zM166.261,14.632l3.604,0.644l-3.347,0.515l-4.505,0l0.128,-0.387l2.704,-0.901l-1.416,-0.129zM205.137,40.636l2.703,1.158l-1.673,0.902l-3.605,-1.031l-2.188,0.516l-3.090,-0.387l1.803,-1.673l1.931,-1.159l2.059,0.643l-2.060,-1.031zM315.458,88.781l-1.417,1.673l-1.802,2.317l1.802,-0.900l1.802,0.643l-1.030,0.902l2.447,0.772l1.287,-0.772l2.574,0.901l-0.772,1.930l1.931,-0.386l0.257,1.417l0.901,1.673l-1.158,2.317l-1.288,0.129l-1.673,-0.515l0.515,-2.189l-0.772,-0.386l-3.089,2.317l-1.545,0l1.801,-1.287l-2.574,-0.644l-2.832,0.130l-5.278,-0.130l-0.386,-0.772l1.674,-0.901l-1.159,-0.773l2.317,-1.673l2.702,-4.248l1.675,-1.545l2.317,-0.901l1.288,0.129l0.515,-0.772zM239.25,51.578l2.960,0.901l3.090,0.901l0.258,1.287l1.930,-0.257l1.931,0.900l-2.316,0.903l-4.249,-0.774l-1.544,-1.158l-2.575,1.416l-3.861,1.416l-0.902,-1.544l-3.733,0.257l2.317,-1.416l0.386,-2.060l0.901,-2.445l1.931,0.257l0.515,1.158l1.417,-0.514l-1.544,-0.772zM218.525,6.393l7.080,-0.643l5.278,-0.386l5.921,-0.130l3.604,-1.415l11.199,-0.773l9.656,0.129l7.723,-0.386l18.924,0.514l10.555,1.802l-6.565,1.159l-6.437,0.515l-2.445,0.644l5.792,0l-10.684,2.317l-10.169,2.704l-9.913,0.900l3.734,0.258l-1.931,0.515l2.317,1.287l-6.694,1.674l-1.287,1.159l-3.863,0.772l0.387,0.643l3.604,0.258l0,0.644l-6.049,1.158l-7.081,-0.643l-7.981,0.386l-9.012,-0.515l-0.385,-1.288l5.020,-0.643l-1.158,-0.902l2.187,-0.900l6.437,0.900l-7.981,-2.316l2.188,-1.030l4.763,-0.644l0.773,-0.901l-3.862,-1.030l-1.159,-1.416l7.338,0.129l6.437,-0.644l-15.577,-0.128l-4.762,-1.031l-5.407,-1.802l0.515,0.901zM253.024,32.01l2.574,-1.030l5.922,1.417l3.734,1.287l0.385,1.158l5.020,-0.643l2.833,1.674l6.437,1.158l2.317,1.030l2.574,2.575l-4.891,1.158l6.307,1.803l4.248,0.643l3.862,2.446l4.248,0.128l-0.773,1.932l-4.763,3.089l-3.347,-1.158l-4.248,-2.575l-3.476,0.386l-0.257,1.545l2.832,1.545l3.605,1.287l1.159,0.644l1.673,2.704l-0.902,1.930l-3.347,-0.772l-6.821,-2.061l3.862,2.318l2.702,1.545l0.516,1.030l-7.339,-1.159l-5.793,-1.545l-3.218,-1.286l0.903,-0.774l-3.991,-1.415l-3.992,-1.287l0.129,0.772l-7.853,0.386l-2.188,-0.901l1.675,-1.931l5.149,-0.129l5.535,-0.257l-0.901,-1.031l0.901,-1.287l3.475,-2.702l-0.772,-1.159l-1.030,-0.901l-4.120,-1.288l-5.406,-0.901l1.674,-0.772l-2.832,-1.674l-2.317,-0.129l-2.189,-0.900l-1.416,0.772l-4.891,0.385l-9.784,-0.643l-5.664,-0.772l-4.377,-0.386l-2.317,-0.901l2.832,-1.287l-3.862,0l-0.772,-2.704l2.059,-2.446l2.704,-1.030l6.951,-0.772l-1.931,1.802l2.188,1.674l2.447,-2.189l6.823,-1.159l4.633,2.832l-0.386,1.675l-5.278,0.774zM210.672,27.248l5.536,0.128l5.148,0.645l-3.989,2.445l-3.219,0.514l-2.833,1.932l-3.088,-0.128l-1.675,-2.318l0,-1.287l1.417,-1.158l-2.703,0.773zM206.552,9.869l1.931,-0.901l2.704,-0.128l-1.159,-0.644l6.308,-0.129l3.348,1.416l8.753,1.673l5.664,2.060l-3.733,0.772l-5.021,2.060l-4.763,0.258l-5.535,-0.386l-2.961,-1.031l0.129,-1.030l2.059,-0.772l-4.891,0.129l-2.961,-0.902l-1.673,-1.287l-1.801,1.158zM194.71,31.109l-2.832,-2.574l2.961,-0.514l3.218,0.643l4.119,-0.258l0.515,1.030l-1.544,0.901l3.604,1.803l-0.644,1.416l-3.862,1.415l-2.574,-0.257l-1.803,-1.030l-5.535,-1.544l-1.673,-1.160l-6.050,-0.129zM178.233,30.08l3.089,1.158l1.674,2.574l0.772,1.932l4.634,1.287l4.764,1.287l-0.258,1.159l-4.377,0.257l1.673,1.030l-0.900,1.030l-6.436,0l-1.804,-0.644l-4.376,-0.386l-5.278,1.545l-6.565,0.644l-3.604,0.128l-2.704,-2.059l-6.050,-0.386l-4.505,-1.674l2.960,-0.772l4.119,-0.386l3.863,0.129l3.475,-0.516l-5.149,-0.644l-5.793,0.258l-3.862,-0.129l-1.416,-0.901l6.308,-1.159l-4.249,0.129l-4.634,-0.772l2.189,-2.059l1.932,-1.031l7.208,-1.673l2.703,0.515l-1.287,1.287l5.922,-0.772l3.861,1.287l2.961,-1.287l2.446,0.901l2.189,2.574l1.416,-1.157l-1.932,-2.704l2.446,-0.387l-2.575,-0.387zM174.757,22.613l2.446,-0.385l2.832,0.128l0.385,1.287l-1.543,1.287l-9.141,0.387l-6.822,1.159l-4.120,0.128l-0.257,-0.901l5.535,-1.159l-12.228,0.257l-3.734,-0.514l3.734,-2.575l2.445,-0.772l7.596,0.901l4.891,1.673l4.634,0.129l-3.862,-2.574l2.446,-1.030l1.803,0.643l0.900,1.287l-2.060,-0.644zM134.336,21.969l4.506,-2.059l5.535,-1.803l4.120,0.130l3.732,-0.387l-0.385,2.060l-2.060,0.901l-2.575,0.129l-5.020,1.158l-4.248,0.386l3.605,0.515zM137.812,26.476l3.862,0.514l6.823,0.129l2.703,0.772l2.832,1.158l-3.347,0.644l-6.694,1.674l-3.991,2.060l-0.643,1.287l-5.664,1.287l-1.802,-1.030l-5.922,-1.544l0.129,-0.902l2.188,-2.317l2.060,-1.159l-1.673,-2.188l-9.139,0.385zM107.69,81.443l2.574,-0.256l-0.773,3.088l2.318,2.188l-1.030,0l-1.674,-1.287l-0.900,-1.287l-1.416,-0.772l-0.516,-1.158l0.130,-0.902l-1.287,-0.386zM199.73,20.682l1.288,0.901l0,1.417l-1.416,1.801l-3.218,0.387l-2.961,-0.387l0.129,-1.545l-4.507,0.130l-0.128,-2.060l2.961,0.129l3.990,-0.901l-3.862,-0.128zM181.064,13.344l5.279,0.387l7.337,0.901l2.060,1.288l1.030,1.158l-4.377,-0.258l-4.506,-0.900l-5.922,-0.129l2.576,-0.773l-3.348,-0.644l0.129,1.030zM127.385,92.386l1.288,1.287l2.702,1.158l1.160,1.416l-1.417,0.387l-4.376,-1.159l-0.773,-1.029l-2.446,-0.903l-0.515,-0.772l-2.703,-0.514l-1.030,-1.416l0.129,-0.643l2.832,0.643l1.673,0.386l2.575,0.257l-0.901,-0.902zM315.071,83.502l0.129,2.961l-1.931,1.031l-1.932,0.901l-4.376,1.030l-3.476,2.188l-4.505,0.386l-5.793,-0.515l-3.990,0l-2.832,0.129l-2.318,1.930l-3.346,1.288l-3.863,3.476l-3.089,2.575l2.189,-0.515l4.376,-3.476l5.664,-2.317l3.991,-0.257l2.445,1.286l-2.573,1.932l0.772,2.832l0.901,2.060l3.476,1.287l4.504,-0.387l2.704,-2.960l0.258,1.931l1.673,1.029l-3.347,1.674l-5.921,1.674l-2.703,1.029l-2.961,1.931l-2.060,-0.128l-0.128,-2.317l4.633,-2.189l-4.247,0l-2.961,0.387l-1.803,-1.545l0,-3.605l-1.157,-0.772l-1.804,0.386l-0.900,-0.644l-2.060,1.932l-0.901,2.187l-0.902,1.159l-1.158,0.515l-0.901,0l-0.258,0.772l-4.891,0l-4.120,0l-1.287,0.516l-2.703,1.801l-0.387,0.258l-0.256,0.258l-0.387,0.386l-0.257,0.515l-0.643,0l-0.516,0l-0.901,0l-0.772,-0.128l-0.902,0l-0.643,0l-0.772,0.128l-0.258,0l-0.515,0.257l-0.386,0.129l0.257,0.386l0,0.129l0.387,0.772l0,0.258l0,0.128l-0.258,0.130l-0.386,0.128l-0.772,0.258l-0.902,0.257l-0.643,0.257l-0.643,0.258l-0.644,0.129l-0.128,0l-0.387,0l-0.900,0.128l-0.645,0.129l-0.644,0.258l-0.643,0.385l-0.644,0.258l-0.644,0.257l-0.643,0.258l-0.644,0l-0.514,-0.129l-0.387,-0.257l-0.257,-0.257l0,-0.130l0,-0.257l0.644,-0.900l1.286,-1.546l0,-0.128l0,-0.129l0.259,-0.515l0.385,-0.515l0.129,-0.258l-0.258,-0.772l-0.129,-0.515l0,-0.386l-0.127,-0.515l-0.130,-0.515l-0.129,-0.515l-0.128,-0.386l-0.130,-0.515l0,-0.257l-0.128,-0.387l-0.515,-0.386l-0.514,-0.128l-0.644,-0.258l-0.643,-0.257l-0.516,-0.257l0.386,-0.515l0,-0.129l-0.128,0l-0.258,-0.258l-0.128,0l-0.258,0.128l-0.386,-0.128l-0.258,-0.129l-0.128,0l-0.129,-0.257l-0.129,0l0,-0.258l0,-0.128l0,-0.129l0,-0.129l-0.257,0l-0.258,0.258l-0.772,0l0.128,-0.258l-0.257,0l-0.386,-0.257l-0.128,-0.387l-0.130,-0.386l-0.514,-0.257l-0.515,-0.129l-0.515,-0.258l-0.515,-0.257l-0.515,-0.128l-0.515,-0.258l-0.515,-0.258l-0.514,-0.128l-0.258,-0.128l-0.387,-0.130l-0.643,-0.257l-0.772,-0.386l-0.772,-0.258l-0.773,-0.257l-0.386,-0.257l-0.258,0l-0.386,-0.258l-0.644,-0.129l-0.643,0.129l-0.772,0.258l-0.387,0.128l-0.386,0.129l-0.258,0.129l-0.515,0l-0.385,0l-3.219,-0.773l-2.188,0.387l-2.703,-0.773l-2.704,-0.515l-1.930,-0.129l-0.772,-0.514l-0.516,-1.417l-0.901,0l0,1.030l-5.536,0l-9.139,0l-9.397,0l-32.182,0l-2.704,0l-15.962,0l-5.149,-2.574l-1.931,-1.287l-4.891,-1.030l-1.545,-2.446l0.385,-1.673l-3.474,-1.031l-0.387,-2.188l-3.348,-2.061l0,-1.287l1.417,-1.287l0,-1.802l-4.634,-1.673l-2.703,-3.090l-1.674,-1.930l-2.446,-1.159l-1.802,-1.159l-1.545,-1.417l-2.703,0.902l-2.575,1.545l-2.445,-1.803l-1.802,-1.157l-2.704,-0.774l-2.574,0l0,-15.446l0,-9.913l5.019,0.644l4.249,1.286l2.832,0.258l2.317,-1.158l3.347,-0.901l3.990,0.385l3.992,-1.157l4.376,-0.644l1.931,1.029l1.931,-0.644l0.643,-1.158l1.803,0.257l4.634,2.447l3.604,-1.931l0.387,2.059l3.218,-0.387l1.029,-0.772l3.219,0.129l4.120,1.159l6.307,0.901l3.733,0.515l2.704,-0.129l3.604,1.288l-3.734,1.415l4.763,0.515l7.338,-0.257l2.317,-0.515l2.832,1.544l2.960,-1.287l-2.832,-1.158l1.803,-0.901l3.218,-0.129l2.189,-0.258l2.188,0.644l2.703,1.417l2.961,-0.258l4.763,1.287l4.248,-0.386l3.862,0l-0.258,-1.673l2.446,-0.515l4.120,0.900l0,2.576l1.673,-2.060l2.188,0l1.288,-2.704l-2.962,-1.673l-3.088,-1.030l0.128,-2.961l3.218,-2.060l3.605,0.515l2.703,1.158l3.604,3.091l-2.317,1.287l5.020,0.514l0,2.832l3.605,-2.189l3.218,1.804l-0.900,1.930l2.702,1.802l2.704,-1.931l2.060,-2.317l0.129,-2.960l3.861,0.257l3.862,0.387l3.733,1.287l0.128,1.416l-2.059,1.416l1.931,1.416l-0.386,1.286l-5.277,1.932l-3.734,0.386l-2.704,-0.772l-0.901,1.287l-2.574,2.317l-0.773,1.159l-3.089,1.802l-3.862,0.257l-2.188,1.031l-0.130,1.802l-3.089,0.386l-3.347,2.188l-2.961,2.961l-1.028,2.188l-0.130,3.090l3.991,0.386l1.159,2.576l1.287,2.059l3.733,-0.515l5.020,1.159l2.704,1.029l1.930,1.288l3.347,0.643l2.832,1.158l4.507,0.129l2.959,0.258l-0.514,2.446l0.901,2.702l1.931,2.961l3.991,2.576l2.059,-0.902l1.545,-2.703l-1.416,-4.247l-1.931,-1.545l4.247,-1.159l3.090,-1.931l1.545,-1.931l-0.257,-1.803l-1.802,-2.188l-3.348,-2.060l3.219,-2.832l-1.158,-2.445l-0.902,-4.249l1.931,-0.514l4.506,0.643l2.832,0.257l2.188,-0.644l2.575,0.902l3.347,1.545l0.772,1.029l4.763,0.259l0,2.187l0.901,3.476l2.446,0.386l1.931,1.545l3.862,-1.416l2.574,-2.961l1.802,-1.287l2.060,2.446l3.605,3.347l2.960,3.218l-1.159,1.802l3.604,1.417l2.446,1.545l4.249,0.772l1.802,0.772l1.030,2.317l2.060,0.387l-1.158,-1.028z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CentralAfricanRepublic",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z";
}, function($ctx1) {$ctx1.fill(self,"CentralAfricanRepublic",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "CentralAfricanRepublic\x0a\x09^ 'M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chad",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z";
}, function($ctx1) {$ctx1.fill(self,"Chad",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Chad\x0a\x09^ 'M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chile",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M266.669,369.286l-3.347,-1.544l-0.772,-1.675l0.644,-1.544l-1.288,-1.802l-0.386,-4.634l1.158,-2.574l2.832,-2.061l-3.990,-0.772l2.445,-2.446l1.030,-4.505l2.962,1.031l1.416,-5.666l-1.802,-0.642l-0.902,3.345l-1.674,-0.386l0.902,-3.862l0.901,-5.020l1.159,-1.801l-0.773,-2.576l-0.129,-3.090l1.030,-0.128l1.673,-4.249l1.932,-4.376l1.158,-3.991l-0.643,-3.990l0.772,-2.317l-0.387,-3.347l1.674,-3.218l0.386,-5.278l0.901,-5.535l0.902,-6.051l-0.259,-4.378l-0.513,-3.862l1.415,-0.644l0.644,-1.417l1.286,1.932l0.387,1.933l1.417,1.157l-0.773,2.576l1.417,2.960l1.028,3.733l1.932,-0.386l0.386,0.772l-0.902,2.704l-2.960,1.415l0,4.378l-0.515,0.900l0.772,1.031l-1.802,1.673l-1.802,2.574l-1.030,2.446l0.257,2.575l-1.672,2.831l1.287,4.636l0.772,0.514l-0.129,2.447l-1.415,2.702l0,2.189l-2.060,1.802l0,2.446l0.900,2.574l-1.673,1.030l-0.773,2.447l-0.513,2.703l0.385,3.347l-1.030,0.516l0.645,3.089l1.157,1.030l-0.901,1.158l1.287,0.514l0.258,1.030l-1.158,0.515l0.257,1.545l-0.900,3.605l-1.546,2.316l0.386,1.288l-0.901,1.674l-2.060,1.288l0.258,2.831l0.902,0.902l1.801,-0.129l0,2.060l1.160,1.545l6.436,0.385l2.574,0.387l-2.446,0l-1.288,0.643l-2.444,1.029l-0.387,2.447l-1.159,0.129l-3.090,-0.902l3.089,1.931zM283.274,374.822l1.546,0l-0.902,1.157l-2.316,0.774l-1.288,0l-1.544,-0.256l-1.932,-0.774l-2.831,-0.386l-3.476,-1.545l-2.704,-1.416l-3.732,-3.090l2.188,0.645l3.862,1.802l3.476,0.901l1.416,-1.159l0.901,-1.932l2.445,-1.029l1.931,0.258l0.129,0.127l-0.129,5.923l-2.960,0z";
}, function($ctx1) {$ctx1.fill(self,"Chile",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Chile\x0a\x09^ 'M266.669,369.286l-3.347,-1.544l-0.772,-1.675l0.644,-1.544l-1.288,-1.802l-0.386,-4.634l1.158,-2.574l2.832,-2.061l-3.990,-0.772l2.445,-2.446l1.030,-4.505l2.962,1.031l1.416,-5.666l-1.802,-0.642l-0.902,3.345l-1.674,-0.386l0.902,-3.862l0.901,-5.020l1.159,-1.801l-0.773,-2.576l-0.129,-3.090l1.030,-0.128l1.673,-4.249l1.932,-4.376l1.158,-3.991l-0.643,-3.990l0.772,-2.317l-0.387,-3.347l1.674,-3.218l0.386,-5.278l0.901,-5.535l0.902,-6.051l-0.259,-4.378l-0.513,-3.862l1.415,-0.644l0.644,-1.417l1.286,1.932l0.387,1.933l1.417,1.157l-0.773,2.576l1.417,2.960l1.028,3.733l1.932,-0.386l0.386,0.772l-0.902,2.704l-2.960,1.415l0,4.378l-0.515,0.900l0.772,1.031l-1.802,1.673l-1.802,2.574l-1.030,2.446l0.257,2.575l-1.672,2.831l1.287,4.636l0.772,0.514l-0.129,2.447l-1.415,2.702l0,2.189l-2.060,1.802l0,2.446l0.900,2.574l-1.673,1.030l-0.773,2.447l-0.513,2.703l0.385,3.347l-1.030,0.516l0.645,3.089l1.157,1.030l-0.901,1.158l1.287,0.514l0.258,1.030l-1.158,0.515l0.257,1.545l-0.900,3.605l-1.546,2.316l0.386,1.288l-0.901,1.674l-2.060,1.288l0.258,2.831l0.902,0.902l1.801,-0.129l0,2.060l1.160,1.545l6.436,0.385l2.574,0.387l-2.446,0l-1.288,0.643l-2.444,1.029l-0.387,2.447l-1.159,0.129l-3.090,-0.902l3.089,1.931zM283.274,374.822l1.546,0l-0.902,1.157l-2.316,0.774l-1.288,0l-1.544,-0.256l-1.932,-0.774l-2.831,-0.386l-3.476,-1.545l-2.704,-1.416l-3.732,-3.090l2.188,0.645l3.862,1.802l3.476,0.901l1.416,-1.159l0.901,-1.932l2.445,-1.029l1.931,0.258l0.129,0.127l-0.129,5.923l-2.960,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "China",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M760.085,177.992l-2.188,-0.902l0,-2.317l1.288,-1.158l2.961,-0.773l1.544,0l0.645,1.031l-1.289,1.287l-0.514,1.545l2.447,-1.287zM712.198,152.117l-1.160,-0.644l-1.416,-0.128l-1.930,-0.645l-1.414,0.773l-1.804,1.931l-0.258,-2.059l-1.543,0.514l-3.221,-0.257l-2.959,-0.644l-2.189,-1.158l-2.188,-0.515l-0.900,-1.288l-1.545,-0.386l-2.703,-1.802l-2.061,-0.772l-1.158,0.643l-3.732,-1.930l-2.704,-1.674l-0.773,-2.960l1.932,0.385l0.129,-1.416l-1.030,-1.416l0.256,-2.189l-2.961,-3.089l-4.375,-1.159l-0.773,-2.059l-2.059,-1.287l-0.387,-0.773l-0.515,-1.416l0.129,-1.158l-1.674,-0.515l-0.772,0.256l-0.773,-2.573l0.773,-0.516l-0.386,-0.643l2.574,-1.288l1.930,-0.514l2.834,0.257l1.029,-1.673l3.476,-0.258l0.901,-1.158l4.248,-1.416l0.387,-0.644l-0.260,-1.545l1.931,-0.643l-2.445,-4.635l5.279,-1.159l1.415,-0.514l1.931,-4.892l5.408,0.901l1.416,-1.288l0.127,-2.704l2.317,-0.128l2.060,-1.801l1.030,-0.258l0.644,1.802l2.317,1.545l3.863,0.901l1.803,2.188l-1.032,3.219l1.032,1.158l3.216,0.387l3.606,0.385l3.217,1.674l1.673,0.386l1.159,2.446l1.672,1.545l2.962,0l5.536,0.644l3.605,-0.386l2.701,0.386l3.862,1.673l3.347,0l1.160,0.773l3.090,-1.416l4.375,-0.902l4.121,-0.128l3.088,-1.030l1.932,-1.416l1.931,-0.902l-0.515,-0.900l-0.774,-1.030l1.416,-1.674l1.416,0.257l2.832,0.516l2.704,-1.417l4.119,-1.029l1.931,-1.803l1.932,-0.772l3.861,-0.386l2.190,0.258l0.258,-0.902l-2.448,-1.931l-2.189,-0.772l-2.059,0.901l-2.701,-0.386l-1.420,0.386l-0.771,-1.158l1.931,-2.704l1.287,-1.931l3.219,0.900l3.862,-1.672l0,-1.159l2.447,-2.832l1.414,-0.901l0,-1.416l-1.545,-0.644l2.316,-1.417l3.350,-0.513l3.475,0l4.119,0.772l2.316,1.030l1.674,2.703l1.031,1.158l0.901,1.674l1.029,2.574l4.635,0.902l3.218,1.930l1.159,2.447l3.990,0l2.447,-1.030l4.375,-0.774l-1.414,2.448l-1.031,1.029l-0.901,2.832l-1.802,2.704l-3.346,-0.516l-2.318,0.901l0.771,2.317l-0.385,3.219l-1.416,0.129l0,1.288l-1.674,-1.546l-1.029,1.546l-4.248,1.157l0.387,1.417l-2.319,-0.130l-1.287,-0.900l-1.802,1.930l-2.961,1.546l-2.190,1.673l-3.732,0.772l-2.059,1.288l-2.832,0.772l1.416,-1.288l-0.513,-1.028l2.058,-1.803l-1.418,-1.417l-2.314,0.902l-3.090,1.931l-1.674,1.673l-2.576,0.129l-1.414,1.287l1.414,1.802l2.189,0.387l0.129,1.287l2.061,0.773l3.088,-1.931l2.447,1.029l1.672,0.129l0.387,1.416l-3.733,0.772l-1.287,1.416l-2.574,1.288l-1.418,1.931l2.834,1.417l1.158,2.702l1.545,2.446l1.930,2.060l-0.129,2.059l-1.674,0.773l0.644,1.416l1.545,0.773l-0.386,2.187l-0.643,2.189l-1.545,0.258l-1.932,2.832l-2.189,3.604l-2.443,3.219l-3.735,2.446l-3.732,2.317l-3.090,0.258l-1.674,1.157l-0.900,-0.772l-1.545,1.287l-3.733,1.416l-2.832,0.386l-0.900,2.833l-1.547,0.129l-0.642,-1.931l0.642,-1.031l-3.605,-0.900l-1.285,0.387l-2.704,-0.645l-1.289,-1.029l0.387,-1.545l-2.445,-0.515l-1.287,-1.030l-2.317,1.416l-2.576,0.257l-2.187,0l-1.416,0.644l-1.416,0.386l0.386,3.089l-1.418,0l-0.256,-0.643l-0.128,-1.158l-1.930,0.773l-1.160,-0.387l-2.059,-1.030l0.772,-2.317l-1.674,-0.515l-0.645,-2.446l-2.832,0.386l0.387,-3.089l2.445,-2.318l0.131,-2.188l0,-2.060l-1.289,-0.644l-0.900,-1.545l-1.545,0.130l-2.832,-0.386l0.900,-1.159l-1.285,-1.674l-1.934,1.158l-2.314,-0.643l-3.092,1.674l-2.445,2.059l2.188,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"China",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "China\x0a\x09^ 'M760.085,177.992l-2.188,-0.902l0,-2.317l1.288,-1.158l2.961,-0.773l1.544,0l0.645,1.031l-1.289,1.287l-0.514,1.545l2.447,-1.287zM712.198,152.117l-1.160,-0.644l-1.416,-0.128l-1.930,-0.645l-1.414,0.773l-1.804,1.931l-0.258,-2.059l-1.543,0.514l-3.221,-0.257l-2.959,-0.644l-2.189,-1.158l-2.188,-0.515l-0.900,-1.288l-1.545,-0.386l-2.703,-1.802l-2.061,-0.772l-1.158,0.643l-3.732,-1.930l-2.704,-1.674l-0.773,-2.960l1.932,0.385l0.129,-1.416l-1.030,-1.416l0.256,-2.189l-2.961,-3.089l-4.375,-1.159l-0.773,-2.059l-2.059,-1.287l-0.387,-0.773l-0.515,-1.416l0.129,-1.158l-1.674,-0.515l-0.772,0.256l-0.773,-2.573l0.773,-0.516l-0.386,-0.643l2.574,-1.288l1.930,-0.514l2.834,0.257l1.029,-1.673l3.476,-0.258l0.901,-1.158l4.248,-1.416l0.387,-0.644l-0.260,-1.545l1.931,-0.643l-2.445,-4.635l5.279,-1.159l1.415,-0.514l1.931,-4.892l5.408,0.901l1.416,-1.288l0.127,-2.704l2.317,-0.128l2.060,-1.801l1.030,-0.258l0.644,1.802l2.317,1.545l3.863,0.901l1.803,2.188l-1.032,3.219l1.032,1.158l3.216,0.387l3.606,0.385l3.217,1.674l1.673,0.386l1.159,2.446l1.672,1.545l2.962,0l5.536,0.644l3.605,-0.386l2.701,0.386l3.862,1.673l3.347,0l1.160,0.773l3.090,-1.416l4.375,-0.902l4.121,-0.128l3.088,-1.030l1.932,-1.416l1.931,-0.902l-0.515,-0.900l-0.774,-1.030l1.416,-1.674l1.416,0.257l2.832,0.516l2.704,-1.417l4.119,-1.029l1.931,-1.803l1.932,-0.772l3.861,-0.386l2.190,0.258l0.258,-0.902l-2.448,-1.931l-2.189,-0.772l-2.059,0.901l-2.701,-0.386l-1.420,0.386l-0.771,-1.158l1.931,-2.704l1.287,-1.931l3.219,0.900l3.862,-1.672l0,-1.159l2.447,-2.832l1.414,-0.901l0,-1.416l-1.545,-0.644l2.316,-1.417l3.350,-0.513l3.475,0l4.119,0.772l2.316,1.030l1.674,2.703l1.031,1.158l0.901,1.674l1.029,2.574l4.635,0.902l3.218,1.930l1.159,2.447l3.990,0l2.447,-1.030l4.375,-0.774l-1.414,2.448l-1.031,1.029l-0.901,2.832l-1.802,2.704l-3.346,-0.516l-2.318,0.901l0.771,2.317l-0.385,3.219l-1.416,0.129l0,1.288l-1.674,-1.546l-1.029,1.546l-4.248,1.157l0.387,1.417l-2.319,-0.130l-1.287,-0.900l-1.802,1.930l-2.961,1.546l-2.190,1.673l-3.732,0.772l-2.059,1.288l-2.832,0.772l1.416,-1.288l-0.513,-1.028l2.058,-1.803l-1.418,-1.417l-2.314,0.902l-3.090,1.931l-1.674,1.673l-2.576,0.129l-1.414,1.287l1.414,1.802l2.189,0.387l0.129,1.287l2.061,0.773l3.088,-1.931l2.447,1.029l1.672,0.129l0.387,1.416l-3.733,0.772l-1.287,1.416l-2.574,1.288l-1.418,1.931l2.834,1.417l1.158,2.702l1.545,2.446l1.930,2.060l-0.129,2.059l-1.674,0.773l0.644,1.416l1.545,0.773l-0.386,2.187l-0.643,2.189l-1.545,0.258l-1.932,2.832l-2.189,3.604l-2.443,3.219l-3.735,2.446l-3.732,2.317l-3.090,0.258l-1.674,1.157l-0.900,-0.772l-1.545,1.287l-3.733,1.416l-2.832,0.386l-0.900,2.833l-1.547,0.129l-0.642,-1.931l0.642,-1.031l-3.605,-0.900l-1.285,0.387l-2.704,-0.645l-1.289,-1.029l0.387,-1.545l-2.445,-0.515l-1.287,-1.030l-2.317,1.416l-2.576,0.257l-2.187,0l-1.416,0.644l-1.416,0.386l0.386,3.089l-1.418,0l-0.256,-0.643l-0.128,-1.158l-1.930,0.773l-1.160,-0.387l-2.059,-1.030l0.772,-2.317l-1.674,-0.515l-0.645,-2.446l-2.832,0.386l0.387,-3.089l2.445,-2.318l0.131,-2.188l0,-2.060l-1.289,-0.644l-0.900,-1.545l-1.545,0.130l-2.832,-0.386l0.900,-1.159l-1.285,-1.674l-1.934,1.158l-2.314,-0.643l-3.092,1.674l-2.445,2.059l2.188,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Colombia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M262.164,227.425l-1.159,-0.644l-1.287,-0.901l-0.772,0.386l-2.318,-0.386l-0.643,-1.157l-0.515,0.127l-2.704,-1.544l-0.386,-0.902l1.031,-0.129l-0.130,-1.416l0.644,-1.029l1.417,-0.129l1.029,-1.674l1.030,-1.416l-0.901,-0.644l0.515,-1.545l-0.644,-2.445l0.515,-0.772l-0.386,-2.318l-1.030,-1.416l0.258,-1.287l0.900,0.257l0.515,-0.901l-0.643,-1.544l0.386,-0.387l1.416,0.129l1.931,-1.931l1.158,-0.258l0,-0.901l0.515,-2.317l1.545,-1.158l1.674,-0.128l0.257,-0.516l2.059,0.257l2.189,-1.415l1.029,-0.644l1.288,-1.288l0.901,0.258l0.773,0.644l-0.516,0.901l-1.802,0.514l-0.644,1.289l-1.029,0.771l-0.772,1.030l-0.387,1.931l-0.772,1.545l1.415,0.129l0.387,1.287l0.644,0.645l0.128,1.028l-0.257,1.030l0,0.516l0.772,0.257l0.644,0.901l3.475,-0.258l1.546,0.387l1.802,2.317l1.158,-0.258l1.931,0.129l1.545,-0.386l0.902,0.515l-0.517,1.416l-0.513,0.901l-0.259,1.931l0.516,1.802l0.773,0.772l0.127,0.644l-1.416,1.287l1.031,0.644l0.772,0.901l0.773,2.703l-0.516,0.387l-0.515,-1.545l-0.773,-0.902l-0.900,0.902l-5.278,0l0.129,1.674l1.545,0.258l-0.129,1.029l-0.515,-0.258l-1.545,0.387l0,1.931l1.159,1.030l0.515,1.544l-0.129,1.159l-1.159,7.338l-1.416,-1.417l-0.772,0l1.802,-2.704l-2.060,-1.287l-1.673,0.259l-1.030,-0.516l-1.416,0.644l-2.060,-0.257l-1.544,-2.832l-1.288,-0.644l-0.772,-1.287l-1.802,-1.288l0.772,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Colombia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Colombia\x0a\x09^ 'M262.164,227.425l-1.159,-0.644l-1.287,-0.901l-0.772,0.386l-2.318,-0.386l-0.643,-1.157l-0.515,0.127l-2.704,-1.544l-0.386,-0.902l1.031,-0.129l-0.130,-1.416l0.644,-1.029l1.417,-0.129l1.029,-1.674l1.030,-1.416l-0.901,-0.644l0.515,-1.545l-0.644,-2.445l0.515,-0.772l-0.386,-2.318l-1.030,-1.416l0.258,-1.287l0.900,0.257l0.515,-0.901l-0.643,-1.544l0.386,-0.387l1.416,0.129l1.931,-1.931l1.158,-0.258l0,-0.901l0.515,-2.317l1.545,-1.158l1.674,-0.128l0.257,-0.516l2.059,0.257l2.189,-1.415l1.029,-0.644l1.288,-1.288l0.901,0.258l0.773,0.644l-0.516,0.901l-1.802,0.514l-0.644,1.289l-1.029,0.771l-0.772,1.030l-0.387,1.931l-0.772,1.545l1.415,0.129l0.387,1.287l0.644,0.645l0.128,1.028l-0.257,1.030l0,0.516l0.772,0.257l0.644,0.901l3.475,-0.258l1.546,0.387l1.802,2.317l1.158,-0.258l1.931,0.129l1.545,-0.386l0.902,0.515l-0.517,1.416l-0.513,0.901l-0.259,1.931l0.516,1.802l0.773,0.772l0.127,0.644l-1.416,1.287l1.031,0.644l0.772,0.901l0.773,2.703l-0.516,0.387l-0.515,-1.545l-0.773,-0.902l-0.900,0.902l-5.278,0l0.129,1.674l1.545,0.258l-0.129,1.029l-0.515,-0.258l-1.545,0.387l0,1.931l1.159,1.030l0.515,1.544l-0.129,1.159l-1.159,7.338l-1.416,-1.417l-0.772,0l1.802,-2.704l-2.060,-1.287l-1.673,0.259l-1.030,-0.516l-1.416,0.644l-2.060,-0.257l-1.544,-2.832l-1.288,-0.644l-0.772,-1.287l-1.802,-1.288l0.772,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Congo",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Congo",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Congo\x0a\x09^ 'M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CostaRica",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M241.695,204.768l-1.415,-0.515l-0.515,-0.644l0.257,-0.386l-0.128,-0.644l-0.644,-0.643l-1.159,-0.514l-0.901,-0.387l-0.128,-0.773l-0.773,-0.515l0.257,0.901l-0.643,0.644l-0.515,-0.772l-0.901,-0.258l-0.386,-0.644l0,-0.772l0.386,-0.901l-0.772,-0.257l0.644,-0.643l0.386,-0.259l1.801,0.644l0.644,-0.257l0.773,0.128l0.515,0.644l0.772,0.128l0.644,-0.514l0.644,1.416l1.029,1.030l1.287,1.157l-1.029,0.260l0,1.157l0.514,0.387l-0.385,0.257l0.128,0.515l-0.257,0.515l0.130,-0.515z";
}, function($ctx1) {$ctx1.fill(self,"CostaRica",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "CostaRica\x0a\x09^ 'M241.695,204.768l-1.415,-0.515l-0.515,-0.644l0.257,-0.386l-0.128,-0.644l-0.644,-0.643l-1.159,-0.514l-0.901,-0.387l-0.128,-0.773l-0.773,-0.515l0.257,0.901l-0.643,0.644l-0.515,-0.772l-0.901,-0.258l-0.386,-0.644l0,-0.772l0.386,-0.901l-0.772,-0.257l0.644,-0.643l0.386,-0.259l1.801,0.644l0.644,-0.257l0.773,0.128l0.515,0.644l0.772,0.128l0.644,-0.514l0.644,1.416l1.029,1.030l1.287,1.157l-1.029,0.260l0,1.157l0.514,0.387l-0.385,0.257l0.128,0.515l-0.257,0.515l0.130,-0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Croatia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,103.327l0.643,1.031l0.773,0.772l-1.030,1.029l-1.160,-0.643l-1.931,0l-2.316,-0.386l-1.159,0l-0.643,0.643l-1.031,-0.643l-0.516,1.159l1.290,1.158l0.643,0.901l1.286,1.031l0.901,0.514l1.031,1.159l2.445,1.030l-0.258,0.514l-2.572,-1.030l-1.547,-1.029l-2.444,-0.773l-2.318,-1.931l0.514,-0.257l-1.157,-1.159l-0.130,-0.901l-1.674,-0.386l-0.898,1.159l-0.774,-0.901l0.128,-0.902l0.129,-0.128l1.802,0.128l0.516,-0.386l0.901,0.386l1.030,0l0,-0.772l0.901,-0.257l0.255,-1.030l2.190,-0.773l0.902,0.386l1.930,1.159l2.316,0.515l-1.032,0.387zM502.372,101.654l2.315,0.258l1.289,-0.644l2.446,0l0.515,-0.515l0.385,0l0.515,0.901l-2.190,0.773l-0.255,1.030l-0.901,0.257l0,0.772l-1.030,0l-0.901,-0.386l-0.516,0.386l-1.802,-0.128l0.517,-0.258l-0.646,-1.029l-0.259,1.417z";
}, function($ctx1) {$ctx1.fill(self,"Croatia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Croatia\x0a\x09^ 'M516.017,103.327l0.643,1.031l0.773,0.772l-1.030,1.029l-1.160,-0.643l-1.931,0l-2.316,-0.386l-1.159,0l-0.643,0.643l-1.031,-0.643l-0.516,1.159l1.290,1.158l0.643,0.901l1.286,1.031l0.901,0.514l1.031,1.159l2.445,1.030l-0.258,0.514l-2.572,-1.030l-1.547,-1.029l-2.444,-0.773l-2.318,-1.931l0.514,-0.257l-1.157,-1.159l-0.130,-0.901l-1.674,-0.386l-0.898,1.159l-0.774,-0.901l0.128,-0.902l0.129,-0.128l1.802,0.128l0.516,-0.386l0.901,0.386l1.030,0l0,-0.772l0.901,-0.257l0.255,-1.030l2.190,-0.773l0.902,0.386l1.930,1.159l2.316,0.515l-1.032,0.387zM502.372,101.654l2.315,0.258l1.289,-0.644l2.446,0l0.515,-0.515l0.385,0l0.515,0.901l-2.190,0.773l-0.255,1.030l-0.901,0.257l0,0.772l-1.030,0l-0.901,-0.386l-0.516,0.386l-1.802,-0.128l0.517,-0.258l-0.646,-1.029l-0.259,1.417z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cuba",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M243.626,164.475l2.318,0.257l2.059,0l2.576,0.902l1.028,1.030l2.576,-0.387l0.900,0.644l2.318,1.673l1.673,1.287l0.901,-0.128l1.545,0.644l-0.129,0.772l1.931,0l2.060,1.159l-0.257,0.644l-1.803,0.385l-1.802,0.129l-1.931,-0.257l-3.861,0.257l1.801,-1.544l-1.029,-0.644l-1.802,-0.258l-0.902,-0.772l-0.643,-1.415l-1.546,0l-2.445,-0.645l-0.772,-0.644l-3.604,-0.385l-0.902,-0.515l1.030,-0.644l-2.704,-0.128l-1.930,1.416l-1.030,0l-0.386,0.643l-1.417,0.257l-1.158,-0.257l1.417,-0.772l0.643,-1.030l1.159,-0.515l1.415,-0.515l2.059,-0.257l-0.644,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cuba",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Cuba\x0a\x09^ 'M243.626,164.475l2.318,0.257l2.059,0l2.576,0.902l1.028,1.030l2.576,-0.387l0.900,0.644l2.318,1.673l1.673,1.287l0.901,-0.128l1.545,0.644l-0.129,0.772l1.931,0l2.060,1.159l-0.257,0.644l-1.803,0.385l-1.802,0.129l-1.931,-0.257l-3.861,0.257l1.801,-1.544l-1.029,-0.644l-1.802,-0.258l-0.902,-0.772l-0.643,-1.415l-1.546,0l-2.445,-0.645l-0.772,-0.644l-3.604,-0.385l-0.902,-0.515l1.030,-0.644l-2.704,-0.128l-1.930,1.416l-1.030,0l-0.386,0.643l-1.417,0.257l-1.158,-0.257l1.417,-0.772l0.643,-1.030l1.159,-0.515l1.415,-0.515l2.059,-0.257l-0.644,0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cyprus",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.694,132.549l0.129,0.259l-2.704,1.028l-1.417,-0.385l-0.514,-1.030l1.159,-0.129l0.258,0.129l0.127,0l0.130,0l0.257,0l0.257,-0.129l0.260,-0.128l0.127,0.128l0.258,0l0.128,0l0.128,0l0.130,0.129l0,0.258l0.129,-0.130l0.257,0.130l0.128,0l0.131,-0.130l0.128,0l0.128,0l0.129,-0.128l0.128,0l-0.129,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Cyprus",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Cyprus\x0a\x09^ 'M556.694,132.549l0.129,0.259l-2.704,1.028l-1.417,-0.385l-0.514,-1.030l1.159,-0.129l0.258,0.129l0.127,0l0.130,0l0.257,0l0.257,-0.129l0.260,-0.128l0.127,0.128l0.258,0l0.128,0l0.128,0l0.130,0.129l0,0.258l0.129,-0.130l0.257,0.130l0.128,0l0.131,-0.130l0.128,0l0.128,0l0.129,-0.128l0.128,0l-0.129,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CzechRepubilc",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.866,96.119l-1.158,-0.516l-1.286,0.129l-2.061,-0.901l-1.030,0.258l-1.417,1.030l-2.058,-0.772l-1.544,-1.159l-1.288,-0.645l-0.386,-1.157l-0.387,-0.773l1.932,-0.643l1.029,-0.644l1.932,-0.515l0.642,-0.516l0.645,0.259l1.287,-0.259l1.287,0.903l1.932,0.256l-0.129,0.645l1.414,0.644l0.517,-0.773l1.802,0.386l0.257,0.772l1.930,0.129l1.289,1.416l-0.774,0l-0.385,0.515l-0.644,0l-0.256,0.643l-0.517,0.129l0,0.257l-0.900,0.258l-1.288,0l0.387,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"CzechRepubilc",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "CzechRepubilc\x0a\x09^ 'M510.866,96.119l-1.158,-0.516l-1.286,0.129l-2.061,-0.901l-1.030,0.258l-1.417,1.030l-2.058,-0.772l-1.544,-1.159l-1.288,-0.645l-0.386,-1.157l-0.387,-0.773l1.932,-0.643l1.029,-0.644l1.932,-0.515l0.642,-0.516l0.645,0.259l1.287,-0.259l1.287,0.903l1.932,0.256l-0.129,0.645l1.414,0.644l0.517,-0.773l1.802,0.386l0.257,0.772l1.930,0.129l1.289,1.416l-0.774,0l-0.385,0.515l-0.644,0l-0.256,0.643l-0.517,0.129l0,0.257l-0.900,0.258l-1.288,0l0.387,-0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DemocraticRepublicCongo",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"DemocraticRepublicCongo",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "DemocraticRepublicCongo\x0a\x09^ 'M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Denmark",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.21,78.87l-1.159,-1.417l0,-2.832l0.387,-0.644l0.772,-0.901l2.447,-0.130l0.900,-0.772l2.188,-0.771l-0.128,1.415l-0.772,0.902l0.385,0.772l1.417,0.386l-0.644,1.029l-0.773,-0.257l-2.060,1.932l0.775,1.288l-1.675,0.385l2.060,0.385zM498.509,75.779l0.900,1.416l-1.545,2.188l-2.831,-1.544l-0.386,-1.158l-3.862,0.902z";
}, function($ctx1) {$ctx1.fill(self,"Denmark",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Denmark\x0a\x09^ 'M488.21,78.87l-1.159,-1.417l0,-2.832l0.387,-0.644l0.772,-0.901l2.447,-0.130l0.900,-0.772l2.188,-0.771l-0.128,1.415l-0.772,0.902l0.385,0.772l1.417,0.386l-0.644,1.029l-0.773,-0.257l-2.060,1.932l0.775,1.288l-1.675,0.385l2.060,0.385zM498.509,75.779l0.900,1.416l-1.545,2.188l-2.831,-1.544l-0.386,-1.158l-3.862,0.902z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Djibouti",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z";
}, function($ctx1) {$ctx1.fill(self,"Djibouti",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Djibouti\x0a\x09^ 'M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DominicanRepublic",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M272.075,173.873l0.259,-0.516l2.187,0l1.545,0.772l0.772,-0.128l0.387,1.030l1.545,-0.129l-0.129,0.901l1.288,0l1.286,1.030l-1.030,1.159l-1.287,-0.644l-1.287,0.129l-0.773,-0.129l-0.514,0.515l-1.030,0.129l-0.387,-0.644l-0.900,0.386l-1.159,1.803l-0.643,-0.387l-0.130,-0.772l0,-0.773l-0.643,-0.772l0.643,-0.515l0.259,-1.029l0.259,1.416z";
}, function($ctx1) {$ctx1.fill(self,"DominicanRepublic",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "DominicanRepublic\x0a\x09^ 'M272.075,173.873l0.259,-0.516l2.187,0l1.545,0.772l0.772,-0.128l0.387,1.030l1.545,-0.129l-0.129,0.901l1.288,0l1.286,1.030l-1.030,1.159l-1.287,-0.644l-1.287,0.129l-0.773,-0.129l-0.514,0.515l-1.030,0.129l-0.387,-0.644l-0.900,0.386l-1.159,1.803l-0.643,-0.387l-0.130,-0.772l0,-0.773l-0.643,-0.772l0.643,-0.515l0.259,-1.029l0.259,1.416z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ecuador",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M248.905,236.179l1.415,-2.060l-0.514,-1.159l-1.031,1.288l-1.672,-1.160l0.515,-0.772l-0.387,-2.445l0.901,-0.516l0.515,-1.673l1.030,-1.674l-0.258,-1.158l1.545,-0.514l1.802,-1.030l2.704,1.544l0.515,-0.127l0.643,1.157l2.318,0.386l0.772,-0.386l1.287,0.901l1.159,0.644l0.386,2.059l-0.772,1.674l-2.961,2.832l-3.219,1.030l-1.673,2.446l-0.514,1.802l-1.545,1.030l-1.159,-1.286l-1.030,-0.388l-1.159,0.257l0,-1.029l0.773,-0.643l0.386,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Ecuador",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Ecuador\x0a\x09^ 'M248.905,236.179l1.415,-2.060l-0.514,-1.159l-1.031,1.288l-1.672,-1.160l0.515,-0.772l-0.387,-2.445l0.901,-0.516l0.515,-1.673l1.030,-1.674l-0.258,-1.158l1.545,-0.514l1.802,-1.030l2.704,1.544l0.515,-0.127l0.643,1.157l2.318,0.386l0.772,-0.386l1.287,0.901l1.159,0.644l0.386,2.059l-0.772,1.674l-2.961,2.832l-3.219,1.030l-1.673,2.446l-0.514,1.802l-1.545,1.030l-1.159,-1.286l-1.030,-0.388l-1.159,0.257l0,-1.029l0.773,-0.643l0.386,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Egypt",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M559.269,147.483l-0.774,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901,-0.901l-1.159,-1.158l-1.930,-3.862l-0.258,0.258l1.159,2.831l1.545,2.703l2.059,4.119l1.030,1.545l0.903,1.545l2.316,2.961l-0.517,0.386l0.130,1.802l3.089,2.447l0.259,0.514l-10.299,0l-10.556,0l-10.813,0l0,-9.912l0,-9.526l-0.901,-2.189l0.772,-1.673l-0.387,-1.159l0.903,-1.287l3.603,0l2.575,0.644l2.705,0.773l1.287,0.514l2.058,-0.901l1.030,-0.772l2.447,-0.258l1.930,0.386l0.642,1.287l0.647,-0.900l2.186,0.644l2.061,0.128l1.415,-0.644l-1.674,-4.635z";
}, function($ctx1) {$ctx1.fill(self,"Egypt",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Egypt\x0a\x09^ 'M559.269,147.483l-0.774,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901,-0.901l-1.159,-1.158l-1.930,-3.862l-0.258,0.258l1.159,2.831l1.545,2.703l2.059,4.119l1.030,1.545l0.903,1.545l2.316,2.961l-0.517,0.386l0.130,1.802l3.089,2.447l0.259,0.514l-10.299,0l-10.556,0l-10.813,0l0,-9.912l0,-9.526l-0.901,-2.189l0.772,-1.673l-0.387,-1.159l0.903,-1.287l3.603,0l2.575,0.644l2.705,0.773l1.287,0.514l2.058,-0.901l1.030,-0.772l2.447,-0.258l1.930,0.386l0.642,1.287l0.647,-0.900l2.186,0.644l2.061,0.128l1.415,-0.644l-1.674,-4.635z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ElSalvador",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M228.694,190.865l-0.257,0.645l-1.545,0l-1.030,-0.259l-1.029,-0.515l-1.545,-0.129l-0.772,-0.644l0.128,-0.385l0.901,-0.644l0.515,-0.385l-0.129,-0.258l0.644,-0.129l0.772,0.129l0.515,0.643l0.902,0.386l0,0.386l1.287,-0.386l0.515,0.258l0.386,0.256l0.258,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"ElSalvador",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "ElSalvador\x0a\x09^ 'M228.694,190.865l-0.257,0.645l-1.545,0l-1.030,-0.259l-1.029,-0.515l-1.545,-0.129l-0.772,-0.644l0.128,-0.385l0.901,-0.644l0.515,-0.385l-0.129,-0.258l0.644,-0.129l0.772,0.129l0.515,0.643l0.902,0.386l0,0.386l1.287,-0.386l0.515,0.258l0.386,0.256l0.258,-1.031z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "EquatorialGuinea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"EquatorialGuinea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "EquatorialGuinea\x0a\x09^ 'M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Eritrea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z";
}, function($ctx1) {$ctx1.fill(self,"Eritrea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Eritrea\x0a\x09^ 'M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Estonia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M530.69,71.273l0.387,-1.544l-1.029,0.257l-1.674,-0.900l-0.256,-1.545l3.344,-0.773l3.477,-0.386l2.833,0.515l2.831,-0.129l0.386,0.515l-1.930,1.544l0.900,2.446l-1.158,0.901l-2.318,0l-2.316,-1.028l-1.158,-0.387l2.319,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Estonia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Estonia\x0a\x09^ 'M530.69,71.273l0.387,-1.544l-1.029,0.257l-1.674,-0.900l-0.256,-1.545l3.344,-0.773l3.477,-0.386l2.833,0.515l2.831,-0.129l0.386,0.515l-1.930,1.544l0.900,2.446l-1.158,0.901l-2.318,0l-2.316,-1.028l-1.158,-0.387l2.319,-0.514z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ethiopia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Ethiopia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Ethiopia\x0a\x09^ 'M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FalklandIslandsMalvinas",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M302.584,365.296l-0.129,1.159l-1.03,1.416l2.188-1.031l1.158-1.286L302.584,365.296zM307.733,365.037l1.159,0.388l-0.902,1.415l-2.188,0.772l-0.257-0.9l1.288-1.416L307.733,365.037z";
}, function($ctx1) {$ctx1.fill(self,"FalklandIslandsMalvinas",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "FalklandIslandsMalvinas\x0a\x09^ 'M302.584,365.296l-0.129,1.159l-1.03,1.416l2.188-1.031l1.158-1.286L302.584,365.296zM307.733,365.037l1.159,0.388l-0.902,1.415l-2.188,0.772l-0.257-0.9l1.288-1.416L307.733,365.037z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Fiji",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M946.097,274.154l0.773,-0.514l0.901,0.772l-0.516,1.416l-1.672,0.385l-1.418,-0.256l-0.256,-1.289l1.029,-0.900l-1.159,-0.386zM950.089,271.579l-1.160,0.773l-1.545,0.644l-0.385,-1.287l1.031,-1.030l0.899,-0.130l1.160,-0.256l-0.001,0l0.515,-0.129l-0.387,1.287l-0.128,0.128l-0.001,0z";
}, function($ctx1) {$ctx1.fill(self,"Fiji",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Fiji\x0a\x09^ 'M946.097,274.154l0.773,-0.514l0.901,0.772l-0.516,1.416l-1.672,0.385l-1.418,-0.256l-0.256,-1.289l1.029,-0.900l-1.159,-0.386zM950.089,271.579l-1.160,0.773l-1.545,0.644l-0.385,-1.287l1.031,-1.030l0.899,-0.130l1.160,-0.256l-0.001,0l0.515,-0.129l-0.387,1.287l-0.128,0.128l-0.001,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Finland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M542.276,40.893l-0.384,1.932l4.119,1.801l-2.448,2.060l3.089,2.960l-1.801,2.318l2.445,2.060l-1.157,1.802l3.991,1.802l-1.030,1.416l-2.448,1.545l-5.792,3.347l-4.890,0.257l-4.764,1.030l-4.377,0.515l-1.545,-1.416l-2.574,-0.901l0.514,-2.704l-1.286,-2.445l1.286,-1.545l2.447,-1.673l6.180,-2.961l1.800,-0.515l-0.256,-1.159l-3.734,-1.286l-0.901,-1.031l-0.128,-4.120l-4.250,-1.801l-3.475,-1.417l1.545,-0.643l2.961,1.416l3.606,-0.129l2.832,0.644l2.572,-1.159l1.289,-2.060l4.247,-0.900l3.476,1.157l1.159,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Finland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Finland\x0a\x09^ 'M542.276,40.893l-0.384,1.932l4.119,1.801l-2.448,2.060l3.089,2.960l-1.801,2.318l2.445,2.060l-1.157,1.802l3.991,1.802l-1.030,1.416l-2.448,1.545l-5.792,3.347l-4.890,0.257l-4.764,1.030l-4.377,0.515l-1.545,-1.416l-2.574,-0.901l0.514,-2.704l-1.286,-2.445l1.286,-1.545l2.447,-1.673l6.180,-2.961l1.800,-0.515l-0.256,-1.159l-3.734,-1.286l-0.901,-1.031l-0.128,-4.120l-4.250,-1.801l-3.475,-1.417l1.545,-0.643l2.961,1.416l3.606,-0.129l2.832,0.644l2.572,-1.159l1.289,-2.060l4.247,-0.900l3.476,1.157l1.159,-1.803z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "France",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.903,93.673l1.287,0.773l3.861,0.514l-1.416,1.802l-0.257,1.931l-0.772,0.515l-1.288,-0.257l0.130,0.644l-1.932,1.545l0,1.158l1.288,-0.386l0.901,1.159l-0.128,0.772l0.772,1.029l-0.901,0.774l0.642,2.058l1.418,0.386l-0.258,1.160l-2.446,1.544l-5.277,-0.772l-3.992,0.901l-0.257,1.673l-3.090,0.258l-3.089,-1.158l-0.901,0.514l-5.021,-1.158l-1.029,-1.030l1.416,-1.674l0.515,-5.277l-2.832,-2.833l-2.060,-1.415l-3.991,-1.031l-0.386,-1.931l3.604,-0.644l4.506,0.773l-0.901,-3.090l2.575,1.159l6.306,-2.060l0.775,-2.317l2.317,-0.515l0.385,1.031l1.287,0l1.288,1.029l1.801,1.287l1.416,-0.257l2.318,1.286l0.643,0.259l-0.773,0.129zM488.854,112.082l1.674,-1.030l0.514,2.317l-0.899,2.188l-1.289,-0.643l-0.644,-1.803l-0.644,1.029z";
}, function($ctx1) {$ctx1.fill(self,"France",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "France\x0a\x09^ 'M481.903,93.673l1.287,0.773l3.861,0.514l-1.416,1.802l-0.257,1.931l-0.772,0.515l-1.288,-0.257l0.130,0.644l-1.932,1.545l0,1.158l1.288,-0.386l0.901,1.159l-0.128,0.772l0.772,1.029l-0.901,0.774l0.642,2.058l1.418,0.386l-0.258,1.160l-2.446,1.544l-5.277,-0.772l-3.992,0.901l-0.257,1.673l-3.090,0.258l-3.089,-1.158l-0.901,0.514l-5.021,-1.158l-1.029,-1.030l1.416,-1.674l0.515,-5.277l-2.832,-2.833l-2.060,-1.415l-3.991,-1.031l-0.386,-1.931l3.604,-0.644l4.506,0.773l-0.901,-3.090l2.575,1.159l6.306,-2.060l0.775,-2.317l2.317,-0.515l0.385,1.031l1.287,0l1.288,1.029l1.801,1.287l1.416,-0.257l2.318,1.286l0.643,0.259l-0.773,0.129zM488.854,112.082l1.674,-1.030l0.514,2.317l-0.899,2.188l-1.289,-0.643l-0.644,-1.803l-0.644,1.029z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FrenchGuyana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.834,211.463l0.902,0.256l2.058,0.644l2.833,2.317l0.386,1.159l-1.545,2.446l-0.772,1.930l-1.030,1.031l-1.287,0.256l-0.387,-0.772l-0.643,-0.128l-0.772,0.644l-1.287,-0.516l0.772,-1.158l0.257,-1.159l0.386,-1.157l-1.029,-1.674l-0.259,-1.803l-1.417,2.316z";
}, function($ctx1) {$ctx1.fill(self,"FrenchGuyana",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "FrenchGuyana\x0a\x09^ 'M319.834,211.463l0.902,0.256l2.058,0.644l2.833,2.317l0.386,1.159l-1.545,2.446l-0.772,1.930l-1.030,1.031l-1.287,0.256l-0.387,-0.772l-0.643,-0.128l-0.772,0.644l-1.287,-0.516l0.772,-1.158l0.257,-1.159l0.386,-1.157l-1.029,-1.674l-0.259,-1.803l-1.417,2.316z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GM",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z";
}, function($ctx1) {$ctx1.fill(self,"GM",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "GM\x0a\x09^ 'M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Gabon",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M495.162,237.723l-2.833,-2.703l-1.801,-2.317l-1.544,-2.704l0,-0.900l0.642,-0.902l0.644,-1.931l0.515,-2.060l0.903,-0.128l3.988,0l-0.128,-3.219l1.288,-0.129l1.673,0.387l1.674,-0.387l0.256,0.129l-0.127,1.160l0.643,1.415l2.060,-0.258l0.642,0.515l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.802l-0.900,1.288l-2.319,-0.129l-1.416,-1.287l-0.256,1.287l-1.802,0.257l-0.901,0.643l1.029,1.804l2.059,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Gabon",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Gabon\x0a\x09^ 'M495.162,237.723l-2.833,-2.703l-1.801,-2.317l-1.544,-2.704l0,-0.900l0.642,-0.902l0.644,-1.931l0.515,-2.060l0.903,-0.128l3.988,0l-0.128,-3.219l1.288,-0.129l1.673,0.387l1.674,-0.387l0.256,0.129l-0.127,1.160l0.643,1.415l2.060,-0.258l0.642,0.515l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.802l-0.900,1.288l-2.319,-0.129l-1.416,-1.287l-0.256,1.287l-1.802,0.257l-0.901,0.643l1.029,1.804l2.059,-1.544z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Georgia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M577.161,115.042l0.387,-1.159l-0.643,-1.801l-1.546,-1.030l-1.544,-0.258l-0.900,-0.772l0.256,-0.387l2.318,0.516l3.990,0.386l3.604,1.287l0.517,0.515l1.671,-0.387l2.446,0.516l0.772,1.158l1.803,0.644l-0.771,0.257l1.287,1.545l-0.258,0.258l-1.545,-0.130l-1.930,-0.772l-0.644,0.387l-3.734,0.515l-2.702,-1.416l2.834,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Georgia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Georgia\x0a\x09^ 'M577.161,115.042l0.387,-1.159l-0.643,-1.801l-1.546,-1.030l-1.544,-0.258l-0.900,-0.772l0.256,-0.387l2.318,0.516l3.990,0.386l3.604,1.287l0.517,0.515l1.671,-0.387l2.446,0.516l0.772,1.158l1.803,0.644l-0.771,0.257l1.287,1.545l-0.258,0.258l-1.545,-0.130l-1.930,-0.772l-0.644,0.387l-3.734,0.515l-2.702,-1.416l2.834,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Germany",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.945,78.87l0.127,1.028l2.703,0.644l-0.128,0.901l2.831,-0.514l1.417,-0.644l3.090,1.029l1.287,0.901l0.642,1.287l-0.770,0.773l1.029,0.901l0.644,1.417l-0.257,1.030l1.158,1.672l-1.287,0.259l-0.645,-0.259l-0.642,0.516l-1.932,0.515l-1.029,0.644l-1.932,0.643l0.387,0.773l0.386,1.157l1.288,0.645l1.544,1.159l-0.901,1.158l-1.030,0.386l0.387,1.802l-0.258,0.386l-0.773,-0.515l-1.287,-0.128l-1.931,0.515l-2.446,-0.128l-0.387,0.772l-1.285,-0.772l-0.903,0.128l-2.832,-0.772l-0.515,0.514l-2.317,0l0.257,-1.931l1.416,-1.802l-3.861,-0.514l-1.287,-0.773l0.129,-1.159l-0.516,-0.515l0.258,-1.930l-0.386,-2.833l1.544,0l0.773,-0.901l0.644,-2.574l-0.515,-0.902l0.515,-0.515l2.317,-0.129l0.385,0.516l1.933,-1.288l-0.645,-1.029l-0.129,-1.544l2.060,0.385l-1.675,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Germany",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Germany\x0a\x09^ 'M491.945,78.87l0.127,1.028l2.703,0.644l-0.128,0.901l2.831,-0.514l1.417,-0.644l3.090,1.029l1.287,0.901l0.642,1.287l-0.770,0.773l1.029,0.901l0.644,1.417l-0.257,1.030l1.158,1.672l-1.287,0.259l-0.645,-0.259l-0.642,0.516l-1.932,0.515l-1.029,0.644l-1.932,0.643l0.387,0.773l0.386,1.157l1.288,0.645l1.544,1.159l-0.901,1.158l-1.030,0.386l0.387,1.802l-0.258,0.386l-0.773,-0.515l-1.287,-0.128l-1.931,0.515l-2.446,-0.128l-0.387,0.772l-1.285,-0.772l-0.903,0.128l-2.832,-0.772l-0.515,0.514l-2.317,0l0.257,-1.931l1.416,-1.802l-3.861,-0.514l-1.287,-0.773l0.129,-1.159l-0.516,-0.515l0.258,-1.930l-0.386,-2.833l1.544,0l0.773,-0.901l0.644,-2.574l-0.515,-0.902l0.515,-0.515l2.317,-0.129l0.385,0.516l1.933,-1.288l-0.645,-1.029l-0.129,-1.544l2.060,0.385l-1.675,0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ghana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z";
}, function($ctx1) {$ctx1.fill(self,"Ghana",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Ghana\x0a\x09^ 'M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GreatBritian",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.829,78.483l2.317,-0.129l2.832,1.673l-1.416,1.803l-2.060,-0.516l-1.673,0l0.515,-1.416l0.515,1.415zM453.84,69.214l3.347,-0.257l-2.961,2.960l2.832,-0.386l2.832,0l-0.643,2.189l-2.446,2.446l2.832,0.256l2.575,3.348l1.801,0.515l1.674,3.089l0.773,1.030l3.347,0.515l-0.387,1.674l-1.416,0.772l1.159,1.416l-2.446,1.417l-3.605,0l-4.633,0.772l-1.159,-0.516l-1.803,1.159l-2.574,-0.257l-1.802,1.030l-1.415,-0.515l3.860,-2.832l2.446,-0.644l-4.247,-0.386l-0.772,-1.030l2.831,-0.901l-1.416,-1.416l0.515,-1.803l3.991,0.258l0.386,-1.545l-1.803,-1.674l-3.346,-0.515l-0.645,-0.772l1.031,-1.158l-0.901,-0.772l-1.416,1.286l-0.258,-2.573l-1.287,-1.417l0.901,-2.704l2.189,-2.187l-2.059,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"GreatBritian",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "GreatBritian\x0a\x09^ 'M444.829,78.483l2.317,-0.129l2.832,1.673l-1.416,1.803l-2.060,-0.516l-1.673,0l0.515,-1.416l0.515,1.415zM453.84,69.214l3.347,-0.257l-2.961,2.960l2.832,-0.386l2.832,0l-0.643,2.189l-2.446,2.446l2.832,0.256l2.575,3.348l1.801,0.515l1.674,3.089l0.773,1.030l3.347,0.515l-0.387,1.674l-1.416,0.772l1.159,1.416l-2.446,1.417l-3.605,0l-4.633,0.772l-1.159,-0.516l-1.803,1.159l-2.574,-0.257l-1.802,1.030l-1.415,-0.515l3.860,-2.832l2.446,-0.644l-4.247,-0.386l-0.772,-1.030l2.831,-0.901l-1.416,-1.416l0.515,-1.803l3.991,0.258l0.386,-1.545l-1.803,-1.674l-3.346,-0.515l-0.645,-0.772l1.031,-1.158l-0.901,-0.772l-1.416,1.286l-0.258,-2.573l-1.287,-1.417l0.901,-2.704l2.189,-2.187l-2.059,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greece",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.099,131.906l-0.387,0.773l-3.861,0.257l0,-0.515l-3.219,-0.515l0.387,-1.159l1.543,0.902l2.060,-0.129l2.059,0.257l-0.127,0.387l-1.545,0.258zM521.808,116.973l1.804,-0.258l1.029,-0.643l1.417,0.128l0.515,-0.513l0.514,-0.130l1.932,0.130l2.187,-0.773l1.930,1.029l2.445,-0.256l0,-1.417l1.289,0.772l-0.771,1.673l-0.645,0.258l-1.674,0l-1.416,-0.258l-3.218,0.644l1.802,1.545l-1.287,0.387l-1.543,0l-1.418,-1.417l-0.514,0.645l0.643,1.672l1.289,1.159l-1.031,0.644l1.545,1.286l1.286,0.774l0.130,1.545l-2.575,-0.773l0.772,1.417l-1.672,0.256l1.028,2.317l-1.800,0.129l-2.189,-1.287l-1.030,-2.059l-0.516,-1.803l-1.030,-1.288l-1.287,-1.545l-0.258,-0.772l1.288,-1.287l0.128,-0.901l0.901,-0.386l0,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Greece",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Greece\x0a\x09^ 'M536.099,131.906l-0.387,0.773l-3.861,0.257l0,-0.515l-3.219,-0.515l0.387,-1.159l1.543,0.902l2.060,-0.129l2.059,0.257l-0.127,0.387l-1.545,0.258zM521.808,116.973l1.804,-0.258l1.029,-0.643l1.417,0.128l0.515,-0.513l0.514,-0.130l1.932,0.130l2.187,-0.773l1.930,1.029l2.445,-0.256l0,-1.417l1.289,0.772l-0.771,1.673l-0.645,0.258l-1.674,0l-1.416,-0.258l-3.218,0.644l1.802,1.545l-1.287,0.387l-1.543,0l-1.418,-1.417l-0.514,0.645l0.643,1.672l1.289,1.159l-1.031,0.644l1.545,1.286l1.286,0.774l0.130,1.545l-2.575,-0.773l0.772,1.417l-1.672,0.256l1.028,2.317l-1.800,0.129l-2.189,-1.287l-1.030,-2.059l-0.516,-1.803l-1.030,-1.288l-1.287,-1.545l-0.258,-0.772l1.288,-1.287l0.128,-0.901l0.901,-0.386l0,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greenland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M339.272,4.333l9.011,-1.544l9.525,0.128l3.348,-1.029l9.526,-0.258l21.497,0.386l16.864,2.060l-4.892,1.029l-10.298,0.129l-14.546,0.258l1.287,0.515l9.654,-0.257l8.110,0.901l5.149,-0.773l2.317,0.901l-2.961,1.545l6.824,-1.030l13.130,-1.030l7.981,0.515l1.545,1.159l-10.942,1.931l-1.546,0.644l-8.625,0.514l6.180,0.129l-3.089,1.931l-2.189,1.802l0.129,2.961l3.218,1.674l-4.249,0.128l-4.376,0.902l4.893,1.415l0.643,2.318l-2.832,0.257l3.476,2.317l-5.923,0.129l3.091,1.159l-0.902,0.900l-3.733,0.387l-3.862,0l3.476,1.931l0,1.158l-5.407,-1.158l-1.287,0.773l3.604,0.644l3.476,1.673l1.030,2.188l-4.763,0.515l-2.060,-1.031l-3.347,-1.544l0.901,1.803l-3.090,1.416l7.081,0.129l3.733,0.128l-7.208,2.316l-7.338,2.189l-7.852,0.902l-2.962,0l-2.831,1.030l-3.734,2.832l-5.793,1.931l-1.930,0.128l-3.604,0.644l-3.862,0.644l-2.317,1.673l0,1.802l-1.288,1.802l-4.505,2.189l1.158,2.060l-1.287,2.188l-1.287,2.703l-3.863,0.129l-3.989,-2.188l-5.278,0l-2.704,-1.545l-1.802,-2.574l-4.635,-3.347l-1.415,-1.803l-0.258,-2.316l-3.732,-2.576l0.900,-1.930l-1.802,-1.031l2.703,-3.088l3.991,-1.031l1.159,-1.158l0.515,-2.059l-3.476,-0.259l-6.179,-1.416l2.189,0l6.049,0l-4.634,-1.801l-2.446,-0.902l-4.892,-0.258l2.960,-2.445l-1.544,-1.030l-2.188,-1.931l-3.218,-2.832l-3.475,-1.030l0.128,-1.159l-7.338,-1.545l-5.664,-0.257l-7.208,0.129l-6.565,0.257l-3.090,-0.901l-4.763,-1.673l7.081,-0.901l5.405,-0.130l-11.457,-0.643l-6.050,-1.158l0.387,-1.030l10.169,-1.288l9.784,-1.287l1.030,-1.030l-7.210,-0.901l2.318,-1.029l9.397,-1.931l3.862,-0.258l-1.159,-1.287l6.437,-0.644l8.238,-0.387l8.368,-0.128l2.832,0.901l7.209,-1.545l6.436,1.030l3.347,1.159l6.050,0l-6.436,-1.545l-0.386,1.159z";
}, function($ctx1) {$ctx1.fill(self,"Greenland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Greenland\x0a\x09^ 'M339.272,4.333l9.011,-1.544l9.525,0.128l3.348,-1.029l9.526,-0.258l21.497,0.386l16.864,2.060l-4.892,1.029l-10.298,0.129l-14.546,0.258l1.287,0.515l9.654,-0.257l8.110,0.901l5.149,-0.773l2.317,0.901l-2.961,1.545l6.824,-1.030l13.130,-1.030l7.981,0.515l1.545,1.159l-10.942,1.931l-1.546,0.644l-8.625,0.514l6.180,0.129l-3.089,1.931l-2.189,1.802l0.129,2.961l3.218,1.674l-4.249,0.128l-4.376,0.902l4.893,1.415l0.643,2.318l-2.832,0.257l3.476,2.317l-5.923,0.129l3.091,1.159l-0.902,0.900l-3.733,0.387l-3.862,0l3.476,1.931l0,1.158l-5.407,-1.158l-1.287,0.773l3.604,0.644l3.476,1.673l1.030,2.188l-4.763,0.515l-2.060,-1.031l-3.347,-1.544l0.901,1.803l-3.090,1.416l7.081,0.129l3.733,0.128l-7.208,2.316l-7.338,2.189l-7.852,0.902l-2.962,0l-2.831,1.030l-3.734,2.832l-5.793,1.931l-1.930,0.128l-3.604,0.644l-3.862,0.644l-2.317,1.673l0,1.802l-1.288,1.802l-4.505,2.189l1.158,2.060l-1.287,2.188l-1.287,2.703l-3.863,0.129l-3.989,-2.188l-5.278,0l-2.704,-1.545l-1.802,-2.574l-4.635,-3.347l-1.415,-1.803l-0.258,-2.316l-3.732,-2.576l0.900,-1.930l-1.802,-1.031l2.703,-3.088l3.991,-1.031l1.159,-1.158l0.515,-2.059l-3.476,-0.259l-6.179,-1.416l2.189,0l6.049,0l-4.634,-1.801l-2.446,-0.902l-4.892,-0.258l2.960,-2.445l-1.544,-1.030l-2.188,-1.931l-3.218,-2.832l-3.475,-1.030l0.128,-1.159l-7.338,-1.545l-5.664,-0.257l-7.208,0.129l-6.565,0.257l-3.090,-0.901l-4.763,-1.673l7.081,-0.901l5.405,-0.130l-11.457,-0.643l-6.050,-1.158l0.387,-1.030l10.169,-1.288l9.784,-1.287l1.030,-1.030l-7.210,-0.901l2.318,-1.029l9.397,-1.931l3.862,-0.258l-1.159,-1.287l6.437,-0.644l8.238,-0.387l8.368,-0.128l2.832,0.901l7.209,-1.545l6.436,1.030l3.347,1.159l6.050,0l-6.436,-1.545l-0.386,1.159z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guatemala",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M222.516,189.963l-1.417,-0.514l-1.673,0l-1.159,-0.515l-1.544,-1.159l0.128,-0.773l0.257,-0.643l-0.385,-0.514l1.416,-2.188l3.347,0l0.128,-0.903l-0.385,-0.128l-0.387,-0.644l-1.030,-0.643l-0.901,-0.901l1.158,0l0,-1.416l2.575,0l2.446,0l0,2.060l-0.257,3.089l0.772,0l0.901,0.515l0.258,-0.386l0.771,0.257l-1.158,1.030l-1.287,0.772l-0.257,0.516l0.257,0.514l-0.515,0.773l-0.644,0.129l0.129,0.258l-0.515,0.385l-0.901,0.644l0.128,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Guatemala",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Guatemala\x0a\x09^ 'M222.516,189.963l-1.417,-0.514l-1.673,0l-1.159,-0.515l-1.544,-1.159l0.128,-0.773l0.257,-0.643l-0.385,-0.514l1.416,-2.188l3.347,0l0.128,-0.903l-0.385,-0.128l-0.387,-0.644l-1.030,-0.643l-0.901,-0.901l1.158,0l0,-1.416l2.575,0l2.446,0l0,2.060l-0.257,3.089l0.772,0l0.901,0.515l0.258,-0.386l0.771,0.257l-1.158,1.030l-1.287,0.772l-0.257,0.516l0.257,0.514l-0.515,0.773l-0.644,0.129l0.129,0.258l-0.515,0.385l-0.901,0.644l0.128,-0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guinea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z";
}, function($ctx1) {$ctx1.fill(self,"Guinea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Guinea\x0a\x09^ 'M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GuineaBissau",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"GuineaBissau",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "GuineaBissau\x0a\x09^ 'M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guyana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M304.257,204.383l1.804,1.028l1.672,1.803l0,1.415l1.030,0l1.417,1.289l1.157,1.028l-0.514,2.319l-1.545,0.772l0.129,0.643l-0.514,1.416l1.157,1.931l0.902,0l0.385,1.545l1.545,2.317l-0.643,0.130l-1.416,-0.259l-0.901,0.644l-1.288,0.515l-0.772,0.128l-0.386,0.515l-1.287,-0.128l-1.674,-1.288l-0.128,-1.287l-0.773,-1.287l0.515,-2.316l0.772,-0.902l-0.644,-1.288l-0.900,-0.386l0.257,-1.159l-0.644,-0.643l-1.287,0.129l-1.930,-2.061l0.772,-0.772l0,-1.287l1.673,-0.385l0.644,-0.516l-0.902,-1.029l0.130,-0.902l-2.187,1.672z";
}, function($ctx1) {$ctx1.fill(self,"Guyana",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Guyana\x0a\x09^ 'M304.257,204.383l1.804,1.028l1.672,1.803l0,1.415l1.030,0l1.417,1.289l1.157,1.028l-0.514,2.319l-1.545,0.772l0.129,0.643l-0.514,1.416l1.157,1.931l0.902,0l0.385,1.545l1.545,2.317l-0.643,0.130l-1.416,-0.259l-0.901,0.644l-1.288,0.515l-0.772,0.128l-0.386,0.515l-1.287,-0.128l-1.674,-1.288l-0.128,-1.287l-0.773,-1.287l0.515,-2.316l0.772,-0.902l-0.644,-1.288l-0.900,-0.386l0.257,-1.159l-0.644,-0.643l-1.287,0.129l-1.930,-2.061l0.772,-0.772l0,-1.287l1.673,-0.385l0.644,-0.516l-0.902,-1.029l0.130,-0.902l-2.187,1.672z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Haiti",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M268.085,173.357l1.673,0.129l2.317,0.387l0.259,1.416l-0.259,1.029l-0.643,0.515l0.643,0.772l0,0.773l-1.802,-0.515l-1.287,0.257l-1.673,-0.257l-1.159,0.515l-1.545,-0.773l0.258,-0.900l2.446,0.385l2.060,0.258l1.029,-0.643l-1.288,-1.159l0,-1.030l-1.673,-0.387l-0.644,0.772z";
}, function($ctx1) {$ctx1.fill(self,"Haiti",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Haiti\x0a\x09^ 'M268.085,173.357l1.673,0.129l2.317,0.387l0.259,1.416l-0.259,1.029l-0.643,0.515l0.643,0.772l0,0.773l-1.802,-0.515l-1.287,0.257l-1.673,-0.257l-1.159,0.515l-1.545,-0.773l0.258,-0.900l2.446,0.385l2.060,0.258l1.029,-0.643l-1.288,-1.159l0,-1.030l-1.673,-0.387l-0.644,0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Honduras",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M229.981,192.023l-0.385,-0.900l-0.902,-0.258l0.258,-1.031l-0.386,-0.256l-0.515,-0.258l-1.287,0.386l0,-0.386l-0.902,-0.386l-0.515,-0.643l-0.772,-0.129l0.515,-0.773l-0.257,-0.514l0.257,-0.516l1.287,-0.772l1.158,-1.030l0.258,0.129l0.644,-0.386l0.772,-0.129l0.257,0.258l0.386,-0.129l1.288,0.257l1.288,-0.128l0.772,-0.258l0.386,-0.258l0.773,0.129l0.643,0.129l0.772,0l0.515,-0.258l1.287,0.387l0.387,0l0.772,0.515l0.773,0.643l1.030,0.387l0.643,0.772l-0.901,-0.128l-0.386,0.386l-0.902,0.386l-0.643,0l-0.643,0.385l-0.516,-0.127l-0.514,-0.517l-0.258,0.130l-0.258,0.643l-0.257,0l-0.129,0.516l-0.900,0.771l-0.515,0.258l-0.258,0.386l-0.773,-0.515l-0.643,0.643l-0.515,0l-0.643,0.129l0,1.288l-0.387,0l-0.257,0.644l0.902,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Honduras",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Honduras\x0a\x09^ 'M229.981,192.023l-0.385,-0.900l-0.902,-0.258l0.258,-1.031l-0.386,-0.256l-0.515,-0.258l-1.287,0.386l0,-0.386l-0.902,-0.386l-0.515,-0.643l-0.772,-0.129l0.515,-0.773l-0.257,-0.514l0.257,-0.516l1.287,-0.772l1.158,-1.030l0.258,0.129l0.644,-0.386l0.772,-0.129l0.257,0.258l0.386,-0.129l1.288,0.257l1.288,-0.128l0.772,-0.258l0.386,-0.258l0.773,0.129l0.643,0.129l0.772,0l0.515,-0.258l1.287,0.387l0.387,0l0.772,0.515l0.773,0.643l1.030,0.387l0.643,0.772l-0.901,-0.128l-0.386,0.386l-0.902,0.386l-0.643,0l-0.643,0.385l-0.516,-0.127l-0.514,-0.517l-0.258,0.130l-0.258,0.643l-0.257,0l-0.129,0.516l-0.900,0.771l-0.515,0.258l-0.258,0.386l-0.773,-0.515l-0.643,0.643l-0.515,0l-0.643,0.129l0,1.288l-0.387,0l-0.257,0.644l0.902,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Hungary",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M508.937,100.753l0.900,-1.674l-0.643,-0.643l1.545,0l0.257,-1.158l1.288,0.772l1.028,0.257l2.318,-0.257l0.129,-0.644l1.158,0l1.287,-0.515l0.258,0.258l1.287,-0.387l0.645,-0.643l0.900,-0.129l2.832,0.772l0.645,-0.257l1.415,0.773l0.256,0.643l-1.671,0.643l-1.290,1.803l-1.673,1.802l-2.059,0.515l-1.672,-0.129l-2.060,0.772l-1.032,0.387l-2.316,-0.515l-1.930,-1.159l-0.902,-0.386l-0.515,-0.901l0.385,0z";
}, function($ctx1) {$ctx1.fill(self,"Hungary",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Hungary\x0a\x09^ 'M508.937,100.753l0.900,-1.674l-0.643,-0.643l1.545,0l0.257,-1.158l1.288,0.772l1.028,0.257l2.318,-0.257l0.129,-0.644l1.158,0l1.287,-0.515l0.258,0.258l1.287,-0.387l0.645,-0.643l0.900,-0.129l2.832,0.772l0.645,-0.257l1.415,0.773l0.256,0.643l-1.671,0.643l-1.290,1.803l-1.673,1.802l-2.059,0.515l-1.672,-0.129l-2.060,0.772l-1.032,0.387l-2.316,-0.515l-1.930,-1.159l-0.902,-0.386l-0.515,-0.901l0.385,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iceland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M426.163,47.974l-0.643,1.672l3.089,1.932l-3.604,2.059l-7.723,1.802l-2.318,0.515l-3.475,-0.385l-7.595,-0.902l2.703,-1.158l-5.922,-1.287l4.763,-0.516l-0.128,-0.900l-5.664,-0.644l1.930,-1.674l3.991,-0.386l4.248,1.803l4.119,-1.417l3.348,0.645l4.376,-1.417l-4.505,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iceland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Iceland\x0a\x09^ 'M426.163,47.974l-0.643,1.672l3.089,1.932l-3.604,2.059l-7.723,1.802l-2.318,0.515l-3.475,-0.385l-7.595,-0.902l2.703,-1.158l-5.922,-1.287l4.763,-0.516l-0.128,-0.900l-5.664,-0.644l1.930,-1.674l3.991,-0.386l4.248,1.803l4.119,-1.417l3.348,0.645l4.376,-1.417l-4.505,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "India",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M674.866,131.391l2.961,3.089l-0.256,2.189l1.030,1.416l-0.129,1.416l-1.932,-0.385l0.773,2.960l2.704,1.674l3.732,1.930l-1.672,1.160l-1.160,2.573l2.703,1.031l2.447,1.287l3.604,1.545l3.603,0.386l1.674,1.287l2.059,0.257l3.219,0.644l2.189,0l0.385,-1.158l-0.385,-1.674l0.258,-1.159l1.543,-0.514l0.258,2.059l0.129,0.516l2.447,1.029l1.672,-0.386l2.189,0.129l2.188,0l0.257,-1.674l-1.158,-0.901l2.188,-0.258l2.445,-2.059l3.092,-1.674l2.314,0.643l1.934,-1.158l1.285,1.674l-0.900,1.159l2.832,0.386l0.258,1.029l-1.030,0.515l0.256,1.674l-1.930,-0.515l-3.474,1.802l0.127,1.545l-1.545,2.317l-0.127,1.287l-1.160,2.189l-2.188,-0.515l0,2.704l-0.642,0.900l0.255,1.159l-1.287,0.643l-1.416,-4.247l-0.771,0l-0.387,1.802l-1.545,-1.416l0.901,-1.545l1.158,-0.129l1.289,-2.317l-1.545,-0.515l-2.574,0.128l-2.574,-0.386l-0.260,-1.931l-1.285,-0.128l-2.061,-1.159l-1.031,1.803l2.060,1.415l-1.802,1.030l-0.514,1.031l1.672,0.643l-0.514,1.674l0.901,2.059l0.515,2.188l-0.387,1.030l-1.931,-0.128l-3.217,0.643l0.129,1.931l-1.416,1.674l-3.861,1.802l-3.092,3.218l-2.059,1.675l-2.574,1.673l-0.129,1.287l-1.287,0.644l-2.447,1.029l-1.287,0.129l-0.772,2.059l0.645,3.476l0.127,2.189l-1.159,2.574l0,4.635l-1.414,0.128l-1.289,2.060l0.903,0.901l-2.448,0.773l-0.900,1.802l-1.158,0.772l-2.576,-2.574l-1.159,-3.734l-1.027,-2.703l-1.031,-1.287l-1.416,-2.575l-0.645,-3.347l-0.513,-1.674l-2.448,-3.733l-1.029,-5.278l-0.900,-3.346l0,-3.347l-0.516,-2.446l-3.861,1.544l-1.931,-0.257l-3.476,-3.347l1.287,-0.901l-0.772,-1.159l-3.218,-2.188l1.801,-1.802l5.922,0l-0.514,-2.317l-1.545,-1.417l-0.258,-2.059l-1.802,-1.159l2.961,-2.832l3.218,0.129l2.704,-2.833l1.802,-2.702l2.575,-2.704l0,-1.931l2.187,-1.545l-2.059,-1.287l-1.031,-1.802l-0.900,-2.447l1.287,-1.157l4.121,0.643l2.961,-0.386l-2.572,2.189z";
}, function($ctx1) {$ctx1.fill(self,"India",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "India\x0a\x09^ 'M674.866,131.391l2.961,3.089l-0.256,2.189l1.030,1.416l-0.129,1.416l-1.932,-0.385l0.773,2.960l2.704,1.674l3.732,1.930l-1.672,1.160l-1.160,2.573l2.703,1.031l2.447,1.287l3.604,1.545l3.603,0.386l1.674,1.287l2.059,0.257l3.219,0.644l2.189,0l0.385,-1.158l-0.385,-1.674l0.258,-1.159l1.543,-0.514l0.258,2.059l0.129,0.516l2.447,1.029l1.672,-0.386l2.189,0.129l2.188,0l0.257,-1.674l-1.158,-0.901l2.188,-0.258l2.445,-2.059l3.092,-1.674l2.314,0.643l1.934,-1.158l1.285,1.674l-0.900,1.159l2.832,0.386l0.258,1.029l-1.030,0.515l0.256,1.674l-1.930,-0.515l-3.474,1.802l0.127,1.545l-1.545,2.317l-0.127,1.287l-1.160,2.189l-2.188,-0.515l0,2.704l-0.642,0.900l0.255,1.159l-1.287,0.643l-1.416,-4.247l-0.771,0l-0.387,1.802l-1.545,-1.416l0.901,-1.545l1.158,-0.129l1.289,-2.317l-1.545,-0.515l-2.574,0.128l-2.574,-0.386l-0.260,-1.931l-1.285,-0.128l-2.061,-1.159l-1.031,1.803l2.060,1.415l-1.802,1.030l-0.514,1.031l1.672,0.643l-0.514,1.674l0.901,2.059l0.515,2.188l-0.387,1.030l-1.931,-0.128l-3.217,0.643l0.129,1.931l-1.416,1.674l-3.861,1.802l-3.092,3.218l-2.059,1.675l-2.574,1.673l-0.129,1.287l-1.287,0.644l-2.447,1.029l-1.287,0.129l-0.772,2.059l0.645,3.476l0.127,2.189l-1.159,2.574l0,4.635l-1.414,0.128l-1.289,2.060l0.903,0.901l-2.448,0.773l-0.900,1.802l-1.158,0.772l-2.576,-2.574l-1.159,-3.734l-1.027,-2.703l-1.031,-1.287l-1.416,-2.575l-0.645,-3.347l-0.513,-1.674l-2.448,-3.733l-1.029,-5.278l-0.900,-3.346l0,-3.347l-0.516,-2.446l-3.861,1.544l-1.931,-0.257l-3.476,-3.347l1.287,-0.901l-0.772,-1.159l-3.218,-2.188l1.801,-1.802l5.922,0l-0.514,-2.317l-1.545,-1.417l-0.258,-2.059l-1.802,-1.159l2.961,-2.832l3.218,0.129l2.704,-2.833l1.802,-2.702l2.575,-2.704l0,-1.931l2.187,-1.545l-2.059,-1.287l-1.031,-1.802l-0.900,-2.447l1.287,-1.157l4.121,0.643l2.961,-0.386l-2.572,2.189z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Indonesia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,0.515l0,0.773l-1.674,2.060l-2.317,0.515l-0.386,-0.257l0.258,-0.902l1.158,-1.674l-2.703,1.030zM826.767,245.576l-0.258,-2.058l0.515,-0.903l0.516,-1.030l0.643,0.901l0,1.286l1.416,-1.804zM845.175,242.742l0,8.755l-2.447,-2.188l-2.702,-0.514l-0.644,0.771l-3.475,0.129l1.156,-2.189l1.676,-0.772l-0.644,-2.962l-1.287,-2.317l-5.280,-2.187l-2.187,-0.256l-3.992,-2.448l-0.899,1.288l-1.031,0.257l-0.516,-1.030l0,-1.157l-2.058,-1.288l2.832,-1.030l1.931,0l-0.259,-0.644l-3.860,0l-1.160,-1.674l-2.314,-0.515l-1.161,-1.287l3.606,-0.643l1.414,-0.902l4.248,1.160l0.516,1.028l0.771,4.248l2.705,1.676l2.317,-2.833l3.090,-1.674l2.316,0l2.318,0.901l2.059,1.030l2.832,0.515l-0.129,-8.752zM761.116,223.434l1.801,1.416l1.803,-0.514l1.672,0.257l1.545,-1.417l1.289,-0.257l2.574,0.772l2.189,-0.515l1.414,-3.862l1.032,-0.901l0.900,-3.089l3.090,0l2.316,0.515l-1.545,2.446l2.059,2.574l-0.514,1.160l3.090,2.574l-3.217,0.257l-0.902,1.802l0.129,2.447l-2.576,1.930l-0.129,2.575l-1.030,4.119l-0.386,-0.901l-3.088,1.158l-1.031,-1.542l-1.930,-0.259l-1.287,-0.773l-3.219,0.901l-1.029,-1.287l-1.801,0.128l-2.189,-0.256l-0.387,-3.606l-1.416,-0.772l-1.287,-2.317l-0.260,-2.317l0.260,-2.574l1.545,-1.674l-0.515,-1.802zM813.765,234.505l2.961,0.772l0.902,2.059l-2.190,-1.029l-2.318,-0.256l-1.545,0.128l-1.801,0l0.643,-1.545l-3.348,0.129zM807.069,237.209l-1.929,-0.516l-0.516,-1.158l2.705,-0.129l0.643,0.901l0.903,-0.902zM809.903,221.117l0.129,1.416l1.674,0.258l0.256,1.158l-0.256,2.317l-1.289,-0.258l-0.514,1.674l1.159,1.417l-0.774,0.256l-1.029,-1.673l-0.772,-3.476l0.514,-2.060l-0.902,1.029zM796.386,224.593l3.090,-0.130l2.703,-1.930l0.386,0.643l-2.060,2.704l-2.059,0.515l-2.574,-0.644l-4.506,0.257l-2.316,0.387l-0.387,1.931l2.316,2.445l1.545,-1.158l5.022,-1.031l-0.258,1.289l-1.158,-0.387l-1.160,1.545l-2.446,1.030l2.575,3.476l-0.514,0.903l2.445,3.216l0,1.674l-1.416,0.771l-1.029,-0.901l1.287,-2.186l-2.703,1.028l-0.645,-0.772l0.385,-1.031l-1.930,-1.544l0.131,-2.574l-1.804,0.773l0.257,3.088l0.129,3.862l-1.800,0.387l-1.161,-0.774l0.774,-2.443l-0.389,-2.574l-1.156,-0.131l-0.772,-1.802l1.159,-1.802l0.384,-2.060l1.288,-4.120l0.515,-1.029l2.317,-2.060l2.189,0.772l-3.346,-0.387zM789.306,254.588l-3.604,-1.804l2.574,-0.643l1.416,0.902l0.903,0.771l-0.131,0.774l1.158,0zM792.138,249.953l1.802,-0.129l2.317,-1.029l-0.385,1.544l-3.992,0.643l-3.604,-0.257l0,-1.030l2.188,-0.515l-1.674,-0.773zM783.771,249.566l1.673,-0.257l0.645,1.158l-3.090,0.515l-1.803,0.387l-1.545,0l1.030,-1.674l1.416,0l0.773,-0.900l-0.901,-0.771zM757.511,244.287l0.386,0.902l5.149,0.258l0.514,-1.031l5.021,1.288l1.029,1.674l3.991,0.515l3.349,1.673l-3.092,1.032l-2.961,-1.160l-2.445,0.128l-2.832,-0.257l-2.445,-0.514l-3.219,-0.902l-1.932,-0.387l-1.158,0.387l-4.890,-1.159l-0.387,-1.158l-2.574,-0.129l1.929,-2.574l3.219,0.127l2.190,1.031l-1.158,-0.256zM746.438,229.871l0.387,1.932l0.903,1.415l2.058,0.257l1.289,1.802l-0.644,3.347l-0.129,4.118l-2.961,0l-2.317,-2.187l-3.476,-2.188l-1.158,-1.674l-2.059,-2.188l-1.289,-2.060l-2.061,-3.733l-2.314,-2.189l-0.775,-2.317l-1.028,-2.187l-2.447,-1.674l-1.416,-2.318l-2.059,-1.416l-2.705,-3.090l-0.256,-1.287l1.674,0.129l4.248,0.515l2.317,2.575l2.058,1.803l1.547,1.157l2.572,2.962l2.706,0l2.187,1.801l1.674,2.318l2.060,1.158l-1.158,2.189l1.545,1.030l-1.027,0z";
}, function($ctx1) {$ctx1.fill(self,"Indonesia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Indonesia\x0a\x09^ 'M801.921,250.982l0.258,0.515l0,0.773l-1.674,2.060l-2.317,0.515l-0.386,-0.257l0.258,-0.902l1.158,-1.674l-2.703,1.030zM826.767,245.576l-0.258,-2.058l0.515,-0.903l0.516,-1.030l0.643,0.901l0,1.286l1.416,-1.804zM845.175,242.742l0,8.755l-2.447,-2.188l-2.702,-0.514l-0.644,0.771l-3.475,0.129l1.156,-2.189l1.676,-0.772l-0.644,-2.962l-1.287,-2.317l-5.280,-2.187l-2.187,-0.256l-3.992,-2.448l-0.899,1.288l-1.031,0.257l-0.516,-1.030l0,-1.157l-2.058,-1.288l2.832,-1.030l1.931,0l-0.259,-0.644l-3.860,0l-1.160,-1.674l-2.314,-0.515l-1.161,-1.287l3.606,-0.643l1.414,-0.902l4.248,1.160l0.516,1.028l0.771,4.248l2.705,1.676l2.317,-2.833l3.090,-1.674l2.316,0l2.318,0.901l2.059,1.030l2.832,0.515l-0.129,-8.752zM761.116,223.434l1.801,1.416l1.803,-0.514l1.672,0.257l1.545,-1.417l1.289,-0.257l2.574,0.772l2.189,-0.515l1.414,-3.862l1.032,-0.901l0.900,-3.089l3.090,0l2.316,0.515l-1.545,2.446l2.059,2.574l-0.514,1.160l3.090,2.574l-3.217,0.257l-0.902,1.802l0.129,2.447l-2.576,1.930l-0.129,2.575l-1.030,4.119l-0.386,-0.901l-3.088,1.158l-1.031,-1.542l-1.930,-0.259l-1.287,-0.773l-3.219,0.901l-1.029,-1.287l-1.801,0.128l-2.189,-0.256l-0.387,-3.606l-1.416,-0.772l-1.287,-2.317l-0.260,-2.317l0.260,-2.574l1.545,-1.674l-0.515,-1.802zM813.765,234.505l2.961,0.772l0.902,2.059l-2.190,-1.029l-2.318,-0.256l-1.545,0.128l-1.801,0l0.643,-1.545l-3.348,0.129zM807.069,237.209l-1.929,-0.516l-0.516,-1.158l2.705,-0.129l0.643,0.901l0.903,-0.902zM809.903,221.117l0.129,1.416l1.674,0.258l0.256,1.158l-0.256,2.317l-1.289,-0.258l-0.514,1.674l1.159,1.417l-0.774,0.256l-1.029,-1.673l-0.772,-3.476l0.514,-2.060l-0.902,1.029zM796.386,224.593l3.090,-0.130l2.703,-1.930l0.386,0.643l-2.060,2.704l-2.059,0.515l-2.574,-0.644l-4.506,0.257l-2.316,0.387l-0.387,1.931l2.316,2.445l1.545,-1.158l5.022,-1.031l-0.258,1.289l-1.158,-0.387l-1.160,1.545l-2.446,1.030l2.575,3.476l-0.514,0.903l2.445,3.216l0,1.674l-1.416,0.771l-1.029,-0.901l1.287,-2.186l-2.703,1.028l-0.645,-0.772l0.385,-1.031l-1.930,-1.544l0.131,-2.574l-1.804,0.773l0.257,3.088l0.129,3.862l-1.800,0.387l-1.161,-0.774l0.774,-2.443l-0.389,-2.574l-1.156,-0.131l-0.772,-1.802l1.159,-1.802l0.384,-2.060l1.288,-4.120l0.515,-1.029l2.317,-2.060l2.189,0.772l-3.346,-0.387zM789.306,254.588l-3.604,-1.804l2.574,-0.643l1.416,0.902l0.903,0.771l-0.131,0.774l1.158,0zM792.138,249.953l1.802,-0.129l2.317,-1.029l-0.385,1.544l-3.992,0.643l-3.604,-0.257l0,-1.030l2.188,-0.515l-1.674,-0.773zM783.771,249.566l1.673,-0.257l0.645,1.158l-3.090,0.515l-1.803,0.387l-1.545,0l1.030,-1.674l1.416,0l0.773,-0.900l-0.901,-0.771zM757.511,244.287l0.386,0.902l5.149,0.258l0.514,-1.031l5.021,1.288l1.029,1.674l3.991,0.515l3.349,1.673l-3.092,1.032l-2.961,-1.160l-2.445,0.128l-2.832,-0.257l-2.445,-0.514l-3.219,-0.902l-1.932,-0.387l-1.158,0.387l-4.890,-1.159l-0.387,-1.158l-2.574,-0.129l1.929,-2.574l3.219,0.127l2.190,1.031l-1.158,-0.256zM746.438,229.871l0.387,1.932l0.903,1.415l2.058,0.257l1.289,1.802l-0.644,3.347l-0.129,4.118l-2.961,0l-2.317,-2.187l-3.476,-2.188l-1.158,-1.674l-2.059,-2.188l-1.289,-2.060l-2.061,-3.733l-2.314,-2.189l-0.775,-2.317l-1.028,-2.187l-2.447,-1.674l-1.416,-2.318l-2.059,-1.416l-2.705,-3.090l-0.256,-1.287l1.674,0.129l4.248,0.515l2.317,2.575l2.058,1.803l1.547,1.157l2.572,2.962l2.706,0l2.187,1.801l1.674,2.318l2.060,1.158l-1.158,2.189l1.545,1.030l-1.027,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iran",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M610.502,126.756l2.317,-0.513l1.932,-1.546l1.803,0.129l1.157,-0.515l1.932,0.257l2.961,1.288l2.188,0.387l3.088,2.317l2.060,0.128l0.129,2.188l-1.029,3.477l-0.773,1.930l1.158,0.386l-1.158,1.416l0.902,2.188l0.256,1.674l2.060,0.515l0.129,1.673l-2.445,2.447l1.414,1.415l1.031,1.674l2.574,1.159l0.128,2.446l1.288,0.386l0.259,1.287l-3.992,1.288l-1.030,3.218l-5.020,-0.902l-2.961,-0.515l-2.961,-0.386l-1.160,-3.346l-1.285,-0.515l-2.058,0.515l-2.706,1.287l-3.345,-0.901l-2.705,-2.060l-2.575,-0.773l-1.800,-2.446l-2.061,-3.604l-1.416,0.387l-1.674,-0.902l-1.029,1.030l-1.545,-1.416l0,-1.416l-0.901,0l0.514,-1.931l-1.415,-2.060l-3.347,-1.416l-1.802,-2.575l0.643,-2.187l1.289,-0.902l-0.130,-1.545l-1.802,-0.772l-1.803,-3.476l-0.128,0l-1.288,-1.931l0.516,-0.901l-0.773,-3.089l1.802,-0.772l0.387,1.028l1.415,1.288l1.804,0.386l1.029,-0.129l3.089,-1.930l1.030,-0.258l0.773,0.773l-0.902,1.415l1.674,1.417l0.643,-0.129l0.901,1.931l2.575,0.516l1.803,1.415l3.862,0.385l4.247,-0.643l-0.257,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Iran",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Iran\x0a\x09^ 'M610.502,126.756l2.317,-0.513l1.932,-1.546l1.803,0.129l1.157,-0.515l1.932,0.257l2.961,1.288l2.188,0.387l3.088,2.317l2.060,0.128l0.129,2.188l-1.029,3.477l-0.773,1.930l1.158,0.386l-1.158,1.416l0.902,2.188l0.256,1.674l2.060,0.515l0.129,1.673l-2.445,2.447l1.414,1.415l1.031,1.674l2.574,1.159l0.128,2.446l1.288,0.386l0.259,1.287l-3.992,1.288l-1.030,3.218l-5.020,-0.902l-2.961,-0.515l-2.961,-0.386l-1.160,-3.346l-1.285,-0.515l-2.058,0.515l-2.706,1.287l-3.345,-0.901l-2.705,-2.060l-2.575,-0.773l-1.800,-2.446l-2.061,-3.604l-1.416,0.387l-1.674,-0.902l-1.029,1.030l-1.545,-1.416l0,-1.416l-0.901,0l0.514,-1.931l-1.415,-2.060l-3.347,-1.416l-1.802,-2.575l0.643,-2.187l1.289,-0.902l-0.130,-1.545l-1.802,-0.772l-1.803,-3.476l-0.128,0l-1.288,-1.931l0.516,-0.901l-0.773,-3.089l1.802,-0.772l0.387,1.028l1.415,1.288l1.804,0.386l1.029,-0.129l3.089,-1.930l1.030,-0.258l0.773,0.773l-0.902,1.415l1.674,1.417l0.643,-0.129l0.901,1.931l2.575,0.516l1.803,1.415l3.862,0.385l4.247,-0.643l-0.257,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iraq",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M585.658,126.628l0.128,0l1.803,3.476l1.802,0.772l0.130,1.545l-1.289,0.902l-0.643,2.187l1.802,2.575l3.347,1.416l1.415,2.060l-0.514,1.931l0.901,0l0,1.416l1.545,1.416l-1.674,-0.128l-1.803,-0.258l-1.930,2.703l-5.020,-0.258l-7.596,-5.406l-3.990,-1.931l-3.218,-0.773l-1.158,-3.218l6.051,-2.832l1.029,-3.218l-0.258,-1.931l1.417,-0.773l1.416,-1.673l1.158,-0.385l3.091,0.385l0.899,0.643l1.287,-0.385l0.128,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iraq",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Iraq\x0a\x09^ 'M585.658,126.628l0.128,0l1.803,3.476l1.802,0.772l0.130,1.545l-1.289,0.902l-0.643,2.187l1.802,2.575l3.347,1.416l1.415,2.060l-0.514,1.931l0.901,0l0,1.416l1.545,1.416l-1.674,-0.128l-1.803,-0.258l-1.930,2.703l-5.020,-0.258l-7.596,-5.406l-3.990,-1.931l-3.218,-0.773l-1.158,-3.218l6.051,-2.832l1.029,-3.218l-0.258,-1.931l1.417,-0.773l1.416,-1.673l1.158,-0.385l3.091,0.385l0.899,0.643l1.287,-0.385l0.128,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ireland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M448.562,81.83l0.387,1.931l-2.060,2.445l-4.764,1.544l-3.732,-0.385l2.188,-2.832l-1.415,-2.703l3.604,-2.060l2.059,-1.287l0.515,1.415l-0.515,1.416l1.673,0l-2.060,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Ireland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Ireland\x0a\x09^ 'M448.562,81.83l0.387,1.931l-2.060,2.445l-4.764,1.544l-3.732,-0.385l2.188,-2.832l-1.415,-2.703l3.604,-2.060l2.059,-1.287l0.515,1.415l-0.515,1.416l1.673,0l-2.060,-0.516z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Israel",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.458,138.857l-0.516,0.902l-0.900,-0.387l-0.645,1.803l0.774,0.258l-0.774,0.385l-0.128,0.644l1.287,-0.257l0.130,1.029l-1.417,4.249l-1.674,-4.635l0.773,-0.901l-0.258,-0.129l0.772,-1.287l0.515,-1.931l0.385,-0.773l0.130,0l0.900,0l0.259,-0.515l0.643,0l0,1.160l0.256,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Israel",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Israel\x0a\x09^ 'M561.458,138.857l-0.516,0.902l-0.900,-0.387l-0.645,1.803l0.774,0.258l-0.774,0.385l-0.128,0.644l1.287,-0.257l0.130,1.029l-1.417,4.249l-1.674,-4.635l0.773,-0.901l-0.258,-0.129l0.772,-1.287l0.515,-1.931l0.385,-0.773l0.130,0l0.900,0l0.259,-0.515l0.643,0l0,1.160l0.256,-0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Italy",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M493.361,100.624l1.672,0.386l0.258,-0.514l2.703,-0.386l0.644,0.900l3.734,0.644l-0.259,1.417l0.646,1.029l-2.063,-0.386l-2.315,1.030l0.257,1.287l-0.387,0.772l0.900,1.417l2.577,1.287l1.287,2.317l2.961,2.189l2.187,-0.130l0.645,0.644l-0.773,0.515l2.445,1.030l1.933,0.772l2.315,1.416l0.257,0.516l-0.513,0.900l-1.417,-1.157l-2.316,-0.516l-1.159,1.803l1.931,0.901l-0.387,1.416l-1.030,0.257l-1.544,2.317l-1.029,0.129l0,-0.772l0.514,-1.417l0.644,-0.643l-1.158,-1.545l-0.772,-1.417l-1.160,-0.256l-0.772,-1.159l-1.673,-0.515l-1.159,-1.030l-2.060,-0.257l-2.061,-1.159l-2.444,-1.802l-1.933,-1.545l-0.772,-2.703l-1.286,-0.258l-2.189,-0.901l-1.288,0.386l-1.545,1.287l-1.157,0.130l0.258,-1.160l-1.418,-0.386l-0.642,-2.058l0.901,-0.774l-0.772,-1.029l0.128,-0.772l1.160,0.643l1.287,-0.128l1.543,-1.031l0.387,0.516l1.288,-0.129l0.643,-1.030l1.932,0.257l1.158,-0.386l-0.258,1.159zM504.944,124.183l2.061,-0.258l-0.901,2.188l0.387,0.773l-0.644,1.415l-2.061,-1.030l-1.286,-0.256l-3.733,-1.416l0.384,-1.288l3.091,0.257l-2.702,0.385zM488.726,116.844l1.287,-0.901l1.675,1.931l-0.387,3.605l-1.288,-0.258l-1.029,0.902l-1.032,-0.644l-0.128,-3.219l-0.642,-1.545l-1.544,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Italy",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Italy\x0a\x09^ 'M493.361,100.624l1.672,0.386l0.258,-0.514l2.703,-0.386l0.644,0.900l3.734,0.644l-0.259,1.417l0.646,1.029l-2.063,-0.386l-2.315,1.030l0.257,1.287l-0.387,0.772l0.900,1.417l2.577,1.287l1.287,2.317l2.961,2.189l2.187,-0.130l0.645,0.644l-0.773,0.515l2.445,1.030l1.933,0.772l2.315,1.416l0.257,0.516l-0.513,0.900l-1.417,-1.157l-2.316,-0.516l-1.159,1.803l1.931,0.901l-0.387,1.416l-1.030,0.257l-1.544,2.317l-1.029,0.129l0,-0.772l0.514,-1.417l0.644,-0.643l-1.158,-1.545l-0.772,-1.417l-1.160,-0.256l-0.772,-1.159l-1.673,-0.515l-1.159,-1.030l-2.060,-0.257l-2.061,-1.159l-2.444,-1.802l-1.933,-1.545l-0.772,-2.703l-1.286,-0.258l-2.189,-0.901l-1.288,0.386l-1.545,1.287l-1.157,0.130l0.258,-1.160l-1.418,-0.386l-0.642,-2.058l0.901,-0.774l-0.772,-1.029l0.128,-0.772l1.160,0.643l1.287,-0.128l1.543,-1.031l0.387,0.516l1.288,-0.129l0.643,-1.030l1.932,0.257l1.158,-0.386l-0.258,1.159zM504.944,124.183l2.061,-0.258l-0.901,2.188l0.387,0.773l-0.644,1.415l-2.061,-1.030l-1.286,-0.256l-3.733,-1.416l0.384,-1.288l3.091,0.257l-2.702,0.385zM488.726,116.844l1.287,-0.901l1.675,1.931l-0.387,3.605l-1.288,-0.258l-1.029,0.902l-1.032,-0.644l-0.128,-3.219l-0.642,-1.545l-1.544,-0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "IvoryCoast",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"IvoryCoast",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "IvoryCoast\x0a\x09^ 'M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jamacia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M256.242,177.22l1.802,0.128l1.416,0.644l0.515,0.772l-1.931,0.129l-0.772,0.386l-1.544,-0.386l-1.545,-1.030l0.385,-0.643l1.030,-0.130l-0.644,-0.130z";
}, function($ctx1) {$ctx1.fill(self,"Jamacia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Jamacia\x0a\x09^ 'M256.242,177.22l1.802,0.128l1.416,0.644l0.515,0.772l-1.931,0.129l-0.772,0.386l-1.544,-0.386l-1.545,-1.030l0.385,-0.643l1.030,-0.130l-0.644,-0.130z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Japan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M847.491,121.479l-2.574,2.704l0.129,2.703l-1.031,2.188l0.386,1.287l-1.287,1.931l-3.476,1.288l-4.762,0.128l-3.861,3.090l-1.801,-1.030l-0.129,-1.932l-4.635,0.517l-3.219,1.287l-3.089,0l2.703,2.059l-1.803,4.506l-1.801,1.159l-1.287,-1.031l0.643,-2.445l-1.672,-0.772l-1.031,-1.804l2.445,-0.900l1.416,-1.674l2.705,-1.415l2.059,-1.803l5.277,-0.773l2.961,0.516l2.832,-4.764l1.803,1.288l3.861,-2.704l1.545,-1.029l1.674,-3.347l-0.387,-2.961l1.158,-1.803l2.832,-0.386l1.416,3.734l0,-2.188zM854.829,108.606l1.930,-1.159l0.515,2.961l-3.990,0.772l-2.316,2.703l-4.250,-1.931l-1.414,2.962l-3.090,0.128l-0.387,-2.703l1.416,-2.060l2.832,-0.128l0.774,-3.734l0.771,-2.188l3.219,2.832l2.060,0.901l-1.930,-0.644zM821.874,136.798l1.416,-1.545l1.545,0.257l1.160,-1.157l1.930,0.643l0.387,0.900l-1.545,1.674l-1.159,-0.901l-1.287,0.643l-0.773,1.545l-1.801,-0.772l-0.127,1.287z";
}, function($ctx1) {$ctx1.fill(self,"Japan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Japan\x0a\x09^ 'M847.491,121.479l-2.574,2.704l0.129,2.703l-1.031,2.188l0.386,1.287l-1.287,1.931l-3.476,1.288l-4.762,0.128l-3.861,3.090l-1.801,-1.030l-0.129,-1.932l-4.635,0.517l-3.219,1.287l-3.089,0l2.703,2.059l-1.803,4.506l-1.801,1.159l-1.287,-1.031l0.643,-2.445l-1.672,-0.772l-1.031,-1.804l2.445,-0.900l1.416,-1.674l2.705,-1.415l2.059,-1.803l5.277,-0.773l2.961,0.516l2.832,-4.764l1.803,1.288l3.861,-2.704l1.545,-1.029l1.674,-3.347l-0.387,-2.961l1.158,-1.803l2.832,-0.386l1.416,3.734l0,-2.188zM854.829,108.606l1.930,-1.159l0.515,2.961l-3.990,0.772l-2.316,2.703l-4.250,-1.931l-1.414,2.962l-3.090,0.128l-0.387,-2.703l1.416,-2.060l2.832,-0.128l0.774,-3.734l0.771,-2.188l3.219,2.832l2.060,0.901l-1.930,-0.644zM821.874,136.798l1.416,-1.545l1.545,0.257l1.160,-1.157l1.930,0.643l0.387,0.900l-1.545,1.674l-1.159,-0.901l-1.287,0.643l-0.773,1.545l-1.801,-0.772l-0.127,1.287z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jordan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0.516,-0.902l2.960,1.031l5.278,-2.833l1.158,3.218l-0.514,0.516l-5.407,1.287l2.703,2.703l-0.901,0.515l-0.515,0.902l-2.060,0.386l-0.643,0.901l-1.160,0.900l-2.960,-0.514l-0.128,-0.386l1.417,-4.249l-0.130,-1.029l0.386,-0.902l0,1.544z";
}, function($ctx1) {$ctx1.fill(self,"Jordan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Jordan\x0a\x09^ 'M560.942,139.759l0.516,-0.902l2.960,1.031l5.278,-2.833l1.158,3.218l-0.514,0.516l-5.407,1.287l2.703,2.703l-0.901,0.515l-0.515,0.902l-2.060,0.386l-0.643,0.901l-1.160,0.900l-2.960,-0.514l-0.128,-0.386l1.417,-4.249l-0.130,-1.029l0.386,-0.902l0,1.544z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kazakhstan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l-1.547,0.515l-3.603,1.802l-1.160,1.931l-1.030,0.129l-0.771,-1.288l-3.347,-0.128l-0.644,-2.189l-1.287,0l0.258,-2.703l-3.219,-2.060l-4.633,0.259l-3.219,0.385l-2.574,-2.446l-2.189,-1.029l-4.120,-1.931l-0.515,-0.129l-6.951,1.544l0.130,9.914l-1.419,0.128l-1.930,-2.060l-1.800,-0.772l-3.090,0.515l-1.160,0.900l-0.127,-0.643l0.642,-1.159l-0.515,-0.900l-3.089,-0.902l-1.286,-2.446l-1.416,-0.644l-0.130,-0.901l2.702,0.258l0,-1.931l2.320,-0.514l2.316,0.385l0.515,-2.574l-0.387,-1.674l-2.704,0.129l-2.316,-0.644l-3.090,1.159l-2.574,0.643l-1.416,-0.514l0.387,-1.416l-1.803,-1.803l-1.931,0.129l-2.317,-1.802l1.545,-2.060l-0.772,-0.515l2.186,-2.960l2.705,1.544l0.387,-1.931l5.535,-2.962l4.248,-0.127l5.922,1.931l3.088,1.029l2.961,-1.158l4.250,0l3.474,1.416l0.773,-0.772l3.732,0l0.644,-1.159l-4.376,-1.931l2.702,-1.288l-0.515,-0.772l2.575,-0.644l-1.929,-1.931l1.158,-0.901l10.039,-0.901l1.418,-0.644l6.693,-1.028l2.446,-1.160l4.763,0.644l0.901,2.833l2.832,-0.645l3.474,0.901l-0.258,1.416l2.577,-0.128l6.822,-2.575l-1.029,0.901l3.474,2.060l5.922,6.822l1.545,-1.416l3.605,1.546l3.860,-0.644l1.545,0.514l1.289,1.545l1.930,0.515l1.158,1.159l3.478,-0.387l1.414,1.675l-2.060,1.801l-2.317,0.128l-0.127,2.704l-1.416,1.288l-5.408,-0.901l-1.931,4.892l-1.415,0.514l-5.279,1.159l2.445,4.635l-1.931,0.643l0.260,1.545l-1.674,-0.386l-1.287,-0.902l-3.993,-0.386l-4.505,0l-1.030,0.258l-3.732,-1.159l-1.545,0.644l-0.514,1.545l-4.378,-0.902l-1.801,0.386l0.514,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Kazakhstan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Kazakhstan\x0a\x09^ 'M656.46,113.111l-1.547,0.515l-3.603,1.802l-1.160,1.931l-1.030,0.129l-0.771,-1.288l-3.347,-0.128l-0.644,-2.189l-1.287,0l0.258,-2.703l-3.219,-2.060l-4.633,0.259l-3.219,0.385l-2.574,-2.446l-2.189,-1.029l-4.120,-1.931l-0.515,-0.129l-6.951,1.544l0.130,9.914l-1.419,0.128l-1.930,-2.060l-1.800,-0.772l-3.090,0.515l-1.160,0.900l-0.127,-0.643l0.642,-1.159l-0.515,-0.900l-3.089,-0.902l-1.286,-2.446l-1.416,-0.644l-0.130,-0.901l2.702,0.258l0,-1.931l2.320,-0.514l2.316,0.385l0.515,-2.574l-0.387,-1.674l-2.704,0.129l-2.316,-0.644l-3.090,1.159l-2.574,0.643l-1.416,-0.514l0.387,-1.416l-1.803,-1.803l-1.931,0.129l-2.317,-1.802l1.545,-2.060l-0.772,-0.515l2.186,-2.960l2.705,1.544l0.387,-1.931l5.535,-2.962l4.248,-0.127l5.922,1.931l3.088,1.029l2.961,-1.158l4.250,0l3.474,1.416l0.773,-0.772l3.732,0l0.644,-1.159l-4.376,-1.931l2.702,-1.288l-0.515,-0.772l2.575,-0.644l-1.929,-1.931l1.158,-0.901l10.039,-0.901l1.418,-0.644l6.693,-1.028l2.446,-1.160l4.763,0.644l0.901,2.833l2.832,-0.645l3.474,0.901l-0.258,1.416l2.577,-0.128l6.822,-2.575l-1.029,0.901l3.474,2.060l5.922,6.822l1.545,-1.416l3.605,1.546l3.860,-0.644l1.545,0.514l1.289,1.545l1.930,0.515l1.158,1.159l3.478,-0.387l1.414,1.675l-2.060,1.801l-2.317,0.128l-0.127,2.704l-1.416,1.288l-5.408,-0.901l-1.931,4.892l-1.415,0.514l-5.279,1.159l2.445,4.635l-1.931,0.643l0.260,1.545l-1.674,-0.386l-1.287,-0.902l-3.993,-0.386l-4.505,0l-1.030,0.258l-3.732,-1.159l-1.545,0.644l-0.514,1.545l-4.378,-0.902l-1.801,0.386l0.514,-1.159z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kenya",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Kenya",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Kenya\x0a\x09^ 'M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kuwait",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M594.411,146.196l0.645,1.158l-0.257,0.643l0.900,2.060l-1.930,0.129l-0.644,-1.288l-2.447,-0.257l1.930,-2.703l-1.803,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kuwait",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Kuwait\x0a\x09^ 'M594.411,146.196l0.645,1.158l-0.257,0.643l0.900,2.060l-1.930,0.129l-0.644,-1.288l-2.447,-0.257l1.930,-2.703l-1.803,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kyrgyzstan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l0.514,-1.159l1.801,-0.386l4.378,0.902l0.514,-1.545l1.545,-0.644l3.732,1.159l1.030,-0.258l4.505,0l3.993,0.386l1.287,0.902l1.674,0.386l-0.387,0.644l-4.248,1.416l-0.901,1.158l-3.476,0.258l-1.029,1.673l-2.834,-0.257l-1.930,0.514l-2.574,1.288l0.386,0.643l-0.773,0.516l-5.020,0.514l-3.347,-0.901l-2.961,0.129l0.257,-1.545l2.961,0.515l1.030,-0.900l2.060,0.257l3.346,-1.932l-3.090,-1.416l-1.929,0.772l-2.061,-1.030l2.317,-1.801l0.770,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kyrgyzstan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Kyrgyzstan\x0a\x09^ 'M656.46,113.111l0.514,-1.159l1.801,-0.386l4.378,0.902l0.514,-1.545l1.545,-0.644l3.732,1.159l1.030,-0.258l4.505,0l3.993,0.386l1.287,0.902l1.674,0.386l-0.387,0.644l-4.248,1.416l-0.901,1.158l-3.476,0.258l-1.029,1.673l-2.834,-0.257l-1.930,0.514l-2.574,1.288l0.386,0.643l-0.773,0.516l-5.020,0.514l-3.347,-0.901l-2.961,0.129l0.257,-1.545l2.961,0.515l1.030,-0.900l2.060,0.257l3.346,-1.932l-3.090,-1.416l-1.929,0.772l-2.061,-1.030l2.317,-1.801l0.770,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Laos",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M748.628,188.549l0.902,-1.288l0.127,-2.189l-2.187,-2.446l-0.129,-2.574l-2.059,-2.189l-2.060,-0.258l-0.516,1.030l-1.545,0l-0.900,-0.385l-2.832,1.544l0,-2.446l0.642,-2.832l-1.800,-0.128l-0.129,-1.546l-1.161,-0.900l0.516,-0.902l2.318,-1.802l0.256,0.643l1.418,0l-0.386,-3.089l1.416,-0.386l1.544,2.188l1.159,2.446l3.347,0l1.028,2.317l-1.672,0.772l-0.774,0.902l3.219,1.674l2.188,3.217l1.673,2.318l2.061,1.931l0.645,1.803l-0.387,2.702l-2.446,-0.901l-1.160,1.803l2.316,1.029z";
}, function($ctx1) {$ctx1.fill(self,"Laos",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Laos\x0a\x09^ 'M748.628,188.549l0.902,-1.288l0.127,-2.189l-2.187,-2.446l-0.129,-2.574l-2.059,-2.189l-2.060,-0.258l-0.516,1.030l-1.545,0l-0.900,-0.385l-2.832,1.544l0,-2.446l0.642,-2.832l-1.800,-0.128l-0.129,-1.546l-1.161,-0.900l0.516,-0.902l2.318,-1.802l0.256,0.643l1.418,0l-0.386,-3.089l1.416,-0.386l1.544,2.188l1.159,2.446l3.347,0l1.028,2.317l-1.672,0.772l-0.774,0.902l3.219,1.674l2.188,3.217l1.673,2.318l2.061,1.931l0.645,1.803l-0.387,2.702l-2.446,-0.901l-1.160,1.803l2.316,1.029z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Latvia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M521.938,76.037l0.128,-2.060l1.288,-1.674l2.573,-0.900l2.060,2.059l2.190,-0.128l0.513,-2.061l2.319,-0.514l1.158,0.387l2.316,1.028l2.318,0l1.286,0.644l0.129,1.287l0.901,1.545l-2.831,1.031l-1.674,0.514l-2.574,-1.288l-1.416,-0.257l-0.385,-0.515l-2.705,0.259l-4.506,-0.130l3.088,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Latvia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Latvia\x0a\x09^ 'M521.938,76.037l0.128,-2.060l1.288,-1.674l2.573,-0.900l2.060,2.059l2.190,-0.128l0.513,-2.061l2.319,-0.514l1.158,0.387l2.316,1.028l2.318,0l1.286,0.644l0.129,1.287l0.901,1.545l-2.831,1.031l-1.674,0.514l-2.574,-1.288l-1.416,-0.257l-0.385,-0.515l-2.705,0.259l-4.506,-0.130l3.088,-0.773z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lebanon",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.714,137.312l-0.643,0l-0.259,0.515l-0.900,0l0.900,-2.187l1.289,-1.932l0.128,0l1.159,0.128l0.515,1.031l-1.546,1.029l-0.514,1.416l0.129,0z";
}, function($ctx1) {$ctx1.fill(self,"Lebanon",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Lebanon\x0a\x09^ 'M561.714,137.312l-0.643,0l-0.259,0.515l-0.900,0l0.900,-2.187l1.289,-1.932l0.128,0l1.159,0.128l0.515,1.031l-1.546,1.029l-0.514,1.416l0.129,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lesotho",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z";
}, function($ctx1) {$ctx1.fill(self,"Lesotho",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Lesotho\x0a\x09^ 'M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Liberia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z";
}, function($ctx1) {$ctx1.fill(self,"Liberia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Liberia\x0a\x09^ 'M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Libya",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.204,165.376l-1.932,1.030l-1.416,-1.544l-4.248,-1.159l-1.288,-1.674l-2.060,-1.158l-1.286,0.385l-0.902,-1.415l-0.127,-1.159l-1.546,-2.059l1.030,-1.030l-0.259,-1.673l0.387,-1.546l-0.256,-1.158l0.513,-2.318l-0.126,-1.158l-0.903,-2.446l1.287,-0.643l0.257,-1.031l-0.257,-1.158l1.803,-1.029l0.900,-0.902l1.288,-0.772l0.129,-2.060l3.217,0.901l1.030,-0.257l2.320,0.514l3.602,1.159l1.160,2.446l2.446,0.515l3.860,1.158l2.833,1.288l1.286,-0.644l1.288,-1.287l-0.643,-2.059l0.900,-1.288l1.932,-1.288l1.801,-0.385l3.734,0.514l0.901,1.287l1.029,0l0.773,0.516l2.703,0.257l0.645,0.901l-0.903,1.287l0.387,1.159l-0.772,1.673l0.901,2.189l0,9.526l0,9.912l0,5.408l-2.832,0l0,1.415l-11.069,-5.407l-10.815,-5.149l2.702,-1.416z";
}, function($ctx1) {$ctx1.fill(self,"Libya",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Libya\x0a\x09^ 'M505.204,165.376l-1.932,1.030l-1.416,-1.544l-4.248,-1.159l-1.288,-1.674l-2.060,-1.158l-1.286,0.385l-0.902,-1.415l-0.127,-1.159l-1.546,-2.059l1.030,-1.030l-0.259,-1.673l0.387,-1.546l-0.256,-1.158l0.513,-2.318l-0.126,-1.158l-0.903,-2.446l1.287,-0.643l0.257,-1.031l-0.257,-1.158l1.803,-1.029l0.900,-0.902l1.288,-0.772l0.129,-2.060l3.217,0.901l1.030,-0.257l2.320,0.514l3.602,1.159l1.160,2.446l2.446,0.515l3.860,1.158l2.833,1.288l1.286,-0.644l1.288,-1.287l-0.643,-2.059l0.900,-1.288l1.932,-1.288l1.801,-0.385l3.734,0.514l0.901,1.287l1.029,0l0.773,0.516l2.703,0.257l0.645,0.901l-0.903,1.287l0.387,1.159l-0.772,1.673l0.901,2.189l0,9.526l0,9.912l0,5.408l-2.832,0l0,1.415l-11.069,-5.407l-10.815,-5.149l2.702,-1.416z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lithuania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,80.67l-0.128,-0.772l0.259,-0.643l-1.289,-0.515l-2.702,-0.386l-0.644,-2.317l3.088,-0.773l4.506,0.130l2.705,-0.259l0.385,0.515l1.416,0.257l2.574,1.288l0.258,1.159l-2.189,0.901l-0.643,1.545l-2.961,0.901l-2.574,0l-0.644,-0.772l1.417,0.259z";
}, function($ctx1) {$ctx1.fill(self,"Lithuania",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Lithuania\x0a\x09^ 'M526.442,80.67l-0.128,-0.772l0.259,-0.643l-1.289,-0.515l-2.702,-0.386l-0.644,-2.317l3.088,-0.773l4.506,0.130l2.705,-0.259l0.385,0.515l1.416,0.257l2.574,1.288l0.258,1.159l-2.189,0.901l-0.643,1.545l-2.961,0.901l-2.574,0l-0.644,-0.772l1.417,0.259z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Luxembourg",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.516,91.999l0.516,0.515l-0.129,1.159l-0.773,0.129l-0.643,-0.259l0.385,-1.544l-0.644,0z";
}, function($ctx1) {$ctx1.fill(self,"Luxembourg",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Luxembourg\x0a\x09^ 'M481.516,91.999l0.516,0.515l-0.129,1.159l-0.773,0.129l-0.643,-0.259l0.385,-1.544l-0.644,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Madagascar",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Madagascar",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Madagascar\x0a\x09^ 'M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malawi",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z";
}, function($ctx1) {$ctx1.fill(self,"Malawi",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Malawi\x0a\x09^ 'M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malaysia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M740.39,210.174l0.642,0.258l1.545,1.673l1.160,1.803l0.129,1.803l-0.258,1.287l0.258,0.900l0.129,1.545l1.029,0.772l1.030,2.318l0,0.901l-1.932,0.257l-2.574,-2.059l-3.217,-2.060l-0.260,-1.416l-1.543,-1.802l-0.386,-2.188l-1.032,-1.546l0.387,-1.931l-0.643,-1.158l0.516,-0.385l2.188,1.157l0.129,1.287l1.802,-0.257l-0.901,1.159zM760.601,221.632l2.058,0.901l2.061,-0.514l0.513,-2.318l1.159,-0.515l3.218,-0.515l1.932,-2.189l1.287,-1.673l1.287,1.417l0.516,-0.902l1.285,0l0.260,-1.674l0.127,-1.287l2.060,-1.931l1.287,-2.059l1.159,0l1.287,1.286l0.129,1.159l1.802,0.772l2.319,0.773l-0.258,1.158l-1.803,0.129l0.514,1.288l-2.059,0.901l-2.316,-0.515l-3.090,0l-0.900,3.089l-1.032,0.901l-1.414,3.862l-2.189,0.515l-2.574,-0.772l-1.289,0.257l-1.545,1.417l-1.672,-0.257l-1.803,0.514l-1.801,-1.416l0.515,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Malaysia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Malaysia\x0a\x09^ 'M740.39,210.174l0.642,0.258l1.545,1.673l1.160,1.803l0.129,1.803l-0.258,1.287l0.258,0.900l0.129,1.545l1.029,0.772l1.030,2.318l0,0.901l-1.932,0.257l-2.574,-2.059l-3.217,-2.060l-0.260,-1.416l-1.543,-1.802l-0.386,-2.188l-1.032,-1.546l0.387,-1.931l-0.643,-1.158l0.516,-0.385l2.188,1.157l0.129,1.287l1.802,-0.257l-0.901,1.159zM760.601,221.632l2.058,0.901l2.061,-0.514l0.513,-2.318l1.159,-0.515l3.218,-0.515l1.932,-2.189l1.287,-1.673l1.287,1.417l0.516,-0.902l1.285,0l0.260,-1.674l0.127,-1.287l2.060,-1.931l1.287,-2.059l1.159,0l1.287,1.286l0.129,1.159l1.802,0.772l2.319,0.773l-0.258,1.158l-1.803,0.129l0.514,1.288l-2.059,0.901l-2.316,-0.515l-3.090,0l-0.900,3.089l-1.032,0.901l-1.414,3.862l-2.189,0.515l-2.574,-0.772l-1.289,0.257l-1.545,1.417l-1.672,-0.257l-1.803,0.514l-1.801,-1.416l0.515,1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mali",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z";
}, function($ctx1) {$ctx1.fill(self,"Mali",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Mali\x0a\x09^ 'M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mauritania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Mauritania",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Mauritania\x0a\x09^ 'M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mexico",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M203.592,157.266l-1.030,2.446l-0.515,1.931l-0.257,3.605l-0.257,1.287l0.514,1.416l0.773,1.287l0.644,2.188l1.802,1.931l0.515,1.545l1.158,1.416l2.832,0.643l1.029,1.159l2.447,-0.772l2.060,-0.258l1.930,-0.513l1.803,-0.388l1.672,-1.158l0.644,-1.545l0.258,-2.317l0.386,-0.772l1.803,-0.644l2.961,-0.644l2.316,0l1.674,-0.129l0.644,0.516l-0.129,1.287l-1.417,1.674l-0.643,1.544l0.515,0.515l-0.386,1.158l-0.772,2.060l-0.644,-0.644l-0.515,0l-0.515,0.130l-1.030,1.544l-0.515,-0.258l-0.257,0.129l0,0.387l-2.446,0l-2.575,0l0,1.416l-1.158,0l0.901,0.901l1.030,0.643l0.387,0.644l0.385,0.128l-0.128,0.903l-3.347,0l-1.416,2.188l0.385,0.514l-0.257,0.643l-0.128,0.773l-2.961,-2.832l-1.416,-0.901l-2.189,-0.772l-1.544,0.257l-2.189,1.030l-1.287,0.258l-1.930,-0.773l-2.060,-0.515l-2.446,-1.158l-2.061,-0.387l-3.088,-1.287l-2.189,-1.286l-0.644,-0.645l-1.545,-0.258l-2.702,-0.772l-1.159,-1.287l-2.961,-1.545l-1.288,-1.673l-0.644,-1.287l0.902,-0.258l-0.258,-0.772l0.644,-0.772l0,-0.902l-0.901,-1.158l-0.257,-1.159l-0.902,-1.287l-2.445,-2.704l-2.703,-2.059l-1.288,-1.674l-2.317,-1.159l-0.515,-0.643l0.386,-1.674l-1.287,-0.643l-1.673,-1.287l-0.644,-1.802l-1.416,-0.258l-1.545,-1.416l-1.287,-1.288l-0.129,-0.901l-1.416,-2.060l-1.029,-2.059l0.128,-1.030l-1.931,-1.030l-0.901,0.129l-1.544,-0.773l-0.515,1.159l0.515,1.288l0.257,1.930l0.901,1.160l1.931,1.801l0.515,0.644l0.386,0.257l0.386,0.902l0.515,0l0.515,1.673l0.773,0.644l0.643,1.030l1.673,1.415l0.902,2.446l0.772,1.159l0.773,1.287l0.128,1.416l1.287,0.129l1.030,1.158l1.029,1.288l-0.128,0.386l-1.029,1.030l-0.516,0l-0.772,-1.673l-1.673,-1.546l-1.931,-1.286l-1.416,-0.644l0.129,-1.931l-0.515,-1.545l-1.288,-0.773l-1.802,-1.287l-0.386,0.386l-0.644,-0.643l-1.673,-0.643l-1.545,-1.675l0.129,-0.128l1.158,0.128l1.030,-1.029l0,-1.159l-2.059,-1.931l-1.545,-0.772l-1.031,-1.674l-0.900,-1.802l-1.287,-2.189l-1.159,-2.317l3.090,-0.256l3.475,-0.259l-0.258,0.515l3.992,1.288l6.178,1.931l5.407,0l2.060,0l0.129,-1.158l4.633,0l0.902,0.900l1.416,0.901l1.545,1.159l0.900,1.416l0.772,1.545l1.288,0.772l2.316,0.772l1.674,-2.058l2.189,-0.130l1.930,1.159l1.288,1.802l1.030,1.545l1.545,1.545l0.515,1.931l0.772,1.287l2.188,0.773l1.931,0.643l-1.030,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Mexico",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Mexico\x0a\x09^ 'M203.592,157.266l-1.030,2.446l-0.515,1.931l-0.257,3.605l-0.257,1.287l0.514,1.416l0.773,1.287l0.644,2.188l1.802,1.931l0.515,1.545l1.158,1.416l2.832,0.643l1.029,1.159l2.447,-0.772l2.060,-0.258l1.930,-0.513l1.803,-0.388l1.672,-1.158l0.644,-1.545l0.258,-2.317l0.386,-0.772l1.803,-0.644l2.961,-0.644l2.316,0l1.674,-0.129l0.644,0.516l-0.129,1.287l-1.417,1.674l-0.643,1.544l0.515,0.515l-0.386,1.158l-0.772,2.060l-0.644,-0.644l-0.515,0l-0.515,0.130l-1.030,1.544l-0.515,-0.258l-0.257,0.129l0,0.387l-2.446,0l-2.575,0l0,1.416l-1.158,0l0.901,0.901l1.030,0.643l0.387,0.644l0.385,0.128l-0.128,0.903l-3.347,0l-1.416,2.188l0.385,0.514l-0.257,0.643l-0.128,0.773l-2.961,-2.832l-1.416,-0.901l-2.189,-0.772l-1.544,0.257l-2.189,1.030l-1.287,0.258l-1.930,-0.773l-2.060,-0.515l-2.446,-1.158l-2.061,-0.387l-3.088,-1.287l-2.189,-1.286l-0.644,-0.645l-1.545,-0.258l-2.702,-0.772l-1.159,-1.287l-2.961,-1.545l-1.288,-1.673l-0.644,-1.287l0.902,-0.258l-0.258,-0.772l0.644,-0.772l0,-0.902l-0.901,-1.158l-0.257,-1.159l-0.902,-1.287l-2.445,-2.704l-2.703,-2.059l-1.288,-1.674l-2.317,-1.159l-0.515,-0.643l0.386,-1.674l-1.287,-0.643l-1.673,-1.287l-0.644,-1.802l-1.416,-0.258l-1.545,-1.416l-1.287,-1.288l-0.129,-0.901l-1.416,-2.060l-1.029,-2.059l0.128,-1.030l-1.931,-1.030l-0.901,0.129l-1.544,-0.773l-0.515,1.159l0.515,1.288l0.257,1.930l0.901,1.160l1.931,1.801l0.515,0.644l0.386,0.257l0.386,0.902l0.515,0l0.515,1.673l0.773,0.644l0.643,1.030l1.673,1.415l0.902,2.446l0.772,1.159l0.773,1.287l0.128,1.416l1.287,0.129l1.030,1.158l1.029,1.288l-0.128,0.386l-1.029,1.030l-0.516,0l-0.772,-1.673l-1.673,-1.546l-1.931,-1.286l-1.416,-0.644l0.129,-1.931l-0.515,-1.545l-1.288,-0.773l-1.802,-1.287l-0.386,0.386l-0.644,-0.643l-1.673,-0.643l-1.545,-1.675l0.129,-0.128l1.158,0.128l1.030,-1.029l0,-1.159l-2.059,-1.931l-1.545,-0.772l-1.031,-1.674l-0.900,-1.802l-1.287,-2.189l-1.159,-2.317l3.090,-0.256l3.475,-0.259l-0.258,0.515l3.992,1.288l6.178,1.931l5.407,0l2.060,0l0.129,-1.158l4.633,0l0.902,0.900l1.416,0.901l1.545,1.159l0.900,1.416l0.772,1.545l1.288,0.772l2.316,0.772l1.674,-2.058l2.189,-0.130l1.930,1.159l1.288,1.802l1.030,1.545l1.545,1.545l0.515,1.931l0.772,1.287l2.188,0.773l1.931,0.643l-1.030,0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Moldova",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.998,97.02l0.644,-0.386l1.675,-0.259l2.059,0.903l1.029,0.128l1.287,0.644l-0.257,0.901l1.030,0.515l0.386,1.030l0.902,0.772l-0.131,0.386l0.517,0.258l-0.773,0.257l-1.545,-0.129l-0.258,-0.386l-0.513,0.258l0.129,0.386l-0.774,0.901l-0.385,0.901l-0.773,0.386l-0.387,-1.287l0.257,-1.159l-0.128,-1.158l-1.545,-1.674l-0.902,-1.029l-0.770,-0.901l0.774,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Moldova",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Moldova\x0a\x09^ 'M536.998,97.02l0.644,-0.386l1.675,-0.259l2.059,0.903l1.029,0.128l1.287,0.644l-0.257,0.901l1.030,0.515l0.386,1.030l0.902,0.772l-0.131,0.386l0.517,0.258l-0.773,0.257l-1.545,-0.129l-0.258,-0.386l-0.513,0.258l0.129,0.386l-0.774,0.901l-0.385,0.901l-0.773,0.386l-0.387,-1.287l0.257,-1.159l-0.128,-1.158l-1.545,-1.674l-0.902,-1.029l-0.770,-0.901l0.774,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mongolia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M701.642,94.188l2.832,-0.515l5.148,-2.317l4.121,-1.287l2.317,0.901l2.832,0l1.802,1.287l2.703,0.129l3.862,0.644l2.574,-1.931l-1.029,-1.545l2.703,-2.832l3.090,1.158l2.445,0.257l3.090,0.773l0.515,1.931l3.862,1.158l2.574,-0.515l3.348,-0.257l2.705,0.257l2.701,1.287l1.674,1.417l2.445,0l3.348,0.386l2.574,-0.644l3.476,-0.387l3.991,-1.930l1.545,0.258l1.414,0.900l3.218,-0.128l-1.287,1.931l-1.931,2.704l0.771,1.158l1.420,-0.386l2.701,0.386l2.059,-0.901l2.189,0.772l2.448,1.931l-0.258,0.902l-2.190,-0.258l-3.861,0.386l-1.932,0.772l-1.931,1.803l-4.119,1.029l-2.704,1.417l-2.832,-0.516l-1.416,-0.257l-1.416,1.674l0.774,1.030l0.515,0.900l-1.931,0.902l-1.932,1.416l-3.088,1.030l-4.121,0.128l-4.375,0.902l-3.090,1.416l-1.160,-0.773l-3.347,0l-3.862,-1.673l-2.701,-0.386l-3.605,0.386l-5.536,-0.644l-2.962,0l-1.672,-1.545l-1.159,-2.446l-1.673,-0.386l-3.217,-1.674l-3.606,-0.385l-3.216,-0.387l-1.032,-1.158l1.032,-3.219l-1.803,-2.188l-3.863,-0.901l-2.317,-1.545l0.644,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Mongolia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Mongolia\x0a\x09^ 'M701.642,94.188l2.832,-0.515l5.148,-2.317l4.121,-1.287l2.317,0.901l2.832,0l1.802,1.287l2.703,0.129l3.862,0.644l2.574,-1.931l-1.029,-1.545l2.703,-2.832l3.090,1.158l2.445,0.257l3.090,0.773l0.515,1.931l3.862,1.158l2.574,-0.515l3.348,-0.257l2.705,0.257l2.701,1.287l1.674,1.417l2.445,0l3.348,0.386l2.574,-0.644l3.476,-0.387l3.991,-1.930l1.545,0.258l1.414,0.900l3.218,-0.128l-1.287,1.931l-1.931,2.704l0.771,1.158l1.420,-0.386l2.701,0.386l2.059,-0.901l2.189,0.772l2.448,1.931l-0.258,0.902l-2.190,-0.258l-3.861,0.386l-1.932,0.772l-1.931,1.803l-4.119,1.029l-2.704,1.417l-2.832,-0.516l-1.416,-0.257l-1.416,1.674l0.774,1.030l0.515,0.900l-1.931,0.902l-1.932,1.416l-3.088,1.030l-4.121,0.128l-4.375,0.902l-3.090,1.416l-1.160,-0.773l-3.347,0l-3.862,-1.673l-2.701,-0.386l-3.605,0.386l-5.536,-0.644l-2.962,0l-1.672,-1.545l-1.159,-2.446l-1.673,-0.386l-3.217,-1.674l-3.606,-0.385l-3.216,-0.387l-1.032,-1.158l1.032,-3.219l-1.803,-2.188l-3.863,-0.901l-2.317,-1.545l0.644,1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Morocco",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Morocco",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Morocco\x0a\x09^ 'M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mozambique",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z";
}, function($ctx1) {$ctx1.fill(self,"Mozambique",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Mozambique\x0a\x09^ 'M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "MyanmarBurma",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M733.437,172.585l-1.672,1.159l-1.803,0.129l-1.287,2.960l-1.158,0.515l1.287,2.317l1.802,1.931l1.030,1.802l-0.901,2.318l-1.029,0.514l0.643,1.416l1.802,2.060l0.387,1.545l-0.129,1.287l1.158,2.447l-1.545,2.445l-1.287,2.832l-0.257,-2.059l0.773,-2.060l-0.902,-1.544l0.257,-2.962l-1.158,-1.416l-0.773,-3.219l-0.516,-3.345l-1.158,-2.318l-1.803,1.415l-3.088,1.932l-1.416,-0.257l-1.673,-0.644l0.902,-3.347l-0.647,-2.575l-2.058,-3.090l0.386,-0.900l-1.671,-0.387l-1.934,-2.188l-0.127,-2.189l0.900,0.387l0.129,-1.932l1.287,-0.643l-0.255,-1.159l0.642,-0.900l0,-2.704l2.188,0.515l1.160,-2.189l0.127,-1.287l1.545,-2.317l-0.127,-1.545l3.474,-1.802l1.930,0.515l-0.256,-1.674l1.030,-0.515l-0.258,-1.029l1.545,-0.130l0.900,1.545l1.289,0.644l0,2.060l-0.131,2.188l-2.445,2.318l-0.387,3.089l2.832,-0.386l0.645,2.446l1.674,0.515l-0.772,2.317l2.059,1.030l1.160,0.387l1.930,-0.773l0.128,1.158l-2.318,1.802l-0.516,0.902l1.544,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"MyanmarBurma",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "MyanmarBurma\x0a\x09^ 'M733.437,172.585l-1.672,1.159l-1.803,0.129l-1.287,2.960l-1.158,0.515l1.287,2.317l1.802,1.931l1.030,1.802l-0.901,2.318l-1.029,0.514l0.643,1.416l1.802,2.060l0.387,1.545l-0.129,1.287l1.158,2.447l-1.545,2.445l-1.287,2.832l-0.257,-2.059l0.773,-2.060l-0.902,-1.544l0.257,-2.962l-1.158,-1.416l-0.773,-3.219l-0.516,-3.345l-1.158,-2.318l-1.803,1.415l-3.088,1.932l-1.416,-0.257l-1.673,-0.644l0.902,-3.347l-0.647,-2.575l-2.058,-3.090l0.386,-0.900l-1.671,-0.387l-1.934,-2.188l-0.127,-2.189l0.900,0.387l0.129,-1.932l1.287,-0.643l-0.255,-1.159l0.642,-0.900l0,-2.704l2.188,0.515l1.160,-2.189l0.127,-1.287l1.545,-2.317l-0.127,-1.545l3.474,-1.802l1.930,0.515l-0.256,-1.674l1.030,-0.515l-0.258,-1.029l1.545,-0.130l0.900,1.545l1.289,0.644l0,2.060l-0.131,2.188l-2.445,2.318l-0.387,3.089l2.832,-0.386l0.645,2.446l1.674,0.515l-0.772,2.317l2.059,1.030l1.160,0.387l1.930,-0.773l0.128,1.158l-2.318,1.802l-0.516,0.902l1.544,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nambia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z";
}, function($ctx1) {$ctx1.fill(self,"Nambia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Nambia\x0a\x09^ 'M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nepal",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M702.673,151.859l-0.258,1.159l0.385,1.674l-0.385,1.158l-2.189,0l-3.219,-0.644l-2.059,-0.257l-1.674,-1.287l-3.603,-0.386l-3.604,-1.545l-2.447,-1.287l-2.703,-1.031l1.160,-2.573l1.672,-1.160l1.158,-0.643l2.061,0.772l2.703,1.802l1.545,0.386l0.900,1.288l2.188,0.515l2.189,1.158l2.959,0.644l-3.221,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Nepal",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Nepal\x0a\x09^ 'M702.673,151.859l-0.258,1.159l0.385,1.674l-0.385,1.158l-2.189,0l-3.219,-0.644l-2.059,-0.257l-1.674,-1.287l-3.603,-0.386l-3.604,-1.545l-2.447,-1.287l-2.703,-1.031l1.160,-2.573l1.672,-1.160l1.158,-0.643l2.061,0.772l2.703,1.802l1.545,0.386l0.900,1.288l2.188,0.515l2.189,1.158l2.959,0.644l-3.221,-0.257z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Netherlands",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.646,82.859l2.188,0l0.515,0.902l-0.644,2.574l-0.773,0.901l-1.544,0l0.386,2.833l-1.416,-0.644l-1.673,-1.158l-2.574,0.643l-1.932,-0.258l1.417,-0.772l2.317,-3.991l-3.733,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Netherlands",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Netherlands\x0a\x09^ 'M481.646,82.859l2.188,0l0.515,0.902l-0.644,2.574l-0.773,0.901l-1.544,0l0.386,2.833l-1.416,-0.644l-1.673,-1.158l-2.574,0.643l-1.932,-0.258l1.417,-0.772l2.317,-3.991l-3.733,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NewZealand",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M941.72,334.914l-1.030,1.417l-1.287,1.931l-2.058,1.030l-0.514,-0.772l-1.160,-0.386l1.545,-2.189l-0.774,-1.416l-2.961,-1.159l0.131,-0.901l1.930,-1.030l0.387,-2.059l-0.129,-1.674l-1.029,-1.803l0,-0.514l-1.290,-1.158l-2.058,-2.317l-1.158,-1.932l1.027,-0.256l1.418,1.544l2.187,0.773l0.774,2.315l1.930,2.834l0,-1.803l1.289,0.773l0.384,1.931l2.190,0.901l1.803,0.257l1.545,-1.030l1.285,0.258l-0.645,2.446l-0.771,1.544l-2.059,0l-0.771,0.773l0.255,1.158l0.386,-0.514zM922.282,344.312l2.319,-1.416l1.671,-1.416l1.161,-1.931l1.029,-0.772l0.387,-1.416l1.929,-1.287l0.514,1.158l0.645,1.030l1.933,-1.030l0.770,1.160l0,1.157l-1.028,1.160l-1.802,2.059l-1.289,1.029l1.029,1.288l-2.188,0l-2.316,1.030l-0.645,1.803l-1.545,2.703l-2.060,1.286l-1.414,0.773l-2.445,-0.128l-1.805,-0.901l-2.830,-0.130l-0.516,-1.030l1.416,-1.930l3.477,-2.704l1.672,-0.515l-1.931,1.030z";
}, function($ctx1) {$ctx1.fill(self,"NewZealand",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "NewZealand\x0a\x09^ 'M941.72,334.914l-1.030,1.417l-1.287,1.931l-2.058,1.030l-0.514,-0.772l-1.160,-0.386l1.545,-2.189l-0.774,-1.416l-2.961,-1.159l0.131,-0.901l1.930,-1.030l0.387,-2.059l-0.129,-1.674l-1.029,-1.803l0,-0.514l-1.290,-1.158l-2.058,-2.317l-1.158,-1.932l1.027,-0.256l1.418,1.544l2.187,0.773l0.774,2.315l1.930,2.834l0,-1.803l1.289,0.773l0.384,1.931l2.190,0.901l1.803,0.257l1.545,-1.030l1.285,0.258l-0.645,2.446l-0.771,1.544l-2.059,0l-0.771,0.773l0.255,1.158l0.386,-0.514zM922.282,344.312l2.319,-1.416l1.671,-1.416l1.161,-1.931l1.029,-0.772l0.387,-1.416l1.929,-1.287l0.514,1.158l0.645,1.030l1.933,-1.030l0.770,1.160l0,1.157l-1.028,1.160l-1.802,2.059l-1.289,1.029l1.029,1.288l-2.188,0l-2.316,1.030l-0.645,1.803l-1.545,2.703l-2.060,1.286l-1.414,0.773l-2.445,-0.128l-1.805,-0.901l-2.830,-0.130l-0.516,-1.030l1.416,-1.930l3.477,-2.704l1.672,-0.515l-1.931,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nicaragua",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M234.359,197.045l-0.902,-0.774l-1.287,-1.158l-0.643,-0.901l-1.159,-0.773l-1.288,-1.287l0.258,-0.386l0.514,0.386l0.129,-0.129l0.902,-0.128l0.257,-0.644l0.387,0l0,-1.288l0.643,-0.129l0.515,0l0.643,-0.643l0.773,0.515l0.258,-0.386l0.515,-0.258l0.900,-0.771l0.129,-0.516l0.257,0l0.258,-0.643l0.258,-0.130l0.514,0.517l0.516,0.127l0.643,-0.385l0.643,0l0.902,-0.386l0.386,-0.386l0.901,0.128l-0.129,0.258l-0.129,0.514l0.258,1.030l-0.643,0.901l-0.258,1.159l-0.129,1.158l0.129,0.644l0.128,1.287l-0.514,0.258l-0.129,1.159l0.129,0.644l-0.516,0.771l0.130,0.645l0.386,0.514l-0.644,0.514l-0.772,-0.128l-0.515,-0.644l-0.773,-0.128l-0.644,0.257l-1.801,-0.644l0.386,-0.259z";
}, function($ctx1) {$ctx1.fill(self,"Nicaragua",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Nicaragua\x0a\x09^ 'M234.359,197.045l-0.902,-0.774l-1.287,-1.158l-0.643,-0.901l-1.159,-0.773l-1.288,-1.287l0.258,-0.386l0.514,0.386l0.129,-0.129l0.902,-0.128l0.257,-0.644l0.387,0l0,-1.288l0.643,-0.129l0.515,0l0.643,-0.643l0.773,0.515l0.258,-0.386l0.515,-0.258l0.900,-0.771l0.129,-0.516l0.257,0l0.258,-0.643l0.258,-0.130l0.514,0.517l0.516,0.127l0.643,-0.385l0.643,0l0.902,-0.386l0.386,-0.386l0.901,0.128l-0.129,0.258l-0.129,0.514l0.258,1.030l-0.643,0.901l-0.258,1.159l-0.129,1.158l0.129,0.644l0.128,1.287l-0.514,0.258l-0.129,1.159l0.129,0.644l-0.516,0.771l0.130,0.645l0.386,0.514l-0.644,0.514l-0.772,-0.128l-0.515,-0.644l-0.773,-0.128l-0.644,0.257l-1.801,-0.644l0.386,-0.259z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Niger",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Niger",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Niger\x0a\x09^ 'M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nigeria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z";
}, function($ctx1) {$ctx1.fill(self,"Nigeria",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Nigeria\x0a\x09^ 'M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NorthKorea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M817.112,112.726l0.385,0.514l-1.029,-0.129l-1.158,0.902l-0.774,0.901l0.131,1.930l-1.418,0.644l-0.516,0.386l-1.027,0.772l-1.803,0.516l-1.158,0.773l0,1.158l-0.387,0.257l1.157,0.386l1.418,1.159l-0.385,0.772l-1.033,0.129l-1.930,0.129l-1.029,1.158l-1.285,0l-0.131,0.257l-1.287,-0.514l-0.385,0.386l-0.774,0.257l-0.129,-0.514l-0.644,-0.258l-0.772,-0.386l0.772,-1.159l0.644,-0.385l-0.255,-0.387l0.640,-1.545l-0.127,-0.386l-1.545,-0.258l-1.289,-0.772l2.190,-1.673l2.961,-1.546l1.802,-1.930l1.287,0.900l2.319,0.130l-0.387,-1.417l4.248,-1.157l1.029,-1.546l-1.674,-1.546z";
}, function($ctx1) {$ctx1.fill(self,"NorthKorea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "NorthKorea\x0a\x09^ 'M817.112,112.726l0.385,0.514l-1.029,-0.129l-1.158,0.902l-0.774,0.901l0.131,1.930l-1.418,0.644l-0.516,0.386l-1.027,0.772l-1.803,0.516l-1.158,0.773l0,1.158l-0.387,0.257l1.157,0.386l1.418,1.159l-0.385,0.772l-1.033,0.129l-1.930,0.129l-1.029,1.158l-1.285,0l-0.131,0.257l-1.287,-0.514l-0.385,0.386l-0.774,0.257l-0.129,-0.514l-0.644,-0.258l-0.772,-0.386l0.772,-1.159l0.644,-0.385l-0.255,-0.387l0.640,-1.545l-0.127,-0.386l-1.545,-0.258l-1.289,-0.772l2.190,-1.673l2.961,-1.546l1.802,-1.930l1.287,0.900l2.319,0.130l-0.387,-1.417l4.248,-1.157l1.029,-1.546l-1.674,-1.546z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Norway",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M494.905,68.442l-1.802,-1.674l-5.279,3.090l-3.603,0.643l-3.734,-1.415l-0.902,-2.833l-0.900,-6.179l2.445,-1.802l7.080,-2.189l5.407,-2.832l4.892,-3.733l6.435,-5.278l4.508,-1.931l7.465,-3.476l5.922,-1.158l4.377,0.129l4.119,-2.188l4.893,0.128l4.889,-0.515l8.368,1.931l-3.474,0.773l2.961,1.672l-4.507,1.031l-2.189,0.257l1.159,-1.803l-3.476,-1.157l-4.247,0.900l-1.289,2.060l-2.572,1.159l-2.832,-0.644l-3.606,0.129l-2.961,-1.416l-1.545,0.643l-1.673,0.129l-0.513,1.803l-5.022,-0.387l-0.644,1.417l-2.702,0l-1.674,1.931l-2.703,2.960l-4.248,3.862l1.031,0.901l-0.903,1.030l-2.705,0l-1.800,2.446l0.127,3.605l1.803,1.415l-0.900,3.090l-2.318,1.931l1.158,-1.545z";
}, function($ctx1) {$ctx1.fill(self,"Norway",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Norway\x0a\x09^ 'M494.905,68.442l-1.802,-1.674l-5.279,3.090l-3.603,0.643l-3.734,-1.415l-0.902,-2.833l-0.900,-6.179l2.445,-1.802l7.080,-2.189l5.407,-2.832l4.892,-3.733l6.435,-5.278l4.508,-1.931l7.465,-3.476l5.922,-1.158l4.377,0.129l4.119,-2.188l4.893,0.128l4.889,-0.515l8.368,1.931l-3.474,0.773l2.961,1.672l-4.507,1.031l-2.189,0.257l1.159,-1.803l-3.476,-1.157l-4.247,0.900l-1.289,2.060l-2.572,1.159l-2.832,-0.644l-3.606,0.129l-2.961,-1.416l-1.545,0.643l-1.673,0.129l-0.513,1.803l-5.022,-0.387l-0.644,1.417l-2.702,0l-1.674,1.931l-2.703,2.960l-4.248,3.862l1.031,0.901l-0.903,1.030l-2.705,0l-1.800,2.446l0.127,3.605l1.803,1.415l-0.900,3.090l-2.318,1.931l1.158,-1.545z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Noumea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M911.856,283.809l2.188,1.673l1.416,1.159l-1.029,0.643l-1.545,-0.643l-1.932,-1.287l-1.672,-1.416l-1.803,-1.932l-0.386,-0.901l1.158,0.129l1.545,0.901l1.158,0.902l-0.902,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Noumea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Noumea\x0a\x09^ 'M911.856,283.809l2.188,1.673l1.416,1.159l-1.029,0.643l-1.545,-0.643l-1.932,-1.287l-1.672,-1.416l-1.803,-1.932l-0.386,-0.901l1.158,0.129l1.545,0.901l1.158,0.902l-0.902,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Oman",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M617.197,159.841l1.157,1.802l1.545,1.030l1.932,0.387l1.674,0.385l1.158,1.545l0.772,0.902l0.902,0.385l0,0.644l-1.031,1.545l-0.387,0.772l-1.158,0.902l-1.029,1.802l-1.157,-0.130l-0.517,0.645l-0.514,1.416l0.385,1.673l-0.257,0.387l-1.286,0l-1.675,1.028l-0.257,1.289l-0.642,0.514l-1.675,0l-1.031,0.773l0,1.029l-1.287,0.773l-1.416,-0.257l-1.802,0.900l-1.286,0.129l-0.900,-1.930l-2.061,-4.378l7.981,-2.702l1.802,-5.408l-1.159,-1.931l0,-1.030l0.773,-1.159l0.129,-1.029l1.159,-0.515l-0.517,-0.386l0.258,-1.802l-1.417,0zM616.294,156.752l0.773,-0.902l0.387,0.257l-0.257,1.159l-0.385,0.386l0.518,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Oman",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Oman\x0a\x09^ 'M617.197,159.841l1.157,1.802l1.545,1.030l1.932,0.387l1.674,0.385l1.158,1.545l0.772,0.902l0.902,0.385l0,0.644l-1.031,1.545l-0.387,0.772l-1.158,0.902l-1.029,1.802l-1.157,-0.130l-0.517,0.645l-0.514,1.416l0.385,1.673l-0.257,0.387l-1.286,0l-1.675,1.028l-0.257,1.289l-0.642,0.514l-1.675,0l-1.031,0.773l0,1.029l-1.287,0.773l-1.416,-0.257l-1.802,0.900l-1.286,0.129l-0.900,-1.930l-2.061,-4.378l7.981,-2.702l1.802,-5.408l-1.159,-1.931l0,-1.030l0.773,-1.159l0.129,-1.029l1.159,-0.515l-0.517,-0.386l0.258,-1.802l-1.417,0zM616.294,156.752l0.773,-0.902l0.387,0.257l-0.257,1.159l-0.385,0.386l0.518,0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Pakistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M667.659,126.886l2.059,1.287l0.773,2.059l4.375,1.159l-2.572,2.189l-2.961,0.386l-4.121,-0.643l-1.287,1.157l0.900,2.447l1.031,1.802l2.059,1.287l-2.187,1.545l0,1.931l-2.575,2.704l-1.802,2.702l-2.704,2.833l-3.218,-0.129l-2.961,2.832l1.802,1.159l0.258,2.059l1.545,1.417l0.514,2.317l-5.922,0l-1.801,1.802l-1.931,-0.772l-0.774,-1.932l-2.187,-2.059l-4.891,0.514l-4.377,0.130l-3.863,0.386l1.030,-3.218l3.992,-1.288l-0.259,-1.287l-1.288,-0.386l-0.128,-2.446l-2.574,-1.159l-1.031,-1.674l-1.414,-1.415l4.504,1.415l2.704,-0.386l1.674,0.386l0.514,-0.643l1.931,0.257l3.476,-1.159l0.129,-2.317l1.417,-1.544l2.058,0l0.257,-0.644l2.061,-0.386l1.029,0.257l1.031,-0.772l-0.129,-1.674l1.158,-1.545l1.673,-0.772l-1.030,-1.673l2.575,0l0.773,-0.902l-0.129,-1.029l1.287,-1.159l-0.257,-1.416l-0.645,-1.029l1.545,-1.287l2.833,-0.517l3.090,-0.256l1.416,-0.516l-1.545,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Pakistan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Pakistan\x0a\x09^ 'M667.659,126.886l2.059,1.287l0.773,2.059l4.375,1.159l-2.572,2.189l-2.961,0.386l-4.121,-0.643l-1.287,1.157l0.900,2.447l1.031,1.802l2.059,1.287l-2.187,1.545l0,1.931l-2.575,2.704l-1.802,2.702l-2.704,2.833l-3.218,-0.129l-2.961,2.832l1.802,1.159l0.258,2.059l1.545,1.417l0.514,2.317l-5.922,0l-1.801,1.802l-1.931,-0.772l-0.774,-1.932l-2.187,-2.059l-4.891,0.514l-4.377,0.130l-3.863,0.386l1.030,-3.218l3.992,-1.288l-0.259,-1.287l-1.288,-0.386l-0.128,-2.446l-2.574,-1.159l-1.031,-1.674l-1.414,-1.415l4.504,1.415l2.704,-0.386l1.674,0.386l0.514,-0.643l1.931,0.257l3.476,-1.159l0.129,-2.317l1.417,-1.544l2.058,0l0.257,-0.644l2.061,-0.386l1.029,0.257l1.031,-0.772l-0.129,-1.674l1.158,-1.545l1.673,-0.772l-1.030,-1.673l2.575,0l0.773,-0.902l-0.129,-1.029l1.287,-1.159l-0.257,-1.416l-0.645,-1.029l1.545,-1.287l2.833,-0.517l3.090,-0.256l1.416,-0.516l-1.545,0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Palestine",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0,1.544l-0.386,0.902l-1.287,0.257l0.128,-0.644l0.774,-0.385l-0.774,-0.258l0.645,-1.803l-0.900,-0.387z";
}, function($ctx1) {$ctx1.fill(self,"Palestine",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Palestine\x0a\x09^ 'M560.942,139.759l0,1.544l-0.386,0.902l-1.287,0.257l0.128,-0.644l0.774,-0.385l-0.774,-0.258l0.645,-1.803l-0.900,-0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Panama",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M255.47,207.471l-0.902,-0.772l-0.643,-1.416l0.643,-0.773l-0.643,-0.127l-0.514,-0.903l-1.288,-0.771l-1.159,0.257l-0.644,0.900l-1.029,0.644l-0.644,0.129l-0.257,0.515l1.287,1.545l-0.643,0.258l-0.387,0.385l-1.287,0.129l-0.515,-1.544l-0.387,0.386l-0.772,-0.129l-0.643,-1.030l-1.030,-0.258l-0.773,-0.257l-1.158,0l0,0.644l-0.387,-0.515l0.130,-0.515l0.257,-0.515l-0.128,-0.515l0.385,-0.257l-0.514,-0.387l0,-1.157l1.029,-0.260l1.030,1.031l-0.129,0.516l1.159,0.129l0.129,-0.129l0.772,0.643l1.416,-0.258l1.031,-0.643l1.673,-0.515l0.900,-0.901l1.545,0.257l-0.129,0.257l1.545,0l1.159,0.516l0.900,0.773l1.031,0.771l-0.386,0.387l0.643,1.544l-0.515,0.901l-0.900,-0.257l0.258,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"Panama",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Panama\x0a\x09^ 'M255.47,207.471l-0.902,-0.772l-0.643,-1.416l0.643,-0.773l-0.643,-0.127l-0.514,-0.903l-1.288,-0.771l-1.159,0.257l-0.644,0.900l-1.029,0.644l-0.644,0.129l-0.257,0.515l1.287,1.545l-0.643,0.258l-0.387,0.385l-1.287,0.129l-0.515,-1.544l-0.387,0.386l-0.772,-0.129l-0.643,-1.030l-1.030,-0.258l-0.773,-0.257l-1.158,0l0,0.644l-0.387,-0.515l0.130,-0.515l0.257,-0.515l-0.128,-0.515l0.385,-0.257l-0.514,-0.387l0,-1.157l1.029,-0.260l1.030,1.031l-0.129,0.516l1.159,0.129l0.129,-0.129l0.772,0.643l1.416,-0.258l1.031,-0.643l1.673,-0.515l0.900,-0.901l1.545,0.257l-0.129,0.257l1.545,0l1.159,0.516l0.900,0.773l1.031,0.771l-0.386,0.387l0.643,1.544l-0.515,0.901l-0.900,-0.257l0.258,-1.287z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PapuaNewGuinea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M845.175,242.742l-0.129,-8.752l4.635,1.803l5.019,1.543l1.932,1.417l1.416,1.417l0.385,1.544l4.505,1.673l0.645,1.416l-2.445,0.258l0.642,1.802l2.317,1.802l1.802,2.832l1.545,-0.128l-0.129,1.287l2.059,0.387l-0.771,0.514l2.832,1.158l-0.258,0.773l-1.803,0.129l-0.641,-0.644l-2.320,-0.258l-2.701,-0.385l-2.061,-1.803l-1.545,-1.416l-1.414,-2.446l-3.478,-1.159l-2.315,0.772l-1.673,0.902l0.386,2.059l-2.189,0.902l-1.416,-0.515l-2.832,-0.129l0,8.755zM876.454,236.822l1.031,0.901l0.258,1.417l-0.771,0.641l-0.518,-1.544l-0.642,-1.028l-1.288,-0.902l-1.545,-1.159l-1.931,-0.773l0.773,-0.643l1.416,0.773l1.030,0.515l1.031,0.642l-1.156,-1.160zM872.851,242.742l-1.545,0.645l-1.287,0.644l-1.545,0l-2.188,-0.772l-1.545,-0.773l0.256,-0.901l2.447,0.388l1.416,-0.131l0.387,-1.287l0.385,-0.127l0.260,1.414l1.543,-0.128l0.773,-0.902l1.543,-1.031l-0.256,-1.544l1.543,-0.128l0.516,0.515l0,1.416l-0.901,1.674l-1.416,0.259l0.386,-0.769zM882.118,241.328l0.776,0.645l1.414,1.673l1.158,0.900l-0.258,0.771l-0.771,0.259l-1.159,-1.030l-1.287,-1.673l-0.515,-2.061l0.386,-0.257l-0.256,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"PapuaNewGuinea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "PapuaNewGuinea\x0a\x09^ 'M845.175,242.742l-0.129,-8.752l4.635,1.803l5.019,1.543l1.932,1.417l1.416,1.417l0.385,1.544l4.505,1.673l0.645,1.416l-2.445,0.258l0.642,1.802l2.317,1.802l1.802,2.832l1.545,-0.128l-0.129,1.287l2.059,0.387l-0.771,0.514l2.832,1.158l-0.258,0.773l-1.803,0.129l-0.641,-0.644l-2.320,-0.258l-2.701,-0.385l-2.061,-1.803l-1.545,-1.416l-1.414,-2.446l-3.478,-1.159l-2.315,0.772l-1.673,0.902l0.386,2.059l-2.189,0.902l-1.416,-0.515l-2.832,-0.129l0,8.755zM876.454,236.822l1.031,0.901l0.258,1.417l-0.771,0.641l-0.518,-1.544l-0.642,-1.028l-1.288,-0.902l-1.545,-1.159l-1.931,-0.773l0.773,-0.643l1.416,0.773l1.030,0.515l1.031,0.642l-1.156,-1.160zM872.851,242.742l-1.545,0.645l-1.287,0.644l-1.545,0l-2.188,-0.772l-1.545,-0.773l0.256,-0.901l2.447,0.388l1.416,-0.131l0.387,-1.287l0.385,-0.127l0.260,1.414l1.543,-0.128l0.773,-0.902l1.543,-1.031l-0.256,-1.544l1.543,-0.128l0.516,0.515l0,1.416l-0.901,1.674l-1.416,0.259l0.386,-0.769zM882.118,241.328l0.776,0.645l1.414,1.673l1.158,0.900l-0.258,0.771l-0.771,0.259l-1.159,-1.030l-1.287,-1.673l-0.515,-2.061l0.386,-0.257l-0.256,-0.773z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Paraguay",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M296.405,286.898l1.030,-3.219l0,-1.414l1.416,-2.447l4.634,-0.772l2.446,0.130l2.575,1.285l0,0.902l0.772,1.415l-0.128,3.736l2.831,0.513l1.160,-0.513l1.801,0.642l0.516,0.903l0.256,2.443l0.259,1.031l1.028,0.129l1.031,-0.516l0.901,0.516l0,1.544l-0.386,1.545l-0.515,1.546l-0.386,2.445l-2.446,2.059l-2.189,0.387l-2.961,-0.387l-2.702,-0.772l2.574,-4.121l-0.386,-1.157l-2.703,-1.030l-3.348,-2.059l-2.188,-0.387l4.892,4.377z";
}, function($ctx1) {$ctx1.fill(self,"Paraguay",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Paraguay\x0a\x09^ 'M296.405,286.898l1.030,-3.219l0,-1.414l1.416,-2.447l4.634,-0.772l2.446,0.130l2.575,1.285l0,0.902l0.772,1.415l-0.128,3.736l2.831,0.513l1.160,-0.513l1.801,0.642l0.516,0.903l0.256,2.443l0.259,1.031l1.028,0.129l1.031,-0.516l0.901,0.516l0,1.544l-0.386,1.545l-0.515,1.546l-0.386,2.445l-2.446,2.059l-2.189,0.387l-2.961,-0.387l-2.702,-0.772l2.574,-4.121l-0.386,-1.157l-2.703,-1.030l-3.348,-2.059l-2.188,-0.387l4.892,4.377z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Peru",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M277.74,274.281l-0.644,1.417l-1.415,0.644l-2.704,-1.543l-0.258,-1.031l-5.278,-2.705l-4.891,-2.959l-2.059,-1.674l-1.159,-2.188l0.515,-0.773l-2.318,-3.605l-2.703,-4.891l-2.446,-5.407l-1.158,-1.288l-0.902,-1.930l-2.058,-1.802l-1.932,-1.028l0.901,-1.161l-1.287,-2.576l0.772,-1.929l2.189,-1.673l0.386,1.030l-0.773,0.643l0,1.029l1.159,-0.257l1.030,0.388l1.159,1.286l1.545,-1.030l0.514,-1.802l1.673,-2.446l3.219,-1.030l2.961,-2.832l0.772,-1.674l-0.386,-2.059l0.772,-0.258l1.802,1.288l0.772,1.287l1.288,0.644l1.544,2.832l2.060,0.257l1.416,-0.644l1.030,0.516l1.673,-0.259l2.060,1.287l-1.802,2.704l0.772,0l1.416,1.417l-2.446,-0.129l-0.386,0.514l-2.188,0.515l-3.089,1.802l-0.129,1.288l-0.772,0.901l0.257,1.416l-1.545,0.773l0,1.158l-0.772,0.516l1.158,2.445l1.546,1.674l-0.644,1.158l1.801,0.129l1.030,1.416l2.317,0l2.317,-1.545l-0.256,4.119l1.287,0.257l1.416,-0.384l2.445,4.248l-0.644,0.901l-0.128,1.931l0,2.317l-1.159,1.287l0.515,1.029l-0.643,0.901l1.158,2.318l1.673,-2.830z";
}, function($ctx1) {$ctx1.fill(self,"Peru",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Peru\x0a\x09^ 'M277.74,274.281l-0.644,1.417l-1.415,0.644l-2.704,-1.543l-0.258,-1.031l-5.278,-2.705l-4.891,-2.959l-2.059,-1.674l-1.159,-2.188l0.515,-0.773l-2.318,-3.605l-2.703,-4.891l-2.446,-5.407l-1.158,-1.288l-0.902,-1.930l-2.058,-1.802l-1.932,-1.028l0.901,-1.161l-1.287,-2.576l0.772,-1.929l2.189,-1.673l0.386,1.030l-0.773,0.643l0,1.029l1.159,-0.257l1.030,0.388l1.159,1.286l1.545,-1.030l0.514,-1.802l1.673,-2.446l3.219,-1.030l2.961,-2.832l0.772,-1.674l-0.386,-2.059l0.772,-0.258l1.802,1.288l0.772,1.287l1.288,0.644l1.544,2.832l2.060,0.257l1.416,-0.644l1.030,0.516l1.673,-0.259l2.060,1.287l-1.802,2.704l0.772,0l1.416,1.417l-2.446,-0.129l-0.386,0.514l-2.188,0.515l-3.089,1.802l-0.129,1.288l-0.772,0.901l0.257,1.416l-1.545,0.773l0,1.158l-0.772,0.516l1.158,2.445l1.546,1.674l-0.644,1.158l1.801,0.129l1.030,1.416l2.317,0l2.317,-1.545l-0.256,4.119l1.287,0.257l1.416,-0.384l2.445,4.248l-0.644,0.901l-0.128,1.931l0,2.317l-1.159,1.287l0.515,1.029l-0.643,0.901l1.158,2.318l1.673,-2.830z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Phillipines",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M790.722,192.797l-1.416,-2.061l2.318,0l1.031,1.030l-0.775,2.316l1.158,1.285zM795.485,200.134l0.645,-0.773l0.256,-1.673l1.545,-0.129l-0.385,1.802l1.930,-2.703l-0.258,2.574l-0.903,0.902l-0.900,1.802l-0.900,0.773l-1.545,-1.932l-0.515,0.643zM805.655,204.253l0.258,1.802l0.256,1.545l-1.029,2.446l-0.901,-2.704l-1.289,1.287l0.903,2.060l-0.774,1.288l-3.217,-1.545l-0.771,-2.059l0.898,-1.287l-1.801,-1.159l-0.773,1.030l-1.285,-0.129l-2.061,1.545l-0.386,-0.773l1.031,-2.317l1.672,-0.773l1.545,-0.901l0.902,1.159l2.061,-0.772l0.384,-1.158l1.930,-0.129l-0.129,-2.061l2.192,1.288l0.255,1.416l-0.129,-0.901zM784.415,201.936l-3.477,2.447l1.288,-1.804l1.929,-1.673l1.676,-1.931l1.285,-2.575l0.518,2.190l-1.803,1.415l1.416,-1.931zM794.841,177.863l-0.514,1.159l0.901,1.931l-0.643,2.188l-1.545,0.901l-0.516,2.188l0.645,2.189l1.416,0.257l1.158,-0.257l3.348,1.415l-0.258,1.417l0.900,0.772l-0.257,1.159l-2.061,-1.287l-1.029,-1.416l-0.643,1.031l-1.803,-1.676l-2.445,0.387l-1.287,-0.515l0.127,-1.157l0.775,-0.645l-0.775,-0.643l-0.256,0.901l-1.416,-1.545l-0.387,-1.159l-0.127,-2.575l1.157,0.902l0.257,-4.248l0.901,-2.447l1.545,0l1.674,0.773l0.902,-0.643l-0.256,-0.643zM793.94,196.271l-0.386,-1.286l1.674,0.771l1.673,0l0,1.160l-1.287,1.157l-1.674,0.773l-0.128,-1.287l-0.128,1.288zM803.337,194.212l0.773,2.961l-2.060,-0.644l0,0.901l0.644,1.674l-1.287,0.514l-0.129,-1.802l-0.773,-0.128l-0.385,-1.674l1.545,0.257l0,-1.029l-1.676,-2.060l2.576,0l-0.772,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Phillipines",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Phillipines\x0a\x09^ 'M790.722,192.797l-1.416,-2.061l2.318,0l1.031,1.030l-0.775,2.316l1.158,1.285zM795.485,200.134l0.645,-0.773l0.256,-1.673l1.545,-0.129l-0.385,1.802l1.930,-2.703l-0.258,2.574l-0.903,0.902l-0.900,1.802l-0.900,0.773l-1.545,-1.932l-0.515,0.643zM805.655,204.253l0.258,1.802l0.256,1.545l-1.029,2.446l-0.901,-2.704l-1.289,1.287l0.903,2.060l-0.774,1.288l-3.217,-1.545l-0.771,-2.059l0.898,-1.287l-1.801,-1.159l-0.773,1.030l-1.285,-0.129l-2.061,1.545l-0.386,-0.773l1.031,-2.317l1.672,-0.773l1.545,-0.901l0.902,1.159l2.061,-0.772l0.384,-1.158l1.930,-0.129l-0.129,-2.061l2.192,1.288l0.255,1.416l-0.129,-0.901zM784.415,201.936l-3.477,2.447l1.288,-1.804l1.929,-1.673l1.676,-1.931l1.285,-2.575l0.518,2.190l-1.803,1.415l1.416,-1.931zM794.841,177.863l-0.514,1.159l0.901,1.931l-0.643,2.188l-1.545,0.901l-0.516,2.188l0.645,2.189l1.416,0.257l1.158,-0.257l3.348,1.415l-0.258,1.417l0.900,0.772l-0.257,1.159l-2.061,-1.287l-1.029,-1.416l-0.643,1.031l-1.803,-1.676l-2.445,0.387l-1.287,-0.515l0.127,-1.157l0.775,-0.645l-0.775,-0.643l-0.256,0.901l-1.416,-1.545l-0.387,-1.159l-0.127,-2.575l1.157,0.902l0.257,-4.248l0.901,-2.447l1.545,0l1.674,0.773l0.902,-0.643l-0.256,-0.643zM793.94,196.271l-0.386,-1.286l1.674,0.771l1.673,0l0,1.160l-1.287,1.157l-1.674,0.773l-0.128,-1.287l-0.128,1.288zM803.337,194.212l0.773,2.961l-2.060,-0.644l0,0.901l0.644,1.674l-1.287,0.514l-0.129,-1.802l-0.773,-0.128l-0.385,-1.674l1.545,0.257l0,-1.029l-1.676,-2.060l2.576,0l-0.772,-1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Poland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.718,89.295l-1.158,-1.672l0.257,-1.030l-0.644,-1.417l-1.029,-0.901l0.770,-0.773l-0.642,-1.287l1.802,-0.901l4.248,-1.158l3.347,-0.901l2.703,0.387l0.258,0.643l2.574,0.129l3.348,0.256l4.890,0l1.417,0.259l0.644,0.772l0.129,1.288l0.771,1.029l0,1.029l-1.672,0.516l0.772,1.287l0.129,1.159l1.286,2.317l-0.257,0.773l-1.287,0.385l-2.447,2.189l0.646,1.287l-0.515,-0.257l-2.577,-1.030l-1.929,0.386l-1.289,-0.257l-1.672,0.644l-1.289,-1.030l-1.158,0.386l-0.127,-0.129l-1.289,-1.416l-1.930,-0.129l-0.257,-0.772l-1.802,-0.386l-0.517,0.773l-1.414,-0.644l0.129,-0.645l-1.932,-0.256l1.287,0.903z";
}, function($ctx1) {$ctx1.fill(self,"Poland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Poland\x0a\x09^ 'M505.718,89.295l-1.158,-1.672l0.257,-1.030l-0.644,-1.417l-1.029,-0.901l0.770,-0.773l-0.642,-1.287l1.802,-0.901l4.248,-1.158l3.347,-0.901l2.703,0.387l0.258,0.643l2.574,0.129l3.348,0.256l4.890,0l1.417,0.259l0.644,0.772l0.129,1.288l0.771,1.029l0,1.029l-1.672,0.516l0.772,1.287l0.129,1.159l1.286,2.317l-0.257,0.773l-1.287,0.385l-2.447,2.189l0.646,1.287l-0.515,-0.257l-2.577,-1.030l-1.929,0.386l-1.289,-0.257l-1.672,0.644l-1.289,-1.030l-1.158,0.386l-0.127,-0.129l-1.289,-1.416l-1.930,-0.129l-0.257,-0.772l-1.802,-0.386l-0.517,0.773l-1.414,-0.644l0.129,-0.645l-1.932,-0.256l1.287,0.903z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Portugal",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l1.031,-0.643l1.158,-0.387l0.643,1.287l1.545,0l0.514,-0.385l1.545,0.128l0.773,1.416l-1.287,0.643l0,2.189l-0.514,0.387l0,1.159l-1.160,0.256l1.030,1.674l-0.772,1.674l0.902,0.900l-0.258,0.644l-1.030,1.030l0.257,0.902l-1.158,0.772l-1.416,-0.387l-1.416,0.258l0.386,-2.059l-0.129,-1.674l-1.288,-0.258l-0.643,-1.030l0.259,-1.802l1.028,-0.900l0.259,-1.159l0.514,-1.545l0,-1.159l-0.644,-1.030l0.129,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Portugal",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Portugal\x0a\x09^ 'M440.838,114.141l1.031,-0.643l1.158,-0.387l0.643,1.287l1.545,0l0.514,-0.385l1.545,0.128l0.773,1.416l-1.287,0.643l0,2.189l-0.514,0.387l0,1.159l-1.160,0.256l1.030,1.674l-0.772,1.674l0.902,0.900l-0.258,0.644l-1.030,1.030l0.257,0.902l-1.158,0.772l-1.416,-0.387l-1.416,0.258l0.386,-2.059l-0.129,-1.674l-1.288,-0.258l-0.643,-1.030l0.259,-1.802l1.028,-0.900l0.259,-1.159l0.514,-1.545l0,-1.159l-0.644,-1.030l0.129,0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PuertoRico",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M286.622,177.09l1.416,0.258l0.516,0.515l-0.644,0.643l-2.060,0l-1.545,0.129l-0.258,-1.158l0.387,-0.387l-2.188,0z";
}, function($ctx1) {$ctx1.fill(self,"PuertoRico",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "PuertoRico\x0a\x09^ 'M286.622,177.09l1.416,0.258l0.516,0.515l-0.644,0.643l-2.060,0l-1.545,0.129l-0.258,-1.158l0.387,-0.387l-2.188,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Qatar",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M602.136,160.227l-0.257,-1.931l0.770,-1.416l0.772,-0.257l0.775,0.901l0,1.545l-0.517,1.544l-0.772,0.258l0.771,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Qatar",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Qatar\x0a\x09^ 'M602.136,160.227l-0.257,-1.931l0.770,-1.416l0.772,-0.257l0.775,0.901l0,1.545l-0.517,1.544l-0.772,0.258l0.771,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofMacedonia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l0.385,0l0.129,-0.515l1.545,-0.515l1.544,-0.257l1.288,0l1.287,0.900l0.258,1.674l-0.514,0.130l-0.515,0.513l-1.417,-0.128l-1.029,0.643l-1.804,0.258l-1.029,-0.643l-0.385,-1.160l-0.257,0.900z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofMacedonia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "RepublicofMacedonia\x0a\x09^ 'M520.651,114.27l0.385,0l0.129,-0.515l1.545,-0.515l1.544,-0.257l1.288,0l1.287,0.900l0.258,1.674l-0.514,0.130l-0.515,0.513l-1.417,-0.128l-1.029,0.643l-1.804,0.258l-1.029,-0.643l-0.385,-1.160l-0.257,0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofTurkey",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M535.712,120.707l2.961,-2.575l4.247,-0.129l1.030,-2.060l5.150,0.387l3.217,-1.803l3.219,-0.772l4.376,0l4.765,1.932l3.860,1.028l3.089,-0.515l2.317,0.259l3.218,-1.417l2.834,-0.128l2.702,1.416l0.386,0.901l-0.256,1.288l2.059,0.643l1.029,0.773l-1.802,0.772l0.773,3.089l-0.516,0.901l1.416,2.189l-1.287,0.385l-0.899,-0.643l-3.091,-0.385l-1.158,0.385l-3.090,0.515l-1.416,-0.128l-3.090,1.028l-2.317,0l-1.416,-0.514l-2.960,0.772l-0.902,-0.514l-0.129,1.545l-0.643,0.515l-0.772,0.643l-1.029,-1.287l1.029,-0.902l-1.674,0.129l-2.188,-0.514l-1.803,1.544l-4.118,0.257l-2.189,-1.416l-2.961,-0.128l-0.644,1.159l-1.802,0.256l-2.574,-1.415l-2.961,0l-1.545,-2.574l-2.058,-1.545l1.286,-2.060l1.673,1.287zM535.581,114.27l2.705,-0.772l2.317,0.257l0.386,1.030l2.317,0.902l-0.514,0.643l-3.219,0.257l-1.031,0.772l-2.314,1.417l-0.774,-1.159l0,-0.644l0.645,-0.258l0.771,-1.673l1.289,0.772z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofTurkey",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "RepublicofTurkey\x0a\x09^ 'M535.712,120.707l2.961,-2.575l4.247,-0.129l1.030,-2.060l5.150,0.387l3.217,-1.803l3.219,-0.772l4.376,0l4.765,1.932l3.860,1.028l3.089,-0.515l2.317,0.259l3.218,-1.417l2.834,-0.128l2.702,1.416l0.386,0.901l-0.256,1.288l2.059,0.643l1.029,0.773l-1.802,0.772l0.773,3.089l-0.516,0.901l1.416,2.189l-1.287,0.385l-0.899,-0.643l-3.091,-0.385l-1.158,0.385l-3.090,0.515l-1.416,-0.128l-3.090,1.028l-2.317,0l-1.416,-0.514l-2.960,0.772l-0.902,-0.514l-0.129,1.545l-0.643,0.515l-0.772,0.643l-1.029,-1.287l1.029,-0.902l-1.674,0.129l-2.188,-0.514l-1.803,1.544l-4.118,0.257l-2.189,-1.416l-2.961,-0.128l-0.644,1.159l-1.802,0.256l-2.574,-1.415l-2.961,0l-1.545,-2.574l-2.058,-1.545l1.286,-2.060l1.673,1.287zM535.581,114.27l2.705,-0.772l2.317,0.257l0.386,1.030l2.317,0.902l-0.514,0.643l-3.219,0.257l-1.031,0.772l-2.314,1.417l-0.774,-1.159l0,-0.644l0.645,-0.258l0.771,-1.673l1.289,0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Romania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,97.921l1.159,-0.515l1.674,0.258l1.673,0l1.289,0.772l0.899,-0.515l1.931,-0.257l0.773,-0.644l1.158,0l0.774,0.258l0.770,0.901l0.902,1.029l1.545,1.674l0.128,1.158l-0.257,1.159l0.387,1.287l1.287,0.386l1.287,-0.386l1.158,0.515l0,0.645l-1.287,0.643l-0.772,-0.258l-0.773,3.219l-1.544,-0.258l-1.930,-1.030l-3.219,0.644l-1.287,0.644l-3.990,-0.130l-2.059,-0.386l-1.031,0.129l-0.773,-1.030l-0.513,-0.515l0.641,-0.386l-0.771,-0.386l-0.774,0.644l-1.543,-0.773l-0.257,-1.158l-1.674,-0.643l-0.258,-0.902l-1.416,-1.030l2.059,-0.515l1.673,-1.802l1.290,-1.803l-1.671,0.643z";
}, function($ctx1) {$ctx1.fill(self,"Romania",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Romania\x0a\x09^ 'M526.442,97.921l1.159,-0.515l1.674,0.258l1.673,0l1.289,0.772l0.899,-0.515l1.931,-0.257l0.773,-0.644l1.158,0l0.774,0.258l0.770,0.901l0.902,1.029l1.545,1.674l0.128,1.158l-0.257,1.159l0.387,1.287l1.287,0.386l1.287,-0.386l1.158,0.515l0,0.645l-1.287,0.643l-0.772,-0.258l-0.773,3.219l-1.544,-0.258l-1.930,-1.030l-3.219,0.644l-1.287,0.644l-3.990,-0.130l-2.059,-0.386l-1.031,0.129l-0.773,-1.030l-0.513,-0.515l0.641,-0.386l-0.771,-0.386l-0.774,0.644l-1.543,-0.773l-0.257,-1.158l-1.674,-0.643l-0.258,-0.902l-1.416,-1.030l2.059,-0.515l1.673,-1.802l1.290,-1.803l-1.671,0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Russia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M950.089,36.129l-0.258,0l-0.516,-1.801l0.774,-0.772l0.127,-0.129l6.308,1.158l6.435,-1.544zM586.045,9.869l5.276,-0.515l4.121,0l0.514,0.773l1.545,-0.644l2.574,-0.515l3.990,0.644l-1.028,0.386l-3.605,0.385l-2.447,0.130l-0.384,0.514l-3.221,0.386l-2.830,-0.643l1.545,-0.772l6.050,0.129zM950.089,51.964l-3.992,1.802l2.574,3.219l-0.641,2.188l-5.539,-0.773l-7.336,1.674l-6.177,2.703l-4.764,2.703l-3.990,-1.673l-7.725,1.803l-6.693,0.128l-4.377,4.506l3.088,0.772l0,4.634l-3.475,1.545l0.645,1.803l-4.506,1.544l-1.159,3.219l-4.250,1.158l-0.513,1.931l-4.119,3.089l-1.674,-6.178l-1.545,-5.922l1.545,-4.249l2.060,-1.157l0.127,-1.287l3.864,-0.773l5.148,-3.219l4.506,-2.832l5.019,-2.060l2.061,-3.732l-3.219,0.128l-1.672,2.317l-6.695,2.446l-2.187,-3.089l-7.081,0.901l-6.693,4.247l1.803,1.288l-6.309,1.416l-10.041,-1.416l-11.715,0l-6.564,1.159l-8.369,5.278l-9.781,5.665l3.861,0.643l0.771,2.317l3.092,0.385l1.672,-1.545l2.961,0.387l3.475,2.060l0.515,3.089l-1.543,2.189l-0.902,2.575l-1.031,5.535l-4.120,3.862l-0.900,1.802l-3.603,3.219l-3.735,3.089l-1.674,1.545l-3.603,1.674l-1.674,0l-1.674,-1.288l-3.601,1.931l-0.518,0.901l-0.385,-0.514l0,-1.288l1.416,-0.129l0.385,-3.219l-0.771,-2.317l2.318,-0.901l3.346,0.516l1.802,-2.704l0.901,-2.832l1.031,-1.029l1.414,-2.448l-4.375,0.774l-2.447,1.030l-3.990,0l-1.159,-2.447l-3.218,-1.930l-4.635,-0.902l-1.029,-2.574l-0.901,-1.674l-1.031,-1.158l-1.674,-2.703l-2.316,-1.030l-4.119,-0.772l-3.475,0l-3.350,0.513l-2.316,1.417l1.545,0.644l0,1.416l-1.414,0.901l-2.447,2.832l0,1.159l-3.862,1.672l-3.219,-0.900l-3.218,0.128l-1.414,-0.900l-1.545,-0.258l-3.991,1.930l-3.476,0.387l-2.574,0.644l-3.348,-0.386l-2.445,0l-1.674,-1.417l-2.701,-1.287l-2.705,-0.257l-3.348,0.257l-2.574,0.515l-3.862,-1.158l-0.515,-1.931l-3.090,-0.773l-2.445,-0.257l-3.090,-1.158l-2.703,2.832l1.029,1.545l-2.574,1.931l-3.862,-0.644l-2.703,-0.129l-1.802,-1.287l-2.832,0l-2.317,-0.901l-4.121,1.287l-5.148,2.317l-2.832,0.515l-1.030,0.258l-1.414,-1.675l-3.478,0.387l-1.158,-1.159l-1.930,-0.515l-1.289,-1.545l-1.545,-0.514l-3.860,0.644l-3.605,-1.546l-1.545,1.416l-5.922,-6.822l-3.474,-2.060l1.029,-0.901l-6.822,2.575l-2.577,0.128l0.258,-1.416l-3.474,-0.901l-2.832,0.645l-0.901,-2.833l-4.763,-0.644l-2.446,1.160l-6.693,1.028l-1.418,0.644l-10.039,0.901l-1.158,0.901l1.929,1.931l-2.575,0.644l0.515,0.772l-2.702,1.288l4.376,1.931l-0.644,1.159l-3.732,0l-0.773,0.772l-3.474,-1.416l-4.250,0l-2.961,1.158l-3.088,-1.029l-5.922,-1.931l-4.248,0.127l-5.535,2.962l-0.387,1.931l-2.705,-1.544l-2.186,2.960l0.772,0.515l-1.545,2.060l2.317,1.802l1.931,-0.129l1.803,1.803l-0.387,1.416l1.416,0.514l-1.287,1.546l-2.575,0.386l-2.704,2.831l2.445,2.576l-0.255,1.801l2.960,3.218l-1.545,1.030l-0.516,0.644l-1.158,-0.129l-1.931,-1.673l-0.643,0l-1.803,-0.644l-0.772,-1.158l-2.446,-0.516l-1.671,0.387l-0.517,-0.515l-3.604,-1.287l-3.990,-0.386l-2.318,-0.516l-0.256,0.387l-3.477,-2.318l-3.089,-1.029l-2.318,-1.545l1.931,-0.514l2.317,-2.189l-1.544,-1.030l3.991,-1.159l-0.129,-0.643l-2.446,0.515l0.128,-1.159l1.417,-0.772l2.575,-0.258l0.384,-0.901l-0.513,-1.417l1.029,-1.415l0,-0.772l-3.990,-0.902l-1.545,0l-1.674,-1.287l-2.059,0.386l-3.476,-0.901l0.129,-0.514l-1.030,-1.159l-2.058,-0.129l-0.258,-0.901l0.643,-0.515l-1.673,-1.544l-2.833,0.256l-0.772,-0.128l-0.773,0.644l-0.901,-0.129l-0.643,-1.674l-0.644,-0.901l0.516,-0.257l2.187,0.128l1.030,-0.643l-0.772,-0.772l-1.803,-0.387l0.129,-0.515l-1.160,-0.515l-1.672,-1.802l0.645,-0.644l-0.258,-1.287l-2.703,-0.643l-1.416,0.385l-0.387,-0.772l-2.833,-0.644l-0.901,-1.545l-0.129,-1.287l-1.286,-0.644l1.158,-0.901l-0.900,-2.446l1.930,-1.544l-0.386,-0.515l3.089,-1.545l-2.832,-1.287l5.792,-3.347l2.448,-1.545l1.030,-1.416l-3.991,-1.802l1.157,-1.802l-2.445,-2.060l1.801,-2.318l-3.089,-2.960l2.448,-2.060l-4.119,-1.801l0.384,-1.932l2.189,-0.257l4.507,-1.031l2.830,-0.900l4.378,1.545l7.466,0.643l10.169,3.089l2.059,1.288l0.129,1.802l-7.336,2.061l-12.102,-2.061l-1.929,0.386l4.504,3.219l0.772,2.060l2.961,1.544l3.218,-2.703l7.596,1.287l0,-2.960l7.465,-1.803l3.992,-0.901l-2.190,-1.674l-0.643,-3.218l7.466,0.772l-1.801,3.348l4.632,-0.129l7.210,-2.703l9.783,-2.318l2.060,1.417l9.397,-1.546l6.695,0.902l0.643,-3.219l7.853,0.772l10.684,2.832l1.673,-1.801l-3.991,-4.507l4.505,-2.702l2.190,-3.090l8.369,0.386l0.769,4.763l0.260,5.536l1.672,1.674l-0.516,1.802l-4.119,2.832l2.832,0.386l5.151,-2.961l1.029,-3.991l-2.832,-1.159l-1.029,-5.664l3.345,-3.346l2.190,1.802l0.644,2.060l1.672,-1.288l3.477,-0.901l5.535,-0.128l5.019,1.544l-2.445,-2.575l-0.256,-2.574l4.760,-0.514l6.437,0.128l5.793,-0.387l-2.189,-1.415l3.219,-1.674l3.090,-0.129l5.150,-1.288l0.385,-0.128l1.029,0l1.418,0l1.545,-0.128l1.416,-0.129l1.027,0l0.389,0l0.900,-0.773l7.080,-0.257l2.190,0.643l6.049,-1.415l4.890,0l0.774,-1.159l2.574,-1.159l6.309,-1.030l4.632,0.772l-3.603,0.644l6.051,0.515l0.771,1.288l2.447,-0.644l9.782,-0.257l5.023,1.673l-2.318,3.089l-7.082,1.546l1.031,1.544l6.180,-0.257l2.961,1.030l11.968,0l2.705,1.544l10.299,0.129l0.387,-1.673l16.603,1.673l0.518,4.892l4.246,1.030l8.111,-1.545l15.834,-0.515l1.930,-3.476l23.170,1.802l2.320,1.545l7.078,2.059l14.416,-0.385l6.438,3.733l10.170,-0.128l9.269,-0.259l6.178,2.447l0.774,-3.219l13.257,0.515l8.496,1.159l3.735,1.158l6.564,2.059l7.209,2.448l8.110,1.029l5.277,2.575l-6.178,1.416l-0.386,2.703l-4.506,0.129l-5.278,-2.317l-5.150,-0.644l-3.475,-1.674l-1.802,2.961l0.385,-0.129zM518.204,80.414l0.645,-1.288l3.733,-0.772l2.702,0.386l1.289,0.515l-0.259,0.643l0.128,0.772l-4.890,0l3.348,0.256zM861.522,24.158l5.666,0.515l-0.128,1.416l-7.725,-1.416l-2.187,0.515zM836.034,22.871l5.279,-0.387l10.426,0.772l1.803,2.189l-9.527,-0.128l-3.989,1.030l-5.021,-1.931l-1.029,1.545zM742.835,13.473l0.516,0.772l5.019,2.575l-14.287,0.387l3.604,-3.090l-5.148,0.644zM718.763,9.226l10.556,0.386l5.922,3.346l-7.853,1.674l-11.328,-1.030l-0.127,-2.446l-2.830,1.930zM609.345,28.277l6.435,-2.317l-0.643,-1.287l6.050,-1.417l8.882,-1.673l8.882,-0.514l4.634,-1.030l5.279,-0.387l1.801,1.159l-1.801,0.772l-9.526,1.417l-8.239,1.287l-8.367,2.445l-3.993,2.704l-4.246,2.574l0.644,2.189l5.149,2.317l-1.672,0.129l-8.756,-0.257l-0.771,-1.287l-4.891,-0.644l-0.386,-1.545l2.830,-0.515l-0.127,-1.417l5.277,-2.316l2.445,0.387zM850.194,82.344l0.901,2.575l0,2.575l1.158,2.832l2.705,4.763l-3.990,-0.901l-1.674,3.862l2.574,2.703l0,1.931l-2.058,-1.674l-1.803,2.189l-0.516,-2.317l0.258,-2.575l-0.258,-2.960l0.645,-2.061l0.127,-3.604l-1.545,-2.575l0.131,-3.733l2.574,-1.287l-1.160,-1.158l1.289,-0.387l-0.642,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"Russia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Russia\x0a\x09^ 'M950.089,36.129l-0.258,0l-0.516,-1.801l0.774,-0.772l0.127,-0.129l6.308,1.158l6.435,-1.544zM586.045,9.869l5.276,-0.515l4.121,0l0.514,0.773l1.545,-0.644l2.574,-0.515l3.990,0.644l-1.028,0.386l-3.605,0.385l-2.447,0.130l-0.384,0.514l-3.221,0.386l-2.830,-0.643l1.545,-0.772l6.050,0.129zM950.089,51.964l-3.992,1.802l2.574,3.219l-0.641,2.188l-5.539,-0.773l-7.336,1.674l-6.177,2.703l-4.764,2.703l-3.990,-1.673l-7.725,1.803l-6.693,0.128l-4.377,4.506l3.088,0.772l0,4.634l-3.475,1.545l0.645,1.803l-4.506,1.544l-1.159,3.219l-4.250,1.158l-0.513,1.931l-4.119,3.089l-1.674,-6.178l-1.545,-5.922l1.545,-4.249l2.060,-1.157l0.127,-1.287l3.864,-0.773l5.148,-3.219l4.506,-2.832l5.019,-2.060l2.061,-3.732l-3.219,0.128l-1.672,2.317l-6.695,2.446l-2.187,-3.089l-7.081,0.901l-6.693,4.247l1.803,1.288l-6.309,1.416l-10.041,-1.416l-11.715,0l-6.564,1.159l-8.369,5.278l-9.781,5.665l3.861,0.643l0.771,2.317l3.092,0.385l1.672,-1.545l2.961,0.387l3.475,2.060l0.515,3.089l-1.543,2.189l-0.902,2.575l-1.031,5.535l-4.120,3.862l-0.900,1.802l-3.603,3.219l-3.735,3.089l-1.674,1.545l-3.603,1.674l-1.674,0l-1.674,-1.288l-3.601,1.931l-0.518,0.901l-0.385,-0.514l0,-1.288l1.416,-0.129l0.385,-3.219l-0.771,-2.317l2.318,-0.901l3.346,0.516l1.802,-2.704l0.901,-2.832l1.031,-1.029l1.414,-2.448l-4.375,0.774l-2.447,1.030l-3.990,0l-1.159,-2.447l-3.218,-1.930l-4.635,-0.902l-1.029,-2.574l-0.901,-1.674l-1.031,-1.158l-1.674,-2.703l-2.316,-1.030l-4.119,-0.772l-3.475,0l-3.350,0.513l-2.316,1.417l1.545,0.644l0,1.416l-1.414,0.901l-2.447,2.832l0,1.159l-3.862,1.672l-3.219,-0.900l-3.218,0.128l-1.414,-0.900l-1.545,-0.258l-3.991,1.930l-3.476,0.387l-2.574,0.644l-3.348,-0.386l-2.445,0l-1.674,-1.417l-2.701,-1.287l-2.705,-0.257l-3.348,0.257l-2.574,0.515l-3.862,-1.158l-0.515,-1.931l-3.090,-0.773l-2.445,-0.257l-3.090,-1.158l-2.703,2.832l1.029,1.545l-2.574,1.931l-3.862,-0.644l-2.703,-0.129l-1.802,-1.287l-2.832,0l-2.317,-0.901l-4.121,1.287l-5.148,2.317l-2.832,0.515l-1.030,0.258l-1.414,-1.675l-3.478,0.387l-1.158,-1.159l-1.930,-0.515l-1.289,-1.545l-1.545,-0.514l-3.860,0.644l-3.605,-1.546l-1.545,1.416l-5.922,-6.822l-3.474,-2.060l1.029,-0.901l-6.822,2.575l-2.577,0.128l0.258,-1.416l-3.474,-0.901l-2.832,0.645l-0.901,-2.833l-4.763,-0.644l-2.446,1.160l-6.693,1.028l-1.418,0.644l-10.039,0.901l-1.158,0.901l1.929,1.931l-2.575,0.644l0.515,0.772l-2.702,1.288l4.376,1.931l-0.644,1.159l-3.732,0l-0.773,0.772l-3.474,-1.416l-4.250,0l-2.961,1.158l-3.088,-1.029l-5.922,-1.931l-4.248,0.127l-5.535,2.962l-0.387,1.931l-2.705,-1.544l-2.186,2.960l0.772,0.515l-1.545,2.060l2.317,1.802l1.931,-0.129l1.803,1.803l-0.387,1.416l1.416,0.514l-1.287,1.546l-2.575,0.386l-2.704,2.831l2.445,2.576l-0.255,1.801l2.960,3.218l-1.545,1.030l-0.516,0.644l-1.158,-0.129l-1.931,-1.673l-0.643,0l-1.803,-0.644l-0.772,-1.158l-2.446,-0.516l-1.671,0.387l-0.517,-0.515l-3.604,-1.287l-3.990,-0.386l-2.318,-0.516l-0.256,0.387l-3.477,-2.318l-3.089,-1.029l-2.318,-1.545l1.931,-0.514l2.317,-2.189l-1.544,-1.030l3.991,-1.159l-0.129,-0.643l-2.446,0.515l0.128,-1.159l1.417,-0.772l2.575,-0.258l0.384,-0.901l-0.513,-1.417l1.029,-1.415l0,-0.772l-3.990,-0.902l-1.545,0l-1.674,-1.287l-2.059,0.386l-3.476,-0.901l0.129,-0.514l-1.030,-1.159l-2.058,-0.129l-0.258,-0.901l0.643,-0.515l-1.673,-1.544l-2.833,0.256l-0.772,-0.128l-0.773,0.644l-0.901,-0.129l-0.643,-1.674l-0.644,-0.901l0.516,-0.257l2.187,0.128l1.030,-0.643l-0.772,-0.772l-1.803,-0.387l0.129,-0.515l-1.160,-0.515l-1.672,-1.802l0.645,-0.644l-0.258,-1.287l-2.703,-0.643l-1.416,0.385l-0.387,-0.772l-2.833,-0.644l-0.901,-1.545l-0.129,-1.287l-1.286,-0.644l1.158,-0.901l-0.900,-2.446l1.930,-1.544l-0.386,-0.515l3.089,-1.545l-2.832,-1.287l5.792,-3.347l2.448,-1.545l1.030,-1.416l-3.991,-1.802l1.157,-1.802l-2.445,-2.060l1.801,-2.318l-3.089,-2.960l2.448,-2.060l-4.119,-1.801l0.384,-1.932l2.189,-0.257l4.507,-1.031l2.830,-0.900l4.378,1.545l7.466,0.643l10.169,3.089l2.059,1.288l0.129,1.802l-7.336,2.061l-12.102,-2.061l-1.929,0.386l4.504,3.219l0.772,2.060l2.961,1.544l3.218,-2.703l7.596,1.287l0,-2.960l7.465,-1.803l3.992,-0.901l-2.190,-1.674l-0.643,-3.218l7.466,0.772l-1.801,3.348l4.632,-0.129l7.210,-2.703l9.783,-2.318l2.060,1.417l9.397,-1.546l6.695,0.902l0.643,-3.219l7.853,0.772l10.684,2.832l1.673,-1.801l-3.991,-4.507l4.505,-2.702l2.190,-3.090l8.369,0.386l0.769,4.763l0.260,5.536l1.672,1.674l-0.516,1.802l-4.119,2.832l2.832,0.386l5.151,-2.961l1.029,-3.991l-2.832,-1.159l-1.029,-5.664l3.345,-3.346l2.190,1.802l0.644,2.060l1.672,-1.288l3.477,-0.901l5.535,-0.128l5.019,1.544l-2.445,-2.575l-0.256,-2.574l4.760,-0.514l6.437,0.128l5.793,-0.387l-2.189,-1.415l3.219,-1.674l3.090,-0.129l5.150,-1.288l0.385,-0.128l1.029,0l1.418,0l1.545,-0.128l1.416,-0.129l1.027,0l0.389,0l0.900,-0.773l7.080,-0.257l2.190,0.643l6.049,-1.415l4.890,0l0.774,-1.159l2.574,-1.159l6.309,-1.030l4.632,0.772l-3.603,0.644l6.051,0.515l0.771,1.288l2.447,-0.644l9.782,-0.257l5.023,1.673l-2.318,3.089l-7.082,1.546l1.031,1.544l6.180,-0.257l2.961,1.030l11.968,0l2.705,1.544l10.299,0.129l0.387,-1.673l16.603,1.673l0.518,4.892l4.246,1.030l8.111,-1.545l15.834,-0.515l1.930,-3.476l23.170,1.802l2.320,1.545l7.078,2.059l14.416,-0.385l6.438,3.733l10.170,-0.128l9.269,-0.259l6.178,2.447l0.774,-3.219l13.257,0.515l8.496,1.159l3.735,1.158l6.564,2.059l7.209,2.448l8.110,1.029l5.277,2.575l-6.178,1.416l-0.386,2.703l-4.506,0.129l-5.278,-2.317l-5.150,-0.644l-3.475,-1.674l-1.802,2.961l0.385,-0.129zM518.204,80.414l0.645,-1.288l3.733,-0.772l2.702,0.386l1.289,0.515l-0.259,0.643l0.128,0.772l-4.890,0l3.348,0.256zM861.522,24.158l5.666,0.515l-0.128,1.416l-7.725,-1.416l-2.187,0.515zM836.034,22.871l5.279,-0.387l10.426,0.772l1.803,2.189l-9.527,-0.128l-3.989,1.030l-5.021,-1.931l-1.029,1.545zM742.835,13.473l0.516,0.772l5.019,2.575l-14.287,0.387l3.604,-3.090l-5.148,0.644zM718.763,9.226l10.556,0.386l5.922,3.346l-7.853,1.674l-11.328,-1.030l-0.127,-2.446l-2.830,1.930zM609.345,28.277l6.435,-2.317l-0.643,-1.287l6.050,-1.417l8.882,-1.673l8.882,-0.514l4.634,-1.030l5.279,-0.387l1.801,1.159l-1.801,0.772l-9.526,1.417l-8.239,1.287l-8.367,2.445l-3.993,2.704l-4.246,2.574l0.644,2.189l5.149,2.317l-1.672,0.129l-8.756,-0.257l-0.771,-1.287l-4.891,-0.644l-0.386,-1.545l2.830,-0.515l-0.127,-1.417l5.277,-2.316l2.445,0.387zM850.194,82.344l0.901,2.575l0,2.575l1.158,2.832l2.705,4.763l-3.990,-0.901l-1.674,3.862l2.574,2.703l0,1.931l-2.058,-1.674l-1.803,2.189l-0.516,-2.317l0.258,-2.575l-0.258,-2.960l0.645,-2.061l0.127,-3.604l-1.545,-2.575l0.131,-3.733l2.574,-1.287l-1.160,-1.158l1.289,-0.387l-0.642,-1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Rwanda",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Rwanda",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Rwanda\x0a\x09^ 'M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SaudiArabia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M580.509,182.883l-0.387,-1.157l-0.771,-0.773l-0.259,-1.031l-1.415,-1.029l-1.416,-2.188l-0.772,-2.189l-1.802,-1.931l-1.289,-0.386l-1.672,-2.574l-0.386,-1.932l0.128,-1.544l-1.545,-2.961l-1.287,-1.030l-1.416,-0.644l-0.902,-1.545l0.130,-0.514l-0.771,-1.417l-0.774,-0.643l-1.030,-2.060l-1.674,-2.059l-1.287,-1.931l-1.417,0l0.387,-1.417l0.131,-0.901l0.384,-1.158l2.960,0.514l1.160,-0.900l0.643,-0.901l2.060,-0.386l0.515,-0.902l0.901,-0.515l-2.703,-2.703l5.407,-1.287l0.514,-0.516l3.218,0.773l3.990,1.931l7.596,5.406l5.020,0.258l2.447,0.257l0.644,1.288l1.930,-0.129l1.030,2.317l1.288,0.644l0.513,0.902l1.803,1.158l0.127,1.159l-0.256,0.900l0.387,0.901l0.772,0.644l0.386,0.901l0.387,0.644l0.771,0.644l0.772,-0.258l0.517,1.030l0.127,0.643l1.031,2.704l8.110,1.416l0.514,-0.644l1.159,1.931l-1.802,5.408l-7.981,2.702l-7.853,1.030l-2.445,1.159l-1.931,2.832l-1.287,0.515l-0.644,-0.901l-1.031,0.128l-2.574,-0.257l-0.514,-0.257l-3.090,0l-0.773,0.257l-1.158,-0.644l-0.645,1.288l0.258,1.158l1.158,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"SaudiArabia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SaudiArabia\x0a\x09^ 'M580.509,182.883l-0.387,-1.157l-0.771,-0.773l-0.259,-1.031l-1.415,-1.029l-1.416,-2.188l-0.772,-2.189l-1.802,-1.931l-1.289,-0.386l-1.672,-2.574l-0.386,-1.932l0.128,-1.544l-1.545,-2.961l-1.287,-1.030l-1.416,-0.644l-0.902,-1.545l0.130,-0.514l-0.771,-1.417l-0.774,-0.643l-1.030,-2.060l-1.674,-2.059l-1.287,-1.931l-1.417,0l0.387,-1.417l0.131,-0.901l0.384,-1.158l2.960,0.514l1.160,-0.900l0.643,-0.901l2.060,-0.386l0.515,-0.902l0.901,-0.515l-2.703,-2.703l5.407,-1.287l0.514,-0.516l3.218,0.773l3.990,1.931l7.596,5.406l5.020,0.258l2.447,0.257l0.644,1.288l1.930,-0.129l1.030,2.317l1.288,0.644l0.513,0.902l1.803,1.158l0.127,1.159l-0.256,0.900l0.387,0.901l0.772,0.644l0.386,0.901l0.387,0.644l0.771,0.644l0.772,-0.258l0.517,1.030l0.127,0.643l1.031,2.704l8.110,1.416l0.514,-0.644l1.159,1.931l-1.802,5.408l-7.981,2.702l-7.853,1.030l-2.445,1.159l-1.931,2.832l-1.287,0.515l-0.644,-0.901l-1.031,0.128l-2.574,-0.257l-0.514,-0.257l-3.090,0l-0.773,0.257l-1.158,-0.644l-0.645,1.288l0.258,1.158l1.158,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Senegal",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Senegal",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Senegal\x0a\x09^ 'M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Serbia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M519.749,102.684l1.416,1.030l0.258,0.902l1.674,0.643l0.257,1.158l1.543,0.773l0.774,-0.644l0.771,0.386l-0.641,0.386l0.513,0.515l-0.772,0.644l0.259,0.902l1.415,1.158l-1.030,0.901l-0.515,0.772l0.256,0.386l-0.385,0.387l-1.288,0l-1.544,0.257l-1.545,0.515l-0.129,0.515l-0.385,0l-0.130,-1.030l-0.643,-0.257l-0.516,-0.773l-0.771,0.258l-0.129,-0.516l-1.287,1.288l0.258,0.901l-0.516,-0.128l-0.773,-0.902l-1.159,-0.515l0.258,-0.514l0.387,-1.545l0.900,-0.515l1.158,-0.387l0.389,-1.287l-1.289,-1.030l0.645,-1.159l-1.030,0l1.030,-1.029l-0.773,-0.772l-0.643,-1.031l2.060,-0.772l-1.672,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Serbia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Serbia\x0a\x09^ 'M519.749,102.684l1.416,1.030l0.258,0.902l1.674,0.643l0.257,1.158l1.543,0.773l0.774,-0.644l0.771,0.386l-0.641,0.386l0.513,0.515l-0.772,0.644l0.259,0.902l1.415,1.158l-1.030,0.901l-0.515,0.772l0.256,0.386l-0.385,0.387l-1.288,0l-1.544,0.257l-1.545,0.515l-0.129,0.515l-0.385,0l-0.130,-1.030l-0.643,-0.257l-0.516,-0.773l-0.771,0.258l-0.129,-0.516l-1.287,1.288l0.258,0.901l-0.516,-0.128l-0.773,-0.902l-1.159,-0.515l0.258,-0.514l0.387,-1.545l0.900,-0.515l1.158,-0.387l0.389,-1.287l-1.289,-1.030l0.645,-1.159l-1.030,0l1.030,-1.029l-0.773,-0.772l-0.643,-1.031l2.060,-0.772l-1.672,-0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SierraLeone",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z";
}, function($ctx1) {$ctx1.fill(self,"SierraLeone",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SierraLeone\x0a\x09^ 'M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Slovakia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,93.673l0.127,0.129l1.158,-0.386l1.289,1.030l1.672,-0.644l1.289,0.257l1.929,-0.386l2.577,1.030l-0.774,0.772l-0.513,1.030l-0.645,0.257l-2.832,-0.772l-0.900,0.129l-0.645,0.643l-1.287,0.387l-0.258,-0.258l-1.287,0.515l-1.158,0l-0.129,0.644l-2.318,0.257l-1.028,-0.257l-1.288,-0.772l-0.257,-0.903l0.127,-0.256l0.387,-0.644l1.288,0l0.900,-0.258l0,-0.257l0.517,-0.129l0.256,-0.643l0.644,0l0.385,-0.515l-0.774,0z";
}, function($ctx1) {$ctx1.fill(self,"Slovakia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Slovakia\x0a\x09^ 'M516.017,93.673l0.127,0.129l1.158,-0.386l1.289,1.030l1.672,-0.644l1.289,0.257l1.929,-0.386l2.577,1.030l-0.774,0.772l-0.513,1.030l-0.645,0.257l-2.832,-0.772l-0.900,0.129l-0.645,0.643l-1.287,0.387l-0.258,-0.258l-1.287,0.515l-1.158,0l-0.129,0.644l-2.318,0.257l-1.028,-0.257l-1.288,-0.772l-0.257,-0.903l0.127,-0.256l0.387,-0.644l1.288,0l0.900,-0.258l0,-0.257l0.517,-0.129l0.256,-0.643l0.644,0l0.385,-0.515l-0.774,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SolomonIslands",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M901.944,255.23l0.772,0.903l-1.930,0l-1.031,-1.674l1.674,0.643l-0.515,-0.128zM900.786,252.784l-0.387,0.516l-2.060,-2.318l-0.514,-1.544l0.901,0l1.029,2.059l-1.031,-1.287zM898.597,253.557l-1.159,0.129l-1.544,-0.386l-0.643,-0.386l0.256,-1.031l1.674,0.387l0.900,0.644l-0.516,-0.643zM895.251,248.537l0.643,0.901l0.128,0.515l-2.060,-1.158l-1.543,-0.902l-1.031,-0.901l0.384,-0.258l1.290,0.644l-2.189,-1.159zM888.556,245.834l1.031,0.900l-0.516,0.129l-1.160,-0.515l-1.158,-1.159l0.129,-0.386l-1.674,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"SolomonIslands",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SolomonIslands\x0a\x09^ 'M901.944,255.23l0.772,0.903l-1.930,0l-1.031,-1.674l1.674,0.643l-0.515,-0.128zM900.786,252.784l-0.387,0.516l-2.060,-2.318l-0.514,-1.544l0.901,0l1.029,2.059l-1.031,-1.287zM898.597,253.557l-1.159,0.129l-1.544,-0.386l-0.643,-0.386l0.256,-1.031l1.674,0.387l0.900,0.644l-0.516,-0.643zM895.251,248.537l0.643,0.901l0.128,0.515l-2.060,-1.158l-1.543,-0.902l-1.031,-0.901l0.384,-0.258l1.290,0.644l-2.189,-1.159zM888.556,245.834l1.031,0.900l-0.516,0.129l-1.160,-0.515l-1.158,-1.159l0.129,-0.386l-1.674,-1.031z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Somolia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M597.114,201.549l-1.287,1.674l-1.803,2.188l-2.316,0l-8.754,-3.218l-1.029,-0.901l-1.029,-1.287l-1.032,-1.545l0.645,-0.901l0.900,-1.416l0.902,0.515l0.516,1.030l1.286,1.158l1.288,0l2.575,-0.643l2.959,-0.387l2.319,-0.771l1.286,-0.259l1.029,-0.515l1.545,0l0,1.159l0,2.704l0,-1.415zM603.037,195.371l-0.258,1.545l0,1.415l-0.643,0.901l-0.773,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.576,2.059l-2.959,3.347l-0.644,1.415l-0.516,0.645l-1.931,-2.189l0.130,-10.169l2.188,-2.960l1.029,-0.644l1.803,0l2.318,-1.932l3.475,-0.129l7.722,-8.110l1.803,-2.188l1.287,-1.674l0,-1.415l0,-2.704l0,-1.159l0.903,-0.128l1.158,-0.387l1.416,-0.257l1.288,-0.900l1.028,0l-0.130,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Somolia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Somolia\x0a\x09^ 'M597.114,201.549l-1.287,1.674l-1.803,2.188l-2.316,0l-8.754,-3.218l-1.029,-0.901l-1.029,-1.287l-1.032,-1.545l0.645,-0.901l0.900,-1.416l0.902,0.515l0.516,1.030l1.286,1.158l1.288,0l2.575,-0.643l2.959,-0.387l2.319,-0.771l1.286,-0.259l1.029,-0.515l1.545,0l0,1.159l0,2.704l0,-1.415zM603.037,195.371l-0.258,1.545l0,1.415l-0.643,0.901l-0.773,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.576,2.059l-2.959,3.347l-0.644,1.415l-0.516,0.645l-1.931,-2.189l0.130,-10.169l2.188,-2.960l1.029,-0.644l1.803,0l2.318,-1.932l3.475,-0.129l7.722,-8.110l1.803,-2.188l1.287,-1.674l0,-1.415l0,-2.704l0,-1.159l0.903,-0.128l1.158,-0.387l1.416,-0.257l1.288,-0.900l1.028,0l-0.130,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthAfrica",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z";
}, function($ctx1) {$ctx1.fill(self,"SouthAfrica",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SouthAfrica\x0a\x09^ 'M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthKorea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M810.933,122.895l2.447,3.218l0.642,1.803l0,3.089l-1.029,1.416l-2.445,0.515l-2.190,1.159l-2.445,0.258l-0.258,-1.545l0.514,-1.932l-1.158,-2.833l1.931,-0.514l-1.802,-2.189l0.131,-0.257l1.285,0l1.029,-1.158l1.930,-0.129l1.033,-0.129l-0.385,0.772z";
}, function($ctx1) {$ctx1.fill(self,"SouthKorea",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SouthKorea\x0a\x09^ 'M810.933,122.895l2.447,3.218l0.642,1.803l0,3.089l-1.029,1.416l-2.445,0.515l-2.190,1.159l-2.445,0.258l-0.258,-1.545l0.514,-1.932l-1.158,-2.833l1.931,-0.514l-1.802,-2.189l0.131,-0.257l1.285,0l1.029,-1.158l1.930,-0.129l1.033,-0.129l-0.385,0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Spain",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l0.129,-1.931l-1.029,-1.158l3.861,-1.932l3.219,0.515l3.604,0l2.960,0.387l2.189,-0.129l4.377,0.129l1.029,1.030l5.021,1.158l0.901,-0.514l3.089,1.158l3.090,-0.258l0.129,1.545l-2.574,1.802l-3.478,0.516l-0.127,0.900l-1.672,1.545l-1.031,2.189l1.031,1.544l-1.547,1.159l-0.642,1.803l-2.061,0.514l-1.802,2.060l-3.476,0l-2.574,0l-1.673,0.901l-1.031,1.030l-1.287,-0.129l-1.030,-1.030l-0.772,-1.545l-2.446,-0.385l-0.257,-0.902l1.030,-1.030l0.258,-0.644l-0.902,-0.900l0.772,-1.674l-1.030,-1.674l1.160,-0.256l0,-1.159l0.514,-0.387l0,-2.189l1.287,-0.643l-0.773,-1.416l-1.545,-0.128l-0.514,0.385l-1.545,0l-0.643,-1.287l-1.158,0.387l1.031,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Spain",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Spain\x0a\x09^ 'M440.838,114.141l0.129,-1.931l-1.029,-1.158l3.861,-1.932l3.219,0.515l3.604,0l2.960,0.387l2.189,-0.129l4.377,0.129l1.029,1.030l5.021,1.158l0.901,-0.514l3.089,1.158l3.090,-0.258l0.129,1.545l-2.574,1.802l-3.478,0.516l-0.127,0.900l-1.672,1.545l-1.031,2.189l1.031,1.544l-1.547,1.159l-0.642,1.803l-2.061,0.514l-1.802,2.060l-3.476,0l-2.574,0l-1.673,0.901l-1.031,1.030l-1.287,-0.129l-1.030,-1.030l-0.772,-1.545l-2.446,-0.385l-0.257,-0.902l1.030,-1.030l0.258,-0.644l-0.902,-0.900l0.772,-1.674l-1.030,-1.674l1.160,-0.256l0,-1.159l0.514,-0.387l0,-2.189l1.287,-0.643l-0.773,-1.416l-1.545,-0.128l-0.514,0.385l-1.545,0l-0.643,-1.287l-1.158,0.387l1.031,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SriLanka",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M685.552,206.699l-0.387,2.832l-1.158,0.772l-2.317,0.643l-1.289,-2.187l-0.513,-3.863l1.285,-4.376l1.805,1.545l1.285,1.801l-1.289,-2.833z";
}, function($ctx1) {$ctx1.fill(self,"SriLanka",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SriLanka\x0a\x09^ 'M685.552,206.699l-0.387,2.832l-1.158,0.772l-2.317,0.643l-1.289,-2.187l-0.513,-3.863l1.285,-4.376l1.805,1.545l1.285,1.801l-1.289,-2.833z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sudan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Sudan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Sudan\x0a\x09^ 'M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Suriname",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M311.337,210.946l3.219,0.517l0.257,-0.517l2.188,-0.257l2.833,0.774l-1.417,2.316l0.259,1.803l1.029,1.674l-0.386,1.157l-0.257,1.159l-0.772,1.158l-1.545,-0.515l-1.159,0.259l-1.158,-0.259l-0.259,0.773l0.516,0.514l-0.257,0.517l-1.546,-0.130l-1.545,-2.317l-0.385,-1.545l-0.902,0l-1.157,-1.931l0.514,-1.416l-0.129,-0.643l1.545,-0.772l-0.514,2.319z";
}, function($ctx1) {$ctx1.fill(self,"Suriname",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Suriname\x0a\x09^ 'M311.337,210.946l3.219,0.517l0.257,-0.517l2.188,-0.257l2.833,0.774l-1.417,2.316l0.259,1.803l1.029,1.674l-0.386,1.157l-0.257,1.159l-0.772,1.158l-1.545,-0.515l-1.159,0.259l-1.158,-0.259l-0.259,0.773l0.516,0.514l-0.257,0.517l-1.546,-0.130l-1.545,-2.317l-0.385,-1.545l-0.902,0l-1.157,-1.931l0.514,-1.416l-0.129,-0.643l1.545,-0.772l-0.514,2.319z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SvalbardJanMayen",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M539.059,11.285l-3.991,1.416l-7.852,0.387l-7.854-0.515l-0.514-0.644l-3.863-0.128l-2.961-1.159l8.369-0.772l3.86,0.644l2.704-0.772l6.822,0.643L539.059,11.285zM505.976,12.314h-3.733l-1.546-0.901l-7.335,1.031l2.059,2.06l5.276,2.317l3.99,0.772l-2.314,0.9l5.791,1.675l3.219-0.129l1.287-2.189l2.316-0.515l1.545-2.06l6.693-1.031l-8.881-1.931l-3.347-1.03l-3.991,0.128L505.976,12.314zM531.851,17.207l-3.863-0.515l-1.158-1.03l-5.535,0.515l1.674,0.901l-1.932,0.643l4.765,0.645L531.851,17.207z";
}, function($ctx1) {$ctx1.fill(self,"SvalbardJanMayen",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "SvalbardJanMayen\x0a\x09^ 'M539.059,11.285l-3.991,1.416l-7.852,0.387l-7.854-0.515l-0.514-0.644l-3.863-0.128l-2.961-1.159l8.369-0.772l3.86,0.644l2.704-0.772l6.822,0.643L539.059,11.285zM505.976,12.314h-3.733l-1.546-0.901l-7.335,1.031l2.059,2.06l5.276,2.317l3.99,0.772l-2.314,0.9l5.791,1.675l3.219-0.129l1.287-2.189l2.316-0.515l1.545-2.06l6.693-1.031l-8.881-1.931l-3.347-1.03l-3.991,0.128L505.976,12.314zM531.851,17.207l-3.863-0.515l-1.158-1.03l-5.535,0.515l1.674,0.901l-1.932,0.643l4.765,0.645L531.851,17.207z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Swaziland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Swaziland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Swaziland\x0a\x09^ 'M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sweden",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M525.026,49.905l-2.703,1.930l0.516,1.674l-4.377,2.060l-5.150,2.317l-1.930,3.861l1.930,1.932l2.576,1.415l-2.576,3.090l-2.704,0.643l-1.028,4.507l-1.545,2.445l-3.348,-0.257l-1.415,2.188l-3.218,0.129l-0.773,-2.575l-2.317,-3.090l-2.059,-3.732l1.158,-1.545l2.318,-1.931l0.900,-3.090l-1.803,-1.415l-0.127,-3.605l1.800,-2.446l2.705,0l0.903,-1.030l-1.031,-0.901l4.248,-3.862l2.703,-2.960l1.674,-1.931l2.702,0l0.644,-1.417l5.022,0.387l0.513,-1.803l1.673,-0.129l3.475,1.417l4.250,1.801l0.128,4.120l0.901,1.031l4.635,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Sweden",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Sweden\x0a\x09^ 'M525.026,49.905l-2.703,1.930l0.516,1.674l-4.377,2.060l-5.150,2.317l-1.930,3.861l1.930,1.932l2.576,1.415l-2.576,3.090l-2.704,0.643l-1.028,4.507l-1.545,2.445l-3.348,-0.257l-1.415,2.188l-3.218,0.129l-0.773,-2.575l-2.317,-3.090l-2.059,-3.732l1.158,-1.545l2.318,-1.931l0.900,-3.090l-1.803,-1.415l-0.127,-3.605l1.800,-2.446l2.705,0l0.903,-1.030l-1.031,-0.901l4.248,-3.862l2.703,-2.960l1.674,-1.931l2.702,0l0.644,-1.417l5.022,0.387l0.513,-1.803l1.673,-0.129l3.475,1.417l4.250,1.801l0.128,4.120l0.901,1.031l4.635,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Switzerland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.042,98.951l0.128,0.515l-0.385,0.644l1.160,0.514l1.416,0l-0.258,1.159l-1.158,0.386l-1.932,-0.257l-0.643,1.030l-1.288,0.129l-0.387,-0.516l-1.543,1.031l-1.287,0.128l-1.160,-0.643l-0.901,-1.159l-1.288,0.386l0,-1.158l1.932,-1.545l-0.130,-0.644l1.288,0.257l0.772,-0.515l2.317,0l0.515,-0.514l-2.832,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Switzerland",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Switzerland\x0a\x09^ 'M491.042,98.951l0.128,0.515l-0.385,0.644l1.160,0.514l1.416,0l-0.258,1.159l-1.158,0.386l-1.932,-0.257l-0.643,1.030l-1.288,0.129l-0.387,-0.516l-1.543,1.031l-1.287,0.128l-1.160,-0.643l-0.901,-1.159l-1.288,0.386l0,-1.158l1.932,-1.545l-0.130,-0.644l1.288,0.257l0.772,-0.515l2.317,0l0.515,-0.514l-2.832,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Syria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M569.696,137.055l-5.278,2.833l-2.960,-1.031l0.256,-0.385l0,-1.160l0.643,-1.416l1.546,-1.029l-0.515,-1.031l-1.159,-0.128l-0.257,-2.059l0.644,-1.159l0.772,-0.643l0.643,-0.515l0.129,-1.545l0.902,0.514l2.960,-0.772l1.416,0.514l2.317,0l3.090,-1.028l1.416,0.128l3.090,-0.515l-1.416,1.673l-1.417,0.773l0.258,1.931l-1.029,3.218l6.051,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Syria",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Syria\x0a\x09^ 'M569.696,137.055l-5.278,2.833l-2.960,-1.031l0.256,-0.385l0,-1.160l0.643,-1.416l1.546,-1.029l-0.515,-1.031l-1.159,-0.128l-0.257,-2.059l0.644,-1.159l0.772,-0.643l0.643,-0.515l0.129,-1.545l0.902,0.514l2.960,-0.772l1.416,0.514l2.317,0l3.090,-1.028l1.416,0.128l3.090,-0.515l-1.416,1.673l-1.417,0.773l0.258,1.931l-1.029,3.218l6.051,-2.832z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Taiwan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M793.296,161.256l-1.672,4.378l-1.160,2.188l-1.414,-2.317l-0.260,-1.932l1.545,-2.702l2.189,-2.060l1.288,0.772l0.516,-1.673z";
}, function($ctx1) {$ctx1.fill(self,"Taiwan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Taiwan\x0a\x09^ 'M793.296,161.256l-1.672,4.378l-1.160,2.188l-1.414,-2.317l-0.260,-1.932l1.545,-2.702l2.189,-2.060l1.288,0.772l0.516,-1.673z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tajikistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.587,118.519l-1.030,0.900l-2.961,-0.515l-0.257,1.545l2.961,-0.129l3.347,0.901l5.020,-0.514l0.773,2.573l0.772,-0.256l1.674,0.515l-0.129,1.158l0.515,1.416l-2.832,0l-1.802,-0.129l-1.674,1.159l-1.285,0.257l-0.904,0.643l-1.030,-0.900l0.259,-2.317l-0.901,-0.129l0.384,-0.772l-1.543,-0.645l-1.160,0.903l-0.256,1.157l-0.386,0.387l-1.674,-0.128l-0.773,1.287l-0.901,-0.515l-2.059,0.900l-0.773,-0.385l1.547,-2.703l-0.645,-2.060l-1.931,-0.644l0.643,-1.159l2.318,0.129l1.285,-1.417l0.775,-1.801l3.603,-0.644l-0.514,1.287l0.386,0.772l-1.158,0.127z";
}, function($ctx1) {$ctx1.fill(self,"Tajikistan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Tajikistan\x0a\x09^ 'M656.587,118.519l-1.030,0.900l-2.961,-0.515l-0.257,1.545l2.961,-0.129l3.347,0.901l5.020,-0.514l0.773,2.573l0.772,-0.256l1.674,0.515l-0.129,1.158l0.515,1.416l-2.832,0l-1.802,-0.129l-1.674,1.159l-1.285,0.257l-0.904,0.643l-1.030,-0.900l0.259,-2.317l-0.901,-0.129l0.384,-0.772l-1.543,-0.645l-1.160,0.903l-0.256,1.157l-0.386,0.387l-1.674,-0.128l-0.773,1.287l-0.901,-0.515l-2.059,0.900l-0.773,-0.385l1.547,-2.703l-0.645,-2.060l-1.931,-0.644l0.643,-1.159l2.318,0.129l1.285,-1.417l0.775,-1.801l3.603,-0.644l-0.514,1.287l0.386,0.772l-1.158,0.127z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tanzania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z";
}, function($ctx1) {$ctx1.fill(self,"Tanzania",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Tanzania\x0a\x09^ 'M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Thailand",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M741.548,194.082l-2.445,-1.157l-2.188,0l0.385,-2.060l-2.446,0l-0.128,2.961l-1.545,3.990l-0.903,2.318l0.260,1.931l1.801,0.128l1.031,2.446l0.514,2.318l1.416,1.545l1.674,0.257l1.416,1.415l-0.901,1.159l-1.802,0.257l-0.129,-1.287l-2.188,-1.157l-0.516,0.385l-1.029,-1.029l-0.515,-1.288l-1.418,-1.544l-1.286,-1.287l-0.515,1.544l-0.514,-1.417l0.385,-1.672l0.773,-2.576l1.287,-2.832l1.545,-2.445l-1.158,-2.447l0.129,-1.287l-0.387,-1.545l-1.802,-2.060l-0.643,-1.416l1.029,-0.514l0.901,-2.318l-1.030,-1.802l-1.802,-1.931l-1.287,-2.317l1.158,-0.515l1.287,-2.960l1.803,-0.129l1.672,-1.159l1.544,-0.643l1.161,0.900l0.129,1.546l1.800,0.128l-0.642,2.832l0,2.446l2.832,-1.544l0.900,0.385l1.545,0l0.516,-1.030l2.060,0.258l2.059,2.189l0.129,2.574l2.187,2.446l-0.127,2.189l-0.902,1.288l-2.447,-0.387l-3.475,0.514l-1.801,2.189l-0.643,-3.217z";
}, function($ctx1) {$ctx1.fill(self,"Thailand",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Thailand\x0a\x09^ 'M741.548,194.082l-2.445,-1.157l-2.188,0l0.385,-2.060l-2.446,0l-0.128,2.961l-1.545,3.990l-0.903,2.318l0.260,1.931l1.801,0.128l1.031,2.446l0.514,2.318l1.416,1.545l1.674,0.257l1.416,1.415l-0.901,1.159l-1.802,0.257l-0.129,-1.287l-2.188,-1.157l-0.516,0.385l-1.029,-1.029l-0.515,-1.288l-1.418,-1.544l-1.286,-1.287l-0.515,1.544l-0.514,-1.417l0.385,-1.672l0.773,-2.576l1.287,-2.832l1.545,-2.445l-1.158,-2.447l0.129,-1.287l-0.387,-1.545l-1.802,-2.060l-0.643,-1.416l1.029,-0.514l0.901,-2.318l-1.030,-1.802l-1.802,-1.931l-1.287,-2.317l1.158,-0.515l1.287,-2.960l1.803,-0.129l1.672,-1.159l1.544,-0.643l1.161,0.900l0.129,1.546l1.800,0.128l-0.642,2.832l0,2.446l2.832,-1.544l0.900,0.385l1.545,0l0.516,-1.030l2.060,0.258l2.059,2.189l0.129,2.574l2.187,2.446l-0.127,2.189l-0.902,1.288l-2.447,-0.387l-3.475,0.514l-1.801,2.189l-0.643,-3.217z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "TimorLeste",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,-0.643l2.316,-0.644l1.934,-0.129l0.771,-0.257l1.029,0.257l-0.900,0.773l-2.834,1.158l-2.316,0.773l0,-0.773l0.258,0.515z";
}, function($ctx1) {$ctx1.fill(self,"TimorLeste",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "TimorLeste\x0a\x09^ 'M801.921,250.982l0.258,-0.643l2.316,-0.644l1.934,-0.129l0.771,-0.257l1.029,0.257l-0.900,0.773l-2.834,1.158l-2.316,0.773l0,-0.773l0.258,0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Togo",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Togo",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Togo\x0a\x09^ 'M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tunisia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Tunisia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Tunisia\x0a\x09^ 'M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Turkmenistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l-0.129,-2.188l-2.060,-0.128l-3.088,-2.317l-2.188,-0.387l-2.961,-1.288l-1.932,-0.257l-1.157,0.515l-1.803,-0.129l-1.932,1.546l-2.317,0.513l-0.515,-1.930l0.387,-2.832l-2.059,-0.901l0.644,-1.802l-1.804,-0.129l0.645,-2.318l2.574,0.644l2.316,-0.773l-1.931,-1.673l-0.772,-1.544l-2.187,0.643l-0.260,2.059l-0.900,-1.802l1.160,-0.900l3.090,-0.515l1.800,0.772l1.930,2.060l1.419,-0.128l2.959,0l-0.384,-1.417l2.315,-0.901l2.188,-1.545l3.735,1.416l0.256,2.188l1.030,0.515l2.832,-0.128l1.029,0.515l1.289,2.702l3.089,1.931l1.674,1.288l2.832,1.288l3.604,1.158l0,1.674l-0.902,-0.128l-1.285,-0.774l-0.387,1.030l-2.317,0.516l-0.515,2.188l-1.546,0.772l-2.058,0.386l-0.517,1.288l-2.059,0.257l2.832,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Turkmenistan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Turkmenistan\x0a\x09^ 'M630.069,130.876l-0.129,-2.188l-2.060,-0.128l-3.088,-2.317l-2.188,-0.387l-2.961,-1.288l-1.932,-0.257l-1.157,0.515l-1.803,-0.129l-1.932,1.546l-2.317,0.513l-0.515,-1.930l0.387,-2.832l-2.059,-0.901l0.644,-1.802l-1.804,-0.129l0.645,-2.318l2.574,0.644l2.316,-0.773l-1.931,-1.673l-0.772,-1.544l-2.187,0.643l-0.260,2.059l-0.900,-1.802l1.160,-0.900l3.090,-0.515l1.800,0.772l1.930,2.060l1.419,-0.128l2.959,0l-0.384,-1.417l2.315,-0.901l2.188,-1.545l3.735,1.416l0.256,2.188l1.030,0.515l2.832,-0.128l1.029,0.515l1.289,2.702l3.089,1.931l1.674,1.288l2.832,1.288l3.604,1.158l0,1.674l-0.902,-0.128l-1.285,-0.774l-0.387,1.030l-2.317,0.516l-0.515,2.188l-1.546,0.772l-2.058,0.386l-0.517,1.288l-2.059,0.257l2.832,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uganda",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l-2.961,0l-0.900,0.257l-1.547,0.900l-0.643,-0.256l0,-2.061l0.643,-1.028l0.131,-2.189l0.514,-1.287l1.029,-1.416l1.031,-0.643l0.901,-1.031l-1.159,-0.258l0.258,-3.217l1.029,-0.774l1.802,0.644l2.189,-0.644l1.545,0l1.416,-1.028l1.287,1.930l1.031,2.704l0.771,1.930l-1.029,1.931l-1.931,1.674l0,0.772l0,2.832l5.407,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Uganda",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Uganda\x0a\x09^ 'M551.03,229.742l-2.961,0l-0.900,0.257l-1.547,0.900l-0.643,-0.256l0,-2.061l0.643,-1.028l0.131,-2.189l0.514,-1.287l1.029,-1.416l1.031,-0.643l0.901,-1.031l-1.159,-0.258l0.258,-3.217l1.029,-0.774l1.802,0.644l2.189,-0.644l1.545,0l1.416,-1.028l1.287,1.930l1.031,2.704l0.771,1.930l-1.029,1.931l-1.931,1.674l0,0.772l0,2.832l5.407,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ukraine",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.901,86.593l0.901,0.129l0.773,-0.644l0.772,0.128l2.833,-0.256l1.673,1.544l-0.643,0.515l0.258,0.901l2.058,0.129l1.030,1.159l-0.129,0.514l3.476,0.901l2.059,-0.386l1.674,1.287l1.545,0l3.990,0.902l0,0.772l-1.029,1.415l0.513,1.417l-0.384,0.901l-2.575,0.258l-1.417,0.772l-0.128,1.159l-2.060,0.128l-1.801,0.902l-2.576,0.128l-2.317,1.030l0.129,1.674l1.416,0.644l2.704,-0.130l-0.516,0.902l-2.959,0.515l-3.606,1.544l-1.544,-0.515l0.643,-1.286l-2.962,-0.774l0.389,-0.514l2.573,-0.901l-0.772,-0.645l-4.120,-0.643l-0.257,-1.029l-2.446,0.386l-1.030,1.416l-2.060,2.059l-1.158,-0.515l-1.287,0.386l-1.287,-0.386l0.773,-0.386l0.385,-0.901l0.774,-0.901l-0.129,-0.386l0.513,-0.258l0.258,0.386l1.545,0.129l0.773,-0.257l-0.517,-0.258l0.131,-0.386l-0.902,-0.772l-0.386,-1.030l-1.030,-0.515l0.257,-0.901l-1.287,-0.644l-1.029,-0.128l-2.059,-0.903l-1.675,0.259l-0.644,0.386l-1.158,0l-0.773,0.644l-1.931,0.257l-0.899,0.515l-1.289,-0.772l-1.673,0l-1.674,-0.258l-1.159,0.515l-0.256,-0.643l-1.415,-0.773l0.513,-1.030l0.774,-0.772l0.515,0.257l-0.646,-1.287l2.447,-2.189l1.287,-0.385l0.257,-0.773l-1.286,-2.317l1.286,-0.129l1.417,-0.644l2.187,-0.129l2.706,0.258l2.959,0.644l2.189,0l0.900,0.386l1.030,-0.386l0.772,0.643l2.446,-0.129l1.031,0.258l0.128,-1.416l0.900,-0.643l-2.318,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Ukraine",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Ukraine\x0a\x09^ 'M550.901,86.593l0.901,0.129l0.773,-0.644l0.772,0.128l2.833,-0.256l1.673,1.544l-0.643,0.515l0.258,0.901l2.058,0.129l1.030,1.159l-0.129,0.514l3.476,0.901l2.059,-0.386l1.674,1.287l1.545,0l3.990,0.902l0,0.772l-1.029,1.415l0.513,1.417l-0.384,0.901l-2.575,0.258l-1.417,0.772l-0.128,1.159l-2.060,0.128l-1.801,0.902l-2.576,0.128l-2.317,1.030l0.129,1.674l1.416,0.644l2.704,-0.130l-0.516,0.902l-2.959,0.515l-3.606,1.544l-1.544,-0.515l0.643,-1.286l-2.962,-0.774l0.389,-0.514l2.573,-0.901l-0.772,-0.645l-4.120,-0.643l-0.257,-1.029l-2.446,0.386l-1.030,1.416l-2.060,2.059l-1.158,-0.515l-1.287,0.386l-1.287,-0.386l0.773,-0.386l0.385,-0.901l0.774,-0.901l-0.129,-0.386l0.513,-0.258l0.258,0.386l1.545,0.129l0.773,-0.257l-0.517,-0.258l0.131,-0.386l-0.902,-0.772l-0.386,-1.030l-1.030,-0.515l0.257,-0.901l-1.287,-0.644l-1.029,-0.128l-2.059,-0.903l-1.675,0.259l-0.644,0.386l-1.158,0l-0.773,0.644l-1.931,0.257l-0.899,0.515l-1.289,-0.772l-1.673,0l-1.674,-0.258l-1.159,0.515l-0.256,-0.643l-1.415,-0.773l0.513,-1.030l0.774,-0.772l0.515,0.257l-0.646,-1.287l2.447,-2.189l1.287,-0.385l0.257,-0.773l-1.286,-2.317l1.286,-0.129l1.417,-0.644l2.187,-0.129l2.706,0.258l2.959,0.644l2.189,0l0.900,0.386l1.030,-0.386l0.772,0.643l2.446,-0.129l1.031,0.258l0.128,-1.416l0.900,-0.643l-2.318,0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedArabEmirates",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M604.196,161.643l0.514,-0.129l0,0.772l2.188,-0.386l2.189,0l1.672,0.129l1.803,-1.802l2.058,-1.802l1.674,-1.673l0.518,0.900l0.385,2.189l-1.417,0l-0.258,1.802l0.517,0.386l-1.159,0.515l-0.129,1.029l-0.773,1.159l0,1.030l-0.514,0.644l-8.110,-1.416l-1.031,-2.704l0.127,0.643z";
}, function($ctx1) {$ctx1.fill(self,"UnitedArabEmirates",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "UnitedArabEmirates\x0a\x09^ 'M604.196,161.643l0.514,-0.129l0,0.772l2.188,-0.386l2.189,0l1.672,0.129l1.803,-1.802l2.058,-1.802l1.674,-1.673l0.518,0.900l0.385,2.189l-1.417,0l-0.258,1.802l0.517,0.386l-1.159,0.515l-0.129,1.029l-0.773,1.159l0,1.030l-0.514,0.644l-8.110,-1.416l-1.031,-2.704l0.127,0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedStates",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M284.434,106.546l-2.704,0.772l-2.575,0.644l-3.089,1.673l-1.287,1.417l-0.258,0.386l-0.127,1.545l0.900,1.415l1.159,0l-0.259,-0.900l0.773,0.515l-0.257,0.772l-1.803,0.515l-1.286,-0.130l-1.931,0.517l-1.159,0.128l-1.673,0.128l-2.060,0.644l3.733,-0.387l0.128,0l0.773,0.515l-3.733,0.773l-1.802,0l0.129,-0.257l0.128,-0.644l-0.900,1.416l0.643,0l-0.515,2.060l-1.931,2.060l-0.257,-0.773l-0.516,-0.129l-0.643,-0.643l-0.129,0l-0.128,0l0.514,1.416l0.773,1.416l0.129,0.257l-1.030,0.901l-1.545,2.188l-0.258,-0.128l1.030,-1.802l-1.416,-1.287l-0.128,-2.060l-0.387,0.901l0,2.446l-1.673,-0.901l1.802,1.544l0.515,1.417l0.772,1.674l0.387,2.703l-1.803,1.930l-2.574,1.030l-2.318,1.417l-0.901,0.128l-1.158,1.931l-2.317,1.673l-2.832,1.288l-1.158,2.060l-0.516,1.415l0.387,2.061l1.030,2.187l1.159,2.061l0,1.029l1.157,2.703l0.129,2.447l-0.514,2.316l-1.159,0.516l-1.287,-0.386l-0.386,-1.159l-1.031,-0.644l-1.545,-2.317l-1.287,-1.931l-0.257,-1.287l0.515,-1.674l-0.643,-1.544l-1.803,-1.545l-1.416,-1.030l-3.089,1.158l-0.644,-0.772l-2.574,-1.287l-2.962,0.386l-2.445,-0.258l-1.674,0.515l-1.544,0l-0.258,1.160l0.772,1.543l-3.605,0.130l-2.316,-0.516l-1.545,-0.514l-2.059,-0.387l-2.318,-0.128l-2.317,0.643l-2.446,1.931l-2.702,1.158l-1.417,1.289l-0.644,1.287l0,1.802l0.129,1.287l0.515,0.901l-1.030,0.129l-1.931,-0.643l-2.188,-0.773l-0.772,-1.287l-0.515,-1.931l-1.545,-1.545l-1.030,-1.545l-1.288,-1.802l-1.930,-1.159l-2.189,0.130l-1.674,2.058l-2.316,-0.772l-1.288,-0.772l-0.772,-1.545l-0.900,-1.416l-1.545,-1.159l-1.416,-0.901l-0.902,-0.900l-4.633,0l-0.129,1.158l-2.060,0l-5.407,0l-6.178,-1.931l-3.992,-1.288l0.258,-0.515l-3.475,0.259l-3.090,0.256l-0.258,-1.029l-1.159,-1.416l-2.831,-1.545l-1.158,-0.129l-1.160,-0.900l-2.059,-0.130l-0.772,-0.515l-0.258,-1.416l-2.702,-2.704l-2.189,-3.732l0.128,-0.644l-1.287,-0.901l-2.059,-2.317l-0.386,-2.188l-1.417,-1.417l0.644,-2.189l-0.129,-2.317l-0.901,-1.544l0.901,-2.960l0.129,-2.962l0.514,-4.119l-0.771,-2.188l-0.387,-2.575l3.734,0.515l1.158,2.060l0.644,-0.773l-0.387,-2.188l-1.287,-2.189l15.962,0l2.704,0l32.182,0l18.536,0l5.536,0l0,-1.030l0.901,0l0.516,1.417l0.772,0.514l1.930,0.129l2.704,0.515l2.703,0.773l2.188,-0.387l3.219,0.773l0.385,0l0.515,0l0.258,-0.129l0.386,-0.129l0.387,-0.128l0.772,-0.258l0.643,-0.129l0.644,0.129l0.386,0.258l0.258,0l0.386,0.257l0.773,0.257l0.772,0.258l0.772,0.386l0.643,0.257l0.387,0.130l0.258,0.128l0.514,0.128l0.515,0.258l0.515,0.258l0.515,0.128l0.515,0.257l0.515,0.258l0.515,0.129l0.514,0.257l0.130,0.386l0.128,0.387l0.386,0.257l0.257,0l0.902,0l0.257,0l0,0.129l0,0.129l0,0.128l0,0.258l0.129,0l0.129,0.257l0.128,0l0.258,0.129l0.386,0.128l0.258,-0.128l0.128,0l0.258,0.258l0.128,0l0,0.129l-0.386,0.515l0.516,0.257l0.643,0.257l0.644,0.258l0.514,0.128l0.515,0.386l0.128,0.387l0,0.257l0.130,0.515l0.128,0.386l0.129,0.515l0.130,0.515l0.127,0.515l0,0.386l0.129,0.515l0.258,0.772l-0.129,0.258l-0.385,0.515l-0.259,0.515l0,0.129l0,0.128l-0.514,0.516l-0.772,1.030l-0.387,0.385l-0.257,0.515l0,0.257l0,0.130l0.257,0.257l0.387,0.257l0.514,0.129l0.644,0l0.643,-0.258l0.644,-0.257l0.644,-0.258l0.643,-0.385l0.644,-0.258l0.645,-0.129l0.900,-0.128l0.387,0l0.128,0l0.644,-0.129l0.643,-0.258l0.643,-0.257l0.902,-0.257l0.772,-0.258l0.386,-0.128l0.258,-0.130l0,-0.128l0,-0.258l-0.387,-0.772l0,-0.129l-0.257,-0.386l0.386,-0.129l0.515,-0.257l0.258,0l0.772,-0.128l0.643,0l0.902,0l0.772,0.128l0.901,0l0.516,0l0.643,0l0.257,-0.515l0.387,-0.386l0.256,-0.258l0.387,-0.258l2.703,-1.801l1.287,-0.516l4.120,0l4.891,0l0.258,-0.772l0.901,0l1.158,-0.515l0.902,-1.159l0.901,-2.187l2.060,-1.932l0.900,0.644l1.804,-0.386l1.157,0.772l0,3.605l1.803,1.545l0,-1.158zM16.808,64.322l2.059,0.257l0.258,1.031l-1.545,0.386l-1.802,-0.516l-1.673,-0.772l-2.703,0.386zM52.465,70.759l1.803,0.257l1.157,0.774l-2.317,1.286l-2.703,1.029l-1.416,-0.643l-0.385,-1.288l2.445,-0.901l-1.416,0.514zM85.42,39.22l0,9.913l0,15.446l2.574,0l2.704,0.774l1.802,1.157l2.445,1.803l2.575,-1.545l2.703,-0.902l1.545,1.417l1.802,1.159l2.446,1.159l1.674,1.930l2.703,3.090l4.634,1.673l0,1.802l-1.417,1.287l-1.544,-1.029l-2.316,-0.901l-0.773,-2.318l-3.476,-2.189l-1.415,-2.573l-2.576,-0.129l-4.376,-0.129l-3.090,-0.773l-5.535,-2.703l-2.702,-0.514l-4.636,-1.031l-3.733,0.259l-5.278,-1.288l-3.217,-1.159l-2.962,0.643l0.515,1.804l-1.544,0.257l-3.090,0.515l-2.318,0.900l-2.961,0.644l-0.385,-1.673l1.159,-2.575l2.831,-0.900l-0.771,-0.645l-3.347,1.545l-1.802,1.802l-3.991,1.931l2.059,1.288l-2.574,1.931l-2.961,1.030l-2.704,0.900l-0.643,1.159l-4.119,1.416l-0.901,1.288l-3.090,1.158l-1.931,-0.258l-2.445,0.773l-2.832,0.901l-2.189,0.902l-4.634,0.772l-0.387,-0.516l2.962,-1.158l2.574,-0.901l2.832,-1.417l3.347,-0.385l1.416,-1.030l3.734,-1.673l0.514,-0.516l2.059,-0.901l0.386,-2.059l1.418,-1.545l-3.091,0.773l-0.901,-0.516l-1.415,1.031l-1.803,-1.417l-0.644,1.030l-1.029,-1.417l-2.704,1.160l-1.673,0l-0.257,-1.674l0.514,-0.901l-1.673,-1.029l-3.604,0.513l-2.189,-1.287l-1.931,-0.643l0,-1.545l-2.059,-1.030l1.029,-1.673l2.188,-1.416l1.030,-1.416l2.189,-0.129l1.802,0.386l2.189,-1.287l1.930,0.257l2.059,-0.901l-0.513,-1.158l-1.546,-0.515l2.059,-1.030l-1.673,0l-2.832,0.515l-0.772,0.643l-2.188,-0.514l-3.863,0.257l-3.861,-0.643l-1.158,-1.159l-3.476,-1.545l3.862,-1.030l6.050,-1.416l2.188,0l-0.386,1.416l5.665,-0.129l-2.189,-1.673l-3.347,-1.031l-1.931,-1.286l-2.574,-1.158l-3.605,-0.901l1.417,-1.417l4.762,-0.129l3.475,-1.158l0.644,-1.288l2.703,-1.287l2.704,-0.386l5.021,-1.159l2.574,0.128l4.119,-1.415l3.990,0.643l2.060,1.159l1.159,-0.515l4.505,0.128l-0.128,0.644l4.119,0.516l2.703,-0.258l5.664,0.773l5.278,0.257l2.060,0.386l3.604,-0.514l3.991,0.900l-2.961,-0.387zM2.647,55.182l1.673,0.515l1.674,-0.258l2.189,0.644l2.574,0.386l-0.128,0.258l-2.061,0.644l-2.059,-0.644l-1.030,-0.514l-2.446,0.128l-0.643,-0.128l-0.257,1.031zM45.256,175.546l0,-0.773l-0.385,-1.029l0.643,-0.643l-0.258,-0.516l0.129,-0.128l0,-0.129l1.803,0.773l0.256,0.385l0,0.258l0.258,0.129l0.129,0.128l0.385,0.387l-0.643,0.514l-0.772,0.129l-0.515,0.515l-0.258,0.387l0.772,0.387zM43.067,170.01l-0.385,0.258l-1.158,-0.128l0.128,-0.387l-1.415,-0.257zM44.999,170.912l0,0.257l-0.258,0.129l-0.900,0.128l-0.130,-0.514l-0.386,0l-0.258,-0.387l0.130,-0.128l0.257,-0.129l0.257,0.385l0.516,-0.128l-0.772,-0.387zM39.335,169.496l-0.515,-0.643l0.386,-0.130l0.515,-0.257l0.386,0.643l0.257,0l0.258,0.516l-0.515,0l-0.257,-0.129l-0.129,0l0.386,0zM34.829,167.564l0.129,-0.256l0.386,-0.259l0.643,0.130l0.130,0.129l-0.130,0.514l-0.256,0.258l-0.516,-0.129l0.386,0.387z";
}, function($ctx1) {$ctx1.fill(self,"UnitedStates",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "UnitedStates\x0a\x09^ 'M284.434,106.546l-2.704,0.772l-2.575,0.644l-3.089,1.673l-1.287,1.417l-0.258,0.386l-0.127,1.545l0.900,1.415l1.159,0l-0.259,-0.900l0.773,0.515l-0.257,0.772l-1.803,0.515l-1.286,-0.130l-1.931,0.517l-1.159,0.128l-1.673,0.128l-2.060,0.644l3.733,-0.387l0.128,0l0.773,0.515l-3.733,0.773l-1.802,0l0.129,-0.257l0.128,-0.644l-0.900,1.416l0.643,0l-0.515,2.060l-1.931,2.060l-0.257,-0.773l-0.516,-0.129l-0.643,-0.643l-0.129,0l-0.128,0l0.514,1.416l0.773,1.416l0.129,0.257l-1.030,0.901l-1.545,2.188l-0.258,-0.128l1.030,-1.802l-1.416,-1.287l-0.128,-2.060l-0.387,0.901l0,2.446l-1.673,-0.901l1.802,1.544l0.515,1.417l0.772,1.674l0.387,2.703l-1.803,1.930l-2.574,1.030l-2.318,1.417l-0.901,0.128l-1.158,1.931l-2.317,1.673l-2.832,1.288l-1.158,2.060l-0.516,1.415l0.387,2.061l1.030,2.187l1.159,2.061l0,1.029l1.157,2.703l0.129,2.447l-0.514,2.316l-1.159,0.516l-1.287,-0.386l-0.386,-1.159l-1.031,-0.644l-1.545,-2.317l-1.287,-1.931l-0.257,-1.287l0.515,-1.674l-0.643,-1.544l-1.803,-1.545l-1.416,-1.030l-3.089,1.158l-0.644,-0.772l-2.574,-1.287l-2.962,0.386l-2.445,-0.258l-1.674,0.515l-1.544,0l-0.258,1.160l0.772,1.543l-3.605,0.130l-2.316,-0.516l-1.545,-0.514l-2.059,-0.387l-2.318,-0.128l-2.317,0.643l-2.446,1.931l-2.702,1.158l-1.417,1.289l-0.644,1.287l0,1.802l0.129,1.287l0.515,0.901l-1.030,0.129l-1.931,-0.643l-2.188,-0.773l-0.772,-1.287l-0.515,-1.931l-1.545,-1.545l-1.030,-1.545l-1.288,-1.802l-1.930,-1.159l-2.189,0.130l-1.674,2.058l-2.316,-0.772l-1.288,-0.772l-0.772,-1.545l-0.900,-1.416l-1.545,-1.159l-1.416,-0.901l-0.902,-0.900l-4.633,0l-0.129,1.158l-2.060,0l-5.407,0l-6.178,-1.931l-3.992,-1.288l0.258,-0.515l-3.475,0.259l-3.090,0.256l-0.258,-1.029l-1.159,-1.416l-2.831,-1.545l-1.158,-0.129l-1.160,-0.900l-2.059,-0.130l-0.772,-0.515l-0.258,-1.416l-2.702,-2.704l-2.189,-3.732l0.128,-0.644l-1.287,-0.901l-2.059,-2.317l-0.386,-2.188l-1.417,-1.417l0.644,-2.189l-0.129,-2.317l-0.901,-1.544l0.901,-2.960l0.129,-2.962l0.514,-4.119l-0.771,-2.188l-0.387,-2.575l3.734,0.515l1.158,2.060l0.644,-0.773l-0.387,-2.188l-1.287,-2.189l15.962,0l2.704,0l32.182,0l18.536,0l5.536,0l0,-1.030l0.901,0l0.516,1.417l0.772,0.514l1.930,0.129l2.704,0.515l2.703,0.773l2.188,-0.387l3.219,0.773l0.385,0l0.515,0l0.258,-0.129l0.386,-0.129l0.387,-0.128l0.772,-0.258l0.643,-0.129l0.644,0.129l0.386,0.258l0.258,0l0.386,0.257l0.773,0.257l0.772,0.258l0.772,0.386l0.643,0.257l0.387,0.130l0.258,0.128l0.514,0.128l0.515,0.258l0.515,0.258l0.515,0.128l0.515,0.257l0.515,0.258l0.515,0.129l0.514,0.257l0.130,0.386l0.128,0.387l0.386,0.257l0.257,0l0.902,0l0.257,0l0,0.129l0,0.129l0,0.128l0,0.258l0.129,0l0.129,0.257l0.128,0l0.258,0.129l0.386,0.128l0.258,-0.128l0.128,0l0.258,0.258l0.128,0l0,0.129l-0.386,0.515l0.516,0.257l0.643,0.257l0.644,0.258l0.514,0.128l0.515,0.386l0.128,0.387l0,0.257l0.130,0.515l0.128,0.386l0.129,0.515l0.130,0.515l0.127,0.515l0,0.386l0.129,0.515l0.258,0.772l-0.129,0.258l-0.385,0.515l-0.259,0.515l0,0.129l0,0.128l-0.514,0.516l-0.772,1.030l-0.387,0.385l-0.257,0.515l0,0.257l0,0.130l0.257,0.257l0.387,0.257l0.514,0.129l0.644,0l0.643,-0.258l0.644,-0.257l0.644,-0.258l0.643,-0.385l0.644,-0.258l0.645,-0.129l0.900,-0.128l0.387,0l0.128,0l0.644,-0.129l0.643,-0.258l0.643,-0.257l0.902,-0.257l0.772,-0.258l0.386,-0.128l0.258,-0.130l0,-0.128l0,-0.258l-0.387,-0.772l0,-0.129l-0.257,-0.386l0.386,-0.129l0.515,-0.257l0.258,0l0.772,-0.128l0.643,0l0.902,0l0.772,0.128l0.901,0l0.516,0l0.643,0l0.257,-0.515l0.387,-0.386l0.256,-0.258l0.387,-0.258l2.703,-1.801l1.287,-0.516l4.120,0l4.891,0l0.258,-0.772l0.901,0l1.158,-0.515l0.902,-1.159l0.901,-2.187l2.060,-1.932l0.900,0.644l1.804,-0.386l1.157,0.772l0,3.605l1.803,1.545l0,-1.158zM16.808,64.322l2.059,0.257l0.258,1.031l-1.545,0.386l-1.802,-0.516l-1.673,-0.772l-2.703,0.386zM52.465,70.759l1.803,0.257l1.157,0.774l-2.317,1.286l-2.703,1.029l-1.416,-0.643l-0.385,-1.288l2.445,-0.901l-1.416,0.514zM85.42,39.22l0,9.913l0,15.446l2.574,0l2.704,0.774l1.802,1.157l2.445,1.803l2.575,-1.545l2.703,-0.902l1.545,1.417l1.802,1.159l2.446,1.159l1.674,1.930l2.703,3.090l4.634,1.673l0,1.802l-1.417,1.287l-1.544,-1.029l-2.316,-0.901l-0.773,-2.318l-3.476,-2.189l-1.415,-2.573l-2.576,-0.129l-4.376,-0.129l-3.090,-0.773l-5.535,-2.703l-2.702,-0.514l-4.636,-1.031l-3.733,0.259l-5.278,-1.288l-3.217,-1.159l-2.962,0.643l0.515,1.804l-1.544,0.257l-3.090,0.515l-2.318,0.900l-2.961,0.644l-0.385,-1.673l1.159,-2.575l2.831,-0.900l-0.771,-0.645l-3.347,1.545l-1.802,1.802l-3.991,1.931l2.059,1.288l-2.574,1.931l-2.961,1.030l-2.704,0.900l-0.643,1.159l-4.119,1.416l-0.901,1.288l-3.090,1.158l-1.931,-0.258l-2.445,0.773l-2.832,0.901l-2.189,0.902l-4.634,0.772l-0.387,-0.516l2.962,-1.158l2.574,-0.901l2.832,-1.417l3.347,-0.385l1.416,-1.030l3.734,-1.673l0.514,-0.516l2.059,-0.901l0.386,-2.059l1.418,-1.545l-3.091,0.773l-0.901,-0.516l-1.415,1.031l-1.803,-1.417l-0.644,1.030l-1.029,-1.417l-2.704,1.160l-1.673,0l-0.257,-1.674l0.514,-0.901l-1.673,-1.029l-3.604,0.513l-2.189,-1.287l-1.931,-0.643l0,-1.545l-2.059,-1.030l1.029,-1.673l2.188,-1.416l1.030,-1.416l2.189,-0.129l1.802,0.386l2.189,-1.287l1.930,0.257l2.059,-0.901l-0.513,-1.158l-1.546,-0.515l2.059,-1.030l-1.673,0l-2.832,0.515l-0.772,0.643l-2.188,-0.514l-3.863,0.257l-3.861,-0.643l-1.158,-1.159l-3.476,-1.545l3.862,-1.030l6.050,-1.416l2.188,0l-0.386,1.416l5.665,-0.129l-2.189,-1.673l-3.347,-1.031l-1.931,-1.286l-2.574,-1.158l-3.605,-0.901l1.417,-1.417l4.762,-0.129l3.475,-1.158l0.644,-1.288l2.703,-1.287l2.704,-0.386l5.021,-1.159l2.574,0.128l4.119,-1.415l3.990,0.643l2.060,1.159l1.159,-0.515l4.505,0.128l-0.128,0.644l4.119,0.516l2.703,-0.258l5.664,0.773l5.278,0.257l2.060,0.386l3.604,-0.514l3.991,0.900l-2.961,-0.387zM2.647,55.182l1.673,0.515l1.674,-0.258l2.189,0.644l2.574,0.386l-0.128,0.258l-2.061,0.644l-2.059,-0.644l-1.030,-0.514l-2.446,0.128l-0.643,-0.128l-0.257,1.031zM45.256,175.546l0,-0.773l-0.385,-1.029l0.643,-0.643l-0.258,-0.516l0.129,-0.128l0,-0.129l1.803,0.773l0.256,0.385l0,0.258l0.258,0.129l0.129,0.128l0.385,0.387l-0.643,0.514l-0.772,0.129l-0.515,0.515l-0.258,0.387l0.772,0.387zM43.067,170.01l-0.385,0.258l-1.158,-0.128l0.128,-0.387l-1.415,-0.257zM44.999,170.912l0,0.257l-0.258,0.129l-0.900,0.128l-0.130,-0.514l-0.386,0l-0.258,-0.387l0.130,-0.128l0.257,-0.129l0.257,0.385l0.516,-0.128l-0.772,-0.387zM39.335,169.496l-0.515,-0.643l0.386,-0.130l0.515,-0.257l0.386,0.643l0.257,0l0.258,0.516l-0.515,0l-0.257,-0.129l-0.129,0l0.386,0zM34.829,167.564l0.129,-0.256l0.386,-0.259l0.643,0.130l0.130,0.129l-0.130,0.514l-0.256,0.258l-0.516,-0.129l0.386,0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uruguay",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l1.674,-0.257l2.704,2.059l1.030,-0.130l2.702,1.805l2.189,1.414l1.545,1.804l-1.158,1.286l0.772,1.545l-1.159,1.674l-3.089,1.545l-2.060,-0.515l-1.416,0.257l-2.447,-1.157l-1.801,0.128l-1.674,-1.545l0.129,-1.674l0.643,-0.643l0,-2.705l0.644,-2.702l-0.772,2.189z";
}, function($ctx1) {$ctx1.fill(self,"Uruguay",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Uruguay\x0a\x09^ 'M310.05,308.396l1.674,-0.257l2.704,2.059l1.030,-0.130l2.702,1.805l2.189,1.414l1.545,1.804l-1.158,1.286l0.772,1.545l-1.159,1.674l-3.089,1.545l-2.060,-0.515l-1.416,0.257l-2.447,-1.157l-1.801,0.128l-1.674,-1.545l0.129,-1.674l0.643,-0.643l0,-2.705l0.644,-2.702l-0.772,2.189z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uzbekistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M644.487,126.371l0,-1.674l-3.604,-1.158l-2.832,-1.288l-1.674,-1.288l-3.089,-1.931l-1.289,-2.702l-1.029,-0.515l-2.832,0.128l-1.030,-0.515l-0.256,-2.188l-3.735,-1.416l-2.188,1.545l-2.315,0.901l0.384,1.417l-2.959,0l-0.130,-9.914l6.951,-1.544l0.515,0.129l0.644,0.386l1.159,0.515l2.317,1.030l2.189,1.029l2.574,2.446l3.219,-0.385l4.633,-0.259l3.219,2.060l-0.258,2.703l1.287,0l0.644,2.189l3.347,0.128l0.771,1.288l1.030,-0.129l1.160,-1.931l3.603,-1.802l1.547,-0.515l0.770,0.258l-2.317,1.801l2.061,1.030l1.929,-0.772l3.090,1.416l-3.346,1.932l-2.060,-0.257l-1.158,0.127l-0.386,-0.772l0.514,-1.287l-3.603,0.644l-0.775,1.801l-1.285,1.417l-2.318,-0.129l-0.643,1.159l1.931,0.644l0.645,2.060l-1.547,2.703l-2.059,-0.515l1.416,0z";
}, function($ctx1) {$ctx1.fill(self,"Uzbekistan",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Uzbekistan\x0a\x09^ 'M644.487,126.371l0,-1.674l-3.604,-1.158l-2.832,-1.288l-1.674,-1.288l-3.089,-1.931l-1.289,-2.702l-1.029,-0.515l-2.832,0.128l-1.030,-0.515l-0.256,-2.188l-3.735,-1.416l-2.188,1.545l-2.315,0.901l0.384,1.417l-2.959,0l-0.130,-9.914l6.951,-1.544l0.515,0.129l0.644,0.386l1.159,0.515l2.317,1.030l2.189,1.029l2.574,2.446l3.219,-0.385l4.633,-0.259l3.219,2.060l-0.258,2.703l1.287,0l0.644,2.189l3.347,0.128l0.771,1.288l1.030,-0.129l1.160,-1.931l3.603,-1.802l1.547,-0.515l0.770,0.258l-2.317,1.801l2.061,1.030l1.929,-0.772l3.090,1.416l-3.346,1.932l-2.060,-0.257l-1.158,0.127l-0.386,-0.772l0.514,-1.287l-3.603,0.644l-0.775,1.801l-1.285,1.417l-2.318,-0.129l-0.643,1.159l1.931,0.644l0.645,2.060l-1.547,2.703l-2.059,-0.515l1.416,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vanuatu",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M915.718,269.777l1.674,1.545l-0.901,0.387l-0.902,-1.160l-0.129,0.772zM914.56,269.133l-0.387,-0.643l0,-2.060l1.287,0.773l0.387,2.189l-0.774,-0.387l0.513,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Vanuatu",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Vanuatu\x0a\x09^ 'M915.718,269.777l1.674,1.545l-0.901,0.387l-0.902,-1.160l-0.129,0.772zM914.56,269.133l-0.387,-0.643l0,-2.060l1.287,0.773l0.387,2.189l-0.774,-0.387l0.513,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Venezuela",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M273.105,195.242l-0.128,0.644l-1.545,0.257l0.902,1.287l-0.129,1.416l-1.160,1.545l1.030,2.188l1.159,-0.257l0.643,-1.931l-0.900,-0.901l-0.129,-2.060l3.346,-1.159l-0.385,-1.158l1.029,-0.901l0.902,1.931l1.930,0l1.804,1.545l0,0.902l2.444,0l2.962,-0.259l1.544,1.159l2.060,0.387l1.416,-0.902l0.128,-0.644l3.218,-0.128l3.348,-0.130l-2.317,0.773l0.900,1.288l2.189,0.257l2.060,1.288l0.386,2.187l1.417,-0.128l1.028,0.645l-2.187,1.672l-0.130,0.902l0.902,1.029l-0.644,0.516l-1.673,0.385l0,1.287l-0.772,0.772l1.930,2.061l0.257,0.772l-0.900,1.030l-3.090,0.902l-1.930,0.515l-0.774,0.643l-2.059,-0.773l-2.060,-0.257l-0.514,0.257l1.158,0.643l0,1.804l0.387,1.672l2.188,0.259l0.128,0.514l-1.931,0.772l-0.257,1.159l-1.159,0.515l-1.930,0.644l-0.515,0.772l-2.060,0.129l-1.544,-1.417l-0.773,-2.703l-0.772,-0.901l-1.031,-0.644l1.416,-1.287l-0.127,-0.644l-0.773,-0.772l-0.516,-1.802l0.259,-1.931l0.513,-0.901l0.517,-1.416l-0.902,-0.515l-1.545,0.386l-1.931,-0.129l-1.158,0.258l-1.802,-2.317l-1.546,-0.387l-3.475,0.258l-0.644,-0.901l-0.772,-0.257l0,-0.516l0.257,-1.030l-0.128,-1.028l-0.644,-0.645l-0.387,-1.287l-1.415,-0.129l0.772,-1.545l0.387,-1.931l0.772,-1.030l1.029,-0.771l0.644,-1.289l-1.802,0.514z";
}, function($ctx1) {$ctx1.fill(self,"Venezuela",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Venezuela\x0a\x09^ 'M273.105,195.242l-0.128,0.644l-1.545,0.257l0.902,1.287l-0.129,1.416l-1.160,1.545l1.030,2.188l1.159,-0.257l0.643,-1.931l-0.900,-0.901l-0.129,-2.060l3.346,-1.159l-0.385,-1.158l1.029,-0.901l0.902,1.931l1.930,0l1.804,1.545l0,0.902l2.444,0l2.962,-0.259l1.544,1.159l2.060,0.387l1.416,-0.902l0.128,-0.644l3.218,-0.128l3.348,-0.130l-2.317,0.773l0.900,1.288l2.189,0.257l2.060,1.288l0.386,2.187l1.417,-0.128l1.028,0.645l-2.187,1.672l-0.130,0.902l0.902,1.029l-0.644,0.516l-1.673,0.385l0,1.287l-0.772,0.772l1.930,2.061l0.257,0.772l-0.900,1.030l-3.090,0.902l-1.930,0.515l-0.774,0.643l-2.059,-0.773l-2.060,-0.257l-0.514,0.257l1.158,0.643l0,1.804l0.387,1.672l2.188,0.259l0.128,0.514l-1.931,0.772l-0.257,1.159l-1.159,0.515l-1.930,0.644l-0.515,0.772l-2.060,0.129l-1.544,-1.417l-0.773,-2.703l-0.772,-0.901l-1.031,-0.644l1.416,-1.287l-0.127,-0.644l-0.773,-0.772l-0.516,-1.802l0.259,-1.931l0.513,-0.901l0.517,-1.416l-0.902,-0.515l-1.545,0.386l-1.931,-0.129l-1.158,0.258l-1.802,-2.317l-1.546,-0.387l-3.475,0.258l-0.644,-0.901l-0.772,-0.257l0,-0.516l0.257,-1.030l-0.128,-1.028l-0.644,-0.645l-0.387,-1.287l-1.415,-0.129l0.772,-1.545l0.387,-1.931l0.772,-1.030l1.029,-0.771l0.644,-1.289l-1.802,0.514z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vietnam",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M756.353,168.853l-3.606,2.316l-2.316,2.575l-0.514,1.930l2.059,2.832l2.445,3.476l2.445,1.675l1.674,2.188l1.287,5.020l-0.385,4.634l-2.318,1.802l-3.090,1.803l-2.187,2.188l-3.348,2.574l-0.902,-1.801l0.644,-1.803l-1.929,-1.544l2.316,-1.030l2.834,-0.258l-1.160,-1.674l4.506,-2.059l0.386,-3.218l-0.644,-1.803l0.387,-2.702l-0.645,-1.803l-2.061,-1.931l-1.673,-2.318l-2.188,-3.217l-3.219,-1.674l0.774,-0.902l1.672,-0.772l-1.028,-2.317l-3.347,0l-1.159,-2.446l-1.544,-2.188l1.416,-0.644l2.187,0l2.576,-0.257l2.317,-1.416l1.287,1.030l2.445,0.515l-0.387,1.545l1.289,1.029l-2.704,-0.645z";
}, function($ctx1) {$ctx1.fill(self,"Vietnam",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Vietnam\x0a\x09^ 'M756.353,168.853l-3.606,2.316l-2.316,2.575l-0.514,1.930l2.059,2.832l2.445,3.476l2.445,1.675l1.674,2.188l1.287,5.020l-0.385,4.634l-2.318,1.802l-3.090,1.803l-2.187,2.188l-3.348,2.574l-0.902,-1.801l0.644,-1.803l-1.929,-1.544l2.316,-1.030l2.834,-0.258l-1.160,-1.674l4.506,-2.059l0.386,-3.218l-0.644,-1.803l0.387,-2.702l-0.645,-1.803l-2.061,-1.931l-1.673,-2.318l-2.188,-3.217l-3.219,-1.674l0.774,-0.902l1.672,-0.772l-1.028,-2.317l-3.347,0l-1.159,-2.446l-1.544,-2.188l1.416,-0.644l2.187,0l2.576,-0.257l2.317,-1.416l1.287,1.030l2.445,0.515l-0.387,1.545l1.289,1.029l-2.704,-0.645z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "WesternSahara",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z";
}, function($ctx1) {$ctx1.fill(self,"WesternSahara",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "WesternSahara\x0a\x09^ 'M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Yemen",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M608.315,182.111l-1.931,0.772l-0.516,1.159l-0.127,0.901l-2.704,1.159l-4.249,1.287l-2.445,1.802l-1.158,0.258l-0.774,-0.258l-1.673,1.159l-1.673,0.515l-2.189,0.128l-0.772,0.130l-0.515,0.772l-0.772,0.128l-0.386,0.774l-1.287,-0.130l-0.903,0.387l-1.930,-0.129l-0.644,-1.545l0.129,-1.546l-0.516,-0.772l-0.513,-1.930l-0.772,-1.158l0.514,-0.129l-0.258,-1.159l0.388,-0.515l-0.130,-1.288l1.158,-0.772l-0.258,-1.158l0.645,-1.288l1.158,0.644l0.773,-0.257l3.090,0l0.514,0.257l2.574,0.257l1.031,-0.128l0.644,0.901l1.287,-0.515l1.931,-2.832l2.445,-1.159l7.853,-1.030l2.061,4.378l-0.900,-1.930z";
}, function($ctx1) {$ctx1.fill(self,"Yemen",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Yemen\x0a\x09^ 'M608.315,182.111l-1.931,0.772l-0.516,1.159l-0.127,0.901l-2.704,1.159l-4.249,1.287l-2.445,1.802l-1.158,0.258l-0.774,-0.258l-1.673,1.159l-1.673,0.515l-2.189,0.128l-0.772,0.130l-0.515,0.772l-0.772,0.128l-0.386,0.774l-1.287,-0.130l-0.903,0.387l-1.930,-0.129l-0.644,-1.545l0.129,-1.546l-0.516,-0.772l-0.513,-1.930l-0.772,-1.158l0.514,-0.129l-0.258,-1.159l0.388,-0.515l-0.130,-1.288l1.158,-0.772l-0.258,-1.158l0.645,-1.288l1.158,0.644l0.773,-0.257l3.090,0l0.514,0.257l2.574,0.257l1.031,-0.128l0.644,0.901l1.287,-0.515l1.931,-2.832l2.445,-1.159l7.853,-1.030l2.061,4.378l-0.900,-1.930z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zambia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Zambia",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Zambia\x0a\x09^ 'M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zimbabwe",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.";
}, function($ctx1) {$ctx1.fill(self,"Zimbabwe",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "Zimbabwe\x0a\x09^ 'M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "countries",
category: 'list of countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "BosniaandHerzegovina", "Botswana", "Brazil", "BruneiDarussalam", "Bulgaria", "BurkinaFaso", "Burundi", "Cambodia", "Cameroon", "Canada", "CentralAfricanRepublic", "Chad", "Chile", "China", "Colombia", "Congo", "CostaRica", "Croatia", "Cuba", "Cyprus", "CzechRepubilc", "DemocraticRepublicCongo", "Denmark", "Djibouti", "DominicanRepublic", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Eritrea", "Estonia", "Ethiopia", "FalklandIslandsMalvinas", "Fiji", "Finland", "France", "FrenchGuyana", "GM", "Gabon", "Georgia", "Germany", "Ghana", "GreatBritian", "Greece", "Greenland", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "IvoryCoast", "Jamacia", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Mali", "Mauritania", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique", "MyanmarBurma", "Nambia", "Nepal", "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "NorthKorea", "Norway", "Noumea", "Oman", "Pakistan", "Palestine", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Phillipines", "Poland", "Portugal", "PuertoRico", "Qatar", "RepublicofMacedonia", "RepublicofTurkey", "Romania", "Russia", "Rwanda", "SaudiArabia", "Senegal", "Serbia", "SierraLeone", "Slovakia", "SolomonIslands", "Somolia", "SouthAfrica", "SouthKorea", "Spain", "SriLanka", "Sudan", "Suriname", "SvalbardJanMayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "TimorLeste", "Togo", "Tunisia", "Turkmenistan", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "WesternSahara", "Yemen", "Zambia", "Zimbabwe"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"countries",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "countries\x0a\x09^ #(#Afghanistan #Albania #Algeria #Angola #Argentina #Armenia #Australia #Austria #Azerbaijan #Bangladesh #Belarus #Belgium #Belize #Benin #Bhutan #Bolivia #BosniaandHerzegovina #Botswana #Brazil #BruneiDarussalam #Bulgaria #BurkinaFaso #Burundi #Cambodia #Cameroon #Canada #CentralAfricanRepublic #Chad #Chile #China #Colombia #Congo #CostaRica #Croatia #Cuba #Cyprus #CzechRepubilc #DemocraticRepublicCongo #Denmark #Djibouti #DominicanRepublic #Ecuador #Egypt #ElSalvador #EquatorialGuinea #Eritrea #Estonia #Ethiopia #FalklandIslandsMalvinas #Fiji #Finland #France #FrenchGuyana #GM #Gabon #Georgia #Germany #Ghana #GreatBritian #Greece #Greenland #Guatemala #Guinea #GuineaBissau #Guyana #Haiti #Honduras #Hungary #Iceland #India #Indonesia #Iran #Iraq #Ireland #Israel #Italy #IvoryCoast #Jamacia #Japan #Jordan #Kazakhstan #Kenya #Kuwait #Kyrgyzstan #Laos #Latvia #Lebanon #Lesotho #Liberia #Libya #Lithuania #Luxembourg #Madagascar #Malawi #Malaysia #Mali #Mauritania #Mexico #Moldova #Mongolia #Morocco #Mozambique #MyanmarBurma #Nambia #Nepal #Netherlands #NewZealand #Nicaragua #Niger #Nigeria #NorthKorea #Norway #Noumea #Oman #Pakistan #Palestine #Panama #PapuaNewGuinea #Paraguay #Peru #Phillipines #Poland #Portugal #PuertoRico #Qatar #RepublicofMacedonia #RepublicofTurkey #Romania #Russia #Rwanda #SaudiArabia #Senegal #Serbia #SierraLeone #Slovakia #SolomonIslands #Somolia #SouthAfrica #SouthKorea #Spain #SriLanka #Sudan #Suriname #SvalbardJanMayen #Swaziland #Sweden #Switzerland #Syria #Taiwan #Tajikistan #Tanzania #Thailand #TimorLeste #Togo #Tunisia #Turkmenistan #Uganda #Ukraine #UnitedArabEmirates #UnitedStates #Uruguay #Uzbekistan #Vanuatu #Venezuela #Vietnam #WesternSahara #Yemen #Zambia #Zimbabwe)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "southAmerica",
category: 'list of countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Argentina", "Brazil", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"southAmerica",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "southAmerica\x0a\x09^ #(#Argentina #Brazil #Chile #Colombia #Ecuador #Paraguay #Peru #Uruguay #Venezuela)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
category: 'list of countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._countries();
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.ROCountryInfo.klass)})},
args: [],
source: "world\x0a\x09^ self countries",
messageSends: ["countries"],
referencedClasses: []
}),
smalltalk.ROCountryInfo.klass);


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
args: [],
source: "noPopup \x0a\x0a\x09selfDefinedInteraction add: [ :listOfElements | \x0a\x09\x09listOfElements do: [ :element | element removeInteraction: ROPopup ] ].",
messageSends: ["add:", "do:", "removeInteraction:"],
referencedClasses: ["ROPopup"]
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
args: ["aBlockOrSelector"],
source: "popupText: aBlockOrSelector\x0a\x0a\x09^ selfDefinedInteraction add: [ :element | \x0a\x09\x09\x09| int |\x0a\x09\x09\x09int := ROPopup text: aBlockOrSelector.\x0a\x09\x09\x09int textColor: Color black.\x0a\x09\x09\x09element changeInteraction: ROPopup for: int.\x0a\x09\x09\x09 ]",
messageSends: ["add:", "text:", "textColor:", "black", "changeInteraction:for:"],
referencedClasses: ["ROPopup", "Color"]
}),
smalltalk.ROInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupView:",
category: 'as yet unclassified',
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
args: ["aTwoArgsBlock"],
source: "popupView: aTwoArgsBlock\x0a\x0a\x09^ selfDefinedInteraction add: [ :element | \x0a\x09\x09\x09element changeInteraction: ROPopup for: \x0a\x09\x09\x09\x09(ROPopupView new \x0a\x09\x09\x09\x09\x09view: [ :anElement | \x0a\x09\x09\x09\x09\x09\x09| roView |\x0a\x09\x09\x09\x09\x09\x09roView := ROView new.\x0a\x09\x09\x09\x09\x09\x09aTwoArgsBlock value: anElement model value: roView.\x0a\x09\x09\x09\x09\x09\x09roView ] )  ]",
messageSends: ["add:", "changeInteraction:for:", "view:", "new", "value:value:", "model"],
referencedClasses: ["ROPopup", "ROView", "ROPopupView"]
}),
smalltalk.ROInteractionBuilder);



smalltalk.addClass('ROMapBuilder', smalltalk.ROObject, ['view', 'cities', 'shapeBuilder', 'interactionBuilder'], 'RoassalExtras-Geo');
smalltalk.addMethod(
smalltalk.method({
selector: "allCountries",
category: 'adding',
fn: function (){
var self=this;
function $ROCountryInfo(){return smalltalk.ROCountryInfo||(typeof ROCountryInfo=="undefined"?nil:ROCountryInfo)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROCountryInfo())._countries())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._country_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allCountries",{},smalltalk.ROMapBuilder)})},
args: [],
source: "allCountries\x0a\x09(ROCountryInfo countries) do: [:c | self country: c]",
messageSends: ["do:", "country:", "countries"],
referencedClasses: ["ROCountryInfo"]
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
function $ROCountryInfo(){return smalltalk.ROCountryInfo||(typeof ROCountryInfo=="undefined"?nil:ROCountryInfo)}
function $ROPath(){return smalltalk.ROPath||(typeof ROPath=="undefined"?nil:ROPath)}
return smalltalk.withContext(function($ctx1) { 
symbol=_st(aCountryName)._asSymbol();
_st(self["@view"])._add_(_st(_st($ROPath())._path_(_st($ROCountryInfo())._perform_(symbol)))._elementOn_(symbol));
return self}, function($ctx1) {$ctx1.fill(self,"country:",{aCountryName:aCountryName,symbol:symbol},smalltalk.ROMapBuilder)})},
args: ["aCountryName"],
source: "country: aCountryName\x0a\x09| symbol |\x0a\x09symbol := aCountryName asSymbol.\x0a\x09view add: ((ROPath path: (ROCountryInfo perform: symbol)) elementOn: symbol)",
messageSends: ["asSymbol", "add:", "elementOn:", "path:", "perform:"],
referencedClasses: ["ROCountryInfo", "ROPath"]
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
source: "view: aROView\x0a\x09view := aROView",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMapBuilder);



