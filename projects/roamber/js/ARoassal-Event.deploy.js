smalltalk.addPackage('ARoassal-Event');
smalltalk.addClass('ROEvent', smalltalk.SystemAnnouncement, [], 'ARoassal-Event');

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.ROEvent.klass)})},
messageSends: ["initialize", "basicNew"]}),
smalltalk.ROEvent.klass);


smalltalk.addClass('ROCameraEvent', smalltalk.ROEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROCameraResized', smalltalk.ROCameraEvent, ['oldBounds', 'newBounds'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "newBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@newBounds"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBounds",{},smalltalk.ROCameraResized)})},
messageSends: []}),
smalltalk.ROCameraResized);

smalltalk.addMethod(
smalltalk.method({
selector: "newBounds:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@newBounds"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"newBounds:",{anObject:anObject},smalltalk.ROCameraResized)})},
messageSends: []}),
smalltalk.ROCameraResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldBounds"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldBounds",{},smalltalk.ROCameraResized)})},
messageSends: []}),
smalltalk.ROCameraResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldBounds:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldBounds"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"oldBounds:",{anObject:anObject},smalltalk.ROCameraResized)})},
messageSends: []}),
smalltalk.ROCameraResized);



smalltalk.addClass('ROCameraTranslated', smalltalk.ROCameraEvent, ['step'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@step"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ROCameraTranslated)})},
messageSends: []}),
smalltalk.ROCameraTranslated);

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"step:",{aPoint:aPoint},smalltalk.ROCameraTranslated)})},
messageSends: []}),
smalltalk.ROCameraTranslated);



smalltalk.addClass('ROComponentEvent', smalltalk.ROEvent, ['position', 'element', 'realPosition'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROComponentEvent)})},
messageSends: []}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.ROComponentEvent)})},
messageSends: []}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "emitToParent",
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
messageSends: ["ifNil:", "announce:", "parent"]}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "hasElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@element"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasElement",{},smalltalk.ROComponentEvent)})},
messageSends: ["notNil"]}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROComponentEvent.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@realPosition"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROComponentEvent)})},
messageSends: ["initialize", "@"]}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
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
messageSends: ["ifTrue:ifFalse:", "model", "element", "isNil"]}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROComponentEvent)})},
messageSends: []}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPoint:aPoint},smalltalk.ROComponentEvent)})},
messageSends: []}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "realPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@realPosition"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"realPosition",{},smalltalk.ROComponentEvent)})},
messageSends: []}),
smalltalk.ROComponentEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "realPosition:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@realPosition"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"realPosition:",{aPoint:aPoint},smalltalk.ROComponentEvent)})},
messageSends: []}),
smalltalk.ROComponentEvent);



smalltalk.addClass('ROAbstractMouseDragging', smalltalk.ROComponentEvent, ['step', 'commandKeyPressed', 'controlKeyPressed', 'shiftKeyPressed', 'buttons'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "buttons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@buttons"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"buttons",{},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "buttons:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@buttons"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"buttons:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commandKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed",{},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commandKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed",{},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controlKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shiftKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed",{},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shiftKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@step"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"step:",{anObject:anObject},smalltalk.ROAbstractMouseDragging)})},
messageSends: []}),
smalltalk.ROAbstractMouseDragging);



smalltalk.addClass('ROMouseDragged', smalltalk.ROAbstractMouseDragging, [], 'ARoassal-Event');


smalltalk.addClass('ROMouseDragging', smalltalk.ROAbstractMouseDragging, [], 'ARoassal-Event');

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._step_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"step:",{value:value},smalltalk.ROMouseDragging.klass)})},
messageSends: ["step:", "new"]}),
smalltalk.ROMouseDragging.klass);


smalltalk.addClass('ROElementEvent', smalltalk.ROComponentEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROElementResized', smalltalk.ROElementEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROElementTranslated', smalltalk.ROElementEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROKeyDown', smalltalk.ROComponentEvent, ['keyValue'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "keyValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@keyValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyValue",{},smalltalk.ROKeyDown)})},
messageSends: []}),
smalltalk.ROKeyDown);

smalltalk.addMethod(
smalltalk.method({
selector: "keyValue:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@keyValue"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"keyValue:",{aValue:aValue},smalltalk.ROKeyDown)})},
messageSends: []}),
smalltalk.ROKeyDown);



smalltalk.addClass('ROMouseClick', smalltalk.ROComponentEvent, ['commandKeyPressed', 'controlKeyPressed', 'shiftKeyPressed'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commandKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed",{},smalltalk.ROMouseClick)})},
messageSends: []}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commandKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed:",{anObject:anObject},smalltalk.ROMouseClick)})},
messageSends: []}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed",{},smalltalk.ROMouseClick)})},
messageSends: []}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controlKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed:",{anObject:anObject},smalltalk.ROMouseClick)})},
messageSends: []}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROMouseClick.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@commandKeyPressed"]=false;
self["@controlKeyPressed"]=false;
self["@shiftKeyPressed"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROMouseClick)})},
messageSends: ["initialize"]}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shiftKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed",{},smalltalk.ROMouseClick)})},
messageSends: []}),
smalltalk.ROMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shiftKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed:",{anObject:anObject},smalltalk.ROMouseClick)})},
messageSends: []}),
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROLayoutEvent)})},
messageSends: []}),
smalltalk.ROLayoutEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{anObject:anObject},smalltalk.ROLayoutEvent)})},
messageSends: []}),
smalltalk.ROLayoutEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "layout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@layout"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"layout",{},smalltalk.ROLayoutEvent)})},
messageSends: []}),
smalltalk.ROLayoutEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@layout"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"layout:",{anObject:anObject},smalltalk.ROLayoutEvent)})},
messageSends: []}),
smalltalk.ROLayoutEvent);



smalltalk.addClass('ROLayoutBegin', smalltalk.ROLayoutEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROLayoutEnd', smalltalk.ROLayoutEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROLayoutStep', smalltalk.ROLayoutEvent, ['currentIteration', 'maxInterations'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "currentIteration",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentIteration"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentIteration",{},smalltalk.ROLayoutStep)})},
messageSends: []}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "currentIteration:",
fn: function (number){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentIteration"]=number;
return self}, function($ctx1) {$ctx1.fill(self,"currentIteration:",{number:number},smalltalk.ROLayoutStep)})},
messageSends: []}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLayoutStep.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@currentIteration"]=(0);
self["@maxInterations"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayoutStep)})},
messageSends: ["initialize"]}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "maxInterations",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxInterations"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxInterations",{},smalltalk.ROLayoutStep)})},
messageSends: []}),
smalltalk.ROLayoutStep);

smalltalk.addMethod(
smalltalk.method({
selector: "maxInterations:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxInterations"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"maxInterations:",{anObject:anObject},smalltalk.ROLayoutStep)})},
messageSends: []}),
smalltalk.ROLayoutStep);



smalltalk.addClass('RORefreshNeeded', smalltalk.ROEvent, [], 'ARoassal-Event');


smalltalk.addClass('ROViewChanged', smalltalk.ROEvent, ['newView'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "newView",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@newView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"newView",{},smalltalk.ROViewChanged)})},
messageSends: []}),
smalltalk.ROViewChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "newView:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@newView"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"newView:",{aView:aView},smalltalk.ROViewChanged)})},
messageSends: []}),
smalltalk.ROViewChanged);



smalltalk.addClass('ROWindowResized', smalltalk.ROEvent, ['oldExtent', 'extent'], 'ARoassal-Event');
smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROWindowResized)})},
messageSends: []}),
smalltalk.ROWindowResized);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anObject:anObject},smalltalk.ROWindowResized)})},
messageSends: []}),
smalltalk.ROWindowResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldExtent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@oldExtent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldExtent",{},smalltalk.ROWindowResized)})},
messageSends: []}),
smalltalk.ROWindowResized);

smalltalk.addMethod(
smalltalk.method({
selector: "oldExtent:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@oldExtent"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"oldExtent:",{anObject:anObject},smalltalk.ROWindowResized)})},
messageSends: []}),
smalltalk.ROWindowResized);



