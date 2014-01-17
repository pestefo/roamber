define("roamber/Graph-ET-Axis", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Graph-ET-Axis');
smalltalk.packages["Graph-ET-Axis"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('GETAbstractAxisDecorator', smalltalk.Object, ['axis'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "axis",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@axis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"axis",{},smalltalk.GETAbstractAxisDecorator)})},
args: [],
source: "axis\x0a\x09\x0a\x09^ axis",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "axis:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@axis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"axis:",{anObject:anObject},smalltalk.GETAbstractAxisDecorator)})},
args: ["anObject"],
source: "axis: anObject\x0a\x09\x0a\x09axis := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:at:",
category: 'displaying',
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus((0).__at(_st(_st(labelElement)._height()).__slash((2)))));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:at:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
args: ["string", "aPosition"],
source: "createLabel: string at: aPosition\x0a\x09\x22Define a label located at aPosition.\x0a\x09the label is on the right of aPosition\x22\x0a\x09\x0a\x09| labelElement |\x0a\x09labelElement := ROLabel elementOn: string.\x0a\x09labelElement translateTo: (aPosition - (0 @ (labelElement height / 2))) .\x0a\x09self axis \x0a\x09\x09add: labelElement",
messageSends: ["elementOn:", "translateTo:", "-", "@", "/", "height", "add:", "axis"],
referencedClasses: ["ROLabel"]
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:atBottomOf:",
category: 'displaying',
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus(_st(_st(_st(labelElement)._width()).__slash((2))).__at((0))));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:atBottomOf:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
args: ["string", "aPosition"],
source: "createLabel: string atBottomOf: aPosition\x0a\x09\x22Define a label located at aPosition.\x0a\x09the label is on the bottom of aPosition\x22\x0a\x09\x0a\x09| labelElement |\x0a\x09labelElement := ROLabel elementOn: string.\x0a\x09labelElement translateTo: (aPosition - ((labelElement width / 2) @ 0)).\x0a\x09self axis \x0a\x09\x09add: labelElement",
messageSends: ["elementOn:", "translateTo:", "-", "@", "/", "width", "add:", "axis"],
referencedClasses: ["ROLabel"]
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:atLeftOf:",
category: 'displaying',
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus(_st(_st(labelElement)._width()).__at(_st(_st(labelElement)._height()).__slash((2)))));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:atLeftOf:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
args: ["string", "aPosition"],
source: "createLabel: string atLeftOf: aPosition\x0a\x09\x22Define a label located at aPosition.\x0a\x09the label is on the left of aPosition\x22\x0a\x09\x0a\x09| labelElement |\x0a\x09labelElement := ROLabel elementOn: string.\x0a\x09labelElement translateTo: (aPosition - (labelElement width @ (labelElement height / 2))) .\x0a\x09self axis \x0a\x09\x09add: labelElement",
messageSends: ["elementOn:", "translateTo:", "-", "@", "width", "/", "height", "add:", "axis"],
referencedClasses: ["ROLabel"]
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLabel:atTopOf:",
category: 'displaying',
fn: function (string,aPosition){
var self=this;
var labelElement;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
labelElement=_st($ROLabel())._elementOn_(string);
_st(labelElement)._translateTo_(_st(aPosition).__minus((0).__at(_st(labelElement)._height())));
_st(self._axis())._add_(labelElement);
return self}, function($ctx1) {$ctx1.fill(self,"createLabel:atTopOf:",{string:string,aPosition:aPosition,labelElement:labelElement},smalltalk.GETAbstractAxisDecorator)})},
args: ["string", "aPosition"],
source: "createLabel: string atTopOf: aPosition\x0a\x09\x22Define a label located at aPosition.\x0a\x09the label is on the left of aPosition\x22\x0a\x09\x0a\x09| labelElement |\x0a\x09labelElement := ROLabel elementOn: string.\x0a\x09labelElement translateTo: (aPosition - (0 @ labelElement height)) .\x0a\x09self axis \x0a\x09\x09add: labelElement",
messageSends: ["elementOn:", "translateTo:", "-", "@", "height", "add:", "axis"],
referencedClasses: ["ROLabel"]
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLineFrom:to:",
category: 'displaying',
fn: function (startingPoint,endingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._createLineFrom_to_color_(startingPoint,endingPoint,_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"createLineFrom:to:",{startingPoint:startingPoint,endingPoint:endingPoint},smalltalk.GETAbstractAxisDecorator)})},
args: ["startingPoint", "endingPoint"],
source: "createLineFrom: startingPoint to: endingPoint \x0a\x0a\x09self createLineFrom: startingPoint to: endingPoint color: self class defaultColor",
messageSends: ["createLineFrom:to:color:", "defaultColor", "class"],
referencedClasses: []
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "createLineFrom:to:color:",
category: 'displaying',
fn: function (startingPoint,endingPoint,aColor){
var self=this;
var origin,end,edge;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($ROElement())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._translateTo_(startingPoint);
$ctx1.sendIdx["translateTo:"]=1;
$2=_st($1)._size_((0));
$ctx1.sendIdx["size:"]=1;
origin=$2;
$3=_st($ROElement())._new();
$ctx1.sendIdx["new"]=2;
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
$ctx1.sendIdx["add:"]=1;
_st($7)._add_(end);
$ctx1.sendIdx["add:"]=2;
$8=_st($7)._add_(edge);
return self}, function($ctx1) {$ctx1.fill(self,"createLineFrom:to:color:",{startingPoint:startingPoint,endingPoint:endingPoint,aColor:aColor,origin:origin,end:end,edge:edge},smalltalk.GETAbstractAxisDecorator)})},
args: ["startingPoint", "endingPoint", "aColor"],
source: "createLineFrom: startingPoint to: endingPoint color: aColor\x0a\x0a\x09| origin end edge |\x0a\x09origin := ROElement new translateTo: startingPoint; size: 0.\x0a\x09end := ROElement new translateTo: endingPoint; size: 0.\x0a\x09\x0a\x09edge := (ROEdge from: origin to: end).\x0a\x09edge + (ROLine new color: aColor; yourself).\x0a\x09self axis \x0a\x09\x09add: origin;\x0a\x09\x09add: end;\x0a\x09\x09add: edge",
messageSends: ["translateTo:", "new", "size:", "from:to:", "+", "color:", "yourself", "add:", "axis"],
referencedClasses: ["ROElement", "ROEdge", "ROLine"]
}),
smalltalk.GETAbstractAxisDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
category: 'displaying',
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis},smalltalk.GETAbstractAxisDecorator)})},
args: ["anAxis"],
source: "decorate: anAxis \x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractAxisDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'configuration',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.GETAbstractAxisDecorator.klass)})},
args: [],
source: "defaultColor\x0a\x09\x22Default color for lines in the axi\x22\x0a\x0a\x09^ Color black",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.GETAbstractAxisDecorator.klass);


smalltalk.addClass('GETBaseLineDecorator', smalltalk.GETAbstractAxisDecorator, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
category: 'displaying',
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self._axis_(anAxis);
$2=self._axis();
$ctx1.sendIdx["axis"]=1;
$1=_st($2)._start();
self._createLineFrom_to_($1,_st(self._axis())._end());
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis},smalltalk.GETBaseLineDecorator)})},
args: ["anAxis"],
source: "decorate: anAxis \x0a\x0a\x09self axis: anAxis.\x09\x0a\x09self createLineFrom: self axis start to: self axis end",
messageSends: ["axis:", "createLineFrom:to:", "start", "axis", "end"],
referencedClasses: []
}),
smalltalk.GETBaseLineDecorator);



smalltalk.addClass('GETRegularLabelDecorator', smalltalk.GETAbstractAxisDecorator, ['numberOfLabels', 'valueFormater'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
category: 'displaying',
fn: function (anAxis){
var self=this;
var runningPosition,runningValue,deltaValue,deltaPixels,labelAsNumber;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$7,$6,$3,$8,$11,$10,$13,$12,$9,$14,$15,$16;
self._axis_(anAxis);
$1=self._axis();
$ctx1.sendIdx["axis"]=1;
runningPosition=_st($1)._start();
$ctx1.sendIdx["start"]=1;
$2=self._axis();
$ctx1.sendIdx["axis"]=2;
runningValue=_st($2)._runningValue();
$5=self._axis();
$ctx1.sendIdx["axis"]=3;
$4=_st($5)._end();
$7=self._axis();
$ctx1.sendIdx["axis"]=4;
$6=_st($7)._start();
$3=_st($4).__minus($6);
$ctx1.sendIdx["-"]=1;
$8=self._numberOfLabels();
$ctx1.sendIdx["numberOfLabels"]=1;
deltaPixels=_st($3).__slash($8);
$ctx1.sendIdx["/"]=1;
$11=self._axis();
$ctx1.sendIdx["axis"]=5;
$10=_st($11)._minValue();
$13=self._axis();
$ctx1.sendIdx["axis"]=6;
$12=_st($13)._maxValue();
$9=_st($10).__minus($12);
$14=self._numberOfLabels();
$ctx1.sendIdx["numberOfLabels"]=2;
deltaValue=_st($9).__slash($14);
$15=_st(self._numberOfLabels()).__plus((1));
$ctx1.sendIdx["+"]=1;
_st($15)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
labelAsNumber=self._getCustomizedValue_(runningValue);
labelAsNumber;
$16=_st(_st(deltaPixels)._x()).__eq((0));
if(smalltalk.assert($16)){
self._createLabel_atLeftOf_(labelAsNumber,runningPosition);
} else {
self._createLabel_atBottomOf_(labelAsNumber,runningPosition);
};
runningPosition=_st(runningPosition).__plus(deltaPixels);
runningPosition;
runningValue=_st(self._axis())._nextFrom_by_(runningValue,deltaValue);
return runningValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis,runningPosition:runningPosition,runningValue:runningValue,deltaValue:deltaValue,deltaPixels:deltaPixels,labelAsNumber:labelAsNumber},smalltalk.GETRegularLabelDecorator)})},
args: ["anAxis"],
source: "decorate: anAxis\x0a\x09| runningPosition runningValue deltaValue deltaPixels labelAsNumber |\x0a\x09self axis: anAxis.\x0a\x09runningPosition := self axis start.\x0a\x09runningValue := self axis runningValue.\x0a\x09deltaPixels := (self axis end - self axis start) / self numberOfLabels.\x0a\x09deltaValue := (self axis minValue - self axis maxValue) / self numberOfLabels.\x0a\x09self numberOfLabels + 1\x0a\x09\x09timesRepeat: [ \x0a\x09\x09\x09labelAsNumber := self getCustomizedValue: runningValue.\x0a\x09\x09\x09deltaPixels x = 0\x0a\x09\x09\x09\x09ifTrue: [ self createLabel: labelAsNumber atLeftOf: runningPosition ]\x0a\x09\x09\x09\x09ifFalse: [ self createLabel: labelAsNumber atBottomOf: runningPosition ].\x0a\x09\x09\x09runningPosition := runningPosition + deltaPixels.\x0a\x09\x09\x09runningValue := self axis nextFrom: runningValue by: deltaValue ]",
messageSends: ["axis:", "start", "axis", "runningValue", "/", "-", "end", "numberOfLabels", "minValue", "maxValue", "timesRepeat:", "+", "getCustomizedValue:", "ifTrue:ifFalse:", "=", "x", "createLabel:atLeftOf:", "createLabel:atBottomOf:", "nextFrom:by:"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatFloat",
category: 'customizing labels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._useValueFormater_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v)._asFloat();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"formatFloat",{},smalltalk.GETRegularLabelDecorator)})},
args: [],
source: "formatFloat\x0a\x09self useValueFormater: [ :v | v asFloat ]",
messageSends: ["useValueFormater:", "asFloat"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatInteger",
category: 'customizing labels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._useValueFormater_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v)._rounded())._asInteger();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"formatInteger",{},smalltalk.GETRegularLabelDecorator)})},
args: [],
source: "formatInteger\x0a\x09self useValueFormater: [ :v | v rounded asInteger ]",
messageSends: ["useValueFormater:", "asInteger", "rounded"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatTruncatedFloat",
category: 'customizing labels',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._formatTruncatedFloatBy_((2));
return self}, function($ctx1) {$ctx1.fill(self,"formatTruncatedFloat",{},smalltalk.GETRegularLabelDecorator)})},
args: [],
source: "formatTruncatedFloat\x0a\x09self formatTruncatedFloatBy: 2",
messageSends: ["formatTruncatedFloatBy:"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "formatTruncatedFloatBy:",
category: 'customizing labels',
fn: function (nbOfDecimal){
var self=this;
var shift;
return smalltalk.withContext(function($ctx1) { 
shift=(10)._raisedTo_(nbOfDecimal);
self._useValueFormater_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(v).__star(shift))._asInteger()).__slash(shift))._asFloat();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"formatTruncatedFloatBy:",{nbOfDecimal:nbOfDecimal,shift:shift},smalltalk.GETRegularLabelDecorator)})},
args: ["nbOfDecimal"],
source: "formatTruncatedFloatBy: nbOfDecimal\x0a\x09| shift |\x0a\x09shift := 10 raisedTo: nbOfDecimal.\x0a\x09self useValueFormater: [ :v | ((v * shift) asInteger / shift) asFloat ]",
messageSends: ["raisedTo:", "useValueFormater:", "asFloat", "/", "asInteger", "*"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "getCustomizedValue:",
category: 'customizing labels',
fn: function (runningValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@valueFormater"])._value_(runningValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getCustomizedValue:",{runningValue:runningValue},smalltalk.GETRegularLabelDecorator)})},
args: ["runningValue"],
source: "getCustomizedValue: runningValue\x0a\x09\x22Take as input a number, possibly a float or a fraction. Return a number (possibly an integer, a float or a fraction) that complies to the user wish\x22\x0a\x09^ valueFormater value: runningValue",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETRegularLabelDecorator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@numberOfLabels"]=_st(self._class())._defaultNumberOfLabels();
self._formatTruncatedFloat();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETRegularLabelDecorator)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09numberOfLabels := self class defaultNumberOfLabels.\x0a\x09self formatTruncatedFloat.",
messageSends: ["initialize", "defaultNumberOfLabels", "class", "formatTruncatedFloat"],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLabels",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@numberOfLabels"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfLabels",{},smalltalk.GETRegularLabelDecorator)})},
args: [],
source: "numberOfLabels\x0a\x09\x0a\x09^ numberOfLabels",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLabels:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numberOfLabels"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"numberOfLabels:",{anObject:anObject},smalltalk.GETRegularLabelDecorator)})},
args: ["anObject"],
source: "numberOfLabels: anObject\x0a\x09\x0a\x09numberOfLabels := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "useValueFormater:",
category: 'customizing labels',
fn: function (aOneArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@valueFormater"]=aOneArg;
return self}, function($ctx1) {$ctx1.fill(self,"useValueFormater:",{aOneArg:aOneArg},smalltalk.GETRegularLabelDecorator)})},
args: ["aOneArg"],
source: "useValueFormater: aOneArg\x0a\x09valueFormater := aOneArg",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultNumberOfLabels",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4);
}, function($ctx1) {$ctx1.fill(self,"defaultNumberOfLabels",{},smalltalk.GETRegularLabelDecorator.klass)})},
args: [],
source: "defaultNumberOfLabels\x0a\x09\x22Default number in Numbers, the apple version of Excel\x22\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularLabelDecorator.klass);


smalltalk.addClass('GETRegularTickDecorator', smalltalk.GETAbstractAxisDecorator, ['numberOfTicks'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
category: 'displaying',
fn: function (anAxis){
var self=this;
var runningPosition,delta,tickDelta;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$6,$5,$2,$7,$8,$9,$10;
self._axis_(anAxis);
$1=self._axis();
$ctx1.sendIdx["axis"]=1;
runningPosition=_st($1)._start();
$ctx1.sendIdx["start"]=1;
$4=self._axis();
$ctx1.sendIdx["axis"]=2;
$3=_st($4)._end();
$6=self._axis();
$ctx1.sendIdx["axis"]=3;
$5=_st($6)._start();
$2=_st($3).__minus($5);
$ctx1.sendIdx["-"]=1;
$7=self._numberOfTicks();
$ctx1.sendIdx["numberOfTicks"]=1;
delta=_st($2).__slash($7);
tickDelta=_st(self._axis())._delta();
$8=_st(self._numberOfTicks()).__plus((1));
$ctx1.sendIdx["+"]=1;
_st($8)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(runningPosition).__minus(tickDelta);
$10=_st(runningPosition).__plus(tickDelta);
$ctx2.sendIdx["+"]=2;
self._createLineFrom_to_($9,$10);
runningPosition=_st(runningPosition).__plus(delta);
return runningPosition;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis,runningPosition:runningPosition,delta:delta,tickDelta:tickDelta},smalltalk.GETRegularTickDecorator)})},
args: ["anAxis"],
source: "decorate: anAxis \x0a\x0a\x09| runningPosition delta tickDelta |\x0a\x09\x0a\x09self axis: anAxis.\x0a\x09\x0a\x09runningPosition := self axis start.\x0a\x09delta := self axis end - self axis start / self numberOfTicks.\x0a\x09tickDelta := self axis delta.\x0a\x0a\x09(self numberOfTicks + 1) timesRepeat: [\x0a\x09\x09self createLineFrom: runningPosition - tickDelta to: runningPosition + tickDelta.\x0a\x09\x09runningPosition := runningPosition + delta ]",
messageSends: ["axis:", "start", "axis", "/", "-", "end", "numberOfTicks", "delta", "timesRepeat:", "+", "createLineFrom:to:"],
referencedClasses: []
}),
smalltalk.GETRegularTickDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.GETRegularTickDecorator.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@numberOfTicks"]=_st(self._class())._defaultNumberOfTicks();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETRegularTickDecorator)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09numberOfTicks := self class defaultNumberOfTicks",
messageSends: ["initialize", "defaultNumberOfTicks", "class"],
referencedClasses: []
}),
smalltalk.GETRegularTickDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfTicks",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@numberOfTicks"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfTicks",{},smalltalk.GETRegularTickDecorator)})},
args: [],
source: "numberOfTicks\x0a\x09\x22Return the number of ticks we will have on the axis\x22\x0a\x09^ numberOfTicks",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularTickDecorator);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfTicks:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numberOfTicks"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"numberOfTicks:",{anObject:anObject},smalltalk.GETRegularTickDecorator)})},
args: ["anObject"],
source: "numberOfTicks: anObject\x0a\x09numberOfTicks := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularTickDecorator);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultNumberOfTicks",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (4);
}, function($ctx1) {$ctx1.fill(self,"defaultNumberOfTicks",{},smalltalk.GETRegularTickDecorator.klass)})},
args: [],
source: "defaultNumberOfTicks\x0a\x09\x22Default number in Numbers, the apple version of Excel\x22\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETRegularTickDecorator.klass);


smalltalk.addClass('GETTitleDecorator', smalltalk.GETAbstractAxisDecorator, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "decorate:",
category: 'displaying',
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$6,$5,$8,$7,$10,$9;
self._axis_(anAxis);
$4=self._axis();
$ctx1.sendIdx["axis"]=1;
$3=_st($4)._delta();
$2=_st($3)._x();
$1=_st($2).__eq((0));
if(smalltalk.assert($1)){
$6=self._axis();
$ctx1.sendIdx["axis"]=2;
$5=_st($6)._label();
$ctx1.sendIdx["label"]=1;
$8=self._axis();
$ctx1.sendIdx["axis"]=3;
$7=_st($8)._end();
self._createLabel_at_($5,$7);
} else {
$10=self._axis();
$ctx1.sendIdx["axis"]=4;
$9=_st($10)._label();
self._createLabel_atTopOf_($9,_st(self._axis())._start());
};
return self}, function($ctx1) {$ctx1.fill(self,"decorate:",{anAxis:anAxis},smalltalk.GETTitleDecorator)})},
args: ["anAxis"],
source: "decorate: anAxis\x0a\x09\x0a\x09self axis: anAxis.\x0a\x09\x0a\x09(self axis delta x = 0)\x0a\x09\x09ifTrue: [ self createLabel: self axis label at: self axis end ]\x0a\x09\x09ifFalse: [ self createLabel: self axis label atTopOf: self axis start ]",
messageSends: ["axis:", "ifTrue:ifFalse:", "=", "x", "delta", "axis", "createLabel:at:", "label", "end", "createLabel:atTopOf:", "start"],
referencedClasses: []
}),
smalltalk.GETTitleDecorator);



smalltalk.addClass('GETAbstractAxisStrategy', smalltalk.Object, ['axis'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "axis",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@axis"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"axis",{},smalltalk.GETAbstractAxisStrategy)})},
args: [],
source: "axis\x0a\x09\x0a\x09^ axis",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "axis:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@axis"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"axis:",{anObject:anObject},smalltalk.GETAbstractAxisStrategy)})},
args: ["anObject"],
source: "axis: anObject\x0a\x09\x0a\x09axis := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "delta",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETAbstractAxisStrategy)})},
args: [],
source: "delta\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
category: 'processing',
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETAbstractAxisStrategy)})},
args: ["runningValue", "delta"],
source: "nextFrom: runningValue by: delta\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'initialize-release',
fn: function (anAxis){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._axis_(anAxis);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{anAxis:anAxis},smalltalk.GETAbstractAxisStrategy)})},
args: ["anAxis"],
source: "on: anAxis \x0a\x0a\x09self axis: anAxis",
messageSends: ["axis:"],
referencedClasses: []
}),
smalltalk.GETAbstractAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETAbstractAxisStrategy)})},
args: [],
source: "runningValue\x0a\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.GETAbstractAxisStrategy);



smalltalk.addClass('GETLeftRightAxisStrategy', smalltalk.GETAbstractAxisStrategy, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "delta",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETLeftRightAxisStrategy)})},
args: [],
source: "delta \x0a\x0a\x09^ (0@2)",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.GETLeftRightAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
category: 'processing',
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(runningValue).__minus(delta);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETLeftRightAxisStrategy)})},
args: ["runningValue", "delta"],
source: "nextFrom: runningValue by: delta\x0a\x0a\x09^ runningValue - delta",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.GETLeftRightAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._axis())._minValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETLeftRightAxisStrategy)})},
args: [],
source: "runningValue \x0a\x0a\x09^ self axis minValue",
messageSends: ["minValue", "axis"],
referencedClasses: []
}),
smalltalk.GETLeftRightAxisStrategy);



smalltalk.addClass('GETTopDownAxisStrategy', smalltalk.GETAbstractAxisStrategy, [], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "delta",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETTopDownAxisStrategy)})},
args: [],
source: "delta \x0a\x0a\x09^ (2@0)",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.GETTopDownAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
category: 'processing',
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(runningValue).__plus(delta);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETTopDownAxisStrategy)})},
args: ["runningValue", "delta"],
source: "nextFrom: runningValue by: delta\x0a\x0a\x09^ runningValue + delta",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.GETTopDownAxisStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._axis())._maxValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETTopDownAxisStrategy)})},
args: [],
source: "runningValue \x0a\x0a\x09^ self axis maxValue",
messageSends: ["maxValue", "axis"],
referencedClasses: []
}),
smalltalk.GETTopDownAxisStrategy);



smalltalk.addClass('GETAxis', smalltalk.Object, ['elements', 'decorators', 'label', 'strategy', 'startingPoint', 'endingPoint', 'maxValue', 'minValue'], 'Graph-ET-Axis');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'interface',
fn: function (aROElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._add_(aROElement);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aROElement:aROElement},smalltalk.GETAxis)})},
args: ["aROElement"],
source: "add: aROElement \x0a\x0a\x09self elements add: aROElement",
messageSends: ["add:", "elements"],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "decorators",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@decorators"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"decorators",{},smalltalk.GETAxis)})},
args: [],
source: "decorators\x0a\x09^ decorators",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "decorators:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@decorators"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"decorators:",{anObject:anObject},smalltalk.GETAxis)})},
args: ["anObject"],
source: "decorators: anObject\x0a\x09decorators := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "delta",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strategy())._delta();
return $1;
}, function($ctx1) {$ctx1.fill(self,"delta",{},smalltalk.GETAxis)})},
args: [],
source: "delta\x0a\x0a\x09^ self strategy delta",
messageSends: ["delta", "strategy"],
referencedClasses: []
}),
smalltalk.GETAxis);

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
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.GETAxis)})},
args: [],
source: "elements\x0a\x09\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{anObject:anObject},smalltalk.GETAxis)})},
args: ["anObject"],
source: "elements: anObject\x0a\x09\x0a\x09elements := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "end",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@endingPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"end",{},smalltalk.GETAxis)})},
args: [],
source: "end\x0a\x09\x0a\x09^ endingPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "end:",
category: 'accessing',
fn: function (anEndingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@endingPoint"]=anEndingPoint;
return self}, function($ctx1) {$ctx1.fill(self,"end:",{anEndingPoint:anEndingPoint},smalltalk.GETAxis)})},
args: ["anEndingPoint"],
source: "end: anEndingPoint\x0a\x09\x0a\x09endingPoint := anEndingPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'accessing',
fn: function (aStartingPoint,anEndingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._start_(aStartingPoint);
$1=self._end_(anEndingPoint);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aStartingPoint:aStartingPoint,anEndingPoint:anEndingPoint},smalltalk.GETAxis)})},
args: ["aStartingPoint", "anEndingPoint"],
source: "from: aStartingPoint to: anEndingPoint\x0a\x0a\x09self start: aStartingPoint;\x0a\x09\x09 end: anEndingPoint",
messageSends: ["start:", "end:"],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
self._elements_($1);
self._decorators_(_st($OrderedCollection())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GETAxis)})},
args: [],
source: "initialize \x0a\x0a\x09self elements: OrderedCollection new.\x0a\x09self decorators: OrderedCollection new",
messageSends: ["elements:", "new", "decorators:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@label"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.GETAxis)})},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@label"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"label:",{anObject:anObject},smalltalk.GETAxis)})},
args: ["anObject"],
source: "label: anObject\x0a\x09label := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "max:min:",
category: 'accessing',
fn: function (aValue,anotherValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._maxValue_(aValue);
$1=self._minValue_(anotherValue);
return self}, function($ctx1) {$ctx1.fill(self,"max:min:",{aValue:aValue,anotherValue:anotherValue},smalltalk.GETAxis)})},
args: ["aValue", "anotherValue"],
source: "max: aValue min: anotherValue\x0a\x0a\x09self maxValue: aValue;\x0a\x09\x09 minValue: anotherValue",
messageSends: ["maxValue:", "minValue:"],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxValue",{},smalltalk.GETAxis)})},
args: [],
source: "maxValue\x0a\x09\x0a\x09^ maxValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "maxValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"maxValue:",{anObject:anObject},smalltalk.GETAxis)})},
args: ["anObject"],
source: "maxValue: anObject\x0a\x09\x0a\x09maxValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minValue",{},smalltalk.GETAxis)})},
args: [],
source: "minValue\x0a\x09\x0a\x09^ minValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "minValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"minValue:",{anObject:anObject},smalltalk.GETAxis)})},
args: ["anObject"],
source: "minValue: anObject\x0a\x09\x0a\x09minValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "nextFrom:by:",
category: 'processing',
fn: function (runningValue,delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strategy())._nextFrom_by_(runningValue,delta);
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextFrom:by:",{runningValue:runningValue,delta:delta},smalltalk.GETAxis)})},
args: ["runningValue", "delta"],
source: "nextFrom: runningValue by: delta\x0a\x0a\x09^ self strategy nextFrom: runningValue by: delta",
messageSends: ["nextFrom:by:", "strategy"],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "runningValue",
category: 'processing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._strategy())._runningValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"runningValue",{},smalltalk.GETAxis)})},
args: [],
source: "runningValue\x0a\x0a\x09^ self strategy runningValue",
messageSends: ["runningValue", "strategy"],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@startingPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.GETAxis)})},
args: [],
source: "start\x0a\x09\x0a\x09^ startingPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'accessing',
fn: function (aStartingPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@startingPoint"]=aStartingPoint;
return self}, function($ctx1) {$ctx1.fill(self,"start:",{aStartingPoint:aStartingPoint},smalltalk.GETAxis)})},
args: ["aStartingPoint"],
source: "start: aStartingPoint\x0a\x09\x0a\x09startingPoint := aStartingPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "strategy",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strategy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"strategy",{},smalltalk.GETAxis)})},
args: [],
source: "strategy\x0a\x09\x0a\x09^ strategy",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);

smalltalk.addMethod(
smalltalk.method({
selector: "strategy:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strategy"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"strategy:",{anObject:anObject},smalltalk.GETAxis)})},
args: ["anObject"],
source: "strategy: anObject\x0a\x09\x0a\x09strategy := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETAxis);


});
