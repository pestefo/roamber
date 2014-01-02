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



smalltalk.addClass('RelationalTowersBuilder', smalltalk.Object, ['view', 'models', 'title', 'legend', 'body', 'bodyElement', 'overBody', 'left', 'right', 'labelLeft', 'labelRight', 'colorLeft', 'colorRight', 'edgeColor', 'viewWidth', 'distance', 'direction', 'popups', 'popupElement', 'heightLeft', 'heightRight', 'width', 'lineShape', 'edges', 'shadowEdges'], 'RelationalTowersBuilder');
smalltalk.RelationalTowersBuilder.comment="A RelationalTowersBuilder is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09body:\x09\x09<Object>\x0a\x09bodyElement:\x09\x09<Object>\x0a\x09colorLeft:\x09\x09<Object>\x0a\x09colorRight:\x09\x09<Object>\x0a\x09direction:\x09\x09<Object>\x0a\x09distance:\x09\x09<Object>\x0a\x09edgeColor:\x09\x09<Object>\x0a\x09edges:\x09\x09<Object>\x0a\x09heightLeft:\x09\x09<Object>\x0a\x09heightRight:\x09\x09<Object>\x0a\x09labelLeft:\x09\x09<Object>\x0a\x09labelRight:\x09\x09<Object>\x0a\x09left:\x09\x09<Object>\x0a\x09legend:\x09\x09<Object>\x0a\x09lineShape:\x09\x09<Object>\x0a\x09models:\x09\x09<Object>\x0a\x09popupElement:\x09\x09<Object>\x0a\x09popups:\x09\x09<Object>\x0a\x09right:\x09\x09<Object>\x0a\x09shadowEdges:\x09\x09<Object>\x0a\x09title:\x09\x09<Object>\x0a\x09view:\x09\x09<Object>\x0a\x09viewWidth:\x09\x09<Object>\x0a\x09width:\x09\x09<Object>\x0a\x0abody\x0a\x09- xxxxx\x0a\x0abodyElement\x0a\x09- xxxxx\x0a\x0acolorLeft\x0a\x09- xxxxx\x0a\x0acolorRight\x0a\x09- xxxxx\x0a\x0adirection\x0a\x09- xxxxx\x0a\x0adistance\x0a\x09- xxxxx\x0a\x0aedgeColor\x0a\x09- xxxxx\x0a\x0aedges\x0a\x09- xxxxx\x0a\x0aheightLeft\x0a\x09- xxxxx\x0a\x0aheightRight\x0a\x09- xxxxx\x0a\x0alabelLeft\x0a\x09- xxxxx\x0a\x0alabelRight\x0a\x09- xxxxx\x0a\x0aleft\x0a\x09- xxxxx\x0a\x0alegend\x0a\x09- xxxxx\x0a\x0alineShape\x0a\x09- xxxxx\x0a\x0amodels\x0a\x09- xxxxx\x0a\x0apopupElement\x0a\x09- xxxxx\x0a\x0apopups\x0a\x09- xxxxx\x0a\x0aright\x0a\x09- xxxxx\x0a\x0ashadowEdges\x0a\x09- xxxxx\x0a\x0atitle\x0a\x09- xxxxx\x0a\x0aview\x0a\x09- xxxxx\x0a\x0aviewWidth\x0a\x09- xxxxx\x0a\x0awidth\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addLinesfrom:toAll:from:color:",
category: 'edge-management',
fn: function (aNode,aCollection,anotherCollection,aColor){
var self=this;
var at,ce1,ce2,p1,p2,lines;
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
_st(aCollection)._do_((function(l){
var ed;
return smalltalk.withContext(function($ctx2) {
p2=self._controlPoint_with_(aNode,l);
p2;
ce2=self._controlElement_(p2);
ce2;
p1=self._controlPoint_with_(l,aNode);
p1;
ce1=self._controlElement_(p1);
ce1;
ed=_st(_st($ROEdge())._from_to_(aNode,l)).__plus(self._splineLine_with_with_color_(at,ce1,ce2,aColor));
ed;
_st(lines)._add_(ed);
return _st(self["@view"])._add_(ed);
}, function($ctx2) {$ctx2.fillBlock({l:l,ed:ed},$ctx1)})}));
_st(self._view())._signalUpdate();
$2=lines;
return $2;
}, function($ctx1) {$ctx1.fill(self,"addLinesfrom:toAll:from:color:",{aNode:aNode,aCollection:aCollection,anotherCollection:anotherCollection,aColor:aColor,at:at,ce1:ce1,ce2:ce2,p1:p1,p2:p2,lines:lines},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection", "anotherCollection", "aColor"],
source: "addLinesfrom: aNode toAll: aCollection from: anotherCollection color: aColor\x0a\x09| at ce1 ce2 p1 p2 lines |\x0a\x09lines := OrderedCollection new.\x0a\x09anotherCollection = left\x0a\x09\x09ifTrue: [ at := RORightBorderAttachPoint instance ]\x0a\x09\x09ifFalse: [ at := ROLeftBorderAttachPoint instance ].\x0a\x09aCollection\x0a\x09\x09do: [ :l | | ed |\x0a\x09\x09\x09p2 := self controlPoint: aNode with: l.\x0a\x09\x09\x09ce2 := self controlElement: p2.\x0a\x09\x09\x09p1 := self controlPoint: l with: aNode.\x0a\x09\x09\x09ce1 := self controlElement: p1.\x0a\x09\x09\x09ed := (ROEdge from: aNode to: l) + (self splineLine: at\x09with: ce1 with: ce2\x09color: aColor).\x09\x0a\x09\x09\x09lines add: ed.\x0a\x09\x09\x09view add: ed ].\x0a\x09self view signalUpdate.\x0a\x09^lines",
messageSends: ["new", "ifTrue:ifFalse:", "instance", "=", "do:", "controlPoint:with:", "controlElement:", "+", "splineLine:with:with:color:", "from:to:", "add:", "signalUpdate", "view"],
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
var $1,$2,$3;
$1=_st(_st(element)._allEdgesFrom())._isEmpty();
if(! smalltalk.assert($1)){
pop=_st(self._popupElement())._value_(element);
pop;
$2=_st(_st(pop)._model()).__eq((1));
if(! smalltalk.assert($2)){
_st(self["@popups"])._at_ifPresent_ifAbsent_(element,(function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v)._hide();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@popups"])._at_put_(element,pop);
_st(self._view())._add_(pop);
self._stickTop_on_from_(pop,element,aCollection);
$3=_st(aCollection).__eq(self["@left"]);
if(smalltalk.assert($3)){
return _st(pop)._translateBy_(_st(_st(_st(_st(element)._width()).__plus(_st(pop)._width())).__plus((5))).__at(_st(_st(_st(element)._height()).__slash((2))).__minus(_st(pop)._height())));
} else {
return _st(pop)._translateBy_(_st(_st(_st(_st(_st(element)._width()).__plus(_st(pop)._width())).__plus((5)))._negated()).__at(_st(_st(_st(element)._height()).__slash((2))).__minus(_st(pop)._height())));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"addPopup:from:",{element:element,aCollection:aCollection,pop:pop},smalltalk.RelationalTowersBuilder)})},
args: ["element", "aCollection"],
source: "addPopup: element from: aCollection\x0a\x09| pop |\x0a\x09element allEdgesFrom isEmpty \x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09pop := self popupElement value: element.\x0a\x09\x09\x09pop model = 1 ifFalse: [  \x0a\x09\x09\x09\x09popups at: element \x0a\x09\x09\x09\x09ifPresent: [:v |  v hide\x22self view add: v\x22 ]\x0a\x09\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09\x09popups at: element put: pop.\x0a\x09\x09\x09\x09\x09self view add: pop.\x0a\x09\x09\x09\x09\x09self stickTop: pop on: element from: aCollection.\x0a\x09\x09\x09\x09\x09(aCollection = left)\x0a\x09\x09\x09\x09\x09\x09ifTrue:  [ pop translateBy: (element width + (pop width) + 5) @ ((element height / 2) - (pop height))]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ pop translateBy: (element width + (pop width) + 5) negated @ ((element height / 2) - (pop height))]]]].",
messageSends: ["ifFalse:", "value:", "popupElement", "at:ifPresent:ifAbsent:", "hide", "at:put:", "add:", "view", "stickTop:on:from:", "ifTrue:ifFalse:", "translateBy:", "@", "-", "height", "/", "+", "width", "negated", "=", "model", "isEmpty", "allEdgesFrom"],
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
var $1,$2,$3;
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
return _st(aBlock)._value_(_st(l)._model());
}, function($ctx2) {$ctx2.fillBlock({l:l},$ctx1)})}));
_st(aux)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$2=_st(e)._isString();
if(smalltalk.assert($2)){
return _st(values)._add_(e);
} else {
return _st(values)._addAll_(e);
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(values)._removeDuplicates();
$3=_st(otherCollection).__eq(self["@left"]);
if(smalltalk.assert($3)){
self["@left"]=self._from_in_(values,"left");
self["@left"];
} else {
self["@right"]=self._from_in_(values,"right");
self["@right"];
};
return self}, function($ctx1) {$ctx1.fill(self,"assignMissing:from:",{aBlock:aBlock,aCollection:aCollection,values:values,aux:aux,otherCollection:otherCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "aCollection"],
source: "assignMissing: aBlock from: aCollection\x0a\x09| values aux otherCollection |\x0a\x09aCollection = left\x0a\x09\x09ifTrue: [ otherCollection := right ]\x0a\x09\x09ifFalse:[ otherCollection := left ].\x0a\x09values := OrderedCollection new.\x0a\x09aux := aCollection collect: [ :l | (aBlock value: l model) \x22asOrderedCollection\x22 ].\x0a\x09aux do: [ :e | e isString ifTrue: [values add: e] ifFalse: [values addAll: e] ].\x0a\x09values removeDuplicates.\x0a\x09otherCollection = left\x0a\x09\x09ifTrue: [ left := (self from: values in: 'left') ]\x0a\x09\x09ifFalse:[ right := (self from: values in: 'right')].",
messageSends: ["ifTrue:ifFalse:", "=", "new", "collect:", "value:", "model", "do:", "add:", "addAll:", "isString", "removeDuplicates", "from:in:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "body",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@body"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"body",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "body\x0a\x09^body",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "body:",
category: 'accessing',
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@body"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"body:",{aText:aText},smalltalk.RelationalTowersBuilder)})},
args: ["aText"],
source: "body: aText\x0a\x09body := aText",
messageSends: [],
referencedClasses: []
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
selector: "controlPoint:with:",
category: 'edge-management',
fn: function (aNode,anotherNode){
var self=this;
var p1,p2;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
p1=_st(aNode)._absolutePosition();
p2=_st(anotherNode)._absolutePosition();
$2=_st(_st(p1)._x()).__lt(_st(p2)._x());
if(smalltalk.assert($2)){
$1=_st(_st(_st(p1)._x()).__plus(_st(aNode)._width())).__at(_st(_st(p2)._y()).__plus(_st(_st(anotherNode)._height()).__slash((2))));
} else {
$1=_st(_st(_st(p1)._x()).__plus(_st(aNode)._width())).__at(_st(p2)._y());
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlPoint:with:",{aNode:aNode,anotherNode:anotherNode,p1:p1,p2:p2},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "anotherNode"],
source: "controlPoint: aNode with: anotherNode\x0a\x09| p1 p2 |\x0a\x09p1 := aNode absolutePosition.\x0a\x09p2 := anotherNode absolutePosition.\x0a\x09^(p1 x < p2 x)\x0a\x09\x09ifTrue: [ (p1 x + aNode width) @ (p2 y + (anotherNode height /2)) ]\x0a\x09\x09ifFalse: [ (p1 x + aNode width) @ (p2 y) ]",
messageSends: ["absolutePosition", "ifTrue:ifFalse:", "@", "+", "/", "height", "y", "width", "x", "<"],
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
selector: "edgeColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edgeColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeColor",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "edgeColor\x0a\x09^edgeColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edgeColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"edgeColor:",{aColor:aColor},smalltalk.RelationalTowersBuilder)})},
args: ["aColor"],
source: "edgeColor: aColor\x0a\x09edgeColor := aColor",
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
self._edgesToLeft_(aBlock);
self._edgesToRight_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToLeft:edgesToRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock", "anotherBlock"],
source: "edgesToLeft: aBlock edgesToRight: anotherBlock\x0a\x09self edgesToLeft: aBlock.\x0a\x09self edgesToRight: anotherBlock.",
messageSends: ["edgesToLeft:", "edgesToRight:"],
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
_st(a)._body_("a b c a b c");
_st(a)._edgesTo_("yourself");
_st(a)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example1",{a:a},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example1\x0a\x09\x22\x0a\x09self new example1\x0a\x09\x22\x0a\x09|a |\x0a\x09a := RelationalTowersBuilder new.\x0a\x09a left: { 'a' . 'b' . 'c' }.\x0a\x09a body: 'a b c a b c'.\x0a\x09a edgesTo: #yourself.\x0a\x09a open.",
messageSends: ["new", "left:", "body:", "edgesTo:", "open"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example10",
category: 'examples',
fn: function (){
var self=this;
var builder,maiden1,maiden2;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
maiden1=[[(2013),(46),["United States","Germany","United Kingdom","Brazil","Spain","Russia","France","Poland","Sweden","Austria","Finland","Argentina","Switzerland","Romania","Paraguay","Netherlands","Turkey","Chile","Portugal","Slovakia","Czech Republic","Belgium","Croatia","Italy","Mexico"]],[(2012),(34),["United States","Canada"]],[(2011),(63),["United Kingdom","Brazil","Australia","Germany","France","Russia","Indonesia","United States","Mexico","Colombia","Netherlands","Peru","Poland","Denmark","Czech Republic","Sweden","Singapore","Argentina","Austria","Belgium","Chile","Greece","Norway","Puerto Rico","Turkey","Finland","South Korea","Switzerland","Portugal","Italy","Spain"]],[(2010),(36),["United States","Canada","Italy","Ireland","Belgium","United Kingdom","Spain","Sweden","Germany","Finland","Norway","Hungary","Romania"]],[(2009),(22),["Brazil","Mexico","New Zealand","Colombia","Ecuador","Serbia","India","Chile","United Arab Emirates","Peru","Argentina","United States","Venezuela","Costa Rica"]],[(2008),(68),["United States","Canada","Australia","Mexico","Brazil","Japan","Sweden","Norway","France","Finland","Argentina","Puerto Rico","Czech Republic","Chile","Poland","Hungary","Portugal","Costa Rica","Romania","Colombia","Greece","United Kingdom","Croatia","Denmark","Netherlands","Russia","India","Switzerland","Germany","Italy","Belgium","Spain"]],[(2007),(16),["United Kingdom","Germany","Italy","Slovenia","Belgium","India","Greece","United Arab Emirates","Spain","Serbia","Netherlands","Czech Republic","Bulgaria"]],[(2006),(45),["United Kingdom","United States","Japan","Sweden","Finland","Canada","Norway","Italy","Denmark","Germany","Switzerland","Ireland","France","Spain","Netherlands"]],[(2005),(46),["United States","United Kingdom","Germany","Finland","Norway","Canada","Portugal","Belgium","Czech Republic","Switzerland","Netherlands","Greece","Austria","Sweden","Poland","Ireland","Iceland","Italy","France","Spain"]],[(2004),(14),["United States","Japan","Brazil","Canada","Argentina","Chile"]],[(2003),(90),["United States","Germany","United Kingdom","Spain","France","Sweden","Italy","Canada","Belgium","Czech Republic","Denmark","Switzerland","Finland","Hungary","Netherlands","Poland","Norway","Croatia","Portugal","Slovakia","Austria","Ireland"]],[(2002),(4),["United Kingdom"]],[(2001),(6),["United Kingdom","Argentina","Brazil","Mexico","Chile"]],[(2000),(79),["United States","Japan","United Kingdom","Germany","Canada","Spain","France","Poland","Czech Republic","Switzerland","Sweden","Slovenia","Portugal","Norway","Greece","Belgium","Netherlands","Hungary","Denmark","Slovakia","Finland","Italy","Austria","Estonia"]],[(1999),(28),["United States","Canada","Germany","Spain","Sweden","Italy","Netherlands","Greece","France","Finland"]],[(1998),(87),["United States","Germany","United Kingdom","France","Spain","Italy","Japan","Brazil","Canada","Mexico","Turkey","Greece","Argentina","Hungary","Poland","Finland","Czech Republic","Portugal","Malta","Belgium","Denmark","Sweden","Switzerland","Netherlands"]],[(1996),(75),["United States","France","Japan","Spain","Italy","Brazil","Canada","Argentina","United Kingdom","Greece","Mexico","Slovenia","Denmark","Netherlands","Chile","Ireland","Colombia","Finland","Belgium"]],[(1995),(55),["Germany","Italy","United Kingdom","Spain","Israel","South Africa","Sweden","Switzerland","Greece","Denmark","Norway","Romania","Belgium","Finland","France","Portugal","Bulgaria","Austria","Poland","Slovakia","Netherlands","Hungary","Czech Republic"]],[(1993),(45),["Italy","United Kingdom","Germany","France","Russia","Spain","Czech Republic","Slovakia","Sweden","Netherlands","Ireland","Austria","Switzerland","Portugal"]],[(1992),(65),["United States","Japan","Canada","Spain","France","Mexico","Brazil","Australia","United Kingdom","Venezuela","Sweden","Italy","Germany","Belgium","Argentina","Puerto Rico","Finland","Norway","Denmark","Switzerland","Uruguay","Iceland","Netherlands","New Zealand"]],[(1991),(50),["United States","Canada","Japan","Switzerland","Denmark","France"]],[(1990),(56),["United Kingdom","Germany","Italy","Spain","Netherlands","Belgium","France","Sweden","Finland","Ireland","Portugal","Norway","Denmark"]],[(1988),(97),["United States","United Kingdom","Canada","Germany","Spain","France","Sweden","Finland","Portugal","Italy","Belgium","Hungary","Denmark","Netherlands","Austria","Switzerland","Norway","Greece"]],[(1987),(85),["United States","Canada","Japan"]],[(1986),(66),["United Kingdom","Germany","Poland","France","Italy","Sweden","Spain","Austria","Serbia","Portugal","Hungary","Switzerland","Croatia","Slovenia","Netherlands","Norway","Belgium","Finland"]],[(1985),(104),["United States","Japan","Australia","Brazil","United Kingdom"]],[(1984),(87),["United Kingdom","Canada","Germany","United States","France","Poland","Italy","Spain","Portugal","Sweden","Slovenia","Switzerland","Finland","Hungary","Belgium","Netherlands","Austria","Denmark","Serbia"]],[(1983),(137),["United States","United Kingdom","Germany","Canada","France","Spain","Sweden","Netherlands","Denmark","Belgium","Finland","Switzerland","Norway"]],[(1982),(181),["United States","United Kingdom","France","Canada","Australia","Japan","Germany","Spain","Belgium","Switzerland","Netherlands"]],[(1981),(137),["United States","United Kingdom","France","Germany","Italy","Sweden","Netherlands","Japan","Canada","Denmark","Belgium","Serbia","Switzerland"]],[(1980),(157),["United Kingdom","Germany","Italy","France","Belgium","Sweden","Portugal","Netherlands","Finland","Norway","Switzerland","Ireland","Denmark"]],[(1979),(89),["United Kingdom"]],[(1978),(4),["United Kingdom"]],[(1977),(38),["United Kingdom"]],[(1976),(34),["United Kingdom"]]];
maiden2=["United States".__minus_gt((686)),"United Kingdom".__minus_gt((538)),"Germany".__minus_gt((154)),"Canada".__minus_gt((111)),"France".__minus_gt((109)),"Japan".__minus_gt((70)),"Italy".__minus_gt((70)),"Spain".__minus_gt((68)),"Sweden".__minus_gt((39)),"Australia".__minus_gt((32)),"Brazil".__minus_gt((32)),"Netherlands".__minus_gt((28)),"Finland".__minus_gt((24)),"Belgium".__minus_gt((24)),"Poland".__minus_gt((23)),"Switzerland".__minus_gt((22)),"Denmark".__minus_gt((19)),"Norway".__minus_gt((18)),"Mexico".__minus_gt((17)),"Portugal".__minus_gt((16)),"Greece".__minus_gt((13)),"Czech Republic".__minus_gt((11)),"Austria".__minus_gt((11)),"Hungary".__minus_gt((10)),"Argentina".__minus_gt((10)),"Ireland".__minus_gt((8)),"Russia".__minus_gt((8)),"Chile".__minus_gt((7)),"Serbia".__minus_gt((5)),"Slovenia".__minus_gt((5)),"Slovakia".__minus_gt((5)),"Croatia".__minus_gt((4)),"Romania".__minus_gt((4)),"Colombia".__minus_gt((4)),"Turkey".__minus_gt((4)),"New Zealand".__minus_gt((3)),"Venezuela".__minus_gt((3)),"India".__minus_gt((3)),"Israel".__minus_gt((3)),"South Africa".__minus_gt((3)),"Puerto Rico".__minus_gt((3)),"United Arab Emirates".__minus_gt((2)),"Indonesia".__minus_gt((2)),"Bulgaria".__minus_gt((2)),"Peru".__minus_gt((2)),"Iceland".__minus_gt((2)),"Costa Rica".__minus_gt((2)),"South Korea".__minus_gt((1)),"Uruguay".__minus_gt((1)),"Ecuador".__minus_gt((1)),"Estonia".__minus_gt((1)),"Malta".__minus_gt((1)),"Singapore".__minus_gt((1)),"Paraguay".__minus_gt((1))];
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._title_("Iron Maiden");
_st(builder)._legend_("Concerts around the word per year");
_st(builder)._body_("Iron Maiden are an English heavy metal band \x0aformed in Leyton, east London, in 1975 by \x0abassist and primary songwriter Steve Harris. \x0aThe band's discography has grown to \x0athirty-seven albums, including fifteen studio \x0aalbums, eleven live albums, four EPs, and \x0aseven compilations.\x0a\x0aPioneers of the New Wave of British Heavy \x0aMetal, Iron Maiden achieved initial success \x0aduring the early 1980s. After several line-up \x0achanges, the band went on to release a \x0aseries of US and UK platinum and gold \x0aalbums, including 1982's The Number of the \x0aBeast, 1983's Piece of Mind, 1984's \x0aPowerslave, 1985's live release Live After \x0aDeath, 1986's Somewhere in Time and \x0a1988's Seventh Son of a Seventh Son. \x0aSince the return of lead vocalist Bruce \x0aDickinson and guitarist Adrian Smith in 1999, \x0athe band have undergone a resurgence in \x0apopularity, with their latest studio offering, \x0aThe Final Frontier, peaking at No. 1 in 28 \x0adifferent countries and receiving \x0awidespread critical acclaim.\x0a\x0aConsidered one of the most successful \x0aheavy metal bands in history, Iron Maiden \x0ahave sold over 85 million records worldwide \x0awith little radio or television support. The \x0aband won the Ivor Novello Award for \x0ainternational achievement in 2002, and were \x0aalso inducted into the Hollywood RockWalk in \x0aSunset Boulevard, Los Angeles, California \x0aduring their United States tour in 2005. As of \x0aOctober 2013, the band have played over \x0a2000 live shows throughout their career. For \x0athe past 35 years, the band have been \x0asupported by their famous mascot, \x22Eddie\x22, \x0awho has appeared on almost all of their album \x0aand single covers, as well as in their live \x0ashows.");
_st(builder)._colorLeft_("second");
_st(builder)._colorRight_("value");
_st(builder)._heightLeft_("second");
_st(builder)._heightRight_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v)._value()).__slash((10));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st(builder)._left_(maiden1);
_st(builder)._right_(maiden2);
_st(builder)._labelLeft_("first");
_st(builder)._labelRight_("key");
_st(builder)._edgesTo_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._third())._includes_(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example10",{builder:builder,maiden1:maiden1,maiden2:maiden2},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example10\x0a\x09\x22\x0a\x09self new example10\x0a\x09\x22\x0a\x09|builder maiden1 maiden2 |\x0a\x09\x0a\x09maiden1 := {{2013 . 46 . { 'United States' . 'Germany' . 'United Kingdom' . 'Brazil' . 'Spain' . 'Russia' . 'France' . 'Poland' . 'Sweden' . 'Austria' . 'Finland' . 'Argentina' . 'Switzerland' . 'Romania' . 'Paraguay' . 'Netherlands' . 'Turkey' . 'Chile' . 'Portugal' . 'Slovakia' . 'Czech Republic' . 'Belgium' . 'Croatia' . 'Italy' . 'Mexico' }}.\x0a{2012 . 34 . { 'United States' . 'Canada' }} .\x0a{2011 . 63 . { 'United Kingdom'\x09. 'Brazil' . 'Australia' . 'Germany' . 'France' . 'Russia' . 'Indonesia' . 'United States' . 'Mexico' . 'Colombia' . 'Netherlands' . 'Peru' . 'Poland' . 'Denmark' . 'Czech Republic' . 'Sweden' . 'Singapore' . 'Argentina' . 'Austria' . 'Belgium' . 'Chile' . 'Greece' . 'Norway' . 'Puerto Rico' . 'Turkey' . 'Finland' . 'South Korea'\x09. 'Switzerland' . 'Portugal' . 'Italy' . 'Spain' }} .\x0a{2010 . 36 . { 'United States' . 'Canada' . 'Italy' . 'Ireland' . 'Belgium' . 'United Kingdom' . 'Spain' . 'Sweden' . 'Germany' . 'Finland' . 'Norway' . 'Hungary' .  'Romania' }} .\x0a{2009 . 22 . { 'Brazil' . 'Mexico' . 'New Zealand' . 'Colombia' . 'Ecuador' . 'Serbia' . 'India' . 'Chile' . 'United Arab Emirates' . 'Peru' . 'Argentina' . 'United States' . 'Venezuela' . 'Costa Rica'}} .\x0a{2008 . 68 . { 'United States' . 'Canada' . 'Australia' . 'Mexico' . 'Brazil' . 'Japan' . 'Sweden' . 'Norway' . 'France' . 'Finland' . 'Argentina' . 'Puerto Rico' . 'Czech Republic' . 'Chile' . 'Poland' . 'Hungary' . 'Portugal' . 'Costa Rica' . 'Romania' . 'Colombia' . 'Greece' . 'United Kingdom' . 'Croatia' . 'Denmark' . 'Netherlands' . 'Russia' . 'India' . 'Switzerland' . 'Germany' . 'Italy' . 'Belgium' . 'Spain' }} .\x0a{2007 . 16 . { 'United Kingdom' . 'Germany' . 'Italy' . 'Slovenia' . 'Belgium' . 'India' . 'Greece' . 'United Arab Emirates' . 'Spain' . 'Serbia' . 'Netherlands' . 'Czech Republic' . 'Bulgaria' }} .\x0a{2006 . 45 . { 'United Kingdom'\x09. 'United States' . 'Japan' . 'Sweden' . 'Finland' . 'Canada' . 'Norway' . 'Italy' . 'Denmark' . 'Germany' . 'Switzerland' . 'Ireland' . 'France' . 'Spain' . 'Netherlands' }} .\x0a{2005 . 46 . { 'United States' . 'United Kingdom' . 'Germany' . 'Finland' . 'Norway' . 'Canada' . 'Portugal' . 'Belgium' . 'Czech Republic' . 'Switzerland' . 'Netherlands' . 'Greece' . 'Austria' . 'Sweden' . 'Poland' . 'Ireland' . 'Iceland' . 'Italy' . 'France' . 'Spain' }} .\x0a{2004 . 14 . { 'United States' . 'Japan' . 'Brazil' . 'Canada' . 'Argentina' . 'Chile' }} .\x0a{2003 . 90 . { 'United States' . 'Germany' . 'United Kingdom' . 'Spain' . 'France' . 'Sweden' . 'Italy' . 'Canada' . 'Belgium' . 'Czech Republic' . 'Denmark' . 'Switzerland' . 'Finland' . 'Hungary' . 'Netherlands' . 'Poland' . 'Norway' . 'Croatia' . 'Portugal' . 'Slovakia' . 'Austria' . 'Ireland'}} .\x0a{2002 . 4 . { 'United Kingdom' }} . \x0a{2001 . 6 . { 'United Kingdom' . 'Argentina' . 'Brazil' . 'Mexico' . 'Chile' }} .\x0a{2000 . 79 . { 'United States' . 'Japan' . 'United Kingdom' . 'Germany' . 'Canada' . 'Spain' . 'France' . 'Poland' . 'Czech Republic' . 'Switzerland' . 'Sweden' . 'Slovenia' . 'Portugal' . 'Norway' . 'Greece' . 'Belgium' . 'Netherlands' . 'Hungary' . 'Denmark' . 'Slovakia' . 'Finland' . 'Italy' . 'Austria' . 'Estonia' }} .\x0a{1999 . 28 . { 'United States' . 'Canada' . 'Germany' . 'Spain' . 'Sweden' . 'Italy' . 'Netherlands' . 'Greece' . 'France' . 'Finland'}} .\x0a{1998 . 87 .  {'United States' . 'Germany' . 'United Kingdom' . 'France' . 'Spain' . 'Italy' . 'Japan' . 'Brazil' . 'Canada' . 'Mexico' . 'Turkey' . 'Greece' . 'Argentina' . 'Hungary' . 'Poland' . 'Finland' . 'Czech Republic' . 'Portugal' . 'Malta' . 'Belgium' . 'Denmark' . 'Sweden' . 'Switzerland' . 'Netherlands' }} .\x0a{1996 . 75 . {'United States' . 'France' . 'Japan' . 'Spain' . 'Italy' . 'Brazil' . 'Canada' . 'Argentina' . 'United Kingdom' . 'Greece' . 'Mexico' . 'Slovenia' . 'Denmark' . 'Netherlands' . 'Chile' . 'Ireland' . 'Colombia' . 'Finland' . 'Belgium' }} .\x0a{1995 . 55 . {'Germany' . 'Italy' . 'United Kingdom' . 'Spain' . 'Israel' . 'South Africa' . 'Sweden' . 'Switzerland' . 'Greece' . 'Denmark' . 'Norway' . 'Romania' . 'Belgium' . 'Finland' . 'France' . 'Portugal' . 'Bulgaria' . 'Austria' . 'Poland' . 'Slovakia' . 'Netherlands' . 'Hungary' . 'Czech Republic'}} .\x0a{1993  . 45 . {'Italy'  . 'United Kingdom' . 'Germany' . 'France' . 'Russia' . 'Spain' . 'Czech Republic' . 'Slovakia' . 'Sweden' . 'Netherlands' . 'Ireland' . 'Austria' . 'Switzerland' . 'Portugal' }} .\x0a{1992  . 65 . {'United States' . 'Japan' . 'Canada' . 'Spain' . 'France' . 'Mexico' . 'Brazil' . 'Australia' . 'United Kingdom' . 'Venezuela' . 'Sweden' . 'Italy' . 'Germany' . 'Belgium' . 'Argentina' . 'Puerto Rico' . 'Finland' . 'Norway' . 'Denmark' . 'Switzerland' . 'Uruguay' . 'Iceland' . 'Netherlands' . 'New Zealand' }} .\x0a{1991 . 50 . {'United States' . 'Canada' . 'Japan' . 'Switzerland' . 'Denmark' . 'France'}} .\x0a{1990 . 56 . {'United Kingdom' . 'Germany' . 'Italy' . 'Spain' . 'Netherlands' . 'Belgium' . 'France' . 'Sweden' . 'Finland' . 'Ireland' . 'Portugal' . 'Norway' . 'Denmark' }} .\x0a{1988 . 97 . {'United States' . 'United Kingdom' . 'Canada' . 'Germany' . 'Spain' . 'France' . 'Sweden' . 'Finland' . 'Portugal' . 'Italy' . 'Belgium' . 'Hungary' . 'Denmark' . 'Netherlands' . 'Austria'\x09. 'Switzerland' . 'Norway' . 'Greece' }} .\x0a{1987  . 85 .  {'United States' . 'Canada' . 'Japan'}} .\x0a{1986  . 66 .  {'United Kingdom' . 'Germany' . 'Poland' . 'France' . 'Italy' . 'Sweden' . 'Spain' . 'Austria' . 'Serbia' . 'Portugal' . 'Hungary' . 'Switzerland' . 'Croatia' . 'Slovenia' . 'Netherlands' . 'Norway' . 'Belgium' . 'Finland' }} .\x0a{1985 . 104 .  {'United States' . 'Japan' . 'Australia' . 'Brazil' . 'United Kingdom' }} .\x0a{1984 . 87 . {'United Kingdom' . 'Canada' . 'Germany' . 'United States' . 'France' . 'Poland' . 'Italy' . 'Spain' . 'Portugal' . 'Sweden' . 'Slovenia' . 'Switzerland' . 'Finland' . 'Hungary' . 'Belgium' . 'Netherlands' . 'Austria' . 'Denmark' . 'Serbia' }} .\x0a{1983 . 137 .  {'United States' . 'United Kingdom' . 'Germany' . 'Canada' . 'France' . 'Spain' . 'Sweden' . 'Netherlands' . 'Denmark' . 'Belgium' . 'Finland' . 'Switzerland' . 'Norway' }} .\x0a{1982  . 181 . {'United States' . 'United Kingdom' . 'France' . 'Canada' . 'Australia' . 'Japan' . 'Germany' . 'Spain' . 'Belgium' . 'Switzerland' . 'Netherlands' }} .\x0a{1981  . 137 .  {'United States' . 'United Kingdom' . 'France' . 'Germany' . 'Italy' . 'Sweden' . 'Netherlands' . 'Japan' . 'Canada' . 'Denmark' . 'Belgium' . 'Serbia' . 'Switzerland' }} .\x0a{1980  . 157 .\x09{'United Kingdom' . 'Germany' . 'Italy' . 'France' . 'Belgium' . 'Sweden' . 'Portugal' . 'Netherlands' . 'Finland' . 'Norway' . 'Switzerland' . 'Ireland' .\x09'Denmark' }} .\x0a{ 1979 . 89 . { 'United Kingdom' }} .\x0a{ 1978 . 4 . { 'United Kingdom' }} .\x0a{ 1977 . 38 . { 'United Kingdom' }} .\x0a{ 1976 . 34 . { 'United Kingdom' }}}.\x0a\x09maiden2 := {'United States' -> 686 . 'United Kingdom' -> 538 . 'Germany' -> 154 . 'Canada' -> 111 . 'France' -> 109 . 'Japan' -> 70 . 'Italy' -> 70 . 'Spain' -> 68 . 'Sweden'\x09-> 39 . 'Australia' -> 32 . 'Brazil' -> 32 . 'Netherlands' -> 28 . 'Finland' -> 24 . 'Belgium' -> 24 . 'Poland' -> 23 . 'Switzerland' -> 22 . 'Denmark' -> 19 . 'Norway' -> 18 . 'Mexico' -> 17 . 'Portugal' -> 16 . 'Greece' -> 13 . 'Czech Republic' -> 11 . 'Austria' -> 11 . 'Hungary' -> 10 . 'Argentina' -> 10 . 'Ireland' -> 8 . 'Russia' -> 8 . 'Chile' -> 7 . 'Serbia' -> 5 . 'Slovenia' -> 5 . 'Slovakia' -> 5 . 'Croatia' -> 4 . 'Romania' -> 4 .'Colombia' -> 4 . 'Turkey' -> 4 . 'New Zealand' -> 3 . 'Venezuela' -> 3 . 'India' -> 3 . 'Israel' -> 3 . 'South Africa' -> 3 . 'Puerto Rico' -> 3. 'United Arab Emirates' -> 2 . 'Indonesia' -> 2 . 'Bulgaria'\x09-> 2 . 'Peru' -> 2 . 'Iceland' -> 2 . 'Costa Rica' -> 2 . 'South Korea' -> 1 . 'Uruguay' -> 1 . 'Ecuador' -> 1 . 'Estonia' -> 1 . 'Malta' -> 1 . 'Singapore' -> 1 . 'Paraguay' -> 1}.\x0a\x09\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder title: 'Iron Maiden'.\x0a\x09builder legend: 'Concerts around the word per year'.\x0a\x09builder body: 'Iron Maiden are an English heavy metal band \x0aformed in Leyton, east London, in 1975 by \x0abassist and primary songwriter Steve Harris. \x0aThe band''s discography has grown to \x0athirty-seven albums, including fifteen studio \x0aalbums, eleven live albums, four EPs, and \x0aseven compilations.\x0a\x0aPioneers of the New Wave of British Heavy \x0aMetal, Iron Maiden achieved initial success \x0aduring the early 1980s. After several line-up \x0achanges, the band went on to release a \x0aseries of US and UK platinum and gold \x0aalbums, including 1982''s The Number of the \x0aBeast, 1983''s Piece of Mind, 1984''s \x0aPowerslave, 1985''s live release Live After \x0aDeath, 1986''s Somewhere in Time and \x0a1988''s Seventh Son of a Seventh Son. \x0aSince the return of lead vocalist Bruce \x0aDickinson and guitarist Adrian Smith in 1999, \x0athe band have undergone a resurgence in \x0apopularity, with their latest studio offering, \x0aThe Final Frontier, peaking at No. 1 in 28 \x0adifferent countries and receiving \x0awidespread critical acclaim.\x0a\x0aConsidered one of the most successful \x0aheavy metal bands in history, Iron Maiden \x0ahave sold over 85 million records worldwide \x0awith little radio or television support. The \x0aband won the Ivor Novello Award for \x0ainternational achievement in 2002, and were \x0aalso inducted into the Hollywood RockWalk in \x0aSunset Boulevard, Los Angeles, California \x0aduring their United States tour in 2005. As of \x0aOctober 2013, the band have played over \x0a2000 live shows throughout their career. For \x0athe past 35 years, the band have been \x0asupported by their famous mascot, \x22Eddie\x22, \x0awho has appeared on almost all of their album \x0aand single covers, as well as in their live \x0ashows.'.\x0a\x09builder colorLeft: #second.\x0a\x09builder colorRight: #value.\x0a\x09builder heightLeft: #second.\x0a\x09builder heightRight: [:v| v value / 10].\x0a\x09builder left: maiden1.\x0a\x09builder right: maiden2.\x0a\x09builder labelLeft: #first.\x0a\x09builder labelRight: #key.\x0a\x09builder edgesTo: [:a :b | a third includes: (b key) ].\x0a\x09builder open.",
messageSends: ["->", "new", "title:", "legend:", "body:", "colorLeft:", "colorRight:", "heightLeft:", "heightRight:", "/", "value", "left:", "right:", "labelLeft:", "labelRight:", "edgesTo:", "includes:", "key", "third", "open"],
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
_st(builder)._octopiEdges();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example4",{builder:builder},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example4\x0a\x09\x22\x0a\x09self new example4\x0a\x09\x22\x0a\x09| builder |\x0a\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder legend: 'Example of a relation between two set of integers'.\x0a\x09builder left: (1 to: 10).\x0a\x09builder right: (1 to: 20).\x0a\x09builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ] edgesToLeft: [ :v | (v / 2) ].\x0a\x09builder octopiEdges.\x0a\x09builder open",
messageSends: ["new", "legend:", "left:", "to:", "right:", "edgesFromLeft:edgesToLeft:", "+", "-", "/", "octopiEdges", "open"],
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
selector: "example9",
category: 'examples',
fn: function (){
var self=this;
var builder,hohoho;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
hohoho=["Afghanistan".__minus_gt("Baba Chaghaloo"),"Albania".__minus_gt("Babadimri"),"Argentina".__minus_gt("Papá Noel"),"Armenia".__minus_gt("Gaghant Baba"),"Belgium".__minus_gt("Pere Noel"),"Bosnia and Herzegovina".__minus_gt("Deda Mraz"),"Bolivia".__minus_gt("Papá Noel"),"Brazil".__minus_gt("Papai Noel"),"Bulgaria".__minus_gt("Dyado Koleda"),"Canada".__minus_gt("Santa Claus"),"Chile".__minus_gt("Viejo Pascuero"),"China".__minus_gt("Dun Che Lao Ren"),"Colombia".__minus_gt("Papá Noel"),"Denmark".__minus_gt("Julemanden"),"Ecuador".__minus_gt("Papá Noel"),"Egypt".__minus_gt("Papa Noël"),"France".__minus_gt("Pere Noel"),"French Canada".__minus_gt("Père Noël"),"Finland".__minus_gt("Joulupukki"),"Germany".__minus_gt("Weihnachtsmann"),"Hawaii".__minus_gt("Kanakaloka"),"Hungary".__minus_gt("Mikulas"),"Iran".__minus_gt("Baba Noel"),"Iraq".__minus_gt("Vader Kersfees"),"Ireland".__minus_gt("Daidí na Nollaig"),"Italy".__minus_gt("Babbo Natale"),"Jamaica".__minus_gt("Santa Claus"),"Japan".__minus_gt("Hoteiosho"),"Lithuania".__minus_gt("Kaledu Senelis"),"Malta".__minus_gt("San Niklaw"),"Netherlands".__minus_gt("Kerstman"),"Norway".__minus_gt("Julenissen"),"Perú".__minus_gt("Papá Noel"),"Poland".__minus_gt("Swiety Mikolaj"),"Portugal".__minus_gt("Pai Natal"),"Romania".__minus_gt("Mos Craciun"),"Russia".__minus_gt("Ded Moroz"),"Serbia".__minus_gt("Deda Mraz"),"Scottish Highlands".__minus_gt("Daidaín na Nollaig"),"South Africa".__minus_gt("Vader Kersfees"),"Spain".__minus_gt("Papá Noel"),"Sweden".__minus_gt("Jultomten"),"Turkey".__minus_gt("Noel Baba"),"United Kingdom".__minus_gt("Father Christmas"),"US".__minus_gt("Santa Claus")];
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._title_("Merry Christmas");
_st(builder)._legend_("Santa Claus over the World");
_st(builder)._colorLeft_(_st($Color())._green());
_st(builder)._colorRight_(_st($Color())._red());
_st(builder)._left_(hohoho);
_st(builder)._labelLeft_("key");
_st(builder)._edgesTo_("value");
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example9",{builder:builder,hohoho:hohoho},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "example9\x0a\x09\x22\x0a\x09self new example9\x0a\x09\x22\x0a\x09|builder hohoho|\x0a\x09\x0a\x09hohoho := {'Afghanistan' -> 'Baba Chaghaloo'.'Albania' -> 'Babadimri'. 'Argentina' -> 'Papá Noel'. 'Armenia' -> 'Gaghant Baba'. 'Belgium' -> 'Pere Noel'. 'Bosnia and Herzegovina' -> 'Deda Mraz'. 'Bolivia' -> 'Papá Noel'. 'Brazil' -> 'Papai Noel'. 'Bulgaria' -> 'Dyado Koleda'. 'Canada' -> 'Santa Claus'. 'Chile' -> 'Viejo Pascuero'. 'China' -> 'Dun Che Lao Ren'. 'Colombia' -> 'Papá Noel'. 'Denmark' -> 'Julemanden'. 'Ecuador' -> 'Papá Noel'. 'Egypt' -> 'Papa Noël'. 'France' -> 'Pere Noel'. 'French Canada' -> 'Père Noël'. 'Finland' -> 'Joulupukki'. 'Germany' -> 'Weihnachtsmann'. 'Hawaii' -> 'Kanakaloka'. 'Hungary' -> 'Mikulas'. 'Iran' -> 'Baba Noel'. 'Iraq' -> 'Vader Kersfees'. 'Ireland' -> 'Daidí na Nollaig'. 'Italy' -> 'Babbo Natale'. 'Jamaica' -> 'Santa Claus'. 'Japan' -> 'Hoteiosho'. 'Lithuania' -> 'Kaledu Senelis'. 'Malta' -> 'San Niklaw'. 'Netherlands' -> 'Kerstman'. 'Norway' -> 'Julenissen'. 'Perú' -> 'Papá Noel'. 'Poland' -> 'Swiety Mikolaj'. 'Portugal' -> 'Pai Natal'. 'Romania' -> 'Mos Craciun'. 'Russia' -> 'Ded Moroz'. 'Serbia' -> 'Deda Mraz'. 'Scottish Highlands' -> 'Daidaín na Nollaig'. 'South Africa' -> 'Vader Kersfees'. 'Spain' -> 'Papá Noel'. 'Sweden' -> 'Jultomten'. 'Turkey' -> 'Noel Baba'. 'United Kingdom' -> 'Father Christmas'. 'US' -> 'Santa Claus'}.\x0a\x09\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder title: 'Merry Christmas'.\x0a\x09builder legend: 'Santa Claus over the World'.\x0a\x09builder colorLeft: (Color green).\x0a\x09builder colorRight: (Color red).\x0a\x09builder left: hohoho.\x0a\x09builder labelLeft: #key.\x0a\x09builder edgesTo: #value.\x0a\x09builder open.",
messageSends: ["->", "new", "title:", "legend:", "colorLeft:", "green", "colorRight:", "red", "left:", "labelLeft:", "edgesTo:", "open"],
referencedClasses: ["RelationalTowersBuilder", "Color"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "from:in:",
category: 'shape-managment',
fn: function (aCollection,aString){
var self=this;
var h,w,dictionary,normalizer,c,color,height;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5;
$1=_st(aString).__eq("left");
if(smalltalk.assert($1)){
color=self._colorLeft();
color;
height=self._heightLeft();
height;
} else {
color=self._colorRight();
color;
height=self._heightRight();
height;
};
$2=color;
if(($receiver = $2) == nil || $receiver == undefined){
color=self._colorRight();
color;
} else {
$2;
};
$3=height;
if(($receiver = $3) == nil || $receiver == undefined){
height=self._heightRight();
height;
} else {
$3;
};
h=(function(v){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(height)._value_(v);
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
$4=_st(color)._isColor();
if(smalltalk.assert($4)){
c=(function(v){
return smalltalk.withContext(function($ctx2) {
return color;
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})});
c;
} else {
dictionary=_st($Dictionary())._new();
dictionary;
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
normalizer;
c=(function(v){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(normalizer)._roValue_(_st(color)._value_(v));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._class())._errorColor();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})});
c;
};
$5=_st(aCollection)._collect_((function(m){
var elem;
return smalltalk.withContext(function($ctx2) {
elem=_st($ROElement())._on_(m);
elem;
$6=_st($ROBox())._new();
_st($6)._height_(_st(h)._value_(m));
_st($6)._width_(_st(w)._value_(m));
$7=_st($6)._color_(_st(c)._value_(m));
return _st(elem).__plus($7);
}, function($ctx2) {$ctx2.fillBlock({m:m,elem:elem},$ctx1)})}));
return $5;
}, function($ctx1) {$ctx1.fill(self,"from:in:",{aCollection:aCollection,aString:aString,h:h,w:w,dictionary:dictionary,normalizer:normalizer,c:c,color:color,height:height},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection", "aString"],
source: "from: aCollection in: aString\x0a\x09|h w dictionary normalizer c color height|\x0a\x09(aString = 'left')\x0a\x09\x09ifTrue: [ color := self colorLeft. \x0a\x09\x09\x09\x09 height := self heightLeft  ]\x0a\x09\x09ifFalse: [ color := self colorRight.\x0a\x09\x09\x09\x09 height := self heightRight ].\x0a\x09color ifNil: [ color := self colorRight].\x0a\x09height ifNil: [ height := self heightRight].\x0a\x09h := [ :v | [(height value: v)] on: Error do: [ 10 ] ].\x0a\x09w := [ :v | [(self width value: v)] on: Error do: [ 10 ] ].\x0a\x09color isColor \x0a\x09\x09ifTrue: [ c := [ :v | color]]\x0a\x09\x09ifFalse: [  \x0a\x09\x09\x09dictionary := Dictionary new.\x0a\x09\x09\x09aCollection do: [ :e | dictionary at: e put: ([(color value: e)] on: Error do: [0] ) ].\x0a\x09\x09\x09normalizer := self getNormalizerfrom: dictionary.\x0a\x09\x09\x09c := [ :v | [normalizer roValue: (color value: v)] on: Error do: [ self class errorColor ] ]].\x0a\x09^(aCollection collect: [ :m | | elem |\x0a\x09\x09elem := ROElement on: m.\x0a\x09\x09elem + (ROBox new height: (h value: m); width: (w value: m); color: (c value: m))]).",
messageSends: ["ifTrue:ifFalse:", "colorLeft", "heightLeft", "colorRight", "heightRight", "=", "ifNil:", "on:do:", "value:", "width", "new", "do:", "at:put:", "getNormalizerfrom:", "errorColor", "class", "roValue:", "isColor", "collect:", "on:", "+", "height:", "width:", "color:"],
referencedClasses: ["Error", "Dictionary", "ROElement", "ROBox"]
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
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RONColorLinearNormalizer())._inContext_lowColor_highColor_(_st(aDictionary)._values(),_st(self._class())._normalizerBotom(),_st(self._class())._normalizerTop());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getNormalizerfrom:",{aDictionary:aDictionary},smalltalk.RelationalTowersBuilder)})},
args: ["aDictionary"],
source: "getNormalizerfrom: aDictionary\x0a\x09^(RONColorLinearNormalizer inContext: (aDictionary values) lowColor: (self class normalizerBotom) highColor: (self class normalizerTop)).",
messageSends: ["inContext:lowColor:highColor:", "values", "normalizerBotom", "class", "normalizerTop"],
referencedClasses: ["RONColorLinearNormalizer"]
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
var $1;
_st(aNode)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(self["@shadowEdges"])._at_ifPresent_ifAbsent_(aNode,(function(v){
return smalltalk.withContext(function($ctx3) {
_st(v)._do_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._shape())._show();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
return _st(self._view())._signalUpdate();
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@shadowEdges"])._at_put_(aNode,self._addLinesfrom_toAll_from_color_(aNode,links,aCollection,_st(self._class())._defaultLightEdgeColor()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(self["@overBody"])._at_put_(aNode,false);
return _st(_st(self["@bodyElement"])._shape())._color_(_st($Color())._veryVeryLightGray());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(aNode)._on_do_($ROMouseLeave(),(function(event){
var v;
return smalltalk.withContext(function($ctx2) {
v=false;
v;
_st(_st(self["@shadowEdges"])._at_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(_st(e)._shape())._hide();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
_st(self._view())._signalUpdate();
_st(self["@overBody"])._do_((function(e){
return smalltalk.withContext(function($ctx3) {
v=_st(v)._or_((function(){
return smalltalk.withContext(function($ctx4) {
return e;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return v;
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
$1=v;
if(! smalltalk.assert($1)){
return _st(_st(self["@bodyElement"])._shape())._color_(_st($Color())._darkGray());
};
}, function($ctx2) {$ctx2.fillBlock({event:event,v:v},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"greyLinesfrom:in:to:",{aNode:aNode,aCollection:aCollection,links:links},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection", "links"],
source: "greyLinesfrom: aNode in: aCollection to: links\x0a\x09aNode\x0a\x09\x09on: ROMouseEnter\x0a\x09\x09do: [ :event | \x0a\x09\x09\x09shadowEdges at: aNode\x09\x0a\x09\x09\x09\x09ifPresent: [ :v | v do: [ :e | e shape show\x22self view add: e\x22]. \x0a\x09\x09\x09\x09\x09\x09\x09self view signalUpdate]\x0a\x09\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09\x09shadowEdges at: aNode put: \x0a\x09\x09\x09\x09\x09(self\x0a\x09\x09\x09\x09\x09\x09addLinesfrom: aNode\x0a\x09\x09\x09\x09\x09\x09toAll: links\x0a\x09\x09\x09\x09\x09\x09from: aCollection\x0a\x09\x09\x09\x09\x09\x09color: self class defaultLightEdgeColor)].\x0a\x09\x09\x09overBody at: aNode put: false.\x0a\x09\x09\x09bodyElement shape\x22s first\x22 color: Color veryVeryLightGray ].\x0a\x09aNode\x0a\x09\x09on: ROMouseLeave\x0a\x09\x09do: [ :event | |v|\x0a\x09\x09\x09v := false.\x0a\x09\x09\x09(shadowEdges at: aNode) do: [ :e | e shape hide\x22remove\x22].\x0a\x09\x09\x09self view signalUpdate.\x0a\x09\x09\x09overBody do: [ :e|  v := v or: [e]]. \x0a\x09\x09\x09v ifFalse: [ bodyElement shape\x22s first\x22 color: Color darkGray]].",
messageSends: ["on:do:", "at:ifPresent:ifAbsent:", "do:", "show", "shape", "signalUpdate", "view", "at:put:", "addLinesfrom:toAll:from:color:", "defaultLightEdgeColor", "class", "color:", "veryVeryLightGray", "hide", "at:", "or:", "ifFalse:", "darkGray"],
referencedClasses: ["ROMouseEnter", "Color", "ROMouseLeave"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._heightLeft_(aBlock);
self._heightRight_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "height: aBlock\x0a\x09self heightLeft: aBlock.\x0a\x09self heightRight: aBlock.",
messageSends: ["heightLeft:", "heightRight:"],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "heightLeft",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@heightLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightLeft",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "heightLeft\x0a\x09^heightLeft",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "heightLeft:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@heightLeft"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"heightLeft:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "heightLeft: aBlock\x0a\x09heightLeft := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "heightRight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@heightRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightRight",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "heightRight\x0a\x09^heightRight",
messageSends: [],
referencedClasses: []
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "heightRight:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@heightRight"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"heightRight:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "heightRight: aBlock\x0a\x09heightRight := aBlock",
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
self["@body"]="";
self._label_("asString");
self._color_(_st(self._class())._defaultElementColor());
self._edgeColor_(_st(self._class())._defaultEdgeColor());
self._height_((10));
self["@width"]=(10);
self["@lineShape"]=false;
self["@overBody"]=_st($Dictionary())._new();
self["@popupElement"]=(function(elem){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROElement())._on_(_st(_st(_st(elem)._allEdgesFrom())._select_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(e)._shape())._color()).__eq(self._edgeColor());
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})})))._size())).__plus(_st(_st($ROLabel())._new())._color_(self._edgeColor()));
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})});
self["@viewWidth"]=(500);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "initialize\x0a\x09view := ROView new.\x0a\x09models := OrderedCollection new.\x0a\x09left := OrderedCollection new.\x0a\x09right := OrderedCollection new.\x0a\x09popups := Dictionary new.\x0a\x09edges := Dictionary new.\x0a\x09shadowEdges := Dictionary new.\x0a\x09title := 'RelationalTowers'.\x0a\x09legend := 'Relational Towers'.\x0a\x09body := ''.\x0a\x09self label: #asString.\x0a\x09self color: self class defaultElementColor.\x0a\x09self edgeColor: self class defaultEdgeColor.\x0a\x09self height: 10.\x0a\x09width := 10.\x0a\x09lineShape := false.\x0a\x09overBody := Dictionary new.\x0a\x09popupElement := [ :elem | (ROElement on: ((elem allEdgesFrom select: [:e | e shape\x22s first\x22 color = self edgeColor]) size)) \x0a\x09\x09+ (ROLabel new \x22fontSize: 14;\x22 color: self edgeColor) ].\x0a\x09viewWidth := 500.",
messageSends: ["new", "label:", "color:", "defaultElementColor", "class", "edgeColor:", "defaultEdgeColor", "height:", "+", "edgeColor", "on:", "size", "select:", "=", "color", "shape", "allEdgesFrom"],
referencedClasses: ["ROView", "OrderedCollection", "Dictionary", "ROLabel", "ROElement"]
}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "killLinksFrom",
category: 'edge-management',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"killLinksFrom",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "killLinksFrom\x0a\x09\x22self view\x0a\x09\x09on: ROMouseMove\x0a\x09\x09do: [ :event | \x0a\x09\x09\x09shadowEdges do: [ :e | e do: [:each | each remove] ].\x0a\x09\x09\x09self view signalUpdate ]\x22",
messageSends: [],
referencedClasses: []
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
source: "labels: aCollection\x0a\x09| maxWidth label|\x0a\x09maxWidth := 0.\x0a\x09(aCollection = left) \x0a\x09\x09ifTrue: [ label := self labelLeft ]\x0a\x09\x09ifFalse: [ label := self labelRight ].\x0a\x09aCollection do: [:l | | lab | \x0a\x09\x09lab := (ROElement on: (label value: l model)) + ROLabel.\x0a\x09\x09lab @ ROHighlight\x22ROLightlyHighlightable lightGray\x22.\x0a\x09\x09maxWidth := maxWidth max: (lab width).\x0a\x09\x09self view add: lab.\x0a\x09\x09self stick: lab on: l from: aCollection].\x0a\x09^maxWidth",
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
selector: "lines:in:to:",
category: 'edge-management',
fn: function (aNode,aCollection,links){
var self=this;
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(aNode)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self["@edges"])._at_ifPresent_ifAbsent_(aNode,(function(v){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(_st(v)._isEmpty())._not())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(_st(v)._first())._shape())._isHidden();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
if(smalltalk.assert($1)){
_st(v)._do_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._shape())._show();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
self._addPopup_from_(aNode,aCollection);
_st(self["@overBody"])._at_put_(aNode,true);
_st(_st(self["@bodyElement"])._shape())._color_(_st($Color())._veryVeryLightGray());
} else {
var val;
val=false;
val;
_st(v)._do_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._shape())._hide();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
self._removePopup_(aNode);
_st(self["@overBody"])._at_put_(aNode,false);
_st(self["@overBody"])._do_((function(e){
return smalltalk.withContext(function($ctx4) {
val=_st(val)._or_((function(){
return smalltalk.withContext(function($ctx5) {
return e;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
return val;
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})}));
$2=val;
if(! smalltalk.assert($2)){
_st(_st(self["@bodyElement"])._shape())._color_(_st($Color())._darkGray());
};
};
return _st(self._view())._signalUpdate();
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
_st(self["@edges"])._at_put_(aNode,self._addLinesfrom_toAll_from_color_(aNode,links,aCollection,self._edgeColor()));
self._addPopup_from_(aNode,aCollection);
_st(self["@overBody"])._at_put_(aNode,true);
return _st(_st(self["@bodyElement"])._shape())._color_(_st($Color())._veryVeryLightGray());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"lines:in:to:",{aNode:aNode,aCollection:aCollection,links:links},smalltalk.RelationalTowersBuilder)})},
args: ["aNode", "aCollection", "links"],
source: "lines: aNode in: aCollection to: links\x0a\x09aNode\x0a\x09\x09on: ROMouseClick\x0a\x09\x09do: [ :event | \x0a\x09\x09\x09edges at: aNode\x09\x09\x0a\x09\x09\x09\x09ifPresent: [ :v |\x0a\x09\x09\x09\x09\x09((v isEmpty not) and: [v first shape isHidden\x22isRendered\x22])\x0a\x09\x09\x09\x09\x09\x09\x22ifTrue:\x22ifFalse: [ | val |\x0a\x09\x09\x09\x09\x09\x09\x09\x09val := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09v do: [ :e | e shape hide\x22remove\x22].\x0a\x09\x09\x09\x09\x09\x09\x09\x09self removePopup: aNode.\x0a\x09\x09\x09\x09\x09\x09\x09\x09overBody at: aNode put: false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09overBody do: [ :e|  val := val or: [e]]. \x0a\x09\x09\x09\x09\x09\x09\x09\x09val ifFalse: [ bodyElement shape\x22s first\x22 color: Color darkGray]]\x0a\x09\x09\x09\x09\x09\x09\x22ifFalse:\x22ifTrue: [ v do: [ :e | e shape show\x22self view add: e\x22]. \x0a\x09\x09\x09\x09\x09\x09\x09\x09self addPopup: aNode from: aCollection.\x0a\x09\x09\x09\x09\x09\x09\x09\x09overBody at: aNode put: true. \x0a\x09\x09\x09\x09\x09\x09\x09\x09bodyElement shape\x22s first\x22 color: Color veryVeryLightGray].\x0a\x09\x09\x09\x09\x09self view signalUpdate]\x0a\x09\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09\x09edges at: aNode put: \x0a\x09\x09\x09\x09\x09(self\x0a\x09\x09\x09\x09\x09\x09addLinesfrom: aNode\x0a\x09\x09\x09\x09\x09\x09toAll: links\x0a\x09\x09\x09\x09\x09\x09from: aCollection\x0a\x09\x09\x09\x09\x09\x09color: self edgeColor).\x0a\x09\x09\x09\x09\x09self addPopup: aNode from: aCollection.\x0a\x09\x09\x09\x09\x09overBody at: aNode put: true.\x0a\x09\x09\x09\x09\x09bodyElement shape\x22s first\x22 color: Color veryVeryLightGray]]",
messageSends: ["on:do:", "at:ifPresent:ifAbsent:", "ifFalse:ifTrue:", "do:", "hide", "shape", "removePopup:", "at:put:", "or:", "ifFalse:", "color:", "darkGray", "show", "addPopup:from:", "veryVeryLightGray", "and:", "isHidden", "first", "not", "isEmpty", "signalUpdate", "view", "addLinesfrom:toAll:from:color:", "edgeColor"],
referencedClasses: ["ROMouseClick", "Color"]
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
self._lines_in_to_(n1,aCollection,links);
return self._greyLinesfrom_in_to_(n1,aCollection,links);
}, function($ctx2) {$ctx2.fillBlock({n1:n1,links:links},$ctx1)})}));
self._killLinksFrom();
return self}, function($ctx1) {$ctx1.fill(self,"linesFrom:with:",{aCollection:aCollection,aBlock:aBlock,otherCollection:otherCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection", "aBlock"],
source: "linesFrom: aCollection with: aBlock\x0a\x09| otherCollection  |\x0a\x09aCollection = left\x0a\x09\x09ifTrue: [ otherCollection := right ]\x0a\x09\x09ifFalse: [ otherCollection := left ].\x0a\x09aCollection\x0a\x09\x09do: [ :n1 | \x0a\x09\x09\x09| links |\x0a\x09\x09\x09links := self linksFrom: n1 with: aBlock to: otherCollection.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09lines: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09greyLinesfrom: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links ].\x0a\x09self killLinksFrom",
messageSends: ["ifTrue:ifFalse:", "=", "do:", "linksFrom:with:to:", "lines:in:to:", "greyLinesfrom:in:to:", "killLinksFrom"],
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
self._lines_in_to_(n1,aCollection,links);
return self._greyLinesfrom_in_to_(n1,aCollection,links);
}, function($ctx2) {$ctx2.fillBlock({n1:n1,links:links},$ctx1)})}));
self._killLinksFrom();
return self}, function($ctx1) {$ctx1.fill(self,"linesTo:with:",{aCollection:aCollection,aBlock:aBlock,otherCollection:otherCollection},smalltalk.RelationalTowersBuilder)})},
args: ["aCollection", "aBlock"],
source: "linesTo: aCollection with: aBlock\x0a\x09| otherCollection |\x0a\x09aCollection = left\x0a\x09\x09ifTrue: [ otherCollection := right ]\x0a\x09\x09ifFalse: [ otherCollection := left ].\x0a\x09aCollection\x0a\x09\x09do: [ :n1 | \x0a\x09\x09\x09| links |\x0a\x09\x09\x09links := self linksTo: n1 with: aBlock to: otherCollection.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09lines: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09greyLinesfrom: n1\x0a\x09\x09\x09\x09in: aCollection\x0a\x09\x09\x09\x09to: links ].\x0a\x09self killLinksFrom",
messageSends: ["ifTrue:ifFalse:", "=", "do:", "linksTo:with:to:", "lines:in:to:", "greyLinesfrom:in:to:", "killLinksFrom"],
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
source: "linksFrom: aNode with: aBlock to: otherCollection\x0a\x09| links aux |\x0a\x09aux := otherCollection\x0a\x09\x09collect: [ :e | \x0a\x09\x09\x09{e.\x0a\x09\x09\x09aNode} ].\x0a\x09links := aux\x0a\x09\x09select: [ :e | \x0a\x09\x09\x09| f s v |\x0a\x09\x09\x09f := e first model.\x0a\x09\x09\x09s := e second model.\x0a\x09\x09\x09v := self check: aBlock from: f to: s.\x0a\x09\x09\x09v ].\x0a\x09links := links collect: [ :l | l first].\x0a\x09^ links",
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
selector: "octopiEdges",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lineShape"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"octopiEdges",{},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "octopiEdges\x0a\x09lineShape := true.",
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
source: "open\x0a\x09\x22self view title: (self title).\x22\x0a\x09(self view elements includes: (left anyOne)) ifFalse: [self view addAll: left].\x0a\x09(self view elements includes: (right anyOne)) ifFalse: [self view addAll: right].\x0a\x09\x22self view @ ROVerticalDraggable.\x22\x0a\x09self view signalUpdate.\x0a\x09self view open.\x0a\x09\x22self view openInWindowSized: (self viewWidth) @ 500.\x22",
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
var maxwl,maxwr,maxl,maxr,max,leg,legTrans,leftTrans,rightTrans,bod;
function $ROVerticalLineLayout(){return smalltalk.ROVerticalLineLayout||(typeof ROVerticalLineLayout=="undefined"?nil:ROVerticalLineLayout)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
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
leg=_st(_st($ROElement())._on_(self._legend())).__plus(_st(_st($ROLabel())._new())._fontSize_((18)));
_st(self._view())._add_(leg);
legTrans=_st(_st(_st(_st(maxwl).__plus((40))).__plus(_st(self["@distance"]).__slash((2)))).__minus(_st(_st(leg)._width()).__slash((2))))._max_((0));
_st(leg)._translateBy_(_st(legTrans).__at((0)));
$1=_st(legTrans).__eq((0));
if(smalltalk.assert($1)){
leftTrans=_st(_st(_st(leg)._width()).__slash((2))).__minus(_st(_st(self["@distance"]).__slash((2))).__plus(maxwl));
leftTrans;
rightTrans=_st(leftTrans).__plus(self["@distance"]);
rightTrans;
} else {
leftTrans=_st(maxwl).__plus((30));
leftTrans;
rightTrans=_st(_st(maxwl).__plus(self["@distance"])).__plus((30));
rightTrans;
};
_st(self["@left"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(_st(leftTrans).__at((40)));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self["@right"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(_st(rightTrans).__at((40)));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
bod=_st(_st($ROElement())._on_(self._body())).__plus(_st(_st($ROLabel())._new())._color_(_st($Color())._darkGray()));
self["@bodyElement"]=bod;
_st(bod)._width_(self["@distance"]);
_st(self._view())._add_(bod);
_st(bod)._translateBy_(_st(_st(maxwl).__plus((60))).__at((30)));
_st(bod)._forward_(_st(bod)._view());
self["@viewWidth"]=_st(_st(_st(_st(self["@distance"]).__plus(maxwl)).__plus(maxwr)).__plus((80)))._max_(_st(leg)._width());
$2=self["@distance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"positionateTowers",{maxwl:maxwl,maxwr:maxwr,maxl:maxl,maxr:maxr,max:max,leg:leg,legTrans:legTrans,leftTrans:leftTrans,rightTrans:rightTrans,bod:bod},smalltalk.RelationalTowersBuilder)})},
args: [],
source: "positionateTowers\x0a\x09| maxwl maxwr maxl maxr max leg legTrans leftTrans rightTrans bod|\x0a\x09\x0a\x09maxl := (left collect: [ :l | l height ]) max.\x0a\x09maxr := (right collect: [ :l | l height ]) max.\x0a\x09max := maxl max: maxr.\x0a\x0a\x09ROVerticalLineLayout on: left.\x0a\x09ROVerticalLineLayout on: right.\x09\x0a\x09\x0a\x09maxwl := self labels: left.\x0a\x09maxwr := self labels: right.\x0a\x09\x0a\x09distance := ((self models size * max ln * 5) max: 300) min: 400.\x09\x0a\x0a\x09leg := (ROElement on: (self legend)) +  (ROLabel new fontSize: 18).\x0a\x09self view add: leg.\x0a\x09legTrans := (maxwl + 40 + (distance / 2) - (leg width / 2)) max: 0.\x0a\x09leg translateBy: legTrans @ 0.\x0a\x0a\x09legTrans = 0\x0a\x09\x09ifTrue: [ leftTrans :=  (leg width / 2) - ((distance / 2) + maxwl).\x0a\x09\x09\x09\x09 rightTrans := (leftTrans + distance) ]\x0a\x09\x09ifFalse: [ leftTrans :=  (maxwl + 30).\x0a\x09\x09\x09\x09 rightTrans := (maxwl + distance + 30)].\x0a\x09left do: [ :e | e translateBy: leftTrans @ 40 ].\x0a\x09right do: [ :e | e translateBy: rightTrans @ 40 ].\x09\x0a\x09\x0a\x09bod := (ROElement on: (self body)) +  (ROLabel new color: Color darkGray).\x0a\x09bodyElement := bod.\x0a\x09bod width: distance.\x0a\x09self view add: bod.\x0a\x09bod translateBy: (maxwl + 60 @ 30 ).\x0a\x09bod forward: (bod view). \x0a\x09\x22bod on: ROEvent do: [:e | bod parentAnnounce: e].\x22\x0a\x09\x0a\x09viewWidth := distance + maxwl + maxwr + 80  max: (leg width).\x0a\x09\x0a\x09^ distance",
messageSends: ["max", "collect:", "height", "max:", "on:", "labels:", "min:", "*", "ln", "size", "models", "+", "fontSize:", "new", "legend", "add:", "view", "-", "/", "width", "translateBy:", "@", "ifTrue:ifFalse:", "=", "do:", "color:", "darkGray", "body", "width:", "forward:"],
referencedClasses: ["ROVerticalLineLayout", "ROLabel", "ROElement", "Color"]
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
var $1,$2,$3,$4;
$1=_st(aBlock)._isBlock();
if(smalltalk.assert($1)){
newBlock=aBlock;
newBlock;
} else {
newBlock=(function(a,b){
var v;
return smalltalk.withContext(function($ctx2) {
v=_st(aBlock)._value_(a);
v;
$2=_st(v)._includes_(b);
if(smalltalk.assert($2)){
return true;
} else {
return _st(v).__eq(b);
};
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,v:v},$ctx1)})});
newBlock;
};
$3=_st(self._distance())._isNil();
if(smalltalk.assert($3)){
self["@distance"]=self._positionateTowers();
self["@distance"];
};
$4=_st(self["@direction"]).__eq("to");
if(smalltalk.assert($4)){
self._linesTo_with_(self["@left"],newBlock);
} else {
self._linesFrom_with_(self["@left"],newBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"relationLeft:",{aBlock:aBlock,newBlock:newBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "relationLeft: aBlock\x0a\x09| newBlock |\x0a\x09aBlock isBlock \x0a\x09\x09ifTrue: [ newBlock\x09:= aBlock ]\x0a\x09\x09ifFalse: \x09[ newBlock := [ :a :b | |v|\x0a\x09\x09\x09\x09v := (aBlock value: a).\x0a\x09\x09\x09\x09(v includes: b) ifTrue: [true] ifFalse: [v = b] ]]. \x0a\x09self distance isNil ifTrue: [ distance := self positionateTowers].\x0a\x09direction = 'to' \x0a\x09\x09ifTrue: [ self linesTo: left with: newBlock]\x0a\x09\x09ifFalse: [ self linesFrom: left with: newBlock]",
messageSends: ["ifTrue:ifFalse:", "value:", "=", "includes:", "isBlock", "ifTrue:", "positionateTowers", "isNil", "distance", "linesTo:with:", "linesFrom:with:"],
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
var $1,$2,$3,$4;
$1=_st(aBlock)._isBlock();
if(smalltalk.assert($1)){
newBlock=aBlock;
newBlock;
} else {
newBlock=(function(a,b){
var v;
return smalltalk.withContext(function($ctx2) {
v=_st(aBlock)._value_(a);
v;
$2=_st(v)._includes_(b);
if(smalltalk.assert($2)){
return true;
} else {
return _st(v).__eq(b);
};
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,v:v},$ctx1)})});
newBlock;
};
$3=_st(self._distance())._isNil();
if(smalltalk.assert($3)){
self["@distance"]=self._positionateTowers();
self["@distance"];
};
$4=_st(self["@direction"]).__eq("to");
if(smalltalk.assert($4)){
self._linesTo_with_(self["@right"],newBlock);
} else {
self._linesFrom_with_(self["@right"],newBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"relationRight:",{aBlock:aBlock,newBlock:newBlock},smalltalk.RelationalTowersBuilder)})},
args: ["aBlock"],
source: "relationRight: aBlock\x09\x0a\x09| newBlock |\x0a\x09aBlock isBlock \x0a\x09\x09ifTrue: [ newBlock\x09:= aBlock ]\x0a\x09\x09ifFalse: \x09[ newBlock := [ :a :b | |v|\x0a\x09\x09\x09\x09v := (aBlock value: a).\x0a\x09\x09\x09\x09(v includes: b) ifTrue: [true] ifFalse: [v = b] ]]. \x0a\x09self distance isNil ifTrue: [ distance := self positionateTowers].\x0a\x09direction = 'to' \x0a\x09\x09ifTrue: [ self linesTo: right with: newBlock]\x0a\x09\x09ifFalse: [ self linesFrom: right with: newBlock]",
messageSends: ["ifTrue:ifFalse:", "value:", "=", "includes:", "isBlock", "ifTrue:", "positionateTowers", "isNil", "distance", "linesTo:with:", "linesFrom:with:"],
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
source: "removePopup: element\x0a\x09\x22(popups at: element ifAbsent:[^false]) remove.\x22\x0a\x09| pop |\x0a\x09pop := \x09(popups at: element ifAbsent: [nil]). \x0a\x09pop isNil ifFalse: [ pop shape isNil \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [pop shape svgElement isNil \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [pop hide\x22remove\x22. \x0a\x09\x09\x09\x09\x09\x09\x09\x09 \x09\x09\x09\x09\x09\x09 \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09self view signalUpdate]]].",
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
selector: "splineLine:with:with:color:",
category: 'edge-management',
fn: function (attachpoint,controlPoint1,controlPoint2,aColor){
var self=this;
var line;
function $ROBSplineLine(){return smalltalk.ROBSplineLine||(typeof ROBSplineLine=="undefined"?nil:ROBSplineLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($ROBSplineLine())._new();
_st($1)._attachPoint_(attachpoint);
$2=_st($1)._color_(aColor);
line=$2;
$3=self["@lineShape"];
if(smalltalk.assert($3)){
$6=line;
_st($6)._addControlElement_(controlPoint1);
$7=_st($6)._addControlElement_(controlPoint2);
$7;
} else {
$4=line;
_st($4)._addControlElement_(controlPoint2);
$5=_st($4)._addControlElement_(controlPoint1);
$5;
};
$8=line;
return $8;
}, function($ctx1) {$ctx1.fill(self,"splineLine:with:with:color:",{attachpoint:attachpoint,controlPoint1:controlPoint1,controlPoint2:controlPoint2,aColor:aColor,line:line},smalltalk.RelationalTowersBuilder)})},
args: ["attachpoint", "controlPoint1", "controlPoint2", "aColor"],
source: "splineLine: attachpoint with: controlPoint1 with: controlPoint2 color: aColor\x0a\x09| line |\x0a\x09line := ROBSplineLine new attachPoint: attachpoint; color: aColor.\x0a\x09lineShape \x0a\x09\x09\x22ifTrue:\x22ifFalse: [  \x0a\x09\x09\x09line addControlElement: controlPoint2;\x0a\x09\x09\x09addControlElement: controlPoint1]\x0a\x09\x09\x22ifFalse:\x22ifTrue: [\x0a\x09\x09\x09line addControlElement: controlPoint1;\x0a\x09\x09\x09addControlElement: controlPoint2].\x0a\x09^line",
messageSends: ["attachPoint:", "new", "color:", "ifFalse:ifTrue:", "addControlElement:"],
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


smalltalk.addMethod(
smalltalk.method({
selector: "defaultEdgeColor",
category: 'coloring',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((123).__slash((256)),(50).__slash((256)),(148).__slash((256)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultEdgeColor",{},smalltalk.RelationalTowersBuilder.klass)})},
args: [],
source: "defaultEdgeColor\x0a\x09^ Color r: (123/256) g: (50/256) b: (148/256)",
messageSends: ["r:g:b:", "/"],
referencedClasses: ["Color"]
}),
smalltalk.RelationalTowersBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultElementColor",
category: 'coloring',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0).__slash((256)),(136).__slash((256)),(55).__slash((256)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultElementColor",{},smalltalk.RelationalTowersBuilder.klass)})},
args: [],
source: "defaultElementColor\x0a\x09^ Color r: (0/256) g: (136/256) b: (55/256)",
messageSends: ["r:g:b:", "/"],
referencedClasses: ["Color"]
}),
smalltalk.RelationalTowersBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLightEdgeColor",
category: 'coloring',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((194).__slash((256)),(165).__slash((256)),(207).__slash((256)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLightEdgeColor",{},smalltalk.RelationalTowersBuilder.klass)})},
args: [],
source: "defaultLightEdgeColor\x0a\x09^ Color r: (194/256) g: (165/256) b: (207/256)",
messageSends: ["r:g:b:", "/"],
referencedClasses: ["Color"]
}),
smalltalk.RelationalTowersBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errorColor",
category: 'coloring',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((202).__slash((256)),(0),(32).__slash((256)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"errorColor",{},smalltalk.RelationalTowersBuilder.klass)})},
args: [],
source: "errorColor\x0a\x09^ Color r: (202/256) g: 0 b: (32/256)",
messageSends: ["r:g:b:", "/"],
referencedClasses: ["Color"]
}),
smalltalk.RelationalTowersBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "normalizerBotom",
category: 'coloring',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((199).__slash((256)),(233).__slash((256)),(192).__slash((256)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalizerBotom",{},smalltalk.RelationalTowersBuilder.klass)})},
args: [],
source: "normalizerBotom\x0a\x09^ Color r: (199/256) g: (233/256) b: (192/256)",
messageSends: ["r:g:b:", "/"],
referencedClasses: ["Color"]
}),
smalltalk.RelationalTowersBuilder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "normalizerTop",
category: 'coloring',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._r_g_b_((0),(68).__slash((256)),(27).__slash((256)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"normalizerTop",{},smalltalk.RelationalTowersBuilder.klass)})},
args: [],
source: "normalizerTop\x0a\x09^ Color r: 0 g: (68/256) b: (27/256)",
messageSends: ["r:g:b:", "/"],
referencedClasses: ["Color"]
}),
smalltalk.RelationalTowersBuilder.klass);


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



