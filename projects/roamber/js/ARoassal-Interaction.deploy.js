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



smalltalk.addClass('ROHighlight', smalltalk.ROInteraction, ['color'], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROHighlight)})},
messageSends: []}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROHighlight)})},
messageSends: []}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROHighlight.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st(self._class())._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHighlight)})},
messageSends: ["initialize", "defaultColor", "class"]}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
_st(element)._on_do_($ROMouseEnter(),(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(_st(evt)._element())._color_(self._color());
return _st(_st(_st(evt)._element())._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseLeave(),(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(_st(evt)._element())._color_(_st(_st(_st(element)._shape())._class())._defaultColor());
return _st(_st(_st(evt)._element())._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROHighlight)})},
messageSends: ["on:do:", "color:", "color", "element", "signalUpdate", "view", "defaultColor", "class", "shape"]}),
smalltalk.ROHighlight);


smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._color_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROHighlight.klass)})},
messageSends: ["color:", "new"]}),
smalltalk.ROHighlight.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._red();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROHighlight.klass)})},
messageSends: ["red"]}),
smalltalk.ROHighlight.klass);


smalltalk.addClass('ROHoverable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
var svgElement;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._hover_whenLeave_((function(e){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseEnter())._new();
ev;
_st(ev)._position_(_st(_st(_st(e)._pageX()).__minus(_st(_st($RORaphaelCanvas())._origin())._x())).__at(_st(_st(e)._pageY()).__minus(_st(_st($RORaphaelCanvas())._origin())._y())));
_st(ev)._element_(element);
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({e:e,ev:ev},$ctx1)})}),(function(){
var ev;
return smalltalk.withContext(function($ctx2) {
ev=_st($ROMouseLeave())._new();
ev;
return _st(element)._announce_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.ROHoverable)})},
messageSends: ["svgElement", "shape", "hover:whenLeave:", "new", "position:", "@", "-", "y", "origin", "pageY", "x", "pageX", "element:", "announce:"]}),
smalltalk.ROHoverable);



smalltalk.addClass('ROPopup', smalltalk.ROInteraction, ['text'], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "addPopupToView:",
fn: function (element){
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { 
var $1;
view=self._receivingViewFor_(element);
$1=_st(view).__eq(_st(self._popupElement())._view());
if(! smalltalk.assert($1)){
_st(self._class())._resetPopupElement();
_st(self._class())._addPopupToView_(view);
};
return self}, function($ctx1) {$ctx1.fill(self,"addPopupToView:",{element:element,view:view},smalltalk.ROPopup)})},
messageSends: ["receivingViewFor:", "ifFalse:", "resetPopupElement", "class", "addPopupToView:", "=", "view", "popupElement"]}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
return smalltalk.withContext(function($ctx1) { 
self._addPopupToView_(element);
_st(element)._on_do_($ROMouseEnter(),(function(evt){
return smalltalk.withContext(function($ctx2) {
self._updatePopupElementFor_withEvent_(element,evt);
return _st(self._popupElement())._show();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseLeave(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self._popupElement())._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseDragging(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self._popupElement())._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseDragged(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(self._popupElement())._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROPopup)})},
messageSends: ["addPopupToView:", "on:do:", "updatePopupElementFor:withEvent:", "show", "popupElement", "hide"]}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "popupElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._popupElement();
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupElement",{},smalltalk.ROPopup)})},
messageSends: ["popupElement", "class"]}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "receivingViewFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._view();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receivingViewFor:",{element:element},smalltalk.ROPopup)})},
messageSends: ["view"]}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ROPopup)})},
messageSends: []}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (textBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=textBlock;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{textBlock:textBlock},smalltalk.ROPopup)})},
messageSends: []}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "updatePopupElementFor:withEvent:",
fn: function (element,evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._popupElement())._model_(_st(self["@text"])._roValue_(_st(element)._model()));
_st(self._popupElement())._translateTo_(_st(_st(evt)._position()).__plus((10).__at((10))));
_st(self._popupElement())._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"updatePopupElementFor:withEvent:",{element:element,evt:evt},smalltalk.ROPopup)})},
messageSends: ["model:", "roValue:", "model", "popupElement", "translateTo:", "+", "@", "position", "signalUpdate"]}),
smalltalk.ROPopup);


smalltalk.ROPopup.klass.iVarNames = ['popupElement'];
smalltalk.addMethod(
smalltalk.method({
selector: "addPopupToView:",
fn: function (view){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(view)._add_(self._popupElement());
_st(view)._signalUpdate();
_st(self["@popupElement"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"addPopupToView:",{view:view},smalltalk.ROPopup.klass)})},
messageSends: ["add:", "popupElement", "signalUpdate", "hide"]}),
smalltalk.ROPopup.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._popupElement();
$1=smalltalk.ROPopup.klass.superclass.fn.prototype._elementToBeAdded.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROPopup.klass)})},
messageSends: ["popupElement", "elementToBeAdded"]}),
smalltalk.ROPopup.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "popupElement",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@popupElement"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@popupElement"]=_st(_st($ROLabel())._elementOn_("#model"))._color_(_st($Color())._black());
$1=self["@popupElement"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupElement",{},smalltalk.ROPopup.klass)})},
messageSends: ["ifNil:", "color:", "black", "elementOn:"]}),
smalltalk.ROPopup.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPopupElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popupElement"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetPopupElement",{},smalltalk.ROPopup.klass)})},
messageSends: []}),
smalltalk.ROPopup.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.ROPopup.klass)})},
messageSends: ["text:", "new"]}),
smalltalk.ROPopup.klass);


smalltalk.addClass('ROPopup2', smalltalk.ROInteraction, ['text'], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
fn: function (anElement){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($ROLabel())._new())._elementOn_(_st(self["@text"])._roValue_(_st(anElement)._model())))._color_(_st($Color())._black());
return $1;
}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{anElement:anElement},smalltalk.ROPopup2)})},
messageSends: ["color:", "black", "elementOn:", "roValue:", "model", "new"]}),
smalltalk.ROPopup2);

smalltalk.addMethod(
smalltalk.method({
selector: "createPopupFor:",
fn: function (element){
var self=this;
var popupElement,popupPosition;
return smalltalk.withContext(function($ctx1) { 
var $1;
popupElement=self._createElementFor_(element);
_st(self._receivingViewFor_(element))._add_(popupElement);
$1=popupElement;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPopupFor:",{element:element,popupElement:popupElement,popupPosition:popupPosition},smalltalk.ROPopup2)})},
messageSends: ["createElementFor:", "add:", "receivingViewFor:"]}),
smalltalk.ROPopup2);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPopup2.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPopup2)})},
messageSends: ["initialize"]}),
smalltalk.ROPopup2);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
fn: function (element){
var self=this;
var popupElement;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
return smalltalk.withContext(function($ctx1) { 
popupElement=self._createPopupFor_(element);
_st(popupElement)._signalUpdate();
_st(popupElement)._hide();
_st(element)._on_do_($ROMouseEnter(),(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(popupElement)._translateTo_(_st(evt)._position());
_st(popupElement)._signalUpdate();
return _st(popupElement)._show();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseLeave(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(popupElement)._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseDragging(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(popupElement)._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(element)._on_do_($ROMouseDragged(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return _st(popupElement)._hide();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,popupElement:popupElement},smalltalk.ROPopup2)})},
messageSends: ["createPopupFor:", "signalUpdate", "hide", "on:do:", "translateTo:", "position", "show"]}),
smalltalk.ROPopup2);

smalltalk.addMethod(
smalltalk.method({
selector: "receivingViewFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._view();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receivingViewFor:",{element:element},smalltalk.ROPopup2)})},
messageSends: ["view"]}),
smalltalk.ROPopup2);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (textBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=textBlock;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{textBlock:textBlock},smalltalk.ROPopup2)})},
messageSends: []}),
smalltalk.ROPopup2);


smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.ROPopup2.klass)})},
messageSends: ["text:", "new"]}),
smalltalk.ROPopup2.klass);


