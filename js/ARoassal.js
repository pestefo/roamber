smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROElementTest', smalltalk.TestCase, [], 'ARoassal');
smalltalk.addMethod(
"_testCreation",
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function (){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { element=_st((smalltalk.ROElement || ROElement))._new();
_st(self)._assert_(_st(_st(element)._position()).__eq(_st((0)).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{element:element},smalltalk.ROElementTest)})},
args: [],
source: "testCreation\x0a\x09| element |\x0a\x09element := ROElement new.\x0a\x09self assert: element position = (0 @ 0).",
messageSends: ["new", "assert:", "=", "@", "position"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROElementTest);



smalltalk.addClass('ROLayout', smalltalk.Object, ['translator'], 'ARoassal');
smalltalk.addMethod(
"_applyOn_",
smalltalk.method({
selector: "applyOn:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)})},
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
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doExecute_(_st(elements)._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x09\x09\x0a\x22\x09self doInitialize: elements.\x22\x0a\x09self doExecute: elements asOrderedCollection.\x0a\x22\x09self doPost: elements.\x22\x0a",
messageSends: ["doExecute:", "asOrderedCollection"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)})},
args: [],
source: "initialize\x0a\x09translator := ROLayoutTranslator default.\x0a",
messageSends: ["default"],
referencedClasses: ["ROLayoutTranslator"]
}),
smalltalk.ROLayout);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._new())._applyOn_(aCollection);
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.ROLayout.klass)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.ROAbstractLineLayout)})},
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
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractLineLayout)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalOutGap",{},smalltalk.ROAbstractLineLayout)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@verticalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalOutGap",{},smalltalk.ROAbstractLineLayout)})},
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
fn: function (elements){
var self=this;
var pointer,delta;
return smalltalk.withContext(function($ctx1) { pointer=_st(self)._positionOriginalPointer_(elements);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {delta=_st(self)._deltaFor_(element);
delta;
_st(self["@translator"])._translate_to_(element,_st(pointer).__minus(delta));
pointer=_st(self)._movePointer_accordingToFigure_(pointer,element);
pointer;
return _st(self)._step();
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.ROHorizontalLineLayout)})},
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer delta |\x0a\x09pointer := self positionOriginalPointer: elements.\x0a\x22\x0a\x09horizontallyStretchable ifTrue: \x0a\x09\x09[ self doStretchHorizontal: elements ].\x0a\x22\x0a\x09elements do: \x0a\x09\x09[ :element | \x0a\x09\x09delta := self deltaFor: element.\x0a\x09\x09translator translate: element to: pointer - delta.\x0a\x09\x09pointer := self \x0a\x09\x09\x09\x09\x09movePointer: pointer\x0a\x09\x09\x09\x09\x09accordingToFigure: element.\x0a\x09\x09self step ].\x09\x0a\x22\x0a\x09verticallyStretchable ifTrue: \x0a\x09\x09[ self doStretchVertical: elements ]\x0a\x22",
messageSends: ["positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:", "step"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROAbstractLineLayout.fn.prototype._initialize.apply(_st(self), []);
_st(self)._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHorizontalLineLayout)})},
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
fn: function (pointer,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self)._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.ROHorizontalLineLayout)})},
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
fn: function (element,newPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.ROLayoutTranslator)})},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09self subclassResponsibility ",
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.RODirectLayoutTranslator || RODirectLayoutTranslator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.ROLayoutTranslator.klass)})},
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
fn: function (element,newPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)})},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09element translateTo: newPosition",
messageSends: ["translateTo:"],
referencedClasses: []
}),
smalltalk.RODirectLayoutTranslator);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROElement', smalltalk.ROObject, ['shape', 'position'], 'ARoassal');
smalltalk.addMethod(
"_bounds",
smalltalk.method({
selector: "bounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)})},
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
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=_st((0)).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)})},
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
fn: function (aROShape){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)})},
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
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._translateBy_(_st(aPoint).__minus(_st(_st(self)._bounds())._origin()));
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)})},
args: ["aPoint"],
source: "translateTo: aPoint \x0a\x09self translateBy: (aPoint - self bounds origin)",
messageSends: ["translateBy:", "-", "origin", "bounds"],
referencedClasses: []
}),
smalltalk.ROElement);



smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal');
smalltalk.addMethod(
"_circle",
smalltalk.method({
selector: "circle",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROCircle || ROCircle))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)})},
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
fn: function (){
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)})},
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
fn: function (){
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st((10))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {return _st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((smalltalk.ROHorizontalLineLayout || ROHorizontalLineLayout))._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLayout",{view:view},smalltalk.ROExample)})},
args: [],
source: "horizontalLayout\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x0910 timesRepeat: [view add: (ROElement new shape: (ROBox new))].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.",
messageSends: ["new", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);



smalltalk.addClass('ROShape', smalltalk.ROObject, ['height', 'width', 'color'], 'ARoassal');
smalltalk.addMethod(
"_drawOn_for_",
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09\x22abstract method - Please override it to do what you actually need\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
"_extentFor_",
smalltalk.method({
selector: "extentFor:",
category: 'drawing',
fn: function (element){
var self=this;
var res;
return smalltalk.withContext(function($ctx1) { var $1;
res=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
$1=res;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element,res:res},smalltalk.ROShape)})},
args: ["element"],
source: "extentFor: element\x0a\x09\x22Return the extent of element\x22\x0a\x09\x0a\x09| res |\x0a\x09\x22\x0a\x09(widthCache notNil and: [ heightCache notNil ]) ifTrue: [ ^ widthCache @ heightCache ].\x0a\x09\x22\x0a\x09\x22res := ((width roValue: element) @ (height roValue: element)) max: (next extentFor: element).\x22\x0a\x09res := ((width roValue: element) @ (height roValue: element)) .\x0a\x09\x22\x0a\x09widthCache := res x.\x0a\x09heightCache := res y.\x0a\x09\x22\x0a\x09^ res",
messageSends: ["@", "roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, ['height', 'width'], 'ARoassal');
smalltalk.addMethod(
"_defaultSize",
smalltalk.method({
selector: "defaultSize",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
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
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._rect_with_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._width(),_st(self)._height());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09canvas \x0a\x09\x09rect: (anElement position x)\x0a\x09\x09with: (anElement position y) \x0a\x09\x09with: (self width) \x0a\x09\x09with: (self height) .\x0a\x09\x22\x0a\x09| nodes |\x0a\x09nodes := (canvas selectAll: 'rect') data: anElement .\x0a\x09nodes enter append: 'rect'.\x0a\x09nodes attr: 'class' value: 'elements'.\x0a\x09nodes attr: 'height' value: 10.\x0a\x09nodes attr: 'width' value: 10.\x0a\x09nodes attr: 'fill' value: 'green'.\x0a\x09nodes attr: 'x' value: (anElement position x).\x0a\x09nodes attr: 'y' value: 20.\x0a\x09\x22",
messageSends: ["rect:with:with:with:", "x", "position", "y", "width", "height"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROBox)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=_st(self)._defaultSize();
self["@height"]=_st(self)._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)})},
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
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(canvas)._circle_with_with_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self)._radius());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROShape.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=_st(self)._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROCircle)})},
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
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)})},
args: ["anElement"],
source: "add: anElement\x0a\x09elements add: anElement",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROView)})},
args: [],
source: "elements\x0a\x09^ elements ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROObject.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st((smalltalk.Array || Array))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ROView);

smalltalk.addMethod(
"_numberOfElements",
smalltalk.method({
selector: "numberOfElements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)})},
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@svgCanvas"]=_st(self)._paper();
_st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)})},
args: [],
source: "open\x0a\x09svgCanvas := self paper.\x0a\x09elements do: [ :each | each drawOn: svgCanvas].",
messageSends: ["paper", "do:", "drawOn:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {  return Raphael("container", 800, 600);;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)})},
args: [],
source: "paper\x0a\x09< return Raphael(\x22container\x22, 800, 600);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);



smalltalk.addClass('ROViewTest', smalltalk.TestCase, ['view'], 'ARoassal');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@view"]=_st((smalltalk.ROView || ROView))._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROViewTest)})},
args: [],
source: "setUp\x0a\x09view := ROView new.",
messageSends: ["new"],
referencedClasses: ["ROView"]
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
"_testCreation",
smalltalk.method({
selector: "testCreation",
category: 'test',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._assert_equals_(_st(self["@view"])._numberOfElements(),(0));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROViewTest)})},
args: [],
source: "testCreation\x0a\x0a\x09self assert: view numberOfElements equals: 0.",
messageSends: ["assert:equals:", "numberOfElements"],
referencedClasses: []
}),
smalltalk.ROViewTest);

smalltalk.addMethod(
"_testTwoElements",
smalltalk.method({
selector: "testTwoElements",
category: 'test',
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
args: [],
source: "testTwoElements\x0a\x09| el1 el2 |\x0a\x09el1 := ROElement new shape: (ROBox new); yourself.\x0a\x09el2 := ROElement new shape: (ROBox new); yourself.\x0a\x09view add: el1; add: el2.\x0a\x09\x0a\x09self assert: view numberOfElements equals: 2",
messageSends: ["shape:", "new", "yourself", "add:", "assert:equals:", "numberOfElements"],
referencedClasses: ["ROBox", "ROElement"]
}),
smalltalk.ROViewTest);



