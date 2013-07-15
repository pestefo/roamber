smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROElementTest', smalltalk.TestCase, [], 'ARoassal');
smalltalk.addMethod(
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

smalltalk.addMethod(
smalltalk.method({
selector: "testExtent",
fn: function (){
var self=this;
var element,shape;
return smalltalk.withContext(function($ctx1) { element=_st((smalltalk.ROElement || ROElement))._new();
shape=_st((smalltalk.ROBox || ROBox))._new();
_st(shape)._width_((20));
_st(shape)._height_((30));
_st(element)._shape_(shape);
_st(self)._assert_(_st(_st(element)._width()).__eq((20)));
_st(self)._assert_(_st(_st(element)._height()).__eq((30)));
return self}, function($ctx1) {$ctx1.fill(self,"testExtent",{element:element,shape:shape},smalltalk.ROElementTest)})},
messageSends: ["new", "width:", "height:", "shape:", "assert:", "=", "width", "height"]}),
smalltalk.ROElementTest);



smalltalk.addClass('ROLayout', smalltalk.Object, ['translator'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)})},
messageSends: ["executeOnElements:"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doExecute_(_st(elements)._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)})},
messageSends: ["doExecute:", "asOrderedCollection"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)})},
messageSends: ["default"]}),
smalltalk.ROLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._new())._applyOn_(aCollection);
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.ROLayout.klass)})},
messageSends: ["applyOn:", "new"]}),
smalltalk.ROLayout.klass);


smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "alignTop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)})},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.ROAbstractLineLayout)})},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)})},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractLineLayout)})},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalOutGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalOutGap",{},smalltalk.ROAbstractLineLayout)})},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROLayout.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(10);
self["@horizontalGap"]=(10);
self["@horizontalOutGap"]=(5);
self["@verticalOutGap"]=(5);
self["@verticallyStretchable"]=false;
self["@horizontallyStretchable"]=self["@verticallyStretchable"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalOutGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@verticalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalOutGap",{},smalltalk.ROAbstractLineLayout)})},
messageSends: []}),
smalltalk.ROAbstractLineLayout);



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
fn: function (aNodeFigure){
var self=this;
var delta;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
delta=(0);
$1=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("bottom"));
if(smalltalk.assert($1)){
delta=_st(aNodeFigure)._height();
delta;
};
$2=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("center"));
if(smalltalk.assert($2)){
delta=_st(_st(aNodeFigure)._height()).__slash((2));
delta;
};
$3=_st((0)).__at(delta);
return $3;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure,delta:delta},smalltalk.ROHorizontalLineLayout)})},
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements){
var self=this;
var pointer,delta;
return smalltalk.withContext(function($ctx1) { pointer=_st(self)._positionOriginalPointer_(elements);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {delta=_st(self)._deltaFor_(element);
delta;
_st(self["@translator"])._translate_to_(element,_st(pointer).__minus(delta));
pointer=_st(self)._movePointer_accordingToFigure_(pointer,element);
return pointer;
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.ROHorizontalLineLayout)})},
messageSends: ["positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROAbstractLineLayout.fn.prototype._initialize.apply(_st(self), []);
_st(self)._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHorizontalLineLayout)})},
messageSends: ["initialize", "alignTop"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
fn: function (pointer,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self)._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.ROHorizontalLineLayout)})},
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
fn: function (aGraph){
var self=this;
var maxHeight,delta;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
delta=(0);
$1=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("bottom"));
if(smalltalk.assert($1)){
maxHeight=_st(_st(aGraph)._nodes())._maxValue_(smalltalk.symbolFor("height"));
maxHeight;
delta=maxHeight;
delta;
};
$2=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("center"));
if(smalltalk.assert($2)){
maxHeight=_st(_st(aGraph)._nodes())._maxValue_(smalltalk.symbolFor("height"));
maxHeight;
delta=_st(maxHeight).__slash((2));
delta;
};
$3=_st(_st(self)._horizontalOutGap()).__at(_st(_st(self)._verticalOutGap()).__plus(delta));
return $3;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{aGraph:aGraph,maxHeight:maxHeight,delta:delta},smalltalk.ROHorizontalLineLayout)})},
messageSends: ["ifTrue:", "maxValue:", "nodes", "==", "alignment", "/", "@", "+", "verticalOutGap", "horizontalOutGap"]}),
smalltalk.ROHorizontalLineLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element,newPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.ROLayoutTranslator)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROLayoutTranslator);


smalltalk.ROLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=self["@defaultTranslator"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@defaultTranslator"];
return $2;
};
self["@defaultTranslator"]=_st(_st(self)._defaultClass())._new();
$3=self["@defaultTranslator"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ROLayoutTranslator.klass)})},
messageSends: ["ifNotNil:", "new", "defaultClass"]}),
smalltalk.ROLayoutTranslator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.RODirectLayoutTranslator || RODirectLayoutTranslator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.ROLayoutTranslator.klass)})},
messageSends: []}),
smalltalk.ROLayoutTranslator.klass);


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element,newPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)})},
messageSends: ["translateTo:"]}),
smalltalk.RODirectLayoutTranslator);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROElement', smalltalk.ROObject, ['model', 'shape', 'position'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)})},
messageSends: ["extent:", "extentFor:", "position"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)})},
messageSends: ["drawOn:for:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@shape"])._heightFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)})},
messageSends: ["heightFor:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
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
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
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
smalltalk.method({
selector: "shape:",
fn: function (aROShape){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@shape"])._widthFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)})},
messageSends: ["widthFor:"]}),
smalltalk.ROElement);



smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "circle",
fn: function (){
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROCircle || ROCircle))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)})},
messageSends: ["new", "add:", "shape:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
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

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout",
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1;
view=_st($ROView())._new();
_st(view)._clear();
(10)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st(_st($ROElement())._new())._shape_(_st($ROBox())._new()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(view)._open();
$1=view;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalLayout",{view:view},smalltalk.ROExample)})},
messageSends: ["new", "clear", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout2",
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._clear();
(1)._to_do_((20),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st(_st(_st($ROElement())._new())._model_(i))._shape_(_st(_st($ROBox())._new())._height_(_st(i).__star((10)))));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLayout2",{view:view},smalltalk.ROExample)})},
messageSends: ["new", "clear", "to:do:", "add:", "shape:", "height:", "*", "model:", "on:", "elements", "open"]}),
smalltalk.ROExample);



smalltalk.addClass('ROPaper', smalltalk.ROObject, ['svgCanvas'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.ROPaper)})},
messageSends: []}),
smalltalk.ROPaper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=self._paper();
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPaper)})},
messageSends: ["initialize", "paper"]}),
smalltalk.ROPaper);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Raphael("container", 800, 600);;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROPaper)})},
messageSends: []}),
smalltalk.ROPaper);


smalltalk.ROPaper.klass.iVarNames = ['paper'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@paper"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@paper"]=_st(self._basicNew())._initialize();
self["@paper"];
} else {
$1;
};
$2=self["@paper"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ROPaper.klass)})},
messageSends: ["ifNil:", "initialize", "basicNew"]}),
smalltalk.ROPaper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Use default instead.");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.ROPaper.klass)})},
messageSends: ["error:"]}),
smalltalk.ROPaper.klass);


smalltalk.addClass('ROShape', smalltalk.ROObject, ['height', 'width', 'color'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
fn: function (element){
var self=this;
var res;
return smalltalk.withContext(function($ctx1) { var $1;
res=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
$1=res;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element,res:res},smalltalk.ROShape)})},
messageSends: ["@", "roValue:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aNumberOrABlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@height"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.ROShape)})},
messageSends: ["roValue:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumberOrABlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@width"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.ROShape)})},
messageSends: ["roValue:"]}),
smalltalk.ROShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._rect_with_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._width(),_st(self)._height());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
messageSends: ["rect:with:with:with:", "x", "position", "y", "width", "height"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
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

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);



smalltalk.addClass('ROCircle', smalltalk.ROShape, ['radius'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)})},
messageSends: []}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._circle_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._radius());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
messageSends: ["circle:with:with:", "x", "position", "y", "radius"]}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=_st(self)._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)})},
messageSends: ["initialize", "defaultRadius"]}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROCircle)})},
messageSends: []}),
smalltalk.ROCircle);



smalltalk.addClass('ROView', smalltalk.ROObject, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)})},
messageSends: ["add:"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._paper())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROView)})},
messageSends: ["clear", "paper"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROView)})},
messageSends: []}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($Array())._new();
self["@svgCanvas"]=self._paper();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
messageSends: ["initialize", "new", "paper"]}),
smalltalk.ROView);

smalltalk.addMethod(
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
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)})},
messageSends: ["do:", "drawOn:"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
fn: function (){
var self=this;
function $ROPaper(){return smalltalk.ROPaper||(typeof ROPaper=="undefined"?nil:ROPaper)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROPaper())._default())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)})},
messageSends: ["canvas", "default"]}),
smalltalk.ROView);



smalltalk.addClass('ROViewTest', smalltalk.TestCase, ['view'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@view"]=_st((smalltalk.ROView || ROView))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)})},
messageSends: ["new"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)})},
messageSends: ["assert:equals:", "numberOfElements"]}),
smalltalk.ROViewTest);

smalltalk.addMethod(
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



smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anElement:anElement},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{aBlock:aBlock},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

