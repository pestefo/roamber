smalltalk.addPackage('ARoassal-Test');
smalltalk.addClass('ROTest', smalltalk.TestCase, [], 'ARoassal-Test');


smalltalk.addClass('ROEdgeTest', smalltalk.ROTest, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
category: 'not yet classified',
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
args: [],
source: "testCreationFromShape\x0a\x09| el1 el2 edge |\x0a\x09el1 := ROBox element.\x0a\x09el2 := ROBox element.\x0a\x0a\x09edge := ROLine elementFrom: el1 to: el2.\x0a\x09self assert: edge class == ROEdge.",
messageSends: ["element", "elementFrom:to:", "assert:", "==", "class"],
referencedClasses: ["ROBox", "ROLine", "ROEdge"]
}),
smalltalk.ROEdgeTest);



smalltalk.addClass('ROElementTest', smalltalk.ROTest, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function (){
var self=this;
var element;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
element=_st($ROElement())._new();
self._assert_(_st(_st(element)._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)})},
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
args: [],
source: "testShapeSize\x0a\x0a\x09| shape el |\x0a\x09shape := ROBox new.\x0a\x09shape width: [ :e | e model + 1 ]; height: [ :e | e model + 2].\x0a\x09el := shape elementOn: 4.\x0a\x09self assert: (el width = 5).\x0a\x09self assert: (el height = 6).",
messageSends: ["new", "width:", "+", "model", "height:", "elementOn:", "assert:", "=", "width", "height"],
referencedClasses: ["ROBox"]
}),
smalltalk.ROElementTest);



smalltalk.addClass('ROShapeTest', smalltalk.ROTest, [], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testElementsOn",
category: 'not yet classified',
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
args: [],
source: "testElementsOn\x0a\x09| elements view |\x0a\x09elements := (ROBox new size: 20) elementsOn: (1 to: 10).\x0a\x09self assert: elements size = 10.\x0a\x09self assert: (elements anyOne extent = (20@20)).\x0a\x09self assert: elements anyOne height = 20.\x0a\x09self assert: elements anyOne width = 20.\x0a\x09\x0a\x09view := ROView new addAll: elements. \x0a\x09self assert: (view elements size = 10).\x0a\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09self deny: ( (view elements at: 1) position x  = ((view elements copyFrom: 2 to: 10) anyOne position x )).\x0a\x09\x22\x0a\x09ROAbstractComponent>>addShape\x0a\x09con cuales medidas me quedo?\x0a\x09\x0a\x09\x22",
messageSends: ["elementsOn:", "to:", "size:", "new", "assert:", "=", "size", "@", "extent", "anyOne", "height", "width", "addAll:", "elements", "on:", "deny:", "x", "position", "copyFrom:to:", "at:"],
referencedClasses: ["ROBox", "ROView", "ROHorizontalLineLayout"]
}),
smalltalk.ROShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testElementsOn2",
category: 'not yet classified',
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
args: [],
source: "testElementsOn2\x0a\x09| elements view |\x0a\x09view := ROView new.\x0a\x09elements := (ROBox new size: 20) elementsOn: (1 to: 10).\x0a\x09view addAll: elements.\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09\x0a\x09self assert: elements size = 10.\x0a\x09self assert: (elements allSatisfy: [ :el | el class == ROElement and: [ el shape class == ROBox ] ]).\x0a\x09self assert: (elements collect: [ :e | e position x ]) asSet size = 10.\x0a\x09",
messageSends: ["new", "elementsOn:", "to:", "size:", "addAll:", "on:", "elements", "assert:", "=", "size", "allSatisfy:", "and:", "==", "class", "shape", "asSet", "collect:", "x", "position"],
referencedClasses: ["ROView", "ROBox", "ROHorizontalLineLayout", "ROElement"]
}),
smalltalk.ROShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testExtentStrategy",
category: 'not yet classified',
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
args: [],
source: "testExtentStrategy\x0a\x09| e newShape |\x0a\x09\x22  Element is initialized with nullShape with an extent of 15@15  \x22\x0a\x09e := (ROElement on: 1) size: 15.\x0a\x09self assert: ((e width = 15) and: [ e height = 15 ]).\x0a\x09\x0a\x09\x22 Add a ROBox shape with extent 5@20\x22\x0a\x09newShape := ROBox new height: 20.\x0a\x09e + newShape.\x0a\x09\x0a\x09\x22 Element extent is now 15@20 \x22\x0a\x09self assert: ( (e width = 15) and: [ e height = 20] )\x0a\x0a\x09",
messageSends: ["size:", "on:", "assert:", "and:", "=", "height", "width", "height:", "new", "+"],
referencedClasses: ["ROElement", "ROBox"]
}),
smalltalk.ROShapeTest);



smalltalk.addClass('ROViewTest', smalltalk.ROTest, ['view'], 'ARoassal-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)})},
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
args: [],
source: "testTwoElements\x0a\x09| el1 el2 |\x0a\x09el1 := ROElement new shape: (ROBox new); yourself.\x0a\x09el2 := ROElement new shape: (ROBox new); yourself.\x0a\x09view add: el1; add: el2.\x0a\x09\x0a\x09self assert: view numberOfElements equals: 2",
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"],
referencedClasses: ["ROBox", "ROElement"]
}),
smalltalk.ROViewTest);



