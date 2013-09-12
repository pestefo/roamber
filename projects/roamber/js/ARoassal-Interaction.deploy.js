smalltalk.addPackage('ARoassal-Interaction');
smalltalk.addClass('ROInteraction', smalltalk.ROObject, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction)})},
messageSends: []}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction)})},
messageSends: ["class"]}),
smalltalk.ROInteraction);


smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction.klass)})},
messageSends: ["new"]}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
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
messageSends: ["initializeElement:", "elementToBeAdded", "yourself"]}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction.klass)})},
messageSends: []}),
smalltalk.ROInteraction.klass);


smalltalk.addClass('ROAbstractPopup', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "createPopupFor:",
fn: function (element){
var self=this;
var popupElement,popupPosition;
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1;
popupElement=self._createElementFor_(element);
_st(popupElement)._translateTo_(self._popupPositionFor_(element));
_st(popupElement)._on_do_($ROMouseDragged(),(function(e){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._show_("ROMouseDragged event catched".__comma(_st($String())._cr()));
_st(_st(popupElement)._svgElement())._translate_y_(_st(_st(_st(element)._position())._x()).__minus(_st(_st(popupElement)._position())._x()),_st(_st(_st(element)._position())._y()).__minus(_st(_st(popupElement)._position())._y()));
return _st(popupElement)._translateTo_(self._popupPositionFor_(_st(e)._element()));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self._receivingViewFor_(element))._add_(popupElement);
$1=popupElement;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPopupFor:",{element:element,popupElement:popupElement,popupPosition:popupPosition},smalltalk.ROAbstractPopup)})},
messageSends: ["createElementFor:", "translateTo:", "popupPositionFor:", "on:do:", "show:", ",", "cr", "translate:y:", "-", "x", "position", "y", "svgElement", "element", "add:", "receivingViewFor:"]}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
var svgElement,popupElement;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
popupElement=self._createPopupFor_(element);
_st(element)._signalUpdate();
_st(popupElement)._hide();
_st(svgElement)._hover_whenLeave_((function(x,y){
var ev;
return smalltalk.withContext(function($ctx2) {
_st(popupElement)._show();
ev=_st($ROMouseEnter())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y,ev:ev},$ctx1)})}),(function(){
var ev;
return smalltalk.withContext(function($ctx2) {
_st(popupElement)._hide();
ev=_st($ROMouseLeave())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
_st(element)._on_do_($ROMouseDragging(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(popupElement)._translateTo_(self._popupPositionFor_(element));
return _st(popupElement)._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement,popupElement:popupElement},smalltalk.ROAbstractPopup)})},
messageSends: ["svgElement", "shape", "createPopupFor:", "signalUpdate", "hide", "hover:whenLeave:", "show", "new", "announce:", "on:do:", "translateTo:", "popupPositionFor:"]}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "popupPositionFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(element)._position())._x()).__plus((10))).__at(_st(_st(_st(element)._position())._y()).__plus((10)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupPositionFor:",{element:element},smalltalk.ROAbstractPopup)})},
messageSends: ["@", "+", "y", "position", "x"]}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "popups",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._popups();
return $1;
}, function($ctx1) {$ctx1.fill(self,"popups",{},smalltalk.ROAbstractPopup)})},
messageSends: ["popups", "class"]}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "receivingViewFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._view();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receivingViewFor:",{element:element},smalltalk.ROAbstractPopup)})},
messageSends: ["view"]}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllPopups",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._popups())._do_((function(p){
return smalltalk.withContext(function($ctx2) {
return self._removePopup_(p);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1)})}));
_st(self._class())._resetPopups();
return self}, function($ctx1) {$ctx1.fill(self,"removeAllPopups",{},smalltalk.ROAbstractPopup)})},
messageSends: ["do:", "removePopup:", "popups", "resetPopups", "class"]}),
smalltalk.ROAbstractPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "removePopup:",
fn: function (el){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=el;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(el)._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"removePopup:",{el:el},smalltalk.ROAbstractPopup)})},
messageSends: ["ifNotNil:", "remove"]}),
smalltalk.ROAbstractPopup);


smalltalk.ROAbstractPopup.klass.iVarNames = ['popups'];
smalltalk.addMethod(
smalltalk.method({
selector: "popups",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@popups"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@popups"]=_st($OrderedCollection())._new();
$1=self["@popups"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"popups",{},smalltalk.ROAbstractPopup.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ROAbstractPopup.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPopups",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popups"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetPopups",{},smalltalk.ROAbstractPopup.klass)})},
messageSends: []}),
smalltalk.ROAbstractPopup.klass);


smalltalk.addClass('ROPopup', smalltalk.ROAbstractPopup, ['text'], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
fn: function (anElement){
var self=this;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($ROElement())._on_("popup label");
_st($2).__plus(_st($ROLabel())._text_(_st(_st(anElement)._model())._asString()));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{anElement:anElement},smalltalk.ROPopup)})},
messageSends: ["+", "text:", "asString", "model", "on:", "yourself"]}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPopup.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPopup)})},
messageSends: ["initialize"]}),
smalltalk.ROPopup);



smalltalk.addClass('ROClickable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
var svgElement;
function $ROMouseLeftClick(){return smalltalk.ROMouseLeftClick||(typeof ROMouseLeftClick=="undefined"?nil:ROMouseLeftClick)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._unclick();
_st(svgElement)._click_((function(){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseLeftClick())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.ROClickable)})},
messageSends: ["svgElement", "shape", "unclick", "click:", "new", "announce:"]}),
smalltalk.ROClickable);



smalltalk.addClass('RODraggable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
var svgElement,originX,originY;
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._drag_onStart_onEnd_((function(dx,dy,x,y){
return smalltalk.withContext(function($ctx2) {
_st(element)._translateTo_(_st(_st(_st(x).__minus(_st(_st($RORaphaelCanvas())._origin())._x())).__minus(originX)).__at(_st(_st(y).__minus(_st(_st($RORaphaelCanvas())._origin())._y())).__minus(originY)));
return _st(element)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({dx:dx,dy:dy,x:x,y:y},$ctx1)})}),(function(x,y){
var evt;
return smalltalk.withContext(function($ctx2) {
originX=_st(_st(x).__minus(_st(_st($RORaphaelCanvas())._origin())._x())).__minus(_st(_st(element)._position())._x());
originX;
originY=_st(_st(y).__minus(_st(_st($RORaphaelCanvas())._origin())._y())).__minus(_st(_st(element)._position())._y());
originY;
evt=_st($ROMouseDragging())._new();
evt;
return _st(element)._announce_(evt);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y,evt:evt},$ctx1)})}),(function(){
var evt;
return smalltalk.withContext(function($ctx2) {
evt=_st($ROMouseDragged())._new();
evt;
return _st(element)._announce_(evt);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement,originX:originX,originY:originY},smalltalk.RODraggable)})},
messageSends: ["svgElement", "shape", "drag:onStart:onEnd:", "translateTo:", "@", "-", "y", "origin", "x", "signalUpdate", "position", "new", "announce:"]}),
smalltalk.RODraggable);



smalltalk.addClass('ROHoverable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
var svgElement;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._unclick();
_st(svgElement)._hover_whenLeave_((function(){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseEnter())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}),(function(){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseLeave())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.ROHoverable)})},
messageSends: ["svgElement", "shape", "unclick", "hover:whenLeave:", "new", "announce:"]}),
smalltalk.ROHoverable);



