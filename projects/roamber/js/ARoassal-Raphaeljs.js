smalltalk.addPackage('ARoassal-Raphaeljs');
smalltalk.addClass('RORaphael', smalltalk.Object, ['view', 'canvas', 'eventBeginingDragging', 'elementBeingPointed', 'animationBlock'], 'ARoassal-Raphaeljs');
smalltalk.RORaphael.comment="A ROMorph is the unique interface between Roassal and Morphic\x0a\x0aInstance Variables\x0a\x09animationBlock:\x09\x09<Object>\x0a\x09canvas:\x09\x09<Object>\x0a\x09elementBeingPointed:\x09\x09<Object>\x0a\x09eventBeginingDragging:\x09\x09<Object>\x0a\x09view:\x09\x09<Object>\x0a\x0aanimationBlock\x0a\x09- xxxxx\x0a\x0acanvas\x0a\x09- xxxxx\x0a\x0aelementBeingPointed\x0a\x09- xxxxx\x0a\x0aeventBeginingDragging\x0a\x09- xxxxx\x0a\x0aview\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "bitmap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._bitmap();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bitmap",{},smalltalk.RORaphael)})},
args: [],
source: "bitmap\x0a\x09\x22view camera realExtent: self bounds extent. \x22\x0a\x09^ view bitmap",
messageSends: ["bitmap"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
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
args: [],
source: "canvas\x0a\x09| c |\x0a\x09c := view canvasForRealSize: self bounds extent.\x0a\x09c extent: self extent.\x0a\x09^ c",
messageSends: ["canvasForRealSize:", "extent", "bounds", "extent:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
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
args: ["aCanvas"],
source: "drawOn: aCanvas\x0a\x09aCanvas clipBy: self bounds during: [ :c |\x0a\x09\x09c translateBy: self bounds origin during:\x0a\x09\x09\x09[ :can | \x0a\x09\x09\x09\x09canvas canvas: can.\x0a\x09\x09\x09\x09view drawOn: canvas ] ].",
messageSends: ["clipBy:during:", "bounds", "translateBy:during:", "origin", "canvas:", "drawOn:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "elementForEvent:",
category: 'accessing',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._elementForRealPosition_(self._relativePositionFor_(evt));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementForEvent:",{evt:evt},smalltalk.RORaphael)})},
args: ["evt"],
source: "elementForEvent: evt\x0a\x09\x22evt contains a real position, since this is where the user click on the screen\x22\x0a\x09\x0a\x09^ self elementForRealPosition: (self relativePositionFor: evt)",
messageSends: ["elementForRealPosition:", "relativePositionFor:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "elementForRealPosition:",
category: 'accessing',
fn: function (position){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._elementAtRealPosition_(position);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementForRealPosition:",{position:position},smalltalk.RORaphael)})},
args: ["position"],
source: "elementForRealPosition: position\x0a\x09\x22evt contains a real position, since this is where the user click on the screen\x22\x0a\x09\x0a\x09^ view elementAtRealPosition: position",
messageSends: ["elementAtRealPosition:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'drawing',
fn: function (v){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RORaphael.superclass.fn.prototype._extent_.apply(_st(self), [v]);
_st(self["@canvas"])._extent_(v);
_st(self["@view"])._windowSize_(v);
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{v:v},smalltalk.RORaphael)})},
args: ["v"],
source: "extent: v\x0a\x09\x0a\x09super extent: v.\x09\x0a\x09canvas extent: v.\x0a\x09view windowSize: v.",
messageSends: ["extent:", "windowSize:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyDown:",
category: 'events-processing',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyDown:",{anEvent:anEvent},smalltalk.RORaphael)})},
args: ["anEvent"],
source: "handleKeyDown: anEvent\x0a\x09\x0a\x09\x22COMENTED FOR NOW\x22\x0a\x0a\x09\x22System level event handling.\x22\x0a\x22\x09anEvent wasHandled ifTrue:[^self].\x0a\x09(self handlesKeyboard: anEvent) ifFalse:[^self].\x0a\x09anEvent wasHandled: true.\x0a\x09^self keyDown: anEvent\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyUp:",
category: 'events-processing',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyUp:",{anEvent:anEvent},smalltalk.RORaphael)})},
args: ["anEvent"],
source: "handleKeyUp: anEvent\x0a\x0a\x09\x22COMENTED FOR NOW\x22\x0a\x09\x22System level event handling.\x22\x0a\x22\x09anEvent wasHandled ifTrue:[^self].\x0a\x09(self handlesKeyboard: anEvent) ifFalse:[^self].\x0a\x09anEvent wasHandled: true.\x0a\x09^self keyDown: anEvent\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeystroke:",
category: 'events-processing',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._roKeyStroke_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"handleKeystroke:",{anEvent:anEvent},smalltalk.RORaphael)})},
args: ["anEvent"],
source: "handleKeystroke: anEvent\x0a\x09\x0a\x09self roKeyStroke: anEvent.",
messageSends: ["roKeyStroke:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseMove:",
category: 'events-processing',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RORaphael.superclass.fn.prototype._handleMouseMove_.apply(_st(self), [anEvent]);
self._roMouseMoving_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"handleMouseMove:",{anEvent:anEvent},smalltalk.RORaphael)})},
args: ["anEvent"],
source: "handleMouseMove: anEvent\x0a\x0a\x09super handleMouseMove: anEvent.\x0a\x09\x09\x0a\x09self roMouseMoving: anEvent.",
messageSends: ["handleMouseMove:", "roMouseMoving:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handleMouseOver:",
category: 'events-processing',
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
args: ["anEvent"],
source: "handleMouseOver: anEvent\x0a\x0a\x09| currentElement |\x0a\x09anEvent wasHandled ifTrue:[ ^ self ]. \x22not interested\x22\x0a\x09\x22Do nothing if we are dragging\x22\x0a\x09self isDragging ifTrue: [ ^ self ].\x0a\x09 \x0a\x09elementBeingPointed ifNil: [ elementBeingPointed := self elementForEvent: anEvent ].\x0a\x09\x0a\x09currentElement := self elementForEvent: anEvent.\x0a\x0a\x22Transcript show: (view camera realToVirtualPoint: (self relativePositionFor: anEvent)) printString, '   ',  (elementBeingPointed == currentElement) printString; cr.\x22\x0a\x0a\x09(currentElement ~~ elementBeingPointed)\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09\x22Transcript show: 'mouse over: ', anEvent  printString, '  ', elementBeingPointed printString, '   ', currentElement printString; cr.\x22\x0a\x09\x09\x09\x22self roMouseLeave: anEvent.\x22\x0a\x09\x09\x09elementBeingPointed announce: ROMouseLeave.\x0a\x09\x09\x09elementBeingPointed := currentElement.\x0a\x09\x09\x09self roMouseEnter: anEvent ].\x0a\x09\x09\x0a\x22\x09self roMouseMoving: anEvent.\x22",
messageSends: ["ifTrue:", "wasHandled", "isDragging", "ifNil:", "elementForEvent:", "announce:", "roMouseEnter:", "~~"],
referencedClasses: ["ROMouseLeave"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesKeyboard:",
category: 'events-processing',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"handlesKeyboard:",{evt:evt},smalltalk.RORaphael)})},
args: ["evt"],
source: "handlesKeyboard: evt\x0a\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesMouseDown:",
category: 'events-processing',
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
args: ["anEvent"],
source: "handlesMouseDown: anEvent\x0a\x09anEvent wasHandled ifTrue:[ ^ false ]. \x22not interested\x22\x0a\x0a\x09^ true",
messageSends: ["ifTrue:", "wasHandled"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesMouseOver:",
category: 'events-processing',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"handlesMouseOver:",{evt:evt},smalltalk.RORaphael)})},
args: ["evt"],
source: "handlesMouseOver: evt\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "isDragging",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@eventBeginingDragging"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDragging",{},smalltalk.RORaphael)})},
args: [],
source: "isDragging\x0a\x09^ eventBeginingDragging notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
category: 'events-processing',
fn: function (relativePosition){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=$Transcript();
_st($1)._show_("leave: ".__comma(_st(self._elementForRealPosition_(relativePosition))._printString()));
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"log:",{relativePosition:relativePosition},smalltalk.RORaphael)})},
args: ["relativePosition"],
source: "log: relativePosition\x0a\x09Transcript\x0a\x09\x09show: 'leave: ' , (self elementForRealPosition: relativePosition) printString;\x0a\x09\x09cr",
messageSends: ["show:", ",", "printString", "elementForRealPosition:", "cr"],
referencedClasses: ["Transcript"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseDown:",
category: 'events-processing',
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
args: ["evt"],
source: "mouseDown: evt\x0a\x0a\x09eventBeginingDragging ifNil: [\x0a\x09\x09evt hand \x0a\x09\x09\x09\x09\x09waitForClicksOrDrag: self \x0a\x09\x09\x09\x09\x09event: evt \x0a\x09\x09\x09\x09\x09selectors: { #roMouseClick:. nil. nil. #roMouseDragBegin: }\x0a\x09\x09\x09\x09\x09threshold: 5.\x0a\x09\x09^ self ].\x0a\x09\x0a\x09evt anyButtonPressed ifTrue: [\x0a\x09\x09self roMouseDragging: evt.\x0a\x09].\x0a\x09evt wasHandled: true.\x0a\x09^ true",
messageSends: ["ifNil:", "waitForClicksOrDrag:event:selectors:threshold:", "hand", "ifTrue:", "roMouseDragging:", "anyButtonPressed", "wasHandled:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseEnter:",
category: 'events-processing',
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
args: ["evt"],
source: "mouseEnter: evt\x0a\x22\x09Transcript show: 'mouseEnter ', evt printString; cr.\x22\x0a\x09\x0a\x09evt anyButtonPressed ifFalse: [\x0a\x09\x09self roMouseEnter: evt.\x0a\x09].\x0a\x09evt wasHandled: true.\x0a\x09^ true",
messageSends: ["ifFalse:", "roMouseEnter:", "anyButtonPressed", "wasHandled:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseLeave:",
category: 'events-processing',
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
args: ["evt"],
source: "mouseLeave: evt\x0a\x09\x0a\x09evt anyButtonPressed ifFalse: [\x0a\x09\x09self roMouseLeave: evt.\x0a\x09].\x0a\x09evt wasHandled: true.\x0a\x09^ true",
messageSends: ["ifFalse:", "roMouseLeave:", "anyButtonPressed", "wasHandled:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
category: 'events-processing',
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
args: ["evt"],
source: "mouseMove: evt\x0a\x09\x0a\x09evt anyButtonPressed\x0a\x09\x09ifTrue: [ self roMouseDragging: evt ] \x0a\x09\x09ifFalse: [ self roMouseMoving: evt ].\x0a\x09evt wasHandled: true.\x0a\x09^ true",
messageSends: ["ifTrue:ifFalse:", "roMouseDragging:", "roMouseMoving:", "anyButtonPressed", "wasHandled:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseUp:",
category: 'events-processing',
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
args: ["evt"],
source: "mouseUp: evt\x0a\x09self isDragging ifTrue: \x0a\x09\x09[self roMouseDragEnd: evt ].\x0a\x09evt wasHandled: true.",
messageSends: ["ifTrue:", "roMouseDragEnd:", "isDragging", "wasHandled:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindow",
category: 'morph',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openInWindowLabeled_(_st(self["@view"])._title());
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindow",{},smalltalk.RORaphael)})},
args: [],
source: "openInWindow\x0a\x09\x22Open a window that contains the morph\x22\x0a\x0a\x09^ self openInWindowLabeled: view title",
messageSends: ["openInWindowLabeled:", "title"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "realToVirtualPoint:",
category: 'util',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@view"])._camera())._realToVirtualPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"realToVirtualPoint:",{aPoint:aPoint},smalltalk.RORaphael)})},
args: ["aPoint"],
source: "realToVirtualPoint: aPoint\x0a\x09\x22^ (view canvasForRealSize: self extent) realToVirtualPoint: aPoint\x22\x0a\x09^ view camera realToVirtualPoint: aPoint",
messageSends: ["realToVirtualPoint:", "camera"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "relativePositionFor:",
category: 'events-processing',
fn: function (evt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(evt)._position()).__minus(_st(self._bounds())._origin());
return $1;
}, function($ctx1) {$ctx1.fill(self,"relativePositionFor:",{evt:evt},smalltalk.RORaphael)})},
args: ["evt"],
source: "relativePositionFor: evt\x0a\x09\x22Return the position within the window\x22\x0a\x09\x0a\x09^ evt position - self bounds origin",
messageSends: ["-", "origin", "bounds", "position"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roKeyStroke:",
category: 'events-processing',
fn: function (evt){
var self=this;
var relativePosition,ev,virtualPosition,keyValue;
function $ROKeyDown(){return smalltalk.ROKeyDown||(typeof ROKeyDown=="undefined"?nil:ROKeyDown)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@view"])._announce_(_st(_st($ROKeyDown())._new())._keyValue_(_st(evt)._keyValue()));
return self}, function($ctx1) {$ctx1.fill(self,"roKeyStroke:",{evt:evt,relativePosition:relativePosition,ev:ev,virtualPosition:virtualPosition,keyValue:keyValue},smalltalk.RORaphael)})},
args: ["evt"],
source: "roKeyStroke: evt\x0a\x09| relativePosition ev virtualPosition keyValue |\x0a\x09\x0a\x09view announce: (ROKeyDown new keyValue: evt keyValue).",
messageSends: ["announce:", "keyValue:", "keyValue", "new"],
referencedClasses: ["ROKeyDown"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseClick:",
category: 'events-processing',
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
args: ["evt"],
source: "roMouseClick: evt\x0a\x09| relativePosition ev virtualPosition |\x0a\x09relativePosition := self relativePositionFor: evt.\x09\x0a\x09evt yellowButtonChanged\x0a\x09\x09ifTrue: [ ev := ROMouseRightClick new ].\x0a\x09evt redButtonChanged\x0a\x09\x09ifTrue: [ ev := ROMouseLeftClick new ].\x0a\x09evt blueButtonChanged\x0a\x09\x09ifTrue: [ ev := ROMouseClick new ].\x0a\x0a\x09ev commandKeyPressed: evt commandKeyPressed.\x0a\x09ev controlKeyPressed: evt controlKeyPressed.\x0a\x09ev shiftKeyPressed: evt shiftPressed.\x0a\x0a\x09virtualPosition := self realToVirtualPoint: relativePosition.\x0a\x09ev position: virtualPosition.\x0a\x22\x09Transcript show: (self elementForRealPosition: relativePosition) printString, '     ', relativePosition printString; cr.\x22\x0a\x09(self elementForRealPosition: relativePosition) announce: ev.\x0a\x09\x0a\x22Transcript show: 'click: ', virtualPosition printString; cr\x22",
messageSends: ["relativePositionFor:", "ifTrue:", "new", "yellowButtonChanged", "redButtonChanged", "blueButtonChanged", "commandKeyPressed:", "commandKeyPressed", "controlKeyPressed:", "controlKeyPressed", "shiftKeyPressed:", "shiftPressed", "realToVirtualPoint:", "position:", "announce:", "elementForRealPosition:"],
referencedClasses: ["ROMouseRightClick", "ROMouseLeftClick", "ROMouseClick"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseDragBegin:",
category: 'events-processing',
fn: function (evt){
var self=this;
var relativePosition;
return smalltalk.withContext(function($ctx1) { 
self["@eventBeginingDragging"]=_st(evt)._copy();
relativePosition=self._relativePositionFor_(evt);
self["@elementBeingPointed"]=self._elementForRealPosition_(relativePosition);
return self}, function($ctx1) {$ctx1.fill(self,"roMouseDragBegin:",{evt:evt,relativePosition:relativePosition},smalltalk.RORaphael)})},
args: ["evt"],
source: "roMouseDragBegin: evt\x0a\x22\x09Transcript show: 'drag begin: ', evt printString; cr.\x22\x0a\x09| relativePosition |\x0a\x09eventBeginingDragging := evt copy.\x0a\x09\x0a\x09relativePosition := self relativePositionFor: evt.\x0a\x09elementBeingPointed := self elementForRealPosition: relativePosition\x0a\x09\x22elementBeingDragged := (view elementAt: (self realToVirtualPoint: relativePosition))\x22",
messageSends: ["copy", "relativePositionFor:", "elementForRealPosition:"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseDragEnd:",
category: 'events-processing',
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
args: ["evt"],
source: "roMouseDragEnd: evt\x0a\x09\x22Transcript show: 'drag end: ', evt printString; cr.\x22\x0a\x0a\x09| relativePosition step event |\x0a\x09relativePosition := self relativePositionFor: evt.\x0a\x09step := evt position - eventBeginingDragging position.\x0a\x0a\x09event := ROMouseDragged new \x0a\x09\x09\x09\x09step: step; \x0a\x09\x09\x09\x09yourself.\x0a\x09\x0a\x09event position: (self realToVirtualPoint: relativePosition).\x0a\x09elementBeingPointed announce: event.\x0a\x0a\x09eventBeginingDragging := nil.\x0a\x09elementBeingPointed := nil",
messageSends: ["relativePositionFor:", "-", "position", "step:", "new", "yourself", "position:", "realToVirtualPoint:", "announce:"],
referencedClasses: ["ROMouseDragged"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseDragging:",
category: 'events-processing',
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
args: ["evt"],
source: "roMouseDragging: evt\x0a\x09| step relativePosition event virtualStep |\x0a\x22\x09Transcript show: 'drag dragging: ', evt printString; cr.\x22\x0a\x0a\x09eventBeginingDragging ifNil: [ ^ self ].\x0a\x09relativePosition := self relativePositionFor: evt.\x0a\x09step := evt position - eventBeginingDragging position.\x0a\x09\x22step := (self realToVirtualPoint: evt position) - (self realToVirtualPoint: eventBeginingDragging position).\x22\x0a\x0a\x09elementBeingPointed ifNil: \x0a\x09\x09[ elementBeingPointed := self elementForRealPosition: relativePosition ].\x0a\x09\x0a\x22\x09virtualStep := (elementBeingPointed view canvasForRealSize: self extent) realToVirtualPoint: step.\x0a\x09Transcript show: 'drag: ', elementBeingPointed printString, '   ', step printString, '  ', virtualStep printString; cr.\x0a\x22\x09\x0a\x09event := ROMouseDragging new \x0a\x09\x09\x09\x09step: step; \x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x0a\x09event commandKeyPressed: evt commandKeyPressed.\x0a\x09event controlKeyPressed: evt controlKeyPressed.\x0a\x09event shiftKeyPressed: evt shiftPressed.\x09\x09\x09\x09\x0a\x09\x22Transcript show: 'dragging real step = ', step printString; cr.\x22\x0a\x09event position: relativePosition.\x0a\x09elementBeingPointed announce: event.\x0a\x0a\x09eventBeginingDragging := evt copy.",
messageSends: ["ifNil:", "relativePositionFor:", "-", "position", "elementForRealPosition:", "step:", "new", "yourself", "commandKeyPressed:", "commandKeyPressed", "controlKeyPressed:", "controlKeyPressed", "shiftKeyPressed:", "shiftPressed", "position:", "announce:", "copy"],
referencedClasses: ["ROMouseDragging"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseEnter:",
category: 'events-processing',
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
args: ["evt"],
source: "roMouseEnter: evt\x0a\x09| relativePosition ev virtualPosition element |\x0a\x09\x0a\x09relativePosition := self relativePositionFor: evt.\x0a\x09\x22Transcript show: 'enter ', (relativePosition) printString; cr.\x22\x0a\x0a\x09element := self elementForRealPosition: relativePosition.\x0a\x09virtualPosition := element view camera realToVirtualPoint: relativePosition.\x0a\x09ev := ROMouseEnter new.\x0a\x09ev position: virtualPosition.\x0a\x09ev realPosition: relativePosition.\x0a\x09ev element: element.\x0a\x09element announce: ev.",
messageSends: ["relativePositionFor:", "elementForRealPosition:", "realToVirtualPoint:", "camera", "view", "new", "position:", "realPosition:", "element:", "announce:"],
referencedClasses: ["ROMouseEnter"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseLeave:",
category: 'events-processing',
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
args: ["evt"],
source: "roMouseLeave: evt\x0a\x09| relativePosition ev virtualPosition element |\x0a\x09\x0a\x09relativePosition := self relativePositionFor: evt.\x0a\x09element := self elementForRealPosition: relativePosition.\x0a\x09\x22Transcript show: 'leave: ', (self elementForRealPosition: relativePosition) printString; cr.\x22\x0a\x0a\x09virtualPosition := element view camera realToVirtualPoint: relativePosition.\x0a\x09ev := ROMouseLeave new.\x0a\x09ev position: virtualPosition.\x0a\x09element announce: ev",
messageSends: ["relativePositionFor:", "elementForRealPosition:", "realToVirtualPoint:", "camera", "view", "new", "position:", "announce:"],
referencedClasses: ["ROMouseLeave"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "roMouseMoving:",
category: 'events-processing',
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
args: ["evt"],
source: "roMouseMoving: evt\x0a\x0a\x09| relativePosition ev |\x0a\x09relativePosition := self relativePositionFor: evt.\x09\x0a\x09ev := ROMouseMove new.\x0a\x09ev position: (view camera realToVirtualPoint: relativePosition).\x0a\x09\x22Transcript show: 'moving: '; cr.\x22\x0a\x09(self elementForRealPosition: relativePosition) announce: ev",
messageSends: ["relativePositionFor:", "new", "position:", "realToVirtualPoint:", "camera", "announce:", "elementForRealPosition:"],
referencedClasses: ["ROMouseMove"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "setView:",
category: 'initialize',
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
args: ["anROView"],
source: "setView: anROView\x0a\x09view := anROView.\x0a\x09\x0a\x09\x22Maybe something smarter with #invalidRect: can be done here. Need to check.\x22\x0a\x09view on: RORefreshNeeded do: [ :event | self changed ].\x0a\x09view on: ROViewChanged do: [ :event |   \x0a\x09\x09event newView on: RORefreshNeeded do: [ :e | self changed ].\x0a\x09\x09 self changed ].\x0a\x0a\x09canvas := view camera canvas.\x0a\x09self extent: view defaultWindowSize.\x0a\x09canvas extent: self extent.",
messageSends: ["on:do:", "changed", "newView", "canvas", "camera", "extent:", "defaultWindowSize", "extent"],
referencedClasses: ["RORefreshNeeded", "ROViewChanged"]
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'morph',
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
args: [],
source: "step\x0a\x09animationBlock isComplete ifTrue: [ animationBlock := nil. self stopStepping. ^ self ].\x0a\x09animationBlock incrementStep.\x0a\x09self changed.",
messageSends: ["ifTrue:", "stopStepping", "isComplete", "incrementStep", "changed"],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "stepTime",
category: 'morph',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"stepTime",{},smalltalk.RORaphael)})},
args: [],
source: "stepTime\x0a\x09\x22Answer the desired time between steps in milliseconds. This default implementation requests that the 'step' method be called once every second.\x22\x0a\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "takesKeyboardFocus",
category: 'events-processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"takesKeyboardFocus",{},smalltalk.RORaphael)})},
args: [],
source: "takesKeyboardFocus\x0a\x09\x22Answer whether the receiver can normally take keyboard focus.\x22\x0a\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RORaphael)})},
args: [],
source: "view \x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphael);

smalltalk.addMethod(
smalltalk.method({
selector: "wantsSteps",
category: 'morph',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@animationBlock"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"wantsSteps",{},smalltalk.RORaphael)})},
args: [],
source: "wantsSteps\x0a\x09^ animationBlock notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.RORaphael);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
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
args: ["aView"],
source: "on: aView\x0a\x09^ self new setView: aView; yourself",
messageSends: ["setView:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RORaphael.klass);


smalltalk.addClass('RORaphaelCanvas', smalltalk.ROObject, ['svgCanvas'], 'ARoassal-Raphaeljs');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.RORaphaelCanvas)})},
args: [],
source: "canvas\x0a\x09^ svgCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphaelCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.RORaphaelCanvas.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=self._paper();
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RORaphaelCanvas)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09svgCanvas := self paper.\x0a\x09^ self",
messageSends: ["initialize", "paper"],
referencedClasses: []
}),
smalltalk.RORaphaelCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var paper = Raphael("roassal-canvas", 1600 , 900); paper.canvas.id = 'roassal-svg-canvas'; return paper;;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.RORaphaelCanvas)})},
args: [],
source: "paper\x0a\x09< var paper = Raphael(\x22roassal-canvas\x22, 1600 , 900); paper.canvas.id = 'roassal-svg-canvas'; return paper;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RORaphaelCanvas);


smalltalk.RORaphaelCanvas.klass.iVarNames = ['paper'];
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'as yet unclassified',
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
args: [],
source: "canvas\x0apaper ifNil: [paper := self basicNew initialize].\x0a       ^ paper canvas",
messageSends: ["ifNil:", "initialize", "basicNew", "canvas"],
referencedClasses: []
}),
smalltalk.RORaphaelCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Use canvas instead.");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.RORaphaelCanvas.klass)})},
args: [],
source: "new\x09\x0a\x09self error: 'Use canvas instead.'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.RORaphaelCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
category: 'as yet unclassified',
fn: function (){
var self=this;
var canvasElement;
return smalltalk.withContext(function($ctx1) { 
var $1;
canvasElement="#roassal-svg-canvas"._asJQuery();
$1=_st(_st(_st(canvasElement)._offset())._left()).__at(_st(_st(canvasElement)._offset())._top());
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin",{canvasElement:canvasElement},smalltalk.RORaphaelCanvas.klass)})},
args: [],
source: "origin\x0a\x09| canvasElement |\x0a\x09canvasElement := '#roassal-svg-canvas' asJQuery.\x0a\x09^ (canvasElement offset left) @ (canvasElement offset top)",
messageSends: ["asJQuery", "@", "top", "offset", "left"],
referencedClasses: []
}),
smalltalk.RORaphaelCanvas.klass);


