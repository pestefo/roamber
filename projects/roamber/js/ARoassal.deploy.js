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


smalltalk.addClass('ROAbstractCanvas', smalltalk.ROObject, ['camera', 'extent', 'nativeCanvas', 'offset'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "camera",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_(_st(_st("Wow. Such ".__comma(_st(smalltalk.getThisContext()._selector())._asString())).__comma(" very ")).__comma(_st(self._class())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"camera",{},smalltalk.ROAbstractCanvas)})},
messageSends: ["error:", ",", "asString", "class", "selector"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "camera:",
fn: function (aROCamera){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@camera"]=aROCamera;
return self}, function($ctx1) {$ctx1.fill(self,"camera:",{aROCamera:aROCamera},smalltalk.ROAbstractCanvas)})},
messageSends: []}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nativeCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.ROAbstractCanvas)})},
messageSends: []}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aNativeCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nativeCanvas"]=aNativeCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aNativeCanvas:aNativeCanvas},smalltalk.ROAbstractCanvas)})},
messageSends: []}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawPolygon:color:borderWidth:borderColor:",
fn: function (listOfPoints,color,borderWidthValue,borderColorValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawPolygon:color:borderWidth:borderColor:",{listOfPoints:listOfPoints,color:color,borderWidthValue:borderWidthValue,borderColorValue:borderColorValue},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:at:",
fn: function (aByteString,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawString:at:",{aByteString:aByteString,aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:at:color:",
fn: function (aByteString,aPoint,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawString:at:color:",{aByteString:aByteString,aPoint:aPoint,color:color},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "drawString:at:font:color:",
fn: function (aByteString,p,f,color){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"drawString:at:font:color:",{aByteString:aByteString,p:p,f:f,color:color},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
messageSends: []}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fillOval:color:borderWidth:borderColor:",
fn: function (aRectangle,aColor,aSmallInteger,aColor4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillOval:color:borderWidth:borderColor:",{aRectangle:aRectangle,aColor:aColor,aSmallInteger:aSmallInteger,aColor4:aColor4},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fillRectangle:color:",
fn: function (aRectangle,fillColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"fillRectangle:color:",{aRectangle:aRectangle,fillColor:fillColor},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "form",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"form",{},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "frameAndFillRectangle:fillColor:borderWidth:borderColor:",
fn: function (aRectangle,fillColor,aSmallInteger,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"frameAndFillRectangle:fillColor:borderWidth:borderColor:",{aRectangle:aRectangle,fillColor:fillColor,aSmallInteger:aSmallInteger,aColor:aColor},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROCamera(){return smalltalk.ROCamera||(typeof ROCamera=="undefined"?nil:ROCamera)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractCanvas.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@extent"]=_st(self._class())._defaultExtent();
self["@camera"]=_st($ROCamera())._new();
self["@offset"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractCanvas)})},
messageSends: ["initialize", "defaultExtent", "class", "new", "@"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "line:to:width:color:",
fn: function (aPoint,aPoint2,aSmallInteger,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"line:to:width:color:",{aPoint:aPoint,aPoint2:aPoint2,aSmallInteger:aSmallInteger,aColor:aColor},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "offset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@offset"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"offset",{},smalltalk.ROAbstractCanvas)})},
messageSends: []}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "offset:",
fn: function (anOffsetAsPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@offset"]=anOffsetAsPoint;
return self}, function($ctx1) {$ctx1.fill(self,"offset:",{anOffsetAsPoint:anOffsetAsPoint},smalltalk.ROAbstractCanvas)})},
messageSends: []}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintBackground:",
fn: function (color){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._frameAndFillRectangle_fillColor_borderWidth_borderColor_(_st(self["@camera"])._realToVirtualRectangle_(_st((0).__at((0)))._extent_(self["@extent"])),color,(0),_st($Color())._white());
return self}, function($ctx1) {$ctx1.fill(self,"paintBackground:",{color:color},smalltalk.ROAbstractCanvas)})},
messageSends: ["frameAndFillRectangle:fillColor:borderWidth:borderColor:", "realToVirtualRectangle:", "extent:", "@", "white"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paintImage:at:",
fn: function (aForm,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"paintImage:at:",{aForm:aForm,aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "realToVirtualPoint:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@camera"])._realToVirtualPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"realToVirtualPoint:",{aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
messageSends: ["realToVirtualPoint:"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "realToVirtualRectangle:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@camera"])._realToVirtualRectangle_(aRectangle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"realToVirtualRectangle:",{aRectangle:aRectangle},smalltalk.ROAbstractCanvas)})},
messageSends: ["realToVirtualRectangle:"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualToRealPoint:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@camera"])._virtualToRealPoint_(aPoint)).__plus(self["@offset"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"virtualToRealPoint:",{aPoint:aPoint},smalltalk.ROAbstractCanvas)})},
messageSends: ["+", "virtualToRealPoint:"]}),
smalltalk.ROAbstractCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualToRealRectangle:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@camera"])._virtualToRealRectangle_(aRectangle))._translateBy_(self["@offset"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"virtualToRealRectangle:",{aRectangle:aRectangle},smalltalk.ROAbstractCanvas)})},
messageSends: ["translateBy:", "virtualToRealRectangle:"]}),
smalltalk.ROAbstractCanvas);


smalltalk.addMethod(
smalltalk.method({
selector: "canvas:camera:",
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
messageSends: ["canvas:", "new", "camera:", "yourself"]}),
smalltalk.ROAbstractCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultExtent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(40).__at((30));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultExtent",{},smalltalk.ROAbstractCanvas.klass)})},
messageSends: ["@"]}),
smalltalk.ROAbstractCanvas.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onCamera:",
fn: function (camera){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"onCamera:",{camera:camera},smalltalk.ROAbstractCanvas.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCanvas.klass);


smalltalk.addClass('ROConstraint', smalltalk.ROObject, [], 'ARoassal');

smalltalk.addMethod(
smalltalk.method({
selector: "constraintInItsParent:",
fn: function (element){
var self=this;
function $ROElementTranslated(){return smalltalk.ROElementTranslated||(typeof ROElementTranslated=="undefined"?nil:ROElementTranslated)}
return smalltalk.withContext(function($ctx1) { 
_st(element)._on_do2_($ROElementTranslated(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(element)._translateTo_(_st(_st(_st(element)._position())._max_((0).__at((0))))._min_(_st(_st(_st(element)._parent())._extent()).__minus(_st(element)._extent())));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"constraintInItsParent:",{element:element},smalltalk.ROConstraint.klass)})},
messageSends: ["on:do2:", "translateTo:", "min:", "-", "extent", "parent", "max:", "@", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:above:",
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__minus((0).__at(_st(element)._height())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:above:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "-", "@", "height", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:below:",
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus((0).__at(_st(anotherElement)._height())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:below:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "+", "@", "height", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:between:and:",
fn: function (element,el1,el2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(_st(el1)._position()).__plus(_st(el2)._position())).__slash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:between:and:",{element:element,el1:el1,el2:el2},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "/", "+", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheCenterOf:",
fn: function (element,anotherElement){
var self=this;
var p;
return smalltalk.withContext(function($ctx1) { 
var $1;
p=_st(_st(_st(_st(anotherElement)._width()).__minus(_st(element)._width())).__slash((2))).__at(_st(_st(_st(anotherElement)._height()).__minus(_st(element)._height())).__slash((2)));
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus(p));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheCenterOf:",{element:element,anotherElement:anotherElement,p:p},smalltalk.ROConstraint.klass)})},
messageSends: ["@", "/", "-", "height", "width", "translateTo:", "+", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheLeftCenteredOf:",
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(_st(anotherElement)._position()).__minus(_st(_st(element)._width()).__at((0)))).__plus((0).__at(_st(_st(_st(anotherElement)._height()).__slash((2))).__minus(_st(_st(element)._height()).__slash((2))))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheLeftCenteredOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "+", "@", "-", "/", "height", "width", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheLeftOf:",
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__minus(_st(_st(element)._width()).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheLeftOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "-", "@", "width", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheRightCenteredOf:",
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus(_st(_st(anotherElement)._width()).__at(_st(_st(_st(anotherElement)._height()).__slash((2))).__minus(_st(_st(element)._height()).__slash((2))))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheRightCenteredOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "+", "@", "-", "/", "height", "width", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheRightOf:",
fn: function (element,anotherElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(element)._translateTo_(_st(_st(anotherElement)._position()).__plus(_st(_st(anotherElement)._width()).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheRightOf:",{element:element,anotherElement:anotherElement},smalltalk.ROConstraint.klass)})},
messageSends: ["translateTo:", "+", "@", "width", "position"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtBottomRightOfTheWindow:",
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_(_st(windowSize).__minus(_st(element)._extent()));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtBottomRightOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
messageSends: ["windowSize", "camera", "view", "translateTo:", "-", "extent"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtCenterOfTheWindow:",
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_(_st(_st(_st(windowSize).__slash((2)))._asIntegerPoint()).__minus(_st(_st(_st(_st(element)._bounds())._extent()).__slash((2)))._asIntegerPoint()));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtCenterOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
messageSends: ["windowSize", "camera", "view", "translateTo:", "-", "asIntegerPoint", "/", "extent", "bounds"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtTheBottomOfTheWindow:",
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_((0).__at(_st(_st(windowSize)._y()).__minus(_st(element)._height())));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtTheBottomOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
messageSends: ["windowSize", "camera", "view", "translateTo:", "@", "-", "height", "y"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtTheTopRightOfTheWindow:",
fn: function (element){
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(_st(element)._view())._camera())._windowSize();
_st(element)._translateTo_(_st(_st(_st(windowSize)._x()).__minus(_st(element)._width())).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtTheTopRightOfTheWindow:",{element:element,windowSize:windowSize},smalltalk.ROConstraint.klass)})},
messageSends: ["windowSize", "camera", "view", "translateTo:", "@", "-", "width", "x"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:above:",
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
messageSends: ["move:above:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:below:",
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
messageSends: ["move:below:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:between:and:",
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
messageSends: ["move:between:and:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheCenterOf:",
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
messageSends: ["move:onTheCenterOf:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheLeftCenteredOf:",
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
messageSends: ["move:onTheLeftCenteredOf:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheLeftOf:",
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
messageSends: ["move:onTheLeftOf:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheRightCenteredOf:",
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
messageSends: ["move:onTheRightCenteredOf:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheRightOf:",
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
messageSends: ["move:onTheRightOf:", "on:do2:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtBottomRightOfTheWindow:",
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
messageSends: ["moveAtBottomRightOfTheWindow:", "on:do2:", "view"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtCenterOfTheWindow:",
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
messageSends: ["moveAtCenterOfTheWindow:", "on:do2:", "view"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtTheBottomOfTheWindow:",
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
messageSends: ["moveAtTheBottomOfTheWindow:", "on:do2:", "view"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtTheTopRightOfTheWindow:",
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
messageSends: ["moveAtTheTopRightOfTheWindow:", "on:do2:", "view"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToBottomLeft:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stickToBottomLeft_offset_(element,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stickToBottomLeft:",{element:element},smalltalk.ROConstraint.klass)})},
messageSends: ["stickToBottomLeft:offset:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToBottomLeft:offset:",
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
messageSends: ["translateTo:", "-", "height", "@", "y", "windowSize", "camera", "view", "on:do2:", "extent"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToTopRight:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._stickToTopRight_offset_(element,(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stickToTopRight:",{element:element},smalltalk.ROConstraint.klass)})},
messageSends: ["stickToTopRight:offset:"]}),
smalltalk.ROConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickToTopRight:offset:",
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
messageSends: ["translateTo:", "@", "-", "width", "x", "windowSize", "camera", "view", "on:do2:", "extent"]}),
smalltalk.ROConstraint.klass);


smalltalk.addClass('ROContainer', smalltalk.ROObject, ['elements', 'attributes', 'eventHandler', 'interactions'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "allElementsDo:",
fn: function (aBlockOrSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._elementsDo_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._withAllElementsDo_(aBlockOrSymbol);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"allElementsDo:",{aBlockOrSymbol:aBlockOrSymbol},smalltalk.ROContainer)})},
messageSends: ["elementsDo:", "withAllElementsDo:"]}),
smalltalk.ROContainer);

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
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent,eventToBeSent:eventToBeSent},smalltalk.ROContainer)})},
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "element:", "announce:"]}),
smalltalk.ROContainer);

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
selector: "elementsAsEdge",
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
messageSends: ["select:", "isEdge"]}),
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
selector: "forward:",
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._forward_(obj);
return self}, function($ctx1) {$ctx1.fill(self,"forward:",{obj:obj},smalltalk.ROContainer)})},
messageSends: ["forward:"]}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROAnnouncer(){return smalltalk.ROAnnouncer||(typeof ROAnnouncer=="undefined"?nil:ROAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROContainer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($OrderedCollection())._new();
self["@eventHandler"]=_st($ROAnnouncer())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROContainer)})},
messageSends: ["initialize", "new"]}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do2:",
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._at_put_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do2:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROContainer)})},
messageSends: ["at:put:"]}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROContainer)})},
messageSends: ["on:do:"]}),
smalltalk.ROContainer);

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
return self}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROContainer)})},
messageSends: ["on:do:", "value:", "unsubscribeForEvent:"]}),
smalltalk.ROContainer);

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
return self}, function($ctx1) {$ctx1.fill(self,"removeInteraction:",{anInteractionClass:anInteractionClass,ds:ds},smalltalk.ROContainer)})},
messageSends: ["select:", "isKindOf:", "associationsDo:", "removeKey:", "key", "unsubscribe:", "value"]}),
smalltalk.ROContainer);



smalltalk.addClass('ROAbstractComponent', smalltalk.ROContainer, ['model', 'view', 'shape'], 'ARoassal');
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
_st(s)._width_(_st(_st(s)._width())._max_(_st(self._shape())._width()));
_st(s)._height_(_st(_st(s)._height())._max_(_st(self._shape())._height()));
};
self["@shape"]=s;
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aShape:aShape,s:s},smalltalk.ROAbstractComponent)})},
messageSends: ["installedOn:", "ifFalse:", "width:", "max:", "width", "shape", "height:", "height", "isNil"]}),
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
selector: "forward:",
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._forward_(obj);
return self}, function($ctx1) {$ctx1.fill(self,"forward:",{obj:obj},smalltalk.ROAbstractComponent)})},
messageSends: ["forward:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "getShape:",
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
messageSends: ["shapeDetect:", "isKindOf:"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractComponent.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@view"]=_st($ROView())._nullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractComponent)})},
messageSends: ["initialize", "nullView"]}),
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
selector: "isShapedAs:",
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._isShapedAs_(aShapeClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.ROAbstractComponent)})},
messageSends: ["isShapedAs:"]}),
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
self._modelChanged();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
messageSends: ["modelChanged"]}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "modelChanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._modelChanged_(self);
return self}, function($ctx1) {$ctx1.fill(self,"modelChanged",{},smalltalk.ROAbstractComponent)})},
messageSends: ["modelChanged:", "shape"]}),
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
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._remove();
_st(self._view())._remove_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROAbstractComponent)})},
messageSends: ["remove", "shape", "remove:", "view"]}),
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
selector: "shapeDetect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._shapeDetect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapeDetect:",{aBlock:aBlock},smalltalk.ROAbstractComponent)})},
messageSends: ["shapeDetect:"]}),
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
selector: "withAllElementsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_(self);
self._allElementsDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"withAllElementsDo:",{aBlock:aBlock},smalltalk.ROAbstractComponent)})},
messageSends: ["value:", "allElementsDo:"]}),
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
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._from())._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROEdge)})},
messageSends: ["position", "from"]}),
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
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.ROEdge)})},
messageSends: []}),
smalltalk.ROEdge);


smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:inView:",
fn: function (associations,view){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_inView_(associations,"key","value",view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:inView:",{associations:associations,view:view},smalltalk.ROEdge.klass)})},
messageSends: ["buildEdgesFromElements:from:to:inView:"]}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:",
fn: function (associations,aLineShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(associations,"key","value",aLineShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:",{associations:associations,aLineShape:aLineShape},smalltalk.ROEdge.klass)})},
messageSends: ["buildEdgesFromElements:from:to:using:"]}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:inView:",
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
messageSends: ["collect:", "->", "elementFromModel:", "value", "key", "ifEmpty:", "new", "do:", "from:to:", "+", "add:", "addAll:"]}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:",
fn: function (elements,fromBlock,toBlock){
var self=this;
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,$ROLine());
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock},smalltalk.ROEdge.klass)})},
messageSends: ["buildEdgesFromElements:from:to:using:"]}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:",
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
messageSends: ["ifEmpty:", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "roValue:", "ifTrue:", "from:to:", "+", "add:", "and:"]}),
smalltalk.ROEdge.klass);

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
selector: "allEdgesFrom",
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
messageSends: ["new", "allElementsDo:", "ifTrue:", "add:", "and:", "==", "from", "isEdge", "view"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "allEdgesTo",
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
messageSends: ["new", "allElementsDo:", "ifTrue:", "add:", "and:", "==", "to", "isEdge", "view"]}),
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
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROElement)})},
messageSends: ["color:", "shape"]}),
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
$1=_st(self["@shape"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)})},
messageSends: ["height"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._height_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValue:aValue},smalltalk.ROElement)})},
messageSends: ["height:"]}),
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
function $ROHoverable(){return smalltalk.ROHoverable||(typeof ROHoverable=="undefined"?nil:ROHoverable)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROElement.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@interactions"]=_st($Dictionary())._new();
self["@shape"]=_st($RONullShape())._new();
self.__at($ROClickable());
self.__at($ROHoverable());
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
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateTo_(_st(self["@position"]).__plus(aPoint));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.ROElement)})},
messageSends: ["translateTo:", "+"]}),
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
$1=_st(self["@shape"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)})},
messageSends: ["width"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._width_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aValue:aValue},smalltalk.ROElement)})},
messageSends: ["width:"]}),
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
var ev;
function $ROViewCleared(){return smalltalk.ROViewCleared||(typeof ROViewCleared=="undefined"?nil:ROViewCleared)}
return smalltalk.withContext(function($ctx1) { 
_st(self._paper())._clear();
ev=_st(_st($ROViewCleared())._new())._view_(self);
_st(self["@eventHandler"])._announce_(ev);
return self}, function($ctx1) {$ctx1.fill(self,"clear",{ev:ev},smalltalk.ROView)})},
messageSends: ["clear", "paper", "view:", "new", "announce:"]}),
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
self._clear();
self["@elements"]=_st($Array())._new();
self["@svgCanvas"]=self._paper();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
messageSends: ["initialize", "clear", "new", "paper"]}),
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
_st(self["@elements"])._remove_ifAbsent_(element,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{element:element},smalltalk.ROView)})},
messageSends: ["remove:ifAbsent:", "signalUpdate"]}),
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
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._elementsDo_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._translateBy_(aPoint);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.ROView)})},
messageSends: ["elementsDo:", "translateBy:"]}),
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


smalltalk.addClass('ROShape', smalltalk.ROObject, ['svgElement', 'height', 'width', 'color', 'colorCache'], 'ARoassal');
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
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self["@colorCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
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
messageSends: ["ifTrue:", "notNil", "roValue:"]}),
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._elementOn_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape)});},
messageSends: ["elementOn:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
fn: function (anObject){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROElement())._on_(anObject)).__plus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape)})},
messageSends: ["+", "on:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
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
messageSends: ["collect:", "elementOn:", "copy"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._width_(_st(aPoint)._x());
self._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.ROShape)})},
messageSends: ["width:", "x", "height:", "y"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__at(self["@height"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.ROShape)})},
messageSends: ["@"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROShape)})},
messageSends: ["hide"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self._color_(_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROShape)})},
messageSends: ["initialize", "color:", "defaultColor", "class"]}),
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
selector: "isHidden",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@svgElement"])._node())._style())._display()).__eq("none");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHidden",{},smalltalk.ROShape)})},
messageSends: ["=", "display", "style", "node"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isKindOf_(aShapeClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.ROShape)})},
messageSends: ["isKindOf:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "modelChanged:",
fn: function (aROElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"modelChanged:",{aROElement:aROElement},smalltalk.ROShape)})},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeSVGElement();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROShape)})},
messageSends: ["removeSVGElement"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@svgElement"]).__eq(nil);
if(! smalltalk.assert($1)){
_st(self["@svgElement"])._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROShape)})},
messageSends: ["ifFalse:", "remove", "="]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbColor",
fn: function (){
var self=this;
var triplet;
return smalltalk.withContext(function($ctx1) { 
var $1;
triplet=_st(self["@color"])._rgbTriplet255();
$1=_st(_st(_st(_st(_st("rgb(".__comma(_st(_st(triplet)._first())._asString())).__comma(",")).__comma(_st(_st(triplet)._second())._asString())).__comma(",")).__comma(_st(_st(triplet)._third())._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbColor",{triplet:triplet},smalltalk.ROShape)})},
messageSends: ["rgbTriplet255", ",", "asString", "third", "second", "first"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._size_(_st(self._width()).__star(factor));
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{factor:factor},smalltalk.ROShape)})},
messageSends: ["size:", "*", "width"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
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
messageSends: ["ifTrue:", "value:", "error:"]}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapesDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapesDo:",{aBlock:aBlock},smalltalk.ROShape)})},
messageSends: ["value:"]}),
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
selector: "size:",
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(_st(value).__at(value));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{value:value},smalltalk.ROShape)})},
messageSends: ["extent:", "@"]}),
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
return smalltalk.withContext(function($ctx1) { 
var $1;
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
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
messageSends: []}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._lightGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROShape.klass)})},
messageSends: ["lightGray"]}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape.klass)});},
messageSends: ["element", "new"]}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
fn: function (anObject){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROElement())._on_(anObject)).__plus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape.klass)})},
messageSends: ["+", "on:"]}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
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
messageSends: ["collect:", "elementOn:"]}),
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


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, ['attachPoint', 'strokeWidth'], 'ARoassal');
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
selector: "defaultWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.ROAbstractLineShape)})},
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
self["@strokeWidth"]=self._defaultWidth();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineShape)})},
messageSends: ["initialize", "instance", "defaultWidth"]}),
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
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strokeWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROAbstractLineShape)})},
messageSends: []}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokeWidth"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.ROAbstractLineShape)})},
messageSends: []}),
smalltalk.ROAbstractLineShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROAbstractLineShape.klass)})},
messageSends: ["black"]}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
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
messageSends: ["shape:", "new", "from:to:", "yourself"]}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFrom:to:",
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
_st(self["@svgElement"])._attr_value_("stroke-width",self._width());
_st(self["@svgElement"])._attr_value_("stroke",self._rgbColor());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,maxArrowSize:maxArrowSize,unit:unit,startingPoint:startingPoint,endingPoint:endingPoint,rawStartingPoint:rawStartingPoint,rawEndingPoint:rawEndingPoint},smalltalk.ROLine)})},
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:with:", ",", "asInteger", "y", "x", "attr:value:", "width", "rgbColor"]}),
smalltalk.ROLine);



smalltalk.addClass('ROBSplineLine', smalltalk.ROLine, ['controlElements'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "addControlElement:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._controlElements())._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"addControlElement:",{anElement:anElement},smalltalk.ROBSplineLine)})},
messageSends: ["add:", "controlElements"]}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "controlElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlElements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlElements",{},smalltalk.ROBSplineLine)})},
messageSends: []}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@controlElements"]=_st($OrderedCollection())._new();
smalltalk.ROBSplineLine.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBSplineLine)})},
messageSends: ["new", "initialize"]}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
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
messageSends: ["startingPointOf:", "endingPointOf:", "x", "y", "do:", ",", "asString", "position", "path:"]}),
smalltalk.ROBSplineLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
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
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:value:", "width", "rgbColor"]}),
smalltalk.ROBSplineLine);



smalltalk.addClass('ROAbstractPathShape', smalltalk.ROShape, ['svgRect', 'svgPath'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "adaptContainerOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resizeContainerWith_(anElement);
self._centeringPathWith_(anElement);
self._createSetOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"adaptContainerOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
messageSends: ["resizeContainerWith:", "centeringPathWith:", "createSetOn:for:"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "centeringPathWith:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgPath"])._attr_value_("x",(0));
_st(self["@svgPath"])._attr_value_("y",(0));
return self}, function($ctx1) {$ctx1.fill(self,"centeringPathWith:",{anElement:anElement},smalltalk.ROAbstractPathShape)})},
messageSends: ["attr:value:"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "createSetOn:for:",
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
messageSends: ["set", "push:", "translate:y:", "x", "position", "y"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainterOn:for:",
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
messageSends: ["rect:y:width:rect:", "attr:value:"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgRect"]=self._initializeContainterOn_for_(canvas,anElement);
self["@svgPath"]=self._initializePathOn_for_(canvas,anElement);
self._adaptContainerOn_for_(canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
messageSends: ["initializeContainterOn:for:", "initializePathOn:for:", "adaptContainerOn:for:"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.ROAbstractPathShape)})},
messageSends: []}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROAbstractPathShape)})},
messageSends: ["remove"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainerWith:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainerWith:",{anElement:anElement},smalltalk.ROAbstractPathShape)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._transform_("T0,0");
_st(self["@svgElement"])._transform_(_st(_st("T".__comma(_st(_st(anElement)._position())._x())).__comma(",")).__comma(_st(_st(anElement)._position())._y()));
_st(self["@svgPath"])._attr_value_("fill",_st(self._color())._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
messageSends: ["transform:", ",", "y", "position", "x", "attr:value:", "asHTMLRGBA", "color"]}),
smalltalk.ROAbstractPathShape);



smalltalk.addClass('ROImageShape', smalltalk.ROAbstractPathShape, ['url', 'imgExtent'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "imageExtent",
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
messageSends: ["new", "src:", "url", "@", "height", "width"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROImageShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@imgExtent"]=self._imageExtent();
self["@width"]=_st(self["@imgExtent"])._x();
self["@height"]=_st(self["@imgExtent"])._y();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROImageShape)})},
messageSends: ["initialize", "imageExtent", "x", "y"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._image_x_y_width_height_(self._url(),_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self._width())._max_(_st(self._defaultExtent())._x()),_st(self._height())._max_(_st(self._defaultExtent())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROImageShape)})},
messageSends: ["image:x:y:width:height:", "url", "x", "position", "y", "max:", "defaultExtent", "width", "height"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainerWith:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgRect"];
_st($1)._attr_with_("width",_st(self._widthFor_(anElement))._max_(_st(self._defaultExtent())._x()));
$2=_st($1)._attr_with_("height",_st(self._heightFor_(anElement))._max_(_st(self._defaultExtent())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainerWith:",{anElement:anElement},smalltalk.ROImageShape)})},
messageSends: ["attr:with:", "max:", "x", "defaultExtent", "widthFor:", "y", "heightFor:"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._size_(_st(self._width()).__star(factor));
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{factor:factor},smalltalk.ROImageShape)})},
messageSends: ["size:", "*", "width"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__slash(_st(self["@imgExtent"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.ROImageShape)})},
messageSends: ["/", "x"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROImageShape.superclass.fn.prototype._updateSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
_st(self["@svgElement"])._transform_("S".__comma(_st(self._scaleFactor())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROImageShape)})},
messageSends: ["updateSVGElementOn:for:", "transform:", ",", "asString", "scaleFactor"]}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ROImageShape)})},
messageSends: []}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROImageShape)})},
messageSends: []}),
smalltalk.ROImageShape);


smalltalk.addMethod(
smalltalk.method({
selector: "url:",
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
messageSends: ["url:", "basicNew", "initialize", "yourself"]}),
smalltalk.ROImageShape.klass);


smalltalk.addClass('ROLabel', smalltalk.ROAbstractPathShape, ['text', 'textCache'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "centeringPathWith:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgPath"])._attr_value_("x",_st(_st(_st(self["@svgRect"])._attr_("width")).__slash((2)))._asInteger());
_st(self["@svgPath"])._attr_value_("y",_st(_st(_st(self["@svgRect"])._attr_("height")).__slash((2)))._asInteger());
_st(self["@svgPath"])._attr_value_("text-anchor","middle");
return self}, function($ctx1) {$ctx1.fill(self,"centeringPathWith:",{anElement:anElement},smalltalk.ROLabel)})},
messageSends: ["attr:value:", "asInteger", "/", "attr:"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"fontSize:",{aNumber:aNumber},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="model";
self["@textCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLabel)})},
messageSends: ["initialize"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainterOn:for:",
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
messageSends: ["initializeContainterOn:for:", "setBoderTo:"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._text_y_string_((0),(10),self._textFor_(anElement));
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
messageSends: ["text:y:string:", "textFor:"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=(7).__plus((2).__star((5)));
self["@width"]=_st(_st(_st(_st(anElement)._model())._asString())._size()).__star((7));
_st(anElement)._extent_(_st(self["@width"]).__at(self["@height"]));
return self}, function($ctx1) {$ctx1.fill(self,"installedOn:",{anElement:anElement},smalltalk.ROLabel)})},
messageSends: ["+", "*", "size", "asString", "model", "extent:", "@"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "modelChanged:",
fn: function (aROElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@textCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"modelChanged:",{aROElement:aROElement},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainerWith:",
fn: function (anElement){
var self=this;
var textBBox;
return smalltalk.withContext(function($ctx1) { 
textBBox=_st(self["@svgPath"])._getBBox();
_st(self["@svgRect"])._attr_value_("width",_st(_st(textBBox)._width()).__plus((5)));
_st(self["@svgRect"])._attr_value_("height",_st(_st(textBBox)._height()).__plus((5)));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainerWith:",{anElement:anElement,textBBox:textBBox},smalltalk.ROLabel)})},
messageSends: ["getBBox", "attr:value:", "+", "width", "height"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__slash(_st(self["@svgElement"])._attr_("width"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.ROLabel)})},
messageSends: ["/", "attr:"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "setBoderTo:",
fn: function (container){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(container)._attr_value_("stroke","lightGray");
_st(container)._attr_value_("stroke-width",(0));
return self}, function($ctx1) {$ctx1.fill(self,"setBoderTo:",{container:container},smalltalk.ROLabel)})},
messageSends: ["attr:value:"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "svgPath",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgPath"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgPath",{},smalltalk.ROLabel)})},
messageSends: []}),
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
fn: function (anOneArgumentBlockOrSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=anOneArgumentBlockOrSymbol;
self["@textCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{anOneArgumentBlockOrSymbol:anOneArgumentBlockOrSymbol},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textCache:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@textCache"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"textCache:",{aString:aString},smalltalk.ROLabel)})},
messageSends: []}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textFor:",
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
messageSends: ["ifNil:", "roValue:", "ifFalse:", "printString", "==", "class"]}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgPath"])._attr_value_("text",self._textFor_(anElement));
self._adaptContainerOn_for_(canvas,anElement);
smalltalk.ROLabel.superclass.fn.prototype._updateSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
messageSends: ["attr:value:", "textFor:", "adaptContainerOn:for:", "updateSVGElementOn:for:"]}),
smalltalk.ROLabel);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROLabel.klass)})},
messageSends: ["black"]}),
smalltalk.ROLabel.klass);

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


smalltalk.addClass('ROSVGPath', smalltalk.ROAbstractPathShape, ['path', 'lines', 'borderWidth', 'borderColor', 'setToAdjustElement', 'svg', 'zoom'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "adjustedElement",
fn: function (){
var self=this;
var element,topLeft;
return smalltalk.withContext(function($ctx1) { 
var $1;
element=smalltalk.ROSVGPath.superclass.fn.prototype._element.apply(_st(self), []);
topLeft=_st(self._encompassingSVGBounds())._topLeft();
_st(element)._translateBy_(topLeft);
self._offsetAllLinesBy_(topLeft);
$1=element;
return $1;
}, function($ctx1) {$ctx1.fill(self,"adjustedElement",{element:element,topLeft:topLeft},smalltalk.ROSVGPath)})},
messageSends: ["element", "topLeft", "encompassingSVGBounds", "translateBy:", "offsetAllLinesBy:"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{anInteger:anInteger},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomRightFromSVG",
fn: function (){
var self=this;
var bottomRight;
function $SmallInteger(){return smalltalk.SmallInteger||(typeof SmallInteger=="undefined"?nil:SmallInteger)}
return smalltalk.withContext(function($ctx1) { 
var $1;
bottomRight=_st(_st($SmallInteger())._minVal()).__at(_st($SmallInteger())._minVal());
_st(self._lines())._do_((function(lineAsAssoc){
return smalltalk.withContext(function($ctx2) {
bottomRight=_st(bottomRight)._max_(_st(_st(lineAsAssoc)._key())._max_(_st(lineAsAssoc)._value()));
return bottomRight;
}, function($ctx2) {$ctx2.fillBlock({lineAsAssoc:lineAsAssoc},$ctx1)})}));
$1=bottomRight;
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomRightFromSVG",{bottomRight:bottomRight},smalltalk.ROSVGPath)})},
messageSends: ["@", "minVal", "do:", "max:", "value", "key", "lines"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@color"]=aColor;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnOLD:for:",
fn: function (aCanvas,aROElement){
var self=this;
var b,w,bc,c;
return smalltalk.withContext(function($ctx1) { 
b=self._absoluteBoundsFor_(aROElement);
w=_st(self["@borderWidth"])._roValue_(aROElement);
bc=_st(self["@borderColor"])._roValue_(aROElement);
c=_st(self["@color"])._roValue_(aROElement);
_st(self._lines())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(aCanvas)._line_to_width_color_(_st(_st(assoc)._key()).__plus(_st(b)._topLeft()),_st(_st(assoc)._value()).__plus(_st(b)._topLeft()),w,bc);
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOnOLD:for:",{aCanvas:aCanvas,aROElement:aROElement,b:b,w:w,bc:bc,c:c},smalltalk.ROSVGPath)})},
messageSends: ["absoluteBoundsFor:", "roValue:", "do:", "line:to:width:color:", "+", "topLeft", "key", "value", "lines"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
var element,topLeft;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@setToAdjustElement"];
if(! smalltalk.assert($1)){
$2=smalltalk.ROSVGPath.superclass.fn.prototype._element.apply(_st(self), []);
return $2;
};
element=smalltalk.ROSVGPath.superclass.fn.prototype._element.apply(_st(self), []);
topLeft=_st(self._encompassingSVGBounds())._topLeft();
_st(element)._translateBy_(topLeft);
self._offsetAllLinesBy_(topLeft);
$3=element;
return $3;
}, function($ctx1) {$ctx1.fill(self,"element",{element:element,topLeft:topLeft},smalltalk.ROSVGPath)})},
messageSends: ["ifFalse:", "element", "topLeft", "encompassingSVGBounds", "translateBy:", "offsetAllLinesBy:"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
fn: function (anObject){
var self=this;
var element,topLeft;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@setToAdjustElement"];
if(! smalltalk.assert($1)){
$2=smalltalk.ROSVGPath.superclass.fn.prototype._elementOn_.apply(_st(self), [anObject]);
return $2;
};
element=smalltalk.ROSVGPath.superclass.fn.prototype._elementOn_.apply(_st(self), [anObject]);
topLeft=_st(self._encompassingSVGBounds())._topLeft();
_st(element)._translateBy_(topLeft);
self._offsetAllLinesBy_(topLeft);
$3=element;
return $3;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject,element:element,topLeft:topLeft},smalltalk.ROSVGPath)})},
messageSends: ["ifFalse:", "elementOn:", "topLeft", "encompassingSVGBounds", "translateBy:", "offsetAllLinesBy:"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingSVGBounds",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._topLeftFromSVG())._corner_(self._bottomRightFromSVG());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingSVGBounds",{},smalltalk.ROSVGPath)})},
messageSends: ["corner:", "bottomRightFromSVG", "topLeftFromSVG"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.ROSVGPath.superclass.fn.prototype._extentFor_.apply(_st(self), [element]))._max_(self._preferedExtentFor_(element));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.ROSVGPath)})},
messageSends: ["max:", "preferedExtentFor:", "extentFor:"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROSVGPath.superclass.fn.prototype._initialize.apply(_st(self), []);
self._path_("");
self["@borderWidth"]=(1);
self["@borderColor"]=_st($Color())._gray();
self["@setToAdjustElement"]=false;
self["@zoom"]=(1);
self["@height"]=(20);
self["@width"]=self["@height"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROSVGPath)})},
messageSends: ["initialize", "path:", "gray"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._path_(self["@path"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROSVGPath)})},
messageSends: ["path:"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@lines"])._isNil();
if(! smalltalk.assert($1)){
$2=self["@lines"];
return $2;
};
self["@lines"]=self._processPath();
$3=self["@lines"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"lines",{},smalltalk.ROSVGPath)})},
messageSends: ["ifFalse:", "isNil", "processPath"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLines",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._lines())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfLines",{},smalltalk.ROSVGPath)})},
messageSends: ["size", "lines"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetAllLinesBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lines"]=_st(self._lines())._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(assoc)._key()).__minus(aPoint)).__minus_gt(_st(_st(assoc)._value()).__minus(aPoint));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"offsetAllLinesBy:",{aPoint:aPoint},smalltalk.ROSVGPath)})},
messageSends: ["collect:", "->", "-", "value", "key", "lines"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
fn: function (aPathAsString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aPathAsString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aPathAsString:aPathAsString},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "preferedExtentFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@setToAdjustElement"];
if(smalltalk.assert($2)){
$1=_st(self._bottomRightFromSVG()).__minus(self._topLeftFromSVG());
} else {
$1=self._bottomRightFromSVG();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"preferedExtentFor:",{element:element},smalltalk.ROSVGPath)})},
messageSends: ["ifTrue:ifFalse:", "-", "topLeftFromSVG", "bottomRightFromSVG"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "processPath",
fn: function (){
var self=this;
var p,initialPoint,answer,tokens,stream,token,t,pathWithSpaceBeforeMinus;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ReadStream(){return smalltalk.ReadStream||(typeof ReadStream=="undefined"?nil:ReadStream)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
p=(0).__at((0));
initialPoint=nil;
answer=_st($OrderedCollection())._new();
pathWithSpaceBeforeMinus=_st(self["@path"])._copyReplaceAll_with_asTokens_("-"," -",false);
tokens=_st(pathWithSpaceBeforeMinus)._findTokens_keep_("MmLlZz, ","MmLlZz");
stream=_st($ReadStream())._on_(tokens);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
token=_st(stream)._next();
token;
$1=_st(token).__eq("M");
if(smalltalk.assert($1)){
p=_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next()));
p;
initialPoint=nil;
initialPoint;
};
$2=_st(token).__eq("m");
if(smalltalk.assert($2)){
p=_st(p).__plus(_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next())));
p;
initialPoint=nil;
initialPoint;
};
$3=_st(_st(token).__eq("Z"))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(token).__eq("z");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($3)){
_st(answer)._add_(_st(p).__minus_gt(initialPoint));
initialPoint=nil;
initialPoint;
};
$4=_st(token).__eq("L");
if(smalltalk.assert($4)){
t=_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next()));
t;
_st(answer)._add_(_st(p).__minus_gt(t));
p=t;
p;
};
$5=_st(token).__eq("l");
if(smalltalk.assert($5)){
t=_st(p).__plus(_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next())));
t;
_st(answer)._add_(_st(p).__minus_gt(t));
p=t;
p;
};
$6=initialPoint;
if(($receiver = $6) == nil || $receiver == undefined){
initialPoint=p;
return initialPoint;
} else {
return $6;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(answer)._asArray();
return $7;
}, function($ctx1) {$ctx1.fill(self,"processPath",{p:p,initialPoint:initialPoint,answer:answer,tokens:tokens,stream:stream,token:token,t:t,pathWithSpaceBeforeMinus:pathWithSpaceBeforeMinus},smalltalk.ROSVGPath)})},
messageSends: ["@", "new", "copyReplaceAll:with:asTokens:", "findTokens:keep:", "on:", "whileFalse:", "next", "ifTrue:", "readFrom:", "=", "+", "add:", "->", "or:", "ifNil:", "atEnd", "asArray"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainer:for:with:",
fn: function (svgRect,svgPath,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgRect)._attr_value_("width",(30));
_st(svgRect)._attr_value_("height",(33));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:with:",{svgRect:svgRect,svgPath:svgPath,anElement:anElement},smalltalk.ROSVGPath)})},
messageSends: ["attr:value:"]}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "setToAdjustElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@setToAdjustElement"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"setToAdjustElement",{},smalltalk.ROSVGPath)})},
messageSends: []}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeftFromSVG",
fn: function (){
var self=this;
var topLeft;
function $SmallInteger(){return smalltalk.SmallInteger||(typeof SmallInteger=="undefined"?nil:SmallInteger)}
return smalltalk.withContext(function($ctx1) { 
var $1;
topLeft=_st(_st($SmallInteger())._maxVal()).__at(_st($SmallInteger())._maxVal());
_st(self._lines())._do_((function(lineAsAssoc){
return smalltalk.withContext(function($ctx2) {
topLeft=_st(topLeft)._min_(_st(_st(lineAsAssoc)._key())._min_(_st(lineAsAssoc)._value()));
return topLeft;
}, function($ctx2) {$ctx2.fillBlock({lineAsAssoc:lineAsAssoc},$ctx1)})}));
$1=topLeft;
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeftFromSVG",{topLeft:topLeft},smalltalk.ROSVGPath)})},
messageSends: ["@", "maxVal", "do:", "min:", "value", "key", "lines"]}),
smalltalk.ROSVGPath);


smalltalk.addMethod(
smalltalk.method({
selector: "Afghanistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l2.832,1.030l2.059,-0.257l0.517,-1.288l2.058,-0.386l1.546,-0.772l0.515,-2.188l2.317,-0.516l0.387,-1.030l1.285,0.774l0.902,0.128l1.416,0l2.059,0.515l0.773,0.385l2.059,-0.900l0.901,0.515l0.773,-1.287l1.674,0.128l0.386,-0.387l0.256,-1.157l1.160,-0.903l1.543,0.645l-0.384,0.772l0.901,0.129l-0.259,2.317l1.030,0.900l0.904,-0.643l1.285,-0.257l1.674,-1.159l1.802,0.129l2.832,0l0.387,0.773l-1.545,0.385l-1.416,0.516l-3.090,0.256l-2.833,0.517l-1.545,1.287l0.645,1.029l0.257,1.416l-1.287,1.159l0.129,1.029l-0.773,0.902l-2.575,0l1.030,1.673l-1.673,0.772l-1.158,1.545l0.129,1.674l-1.031,0.772l-1.029,-0.257l-2.061,0.386l-0.257,0.644l-2.058,0l-1.417,1.544l-0.129,2.317l-3.476,1.159l-1.931,-0.257l-0.514,0.643l-1.674,-0.386l-2.704,0.386l-4.504,-1.415l2.445,-2.447l-0.129,-1.673l-2.060,-0.515l-0.256,-1.674l-0.902,-2.188l1.158,-1.416l-1.158,-0.386l0.773,-1.930l-1.029,3.477z";
}, function($ctx1) {$ctx1.fill(self,"Afghanistan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Albania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l-0.257,0.900l0.385,1.160l1.029,0.643l0,0.644l-0.901,0.386l-0.128,0.901l-1.288,1.287l-0.386,-0.128l-0.127,-0.644l-1.417,-0.900l-0.259,-1.288l0.259,-1.803l0.256,-0.901l-0.384,-0.386l-0.258,-0.901l1.287,-1.288l0.129,0.516l0.771,-0.258l0.516,0.773l0.643,0.257l-0.130,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Albania",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Algeria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z";
}, function($ctx1) {$ctx1.fill(self,"Algeria",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Angola",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.994,242.615l-0.643,-2.060l1.030,-1.159l0.900,-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773,-0.386zM496.836,273.64l-0.257,-1.804l0.385,-2.317l0.900,-2.445l0.130,-1.158l0.901,-2.447l0.643,-1.157l1.545,-1.674l0.902,-1.288l0.257,-1.931l-0.129,-1.544l-0.771,-0.902l-0.775,-1.673l-0.642,-1.674l0.129,-0.515l0.772,-1.029l-0.772,-2.704l-0.516,-1.802l-1.414,-1.674l0.257,-0.515l1.157,-0.387l0.774,0.131l0.900,-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801,-0.128l0.900,-0.387l1.418,0.387l0.514,-0.772l0.644,-1.545l1.673,-0.128l0.128,-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645,-0.131l1.158,0l1.674,-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536,-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566,-0.385l-1.801,-1.287l-10.944,0.128l-0.384,0.128l-1.674,-1.159l-1.672,-0.128l-1.674,0.515l1.288,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Angola",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Argentina",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.448,295.781l1.288,1.544l0,2.189l-2.319,1.416l-1.801,1.158l-2.961,2.576l-3.605,3.732l-0.772,2.189l-0.644,2.702l0,2.705l-0.643,0.643l-0.129,1.674l-0.257,1.417l3.475,2.317l-0.387,1.802l1.675,1.287l-0.129,1.288l-2.574,3.475l-3.991,1.417l-5.406,0.513l-2.961,-0.257l0.514,1.674l-0.514,1.931l0.514,1.415l-1.673,0.902l-2.703,0.385l-2.575,-1.028l-1.029,0.770l0.386,2.705l1.801,0.772l1.417,-0.901l0.901,1.416l-2.575,0.902l-2.188,1.673l-0.386,2.705l-0.643,1.414l-2.448,0l-2.188,1.416l-0.772,1.932l2.704,2.059l2.574,0.516l-0.901,2.445l-3.218,1.545l-1.803,3.090l-2.445,1.030l-1.031,1.287l0.774,2.832l1.802,1.543l-1.030,-0.127l-2.574,-0.387l-6.436,-0.385l-1.160,-1.545l0,-2.060l-1.801,0.129l-0.902,-0.902l-0.258,-2.831l2.060,-1.288l0.901,-1.674l-0.386,-1.288l1.546,-2.316l0.900,-3.605l-0.257,-1.545l1.158,-0.515l-0.258,-1.030l-1.287,-0.514l0.901,-1.158l-1.157,-1.030l-0.645,-3.089l1.030,-0.516l-0.385,-3.347l0.513,-2.703l0.773,-2.447l1.673,-1.030l-0.900,-2.574l0,-2.446l2.060,-1.802l0,-2.189l1.415,-2.702l0.129,-2.447l-0.772,-0.514l-1.287,-4.636l1.672,-2.831l-0.257,-2.575l1.030,-2.446l1.802,-2.574l1.802,-1.673l-0.772,-1.031l0.515,-0.900l0,-4.378l2.960,-1.415l0.902,-2.704l-0.386,-0.772l2.316,-2.447l3.477,0.644l1.544,2.060l1.030,-2.187l3.089,0.127l0.515,0.515l4.892,4.377l2.188,0.387l3.348,2.059l2.703,1.030l0.386,1.157l-2.574,4.121l2.702,0.772l2.961,0.387l2.189,-0.387l2.446,-2.059l0.386,-2.445l-1.416,0.516zM282.761,371.99l3.475,1.674l3.733,0.642l-1.159,1.417l-2.574,0.130l-1.416,-1.031l-1.546,0l-2.960,0l0.129,-5.923l0.901,1.160l-1.417,-1.931z";
}, function($ctx1) {$ctx1.fill(self,"Argentina",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Armenia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M582.697,116.33l3.605,-0.515l0.642,0.772l1.032,0.386l-0.516,0.773l1.416,0.900l-0.772,0.902l1.159,0.643l1.158,0.516l0.129,1.801l-1.029,0.129l-1.032,-1.544l0,-0.515l-1.287,0.129l-0.771,-0.772l-0.516,0l-1.029,-0.773l-2.059,-0.643l0.256,-1.288l0.386,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Armenia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Australia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M863.067,336.975l1.674,0.129l0.129,3.218l-0.900,0.901l-0.258,2.188l-0.900,-0.772l-1.934,1.931l-0.514,-0.129l-1.672,-0.129l-1.675,-2.316l-0.385,-1.803l-1.545,-2.318l0.127,-1.287l1.674,0.259l2.576,0.901l1.545,-0.258l-2.058,0.515zM805.011,313.803l-2.832,1.288l-2.317,0.643l-0.513,1.416l-1.034,1.159l-2.185,0l-1.803,0.256l-2.318,-0.513l-1.930,0.386l-1.930,0.127l-1.546,1.417l-0.772,-0.128l-1.416,0.772l-1.287,0.772l-1.932,-0.128l-1.800,0l-2.834,-1.674l-1.416,-0.514l0,-1.545l1.289,-0.387l0.515,-0.515l-0.131,-1.029l0.387,-1.932l-0.256,-1.545l-1.547,-2.702l-0.386,-1.546l0.129,-1.545l-1.030,-1.801l-0.127,-0.773l-1.160,-1.030l-0.387,-2.058l-1.545,-2.189l-0.384,-1.160l1.287,1.160l-1.029,-2.447l1.416,0.774l0.771,1.030l0,-1.417l-1.416,-2.061l-0.258,-0.900l-0.644,-0.773l0.386,-1.545l0.516,-0.644l0.387,-1.415l-0.258,-1.546l1.029,-1.930l0.258,2.060l1.158,-1.932l2.188,-0.900l1.287,-1.160l2.060,-0.901l1.159,-0.257l0.773,0.387l2.188,-1.029l1.544,-0.258l0.516,-0.644l0.643,-0.257l1.545,0.128l2.832,-0.901l1.418,-1.160l0.640,-1.414l1.676,-1.416l0.129,-1.030l0,-1.417l1.930,-2.318l1.158,2.318l1.031,-0.514l-0.902,-1.287l0.902,-1.287l1.156,0.516l0.260,-2.061l1.545,-1.289l0.643,-1.028l1.289,-0.516l0.127,-0.773l1.158,0.386l0,-0.643l1.158,-0.387l1.416,-0.385l1.930,1.157l1.547,1.675l1.671,0l1.676,0.258l-0.515,-1.545l1.287,-2.060l1.158,-0.772l-0.385,-0.643l1.158,-1.545l1.672,-1.031l1.289,0.385l2.317,-0.514l-0.129,-1.416l-1.932,-0.900l1.418,-0.388l1.801,0.775l1.416,1.029l2.316,0.772l0.774,-0.387l1.674,0.902l1.544,-0.773l1.030,0.258l0.644,-0.516l1.158,1.289l-0.644,1.416l-1.029,1.157l-0.903,0l0.260,1.160l-0.773,1.286l-0.901,1.289l0.127,0.772l2.190,1.545l2.058,0.900l1.418,0.902l1.930,1.544l0.771,0l1.418,0.773l0.387,0.772l2.574,0.900l1.801,-0.900l0.516,-1.416l0.513,-1.289l0.387,-1.415l0.772,-2.188l-0.385,-1.286l0.127,-0.775l-0.256,-1.542l0.387,-2.062l0.513,-0.514l-0.386,-0.901l0.644,-1.417l0.516,-1.414l0,-0.772l1.029,-1.032l0.772,1.288l0.130,1.674l0.641,0.385l0.131,1.029l1.029,1.417l0.258,1.544l-0.129,1.031l0.902,2.061l1.801,-1.031l0.903,1.158l1.285,1.031l-0.256,1.158l0.515,2.317l0.387,1.416l0.641,0.257l0.773,2.319l-0.256,1.414l0.901,1.805l2.961,1.414l1.800,1.288l1.803,1.159l-0.258,0.642l1.545,1.674l1.030,2.961l1.031,-0.642l1.158,1.286l0.643,-0.516l0.386,2.961l1.932,1.544l1.287,1.030l2.061,2.189l0.771,2.189l0.129,1.545l-0.260,1.674l1.289,2.316l-0.129,2.317l-0.515,1.287l-0.645,2.447l0,1.545l-0.513,1.930l-1.159,2.446l-2.058,1.288l-0.903,2.060l-0.900,1.415l-0.902,2.317l-1.030,1.288l-0.642,2.060l-0.387,1.802l0.129,0.900l-1.545,0.902l-2.961,0.128l-2.445,1.031l-1.287,1.030l-1.674,1.157l-2.188,-1.157l-1.675,-0.515l0.517,-1.287l-1.547,0.516l-2.316,1.929l-2.316,-0.773l-1.547,-0.385l-1.545,-0.258l-2.572,-0.772l-1.803,-1.674l-0.516,-2.060l-0.644,-1.288l-1.287,-1.157l-2.575,-0.258l0.903,-1.287l-0.645,-2.060l-1.287,1.931l-2.445,0.387l1.416,-1.416l0.386,-1.545l1.030,-1.288l-0.258,-2.059l-2.188,2.316l-1.673,0.902l-1.032,2.189l-2.058,-1.159l0.129,-1.416l-1.674,-1.932l-1.545,-1.029l0.516,-0.643l-3.348,-1.675l-1.932,0l-2.574,-1.286l-4.893,0.256l-3.474,0.902l-3.090,0.902l2.574,0.130z";
}, function($ctx1) {$ctx1.fill(self,"Australia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Austria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.996,97.278l-0.257,1.158l-1.545,0l0.643,0.643l-0.900,1.674l-0.515,0.515l-2.446,0l-1.289,0.644l-2.315,-0.258l-3.734,-0.644l-0.644,-0.900l-2.703,0.386l-0.258,0.514l-1.672,-0.386l-1.416,0l-1.160,-0.514l0.385,-0.644l-0.128,-0.515l0.903,-0.128l1.285,0.772l0.387,-0.772l2.446,0.128l1.931,-0.515l1.287,0.128l0.773,0.515l0.258,-0.386l-0.387,-1.802l1.030,-0.386l0.901,-1.158l2.058,0.772l1.417,-1.030l1.030,-0.258l2.061,0.901l1.286,-0.129l1.158,0.516l-0.127,0.256l-0.257,-0.903z";
}, function($ctx1) {$ctx1.fill(self,"Austria",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Azerbaijan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M590.292,114.27l0.643,0l1.931,1.673l1.158,0.129l0.516,-0.644l1.545,-1.030l1.416,1.417l1.417,1.802l1.286,0.129l0.774,0.773l-2.190,0.257l-0.514,2.059l-0.386,0.901l-1.031,0.644l0,1.416l-0.643,0.129l-1.674,-1.417l0.902,-1.415l-0.773,-0.773l-1.030,0.258l-3.089,1.930l-0.129,-1.801l-1.158,-0.516l-1.159,-0.643l0.772,-0.902l-1.416,-0.900l0.516,-0.773l-1.032,-0.386l-0.642,-0.772l0.129,0l0.644,-0.387l1.930,0.772l1.545,0.130l0.258,-0.258l-1.287,-1.545l-0.771,0.257zM589.521,122.637l-1.804,-0.386l-1.415,-1.288l-0.387,-1.028l0.516,0l0.771,0.772l1.287,-0.129l0,0.515l-1.032,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Azerbaijan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bangladesh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M714.901,167.564l-0.129,1.932l-0.900,-0.387l0.127,2.189l-0.771,-1.417l-0.129,-1.415l-0.514,-1.287l-1.031,-1.545l-2.575,-0.129l0.258,1.159l-0.771,1.544l-1.158,-0.644l-0.389,0.516l-0.772,-0.258l-1.029,-0.258l-0.515,-2.188l-0.901,-2.059l0.514,-1.674l-1.672,-0.643l0.514,-1.031l1.802,-1.030l-2.060,-1.415l1.031,-1.803l2.061,1.159l1.285,0.128l0.260,1.931l2.574,0.386l2.574,-0.128l1.545,0.515l-1.289,2.317l-1.158,0.129l-0.901,1.545l1.545,1.416l0.387,-1.802l0.771,0l-1.416,-4.247z";
}, function($ctx1) {$ctx1.fill(self,"Bangladesh",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belarus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M528.503,81.701l2.574,0l2.961,-0.901l0.643,-1.545l2.189,-0.901l-0.258,-1.159l1.674,-0.514l2.831,-1.031l2.833,0.644l0.387,0.772l1.416,-0.385l2.703,0.643l0.258,1.287l-0.645,0.644l1.672,1.802l1.160,0.515l-0.129,0.515l1.803,0.387l0.772,0.772l-1.030,0.643l-2.187,-0.128l-0.516,0.257l0.644,0.901l0.643,1.674l-2.318,0.129l-0.900,0.643l-0.128,1.416l-1.031,-0.258l-2.446,0.129l-0.772,-0.643l-1.030,0.386l-0.900,-0.386l-2.189,0l-2.959,-0.644l-2.706,-0.258l-2.187,0.129l-1.417,0.644l-1.286,0.129l-0.129,-1.159l-0.772,-1.287l1.672,-0.516l0,-1.029l-0.771,-1.029l0.129,1.288z";
}, function($ctx1) {$ctx1.fill(self,"Belarus",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belgium",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M474.179,88.652l1.932,0.258l2.574,-0.643l1.673,1.158l1.416,0.644l-0.258,1.930l-0.644,0l-0.385,1.544l-2.318,-1.286l-1.416,0.257l-1.801,-1.287l-1.288,-1.029l-1.287,0l-0.385,-1.031l-2.187,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Belgium",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M225.09,179.022l0,-0.387l0.257,-0.129l0.515,0.258l1.030,-1.544l0.515,-0.130l0,0.387l0.515,0.128l-0.129,0.645l-0.386,1.159l0.258,0.513l-0.258,0.902l0.128,0.258l-0.256,1.416l-0.644,0.643l-0.387,0.129l-0.643,0.901l-0.772,0l0.257,-3.089l0,2.060z";
}, function($ctx1) {$ctx1.fill(self,"Belize",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Benin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M472.505,210.174l-2.188,0.258l-0.773,-1.803l0.131,-6.307l-0.516,-0.515l-0.129,-1.287l-0.900,-0.902l-0.775,-0.900l0.259,-1.417l1.030,-0.256l0.515,-1.159l1.287,-0.257l0.645,-0.774l0.901,-0.773l0.901,-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130,-4.376z";
}, function($ctx1) {$ctx1.fill(self,"Benin",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bhutan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M712.198,152.117l1.158,0.901l-0.257,1.674l-2.188,0l-2.189,-0.129l-1.672,0.386l-2.447,-1.029l-0.129,-0.516l1.804,-1.931l1.414,-0.773l1.930,0.645l1.416,0.128l-1.160,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bhutan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bolivia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M295.89,286.383l-3.089,-0.127l-1.030,2.187l-1.544,-2.060l-3.477,-0.644l-2.316,2.447l-1.932,0.386l-1.028,-3.733l-1.417,-2.960l0.773,-2.576l-1.417,-1.157l-0.387,-1.933l-1.286,-1.932l1.673,-2.830l-1.158,-2.318l0.643,-0.901l-0.515,-1.029l1.159,-1.287l0,-2.317l0.128,-1.931l0.644,-0.901l-2.445,-4.248l2.060,0.127l1.415,0l0.515,-0.771l2.446,-1.160l1.416,-1.029l3.476,-0.386l-0.258,1.930l0.387,1.159l-0.258,1.802l2.960,2.317l2.962,0.515l1.030,1.030l1.801,0.515l1.159,0.772l1.673,0l1.545,0.773l0.128,1.544l0.516,0.773l0.128,1.158l-0.772,0l1.031,3.219l5.148,0.131l-0.386,1.542l0.258,1.030l1.416,0.771l0.643,1.676l-0.386,2.061l-0.772,1.158l0.257,1.544l-0.901,0.643l0,-0.902l-2.575,-1.285l-2.446,-0.130l-4.634,0.772l-1.416,2.447l0,1.414l-1.030,3.219l0.515,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Bolivia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BosniaandHerzegovina",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.403,106.159l1.030,0l-0.645,1.159l1.289,1.030l-0.389,1.287l-1.158,0.387l-0.900,0.515l-0.387,1.545l-2.445,-1.030l-1.031,-1.159l-0.901,-0.514l-1.286,-1.031l-0.643,-0.901l-1.290,-1.158l0.516,-1.159l1.031,0.643l0.643,-0.643l1.159,0l2.316,0.386l1.931,0l-1.160,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"BosniaandHerzegovina",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Botswana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z";
}, function($ctx1) {$ctx1.fill(self,"Botswana",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Brazil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l3.605,-3.732l2.961,-2.576l1.801,-1.158l2.319,-1.416l0,-2.189l-1.288,-1.544l-1.416,0.516l0.515,-1.546l0.386,-1.545l0,-1.544l-0.901,-0.516l-1.031,0.516l-1.028,-0.129l-0.259,-1.031l-0.256,-2.443l-0.516,-0.903l-1.801,-0.642l-1.160,0.513l-2.831,-0.513l0.128,-3.736l-0.772,-1.415l0.901,-0.643l-0.257,-1.544l0.772,-1.158l0.386,-2.061l-0.643,-1.676l-1.416,-0.771l-0.258,-1.030l0.386,-1.542l-5.148,-0.131l-1.031,-3.219l0.772,0l-0.128,-1.158l-0.516,-0.773l-0.128,-1.544l-1.545,-0.773l-1.673,0l-1.159,-0.772l-1.801,-0.515l-1.030,-1.030l-2.962,-0.515l-2.960,-2.317l0.258,-1.802l-0.387,-1.159l0.258,-1.930l-3.476,0.386l-1.416,1.029l-2.446,1.160l-0.515,0.771l-1.415,0l-2.060,-0.127l-1.416,0.384l-1.287,-0.257l0.256,-4.119l-2.317,1.545l-2.317,0l-1.030,-1.416l-1.801,-0.129l0.644,-1.158l-1.546,-1.674l-1.158,-2.445l0.772,-0.516l0,-1.158l1.545,-0.773l-0.257,-1.416l0.772,-0.901l0.129,-1.288l3.089,-1.802l2.188,-0.515l0.386,-0.514l2.446,0.129l1.159,-7.338l0.129,-1.159l-0.515,-1.544l-1.159,-1.030l0,-1.931l1.545,-0.387l0.515,0.258l0.129,-1.029l-1.545,-0.258l-0.129,-1.674l5.278,0l0.900,-0.902l0.773,0.902l0.515,1.545l0.516,-0.387l1.544,1.417l2.060,-0.129l0.515,-0.772l1.930,-0.644l1.159,-0.515l0.257,-1.159l1.931,-0.772l-0.128,-0.514l-2.188,-0.259l-0.387,-1.672l0,-1.804l-1.158,-0.643l0.514,-0.257l2.060,0.257l2.059,0.773l0.774,-0.643l1.930,-0.515l3.090,-0.902l0.900,-1.030l-0.257,-0.772l1.287,-0.129l0.644,0.643l-0.257,1.159l0.900,0.386l0.644,1.288l-0.772,0.902l-0.515,2.316l0.773,1.287l0.128,1.287l1.674,1.288l1.287,0.128l0.386,-0.515l0.772,-0.128l1.288,-0.515l0.901,-0.644l1.416,0.259l0.643,-0.130l1.546,0.130l0.257,-0.517l-0.516,-0.514l0.259,-0.773l1.158,0.259l1.159,-0.259l1.545,0.515l1.287,0.516l0.772,-0.644l0.643,0.128l0.387,0.772l1.287,-0.256l1.030,-1.031l0.772,-1.930l1.545,-2.446l1.029,-0.128l0.645,1.415l1.544,4.763l1.416,0.386l0,1.931l-1.931,2.189l0.773,0.772l4.763,0.387l0.128,2.702l2.059,-1.674l3.348,0.902l4.505,1.674l1.288,1.545l-0.387,1.545l3.090,-0.901l5.278,1.415l3.991,0l3.990,2.189l3.476,2.961l2.059,0.772l2.318,0.128l0.900,0.902l0.901,3.475l0.516,1.545l-1.159,4.505l-1.287,1.675l-3.862,3.863l-1.674,2.959l-2.059,2.317l-0.643,0.129l-0.773,1.931l0.257,5.020l-0.773,4.250l-0.256,1.672l-0.902,1.158l-0.515,3.605l-2.703,3.475l-0.387,2.833l-2.187,1.158l-0.644,1.546l-2.960,0l-4.249,1.028l-1.931,1.288l-2.960,0.773l-3.219,2.060l-2.188,2.703l-0.386,2.060l0.386,1.416l-0.515,2.703l-0.644,1.416l-1.803,1.416l-2.960,4.764l-2.446,2.189l-1.802,1.157l-1.287,2.574l-1.673,1.545l-0.772,-1.545l1.158,-1.286l-1.545,-1.804l-2.189,-1.414l-2.702,-1.805l-1.030,0.130l-2.704,-2.059l1.674,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Brazil",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BruneiDarussalam",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M772.829,214.809l1.160,-1.030l2.315,-1.416l-0.127,1.287l-0.260,1.674l-1.285,0l-0.516,0.902l1.287,1.417z";
}, function($ctx1) {$ctx1.fill(self,"BruneiDarussalam",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bulgaria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.314,107.833l0.773,1.030l1.031,-0.129l2.059,0.386l3.990,0.130l1.287,-0.644l3.219,-0.644l1.930,1.030l1.544,0.258l-1.416,1.158l-0.900,1.931l0.772,1.416l-2.317,-0.257l-2.705,0.772l0,1.417l-2.445,0.256l-1.930,-1.029l-2.187,0.773l-1.932,-0.130l-0.258,-1.674l-1.287,-0.900l0.385,-0.387l-0.256,-0.386l0.515,-0.772l1.030,-0.901l-1.415,-1.158l-0.259,-0.902l-0.772,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bulgaria",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BurkinaFaso",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z";
}, function($ctx1) {$ctx1.fill(self,"BurkinaFaso",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Burundi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M544.208,239.14l-0.130,-3.347l-0.643,-1.159l1.673,0.258l0.773,-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Burundi",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cambodia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M743.995,198.331l-1.031,-1.415l-1.416,-2.834l-0.643,-3.217l1.801,-2.189l3.475,-0.514l2.447,0.387l2.316,1.029l1.160,-1.803l2.446,0.901l0.644,1.803l-0.386,3.218l-4.506,2.059l1.160,1.674l-2.834,0.258l-2.316,1.030l2.317,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cambodia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cameroon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Cameroon",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Canada",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M212.989,24.93l-1.416,1.159l-3.862,-0.257l-3.347,-0.644l1.417,-1.288l3.990,-0.772l2.317,1.030l-0.901,-0.772zM212.474,18.107l-1.287,0.130l-5.020,-0.130l-0.772,-0.772l5.535,0l1.802,0.515l0.258,-0.257zM204.622,14.761l3.218,0.901l-0.772,1.030l-3.991,0.515l-2.188,-0.644l-1.159,-0.901l-0.257,-1.159l3.604,0.129l-1.545,-0.129zM227.793,26.604l-4.377,-0.387l-7.208,-0.900l-0.901,-1.417l-0.258,-1.287l-2.703,-1.287l-5.664,-0.257l-3.090,-0.901l1.030,-1.031l5.535,0.130l2.962,0.901l5.406,0l2.317,0.901l-0.643,1.029l3.089,0.515l1.673,0.643l3.605,0.130l3.990,0.257l4.248,-0.643l5.535,-0.129l4.377,0.129l2.832,1.029l0.644,1.159l-1.674,0.644l-3.991,0.644l-3.475,-0.387l-7.724,0.387l5.535,-0.128zM165.489,16.434l3.862,0.386l-0.902,0.901l-5.020,0.772l-3.991,-0.900l2.188,-0.901l-3.863,0.258zM166.261,14.632l3.604,0.644l-3.347,0.515l-4.505,0l0.128,-0.387l2.704,-0.901l-1.416,-0.129zM205.137,40.636l2.703,1.158l-1.673,0.902l-3.605,-1.031l-2.188,0.516l-3.090,-0.387l1.803,-1.673l1.931,-1.159l2.059,0.643l-2.060,-1.031zM315.458,88.781l-1.417,1.673l-1.802,2.317l1.802,-0.900l1.802,0.643l-1.030,0.902l2.447,0.772l1.287,-0.772l2.574,0.901l-0.772,1.930l1.931,-0.386l0.257,1.417l0.901,1.673l-1.158,2.317l-1.288,0.129l-1.673,-0.515l0.515,-2.189l-0.772,-0.386l-3.089,2.317l-1.545,0l1.801,-1.287l-2.574,-0.644l-2.832,0.130l-5.278,-0.130l-0.386,-0.772l1.674,-0.901l-1.159,-0.773l2.317,-1.673l2.702,-4.248l1.675,-1.545l2.317,-0.901l1.288,0.129l0.515,-0.772zM239.25,51.578l2.960,0.901l3.090,0.901l0.258,1.287l1.930,-0.257l1.931,0.900l-2.316,0.903l-4.249,-0.774l-1.544,-1.158l-2.575,1.416l-3.861,1.416l-0.902,-1.544l-3.733,0.257l2.317,-1.416l0.386,-2.060l0.901,-2.445l1.931,0.257l0.515,1.158l1.417,-0.514l-1.544,-0.772zM218.525,6.393l7.080,-0.643l5.278,-0.386l5.921,-0.130l3.604,-1.415l11.199,-0.773l9.656,0.129l7.723,-0.386l18.924,0.514l10.555,1.802l-6.565,1.159l-6.437,0.515l-2.445,0.644l5.792,0l-10.684,2.317l-10.169,2.704l-9.913,0.900l3.734,0.258l-1.931,0.515l2.317,1.287l-6.694,1.674l-1.287,1.159l-3.863,0.772l0.387,0.643l3.604,0.258l0,0.644l-6.049,1.158l-7.081,-0.643l-7.981,0.386l-9.012,-0.515l-0.385,-1.288l5.020,-0.643l-1.158,-0.902l2.187,-0.900l6.437,0.900l-7.981,-2.316l2.188,-1.030l4.763,-0.644l0.773,-0.901l-3.862,-1.030l-1.159,-1.416l7.338,0.129l6.437,-0.644l-15.577,-0.128l-4.762,-1.031l-5.407,-1.802l0.515,0.901zM253.024,32.01l2.574,-1.030l5.922,1.417l3.734,1.287l0.385,1.158l5.020,-0.643l2.833,1.674l6.437,1.158l2.317,1.030l2.574,2.575l-4.891,1.158l6.307,1.803l4.248,0.643l3.862,2.446l4.248,0.128l-0.773,1.932l-4.763,3.089l-3.347,-1.158l-4.248,-2.575l-3.476,0.386l-0.257,1.545l2.832,1.545l3.605,1.287l1.159,0.644l1.673,2.704l-0.902,1.930l-3.347,-0.772l-6.821,-2.061l3.862,2.318l2.702,1.545l0.516,1.030l-7.339,-1.159l-5.793,-1.545l-3.218,-1.286l0.903,-0.774l-3.991,-1.415l-3.992,-1.287l0.129,0.772l-7.853,0.386l-2.188,-0.901l1.675,-1.931l5.149,-0.129l5.535,-0.257l-0.901,-1.031l0.901,-1.287l3.475,-2.702l-0.772,-1.159l-1.030,-0.901l-4.120,-1.288l-5.406,-0.901l1.674,-0.772l-2.832,-1.674l-2.317,-0.129l-2.189,-0.900l-1.416,0.772l-4.891,0.385l-9.784,-0.643l-5.664,-0.772l-4.377,-0.386l-2.317,-0.901l2.832,-1.287l-3.862,0l-0.772,-2.704l2.059,-2.446l2.704,-1.030l6.951,-0.772l-1.931,1.802l2.188,1.674l2.447,-2.189l6.823,-1.159l4.633,2.832l-0.386,1.675l-5.278,0.774zM210.672,27.248l5.536,0.128l5.148,0.645l-3.989,2.445l-3.219,0.514l-2.833,1.932l-3.088,-0.128l-1.675,-2.318l0,-1.287l1.417,-1.158l-2.703,0.773zM206.552,9.869l1.931,-0.901l2.704,-0.128l-1.159,-0.644l6.308,-0.129l3.348,1.416l8.753,1.673l5.664,2.060l-3.733,0.772l-5.021,2.060l-4.763,0.258l-5.535,-0.386l-2.961,-1.031l0.129,-1.030l2.059,-0.772l-4.891,0.129l-2.961,-0.902l-1.673,-1.287l-1.801,1.158zM194.71,31.109l-2.832,-2.574l2.961,-0.514l3.218,0.643l4.119,-0.258l0.515,1.030l-1.544,0.901l3.604,1.803l-0.644,1.416l-3.862,1.415l-2.574,-0.257l-1.803,-1.030l-5.535,-1.544l-1.673,-1.160l-6.050,-0.129zM178.233,30.08l3.089,1.158l1.674,2.574l0.772,1.932l4.634,1.287l4.764,1.287l-0.258,1.159l-4.377,0.257l1.673,1.030l-0.900,1.030l-6.436,0l-1.804,-0.644l-4.376,-0.386l-5.278,1.545l-6.565,0.644l-3.604,0.128l-2.704,-2.059l-6.050,-0.386l-4.505,-1.674l2.960,-0.772l4.119,-0.386l3.863,0.129l3.475,-0.516l-5.149,-0.644l-5.793,0.258l-3.862,-0.129l-1.416,-0.901l6.308,-1.159l-4.249,0.129l-4.634,-0.772l2.189,-2.059l1.932,-1.031l7.208,-1.673l2.703,0.515l-1.287,1.287l5.922,-0.772l3.861,1.287l2.961,-1.287l2.446,0.901l2.189,2.574l1.416,-1.157l-1.932,-2.704l2.446,-0.387l-2.575,-0.387zM174.757,22.613l2.446,-0.385l2.832,0.128l0.385,1.287l-1.543,1.287l-9.141,0.387l-6.822,1.159l-4.120,0.128l-0.257,-0.901l5.535,-1.159l-12.228,0.257l-3.734,-0.514l3.734,-2.575l2.445,-0.772l7.596,0.901l4.891,1.673l4.634,0.129l-3.862,-2.574l2.446,-1.030l1.803,0.643l0.900,1.287l-2.060,-0.644zM134.336,21.969l4.506,-2.059l5.535,-1.803l4.120,0.130l3.732,-0.387l-0.385,2.060l-2.060,0.901l-2.575,0.129l-5.020,1.158l-4.248,0.386l3.605,0.515zM137.812,26.476l3.862,0.514l6.823,0.129l2.703,0.772l2.832,1.158l-3.347,0.644l-6.694,1.674l-3.991,2.060l-0.643,1.287l-5.664,1.287l-1.802,-1.030l-5.922,-1.544l0.129,-0.902l2.188,-2.317l2.060,-1.159l-1.673,-2.188l-9.139,0.385zM107.69,81.443l2.574,-0.256l-0.773,3.088l2.318,2.188l-1.030,0l-1.674,-1.287l-0.900,-1.287l-1.416,-0.772l-0.516,-1.158l0.130,-0.902l-1.287,-0.386zM199.73,20.682l1.288,0.901l0,1.417l-1.416,1.801l-3.218,0.387l-2.961,-0.387l0.129,-1.545l-4.507,0.130l-0.128,-2.060l2.961,0.129l3.990,-0.901l-3.862,-0.128zM181.064,13.344l5.279,0.387l7.337,0.901l2.060,1.288l1.030,1.158l-4.377,-0.258l-4.506,-0.900l-5.922,-0.129l2.576,-0.773l-3.348,-0.644l0.129,1.030zM127.385,92.386l1.288,1.287l2.702,1.158l1.160,1.416l-1.417,0.387l-4.376,-1.159l-0.773,-1.029l-2.446,-0.903l-0.515,-0.772l-2.703,-0.514l-1.030,-1.416l0.129,-0.643l2.832,0.643l1.673,0.386l2.575,0.257l-0.901,-0.902zM315.071,83.502l0.129,2.961l-1.931,1.031l-1.932,0.901l-4.376,1.030l-3.476,2.188l-4.505,0.386l-5.793,-0.515l-3.990,0l-2.832,0.129l-2.318,1.930l-3.346,1.288l-3.863,3.476l-3.089,2.575l2.189,-0.515l4.376,-3.476l5.664,-2.317l3.991,-0.257l2.445,1.286l-2.573,1.932l0.772,2.832l0.901,2.060l3.476,1.287l4.504,-0.387l2.704,-2.960l0.258,1.931l1.673,1.029l-3.347,1.674l-5.921,1.674l-2.703,1.029l-2.961,1.931l-2.060,-0.128l-0.128,-2.317l4.633,-2.189l-4.247,0l-2.961,0.387l-1.803,-1.545l0,-3.605l-1.157,-0.772l-1.804,0.386l-0.900,-0.644l-2.060,1.932l-0.901,2.187l-0.902,1.159l-1.158,0.515l-0.901,0l-0.258,0.772l-4.891,0l-4.120,0l-1.287,0.516l-2.703,1.801l-0.387,0.258l-0.256,0.258l-0.387,0.386l-0.257,0.515l-0.643,0l-0.516,0l-0.901,0l-0.772,-0.128l-0.902,0l-0.643,0l-0.772,0.128l-0.258,0l-0.515,0.257l-0.386,0.129l0.257,0.386l0,0.129l0.387,0.772l0,0.258l0,0.128l-0.258,0.130l-0.386,0.128l-0.772,0.258l-0.902,0.257l-0.643,0.257l-0.643,0.258l-0.644,0.129l-0.128,0l-0.387,0l-0.900,0.128l-0.645,0.129l-0.644,0.258l-0.643,0.385l-0.644,0.258l-0.644,0.257l-0.643,0.258l-0.644,0l-0.514,-0.129l-0.387,-0.257l-0.257,-0.257l0,-0.130l0,-0.257l0.644,-0.900l1.286,-1.546l0,-0.128l0,-0.129l0.259,-0.515l0.385,-0.515l0.129,-0.258l-0.258,-0.772l-0.129,-0.515l0,-0.386l-0.127,-0.515l-0.130,-0.515l-0.129,-0.515l-0.128,-0.386l-0.130,-0.515l0,-0.257l-0.128,-0.387l-0.515,-0.386l-0.514,-0.128l-0.644,-0.258l-0.643,-0.257l-0.516,-0.257l0.386,-0.515l0,-0.129l-0.128,0l-0.258,-0.258l-0.128,0l-0.258,0.128l-0.386,-0.128l-0.258,-0.129l-0.128,0l-0.129,-0.257l-0.129,0l0,-0.258l0,-0.128l0,-0.129l0,-0.129l-0.257,0l-0.258,0.258l-0.772,0l0.128,-0.258l-0.257,0l-0.386,-0.257l-0.128,-0.387l-0.130,-0.386l-0.514,-0.257l-0.515,-0.129l-0.515,-0.258l-0.515,-0.257l-0.515,-0.128l-0.515,-0.258l-0.515,-0.258l-0.514,-0.128l-0.258,-0.128l-0.387,-0.130l-0.643,-0.257l-0.772,-0.386l-0.772,-0.258l-0.773,-0.257l-0.386,-0.257l-0.258,0l-0.386,-0.258l-0.644,-0.129l-0.643,0.129l-0.772,0.258l-0.387,0.128l-0.386,0.129l-0.258,0.129l-0.515,0l-0.385,0l-3.219,-0.773l-2.188,0.387l-2.703,-0.773l-2.704,-0.515l-1.930,-0.129l-0.772,-0.514l-0.516,-1.417l-0.901,0l0,1.030l-5.536,0l-9.139,0l-9.397,0l-32.182,0l-2.704,0l-15.962,0l-5.149,-2.574l-1.931,-1.287l-4.891,-1.030l-1.545,-2.446l0.385,-1.673l-3.474,-1.031l-0.387,-2.188l-3.348,-2.061l0,-1.287l1.417,-1.287l0,-1.802l-4.634,-1.673l-2.703,-3.090l-1.674,-1.930l-2.446,-1.159l-1.802,-1.159l-1.545,-1.417l-2.703,0.902l-2.575,1.545l-2.445,-1.803l-1.802,-1.157l-2.704,-0.774l-2.574,0l0,-15.446l0,-9.913l5.019,0.644l4.249,1.286l2.832,0.258l2.317,-1.158l3.347,-0.901l3.990,0.385l3.992,-1.157l4.376,-0.644l1.931,1.029l1.931,-0.644l0.643,-1.158l1.803,0.257l4.634,2.447l3.604,-1.931l0.387,2.059l3.218,-0.387l1.029,-0.772l3.219,0.129l4.120,1.159l6.307,0.901l3.733,0.515l2.704,-0.129l3.604,1.288l-3.734,1.415l4.763,0.515l7.338,-0.257l2.317,-0.515l2.832,1.544l2.960,-1.287l-2.832,-1.158l1.803,-0.901l3.218,-0.129l2.189,-0.258l2.188,0.644l2.703,1.417l2.961,-0.258l4.763,1.287l4.248,-0.386l3.862,0l-0.258,-1.673l2.446,-0.515l4.120,0.900l0,2.576l1.673,-2.060l2.188,0l1.288,-2.704l-2.962,-1.673l-3.088,-1.030l0.128,-2.961l3.218,-2.060l3.605,0.515l2.703,1.158l3.604,3.091l-2.317,1.287l5.020,0.514l0,2.832l3.605,-2.189l3.218,1.804l-0.900,1.930l2.702,1.802l2.704,-1.931l2.060,-2.317l0.129,-2.960l3.861,0.257l3.862,0.387l3.733,1.287l0.128,1.416l-2.059,1.416l1.931,1.416l-0.386,1.286l-5.277,1.932l-3.734,0.386l-2.704,-0.772l-0.901,1.287l-2.574,2.317l-0.773,1.159l-3.089,1.802l-3.862,0.257l-2.188,1.031l-0.130,1.802l-3.089,0.386l-3.347,2.188l-2.961,2.961l-1.028,2.188l-0.130,3.090l3.991,0.386l1.159,2.576l1.287,2.059l3.733,-0.515l5.020,1.159l2.704,1.029l1.930,1.288l3.347,0.643l2.832,1.158l4.507,0.129l2.959,0.258l-0.514,2.446l0.901,2.702l1.931,2.961l3.991,2.576l2.059,-0.902l1.545,-2.703l-1.416,-4.247l-1.931,-1.545l4.247,-1.159l3.090,-1.931l1.545,-1.931l-0.257,-1.803l-1.802,-2.188l-3.348,-2.060l3.219,-2.832l-1.158,-2.445l-0.902,-4.249l1.931,-0.514l4.506,0.643l2.832,0.257l2.188,-0.644l2.575,0.902l3.347,1.545l0.772,1.029l4.763,0.259l0,2.187l0.901,3.476l2.446,0.386l1.931,1.545l3.862,-1.416l2.574,-2.961l1.802,-1.287l2.060,2.446l3.605,3.347l2.960,3.218l-1.159,1.802l3.604,1.417l2.446,1.545l4.249,0.772l1.802,0.772l1.030,2.317l2.060,0.387l-1.158,-1.028z";
}, function($ctx1) {$ctx1.fill(self,"Canada",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CentralAfricanRepublic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z";
}, function($ctx1) {$ctx1.fill(self,"CentralAfricanRepublic",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z";
}, function($ctx1) {$ctx1.fill(self,"Chad",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M266.669,369.286l-3.347,-1.544l-0.772,-1.675l0.644,-1.544l-1.288,-1.802l-0.386,-4.634l1.158,-2.574l2.832,-2.061l-3.990,-0.772l2.445,-2.446l1.030,-4.505l2.962,1.031l1.416,-5.666l-1.802,-0.642l-0.902,3.345l-1.674,-0.386l0.902,-3.862l0.901,-5.020l1.159,-1.801l-0.773,-2.576l-0.129,-3.090l1.030,-0.128l1.673,-4.249l1.932,-4.376l1.158,-3.991l-0.643,-3.990l0.772,-2.317l-0.387,-3.347l1.674,-3.218l0.386,-5.278l0.901,-5.535l0.902,-6.051l-0.259,-4.378l-0.513,-3.862l1.415,-0.644l0.644,-1.417l1.286,1.932l0.387,1.933l1.417,1.157l-0.773,2.576l1.417,2.960l1.028,3.733l1.932,-0.386l0.386,0.772l-0.902,2.704l-2.960,1.415l0,4.378l-0.515,0.900l0.772,1.031l-1.802,1.673l-1.802,2.574l-1.030,2.446l0.257,2.575l-1.672,2.831l1.287,4.636l0.772,0.514l-0.129,2.447l-1.415,2.702l0,2.189l-2.060,1.802l0,2.446l0.900,2.574l-1.673,1.030l-0.773,2.447l-0.513,2.703l0.385,3.347l-1.030,0.516l0.645,3.089l1.157,1.030l-0.901,1.158l1.287,0.514l0.258,1.030l-1.158,0.515l0.257,1.545l-0.900,3.605l-1.546,2.316l0.386,1.288l-0.901,1.674l-2.060,1.288l0.258,2.831l0.902,0.902l1.801,-0.129l0,2.060l1.160,1.545l6.436,0.385l2.574,0.387l-2.446,0l-1.288,0.643l-2.444,1.029l-0.387,2.447l-1.159,0.129l-3.090,-0.902l3.089,1.931zM283.274,374.822l1.546,0l-0.902,1.157l-2.316,0.774l-1.288,0l-1.544,-0.256l-1.932,-0.774l-2.831,-0.386l-3.476,-1.545l-2.704,-1.416l-3.732,-3.090l2.188,0.645l3.862,1.802l3.476,0.901l1.416,-1.159l0.901,-1.932l2.445,-1.029l1.931,0.258l0.129,0.127l-0.129,5.923l-2.960,0z";
}, function($ctx1) {$ctx1.fill(self,"Chile",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "China",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M760.085,177.992l-2.188,-0.902l0,-2.317l1.288,-1.158l2.961,-0.773l1.544,0l0.645,1.031l-1.289,1.287l-0.514,1.545l2.447,-1.287zM712.198,152.117l-1.160,-0.644l-1.416,-0.128l-1.930,-0.645l-1.414,0.773l-1.804,1.931l-0.258,-2.059l-1.543,0.514l-3.221,-0.257l-2.959,-0.644l-2.189,-1.158l-2.188,-0.515l-0.900,-1.288l-1.545,-0.386l-2.703,-1.802l-2.061,-0.772l-1.158,0.643l-3.732,-1.930l-2.704,-1.674l-0.773,-2.960l1.932,0.385l0.129,-1.416l-1.030,-1.416l0.256,-2.189l-2.961,-3.089l-4.375,-1.159l-0.773,-2.059l-2.059,-1.287l-0.387,-0.773l-0.515,-1.416l0.129,-1.158l-1.674,-0.515l-0.772,0.256l-0.773,-2.573l0.773,-0.516l-0.386,-0.643l2.574,-1.288l1.930,-0.514l2.834,0.257l1.029,-1.673l3.476,-0.258l0.901,-1.158l4.248,-1.416l0.387,-0.644l-0.260,-1.545l1.931,-0.643l-2.445,-4.635l5.279,-1.159l1.415,-0.514l1.931,-4.892l5.408,0.901l1.416,-1.288l0.127,-2.704l2.317,-0.128l2.060,-1.801l1.030,-0.258l0.644,1.802l2.317,1.545l3.863,0.901l1.803,2.188l-1.032,3.219l1.032,1.158l3.216,0.387l3.606,0.385l3.217,1.674l1.673,0.386l1.159,2.446l1.672,1.545l2.962,0l5.536,0.644l3.605,-0.386l2.701,0.386l3.862,1.673l3.347,0l1.160,0.773l3.090,-1.416l4.375,-0.902l4.121,-0.128l3.088,-1.030l1.932,-1.416l1.931,-0.902l-0.515,-0.900l-0.774,-1.030l1.416,-1.674l1.416,0.257l2.832,0.516l2.704,-1.417l4.119,-1.029l1.931,-1.803l1.932,-0.772l3.861,-0.386l2.190,0.258l0.258,-0.902l-2.448,-1.931l-2.189,-0.772l-2.059,0.901l-2.701,-0.386l-1.420,0.386l-0.771,-1.158l1.931,-2.704l1.287,-1.931l3.219,0.900l3.862,-1.672l0,-1.159l2.447,-2.832l1.414,-0.901l0,-1.416l-1.545,-0.644l2.316,-1.417l3.350,-0.513l3.475,0l4.119,0.772l2.316,1.030l1.674,2.703l1.031,1.158l0.901,1.674l1.029,2.574l4.635,0.902l3.218,1.930l1.159,2.447l3.990,0l2.447,-1.030l4.375,-0.774l-1.414,2.448l-1.031,1.029l-0.901,2.832l-1.802,2.704l-3.346,-0.516l-2.318,0.901l0.771,2.317l-0.385,3.219l-1.416,0.129l0,1.288l-1.674,-1.546l-1.029,1.546l-4.248,1.157l0.387,1.417l-2.319,-0.130l-1.287,-0.900l-1.802,1.930l-2.961,1.546l-2.190,1.673l-3.732,0.772l-2.059,1.288l-2.832,0.772l1.416,-1.288l-0.513,-1.028l2.058,-1.803l-1.418,-1.417l-2.314,0.902l-3.090,1.931l-1.674,1.673l-2.576,0.129l-1.414,1.287l1.414,1.802l2.189,0.387l0.129,1.287l2.061,0.773l3.088,-1.931l2.447,1.029l1.672,0.129l0.387,1.416l-3.733,0.772l-1.287,1.416l-2.574,1.288l-1.418,1.931l2.834,1.417l1.158,2.702l1.545,2.446l1.930,2.060l-0.129,2.059l-1.674,0.773l0.644,1.416l1.545,0.773l-0.386,2.187l-0.643,2.189l-1.545,0.258l-1.932,2.832l-2.189,3.604l-2.443,3.219l-3.735,2.446l-3.732,2.317l-3.090,0.258l-1.674,1.157l-0.900,-0.772l-1.545,1.287l-3.733,1.416l-2.832,0.386l-0.900,2.833l-1.547,0.129l-0.642,-1.931l0.642,-1.031l-3.605,-0.900l-1.285,0.387l-2.704,-0.645l-1.289,-1.029l0.387,-1.545l-2.445,-0.515l-1.287,-1.030l-2.317,1.416l-2.576,0.257l-2.187,0l-1.416,0.644l-1.416,0.386l0.386,3.089l-1.418,0l-0.256,-0.643l-0.128,-1.158l-1.930,0.773l-1.160,-0.387l-2.059,-1.030l0.772,-2.317l-1.674,-0.515l-0.645,-2.446l-2.832,0.386l0.387,-3.089l2.445,-2.318l0.131,-2.188l0,-2.060l-1.289,-0.644l-0.900,-1.545l-1.545,0.130l-2.832,-0.386l0.900,-1.159l-1.285,-1.674l-1.934,1.158l-2.314,-0.643l-3.092,1.674l-2.445,2.059l2.188,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"China",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Colombia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M262.164,227.425l-1.159,-0.644l-1.287,-0.901l-0.772,0.386l-2.318,-0.386l-0.643,-1.157l-0.515,0.127l-2.704,-1.544l-0.386,-0.902l1.031,-0.129l-0.130,-1.416l0.644,-1.029l1.417,-0.129l1.029,-1.674l1.030,-1.416l-0.901,-0.644l0.515,-1.545l-0.644,-2.445l0.515,-0.772l-0.386,-2.318l-1.030,-1.416l0.258,-1.287l0.900,0.257l0.515,-0.901l-0.643,-1.544l0.386,-0.387l1.416,0.129l1.931,-1.931l1.158,-0.258l0,-0.901l0.515,-2.317l1.545,-1.158l1.674,-0.128l0.257,-0.516l2.059,0.257l2.189,-1.415l1.029,-0.644l1.288,-1.288l0.901,0.258l0.773,0.644l-0.516,0.901l-1.802,0.514l-0.644,1.289l-1.029,0.771l-0.772,1.030l-0.387,1.931l-0.772,1.545l1.415,0.129l0.387,1.287l0.644,0.645l0.128,1.028l-0.257,1.030l0,0.516l0.772,0.257l0.644,0.901l3.475,-0.258l1.546,0.387l1.802,2.317l1.158,-0.258l1.931,0.129l1.545,-0.386l0.902,0.515l-0.517,1.416l-0.513,0.901l-0.259,1.931l0.516,1.802l0.773,0.772l0.127,0.644l-1.416,1.287l1.031,0.644l0.772,0.901l0.773,2.703l-0.516,0.387l-0.515,-1.545l-0.773,-0.902l-0.900,0.902l-5.278,0l0.129,1.674l1.545,0.258l-0.129,1.029l-0.515,-0.258l-1.545,0.387l0,1.931l1.159,1.030l0.515,1.544l-0.129,1.159l-1.159,7.338l-1.416,-1.417l-0.772,0l1.802,-2.704l-2.060,-1.287l-1.673,0.259l-1.030,-0.516l-1.416,0.644l-2.060,-0.257l-1.544,-2.832l-1.288,-0.644l-0.772,-1.287l-1.802,-1.288l0.772,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Colombia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Congo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Congo",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CostaRica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M241.695,204.768l-1.415,-0.515l-0.515,-0.644l0.257,-0.386l-0.128,-0.644l-0.644,-0.643l-1.159,-0.514l-0.901,-0.387l-0.128,-0.773l-0.773,-0.515l0.257,0.901l-0.643,0.644l-0.515,-0.772l-0.901,-0.258l-0.386,-0.644l0,-0.772l0.386,-0.901l-0.772,-0.257l0.644,-0.643l0.386,-0.259l1.801,0.644l0.644,-0.257l0.773,0.128l0.515,0.644l0.772,0.128l0.644,-0.514l0.644,1.416l1.029,1.030l1.287,1.157l-1.029,0.260l0,1.157l0.514,0.387l-0.385,0.257l0.128,0.515l-0.257,0.515l0.130,-0.515z";
}, function($ctx1) {$ctx1.fill(self,"CostaRica",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Croatia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,103.327l0.643,1.031l0.773,0.772l-1.030,1.029l-1.160,-0.643l-1.931,0l-2.316,-0.386l-1.159,0l-0.643,0.643l-1.031,-0.643l-0.516,1.159l1.290,1.158l0.643,0.901l1.286,1.031l0.901,0.514l1.031,1.159l2.445,1.030l-0.258,0.514l-2.572,-1.030l-1.547,-1.029l-2.444,-0.773l-2.318,-1.931l0.514,-0.257l-1.157,-1.159l-0.130,-0.901l-1.674,-0.386l-0.898,1.159l-0.774,-0.901l0.128,-0.902l0.129,-0.128l1.802,0.128l0.516,-0.386l0.901,0.386l1.030,0l0,-0.772l0.901,-0.257l0.255,-1.030l2.190,-0.773l0.902,0.386l1.930,1.159l2.316,0.515l-1.032,0.387zM502.372,101.654l2.315,0.258l1.289,-0.644l2.446,0l0.515,-0.515l0.385,0l0.515,0.901l-2.190,0.773l-0.255,1.030l-0.901,0.257l0,0.772l-1.030,0l-0.901,-0.386l-0.516,0.386l-1.802,-0.128l0.517,-0.258l-0.646,-1.029l-0.259,1.417z";
}, function($ctx1) {$ctx1.fill(self,"Croatia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cuba",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M243.626,164.475l2.318,0.257l2.059,0l2.576,0.902l1.028,1.030l2.576,-0.387l0.900,0.644l2.318,1.673l1.673,1.287l0.901,-0.128l1.545,0.644l-0.129,0.772l1.931,0l2.060,1.159l-0.257,0.644l-1.803,0.385l-1.802,0.129l-1.931,-0.257l-3.861,0.257l1.801,-1.544l-1.029,-0.644l-1.802,-0.258l-0.902,-0.772l-0.643,-1.415l-1.546,0l-2.445,-0.645l-0.772,-0.644l-3.604,-0.385l-0.902,-0.515l1.030,-0.644l-2.704,-0.128l-1.930,1.416l-1.030,0l-0.386,0.643l-1.417,0.257l-1.158,-0.257l1.417,-0.772l0.643,-1.030l1.159,-0.515l1.415,-0.515l2.059,-0.257l-0.644,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cuba",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cyprus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.694,132.549l0.129,0.259l-2.704,1.028l-1.417,-0.385l-0.514,-1.030l1.159,-0.129l0.258,0.129l0.127,0l0.130,0l0.257,0l0.257,-0.129l0.260,-0.128l0.127,0.128l0.258,0l0.128,0l0.128,0l0.130,0.129l0,0.258l0.129,-0.130l0.257,0.130l0.128,0l0.131,-0.130l0.128,0l0.128,0l0.129,-0.128l0.128,0l-0.129,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Cyprus",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CzechRepubilc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.866,96.119l-1.158,-0.516l-1.286,0.129l-2.061,-0.901l-1.030,0.258l-1.417,1.030l-2.058,-0.772l-1.544,-1.159l-1.288,-0.645l-0.386,-1.157l-0.387,-0.773l1.932,-0.643l1.029,-0.644l1.932,-0.515l0.642,-0.516l0.645,0.259l1.287,-0.259l1.287,0.903l1.932,0.256l-0.129,0.645l1.414,0.644l0.517,-0.773l1.802,0.386l0.257,0.772l1.930,0.129l1.289,1.416l-0.774,0l-0.385,0.515l-0.644,0l-0.256,0.643l-0.517,0.129l0,0.257l-0.900,0.258l-1.288,0l0.387,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"CzechRepubilc",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DemocraticRepublicCongo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"DemocraticRepublicCongo",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Denmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.21,78.87l-1.159,-1.417l0,-2.832l0.387,-0.644l0.772,-0.901l2.447,-0.130l0.900,-0.772l2.188,-0.771l-0.128,1.415l-0.772,0.902l0.385,0.772l1.417,0.386l-0.644,1.029l-0.773,-0.257l-2.060,1.932l0.775,1.288l-1.675,0.385l2.060,0.385zM498.509,75.779l0.900,1.416l-1.545,2.188l-2.831,-1.544l-0.386,-1.158l-3.862,0.902z";
}, function($ctx1) {$ctx1.fill(self,"Denmark",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Djibouti",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z";
}, function($ctx1) {$ctx1.fill(self,"Djibouti",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DominicanRepublic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M272.075,173.873l0.259,-0.516l2.187,0l1.545,0.772l0.772,-0.128l0.387,1.030l1.545,-0.129l-0.129,0.901l1.288,0l1.286,1.030l-1.030,1.159l-1.287,-0.644l-1.287,0.129l-0.773,-0.129l-0.514,0.515l-1.030,0.129l-0.387,-0.644l-0.900,0.386l-1.159,1.803l-0.643,-0.387l-0.130,-0.772l0,-0.773l-0.643,-0.772l0.643,-0.515l0.259,-1.029l0.259,1.416z";
}, function($ctx1) {$ctx1.fill(self,"DominicanRepublic",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ecuador",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M248.905,236.179l1.415,-2.060l-0.514,-1.159l-1.031,1.288l-1.672,-1.160l0.515,-0.772l-0.387,-2.445l0.901,-0.516l0.515,-1.673l1.030,-1.674l-0.258,-1.158l1.545,-0.514l1.802,-1.030l2.704,1.544l0.515,-0.127l0.643,1.157l2.318,0.386l0.772,-0.386l1.287,0.901l1.159,0.644l0.386,2.059l-0.772,1.674l-2.961,2.832l-3.219,1.030l-1.673,2.446l-0.514,1.802l-1.545,1.030l-1.159,-1.286l-1.030,-0.388l-1.159,0.257l0,-1.029l0.773,-0.643l0.386,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Ecuador",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Egypt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M559.269,147.483l-0.774,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901,-0.901l-1.159,-1.158l-1.930,-3.862l-0.258,0.258l1.159,2.831l1.545,2.703l2.059,4.119l1.030,1.545l0.903,1.545l2.316,2.961l-0.517,0.386l0.130,1.802l3.089,2.447l0.259,0.514l-10.299,0l-10.556,0l-10.813,0l0,-9.912l0,-9.526l-0.901,-2.189l0.772,-1.673l-0.387,-1.159l0.903,-1.287l3.603,0l2.575,0.644l2.705,0.773l1.287,0.514l2.058,-0.901l1.030,-0.772l2.447,-0.258l1.930,0.386l0.642,1.287l0.647,-0.900l2.186,0.644l2.061,0.128l1.415,-0.644l-1.674,-4.635z";
}, function($ctx1) {$ctx1.fill(self,"Egypt",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ElSalvador",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M228.694,190.865l-0.257,0.645l-1.545,0l-1.030,-0.259l-1.029,-0.515l-1.545,-0.129l-0.772,-0.644l0.128,-0.385l0.901,-0.644l0.515,-0.385l-0.129,-0.258l0.644,-0.129l0.772,0.129l0.515,0.643l0.902,0.386l0,0.386l1.287,-0.386l0.515,0.258l0.386,0.256l0.258,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"ElSalvador",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "EquatorialGuinea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"EquatorialGuinea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Eritrea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z";
}, function($ctx1) {$ctx1.fill(self,"Eritrea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Estonia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M530.69,71.273l0.387,-1.544l-1.029,0.257l-1.674,-0.900l-0.256,-1.545l3.344,-0.773l3.477,-0.386l2.833,0.515l2.831,-0.129l0.386,0.515l-1.930,1.544l0.900,2.446l-1.158,0.901l-2.318,0l-2.316,-1.028l-1.158,-0.387l2.319,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Estonia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ethiopia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Ethiopia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FalklandIslandsMalvinas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M302.584,365.296l-0.129,1.159l-1.03,1.416l2.188-1.031l1.158-1.286L302.584,365.296zM307.733,365.037l1.159,0.388l-0.902,1.415l-2.188,0.772l-0.257-0.9l1.288-1.416L307.733,365.037z";
}, function($ctx1) {$ctx1.fill(self,"FalklandIslandsMalvinas",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Fiji",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M946.097,274.154l0.773,-0.514l0.901,0.772l-0.516,1.416l-1.672,0.385l-1.418,-0.256l-0.256,-1.289l1.029,-0.900l-1.159,-0.386zM950.089,271.579l-1.160,0.773l-1.545,0.644l-0.385,-1.287l1.031,-1.030l0.899,-0.130l1.160,-0.256l-0.001,0l0.515,-0.129l-0.387,1.287l-0.128,0.128l-0.001,0z";
}, function($ctx1) {$ctx1.fill(self,"Fiji",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Finland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M542.276,40.893l-0.384,1.932l4.119,1.801l-2.448,2.060l3.089,2.960l-1.801,2.318l2.445,2.060l-1.157,1.802l3.991,1.802l-1.030,1.416l-2.448,1.545l-5.792,3.347l-4.890,0.257l-4.764,1.030l-4.377,0.515l-1.545,-1.416l-2.574,-0.901l0.514,-2.704l-1.286,-2.445l1.286,-1.545l2.447,-1.673l6.180,-2.961l1.800,-0.515l-0.256,-1.159l-3.734,-1.286l-0.901,-1.031l-0.128,-4.120l-4.250,-1.801l-3.475,-1.417l1.545,-0.643l2.961,1.416l3.606,-0.129l2.832,0.644l2.572,-1.159l1.289,-2.060l4.247,-0.900l3.476,1.157l1.159,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Finland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "France",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.903,93.673l1.287,0.773l3.861,0.514l-1.416,1.802l-0.257,1.931l-0.772,0.515l-1.288,-0.257l0.130,0.644l-1.932,1.545l0,1.158l1.288,-0.386l0.901,1.159l-0.128,0.772l0.772,1.029l-0.901,0.774l0.642,2.058l1.418,0.386l-0.258,1.160l-2.446,1.544l-5.277,-0.772l-3.992,0.901l-0.257,1.673l-3.090,0.258l-3.089,-1.158l-0.901,0.514l-5.021,-1.158l-1.029,-1.030l1.416,-1.674l0.515,-5.277l-2.832,-2.833l-2.060,-1.415l-3.991,-1.031l-0.386,-1.931l3.604,-0.644l4.506,0.773l-0.901,-3.090l2.575,1.159l6.306,-2.060l0.775,-2.317l2.317,-0.515l0.385,1.031l1.287,0l1.288,1.029l1.801,1.287l1.416,-0.257l2.318,1.286l0.643,0.259l-0.773,0.129zM488.854,112.082l1.674,-1.030l0.514,2.317l-0.899,2.188l-1.289,-0.643l-0.644,-1.803l-0.644,1.029z";
}, function($ctx1) {$ctx1.fill(self,"France",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FrenchGuyana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.834,211.463l0.902,0.256l2.058,0.644l2.833,2.317l0.386,1.159l-1.545,2.446l-0.772,1.930l-1.030,1.031l-1.287,0.256l-0.387,-0.772l-0.643,-0.128l-0.772,0.644l-1.287,-0.516l0.772,-1.158l0.257,-1.159l0.386,-1.157l-1.029,-1.674l-0.259,-1.803l-1.417,2.316z";
}, function($ctx1) {$ctx1.fill(self,"FrenchGuyana",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GM",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z";
}, function($ctx1) {$ctx1.fill(self,"GM",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Gabon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M495.162,237.723l-2.833,-2.703l-1.801,-2.317l-1.544,-2.704l0,-0.900l0.642,-0.902l0.644,-1.931l0.515,-2.060l0.903,-0.128l3.988,0l-0.128,-3.219l1.288,-0.129l1.673,0.387l1.674,-0.387l0.256,0.129l-0.127,1.160l0.643,1.415l2.060,-0.258l0.642,0.515l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.802l-0.900,1.288l-2.319,-0.129l-1.416,-1.287l-0.256,1.287l-1.802,0.257l-0.901,0.643l1.029,1.804l2.059,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Gabon",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Georgia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M577.161,115.042l0.387,-1.159l-0.643,-1.801l-1.546,-1.030l-1.544,-0.258l-0.900,-0.772l0.256,-0.387l2.318,0.516l3.990,0.386l3.604,1.287l0.517,0.515l1.671,-0.387l2.446,0.516l0.772,1.158l1.803,0.644l-0.771,0.257l1.287,1.545l-0.258,0.258l-1.545,-0.130l-1.930,-0.772l-0.644,0.387l-3.734,0.515l-2.702,-1.416l2.834,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Georgia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Germany",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.945,78.87l0.127,1.028l2.703,0.644l-0.128,0.901l2.831,-0.514l1.417,-0.644l3.090,1.029l1.287,0.901l0.642,1.287l-0.770,0.773l1.029,0.901l0.644,1.417l-0.257,1.030l1.158,1.672l-1.287,0.259l-0.645,-0.259l-0.642,0.516l-1.932,0.515l-1.029,0.644l-1.932,0.643l0.387,0.773l0.386,1.157l1.288,0.645l1.544,1.159l-0.901,1.158l-1.030,0.386l0.387,1.802l-0.258,0.386l-0.773,-0.515l-1.287,-0.128l-1.931,0.515l-2.446,-0.128l-0.387,0.772l-1.285,-0.772l-0.903,0.128l-2.832,-0.772l-0.515,0.514l-2.317,0l0.257,-1.931l1.416,-1.802l-3.861,-0.514l-1.287,-0.773l0.129,-1.159l-0.516,-0.515l0.258,-1.930l-0.386,-2.833l1.544,0l0.773,-0.901l0.644,-2.574l-0.515,-0.902l0.515,-0.515l2.317,-0.129l0.385,0.516l1.933,-1.288l-0.645,-1.029l-0.129,-1.544l2.060,0.385l-1.675,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Germany",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ghana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z";
}, function($ctx1) {$ctx1.fill(self,"Ghana",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GreatBritian",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.829,78.483l2.317,-0.129l2.832,1.673l-1.416,1.803l-2.060,-0.516l-1.673,0l0.515,-1.416l0.515,1.415zM453.84,69.214l3.347,-0.257l-2.961,2.960l2.832,-0.386l2.832,0l-0.643,2.189l-2.446,2.446l2.832,0.256l2.575,3.348l1.801,0.515l1.674,3.089l0.773,1.030l3.347,0.515l-0.387,1.674l-1.416,0.772l1.159,1.416l-2.446,1.417l-3.605,0l-4.633,0.772l-1.159,-0.516l-1.803,1.159l-2.574,-0.257l-1.802,1.030l-1.415,-0.515l3.860,-2.832l2.446,-0.644l-4.247,-0.386l-0.772,-1.030l2.831,-0.901l-1.416,-1.416l0.515,-1.803l3.991,0.258l0.386,-1.545l-1.803,-1.674l-3.346,-0.515l-0.645,-0.772l1.031,-1.158l-0.901,-0.772l-1.416,1.286l-0.258,-2.573l-1.287,-1.417l0.901,-2.704l2.189,-2.187l-2.059,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"GreatBritian",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greece",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.099,131.906l-0.387,0.773l-3.861,0.257l0,-0.515l-3.219,-0.515l0.387,-1.159l1.543,0.902l2.060,-0.129l2.059,0.257l-0.127,0.387l-1.545,0.258zM521.808,116.973l1.804,-0.258l1.029,-0.643l1.417,0.128l0.515,-0.513l0.514,-0.130l1.932,0.130l2.187,-0.773l1.930,1.029l2.445,-0.256l0,-1.417l1.289,0.772l-0.771,1.673l-0.645,0.258l-1.674,0l-1.416,-0.258l-3.218,0.644l1.802,1.545l-1.287,0.387l-1.543,0l-1.418,-1.417l-0.514,0.645l0.643,1.672l1.289,1.159l-1.031,0.644l1.545,1.286l1.286,0.774l0.130,1.545l-2.575,-0.773l0.772,1.417l-1.672,0.256l1.028,2.317l-1.800,0.129l-2.189,-1.287l-1.030,-2.059l-0.516,-1.803l-1.030,-1.288l-1.287,-1.545l-0.258,-0.772l1.288,-1.287l0.128,-0.901l0.901,-0.386l0,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Greece",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greenland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M339.272,4.333l9.011,-1.544l9.525,0.128l3.348,-1.029l9.526,-0.258l21.497,0.386l16.864,2.060l-4.892,1.029l-10.298,0.129l-14.546,0.258l1.287,0.515l9.654,-0.257l8.110,0.901l5.149,-0.773l2.317,0.901l-2.961,1.545l6.824,-1.030l13.130,-1.030l7.981,0.515l1.545,1.159l-10.942,1.931l-1.546,0.644l-8.625,0.514l6.180,0.129l-3.089,1.931l-2.189,1.802l0.129,2.961l3.218,1.674l-4.249,0.128l-4.376,0.902l4.893,1.415l0.643,2.318l-2.832,0.257l3.476,2.317l-5.923,0.129l3.091,1.159l-0.902,0.900l-3.733,0.387l-3.862,0l3.476,1.931l0,1.158l-5.407,-1.158l-1.287,0.773l3.604,0.644l3.476,1.673l1.030,2.188l-4.763,0.515l-2.060,-1.031l-3.347,-1.544l0.901,1.803l-3.090,1.416l7.081,0.129l3.733,0.128l-7.208,2.316l-7.338,2.189l-7.852,0.902l-2.962,0l-2.831,1.030l-3.734,2.832l-5.793,1.931l-1.930,0.128l-3.604,0.644l-3.862,0.644l-2.317,1.673l0,1.802l-1.288,1.802l-4.505,2.189l1.158,2.060l-1.287,2.188l-1.287,2.703l-3.863,0.129l-3.989,-2.188l-5.278,0l-2.704,-1.545l-1.802,-2.574l-4.635,-3.347l-1.415,-1.803l-0.258,-2.316l-3.732,-2.576l0.900,-1.930l-1.802,-1.031l2.703,-3.088l3.991,-1.031l1.159,-1.158l0.515,-2.059l-3.476,-0.259l-6.179,-1.416l2.189,0l6.049,0l-4.634,-1.801l-2.446,-0.902l-4.892,-0.258l2.960,-2.445l-1.544,-1.030l-2.188,-1.931l-3.218,-2.832l-3.475,-1.030l0.128,-1.159l-7.338,-1.545l-5.664,-0.257l-7.208,0.129l-6.565,0.257l-3.090,-0.901l-4.763,-1.673l7.081,-0.901l5.405,-0.130l-11.457,-0.643l-6.050,-1.158l0.387,-1.030l10.169,-1.288l9.784,-1.287l1.030,-1.030l-7.210,-0.901l2.318,-1.029l9.397,-1.931l3.862,-0.258l-1.159,-1.287l6.437,-0.644l8.238,-0.387l8.368,-0.128l2.832,0.901l7.209,-1.545l6.436,1.030l3.347,1.159l6.050,0l-6.436,-1.545l-0.386,1.159z";
}, function($ctx1) {$ctx1.fill(self,"Greenland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guatemala",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M222.516,189.963l-1.417,-0.514l-1.673,0l-1.159,-0.515l-1.544,-1.159l0.128,-0.773l0.257,-0.643l-0.385,-0.514l1.416,-2.188l3.347,0l0.128,-0.903l-0.385,-0.128l-0.387,-0.644l-1.030,-0.643l-0.901,-0.901l1.158,0l0,-1.416l2.575,0l2.446,0l0,2.060l-0.257,3.089l0.772,0l0.901,0.515l0.258,-0.386l0.771,0.257l-1.158,1.030l-1.287,0.772l-0.257,0.516l0.257,0.514l-0.515,0.773l-0.644,0.129l0.129,0.258l-0.515,0.385l-0.901,0.644l0.128,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Guatemala",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guinea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z";
}, function($ctx1) {$ctx1.fill(self,"Guinea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GuineaBissau",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"GuineaBissau",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guyana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M304.257,204.383l1.804,1.028l1.672,1.803l0,1.415l1.030,0l1.417,1.289l1.157,1.028l-0.514,2.319l-1.545,0.772l0.129,0.643l-0.514,1.416l1.157,1.931l0.902,0l0.385,1.545l1.545,2.317l-0.643,0.130l-1.416,-0.259l-0.901,0.644l-1.288,0.515l-0.772,0.128l-0.386,0.515l-1.287,-0.128l-1.674,-1.288l-0.128,-1.287l-0.773,-1.287l0.515,-2.316l0.772,-0.902l-0.644,-1.288l-0.900,-0.386l0.257,-1.159l-0.644,-0.643l-1.287,0.129l-1.930,-2.061l0.772,-0.772l0,-1.287l1.673,-0.385l0.644,-0.516l-0.902,-1.029l0.130,-0.902l-2.187,1.672z";
}, function($ctx1) {$ctx1.fill(self,"Guyana",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Haiti",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M268.085,173.357l1.673,0.129l2.317,0.387l0.259,1.416l-0.259,1.029l-0.643,0.515l0.643,0.772l0,0.773l-1.802,-0.515l-1.287,0.257l-1.673,-0.257l-1.159,0.515l-1.545,-0.773l0.258,-0.900l2.446,0.385l2.060,0.258l1.029,-0.643l-1.288,-1.159l0,-1.030l-1.673,-0.387l-0.644,0.772z";
}, function($ctx1) {$ctx1.fill(self,"Haiti",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Honduras",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M229.981,192.023l-0.385,-0.900l-0.902,-0.258l0.258,-1.031l-0.386,-0.256l-0.515,-0.258l-1.287,0.386l0,-0.386l-0.902,-0.386l-0.515,-0.643l-0.772,-0.129l0.515,-0.773l-0.257,-0.514l0.257,-0.516l1.287,-0.772l1.158,-1.030l0.258,0.129l0.644,-0.386l0.772,-0.129l0.257,0.258l0.386,-0.129l1.288,0.257l1.288,-0.128l0.772,-0.258l0.386,-0.258l0.773,0.129l0.643,0.129l0.772,0l0.515,-0.258l1.287,0.387l0.387,0l0.772,0.515l0.773,0.643l1.030,0.387l0.643,0.772l-0.901,-0.128l-0.386,0.386l-0.902,0.386l-0.643,0l-0.643,0.385l-0.516,-0.127l-0.514,-0.517l-0.258,0.130l-0.258,0.643l-0.257,0l-0.129,0.516l-0.900,0.771l-0.515,0.258l-0.258,0.386l-0.773,-0.515l-0.643,0.643l-0.515,0l-0.643,0.129l0,1.288l-0.387,0l-0.257,0.644l0.902,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Honduras",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Hungary",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M508.937,100.753l0.900,-1.674l-0.643,-0.643l1.545,0l0.257,-1.158l1.288,0.772l1.028,0.257l2.318,-0.257l0.129,-0.644l1.158,0l1.287,-0.515l0.258,0.258l1.287,-0.387l0.645,-0.643l0.900,-0.129l2.832,0.772l0.645,-0.257l1.415,0.773l0.256,0.643l-1.671,0.643l-1.290,1.803l-1.673,1.802l-2.059,0.515l-1.672,-0.129l-2.060,0.772l-1.032,0.387l-2.316,-0.515l-1.930,-1.159l-0.902,-0.386l-0.515,-0.901l0.385,0z";
}, function($ctx1) {$ctx1.fill(self,"Hungary",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iceland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M426.163,47.974l-0.643,1.672l3.089,1.932l-3.604,2.059l-7.723,1.802l-2.318,0.515l-3.475,-0.385l-7.595,-0.902l2.703,-1.158l-5.922,-1.287l4.763,-0.516l-0.128,-0.900l-5.664,-0.644l1.930,-1.674l3.991,-0.386l4.248,1.803l4.119,-1.417l3.348,0.645l4.376,-1.417l-4.505,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iceland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "India",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M674.866,131.391l2.961,3.089l-0.256,2.189l1.030,1.416l-0.129,1.416l-1.932,-0.385l0.773,2.960l2.704,1.674l3.732,1.930l-1.672,1.160l-1.160,2.573l2.703,1.031l2.447,1.287l3.604,1.545l3.603,0.386l1.674,1.287l2.059,0.257l3.219,0.644l2.189,0l0.385,-1.158l-0.385,-1.674l0.258,-1.159l1.543,-0.514l0.258,2.059l0.129,0.516l2.447,1.029l1.672,-0.386l2.189,0.129l2.188,0l0.257,-1.674l-1.158,-0.901l2.188,-0.258l2.445,-2.059l3.092,-1.674l2.314,0.643l1.934,-1.158l1.285,1.674l-0.900,1.159l2.832,0.386l0.258,1.029l-1.030,0.515l0.256,1.674l-1.930,-0.515l-3.474,1.802l0.127,1.545l-1.545,2.317l-0.127,1.287l-1.160,2.189l-2.188,-0.515l0,2.704l-0.642,0.900l0.255,1.159l-1.287,0.643l-1.416,-4.247l-0.771,0l-0.387,1.802l-1.545,-1.416l0.901,-1.545l1.158,-0.129l1.289,-2.317l-1.545,-0.515l-2.574,0.128l-2.574,-0.386l-0.260,-1.931l-1.285,-0.128l-2.061,-1.159l-1.031,1.803l2.060,1.415l-1.802,1.030l-0.514,1.031l1.672,0.643l-0.514,1.674l0.901,2.059l0.515,2.188l-0.387,1.030l-1.931,-0.128l-3.217,0.643l0.129,1.931l-1.416,1.674l-3.861,1.802l-3.092,3.218l-2.059,1.675l-2.574,1.673l-0.129,1.287l-1.287,0.644l-2.447,1.029l-1.287,0.129l-0.772,2.059l0.645,3.476l0.127,2.189l-1.159,2.574l0,4.635l-1.414,0.128l-1.289,2.060l0.903,0.901l-2.448,0.773l-0.900,1.802l-1.158,0.772l-2.576,-2.574l-1.159,-3.734l-1.027,-2.703l-1.031,-1.287l-1.416,-2.575l-0.645,-3.347l-0.513,-1.674l-2.448,-3.733l-1.029,-5.278l-0.900,-3.346l0,-3.347l-0.516,-2.446l-3.861,1.544l-1.931,-0.257l-3.476,-3.347l1.287,-0.901l-0.772,-1.159l-3.218,-2.188l1.801,-1.802l5.922,0l-0.514,-2.317l-1.545,-1.417l-0.258,-2.059l-1.802,-1.159l2.961,-2.832l3.218,0.129l2.704,-2.833l1.802,-2.702l2.575,-2.704l0,-1.931l2.187,-1.545l-2.059,-1.287l-1.031,-1.802l-0.900,-2.447l1.287,-1.157l4.121,0.643l2.961,-0.386l-2.572,2.189z";
}, function($ctx1) {$ctx1.fill(self,"India",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Indonesia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,0.515l0,0.773l-1.674,2.060l-2.317,0.515l-0.386,-0.257l0.258,-0.902l1.158,-1.674l-2.703,1.030zM826.767,245.576l-0.258,-2.058l0.515,-0.903l0.516,-1.030l0.643,0.901l0,1.286l1.416,-1.804zM845.175,242.742l0,8.755l-2.447,-2.188l-2.702,-0.514l-0.644,0.771l-3.475,0.129l1.156,-2.189l1.676,-0.772l-0.644,-2.962l-1.287,-2.317l-5.280,-2.187l-2.187,-0.256l-3.992,-2.448l-0.899,1.288l-1.031,0.257l-0.516,-1.030l0,-1.157l-2.058,-1.288l2.832,-1.030l1.931,0l-0.259,-0.644l-3.860,0l-1.160,-1.674l-2.314,-0.515l-1.161,-1.287l3.606,-0.643l1.414,-0.902l4.248,1.160l0.516,1.028l0.771,4.248l2.705,1.676l2.317,-2.833l3.090,-1.674l2.316,0l2.318,0.901l2.059,1.030l2.832,0.515l-0.129,-8.752zM761.116,223.434l1.801,1.416l1.803,-0.514l1.672,0.257l1.545,-1.417l1.289,-0.257l2.574,0.772l2.189,-0.515l1.414,-3.862l1.032,-0.901l0.900,-3.089l3.090,0l2.316,0.515l-1.545,2.446l2.059,2.574l-0.514,1.160l3.090,2.574l-3.217,0.257l-0.902,1.802l0.129,2.447l-2.576,1.930l-0.129,2.575l-1.030,4.119l-0.386,-0.901l-3.088,1.158l-1.031,-1.542l-1.930,-0.259l-1.287,-0.773l-3.219,0.901l-1.029,-1.287l-1.801,0.128l-2.189,-0.256l-0.387,-3.606l-1.416,-0.772l-1.287,-2.317l-0.260,-2.317l0.260,-2.574l1.545,-1.674l-0.515,-1.802zM813.765,234.505l2.961,0.772l0.902,2.059l-2.190,-1.029l-2.318,-0.256l-1.545,0.128l-1.801,0l0.643,-1.545l-3.348,0.129zM807.069,237.209l-1.929,-0.516l-0.516,-1.158l2.705,-0.129l0.643,0.901l0.903,-0.902zM809.903,221.117l0.129,1.416l1.674,0.258l0.256,1.158l-0.256,2.317l-1.289,-0.258l-0.514,1.674l1.159,1.417l-0.774,0.256l-1.029,-1.673l-0.772,-3.476l0.514,-2.060l-0.902,1.029zM796.386,224.593l3.090,-0.130l2.703,-1.930l0.386,0.643l-2.060,2.704l-2.059,0.515l-2.574,-0.644l-4.506,0.257l-2.316,0.387l-0.387,1.931l2.316,2.445l1.545,-1.158l5.022,-1.031l-0.258,1.289l-1.158,-0.387l-1.160,1.545l-2.446,1.030l2.575,3.476l-0.514,0.903l2.445,3.216l0,1.674l-1.416,0.771l-1.029,-0.901l1.287,-2.186l-2.703,1.028l-0.645,-0.772l0.385,-1.031l-1.930,-1.544l0.131,-2.574l-1.804,0.773l0.257,3.088l0.129,3.862l-1.800,0.387l-1.161,-0.774l0.774,-2.443l-0.389,-2.574l-1.156,-0.131l-0.772,-1.802l1.159,-1.802l0.384,-2.060l1.288,-4.120l0.515,-1.029l2.317,-2.060l2.189,0.772l-3.346,-0.387zM789.306,254.588l-3.604,-1.804l2.574,-0.643l1.416,0.902l0.903,0.771l-0.131,0.774l1.158,0zM792.138,249.953l1.802,-0.129l2.317,-1.029l-0.385,1.544l-3.992,0.643l-3.604,-0.257l0,-1.030l2.188,-0.515l-1.674,-0.773zM783.771,249.566l1.673,-0.257l0.645,1.158l-3.090,0.515l-1.803,0.387l-1.545,0l1.030,-1.674l1.416,0l0.773,-0.900l-0.901,-0.771zM757.511,244.287l0.386,0.902l5.149,0.258l0.514,-1.031l5.021,1.288l1.029,1.674l3.991,0.515l3.349,1.673l-3.092,1.032l-2.961,-1.160l-2.445,0.128l-2.832,-0.257l-2.445,-0.514l-3.219,-0.902l-1.932,-0.387l-1.158,0.387l-4.890,-1.159l-0.387,-1.158l-2.574,-0.129l1.929,-2.574l3.219,0.127l2.190,1.031l-1.158,-0.256zM746.438,229.871l0.387,1.932l0.903,1.415l2.058,0.257l1.289,1.802l-0.644,3.347l-0.129,4.118l-2.961,0l-2.317,-2.187l-3.476,-2.188l-1.158,-1.674l-2.059,-2.188l-1.289,-2.060l-2.061,-3.733l-2.314,-2.189l-0.775,-2.317l-1.028,-2.187l-2.447,-1.674l-1.416,-2.318l-2.059,-1.416l-2.705,-3.090l-0.256,-1.287l1.674,0.129l4.248,0.515l2.317,2.575l2.058,1.803l1.547,1.157l2.572,2.962l2.706,0l2.187,1.801l1.674,2.318l2.060,1.158l-1.158,2.189l1.545,1.030l-1.027,0z";
}, function($ctx1) {$ctx1.fill(self,"Indonesia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iran",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M610.502,126.756l2.317,-0.513l1.932,-1.546l1.803,0.129l1.157,-0.515l1.932,0.257l2.961,1.288l2.188,0.387l3.088,2.317l2.060,0.128l0.129,2.188l-1.029,3.477l-0.773,1.930l1.158,0.386l-1.158,1.416l0.902,2.188l0.256,1.674l2.060,0.515l0.129,1.673l-2.445,2.447l1.414,1.415l1.031,1.674l2.574,1.159l0.128,2.446l1.288,0.386l0.259,1.287l-3.992,1.288l-1.030,3.218l-5.020,-0.902l-2.961,-0.515l-2.961,-0.386l-1.160,-3.346l-1.285,-0.515l-2.058,0.515l-2.706,1.287l-3.345,-0.901l-2.705,-2.060l-2.575,-0.773l-1.800,-2.446l-2.061,-3.604l-1.416,0.387l-1.674,-0.902l-1.029,1.030l-1.545,-1.416l0,-1.416l-0.901,0l0.514,-1.931l-1.415,-2.060l-3.347,-1.416l-1.802,-2.575l0.643,-2.187l1.289,-0.902l-0.130,-1.545l-1.802,-0.772l-1.803,-3.476l-0.128,0l-1.288,-1.931l0.516,-0.901l-0.773,-3.089l1.802,-0.772l0.387,1.028l1.415,1.288l1.804,0.386l1.029,-0.129l3.089,-1.930l1.030,-0.258l0.773,0.773l-0.902,1.415l1.674,1.417l0.643,-0.129l0.901,1.931l2.575,0.516l1.803,1.415l3.862,0.385l4.247,-0.643l-0.257,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Iran",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iraq",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M585.658,126.628l0.128,0l1.803,3.476l1.802,0.772l0.130,1.545l-1.289,0.902l-0.643,2.187l1.802,2.575l3.347,1.416l1.415,2.060l-0.514,1.931l0.901,0l0,1.416l1.545,1.416l-1.674,-0.128l-1.803,-0.258l-1.930,2.703l-5.020,-0.258l-7.596,-5.406l-3.990,-1.931l-3.218,-0.773l-1.158,-3.218l6.051,-2.832l1.029,-3.218l-0.258,-1.931l1.417,-0.773l1.416,-1.673l1.158,-0.385l3.091,0.385l0.899,0.643l1.287,-0.385l0.128,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iraq",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ireland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M448.562,81.83l0.387,1.931l-2.060,2.445l-4.764,1.544l-3.732,-0.385l2.188,-2.832l-1.415,-2.703l3.604,-2.060l2.059,-1.287l0.515,1.415l-0.515,1.416l1.673,0l-2.060,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Ireland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Israel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.458,138.857l-0.516,0.902l-0.900,-0.387l-0.645,1.803l0.774,0.258l-0.774,0.385l-0.128,0.644l1.287,-0.257l0.130,1.029l-1.417,4.249l-1.674,-4.635l0.773,-0.901l-0.258,-0.129l0.772,-1.287l0.515,-1.931l0.385,-0.773l0.130,0l0.900,0l0.259,-0.515l0.643,0l0,1.160l0.256,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Israel",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Italy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M493.361,100.624l1.672,0.386l0.258,-0.514l2.703,-0.386l0.644,0.900l3.734,0.644l-0.259,1.417l0.646,1.029l-2.063,-0.386l-2.315,1.030l0.257,1.287l-0.387,0.772l0.900,1.417l2.577,1.287l1.287,2.317l2.961,2.189l2.187,-0.130l0.645,0.644l-0.773,0.515l2.445,1.030l1.933,0.772l2.315,1.416l0.257,0.516l-0.513,0.900l-1.417,-1.157l-2.316,-0.516l-1.159,1.803l1.931,0.901l-0.387,1.416l-1.030,0.257l-1.544,2.317l-1.029,0.129l0,-0.772l0.514,-1.417l0.644,-0.643l-1.158,-1.545l-0.772,-1.417l-1.160,-0.256l-0.772,-1.159l-1.673,-0.515l-1.159,-1.030l-2.060,-0.257l-2.061,-1.159l-2.444,-1.802l-1.933,-1.545l-0.772,-2.703l-1.286,-0.258l-2.189,-0.901l-1.288,0.386l-1.545,1.287l-1.157,0.130l0.258,-1.160l-1.418,-0.386l-0.642,-2.058l0.901,-0.774l-0.772,-1.029l0.128,-0.772l1.160,0.643l1.287,-0.128l1.543,-1.031l0.387,0.516l1.288,-0.129l0.643,-1.030l1.932,0.257l1.158,-0.386l-0.258,1.159zM504.944,124.183l2.061,-0.258l-0.901,2.188l0.387,0.773l-0.644,1.415l-2.061,-1.030l-1.286,-0.256l-3.733,-1.416l0.384,-1.288l3.091,0.257l-2.702,0.385zM488.726,116.844l1.287,-0.901l1.675,1.931l-0.387,3.605l-1.288,-0.258l-1.029,0.902l-1.032,-0.644l-0.128,-3.219l-0.642,-1.545l-1.544,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Italy",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "IvoryCoast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"IvoryCoast",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jamacia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M256.242,177.22l1.802,0.128l1.416,0.644l0.515,0.772l-1.931,0.129l-0.772,0.386l-1.544,-0.386l-1.545,-1.030l0.385,-0.643l1.030,-0.130l-0.644,-0.130z";
}, function($ctx1) {$ctx1.fill(self,"Jamacia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Japan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M847.491,121.479l-2.574,2.704l0.129,2.703l-1.031,2.188l0.386,1.287l-1.287,1.931l-3.476,1.288l-4.762,0.128l-3.861,3.090l-1.801,-1.030l-0.129,-1.932l-4.635,0.517l-3.219,1.287l-3.089,0l2.703,2.059l-1.803,4.506l-1.801,1.159l-1.287,-1.031l0.643,-2.445l-1.672,-0.772l-1.031,-1.804l2.445,-0.900l1.416,-1.674l2.705,-1.415l2.059,-1.803l5.277,-0.773l2.961,0.516l2.832,-4.764l1.803,1.288l3.861,-2.704l1.545,-1.029l1.674,-3.347l-0.387,-2.961l1.158,-1.803l2.832,-0.386l1.416,3.734l0,-2.188zM854.829,108.606l1.930,-1.159l0.515,2.961l-3.990,0.772l-2.316,2.703l-4.250,-1.931l-1.414,2.962l-3.090,0.128l-0.387,-2.703l1.416,-2.060l2.832,-0.128l0.774,-3.734l0.771,-2.188l3.219,2.832l2.060,0.901l-1.930,-0.644zM821.874,136.798l1.416,-1.545l1.545,0.257l1.160,-1.157l1.930,0.643l0.387,0.900l-1.545,1.674l-1.159,-0.901l-1.287,0.643l-0.773,1.545l-1.801,-0.772l-0.127,1.287z";
}, function($ctx1) {$ctx1.fill(self,"Japan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jordan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0.516,-0.902l2.960,1.031l5.278,-2.833l1.158,3.218l-0.514,0.516l-5.407,1.287l2.703,2.703l-0.901,0.515l-0.515,0.902l-2.060,0.386l-0.643,0.901l-1.160,0.900l-2.960,-0.514l-0.128,-0.386l1.417,-4.249l-0.130,-1.029l0.386,-0.902l0,1.544z";
}, function($ctx1) {$ctx1.fill(self,"Jordan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kazakhstan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l-1.547,0.515l-3.603,1.802l-1.160,1.931l-1.030,0.129l-0.771,-1.288l-3.347,-0.128l-0.644,-2.189l-1.287,0l0.258,-2.703l-3.219,-2.060l-4.633,0.259l-3.219,0.385l-2.574,-2.446l-2.189,-1.029l-4.120,-1.931l-0.515,-0.129l-6.951,1.544l0.130,9.914l-1.419,0.128l-1.930,-2.060l-1.800,-0.772l-3.090,0.515l-1.160,0.900l-0.127,-0.643l0.642,-1.159l-0.515,-0.900l-3.089,-0.902l-1.286,-2.446l-1.416,-0.644l-0.130,-0.901l2.702,0.258l0,-1.931l2.320,-0.514l2.316,0.385l0.515,-2.574l-0.387,-1.674l-2.704,0.129l-2.316,-0.644l-3.090,1.159l-2.574,0.643l-1.416,-0.514l0.387,-1.416l-1.803,-1.803l-1.931,0.129l-2.317,-1.802l1.545,-2.060l-0.772,-0.515l2.186,-2.960l2.705,1.544l0.387,-1.931l5.535,-2.962l4.248,-0.127l5.922,1.931l3.088,1.029l2.961,-1.158l4.250,0l3.474,1.416l0.773,-0.772l3.732,0l0.644,-1.159l-4.376,-1.931l2.702,-1.288l-0.515,-0.772l2.575,-0.644l-1.929,-1.931l1.158,-0.901l10.039,-0.901l1.418,-0.644l6.693,-1.028l2.446,-1.160l4.763,0.644l0.901,2.833l2.832,-0.645l3.474,0.901l-0.258,1.416l2.577,-0.128l6.822,-2.575l-1.029,0.901l3.474,2.060l5.922,6.822l1.545,-1.416l3.605,1.546l3.860,-0.644l1.545,0.514l1.289,1.545l1.930,0.515l1.158,1.159l3.478,-0.387l1.414,1.675l-2.060,1.801l-2.317,0.128l-0.127,2.704l-1.416,1.288l-5.408,-0.901l-1.931,4.892l-1.415,0.514l-5.279,1.159l2.445,4.635l-1.931,0.643l0.260,1.545l-1.674,-0.386l-1.287,-0.902l-3.993,-0.386l-4.505,0l-1.030,0.258l-3.732,-1.159l-1.545,0.644l-0.514,1.545l-4.378,-0.902l-1.801,0.386l0.514,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Kazakhstan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kenya",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Kenya",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kuwait",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M594.411,146.196l0.645,1.158l-0.257,0.643l0.900,2.060l-1.930,0.129l-0.644,-1.288l-2.447,-0.257l1.930,-2.703l-1.803,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kuwait",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kyrgyzstan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l0.514,-1.159l1.801,-0.386l4.378,0.902l0.514,-1.545l1.545,-0.644l3.732,1.159l1.030,-0.258l4.505,0l3.993,0.386l1.287,0.902l1.674,0.386l-0.387,0.644l-4.248,1.416l-0.901,1.158l-3.476,0.258l-1.029,1.673l-2.834,-0.257l-1.930,0.514l-2.574,1.288l0.386,0.643l-0.773,0.516l-5.020,0.514l-3.347,-0.901l-2.961,0.129l0.257,-1.545l2.961,0.515l1.030,-0.900l2.060,0.257l3.346,-1.932l-3.090,-1.416l-1.929,0.772l-2.061,-1.030l2.317,-1.801l0.770,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kyrgyzstan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Laos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M748.628,188.549l0.902,-1.288l0.127,-2.189l-2.187,-2.446l-0.129,-2.574l-2.059,-2.189l-2.060,-0.258l-0.516,1.030l-1.545,0l-0.900,-0.385l-2.832,1.544l0,-2.446l0.642,-2.832l-1.800,-0.128l-0.129,-1.546l-1.161,-0.900l0.516,-0.902l2.318,-1.802l0.256,0.643l1.418,0l-0.386,-3.089l1.416,-0.386l1.544,2.188l1.159,2.446l3.347,0l1.028,2.317l-1.672,0.772l-0.774,0.902l3.219,1.674l2.188,3.217l1.673,2.318l2.061,1.931l0.645,1.803l-0.387,2.702l-2.446,-0.901l-1.160,1.803l2.316,1.029z";
}, function($ctx1) {$ctx1.fill(self,"Laos",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Latvia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M521.938,76.037l0.128,-2.060l1.288,-1.674l2.573,-0.900l2.060,2.059l2.190,-0.128l0.513,-2.061l2.319,-0.514l1.158,0.387l2.316,1.028l2.318,0l1.286,0.644l0.129,1.287l0.901,1.545l-2.831,1.031l-1.674,0.514l-2.574,-1.288l-1.416,-0.257l-0.385,-0.515l-2.705,0.259l-4.506,-0.130l3.088,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Latvia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lebanon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.714,137.312l-0.643,0l-0.259,0.515l-0.900,0l0.900,-2.187l1.289,-1.932l0.128,0l1.159,0.128l0.515,1.031l-1.546,1.029l-0.514,1.416l0.129,0z";
}, function($ctx1) {$ctx1.fill(self,"Lebanon",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lesotho",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z";
}, function($ctx1) {$ctx1.fill(self,"Lesotho",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Liberia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z";
}, function($ctx1) {$ctx1.fill(self,"Liberia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Libya",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.204,165.376l-1.932,1.030l-1.416,-1.544l-4.248,-1.159l-1.288,-1.674l-2.060,-1.158l-1.286,0.385l-0.902,-1.415l-0.127,-1.159l-1.546,-2.059l1.030,-1.030l-0.259,-1.673l0.387,-1.546l-0.256,-1.158l0.513,-2.318l-0.126,-1.158l-0.903,-2.446l1.287,-0.643l0.257,-1.031l-0.257,-1.158l1.803,-1.029l0.900,-0.902l1.288,-0.772l0.129,-2.060l3.217,0.901l1.030,-0.257l2.320,0.514l3.602,1.159l1.160,2.446l2.446,0.515l3.860,1.158l2.833,1.288l1.286,-0.644l1.288,-1.287l-0.643,-2.059l0.900,-1.288l1.932,-1.288l1.801,-0.385l3.734,0.514l0.901,1.287l1.029,0l0.773,0.516l2.703,0.257l0.645,0.901l-0.903,1.287l0.387,1.159l-0.772,1.673l0.901,2.189l0,9.526l0,9.912l0,5.408l-2.832,0l0,1.415l-11.069,-5.407l-10.815,-5.149l2.702,-1.416z";
}, function($ctx1) {$ctx1.fill(self,"Libya",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lithuania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,80.67l-0.128,-0.772l0.259,-0.643l-1.289,-0.515l-2.702,-0.386l-0.644,-2.317l3.088,-0.773l4.506,0.130l2.705,-0.259l0.385,0.515l1.416,0.257l2.574,1.288l0.258,1.159l-2.189,0.901l-0.643,1.545l-2.961,0.901l-2.574,0l-0.644,-0.772l1.417,0.259z";
}, function($ctx1) {$ctx1.fill(self,"Lithuania",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Luxembourg",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.516,91.999l0.516,0.515l-0.129,1.159l-0.773,0.129l-0.643,-0.259l0.385,-1.544l-0.644,0z";
}, function($ctx1) {$ctx1.fill(self,"Luxembourg",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Madagascar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Madagascar",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malawi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z";
}, function($ctx1) {$ctx1.fill(self,"Malawi",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malaysia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M740.39,210.174l0.642,0.258l1.545,1.673l1.160,1.803l0.129,1.803l-0.258,1.287l0.258,0.900l0.129,1.545l1.029,0.772l1.030,2.318l0,0.901l-1.932,0.257l-2.574,-2.059l-3.217,-2.060l-0.260,-1.416l-1.543,-1.802l-0.386,-2.188l-1.032,-1.546l0.387,-1.931l-0.643,-1.158l0.516,-0.385l2.188,1.157l0.129,1.287l1.802,-0.257l-0.901,1.159zM760.601,221.632l2.058,0.901l2.061,-0.514l0.513,-2.318l1.159,-0.515l3.218,-0.515l1.932,-2.189l1.287,-1.673l1.287,1.417l0.516,-0.902l1.285,0l0.260,-1.674l0.127,-1.287l2.060,-1.931l1.287,-2.059l1.159,0l1.287,1.286l0.129,1.159l1.802,0.772l2.319,0.773l-0.258,1.158l-1.803,0.129l0.514,1.288l-2.059,0.901l-2.316,-0.515l-3.090,0l-0.900,3.089l-1.032,0.901l-1.414,3.862l-2.189,0.515l-2.574,-0.772l-1.289,0.257l-1.545,1.417l-1.672,-0.257l-1.803,0.514l-1.801,-1.416l0.515,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Malaysia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mali",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z";
}, function($ctx1) {$ctx1.fill(self,"Mali",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mauritania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Mauritania",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mexico",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M203.592,157.266l-1.030,2.446l-0.515,1.931l-0.257,3.605l-0.257,1.287l0.514,1.416l0.773,1.287l0.644,2.188l1.802,1.931l0.515,1.545l1.158,1.416l2.832,0.643l1.029,1.159l2.447,-0.772l2.060,-0.258l1.930,-0.513l1.803,-0.388l1.672,-1.158l0.644,-1.545l0.258,-2.317l0.386,-0.772l1.803,-0.644l2.961,-0.644l2.316,0l1.674,-0.129l0.644,0.516l-0.129,1.287l-1.417,1.674l-0.643,1.544l0.515,0.515l-0.386,1.158l-0.772,2.060l-0.644,-0.644l-0.515,0l-0.515,0.130l-1.030,1.544l-0.515,-0.258l-0.257,0.129l0,0.387l-2.446,0l-2.575,0l0,1.416l-1.158,0l0.901,0.901l1.030,0.643l0.387,0.644l0.385,0.128l-0.128,0.903l-3.347,0l-1.416,2.188l0.385,0.514l-0.257,0.643l-0.128,0.773l-2.961,-2.832l-1.416,-0.901l-2.189,-0.772l-1.544,0.257l-2.189,1.030l-1.287,0.258l-1.930,-0.773l-2.060,-0.515l-2.446,-1.158l-2.061,-0.387l-3.088,-1.287l-2.189,-1.286l-0.644,-0.645l-1.545,-0.258l-2.702,-0.772l-1.159,-1.287l-2.961,-1.545l-1.288,-1.673l-0.644,-1.287l0.902,-0.258l-0.258,-0.772l0.644,-0.772l0,-0.902l-0.901,-1.158l-0.257,-1.159l-0.902,-1.287l-2.445,-2.704l-2.703,-2.059l-1.288,-1.674l-2.317,-1.159l-0.515,-0.643l0.386,-1.674l-1.287,-0.643l-1.673,-1.287l-0.644,-1.802l-1.416,-0.258l-1.545,-1.416l-1.287,-1.288l-0.129,-0.901l-1.416,-2.060l-1.029,-2.059l0.128,-1.030l-1.931,-1.030l-0.901,0.129l-1.544,-0.773l-0.515,1.159l0.515,1.288l0.257,1.930l0.901,1.160l1.931,1.801l0.515,0.644l0.386,0.257l0.386,0.902l0.515,0l0.515,1.673l0.773,0.644l0.643,1.030l1.673,1.415l0.902,2.446l0.772,1.159l0.773,1.287l0.128,1.416l1.287,0.129l1.030,1.158l1.029,1.288l-0.128,0.386l-1.029,1.030l-0.516,0l-0.772,-1.673l-1.673,-1.546l-1.931,-1.286l-1.416,-0.644l0.129,-1.931l-0.515,-1.545l-1.288,-0.773l-1.802,-1.287l-0.386,0.386l-0.644,-0.643l-1.673,-0.643l-1.545,-1.675l0.129,-0.128l1.158,0.128l1.030,-1.029l0,-1.159l-2.059,-1.931l-1.545,-0.772l-1.031,-1.674l-0.900,-1.802l-1.287,-2.189l-1.159,-2.317l3.090,-0.256l3.475,-0.259l-0.258,0.515l3.992,1.288l6.178,1.931l5.407,0l2.060,0l0.129,-1.158l4.633,0l0.902,0.900l1.416,0.901l1.545,1.159l0.900,1.416l0.772,1.545l1.288,0.772l2.316,0.772l1.674,-2.058l2.189,-0.130l1.930,1.159l1.288,1.802l1.030,1.545l1.545,1.545l0.515,1.931l0.772,1.287l2.188,0.773l1.931,0.643l-1.030,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Mexico",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Moldova",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.998,97.02l0.644,-0.386l1.675,-0.259l2.059,0.903l1.029,0.128l1.287,0.644l-0.257,0.901l1.030,0.515l0.386,1.030l0.902,0.772l-0.131,0.386l0.517,0.258l-0.773,0.257l-1.545,-0.129l-0.258,-0.386l-0.513,0.258l0.129,0.386l-0.774,0.901l-0.385,0.901l-0.773,0.386l-0.387,-1.287l0.257,-1.159l-0.128,-1.158l-1.545,-1.674l-0.902,-1.029l-0.770,-0.901l0.774,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Moldova",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mongolia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M701.642,94.188l2.832,-0.515l5.148,-2.317l4.121,-1.287l2.317,0.901l2.832,0l1.802,1.287l2.703,0.129l3.862,0.644l2.574,-1.931l-1.029,-1.545l2.703,-2.832l3.090,1.158l2.445,0.257l3.090,0.773l0.515,1.931l3.862,1.158l2.574,-0.515l3.348,-0.257l2.705,0.257l2.701,1.287l1.674,1.417l2.445,0l3.348,0.386l2.574,-0.644l3.476,-0.387l3.991,-1.930l1.545,0.258l1.414,0.900l3.218,-0.128l-1.287,1.931l-1.931,2.704l0.771,1.158l1.420,-0.386l2.701,0.386l2.059,-0.901l2.189,0.772l2.448,1.931l-0.258,0.902l-2.190,-0.258l-3.861,0.386l-1.932,0.772l-1.931,1.803l-4.119,1.029l-2.704,1.417l-2.832,-0.516l-1.416,-0.257l-1.416,1.674l0.774,1.030l0.515,0.900l-1.931,0.902l-1.932,1.416l-3.088,1.030l-4.121,0.128l-4.375,0.902l-3.090,1.416l-1.160,-0.773l-3.347,0l-3.862,-1.673l-2.701,-0.386l-3.605,0.386l-5.536,-0.644l-2.962,0l-1.672,-1.545l-1.159,-2.446l-1.673,-0.386l-3.217,-1.674l-3.606,-0.385l-3.216,-0.387l-1.032,-1.158l1.032,-3.219l-1.803,-2.188l-3.863,-0.901l-2.317,-1.545l0.644,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Mongolia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Morocco",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Morocco",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mozambique",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z";
}, function($ctx1) {$ctx1.fill(self,"Mozambique",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "MyanmarBurma",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M733.437,172.585l-1.672,1.159l-1.803,0.129l-1.287,2.960l-1.158,0.515l1.287,2.317l1.802,1.931l1.030,1.802l-0.901,2.318l-1.029,0.514l0.643,1.416l1.802,2.060l0.387,1.545l-0.129,1.287l1.158,2.447l-1.545,2.445l-1.287,2.832l-0.257,-2.059l0.773,-2.060l-0.902,-1.544l0.257,-2.962l-1.158,-1.416l-0.773,-3.219l-0.516,-3.345l-1.158,-2.318l-1.803,1.415l-3.088,1.932l-1.416,-0.257l-1.673,-0.644l0.902,-3.347l-0.647,-2.575l-2.058,-3.090l0.386,-0.900l-1.671,-0.387l-1.934,-2.188l-0.127,-2.189l0.900,0.387l0.129,-1.932l1.287,-0.643l-0.255,-1.159l0.642,-0.900l0,-2.704l2.188,0.515l1.160,-2.189l0.127,-1.287l1.545,-2.317l-0.127,-1.545l3.474,-1.802l1.930,0.515l-0.256,-1.674l1.030,-0.515l-0.258,-1.029l1.545,-0.130l0.900,1.545l1.289,0.644l0,2.060l-0.131,2.188l-2.445,2.318l-0.387,3.089l2.832,-0.386l0.645,2.446l1.674,0.515l-0.772,2.317l2.059,1.030l1.160,0.387l1.930,-0.773l0.128,1.158l-2.318,1.802l-0.516,0.902l1.544,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"MyanmarBurma",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nambia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z";
}, function($ctx1) {$ctx1.fill(self,"Nambia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nepal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M702.673,151.859l-0.258,1.159l0.385,1.674l-0.385,1.158l-2.189,0l-3.219,-0.644l-2.059,-0.257l-1.674,-1.287l-3.603,-0.386l-3.604,-1.545l-2.447,-1.287l-2.703,-1.031l1.160,-2.573l1.672,-1.160l1.158,-0.643l2.061,0.772l2.703,1.802l1.545,0.386l0.900,1.288l2.188,0.515l2.189,1.158l2.959,0.644l-3.221,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Nepal",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Netherlands",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.646,82.859l2.188,0l0.515,0.902l-0.644,2.574l-0.773,0.901l-1.544,0l0.386,2.833l-1.416,-0.644l-1.673,-1.158l-2.574,0.643l-1.932,-0.258l1.417,-0.772l2.317,-3.991l-3.733,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Netherlands",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NewZealand",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M941.72,334.914l-1.030,1.417l-1.287,1.931l-2.058,1.030l-0.514,-0.772l-1.160,-0.386l1.545,-2.189l-0.774,-1.416l-2.961,-1.159l0.131,-0.901l1.930,-1.030l0.387,-2.059l-0.129,-1.674l-1.029,-1.803l0,-0.514l-1.290,-1.158l-2.058,-2.317l-1.158,-1.932l1.027,-0.256l1.418,1.544l2.187,0.773l0.774,2.315l1.930,2.834l0,-1.803l1.289,0.773l0.384,1.931l2.190,0.901l1.803,0.257l1.545,-1.030l1.285,0.258l-0.645,2.446l-0.771,1.544l-2.059,0l-0.771,0.773l0.255,1.158l0.386,-0.514zM922.282,344.312l2.319,-1.416l1.671,-1.416l1.161,-1.931l1.029,-0.772l0.387,-1.416l1.929,-1.287l0.514,1.158l0.645,1.030l1.933,-1.030l0.770,1.160l0,1.157l-1.028,1.160l-1.802,2.059l-1.289,1.029l1.029,1.288l-2.188,0l-2.316,1.030l-0.645,1.803l-1.545,2.703l-2.060,1.286l-1.414,0.773l-2.445,-0.128l-1.805,-0.901l-2.830,-0.130l-0.516,-1.030l1.416,-1.930l3.477,-2.704l1.672,-0.515l-1.931,1.030z";
}, function($ctx1) {$ctx1.fill(self,"NewZealand",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nicaragua",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M234.359,197.045l-0.902,-0.774l-1.287,-1.158l-0.643,-0.901l-1.159,-0.773l-1.288,-1.287l0.258,-0.386l0.514,0.386l0.129,-0.129l0.902,-0.128l0.257,-0.644l0.387,0l0,-1.288l0.643,-0.129l0.515,0l0.643,-0.643l0.773,0.515l0.258,-0.386l0.515,-0.258l0.900,-0.771l0.129,-0.516l0.257,0l0.258,-0.643l0.258,-0.130l0.514,0.517l0.516,0.127l0.643,-0.385l0.643,0l0.902,-0.386l0.386,-0.386l0.901,0.128l-0.129,0.258l-0.129,0.514l0.258,1.030l-0.643,0.901l-0.258,1.159l-0.129,1.158l0.129,0.644l0.128,1.287l-0.514,0.258l-0.129,1.159l0.129,0.644l-0.516,0.771l0.130,0.645l0.386,0.514l-0.644,0.514l-0.772,-0.128l-0.515,-0.644l-0.773,-0.128l-0.644,0.257l-1.801,-0.644l0.386,-0.259z";
}, function($ctx1) {$ctx1.fill(self,"Nicaragua",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Niger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Niger",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nigeria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z";
}, function($ctx1) {$ctx1.fill(self,"Nigeria",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NorthKorea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M817.112,112.726l0.385,0.514l-1.029,-0.129l-1.158,0.902l-0.774,0.901l0.131,1.930l-1.418,0.644l-0.516,0.386l-1.027,0.772l-1.803,0.516l-1.158,0.773l0,1.158l-0.387,0.257l1.157,0.386l1.418,1.159l-0.385,0.772l-1.033,0.129l-1.930,0.129l-1.029,1.158l-1.285,0l-0.131,0.257l-1.287,-0.514l-0.385,0.386l-0.774,0.257l-0.129,-0.514l-0.644,-0.258l-0.772,-0.386l0.772,-1.159l0.644,-0.385l-0.255,-0.387l0.640,-1.545l-0.127,-0.386l-1.545,-0.258l-1.289,-0.772l2.190,-1.673l2.961,-1.546l1.802,-1.930l1.287,0.900l2.319,0.130l-0.387,-1.417l4.248,-1.157l1.029,-1.546l-1.674,-1.546z";
}, function($ctx1) {$ctx1.fill(self,"NorthKorea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Norway",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M494.905,68.442l-1.802,-1.674l-5.279,3.090l-3.603,0.643l-3.734,-1.415l-0.902,-2.833l-0.900,-6.179l2.445,-1.802l7.080,-2.189l5.407,-2.832l4.892,-3.733l6.435,-5.278l4.508,-1.931l7.465,-3.476l5.922,-1.158l4.377,0.129l4.119,-2.188l4.893,0.128l4.889,-0.515l8.368,1.931l-3.474,0.773l2.961,1.672l-4.507,1.031l-2.189,0.257l1.159,-1.803l-3.476,-1.157l-4.247,0.900l-1.289,2.060l-2.572,1.159l-2.832,-0.644l-3.606,0.129l-2.961,-1.416l-1.545,0.643l-1.673,0.129l-0.513,1.803l-5.022,-0.387l-0.644,1.417l-2.702,0l-1.674,1.931l-2.703,2.960l-4.248,3.862l1.031,0.901l-0.903,1.030l-2.705,0l-1.800,2.446l0.127,3.605l1.803,1.415l-0.900,3.090l-2.318,1.931l1.158,-1.545z";
}, function($ctx1) {$ctx1.fill(self,"Norway",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Noumea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M911.856,283.809l2.188,1.673l1.416,1.159l-1.029,0.643l-1.545,-0.643l-1.932,-1.287l-1.672,-1.416l-1.803,-1.932l-0.386,-0.901l1.158,0.129l1.545,0.901l1.158,0.902l-0.902,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Noumea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Oman",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M617.197,159.841l1.157,1.802l1.545,1.030l1.932,0.387l1.674,0.385l1.158,1.545l0.772,0.902l0.902,0.385l0,0.644l-1.031,1.545l-0.387,0.772l-1.158,0.902l-1.029,1.802l-1.157,-0.130l-0.517,0.645l-0.514,1.416l0.385,1.673l-0.257,0.387l-1.286,0l-1.675,1.028l-0.257,1.289l-0.642,0.514l-1.675,0l-1.031,0.773l0,1.029l-1.287,0.773l-1.416,-0.257l-1.802,0.900l-1.286,0.129l-0.900,-1.930l-2.061,-4.378l7.981,-2.702l1.802,-5.408l-1.159,-1.931l0,-1.030l0.773,-1.159l0.129,-1.029l1.159,-0.515l-0.517,-0.386l0.258,-1.802l-1.417,0zM616.294,156.752l0.773,-0.902l0.387,0.257l-0.257,1.159l-0.385,0.386l0.518,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Oman",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Pakistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M667.659,126.886l2.059,1.287l0.773,2.059l4.375,1.159l-2.572,2.189l-2.961,0.386l-4.121,-0.643l-1.287,1.157l0.900,2.447l1.031,1.802l2.059,1.287l-2.187,1.545l0,1.931l-2.575,2.704l-1.802,2.702l-2.704,2.833l-3.218,-0.129l-2.961,2.832l1.802,1.159l0.258,2.059l1.545,1.417l0.514,2.317l-5.922,0l-1.801,1.802l-1.931,-0.772l-0.774,-1.932l-2.187,-2.059l-4.891,0.514l-4.377,0.130l-3.863,0.386l1.030,-3.218l3.992,-1.288l-0.259,-1.287l-1.288,-0.386l-0.128,-2.446l-2.574,-1.159l-1.031,-1.674l-1.414,-1.415l4.504,1.415l2.704,-0.386l1.674,0.386l0.514,-0.643l1.931,0.257l3.476,-1.159l0.129,-2.317l1.417,-1.544l2.058,0l0.257,-0.644l2.061,-0.386l1.029,0.257l1.031,-0.772l-0.129,-1.674l1.158,-1.545l1.673,-0.772l-1.030,-1.673l2.575,0l0.773,-0.902l-0.129,-1.029l1.287,-1.159l-0.257,-1.416l-0.645,-1.029l1.545,-1.287l2.833,-0.517l3.090,-0.256l1.416,-0.516l-1.545,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Pakistan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Palestine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0,1.544l-0.386,0.902l-1.287,0.257l0.128,-0.644l0.774,-0.385l-0.774,-0.258l0.645,-1.803l-0.900,-0.387z";
}, function($ctx1) {$ctx1.fill(self,"Palestine",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Panama",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M255.47,207.471l-0.902,-0.772l-0.643,-1.416l0.643,-0.773l-0.643,-0.127l-0.514,-0.903l-1.288,-0.771l-1.159,0.257l-0.644,0.900l-1.029,0.644l-0.644,0.129l-0.257,0.515l1.287,1.545l-0.643,0.258l-0.387,0.385l-1.287,0.129l-0.515,-1.544l-0.387,0.386l-0.772,-0.129l-0.643,-1.030l-1.030,-0.258l-0.773,-0.257l-1.158,0l0,0.644l-0.387,-0.515l0.130,-0.515l0.257,-0.515l-0.128,-0.515l0.385,-0.257l-0.514,-0.387l0,-1.157l1.029,-0.260l1.030,1.031l-0.129,0.516l1.159,0.129l0.129,-0.129l0.772,0.643l1.416,-0.258l1.031,-0.643l1.673,-0.515l0.900,-0.901l1.545,0.257l-0.129,0.257l1.545,0l1.159,0.516l0.900,0.773l1.031,0.771l-0.386,0.387l0.643,1.544l-0.515,0.901l-0.900,-0.257l0.258,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"Panama",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PapuaNewGuinea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M845.175,242.742l-0.129,-8.752l4.635,1.803l5.019,1.543l1.932,1.417l1.416,1.417l0.385,1.544l4.505,1.673l0.645,1.416l-2.445,0.258l0.642,1.802l2.317,1.802l1.802,2.832l1.545,-0.128l-0.129,1.287l2.059,0.387l-0.771,0.514l2.832,1.158l-0.258,0.773l-1.803,0.129l-0.641,-0.644l-2.320,-0.258l-2.701,-0.385l-2.061,-1.803l-1.545,-1.416l-1.414,-2.446l-3.478,-1.159l-2.315,0.772l-1.673,0.902l0.386,2.059l-2.189,0.902l-1.416,-0.515l-2.832,-0.129l0,8.755zM876.454,236.822l1.031,0.901l0.258,1.417l-0.771,0.641l-0.518,-1.544l-0.642,-1.028l-1.288,-0.902l-1.545,-1.159l-1.931,-0.773l0.773,-0.643l1.416,0.773l1.030,0.515l1.031,0.642l-1.156,-1.160zM872.851,242.742l-1.545,0.645l-1.287,0.644l-1.545,0l-2.188,-0.772l-1.545,-0.773l0.256,-0.901l2.447,0.388l1.416,-0.131l0.387,-1.287l0.385,-0.127l0.260,1.414l1.543,-0.128l0.773,-0.902l1.543,-1.031l-0.256,-1.544l1.543,-0.128l0.516,0.515l0,1.416l-0.901,1.674l-1.416,0.259l0.386,-0.769zM882.118,241.328l0.776,0.645l1.414,1.673l1.158,0.900l-0.258,0.771l-0.771,0.259l-1.159,-1.030l-1.287,-1.673l-0.515,-2.061l0.386,-0.257l-0.256,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"PapuaNewGuinea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Paraguay",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M296.405,286.898l1.030,-3.219l0,-1.414l1.416,-2.447l4.634,-0.772l2.446,0.130l2.575,1.285l0,0.902l0.772,1.415l-0.128,3.736l2.831,0.513l1.160,-0.513l1.801,0.642l0.516,0.903l0.256,2.443l0.259,1.031l1.028,0.129l1.031,-0.516l0.901,0.516l0,1.544l-0.386,1.545l-0.515,1.546l-0.386,2.445l-2.446,2.059l-2.189,0.387l-2.961,-0.387l-2.702,-0.772l2.574,-4.121l-0.386,-1.157l-2.703,-1.030l-3.348,-2.059l-2.188,-0.387l4.892,4.377z";
}, function($ctx1) {$ctx1.fill(self,"Paraguay",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Peru",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M277.74,274.281l-0.644,1.417l-1.415,0.644l-2.704,-1.543l-0.258,-1.031l-5.278,-2.705l-4.891,-2.959l-2.059,-1.674l-1.159,-2.188l0.515,-0.773l-2.318,-3.605l-2.703,-4.891l-2.446,-5.407l-1.158,-1.288l-0.902,-1.930l-2.058,-1.802l-1.932,-1.028l0.901,-1.161l-1.287,-2.576l0.772,-1.929l2.189,-1.673l0.386,1.030l-0.773,0.643l0,1.029l1.159,-0.257l1.030,0.388l1.159,1.286l1.545,-1.030l0.514,-1.802l1.673,-2.446l3.219,-1.030l2.961,-2.832l0.772,-1.674l-0.386,-2.059l0.772,-0.258l1.802,1.288l0.772,1.287l1.288,0.644l1.544,2.832l2.060,0.257l1.416,-0.644l1.030,0.516l1.673,-0.259l2.060,1.287l-1.802,2.704l0.772,0l1.416,1.417l-2.446,-0.129l-0.386,0.514l-2.188,0.515l-3.089,1.802l-0.129,1.288l-0.772,0.901l0.257,1.416l-1.545,0.773l0,1.158l-0.772,0.516l1.158,2.445l1.546,1.674l-0.644,1.158l1.801,0.129l1.030,1.416l2.317,0l2.317,-1.545l-0.256,4.119l1.287,0.257l1.416,-0.384l2.445,4.248l-0.644,0.901l-0.128,1.931l0,2.317l-1.159,1.287l0.515,1.029l-0.643,0.901l1.158,2.318l1.673,-2.830z";
}, function($ctx1) {$ctx1.fill(self,"Peru",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Phillipines",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M790.722,192.797l-1.416,-2.061l2.318,0l1.031,1.030l-0.775,2.316l1.158,1.285zM795.485,200.134l0.645,-0.773l0.256,-1.673l1.545,-0.129l-0.385,1.802l1.930,-2.703l-0.258,2.574l-0.903,0.902l-0.900,1.802l-0.900,0.773l-1.545,-1.932l-0.515,0.643zM805.655,204.253l0.258,1.802l0.256,1.545l-1.029,2.446l-0.901,-2.704l-1.289,1.287l0.903,2.060l-0.774,1.288l-3.217,-1.545l-0.771,-2.059l0.898,-1.287l-1.801,-1.159l-0.773,1.030l-1.285,-0.129l-2.061,1.545l-0.386,-0.773l1.031,-2.317l1.672,-0.773l1.545,-0.901l0.902,1.159l2.061,-0.772l0.384,-1.158l1.930,-0.129l-0.129,-2.061l2.192,1.288l0.255,1.416l-0.129,-0.901zM784.415,201.936l-3.477,2.447l1.288,-1.804l1.929,-1.673l1.676,-1.931l1.285,-2.575l0.518,2.190l-1.803,1.415l1.416,-1.931zM794.841,177.863l-0.514,1.159l0.901,1.931l-0.643,2.188l-1.545,0.901l-0.516,2.188l0.645,2.189l1.416,0.257l1.158,-0.257l3.348,1.415l-0.258,1.417l0.900,0.772l-0.257,1.159l-2.061,-1.287l-1.029,-1.416l-0.643,1.031l-1.803,-1.676l-2.445,0.387l-1.287,-0.515l0.127,-1.157l0.775,-0.645l-0.775,-0.643l-0.256,0.901l-1.416,-1.545l-0.387,-1.159l-0.127,-2.575l1.157,0.902l0.257,-4.248l0.901,-2.447l1.545,0l1.674,0.773l0.902,-0.643l-0.256,-0.643zM793.94,196.271l-0.386,-1.286l1.674,0.771l1.673,0l0,1.160l-1.287,1.157l-1.674,0.773l-0.128,-1.287l-0.128,1.288zM803.337,194.212l0.773,2.961l-2.060,-0.644l0,0.901l0.644,1.674l-1.287,0.514l-0.129,-1.802l-0.773,-0.128l-0.385,-1.674l1.545,0.257l0,-1.029l-1.676,-2.060l2.576,0l-0.772,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Phillipines",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Poland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.718,89.295l-1.158,-1.672l0.257,-1.030l-0.644,-1.417l-1.029,-0.901l0.770,-0.773l-0.642,-1.287l1.802,-0.901l4.248,-1.158l3.347,-0.901l2.703,0.387l0.258,0.643l2.574,0.129l3.348,0.256l4.890,0l1.417,0.259l0.644,0.772l0.129,1.288l0.771,1.029l0,1.029l-1.672,0.516l0.772,1.287l0.129,1.159l1.286,2.317l-0.257,0.773l-1.287,0.385l-2.447,2.189l0.646,1.287l-0.515,-0.257l-2.577,-1.030l-1.929,0.386l-1.289,-0.257l-1.672,0.644l-1.289,-1.030l-1.158,0.386l-0.127,-0.129l-1.289,-1.416l-1.930,-0.129l-0.257,-0.772l-1.802,-0.386l-0.517,0.773l-1.414,-0.644l0.129,-0.645l-1.932,-0.256l1.287,0.903z";
}, function($ctx1) {$ctx1.fill(self,"Poland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Portugal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l1.031,-0.643l1.158,-0.387l0.643,1.287l1.545,0l0.514,-0.385l1.545,0.128l0.773,1.416l-1.287,0.643l0,2.189l-0.514,0.387l0,1.159l-1.160,0.256l1.030,1.674l-0.772,1.674l0.902,0.900l-0.258,0.644l-1.030,1.030l0.257,0.902l-1.158,0.772l-1.416,-0.387l-1.416,0.258l0.386,-2.059l-0.129,-1.674l-1.288,-0.258l-0.643,-1.030l0.259,-1.802l1.028,-0.900l0.259,-1.159l0.514,-1.545l0,-1.159l-0.644,-1.030l0.129,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Portugal",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PuertoRico",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M286.622,177.09l1.416,0.258l0.516,0.515l-0.644,0.643l-2.060,0l-1.545,0.129l-0.258,-1.158l0.387,-0.387l-2.188,0z";
}, function($ctx1) {$ctx1.fill(self,"PuertoRico",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Qatar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M602.136,160.227l-0.257,-1.931l0.770,-1.416l0.772,-0.257l0.775,0.901l0,1.545l-0.517,1.544l-0.772,0.258l0.771,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Qatar",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofMacedonia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l0.385,0l0.129,-0.515l1.545,-0.515l1.544,-0.257l1.288,0l1.287,0.900l0.258,1.674l-0.514,0.130l-0.515,0.513l-1.417,-0.128l-1.029,0.643l-1.804,0.258l-1.029,-0.643l-0.385,-1.160l-0.257,0.900z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofMacedonia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofTurkey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M535.712,120.707l2.961,-2.575l4.247,-0.129l1.030,-2.060l5.150,0.387l3.217,-1.803l3.219,-0.772l4.376,0l4.765,1.932l3.860,1.028l3.089,-0.515l2.317,0.259l3.218,-1.417l2.834,-0.128l2.702,1.416l0.386,0.901l-0.256,1.288l2.059,0.643l1.029,0.773l-1.802,0.772l0.773,3.089l-0.516,0.901l1.416,2.189l-1.287,0.385l-0.899,-0.643l-3.091,-0.385l-1.158,0.385l-3.090,0.515l-1.416,-0.128l-3.090,1.028l-2.317,0l-1.416,-0.514l-2.960,0.772l-0.902,-0.514l-0.129,1.545l-0.643,0.515l-0.772,0.643l-1.029,-1.287l1.029,-0.902l-1.674,0.129l-2.188,-0.514l-1.803,1.544l-4.118,0.257l-2.189,-1.416l-2.961,-0.128l-0.644,1.159l-1.802,0.256l-2.574,-1.415l-2.961,0l-1.545,-2.574l-2.058,-1.545l1.286,-2.060l1.673,1.287zM535.581,114.27l2.705,-0.772l2.317,0.257l0.386,1.030l2.317,0.902l-0.514,0.643l-3.219,0.257l-1.031,0.772l-2.314,1.417l-0.774,-1.159l0,-0.644l0.645,-0.258l0.771,-1.673l1.289,0.772z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofTurkey",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Romania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,97.921l1.159,-0.515l1.674,0.258l1.673,0l1.289,0.772l0.899,-0.515l1.931,-0.257l0.773,-0.644l1.158,0l0.774,0.258l0.770,0.901l0.902,1.029l1.545,1.674l0.128,1.158l-0.257,1.159l0.387,1.287l1.287,0.386l1.287,-0.386l1.158,0.515l0,0.645l-1.287,0.643l-0.772,-0.258l-0.773,3.219l-1.544,-0.258l-1.930,-1.030l-3.219,0.644l-1.287,0.644l-3.990,-0.130l-2.059,-0.386l-1.031,0.129l-0.773,-1.030l-0.513,-0.515l0.641,-0.386l-0.771,-0.386l-0.774,0.644l-1.543,-0.773l-0.257,-1.158l-1.674,-0.643l-0.258,-0.902l-1.416,-1.030l2.059,-0.515l1.673,-1.802l1.290,-1.803l-1.671,0.643z";
}, function($ctx1) {$ctx1.fill(self,"Romania",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Russia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M950.089,36.129l-0.258,0l-0.516,-1.801l0.774,-0.772l0.127,-0.129l6.308,1.158l6.435,-1.544zM586.045,9.869l5.276,-0.515l4.121,0l0.514,0.773l1.545,-0.644l2.574,-0.515l3.990,0.644l-1.028,0.386l-3.605,0.385l-2.447,0.130l-0.384,0.514l-3.221,0.386l-2.830,-0.643l1.545,-0.772l6.050,0.129zM950.089,51.964l-3.992,1.802l2.574,3.219l-0.641,2.188l-5.539,-0.773l-7.336,1.674l-6.177,2.703l-4.764,2.703l-3.990,-1.673l-7.725,1.803l-6.693,0.128l-4.377,4.506l3.088,0.772l0,4.634l-3.475,1.545l0.645,1.803l-4.506,1.544l-1.159,3.219l-4.250,1.158l-0.513,1.931l-4.119,3.089l-1.674,-6.178l-1.545,-5.922l1.545,-4.249l2.060,-1.157l0.127,-1.287l3.864,-0.773l5.148,-3.219l4.506,-2.832l5.019,-2.060l2.061,-3.732l-3.219,0.128l-1.672,2.317l-6.695,2.446l-2.187,-3.089l-7.081,0.901l-6.693,4.247l1.803,1.288l-6.309,1.416l-10.041,-1.416l-11.715,0l-6.564,1.159l-8.369,5.278l-9.781,5.665l3.861,0.643l0.771,2.317l3.092,0.385l1.672,-1.545l2.961,0.387l3.475,2.060l0.515,3.089l-1.543,2.189l-0.902,2.575l-1.031,5.535l-4.120,3.862l-0.900,1.802l-3.603,3.219l-3.735,3.089l-1.674,1.545l-3.603,1.674l-1.674,0l-1.674,-1.288l-3.601,1.931l-0.518,0.901l-0.385,-0.514l0,-1.288l1.416,-0.129l0.385,-3.219l-0.771,-2.317l2.318,-0.901l3.346,0.516l1.802,-2.704l0.901,-2.832l1.031,-1.029l1.414,-2.448l-4.375,0.774l-2.447,1.030l-3.990,0l-1.159,-2.447l-3.218,-1.930l-4.635,-0.902l-1.029,-2.574l-0.901,-1.674l-1.031,-1.158l-1.674,-2.703l-2.316,-1.030l-4.119,-0.772l-3.475,0l-3.350,0.513l-2.316,1.417l1.545,0.644l0,1.416l-1.414,0.901l-2.447,2.832l0,1.159l-3.862,1.672l-3.219,-0.900l-3.218,0.128l-1.414,-0.900l-1.545,-0.258l-3.991,1.930l-3.476,0.387l-2.574,0.644l-3.348,-0.386l-2.445,0l-1.674,-1.417l-2.701,-1.287l-2.705,-0.257l-3.348,0.257l-2.574,0.515l-3.862,-1.158l-0.515,-1.931l-3.090,-0.773l-2.445,-0.257l-3.090,-1.158l-2.703,2.832l1.029,1.545l-2.574,1.931l-3.862,-0.644l-2.703,-0.129l-1.802,-1.287l-2.832,0l-2.317,-0.901l-4.121,1.287l-5.148,2.317l-2.832,0.515l-1.030,0.258l-1.414,-1.675l-3.478,0.387l-1.158,-1.159l-1.930,-0.515l-1.289,-1.545l-1.545,-0.514l-3.860,0.644l-3.605,-1.546l-1.545,1.416l-5.922,-6.822l-3.474,-2.060l1.029,-0.901l-6.822,2.575l-2.577,0.128l0.258,-1.416l-3.474,-0.901l-2.832,0.645l-0.901,-2.833l-4.763,-0.644l-2.446,1.160l-6.693,1.028l-1.418,0.644l-10.039,0.901l-1.158,0.901l1.929,1.931l-2.575,0.644l0.515,0.772l-2.702,1.288l4.376,1.931l-0.644,1.159l-3.732,0l-0.773,0.772l-3.474,-1.416l-4.250,0l-2.961,1.158l-3.088,-1.029l-5.922,-1.931l-4.248,0.127l-5.535,2.962l-0.387,1.931l-2.705,-1.544l-2.186,2.960l0.772,0.515l-1.545,2.060l2.317,1.802l1.931,-0.129l1.803,1.803l-0.387,1.416l1.416,0.514l-1.287,1.546l-2.575,0.386l-2.704,2.831l2.445,2.576l-0.255,1.801l2.960,3.218l-1.545,1.030l-0.516,0.644l-1.158,-0.129l-1.931,-1.673l-0.643,0l-1.803,-0.644l-0.772,-1.158l-2.446,-0.516l-1.671,0.387l-0.517,-0.515l-3.604,-1.287l-3.990,-0.386l-2.318,-0.516l-0.256,0.387l-3.477,-2.318l-3.089,-1.029l-2.318,-1.545l1.931,-0.514l2.317,-2.189l-1.544,-1.030l3.991,-1.159l-0.129,-0.643l-2.446,0.515l0.128,-1.159l1.417,-0.772l2.575,-0.258l0.384,-0.901l-0.513,-1.417l1.029,-1.415l0,-0.772l-3.990,-0.902l-1.545,0l-1.674,-1.287l-2.059,0.386l-3.476,-0.901l0.129,-0.514l-1.030,-1.159l-2.058,-0.129l-0.258,-0.901l0.643,-0.515l-1.673,-1.544l-2.833,0.256l-0.772,-0.128l-0.773,0.644l-0.901,-0.129l-0.643,-1.674l-0.644,-0.901l0.516,-0.257l2.187,0.128l1.030,-0.643l-0.772,-0.772l-1.803,-0.387l0.129,-0.515l-1.160,-0.515l-1.672,-1.802l0.645,-0.644l-0.258,-1.287l-2.703,-0.643l-1.416,0.385l-0.387,-0.772l-2.833,-0.644l-0.901,-1.545l-0.129,-1.287l-1.286,-0.644l1.158,-0.901l-0.900,-2.446l1.930,-1.544l-0.386,-0.515l3.089,-1.545l-2.832,-1.287l5.792,-3.347l2.448,-1.545l1.030,-1.416l-3.991,-1.802l1.157,-1.802l-2.445,-2.060l1.801,-2.318l-3.089,-2.960l2.448,-2.060l-4.119,-1.801l0.384,-1.932l2.189,-0.257l4.507,-1.031l2.830,-0.900l4.378,1.545l7.466,0.643l10.169,3.089l2.059,1.288l0.129,1.802l-7.336,2.061l-12.102,-2.061l-1.929,0.386l4.504,3.219l0.772,2.060l2.961,1.544l3.218,-2.703l7.596,1.287l0,-2.960l7.465,-1.803l3.992,-0.901l-2.190,-1.674l-0.643,-3.218l7.466,0.772l-1.801,3.348l4.632,-0.129l7.210,-2.703l9.783,-2.318l2.060,1.417l9.397,-1.546l6.695,0.902l0.643,-3.219l7.853,0.772l10.684,2.832l1.673,-1.801l-3.991,-4.507l4.505,-2.702l2.190,-3.090l8.369,0.386l0.769,4.763l0.260,5.536l1.672,1.674l-0.516,1.802l-4.119,2.832l2.832,0.386l5.151,-2.961l1.029,-3.991l-2.832,-1.159l-1.029,-5.664l3.345,-3.346l2.190,1.802l0.644,2.060l1.672,-1.288l3.477,-0.901l5.535,-0.128l5.019,1.544l-2.445,-2.575l-0.256,-2.574l4.760,-0.514l6.437,0.128l5.793,-0.387l-2.189,-1.415l3.219,-1.674l3.090,-0.129l5.150,-1.288l0.385,-0.128l1.029,0l1.418,0l1.545,-0.128l1.416,-0.129l1.027,0l0.389,0l0.900,-0.773l7.080,-0.257l2.190,0.643l6.049,-1.415l4.890,0l0.774,-1.159l2.574,-1.159l6.309,-1.030l4.632,0.772l-3.603,0.644l6.051,0.515l0.771,1.288l2.447,-0.644l9.782,-0.257l5.023,1.673l-2.318,3.089l-7.082,1.546l1.031,1.544l6.180,-0.257l2.961,1.030l11.968,0l2.705,1.544l10.299,0.129l0.387,-1.673l16.603,1.673l0.518,4.892l4.246,1.030l8.111,-1.545l15.834,-0.515l1.930,-3.476l23.170,1.802l2.320,1.545l7.078,2.059l14.416,-0.385l6.438,3.733l10.170,-0.128l9.269,-0.259l6.178,2.447l0.774,-3.219l13.257,0.515l8.496,1.159l3.735,1.158l6.564,2.059l7.209,2.448l8.110,1.029l5.277,2.575l-6.178,1.416l-0.386,2.703l-4.506,0.129l-5.278,-2.317l-5.150,-0.644l-3.475,-1.674l-1.802,2.961l0.385,-0.129zM518.204,80.414l0.645,-1.288l3.733,-0.772l2.702,0.386l1.289,0.515l-0.259,0.643l0.128,0.772l-4.890,0l3.348,0.256zM861.522,24.158l5.666,0.515l-0.128,1.416l-7.725,-1.416l-2.187,0.515zM836.034,22.871l5.279,-0.387l10.426,0.772l1.803,2.189l-9.527,-0.128l-3.989,1.030l-5.021,-1.931l-1.029,1.545zM742.835,13.473l0.516,0.772l5.019,2.575l-14.287,0.387l3.604,-3.090l-5.148,0.644zM718.763,9.226l10.556,0.386l5.922,3.346l-7.853,1.674l-11.328,-1.030l-0.127,-2.446l-2.830,1.930zM609.345,28.277l6.435,-2.317l-0.643,-1.287l6.050,-1.417l8.882,-1.673l8.882,-0.514l4.634,-1.030l5.279,-0.387l1.801,1.159l-1.801,0.772l-9.526,1.417l-8.239,1.287l-8.367,2.445l-3.993,2.704l-4.246,2.574l0.644,2.189l5.149,2.317l-1.672,0.129l-8.756,-0.257l-0.771,-1.287l-4.891,-0.644l-0.386,-1.545l2.830,-0.515l-0.127,-1.417l5.277,-2.316l2.445,0.387zM850.194,82.344l0.901,2.575l0,2.575l1.158,2.832l2.705,4.763l-3.990,-0.901l-1.674,3.862l2.574,2.703l0,1.931l-2.058,-1.674l-1.803,2.189l-0.516,-2.317l0.258,-2.575l-0.258,-2.960l0.645,-2.061l0.127,-3.604l-1.545,-2.575l0.131,-3.733l2.574,-1.287l-1.160,-1.158l1.289,-0.387l-0.642,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"Russia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Rwanda",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Rwanda",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SaudiArabia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M580.509,182.883l-0.387,-1.157l-0.771,-0.773l-0.259,-1.031l-1.415,-1.029l-1.416,-2.188l-0.772,-2.189l-1.802,-1.931l-1.289,-0.386l-1.672,-2.574l-0.386,-1.932l0.128,-1.544l-1.545,-2.961l-1.287,-1.030l-1.416,-0.644l-0.902,-1.545l0.130,-0.514l-0.771,-1.417l-0.774,-0.643l-1.030,-2.060l-1.674,-2.059l-1.287,-1.931l-1.417,0l0.387,-1.417l0.131,-0.901l0.384,-1.158l2.960,0.514l1.160,-0.900l0.643,-0.901l2.060,-0.386l0.515,-0.902l0.901,-0.515l-2.703,-2.703l5.407,-1.287l0.514,-0.516l3.218,0.773l3.990,1.931l7.596,5.406l5.020,0.258l2.447,0.257l0.644,1.288l1.930,-0.129l1.030,2.317l1.288,0.644l0.513,0.902l1.803,1.158l0.127,1.159l-0.256,0.900l0.387,0.901l0.772,0.644l0.386,0.901l0.387,0.644l0.771,0.644l0.772,-0.258l0.517,1.030l0.127,0.643l1.031,2.704l8.110,1.416l0.514,-0.644l1.159,1.931l-1.802,5.408l-7.981,2.702l-7.853,1.030l-2.445,1.159l-1.931,2.832l-1.287,0.515l-0.644,-0.901l-1.031,0.128l-2.574,-0.257l-0.514,-0.257l-3.090,0l-0.773,0.257l-1.158,-0.644l-0.645,1.288l0.258,1.158l1.158,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"SaudiArabia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Senegal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Senegal",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Serbia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M519.749,102.684l1.416,1.030l0.258,0.902l1.674,0.643l0.257,1.158l1.543,0.773l0.774,-0.644l0.771,0.386l-0.641,0.386l0.513,0.515l-0.772,0.644l0.259,0.902l1.415,1.158l-1.030,0.901l-0.515,0.772l0.256,0.386l-0.385,0.387l-1.288,0l-1.544,0.257l-1.545,0.515l-0.129,0.515l-0.385,0l-0.130,-1.030l-0.643,-0.257l-0.516,-0.773l-0.771,0.258l-0.129,-0.516l-1.287,1.288l0.258,0.901l-0.516,-0.128l-0.773,-0.902l-1.159,-0.515l0.258,-0.514l0.387,-1.545l0.900,-0.515l1.158,-0.387l0.389,-1.287l-1.289,-1.030l0.645,-1.159l-1.030,0l1.030,-1.029l-0.773,-0.772l-0.643,-1.031l2.060,-0.772l-1.672,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Serbia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SierraLeone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z";
}, function($ctx1) {$ctx1.fill(self,"SierraLeone",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Slovakia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,93.673l0.127,0.129l1.158,-0.386l1.289,1.030l1.672,-0.644l1.289,0.257l1.929,-0.386l2.577,1.030l-0.774,0.772l-0.513,1.030l-0.645,0.257l-2.832,-0.772l-0.900,0.129l-0.645,0.643l-1.287,0.387l-0.258,-0.258l-1.287,0.515l-1.158,0l-0.129,0.644l-2.318,0.257l-1.028,-0.257l-1.288,-0.772l-0.257,-0.903l0.127,-0.256l0.387,-0.644l1.288,0l0.900,-0.258l0,-0.257l0.517,-0.129l0.256,-0.643l0.644,0l0.385,-0.515l-0.774,0z";
}, function($ctx1) {$ctx1.fill(self,"Slovakia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SolomonIslands",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M901.944,255.23l0.772,0.903l-1.930,0l-1.031,-1.674l1.674,0.643l-0.515,-0.128zM900.786,252.784l-0.387,0.516l-2.060,-2.318l-0.514,-1.544l0.901,0l1.029,2.059l-1.031,-1.287zM898.597,253.557l-1.159,0.129l-1.544,-0.386l-0.643,-0.386l0.256,-1.031l1.674,0.387l0.900,0.644l-0.516,-0.643zM895.251,248.537l0.643,0.901l0.128,0.515l-2.060,-1.158l-1.543,-0.902l-1.031,-0.901l0.384,-0.258l1.290,0.644l-2.189,-1.159zM888.556,245.834l1.031,0.900l-0.516,0.129l-1.160,-0.515l-1.158,-1.159l0.129,-0.386l-1.674,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"SolomonIslands",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Somolia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M597.114,201.549l-1.287,1.674l-1.803,2.188l-2.316,0l-8.754,-3.218l-1.029,-0.901l-1.029,-1.287l-1.032,-1.545l0.645,-0.901l0.900,-1.416l0.902,0.515l0.516,1.030l1.286,1.158l1.288,0l2.575,-0.643l2.959,-0.387l2.319,-0.771l1.286,-0.259l1.029,-0.515l1.545,0l0,1.159l0,2.704l0,-1.415zM603.037,195.371l-0.258,1.545l0,1.415l-0.643,0.901l-0.773,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.576,2.059l-2.959,3.347l-0.644,1.415l-0.516,0.645l-1.931,-2.189l0.130,-10.169l2.188,-2.960l1.029,-0.644l1.803,0l2.318,-1.932l3.475,-0.129l7.722,-8.110l1.803,-2.188l1.287,-1.674l0,-1.415l0,-2.704l0,-1.159l0.903,-0.128l1.158,-0.387l1.416,-0.257l1.288,-0.900l1.028,0l-0.130,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Somolia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthAfrica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z";
}, function($ctx1) {$ctx1.fill(self,"SouthAfrica",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthKorea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M810.933,122.895l2.447,3.218l0.642,1.803l0,3.089l-1.029,1.416l-2.445,0.515l-2.190,1.159l-2.445,0.258l-0.258,-1.545l0.514,-1.932l-1.158,-2.833l1.931,-0.514l-1.802,-2.189l0.131,-0.257l1.285,0l1.029,-1.158l1.930,-0.129l1.033,-0.129l-0.385,0.772z";
}, function($ctx1) {$ctx1.fill(self,"SouthKorea",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Spain",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l0.129,-1.931l-1.029,-1.158l3.861,-1.932l3.219,0.515l3.604,0l2.960,0.387l2.189,-0.129l4.377,0.129l1.029,1.030l5.021,1.158l0.901,-0.514l3.089,1.158l3.090,-0.258l0.129,1.545l-2.574,1.802l-3.478,0.516l-0.127,0.900l-1.672,1.545l-1.031,2.189l1.031,1.544l-1.547,1.159l-0.642,1.803l-2.061,0.514l-1.802,2.060l-3.476,0l-2.574,0l-1.673,0.901l-1.031,1.030l-1.287,-0.129l-1.030,-1.030l-0.772,-1.545l-2.446,-0.385l-0.257,-0.902l1.030,-1.030l0.258,-0.644l-0.902,-0.900l0.772,-1.674l-1.030,-1.674l1.160,-0.256l0,-1.159l0.514,-0.387l0,-2.189l1.287,-0.643l-0.773,-1.416l-1.545,-0.128l-0.514,0.385l-1.545,0l-0.643,-1.287l-1.158,0.387l1.031,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Spain",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SriLanka",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M685.552,206.699l-0.387,2.832l-1.158,0.772l-2.317,0.643l-1.289,-2.187l-0.513,-3.863l1.285,-4.376l1.805,1.545l1.285,1.801l-1.289,-2.833z";
}, function($ctx1) {$ctx1.fill(self,"SriLanka",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sudan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Sudan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Suriname",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M311.337,210.946l3.219,0.517l0.257,-0.517l2.188,-0.257l2.833,0.774l-1.417,2.316l0.259,1.803l1.029,1.674l-0.386,1.157l-0.257,1.159l-0.772,1.158l-1.545,-0.515l-1.159,0.259l-1.158,-0.259l-0.259,0.773l0.516,0.514l-0.257,0.517l-1.546,-0.130l-1.545,-2.317l-0.385,-1.545l-0.902,0l-1.157,-1.931l0.514,-1.416l-0.129,-0.643l1.545,-0.772l-0.514,2.319z";
}, function($ctx1) {$ctx1.fill(self,"Suriname",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SvalbardJanMayen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M539.059,11.285l-3.991,1.416l-7.852,0.387l-7.854-0.515l-0.514-0.644l-3.863-0.128l-2.961-1.159l8.369-0.772l3.86,0.644l2.704-0.772l6.822,0.643L539.059,11.285zM505.976,12.314h-3.733l-1.546-0.901l-7.335,1.031l2.059,2.06l5.276,2.317l3.99,0.772l-2.314,0.9l5.791,1.675l3.219-0.129l1.287-2.189l2.316-0.515l1.545-2.06l6.693-1.031l-8.881-1.931l-3.347-1.03l-3.991,0.128L505.976,12.314zM531.851,17.207l-3.863-0.515l-1.158-1.03l-5.535,0.515l1.674,0.901l-1.932,0.643l4.765,0.645L531.851,17.207z";
}, function($ctx1) {$ctx1.fill(self,"SvalbardJanMayen",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Swaziland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Swaziland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sweden",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M525.026,49.905l-2.703,1.930l0.516,1.674l-4.377,2.060l-5.150,2.317l-1.930,3.861l1.930,1.932l2.576,1.415l-2.576,3.090l-2.704,0.643l-1.028,4.507l-1.545,2.445l-3.348,-0.257l-1.415,2.188l-3.218,0.129l-0.773,-2.575l-2.317,-3.090l-2.059,-3.732l1.158,-1.545l2.318,-1.931l0.900,-3.090l-1.803,-1.415l-0.127,-3.605l1.800,-2.446l2.705,0l0.903,-1.030l-1.031,-0.901l4.248,-3.862l2.703,-2.960l1.674,-1.931l2.702,0l0.644,-1.417l5.022,0.387l0.513,-1.803l1.673,-0.129l3.475,1.417l4.250,1.801l0.128,4.120l0.901,1.031l4.635,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Sweden",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Switzerland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.042,98.951l0.128,0.515l-0.385,0.644l1.160,0.514l1.416,0l-0.258,1.159l-1.158,0.386l-1.932,-0.257l-0.643,1.030l-1.288,0.129l-0.387,-0.516l-1.543,1.031l-1.287,0.128l-1.160,-0.643l-0.901,-1.159l-1.288,0.386l0,-1.158l1.932,-1.545l-0.130,-0.644l1.288,0.257l0.772,-0.515l2.317,0l0.515,-0.514l-2.832,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Switzerland",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Syria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M569.696,137.055l-5.278,2.833l-2.960,-1.031l0.256,-0.385l0,-1.160l0.643,-1.416l1.546,-1.029l-0.515,-1.031l-1.159,-0.128l-0.257,-2.059l0.644,-1.159l0.772,-0.643l0.643,-0.515l0.129,-1.545l0.902,0.514l2.960,-0.772l1.416,0.514l2.317,0l3.090,-1.028l1.416,0.128l3.090,-0.515l-1.416,1.673l-1.417,0.773l0.258,1.931l-1.029,3.218l6.051,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Syria",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Taiwan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M793.296,161.256l-1.672,4.378l-1.160,2.188l-1.414,-2.317l-0.260,-1.932l1.545,-2.702l2.189,-2.060l1.288,0.772l0.516,-1.673z";
}, function($ctx1) {$ctx1.fill(self,"Taiwan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tajikistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.587,118.519l-1.030,0.900l-2.961,-0.515l-0.257,1.545l2.961,-0.129l3.347,0.901l5.020,-0.514l0.773,2.573l0.772,-0.256l1.674,0.515l-0.129,1.158l0.515,1.416l-2.832,0l-1.802,-0.129l-1.674,1.159l-1.285,0.257l-0.904,0.643l-1.030,-0.900l0.259,-2.317l-0.901,-0.129l0.384,-0.772l-1.543,-0.645l-1.160,0.903l-0.256,1.157l-0.386,0.387l-1.674,-0.128l-0.773,1.287l-0.901,-0.515l-2.059,0.900l-0.773,-0.385l1.547,-2.703l-0.645,-2.060l-1.931,-0.644l0.643,-1.159l2.318,0.129l1.285,-1.417l0.775,-1.801l3.603,-0.644l-0.514,1.287l0.386,0.772l-1.158,0.127z";
}, function($ctx1) {$ctx1.fill(self,"Tajikistan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tanzania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z";
}, function($ctx1) {$ctx1.fill(self,"Tanzania",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Thailand",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M741.548,194.082l-2.445,-1.157l-2.188,0l0.385,-2.060l-2.446,0l-0.128,2.961l-1.545,3.990l-0.903,2.318l0.260,1.931l1.801,0.128l1.031,2.446l0.514,2.318l1.416,1.545l1.674,0.257l1.416,1.415l-0.901,1.159l-1.802,0.257l-0.129,-1.287l-2.188,-1.157l-0.516,0.385l-1.029,-1.029l-0.515,-1.288l-1.418,-1.544l-1.286,-1.287l-0.515,1.544l-0.514,-1.417l0.385,-1.672l0.773,-2.576l1.287,-2.832l1.545,-2.445l-1.158,-2.447l0.129,-1.287l-0.387,-1.545l-1.802,-2.060l-0.643,-1.416l1.029,-0.514l0.901,-2.318l-1.030,-1.802l-1.802,-1.931l-1.287,-2.317l1.158,-0.515l1.287,-2.960l1.803,-0.129l1.672,-1.159l1.544,-0.643l1.161,0.900l0.129,1.546l1.800,0.128l-0.642,2.832l0,2.446l2.832,-1.544l0.900,0.385l1.545,0l0.516,-1.030l2.060,0.258l2.059,2.189l0.129,2.574l2.187,2.446l-0.127,2.189l-0.902,1.288l-2.447,-0.387l-3.475,0.514l-1.801,2.189l-0.643,-3.217z";
}, function($ctx1) {$ctx1.fill(self,"Thailand",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "TimorLeste",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,-0.643l2.316,-0.644l1.934,-0.129l0.771,-0.257l1.029,0.257l-0.900,0.773l-2.834,1.158l-2.316,0.773l0,-0.773l0.258,0.515z";
}, function($ctx1) {$ctx1.fill(self,"TimorLeste",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Togo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Togo",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tunisia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Tunisia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Turkmenistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l-0.129,-2.188l-2.060,-0.128l-3.088,-2.317l-2.188,-0.387l-2.961,-1.288l-1.932,-0.257l-1.157,0.515l-1.803,-0.129l-1.932,1.546l-2.317,0.513l-0.515,-1.930l0.387,-2.832l-2.059,-0.901l0.644,-1.802l-1.804,-0.129l0.645,-2.318l2.574,0.644l2.316,-0.773l-1.931,-1.673l-0.772,-1.544l-2.187,0.643l-0.260,2.059l-0.900,-1.802l1.160,-0.900l3.090,-0.515l1.800,0.772l1.930,2.060l1.419,-0.128l2.959,0l-0.384,-1.417l2.315,-0.901l2.188,-1.545l3.735,1.416l0.256,2.188l1.030,0.515l2.832,-0.128l1.029,0.515l1.289,2.702l3.089,1.931l1.674,1.288l2.832,1.288l3.604,1.158l0,1.674l-0.902,-0.128l-1.285,-0.774l-0.387,1.030l-2.317,0.516l-0.515,2.188l-1.546,0.772l-2.058,0.386l-0.517,1.288l-2.059,0.257l2.832,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Turkmenistan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uganda",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l-2.961,0l-0.900,0.257l-1.547,0.900l-0.643,-0.256l0,-2.061l0.643,-1.028l0.131,-2.189l0.514,-1.287l1.029,-1.416l1.031,-0.643l0.901,-1.031l-1.159,-0.258l0.258,-3.217l1.029,-0.774l1.802,0.644l2.189,-0.644l1.545,0l1.416,-1.028l1.287,1.930l1.031,2.704l0.771,1.930l-1.029,1.931l-1.931,1.674l0,0.772l0,2.832l5.407,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Uganda",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ukraine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.901,86.593l0.901,0.129l0.773,-0.644l0.772,0.128l2.833,-0.256l1.673,1.544l-0.643,0.515l0.258,0.901l2.058,0.129l1.030,1.159l-0.129,0.514l3.476,0.901l2.059,-0.386l1.674,1.287l1.545,0l3.990,0.902l0,0.772l-1.029,1.415l0.513,1.417l-0.384,0.901l-2.575,0.258l-1.417,0.772l-0.128,1.159l-2.060,0.128l-1.801,0.902l-2.576,0.128l-2.317,1.030l0.129,1.674l1.416,0.644l2.704,-0.130l-0.516,0.902l-2.959,0.515l-3.606,1.544l-1.544,-0.515l0.643,-1.286l-2.962,-0.774l0.389,-0.514l2.573,-0.901l-0.772,-0.645l-4.120,-0.643l-0.257,-1.029l-2.446,0.386l-1.030,1.416l-2.060,2.059l-1.158,-0.515l-1.287,0.386l-1.287,-0.386l0.773,-0.386l0.385,-0.901l0.774,-0.901l-0.129,-0.386l0.513,-0.258l0.258,0.386l1.545,0.129l0.773,-0.257l-0.517,-0.258l0.131,-0.386l-0.902,-0.772l-0.386,-1.030l-1.030,-0.515l0.257,-0.901l-1.287,-0.644l-1.029,-0.128l-2.059,-0.903l-1.675,0.259l-0.644,0.386l-1.158,0l-0.773,0.644l-1.931,0.257l-0.899,0.515l-1.289,-0.772l-1.673,0l-1.674,-0.258l-1.159,0.515l-0.256,-0.643l-1.415,-0.773l0.513,-1.030l0.774,-0.772l0.515,0.257l-0.646,-1.287l2.447,-2.189l1.287,-0.385l0.257,-0.773l-1.286,-2.317l1.286,-0.129l1.417,-0.644l2.187,-0.129l2.706,0.258l2.959,0.644l2.189,0l0.900,0.386l1.030,-0.386l0.772,0.643l2.446,-0.129l1.031,0.258l0.128,-1.416l0.900,-0.643l-2.318,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Ukraine",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedArabEmirates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M604.196,161.643l0.514,-0.129l0,0.772l2.188,-0.386l2.189,0l1.672,0.129l1.803,-1.802l2.058,-1.802l1.674,-1.673l0.518,0.900l0.385,2.189l-1.417,0l-0.258,1.802l0.517,0.386l-1.159,0.515l-0.129,1.029l-0.773,1.159l0,1.030l-0.514,0.644l-8.110,-1.416l-1.031,-2.704l0.127,0.643z";
}, function($ctx1) {$ctx1.fill(self,"UnitedArabEmirates",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedStates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M284.434,106.546l-2.704,0.772l-2.575,0.644l-3.089,1.673l-1.287,1.417l-0.258,0.386l-0.127,1.545l0.900,1.415l1.159,0l-0.259,-0.900l0.773,0.515l-0.257,0.772l-1.803,0.515l-1.286,-0.130l-1.931,0.517l-1.159,0.128l-1.673,0.128l-2.060,0.644l3.733,-0.387l0.128,0l0.773,0.515l-3.733,0.773l-1.802,0l0.129,-0.257l0.128,-0.644l-0.900,1.416l0.643,0l-0.515,2.060l-1.931,2.060l-0.257,-0.773l-0.516,-0.129l-0.643,-0.643l-0.129,0l-0.128,0l0.514,1.416l0.773,1.416l0.129,0.257l-1.030,0.901l-1.545,2.188l-0.258,-0.128l1.030,-1.802l-1.416,-1.287l-0.128,-2.060l-0.387,0.901l0,2.446l-1.673,-0.901l1.802,1.544l0.515,1.417l0.772,1.674l0.387,2.703l-1.803,1.930l-2.574,1.030l-2.318,1.417l-0.901,0.128l-1.158,1.931l-2.317,1.673l-2.832,1.288l-1.158,2.060l-0.516,1.415l0.387,2.061l1.030,2.187l1.159,2.061l0,1.029l1.157,2.703l0.129,2.447l-0.514,2.316l-1.159,0.516l-1.287,-0.386l-0.386,-1.159l-1.031,-0.644l-1.545,-2.317l-1.287,-1.931l-0.257,-1.287l0.515,-1.674l-0.643,-1.544l-1.803,-1.545l-1.416,-1.030l-3.089,1.158l-0.644,-0.772l-2.574,-1.287l-2.962,0.386l-2.445,-0.258l-1.674,0.515l-1.544,0l-0.258,1.160l0.772,1.543l-3.605,0.130l-2.316,-0.516l-1.545,-0.514l-2.059,-0.387l-2.318,-0.128l-2.317,0.643l-2.446,1.931l-2.702,1.158l-1.417,1.289l-0.644,1.287l0,1.802l0.129,1.287l0.515,0.901l-1.030,0.129l-1.931,-0.643l-2.188,-0.773l-0.772,-1.287l-0.515,-1.931l-1.545,-1.545l-1.030,-1.545l-1.288,-1.802l-1.930,-1.159l-2.189,0.130l-1.674,2.058l-2.316,-0.772l-1.288,-0.772l-0.772,-1.545l-0.900,-1.416l-1.545,-1.159l-1.416,-0.901l-0.902,-0.900l-4.633,0l-0.129,1.158l-2.060,0l-5.407,0l-6.178,-1.931l-3.992,-1.288l0.258,-0.515l-3.475,0.259l-3.090,0.256l-0.258,-1.029l-1.159,-1.416l-2.831,-1.545l-1.158,-0.129l-1.160,-0.900l-2.059,-0.130l-0.772,-0.515l-0.258,-1.416l-2.702,-2.704l-2.189,-3.732l0.128,-0.644l-1.287,-0.901l-2.059,-2.317l-0.386,-2.188l-1.417,-1.417l0.644,-2.189l-0.129,-2.317l-0.901,-1.544l0.901,-2.960l0.129,-2.962l0.514,-4.119l-0.771,-2.188l-0.387,-2.575l3.734,0.515l1.158,2.060l0.644,-0.773l-0.387,-2.188l-1.287,-2.189l15.962,0l2.704,0l32.182,0l18.536,0l5.536,0l0,-1.030l0.901,0l0.516,1.417l0.772,0.514l1.930,0.129l2.704,0.515l2.703,0.773l2.188,-0.387l3.219,0.773l0.385,0l0.515,0l0.258,-0.129l0.386,-0.129l0.387,-0.128l0.772,-0.258l0.643,-0.129l0.644,0.129l0.386,0.258l0.258,0l0.386,0.257l0.773,0.257l0.772,0.258l0.772,0.386l0.643,0.257l0.387,0.130l0.258,0.128l0.514,0.128l0.515,0.258l0.515,0.258l0.515,0.128l0.515,0.257l0.515,0.258l0.515,0.129l0.514,0.257l0.130,0.386l0.128,0.387l0.386,0.257l0.257,0l0.902,0l0.257,0l0,0.129l0,0.129l0,0.128l0,0.258l0.129,0l0.129,0.257l0.128,0l0.258,0.129l0.386,0.128l0.258,-0.128l0.128,0l0.258,0.258l0.128,0l0,0.129l-0.386,0.515l0.516,0.257l0.643,0.257l0.644,0.258l0.514,0.128l0.515,0.386l0.128,0.387l0,0.257l0.130,0.515l0.128,0.386l0.129,0.515l0.130,0.515l0.127,0.515l0,0.386l0.129,0.515l0.258,0.772l-0.129,0.258l-0.385,0.515l-0.259,0.515l0,0.129l0,0.128l-0.514,0.516l-0.772,1.030l-0.387,0.385l-0.257,0.515l0,0.257l0,0.130l0.257,0.257l0.387,0.257l0.514,0.129l0.644,0l0.643,-0.258l0.644,-0.257l0.644,-0.258l0.643,-0.385l0.644,-0.258l0.645,-0.129l0.900,-0.128l0.387,0l0.128,0l0.644,-0.129l0.643,-0.258l0.643,-0.257l0.902,-0.257l0.772,-0.258l0.386,-0.128l0.258,-0.130l0,-0.128l0,-0.258l-0.387,-0.772l0,-0.129l-0.257,-0.386l0.386,-0.129l0.515,-0.257l0.258,0l0.772,-0.128l0.643,0l0.902,0l0.772,0.128l0.901,0l0.516,0l0.643,0l0.257,-0.515l0.387,-0.386l0.256,-0.258l0.387,-0.258l2.703,-1.801l1.287,-0.516l4.120,0l4.891,0l0.258,-0.772l0.901,0l1.158,-0.515l0.902,-1.159l0.901,-2.187l2.060,-1.932l0.900,0.644l1.804,-0.386l1.157,0.772l0,3.605l1.803,1.545l0,-1.158zM16.808,64.322l2.059,0.257l0.258,1.031l-1.545,0.386l-1.802,-0.516l-1.673,-0.772l-2.703,0.386zM52.465,70.759l1.803,0.257l1.157,0.774l-2.317,1.286l-2.703,1.029l-1.416,-0.643l-0.385,-1.288l2.445,-0.901l-1.416,0.514zM85.42,39.22l0,9.913l0,15.446l2.574,0l2.704,0.774l1.802,1.157l2.445,1.803l2.575,-1.545l2.703,-0.902l1.545,1.417l1.802,1.159l2.446,1.159l1.674,1.930l2.703,3.090l4.634,1.673l0,1.802l-1.417,1.287l-1.544,-1.029l-2.316,-0.901l-0.773,-2.318l-3.476,-2.189l-1.415,-2.573l-2.576,-0.129l-4.376,-0.129l-3.090,-0.773l-5.535,-2.703l-2.702,-0.514l-4.636,-1.031l-3.733,0.259l-5.278,-1.288l-3.217,-1.159l-2.962,0.643l0.515,1.804l-1.544,0.257l-3.090,0.515l-2.318,0.900l-2.961,0.644l-0.385,-1.673l1.159,-2.575l2.831,-0.900l-0.771,-0.645l-3.347,1.545l-1.802,1.802l-3.991,1.931l2.059,1.288l-2.574,1.931l-2.961,1.030l-2.704,0.900l-0.643,1.159l-4.119,1.416l-0.901,1.288l-3.090,1.158l-1.931,-0.258l-2.445,0.773l-2.832,0.901l-2.189,0.902l-4.634,0.772l-0.387,-0.516l2.962,-1.158l2.574,-0.901l2.832,-1.417l3.347,-0.385l1.416,-1.030l3.734,-1.673l0.514,-0.516l2.059,-0.901l0.386,-2.059l1.418,-1.545l-3.091,0.773l-0.901,-0.516l-1.415,1.031l-1.803,-1.417l-0.644,1.030l-1.029,-1.417l-2.704,1.160l-1.673,0l-0.257,-1.674l0.514,-0.901l-1.673,-1.029l-3.604,0.513l-2.189,-1.287l-1.931,-0.643l0,-1.545l-2.059,-1.030l1.029,-1.673l2.188,-1.416l1.030,-1.416l2.189,-0.129l1.802,0.386l2.189,-1.287l1.930,0.257l2.059,-0.901l-0.513,-1.158l-1.546,-0.515l2.059,-1.030l-1.673,0l-2.832,0.515l-0.772,0.643l-2.188,-0.514l-3.863,0.257l-3.861,-0.643l-1.158,-1.159l-3.476,-1.545l3.862,-1.030l6.050,-1.416l2.188,0l-0.386,1.416l5.665,-0.129l-2.189,-1.673l-3.347,-1.031l-1.931,-1.286l-2.574,-1.158l-3.605,-0.901l1.417,-1.417l4.762,-0.129l3.475,-1.158l0.644,-1.288l2.703,-1.287l2.704,-0.386l5.021,-1.159l2.574,0.128l4.119,-1.415l3.990,0.643l2.060,1.159l1.159,-0.515l4.505,0.128l-0.128,0.644l4.119,0.516l2.703,-0.258l5.664,0.773l5.278,0.257l2.060,0.386l3.604,-0.514l3.991,0.900l-2.961,-0.387zM2.647,55.182l1.673,0.515l1.674,-0.258l2.189,0.644l2.574,0.386l-0.128,0.258l-2.061,0.644l-2.059,-0.644l-1.030,-0.514l-2.446,0.128l-0.643,-0.128l-0.257,1.031zM45.256,175.546l0,-0.773l-0.385,-1.029l0.643,-0.643l-0.258,-0.516l0.129,-0.128l0,-0.129l1.803,0.773l0.256,0.385l0,0.258l0.258,0.129l0.129,0.128l0.385,0.387l-0.643,0.514l-0.772,0.129l-0.515,0.515l-0.258,0.387l0.772,0.387zM43.067,170.01l-0.385,0.258l-1.158,-0.128l0.128,-0.387l-1.415,-0.257zM44.999,170.912l0,0.257l-0.258,0.129l-0.900,0.128l-0.130,-0.514l-0.386,0l-0.258,-0.387l0.130,-0.128l0.257,-0.129l0.257,0.385l0.516,-0.128l-0.772,-0.387zM39.335,169.496l-0.515,-0.643l0.386,-0.130l0.515,-0.257l0.386,0.643l0.257,0l0.258,0.516l-0.515,0l-0.257,-0.129l-0.129,0l0.386,0zM34.829,167.564l0.129,-0.256l0.386,-0.259l0.643,0.130l0.130,0.129l-0.130,0.514l-0.256,0.258l-0.516,-0.129l0.386,0.387z";
}, function($ctx1) {$ctx1.fill(self,"UnitedStates",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uruguay",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l1.674,-0.257l2.704,2.059l1.030,-0.130l2.702,1.805l2.189,1.414l1.545,1.804l-1.158,1.286l0.772,1.545l-1.159,1.674l-3.089,1.545l-2.060,-0.515l-1.416,0.257l-2.447,-1.157l-1.801,0.128l-1.674,-1.545l0.129,-1.674l0.643,-0.643l0,-2.705l0.644,-2.702l-0.772,2.189z";
}, function($ctx1) {$ctx1.fill(self,"Uruguay",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uzbekistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M644.487,126.371l0,-1.674l-3.604,-1.158l-2.832,-1.288l-1.674,-1.288l-3.089,-1.931l-1.289,-2.702l-1.029,-0.515l-2.832,0.128l-1.030,-0.515l-0.256,-2.188l-3.735,-1.416l-2.188,1.545l-2.315,0.901l0.384,1.417l-2.959,0l-0.130,-9.914l6.951,-1.544l0.515,0.129l0.644,0.386l1.159,0.515l2.317,1.030l2.189,1.029l2.574,2.446l3.219,-0.385l4.633,-0.259l3.219,2.060l-0.258,2.703l1.287,0l0.644,2.189l3.347,0.128l0.771,1.288l1.030,-0.129l1.160,-1.931l3.603,-1.802l1.547,-0.515l0.770,0.258l-2.317,1.801l2.061,1.030l1.929,-0.772l3.090,1.416l-3.346,1.932l-2.060,-0.257l-1.158,0.127l-0.386,-0.772l0.514,-1.287l-3.603,0.644l-0.775,1.801l-1.285,1.417l-2.318,-0.129l-0.643,1.159l1.931,0.644l0.645,2.060l-1.547,2.703l-2.059,-0.515l1.416,0z";
}, function($ctx1) {$ctx1.fill(self,"Uzbekistan",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vanuatu",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M915.718,269.777l1.674,1.545l-0.901,0.387l-0.902,-1.160l-0.129,0.772zM914.56,269.133l-0.387,-0.643l0,-2.060l1.287,0.773l0.387,2.189l-0.774,-0.387l0.513,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Vanuatu",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Venezuela",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M273.105,195.242l-0.128,0.644l-1.545,0.257l0.902,1.287l-0.129,1.416l-1.160,1.545l1.030,2.188l1.159,-0.257l0.643,-1.931l-0.900,-0.901l-0.129,-2.060l3.346,-1.159l-0.385,-1.158l1.029,-0.901l0.902,1.931l1.930,0l1.804,1.545l0,0.902l2.444,0l2.962,-0.259l1.544,1.159l2.060,0.387l1.416,-0.902l0.128,-0.644l3.218,-0.128l3.348,-0.130l-2.317,0.773l0.900,1.288l2.189,0.257l2.060,1.288l0.386,2.187l1.417,-0.128l1.028,0.645l-2.187,1.672l-0.130,0.902l0.902,1.029l-0.644,0.516l-1.673,0.385l0,1.287l-0.772,0.772l1.930,2.061l0.257,0.772l-0.900,1.030l-3.090,0.902l-1.930,0.515l-0.774,0.643l-2.059,-0.773l-2.060,-0.257l-0.514,0.257l1.158,0.643l0,1.804l0.387,1.672l2.188,0.259l0.128,0.514l-1.931,0.772l-0.257,1.159l-1.159,0.515l-1.930,0.644l-0.515,0.772l-2.060,0.129l-1.544,-1.417l-0.773,-2.703l-0.772,-0.901l-1.031,-0.644l1.416,-1.287l-0.127,-0.644l-0.773,-0.772l-0.516,-1.802l0.259,-1.931l0.513,-0.901l0.517,-1.416l-0.902,-0.515l-1.545,0.386l-1.931,-0.129l-1.158,0.258l-1.802,-2.317l-1.546,-0.387l-3.475,0.258l-0.644,-0.901l-0.772,-0.257l0,-0.516l0.257,-1.030l-0.128,-1.028l-0.644,-0.645l-0.387,-1.287l-1.415,-0.129l0.772,-1.545l0.387,-1.931l0.772,-1.030l1.029,-0.771l0.644,-1.289l-1.802,0.514z";
}, function($ctx1) {$ctx1.fill(self,"Venezuela",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vietnam",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M756.353,168.853l-3.606,2.316l-2.316,2.575l-0.514,1.930l2.059,2.832l2.445,3.476l2.445,1.675l1.674,2.188l1.287,5.020l-0.385,4.634l-2.318,1.802l-3.090,1.803l-2.187,2.188l-3.348,2.574l-0.902,-1.801l0.644,-1.803l-1.929,-1.544l2.316,-1.030l2.834,-0.258l-1.160,-1.674l4.506,-2.059l0.386,-3.218l-0.644,-1.803l0.387,-2.702l-0.645,-1.803l-2.061,-1.931l-1.673,-2.318l-2.188,-3.217l-3.219,-1.674l0.774,-0.902l1.672,-0.772l-1.028,-2.317l-3.347,0l-1.159,-2.446l-1.544,-2.188l1.416,-0.644l2.187,0l2.576,-0.257l2.317,-1.416l1.287,1.030l2.445,0.515l-0.387,1.545l1.289,1.029l-2.704,-0.645z";
}, function($ctx1) {$ctx1.fill(self,"Vietnam",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "WesternSahara",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z";
}, function($ctx1) {$ctx1.fill(self,"WesternSahara",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Yemen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M608.315,182.111l-1.931,0.772l-0.516,1.159l-0.127,0.901l-2.704,1.159l-4.249,1.287l-2.445,1.802l-1.158,0.258l-0.774,-0.258l-1.673,1.159l-1.673,0.515l-2.189,0.128l-0.772,0.130l-0.515,0.772l-0.772,0.128l-0.386,0.774l-1.287,-0.130l-0.903,0.387l-1.930,-0.129l-0.644,-1.545l0.129,-1.546l-0.516,-0.772l-0.513,-1.930l-0.772,-1.158l0.514,-0.129l-0.258,-1.159l0.388,-0.515l-0.130,-1.288l1.158,-0.772l-0.258,-1.158l0.645,-1.288l1.158,0.644l0.773,-0.257l3.090,0l0.514,0.257l2.574,0.257l1.031,-0.128l0.644,0.901l1.287,-0.515l1.931,-2.832l2.445,-1.159l7.853,-1.030l2.061,4.378l-0.900,-1.930z";
}, function($ctx1) {$ctx1.fill(self,"Yemen",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zambia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Zambia",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zimbabwe",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.";
}, function($ctx1) {$ctx1.fill(self,"Zimbabwe",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "countries",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "BosniaandHerzegovina", "Botswana", "Brazil", "BruneiDarussalam", "Bulgaria", "BurkinaFaso", "Burundi", "Cambodia", "Cameroon", "Canada", "CentralAfricanRepublic", "Chad", "Chile", "China", "Colombia", "Congo", "CostaRica", "Croatia", "Cuba", "Cyprus", "CzechRepubilc", "DemocraticRepublicCongo", "Denmark", "Djibouti", "DominicanRepublic", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Eritrea", "Estonia", "Ethiopia", "FalklandIslandsMalvinas", "Fiji", "Finland", "France", "FrenchGuyana", "GM", "Gabon", "Georgia", "Germany", "Ghana", "GreatBritian", "Greece", "Greenland", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "IvoryCoast", "Jamacia", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Mali", "Mauritania", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique", "MyanmarBurma", "Nambia", "Nepal", "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "NorthKorea", "Norway", "Noumea", "Oman", "Pakistan", "Palestine", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Phillipines", "Poland", "Portugal", "PuertoRico", "Qatar", "RepublicofMacedonia", "RepublicofTurkey", "Romania", "Russia", "Rwanda", "SaudiArabia", "Senegal", "Serbia", "SierraLeone", "Slovakia", "SolomonIslands", "Somolia", "SouthAfrica", "SouthKorea", "Spain", "SriLanka", "Sudan", "Suriname", "SvalbardJanMayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "TimorLeste", "Togo", "Tunisia", "Turkmenistan", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "WesternSahara", "Yemen", "Zambia", "Zimbabwe"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"countries",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._white();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROSVGPath.klass)})},
messageSends: ["white"]}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
fn: function (aPathString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._path_(aPathString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"path:",{aPathString:aPathString},smalltalk.ROSVGPath.klass)})},
messageSends: ["path:", "new"]}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "southAmerica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Argentina", "Brazil", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"southAmerica",{},smalltalk.ROSVGPath.klass)})},
messageSends: []}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._countries();
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.ROSVGPath.klass)})},
messageSends: ["countries"]}),
smalltalk.ROSVGPath.klass);


smalltalk.addClass('ROBox', smalltalk.ROShape, ['borderColor', 'borderWidth'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColorFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@borderColor"])._roValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColorFor:",{element:element},smalltalk.ROBox)})},
messageSends: ["roValue:"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidthFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@borderWidth"])._roValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidthFor:",{element:element},smalltalk.ROBox)})},
messageSends: ["roValue:"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (15);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
messageSends: []}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
self["@borderColor"]=_st(self._class())._defaultBorderColor();
self["@borderWidth"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)})},
messageSends: ["initialize", "defaultSize", "defaultBorderColor", "class"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._rect_y_width_height_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self._widthFor_(anElement))._max_(self._defaultSize()),_st(self._heightFor_(anElement))._max_(self._defaultSize()));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
messageSends: ["rect:y:width:height:", "x", "position", "y", "max:", "defaultSize", "widthFor:", "heightFor:"]}),
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
_st($1)._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
_st($1)._attr_value_("stroke-width",self._borderWidth());
$2=_st($1)._attr_value_("stroke",_st(self._borderColor())._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
messageSends: ["attr:with:", "x", "position", "y", "widthFor:", "heightFor:", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"]}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)});},
messageSends: []}),
smalltalk.ROBox);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBorderColor",{},smalltalk.ROBox.klass)})},
messageSends: ["black"]}),
smalltalk.ROBox.klass);


smalltalk.addClass('ROBorder', smalltalk.ROBox, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._borderColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROBorder)})},
messageSends: ["borderColor"]}),
smalltalk.ROBorder);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._borderColor_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROBorder)})},
messageSends: ["borderColor:"]}),
smalltalk.ROBorder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROBorder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st($Color())._white();
self["@borderColor"]=_st(self._class())._defaultColor();
self["@borderWidth"]=_st(self._class())._defaultBorderWidth();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBorder)})},
messageSends: ["initialize", "white", "defaultColor", "class", "defaultBorderWidth"]}),
smalltalk.ROBorder);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBorderColor",{},smalltalk.ROBorder.klass)})},
messageSends: ["black"]}),
smalltalk.ROBorder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"defaultBorderWidth",{},smalltalk.ROBorder.klass)})},
messageSends: []}),
smalltalk.ROBorder.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._defaultBorderColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROBorder.klass)})},
messageSends: ["defaultBorderColor"]}),
smalltalk.ROBorder.klass);


smalltalk.addClass('ROEllipse', smalltalk.ROShape, ['radius', 'borderWidth', 'borderColor'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{anInteger:anInteger},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._radius()).__star((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROEllipse)})},
messageSends: ["*", "radius"]}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "defaultRadius", "*", "black"]}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._circle_y_r_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROEllipse)})},
messageSends: ["circle:y:r:", "x", "position", "y", "radius"]}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@radius"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"radius:",{anInteger:anInteger},smalltalk.ROEllipse)})},
messageSends: []}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._radius_(_st(anInteger).__slash((2)));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{anInteger:anInteger},smalltalk.ROEllipse)})},
messageSends: ["radius:", "/"]}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
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
messageSends: ["attr:with:", "+", "radius", "x", "position", "y", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"]}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._radius()).__star((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROEllipse)})},
messageSends: ["*", "radius"]}),
smalltalk.ROEllipse);



smalltalk.addClass('RONullShape', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:for:",{canvas:canvas,anElement:anElement},smalltalk.RONullShape)})},
messageSends: []}),
smalltalk.RONullShape);

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

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.RONullShape)})},
messageSends: []}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
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
messageSends: ["ifTrue:", "value:", "error:"]}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapesDetect:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Not found");
return self}, function($ctx1) {$ctx1.fill(self,"shapesDetect:",{aBlock:aBlock},smalltalk.RONullShape)})},
messageSends: ["error:"]}),
smalltalk.RONullShape);



smalltalk.addClass('ROPath', smalltalk.ROShape, ['path', 'borderColor', 'borderWidth'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROPath)})},
messageSends: []}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROPath)})},
messageSends: []}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "path:", "defaultBorderColor", "class", "defaultColor"]}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._path_(self["@path"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROPath)})},
messageSends: ["path:"]}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.ROPath)})},
messageSends: []}),
smalltalk.ROPath);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
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
messageSends: ["transform:", ",", "y", "position", "x", "attr:with:", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"]}),
smalltalk.ROPath);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultBorderColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBorderColor",{},smalltalk.ROPath.klass)})},
messageSends: ["black"]}),
smalltalk.ROPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._white();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROPath.klass)})},
messageSends: ["white"]}),
smalltalk.ROPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._path_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.ROPath.klass)})},
messageSends: ["path:", "new"]}),
smalltalk.ROPath.klass);


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
selector: "raisedTo:",
fn: function (exponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.pow( self , exponent ) ;
return self}, function($ctx1) {$ctx1.fill(self,"raisedTo:",{exponent:exponent},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{aBlock:aBlock},smalltalk.Number)});},
messageSends: []}),
smalltalk.Number);

