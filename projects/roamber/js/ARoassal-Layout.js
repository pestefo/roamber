smalltalk.addPackage('ARoassal-Layout');
smalltalk.addClass('ROLayout', smalltalk.Object, ['translator', 'affectedNodes'], 'ARoassal-Layout');
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
selector: "doInitialize:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "doInitialize: elements\x0a\x09\x22Method executed before beginning the layout. Useful when the graph to be ordered need to be prepared\x22\x0a\x09\x22self announce: (ROLayoutBegin new elements: elements).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doPost:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doPost:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "doPost: elements\x0a\x09\x22Method executed after performing the layout\x22\x0a\x09\x22self announce: (ROLayoutEnd new elements: elements).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doInitialize_(elements);
self._doExecute_(_st(elements)._asOrderedCollection());
self._doPost_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x09\x09\x0a\x09self doInitialize: elements.\x0a\x09self doExecute: elements asOrderedCollection.\x0a\x09self doPost: elements.",
messageSends: ["doInitialize:", "doExecute:", "asOrderedCollection", "doPost:"],
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


smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal-Layout');
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



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal-Layout');
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
fn: function (elements){
var self=this;
var pointer,delta;
return smalltalk.withContext(function($ctx1) { 
pointer=self._positionOriginalPointer_(elements);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
delta=self._deltaFor_(element);
delta;
_st(self["@translator"])._translate_to_(element,_st(pointer).__minus(delta));
pointer=self._movePointer_accordingToFigure_(pointer,element);
return pointer;
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.ROHorizontalLineLayout)})},
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



smalltalk.addClass('ROEdgeDrivenLayout', smalltalk.ROLayout, ['edges', 'userDefinedEdges', 'fromPositions', 'toPositions'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@affectedNodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodes",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "affectedNodes\x0a\x09\x0a\x09^affectedNodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@affectedNodes"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"affectedNodes:",{anObject:anObject},smalltalk.ROEdgeDrivenLayout)})},
args: ["anObject"],
source: "affectedNodes: anObject\x0a\x09\x0a\x09affectedNodes := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodesOf:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@affectedNodes"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(aNode)._nodes();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodesOf:",{aNode:aNode},smalltalk.ROEdgeDrivenLayout)})},
args: ["aNode"],
source: "affectedNodesOf:  aNode \x0a\x09^ affectedNodes ifNil: [ aNode nodes ]",
messageSends: ["ifNil:", "nodes"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "defaultFromPositions\x0a\x09^ #()\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "defaultToPositions\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (aGraphElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{aGraphElement:aGraphElement},smalltalk.ROEdgeDrivenLayout)})},
args: ["aGraphElement"],
source: "doExecute: aGraphElement\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doIncrementallyExecute:",
category: 'hook',
fn: function (anElementNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doExecute_(anElementNode);
return self}, function($ctx1) {$ctx1.fill(self,"doIncrementallyExecute:",{anElementNode:anElementNode},smalltalk.ROEdgeDrivenLayout)})},
args: ["anElementNode"],
source: "doIncrementallyExecute: anElementNode\x0a\x09\x22called by refreshLayoutEvery: ms. It is used to convey a feeling of incremental execution.\x22\x0a\x09\x0a\x09self doExecute: anElementNode",
messageSends: ["doExecute:"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "edges\x0a\x09\x0a\x09^edges",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edges"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"edges:",{aCollection:aCollection},smalltalk.ROEdgeDrivenLayout)})},
args: ["aCollection"],
source: "edges: aCollection\x0a\x09\x0a\x09edges := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesDo:",
category: 'iterator',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@edges"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@edges"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesDo:",{aBlock:aBlock},smalltalk.ROEdgeDrivenLayout)})},
args: ["aBlock"],
source: "edgesDo: aBlock\x0a\x09\x22Iterates over all the edges of the receiver.\x22\x0a\x09\x0a\x09edges ifNil: [ ^ self ].\x0a\x09edges do: aBlock",
messageSends: ["ifNil:", "do:"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
category: 'hook',
fn: function (elements){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._userDefinedEdges())._isNil();
if(smalltalk.assert($1)){
self._setEdgesFromElements_(elements);
} else {
var flat;
flat=_st($OrderedCollection())._new();
flat;
_st(self._userDefinedEdges())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._isCollection();
if(smalltalk.assert($2)){
return _st(flat)._addAll_(each);
} else {
return _st(flat)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._edges_(flat);
};
smalltalk.ROEdgeDrivenLayout.superclass.fn.prototype._executeOnElements_.apply(_st(self), [elements]);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROEdgeDrivenLayout)})},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x0a\x09self userDefinedEdges isNil \x0a\x09\x09ifTrue: [ self setEdgesFromElements: elements ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ | flat |\x0a\x09\x09\x09flat := OrderedCollection new.\x0a\x09\x09\x09self userDefinedEdges do: \x0a\x09\x09\x09\x09[ :each | \x0a\x09\x09\x09\x09each isCollection \x0a\x09\x09\x09\x09\x09ifTrue: [ flat addAll: each ]\x0a\x09\x09\x09\x09\x09ifFalse: [ flat add: each ] ].\x0a\x09\x09\x09self edges: flat ].\x0a\x09\x09\x0a\x09super executeOnElements: elements",
messageSends: ["ifTrue:ifFalse:", "setEdgesFromElements:", "new", "do:", "addAll:", "add:", "isCollection", "userDefinedEdges", "edges:", "isNil", "executeOnElements:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@fromPositions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@fromPositions"]=self._defaultFromPositions();
$1=self["@fromPositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "fromPositions\x0a\x09\x0a\x09^fromPositions ifNil: [fromPositions := self defaultFromPositions]",
messageSends: ["ifNil:", "defaultFromPositions"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fromPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"fromPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
args: ["anArray"],
source: "fromPositions: anArray\x0a\x09\x0a\x09fromPositions := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROEdgeDrivenLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@edges"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "initialize\x0a\x09\x22Initialization\x22\x0a\x09super initialize.\x0a\x09edges := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "isLineLayout\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "setEdgesFromElements:",
category: 'accessing',
fn: function (elements){
var self=this;
var view;
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(elements)._isEmpty();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
view=_st(_st(elements)._anyOne())._view();
self._edges_(_st(view)._elementsSuchThat_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(el)._isKindOf_($ROEdge()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(elements)._includes_(_st(el)._from());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(elements)._includes_(_st(el)._to());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"setEdgesFromElements:",{elements:elements,view:view},smalltalk.ROEdgeDrivenLayout)})},
args: ["elements"],
source: "setEdgesFromElements: elements \x0a\x09| view |\x0a\x09elements isEmpty ifTrue: [ ^ self ].\x0a\x22\x09self assert: [ (elements collect: #view) asSet size = 1 ].\x22\x0a\x09\x0a\x09elements isEmpty ifTrue: [ ^ self ].\x0a\x09\x0a\x09view := elements anyOne view.\x0a\x09self edges: (view elementsSuchThat: [ :el | ((el isKindOf: ROEdge) and: [ elements includes: el from ]) and: [ elements includes: el to ] ]).\x0a\x09",
messageSends: ["ifTrue:", "isEmpty", "view", "anyOne", "edges:", "elementsSuchThat:", "and:", "includes:", "to", "from", "isKindOf:"],
referencedClasses: ["ROEdge"]
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@toPositions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@toPositions"]=self._defaultToPositions();
$1=self["@toPositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "toPositions\x0a\x09\x0a\x09^toPositions ifNil: [toPositions := self defaultToPositions]",
messageSends: ["ifNil:", "defaultToPositions"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"toPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
args: ["anArray"],
source: "toPositions: anArray\x0a\x09\x0a\x09toPositions := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userDefinedEdges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "userDefinedEdges\x0a\x09\x0a\x09^userDefinedEdges",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges:",
category: 'initialize-release',
fn: function (aCollectionOfEdges){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userDefinedEdges"]=aCollectionOfEdges;
return self}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges:",{aCollectionOfEdges:aCollectionOfEdges},smalltalk.ROEdgeDrivenLayout)})},
args: ["aCollectionOfEdges"],
source: "userDefinedEdges: aCollectionOfEdges\x0a\x09\x22useful to tell to the layout which edges have to be used for the layout\x22\x0a\x0a\x09userDefinedEdges := aCollectionOfEdges.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);



smalltalk.addClass('ROAbstractGraphLayout', smalltalk.ROEdgeDrivenLayout, ['verticalGap', 'horizontalGap', 'cachedChildren', 'cachedParents', 'cachedParentsWithHighestNestings'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cachedChildren",
category: 'private',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedChildren"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedChildren"]=_st($Dictionary())._new_((1000));
self["@cachedChildren"];
} else {
$1;
};
$2=self["@cachedChildren"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedChildren",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "cachedChildren\x0a\x09\x0a\x09cachedChildren ifNil: [cachedChildren := Dictionary new: 1000].\x0a\x09^cachedChildren",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParents",
category: 'private',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedParents"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedParents"]=_st($Dictionary())._new_((1000));
self["@cachedParents"];
} else {
$1;
};
$2=self["@cachedParents"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedParents",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "cachedParents\x0a\x09\x0a\x09cachedParents ifNil: [cachedParents := Dictionary new: 1000].\x0a\x09^cachedParents",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParentsWithHighestNestings",
category: 'private',
fn: function (){
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedParentsWithHighestNestings"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedParentsWithHighestNestings"]=_st($IdentityDictionary())._new_((1000));
self["@cachedParentsWithHighestNestings"];
} else {
$1;
};
$2=self["@cachedParentsWithHighestNestings"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedParentsWithHighestNestings",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "cachedParentsWithHighestNestings\x0a\x09\x0a\x09cachedParentsWithHighestNestings\x0a\x09\x09ifNil: [cachedParentsWithHighestNestings := IdentityDictionary new: 1000].\x0a\x09^cachedParentsWithHighestNestings",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
category: 'private',
fn: function (aNode){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self._cachedChildren())._at_ifAbsentPut_(aNode,(function(){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st($OrderedCollection())._new();
nodes;
self._edgesDo_((function(edge){
return smalltalk.withContext(function($ctx3) {
$2=_st(_st(_st(edge)._from()).__eq_eq(aNode))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(edge)._to()).__tild_eq(aNode);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
if(smalltalk.assert($2)){
$3=_st(nodes)._includes_(_st(edge)._from());
if(! smalltalk.assert($3)){
return _st(nodes)._add_(_st(edge)._to());
};
};
}, function($ctx3) {$ctx3.fillBlock({edge:edge},$ctx2)})}));
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenFor:",{aNode:aNode},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode"],
source: "childrenFor: aNode\x0a\x09\x0a\x09^self cachedChildren\x0a\x09\x09at: aNode\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[| nodes |\x0a\x09\x09\x09nodes := OrderedCollection new.\x0a\x09\x09\x09self edgesDo:\x0a\x09\x09\x09\x09\x09[:edge | \x0a\x09\x09\x09\x09\x09(edge from == aNode and: [edge to ~= aNode])\x0a\x09\x09\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09\x09\x09[(nodes includes: edge from) ifFalse: [nodes add: edge to]]].\x0a\x09\x09\x09nodes]",
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "ifFalse:", "add:", "to", "includes:", "from", "and:", "~=", "==", "cachedChildren"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:except:",
category: 'private',
fn: function (aNode,aNodeCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._childrenFor_(aNode))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aNodeCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenFor:except:",{aNode:aNode,aNodeCollection:aNodeCollection},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode", "aNodeCollection"],
source: "childrenFor: aNode except: aNodeCollection\x0a\x09\x0a\x09^(self childrenFor: aNode) \x0a\x09\x09reject: [:each | aNodeCollection includes: each]\x0a\x09\x0a\x09\x22we are explicitly not using the default Collection>>difference: behavior here because we want to preserve the order of the collection\x22",
messageSends: ["reject:", "includes:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenWithHighestNestingLevelFor:",
category: 'private',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._childrenFor_(aNode))._select_((function(eachChild){
return smalltalk.withContext(function($ctx2) {
return _st(self._highestNestingParentFor_(eachChild)).__eq_eq(aNode);
}, function($ctx2) {$ctx2.fillBlock({eachChild:eachChild},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenWithHighestNestingLevelFor:",{aNode:aNode},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode"],
source: "childrenWithHighestNestingLevelFor: aNode\x0a\x09\x0a\x09^(self childrenFor: aNode)\x0a\x09\x09select: [:eachChild | (self highestNestingParentFor: eachChild) == aNode]",
messageSends: ["select:", "==", "highestNestingParentFor:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cachedParents"]=nil;
self["@cachedChildren"]=nil;
self["@cachedParentsWithHighestNestings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "clear\x0a\x09\x0a\x09cachedParents := nil.\x0a\x09cachedChildren := nil.\x0a\x09cachedParentsWithHighestNestings := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["bottomCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "defaultFromPositions\x0a\x09\x0a\x09^#(#bottomCenter)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["topCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "defaultToPositions\x0a\x09\x0a\x09^#(#topCenter)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
category: 'hooks',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractGraphLayout.superclass.fn.prototype._doInitialize_.apply(_st(self), [elements]);
self._clear();
self._greedyCycleRemoval_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROAbstractGraphLayout)})},
args: ["elements"],
source: "doInitialize: elements \x0a\x09super doInitialize: elements.\x0a\x09self clear.\x0a\x09self greedyCycleRemoval: elements",
messageSends: ["doInitialize:", "clear", "greedyCycleRemoval:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
category: 'battista',
fn: function (aCollection){
var self=this;
var g,sl,sr,s,indeg,outdeg,degrees,vertex,gcopy;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
g=_st(aCollection)._copy();
sl=_st($OrderedCollection())._new();
sr=_st($OrderedCollection())._new();
gcopy=_st(g)._copy();
_st(gcopy)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._childrenFor_(node))._isEmpty();
if(smalltalk.assert($1)){
_st(sr)._addFirst_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
gcopy=nil;
gcopy=_st(g)._copy();
_st(gcopy)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$2=_st(self._parentsFor_(node))._isEmpty();
if(smalltalk.assert($2)){
_st(sl)._addLast_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
degrees=_st($IdentityDictionary())._new();
_st(g)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
indeg=_st(self._parentsFor_(node))._size();
indeg;
outdeg=_st(self._childrenFor_(node))._size();
outdeg;
return _st(degrees)._at_put_(node,_st(outdeg).__minus(indeg));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
g=_st(g)._asSortedCollection_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(degrees)._at_(a)).__gt_eq(_st(degrees)._at_(b));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(g)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
vertex=_st(g)._detect_ifNone_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(self._parentsFor_(v))._anySatisfy_((function(w){
return smalltalk.withContext(function($ctx4) {
return _st(sl)._includes_(w);
}, function($ctx4) {$ctx4.fillBlock({w:w},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(g)._first();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
vertex;
_st(sl)._addLast_(vertex);
return _st(g)._remove_(vertex);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
s=_st(sl).__comma(sr);
$3=_st(self._edges())._notNil();
if(smalltalk.assert($3)){
_st(_st(self._edges())._copy())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {
$4=_st(_st(s)._indexOf_(_st(edge)._from())).__gt(_st(s)._indexOf_(_st(edge)._to()));
if(smalltalk.assert($4)){
return _st(self._edges())._remove_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
};
self._clear();
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aCollection:aCollection,g:g,sl:sl,sr:sr,s:s,indeg:indeg,outdeg:outdeg,degrees:degrees,vertex:vertex,gcopy:gcopy},smalltalk.ROAbstractGraphLayout)})},
args: ["aCollection"],
source: "greedyCycleRemoval: aCollection\x0a\x09\x22Di Battista Greedy-Cycle-Removal algorithm. Chapter 9.4, page 297. The last part is not like in the book. The original algorithm only takes\x0a\x09local optimas into account. This will break ordinary trees sometimes. This version also takes global optimas into account.\x22\x0a\x0a\x09| g sl sr s indeg outdeg degrees vertex gcopy |\x0a\x09g := aCollection copy.\x0a\x09sl := OrderedCollection new.\x0a\x09sr := OrderedCollection new. \x22While g contains a sink (aka leaf)\x22\x0a\x0a\x22 - - - \x22 \x0agcopy := g copy.\x0a\x22 - - - \x22 \x0agcopy \x22g copy\x22\x0ado:\x0a[:node |\x09\x0a(self childrenFor: node) isEmpty\x0aifTrue:\x0a[sr addFirst: node.\x09\x0ag remove: node]\x09].\x09\x22While g contains a source (aka root)\x22\x0a\x22 - - - \x22 \x0agcopy := nil.\x0agcopy := g copy.\x09\x0a\x22 - - - \x22 \x0agcopy \x22g copy\x22\x0ado:\x0a[:node | \x0a(self parentsFor: node) isEmpty\x0aifTrue:\x0a[sl addLast: node.\x0ag remove: node]\x09].\x09\x22Calculate deg for all remaining vertices\x22\x0adegrees := IdentityDictionary new.\x0ag\x0ado:\x0a[:node | \x0aindeg := (self parentsFor: node) size.\x0aoutdeg := (self childrenFor: node) size.\x09\x22indeg := self edges inject: 0 into: [:sum :edge | (edge toFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].\x0aoutdeg := self edges inject: 0 into: [:sum :edge | (edge fromFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].\x22\x0adegrees\x0aat: node\x0aput: outdeg - indeg].\x09\x22While g not empty\x22\x0ag := g asSortedCollection: [:a :b | (degrees at: a) >= (degrees at: b)].\x0a[g isEmpty]\x0awhileFalse:\x0a[vertex := g\x0adetect: [:v | (self parentsFor: v) anySatisfy: [:w | sl includes: w]]\x0aifNone: [g first].\x09\x22Corner case: Closed cycle with not root at all. Eg 1 -> 2 -> 3 -> 1\x22\x0asl addLast: vertex.\x0ag remove: vertex].\x09\x22Remove all leftward edges\x22\x0as := sl , sr.\x0aself edges notNil\x0aifTrue: \x0a[ self edges copy\x0ado:\x0a[:edge | \x0a(s indexOf: edge from) > (s indexOf: edge to)\x0aifTrue: [self edges remove: edge ] ] ].\x09\x0a\x22Reset the cache\x22\x0aself clear",
messageSends: ["copy", "new", "do:", "ifTrue:", "addFirst:", "remove:", "isEmpty", "childrenFor:", "addLast:", "parentsFor:", "size", "at:put:", "-", "asSortedCollection:", ">=", "at:", "whileFalse:", "detect:ifNone:", "anySatisfy:", "includes:", "first", ",", "edges", ">", "indexOf:", "to", "from", "notNil", "clear"],
referencedClasses: ["OrderedCollection", "IdentityDictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "highestNestingParentFor:",
category: 'private',
fn: function (aNodeFigure){
var self=this;
var parents;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._cachedParentsWithHighestNestings())._at_ifAbsentPut_(aNodeFigure,(function(){
return smalltalk.withContext(function($ctx2) {
parents=self._parentsFor_(aNodeFigure);
parents;
$2=_st(parents)._isEmpty();
if(smalltalk.assert($2)){
return (0);
} else {
return _st(parents)._detectMax_((function(eachParent){
return smalltalk.withContext(function($ctx3) {
return self._nestingLevelFor_(eachParent);
}, function($ctx3) {$ctx3.fillBlock({eachParent:eachParent},$ctx2)})}));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highestNestingParentFor:",{aNodeFigure:aNodeFigure,parents:parents},smalltalk.ROAbstractGraphLayout)})},
args: ["aNodeFigure"],
source: "highestNestingParentFor: aNodeFigure\x0a\x09\x0a\x09| parents |\x0a\x09^self cachedParentsWithHighestNestings\x0a\x09\x09at: aNodeFigure\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[parents := self parentsFor: aNodeFigure.\x0a\x09\x09\x09parents isEmpty\x0a\x09\x09\x09\x09ifTrue: [0]\x0a\x09\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09\x09[parents detectMax: [:eachParent | self nestingLevelFor: eachParent]]]",
messageSends: ["at:ifAbsentPut:", "parentsFor:", "ifTrue:ifFalse:", "detectMax:", "nestingLevelFor:", "isEmpty", "cachedParentsWithHighestNestings"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@horizontalGap"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._horizontalGap();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^horizontalGap ifNil: [self class horizontalGap]",
messageSends: ["ifNil:", "horizontalGap", "class"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
args: ["anInteger"],
source: "horizontalGap: anInteger\x0a\x09\x0a\x09horizontalGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nestingLevelFor:",
category: 'private',
fn: function (aNodeFigure){
var self=this;
var parents,parentsNesting;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
parents=self._parentsFor_(aNodeFigure);
parentsNesting=_st(parents)._collect_((function(eachParent){
return smalltalk.withContext(function($ctx2) {
return self._nestingLevelFor_(eachParent);
}, function($ctx2) {$ctx2.fillBlock({eachParent:eachParent},$ctx1)})}));
$2=_st(parentsNesting)._isEmpty();
if(smalltalk.assert($2)){
$1=(0);
} else {
$1=_st(_st(parentsNesting)._max()).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nestingLevelFor:",{aNodeFigure:aNodeFigure,parents:parents,parentsNesting:parentsNesting},smalltalk.ROAbstractGraphLayout)})},
args: ["aNodeFigure"],
source: "nestingLevelFor: aNodeFigure\x0a\x09\x0a\x09| parents parentsNesting |\x0a\x09parents := self parentsFor: aNodeFigure.\x0a\x09parentsNesting := parents\x0a\x09\x09collect: [:eachParent | self nestingLevelFor: eachParent].\x0a\x09^parentsNesting isEmpty\x0a\x09\x09ifTrue: [0]\x0a\x09\x09ifFalse: [parentsNesting max + 1]",
messageSends: ["parentsFor:", "collect:", "nestingLevelFor:", "ifTrue:ifFalse:", "+", "max", "isEmpty"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'actions',
fn: function (el,edgs){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._userDefinedEdges();
if(($receiver = $1) == nil || $receiver == undefined){
self._userDefinedEdges_(edgs);
} else {
$1;
};
$2=self._applyOn_(el);
return $2;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{el:el,edgs:edgs},smalltalk.ROAbstractGraphLayout)})},
args: ["el", "edgs"],
source: "on: el edges: edgs\x0a\x09\x22Do the layout of the elements tacking into account the provided edges\x22\x0a\x0a\x09self userDefinedEdges ifNil: [ self userDefinedEdges: edgs ].\x0a\x0a\x09^ self applyOn: el.",
messageSends: ["ifNil:", "userDefinedEdges:", "userDefinedEdges", "applyOn:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "parentsFor:",
category: 'private',
fn: function (aNode){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._cachedParents())._at_ifAbsentPut_(aNode,(function(){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st($OrderedCollection())._new();
nodes;
self._edgesDo_((function(edge){
return smalltalk.withContext(function($ctx3) {
$2=_st(_st(edge)._to()).__eq_eq(aNode);
if(smalltalk.assert($2)){
return _st(nodes)._add_(_st(edge)._from());
};
}, function($ctx3) {$ctx3.fillBlock({edge:edge},$ctx2)})}));
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentsFor:",{aNode:aNode},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode"],
source: "parentsFor: aNode\x0a\x09^ self cachedParents\x0a\x09\x09at: aNode\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[ | nodes |\x0a\x09\x09\x09nodes := OrderedCollection new.\x0a\x09\x09\x09self edgesDo:\x0a\x09\x09\x09\x09\x09[:edge | edge to == aNode ifTrue: [ nodes add: edge from ] ].\x0a\x09\x09\x09nodes ]",
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "add:", "from", "==", "to", "cachedParents"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rootNodesFor:",
category: 'private',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(node){
return smalltalk.withContext(function($ctx2) {
return _st(_st(node)._isNotEdge())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._parentsFor_(node))._isEmpty();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootNodesFor:",{aCollection:aCollection},smalltalk.ROAbstractGraphLayout)})},
args: ["aCollection"],
source: "rootNodesFor: aCollection\x0a\x09^ aCollection select: [:node | \x0a\x09\x09node isNotEdge and: \x0a\x09\x09\x09[ (self parentsFor: node) isEmpty ] ].\x0a\x09",
messageSends: ["select:", "and:", "isEmpty", "parentsFor:", "isNotEdge"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@verticalGap"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._verticalGap();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^verticalGap ifNil: [self class verticalGap]",
messageSends: ["ifNil:", "verticalGap", "class"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
args: ["anInteger"],
source: "verticalGap: anInteger\x0a\x09\x0a\x09verticalGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^3",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'public',
fn: function (elements,edges){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._userDefinedEdges_(edges);
$3=_st($2)._applyOn_(elements);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.ROAbstractGraphLayout.klass)})},
args: ["elements", "edges"],
source: "on: elements edges: edges\x0a\x09\x22Do the layout of the elements tacking into account the provided edges\x22\x0a\x0a\x09^ self new \x0a\x09\x09userDefinedEdges: edges;\x0a\x09\x09applyOn: elements.",
messageSends: ["userDefinedEdges:", "new", "applyOn:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^20",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout.klass);


smalltalk.addClass('ROAbstractRegularTreeLayout', smalltalk.ROAbstractGraphLayout, ['alreadyLayoutedNodes', 'topGap', 'leftGap', 'nodesByLayer', 'isLayered'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "atLayer:add:",
category: 'private',
fn: function (aNumber,aNodeCollection){
var self=this;
var collection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
collection=_st(self["@nodesByLayer"])._at_ifAbsentPut_(aNumber,(function(){
return smalltalk.withContext(function($ctx2) {
return _st($OrderedCollection())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(collection)._addAll_(aNodeCollection);
return self}, function($ctx1) {$ctx1.fill(self,"atLayer:add:",{aNumber:aNumber,aNodeCollection:aNodeCollection,collection:collection},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["aNumber", "aNodeCollection"],
source: "atLayer: aNumber add: aNodeCollection\x0a\x09| collection |\x0a\x09collection := nodesByLayer at: aNumber ifAbsentPut: [OrderedCollection new].\x0a\x09collection addAll: aNodeCollection",
messageSends: ["at:ifAbsentPut:", "new", "addAll:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (elements){
var self=this;
var rootNodes;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@alreadyLayoutedNodes"]=_st($OrderedCollection())._new();
rootNodes=self._rootNodesFor_(elements);
self["@nodesByLayer"]=_st($OrderedCollection())._new();
self._layout_atPoint_atLayer_(rootNodes,_st(self._leftGap()).__at(self._topGap()),(1));
$1=self._isLayered();
if(smalltalk.assert($1)){
self._rearrangeByLayers_(elements);
};
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,rootNodes:rootNodes},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["elements"],
source: "doExecute: elements\x0a\x09| rootNodes |\x0a\x09alreadyLayoutedNodes := OrderedCollection new.\x0a\x09rootNodes := self rootNodesFor: elements.\x0a\x09nodesByLayer := OrderedCollection new.\x0a\x09self\x0a\x09\x09layout: rootNodes\x0a\x09\x09atPoint: self leftGap @ self topGap\x0a\x09\x09atLayer: 1.\x0a\x09self isLayered ifTrue: [\x0a\x09\x09self rearrangeByLayers: elements ]",
messageSends: ["new", "rootNodesFor:", "layout:atPoint:atLayer:", "@", "topGap", "leftGap", "ifTrue:", "rearrangeByLayers:", "isLayered"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractRegularTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@topGap"]=(5);
self["@leftGap"]=(5);
self["@isLayered"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09topGap := 5.\x0a\x09leftGap := 5.\x0a\x09isLayered := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isLayered"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLayered",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "isLayered\x0a\x09\x22Is the layout layered\x22\x0a\x09\x0a\x09^ isLayered",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered:",
category: 'accessing',
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isLayered"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"isLayered:",{boolean:boolean},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["boolean"],
source: "isLayered: boolean\x0a\x09\x22Is the layout layered\x22\x0a\x09\x0a\x09isLayered := boolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layered",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isLayered_(true);
return self}, function($ctx1) {$ctx1.fill(self,"layered",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "layered\x0a\x09self isLayered: true",
messageSends: ["isLayered:"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
fn: function (aNodeCollection,aPoint,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,anObject:anObject},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["aNodeCollection", "aPoint", "anObject"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@leftGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "leftGap\x0a\x09^ leftGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@leftGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"leftGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["anInteger"],
source: "leftGap: anInteger\x0a\x09leftGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
fn: function (aGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "topGap\x0a\x09^ topGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"topGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["anInteger"],
source: "topGap: anInteger\x0a\x09topGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);



smalltalk.addClass('ROAbstractVerticalTreeLayout', smalltalk.ROAbstractRegularTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractVerticalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(3);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractVerticalTreeLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09verticalGap := 20.\x0a\x09horizontalGap := 3",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
fn: function (aNodeCollection,aPoint,aNumber){
var self=this;
var treeSize,childrenPosition,x,y,middleOfTree;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aNodeCollection)._isEmpty();
if(smalltalk.assert($1)){
return (0);
};
x=_st(aPoint)._x();
y=_st(aPoint)._y();
_st(self["@alreadyLayoutedNodes"])._addAll_(aNodeCollection);
self._atLayer_add_(aNumber,aNodeCollection);
_st(aNodeCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
childrenPosition=_st(_st(y).__plus(_st(each)._height())).__plus(self._verticalGap());
childrenPosition;
treeSize=_st(_st(each)._width())._max_(self._layout_atPoint_atLayer_(self._computeChildrenFor_(each),_st(x).__at(childrenPosition),_st(aNumber).__plus((1))));
treeSize;
middleOfTree=_st(_st(x).__plus(_st(treeSize).__slash((2)))).__minus(_st(_st(each)._width()).__slash((2)));
middleOfTree;
_st(self["@translator"])._translate_to_(each,_st(middleOfTree).__at(y));
x=_st(_st(x).__plus(treeSize)).__plus(self._horizontalGap());
return x;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(x).__minus(_st(aPoint)._x())).__minus(self._horizontalGap());
return $2;
}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,aNumber:aNumber,treeSize:treeSize,childrenPosition:childrenPosition,x:x,y:y,middleOfTree:middleOfTree},smalltalk.ROAbstractVerticalTreeLayout)})},
args: ["aNodeCollection", "aPoint", "aNumber"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: aNumber\x0a\x09| treeSize childrenPosition x y middleOfTree |\x0a\x09aNodeCollection isEmpty ifTrue: [ ^ 0 ].\x0a\x09x := aPoint x.\x0a\x09y := aPoint y.\x0a\x09alreadyLayoutedNodes addAll: aNodeCollection.\x0a\x09self atLayer: aNumber add: aNodeCollection.\x0a\x09aNodeCollection do: [ :each | \x0a\x09\x09childrenPosition := y + each height + self verticalGap.\x0a\x09\x09treeSize := each width\x0a\x09\x09\x09max: (self layout: (self computeChildrenFor: each) atPoint: x @ childrenPosition atLayer: aNumber + 1).\x0a\x09\x09middleOfTree := x + (treeSize / 2.0) - (each width / 2.0).\x0a\x09\x09translator translate: each to: middleOfTree @ y.\x0a\x09\x09x := x + treeSize + self horizontalGap.\x0a\x09\x09\x22self step\x22 ].\x0a\x09^ x - aPoint x - self horizontalGap",
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "verticalGap", "height", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "width", "-", "/", "translate:to:", "horizontalGap"],
referencedClasses: []
}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
fn: function (aGraph){
var self=this;
var cursor,layerDepthSize;
return smalltalk.withContext(function($ctx1) { 
cursor=self._topGap();
_st(self["@nodesByLayer"])._do_((function(eachSetOfNodes){
return smalltalk.withContext(function($ctx2) {
layerDepthSize=_st(eachSetOfNodes)._inject_into_((0),(function(max,eachNode){
return smalltalk.withContext(function($ctx3) {
_st(eachNode)._translateTo_(_st(_st(_st(eachNode)._bounds())._left()).__at(cursor));
return _st(max)._max_(_st(eachNode)._height());
}, function($ctx3) {$ctx3.fillBlock({max:max,eachNode:eachNode},$ctx2)})}));
layerDepthSize;
cursor=_st(_st(cursor).__plus(layerDepthSize)).__plus(self._verticalGap());
return cursor;
}, function($ctx2) {$ctx2.fillBlock({eachSetOfNodes:eachSetOfNodes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph,cursor:cursor,layerDepthSize:layerDepthSize},smalltalk.ROAbstractVerticalTreeLayout)})},
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09| cursor layerDepthSize |\x0a\x09cursor := self topGap.\x0a\x09nodesByLayer do: [:eachSetOfNodes |\x0a\x09\x09layerDepthSize := eachSetOfNodes inject: 0 into: [:max :eachNode | \x0a\x09\x09\x09eachNode translateTo: (eachNode bounds left @ cursor ).\x0a\x09\x09\x09max max: eachNode height ].\x0a\x09\x09cursor := cursor + layerDepthSize + self verticalGap ]",
messageSends: ["topGap", "do:", "inject:into:", "translateTo:", "@", "left", "bounds", "max:", "height", "+", "verticalGap"],
referencedClasses: []
}),
smalltalk.ROAbstractVerticalTreeLayout);



smalltalk.addClass('RODominanceTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenWithHighestNestingLevelFor_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RODominanceTreeLayout)})},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09^ self childrenWithHighestNestingLevelFor: aNode",
messageSends: ["childrenWithHighestNestingLevelFor:"],
referencedClasses: []
}),
smalltalk.RODominanceTreeLayout);



smalltalk.addClass('ROTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.ROTreeLayout)})},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09^ self childrenFor: aNode except: alreadyLayoutedNodes",
messageSends: ["childrenFor:except:"],
referencedClasses: []
}),
smalltalk.ROTreeLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal-Layout');
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


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal-Layout');
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



