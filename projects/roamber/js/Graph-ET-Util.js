define("roamber/Graph-ET-Util", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Graph-ET-Util');
smalltalk.packages["Graph-ET-Util"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('GETDistribution', smalltalk.Object, ['numbers'], 'Graph-ET-Util');
smalltalk.addMethod(
smalltalk.method({
selector: "annotatedFrequency",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._annotatedFrequencyWithAmountOfIntervals_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"annotatedFrequency",{},smalltalk.GETDistribution)})},
args: [],
source: "annotatedFrequency\x0a\x09^ self annotatedFrequencyWithAmountOfIntervals: 4",
messageSends: ["annotatedFrequencyWithAmountOfIntervals:"],
referencedClasses: []
}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "annotatedFrequencyMin:max:amountOfIntervals:",
category: 'public',
fn: function (numberMin,numberMax,nbOfIntervals){
var self=this;
var interval,running,tmp,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$6,$7,$8,$5,$9;
$2=_st(numberMax).__plus((1));
$ctx1.sendIdx["+"]=1;
$1=_st($2).__minus(numberMin);
interval=_st($1).__slash(nbOfIntervals);
running=numberMin;
tmp=_st(self["@numbers"])._copy();
result=_st($OrderedCollection())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(running)._asFloat()).__lt(numberMax);
$ctx2.sendIdx["<"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
var c;
return smalltalk.withContext(function($ctx2) {
c=_st(tmp)._select_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(_st(v).__gt_eq(running))._and_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(running).__plus(interval);
$ctx4.sendIdx["+"]=2;
return _st(v).__lt($3);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2,3)})}));
c;
$4=result;
$6=running;
$7=_st(interval).__plus(running);
$ctx2.sendIdx["+"]=3;
$8=_st(c)._asArray();
$ctx2.sendIdx["asArray"]=1;
$5=_st($Array())._with_with_with_($6,$7,$8);
_st($4)._add_($5);
tmp=_st(tmp)._copyWithoutAll_(c);
tmp;
running=_st(running).__plus(interval);
return running;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,2)})}));
$9=_st(result)._asArray();
return $9;
}, function($ctx1) {$ctx1.fill(self,"annotatedFrequencyMin:max:amountOfIntervals:",{numberMin:numberMin,numberMax:numberMax,nbOfIntervals:nbOfIntervals,interval:interval,running:running,tmp:tmp,result:result},smalltalk.GETDistribution)})},
args: ["numberMin", "numberMax", "nbOfIntervals"],
source: "annotatedFrequencyMin: numberMin max: numberMax amountOfIntervals: nbOfIntervals\x0a\x0a\x09| interval running tmp result |\x0a\x09interval := ((numberMax + 1 - numberMin) / nbOfIntervals).\x0a\x09running := numberMin.\x0a\x09\x0a\x09tmp := numbers copy.\x0a\x09result := OrderedCollection new.\x0a\x09[ running asFloat < numberMax ] whileTrue: [ \x0a\x09\x09| c |\x0a\x09\x09c := tmp select: [ :v | v >= running and: [ v < (running + interval) ]].\x0a\x09\x09result add: (Array with: running with: interval + running with: c asArray).\x0a\x09\x09tmp := tmp copyWithoutAll: c.\x0a\x09\x09running := running + interval ].\x0a\x09\x0a\x09^ result asArray",
messageSends: ["/", "-", "+", "copy", "new", "whileTrue:", "<", "asFloat", "select:", "and:", ">=", "add:", "with:with:with:", "asArray", "copyWithoutAll:"],
referencedClasses: ["OrderedCollection", "Array"]
}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "annotatedFrequencyWithAmountOfIntervals:",
category: 'public',
fn: function (aSmallInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._annotatedFrequencyMin_max_amountOfIntervals_(_st(self["@numbers"])._min(),_st(self["@numbers"])._max(),aSmallInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"annotatedFrequencyWithAmountOfIntervals:",{aSmallInteger:aSmallInteger},smalltalk.GETDistribution)})},
args: ["aSmallInteger"],
source: "annotatedFrequencyWithAmountOfIntervals: aSmallInteger \x0a\x09^ self annotatedFrequencyMin: numbers min max: numbers max amountOfIntervals: aSmallInteger",
messageSends: ["annotatedFrequencyMin:max:amountOfIntervals:", "min", "max"],
referencedClasses: []
}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "frequency",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._frequencyWithAmountOfIntervals_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"frequency",{},smalltalk.GETDistribution)})},
args: [],
source: "frequency\x0a\x09^ self frequencyWithAmountOfIntervals: 4",
messageSends: ["frequencyWithAmountOfIntervals:"],
referencedClasses: []
}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "frequencyMin:max:amountOfIntervals:",
category: 'public',
fn: function (numberMin,numberMax,nbOfIntervals){
var self=this;
var interval,running,tmp,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5,$6;
$2=_st(numberMax).__plus((1));
$ctx1.sendIdx["+"]=1;
$1=_st($2).__minus(numberMin);
interval=_st($1).__slash(nbOfIntervals);
running=numberMin;
tmp=_st(self["@numbers"])._copy();
result=_st($OrderedCollection())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(running)._asFloat()).__lt(numberMax);
$ctx2.sendIdx["<"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
var c;
return smalltalk.withContext(function($ctx2) {
c=_st(tmp)._select_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(_st(v).__gt_eq(running))._and_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(running).__plus(interval);
$ctx4.sendIdx["+"]=2;
return _st(v).__lt($3);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2,3)})}));
c;
$4=result;
$5=_st(c)._asArray();
$ctx2.sendIdx["asArray"]=1;
_st($4)._add_($5);
tmp=_st(tmp)._copyWithoutAll_(c);
tmp;
running=_st(running).__plus(interval);
return running;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,2)})}));
$6=_st(result)._asArray();
return $6;
}, function($ctx1) {$ctx1.fill(self,"frequencyMin:max:amountOfIntervals:",{numberMin:numberMin,numberMax:numberMax,nbOfIntervals:nbOfIntervals,interval:interval,running:running,tmp:tmp,result:result},smalltalk.GETDistribution)})},
args: ["numberMin", "numberMax", "nbOfIntervals"],
source: "frequencyMin: numberMin max: numberMax amountOfIntervals: nbOfIntervals\x0a\x0a\x09| interval running tmp result |\x0a\x09interval := ((numberMax + 1 - numberMin) / nbOfIntervals).\x0a\x09running := numberMin.\x0a\x09\x0a\x09tmp := numbers copy.\x0a\x09result := OrderedCollection new.\x0a\x09[ running asFloat < numberMax ] whileTrue: [ \x0a\x09\x09| c |\x0a\x09\x09c := tmp select: [ :v | v >= running and: [ v < (running + interval) ]].\x0a\x09\x09result add: c asArray.\x0a\x09\x09tmp := tmp copyWithoutAll: c.\x0a\x09\x09running := running + interval ].\x0a\x09\x0a\x09^ result asArray",
messageSends: ["/", "-", "+", "copy", "new", "whileTrue:", "<", "asFloat", "select:", "and:", ">=", "add:", "asArray", "copyWithoutAll:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "frequencyWithAmountOfIntervals:",
category: 'public',
fn: function (aSmallInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._frequencyMin_max_amountOfIntervals_(_st(self["@numbers"])._min(),_st(self["@numbers"])._max(),aSmallInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"frequencyWithAmountOfIntervals:",{aSmallInteger:aSmallInteger},smalltalk.GETDistribution)})},
args: ["aSmallInteger"],
source: "frequencyWithAmountOfIntervals: aSmallInteger \x0a\x09^ self frequencyMin: numbers min max: numbers max amountOfIntervals: aSmallInteger",
messageSends: ["frequencyMin:max:amountOfIntervals:", "min", "max"],
referencedClasses: []
}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'as yet unclassified',
fn: function (collectionOfNumbers){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numbers"]=collectionOfNumbers;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{collectionOfNumbers:collectionOfNumbers},smalltalk.GETDistribution)})},
args: ["collectionOfNumbers"],
source: "on: collectionOfNumbers\x0a\x09numbers := collectionOfNumbers",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETDistribution);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._on_(anArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anArray:anArray},smalltalk.GETDistribution.klass)})},
args: ["anArray"],
source: "on: anArray \x0a\x09^ self new on: anArray",
messageSends: ["on:", "new"],
referencedClasses: []
}),
smalltalk.GETDistribution.klass);


smalltalk.addClass('GETInteractionWrapper', smalltalk.Object, ['diagram'], 'Graph-ET-Util');
smalltalk.addMethod(
smalltalk.method({
selector: "diagram",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"diagram",{},smalltalk.GETInteractionWrapper)})},
args: [],
source: "diagram\x0a\x09\x0a\x09^ diagram",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "diagram:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@diagram"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"diagram:",{anObject:anObject},smalltalk.GETInteractionWrapper)})},
args: ["anObject"],
source: "diagram: anObject\x0a\x09\x0a\x09diagram := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "draggable",
category: 'interaction',
fn: function (){
var self=this;
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_($RODraggable());
return self}, function($ctx1) {$ctx1.fill(self,"draggable",{},smalltalk.GETInteractionWrapper)})},
args: [],
source: "draggable\x0a\x0a\x09(self diagram) do: RODraggable.",
messageSends: ["do:", "diagram"],
referencedClasses: ["RODraggable"]
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "growable",
category: 'interaction',
fn: function (){
var self=this;
function $ROGrowable(){return smalltalk.ROGrowable||(typeof ROGrowable=="undefined"?nil:ROGrowable)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_($ROGrowable());
return self}, function($ctx1) {$ctx1.fill(self,"growable",{},smalltalk.GETInteractionWrapper)})},
args: [],
source: "growable\x0a\x0a\x09(self diagram) do: ROGrowable.",
messageSends: ["do:", "diagram"],
referencedClasses: ["ROGrowable"]
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'interaction',
fn: function (anEvent,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._on_do_(anEvent,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{anEvent:anEvent,aBlock:aBlock},smalltalk.GETInteractionWrapper)})},
args: ["anEvent", "aBlock"],
source: "on: anEvent do: aBlock\x0a\x0a\x09(self diagram) on: anEvent do: aBlock.",
messageSends: ["on:do:", "diagram"],
referencedClasses: []
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpText",
category: 'interaction',
fn: function (){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_($ROPopup());
return self}, function($ctx1) {$ctx1.fill(self,"popUpText",{},smalltalk.GETInteractionWrapper)})},
args: [],
source: "popUpText\x0a\x0a\x09(self diagram) do: ROPopup.",
messageSends: ["do:", "diagram"],
referencedClasses: ["ROPopup"]
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpText:",
category: 'interaction',
fn: function (aBlock){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_(_st($ROPopup())._text_((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"popUpText:",{aBlock:aBlock},smalltalk.GETInteractionWrapper)})},
args: ["aBlock"],
source: "popUpText: aBlock\x0a\x0a\x09(self diagram) do: (ROPopup text: [:event | aBlock value: event]).",
messageSends: ["do:", "diagram", "text:", "value:"],
referencedClasses: ["ROPopup"]
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "strongHighlightWhenClick",
category: 'interaction',
fn: function (){
var self=this;
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROBlink(){return smalltalk.ROBlink||(typeof ROBlink=="undefined"?nil:ROBlink)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self._diagram())._on_do_($ROMouseClick(),(function(event){
var attributes;
return smalltalk.withContext(function($ctx2) {
$1=_st(event)._element();
$ctx2.sendIdx["element"]=1;
attributes=_st($1)._attributes();
attributes;
$2=_st(attributes)._includesKey_("isPressed");
if(smalltalk.assert($2)){
$3=_st(event)._element();
$ctx2.sendIdx["element"]=2;
_st($ROBlink())._unhighlight_($3);
return _st(attributes)._removeKey_("isPressed");
} else {
_st($ROBlink())._highlight_(_st(event)._element());
return _st(attributes)._at_put_("isPressed",true);
};
}, function($ctx2) {$ctx2.fillBlock({event:event,attributes:attributes},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"strongHighlightWhenClick",{},smalltalk.GETInteractionWrapper)})},
args: [],
source: "strongHighlightWhenClick\x0a\x0a\x09(self diagram) on: ROMouseClick do: [:event |\x0a\x09\x09| attributes |\x0a\x09\x09attributes := event element attributes.\x0a\x09\x09\x0a\x09\x09(attributes includesKey: #isPressed)\x0a\x09\x09\x09ifTrue: [ROBlink unhighlight:  event element. \x0a\x09\x09\x09\x09attributes removeKey: #isPressed ]\x0a\x09\x09\x09ifFalse: [ROBlink highlight: event element.\x0a\x09\x09\x09\x09attributes at: #isPressed put: true ].\x0a\x09\x09].",
messageSends: ["on:do:", "diagram", "attributes", "element", "ifTrue:ifFalse:", "includesKey:", "unhighlight:", "removeKey:", "highlight:", "at:put:"],
referencedClasses: ["ROMouseClick", "ROBlink"]
}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "strongHighlightWhenOver",
category: 'interaction',
fn: function (){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROBlink(){return smalltalk.ROBlink||(typeof ROBlink=="undefined"?nil:ROBlink)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._diagram();
$ctx1.sendIdx["diagram"]=1;
_st($1)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
$2=_st(event)._element();
$ctx2.sendIdx["element"]=1;
return _st($ROBlink())._highlight_($2);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(self._diagram())._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($ROBlink())._unhighlight_(_st(event)._element());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"strongHighlightWhenOver",{},smalltalk.GETInteractionWrapper)})},
args: [],
source: "strongHighlightWhenOver\x0a\x0a\x09(self diagram) on: ROMouseEnter do: [:event | ROBlink highlight: event element].\x0a\x09(self diagram) on: ROMouseLeave do: [:event | ROBlink unhighlight: event element].",
messageSends: ["on:do:", "diagram", "highlight:", "element", "unhighlight:"],
referencedClasses: ["ROMouseEnter", "ROBlink", "ROMouseLeave"]
}),
smalltalk.GETInteractionWrapper);


});
