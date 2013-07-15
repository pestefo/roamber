smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROLayout', smalltalk.Object, ['translator'], 'ARoassal');
smalltalk.addMethod(
"_applyOn_",
smalltalk.method({
selector: "applyOn:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)});},
messageSends: ["executeOnElements:"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
"_executeOnElements_",
smalltalk.method({
selector: "executeOnElements:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doExecute_(_st(elements)._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)});},
messageSends: ["doExecute:", "asOrderedCollection"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)});},
messageSends: ["default"]}),
smalltalk.ROLayout);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._new())._applyOn_(aCollection);
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.ROLayout.klass)});},
messageSends: ["applyOn:", "new"]}),
smalltalk.ROLayout.klass);


smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal');
smalltalk.addMethod(
"_alignTop",
smalltalk.method({
selector: "alignTop",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_alignment",
smalltalk.method({
selector: "alignment",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_alignment_",
smalltalk.method({
selector: "alignment:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_horizontalGap",
smalltalk.method({
selector: "horizontalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_horizontalOutGap",
smalltalk.method({
selector: "horizontalOutGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalOutGap",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROLayout.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(10);
self["@horizontalGap"]=(10);
self["@horizontalOutGap"]=(5);
self["@verticalOutGap"]=(5);
self["@verticallyStretchable"]=false;
self["@horizontallyStretchable"]=self["@verticallyStretchable"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineLayout)});},
messageSends: ["initialize"]}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_verticalOutGap",
smalltalk.method({
selector: "verticalOutGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@verticalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalOutGap",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal');
smalltalk.addMethod(
"_deltaFor_",
smalltalk.method({
selector: "deltaFor:",
fn: function (aNodeFigure) {
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
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure,delta:delta},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_doExecute_",
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
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
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROAbstractLineLayout.fn.prototype._initialize.apply(_st(self), []);
_st(self)._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["initialize", "alignTop"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_movePointer_accordingToFigure_",
smalltalk.method({
selector: "movePointer:accordingToFigure:",
fn: function (pointer, element) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self)._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_positionOriginalPointer_",
smalltalk.method({
selector: "positionOriginalPointer:",
fn: function (aGraph) {
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
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{aGraph:aGraph,maxHeight:maxHeight,delta:delta},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["ifTrue:", "maxValue:", "nodes", "==", "alignment", "/", "@", "+", "verticalOutGap", "horizontalOutGap"]}),
smalltalk.ROHorizontalLineLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal');
smalltalk.addMethod(
"_translate_to_",
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.ROLayoutTranslator)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROLayoutTranslator);


smalltalk.ROLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function () {
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ROLayoutTranslator.klass)});},
messageSends: ["ifNotNil:", "new", "defaultClass"]}),
smalltalk.ROLayoutTranslator.klass);

smalltalk.addMethod(
"_defaultClass",
smalltalk.method({
selector: "defaultClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.RODirectLayoutTranslator || RODirectLayoutTranslator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.ROLayoutTranslator.klass)});},
messageSends: []}),
smalltalk.ROLayoutTranslator.klass);


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal');
smalltalk.addMethod(
"_translate_to_",
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)});},
messageSends: ["translateTo:"]}),
smalltalk.RODirectLayoutTranslator);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROEdge', smalltalk.ROObject, ['model', 'from', 'to', 'shape'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROEdge)});},
messageSends: ["drawOn:for:"]}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_from",
smalltalk.method({
selector: "from",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.ROEdge)});},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_from_",
smalltalk.method({
selector: "from:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@from"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.ROEdge)});},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_shape",
smalltalk.method({
selector: "shape",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROEdge)});},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_shape_",
smalltalk.method({
selector: "shape:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aShape:aShape},smalltalk.ROEdge)});},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_to",
smalltalk.method({
selector: "to",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.ROEdge)});},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@to"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.ROEdge)});},
messageSends: []}),
smalltalk.ROEdge);


smalltalk.addMethod(
"_from_to_",
smalltalk.method({
selector: "from:to:",
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._from_(el1);
_st($2)._to_(el2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"from:to:",{el1:el1,el2:el2},smalltalk.ROEdge.klass)});},
messageSends: ["from:", "new", "to:", "yourself"]}),
smalltalk.ROEdge.klass);


smalltalk.addClass('ROElement', smalltalk.ROObject, ['model', 'shape', 'position'], 'ARoassal');
smalltalk.addMethod(
"_bounds",
smalltalk.method({
selector: "bounds",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)});},
messageSends: ["extent:", "extentFor:", "position"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)});},
messageSends: ["drawOn:for:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@shape"])._heightFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)});},
messageSends: ["heightFor:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=_st((0)).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)});},
messageSends: ["initialize", "@"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROElement)});},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROElement)});},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)});},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape",
smalltalk.method({
selector: "shape",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)});},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape_",
smalltalk.method({
selector: "shape:",
fn: function (aROShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)});},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_translateTo_",
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)});},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@shape"])._widthFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)});},
messageSends: ["widthFor:"]}),
smalltalk.ROElement);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROElement.klass)});},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.ROElement.klass);


smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal');
smalltalk.addMethod(
"_circle",
smalltalk.method({
selector: "circle",
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROCircle || ROCircle))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)});},
messageSends: ["new", "add:", "shape:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
"_create",
smalltalk.method({
selector: "create",
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)});},
messageSends: ["new", "add:", "shape:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
"_horizontalLayout",
smalltalk.method({
selector: "horizontalLayout",
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { var $1;
view=_st((smalltalk.ROView || ROView))._new();
_st(view)._clear();
_st((10))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {return _st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((smalltalk.ROHorizontalLineLayout || ROHorizontalLineLayout))._on_(_st(view)._elements());
_st(view)._open();
$1=view;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalLayout",{view:view},smalltalk.ROExample)});},
messageSends: ["new", "clear", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
"_horizontalLayout2",
smalltalk.method({
selector: "horizontalLayout2",
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { var $1,$2;
view=_st((smalltalk.ROView || ROView))._new();
_st(view)._clear();
_st((1))._to_do_((20),(function(i){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.ROBox || ROBox))._new();
_st($1)._height_((function(el){
return smalltalk.withContext(function($ctx3) {return _st(_st(el)._model()).__star((13));
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx1)})}));
$2=_st($1)._width_((function(el){
return smalltalk.withContext(function($ctx3) {return _st(_st(el)._model()).__star((5));
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx1)})}));
return _st(view)._add_(_st(_st(_st((smalltalk.ROElement || ROElement))._new())._model_(i))._shape_($2));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st((smalltalk.ROHorizontalLineLayout || ROHorizontalLineLayout))._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLayout2",{view:view},smalltalk.ROExample)});},
messageSends: ["new", "clear", "to:do:", "add:", "shape:", "height:", "*", "model", "width:", "model:", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
"_line",
smalltalk.method({
selector: "line",
fn: function () {
var self=this;
var view,el1,el2,edge;
return smalltalk.withContext(function($ctx1) { var $1,$2;
view=_st((smalltalk.ROView || ROView))._new();
el1=_st((smalltalk.ROBox || ROBox))._element();
el2=_st((smalltalk.ROBox || ROBox))._element();
edge=_st((smalltalk.ROLineShape || ROLineShape))._edgeFrom_to_(el1,el2);
$1=view;
_st($1)._add_(el1);
_st($1)._add_(el2);
$2=_st($1)._add_(edge);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"line",{view:view,el1:el1,el2:el2,edge:edge},smalltalk.ROExample)});},
messageSends: ["new", "element", "edgeFrom:to:", "add:", "open"]}),
smalltalk.ROExample);



smalltalk.addClass('ROPaper', smalltalk.ROObject, ['svgCanvas'], 'ARoassal');
smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.ROPaper)});},
messageSends: []}),
smalltalk.ROPaper);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=_st(self)._paper();
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPaper)});},
messageSends: ["initialize", "paper"]}),
smalltalk.ROPaper);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) {  return Raphael("container", 800, 600);;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROPaper)});},
messageSends: []}),
smalltalk.ROPaper);


smalltalk.ROPaper.klass.iVarNames = ['paper'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@paper"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@paper"]=_st(_st(self)._basicNew())._initialize();
self["@paper"];
} else {
$1;
};
$2=self["@paper"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ROPaper.klass)});},
messageSends: ["ifNil:", "initialize", "basicNew"]}),
smalltalk.ROPaper.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Use default instead.");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.ROPaper.klass)});},
messageSends: ["error:"]}),
smalltalk.ROPaper.klass);


smalltalk.addClass('ROShape', smalltalk.ROObject, ['height', 'width', 'color'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._elementOn_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape)});},
messageSends: ["elementOn:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
"_elementOn_",
smalltalk.method({
selector: "elementOn:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROElement || ROElement))._on_(anObject);
_st($2)._shape_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape)});},
messageSends: ["shape:", "on:", "yourself"]}),
smalltalk.ROShape);

smalltalk.addMethod(
"_extentFor_",
smalltalk.method({
selector: "extentFor:",
fn: function (element) {
var self=this;
var res;
return smalltalk.withContext(function($ctx1) { var $1;
res=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
$1=res;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element,res:res},smalltalk.ROShape)});},
messageSends: ["@", "roValue:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
"_heightFor_",
smalltalk.method({
selector: "heightFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@height"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.ROShape)});},
messageSends: ["roValue:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
"_widthFor_",
smalltalk.method({
selector: "widthFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@width"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.ROShape)});},
messageSends: ["roValue:"]}),
smalltalk.ROShape);


smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape.klass)});},
messageSends: ["element", "new"]}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
"_elementOn_",
smalltalk.method({
selector: "elementOn:",
fn: function (object) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROElement || ROElement))._on_(object);
_st($2)._shape_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{object:object},smalltalk.ROShape.klass)});},
messageSends: ["shape:", "on:", "yourself"]}),
smalltalk.ROShape.klass);


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, [], 'ARoassal');

smalltalk.addMethod(
"_edgeFrom_to_",
smalltalk.method({
selector: "edgeFrom:to:",
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROEdge || ROEdge))._from_to_(el1,el2);
_st($2)._shape_(_st(self)._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
messageSends: ["shape:", "new", "from:to:", "yourself"]}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
"_elementFrom_to_",
smalltalk.method({
selector: "elementFrom:to:",
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._edgeFrom_to_(el1,el2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
messageSends: ["edgeFrom:to:"]}),
smalltalk.ROAbstractLineShape.klass);


smalltalk.addClass('ROLineShape', smalltalk.ROAbstractLineShape, [], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas, anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._path_("M10 10L90 90");
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anEdge:anEdge},smalltalk.ROLineShape)});},
messageSends: ["path:"]}),
smalltalk.ROLineShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
"_defaultSize",
smalltalk.method({
selector: "defaultSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)});},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._rect_with_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._widthFor_(anElement),_st(self)._heightFor_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)});},
messageSends: ["rect:with:with:with:", "x", "position", "y", "widthFor:", "heightFor:"]}),
smalltalk.ROBox);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROBox)});},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=_st(self)._defaultSize();
self["@height"]=_st(self)._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)});},
messageSends: ["initialize", "defaultSize"]}),
smalltalk.ROBox);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)});},
messageSends: []}),
smalltalk.ROBox);



smalltalk.addClass('ROCircle', smalltalk.ROShape, ['radius'], 'ARoassal');
smalltalk.addMethod(
"_defaultRadius",
smalltalk.method({
selector: "defaultRadius",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)});},
messageSends: []}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._circle_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._radius());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)});},
messageSends: ["circle:with:with:", "x", "position", "y", "radius"]}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=_st(self)._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)});},
messageSends: ["initialize", "defaultRadius"]}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_radius",
smalltalk.method({
selector: "radius",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROCircle)});},
messageSends: []}),
smalltalk.ROCircle);



smalltalk.addClass('ROView', smalltalk.ROObject, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)});},
messageSends: ["add:"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._paper())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROView)});},
messageSends: ["clear", "paper"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROView)});},
messageSends: []}),
smalltalk.ROView);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st((smalltalk.Array || Array))._new();
self["@svgCanvas"]=_st(self)._paper();
_st(self)._clear();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)});},
messageSends: ["initialize", "new", "paper", "clear"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_numberOfElements",
smalltalk.method({
selector: "numberOfElements",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)});},
messageSends: ["size"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)});},
messageSends: ["do:", "drawOn:"]}),
smalltalk.ROView);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ROPaper || ROPaper))._default())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)});},
messageSends: ["canvas", "default"]}),
smalltalk.ROView);



smalltalk.addMethod(
"_roValue_",
smalltalk.method({
selector: "roValue:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anElement:anElement},smalltalk.Object)});},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_roValue_",
smalltalk.method({
selector: "roValue:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._value_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anObject:anObject},smalltalk.BlockClosure)});},
messageSends: ["value:"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_roValue_",
smalltalk.method({
selector: "roValue:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{aBlock:aBlock},smalltalk.Number)});},
messageSends: []}),
smalltalk.Number);

