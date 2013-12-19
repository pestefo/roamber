smalltalk.addPackage('ARoassal-Interaction');
smalltalk.addClass('ROInteraction', smalltalk.ROObject, [], 'ARoassal-Interaction');
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
source: "elementToBeAdded\x0a\x09^ self",
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
source: "initializeElement: element\x0a\x09self subclassResponsibility",
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
source: "elementToBeAdded\x0a\x09^ self new",
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
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);


smalltalk.addClass('ROClickable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.ROClickable.comment="REFACTOR:\x0a- Move to ARoassal-Raphaeljs";
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
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
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement |\x0a\x09svgElement := element shape svgElement.\x0a\x09svgElement unclick.\x0a\x09svgElement\x09click: [ \x0a\x09\x09| ev |\x0a\x09\x09\x22 see ROMorph>>roMouseClick:\x22\x0a\x09\x09ev := ROMouseLeftClick new.\x0a\x09\x09element announce: ev.\x0a\x09\x09].",
messageSends: ["svgElement", "shape", "unclick", "click:", "new", "announce:"],
referencedClasses: ["ROMouseLeftClick"]
}),
smalltalk.ROClickable);



smalltalk.addClass('RODraggable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
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
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement originX originY |\x0a\x09svgElement := element shape svgElement.\x0a\x09\x0a\x09svgElement\x09\x0a\x09\x09drag: [ :dx :dy :x :y |\x0a\x09\x09\x09\x22update element position and redraw\x22\x0a\x09\x09\x09element translateTo: (x  - (RORaphaelCanvas origin x) - originX ) @ (y  - (RORaphaelCanvas origin y) - originY). \x0a\x09\x09\x09element signalUpdate.\x0a\x09\x09]\x0a \x09\x09onStart: [ :x :y |\x0a\x09\x09\x09| evt |\x0a\x09\x09\x09\x22 Save mouse position when click\x22\x0a\x09\x09\x09originX := (x - (RORaphaelCanvas origin x)) - element position x.\x0a\x09\x09\x09originY := (y - (RORaphaelCanvas origin y)) - element position y.\x0a\x09\x09\x09\x0a\x09\x09\x09\x22 Announce that an element is being dragged\x22\x0a\x09\x09\x09evt := ROMouseDragging new.\x0a\x09\x09\x09element announce: evt.\x0a\x09\x09]\x0a     \x09onEnd: [ \x0a\x09\x09\x09| evt |\x0a\x09\x09\x09\x22 Announce that an element is was dragged\x22\x0a\x09\x09\x09evt := ROMouseDragged new.\x0a\x09\x09\x09element announce: evt.\x0a\x09\x09].",
messageSends: ["svgElement", "shape", "drag:onStart:onEnd:", "translateTo:", "@", "-", "y", "origin", "x", "signalUpdate", "position", "new", "announce:"],
referencedClasses: ["RORaphaelCanvas", "ROMouseDragging", "ROMouseDragged"]
}),
smalltalk.RODraggable);



smalltalk.addClass('ROHighlight', smalltalk.ROInteraction, ['color'], 'ARoassal-Interaction');
smalltalk.ROHighlight.comment="REFACTOR:\x0a- Move to ARoassal-Raphaeljs";
smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROHighlight)})},
args: [],
source: "color\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROHighlight)})},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROHighlight.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st(self._class())._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHighlight)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09color := self class defaultColor.",
messageSends: ["initialize", "defaultColor", "class"],
referencedClasses: []
}),
smalltalk.ROHighlight);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
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
args: ["element"],
source: "initializeElement: element\x0a\x0a\x09element \x0a\x09\x09on:  ROMouseEnter \x0a\x09\x09do: [:evt | \x0a\x09\x09\x09\x09\x09evt element color: (self color). \x0a\x09\x09\x09\x09\x09evt element view signalUpdate\x0a\x09].\x0a\x09\x0a\x09element \x0a\x09\x09on: ROMouseLeave \x0a\x09\x09do: [:evt | \x0a\x09\x09\x09\x09\x09evt element color: (element shape class defaultColor). \x0a\x09\x09\x09\x09\x09evt element view signalUpdate\x0a\x09].",
messageSends: ["on:do:", "color:", "color", "element", "signalUpdate", "view", "defaultColor", "class", "shape"],
referencedClasses: ["ROMouseEnter", "ROMouseLeave"]
}),
smalltalk.ROHighlight);


smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._color_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROHighlight.klass)})},
args: ["aColor"],
source: "color: aColor\x0a\x09^ self new color: aColor",
messageSends: ["color:", "new"],
referencedClasses: []
}),
smalltalk.ROHighlight.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._red();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROHighlight.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color red.",
messageSends: ["red"],
referencedClasses: ["Color"]
}),
smalltalk.ROHighlight.klass);


smalltalk.addClass('ROHoverable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
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
_st(ev)._position_(_st(_st(_st(_st(e)._pageX()).__minus(_st(_st($RORaphaelCanvas())._origin())._x())).__minus(_st("#roassal-canvas"._asJQuery())._scrollLeft())).__at(_st(_st(_st(e)._pageY()).__minus(_st(_st($RORaphaelCanvas())._origin())._y())).__minus(_st("#roassal-canvas"._asJQuery())._scrollTop())));
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
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement      |\x0a\x09svgElement := element shape svgElement.\x0a\x0a\x09svgElement\x09\x0a\x09\x09hover: [ :e|\x0a\x09\x09| ev |\x0a\x09\x09ev := ROMouseEnter new.\x0a\x22\x09\x09ev position: (e clientX  -  (RORaphaelCanvas origin x)) @ (e clientY -  (RORaphaelCanvas origin y)).\x22\x0a\x09\x09ev position: (e pageX  -  (RORaphaelCanvas origin x) - ('#roassal-canvas' asJQuery scrollLeft) ) @ (e pageY -  (RORaphaelCanvas origin y) - ('#roassal-canvas' asJQuery scrollTop)).\x0a\x09\x09ev element: element.\x0a\x09\x09element announce: ev.\x0a\x09\x09]\x0a\x09\x09whenLeave: [\x0a\x09\x09| ev |\x0a\x09\x09ev := ROMouseLeave new.\x0a\x09\x09element announce: ev.\x0a\x09].",
messageSends: ["svgElement", "shape", "hover:whenLeave:", "new", "position:", "@", "-", "scrollTop", "asJQuery", "y", "origin", "pageY", "scrollLeft", "x", "pageX", "element:", "announce:"],
referencedClasses: ["ROMouseEnter", "RORaphaelCanvas", "ROMouseLeave"]
}),
smalltalk.ROHoverable);



smalltalk.addClass('ROPopup', smalltalk.ROInteraction, ['text'], 'ARoassal-Interaction');
smalltalk.ROPopup.comment="OLD ROPopup";
smalltalk.addMethod(
smalltalk.method({
selector: "createElementFor:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($ROLabel())._new())._elementOn_(_st(self["@text"])._roValue_(_st(anElement)._model())))._color_(_st($Color())._black());
return $1;
}, function($ctx1) {$ctx1.fill(self,"createElementFor:",{anElement:anElement},smalltalk.ROPopup)})},
args: ["anElement"],
source: "createElementFor: anElement\x0a\x0a\x09^ (ROLabel new elementOn: (text roValue: anElement model)) color: Color black",
messageSends: ["color:", "black", "elementOn:", "roValue:", "model", "new"],
referencedClasses: ["Color", "ROLabel"]
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "createPopupFor:",
category: 'not yet classified',
fn: function (element){
var self=this;
var popupElement,popupPosition;
return smalltalk.withContext(function($ctx1) { 
var $1;
popupElement=self._createElementFor_(element);
_st(self._receivingViewFor_(element))._add_(popupElement);
$1=popupElement;
return $1;
}, function($ctx1) {$ctx1.fill(self,"createPopupFor:",{element:element,popupElement:popupElement,popupPosition:popupPosition},smalltalk.ROPopup)})},
args: ["element"],
source: "createPopupFor: element\x0a\x09| popupElement popupPosition |\x0a\x09popupElement := self createElementFor: element.\x0a\x0a\x09\x22 Add it to the view \x22\x0a\x09(self receivingViewFor: element) add: popupElement.\x09\x0a\x0a\x09^ popupElement",
messageSends: ["createElementFor:", "add:", "receivingViewFor:"],
referencedClasses: []
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPopup.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPopup)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09text := #yourself.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'not yet classified',
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
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,popupElement:popupElement},smalltalk.ROPopup)})},
args: ["element"],
source: "initializeElement: element\x0a\x09|  popupElement     |\x0a\x09\x0a\x09popupElement := self createPopupFor: element.\x0a\x09\x0a\x09popupElement signalUpdate.\x0a\x09popupElement hide.\x0a\x0a\x09\x0a\x09element on: ROMouseEnter \x0a\x09\x09do: [ :evt |\x0a\x0a\x09\x09\x09popupElement translateTo: evt position.\x0a\x09\x09\x09popupElement signalUpdate.\x0a\x0a\x09\x09\x09popupElement show.\x0a\x0a\x09].\x0a\x09element on: ROMouseLeave \x0a\x09\x09do: [:evt |\x0a\x09\x09popupElement hide.\x0a\x09].\x0a\x09\x09\x09\x0a\x09element on: ROMouseDragging \x0a\x09\x09do: [ :evt | \x0a\x0a\x09\x09\x09popupElement hide.\x09\x09\x0a\x09].\x09\x0a\x0a\x09element on: ROMouseDragged \x0a\x09\x09do: [ :evt | \x0a\x09\x09\x09popupElement hide.\x09\x09\x0a\x09].",
messageSends: ["createPopupFor:", "signalUpdate", "hide", "on:do:", "translateTo:", "position", "show"],
referencedClasses: ["ROMouseEnter", "ROMouseLeave", "ROMouseDragging", "ROMouseDragged"]
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "receivingViewFor:",
category: 'not yet classified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._view();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receivingViewFor:",{element:element},smalltalk.ROPopup)})},
args: ["element"],
source: "receivingViewFor: element\x0a\x09^ element view",
messageSends: ["view"],
referencedClasses: []
}),
smalltalk.ROPopup);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (textBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=textBlock;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{textBlock:textBlock},smalltalk.ROPopup)})},
args: ["textBlock"],
source: "text: textBlock\x0a\x09text := textBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPopup);


smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.ROPopup.klass)})},
args: ["aString"],
source: "text: aString\x0a\x09^ self new text: aString.",
messageSends: ["text:", "new"],
referencedClasses: []
}),
smalltalk.ROPopup.klass);


