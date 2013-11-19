smalltalk.addPackage('Graph-ET-Axis');
smalltalk.addClass('GETAbstractAxisDecorator', smalltalk.Object, ['axis'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "axis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@axis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"axis",{},smalltalk.GETAbstractAxisDecorator)})},
messageSends: []}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "axis:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@axis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"axis:",{anObject:anObject},smalltalk.GETAbstractAxisDecorator)})},
messageSends: []}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:at:",
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus((0).__at(_st(_st(labelElement)._height()).__slash((2)))));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:at:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["elementOn:", "translateTo:", "-", "@", "/", "height", "add:", "axis"]}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:atBottomOf:",
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus(_st(_st(_st(labelElement)._width()).__slash((2))).__at((0))));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:atBottomOf:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["elementOn:", "translateTo:", "-", "@", "/", "width", "add:", "axis"]}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:atLeftOf:",
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus(_st(_st(labelElement)._width()).__at(_st(_st(labelElement)._height()).__slash((2)))));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:atLeftOf:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["elementOn:", "translateTo:", "-", "@", "/", "height", "width", "add:", "axis"]}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:atTopOf:",
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus((0).__at(_st(labelElement)._height())));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:atTopOf:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["elementOn:", "translateTo:", "-", "@", "height", "add:", "axis"]}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLineFrom:to:",
fn: function (startingPoint,endingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._createLineFrom_to_color_(startingPoint,endingPoint,_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"createLineFrom:to:",{startingPoint:startingPoint,endingPoint:endingPoint},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["createLineFrom:to:color:", "defaultColor", "class"]}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLineFrom:to:color:",
fn: function (startingPoint,endingPoint,aColor){
var self=this;
var origin,end,edge;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($ROElement())._new();
_st($1)._translateTo_(startingPoint);
$2=_st($1)._size_((0));
origin=$2;
$3=_st($ROElement())._new();
_st($3)._translateTo_(endingPoint);
$4=_st($3)._size_((0));
end=$4;
edge=_st($ROEdge())._from_to_(origin,end);
$5=_st($ROLine())._new();
_st($5)._color_(aColor);
$6=_st($5)._yourself();
_st(edge).__plus($6);
$7=self._axis();
_st($7)._add_(origin);
_st($7)._add_(end);
$8=_st($7)._add_(edge);
return self}, function($ctx1) {$ctx1.fill(self,"createLineFrom:to:color:",{startingPoint:startingPoint,endingPoint:endingPoint,aColor:aColor,origin:origin,end:end,edge:edge},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["translateTo:", "new", "size:", "from:to:", "+", "color:", "yourself", "add:", "axis"]}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis},smalltalk.GETAbstractAxisDecorator)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractAxisDecorator);


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
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.GETAbstractAxisDecorator.klass)})},
messageSends: ["black"]}),
smalltalk.GETAbstractAxisDecorator.klass);


smalltalk.addClass('GETBaseLineDecorator', smalltalk.GETAbstractAxisDecorator, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._axis_(anAxis);
self._createLineFrom_to_(_st(self._axis())._start(),_st(self._axis())._end());
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis},smalltalk.GETBaseLineDecorator)})},
messageSends: ["axis:", "createLineFrom:to:", "start", "axis", "end"]}),
smalltalk.GETBaseLineDecorator);



smalltalk.addClass('GETRegularLabelDecorator', smalltalk.GETAbstractAxisDecorator, ['numberOfLabels', 'valueFormater'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
fn: function (anAxis){
var self=this;
var runningPosition,runningValue,deltaValue,deltaPixels,labelAsNumber;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._axis_(anAxis);
runningPosition=_st(self._axis())._start();
runningValue=_st(self._axis())._runningValue();
deltaPixels=_st(_st(_st(self._axis())._end()).__minus(_st(self._axis())._start())).__slash(self._numberOfLabels());
deltaValue=_st(_st(_st(self._axis())._minValue()).__minus(_st(self._axis())._maxValue())).__slash(self._numberOfLabels());
_st(_st(self._numberOfLabels()).__plus((1)))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
labelAsNumber=self._getCustomizedValue_(runningValue);
labelAsNumber;
$1=_st(_st(deltaPixels)._x()).__eq((0));
if(smalltalk.assert($1)){
self._createLabel_atLeftOf_(labelAsNumber,runningPosition);
} else {
self._createLabel_atBottomOf_(labelAsNumber,runningPosition);
};
runningPosition=_st(runningPosition).__plus(deltaPixels);
runningPosition;
runningValue=_st(self._axis())._nextFrom_by_(runningValue,deltaValue);
return runningValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis,runningPosition:runningPosition,runningValue:runningValue,deltaValue:deltaValue,deltaPixels:deltaPixels,labelAsNumber:labelAsNumber},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["axis:", "start", "axis", "runningValue", "/", "numberOfLabels", "-", "end", "maxValue", "minValue", "timesRepeat:", "getCustomizedValue:", "ifTrue:ifFalse:", "createLabel:atLeftOf:", "createLabel:atBottomOf:", "=", "x", "+", "nextFrom:by:"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatFloat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._useValueFormater_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v)._asFloat();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"formatFloat",{},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["useValueFormater:", "asFloat"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._useValueFormater_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v)._rounded())._asInteger();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"formatInteger",{},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["useValueFormater:", "asInteger", "rounded"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatTruncatedFloat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._formatTruncatedFloatBy_((2));
return self}, function($ctx1) {$ctx1.fill(self,"formatTruncatedFloat",{},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["formatTruncatedFloatBy:"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatTruncatedFloatBy:",
fn: function (nbOfDecimal){
var self=this;
var shift;
return smalltalk.withContext(function($ctx1) { 
shift=(10)._raisedTo_(nbOfDecimal);
self._useValueFormater_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(v).__star(shift))._asInteger()).__slash(shift))._asFloat();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"formatTruncatedFloatBy:",{nbOfDecimal:nbOfDecimal,shift:shift},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["raisedTo:", "useValueFormater:", "asFloat", "/", "asInteger", "*"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "getCustomizedValue:",
fn: function (runningValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@valueFormater"])._value_(runningValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getCustomizedValue:",{runningValue:runningValue},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["value:"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETRegularLabelDecorator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@numberOfLabels"]=_st(self._class())._defaultNumberOfLabels();
self._formatTruncatedFloat();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETRegularLabelDecorator)})},
messageSends: ["initialize", "defaultNumberOfLabels", "class", "formatTruncatedFloat"]}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLabels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@numberOfLabels"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfLabels",{},smalltalk.GETRegularLabelDecorator)})},
messageSends: []}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLabels:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numberOfLabels"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"numberOfLabels:",{anObject:anObject},smalltalk.GETRegularLabelDecorator)})},
messageSends: []}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "useValueFormater:",
fn: function (aOneArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@valueFormater"]=aOneArg;
return self}, function($ctx1) {$ctx1.fill(self,"useValueFormater:",{aOneArg:aOneArg},smalltalk.GETRegularLabelDecorator)})},
messageSends: []}),
smalltalk.GETRegularLabelDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultNumberOfLabels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4);
}, function($ctx1) {$ctx1.fill(self,"defaultNumberOfLabels",{},smalltalk.GETRegularLabelDecorator.klass)})},
messageSends: []}),
smalltalk.GETRegularLabelDecorator.klass);


smalltalk.addClass('GETRegularTickDecorator', smalltalk.GETAbstractAxisDecorator, ['numberOfTicks'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
fn: function (anAxis){
var self=this;
var runningPosition,delta,tickDelta;
return smalltalk.withContext(function($ctx1) { 
self._axis_(anAxis);
runningPosition=_st(self._axis())._start();
delta=_st(_st(_st(self._axis())._end()).__minus(_st(self._axis())._start())).__slash(self._numberOfTicks());
tickDelta=_st(self._axis())._delta();
_st(_st(self._numberOfTicks()).__plus((1)))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
self._createLineFrom_to_(_st(runningPosition).__minus(tickDelta),_st(runningPosition).__plus(tickDelta));
runningPosition=_st(runningPosition).__plus(delta);
return runningPosition;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis,runningPosition:runningPosition,delta:delta,tickDelta:tickDelta},smalltalk.GETRegularTickDecorator)})},
messageSends: ["axis:", "start", "axis", "/", "numberOfTicks", "-", "end", "delta", "timesRepeat:", "createLineFrom:to:", "+"]}),
smalltalk.GETRegularTickDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETRegularTickDecorator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@numberOfTicks"]=_st(self._class())._defaultNumberOfTicks();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETRegularTickDecorator)})},
messageSends: ["initialize", "defaultNumberOfTicks", "class"]}),
smalltalk.GETRegularTickDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfTicks",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@numberOfTicks"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfTicks",{},smalltalk.GETRegularTickDecorator)})},
messageSends: []}),
smalltalk.GETRegularTickDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfTicks:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numberOfTicks"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"numberOfTicks:",{anObject:anObject},smalltalk.GETRegularTickDecorator)})},
messageSends: []}),
smalltalk.GETRegularTickDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultNumberOfTicks",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4);
}, function($ctx1) {$ctx1.fill(self,"defaultNumberOfTicks",{},smalltalk.GETRegularTickDecorator.klass)})},
messageSends: []}),
smalltalk.GETRegularTickDecorator.klass);


smalltalk.addClass('GETTitleDecorator', smalltalk.GETAbstractAxisDecorator, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._axis_(anAxis);
$1=_st(_st(_st(self._axis())._delta())._x()).__eq((0));
if(smalltalk.assert($1)){
self._createLabel_at_(_st(self._axis())._label(),_st(self._axis())._end());
} else {
self._createLabel_atTopOf_(_st(self._axis())._label(),_st(self._axis())._start());
};
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis},smalltalk.GETTitleDecorator)})},
messageSends: ["axis:", "ifTrue:ifFalse:", "createLabel:at:", "label", "axis", "end", "createLabel:atTopOf:", "start", "=", "x", "delta"]}),
smalltalk.GETTitleDecorator);



smalltalk.addClass('GETAbstractAxisStrategy', smalltalk.Object, ['axis'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "axis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@axis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"axis",{},smalltalk.GETAbstractAxisStrategy)})},
messageSends: []}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "axis:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@axis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"axis:",{anObject:anObject},smalltalk.GETAbstractAxisStrategy)})},
messageSends: []}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "delta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETAbstractAxisStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETAbstractAxisStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._axis_(anAxis);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{anAxis:anAxis},smalltalk.GETAbstractAxisStrategy)})},
messageSends: ["axis:"]}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETAbstractAxisStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.GETAbstractAxisStrategy);



smalltalk.addClass('GETLeftRightAxisStrategy', smalltalk.GETAbstractAxisStrategy, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "delta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETLeftRightAxisStrategy)})},
messageSends: ["@"]}),
smalltalk.GETLeftRightAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(runningValue).__minus(delta);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETLeftRightAxisStrategy)})},
messageSends: ["-"]}),
smalltalk.GETLeftRightAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._axis())._minValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETLeftRightAxisStrategy)})},
messageSends: ["minValue", "axis"]}),
smalltalk.GETLeftRightAxisStrategy);



smalltalk.addClass('GETTopDownAxisStrategy', smalltalk.GETAbstractAxisStrategy, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "delta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETTopDownAxisStrategy)})},
messageSends: ["@"]}),
smalltalk.GETTopDownAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(runningValue).__plus(delta);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETTopDownAxisStrategy)})},
messageSends: ["+"]}),
smalltalk.GETTopDownAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._axis())._maxValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETTopDownAxisStrategy)})},
messageSends: ["maxValue", "axis"]}),
smalltalk.GETTopDownAxisStrategy);



smalltalk.addClass('GETAxis', smalltalk.Object, ['elements', 'decorators', 'label', 'strategy', 'startingPoint', 'endingPoint', 'maxValue', 'minValue'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (aROElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._add_(aROElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aROElement:aROElement},smalltalk.GETAxis)})},
messageSends: ["add:", "elements"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "decorators",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@decorators"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"decorators",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "decorators:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@decorators"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"decorators:",{anObject:anObject},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "delta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strategy())._delta();
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETAxis)})},
messageSends: ["delta", "strategy"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{anObject:anObject},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@endingPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"end",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "end:",
fn: function (anEndingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endingPoint"]=anEndingPoint;
return self}, function($ctx1) {$ctx1.fill(self,"end:",{anEndingPoint:anEndingPoint},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
fn: function (aStartingPoint,anEndingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._start_(aStartingPoint);
$2=_st($1)._end_(anEndingPoint);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aStartingPoint:aStartingPoint,anEndingPoint:anEndingPoint},smalltalk.GETAxis)})},
messageSends: ["start:", "end:"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self._elements_(_st($OrderedCollection())._new());
self._decorators_(_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAxis)})},
messageSends: ["elements:", "new", "decorators:"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{anObject:anObject},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "max:min:",
fn: function (aValue,anotherValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._maxValue_(aValue);
$2=_st($1)._minValue_(anotherValue);
return self}, function($ctx1) {$ctx1.fill(self,"max:min:",{aValue:aValue,anotherValue:anotherValue},smalltalk.GETAxis)})},
messageSends: ["maxValue:", "minValue:"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"maxValue:",{anObject:anObject},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"minValue:",{anObject:anObject},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strategy())._nextFrom_by_(runningValue,delta);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETAxis)})},
messageSends: ["nextFrom:by:", "strategy"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strategy())._runningValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETAxis)})},
messageSends: ["runningValue", "strategy"]}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@startingPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
fn: function (aStartingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@startingPoint"]=aStartingPoint;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{aStartingPoint:aStartingPoint},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "strategy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strategy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"strategy",{},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "strategy:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strategy"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"strategy:",{anObject:anObject},smalltalk.GETAxis)})},
messageSends: []}),
smalltalk.GETAxis);



