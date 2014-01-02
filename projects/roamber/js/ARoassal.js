smalltalk.addPackage('ARoassal');
smalltalk.addClass('ROAnnouncer', smalltalk.Announcer, ['forwarding', 'announcer'], 'ARoassal');
smalltalk.ROAnnouncer.comment="A ROAnnouncer is a wrapper of Announcer, this object receive and emit events. Each roassal element has an roannouncer.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "forward",
category: 'forwarding',
fn: function (){
var self=this;
function $ROEvent(){return smalltalk.ROEvent||(typeof ROEvent=="undefined"?nil:ROEvent)}
return smalltalk.withContext(function($ctx1) { 
self._forward_($ROEvent());
return self}, function($ctx1) {$ctx1.fill(self,"forward",{},smalltalk.ROAnnouncer)})},
args: [],
source: "forward\x0a\x09self forward: ROEvent",
messageSends: ["forward:"],
referencedClasses: ["ROEvent"]
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "forward:",
category: 'forwarding',
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
args: ["anEventClass"],
source: "forward: anEventClass\x0a\x0a\x09forwarding ifNil: [ forwarding := IdentitySet new ].\x0a\x09forwarding add: anEventClass",
messageSends: ["ifNil:", "new", "add:"],
referencedClasses: ["IdentitySet"]
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isForwarded:",
category: 'testing',
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
args: ["anEventClass"],
source: "isForwarded: anEventClass\x0a\x09anEventClass isBehavior ifFalse: [ ^ self isForwarded: anEventClass class ].\x0a\x09 \x0a\x09forwarding ifNil: [ ^ false ].\x0a\x09^ forwarding anySatisfy: [ :c | (c == anEventClass) or: [ anEventClass inheritsFrom: c ] ]",
messageSends: ["ifFalse:", "isForwarded:", "class", "isBehavior", "ifNil:", "anySatisfy:", "or:", "inheritsFrom:", "=="],
referencedClasses: []
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isForwarder",
category: 'testing',
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
args: [],
source: "isForwarder\x0a\x09^ forwarding notNil and: [ forwarding notEmpty ]",
messageSends: ["and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "sendToParent:",
category: 'announce',
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
args: ["event"],
source: "sendToParent: event\x0a\x09\x22Do nothing if an event class\x22\x0a\x09event isBehavior ifTrue: [ ^ self ].\x0a\x09\x0a\x09event hasElement ifTrue: [ event element parentAnnounce: event ]",
messageSends: ["ifTrue:", "isBehavior", "parentAnnounce:", "element", "hasElement"],
referencedClasses: []
}),
smalltalk.ROAnnouncer);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROAbstractCanvas', smalltalk.ROObject, ['camera', 'extent', 'nativeCanvas', 'offset'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "camera",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_(_st(_st("Wow. Such ".__comma(_st(smalltalk.getThisContext()._selector())._asString())).__comma(" very ")).__comma(_st(self._class())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"camera",{},smalltalk.ROAbstractCanvas)})},
args: [],
source: "camera\x0a\x22\x09^ camera\x22\x0a\x09self error: 'Wow. Such ',(thisContext selector asString),' very ',(self class asString).\x0a\x09",
messageSends: ["error:", ",", "asString", "class", "selector"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "camera:",
category: 'accessing',
fn: function (aROCamera){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@camera"]=aROCamera;
return self}, function($ctx1) {$ctx1.fill(self,"camera:",{aROCamera:aROCamera},smalltalk.ROAbstractCanvas)})},
args: ["aROCamera"],
source: "camera: aROCamera\x0a\x09camera := aROCamera",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nativeCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.ROAbstractCanvas)})},
args: [],
source: "canvas\x0a\x09^ nativeCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aNativeCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nativeCanvas"]=aNativeCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aNativeCanvas:aNativeCanvas},smalltalk.ROAbstractCanvas)})},
args: ["aNativeCanvas"],
source: "canvas: aNativeCanvas \x0a\x09nativeCanvas := aNativeCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawPolygon:color:borderWidth:borderColor:",
category: 'hooks',
fn: function (listOfPoints,color,borderWidthValue,borderColorValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawPolygon:color:borderWidth:borderColor:",{listOfPoints:listOfPoints,color:color,borderWidthValue:borderWidthValue,borderColorValue:borderColorValue},smalltalk.ROAbstractCanvas)})},
args: ["listOfPoints", "color", "borderWidthValue", "borderColorValue"],
source: "drawPolygon: listOfPoints color: color borderWidth: borderWidthValue borderColor: borderColorValue\x0a\x09\x22Render a polygon at a given position. \x0a\x09\x09nativeCanvas \x0a\x09\x09\x09drawPolygon: (listOfPoints collect: [ :p | self virtualToRealPoint: p ])\x0a\x09\x09\x09color: color\x0a\x09\x09\x09borderWidth: borderWidthValue \x0a\x09\x09\x09borderColor: borderColorValue.\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:at:",
category: 'hooks',
fn: function (aByteString,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawString:at:",{aByteString:aByteString,aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
args: ["aByteString", "aPoint"],
source: "drawString: aByteString at: aPoint \x0a\x09\x22Render a string at a given position. No specification about the font is given. Use the default then\x22\x0a\x09\x22Implementation example:\x0a\x09\x09canvas drawString: aByteString at:  (self virtualToRealPoint: aPoint) font: nil color: Color black\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:at:color:",
category: 'hooks',
fn: function (aByteString,aPoint,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawString:at:color:",{aByteString:aByteString,aPoint:aPoint,color:color},smalltalk.ROAbstractCanvas)})},
args: ["aByteString", "aPoint", "color"],
source: "drawString: aByteString at: aPoint color: color\x0a\x09\x22Render a colored string at a given position. No specification about the font is given. Use the default then\x22\x0a\x09\x22Implementation example:\x0a\x09\x09\x09canvas drawString: aByteString at:  (self virtualToRealPoint: aPoint) font: nil color: color\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:at:font:color:",
category: 'hooks',
fn: function (aByteString,p,f,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawString:at:font:color:",{aByteString:aByteString,p:p,f:f,color:color},smalltalk.ROAbstractCanvas)})},
args: ["aByteString", "p", "f", "color"],
source: "drawString: aByteString at:  p font: f color: color\x0a\x09\x22Render a colored string at a given position using a particular font.\x22\x0a\x09\x22Implementation example:\x0a\x09\x09canvas drawString: aByteString at:  (self virtualToRealPoint: p) font: f color: color\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09extent := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fillOval:color:borderWidth:borderColor:",
category: 'hooks',
fn: function (aRectangle,aColor,aSmallInteger,aColor4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillOval:color:borderWidth:borderColor:",{aRectangle:aRectangle,aColor:aColor,aSmallInteger:aSmallInteger,aColor4:aColor4},smalltalk.ROAbstractCanvas)})},
args: ["aRectangle", "aColor", "aSmallInteger", "aColor4"],
source: "fillOval: aRectangle color: aColor borderWidth: aSmallInteger borderColor: aColor4 \x0a\x09\x22Render an oval\x22\x0a\x09\x22Implementation example\x0a\x09\x09canvas\x0a\x09\x09fillOval: (self virtualToRealRectangle: aRectangle)  color: aColor borderWidth: aSmallInteger borderColor: aColor4 \x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:color:",
category: 'hooks',
fn: function (aRectangle,fillColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:color:",{aRectangle:aRectangle,fillColor:fillColor},smalltalk.ROAbstractCanvas)})},
args: ["aRectangle", "fillColor"],
source: "fillRectangle: aRectangle color: fillColor \x0a\x09\x22Render a rectangle\x22\x0a\x09\x22Implementation example\x0a\x09\x0a\x09\x09canvas fillRectangle: (self virtualToRealRectangle: aRectangle) color: fillColor\x0a\x09\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "form",
category: 'hooks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"form",{},smalltalk.ROAbstractCanvas)})},
args: [],
source: "form\x0a\x09\x22Return a bitmap\x22\x0a\x09\x22Implementation example\x0a\x09\x09^ canvas form\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "frameAndFillRectangle:fillColor:borderWidth:borderColor:",
category: 'hooks',
fn: function (aRectangle,fillColor,aSmallInteger,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"frameAndFillRectangle:fillColor:borderWidth:borderColor:",{aRectangle:aRectangle,fillColor:fillColor,aSmallInteger:aSmallInteger,aColor:aColor},smalltalk.ROAbstractCanvas)})},
args: ["aRectangle", "fillColor", "aSmallInteger", "aColor"],
source: "frameAndFillRectangle: aRectangle fillColor: fillColor borderWidth: aSmallInteger borderColor: aColor \x0a\x09\x22Render a framed rectangle. Implementation example:\x0a\x0a\x09canvas \x0a\x09\x09frameAndFillRectangle: (self virtualToRealRectangle: aRectangle) fillColor: fillColor borderWidth: aSmallInteger borderColor: aColor.\x0a\x09\x22\x0a\x09\x0a\x09self subclassResponsibility.",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $ROCamera(){return smalltalk.ROCamera||(typeof ROCamera=="undefined"?nil:ROCamera)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractCanvas.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@extent"]=_st(self._class())._defaultExtent();
self["@camera"]=_st($ROCamera())._new();
self["@offset"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractCanvas)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09\x0a\x09extent := self class defaultExtent.\x0a\x09\x0a\x09\x22Maybe a global camera would be useful. The camera object is never used normally. Since the camera of the view has to be set prior any drawing\x22\x0a\x09camera := ROCamera new.\x0a\x09\x0a\x09offset := 0 @ 0",
messageSends: ["initialize", "defaultExtent", "class", "new", "@"],
referencedClasses: ["ROCamera"]
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "line:to:width:color:",
category: 'hooks',
fn: function (aPoint,aPoint2,aSmallInteger,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"line:to:width:color:",{aPoint:aPoint,aPoint2:aPoint2,aSmallInteger:aSmallInteger,aColor:aColor},smalltalk.ROAbstractCanvas)})},
args: ["aPoint", "aPoint2", "aSmallInteger", "aColor"],
source: "line: aPoint to: aPoint2 width: aSmallInteger color: aColor \x0a\x09\x22Draw a line between two points\x22\x0a\x09\x22Implementation example\x0a\x09\x09canvas line: (self virtualToRealPoint: aPoint) to: (self virtualToRealPoint: aPoint2) width: aSmallInteger color: aColor.\x0a\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "offset",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@offset"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"offset",{},smalltalk.ROAbstractCanvas)})},
args: [],
source: "offset\x0a\x09^ offset",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "offset:",
category: 'accessing',
fn: function (anOffsetAsPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@offset"]=anOffsetAsPoint;
return self}, function($ctx1) {$ctx1.fill(self,"offset:",{anOffsetAsPoint:anOffsetAsPoint},smalltalk.ROAbstractCanvas)})},
args: ["anOffsetAsPoint"],
source: "offset: anOffsetAsPoint\x0a\x09offset := anOffsetAsPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintBackground:",
category: 'convenient',
fn: function (color){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._frameAndFillRectangle_fillColor_borderWidth_borderColor_(_st(self["@camera"])._realToVirtualRectangle_(_st((0).__at((0)))._extent_(self["@extent"])),color,(0),_st($Color())._white());
return self}, function($ctx1) {$ctx1.fill(self,"paintBackground:",{color:color},smalltalk.ROAbstractCanvas)})},
args: ["color"],
source: "paintBackground: color\x0a\x0a\x09self \x0a\x09\x09frameAndFillRectangle: (camera realToVirtualRectangle: (0@0 extent: extent)) \x0a\x09\x09fillColor: color\x0a\x09\x09borderWidth: 0 \x0a\x09\x09borderColor: Color white.",
messageSends: ["frameAndFillRectangle:fillColor:borderWidth:borderColor:", "realToVirtualRectangle:", "extent:", "@", "white"],
referencedClasses: ["Color"]
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintImage:at:",
category: 'hooks',
fn: function (aForm,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"paintImage:at:",{aForm:aForm,aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
args: ["aForm", "aPoint"],
source: "paintImage: aForm at: aPoint\x0a\x09\x22Render a bitmap on screen\x22\x0a\x09\x22Implementation example\x0a\x09\x09canvas paintImage: aForm at:  (self virtualToRealPoint: aPoint) \x0a\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "realToVirtualPoint:",
category: 'initialize',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@camera"])._realToVirtualPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"realToVirtualPoint:",{aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
args: ["aPoint"],
source: "realToVirtualPoint: aPoint\x0a\x09\x22Return a real point from a one expressed in the virtual coordinates\x22\x0a\x0a\x09^ camera realToVirtualPoint: aPoint",
messageSends: ["realToVirtualPoint:"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "realToVirtualRectangle:",
category: 'initialize',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@camera"])._realToVirtualRectangle_(aRectangle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"realToVirtualRectangle:",{aRectangle:aRectangle},smalltalk.ROAbstractCanvas)})},
args: ["aRectangle"],
source: "realToVirtualRectangle: aRectangle\x0a\x09\x22Return a rectangle with virtual coordinates from one expressed in the real coordinates\x22\x0a\x09\x0a\x09^ camera realToVirtualRectangle: aRectangle",
messageSends: ["realToVirtualRectangle:"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualToRealPoint:",
category: 'util',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@camera"])._virtualToRealPoint_(aPoint)).__plus(self["@offset"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"virtualToRealPoint:",{aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
args: ["aPoint"],
source: "virtualToRealPoint: aPoint\x0a\x09\x22Return a real point from a one expressed in the virtual coordinates\x22\x0a\x0a\x09^ (camera virtualToRealPoint: aPoint) + offset",
messageSends: ["+", "virtualToRealPoint:"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualToRealRectangle:",
category: 'util',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@camera"])._virtualToRealRectangle_(aRectangle))._translateBy_(self["@offset"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"virtualToRealRectangle:",{aRectangle:aRectangle},smalltalk.ROAbstractCanvas)})},
args: ["aRectangle"],
source: "virtualToRealRectangle: aRectangle\x0a\x09\x22Return a rectangle with real coordinates from one expressed in the virtual coordinates\x22\x0a\x09\x0a\x09^ (camera virtualToRealRectangle: aRectangle) translateBy: offset",
messageSends: ["translateBy:", "virtualToRealRectangle:"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "canvas:camera:",
category: 'public',
fn: function (canvas,camera){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._canvas_(canvas);
_st($2)._camera_(camera);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas:camera:",{canvas:canvas,camera:camera},smalltalk.ROAbstractCanvas.klass)})},
args: ["canvas", "camera"],
source: "canvas: canvas camera: camera\x0a\x09^ self new canvas: canvas; camera: camera; yourself",
messageSends: ["canvas:", "new", "camera:", "yourself"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultExtent",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40).__at((30));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultExtent",{},smalltalk.ROAbstractCanvas.klass)})},
args: [],
source: "defaultExtent\x0a\x09^ 40 @ 30",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onCamera:",
category: 'hooks',
fn: function (camera){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"onCamera:",{camera:camera},smalltalk.ROAbstractCanvas.klass)})},
args: ["camera"],
source: "onCamera: camera\x0a\x09\x22Return a new canvas with a created canvas\x22\x0a\x09\x22Implementation example: \x0a\x09\x09| form canvas |\x0a\x09\x09form := Form extent: camera realExtent depth: Display depth.\x0a\x09\x09canvas := FormCanvas on: form.\x0a\x09\x09^ self canvas: canvas camera: camera\x0a\x09\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCanvas.klass);


smalltalk.addClass('ROConstraint', smalltalk.ROObject, [], 'ARoassal');
smalltalk.ROConstraint.comment="A ROConstraint is a utility class that contains methods to position elements against others.";

smalltalk.addMethod(
smalltalk.method({
selector: "constraintInItsParent:",
category: 'public',
fn: function (element){
var self=this;
function $ROElementTranslated(){return smalltalk.ROElementTranslated||(typeof ROElementTranslated=="undefined"?nil:ROElementTranslated)}
return smalltalk.withContext(function($ctx1) { 
_st(element)._on_do2_($ROElementTranslated(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(element)._translateTo_(_st(_st(_st(element)._position())._max_((0).__at((0))))._min_(_st(_st(_st(element)._parent())._extent()).__minus(_st(element)._extent())));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"constraintInItsParent:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "constraintInItsParent: element\x0a\x09\x0a\x09element\x0a\x09\x09on: ROElementTranslated\x0a\x09\x09do2: [ :event | \x0a\x09\x09\x09element translateTo: ((element position max: (0 @ 0)) min: (element parent extent - element extent)) ]",
messageSends: ["on:do2:", "translateTo:", "min:", "-", "extent", "parent", "max:", "@", "position"],
referencedClasses: ["ROElementTranslated"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:above:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__minus((0).__at(_st(element)._height())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:above:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element above: anotherElement\x0a\x09^ element translateTo: anotherElement position - (0 @ element height)",
messageSends: ["translateTo:", "-", "@", "height", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:below:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus((0).__at(_st(anotherElement)._height())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:below:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element below: anotherElement\x0a\x09^ element translateTo: anotherElement position + (0 @ anotherElement height)",
messageSends: ["translateTo:", "+", "@", "height", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:between:and:",
category: 'util',
fn: function (element,el1,el2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(_st(el1)._position()).__plus(_st(el2)._position())).__slash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:between:and:",{element:element,el1:el1,el2:el2},smalltalk.ROConstraint.klass)})},
args: ["element", "el1", "el2"],
source: "move: element between: el1 and: el2\x0a\x0a\x09^ element translateTo: ((el1 position + el2 position) / 2)",
messageSends: ["translateTo:", "/", "+", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheCenterOf:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
var p;
return smalltalk.withContext(function($ctx1) { 
var $1;
p=_st(_st(_st(_st(anotherElement)._width()).__minus(_st(element)._width())).__slash((2))).__at(_st(_st(_st(anotherElement)._height()).__minus(_st(element)._height())).__slash((2)));
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus(p));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheCenterOf:",{element:element,anotherElement:anotherElement,p:p},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element onTheCenterOf: anotherElement\x0a\x0a\x09|p|\x0a\x09p := ((anotherElement width - element width) /2) @ ((anotherElement height - element height ) /2).\x0a\x09^ element translateTo: anotherElement position + p.",
messageSends: ["@", "/", "-", "height", "width", "translateTo:", "+", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheLeftCenteredOf:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(_st(anotherElement)._position()).__minus(_st(_st(element)._width()).__at((0)))).__plus((0).__at(_st(_st(_st(anotherElement)._height()).__slash((2))).__minus(_st(_st(element)._height()).__slash((2))))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheLeftCenteredOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element onTheLeftCenteredOf: anotherElement\x0a\x09^ element translateTo: (anotherElement position - (element width @ 0) + (0 @ (anotherElement height /2 - (element height / 2))))",
messageSends: ["translateTo:", "+", "@", "-", "/", "height", "width", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheLeftOf:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__minus(_st(_st(element)._width()).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheLeftOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element onTheLeftOf: anotherElement\x0a\x09^ element translateTo: anotherElement position - (element width @ 0)",
messageSends: ["translateTo:", "-", "@", "width", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheRightCenteredOf:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus(_st(_st(anotherElement)._width()).__at(_st(_st(_st(anotherElement)._height()).__slash((2))).__minus(_st(_st(element)._height()).__slash((2))))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheRightCenteredOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element onTheRightCenteredOf: anotherElement\x0a\x09^ element translateTo: anotherElement position + (anotherElement width @ (anotherElement height /2 - (element height / 2)))",
messageSends: ["translateTo:", "+", "@", "-", "/", "height", "width", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheRightOf:",
category: 'util',
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus(_st(_st(anotherElement)._width()).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheRightOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "move: element onTheRightOf: anotherElement\x0a\x09^ element translateTo: anotherElement position + (anotherElement width @ 0)",
messageSends: ["translateTo:", "+", "@", "width", "position"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtBottomRightOfTheWindow:",
category: 'util - window',
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_(_st(windowSize).__minus(_st(element)._extent()));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtBottomRightOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "moveAtBottomRightOfTheWindow: element\x0a\x0a\x09| windowSize |\x0a\x09windowSize := element view camera windowSize.\x0a\x09element translateTo: windowSize - (element extent)",
messageSends: ["windowSize", "camera", "view", "translateTo:", "-", "extent"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtCenterOfTheWindow:",
category: 'util - window',
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_(_st(_st(_st(windowSize).__slash((2)))._asIntegerPoint()).__minus(_st(_st(_st(_st(element)._bounds())._extent()).__slash((2)))._asIntegerPoint()));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtCenterOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "moveAtCenterOfTheWindow: element\x0a\x0a\x09| windowSize |\x0a\x09windowSize := element view camera windowSize.\x0a\x09element translateTo: ((windowSize / 2) asIntegerPoint - (element bounds extent / 2) asIntegerPoint )",
messageSends: ["windowSize", "camera", "view", "translateTo:", "-", "asIntegerPoint", "/", "extent", "bounds"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtTheBottomOfTheWindow:",
category: 'util - window',
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_((0).__at(_st(_st(windowSize)._y()).__minus(_st(element)._height())));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtTheBottomOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "moveAtTheBottomOfTheWindow: element\x0a\x0a\x09| windowSize |\x0a\x09windowSize := element view camera windowSize.\x0a\x09element translateTo: (0 @ (windowSize y - element height))",
messageSends: ["windowSize", "camera", "view", "translateTo:", "@", "-", "height", "y"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtTheTopRightOfTheWindow:",
category: 'util - window',
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_(_st(_st(_st(windowSize)._x()).__minus(_st(element)._width())).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtTheTopRightOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "moveAtTheTopRightOfTheWindow: element\x0a\x0a\x09| windowSize |\x0a\x09windowSize := element view camera windowSize.\x0a\x09element translateTo: ((windowSize x - element width) @ 0)",
messageSends: ["windowSize", "camera", "view", "translateTo:", "@", "-", "width", "x"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:above:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_above_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_above_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:above:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element above: anotherElement\x0a\x09self move: element above: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element above: anotherElement ]",
messageSends: ["move:above:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:below:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_below_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_below_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:below:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element below: anotherElement\x0a\x09self move: element below: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element below: anotherElement ].",
messageSends: ["move:below:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:between:and:",
category: 'public',
fn: function (element,el1,el2){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_between_and_(element,el1,el2);
_st(el1)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_between_and_(element,el1,el2);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(el2)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_between_and_(element,el1,el2);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:between:and:",{element:element,el1:el1,el2:el2},smalltalk.ROConstraint.klass)})},
args: ["element", "el1", "el2"],
source: "stick: element between: el1 and: el2\x0a\x09self move: element between: el1 and: el2.\x0a\x09el1\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element between: el1 and: el2. ].\x0a\x09el2\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element between: el1 and: el2. ].",
messageSends: ["move:between:and:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheCenterOf:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheCenterOf_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheCenterOf_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheCenterOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element onTheCenterOf: anotherElement\x0a\x09self move: element onTheCenterOf: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element onTheCenterOf: anotherElement ].",
messageSends: ["move:onTheCenterOf:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheLeftCenteredOf:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheLeftCenteredOf_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheLeftCenteredOf_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheLeftCenteredOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element onTheLeftCenteredOf: anotherElement\x0a\x09self move: element onTheLeftCenteredOf: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element onTheLeftCenteredOf: anotherElement ].",
messageSends: ["move:onTheLeftCenteredOf:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheLeftOf:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheLeftOf_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheLeftOf_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheLeftOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element onTheLeftOf: anotherElement\x0a\x09self move: element onTheLeftOf: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element onTheLeftOf: anotherElement ].",
messageSends: ["move:onTheLeftOf:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheRightCenteredOf:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheRightCenteredOf_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheRightCenteredOf_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheRightCenteredOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element onTheRightCenteredOf: anotherElement\x0a\x09self move: element onTheRightCenteredOf: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element onTheRightCenteredOf: anotherElement ].",
messageSends: ["move:onTheRightCenteredOf:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheRightOf:",
category: 'public',
fn: function (element,anotherElement){
var self=this;
function $ROElementEvent(){return smalltalk.ROElementEvent||(typeof ROElementEvent=="undefined"?nil:ROElementEvent)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheRightOf_(element,anotherElement);
_st(anotherElement)._on_do2_($ROElementEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheRightOf_(element,anotherElement);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheRightOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
args: ["element", "anotherElement"],
source: "stick: element onTheRightOf: anotherElement\x0a\x09self move: element onTheRightOf: anotherElement.\x0a\x09anotherElement\x0a\x09\x09on: ROElementEvent\x0a\x09\x09do2: [ :event | self move: element onTheRightOf: anotherElement ].",
messageSends: ["move:onTheRightOf:", "on:do2:"],
referencedClasses: ["ROElementEvent"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtBottomRightOfTheWindow:",
category: 'public - window',
fn: function (element){
var self=this;
function $ROWindowResized(){return smalltalk.ROWindowResized||(typeof ROWindowResized=="undefined"?nil:ROWindowResized)}
return smalltalk.withContext(function($ctx1) { 
self._moveAtBottomRightOfTheWindow_(element);
_st(_st(element)._view())._on_do2_($ROWindowResized(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveAtBottomRightOfTheWindow_(element);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickAtBottomRightOfTheWindow:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "stickAtBottomRightOfTheWindow: element \x0a\x09self moveAtBottomRightOfTheWindow: element.\x0a\x09element view\x0a\x09\x09on: ROWindowResized\x0a\x09\x09do2: [ :event | self moveAtBottomRightOfTheWindow: element ]",
messageSends: ["moveAtBottomRightOfTheWindow:", "on:do2:", "view"],
referencedClasses: ["ROWindowResized"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtCenterOfTheWindow:",
category: 'public - window',
fn: function (element){
var self=this;
function $ROWindowResized(){return smalltalk.ROWindowResized||(typeof ROWindowResized=="undefined"?nil:ROWindowResized)}
return smalltalk.withContext(function($ctx1) { 
self._moveAtCenterOfTheWindow_(element);
_st(_st(element)._view())._on_do2_($ROWindowResized(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveAtCenterOfTheWindow_(element);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickAtCenterOfTheWindow:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "stickAtCenterOfTheWindow: element \x0a\x09self moveAtCenterOfTheWindow: element.\x0a\x09element view\x0a\x09\x09on: ROWindowResized\x0a\x09\x09do2: [ :event | self moveAtCenterOfTheWindow: element ]",
messageSends: ["moveAtCenterOfTheWindow:", "on:do2:", "view"],
referencedClasses: ["ROWindowResized"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtTheBottomOfTheWindow:",
category: 'public - window',
fn: function (element){
var self=this;
function $ROWindowResized(){return smalltalk.ROWindowResized||(typeof ROWindowResized=="undefined"?nil:ROWindowResized)}
return smalltalk.withContext(function($ctx1) { 
self._moveAtTheBottomOfTheWindow_(element);
_st(_st(element)._view())._on_do2_($ROWindowResized(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveAtTheBottomOfTheWindow_(element);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickAtTheBottomOfTheWindow:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "stickAtTheBottomOfTheWindow: element \x0a\x09self moveAtTheBottomOfTheWindow: element.\x0a\x09element view\x0a\x09\x09on: ROWindowResized\x0a\x09\x09do2: [ :event | self moveAtTheBottomOfTheWindow: element ]",
messageSends: ["moveAtTheBottomOfTheWindow:", "on:do2:", "view"],
referencedClasses: ["ROWindowResized"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtTheTopRightOfTheWindow:",
category: 'public - window',
fn: function (element){
var self=this;
function $ROWindowResized(){return smalltalk.ROWindowResized||(typeof ROWindowResized=="undefined"?nil:ROWindowResized)}
return smalltalk.withContext(function($ctx1) { 
self._moveAtTheTopRightOfTheWindow_(element);
_st(_st(element)._view())._on_do2_($ROWindowResized(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveAtTheTopRightOfTheWindow_(element);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickAtTheTopRightOfTheWindow:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "stickAtTheTopRightOfTheWindow: element \x0a\x09self moveAtTheTopRightOfTheWindow: element.\x0a\x09element view\x0a\x09\x09on: ROWindowResized\x0a\x09\x09do2: [ :event | self moveAtTheTopRightOfTheWindow: element ]",
messageSends: ["moveAtTheTopRightOfTheWindow:", "on:do2:", "view"],
referencedClasses: ["ROWindowResized"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToBottomLeft:",
category: 'public - window',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stickToBottomLeft_offset_(element,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stickToBottomLeft:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "stickToBottomLeft: element \x0a\x09^ self stickToBottomLeft: element offset: 0",
messageSends: ["stickToBottomLeft:offset:"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToBottomLeft:offset:",
category: 'public - window',
fn: function (element,aNumber){
var self=this;
function $ROWindowResized(){return smalltalk.ROWindowResized||(typeof ROWindowResized=="undefined"?nil:ROWindowResized)}
return smalltalk.withContext(function($ctx1) { 
_st(element)._translateTo_(_st(_st(_st(aNumber).__at(_st(_st(_st(_st(element)._view())._camera())._windowSize())._y())).__minus(_st(element)._height())).__minus(aNumber));
_st(_st(element)._view())._on_do2_($ROWindowResized(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(element)._translateTo_(_st(aNumber).__at(_st(_st(_st(_st(event)._extent())._y()).__minus(_st(element)._height())).__minus(aNumber)));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickToBottomLeft:offset:",{element:element,aNumber:aNumber},smalltalk.ROConstraint.klass)})},
args: ["element", "aNumber"],
source: "stickToBottomLeft: element offset: aNumber\x0a\x09element translateTo: (aNumber @ element view camera windowSize y - element height - aNumber).\x0a\x09element view\x0a\x09\x09on: ROWindowResized\x0a\x09\x09do2: [ :event | element translateTo: (aNumber @ (event extent y - element height - aNumber)) ].",
messageSends: ["translateTo:", "-", "height", "@", "y", "windowSize", "camera", "view", "on:do2:", "extent"],
referencedClasses: ["ROWindowResized"]
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToTopRight:",
category: 'public - window',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stickToTopRight_offset_(element,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stickToTopRight:",{element:element},smalltalk.ROConstraint.klass)})},
args: ["element"],
source: "stickToTopRight: element\x0a\x09^ self stickToTopRight: element offset: 0",
messageSends: ["stickToTopRight:offset:"],
referencedClasses: []
}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToTopRight:offset:",
category: 'public - window',
fn: function (element,aNumber){
var self=this;
function $ROWindowResized(){return smalltalk.ROWindowResized||(typeof ROWindowResized=="undefined"?nil:ROWindowResized)}
return smalltalk.withContext(function($ctx1) { 
_st(element)._translateTo_(_st(_st(_st(_st(_st(_st(_st(element)._view())._camera())._windowSize())._x()).__minus(_st(element)._width())).__minus(aNumber)).__at(aNumber));
_st(_st(element)._view())._on_do2_($ROWindowResized(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(element)._translateTo_(_st(_st(_st(_st(_st(event)._extent())._x()).__minus(_st(element)._width())).__minus(aNumber)).__at(aNumber));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickToTopRight:offset:",{element:element,aNumber:aNumber},smalltalk.ROConstraint.klass)})},
args: ["element", "aNumber"],
source: "stickToTopRight: element offset: aNumber\x0a\x09element translateTo: ((element view camera windowSize x - element width) - aNumber @ aNumber).\x0a\x09element view\x0a\x09\x09on: ROWindowResized\x0a\x09\x09do2: [ :event | element translateTo:  ((event extent x - element width) - aNumber @ aNumber)].",
messageSends: ["translateTo:", "@", "-", "width", "x", "windowSize", "camera", "view", "on:do2:", "extent"],
referencedClasses: ["ROWindowResized"]
}),
smalltalk.ROConstraint.klass);


smalltalk.addClass('ROContainer', smalltalk.ROObject, ['elements', 'attributes', 'eventHandler', 'interactions'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "allElementsDo:",
category: 'as yet unclassified',
fn: function (aBlockOrSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._elementsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._withAllElementsDo_(aBlockOrSymbol);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allElementsDo:",{aBlockOrSymbol:aBlockOrSymbol},smalltalk.ROContainer)})},
args: ["aBlockOrSymbol"],
source: "allElementsDo: aBlockOrSymbol\x0a\x09\x22Recursively perform an action for each elements.\x22\x0a\x09self elementsDo: [ :each | each withAllElementsDo: aBlockOrSymbol ]",
messageSends: ["elementsDo:", "withAllElementsDo:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'as yet unclassified',
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
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent,eventToBeSent:eventToBeSent},smalltalk.ROContainer)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09\x22trigger an event. Objects who registered to me will get notified\x22\x0a\x0a\x09| eventToBeSent |\x0a\x09eventToBeSent := anEvent isBehavior \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ anEvent new ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ anEvent ]. \x0a\x09\x0a\x09eventToBeSent element: self.\x0a\x09eventHandler announce: eventToBeSent",
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "element:", "announce:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
category: 'actions',
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
args: ["object"],
source: "elementFromModel: object\x0a\x09\x22Recursively look for the element with a model object\x22\x0a\x09| v |\x0a\x09\x0a\x09(self model = object) ifTrue: [ ^ self ].\x0a\x09\x0a\x09v :=  elements reverse\x0a\x09\x09\x09\x09detect: [ :e | (e model = object) and: [ e isElement ] ]\x0a\x09\x09\x09\x09ifNone: [ nil ].\x0a\x09v ifNotNil: [ ^ v ].\x0a\x09\x0a\x09elements reverse do: [ :e |\x0a\x09\x09v := e elementFromModel: object.\x0a\x09\x09v ifNotNil: [ ^ v ] ].\x0a\x09\x0a\x09^ nil\x0a\x0a\x09\x22^ (self elementsSuchThat: [ :el | object = el model ]) first\x22",
messageSends: ["ifTrue:", "=", "model", "detect:ifNone:", "and:", "isElement", "reverse", "ifNotNil:", "do:", "elementFromModel:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsAsEdge",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._select_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._isEdge();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsAsEdge",{},smalltalk.ROContainer)})},
args: [],
source: "elementsAsEdge\x0a\x22\x09^ elements select: #isEdge\x22\x0a\x09^ elements select: [:e | e isEdge]",
messageSends: ["select:", "isEdge"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsDo:",
category: 'as yet unclassified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@elements"])._copy())._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsDo:",{aBlock:aBlock},smalltalk.ROContainer)})},
args: ["aBlock"],
source: "elementsDo: aBlock\x0a\x09^ elements copy do: aBlock",
messageSends: ["do:", "copy"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsSuchThat:",
category: 'as yet unclassified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsSuchThat:",{aBlock:aBlock},smalltalk.ROContainer)})},
args: ["aBlock"],
source: "elementsSuchThat: aBlock\x0a\x09^ elements select: aBlock",
messageSends: ["select:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "forward:",
category: 'as yet unclassified',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._forward_(obj);
return self}, function($ctx1) {$ctx1.fill(self,"forward:",{obj:obj},smalltalk.ROContainer)})},
args: ["obj"],
source: "forward: obj\x0a\x09eventHandler forward: obj",
messageSends: ["forward:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROAnnouncer(){return smalltalk.ROAnnouncer||(typeof ROAnnouncer=="undefined"?nil:ROAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROContainer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($OrderedCollection())._new();
self["@eventHandler"]=_st($ROAnnouncer())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROContainer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := OrderedCollection new.\x0a\x09eventHandler := ROAnnouncer new.\x0a\x09",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection", "ROAnnouncer"]
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do2:",
category: 'as yet unclassified',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._at_put_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do2:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROContainer)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass do2: aBlock\x0a\x09\x22Register a block as an handler for eventClass\x22\x0a\x09\x0a\x0a\x09\x22eventHandler on: eventClass do: aBlock.\x22\x0a\x09interactions at: eventClass put: aBlock",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'as yet unclassified',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROContainer)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass do: aBlock\x0a\x09\x22Register a block as an handler for eventClass\x22\x0a\x09\x0a\x0a\x09eventHandler on: eventClass do: aBlock.\x0a\x09\x22interactions at: eventClass put: aBlock\x22",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:doOnce:",
category: 'as yet unclassified',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,(function(arg){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(arg);
return _st(self["@eventHandler"])._unsubscribeForEvent_(eventClass);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROContainer)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass doOnce: aBlock\x0a\x09\x22Register a block as an handler for eventClass. The callback is removed when exected\x22\x0a\x09\x0a\x09eventHandler on: eventClass do: [ :arg | \x0a\x09\x09aBlock value: arg.\x0a\x09\x09eventHandler unsubscribeForEvent: eventClass.\x0a\x09\x09\x22self removeInteraction: eventClass \x22]",
messageSends: ["on:do:", "value:", "unsubscribeForEvent:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeInteraction:",
category: 'as yet unclassified',
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
return self}, function($ctx1) {$ctx1.fill(self,"removeInteraction:",{anInteractionClass:anInteractionClass,ds:ds},smalltalk.ROContainer)})},
args: ["anInteractionClass"],
source: "removeInteraction: anInteractionClass\x0a\x09\x22Remove an interaction from the receiver. No error is raised if no interaction is found\x22\x0a\x09\x0a\x09| ds |\x0a\x09ds := interactions select: [ :d | d isKindOf: anInteractionClass ].\x0a\x09ds associationsDo: [ :assoc | \x0a\x09\x09interactions removeKey: assoc key.\x0a\x09\x09eventHandler unsubscribe: assoc value ].",
messageSends: ["select:", "isKindOf:", "associationsDo:", "removeKey:", "key", "unsubscribe:", "value"],
referencedClasses: []
}),
smalltalk.ROContainer);



smalltalk.addClass('ROAbstractComponent', smalltalk.ROContainer, ['model', 'view', 'shape'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'accessing',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._addShape_(aShape);
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aShape:aShape},smalltalk.ROAbstractComponent)})},
args: ["aShape"],
source: "+ aShape \x0a\x09\x22Add a shape to myself. aShape could either be an instance of a shape class or a class\x22\x0a\x09\x0a\x09self addShape: aShape.\x0a\x09^ self ",
messageSends: ["addShape:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
category: 'as yet unclassified',
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addInteraction_(anInteractionClassOrInstance);
return self}, function($ctx1) {$ctx1.fill(self,"@",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROAbstractComponent)})},
args: ["anInteractionClassOrInstance"],
source: "@ anInteractionClassOrInstance\x0a\x09\x22Add an interaction to the node\x22\x0a\x09\x0a\x09self addInteraction: anInteractionClassOrInstance",
messageSends: ["addInteraction:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
category: 'drawing',
fn: function (aShape){
var self=this;
var s;
return smalltalk.withContext(function($ctx1) { 
var $1;
s=_st(aShape)._installedOn_(self);
$1=_st(self._shape())._isNil();
if(! smalltalk.assert($1)){
_st(s)._width_(_st(_st(s)._width())._max_(_st(self._shape())._width()));
_st(s)._height_(_st(_st(s)._height())._max_(_st(self._shape())._height()));
};
self["@shape"]=s;
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aShape:aShape,s:s},smalltalk.ROAbstractComponent)})},
args: ["aShape"],
source: "addShape: aShape \x0a\x09\x22Add a shape to myself. aShape could either be an instance of a shape class or simply a class\x22\x0a\x0a\x09| s |\x0a\x09s := (aShape installedOn: self).\x0a\x22\x09s addLast: shape.\x22\x0a\x22\x09Transcript show: (s width asString),'-BEFOREinstalledOn:-',(s class asString),(String cr).\x22\x0a\x09\x22 set height and width from previous shape <--- needs to be changed when implementing chain of shapes \x22\x0a\x0a\x09self shape isNil ifFalse: [\x0a\x22\x09\x09Transcript show: 's ',(s class asString) , ' ' , (s width asString) , ' -' , (s height asString) , ' ' , (s class asString) , ' ' , (String cr).\x0a\x09\x09Transcript show: 'shape ',(shape class asString) , ' ' , (shape width asString) , ' -' , (shape height asString) , ' ' , (shape class asString) , ' ' , (String cr), (String cr).\x22\x0a\x09\x09s width: (s width max: (self shape width)).\x0a\x09\x09s height: (s height max: (self shape height)).\x09\x0a\x09]. \x0a\x0a\x22\x09Transcript show: (s width asString),'-AFTERinstalledOn:-',(s class asString),(String cr).\x22\x0a\x09shape := s.",
messageSends: ["installedOn:", "ifFalse:", "width:", "max:", "width", "shape", "height:", "height", "isNil"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
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
args: ["anEvent"],
source: "announce: anEvent\x0a\x09\x22trigger an event. Objects who registered to me will get notified\x22\x0a\x0a\x09| eventToBeSent |\x0a\x09eventToBeSent := anEvent isBehavior \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ anEvent new ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ anEvent ]. \x0a\x09\x0a\x09eventToBeSent element: self.\x0a\x09eventHandler announce: eventToBeSent",
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "element:", "announce:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "forward:",
category: 'events',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._forward_(obj);
return self}, function($ctx1) {$ctx1.fill(self,"forward:",{obj:obj},smalltalk.ROAbstractComponent)})},
args: ["obj"],
source: "forward: obj\x0a\x09eventHandler forward: obj",
messageSends: ["forward:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "getShape:",
category: 'testing',
fn: function (shapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shapeDetect_((function(de){
return smalltalk.withContext(function($ctx2) {
return _st(de)._isKindOf_(shapeClass);
}, function($ctx2) {$ctx2.fillBlock({de:de},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getShape:",{shapeClass:shapeClass},smalltalk.ROAbstractComponent)})},
args: ["shapeClass"],
source: "getShape: shapeClass\x0a\x09\x22Return a shape instance, instance of the shape class provided as parameter\x22\x0a\x0a\x09^ self shapeDetect: [ :de | de isKindOf: shapeClass ]",
messageSends: ["shapeDetect:", "isKindOf:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractComponent.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@view"]=_st($ROView())._nullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x22\x09parent := ROView nullView.\x22\x0a\x09\x0a\x09view := ROView nullView.\x0a\x09\x0a\x09\x22Actually, I am not sure we need to have a variable interactions\x22\x0a\x22\x09interactions := IdentityDictionary new.\x0a\x0a\x09zIndex := 0\x0a\x22",
messageSends: ["initialize", "nullView"],
referencedClasses: ["ROView"]
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isElement",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEdge())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isElement",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "isElement\x0a\x09^ self isEdge not",
messageSends: ["not", "isEdge"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotEdge",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEdge())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotEdge",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "isNotEdge\x0a\x09^ self isEdge not",
messageSends: ["not", "isEdge"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
category: 'testing',
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._isShapedAs_(aShapeClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.ROAbstractComponent)})},
args: ["aShapeClass"],
source: "isShapedAs: aShapeClass\x0a\x09^ shape isShapedAs: aShapeClass",
messageSends: ["isShapedAs:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
self._modelChanged();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject.\x0a\x09self modelChanged.",
messageSends: ["modelChanged"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "modelChanged",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._modelChanged_(self);
return self}, function($ctx1) {$ctx1.fill(self,"modelChanged",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "modelChanged\x0a\x09\x0a\x09\x22We should do an annoucement like ROModelChanged. \x0a\x09But for now it is not useful. It is here just because of cache of ROLabel.\x22\x0a\x09\x0a\x09self shape modelChanged: self",
messageSends: ["modelChanged:", "shape"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._model_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
args: ["anObject"],
source: "on: anObject \x0a\x09\x22Set the object model of myself. The object model is used by the shape when computing metrics that may be used by the shapes\x22\x0a\x0a\x09self model: anObject",
messageSends: ["model:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'events',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass do: aBlock\x0a\x09\x22Register a block as an handler for eventClass\x22\x0a\x09\x0a\x0a\x09eventHandler on: eventClass do: aBlock.\x0a\x09\x22interactions at: eventClass put: aBlock\x22",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:doOnce:",
category: 'events',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,(function(arg){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(arg);
return _st(self["@eventHandler"])._unsubscribeForEvent_(eventClass);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass doOnce: aBlock\x0a\x09\x22Register a block as an handler for eventClass. The callback is removed when exected\x22\x0a\x09\x0a\x09eventHandler on: eventClass do: [ :arg | \x0a\x09\x09aBlock value: arg.\x0a\x09\x09eventHandler unsubscribeForEvent: eventClass.\x0a\x09\x09\x22self removeInteraction: eventClass \x22]",
messageSends: ["on:do:", "value:", "unsubscribeForEvent:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._remove();
_st(self._view())._remove_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "remove\x0a\x09\x22Remove myself from the view I belong to (if I actually belong to the view, else do nothing) and from my parent.\x22\x0a\x0a\x09\x22self removeFromParent.\x22\x0a\x09\x22self view removeElementToRender: self.\x09\x22\x22We remove all the subelements\x22\x0a\x09self shape remove.\x0a\x09self view remove: self.\x0a\x09\x22self allElementsDo: #remove\x22",
messageSends: ["remove", "shape", "remove:", "view"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeInteraction:",
category: 'events',
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
args: ["anInteractionClass"],
source: "removeInteraction: anInteractionClass\x0a\x09\x22Remove an interaction from the receiver. No error is raised if no interaction is found\x22\x0a\x09\x0a\x09| ds |\x0a\x09ds := interactions select: [ :d | d isKindOf: anInteractionClass ].\x0a\x09ds associationsDo: [ :assoc | \x0a\x09\x09interactions removeKey: assoc key.\x0a\x09\x09eventHandler unsubscribe: assoc value ].",
messageSends: ["select:", "isKindOf:", "associationsDo:", "removeKey:", "key", "unsubscribe:", "value"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._shapeDetect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapeDetect:",{aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["aBlock"],
source: "shapeDetect: aBlock\x0a\x09^ shape shapeDetect: aBlock",
messageSends: ["shapeDetect:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._signalUpdate();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "signalUpdate\x0a\x09\x22Trigger a redisplay of the view\x22\x0a\x09\x0a\x09^ view signalUpdate",
messageSends: ["signalUpdate"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "view\x0a\x09\x22Answer the view in which I am defined\x22\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.ROAbstractComponent)})},
args: ["aView"],
source: "view: aView\x0a\x09\x22Set the view in which I am defined. All my elements should also belong to the same view\x22\x0a\x09view := aView.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "withAllElementsDo:",
category: 'as yet unclassified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_(self);
self._allElementsDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"withAllElementsDo:",{aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["aBlock"],
source: "withAllElementsDo: aBlock\x0a\x09aBlock value: self.\x0a\x09self allElementsDo: aBlock",
messageSends: ["value:", "allElementsDo:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'as yet unclassified',
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
args: ["anObject"],
source: "on: anObject \x0a\x09^ self basicNew on: anObject; initialize; yourself",
messageSends: ["on:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent.klass);


smalltalk.addClass('ROEdge', smalltalk.ROAbstractComponent, ['from', 'to'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'accessing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROEdge)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsDo:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"elementsDo:",{aBlock:aBlock},smalltalk.ROEdge)})},
args: ["aBlock"],
source: "elementsDo: aBlock\x0a\x09\x22Do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.ROEdge)})},
args: [],
source: "from\x0a\x09^ from",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'accessing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.ROEdge)})},
args: ["anElement"],
source: "from: anElement\x0a\x09from := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "isEdge",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isEdge",{},smalltalk.ROEdge)})},
args: [],
source: "isEdge\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._from())._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROEdge)})},
args: [],
source: "position \x0a\x09\x0a\x09^self from position ",
messageSends: ["position", "from"],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROEdge)})},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aShape:aShape},smalltalk.ROEdge)})},
args: ["aShape"],
source: "shape: aShape\x0a\x09shape := aShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.ROEdge)})},
args: [],
source: "to\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'accessing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.ROEdge)})},
args: ["anElement"],
source: "to: anElement\x0a\x09to := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.ROEdge)})},
args: ["aPoint"],
source: "translateBy: aPoint ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);


smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:inView:",
category: 'public - edges constructions',
fn: function (associations,view){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_inView_(associations,"key","value",view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:inView:",{associations:associations,view:view},smalltalk.ROEdge.klass)})},
args: ["associations", "view"],
source: "buildEdgesFromAssociations: associations inView: view\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09^ self buildEdgesFromElements: associations from: #key to: #value inView: view",
messageSends: ["buildEdgesFromElements:from:to:inView:"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:",
category: 'public - edges constructions',
fn: function (associations,aLineShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(associations,"key","value",aLineShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:",{associations:associations,aLineShape:aLineShape},smalltalk.ROEdge.klass)})},
args: ["associations", "aLineShape"],
source: "buildEdgesFromAssociations: associations using: aLineShape\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09^ self buildEdgesFromElements: associations from: #key to: #value using: aLineShape",
messageSends: ["buildEdgesFromElements:from:to:using:"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:inView:",
category: 'public - edges constructions',
fn: function (associations,aLineShape,view){
var self=this;
var edges,associationsOfElements;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
associationsOfElements=_st(associations)._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(view)._elementFromModel_(_st(assoc)._key())).__minus_gt(_st(view)._elementFromModel_(_st(assoc)._value()));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
_st(associationsOfElements)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=[];
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
edges=_st($OrderedCollection())._new();
_st(associationsOfElements)._do_((function(associationOfTwoElements){
var edge;
return smalltalk.withContext(function($ctx2) {
edge=_st($ROEdge())._from_to_(_st(associationOfTwoElements)._key(),_st(associationOfTwoElements)._value());
edge;
_st(edge).__plus(aLineShape);
return _st(edges)._add_(edge);
}, function($ctx2) {$ctx2.fillBlock({associationOfTwoElements:associationOfTwoElements,edge:edge},$ctx1)})}));
_st(view)._addAll_(edges);
$2=edges;
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:inView:",{associations:associations,aLineShape:aLineShape,view:view,edges:edges,associationsOfElements:associationsOfElements},smalltalk.ROEdge.klass)})},
args: ["associations", "aLineShape", "view"],
source: "buildEdgesFromAssociations: associations using: aLineShape inView: view\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09| edges associationsOfElements |\x0a\x09associationsOfElements := associations collect: [ :assoc | (view elementFromModel: assoc key) -> (view elementFromModel: assoc value) ].\x0a\x09associationsOfElements ifEmpty: [ ^ #() ].\x0a\x09\x0a\x09edges := OrderedCollection new.\x0a\x09associationsOfElements do: [ :associationOfTwoElements |\x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := ROEdge from: associationOfTwoElements key to: associationOfTwoElements value. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge ].\x0a\x09view addAll: edges.\x0a\x09^ edges",
messageSends: ["collect:", "->", "elementFromModel:", "value", "key", "ifEmpty:", "new", "do:", "from:to:", "+", "add:", "addAll:"],
referencedClasses: ["OrderedCollection", "ROEdge"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:",
category: 'public - edges constructions',
fn: function (elements,fromBlock,toBlock){
var self=this;
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,$ROLine());
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock},smalltalk.ROEdge.klass)})},
args: ["elements", "fromBlock", "toBlock"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x0a\x09^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: ROLine",
messageSends: ["buildEdgesFromElements:from:to:using:"],
referencedClasses: ["ROLine"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:",
category: 'public - edges constructions',
fn: function (elements,fromBlock,toBlock,aLineShape){
var self=this;
var edges,container,fromElement,toElement,elementsWithModels;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
_st(elements)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=[];
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
edges=_st($OrderedCollection())._new();
elementsWithModels=_st(elements)._select_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model())._notNil();
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st(elementsWithModels)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
container=_st(element)._parent();
container;
fromElement=_st(container)._elementFromModel_(_st(fromBlock)._roValue_(_st(element)._model()));
fromElement;
toElement=_st(container)._elementFromModel_(_st(toBlock)._roValue_(_st(element)._model()));
toElement;
$2=_st(_st(fromElement)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(toElement)._notNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($2)){
var edge;
edge=_st($ROEdge())._from_to_(fromElement,toElement);
edge;
_st(edge).__plus(aLineShape);
_st(edges)._add_(edge);
return _st(container)._add_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
$3=edges;
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:using:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,edges:edges,container:container,fromElement:fromElement,toElement:toElement,elementsWithModels:elementsWithModels},smalltalk.ROEdge.klass)})},
args: ["elements", "fromBlock", "toBlock", "aLineShape"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09| edges container fromElement toElement elementsWithModels |\x0a\x09elements ifEmpty: [ ^ #() ].\x0a\x09edges := OrderedCollection new.\x0a\x09elementsWithModels := elements select: [ :el | el model notNil ].\x0a\x09elementsWithModels do: [ :element |\x0a\x09\x09container := element parent.\x0a\x09\x09fromElement := container elementFromModel: (fromBlock roValue: element model).\x0a\x09\x09toElement := container elementFromModel: (toBlock roValue: element model).\x0a\x09\x09(fromElement notNil and: [ toElement notNil ])\x0a\x09\x09\x09ifTrue: [  \x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := ROEdge from: fromElement to: toElement. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge.\x0a\x09\x09\x09\x09container add: edge ] ].\x0a\x09^ edges",
messageSends: ["ifEmpty:", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "roValue:", "ifTrue:", "from:to:", "+", "add:", "and:"],
referencedClasses: ["OrderedCollection", "ROEdge"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'public',
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
args: ["el1", "el2"],
source: "from: el1 to: el2\x0a\x09^ self new from: el1; to: el2; yourself",
messageSends: ["from:", "new", "to:", "yourself"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineFrom:to:",
category: 'public',
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
args: ["f", "t"],
source: "lineFrom: f to: t\x0a\x09^ (self from: f to: t)\x0a\x09\x09+ (ROLine new) ;\x0a\x09\x09yourself\x0a\x09",
messageSends: ["+", "new", "from:to:", "yourself"],
referencedClasses: ["ROLine"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "linesFor:",
category: 'public',
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
args: ["associations"],
source: "linesFor: associations \x0a\x09\x22Return a collection of edges, one for each provided association\x22\x0a\x0a\x09^ associations collect: [ :assoc | self lineFrom: assoc key to: assoc value ]",
messageSends: ["collect:", "lineFrom:to:", "key", "value"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);


smalltalk.addClass('ROElement', smalltalk.ROAbstractComponent, ['position'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "absolutePosition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"absolutePosition",{},smalltalk.ROElement)})},
args: [],
source: "absolutePosition\x0a\x09\x22Return the absolute position of the element, the top left corner\x22\x0a\x0a\x22\x09^ parent \x0a\x09\x09ifNil: [ self position ]\x0a\x09\x09ifNotNil: [ self position + parent absolutePosition ]\x22\x0a\x09\x09\x0a\x09^ self position",
messageSends: ["position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractions",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@interactions"])._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractions",{},smalltalk.ROElement)})},
args: [],
source: "activateInteractions\x0a\x09interactions values do: [:each | each value].",
messageSends: ["do:", "value", "values"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteraction:",
category: 'as yet unclassified',
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._at_put_(_st(anInteractionClassOrInstance)._key(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(anInteractionClassOrInstance)._initializeElement_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addInteraction:",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROElement)})},
args: ["anInteractionClassOrInstance"],
source: "addInteraction: anInteractionClassOrInstance\x0a\x09\x22Add an interaction to the node\x22\x0a\x09\x0a\x09interactions at: anInteractionClassOrInstance key put: [anInteractionClassOrInstance initializeElement: self]",
messageSends: ["at:put:", "key", "initializeElement:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "allEdgesFrom",
category: 'accessing',
fn: function (){
var self=this;
var edges;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
edges=_st($OrderedCollection())._new();
_st(self._view())._allElementsDo_((function(edge){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(edge)._isEdge())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(edge)._from()).__eq_eq(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
return _st(edges)._add_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
$2=edges;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allEdgesFrom",{edges:edges},smalltalk.ROElement)})},
args: [],
source: "allEdgesFrom\x0a\x09\x22Return all the edges that begins from me\x22\x0a\x09| edges |\x0a\x09edges := OrderedCollection new.\x0a\x09self view allElementsDo:  [ :edge | \x0a\x09\x09(edge isEdge and: [ edge from == self ]) \x0a\x09\x09\x09ifTrue: [ edges add: edge ] ].\x0a\x09^ edges",
messageSends: ["new", "allElementsDo:", "ifTrue:", "add:", "and:", "==", "from", "isEdge", "view"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "allEdgesTo",
category: 'accessing',
fn: function (){
var self=this;
var edges;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
edges=_st($OrderedCollection())._new();
_st(self._view())._allElementsDo_((function(edge){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(edge)._isEdge())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(edge)._to()).__eq_eq(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($1)){
return _st(edges)._add_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
$2=edges;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allEdgesTo",{edges:edges},smalltalk.ROElement)})},
args: [],
source: "allEdgesTo\x0a\x09\x22Return all the edges that ends to me\x22\x0a\x09| edges |\x0a\x09edges := OrderedCollection new.\x0a\x09self view allElementsDo:  [ :edge | \x0a\x09\x09(edge isEdge and: [ edge to == self ]) \x0a\x09\x09\x09ifTrue: [ edges add: edge ] ].\x0a\x09^ edges",
messageSends: ["new", "allElementsDo:", "ifTrue:", "add:", "and:", "==", "to", "isEdge", "view"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)})},
args: [],
source: "bounds\x0a\x09\x22Return the bounds of the element\x22\x0a\x09\x0a\x09^ self position extent: (shape extentFor: self)",
messageSends: ["extent:", "extentFor:", "position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROElement)})},
args: ["aColor"],
source: "color: aColor\x0a\x09self shape color: aColor.",
messageSends: ["color:", "shape"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._extentFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROElement)})},
args: [],
source: "extent\x0a\x09^ shape extentFor: self",
messageSends: ["extentFor:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
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
args: ["aPoint"],
source: "extent: aPoint \x0a\x09(aPoint = self extent) ifTrue: [ ^ self ].\x0a\x0a\x09shape extent: aPoint",
messageSends: ["ifTrue:", "=", "extent", "extent:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)})},
args: [],
source: "height\x0a\x22\x09^ shape heightFor: self\x22\x0a\x09^ shape height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._height_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValue:aValue},smalltalk.ROElement)})},
args: ["aValue"],
source: "height: aValue\x0a\x09shape height: aValue",
messageSends: ["height:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROElement)})},
args: [],
source: "hide\x0a\x09shape hide",
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $RONullShape(){return smalltalk.RONullShape||(typeof RONullShape=="undefined"?nil:RONullShape)}
function $ROClickable(){return smalltalk.ROClickable||(typeof ROClickable=="undefined"?nil:ROClickable)}
function $ROHoverable(){return smalltalk.ROHoverable||(typeof ROHoverable=="undefined"?nil:ROHoverable)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROElement.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@interactions"]=_st($Dictionary())._new();
self["@shape"]=_st($RONullShape())._new();
self.__at($ROClickable());
self.__at($ROHoverable());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0.\x0a\x09interactions := Dictionary new.\x0a\x09shape := RONullShape new.\x0a\x09self @ ROClickable.\x0a\x09self @ ROHoverable.",
messageSends: ["initialize", "@", "new"],
referencedClasses: ["Dictionary", "RONullShape", "ROClickable", "ROHoverable"]
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "isEdge",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isEdge",{},smalltalk.ROElement)})},
args: [],
source: "isEdge\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

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
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)})},
args: [],
source: "position\x0a\x09\x22Return the position of the element. Return a point of floats\x22\x0a\x09\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "positionAsInteger",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionAsInteger",{},smalltalk.ROElement)})},
args: [],
source: "positionAsInteger\x0a\x09\x22Return the position as integer\x22\x0a\x09\x0a\x09^ self position asIntegerPoint ",
messageSends: ["asIntegerPoint", "position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeShape();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROElement)})},
args: [],
source: "remove\x0a\x09\x22Remove myself from the view I belong to (if I actually belong to the view, else do nothing) and from my parent.\x22\x0a\x0a\x22\x09self removeFromParent.\x22\x0a\x22\x09self view removeElementToRender: self.\x22\x09\x22We remove all the subelements\x22\x0a\x22\x09self allElementsDo: #remove\x22\x0a\x09self removeShape",
messageSends: ["removeShape"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "removeShape",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._removeSVGElement();
return self}, function($ctx1) {$ctx1.fill(self,"removeShape",{},smalltalk.ROElement)})},
args: [],
source: "removeShape\x0a\x09shape removeSVGElement",
messageSends: ["removeSVGElement"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)})},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aROShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)})},
args: ["aROShape"],
source: "shape: aROShape\x0a\x09shape := aROShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.ROElement)})},
args: [],
source: "show\x0a\x09shape show",
messageSends: ["show"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (d){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(_st(d).__at(d));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{d:d},smalltalk.ROElement)})},
args: ["d"],
source: "size: d\x0a\x09self extent: d @ d",
messageSends: ["extent:", "@"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateTo_(_st(self["@position"]).__plus(aPoint));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.ROElement)})},
args: ["aPoint"],
source: "translateBy: aPoint \x0a\x09self translateTo: position + aPoint",
messageSends: ["translateTo:", "+"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)})},
args: ["aPoint"],
source: "translateTo: aPoint \x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)})},
args: [],
source: "width\x0a\x22\x09^ shape widthFor: self\x22\x0a\x09^ shape width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._width_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aValue:aValue},smalltalk.ROElement)})},
args: ["aValue"],
source: "width: aValue\x0a\x09shape width: aValue",
messageSends: ["width:"],
referencedClasses: []
}),
smalltalk.ROElement);


smalltalk.addMethod(
smalltalk.method({
selector: "forCollection:",
category: 'public',
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
args: ["aCollection"],
source: "forCollection: aCollection \x0a\x09^ (aCollection collect: [ :v | self on: v ]) asArray",
messageSends: ["asArray", "collect:", "on:"],
referencedClasses: []
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
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
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new model: anObject; yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sprite",
category: 'public',
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
args: [],
source: "sprite\x0a\x0a\x09^ self new\x0a\x09\x09\x09extent: 50 @ 50;\x0a\x09\x09\x09addInteraction: RODraggable;\x0a\x22\x09\x09\x09addShape: (ROBorder new color: Color red);\x22\x0a\x09\x09\x09addShape: (ROBox new);\x0a\x09\x09\x09yourself",
messageSends: ["extent:", "@", "new", "addInteraction:", "addShape:", "yourself"],
referencedClasses: ["RODraggable", "ROBox"]
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spriteOn:",
category: 'public',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sprite())._on_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"spriteOn:",{value:value},smalltalk.ROElement.klass)})},
args: ["value"],
source: "spriteOn: value\x0a\x09^ self sprite on: value",
messageSends: ["on:", "sprite"],
referencedClasses: []
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spritesOn:",
category: 'public',
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
args: ["values"],
source: "spritesOn: values\x0a\x09^ values collect: [:v | self sprite on: v ]",
messageSends: ["collect:", "on:", "sprite"],
referencedClasses: []
}),
smalltalk.ROElement.klass);


smalltalk.addClass('ROView', smalltalk.ROContainer, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "absolutePosition",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"absolutePosition",{},smalltalk.ROView)})},
args: [],
source: "absolutePosition\x0a\x09^ 0 @ 0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addElement_(anElement);
_st(anElement)._view_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)})},
args: ["anElement"],
source: "add: anElement\x0a\x09\x22Add an element in the view. Do nothing if the element is already in\x22\x0a\x09\x22(element view ~~ ROView nullView) ifTrue: [ ^ self ].\x22\x0a\x09\x22\x0a\x09self addElement: element.\x0a\x09element parent: self.\x0a\x09element view: self.\x0a\x0a\x09self addElementRecursivelyToRender: element\x0a\x09\x22\x0a\x09self addElement: anElement.\x0a\x09anElement view: self.",
messageSends: ["addElement:", "view:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding',
fn: function (els){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(els)._do_((function(n){
return smalltalk.withContext(function($ctx2) {
return self._add_(n);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{els:els},smalltalk.ROView)})},
args: ["els"],
source: "addAll: els \x0a\x09\x22self assert: [ els isKindOf: Collection ].\x22\x0a\x09els do: [:n | self add: n ]",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'adding',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._add_(element);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{element:element},smalltalk.ROView)})},
args: ["element"],
source: "addElement: element\x0a\x09elements add: element.",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._paper())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROView)})},
args: [],
source: "clear\x0a\x09self paper clear.\x0a\x09\x0a\x09",
messageSends: ["clear", "paper"],
referencedClasses: []
}),
smalltalk.ROView);

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
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROView)})},
args: [],
source: "elements\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROView.superclass.fn.prototype._initialize.apply(_st(self), []);
self._clear();
self["@elements"]=_st($Array())._new();
self["@svgCanvas"]=self._paper();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self clear.\x0a\x09elements := Array new.\x0a\x09svgCanvas := self paper.",
messageSends: ["initialize", "clear", "new", "paper"],
referencedClasses: ["Array"]
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROView)})},
args: [],
source: "model\x0a\x09\x22To be polymorphic with ROElement\x22\x0a\x09\x0a\x09^ self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfElements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)})},
args: [],
source: "numberOfElements\x0a\x09^ elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)})},
args: [],
source: "open\x0a\x09\x0a\x09elements do: [ :each | each drawOn: svgCanvas].",
messageSends: ["do:", "drawOn:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
category: 'public - opening',
fn: function (){
var self=this;
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RORaphaelCanvas())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)})},
args: [],
source: "paper\x0a\x09^ RORaphaelCanvas canvas",
messageSends: ["canvas"],
referencedClasses: ["RORaphaelCanvas"]
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'accessing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(element,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{element:element},smalltalk.ROView)})},
args: ["element"],
source: "remove: element\x0a\x09\x22Remove the element from myself. However, the element is not removed from the visualization. Send #remove to element to actually remove it.\x22\x0a\x09\x22element removeShape.\x22\x0a\x09elements remove: element ifAbsent: [].\x0a\x09self signalUpdate.",
messageSends: ["remove:ifAbsent:", "signalUpdate"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.ROView)})},
args: [],
source: "signalUpdate\x0a\x09\x22self announce: RORefreshNeeded\x22\x0a\x09\x0a\x09self elements do: [:el | el drawOn: svgCanvas].",
messageSends: ["do:", "drawOn:", "elements"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'public - opening',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._elementsDo_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._translateBy_(aPoint);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.ROView)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09self elementsDo: [:el | el translateBy: aPoint ]",
messageSends: ["elementsDo:", "translateBy:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROView)})},
args: [],
source: "view\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);


smalltalk.ROView.klass.iVarNames = ['nullView'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resetNullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView.klass)})},
args: [],
source: "initialize\x0a\x09self resetNullView ",
messageSends: ["resetNullView"],
referencedClasses: []
}),
smalltalk.ROView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nullView",
category: 'as yet unclassified',
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
args: [],
source: "nullView\x0a\x09\x22Used when creating new element. For example, we have the relation:\x0a\x09  ROElement new view == ROView nullView\x22\x0a\x09\x0a\x09^ nullView ifNil: [ nullView := self new ].",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ROView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetNullView",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nullView"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetNullView",{},smalltalk.ROView.klass)})},
args: [],
source: "resetNullView \x0a\x09nullView := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView.klass);


smalltalk.addClass('ROShape', smalltalk.ROObject, ['svgElement', 'height', 'width', 'color', 'colorCache'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
category: 'drawing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anElement)._activateInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROShape)})},
args: ["anElement"],
source: "activateInteractionsOn: anElement\x0a\x09\x22add interactions to svgElement\x22\x0a\x09anElement activateInteractions.",
messageSends: ["activateInteractions"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROShape)})},
args: [],
source: "color\x0a\x09^ color \x0a\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self["@colorCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROShape)})},
args: ["aColor"],
source: "color:\x09 aColor\x0a\x09color := aColor.\x0a\x09colorCache := nil.\x0a\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
category: 'creation',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@colorCache"])._notNil();
if(smalltalk.assert($1)){
$2=self["@colorCache"];
return $2;
};
self["@colorCache"]=_st(self["@color"])._roValue_(element);
$3=self["@colorCache"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"colorFor:",{element:element},smalltalk.ROShape)})},
args: ["element"],
source: "colorFor: element\x0a\x09\x22Compute the color of the element\x22\x0a\x0a\x09\x22We use a cache mechanism since computing the cache can be quite slow\x22\x0a\x09colorCache notNil ifTrue: [ ^ colorCache ].\x0a\x09^ colorCache := color roValue: element.\x0a\x0a\x22\x09(element hasAttribute: (#element, self class name) asSymbol)\x0a\x09\x09ifTrue: [ ^ element attributeAt: (#element, self class name) asSymbol ].\x0a \x0a\x09colorCache := color roValue: element.\x0a\x09element attributeAt: (#element, self class name) asSymbol put: colorCache.\x0a\x09^ colorCache\x22",
messageSends: ["ifTrue:", "notNil", "roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultExtent",
category: 'creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(5).__at((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultExtent",{},smalltalk.ROShape)})},
args: [],
source: "defaultExtent\x0a\x09\x22Each shape has a minimum size of 5@5\x22\x0a\x0a\x09^ 5 @ 5",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
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
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09\x22Create svgElement if necessary and redraw with current attributes\x22\x0a\x09(svgElement isNil) \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self initializeSVGElementOn: canvas for: anElement.\x0a\x09\x09\x09self activateInteractionsOn: anElement.].\x0a\x0a\x09\x09self updateSVGElementOn: canvas for: anElement.\x0a\x09\x0a\x09",
messageSends: ["ifTrue:", "initializeSVGElementOn:for:", "activateInteractionsOn:", "isNil", "updateSVGElementOn:for:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._elementOn_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape)});},
args: [],
source: "element\x0a\x09^ self elementOn: nil",
messageSends: ["elementOn:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'creation',
fn: function (anObject){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROElement())._on_(anObject)).__plus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape)})},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09^ (ROElement on: anObject) + self",
messageSends: ["+", "on:"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'creation',
fn: function (collectionOfObjects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(collectionOfObjects)._collect_((function(object){
return smalltalk.withContext(function($ctx2) {
return _st(self._copy())._elementOn_(object);
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{collectionOfObjects:collectionOfObjects},smalltalk.ROShape)})},
args: ["collectionOfObjects"],
source: "elementsOn: collectionOfObjects\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ collectionOfObjects collect: [ :object | self copy elementOn: object ] ",
messageSends: ["collect:", "elementOn:", "copy"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'drawing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._width_(_st(aPoint)._x());
self._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.ROShape)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09self width: aPoint x.\x0a\x09self height: aPoint y.",
messageSends: ["width:", "x", "height:", "y"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
category: 'drawing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__at(self["@height"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.ROShape)})},
args: ["element"],
source: "extentFor: element\x0a\x09\x22Return the extent of element\x22\x0a\x09\x0a\x09\x22^ ((width roValue: element) @ (height roValue: element)) .\x22\x0a\x09^ width @ height\x0a\x09",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROShape)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
args: ["aNumberOrABlock"],
source: "height: aNumberOrABlock\x0a\x09height := aNumberOrABlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@height"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.ROShape)});},
args: ["anElement"],
source: "heightFor: anElement\x0a\x09^ height roValue: anElement",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROShape)})},
args: [],
source: "hide\x0a\x09svgElement hide.",
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self._color_(_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self color: self class defaultColor.",
messageSends: ["initialize", "color:", "defaultColor", "class"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09\x22Initialize svgElement\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
category: 'accessing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"installedOn:",{element:element},smalltalk.ROShape)})},
args: ["element"],
source: "installedOn: element\x0a\x09\x22This method is meant to be overriden in case a special treatment has to be realized on the element\x22\x0a\x09\x0a\x09\x22self extent: (self preferedExtentFor: element).\x22\x0a\x09\x22element extent: (element extent max: extent).\x22\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isHidden",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@svgElement"])._node())._style())._display()).__eq("none");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHidden",{},smalltalk.ROShape)})},
args: [],
source: "isHidden\x0a\x09^(svgElement node style display = 'none')",
messageSends: ["=", "display", "style", "node"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
category: 'drawing',
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isKindOf_(aShapeClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.ROShape)})},
args: ["aShapeClass"],
source: "isShapedAs: aShapeClass\x0a\x22\x09^ (self isKindOf: aShapeClass) or: [ self next isShapedAs: aShapeClass ]\x22\x0a\x09^ (self isKindOf: aShapeClass)",
messageSends: ["isKindOf:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "modelChanged:",
category: 'creation',
fn: function (aROElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"modelChanged:",{aROElement:aROElement},smalltalk.ROShape)})},
args: ["aROElement"],
source: "modelChanged: aROElement\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeSVGElement();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROShape)})},
args: [],
source: "remove\x0a\x09self removeSVGElement.",
messageSends: ["removeSVGElement"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@svgElement"]).__eq(nil);
if(! smalltalk.assert($1)){
_st(self["@svgElement"])._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROShape)})},
args: [],
source: "removeSVGElement\x0a\x09svgElement = nil ifFalse:[ svgElement remove]",
messageSends: ["ifFalse:", "remove", "="],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbColor",
category: 'accessing',
fn: function (){
var self=this;
var triplet;
return smalltalk.withContext(function($ctx1) { 
var $1;
triplet=_st(self["@color"])._rgbTriplet255();
$1=_st(_st(_st(_st(_st("rgb(".__comma(_st(_st(triplet)._first())._asString())).__comma(",")).__comma(_st(_st(triplet)._second())._asString())).__comma(",")).__comma(_st(_st(triplet)._third())._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbColor",{triplet:triplet},smalltalk.ROShape)})},
args: [],
source: "rgbColor\x0a\x09| triplet |\x0a\x09triplet := color rgbTriplet255.\x0a\x09^ 'rgb(',(triplet first  asString),',',(triplet second asString),',',(triplet third asString),')'.  \x0a\x0a\x09",
messageSends: ["rgbTriplet255", ",", "asString", "third", "second", "first"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._size_(_st(self._width()).__star(factor));
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{factor:factor},smalltalk.ROShape)})},
args: ["factor"],
source: "scale: factor\x0a\x09self size: self width * factor",
messageSends: ["size:", "*", "width"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
category: 'drawing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aBlock)._value_(self);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._error_("Not found");
return self}, function($ctx1) {$ctx1.fill(self,"shapeDetect:",{aBlock:aBlock},smalltalk.ROShape)})},
args: ["aBlock"],
source: "shapeDetect: aBlock\x0a\x0a\x09(aBlock value: self) ifTrue: [ ^ self ].\x0a\x09self error: 'Not found'\x0a\x22\x09^ self next shapeDetect: aBlock\x22",
messageSends: ["ifTrue:", "value:", "error:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapesDo:",
category: 'drawing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapesDo:",{aBlock:aBlock},smalltalk.ROShape)})},
args: ["aBlock"],
source: "shapesDo: aBlock\x0a\x0a\x09^ aBlock value: self.\x0a\x22\x09^ self next shapesDo: aBlock\x22",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.ROShape)})},
args: [],
source: "show\x0a\x09svgElement show\x0a\x09",
messageSends: ["show"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(_st(value).__at(value));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{value:value},smalltalk.ROShape)})},
args: ["value"],
source: "size: value\x0a\x09self extent: value @ value",
messageSends: ["extent:", "@"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "svgElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgElement",{},smalltalk.ROShape)})},
args: [],
source: "svgElement\x0a\x09^ svgElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09\x22Redraw svgElement with current attributes\x22\x0a\x09self subclassResponsibility\x0a\x09\x0a\x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROShape)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
args: ["aNumberOrABlock"],
source: "width: aNumberOrABlock\x0a\x09width := aNumberOrABlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.ROShape)});},
args: ["anElement"],
source: "widthFor: anElement\x0a\x09^ width roValue: anElement",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._lightGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROShape.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color lightGray.",
messageSends: ["lightGray"],
referencedClasses: ["Color"]
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape.klass)});},
args: [],
source: "element\x0a\x09^ self new element",
messageSends: ["element", "new"],
referencedClasses: []
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROElement())._on_(anObject)).__plus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape.klass)})},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ (ROElement on: anObject) + self",
messageSends: ["+", "on:"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'not yet classified',
fn: function (collectionOfObjects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(collectionOfObjects)._collect_((function(object){
return smalltalk.withContext(function($ctx2) {
return self._elementOn_(object);
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{collectionOfObjects:collectionOfObjects},smalltalk.ROShape.klass)})},
args: ["collectionOfObjects"],
source: "elementsOn: collectionOfObjects\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ collectionOfObjects collect: [ :object | self elementOn: object ] ",
messageSends: ["collect:", "elementOn:"],
referencedClasses: []
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
category: 'not yet classified',
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
args: ["element"],
source: "installedOn: element\x0a\x09^ self new installedOn: element; yourself",
messageSends: ["installedOn:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROShape.klass);


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, ['attachPoint', 'strokeWidth'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attachPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPoint",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "attachPoint\x0a\x09\x0a\x09^ attachPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint:",
category: 'not yet classified',
fn: function (attach){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachPoint"]=attach;
return self}, function($ctx1) {$ctx1.fill(self,"attachPoint:",{attach:attach},smalltalk.ROAbstractLineShape)})},
args: ["attach"],
source: "attachPoint: attach\x0a\x09\x0a\x09attachPoint := attach",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWidth",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "defaultWidth\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'not yet classified',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._endingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROAbstractLineShape)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09 ^ attachPoint endingPointOf: anEdge",
messageSends: ["endingPointOf:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractLineShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@attachPoint"]=_st($ROShorterDistanceAttachPoint())._instance();
self["@strokeWidth"]=self._defaultWidth();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09attachPoint := ROShorterDistanceAttachPoint instance.\x0a\x09strokeWidth := self defaultWidth.\x0a\x22\x09arrows := OrderedCollection new\x22",
messageSends: ["initialize", "instance", "defaultWidth"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'not yet classified',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._startingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROAbstractLineShape)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ attachPoint startingPointOf: anEdge\x0a\x09",
messageSends: ["startingPointOf:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strokeWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "width\x0a\x09^ strokeWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'not yet classified',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokeWidth"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.ROAbstractLineShape)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09strokeWidth := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROAbstractLineShape.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color black",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
category: 'not yet classified',
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st((smalltalk.ROEdge || ROEdge))._from_to_(el1,el2);
_st($2)._shape_(_st(self)._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
args: ["el1", "el2"],
source: "edgeFrom: el1 to: el2\x0a\x09^ (ROEdge from: el1 to: el2) shape: self new; yourself",
messageSends: ["shape:", "new", "from:to:", "yourself"],
referencedClasses: ["ROEdge"]
}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFrom:to:",
category: 'not yet classified',
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._edgeFrom_to_(el1,el2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
args: ["el1", "el2"],
source: "elementFrom: el1 to: el2\x0a\x09^ self edgeFrom: el1 to: el2",
messageSends: ["edgeFrom:to:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape.klass);


smalltalk.addClass('ROLine', smalltalk.ROAbstractLineShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
category: 'drawing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROLine)})},
args: ["anElement"],
source: "activateInteractionsOn: anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
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
args: ["canvas", "anEdge"],
source: "initializeSVGElementOn: canvas for: anEdge\x0a\x09| x1 y1 x2 y2 |\x0a\x09x1 := anEdge from position x.\x0a\x09y1 := anEdge from position y.\x0a\x0a\x09x2 := anEdge to position x.\x0a\x09y2 := anEdge to position y.\x0a\x0a\x09svgElement := canvas path: 'M', x1,' ', y1, 'L', x2, ' ', y2 \x0a\x0a\x22\x09canvas path: 'M10 10L90 90'\x0a\x22",
messageSends: ["x", "position", "from", "y", "to", "path:", ","],
referencedClasses: []
}),
smalltalk.ROLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
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
_st(self["@svgElement"])._attr_value_("stroke-width",self._width());
_st(self["@svgElement"])._attr_value_("stroke",self._rgbColor());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,maxArrowSize:maxArrowSize,unit:unit,startingPoint:startingPoint,endingPoint:endingPoint,rawStartingPoint:rawStartingPoint,rawEndingPoint:rawEndingPoint},smalltalk.ROLine)})},
args: ["canvas", "anEdge"],
source: "updateSVGElementOn: canvas for: anEdge\x0a\x09| maxArrowSize unit startingPoint endingPoint rawStartingPoint rawEndingPoint |\x0a\x09rawEndingPoint  := attachPoint startingPointOf: anEdge.\x0a\x09rawStartingPoint := attachPoint endingPointOf: anEdge.\x0a\x0a\x09(rawStartingPoint = rawEndingPoint)\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x0a\x22\x09Transcript show: 'x1 ', x,' y1', y, ' x2 ', z, ' y2 ', w, (String cr).\x22\x0a\x0a\x09svgElement attr: 'path' with: 'M', ( rawEndingPoint x asInteger),' ',  (rawEndingPoint y asInteger), 'L', ( rawStartingPoint x asInteger), ' ', ( rawStartingPoint y asInteger) .\x0a\x09svgElement attr: 'stroke-width' value: (self width).\x0a\x09svgElement attr: 'stroke' value: (self rgbColor).\x0a\x0a\x0a\x09\x0a\x22\x09x1 := anEdge from position x.\x0a\x09y1 := anEdge from position y.\x0a\x0a\x09x2 := anEdge to position x.\x0a\x09y2 := anEdge to position y.\x0a\x09\x0a\x09svgElement attr: 'path' with: 'M', x1,' ', y1, 'L', x2, ' ', y2 .\x22\x0a\x09\x0a\x09\x22We draw a line before each arrow\x22\x0a\x22\x09\x0a\x09arrows do: [ :arrow | \x0a\x09\x09| arr |\x0a\x09\x09arr := arrow drawOn: aCanvas for: anEdge line: self.\x0a\x09\x09aCanvas \x0a\x09\x09\x09line: rawStartingPoint \x0a\x09\x09\x09to: arr first \x0a\x09\x09\x09width: (self widthFor: anEdge) \x0a\x09\x09\x09color: (self colorFor: anEdge).\x0a\x09\x09rawStartingPoint := arr second.\x0a\x09\x09 ].\x0a\x22\x09\x0a\x09\x22We draw a line after the arrow\x22\x0a\x22\x09aCanvas line: rawStartingPoint to: rawEndingPoint width: (self widthFor: anEdge) color: (self colorFor: anEdge).\x22",
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:with:", ",", "asInteger", "y", "x", "attr:value:", "width", "rgbColor"],
referencedClasses: []
}),
smalltalk.ROLine);



smalltalk.addClass('ROBSplineLine', smalltalk.ROLine, ['controlElements'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "addControlElement:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controlElements())._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"addControlElement:",{anElement:anElement},smalltalk.ROBSplineLine)})},
args: ["anElement"],
source: "addControlElement: anElement\x0a\x09self controlElements add: anElement",
messageSends: ["add:", "controlElements"],
referencedClasses: []
}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "controlElements",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlElements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlElements",{},smalltalk.ROBSplineLine)})},
args: [],
source: "controlElements\x0a\x09^controlElements",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@controlElements"]=_st($OrderedCollection())._new();
smalltalk.ROBSplineLine.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBSplineLine)})},
args: [],
source: "initialize\x0a\x09controlElements := OrderedCollection new.\x0a\x09super initialize.",
messageSends: ["new", "initialize"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anEdge){
var self=this;
var startPoint,endPoint,x1,y1,xn,yn,mid,p;
return smalltalk.withContext(function($ctx1) { 
endPoint=_st(self["@attachPoint"])._startingPointOf_(anEdge);
startPoint=_st(self["@attachPoint"])._endingPointOf_(anEdge);
x1=_st(startPoint)._x();
y1=_st(startPoint)._y();
xn=_st(endPoint)._x();
yn=_st(endPoint)._y();
p="";
_st(self["@controlElements"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
p=_st(_st(_st(_st(p).__comma(_st(_st(_st(e)._position())._x())._asString())).__comma(" ")).__comma(_st(_st(_st(e)._position())._y())._asString())).__comma(" ");
return p;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
p=_st(_st(_st(_st(_st(_st(_st("M".__comma(x1)).__comma(" ")).__comma(y1)).__comma("C")).__comma(p)).__comma(xn)).__comma(" ")).__comma(yn);
self["@svgElement"]=_st(canvas)._path_(p);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,startPoint:startPoint,endPoint:endPoint,x1:x1,y1:y1,xn:xn,yn:yn,mid:mid,p:p},smalltalk.ROBSplineLine)})},
args: ["canvas", "anEdge"],
source: "initializeSVGElementOn: canvas for: anEdge\x0a\x09|startPoint  endPoint x1 y1 xn yn mid p|\x0a\x09endPoint  := attachPoint startingPointOf: anEdge.\x0a\x09startPoint := attachPoint endingPointOf: anEdge.\x0a\x09x1 := startPoint x.\x0a\x09y1 := startPoint y.\x0a\x09xn := endPoint x.\x0a\x09yn := endPoint y.\x0a\x09p :=''.\x0a\x09controlElements do: [ :e | p:= p,(e position x asString), ' ', (e position y asString),' ' ].\x0a\x09p :=  'M', x1,' ', y1, 'C', p, xn, ' ', yn.\x0a\x09svgElement := canvas path: p",
messageSends: ["startingPointOf:", "endingPointOf:", "x", "y", "do:", ",", "asString", "position", "path:"],
referencedClasses: []
}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anEdge){
var self=this;
var rawStartingPoint,rawEndingPoint;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
rawStartingPoint=_st(self["@attachPoint"])._startingPointOf_(anEdge);
rawEndingPoint=_st(self["@attachPoint"])._endingPointOf_(anEdge);
$1=_st(rawStartingPoint).__eq(rawEndingPoint);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self["@svgElement"])._attr_value_("stroke-width",self._width());
_st(self["@svgElement"])._attr_value_("stroke",self._rgbColor());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,rawStartingPoint:rawStartingPoint,rawEndingPoint:rawEndingPoint},smalltalk.ROBSplineLine)})},
args: ["canvas", "anEdge"],
source: "updateSVGElementOn: canvas for: anEdge\x0a\x09| \x22maxArrowSize unit startingPoint endingPoint\x22 rawStartingPoint rawEndingPoint |\x0a\x09rawStartingPoint  := attachPoint startingPointOf: anEdge.\x0a\x09rawEndingPoint := attachPoint endingPointOf: anEdge.\x0a\x0a\x09(rawStartingPoint = rawEndingPoint)\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x09\x22svgElement attr: 'path' with: 'M', ( rawEndingPoint x asInteger),' ',  (rawEndingPoint y asInteger), 'L', ( rawStartingPoint x asInteger), ' ', ( rawStartingPoint y asInteger) .\x22\x0a\x09svgElement attr: 'stroke-width' value: (self width).\x0a\x09svgElement attr: 'stroke' value: (self rgbColor).",
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:value:", "width", "rgbColor"],
referencedClasses: []
}),
smalltalk.ROBSplineLine);



smalltalk.addClass('ROAbstractPathShape', smalltalk.ROShape, ['svgRect', 'svgPath'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "adaptContainerOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resizeContainerWith_(anElement);
self._centeringPathWith_(anElement);
self._createSetOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"adaptContainerOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "adaptContainerOn: canvas for: anElement\x0a\x0a\x09self resizeContainerWith: anElement. \x0a\x09self centeringPathWith: anElement.\x0a\x09self createSetOn: canvas for: anElement.",
messageSends: ["resizeContainerWith:", "centeringPathWith:", "createSetOn:for:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "centeringPathWith:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgPath"])._attr_value_("x",(0));
_st(self["@svgPath"])._attr_value_("y",(0));
return self}, function($ctx1) {$ctx1.fill(self,"centeringPathWith:",{anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["anElement"],
source: "centeringPathWith: anElement\x0a\x0a\x09svgPath attr: 'x' value: 0.\x0a\x09svgPath attr: 'y' value: 0.",
messageSends: ["attr:value:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "createSetOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@svgElement"]=_st(canvas)._set();
$1=self["@svgElement"];
_st($1)._push_(self["@svgRect"]);
$2=_st($1)._push_(self["@svgPath"]);
_st(self["@svgElement"])._translate_y_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y());
return self}, function($ctx1) {$ctx1.fill(self,"createSetOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "createSetOn: canvas for: anElement\x0a\x09svgElement := canvas  set.\x0a\x09svgElement push: svgRect; push: svgPath.\x0a\x09\x0a\x09\x22 enable translating \x22\x0a\x09svgElement translate:  (anElement position x) y: (anElement position y).",
messageSends: ["set", "push:", "translate:y:", "x", "position", "y"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainterOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
var container;
return smalltalk.withContext(function($ctx1) { 
var $1;
container=_st(canvas)._rect_y_width_rect_((0),(0),(1),(1));
_st(container)._attr_value_("fill","white");
_st(container)._attr_value_("stroke-width",(0));
$1=container;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeContainterOn:for:",{canvas:canvas,anElement:anElement,container:container},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "initializeContainterOn: canvas for: anElement\x0a\x09| container |\x0a\x09container :=  canvas rect: 0\x0a\x09\x09\x09\x09y: 0 \x0a\x09\x09\x09\x09width: 1\x0a\x09\x09\x09\x09rect: 1.\x0a\x09container attr: 'fill' value: 'white'.\x09\x09\x09\x0a\x09container attr: 'stroke-width' value: 0. \x22 no border \x22\x0a\x09^ container",
messageSends: ["rect:y:width:rect:", "attr:value:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgRect"]=self._initializeContainterOn_for_(canvas,anElement);
self["@svgPath"]=self._initializePathOn_for_(canvas,anElement);
self._adaptContainerOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x0a\x09\x0a\x09svgRect := self initializeContainterOn: canvas for: anElement.\x0a\x09svgPath := self initializePathOn: canvas for: anElement.\x0a\x09\x0a\x09self adaptContainerOn: canvas for: anElement.",
messageSends: ["initializeContainterOn:for:", "initializePathOn:for:", "adaptContainerOn:for:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.ROAbstractPathShape)})},
args: [],
source: "padding\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROAbstractPathShape)})},
args: [],
source: "removeSVGElement\x0a\x09\x22svgElement clear.\x22\x0a\x09svgElement remove",
messageSends: ["remove"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainerWith:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainerWith:",{anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["anElement"],
source: "resizeContainerWith: anElement\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._transform_("T0,0");
_st(self["@svgElement"])._transform_(_st(_st("T".__comma(_st(_st(anElement)._position())._x())).__comma(",")).__comma(_st(_st(anElement)._position())._y()));
_st(self["@svgPath"])._attr_value_("fill",_st(self._color())._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement transform: 'T0,0'.\x0a\x09svgElement transform: 'T',(anElement position x),',',(anElement position y).\x0a\x09svgPath attr: 'fill' value: (self color asHTMLRGBA).",
messageSends: ["transform:", ",", "y", "position", "x", "attr:value:", "asHTMLRGBA", "color"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);



smalltalk.addClass('ROImageShape', smalltalk.ROAbstractPathShape, ['url', 'imgExtent'], 'ARoassal');
smalltalk.ROImageShape.comment="Each ROImage is binded to a url to the image that cannot be changed. ";
smalltalk.addMethod(
smalltalk.method({
selector: "imageExtent",
category: 'initialize-release',
fn: function (){
var self=this;
var myImg;
function $Image(){return smalltalk.Image||(typeof Image=="undefined"?nil:Image)}
return smalltalk.withContext(function($ctx1) { 
var $1;
myImg=_st($Image())._new();
_st(myImg)._src_(self._url());
$1=_st(_st(myImg)._width()).__at(_st(myImg)._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageExtent",{myImg:myImg},smalltalk.ROImageShape)})},
args: [],
source: "imageExtent\x0a\x09| myImg |\x0a\x09myImg := Image new.\x0a\x09myImg src: self url.\x0a\x09^ (myImg width)@(myImg height) ",
messageSends: ["new", "src:", "url", "@", "height", "width"],
referencedClasses: ["Image"]
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROImageShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@imgExtent"]=self._imageExtent();
self["@width"]=_st(self["@imgExtent"])._x();
self["@height"]=_st(self["@imgExtent"])._y();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROImageShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09\x22 Initialize default values \x22\x0a\x09imgExtent := (self imageExtent).\x0a\x09width := imgExtent x.\x0a\x09height := imgExtent y.",
messageSends: ["initialize", "imageExtent", "x", "y"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._image_x_y_width_height_(self._url(),_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self._width())._max_(_st(self._defaultExtent())._x()),_st(self._height())._max_(_st(self._defaultExtent())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROImageShape)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09^  canvas \x0a\x09\x09image: (self url)\x0a\x09\x09x: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09width: ((self width) max: (self defaultExtent x)) \x0a\x09\x09height: ((self height) max: (self defaultExtent y)) .",
messageSends: ["image:x:y:width:height:", "url", "x", "position", "y", "max:", "defaultExtent", "width", "height"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainerWith:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgRect"];
_st($1)._attr_with_("width",_st(self._widthFor_(anElement))._max_(_st(self._defaultExtent())._x()));
$2=_st($1)._attr_with_("height",_st(self._heightFor_(anElement))._max_(_st(self._defaultExtent())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainerWith:",{anElement:anElement},smalltalk.ROImageShape)})},
args: ["anElement"],
source: "resizeContainerWith: anElement\x0a\x09svgRect \x09\x09\x0a\x09\x09attr: 'width' with: ((self widthFor: anElement ) max: (self defaultExtent x));\x0a\x09\x09attr: 'height' with: ((self heightFor: anElement) max: (self defaultExtent y))",
messageSends: ["attr:with:", "max:", "x", "defaultExtent", "widthFor:", "y", "heightFor:"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'private',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._size_(_st(self._width()).__star(factor));
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{factor:factor},smalltalk.ROImageShape)})},
args: ["factor"],
source: "scale: factor\x0a\x09self size: self width * factor",
messageSends: ["size:", "*", "width"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__slash(_st(self["@imgExtent"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.ROImageShape)})},
args: [],
source: "scaleFactor\x0a\x09\x22self assert: (width / imgExtent ) = (height / imgExtent ).\x22\x0a\x0a\x09^ width / (imgExtent x)",
messageSends: ["/", "x"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROImageShape.superclass.fn.prototype._updateSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
_st(self["@svgElement"])._transform_("S".__comma(_st(self._scaleFactor())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROImageShape)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09super updateSVGElementOn: canvas for: anElement.\x0a\x09svgElement transform: 'S',(self scaleFactor asString).",
messageSends: ["updateSVGElementOn:for:", "transform:", ",", "asString", "scaleFactor"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ROImageShape)})},
args: [],
source: "url\x0a\x09^ url",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROImageShape)})},
args: ["aString"],
source: "url: aString\x0a\x09url := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROImageShape);


smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._url_(aString);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROImageShape.klass)})},
args: ["aString"],
source: "url: aString\x0a\x09^ self basicNew url: aString; initialize; yourself",
messageSends: ["url:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.ROImageShape.klass);


smalltalk.addClass('ROLabel', smalltalk.ROAbstractPathShape, ['text', 'textCache'], 'ARoassal');
smalltalk.ROLabel.comment="text represents a Block or a Symbol\x0atextCache is a String generated after evaluating \x0a\x0atext roValue: anElement model\x0a\x0awhich is done in textFor:";
smalltalk.addMethod(
smalltalk.method({
selector: "centeringPathWith:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgPath"])._attr_value_("x",_st(_st(_st(self["@svgRect"])._attr_("width")).__slash((2)))._asInteger());
_st(self["@svgPath"])._attr_value_("y",_st(_st(_st(self["@svgRect"])._attr_("height")).__slash((2)))._asInteger());
_st(self["@svgPath"])._attr_value_("text-anchor","middle");
return self}, function($ctx1) {$ctx1.fill(self,"centeringPathWith:",{anElement:anElement},smalltalk.ROLabel)})},
args: ["anElement"],
source: "centeringPathWith: anElement\x0a\x09svgPath attr: 'x' value: ((svgRect attr: 'width') / 2) asInteger.\x0a\x09svgPath attr: 'y' value: ((svgRect attr: 'height') / 2) asInteger.\x0a\x09svgPath  attr: 'text-anchor' value: 'middle'.\x0a\x0a\x09",
messageSends: ["attr:value:", "asInteger", "/", "attr:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
category: 'not yet classified',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"fontSize:",{aNumber:aNumber},smalltalk.ROLabel)})},
args: ["aNumber"],
source: "fontSize: aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="model";
self["@textCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLabel)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09text := #model.\x0a\x09textCache := nil.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainterOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
var container;
return smalltalk.withContext(function($ctx1) { 
var $1;
container=smalltalk.ROLabel.superclass.fn.prototype._initializeContainterOn_for_.apply(_st(self), [canvas,anElement]);
self._setBoderTo_(container);
$1=container;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeContainterOn:for:",{canvas:canvas,anElement:anElement,container:container},smalltalk.ROLabel)})},
args: ["canvas", "anElement"],
source: "initializeContainterOn: canvas for: anElement\x0a\x09| container |\x0a\x09container := super initializeContainterOn: canvas for: anElement.\x0a\x09self setBoderTo: container.\x0a\x09^ container.",
messageSends: ["initializeContainterOn:for:", "setBoderTo:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._text_y_string_((0),(10),self._textFor_(anElement));
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09^ canvas text: 0\x0a\x09\x09\x09y:10\x0a\x09\x09\x09string: (self textFor: anElement).\x0a\x09",
messageSends: ["text:y:string:", "textFor:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=(7).__plus((2).__star((5)));
self["@width"]=_st(_st(_st(_st(anElement)._model())._asString())._size()).__star((7));
_st(anElement)._extent_(_st(self["@width"]).__at(self["@height"]));
return self}, function($ctx1) {$ctx1.fill(self,"installedOn:",{anElement:anElement},smalltalk.ROLabel)})},
args: ["anElement"],
source: "installedOn: anElement\x0a\x09height := 7 + (2 * 5).\x0a\x09width := anElement model asString size * 7.\x0a\x09\x0a\x09\x22 Change NullShape extent\x22\x0a\x09anElement extent: width@height.",
messageSends: ["+", "*", "size", "asString", "model", "extent:", "@"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "modelChanged:",
category: 'not yet classified',
fn: function (aROElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@textCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"modelChanged:",{aROElement:aROElement},smalltalk.ROLabel)})},
args: ["aROElement"],
source: "modelChanged: aROElement\x0a\x09textCache := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.ROLabel)})},
args: [],
source: "padding\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainerWith:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
var textBBox;
return smalltalk.withContext(function($ctx1) { 
textBBox=_st(self["@svgPath"])._getBBox();
_st(self["@svgRect"])._attr_value_("width",_st(_st(textBBox)._width()).__plus((5)));
_st(self["@svgRect"])._attr_value_("height",_st(_st(textBBox)._height()).__plus((5)));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainerWith:",{anElement:anElement,textBBox:textBBox},smalltalk.ROLabel)})},
args: ["anElement"],
source: "resizeContainerWith: anElement\x0a\x0a\x09| textBBox |\x0a\x09textBBox := svgPath getBBox.\x09\x0a\x09svgRect attr: 'width'  value: (textBBox width + 5).\x0a\x09svgRect attr: 'height' value:(textBBox height + 5).",
messageSends: ["getBBox", "attr:value:", "+", "width", "height"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__slash(_st(self["@svgElement"])._attr_("width"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.ROLabel)})},
args: [],
source: "scaleFactor\x0a\x09^ width/ (svgElement attr: 'width').",
messageSends: ["/", "attr:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "setBoderTo:",
category: 'not yet classified',
fn: function (container){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(container)._attr_value_("stroke","lightGray");
_st(container)._attr_value_("stroke-width",(0));
return self}, function($ctx1) {$ctx1.fill(self,"setBoderTo:",{container:container},smalltalk.ROLabel)})},
args: ["container"],
source: "setBoderTo: container\x0a\x09container attr: 'stroke' value: 'lightGray'.\x0a\x09container attr: 'stroke-width' value: 0.",
messageSends: ["attr:value:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "svgPath",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgPath"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgPath",{},smalltalk.ROLabel)})},
args: [],
source: "svgPath\x0a\x09^ svgPath",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ROLabel)})},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (anOneArgumentBlockOrSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=anOneArgumentBlockOrSymbol;
self["@textCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{anOneArgumentBlockOrSymbol:anOneArgumentBlockOrSymbol},smalltalk.ROLabel)})},
args: ["anOneArgumentBlockOrSymbol"],
source: "text: anOneArgumentBlockOrSymbol\x0a\x09text := anOneArgumentBlockOrSymbol.\x0a\x09textCache := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textCache:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@textCache"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"textCache:",{aString:aString},smalltalk.ROLabel)})},
args: ["aString"],
source: "textCache: aString\x0a\x09textCache := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textFor:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self["@textCache"];
if(($receiver = $2) == nil || $receiver == undefined){
var v;
v=_st(self["@text"])._roValue_(anElement);
v;
$3=_st(_st(v)._class()).__eq_eq("abc"._class());
if(! smalltalk.assert($3)){
v=_st(v)._printString();
v;
};
self["@textCache"]=v;
self["@textCache"];
$1=v;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"textFor:",{anElement:anElement},smalltalk.ROLabel)})},
args: ["anElement"],
source: "textFor: anElement\x0a\x09^  textCache ifNil: [\x0a\x09\x09\x09| v |\x0a\x09\x09\x09\x09v := (text roValue: anElement).\x0a\x09\x09\x09\x09 (v class == 'abc' class)\x0a\x09\x09\x09\x09\x09ifFalse: [ v := v printString ].\x0a\x09\x09\x09\x09textCache := v.\x0a\x09\x09\x09  v \x0a\x09\x09]",
messageSends: ["ifNil:", "roValue:", "ifFalse:", "printString", "==", "class"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgPath"])._attr_value_("text",self._textFor_(anElement));
self._adaptContainerOn_for_(canvas,anElement);
smalltalk.ROLabel.superclass.fn.prototype._updateSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x22\x09self text: anElement model asString.\x22\x0a\x0a\x09svgPath attr: 'text' value: (self textFor: anElement).\x0a\x09self adaptContainerOn: canvas for: anElement.\x0a\x09\x0a\x09super updateSVGElementOn: canvas for: anElement.",
messageSends: ["attr:value:", "textFor:", "adaptContainerOn:for:", "updateSVGElementOn:for:"],
referencedClasses: []
}),
smalltalk.ROLabel);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROLabel.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color black.",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.ROLabel.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aBlock:aBlock},smalltalk.ROLabel.klass)})},
args: ["aBlock"],
source: "text: aBlock\x0a\x09^ self new text: aBlock",
messageSends: ["text:", "new"],
referencedClasses: []
}),
smalltalk.ROLabel.klass);


smalltalk.addClass('ROBox', smalltalk.ROShape, ['borderColor', 'borderWidth'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROBox)})},
args: [],
source: "borderColor\x0a\x09\x22Color of a box is set by setting a color, a block or a symbol, which is evaluated against the model of the element\x22\x0a\x09\x22Return a color, a block or a symbol\x22\x0a\x09^ borderColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'drawing',
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROBox)})},
args: ["aBlockOrSymbolOrObject"],
source: "borderColor: aBlockOrSymbolOrObject\x0a\x09\x22Color of a box is set by setting a color, a block or a symbol, which is evaluated against the model of the element\x22\x0a\x0a\x09borderColor := aBlockOrSymbolOrObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColorFor:",
category: 'drawing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@borderColor"])._roValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColorFor:",{element:element},smalltalk.ROBox)})},
args: ["element"],
source: "borderColorFor: element\x0a\x09^ borderColor roValue: element",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROBox)})},
args: [],
source: "borderWidth\x0a\x09^ borderWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
category: 'drawing',
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROBox)})},
args: ["aBlockOrSymbolOrObject"],
source: "borderWidth: aBlockOrSymbolOrObject\x0a\x09borderWidth := aBlockOrSymbolOrObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidthFor:",
category: 'drawing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@borderWidth"])._roValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidthFor:",{element:element},smalltalk.ROBox)})},
args: ["element"],
source: "borderWidthFor: element\x0a\x09^ borderWidth roValue: element",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultSize",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (15);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
args: [],
source: "defaultSize\x0a\x09^ 15",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROBox)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROBox.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=self._defaultSize();
self["@height"]=self._defaultSize();
self["@borderColor"]=_st(self._class())._defaultBorderColor();
self["@borderWidth"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22 Initialize default values \x22\x0a\x09width := self defaultSize.\x0a\x09height := self defaultSize.\x0a\x09\x0a\x09borderColor := self class defaultBorderColor.\x0a\x09borderWidth := 0\x0a\x09\x0a\x09",
messageSends: ["initialize", "defaultSize", "defaultBorderColor", "class"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._rect_y_width_height_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self._widthFor_(anElement))._max_(self._defaultSize()),_st(self._heightFor_(anElement))._max_(self._defaultSize()));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement:= canvas \x0a\x09\x09rect: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09width: ((self widthFor: anElement ) max: (self defaultSize)) \x0a\x09\x09height: ((self heightFor: anElement) max: (self defaultSize)) .\x0a\x09\x09",
messageSends: ["rect:y:width:height:", "x", "position", "y", "max:", "defaultSize", "widthFor:", "heightFor:"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("x",_st(_st(anElement)._position())._x());
_st($1)._attr_with_("y",_st(_st(anElement)._position())._y());
_st($1)._attr_with_("width",self._widthFor_(anElement));
_st($1)._attr_with_("height",self._heightFor_(anElement));
_st($1)._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
_st($1)._attr_value_("stroke-width",self._borderWidth());
$2=_st($1)._attr_value_("stroke",_st(self._borderColor())._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x09\x09attr: 'x' with: (anElement position x);\x0a\x09\x09attr: 'y' with: (anElement position y);\x0a\x09\x09attr: 'width' with: (self widthFor: anElement );\x0a\x09\x09attr: 'height' with: (self heightFor: anElement);\x0a\x22\x0a\x09\x09attr: 'width' with: ((self widthFor: anElement ) max: (self defaultSize));\x0a\x09\x09attr: 'height' with: ((self heightFor: anElement) max: (self defaultSize));\x0a\x22\x0a\x09\x09attr:'fill' with: (color asHTMLRGBA);\x0a\x09\x09attr: 'stroke-width' value: (self borderWidth);\x0a\x09\x09attr: 'stroke' value: (self borderColor asHTMLRGBA).\x0a\x09\x09",
messageSends: ["attr:with:", "x", "position", "y", "widthFor:", "heightFor:", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBorderColor",{},smalltalk.ROBox.klass)})},
args: [],
source: "defaultBorderColor\x0a\x09^ Color black",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.ROBox.klass);


smalltalk.addClass('ROBorder', smalltalk.ROBox, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._borderColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROBorder)})},
args: [],
source: "color\x0a\x09^ self borderColor",
messageSends: ["borderColor"],
referencedClasses: []
}),
smalltalk.ROBorder);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._borderColor_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROBorder)})},
args: ["aColor"],
source: "color: aColor\x0a\x09^ self borderColor: aColor",
messageSends: ["borderColor:"],
referencedClasses: []
}),
smalltalk.ROBorder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROBorder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st($Color())._white();
self["@borderColor"]=_st(self._class())._defaultColor();
self["@borderWidth"]=_st(self._class())._defaultBorderWidth();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBorder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22 Fill color is inmutable. color and color: methods redirect to borderColor and borderColor:\x22\x0a\x09color := Color white.\x0a\x09borderColor := self class defaultColor.\x0a\x09borderWidth := self class defaultBorderWidth\x0a\x09\x0a\x09",
messageSends: ["initialize", "white", "defaultColor", "class", "defaultBorderWidth"],
referencedClasses: ["Color"]
}),
smalltalk.ROBorder);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBorderColor",{},smalltalk.ROBorder.klass)})},
args: [],
source: "defaultBorderColor\x0a\x09^ Color black",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.ROBorder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderWidth",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"defaultBorderWidth",{},smalltalk.ROBorder.klass)})},
args: [],
source: "defaultBorderWidth\x0a\x09^ 3",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBorder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._defaultBorderColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROBorder.klass)})},
args: [],
source: "defaultColor\x0a\x09^ self defaultBorderColor",
messageSends: ["defaultBorderColor"],
referencedClasses: []
}),
smalltalk.ROBorder.klass);


smalltalk.addClass('ROEllipse', smalltalk.ROShape, ['radius', 'borderWidth', 'borderColor'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROEllipse)})},
args: [],
source: "borderColor\x0a\x09^ borderColor ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'drawing',
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROEllipse)})},
args: ["aBlockOrSymbolOrObject"],
source: "borderColor: aBlockOrSymbolOrObject\x0a\x09borderColor := aBlockOrSymbolOrObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROEllipse)})},
args: [],
source: "borderWidth\x0a\x09^ borderWidth ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
category: 'configuration',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{anInteger:anInteger},smalltalk.ROEllipse)})},
args: ["anInteger"],
source: "borderWidth: anInteger\x0a\x09borderWidth := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROEllipse)})},
args: [],
source: "defaultRadius\x0a\x09^ 3",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._radius()).__star((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROEllipse)})},
args: [],
source: "height\x0a\x09^ self radius * 2.",
messageSends: ["*", "radius"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROEllipse.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=self._defaultRadius();
self["@width"]=_st(self._defaultRadius()).__star((1.5));
self["@height"]=_st(self._defaultRadius()).__star((1.5));
self["@borderWidth"]=(0);
self["@borderColor"]=_st($Color())._black();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROEllipse)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09radius := self defaultRadius.\x0a\x09width := self defaultRadius * 1.5.\x0a\x09height := self defaultRadius * 1.5.\x0a\x09borderWidth := 0. \x0a\x09borderColor := Color black.\x0a\x09",
messageSends: ["initialize", "defaultRadius", "*", "black"],
referencedClasses: ["Color"]
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._circle_y_r_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROEllipse)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas \x0a\x09\x09circle: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09r: (self radius) .\x0a\x0a\x09",
messageSends: ["circle:y:r:", "x", "position", "y", "radius"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROEllipse)})},
args: [],
source: "radius\x0a\x09^ radius",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
category: 'drawing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@radius"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"radius:",{anInteger:anInteger},smalltalk.ROEllipse)})},
args: ["anInteger"],
source: "radius: anInteger\x0a\x09radius := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'drawing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._radius_(_st(anInteger).__slash((2)));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{anInteger:anInteger},smalltalk.ROEllipse)})},
args: ["anInteger"],
source: "size: anInteger\x0a\x09self radius: anInteger/2",
messageSends: ["radius:", "/"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("cx",_st(_st(_st(anElement)._position())._x()).__plus(self._radius()));
_st($1)._attr_with_("cy",_st(_st(_st(anElement)._position())._y()).__plus(self._radius()));
_st($1)._attr_with_("r",self._radius());
_st($1)._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
_st($1)._attr_value_("stroke-width",self._borderWidth());
$2=_st($1)._attr_value_("stroke",_st(self._borderColor())._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROEllipse)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x0a\x09\x09attr: 'cx' with: (anElement position x + (self radius ) );\x0a\x09\x09attr: 'cy' with: (anElement position y + (self radius ) );\x0a\x0a\x09\x09attr: 'r' with: (self radius);\x0a\x09\x09attr:'fill' with: (color asHTMLRGBA);\x0a\x09\x09attr: 'stroke-width' value: (self borderWidth);\x0a\x09\x09attr: 'stroke' value: (self borderColor asHTMLRGBA).",
messageSends: ["attr:with:", "+", "radius", "x", "position", "y", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._radius()).__star((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROEllipse)})},
args: [],
source: "width\x0a\x09^ self radius * 2.",
messageSends: ["*", "radius"],
referencedClasses: []
}),
smalltalk.ROEllipse);



smalltalk.addClass('RONullShape', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
category: 'hook',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.RONullShape)})},
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'hook',
fn: function (anExtentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=_st(anExtentPoint)._x();
self["@height"]=_st(anExtentPoint)._y();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtentPoint:anExtentPoint},smalltalk.RONullShape)})},
args: ["anExtentPoint"],
source: "extent: anExtentPoint\x0a\x09width := anExtentPoint x.\x0a\x09height := anExtentPoint y.",
messageSends: ["x", "y"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
category: 'hook',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.RONullShape)})},
args: ["element"],
source: "extentFor: element\x0a\x09^ (width roValue: element) @ (height roValue: element)",
messageSends: ["@", "roValue:"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'hook',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(self._defaultExtent());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONullShape)})},
args: [],
source: "initialize\x0a\x09\x09self extent: self defaultExtent.",
messageSends: ["extent:", "defaultExtent"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isHidden",
category: 'hook',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHidden",{},smalltalk.RONullShape)})},
args: [],
source: "isHidden\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
category: 'hook',
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.RONullShape)})},
args: ["aShapeClass"],
source: "isShapedAs: aShapeClass\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
category: 'hook',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aBlock)._value_(self);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._error_("Not found");
return self}, function($ctx1) {$ctx1.fill(self,"shapeDetect:",{aBlock:aBlock},smalltalk.RONullShape)})},
args: ["aBlock"],
source: "shapeDetect: aBlock\x0a\x09(aBlock value: self) ifTrue: [ ^ self ].\x0a\x09self error: 'Not found'",
messageSends: ["ifTrue:", "value:", "error:"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapesDetect:",
category: 'hook',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Not found");
return self}, function($ctx1) {$ctx1.fill(self,"shapesDetect:",{aBlock:aBlock},smalltalk.RONullShape)})},
args: ["aBlock"],
source: "shapesDetect: aBlock\x0a\x09self error: 'Not found'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.RONullShape);



smalltalk.addClass('ROPath', smalltalk.ROShape, ['path', 'borderColor', 'borderWidth'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROPath)})},
args: [],
source: "borderColor\x0a\x09^ borderColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROPath)})},
args: [],
source: "borderWidth\x0a\x09^ borderWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPath.superclass.fn.prototype._initialize.apply(_st(self), []);
self._path_("");
self["@borderWidth"]=(1);
self["@borderColor"]=_st(self._class())._defaultBorderColor();
self["@color"]=_st(self._class())._defaultColor();
self["@height"]=(20);
self["@width"]=self["@height"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPath)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self path: ''.\x0a\x09borderWidth := 1. \x0a\x09borderColor := self class defaultBorderColor.\x0a\x09color := self class defaultColor.\x0a\x09\x0a\x09\x22 added for Amber version \x22\x0a\x09width := height := 20.",
messageSends: ["initialize", "path:", "defaultBorderColor", "class", "defaultColor"],
referencedClasses: []
}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._path_(self["@path"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROPath)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas path: path",
messageSends: ["path:"],
referencedClasses: []
}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.ROPath)})},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._transform_("T0,0");
_st($1)._transform_(_st(_st("T".__comma(_st(_st(anElement)._position())._x())).__comma(",")).__comma(_st(_st(anElement)._position())._y()));
_st($1)._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
_st($1)._attr_value_("stroke-width",self._borderWidth());
$2=_st($1)._attr_value_("stroke",_st(self._borderColor())._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROPath)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x09\x09transform: 'T0,0';\x0a\x09\x09transform: 'T',(anElement position x),',',(anElement position y);\x0a\x09\x09attr:'fill' with: (color asHTMLRGBA);\x0a\x09\x09attr: 'stroke-width' value: (self borderWidth);\x0a\x09\x09attr: 'stroke' value: (self borderColor asHTMLRGBA).",
messageSends: ["transform:", ",", "y", "position", "x", "attr:with:", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"],
referencedClasses: []
}),
smalltalk.ROPath);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBorderColor",{},smalltalk.ROPath.klass)})},
args: [],
source: "defaultBorderColor\x0a\x09^ Color black",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.ROPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._white();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROPath.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color white",
messageSends: ["white"],
referencedClasses: ["Color"]
}),
smalltalk.ROPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._path_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.ROPath.klass)})},
args: ["aString"],
source: "path: aString\x0a\x09^ self new path: aString",
messageSends: ["path:", "new"],
referencedClasses: []
}),
smalltalk.ROPath.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "asSortedCollection",
category: '*ARoassal',
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
args: [],
source: "asSortedCollection\x0a        ^self class new\x0a                addAll: self asArray sorted;\x0a                yourself",
messageSends: ["addAll:", "sorted", "asArray", "new", "class", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSortedCollection:",
category: '*ARoassal',
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
args: ["aBlock"],
source: "asSortedCollection: aBlock\x0a        ^self class new\x0a                addAll: (self asArray sorted: aBlock);\x0a                yourself",
messageSends: ["addAll:", "sorted:", "asArray", "new", "class", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:thenSelect:",
category: '*ARoassal',
fn: function (collectBlock,selectBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collect_(collectBlock))._select_(selectBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:thenSelect:",{collectBlock:collectBlock,selectBlock:selectBlock},smalltalk.Collection)})},
args: ["collectBlock", "selectBlock"],
source: "collect: collectBlock thenSelect: selectBlock\x0a\x09\x22Utility method to improve readability.\x22\x0a\x0a\x09^ (self collect: collectBlock) select: selectBlock",
messageSends: ["select:", "collect:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anyOne",
category: '*ARoassal',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"anyOne",{},smalltalk.SequenceableCollection)})},
args: [],
source: "anyOne\x0a\x09^ self first",
messageSends: ["first"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "raisedTo:",
category: '*ARoassal',
fn: function (exponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.pow( self , exponent ) ;
return self}, function($ctx1) {$ctx1.fill(self,"raisedTo:",{exponent:exponent},smalltalk.Number)})},
args: ["exponent"],
source: "raisedTo: exponent\x0a< return Math.pow( self , exponent ) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: '*ARoassal',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{aBlock:aBlock},smalltalk.Number)});},
args: ["aBlock"],
source: "roValue: aBlock\x0a\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

