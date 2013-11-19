smalltalk.addPackage('Graph-ET-Util');
smalltalk.addClass('GETDistribution', smalltalk.Object, ['numbers'], 'Graph-ET-Util');
smalltalk.addMethod(
smalltalk.method({
selector: "annotatedFrequency",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._annotatedFrequencyWithAmountOfIntervals_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"annotatedFrequency",{},smalltalk.GETDistribution)})},
messageSends: ["annotatedFrequencyWithAmountOfIntervals:"]}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "annotatedFrequencyMin:max:amountOfIntervals:",
fn: function (numberMin,numberMax,nbOfIntervals){
var self=this;
var interval,running,tmp,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
interval=_st(_st(_st(numberMax).__plus((1))).__minus(numberMin)).__slash(nbOfIntervals);
running=numberMin;
tmp=_st(self["@numbers"])._copy();
result=_st($OrderedCollection())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(running)._asFloat()).__lt(numberMax);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var c;
return smalltalk.withContext(function($ctx2) {
c=_st(tmp)._select_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(_st(v).__gt_eq(running))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(v).__lt(_st(running).__plus(interval));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}));
c;
_st(result)._add_(_st($Array())._with_with_with_(running,_st(interval).__plus(running),_st(c)._asArray()));
tmp=_st(tmp)._copyWithoutAll_(c);
tmp;
running=_st(running).__plus(interval);
return running;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
$1=_st(result)._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"annotatedFrequencyMin:max:amountOfIntervals:",{numberMin:numberMin,numberMax:numberMax,nbOfIntervals:nbOfIntervals,interval:interval,running:running,tmp:tmp,result:result},smalltalk.GETDistribution)})},
messageSends: ["/", "-", "+", "copy", "new", "whileTrue:", "select:", "and:", "<", ">=", "add:", "with:with:with:", "asArray", "copyWithoutAll:", "asFloat"]}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "annotatedFrequencyWithAmountOfIntervals:",
fn: function (aSmallInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._annotatedFrequencyMin_max_amountOfIntervals_(_st(self["@numbers"])._min(),_st(self["@numbers"])._max(),aSmallInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"annotatedFrequencyWithAmountOfIntervals:",{aSmallInteger:aSmallInteger},smalltalk.GETDistribution)})},
messageSends: ["annotatedFrequencyMin:max:amountOfIntervals:", "min", "max"]}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "frequency",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._frequencyWithAmountOfIntervals_((4));
return $1;
}, function($ctx1) {$ctx1.fill(self,"frequency",{},smalltalk.GETDistribution)})},
messageSends: ["frequencyWithAmountOfIntervals:"]}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "frequencyMin:max:amountOfIntervals:",
fn: function (numberMin,numberMax,nbOfIntervals){
var self=this;
var interval,running,tmp,result;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
interval=_st(_st(_st(numberMax).__plus((1))).__minus(numberMin)).__slash(nbOfIntervals);
running=numberMin;
tmp=_st(self["@numbers"])._copy();
result=_st($OrderedCollection())._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(running)._asFloat()).__lt(numberMax);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
var c;
return smalltalk.withContext(function($ctx2) {
c=_st(tmp)._select_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(_st(v).__gt_eq(running))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(v).__lt(_st(running).__plus(interval));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}));
c;
_st(result)._add_(_st(c)._asArray());
tmp=_st(tmp)._copyWithoutAll_(c);
tmp;
running=_st(running).__plus(interval);
return running;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
$1=_st(result)._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"frequencyMin:max:amountOfIntervals:",{numberMin:numberMin,numberMax:numberMax,nbOfIntervals:nbOfIntervals,interval:interval,running:running,tmp:tmp,result:result},smalltalk.GETDistribution)})},
messageSends: ["/", "-", "+", "copy", "new", "whileTrue:", "select:", "and:", "<", ">=", "add:", "asArray", "copyWithoutAll:", "asFloat"]}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "frequencyWithAmountOfIntervals:",
fn: function (aSmallInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._frequencyMin_max_amountOfIntervals_(_st(self["@numbers"])._min(),_st(self["@numbers"])._max(),aSmallInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"frequencyWithAmountOfIntervals:",{aSmallInteger:aSmallInteger},smalltalk.GETDistribution)})},
messageSends: ["frequencyMin:max:amountOfIntervals:", "min", "max"]}),
smalltalk.GETDistribution);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (collectionOfNumbers){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@numbers"]=collectionOfNumbers;
return self}, function($ctx1) {$ctx1.fill(self,"on:",{collectionOfNumbers:collectionOfNumbers},smalltalk.GETDistribution)})},
messageSends: []}),
smalltalk.GETDistribution);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._on_(anArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anArray:anArray},smalltalk.GETDistribution.klass)})},
messageSends: ["on:", "new"]}),
smalltalk.GETDistribution.klass);


smalltalk.addClass('GETInteractionWrapper', smalltalk.Object, ['diagram'], 'Graph-ET-Util');
smalltalk.addMethod(
smalltalk.method({
selector: "diagram",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@diagram"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"diagram",{},smalltalk.GETInteractionWrapper)})},
messageSends: []}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "diagram:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@diagram"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"diagram:",{anObject:anObject},smalltalk.GETInteractionWrapper)})},
messageSends: []}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "draggable",
fn: function (){
var self=this;
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_($RODraggable());
return self}, function($ctx1) {$ctx1.fill(self,"draggable",{},smalltalk.GETInteractionWrapper)})},
messageSends: ["do:", "diagram"]}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "growable",
fn: function (){
var self=this;
function $ROGrowable(){return smalltalk.ROGrowable||(typeof ROGrowable=="undefined"?nil:ROGrowable)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_($ROGrowable());
return self}, function($ctx1) {$ctx1.fill(self,"growable",{},smalltalk.GETInteractionWrapper)})},
messageSends: ["do:", "diagram"]}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (anEvent,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._on_do_(anEvent,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{anEvent:anEvent,aBlock:aBlock},smalltalk.GETInteractionWrapper)})},
messageSends: ["on:do:", "diagram"]}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpText",
fn: function (){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_($ROPopup());
return self}, function($ctx1) {$ctx1.fill(self,"popUpText",{},smalltalk.GETInteractionWrapper)})},
messageSends: ["do:", "diagram"]}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpText:",
fn: function (aBlock){
var self=this;
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._do_(_st($ROPopup())._text_((function(event){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"popUpText:",{aBlock:aBlock},smalltalk.GETInteractionWrapper)})},
messageSends: ["do:", "text:", "value:", "diagram"]}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "strongHighlightWhenClick",
fn: function (){
var self=this;
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROBlink(){return smalltalk.ROBlink||(typeof ROBlink=="undefined"?nil:ROBlink)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._diagram())._on_do_($ROMouseClick(),(function(event){
var attributes;
return smalltalk.withContext(function($ctx2) {
attributes=_st(_st(event)._element())._attributes();
attributes;
$1=_st(attributes)._includesKey_("isPressed");
if(smalltalk.assert($1)){
_st($ROBlink())._unhighlight_(_st(event)._element());
_st(attributes)._removeKey_("isPressed");
};
if(! smalltalk.assert($1)){
_st($ROBlink())._highlight_(_st(event)._element());
$2=_st(attributes)._at_put_("isPressed",true);
};
return $2;
}, function($ctx2) {$ctx2.fillBlock({event:event,attributes:attributes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"strongHighlightWhenClick",{},smalltalk.GETInteractionWrapper)})},
messageSends: ["on:do:", "attributes", "element", "ifTrue:", "unhighlight:", "removeKey:", "includesKey:", "ifFalse:", "highlight:", "at:put:", "diagram"]}),
smalltalk.GETInteractionWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "strongHighlightWhenOver",
fn: function (){
var self=this;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROBlink(){return smalltalk.ROBlink||(typeof ROBlink=="undefined"?nil:ROBlink)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
_st(self._diagram())._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($ROBlink())._highlight_(_st(event)._element());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(self._diagram())._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($ROBlink())._unhighlight_(_st(event)._element());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"strongHighlightWhenOver",{},smalltalk.GETInteractionWrapper)})},
messageSends: ["on:do:", "highlight:", "element", "diagram", "unhighlight:"]}),
smalltalk.GETInteractionWrapper);



