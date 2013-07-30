smalltalk.addPackage('Roassal-Amber-Extentions');
smalltalk.addClass('IdentityDictionary', smalltalk.Dictionary, [], 'Roassal-Amber-Extentions');


smalltalk.addClass('IdentitySet', smalltalk.Set, [], 'Roassal-Amber-Extentions');


smalltalk.addClass('Symbol', smalltalk.String, [], 'Roassal-Amber-Extentions');


smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "assert: aBlock\x0a\x09aBlock value ifFalse: [AssertionFailure signal: 'Assertion failed']",
messageSends: ["ifFalse:", "signal:", "value"],
referencedClasses: ["AssertionFailure"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "assert:description:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock", "aString"],
source: "assert: aBlock description: aString\x0a\x09aBlock value ifFalse: [AssertionFailure signal: aString]",
messageSends: ["ifFalse:", "signal:", "value"],
referencedClasses: ["AssertionFailure"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "browse",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
_st($Browser())._openOn_(self._class());
return self}, function($ctx1) {$ctx1.fill(self,"browse",{},smalltalk.Object)})},
args: [],
source: "browse\x0a\x09Browser openOn: self class.",
messageSends: ["openOn:", "class"],
referencedClasses: ["Browser"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "deny:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "deny: aBlock\x0a\x09aBlock value ifTrue: [AssertionFailure signal: 'Assertion failed']",
messageSends: ["ifTrue:", "signal:", "value"],
referencedClasses: ["AssertionFailure"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarNamed:",
category: '*Roassal-Amber-Extentions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarNamed:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "instVarNamed: aString\x0a\x09\x22Return the value of the instance variable in me with that name.  Slow and unclean, but very useful. \x22\x0a\x0a\x09^ self instVarAt: aString",
messageSends: ["instVarAt:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Object)})},
args: [],
source: "isBehavior\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollection",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isCollection",{},smalltalk.Object)})},
args: [],
source: "isCollection\x0a\x09^false.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Object)})},
args: [],
source: "isPoint\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isRORectangle",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRORectangle",{},smalltalk.Object)})},
args: [],
source: "isRORectangle\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isRectangle",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRectangle",{},smalltalk.Object)})},
args: [],
source: "isRectangle\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: '*Roassal-Amber-Extentions',
fn: function (anArgument){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anArgument:anArgument},smalltalk.Object)})},
args: ["anArgument"],
source: "roValue: anArgument \x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldnt:raise:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock", "anExceptionClass"],
source: "shouldnt: aBlock raise: anExceptionClass\x0a\x0a\x09self assert: ([aBlock value. true] \x0a\x09\x09on: anExceptionClass \x0a\x09\x09do: [:ex | false])",
messageSends: ["assert:", "on:do:", "value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfSubscriptions",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "numberOfSubscriptions\x0a\x09subscriptions ifNil:[^ 0].\x0a\x09^ subscriptions size",
messageSends: ["ifNil:", "size"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "unsubscribe:",
category: '*Roassal-Amber-Extentions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._removeAllSuchThat_((function(announSubscript){
return smalltalk.withContext(function($ctx2) {
return _st(_st(announSubscript)._announcementClass()).__eq_eq(_st(anEvent)._class());
}, function($ctx2) {$ctx2.fillBlock({announSubscript:announSubscript},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anEvent:anEvent},smalltalk.Announcer)})},
args: ["anEvent"],
source: "unsubscribe: anEvent\x0a\x09\x0a\x09subscriptions removeAllSuchThat: [:announSubscript | announSubscript announcementClass ==  anEvent class].",
messageSends: ["removeAllSuchThat:", "==", "class", "announcementClass"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: '*Roassal-Amber-Extentions',
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
args: ["aClass", "aBlock"],
source: "when: aClass do: aBlock\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09block: aBlock;\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "block:", "new", "announcementClass:", "yourself"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: ">>",
category: '*Roassal-Amber-Extentions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._methodAt_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString},smalltalk.Behavior)})},
args: ["aString"],
source: ">> aString\x0a\x0a\x09^self methodAt: aString",
messageSends: ["methodAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "allSuperclasses",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "allSuperclasses\x0a\x0a\x09(self superclass isNil) \x0a\x09\x09ifTrue:[^ Array new]\x0a\x09\x09ifFalse:[^((Array with: self superclass) addAll: (self superclass allSuperclasses); yourself)]",
messageSends: ["ifTrue:ifFalse:", "new", "addAll:", "allSuperclasses", "superclass", "with:", "yourself", "isNil"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarNames",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instanceVariableNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarNames",{},smalltalk.Behavior)})},
args: [],
source: "instVarNames\x0a\x0a\x09\x22Compatibility with Pahro for Roassal Examples\x22\x0a\x09^ self instanceVariableNames",
messageSends: ["instanceVariableNames"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBehavior",{},smalltalk.Behavior)})},
args: [],
source: "isBehavior\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "linesOfCode",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "linesOfCode\x0a\x0a\x09|linesCount|\x0a\x0a\x09linesCount := 0.\x0a\x0a\x09self methods do:[:m | linesCount := linesCount + (m source lineCount)].\x0a\x0a\x09^ linesCount",
messageSends: ["do:", "+", "lineCount", "source", "methods"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "methods",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "methods\x0a\x09\x22Compatibility with Pharo for Roassal Examples\x22\x0a\x0a\x22\x09^self methodDictionary\x22\x0a\x0a\x09<var arr = smalltalk.Array._new();\x0a\x09var methods = self.fn.prototype.methods;\x0a\x09for(var i in methods) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09arr._add_(methods[i]);\x0a\x09\x09}\x0a\x09};\x0a\x09return arr>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLinesOfCode",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._linesOfCode();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfLinesOfCode",{},smalltalk.Behavior)})},
args: [],
source: "numberOfLinesOfCode\x0a\x0a\x09^self linesOfCode",
messageSends: ["linesOfCode"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfMethods",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodDictionary())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfMethods",{},smalltalk.Behavior)})},
args: [],
source: "numberOfMethods\x0a\x09^self methodDictionary size",
messageSends: ["size", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfSubclasses",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._subclasses())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfSubclasses",{},smalltalk.Behavior)})},
args: [],
source: "numberOfSubclasses\x0a\x09^self subclasses size",
messageSends: ["size", "subclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfVariables",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instanceVariableNames())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfVariables",{},smalltalk.Behavior)})},
args: [],
source: "numberOfVariables\x0a\x09^self instanceVariableNames size",
messageSends: ["size", "instanceVariableNames"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "withAllSuperclasses",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "withAllSuperclasses\x0a\x09^(Array with: self) addAll: self allSuperclasses; yourself",
messageSends: ["addAll:", "allSuperclasses", "with:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
smalltalk.method({
selector: "fork",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fork",{},smalltalk.BlockClosure)})},
args: [],
source: "fork\x0a\x09^self value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: '*Roassal-Amber-Extentions',
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
args: ["valueOrArray"],
source: "roValue: valueOrArray\x0a\x09self numArgs = 0 ifTrue: [ ^ self value ].  \x0a\x09self numArgs = 1 ifTrue: [ ^ self value: valueOrArray ].\x0a\x09\x0a\x09\x22if I have more than 1 argument, then the valueOrArray is a collection\x22\x0a\x09valueOrArray isCollection ifFalse: [ self error: 'A block with more than one argument can only be evaluated with a collection ' ].\x0a\x09\x0a\x09self numArgs = valueOrArray size ifTrue: [ ^ self valueWithArguments: valueOrArray ]. \x0a\x09\x0a\x09self error: 'Incorrect number of arguments'",
messageSends: ["ifTrue:", "value", "=", "numArgs", "value:", "ifFalse:", "error:", "isCollection", "valueWithArguments:", "size"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "allSatisfy:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "allSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns true for any element return true.\x0a\x09Otherwise return false.\x22\x0a\x0a\x09self do: [:each | (aBlock value: each) ifFalse: [^ false]].\x0a\x09^ true",
messageSends: ["do:", "ifFalse:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anySatisfy:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "anySatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns true for any element return true.\x0a\x09Otherwise return false.\x22\x0a\x0a\x09self do: [:each | (aBlock value: each) ifTrue: [^ true]].\x0a\x09^ false",
messageSends: ["do:", "ifTrue:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "copyWithout:",
category: '*Roassal-Amber-Extentions',
fn: function (anObject){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copyWithoutAll_(_st($Array())._with_(anObject));
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyWithout:",{anObject:anObject},smalltalk.Collection)})},
args: ["anObject"],
source: "copyWithout: anObject\x0a\x0a\x09^self copyWithoutAll: (Array with: anObject)",
messageSends: ["copyWithoutAll:", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "detectMax:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "detectMax: aBlock\x0a\x09\x22Evaluate aBlock with each of the receiver's elements as the argument. \x0a\x09Answer the element for which aBlock evaluates to the highest magnitude.\x0a\x09If collection empty, return nil.  This method might also be called elect:.\x22\x0a\x0a\x09| maxElement maxValue |\x0a\x09self do: [:each | | val | \x0a\x09\x09maxValue == nil\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09(val := aBlock value: each) > maxValue ifTrue: [\x0a\x09\x09\x09\x09\x09maxElement := each.\x0a\x09\x09\x09\x09\x09maxValue := val]]\x0a\x09\x09\x09ifTrue: [\x22first element\x22\x0a\x09\x09\x09\x09maxElement := each.\x0a\x09\x09\x09\x09maxValue := aBlock value: each].\x0a\x09\x09\x09\x09\x22Note that there is no way to get the first element that works \x0a\x09\x09\x09\x09for all kinds of Collections.  Must test every one.\x22].\x0a\x09^ maxElement",
messageSends: ["do:", "ifFalse:ifTrue:", "ifTrue:", ">", "value:", "=="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "difference:",
category: '*Roassal-Amber-Extentions',
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
args: ["aCollection"],
source: "difference: aCollection\x0a\x09\x22Answer the set theoretic difference of two collections.\x22\x0a\x0a\x09| set|\x0a\x09\x0a\x09set := self asSet.\x0a\x09aCollection do: [ :each|\x0a\x09\x09set remove: each ifAbsent: []].\x0a\x09\x0a\x09^ self class withAll: set asArray",
messageSends: ["asSet", "do:", "remove:ifAbsent:", "withAll:", "asArray", "class"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesAll:",
category: '*Roassal-Amber-Extentions',
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
args: ["aCollection"],
source: "includesAll: aCollection\x0a\x0a\x09\x22Answer whether all the elements of aCollection are in the receiver.\x22\x0a\x09aCollection do: [:elem | (self includes: elem) ifFalse: [^ false]].\x0a\x09^ true",
messageSends: ["do:", "ifFalse:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "includesAllOf:",
category: '*Roassal-Amber-Extentions',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._includesAll_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesAllOf:",{aCollection:aCollection},smalltalk.Collection)})},
args: ["aCollection"],
source: "includesAllOf: aCollection\x0a\x0a\x09^self includesAll: aCollection",
messageSends: ["includesAll:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "isCollection",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isCollection",{},smalltalk.Collection)})},
args: [],
source: "isCollection\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "max",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "max\x0a\x09^ self inject: self first into: [:max :each | max max: each]",
messageSends: ["inject:into:", "first", "max:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllSuchThat:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "removeAllSuchThat: aBlock \x0a\x09\x22Evaluate aBlock for each element and remove all that elements from\x0a\x09the receiver for that aBlock evaluates to true.  Use a copy to enumerate \x0a\x09collections whose order changes when an element is removed (i.e. Sets).\x22\x0a\x0a\x09self copy do: [:each | (aBlock value: each) ifTrue: [self remove: each]]",
messageSends: ["do:", "ifTrue:", "remove:", "value:", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "sum:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlock"],
source: "sum: aBlock\x0a\x09\x22This is implemented using a variant of the normal inject:into: pattern. \x0a\x09The reason for this is that it is not known whether we're in the normal \x0a\x09number line, i.e. whether 0 is a good initial value for the sum. \x0a\x09Consider a collection of measurement objects, 0 would be the unitless \x0a\x09value and would not be appropriate to add with the unit-ed objects.\x22\x0a\x09| sum sample |\x0a\x09sample := aBlock value: self first.\x0a\x09sum := self inject: sample into: [ :previousValue :each |  previousValue + (aBlock value: each) ].\x0a\x09^ sum - sample",
messageSends: ["value:", "first", "inject:into:", "+", "-"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
category: '*Roassal-Amber-Extentions',
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
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsentPut: aBlock\x0a\x09^self at: anIndex ifAbsent: [\x0a\x09    self at: anIndex put: aBlock value]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "atAllPut:",
category: '*Roassal-Amber-Extentions',
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
args: ["anObject"],
source: "atAllPut: anObject \x0a\x09\x22Put anObject at every one of the receiver's indices.\x22\x0a\x0a\x09| size |\x0a\x09(size := self size) > 26 \x22first method faster from 27 accesses and on\x22\x0a\x09\x09ifTrue: [self from: 1 to: size put: anObject]\x0a\x09\x09ifFalse: [1 to: size do: [:index | self at: index put: anObject]]",
messageSends: ["ifTrue:ifFalse:", "from:to:put:", "to:do:", "at:put:", ">", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fifth",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fifth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "fifth\x0a\x09^self at: 5",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reverse",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._reversed();
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverse",{},smalltalk.SequenceableCollection)})},
args: [],
source: "reverse\x0a\x09^self reversed",
messageSends: ["reversed"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "roSwapElement:withElement:",
category: '*Roassal-Amber-Extentions',
fn: function (u,v){
var self=this;
var index1,index2;
return smalltalk.withContext(function($ctx1) { 
index1=self._indexOf_(u);
index2=self._indexOf_(v);
self._at_put_(index2,u);
self._at_put_(index1,v);
return self}, function($ctx1) {$ctx1.fill(self,"roSwapElement:withElement:",{u:u,v:v,index1:index1,index2:index2},smalltalk.SequenceableCollection)})},
args: ["u", "v"],
source: "roSwapElement: u withElement: v\x0a\x09| index1 index2 |\x0a\x09index1 := self indexOf: u.\x0a\x09index2 := self indexOf: v.\x0a\x09self at: index2 put: u.\x0a\x09self at: index1 put: v.",
messageSends: ["indexOf:", "at:put:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: '*Roassal-Amber-Extentions',
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
args: ["otherCollection", "twoArgBlock"],
source: "with: otherCollection do: twoArgBlock \x0a\x09\x22Evaluate twoArgBlock with corresponding elements from this collection and otherCollection.\x22\x0a\x09otherCollection size = self size ifFalse: [self error: 'otherCollection must be the same size'].\x0a\x091 to: self size do:\x0a\x09\x09[:index |\x0a\x09\x09twoArgBlock value: (self at: index)\x0a\x09\x09\x09\x09value: (otherCollection at: index)]",
messageSends: ["ifFalse:", "error:", "=", "size", "to:do:", "value:value:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
category: '*Roassal-Amber-Extentions',
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
args: ["interactionClassOrObject"],
source: "@ interactionClassOrObject\x0a\x09| obj |\x0a\x09obj := interactionClassOrObject elementToBeAdded.\x0a\x09self do: [ :el | el addInteraction: obj ].\x0a\x09^ self",
messageSends: ["elementToBeAdded", "do:", "addInteraction:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "addFirst:",
category: '*Roassal-Amber-Extentions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.unshift(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"addFirst:",{anObject:anObject},smalltalk.Array)})},
args: ["anObject"],
source: "addFirst: anObject\x0a\x09<self.unshift(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asSorted:",
category: '*Roassal-Amber-Extentions',
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
args: ["aBlockOrSymbol"],
source: "asSorted: aBlockOrSymbol\x0a\x09| c b |\x0a\x09c := self copy.\x0a\x09(aBlockOrSymbol isKindOf: BlockClosure)\x0a\x09\x09ifTrue: [ b := aBlockOrSymbol ].\x0a\x09\x09\x0a\x09(aBlockOrSymbol isKindOf: Symbol)\x0a\x09\x09ifTrue: [ b := [ :v1 :v2 | (v1 perform: aBlockOrSymbol) <= (v2 perform: aBlockOrSymbol) ] ].\x0a\x09\x09\x0a\x09c sort: b.\x0a\x09^ c",
messageSends: ["copy", "ifTrue:", "isKindOf:", "<=", "perform:", "sort:"],
referencedClasses: ["BlockClosure", "Symbol"]
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
category: '*Roassal-Amber-Extentions',
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
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsentPut: aBlock\x0a\x09^self at: anIndex ifAbsent: [\x0a\x09    self at: anIndex put: aBlock value]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeIncludes:",
category: '*Roassal-Amber-Extentions',
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
args: ["aNumber"],
source: "rangeIncludes: aNumber\x0a\x0a\x09\x22As there is not Interval class, this method is under the implementation of this in Amber\x22\x0a\x0a\x09^(aNumber >= self first and:[aNumber <= self last])",
messageSends: ["and:", "<=", "last", ">=", "first"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFirst",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var o = self.shift(); return o;;
return self}, function($ctx1) {$ctx1.fill(self,"removeFirst",{},smalltalk.Array)})},
args: [],
source: "removeFirst\x0a\x09<var o = self.shift(); return o;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFirst:",
category: '*Roassal-Amber-Extentions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.shift(anObject); return anObject;;
return self}, function($ctx1) {$ctx1.fill(self,"removeFirst:",{anObject:anObject},smalltalk.Array)})},
args: ["anObject"],
source: "removeFirst: anObject\x0a\x09<self.shift(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "with:with:with:with:",
category: '*Roassal-Amber-Extentions',
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
args: ["anObject", "anObject2", "anObject3", "anObject4"],
source: "with: anObject with: anObject2 with: anObject3 with: anObject4\x0a\x09    ^(self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09at: 4 put: anObject4;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "beginsWith:",
category: '*Roassal-Amber-Extentions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return(self.indexOf(aString) == 0);
return self}, function($ctx1) {$ctx1.fill(self,"beginsWith:",{aString:aString},smalltalk.String)})},
args: ["aString"],
source: "beginsWith: aString\x0a\x0a\x09<return(self.indexOf(aString) == 0)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "capitalized",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"capitalized",{},smalltalk.String)})},
args: [],
source: "capitalized\x0a\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "copyReplaceAll:with:",
category: '*Roassal-Amber-Extentions',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._copy())._replace_with_(aString,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"copyReplaceAll:with:",{aString:aString,anotherString:anotherString},smalltalk.String)})},
args: ["aString", "anotherString"],
source: "copyReplaceAll: aString with: anotherString\x0a\x0a\x09^self copy replace: aString with: anotherString",
messageSends: ["replace:with:", "copy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "endsWith:",
category: '*Roassal-Amber-Extentions',
fn: function (suffix){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.indexOf(suffix, self.length - suffix.length) !== -1;
return self}, function($ctx1) {$ctx1.fill(self,"endsWith:",{suffix:suffix},smalltalk.String)})},
args: ["suffix"],
source: "endsWith: suffix\x0a\x0a\x09<return self.indexOf(suffix, self.length - suffix.length) !== -1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "lineCount",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "lineCount\x0a\x09\x22Answer the number of lines represented by the receiver, where every line delimiter CR, LF or CRLF pair adds one line.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09lineCount := lineCount + 1].\x0a\x09^lineCount",
messageSends: ["lineIndicesDo:", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: '*Roassal-Amber-Extentions',
fn: function (aUTFCharCode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromString_(aUTFCharCode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{aUTFCharCode:aUTFCharCode},smalltalk.String.klass)})},
args: ["aUTFCharCode"],
source: "with: aUTFCharCode\x0a\x0a\x09^self fromString: aUTFCharCode",
messageSends: ["fromString:"],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: '*Roassal-Amber-Extentions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anObject:anObject},smalltalk.Symbol)})},
args: ["anObject"],
source: "roValue: anObject\x0a\x09^anObject perform: self",
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: '*Roassal-Amber-Extentions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.Symbol)})},
args: ["anObject"],
source: "value: anObject\x0a\x09^anObject perform: self",
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: '*Roassal-Amber-Extentions',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anObject,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Set)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09elements remove: anObject ifAbsent: aBlock",
messageSends: ["remove:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "//",
category: '*Roassal-Amber-Extentions',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor( self / aNumber ) ;
return self}, function($ctx1) {$ctx1.fill(self,"//",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "// aNumber\x0a\x0a\x09<return Math.floor( self / aNumber ) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "abs",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Math())._abs_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"abs",{},smalltalk.Number)})},
args: [],
source: "abs\x0a\x09^Math abs: self",
messageSends: ["abs:"],
referencedClasses: ["Math"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asFloat",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asFloat",{},smalltalk.Number)})},
args: [],
source: "asFloat\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asInteger",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._truncated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asInteger",{},smalltalk.Number)})},
args: [],
source: "asInteger\x0a\x09^self truncated",
messageSends: ["truncated"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "ceiling",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.ceil(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"ceiling",{},smalltalk.Number)})},
args: [],
source: "ceiling\x0a\x09\x0a\x09< return Math.ceil(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "max:in:",
category: '*Roassal-Amber-Extentions',
fn: function (max,anInterval){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._min_max_in_((0),max,anInterval);
return $1;
}, function($ctx1) {$ctx1.fill(self,"max:in:",{max:max,anInterval:anInterval},smalltalk.Number)})},
args: ["max", "anInterval"],
source: "max: max in: anInterval \x0a\x09\x22\x0a\x09(0 max: 20 in: (1 to: 10)) == 1\x0a\x09(0 max: 20 in: (0 to: 10)) == 0\x0a\x09(0 max: 20 in: (1 to: 10)) == 1\x0a\x09(2 max: 20 in: (0 to: 10)) == 1 \x0a\x09(4 max: 20 in: (0 to: 10)) == 2\x0a\x09(20 max: 20 in: (0 to: 10)) == 10\x0a\x09\x22\x0a\x09^ self min: 0 max: max in: anInterval",
messageSends: ["min:max:in:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "min:max:in:",
category: '*Roassal-Amber-Extentions',
fn: function (min,max,anInterval){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self.__minus(min)).__slash(_st(max).__minus(min))).__star(_st(_st(anInterval)._last()).__minus(_st(anInterval)._first()))).__plus(_st(anInterval)._first());
return $1;
}, function($ctx1) {$ctx1.fill(self,"min:max:in:",{min:min,max:max,anInterval:anInterval},smalltalk.Number)})},
args: ["min", "max", "anInterval"],
source: "min: min max: max in: anInterval \x0a\x09\x22\x0a\x09(0 max: 20 in: (1 to: 10)) == 1\x0a\x09(0 max: 20 in: (0 to: 10)) == 0\x0a\x09(0 max: 20 in: (1 to: 10)) == 1\x0a\x09(2 max: 20 in: (0 to: 10)) == 1 \x0a\x09(4 max: 20 in: (0 to: 10)) == 2\x0a\x09(19 max: 20 in: (0 to: 10)) == 10\x0a\x09\x22\x0a\x09^ (self - min) / (max - min) * (anInterval last - anInterval first) + anInterval first",
messageSends: ["+", "first", "*", "-", "last", "/"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.tan(self);
return self}, function($ctx1) {$ctx1.fill(self,"tan",{},smalltalk.Number)})},
args: [],
source: "tan\x0a\x09<return Math.tan(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "//",
category: '*Roassal-Amber-Extentions',
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
args: ["arg"],
source: "// arg \x0a\x09\x22Answer a Point that is the quotient of the receiver and arg.\x22\x0a\x0a\x09arg isPoint ifTrue: [^ (x // arg x) @ (y // arg y)].\x0a\x09\x22I prefer not to add many methods, so this will\x0a\x09be done like this for now. Maybe change it in the future.\x22\x09\x0a\x22\x09^ arg adaptToPoint: self andSend: #//\x22\x0a\x09^ self // (arg@arg)",
messageSends: ["ifTrue:", "@", "//", "y", "x", "isPoint"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
category: '*Roassal-Amber-Extentions',
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
args: ["aPoint"],
source: "< aPoint \x0a\x09\x22Answer whether the receiver is above and to the left of aPoint.\x22\x0a\x0a\x09^x < aPoint x and: [y < aPoint y]",
messageSends: ["and:", "<", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
category: '*Roassal-Amber-Extentions',
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
args: ["aPoint"],
source: "<= aPoint \x0a\x09\x22Answer whether the receiver is above and to the left of aPoint.\x22\x0a\x0a\x09^x <= aPoint x and: [y <= aPoint y]",
messageSends: ["and:", "<=", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
category: '*Roassal-Amber-Extentions',
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
args: ["aPoint"],
source: "> aPoint \x0a\x09\x22Answer whether the receiver is above and to the left of aPoint.\x22\x0a\x0a\x09^x > aPoint x and: [y > aPoint y]",
messageSends: ["and:", ">", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
category: '*Roassal-Amber-Extentions',
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
args: ["aPoint"],
source: ">= aPoint \x0a\x09\x22Answer whether the receiver is above and to the left of aPoint.\x22\x0a\x0a\x09^x >= aPoint x and: [y >= aPoint y]",
messageSends: ["and:", ">=", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "asIntegerPoint",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._x())._truncated()).__at(_st(self._y())._truncated());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asIntegerPoint",{},smalltalk.Point)})},
args: [],
source: "asIntegerPoint\x0a\x0a\x09 ^(self x truncated)@(self y truncated)",
messageSends: ["@", "truncated", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "corner:",
category: '*Roassal-Amber-Extentions',
fn: function (aPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(self,aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner:",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "corner: aPoint\x0a\x09^Rectangle origin: self corner: aPoint",
messageSends: ["origin:corner:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "dotProduct:",
category: '*Roassal-Amber-Extentions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"]).__star(_st(aPoint)._x())).__plus(_st(self["@y"]).__star(_st(aPoint)._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dotProduct:",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "dotProduct: aPoint \x0a\x09\x22Answer a Number that is the dot product of the receiver and the argument, aPoint.\x0a\x09That is, the two points are multiplied and the coordinates of the result summed.\x22\x0a\x0a\x09^(x* aPoint x) +  (y * aPoint y)",
messageSends: ["+", "*", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: '*Roassal-Amber-Extentions',
fn: function (aPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_extent_(self,aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^Rectangle origin: self extent: aPoint",
messageSends: ["origin:extent:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isPoint",{},smalltalk.Point)})},
args: [],
source: "isPoint\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
category: '*Roassal-Amber-Extentions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"])._max_(_st(aPoint)._x())).__at(_st(self["@y"])._max_(_st(aPoint)._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"max:",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "max: aPoint \x0a\x09\x22Answer the lower right corner of the rectangle uniquely defined by the \x0a\x09receiver and the argument, aPoint.\x22\x0a\x0a\x09^ (x max: aPoint x) @ (y max: aPoint y)",
messageSends: ["@", "max:", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
category: '*Roassal-Amber-Extentions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@x"])._min_(_st(aPoint)._x())).__at(_st(self["@y"])._min_(_st(aPoint)._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"min:",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "min: aPoint \x0a\x09\x22Answer the lower right corner of the rectangle uniquely defined by the \x0a\x09receiver and the argument, aPoint.\x22\x0a\x0a\x09^ (x min: aPoint x) @ (y min: aPoint y)",
messageSends: ["@", "min:", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "negated",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0).__minus(self["@x"])).__at((0).__minus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{},smalltalk.Point)})},
args: [],
source: "negated\x0a\x09^(0-x)@(0-y)",
messageSends: ["@", "-"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "normal",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@y"])._negated()).__at(self["@x"]))._unitVector();
return $1;
}, function($ctx1) {$ctx1.fill(self,"normal",{},smalltalk.Point)})},
args: [],
source: "normal\x0a\x09\x22Answer a new Point representing the unit vector rotated 90 deg \x0a\x09toward the y axis.\x22\x0a\x0a\x09^(y negated @ x) unitVector",
messageSends: ["unitVector", "@", "negated"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "r",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._dotProduct_(self))._sqrt();
return $1;
}, function($ctx1) {$ctx1.fill(self,"r",{},smalltalk.Point)})},
args: [],
source: "r\x0a\x09\x22Answer the receiver's radius in polar coordinate system.\x22\x0a\x0a\x09^(self dotProduct: self) sqrt",
messageSends: ["sqrt", "dotProduct:"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "setX:setY:",
category: '*Roassal-Amber-Extentions',
fn: function (aValueX,aValueY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@x"]=aValueX;
self["@y"]=aValueY;
return self}, function($ctx1) {$ctx1.fill(self,"setX:setY:",{aValueX:aValueX,aValueY:aValueY},smalltalk.Point)})},
args: ["aValueX", "aValueY"],
source: "setX: aValueX setY: aValueY\x0a\x0a\x09x := aValueX.\x0a\x09y := aValueY.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "translatedBy:",
category: '*Roassal-Amber-Extentions',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateBy_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"translatedBy:",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "translatedBy: aPoint\x0a\x09\x22Compatibility with visualworks\x22\x0a\x09^ self translateBy: aPoint",
messageSends: ["translateBy:"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "unitVector",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__slash(self._r());
return $1;
}, function($ctx1) {$ctx1.fill(self,"unitVector",{},smalltalk.Point)})},
args: [],
source: "unitVector\x0a\x09\x22Answer the receiver scaled to unit length.\x22\x0a\x0a\x09^self / self r",
messageSends: ["/", "r"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "r:theta:",
category: '*Roassal-Amber-Extentions',
fn: function (rad,angle){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(rad).__star(_st($Math())._cos_(angle))).__at(_st(rad).__star(_st($Math())._sin_(angle)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:theta:",{rad:rad,angle:angle},smalltalk.Point.klass)})},
args: ["rad", "angle"],
source: "r: rad theta: angle\x0a\x09^(rad * (Math cos: angle))@(rad * (Math sin: angle))",
messageSends: ["@", "*", "sin:", "cos:"],
referencedClasses: ["Math"]
}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:theta:",
category: '*Roassal-Amber-Extentions',
fn: function (rad,angle){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(rad).__star(_st($Math())._cos_(angle))).__at(_st(rad).__star(_st($Math())._sin_(angle)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius:theta:",{rad:rad,angle:angle},smalltalk.Point.klass)})},
args: ["rad", "angle"],
source: "radius: rad theta: angle\x0a\x09^(rad * (Math cos: angle))@(rad * (Math sin: angle))",
messageSends: ["@", "*", "sin:", "cos:"],
referencedClasses: ["Math"]
}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: '*Roassal-Amber-Extentions',
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
args: [],
source: "printString\x0a\x09^model isNil\x0a\x09\x09 ifTrue:[super printString]\x0a\x09\x09ifFalse:[super printString, ('<', model printString, '>')]\x09\x0a\x22\x09^(super printString,\x0a\x09\x09(model ifNotNil: [ \x0a\x09\x09'<',\x09model printString, '>' ]))\x22",
messageSends: ["ifTrue:ifFalse:", "printString", ",", "isNil"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "asAnnouncement",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAnnouncement",{},smalltalk.ROEvent)})},
args: [],
source: "asAnnouncement\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "asAnnouncement",
category: '*Roassal-Amber-Extentions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asAnnouncement",{},smalltalk.ROEvent.klass)})},
args: [],
source: "asAnnouncement\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.ROEvent.klass);

