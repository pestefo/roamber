smalltalk.addPackage('ARoassal-Event');
smalltalk.addClass('ROEvent', smalltalk.SystemAnnouncement, [], 'ARoassal-Event');

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.ROEvent.klass)})},
args: [],
source: "new\x0a\x09^ self basicNew initialize",
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.ROEvent.klass);


smalltalk.addClass('ROCameraEvent', smalltalk.ROEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROCameraResized', smalltalk.ROCameraEvent, ['oldBounds', 'newBounds'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "newBounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@newBounds"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBounds",{},smalltalk.ROCameraResized)})},
args: [],
source: "newBounds\x0a\x09^ newBounds",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCameraResized);

smalltalk.addMethod(
smalltalk.method({
selector: "newBounds:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@newBounds"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"newBounds:",{anObject:anObject},smalltalk.ROCameraResized)})},
args: ["anObject"],
source: "newBounds: anObject\x0a\x09newBounds := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCameraResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldBounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldBounds"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldBounds",{},smalltalk.ROCameraResized)})},
args: [],
source: "oldBounds\x0a\x09^ oldBounds",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCameraResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldBounds:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldBounds"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"oldBounds:",{anObject:anObject},smalltalk.ROCameraResized)})},
args: ["anObject"],
source: "oldBounds: anObject\x0a\x09oldBounds := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCameraResized);



smalltalk.addClass('ROCameraTranslated', smalltalk.ROCameraEvent, ['step'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@step"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ROCameraTranslated)})},
args: [],
source: "step\x0a\x0a\x09^step",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCameraTranslated);

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
category: 'as yet unclassified',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"step:",{aPoint:aPoint},smalltalk.ROCameraTranslated)})},
args: ["aPoint"],
source: "step: aPoint\x0a\x0a\x09step := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCameraTranslated);



smalltalk.addClass('ROComponentEvent', smalltalk.ROEvent, ['position', 'element', 'realPosition'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROComponentEvent)})},
args: [],
source: "element\x0a\x09^ element",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.ROComponentEvent)})},
args: ["anObject"],
source: "element: anObject\x0a\x09element := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "emitToParent",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@element"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(self["@element"])._parent())._announce_(self);
return self}, function($ctx1) {$ctx1.fill(self,"emitToParent",{},smalltalk.ROComponentEvent)})},
args: [],
source: "emitToParent\x0a\x09element ifNil: [ ^ self ].\x0a\x09element parent announce: self",
messageSends: ["ifNil:", "announce:", "parent"],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "hasElement",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@element"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasElement",{},smalltalk.ROComponentEvent)})},
args: [],
source: "hasElement\x0a\x09^ element notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROComponentEvent.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@realPosition"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROComponentEvent)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0.\x0a\x09realPosition := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@element"])._isNil();
if(smalltalk.assert($2)){
$1=nil;
} else {
$1=_st(self._element())._model();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROComponentEvent)})},
args: [],
source: "model \x0a\x09^ element isNil\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [ self element model ]",
messageSends: ["ifTrue:ifFalse:", "model", "element", "isNil"],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROComponentEvent)})},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPoint:aPoint},smalltalk.ROComponentEvent)})},
args: ["aPoint"],
source: "position: aPoint\x0a\x09\x22Set the position of the even in the view.  The position does not necessary correspond to the position on the screen\x22\x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "realPosition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@realPosition"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"realPosition",{},smalltalk.ROComponentEvent)})},
args: [],
source: "realPosition\x0a\x09^ realPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "realPosition:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@realPosition"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"realPosition:",{aPoint:aPoint},smalltalk.ROComponentEvent)})},
args: ["aPoint"],
source: "realPosition: aPoint\x0a\x09\x22aPoint corresponds to the position on the screen. This is useful to process later on\x22\x0a\x09realPosition := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROComponentEvent);



smalltalk.addClass('ROAbstractMouseDragging', smalltalk.ROComponentEvent, ['step', 'commandKeyPressed', 'controlKeyPressed', 'shiftKeyPressed', 'buttons'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "buttons",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@buttons"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttons",{},smalltalk.ROAbstractMouseDragging)})},
args: [],
source: "buttons\x0a\x09^ buttons",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "buttons:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@buttons"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"buttons:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
args: ["anObject"],
source: "buttons: anObject\x0a\x09buttons := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commandKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed",{},smalltalk.ROAbstractMouseDragging)})},
args: [],
source: "commandKeyPressed\x0a\x0a\x09^commandKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commandKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
args: ["anObject"],
source: "commandKeyPressed: anObject\x0a\x09commandKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed",{},smalltalk.ROAbstractMouseDragging)})},
args: [],
source: "controlKeyPressed\x0a\x09^ controlKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controlKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
args: ["anObject"],
source: "controlKeyPressed: anObject\x0a\x09controlKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shiftKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed",{},smalltalk.ROAbstractMouseDragging)})},
args: [],
source: "shiftKeyPressed\x0a\x09^ shiftKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shiftKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
args: ["anObject"],
source: "shiftKeyPressed: anObject\x0a\x09shiftKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@step"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ROAbstractMouseDragging)})},
args: [],
source: "step\x0a\x09^ step",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"step:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
args: ["anObject"],
source: "step: anObject\x0a\x09step := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractMouseDragging);



smalltalk.addClass('ROMouseDragged', smalltalk.ROAbstractMouseDragging, [], 'ARoassal-Event');


smalltalk.addClass('ROMouseDragging', smalltalk.ROAbstractMouseDragging, [], 'ARoassal-Event');

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
category: 'as yet unclassified',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._step_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"step:",{value:value},smalltalk.ROMouseDragging.klass)})},
args: ["value"],
source: "step: value\x0a\x09^ self new step: value",
messageSends: ["step:", "new"],
referencedClasses: []
}),
smalltalk.ROMouseDragging.klass);


smalltalk.addClass('ROElementEvent', smalltalk.ROComponentEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROElementResized', smalltalk.ROElementEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROElementTranslated', smalltalk.ROElementEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROKeyDown', smalltalk.ROComponentEvent, ['keyValue'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "keyValue",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@keyValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyValue",{},smalltalk.ROKeyDown)})},
args: [],
source: "keyValue \x0a\x09^keyValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROKeyDown);

smalltalk.addMethod(
smalltalk.method({
selector: "keyValue:",
category: 'as yet unclassified',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyValue"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"keyValue:",{aValue:aValue},smalltalk.ROKeyDown)})},
args: ["aValue"],
source: "keyValue: aValue\x0a\x09\x0a\x09\x09keyValue := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROKeyDown);



smalltalk.addClass('ROMouseClick', smalltalk.ROComponentEvent, ['commandKeyPressed', 'controlKeyPressed', 'shiftKeyPressed'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commandKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed",{},smalltalk.ROMouseClick)})},
args: [],
source: "commandKeyPressed\x0a\x09^ commandKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commandKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed:",{anObject:anObject},smalltalk.ROMouseClick)})},
args: ["anObject"],
source: "commandKeyPressed: anObject\x0a\x09commandKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed",{},smalltalk.ROMouseClick)})},
args: [],
source: "controlKeyPressed\x0a\x09^ controlKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controlKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed:",{anObject:anObject},smalltalk.ROMouseClick)})},
args: ["anObject"],
source: "controlKeyPressed: anObject\x0a\x09controlKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROMouseClick.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@commandKeyPressed"]=false;
self["@controlKeyPressed"]=false;
self["@shiftKeyPressed"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROMouseClick)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09commandKeyPressed := false.\x0a\x09controlKeyPressed := false.\x0a\x09shiftKeyPressed := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shiftKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed",{},smalltalk.ROMouseClick)})},
args: [],
source: "shiftKeyPressed\x0a\x09^ shiftKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shiftKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed:",{anObject:anObject},smalltalk.ROMouseClick)})},
args: ["anObject"],
source: "shiftKeyPressed: anObject\x0a\x09shiftKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMouseClick);



smalltalk.addClass('ROMouseLeftClick', smalltalk.ROMouseClick, [], 'ARoassal-Event');


smalltalk.addClass('ROMouseRightClick', smalltalk.ROMouseClick, [], 'ARoassal-Event');


smalltalk.addClass('ROMouseEnter', smalltalk.ROComponentEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROMouseLeave', smalltalk.ROComponentEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROMouseMove', smalltalk.ROComponentEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROLayoutEvent', smalltalk.ROEvent, ['layout', 'elements'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROLayoutEvent)})},
args: [],
source: "elements\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{anObject:anObject},smalltalk.ROLayoutEvent)})},
args: ["anObject"],
source: "elements: anObject\x0a\x09elements := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "layout",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@layout"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"layout",{},smalltalk.ROLayoutEvent)})},
args: [],
source: "layout\x0a\x09^ layout",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@layout"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"layout:",{anObject:anObject},smalltalk.ROLayoutEvent)})},
args: ["anObject"],
source: "layout: anObject\x0a\x09layout := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutEvent);



smalltalk.addClass('ROLayoutBegin', smalltalk.ROLayoutEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROLayoutEnd', smalltalk.ROLayoutEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROLayoutStep', smalltalk.ROLayoutEvent, ['currentIteration', 'maxInterations'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "currentIteration",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentIteration"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentIteration",{},smalltalk.ROLayoutStep)})},
args: [],
source: "currentIteration\x0a\x09^ currentIteration",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "currentIteration:",
category: 'accessing',
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentIteration"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"currentIteration:",{number:number},smalltalk.ROLayoutStep)})},
args: ["number"],
source: "currentIteration: number\x0a\x09currentIteration := number",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLayoutStep.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@currentIteration"]=(0);
self["@maxInterations"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayoutStep)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09currentIteration := 0.\x0a\x09maxInterations := 0.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "maxInterations",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxInterations"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxInterations",{},smalltalk.ROLayoutStep)})},
args: [],
source: "maxInterations\x0a\x09^ maxInterations",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "maxInterations:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxInterations"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"maxInterations:",{anObject:anObject},smalltalk.ROLayoutStep)})},
args: ["anObject"],
source: "maxInterations: anObject\x0a\x09maxInterations := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutStep);



smalltalk.addClass('RORefreshNeeded', smalltalk.ROEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROViewChanged', smalltalk.ROEvent, ['newView'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "newView",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@newView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newView",{},smalltalk.ROViewChanged)})},
args: [],
source: "newView \x0a\x09^ newView",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROViewChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "newView:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@newView"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"newView:",{aView:aView},smalltalk.ROViewChanged)})},
args: ["aView"],
source: "newView: aView\x0a\x09newView := aView",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROViewChanged);



smalltalk.addClass('ROWindowResized', smalltalk.ROEvent, ['oldExtent', 'extent'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROWindowResized)})},
args: [],
source: "extent\x0a\x09^ extent",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROWindowResized);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anObject:anObject},smalltalk.ROWindowResized)})},
args: ["anObject"],
source: "extent: anObject\x0a\x09extent := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROWindowResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldExtent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldExtent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldExtent",{},smalltalk.ROWindowResized)})},
args: [],
source: "oldExtent\x0a\x09^ oldExtent",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROWindowResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldExtent:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldExtent"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"oldExtent:",{anObject:anObject},smalltalk.ROWindowResized)})},
args: ["anObject"],
source: "oldExtent: anObject\x0a\x09oldExtent := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROWindowResized);



