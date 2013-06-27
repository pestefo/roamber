smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROElementTest', smalltalk.TestCase, [], 'ARoassal');
smalltalk.addMethod(
"_testCreation",
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function () {
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { element=_st((smalltalk.ROElement || ROElement))._new();
_st(self)._assert_(_st(_st(element)._position()).__eq(_st((0)).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)});},
args: [],
source: "testCreation\x0a\x09| element |\x0a\x09element := ROElement new.\x0a\x09self assert: element position = (0 @ 0).",
messageSends: ["new", "assert:", "=", "@", "position"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROElementTest);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROElement', smalltalk.ROObject, ['shape', 'position'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)});},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=_st((0)).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)});},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape",
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)});},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape_",
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aROShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)});},
args: ["aROShape"],
source: "shape: aROShape\x0a\x09shape := aROShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);



smalltalk.addClass('ROShape', smalltalk.ROObject, ['d3Shape', 'color'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)});},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09\x22abstract method - Please override it to do what you actually need\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, ['height', 'width'], 'ARoassal');
smalltalk.addMethod(
"_defaultSize",
smalltalk.method({
selector: "defaultSize",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)});},
args: [],
source: "defaultSize\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)});},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=_st(self)._defaultSize();
self["@height"]=_st(self)._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := self defaultSize.\x0a\x09height := self defaultSize.",
messageSends: ["initialize", "defaultSize"],
referencedClasses: []
}),
smalltalk.ROBox);



smalltalk.addClass('ROCircle', smalltalk.ROShape, ['radius'], 'ARoassal');
smalltalk.addMethod(
"_defaultRadius",
smalltalk.method({
selector: "defaultRadius",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)});},
args: [],
source: "defaultRadius\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)});},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=_st(self)._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09radius := self defaultRadius",
messageSends: ["initialize", "defaultRadius"],
referencedClasses: []
}),
smalltalk.ROCircle);



smalltalk.addClass('ROView', smalltalk.ROObject, ['elements'], 'ARoassal');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)});},
args: ["anElement"],
source: "add: anElement\x0a\x09elements add: anElement",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st((smalltalk.Array || Array))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := Array new\x0a\x09",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ROView);

smalltalk.addMethod(
"_numberOfElements",
smalltalk.method({
selector: "numberOfElements",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)});},
args: [],
source: "numberOfElements\x0a\x09^ elements size\x0a\x09",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'public - opening',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)});},
args: [],
source: "open\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);



smalltalk.addClass('ROViewTest', smalltalk.TestCase, ['view'], 'ARoassal');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@view"]=_st((smalltalk.ROView || ROView))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)});},
args: [],
source: "setUp\x0a\x09view := ROView new.\x0a\x09",
messageSends: ["new"],
referencedClasses: ["ROView"]
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
"_testCreation",
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)});},
args: [],
source: "testCreation\x0a\x0a\x09self assert: view numberOfElements equals: 0.",
messageSends: ["assert:equals:", "numberOfElements"],
referencedClasses: []
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
"_testTwoElements",
smalltalk.method({
selector: "testTwoElements",
category: 'test',
fn: function () {
var self=this;
var el1,el2;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=_st((smalltalk.ROElement || ROElement))._new();
_st($1)._shape_(_st((smalltalk.ROBox || ROBox))._new());
$2=_st($1)._yourself();
el1=$2;
$3=_st((smalltalk.ROElement || ROElement))._new();
_st($3)._shape_(_st((smalltalk.ROBox || ROBox))._new());
$4=_st($3)._yourself();
el2=$4;
$5=self["@view"];
_st($5)._add_(el1);
$6=_st($5)._add_(el2);
_st(self)._assert_equals_(_st(self["@view"])._numberOfElements(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoElements",{el1:el1,el2:el2},smalltalk.ROViewTest)});},
args: [],
source: "testTwoElements\x0a\x09| el1 el2 |\x0a\x09el1 := ROElement new shape: (ROBox new); yourself.\x0a\x09el2 := ROElement new shape: (ROBox new); yourself.\x0a\x09view add: el1; add: el2.\x0a\x09\x0a\x09self assert: view numberOfElements equals: 2",
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"],
referencedClasses: ["ROBox", "ROElement"]
}),
smalltalk.ROViewTest);



