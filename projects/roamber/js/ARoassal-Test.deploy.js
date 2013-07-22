smalltalk.addPackage('ARoassal-Test');
smalltalk.addClass('ROEdgeTest', smalltalk.TestCase, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function () {
var self=this;
var el1,el2,edge;
return smalltalk.withContext(function($ctx1) { el1=_st(_st((smalltalk.ROBox || ROBox))._new())._element();
el2=_st(_st((smalltalk.ROBox || ROBox))._new())._element();
edge=_st((smalltalk.ROEdge || ROEdge))._from_to_(el1,el2);
_st(self)._assert_(_st(_st(edge)._from()).__eq_eq(el1));
_st(self)._assert_(_st(_st(edge)._to()).__eq_eq(el2));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{el1:el1,el2:el2,edge:edge},smalltalk.ROEdgeTest)});},
messageSends: ["element", "new", "from:to:", "assert:", "==", "from", "to"]}),
smalltalk.ROEdgeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreationFromShape",
fn: function () {
var self=this;
var el1,el2,edge;
return smalltalk.withContext(function($ctx1) { el1=_st((smalltalk.ROBox || ROBox))._element();
el2=_st((smalltalk.ROBox || ROBox))._element();
edge=_st((smalltalk.ROLineShape || ROLineShape))._elementFrom_to_(el1,el2);
_st(self)._assert_(_st(_st(edge)._class()).__eq_eq((smalltalk.ROEdge || ROEdge)));
return self}, function($ctx1) {$ctx1.fill(self,"testCreationFromShape",{el1:el1,el2:el2,edge:edge},smalltalk.ROEdgeTest)});},
messageSends: ["element", "elementFrom:to:", "assert:", "==", "class"]}),
smalltalk.ROEdgeTest);



smalltalk.addClass('ROElementTest', smalltalk.TestCase, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function () {
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { element=_st((smalltalk.ROElement || ROElement))._new();
_st(self)._assert_(_st(_st(element)._position()).__eq(_st((0)).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)});},
messageSends: ["new", "assert:", "=", "@", "position"]}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExtent",
fn: function () {
var self=this;
var element,shape;
return smalltalk.withContext(function($ctx1) { element=_st((smalltalk.ROElement || ROElement))._new();
shape=_st((smalltalk.ROBox || ROBox))._new();
_st(shape)._width_((20));
_st(shape)._height_((30));
_st(element)._shape_(shape);
_st(self)._assert_(_st(_st(element)._width()).__eq((20)));
_st(self)._assert_(_st(_st(element)._height()).__eq((30)));
return self}, function($ctx1) {$ctx1.fill(self,"testExtent",{element:element,shape:shape},smalltalk.ROElementTest)});},
messageSends: ["new", "width:", "height:", "shape:", "assert:", "=", "width", "height"]}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeSize",
fn: function () {
var self=this;
var shape,el;
return smalltalk.withContext(function($ctx1) { var $1,$2;
shape=_st((smalltalk.ROBox || ROBox))._new();
$1=shape;
_st($1)._width_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(_st(e)._model()).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$2=_st($1)._height_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(_st(e)._model()).__plus((2));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
el=_st(shape)._elementOn_((4));
_st(self)._assert_(_st(_st(el)._width()).__eq((5)));
_st(self)._assert_(_st(_st(el)._height()).__eq((6)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeSize",{shape:shape,el:el},smalltalk.ROElementTest)});},
messageSends: ["new", "width:", "+", "model", "height:", "elementOn:", "assert:", "=", "width", "height"]}),
smalltalk.ROElementTest);



smalltalk.addClass('ROViewTest', smalltalk.TestCase, ['view'], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@view"]=_st((smalltalk.ROView || ROView))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)});},
messageSends: ["new"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)});},
messageSends: ["assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoElements",
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
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);



