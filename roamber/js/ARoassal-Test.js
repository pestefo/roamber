define("roamber/ARoassal-Test", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-Test');
smalltalk.packages["ARoassal-Test"].transport = {"type":"amd","amdNamespace":"roamber"};

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
var $1,$2;
$1=_st($ROBox())._new();
$ctx1.sendIdx["new"]=1;
el1=_st($1)._element();
$ctx1.sendIdx["element"]=1;
el2=_st(_st($ROBox())._new())._element();
edge=_st($ROEdge())._from_to_(el1,el2);
$2=_st(_st(edge)._from()).__eq_eq(el1);
$ctx1.sendIdx["=="]=1;
self._assert_($2);
$ctx1.sendIdx["assert:"]=1;
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
$ctx1.sendIdx["element"]=1;
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
messageSends: ["new", "assert:", "=", "position", "@"],
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
var $1;
element=_st($ROElement())._new();
$ctx1.sendIdx["new"]=1;
shape=_st($ROBox())._new();
_st(shape)._width_((20));
_st(shape)._height_((30));
_st(element)._shape_(shape);
$1=_st(_st(element)._width()).__eq((20));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
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
var $1,$2,$3,$4;
shape=_st($ROBox())._new();
$1=shape;
_st($1)._width_((function(e){
return smalltalk.withContext(function($ctx2) {
$2=_st(e)._model();
$ctx2.sendIdx["model"]=1;
return _st($2).__plus((1));
$ctx2.sendIdx["+"]=1;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
$3=_st($1)._height_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._model()).__plus((2));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
el=_st(shape)._elementOn_((4));
$4=_st(_st(el)._width()).__eq((5));
$ctx1.sendIdx["="]=1;
self._assert_($4);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(el)._height()).__eq((6)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeSize",{shape:shape,el:el},smalltalk.ROElementTest)})},
args: [],
source: "testShapeSize\x0a\x0a\x09| shape el |\x0a\x09shape := ROBox new.\x0a\x09shape width: [ :e | e model + 1 ]; height: [ :e | e model + 2].\x0a\x09el := shape elementOn: 4.\x0a\x09self assert: (el width = 5).\x0a\x09self assert: (el height = 6).",
messageSends: ["new", "width:", "+", "model", "height:", "elementOn:", "assert:", "=", "width", "height"],
referencedClasses: ["ROBox"]
}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslateBy",
category: 'test shape size',
fn: function (){
var self=this;
var element;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7;
element=_st($ROElement())._new();
$1=element;
$2=(10).__at((80));
$ctx1.sendIdx["@"]=1;
_st($1)._translateBy_($2);
$ctx1.sendIdx["translateBy:"]=1;
$4=_st(element)._position();
$ctx1.sendIdx["position"]=1;
$5=(10).__at((80));
$ctx1.sendIdx["@"]=2;
$3=_st($4).__eq($5);
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$6=element;
$7=(-5).__at((100));
$ctx1.sendIdx["@"]=3;
_st($6)._translateBy_($7);
self._assert_(_st(_st(element)._position()).__eq((5).__at((180))));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{element:element},smalltalk.ROElementTest)})},
args: [],
source: "testTranslateBy\x0a\x09|element|\x0a\x09element := ROElement new.\x0a\x09element translateBy: 10@80. \x0a\x09\x220 + 10 @ 0 + 80 = 10@80\x22\x0a\x09self assert: element position = (10 @ 80).\x0a\x09element translateBy: -5@100.\x0a\x09self assert: element position = (5 @ 180).",
messageSends: ["new", "translateBy:", "@", "assert:", "=", "position"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROElementTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslateTo",
category: 'test shape size',
fn: function (){
var self=this;
var element;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$8,$7;
element=_st($ROElement())._new();
$1=element;
$2=(10).__at((80));
$ctx1.sendIdx["@"]=1;
_st($1)._translateTo_($2);
$ctx1.sendIdx["translateTo:"]=1;
$4=_st(element)._position();
$ctx1.sendIdx["position"]=1;
$5=(10).__at((80));
$ctx1.sendIdx["@"]=2;
$3=_st($4).__eq($5);
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$6=element;
$8=(20)._negated();
$ctx1.sendIdx["negated"]=1;
$7=(300).__at($8);
$ctx1.sendIdx["@"]=3;
_st($6)._translateTo_($7);
self._assert_(_st(_st(element)._position()).__eq((300).__at((20)._negated())));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateTo",{element:element},smalltalk.ROElementTest)})},
args: [],
source: "testTranslateTo\x0a\x09|element|\x0a\x09element := ROElement new.\x0a\x09element translateTo: 10@80.\x0a\x09self assert: element position = (10 @ 80).\x0a\x09element translateTo: 300@ (20 negated).\x0a\x09self assert: element position = (300@(20 negated)).",
messageSends: ["new", "translateTo:", "@", "assert:", "=", "position", "negated"],
referencedClasses: ["ROElement"]
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
var $2,$1,$4,$3,$7,$6,$5,$10,$9,$8,$13,$12,$11,$16,$15,$14,$17,$22,$21,$20,$19,$18;
$2=_st($ROBox())._new();
$ctx1.sendIdx["new"]=1;
$1=_st($2)._size_((20));
elements=_st($1)._elementsOn_((1)._to_((10)));
$4=_st(elements)._size();
$ctx1.sendIdx["size"]=1;
$3=_st($4).__eq((10));
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$7=_st(elements)._anyOne();
$ctx1.sendIdx["anyOne"]=1;
$6=_st($7)._extent();
$5=_st($6).__eq((20).__at((20)));
$ctx1.sendIdx["="]=2;
self._assert_($5);
$ctx1.sendIdx["assert:"]=2;
$10=_st(elements)._anyOne();
$ctx1.sendIdx["anyOne"]=2;
$9=_st($10)._height();
$8=_st($9).__eq((20));
$ctx1.sendIdx["="]=3;
self._assert_($8);
$ctx1.sendIdx["assert:"]=3;
$13=_st(elements)._anyOne();
$ctx1.sendIdx["anyOne"]=3;
$12=_st($13)._width();
$11=_st($12).__eq((20));
$ctx1.sendIdx["="]=4;
self._assert_($11);
$ctx1.sendIdx["assert:"]=4;
view=_st(_st($ROView())._new())._addAll_(elements);
$16=_st(view)._elements();
$ctx1.sendIdx["elements"]=1;
$15=_st($16)._size();
$14=_st($15).__eq((10));
$ctx1.sendIdx["="]=5;
self._assert_($14);
$17=_st(view)._elements();
$ctx1.sendIdx["elements"]=2;
_st($ROHorizontalLineLayout())._on_($17);
$22=_st(view)._elements();
$ctx1.sendIdx["elements"]=3;
$21=_st($22)._at_((1));
$20=_st($21)._position();
$ctx1.sendIdx["position"]=1;
$19=_st($20)._x();
$ctx1.sendIdx["x"]=1;
$18=_st($19).__eq(_st(_st(_st(_st(_st(view)._elements())._copyFrom_to_((2),(10)))._anyOne())._position())._x());
self._deny_($18);
return self}, function($ctx1) {$ctx1.fill(self,"testElementsOn",{elements:elements,view:view},smalltalk.ROShapeTest)})},
args: [],
source: "testElementsOn\x0a\x09| elements view |\x0a\x09elements := (ROBox new size: 20) elementsOn: (1 to: 10).\x0a\x09self assert: elements size = 10.\x0a\x09self assert: (elements anyOne extent = (20@20)).\x0a\x09self assert: elements anyOne height = 20.\x0a\x09self assert: elements anyOne width = 20.\x0a\x09\x0a\x09view := ROView new addAll: elements. \x0a\x09self assert: (view elements size = 10).\x0a\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09self deny: ( (view elements at: 1) position x  = ((view elements copyFrom: 2 to: 10) anyOne position x )).\x0a\x09\x22\x0a\x09ROAbstractComponent>>addShape\x0a\x09con cuales medidas me quedo?\x0a\x09\x0a\x09\x22",
messageSends: ["elementsOn:", "size:", "new", "to:", "assert:", "=", "size", "extent", "anyOne", "@", "height", "width", "addAll:", "elements", "on:", "deny:", "x", "position", "at:", "copyFrom:to:"],
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
var $2,$1,$4,$3;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
elements=_st(_st(_st($ROBox())._new())._size_((20)))._elementsOn_((1)._to_((10)));
_st(view)._addAll_(elements);
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
$2=_st(elements)._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__eq((10));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(elements)._allSatisfy_((function(el){
return smalltalk.withContext(function($ctx2) {
$4=_st(el)._class();
$ctx2.sendIdx["class"]=1;
$3=_st($4).__eq_eq($ROElement());
$ctx2.sendIdx["=="]=1;
return _st($3)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(el)._shape())._class()).__eq_eq($ROBox());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1,1)})})));
$ctx1.sendIdx["assert:"]=2;
self._assert_(_st(_st(_st(_st(elements)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._position())._x();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)})})))._asSet())._size()).__eq((10)));
return self}, function($ctx1) {$ctx1.fill(self,"testElementsOn2",{elements:elements,view:view},smalltalk.ROShapeTest)})},
args: [],
source: "testElementsOn2\x0a\x09| elements view |\x0a\x09view := ROView new.\x0a\x09elements := (ROBox new size: 20) elementsOn: (1 to: 10).\x0a\x09view addAll: elements.\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09\x0a\x09self assert: elements size = 10.\x0a\x09self assert: (elements allSatisfy: [ :el | el class == ROElement and: [ el shape class == ROBox ] ]).\x0a\x09self assert: (elements collect: [ :e | e position x ]) asSet size = 10.",
messageSends: ["new", "elementsOn:", "size:", "to:", "addAll:", "on:", "elements", "assert:", "=", "size", "allSatisfy:", "and:", "==", "class", "shape", "asSet", "collect:", "x", "position"],
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
var $3,$2,$4,$1,$6,$5;
e=_st(_st($ROElement())._on_((1)))._size_((15));
$3=_st(e)._width();
$ctx1.sendIdx["width"]=1;
$2=_st($3).__eq((15));
$ctx1.sendIdx["="]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(e)._height();
$ctx2.sendIdx["height"]=1;
return _st($4).__eq((15));
$ctx2.sendIdx["="]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["and:"]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
newShape=_st(_st($ROBox())._new())._height_((20));
_st(e).__plus(newShape);
$6=_st(_st(e)._width()).__eq((15));
$ctx1.sendIdx["="]=3;
$5=_st($6)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._height()).__eq((20));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
self._assert_($5);
return self}, function($ctx1) {$ctx1.fill(self,"testExtentStrategy",{e:e,newShape:newShape},smalltalk.ROShapeTest)})},
args: [],
source: "testExtentStrategy\x0a\x09| e newShape |\x0a\x09\x22  Element is initialized with nullShape with an extent of 15@15  \x22\x0a\x09e := (ROElement on: 1) size: 15.\x0a\x09self assert: ((e width = 15) and: [ e height = 15 ]).\x0a\x09\x0a\x09\x22 Add a ROBox shape with extent 5@20\x22\x0a\x09newShape := ROBox new height: 20.\x0a\x09e + newShape.\x0a\x09\x0a\x09\x22 Element extent is now 15@20 \x22\x0a\x09self assert: ( (e width = 15) and: [ e height = 20] )",
messageSends: ["size:", "on:", "assert:", "and:", "=", "width", "height", "height:", "new", "+"],
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
selector: "testTranslateBy",
category: 'running',
fn: function (){
var self=this;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$5,$3,$7,$8,$6,$10,$11,$9,$2,$12,$13,$17,$16,$15,$14;
$1=self["@view"];
$4=_st($ROBox())._element();
$ctx1.sendIdx["element"]=1;
$5=(40).__at((10));
$ctx1.sendIdx["@"]=1;
$3=_st($4)._translateTo_($5);
$ctx1.sendIdx["translateTo:"]=1;
$7=_st($ROEllipse())._element();
$ctx1.sendIdx["element"]=2;
$8=(100).__at((20));
$ctx1.sendIdx["@"]=2;
$6=_st($7)._translateTo_($8);
$ctx1.sendIdx["translateTo:"]=2;
$10=_st($ROSVGPath())._element();
$11=(0).__at((100));
$ctx1.sendIdx["@"]=3;
$9=_st($10)._translateTo_($11);
$2=[$3,$6,$9,_st($ROElement())._new()];
_st($1)._addAll_($2);
$12=self["@view"];
$13=(10).__at((10));
$ctx1.sendIdx["@"]=4;
_st($12)._translateBy_($13);
$17=_st(self["@view"])._elements();
$ctx1.sendIdx["elements"]=1;
$16=_st($17)._at_((1));
$ctx1.sendIdx["at:"]=1;
$15=_st($16)._position();
$ctx1.sendIdx["position"]=1;
$14=_st($15)._asString();
_st($Transcript())._show_($14);
self._assert_(_st(_st(_st(_st(self["@view"])._elements())._at_((1)))._position()).__eq((50).__at((20))));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslateBy",{},smalltalk.ROViewTest)})},
args: [],
source: "testTranslateBy\x0a\x09view addAll: { ROBox element translateTo: 40@10 . ROEllipse element translateTo: 100@20 . ROSVGPath element translateTo: 0@100 . ROElement new }.\x0a\x09view translateBy: 10@10.\x0a\x09Transcript show: (( view elements at: 1) position asString).\x0a\x09self assert: ((view elements at: 1) position = (50@20)).",
messageSends: ["addAll:", "translateTo:", "element", "@", "new", "translateBy:", "show:", "asString", "position", "at:", "elements", "assert:", "="],
referencedClasses: ["ROBox", "ROEllipse", "ROSVGPath", "ROElement", "Transcript"]
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoElements",
category: 'test',
fn: function (){
var self=this;
var el1,el2;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($ROElement())._new();
$ctx1.sendIdx["new"]=1;
$2=$1;
$3=_st($ROBox())._new();
$ctx1.sendIdx["new"]=2;
_st($2)._shape_($3);
$ctx1.sendIdx["shape:"]=1;
$4=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
el1=$4;
$5=_st($ROElement())._new();
$ctx1.sendIdx["new"]=3;
_st($5)._shape_(_st($ROBox())._new());
$6=_st($5)._yourself();
el2=$6;
$7=self["@view"];
_st($7)._add_(el1);
$ctx1.sendIdx["add:"]=1;
$8=_st($7)._add_(el2);
self._assert_equals_(_st(self["@view"])._numberOfElements(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoElements",{el1:el1,el2:el2},smalltalk.ROViewTest)})},
args: [],
source: "testTwoElements\x0a\x09| el1 el2 |\x0a\x09el1 := ROElement new shape: (ROBox new); yourself.\x0a\x09el2 := ROElement new shape: (ROBox new); yourself.\x0a\x09view add: el1; add: el2.\x0a\x09\x0a\x09self assert: view numberOfElements equals: 2",
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"],
referencedClasses: ["ROElement", "ROBox"]
}),
smalltalk.ROViewTest);


});
