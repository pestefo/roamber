smalltalk.addPackage('ARoassal-Layout');
smalltalk.addClass('ROLayout', smalltalk.Object, ['translator', 'affectedNodes'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)});},
messageSends: ["executeOnElements:"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._doExecute_(_st(elements)._asOrderedCollection());
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)});},
messageSends: ["doExecute:", "asOrderedCollection"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)});},
messageSends: ["default"]}),
smalltalk.ROLayout);


smalltalk.addMethod(
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


smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "alignTop",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
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
smalltalk.method({
selector: "alignment:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
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



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
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



smalltalk.addClass('ROEdgeDrivenLayout', smalltalk.ROLayout, ['edges', 'userDefinedEdges', 'fromPositions', 'toPositions'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@affectedNodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodes",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@affectedNodes"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"affectedNodes:",{anObject:anObject},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodesOf:",
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
messageSends: ["ifNil:", "nodes"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (aGraphElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{aGraphElement:aGraphElement},smalltalk.ROEdgeDrivenLayout)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doIncrementallyExecute:",
fn: function (anElementNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doExecute_(anElementNode);
return self}, function($ctx1) {$ctx1.fill(self,"doIncrementallyExecute:",{anElementNode:anElementNode},smalltalk.ROEdgeDrivenLayout)})},
messageSends: ["doExecute:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edges"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"edges:",{aCollection:aCollection},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesDo:",
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
messageSends: ["ifNil:", "do:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
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
messageSends: ["ifTrue:ifFalse:", "setEdgesFromElements:", "new", "do:", "addAll:", "add:", "isCollection", "userDefinedEdges", "edges:", "isNil", "executeOnElements:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions",
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
messageSends: ["ifNil:", "defaultFromPositions"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fromPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"fromPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROEdgeDrivenLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@edges"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "setEdgesFromElements:",
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
messageSends: ["ifTrue:", "isEmpty", "view", "anyOne", "edges:", "elementsSuchThat:", "and:", "includes:", "to", "from", "isKindOf:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions",
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
messageSends: ["ifNil:", "defaultToPositions"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"toPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userDefinedEdges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges:",
fn: function (aCollectionOfEdges){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userDefinedEdges"]=aCollectionOfEdges;
return self}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges:",{aCollectionOfEdges:aCollectionOfEdges},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);



smalltalk.addClass('ROAbstractGraphLayout', smalltalk.ROEdgeDrivenLayout, ['verticalGap', 'horizontalGap', 'cachedChildren', 'cachedParents', 'cachedParentsWithHighestNestings'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cachedChildren",
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
messageSends: ["ifNil:", "new:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParents",
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
messageSends: ["ifNil:", "new:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParentsWithHighestNestings",
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
messageSends: ["ifNil:", "new:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
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
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "ifFalse:", "add:", "to", "includes:", "from", "and:", "~=", "==", "cachedChildren"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:except:",
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
messageSends: ["reject:", "includes:", "childrenFor:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenWithHighestNestingLevelFor:",
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
messageSends: ["select:", "==", "highestNestingParentFor:", "childrenFor:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cachedParents"]=nil;
self["@cachedChildren"]=nil;
self["@cachedParentsWithHighestNestings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["bottomCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["topCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractGraphLayout.superclass.fn.prototype._doInitialize_.apply(_st(self), [elements]);
self._clear();
self._greedyCycleRemoval_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROAbstractGraphLayout)})},
messageSends: ["doInitialize:", "clear", "greedyCycleRemoval:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
fn: function (aCollection){
var self=this;
var g,sl,sr,s,indeg,outdeg,degrees,vertex;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
g=_st(_st(aCollection)._copy())._asOrderedCollection();
sl=_st($OrderedCollection())._new();
sr=_st($OrderedCollection())._new();
_st(_st(g)._copy())._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._childrenFor_(node))._isEmpty();
if(smalltalk.assert($1)){
_st(sr)._addFirst_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
_st(_st(g)._copy())._do_((function(node){
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
$4=_st(_st(s)._indexOf_(_st(edge)._source())).__gt(_st(s)._indexOf_(_st(edge)._target()));
if(smalltalk.assert($4)){
return _st(self._edges())._remove_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
};
self._clear();
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aCollection:aCollection,g:g,sl:sl,sr:sr,s:s,indeg:indeg,outdeg:outdeg,degrees:degrees,vertex:vertex},smalltalk.ROAbstractGraphLayout)})},
messageSends: ["asOrderedCollection", "copy", "new", "do:", "ifTrue:", "addFirst:", "remove:", "isEmpty", "childrenFor:", "addLast:", "parentsFor:", "size", "at:put:", "-", "asSortedCollection:", ">=", "at:", "whileFalse:", "detect:ifNone:", "anySatisfy:", "includes:", "first", ",", "edges", ">", "indexOf:", "target", "source", "notNil", "clear"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "highestNestingParentFor:",
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
messageSends: ["at:ifAbsentPut:", "parentsFor:", "ifTrue:ifFalse:", "detectMax:", "nestingLevelFor:", "isEmpty", "cachedParentsWithHighestNestings"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
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
messageSends: ["ifNil:", "horizontalGap", "class"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nestingLevelFor:",
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
messageSends: ["parentsFor:", "collect:", "nestingLevelFor:", "ifTrue:ifFalse:", "+", "max", "isEmpty"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
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
messageSends: ["ifNil:", "userDefinedEdges:", "userDefinedEdges", "applyOn:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "parentsFor:",
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
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "add:", "from", "==", "to", "cachedParents"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rootNodesFor:",
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
messageSends: ["select:", "and:", "isEmpty", "parentsFor:", "isNotEdge"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
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
messageSends: ["ifNil:", "verticalGap", "class"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
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
messageSends: ["userDefinedEdges:", "new", "applyOn:"]}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout.klass);


smalltalk.addClass('ROAbstractRegularTreeLayout', smalltalk.ROAbstractGraphLayout, ['alreadyLayoutedNodes', 'topGap', 'leftGap', 'nodesByLayer', 'isLayered'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "atLayer:add:",
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
messageSends: ["at:ifAbsentPut:", "new", "addAll:"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["new", "rootNodesFor:", "layout:atPoint:atLayer:", "@", "topGap", "leftGap", "ifTrue:", "rearrangeByLayers:", "isLayered"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractRegularTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@topGap"]=(5);
self["@leftGap"]=(5);
self["@isLayered"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isLayered"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLayered",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered:",
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isLayered"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"isLayered:",{boolean:boolean},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layered",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isLayered_(true);
return self}, function($ctx1) {$ctx1.fill(self,"layered",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["isLayered:"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
fn: function (aNodeCollection,aPoint,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,anObject:anObject},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@leftGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@leftGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"leftGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
fn: function (aGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"topGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);



smalltalk.addClass('ROAbstractVerticalTreeLayout', smalltalk.ROAbstractRegularTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractVerticalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(3);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractVerticalTreeLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
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
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "verticalGap", "height", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "width", "-", "/", "translate:to:", "horizontalGap"]}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
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
messageSends: ["topGap", "do:", "inject:into:", "translateTo:", "@", "left", "bounds", "max:", "height", "+", "verticalGap"]}),
smalltalk.ROAbstractVerticalTreeLayout);



smalltalk.addClass('RODominanceTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenWithHighestNestingLevelFor_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RODominanceTreeLayout)})},
messageSends: ["childrenWithHighestNestingLevelFor:"]}),
smalltalk.RODominanceTreeLayout);



smalltalk.addClass('ROTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.ROTreeLayout)})},
messageSends: ["childrenFor:except:"]}),
smalltalk.ROTreeLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal-Layout');
smalltalk.addMethod(
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


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)});},
messageSends: ["translateTo:"]}),
smalltalk.RODirectLayoutTranslator);



