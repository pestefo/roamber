smalltalk.addPackage('Roassal-Amber-Extentions');
smalltalk.addClass('IdentityDictionary', smalltalk.Dictionary, [], 'Roassal-Amber-Extentions');


smalltalk.addClass('IdentitySet', smalltalk.Set, [], 'Roassal-Amber-Extentions');


smalltalk.addClass('Symbol', smalltalk.String, [], 'Roassal-Amber-Extentions');


smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
fn: function (aBlock){
var self=this;
function $AssertionFailure(){return smalltalk.AssertionFailure||(typeof AssertionFailure=="undefined"?nil:AssertionFailure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
if(! smalltalk.assert($1)){
_st($AssertionFailure())._signal_("Assertion failed");
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:",{aBlock:aBlock},smalltalk.Object)})},
messageSends: ["ifFalse:", "signal:", "value"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "assert:description:",
fn: function (aBlock,aString){
var self=this;
function $AssertionFailure(){return smalltalk.AssertionFailure||(typeof AssertionFailure=="undefined"?nil:AssertionFailure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
if(! smalltalk.assert($1)){
_st($AssertionFailure())._signal_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:description:",{aBlock:aBlock,aString:aString},smalltalk.Object)})},
messageSends: ["ifFalse:", "signal:", "value"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "browse",
fn: function (){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
_st($Browser())._openOn_(self._class());
return self}, function($ctx1) {$ctx1.fill(self,"browse",{},smalltalk.Object)})},
messageSends: ["openOn:", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "deny:",
fn: function (aBlock){
var self=this;
function $AssertionFailure(){return smalltalk.AssertionFailure||(typeof AssertionFailure=="undefined"?nil:AssertionFailure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
if(smalltalk.assert($1)){
_st($AssertionFailure())._signal_("Assertion failed");
};
return self}, function($ctx1) {$ctx1.fill(self,"deny:",{aBlock:aBlock},smalltalk.Object)})},
messageSends: ["ifTrue:", "signal:", "value"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarNamed:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarNamed:",{aString:aString},smalltalk.Object)})},
messageSends: ["instVarAt:"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCollection",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isRORectangle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRORectangle",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isRectangle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRectangle",{},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anArgument:anArgument},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldnt:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"shouldnt:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},smalltalk.Object)})},
messageSends: ["assert:", "on:do:", "value"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfSubscriptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@subscriptions"];
if(($receiver = $1) == nil || $receiver == undefined){
return (0);
} else {
$1;
};
$2=_st(self["@subscriptions"])._size();
return $2;
}, function($ctx1) {$ctx1.fill(self,"numberOfSubscriptions",{},smalltalk.Announcer)})},
messageSends: ["ifNil:", "size"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "unsubscribe:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._removeAllSuchThat_((function(announSubscript){
return smalltalk.withContext(function($ctx2) {
return _st(_st(announSubscript)._announcementClass()).__eq_eq(_st(anEvent)._class());
}, function($ctx2) {$ctx2.fillBlock({announSubscript:announSubscript},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anEvent:anEvent},smalltalk.Announcer)})},
messageSends: ["removeAllSuchThat:", "==", "class", "announcementClass"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (aClass,aBlock){
var self=this;
function $AnnouncementSubscription(){return smalltalk.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AnnouncementSubscription())._new();
_st($1)._block_(aBlock);
_st($1)._announcementClass_(aClass);
$2=_st($1)._yourself();
_st(self["@subscriptions"])._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{aClass:aClass,aBlock:aBlock},smalltalk.Announcer)})},
messageSends: ["add:", "block:", "new", "announcementClass:", "yourself"]}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: ">>",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString},smalltalk.Behavior)})},
messageSends: ["methodAt:"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSuperclasses",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st(self._superclass())._isNil();
if(smalltalk.assert($1)){
$2=_st($Array())._new();
return $2;
} else {
$4=_st($Array())._with_(self._superclass());
_st($4)._addAll_(_st(self._superclass())._allSuperclasses());
$5=_st($4)._yourself();
$3=$5;
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},smalltalk.Behavior)})},
messageSends: ["ifTrue:ifFalse:", "new", "addAll:", "allSuperclasses", "superclass", "with:", "yourself", "isNil"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instanceVariableNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarNames",{},smalltalk.Behavior)})},
messageSends: ["instanceVariableNames"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "linesOfCode",
fn: function (){
var self=this;
var linesCount;
return smalltalk.withContext(function($ctx1) { 
var $1;
linesCount=(0);
_st(self._methods())._do_((function(m){
return smalltalk.withContext(function($ctx2) {
linesCount=_st(linesCount).__plus(_st(_st(m)._source())._lineCount());
return linesCount;
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
$1=linesCount;
return $1;
}, function($ctx1) {$ctx1.fill(self,"linesOfCode",{linesCount:linesCount},smalltalk.Behavior)})},
messageSends: ["do:", "+", "lineCount", "source", "methods"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var arr = smalltalk.Array._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			arr._add_(methods[i]);
		}
	};
	return arr;
return self}, function($ctx1) {$ctx1.fill(self,"methods",{},smalltalk.Behavior)})},
messageSends: []}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLinesOfCode",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._linesOfCode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfLinesOfCode",{},smalltalk.Behavior)})},
messageSends: ["linesOfCode"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfMethods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfMethods",{},smalltalk.Behavior)})},
messageSends: ["size", "methodDictionary"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfSubclasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._subclasses())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfSubclasses",{},smalltalk.Behavior)})},
messageSends: ["size", "subclasses"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfVariables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instanceVariableNames())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfVariables",{},smalltalk.Behavior)})},
messageSends: ["size", "instanceVariableNames"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "withAllSuperclasses",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._with_(self);
_st($2)._addAll_(self._allSuperclasses());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withAllSuperclasses",{},smalltalk.Behavior)})},
messageSends: ["addAll:", "allSuperclasses", "with:", "yourself"]}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "fork",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fork",{},smalltalk.BlockClosure)})},
messageSends: ["value"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (valueOrArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(self._numArgs()).__eq((0));
if(smalltalk.assert($1)){
$2=self._value();
return $2;
};
$3=_st(self._numArgs()).__eq((1));
if(smalltalk.assert($3)){
$4=self._value_(valueOrArray);
return $4;
};
$5=_st(valueOrArray)._isCollection();
if(! smalltalk.assert($5)){
self._error_("A block with more than one argument can only be evaluated with a collection ");
};
$6=_st(self._numArgs()).__eq(_st(valueOrArray)._size());
if(smalltalk.assert($6)){
$7=self._valueWithArguments_(valueOrArray);
return $7;
};
self._error_("Incorrect number of arguments");
return self}, function($ctx1) {$ctx1.fill(self,"roValue:",{valueOrArray:valueOrArray},smalltalk.BlockClosure)})},
messageSends: ["ifTrue:", "value", "=", "numArgs", "value:", "ifFalse:", "error:", "isCollection", "valueWithArguments:", "size"]}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(! smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["do:", "ifFalse:", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anySatisfy:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"anySatisfy:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["do:", "ifTrue:", "value:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithout:",
fn: function (anObject){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyWithoutAll_(_st($Array())._with_(anObject));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithout:",{anObject:anObject},smalltalk.Collection)})},
messageSends: ["copyWithoutAll:", "with:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detectMax:",
fn: function (aBlock){
var self=this;
var maxElement,maxValue;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self._do_((function(each){
var val;
return smalltalk.withContext(function($ctx2) {
$1=_st(maxValue).__eq_eq(nil);
if(smalltalk.assert($1)){
maxElement=each;
maxElement;
maxValue=_st(aBlock)._value_(each);
return maxValue;
} else {
val=_st(aBlock)._value_(each);
$2=_st(val).__gt(maxValue);
if(smalltalk.assert($2)){
maxElement=each;
maxElement;
maxValue=val;
return maxValue;
};
};
}, function($ctx2) {$ctx2.fillBlock({each:each,val:val},$ctx1)})}));
$3=maxElement;
return $3;
}, function($ctx1) {$ctx1.fill(self,"detectMax:",{aBlock:aBlock,maxElement:maxElement,maxValue:maxValue},smalltalk.Collection)})},
messageSends: ["do:", "ifFalse:ifTrue:", "ifTrue:", ">", "value:", "=="]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "difference:",
fn: function (aCollection){
var self=this;
var set;
return smalltalk.withContext(function($ctx1) { 
var $1;
set=self._asSet();
_st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(set)._remove_ifAbsent_(each,(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=_st(self._class())._withAll_(_st(set)._asArray());
return $1;
}, function($ctx1) {$ctx1.fill(self,"difference:",{aCollection:aCollection,set:set},smalltalk.Collection)})},
messageSends: ["asSet", "do:", "remove:ifAbsent:", "withAll:", "asArray", "class"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesAll:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(aCollection)._do_((function(elem){
return smalltalk.withContext(function($ctx2) {
$1=self._includes_(elem);
if(! smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"includesAll:",{aCollection:aCollection},smalltalk.Collection)})},
messageSends: ["do:", "ifFalse:", "includes:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesAllOf:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._includesAll_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesAllOf:",{aCollection:aCollection},smalltalk.Collection)})},
messageSends: ["includesAll:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isCollection",{},smalltalk.Collection)})},
messageSends: []}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inject_into_(self._first(),(function(max,each){
return smalltalk.withContext(function($ctx2) {
return _st(max)._max_(each);
}, function($ctx2) {$ctx2.fillBlock({max:max,each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"max",{},smalltalk.Collection)})},
messageSends: ["inject:into:", "first", "max:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllSuchThat:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._copy())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(aBlock)._value_(each);
if(smalltalk.assert($1)){
return self._remove_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeAllSuchThat:",{aBlock:aBlock},smalltalk.Collection)})},
messageSends: ["do:", "ifTrue:", "remove:", "value:", "copy"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "sum:",
fn: function (aBlock){
var self=this;
var sum,sample;
return smalltalk.withContext(function($ctx1) { 
var $1;
sample=_st(aBlock)._value_(self._first());
sum=self._inject_into_(sample,(function(previousValue,each){
return smalltalk.withContext(function($ctx2) {
return _st(previousValue).__plus(_st(aBlock)._value_(each));
}, function($ctx2) {$ctx2.fillBlock({previousValue:previousValue,each:each},$ctx1)})}));
$1=_st(sum).__minus(sample);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sum:",{aBlock:aBlock,sum:sum,sample:sample},smalltalk.Collection)})},
messageSends: ["value:", "first", "inject:into:", "+", "-"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(anIndex,(function(){
return smalltalk.withContext(function($ctx2) {
return self._at_put_(anIndex,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{anIndex:anIndex,aBlock:aBlock},smalltalk.Dictionary)})},
messageSends: ["at:ifAbsent:", "at:put:", "value"]}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "atAllPut:",
fn: function (anObject){
var self=this;
var size;
return smalltalk.withContext(function($ctx1) { 
var $1;
size=self._size();
$1=_st(size).__gt((26));
if(smalltalk.assert($1)){
self._from_to_put_((1),size,anObject);
} else {
(1)._to_do_(size,(function(index){
return smalltalk.withContext(function($ctx2) {
return self._at_put_(index,anObject);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"atAllPut:",{anObject:anObject,size:size},smalltalk.SequenceableCollection)})},
messageSends: ["ifTrue:ifFalse:", "from:to:put:", "to:do:", "at:put:", ">", "size"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fifth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fifth",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reverse",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._reversed();
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverse",{},smalltalk.SequenceableCollection)})},
messageSends: ["reversed"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "roSwapElement:withElement:",
fn: function (u,v){
var self=this;
var index1,index2;
return smalltalk.withContext(function($ctx1) { 
index1=self._indexOf_(u);
index2=self._indexOf_(v);
self._at_put_(index2,u);
self._at_put_(index1,v);
return self}, function($ctx1) {$ctx1.fill(self,"roSwapElement:withElement:",{u:u,v:v,index1:index1,index2:index2},smalltalk.SequenceableCollection)})},
messageSends: ["indexOf:", "at:put:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
fn: function (otherCollection,twoArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(otherCollection)._size()).__eq(self._size());
if(! smalltalk.assert($1)){
self._error_("otherCollection must be the same size");
};
(1)._to_do_(self._size(),(function(index){
return smalltalk.withContext(function($ctx2) {
return _st(twoArgBlock)._value_value_(self._at_(index),_st(otherCollection)._at_(index));
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{otherCollection:otherCollection,twoArgBlock:twoArgBlock},smalltalk.SequenceableCollection)})},
messageSends: ["ifFalse:", "error:", "=", "size", "to:do:", "value:value:", "at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
fn: function (interactionClassOrObject){
var self=this;
var obj;
return smalltalk.withContext(function($ctx1) { 
var $1;
obj=_st(interactionClassOrObject)._elementToBeAdded();
self._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._addInteraction_(obj);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"@",{interactionClassOrObject:interactionClassOrObject,obj:obj},smalltalk.Array)})},
messageSends: ["elementToBeAdded", "do:", "addInteraction:"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "addFirst:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.unshift(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"addFirst:",{anObject:anObject},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asSorted:",
fn: function (aBlockOrSymbol){
var self=this;
var c,b;
function $BlockClosure(){return smalltalk.BlockClosure||(typeof BlockClosure=="undefined"?nil:BlockClosure)}
function $Symbol(){return smalltalk.Symbol||(typeof Symbol=="undefined"?nil:Symbol)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
c=self._copy();
$1=_st(aBlockOrSymbol)._isKindOf_($BlockClosure());
if(smalltalk.assert($1)){
b=aBlockOrSymbol;
b;
};
$2=_st(aBlockOrSymbol)._isKindOf_($Symbol());
if(smalltalk.assert($2)){
b=(function(v1,v2){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v1)._perform_(aBlockOrSymbol)).__lt_eq(_st(v2)._perform_(aBlockOrSymbol));
}, function($ctx2) {$ctx2.fillBlock({v1:v1,v2:v2},$ctx1)})});
b;
};
_st(c)._sort_(b);
$3=c;
return $3;
}, function($ctx1) {$ctx1.fill(self,"asSorted:",{aBlockOrSymbol:aBlockOrSymbol,c:c,b:b},smalltalk.Array)})},
messageSends: ["copy", "ifTrue:", "isKindOf:", "<=", "perform:", "sort:"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
fn: function (anIndex,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(anIndex,(function(){
return smalltalk.withContext(function($ctx2) {
return self._at_put_(anIndex,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{anIndex:anIndex,aBlock:aBlock},smalltalk.Array)})},
messageSends: ["at:ifAbsent:", "at:put:", "value"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeIncludes:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNumber).__gt_eq(self._first()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aNumber).__lt_eq(self._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeIncludes:",{aNumber:aNumber},smalltalk.Array)})},
messageSends: ["and:", "<=", "last", ">=", "first"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFirst",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var o = self.shift(); return o;;
return self}, function($ctx1) {$ctx1.fill(self,"removeFirst",{},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFirst:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.shift(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"removeFirst:",{anObject:anObject},smalltalk.Array)})},
messageSends: []}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:with:",
fn: function (anObject,anObject2,anObject3,anObject4){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new_((3));
_st($2)._at_put_((1),anObject);
_st($2)._at_put_((2),anObject2);
_st($2)._at_put_((3),anObject3);
_st($2)._at_put_((4),anObject4);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3,anObject4:anObject4},smalltalk.Array.klass)})},
messageSends: ["at:put:", "new:", "yourself"]}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "beginsWith:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return(self.indexOf(aString) == 0);
return self}, function($ctx1) {$ctx1.fill(self,"beginsWith:",{aString:aString},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "capitalized",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"capitalized",{},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceAll:with:",
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._replace_with_(aString,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceAll:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
messageSends: ["replace:with:", "copy"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "endsWith:",
fn: function (suffix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.indexOf(suffix, self.length - suffix.length) !== -1;
return self}, function($ctx1) {$ctx1.fill(self,"endsWith:",{suffix:suffix},smalltalk.String)})},
messageSends: []}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineCount",
fn: function (){
var self=this;
var lineCount;
return smalltalk.withContext(function($ctx1) { 
var $1;
lineCount=(0);
self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
return smalltalk.withContext(function($ctx2) {
lineCount=_st(lineCount).__plus((1));
return lineCount;
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1)})}));
$1=lineCount;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineCount",{lineCount:lineCount},smalltalk.String)})},
messageSends: ["lineIndicesDo:", "+"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromString_(aUTFCharCode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{aUTFCharCode:aUTFCharCode},smalltalk.String.klass)})},
messageSends: ["fromString:"]}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anObject:anObject},smalltalk.Symbol)})},
messageSends: ["perform:"]}),
smalltalk.Symbol);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.Symbol)})},
messageSends: ["perform:"]}),
smalltalk.Symbol);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anObject,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Set)})},
messageSends: ["remove:ifAbsent:"]}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "//",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor( self / aNumber ) ;
return self}, function($ctx1) {$ctx1.fill(self,"//",{aNumber:aNumber},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "abs",
fn: function (){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Math())._abs_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"abs",{},smalltalk.Number)})},
messageSends: ["abs:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asFloat",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asFloat",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._truncated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asInteger",{},smalltalk.Number)})},
messageSends: ["truncated"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "ceiling",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.ceil(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"ceiling",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "max:in:",
fn: function (max,anInterval){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._min_max_in_((0),max,anInterval);
return $1;
}, function($ctx1) {$ctx1.fill(self,"max:in:",{max:max,anInterval:anInterval},smalltalk.Number)})},
messageSends: ["min:max:in:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "min:max:in:",
fn: function (min,max,anInterval){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self.__minus(min)).__slash(_st(max).__minus(min))).__star(_st(_st(anInterval)._last()).__minus(_st(anInterval)._first()))).__plus(_st(anInterval)._first());
return $1;
}, function($ctx1) {$ctx1.fill(self,"min:max:in:",{min:min,max:max,anInterval:anInterval},smalltalk.Number)})},
messageSends: ["+", "first", "*", "-", "last", "/"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.tan(self);
return self}, function($ctx1) {$ctx1.fill(self,"tan",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "//",
fn: function (arg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(arg)._isPoint();
if(smalltalk.assert($1)){
$2=_st(_st(self["@x"]).__slash_slash(_st(arg)._x())).__at(_st(self["@y"]).__slash_slash(_st(arg)._y()));
return $2;
};
$3=self.__slash_slash(_st(arg).__at(arg));
return $3;
}, function($ctx1) {$ctx1.fill(self,"//",{arg:arg},smalltalk.Point)})},
messageSends: ["ifTrue:", "@", "//", "y", "x", "isPoint"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"]).__lt(_st(aPoint)._x()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"]).__lt(_st(aPoint)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"<",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["and:", "<", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"]).__lt_eq(_st(aPoint)._x()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"]).__lt_eq(_st(aPoint)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"<=",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["and:", "<=", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"]).__gt(_st(aPoint)._x()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"]).__gt(_st(aPoint)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,">",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["and:", ">", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"]).__gt_eq(_st(aPoint)._x()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"]).__gt_eq(_st(aPoint)._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,">=",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["and:", ">=", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "asIntegerPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._x())._truncated()).__at(_st(self._y())._truncated());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asIntegerPoint",{},smalltalk.Point)})},
messageSends: ["@", "truncated", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
fn: function (aPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(self,aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner:",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["origin:corner:"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "dotProduct:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"]).__star(_st(aPoint)._x())).__plus(_st(self["@y"]).__star(_st(aPoint)._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dotProduct:",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["+", "*", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_extent_(self,aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["origin:extent:"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"])._max_(_st(aPoint)._x())).__at(_st(self["@y"])._max_(_st(aPoint)._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"max:",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["@", "max:", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"])._min_(_st(aPoint)._x())).__at(_st(self["@y"])._min_(_st(aPoint)._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"min:",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["@", "min:", "y", "x"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "negated",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0).__minus(self["@x"])).__at((0).__minus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{},smalltalk.Point)})},
messageSends: ["@", "-"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "normal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@y"])._negated()).__at(self["@x"]))._unitVector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"normal",{},smalltalk.Point)})},
messageSends: ["unitVector", "@", "negated"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "r",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._dotProduct_(self))._sqrt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"r",{},smalltalk.Point)})},
messageSends: ["sqrt", "dotProduct:"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "setX:setY:",
fn: function (aValueX,aValueY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=aValueX;
self["@y"]=aValueY;
return self}, function($ctx1) {$ctx1.fill(self,"setX:setY:",{aValueX:aValueX,aValueY:aValueY},smalltalk.Point)})},
messageSends: []}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "translatedBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateBy_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"translatedBy:",{aPoint:aPoint},smalltalk.Point)})},
messageSends: ["translateBy:"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "unitVector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__slash(self._r());
return $1;
}, function($ctx1) {$ctx1.fill(self,"unitVector",{},smalltalk.Point)})},
messageSends: ["/", "r"]}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "r:theta:",
fn: function (rad,angle){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(rad).__star(_st($Math())._cos_(angle))).__at(_st(rad).__star(_st($Math())._sin_(angle)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:theta:",{rad:rad,angle:angle},smalltalk.Point.klass)})},
messageSends: ["@", "*", "sin:", "cos:"]}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:theta:",
fn: function (rad,angle){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(rad).__star(_st($Math())._cos_(angle))).__at(_st(rad).__star(_st($Math())._sin_(angle)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius:theta:",{rad:rad,angle:angle},smalltalk.Point.klass)})},
messageSends: ["@", "*", "sin:", "cos:"]}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@model"])._isNil();
if(smalltalk.assert($2)){
$1=smalltalk.ROElement.superclass.fn.prototype._printString.apply(_st(self), []);
} else {
$1=_st(smalltalk.ROElement.superclass.fn.prototype._printString.apply(_st(self), [])).__comma(_st("<".__comma(_st(self["@model"])._printString())).__comma(">"));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.ROElement)})},
messageSends: ["ifTrue:ifFalse:", "printString", ",", "isNil"]}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "asAnnouncement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAnnouncement",{},smalltalk.ROEvent)})},
messageSends: []}),
smalltalk.ROEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "asAnnouncement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAnnouncement",{},smalltalk.ROEvent.klass)})},
messageSends: ["new"]}),
smalltalk.ROEvent.klass);

