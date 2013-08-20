smalltalk.addPackage('ARoassal-AttachPoint');
smalltalk.addClass('ROAttachPoint', smalltalk.ROObject, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROAttachPoint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROAttachPoint)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAttachPoint);


smalltalk.ROAttachPoint.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.ROAttachPoint.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ROAttachPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@instance"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetInstance",{},smalltalk.ROAttachPoint.klass)})},
messageSends: []}),
smalltalk.ROAttachPoint.klass);


smalltalk.addClass('ROCenteredAttachPoint', smalltalk.ROAttachPoint, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus(_st(_st(_st(_st(anEdge)._to())._extent()).__slash((2)))._asIntegerPoint());
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROCenteredAttachPoint)})},
messageSends: ["+", "asIntegerPoint", "/", "extent", "to", "absolutePosition"]}),
smalltalk.ROCenteredAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(anEdge)._from())._absolutePosition()).__plus(_st(_st(_st(anEdge)._from())._extent()).__slash((2))))._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROCenteredAttachPoint)})},
messageSends: ["asIntegerPoint", "+", "/", "extent", "from", "absolutePosition"]}),
smalltalk.ROCenteredAttachPoint);



smalltalk.addClass('ROHorizontalAttachPoint', smalltalk.ROAttachPoint, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROHorizontalAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "to", "absolutePosition"]}),
smalltalk.ROHorizontalAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._absolutePosition()).__plus(_st(_st(_st(_st(anEdge)._from())._bounds())._width()).__at(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROHorizontalAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "height", "bounds", "from", "width", "absolutePosition"]}),
smalltalk.ROHorizontalAttachPoint);



smalltalk.addClass('ROShorterDistanceAttachPoint', smalltalk.ROAttachPoint, ['offset'], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "attachPointFor:on:with:",
fn: function (anEdge,anElement,elementsPossibleAttachPoints){
var self=this;
var p,dp,t;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
p=_st(_st(anElement)._absolutePosition()).__plus(_st(_st(anElement)._width()).__at(_st(anElement)._height()));
dp=_st(elementsPossibleAttachPoints)._collect_((function(pp){
return smalltalk.withContext(function($ctx2) {
t=_st(p).__minus(pp);
t;
return _st($Array())._with_with_(_st(t)._dotProduct_(t),pp);
}, function($ctx2) {$ctx2.fillBlock({pp:pp},$ctx1)})}));
$1=_st(_st(dp)._inject_into_(_st(dp)._first(),(function(shorter,el){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(shorter)._first()).__lt(_st(el)._first());
if(smalltalk.assert($2)){
return shorter;
} else {
return el;
};
}, function($ctx2) {$ctx2.fillBlock({shorter:shorter,el:el},$ctx1)})})))._second();
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPointFor:on:with:",{anEdge:anEdge,anElement:anElement,elementsPossibleAttachPoints:elementsPossibleAttachPoints,p:p,dp:dp,t:t},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["+", "@", "height", "width", "absolutePosition", "collect:", "-", "with:with:", "dotProduct:", "second", "inject:into:", "first", "ifTrue:ifFalse:", "<"]}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "attachPointsFor:on:",
fn: function (anEdge,anElement){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_with_with_with_(_st(_st(anElement)._absolutePosition()).__plus(_st(_st(_st(_st(_st(_st(anElement)._bounds())._width()).__slash((2))).__plus(self["@offset"]))._asInteger()).__at((0))),_st(_st(anElement)._absolutePosition()).__plus(_st(_st(_st(anElement)._bounds())._width()).__at(_st(_st(_st(_st(_st(anElement)._bounds())._height()).__slash((2))).__plus(self["@offset"]))._asInteger())),_st(_st(anElement)._absolutePosition()).__plus(_st(_st(_st(_st(_st(_st(anElement)._bounds())._width()).__slash((2))).__plus(self["@offset"]))._asInteger()).__at(_st(_st(anElement)._bounds())._height())),_st(_st(anElement)._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anElement)._bounds())._height()).__slash((2))).__plus(self["@offset"]))._asInteger())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPointsFor:on:",{anEdge:anEdge,anElement:anElement},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["with:with:with:with:", "+", "@", "asInteger", "/", "width", "bounds", "absolutePosition", "height"]}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "destinationAttachPointsFor:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointsFor_on_(anEdge,_st(anEdge)._to());
return $1;
}, function($ctx1) {$ctx1.fill(self,"destinationAttachPointsFor:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["attachPointsFor:on:", "to"]}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointFor_on_with_(anEdge,_st(anEdge)._from(),self._destinationAttachPointsFor_(anEdge));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["attachPointFor:on:with:", "from", "destinationAttachPointsFor:"]}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROShorterDistanceAttachPoint.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@offset"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["initialize"]}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "offset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@offset"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"offset",{},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: []}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "offset:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@offset"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"offset:",{aNumber:aNumber},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: []}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingAttachPointsFor:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointsFor_on_(anEdge,_st(anEdge)._from());
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingAttachPointsFor:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["attachPointsFor:on:", "from"]}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointFor_on_with_(anEdge,_st(anEdge)._to(),self._startingAttachPointsFor_(anEdge));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
messageSends: ["attachPointFor:on:with:", "to", "startingAttachPointsFor:"]}),
smalltalk.ROShorterDistanceAttachPoint);



smalltalk.addClass('ROVerticalAttachPoint', smalltalk.ROAttachPoint, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._absolutePosition()).__plus(_st(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._width()).__slash((2)))._asInteger()).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROVerticalAttachPoint)})},
messageSends: ["+", "@", "asInteger", "/", "width", "bounds", "to", "absolutePosition"]}),
smalltalk.ROVerticalAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._absolutePosition()).__plus(_st(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._width()).__slash((2)))._asInteger()).__at(_st(_st(_st(anEdge)._from())._bounds())._height()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROVerticalAttachPoint)})},
messageSends: ["+", "@", "height", "bounds", "from", "asInteger", "/", "width", "absolutePosition"]}),
smalltalk.ROVerticalAttachPoint);



