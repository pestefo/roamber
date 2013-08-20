smalltalk.addPackage('ARoassal-AttachPoint-Test');
smalltalk.addClass('ROAttachPointTest', smalltalk.ROTest, ['view', 'el1', 'el2', 'edge', 'shape'], 'ARoassal-AttachPoint-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
self["@el1"]=_st($ROElement())._spriteOn_((1));
self["@el2"]=_st($ROElement())._spriteOn_((2));
_st(self["@el1"]).__at($RODraggable());
_st(self["@el2"]).__at($RODraggable());
self["@edge"]=_st($ROEdge())._from_to_(self["@el1"],self["@el2"]);
_st(self["@view"])._addAll_(_st($Array())._with_with_with_(self["@el1"],self["@el2"],self["@edge"]));
self["@shape"]=_st(_st($ROLine())._new())._color_(_st($Color())._black());
_st(self["@edge"]).__plus(self["@shape"]);
_st($ROHorizontalLineLayout())._on_(_st($Array())._with_with_(self["@el1"],self["@el2"]));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "setUp\x0a\x09\x0a\x09view := ROView new.\x0a\x09el1 := ROElement spriteOn: 1.\x0a\x09el2 := ROElement spriteOn: 2.\x0a\x22\x09el1 @ ROPopup.\x0a\x09el2 @ ROPopup.\x22\x0a\x09el1 @ RODraggable.\x0a\x09el2 @ RODraggable.\x0a\x09\x0a\x09edge := ROEdge from: el1 to: el2.\x0a\x09view addAll: (Array with: el1 with: el2 with: edge).\x0a\x09shape := ROLine new color: Color black.\x0a\x09edge + shape.\x0a\x09ROHorizontalLineLayout on: (Array with: el1 with: el2)",
messageSends: ["new", "spriteOn:", "@", "from:to:", "addAll:", "with:with:with:", "color:", "black", "+", "on:", "with:with:"],
referencedClasses: ["ROView", "ROElement", "RODraggable", "ROEdge", "Array", "Color", "ROLine", "ROHorizontalLineLayout"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAttachPoint",
category: 'tests',
fn: function (){
var self=this;
function $ROHorizontalAttachPoint(){return smalltalk.ROHorizontalAttachPoint||(typeof ROHorizontalAttachPoint=="undefined"?nil:ROHorizontalAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROHorizontalAttachPoint())._new());
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topRight()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAttachPoint",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "testHorizontalAttachPoint\x0a\x09shape attachPoint: (ROHorizontalAttachPoint new).\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topRight + (0 @ (el1 bounds extent y / 2)) asIntegerPoint ) .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + (0 @ (el2 bounds extent y / 2)) asIntegerPoint )  .",
messageSends: ["attachPoint:", "new", "assert:", "=", "+", "asIntegerPoint", "@", "/", "y", "extent", "bounds", "topRight", "startingPointOf:", "topLeft", "endingPointOf:"],
referencedClasses: ["ROHorizontalAttachPoint"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRenderingEmbeddedVerticalAttachPoint",
category: 'rendering',
fn: function (){
var self=this;
var canvas,str,spr,embedding,trace1;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROVerticalAttachPoint(){return smalltalk.ROVerticalAttachPoint||(typeof ROVerticalAttachPoint=="undefined"?nil:ROVerticalAttachPoint)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
function $ROTracingCanvas(){return smalltalk.ROTracingCanvas||(typeof ROTracingCanvas=="undefined"?nil:ROTracingCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@view"]=_st($ROView())._new();
self["@el1"]=_st($ROElement())._sprite();
self["@el2"]=_st($ROElement())._sprite();
self["@shape"]=_st($ROLine())._new();
_st(self["@shape"])._attachPoint_(_st($ROVerticalAttachPoint())._new());
self["@edge"]=_st(_st($ROEdge())._from_to_(self["@el1"],self["@el2"])).__plus(self["@shape"]);
embedding=_st($ROElement())._sprite();
$1=embedding;
_st($1)._add_(self["@el1"]);
_st($1)._add_(self["@el2"]);
$2=_st($1)._add_(self["@edge"]);
_st($ROHorizontalLineLayout())._on_(_st($Array())._with_with_(self["@el1"],self["@el2"]));
_st(embedding)._translateBy_((40).__at((30)));
canvas=_st($ROTracingCanvas())._new();
_st(self["@view"])._add_(embedding);
_st(self["@view"])._drawOn_(canvas);
self._assert_(_st(_st(canvas)._trace()).__eq([["frameAndFillRectangle:", "(0@0) corner: (40@30)", "Color white", (0), "Color white"], ["line", "(40@30)", "(160@30)", (1), "Color red"], ["line", "(160@30)", "(160@90)", (1), "Color red"], ["line", "(160@90)", "(40@90)", (1), "Color red"], ["line", "(40@90)", "(40@30)", (1), "Color red"], ["line", "(45@35)", "(95@35)", (1), "Color red"], ["line", "(95@35)", "(95@85)", (1), "Color red"], ["line", "(95@85)", "(45@85)", (1), "Color red"], ["line", "(45@85)", "(45@35)", (1), "Color red"], ["line", "(105@35)", "(155@35)", (1), "Color red"], ["line", "(155@35)", "(155@85)", (1), "Color red"], ["line", "(155@85)", "(105@85)", (1), "Color red"], ["line", "(105@85)", "(105@35)", (1), "Color red"], ["line", "(130@35)", "(70@85)", (1), "Color veryLightGray"]]));
return self}, function($ctx1) {$ctx1.fill(self,"testRenderingEmbeddedVerticalAttachPoint",{canvas:canvas,str:str,spr:spr,embedding:embedding,trace1:trace1},smalltalk.ROAttachPointTest)})},
args: [],
source: "testRenderingEmbeddedVerticalAttachPoint\x0a\x0a\x09| canvas str spr embedding trace1 |\x0a\x09\x0a\x09view := ROView new.\x0a\x09el1 := ROElement sprite.\x0a\x09el2 := ROElement sprite.\x0a\x09shape := ROLine new.\x0a\x09shape attachPoint: (ROVerticalAttachPoint new).\x0a\x09edge := (ROEdge from: el1 to: el2) + shape.\x0a\x09embedding := ROElement sprite.\x0a\x09embedding add: el1; add: el2; add: edge.\x0a\x09ROHorizontalLineLayout on: (Array with: el1 with: el2).  \x0a \x0a\x09embedding translateBy: 40 @ 30.\x0a\x0a\x09canvas := ROTracingCanvas new.\x0a\x09view add: embedding.\x0a\x09view drawOn: canvas.\x0a \x0a\x09self assert: canvas trace = #(#(#frameAndFillRectangle: '(0@0) corner: (40@30)' 'Color white' 0 'Color white') #(#line '(40@30)' '(160@30)' 1 'Color red') #(#line '(160@30)' '(160@90)' 1 'Color red') #(#line '(160@90)' '(40@90)' 1 'Color red') #(#line '(40@90)' '(40@30)' 1 'Color red') #(#line '(45@35)' '(95@35)' 1 'Color red') #(#line '(95@35)' '(95@85)' 1 'Color red') #(#line '(95@85)' '(45@85)' 1 'Color red') #(#line '(45@85)' '(45@35)' 1 'Color red') #(#line '(105@35)' '(155@35)' 1 'Color red') #(#line '(155@35)' '(155@85)' 1 'Color red') #(#line '(155@85)' '(105@85)' 1 'Color red') #(#line '(105@85)' '(105@35)' 1 'Color red') #(#line '(130@35)' '(70@85)' 1 'Color veryLightGray'))",
messageSends: ["new", "sprite", "attachPoint:", "+", "from:to:", "add:", "on:", "with:with:", "translateBy:", "@", "drawOn:", "assert:", "=", "trace"],
referencedClasses: ["ROView", "ROElement", "ROLine", "ROVerticalAttachPoint", "ROEdge", "Array", "ROHorizontalLineLayout", "ROTracingCanvas"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRenderingVerticalAttachPoint",
category: 'rendering',
fn: function (){
var self=this;
var canvas;
function $ROVerticalAttachPoint(){return smalltalk.ROVerticalAttachPoint||(typeof ROVerticalAttachPoint=="undefined"?nil:ROVerticalAttachPoint)}
function $ROTracingCanvas(){return smalltalk.ROTracingCanvas||(typeof ROTracingCanvas=="undefined"?nil:ROTracingCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROVerticalAttachPoint())._new());
canvas=_st($ROTracingCanvas())._new();
_st(self["@view"])._drawOn_(canvas);
self._assert_(_st(_st(canvas)._trace()).__eq([["frameAndFillRectangle:", "(0@0) corner: (40@30)", "Color white", (0), "Color white"], ["line", "(5@5)", "(55@5)", (1), "Color red"], ["line", "(55@5)", "(55@55)", (1), "Color red"], ["line", "(55@55)", "(5@55)", (1), "Color red"], ["line", "(5@55)", "(5@5)", (1), "Color red"], ["line", "(65@5)", "(115@5)", (1), "Color red"], ["line", "(115@5)", "(115@55)", (1), "Color red"], ["line", "(115@55)", "(65@55)", (1), "Color red"], ["line", "(65@55)", "(65@5)", (1), "Color red"], ["line", "(90@5)", "(30@55)", (1), "Color black"]]));
return self}, function($ctx1) {$ctx1.fill(self,"testRenderingVerticalAttachPoint",{canvas:canvas},smalltalk.ROAttachPointTest)})},
args: [],
source: "testRenderingVerticalAttachPoint\x0a\x0a\x09| canvas |\x0a\x09shape attachPoint: (ROVerticalAttachPoint new).\x0a\x09canvas := ROTracingCanvas new.\x0a\x09view drawOn: canvas.\x0a\x09\x0a\x09self assert: canvas trace = #(#(#frameAndFillRectangle: '(0@0) corner: (40@30)' 'Color white' 0 'Color white') #(#line '(5@5)' '(55@5)' 1 'Color red') #(#line '(55@5)' '(55@55)' 1 'Color red') #(#line '(55@55)' '(5@55)' 1 'Color red') #(#line '(5@55)' '(5@5)' 1 'Color red') #(#line '(65@5)' '(115@5)' 1 'Color red') #(#line '(115@5)' '(115@55)' 1 'Color red') #(#line '(115@55)' '(65@55)' 1 'Color red') #(#line '(65@55)' '(65@5)' 1 'Color red') #(#line '(90@5)' '(30@55)' 1 'Color black'))",
messageSends: ["attachPoint:", "new", "drawOn:", "assert:", "=", "trace"],
referencedClasses: ["ROVerticalAttachPoint", "ROTracingCanvas"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint1",
category: 'tests',
fn: function (){
var self=this;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topRight()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint1",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint1\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same horizontal line. el1 is on the left of el2\x22\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topRight + (0 @ (el1 bounds extent y / 2)) asIntegerPoint)  .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + (0 @ (el2 bounds extent y / 2)) asIntegerPoint)",
messageSends: ["attachPoint:", "new", "assert:", "=", "+", "asIntegerPoint", "@", "/", "y", "extent", "bounds", "topRight", "startingPointOf:", "topLeft", "endingPointOf:"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint2",
category: 'tests',
fn: function (){
var self=this;
var p;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
p=_st(self["@el1"])._position();
_st(self["@el1"])._translateTo_(_st(self["@el2"])._position());
_st(self["@el2"])._translateTo_(p);
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topLeft()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topRight()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint2",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint2\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same horizontal line. el2 is on the left of el1\x22\x0a\x09p := el1 position.\x0a\x09el1 translateTo: el2 position.\x0a\x09el2 translateTo: p.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + (0 @ (el1 bounds extent y / 2)) asIntegerPoint)  .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topRight + (0 @ (el2 bounds extent y / 2)) asIntegerPoint)",
messageSends: ["attachPoint:", "new", "position", "translateTo:", "assert:", "=", "+", "asIntegerPoint", "@", "/", "y", "extent", "bounds", "topLeft", "startingPointOf:", "topRight", "endingPointOf:"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint3",
category: 'tests',
fn: function (){
var self=this;
var p;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
p=_st(self["@el1"])._position();
_st(self["@el1"])._translateBy_((0).__at((80)));
_st(self["@el2"])._translateTo_(p);
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(self["@el1"])._bounds())._width()).__slash((2)))._asInteger()).__at((0)))));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(self["@el2"])._bounds())._width()).__slash((2)))._asInteger()).__at(_st(_st(self["@el2"])._bounds())._width()))));
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint3",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint3\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same horizontal line. el2 is on the left of el1\x22\x0a\x09p := el1 position.\x0a\x09el1 translateBy: 0 @ 80.\x0a\x09el2 translateTo: p.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + ((el1 bounds width / 2) asInteger @0)) .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ el2 bounds width))",
messageSends: ["attachPoint:", "new", "position", "translateBy:", "@", "translateTo:", "assert:", "=", "+", "asInteger", "/", "width", "bounds", "topLeft", "startingPointOf:", "endingPointOf:"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint4",
category: 'tests',
fn: function (){
var self=this;
var p;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
_st(self["@el2"])._translateTo_(_st(self["@el1"])._position());
_st(self["@el2"])._translateBy_((0).__at((80)));
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(self["@el1"])._bounds())._width()).__slash((2)))._asInteger()).__at(_st(_st(self["@el1"])._bounds())._height()))));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(self["@el2"])._bounds())._width()).__slash((2)))._asInteger()).__at((0)))));
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint4",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint4\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same vertical line. el1 is above el2\x22\x0a\x09el2 translateTo: el1 position.\x0a\x09el2 translateBy: 0 @ 80.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + ((el1 bounds width / 2) asInteger @ el1 bounds height)) .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ 0))",
messageSends: ["attachPoint:", "new", "translateTo:", "position", "translateBy:", "@", "assert:", "=", "+", "height", "bounds", "asInteger", "/", "width", "topLeft", "startingPointOf:", "endingPointOf:"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint4WithOffset",
category: 'tests',
fn: function (){
var self=this;
var p;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st(_st($ROShorterDistanceAttachPoint())._new())._offset_((5)));
_st(self["@el2"])._translateTo_(_st(self["@el1"])._position());
_st(self["@el2"])._translateBy_((0).__at((80)));
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(_st(self["@el1"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(self["@el1"])._bounds())._width()).__slash((2)))._asInteger()).__at(_st(_st(self["@el1"])._bounds())._height()))).__plus((5).__at((0)))));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(self["@el2"])._bounds())._width()).__slash((2)))._asInteger()).__at((0)))).__plus((5).__at((0)))));
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint4WithOffset",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint4WithOffset\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new offset: 5).\x0a\x09\x0a\x09\x22el1 and el2 are on the same vertical line. el1 is above el2\x22\x0a\x09el2 translateTo: el1 position.\x0a\x09el2 translateBy: 0 @ 80.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = ((el1 bounds topLeft + ((el1 bounds width / 2) asInteger @ el1 bounds height)) + (5 @ 0)) .\x0a\x09self assert: (shape endingPointOf: edge) = ((el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ 0) + (5 @ 0)))",
messageSends: ["attachPoint:", "offset:", "new", "translateTo:", "position", "translateBy:", "@", "assert:", "=", "+", "height", "bounds", "asInteger", "/", "width", "topLeft", "startingPointOf:", "endingPointOf:"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVerticalAttachPoint",
category: 'tests',
fn: function (){
var self=this;
function $ROVerticalAttachPoint(){return smalltalk.ROVerticalAttachPoint||(typeof ROVerticalAttachPoint=="undefined"?nil:ROVerticalAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROVerticalAttachPoint())._new());
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._bottomLeft()).__plus(_st(_st(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._x()).__slash((2)))._asInteger()).__at((0)))));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._x()).__slash((2)))._asInteger()).__at((0)))));
return self}, function($ctx1) {$ctx1.fill(self,"testVerticalAttachPoint",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "testVerticalAttachPoint\x0a\x09shape attachPoint: (ROVerticalAttachPoint new).\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds bottomLeft + ((el1 bounds extent x / 2) asInteger @ 0))  .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds extent x / 2) asInteger @ 0))  .",
messageSends: ["attachPoint:", "new", "assert:", "=", "+", "@", "asInteger", "/", "x", "extent", "bounds", "bottomLeft", "startingPointOf:", "topLeft", "endingPointOf:"],
referencedClasses: ["ROVerticalAttachPoint"]
}),
smalltalk.ROAttachPointTest);



