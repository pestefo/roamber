smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROAnnouncer', smalltalk.Announcer, ['forwarding', 'announcer'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "forward",
fn: function (){
var self=this;
function $ROEvent(){return smalltalk.ROEvent||(typeof ROEvent=="undefined"?nil:ROEvent)}
return smalltalk.withContext(function($ctx1) { 
self._forward_($ROEvent());
return self}, function($ctx1) {$ctx1.fill(self,"forward",{},smalltalk.ROAnnouncer)})},
messageSends: ["forward:"]}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "forward:",
fn: function (anEventClass){
var self=this;
function $IdentitySet(){return smalltalk.IdentitySet||(typeof IdentitySet=="undefined"?nil:IdentitySet)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@forwarding"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@forwarding"]=_st($IdentitySet())._new();
self["@forwarding"];
} else {
$1;
};
_st(self["@forwarding"])._add_(anEventClass);
return self}, function($ctx1) {$ctx1.fill(self,"forward:",{anEventClass:anEventClass},smalltalk.ROAnnouncer)})},
messageSends: ["ifNil:", "new", "add:"]}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isForwarded:",
fn: function (anEventClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(anEventClass)._isBehavior();
if(! smalltalk.assert($1)){
$2=self._isForwarded_(_st(anEventClass)._class());
return $2;
};
$3=self["@forwarding"];
if(($receiver = $3) == nil || $receiver == undefined){
return false;
} else {
$3;
};
$4=_st(self["@forwarding"])._anySatisfy_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c).__eq_eq(anEventClass))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(anEventClass)._inheritsFrom_(c);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return $4;
}, function($ctx1) {$ctx1.fill(self,"isForwarded:",{anEventClass:anEventClass},smalltalk.ROAnnouncer)})},
messageSends: ["ifFalse:", "isForwarded:", "class", "isBehavior", "ifNil:", "anySatisfy:", "or:", "inheritsFrom:", "=="]}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isForwarder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@forwarding"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@forwarding"])._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isForwarder",{},smalltalk.ROAnnouncer)})},
messageSends: ["and:", "notEmpty", "notNil"]}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "sendToParent:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(event)._isBehavior();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(event)._hasElement();
if(smalltalk.assert($3)){
_st(_st(event)._element())._parentAnnounce_(event);
};
return self}, function($ctx1) {$ctx1.fill(self,"sendToParent:",{event:event},smalltalk.ROAnnouncer)})},
messageSends: ["ifTrue:", "isBehavior", "parentAnnounce:", "element", "hasElement"]}),
smalltalk.ROAnnouncer);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROContainer', smalltalk.ROObject, ['elements', 'attributes'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
fn: function (object){
var self=this;
var v;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
$1=_st(self._model()).__eq(object);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
v=_st(_st(self["@elements"])._reverse())._detect_ifNone_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(e)._model()).__eq(object))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(e)._isElement();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=v;
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
$4=v;
return $4;
};
_st(_st(self["@elements"])._reverse())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
v=_st(e)._elementFromModel_(object);
v;
$5=v;
if(($receiver = $5) == nil || $receiver == undefined){
return $5;
} else {
$6=v;
throw $early=[$6];
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"elementFromModel:",{object:object,v:v},smalltalk.ROContainer)})},
messageSends: ["ifTrue:", "=", "model", "detect:ifNone:", "and:", "isElement", "reverse", "ifNotNil:", "do:", "elementFromModel:"]}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@elements"])._copy())._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsDo:",{aBlock:aBlock},smalltalk.ROContainer)})},
messageSends: ["do:", "copy"]}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsSuchThat:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsSuchThat:",{aBlock:aBlock},smalltalk.ROContainer)})},
messageSends: ["select:"]}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROContainer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROContainer)})},
messageSends: ["initialize", "new"]}),
smalltalk.ROContainer);



smalltalk.addClass('ROAbstractComponent', smalltalk.ROContainer, ['model', 'view', 'interactions', 'shape', 'eventHandler'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "+",
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._addShape_(aShape);
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aShape:aShape},smalltalk.ROAbstractComponent)})},
messageSends: ["addShape:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addInteraction_(anInteractionClassOrInstance);
return self}, function($ctx1) {$ctx1.fill(self,"@",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROAbstractComponent)})},
messageSends: ["addInteraction:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
fn: function (aShape){
var self=this;
var s;
return smalltalk.withContext(function($ctx1) { 
var $1;
s=_st(aShape)._installedOn_(self);
$1=_st(self._shape())._isNil();
if(! smalltalk.assert($1)){
_st(s)._width_(_st(self._shape())._width());
_st(s)._height_(_st(self._shape())._height());
};
self["@shape"]=s;
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aShape:aShape,s:s},smalltalk.ROAbstractComponent)})},
messageSends: ["installedOn:", "ifFalse:", "width:", "width", "shape", "height:", "height", "isNil"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent){
var self=this;
var eventToBeSent;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anEvent)._isBehavior();
if(smalltalk.assert($1)){
eventToBeSent=_st(anEvent)._new();
} else {
eventToBeSent=anEvent;
};
_st(eventToBeSent)._element_(self);
_st(self["@eventHandler"])._announce_(eventToBeSent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent,eventToBeSent:eventToBeSent},smalltalk.ROAbstractComponent)})},
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "element:", "announce:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROAnnouncer(){return smalltalk.ROAnnouncer||(typeof ROAnnouncer=="undefined"?nil:ROAnnouncer)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractComponent.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@eventHandler"]=_st($ROAnnouncer())._new();
self["@view"]=_st($ROView())._nullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractComponent)})},
messageSends: ["initialize", "new", "nullView"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEdge())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isElement",{},smalltalk.ROAbstractComponent)})},
messageSends: ["not", "isEdge"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotEdge",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEdge())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotEdge",{},smalltalk.ROAbstractComponent)})},
messageSends: ["not", "isEdge"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROAbstractComponent)})},
messageSends: []}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
messageSends: []}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._model_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
messageSends: ["model:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROAbstractComponent)})},
messageSends: ["on:do:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:doOnce:",
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,(function(arg){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(arg);
return _st(self["@eventHandler"])._unsubscribeForEvent_(eventClass);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROAbstractComponent)})},
messageSends: ["on:do:", "value:", "unsubscribeForEvent:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeInteraction:",
fn: function (anInteractionClass){
var self=this;
var ds;
return smalltalk.withContext(function($ctx1) { 
ds=_st(self["@interactions"])._select_((function(d){
return smalltalk.withContext(function($ctx2) {
return _st(d)._isKindOf_(anInteractionClass);
}, function($ctx2) {$ctx2.fillBlock({d:d},$ctx1)})}));
_st(ds)._associationsDo_((function(assoc){
return smalltalk.withContext(function($ctx2) {
_st(self["@interactions"])._removeKey_(_st(assoc)._key());
return _st(self["@eventHandler"])._unsubscribe_(_st(assoc)._value());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeInteraction:",{anInteractionClass:anInteractionClass,ds:ds},smalltalk.ROAbstractComponent)})},
messageSends: ["select:", "isKindOf:", "associationsDo:", "removeKey:", "key", "unsubscribe:", "value"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._signalUpdate();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.ROAbstractComponent)})},
messageSends: ["signalUpdate"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROAbstractComponent)})},
messageSends: []}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.ROAbstractComponent)})},
messageSends: []}),
smalltalk.ROAbstractComponent);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._on_(anObject);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROAbstractComponent.klass)})},
messageSends: ["on:", "basicNew", "initialize", "yourself"]}),
smalltalk.ROAbstractComponent.klass);


smalltalk.addClass('ROEdge', smalltalk.ROAbstractComponent, ['from', 'to'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROEdge)})},
messageSends: ["drawOn:for:"]}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"elementsDo:",{aBlock:aBlock},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "isEdge",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isEdge",{},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aShape:aShape},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);


smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
fn: function (el1,el2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._from_(el1);
_st($2)._to_(el2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"from:to:",{el1:el1,el2:el2},smalltalk.ROEdge.klass)})},
messageSends: ["from:", "new", "to:", "yourself"]}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineFrom:to:",
fn: function (f,t){
var self=this;
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._from_to_(f,t);
_st($2).__plus(_st($ROLine())._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineFrom:to:",{f:f,t:t},smalltalk.ROEdge.klass)})},
messageSends: ["+", "new", "from:to:", "yourself"]}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "linesFor:",
fn: function (associations){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(associations)._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return self._lineFrom_to_(_st(assoc)._key(),_st(assoc)._value());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"linesFor:",{associations:associations},smalltalk.ROEdge.klass)})},
messageSends: ["collect:", "lineFrom:to:", "key", "value"]}),
smalltalk.ROEdge.klass);


smalltalk.addClass('ROElement', smalltalk.ROAbstractComponent, ['position'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "absolutePosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"absolutePosition",{},smalltalk.ROElement)})},
messageSends: ["position"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@interactions"])._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractions",{},smalltalk.ROElement)})},
messageSends: ["do:", "value", "values"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteraction:",
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._at_put_(_st(anInteractionClassOrInstance)._key(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(anInteractionClassOrInstance)._initializeElement_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addInteraction:",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROElement)})},
messageSends: ["at:put:", "key", "initializeElement:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)})},
messageSends: ["extent:", "extentFor:", "position"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)})},
messageSends: ["drawOn:for:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._extentFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROElement)})},
messageSends: ["extentFor:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aPoint).__eq(self._extent());
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self["@shape"])._extent_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.ROElement)})},
messageSends: ["ifTrue:", "=", "extent", "extent:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._heightFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)})},
messageSends: ["heightFor:"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROElement)})},
messageSends: ["hide"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $RONullShape(){return smalltalk.RONullShape||(typeof RONullShape=="undefined"?nil:RONullShape)}
function $ROClickable(){return smalltalk.ROClickable||(typeof ROClickable=="undefined"?nil:ROClickable)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROElement.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@interactions"]=_st($Dictionary())._new();
self["@shape"]=_st($RONullShape())._new();
self.__at($ROClickable());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)})},
messageSends: ["initialize", "@", "new"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "isEdge",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isEdge",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "positionAsInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionAsInteger",{},smalltalk.ROElement)})},
messageSends: ["asIntegerPoint", "position"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeShape();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROElement)})},
messageSends: ["removeShape"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "removeShape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._removeSVGElement();
return self}, function($ctx1) {$ctx1.fill(self,"removeShape",{},smalltalk.ROElement)})},
messageSends: ["removeSVGElement"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.ROElement)})},
messageSends: ["show"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (d){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(_st(d).__at(d));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{d:d},smalltalk.ROElement)})},
messageSends: ["extent:", "@"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._widthFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)})},
messageSends: ["widthFor:"]}),
smalltalk.ROElement);


smalltalk.addMethod(
smalltalk.method({
selector: "forCollection:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCollection)._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return self._on_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})})))._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"forCollection:",{aCollection:aCollection},smalltalk.ROElement.klass)})},
messageSends: ["asArray", "collect:", "on:"]}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROElement.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sprite",
fn: function (){
var self=this;
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._extent_((50).__at((50)));
_st($2)._addInteraction_($RODraggable());
_st($2)._addShape_(_st($ROBox())._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sprite",{},smalltalk.ROElement.klass)})},
messageSends: ["extent:", "@", "new", "addInteraction:", "addShape:", "yourself"]}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spriteOn:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sprite())._on_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"spriteOn:",{value:value},smalltalk.ROElement.klass)})},
messageSends: ["on:", "sprite"]}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spritesOn:",
fn: function (values){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(values)._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(self._sprite())._on_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"spritesOn:",{values:values},smalltalk.ROElement.klass)})},
messageSends: ["collect:", "on:", "sprite"]}),
smalltalk.ROElement.klass);


smalltalk.addClass('ROView', smalltalk.ROContainer, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "absolutePosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"absolutePosition",{},smalltalk.ROView)})},
messageSends: ["@"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addElement_(anElement);
_st(anElement)._view_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)})},
messageSends: ["addElement:", "view:"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
fn: function (els){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(els)._do_((function(n){
return smalltalk.withContext(function($ctx2) {
return self._add_(n);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{els:els},smalltalk.ROView)})},
messageSends: ["do:", "add:"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._add_(element);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{element:element},smalltalk.ROView)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
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
smalltalk.ROView.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($Array())._new();
self["@svgCanvas"]=self._paper();
self._clear();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
messageSends: ["initialize", "new", "paper", "clear"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROView)})},
messageSends: []}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RORaphaelCanvas())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)})},
messageSends: ["canvas"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(element)._removeShape();
_st(self["@elements"])._remove_(element);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{element:element},smalltalk.ROView)})},
messageSends: ["removeShape", "remove:"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.ROView)})},
messageSends: ["do:", "drawOn:", "elements"]}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROView)})},
messageSends: []}),
smalltalk.ROView);


smalltalk.ROView.klass.iVarNames = ['nullView'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resetNullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView.klass)})},
messageSends: ["resetNullView"]}),
smalltalk.ROView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nullView",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@nullView"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@nullView"]=self._new();
$1=self["@nullView"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nullView",{},smalltalk.ROView.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ROView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetNullView",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nullView"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetNullView",{},smalltalk.ROView.klass)})},
messageSends: []}),
smalltalk.ROView.klass);


smalltalk.addClass('ROShape', smalltalk.ROObject, ['svgElement', 'height', 'width', 'color'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anElement)._activateInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROShape)})},
messageSends: ["activateInteractions"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultExtent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(5).__at((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultExtent",{},smalltalk.ROShape)})},
messageSends: ["@"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@svgElement"])._isNil();
if(smalltalk.assert($1)){
self._initializeSVGElementOn_for_(canvas,anElement);
self._activateInteractionsOn_(anElement);
};
self._updateSVGElementOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
messageSends: ["ifTrue:", "initializeSVGElementOn:for:", "activateInteractionsOn:", "isNil", "updateSVGElementOn:for:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
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
smalltalk.method({
selector: "height:",
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
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
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._hide();
_st($Transcript())._show_("hide".__comma(_st($String())._cr()));
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROShape)})},
messageSends: ["hide", "show:", ",", "cr"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st(self._class())._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROShape)})},
messageSends: ["initialize", "defaultColor", "class"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"installedOn:",{element:element},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROShape)})},
messageSends: ["remove"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.ROShape)})},
messageSends: ["show"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "svgElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgElement",{},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROShape);

smalltalk.addMethod(
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
smalltalk.method({
selector: "width:",
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
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
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "lightGray";
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROShape.klass)})},
messageSends: []}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
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

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._installedOn_(element);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"installedOn:",{element:element},smalltalk.ROShape.klass)})},
messageSends: ["installedOn:", "new", "yourself"]}),
smalltalk.ROShape.klass);


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, ['attachPoint'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attachPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPoint",{},smalltalk.ROAbstractLineShape)})},
messageSends: []}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint:",
fn: function (attach){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachPoint"]=attach;
return self}, function($ctx1) {$ctx1.fill(self,"attachPoint:",{attach:attach},smalltalk.ROAbstractLineShape)})},
messageSends: []}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._endingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROAbstractLineShape)})},
messageSends: ["endingPointOf:"]}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractLineShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@attachPoint"]=_st($ROShorterDistanceAttachPoint())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineShape)})},
messageSends: ["initialize", "instance"]}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._startingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROAbstractLineShape)})},
messageSends: ["startingPointOf:"]}),
smalltalk.ROAbstractLineShape);


smalltalk.addMethod(
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


smalltalk.addClass('ROLine', smalltalk.ROAbstractLineShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROLine)})},
messageSends: []}),
smalltalk.ROLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anEdge){
var self=this;
var x1,y1,x2,y2;
return smalltalk.withContext(function($ctx1) { 
x1=_st(_st(_st(anEdge)._from())._position())._x();
y1=_st(_st(_st(anEdge)._from())._position())._y();
x2=_st(_st(_st(anEdge)._to())._position())._x();
y2=_st(_st(_st(anEdge)._to())._position())._y();
self["@svgElement"]=_st(canvas)._path_(_st(_st(_st(_st(_st(_st("M".__comma(x1)).__comma(" ")).__comma(y1)).__comma("L")).__comma(x2)).__comma(" ")).__comma(y2));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,x1:x1,y1:y1,x2:x2,y2:y2},smalltalk.ROLine)})},
messageSends: ["x", "position", "from", "y", "to", "path:", ","]}),
smalltalk.ROLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anEdge){
var self=this;
var maxArrowSize,unit,startingPoint,endingPoint,rawStartingPoint,rawEndingPoint;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
rawEndingPoint=_st(self["@attachPoint"])._startingPointOf_(anEdge);
rawStartingPoint=_st(self["@attachPoint"])._endingPointOf_(anEdge);
$1=_st(rawStartingPoint).__eq(rawEndingPoint);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self["@svgElement"])._attr_with_("path",_st(_st(_st(_st(_st(_st("M".__comma(_st(_st(rawEndingPoint)._x())._asInteger())).__comma(" ")).__comma(_st(_st(rawEndingPoint)._y())._asInteger())).__comma("L")).__comma(_st(_st(rawStartingPoint)._x())._asInteger())).__comma(" ")).__comma(_st(_st(rawStartingPoint)._y())._asInteger()));
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,maxArrowSize:maxArrowSize,unit:unit,startingPoint:startingPoint,endingPoint:endingPoint,rawStartingPoint:rawStartingPoint,rawEndingPoint:rawEndingPoint},smalltalk.ROLine)})},
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:with:", ",", "asInteger", "y", "x"]}),
smalltalk.ROLine);



smalltalk.addClass('ROBox', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
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
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROBox.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=self._defaultSize();
self["@height"]=self._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)})},
messageSends: ["initialize", "defaultSize"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._rect_y_width_height_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._widthFor_(anElement),self._heightFor_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
messageSends: ["rect:y:width:height:", "x", "position", "y", "widthFor:", "heightFor:"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("x",_st(_st(anElement)._position())._x());
_st($1)._attr_with_("y",_st(_st(anElement)._position())._y());
_st($1)._attr_with_("width",self._widthFor_(anElement));
_st($1)._attr_with_("height",self._heightFor_(anElement));
$2=_st($1)._attr_with_("fill","lightGray");
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
messageSends: ["attr:with:", "x", "position", "y", "widthFor:", "heightFor:"]}),
smalltalk.ROBox);

smalltalk.addMethod(
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
smalltalk.method({
selector: "defaultRadius",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)});},
messageSends: []}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCircle.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=self._defaultRadius();
self["@width"]=_st(self._defaultRadius()).__star((1.5));
self["@height"]=_st(self._defaultRadius()).__star((1.5));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)})},
messageSends: ["initialize", "defaultRadius", "*"]}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._circle_y_r_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
messageSends: ["circle:y:r:", "x", "position", "y", "radius"]}),
smalltalk.ROCircle);

smalltalk.addMethod(
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

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("cx",_st(_st(anElement)._position())._x());
_st($1)._attr_with_("cy",_st(_st(anElement)._position())._y());
_st($1)._attr_with_("r",self._radius());
$2=_st($1)._attr_with_("fill","lightGray");
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
messageSends: ["attr:with:", "x", "position", "y", "radius"]}),
smalltalk.ROCircle);



smalltalk.addClass('ROLabel', smalltalk.ROShape, ['text'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="model";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLabel)})},
messageSends: ["initialize"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
var str,svgText,svgRect;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
str=self._textFor_(anElement);
svgRect=_st(canvas)._rect_y_width_rect_((0),(0),(1),(1));
_st(svgRect)._attr_value_("fill","white");
_st(svgRect)._attr_value_("stroke","gray");
_st(svgRect)._attr_value_("stroke-width",(2));
svgText=_st(canvas)._text_y_string_((0),(10),str);
self["@svgElement"]=_st(canvas)._set();
$1=self["@svgElement"];
_st($1)._push_(svgRect);
$2=_st($1)._push_(svgText);
_st(svgRect)._attr_value_("width",_st(_st(_st(self["@svgElement"])._getBBox())._width()).__plus((10)));
_st(svgRect)._attr_value_("height",_st(_st(_st(self["@svgElement"])._getBBox())._height()).__plus((10)));
_st(svgText)._attr_value_("x",_st(_st(_st(svgRect)._attr_("width")).__slash((2)))._asInteger());
_st(svgText)._attr_value_("text-anchor","middle");
_st(svgText)._attr_value_("y",_st(_st(_st(svgRect)._attr_("height")).__slash((2)))._asInteger());
_st(self["@svgElement"])._translate_y_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y());
_st($Transcript())._show_(_st("initialize svg element: ".__comma(_st(anElement)._model())).__comma(_st($String())._cr()));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement,str:str,svgText:svgText,svgRect:svgRect},smalltalk.ROLabel)})},
messageSends: ["textFor:", "rect:y:width:rect:", "attr:value:", "text:y:string:", "set", "push:", "+", "width", "getBBox", "height", "asInteger", "/", "attr:", "translate:y:", "x", "position", "y", "show:", ",", "cr", "model"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._clear();
_st($Transcript())._show_("It is supposed that it was deleted".__comma(_st($String())._cr()));
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROLabel)})},
messageSends: ["clear", "show:", ",", "cr"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{anObject:anObject},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textFor:",
fn: function (aROElement){
var self=this;
var v;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
v=_st(self["@text"])._roValue_(aROElement);
$2=_st(_st(v)._class()).__eq_eq("abc"._class());
if(smalltalk.assert($2)){
$1=v;
} else {
$1=_st(v)._printString();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"textFor:",{aROElement:aROElement,v:v},smalltalk.ROLabel)})},
messageSends: ["roValue:", "ifTrue:ifFalse:", "printString", "==", "class"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);


smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aBlock:aBlock},smalltalk.ROLabel.klass)})},
messageSends: ["text:", "new"]}),
smalltalk.ROLabel.klass);


smalltalk.addClass('ROLabel2', smalltalk.ROShape, ['text'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel2.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="model";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLabel2)})},
messageSends: ["initialize"]}),
smalltalk.ROLabel2);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
str=self._textFor_(anElement);
self["@svgElement"]=_st(canvas)._text_y_string_((100),(50),str);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement,str:str},smalltalk.ROLabel2)})},
messageSends: ["textFor:", "text:y:string:"]}),
smalltalk.ROLabel2);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ROLabel2)})},
messageSends: []}),
smalltalk.ROLabel2);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{anObject:anObject},smalltalk.ROLabel2)})},
messageSends: []}),
smalltalk.ROLabel2);

smalltalk.addMethod(
smalltalk.method({
selector: "textFor:",
fn: function (aROElement){
var self=this;
var v;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
v=_st(self["@text"])._roValue_(aROElement);
$2=_st(_st(v)._class()).__eq_eq("abc"._class());
if(smalltalk.assert($2)){
$1=v;
} else {
$1=_st(v)._printString();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"textFor:",{aROElement:aROElement,v:v},smalltalk.ROLabel2)})},
messageSends: ["roValue:", "ifTrue:ifFalse:", "printString", "==", "class"]}),
smalltalk.ROLabel2);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeSVGElementOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel2)})},
messageSends: ["initializeSVGElementOn:for:"]}),
smalltalk.ROLabel2);


smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aBlock:aBlock},smalltalk.ROLabel2.klass)})},
messageSends: ["text:", "new"]}),
smalltalk.ROLabel2.klass);


smalltalk.addClass('RONullShape', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (anExtentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=_st(anExtentPoint)._x();
self["@height"]=_st(anExtentPoint)._y();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtentPoint:anExtentPoint},smalltalk.RONullShape)})},
messageSends: ["x", "y"]}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.RONullShape)})},
messageSends: ["@", "roValue:"]}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(self._defaultExtent());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONullShape)})},
messageSends: ["extent:", "defaultExtent"]}),
smalltalk.RONullShape);



smalltalk.addClass('ROTux', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._path_("M11.791,25.229c1.027-0.104,1.162-1.191,0.68-1.666c-0.398-0.392-2.598-2.022-3.171-2.664C9.033,20.6,8.673,20.454,8.52,20.12c-0.352-0.771-0.598-1.869-0.151-2.658c0.081-0.144,0.133-0.078,0.071,0.22c-0.351,1.684,0.746,3.059,0.986,2.354c0.167-0.487,0.013-1.358,0.102-2.051c0.158-1.226,1.273-3.577,1.763-3.712c-0.755-1.398,0.886-2.494,0.866-3.723c-0.014-0.798,0.701,0.982,1.419,1.359c0.802,0.422,1.684-0.794,2.936-1.41c0.354-0.176,0.809-0.376,0.776-0.524c-0.146-0.718-1.644,0.886-2.979,0.939c-0.61,0.024-0.837-0.12-1.072-0.347c-0.712-0.689,0.073-0.115,1.132-0.307c0.471-0.085,0.629-0.163,1.128-0.365c0.5-0.201,1.069-0.5,1.636-0.654c0.395-0.106,0.361-0.402,0.208-0.491c-0.088-0.051-0.219-0.046-0.321,0.133c-0.244,0.419-1.383,0.661-1.74,0.771c-0.457,0.14-0.962,0.271-1.634,0.243c-1.021-0.042-0.782-0.509-1.513-0.928c-0.213-0.122-0.156-0.444,0.129-0.729c0.148-0.148,0.557-0.232,0.76-0.572c0.028-0.047,0.289-0.32,0.494-0.461c0.07-0.049,0.076-1.295-0.562-1.32c-0.543-0.021-0.697,0.398-0.675,0.818c0.022,0.419,0.245,0.765,0.393,0.764c0.285-0.004,0.019,0.311-0.138,0.361c-0.237,0.078-0.562-0.934-0.525-1.418c0.039-0.506,0.303-1.4,0.942-1.383c0.576,0.016,0.993,0.737,0.973,1.983c-0.003,0.211,0.935-0.101,1.247,0.229c0.224,0.236-0.767-2.207,1.438-2.375c0.582,0.111,1.14,0.305,1.371,1.641c-0.086,0.139,0.146,1.07-0.215,1.182c-0.438,0.135-0.707-0.02-0.453-0.438c0.172-0.418,0.004-1.483-0.882-1.42c-0.887,0.064-0.769,1.637-0.526,1.668c0.243,0.031,0.854,0.465,1.282,0.549c1.401,0.271,0.371,1.075,0.555,2.048c0.205,1.099,0.929,0.809,1.578,3.717c0.137,0.177,0.676,0.345,1.199,2.579c0.473,2.011-0.195,3.473,0.938,3.353c0.256-0.026,0.629-0.1,0.792-0.668c0.425-1.489-0.213-3.263-0.855-4.46c-0.375-0.698-0.729-1.174-0.916-1.337c0.738,0.436,1.683,1.829,1.898,2.862c0.286,1.358,0.49,1.934,0.059,3.37c0.25,0.125,0.871,0.39,0.871,0.685c-0.647-0.53-2.629-0.625-2.68,0.646c-0.338,0.008-0.594,0.034-0.811,0.293c-0.797,0.944-0.059,2.842-0.139,3.859c-0.07,0.896-0.318,1.783-0.46,2.683c-0.474-0.019-0.428-0.364-0.274-0.852c0.135-0.431,0.351-0.968,0.365-1.484c0.012-0.467-0.039-0.759-0.156-0.831c-0.118-0.072-0.303,0.074-0.559,0.485c-0.543,0.875-1.722,1.261-2.821,1.397c-1.099,0.138-2.123,0.028-2.664-0.578c-0.186-0.207-0.492,0.058-0.529,0.111c-0.049,0.074,0.18,0.219,0.352,0.533c0.251,0.461,0.49,1.159-0.105,1.479C12.83,26.314,12.316,26.221,11.791,25.229L11.791,25.229zM11.398,25.188c0.395,0.621,1.783,3.232-0.652,3.571c-0.814,0.114-2.125-0.474-3.396-0.784c-1.142-0.279-2.301-0.444-2.949-0.627c-0.391-0.108-0.554-0.25-0.588-0.414c-0.091-0.434,0.474-1.041,0.503-1.555c0.028-0.514-0.188-0.779-0.364-1.199c-0.177-0.42-0.224-0.734-0.081-0.914c0.109-0.141,0.334-0.199,0.698-0.164c0.462,0.047,1.02-0.049,1.319-0.23c0.505-0.309,0.742-0.939,0.516-1.699c0,0.744-0.244,1.025-0.855,1.366c-0.577,0.319-1.467,0.062-1.875,0.416c-0.492,0.427,0.175,1.528,0.12,2.338c-0.042,0.622-0.69,1.322-0.401,1.946c0.291,0.627,1.648,0.695,3.064,0.99c2.012,0.422,3.184,1.153,4.113,1.188c1.356,0.05,1.564-1.342,3.693-1.36c0.621-0.033,1.229-0.052,1.835-0.06c0.688-0.009,1.375-0.003,2.079,0.014c1.417,0.034,0.931,0.773,1.851,1.246c0.774,0.397,2.17,0.241,2.504-0.077c0.451-0.431,1.662-1.467,2.592-1.935c1.156-0.583,3.876-1.588,1.902-2.812c-0.461-0.285-1.547-0.588-1.639-2.676c-0.412,0.366-0.365,2.312,0.784,2.697c1.283,0.431,2.085,1.152-0.301,1.969c-1.58,0.54-1.849,0.706-3.099,1.747c-1.267,1.054-3.145,0.636-2.815-1.582c0.171-1.155,0.269-2.11-0.019-3.114c-0.142-0.49-0.211-1.119-0.114-1.562c0.187-0.858,0.651-1.117,1.106-0.293c0.285,0.519,0.385,1.122,1.408,1.171c1.607,0.077,1.926-1.553,2.439-1.627c0.343-0.05,0.686-1.02,0.425-2.589c-0.28-1.681-1.269-4.332-2.536-5.677c-1.053-1.118-1.717-2.098-2.135-3.497c-0.352-1.175-0.547-2.318-0.475-3.412c0.094-1.417-0.691-3.389-1.943-4.316c-0.782-0.581-2.011-0.893-3.122-0.88c-0.623,0.007-1.21,0.099-1.661,0.343c-1.855,1.008-2.113,2.445-2.086,4.088c0.025,1.543,0.078,3.303,0.254,4.977c-0.208,0.77-1.288,2.227-1.979,3.114C8.59,14.233,8.121,16.01,7.52,17.561c-0.321,0.828-0.862,1.2-0.908,2.265C6.6,20.122,6.61,20.891,6.894,20.672C7.98,19.829,9.343,21.95,11.398,25.188L11.398,25.188zM17.044,2.953c-0.06,0.176-0.3,0.321-0.146,0.443c0.152,0.123,0.24-0.171,0.549-0.281c0.08-0.028,0.449,0.012,0.519-0.164c0.03-0.077-0.19-0.164-0.321-0.291c-0.133-0.125-0.262-0.236-0.386-0.229C16.938,2.451,17.096,2.798,17.044,2.953L17.044,2.953zM18.934,9.35c0.115-0.121,0.174,0.207,0.483,0.402c0.244,0.154,0.481,0.04,0.545,0.354c0.044,0.225-0.097,0.467-0.284,0.436C19.35,10.486,18.596,9.705,18.934,9.35L18.934,9.35zM13.832,7.375c-0.508-0.037-0.543,0.33-0.375,0.324C13.629,7.693,13.523,7.408,13.832,7.375L13.832,7.375zM12.96,6.436c0.06-0.013,0.146,0.09,0.119,0.233c-0.037,0.199-0.021,0.324,0.117,0.325c0.022,0,0.048-0.005,0.056-0.057c0.066-0.396-0.14-0.688-0.225-0.711C12.834,6.178,12.857,6.458,12.96,6.436L12.96,6.436zM16.663,6.268c0.129,0.039,0.253,0.262,0.28,0.504c0.002,0.021,0.168-0.035,0.17-0.088c0.011-0.389-0.321-0.571-0.408-0.562C16.506,6.139,16.562,6.238,16.663,6.268L16.663,6.268zM14.765,7.423c0.463-0.214,0.625,0.118,0.465,0.171C15.066,7.648,15.065,7.345,14.765,7.423L14.765,7.423zM9.178,15.304c-0.219-0.026,0.063-0.19,0.184-0.397c0.131-0.227,0.105-0.511,0.244-0.469s0.061,0.2-0.033,0.461C9.491,15.121,9.258,15.313,9.178,15.304L9.178,15.304z");
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROTux)})},
messageSends: ["path:"]}),
smalltalk.ROTux);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeSVGElementOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROTux)})},
messageSends: ["initializeSVGElementOn:for:"]}),
smalltalk.ROTux);



smalltalk.addMethod(
smalltalk.method({
selector: "asSortedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._class())._new();
_st($2)._addAll_(_st(self._asArray())._sorted());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSortedCollection",{},smalltalk.Collection)})},
messageSends: ["addAll:", "sorted", "asArray", "new", "class", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSortedCollection:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self._class())._new();
_st($2)._addAll_(_st(self._asArray())._sorted_(aBlock));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asSortedCollection:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["addAll:", "sorted:", "asArray", "new", "class", "yourself"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:thenSelect:",
fn: function (collectBlock,selectBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collect_(collectBlock))._select_(selectBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:thenSelect:",{collectBlock:collectBlock,selectBlock:selectBlock},smalltalk.Collection)})},
messageSends: ["select:", "collect:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anyOne",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"anyOne",{},smalltalk.SequenceableCollection)})},
messageSends: ["first"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
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

