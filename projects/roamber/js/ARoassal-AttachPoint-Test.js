define("roamber/ARoassal-AttachPoint-Test", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal-Test"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-AttachPoint-Test');
smalltalk.packages["ARoassal-AttachPoint-Test"].transport = {"type":"amd","amdNamespace":"roamber"};

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
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
self["@el1"]=_st($ROElement())._spriteOn_((1));
$ctx1.sendIdx["spriteOn:"]=1;
self["@el2"]=_st($ROElement())._spriteOn_((2));
_st(self["@el1"]).__at($RODraggable());
$ctx1.sendIdx["@"]=1;
_st(self["@el2"]).__at($RODraggable());
self["@edge"]=_st($ROEdge())._from_to_(self["@el1"],self["@el2"]);
_st(self["@view"])._addAll_(_st($Array())._with_with_with_(self["@el1"],self["@el2"],self["@edge"]));
self["@shape"]=_st($ROLine())._new();
_st(self["@edge"]).__plus(self["@shape"]);
_st($ROHorizontalLineLayout())._on_(_st($Array())._with_with_(self["@el1"],self["@el2"]));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "setUp\x0a\x09\x0a\x09view := ROView new.\x0a\x09el1 := ROElement spriteOn: 1.\x0a\x09el2 := ROElement spriteOn: 2.\x0a\x09el1 @ RODraggable.\x0a\x09el2 @ RODraggable.\x0a\x09\x0a\x09edge := ROEdge from: el1 to: el2.\x0a\x09view addAll: (Array with: el1 with: el2 with: edge).\x0a\x09shape := ROLine new.\x0a\x09edge + shape.\x0a\x09ROHorizontalLineLayout on: (Array with: el1 with: el2)",
messageSends: ["new", "spriteOn:", "@", "from:to:", "addAll:", "with:with:with:", "+", "on:", "with:with:"],
referencedClasses: ["ROView", "ROElement", "RODraggable", "ROEdge", "Array", "ROLine", "ROHorizontalLineLayout"]
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
var $2,$5,$4,$11,$10,$9,$8,$7,$6,$3,$1,$13,$16,$15,$14,$12;
_st(self["@shape"])._attachPoint_(_st($ROHorizontalAttachPoint())._new());
$2=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$5=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$4=_st($5)._topRight();
$11=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$10=_st($11)._extent();
$ctx1.sendIdx["extent"]=1;
$9=_st($10)._y();
$ctx1.sendIdx["y"]=1;
$8=_st($9).__slash((2));
$ctx1.sendIdx["/"]=1;
$7=(0).__at($8);
$ctx1.sendIdx["@"]=1;
$6=_st($7)._asIntegerPoint();
$ctx1.sendIdx["asIntegerPoint"]=1;
$3=_st($4).__plus($6);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$13=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$16=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$15=_st($16)._topLeft();
$14=_st($15).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint());
$12=_st($13).__eq($14);
self._assert_($12);
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAttachPoint",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "testHorizontalAttachPoint\x0a\x09shape attachPoint: (ROHorizontalAttachPoint new).\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topRight + (0 @ (el1 bounds extent y / 2)) asIntegerPoint ) .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + (0 @ (el2 bounds extent y / 2)) asIntegerPoint )  .",
messageSends: ["attachPoint:", "new", "assert:", "=", "startingPointOf:", "+", "topRight", "bounds", "asIntegerPoint", "@", "/", "y", "extent", "endingPointOf:", "topLeft"],
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
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $ROTracingCanvas(){return smalltalk.ROTracingCanvas||(typeof ROTracingCanvas=="undefined"?nil:ROTracingCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@view"]=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
self["@el1"]=_st($ROElement())._sprite();
$ctx1.sendIdx["sprite"]=1;
self["@el2"]=_st($ROElement())._sprite();
$ctx1.sendIdx["sprite"]=2;
self["@shape"]=_st($ROLine())._new();
$ctx1.sendIdx["new"]=2;
$1=self["@shape"];
$2=_st($ROVerticalAttachPoint())._new();
$ctx1.sendIdx["new"]=3;
_st($1)._attachPoint_($2);
self["@edge"]=_st(_st($ROEdge())._from_to_(self["@el1"],self["@el2"])).__plus(self["@shape"]);
embedding=_st($ROElement())._sprite();
$3=embedding;
_st($3)._add_(self["@el1"]);
$ctx1.sendIdx["add:"]=1;
_st($3)._add_(self["@el2"]);
$ctx1.sendIdx["add:"]=2;
$4=_st($3)._add_(self["@edge"]);
$ctx1.sendIdx["add:"]=3;
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
referencedClasses: ["ROView", "ROElement", "ROLine", "ROVerticalAttachPoint", "ROEdge", "ROHorizontalLineLayout", "Array", "ROTracingCanvas"]
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
var $1,$2;
$1=self["@shape"];
$2=_st($ROVerticalAttachPoint())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._attachPoint_($2);
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
var $2,$5,$4,$11,$10,$9,$8,$7,$6,$3,$1,$13,$16,$15,$14,$12;
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
$2=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$5=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$4=_st($5)._topRight();
$11=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$10=_st($11)._extent();
$ctx1.sendIdx["extent"]=1;
$9=_st($10)._y();
$ctx1.sendIdx["y"]=1;
$8=_st($9).__slash((2));
$ctx1.sendIdx["/"]=1;
$7=(0).__at($8);
$ctx1.sendIdx["@"]=1;
$6=_st($7)._asIntegerPoint();
$ctx1.sendIdx["asIntegerPoint"]=1;
$3=_st($4).__plus($6);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$13=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$16=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$15=_st($16)._topLeft();
$14=_st($15).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint());
$12=_st($13).__eq($14);
self._assert_($12);
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint1",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint1\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same horizontal line. el1 is on the left of el2\x22\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topRight + (0 @ (el1 bounds extent y / 2)) asIntegerPoint)  .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + (0 @ (el2 bounds extent y / 2)) asIntegerPoint)",
messageSends: ["attachPoint:", "new", "assert:", "=", "startingPointOf:", "+", "topRight", "bounds", "asIntegerPoint", "@", "/", "y", "extent", "endingPointOf:", "topLeft"],
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
var $2,$5,$4,$11,$10,$9,$8,$7,$6,$3,$1,$13,$16,$15,$14,$12;
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
p=_st(self["@el1"])._position();
$ctx1.sendIdx["position"]=1;
_st(self["@el1"])._translateTo_(_st(self["@el2"])._position());
$ctx1.sendIdx["translateTo:"]=1;
_st(self["@el2"])._translateTo_(p);
$2=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$5=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$4=_st($5)._topLeft();
$11=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$10=_st($11)._extent();
$ctx1.sendIdx["extent"]=1;
$9=_st($10)._y();
$ctx1.sendIdx["y"]=1;
$8=_st($9).__slash((2));
$ctx1.sendIdx["/"]=1;
$7=(0).__at($8);
$ctx1.sendIdx["@"]=1;
$6=_st($7)._asIntegerPoint();
$ctx1.sendIdx["asIntegerPoint"]=1;
$3=_st($4).__plus($6);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$13=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$16=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$15=_st($16)._topRight();
$14=_st($15).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint());
$12=_st($13).__eq($14);
self._assert_($12);
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint2",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint2\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same horizontal line. el2 is on the left of el1\x22\x0a\x09p := el1 position.\x0a\x09el1 translateTo: el2 position.\x0a\x09el2 translateTo: p.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + (0 @ (el1 bounds extent y / 2)) asIntegerPoint)  .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topRight + (0 @ (el2 bounds extent y / 2)) asIntegerPoint)",
messageSends: ["attachPoint:", "new", "position", "translateTo:", "assert:", "=", "startingPointOf:", "+", "topLeft", "bounds", "asIntegerPoint", "@", "/", "y", "extent", "endingPointOf:", "topRight"],
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
var $1,$2,$4,$7,$6,$12,$11,$10,$9,$8,$5,$3,$14,$17,$16,$22,$21,$20,$19,$18,$15,$13;
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
p=_st(self["@el1"])._position();
$1=self["@el1"];
$2=(0).__at((80));
$ctx1.sendIdx["@"]=1;
_st($1)._translateBy_($2);
_st(self["@el2"])._translateTo_(p);
$4=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$7=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$6=_st($7)._topLeft();
$ctx1.sendIdx["topLeft"]=1;
$12=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$11=_st($12)._width();
$ctx1.sendIdx["width"]=1;
$10=_st($11).__slash((2));
$ctx1.sendIdx["/"]=1;
$9=_st($10)._asInteger();
$ctx1.sendIdx["asInteger"]=1;
$8=_st($9).__at((0));
$ctx1.sendIdx["@"]=2;
$5=_st($6).__plus($8);
$ctx1.sendIdx["+"]=1;
$3=_st($4).__eq($5);
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$14=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$17=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$16=_st($17)._topLeft();
$22=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=4;
$21=_st($22)._width();
$ctx1.sendIdx["width"]=2;
$20=_st($21).__slash((2));
$19=_st($20)._asInteger();
$18=_st($19).__at(_st(_st(self["@el2"])._bounds())._width());
$15=_st($16).__plus($18);
$13=_st($14).__eq($15);
self._assert_($13);
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint3",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint3\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same horizontal line. el2 is on the left of el1\x22\x0a\x09p := el1 position.\x0a\x09el1 translateBy: 0 @ 80.\x0a\x09el2 translateTo: p.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + ((el1 bounds width / 2) asInteger @0)) .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ el2 bounds width))",
messageSends: ["attachPoint:", "new", "position", "translateBy:", "@", "translateTo:", "assert:", "=", "startingPointOf:", "+", "topLeft", "bounds", "asInteger", "/", "width", "endingPointOf:"],
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
var $1,$2,$4,$7,$6,$12,$11,$10,$9,$14,$13,$8,$5,$3,$16,$19,$18,$17,$15;
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
_st(self["@el2"])._translateTo_(_st(self["@el1"])._position());
$1=self["@el2"];
$2=(0).__at((80));
$ctx1.sendIdx["@"]=1;
_st($1)._translateBy_($2);
$4=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$7=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$6=_st($7)._topLeft();
$ctx1.sendIdx["topLeft"]=1;
$12=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$11=_st($12)._width();
$ctx1.sendIdx["width"]=1;
$10=_st($11).__slash((2));
$ctx1.sendIdx["/"]=1;
$9=_st($10)._asInteger();
$ctx1.sendIdx["asInteger"]=1;
$14=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$13=_st($14)._height();
$8=_st($9).__at($13);
$ctx1.sendIdx["@"]=2;
$5=_st($6).__plus($8);
$ctx1.sendIdx["+"]=1;
$3=_st($4).__eq($5);
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$16=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$19=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=4;
$18=_st($19)._topLeft();
$17=_st($18).__plus(_st(_st(_st(_st(_st(self["@el2"])._bounds())._width()).__slash((2)))._asInteger()).__at((0)));
$15=_st($16).__eq($17);
self._assert_($15);
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint4",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint4\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new).\x0a\x09\x0a\x09\x22el1 and el2 are on the same vertical line. el1 is above el2\x22\x0a\x09el2 translateTo: el1 position.\x0a\x09el2 translateBy: 0 @ 80.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds topLeft + ((el1 bounds width / 2) asInteger @ el1 bounds height)) .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ 0))",
messageSends: ["attachPoint:", "new", "translateTo:", "position", "translateBy:", "@", "assert:", "=", "startingPointOf:", "+", "topLeft", "bounds", "asInteger", "/", "width", "height", "endingPointOf:"],
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
var $1,$2,$4,$8,$7,$13,$12,$11,$10,$15,$14,$9,$6,$16,$5,$3,$18,$22,$21,$23,$20,$19,$17;
_st(self["@shape"])._attachPoint_(_st(_st($ROShorterDistanceAttachPoint())._new())._offset_((5)));
_st(self["@el2"])._translateTo_(_st(self["@el1"])._position());
$1=self["@el2"];
$2=(0).__at((80));
$ctx1.sendIdx["@"]=1;
_st($1)._translateBy_($2);
$4=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$8=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$7=_st($8)._topLeft();
$ctx1.sendIdx["topLeft"]=1;
$13=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$12=_st($13)._width();
$ctx1.sendIdx["width"]=1;
$11=_st($12).__slash((2));
$ctx1.sendIdx["/"]=1;
$10=_st($11)._asInteger();
$ctx1.sendIdx["asInteger"]=1;
$15=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$14=_st($15)._height();
$9=_st($10).__at($14);
$ctx1.sendIdx["@"]=2;
$6=_st($7).__plus($9);
$ctx1.sendIdx["+"]=2;
$16=(5).__at((0));
$ctx1.sendIdx["@"]=3;
$5=_st($6).__plus($16);
$ctx1.sendIdx["+"]=1;
$3=_st($4).__eq($5);
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
$18=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$22=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=4;
$21=_st($22)._topLeft();
$23=_st(_st(_st(_st(_st(self["@el2"])._bounds())._width()).__slash((2)))._asInteger()).__at((0));
$ctx1.sendIdx["@"]=4;
$20=_st($21).__plus($23);
$19=_st($20).__plus((5).__at((0)));
$ctx1.sendIdx["+"]=3;
$17=_st($18).__eq($19);
self._assert_($17);
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint4WithOffset",{p:p},smalltalk.ROAttachPointTest)})},
args: [],
source: "testShorterDistancePoint4WithOffset\x0a\x09| p |\x0a\x09shape attachPoint: (ROShorterDistanceAttachPoint new offset: 5).\x0a\x09\x0a\x09\x22el1 and el2 are on the same vertical line. el1 is above el2\x22\x0a\x09el2 translateTo: el1 position.\x0a\x09el2 translateBy: 0 @ 80.\x0a\x09\x0a\x09self assert: (shape startingPointOf: edge) = ((el1 bounds topLeft + ((el1 bounds width / 2) asInteger @ el1 bounds height)) + (5 @ 0)) .\x0a\x09self assert: (shape endingPointOf: edge) = ((el2 bounds topLeft + ((el2 bounds width / 2) asInteger @ 0) + (5 @ 0)))",
messageSends: ["attachPoint:", "offset:", "new", "translateTo:", "position", "translateBy:", "@", "assert:", "=", "startingPointOf:", "+", "topLeft", "bounds", "asInteger", "/", "width", "height", "endingPointOf:"],
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
var $2,$5,$4,$11,$10,$9,$8,$7,$6,$3,$1,$13,$16,$15,$14,$12;
_st(self["@shape"])._attachPoint_(_st($ROVerticalAttachPoint())._new());
$2=_st(self["@shape"])._startingPointOf_(self["@edge"]);
$5=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=1;
$4=_st($5)._bottomLeft();
$11=_st(self["@el1"])._bounds();
$ctx1.sendIdx["bounds"]=2;
$10=_st($11)._extent();
$ctx1.sendIdx["extent"]=1;
$9=_st($10)._x();
$ctx1.sendIdx["x"]=1;
$8=_st($9).__slash((2));
$ctx1.sendIdx["/"]=1;
$7=_st($8)._asInteger();
$ctx1.sendIdx["asInteger"]=1;
$6=_st($7).__at((0));
$ctx1.sendIdx["@"]=1;
$3=_st($4).__plus($6);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$13=_st(self["@shape"])._endingPointOf_(self["@edge"]);
$16=_st(self["@el2"])._bounds();
$ctx1.sendIdx["bounds"]=3;
$15=_st($16)._topLeft();
$14=_st($15).__plus(_st(_st(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._x()).__slash((2)))._asInteger()).__at((0)));
$12=_st($13).__eq($14);
self._assert_($12);
return self}, function($ctx1) {$ctx1.fill(self,"testVerticalAttachPoint",{},smalltalk.ROAttachPointTest)})},
args: [],
source: "testVerticalAttachPoint\x0a\x09shape attachPoint: (ROVerticalAttachPoint new).\x0a\x09self assert: (shape startingPointOf: edge) = (el1 bounds bottomLeft + ((el1 bounds extent x / 2) asInteger @ 0))  .\x0a\x09self assert: (shape endingPointOf: edge) = (el2 bounds topLeft + ((el2 bounds extent x / 2) asInteger @ 0))  .",
messageSends: ["attachPoint:", "new", "assert:", "=", "startingPointOf:", "+", "bottomLeft", "bounds", "@", "asInteger", "/", "x", "extent", "endingPointOf:", "topLeft"],
referencedClasses: ["ROVerticalAttachPoint"]
}),
smalltalk.ROAttachPointTest);


});
