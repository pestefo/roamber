smalltalk.addPackage('Roassal-Normalizers');
smalltalk.addClass('RONAbstractNormalizer', smalltalk.ROObject, ['command'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "command",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@command"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},smalltalk.RONAbstractNormalizer)})},
messageSends: []}),
smalltalk.RONAbstractNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "command:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aBlock:aBlock},smalltalk.RONAbstractNormalizer)})},
messageSends: []}),
smalltalk.RONAbstractNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity},smalltalk.RONAbstractNormalizer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.RONAbstractNormalizer);



smalltalk.addClass('ROMultipleColorLinearNormalizer', smalltalk.RONAbstractNormalizer, ['normalizers'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "detectNormalizerFor:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self["@normalizers"])._keysAndValuesDo_((function(range,norm){
return smalltalk.withContext(function($ctx2) {
$1=_st(range)._rangeIncludes_(aValue);
if(smalltalk.assert($1)){
$2=norm;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({range:range,norm:norm},$ctx1)})}));
self._error_(_st(_st(aValue)._asString()).__comma(" not in declared ranges"));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"detectNormalizerFor:",{aValue:aValue},smalltalk.ROMultipleColorLinearNormalizer)})},
messageSends: ["keysAndValuesDo:", "ifTrue:", "rangeIncludes:", "error:", ",", "asString"]}),
smalltalk.ROMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROMultipleColorLinearNormalizer)})},
messageSends: []}),
smalltalk.ROMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._value_(anEntity);
$1=_st(self._detectNormalizerFor_(value))._roValue_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value},smalltalk.ROMultipleColorLinearNormalizer)})},
messageSends: ["value:", "command", "roValue:", "detectNormalizerFor:"]}),
smalltalk.ROMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "valueRange:colorRange:",
fn: function (anArrayOfNumbers,anArrayOfColors){
var self=this;
var size,start,end;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
return smalltalk.withContext(function($ctx1) { 
self["@normalizers"]=_st($Dictionary())._new();
self._assert_(_st(_st(anArrayOfNumbers)._size()).__eq(_st(anArrayOfColors)._size()));
size=_st(anArrayOfNumbers)._size();
(1)._to_do_(_st(size).__minus((1)),(function(i){
return smalltalk.withContext(function($ctx2) {
start=_st(anArrayOfNumbers)._at_(i);
start;
end=_st(anArrayOfNumbers)._at_(_st(i).__plus((1)));
end;
return _st(self["@normalizers"])._at_put_(_st(start)._to_(end),_st($RONColorLinearNormalizer())._inContext_lowColor_highColor_(_st($Array())._with_with_(start,end),_st(anArrayOfColors)._at_(i),_st(anArrayOfColors)._at_(_st(i).__plus((1)))));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valueRange:colorRange:",{anArrayOfNumbers:anArrayOfNumbers,anArrayOfColors:anArrayOfColors,size:size,start:start,end:end},smalltalk.ROMultipleColorLinearNormalizer)})},
messageSends: ["new", "assert:", "=", "size", "to:do:", "-", "at:", "+", "at:put:", "to:", "inContext:lowColor:highColor:", "with:with:"]}),
smalltalk.ROMultipleColorLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "valueRange:colorRange:",
fn: function (anArrayOfNumbers,anArrayOfColors){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._valueRange_colorRange_(anArrayOfNumbers,anArrayOfColors);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueRange:colorRange:",{anArrayOfNumbers:anArrayOfNumbers,anArrayOfColors:anArrayOfColors},smalltalk.ROMultipleColorLinearNormalizer.klass)})},
messageSends: ["valueRange:colorRange:", "new"]}),
smalltalk.ROMultipleColorLinearNormalizer.klass);


smalltalk.addClass('RONIdentityNormalizer', smalltalk.RONAbstractNormalizer, ['dictionary', 'colorIndex'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONIdentityNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@colorIndex"]=(0);
self["@dictionary"]=_st($IdentityDictionary())._new();
self["@command"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONIdentityNormalizer)})},
messageSends: ["initialize", "new"]}),
smalltalk.RONIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colorIndex"]=_st(_st(self["@colorIndex"]).__backslash_backslash(_st(_st($Color())._colorNames())._size())).__plus((1));
$1=_st($Color())._perform_(_st(_st($Color())._colorNames())._at_(self["@colorIndex"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextColor",{},smalltalk.RONIdentityNormalizer)})},
messageSends: ["+", "\x5c\x5c", "size", "colorNames", "perform:", "at:"]}),
smalltalk.RONIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dictionary"])._at_ifAbsentPut_(_st(self["@command"])._roValue_(anEntity),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextColor();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity},smalltalk.RONIdentityNormalizer)})},
messageSends: ["at:ifAbsentPut:", "roValue:", "nextColor"]}),
smalltalk.RONIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "setIndexTo:",
fn: function (colorAsSymbol){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@colorIndex"]=_st(_st(_st($Color())._colorNames())._indexOf_(colorAsSymbol)).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"setIndexTo:",{colorAsSymbol:colorAsSymbol},smalltalk.RONIdentityNormalizer)})},
messageSends: ["-", "indexOf:", "colorNames"]}),
smalltalk.RONIdentityNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "beginingAtBlue",
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
messageSends: ["setIndexTo:", "new", "yourself"]}),
smalltalk.RONIdentityNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "beginingAtRed",
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
messageSends: ["setIndexTo:", "new", "yourself"]}),
smalltalk.RONIdentityNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withCommand:",
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
messageSends: ["command:", "new", "yourself"]}),
smalltalk.RONIdentityNormalizer.klass);


smalltalk.addClass('RONExplicitIdentityNormalizer', smalltalk.RONIdentityNormalizer, ['colors', 'defaultColor'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "colors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colors",{},smalltalk.RONExplicitIdentityNormalizer)})},
messageSends: []}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "colors:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colors"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"colors:",{anObject:anObject},smalltalk.RONExplicitIdentityNormalizer)})},
messageSends: []}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@defaultColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.RONExplicitIdentityNormalizer)})},
messageSends: []}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultColor"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"defaultColor:",{anObject:anObject},smalltalk.RONExplicitIdentityNormalizer)})},
messageSends: []}),
smalltalk.RONExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self["@colorIndex"]=_st(self["@colorIndex"]).__plus((1));
$2=_st(self["@colorIndex"]).__gt(_st(self._colors())._size());
if(smalltalk.assert($2)){
$1=self._defaultColor();
} else {
$1=_st(self._colors())._at_(self["@colorIndex"]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextColor",{},smalltalk.RONExplicitIdentityNormalizer)})},
messageSends: ["+", "ifTrue:ifFalse:", "defaultColor", "at:", "colors", ">", "size"]}),
smalltalk.RONExplicitIdentityNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "withCommand:withColors:withDefaultColor:",
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
messageSends: ["colors:", "withCommand:", "defaultColor:", "yourself"]}),
smalltalk.RONExplicitIdentityNormalizer.klass);


smalltalk.addClass('RONLinearNormalizer', smalltalk.RONAbstractNormalizer, ['maximumValue', 'context', 'minimumValue'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "command:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONLinearNormalizer.superclass.fn.prototype._command_.apply(_st(self), [aBlock]);
self._flushCache();
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aBlock:aBlock},smalltalk.RONLinearNormalizer)})},
messageSends: ["command:", "flushCache"]}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.RONLinearNormalizer)})},
messageSends: []}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
self._flushCache();
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.RONLinearNormalizer)})},
messageSends: ["flushCache"]}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCache",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maximumValue"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushCache",{},smalltalk.RONLinearNormalizer)})},
messageSends: []}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@maximumValue"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONLinearNormalizer)})},
messageSends: ["initialize"]}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumValue:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@maximumValue"])._isNil();
if(smalltalk.assert($1)){
self["@maximumValue"]=_st(_st(self._context())._roValue_(anEntity))._inject_into_((1),(function(maximum,entity){
return smalltalk.withContext(function($ctx2) {
return _st(maximum)._max_(_st(self._command())._roValue_(entity));
}, function($ctx2) {$ctx2.fillBlock({maximum:maximum,entity:entity},$ctx1)})}));
self["@maximumValue"];
};
$2=self["@maximumValue"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"maximumValue:",{anEntity:anEntity},smalltalk.RONLinearNormalizer)})},
messageSends: ["ifTrue:", "inject:into:", "max:", "roValue:", "command", "context", "isNil"]}),
smalltalk.RONLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumValue:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@minimumValue"])._isNil();
if(smalltalk.assert($1)){
self["@minimumValue"]=_st(_st(self._context())._roValue_(anEntity))._inject_into_((100000000000),(function(minimum,entity){
return smalltalk.withContext(function($ctx2) {
return _st(minimum)._min_(_st(self._command())._roValue_(entity));
}, function($ctx2) {$ctx2.fillBlock({minimum:minimum,entity:entity},$ctx1)})}));
self["@minimumValue"];
};
$2=self["@minimumValue"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"minimumValue:",{anEntity:anEntity},smalltalk.RONLinearNormalizer)})},
messageSends: ["ifTrue:", "inject:into:", "min:", "roValue:", "command", "context", "isNil"]}),
smalltalk.RONLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "inContext:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inContext_withCommand_(aCollection,(function(obj){
return smalltalk.withContext(function($ctx2) {
return obj;
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aCollection:aCollection},smalltalk.RONLinearNormalizer.klass)})},
messageSends: ["inContext:withCommand:"]}),
smalltalk.RONLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:",
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
messageSends: ["context:", "new", "command:", "yourself"]}),
smalltalk.RONLinearNormalizer.klass);


smalltalk.addClass('RONColorLinearNormalizer', smalltalk.RONLinearNormalizer, ['minBrightness', 'maxBrightness', 'lowColor', 'highColor'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "blend:with:weight:",
fn: function (aColor,aColorValue,wt){
var self=this;
var rv,gv,bv,invWt;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
invWt=(1).__minus(wt);
rv=_st(_st(_st(aColor)._red()).__star(invWt)).__plus(_st(_st(aColorValue)._red()).__star(wt));
gv=_st(_st(_st(aColor)._green()).__star(invWt)).__plus(_st(_st(aColorValue)._green()).__star(wt));
bv=_st(_st(_st(aColor)._blue()).__star(invWt)).__plus(_st(_st(aColorValue)._blue()).__star(wt));
$1=_st($Color())._r_g_b_(rv,gv,bv);
return $1;
}, function($ctx1) {$ctx1.fill(self,"blend:with:weight:",{aColor:aColor,aColorValue:aColorValue,wt:wt,rv:rv,gv:gv,bv:bv,invWt:invWt},smalltalk.RONColorLinearNormalizer)})},
messageSends: ["-", "+", "*", "red", "green", "blue", "r:g:b:"]}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "highColor:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highColor"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"highColor:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
messageSends: []}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "highColorFor:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@highColor"])._roValue_(anEntity);
return $1;
}, function($ctx1) {$ctx1.fill(self,"highColorFor:",{anEntity:anEntity},smalltalk.RONColorLinearNormalizer)})},
messageSends: ["roValue:"]}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONColorLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@lowColor"]=_st($Color())._white();
self["@highColor"]=_st($Color())._black();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONColorLinearNormalizer)})},
messageSends: ["initialize", "white", "black"]}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "lowColor:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lowColor"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lowColor:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
messageSends: []}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "lowColorFor:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@lowColor"])._roValue_(anEntity);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lowColorFor:",{anEntity:anEntity},smalltalk.RONColorLinearNormalizer)})},
messageSends: ["roValue:"]}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxBrightness:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxBrightness"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"maxBrightness:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
messageSends: []}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxBrightnessFor:",
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
messageSends: ["ifTrue:ifFalse:", "roValue:", "isNil"]}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minBrightness:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minBrightness"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"minBrightness:",{aBlock:aBlock},smalltalk.RONColorLinearNormalizer)})},
messageSends: []}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minBrightnessFor:",
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
messageSends: ["ifTrue:ifFalse:", "roValue:", "isNil"]}),
smalltalk.RONColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
var myValue,myHighColor,myLowColor,myMinBrightness,myMaxBrightness,weight,minValue,maxValue;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
minValue=self._minimumValue_(anEntity);
maxValue=self._maximumValue_(anEntity);
myMinBrightness=self._minBrightnessFor_(anEntity);
myMaxBrightness=self._maxBrightnessFor_(anEntity);
myHighColor=self._highColorFor_(anEntity);
myLowColor=self._lowColorFor_(anEntity);
$1=_st(minValue).__eq(maxValue);
if(smalltalk.assert($1)){
weight=_st(_st(myMinBrightness).__plus(myMaxBrightness)).__slash((2));
} else {
myValue=_st(_st(self._command())._value_(anEntity)).__minus(self._minimumValue_(anEntity));
myValue;
weight=_st(myMinBrightness).__plus(_st(_st(_st(myValue)._abs()).__slash(_st(maxValue).__minus(minValue))).__star(_st(myMaxBrightness).__minus(myMinBrightness)));
};
$2=self._blend_with_weight_(myLowColor,myHighColor,weight);
return $2;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,myValue:myValue,myHighColor:myHighColor,myLowColor:myLowColor,myMinBrightness:myMinBrightness,myMaxBrightness:myMaxBrightness,weight:weight,minValue:minValue,maxValue:maxValue},smalltalk.RONColorLinearNormalizer)})},
messageSends: ["minimumValue:", "maximumValue:", "minBrightnessFor:", "maxBrightnessFor:", "highColorFor:", "lowColorFor:", "ifTrue:ifFalse:", "/", "+", "-", "value:", "command", "*", "abs", "=", "blend:with:weight:"]}),
smalltalk.RONColorLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "inContext:lowColor:highColor:",
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
messageSends: ["inContext:", "lowColor:", "highColor:"]}),
smalltalk.RONColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:lowColor:lowThreshold:highColor:highThreshold:",
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
messageSends: ["inContext:", "lowColor:", "highColor:", "minBrightness:", "maxBrightness:"]}),
smalltalk.RONColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:lowColor:highColor:",
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
messageSends: ["inContext:withCommand:", "lowColor:", "highColor:"]}),
smalltalk.RONColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:lowColor:lowThreshold:highColor:highThreshold:",
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
messageSends: ["inContext:withCommand:", "lowColor:", "highColor:", "minBrightness:", "maxBrightness:"]}),
smalltalk.RONColorLinearNormalizer.klass);


smalltalk.addClass('RONFontLinearNormalizer', smalltalk.RONLinearNormalizer, [], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._roValue_(anEntity);
$1=(5).__plus(_st((38).__star(_st(_st(value)._abs()).__slash(self._maximumValue_(anEntity))))._asInteger());
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value},smalltalk.RONFontLinearNormalizer)})},
messageSends: ["roValue:", "command", "+", "asInteger", "*", "/", "maximumValue:", "abs"]}),
smalltalk.RONFontLinearNormalizer);



smalltalk.addClass('RONumberLinearNormalizer', smalltalk.RONLinearNormalizer, ['scale'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RONumberLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONumberLinearNormalizer)})},
messageSends: ["initialize"]}),
smalltalk.RONumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._roValue_(anEntity);
$1=_st(_st(_st(_st(_st(value)._abs()).__slash(self._maximumValue_(anEntity)))._asFloat()).__star(self._scale()))._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value},smalltalk.RONumberLinearNormalizer)})},
messageSends: ["roValue:", "command", "asInteger", "*", "scale", "asFloat", "/", "maximumValue:", "abs"]}),
smalltalk.RONumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.RONumberLinearNormalizer)})},
messageSends: []}),
smalltalk.RONumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{anObject:anObject},smalltalk.RONumberLinearNormalizer)})},
messageSends: []}),
smalltalk.RONumberLinearNormalizer);



smalltalk.addClass('ROValueLinearNormalizer', smalltalk.RONLinearNormalizer, ['minScale', 'maxScale'], 'Roassal-Normalizers');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROValueLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@minScale"]=(0);
self["@maxScale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROValueLinearNormalizer)})},
messageSends: ["initialize"]}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxScale",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxScale",{},smalltalk.ROValueLinearNormalizer)})},
messageSends: []}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxScale:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@maxScale"]=aValue;
$1=self["@maxScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxScale:",{aValue:aValue},smalltalk.ROValueLinearNormalizer)})},
messageSends: []}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minScale",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minScale",{},smalltalk.ROValueLinearNormalizer)})},
messageSends: []}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minScale:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minScale"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"minScale:",{aValue:aValue},smalltalk.ROValueLinearNormalizer)})},
messageSends: []}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
fn: function (anEntity){
var self=this;
var value,slope;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._roValue_(anEntity);
slope=self._slope_(anEntity);
$1=_st(_st(_st(_st(_st(value)._abs()).__star(slope)).__plus(self._maxScale())).__minus(_st(_st(self._maximumValue_(anEntity))._asFloat()).__star(slope)))._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anEntity:anEntity,value:value,slope:slope},smalltalk.ROValueLinearNormalizer)})},
messageSends: ["roValue:", "command", "slope:", "asInteger", "-", "*", "asFloat", "maximumValue:", "+", "maxScale", "abs"]}),
smalltalk.ROValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "slope:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@maxScale"]).__minus(self["@minScale"])).__slash(_st(_st(self._maximumValue_(anEntity))._asFloat()).__minus(_st(self._minimumValue_(anEntity))._asFloat()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"slope:",{anEntity:anEntity},smalltalk.ROValueLinearNormalizer)})},
messageSends: ["/", "-", "asFloat", "minimumValue:", "maximumValue:"]}),
smalltalk.ROValueLinearNormalizer);



