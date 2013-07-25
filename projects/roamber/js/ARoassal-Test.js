smalltalk.addPackage('ARoassal-Test');
smalltalk.addClass('ROEdgeTest', smalltalk.TestCase, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
category: 'not yet classified',
fn: function () {
var self=this;
var el1,el2,edge;
return smalltalk.withContext(function($ctx1) { 
el2=_st(_st((smalltalk.ROBox || ROBox))._new())._element();
edge=_st((smalltalk.ROEdge || ROEdge))._from_to_(el1,el2);
_st(self)._assert_(_st(_st(edge)._from()).__eq_eq(el1));
_st(self)._assert_(_st(_st(edge)._to()).__eq_eq(el2));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{el1:el1,el2:el2,edge:edge},smalltalk.ROEdgeTest)});},
args: [],
source: "testCreation\x0a\x09| el1 el2 edge |\x0a\x09el1 := ROBox new element.\x0a\x09el2 := ROBox new element.\x0a\x09edge := ROEdge from: el1 to: el2.\x0a\x09self assert: (edge from == el1).\x0a\x09self assert: (edge to == el2).",
messageSends: ["element", "new", "from:to:", "assert:", "==", "from", "to"],
referencedClasses: ["ROBox", "ROEdge"]
}),
smalltalk.ROEdgeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreationFromShape",
category: 'not yet classified',
fn: function () {
var self=this;
var el1,el2,edge;
return smalltalk.withContext(function($ctx1) { 
el2=_st((smalltalk.ROBox || ROBox))._element();
edge=_st((smalltalk.ROLineShape || ROLineShape))._elementFrom_to_(el1,el2);
_st(self)._assert_(_st(_st(edge)._class()).__eq_eq((smalltalk.ROEdge || ROEdge)));
return self}, function($ctx1) {$ctx1.fill(self,"testCreationFromShape",{el1:el1,el2:el2,edge:edge},smalltalk.ROEdgeTest)});},
args: [],
source: "testCreationFromShape\x0a\x09| el1 el2 edge |\x0a\x09el1 := ROBox element.\x0a\x09el2 := ROBox element.\x0a\x0a\x09edge := ROLineShape elementFrom: el1 to: el2.\x0a\x09self assert: edge class == ROEdge.",
messageSends: ["element", "elementFrom:to:", "assert:", "==", "class"],
referencedClasses: ["ROBox", "ROLineShape", "ROEdge"]
}),
smalltalk.ROEdgeTest);



smalltalk.addClass('ROElementTest', smalltalk.TestCase, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function () {
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
_st(self)._assert_(_st(_st(element)._position()).__eq(_st((0)).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)});},
args: [],
source: "testCreation\x0a\x09| element |\x0a\x09element := ROElement new.\x0a\x09self assert: element position = (0 @ 0).",
messageSends: ["new", "assert:", "=", "@", "position"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExtent",
category: 'test',
fn: function () {
var self=this;
var element,shape;
return smalltalk.withContext(function($ctx1) { 
shape=_st((smalltalk.ROBox || ROBox))._new();
_st(shape)._width_((20));
_st(shape)._height_((30));
_st(element)._shape_(shape);
_st(self)._assert_(_st(_st(element)._width()).__eq((20)));
_st(self)._assert_(_st(_st(element)._height()).__eq((30)));
return self}, function($ctx1) {$ctx1.fill(self,"testExtent",{element:element,shape:shape},smalltalk.ROElementTest)});},
args: [],
source: "testExtent\x0a\x09| element shape |\x0a\x09element := ROElement new.\x0a\x09shape := ROBox new.\x0a\x09shape width: 20.\x0a\x09shape height: 30.\x0a\x09element shape: shape.\x0a\x09self assert: element width = 20.\x0a\x09self assert: element height = 30.",
messageSends: ["new", "width:", "height:", "shape:", "assert:", "=", "width", "height"],
referencedClasses: ["ROElement", "ROBox"]
}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeSize",
category: 'test shape size',
fn: function () {
var self=this;
var shape,el;
return smalltalk.withContext(function($ctx1) { 
shape=_st((smalltalk.ROBox || ROBox))._new();
$1=shape;
_st($1)._width_((function(e){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$2=_st($1)._height_((function(e){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
el=_st(shape)._elementOn_((4));
_st(self)._assert_(_st(_st(el)._width()).__eq((5)));
_st(self)._assert_(_st(_st(el)._height()).__eq((6)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeSize",{shape:shape,el:el},smalltalk.ROElementTest)});},
args: [],
source: "testShapeSize\x0a\x0a\x09| shape el |\x0a\x09shape := ROBox new.\x0a\x09shape width: [ :e | e model + 1 ]; height: [ :e | e model + 2].\x0a\x09el := shape elementOn: 4.\x0a\x09self assert: (el width = 5).\x0a\x09self assert: (el height = 6).",
messageSends: ["new", "width:", "+", "model", "height:", "elementOn:", "assert:", "=", "width", "height"],
referencedClasses: ["ROBox"]
}),
smalltalk.ROElementTest);



smalltalk.addClass('ROViewTest', smalltalk.TestCase, ['view'], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)});},
args: [],
source: "setUp\x0a\x09view := ROView new.",
messageSends: ["new"],
referencedClasses: ["ROView"]
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)});},
args: [],
source: "testCreation\x0a\x0a\x09self assert: view numberOfElements equals: 0.",
messageSends: ["assert:equals:", "numberOfElements"],
referencedClasses: []
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoElements",
category: 'test',
fn: function () {
var self=this;
var el1,el2;
return smalltalk.withContext(function($ctx1) { 
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


