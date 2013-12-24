smalltalk.addPackage('RelationalTowersBuilder');
smalltalk.addClass('ROLeftBorderAttachPoint', smalltalk.ROAttachPoint, [], 'RelationalTowersBuilder');
smalltalk.ROLeftBorderAttachPoint.comment="A ROLeftBorderAttachPoint is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'as yet unclassified',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus(_st(_st(_st(_st(anEdge)._to())._bounds())._width()).__at(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROLeftBorderAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^  (anEdge to absolutePosition) + ((anEdge to bounds width) @ ((anEdge to bounds height / 2 ) asInteger))",
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "to", "width", "absolutePosition"],
referencedClasses: []
}),
smalltalk.ROLeftBorderAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'as yet unclassified',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROLeftBorderAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^  (anEdge from absolutePosition) + (0 @ ((anEdge from bounds height / 2) asInteger))",
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "from", "absolutePosition"],
referencedClasses: []
}),
smalltalk.ROLeftBorderAttachPoint);



smalltalk.addClass('RORightBorderAttachPoint', smalltalk.ROAttachPoint, [], 'RelationalTowersBuilder');
smalltalk.RORightBorderAttachPoint.comment="A RORightBorderAttachPoint is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.RORightBorderAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^  (anEdge to absolutePosition) + (0 @  ((anEdge to bounds height / 2) asInteger))",
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "to", "absolutePosition"],
referencedClasses: []
}),
smalltalk.RORightBorderAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._absolutePosition()).__plus(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._width())._asInteger()).__at(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.RORightBorderAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ (anEdge from absolutePosition) + ((anEdge from bounds width) asInteger @ ((anEdge from bounds height / 2 ) asInteger))",
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "from", "width", "absolutePosition"],
referencedClasses: []
}),
smalltalk.RORightBorderAttachPoint);



smalltalk.addClass('ROVerticalDraggable', smalltalk.RODraggable, [], 'RelationalTowersBuilder');
smalltalk.ROVerticalDraggable.comment="A ROVerticalDraggable is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
return smalltalk.withContext(function($ctx1) { 
_st(element)._on_do_($ROMouseDragging(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(element)._translateByRealPoint_((0).__at(_st(_st(event)._step())._y()));
return _st(element)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROVerticalDraggable)})},
args: ["element"],
source: "initializeElement: element\x0a\x09 element on: ROMouseDragging do: [ :event | \x09\x09\x09\x0a\x09\x09\x09element translateByRealPoint: (0 @ event step y).\x0a\x09\x09\x09element signalUpdate ]",
messageSends: ["on:do:", "translateByRealPoint:", "@", "y", "step", "signalUpdate"],
referencedClasses: ["ROMouseDragging"]
}),
smalltalk.ROVerticalDraggable);



smalltalk.addClass('RelationalTowersBuilder', smalltalk.Object, ['view', 'models', 'title', 'legend', 'left', 'right', 'labelLeft', 'labelRight', 'colorLeft', 'colorRight', 'viewWidth', 'distance', 'direction', 'popups', 'popupElement', 'edges', 'shadowEdges', 'height', 'width'], 'RelationalTowersBuilder');
smalltalk.RelationalTowersBuilder.comment="A RelationalTowersBuilder is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09colorLeft:\x09\x09<Object>\x0a\x09colorRight:\x09\x09<Object>\x0a\x09direction:\x09\x09<Object>\x0a\x09distance:\x09\x09<Object>\x0a\x09height:\x09\x09<Object>\x0a\x09labelLeft:\x09\x09<Object>\x0a\x09labelRight:\x09\x09<Object>\x0a\x09left:\x09\x09<Object>\x0a\x09legend:\x09\x09<Object>\x0a\x09models:\x09\x09<Object>\x0a\x09popupElement:\x09\x09<Object>\x0a\x09popups:\x09\x09<Object>\x0a\x09right:\x09\x09<Object>\x0a\x09title:\x09\x09<Object>\x0a\x09view:\x09\x09<Object>\x0a\x09viewWidth:\x09\x09<Object>\x0a\x09width:\x09\x09<Object>\x0a\x0acolorLeft\x0a\x09- xxxxx\x0a\x0acolorRight\x0a\x09- xxxxx\x0a\x0adirection\x0a\x09- xxxxx\x0a\x0adistance\x0a\x09- xxxxx\x0a\x0aheight\x0a\x09- xxxxx\x0a\x0alabelLeft\x0a\x09- xxxxx\x0a\x0alabelRight\x0a\x09- xxxxx\x0a\x0aleft\x0a\x09- xxxxx\x0a\x0alegend\x0a\x09- xxxxx\x0a\x0amodels\x0a\x09- xxxxx\x0a\x0apopupElement\x0a\x09- xxxxx\x0a\x0apopups\x0a\x09- xxxxx\x0a\x0aright\x0a\x09- xxxxx\x0a\x0atitle\x0a\x09- xxxxx\x0a\x0aview\x0a\x09- xxxxx\x0a\x0aviewWidth\x0a\x09- xxxxx\x0a\x0awidth\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addLinesfrom:toAll:from:color:",
category: 'edge-management',
fn: function (aNode,aCollection,anotherCollection,aColor){
var self=this;
var at,ce1,ce2,ce3,ce4,p1,p2,p3,p4,lines;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $RORightBorderAttachPoint(){return smalltalk.RORightBorderAttachPoint||(typeof RORightBorderAttachPoint=="undefined"?nil:RORightBorderAttachPoint)}
function $ROLeftBorderAttachPoint(){return smalltalk.ROLeftBorderAttachPoint||(typeof ROLeftBorderAttachPoint=="undefined"?nil:ROLeftBorderAttachPoint)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
lines=_st($OrderedCollection())._new();
$1=_st(anotherCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
at=_st($RORightBorderAttachPoint())._instance();
at;
} else {
at=_st($ROLeftBorderAttachPoint())._instance();
at;
};
p3=self._controlPointStart_from_(aNode,anotherCollection);
ce3=self._controlElement_(p3);
_st(aCollection)._do_((function(l){
var ed;
return smalltalk.withContext(function($ctx2) {
p2=self._controlPointEnd_from_(l,anotherCollection);
p2;
ce2=self._controlElement_(p2);
ce2;
ed=_st(_st($ROEdge())._from_to_(aNode,l)).__plus(self._splineLine_with_with_with_with_color_(at,nil,ce2,ce3,nil,aColor));
ed;
_st(lines)._add_(ed);
return _st(self["@view"])._add_(ed);
}, function($ctx2) {$ctx2.fillBlock({l:l,ed:ed},$ctx1)})}));
_st(self._view())._signalUpdate();
$2=lines;
return $2;
}, function($ctx1) {$ctx1.fill(self,"addLinesfrom:toAll:from:color:",{aNode:aNode,aCollection:aCollection,anotherCollection:anotherCollection,aColor:aColor,at:at,ce1:ce1,ce2:ce2,ce3:ce3,ce4:ce4,p1:p1,p2:p2,p3:p3,p4:p4,lines:lines},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection", "anotherCollection", "aColor"],
source: "addLinesfrom: aNode toAll: aCollection from: anotherCollection color: aColor\x0a\x09| at ce1 ce2 ce3 ce4 p1 p2 p3 p4 lines |\x0a\x09lines := OrderedCollection new.\x0a\x09anotherCollection = left\x0a\x09\x09ifTrue: [ at := RORightBorderAttachPoint instance ]\x0a\x09\x09ifFalse: [ at := ROLeftBorderAttachPoint instance ].\x0a\x09p3 := self controlPointStart: aNode from: anotherCollection.\x0a\x09ce3 := self controlElement: p3.\x0a\x09aCollection\x0a\x09\x09do: [ :l | | ed |\x0a\x09\x09\x09p2 := self controlPointEnd: l from: anotherCollection.\x0a\x09\x09\x09\x22p1 := self companion: p3 with: p2.\x0a\x09\x09\x09p4 := self companion: p2 with: p3.\x22\x0a\x09\x09\x09\x22ce1 := self controlElement: p1.\x22\x0a\x09\x09\x09ce2 := self controlElement: p2.\x0a\x09\x09\x09\x22ce4 := self controlElement: p4.\x22\x0a\x09\x09\x09ed := (ROEdge from: aNode to: l) + (self splineLine: at\x09with: nil\x22ce1\x22 with: ce2\x09with: ce3 with:  nil\x22ce4\x22 color: aColor).\x09\x0a\x09\x09\x09lines add: ed.\x0a\x09\x09\x09view add: ed ].\x0a\x09self view signalUpdate.\x0a\x09^lines",
messageSends: ["new", "ifTrue:ifFalse:", "instance", "=", "controlPointStart:from:", "controlElement:", "do:", "controlPointEnd:from:", "+", "splineLine:with:with:with:with:color:", "from:to:", "add:", "signalUpdate", "view"],
referencedClasses: ["OrderedCollection", "RORightBorderAttachPoint", "ROLeftBorderAttachPoint", "ROEdge"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addPopup:from:",
category: 'shape-managment',
fn: function (element,aCollection){
var self=this;
var pop;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(element)._allEdgesFrom())._isEmpty();
if(! smalltalk.assert($1)){
_st(self["@popups"])._at_ifPresent_ifAbsent_((0),(function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._show();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
pop=_st(self._popupElement())._value_(element);
pop;
_st(self["@popups"])._at_put_(element,pop);
_st(self._view())._add_(pop);
self._stickTop_on_from_(pop,element,aCollection);
$2=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($2)){
return _st(pop)._translateBy_(_st((5)._negated()).__at((0)));
} else {
return _st(pop)._translateBy_((5).__at((0)));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"addPopup:from:",{element:element,aCollection:aCollection,pop:pop},smalltalk.RelationalTowersBuilder)})},
args: ["element", "aCollection"],
source: "addPopup: element from: aCollection\x0a\x09| pop |\x0a\x09element allEdgesFrom isEmpty \x0a\x09\x09ifFalse: [  \x0a\x09\x09\x09popups \x0a\x09\x09\x09\x09at: 0 \x0a\x09\x09\x09\x09ifPresent: [ :e | e show]\x0a\x09\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09\x09pop := self popupElement value: element.\x09\x0a\x09\x09\x09\x09\x09popups at: element put:pop.\x0a\x09\x09\x09\x09\x09self view add: pop.\x0a\x09\x09\x09\x09\x09self stickTop: pop on: element from: aCollection.\x0a\x09\x09\x09\x09\x09(aCollection = left)\x0a\x09\x09\x09\x09\x09\x09ifTrue:  [ pop translateBy: (5 negated) @ 0]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ pop translateBy: 5 @ 0]]].",
messageSends: ["ifFalse:", "at:ifPresent:ifAbsent:", "show", "value:", "popupElement", "at:put:", "add:", "view", "stickTop:on:from:", "ifTrue:ifFalse:", "translateBy:", "@", "negated", "=", "isEmpty", "allEdgesFrom"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "assignMissing:from:",
category: 'relations',
fn: function (aBlock,aCollection){
var self=this;
var values,aux,otherCollection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
otherCollection=self["@right"];
otherCollection;
} else {
otherCollection=self["@left"];
otherCollection;
};
values=_st($OrderedCollection())._new();
aux=_st(aCollection)._collect_((function(l){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aBlock)._value_(_st(l)._model()))._asOrderedCollection();
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1)})}));
_st(aux)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(values)._addAll_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(values)._removeDuplicates();
$2=_st(otherCollection).__eq(self["@left"]);
if(smalltalk.assert($2)){
self["@left"]=self._from_in_(values,"left");
self["@left"];
} else {
self["@right"]=self._from_in_(values,"right");
self["@right"];
};
return self}, function($ctx1) {$ctx1.fill(self,"assignMissing:from:",{aBlock:aBlock,aCollection:aCollection,values:values,aux:aux,otherCollection:otherCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "aCollection"],
source: "assignMissing: aBlock from: aCollection\x0a\x09| values aux otherCollection |\x0a\x09aCollection = left\x0a\x09\x09ifTrue: [ otherCollection := right ]\x0a\x09\x09ifFalse:[ otherCollection := left ].\x0a\x09values := OrderedCollection new.\x0a\x09aux := aCollection collect: [ :l | (aBlock value: l model) asOrderedCollection ].\x0a\x09aux do: [ :e | values addAll: e ].\x0a\x09values removeDuplicates.\x0a\x09otherCollection = left\x0a\x09\x09ifTrue: [ left := (self from: values in: 'left') ]\x0a\x09\x09ifFalse:[ right := (self from: values in: 'right')].",
messageSends: ["ifTrue:ifFalse:", "=", "new", "collect:", "asOrderedCollection", "value:", "model", "do:", "addAll:", "removeDuplicates", "from:in:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "blueLines:in:to:",
category: 'edge-management',
fn: function (aNode,aCollection,links){
var self=this;
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aNode)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self["@edges"])._at_ifPresent_ifAbsent_(aNode,(function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(_st(_st(self["@edges"])._at_(aNode))._first())._shape())._isHidden();
if(smalltalk.assert($1)){
_st(_st(self["@edges"])._at_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._shape())._show();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
} else {
_st(_st(self["@edges"])._at_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._shape())._hide();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
self._removePopup_(aNode);
};
return _st(self._view())._signalUpdate();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
_st(self["@edges"])._at_put_(aNode,self._addLinesfrom_toAll_from_color_(aNode,links,aCollection,_st($Color())._blue()));
return self._addPopup_from_(aNode,aCollection);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"blueLines:in:to:",{aNode:aNode,aCollection:aCollection,links:links},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection", "links"],
source: "blueLines: aNode in: aCollection to: links \x22cache: prompLinks\x22\x0a\x09aNode\x0a\x09\x09on: ROMouseClick\x0a\x09\x09do: [ :event | \x0a\x09\x09\x09edges at: aNode\x09\x09\x0a\x09\x09\x09\x09ifPresent: [\x0a\x09\x09\x09\x09\x09((edges at: aNode) first shape isHidden)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ (edges at: aNode) do: [ :e | e shape show]]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [(edges at: aNode) do: [ :e | e shape hide].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self removePopup: aNode.].\x0a\x09\x09\x09\x09\x09self view signalUpdate]\x0a\x09\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09\x09edges at: aNode put: \x0a\x09\x09\x09\x09\x09(self\x0a\x09\x09\x09\x09\x09\x09addLinesfrom: aNode\x0a\x09\x09\x09\x09\x09\x09toAll: links\x0a\x09\x09\x09\x09\x09\x09from: aCollection\x0a\x09\x09\x09\x09\x09\x09color: Color blue).\x0a\x09\x09\x09\x09\x09self addPopup: aNode from: aCollection] ]",
messageSends: ["on:do:", "at:ifPresent:ifAbsent:", "ifTrue:ifFalse:", "do:", "show", "shape", "at:", "hide", "removePopup:", "isHidden", "first", "signalUpdate", "view", "at:put:", "addLinesfrom:toAll:from:color:", "blue", "addPopup:from:"],
referencedClasses: ["ROMouseClick", "Color"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "check:from:to:",
category: 'edge-management',
fn: function (aBlock,s,f){
var self=this;
var v,r;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(aBlock)._numArgs()).__eq((2));
if(smalltalk.assert($1)){
r=_st(aBlock)._value_value_(s,f);
r;
} else {
v=_st(_st(aBlock)._value_(s)).__eq(f);
v;
$2=_st(_st(aBlock)._value_(s))._isCollection();
if(smalltalk.assert($2)){
r=_st(_st(aBlock)._value_(s))._includes_(f);
r;
} else {
r=_st(_st(aBlock)._value_(s)).__eq(f);
r;
};
};
$3=r;
return $3;
}, function($ctx1) {$ctx1.fill(self,"check:from:to:",{aBlock:aBlock,s:s,f:f,v:v,r:r},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "s", "f"],
source: "check: aBlock from: s to: f\x0a       | v r|\x0a\x09   (aBlock numArgs = 2)\x0a\x09       ifTrue: [r := (aBlock value: s value: f)]\x0a\x09   \x09   ifFalse: [\x0a\x09\x09\x09   v := ((aBlock value: s) = f).\x0a\x09\x09\x09   (aBlock value: s) isCollection\x0a\x09\x09\x09   \x09\x09ifTrue: [r := (aBlock value: s) includes: f]\x0a\x09\x09\x09\x09\x09ifFalse: [r := ((aBlock value: s) = f)]].\x0a       ^r",
messageSends: ["ifTrue:ifFalse:", "value:value:", "=", "value:", "includes:", "isCollection", "numArgs"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "color\x0a\x09^color",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._colorLeft_(aColor);
self._colorRight_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.RelationalTowersBuilder)})},
args: ["aColor"],
source: "color: aColor\x0a\x09self colorLeft: aColor.\x0a\x09self colorRight: aColor",
messageSends: ["colorLeft:", "colorRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorLeft",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorLeft",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "colorLeft\x0a\x09^colorLeft",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorLeft:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colorLeft"]=aMessage;
$1=self["@colorLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorLeft:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
args: ["aMessage"],
source: "colorLeft: aMessage\x0a\x09^colorLeft := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorRight",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "colorRight\x0a\x09^colorRight",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRight:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colorRight"]=aMessage;
$1=self["@colorRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorRight:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
args: ["aMessage"],
source: "colorRight: aMessage\x0a\x09^colorRight := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "companion:with:",
category: 'edge-management',
fn: function (aPoint,anotherPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$1;
$2=_st(_st(aPoint)._x()).__lt(_st(anotherPoint)._x());
if(smalltalk.assert($2)){
$3=_st(_st(_st(aPoint)._y()).__minus(_st(anotherPoint)._y())).__gt((150));
if(smalltalk.assert($3)){
$1=_st(aPoint).__plus(_st(_st(_st(self["@distance"]).__slash((12)))._negated()).__at(_st(self["@distance"]).__slash((12))));
} else {
$4=_st(_st(_st(aPoint)._y()).__minus(_st(anotherPoint)._y())).__lt((150)._negated());
if(smalltalk.assert($4)){
$1=_st(aPoint).__plus(_st(_st(self["@distance"]).__slash((12))).__at(_st(self["@distance"]).__slash((12)._negated())));
} else {
$1=aPoint;
};
};
} else {
$5=_st(_st(_st(aPoint)._y()).__minus(_st(anotherPoint)._y())).__gt((150));
if(smalltalk.assert($5)){
$1=_st(aPoint).__plus(_st(_st(self["@distance"]).__slash((12))).__at(_st(self["@distance"]).__slash((12))));
} else {
$6=_st(_st(_st(aPoint)._y()).__minus(_st(anotherPoint)._y())).__lt((150)._negated());
if(smalltalk.assert($6)){
$1=_st(aPoint).__plus(_st(_st(_st(self["@distance"]).__slash((12)))._negated()).__at(_st(_st(self["@distance"]).__slash((12)))._negated()));
} else {
$1=aPoint;
};
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"companion:with:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.RelationalTowersBuilder)})},
args: ["aPoint", "anotherPoint"],
source: "companion: aPoint with: anotherPoint\x0a\x09^(aPoint x < (anotherPoint x)) \x0a\x09\x09ifTrue:  [ ((aPoint y - (anotherPoint y)) > 150) \x0a\x09\x09\x09\x09\x09ifTrue: [aPoint + ((distance / 12) negated @ (distance / 12))] \x0a\x09\x09\x09\x09\x09ifFalse: [ ((aPoint y - (anotherPoint y)) < (150 negated)) \x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue:  [aPoint + ((distance / 12) @ (distance / 12 negated))]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [aPoint]]]\x0a\x09\x09ifFalse: [ ((aPoint y - (anotherPoint y)) > 150) \x0a\x09\x09\x09\x09\x09ifTrue: [aPoint + ((distance / 12) @ (distance / 12))] \x0a\x09\x09\x09\x09\x09ifFalse: [ ((aPoint y - (anotherPoint y)) < (150 negated)) \x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue:  [aPoint + ((distance / 12) negated @ (distance / 12) negated)]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [aPoint]]]",
messageSends: ["ifTrue:ifFalse:", "+", "@", "/", "negated", "<", "-", "y", ">", "x"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "controlElement:",
category: 'edge-management',
fn: function (p1){
var self=this;
var elem;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1;
elem=_st(_st(_st(_st($ROBox())._new())._color_(_st($Color())._transparent()))._element())._translateTo_(p1);
$1=elem;
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlElement:",{p1:p1,elem:elem},smalltalk.RelationalTowersBuilder)})},
args: ["p1"],
source: "controlElement: p1\x0a\x09| elem |\x0a\x09elem := (ROBox new color: Color transparent) element translateTo: p1.\x0a\x09\x22view add: elem.\x22\x0a\x09^elem",
messageSends: ["translateTo:", "element", "color:", "transparent", "new"],
referencedClasses: ["Color", "ROBox"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "controlPointEnd:from:",
category: 'edge-management',
fn: function (aNode,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($2)){
$1=_st(_st(aNode)._absolutePosition()).__plus(_st(_st(_st(self["@distance"]).__slash((3)))._negated()).__at(_st(_st(_st(_st(aNode)._bounds())._height()).__slash((2)))._asInteger()));
} else {
$1=_st(_st(aNode)._absolutePosition()).__plus(_st(_st(self["@distance"]).__slash((3))).__at(_st(_st(_st(_st(aNode)._bounds())._height()).__slash((2)))._asInteger()));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlPointEnd:from:",{aNode:aNode,aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection"],
source: "controlPointEnd: aNode from: aCollection\x0a\x09^(aCollection = left) \x0a\x09\x09ifTrue:  [aNode absolutePosition \x0a\x09\x09\x09+ ((distance / 3) negated @ (aNode bounds height / 2) asInteger)]\x0a\x09\x09ifFalse: [ aNode absolutePosition\x0a\x09\x09\x09+ ((distance / 3) @ (aNode bounds height / 2) asInteger)]",
messageSends: ["ifTrue:ifFalse:", "+", "@", "asInteger", "/", "height", "bounds", "negated", "absolutePosition", "="],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "controlPointStart:from:",
category: 'edge-management',
fn: function (aNode,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($2)){
$1=_st(_st(aNode)._absolutePosition()).__plus(_st(_st(self["@distance"]).__slash((3))).__at(_st(_st(_st(_st(aNode)._bounds())._height()).__slash((2)))._asInteger()));
} else {
$1=_st(_st(aNode)._absolutePosition()).__plus(_st(_st(_st(self["@distance"]).__slash((3)))._negated()).__at(_st(_st(_st(_st(aNode)._bounds())._height()).__slash((2)))._asInteger()));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlPointStart:from:",{aNode:aNode,aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection"],
source: "controlPointStart: aNode from: aCollection\x0a\x09^(aCollection = left) \x0a\x09\x09ifTrue:  [aNode absolutePosition\x0a\x09\x09\x09+ ((distance / 3) @ (aNode bounds height / 2) asInteger) ]\x0a\x09\x09ifFalse: [ aNode absolutePosition \x0a\x09\x09\x09+ ((distance / 3) negated @ (aNode bounds height / 2) asInteger)]",
messageSends: ["ifTrue:ifFalse:", "+", "@", "asInteger", "/", "height", "bounds", "absolutePosition", "negated", "="],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "distance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@distance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"distance",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "distance\x0a\x09^distance",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "distance:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@distance"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"distance:",{aNumber:aNumber},smalltalk.RelationalTowersBuilder)})},
args: ["aNumber"],
source: "distance: aNumber\x0a\x09distance := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFrom:",
category: 'adding edges',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesFromLeft_(aBlock);
self._edgesToLeft_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFrom:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "edgesFrom: aBlock\x0a\x09self edgesFromLeft: aBlock.\x0a\x09self edgesToLeft: aBlock.",
messageSends: ["edgesFromLeft:", "edgesToLeft:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromLeft:",
category: 'adding edges',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@left"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
self["@left"]=self._fromModel();
return self["@left"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@right"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._assignMissing_from_(aBlock,self["@left"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@direction"]="from";
self._relationLeft_(aBlock);
_st(self._view())._addAll_(self["@left"]);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFromLeft:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "edgesFromLeft:  aBlock\x0a\x09left ifEmpty: [ left := self fromModel ].\x0a\x09right ifEmpty: [ self assignMissing: aBlock from: left ].\x0a\x09direction := 'from'.\x0a\x09self relationLeft: aBlock.\x0a\x09self view addAll: left.",
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationLeft:", "addAll:", "view"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromLeft:edgesFromRight:",
category: 'adding edges',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesFromLeft_(aBlock);
self._edgesFromRight_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFromLeft:edgesFromRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "anotherBlock"],
source: "edgesFromLeft: aBlock edgesFromRight: anotherBlock\x0a\x09self edgesFromLeft: aBlock.\x0a\x09self edgesFromRight: anotherBlock.",
messageSends: ["edgesFromLeft:", "edgesFromRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromLeft:edgesToLeft:",
category: 'adding edges',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesFromLeft_(aBlock);
self._edgesToLeft_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFromLeft:edgesToLeft:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "anotherBlock"],
source: "edgesFromLeft: aBlock edgesToLeft: anotherBlock\x0a\x09self edgesFromLeft: aBlock.\x0a\x09self edgesToLeft: anotherBlock.",
messageSends: ["edgesFromLeft:", "edgesToLeft:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromRight:",
category: 'adding edges',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@right"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
self["@right"]=self._fromModel();
return self["@right"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@left"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._assignMissing_from_(aBlock,self["@right"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@direction"]="from";
self._relationRight_(aBlock);
_st(self._view())._addAll_(self["@right"]);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFromRight:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "edgesFromRight: aBlock\x0a\x09right ifEmpty: [ right := self fromModel ].\x0a\x09left ifEmpty: [ self assignMissing: aBlock from: right ].\x0a\x09direction := 'from'.\x0a\x09self relationRight: aBlock.\x0a\x09self view addAll: right",
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationRight:", "addAll:", "view"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesTo:",
category: 'adding edges',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesToRight_(aBlock);
self._edgesFromRight_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesTo:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "edgesTo: aBlock\x0a\x09self edgesToRight: aBlock.\x0a\x09self edgesFromRight: aBlock.",
messageSends: ["edgesToRight:", "edgesFromRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToLeft:",
category: 'adding edges',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@right"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
self["@right"]=self._fromModel();
return self["@right"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@left"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._assignMissing_from_(aBlock,self["@right"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@direction"]="to";
self._relationRight_(aBlock);
_st(self._view())._addAll_(self["@right"]);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToLeft:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "edgesToLeft:  aBlock\x0a\x09right ifEmpty: [ right :=  self fromModel].\x0a\x09left ifEmpty: [ self assignMissing: aBlock from: right ].\x0a\x09direction := 'to'.\x0a\x09self relationRight: aBlock.\x0a\x09self view addAll: right.",
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationRight:", "addAll:", "view"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToLeft:edgesToRight:",
category: 'adding edges',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesToRight_(aBlock);
self._edgesToLeft_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToLeft:edgesToRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "anotherBlock"],
source: "edgesToLeft: aBlock edgesToRight: anotherBlock\x0a\x09self edgesToRight: aBlock.\x0a\x09self edgesToLeft: anotherBlock.",
messageSends: ["edgesToRight:", "edgesToLeft:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToRight:",
category: 'adding edges',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@left"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
self["@left"]=self._fromModel();
return self["@left"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@right"])._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return self._assignMissing_from_(aBlock,self["@left"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@direction"]="to";
self._relationLeft_(aBlock);
_st(self._view())._addAll_(self["@left"]);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToRight:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "edgesToRight:  aBlock\x0a\x09left ifEmpty: [ left := self fromModel].\x0a\x09right ifEmpty: [ self assignMissing: aBlock from: left ].\x0a\x09direction := 'to'.\x0a\x09self relationLeft: aBlock.\x0a\x09self view addAll: left.",
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationLeft:", "addAll:", "view"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToRight:edgesFromRight:",
category: 'adding edges',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesToRight_(aBlock);
self._edgesFromRight_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToRight:edgesFromRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "anotherBlock"],
source: "edgesToRight: aBlock edgesFromRight: anotherBlock\x0a\x09self edgesToRight: aBlock.\x0a\x09self edgesFromRight: anotherBlock.",
messageSends: ["edgesToRight:", "edgesFromRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example1",
category: 'examples',
fn: function (){
var self=this;
var a;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
a=_st($RelationalTowersBuilder())._new();
_st(a)._left_(["a","b","c"]);
_st(a)._edgesTo_("yourself");
_st(a)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example1",{a:a},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example1\x0a\x09\x22\x0a\x09self new example1\x0a\x09\x22\x0a\x09|a |\x0a\x09a := RelationalTowersBuilder new.\x0a\x09a left: { 'a' . 'b' . 'c' }.\x0a\x09a edgesTo: #yourself.\x0a\x09a open.",
messageSends: ["new", "left:", "edgesTo:", "open"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
category: 'examples',
fn: function (){
var self=this;
var a;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
a=_st($RelationalTowersBuilder())._new();
_st(a)._label_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._name())._asString();
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
_st(a)._height_("numberOfMethods");
_st(a)._color_("numberOfLinesOfCode");
_st(a)._onLeftAndRight_(_st($Number())._withAllSubclasses());
_st(a)._edgesTo_("allSubclasses");
_st(a)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{a:a},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example2\x0a\x09\x22\x0a\x09self new example2\x0a\x09\x22\x0a\x09| a |\x0a\x09a := RelationalTowersBuilder new.\x0a\x09a label: [ :c | c name asString].\x0a\x09a height: #numberOfMethods.\x0a\x09a color: #numberOfLinesOfCode.\x0a\x09a onLeftAndRight: Number withAllSubclasses.\x0a\x09a edgesTo: #allSubclasses.\x0a\x09a open.",
messageSends: ["new", "label:", "asString", "name", "height:", "color:", "onLeftAndRight:", "withAllSubclasses", "edgesTo:", "open"],
referencedClasses: ["RelationalTowersBuilder", "Number"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
category: 'examples',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
function $ROShape(){return smalltalk.ROShape||(typeof ROShape=="undefined"?nil:ROShape)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._height_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._numberOfLinesOfCode()).__slash((10));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(builder)._color_("numberOfMethods");
_st(builder)._left_(_st($ROShape())._withAllSubclasses());
_st(builder)._edgesTo_("referencedClasses");
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example3\x0a\x09\x22\x0a\x09self new example3\x0a\x09\x22\x0a\x09| builder |\x0a\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder height:  [ :e | e numberOfLinesOfCode  / 10].\x0a\x09builder color: #numberOfMethods.\x0a\x09builder left: ROShape withAllSubclasses.\x0a\x09builder edgesTo: #referencedClasses.\x0a\x09builder open",
messageSends: ["new", "height:", "/", "numberOfLinesOfCode", "color:", "left:", "withAllSubclasses", "edgesTo:", "open"],
referencedClasses: ["RelationalTowersBuilder", "ROShape"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example4",
category: 'examples',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._legend_("Example of a relation between two set of integers");
_st(builder)._left_((1)._to_((10)));
_st(builder)._right_((1)._to_((20)));
_st(builder)._edgesFromLeft_edgesToLeft_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v).__minus((5)))._to_(_st(v).__plus((5)));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}),(function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v).__slash((2));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example4",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example4\x0a\x09\x22\x0a\x09self new example4\x0a\x09\x22\x0a\x09| builder |\x0a\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder legend: 'Example of a relation between two set of integers'.\x0a\x09builder left: (1 to: 10).\x0a\x09builder right: (1 to: 20).\x0a\x09builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ] edgesToLeft: [ :v | (v / 2) ].\x0a\x09builder open",
messageSends: ["new", "legend:", "left:", "to:", "right:", "edgesFromLeft:edgesToLeft:", "+", "-", "/", "open"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example5",
category: 'examples',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._legend_("Power");
_st(builder)._onLeftAndRight_((1)._to_((20)));
_st(builder)._edgesTo_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v).__star(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example5",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example5\x0a\x09\x22\x0a\x09self new example5\x0a\x09\x22\x0a\x09| builder | \x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder legend: 'Power'.\x0a\x09builder onLeftAndRight: (1 to: 20).\x0a\x09builder edgesTo: [ :v | v * v].\x0a\x09builder open",
messageSends: ["new", "legend:", "onLeftAndRight:", "to:", "edgesTo:", "*", "open"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example6",
category: 'examples',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
function $ROObject(){return smalltalk.ROObject||(typeof ROObject=="undefined"?nil:ROObject)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._left_((1)._to_((20)));
_st(builder)._right_(_st($ROObject())._withAllSubclasses());
_st(builder)._edgesFrom_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._numberOfSubclasses()).__eq(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example6",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example6\x0a\x09\x22\x0a\x09self new example6\x0a\x09\x22\x0a\x09| builder | \x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder left: (1 to: 20).\x0a\x09builder right: (ROObject withAllSubclasses).\x0a\x09builder edgesFrom: [ :a :b | a numberOfSubclasses = b].\x0a\x09builder open",
messageSends: ["new", "left:", "to:", "right:", "withAllSubclasses", "edgesFrom:", "=", "numberOfSubclasses", "open"],
referencedClasses: ["RelationalTowersBuilder", "ROObject"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example7",
category: 'examples',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROGridLayout(){return smalltalk.ROGridLayout||(typeof ROGridLayout=="undefined"?nil:ROGridLayout)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._legend_("Example of a relation between two set of integers");
_st(builder)._left_((1)._to_((10)));
_st(builder)._right_((1)._to_((20)));
_st(builder)._edgesFromLeft_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v).__minus((5)))._to_(_st(v).__plus((5)));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st(builder)._popupElement_((function(v){
var elem,elems;
return smalltalk.withContext(function($ctx2) {
elem=_st($ROElement())._new();
elem;
elems=_st($OrderedCollection())._new();
elems;
_st(_st(_st(_st(v)._model()).__minus((5)))._to_(_st(_st(v)._model()).__plus((5))))._do_((function(n){
var e;
return smalltalk.withContext(function($ctx3) {
e=_st($ROElement())._new();
e;
_st(e)._addShape_(_st($ROBox())._blue());
return _st(elems)._add_(e);
}, function($ctx3) {$ctx3.fillBlock({n:n,e:e},$ctx2)})}));
_st(elem)._addAll_(elems);
_st($ROGridLayout())._on_(elems);
return elem;
}, function($ctx2) {$ctx2.fillBlock({v:v,elem:elem,elems:elems},$ctx1)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example7",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example7\x0a\x09\x22\x0a\x09self new example7\x0a\x09\x22\x0a\x09| builder |\x0a\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder legend: 'Example of a relation between two set of integers'.\x0a\x09builder left: (1 to: 10).\x0a\x09builder right: (1 to: 20).\x0a\x09builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ].\x0a\x09builder popupElement: [ :v | |elem elems|\x0a\x09\x09\x09elem := ROElement new.\x0a\x09\x09\x09elems := OrderedCollection new.\x0a\x09\x09\x09(((v model) - 5) to: ((v model) + 5)) do: [:n | |e| e := ROElement new. e addShape: ROBox blue. elems add: e. ].\x0a\x09\x09\x09elem addAll: elems.\x0a\x09\x09\x09ROGridLayout on: elems.\x0a\x09\x09\x09elem].\x0a\x09builder open",
messageSends: ["new", "legend:", "left:", "to:", "right:", "edgesFromLeft:", "+", "-", "popupElement:", "do:", "addShape:", "blue", "add:", "model", "addAll:", "on:", "open"],
referencedClasses: ["RelationalTowersBuilder", "ROElement", "OrderedCollection", "ROBox", "ROGridLayout"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example8",
category: 'examples',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._legend_("Compiler instance variables usage");
_st(builder)._labelRight_((function(a){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._selector())._asString();
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1)})}));
_st(builder)._left_(_st($Compiler())._instanceVariables());
_st(builder)._right_(_st($Compiler())._methods());
_st(builder)._edgesTo_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(b)._referredInstVars())._includes_(a);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example8",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example8\x0a\x09\x22\x0a\x09self new example8 \x0a\x09\x22\x0a\x09| builder |\x0a\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder legend: 'Compiler instance variables usage'.\x0a\x09builder labelRight: [:a | a selector asString]. \x0a\x09builder left: Compiler instanceVariables.\x0a\x09builder right: Compiler methods.\x0a\x09builder edgesTo: [ :a :b | b referredInstVars includes: a  ].\x0a\x09builder open",
messageSends: ["new", "legend:", "labelRight:", "asString", "selector", "left:", "instanceVariables", "right:", "methods", "edgesTo:", "includes:", "referredInstVars", "open"],
referencedClasses: ["RelationalTowersBuilder", "Compiler"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "from:in:",
category: 'shape-managment',
fn: function (aCollection,aString){
var self=this;
var h,w,dictionary,normalizer,c,color;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st(aString).__eq("left");
if(smalltalk.assert($1)){
color=self._colorLeft();
color;
} else {
color=self._colorRight();
color;
};
$2=color;
if(($receiver = $2) == nil || $receiver == undefined){
color=self._colorRight();
color;
} else {
$2;
};
h=(function(v){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._height())._value_(v);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx3) {
return (10);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})});
w=(function(v){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._width())._value_(v);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx3) {
return (10);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})});
dictionary=_st($Dictionary())._new();
_st(aCollection)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(dictionary)._at_put_(e,_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(color)._value_(e);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx3) {
return (0);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
normalizer=self._getNormalizerfrom_(dictionary);
c=(function(v){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(normalizer)._roValue_(_st(color)._value_(v));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx3) {
return _st($Color())._lightGray();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})});
$3=_st(aCollection)._collect_((function(m){
var elem;
return smalltalk.withContext(function($ctx2) {
elem=_st($ROElement())._on_(m);
elem;
$4=_st($ROBox())._new();
_st($4)._height_(_st(h)._value_(m));
_st($4)._width_(_st(w)._value_(m));
$5=_st($4)._color_(_st(c)._value_(m));
return _st(elem).__plus($5);
}, function($ctx2) {$ctx2.fillBlock({m:m,elem:elem},$ctx1)})}));
return $3;
}, function($ctx1) {$ctx1.fill(self,"from:in:",{aCollection:aCollection,aString:aString,h:h,w:w,dictionary:dictionary,normalizer:normalizer,c:c,color:color},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection", "aString"],
source: "from: aCollection in: aString\x0a\x09|h w dictionary normalizer c color|\x0a\x09(aString = 'left')\x0a\x09\x09ifTrue: [ color := self colorLeft ]\x0a\x09\x09ifFalse: [ color := self colorRight ].\x0a\x09color ifNil: [ color := self colorRight].\x0a\x09h := [ :v | [(self height value: v)] on: Error do: [ 10 ] ].\x0a\x09w := [ :v | [(self width value: v)] on: Error do:[ 10 ] ].\x0a\x09dictionary := Dictionary new.\x0a\x09aCollection do: [ :e | dictionary at: e put: ([(color value: e)]  on: Error do: [0] ) ].\x0a\x09normalizer := self getNormalizerfrom: dictionary.\x0a\x09c := [ :v | [normalizer roValue: (color value: v)] on: Error do: [ Color lightGray ] ].\x0a\x09^(aCollection collect: [ :m | | elem |\x0a\x09\x09elem := ROElement on: m.\x0a\x09\x09elem + (ROBox new height: (h value: m); width: (w value: m); color: (c value: m))]).",
messageSends: ["ifTrue:ifFalse:", "colorLeft", "colorRight", "=", "ifNil:", "on:do:", "value:", "height", "width", "new", "do:", "at:put:", "getNormalizerfrom:", "lightGray", "roValue:", "collect:", "on:", "+", "height:", "width:", "color:"],
referencedClasses: ["Error", "Dictionary", "Color", "ROElement", "ROBox"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "fromModel",
category: 'shape-managment',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._from_in_(self._models(),"left");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromModel",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "fromModel\x0a\x09^(self from: (self models) in: 'left')",
messageSends: ["from:in:", "models"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "getNormalizerfrom:",
category: 'shape-managment',
fn: function (aDictionary){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RONColorLinearNormalizer())._inContext_lowColor_highColor_(_st(aDictionary)._values(),_st($Color())._yellow(),_st($Color())._green());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getNormalizerfrom:",{aDictionary:aDictionary},smalltalk.RelationalTowersBuilder)})},
args: ["aDictionary"],
source: "getNormalizerfrom: aDictionary\x0a\x09^(RONColorLinearNormalizer inContext: (aDictionary values) lowColor: Color yellow highColor: Color green).",
messageSends: ["inContext:lowColor:highColor:", "values", "yellow", "green"],
referencedClasses: ["Color", "RONColorLinearNormalizer"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "greyLinesfrom:in:to:",
category: 'edge-management',
fn: function (aNode,aCollection,links){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self["@shadowEdges"])._at_ifPresent_ifAbsent_(aNode,(function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(self["@shadowEdges"])._at_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._shape())._show();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
return _st(self._view())._signalUpdate();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@shadowEdges"])._at_put_(aNode,self._addLinesfrom_toAll_from_color_(aNode,links,aCollection,_st($Color())._veryVeryLightGray()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(aNode)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(self["@shadowEdges"])._at_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(_st(e)._shape())._hide();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
return _st(self._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"greyLinesfrom:in:to:",{aNode:aNode,aCollection:aCollection,links:links},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection", "links"],
source: "greyLinesfrom: aNode in: aCollection to: links \x22cache: prompLinks\x22\x0a\x09aNode\x0a\x09\x09on: ROMouseEnter\x0a\x09\x09do: [ :event | \x0a\x09\x09\x09shadowEdges at: aNode\x09\x0a\x09\x09\x09\x09ifPresent: [ (shadowEdges at: aNode) do: [ :e | e shape show]. self view signalUpdate]\x0a\x09\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09\x09shadowEdges at: aNode put: \x0a\x09\x09\x09\x09\x09(self\x0a\x09\x09\x09\x09\x09\x09addLinesfrom: aNode\x0a\x09\x09\x09\x09\x09\x09toAll: links\x0a\x09\x09\x09\x09\x09\x09from: aCollection\x0a\x09\x09\x09\x09\x09\x09color: Color veryVeryLightGray)] ].\x0a\x09aNode\x0a\x09\x09on: ROMouseLeave\x0a\x09\x09do: [ :event | \x0a\x09\x09\x09(shadowEdges at: aNode) do: [ :e | e shape hide ].\x0a\x09\x09\x09self view signalUpdate ].\x09\x09\x09\x09\x09\x09\x0a\x09",
messageSends: ["on:do:", "at:ifPresent:ifAbsent:", "do:", "show", "shape", "at:", "signalUpdate", "view", "at:put:", "addLinesfrom:toAll:from:color:", "veryVeryLightGray", "hide"],
referencedClasses: ["ROMouseEnter", "Color", "ROMouseLeave"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "height\x0a\x09^height",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.RelationalTowersBuilder)})},
args: ["aNumber"],
source: "height: aNumber\x0a\x09height := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
self["@models"]=_st($OrderedCollection())._new();
self["@left"]=_st($OrderedCollection())._new();
self["@right"]=_st($OrderedCollection())._new();
self["@popups"]=_st($Dictionary())._new();
self["@edges"]=_st($Dictionary())._new();
self["@shadowEdges"]=_st($Dictionary())._new();
self["@title"]="RelationalTowers";
self["@legend"]="Relational Towers";
self._label_("asString");
self._color_(_st($Color())._blue());
self["@height"]=(10);
self["@width"]=(10);
self["@popupElement"]=(function(elem){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROElement())._on_(_st(_st(_st(elem)._allEdgesFrom())._select_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(e)._shape())._color()).__eq(_st($Color())._blue());
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})})))._size())).__plus(_st(_st($ROLabel())._new())._color_(_st($Color())._blue()));
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})});
self["@viewWidth"]=(500);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "initialize\x0a\x09view := ROView new.\x0a\x09models := OrderedCollection new.\x0a\x09left := OrderedCollection new.\x0a\x09right := OrderedCollection new.\x0a\x09popups := Dictionary new.\x0a\x09edges := Dictionary new. \x22not in Pharo\x22\x0a\x09shadowEdges := Dictionary new. \x22not in Pharo\x22\x0a\x09title := 'RelationalTowers'.\x0a\x09legend := 'Relational Towers'.\x0a\x09self label: #asString.\x0a\x09self color: (Color blue).\x0a\x09height := 10.\x0a\x09width := 10.\x0a\x09popupElement := [ :elem | (ROElement on: ((elem allEdgesFrom select: [:e | e shape color = (Color blue)]) size)) + (ROLabel new \x22fontSize: 20;\x22 color: Color blue)].\x0a\x09viewWidth := 500.",
messageSends: ["new", "label:", "color:", "blue", "+", "on:", "size", "select:", "=", "color", "shape", "allEdgesFrom"],
referencedClasses: ["ROView", "OrderedCollection", "Dictionary", "Color", "ROLabel", "ROElement"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._labelLeft_(aMessage);
self._labelRight_(aMessage);
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
args: ["aMessage"],
source: "label: aMessage\x0a\x09self labelLeft: aMessage.\x0a\x09self labelRight: aMessage",
messageSends: ["labelLeft:", "labelRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelLeft",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@labelLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelLeft",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "labelLeft\x0a\x09^labelLeft",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelLeft:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@labelLeft"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"labelLeft:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
args: ["aMessage"],
source: "labelLeft: aMessage\x0a\x09labelLeft := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelRight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@labelRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelRight",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "labelRight\x0a\x09^labelRight",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelRight:",
category: 'accessing',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@labelRight"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"labelRight:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
args: ["aMessage"],
source: "labelRight: aMessage\x0a\x09labelRight := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labels:",
category: 'shape-managment',
fn: function (aCollection){
var self=this;
var maxWidth,label;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROHighlight(){return smalltalk.ROHighlight||(typeof ROHighlight=="undefined"?nil:ROHighlight)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
maxWidth=(0);
$1=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
label=self._labelLeft();
label;
} else {
label=self._labelRight();
label;
};
_st(aCollection)._do_((function(l){
var lab;
return smalltalk.withContext(function($ctx2) {
lab=_st(_st($ROElement())._on_(_st(label)._value_(_st(l)._model()))).__plus($ROLabel());
lab;
_st(lab).__at($ROHighlight());
maxWidth=_st(maxWidth)._max_(_st(lab)._width());
maxWidth;
_st(self._view())._add_(lab);
return self._stick_on_from_(lab,l,aCollection);
}, function($ctx2) {$ctx2.fillBlock({l:l,lab:lab},$ctx1)})}));
$2=maxWidth;
return $2;
}, function($ctx1) {$ctx1.fill(self,"labels:",{aCollection:aCollection,maxWidth:maxWidth,label:label},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection"],
source: "labels: aCollection\x0a\x09| maxWidth label|\x0a\x09maxWidth := 0.\x0a\x09(aCollection = left) \x0a\x09\x09ifTrue: [ label := self labelLeft ]\x0a\x09\x09ifFalse: [ label := self labelRight ].\x0a\x09aCollection do: [:l | | lab | \x0a\x09\x09lab := (ROElement on: (label value: l model))+  ROLabel.\x0a\x09\x09lab @ ROHighlight\x22ROLightlyHighlightable lightGray\x22.\x0a\x09\x09maxWidth := maxWidth max: (lab width).\x0a\x09\x09self view add: lab.\x0a\x09\x09self stick: lab on: l from: aCollection].\x0a\x09^maxWidth",
messageSends: ["ifTrue:ifFalse:", "labelLeft", "labelRight", "=", "do:", "+", "on:", "value:", "model", "@", "max:", "width", "add:", "view", "stick:on:from:"],
referencedClasses: ["ROLabel", "ROElement", "ROHighlight"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@left"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "left\x0a\x09^left",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._models())._addAll_(aCollection);
self["@left"]=self._from_in_(aCollection,"left");
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection"],
source: "left: aCollection\x0a\x09self models addAll: aCollection.\x0a\x09left := self from: aCollection in: 'left'.",
messageSends: ["addAll:", "models", "from:in:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "legend",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@legend"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"legend",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "legend\x0a\x09^legend",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "legend:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@legend"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"legend:",{aString:aString},smalltalk.RelationalTowersBuilder)})},
args: ["aString"],
source: "legend: aString\x0a\x09legend := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linesFrom:with:",
category: 'edge-management',
fn: function (aCollection,aBlock){
var self=this;
var otherCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
otherCollection=self["@right"];
otherCollection;
} else {
otherCollection=self["@left"];
otherCollection;
};
_st(aCollection)._do_((function(n1){
var links;
return smalltalk.withContext(function($ctx2) {
links=self._linksFrom_with_to_(n1,aBlock,otherCollection);
links;
self._blueLines_in_to_(n1,aCollection,links);
return self._greyLinesfrom_in_to_(n1,aCollection,links);
}, function($ctx2) {$ctx2.fillBlock({n1:n1,links:links},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesFrom:with:",{aCollection:aCollection,aBlock:aBlock,otherCollection:otherCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection", "aBlock"],
source: "linesFrom: aCollection with: aBlock\x0a\x09| otherCollection\x22 prompLinks\x22 |\x0a\x09\x22prompLinks := OrderedCollection new.\x22\x0a\x09aCollection = left\x0a\x09\x09ifTrue: [ otherCollection := right ]\x0a\x09\x09ifFalse: [ otherCollection := left ].\x0a\x09aCollection\x0a\x09\x09do: [ :n1 | \x0a\x09\x09\x09| links |\x0a\x09\x09\x09links := self linksFrom: n1 with: aBlock to: otherCollection.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09blueLines: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links\x0a\x09\x09\x09\x09\x22cache: prompLinks\x22.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09greyLinesfrom: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links\x0a\x09\x09\x09\x09\x22cache: prompLinks\x22 ].\x0a\x09\x22self killLinksFrom: prompLinks\x22",
messageSends: ["ifTrue:ifFalse:", "=", "do:", "linksFrom:with:to:", "blueLines:in:to:", "greyLinesfrom:in:to:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linesTo:with:",
category: 'edge-management',
fn: function (aCollection,aBlock){
var self=this;
var otherCollection;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
otherCollection=self["@right"];
otherCollection;
} else {
otherCollection=self["@left"];
otherCollection;
};
_st(aCollection)._do_((function(n1){
var links;
return smalltalk.withContext(function($ctx2) {
links=self._linksTo_with_to_(n1,aBlock,otherCollection);
links;
self._blueLines_in_to_(n1,aCollection,links);
return self._greyLinesfrom_in_to_(n1,aCollection,links);
}, function($ctx2) {$ctx2.fillBlock({n1:n1,links:links},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"linesTo:with:",{aCollection:aCollection,aBlock:aBlock,otherCollection:otherCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection", "aBlock"],
source: "linesTo: aCollection with: aBlock\x0a\x09| otherCollection \x22prompLinks\x22 |\x0a\x09\x22prompLinks := OrderedCollection new.\x22\x0a\x09aCollection = left\x0a\x09\x09ifTrue: [ otherCollection := right ]\x0a\x09\x09ifFalse: [ otherCollection := left ].\x0a\x09aCollection\x0a\x09\x09do: [ :n1 | \x0a\x09\x09\x09| links |\x0a\x09\x09\x09links := self linksTo: n1 with: aBlock to: otherCollection.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09blueLines: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links\x0a\x09\x09\x09\x09\x22cache: prompLinks\x22.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09greyLinesfrom: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links\x0a\x09\x09\x09\x09\x22cache: prompLinks\x22 ].\x0a\x09\x22self killLinksFrom: prompLinks\x22",
messageSends: ["ifTrue:ifFalse:", "=", "do:", "linksTo:with:to:", "blueLines:in:to:", "greyLinesfrom:in:to:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linksFrom:with:to:",
category: 'edge-management',
fn: function (aNode,aBlock,otherCollection){
var self=this;
var links,aux;
return smalltalk.withContext(function($ctx1) { 
var $1;
aux=_st(otherCollection)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return [e,aNode];
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
links=_st(aux)._select_((function(e){
var f,s,v;
return smalltalk.withContext(function($ctx2) {
f=_st(_st(e)._first())._model();
f;
s=_st(_st(e)._second())._model();
s;
v=self._check_from_to_(aBlock,f,s);
v;
return v;
}, function($ctx2) {$ctx2.fillBlock({e:e,f:f,s:s,v:v},$ctx1)})}));
links=_st(links)._collect_((function(l){
return smalltalk.withContext(function($ctx2) {
return _st(l)._first();
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1)})}));
$1=links;
return $1;
}, function($ctx1) {$ctx1.fill(self,"linksFrom:with:to:",{aNode:aNode,aBlock:aBlock,otherCollection:otherCollection,links:links,aux:aux},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aBlock", "otherCollection"],
source: "linksFrom: aNode with: aBlock to: otherCollection\x0a\x09| links aux |\x0a\x09aux := otherCollection\x0a\x09\x09collect: [ :e | \x0a\x09\x09\x09{e.\x0a\x09\x09\x09aNode} ].\x0a\x09links := aux\x0a\x09\x09select: [ :e | \x0a\x09\x09\x09| f s v |\x0a\x09\x09\x09f := e first model.\x0a\x09\x09\x09s := e second model.\x0a\x09\x09\x09v := self check: aBlock from: f to: s.\x0a\x09\x09\x09v ].\x0a\x09links := links collect: [ :l | l first ].\x0a\x09^ links",
messageSends: ["collect:", "select:", "model", "first", "second", "check:from:to:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linksTo:with:to:",
category: 'edge-management',
fn: function (aNode,aBlock,otherCollection){
var self=this;
var links,aux;
return smalltalk.withContext(function($ctx1) { 
var $1;
aux=_st(otherCollection)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return [e,aNode];
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
links=_st(aux)._select_((function(e){
var f,s,v;
return smalltalk.withContext(function($ctx2) {
f=_st(_st(e)._first())._model();
f;
s=_st(_st(e)._second())._model();
s;
v=self._check_from_to_(aBlock,s,f);
v;
return v;
}, function($ctx2) {$ctx2.fillBlock({e:e,f:f,s:s,v:v},$ctx1)})}));
links=_st(links)._collect_((function(l){
return smalltalk.withContext(function($ctx2) {
return _st(l)._first();
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1)})}));
$1=links;
return $1;
}, function($ctx1) {$ctx1.fill(self,"linksTo:with:to:",{aNode:aNode,aBlock:aBlock,otherCollection:otherCollection,links:links,aux:aux},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aBlock", "otherCollection"],
source: "linksTo: aNode with: aBlock to: otherCollection\x0a\x09| links aux |\x0a\x09aux := otherCollection\x0a\x09\x09collect: [ :e | \x0a\x09\x09\x09{e.\x0a\x09\x09\x09aNode} ].\x0a\x09links := aux\x0a\x09\x09select: [ :e | \x0a\x09\x09\x09| f s v |\x0a\x09\x09\x09f := e first model.\x0a\x09\x09\x09s := e second model.\x0a\x09\x09\x09v := self check: aBlock from: s to: f.\x0a\x09\x09\x09v ].\x0a\x09links := links collect: [ :l | l first ].\x0a\x09^ links",
messageSends: ["collect:", "select:", "model", "first", "second", "check:from:to:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "models",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@models"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"models",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "models\x0a\x09^models",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "models:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@models"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"models:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection"],
source: "models: aCollection\x0a\x09models := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftAndRight:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._left_(aCollection);
self._right_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftAndRight:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection"],
source: "onLeftAndRight: aCollection\x0a\x09self left: aCollection.\x0a\x09self right: aCollection.",
messageSends: ["left:", "right:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self._view())._elements())._includes_(_st(self["@left"])._anyOne());
if(! smalltalk.assert($1)){
_st(self._view())._addAll_(self["@left"]);
};
$2=_st(_st(self._view())._elements())._includes_(_st(self["@right"])._anyOne());
if(! smalltalk.assert($2)){
_st(self._view())._addAll_(self["@right"]);
};
_st(self._view())._signalUpdate();
_st(self._view())._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "open\x0a\x09\x22self view title: (self title).\x22\x0a\x09(self view elements includes: (left anyOne)) ifFalse: [self view addAll: left].\x0a\x09(self view elements includes: (right anyOne)) ifFalse: [self view addAll: right].\x0a\x09\x22self view @ ROVerticalDraggable.\x22\x0a\x09\x22self view openInWindowSized: (self viewWidth) @ 500.\x22\x0a\x09self view signalUpdate.\x0a\x09self view open.",
messageSends: ["ifFalse:", "addAll:", "view", "includes:", "anyOne", "elements", "signalUpdate", "open"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@popupElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupElement",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "popupElement\x0a\x09^popupElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupElement:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popupElement"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"popupElement:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "popupElement: aBlock\x0a\x09popupElement := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popups",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@popups"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"popups",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "popups\x0a\x09^popups",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "positionateTowers",
category: 'shape-managment',
fn: function (){
var self=this;
var maxwl,maxwr,maxl,maxr,max,leg;
function $ROVerticalLineLayout(){return smalltalk.ROVerticalLineLayout||(typeof ROVerticalLineLayout=="undefined"?nil:ROVerticalLineLayout)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
maxl=_st(_st(self["@left"])._collect_((function(l){
return smalltalk.withContext(function($ctx2) {
return _st(l)._height();
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1)})})))._max();
maxr=_st(_st(self["@right"])._collect_((function(l){
return smalltalk.withContext(function($ctx2) {
return _st(l)._height();
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1)})})))._max();
max=_st(maxl)._max_(maxr);
_st($ROVerticalLineLayout())._on_(self["@left"]);
_st($ROVerticalLineLayout())._on_(self["@right"]);
maxwl=self._labels_(self["@left"]);
maxwr=self._labels_(self["@right"]);
self["@distance"]=_st(_st(_st(_st(_st(self._models())._size()).__star(_st(max)._ln())).__star((5)))._max_((300)))._min_((400));
_st(self["@left"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(_st(_st(maxwl).__plus((30))).__at((30)));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self["@right"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(_st(_st(_st(maxwl).__plus(self["@distance"])).__plus((30))).__at((30)));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
leg=_st(_st($ROElement())._on_(self._legend())).__plus($ROLabel());
_st(self._view())._add_(leg);
_st(leg)._translateBy_(_st(_st(_st(_st(maxwl).__plus((40))).__plus(_st(self["@distance"]).__slash((2)))).__minus(_st(_st(leg)._width()).__slash((2)))).__at((0)));
self["@viewWidth"]=_st(_st(_st(self["@distance"]).__plus(maxwl)).__plus(maxwr)).__plus((80));
$1=self["@distance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionateTowers",{maxwl:maxwl,maxwr:maxwr,maxl:maxl,maxr:maxr,max:max,leg:leg},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "positionateTowers\x0a\x09| maxwl maxwr maxl maxr max leg |\x0a\x09\x0a\x09maxl := (left collect: [ :l | l height ]) max.\x0a\x09maxr := (right collect: [ :l | l height ]) max.\x0a\x09max := maxl max: maxr.\x0a\x0a\x09ROVerticalLineLayout on: left.\x0a\x09ROVerticalLineLayout on: right.\x09\x0a\x09\x0a\x09maxwl := self labels: left.\x0a\x09maxwr := self labels: right.\x0a\x09\x0a\x09distance := ((self models size * max ln * 5) max: 300) min: 400.\x09\x0a\x0a\x09left do: [ :e | e translateBy: (maxwl + 30) @ 30 ].\x0a\x09right do: [ :e | e translateBy: (maxwl + distance + 30) @ 30 ].\x0a\x09\x0a\x09leg := (ROElement on: (self legend)) +  ROLabel.\x0a\x09self view add: leg.\x0a\x09leg translateBy: (maxwl + 40 + (distance / 2) - (leg width / 2)) @ 0.\x0a\x09\x0a\x09viewWidth := distance + maxwl + maxwr + 80.\x0a\x09\x0a\x09^ distance",
messageSends: ["max", "collect:", "height", "max:", "on:", "labels:", "min:", "*", "ln", "size", "models", "do:", "translateBy:", "@", "+", "legend", "add:", "view", "-", "/", "width"],
referencedClasses: ["ROVerticalLineLayout", "ROLabel", "ROElement"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relation:",
category: 'relations',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._relationLeft_(aBlock);
self._relationRight_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"relation:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "relation: aBlock\x09\x0a\x09self relationLeft: aBlock.\x0a\x09self relationRight: aBlock.",
messageSends: ["relationLeft:", "relationRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relationLeft:",
category: 'relations',
fn: function (aBlock){
var self=this;
var newBlock;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aBlock)._isBlock();
if(smalltalk.assert($1)){
newBlock=aBlock;
newBlock;
} else {
newBlock=(function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._perform_(aBlock))._includes_(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})});
newBlock;
};
$2=_st(self._distance())._isNil();
if(smalltalk.assert($2)){
self["@distance"]=self._positionateTowers();
self["@distance"];
};
$3=_st(self["@direction"]).__eq("to");
if(smalltalk.assert($3)){
self._linesTo_with_(self["@left"],newBlock);
} else {
self._linesFrom_with_(self["@left"],newBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"relationLeft:",{aBlock:aBlock,newBlock:newBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "relationLeft: aBlock\x0a\x09| newBlock |\x0a\x09aBlock isBlock \x0a\x09\x09ifTrue: [ newBlock\x09:= aBlock ]\x0a\x09\x09ifFalse: \x09[ newBlock := [ :a :b | (a perform: aBlock) includes: b ] ]. \x0a\x09self distance isNil ifTrue: [ distance := self positionateTowers].\x0a\x09direction = 'to' \x0a\x09\x09ifTrue: [ self linesTo: left with: newBlock]\x0a\x09\x09ifFalse: [ self linesFrom: left with: newBlock]",
messageSends: ["ifTrue:ifFalse:", "includes:", "perform:", "isBlock", "ifTrue:", "positionateTowers", "isNil", "distance", "linesTo:with:", "linesFrom:with:", "="],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relationRight:",
category: 'relations',
fn: function (aBlock){
var self=this;
var newBlock;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aBlock)._isBlock();
if(smalltalk.assert($1)){
newBlock=aBlock;
newBlock;
} else {
newBlock=(function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._perform_(aBlock))._includes_(b);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})});
newBlock;
};
$2=_st(self._distance())._isNil();
if(smalltalk.assert($2)){
self["@distance"]=self._positionateTowers();
self["@distance"];
};
$3=_st(self["@direction"]).__eq("to");
if(smalltalk.assert($3)){
self._linesTo_with_(self["@right"],newBlock);
} else {
self._linesFrom_with_(self["@right"],newBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"relationRight:",{aBlock:aBlock,newBlock:newBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "relationRight: aBlock\x09\x0a\x09| newBlock |\x0a\x09aBlock isBlock \x0a\x09\x09ifTrue: [ newBlock\x09:= aBlock ]\x0a\x09\x09ifFalse: \x09[ newBlock := [ :a :b | (a perform: aBlock) includes: b ] ]. \x0a\x09self distance isNil ifTrue: [ distance := self positionateTowers].\x0a\x09direction = 'to' \x0a\x09\x09ifTrue: [ self linesTo: right with: newBlock]\x0a\x09\x09ifFalse: [ self linesFrom: right with: newBlock]",
messageSends: ["ifTrue:ifFalse:", "includes:", "perform:", "isBlock", "ifTrue:", "positionateTowers", "isNil", "distance", "linesTo:with:", "linesFrom:with:", "="],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "removePopup:",
category: 'shape-managment',
fn: function (element){
var self=this;
var pop;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
pop=_st(self["@popups"])._at_ifAbsent_(element,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(pop)._isNil();
if(! smalltalk.assert($1)){
$2=_st(_st(pop)._shape())._isNil();
if(! smalltalk.assert($2)){
$3=_st(_st(_st(pop)._shape())._svgElement())._isNil();
if(! smalltalk.assert($3)){
_st(pop)._hide();
_st(self._view())._signalUpdate();
};
};
};
return self}, function($ctx1) {$ctx1.fill(self,"removePopup:",{element:element,pop:pop},smalltalk.RelationalTowersBuilder)})},
args: ["element"],
source: "removePopup: element\x0a\x09| pop |\x0a\x09pop := \x09(popups at: element ifAbsent: [nil]). \x0a\x09pop isNil ifFalse: [ pop shape isNil \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [pop shape svgElement isNil \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [pop hide\x22remove\x22. \x0a\x09\x09\x09\x09\x09\x09\x09\x09 \x09\x09\x09\x09\x09\x09 \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09self view signalUpdate]]].",
messageSends: ["at:ifAbsent:", "ifFalse:", "hide", "signalUpdate", "view", "isNil", "svgElement", "shape"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@right"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "right\x0a\x09^ right",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._models())._addAll_(aCollection);
self["@right"]=self._from_in_(aCollection,"right");
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection"],
source: "right: aCollection\x0a\x09self models addAll: aCollection.\x0a\x09right := self from: aCollection in: 'right'.",
messageSends: ["addAll:", "models", "from:in:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "splineLine:with:with:with:with:color:",
category: 'edge-management',
fn: function (attachpoint,controlPoint1,controlPoint2,controlPoint3,controlPoint4,aColor){
var self=this;
function $ROBSplineLine(){return smalltalk.ROBSplineLine||(typeof ROBSplineLine=="undefined"?nil:ROBSplineLine)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ROBSplineLine())._new();
_st($2)._attachPoint_(attachpoint);
_st($2)._color_(aColor);
_st($2)._addControlElement_(controlPoint2);
$3=_st($2)._addControlElement_(controlPoint3);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"splineLine:with:with:with:with:color:",{attachpoint:attachpoint,controlPoint1:controlPoint1,controlPoint2:controlPoint2,controlPoint3:controlPoint3,controlPoint4:controlPoint4,aColor:aColor},smalltalk.RelationalTowersBuilder)})},
args: ["attachpoint", "controlPoint1", "controlPoint2", "controlPoint3", "controlPoint4", "aColor"],
source: "splineLine: attachpoint with: controlPoint1 with: controlPoint2 with: controlPoint3 with: controlPoint4 color: aColor\x0a\x09^ ROBSplineLine new\x0a\x09\x09attachPoint: attachpoint;\x0a\x09\x09color: aColor;\x0a\x09\x09addControlElement: controlPoint2;\x0a\x09\x09addControlElement: controlPoint3\x22;\x0a\x09\x09addControlElement: controlPoint1;\x0a\x09\x09addControlElement: controlPoint4\x22",
messageSends: ["attachPoint:", "new", "color:", "addControlElement:"],
referencedClasses: ["ROBSplineLine"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:on:from:",
category: 'shape-managment',
fn: function (aLabel,anElement,aCollection){
var self=this;
function $ROConstraint(){return smalltalk.ROConstraint||(typeof ROConstraint=="undefined"?nil:ROConstraint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
_st($ROConstraint())._stick_onTheLeftCenteredOf_(aLabel,anElement);
} else {
_st($ROConstraint())._stick_onTheRightCenteredOf_(aLabel,anElement);
};
return self}, function($ctx1) {$ctx1.fill(self,"stick:on:from:",{aLabel:aLabel,anElement:anElement,aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aLabel", "anElement", "aCollection"],
source: "stick: aLabel on: anElement from: aCollection\x0a\x09(aCollection = left)\x0a\x09\x09ifTrue: [ ROConstraint stick: aLabel onTheLeftCenteredOf: anElement ]\x0a\x09\x09ifFalse: [ ROConstraint stick: aLabel onTheRightCenteredOf: anElement ]",
messageSends: ["ifTrue:ifFalse:", "stick:onTheLeftCenteredOf:", "stick:onTheRightCenteredOf:", "="],
referencedClasses: ["ROConstraint"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "stickTop:on:from:",
category: 'shape-managment',
fn: function (aLabel,anElement,aCollection){
var self=this;
function $ROConstraint(){return smalltalk.ROConstraint||(typeof ROConstraint=="undefined"?nil:ROConstraint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($1)){
_st($ROConstraint())._stick_onTheLeftOf_(aLabel,anElement);
} else {
_st($ROConstraint())._stick_onTheRightOf_(aLabel,anElement);
};
return self}, function($ctx1) {$ctx1.fill(self,"stickTop:on:from:",{aLabel:aLabel,anElement:anElement,aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aLabel", "anElement", "aCollection"],
source: "stickTop: aLabel on: anElement from: aCollection\x0a\x09(aCollection = left)\x0a\x09\x09ifTrue: [ ROConstraint stick: aLabel onTheLeftOf: anElement ]\x0a\x09\x09ifFalse: [ ROConstraint stick: aLabel onTheRightOf: anElement ]",
messageSends: ["ifTrue:ifFalse:", "stick:onTheLeftOf:", "stick:onTheRightOf:", "="],
referencedClasses: ["ROConstraint"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "title\x0a\x09^title",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.RelationalTowersBuilder)})},
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "view\x0a\x09^view",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.RelationalTowersBuilder)})},
args: ["aView"],
source: "view: aView\x0a\x09view := aView",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "viewWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@viewWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"viewWidth",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "viewWidth\x0a\x09^viewWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "width\x0a\x09^width",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.RelationalTowersBuilder)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09width := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);



smalltalk.addClass('RelationalTowersBuilderTest', smalltalk.TestCase, ['builder'], 'RelationalTowersBuilder');
smalltalk.RelationalTowersBuilderTest.comment="A RelationalTowersBuilderTest is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09builder:\x09\x09<Object>\x0a\x0abuilder\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($RelationalTowersBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RelationalTowersBuilderTest)})},
args: [],
source: "initialize\x0a\x09builder := RelationalTowersBuilder new.",
messageSends: ["new"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.RelationalTowersBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function (){
var self=this;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RelationalTowersBuilderTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@builder"]=_st($RelationalTowersBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.RelationalTowersBuilderTest)})},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09builder := RelationalTowersBuilder new.",
messageSends: ["setUp", "new"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.RelationalTowersBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssociation",
category: 'tests',
fn: function (){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._label_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._name())._asString();
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
_st(self["@builder"])._height_("numberOfMethods");
_st(self["@builder"])._color_("numberOfLinesOfCode");
_st(self["@builder"])._onLeftAndRight_(_st($Number())._withAllSubclasses());
_st(self["@builder"])._edgesTo_("allSubclasses");
self._assert_equals_(_st(_st(self["@builder"])._left())._size(),_st(_st(self["@builder"])._right())._size());
self._assert_equals_(_st(_st(_st(_st(self["@builder"])._left())._first())._allEdgesFrom())._size(),(0));
self._assert_equals_(_st(self["@builder"])._distance(),(400));
return self}, function($ctx1) {$ctx1.fill(self,"testAssociation",{},smalltalk.RelationalTowersBuilderTest)})},
args: [],
source: "testAssociation\x0a\x09builder label: [ :c | c name asString].\x0a\x09builder height: #numberOfMethods.\x0a\x09builder color: #numberOfLinesOfCode.\x0a\x09builder onLeftAndRight: Number withAllSubclasses.\x0a\x09builder edgesTo: #allSubclasses.\x0a\x09\x0a\x09self assert: builder left size equals: (builder right size). \x0a\x09self assert: builder left first allEdgesFrom size equals: 0.\x0a\x09self assert: builder distance equals: 400.",
messageSends: ["label:", "asString", "name", "height:", "color:", "onLeftAndRight:", "withAllSubclasses", "edgesTo:", "assert:equals:", "size", "left", "right", "allEdgesFrom", "first", "distance"],
referencedClasses: ["Number"]
}),
smalltalk.RelationalTowersBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testConstruction",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._models_(["a","b","c"]);
_st(self["@builder"])._edgesTo_("yourself");
self._assert_equals_(_st(self["@builder"])._labelLeft(),"asString");
self._assert_equals_(_st(_st(self["@builder"])._left())._size(),_st(_st(self["@builder"])._right())._size());
self._assert_equals_(_st(self["@builder"])._viewWidth(),(408));
self._assert_equals_(_st(self["@builder"])._legend(),"Relational Towers");
return self}, function($ctx1) {$ctx1.fill(self,"testConstruction",{},smalltalk.RelationalTowersBuilderTest)})},
args: [],
source: "testConstruction\x0a\x09builder models: { 'a' . 'b' . 'c' }.\x0a\x09builder edgesTo: #yourself.\x0a\x09\x0a\x09self assert: builder labelLeft equals: #asString. \x0a\x09self assert: builder left size equals: builder right size. \x0a\x09self assert: builder viewWidth equals: 408. \x0a\x09self assert: builder legend equals: 'Relational Towers'.",
messageSends: ["models:", "edgesTo:", "assert:equals:", "labelLeft", "size", "left", "right", "viewWidth", "legend"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilderTest);



