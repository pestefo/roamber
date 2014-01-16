define("roamber/Roassal-Normalizers", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal"], function(smalltalk,nil,_st){
smalltalk.addPackage('Roassal-Normalizers');
smalltalk.packages["Roassal-Normalizers"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('RONAbstractNormalizer', smalltalk.ROObject, ['command'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "command",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@command"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},smalltalk.RONAbstractNormalizer)})},
args: [],
source: "command\x0a\x09\x0a\x09^command",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONAbstractNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "command:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aBlock:aBlock},smalltalk.RONAbstractNormalizer)})},
args: ["aBlock"],
source: "command: aBlock\x0a\x09\x0a\x09command := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONAbstractNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity},smalltalk.RONAbstractNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RONAbstractNormalizer);



smalltalk.addClass('ROMultipleColorLinearNormalizer', smalltalk.RONAbstractNormalizer, ['normalizers'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "detectNormalizerFor:",
category: 'private-accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self["@normalizers"])._keysAndValuesDo_((function(range,norm){
return smalltalk.withContext(function($ctx2) {
$1=_st(range)._rangeIncludes_(aValue);
if(smalltalk.assert($1)){
throw $early=[norm];
};
}, function($ctx2) {$ctx2.fillBlock({range:range,norm:norm},$ctx1,1)})}));
self._error_(_st(_st(aValue)._asString()).__comma(" not in declared ranges"));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"detectNormalizerFor:",{aValue:aValue},smalltalk.ROMultipleColorLinearNormalizer)})},
args: ["aValue"],
source: "detectNormalizerFor: aValue\x0a\x0a\x09normalizers keysAndValuesDo: [:range :norm |\x0a\x09\x09(range rangeIncludes: aValue)\x0a\x09\x09\x09ifTrue: [^ norm] ].\x0a\x09self error: aValue asString, ' not in declared ranges'",
messageSends: ["keysAndValuesDo:", "ifTrue:", "rangeIncludes:", "error:", ",", "asString"],
referencedClasses: []
}),
smalltalk.ROMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROMultipleColorLinearNormalizer)})},
args: [],
source: "initialize\x0a\x0a\x09command := #yourself",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._value_(anEntity);
$1=_st(self._detectNormalizerFor_(value))._roValue_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value},smalltalk.ROMultipleColorLinearNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x0a\x09| value |\x0a\x09value := self command value: anEntity.\x0a\x09\x22detect range for the value, retrieve and call corresponding normalizers\x22\x0a\x09^ (self detectNormalizerFor: value) roValue: value",
messageSends: ["value:", "command", "roValue:", "detectNormalizerFor:"],
referencedClasses: []
}),
smalltalk.ROMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "valueRange:colorRange:",
category: 'initialize-release',
fn: function (anArrayOfNumbers,anArrayOfColors){
var self=this;
var size,start,end;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$5,$6,$8,$9,$7;
self["@normalizers"]=_st($Dictionary())._new();
$2=_st(anArrayOfNumbers)._size();
$ctx1.sendIdx["size"]=1;
$3=_st(anArrayOfColors)._size();
$ctx1.sendIdx["size"]=2;
$1=_st($2).__eq($3);
self._assert_($1);
size=_st(anArrayOfNumbers)._size();
(1)._to_do_(_st(size).__minus((1)),(function(i){
return smalltalk.withContext(function($ctx2) {
start=_st(anArrayOfNumbers)._at_(i);
$ctx2.sendIdx["at:"]=1;
start;
$4=_st(i).__plus((1));
$ctx2.sendIdx["+"]=1;
end=_st(anArrayOfNumbers)._at_($4);
$ctx2.sendIdx["at:"]=2;
end;
$5=self["@normalizers"];
$6=_st(start)._to_(end);
$8=_st($Array())._with_with_(start,end);
$9=_st(anArrayOfColors)._at_(i);
$ctx2.sendIdx["at:"]=3;
$7=_st($RONColorLinearNormalizer())._inContext_lowColor_highColor_($8,$9,_st(anArrayOfColors)._at_(_st(i).__plus((1))));
return _st($5)._at_put_($6,$7);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valueRange:colorRange:",{anArrayOfNumbers:anArrayOfNumbers,anArrayOfColors:anArrayOfColors,size:size,start:start,end:end},smalltalk.ROMultipleColorLinearNormalizer)})},
args: ["anArrayOfNumbers", "anArrayOfColors"],
source: "valueRange: anArrayOfNumbers colorRange: anArrayOfColors\x0a\x09\x22 {1. 2. 3} {Color red. Color yellow. Color green}\x22\x0a\x09\x0a\x09| size start end |\x0a\x09normalizers := Dictionary new.\x0a\x09self assert: anArrayOfNumbers size = anArrayOfColors size.\x0a\x09size := anArrayOfNumbers size.\x0a\x091 to: size - 1 do: [ :i |\x0a\x09\x09start := anArrayOfNumbers at: i.\x0a\x09\x09end :=  anArrayOfNumbers at: i + 1.\x0a\x09\x09normalizers\x0a\x09\x09\x09at: (start to: end)\x0a\x09\x09\x09put: (RONColorLinearNormalizer\x0a\x09\x09\x09\x09\x09\x09inContext: (Array with: start with: end)\x0a\x09\x09\x09\x09\x09\x09lowColor: (anArrayOfColors at: i)\x0a\x09\x09\x09\x09\x09\x09highColor: (anArrayOfColors at: i + 1))\x0a\x09].",
messageSends: ["new", "assert:", "=", "size", "to:do:", "-", "at:", "+", "at:put:", "to:", "inContext:lowColor:highColor:", "with:with:"],
referencedClasses: ["Dictionary", "RONColorLinearNormalizer", "Array"]
}),
smalltalk.ROMultipleColorLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "valueRange:colorRange:",
category: 'instance creation',
fn: function (anArrayOfNumbers,anArrayOfColors){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._valueRange_colorRange_(anArrayOfNumbers,anArrayOfColors);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueRange:colorRange:",{anArrayOfNumbers:anArrayOfNumbers,anArrayOfColors:anArrayOfColors},smalltalk.ROMultipleColorLinearNormalizer.klass)})},
args: ["anArrayOfNumbers", "anArrayOfColors"],
source: "valueRange: anArrayOfNumbers colorRange: anArrayOfColors\x0a\x0a\x09^ self new valueRange: anArrayOfNumbers colorRange: anArrayOfColors",
messageSends: ["valueRange:colorRange:", "new"],
referencedClasses: []
}),
smalltalk.ROMultipleColorLinearNormalizer.klass);


smalltalk.addClass('RONIdentityNormalizer', smalltalk.RONAbstractNormalizer, ['dictionary', 'colorIndex'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONIdentityNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@colorIndex"]=(0);
self["@dictionary"]=_st($IdentityDictionary())._new();
self["@command"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONIdentityNormalizer)})},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09colorIndex := 0.\x0a\x09dictionary := IdentityDictionary new.\x0a\x09command := #yourself",
messageSends: ["initialize", "new"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.RONIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextColor",
category: 'private',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$5;
$2=self["@colorIndex"];
$4=_st($Color())._colorNames();
$ctx1.sendIdx["colorNames"]=1;
$3=_st($4)._size();
$1=_st($2).__backslash_backslash($3);
self["@colorIndex"]=_st($1).__plus((1));
$5=_st($Color())._perform_(_st(_st($Color())._colorNames())._at_(self["@colorIndex"]));
return $5;
}, function($ctx1) {$ctx1.fill(self,"nextColor",{},smalltalk.RONIdentityNormalizer)})},
args: [],
source: "nextColor\x0a\x09\x0a\x09colorIndex := colorIndex \x5c\x5c Color colorNames size + 1.\x0a\x09^Color perform: (Color colorNames at: colorIndex)",
messageSends: ["+", "\x5c\x5c", "size", "colorNames", "perform:", "at:"],
referencedClasses: ["Color"]
}),
smalltalk.RONIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dictionary"])._at_ifAbsentPut_(_st(self["@command"])._roValue_(anEntity),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextColor();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity},smalltalk.RONIdentityNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x09\x0a\x09^dictionary\x0a\x09\x09at: (command roValue: anEntity)\x0a\x09\x09ifAbsentPut: [ self nextColor ]",
messageSends: ["at:ifAbsentPut:", "roValue:", "nextColor"],
referencedClasses: []
}),
smalltalk.RONIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "setIndexTo:",
category: 'private',
fn: function (colorAsSymbol){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@colorIndex"]=_st(_st(_st($Color())._colorNames())._indexOf_(colorAsSymbol)).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"setIndexTo:",{colorAsSymbol:colorAsSymbol},smalltalk.RONIdentityNormalizer)})},
args: ["colorAsSymbol"],
source: "setIndexTo: colorAsSymbol\x0a\x09\x22colorAsSymbol has to be one of Color colorNames. \x0a\x09The method set the current index to the color given in parameter\x22\x0a\x09\x0a\x09colorIndex := (Color colorNames indexOf: colorAsSymbol) - 1",
messageSends: ["-", "indexOf:", "colorNames"],
referencedClasses: ["Color"]
}),
smalltalk.RONIdentityNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "beginingAtBlue",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setIndexTo_("blue");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"beginingAtBlue",{},smalltalk.RONIdentityNormalizer.klass)})},
args: [],
source: "beginingAtBlue\x0a\x09^ self new\x0a\x09\x09\x09setIndexTo: #blue;\x0a\x09\x09\x09yourself",
messageSends: ["setIndexTo:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RONIdentityNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "beginingAtRed",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setIndexTo_("red");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"beginingAtRed",{},smalltalk.RONIdentityNormalizer.klass)})},
args: [],
source: "beginingAtRed\x0a\x09^ self new\x0a\x09\x09\x09setIndexTo: #red;\x0a\x09\x09\x09yourself",
messageSends: ["setIndexTo:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RONIdentityNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withCommand:",
category: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._command_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withCommand:",{aBlock:aBlock},smalltalk.RONIdentityNormalizer.klass)})},
args: ["aBlock"],
source: "withCommand: aBlock\x0a\x09\x0a\x09^(self new)\x0a\x09\x09command: aBlock;\x0a\x09\x09yourself",
messageSends: ["command:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RONIdentityNormalizer.klass);


smalltalk.addClass('RONExplicitIdentityNormalizer', smalltalk.RONIdentityNormalizer, ['colors', 'defaultColor'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "colors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colors",{},smalltalk.RONExplicitIdentityNormalizer)})},
args: [],
source: "colors\x0a\x09\x0a\x09^colors",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "colors:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colors"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"colors:",{anObject:anObject},smalltalk.RONExplicitIdentityNormalizer)})},
args: ["anObject"],
source: "colors: anObject\x0a\x09\x0a\x09colors := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@defaultColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.RONExplicitIdentityNormalizer)})},
args: [],
source: "defaultColor\x0a\x09\x0a\x09^defaultColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultColor"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"defaultColor:",{anObject:anObject},smalltalk.RONExplicitIdentityNormalizer)})},
args: ["anObject"],
source: "defaultColor: anObject\x0a\x09\x0a\x09defaultColor := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextColor",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$1;
self["@colorIndex"]=_st(self["@colorIndex"]).__plus((1));
$3=self["@colorIndex"];
$5=self._colors();
$ctx1.sendIdx["colors"]=1;
$4=_st($5)._size();
$2=_st($3).__gt($4);
if(smalltalk.assert($2)){
$1=self._defaultColor();
} else {
$1=_st(self._colors())._at_(self["@colorIndex"]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextColor",{},smalltalk.RONExplicitIdentityNormalizer)})},
args: [],
source: "nextColor\x0a\x09\x0a\x09colorIndex := colorIndex + 1.\x0a\x09^colorIndex > self colors size\x0a\x09\x09ifTrue: [ self defaultColor ]\x0a\x09\x09ifFalse: [ self colors at: colorIndex ]",
messageSends: ["+", "ifTrue:ifFalse:", ">", "size", "colors", "defaultColor", "at:"],
referencedClasses: []
}),
smalltalk.RONExplicitIdentityNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "withCommand:withColors:withDefaultColor:",
category: 'instance creation',
fn: function (aBlock,aCollection,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._withCommand_(aBlock);
_st($2)._colors_(aCollection);
_st($2)._defaultColor_(aColor);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withCommand:withColors:withDefaultColor:",{aBlock:aBlock,aCollection:aCollection,aColor:aColor},smalltalk.RONExplicitIdentityNormalizer.klass)})},
args: ["aBlock", "aCollection", "aColor"],
source: "withCommand: aBlock withColors: aCollection withDefaultColor: aColor\x0a\x09\x0a\x09^(self withCommand: aBlock)\x0a\x09\x09colors: aCollection;\x0a\x09\x09defaultColor: aColor;\x0a\x09\x09yourself",
messageSends: ["colors:", "withCommand:", "defaultColor:", "yourself"],
referencedClasses: []
}),
smalltalk.RONExplicitIdentityNormalizer.klass);


smalltalk.addClass('RONLinearNormalizer', smalltalk.RONAbstractNormalizer, ['maximumValue', 'context', 'minimumValue'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "command:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONLinearNormalizer.superclass.fn.prototype._command_.apply(_st(self), [aBlock]);
self._flushCache();
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aBlock:aBlock},smalltalk.RONLinearNormalizer)})},
args: ["aBlock"],
source: "command: aBlock\x0a\x09\x0a\x09super command: aBlock.\x0a\x09self flushCache",
messageSends: ["command:", "flushCache"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.RONLinearNormalizer)})},
args: [],
source: "context\x0a\x09\x0a\x09^context",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
self._flushCache();
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.RONLinearNormalizer)})},
args: ["aContext"],
source: "context: aContext\x0a\x09\x0a\x09context := aContext.\x0a\x09self flushCache",
messageSends: ["flushCache"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maximumValue"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushCache",{},smalltalk.RONLinearNormalizer)})},
args: [],
source: "flushCache\x0a\x09\x0a\x09maximumValue := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@maximumValue"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONLinearNormalizer)})},
args: [],
source: "initialize\x0a\x09\x22Initialize a newly created instance. This method must answer the receiver.\x22\x0a\x09\x0a\x09super initialize.\x0a\x09maximumValue := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumValue:",
category: 'private',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@maximumValue"])._isNil();
if(smalltalk.assert($1)){
$2=_st(self._context())._roValue_(anEntity);
$ctx1.sendIdx["roValue:"]=1;
self["@maximumValue"]=_st($2)._inject_into_((1),(function(maximum,entity){
return smalltalk.withContext(function($ctx2) {
return _st(maximum)._max_(_st(self._command())._roValue_(entity));
}, function($ctx2) {$ctx2.fillBlock({maximum:maximum,entity:entity},$ctx1,2)})}));
self["@maximumValue"];
};
$3=self["@maximumValue"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"maximumValue:",{anEntity:anEntity},smalltalk.RONLinearNormalizer)})},
args: ["anEntity"],
source: "maximumValue: anEntity\x0a\x09\x22Returns the largest value that the color metric provides\x22\x0a\x09\x0a\x09maximumValue isNil\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[maximumValue := (self context roValue: anEntity)\x0a\x09\x09\x09\x09inject: 1\x0a\x09\x09\x09\x09into:\x0a\x09\x09\x09\x09\x09[:maximum :entity | maximum max: (self command roValue: entity)]].\x0a\x09^maximumValue",
messageSends: ["ifTrue:", "isNil", "inject:into:", "roValue:", "context", "max:", "command"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumValue:",
category: 'private',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@minimumValue"])._isNil();
if(smalltalk.assert($1)){
$2=_st(self._context())._roValue_(anEntity);
$ctx1.sendIdx["roValue:"]=1;
self["@minimumValue"]=_st($2)._inject_into_((100000000000),(function(minimum,entity){
return smalltalk.withContext(function($ctx2) {
return _st(minimum)._min_(_st(self._command())._roValue_(entity));
}, function($ctx2) {$ctx2.fillBlock({minimum:minimum,entity:entity},$ctx1,2)})}));
self["@minimumValue"];
};
$3=self["@minimumValue"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"minimumValue:",{anEntity:anEntity},smalltalk.RONLinearNormalizer)})},
args: ["anEntity"],
source: "minimumValue: anEntity\x0a\x09\x22Returns the smallest value that the color metric provides\x22\x0a\x09\x0a\x09minimumValue isNil\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[minimumValue := (self context roValue: anEntity)\x0a\x09\x09\x09\x09inject: 100000000000 \x0a\x09\x09\x09\x09into:\x0a\x09\x09\x09\x09\x09[:minimum :entity | minimum min: (self command roValue: entity)]].\x0a\x09^minimumValue",
messageSends: ["ifTrue:", "isNil", "inject:into:", "roValue:", "context", "min:", "command"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "inContext:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inContext_withCommand_(aCollection,(function(obj){
return smalltalk.withContext(function($ctx2) {
return obj;
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aCollection:aCollection},smalltalk.RONLinearNormalizer.klass)})},
args: ["aCollection"],
source: "inContext: aCollection\x0a\x09\x0a\x09^self inContext: aCollection withCommand: [:obj | obj]",
messageSends: ["inContext:withCommand:"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:",
category: 'instance creation',
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._context_(aCollection);
_st($2)._command_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:withCommand:",{aCollection:aCollection,aBlock:aBlock},smalltalk.RONLinearNormalizer.klass)})},
args: ["aCollection", "aBlock"],
source: "inContext: aCollection withCommand: aBlock\x0a\x09\x0a\x09^(self new)\x0a\x09\x09context: aCollection;\x0a\x09\x09command: aBlock;\x0a\x09\x09yourself",
messageSends: ["context:", "new", "command:", "yourself"],
referencedClasses: []
}),
smalltalk.RONLinearNormalizer.klass);


smalltalk.addClass('RONColorLinearNormalizer', smalltalk.RONLinearNormalizer, ['minBrightness', 'maxBrightness', 'lowColor', 'highColor'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "blend:with:weight:",
category: 'private',
fn: function (aColor,aColorValue,wt){
var self=this;
var rv,gv,bv,invWt;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$4,$6,$8,$7,$9;
invWt=(1).__minus(wt);
$2=_st(aColor)._red();
$ctx1.sendIdx["red"]=1;
$1=_st($2).__star(invWt);
$ctx1.sendIdx["*"]=1;
$3=_st(_st(aColorValue)._red()).__star(wt);
$ctx1.sendIdx["*"]=2;
rv=_st($1).__plus($3);
$ctx1.sendIdx["+"]=1;
$5=_st(aColor)._green();
$ctx1.sendIdx["green"]=1;
$4=_st($5).__star(invWt);
$ctx1.sendIdx["*"]=3;
$6=_st(_st(aColorValue)._green()).__star(wt);
$ctx1.sendIdx["*"]=4;
gv=_st($4).__plus($6);
$ctx1.sendIdx["+"]=2;
$8=_st(aColor)._blue();
$ctx1.sendIdx["blue"]=1;
$7=_st($8).__star(invWt);
$ctx1.sendIdx["*"]=5;
bv=_st($7).__plus(_st(_st(aColorValue)._blue()).__star(wt));
$9=_st($Color())._r_g_b_(rv,gv,bv);
return $9;
}, function($ctx1) {$ctx1.fill(self,"blend:with:weight:",{aColor:aColor,aColorValue:aColorValue,wt:wt,rv:rv,gv:gv,bv:bv,invWt:invWt},smalltalk.RONColorLinearNormalizer)})},
args: ["aColor", "aColorValue", "wt"],
source: "blend: aColor with: aColorValue weight: wt\x0a\x09\x22Answer a new ColorValue which is a weighted blend of the receiver and the\x0a\x09supplied ColorValue.\x22\x0a\x09\x22Simply interpolates in RGB space.\x22\x0a\x0a\x09| rv gv bv invWt |\x0a\x09\x0a\x09invWt := 1-wt.\x0a\x09rv := ((aColor red * invWt) + ((aColorValue red)*wt)) \x22rounded\x22.\x0a\x09gv := ((aColor green  * invWt) + ((aColorValue green)*wt)) \x22rounded\x22.\x0a\x09bv := ((aColor blue *invWt)+ ((aColorValue blue)*wt)) \x22rounded\x22.\x0a\x09^Color r: rv g: gv b: bv",
messageSends: ["-", "+", "*", "red", "green", "blue", "r:g:b:"],
referencedClasses: ["Color"]
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "highColor:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highColor"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"highColor:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
args: ["aBlock"],
source: "highColor: aBlock\x0a\x09\x0a\x09highColor := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "highColorFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@highColor"])._roValue_(anEntity);
return $1;
}, function($ctx1) {$ctx1.fill(self,"highColorFor:",{anEntity:anEntity},smalltalk.RONColorLinearNormalizer)})},
args: ["anEntity"],
source: "highColorFor: anEntity\x0a\x09\x0a\x09^highColor roValue: anEntity",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONColorLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@lowColor"]=_st($Color())._white();
self["@highColor"]=_st($Color())._black();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONColorLinearNormalizer)})},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09lowColor := Color white.\x0a\x09highColor := Color black",
messageSends: ["initialize", "white", "black"],
referencedClasses: ["Color"]
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "lowColor:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lowColor"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lowColor:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
args: ["aBlock"],
source: "lowColor: aBlock\x0a\x09\x0a\x09lowColor := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "lowColorFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@lowColor"])._roValue_(anEntity);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lowColorFor:",{anEntity:anEntity},smalltalk.RONColorLinearNormalizer)})},
args: ["anEntity"],
source: "lowColorFor: anEntity\x0a\x09\x0a\x09^lowColor roValue: anEntity",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxBrightness:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxBrightness"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"maxBrightness:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
args: ["aBlock"],
source: "maxBrightness: aBlock\x0a\x09\x0a\x09maxBrightness := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxBrightnessFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@maxBrightness"])._isNil();
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=_st(self["@maxBrightness"])._roValue_(anEntity);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxBrightnessFor:",{anEntity:anEntity},smalltalk.RONColorLinearNormalizer)})},
args: ["anEntity"],
source: "maxBrightnessFor: anEntity\x0a\x09\x0a\x09^maxBrightness isNil\x0a\x09\x09ifTrue: [1.0]\x0a\x09\x09ifFalse: [maxBrightness roValue: anEntity]",
messageSends: ["ifTrue:ifFalse:", "isNil", "roValue:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minBrightness:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minBrightness"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"minBrightness:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
args: ["aBlock"],
source: "minBrightness: aBlock\x0a\x09\x0a\x09minBrightness := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minBrightnessFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@minBrightness"])._isNil();
if(smalltalk.assert($2)){
$1=(0);
} else {
$1=_st(self["@minBrightness"])._roValue_(anEntity);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"minBrightnessFor:",{anEntity:anEntity},smalltalk.RONColorLinearNormalizer)})},
args: ["anEntity"],
source: "minBrightnessFor: anEntity\x0a\x09\x0a\x09^minBrightness isNil\x0a\x09\x09ifTrue: [0.0]\x0a\x09\x09ifFalse: [minBrightness roValue: anEntity]",
messageSends: ["ifTrue:ifFalse:", "isNil", "roValue:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var myValue,myHighColor,myLowColor,myMinBrightness,myMaxBrightness,weight,minValue,maxValue;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$7,$5,$4,$8;
minValue=self._minimumValue_(anEntity);
$ctx1.sendIdx["minimumValue:"]=1;
maxValue=self._maximumValue_(anEntity);
myMinBrightness=self._minBrightnessFor_(anEntity);
myMaxBrightness=self._maxBrightnessFor_(anEntity);
myHighColor=self._highColorFor_(anEntity);
myLowColor=self._lowColorFor_(anEntity);
$1=_st(minValue).__eq(maxValue);
if(smalltalk.assert($1)){
$2=_st(myMinBrightness).__plus(myMaxBrightness);
$ctx1.sendIdx["+"]=1;
weight=_st($2).__slash((2));
$ctx1.sendIdx["/"]=1;
} else {
myValue=_st(_st(self._command())._value_(anEntity)).__minus(self._minimumValue_(anEntity));
$ctx1.sendIdx["-"]=1;
myValue;
$3=myMinBrightness;
$6=_st(myValue)._abs();
$7=_st(maxValue).__minus(minValue);
$ctx1.sendIdx["-"]=2;
$5=_st($6).__slash($7);
$4=_st($5).__star(_st(myMaxBrightness).__minus(myMinBrightness));
weight=_st($3).__plus($4);
};
$8=self._blend_with_weight_(myLowColor,myHighColor,weight);
return $8;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,myValue:myValue,myHighColor:myHighColor,myLowColor:myLowColor,myMinBrightness:myMinBrightness,myMaxBrightness:myMaxBrightness,weight:weight,minValue:minValue,maxValue:maxValue},smalltalk.RONColorLinearNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x09\x22Calculates the color of the entity based on the context.\x22\x0a\x09\x0a\x09| myValue myHighColor myLowColor myMinBrightness myMaxBrightness weight minValue maxValue |\x0a\x09\x22Get color specific data\x22\x0a\x09minValue :=  self minimumValue: anEntity.\x0a\x09maxValue :=  self maximumValue: anEntity.\x0a\x09myMinBrightness := self minBrightnessFor: anEntity.\x0a\x09myMaxBrightness := self maxBrightnessFor: anEntity.\x0a\x09myHighColor := self highColorFor: anEntity.\x0a\x09myLowColor := self lowColorFor: anEntity.\x09\x22Get data\x22\x0a\x09weight := minValue = maxValue \x0a\x09\x09ifTrue: [(myMinBrightness + myMaxBrightness) / 2]\x0a\x09\x09ifFalse: [\x09\x0a\x09\x09\x09myValue := (self command value: anEntity) - (self minimumValue: anEntity).\x0a\x09\x09\x09myMinBrightness + (myValue abs / (maxValue - minValue) * (myMaxBrightness - myMinBrightness)) ].\x0a\x09^self blend: myLowColor with: myHighColor weight: weight",
messageSends: ["minimumValue:", "maximumValue:", "minBrightnessFor:", "maxBrightnessFor:", "highColorFor:", "lowColorFor:", "ifTrue:ifFalse:", "=", "/", "+", "-", "value:", "command", "*", "abs", "blend:with:weight:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "inContext:lowColor:highColor:",
category: 'instance creation',
fn: function (aCollection,lowColor,highColor){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_(aCollection);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:lowColor:highColor:",{aCollection:aCollection,lowColor:lowColor,highColor:highColor,normalizer:normalizer},smalltalk.RONColorLinearNormalizer.klass)})},
args: ["aCollection", "lowColor", "highColor"],
source: "inContext: aCollection lowColor: lowColor highColor: highColor\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09^normalizer",
messageSends: ["inContext:", "lowColor:", "highColor:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:lowColor:lowThreshold:highColor:highThreshold:",
category: 'instance creation',
fn: function (aCollection,lowColor,lowThreshold,highColor,highThreshold){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_(aCollection);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
_st(normalizer)._minBrightness_(lowThreshold);
_st(normalizer)._maxBrightness_(highThreshold);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:lowColor:lowThreshold:highColor:highThreshold:",{aCollection:aCollection,lowColor:lowColor,lowThreshold:lowThreshold,highColor:highColor,highThreshold:highThreshold,normalizer:normalizer},smalltalk.RONColorLinearNormalizer.klass)})},
args: ["aCollection", "lowColor", "lowThreshold", "highColor", "highThreshold"],
source: "inContext: aCollection lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09normalizer minBrightness: lowThreshold.\x0a\x09normalizer maxBrightness: highThreshold.\x0a\x09^normalizer",
messageSends: ["inContext:", "lowColor:", "highColor:", "minBrightness:", "maxBrightness:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:lowColor:highColor:",
category: 'instance creation',
fn: function (aCollection,aBlock,lowColor,highColor){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_withCommand_(aCollection,aBlock);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:withCommand:lowColor:highColor:",{aCollection:aCollection,aBlock:aBlock,lowColor:lowColor,highColor:highColor,normalizer:normalizer},smalltalk.RONColorLinearNormalizer.klass)})},
args: ["aCollection", "aBlock", "lowColor", "highColor"],
source: "inContext: aCollection withCommand: aBlock lowColor: lowColor highColor: highColor\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection withCommand: aBlock.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09^normalizer",
messageSends: ["inContext:withCommand:", "lowColor:", "highColor:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:lowColor:lowThreshold:highColor:highThreshold:",
category: 'instance creation',
fn: function (aCollection,aBlock,lowColor,lowThreshold,highColor,highThreshold){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_withCommand_(aCollection,aBlock);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
_st(normalizer)._minBrightness_(lowThreshold);
_st(normalizer)._maxBrightness_(highThreshold);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:withCommand:lowColor:lowThreshold:highColor:highThreshold:",{aCollection:aCollection,aBlock:aBlock,lowColor:lowColor,lowThreshold:lowThreshold,highColor:highColor,highThreshold:highThreshold,normalizer:normalizer},smalltalk.RONColorLinearNormalizer.klass)})},
args: ["aCollection", "aBlock", "lowColor", "lowThreshold", "highColor", "highThreshold"],
source: "inContext: aCollection withCommand: aBlock lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection withCommand: aBlock.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09normalizer minBrightness: lowThreshold.\x0a\x09normalizer maxBrightness: highThreshold.\x0a\x09^normalizer",
messageSends: ["inContext:withCommand:", "lowColor:", "highColor:", "minBrightness:", "maxBrightness:"],
referencedClasses: []
}),
smalltalk.RONColorLinearNormalizer.klass);


smalltalk.addClass('RONFontLinearNormalizer', smalltalk.RONLinearNormalizer, [], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._roValue_(anEntity);
$1=(5).__plus(_st((38).__star(_st(_st(value)._abs()).__slash(self._maximumValue_(anEntity))))._asInteger());
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value},smalltalk.RONFontLinearNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x09\x22Calculates the color of the entity based on the context.\x22\x0a\x09\x0a\x09| value |\x0a\x09value := self command roValue: anEntity.\x0a\x09^5 + (38 * (value abs / (self maximumValue: anEntity))) asInteger",
messageSends: ["roValue:", "command", "+", "asInteger", "*", "/", "abs", "maximumValue:"],
referencedClasses: []
}),
smalltalk.RONFontLinearNormalizer);



smalltalk.addClass('RONumberLinearNormalizer', smalltalk.RONLinearNormalizer, ['scale'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONumberLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONumberLinearNormalizer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09scale := 1",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RONumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._roValue_(anEntity);
$1=_st(_st(_st(_st(_st(value)._abs()).__slash(self._maximumValue_(anEntity)))._asFloat()).__star(self._scale()))._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value},smalltalk.RONumberLinearNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x09\x22Normalize value based on maximum value.\x22\x0a\x09\x0a\x09| value |\x0a\x09value := self command roValue: anEntity.\x0a\x09^ ((value abs / (self maximumValue: anEntity)) asFloat * self scale) asInteger",
messageSends: ["roValue:", "command", "asInteger", "*", "asFloat", "/", "abs", "maximumValue:", "scale"],
referencedClasses: []
}),
smalltalk.RONumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.RONumberLinearNormalizer)})},
args: [],
source: "scale\x0a\x09^ scale",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{anObject:anObject},smalltalk.RONumberLinearNormalizer)})},
args: ["anObject"],
source: "scale: anObject\x0a\x09scale := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONumberLinearNormalizer);



smalltalk.addClass('ROValueLinearNormalizer', smalltalk.RONLinearNormalizer, ['minScale', 'maxScale'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROValueLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@minScale"]=(0);
self["@maxScale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROValueLinearNormalizer)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09minScale := 0.\x0a\x09maxScale := 1.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxScale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxScale",{},smalltalk.ROValueLinearNormalizer)})},
args: [],
source: "maxScale\x0a\x0a\x09^maxScale.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxScale:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@maxScale"]=aValue;
$1=self["@maxScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxScale:",{aValue:aValue},smalltalk.ROValueLinearNormalizer)})},
args: ["aValue"],
source: "maxScale: aValue\x0a\x0a\x09^maxScale := aValue.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minScale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minScale",{},smalltalk.ROValueLinearNormalizer)})},
args: [],
source: "minScale\x0a\x0a\x09^minScale.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minScale:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minScale"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"minScale:",{aValue:aValue},smalltalk.ROValueLinearNormalizer)})},
args: ["aValue"],
source: "minScale: aValue\x0a\x0a\x09minScale := aValue.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value,slope;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
value=_st(self._command())._roValue_(anEntity);
slope=self._slope_(anEntity);
$4=_st(_st(value)._abs()).__star(slope);
$ctx1.sendIdx["*"]=1;
$3=_st($4).__plus(self._maxScale());
$2=_st($3).__minus(_st(_st(self._maximumValue_(anEntity))._asFloat()).__star(slope));
$1=_st($2)._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value,slope:slope},smalltalk.ROValueLinearNormalizer)})},
args: ["anEntity"],
source: "roValue: anEntity\x0a\x09\x0a\x09\x22Normalize value based on minimum and maximum value.\x22\x0a\x09| value slope |\x0a\x09value := self command roValue: anEntity.\x0a\x09slope := self slope: anEntity.\x0a\x09^ ((value abs * slope) + self maxScale - ((self maximumValue: anEntity) asFloat * slope)) asInteger",
messageSends: ["roValue:", "command", "slope:", "asInteger", "-", "+", "*", "abs", "maxScale", "asFloat", "maximumValue:"],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "slope:",
category: 'as yet unclassified',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=_st(self["@maxScale"]).__minus(self["@minScale"]);
$ctx1.sendIdx["-"]=1;
$4=_st(self._maximumValue_(anEntity))._asFloat();
$ctx1.sendIdx["asFloat"]=1;
$3=_st($4).__minus(_st(self._minimumValue_(anEntity))._asFloat());
$1=_st($2).__slash($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"slope:",{anEntity:anEntity},smalltalk.ROValueLinearNormalizer)})},
args: ["anEntity"],
source: "slope: anEntity\x0a\x09\x0a\x09^ (maxScale - minScale) / ((self maximumValue: anEntity) asFloat - (self minimumValue: anEntity )asFloat).",
messageSends: ["/", "-", "asFloat", "maximumValue:", "minimumValue:"],
referencedClasses: []
}),
smalltalk.ROValueLinearNormalizer);


});
