smalltalk.addPackage('ARoassal-AttachPoint-Test');
smalltalk.addClass('ROAttachPointTest', smalltalk.ROTest, ['view', 'el1', 'el2', 'edge', 'shape'], 'ARoassal-AttachPoint-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["new", "spriteOn:", "@", "from:to:", "addAll:", "with:with:with:", "color:", "black", "+", "on:", "with:with:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAttachPoint",
fn: function (){
var self=this;
function $ROHorizontalAttachPoint(){return smalltalk.ROHorizontalAttachPoint||(typeof ROHorizontalAttachPoint=="undefined"?nil:ROHorizontalAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROHorizontalAttachPoint())._new());
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topRight()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAttachPoint",{},smalltalk.ROAttachPointTest)})},
messageSends: ["attachPoint:", "new", "assert:", "=", "+", "asIntegerPoint", "@", "/", "y", "extent", "bounds", "topRight", "startingPointOf:", "topLeft", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRenderingEmbeddedVerticalAttachPoint",
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
messageSends: ["new", "sprite", "attachPoint:", "+", "from:to:", "add:", "on:", "with:with:", "translateBy:", "@", "drawOn:", "assert:", "=", "trace"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRenderingVerticalAttachPoint",
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
messageSends: ["attachPoint:", "new", "drawOn:", "assert:", "=", "trace"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint1",
fn: function (){
var self=this;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROShorterDistanceAttachPoint())._new());
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._topRight()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st((0).__at(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._y()).__slash((2))))._asIntegerPoint())));
return self}, function($ctx1) {$ctx1.fill(self,"testShorterDistancePoint1",{},smalltalk.ROAttachPointTest)})},
messageSends: ["attachPoint:", "new", "assert:", "=", "+", "asIntegerPoint", "@", "/", "y", "extent", "bounds", "topRight", "startingPointOf:", "topLeft", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint2",
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
messageSends: ["attachPoint:", "new", "position", "translateTo:", "assert:", "=", "+", "asIntegerPoint", "@", "/", "y", "extent", "bounds", "topLeft", "startingPointOf:", "topRight", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint3",
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
messageSends: ["attachPoint:", "new", "position", "translateBy:", "@", "translateTo:", "assert:", "=", "+", "asInteger", "/", "width", "bounds", "topLeft", "startingPointOf:", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint4",
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
messageSends: ["attachPoint:", "new", "translateTo:", "position", "translateBy:", "@", "assert:", "=", "+", "height", "bounds", "asInteger", "/", "width", "topLeft", "startingPointOf:", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShorterDistancePoint4WithOffset",
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
messageSends: ["attachPoint:", "offset:", "new", "translateTo:", "position", "translateBy:", "@", "assert:", "=", "+", "height", "bounds", "asInteger", "/", "width", "topLeft", "startingPointOf:", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVerticalAttachPoint",
fn: function (){
var self=this;
function $ROVerticalAttachPoint(){return smalltalk.ROVerticalAttachPoint||(typeof ROVerticalAttachPoint=="undefined"?nil:ROVerticalAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._attachPoint_(_st($ROVerticalAttachPoint())._new());
self._assert_(_st(_st(self["@shape"])._startingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el1"])._bounds())._bottomLeft()).__plus(_st(_st(_st(_st(_st(_st(self["@el1"])._bounds())._extent())._x()).__slash((2)))._asInteger()).__at((0)))));
self._assert_(_st(_st(self["@shape"])._endingPointOf_(self["@edge"])).__eq(_st(_st(_st(self["@el2"])._bounds())._topLeft()).__plus(_st(_st(_st(_st(_st(_st(self["@el2"])._bounds())._extent())._x()).__slash((2)))._asInteger()).__at((0)))));
return self}, function($ctx1) {$ctx1.fill(self,"testVerticalAttachPoint",{},smalltalk.ROAttachPointTest)})},
messageSends: ["attachPoint:", "new", "assert:", "=", "+", "@", "asInteger", "/", "x", "extent", "bounds", "bottomLeft", "startingPointOf:", "topLeft", "endingPointOf:"]}),
smalltalk.ROAttachPointTest);



