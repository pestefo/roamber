smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROElementTest', smalltalk.TestCase, [], 'ARoassal');
smalltalk.addMethod(
"_testCreation",
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { element=_st((smalltalk.ROElement || ROElement))._new();
_st(self)._assert_(_st(_st(element)._position()).__eq(_st((0)).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)})},
messageSends: ["new", "assert:", "=", "@", "position"]}),
smalltalk.ROElementTest);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROElement', smalltalk.ROObject, ['shape', 'position'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)})},
messageSends: ["drawOn:for:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=_st((0)).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)})},
messageSends: ["initialize", "@"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape",
smalltalk.method({
selector: "shape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape_",
smalltalk.method({
selector: "shape:",
fn: function (aROShape){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);



smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal');
smalltalk.addMethod(
"_create",
smalltalk.method({
selector: "create",
fn: function (){
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)})},
messageSends: ["new", "add:", "shape:", "open"]}),
smalltalk.ROExample);



smalltalk.addClass('ROShape', smalltalk.ROObject, ['d3Shape', 'color'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, ['height', 'width'], 'ARoassal');
smalltalk.addMethod(
"_defaultSize",
smalltalk.method({
selector: "defaultSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
var nodes;
return smalltalk.withContext(function($ctx1) { nodes=_st(_st(canvas)._selectAll_("rect"))._data_(anElement);
_st(_st(nodes)._enter())._append_("rect");
_st(nodes)._attr_value_("class","elements");
_st(nodes)._attr_value_("height",(10));
_st(nodes)._attr_value_("width",(10));
_st(nodes)._attr_value_("fill","green");
_st(nodes)._attr_value_("x",_st(_st(anElement)._position())._x());
_st(nodes)._attr_value_("y",(20));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement,nodes:nodes},smalltalk.ROBox)})},
messageSends: ["data:", "selectAll:", "append:", "enter", "attr:value:", "x", "position"]}),
smalltalk.ROBox);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=_st(self)._defaultSize();
self["@height"]=_st(self)._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)})},
messageSends: ["initialize", "defaultSize"]}),
smalltalk.ROBox);



smalltalk.addClass('ROCircle', smalltalk.ROShape, ['radius'], 'ARoassal');
smalltalk.addMethod(
"_defaultRadius",
smalltalk.method({
selector: "defaultRadius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)})},
messageSends: []}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
messageSends: []}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=_st(self)._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)})},
messageSends: ["initialize", "defaultRadius"]}),
smalltalk.ROCircle);



smalltalk.addClass('ROView', smalltalk.ROObject, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)})},
messageSends: ["add:"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st((smalltalk.Array || Array))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
messageSends: ["initialize", "new"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_numberOfElements",
smalltalk.method({
selector: "numberOfElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)})},
messageSends: ["size"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@svgCanvas"]=_st(d3)._select_("#svgCanvas");
_st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)})},
messageSends: ["select:", "do:", "drawOn:"]}),
smalltalk.ROView);



smalltalk.addClass('ROViewTest', smalltalk.TestCase, ['view'], 'ARoassal');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@view"]=_st((smalltalk.ROView || ROView))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)})},
messageSends: ["new"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
"_testCreation",
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)})},
messageSends: ["assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
"_testTwoElements",
smalltalk.method({
selector: "testTwoElements",
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"testTwoElements",{el1:el1,el2:el2},smalltalk.ROViewTest)})},
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);



