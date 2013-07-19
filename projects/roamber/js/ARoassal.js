smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROLayout', smalltalk.Object, ['translator'], 'ARoassal');
smalltalk.addMethod(
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


smalltalk.addClass('ROElement', smalltalk.ROObject, ['model', 'shape', 'position', 'interactions'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractions",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@interactions"])._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractions",{},smalltalk.ROElement)})},
args: [],
source: "activateInteractions\x0a\x09interactions values do: [:each | each value].",
messageSends: ["do:", "value", "values"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteraction:",
category: 'as yet unclassified',
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._at_put_(_st(anInteractionClassOrInstance)._key(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(anInteractionClassOrInstance)._initializeElement_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addInteraction:",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROElement)})},
args: ["anInteractionClassOrInstance"],
source: "addInteraction: anInteractionClassOrInstance\x0a\x09\x22Add an interaction to the node\x22\x0a\x09\x0a\x09interactions at: anInteractionClassOrInstance key put: [anInteractionClassOrInstance initializeElement: self]",
messageSends: ["at:put:", "key", "initializeElement:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
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
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROElement.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@interactions"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0.\x0a\x09interactions := Dictionary new.",
messageSends: ["initialize", "@", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROElement);

smalltalk.addMethod(
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
smalltalk.method({
selector: "circle",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROCircle || ROCircle))._element())._translateTo_(_st((50)).__at((50))));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)});},
args: [],
source: "circle\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROCircle element translateTo: 50 @ 50).\x0a\x09view open.",
messageSends: ["new", "add:", "translateTo:", "@", "element", "open"],
referencedClasses: ["ROView", "ROCircle"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
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
smalltalk.method({
selector: "drag",
category: 'not yet classified',
fn: function (){
var self=this;
var view,elements;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROCircle(){return smalltalk.ROCircle||(typeof ROCircle=="undefined"?nil:ROCircle)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($ROView())._new();
elements=_st($OrderedCollection())._new();
$1=elements;
_st($1)._add_(_st(_st($ROBox())._element())._translateTo_((50).__at((50))));
$2=_st($1)._add_(_st(_st($ROCircle())._element())._translateTo_((200).__at((150))));
_st(elements)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._addInteraction_($RODraggable());
return _st(view)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"drag",{view:view,elements:elements},smalltalk.ROExample)})},
args: [],
source: "drag\x0a\x09| view elements |\x0a\x09view := ROView new.\x0a\x09elements := OrderedCollection new.\x0a\x09elements add: (ROBox element translateTo: 50 @ 50); \x0a\x09\x09\x09 add: (ROCircle element translateTo: 200 @ 150). \x0a\x09\x0a\x09elements do: [:each | each addInteraction: RODraggable. view add: each].\x0a\x09view open.",
messageSends: ["new", "add:", "translateTo:", "@", "element", "do:", "addInteraction:", "open"],
referencedClasses: ["ROView", "OrderedCollection", "ROBox", "ROCircle", "RODraggable"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
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
smalltalk.method({
selector: "line",
category: 'not yet classified',
fn: function (){
var self=this;
var view,el1,el2,edge;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROLineShape(){return smalltalk.ROLineShape||(typeof ROLineShape=="undefined"?nil:ROLineShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($ROView())._new();
el1=_st($ROBox())._element();
el2=_st($ROBox())._element();
_st(el1)._translateTo_((20).__at((30)));
_st(el2)._translateTo_((300).__at((100)));
edge=_st($ROLineShape())._edgeFrom_to_(el1,el2);
$1=view;
_st($1)._add_(el1);
_st($1)._add_(el2);
$2=_st($1)._add_(edge);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"line",{view:view,el1:el1,el2:el2,edge:edge},smalltalk.ROExample)})},
args: [],
source: "line\x0a\x09| view el1 el2 edge |\x0a\x09view := ROView new.\x0a\x0a\x09el1 := ROBox element.\x0a\x09el2 := ROBox element.\x0a\x09\x0a\x09el1 translateTo: 20 @ 30.\x0a\x09el2 translateTo: 300 @ 100.\x0a\x09\x0a\x09edge := ROLineShape edgeFrom: el1 to: el2.\x0a\x0a\x09view add: el1; add: el2; add: edge.\x0a\x09\x0a\x09view open.",
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"],
referencedClasses: ["ROView", "ROBox", "ROLineShape"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "line2",
category: 'not yet classified',
fn: function (){
var self=this;
var view,el1,el2,edge,el3,el4,edge2;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROCircle(){return smalltalk.ROCircle||(typeof ROCircle=="undefined"?nil:ROCircle)}
function $ROLineShape(){return smalltalk.ROLineShape||(typeof ROLineShape=="undefined"?nil:ROLineShape)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($ROView())._new();
el1=_st($ROCircle())._element();
el2=_st($ROCircle())._element();
_st(el1)._translateTo_((20).__at((30)));
_st(el2)._translateTo_((300).__at((100)));
edge=_st($ROLineShape())._edgeFrom_to_(el1,el2);
el3=_st($ROBox())._element();
el4=_st($ROBox())._element();
_st(el3)._translateTo_((150).__at((20)));
_st(el4)._translateTo_((150).__at((300)));
edge2=_st($ROLineShape())._edgeFrom_to_(el3,el4);
$1=view;
_st($1)._add_(el1);
_st($1)._add_(el2);
_st($1)._add_(edge);
_st($1)._add_(el3);
_st($1)._add_(el4);
$2=_st($1)._add_(edge2);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"line2",{view:view,el1:el1,el2:el2,edge:edge,el3:el3,el4:el4,edge2:edge2},smalltalk.ROExample)})},
args: [],
source: "line2\x0a\x0a\x09| view el1 el2 edge el3 el4 edge2 |\x0a\x09view := ROView new.\x0a\x0a\x09el1 := ROCircle element.\x0a\x09el2 := ROCircle element.\x0a\x09\x0a\x09el1 translateTo: 20 @ 30.\x0a\x09el2 translateTo: 300 @ 100.\x0a\x09\x0a\x09edge := ROLineShape edgeFrom: el1 to: el2.\x0a\x09\x0a\x09el3 := ROBox element.\x0a\x09el4 := ROBox element.\x0a\x09\x0a\x09el3 translateTo: 150 @ 20.\x0a\x09el4 translateTo: 150 @ 300.\x0a\x09\x0a\x09edge2 := ROLineShape edgeFrom: el3 to: el4.\x0a\x0a\x09view add: el1; add: el2; add: edge; add: el3; add: el4; add: edge2.\x0a\x09\x0a\x09view open.",
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"],
referencedClasses: ["ROView", "ROCircle", "ROLineShape", "ROBox"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "tux",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st((smalltalk.ROTux || ROTux))._element());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"tux",{view:view},smalltalk.ROExample)});},
args: [],
source: "tux\x0a\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROTux element).\x0a\x09view open",
messageSends: ["new", "add:", "element", "open"],
referencedClasses: ["ROView", "ROTux"]
}),
smalltalk.ROExample);



smalltalk.addClass('ROInteraction', smalltalk.ROObject, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction)})},
args: [],
source: "elementToBeAdded\x0a\x09^ self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction)})},
args: ["element"],
source: "initializeElement: element\x0a\x09self subclassResponsibility ",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction)})},
args: [],
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.ROInteraction);


smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction.klass)})},
args: [],
source: "elementToBeAdded\x0a\x09^ self new ",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._elementToBeAdded();
_st($2)._initializeElement_(element);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction.klass)})},
args: ["element"],
source: "initializeElement: element\x0a\x09^ self elementToBeAdded initializeElement: element; yourself",
messageSends: ["initializeElement:", "elementToBeAdded", "yourself"],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction.klass)})},
args: [],
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);


smalltalk.addClass('RODraggable', smalltalk.ROInteraction, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
var svgElement;
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._drag_onStart_onEnd_((function(dx,dy){
var bboxCurrent;
return smalltalk.withContext(function($ctx2) {
bboxCurrent=_st(svgElement)._getBBox();
bboxCurrent;
return _st(svgElement)._translate_y_(_st(_st(_st(_st(element)._position())._x()).__minus(_st(bboxCurrent)._x())).__plus(dx),_st(_st(_st(_st(element)._position())._y()).__minus(_st(bboxCurrent)._y())).__plus(dy));
}, function($ctx2) {$ctx2.fillBlock({dx:dx,dy:dy,bboxCurrent:bboxCurrent},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
var bboxAfterDrag;
return smalltalk.withContext(function($ctx2) {
bboxAfterDrag=_st(svgElement)._getBBox();
bboxAfterDrag;
return _st(element)._translateTo_(_st(_st(bboxAfterDrag)._x()).__at(_st(bboxAfterDrag)._y()));
}, function($ctx2) {$ctx2.fillBlock({bboxAfterDrag:bboxAfterDrag},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.RODraggable)})},
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement |\x0a\x09svgElement := element shape svgElement.\x0a\x09svgElement\x09\x0a\x09\x09drag: [ :dx :dy |\x0a\x09\x09\x09| bboxCurrent |\x0a\x09\x09\x09bboxCurrent := svgElement getBBox.\x0a\x09\x09\x09svgElement translate: ((element position x) - (bboxCurrent x) + dx) y: ((element position y) -(bboxCurrent y) + dy).\x0a\x09\x09]\x0a  \x09\x09onStart: [ \x22do nothing\x22]\x0a      \x09onEnd: [ \x0a\x09\x09\x09| bboxAfterDrag | \x0a\x09\x09\x09bboxAfterDrag := svgElement getBBox.\x0a\x09\x09\x09\x22update current position\x22\x0a\x09\x09\x09element translateTo: (bboxAfterDrag x)@(bboxAfterDrag y)\x0a\x09\x09].",
messageSends: ["svgElement", "shape", "drag:onStart:onEnd:", "getBBox", "translate:y:", "+", "-", "x", "position", "y", "translateTo:", "@"],
referencedClasses: []
}),
smalltalk.RODraggable);



smalltalk.addClass('ROPaper', smalltalk.ROObject, ['svgCanvas'], 'ARoassal');
smalltalk.addMethod(
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


smalltalk.addClass('ROShape', smalltalk.ROObject, ['svgElement', 'height', 'width', 'color'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
category: 'drawing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anElement)._activateInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROShape)})},
args: ["anElement"],
source: "activateInteractionsOn: anElement\x0a\x09\x22add interactions to svgElement\x22\x0a\x09anElement activateInteractions.",
messageSends: ["activateInteractions"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeSVGElementOn_for_(canvas,anElement);
self._activateInteractionsOn_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09self initializeSVGElementOn: canvas for: anElement.\x0a\x09self activateInteractionsOn: anElement.",
messageSends: ["initializeSVGElementOn:for:", "activateInteractionsOn:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
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
smalltalk.method({
selector: "initializeSVGElement",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElement",{},smalltalk.ROShape)})},
args: [],
source: "initializeSVGElement\x0a\x09\x22abstract method - Please override it to do what you actually need\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "svgElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgElement",{},smalltalk.ROShape)})},
args: [],
source: "svgElement\x0a\x09^ svgElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
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
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
fn: function (canvas,anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeSVGElementOn_for_(canvas,anEdge);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anEdge:anEdge},smalltalk.ROLineShape)})},
args: ["canvas", "anEdge"],
source: "drawOn: canvas for: anEdge\x0a\x09self initializeSVGElementOn: canvas for: anEdge.",
messageSends: ["initializeSVGElementOn:for:"],
referencedClasses: []
}),
smalltalk.ROLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anEdge){
var self=this;
var x1,y1,x2,y2;
return smalltalk.withContext(function($ctx1) { 
x1=_st(_st(_st(anEdge)._from())._position())._x();
y1=_st(_st(_st(anEdge)._from())._position())._y();
x2=_st(_st(_st(anEdge)._to())._position())._x();
y2=_st(_st(_st(anEdge)._to())._position())._y();
self["@svgElement"]=_st(canvas)._path_(_st(_st(_st(_st(_st(_st("M".__comma(x1)).__comma(" ")).__comma(y1)).__comma("L")).__comma(x2)).__comma(" ")).__comma(y2));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.ROLineShape)})},
args: ["canvas", "anEdge"],
source: "initializeSVGElementOn: canvas for: anEdge\x0a\x09| x1 y1 x2 y2 |\x0a\x09x1 := anEdge from position x.\x0a\x09y1 := anEdge from position y.\x0a\x0a\x09x2 := anEdge to position x.\x0a\x09y2 := anEdge to position y.\x0a\x0a\x09svgElement := canvas path: 'M', x1,' ', y1, 'L', x2, ' ', y2 \x0a\x0a\x22\x09canvas path: 'M10 10L90 90'\x0a\x22",
messageSends: ["x", "position", "from", "y", "to", "path:", ","],
referencedClasses: []
}),
smalltalk.ROLineShape);



smalltalk.addClass('ROBox', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
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
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._rect_y_width_height_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._widthFor_(anElement),self._heightFor_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement:= canvas \x0a\x09\x09rect: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09width: (self widthFor: anElement) \x0a\x09\x09height: (self heightFor: anElement) .",
messageSends: ["rect:y:width:height:", "x", "position", "y", "widthFor:", "heightFor:"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
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
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCircle.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=self._defaultRadius();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09radius := self defaultRadius\x0a\x09",
messageSends: ["initialize", "defaultRadius"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._circle_y_r_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas \x0a\x09\x09circle: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09r: (self radius) .\x0a\x0a\x09",
messageSends: ["circle:y:r:", "x", "position", "y", "radius"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
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



smalltalk.addClass('ROTux', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._path_("M11.791,25.229c1.027-0.104,1.162-1.191,0.68-1.666c-0.398-0.392-2.598-2.022-3.171-2.664C9.033,20.6,8.673,20.454,8.52,20.12c-0.352-0.771-0.598-1.869-0.151-2.658c0.081-0.144,0.133-0.078,0.071,0.22c-0.351,1.684,0.746,3.059,0.986,2.354c0.167-0.487,0.013-1.358,0.102-2.051c0.158-1.226,1.273-3.577,1.763-3.712c-0.755-1.398,0.886-2.494,0.866-3.723c-0.014-0.798,0.701,0.982,1.419,1.359c0.802,0.422,1.684-0.794,2.936-1.41c0.354-0.176,0.809-0.376,0.776-0.524c-0.146-0.718-1.644,0.886-2.979,0.939c-0.61,0.024-0.837-0.12-1.072-0.347c-0.712-0.689,0.073-0.115,1.132-0.307c0.471-0.085,0.629-0.163,1.128-0.365c0.5-0.201,1.069-0.5,1.636-0.654c0.395-0.106,0.361-0.402,0.208-0.491c-0.088-0.051-0.219-0.046-0.321,0.133c-0.244,0.419-1.383,0.661-1.74,0.771c-0.457,0.14-0.962,0.271-1.634,0.243c-1.021-0.042-0.782-0.509-1.513-0.928c-0.213-0.122-0.156-0.444,0.129-0.729c0.148-0.148,0.557-0.232,0.76-0.572c0.028-0.047,0.289-0.32,0.494-0.461c0.07-0.049,0.076-1.295-0.562-1.32c-0.543-0.021-0.697,0.398-0.675,0.818c0.022,0.419,0.245,0.765,0.393,0.764c0.285-0.004,0.019,0.311-0.138,0.361c-0.237,0.078-0.562-0.934-0.525-1.418c0.039-0.506,0.303-1.4,0.942-1.383c0.576,0.016,0.993,0.737,0.973,1.983c-0.003,0.211,0.935-0.101,1.247,0.229c0.224,0.236-0.767-2.207,1.438-2.375c0.582,0.111,1.14,0.305,1.371,1.641c-0.086,0.139,0.146,1.07-0.215,1.182c-0.438,0.135-0.707-0.02-0.453-0.438c0.172-0.418,0.004-1.483-0.882-1.42c-0.887,0.064-0.769,1.637-0.526,1.668c0.243,0.031,0.854,0.465,1.282,0.549c1.401,0.271,0.371,1.075,0.555,2.048c0.205,1.099,0.929,0.809,1.578,3.717c0.137,0.177,0.676,0.345,1.199,2.579c0.473,2.011-0.195,3.473,0.938,3.353c0.256-0.026,0.629-0.1,0.792-0.668c0.425-1.489-0.213-3.263-0.855-4.46c-0.375-0.698-0.729-1.174-0.916-1.337c0.738,0.436,1.683,1.829,1.898,2.862c0.286,1.358,0.49,1.934,0.059,3.37c0.25,0.125,0.871,0.39,0.871,0.685c-0.647-0.53-2.629-0.625-2.68,0.646c-0.338,0.008-0.594,0.034-0.811,0.293c-0.797,0.944-0.059,2.842-0.139,3.859c-0.07,0.896-0.318,1.783-0.46,2.683c-0.474-0.019-0.428-0.364-0.274-0.852c0.135-0.431,0.351-0.968,0.365-1.484c0.012-0.467-0.039-0.759-0.156-0.831c-0.118-0.072-0.303,0.074-0.559,0.485c-0.543,0.875-1.722,1.261-2.821,1.397c-1.099,0.138-2.123,0.028-2.664-0.578c-0.186-0.207-0.492,0.058-0.529,0.111c-0.049,0.074,0.18,0.219,0.352,0.533c0.251,0.461,0.49,1.159-0.105,1.479C12.83,26.314,12.316,26.221,11.791,25.229L11.791,25.229zM11.398,25.188c0.395,0.621,1.783,3.232-0.652,3.571c-0.814,0.114-2.125-0.474-3.396-0.784c-1.142-0.279-2.301-0.444-2.949-0.627c-0.391-0.108-0.554-0.25-0.588-0.414c-0.091-0.434,0.474-1.041,0.503-1.555c0.028-0.514-0.188-0.779-0.364-1.199c-0.177-0.42-0.224-0.734-0.081-0.914c0.109-0.141,0.334-0.199,0.698-0.164c0.462,0.047,1.02-0.049,1.319-0.23c0.505-0.309,0.742-0.939,0.516-1.699c0,0.744-0.244,1.025-0.855,1.366c-0.577,0.319-1.467,0.062-1.875,0.416c-0.492,0.427,0.175,1.528,0.12,2.338c-0.042,0.622-0.69,1.322-0.401,1.946c0.291,0.627,1.648,0.695,3.064,0.99c2.012,0.422,3.184,1.153,4.113,1.188c1.356,0.05,1.564-1.342,3.693-1.36c0.621-0.033,1.229-0.052,1.835-0.06c0.688-0.009,1.375-0.003,2.079,0.014c1.417,0.034,0.931,0.773,1.851,1.246c0.774,0.397,2.17,0.241,2.504-0.077c0.451-0.431,1.662-1.467,2.592-1.935c1.156-0.583,3.876-1.588,1.902-2.812c-0.461-0.285-1.547-0.588-1.639-2.676c-0.412,0.366-0.365,2.312,0.784,2.697c1.283,0.431,2.085,1.152-0.301,1.969c-1.58,0.54-1.849,0.706-3.099,1.747c-1.267,1.054-3.145,0.636-2.815-1.582c0.171-1.155,0.269-2.11-0.019-3.114c-0.142-0.49-0.211-1.119-0.114-1.562c0.187-0.858,0.651-1.117,1.106-0.293c0.285,0.519,0.385,1.122,1.408,1.171c1.607,0.077,1.926-1.553,2.439-1.627c0.343-0.05,0.686-1.02,0.425-2.589c-0.28-1.681-1.269-4.332-2.536-5.677c-1.053-1.118-1.717-2.098-2.135-3.497c-0.352-1.175-0.547-2.318-0.475-3.412c0.094-1.417-0.691-3.389-1.943-4.316c-0.782-0.581-2.011-0.893-3.122-0.88c-0.623,0.007-1.21,0.099-1.661,0.343c-1.855,1.008-2.113,2.445-2.086,4.088c0.025,1.543,0.078,3.303,0.254,4.977c-0.208,0.77-1.288,2.227-1.979,3.114C8.59,14.233,8.121,16.01,7.52,17.561c-0.321,0.828-0.862,1.2-0.908,2.265C6.6,20.122,6.61,20.891,6.894,20.672C7.98,19.829,9.343,21.95,11.398,25.188L11.398,25.188zM17.044,2.953c-0.06,0.176-0.3,0.321-0.146,0.443c0.152,0.123,0.24-0.171,0.549-0.281c0.08-0.028,0.449,0.012,0.519-0.164c0.03-0.077-0.19-0.164-0.321-0.291c-0.133-0.125-0.262-0.236-0.386-0.229C16.938,2.451,17.096,2.798,17.044,2.953L17.044,2.953zM18.934,9.35c0.115-0.121,0.174,0.207,0.483,0.402c0.244,0.154,0.481,0.04,0.545,0.354c0.044,0.225-0.097,0.467-0.284,0.436C19.35,10.486,18.596,9.705,18.934,9.35L18.934,9.35zM13.832,7.375c-0.508-0.037-0.543,0.33-0.375,0.324C13.629,7.693,13.523,7.408,13.832,7.375L13.832,7.375zM12.96,6.436c0.06-0.013,0.146,0.09,0.119,0.233c-0.037,0.199-0.021,0.324,0.117,0.325c0.022,0,0.048-0.005,0.056-0.057c0.066-0.396-0.14-0.688-0.225-0.711C12.834,6.178,12.857,6.458,12.96,6.436L12.96,6.436zM16.663,6.268c0.129,0.039,0.253,0.262,0.28,0.504c0.002,0.021,0.168-0.035,0.17-0.088c0.011-0.389-0.321-0.571-0.408-0.562C16.506,6.139,16.562,6.238,16.663,6.268L16.663,6.268zM14.765,7.423c0.463-0.214,0.625,0.118,0.465,0.171C15.066,7.648,15.065,7.345,14.765,7.423L14.765,7.423zM9.178,15.304c-0.219-0.026,0.063-0.19,0.184-0.397c0.131-0.227,0.105-0.511,0.244-0.469s0.061,0.2-0.033,0.461C9.491,15.121,9.258,15.313,9.178,15.304L9.178,15.304z");
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROTux)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas path:\x0a\x09'M11.791,25.229c1.027-0.104,1.162-1.191,0.68-1.666c-0.398-0.392-2.598-2.022-3.171-2.664C9.033,20.6,8.673,20.454,8.52,20.12c-0.352-0.771-0.598-1.869-0.151-2.658c0.081-0.144,0.133-0.078,0.071,0.22c-0.351,1.684,0.746,3.059,0.986,2.354c0.167-0.487,0.013-1.358,0.102-2.051c0.158-1.226,1.273-3.577,1.763-3.712c-0.755-1.398,0.886-2.494,0.866-3.723c-0.014-0.798,0.701,0.982,1.419,1.359c0.802,0.422,1.684-0.794,2.936-1.41c0.354-0.176,0.809-0.376,0.776-0.524c-0.146-0.718-1.644,0.886-2.979,0.939c-0.61,0.024-0.837-0.12-1.072-0.347c-0.712-0.689,0.073-0.115,1.132-0.307c0.471-0.085,0.629-0.163,1.128-0.365c0.5-0.201,1.069-0.5,1.636-0.654c0.395-0.106,0.361-0.402,0.208-0.491c-0.088-0.051-0.219-0.046-0.321,0.133c-0.244,0.419-1.383,0.661-1.74,0.771c-0.457,0.14-0.962,0.271-1.634,0.243c-1.021-0.042-0.782-0.509-1.513-0.928c-0.213-0.122-0.156-0.444,0.129-0.729c0.148-0.148,0.557-0.232,0.76-0.572c0.028-0.047,0.289-0.32,0.494-0.461c0.07-0.049,0.076-1.295-0.562-1.32c-0.543-0.021-0.697,0.398-0.675,0.818c0.022,0.419,0.245,0.765,0.393,0.764c0.285-0.004,0.019,0.311-0.138,0.361c-0.237,0.078-0.562-0.934-0.525-1.418c0.039-0.506,0.303-1.4,0.942-1.383c0.576,0.016,0.993,0.737,0.973,1.983c-0.003,0.211,0.935-0.101,1.247,0.229c0.224,0.236-0.767-2.207,1.438-2.375c0.582,0.111,1.14,0.305,1.371,1.641c-0.086,0.139,0.146,1.07-0.215,1.182c-0.438,0.135-0.707-0.02-0.453-0.438c0.172-0.418,0.004-1.483-0.882-1.42c-0.887,0.064-0.769,1.637-0.526,1.668c0.243,0.031,0.854,0.465,1.282,0.549c1.401,0.271,0.371,1.075,0.555,2.048c0.205,1.099,0.929,0.809,1.578,3.717c0.137,0.177,0.676,0.345,1.199,2.579c0.473,2.011-0.195,3.473,0.938,3.353c0.256-0.026,0.629-0.1,0.792-0.668c0.425-1.489-0.213-3.263-0.855-4.46c-0.375-0.698-0.729-1.174-0.916-1.337c0.738,0.436,1.683,1.829,1.898,2.862c0.286,1.358,0.49,1.934,0.059,3.37c0.25,0.125,0.871,0.39,0.871,0.685c-0.647-0.53-2.629-0.625-2.68,0.646c-0.338,0.008-0.594,0.034-0.811,0.293c-0.797,0.944-0.059,2.842-0.139,3.859c-0.07,0.896-0.318,1.783-0.46,2.683c-0.474-0.019-0.428-0.364-0.274-0.852c0.135-0.431,0.351-0.968,0.365-1.484c0.012-0.467-0.039-0.759-0.156-0.831c-0.118-0.072-0.303,0.074-0.559,0.485c-0.543,0.875-1.722,1.261-2.821,1.397c-1.099,0.138-2.123,0.028-2.664-0.578c-0.186-0.207-0.492,0.058-0.529,0.111c-0.049,0.074,0.18,0.219,0.352,0.533c0.251,0.461,0.49,1.159-0.105,1.479C12.83,26.314,12.316,26.221,11.791,25.229L11.791,25.229zM11.398,25.188c0.395,0.621,1.783,3.232-0.652,3.571c-0.814,0.114-2.125-0.474-3.396-0.784c-1.142-0.279-2.301-0.444-2.949-0.627c-0.391-0.108-0.554-0.25-0.588-0.414c-0.091-0.434,0.474-1.041,0.503-1.555c0.028-0.514-0.188-0.779-0.364-1.199c-0.177-0.42-0.224-0.734-0.081-0.914c0.109-0.141,0.334-0.199,0.698-0.164c0.462,0.047,1.02-0.049,1.319-0.23c0.505-0.309,0.742-0.939,0.516-1.699c0,0.744-0.244,1.025-0.855,1.366c-0.577,0.319-1.467,0.062-1.875,0.416c-0.492,0.427,0.175,1.528,0.12,2.338c-0.042,0.622-0.69,1.322-0.401,1.946c0.291,0.627,1.648,0.695,3.064,0.99c2.012,0.422,3.184,1.153,4.113,1.188c1.356,0.05,1.564-1.342,3.693-1.36c0.621-0.033,1.229-0.052,1.835-0.06c0.688-0.009,1.375-0.003,2.079,0.014c1.417,0.034,0.931,0.773,1.851,1.246c0.774,0.397,2.17,0.241,2.504-0.077c0.451-0.431,1.662-1.467,2.592-1.935c1.156-0.583,3.876-1.588,1.902-2.812c-0.461-0.285-1.547-0.588-1.639-2.676c-0.412,0.366-0.365,2.312,0.784,2.697c1.283,0.431,2.085,1.152-0.301,1.969c-1.58,0.54-1.849,0.706-3.099,1.747c-1.267,1.054-3.145,0.636-2.815-1.582c0.171-1.155,0.269-2.11-0.019-3.114c-0.142-0.49-0.211-1.119-0.114-1.562c0.187-0.858,0.651-1.117,1.106-0.293c0.285,0.519,0.385,1.122,1.408,1.171c1.607,0.077,1.926-1.553,2.439-1.627c0.343-0.05,0.686-1.02,0.425-2.589c-0.28-1.681-1.269-4.332-2.536-5.677c-1.053-1.118-1.717-2.098-2.135-3.497c-0.352-1.175-0.547-2.318-0.475-3.412c0.094-1.417-0.691-3.389-1.943-4.316c-0.782-0.581-2.011-0.893-3.122-0.88c-0.623,0.007-1.21,0.099-1.661,0.343c-1.855,1.008-2.113,2.445-2.086,4.088c0.025,1.543,0.078,3.303,0.254,4.977c-0.208,0.77-1.288,2.227-1.979,3.114C8.59,14.233,8.121,16.01,7.52,17.561c-0.321,0.828-0.862,1.2-0.908,2.265C6.6,20.122,6.61,20.891,6.894,20.672C7.98,19.829,9.343,21.95,11.398,25.188L11.398,25.188zM17.044,2.953c-0.06,0.176-0.3,0.321-0.146,0.443c0.152,0.123,0.24-0.171,0.549-0.281c0.08-0.028,0.449,0.012,0.519-0.164c0.03-0.077-0.19-0.164-0.321-0.291c-0.133-0.125-0.262-0.236-0.386-0.229C16.938,2.451,17.096,2.798,17.044,2.953L17.044,2.953zM18.934,9.35c0.115-0.121,0.174,0.207,0.483,0.402c0.244,0.154,0.481,0.04,0.545,0.354c0.044,0.225-0.097,0.467-0.284,0.436C19.35,10.486,18.596,9.705,18.934,9.35L18.934,9.35zM13.832,7.375c-0.508-0.037-0.543,0.33-0.375,0.324C13.629,7.693,13.523,7.408,13.832,7.375L13.832,7.375zM12.96,6.436c0.06-0.013,0.146,0.09,0.119,0.233c-0.037,0.199-0.021,0.324,0.117,0.325c0.022,0,0.048-0.005,0.056-0.057c0.066-0.396-0.14-0.688-0.225-0.711C12.834,6.178,12.857,6.458,12.96,6.436L12.96,6.436zM16.663,6.268c0.129,0.039,0.253,0.262,0.28,0.504c0.002,0.021,0.168-0.035,0.17-0.088c0.011-0.389-0.321-0.571-0.408-0.562C16.506,6.139,16.562,6.238,16.663,6.268L16.663,6.268zM14.765,7.423c0.463-0.214,0.625,0.118,0.465,0.171C15.066,7.648,15.065,7.345,14.765,7.423L14.765,7.423zM9.178,15.304c-0.219-0.026,0.063-0.19,0.184-0.397c0.131-0.227,0.105-0.511,0.244-0.469s0.061,0.2-0.033,0.461C9.491,15.121,9.258,15.313,9.178,15.304L9.178,15.304z'",
messageSends: ["path:"],
referencedClasses: []
}),
smalltalk.ROTux);



smalltalk.addClass('ROView', smalltalk.ROObject, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
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

