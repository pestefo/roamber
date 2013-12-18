smalltalk.addPackage('RelationalTowersBuilder');
smalltalk.addClass('ROLeftBorderAttachPoint', smalltalk.ROAttachPoint, [], 'RelationalTowersBuilder');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus(_st(_st(_st(_st(anEdge)._to())._bounds())._width()).__at(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROLeftBorderAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "to", "width", "absolutePosition"]}),
smalltalk.ROLeftBorderAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROLeftBorderAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "from", "absolutePosition"]}),
smalltalk.ROLeftBorderAttachPoint);



smalltalk.addClass('RORightBorderAttachPoint', smalltalk.ROAttachPoint, [], 'RelationalTowersBuilder');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.RORightBorderAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "to", "absolutePosition"]}),
smalltalk.RORightBorderAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._absolutePosition()).__plus(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._width())._asInteger()).__at(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.RORightBorderAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "from", "width", "absolutePosition"]}),
smalltalk.RORightBorderAttachPoint);



smalltalk.addClass('ROVerticalDraggable', smalltalk.RODraggable, [], 'RelationalTowersBuilder');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
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
messageSends: ["on:do:", "translateByRealPoint:", "@", "y", "step", "signalUpdate"]}),
smalltalk.ROVerticalDraggable);



smalltalk.addClass('RelationalTowersBuilder', smalltalk.Object, ['view', 'models', 'title', 'legend', 'left', 'right', 'labelLeft', 'labelRight', 'colorLeft', 'colorRight', 'viewWidth', 'distance', 'direction', 'popups', 'popupElement', 'edges', 'height', 'width'], 'RelationalTowersBuilder');
smalltalk.addMethod(
smalltalk.method({
selector: "addLinesfrom:toAll:from:color:",
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
messageSends: ["new", "ifTrue:ifFalse:", "instance", "=", "controlPointStart:from:", "controlElement:", "do:", "controlPointEnd:from:", "+", "splineLine:with:with:with:with:color:", "from:to:", "add:", "signalUpdate", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addPopup:from:",
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
messageSends: ["ifFalse:", "at:ifPresent:ifAbsent:", "show", "value:", "popupElement", "at:put:", "add:", "view", "stickTop:on:from:", "ifTrue:ifFalse:", "translateBy:", "@", "negated", "=", "isEmpty", "allEdgesFrom"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "assignMissing:from:",
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
messageSends: ["ifTrue:ifFalse:", "=", "new", "collect:", "asOrderedCollection", "value:", "model", "do:", "addAll:", "removeDuplicates", "from:in:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "blueLines:in:to:cache:",
fn: function (aNode,aCollection,links,prompLinks){
var self=this;
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aNode)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(aNode)._allEdgesFrom())._reject_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(prompLinks)._includes_(e);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})})))._isEmpty();
if(smalltalk.assert($1)){
self._addLinesfrom_toAll_from_color_(aNode,links,aCollection,_st($Color())._blue());
return self._addPopup_from_(aNode,aCollection);
} else {
self._removePopup_(aNode);
_st(_st(aNode)._allEdgesFrom())._do_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(e)._remove();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
return _st(self._view())._signalUpdate();
};
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"blueLines:in:to:cache:",{aNode:aNode,aCollection:aCollection,links:links,prompLinks:prompLinks},smalltalk.RelationalTowersBuilder)})},
messageSends: ["on:do:", "ifTrue:ifFalse:", "addLinesfrom:toAll:from:color:", "blue", "addPopup:from:", "removePopup:", "do:", "remove", "allEdgesFrom", "signalUpdate", "view", "isEmpty", "reject:", "includes:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "check:from:to:",
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
messageSends: ["ifTrue:ifFalse:", "value:value:", "=", "value:", "includes:", "isCollection", "numArgs"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._colorLeft_(aColor);
self._colorRight_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.RelationalTowersBuilder)})},
messageSends: ["colorLeft:", "colorRight:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorLeft",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorLeft:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colorLeft"]=aMessage;
$1=self["@colorLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorLeft:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colorRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorRight",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "colorRight:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colorRight"]=aMessage;
$1=self["@colorRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorRight:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "companion:with:",
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
messageSends: ["ifTrue:ifFalse:", "+", "@", "/", "negated", "<", "-", "y", ">", "x"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "controlElement:",
fn: function (p1){
var self=this;
var elem;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1;
elem=_st(_st(_st(_st($ROBox())._new())._color_(_st($Color())._transparent()))._element())._translateTo_(p1);
_st(self["@view"])._add_(elem);
$1=elem;
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlElement:",{p1:p1,elem:elem},smalltalk.RelationalTowersBuilder)})},
messageSends: ["translateTo:", "element", "color:", "transparent", "new", "add:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "controlPointEnd:from:",
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
messageSends: ["ifTrue:ifFalse:", "+", "@", "asInteger", "/", "height", "bounds", "negated", "absolutePosition", "="]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "controlPointStart:from:",
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
messageSends: ["ifTrue:ifFalse:", "+", "@", "asInteger", "/", "height", "bounds", "absolutePosition", "negated", "="]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "distance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@distance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"distance",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "distance:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@distance"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"distance:",{aNumber:aNumber},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFrom:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesFromLeft_(aBlock);
self._edgesToLeft_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFrom:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["edgesFromLeft:", "edgesToLeft:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromLeft:",
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
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationLeft:", "addAll:", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromLeft:edgesFromRight:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesFromLeft_(aBlock);
self._edgesFromRight_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFromLeft:edgesFromRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["edgesFromLeft:", "edgesFromRight:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromLeft:edgesToLeft:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesFromLeft_(aBlock);
self._edgesToLeft_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesFromLeft:edgesToLeft:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["edgesFromLeft:", "edgesToLeft:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesFromRight:",
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
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationRight:", "addAll:", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesTo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesToRight_(aBlock);
self._edgesFromRight_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesTo:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["edgesToRight:", "edgesFromRight:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToLeft:",
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
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationRight:", "addAll:", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToLeft:edgesToRight:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesToRight_(aBlock);
self._edgesToLeft_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToLeft:edgesToRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["edgesToRight:", "edgesToLeft:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToRight:",
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
messageSends: ["ifEmpty:", "fromModel", "assignMissing:from:", "relationLeft:", "addAll:", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesToRight:edgesFromRight:",
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._edgesToRight_(aBlock);
self._edgesFromRight_(anotherBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesToRight:edgesFromRight:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["edgesToRight:", "edgesFromRight:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example1",
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
messageSends: ["new", "left:", "edgesTo:", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
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
messageSends: ["new", "label:", "asString", "name", "height:", "color:", "onLeftAndRight:", "withAllSubclasses", "edgesTo:", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
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
messageSends: ["new", "height:", "/", "numberOfLinesOfCode", "color:", "left:", "withAllSubclasses", "edgesTo:", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example4",
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
messageSends: ["new", "legend:", "left:", "to:", "right:", "edgesFromLeft:edgesToLeft:", "+", "-", "/", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example5",
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
messageSends: ["new", "legend:", "onLeftAndRight:", "to:", "edgesTo:", "*", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example6",
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
messageSends: ["new", "left:", "to:", "right:", "withAllSubclasses", "edgesFrom:", "=", "numberOfSubclasses", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example7",
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
messageSends: ["new", "legend:", "left:", "to:", "right:", "edgesFromLeft:", "+", "-", "popupElement:", "do:", "addShape:", "blue", "add:", "model", "addAll:", "on:", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "example8",
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
messageSends: ["new", "legend:", "labelRight:", "asString", "selector", "left:", "instanceVariables", "right:", "methods", "edgesTo:", "includes:", "referredInstVars", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "from:in:",
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
messageSends: ["ifTrue:ifFalse:", "colorLeft", "colorRight", "=", "ifNil:", "on:do:", "value:", "height", "width", "new", "do:", "at:put:", "getNormalizerfrom:", "lightGray", "roValue:", "collect:", "on:", "+", "height:", "width:", "color:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "fromModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._from_in_(self._models(),"left");
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromModel",{},smalltalk.RelationalTowersBuilder)})},
messageSends: ["from:in:", "models"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "getNormalizerfrom:",
fn: function (aDictionary){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RONColorLinearNormalizer())._inContext_lowColor_highColor_(_st(aDictionary)._values(),_st($Color())._yellow(),_st($Color())._green());
return $1;
}, function($ctx1) {$ctx1.fill(self,"getNormalizerfrom:",{aDictionary:aDictionary},smalltalk.RelationalTowersBuilder)})},
messageSends: ["inContext:lowColor:highColor:", "values", "yellow", "green"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "greyLinesfrom:in:to:cache:",
fn: function (aNode,aCollection,links,prompLinks){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(prompLinks)._addAll_(self._addLinesfrom_toAll_from_color_(aNode,links,aCollection,_st($Color())._veryVeryLightGray()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(aNode)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(prompLinks)._do_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(e)._remove();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
return _st(self._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"greyLinesfrom:in:to:cache:",{aNode:aNode,aCollection:aCollection,links:links,prompLinks:prompLinks},smalltalk.RelationalTowersBuilder)})},
messageSends: ["on:do:", "addAll:", "addLinesfrom:toAll:from:color:", "veryVeryLightGray", "do:", "remove", "signalUpdate", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["new", "label:", "color:", "blue", "+", "on:", "size", "select:", "=", "color", "shape", "allEdgesFrom"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "killLinksFrom:",
fn: function (prompLinks){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"killLinksFrom:",{prompLinks:prompLinks},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._labelLeft_(aMessage);
self._labelRight_(aMessage);
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
messageSends: ["labelLeft:", "labelRight:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@labelLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelLeft",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelLeft:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@labelLeft"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"labelLeft:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@labelRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"labelRight",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labelRight:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@labelRight"]=aMessage;
return self}, function($ctx1) {$ctx1.fill(self,"labelRight:",{aMessage:aMessage},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "labels:",
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
messageSends: ["ifTrue:ifFalse:", "labelLeft", "labelRight", "=", "do:", "+", "on:", "value:", "model", "@", "max:", "width", "add:", "view", "stick:on:from:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@left"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._models())._addAll_(aCollection);
self["@left"]=self._from_in_(aCollection,"left");
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
messageSends: ["addAll:", "models", "from:in:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "legend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@legend"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"legend",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "legend:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@legend"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"legend:",{aString:aString},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linesFrom:with:",
fn: function (aCollection,aBlock){
var self=this;
var otherCollection,prompLinks;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
prompLinks=_st($OrderedCollection())._new();
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
self._blueLines_in_to_cache_(n1,aCollection,links,prompLinks);
return self._greyLinesfrom_in_to_cache_(n1,aCollection,links,prompLinks);
}, function($ctx2) {$ctx2.fillBlock({n1:n1,links:links},$ctx1)})}));
self._killLinksFrom_(prompLinks);
return self}, function($ctx1) {$ctx1.fill(self,"linesFrom:with:",{aCollection:aCollection,aBlock:aBlock,otherCollection:otherCollection,prompLinks:prompLinks},smalltalk.RelationalTowersBuilder)})},
messageSends: ["new", "ifTrue:ifFalse:", "=", "do:", "linksFrom:with:to:", "blueLines:in:to:cache:", "greyLinesfrom:in:to:cache:", "killLinksFrom:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linesTo:with:",
fn: function (aCollection,aBlock){
var self=this;
var otherCollection,prompLinks;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
prompLinks=_st($OrderedCollection())._new();
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
self._blueLines_in_to_cache_(n1,aCollection,links,prompLinks);
return self._greyLinesfrom_in_to_cache_(n1,aCollection,links,prompLinks);
}, function($ctx2) {$ctx2.fillBlock({n1:n1,links:links},$ctx1)})}));
self._killLinksFrom_(prompLinks);
return self}, function($ctx1) {$ctx1.fill(self,"linesTo:with:",{aCollection:aCollection,aBlock:aBlock,otherCollection:otherCollection,prompLinks:prompLinks},smalltalk.RelationalTowersBuilder)})},
messageSends: ["new", "ifTrue:ifFalse:", "=", "do:", "linksTo:with:to:", "blueLines:in:to:cache:", "greyLinesfrom:in:to:cache:", "killLinksFrom:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linksFrom:with:to:",
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
messageSends: ["collect:", "select:", "model", "first", "second", "check:from:to:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "linksTo:with:to:",
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
messageSends: ["collect:", "select:", "model", "first", "second", "check:from:to:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "models",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@models"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"models",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "models:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@models"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"models:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "onLeftAndRight:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._left_(aCollection);
self._right_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"onLeftAndRight:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
messageSends: ["left:", "right:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
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
messageSends: ["ifFalse:", "addAll:", "view", "includes:", "anyOne", "elements", "signalUpdate", "open"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@popupElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupElement",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupElement:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popupElement"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"popupElement:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popups",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@popups"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"popups",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "positionateTowers",
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
messageSends: ["max", "collect:", "height", "max:", "on:", "labels:", "min:", "*", "ln", "size", "models", "do:", "translateBy:", "@", "+", "legend", "add:", "view", "-", "/", "width"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relation:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._relationLeft_(aBlock);
self._relationRight_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"relation:",{aBlock:aBlock},smalltalk.RelationalTowersBuilder)})},
messageSends: ["relationLeft:", "relationRight:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relationLeft:",
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
messageSends: ["ifTrue:ifFalse:", "includes:", "perform:", "isBlock", "ifTrue:", "positionateTowers", "isNil", "distance", "linesTo:with:", "linesFrom:with:", "="]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "relationRight:",
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
messageSends: ["ifTrue:ifFalse:", "includes:", "perform:", "isBlock", "ifTrue:", "positionateTowers", "isNil", "distance", "linesTo:with:", "linesFrom:with:", "="]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "removePopup:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@popups"])._at_(element))._hide();
_st(self._view())._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"removePopup:",{element:element},smalltalk.RelationalTowersBuilder)})},
messageSends: ["hide", "at:", "signalUpdate", "view"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@right"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._models())._addAll_(aCollection);
self["@right"]=self._from_in_(aCollection,"right");
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aCollection:aCollection},smalltalk.RelationalTowersBuilder)})},
messageSends: ["addAll:", "models", "from:in:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "splineLine:with:with:with:with:color:",
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
messageSends: ["attachPoint:", "new", "color:", "addControlElement:"]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:on:from:",
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
messageSends: ["ifTrue:ifFalse:", "stick:onTheLeftCenteredOf:", "stick:onTheRightCenteredOf:", "="]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "stickTop:on:from:",
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
messageSends: ["ifTrue:ifFalse:", "stick:onTheLeftOf:", "stick:onTheRightOf:", "="]}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "viewWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@viewWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"viewWidth",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.RelationalTowersBuilder)})},
messageSends: []}),
smalltalk.RelationalTowersBuilder);



smalltalk.addClass('RelationalTowersBuilderTest', smalltalk.TestCase, ['builder'], 'RelationalTowersBuilder');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($RelationalTowersBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RelationalTowersBuilderTest)})},
messageSends: ["new"]}),
smalltalk.RelationalTowersBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RelationalTowersBuilderTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@builder"]=_st($RelationalTowersBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.RelationalTowersBuilderTest)})},
messageSends: ["setUp", "new"]}),
smalltalk.RelationalTowersBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAssociation",
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
messageSends: ["label:", "asString", "name", "height:", "color:", "onLeftAndRight:", "withAllSubclasses", "edgesTo:", "assert:equals:", "size", "left", "right", "allEdgesFrom", "first", "distance"]}),
smalltalk.RelationalTowersBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testConstruction",
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
messageSends: ["models:", "edgesTo:", "assert:equals:", "labelLeft", "size", "left", "right", "viewWidth", "legend"]}),
smalltalk.RelationalTowersBuilderTest);



