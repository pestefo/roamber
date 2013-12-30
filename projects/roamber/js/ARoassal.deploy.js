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
return smalltalk.withContext(function($ctx1) { 
_st(self._paper())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROView)})},
messageSends: ["clear", "paper"]}),
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

