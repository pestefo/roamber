define("roamber/ARoassal-AttachPoint", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-AttachPoint');
smalltalk.packages["ARoassal-AttachPoint"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('ROAttachPoint', smalltalk.ROObject, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAttachPoint);


smalltalk.ROAttachPoint.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'public - creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == null){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.ROAttachPoint.klass)})},
args: [],
source: "instance\x0a\x09\x22Useful to avoid create unnecessary instances\x22\x0a\x09\x0a\x09instance ifNil: [ instance := self new ].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ROAttachPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetInstance",
category: 'public - creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@instance"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetInstance",{},smalltalk.ROAttachPoint.klass)})},
args: [],
source: "resetInstance\x0a\x09\x22\x0a\x09self withAllSubclassesDo: #resetInstance\x0a\x09\x22\x0a\x0a\x09instance := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAttachPoint.klass);


smalltalk.addClass('ROCenteredAttachPoint', smalltalk.ROAttachPoint, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(anEdge)._to();
$ctx1.sendIdx["to"]=1;
$2=_st($3)._absolutePosition();
$1=_st($2).__plus(_st(_st(_st(_st(anEdge)._to())._extent()).__slash((2)))._asIntegerPoint());
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROCenteredAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^ anEdge to absolutePosition + (anEdge to extent / 2) asIntegerPoint",
messageSends: ["+", "absolutePosition", "to", "asIntegerPoint", "/", "extent"],
referencedClasses: []
}),
smalltalk.ROCenteredAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(anEdge)._from();
$ctx1.sendIdx["from"]=1;
$3=_st($4)._absolutePosition();
$2=_st($3).__plus(_st(_st(_st(anEdge)._from())._extent()).__slash((2)));
$1=_st($2)._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROCenteredAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ (anEdge from absolutePosition + (anEdge from extent / 2)) asIntegerPoint",
messageSends: ["asIntegerPoint", "+", "absolutePosition", "from", "/", "extent"],
referencedClasses: []
}),
smalltalk.ROCenteredAttachPoint);



smalltalk.addClass('ROHorizontalAttachPoint', smalltalk.ROAttachPoint, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(anEdge)._to();
$ctx1.sendIdx["to"]=1;
$2=_st($3)._absolutePosition();
$1=_st($2).__plus((0).__at(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._height()).__slash((2)))._asInteger()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROHorizontalAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^ anEdge to absolutePosition + (0 @ (anEdge to bounds height / 2) asInteger)",
messageSends: ["+", "absolutePosition", "to", "@", "asInteger", "/", "height", "bounds"],
referencedClasses: []
}),
smalltalk.ROHorizontalAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$7,$6,$5,$4,$1;
$3=_st(anEdge)._from();
$ctx1.sendIdx["from"]=1;
$2=_st($3)._absolutePosition();
$7=_st(anEdge)._from();
$ctx1.sendIdx["from"]=2;
$6=_st($7)._bounds();
$ctx1.sendIdx["bounds"]=1;
$5=_st($6)._width();
$4=_st($5).__at(_st(_st(_st(_st(_st(anEdge)._from())._bounds())._height()).__slash((2)))._asInteger());
$1=_st($2).__plus($4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROHorizontalAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ anEdge from absolutePosition + (anEdge from bounds width @ (anEdge from bounds height / 2) asInteger)",
messageSends: ["+", "absolutePosition", "from", "@", "width", "bounds", "asInteger", "/", "height"],
referencedClasses: []
}),
smalltalk.ROHorizontalAttachPoint);



smalltalk.addClass('ROShorterDistanceAttachPoint', smalltalk.ROAttachPoint, ['offset'], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "attachPointFor:on:with:",
category: 'util',
fn: function (anEdge,anElement,elementsPossibleAttachPoints){
var self=this;
var p,dp,t;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$6,$5,$2,$1;
p=_st(_st(anElement)._absolutePosition()).__plus(_st(_st(anElement)._width()).__at(_st(anElement)._height()));
dp=_st(elementsPossibleAttachPoints)._collect_((function(pp){
return smalltalk.withContext(function($ctx2) {
t=_st(p).__minus(pp);
t;
return _st($Array())._with_with_(_st(t)._dotProduct_(t),pp);
}, function($ctx2) {$ctx2.fillBlock({pp:pp},$ctx1,1)})}));
$3=dp;
$4=_st(dp)._first();
$ctx1.sendIdx["first"]=1;
$2=_st($3)._inject_into_($4,(function(shorter,el){
return smalltalk.withContext(function($ctx2) {
$6=_st(shorter)._first();
$ctx2.sendIdx["first"]=2;
$5=_st($6).__lt(_st(el)._first());
if(smalltalk.assert($5)){
return shorter;
} else {
return el;
};
}, function($ctx2) {$ctx2.fillBlock({shorter:shorter,el:el},$ctx1,2)})}));
$1=_st($2)._second();
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPointFor:on:with:",{anEdge:anEdge,anElement:anElement,elementsPossibleAttachPoints:elementsPossibleAttachPoints,p:p,dp:dp,t:t},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["anEdge", "anElement", "elementsPossibleAttachPoints"],
source: "attachPointFor: anEdge on: anElement with: elementsPossibleAttachPoints\x0a\x09\x22Returns the attach point having the shortest route for given edge on given element.\x22\x0a\x09| p dp t |\x0a\x09p := anElement absolutePosition + (anElement width @ anElement height).\x0a\x09\x0a\x09\x22We get the list of dot products\x22\x0a\x09dp := elementsPossibleAttachPoints collect: [ :pp | \x0a\x09\x09t := p - pp.\x0a\x09\x09Array with: (t dotProduct: t) with:  pp ].\x0a\x09\x0a\x09\x22We look for the shortest path and return the point\x22\x0a\x09^ (dp inject: dp first into: [ :shorter :el | (shorter first < el first) ifTrue: [ shorter ] ifFalse: [ el ]]) second",
messageSends: ["+", "absolutePosition", "@", "width", "height", "collect:", "-", "with:with:", "dotProduct:", "second", "inject:into:", "first", "ifTrue:ifFalse:", "<"],
referencedClasses: ["Array"]
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "attachPointsFor:on:",
category: 'util',
fn: function (anEdge,anElement){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $3,$9,$8,$7,$6,$5,$4,$2,$11,$14,$13,$19,$18,$17,$16,$15,$12,$10,$21,$27,$26,$25,$24,$23,$29,$28,$22,$20,$30,$1;
$3=_st(anElement)._absolutePosition();
$ctx1.sendIdx["absolutePosition"]=1;
$9=_st(anElement)._bounds();
$ctx1.sendIdx["bounds"]=1;
$8=_st($9)._width();
$ctx1.sendIdx["width"]=1;
$7=_st($8).__slash((2));
$ctx1.sendIdx["/"]=1;
$6=_st($7).__plus(self["@offset"]);
$ctx1.sendIdx["+"]=2;
$5=_st($6)._asInteger();
$ctx1.sendIdx["asInteger"]=1;
$4=_st($5).__at((0));
$ctx1.sendIdx["@"]=1;
$2=_st($3).__plus($4);
$ctx1.sendIdx["+"]=1;
$11=_st(anElement)._absolutePosition();
$ctx1.sendIdx["absolutePosition"]=2;
$14=_st(anElement)._bounds();
$ctx1.sendIdx["bounds"]=2;
$13=_st($14)._width();
$ctx1.sendIdx["width"]=2;
$19=_st(anElement)._bounds();
$ctx1.sendIdx["bounds"]=3;
$18=_st($19)._height();
$ctx1.sendIdx["height"]=1;
$17=_st($18).__slash((2));
$ctx1.sendIdx["/"]=2;
$16=_st($17).__plus(self["@offset"]);
$ctx1.sendIdx["+"]=4;
$15=_st($16)._asInteger();
$ctx1.sendIdx["asInteger"]=2;
$12=_st($13).__at($15);
$ctx1.sendIdx["@"]=2;
$10=_st($11).__plus($12);
$ctx1.sendIdx["+"]=3;
$21=_st(anElement)._absolutePosition();
$ctx1.sendIdx["absolutePosition"]=3;
$27=_st(anElement)._bounds();
$ctx1.sendIdx["bounds"]=4;
$26=_st($27)._width();
$25=_st($26).__slash((2));
$ctx1.sendIdx["/"]=3;
$24=_st($25).__plus(self["@offset"]);
$ctx1.sendIdx["+"]=6;
$23=_st($24)._asInteger();
$ctx1.sendIdx["asInteger"]=3;
$29=_st(anElement)._bounds();
$ctx1.sendIdx["bounds"]=5;
$28=_st($29)._height();
$ctx1.sendIdx["height"]=2;
$22=_st($23).__at($28);
$ctx1.sendIdx["@"]=3;
$20=_st($21).__plus($22);
$ctx1.sendIdx["+"]=5;
$30=_st(_st(anElement)._absolutePosition()).__plus((0).__at(_st(_st(_st(_st(_st(anElement)._bounds())._height()).__slash((2))).__plus(self["@offset"]))._asInteger()));
$ctx1.sendIdx["+"]=7;
$1=_st($Array())._with_with_with_with_($2,$10,$20,$30);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPointsFor:on:",{anEdge:anEdge,anElement:anElement},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["anEdge", "anElement"],
source: "attachPointsFor: anEdge on: anElement\x0a\x09\x22Return the four possible attach points for each of the four sides for given edge on given element.\x22\x0a\x09^ Array \x0a\x09\x09\x22upper side\x22\x0a\x09\x09with: (anElement absolutePosition) + (((anElement bounds width / 2) + offset) asInteger @ 0) \x0a\x09\x09 \x22right side\x22\x0a\x09\x09with: (anElement absolutePosition) + (anElement bounds width @ ((anElement  bounds height / 2) + offset) asInteger)\x0a\x09\x09\x22lower side\x22\x0a\x09\x09with: (anElement absolutePosition) + (((anElement bounds width / 2) + offset) asInteger @ (anElement bounds height)) \x0a\x09\x09\x22left side\x22\x0a\x09\x09with: (anElement absolutePosition) + (0 @ ((anElement bounds height / 2) + offset) asInteger)",
messageSends: ["with:with:with:with:", "+", "absolutePosition", "@", "asInteger", "/", "width", "bounds", "height"],
referencedClasses: ["Array"]
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "destinationAttachPointsFor:",
category: 'util',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointsFor_on_(anEdge,_st(anEdge)._to());
return $1;
}, function($ctx1) {$ctx1.fill(self,"destinationAttachPointsFor:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["anEdge"],
source: "destinationAttachPointsFor: anEdge\x0a\x09\x22Return the four possible attach points for each of the four sides for this edges destination node.\x22\x0a\x09^ self attachPointsFor: anEdge on: (anEdge to).",
messageSends: ["attachPointsFor:on:", "to"],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointFor_on_with_(anEdge,_st(anEdge)._from(),self._destinationAttachPointsFor_(anEdge));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^ self attachPointFor: anEdge on: (anEdge from) with: (self destinationAttachPointsFor: anEdge).",
messageSends: ["attachPointFor:on:with:", "from", "destinationAttachPointsFor:"],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROShorterDistanceAttachPoint.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@offset"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROShorterDistanceAttachPoint)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09offset := 0.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);

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
}, function($ctx1) {$ctx1.fill(self,"offset",{},smalltalk.ROShorterDistanceAttachPoint)})},
args: [],
source: "offset\x0a\x09^ offset.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "offset:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@offset"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"offset:",{aNumber:aNumber},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["aNumber"],
source: "offset: aNumber\x0a\x09offset := aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingAttachPointsFor:",
category: 'util',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointsFor_on_(anEdge,_st(anEdge)._from());
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingAttachPointsFor:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["anEdge"],
source: "startingAttachPointsFor: anEdge\x0a\x09\x22Return the four possible attach points for each of the four sides for this edges starting node.\x22\x0a\x09^ self attachPointsFor: anEdge on: (anEdge from).",
messageSends: ["attachPointsFor:on:", "from"],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._attachPointFor_on_with_(anEdge,_st(anEdge)._to(),self._startingAttachPointsFor_(anEdge));
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROShorterDistanceAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ self attachPointFor: anEdge on: (anEdge to) with: (self startingAttachPointsFor: anEdge).",
messageSends: ["attachPointFor:on:with:", "to", "startingAttachPointsFor:"],
referencedClasses: []
}),
smalltalk.ROShorterDistanceAttachPoint);



smalltalk.addClass('ROVerticalAttachPoint', smalltalk.ROAttachPoint, [], 'ARoassal-AttachPoint');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(anEdge)._to();
$ctx1.sendIdx["to"]=1;
$2=_st($3)._absolutePosition();
$1=_st($2).__plus(_st(_st(_st(_st(_st(_st(anEdge)._to())._bounds())._width()).__slash((2)))._asInteger()).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROVerticalAttachPoint)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^  (anEdge to absolutePosition) + ((anEdge to bounds width / 2) asInteger @ 0)",
messageSends: ["+", "absolutePosition", "to", "@", "asInteger", "/", "width", "bounds"],
referencedClasses: []
}),
smalltalk.ROVerticalAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'public - hooks',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$9,$8,$7,$6,$5,$4,$1;
$3=_st(anEdge)._from();
$ctx1.sendIdx["from"]=1;
$2=_st($3)._absolutePosition();
$9=_st(anEdge)._from();
$ctx1.sendIdx["from"]=2;
$8=_st($9)._bounds();
$ctx1.sendIdx["bounds"]=1;
$7=_st($8)._width();
$6=_st($7).__slash((2));
$5=_st($6)._asInteger();
$4=_st($5).__at(_st(_st(_st(anEdge)._from())._bounds())._height());
$1=_st($2).__plus($4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROVerticalAttachPoint)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ (anEdge from absolutePosition) + ((anEdge from bounds width / 2) asInteger @ (anEdge from bounds height ))",
messageSends: ["+", "absolutePosition", "from", "@", "asInteger", "/", "width", "bounds", "height"],
referencedClasses: []
}),
smalltalk.ROVerticalAttachPoint);


});
