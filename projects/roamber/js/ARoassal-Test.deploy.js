smalltalk.addPackage('ARoassal-Test');
smalltalk.addClass('ROTest', smalltalk.TestCase, [], 'ARoassal-Test');


smalltalk.addClass('ROEdgeTest', smalltalk.ROTest, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
var el1,el2,edge;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
el1=_st(_st($ROBox())._new())._element();
el2=_st(_st($ROBox())._new())._element();
edge=_st($ROEdge())._from_to_(el1,el2);
self._assert_(_st(_st(edge)._from()).__eq_eq(el1));
self._assert_(_st(_st(edge)._to()).__eq_eq(el2));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{el1:el1,el2:el2,edge:edge},smalltalk.ROEdgeTest)})},
messageSends: ["element", "new", "from:to:", "assert:", "==", "from", "to"]}),
smalltalk.ROEdgeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreationFromShape",
fn: function (){
var self=this;
var el1,el2,edge;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
el1=_st($ROBox())._element();
el2=_st($ROBox())._element();
edge=_st($ROLine())._elementFrom_to_(el1,el2);
self._assert_(_st(_st(edge)._class()).__eq_eq($ROEdge()));
return self}, function($ctx1) {$ctx1.fill(self,"testCreationFromShape",{el1:el1,el2:el2,edge:edge},smalltalk.ROEdgeTest)})},
messageSends: ["element", "elementFrom:to:", "assert:", "==", "class"]}),
smalltalk.ROEdgeTest);



smalltalk.addClass('ROElementTest', smalltalk.ROTest, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
var element;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
element=_st($ROElement())._new();
self._assert_(_st(_st(element)._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)})},
messageSends: ["new", "assert:", "=", "@", "position"]}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExtent",
fn: function (){
var self=this;
var element,shape;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
element=_st($ROElement())._new();
shape=_st($ROBox())._new();
_st(shape)._width_((20));
_st(shape)._height_((30));
_st(element)._shape_(shape);
self._assert_(_st(_st(element)._width()).__eq((20)));
self._assert_(_st(_st(element)._height()).__eq((30)));
return self}, function($ctx1) {$ctx1.fill(self,"testExtent",{element:element,shape:shape},smalltalk.ROElementTest)})},
messageSends: ["new", "width:", "height:", "shape:", "assert:", "=", "width", "height"]}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeSize",
fn: function (){
var self=this;
var shape,el;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
shape=_st($ROBox())._new();
$1=shape;
_st($1)._width_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._model()).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$2=_st($1)._height_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._model()).__plus((2));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
el=_st(shape)._elementOn_((4));
self._assert_(_st(_st(el)._width()).__eq((5)));
self._assert_(_st(_st(el)._height()).__eq((6)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeSize",{shape:shape,el:el},smalltalk.ROElementTest)})},
messageSends: ["new", "width:", "+", "model", "height:", "elementOn:", "assert:", "=", "width", "height"]}),
smalltalk.ROElementTest);



smalltalk.addClass('ROShapeTest', smalltalk.ROTest, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testElementsOn",
fn: function (){
var self=this;
var elements,view;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
elements=_st(_st(_st($ROBox())._new())._size_((20)))._elementsOn_((1)._to_((10)));
self._assert_(_st(_st(elements)._size()).__eq((10)));
self._assert_(_st(_st(_st(elements)._anyOne())._extent()).__eq((20).__at((20))));
self._assert_(_st(_st(_st(elements)._anyOne())._height()).__eq((20)));
self._assert_(_st(_st(_st(elements)._anyOne())._width()).__eq((20)));
view=_st(_st($ROView())._new())._addAll_(elements);
self._assert_(_st(_st(_st(view)._elements())._size()).__eq((10)));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
self._deny_(_st(_st(_st(_st(_st(view)._elements())._at_((1)))._position())._x()).__eq(_st(_st(_st(_st(_st(view)._elements())._copyFrom_to_((2),(10)))._anyOne())._position())._x()));
return self}, function($ctx1) {$ctx1.fill(self,"testElementsOn",{elements:elements,view:view},smalltalk.ROShapeTest)})},
messageSends: ["elementsOn:", "to:", "size:", "new", "assert:", "=", "size", "@", "extent", "anyOne", "height", "width", "addAll:", "elements", "on:", "deny:", "x", "position", "copyFrom:to:", "at:"]}),
smalltalk.ROShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testElementsOn2",
fn: function (){
var self=this;
var elements,view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
elements=_st(_st(_st($ROBox())._new())._size_((20)))._elementsOn_((1)._to_((10)));
_st(view)._addAll_(elements);
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
self._assert_(_st(_st(elements)._size()).__eq((10)));
self._assert_(_st(elements)._allSatisfy_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(el)._class()).__eq_eq($ROElement()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(el)._shape())._class()).__eq_eq($ROBox());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})})));
self._assert_(_st(_st(_st(_st(elements)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._position())._x();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})))._asSet())._size()).__eq((10)));
return self}, function($ctx1) {$ctx1.fill(self,"testElementsOn2",{elements:elements,view:view},smalltalk.ROShapeTest)})},
messageSends: ["new", "elementsOn:", "to:", "size:", "addAll:", "on:", "elements", "assert:", "=", "size", "allSatisfy:", "and:", "==", "class", "shape", "asSet", "collect:", "x", "position"]}),
smalltalk.ROShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExtentStrategy",
fn: function (){
var self=this;
var e,newShape;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
e=_st(_st($ROElement())._on_((1)))._size_((15));
self._assert_(_st(_st(_st(e)._width()).__eq((15)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._height()).__eq((15));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
newShape=_st(_st($ROBox())._new())._height_((20));
_st(e).__plus(newShape);
self._assert_(_st(_st(_st(e)._width()).__eq((15)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._height()).__eq((20));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"testExtentStrategy",{e:e,newShape:newShape},smalltalk.ROShapeTest)})},
messageSends: ["size:", "on:", "assert:", "and:", "=", "height", "width", "height:", "new", "+"]}),
smalltalk.ROShapeTest);



smalltalk.addClass('ROViewTest', smalltalk.ROTest, ['view'], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)})},
messageSends: ["new"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)})},
messageSends: ["assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoElements",
fn: function (){
var self=this;
var el1,el2;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st($ROElement())._new();
_st($1)._shape_(_st($ROBox())._new());
$2=_st($1)._yourself();
el1=$2;
$3=_st($ROElement())._new();
_st($3)._shape_(_st($ROBox())._new());
$4=_st($3)._yourself();
el2=$4;
$5=self["@view"];
_st($5)._add_(el1);
$6=_st($5)._add_(el2);
self._assert_equals_(_st(self["@view"])._numberOfElements(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoElements",{el1:el1,el2:el2},smalltalk.ROViewTest)})},
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);



