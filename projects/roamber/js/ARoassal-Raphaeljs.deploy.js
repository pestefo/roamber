smalltalk.addPackage('ARoassal-Raphaeljs');
smalltalk.addClass('RORaphael', smalltalk.Object, ['view', 'canvas', 'eventBeginingDragging', 'elementBeingPointed', 'animationBlock'], 'ARoassal-Raphaeljs');
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._bitmap();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bitmap",{},smalltalk.RORaphael)})},
messageSends: ["bitmap"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { 
var $1;
c=_st(self["@view"])._canvasForRealSize_(_st(self._bounds())._extent());
_st(c)._extent_(self._extent());
$1=c;
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{c:c},smalltalk.RORaphael)})},
messageSends: ["canvasForRealSize:", "extent", "bounds", "extent:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._clipBy_during_(self._bounds(),(function(c){
return smalltalk.withContext(function($ctx2) {
return _st(c)._translateBy_during_(_st(self._bounds())._origin(),(function(can){
return smalltalk.withContext(function($ctx3) {
_st(self["@canvas"])._canvas_(can);
return _st(self["@view"])._drawOn_(self["@canvas"]);
}, function($ctx3) {$ctx3.fillBlock({can:can},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{aCanvas:aCanvas},smalltalk.RORaphael)})},
messageSends: ["clipBy:during:", "bounds", "translateBy:during:", "origin", "canvas:", "drawOn:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "elementForEvent:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._elementForRealPosition_(self._relativePositionFor_(evt));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementForEvent:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["elementForRealPosition:", "relativePositionFor:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "elementForRealPosition:",
fn: function (position){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._elementAtRealPosition_(position);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementForRealPosition:",{position:position},smalltalk.RORaphael)})},
messageSends: ["elementAtRealPosition:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (v){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RORaphael.superclass.fn.prototype._extent_.apply(_st(self), [v]);
_st(self["@canvas"])._extent_(v);
_st(self["@view"])._windowSize_(v);
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{v:v},smalltalk.RORaphael)})},
messageSends: ["extent:", "windowSize:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp:",{anEvent:anEvent},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeystroke:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._roKeyStroke_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"handleKeystroke:",{anEvent:anEvent},smalltalk.RORaphael)})},
messageSends: ["roKeyStroke:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseMove:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RORaphael.superclass.fn.prototype._handleMouseMove_.apply(_st(self), [anEvent]);
self._roMouseMoving_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseMove:",{anEvent:anEvent},smalltalk.RORaphael)})},
messageSends: ["handleMouseMove:", "roMouseMoving:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseOver:",
fn: function (anEvent){
var self=this;
var currentElement;
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(anEvent)._wasHandled();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=self._isDragging();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
$5=self["@elementBeingPointed"];
if(($receiver = $5) == nil || $receiver == undefined){
self["@elementBeingPointed"]=self._elementForEvent_(anEvent);
self["@elementBeingPointed"];
} else {
$5;
};
currentElement=self._elementForEvent_(anEvent);
$6=_st(currentElement).__tild_tild(self["@elementBeingPointed"]);
if(smalltalk.assert($6)){
_st(self["@elementBeingPointed"])._announce_($ROMouseLeave());
self["@elementBeingPointed"]=currentElement;
self["@elementBeingPointed"];
self._roMouseEnter_(anEvent);
};
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseOver:",{anEvent:anEvent,currentElement:currentElement},smalltalk.RORaphael)})},
messageSends: ["ifTrue:", "wasHandled", "isDragging", "ifNil:", "elementForEvent:", "announce:", "roMouseEnter:", "~~"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesKeyboard:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"handlesKeyboard:",{evt:evt},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesMouseDown:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anEvent)._wasHandled();
if(smalltalk.assert($1)){
return false;
};
return true;
}, function($ctx1) {$ctx1.fill(self,"handlesMouseDown:",{anEvent:anEvent},smalltalk.RORaphael)})},
messageSends: ["ifTrue:", "wasHandled"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesMouseOver:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"handlesMouseOver:",{evt:evt},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "isDragging",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@eventBeginingDragging"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDragging",{},smalltalk.RORaphael)})},
messageSends: ["notNil"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
fn: function (relativePosition){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=$Transcript();
_st($1)._show_("leave: ".__comma(_st(self._elementForRealPosition_(relativePosition))._printString()));
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"log:",{relativePosition:relativePosition},smalltalk.RORaphael)})},
messageSends: ["show:", ",", "printString", "elementForRealPosition:", "cr"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDown:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@eventBeginingDragging"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(_st(evt)._hand())._waitForClicksOrDrag_event_selectors_threshold_(self,evt,["roMouseClick:",nil,nil,"roMouseDragBegin:"],(5));
$2=self;
return $2;
} else {
$1;
};
$3=_st(evt)._anyButtonPressed();
if(smalltalk.assert($3)){
self._roMouseDragging_(evt);
};
_st(evt)._wasHandled_(true);
return true;
}, function($ctx1) {$ctx1.fill(self,"mouseDown:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["ifNil:", "waitForClicksOrDrag:event:selectors:threshold:", "hand", "ifTrue:", "roMouseDragging:", "anyButtonPressed", "wasHandled:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseEnter:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(evt)._anyButtonPressed();
if(! smalltalk.assert($1)){
self._roMouseEnter_(evt);
};
_st(evt)._wasHandled_(true);
return true;
}, function($ctx1) {$ctx1.fill(self,"mouseEnter:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["ifFalse:", "roMouseEnter:", "anyButtonPressed", "wasHandled:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseLeave:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(evt)._anyButtonPressed();
if(! smalltalk.assert($1)){
self._roMouseLeave_(evt);
};
_st(evt)._wasHandled_(true);
return true;
}, function($ctx1) {$ctx1.fill(self,"mouseLeave:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["ifFalse:", "roMouseLeave:", "anyButtonPressed", "wasHandled:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(evt)._anyButtonPressed();
if(smalltalk.assert($1)){
self._roMouseDragging_(evt);
} else {
self._roMouseMoving_(evt);
};
_st(evt)._wasHandled_(true);
return true;
}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["ifTrue:ifFalse:", "roMouseDragging:", "roMouseMoving:", "anyButtonPressed", "wasHandled:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseUp:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isDragging();
if(smalltalk.assert($1)){
self._roMouseDragEnd_(evt);
};
_st(evt)._wasHandled_(true);
return self}, function($ctx1) {$ctx1.fill(self,"mouseUp:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["ifTrue:", "roMouseDragEnd:", "isDragging", "wasHandled:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openInWindowLabeled_(_st(self["@view"])._title());
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindow",{},smalltalk.RORaphael)})},
messageSends: ["openInWindowLabeled:", "title"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "realToVirtualPoint:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@view"])._camera())._realToVirtualPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"realToVirtualPoint:",{aPoint:aPoint},smalltalk.RORaphael)})},
messageSends: ["realToVirtualPoint:", "camera"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "relativePositionFor:",
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(evt)._position()).__minus(_st(self._bounds())._origin());
return $1;
}, function($ctx1) {$ctx1.fill(self,"relativePositionFor:",{evt:evt},smalltalk.RORaphael)})},
messageSends: ["-", "origin", "bounds", "position"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roKeyStroke:",
fn: function (evt){
var self=this;
var relativePosition,ev,virtualPosition,keyValue;
function $ROKeyDown(){return smalltalk.ROKeyDown||(typeof ROKeyDown=="undefined"?nil:ROKeyDown)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@view"])._announce_(_st(_st($ROKeyDown())._new())._keyValue_(_st(evt)._keyValue()));
return self}, function($ctx1) {$ctx1.fill(self,"roKeyStroke:",{evt:evt,relativePosition:relativePosition,ev:ev,virtualPosition:virtualPosition,keyValue:keyValue},smalltalk.RORaphael)})},
messageSends: ["announce:", "keyValue:", "keyValue", "new"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseClick:",
fn: function (evt){
var self=this;
var relativePosition,ev,virtualPosition;
function $ROMouseRightClick(){return smalltalk.ROMouseRightClick||(typeof ROMouseRightClick=="undefined"?nil:ROMouseRightClick)}
function $ROMouseLeftClick(){return smalltalk.ROMouseLeftClick||(typeof ROMouseLeftClick=="undefined"?nil:ROMouseLeftClick)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
relativePosition=self._relativePositionFor_(evt);
$1=_st(evt)._yellowButtonChanged();
if(smalltalk.assert($1)){
ev=_st($ROMouseRightClick())._new();
ev;
};
$2=_st(evt)._redButtonChanged();
if(smalltalk.assert($2)){
ev=_st($ROMouseLeftClick())._new();
ev;
};
$3=_st(evt)._blueButtonChanged();
if(smalltalk.assert($3)){
ev=_st($ROMouseClick())._new();
ev;
};
_st(ev)._commandKeyPressed_(_st(evt)._commandKeyPressed());
_st(ev)._controlKeyPressed_(_st(evt)._controlKeyPressed());
_st(ev)._shiftKeyPressed_(_st(evt)._shiftPressed());
virtualPosition=self._realToVirtualPoint_(relativePosition);
_st(ev)._position_(virtualPosition);
_st(self._elementForRealPosition_(relativePosition))._announce_(ev);
return self}, function($ctx1) {$ctx1.fill(self,"roMouseClick:",{evt:evt,relativePosition:relativePosition,ev:ev,virtualPosition:virtualPosition},smalltalk.RORaphael)})},
messageSends: ["relativePositionFor:", "ifTrue:", "new", "yellowButtonChanged", "redButtonChanged", "blueButtonChanged", "commandKeyPressed:", "commandKeyPressed", "controlKeyPressed:", "controlKeyPressed", "shiftKeyPressed:", "shiftPressed", "realToVirtualPoint:", "position:", "announce:", "elementForRealPosition:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseDragBegin:",
fn: function (evt){
var self=this;
var relativePosition;
return smalltalk.withContext(function($ctx1) { 
self["@eventBeginingDragging"]=_st(evt)._copy();
relativePosition=self._relativePositionFor_(evt);
self["@elementBeingPointed"]=self._elementForRealPosition_(relativePosition);
return self}, function($ctx1) {$ctx1.fill(self,"roMouseDragBegin:",{evt:evt,relativePosition:relativePosition},smalltalk.RORaphael)})},
messageSends: ["copy", "relativePositionFor:", "elementForRealPosition:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseDragEnd:",
fn: function (evt){
var self=this;
var relativePosition,step,event;
function $ROMouseDragged(){return smalltalk.ROMouseDragged||(typeof ROMouseDragged=="undefined"?nil:ROMouseDragged)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
relativePosition=self._relativePositionFor_(evt);
step=_st(_st(evt)._position()).__minus(_st(self["@eventBeginingDragging"])._position());
$1=_st($ROMouseDragged())._new();
_st($1)._step_(step);
$2=_st($1)._yourself();
event=$2;
_st(event)._position_(self._realToVirtualPoint_(relativePosition));
_st(self["@elementBeingPointed"])._announce_(event);
self["@eventBeginingDragging"]=nil;
self["@elementBeingPointed"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"roMouseDragEnd:",{evt:evt,relativePosition:relativePosition,step:step,event:event},smalltalk.RORaphael)})},
messageSends: ["relativePositionFor:", "-", "position", "step:", "new", "yourself", "position:", "realToVirtualPoint:", "announce:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseDragging:",
fn: function (evt){
var self=this;
var step,relativePosition,event,virtualStep;
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self["@eventBeginingDragging"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
relativePosition=self._relativePositionFor_(evt);
step=_st(_st(evt)._position()).__minus(_st(self["@eventBeginingDragging"])._position());
$3=self["@elementBeingPointed"];
if(($receiver = $3) == nil || $receiver == undefined){
self["@elementBeingPointed"]=self._elementForRealPosition_(relativePosition);
self["@elementBeingPointed"];
} else {
$3;
};
$4=_st($ROMouseDragging())._new();
_st($4)._step_(step);
$5=_st($4)._yourself();
event=$5;
_st(event)._commandKeyPressed_(_st(evt)._commandKeyPressed());
_st(event)._controlKeyPressed_(_st(evt)._controlKeyPressed());
_st(event)._shiftKeyPressed_(_st(evt)._shiftPressed());
_st(event)._position_(relativePosition);
_st(self["@elementBeingPointed"])._announce_(event);
self["@eventBeginingDragging"]=_st(evt)._copy();
return self}, function($ctx1) {$ctx1.fill(self,"roMouseDragging:",{evt:evt,step:step,relativePosition:relativePosition,event:event,virtualStep:virtualStep},smalltalk.RORaphael)})},
messageSends: ["ifNil:", "relativePositionFor:", "-", "position", "elementForRealPosition:", "step:", "new", "yourself", "commandKeyPressed:", "commandKeyPressed", "controlKeyPressed:", "controlKeyPressed", "shiftKeyPressed:", "shiftPressed", "position:", "announce:", "copy"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseEnter:",
fn: function (evt){
var self=this;
var relativePosition,ev,virtualPosition,element;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
return smalltalk.withContext(function($ctx1) { 
relativePosition=self._relativePositionFor_(evt);
element=self._elementForRealPosition_(relativePosition);
virtualPosition=_st(_st(_st(element)._view())._camera())._realToVirtualPoint_(relativePosition);
ev=_st($ROMouseEnter())._new();
_st(ev)._position_(virtualPosition);
_st(ev)._realPosition_(relativePosition);
_st(ev)._element_(element);
_st(element)._announce_(ev);
return self}, function($ctx1) {$ctx1.fill(self,"roMouseEnter:",{evt:evt,relativePosition:relativePosition,ev:ev,virtualPosition:virtualPosition,element:element},smalltalk.RORaphael)})},
messageSends: ["relativePositionFor:", "elementForRealPosition:", "realToVirtualPoint:", "camera", "view", "new", "position:", "realPosition:", "element:", "announce:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseLeave:",
fn: function (evt){
var self=this;
var relativePosition,ev,virtualPosition,element;
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
relativePosition=self._relativePositionFor_(evt);
element=self._elementForRealPosition_(relativePosition);
virtualPosition=_st(_st(_st(element)._view())._camera())._realToVirtualPoint_(relativePosition);
ev=_st($ROMouseLeave())._new();
_st(ev)._position_(virtualPosition);
_st(element)._announce_(ev);
return self}, function($ctx1) {$ctx1.fill(self,"roMouseLeave:",{evt:evt,relativePosition:relativePosition,ev:ev,virtualPosition:virtualPosition,element:element},smalltalk.RORaphael)})},
messageSends: ["relativePositionFor:", "elementForRealPosition:", "realToVirtualPoint:", "camera", "view", "new", "position:", "announce:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseMoving:",
fn: function (evt){
var self=this;
var relativePosition,ev;
function $ROMouseMove(){return smalltalk.ROMouseMove||(typeof ROMouseMove=="undefined"?nil:ROMouseMove)}
return smalltalk.withContext(function($ctx1) { 
relativePosition=self._relativePositionFor_(evt);
ev=_st($ROMouseMove())._new();
_st(ev)._position_(_st(_st(self["@view"])._camera())._realToVirtualPoint_(relativePosition));
_st(self._elementForRealPosition_(relativePosition))._announce_(ev);
return self}, function($ctx1) {$ctx1.fill(self,"roMouseMoving:",{evt:evt,relativePosition:relativePosition,ev:ev},smalltalk.RORaphael)})},
messageSends: ["relativePositionFor:", "new", "position:", "realToVirtualPoint:", "camera", "announce:", "elementForRealPosition:"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "setView:",
fn: function (anROView){
var self=this;
function $RORefreshNeeded(){return smalltalk.RORefreshNeeded||(typeof RORefreshNeeded=="undefined"?nil:RORefreshNeeded)}
function $ROViewChanged(){return smalltalk.ROViewChanged||(typeof ROViewChanged=="undefined"?nil:ROViewChanged)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=anROView;
_st(self["@view"])._on_do_($RORefreshNeeded(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._changed();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(self["@view"])._on_do_($ROViewChanged(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(event)._newView())._on_do_($RORefreshNeeded(),(function(e){
return smalltalk.withContext(function($ctx3) {
return self._changed();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
return self._changed();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
self["@canvas"]=_st(_st(self["@view"])._camera())._canvas();
self._extent_(_st(self["@view"])._defaultWindowSize());
_st(self["@canvas"])._extent_(self._extent());
return self}, function($ctx1) {$ctx1.fill(self,"setView:",{anROView:anROView},smalltalk.RORaphael)})},
messageSends: ["on:do:", "changed", "newView", "canvas", "camera", "extent:", "defaultWindowSize", "extent"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@animationBlock"])._isComplete();
if(smalltalk.assert($1)){
self["@animationBlock"]=nil;
self["@animationBlock"];
self._stopStepping();
$2=self;
return $2;
};
_st(self["@animationBlock"])._incrementStep();
self._changed();
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.RORaphael)})},
messageSends: ["ifTrue:", "stopStepping", "isComplete", "incrementStep", "changed"]}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "stepTime",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"stepTime",{},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "takesKeyboardFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"takesKeyboardFocus",{},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RORaphael)})},
messageSends: []}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "wantsSteps",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@animationBlock"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"wantsSteps",{},smalltalk.RORaphael)})},
messageSends: ["notNil"]}),
smalltalk.RORaphael);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setView_(aView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aView:aView},smalltalk.RORaphael.klass)})},
messageSends: ["setView:", "new", "yourself"]}),
smalltalk.RORaphael.klass);


smalltalk.addClass('RORaphaelCanvas', smalltalk.ROObject, ['svgCanvas'], 'ARoassal-Raphaeljs');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.RORaphaelCanvas)})},
messageSends: []}),
smalltalk.RORaphaelCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.RORaphaelCanvas.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=self._paper();
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RORaphaelCanvas)})},
messageSends: ["initialize", "paper"]}),
smalltalk.RORaphaelCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Raphael("container", 800, 600);;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.RORaphaelCanvas)})},
messageSends: []}),
smalltalk.RORaphaelCanvas);


smalltalk.RORaphaelCanvas.klass.iVarNames = ['paper'];
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@paper"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@paper"]=_st(self._basicNew())._initialize();
self["@paper"];
} else {
$1;
};
$2=_st(self["@paper"])._canvas();
return $2;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.RORaphaelCanvas.klass)})},
messageSends: ["ifNil:", "initialize", "basicNew", "canvas"]}),
smalltalk.RORaphaelCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Use canvas instead.");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.RORaphaelCanvas.klass)})},
messageSends: ["error:"]}),
smalltalk.RORaphaelCanvas.klass);


