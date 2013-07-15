smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROLayout', smalltalk.Object, ['translator'], 'ARoassal');
smalltalk.addMethod(
"_applyOn_",
smalltalk.method({
selector: "applyOn:",
category: 'not yet classified',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)});},
args: ["elements"],
source: "applyOn: elements\x0a\x09\x0a\x09self executeOnElements: elements",
messageSends: ["executeOnElements:"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
"_executeOnElements_",
smalltalk.method({
selector: "executeOnElements:",
category: 'not yet classified',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doExecute_(_st(elements)._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)});},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x09\x09\x0a\x22\x09self doInitialize: elements.\x22\x0a\x09self doExecute: elements asOrderedCollection.\x0a\x22\x09self doPost: elements.\x22",
messageSends: ["doExecute:", "asOrderedCollection"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)});},
args: [],
source: "initialize\x0a\x09translator := ROLayoutTranslator default.",
messageSends: ["default"],
referencedClasses: ["ROLayoutTranslator"]
}),
smalltalk.ROLayout);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._new())._applyOn_(aCollection);
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.ROLayout.klass)});},
args: ["aCollection"],
source: "on: aCollection\x0a\x09self new applyOn: aCollection.\x0a\x09^ aCollection",
messageSends: ["applyOn:", "new"],
referencedClasses: []
}),
smalltalk.ROLayout.klass);


smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal');
smalltalk.addMethod(
"_alignTop",
smalltalk.method({
selector: "alignTop",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "alignTop\x0a\x09\x0a\x09alignment := #top",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_alignment",
smalltalk.method({
selector: "alignment",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "alignment\x0a\x09\x0a\x09^alignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_alignment_",
smalltalk.method({
selector: "alignment:",
category: 'not yet classified',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)});},
args: ["anObject"],
source: "alignment: anObject\x0a\x09\x0a\x09alignment := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_horizontalGap",
smalltalk.method({
selector: "horizontalGap",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^horizontalGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_horizontalOutGap",
smalltalk.method({
selector: "horizontalOutGap",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalOutGap",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "horizontalOutGap\x0a\x09\x0a\x09^horizontalOutGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
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
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09verticalGap := 10.\x0a\x09horizontalGap := 10.\x0a\x09horizontalOutGap := 5.\x0a\x09verticalOutGap := 5.\x0a\x09horizontallyStretchable := verticallyStretchable := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
"_verticalOutGap",
smalltalk.method({
selector: "verticalOutGap",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@verticalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalOutGap",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "verticalOutGap\x0a\x09\x0a\x09^verticalOutGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal');
smalltalk.addMethod(
"_deltaFor_",
smalltalk.method({
selector: "deltaFor:",
category: 'not yet classified',
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
args: ["aNodeFigure"],
source: "deltaFor: aNodeFigure\x0a\x09\x0a\x09| delta |\x0a\x09delta := 0.\x0a\x09self alignment == #bottom ifTrue: [delta := aNodeFigure height].\x0a\x09self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].\x0a\x09^0 @ delta",
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_doExecute_",
smalltalk.method({
selector: "doExecute:",
category: 'not yet classified',
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
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer delta |\x0a\x09pointer := self positionOriginalPointer: elements.\x0a\x22\x0a\x09horizontallyStretchable ifTrue: \x0a\x09\x09[ self doStretchHorizontal: elements ].\x0a\x22\x0a\x09elements do: \x0a\x09\x09[ :element | \x0a\x09\x09delta := self deltaFor: element.\x0a\x09\x09translator translate: element to: pointer - delta.\x0a\x09\x09pointer := self \x0a\x09\x09\x09\x09\x09movePointer: pointer\x0a\x09\x09\x09\x09\x09accordingToFigure: element.\x0a ].\x09\x0a\x22\x0a\x09verticallyStretchable ifTrue: \x0a\x09\x09[ self doStretchVertical: elements ]\x0a\x22",
messageSends: ["positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROAbstractLineLayout.fn.prototype._initialize.apply(_st(self), []);
_st(self)._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHorizontalLineLayout)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09self alignTop",
messageSends: ["initialize", "alignTop"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_movePointer_accordingToFigure_",
smalltalk.method({
selector: "movePointer:accordingToFigure:",
category: 'not yet classified',
fn: function (pointer, element) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self)._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.ROHorizontalLineLayout)});},
args: ["pointer", "element"],
source: "movePointer: pointer accordingToFigure: element\x0a\x09\x0a\x09^ (pointer x + element width + self horizontalGap) @ pointer y",
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_positionOriginalPointer_",
smalltalk.method({
selector: "positionOriginalPointer:",
category: 'not yet classified',
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
args: ["aGraph"],
source: "positionOriginalPointer: aGraph \x0a\x09| maxHeight delta |\x0a\x09delta := 0.\x0a\x09self alignment == #bottom ifTrue: \x0a\x09\x09[ maxHeight := aGraph nodes maxValue: #height.\x0a\x09\x09delta := maxHeight ].\x0a\x09self alignment == #center ifTrue: \x0a\x09\x09[ maxHeight := aGraph nodes maxValue: #height.\x0a\x09\x09delta := maxHeight / 2.0 ].\x0a\x09^ self horizontalOutGap @ (self verticalOutGap + delta)",
messageSends: ["ifTrue:", "maxValue:", "nodes", "==", "alignment", "/", "@", "+", "verticalOutGap", "horizontalOutGap"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal');
smalltalk.addMethod(
"_translate_to_",
smalltalk.method({
selector: "translate:to:",
category: 'not yet classified',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.ROLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROLayoutTranslator);


smalltalk.ROLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
category: 'not yet classified',
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
args: [],
source: "default\x0a\x09\x22Return the default translator, the one used in the layouts\x22\x0a\x0a\x09defaultTranslator ifNotNil: [ ^ defaultTranslator ].\x0a\x09^ defaultTranslator := self defaultClass new",
messageSends: ["ifNotNil:", "new", "defaultClass"],
referencedClasses: []
}),
smalltalk.ROLayoutTranslator.klass);

smalltalk.addMethod(
"_defaultClass",
smalltalk.method({
selector: "defaultClass",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.RODirectLayoutTranslator || RODirectLayoutTranslator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.ROLayoutTranslator.klass)});},
args: [],
source: "defaultClass\x0a\x09^ RODirectLayoutTranslator",
messageSends: [],
referencedClasses: ["RODirectLayoutTranslator"]
}),
smalltalk.ROLayoutTranslator.klass);


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal');
smalltalk.addMethod(
"_translate_to_",
smalltalk.method({
selector: "translate:to:",
category: 'not yet classified',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09element translateTo: newPosition",
messageSends: ["translateTo:"],
referencedClasses: []
}),
smalltalk.RODirectLayoutTranslator);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROEdge', smalltalk.ROObject, ['model', 'from', 'to', 'shape'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
category: 'accessing',
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROEdge)});},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_from",
smalltalk.method({
selector: "from",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.ROEdge)});},
args: [],
source: "from\x0a\x09^ from",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_from_",
smalltalk.method({
selector: "from:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@from"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.ROEdge)});},
args: ["anElement"],
source: "from: anElement\x0a\x09from := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_shape",
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROEdge)});},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_shape_",
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aShape:aShape},smalltalk.ROEdge)});},
args: ["aShape"],
source: "shape: aShape\x0a\x09shape := aShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_to",
smalltalk.method({
selector: "to",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.ROEdge)});},
args: [],
source: "to\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@to"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.ROEdge)});},
args: ["anElement"],
source: "to: anElement\x0a\x09to := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);


smalltalk.addMethod(
"_from_to_",
smalltalk.method({
selector: "from:to:",
category: 'public',
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
args: ["el1", "el2"],
source: "from: el1 to: el2\x0a\x09^ self new from: el1; to: el2; yourself",
messageSends: ["from:", "new", "to:", "yourself"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);


smalltalk.addClass('ROElement', smalltalk.ROObject, ['model', 'shape', 'position'], 'ARoassal');
smalltalk.addMethod(
"_bounds",
smalltalk.method({
selector: "bounds",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)});},
args: [],
source: "bounds\x0a\x09\x22Return the bounds of the element\x22\x0a\x09\x0a\x09^ self position extent: (shape extentFor: self)",
messageSends: ["extent:", "extentFor:", "position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)});},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@shape"])._heightFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)});},
args: [],
source: "height\x0a\x09^ shape heightFor: self",
messageSends: ["heightFor:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=_st((0)).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROElement)});},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROElement)});},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)});},
args: [],
source: "position\x0a\x09\x22Return the position of the element. Return a point of floats\x22\x0a\x09\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape",
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)});},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_shape_",
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aROShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)});},
args: ["aROShape"],
source: "shape: aROShape\x0a\x09shape := aROShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_translateTo_",
smalltalk.method({
selector: "translateTo:",
category: 'accessing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)});},
args: ["aPoint"],
source: "translateTo: aPoint \x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@shape"])._widthFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)});},
args: [],
source: "width\x0a\x09^ shape widthFor: self",
messageSends: ["widthFor:"],
referencedClasses: []
}),
smalltalk.ROElement);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'public',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROElement.klass)});},
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new model: anObject; yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROElement.klass);


smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal');
smalltalk.addMethod(
"_circle",
smalltalk.method({
selector: "circle",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROCircle || ROCircle))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)});},
args: [],
source: "circle\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROElement new shape: (ROCircle new)).\x0a\x09view open.",
messageSends: ["new", "add:", "shape:", "open"],
referencedClasses: ["ROView", "ROCircle", "ROElement"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
"_create",
smalltalk.method({
selector: "create",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)});},
args: [],
source: "create\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROElement new shape: (ROBox new)).\x0a\x09view open.",
messageSends: ["new", "add:", "shape:", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
"_horizontalLayout",
smalltalk.method({
selector: "horizontalLayout",
category: 'not yet classified',
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
args: [],
source: "horizontalLayout\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x0910 timesRepeat: [view add: (ROElement new shape: (ROBox new))].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.\x0a\x09^ view.",
messageSends: ["new", "clear", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
"_horizontalLayout2",
smalltalk.method({
selector: "horizontalLayout2",
category: 'not yet classified',
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
args: [],
source: "horizontalLayout2\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x091 to: 20 do: [ :i |\x0a\x09\x09view add: ((ROElement new model: i) shape: \x0a\x09\x09\x09(ROBox new height: [ :el | el model * 13 ]; width: [ :el | el model * 5 ])) ].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.",
messageSends: ["new", "clear", "to:do:", "add:", "shape:", "height:", "*", "model", "width:", "model:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
"_line",
smalltalk.method({
selector: "line",
category: 'not yet classified',
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
args: [],
source: "line\x0a\x09| view el1 el2 edge |\x0a\x09view := ROView new.\x0a\x0a\x09el1 := ROBox element.\x0a\x09el2 := ROBox element.\x0a\x09edge := ROLineShape edgeFrom: el1 to: el2.\x0a\x0a\x09view add: el1; add: el2; add: edge.\x0a\x09\x0a\x09view open.",
messageSends: ["new", "element", "edgeFrom:to:", "add:", "open"],
referencedClasses: ["ROView", "ROBox", "ROLineShape"]
}),
smalltalk.ROExample);



smalltalk.addClass('ROPaper', smalltalk.ROObject, ['svgCanvas'], 'ARoassal');
smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.ROPaper)});},
args: [],
source: "canvas\x0a\x09^ svgCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPaper);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=_st(self)._paper();
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPaper)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09svgCanvas := self paper.\x0a\x09^ self",
messageSends: ["initialize", "paper"],
referencedClasses: []
}),
smalltalk.ROPaper);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) {  return Raphael("container", 800, 600);;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROPaper)});},
args: [],
source: "paper\x0a\x09< return Raphael(\x22container\x22, 800, 600);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPaper);


smalltalk.ROPaper.klass.iVarNames = ['paper'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
category: 'as yet unclassified',
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
args: [],
source: "default\x0apaper ifNil: [paper := self basicNew initialize].\x0a       ^paper",
messageSends: ["ifNil:", "initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.ROPaper.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_("Use default instead.");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.ROPaper.klass)});},
args: [],
source: "new\x09\x0a\x09self error: 'Use default instead.'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.ROPaper.klass);


smalltalk.addClass('ROShape', smalltalk.ROObject, ['height', 'width', 'color'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)});},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09\x22abstract method - Please override it to do what you actually need\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
category: 'creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._elementOn_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape)});},
args: [],
source: "element\x0a\x09^ self elementOn: nil",
messageSends: ["elementOn:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_elementOn_",
smalltalk.method({
selector: "elementOn:",
category: 'creation',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROElement || ROElement))._on_(anObject);
_st($2)._shape_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape)});},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09^ (ROElement on: anObject) shape: self; yourself",
messageSends: ["shape:", "on:", "yourself"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_extentFor_",
smalltalk.method({
selector: "extentFor:",
category: 'drawing',
fn: function (element) {
var self=this;
var res;
return smalltalk.withContext(function($ctx1) { var $1;
res=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
$1=res;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element,res:res},smalltalk.ROShape)});},
args: ["element"],
source: "extentFor: element\x0a\x09\x22Return the extent of element\x22\x0a\x09\x0a\x09| res |\x0a\x09\x22\x0a\x09(widthCache notNil and: [ heightCache notNil ]) ifTrue: [ ^ widthCache @ heightCache ].\x0a\x09\x22\x0a\x09\x22res := ((width roValue: element) @ (height roValue: element)) max: (next extentFor: element).\x22\x0a\x09res := ((width roValue: element) @ (height roValue: element)) .\x0a\x09\x22\x0a\x09widthCache := res x.\x0a\x09heightCache := res y.\x0a\x09\x22\x0a\x09^ res",
messageSends: ["@", "roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROShape)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
args: ["aNumberOrABlock"],
source: "height: aNumberOrABlock\x0a\x09height := aNumberOrABlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_heightFor_",
smalltalk.method({
selector: "heightFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@height"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.ROShape)});},
args: ["anElement"],
source: "heightFor: anElement\x0a\x09^ height roValue: anElement",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROShape)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
args: ["aNumberOrABlock"],
source: "width: aNumberOrABlock\x0a\x09width := aNumberOrABlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_widthFor_",
smalltalk.method({
selector: "widthFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@width"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.ROShape)});},
args: ["anElement"],
source: "widthFor: anElement\x0a\x09^ width roValue: anElement",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);


smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape.klass)});},
args: [],
source: "element\x0a\x09^ self new element",
messageSends: ["element", "new"],
referencedClasses: []
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
"_elementOn_",
smalltalk.method({
selector: "elementOn:",
category: 'not yet classified',
fn: function (object) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROElement || ROElement))._on_(object);
_st($2)._shape_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{object:object},smalltalk.ROShape.klass)});},
args: ["object"],
source: "elementOn: object\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ (ROElement on: object) shape: self; yourself",
messageSends: ["shape:", "on:", "yourself"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROShape.klass);


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, [], 'ARoassal');

smalltalk.addMethod(
"_edgeFrom_to_",
smalltalk.method({
selector: "edgeFrom:to:",
category: 'not yet classified',
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROEdge || ROEdge))._from_to_(el1,el2);
_st($2)._shape_(_st(self)._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
args: ["el1", "el2"],
source: "edgeFrom: el1 to: el2\x0a\x09^ (ROEdge from: el1 to: el2) shape: self new; yourself",
messageSends: ["shape:", "new", "from:to:", "yourself"],
referencedClasses: ["ROEdge"]
}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
"_elementFrom_to_",
smalltalk.method({
selector: "elementFrom:to:",
category: 'not yet classified',
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._edgeFrom_to_(el1,el2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
args: ["el1", "el2"],
source: "elementFrom: el1 to: el2\x0a\x09^ self edgeFrom: el1 to: el2",
messageSends: ["edgeFrom:to:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape.klass);


smalltalk.addClass('ROLineShape', smalltalk.ROAbstractLineShape, [], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'not yet classified',
fn: function (canvas, anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._path_("M10 10L90 90");
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anEdge:anEdge},smalltalk.ROLineShape)});},
args: ["canvas", "anEdge"],
source: "drawOn: canvas for: anEdge\x0a\x09canvas path: 'M10 10L90 90'\x0a\x22\x09canvas \x0a\x09\x09rect: (anElement position x)\x0a\x09\x09with: (anElement position y) \x0a\x09\x09with: (self widthFor: anElement) \x0a\x09\x09with: (self heightFor: anElement) .\x0a\x22",
messageSends: ["path:"],
referencedClasses: []
}),
smalltalk.ROLineShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
"_defaultSize",
smalltalk.method({
selector: "defaultSize",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)});},
args: [],
source: "defaultSize\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._rect_with_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._widthFor_(anElement),_st(self)._heightFor_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)});},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09canvas \x0a\x09\x09rect: (anElement position x)\x0a\x09\x09with: (anElement position y) \x0a\x09\x09with: (self widthFor: anElement) \x0a\x09\x09with: (self heightFor: anElement) .\x0a\x09\x22\x0a\x09| nodes |\x0a\x09nodes := (canvas selectAll: 'rect') data: anElement .\x0a\x09nodes enter append: 'rect'.\x0a\x09nodes attr: 'class' value: 'elements'.\x0a\x09nodes attr: 'height' value: 10.\x0a\x09nodes attr: 'width' value: 10.\x0a\x09nodes attr: 'fill' value: 'green'.\x0a\x09nodes attr: 'x' value: (anElement position x).\x0a\x09nodes attr: 'y' value: 20.\x0a\x09\x22",
messageSends: ["rect:with:with:with:", "x", "position", "y", "widthFor:", "heightFor:"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROBox)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=_st(self)._defaultSize();
self["@height"]=_st(self)._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := self defaultSize.\x0a\x09height := self defaultSize.",
messageSends: ["initialize", "defaultSize"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);



smalltalk.addClass('ROCircle', smalltalk.ROShape, ['radius'], 'ARoassal');
smalltalk.addMethod(
"_defaultRadius",
smalltalk.method({
selector: "defaultRadius",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)});},
args: [],
source: "defaultRadius\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas, anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._circle_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._radius());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)});},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09canvas \x0a\x09\x09circle: (anElement position x)\x0a\x09\x09with: (anElement position y) \x0a\x09\x09with: (self radius) .",
messageSends: ["circle:with:with:", "x", "position", "y", "radius"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=_st(self)._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09radius := self defaultRadius",
messageSends: ["initialize", "defaultRadius"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
"_radius",
smalltalk.method({
selector: "radius",
category: 'drawing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROCircle)});},
args: [],
source: "radius\x0a\x09^ radius",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);



smalltalk.addClass('ROView', smalltalk.ROObject, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)});},
args: ["anElement"],
source: "add: anElement\x0a\x09elements add: anElement",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'public - opening',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._paper())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROView)});},
args: [],
source: "clear\x0a\x09self paper clear",
messageSends: ["clear", "paper"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROView)});},
args: [],
source: "elements\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st((smalltalk.Array || Array))._new();
self["@svgCanvas"]=_st(self)._paper();
_st(self)._clear();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := Array new.\x0a\x09svgCanvas := self paper.\x0a\x09self clear",
messageSends: ["initialize", "new", "paper", "clear"],
referencedClasses: ["Array"]
}),
smalltalk.ROView);

smalltalk.addMethod(
"_numberOfElements",
smalltalk.method({
selector: "numberOfElements",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)});},
args: [],
source: "numberOfElements\x0a\x09^ elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'public - opening',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)});},
args: [],
source: "open\x0a\x09\x0a\x09elements do: [ :each | each drawOn: svgCanvas].",
messageSends: ["do:", "drawOn:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
category: 'public - opening',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st((smalltalk.ROPaper || ROPaper))._default())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)});},
args: [],
source: "paper\x0a\x09^ ROPaper default canvas",
messageSends: ["canvas", "default"],
referencedClasses: ["ROPaper"]
}),
smalltalk.ROView);



smalltalk.addMethod(
"_roValue_",
smalltalk.method({
selector: "roValue:",
category: '*ARoassal',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anElement:anElement},smalltalk.Object)});},
args: ["anElement"],
source: "roValue: anElement\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_roValue_",
smalltalk.method({
selector: "roValue:",
category: '*ARoassal',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._value_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anObject:anObject},smalltalk.BlockClosure)});},
args: ["anObject"],
source: "roValue: anObject\x0a\x09^ self value: anObject",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_roValue_",
smalltalk.method({
selector: "roValue:",
category: '*ARoassal',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{aBlock:aBlock},smalltalk.Number)});},
args: ["aBlock"],
source: "roValue: aBlock\x0a\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

