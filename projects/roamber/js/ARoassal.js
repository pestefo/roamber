smalltalk.addPackage('ARoassal');
smalltalk.addClass('Color', smalltalk.Object, ['r', 'g', 'b', 'a'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._class()).__tild_tild(_st(aColor)._class());
if(smalltalk.assert($1)){
return false;
};
$2=_st(_st(_st(_st(self._red()).__eq(_st(aColor)._red()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._green()).__eq(_st(aColor)._green());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._blue()).__eq(_st(aColor)._blue());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._alpha()).__eq(_st(aColor)._alpha());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"=",{aColor:aColor},smalltalk.Color)})},
args: ["aColor"],
source: "= aColor\x0a\x09self class ~~ aColor class ifTrue: [ ^ false ].\x0a\x09^ ((self red = aColor red and: [ self green = aColor green ]) and: [ self blue = aColor blue ]) and: [ self alpha = aColor alpha]",
messageSends: ["ifTrue:", "~~", "class", "and:", "=", "alpha", "blue", "green", "red"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@a"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.Color)})},
args: [],
source: "alpha\x0a\x09^ a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha:",
category: 'accessing',
fn: function (aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@a"]=aVal;
return self}, function($ctx1) {$ctx1.fill(self,"alpha:",{aVal:aVal},smalltalk.Color)})},
args: ["aVal"],
source: "alpha: aVal\x0a\x09a := aVal",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLRGB",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st("rgb(".__comma(_st(self["@r"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@g"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@b"]).__star((255)._asString()))).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHTMLRGB",{},smalltalk.Color)})},
args: [],
source: "asHTMLRGB\x0a\x0a\x09^ 'rgb(',(r*255  asString),',',(g*255 asString),',',(b*255 asString),')'.  \x0a\x0a\x09\x09",
messageSends: [",", "*", "asString"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLRGBA",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@r"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@g"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@b"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@a"])._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHTMLRGBA",{},smalltalk.Color)})},
args: [],
source: "asHTMLRGBA\x0a\x0a\x09^ 'rgba(',(r*255  asString),',',(g*255 asString),',',(b*255 asString),',',(a asString),')'.  \x0a\x0a\x09\x09",
messageSends: [",", "asString", "*"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
args: [],
source: "blue\x0a\x09^ b ",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "brightness",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st((0.2126).__star(self._privateRed())).__star((255))).__plus(_st(_st((0.7152).__star(self._privateGreen())).__star((255))).__plus(_st((0.0722).__star(self._privateBlue())).__star((255))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"brightness",{},smalltalk.Color)})},
args: [],
source: "brightness\x0a\x09\x22 From http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color  \x22\x0a\x22\x09^ 0.2126*(self privateRed) + ( 0.7152*(self privateGreen)  + (0.0722*(self privateBlue)) )\x22\x0a\x09^ 0.2126*(self privateRed)* 255.0 \x0a\x09\x09\x09+ ( 0.7152*(self privateGreen) * 255.0  \x0a\x09\x09\x09+ (0.0722*(self privateBlue)* 255.0 ) )",
messageSends: ["+", "*", "privateBlue", "privateGreen", "privateRed"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanValue:",
category: 'other',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(value).__gt((1));
if(smalltalk.assert($1)){
return (1);
} else {
$2=_st(value).__lt((0));
if(smalltalk.assert($2)){
return (0);
};
};
$3=value;
return $3;
}, function($ctx1) {$ctx1.fill(self,"cleanValue:",{value:value},smalltalk.Color)})},
args: ["value"],
source: "cleanValue: value\x0a\x09\x22 Clean for possible mistaken values\x22\x0a\x09(value > 1.0) \x0a\x09\x09ifTrue: [^ 1.0]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09(value < 0.0) ifTrue: [^ 0.0] ].\x0a\x09^ value.",
messageSends: ["ifTrue:ifFalse:", "ifTrue:", "<", ">"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
args: [],
source: "green\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hue",
category: 'accessing',
fn: function (){
var self=this;
var red,green,blue,max,min,span,h;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
red=self._privateRed();
green=self._privateGreen();
blue=self._privateBlue();
max=_st(_st(red)._max_(green))._max_(blue);
min=_st(_st(red)._min_(green))._min_(blue);
span=_st(_st(max).__minus(min))._asFloat();
$1=_st(span).__eq((0));
if(smalltalk.assert($1)){
return (0);
};
$2=_st(red).__eq(max);
if(smalltalk.assert($2)){
h=_st(_st(_st(_st(green).__minus(blue))._asFloat()).__slash(span)).__star((60));
h;
} else {
$3=_st(green).__eq(max);
if(smalltalk.assert($3)){
h=(120).__plus(_st(_st(_st(_st(blue).__minus(red))._asFloat()).__slash(span)).__star((60)));
h;
} else {
h=(240).__plus(_st(_st(_st(_st(red).__minus(green))._asFloat()).__slash(span)).__star((60)));
h;
};
};
$4=_st(h).__lt((0));
if(smalltalk.assert($4)){
h=(360).__plus(h);
h;
};
$5=h;
return $5;
}, function($ctx1) {$ctx1.fill(self,"hue",{red:red,green:green,blue:blue,max:max,min:min,span:span,h:h},smalltalk.Color)})},
args: [],
source: "hue\x0a\x09\x22Return the hue of this color, an angle in the range [0.0..360.0].\x22\x0a\x09| red green blue max min span h |\x0a\x09red := self privateRed.\x0a\x09green := self privateGreen.\x0a\x09blue := self privateBlue.\x0a\x09max := (red max: green) max: blue.\x0a\x09min := (red min: green) min: blue.\x0a\x09span := (max - min) asFloat.\x0a\x09span = 0.0 ifTrue: [ ^ 0.0 ].\x0a\x09red = max \x0a\x09\x09ifTrue: [ h := (green - blue) asFloat / span * 60.0 ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ green = max \x0a\x09\x09\x09\x09ifTrue: [ h := 120.0 + ((blue - red) asFloat / span * 60.0) ]\x0a\x09\x09\x09\x09ifFalse: [ h := 240.0 + ((red - green) asFloat / span * 60.0) ] ].\x0a\x09h < 0.0 ifTrue: [ h := 360.0 + h ].\x0a\x09^ h",
messageSends: ["privateRed", "privateGreen", "privateBlue", "max:", "min:", "asFloat", "-", "ifTrue:", "=", "ifTrue:ifFalse:", "*", "/", "+", "<"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "isColor",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isColor",{},smalltalk.Color)})},
args: [],
source: "isColor\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "privateBlue",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateBlue",{},smalltalk.Color)})},
args: [],
source: "privateBlue\x0a\x09^ b",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "privateGreen",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateGreen",{},smalltalk.Color)})},
args: [],
source: "privateGreen\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "privateRed",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateRed",{},smalltalk.Color)})},
args: [],
source: "privateRed\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
category: 'private',
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setRed_green_blue_alpha_(rVal,gVal,bVal,(1));
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color)})},
args: ["rVal", "gVal", "bVal"],
source: "r: rVal g: gVal b: bVal\x0a\x09\x22 values are from 0.0 .. 1.0 \x22\x0a\x09self setRed: rVal green: gVal blue: bVal alpha: 1.0\x0a\x09\x09\x09\x09",
messageSends: ["setRed:green:blue:alpha:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:a:",
category: 'private',
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setRed_green_blue_alpha_(rVal,gVal,bVal,aVal);
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color)})},
args: ["rVal", "gVal", "bVal", "aVal"],
source: "r: rVal g: gVal b: bVal a: aVal\x0a\x09\x22 values are from 0.0 .. 1.0 \x22\x0a\x09self setRed: rVal green: gVal blue: bVal alpha: aVal\x0a\x09\x09\x09\x09",
messageSends: ["setRed:green:blue:alpha:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
args: [],
source: "red\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbTriplet",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st(self["@r"])._copy(),_st(self["@g"])._copy(),_st(self["@b"])._copy()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbTriplet",{},smalltalk.Color)})},
args: [],
source: "rgbTriplet\x0a\x09^ { r copy . g copy . b copy }",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbTriplet255",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st(_st(self["@r"])._copy()).__star((255)),_st(_st(self["@g"])._copy()).__star((255)),_st(_st(self["@b"])._copy()).__star((255))];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbTriplet255",{},smalltalk.Color)})},
args: [],
source: "rgbTriplet255\x0a\x09^ { r copy * 255 . g copy * 255 . b copy * 255 }",
messageSends: ["*", "copy"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "saturation",
category: 'other',
fn: function (){
var self=this;
var red,green,blue,max,min;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
red=self._privateRed();
green=self._privateGreen();
blue=self._privateBlue();
min=red;
max=min;
$1=_st(green).__gt(max);
if(smalltalk.assert($1)){
max=green;
max;
};
$2=_st(blue).__gt(max);
if(smalltalk.assert($2)){
max=blue;
max;
};
$3=_st(green).__lt(min);
if(smalltalk.assert($3)){
min=green;
min;
};
$4=_st(blue).__lt(min);
if(smalltalk.assert($4)){
min=blue;
min;
};
$5=_st(max).__eq((0));
if(smalltalk.assert($5)){
return (0);
} else {
$6=_st(_st(_st(max).__minus(min))._asFloat()).__slash(_st(max)._asFloat());
return $6;
};
return self}, function($ctx1) {$ctx1.fill(self,"saturation",{red:red,green:green,blue:blue,max:max,min:min},smalltalk.Color)})},
args: [],
source: "saturation\x0a\x09\x22Return the saturation of this color, a value between 0.0 and 1.0.\x22\x0a\x09| red green blue max min |\x0a\x09red := self privateRed.\x0a\x09green := self privateGreen.\x0a\x09blue := self privateBlue.\x0a\x09max := min := red.\x0a\x09green > max ifTrue: [ max := green ].\x0a\x09blue > max ifTrue: [ max := blue ].\x0a\x09green < min ifTrue: [ min := green ].\x0a\x09blue < min ifTrue: [ min := blue ].\x0a\x09max = 0 \x0a\x09\x09ifTrue: [ ^ 0.0 ]\x0a\x09\x09ifFalse: [ ^ (max - min) asFloat / max asFloat ]",
messageSends: ["privateRed", "privateGreen", "privateBlue", "ifTrue:", ">", "<", "ifTrue:ifFalse:", "/", "asFloat", "-", "="],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "setHue:saturation:brightness:",
category: 'private',
fn: function (hue,saturation,brightness){
var self=this;
var s,v,hf,i,f,p,q,t;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15;
s=_st(_st(_st(saturation)._asFloat())._max_((0)))._min_((1));
v=_st(_st(_st(brightness)._asFloat())._max_((0)))._min_((1));
$1=_st(s).__eq((0));
if(smalltalk.assert($1)){
$2=self._setRed_green_blue_(v,v,v);
return $2;
};
hf=_st(hue)._asFloat();
$3=_st(_st(hf).__lt((0)))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(hf).__gt_eq((360));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($3)){
hf=_st(hf).__minus(_st(_st(_st(hf)._quo_((360)))._asFloat()).__star((360)));
hf;
};
hf=_st(hf).__slash((60));
i=_st(hf)._asInteger();
f=_st(hf)._fractionPart();
p=_st((1).__minus(s)).__star(v);
q=_st((1).__minus(_st(s).__star(f))).__star(v);
t=_st((1).__minus(_st(s).__star((1).__minus(f)))).__star(v);
$4=(0).__eq(i);
if(smalltalk.assert($4)){
$5=self._setRed_green_blue_(v,t,p);
return $5;
};
$6=(1).__eq(i);
if(smalltalk.assert($6)){
$7=self._setRed_green_blue_(q,v,p);
return $7;
};
$8=(2).__eq(i);
if(smalltalk.assert($8)){
$9=self._setRed_green_blue_(p,v,t);
return $9;
};
$10=(3).__eq(i);
if(smalltalk.assert($10)){
$11=self._setRed_green_blue_(p,q,v);
return $11;
};
$12=(4).__eq(i);
if(smalltalk.assert($12)){
$13=self._setRed_green_blue_(t,p,v);
return $13;
};
$14=(5).__eq(i);
if(smalltalk.assert($14)){
$15=self._setRed_green_blue_(v,p,q);
return $15;
};
self._error_("implementation error");
return self}, function($ctx1) {$ctx1.fill(self,"setHue:saturation:brightness:",{hue:hue,saturation:saturation,brightness:brightness,s:s,v:v,hf:hf,i:i,f:f,p:p,q:q,t:t},smalltalk.Color)})},
args: ["hue", "saturation", "brightness"],
source: "setHue: hue saturation: saturation brightness: brightness \x0a\x09\x22Initialize this color to the given hue, saturation, and brightness. See the comment in the instance creation method for details.\x22\x0a\x09| s v hf i f p q t |\x0a\x09s := (saturation asFloat max: 0.0) min: 1.0.\x0a\x09v := (brightness asFloat max: 0.0) min: 1.0.\x0a\x0a\x09\x22zero saturation yields gray with the given brightness\x22\x0a\x09s = 0.0 ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: v\x0a\x09\x09\x09green: v\x0a\x09\x09\x09blue: v ].\x0a\x09hf := hue asFloat.\x0a\x09(hf < 0.0 or: [ hf >= 360.0 ]) ifTrue: [ hf := hf - ((hf quo: 360.0) asFloat * 360.0) ].\x0a\x09hf := hf / 60.0.\x0a\x09i := hf asInteger.\x09\x22integer part of hue\x22\x0a\x09f := hf fractionPart.\x09\x22fractional part of hue\x22\x0a\x09p := (1.0 - s) * v.\x0a\x09q := (1.0 - (s * f)) * v.\x0a\x09t := (1.0 - (s * (1.0 - f))) * v.\x0a\x090 = i ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: v\x0a\x09\x09\x09green: t\x0a\x09\x09\x09blue: p ].\x0a\x091 = i ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: q\x0a\x09\x09\x09green: v\x0a\x09\x09\x09blue: p ].\x0a\x092 = i ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: p\x0a\x09\x09\x09green: v\x0a\x09\x09\x09blue: t ].\x0a\x093 = i ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: p\x0a\x09\x09\x09green: q\x0a\x09\x09\x09blue: v ].\x0a\x094 = i ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: t\x0a\x09\x09\x09green: p\x0a\x09\x09\x09blue: v ].\x0a\x095 = i ifTrue: \x0a\x09\x09[ ^ self \x0a\x09\x09\x09setRed: v\x0a\x09\x09\x09green: p\x0a\x09\x09\x09blue: q ].\x0a\x09self error: 'implementation error'",
messageSends: ["min:", "max:", "asFloat", "ifTrue:", "setRed:green:blue:", "=", "-", "*", "quo:", "or:", ">=", "<", "/", "asInteger", "fractionPart", "error:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "setRed:green:blue:",
category: 'private',
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setRed_green_blue_alpha_(rVal,gVal,bVal,(1));
return self}, function($ctx1) {$ctx1.fill(self,"setRed:green:blue:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color)})},
args: ["rVal", "gVal", "bVal"],
source: "setRed: rVal green: gVal blue: bVal \x0a\x09self setRed: rVal green: gVal blue: bVal alpha: 1.0",
messageSends: ["setRed:green:blue:alpha:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "setRed:green:blue:alpha:",
category: 'private',
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=self._cleanValue_(rVal);
self["@g"]=self._cleanValue_(gVal);
self["@b"]=self._cleanValue_(bVal);
self["@a"]=self._cleanValue_(aVal);
return self}, function($ctx1) {$ctx1.fill(self,"setRed:green:blue:alpha:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color)})},
args: ["rVal", "gVal", "bVal", "aVal"],
source: "setRed: rVal green: gVal blue: bVal alpha: aVal\x0a\x09\x22Initialize this color's r, g, and b components to the given values in the range [0.0..1.0]. \x22\x0a\x09r :=  self cleanValue: rVal.\x0a\x09g :=  self cleanValue: gVal.\x0a\x09b:=  self cleanValue: bVal. \x0a\x09a:=  self cleanValue: aVal. ",
messageSends: ["cleanValue:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:",
category: 'not yet classified',
fn: function (thisMany){
var self=this;
var sat,bri,step,hue;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
sat=self._saturation();
bri=self._brightness();
hue=self._hue();
step=(360).__slash(_st(thisMany)._max_((1)));
$1=_st((1)._to_(thisMany))._collect_((function(num){
var c;
return smalltalk.withContext(function($ctx2) {
c=_st($Color())._h_s_v_(hue,sat,bri);
c;
hue=_st(hue).__plus(step);
hue;
return c;
}, function($ctx2) {$ctx2.fillBlock({num:num,c:c},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"wheel:",{thisMany:thisMany,sat:sat,bri:bri,step:step,hue:hue},smalltalk.Color)})},
args: ["thisMany"],
source: "wheel: thisMany \x0a\x09\x22An array of thisMany colors around the color wheel starting at self and ending all the way around the hue space just before self.  Array is of length thisMany.  Very useful for displaying color based on a variable in your program.  \x22\x0a\x09| sat bri step hue |\x0a\x09sat := self saturation.\x0a\x09bri := self brightness.\x0a\x09hue := self hue.\x0a\x09step := 360.0 / (thisMany max: 1).\x0a\x09^ (1 to: thisMany) collect: \x0a\x09\x09[ :num | | c | \x0a\x09\x09c := Color \x0a\x09\x09\x09h: hue\x0a\x09\x09\x09s: sat\x0a\x09\x09\x09v: bri.\x09\x22hue is taken mod 360\x22\x0a\x09\x09hue := hue + step.\x0a\x09\x09c ]\x0a\x09\x22\x0a(Color wheel: 8) withIndexDo: [:c :i | Display fill: (i*10@20 extent: 10@20) fillColor: c]\x0a\x22",
messageSends: ["saturation", "brightness", "hue", "/", "max:", "collect:", "h:s:v:", "+", "to:"],
referencedClasses: ["Color"]
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:to:",
category: 'not yet classified',
fn: function (thisMany,aColor){
var self=this;
var sat,bri,step,hue,finishHue;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
sat=self._saturation();
bri=self._brightness();
hue=self._hue();
finishHue=_st(aColor)._hue();
step=_st(_st(finishHue).__minus(hue)).__slash(_st(thisMany)._max_((1)));
$1=_st((1)._to_(thisMany))._collect_((function(num){
var c;
return smalltalk.withContext(function($ctx2) {
c=_st($Color())._h_s_v_(hue,sat,bri);
c;
hue=_st(hue).__plus(step);
hue;
return c;
}, function($ctx2) {$ctx2.fillBlock({num:num,c:c},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"wheel:to:",{thisMany:thisMany,aColor:aColor,sat:sat,bri:bri,step:step,hue:hue,finishHue:finishHue},smalltalk.Color)})},
args: ["thisMany", "aColor"],
source: "wheel: thisMany to: aColor\x0a\x09\x22An array of thisMany colors around the color wheel starting at self and ending all the way around the hue space just before self.  Array is of length thisMany.  Very useful for displaying color based on a variable in your program.  \x22\x0a\x09| sat bri step hue finishHue |\x0a\x09sat := self saturation.\x0a\x09bri := self brightness.\x0a\x09hue := self hue.\x0a\x09finishHue := aColor hue.\x0a\x09step := ( finishHue - hue) / (thisMany max: 1).\x0a\x09^ (1 to: thisMany) collect: \x0a\x09\x09[ :num | | c | \x0a\x09\x09c := Color \x0a\x09\x09\x09h: hue\x0a\x09\x09\x09s: sat\x0a\x09\x09\x09v: bri.\x09\x22hue is taken mod 360\x22\x0a\x09\x09hue := hue + step.\x0a\x09\x09c ]\x0a\x09\x22\x0a(Color wheel: 8) withIndexDo: [:c :i | Display fill: (i*10@20 extent: 10@20) fillColor: c]\x0a\x22",
messageSends: ["saturation", "brightness", "hue", "/", "max:", "-", "collect:", "h:s:v:", "+", "to:"],
referencedClasses: ["Color"]
}),
smalltalk.Color);


smalltalk.addMethod(
smalltalk.method({
selector: "black",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0),(0),(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"black",{},smalltalk.Color.klass)})},
args: [],
source: "black\x0a\x09^ self new r: 0 g: 0 b: 0",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0),(0),(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
args: [],
source: "blue\x0a\x09^ self new r: 0 g: 0 b: 1",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0.5),(0.5),(0.5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"gray",{},smalltalk.Color.klass)})},
args: [],
source: "gray\x0a\x09^ self new r: 0.5 g: 0.5  b: 0.5 ",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0),(1),(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
args: [],
source: "green\x0a\x09^ self new r: 0 g: 1 b: 0",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "h:s:v:",
category: 'not yet classified',
fn: function (hue,saturation,brightness){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setHue_saturation_brightness_(hue,saturation,brightness);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h:s:v:",{hue:hue,saturation:saturation,brightness:brightness},smalltalk.Color.klass)})},
args: ["hue", "saturation", "brightness"],
source: "h: hue s: saturation v: brightness\x0a\x09\x22Create a color with the given hue, saturation, and brightness. Hue is given as the angle in degrees of the color on the color circle where red is zero degrees. Saturation and brightness are numbers in [0.0..1.0] where larger values are more saturated or brighter colors. For example, (Color h: 0 s: 1 v: 1) is pure red.\x22\x0a\x09\x22Note: By convention, brightness is abbreviated 'v' to to avoid confusion with blue.\x22\x0a\x0a\x09^ self basicNew setHue: hue saturation: saturation brightness: brightness",
messageSends: ["setHue:saturation:brightness:", "basicNew"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightGray",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0.827),(0.827),(0.827));
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightGray",{},smalltalk.Color.klass)})},
args: [],
source: "lightGray\x0a\x09^ self new r: 0.827 g: 0.827  b: 0.827 ",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
category: 'not yet classified',
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._r_g_b_a_(rVal,gVal,bVal,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color.klass)})},
args: ["rVal", "gVal", "bVal"],
source: "r: rVal g: gVal b: bVal\x0a\x09^ self r: rVal g: gVal b: bVal a: 1.0",
messageSends: ["r:g:b:a:"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:a:",
category: 'not yet classified',
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_a_(rVal,gVal,bVal,aVal);
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color.klass)})},
args: ["rVal", "gVal", "bVal", "aVal"],
source: "r: rVal g: gVal b: bVal a: aVal\x0a\x09^ self new r: rVal g: gVal b: bVal a: aVal.",
messageSends: ["r:g:b:a:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((1),(0),(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
args: [],
source: "red\x0a\x09^ self new r: 1 g: 0 b: 0",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryDarkGray",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0.25),(0.25),(0.25));
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryDarkGray",{},smalltalk.Color.klass)})},
args: [],
source: "veryDarkGray\x0a\x09^ self new r: 0.25 g: 0.25 b: 0.25",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryVeryDarkGray",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((0.125),(0.125),(0.125));
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryVeryDarkGray",{},smalltalk.Color.klass)})},
args: [],
source: "veryVeryDarkGray\x0a\x09^ self new r: 0.125 g: 0.125 b: 0.125",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:",
category: 'not yet classified',
fn: function (thisMany){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._wheel_saturation_brightness_(thisMany,(0.9),(0.7));
return $1;
}, function($ctx1) {$ctx1.fill(self,"wheel:",{thisMany:thisMany},smalltalk.Color.klass)})},
args: ["thisMany"],
source: "wheel: thisMany\x0a\x09\x22Return a collection of thisMany colors evenly spaced around the color wheel.\x22\x0a\x09\x22Color showColors: (Color wheel: 12)\x22\x0a\x0a\x09^ Color wheel: thisMany saturation: 0.9 brightness: 0.7",
messageSends: ["wheel:saturation:brightness:"],
referencedClasses: ["Color"]
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:saturation:brightness:",
category: 'not yet classified',
fn: function (thisMany,s,v){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Color())._h_s_v_((0),s,v))._wheel_(thisMany);
return $1;
}, function($ctx1) {$ctx1.fill(self,"wheel:saturation:brightness:",{thisMany:thisMany,s:s,v:v},smalltalk.Color.klass)})},
args: ["thisMany", "s", "v"],
source: "wheel: thisMany saturation: s brightness: v\x0a\x09\x22Return a collection of thisMany colors evenly spaced around the color wheel, all of the given saturation and brightness.\x22\x0a\x09\x22Color showColors: (Color wheel: 12 saturation: 0.4 brightness: 1.0)\x22\x0a\x09\x22Color showColors: (Color wheel: 12 saturation: 0.8 brightness: 0.5)\x22\x0a\x0a\x09^ (Color h: 0.0 s: s v: v) wheel: thisMany",
messageSends: ["wheel:", "h:s:v:"],
referencedClasses: ["Color"]
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((1),(1),(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
args: [],
source: "white\x0a\x09^ self new r: 1 g: 1 b: 1",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "yellow",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_((1),(1),(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"yellow",{},smalltalk.Color.klass)})},
args: [],
source: "yellow\x0a\x09^ self new r: 1 g: 1 b: 0",
messageSends: ["r:g:b:", "new"],
referencedClasses: []
}),
smalltalk.Color.klass);


smalltalk.addClass('ROAnnouncer', smalltalk.Announcer, ['forwarding', 'announcer'], 'ARoassal');
smalltalk.ROAnnouncer.comment="A ROAnnouncer is a wrapper of Announcer, this object receive and emit events. Each roassal element has an roannouncer.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "forward",
category: 'forwarding',
fn: function (){
var self=this;
function $ROEvent(){return smalltalk.ROEvent||(typeof ROEvent=="undefined"?nil:ROEvent)}
return smalltalk.withContext(function($ctx1) { 
self._forward_($ROEvent());
return self}, function($ctx1) {$ctx1.fill(self,"forward",{},smalltalk.ROAnnouncer)})},
args: [],
source: "forward\x0a\x09self forward: ROEvent",
messageSends: ["forward:"],
referencedClasses: ["ROEvent"]
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "forward:",
category: 'forwarding',
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
args: ["anEventClass"],
source: "forward: anEventClass\x0a\x0a\x09forwarding ifNil: [ forwarding := IdentitySet new ].\x0a\x09forwarding add: anEventClass",
messageSends: ["ifNil:", "new", "add:"],
referencedClasses: ["IdentitySet"]
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isForwarded:",
category: 'testing',
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
args: ["anEventClass"],
source: "isForwarded: anEventClass\x0a\x09anEventClass isBehavior ifFalse: [ ^ self isForwarded: anEventClass class ].\x0a\x09 \x0a\x09forwarding ifNil: [ ^ false ].\x0a\x09^ forwarding anySatisfy: [ :c | (c == anEventClass) or: [ anEventClass inheritsFrom: c ] ]",
messageSends: ["ifFalse:", "isForwarded:", "class", "isBehavior", "ifNil:", "anySatisfy:", "or:", "inheritsFrom:", "=="],
referencedClasses: []
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "isForwarder",
category: 'testing',
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
args: [],
source: "isForwarder\x0a\x09^ forwarding notNil and: [ forwarding notEmpty ]",
messageSends: ["and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.ROAnnouncer);

smalltalk.addMethod(
smalltalk.method({
selector: "sendToParent:",
category: 'announce',
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
args: ["event"],
source: "sendToParent: event\x0a\x09\x22Do nothing if an event class\x22\x0a\x09event isBehavior ifTrue: [ ^ self ].\x0a\x09\x0a\x09event hasElement ifTrue: [ event element parentAnnounce: event ]",
messageSends: ["ifTrue:", "isBehavior", "parentAnnounce:", "element", "hasElement"],
referencedClasses: []
}),
smalltalk.ROAnnouncer);



smalltalk.addClass('ROObject', smalltalk.Object, [], 'ARoassal');


smalltalk.addClass('ROContainer', smalltalk.ROObject, ['elements', 'attributes'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
category: 'actions',
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
args: ["object"],
source: "elementFromModel: object\x0a\x09\x22Recursively look for the element with a model object\x22\x0a\x09| v |\x0a\x09\x0a\x09(self model = object) ifTrue: [ ^ self ].\x0a\x09\x0a\x09v :=  elements reverse\x0a\x09\x09\x09\x09detect: [ :e | (e model = object) and: [ e isElement ] ]\x0a\x09\x09\x09\x09ifNone: [ nil ].\x0a\x09v ifNotNil: [ ^ v ].\x0a\x09\x0a\x09elements reverse do: [ :e |\x0a\x09\x09v := e elementFromModel: object.\x0a\x09\x09v ifNotNil: [ ^ v ] ].\x0a\x09\x0a\x09^ nil\x0a\x0a\x09\x22^ (self elementsSuchThat: [ :el | object = el model ]) first\x22",
messageSends: ["ifTrue:", "=", "model", "detect:ifNone:", "and:", "isElement", "reverse", "ifNotNil:", "do:", "elementFromModel:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsAsEdge",
category: 'as yet unclassified',
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
args: [],
source: "elementsAsEdge\x0a\x22\x09^ elements select: #isEdge\x22\x0a\x09^ elements select: [:e | e isEdge]",
messageSends: ["select:", "isEdge"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsDo:",
category: 'as yet unclassified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@elements"])._copy())._do_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsDo:",{aBlock:aBlock},smalltalk.ROContainer)})},
args: ["aBlock"],
source: "elementsDo: aBlock\x0a\x09^ elements copy do: aBlock",
messageSends: ["do:", "copy"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsSuchThat:",
category: 'as yet unclassified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsSuchThat:",{aBlock:aBlock},smalltalk.ROContainer)})},
args: ["aBlock"],
source: "elementsSuchThat: aBlock\x0a\x09^ elements select: aBlock",
messageSends: ["select:"],
referencedClasses: []
}),
smalltalk.ROContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROContainer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROContainer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := OrderedCollection new.\x0a\x09",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROContainer);



smalltalk.addClass('ROAbstractComponent', smalltalk.ROContainer, ['model', 'view', 'interactions', 'shape', 'eventHandler'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'accessing',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._addShape_(aShape);
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aShape:aShape},smalltalk.ROAbstractComponent)})},
args: ["aShape"],
source: "+ aShape \x0a\x09\x22Add a shape to myself. aShape could either be an instance of a shape class or a class\x22\x0a\x09\x0a\x09self addShape: aShape.\x0a\x09^ self ",
messageSends: ["addShape:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
category: 'as yet unclassified',
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addInteraction_(anInteractionClassOrInstance);
return self}, function($ctx1) {$ctx1.fill(self,"@",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROAbstractComponent)})},
args: ["anInteractionClassOrInstance"],
source: "@ anInteractionClassOrInstance\x0a\x09\x22Add an interaction to the node\x22\x0a\x09\x0a\x09self addInteraction: anInteractionClassOrInstance",
messageSends: ["addInteraction:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
category: 'drawing',
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
args: ["aShape"],
source: "addShape: aShape \x0a\x09\x22Add a shape to myself. aShape could either be an instance of a shape class or simply a class\x22\x0a\x0a\x09| s |\x0a\x09s := (aShape installedOn: self).\x0a\x22\x09s addLast: shape.\x22\x0a\x22\x09Transcript show: (s width asString),'-BEFOREinstalledOn:-',(s class asString),(String cr).\x22\x0a\x09\x22 set height and width from previous shape <--- needs to be changed when implementing chain of shapes \x22\x0a\x0a\x09self shape isNil ifFalse: [\x0a\x22\x09\x09Transcript show: 's ',(s class asString) , ' ' , (s width asString) , ' -' , (s height asString) , ' ' , (s class asString) , ' ' , (String cr).\x0a\x09\x09Transcript show: 'shape ',(shape class asString) , ' ' , (shape width asString) , ' -' , (shape height asString) , ' ' , (shape class asString) , ' ' , (String cr), (String cr).\x22\x0a\x09\x09s width: (s width max: (self shape width)).\x0a\x09\x09s height: (s height max: (self shape height)).\x09\x0a\x09]. \x0a\x0a\x22\x09Transcript show: (s width asString),'-AFTERinstalledOn:-',(s class asString),(String cr).\x22\x0a\x09shape := s.",
messageSends: ["installedOn:", "ifFalse:", "width:", "max:", "width", "shape", "height:", "height", "isNil"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
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
args: ["anEvent"],
source: "announce: anEvent\x0a\x09\x22trigger an event. Objects who registered to me will get notified\x22\x0a\x0a\x09| eventToBeSent |\x0a\x09eventToBeSent := anEvent isBehavior \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ anEvent new ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ anEvent ]. \x0a\x09\x0a\x09eventToBeSent element: self.\x0a\x09eventHandler announce: eventToBeSent",
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "element:", "announce:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "getShape:",
category: 'testing',
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
args: ["shapeClass"],
source: "getShape: shapeClass\x0a\x09\x22Return a shape instance, instance of the shape class provided as parameter\x22\x0a\x0a\x09^ self shapeDetect: [ :de | de isKindOf: shapeClass ]",
messageSends: ["shapeDetect:", "isKindOf:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROAnnouncer(){return smalltalk.ROAnnouncer||(typeof ROAnnouncer=="undefined"?nil:ROAnnouncer)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractComponent.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@eventHandler"]=_st($ROAnnouncer())._new();
self["@view"]=_st($ROView())._nullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x22\x09parent := ROView nullView.\x22\x0a\x09\x0a\x09eventHandler := ROAnnouncer new.\x0a\x09view := ROView nullView.\x0a\x09\x0a\x09\x22Actually, I am not sure we need to have a variable interactions\x22\x0a\x22\x09interactions := IdentityDictionary new.\x0a\x0a\x09zIndex := 0\x0a\x22",
messageSends: ["initialize", "new", "nullView"],
referencedClasses: ["ROAnnouncer", "ROView"]
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isElement",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEdge())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isElement",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "isElement\x0a\x09^ self isEdge not",
messageSends: ["not", "isEdge"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotEdge",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isEdge())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotEdge",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "isNotEdge\x0a\x09^ self isEdge not",
messageSends: ["not", "isEdge"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
category: 'testing',
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._isShapedAs_(aShapeClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.ROAbstractComponent)})},
args: ["aShapeClass"],
source: "isShapedAs: aShapeClass\x0a\x09^ shape isShapedAs: aShapeClass",
messageSends: ["isShapedAs:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._model_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.ROAbstractComponent)})},
args: ["anObject"],
source: "on: anObject \x0a\x09\x22Set the object model of myself. The object model is used by the shape when computing metrics that may be used by the shapes\x22\x0a\x0a\x09self model: anObject",
messageSends: ["model:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'events',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass do: aBlock\x0a\x09\x22Register a block as an handler for eventClass\x22\x0a\x09\x0a\x0a\x09eventHandler on: eventClass do: aBlock.\x0a\x09\x22interactions at: eventClass put: aBlock\x22",
messageSends: ["on:do:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "on:doOnce:",
category: 'events',
fn: function (eventClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._on_do_(eventClass,(function(arg){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(arg);
return _st(self["@eventHandler"])._unsubscribeForEvent_(eventClass);
}, function($ctx2) {$ctx2.fillBlock({arg:arg},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{eventClass:eventClass,aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["eventClass", "aBlock"],
source: "on: eventClass doOnce: aBlock\x0a\x09\x22Register a block as an handler for eventClass. The callback is removed when exected\x22\x0a\x09\x0a\x09eventHandler on: eventClass do: [ :arg | \x0a\x09\x09aBlock value: arg.\x0a\x09\x09eventHandler unsubscribeForEvent: eventClass.\x0a\x09\x09\x22self removeInteraction: eventClass \x22]",
messageSends: ["on:do:", "value:", "unsubscribeForEvent:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeInteraction:",
category: 'events',
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
args: ["anInteractionClass"],
source: "removeInteraction: anInteractionClass\x0a\x09\x22Remove an interaction from the receiver. No error is raised if no interaction is found\x22\x0a\x09\x0a\x09| ds |\x0a\x09ds := interactions select: [ :d | d isKindOf: anInteractionClass ].\x0a\x09ds associationsDo: [ :assoc | \x0a\x09\x09interactions removeKey: assoc key.\x0a\x09\x09eventHandler unsubscribe: assoc value ].",
messageSends: ["select:", "isKindOf:", "associationsDo:", "removeKey:", "key", "unsubscribe:", "value"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._shapeDetect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapeDetect:",{aBlock:aBlock},smalltalk.ROAbstractComponent)})},
args: ["aBlock"],
source: "shapeDetect: aBlock\x0a\x09^ shape shapeDetect: aBlock",
messageSends: ["shapeDetect:"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._signalUpdate();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "signalUpdate\x0a\x09\x22Trigger a redisplay of the view\x22\x0a\x09\x0a\x09^ view signalUpdate",
messageSends: ["signalUpdate"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROAbstractComponent)})},
args: [],
source: "view\x0a\x09\x22Answer the view in which I am defined\x22\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aView:aView},smalltalk.ROAbstractComponent)})},
args: ["aView"],
source: "view: aView\x0a\x09\x22Set the view in which I am defined. All my elements should also belong to the same view\x22\x0a\x09view := aView.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractComponent);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'as yet unclassified',
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
args: ["anObject"],
source: "on: anObject \x0a\x09^ self basicNew on: anObject; initialize; yourself",
messageSends: ["on:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.ROAbstractComponent.klass);


smalltalk.addClass('ROEdge', smalltalk.ROAbstractComponent, ['from', 'to'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'accessing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROEdge)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsDo:",
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"elementsDo:",{aBlock:aBlock},smalltalk.ROEdge)})},
args: ["aBlock"],
source: "elementsDo: aBlock\x0a\x09\x22Do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.ROEdge)})},
args: [],
source: "from\x0a\x09^ from",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'accessing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.ROEdge)})},
args: ["anElement"],
source: "from: anElement\x0a\x09from := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "isEdge",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isEdge",{},smalltalk.ROEdge)})},
args: [],
source: "isEdge\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._from())._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROEdge)})},
args: [],
source: "position \x0a\x09\x0a\x09^self from position ",
messageSends: ["position", "from"],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROEdge)})},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aShape:aShape},smalltalk.ROEdge)})},
args: ["aShape"],
source: "shape: aShape\x0a\x09shape := aShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.ROEdge)})},
args: [],
source: "to\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'accessing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.ROEdge)})},
args: ["anElement"],
source: "to: anElement\x0a\x09to := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdge);


smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:inView:",
category: 'public - edges constructions',
fn: function (associations,view){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_inView_(associations,"key","value",view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:inView:",{associations:associations,view:view},smalltalk.ROEdge.klass)})},
args: ["associations", "view"],
source: "buildEdgesFromAssociations: associations inView: view\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09^ self buildEdgesFromElements: associations from: #key to: #value inView: view",
messageSends: ["buildEdgesFromElements:from:to:inView:"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:",
category: 'public - edges constructions',
fn: function (associations,aLineShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(associations,"key","value",aLineShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:",{associations:associations,aLineShape:aLineShape},smalltalk.ROEdge.klass)})},
args: ["associations", "aLineShape"],
source: "buildEdgesFromAssociations: associations using: aLineShape\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09^ self buildEdgesFromElements: associations from: #key to: #value using: aLineShape",
messageSends: ["buildEdgesFromElements:from:to:using:"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:inView:",
category: 'public - edges constructions',
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
args: ["associations", "aLineShape", "view"],
source: "buildEdgesFromAssociations: associations using: aLineShape inView: view\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09| edges associationsOfElements |\x0a\x09associationsOfElements := associations collect: [ :assoc | (view elementFromModel: assoc key) -> (view elementFromModel: assoc value) ].\x0a\x09associationsOfElements ifEmpty: [ ^ #() ].\x0a\x09\x0a\x09edges := OrderedCollection new.\x0a\x09associationsOfElements do: [ :associationOfTwoElements |\x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := ROEdge from: associationOfTwoElements key to: associationOfTwoElements value. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge ].\x0a\x09view addAll: edges.\x0a\x09^ edges",
messageSends: ["collect:", "->", "elementFromModel:", "value", "key", "ifEmpty:", "new", "do:", "from:to:", "+", "add:", "addAll:"],
referencedClasses: ["OrderedCollection", "ROEdge"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:",
category: 'public - edges constructions',
fn: function (elements,fromBlock,toBlock){
var self=this;
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,$ROLine());
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock},smalltalk.ROEdge.klass)})},
args: ["elements", "fromBlock", "toBlock"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x0a\x09^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: ROLine",
messageSends: ["buildEdgesFromElements:from:to:using:"],
referencedClasses: ["ROLine"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:",
category: 'public - edges constructions',
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
args: ["elements", "fromBlock", "toBlock", "aLineShape"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09| edges container fromElement toElement elementsWithModels |\x0a\x09elements ifEmpty: [ ^ #() ].\x0a\x09edges := OrderedCollection new.\x0a\x09elementsWithModels := elements select: [ :el | el model notNil ].\x0a\x09elementsWithModels do: [ :element |\x0a\x09\x09container := element parent.\x0a\x09\x09fromElement := container elementFromModel: (fromBlock roValue: element model).\x0a\x09\x09toElement := container elementFromModel: (toBlock roValue: element model).\x0a\x09\x09(fromElement notNil and: [ toElement notNil ])\x0a\x09\x09\x09ifTrue: [  \x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := ROEdge from: fromElement to: toElement. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge.\x0a\x09\x09\x09\x09container add: edge ] ].\x0a\x09^ edges",
messageSends: ["ifEmpty:", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "roValue:", "ifTrue:", "from:to:", "+", "add:", "and:"],
referencedClasses: ["OrderedCollection", "ROEdge"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'public',
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
args: ["el1", "el2"],
source: "from: el1 to: el2\x0a\x09^ self new from: el1; to: el2; yourself",
messageSends: ["from:", "new", "to:", "yourself"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineFrom:to:",
category: 'public',
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
args: ["f", "t"],
source: "lineFrom: f to: t\x0a\x09^ (self from: f to: t)\x0a\x09\x09+ (ROLine new) ;\x0a\x09\x09yourself\x0a\x09",
messageSends: ["+", "new", "from:to:", "yourself"],
referencedClasses: ["ROLine"]
}),
smalltalk.ROEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "linesFor:",
category: 'public',
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
args: ["associations"],
source: "linesFor: associations \x0a\x09\x22Return a collection of edges, one for each provided association\x22\x0a\x0a\x09^ associations collect: [ :assoc | self lineFrom: assoc key to: assoc value ]",
messageSends: ["collect:", "lineFrom:to:", "key", "value"],
referencedClasses: []
}),
smalltalk.ROEdge.klass);


smalltalk.addClass('ROElement', smalltalk.ROAbstractComponent, ['position'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "absolutePosition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"absolutePosition",{},smalltalk.ROElement)})},
args: [],
source: "absolutePosition\x0a\x09\x22Return the absolute position of the element, the top left corner\x22\x0a\x0a\x22\x09^ parent \x0a\x09\x09ifNil: [ self position ]\x0a\x09\x09ifNotNil: [ self position + parent absolutePosition ]\x22\x0a\x09\x09\x0a\x09^ self position",
messageSends: ["position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractions",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@interactions"])._values())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractions",{},smalltalk.ROElement)})},
args: [],
source: "activateInteractions\x0a\x09interactions values do: [:each | each value].",
messageSends: ["do:", "value", "values"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteraction:",
category: 'as yet unclassified',
fn: function (anInteractionClassOrInstance){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._at_put_(_st(anInteractionClassOrInstance)._key(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(anInteractionClassOrInstance)._initializeElement_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addInteraction:",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.ROElement)})},
args: ["anInteractionClassOrInstance"],
source: "addInteraction: anInteractionClassOrInstance\x0a\x09\x22Add an interaction to the node\x22\x0a\x09\x0a\x09interactions at: anInteractionClassOrInstance key put: [anInteractionClassOrInstance initializeElement: self]",
messageSends: ["at:put:", "key", "initializeElement:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "bounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._extent_(_st(self["@shape"])._extentFor_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bounds",{},smalltalk.ROElement)})},
args: [],
source: "bounds\x0a\x09\x22Return the bounds of the element\x22\x0a\x09\x0a\x09^ self position extent: (shape extentFor: self)",
messageSends: ["extent:", "extentFor:", "position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._shape())._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROElement)})},
args: ["aColor"],
source: "color: aColor\x0a\x09self shape color: aColor.",
messageSends: ["color:", "shape"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (canvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._drawOn_for_(canvas,self);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{canvas:canvas},smalltalk.ROElement)})},
args: ["canvas"],
source: "drawOn: canvas\x0a\x09shape drawOn: canvas for: self",
messageSends: ["drawOn:for:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._extentFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROElement)})},
args: [],
source: "extent\x0a\x09^ shape extentFor: self",
messageSends: ["extentFor:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
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
args: ["aPoint"],
source: "extent: aPoint \x0a\x09(aPoint = self extent) ifTrue: [ ^ self ].\x0a\x0a\x09shape extent: aPoint",
messageSends: ["ifTrue:", "=", "extent", "extent:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)})},
args: [],
source: "height\x0a\x22\x09^ shape heightFor: self\x22\x0a\x09^ shape height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._height_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValue:aValue},smalltalk.ROElement)})},
args: ["aValue"],
source: "height: aValue\x0a\x09shape height: aValue",
messageSends: ["height:"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROElement)})},
args: [],
source: "hide\x0a\x09shape hide",
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
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
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0.\x0a\x09interactions := Dictionary new.\x0a\x09shape := RONullShape new.\x0a\x09self @ ROClickable.\x0a\x09self @ ROHoverable.",
messageSends: ["initialize", "@", "new"],
referencedClasses: ["Dictionary", "RONullShape", "ROClickable", "ROHoverable"]
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "isEdge",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isEdge",{},smalltalk.ROElement)})},
args: [],
source: "isEdge\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.ROElement)})},
args: [],
source: "position\x0a\x09\x22Return the position of the element. Return a point of floats\x22\x0a\x09\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "positionAsInteger",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._position())._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionAsInteger",{},smalltalk.ROElement)})},
args: [],
source: "positionAsInteger\x0a\x09\x22Return the position as integer\x22\x0a\x09\x0a\x09^ self position asIntegerPoint ",
messageSends: ["asIntegerPoint", "position"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeShape();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.ROElement)})},
args: [],
source: "remove\x0a\x09\x22Remove myself from the view I belong to (if I actually belong to the view, else do nothing) and from my parent.\x22\x0a\x0a\x22\x09self removeFromParent.\x22\x0a\x22\x09self view removeElementToRender: self.\x22\x09\x22We remove all the subelements\x22\x0a\x22\x09self allElementsDo: #remove\x22\x0a\x09self removeShape",
messageSends: ["removeShape"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "removeShape",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._removeSVGElement();
return self}, function($ctx1) {$ctx1.fill(self,"removeShape",{},smalltalk.ROElement)})},
args: [],
source: "removeShape\x0a\x09shape removeSVGElement",
messageSends: ["removeSVGElement"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.ROElement)})},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aROShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aROShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aROShape:aROShape},smalltalk.ROElement)})},
args: ["aROShape"],
source: "shape: aROShape\x0a\x09shape := aROShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.ROElement)})},
args: [],
source: "show\x0a\x09shape show",
messageSends: ["show"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (d){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(_st(d).__at(d));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{d:d},smalltalk.ROElement)})},
args: ["d"],
source: "size: d\x0a\x09self extent: d @ d",
messageSends: ["extent:", "@"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.ROElement)})},
args: ["aPoint"],
source: "translateTo: aPoint \x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)})},
args: [],
source: "width\x0a\x22\x09^ shape widthFor: self\x22\x0a\x09^ shape width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.ROElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape"])._width_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aValue:aValue},smalltalk.ROElement)})},
args: ["aValue"],
source: "width: aValue\x0a\x09shape width: aValue",
messageSends: ["width:"],
referencedClasses: []
}),
smalltalk.ROElement);


smalltalk.addMethod(
smalltalk.method({
selector: "forCollection:",
category: 'public',
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
args: ["aCollection"],
source: "forCollection: aCollection \x0a\x09^ (aCollection collect: [ :v | self on: v ]) asArray",
messageSends: ["asArray", "collect:", "on:"],
referencedClasses: []
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
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
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new model: anObject; yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sprite",
category: 'public',
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
args: [],
source: "sprite\x0a\x0a\x09^ self new\x0a\x09\x09\x09extent: 50 @ 50;\x0a\x09\x09\x09addInteraction: RODraggable;\x0a\x22\x09\x09\x09addShape: (ROBorder new color: Color red);\x22\x0a\x09\x09\x09addShape: (ROBox new);\x0a\x09\x09\x09yourself",
messageSends: ["extent:", "@", "new", "addInteraction:", "addShape:", "yourself"],
referencedClasses: ["RODraggable", "ROBox"]
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spriteOn:",
category: 'public',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._sprite())._on_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"spriteOn:",{value:value},smalltalk.ROElement.klass)})},
args: ["value"],
source: "spriteOn: value\x0a\x09^ self sprite on: value",
messageSends: ["on:", "sprite"],
referencedClasses: []
}),
smalltalk.ROElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "spritesOn:",
category: 'public',
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
args: ["values"],
source: "spritesOn: values\x0a\x09^ values collect: [:v | self sprite on: v ]",
messageSends: ["collect:", "on:", "sprite"],
referencedClasses: []
}),
smalltalk.ROElement.klass);


smalltalk.addClass('ROView', smalltalk.ROContainer, ['elements', 'svgCanvas'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "absolutePosition",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"absolutePosition",{},smalltalk.ROView)})},
args: [],
source: "absolutePosition\x0a\x09^ 0 @ 0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addElement_(anElement);
_st(anElement)._view_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElement:anElement},smalltalk.ROView)})},
args: ["anElement"],
source: "add: anElement\x0a\x09\x22Add an element in the view. Do nothing if the element is already in\x22\x0a\x09\x22(element view ~~ ROView nullView) ifTrue: [ ^ self ].\x22\x0a\x09\x22\x0a\x09self addElement: element.\x0a\x09element parent: self.\x0a\x09element view: self.\x0a\x0a\x09self addElementRecursivelyToRender: element\x0a\x09\x22\x0a\x09self addElement: anElement.\x0a\x09anElement view: self.",
messageSends: ["addElement:", "view:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding',
fn: function (els){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(els)._do_((function(n){
return smalltalk.withContext(function($ctx2) {
return self._add_(n);
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{els:els},smalltalk.ROView)})},
args: ["els"],
source: "addAll: els \x0a\x09\x22self assert: [ els isKindOf: Collection ].\x22\x0a\x09els do: [:n | self add: n ]",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'adding',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._add_(element);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{element:element},smalltalk.ROView)})},
args: ["element"],
source: "addElement: element\x0a\x09elements add: element.",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._paper())._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROView)})},
args: [],
source: "clear\x0a\x09self paper clear",
messageSends: ["clear", "paper"],
referencedClasses: []
}),
smalltalk.ROView);

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
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.ROView)})},
args: [],
source: "elements\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROView.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($Array())._new();
self["@svgCanvas"]=self._paper();
self._clear();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := Array new.\x0a\x09svgCanvas := self paper.\x0a\x09self clear",
messageSends: ["initialize", "new", "paper", "clear"],
referencedClasses: ["Array"]
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.ROView)})},
args: [],
source: "model\x0a\x09\x22To be polymorphic with ROElement\x22\x0a\x09\x0a\x09^ self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfElements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.ROView)})},
args: [],
source: "numberOfElements\x0a\x09^ elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.ROView)})},
args: [],
source: "open\x0a\x09\x0a\x09elements do: [ :each | each drawOn: svgCanvas].",
messageSends: ["do:", "drawOn:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
category: 'public - opening',
fn: function (){
var self=this;
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RORaphaelCanvas())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.ROView)})},
args: [],
source: "paper\x0a\x09^ RORaphaelCanvas canvas",
messageSends: ["canvas"],
referencedClasses: ["RORaphaelCanvas"]
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'accessing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(element)._removeShape();
_st(self["@elements"])._remove_(element);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{element:element},smalltalk.ROView)})},
args: ["element"],
source: "remove: element\x0a\x09\x22Remove the element from myself. However, the element is not removed from the visualization. Send #remove to element to actually remove it.\x22\x0a\x09element removeShape.\x0a\x09elements remove: element",
messageSends: ["removeShape", "remove:"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'public - opening',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.ROView)})},
args: [],
source: "signalUpdate\x0a\x09\x22self announce: RORefreshNeeded\x22\x0a\x09\x0a\x09self elements do: [:el | el drawOn: svgCanvas].",
messageSends: ["do:", "drawOn:", "elements"],
referencedClasses: []
}),
smalltalk.ROView);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.ROView)})},
args: [],
source: "view\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView);


smalltalk.ROView.klass.iVarNames = ['nullView'];
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._resetNullView();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROView.klass)})},
args: [],
source: "initialize\x0a\x09self resetNullView ",
messageSends: ["resetNullView"],
referencedClasses: []
}),
smalltalk.ROView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "nullView",
category: 'as yet unclassified',
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
args: [],
source: "nullView\x0a\x09\x22Used when creating new element. For example, we have the relation:\x0a\x09  ROElement new view == ROView nullView\x22\x0a\x09\x0a\x09^ nullView ifNil: [ nullView := self new ].",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ROView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resetNullView",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nullView"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetNullView",{},smalltalk.ROView.klass)})},
args: [],
source: "resetNullView \x0a\x09nullView := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROView.klass);


smalltalk.addClass('ROShape', smalltalk.ROObject, ['svgElement', 'height', 'width', 'color', 'colorCache'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
category: 'drawing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anElement)._activateInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROShape)})},
args: ["anElement"],
source: "activateInteractionsOn: anElement\x0a\x09\x22add interactions to svgElement\x22\x0a\x09anElement activateInteractions.",
messageSends: ["activateInteractions"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROShape)})},
args: [],
source: "color\x0a\x09^ color \x0a\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self["@colorCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROShape)})},
args: ["aColor"],
source: "color:\x09 aColor\x0a\x09color := aColor.\x0a\x09colorCache := nil.\x0a\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
category: 'creation',
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
args: ["element"],
source: "colorFor: element\x0a\x09\x22Compute the color of the element\x22\x0a\x0a\x09\x22We use a cache mechanism since computing the cache can be quite slow\x22\x0a\x09colorCache notNil ifTrue: [ ^ colorCache ].\x0a\x09^ colorCache := color roValue: element.\x0a\x0a\x22\x09(element hasAttribute: (#element, self class name) asSymbol)\x0a\x09\x09ifTrue: [ ^ element attributeAt: (#element, self class name) asSymbol ].\x0a \x0a\x09colorCache := color roValue: element.\x0a\x09element attributeAt: (#element, self class name) asSymbol put: colorCache.\x0a\x09^ colorCache\x22",
messageSends: ["ifTrue:", "notNil", "roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultExtent",
category: 'creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(5).__at((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultExtent",{},smalltalk.ROShape)})},
args: [],
source: "defaultExtent\x0a\x09\x22Each shape has a minimum size of 5@5\x22\x0a\x0a\x09^ 5 @ 5",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:for:",
category: 'drawing',
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
args: ["canvas", "anElement"],
source: "drawOn: canvas for: anElement\x0a\x09\x22Create svgElement if necessary and redraw with current attributes\x22\x0a\x09(svgElement isNil) \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self initializeSVGElementOn: canvas for: anElement.\x0a\x09\x09\x09self activateInteractionsOn: anElement.].\x0a\x0a\x09\x09self updateSVGElementOn: canvas for: anElement.\x0a\x09\x0a\x09",
messageSends: ["ifTrue:", "initializeSVGElementOn:for:", "activateInteractionsOn:", "isNil", "updateSVGElementOn:for:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._elementOn_(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape)});},
args: [],
source: "element\x0a\x09^ self elementOn: nil",
messageSends: ["elementOn:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'creation',
fn: function (anObject){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROElement())._on_(anObject)).__plus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape)})},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09^ (ROElement on: anObject) + self",
messageSends: ["+", "on:"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'creation',
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
args: ["collectionOfObjects"],
source: "elementsOn: collectionOfObjects\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ collectionOfObjects collect: [ :object | self copy elementOn: object ] ",
messageSends: ["collect:", "elementOn:", "copy"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'drawing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._width_(_st(aPoint)._x());
self._height_(_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.ROShape)})},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09self width: aPoint x.\x0a\x09self height: aPoint y.",
messageSends: ["width:", "x", "height:", "y"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
category: 'drawing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__at(self["@height"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.ROShape)})},
args: ["element"],
source: "extentFor: element\x0a\x09\x22Return the extent of element\x22\x0a\x09\x0a\x09\x22^ ((width roValue: element) @ (height roValue: element)) .\x22\x0a\x09^ width @ height\x0a\x09",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROShape)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@height"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
args: ["aNumberOrABlock"],
source: "height: aNumberOrABlock\x0a\x09height := aNumberOrABlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@height"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.ROShape)});},
args: ["anElement"],
source: "heightFor: anElement\x0a\x09^ height roValue: anElement",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.ROShape)})},
args: [],
source: "hide\x0a\x09svgElement hide.",
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self._color_(_st(self._class())._defaultColor());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self color: self class defaultColor.",
messageSends: ["initialize", "color:", "defaultColor", "class"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09\x22Initialize svgElement\x22\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
category: 'accessing',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"installedOn:",{element:element},smalltalk.ROShape)})},
args: ["element"],
source: "installedOn: element\x0a\x09\x22This method is meant to be overriden in case a special treatment has to be realized on the element\x22\x0a\x09\x0a\x09\x22self extent: (self preferedExtentFor: element).\x22\x0a\x09\x22element extent: (element extent max: extent).\x22\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
category: 'drawing',
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isKindOf_(aShapeClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.ROShape)})},
args: ["aShapeClass"],
source: "isShapedAs: aShapeClass\x0a\x22\x09^ (self isKindOf: aShapeClass) or: [ self next isShapedAs: aShapeClass ]\x22\x0a\x09^ (self isKindOf: aShapeClass)",
messageSends: ["isKindOf:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROShape)})},
args: [],
source: "removeSVGElement\x0a\x09svgElement remove.",
messageSends: ["remove"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbColor",
category: 'accessing',
fn: function (){
var self=this;
var triplet;
return smalltalk.withContext(function($ctx1) { 
var $1;
triplet=_st(self["@color"])._rgbTriplet255();
$1=_st(_st(_st(_st(_st("rgb(".__comma(_st(_st(triplet)._first())._asString())).__comma(",")).__comma(_st(_st(triplet)._second())._asString())).__comma(",")).__comma(_st(_st(triplet)._third())._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbColor",{triplet:triplet},smalltalk.ROShape)})},
args: [],
source: "rgbColor\x0a\x09| triplet |\x0a\x09triplet := color rgbTriplet255.\x0a\x09^ 'rgb(',(triplet first  asString),',',(triplet second asString),',',(triplet third asString),')'.  \x0a\x0a\x09",
messageSends: ["rgbTriplet255", ",", "asString", "third", "second", "first"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._size_(_st(self._width()).__star(factor));
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{factor:factor},smalltalk.ROShape)})},
args: ["factor"],
source: "scale: factor\x0a\x09self size: self width * factor",
messageSends: ["size:", "*", "width"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
category: 'drawing',
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
args: ["aBlock"],
source: "shapeDetect: aBlock\x0a\x0a\x09(aBlock value: self) ifTrue: [ ^ self ].\x0a\x09self error: 'Not found'\x0a\x22\x09^ self next shapeDetect: aBlock\x22",
messageSends: ["ifTrue:", "value:", "error:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapesDo:",
category: 'drawing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapesDo:",{aBlock:aBlock},smalltalk.ROShape)})},
args: ["aBlock"],
source: "shapesDo: aBlock\x0a\x0a\x09^ aBlock value: self.\x0a\x22\x09^ self next shapesDo: aBlock\x22",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.ROShape)})},
args: [],
source: "show\x0a\x09svgElement show\x0a\x09",
messageSends: ["show"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(_st(value).__at(value));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{value:value},smalltalk.ROShape)})},
args: ["value"],
source: "size: value\x0a\x09self extent: value @ value",
messageSends: ["extent:", "@"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "svgElement",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgElement",{},smalltalk.ROShape)})},
args: [],
source: "svgElement\x0a\x09^ svgElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROShape)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09\x22Redraw svgElement with current attributes\x22\x0a\x09self subclassResponsibility\x0a\x09\x0a\x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROShape)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aNumberOrABlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@width"]=aNumberOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumberOrABlock:aNumberOrABlock},smalltalk.ROShape)});},
args: ["aNumberOrABlock"],
source: "width: aNumberOrABlock\x0a\x09width := aNumberOrABlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@width"])._roValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.ROShape)});},
args: ["anElement"],
source: "widthFor: anElement\x0a\x09^ width roValue: anElement",
messageSends: ["roValue:"],
referencedClasses: []
}),
smalltalk.ROShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._lightGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROShape.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color lightGray.",
messageSends: ["lightGray"],
referencedClasses: ["Color"]
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROShape.klass)});},
args: [],
source: "element\x0a\x09^ self new element",
messageSends: ["element", "new"],
referencedClasses: []
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ROElement())._on_(anObject)).__plus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.ROShape.klass)})},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ (ROElement on: anObject) + self",
messageSends: ["+", "on:"],
referencedClasses: ["ROElement"]
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'not yet classified',
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
args: ["collectionOfObjects"],
source: "elementsOn: collectionOfObjects\x0a\x09\x22Easy way to create element from a shape\x22\x0a\x09\x0a\x09^ collectionOfObjects collect: [ :object | self elementOn: object ] ",
messageSends: ["collect:", "elementOn:"],
referencedClasses: []
}),
smalltalk.ROShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
category: 'not yet classified',
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
args: ["element"],
source: "installedOn: element\x0a\x09^ self new installedOn: element; yourself",
messageSends: ["installedOn:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROShape.klass);


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, ['attachPoint', 'strokeWidth'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attachPoint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attachPoint",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "attachPoint\x0a\x09\x0a\x09^ attachPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint:",
category: 'not yet classified',
fn: function (attach){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachPoint"]=attach;
return self}, function($ctx1) {$ctx1.fill(self,"attachPoint:",{attach:attach},smalltalk.ROAbstractLineShape)})},
args: ["attach"],
source: "attachPoint: attach\x0a\x09\x0a\x09attachPoint := attach",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWidth",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "defaultWidth\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'not yet classified',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._endingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.ROAbstractLineShape)})},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09 ^ attachPoint endingPointOf: anEdge",
messageSends: ["endingPointOf:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $ROShorterDistanceAttachPoint(){return smalltalk.ROShorterDistanceAttachPoint||(typeof ROShorterDistanceAttachPoint=="undefined"?nil:ROShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractLineShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@attachPoint"]=_st($ROShorterDistanceAttachPoint())._instance();
self["@strokeWidth"]=self._defaultWidth();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09attachPoint := ROShorterDistanceAttachPoint instance.\x0a\x09strokeWidth := self defaultWidth.\x0a\x22\x09arrows := OrderedCollection new\x22",
messageSends: ["initialize", "instance", "defaultWidth"],
referencedClasses: ["ROShorterDistanceAttachPoint"]
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'not yet classified',
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._startingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.ROAbstractLineShape)})},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ attachPoint startingPointOf: anEdge\x0a\x09",
messageSends: ["startingPointOf:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strokeWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "width\x0a\x09^ strokeWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'not yet classified',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokeWidth"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},smalltalk.ROAbstractLineShape)})},
args: ["aNumber"],
source: "width: aNumber\x0a\x09strokeWidth := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.ROAbstractLineShape.klass)})},
args: [],
source: "defaultColor\x0a\x09^ Color black",
messageSends: ["black"],
referencedClasses: ["Color"]
}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
category: 'not yet classified',
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.ROEdge || ROEdge))._from_to_(el1,el2);
_st($2)._shape_(_st(self)._new());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
args: ["el1", "el2"],
source: "edgeFrom: el1 to: el2\x0a\x09^ (ROEdge from: el1 to: el2) shape: self new; yourself",
messageSends: ["shape:", "new", "from:to:", "yourself"],
referencedClasses: ["ROEdge"]
}),
smalltalk.ROAbstractLineShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFrom:to:",
category: 'not yet classified',
fn: function (el1, el2) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._edgeFrom_to_(el1,el2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementFrom:to:",{el1:el1,el2:el2},smalltalk.ROAbstractLineShape.klass)});},
args: ["el1", "el2"],
source: "elementFrom: el1 to: el2\x0a\x09^ self edgeFrom: el1 to: el2",
messageSends: ["edgeFrom:to:"],
referencedClasses: []
}),
smalltalk.ROAbstractLineShape.klass);


smalltalk.addClass('ROLine', smalltalk.ROAbstractLineShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "activateInteractionsOn:",
category: 'drawing',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"activateInteractionsOn:",{anElement:anElement},smalltalk.ROLine)})},
args: ["anElement"],
source: "activateInteractionsOn: anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
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
args: ["canvas", "anEdge"],
source: "initializeSVGElementOn: canvas for: anEdge\x0a\x09| x1 y1 x2 y2 |\x0a\x09x1 := anEdge from position x.\x0a\x09y1 := anEdge from position y.\x0a\x0a\x09x2 := anEdge to position x.\x0a\x09y2 := anEdge to position y.\x0a\x0a\x09svgElement := canvas path: 'M', x1,' ', y1, 'L', x2, ' ', y2 \x0a\x0a\x22\x09canvas path: 'M10 10L90 90'\x0a\x22",
messageSends: ["x", "position", "from", "y", "to", "path:", ","],
referencedClasses: []
}),
smalltalk.ROLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
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
args: ["canvas", "anEdge"],
source: "updateSVGElementOn: canvas for: anEdge\x0a\x09| maxArrowSize unit startingPoint endingPoint rawStartingPoint rawEndingPoint |\x0a\x09rawEndingPoint  := attachPoint startingPointOf: anEdge.\x0a\x09rawStartingPoint := attachPoint endingPointOf: anEdge.\x0a\x0a\x09(rawStartingPoint = rawEndingPoint)\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x0a\x22\x09Transcript show: 'x1 ', x,' y1', y, ' x2 ', z, ' y2 ', w, (String cr).\x22\x0a\x0a\x09svgElement attr: 'path' with: 'M', ( rawEndingPoint x asInteger),' ',  (rawEndingPoint y asInteger), 'L', ( rawStartingPoint x asInteger), ' ', ( rawStartingPoint y asInteger) .\x0a\x09svgElement attr: 'stroke-width' value: (self width).\x0a\x09svgElement attr: 'stroke' value: (self rgbColor).\x0a\x0a\x0a\x09\x0a\x22\x09x1 := anEdge from position x.\x0a\x09y1 := anEdge from position y.\x0a\x0a\x09x2 := anEdge to position x.\x0a\x09y2 := anEdge to position y.\x0a\x09\x0a\x09svgElement attr: 'path' with: 'M', x1,' ', y1, 'L', x2, ' ', y2 .\x22\x0a\x09\x0a\x09\x22We draw a line before each arrow\x22\x0a\x22\x09\x0a\x09arrows do: [ :arrow | \x0a\x09\x09| arr |\x0a\x09\x09arr := arrow drawOn: aCanvas for: anEdge line: self.\x0a\x09\x09aCanvas \x0a\x09\x09\x09line: rawStartingPoint \x0a\x09\x09\x09to: arr first \x0a\x09\x09\x09width: (self widthFor: anEdge) \x0a\x09\x09\x09color: (self colorFor: anEdge).\x0a\x09\x09rawStartingPoint := arr second.\x0a\x09\x09 ].\x0a\x22\x09\x0a\x09\x22We draw a line after the arrow\x22\x0a\x22\x09aCanvas line: rawStartingPoint to: rawEndingPoint width: (self widthFor: anEdge) color: (self colorFor: anEdge).\x22",
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:with:", ",", "asInteger", "y", "x", "attr:value:", "width", "rgbColor"],
referencedClasses: []
}),
smalltalk.ROLine);



smalltalk.addClass('ROAbstractPathShape', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "centeringPath:into:with:",
category: 'not yet classified',
fn: function (svgPath,svgRect,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgPath)._attr_value_("x",(0));
_st(svgPath)._attr_value_("y",(0));
return self}, function($ctx1) {$ctx1.fill(self,"centeringPath:into:with:",{svgPath:svgPath,svgRect:svgRect,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["svgPath", "svgRect", "anElement"],
source: "centeringPath: svgPath into: svgRect  with: anElement\x0a\x0a\x09svgPath attr: 'x' value: 0.\x0a\x09svgPath attr: 'y' value: 0.",
messageSends: ["attr:value:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "createSetWith:and:on:for:",
category: 'not yet classified',
fn: function (svgRect,svgPath,canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@svgElement"]=_st(canvas)._set();
$1=self["@svgElement"];
_st($1)._push_(svgRect);
$2=_st($1)._push_(svgPath);
_st(self["@svgElement"])._translate_y_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y());
return self}, function($ctx1) {$ctx1.fill(self,"createSetWith:and:on:for:",{svgRect:svgRect,svgPath:svgPath,canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["svgRect", "svgPath", "canvas", "anElement"],
source: "createSetWith: svgRect and: svgPath on: canvas for: anElement\x0a\x09svgElement := canvas  set.\x0a\x09svgElement push: svgRect; push: svgPath.\x0a\x09\x0a\x09\x22 enable translating \x22\x0a\x09svgElement translate:  (anElement position x) y: (anElement position y).",
messageSends: ["set", "push:", "translate:y:", "x", "position", "y"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainterOn:for:",
category: 'not yet classified',
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
args: ["canvas", "anElement"],
source: "initializeContainterOn: canvas for: anElement\x0a\x09| container |\x0a\x09container :=  canvas rect: 0\x0a\x09\x09\x09\x09y: 0 \x0a\x09\x09\x09\x09width: 1\x0a\x09\x09\x09\x09rect: 1.\x0a\x09container attr: 'fill' value: 'white'.\x09\x09\x09\x0a\x09container attr: 'stroke-width' value: 0. \x22 no border \x22\x0a\x09^ container",
messageSends: ["rect:y:width:rect:", "attr:value:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
var svgRect,svgPath;
return smalltalk.withContext(function($ctx1) { 
svgRect=self._initializeContainterOn_for_(canvas,anElement);
svgPath=self._initializePathOn_for_(canvas,anElement);
self._resizeContainer_for_with_(svgRect,svgPath,anElement);
self._centeringPath_into_with_(svgPath,svgRect,anElement);
self._createSetWith_and_on_for_(svgRect,svgPath,canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement,svgRect:svgRect,svgPath:svgPath},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09| svgRect svgPath |\x0a\x09\x0a\x09svgRect := self initializeContainterOn: canvas for: anElement.\x0a\x09svgPath := self initializePathOn: canvas for: anElement.\x0a\x09\x0a\x09self resizeContainer: svgRect for: svgPath with: anElement. \x0a\x09self centeringPath: svgPath into: svgRect with: anElement.\x0a\x09self createSetWith: svgRect and: svgPath on: canvas for: anElement.",
messageSends: ["initializeContainterOn:for:", "initializePathOn:for:", "resizeContainer:for:with:", "centeringPath:into:with:", "createSetWith:and:on:for:"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.ROAbstractPathShape)})},
args: [],
source: "padding\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSVGElement",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._clear();
return self}, function($ctx1) {$ctx1.fill(self,"removeSVGElement",{},smalltalk.ROAbstractPathShape)})},
args: [],
source: "removeSVGElement\x0a\x09svgElement clear.",
messageSends: ["clear"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainer:for:with:",
category: 'not yet classified',
fn: function (svgRect,svgPath,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:with:",{svgRect:svgRect,svgPath:svgPath,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["svgRect", "svgPath", "anElement"],
source: "resizeContainer: svgRect for: svgPath  with: anElement\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._transform_("T0,0");
_st(self["@svgElement"])._transform_(_st(_st("T".__comma(_st(_st(anElement)._position())._x())).__comma(",")).__comma(_st(_st(anElement)._position())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement transform: 'T0,0'.\x0a\x09svgElement transform: 'T',(anElement position x),',',(anElement position y).\x0a\x22\x0a\x09svgElement translate: 0 y: 0.\x0a\x09svgElement translate: (anElement position x) y: (anElement position y).\x0a\x22",
messageSends: ["transform:", ",", "y", "position", "x"],
referencedClasses: []
}),
smalltalk.ROAbstractPathShape);



smalltalk.addClass('ROImageShape', smalltalk.ROAbstractPathShape, ['url', 'imgExtent'], 'ARoassal');
smalltalk.ROImageShape.comment="Each ROImage is binded to a url to the image that cannot be changed. ";
smalltalk.addMethod(
smalltalk.method({
selector: "imageExtent",
category: 'initialize-release',
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
args: [],
source: "imageExtent\x0a\x09| myImg |\x0a\x09myImg := Image new.\x0a\x09myImg src: self url.\x0a\x09^ (myImg width)@(myImg height) ",
messageSends: ["new", "src:", "url", "@", "height", "width"],
referencedClasses: ["Image"]
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROImageShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@imgExtent"]=self._imageExtent();
self["@width"]=_st(self["@imgExtent"])._x();
self["@height"]=_st(self["@imgExtent"])._y();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROImageShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09\x22 Initialize default values \x22\x0a\x09imgExtent := (self imageExtent).\x0a\x09width := imgExtent x.\x0a\x09height := imgExtent y.",
messageSends: ["initialize", "imageExtent", "x", "y"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._image_x_y_width_height_(self._url(),_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self._width())._max_(_st(self._defaultExtent())._x()),_st(self._height())._max_(_st(self._defaultExtent())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROImageShape)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09^  canvas \x0a\x09\x09image: (self url)\x0a\x09\x09x: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09width: ((self width) max: (self defaultExtent x)) \x0a\x09\x09height: ((self height) max: (self defaultExtent y)) .",
messageSends: ["image:x:y:width:height:", "url", "x", "position", "y", "max:", "defaultExtent", "width", "height"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainer:for:with:",
category: 'not yet classified',
fn: function (svgRect,svgPath,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=svgRect;
_st($1)._attr_with_("width",_st(self._widthFor_(anElement))._max_(_st(self._defaultExtent())._x()));
$2=_st($1)._attr_with_("height",_st(self._heightFor_(anElement))._max_(_st(self._defaultExtent())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:with:",{svgRect:svgRect,svgPath:svgPath,anElement:anElement},smalltalk.ROImageShape)})},
args: ["svgRect", "svgPath", "anElement"],
source: "resizeContainer: svgRect for: svgPath  with: anElement\x0a\x09svgRect \x09\x09\x0a\x09\x09attr: 'width' with: ((self widthFor: anElement ) max: (self defaultExtent x));\x0a\x09\x09attr: 'height' with: ((self heightFor: anElement) max: (self defaultExtent y))",
messageSends: ["attr:with:", "max:", "x", "defaultExtent", "widthFor:", "y", "heightFor:"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'private',
fn: function (factor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._size_(_st(self._width()).__star(factor));
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{factor:factor},smalltalk.ROImageShape)})},
args: ["factor"],
source: "scale: factor\x0a\x09self size: self width * factor",
messageSends: ["size:", "*", "width"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__slash(_st(self["@imgExtent"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.ROImageShape)})},
args: [],
source: "scaleFactor\x0a\x09\x22self assert: (width / imgExtent ) = (height / imgExtent ).\x22\x0a\x0a\x09^ width / (imgExtent x)",
messageSends: ["/", "x"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROImageShape.superclass.fn.prototype._updateSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
_st(self["@svgElement"])._transform_("S".__comma(_st(self._scaleFactor())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROImageShape)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09super updateSVGElementOn: canvas for: anElement.\x0a\x09svgElement transform: 'S',(self scaleFactor asString).",
messageSends: ["updateSVGElementOn:for:", "transform:", ",", "asString", "scaleFactor"],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ROImageShape)})},
args: [],
source: "url\x0a\x09^ url",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROImageShape);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROImageShape)})},
args: ["aString"],
source: "url: aString\x0a\x09url := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROImageShape);


smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'not yet classified',
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
args: ["aString"],
source: "url: aString\x0a\x09^ self basicNew url: aString; initialize; yourself",
messageSends: ["url:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
smalltalk.ROImageShape.klass);


smalltalk.addClass('ROLabel', smalltalk.ROAbstractPathShape, ['text'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "centeringPath:into:with:",
category: 'not yet classified',
fn: function (svgPath,svgRect,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgPath)._attr_value_("x",_st(_st(_st(svgRect)._attr_("width")).__slash((2)))._asInteger());
_st(svgPath)._attr_value_("y",_st(_st(_st(svgRect)._attr_("height")).__slash((2)))._asInteger());
_st(svgPath)._attr_value_("text-anchor","middle");
return self}, function($ctx1) {$ctx1.fill(self,"centeringPath:into:with:",{svgPath:svgPath,svgRect:svgRect,anElement:anElement},smalltalk.ROLabel)})},
args: ["svgPath", "svgRect", "anElement"],
source: "centeringPath: svgPath into: svgRect  with: anElement\x0a\x09svgPath attr: 'x' value: ((svgRect attr: 'width') / 2) asInteger.\x0a\x09svgPath attr: 'y' value: ((svgRect attr: 'height') / 2) asInteger.\x0a\x09svgPath  attr: 'text-anchor' value: 'middle'.\x0a\x0a\x09",
messageSends: ["attr:value:", "asInteger", "/", "attr:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="model";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLabel)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09text := #model.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeContainterOn:for:",
category: 'not yet classified',
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
args: ["canvas", "anElement"],
source: "initializeContainterOn: canvas for: anElement\x0a\x09| container |\x0a\x09container := super initializeContainterOn: canvas for: anElement.\x0a\x09self setBoderTo: container.\x0a\x09^ container.",
messageSends: ["initializeContainterOn:for:", "setBoderTo:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._text_y_string_((0),(10),self._text());
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09^ canvas text: 0\x0a\x09\x09\x09y:10\x0a\x09\x09\x09string: (self text).\x0a\x09",
messageSends: ["text:y:string:", "text"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._text_(_st(_st(anElement)._model())._asString());
smalltalk.ROLabel.superclass.fn.prototype._initializeSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x22Paper.print(x, y, string, font, [size], [origin], [letter_spacing])\x0a\x09x - position of the text\x0a\x09y - position of the text\x0a\x09string - text to print\x0a\x09font - font object, see --> Paper.getFont(family, [weight], [style], [stretch])\x0a\x09size - size of the font, default is 16\x0a\x09origin - could be baseline' or 'middle' (default)\x0a\x09letter_spacing - number number in range -1..1, default is 0\x0a\x09Returns: object resulting path element, which consist of all letters\x0a   ----------- how to use getFont?????\x0a   \x0a   using paper.text() instead\x0a\x09\x22\x0a\x09\x0a\x09\x22example from: http://stackoverflow.com/questions/8771635/wrap-text-to-fit-into-a-rectangle-raphael\x22\x0a\x09\x09self text: anElement model asString.\x0a\x09\x09super initializeSVGElementOn: canvas for: anElement.",
messageSends: ["text:", "asString", "model", "initializeSVGElementOn:for:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "installedOn:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=(7).__plus((2).__star((5)));
self["@width"]=_st(_st(_st(_st(anElement)._model())._asString())._size()).__star((7));
_st(anElement)._extent_(_st(self["@width"]).__at(self["@height"]));
return self}, function($ctx1) {$ctx1.fill(self,"installedOn:",{anElement:anElement},smalltalk.ROLabel)})},
args: ["anElement"],
source: "installedOn: anElement\x0a\x09height := 7 + (2 * 5).\x0a\x09width := anElement model asString size * 7.\x0a\x09\x0a\x09\x22 Change NullShape extent\x22\x0a\x09anElement extent: width@height.",
messageSends: ["+", "*", "size", "asString", "model", "extent:", "@"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.ROLabel)})},
args: [],
source: "padding\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainer:for:with:",
category: 'not yet classified',
fn: function (svgRect,svgPath,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgRect)._attr_value_("width",self._width());
_st(svgRect)._attr_value_("height",_st(self._textHeight()).__plus(_st(self._padding()).__star((2))));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:with:",{svgRect:svgRect,svgPath:svgPath,anElement:anElement},smalltalk.ROLabel)})},
args: ["svgRect", "svgPath", "anElement"],
source: "resizeContainer: svgRect for: svgPath  with: anElement\x0a\x09svgRect attr: 'width'  value: (self width).\x0a\x09svgRect attr: 'height' value: self textHeight + (self padding * 2).",
messageSends: ["attr:value:", "width", "+", "*", "padding", "textHeight"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"]).__slash(_st(self["@svgElement"])._attr_("width"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.ROLabel)})},
args: [],
source: "scaleFactor\x0a\x09^ width/ (svgElement attr: 'width').",
messageSends: ["/", "attr:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "setBoderTo:",
category: 'not yet classified',
fn: function (container){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(container)._attr_value_("stroke","lightGray");
_st(container)._attr_value_("stroke-width",(0));
return self}, function($ctx1) {$ctx1.fill(self,"setBoderTo:",{container:container},smalltalk.ROLabel)})},
args: ["container"],
source: "setBoderTo: container\x0a\x09container attr: 'stroke' value: 'lightGray'.\x0a\x09container attr: 'stroke-width' value: 0.",
messageSends: ["attr:value:"],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ROLabel)})},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{anObject:anObject},smalltalk.ROLabel)})},
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textHeight",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (8);
}, function($ctx1) {$ctx1.fill(self,"textHeight",{},smalltalk.ROLabel)})},
args: [],
source: "textHeight \x0a\x09\x22 Measured empirically. It's ugly, I know\x22\x0a\x09^  8",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel.superclass.fn.prototype._updateSVGElementOn_for_.apply(_st(self), [canvas,anElement]);
_st(self["@svgElement"])._transform_("S".__comma(_st(self._scaleFactor())._asString()));
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROLabel)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09super updateSVGElementOn: canvas for: anElement.\x0a\x09svgElement transform: 'S',(self scaleFactor asString)",
messageSends: ["updateSVGElementOn:for:", "transform:", ",", "asString", "scaleFactor"],
referencedClasses: []
}),
smalltalk.ROLabel);


smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"text:",{aBlock:aBlock},smalltalk.ROLabel.klass)})},
args: ["aBlock"],
source: "text: aBlock\x0a\x09^ self new text: aBlock",
messageSends: ["text:", "new"],
referencedClasses: []
}),
smalltalk.ROLabel.klass);


smalltalk.addClass('ROSVGPath', smalltalk.ROAbstractPathShape, ['path', 'lines', 'borderWidth', 'borderColor', 'setToAdjustElement', 'svg', 'zoom'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "adjustedElement",
category: 'instance creation',
fn: function (){
var self=this;
var element,topLeft;
return smalltalk.withContext(function($ctx1) { 
var $1;
element=smalltalk.ROSVGPath.superclass.fn.prototype._element.apply(_st(self), []);
topLeft=_st(self._encompassingSVGBounds())._topLeft();
_st(element)._translateBy_(topLeft);
self._offsetAllLinesBy_(topLeft);
$1=element;
return $1;
}, function($ctx1) {$ctx1.fill(self,"adjustedElement",{element:element,topLeft:topLeft},smalltalk.ROSVGPath)})},
args: [],
source: "adjustedElement\x0a\x09\x22Return an element with myself as shape. The element has the position of the top left position of the SVG graph\x22\x0a\x09| element topLeft |\x0a\x09element := super element.\x0a\x09topLeft := self encompassingSVGBounds topLeft.\x0a\x09element translateBy: topLeft. \x0a\x09\x0a\x09self offsetAllLinesBy: topLeft.\x0a\x09^ element",
messageSends: ["element", "topLeft", "encompassingSVGBounds", "translateBy:", "offsetAllLinesBy:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROSVGPath)})},
args: [],
source: "borderColor\x0a\x09^ borderColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'accessing',
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROSVGPath)})},
args: ["aBlockOrSymbolOrObject"],
source: "borderColor: aBlockOrSymbolOrObject\x0a\x09borderColor := aBlockOrSymbolOrObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROSVGPath)})},
args: [],
source: "borderWidth\x0a\x09^ borderWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{anInteger:anInteger},smalltalk.ROSVGPath)})},
args: ["anInteger"],
source: "borderWidth: anInteger\x0a\x09borderWidth := anInteger.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomRightFromSVG",
category: 'as yet unclassified',
fn: function (){
var self=this;
var bottomRight;
function $SmallInteger(){return smalltalk.SmallInteger||(typeof SmallInteger=="undefined"?nil:SmallInteger)}
return smalltalk.withContext(function($ctx1) { 
var $1;
bottomRight=_st(_st($SmallInteger())._minVal()).__at(_st($SmallInteger())._minVal());
_st(self._lines())._do_((function(lineAsAssoc){
return smalltalk.withContext(function($ctx2) {
bottomRight=_st(bottomRight)._max_(_st(_st(lineAsAssoc)._key())._max_(_st(lineAsAssoc)._value()));
return bottomRight;
}, function($ctx2) {$ctx2.fillBlock({lineAsAssoc:lineAsAssoc},$ctx1)})}));
$1=bottomRight;
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomRightFromSVG",{bottomRight:bottomRight},smalltalk.ROSVGPath)})},
args: [],
source: "bottomRightFromSVG\x0a\x09| bottomRight |\x0a\x09bottomRight := SmallInteger minVal @ SmallInteger minVal.\x0a\x09self lines do: [ :lineAsAssoc | bottomRight := bottomRight max: (lineAsAssoc key max: lineAsAssoc value) ].\x0a\x09^ bottomRight",
messageSends: ["@", "minVal", "do:", "max:", "value", "key", "lines"],
referencedClasses: ["SmallInteger"]
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._borderColor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.ROSVGPath)})},
args: [],
source: "color\x0a\x09^ self borderColor",
messageSends: ["borderColor"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._borderColor_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROSVGPath)})},
args: ["aColor"],
source: "color: aColor\x0a\x09^ self borderColor: aColor",
messageSends: ["borderColor:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnOLD:for:",
category: 'rendering',
fn: function (aCanvas,aROElement){
var self=this;
var b,w,bc,c;
return smalltalk.withContext(function($ctx1) { 
b=self._absoluteBoundsFor_(aROElement);
w=_st(self["@borderWidth"])._roValue_(aROElement);
bc=_st(self["@borderColor"])._roValue_(aROElement);
c=_st(self["@color"])._roValue_(aROElement);
_st(self._lines())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(aCanvas)._line_to_width_color_(_st(_st(assoc)._key()).__plus(_st(b)._topLeft()),_st(_st(assoc)._value()).__plus(_st(b)._topLeft()),w,bc);
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOnOLD:for:",{aCanvas:aCanvas,aROElement:aROElement,b:b,w:w,bc:bc,c:c},smalltalk.ROSVGPath)})},
args: ["aCanvas", "aROElement"],
source: "drawOnOLD: aCanvas for: aROElement\x0a\x09| b w bc c  |\x0a\x09b := self absoluteBoundsFor: aROElement.\x0a\x09w := borderWidth roValue: aROElement.\x0a\x09bc := borderColor roValue: aROElement.\x0a\x09c := color roValue: aROElement.\x0a\x0a\x09\x22athensCanvas := aCanvas canvas.\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09\x09athensCanvas pathTransform scaleBy: zoom.\x0a\x09\x09\x09svg renderOn: athensCanvas viewportExtent: b extent.\x0a\x09\x09]\x22\x0a\x09\x0a\x09self lines do: [ :assoc |\x0a\x09\x09aCanvas \x0a\x09\x09\x09line: assoc key + b topLeft \x0a\x09\x09\x09to: assoc value + b topLeft \x0a\x09\x09\x09width: w \x0a\x09\x09\x09color: bc ]",
messageSends: ["absoluteBoundsFor:", "roValue:", "do:", "line:to:width:color:", "+", "topLeft", "key", "value", "lines"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'instance creation',
fn: function (){
var self=this;
var element,topLeft;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@setToAdjustElement"];
if(! smalltalk.assert($1)){
$2=smalltalk.ROSVGPath.superclass.fn.prototype._element.apply(_st(self), []);
return $2;
};
element=smalltalk.ROSVGPath.superclass.fn.prototype._element.apply(_st(self), []);
topLeft=_st(self._encompassingSVGBounds())._topLeft();
_st(element)._translateBy_(topLeft);
self._offsetAllLinesBy_(topLeft);
$3=element;
return $3;
}, function($ctx1) {$ctx1.fill(self,"element",{element:element,topLeft:topLeft},smalltalk.ROSVGPath)})},
args: [],
source: "element\x0a\x09\x22Return an element with myself as shape. The element has the position of the top left position of the SVG graph\x22\x0a\x09| element topLeft |\x0a\x09setToAdjustElement ifFalse: [ ^ super element ].\x0a\x09\x0a\x09element := super element.\x0a\x09topLeft := self encompassingSVGBounds topLeft.\x0a\x09element translateBy: topLeft. \x0a\x09\x0a\x09self offsetAllLinesBy: topLeft.\x0a\x09^ element",
messageSends: ["ifFalse:", "element", "topLeft", "encompassingSVGBounds", "translateBy:", "offsetAllLinesBy:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var element,topLeft;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@setToAdjustElement"];
if(! smalltalk.assert($1)){
$2=smalltalk.ROSVGPath.superclass.fn.prototype._elementOn_.apply(_st(self), [anObject]);
return $2;
};
element=smalltalk.ROSVGPath.superclass.fn.prototype._elementOn_.apply(_st(self), [anObject]);
topLeft=_st(self._encompassingSVGBounds())._topLeft();
_st(element)._translateBy_(topLeft);
self._offsetAllLinesBy_(topLeft);
$3=element;
return $3;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject,element:element,topLeft:topLeft},smalltalk.ROSVGPath)})},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09\x22Return an element with myself as shape. The element has the position of the top left position of the SVG graph\x22\x0a\x09| element topLeft |\x0a\x09setToAdjustElement ifFalse: [ ^ super elementOn: anObject ].\x0a\x09\x0a\x09element := super elementOn: anObject.\x0a\x09topLeft := self encompassingSVGBounds topLeft.\x0a\x09element translateBy: topLeft. \x0a\x09\x0a\x09self offsetAllLinesBy: topLeft.\x0a\x09^ element",
messageSends: ["ifFalse:", "elementOn:", "topLeft", "encompassingSVGBounds", "translateBy:", "offsetAllLinesBy:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingSVGBounds",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._topLeftFromSVG())._corner_(self._bottomRightFromSVG());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingSVGBounds",{},smalltalk.ROSVGPath)})},
args: [],
source: "encompassingSVGBounds\x0a\x09^ self topLeftFromSVG corner: self bottomRightFromSVG",
messageSends: ["corner:", "bottomRightFromSVG", "topLeftFromSVG"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.ROSVGPath.superclass.fn.prototype._extentFor_.apply(_st(self), [element]))._max_(self._preferedExtentFor_(element));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.ROSVGPath)})},
args: ["element"],
source: "extentFor: element\x0a\x09 ^ (super extentFor: element) max: (self preferedExtentFor: element)",
messageSends: ["max:", "preferedExtentFor:", "extentFor:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROSVGPath.superclass.fn.prototype._initialize.apply(_st(self), []);
self._path_("");
self["@borderWidth"]=(1);
self["@borderColor"]=_st($Color())._gray();
self["@setToAdjustElement"]=false;
self["@zoom"]=(1);
self["@height"]=(20);
self["@width"]=self["@height"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROSVGPath)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self path: ''.\x0a\x09borderWidth := 1. \x0a\x09borderColor := Color gray.\x0a\x09setToAdjustElement := false.\x0a\x09zoom := 1.\x0a\x09\x0a\x09\x22 added for Amber version \x22\x0a\x09width := height := 20.",
messageSends: ["initialize", "path:", "gray"],
referencedClasses: ["Color"]
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'accessing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._path_(self["@path"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROSVGPath)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09^ canvas path: path",
messageSends: ["path:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "lines",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@lines"])._isNil();
if(! smalltalk.assert($1)){
$2=self["@lines"];
return $2;
};
self["@lines"]=self._processPath();
$3=self["@lines"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"lines",{},smalltalk.ROSVGPath)})},
args: [],
source: "lines\x0a\x09lines isNil ifFalse: [ ^ lines ].\x0a\x09lines := self processPath.\x0a\x09^ lines",
messageSends: ["ifFalse:", "isNil", "processPath"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfLines",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._lines())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfLines",{},smalltalk.ROSVGPath)})},
args: [],
source: "numberOfLines\x0a\x09^ self lines size",
messageSends: ["size", "lines"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "offsetAllLinesBy:",
category: 'utility',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lines"]=_st(self._lines())._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(assoc)._key()).__minus(aPoint)).__minus_gt(_st(_st(assoc)._value()).__minus(aPoint));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"offsetAllLinesBy:",{aPoint:aPoint},smalltalk.ROSVGPath)})},
args: ["aPoint"],
source: "offsetAllLinesBy: aPoint\x0a\x09lines := self lines collect: [ :assoc | (assoc key - aPoint) -> (assoc value - aPoint) ]",
messageSends: ["collect:", "->", "-", "value", "key", "lines"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'accessing',
fn: function (aPathAsString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aPathAsString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aPathAsString:aPathAsString},smalltalk.ROSVGPath)})},
args: ["aPathAsString"],
source: "path: aPathAsString\x0a\x09\x22Example of SVG path may be found on http://www.w3.org/TR/SVG/paths.html#PathData\x22\x0a\x09path := aPathAsString.\x0a\x09\x0a\x22\x09svg := ASVGRoot new.\x0a\x09svg addShape: (ASPath new d: aPathAsString).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "preferedExtentFor:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@setToAdjustElement"];
if(smalltalk.assert($2)){
$1=_st(self._bottomRightFromSVG()).__minus(self._topLeftFromSVG());
} else {
$1=self._bottomRightFromSVG();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"preferedExtentFor:",{element:element},smalltalk.ROSVGPath)})},
args: ["element"],
source: "preferedExtentFor: element\x0a\x09^ setToAdjustElement  \x0a\x09\x09ifTrue: [ self bottomRightFromSVG - self topLeftFromSVG ]\x0a\x09\x09ifFalse: [ self bottomRightFromSVG ]",
messageSends: ["ifTrue:ifFalse:", "-", "topLeftFromSVG", "bottomRightFromSVG"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "processPath",
category: 'processing',
fn: function (){
var self=this;
var p,initialPoint,answer,tokens,stream,token,t,pathWithSpaceBeforeMinus;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ReadStream(){return smalltalk.ReadStream||(typeof ReadStream=="undefined"?nil:ReadStream)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
p=(0).__at((0));
initialPoint=nil;
answer=_st($OrderedCollection())._new();
pathWithSpaceBeforeMinus=_st(self["@path"])._copyReplaceAll_with_asTokens_("-"," -",false);
tokens=_st(pathWithSpaceBeforeMinus)._findTokens_keep_("MmLlZz, ","MmLlZz");
stream=_st($ReadStream())._on_(tokens);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(stream)._atEnd();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
token=_st(stream)._next();
token;
$1=_st(token).__eq("M");
if(smalltalk.assert($1)){
p=_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next()));
p;
initialPoint=nil;
initialPoint;
};
$2=_st(token).__eq("m");
if(smalltalk.assert($2)){
p=_st(p).__plus(_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next())));
p;
initialPoint=nil;
initialPoint;
};
$3=_st(_st(token).__eq("Z"))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(token).__eq("z");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($3)){
_st(answer)._add_(_st(p).__minus_gt(initialPoint));
initialPoint=nil;
initialPoint;
};
$4=_st(token).__eq("L");
if(smalltalk.assert($4)){
t=_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next()));
t;
_st(answer)._add_(_st(p).__minus_gt(t));
p=t;
p;
};
$5=_st(token).__eq("l");
if(smalltalk.assert($5)){
t=_st(p).__plus(_st(_st($Float())._readFrom_(_st(stream)._next())).__at(_st($Float())._readFrom_(_st(stream)._next())));
t;
_st(answer)._add_(_st(p).__minus_gt(t));
p=t;
p;
};
$6=initialPoint;
if(($receiver = $6) == nil || $receiver == undefined){
initialPoint=p;
return initialPoint;
} else {
return $6;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(answer)._asArray();
return $7;
}, function($ctx1) {$ctx1.fill(self,"processPath",{p:p,initialPoint:initialPoint,answer:answer,tokens:tokens,stream:stream,token:token,t:t,pathWithSpaceBeforeMinus:pathWithSpaceBeforeMinus},smalltalk.ROSVGPath)})},
args: [],
source: "processPath\x0a\x09\x22This method parse the path\x22\x0a\x09\x22\x0a\x09A complete description may be found on http://www.w3.org/TR/SVG/paths.html#PathData\x0a\x09So far, we only consider the following SVG tokens:\x0a\x09\x0a\x09M = Move to - absolute\x0a\x09m = Move to - relative\x0a\x09\x0a\x09Z or z = Close path\x0a\x09\x0a\x09L = Line to - absolute\x0a\x09l = Line to - relative\x0a\x09\x0a\x09The description of SVG path, says that M and m may accept more than one coordinates. In practices, this is rarely the case. \x09\x0a\x09\x22\x0a\x09| p initialPoint answer tokens stream token t pathWithSpaceBeforeMinus |\x0a\x09p := 0 @ 0.\x0a\x09initialPoint := nil.\x0a\x09answer := OrderedCollection new.\x0a\x09\x0a\x09pathWithSpaceBeforeMinus := path copyReplaceAll: '-' with: ' -' asTokens: false.\x0a\x09tokens := pathWithSpaceBeforeMinus findTokens: 'MmLlZz, ' keep: 'MmLlZz'.\x0a\x09stream := ReadStream on: tokens.\x0a\x09[ stream atEnd ] whileFalse: [ \x0a\x09\x09token := stream next.\x0a\x09\x09token = 'M' ifTrue: [ p := (Float readFrom: stream next) @ (Float readFrom: stream next). initialPoint := nil  ].\x0a\x09\x09token = 'm' ifTrue: [ p := p + ((Float readFrom: stream next) @ (Float readFrom: stream next)). initialPoint := nil  ].\x0a\x0a\x09\x09(token = 'Z' or: [ token = 'z' ]) ifTrue: [ answer add: p -> initialPoint. initialPoint := nil ].\x0a\x0a\x09\x09token = 'L' ifTrue: [ t := (Float readFrom: stream next) @ (Float readFrom: stream next). answer add: p -> t. p := t ].\x0a\x09\x09token = 'l' ifTrue: [ t := p + ((Float readFrom: stream next) @ (Float readFrom: stream next)). answer add: p -> t. p := t ].\x0a\x09\x09\x0a\x09\x09initialPoint ifNil: [ initialPoint := p ].\x0a \x09].\x0a\x09^ answer asArray",
messageSends: ["@", "new", "copyReplaceAll:with:asTokens:", "findTokens:keep:", "on:", "whileFalse:", "next", "ifTrue:", "readFrom:", "=", "+", "add:", "->", "or:", "ifNil:", "atEnd", "asArray"],
referencedClasses: ["OrderedCollection", "ReadStream", "Float"]
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainer:for:with:",
category: 'as yet unclassified',
fn: function (svgRect,svgPath,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgRect)._attr_value_("width",(30));
_st(svgRect)._attr_value_("height",(33));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:with:",{svgRect:svgRect,svgPath:svgPath,anElement:anElement},smalltalk.ROSVGPath)})},
args: ["svgRect", "svgPath", "anElement"],
source: "resizeContainer: svgRect for: svgPath  with: anElement\x0a\x09svgRect attr: 'width'  value: 30.\x0a\x09svgRect attr: 'height' value: 33.",
messageSends: ["attr:value:"],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "setToAdjustElement",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@setToAdjustElement"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"setToAdjustElement",{},smalltalk.ROSVGPath)})},
args: [],
source: "setToAdjustElement\x0a\x09setToAdjustElement := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeftFromSVG",
category: 'as yet unclassified',
fn: function (){
var self=this;
var topLeft;
function $SmallInteger(){return smalltalk.SmallInteger||(typeof SmallInteger=="undefined"?nil:SmallInteger)}
return smalltalk.withContext(function($ctx1) { 
var $1;
topLeft=_st(_st($SmallInteger())._maxVal()).__at(_st($SmallInteger())._maxVal());
_st(self._lines())._do_((function(lineAsAssoc){
return smalltalk.withContext(function($ctx2) {
topLeft=_st(topLeft)._min_(_st(_st(lineAsAssoc)._key())._min_(_st(lineAsAssoc)._value()));
return topLeft;
}, function($ctx2) {$ctx2.fillBlock({lineAsAssoc:lineAsAssoc},$ctx1)})}));
$1=topLeft;
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeftFromSVG",{topLeft:topLeft},smalltalk.ROSVGPath)})},
args: [],
source: "topLeftFromSVG\x0a\x09| topLeft |\x0a\x09topLeft := SmallInteger maxVal @ SmallInteger maxVal.\x0a\x09self lines do: [ :lineAsAssoc | topLeft := topLeft min: (lineAsAssoc key min: lineAsAssoc value) ].\x0a\x09^ topLeft",
messageSends: ["@", "maxVal", "do:", "min:", "value", "key", "lines"],
referencedClasses: ["SmallInteger"]
}),
smalltalk.ROSVGPath);


smalltalk.addMethod(
smalltalk.method({
selector: "Afghanistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l2.832,1.030l2.059,-0.257l0.517,-1.288l2.058,-0.386l1.546,-0.772l0.515,-2.188l2.317,-0.516l0.387,-1.030l1.285,0.774l0.902,0.128l1.416,0l2.059,0.515l0.773,0.385l2.059,-0.900l0.901,0.515l0.773,-1.287l1.674,0.128l0.386,-0.387l0.256,-1.157l1.160,-0.903l1.543,0.645l-0.384,0.772l0.901,0.129l-0.259,2.317l1.030,0.900l0.904,-0.643l1.285,-0.257l1.674,-1.159l1.802,0.129l2.832,0l0.387,0.773l-1.545,0.385l-1.416,0.516l-3.090,0.256l-2.833,0.517l-1.545,1.287l0.645,1.029l0.257,1.416l-1.287,1.159l0.129,1.029l-0.773,0.902l-2.575,0l1.030,1.673l-1.673,0.772l-1.158,1.545l0.129,1.674l-1.031,0.772l-1.029,-0.257l-2.061,0.386l-0.257,0.644l-2.058,0l-1.417,1.544l-0.129,2.317l-3.476,1.159l-1.931,-0.257l-0.514,0.643l-1.674,-0.386l-2.704,0.386l-4.504,-1.415l2.445,-2.447l-0.129,-1.673l-2.060,-0.515l-0.256,-1.674l-0.902,-2.188l1.158,-1.416l-1.158,-0.386l0.773,-1.930l-1.029,3.477z";
}, function($ctx1) {$ctx1.fill(self,"Afghanistan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Afghanistan\x0a\x09^ 'M630.069,130.876l2.832,1.030l2.059,-0.257l0.517,-1.288l2.058,-0.386l1.546,-0.772l0.515,-2.188l2.317,-0.516l0.387,-1.030l1.285,0.774l0.902,0.128l1.416,0l2.059,0.515l0.773,0.385l2.059,-0.900l0.901,0.515l0.773,-1.287l1.674,0.128l0.386,-0.387l0.256,-1.157l1.160,-0.903l1.543,0.645l-0.384,0.772l0.901,0.129l-0.259,2.317l1.030,0.900l0.904,-0.643l1.285,-0.257l1.674,-1.159l1.802,0.129l2.832,0l0.387,0.773l-1.545,0.385l-1.416,0.516l-3.090,0.256l-2.833,0.517l-1.545,1.287l0.645,1.029l0.257,1.416l-1.287,1.159l0.129,1.029l-0.773,0.902l-2.575,0l1.030,1.673l-1.673,0.772l-1.158,1.545l0.129,1.674l-1.031,0.772l-1.029,-0.257l-2.061,0.386l-0.257,0.644l-2.058,0l-1.417,1.544l-0.129,2.317l-3.476,1.159l-1.931,-0.257l-0.514,0.643l-1.674,-0.386l-2.704,0.386l-4.504,-1.415l2.445,-2.447l-0.129,-1.673l-2.060,-0.515l-0.256,-1.674l-0.902,-2.188l1.158,-1.416l-1.158,-0.386l0.773,-1.930l-1.029,3.477z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Albania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l-0.257,0.900l0.385,1.160l1.029,0.643l0,0.644l-0.901,0.386l-0.128,0.901l-1.288,1.287l-0.386,-0.128l-0.127,-0.644l-1.417,-0.900l-0.259,-1.288l0.259,-1.803l0.256,-0.901l-0.384,-0.386l-0.258,-0.901l1.287,-1.288l0.129,0.516l0.771,-0.258l0.516,0.773l0.643,0.257l-0.130,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Albania",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Albania\x0a\x09^ 'M520.651,114.27l-0.257,0.900l0.385,1.160l1.029,0.643l0,0.644l-0.901,0.386l-0.128,0.901l-1.288,1.287l-0.386,-0.128l-0.127,-0.644l-1.417,-0.900l-0.259,-1.288l0.259,-1.803l0.256,-0.901l-0.384,-0.386l-0.258,-0.901l1.287,-1.288l0.129,0.516l0.771,-0.258l0.516,0.773l0.643,0.257l-0.130,-1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Algeria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z";
}, function($ctx1) {$ctx1.fill(self,"Algeria",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Algeria\x0a\x09^ 'M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Angola",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.994,242.615l-0.643,-2.060l1.030,-1.159l0.900,-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773,-0.386zM496.836,273.64l-0.257,-1.804l0.385,-2.317l0.900,-2.445l0.130,-1.158l0.901,-2.447l0.643,-1.157l1.545,-1.674l0.902,-1.288l0.257,-1.931l-0.129,-1.544l-0.771,-0.902l-0.775,-1.673l-0.642,-1.674l0.129,-0.515l0.772,-1.029l-0.772,-2.704l-0.516,-1.802l-1.414,-1.674l0.257,-0.515l1.157,-0.387l0.774,0.131l0.900,-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801,-0.128l0.900,-0.387l1.418,0.387l0.514,-0.772l0.644,-1.545l1.673,-0.128l0.128,-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645,-0.131l1.158,0l1.674,-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536,-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566,-0.385l-1.801,-1.287l-10.944,0.128l-0.384,0.128l-1.674,-1.159l-1.672,-0.128l-1.674,0.515l1.288,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Angola",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Angola\x0a\x09^ 'M497.994,242.615l-0.643,-2.060l1.030,-1.159l0.900,-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773,-0.386zM496.836,273.64l-0.257,-1.804l0.385,-2.317l0.900,-2.445l0.130,-1.158l0.901,-2.447l0.643,-1.157l1.545,-1.674l0.902,-1.288l0.257,-1.931l-0.129,-1.544l-0.771,-0.902l-0.775,-1.673l-0.642,-1.674l0.129,-0.515l0.772,-1.029l-0.772,-2.704l-0.516,-1.802l-1.414,-1.674l0.257,-0.515l1.157,-0.387l0.774,0.131l0.900,-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801,-0.128l0.900,-0.387l1.418,0.387l0.514,-0.772l0.644,-1.545l1.673,-0.128l0.128,-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645,-0.131l1.158,0l1.674,-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536,-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566,-0.385l-1.801,-1.287l-10.944,0.128l-0.384,0.128l-1.674,-1.159l-1.672,-0.128l-1.674,0.515l1.288,-0.516z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Argentina",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.448,295.781l1.288,1.544l0,2.189l-2.319,1.416l-1.801,1.158l-2.961,2.576l-3.605,3.732l-0.772,2.189l-0.644,2.702l0,2.705l-0.643,0.643l-0.129,1.674l-0.257,1.417l3.475,2.317l-0.387,1.802l1.675,1.287l-0.129,1.288l-2.574,3.475l-3.991,1.417l-5.406,0.513l-2.961,-0.257l0.514,1.674l-0.514,1.931l0.514,1.415l-1.673,0.902l-2.703,0.385l-2.575,-1.028l-1.029,0.770l0.386,2.705l1.801,0.772l1.417,-0.901l0.901,1.416l-2.575,0.902l-2.188,1.673l-0.386,2.705l-0.643,1.414l-2.448,0l-2.188,1.416l-0.772,1.932l2.704,2.059l2.574,0.516l-0.901,2.445l-3.218,1.545l-1.803,3.090l-2.445,1.030l-1.031,1.287l0.774,2.832l1.802,1.543l-1.030,-0.127l-2.574,-0.387l-6.436,-0.385l-1.160,-1.545l0,-2.060l-1.801,0.129l-0.902,-0.902l-0.258,-2.831l2.060,-1.288l0.901,-1.674l-0.386,-1.288l1.546,-2.316l0.900,-3.605l-0.257,-1.545l1.158,-0.515l-0.258,-1.030l-1.287,-0.514l0.901,-1.158l-1.157,-1.030l-0.645,-3.089l1.030,-0.516l-0.385,-3.347l0.513,-2.703l0.773,-2.447l1.673,-1.030l-0.900,-2.574l0,-2.446l2.060,-1.802l0,-2.189l1.415,-2.702l0.129,-2.447l-0.772,-0.514l-1.287,-4.636l1.672,-2.831l-0.257,-2.575l1.030,-2.446l1.802,-2.574l1.802,-1.673l-0.772,-1.031l0.515,-0.900l0,-4.378l2.960,-1.415l0.902,-2.704l-0.386,-0.772l2.316,-2.447l3.477,0.644l1.544,2.060l1.030,-2.187l3.089,0.127l0.515,0.515l4.892,4.377l2.188,0.387l3.348,2.059l2.703,1.030l0.386,1.157l-2.574,4.121l2.702,0.772l2.961,0.387l2.189,-0.387l2.446,-2.059l0.386,-2.445l-1.416,0.516zM282.761,371.99l3.475,1.674l3.733,0.642l-1.159,1.417l-2.574,0.130l-1.416,-1.031l-1.546,0l-2.960,0l0.129,-5.923l0.901,1.160l-1.417,-1.931z";
}, function($ctx1) {$ctx1.fill(self,"Argentina",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Argentina\x0a\x09^ 'M319.448,295.781l1.288,1.544l0,2.189l-2.319,1.416l-1.801,1.158l-2.961,2.576l-3.605,3.732l-0.772,2.189l-0.644,2.702l0,2.705l-0.643,0.643l-0.129,1.674l-0.257,1.417l3.475,2.317l-0.387,1.802l1.675,1.287l-0.129,1.288l-2.574,3.475l-3.991,1.417l-5.406,0.513l-2.961,-0.257l0.514,1.674l-0.514,1.931l0.514,1.415l-1.673,0.902l-2.703,0.385l-2.575,-1.028l-1.029,0.770l0.386,2.705l1.801,0.772l1.417,-0.901l0.901,1.416l-2.575,0.902l-2.188,1.673l-0.386,2.705l-0.643,1.414l-2.448,0l-2.188,1.416l-0.772,1.932l2.704,2.059l2.574,0.516l-0.901,2.445l-3.218,1.545l-1.803,3.090l-2.445,1.030l-1.031,1.287l0.774,2.832l1.802,1.543l-1.030,-0.127l-2.574,-0.387l-6.436,-0.385l-1.160,-1.545l0,-2.060l-1.801,0.129l-0.902,-0.902l-0.258,-2.831l2.060,-1.288l0.901,-1.674l-0.386,-1.288l1.546,-2.316l0.900,-3.605l-0.257,-1.545l1.158,-0.515l-0.258,-1.030l-1.287,-0.514l0.901,-1.158l-1.157,-1.030l-0.645,-3.089l1.030,-0.516l-0.385,-3.347l0.513,-2.703l0.773,-2.447l1.673,-1.030l-0.900,-2.574l0,-2.446l2.060,-1.802l0,-2.189l1.415,-2.702l0.129,-2.447l-0.772,-0.514l-1.287,-4.636l1.672,-2.831l-0.257,-2.575l1.030,-2.446l1.802,-2.574l1.802,-1.673l-0.772,-1.031l0.515,-0.900l0,-4.378l2.960,-1.415l0.902,-2.704l-0.386,-0.772l2.316,-2.447l3.477,0.644l1.544,2.060l1.030,-2.187l3.089,0.127l0.515,0.515l4.892,4.377l2.188,0.387l3.348,2.059l2.703,1.030l0.386,1.157l-2.574,4.121l2.702,0.772l2.961,0.387l2.189,-0.387l2.446,-2.059l0.386,-2.445l-1.416,0.516zM282.761,371.99l3.475,1.674l3.733,0.642l-1.159,1.417l-2.574,0.130l-1.416,-1.031l-1.546,0l-2.960,0l0.129,-5.923l0.901,1.160l-1.417,-1.931z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Armenia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M582.697,116.33l3.605,-0.515l0.642,0.772l1.032,0.386l-0.516,0.773l1.416,0.900l-0.772,0.902l1.159,0.643l1.158,0.516l0.129,1.801l-1.029,0.129l-1.032,-1.544l0,-0.515l-1.287,0.129l-0.771,-0.772l-0.516,0l-1.029,-0.773l-2.059,-0.643l0.256,-1.288l0.386,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Armenia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Armenia\x0a\x09^ 'M582.697,116.33l3.605,-0.515l0.642,0.772l1.032,0.386l-0.516,0.773l1.416,0.900l-0.772,0.902l1.159,0.643l1.158,0.516l0.129,1.801l-1.029,0.129l-1.032,-1.544l0,-0.515l-1.287,0.129l-0.771,-0.772l-0.516,0l-1.029,-0.773l-2.059,-0.643l0.256,-1.288l0.386,0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Australia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M863.067,336.975l1.674,0.129l0.129,3.218l-0.900,0.901l-0.258,2.188l-0.900,-0.772l-1.934,1.931l-0.514,-0.129l-1.672,-0.129l-1.675,-2.316l-0.385,-1.803l-1.545,-2.318l0.127,-1.287l1.674,0.259l2.576,0.901l1.545,-0.258l-2.058,0.515zM805.011,313.803l-2.832,1.288l-2.317,0.643l-0.513,1.416l-1.034,1.159l-2.185,0l-1.803,0.256l-2.318,-0.513l-1.930,0.386l-1.930,0.127l-1.546,1.417l-0.772,-0.128l-1.416,0.772l-1.287,0.772l-1.932,-0.128l-1.800,0l-2.834,-1.674l-1.416,-0.514l0,-1.545l1.289,-0.387l0.515,-0.515l-0.131,-1.029l0.387,-1.932l-0.256,-1.545l-1.547,-2.702l-0.386,-1.546l0.129,-1.545l-1.030,-1.801l-0.127,-0.773l-1.160,-1.030l-0.387,-2.058l-1.545,-2.189l-0.384,-1.160l1.287,1.160l-1.029,-2.447l1.416,0.774l0.771,1.030l0,-1.417l-1.416,-2.061l-0.258,-0.900l-0.644,-0.773l0.386,-1.545l0.516,-0.644l0.387,-1.415l-0.258,-1.546l1.029,-1.930l0.258,2.060l1.158,-1.932l2.188,-0.900l1.287,-1.160l2.060,-0.901l1.159,-0.257l0.773,0.387l2.188,-1.029l1.544,-0.258l0.516,-0.644l0.643,-0.257l1.545,0.128l2.832,-0.901l1.418,-1.160l0.640,-1.414l1.676,-1.416l0.129,-1.030l0,-1.417l1.930,-2.318l1.158,2.318l1.031,-0.514l-0.902,-1.287l0.902,-1.287l1.156,0.516l0.260,-2.061l1.545,-1.289l0.643,-1.028l1.289,-0.516l0.127,-0.773l1.158,0.386l0,-0.643l1.158,-0.387l1.416,-0.385l1.930,1.157l1.547,1.675l1.671,0l1.676,0.258l-0.515,-1.545l1.287,-2.060l1.158,-0.772l-0.385,-0.643l1.158,-1.545l1.672,-1.031l1.289,0.385l2.317,-0.514l-0.129,-1.416l-1.932,-0.900l1.418,-0.388l1.801,0.775l1.416,1.029l2.316,0.772l0.774,-0.387l1.674,0.902l1.544,-0.773l1.030,0.258l0.644,-0.516l1.158,1.289l-0.644,1.416l-1.029,1.157l-0.903,0l0.260,1.160l-0.773,1.286l-0.901,1.289l0.127,0.772l2.190,1.545l2.058,0.900l1.418,0.902l1.930,1.544l0.771,0l1.418,0.773l0.387,0.772l2.574,0.900l1.801,-0.900l0.516,-1.416l0.513,-1.289l0.387,-1.415l0.772,-2.188l-0.385,-1.286l0.127,-0.775l-0.256,-1.542l0.387,-2.062l0.513,-0.514l-0.386,-0.901l0.644,-1.417l0.516,-1.414l0,-0.772l1.029,-1.032l0.772,1.288l0.130,1.674l0.641,0.385l0.131,1.029l1.029,1.417l0.258,1.544l-0.129,1.031l0.902,2.061l1.801,-1.031l0.903,1.158l1.285,1.031l-0.256,1.158l0.515,2.317l0.387,1.416l0.641,0.257l0.773,2.319l-0.256,1.414l0.901,1.805l2.961,1.414l1.800,1.288l1.803,1.159l-0.258,0.642l1.545,1.674l1.030,2.961l1.031,-0.642l1.158,1.286l0.643,-0.516l0.386,2.961l1.932,1.544l1.287,1.030l2.061,2.189l0.771,2.189l0.129,1.545l-0.260,1.674l1.289,2.316l-0.129,2.317l-0.515,1.287l-0.645,2.447l0,1.545l-0.513,1.930l-1.159,2.446l-2.058,1.288l-0.903,2.060l-0.900,1.415l-0.902,2.317l-1.030,1.288l-0.642,2.060l-0.387,1.802l0.129,0.900l-1.545,0.902l-2.961,0.128l-2.445,1.031l-1.287,1.030l-1.674,1.157l-2.188,-1.157l-1.675,-0.515l0.517,-1.287l-1.547,0.516l-2.316,1.929l-2.316,-0.773l-1.547,-0.385l-1.545,-0.258l-2.572,-0.772l-1.803,-1.674l-0.516,-2.060l-0.644,-1.288l-1.287,-1.157l-2.575,-0.258l0.903,-1.287l-0.645,-2.060l-1.287,1.931l-2.445,0.387l1.416,-1.416l0.386,-1.545l1.030,-1.288l-0.258,-2.059l-2.188,2.316l-1.673,0.902l-1.032,2.189l-2.058,-1.159l0.129,-1.416l-1.674,-1.932l-1.545,-1.029l0.516,-0.643l-3.348,-1.675l-1.932,0l-2.574,-1.286l-4.893,0.256l-3.474,0.902l-3.090,0.902l2.574,0.130z";
}, function($ctx1) {$ctx1.fill(self,"Australia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Australia\x0a\x09^ 'M863.067,336.975l1.674,0.129l0.129,3.218l-0.900,0.901l-0.258,2.188l-0.900,-0.772l-1.934,1.931l-0.514,-0.129l-1.672,-0.129l-1.675,-2.316l-0.385,-1.803l-1.545,-2.318l0.127,-1.287l1.674,0.259l2.576,0.901l1.545,-0.258l-2.058,0.515zM805.011,313.803l-2.832,1.288l-2.317,0.643l-0.513,1.416l-1.034,1.159l-2.185,0l-1.803,0.256l-2.318,-0.513l-1.930,0.386l-1.930,0.127l-1.546,1.417l-0.772,-0.128l-1.416,0.772l-1.287,0.772l-1.932,-0.128l-1.800,0l-2.834,-1.674l-1.416,-0.514l0,-1.545l1.289,-0.387l0.515,-0.515l-0.131,-1.029l0.387,-1.932l-0.256,-1.545l-1.547,-2.702l-0.386,-1.546l0.129,-1.545l-1.030,-1.801l-0.127,-0.773l-1.160,-1.030l-0.387,-2.058l-1.545,-2.189l-0.384,-1.160l1.287,1.160l-1.029,-2.447l1.416,0.774l0.771,1.030l0,-1.417l-1.416,-2.061l-0.258,-0.900l-0.644,-0.773l0.386,-1.545l0.516,-0.644l0.387,-1.415l-0.258,-1.546l1.029,-1.930l0.258,2.060l1.158,-1.932l2.188,-0.900l1.287,-1.160l2.060,-0.901l1.159,-0.257l0.773,0.387l2.188,-1.029l1.544,-0.258l0.516,-0.644l0.643,-0.257l1.545,0.128l2.832,-0.901l1.418,-1.160l0.640,-1.414l1.676,-1.416l0.129,-1.030l0,-1.417l1.930,-2.318l1.158,2.318l1.031,-0.514l-0.902,-1.287l0.902,-1.287l1.156,0.516l0.260,-2.061l1.545,-1.289l0.643,-1.028l1.289,-0.516l0.127,-0.773l1.158,0.386l0,-0.643l1.158,-0.387l1.416,-0.385l1.930,1.157l1.547,1.675l1.671,0l1.676,0.258l-0.515,-1.545l1.287,-2.060l1.158,-0.772l-0.385,-0.643l1.158,-1.545l1.672,-1.031l1.289,0.385l2.317,-0.514l-0.129,-1.416l-1.932,-0.900l1.418,-0.388l1.801,0.775l1.416,1.029l2.316,0.772l0.774,-0.387l1.674,0.902l1.544,-0.773l1.030,0.258l0.644,-0.516l1.158,1.289l-0.644,1.416l-1.029,1.157l-0.903,0l0.260,1.160l-0.773,1.286l-0.901,1.289l0.127,0.772l2.190,1.545l2.058,0.900l1.418,0.902l1.930,1.544l0.771,0l1.418,0.773l0.387,0.772l2.574,0.900l1.801,-0.900l0.516,-1.416l0.513,-1.289l0.387,-1.415l0.772,-2.188l-0.385,-1.286l0.127,-0.775l-0.256,-1.542l0.387,-2.062l0.513,-0.514l-0.386,-0.901l0.644,-1.417l0.516,-1.414l0,-0.772l1.029,-1.032l0.772,1.288l0.130,1.674l0.641,0.385l0.131,1.029l1.029,1.417l0.258,1.544l-0.129,1.031l0.902,2.061l1.801,-1.031l0.903,1.158l1.285,1.031l-0.256,1.158l0.515,2.317l0.387,1.416l0.641,0.257l0.773,2.319l-0.256,1.414l0.901,1.805l2.961,1.414l1.800,1.288l1.803,1.159l-0.258,0.642l1.545,1.674l1.030,2.961l1.031,-0.642l1.158,1.286l0.643,-0.516l0.386,2.961l1.932,1.544l1.287,1.030l2.061,2.189l0.771,2.189l0.129,1.545l-0.260,1.674l1.289,2.316l-0.129,2.317l-0.515,1.287l-0.645,2.447l0,1.545l-0.513,1.930l-1.159,2.446l-2.058,1.288l-0.903,2.060l-0.900,1.415l-0.902,2.317l-1.030,1.288l-0.642,2.060l-0.387,1.802l0.129,0.900l-1.545,0.902l-2.961,0.128l-2.445,1.031l-1.287,1.030l-1.674,1.157l-2.188,-1.157l-1.675,-0.515l0.517,-1.287l-1.547,0.516l-2.316,1.929l-2.316,-0.773l-1.547,-0.385l-1.545,-0.258l-2.572,-0.772l-1.803,-1.674l-0.516,-2.060l-0.644,-1.288l-1.287,-1.157l-2.575,-0.258l0.903,-1.287l-0.645,-2.060l-1.287,1.931l-2.445,0.387l1.416,-1.416l0.386,-1.545l1.030,-1.288l-0.258,-2.059l-2.188,2.316l-1.673,0.902l-1.032,2.189l-2.058,-1.159l0.129,-1.416l-1.674,-1.932l-1.545,-1.029l0.516,-0.643l-3.348,-1.675l-1.932,0l-2.574,-1.286l-4.893,0.256l-3.474,0.902l-3.090,0.902l2.574,0.130z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Austria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.996,97.278l-0.257,1.158l-1.545,0l0.643,0.643l-0.900,1.674l-0.515,0.515l-2.446,0l-1.289,0.644l-2.315,-0.258l-3.734,-0.644l-0.644,-0.900l-2.703,0.386l-0.258,0.514l-1.672,-0.386l-1.416,0l-1.160,-0.514l0.385,-0.644l-0.128,-0.515l0.903,-0.128l1.285,0.772l0.387,-0.772l2.446,0.128l1.931,-0.515l1.287,0.128l0.773,0.515l0.258,-0.386l-0.387,-1.802l1.030,-0.386l0.901,-1.158l2.058,0.772l1.417,-1.030l1.030,-0.258l2.061,0.901l1.286,-0.129l1.158,0.516l-0.127,0.256l-0.257,-0.903z";
}, function($ctx1) {$ctx1.fill(self,"Austria",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Austria\x0a\x09^ 'M510.996,97.278l-0.257,1.158l-1.545,0l0.643,0.643l-0.900,1.674l-0.515,0.515l-2.446,0l-1.289,0.644l-2.315,-0.258l-3.734,-0.644l-0.644,-0.900l-2.703,0.386l-0.258,0.514l-1.672,-0.386l-1.416,0l-1.160,-0.514l0.385,-0.644l-0.128,-0.515l0.903,-0.128l1.285,0.772l0.387,-0.772l2.446,0.128l1.931,-0.515l1.287,0.128l0.773,0.515l0.258,-0.386l-0.387,-1.802l1.030,-0.386l0.901,-1.158l2.058,0.772l1.417,-1.030l1.030,-0.258l2.061,0.901l1.286,-0.129l1.158,0.516l-0.127,0.256l-0.257,-0.903z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Azerbaijan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M590.292,114.27l0.643,0l1.931,1.673l1.158,0.129l0.516,-0.644l1.545,-1.030l1.416,1.417l1.417,1.802l1.286,0.129l0.774,0.773l-2.190,0.257l-0.514,2.059l-0.386,0.901l-1.031,0.644l0,1.416l-0.643,0.129l-1.674,-1.417l0.902,-1.415l-0.773,-0.773l-1.030,0.258l-3.089,1.930l-0.129,-1.801l-1.158,-0.516l-1.159,-0.643l0.772,-0.902l-1.416,-0.900l0.516,-0.773l-1.032,-0.386l-0.642,-0.772l0.129,0l0.644,-0.387l1.930,0.772l1.545,0.130l0.258,-0.258l-1.287,-1.545l-0.771,0.257zM589.521,122.637l-1.804,-0.386l-1.415,-1.288l-0.387,-1.028l0.516,0l0.771,0.772l1.287,-0.129l0,0.515l-1.032,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Azerbaijan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Azerbaijan\x0a\x09^ 'M590.292,114.27l0.643,0l1.931,1.673l1.158,0.129l0.516,-0.644l1.545,-1.030l1.416,1.417l1.417,1.802l1.286,0.129l0.774,0.773l-2.190,0.257l-0.514,2.059l-0.386,0.901l-1.031,0.644l0,1.416l-0.643,0.129l-1.674,-1.417l0.902,-1.415l-0.773,-0.773l-1.030,0.258l-3.089,1.930l-0.129,-1.801l-1.158,-0.516l-1.159,-0.643l0.772,-0.902l-1.416,-0.900l0.516,-0.773l-1.032,-0.386l-0.642,-0.772l0.129,0l0.644,-0.387l1.930,0.772l1.545,0.130l0.258,-0.258l-1.287,-1.545l-0.771,0.257zM589.521,122.637l-1.804,-0.386l-1.415,-1.288l-0.387,-1.028l0.516,0l0.771,0.772l1.287,-0.129l0,0.515l-1.032,-1.544z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bangladesh",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M714.901,167.564l-0.129,1.932l-0.900,-0.387l0.127,2.189l-0.771,-1.417l-0.129,-1.415l-0.514,-1.287l-1.031,-1.545l-2.575,-0.129l0.258,1.159l-0.771,1.544l-1.158,-0.644l-0.389,0.516l-0.772,-0.258l-1.029,-0.258l-0.515,-2.188l-0.901,-2.059l0.514,-1.674l-1.672,-0.643l0.514,-1.031l1.802,-1.030l-2.060,-1.415l1.031,-1.803l2.061,1.159l1.285,0.128l0.260,1.931l2.574,0.386l2.574,-0.128l1.545,0.515l-1.289,2.317l-1.158,0.129l-0.901,1.545l1.545,1.416l0.387,-1.802l0.771,0l-1.416,-4.247z";
}, function($ctx1) {$ctx1.fill(self,"Bangladesh",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Bangladesh\x0a\x09^ 'M714.901,167.564l-0.129,1.932l-0.900,-0.387l0.127,2.189l-0.771,-1.417l-0.129,-1.415l-0.514,-1.287l-1.031,-1.545l-2.575,-0.129l0.258,1.159l-0.771,1.544l-1.158,-0.644l-0.389,0.516l-0.772,-0.258l-1.029,-0.258l-0.515,-2.188l-0.901,-2.059l0.514,-1.674l-1.672,-0.643l0.514,-1.031l1.802,-1.030l-2.060,-1.415l1.031,-1.803l2.061,1.159l1.285,0.128l0.260,1.931l2.574,0.386l2.574,-0.128l1.545,0.515l-1.289,2.317l-1.158,0.129l-0.901,1.545l1.545,1.416l0.387,-1.802l0.771,0l-1.416,-4.247z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belarus",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M528.503,81.701l2.574,0l2.961,-0.901l0.643,-1.545l2.189,-0.901l-0.258,-1.159l1.674,-0.514l2.831,-1.031l2.833,0.644l0.387,0.772l1.416,-0.385l2.703,0.643l0.258,1.287l-0.645,0.644l1.672,1.802l1.160,0.515l-0.129,0.515l1.803,0.387l0.772,0.772l-1.030,0.643l-2.187,-0.128l-0.516,0.257l0.644,0.901l0.643,1.674l-2.318,0.129l-0.900,0.643l-0.128,1.416l-1.031,-0.258l-2.446,0.129l-0.772,-0.643l-1.030,0.386l-0.900,-0.386l-2.189,0l-2.959,-0.644l-2.706,-0.258l-2.187,0.129l-1.417,0.644l-1.286,0.129l-0.129,-1.159l-0.772,-1.287l1.672,-0.516l0,-1.029l-0.771,-1.029l0.129,1.288z";
}, function($ctx1) {$ctx1.fill(self,"Belarus",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Belarus\x0a\x09^ 'M528.503,81.701l2.574,0l2.961,-0.901l0.643,-1.545l2.189,-0.901l-0.258,-1.159l1.674,-0.514l2.831,-1.031l2.833,0.644l0.387,0.772l1.416,-0.385l2.703,0.643l0.258,1.287l-0.645,0.644l1.672,1.802l1.160,0.515l-0.129,0.515l1.803,0.387l0.772,0.772l-1.030,0.643l-2.187,-0.128l-0.516,0.257l0.644,0.901l0.643,1.674l-2.318,0.129l-0.900,0.643l-0.128,1.416l-1.031,-0.258l-2.446,0.129l-0.772,-0.643l-1.030,0.386l-0.900,-0.386l-2.189,0l-2.959,-0.644l-2.706,-0.258l-2.187,0.129l-1.417,0.644l-1.286,0.129l-0.129,-1.159l-0.772,-1.287l1.672,-0.516l0,-1.029l-0.771,-1.029l0.129,1.288z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belgium",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M474.179,88.652l1.932,0.258l2.574,-0.643l1.673,1.158l1.416,0.644l-0.258,1.930l-0.644,0l-0.385,1.544l-2.318,-1.286l-1.416,0.257l-1.801,-1.287l-1.288,-1.029l-1.287,0l-0.385,-1.031l-2.187,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Belgium",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Belgium\x0a\x09^ 'M474.179,88.652l1.932,0.258l2.574,-0.643l1.673,1.158l1.416,0.644l-0.258,1.930l-0.644,0l-0.385,1.544l-2.318,-1.286l-1.416,0.257l-1.801,-1.287l-1.288,-1.029l-1.287,0l-0.385,-1.031l-2.187,0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belize",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M225.09,179.022l0,-0.387l0.257,-0.129l0.515,0.258l1.030,-1.544l0.515,-0.130l0,0.387l0.515,0.128l-0.129,0.645l-0.386,1.159l0.258,0.513l-0.258,0.902l0.128,0.258l-0.256,1.416l-0.644,0.643l-0.387,0.129l-0.643,0.901l-0.772,0l0.257,-3.089l0,2.060z";
}, function($ctx1) {$ctx1.fill(self,"Belize",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Belize\x0a\x09^ 'M225.09,179.022l0,-0.387l0.257,-0.129l0.515,0.258l1.030,-1.544l0.515,-0.130l0,0.387l0.515,0.128l-0.129,0.645l-0.386,1.159l0.258,0.513l-0.258,0.902l0.128,0.258l-0.256,1.416l-0.644,0.643l-0.387,0.129l-0.643,0.901l-0.772,0l0.257,-3.089l0,2.060z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Benin",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M472.505,210.174l-2.188,0.258l-0.773,-1.803l0.131,-6.307l-0.516,-0.515l-0.129,-1.287l-0.900,-0.902l-0.775,-0.900l0.259,-1.417l1.030,-0.256l0.515,-1.159l1.287,-0.257l0.645,-0.774l0.901,-0.773l0.901,-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130,-4.376z";
}, function($ctx1) {$ctx1.fill(self,"Benin",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Benin\x0a\x09^ 'M472.505,210.174l-2.188,0.258l-0.773,-1.803l0.131,-6.307l-0.516,-0.515l-0.129,-1.287l-0.900,-0.902l-0.775,-0.900l0.259,-1.417l1.030,-0.256l0.515,-1.159l1.287,-0.257l0.645,-0.774l0.901,-0.773l0.901,-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130,-4.376z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bhutan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M712.198,152.117l1.158,0.901l-0.257,1.674l-2.188,0l-2.189,-0.129l-1.672,0.386l-2.447,-1.029l-0.129,-0.516l1.804,-1.931l1.414,-0.773l1.930,0.645l1.416,0.128l-1.160,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bhutan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Bhutan\x0a\x09^ 'M712.198,152.117l1.158,0.901l-0.257,1.674l-2.188,0l-2.189,-0.129l-1.672,0.386l-2.447,-1.029l-0.129,-0.516l1.804,-1.931l1.414,-0.773l1.930,0.645l1.416,0.128l-1.160,-0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bolivia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M295.89,286.383l-3.089,-0.127l-1.030,2.187l-1.544,-2.060l-3.477,-0.644l-2.316,2.447l-1.932,0.386l-1.028,-3.733l-1.417,-2.960l0.773,-2.576l-1.417,-1.157l-0.387,-1.933l-1.286,-1.932l1.673,-2.830l-1.158,-2.318l0.643,-0.901l-0.515,-1.029l1.159,-1.287l0,-2.317l0.128,-1.931l0.644,-0.901l-2.445,-4.248l2.060,0.127l1.415,0l0.515,-0.771l2.446,-1.160l1.416,-1.029l3.476,-0.386l-0.258,1.930l0.387,1.159l-0.258,1.802l2.960,2.317l2.962,0.515l1.030,1.030l1.801,0.515l1.159,0.772l1.673,0l1.545,0.773l0.128,1.544l0.516,0.773l0.128,1.158l-0.772,0l1.031,3.219l5.148,0.131l-0.386,1.542l0.258,1.030l1.416,0.771l0.643,1.676l-0.386,2.061l-0.772,1.158l0.257,1.544l-0.901,0.643l0,-0.902l-2.575,-1.285l-2.446,-0.130l-4.634,0.772l-1.416,2.447l0,1.414l-1.030,3.219l0.515,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Bolivia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Bolivia\x0a\x09^ 'M295.89,286.383l-3.089,-0.127l-1.030,2.187l-1.544,-2.060l-3.477,-0.644l-2.316,2.447l-1.932,0.386l-1.028,-3.733l-1.417,-2.960l0.773,-2.576l-1.417,-1.157l-0.387,-1.933l-1.286,-1.932l1.673,-2.830l-1.158,-2.318l0.643,-0.901l-0.515,-1.029l1.159,-1.287l0,-2.317l0.128,-1.931l0.644,-0.901l-2.445,-4.248l2.060,0.127l1.415,0l0.515,-0.771l2.446,-1.160l1.416,-1.029l3.476,-0.386l-0.258,1.930l0.387,1.159l-0.258,1.802l2.960,2.317l2.962,0.515l1.030,1.030l1.801,0.515l1.159,0.772l1.673,0l1.545,0.773l0.128,1.544l0.516,0.773l0.128,1.158l-0.772,0l1.031,3.219l5.148,0.131l-0.386,1.542l0.258,1.030l1.416,0.771l0.643,1.676l-0.386,2.061l-0.772,1.158l0.257,1.544l-0.901,0.643l0,-0.902l-2.575,-1.285l-2.446,-0.130l-4.634,0.772l-1.416,2.447l0,1.414l-1.030,3.219l0.515,0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BosniaandHerzegovina",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.403,106.159l1.030,0l-0.645,1.159l1.289,1.030l-0.389,1.287l-1.158,0.387l-0.900,0.515l-0.387,1.545l-2.445,-1.030l-1.031,-1.159l-0.901,-0.514l-1.286,-1.031l-0.643,-0.901l-1.290,-1.158l0.516,-1.159l1.031,0.643l0.643,-0.643l1.159,0l2.316,0.386l1.931,0l-1.160,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"BosniaandHerzegovina",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "BosniaandHerzegovina\x0a\x09^ 'M516.403,106.159l1.030,0l-0.645,1.159l1.289,1.030l-0.389,1.287l-1.158,0.387l-0.900,0.515l-0.387,1.545l-2.445,-1.030l-1.031,-1.159l-0.901,-0.514l-1.286,-1.031l-0.643,-0.901l-1.290,-1.158l0.516,-1.159l1.031,0.643l0.643,-0.643l1.159,0l2.316,0.386l1.931,0l-1.160,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Botswana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z";
}, function($ctx1) {$ctx1.fill(self,"Botswana",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Botswana\x0a\x09^ 'M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Brazil",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l3.605,-3.732l2.961,-2.576l1.801,-1.158l2.319,-1.416l0,-2.189l-1.288,-1.544l-1.416,0.516l0.515,-1.546l0.386,-1.545l0,-1.544l-0.901,-0.516l-1.031,0.516l-1.028,-0.129l-0.259,-1.031l-0.256,-2.443l-0.516,-0.903l-1.801,-0.642l-1.160,0.513l-2.831,-0.513l0.128,-3.736l-0.772,-1.415l0.901,-0.643l-0.257,-1.544l0.772,-1.158l0.386,-2.061l-0.643,-1.676l-1.416,-0.771l-0.258,-1.030l0.386,-1.542l-5.148,-0.131l-1.031,-3.219l0.772,0l-0.128,-1.158l-0.516,-0.773l-0.128,-1.544l-1.545,-0.773l-1.673,0l-1.159,-0.772l-1.801,-0.515l-1.030,-1.030l-2.962,-0.515l-2.960,-2.317l0.258,-1.802l-0.387,-1.159l0.258,-1.930l-3.476,0.386l-1.416,1.029l-2.446,1.160l-0.515,0.771l-1.415,0l-2.060,-0.127l-1.416,0.384l-1.287,-0.257l0.256,-4.119l-2.317,1.545l-2.317,0l-1.030,-1.416l-1.801,-0.129l0.644,-1.158l-1.546,-1.674l-1.158,-2.445l0.772,-0.516l0,-1.158l1.545,-0.773l-0.257,-1.416l0.772,-0.901l0.129,-1.288l3.089,-1.802l2.188,-0.515l0.386,-0.514l2.446,0.129l1.159,-7.338l0.129,-1.159l-0.515,-1.544l-1.159,-1.030l0,-1.931l1.545,-0.387l0.515,0.258l0.129,-1.029l-1.545,-0.258l-0.129,-1.674l5.278,0l0.900,-0.902l0.773,0.902l0.515,1.545l0.516,-0.387l1.544,1.417l2.060,-0.129l0.515,-0.772l1.930,-0.644l1.159,-0.515l0.257,-1.159l1.931,-0.772l-0.128,-0.514l-2.188,-0.259l-0.387,-1.672l0,-1.804l-1.158,-0.643l0.514,-0.257l2.060,0.257l2.059,0.773l0.774,-0.643l1.930,-0.515l3.090,-0.902l0.900,-1.030l-0.257,-0.772l1.287,-0.129l0.644,0.643l-0.257,1.159l0.900,0.386l0.644,1.288l-0.772,0.902l-0.515,2.316l0.773,1.287l0.128,1.287l1.674,1.288l1.287,0.128l0.386,-0.515l0.772,-0.128l1.288,-0.515l0.901,-0.644l1.416,0.259l0.643,-0.130l1.546,0.130l0.257,-0.517l-0.516,-0.514l0.259,-0.773l1.158,0.259l1.159,-0.259l1.545,0.515l1.287,0.516l0.772,-0.644l0.643,0.128l0.387,0.772l1.287,-0.256l1.030,-1.031l0.772,-1.930l1.545,-2.446l1.029,-0.128l0.645,1.415l1.544,4.763l1.416,0.386l0,1.931l-1.931,2.189l0.773,0.772l4.763,0.387l0.128,2.702l2.059,-1.674l3.348,0.902l4.505,1.674l1.288,1.545l-0.387,1.545l3.090,-0.901l5.278,1.415l3.991,0l3.990,2.189l3.476,2.961l2.059,0.772l2.318,0.128l0.900,0.902l0.901,3.475l0.516,1.545l-1.159,4.505l-1.287,1.675l-3.862,3.863l-1.674,2.959l-2.059,2.317l-0.643,0.129l-0.773,1.931l0.257,5.020l-0.773,4.250l-0.256,1.672l-0.902,1.158l-0.515,3.605l-2.703,3.475l-0.387,2.833l-2.187,1.158l-0.644,1.546l-2.960,0l-4.249,1.028l-1.931,1.288l-2.960,0.773l-3.219,2.060l-2.188,2.703l-0.386,2.060l0.386,1.416l-0.515,2.703l-0.644,1.416l-1.803,1.416l-2.960,4.764l-2.446,2.189l-1.802,1.157l-1.287,2.574l-1.673,1.545l-0.772,-1.545l1.158,-1.286l-1.545,-1.804l-2.189,-1.414l-2.702,-1.805l-1.030,0.130l-2.704,-2.059l1.674,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Brazil",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Brazil\x0a\x09^ 'M310.05,308.396l3.605,-3.732l2.961,-2.576l1.801,-1.158l2.319,-1.416l0,-2.189l-1.288,-1.544l-1.416,0.516l0.515,-1.546l0.386,-1.545l0,-1.544l-0.901,-0.516l-1.031,0.516l-1.028,-0.129l-0.259,-1.031l-0.256,-2.443l-0.516,-0.903l-1.801,-0.642l-1.160,0.513l-2.831,-0.513l0.128,-3.736l-0.772,-1.415l0.901,-0.643l-0.257,-1.544l0.772,-1.158l0.386,-2.061l-0.643,-1.676l-1.416,-0.771l-0.258,-1.030l0.386,-1.542l-5.148,-0.131l-1.031,-3.219l0.772,0l-0.128,-1.158l-0.516,-0.773l-0.128,-1.544l-1.545,-0.773l-1.673,0l-1.159,-0.772l-1.801,-0.515l-1.030,-1.030l-2.962,-0.515l-2.960,-2.317l0.258,-1.802l-0.387,-1.159l0.258,-1.930l-3.476,0.386l-1.416,1.029l-2.446,1.160l-0.515,0.771l-1.415,0l-2.060,-0.127l-1.416,0.384l-1.287,-0.257l0.256,-4.119l-2.317,1.545l-2.317,0l-1.030,-1.416l-1.801,-0.129l0.644,-1.158l-1.546,-1.674l-1.158,-2.445l0.772,-0.516l0,-1.158l1.545,-0.773l-0.257,-1.416l0.772,-0.901l0.129,-1.288l3.089,-1.802l2.188,-0.515l0.386,-0.514l2.446,0.129l1.159,-7.338l0.129,-1.159l-0.515,-1.544l-1.159,-1.030l0,-1.931l1.545,-0.387l0.515,0.258l0.129,-1.029l-1.545,-0.258l-0.129,-1.674l5.278,0l0.900,-0.902l0.773,0.902l0.515,1.545l0.516,-0.387l1.544,1.417l2.060,-0.129l0.515,-0.772l1.930,-0.644l1.159,-0.515l0.257,-1.159l1.931,-0.772l-0.128,-0.514l-2.188,-0.259l-0.387,-1.672l0,-1.804l-1.158,-0.643l0.514,-0.257l2.060,0.257l2.059,0.773l0.774,-0.643l1.930,-0.515l3.090,-0.902l0.900,-1.030l-0.257,-0.772l1.287,-0.129l0.644,0.643l-0.257,1.159l0.900,0.386l0.644,1.288l-0.772,0.902l-0.515,2.316l0.773,1.287l0.128,1.287l1.674,1.288l1.287,0.128l0.386,-0.515l0.772,-0.128l1.288,-0.515l0.901,-0.644l1.416,0.259l0.643,-0.130l1.546,0.130l0.257,-0.517l-0.516,-0.514l0.259,-0.773l1.158,0.259l1.159,-0.259l1.545,0.515l1.287,0.516l0.772,-0.644l0.643,0.128l0.387,0.772l1.287,-0.256l1.030,-1.031l0.772,-1.930l1.545,-2.446l1.029,-0.128l0.645,1.415l1.544,4.763l1.416,0.386l0,1.931l-1.931,2.189l0.773,0.772l4.763,0.387l0.128,2.702l2.059,-1.674l3.348,0.902l4.505,1.674l1.288,1.545l-0.387,1.545l3.090,-0.901l5.278,1.415l3.991,0l3.990,2.189l3.476,2.961l2.059,0.772l2.318,0.128l0.900,0.902l0.901,3.475l0.516,1.545l-1.159,4.505l-1.287,1.675l-3.862,3.863l-1.674,2.959l-2.059,2.317l-0.643,0.129l-0.773,1.931l0.257,5.020l-0.773,4.250l-0.256,1.672l-0.902,1.158l-0.515,3.605l-2.703,3.475l-0.387,2.833l-2.187,1.158l-0.644,1.546l-2.960,0l-4.249,1.028l-1.931,1.288l-2.960,0.773l-3.219,2.060l-2.188,2.703l-0.386,2.060l0.386,1.416l-0.515,2.703l-0.644,1.416l-1.803,1.416l-2.960,4.764l-2.446,2.189l-1.802,1.157l-1.287,2.574l-1.673,1.545l-0.772,-1.545l1.158,-1.286l-1.545,-1.804l-2.189,-1.414l-2.702,-1.805l-1.030,0.130l-2.704,-2.059l1.674,-0.257z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BruneiDarussalam",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M772.829,214.809l1.160,-1.030l2.315,-1.416l-0.127,1.287l-0.260,1.674l-1.285,0l-0.516,0.902l1.287,1.417z";
}, function($ctx1) {$ctx1.fill(self,"BruneiDarussalam",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "BruneiDarussalam\x0a\x09^ 'M772.829,214.809l1.160,-1.030l2.315,-1.416l-0.127,1.287l-0.260,1.674l-1.285,0l-0.516,0.902l1.287,1.417z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bulgaria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.314,107.833l0.773,1.030l1.031,-0.129l2.059,0.386l3.990,0.130l1.287,-0.644l3.219,-0.644l1.930,1.030l1.544,0.258l-1.416,1.158l-0.900,1.931l0.772,1.416l-2.317,-0.257l-2.705,0.772l0,1.417l-2.445,0.256l-1.930,-1.029l-2.187,0.773l-1.932,-0.130l-0.258,-1.674l-1.287,-0.900l0.385,-0.387l-0.256,-0.386l0.515,-0.772l1.030,-0.901l-1.415,-1.158l-0.259,-0.902l-0.772,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bulgaria",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Bulgaria\x0a\x09^ 'M526.314,107.833l0.773,1.030l1.031,-0.129l2.059,0.386l3.990,0.130l1.287,-0.644l3.219,-0.644l1.930,1.030l1.544,0.258l-1.416,1.158l-0.900,1.931l0.772,1.416l-2.317,-0.257l-2.705,0.772l0,1.417l-2.445,0.256l-1.930,-1.029l-2.187,0.773l-1.932,-0.130l-0.258,-1.674l-1.287,-0.900l0.385,-0.387l-0.256,-0.386l0.515,-0.772l1.030,-0.901l-1.415,-1.158l-0.259,-0.902l-0.772,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BurkinaFaso",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z";
}, function($ctx1) {$ctx1.fill(self,"BurkinaFaso",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "BurkinaFaso\x0a\x09^ 'M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Burundi",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M544.208,239.14l-0.130,-3.347l-0.643,-1.159l1.673,0.258l0.773,-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Burundi",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Burundi\x0a\x09^ 'M544.208,239.14l-0.130,-3.347l-0.643,-1.159l1.673,0.258l0.773,-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cambodia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M743.995,198.331l-1.031,-1.415l-1.416,-2.834l-0.643,-3.217l1.801,-2.189l3.475,-0.514l2.447,0.387l2.316,1.029l1.160,-1.803l2.446,0.901l0.644,1.803l-0.386,3.218l-4.506,2.059l1.160,1.674l-2.834,0.258l-2.316,1.030l2.317,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cambodia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Cambodia\x0a\x09^ 'M743.995,198.331l-1.031,-1.415l-1.416,-2.834l-0.643,-3.217l1.801,-2.189l3.475,-0.514l2.447,0.387l2.316,1.029l1.160,-1.803l2.446,0.901l0.644,1.803l-0.386,3.218l-4.506,2.059l1.160,1.674l-2.834,0.258l-2.316,1.030l2.317,0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cameroon",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Cameroon",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Cameroon\x0a\x09^ 'M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Canada",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M212.989,24.93l-1.416,1.159l-3.862,-0.257l-3.347,-0.644l1.417,-1.288l3.990,-0.772l2.317,1.030l-0.901,-0.772zM212.474,18.107l-1.287,0.130l-5.020,-0.130l-0.772,-0.772l5.535,0l1.802,0.515l0.258,-0.257zM204.622,14.761l3.218,0.901l-0.772,1.030l-3.991,0.515l-2.188,-0.644l-1.159,-0.901l-0.257,-1.159l3.604,0.129l-1.545,-0.129zM227.793,26.604l-4.377,-0.387l-7.208,-0.900l-0.901,-1.417l-0.258,-1.287l-2.703,-1.287l-5.664,-0.257l-3.090,-0.901l1.030,-1.031l5.535,0.130l2.962,0.901l5.406,0l2.317,0.901l-0.643,1.029l3.089,0.515l1.673,0.643l3.605,0.130l3.990,0.257l4.248,-0.643l5.535,-0.129l4.377,0.129l2.832,1.029l0.644,1.159l-1.674,0.644l-3.991,0.644l-3.475,-0.387l-7.724,0.387l5.535,-0.128zM165.489,16.434l3.862,0.386l-0.902,0.901l-5.020,0.772l-3.991,-0.900l2.188,-0.901l-3.863,0.258zM166.261,14.632l3.604,0.644l-3.347,0.515l-4.505,0l0.128,-0.387l2.704,-0.901l-1.416,-0.129zM205.137,40.636l2.703,1.158l-1.673,0.902l-3.605,-1.031l-2.188,0.516l-3.090,-0.387l1.803,-1.673l1.931,-1.159l2.059,0.643l-2.060,-1.031zM315.458,88.781l-1.417,1.673l-1.802,2.317l1.802,-0.900l1.802,0.643l-1.030,0.902l2.447,0.772l1.287,-0.772l2.574,0.901l-0.772,1.930l1.931,-0.386l0.257,1.417l0.901,1.673l-1.158,2.317l-1.288,0.129l-1.673,-0.515l0.515,-2.189l-0.772,-0.386l-3.089,2.317l-1.545,0l1.801,-1.287l-2.574,-0.644l-2.832,0.130l-5.278,-0.130l-0.386,-0.772l1.674,-0.901l-1.159,-0.773l2.317,-1.673l2.702,-4.248l1.675,-1.545l2.317,-0.901l1.288,0.129l0.515,-0.772zM239.25,51.578l2.960,0.901l3.090,0.901l0.258,1.287l1.930,-0.257l1.931,0.900l-2.316,0.903l-4.249,-0.774l-1.544,-1.158l-2.575,1.416l-3.861,1.416l-0.902,-1.544l-3.733,0.257l2.317,-1.416l0.386,-2.060l0.901,-2.445l1.931,0.257l0.515,1.158l1.417,-0.514l-1.544,-0.772zM218.525,6.393l7.080,-0.643l5.278,-0.386l5.921,-0.130l3.604,-1.415l11.199,-0.773l9.656,0.129l7.723,-0.386l18.924,0.514l10.555,1.802l-6.565,1.159l-6.437,0.515l-2.445,0.644l5.792,0l-10.684,2.317l-10.169,2.704l-9.913,0.900l3.734,0.258l-1.931,0.515l2.317,1.287l-6.694,1.674l-1.287,1.159l-3.863,0.772l0.387,0.643l3.604,0.258l0,0.644l-6.049,1.158l-7.081,-0.643l-7.981,0.386l-9.012,-0.515l-0.385,-1.288l5.020,-0.643l-1.158,-0.902l2.187,-0.900l6.437,0.900l-7.981,-2.316l2.188,-1.030l4.763,-0.644l0.773,-0.901l-3.862,-1.030l-1.159,-1.416l7.338,0.129l6.437,-0.644l-15.577,-0.128l-4.762,-1.031l-5.407,-1.802l0.515,0.901zM253.024,32.01l2.574,-1.030l5.922,1.417l3.734,1.287l0.385,1.158l5.020,-0.643l2.833,1.674l6.437,1.158l2.317,1.030l2.574,2.575l-4.891,1.158l6.307,1.803l4.248,0.643l3.862,2.446l4.248,0.128l-0.773,1.932l-4.763,3.089l-3.347,-1.158l-4.248,-2.575l-3.476,0.386l-0.257,1.545l2.832,1.545l3.605,1.287l1.159,0.644l1.673,2.704l-0.902,1.930l-3.347,-0.772l-6.821,-2.061l3.862,2.318l2.702,1.545l0.516,1.030l-7.339,-1.159l-5.793,-1.545l-3.218,-1.286l0.903,-0.774l-3.991,-1.415l-3.992,-1.287l0.129,0.772l-7.853,0.386l-2.188,-0.901l1.675,-1.931l5.149,-0.129l5.535,-0.257l-0.901,-1.031l0.901,-1.287l3.475,-2.702l-0.772,-1.159l-1.030,-0.901l-4.120,-1.288l-5.406,-0.901l1.674,-0.772l-2.832,-1.674l-2.317,-0.129l-2.189,-0.900l-1.416,0.772l-4.891,0.385l-9.784,-0.643l-5.664,-0.772l-4.377,-0.386l-2.317,-0.901l2.832,-1.287l-3.862,0l-0.772,-2.704l2.059,-2.446l2.704,-1.030l6.951,-0.772l-1.931,1.802l2.188,1.674l2.447,-2.189l6.823,-1.159l4.633,2.832l-0.386,1.675l-5.278,0.774zM210.672,27.248l5.536,0.128l5.148,0.645l-3.989,2.445l-3.219,0.514l-2.833,1.932l-3.088,-0.128l-1.675,-2.318l0,-1.287l1.417,-1.158l-2.703,0.773zM206.552,9.869l1.931,-0.901l2.704,-0.128l-1.159,-0.644l6.308,-0.129l3.348,1.416l8.753,1.673l5.664,2.060l-3.733,0.772l-5.021,2.060l-4.763,0.258l-5.535,-0.386l-2.961,-1.031l0.129,-1.030l2.059,-0.772l-4.891,0.129l-2.961,-0.902l-1.673,-1.287l-1.801,1.158zM194.71,31.109l-2.832,-2.574l2.961,-0.514l3.218,0.643l4.119,-0.258l0.515,1.030l-1.544,0.901l3.604,1.803l-0.644,1.416l-3.862,1.415l-2.574,-0.257l-1.803,-1.030l-5.535,-1.544l-1.673,-1.160l-6.050,-0.129zM178.233,30.08l3.089,1.158l1.674,2.574l0.772,1.932l4.634,1.287l4.764,1.287l-0.258,1.159l-4.377,0.257l1.673,1.030l-0.900,1.030l-6.436,0l-1.804,-0.644l-4.376,-0.386l-5.278,1.545l-6.565,0.644l-3.604,0.128l-2.704,-2.059l-6.050,-0.386l-4.505,-1.674l2.960,-0.772l4.119,-0.386l3.863,0.129l3.475,-0.516l-5.149,-0.644l-5.793,0.258l-3.862,-0.129l-1.416,-0.901l6.308,-1.159l-4.249,0.129l-4.634,-0.772l2.189,-2.059l1.932,-1.031l7.208,-1.673l2.703,0.515l-1.287,1.287l5.922,-0.772l3.861,1.287l2.961,-1.287l2.446,0.901l2.189,2.574l1.416,-1.157l-1.932,-2.704l2.446,-0.387l-2.575,-0.387zM174.757,22.613l2.446,-0.385l2.832,0.128l0.385,1.287l-1.543,1.287l-9.141,0.387l-6.822,1.159l-4.120,0.128l-0.257,-0.901l5.535,-1.159l-12.228,0.257l-3.734,-0.514l3.734,-2.575l2.445,-0.772l7.596,0.901l4.891,1.673l4.634,0.129l-3.862,-2.574l2.446,-1.030l1.803,0.643l0.900,1.287l-2.060,-0.644zM134.336,21.969l4.506,-2.059l5.535,-1.803l4.120,0.130l3.732,-0.387l-0.385,2.060l-2.060,0.901l-2.575,0.129l-5.020,1.158l-4.248,0.386l3.605,0.515zM137.812,26.476l3.862,0.514l6.823,0.129l2.703,0.772l2.832,1.158l-3.347,0.644l-6.694,1.674l-3.991,2.060l-0.643,1.287l-5.664,1.287l-1.802,-1.030l-5.922,-1.544l0.129,-0.902l2.188,-2.317l2.060,-1.159l-1.673,-2.188l-9.139,0.385zM107.69,81.443l2.574,-0.256l-0.773,3.088l2.318,2.188l-1.030,0l-1.674,-1.287l-0.900,-1.287l-1.416,-0.772l-0.516,-1.158l0.130,-0.902l-1.287,-0.386zM199.73,20.682l1.288,0.901l0,1.417l-1.416,1.801l-3.218,0.387l-2.961,-0.387l0.129,-1.545l-4.507,0.130l-0.128,-2.060l2.961,0.129l3.990,-0.901l-3.862,-0.128zM181.064,13.344l5.279,0.387l7.337,0.901l2.060,1.288l1.030,1.158l-4.377,-0.258l-4.506,-0.900l-5.922,-0.129l2.576,-0.773l-3.348,-0.644l0.129,1.030zM127.385,92.386l1.288,1.287l2.702,1.158l1.160,1.416l-1.417,0.387l-4.376,-1.159l-0.773,-1.029l-2.446,-0.903l-0.515,-0.772l-2.703,-0.514l-1.030,-1.416l0.129,-0.643l2.832,0.643l1.673,0.386l2.575,0.257l-0.901,-0.902zM315.071,83.502l0.129,2.961l-1.931,1.031l-1.932,0.901l-4.376,1.030l-3.476,2.188l-4.505,0.386l-5.793,-0.515l-3.990,0l-2.832,0.129l-2.318,1.930l-3.346,1.288l-3.863,3.476l-3.089,2.575l2.189,-0.515l4.376,-3.476l5.664,-2.317l3.991,-0.257l2.445,1.286l-2.573,1.932l0.772,2.832l0.901,2.060l3.476,1.287l4.504,-0.387l2.704,-2.960l0.258,1.931l1.673,1.029l-3.347,1.674l-5.921,1.674l-2.703,1.029l-2.961,1.931l-2.060,-0.128l-0.128,-2.317l4.633,-2.189l-4.247,0l-2.961,0.387l-1.803,-1.545l0,-3.605l-1.157,-0.772l-1.804,0.386l-0.900,-0.644l-2.060,1.932l-0.901,2.187l-0.902,1.159l-1.158,0.515l-0.901,0l-0.258,0.772l-4.891,0l-4.120,0l-1.287,0.516l-2.703,1.801l-0.387,0.258l-0.256,0.258l-0.387,0.386l-0.257,0.515l-0.643,0l-0.516,0l-0.901,0l-0.772,-0.128l-0.902,0l-0.643,0l-0.772,0.128l-0.258,0l-0.515,0.257l-0.386,0.129l0.257,0.386l0,0.129l0.387,0.772l0,0.258l0,0.128l-0.258,0.130l-0.386,0.128l-0.772,0.258l-0.902,0.257l-0.643,0.257l-0.643,0.258l-0.644,0.129l-0.128,0l-0.387,0l-0.900,0.128l-0.645,0.129l-0.644,0.258l-0.643,0.385l-0.644,0.258l-0.644,0.257l-0.643,0.258l-0.644,0l-0.514,-0.129l-0.387,-0.257l-0.257,-0.257l0,-0.130l0,-0.257l0.644,-0.900l1.286,-1.546l0,-0.128l0,-0.129l0.259,-0.515l0.385,-0.515l0.129,-0.258l-0.258,-0.772l-0.129,-0.515l0,-0.386l-0.127,-0.515l-0.130,-0.515l-0.129,-0.515l-0.128,-0.386l-0.130,-0.515l0,-0.257l-0.128,-0.387l-0.515,-0.386l-0.514,-0.128l-0.644,-0.258l-0.643,-0.257l-0.516,-0.257l0.386,-0.515l0,-0.129l-0.128,0l-0.258,-0.258l-0.128,0l-0.258,0.128l-0.386,-0.128l-0.258,-0.129l-0.128,0l-0.129,-0.257l-0.129,0l0,-0.258l0,-0.128l0,-0.129l0,-0.129l-0.257,0l-0.258,0.258l-0.772,0l0.128,-0.258l-0.257,0l-0.386,-0.257l-0.128,-0.387l-0.130,-0.386l-0.514,-0.257l-0.515,-0.129l-0.515,-0.258l-0.515,-0.257l-0.515,-0.128l-0.515,-0.258l-0.515,-0.258l-0.514,-0.128l-0.258,-0.128l-0.387,-0.130l-0.643,-0.257l-0.772,-0.386l-0.772,-0.258l-0.773,-0.257l-0.386,-0.257l-0.258,0l-0.386,-0.258l-0.644,-0.129l-0.643,0.129l-0.772,0.258l-0.387,0.128l-0.386,0.129l-0.258,0.129l-0.515,0l-0.385,0l-3.219,-0.773l-2.188,0.387l-2.703,-0.773l-2.704,-0.515l-1.930,-0.129l-0.772,-0.514l-0.516,-1.417l-0.901,0l0,1.030l-5.536,0l-9.139,0l-9.397,0l-32.182,0l-2.704,0l-15.962,0l-5.149,-2.574l-1.931,-1.287l-4.891,-1.030l-1.545,-2.446l0.385,-1.673l-3.474,-1.031l-0.387,-2.188l-3.348,-2.061l0,-1.287l1.417,-1.287l0,-1.802l-4.634,-1.673l-2.703,-3.090l-1.674,-1.930l-2.446,-1.159l-1.802,-1.159l-1.545,-1.417l-2.703,0.902l-2.575,1.545l-2.445,-1.803l-1.802,-1.157l-2.704,-0.774l-2.574,0l0,-15.446l0,-9.913l5.019,0.644l4.249,1.286l2.832,0.258l2.317,-1.158l3.347,-0.901l3.990,0.385l3.992,-1.157l4.376,-0.644l1.931,1.029l1.931,-0.644l0.643,-1.158l1.803,0.257l4.634,2.447l3.604,-1.931l0.387,2.059l3.218,-0.387l1.029,-0.772l3.219,0.129l4.120,1.159l6.307,0.901l3.733,0.515l2.704,-0.129l3.604,1.288l-3.734,1.415l4.763,0.515l7.338,-0.257l2.317,-0.515l2.832,1.544l2.960,-1.287l-2.832,-1.158l1.803,-0.901l3.218,-0.129l2.189,-0.258l2.188,0.644l2.703,1.417l2.961,-0.258l4.763,1.287l4.248,-0.386l3.862,0l-0.258,-1.673l2.446,-0.515l4.120,0.900l0,2.576l1.673,-2.060l2.188,0l1.288,-2.704l-2.962,-1.673l-3.088,-1.030l0.128,-2.961l3.218,-2.060l3.605,0.515l2.703,1.158l3.604,3.091l-2.317,1.287l5.020,0.514l0,2.832l3.605,-2.189l3.218,1.804l-0.900,1.930l2.702,1.802l2.704,-1.931l2.060,-2.317l0.129,-2.960l3.861,0.257l3.862,0.387l3.733,1.287l0.128,1.416l-2.059,1.416l1.931,1.416l-0.386,1.286l-5.277,1.932l-3.734,0.386l-2.704,-0.772l-0.901,1.287l-2.574,2.317l-0.773,1.159l-3.089,1.802l-3.862,0.257l-2.188,1.031l-0.130,1.802l-3.089,0.386l-3.347,2.188l-2.961,2.961l-1.028,2.188l-0.130,3.090l3.991,0.386l1.159,2.576l1.287,2.059l3.733,-0.515l5.020,1.159l2.704,1.029l1.930,1.288l3.347,0.643l2.832,1.158l4.507,0.129l2.959,0.258l-0.514,2.446l0.901,2.702l1.931,2.961l3.991,2.576l2.059,-0.902l1.545,-2.703l-1.416,-4.247l-1.931,-1.545l4.247,-1.159l3.090,-1.931l1.545,-1.931l-0.257,-1.803l-1.802,-2.188l-3.348,-2.060l3.219,-2.832l-1.158,-2.445l-0.902,-4.249l1.931,-0.514l4.506,0.643l2.832,0.257l2.188,-0.644l2.575,0.902l3.347,1.545l0.772,1.029l4.763,0.259l0,2.187l0.901,3.476l2.446,0.386l1.931,1.545l3.862,-1.416l2.574,-2.961l1.802,-1.287l2.060,2.446l3.605,3.347l2.960,3.218l-1.159,1.802l3.604,1.417l2.446,1.545l4.249,0.772l1.802,0.772l1.030,2.317l2.060,0.387l-1.158,-1.028z";
}, function($ctx1) {$ctx1.fill(self,"Canada",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Canada\x0a\x09^ 'M212.989,24.93l-1.416,1.159l-3.862,-0.257l-3.347,-0.644l1.417,-1.288l3.990,-0.772l2.317,1.030l-0.901,-0.772zM212.474,18.107l-1.287,0.130l-5.020,-0.130l-0.772,-0.772l5.535,0l1.802,0.515l0.258,-0.257zM204.622,14.761l3.218,0.901l-0.772,1.030l-3.991,0.515l-2.188,-0.644l-1.159,-0.901l-0.257,-1.159l3.604,0.129l-1.545,-0.129zM227.793,26.604l-4.377,-0.387l-7.208,-0.900l-0.901,-1.417l-0.258,-1.287l-2.703,-1.287l-5.664,-0.257l-3.090,-0.901l1.030,-1.031l5.535,0.130l2.962,0.901l5.406,0l2.317,0.901l-0.643,1.029l3.089,0.515l1.673,0.643l3.605,0.130l3.990,0.257l4.248,-0.643l5.535,-0.129l4.377,0.129l2.832,1.029l0.644,1.159l-1.674,0.644l-3.991,0.644l-3.475,-0.387l-7.724,0.387l5.535,-0.128zM165.489,16.434l3.862,0.386l-0.902,0.901l-5.020,0.772l-3.991,-0.900l2.188,-0.901l-3.863,0.258zM166.261,14.632l3.604,0.644l-3.347,0.515l-4.505,0l0.128,-0.387l2.704,-0.901l-1.416,-0.129zM205.137,40.636l2.703,1.158l-1.673,0.902l-3.605,-1.031l-2.188,0.516l-3.090,-0.387l1.803,-1.673l1.931,-1.159l2.059,0.643l-2.060,-1.031zM315.458,88.781l-1.417,1.673l-1.802,2.317l1.802,-0.900l1.802,0.643l-1.030,0.902l2.447,0.772l1.287,-0.772l2.574,0.901l-0.772,1.930l1.931,-0.386l0.257,1.417l0.901,1.673l-1.158,2.317l-1.288,0.129l-1.673,-0.515l0.515,-2.189l-0.772,-0.386l-3.089,2.317l-1.545,0l1.801,-1.287l-2.574,-0.644l-2.832,0.130l-5.278,-0.130l-0.386,-0.772l1.674,-0.901l-1.159,-0.773l2.317,-1.673l2.702,-4.248l1.675,-1.545l2.317,-0.901l1.288,0.129l0.515,-0.772zM239.25,51.578l2.960,0.901l3.090,0.901l0.258,1.287l1.930,-0.257l1.931,0.900l-2.316,0.903l-4.249,-0.774l-1.544,-1.158l-2.575,1.416l-3.861,1.416l-0.902,-1.544l-3.733,0.257l2.317,-1.416l0.386,-2.060l0.901,-2.445l1.931,0.257l0.515,1.158l1.417,-0.514l-1.544,-0.772zM218.525,6.393l7.080,-0.643l5.278,-0.386l5.921,-0.130l3.604,-1.415l11.199,-0.773l9.656,0.129l7.723,-0.386l18.924,0.514l10.555,1.802l-6.565,1.159l-6.437,0.515l-2.445,0.644l5.792,0l-10.684,2.317l-10.169,2.704l-9.913,0.900l3.734,0.258l-1.931,0.515l2.317,1.287l-6.694,1.674l-1.287,1.159l-3.863,0.772l0.387,0.643l3.604,0.258l0,0.644l-6.049,1.158l-7.081,-0.643l-7.981,0.386l-9.012,-0.515l-0.385,-1.288l5.020,-0.643l-1.158,-0.902l2.187,-0.900l6.437,0.900l-7.981,-2.316l2.188,-1.030l4.763,-0.644l0.773,-0.901l-3.862,-1.030l-1.159,-1.416l7.338,0.129l6.437,-0.644l-15.577,-0.128l-4.762,-1.031l-5.407,-1.802l0.515,0.901zM253.024,32.01l2.574,-1.030l5.922,1.417l3.734,1.287l0.385,1.158l5.020,-0.643l2.833,1.674l6.437,1.158l2.317,1.030l2.574,2.575l-4.891,1.158l6.307,1.803l4.248,0.643l3.862,2.446l4.248,0.128l-0.773,1.932l-4.763,3.089l-3.347,-1.158l-4.248,-2.575l-3.476,0.386l-0.257,1.545l2.832,1.545l3.605,1.287l1.159,0.644l1.673,2.704l-0.902,1.930l-3.347,-0.772l-6.821,-2.061l3.862,2.318l2.702,1.545l0.516,1.030l-7.339,-1.159l-5.793,-1.545l-3.218,-1.286l0.903,-0.774l-3.991,-1.415l-3.992,-1.287l0.129,0.772l-7.853,0.386l-2.188,-0.901l1.675,-1.931l5.149,-0.129l5.535,-0.257l-0.901,-1.031l0.901,-1.287l3.475,-2.702l-0.772,-1.159l-1.030,-0.901l-4.120,-1.288l-5.406,-0.901l1.674,-0.772l-2.832,-1.674l-2.317,-0.129l-2.189,-0.900l-1.416,0.772l-4.891,0.385l-9.784,-0.643l-5.664,-0.772l-4.377,-0.386l-2.317,-0.901l2.832,-1.287l-3.862,0l-0.772,-2.704l2.059,-2.446l2.704,-1.030l6.951,-0.772l-1.931,1.802l2.188,1.674l2.447,-2.189l6.823,-1.159l4.633,2.832l-0.386,1.675l-5.278,0.774zM210.672,27.248l5.536,0.128l5.148,0.645l-3.989,2.445l-3.219,0.514l-2.833,1.932l-3.088,-0.128l-1.675,-2.318l0,-1.287l1.417,-1.158l-2.703,0.773zM206.552,9.869l1.931,-0.901l2.704,-0.128l-1.159,-0.644l6.308,-0.129l3.348,1.416l8.753,1.673l5.664,2.060l-3.733,0.772l-5.021,2.060l-4.763,0.258l-5.535,-0.386l-2.961,-1.031l0.129,-1.030l2.059,-0.772l-4.891,0.129l-2.961,-0.902l-1.673,-1.287l-1.801,1.158zM194.71,31.109l-2.832,-2.574l2.961,-0.514l3.218,0.643l4.119,-0.258l0.515,1.030l-1.544,0.901l3.604,1.803l-0.644,1.416l-3.862,1.415l-2.574,-0.257l-1.803,-1.030l-5.535,-1.544l-1.673,-1.160l-6.050,-0.129zM178.233,30.08l3.089,1.158l1.674,2.574l0.772,1.932l4.634,1.287l4.764,1.287l-0.258,1.159l-4.377,0.257l1.673,1.030l-0.900,1.030l-6.436,0l-1.804,-0.644l-4.376,-0.386l-5.278,1.545l-6.565,0.644l-3.604,0.128l-2.704,-2.059l-6.050,-0.386l-4.505,-1.674l2.960,-0.772l4.119,-0.386l3.863,0.129l3.475,-0.516l-5.149,-0.644l-5.793,0.258l-3.862,-0.129l-1.416,-0.901l6.308,-1.159l-4.249,0.129l-4.634,-0.772l2.189,-2.059l1.932,-1.031l7.208,-1.673l2.703,0.515l-1.287,1.287l5.922,-0.772l3.861,1.287l2.961,-1.287l2.446,0.901l2.189,2.574l1.416,-1.157l-1.932,-2.704l2.446,-0.387l-2.575,-0.387zM174.757,22.613l2.446,-0.385l2.832,0.128l0.385,1.287l-1.543,1.287l-9.141,0.387l-6.822,1.159l-4.120,0.128l-0.257,-0.901l5.535,-1.159l-12.228,0.257l-3.734,-0.514l3.734,-2.575l2.445,-0.772l7.596,0.901l4.891,1.673l4.634,0.129l-3.862,-2.574l2.446,-1.030l1.803,0.643l0.900,1.287l-2.060,-0.644zM134.336,21.969l4.506,-2.059l5.535,-1.803l4.120,0.130l3.732,-0.387l-0.385,2.060l-2.060,0.901l-2.575,0.129l-5.020,1.158l-4.248,0.386l3.605,0.515zM137.812,26.476l3.862,0.514l6.823,0.129l2.703,0.772l2.832,1.158l-3.347,0.644l-6.694,1.674l-3.991,2.060l-0.643,1.287l-5.664,1.287l-1.802,-1.030l-5.922,-1.544l0.129,-0.902l2.188,-2.317l2.060,-1.159l-1.673,-2.188l-9.139,0.385zM107.69,81.443l2.574,-0.256l-0.773,3.088l2.318,2.188l-1.030,0l-1.674,-1.287l-0.900,-1.287l-1.416,-0.772l-0.516,-1.158l0.130,-0.902l-1.287,-0.386zM199.73,20.682l1.288,0.901l0,1.417l-1.416,1.801l-3.218,0.387l-2.961,-0.387l0.129,-1.545l-4.507,0.130l-0.128,-2.060l2.961,0.129l3.990,-0.901l-3.862,-0.128zM181.064,13.344l5.279,0.387l7.337,0.901l2.060,1.288l1.030,1.158l-4.377,-0.258l-4.506,-0.900l-5.922,-0.129l2.576,-0.773l-3.348,-0.644l0.129,1.030zM127.385,92.386l1.288,1.287l2.702,1.158l1.160,1.416l-1.417,0.387l-4.376,-1.159l-0.773,-1.029l-2.446,-0.903l-0.515,-0.772l-2.703,-0.514l-1.030,-1.416l0.129,-0.643l2.832,0.643l1.673,0.386l2.575,0.257l-0.901,-0.902zM315.071,83.502l0.129,2.961l-1.931,1.031l-1.932,0.901l-4.376,1.030l-3.476,2.188l-4.505,0.386l-5.793,-0.515l-3.990,0l-2.832,0.129l-2.318,1.930l-3.346,1.288l-3.863,3.476l-3.089,2.575l2.189,-0.515l4.376,-3.476l5.664,-2.317l3.991,-0.257l2.445,1.286l-2.573,1.932l0.772,2.832l0.901,2.060l3.476,1.287l4.504,-0.387l2.704,-2.960l0.258,1.931l1.673,1.029l-3.347,1.674l-5.921,1.674l-2.703,1.029l-2.961,1.931l-2.060,-0.128l-0.128,-2.317l4.633,-2.189l-4.247,0l-2.961,0.387l-1.803,-1.545l0,-3.605l-1.157,-0.772l-1.804,0.386l-0.900,-0.644l-2.060,1.932l-0.901,2.187l-0.902,1.159l-1.158,0.515l-0.901,0l-0.258,0.772l-4.891,0l-4.120,0l-1.287,0.516l-2.703,1.801l-0.387,0.258l-0.256,0.258l-0.387,0.386l-0.257,0.515l-0.643,0l-0.516,0l-0.901,0l-0.772,-0.128l-0.902,0l-0.643,0l-0.772,0.128l-0.258,0l-0.515,0.257l-0.386,0.129l0.257,0.386l0,0.129l0.387,0.772l0,0.258l0,0.128l-0.258,0.130l-0.386,0.128l-0.772,0.258l-0.902,0.257l-0.643,0.257l-0.643,0.258l-0.644,0.129l-0.128,0l-0.387,0l-0.900,0.128l-0.645,0.129l-0.644,0.258l-0.643,0.385l-0.644,0.258l-0.644,0.257l-0.643,0.258l-0.644,0l-0.514,-0.129l-0.387,-0.257l-0.257,-0.257l0,-0.130l0,-0.257l0.644,-0.900l1.286,-1.546l0,-0.128l0,-0.129l0.259,-0.515l0.385,-0.515l0.129,-0.258l-0.258,-0.772l-0.129,-0.515l0,-0.386l-0.127,-0.515l-0.130,-0.515l-0.129,-0.515l-0.128,-0.386l-0.130,-0.515l0,-0.257l-0.128,-0.387l-0.515,-0.386l-0.514,-0.128l-0.644,-0.258l-0.643,-0.257l-0.516,-0.257l0.386,-0.515l0,-0.129l-0.128,0l-0.258,-0.258l-0.128,0l-0.258,0.128l-0.386,-0.128l-0.258,-0.129l-0.128,0l-0.129,-0.257l-0.129,0l0,-0.258l0,-0.128l0,-0.129l0,-0.129l-0.257,0l-0.258,0.258l-0.772,0l0.128,-0.258l-0.257,0l-0.386,-0.257l-0.128,-0.387l-0.130,-0.386l-0.514,-0.257l-0.515,-0.129l-0.515,-0.258l-0.515,-0.257l-0.515,-0.128l-0.515,-0.258l-0.515,-0.258l-0.514,-0.128l-0.258,-0.128l-0.387,-0.130l-0.643,-0.257l-0.772,-0.386l-0.772,-0.258l-0.773,-0.257l-0.386,-0.257l-0.258,0l-0.386,-0.258l-0.644,-0.129l-0.643,0.129l-0.772,0.258l-0.387,0.128l-0.386,0.129l-0.258,0.129l-0.515,0l-0.385,0l-3.219,-0.773l-2.188,0.387l-2.703,-0.773l-2.704,-0.515l-1.930,-0.129l-0.772,-0.514l-0.516,-1.417l-0.901,0l0,1.030l-5.536,0l-9.139,0l-9.397,0l-32.182,0l-2.704,0l-15.962,0l-5.149,-2.574l-1.931,-1.287l-4.891,-1.030l-1.545,-2.446l0.385,-1.673l-3.474,-1.031l-0.387,-2.188l-3.348,-2.061l0,-1.287l1.417,-1.287l0,-1.802l-4.634,-1.673l-2.703,-3.090l-1.674,-1.930l-2.446,-1.159l-1.802,-1.159l-1.545,-1.417l-2.703,0.902l-2.575,1.545l-2.445,-1.803l-1.802,-1.157l-2.704,-0.774l-2.574,0l0,-15.446l0,-9.913l5.019,0.644l4.249,1.286l2.832,0.258l2.317,-1.158l3.347,-0.901l3.990,0.385l3.992,-1.157l4.376,-0.644l1.931,1.029l1.931,-0.644l0.643,-1.158l1.803,0.257l4.634,2.447l3.604,-1.931l0.387,2.059l3.218,-0.387l1.029,-0.772l3.219,0.129l4.120,1.159l6.307,0.901l3.733,0.515l2.704,-0.129l3.604,1.288l-3.734,1.415l4.763,0.515l7.338,-0.257l2.317,-0.515l2.832,1.544l2.960,-1.287l-2.832,-1.158l1.803,-0.901l3.218,-0.129l2.189,-0.258l2.188,0.644l2.703,1.417l2.961,-0.258l4.763,1.287l4.248,-0.386l3.862,0l-0.258,-1.673l2.446,-0.515l4.120,0.900l0,2.576l1.673,-2.060l2.188,0l1.288,-2.704l-2.962,-1.673l-3.088,-1.030l0.128,-2.961l3.218,-2.060l3.605,0.515l2.703,1.158l3.604,3.091l-2.317,1.287l5.020,0.514l0,2.832l3.605,-2.189l3.218,1.804l-0.900,1.930l2.702,1.802l2.704,-1.931l2.060,-2.317l0.129,-2.960l3.861,0.257l3.862,0.387l3.733,1.287l0.128,1.416l-2.059,1.416l1.931,1.416l-0.386,1.286l-5.277,1.932l-3.734,0.386l-2.704,-0.772l-0.901,1.287l-2.574,2.317l-0.773,1.159l-3.089,1.802l-3.862,0.257l-2.188,1.031l-0.130,1.802l-3.089,0.386l-3.347,2.188l-2.961,2.961l-1.028,2.188l-0.130,3.090l3.991,0.386l1.159,2.576l1.287,2.059l3.733,-0.515l5.020,1.159l2.704,1.029l1.930,1.288l3.347,0.643l2.832,1.158l4.507,0.129l2.959,0.258l-0.514,2.446l0.901,2.702l1.931,2.961l3.991,2.576l2.059,-0.902l1.545,-2.703l-1.416,-4.247l-1.931,-1.545l4.247,-1.159l3.090,-1.931l1.545,-1.931l-0.257,-1.803l-1.802,-2.188l-3.348,-2.060l3.219,-2.832l-1.158,-2.445l-0.902,-4.249l1.931,-0.514l4.506,0.643l2.832,0.257l2.188,-0.644l2.575,0.902l3.347,1.545l0.772,1.029l4.763,0.259l0,2.187l0.901,3.476l2.446,0.386l1.931,1.545l3.862,-1.416l2.574,-2.961l1.802,-1.287l2.060,2.446l3.605,3.347l2.960,3.218l-1.159,1.802l3.604,1.417l2.446,1.545l4.249,0.772l1.802,0.772l1.030,2.317l2.060,0.387l-1.158,-1.028z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CentralAfricanRepublic",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z";
}, function($ctx1) {$ctx1.fill(self,"CentralAfricanRepublic",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "CentralAfricanRepublic\x0a\x09^ 'M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chad",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z";
}, function($ctx1) {$ctx1.fill(self,"Chad",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Chad\x0a\x09^ 'M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chile",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M266.669,369.286l-3.347,-1.544l-0.772,-1.675l0.644,-1.544l-1.288,-1.802l-0.386,-4.634l1.158,-2.574l2.832,-2.061l-3.990,-0.772l2.445,-2.446l1.030,-4.505l2.962,1.031l1.416,-5.666l-1.802,-0.642l-0.902,3.345l-1.674,-0.386l0.902,-3.862l0.901,-5.020l1.159,-1.801l-0.773,-2.576l-0.129,-3.090l1.030,-0.128l1.673,-4.249l1.932,-4.376l1.158,-3.991l-0.643,-3.990l0.772,-2.317l-0.387,-3.347l1.674,-3.218l0.386,-5.278l0.901,-5.535l0.902,-6.051l-0.259,-4.378l-0.513,-3.862l1.415,-0.644l0.644,-1.417l1.286,1.932l0.387,1.933l1.417,1.157l-0.773,2.576l1.417,2.960l1.028,3.733l1.932,-0.386l0.386,0.772l-0.902,2.704l-2.960,1.415l0,4.378l-0.515,0.900l0.772,1.031l-1.802,1.673l-1.802,2.574l-1.030,2.446l0.257,2.575l-1.672,2.831l1.287,4.636l0.772,0.514l-0.129,2.447l-1.415,2.702l0,2.189l-2.060,1.802l0,2.446l0.900,2.574l-1.673,1.030l-0.773,2.447l-0.513,2.703l0.385,3.347l-1.030,0.516l0.645,3.089l1.157,1.030l-0.901,1.158l1.287,0.514l0.258,1.030l-1.158,0.515l0.257,1.545l-0.900,3.605l-1.546,2.316l0.386,1.288l-0.901,1.674l-2.060,1.288l0.258,2.831l0.902,0.902l1.801,-0.129l0,2.060l1.160,1.545l6.436,0.385l2.574,0.387l-2.446,0l-1.288,0.643l-2.444,1.029l-0.387,2.447l-1.159,0.129l-3.090,-0.902l3.089,1.931zM283.274,374.822l1.546,0l-0.902,1.157l-2.316,0.774l-1.288,0l-1.544,-0.256l-1.932,-0.774l-2.831,-0.386l-3.476,-1.545l-2.704,-1.416l-3.732,-3.090l2.188,0.645l3.862,1.802l3.476,0.901l1.416,-1.159l0.901,-1.932l2.445,-1.029l1.931,0.258l0.129,0.127l-0.129,5.923l-2.960,0z";
}, function($ctx1) {$ctx1.fill(self,"Chile",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Chile\x0a\x09^ 'M266.669,369.286l-3.347,-1.544l-0.772,-1.675l0.644,-1.544l-1.288,-1.802l-0.386,-4.634l1.158,-2.574l2.832,-2.061l-3.990,-0.772l2.445,-2.446l1.030,-4.505l2.962,1.031l1.416,-5.666l-1.802,-0.642l-0.902,3.345l-1.674,-0.386l0.902,-3.862l0.901,-5.020l1.159,-1.801l-0.773,-2.576l-0.129,-3.090l1.030,-0.128l1.673,-4.249l1.932,-4.376l1.158,-3.991l-0.643,-3.990l0.772,-2.317l-0.387,-3.347l1.674,-3.218l0.386,-5.278l0.901,-5.535l0.902,-6.051l-0.259,-4.378l-0.513,-3.862l1.415,-0.644l0.644,-1.417l1.286,1.932l0.387,1.933l1.417,1.157l-0.773,2.576l1.417,2.960l1.028,3.733l1.932,-0.386l0.386,0.772l-0.902,2.704l-2.960,1.415l0,4.378l-0.515,0.900l0.772,1.031l-1.802,1.673l-1.802,2.574l-1.030,2.446l0.257,2.575l-1.672,2.831l1.287,4.636l0.772,0.514l-0.129,2.447l-1.415,2.702l0,2.189l-2.060,1.802l0,2.446l0.900,2.574l-1.673,1.030l-0.773,2.447l-0.513,2.703l0.385,3.347l-1.030,0.516l0.645,3.089l1.157,1.030l-0.901,1.158l1.287,0.514l0.258,1.030l-1.158,0.515l0.257,1.545l-0.900,3.605l-1.546,2.316l0.386,1.288l-0.901,1.674l-2.060,1.288l0.258,2.831l0.902,0.902l1.801,-0.129l0,2.060l1.160,1.545l6.436,0.385l2.574,0.387l-2.446,0l-1.288,0.643l-2.444,1.029l-0.387,2.447l-1.159,0.129l-3.090,-0.902l3.089,1.931zM283.274,374.822l1.546,0l-0.902,1.157l-2.316,0.774l-1.288,0l-1.544,-0.256l-1.932,-0.774l-2.831,-0.386l-3.476,-1.545l-2.704,-1.416l-3.732,-3.090l2.188,0.645l3.862,1.802l3.476,0.901l1.416,-1.159l0.901,-1.932l2.445,-1.029l1.931,0.258l0.129,0.127l-0.129,5.923l-2.960,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "China",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M760.085,177.992l-2.188,-0.902l0,-2.317l1.288,-1.158l2.961,-0.773l1.544,0l0.645,1.031l-1.289,1.287l-0.514,1.545l2.447,-1.287zM712.198,152.117l-1.160,-0.644l-1.416,-0.128l-1.930,-0.645l-1.414,0.773l-1.804,1.931l-0.258,-2.059l-1.543,0.514l-3.221,-0.257l-2.959,-0.644l-2.189,-1.158l-2.188,-0.515l-0.900,-1.288l-1.545,-0.386l-2.703,-1.802l-2.061,-0.772l-1.158,0.643l-3.732,-1.930l-2.704,-1.674l-0.773,-2.960l1.932,0.385l0.129,-1.416l-1.030,-1.416l0.256,-2.189l-2.961,-3.089l-4.375,-1.159l-0.773,-2.059l-2.059,-1.287l-0.387,-0.773l-0.515,-1.416l0.129,-1.158l-1.674,-0.515l-0.772,0.256l-0.773,-2.573l0.773,-0.516l-0.386,-0.643l2.574,-1.288l1.930,-0.514l2.834,0.257l1.029,-1.673l3.476,-0.258l0.901,-1.158l4.248,-1.416l0.387,-0.644l-0.260,-1.545l1.931,-0.643l-2.445,-4.635l5.279,-1.159l1.415,-0.514l1.931,-4.892l5.408,0.901l1.416,-1.288l0.127,-2.704l2.317,-0.128l2.060,-1.801l1.030,-0.258l0.644,1.802l2.317,1.545l3.863,0.901l1.803,2.188l-1.032,3.219l1.032,1.158l3.216,0.387l3.606,0.385l3.217,1.674l1.673,0.386l1.159,2.446l1.672,1.545l2.962,0l5.536,0.644l3.605,-0.386l2.701,0.386l3.862,1.673l3.347,0l1.160,0.773l3.090,-1.416l4.375,-0.902l4.121,-0.128l3.088,-1.030l1.932,-1.416l1.931,-0.902l-0.515,-0.900l-0.774,-1.030l1.416,-1.674l1.416,0.257l2.832,0.516l2.704,-1.417l4.119,-1.029l1.931,-1.803l1.932,-0.772l3.861,-0.386l2.190,0.258l0.258,-0.902l-2.448,-1.931l-2.189,-0.772l-2.059,0.901l-2.701,-0.386l-1.420,0.386l-0.771,-1.158l1.931,-2.704l1.287,-1.931l3.219,0.900l3.862,-1.672l0,-1.159l2.447,-2.832l1.414,-0.901l0,-1.416l-1.545,-0.644l2.316,-1.417l3.350,-0.513l3.475,0l4.119,0.772l2.316,1.030l1.674,2.703l1.031,1.158l0.901,1.674l1.029,2.574l4.635,0.902l3.218,1.930l1.159,2.447l3.990,0l2.447,-1.030l4.375,-0.774l-1.414,2.448l-1.031,1.029l-0.901,2.832l-1.802,2.704l-3.346,-0.516l-2.318,0.901l0.771,2.317l-0.385,3.219l-1.416,0.129l0,1.288l-1.674,-1.546l-1.029,1.546l-4.248,1.157l0.387,1.417l-2.319,-0.130l-1.287,-0.900l-1.802,1.930l-2.961,1.546l-2.190,1.673l-3.732,0.772l-2.059,1.288l-2.832,0.772l1.416,-1.288l-0.513,-1.028l2.058,-1.803l-1.418,-1.417l-2.314,0.902l-3.090,1.931l-1.674,1.673l-2.576,0.129l-1.414,1.287l1.414,1.802l2.189,0.387l0.129,1.287l2.061,0.773l3.088,-1.931l2.447,1.029l1.672,0.129l0.387,1.416l-3.733,0.772l-1.287,1.416l-2.574,1.288l-1.418,1.931l2.834,1.417l1.158,2.702l1.545,2.446l1.930,2.060l-0.129,2.059l-1.674,0.773l0.644,1.416l1.545,0.773l-0.386,2.187l-0.643,2.189l-1.545,0.258l-1.932,2.832l-2.189,3.604l-2.443,3.219l-3.735,2.446l-3.732,2.317l-3.090,0.258l-1.674,1.157l-0.900,-0.772l-1.545,1.287l-3.733,1.416l-2.832,0.386l-0.900,2.833l-1.547,0.129l-0.642,-1.931l0.642,-1.031l-3.605,-0.900l-1.285,0.387l-2.704,-0.645l-1.289,-1.029l0.387,-1.545l-2.445,-0.515l-1.287,-1.030l-2.317,1.416l-2.576,0.257l-2.187,0l-1.416,0.644l-1.416,0.386l0.386,3.089l-1.418,0l-0.256,-0.643l-0.128,-1.158l-1.930,0.773l-1.160,-0.387l-2.059,-1.030l0.772,-2.317l-1.674,-0.515l-0.645,-2.446l-2.832,0.386l0.387,-3.089l2.445,-2.318l0.131,-2.188l0,-2.060l-1.289,-0.644l-0.900,-1.545l-1.545,0.130l-2.832,-0.386l0.900,-1.159l-1.285,-1.674l-1.934,1.158l-2.314,-0.643l-3.092,1.674l-2.445,2.059l2.188,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"China",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "China\x0a\x09^ 'M760.085,177.992l-2.188,-0.902l0,-2.317l1.288,-1.158l2.961,-0.773l1.544,0l0.645,1.031l-1.289,1.287l-0.514,1.545l2.447,-1.287zM712.198,152.117l-1.160,-0.644l-1.416,-0.128l-1.930,-0.645l-1.414,0.773l-1.804,1.931l-0.258,-2.059l-1.543,0.514l-3.221,-0.257l-2.959,-0.644l-2.189,-1.158l-2.188,-0.515l-0.900,-1.288l-1.545,-0.386l-2.703,-1.802l-2.061,-0.772l-1.158,0.643l-3.732,-1.930l-2.704,-1.674l-0.773,-2.960l1.932,0.385l0.129,-1.416l-1.030,-1.416l0.256,-2.189l-2.961,-3.089l-4.375,-1.159l-0.773,-2.059l-2.059,-1.287l-0.387,-0.773l-0.515,-1.416l0.129,-1.158l-1.674,-0.515l-0.772,0.256l-0.773,-2.573l0.773,-0.516l-0.386,-0.643l2.574,-1.288l1.930,-0.514l2.834,0.257l1.029,-1.673l3.476,-0.258l0.901,-1.158l4.248,-1.416l0.387,-0.644l-0.260,-1.545l1.931,-0.643l-2.445,-4.635l5.279,-1.159l1.415,-0.514l1.931,-4.892l5.408,0.901l1.416,-1.288l0.127,-2.704l2.317,-0.128l2.060,-1.801l1.030,-0.258l0.644,1.802l2.317,1.545l3.863,0.901l1.803,2.188l-1.032,3.219l1.032,1.158l3.216,0.387l3.606,0.385l3.217,1.674l1.673,0.386l1.159,2.446l1.672,1.545l2.962,0l5.536,0.644l3.605,-0.386l2.701,0.386l3.862,1.673l3.347,0l1.160,0.773l3.090,-1.416l4.375,-0.902l4.121,-0.128l3.088,-1.030l1.932,-1.416l1.931,-0.902l-0.515,-0.900l-0.774,-1.030l1.416,-1.674l1.416,0.257l2.832,0.516l2.704,-1.417l4.119,-1.029l1.931,-1.803l1.932,-0.772l3.861,-0.386l2.190,0.258l0.258,-0.902l-2.448,-1.931l-2.189,-0.772l-2.059,0.901l-2.701,-0.386l-1.420,0.386l-0.771,-1.158l1.931,-2.704l1.287,-1.931l3.219,0.900l3.862,-1.672l0,-1.159l2.447,-2.832l1.414,-0.901l0,-1.416l-1.545,-0.644l2.316,-1.417l3.350,-0.513l3.475,0l4.119,0.772l2.316,1.030l1.674,2.703l1.031,1.158l0.901,1.674l1.029,2.574l4.635,0.902l3.218,1.930l1.159,2.447l3.990,0l2.447,-1.030l4.375,-0.774l-1.414,2.448l-1.031,1.029l-0.901,2.832l-1.802,2.704l-3.346,-0.516l-2.318,0.901l0.771,2.317l-0.385,3.219l-1.416,0.129l0,1.288l-1.674,-1.546l-1.029,1.546l-4.248,1.157l0.387,1.417l-2.319,-0.130l-1.287,-0.900l-1.802,1.930l-2.961,1.546l-2.190,1.673l-3.732,0.772l-2.059,1.288l-2.832,0.772l1.416,-1.288l-0.513,-1.028l2.058,-1.803l-1.418,-1.417l-2.314,0.902l-3.090,1.931l-1.674,1.673l-2.576,0.129l-1.414,1.287l1.414,1.802l2.189,0.387l0.129,1.287l2.061,0.773l3.088,-1.931l2.447,1.029l1.672,0.129l0.387,1.416l-3.733,0.772l-1.287,1.416l-2.574,1.288l-1.418,1.931l2.834,1.417l1.158,2.702l1.545,2.446l1.930,2.060l-0.129,2.059l-1.674,0.773l0.644,1.416l1.545,0.773l-0.386,2.187l-0.643,2.189l-1.545,0.258l-1.932,2.832l-2.189,3.604l-2.443,3.219l-3.735,2.446l-3.732,2.317l-3.090,0.258l-1.674,1.157l-0.900,-0.772l-1.545,1.287l-3.733,1.416l-2.832,0.386l-0.900,2.833l-1.547,0.129l-0.642,-1.931l0.642,-1.031l-3.605,-0.900l-1.285,0.387l-2.704,-0.645l-1.289,-1.029l0.387,-1.545l-2.445,-0.515l-1.287,-1.030l-2.317,1.416l-2.576,0.257l-2.187,0l-1.416,0.644l-1.416,0.386l0.386,3.089l-1.418,0l-0.256,-0.643l-0.128,-1.158l-1.930,0.773l-1.160,-0.387l-2.059,-1.030l0.772,-2.317l-1.674,-0.515l-0.645,-2.446l-2.832,0.386l0.387,-3.089l2.445,-2.318l0.131,-2.188l0,-2.060l-1.289,-0.644l-0.900,-1.545l-1.545,0.130l-2.832,-0.386l0.900,-1.159l-1.285,-1.674l-1.934,1.158l-2.314,-0.643l-3.092,1.674l-2.445,2.059l2.188,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Colombia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M262.164,227.425l-1.159,-0.644l-1.287,-0.901l-0.772,0.386l-2.318,-0.386l-0.643,-1.157l-0.515,0.127l-2.704,-1.544l-0.386,-0.902l1.031,-0.129l-0.130,-1.416l0.644,-1.029l1.417,-0.129l1.029,-1.674l1.030,-1.416l-0.901,-0.644l0.515,-1.545l-0.644,-2.445l0.515,-0.772l-0.386,-2.318l-1.030,-1.416l0.258,-1.287l0.900,0.257l0.515,-0.901l-0.643,-1.544l0.386,-0.387l1.416,0.129l1.931,-1.931l1.158,-0.258l0,-0.901l0.515,-2.317l1.545,-1.158l1.674,-0.128l0.257,-0.516l2.059,0.257l2.189,-1.415l1.029,-0.644l1.288,-1.288l0.901,0.258l0.773,0.644l-0.516,0.901l-1.802,0.514l-0.644,1.289l-1.029,0.771l-0.772,1.030l-0.387,1.931l-0.772,1.545l1.415,0.129l0.387,1.287l0.644,0.645l0.128,1.028l-0.257,1.030l0,0.516l0.772,0.257l0.644,0.901l3.475,-0.258l1.546,0.387l1.802,2.317l1.158,-0.258l1.931,0.129l1.545,-0.386l0.902,0.515l-0.517,1.416l-0.513,0.901l-0.259,1.931l0.516,1.802l0.773,0.772l0.127,0.644l-1.416,1.287l1.031,0.644l0.772,0.901l0.773,2.703l-0.516,0.387l-0.515,-1.545l-0.773,-0.902l-0.900,0.902l-5.278,0l0.129,1.674l1.545,0.258l-0.129,1.029l-0.515,-0.258l-1.545,0.387l0,1.931l1.159,1.030l0.515,1.544l-0.129,1.159l-1.159,7.338l-1.416,-1.417l-0.772,0l1.802,-2.704l-2.060,-1.287l-1.673,0.259l-1.030,-0.516l-1.416,0.644l-2.060,-0.257l-1.544,-2.832l-1.288,-0.644l-0.772,-1.287l-1.802,-1.288l0.772,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Colombia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Colombia\x0a\x09^ 'M262.164,227.425l-1.159,-0.644l-1.287,-0.901l-0.772,0.386l-2.318,-0.386l-0.643,-1.157l-0.515,0.127l-2.704,-1.544l-0.386,-0.902l1.031,-0.129l-0.130,-1.416l0.644,-1.029l1.417,-0.129l1.029,-1.674l1.030,-1.416l-0.901,-0.644l0.515,-1.545l-0.644,-2.445l0.515,-0.772l-0.386,-2.318l-1.030,-1.416l0.258,-1.287l0.900,0.257l0.515,-0.901l-0.643,-1.544l0.386,-0.387l1.416,0.129l1.931,-1.931l1.158,-0.258l0,-0.901l0.515,-2.317l1.545,-1.158l1.674,-0.128l0.257,-0.516l2.059,0.257l2.189,-1.415l1.029,-0.644l1.288,-1.288l0.901,0.258l0.773,0.644l-0.516,0.901l-1.802,0.514l-0.644,1.289l-1.029,0.771l-0.772,1.030l-0.387,1.931l-0.772,1.545l1.415,0.129l0.387,1.287l0.644,0.645l0.128,1.028l-0.257,1.030l0,0.516l0.772,0.257l0.644,0.901l3.475,-0.258l1.546,0.387l1.802,2.317l1.158,-0.258l1.931,0.129l1.545,-0.386l0.902,0.515l-0.517,1.416l-0.513,0.901l-0.259,1.931l0.516,1.802l0.773,0.772l0.127,0.644l-1.416,1.287l1.031,0.644l0.772,0.901l0.773,2.703l-0.516,0.387l-0.515,-1.545l-0.773,-0.902l-0.900,0.902l-5.278,0l0.129,1.674l1.545,0.258l-0.129,1.029l-0.515,-0.258l-1.545,0.387l0,1.931l1.159,1.030l0.515,1.544l-0.129,1.159l-1.159,7.338l-1.416,-1.417l-0.772,0l1.802,-2.704l-2.060,-1.287l-1.673,0.259l-1.030,-0.516l-1.416,0.644l-2.060,-0.257l-1.544,-2.832l-1.288,-0.644l-0.772,-1.287l-1.802,-1.288l0.772,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Congo",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Congo",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Congo\x0a\x09^ 'M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CostaRica",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M241.695,204.768l-1.415,-0.515l-0.515,-0.644l0.257,-0.386l-0.128,-0.644l-0.644,-0.643l-1.159,-0.514l-0.901,-0.387l-0.128,-0.773l-0.773,-0.515l0.257,0.901l-0.643,0.644l-0.515,-0.772l-0.901,-0.258l-0.386,-0.644l0,-0.772l0.386,-0.901l-0.772,-0.257l0.644,-0.643l0.386,-0.259l1.801,0.644l0.644,-0.257l0.773,0.128l0.515,0.644l0.772,0.128l0.644,-0.514l0.644,1.416l1.029,1.030l1.287,1.157l-1.029,0.260l0,1.157l0.514,0.387l-0.385,0.257l0.128,0.515l-0.257,0.515l0.130,-0.515z";
}, function($ctx1) {$ctx1.fill(self,"CostaRica",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "CostaRica\x0a\x09^ 'M241.695,204.768l-1.415,-0.515l-0.515,-0.644l0.257,-0.386l-0.128,-0.644l-0.644,-0.643l-1.159,-0.514l-0.901,-0.387l-0.128,-0.773l-0.773,-0.515l0.257,0.901l-0.643,0.644l-0.515,-0.772l-0.901,-0.258l-0.386,-0.644l0,-0.772l0.386,-0.901l-0.772,-0.257l0.644,-0.643l0.386,-0.259l1.801,0.644l0.644,-0.257l0.773,0.128l0.515,0.644l0.772,0.128l0.644,-0.514l0.644,1.416l1.029,1.030l1.287,1.157l-1.029,0.260l0,1.157l0.514,0.387l-0.385,0.257l0.128,0.515l-0.257,0.515l0.130,-0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Croatia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,103.327l0.643,1.031l0.773,0.772l-1.030,1.029l-1.160,-0.643l-1.931,0l-2.316,-0.386l-1.159,0l-0.643,0.643l-1.031,-0.643l-0.516,1.159l1.290,1.158l0.643,0.901l1.286,1.031l0.901,0.514l1.031,1.159l2.445,1.030l-0.258,0.514l-2.572,-1.030l-1.547,-1.029l-2.444,-0.773l-2.318,-1.931l0.514,-0.257l-1.157,-1.159l-0.130,-0.901l-1.674,-0.386l-0.898,1.159l-0.774,-0.901l0.128,-0.902l0.129,-0.128l1.802,0.128l0.516,-0.386l0.901,0.386l1.030,0l0,-0.772l0.901,-0.257l0.255,-1.030l2.190,-0.773l0.902,0.386l1.930,1.159l2.316,0.515l-1.032,0.387zM502.372,101.654l2.315,0.258l1.289,-0.644l2.446,0l0.515,-0.515l0.385,0l0.515,0.901l-2.190,0.773l-0.255,1.030l-0.901,0.257l0,0.772l-1.030,0l-0.901,-0.386l-0.516,0.386l-1.802,-0.128l0.517,-0.258l-0.646,-1.029l-0.259,1.417z";
}, function($ctx1) {$ctx1.fill(self,"Croatia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Croatia\x0a\x09^ 'M516.017,103.327l0.643,1.031l0.773,0.772l-1.030,1.029l-1.160,-0.643l-1.931,0l-2.316,-0.386l-1.159,0l-0.643,0.643l-1.031,-0.643l-0.516,1.159l1.290,1.158l0.643,0.901l1.286,1.031l0.901,0.514l1.031,1.159l2.445,1.030l-0.258,0.514l-2.572,-1.030l-1.547,-1.029l-2.444,-0.773l-2.318,-1.931l0.514,-0.257l-1.157,-1.159l-0.130,-0.901l-1.674,-0.386l-0.898,1.159l-0.774,-0.901l0.128,-0.902l0.129,-0.128l1.802,0.128l0.516,-0.386l0.901,0.386l1.030,0l0,-0.772l0.901,-0.257l0.255,-1.030l2.190,-0.773l0.902,0.386l1.930,1.159l2.316,0.515l-1.032,0.387zM502.372,101.654l2.315,0.258l1.289,-0.644l2.446,0l0.515,-0.515l0.385,0l0.515,0.901l-2.190,0.773l-0.255,1.030l-0.901,0.257l0,0.772l-1.030,0l-0.901,-0.386l-0.516,0.386l-1.802,-0.128l0.517,-0.258l-0.646,-1.029l-0.259,1.417z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cuba",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M243.626,164.475l2.318,0.257l2.059,0l2.576,0.902l1.028,1.030l2.576,-0.387l0.900,0.644l2.318,1.673l1.673,1.287l0.901,-0.128l1.545,0.644l-0.129,0.772l1.931,0l2.060,1.159l-0.257,0.644l-1.803,0.385l-1.802,0.129l-1.931,-0.257l-3.861,0.257l1.801,-1.544l-1.029,-0.644l-1.802,-0.258l-0.902,-0.772l-0.643,-1.415l-1.546,0l-2.445,-0.645l-0.772,-0.644l-3.604,-0.385l-0.902,-0.515l1.030,-0.644l-2.704,-0.128l-1.930,1.416l-1.030,0l-0.386,0.643l-1.417,0.257l-1.158,-0.257l1.417,-0.772l0.643,-1.030l1.159,-0.515l1.415,-0.515l2.059,-0.257l-0.644,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cuba",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Cuba\x0a\x09^ 'M243.626,164.475l2.318,0.257l2.059,0l2.576,0.902l1.028,1.030l2.576,-0.387l0.900,0.644l2.318,1.673l1.673,1.287l0.901,-0.128l1.545,0.644l-0.129,0.772l1.931,0l2.060,1.159l-0.257,0.644l-1.803,0.385l-1.802,0.129l-1.931,-0.257l-3.861,0.257l1.801,-1.544l-1.029,-0.644l-1.802,-0.258l-0.902,-0.772l-0.643,-1.415l-1.546,0l-2.445,-0.645l-0.772,-0.644l-3.604,-0.385l-0.902,-0.515l1.030,-0.644l-2.704,-0.128l-1.930,1.416l-1.030,0l-0.386,0.643l-1.417,0.257l-1.158,-0.257l1.417,-0.772l0.643,-1.030l1.159,-0.515l1.415,-0.515l2.059,-0.257l-0.644,0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cyprus",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.694,132.549l0.129,0.259l-2.704,1.028l-1.417,-0.385l-0.514,-1.030l1.159,-0.129l0.258,0.129l0.127,0l0.130,0l0.257,0l0.257,-0.129l0.260,-0.128l0.127,0.128l0.258,0l0.128,0l0.128,0l0.130,0.129l0,0.258l0.129,-0.130l0.257,0.130l0.128,0l0.131,-0.130l0.128,0l0.128,0l0.129,-0.128l0.128,0l-0.129,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Cyprus",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Cyprus\x0a\x09^ 'M556.694,132.549l0.129,0.259l-2.704,1.028l-1.417,-0.385l-0.514,-1.030l1.159,-0.129l0.258,0.129l0.127,0l0.130,0l0.257,0l0.257,-0.129l0.260,-0.128l0.127,0.128l0.258,0l0.128,0l0.128,0l0.130,0.129l0,0.258l0.129,-0.130l0.257,0.130l0.128,0l0.131,-0.130l0.128,0l0.128,0l0.129,-0.128l0.128,0l-0.129,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CzechRepubilc",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.866,96.119l-1.158,-0.516l-1.286,0.129l-2.061,-0.901l-1.030,0.258l-1.417,1.030l-2.058,-0.772l-1.544,-1.159l-1.288,-0.645l-0.386,-1.157l-0.387,-0.773l1.932,-0.643l1.029,-0.644l1.932,-0.515l0.642,-0.516l0.645,0.259l1.287,-0.259l1.287,0.903l1.932,0.256l-0.129,0.645l1.414,0.644l0.517,-0.773l1.802,0.386l0.257,0.772l1.930,0.129l1.289,1.416l-0.774,0l-0.385,0.515l-0.644,0l-0.256,0.643l-0.517,0.129l0,0.257l-0.900,0.258l-1.288,0l0.387,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"CzechRepubilc",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "CzechRepubilc\x0a\x09^ 'M510.866,96.119l-1.158,-0.516l-1.286,0.129l-2.061,-0.901l-1.030,0.258l-1.417,1.030l-2.058,-0.772l-1.544,-1.159l-1.288,-0.645l-0.386,-1.157l-0.387,-0.773l1.932,-0.643l1.029,-0.644l1.932,-0.515l0.642,-0.516l0.645,0.259l1.287,-0.259l1.287,0.903l1.932,0.256l-0.129,0.645l1.414,0.644l0.517,-0.773l1.802,0.386l0.257,0.772l1.930,0.129l1.289,1.416l-0.774,0l-0.385,0.515l-0.644,0l-0.256,0.643l-0.517,0.129l0,0.257l-0.900,0.258l-1.288,0l0.387,-0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DemocraticRepublicCongo",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"DemocraticRepublicCongo",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "DemocraticRepublicCongo\x0a\x09^ 'M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Denmark",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.21,78.87l-1.159,-1.417l0,-2.832l0.387,-0.644l0.772,-0.901l2.447,-0.130l0.900,-0.772l2.188,-0.771l-0.128,1.415l-0.772,0.902l0.385,0.772l1.417,0.386l-0.644,1.029l-0.773,-0.257l-2.060,1.932l0.775,1.288l-1.675,0.385l2.060,0.385zM498.509,75.779l0.900,1.416l-1.545,2.188l-2.831,-1.544l-0.386,-1.158l-3.862,0.902z";
}, function($ctx1) {$ctx1.fill(self,"Denmark",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Denmark\x0a\x09^ 'M488.21,78.87l-1.159,-1.417l0,-2.832l0.387,-0.644l0.772,-0.901l2.447,-0.130l0.900,-0.772l2.188,-0.771l-0.128,1.415l-0.772,0.902l0.385,0.772l1.417,0.386l-0.644,1.029l-0.773,-0.257l-2.060,1.932l0.775,1.288l-1.675,0.385l2.060,0.385zM498.509,75.779l0.900,1.416l-1.545,2.188l-2.831,-1.544l-0.386,-1.158l-3.862,0.902z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Djibouti",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z";
}, function($ctx1) {$ctx1.fill(self,"Djibouti",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Djibouti\x0a\x09^ 'M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DominicanRepublic",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M272.075,173.873l0.259,-0.516l2.187,0l1.545,0.772l0.772,-0.128l0.387,1.030l1.545,-0.129l-0.129,0.901l1.288,0l1.286,1.030l-1.030,1.159l-1.287,-0.644l-1.287,0.129l-0.773,-0.129l-0.514,0.515l-1.030,0.129l-0.387,-0.644l-0.900,0.386l-1.159,1.803l-0.643,-0.387l-0.130,-0.772l0,-0.773l-0.643,-0.772l0.643,-0.515l0.259,-1.029l0.259,1.416z";
}, function($ctx1) {$ctx1.fill(self,"DominicanRepublic",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "DominicanRepublic\x0a\x09^ 'M272.075,173.873l0.259,-0.516l2.187,0l1.545,0.772l0.772,-0.128l0.387,1.030l1.545,-0.129l-0.129,0.901l1.288,0l1.286,1.030l-1.030,1.159l-1.287,-0.644l-1.287,0.129l-0.773,-0.129l-0.514,0.515l-1.030,0.129l-0.387,-0.644l-0.900,0.386l-1.159,1.803l-0.643,-0.387l-0.130,-0.772l0,-0.773l-0.643,-0.772l0.643,-0.515l0.259,-1.029l0.259,1.416z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ecuador",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M248.905,236.179l1.415,-2.060l-0.514,-1.159l-1.031,1.288l-1.672,-1.160l0.515,-0.772l-0.387,-2.445l0.901,-0.516l0.515,-1.673l1.030,-1.674l-0.258,-1.158l1.545,-0.514l1.802,-1.030l2.704,1.544l0.515,-0.127l0.643,1.157l2.318,0.386l0.772,-0.386l1.287,0.901l1.159,0.644l0.386,2.059l-0.772,1.674l-2.961,2.832l-3.219,1.030l-1.673,2.446l-0.514,1.802l-1.545,1.030l-1.159,-1.286l-1.030,-0.388l-1.159,0.257l0,-1.029l0.773,-0.643l0.386,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Ecuador",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Ecuador\x0a\x09^ 'M248.905,236.179l1.415,-2.060l-0.514,-1.159l-1.031,1.288l-1.672,-1.160l0.515,-0.772l-0.387,-2.445l0.901,-0.516l0.515,-1.673l1.030,-1.674l-0.258,-1.158l1.545,-0.514l1.802,-1.030l2.704,1.544l0.515,-0.127l0.643,1.157l2.318,0.386l0.772,-0.386l1.287,0.901l1.159,0.644l0.386,2.059l-0.772,1.674l-2.961,2.832l-3.219,1.030l-1.673,2.446l-0.514,1.802l-1.545,1.030l-1.159,-1.286l-1.030,-0.388l-1.159,0.257l0,-1.029l0.773,-0.643l0.386,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Egypt",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M559.269,147.483l-0.774,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901,-0.901l-1.159,-1.158l-1.930,-3.862l-0.258,0.258l1.159,2.831l1.545,2.703l2.059,4.119l1.030,1.545l0.903,1.545l2.316,2.961l-0.517,0.386l0.130,1.802l3.089,2.447l0.259,0.514l-10.299,0l-10.556,0l-10.813,0l0,-9.912l0,-9.526l-0.901,-2.189l0.772,-1.673l-0.387,-1.159l0.903,-1.287l3.603,0l2.575,0.644l2.705,0.773l1.287,0.514l2.058,-0.901l1.030,-0.772l2.447,-0.258l1.930,0.386l0.642,1.287l0.647,-0.900l2.186,0.644l2.061,0.128l1.415,-0.644l-1.674,-4.635z";
}, function($ctx1) {$ctx1.fill(self,"Egypt",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Egypt\x0a\x09^ 'M559.269,147.483l-0.774,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901,-0.901l-1.159,-1.158l-1.930,-3.862l-0.258,0.258l1.159,2.831l1.545,2.703l2.059,4.119l1.030,1.545l0.903,1.545l2.316,2.961l-0.517,0.386l0.130,1.802l3.089,2.447l0.259,0.514l-10.299,0l-10.556,0l-10.813,0l0,-9.912l0,-9.526l-0.901,-2.189l0.772,-1.673l-0.387,-1.159l0.903,-1.287l3.603,0l2.575,0.644l2.705,0.773l1.287,0.514l2.058,-0.901l1.030,-0.772l2.447,-0.258l1.930,0.386l0.642,1.287l0.647,-0.900l2.186,0.644l2.061,0.128l1.415,-0.644l-1.674,-4.635z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ElSalvador",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M228.694,190.865l-0.257,0.645l-1.545,0l-1.030,-0.259l-1.029,-0.515l-1.545,-0.129l-0.772,-0.644l0.128,-0.385l0.901,-0.644l0.515,-0.385l-0.129,-0.258l0.644,-0.129l0.772,0.129l0.515,0.643l0.902,0.386l0,0.386l1.287,-0.386l0.515,0.258l0.386,0.256l0.258,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"ElSalvador",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "ElSalvador\x0a\x09^ 'M228.694,190.865l-0.257,0.645l-1.545,0l-1.030,-0.259l-1.029,-0.515l-1.545,-0.129l-0.772,-0.644l0.128,-0.385l0.901,-0.644l0.515,-0.385l-0.129,-0.258l0.644,-0.129l0.772,0.129l0.515,0.643l0.902,0.386l0,0.386l1.287,-0.386l0.515,0.258l0.386,0.256l0.258,-1.031z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "EquatorialGuinea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"EquatorialGuinea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "EquatorialGuinea\x0a\x09^ 'M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Eritrea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z";
}, function($ctx1) {$ctx1.fill(self,"Eritrea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Eritrea\x0a\x09^ 'M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Estonia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M530.69,71.273l0.387,-1.544l-1.029,0.257l-1.674,-0.900l-0.256,-1.545l3.344,-0.773l3.477,-0.386l2.833,0.515l2.831,-0.129l0.386,0.515l-1.930,1.544l0.900,2.446l-1.158,0.901l-2.318,0l-2.316,-1.028l-1.158,-0.387l2.319,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Estonia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Estonia\x0a\x09^ 'M530.69,71.273l0.387,-1.544l-1.029,0.257l-1.674,-0.900l-0.256,-1.545l3.344,-0.773l3.477,-0.386l2.833,0.515l2.831,-0.129l0.386,0.515l-1.930,1.544l0.900,2.446l-1.158,0.901l-2.318,0l-2.316,-1.028l-1.158,-0.387l2.319,-0.514z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ethiopia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Ethiopia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Ethiopia\x0a\x09^ 'M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FalklandIslandsMalvinas",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M302.584,365.296l-0.129,1.159l-1.03,1.416l2.188-1.031l1.158-1.286L302.584,365.296zM307.733,365.037l1.159,0.388l-0.902,1.415l-2.188,0.772l-0.257-0.9l1.288-1.416L307.733,365.037z";
}, function($ctx1) {$ctx1.fill(self,"FalklandIslandsMalvinas",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "FalklandIslandsMalvinas\x0a\x09^ 'M302.584,365.296l-0.129,1.159l-1.03,1.416l2.188-1.031l1.158-1.286L302.584,365.296zM307.733,365.037l1.159,0.388l-0.902,1.415l-2.188,0.772l-0.257-0.9l1.288-1.416L307.733,365.037z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Fiji",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M946.097,274.154l0.773,-0.514l0.901,0.772l-0.516,1.416l-1.672,0.385l-1.418,-0.256l-0.256,-1.289l1.029,-0.900l-1.159,-0.386zM950.089,271.579l-1.160,0.773l-1.545,0.644l-0.385,-1.287l1.031,-1.030l0.899,-0.130l1.160,-0.256l-0.001,0l0.515,-0.129l-0.387,1.287l-0.128,0.128l-0.001,0z";
}, function($ctx1) {$ctx1.fill(self,"Fiji",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Fiji\x0a\x09^ 'M946.097,274.154l0.773,-0.514l0.901,0.772l-0.516,1.416l-1.672,0.385l-1.418,-0.256l-0.256,-1.289l1.029,-0.900l-1.159,-0.386zM950.089,271.579l-1.160,0.773l-1.545,0.644l-0.385,-1.287l1.031,-1.030l0.899,-0.130l1.160,-0.256l-0.001,0l0.515,-0.129l-0.387,1.287l-0.128,0.128l-0.001,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Finland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M542.276,40.893l-0.384,1.932l4.119,1.801l-2.448,2.060l3.089,2.960l-1.801,2.318l2.445,2.060l-1.157,1.802l3.991,1.802l-1.030,1.416l-2.448,1.545l-5.792,3.347l-4.890,0.257l-4.764,1.030l-4.377,0.515l-1.545,-1.416l-2.574,-0.901l0.514,-2.704l-1.286,-2.445l1.286,-1.545l2.447,-1.673l6.180,-2.961l1.800,-0.515l-0.256,-1.159l-3.734,-1.286l-0.901,-1.031l-0.128,-4.120l-4.250,-1.801l-3.475,-1.417l1.545,-0.643l2.961,1.416l3.606,-0.129l2.832,0.644l2.572,-1.159l1.289,-2.060l4.247,-0.900l3.476,1.157l1.159,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Finland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Finland\x0a\x09^ 'M542.276,40.893l-0.384,1.932l4.119,1.801l-2.448,2.060l3.089,2.960l-1.801,2.318l2.445,2.060l-1.157,1.802l3.991,1.802l-1.030,1.416l-2.448,1.545l-5.792,3.347l-4.890,0.257l-4.764,1.030l-4.377,0.515l-1.545,-1.416l-2.574,-0.901l0.514,-2.704l-1.286,-2.445l1.286,-1.545l2.447,-1.673l6.180,-2.961l1.800,-0.515l-0.256,-1.159l-3.734,-1.286l-0.901,-1.031l-0.128,-4.120l-4.250,-1.801l-3.475,-1.417l1.545,-0.643l2.961,1.416l3.606,-0.129l2.832,0.644l2.572,-1.159l1.289,-2.060l4.247,-0.900l3.476,1.157l1.159,-1.803z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "France",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.903,93.673l1.287,0.773l3.861,0.514l-1.416,1.802l-0.257,1.931l-0.772,0.515l-1.288,-0.257l0.130,0.644l-1.932,1.545l0,1.158l1.288,-0.386l0.901,1.159l-0.128,0.772l0.772,1.029l-0.901,0.774l0.642,2.058l1.418,0.386l-0.258,1.160l-2.446,1.544l-5.277,-0.772l-3.992,0.901l-0.257,1.673l-3.090,0.258l-3.089,-1.158l-0.901,0.514l-5.021,-1.158l-1.029,-1.030l1.416,-1.674l0.515,-5.277l-2.832,-2.833l-2.060,-1.415l-3.991,-1.031l-0.386,-1.931l3.604,-0.644l4.506,0.773l-0.901,-3.090l2.575,1.159l6.306,-2.060l0.775,-2.317l2.317,-0.515l0.385,1.031l1.287,0l1.288,1.029l1.801,1.287l1.416,-0.257l2.318,1.286l0.643,0.259l-0.773,0.129zM488.854,112.082l1.674,-1.030l0.514,2.317l-0.899,2.188l-1.289,-0.643l-0.644,-1.803l-0.644,1.029z";
}, function($ctx1) {$ctx1.fill(self,"France",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "France\x0a\x09^ 'M481.903,93.673l1.287,0.773l3.861,0.514l-1.416,1.802l-0.257,1.931l-0.772,0.515l-1.288,-0.257l0.130,0.644l-1.932,1.545l0,1.158l1.288,-0.386l0.901,1.159l-0.128,0.772l0.772,1.029l-0.901,0.774l0.642,2.058l1.418,0.386l-0.258,1.160l-2.446,1.544l-5.277,-0.772l-3.992,0.901l-0.257,1.673l-3.090,0.258l-3.089,-1.158l-0.901,0.514l-5.021,-1.158l-1.029,-1.030l1.416,-1.674l0.515,-5.277l-2.832,-2.833l-2.060,-1.415l-3.991,-1.031l-0.386,-1.931l3.604,-0.644l4.506,0.773l-0.901,-3.090l2.575,1.159l6.306,-2.060l0.775,-2.317l2.317,-0.515l0.385,1.031l1.287,0l1.288,1.029l1.801,1.287l1.416,-0.257l2.318,1.286l0.643,0.259l-0.773,0.129zM488.854,112.082l1.674,-1.030l0.514,2.317l-0.899,2.188l-1.289,-0.643l-0.644,-1.803l-0.644,1.029z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FrenchGuyana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.834,211.463l0.902,0.256l2.058,0.644l2.833,2.317l0.386,1.159l-1.545,2.446l-0.772,1.930l-1.030,1.031l-1.287,0.256l-0.387,-0.772l-0.643,-0.128l-0.772,0.644l-1.287,-0.516l0.772,-1.158l0.257,-1.159l0.386,-1.157l-1.029,-1.674l-0.259,-1.803l-1.417,2.316z";
}, function($ctx1) {$ctx1.fill(self,"FrenchGuyana",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "FrenchGuyana\x0a\x09^ 'M319.834,211.463l0.902,0.256l2.058,0.644l2.833,2.317l0.386,1.159l-1.545,2.446l-0.772,1.930l-1.030,1.031l-1.287,0.256l-0.387,-0.772l-0.643,-0.128l-0.772,0.644l-1.287,-0.516l0.772,-1.158l0.257,-1.159l0.386,-1.157l-1.029,-1.674l-0.259,-1.803l-1.417,2.316z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GM",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z";
}, function($ctx1) {$ctx1.fill(self,"GM",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "GM\x0a\x09^ 'M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Gabon",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M495.162,237.723l-2.833,-2.703l-1.801,-2.317l-1.544,-2.704l0,-0.900l0.642,-0.902l0.644,-1.931l0.515,-2.060l0.903,-0.128l3.988,0l-0.128,-3.219l1.288,-0.129l1.673,0.387l1.674,-0.387l0.256,0.129l-0.127,1.160l0.643,1.415l2.060,-0.258l0.642,0.515l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.802l-0.900,1.288l-2.319,-0.129l-1.416,-1.287l-0.256,1.287l-1.802,0.257l-0.901,0.643l1.029,1.804l2.059,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Gabon",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Gabon\x0a\x09^ 'M495.162,237.723l-2.833,-2.703l-1.801,-2.317l-1.544,-2.704l0,-0.900l0.642,-0.902l0.644,-1.931l0.515,-2.060l0.903,-0.128l3.988,0l-0.128,-3.219l1.288,-0.129l1.673,0.387l1.674,-0.387l0.256,0.129l-0.127,1.160l0.643,1.415l2.060,-0.258l0.642,0.515l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.802l-0.900,1.288l-2.319,-0.129l-1.416,-1.287l-0.256,1.287l-1.802,0.257l-0.901,0.643l1.029,1.804l2.059,-1.544z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Georgia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M577.161,115.042l0.387,-1.159l-0.643,-1.801l-1.546,-1.030l-1.544,-0.258l-0.900,-0.772l0.256,-0.387l2.318,0.516l3.990,0.386l3.604,1.287l0.517,0.515l1.671,-0.387l2.446,0.516l0.772,1.158l1.803,0.644l-0.771,0.257l1.287,1.545l-0.258,0.258l-1.545,-0.130l-1.930,-0.772l-0.644,0.387l-3.734,0.515l-2.702,-1.416l2.834,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Georgia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Georgia\x0a\x09^ 'M577.161,115.042l0.387,-1.159l-0.643,-1.801l-1.546,-1.030l-1.544,-0.258l-0.900,-0.772l0.256,-0.387l2.318,0.516l3.990,0.386l3.604,1.287l0.517,0.515l1.671,-0.387l2.446,0.516l0.772,1.158l1.803,0.644l-0.771,0.257l1.287,1.545l-0.258,0.258l-1.545,-0.130l-1.930,-0.772l-0.644,0.387l-3.734,0.515l-2.702,-1.416l2.834,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Germany",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.945,78.87l0.127,1.028l2.703,0.644l-0.128,0.901l2.831,-0.514l1.417,-0.644l3.090,1.029l1.287,0.901l0.642,1.287l-0.770,0.773l1.029,0.901l0.644,1.417l-0.257,1.030l1.158,1.672l-1.287,0.259l-0.645,-0.259l-0.642,0.516l-1.932,0.515l-1.029,0.644l-1.932,0.643l0.387,0.773l0.386,1.157l1.288,0.645l1.544,1.159l-0.901,1.158l-1.030,0.386l0.387,1.802l-0.258,0.386l-0.773,-0.515l-1.287,-0.128l-1.931,0.515l-2.446,-0.128l-0.387,0.772l-1.285,-0.772l-0.903,0.128l-2.832,-0.772l-0.515,0.514l-2.317,0l0.257,-1.931l1.416,-1.802l-3.861,-0.514l-1.287,-0.773l0.129,-1.159l-0.516,-0.515l0.258,-1.930l-0.386,-2.833l1.544,0l0.773,-0.901l0.644,-2.574l-0.515,-0.902l0.515,-0.515l2.317,-0.129l0.385,0.516l1.933,-1.288l-0.645,-1.029l-0.129,-1.544l2.060,0.385l-1.675,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Germany",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Germany\x0a\x09^ 'M491.945,78.87l0.127,1.028l2.703,0.644l-0.128,0.901l2.831,-0.514l1.417,-0.644l3.090,1.029l1.287,0.901l0.642,1.287l-0.770,0.773l1.029,0.901l0.644,1.417l-0.257,1.030l1.158,1.672l-1.287,0.259l-0.645,-0.259l-0.642,0.516l-1.932,0.515l-1.029,0.644l-1.932,0.643l0.387,0.773l0.386,1.157l1.288,0.645l1.544,1.159l-0.901,1.158l-1.030,0.386l0.387,1.802l-0.258,0.386l-0.773,-0.515l-1.287,-0.128l-1.931,0.515l-2.446,-0.128l-0.387,0.772l-1.285,-0.772l-0.903,0.128l-2.832,-0.772l-0.515,0.514l-2.317,0l0.257,-1.931l1.416,-1.802l-3.861,-0.514l-1.287,-0.773l0.129,-1.159l-0.516,-0.515l0.258,-1.930l-0.386,-2.833l1.544,0l0.773,-0.901l0.644,-2.574l-0.515,-0.902l0.515,-0.515l2.317,-0.129l0.385,0.516l1.933,-1.288l-0.645,-1.029l-0.129,-1.544l2.060,0.385l-1.675,0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ghana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z";
}, function($ctx1) {$ctx1.fill(self,"Ghana",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Ghana\x0a\x09^ 'M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GreatBritian",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.829,78.483l2.317,-0.129l2.832,1.673l-1.416,1.803l-2.060,-0.516l-1.673,0l0.515,-1.416l0.515,1.415zM453.84,69.214l3.347,-0.257l-2.961,2.960l2.832,-0.386l2.832,0l-0.643,2.189l-2.446,2.446l2.832,0.256l2.575,3.348l1.801,0.515l1.674,3.089l0.773,1.030l3.347,0.515l-0.387,1.674l-1.416,0.772l1.159,1.416l-2.446,1.417l-3.605,0l-4.633,0.772l-1.159,-0.516l-1.803,1.159l-2.574,-0.257l-1.802,1.030l-1.415,-0.515l3.860,-2.832l2.446,-0.644l-4.247,-0.386l-0.772,-1.030l2.831,-0.901l-1.416,-1.416l0.515,-1.803l3.991,0.258l0.386,-1.545l-1.803,-1.674l-3.346,-0.515l-0.645,-0.772l1.031,-1.158l-0.901,-0.772l-1.416,1.286l-0.258,-2.573l-1.287,-1.417l0.901,-2.704l2.189,-2.187l-2.059,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"GreatBritian",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "GreatBritian\x0a\x09^ 'M444.829,78.483l2.317,-0.129l2.832,1.673l-1.416,1.803l-2.060,-0.516l-1.673,0l0.515,-1.416l0.515,1.415zM453.84,69.214l3.347,-0.257l-2.961,2.960l2.832,-0.386l2.832,0l-0.643,2.189l-2.446,2.446l2.832,0.256l2.575,3.348l1.801,0.515l1.674,3.089l0.773,1.030l3.347,0.515l-0.387,1.674l-1.416,0.772l1.159,1.416l-2.446,1.417l-3.605,0l-4.633,0.772l-1.159,-0.516l-1.803,1.159l-2.574,-0.257l-1.802,1.030l-1.415,-0.515l3.860,-2.832l2.446,-0.644l-4.247,-0.386l-0.772,-1.030l2.831,-0.901l-1.416,-1.416l0.515,-1.803l3.991,0.258l0.386,-1.545l-1.803,-1.674l-3.346,-0.515l-0.645,-0.772l1.031,-1.158l-0.901,-0.772l-1.416,1.286l-0.258,-2.573l-1.287,-1.417l0.901,-2.704l2.189,-2.187l-2.059,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greece",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.099,131.906l-0.387,0.773l-3.861,0.257l0,-0.515l-3.219,-0.515l0.387,-1.159l1.543,0.902l2.060,-0.129l2.059,0.257l-0.127,0.387l-1.545,0.258zM521.808,116.973l1.804,-0.258l1.029,-0.643l1.417,0.128l0.515,-0.513l0.514,-0.130l1.932,0.130l2.187,-0.773l1.930,1.029l2.445,-0.256l0,-1.417l1.289,0.772l-0.771,1.673l-0.645,0.258l-1.674,0l-1.416,-0.258l-3.218,0.644l1.802,1.545l-1.287,0.387l-1.543,0l-1.418,-1.417l-0.514,0.645l0.643,1.672l1.289,1.159l-1.031,0.644l1.545,1.286l1.286,0.774l0.130,1.545l-2.575,-0.773l0.772,1.417l-1.672,0.256l1.028,2.317l-1.800,0.129l-2.189,-1.287l-1.030,-2.059l-0.516,-1.803l-1.030,-1.288l-1.287,-1.545l-0.258,-0.772l1.288,-1.287l0.128,-0.901l0.901,-0.386l0,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Greece",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Greece\x0a\x09^ 'M536.099,131.906l-0.387,0.773l-3.861,0.257l0,-0.515l-3.219,-0.515l0.387,-1.159l1.543,0.902l2.060,-0.129l2.059,0.257l-0.127,0.387l-1.545,0.258zM521.808,116.973l1.804,-0.258l1.029,-0.643l1.417,0.128l0.515,-0.513l0.514,-0.130l1.932,0.130l2.187,-0.773l1.930,1.029l2.445,-0.256l0,-1.417l1.289,0.772l-0.771,1.673l-0.645,0.258l-1.674,0l-1.416,-0.258l-3.218,0.644l1.802,1.545l-1.287,0.387l-1.543,0l-1.418,-1.417l-0.514,0.645l0.643,1.672l1.289,1.159l-1.031,0.644l1.545,1.286l1.286,0.774l0.130,1.545l-2.575,-0.773l0.772,1.417l-1.672,0.256l1.028,2.317l-1.800,0.129l-2.189,-1.287l-1.030,-2.059l-0.516,-1.803l-1.030,-1.288l-1.287,-1.545l-0.258,-0.772l1.288,-1.287l0.128,-0.901l0.901,-0.386l0,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greenland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M339.272,4.333l9.011,-1.544l9.525,0.128l3.348,-1.029l9.526,-0.258l21.497,0.386l16.864,2.060l-4.892,1.029l-10.298,0.129l-14.546,0.258l1.287,0.515l9.654,-0.257l8.110,0.901l5.149,-0.773l2.317,0.901l-2.961,1.545l6.824,-1.030l13.130,-1.030l7.981,0.515l1.545,1.159l-10.942,1.931l-1.546,0.644l-8.625,0.514l6.180,0.129l-3.089,1.931l-2.189,1.802l0.129,2.961l3.218,1.674l-4.249,0.128l-4.376,0.902l4.893,1.415l0.643,2.318l-2.832,0.257l3.476,2.317l-5.923,0.129l3.091,1.159l-0.902,0.900l-3.733,0.387l-3.862,0l3.476,1.931l0,1.158l-5.407,-1.158l-1.287,0.773l3.604,0.644l3.476,1.673l1.030,2.188l-4.763,0.515l-2.060,-1.031l-3.347,-1.544l0.901,1.803l-3.090,1.416l7.081,0.129l3.733,0.128l-7.208,2.316l-7.338,2.189l-7.852,0.902l-2.962,0l-2.831,1.030l-3.734,2.832l-5.793,1.931l-1.930,0.128l-3.604,0.644l-3.862,0.644l-2.317,1.673l0,1.802l-1.288,1.802l-4.505,2.189l1.158,2.060l-1.287,2.188l-1.287,2.703l-3.863,0.129l-3.989,-2.188l-5.278,0l-2.704,-1.545l-1.802,-2.574l-4.635,-3.347l-1.415,-1.803l-0.258,-2.316l-3.732,-2.576l0.900,-1.930l-1.802,-1.031l2.703,-3.088l3.991,-1.031l1.159,-1.158l0.515,-2.059l-3.476,-0.259l-6.179,-1.416l2.189,0l6.049,0l-4.634,-1.801l-2.446,-0.902l-4.892,-0.258l2.960,-2.445l-1.544,-1.030l-2.188,-1.931l-3.218,-2.832l-3.475,-1.030l0.128,-1.159l-7.338,-1.545l-5.664,-0.257l-7.208,0.129l-6.565,0.257l-3.090,-0.901l-4.763,-1.673l7.081,-0.901l5.405,-0.130l-11.457,-0.643l-6.050,-1.158l0.387,-1.030l10.169,-1.288l9.784,-1.287l1.030,-1.030l-7.210,-0.901l2.318,-1.029l9.397,-1.931l3.862,-0.258l-1.159,-1.287l6.437,-0.644l8.238,-0.387l8.368,-0.128l2.832,0.901l7.209,-1.545l6.436,1.030l3.347,1.159l6.050,0l-6.436,-1.545l-0.386,1.159z";
}, function($ctx1) {$ctx1.fill(self,"Greenland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Greenland\x0a\x09^ 'M339.272,4.333l9.011,-1.544l9.525,0.128l3.348,-1.029l9.526,-0.258l21.497,0.386l16.864,2.060l-4.892,1.029l-10.298,0.129l-14.546,0.258l1.287,0.515l9.654,-0.257l8.110,0.901l5.149,-0.773l2.317,0.901l-2.961,1.545l6.824,-1.030l13.130,-1.030l7.981,0.515l1.545,1.159l-10.942,1.931l-1.546,0.644l-8.625,0.514l6.180,0.129l-3.089,1.931l-2.189,1.802l0.129,2.961l3.218,1.674l-4.249,0.128l-4.376,0.902l4.893,1.415l0.643,2.318l-2.832,0.257l3.476,2.317l-5.923,0.129l3.091,1.159l-0.902,0.900l-3.733,0.387l-3.862,0l3.476,1.931l0,1.158l-5.407,-1.158l-1.287,0.773l3.604,0.644l3.476,1.673l1.030,2.188l-4.763,0.515l-2.060,-1.031l-3.347,-1.544l0.901,1.803l-3.090,1.416l7.081,0.129l3.733,0.128l-7.208,2.316l-7.338,2.189l-7.852,0.902l-2.962,0l-2.831,1.030l-3.734,2.832l-5.793,1.931l-1.930,0.128l-3.604,0.644l-3.862,0.644l-2.317,1.673l0,1.802l-1.288,1.802l-4.505,2.189l1.158,2.060l-1.287,2.188l-1.287,2.703l-3.863,0.129l-3.989,-2.188l-5.278,0l-2.704,-1.545l-1.802,-2.574l-4.635,-3.347l-1.415,-1.803l-0.258,-2.316l-3.732,-2.576l0.900,-1.930l-1.802,-1.031l2.703,-3.088l3.991,-1.031l1.159,-1.158l0.515,-2.059l-3.476,-0.259l-6.179,-1.416l2.189,0l6.049,0l-4.634,-1.801l-2.446,-0.902l-4.892,-0.258l2.960,-2.445l-1.544,-1.030l-2.188,-1.931l-3.218,-2.832l-3.475,-1.030l0.128,-1.159l-7.338,-1.545l-5.664,-0.257l-7.208,0.129l-6.565,0.257l-3.090,-0.901l-4.763,-1.673l7.081,-0.901l5.405,-0.130l-11.457,-0.643l-6.050,-1.158l0.387,-1.030l10.169,-1.288l9.784,-1.287l1.030,-1.030l-7.210,-0.901l2.318,-1.029l9.397,-1.931l3.862,-0.258l-1.159,-1.287l6.437,-0.644l8.238,-0.387l8.368,-0.128l2.832,0.901l7.209,-1.545l6.436,1.030l3.347,1.159l6.050,0l-6.436,-1.545l-0.386,1.159z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guatemala",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M222.516,189.963l-1.417,-0.514l-1.673,0l-1.159,-0.515l-1.544,-1.159l0.128,-0.773l0.257,-0.643l-0.385,-0.514l1.416,-2.188l3.347,0l0.128,-0.903l-0.385,-0.128l-0.387,-0.644l-1.030,-0.643l-0.901,-0.901l1.158,0l0,-1.416l2.575,0l2.446,0l0,2.060l-0.257,3.089l0.772,0l0.901,0.515l0.258,-0.386l0.771,0.257l-1.158,1.030l-1.287,0.772l-0.257,0.516l0.257,0.514l-0.515,0.773l-0.644,0.129l0.129,0.258l-0.515,0.385l-0.901,0.644l0.128,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Guatemala",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Guatemala\x0a\x09^ 'M222.516,189.963l-1.417,-0.514l-1.673,0l-1.159,-0.515l-1.544,-1.159l0.128,-0.773l0.257,-0.643l-0.385,-0.514l1.416,-2.188l3.347,0l0.128,-0.903l-0.385,-0.128l-0.387,-0.644l-1.030,-0.643l-0.901,-0.901l1.158,0l0,-1.416l2.575,0l2.446,0l0,2.060l-0.257,3.089l0.772,0l0.901,0.515l0.258,-0.386l0.771,0.257l-1.158,1.030l-1.287,0.772l-0.257,0.516l0.257,0.514l-0.515,0.773l-0.644,0.129l0.129,0.258l-0.515,0.385l-0.901,0.644l0.128,-0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guinea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z";
}, function($ctx1) {$ctx1.fill(self,"Guinea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Guinea\x0a\x09^ 'M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GuineaBissau",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"GuineaBissau",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "GuineaBissau\x0a\x09^ 'M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guyana",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M304.257,204.383l1.804,1.028l1.672,1.803l0,1.415l1.030,0l1.417,1.289l1.157,1.028l-0.514,2.319l-1.545,0.772l0.129,0.643l-0.514,1.416l1.157,1.931l0.902,0l0.385,1.545l1.545,2.317l-0.643,0.130l-1.416,-0.259l-0.901,0.644l-1.288,0.515l-0.772,0.128l-0.386,0.515l-1.287,-0.128l-1.674,-1.288l-0.128,-1.287l-0.773,-1.287l0.515,-2.316l0.772,-0.902l-0.644,-1.288l-0.900,-0.386l0.257,-1.159l-0.644,-0.643l-1.287,0.129l-1.930,-2.061l0.772,-0.772l0,-1.287l1.673,-0.385l0.644,-0.516l-0.902,-1.029l0.130,-0.902l-2.187,1.672z";
}, function($ctx1) {$ctx1.fill(self,"Guyana",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Guyana\x0a\x09^ 'M304.257,204.383l1.804,1.028l1.672,1.803l0,1.415l1.030,0l1.417,1.289l1.157,1.028l-0.514,2.319l-1.545,0.772l0.129,0.643l-0.514,1.416l1.157,1.931l0.902,0l0.385,1.545l1.545,2.317l-0.643,0.130l-1.416,-0.259l-0.901,0.644l-1.288,0.515l-0.772,0.128l-0.386,0.515l-1.287,-0.128l-1.674,-1.288l-0.128,-1.287l-0.773,-1.287l0.515,-2.316l0.772,-0.902l-0.644,-1.288l-0.900,-0.386l0.257,-1.159l-0.644,-0.643l-1.287,0.129l-1.930,-2.061l0.772,-0.772l0,-1.287l1.673,-0.385l0.644,-0.516l-0.902,-1.029l0.130,-0.902l-2.187,1.672z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Haiti",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M268.085,173.357l1.673,0.129l2.317,0.387l0.259,1.416l-0.259,1.029l-0.643,0.515l0.643,0.772l0,0.773l-1.802,-0.515l-1.287,0.257l-1.673,-0.257l-1.159,0.515l-1.545,-0.773l0.258,-0.900l2.446,0.385l2.060,0.258l1.029,-0.643l-1.288,-1.159l0,-1.030l-1.673,-0.387l-0.644,0.772z";
}, function($ctx1) {$ctx1.fill(self,"Haiti",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Haiti\x0a\x09^ 'M268.085,173.357l1.673,0.129l2.317,0.387l0.259,1.416l-0.259,1.029l-0.643,0.515l0.643,0.772l0,0.773l-1.802,-0.515l-1.287,0.257l-1.673,-0.257l-1.159,0.515l-1.545,-0.773l0.258,-0.900l2.446,0.385l2.060,0.258l1.029,-0.643l-1.288,-1.159l0,-1.030l-1.673,-0.387l-0.644,0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Honduras",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M229.981,192.023l-0.385,-0.900l-0.902,-0.258l0.258,-1.031l-0.386,-0.256l-0.515,-0.258l-1.287,0.386l0,-0.386l-0.902,-0.386l-0.515,-0.643l-0.772,-0.129l0.515,-0.773l-0.257,-0.514l0.257,-0.516l1.287,-0.772l1.158,-1.030l0.258,0.129l0.644,-0.386l0.772,-0.129l0.257,0.258l0.386,-0.129l1.288,0.257l1.288,-0.128l0.772,-0.258l0.386,-0.258l0.773,0.129l0.643,0.129l0.772,0l0.515,-0.258l1.287,0.387l0.387,0l0.772,0.515l0.773,0.643l1.030,0.387l0.643,0.772l-0.901,-0.128l-0.386,0.386l-0.902,0.386l-0.643,0l-0.643,0.385l-0.516,-0.127l-0.514,-0.517l-0.258,0.130l-0.258,0.643l-0.257,0l-0.129,0.516l-0.900,0.771l-0.515,0.258l-0.258,0.386l-0.773,-0.515l-0.643,0.643l-0.515,0l-0.643,0.129l0,1.288l-0.387,0l-0.257,0.644l0.902,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Honduras",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Honduras\x0a\x09^ 'M229.981,192.023l-0.385,-0.900l-0.902,-0.258l0.258,-1.031l-0.386,-0.256l-0.515,-0.258l-1.287,0.386l0,-0.386l-0.902,-0.386l-0.515,-0.643l-0.772,-0.129l0.515,-0.773l-0.257,-0.514l0.257,-0.516l1.287,-0.772l1.158,-1.030l0.258,0.129l0.644,-0.386l0.772,-0.129l0.257,0.258l0.386,-0.129l1.288,0.257l1.288,-0.128l0.772,-0.258l0.386,-0.258l0.773,0.129l0.643,0.129l0.772,0l0.515,-0.258l1.287,0.387l0.387,0l0.772,0.515l0.773,0.643l1.030,0.387l0.643,0.772l-0.901,-0.128l-0.386,0.386l-0.902,0.386l-0.643,0l-0.643,0.385l-0.516,-0.127l-0.514,-0.517l-0.258,0.130l-0.258,0.643l-0.257,0l-0.129,0.516l-0.900,0.771l-0.515,0.258l-0.258,0.386l-0.773,-0.515l-0.643,0.643l-0.515,0l-0.643,0.129l0,1.288l-0.387,0l-0.257,0.644l0.902,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Hungary",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M508.937,100.753l0.900,-1.674l-0.643,-0.643l1.545,0l0.257,-1.158l1.288,0.772l1.028,0.257l2.318,-0.257l0.129,-0.644l1.158,0l1.287,-0.515l0.258,0.258l1.287,-0.387l0.645,-0.643l0.900,-0.129l2.832,0.772l0.645,-0.257l1.415,0.773l0.256,0.643l-1.671,0.643l-1.290,1.803l-1.673,1.802l-2.059,0.515l-1.672,-0.129l-2.060,0.772l-1.032,0.387l-2.316,-0.515l-1.930,-1.159l-0.902,-0.386l-0.515,-0.901l0.385,0z";
}, function($ctx1) {$ctx1.fill(self,"Hungary",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Hungary\x0a\x09^ 'M508.937,100.753l0.900,-1.674l-0.643,-0.643l1.545,0l0.257,-1.158l1.288,0.772l1.028,0.257l2.318,-0.257l0.129,-0.644l1.158,0l1.287,-0.515l0.258,0.258l1.287,-0.387l0.645,-0.643l0.900,-0.129l2.832,0.772l0.645,-0.257l1.415,0.773l0.256,0.643l-1.671,0.643l-1.290,1.803l-1.673,1.802l-2.059,0.515l-1.672,-0.129l-2.060,0.772l-1.032,0.387l-2.316,-0.515l-1.930,-1.159l-0.902,-0.386l-0.515,-0.901l0.385,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iceland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M426.163,47.974l-0.643,1.672l3.089,1.932l-3.604,2.059l-7.723,1.802l-2.318,0.515l-3.475,-0.385l-7.595,-0.902l2.703,-1.158l-5.922,-1.287l4.763,-0.516l-0.128,-0.900l-5.664,-0.644l1.930,-1.674l3.991,-0.386l4.248,1.803l4.119,-1.417l3.348,0.645l4.376,-1.417l-4.505,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iceland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Iceland\x0a\x09^ 'M426.163,47.974l-0.643,1.672l3.089,1.932l-3.604,2.059l-7.723,1.802l-2.318,0.515l-3.475,-0.385l-7.595,-0.902l2.703,-1.158l-5.922,-1.287l4.763,-0.516l-0.128,-0.900l-5.664,-0.644l1.930,-1.674l3.991,-0.386l4.248,1.803l4.119,-1.417l3.348,0.645l4.376,-1.417l-4.505,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "India",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M674.866,131.391l2.961,3.089l-0.256,2.189l1.030,1.416l-0.129,1.416l-1.932,-0.385l0.773,2.960l2.704,1.674l3.732,1.930l-1.672,1.160l-1.160,2.573l2.703,1.031l2.447,1.287l3.604,1.545l3.603,0.386l1.674,1.287l2.059,0.257l3.219,0.644l2.189,0l0.385,-1.158l-0.385,-1.674l0.258,-1.159l1.543,-0.514l0.258,2.059l0.129,0.516l2.447,1.029l1.672,-0.386l2.189,0.129l2.188,0l0.257,-1.674l-1.158,-0.901l2.188,-0.258l2.445,-2.059l3.092,-1.674l2.314,0.643l1.934,-1.158l1.285,1.674l-0.900,1.159l2.832,0.386l0.258,1.029l-1.030,0.515l0.256,1.674l-1.930,-0.515l-3.474,1.802l0.127,1.545l-1.545,2.317l-0.127,1.287l-1.160,2.189l-2.188,-0.515l0,2.704l-0.642,0.900l0.255,1.159l-1.287,0.643l-1.416,-4.247l-0.771,0l-0.387,1.802l-1.545,-1.416l0.901,-1.545l1.158,-0.129l1.289,-2.317l-1.545,-0.515l-2.574,0.128l-2.574,-0.386l-0.260,-1.931l-1.285,-0.128l-2.061,-1.159l-1.031,1.803l2.060,1.415l-1.802,1.030l-0.514,1.031l1.672,0.643l-0.514,1.674l0.901,2.059l0.515,2.188l-0.387,1.030l-1.931,-0.128l-3.217,0.643l0.129,1.931l-1.416,1.674l-3.861,1.802l-3.092,3.218l-2.059,1.675l-2.574,1.673l-0.129,1.287l-1.287,0.644l-2.447,1.029l-1.287,0.129l-0.772,2.059l0.645,3.476l0.127,2.189l-1.159,2.574l0,4.635l-1.414,0.128l-1.289,2.060l0.903,0.901l-2.448,0.773l-0.900,1.802l-1.158,0.772l-2.576,-2.574l-1.159,-3.734l-1.027,-2.703l-1.031,-1.287l-1.416,-2.575l-0.645,-3.347l-0.513,-1.674l-2.448,-3.733l-1.029,-5.278l-0.900,-3.346l0,-3.347l-0.516,-2.446l-3.861,1.544l-1.931,-0.257l-3.476,-3.347l1.287,-0.901l-0.772,-1.159l-3.218,-2.188l1.801,-1.802l5.922,0l-0.514,-2.317l-1.545,-1.417l-0.258,-2.059l-1.802,-1.159l2.961,-2.832l3.218,0.129l2.704,-2.833l1.802,-2.702l2.575,-2.704l0,-1.931l2.187,-1.545l-2.059,-1.287l-1.031,-1.802l-0.900,-2.447l1.287,-1.157l4.121,0.643l2.961,-0.386l-2.572,2.189z";
}, function($ctx1) {$ctx1.fill(self,"India",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "India\x0a\x09^ 'M674.866,131.391l2.961,3.089l-0.256,2.189l1.030,1.416l-0.129,1.416l-1.932,-0.385l0.773,2.960l2.704,1.674l3.732,1.930l-1.672,1.160l-1.160,2.573l2.703,1.031l2.447,1.287l3.604,1.545l3.603,0.386l1.674,1.287l2.059,0.257l3.219,0.644l2.189,0l0.385,-1.158l-0.385,-1.674l0.258,-1.159l1.543,-0.514l0.258,2.059l0.129,0.516l2.447,1.029l1.672,-0.386l2.189,0.129l2.188,0l0.257,-1.674l-1.158,-0.901l2.188,-0.258l2.445,-2.059l3.092,-1.674l2.314,0.643l1.934,-1.158l1.285,1.674l-0.900,1.159l2.832,0.386l0.258,1.029l-1.030,0.515l0.256,1.674l-1.930,-0.515l-3.474,1.802l0.127,1.545l-1.545,2.317l-0.127,1.287l-1.160,2.189l-2.188,-0.515l0,2.704l-0.642,0.900l0.255,1.159l-1.287,0.643l-1.416,-4.247l-0.771,0l-0.387,1.802l-1.545,-1.416l0.901,-1.545l1.158,-0.129l1.289,-2.317l-1.545,-0.515l-2.574,0.128l-2.574,-0.386l-0.260,-1.931l-1.285,-0.128l-2.061,-1.159l-1.031,1.803l2.060,1.415l-1.802,1.030l-0.514,1.031l1.672,0.643l-0.514,1.674l0.901,2.059l0.515,2.188l-0.387,1.030l-1.931,-0.128l-3.217,0.643l0.129,1.931l-1.416,1.674l-3.861,1.802l-3.092,3.218l-2.059,1.675l-2.574,1.673l-0.129,1.287l-1.287,0.644l-2.447,1.029l-1.287,0.129l-0.772,2.059l0.645,3.476l0.127,2.189l-1.159,2.574l0,4.635l-1.414,0.128l-1.289,2.060l0.903,0.901l-2.448,0.773l-0.900,1.802l-1.158,0.772l-2.576,-2.574l-1.159,-3.734l-1.027,-2.703l-1.031,-1.287l-1.416,-2.575l-0.645,-3.347l-0.513,-1.674l-2.448,-3.733l-1.029,-5.278l-0.900,-3.346l0,-3.347l-0.516,-2.446l-3.861,1.544l-1.931,-0.257l-3.476,-3.347l1.287,-0.901l-0.772,-1.159l-3.218,-2.188l1.801,-1.802l5.922,0l-0.514,-2.317l-1.545,-1.417l-0.258,-2.059l-1.802,-1.159l2.961,-2.832l3.218,0.129l2.704,-2.833l1.802,-2.702l2.575,-2.704l0,-1.931l2.187,-1.545l-2.059,-1.287l-1.031,-1.802l-0.900,-2.447l1.287,-1.157l4.121,0.643l2.961,-0.386l-2.572,2.189z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Indonesia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,0.515l0,0.773l-1.674,2.060l-2.317,0.515l-0.386,-0.257l0.258,-0.902l1.158,-1.674l-2.703,1.030zM826.767,245.576l-0.258,-2.058l0.515,-0.903l0.516,-1.030l0.643,0.901l0,1.286l1.416,-1.804zM845.175,242.742l0,8.755l-2.447,-2.188l-2.702,-0.514l-0.644,0.771l-3.475,0.129l1.156,-2.189l1.676,-0.772l-0.644,-2.962l-1.287,-2.317l-5.280,-2.187l-2.187,-0.256l-3.992,-2.448l-0.899,1.288l-1.031,0.257l-0.516,-1.030l0,-1.157l-2.058,-1.288l2.832,-1.030l1.931,0l-0.259,-0.644l-3.860,0l-1.160,-1.674l-2.314,-0.515l-1.161,-1.287l3.606,-0.643l1.414,-0.902l4.248,1.160l0.516,1.028l0.771,4.248l2.705,1.676l2.317,-2.833l3.090,-1.674l2.316,0l2.318,0.901l2.059,1.030l2.832,0.515l-0.129,-8.752zM761.116,223.434l1.801,1.416l1.803,-0.514l1.672,0.257l1.545,-1.417l1.289,-0.257l2.574,0.772l2.189,-0.515l1.414,-3.862l1.032,-0.901l0.900,-3.089l3.090,0l2.316,0.515l-1.545,2.446l2.059,2.574l-0.514,1.160l3.090,2.574l-3.217,0.257l-0.902,1.802l0.129,2.447l-2.576,1.930l-0.129,2.575l-1.030,4.119l-0.386,-0.901l-3.088,1.158l-1.031,-1.542l-1.930,-0.259l-1.287,-0.773l-3.219,0.901l-1.029,-1.287l-1.801,0.128l-2.189,-0.256l-0.387,-3.606l-1.416,-0.772l-1.287,-2.317l-0.260,-2.317l0.260,-2.574l1.545,-1.674l-0.515,-1.802zM813.765,234.505l2.961,0.772l0.902,2.059l-2.190,-1.029l-2.318,-0.256l-1.545,0.128l-1.801,0l0.643,-1.545l-3.348,0.129zM807.069,237.209l-1.929,-0.516l-0.516,-1.158l2.705,-0.129l0.643,0.901l0.903,-0.902zM809.903,221.117l0.129,1.416l1.674,0.258l0.256,1.158l-0.256,2.317l-1.289,-0.258l-0.514,1.674l1.159,1.417l-0.774,0.256l-1.029,-1.673l-0.772,-3.476l0.514,-2.060l-0.902,1.029zM796.386,224.593l3.090,-0.130l2.703,-1.930l0.386,0.643l-2.060,2.704l-2.059,0.515l-2.574,-0.644l-4.506,0.257l-2.316,0.387l-0.387,1.931l2.316,2.445l1.545,-1.158l5.022,-1.031l-0.258,1.289l-1.158,-0.387l-1.160,1.545l-2.446,1.030l2.575,3.476l-0.514,0.903l2.445,3.216l0,1.674l-1.416,0.771l-1.029,-0.901l1.287,-2.186l-2.703,1.028l-0.645,-0.772l0.385,-1.031l-1.930,-1.544l0.131,-2.574l-1.804,0.773l0.257,3.088l0.129,3.862l-1.800,0.387l-1.161,-0.774l0.774,-2.443l-0.389,-2.574l-1.156,-0.131l-0.772,-1.802l1.159,-1.802l0.384,-2.060l1.288,-4.120l0.515,-1.029l2.317,-2.060l2.189,0.772l-3.346,-0.387zM789.306,254.588l-3.604,-1.804l2.574,-0.643l1.416,0.902l0.903,0.771l-0.131,0.774l1.158,0zM792.138,249.953l1.802,-0.129l2.317,-1.029l-0.385,1.544l-3.992,0.643l-3.604,-0.257l0,-1.030l2.188,-0.515l-1.674,-0.773zM783.771,249.566l1.673,-0.257l0.645,1.158l-3.090,0.515l-1.803,0.387l-1.545,0l1.030,-1.674l1.416,0l0.773,-0.900l-0.901,-0.771zM757.511,244.287l0.386,0.902l5.149,0.258l0.514,-1.031l5.021,1.288l1.029,1.674l3.991,0.515l3.349,1.673l-3.092,1.032l-2.961,-1.160l-2.445,0.128l-2.832,-0.257l-2.445,-0.514l-3.219,-0.902l-1.932,-0.387l-1.158,0.387l-4.890,-1.159l-0.387,-1.158l-2.574,-0.129l1.929,-2.574l3.219,0.127l2.190,1.031l-1.158,-0.256zM746.438,229.871l0.387,1.932l0.903,1.415l2.058,0.257l1.289,1.802l-0.644,3.347l-0.129,4.118l-2.961,0l-2.317,-2.187l-3.476,-2.188l-1.158,-1.674l-2.059,-2.188l-1.289,-2.060l-2.061,-3.733l-2.314,-2.189l-0.775,-2.317l-1.028,-2.187l-2.447,-1.674l-1.416,-2.318l-2.059,-1.416l-2.705,-3.090l-0.256,-1.287l1.674,0.129l4.248,0.515l2.317,2.575l2.058,1.803l1.547,1.157l2.572,2.962l2.706,0l2.187,1.801l1.674,2.318l2.060,1.158l-1.158,2.189l1.545,1.030l-1.027,0z";
}, function($ctx1) {$ctx1.fill(self,"Indonesia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Indonesia\x0a\x09^ 'M801.921,250.982l0.258,0.515l0,0.773l-1.674,2.060l-2.317,0.515l-0.386,-0.257l0.258,-0.902l1.158,-1.674l-2.703,1.030zM826.767,245.576l-0.258,-2.058l0.515,-0.903l0.516,-1.030l0.643,0.901l0,1.286l1.416,-1.804zM845.175,242.742l0,8.755l-2.447,-2.188l-2.702,-0.514l-0.644,0.771l-3.475,0.129l1.156,-2.189l1.676,-0.772l-0.644,-2.962l-1.287,-2.317l-5.280,-2.187l-2.187,-0.256l-3.992,-2.448l-0.899,1.288l-1.031,0.257l-0.516,-1.030l0,-1.157l-2.058,-1.288l2.832,-1.030l1.931,0l-0.259,-0.644l-3.860,0l-1.160,-1.674l-2.314,-0.515l-1.161,-1.287l3.606,-0.643l1.414,-0.902l4.248,1.160l0.516,1.028l0.771,4.248l2.705,1.676l2.317,-2.833l3.090,-1.674l2.316,0l2.318,0.901l2.059,1.030l2.832,0.515l-0.129,-8.752zM761.116,223.434l1.801,1.416l1.803,-0.514l1.672,0.257l1.545,-1.417l1.289,-0.257l2.574,0.772l2.189,-0.515l1.414,-3.862l1.032,-0.901l0.900,-3.089l3.090,0l2.316,0.515l-1.545,2.446l2.059,2.574l-0.514,1.160l3.090,2.574l-3.217,0.257l-0.902,1.802l0.129,2.447l-2.576,1.930l-0.129,2.575l-1.030,4.119l-0.386,-0.901l-3.088,1.158l-1.031,-1.542l-1.930,-0.259l-1.287,-0.773l-3.219,0.901l-1.029,-1.287l-1.801,0.128l-2.189,-0.256l-0.387,-3.606l-1.416,-0.772l-1.287,-2.317l-0.260,-2.317l0.260,-2.574l1.545,-1.674l-0.515,-1.802zM813.765,234.505l2.961,0.772l0.902,2.059l-2.190,-1.029l-2.318,-0.256l-1.545,0.128l-1.801,0l0.643,-1.545l-3.348,0.129zM807.069,237.209l-1.929,-0.516l-0.516,-1.158l2.705,-0.129l0.643,0.901l0.903,-0.902zM809.903,221.117l0.129,1.416l1.674,0.258l0.256,1.158l-0.256,2.317l-1.289,-0.258l-0.514,1.674l1.159,1.417l-0.774,0.256l-1.029,-1.673l-0.772,-3.476l0.514,-2.060l-0.902,1.029zM796.386,224.593l3.090,-0.130l2.703,-1.930l0.386,0.643l-2.060,2.704l-2.059,0.515l-2.574,-0.644l-4.506,0.257l-2.316,0.387l-0.387,1.931l2.316,2.445l1.545,-1.158l5.022,-1.031l-0.258,1.289l-1.158,-0.387l-1.160,1.545l-2.446,1.030l2.575,3.476l-0.514,0.903l2.445,3.216l0,1.674l-1.416,0.771l-1.029,-0.901l1.287,-2.186l-2.703,1.028l-0.645,-0.772l0.385,-1.031l-1.930,-1.544l0.131,-2.574l-1.804,0.773l0.257,3.088l0.129,3.862l-1.800,0.387l-1.161,-0.774l0.774,-2.443l-0.389,-2.574l-1.156,-0.131l-0.772,-1.802l1.159,-1.802l0.384,-2.060l1.288,-4.120l0.515,-1.029l2.317,-2.060l2.189,0.772l-3.346,-0.387zM789.306,254.588l-3.604,-1.804l2.574,-0.643l1.416,0.902l0.903,0.771l-0.131,0.774l1.158,0zM792.138,249.953l1.802,-0.129l2.317,-1.029l-0.385,1.544l-3.992,0.643l-3.604,-0.257l0,-1.030l2.188,-0.515l-1.674,-0.773zM783.771,249.566l1.673,-0.257l0.645,1.158l-3.090,0.515l-1.803,0.387l-1.545,0l1.030,-1.674l1.416,0l0.773,-0.900l-0.901,-0.771zM757.511,244.287l0.386,0.902l5.149,0.258l0.514,-1.031l5.021,1.288l1.029,1.674l3.991,0.515l3.349,1.673l-3.092,1.032l-2.961,-1.160l-2.445,0.128l-2.832,-0.257l-2.445,-0.514l-3.219,-0.902l-1.932,-0.387l-1.158,0.387l-4.890,-1.159l-0.387,-1.158l-2.574,-0.129l1.929,-2.574l3.219,0.127l2.190,1.031l-1.158,-0.256zM746.438,229.871l0.387,1.932l0.903,1.415l2.058,0.257l1.289,1.802l-0.644,3.347l-0.129,4.118l-2.961,0l-2.317,-2.187l-3.476,-2.188l-1.158,-1.674l-2.059,-2.188l-1.289,-2.060l-2.061,-3.733l-2.314,-2.189l-0.775,-2.317l-1.028,-2.187l-2.447,-1.674l-1.416,-2.318l-2.059,-1.416l-2.705,-3.090l-0.256,-1.287l1.674,0.129l4.248,0.515l2.317,2.575l2.058,1.803l1.547,1.157l2.572,2.962l2.706,0l2.187,1.801l1.674,2.318l2.060,1.158l-1.158,2.189l1.545,1.030l-1.027,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iran",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M610.502,126.756l2.317,-0.513l1.932,-1.546l1.803,0.129l1.157,-0.515l1.932,0.257l2.961,1.288l2.188,0.387l3.088,2.317l2.060,0.128l0.129,2.188l-1.029,3.477l-0.773,1.930l1.158,0.386l-1.158,1.416l0.902,2.188l0.256,1.674l2.060,0.515l0.129,1.673l-2.445,2.447l1.414,1.415l1.031,1.674l2.574,1.159l0.128,2.446l1.288,0.386l0.259,1.287l-3.992,1.288l-1.030,3.218l-5.020,-0.902l-2.961,-0.515l-2.961,-0.386l-1.160,-3.346l-1.285,-0.515l-2.058,0.515l-2.706,1.287l-3.345,-0.901l-2.705,-2.060l-2.575,-0.773l-1.800,-2.446l-2.061,-3.604l-1.416,0.387l-1.674,-0.902l-1.029,1.030l-1.545,-1.416l0,-1.416l-0.901,0l0.514,-1.931l-1.415,-2.060l-3.347,-1.416l-1.802,-2.575l0.643,-2.187l1.289,-0.902l-0.130,-1.545l-1.802,-0.772l-1.803,-3.476l-0.128,0l-1.288,-1.931l0.516,-0.901l-0.773,-3.089l1.802,-0.772l0.387,1.028l1.415,1.288l1.804,0.386l1.029,-0.129l3.089,-1.930l1.030,-0.258l0.773,0.773l-0.902,1.415l1.674,1.417l0.643,-0.129l0.901,1.931l2.575,0.516l1.803,1.415l3.862,0.385l4.247,-0.643l-0.257,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Iran",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Iran\x0a\x09^ 'M610.502,126.756l2.317,-0.513l1.932,-1.546l1.803,0.129l1.157,-0.515l1.932,0.257l2.961,1.288l2.188,0.387l3.088,2.317l2.060,0.128l0.129,2.188l-1.029,3.477l-0.773,1.930l1.158,0.386l-1.158,1.416l0.902,2.188l0.256,1.674l2.060,0.515l0.129,1.673l-2.445,2.447l1.414,1.415l1.031,1.674l2.574,1.159l0.128,2.446l1.288,0.386l0.259,1.287l-3.992,1.288l-1.030,3.218l-5.020,-0.902l-2.961,-0.515l-2.961,-0.386l-1.160,-3.346l-1.285,-0.515l-2.058,0.515l-2.706,1.287l-3.345,-0.901l-2.705,-2.060l-2.575,-0.773l-1.800,-2.446l-2.061,-3.604l-1.416,0.387l-1.674,-0.902l-1.029,1.030l-1.545,-1.416l0,-1.416l-0.901,0l0.514,-1.931l-1.415,-2.060l-3.347,-1.416l-1.802,-2.575l0.643,-2.187l1.289,-0.902l-0.130,-1.545l-1.802,-0.772l-1.803,-3.476l-0.128,0l-1.288,-1.931l0.516,-0.901l-0.773,-3.089l1.802,-0.772l0.387,1.028l1.415,1.288l1.804,0.386l1.029,-0.129l3.089,-1.930l1.030,-0.258l0.773,0.773l-0.902,1.415l1.674,1.417l0.643,-0.129l0.901,1.931l2.575,0.516l1.803,1.415l3.862,0.385l4.247,-0.643l-0.257,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iraq",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M585.658,126.628l0.128,0l1.803,3.476l1.802,0.772l0.130,1.545l-1.289,0.902l-0.643,2.187l1.802,2.575l3.347,1.416l1.415,2.060l-0.514,1.931l0.901,0l0,1.416l1.545,1.416l-1.674,-0.128l-1.803,-0.258l-1.930,2.703l-5.020,-0.258l-7.596,-5.406l-3.990,-1.931l-3.218,-0.773l-1.158,-3.218l6.051,-2.832l1.029,-3.218l-0.258,-1.931l1.417,-0.773l1.416,-1.673l1.158,-0.385l3.091,0.385l0.899,0.643l1.287,-0.385l0.128,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iraq",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Iraq\x0a\x09^ 'M585.658,126.628l0.128,0l1.803,3.476l1.802,0.772l0.130,1.545l-1.289,0.902l-0.643,2.187l1.802,2.575l3.347,1.416l1.415,2.060l-0.514,1.931l0.901,0l0,1.416l1.545,1.416l-1.674,-0.128l-1.803,-0.258l-1.930,2.703l-5.020,-0.258l-7.596,-5.406l-3.990,-1.931l-3.218,-0.773l-1.158,-3.218l6.051,-2.832l1.029,-3.218l-0.258,-1.931l1.417,-0.773l1.416,-1.673l1.158,-0.385l3.091,0.385l0.899,0.643l1.287,-0.385l0.128,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ireland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M448.562,81.83l0.387,1.931l-2.060,2.445l-4.764,1.544l-3.732,-0.385l2.188,-2.832l-1.415,-2.703l3.604,-2.060l2.059,-1.287l0.515,1.415l-0.515,1.416l1.673,0l-2.060,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Ireland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Ireland\x0a\x09^ 'M448.562,81.83l0.387,1.931l-2.060,2.445l-4.764,1.544l-3.732,-0.385l2.188,-2.832l-1.415,-2.703l3.604,-2.060l2.059,-1.287l0.515,1.415l-0.515,1.416l1.673,0l-2.060,-0.516z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Israel",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.458,138.857l-0.516,0.902l-0.900,-0.387l-0.645,1.803l0.774,0.258l-0.774,0.385l-0.128,0.644l1.287,-0.257l0.130,1.029l-1.417,4.249l-1.674,-4.635l0.773,-0.901l-0.258,-0.129l0.772,-1.287l0.515,-1.931l0.385,-0.773l0.130,0l0.900,0l0.259,-0.515l0.643,0l0,1.160l0.256,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Israel",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Israel\x0a\x09^ 'M561.458,138.857l-0.516,0.902l-0.900,-0.387l-0.645,1.803l0.774,0.258l-0.774,0.385l-0.128,0.644l1.287,-0.257l0.130,1.029l-1.417,4.249l-1.674,-4.635l0.773,-0.901l-0.258,-0.129l0.772,-1.287l0.515,-1.931l0.385,-0.773l0.130,0l0.900,0l0.259,-0.515l0.643,0l0,1.160l0.256,-0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Italy",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M493.361,100.624l1.672,0.386l0.258,-0.514l2.703,-0.386l0.644,0.900l3.734,0.644l-0.259,1.417l0.646,1.029l-2.063,-0.386l-2.315,1.030l0.257,1.287l-0.387,0.772l0.900,1.417l2.577,1.287l1.287,2.317l2.961,2.189l2.187,-0.130l0.645,0.644l-0.773,0.515l2.445,1.030l1.933,0.772l2.315,1.416l0.257,0.516l-0.513,0.900l-1.417,-1.157l-2.316,-0.516l-1.159,1.803l1.931,0.901l-0.387,1.416l-1.030,0.257l-1.544,2.317l-1.029,0.129l0,-0.772l0.514,-1.417l0.644,-0.643l-1.158,-1.545l-0.772,-1.417l-1.160,-0.256l-0.772,-1.159l-1.673,-0.515l-1.159,-1.030l-2.060,-0.257l-2.061,-1.159l-2.444,-1.802l-1.933,-1.545l-0.772,-2.703l-1.286,-0.258l-2.189,-0.901l-1.288,0.386l-1.545,1.287l-1.157,0.130l0.258,-1.160l-1.418,-0.386l-0.642,-2.058l0.901,-0.774l-0.772,-1.029l0.128,-0.772l1.160,0.643l1.287,-0.128l1.543,-1.031l0.387,0.516l1.288,-0.129l0.643,-1.030l1.932,0.257l1.158,-0.386l-0.258,1.159zM504.944,124.183l2.061,-0.258l-0.901,2.188l0.387,0.773l-0.644,1.415l-2.061,-1.030l-1.286,-0.256l-3.733,-1.416l0.384,-1.288l3.091,0.257l-2.702,0.385zM488.726,116.844l1.287,-0.901l1.675,1.931l-0.387,3.605l-1.288,-0.258l-1.029,0.902l-1.032,-0.644l-0.128,-3.219l-0.642,-1.545l-1.544,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Italy",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Italy\x0a\x09^ 'M493.361,100.624l1.672,0.386l0.258,-0.514l2.703,-0.386l0.644,0.900l3.734,0.644l-0.259,1.417l0.646,1.029l-2.063,-0.386l-2.315,1.030l0.257,1.287l-0.387,0.772l0.900,1.417l2.577,1.287l1.287,2.317l2.961,2.189l2.187,-0.130l0.645,0.644l-0.773,0.515l2.445,1.030l1.933,0.772l2.315,1.416l0.257,0.516l-0.513,0.900l-1.417,-1.157l-2.316,-0.516l-1.159,1.803l1.931,0.901l-0.387,1.416l-1.030,0.257l-1.544,2.317l-1.029,0.129l0,-0.772l0.514,-1.417l0.644,-0.643l-1.158,-1.545l-0.772,-1.417l-1.160,-0.256l-0.772,-1.159l-1.673,-0.515l-1.159,-1.030l-2.060,-0.257l-2.061,-1.159l-2.444,-1.802l-1.933,-1.545l-0.772,-2.703l-1.286,-0.258l-2.189,-0.901l-1.288,0.386l-1.545,1.287l-1.157,0.130l0.258,-1.160l-1.418,-0.386l-0.642,-2.058l0.901,-0.774l-0.772,-1.029l0.128,-0.772l1.160,0.643l1.287,-0.128l1.543,-1.031l0.387,0.516l1.288,-0.129l0.643,-1.030l1.932,0.257l1.158,-0.386l-0.258,1.159zM504.944,124.183l2.061,-0.258l-0.901,2.188l0.387,0.773l-0.644,1.415l-2.061,-1.030l-1.286,-0.256l-3.733,-1.416l0.384,-1.288l3.091,0.257l-2.702,0.385zM488.726,116.844l1.287,-0.901l1.675,1.931l-0.387,3.605l-1.288,-0.258l-1.029,0.902l-1.032,-0.644l-0.128,-3.219l-0.642,-1.545l-1.544,-0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "IvoryCoast",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"IvoryCoast",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "IvoryCoast\x0a\x09^ 'M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jamacia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M256.242,177.22l1.802,0.128l1.416,0.644l0.515,0.772l-1.931,0.129l-0.772,0.386l-1.544,-0.386l-1.545,-1.030l0.385,-0.643l1.030,-0.130l-0.644,-0.130z";
}, function($ctx1) {$ctx1.fill(self,"Jamacia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Jamacia\x0a\x09^ 'M256.242,177.22l1.802,0.128l1.416,0.644l0.515,0.772l-1.931,0.129l-0.772,0.386l-1.544,-0.386l-1.545,-1.030l0.385,-0.643l1.030,-0.130l-0.644,-0.130z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Japan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M847.491,121.479l-2.574,2.704l0.129,2.703l-1.031,2.188l0.386,1.287l-1.287,1.931l-3.476,1.288l-4.762,0.128l-3.861,3.090l-1.801,-1.030l-0.129,-1.932l-4.635,0.517l-3.219,1.287l-3.089,0l2.703,2.059l-1.803,4.506l-1.801,1.159l-1.287,-1.031l0.643,-2.445l-1.672,-0.772l-1.031,-1.804l2.445,-0.900l1.416,-1.674l2.705,-1.415l2.059,-1.803l5.277,-0.773l2.961,0.516l2.832,-4.764l1.803,1.288l3.861,-2.704l1.545,-1.029l1.674,-3.347l-0.387,-2.961l1.158,-1.803l2.832,-0.386l1.416,3.734l0,-2.188zM854.829,108.606l1.930,-1.159l0.515,2.961l-3.990,0.772l-2.316,2.703l-4.250,-1.931l-1.414,2.962l-3.090,0.128l-0.387,-2.703l1.416,-2.060l2.832,-0.128l0.774,-3.734l0.771,-2.188l3.219,2.832l2.060,0.901l-1.930,-0.644zM821.874,136.798l1.416,-1.545l1.545,0.257l1.160,-1.157l1.930,0.643l0.387,0.900l-1.545,1.674l-1.159,-0.901l-1.287,0.643l-0.773,1.545l-1.801,-0.772l-0.127,1.287z";
}, function($ctx1) {$ctx1.fill(self,"Japan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Japan\x0a\x09^ 'M847.491,121.479l-2.574,2.704l0.129,2.703l-1.031,2.188l0.386,1.287l-1.287,1.931l-3.476,1.288l-4.762,0.128l-3.861,3.090l-1.801,-1.030l-0.129,-1.932l-4.635,0.517l-3.219,1.287l-3.089,0l2.703,2.059l-1.803,4.506l-1.801,1.159l-1.287,-1.031l0.643,-2.445l-1.672,-0.772l-1.031,-1.804l2.445,-0.900l1.416,-1.674l2.705,-1.415l2.059,-1.803l5.277,-0.773l2.961,0.516l2.832,-4.764l1.803,1.288l3.861,-2.704l1.545,-1.029l1.674,-3.347l-0.387,-2.961l1.158,-1.803l2.832,-0.386l1.416,3.734l0,-2.188zM854.829,108.606l1.930,-1.159l0.515,2.961l-3.990,0.772l-2.316,2.703l-4.250,-1.931l-1.414,2.962l-3.090,0.128l-0.387,-2.703l1.416,-2.060l2.832,-0.128l0.774,-3.734l0.771,-2.188l3.219,2.832l2.060,0.901l-1.930,-0.644zM821.874,136.798l1.416,-1.545l1.545,0.257l1.160,-1.157l1.930,0.643l0.387,0.900l-1.545,1.674l-1.159,-0.901l-1.287,0.643l-0.773,1.545l-1.801,-0.772l-0.127,1.287z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jordan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0.516,-0.902l2.960,1.031l5.278,-2.833l1.158,3.218l-0.514,0.516l-5.407,1.287l2.703,2.703l-0.901,0.515l-0.515,0.902l-2.060,0.386l-0.643,0.901l-1.160,0.900l-2.960,-0.514l-0.128,-0.386l1.417,-4.249l-0.130,-1.029l0.386,-0.902l0,1.544z";
}, function($ctx1) {$ctx1.fill(self,"Jordan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Jordan\x0a\x09^ 'M560.942,139.759l0.516,-0.902l2.960,1.031l5.278,-2.833l1.158,3.218l-0.514,0.516l-5.407,1.287l2.703,2.703l-0.901,0.515l-0.515,0.902l-2.060,0.386l-0.643,0.901l-1.160,0.900l-2.960,-0.514l-0.128,-0.386l1.417,-4.249l-0.130,-1.029l0.386,-0.902l0,1.544z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kazakhstan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l-1.547,0.515l-3.603,1.802l-1.160,1.931l-1.030,0.129l-0.771,-1.288l-3.347,-0.128l-0.644,-2.189l-1.287,0l0.258,-2.703l-3.219,-2.060l-4.633,0.259l-3.219,0.385l-2.574,-2.446l-2.189,-1.029l-4.120,-1.931l-0.515,-0.129l-6.951,1.544l0.130,9.914l-1.419,0.128l-1.930,-2.060l-1.800,-0.772l-3.090,0.515l-1.160,0.900l-0.127,-0.643l0.642,-1.159l-0.515,-0.900l-3.089,-0.902l-1.286,-2.446l-1.416,-0.644l-0.130,-0.901l2.702,0.258l0,-1.931l2.320,-0.514l2.316,0.385l0.515,-2.574l-0.387,-1.674l-2.704,0.129l-2.316,-0.644l-3.090,1.159l-2.574,0.643l-1.416,-0.514l0.387,-1.416l-1.803,-1.803l-1.931,0.129l-2.317,-1.802l1.545,-2.060l-0.772,-0.515l2.186,-2.960l2.705,1.544l0.387,-1.931l5.535,-2.962l4.248,-0.127l5.922,1.931l3.088,1.029l2.961,-1.158l4.250,0l3.474,1.416l0.773,-0.772l3.732,0l0.644,-1.159l-4.376,-1.931l2.702,-1.288l-0.515,-0.772l2.575,-0.644l-1.929,-1.931l1.158,-0.901l10.039,-0.901l1.418,-0.644l6.693,-1.028l2.446,-1.160l4.763,0.644l0.901,2.833l2.832,-0.645l3.474,0.901l-0.258,1.416l2.577,-0.128l6.822,-2.575l-1.029,0.901l3.474,2.060l5.922,6.822l1.545,-1.416l3.605,1.546l3.860,-0.644l1.545,0.514l1.289,1.545l1.930,0.515l1.158,1.159l3.478,-0.387l1.414,1.675l-2.060,1.801l-2.317,0.128l-0.127,2.704l-1.416,1.288l-5.408,-0.901l-1.931,4.892l-1.415,0.514l-5.279,1.159l2.445,4.635l-1.931,0.643l0.260,1.545l-1.674,-0.386l-1.287,-0.902l-3.993,-0.386l-4.505,0l-1.030,0.258l-3.732,-1.159l-1.545,0.644l-0.514,1.545l-4.378,-0.902l-1.801,0.386l0.514,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Kazakhstan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Kazakhstan\x0a\x09^ 'M656.46,113.111l-1.547,0.515l-3.603,1.802l-1.160,1.931l-1.030,0.129l-0.771,-1.288l-3.347,-0.128l-0.644,-2.189l-1.287,0l0.258,-2.703l-3.219,-2.060l-4.633,0.259l-3.219,0.385l-2.574,-2.446l-2.189,-1.029l-4.120,-1.931l-0.515,-0.129l-6.951,1.544l0.130,9.914l-1.419,0.128l-1.930,-2.060l-1.800,-0.772l-3.090,0.515l-1.160,0.900l-0.127,-0.643l0.642,-1.159l-0.515,-0.900l-3.089,-0.902l-1.286,-2.446l-1.416,-0.644l-0.130,-0.901l2.702,0.258l0,-1.931l2.320,-0.514l2.316,0.385l0.515,-2.574l-0.387,-1.674l-2.704,0.129l-2.316,-0.644l-3.090,1.159l-2.574,0.643l-1.416,-0.514l0.387,-1.416l-1.803,-1.803l-1.931,0.129l-2.317,-1.802l1.545,-2.060l-0.772,-0.515l2.186,-2.960l2.705,1.544l0.387,-1.931l5.535,-2.962l4.248,-0.127l5.922,1.931l3.088,1.029l2.961,-1.158l4.250,0l3.474,1.416l0.773,-0.772l3.732,0l0.644,-1.159l-4.376,-1.931l2.702,-1.288l-0.515,-0.772l2.575,-0.644l-1.929,-1.931l1.158,-0.901l10.039,-0.901l1.418,-0.644l6.693,-1.028l2.446,-1.160l4.763,0.644l0.901,2.833l2.832,-0.645l3.474,0.901l-0.258,1.416l2.577,-0.128l6.822,-2.575l-1.029,0.901l3.474,2.060l5.922,6.822l1.545,-1.416l3.605,1.546l3.860,-0.644l1.545,0.514l1.289,1.545l1.930,0.515l1.158,1.159l3.478,-0.387l1.414,1.675l-2.060,1.801l-2.317,0.128l-0.127,2.704l-1.416,1.288l-5.408,-0.901l-1.931,4.892l-1.415,0.514l-5.279,1.159l2.445,4.635l-1.931,0.643l0.260,1.545l-1.674,-0.386l-1.287,-0.902l-3.993,-0.386l-4.505,0l-1.030,0.258l-3.732,-1.159l-1.545,0.644l-0.514,1.545l-4.378,-0.902l-1.801,0.386l0.514,-1.159z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kenya",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Kenya",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Kenya\x0a\x09^ 'M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kuwait",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M594.411,146.196l0.645,1.158l-0.257,0.643l0.900,2.060l-1.930,0.129l-0.644,-1.288l-2.447,-0.257l1.930,-2.703l-1.803,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kuwait",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Kuwait\x0a\x09^ 'M594.411,146.196l0.645,1.158l-0.257,0.643l0.900,2.060l-1.930,0.129l-0.644,-1.288l-2.447,-0.257l1.930,-2.703l-1.803,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kyrgyzstan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l0.514,-1.159l1.801,-0.386l4.378,0.902l0.514,-1.545l1.545,-0.644l3.732,1.159l1.030,-0.258l4.505,0l3.993,0.386l1.287,0.902l1.674,0.386l-0.387,0.644l-4.248,1.416l-0.901,1.158l-3.476,0.258l-1.029,1.673l-2.834,-0.257l-1.930,0.514l-2.574,1.288l0.386,0.643l-0.773,0.516l-5.020,0.514l-3.347,-0.901l-2.961,0.129l0.257,-1.545l2.961,0.515l1.030,-0.900l2.060,0.257l3.346,-1.932l-3.090,-1.416l-1.929,0.772l-2.061,-1.030l2.317,-1.801l0.770,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kyrgyzstan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Kyrgyzstan\x0a\x09^ 'M656.46,113.111l0.514,-1.159l1.801,-0.386l4.378,0.902l0.514,-1.545l1.545,-0.644l3.732,1.159l1.030,-0.258l4.505,0l3.993,0.386l1.287,0.902l1.674,0.386l-0.387,0.644l-4.248,1.416l-0.901,1.158l-3.476,0.258l-1.029,1.673l-2.834,-0.257l-1.930,0.514l-2.574,1.288l0.386,0.643l-0.773,0.516l-5.020,0.514l-3.347,-0.901l-2.961,0.129l0.257,-1.545l2.961,0.515l1.030,-0.900l2.060,0.257l3.346,-1.932l-3.090,-1.416l-1.929,0.772l-2.061,-1.030l2.317,-1.801l0.770,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Laos",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M748.628,188.549l0.902,-1.288l0.127,-2.189l-2.187,-2.446l-0.129,-2.574l-2.059,-2.189l-2.060,-0.258l-0.516,1.030l-1.545,0l-0.900,-0.385l-2.832,1.544l0,-2.446l0.642,-2.832l-1.800,-0.128l-0.129,-1.546l-1.161,-0.900l0.516,-0.902l2.318,-1.802l0.256,0.643l1.418,0l-0.386,-3.089l1.416,-0.386l1.544,2.188l1.159,2.446l3.347,0l1.028,2.317l-1.672,0.772l-0.774,0.902l3.219,1.674l2.188,3.217l1.673,2.318l2.061,1.931l0.645,1.803l-0.387,2.702l-2.446,-0.901l-1.160,1.803l2.316,1.029z";
}, function($ctx1) {$ctx1.fill(self,"Laos",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Laos\x0a\x09^ 'M748.628,188.549l0.902,-1.288l0.127,-2.189l-2.187,-2.446l-0.129,-2.574l-2.059,-2.189l-2.060,-0.258l-0.516,1.030l-1.545,0l-0.900,-0.385l-2.832,1.544l0,-2.446l0.642,-2.832l-1.800,-0.128l-0.129,-1.546l-1.161,-0.900l0.516,-0.902l2.318,-1.802l0.256,0.643l1.418,0l-0.386,-3.089l1.416,-0.386l1.544,2.188l1.159,2.446l3.347,0l1.028,2.317l-1.672,0.772l-0.774,0.902l3.219,1.674l2.188,3.217l1.673,2.318l2.061,1.931l0.645,1.803l-0.387,2.702l-2.446,-0.901l-1.160,1.803l2.316,1.029z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Latvia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M521.938,76.037l0.128,-2.060l1.288,-1.674l2.573,-0.900l2.060,2.059l2.190,-0.128l0.513,-2.061l2.319,-0.514l1.158,0.387l2.316,1.028l2.318,0l1.286,0.644l0.129,1.287l0.901,1.545l-2.831,1.031l-1.674,0.514l-2.574,-1.288l-1.416,-0.257l-0.385,-0.515l-2.705,0.259l-4.506,-0.130l3.088,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Latvia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Latvia\x0a\x09^ 'M521.938,76.037l0.128,-2.060l1.288,-1.674l2.573,-0.900l2.060,2.059l2.190,-0.128l0.513,-2.061l2.319,-0.514l1.158,0.387l2.316,1.028l2.318,0l1.286,0.644l0.129,1.287l0.901,1.545l-2.831,1.031l-1.674,0.514l-2.574,-1.288l-1.416,-0.257l-0.385,-0.515l-2.705,0.259l-4.506,-0.130l3.088,-0.773z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lebanon",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.714,137.312l-0.643,0l-0.259,0.515l-0.900,0l0.900,-2.187l1.289,-1.932l0.128,0l1.159,0.128l0.515,1.031l-1.546,1.029l-0.514,1.416l0.129,0z";
}, function($ctx1) {$ctx1.fill(self,"Lebanon",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Lebanon\x0a\x09^ 'M561.714,137.312l-0.643,0l-0.259,0.515l-0.900,0l0.900,-2.187l1.289,-1.932l0.128,0l1.159,0.128l0.515,1.031l-1.546,1.029l-0.514,1.416l0.129,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lesotho",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z";
}, function($ctx1) {$ctx1.fill(self,"Lesotho",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Lesotho\x0a\x09^ 'M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Liberia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z";
}, function($ctx1) {$ctx1.fill(self,"Liberia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Liberia\x0a\x09^ 'M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Libya",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.204,165.376l-1.932,1.030l-1.416,-1.544l-4.248,-1.159l-1.288,-1.674l-2.060,-1.158l-1.286,0.385l-0.902,-1.415l-0.127,-1.159l-1.546,-2.059l1.030,-1.030l-0.259,-1.673l0.387,-1.546l-0.256,-1.158l0.513,-2.318l-0.126,-1.158l-0.903,-2.446l1.287,-0.643l0.257,-1.031l-0.257,-1.158l1.803,-1.029l0.900,-0.902l1.288,-0.772l0.129,-2.060l3.217,0.901l1.030,-0.257l2.320,0.514l3.602,1.159l1.160,2.446l2.446,0.515l3.860,1.158l2.833,1.288l1.286,-0.644l1.288,-1.287l-0.643,-2.059l0.900,-1.288l1.932,-1.288l1.801,-0.385l3.734,0.514l0.901,1.287l1.029,0l0.773,0.516l2.703,0.257l0.645,0.901l-0.903,1.287l0.387,1.159l-0.772,1.673l0.901,2.189l0,9.526l0,9.912l0,5.408l-2.832,0l0,1.415l-11.069,-5.407l-10.815,-5.149l2.702,-1.416z";
}, function($ctx1) {$ctx1.fill(self,"Libya",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Libya\x0a\x09^ 'M505.204,165.376l-1.932,1.030l-1.416,-1.544l-4.248,-1.159l-1.288,-1.674l-2.060,-1.158l-1.286,0.385l-0.902,-1.415l-0.127,-1.159l-1.546,-2.059l1.030,-1.030l-0.259,-1.673l0.387,-1.546l-0.256,-1.158l0.513,-2.318l-0.126,-1.158l-0.903,-2.446l1.287,-0.643l0.257,-1.031l-0.257,-1.158l1.803,-1.029l0.900,-0.902l1.288,-0.772l0.129,-2.060l3.217,0.901l1.030,-0.257l2.320,0.514l3.602,1.159l1.160,2.446l2.446,0.515l3.860,1.158l2.833,1.288l1.286,-0.644l1.288,-1.287l-0.643,-2.059l0.900,-1.288l1.932,-1.288l1.801,-0.385l3.734,0.514l0.901,1.287l1.029,0l0.773,0.516l2.703,0.257l0.645,0.901l-0.903,1.287l0.387,1.159l-0.772,1.673l0.901,2.189l0,9.526l0,9.912l0,5.408l-2.832,0l0,1.415l-11.069,-5.407l-10.815,-5.149l2.702,-1.416z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lithuania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,80.67l-0.128,-0.772l0.259,-0.643l-1.289,-0.515l-2.702,-0.386l-0.644,-2.317l3.088,-0.773l4.506,0.130l2.705,-0.259l0.385,0.515l1.416,0.257l2.574,1.288l0.258,1.159l-2.189,0.901l-0.643,1.545l-2.961,0.901l-2.574,0l-0.644,-0.772l1.417,0.259z";
}, function($ctx1) {$ctx1.fill(self,"Lithuania",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Lithuania\x0a\x09^ 'M526.442,80.67l-0.128,-0.772l0.259,-0.643l-1.289,-0.515l-2.702,-0.386l-0.644,-2.317l3.088,-0.773l4.506,0.130l2.705,-0.259l0.385,0.515l1.416,0.257l2.574,1.288l0.258,1.159l-2.189,0.901l-0.643,1.545l-2.961,0.901l-2.574,0l-0.644,-0.772l1.417,0.259z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Luxembourg",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.516,91.999l0.516,0.515l-0.129,1.159l-0.773,0.129l-0.643,-0.259l0.385,-1.544l-0.644,0z";
}, function($ctx1) {$ctx1.fill(self,"Luxembourg",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Luxembourg\x0a\x09^ 'M481.516,91.999l0.516,0.515l-0.129,1.159l-0.773,0.129l-0.643,-0.259l0.385,-1.544l-0.644,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Madagascar",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Madagascar",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Madagascar\x0a\x09^ 'M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malawi",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z";
}, function($ctx1) {$ctx1.fill(self,"Malawi",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Malawi\x0a\x09^ 'M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malaysia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M740.39,210.174l0.642,0.258l1.545,1.673l1.160,1.803l0.129,1.803l-0.258,1.287l0.258,0.900l0.129,1.545l1.029,0.772l1.030,2.318l0,0.901l-1.932,0.257l-2.574,-2.059l-3.217,-2.060l-0.260,-1.416l-1.543,-1.802l-0.386,-2.188l-1.032,-1.546l0.387,-1.931l-0.643,-1.158l0.516,-0.385l2.188,1.157l0.129,1.287l1.802,-0.257l-0.901,1.159zM760.601,221.632l2.058,0.901l2.061,-0.514l0.513,-2.318l1.159,-0.515l3.218,-0.515l1.932,-2.189l1.287,-1.673l1.287,1.417l0.516,-0.902l1.285,0l0.260,-1.674l0.127,-1.287l2.060,-1.931l1.287,-2.059l1.159,0l1.287,1.286l0.129,1.159l1.802,0.772l2.319,0.773l-0.258,1.158l-1.803,0.129l0.514,1.288l-2.059,0.901l-2.316,-0.515l-3.090,0l-0.900,3.089l-1.032,0.901l-1.414,3.862l-2.189,0.515l-2.574,-0.772l-1.289,0.257l-1.545,1.417l-1.672,-0.257l-1.803,0.514l-1.801,-1.416l0.515,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Malaysia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Malaysia\x0a\x09^ 'M740.39,210.174l0.642,0.258l1.545,1.673l1.160,1.803l0.129,1.803l-0.258,1.287l0.258,0.900l0.129,1.545l1.029,0.772l1.030,2.318l0,0.901l-1.932,0.257l-2.574,-2.059l-3.217,-2.060l-0.260,-1.416l-1.543,-1.802l-0.386,-2.188l-1.032,-1.546l0.387,-1.931l-0.643,-1.158l0.516,-0.385l2.188,1.157l0.129,1.287l1.802,-0.257l-0.901,1.159zM760.601,221.632l2.058,0.901l2.061,-0.514l0.513,-2.318l1.159,-0.515l3.218,-0.515l1.932,-2.189l1.287,-1.673l1.287,1.417l0.516,-0.902l1.285,0l0.260,-1.674l0.127,-1.287l2.060,-1.931l1.287,-2.059l1.159,0l1.287,1.286l0.129,1.159l1.802,0.772l2.319,0.773l-0.258,1.158l-1.803,0.129l0.514,1.288l-2.059,0.901l-2.316,-0.515l-3.090,0l-0.900,3.089l-1.032,0.901l-1.414,3.862l-2.189,0.515l-2.574,-0.772l-1.289,0.257l-1.545,1.417l-1.672,-0.257l-1.803,0.514l-1.801,-1.416l0.515,1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mali",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z";
}, function($ctx1) {$ctx1.fill(self,"Mali",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Mali\x0a\x09^ 'M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mauritania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Mauritania",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Mauritania\x0a\x09^ 'M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mexico",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M203.592,157.266l-1.030,2.446l-0.515,1.931l-0.257,3.605l-0.257,1.287l0.514,1.416l0.773,1.287l0.644,2.188l1.802,1.931l0.515,1.545l1.158,1.416l2.832,0.643l1.029,1.159l2.447,-0.772l2.060,-0.258l1.930,-0.513l1.803,-0.388l1.672,-1.158l0.644,-1.545l0.258,-2.317l0.386,-0.772l1.803,-0.644l2.961,-0.644l2.316,0l1.674,-0.129l0.644,0.516l-0.129,1.287l-1.417,1.674l-0.643,1.544l0.515,0.515l-0.386,1.158l-0.772,2.060l-0.644,-0.644l-0.515,0l-0.515,0.130l-1.030,1.544l-0.515,-0.258l-0.257,0.129l0,0.387l-2.446,0l-2.575,0l0,1.416l-1.158,0l0.901,0.901l1.030,0.643l0.387,0.644l0.385,0.128l-0.128,0.903l-3.347,0l-1.416,2.188l0.385,0.514l-0.257,0.643l-0.128,0.773l-2.961,-2.832l-1.416,-0.901l-2.189,-0.772l-1.544,0.257l-2.189,1.030l-1.287,0.258l-1.930,-0.773l-2.060,-0.515l-2.446,-1.158l-2.061,-0.387l-3.088,-1.287l-2.189,-1.286l-0.644,-0.645l-1.545,-0.258l-2.702,-0.772l-1.159,-1.287l-2.961,-1.545l-1.288,-1.673l-0.644,-1.287l0.902,-0.258l-0.258,-0.772l0.644,-0.772l0,-0.902l-0.901,-1.158l-0.257,-1.159l-0.902,-1.287l-2.445,-2.704l-2.703,-2.059l-1.288,-1.674l-2.317,-1.159l-0.515,-0.643l0.386,-1.674l-1.287,-0.643l-1.673,-1.287l-0.644,-1.802l-1.416,-0.258l-1.545,-1.416l-1.287,-1.288l-0.129,-0.901l-1.416,-2.060l-1.029,-2.059l0.128,-1.030l-1.931,-1.030l-0.901,0.129l-1.544,-0.773l-0.515,1.159l0.515,1.288l0.257,1.930l0.901,1.160l1.931,1.801l0.515,0.644l0.386,0.257l0.386,0.902l0.515,0l0.515,1.673l0.773,0.644l0.643,1.030l1.673,1.415l0.902,2.446l0.772,1.159l0.773,1.287l0.128,1.416l1.287,0.129l1.030,1.158l1.029,1.288l-0.128,0.386l-1.029,1.030l-0.516,0l-0.772,-1.673l-1.673,-1.546l-1.931,-1.286l-1.416,-0.644l0.129,-1.931l-0.515,-1.545l-1.288,-0.773l-1.802,-1.287l-0.386,0.386l-0.644,-0.643l-1.673,-0.643l-1.545,-1.675l0.129,-0.128l1.158,0.128l1.030,-1.029l0,-1.159l-2.059,-1.931l-1.545,-0.772l-1.031,-1.674l-0.900,-1.802l-1.287,-2.189l-1.159,-2.317l3.090,-0.256l3.475,-0.259l-0.258,0.515l3.992,1.288l6.178,1.931l5.407,0l2.060,0l0.129,-1.158l4.633,0l0.902,0.900l1.416,0.901l1.545,1.159l0.900,1.416l0.772,1.545l1.288,0.772l2.316,0.772l1.674,-2.058l2.189,-0.130l1.930,1.159l1.288,1.802l1.030,1.545l1.545,1.545l0.515,1.931l0.772,1.287l2.188,0.773l1.931,0.643l-1.030,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Mexico",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Mexico\x0a\x09^ 'M203.592,157.266l-1.030,2.446l-0.515,1.931l-0.257,3.605l-0.257,1.287l0.514,1.416l0.773,1.287l0.644,2.188l1.802,1.931l0.515,1.545l1.158,1.416l2.832,0.643l1.029,1.159l2.447,-0.772l2.060,-0.258l1.930,-0.513l1.803,-0.388l1.672,-1.158l0.644,-1.545l0.258,-2.317l0.386,-0.772l1.803,-0.644l2.961,-0.644l2.316,0l1.674,-0.129l0.644,0.516l-0.129,1.287l-1.417,1.674l-0.643,1.544l0.515,0.515l-0.386,1.158l-0.772,2.060l-0.644,-0.644l-0.515,0l-0.515,0.130l-1.030,1.544l-0.515,-0.258l-0.257,0.129l0,0.387l-2.446,0l-2.575,0l0,1.416l-1.158,0l0.901,0.901l1.030,0.643l0.387,0.644l0.385,0.128l-0.128,0.903l-3.347,0l-1.416,2.188l0.385,0.514l-0.257,0.643l-0.128,0.773l-2.961,-2.832l-1.416,-0.901l-2.189,-0.772l-1.544,0.257l-2.189,1.030l-1.287,0.258l-1.930,-0.773l-2.060,-0.515l-2.446,-1.158l-2.061,-0.387l-3.088,-1.287l-2.189,-1.286l-0.644,-0.645l-1.545,-0.258l-2.702,-0.772l-1.159,-1.287l-2.961,-1.545l-1.288,-1.673l-0.644,-1.287l0.902,-0.258l-0.258,-0.772l0.644,-0.772l0,-0.902l-0.901,-1.158l-0.257,-1.159l-0.902,-1.287l-2.445,-2.704l-2.703,-2.059l-1.288,-1.674l-2.317,-1.159l-0.515,-0.643l0.386,-1.674l-1.287,-0.643l-1.673,-1.287l-0.644,-1.802l-1.416,-0.258l-1.545,-1.416l-1.287,-1.288l-0.129,-0.901l-1.416,-2.060l-1.029,-2.059l0.128,-1.030l-1.931,-1.030l-0.901,0.129l-1.544,-0.773l-0.515,1.159l0.515,1.288l0.257,1.930l0.901,1.160l1.931,1.801l0.515,0.644l0.386,0.257l0.386,0.902l0.515,0l0.515,1.673l0.773,0.644l0.643,1.030l1.673,1.415l0.902,2.446l0.772,1.159l0.773,1.287l0.128,1.416l1.287,0.129l1.030,1.158l1.029,1.288l-0.128,0.386l-1.029,1.030l-0.516,0l-0.772,-1.673l-1.673,-1.546l-1.931,-1.286l-1.416,-0.644l0.129,-1.931l-0.515,-1.545l-1.288,-0.773l-1.802,-1.287l-0.386,0.386l-0.644,-0.643l-1.673,-0.643l-1.545,-1.675l0.129,-0.128l1.158,0.128l1.030,-1.029l0,-1.159l-2.059,-1.931l-1.545,-0.772l-1.031,-1.674l-0.900,-1.802l-1.287,-2.189l-1.159,-2.317l3.090,-0.256l3.475,-0.259l-0.258,0.515l3.992,1.288l6.178,1.931l5.407,0l2.060,0l0.129,-1.158l4.633,0l0.902,0.900l1.416,0.901l1.545,1.159l0.900,1.416l0.772,1.545l1.288,0.772l2.316,0.772l1.674,-2.058l2.189,-0.130l1.930,1.159l1.288,1.802l1.030,1.545l1.545,1.545l0.515,1.931l0.772,1.287l2.188,0.773l1.931,0.643l-1.030,0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Moldova",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.998,97.02l0.644,-0.386l1.675,-0.259l2.059,0.903l1.029,0.128l1.287,0.644l-0.257,0.901l1.030,0.515l0.386,1.030l0.902,0.772l-0.131,0.386l0.517,0.258l-0.773,0.257l-1.545,-0.129l-0.258,-0.386l-0.513,0.258l0.129,0.386l-0.774,0.901l-0.385,0.901l-0.773,0.386l-0.387,-1.287l0.257,-1.159l-0.128,-1.158l-1.545,-1.674l-0.902,-1.029l-0.770,-0.901l0.774,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Moldova",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Moldova\x0a\x09^ 'M536.998,97.02l0.644,-0.386l1.675,-0.259l2.059,0.903l1.029,0.128l1.287,0.644l-0.257,0.901l1.030,0.515l0.386,1.030l0.902,0.772l-0.131,0.386l0.517,0.258l-0.773,0.257l-1.545,-0.129l-0.258,-0.386l-0.513,0.258l0.129,0.386l-0.774,0.901l-0.385,0.901l-0.773,0.386l-0.387,-1.287l0.257,-1.159l-0.128,-1.158l-1.545,-1.674l-0.902,-1.029l-0.770,-0.901l0.774,0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mongolia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M701.642,94.188l2.832,-0.515l5.148,-2.317l4.121,-1.287l2.317,0.901l2.832,0l1.802,1.287l2.703,0.129l3.862,0.644l2.574,-1.931l-1.029,-1.545l2.703,-2.832l3.090,1.158l2.445,0.257l3.090,0.773l0.515,1.931l3.862,1.158l2.574,-0.515l3.348,-0.257l2.705,0.257l2.701,1.287l1.674,1.417l2.445,0l3.348,0.386l2.574,-0.644l3.476,-0.387l3.991,-1.930l1.545,0.258l1.414,0.900l3.218,-0.128l-1.287,1.931l-1.931,2.704l0.771,1.158l1.420,-0.386l2.701,0.386l2.059,-0.901l2.189,0.772l2.448,1.931l-0.258,0.902l-2.190,-0.258l-3.861,0.386l-1.932,0.772l-1.931,1.803l-4.119,1.029l-2.704,1.417l-2.832,-0.516l-1.416,-0.257l-1.416,1.674l0.774,1.030l0.515,0.900l-1.931,0.902l-1.932,1.416l-3.088,1.030l-4.121,0.128l-4.375,0.902l-3.090,1.416l-1.160,-0.773l-3.347,0l-3.862,-1.673l-2.701,-0.386l-3.605,0.386l-5.536,-0.644l-2.962,0l-1.672,-1.545l-1.159,-2.446l-1.673,-0.386l-3.217,-1.674l-3.606,-0.385l-3.216,-0.387l-1.032,-1.158l1.032,-3.219l-1.803,-2.188l-3.863,-0.901l-2.317,-1.545l0.644,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Mongolia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Mongolia\x0a\x09^ 'M701.642,94.188l2.832,-0.515l5.148,-2.317l4.121,-1.287l2.317,0.901l2.832,0l1.802,1.287l2.703,0.129l3.862,0.644l2.574,-1.931l-1.029,-1.545l2.703,-2.832l3.090,1.158l2.445,0.257l3.090,0.773l0.515,1.931l3.862,1.158l2.574,-0.515l3.348,-0.257l2.705,0.257l2.701,1.287l1.674,1.417l2.445,0l3.348,0.386l2.574,-0.644l3.476,-0.387l3.991,-1.930l1.545,0.258l1.414,0.900l3.218,-0.128l-1.287,1.931l-1.931,2.704l0.771,1.158l1.420,-0.386l2.701,0.386l2.059,-0.901l2.189,0.772l2.448,1.931l-0.258,0.902l-2.190,-0.258l-3.861,0.386l-1.932,0.772l-1.931,1.803l-4.119,1.029l-2.704,1.417l-2.832,-0.516l-1.416,-0.257l-1.416,1.674l0.774,1.030l0.515,0.900l-1.931,0.902l-1.932,1.416l-3.088,1.030l-4.121,0.128l-4.375,0.902l-3.090,1.416l-1.160,-0.773l-3.347,0l-3.862,-1.673l-2.701,-0.386l-3.605,0.386l-5.536,-0.644l-2.962,0l-1.672,-1.545l-1.159,-2.446l-1.673,-0.386l-3.217,-1.674l-3.606,-0.385l-3.216,-0.387l-1.032,-1.158l1.032,-3.219l-1.803,-2.188l-3.863,-0.901l-2.317,-1.545l0.644,1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Morocco",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Morocco",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Morocco\x0a\x09^ 'M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mozambique",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z";
}, function($ctx1) {$ctx1.fill(self,"Mozambique",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Mozambique\x0a\x09^ 'M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "MyanmarBurma",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M733.437,172.585l-1.672,1.159l-1.803,0.129l-1.287,2.960l-1.158,0.515l1.287,2.317l1.802,1.931l1.030,1.802l-0.901,2.318l-1.029,0.514l0.643,1.416l1.802,2.060l0.387,1.545l-0.129,1.287l1.158,2.447l-1.545,2.445l-1.287,2.832l-0.257,-2.059l0.773,-2.060l-0.902,-1.544l0.257,-2.962l-1.158,-1.416l-0.773,-3.219l-0.516,-3.345l-1.158,-2.318l-1.803,1.415l-3.088,1.932l-1.416,-0.257l-1.673,-0.644l0.902,-3.347l-0.647,-2.575l-2.058,-3.090l0.386,-0.900l-1.671,-0.387l-1.934,-2.188l-0.127,-2.189l0.900,0.387l0.129,-1.932l1.287,-0.643l-0.255,-1.159l0.642,-0.900l0,-2.704l2.188,0.515l1.160,-2.189l0.127,-1.287l1.545,-2.317l-0.127,-1.545l3.474,-1.802l1.930,0.515l-0.256,-1.674l1.030,-0.515l-0.258,-1.029l1.545,-0.130l0.900,1.545l1.289,0.644l0,2.060l-0.131,2.188l-2.445,2.318l-0.387,3.089l2.832,-0.386l0.645,2.446l1.674,0.515l-0.772,2.317l2.059,1.030l1.160,0.387l1.930,-0.773l0.128,1.158l-2.318,1.802l-0.516,0.902l1.544,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"MyanmarBurma",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "MyanmarBurma\x0a\x09^ 'M733.437,172.585l-1.672,1.159l-1.803,0.129l-1.287,2.960l-1.158,0.515l1.287,2.317l1.802,1.931l1.030,1.802l-0.901,2.318l-1.029,0.514l0.643,1.416l1.802,2.060l0.387,1.545l-0.129,1.287l1.158,2.447l-1.545,2.445l-1.287,2.832l-0.257,-2.059l0.773,-2.060l-0.902,-1.544l0.257,-2.962l-1.158,-1.416l-0.773,-3.219l-0.516,-3.345l-1.158,-2.318l-1.803,1.415l-3.088,1.932l-1.416,-0.257l-1.673,-0.644l0.902,-3.347l-0.647,-2.575l-2.058,-3.090l0.386,-0.900l-1.671,-0.387l-1.934,-2.188l-0.127,-2.189l0.900,0.387l0.129,-1.932l1.287,-0.643l-0.255,-1.159l0.642,-0.900l0,-2.704l2.188,0.515l1.160,-2.189l0.127,-1.287l1.545,-2.317l-0.127,-1.545l3.474,-1.802l1.930,0.515l-0.256,-1.674l1.030,-0.515l-0.258,-1.029l1.545,-0.130l0.900,1.545l1.289,0.644l0,2.060l-0.131,2.188l-2.445,2.318l-0.387,3.089l2.832,-0.386l0.645,2.446l1.674,0.515l-0.772,2.317l2.059,1.030l1.160,0.387l1.930,-0.773l0.128,1.158l-2.318,1.802l-0.516,0.902l1.544,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nambia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z";
}, function($ctx1) {$ctx1.fill(self,"Nambia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Nambia\x0a\x09^ 'M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nepal",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M702.673,151.859l-0.258,1.159l0.385,1.674l-0.385,1.158l-2.189,0l-3.219,-0.644l-2.059,-0.257l-1.674,-1.287l-3.603,-0.386l-3.604,-1.545l-2.447,-1.287l-2.703,-1.031l1.160,-2.573l1.672,-1.160l1.158,-0.643l2.061,0.772l2.703,1.802l1.545,0.386l0.900,1.288l2.188,0.515l2.189,1.158l2.959,0.644l-3.221,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Nepal",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Nepal\x0a\x09^ 'M702.673,151.859l-0.258,1.159l0.385,1.674l-0.385,1.158l-2.189,0l-3.219,-0.644l-2.059,-0.257l-1.674,-1.287l-3.603,-0.386l-3.604,-1.545l-2.447,-1.287l-2.703,-1.031l1.160,-2.573l1.672,-1.160l1.158,-0.643l2.061,0.772l2.703,1.802l1.545,0.386l0.900,1.288l2.188,0.515l2.189,1.158l2.959,0.644l-3.221,-0.257z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Netherlands",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.646,82.859l2.188,0l0.515,0.902l-0.644,2.574l-0.773,0.901l-1.544,0l0.386,2.833l-1.416,-0.644l-1.673,-1.158l-2.574,0.643l-1.932,-0.258l1.417,-0.772l2.317,-3.991l-3.733,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Netherlands",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Netherlands\x0a\x09^ 'M481.646,82.859l2.188,0l0.515,0.902l-0.644,2.574l-0.773,0.901l-1.544,0l0.386,2.833l-1.416,-0.644l-1.673,-1.158l-2.574,0.643l-1.932,-0.258l1.417,-0.772l2.317,-3.991l-3.733,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NewZealand",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M941.72,334.914l-1.030,1.417l-1.287,1.931l-2.058,1.030l-0.514,-0.772l-1.160,-0.386l1.545,-2.189l-0.774,-1.416l-2.961,-1.159l0.131,-0.901l1.930,-1.030l0.387,-2.059l-0.129,-1.674l-1.029,-1.803l0,-0.514l-1.290,-1.158l-2.058,-2.317l-1.158,-1.932l1.027,-0.256l1.418,1.544l2.187,0.773l0.774,2.315l1.930,2.834l0,-1.803l1.289,0.773l0.384,1.931l2.190,0.901l1.803,0.257l1.545,-1.030l1.285,0.258l-0.645,2.446l-0.771,1.544l-2.059,0l-0.771,0.773l0.255,1.158l0.386,-0.514zM922.282,344.312l2.319,-1.416l1.671,-1.416l1.161,-1.931l1.029,-0.772l0.387,-1.416l1.929,-1.287l0.514,1.158l0.645,1.030l1.933,-1.030l0.770,1.160l0,1.157l-1.028,1.160l-1.802,2.059l-1.289,1.029l1.029,1.288l-2.188,0l-2.316,1.030l-0.645,1.803l-1.545,2.703l-2.060,1.286l-1.414,0.773l-2.445,-0.128l-1.805,-0.901l-2.830,-0.130l-0.516,-1.030l1.416,-1.930l3.477,-2.704l1.672,-0.515l-1.931,1.030z";
}, function($ctx1) {$ctx1.fill(self,"NewZealand",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "NewZealand\x0a\x09^ 'M941.72,334.914l-1.030,1.417l-1.287,1.931l-2.058,1.030l-0.514,-0.772l-1.160,-0.386l1.545,-2.189l-0.774,-1.416l-2.961,-1.159l0.131,-0.901l1.930,-1.030l0.387,-2.059l-0.129,-1.674l-1.029,-1.803l0,-0.514l-1.290,-1.158l-2.058,-2.317l-1.158,-1.932l1.027,-0.256l1.418,1.544l2.187,0.773l0.774,2.315l1.930,2.834l0,-1.803l1.289,0.773l0.384,1.931l2.190,0.901l1.803,0.257l1.545,-1.030l1.285,0.258l-0.645,2.446l-0.771,1.544l-2.059,0l-0.771,0.773l0.255,1.158l0.386,-0.514zM922.282,344.312l2.319,-1.416l1.671,-1.416l1.161,-1.931l1.029,-0.772l0.387,-1.416l1.929,-1.287l0.514,1.158l0.645,1.030l1.933,-1.030l0.770,1.160l0,1.157l-1.028,1.160l-1.802,2.059l-1.289,1.029l1.029,1.288l-2.188,0l-2.316,1.030l-0.645,1.803l-1.545,2.703l-2.060,1.286l-1.414,0.773l-2.445,-0.128l-1.805,-0.901l-2.830,-0.130l-0.516,-1.030l1.416,-1.930l3.477,-2.704l1.672,-0.515l-1.931,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nicaragua",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M234.359,197.045l-0.902,-0.774l-1.287,-1.158l-0.643,-0.901l-1.159,-0.773l-1.288,-1.287l0.258,-0.386l0.514,0.386l0.129,-0.129l0.902,-0.128l0.257,-0.644l0.387,0l0,-1.288l0.643,-0.129l0.515,0l0.643,-0.643l0.773,0.515l0.258,-0.386l0.515,-0.258l0.900,-0.771l0.129,-0.516l0.257,0l0.258,-0.643l0.258,-0.130l0.514,0.517l0.516,0.127l0.643,-0.385l0.643,0l0.902,-0.386l0.386,-0.386l0.901,0.128l-0.129,0.258l-0.129,0.514l0.258,1.030l-0.643,0.901l-0.258,1.159l-0.129,1.158l0.129,0.644l0.128,1.287l-0.514,0.258l-0.129,1.159l0.129,0.644l-0.516,0.771l0.130,0.645l0.386,0.514l-0.644,0.514l-0.772,-0.128l-0.515,-0.644l-0.773,-0.128l-0.644,0.257l-1.801,-0.644l0.386,-0.259z";
}, function($ctx1) {$ctx1.fill(self,"Nicaragua",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Nicaragua\x0a\x09^ 'M234.359,197.045l-0.902,-0.774l-1.287,-1.158l-0.643,-0.901l-1.159,-0.773l-1.288,-1.287l0.258,-0.386l0.514,0.386l0.129,-0.129l0.902,-0.128l0.257,-0.644l0.387,0l0,-1.288l0.643,-0.129l0.515,0l0.643,-0.643l0.773,0.515l0.258,-0.386l0.515,-0.258l0.900,-0.771l0.129,-0.516l0.257,0l0.258,-0.643l0.258,-0.130l0.514,0.517l0.516,0.127l0.643,-0.385l0.643,0l0.902,-0.386l0.386,-0.386l0.901,0.128l-0.129,0.258l-0.129,0.514l0.258,1.030l-0.643,0.901l-0.258,1.159l-0.129,1.158l0.129,0.644l0.128,1.287l-0.514,0.258l-0.129,1.159l0.129,0.644l-0.516,0.771l0.130,0.645l0.386,0.514l-0.644,0.514l-0.772,-0.128l-0.515,-0.644l-0.773,-0.128l-0.644,0.257l-1.801,-0.644l0.386,-0.259z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Niger",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Niger",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Niger\x0a\x09^ 'M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nigeria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z";
}, function($ctx1) {$ctx1.fill(self,"Nigeria",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Nigeria\x0a\x09^ 'M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NorthKorea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M817.112,112.726l0.385,0.514l-1.029,-0.129l-1.158,0.902l-0.774,0.901l0.131,1.930l-1.418,0.644l-0.516,0.386l-1.027,0.772l-1.803,0.516l-1.158,0.773l0,1.158l-0.387,0.257l1.157,0.386l1.418,1.159l-0.385,0.772l-1.033,0.129l-1.930,0.129l-1.029,1.158l-1.285,0l-0.131,0.257l-1.287,-0.514l-0.385,0.386l-0.774,0.257l-0.129,-0.514l-0.644,-0.258l-0.772,-0.386l0.772,-1.159l0.644,-0.385l-0.255,-0.387l0.640,-1.545l-0.127,-0.386l-1.545,-0.258l-1.289,-0.772l2.190,-1.673l2.961,-1.546l1.802,-1.930l1.287,0.900l2.319,0.130l-0.387,-1.417l4.248,-1.157l1.029,-1.546l-1.674,-1.546z";
}, function($ctx1) {$ctx1.fill(self,"NorthKorea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "NorthKorea\x0a\x09^ 'M817.112,112.726l0.385,0.514l-1.029,-0.129l-1.158,0.902l-0.774,0.901l0.131,1.930l-1.418,0.644l-0.516,0.386l-1.027,0.772l-1.803,0.516l-1.158,0.773l0,1.158l-0.387,0.257l1.157,0.386l1.418,1.159l-0.385,0.772l-1.033,0.129l-1.930,0.129l-1.029,1.158l-1.285,0l-0.131,0.257l-1.287,-0.514l-0.385,0.386l-0.774,0.257l-0.129,-0.514l-0.644,-0.258l-0.772,-0.386l0.772,-1.159l0.644,-0.385l-0.255,-0.387l0.640,-1.545l-0.127,-0.386l-1.545,-0.258l-1.289,-0.772l2.190,-1.673l2.961,-1.546l1.802,-1.930l1.287,0.900l2.319,0.130l-0.387,-1.417l4.248,-1.157l1.029,-1.546l-1.674,-1.546z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Norway",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M494.905,68.442l-1.802,-1.674l-5.279,3.090l-3.603,0.643l-3.734,-1.415l-0.902,-2.833l-0.900,-6.179l2.445,-1.802l7.080,-2.189l5.407,-2.832l4.892,-3.733l6.435,-5.278l4.508,-1.931l7.465,-3.476l5.922,-1.158l4.377,0.129l4.119,-2.188l4.893,0.128l4.889,-0.515l8.368,1.931l-3.474,0.773l2.961,1.672l-4.507,1.031l-2.189,0.257l1.159,-1.803l-3.476,-1.157l-4.247,0.900l-1.289,2.060l-2.572,1.159l-2.832,-0.644l-3.606,0.129l-2.961,-1.416l-1.545,0.643l-1.673,0.129l-0.513,1.803l-5.022,-0.387l-0.644,1.417l-2.702,0l-1.674,1.931l-2.703,2.960l-4.248,3.862l1.031,0.901l-0.903,1.030l-2.705,0l-1.800,2.446l0.127,3.605l1.803,1.415l-0.900,3.090l-2.318,1.931l1.158,-1.545z";
}, function($ctx1) {$ctx1.fill(self,"Norway",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Norway\x0a\x09^ 'M494.905,68.442l-1.802,-1.674l-5.279,3.090l-3.603,0.643l-3.734,-1.415l-0.902,-2.833l-0.900,-6.179l2.445,-1.802l7.080,-2.189l5.407,-2.832l4.892,-3.733l6.435,-5.278l4.508,-1.931l7.465,-3.476l5.922,-1.158l4.377,0.129l4.119,-2.188l4.893,0.128l4.889,-0.515l8.368,1.931l-3.474,0.773l2.961,1.672l-4.507,1.031l-2.189,0.257l1.159,-1.803l-3.476,-1.157l-4.247,0.900l-1.289,2.060l-2.572,1.159l-2.832,-0.644l-3.606,0.129l-2.961,-1.416l-1.545,0.643l-1.673,0.129l-0.513,1.803l-5.022,-0.387l-0.644,1.417l-2.702,0l-1.674,1.931l-2.703,2.960l-4.248,3.862l1.031,0.901l-0.903,1.030l-2.705,0l-1.800,2.446l0.127,3.605l1.803,1.415l-0.900,3.090l-2.318,1.931l1.158,-1.545z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Noumea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M911.856,283.809l2.188,1.673l1.416,1.159l-1.029,0.643l-1.545,-0.643l-1.932,-1.287l-1.672,-1.416l-1.803,-1.932l-0.386,-0.901l1.158,0.129l1.545,0.901l1.158,0.902l-0.902,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Noumea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Noumea\x0a\x09^ 'M911.856,283.809l2.188,1.673l1.416,1.159l-1.029,0.643l-1.545,-0.643l-1.932,-1.287l-1.672,-1.416l-1.803,-1.932l-0.386,-0.901l1.158,0.129l1.545,0.901l1.158,0.902l-0.902,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Oman",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M617.197,159.841l1.157,1.802l1.545,1.030l1.932,0.387l1.674,0.385l1.158,1.545l0.772,0.902l0.902,0.385l0,0.644l-1.031,1.545l-0.387,0.772l-1.158,0.902l-1.029,1.802l-1.157,-0.130l-0.517,0.645l-0.514,1.416l0.385,1.673l-0.257,0.387l-1.286,0l-1.675,1.028l-0.257,1.289l-0.642,0.514l-1.675,0l-1.031,0.773l0,1.029l-1.287,0.773l-1.416,-0.257l-1.802,0.900l-1.286,0.129l-0.900,-1.930l-2.061,-4.378l7.981,-2.702l1.802,-5.408l-1.159,-1.931l0,-1.030l0.773,-1.159l0.129,-1.029l1.159,-0.515l-0.517,-0.386l0.258,-1.802l-1.417,0zM616.294,156.752l0.773,-0.902l0.387,0.257l-0.257,1.159l-0.385,0.386l0.518,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Oman",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Oman\x0a\x09^ 'M617.197,159.841l1.157,1.802l1.545,1.030l1.932,0.387l1.674,0.385l1.158,1.545l0.772,0.902l0.902,0.385l0,0.644l-1.031,1.545l-0.387,0.772l-1.158,0.902l-1.029,1.802l-1.157,-0.130l-0.517,0.645l-0.514,1.416l0.385,1.673l-0.257,0.387l-1.286,0l-1.675,1.028l-0.257,1.289l-0.642,0.514l-1.675,0l-1.031,0.773l0,1.029l-1.287,0.773l-1.416,-0.257l-1.802,0.900l-1.286,0.129l-0.900,-1.930l-2.061,-4.378l7.981,-2.702l1.802,-5.408l-1.159,-1.931l0,-1.030l0.773,-1.159l0.129,-1.029l1.159,-0.515l-0.517,-0.386l0.258,-1.802l-1.417,0zM616.294,156.752l0.773,-0.902l0.387,0.257l-0.257,1.159l-0.385,0.386l0.518,0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Pakistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M667.659,126.886l2.059,1.287l0.773,2.059l4.375,1.159l-2.572,2.189l-2.961,0.386l-4.121,-0.643l-1.287,1.157l0.900,2.447l1.031,1.802l2.059,1.287l-2.187,1.545l0,1.931l-2.575,2.704l-1.802,2.702l-2.704,2.833l-3.218,-0.129l-2.961,2.832l1.802,1.159l0.258,2.059l1.545,1.417l0.514,2.317l-5.922,0l-1.801,1.802l-1.931,-0.772l-0.774,-1.932l-2.187,-2.059l-4.891,0.514l-4.377,0.130l-3.863,0.386l1.030,-3.218l3.992,-1.288l-0.259,-1.287l-1.288,-0.386l-0.128,-2.446l-2.574,-1.159l-1.031,-1.674l-1.414,-1.415l4.504,1.415l2.704,-0.386l1.674,0.386l0.514,-0.643l1.931,0.257l3.476,-1.159l0.129,-2.317l1.417,-1.544l2.058,0l0.257,-0.644l2.061,-0.386l1.029,0.257l1.031,-0.772l-0.129,-1.674l1.158,-1.545l1.673,-0.772l-1.030,-1.673l2.575,0l0.773,-0.902l-0.129,-1.029l1.287,-1.159l-0.257,-1.416l-0.645,-1.029l1.545,-1.287l2.833,-0.517l3.090,-0.256l1.416,-0.516l-1.545,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Pakistan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Pakistan\x0a\x09^ 'M667.659,126.886l2.059,1.287l0.773,2.059l4.375,1.159l-2.572,2.189l-2.961,0.386l-4.121,-0.643l-1.287,1.157l0.900,2.447l1.031,1.802l2.059,1.287l-2.187,1.545l0,1.931l-2.575,2.704l-1.802,2.702l-2.704,2.833l-3.218,-0.129l-2.961,2.832l1.802,1.159l0.258,2.059l1.545,1.417l0.514,2.317l-5.922,0l-1.801,1.802l-1.931,-0.772l-0.774,-1.932l-2.187,-2.059l-4.891,0.514l-4.377,0.130l-3.863,0.386l1.030,-3.218l3.992,-1.288l-0.259,-1.287l-1.288,-0.386l-0.128,-2.446l-2.574,-1.159l-1.031,-1.674l-1.414,-1.415l4.504,1.415l2.704,-0.386l1.674,0.386l0.514,-0.643l1.931,0.257l3.476,-1.159l0.129,-2.317l1.417,-1.544l2.058,0l0.257,-0.644l2.061,-0.386l1.029,0.257l1.031,-0.772l-0.129,-1.674l1.158,-1.545l1.673,-0.772l-1.030,-1.673l2.575,0l0.773,-0.902l-0.129,-1.029l1.287,-1.159l-0.257,-1.416l-0.645,-1.029l1.545,-1.287l2.833,-0.517l3.090,-0.256l1.416,-0.516l-1.545,0.385z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Palestine",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0,1.544l-0.386,0.902l-1.287,0.257l0.128,-0.644l0.774,-0.385l-0.774,-0.258l0.645,-1.803l-0.900,-0.387z";
}, function($ctx1) {$ctx1.fill(self,"Palestine",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Palestine\x0a\x09^ 'M560.942,139.759l0,1.544l-0.386,0.902l-1.287,0.257l0.128,-0.644l0.774,-0.385l-0.774,-0.258l0.645,-1.803l-0.900,-0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Panama",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M255.47,207.471l-0.902,-0.772l-0.643,-1.416l0.643,-0.773l-0.643,-0.127l-0.514,-0.903l-1.288,-0.771l-1.159,0.257l-0.644,0.900l-1.029,0.644l-0.644,0.129l-0.257,0.515l1.287,1.545l-0.643,0.258l-0.387,0.385l-1.287,0.129l-0.515,-1.544l-0.387,0.386l-0.772,-0.129l-0.643,-1.030l-1.030,-0.258l-0.773,-0.257l-1.158,0l0,0.644l-0.387,-0.515l0.130,-0.515l0.257,-0.515l-0.128,-0.515l0.385,-0.257l-0.514,-0.387l0,-1.157l1.029,-0.260l1.030,1.031l-0.129,0.516l1.159,0.129l0.129,-0.129l0.772,0.643l1.416,-0.258l1.031,-0.643l1.673,-0.515l0.900,-0.901l1.545,0.257l-0.129,0.257l1.545,0l1.159,0.516l0.900,0.773l1.031,0.771l-0.386,0.387l0.643,1.544l-0.515,0.901l-0.900,-0.257l0.258,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"Panama",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Panama\x0a\x09^ 'M255.47,207.471l-0.902,-0.772l-0.643,-1.416l0.643,-0.773l-0.643,-0.127l-0.514,-0.903l-1.288,-0.771l-1.159,0.257l-0.644,0.900l-1.029,0.644l-0.644,0.129l-0.257,0.515l1.287,1.545l-0.643,0.258l-0.387,0.385l-1.287,0.129l-0.515,-1.544l-0.387,0.386l-0.772,-0.129l-0.643,-1.030l-1.030,-0.258l-0.773,-0.257l-1.158,0l0,0.644l-0.387,-0.515l0.130,-0.515l0.257,-0.515l-0.128,-0.515l0.385,-0.257l-0.514,-0.387l0,-1.157l1.029,-0.260l1.030,1.031l-0.129,0.516l1.159,0.129l0.129,-0.129l0.772,0.643l1.416,-0.258l1.031,-0.643l1.673,-0.515l0.900,-0.901l1.545,0.257l-0.129,0.257l1.545,0l1.159,0.516l0.900,0.773l1.031,0.771l-0.386,0.387l0.643,1.544l-0.515,0.901l-0.900,-0.257l0.258,-1.287z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PapuaNewGuinea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M845.175,242.742l-0.129,-8.752l4.635,1.803l5.019,1.543l1.932,1.417l1.416,1.417l0.385,1.544l4.505,1.673l0.645,1.416l-2.445,0.258l0.642,1.802l2.317,1.802l1.802,2.832l1.545,-0.128l-0.129,1.287l2.059,0.387l-0.771,0.514l2.832,1.158l-0.258,0.773l-1.803,0.129l-0.641,-0.644l-2.320,-0.258l-2.701,-0.385l-2.061,-1.803l-1.545,-1.416l-1.414,-2.446l-3.478,-1.159l-2.315,0.772l-1.673,0.902l0.386,2.059l-2.189,0.902l-1.416,-0.515l-2.832,-0.129l0,8.755zM876.454,236.822l1.031,0.901l0.258,1.417l-0.771,0.641l-0.518,-1.544l-0.642,-1.028l-1.288,-0.902l-1.545,-1.159l-1.931,-0.773l0.773,-0.643l1.416,0.773l1.030,0.515l1.031,0.642l-1.156,-1.160zM872.851,242.742l-1.545,0.645l-1.287,0.644l-1.545,0l-2.188,-0.772l-1.545,-0.773l0.256,-0.901l2.447,0.388l1.416,-0.131l0.387,-1.287l0.385,-0.127l0.260,1.414l1.543,-0.128l0.773,-0.902l1.543,-1.031l-0.256,-1.544l1.543,-0.128l0.516,0.515l0,1.416l-0.901,1.674l-1.416,0.259l0.386,-0.769zM882.118,241.328l0.776,0.645l1.414,1.673l1.158,0.900l-0.258,0.771l-0.771,0.259l-1.159,-1.030l-1.287,-1.673l-0.515,-2.061l0.386,-0.257l-0.256,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"PapuaNewGuinea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "PapuaNewGuinea\x0a\x09^ 'M845.175,242.742l-0.129,-8.752l4.635,1.803l5.019,1.543l1.932,1.417l1.416,1.417l0.385,1.544l4.505,1.673l0.645,1.416l-2.445,0.258l0.642,1.802l2.317,1.802l1.802,2.832l1.545,-0.128l-0.129,1.287l2.059,0.387l-0.771,0.514l2.832,1.158l-0.258,0.773l-1.803,0.129l-0.641,-0.644l-2.320,-0.258l-2.701,-0.385l-2.061,-1.803l-1.545,-1.416l-1.414,-2.446l-3.478,-1.159l-2.315,0.772l-1.673,0.902l0.386,2.059l-2.189,0.902l-1.416,-0.515l-2.832,-0.129l0,8.755zM876.454,236.822l1.031,0.901l0.258,1.417l-0.771,0.641l-0.518,-1.544l-0.642,-1.028l-1.288,-0.902l-1.545,-1.159l-1.931,-0.773l0.773,-0.643l1.416,0.773l1.030,0.515l1.031,0.642l-1.156,-1.160zM872.851,242.742l-1.545,0.645l-1.287,0.644l-1.545,0l-2.188,-0.772l-1.545,-0.773l0.256,-0.901l2.447,0.388l1.416,-0.131l0.387,-1.287l0.385,-0.127l0.260,1.414l1.543,-0.128l0.773,-0.902l1.543,-1.031l-0.256,-1.544l1.543,-0.128l0.516,0.515l0,1.416l-0.901,1.674l-1.416,0.259l0.386,-0.769zM882.118,241.328l0.776,0.645l1.414,1.673l1.158,0.900l-0.258,0.771l-0.771,0.259l-1.159,-1.030l-1.287,-1.673l-0.515,-2.061l0.386,-0.257l-0.256,-0.773z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Paraguay",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M296.405,286.898l1.030,-3.219l0,-1.414l1.416,-2.447l4.634,-0.772l2.446,0.130l2.575,1.285l0,0.902l0.772,1.415l-0.128,3.736l2.831,0.513l1.160,-0.513l1.801,0.642l0.516,0.903l0.256,2.443l0.259,1.031l1.028,0.129l1.031,-0.516l0.901,0.516l0,1.544l-0.386,1.545l-0.515,1.546l-0.386,2.445l-2.446,2.059l-2.189,0.387l-2.961,-0.387l-2.702,-0.772l2.574,-4.121l-0.386,-1.157l-2.703,-1.030l-3.348,-2.059l-2.188,-0.387l4.892,4.377z";
}, function($ctx1) {$ctx1.fill(self,"Paraguay",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Paraguay\x0a\x09^ 'M296.405,286.898l1.030,-3.219l0,-1.414l1.416,-2.447l4.634,-0.772l2.446,0.130l2.575,1.285l0,0.902l0.772,1.415l-0.128,3.736l2.831,0.513l1.160,-0.513l1.801,0.642l0.516,0.903l0.256,2.443l0.259,1.031l1.028,0.129l1.031,-0.516l0.901,0.516l0,1.544l-0.386,1.545l-0.515,1.546l-0.386,2.445l-2.446,2.059l-2.189,0.387l-2.961,-0.387l-2.702,-0.772l2.574,-4.121l-0.386,-1.157l-2.703,-1.030l-3.348,-2.059l-2.188,-0.387l4.892,4.377z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Peru",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M277.74,274.281l-0.644,1.417l-1.415,0.644l-2.704,-1.543l-0.258,-1.031l-5.278,-2.705l-4.891,-2.959l-2.059,-1.674l-1.159,-2.188l0.515,-0.773l-2.318,-3.605l-2.703,-4.891l-2.446,-5.407l-1.158,-1.288l-0.902,-1.930l-2.058,-1.802l-1.932,-1.028l0.901,-1.161l-1.287,-2.576l0.772,-1.929l2.189,-1.673l0.386,1.030l-0.773,0.643l0,1.029l1.159,-0.257l1.030,0.388l1.159,1.286l1.545,-1.030l0.514,-1.802l1.673,-2.446l3.219,-1.030l2.961,-2.832l0.772,-1.674l-0.386,-2.059l0.772,-0.258l1.802,1.288l0.772,1.287l1.288,0.644l1.544,2.832l2.060,0.257l1.416,-0.644l1.030,0.516l1.673,-0.259l2.060,1.287l-1.802,2.704l0.772,0l1.416,1.417l-2.446,-0.129l-0.386,0.514l-2.188,0.515l-3.089,1.802l-0.129,1.288l-0.772,0.901l0.257,1.416l-1.545,0.773l0,1.158l-0.772,0.516l1.158,2.445l1.546,1.674l-0.644,1.158l1.801,0.129l1.030,1.416l2.317,0l2.317,-1.545l-0.256,4.119l1.287,0.257l1.416,-0.384l2.445,4.248l-0.644,0.901l-0.128,1.931l0,2.317l-1.159,1.287l0.515,1.029l-0.643,0.901l1.158,2.318l1.673,-2.830z";
}, function($ctx1) {$ctx1.fill(self,"Peru",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Peru\x0a\x09^ 'M277.74,274.281l-0.644,1.417l-1.415,0.644l-2.704,-1.543l-0.258,-1.031l-5.278,-2.705l-4.891,-2.959l-2.059,-1.674l-1.159,-2.188l0.515,-0.773l-2.318,-3.605l-2.703,-4.891l-2.446,-5.407l-1.158,-1.288l-0.902,-1.930l-2.058,-1.802l-1.932,-1.028l0.901,-1.161l-1.287,-2.576l0.772,-1.929l2.189,-1.673l0.386,1.030l-0.773,0.643l0,1.029l1.159,-0.257l1.030,0.388l1.159,1.286l1.545,-1.030l0.514,-1.802l1.673,-2.446l3.219,-1.030l2.961,-2.832l0.772,-1.674l-0.386,-2.059l0.772,-0.258l1.802,1.288l0.772,1.287l1.288,0.644l1.544,2.832l2.060,0.257l1.416,-0.644l1.030,0.516l1.673,-0.259l2.060,1.287l-1.802,2.704l0.772,0l1.416,1.417l-2.446,-0.129l-0.386,0.514l-2.188,0.515l-3.089,1.802l-0.129,1.288l-0.772,0.901l0.257,1.416l-1.545,0.773l0,1.158l-0.772,0.516l1.158,2.445l1.546,1.674l-0.644,1.158l1.801,0.129l1.030,1.416l2.317,0l2.317,-1.545l-0.256,4.119l1.287,0.257l1.416,-0.384l2.445,4.248l-0.644,0.901l-0.128,1.931l0,2.317l-1.159,1.287l0.515,1.029l-0.643,0.901l1.158,2.318l1.673,-2.830z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Phillipines",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M790.722,192.797l-1.416,-2.061l2.318,0l1.031,1.030l-0.775,2.316l1.158,1.285zM795.485,200.134l0.645,-0.773l0.256,-1.673l1.545,-0.129l-0.385,1.802l1.930,-2.703l-0.258,2.574l-0.903,0.902l-0.900,1.802l-0.900,0.773l-1.545,-1.932l-0.515,0.643zM805.655,204.253l0.258,1.802l0.256,1.545l-1.029,2.446l-0.901,-2.704l-1.289,1.287l0.903,2.060l-0.774,1.288l-3.217,-1.545l-0.771,-2.059l0.898,-1.287l-1.801,-1.159l-0.773,1.030l-1.285,-0.129l-2.061,1.545l-0.386,-0.773l1.031,-2.317l1.672,-0.773l1.545,-0.901l0.902,1.159l2.061,-0.772l0.384,-1.158l1.930,-0.129l-0.129,-2.061l2.192,1.288l0.255,1.416l-0.129,-0.901zM784.415,201.936l-3.477,2.447l1.288,-1.804l1.929,-1.673l1.676,-1.931l1.285,-2.575l0.518,2.190l-1.803,1.415l1.416,-1.931zM794.841,177.863l-0.514,1.159l0.901,1.931l-0.643,2.188l-1.545,0.901l-0.516,2.188l0.645,2.189l1.416,0.257l1.158,-0.257l3.348,1.415l-0.258,1.417l0.900,0.772l-0.257,1.159l-2.061,-1.287l-1.029,-1.416l-0.643,1.031l-1.803,-1.676l-2.445,0.387l-1.287,-0.515l0.127,-1.157l0.775,-0.645l-0.775,-0.643l-0.256,0.901l-1.416,-1.545l-0.387,-1.159l-0.127,-2.575l1.157,0.902l0.257,-4.248l0.901,-2.447l1.545,0l1.674,0.773l0.902,-0.643l-0.256,-0.643zM793.94,196.271l-0.386,-1.286l1.674,0.771l1.673,0l0,1.160l-1.287,1.157l-1.674,0.773l-0.128,-1.287l-0.128,1.288zM803.337,194.212l0.773,2.961l-2.060,-0.644l0,0.901l0.644,1.674l-1.287,0.514l-0.129,-1.802l-0.773,-0.128l-0.385,-1.674l1.545,0.257l0,-1.029l-1.676,-2.060l2.576,0l-0.772,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Phillipines",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Phillipines\x0a\x09^ 'M790.722,192.797l-1.416,-2.061l2.318,0l1.031,1.030l-0.775,2.316l1.158,1.285zM795.485,200.134l0.645,-0.773l0.256,-1.673l1.545,-0.129l-0.385,1.802l1.930,-2.703l-0.258,2.574l-0.903,0.902l-0.900,1.802l-0.900,0.773l-1.545,-1.932l-0.515,0.643zM805.655,204.253l0.258,1.802l0.256,1.545l-1.029,2.446l-0.901,-2.704l-1.289,1.287l0.903,2.060l-0.774,1.288l-3.217,-1.545l-0.771,-2.059l0.898,-1.287l-1.801,-1.159l-0.773,1.030l-1.285,-0.129l-2.061,1.545l-0.386,-0.773l1.031,-2.317l1.672,-0.773l1.545,-0.901l0.902,1.159l2.061,-0.772l0.384,-1.158l1.930,-0.129l-0.129,-2.061l2.192,1.288l0.255,1.416l-0.129,-0.901zM784.415,201.936l-3.477,2.447l1.288,-1.804l1.929,-1.673l1.676,-1.931l1.285,-2.575l0.518,2.190l-1.803,1.415l1.416,-1.931zM794.841,177.863l-0.514,1.159l0.901,1.931l-0.643,2.188l-1.545,0.901l-0.516,2.188l0.645,2.189l1.416,0.257l1.158,-0.257l3.348,1.415l-0.258,1.417l0.900,0.772l-0.257,1.159l-2.061,-1.287l-1.029,-1.416l-0.643,1.031l-1.803,-1.676l-2.445,0.387l-1.287,-0.515l0.127,-1.157l0.775,-0.645l-0.775,-0.643l-0.256,0.901l-1.416,-1.545l-0.387,-1.159l-0.127,-2.575l1.157,0.902l0.257,-4.248l0.901,-2.447l1.545,0l1.674,0.773l0.902,-0.643l-0.256,-0.643zM793.94,196.271l-0.386,-1.286l1.674,0.771l1.673,0l0,1.160l-1.287,1.157l-1.674,0.773l-0.128,-1.287l-0.128,1.288zM803.337,194.212l0.773,2.961l-2.060,-0.644l0,0.901l0.644,1.674l-1.287,0.514l-0.129,-1.802l-0.773,-0.128l-0.385,-1.674l1.545,0.257l0,-1.029l-1.676,-2.060l2.576,0l-0.772,-1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Poland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.718,89.295l-1.158,-1.672l0.257,-1.030l-0.644,-1.417l-1.029,-0.901l0.770,-0.773l-0.642,-1.287l1.802,-0.901l4.248,-1.158l3.347,-0.901l2.703,0.387l0.258,0.643l2.574,0.129l3.348,0.256l4.890,0l1.417,0.259l0.644,0.772l0.129,1.288l0.771,1.029l0,1.029l-1.672,0.516l0.772,1.287l0.129,1.159l1.286,2.317l-0.257,0.773l-1.287,0.385l-2.447,2.189l0.646,1.287l-0.515,-0.257l-2.577,-1.030l-1.929,0.386l-1.289,-0.257l-1.672,0.644l-1.289,-1.030l-1.158,0.386l-0.127,-0.129l-1.289,-1.416l-1.930,-0.129l-0.257,-0.772l-1.802,-0.386l-0.517,0.773l-1.414,-0.644l0.129,-0.645l-1.932,-0.256l1.287,0.903z";
}, function($ctx1) {$ctx1.fill(self,"Poland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Poland\x0a\x09^ 'M505.718,89.295l-1.158,-1.672l0.257,-1.030l-0.644,-1.417l-1.029,-0.901l0.770,-0.773l-0.642,-1.287l1.802,-0.901l4.248,-1.158l3.347,-0.901l2.703,0.387l0.258,0.643l2.574,0.129l3.348,0.256l4.890,0l1.417,0.259l0.644,0.772l0.129,1.288l0.771,1.029l0,1.029l-1.672,0.516l0.772,1.287l0.129,1.159l1.286,2.317l-0.257,0.773l-1.287,0.385l-2.447,2.189l0.646,1.287l-0.515,-0.257l-2.577,-1.030l-1.929,0.386l-1.289,-0.257l-1.672,0.644l-1.289,-1.030l-1.158,0.386l-0.127,-0.129l-1.289,-1.416l-1.930,-0.129l-0.257,-0.772l-1.802,-0.386l-0.517,0.773l-1.414,-0.644l0.129,-0.645l-1.932,-0.256l1.287,0.903z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Portugal",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l1.031,-0.643l1.158,-0.387l0.643,1.287l1.545,0l0.514,-0.385l1.545,0.128l0.773,1.416l-1.287,0.643l0,2.189l-0.514,0.387l0,1.159l-1.160,0.256l1.030,1.674l-0.772,1.674l0.902,0.900l-0.258,0.644l-1.030,1.030l0.257,0.902l-1.158,0.772l-1.416,-0.387l-1.416,0.258l0.386,-2.059l-0.129,-1.674l-1.288,-0.258l-0.643,-1.030l0.259,-1.802l1.028,-0.900l0.259,-1.159l0.514,-1.545l0,-1.159l-0.644,-1.030l0.129,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Portugal",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Portugal\x0a\x09^ 'M440.838,114.141l1.031,-0.643l1.158,-0.387l0.643,1.287l1.545,0l0.514,-0.385l1.545,0.128l0.773,1.416l-1.287,0.643l0,2.189l-0.514,0.387l0,1.159l-1.160,0.256l1.030,1.674l-0.772,1.674l0.902,0.900l-0.258,0.644l-1.030,1.030l0.257,0.902l-1.158,0.772l-1.416,-0.387l-1.416,0.258l0.386,-2.059l-0.129,-1.674l-1.288,-0.258l-0.643,-1.030l0.259,-1.802l1.028,-0.900l0.259,-1.159l0.514,-1.545l0,-1.159l-0.644,-1.030l0.129,0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PuertoRico",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M286.622,177.09l1.416,0.258l0.516,0.515l-0.644,0.643l-2.060,0l-1.545,0.129l-0.258,-1.158l0.387,-0.387l-2.188,0z";
}, function($ctx1) {$ctx1.fill(self,"PuertoRico",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "PuertoRico\x0a\x09^ 'M286.622,177.09l1.416,0.258l0.516,0.515l-0.644,0.643l-2.060,0l-1.545,0.129l-0.258,-1.158l0.387,-0.387l-2.188,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Qatar",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M602.136,160.227l-0.257,-1.931l0.770,-1.416l0.772,-0.257l0.775,0.901l0,1.545l-0.517,1.544l-0.772,0.258l0.771,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Qatar",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Qatar\x0a\x09^ 'M602.136,160.227l-0.257,-1.931l0.770,-1.416l0.772,-0.257l0.775,0.901l0,1.545l-0.517,1.544l-0.772,0.258l0.771,0.644z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofMacedonia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l0.385,0l0.129,-0.515l1.545,-0.515l1.544,-0.257l1.288,0l1.287,0.900l0.258,1.674l-0.514,0.130l-0.515,0.513l-1.417,-0.128l-1.029,0.643l-1.804,0.258l-1.029,-0.643l-0.385,-1.160l-0.257,0.900z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofMacedonia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "RepublicofMacedonia\x0a\x09^ 'M520.651,114.27l0.385,0l0.129,-0.515l1.545,-0.515l1.544,-0.257l1.288,0l1.287,0.900l0.258,1.674l-0.514,0.130l-0.515,0.513l-1.417,-0.128l-1.029,0.643l-1.804,0.258l-1.029,-0.643l-0.385,-1.160l-0.257,0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofTurkey",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M535.712,120.707l2.961,-2.575l4.247,-0.129l1.030,-2.060l5.150,0.387l3.217,-1.803l3.219,-0.772l4.376,0l4.765,1.932l3.860,1.028l3.089,-0.515l2.317,0.259l3.218,-1.417l2.834,-0.128l2.702,1.416l0.386,0.901l-0.256,1.288l2.059,0.643l1.029,0.773l-1.802,0.772l0.773,3.089l-0.516,0.901l1.416,2.189l-1.287,0.385l-0.899,-0.643l-3.091,-0.385l-1.158,0.385l-3.090,0.515l-1.416,-0.128l-3.090,1.028l-2.317,0l-1.416,-0.514l-2.960,0.772l-0.902,-0.514l-0.129,1.545l-0.643,0.515l-0.772,0.643l-1.029,-1.287l1.029,-0.902l-1.674,0.129l-2.188,-0.514l-1.803,1.544l-4.118,0.257l-2.189,-1.416l-2.961,-0.128l-0.644,1.159l-1.802,0.256l-2.574,-1.415l-2.961,0l-1.545,-2.574l-2.058,-1.545l1.286,-2.060l1.673,1.287zM535.581,114.27l2.705,-0.772l2.317,0.257l0.386,1.030l2.317,0.902l-0.514,0.643l-3.219,0.257l-1.031,0.772l-2.314,1.417l-0.774,-1.159l0,-0.644l0.645,-0.258l0.771,-1.673l1.289,0.772z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofTurkey",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "RepublicofTurkey\x0a\x09^ 'M535.712,120.707l2.961,-2.575l4.247,-0.129l1.030,-2.060l5.150,0.387l3.217,-1.803l3.219,-0.772l4.376,0l4.765,1.932l3.860,1.028l3.089,-0.515l2.317,0.259l3.218,-1.417l2.834,-0.128l2.702,1.416l0.386,0.901l-0.256,1.288l2.059,0.643l1.029,0.773l-1.802,0.772l0.773,3.089l-0.516,0.901l1.416,2.189l-1.287,0.385l-0.899,-0.643l-3.091,-0.385l-1.158,0.385l-3.090,0.515l-1.416,-0.128l-3.090,1.028l-2.317,0l-1.416,-0.514l-2.960,0.772l-0.902,-0.514l-0.129,1.545l-0.643,0.515l-0.772,0.643l-1.029,-1.287l1.029,-0.902l-1.674,0.129l-2.188,-0.514l-1.803,1.544l-4.118,0.257l-2.189,-1.416l-2.961,-0.128l-0.644,1.159l-1.802,0.256l-2.574,-1.415l-2.961,0l-1.545,-2.574l-2.058,-1.545l1.286,-2.060l1.673,1.287zM535.581,114.27l2.705,-0.772l2.317,0.257l0.386,1.030l2.317,0.902l-0.514,0.643l-3.219,0.257l-1.031,0.772l-2.314,1.417l-0.774,-1.159l0,-0.644l0.645,-0.258l0.771,-1.673l1.289,0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Romania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,97.921l1.159,-0.515l1.674,0.258l1.673,0l1.289,0.772l0.899,-0.515l1.931,-0.257l0.773,-0.644l1.158,0l0.774,0.258l0.770,0.901l0.902,1.029l1.545,1.674l0.128,1.158l-0.257,1.159l0.387,1.287l1.287,0.386l1.287,-0.386l1.158,0.515l0,0.645l-1.287,0.643l-0.772,-0.258l-0.773,3.219l-1.544,-0.258l-1.930,-1.030l-3.219,0.644l-1.287,0.644l-3.990,-0.130l-2.059,-0.386l-1.031,0.129l-0.773,-1.030l-0.513,-0.515l0.641,-0.386l-0.771,-0.386l-0.774,0.644l-1.543,-0.773l-0.257,-1.158l-1.674,-0.643l-0.258,-0.902l-1.416,-1.030l2.059,-0.515l1.673,-1.802l1.290,-1.803l-1.671,0.643z";
}, function($ctx1) {$ctx1.fill(self,"Romania",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Romania\x0a\x09^ 'M526.442,97.921l1.159,-0.515l1.674,0.258l1.673,0l1.289,0.772l0.899,-0.515l1.931,-0.257l0.773,-0.644l1.158,0l0.774,0.258l0.770,0.901l0.902,1.029l1.545,1.674l0.128,1.158l-0.257,1.159l0.387,1.287l1.287,0.386l1.287,-0.386l1.158,0.515l0,0.645l-1.287,0.643l-0.772,-0.258l-0.773,3.219l-1.544,-0.258l-1.930,-1.030l-3.219,0.644l-1.287,0.644l-3.990,-0.130l-2.059,-0.386l-1.031,0.129l-0.773,-1.030l-0.513,-0.515l0.641,-0.386l-0.771,-0.386l-0.774,0.644l-1.543,-0.773l-0.257,-1.158l-1.674,-0.643l-0.258,-0.902l-1.416,-1.030l2.059,-0.515l1.673,-1.802l1.290,-1.803l-1.671,0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Russia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M950.089,36.129l-0.258,0l-0.516,-1.801l0.774,-0.772l0.127,-0.129l6.308,1.158l6.435,-1.544zM586.045,9.869l5.276,-0.515l4.121,0l0.514,0.773l1.545,-0.644l2.574,-0.515l3.990,0.644l-1.028,0.386l-3.605,0.385l-2.447,0.130l-0.384,0.514l-3.221,0.386l-2.830,-0.643l1.545,-0.772l6.050,0.129zM950.089,51.964l-3.992,1.802l2.574,3.219l-0.641,2.188l-5.539,-0.773l-7.336,1.674l-6.177,2.703l-4.764,2.703l-3.990,-1.673l-7.725,1.803l-6.693,0.128l-4.377,4.506l3.088,0.772l0,4.634l-3.475,1.545l0.645,1.803l-4.506,1.544l-1.159,3.219l-4.250,1.158l-0.513,1.931l-4.119,3.089l-1.674,-6.178l-1.545,-5.922l1.545,-4.249l2.060,-1.157l0.127,-1.287l3.864,-0.773l5.148,-3.219l4.506,-2.832l5.019,-2.060l2.061,-3.732l-3.219,0.128l-1.672,2.317l-6.695,2.446l-2.187,-3.089l-7.081,0.901l-6.693,4.247l1.803,1.288l-6.309,1.416l-10.041,-1.416l-11.715,0l-6.564,1.159l-8.369,5.278l-9.781,5.665l3.861,0.643l0.771,2.317l3.092,0.385l1.672,-1.545l2.961,0.387l3.475,2.060l0.515,3.089l-1.543,2.189l-0.902,2.575l-1.031,5.535l-4.120,3.862l-0.900,1.802l-3.603,3.219l-3.735,3.089l-1.674,1.545l-3.603,1.674l-1.674,0l-1.674,-1.288l-3.601,1.931l-0.518,0.901l-0.385,-0.514l0,-1.288l1.416,-0.129l0.385,-3.219l-0.771,-2.317l2.318,-0.901l3.346,0.516l1.802,-2.704l0.901,-2.832l1.031,-1.029l1.414,-2.448l-4.375,0.774l-2.447,1.030l-3.990,0l-1.159,-2.447l-3.218,-1.930l-4.635,-0.902l-1.029,-2.574l-0.901,-1.674l-1.031,-1.158l-1.674,-2.703l-2.316,-1.030l-4.119,-0.772l-3.475,0l-3.350,0.513l-2.316,1.417l1.545,0.644l0,1.416l-1.414,0.901l-2.447,2.832l0,1.159l-3.862,1.672l-3.219,-0.900l-3.218,0.128l-1.414,-0.900l-1.545,-0.258l-3.991,1.930l-3.476,0.387l-2.574,0.644l-3.348,-0.386l-2.445,0l-1.674,-1.417l-2.701,-1.287l-2.705,-0.257l-3.348,0.257l-2.574,0.515l-3.862,-1.158l-0.515,-1.931l-3.090,-0.773l-2.445,-0.257l-3.090,-1.158l-2.703,2.832l1.029,1.545l-2.574,1.931l-3.862,-0.644l-2.703,-0.129l-1.802,-1.287l-2.832,0l-2.317,-0.901l-4.121,1.287l-5.148,2.317l-2.832,0.515l-1.030,0.258l-1.414,-1.675l-3.478,0.387l-1.158,-1.159l-1.930,-0.515l-1.289,-1.545l-1.545,-0.514l-3.860,0.644l-3.605,-1.546l-1.545,1.416l-5.922,-6.822l-3.474,-2.060l1.029,-0.901l-6.822,2.575l-2.577,0.128l0.258,-1.416l-3.474,-0.901l-2.832,0.645l-0.901,-2.833l-4.763,-0.644l-2.446,1.160l-6.693,1.028l-1.418,0.644l-10.039,0.901l-1.158,0.901l1.929,1.931l-2.575,0.644l0.515,0.772l-2.702,1.288l4.376,1.931l-0.644,1.159l-3.732,0l-0.773,0.772l-3.474,-1.416l-4.250,0l-2.961,1.158l-3.088,-1.029l-5.922,-1.931l-4.248,0.127l-5.535,2.962l-0.387,1.931l-2.705,-1.544l-2.186,2.960l0.772,0.515l-1.545,2.060l2.317,1.802l1.931,-0.129l1.803,1.803l-0.387,1.416l1.416,0.514l-1.287,1.546l-2.575,0.386l-2.704,2.831l2.445,2.576l-0.255,1.801l2.960,3.218l-1.545,1.030l-0.516,0.644l-1.158,-0.129l-1.931,-1.673l-0.643,0l-1.803,-0.644l-0.772,-1.158l-2.446,-0.516l-1.671,0.387l-0.517,-0.515l-3.604,-1.287l-3.990,-0.386l-2.318,-0.516l-0.256,0.387l-3.477,-2.318l-3.089,-1.029l-2.318,-1.545l1.931,-0.514l2.317,-2.189l-1.544,-1.030l3.991,-1.159l-0.129,-0.643l-2.446,0.515l0.128,-1.159l1.417,-0.772l2.575,-0.258l0.384,-0.901l-0.513,-1.417l1.029,-1.415l0,-0.772l-3.990,-0.902l-1.545,0l-1.674,-1.287l-2.059,0.386l-3.476,-0.901l0.129,-0.514l-1.030,-1.159l-2.058,-0.129l-0.258,-0.901l0.643,-0.515l-1.673,-1.544l-2.833,0.256l-0.772,-0.128l-0.773,0.644l-0.901,-0.129l-0.643,-1.674l-0.644,-0.901l0.516,-0.257l2.187,0.128l1.030,-0.643l-0.772,-0.772l-1.803,-0.387l0.129,-0.515l-1.160,-0.515l-1.672,-1.802l0.645,-0.644l-0.258,-1.287l-2.703,-0.643l-1.416,0.385l-0.387,-0.772l-2.833,-0.644l-0.901,-1.545l-0.129,-1.287l-1.286,-0.644l1.158,-0.901l-0.900,-2.446l1.930,-1.544l-0.386,-0.515l3.089,-1.545l-2.832,-1.287l5.792,-3.347l2.448,-1.545l1.030,-1.416l-3.991,-1.802l1.157,-1.802l-2.445,-2.060l1.801,-2.318l-3.089,-2.960l2.448,-2.060l-4.119,-1.801l0.384,-1.932l2.189,-0.257l4.507,-1.031l2.830,-0.900l4.378,1.545l7.466,0.643l10.169,3.089l2.059,1.288l0.129,1.802l-7.336,2.061l-12.102,-2.061l-1.929,0.386l4.504,3.219l0.772,2.060l2.961,1.544l3.218,-2.703l7.596,1.287l0,-2.960l7.465,-1.803l3.992,-0.901l-2.190,-1.674l-0.643,-3.218l7.466,0.772l-1.801,3.348l4.632,-0.129l7.210,-2.703l9.783,-2.318l2.060,1.417l9.397,-1.546l6.695,0.902l0.643,-3.219l7.853,0.772l10.684,2.832l1.673,-1.801l-3.991,-4.507l4.505,-2.702l2.190,-3.090l8.369,0.386l0.769,4.763l0.260,5.536l1.672,1.674l-0.516,1.802l-4.119,2.832l2.832,0.386l5.151,-2.961l1.029,-3.991l-2.832,-1.159l-1.029,-5.664l3.345,-3.346l2.190,1.802l0.644,2.060l1.672,-1.288l3.477,-0.901l5.535,-0.128l5.019,1.544l-2.445,-2.575l-0.256,-2.574l4.760,-0.514l6.437,0.128l5.793,-0.387l-2.189,-1.415l3.219,-1.674l3.090,-0.129l5.150,-1.288l0.385,-0.128l1.029,0l1.418,0l1.545,-0.128l1.416,-0.129l1.027,0l0.389,0l0.900,-0.773l7.080,-0.257l2.190,0.643l6.049,-1.415l4.890,0l0.774,-1.159l2.574,-1.159l6.309,-1.030l4.632,0.772l-3.603,0.644l6.051,0.515l0.771,1.288l2.447,-0.644l9.782,-0.257l5.023,1.673l-2.318,3.089l-7.082,1.546l1.031,1.544l6.180,-0.257l2.961,1.030l11.968,0l2.705,1.544l10.299,0.129l0.387,-1.673l16.603,1.673l0.518,4.892l4.246,1.030l8.111,-1.545l15.834,-0.515l1.930,-3.476l23.170,1.802l2.320,1.545l7.078,2.059l14.416,-0.385l6.438,3.733l10.170,-0.128l9.269,-0.259l6.178,2.447l0.774,-3.219l13.257,0.515l8.496,1.159l3.735,1.158l6.564,2.059l7.209,2.448l8.110,1.029l5.277,2.575l-6.178,1.416l-0.386,2.703l-4.506,0.129l-5.278,-2.317l-5.150,-0.644l-3.475,-1.674l-1.802,2.961l0.385,-0.129zM518.204,80.414l0.645,-1.288l3.733,-0.772l2.702,0.386l1.289,0.515l-0.259,0.643l0.128,0.772l-4.890,0l3.348,0.256zM861.522,24.158l5.666,0.515l-0.128,1.416l-7.725,-1.416l-2.187,0.515zM836.034,22.871l5.279,-0.387l10.426,0.772l1.803,2.189l-9.527,-0.128l-3.989,1.030l-5.021,-1.931l-1.029,1.545zM742.835,13.473l0.516,0.772l5.019,2.575l-14.287,0.387l3.604,-3.090l-5.148,0.644zM718.763,9.226l10.556,0.386l5.922,3.346l-7.853,1.674l-11.328,-1.030l-0.127,-2.446l-2.830,1.930zM609.345,28.277l6.435,-2.317l-0.643,-1.287l6.050,-1.417l8.882,-1.673l8.882,-0.514l4.634,-1.030l5.279,-0.387l1.801,1.159l-1.801,0.772l-9.526,1.417l-8.239,1.287l-8.367,2.445l-3.993,2.704l-4.246,2.574l0.644,2.189l5.149,2.317l-1.672,0.129l-8.756,-0.257l-0.771,-1.287l-4.891,-0.644l-0.386,-1.545l2.830,-0.515l-0.127,-1.417l5.277,-2.316l2.445,0.387zM850.194,82.344l0.901,2.575l0,2.575l1.158,2.832l2.705,4.763l-3.990,-0.901l-1.674,3.862l2.574,2.703l0,1.931l-2.058,-1.674l-1.803,2.189l-0.516,-2.317l0.258,-2.575l-0.258,-2.960l0.645,-2.061l0.127,-3.604l-1.545,-2.575l0.131,-3.733l2.574,-1.287l-1.160,-1.158l1.289,-0.387l-0.642,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"Russia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Russia\x0a\x09^ 'M950.089,36.129l-0.258,0l-0.516,-1.801l0.774,-0.772l0.127,-0.129l6.308,1.158l6.435,-1.544zM586.045,9.869l5.276,-0.515l4.121,0l0.514,0.773l1.545,-0.644l2.574,-0.515l3.990,0.644l-1.028,0.386l-3.605,0.385l-2.447,0.130l-0.384,0.514l-3.221,0.386l-2.830,-0.643l1.545,-0.772l6.050,0.129zM950.089,51.964l-3.992,1.802l2.574,3.219l-0.641,2.188l-5.539,-0.773l-7.336,1.674l-6.177,2.703l-4.764,2.703l-3.990,-1.673l-7.725,1.803l-6.693,0.128l-4.377,4.506l3.088,0.772l0,4.634l-3.475,1.545l0.645,1.803l-4.506,1.544l-1.159,3.219l-4.250,1.158l-0.513,1.931l-4.119,3.089l-1.674,-6.178l-1.545,-5.922l1.545,-4.249l2.060,-1.157l0.127,-1.287l3.864,-0.773l5.148,-3.219l4.506,-2.832l5.019,-2.060l2.061,-3.732l-3.219,0.128l-1.672,2.317l-6.695,2.446l-2.187,-3.089l-7.081,0.901l-6.693,4.247l1.803,1.288l-6.309,1.416l-10.041,-1.416l-11.715,0l-6.564,1.159l-8.369,5.278l-9.781,5.665l3.861,0.643l0.771,2.317l3.092,0.385l1.672,-1.545l2.961,0.387l3.475,2.060l0.515,3.089l-1.543,2.189l-0.902,2.575l-1.031,5.535l-4.120,3.862l-0.900,1.802l-3.603,3.219l-3.735,3.089l-1.674,1.545l-3.603,1.674l-1.674,0l-1.674,-1.288l-3.601,1.931l-0.518,0.901l-0.385,-0.514l0,-1.288l1.416,-0.129l0.385,-3.219l-0.771,-2.317l2.318,-0.901l3.346,0.516l1.802,-2.704l0.901,-2.832l1.031,-1.029l1.414,-2.448l-4.375,0.774l-2.447,1.030l-3.990,0l-1.159,-2.447l-3.218,-1.930l-4.635,-0.902l-1.029,-2.574l-0.901,-1.674l-1.031,-1.158l-1.674,-2.703l-2.316,-1.030l-4.119,-0.772l-3.475,0l-3.350,0.513l-2.316,1.417l1.545,0.644l0,1.416l-1.414,0.901l-2.447,2.832l0,1.159l-3.862,1.672l-3.219,-0.900l-3.218,0.128l-1.414,-0.900l-1.545,-0.258l-3.991,1.930l-3.476,0.387l-2.574,0.644l-3.348,-0.386l-2.445,0l-1.674,-1.417l-2.701,-1.287l-2.705,-0.257l-3.348,0.257l-2.574,0.515l-3.862,-1.158l-0.515,-1.931l-3.090,-0.773l-2.445,-0.257l-3.090,-1.158l-2.703,2.832l1.029,1.545l-2.574,1.931l-3.862,-0.644l-2.703,-0.129l-1.802,-1.287l-2.832,0l-2.317,-0.901l-4.121,1.287l-5.148,2.317l-2.832,0.515l-1.030,0.258l-1.414,-1.675l-3.478,0.387l-1.158,-1.159l-1.930,-0.515l-1.289,-1.545l-1.545,-0.514l-3.860,0.644l-3.605,-1.546l-1.545,1.416l-5.922,-6.822l-3.474,-2.060l1.029,-0.901l-6.822,2.575l-2.577,0.128l0.258,-1.416l-3.474,-0.901l-2.832,0.645l-0.901,-2.833l-4.763,-0.644l-2.446,1.160l-6.693,1.028l-1.418,0.644l-10.039,0.901l-1.158,0.901l1.929,1.931l-2.575,0.644l0.515,0.772l-2.702,1.288l4.376,1.931l-0.644,1.159l-3.732,0l-0.773,0.772l-3.474,-1.416l-4.250,0l-2.961,1.158l-3.088,-1.029l-5.922,-1.931l-4.248,0.127l-5.535,2.962l-0.387,1.931l-2.705,-1.544l-2.186,2.960l0.772,0.515l-1.545,2.060l2.317,1.802l1.931,-0.129l1.803,1.803l-0.387,1.416l1.416,0.514l-1.287,1.546l-2.575,0.386l-2.704,2.831l2.445,2.576l-0.255,1.801l2.960,3.218l-1.545,1.030l-0.516,0.644l-1.158,-0.129l-1.931,-1.673l-0.643,0l-1.803,-0.644l-0.772,-1.158l-2.446,-0.516l-1.671,0.387l-0.517,-0.515l-3.604,-1.287l-3.990,-0.386l-2.318,-0.516l-0.256,0.387l-3.477,-2.318l-3.089,-1.029l-2.318,-1.545l1.931,-0.514l2.317,-2.189l-1.544,-1.030l3.991,-1.159l-0.129,-0.643l-2.446,0.515l0.128,-1.159l1.417,-0.772l2.575,-0.258l0.384,-0.901l-0.513,-1.417l1.029,-1.415l0,-0.772l-3.990,-0.902l-1.545,0l-1.674,-1.287l-2.059,0.386l-3.476,-0.901l0.129,-0.514l-1.030,-1.159l-2.058,-0.129l-0.258,-0.901l0.643,-0.515l-1.673,-1.544l-2.833,0.256l-0.772,-0.128l-0.773,0.644l-0.901,-0.129l-0.643,-1.674l-0.644,-0.901l0.516,-0.257l2.187,0.128l1.030,-0.643l-0.772,-0.772l-1.803,-0.387l0.129,-0.515l-1.160,-0.515l-1.672,-1.802l0.645,-0.644l-0.258,-1.287l-2.703,-0.643l-1.416,0.385l-0.387,-0.772l-2.833,-0.644l-0.901,-1.545l-0.129,-1.287l-1.286,-0.644l1.158,-0.901l-0.900,-2.446l1.930,-1.544l-0.386,-0.515l3.089,-1.545l-2.832,-1.287l5.792,-3.347l2.448,-1.545l1.030,-1.416l-3.991,-1.802l1.157,-1.802l-2.445,-2.060l1.801,-2.318l-3.089,-2.960l2.448,-2.060l-4.119,-1.801l0.384,-1.932l2.189,-0.257l4.507,-1.031l2.830,-0.900l4.378,1.545l7.466,0.643l10.169,3.089l2.059,1.288l0.129,1.802l-7.336,2.061l-12.102,-2.061l-1.929,0.386l4.504,3.219l0.772,2.060l2.961,1.544l3.218,-2.703l7.596,1.287l0,-2.960l7.465,-1.803l3.992,-0.901l-2.190,-1.674l-0.643,-3.218l7.466,0.772l-1.801,3.348l4.632,-0.129l7.210,-2.703l9.783,-2.318l2.060,1.417l9.397,-1.546l6.695,0.902l0.643,-3.219l7.853,0.772l10.684,2.832l1.673,-1.801l-3.991,-4.507l4.505,-2.702l2.190,-3.090l8.369,0.386l0.769,4.763l0.260,5.536l1.672,1.674l-0.516,1.802l-4.119,2.832l2.832,0.386l5.151,-2.961l1.029,-3.991l-2.832,-1.159l-1.029,-5.664l3.345,-3.346l2.190,1.802l0.644,2.060l1.672,-1.288l3.477,-0.901l5.535,-0.128l5.019,1.544l-2.445,-2.575l-0.256,-2.574l4.760,-0.514l6.437,0.128l5.793,-0.387l-2.189,-1.415l3.219,-1.674l3.090,-0.129l5.150,-1.288l0.385,-0.128l1.029,0l1.418,0l1.545,-0.128l1.416,-0.129l1.027,0l0.389,0l0.900,-0.773l7.080,-0.257l2.190,0.643l6.049,-1.415l4.890,0l0.774,-1.159l2.574,-1.159l6.309,-1.030l4.632,0.772l-3.603,0.644l6.051,0.515l0.771,1.288l2.447,-0.644l9.782,-0.257l5.023,1.673l-2.318,3.089l-7.082,1.546l1.031,1.544l6.180,-0.257l2.961,1.030l11.968,0l2.705,1.544l10.299,0.129l0.387,-1.673l16.603,1.673l0.518,4.892l4.246,1.030l8.111,-1.545l15.834,-0.515l1.930,-3.476l23.170,1.802l2.320,1.545l7.078,2.059l14.416,-0.385l6.438,3.733l10.170,-0.128l9.269,-0.259l6.178,2.447l0.774,-3.219l13.257,0.515l8.496,1.159l3.735,1.158l6.564,2.059l7.209,2.448l8.110,1.029l5.277,2.575l-6.178,1.416l-0.386,2.703l-4.506,0.129l-5.278,-2.317l-5.150,-0.644l-3.475,-1.674l-1.802,2.961l0.385,-0.129zM518.204,80.414l0.645,-1.288l3.733,-0.772l2.702,0.386l1.289,0.515l-0.259,0.643l0.128,0.772l-4.890,0l3.348,0.256zM861.522,24.158l5.666,0.515l-0.128,1.416l-7.725,-1.416l-2.187,0.515zM836.034,22.871l5.279,-0.387l10.426,0.772l1.803,2.189l-9.527,-0.128l-3.989,1.030l-5.021,-1.931l-1.029,1.545zM742.835,13.473l0.516,0.772l5.019,2.575l-14.287,0.387l3.604,-3.090l-5.148,0.644zM718.763,9.226l10.556,0.386l5.922,3.346l-7.853,1.674l-11.328,-1.030l-0.127,-2.446l-2.830,1.930zM609.345,28.277l6.435,-2.317l-0.643,-1.287l6.050,-1.417l8.882,-1.673l8.882,-0.514l4.634,-1.030l5.279,-0.387l1.801,1.159l-1.801,0.772l-9.526,1.417l-8.239,1.287l-8.367,2.445l-3.993,2.704l-4.246,2.574l0.644,2.189l5.149,2.317l-1.672,0.129l-8.756,-0.257l-0.771,-1.287l-4.891,-0.644l-0.386,-1.545l2.830,-0.515l-0.127,-1.417l5.277,-2.316l2.445,0.387zM850.194,82.344l0.901,2.575l0,2.575l1.158,2.832l2.705,4.763l-3.990,-0.901l-1.674,3.862l2.574,2.703l0,1.931l-2.058,-1.674l-1.803,2.189l-0.516,-2.317l0.258,-2.575l-0.258,-2.960l0.645,-2.061l0.127,-3.604l-1.545,-2.575l0.131,-3.733l2.574,-1.287l-1.160,-1.158l1.289,-0.387l-0.642,-1.802z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Rwanda",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Rwanda",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Rwanda\x0a\x09^ 'M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SaudiArabia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M580.509,182.883l-0.387,-1.157l-0.771,-0.773l-0.259,-1.031l-1.415,-1.029l-1.416,-2.188l-0.772,-2.189l-1.802,-1.931l-1.289,-0.386l-1.672,-2.574l-0.386,-1.932l0.128,-1.544l-1.545,-2.961l-1.287,-1.030l-1.416,-0.644l-0.902,-1.545l0.130,-0.514l-0.771,-1.417l-0.774,-0.643l-1.030,-2.060l-1.674,-2.059l-1.287,-1.931l-1.417,0l0.387,-1.417l0.131,-0.901l0.384,-1.158l2.960,0.514l1.160,-0.900l0.643,-0.901l2.060,-0.386l0.515,-0.902l0.901,-0.515l-2.703,-2.703l5.407,-1.287l0.514,-0.516l3.218,0.773l3.990,1.931l7.596,5.406l5.020,0.258l2.447,0.257l0.644,1.288l1.930,-0.129l1.030,2.317l1.288,0.644l0.513,0.902l1.803,1.158l0.127,1.159l-0.256,0.900l0.387,0.901l0.772,0.644l0.386,0.901l0.387,0.644l0.771,0.644l0.772,-0.258l0.517,1.030l0.127,0.643l1.031,2.704l8.110,1.416l0.514,-0.644l1.159,1.931l-1.802,5.408l-7.981,2.702l-7.853,1.030l-2.445,1.159l-1.931,2.832l-1.287,0.515l-0.644,-0.901l-1.031,0.128l-2.574,-0.257l-0.514,-0.257l-3.090,0l-0.773,0.257l-1.158,-0.644l-0.645,1.288l0.258,1.158l1.158,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"SaudiArabia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SaudiArabia\x0a\x09^ 'M580.509,182.883l-0.387,-1.157l-0.771,-0.773l-0.259,-1.031l-1.415,-1.029l-1.416,-2.188l-0.772,-2.189l-1.802,-1.931l-1.289,-0.386l-1.672,-2.574l-0.386,-1.932l0.128,-1.544l-1.545,-2.961l-1.287,-1.030l-1.416,-0.644l-0.902,-1.545l0.130,-0.514l-0.771,-1.417l-0.774,-0.643l-1.030,-2.060l-1.674,-2.059l-1.287,-1.931l-1.417,0l0.387,-1.417l0.131,-0.901l0.384,-1.158l2.960,0.514l1.160,-0.900l0.643,-0.901l2.060,-0.386l0.515,-0.902l0.901,-0.515l-2.703,-2.703l5.407,-1.287l0.514,-0.516l3.218,0.773l3.990,1.931l7.596,5.406l5.020,0.258l2.447,0.257l0.644,1.288l1.930,-0.129l1.030,2.317l1.288,0.644l0.513,0.902l1.803,1.158l0.127,1.159l-0.256,0.900l0.387,0.901l0.772,0.644l0.386,0.901l0.387,0.644l0.771,0.644l0.772,-0.258l0.517,1.030l0.127,0.643l1.031,2.704l8.110,1.416l0.514,-0.644l1.159,1.931l-1.802,5.408l-7.981,2.702l-7.853,1.030l-2.445,1.159l-1.931,2.832l-1.287,0.515l-0.644,-0.901l-1.031,0.128l-2.574,-0.257l-0.514,-0.257l-3.090,0l-0.773,0.257l-1.158,-0.644l-0.645,1.288l0.258,1.158l1.158,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Senegal",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Senegal",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Senegal\x0a\x09^ 'M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Serbia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M519.749,102.684l1.416,1.030l0.258,0.902l1.674,0.643l0.257,1.158l1.543,0.773l0.774,-0.644l0.771,0.386l-0.641,0.386l0.513,0.515l-0.772,0.644l0.259,0.902l1.415,1.158l-1.030,0.901l-0.515,0.772l0.256,0.386l-0.385,0.387l-1.288,0l-1.544,0.257l-1.545,0.515l-0.129,0.515l-0.385,0l-0.130,-1.030l-0.643,-0.257l-0.516,-0.773l-0.771,0.258l-0.129,-0.516l-1.287,1.288l0.258,0.901l-0.516,-0.128l-0.773,-0.902l-1.159,-0.515l0.258,-0.514l0.387,-1.545l0.900,-0.515l1.158,-0.387l0.389,-1.287l-1.289,-1.030l0.645,-1.159l-1.030,0l1.030,-1.029l-0.773,-0.772l-0.643,-1.031l2.060,-0.772l-1.672,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Serbia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Serbia\x0a\x09^ 'M519.749,102.684l1.416,1.030l0.258,0.902l1.674,0.643l0.257,1.158l1.543,0.773l0.774,-0.644l0.771,0.386l-0.641,0.386l0.513,0.515l-0.772,0.644l0.259,0.902l1.415,1.158l-1.030,0.901l-0.515,0.772l0.256,0.386l-0.385,0.387l-1.288,0l-1.544,0.257l-1.545,0.515l-0.129,0.515l-0.385,0l-0.130,-1.030l-0.643,-0.257l-0.516,-0.773l-0.771,0.258l-0.129,-0.516l-1.287,1.288l0.258,0.901l-0.516,-0.128l-0.773,-0.902l-1.159,-0.515l0.258,-0.514l0.387,-1.545l0.900,-0.515l1.158,-0.387l0.389,-1.287l-1.289,-1.030l0.645,-1.159l-1.030,0l1.030,-1.029l-0.773,-0.772l-0.643,-1.031l2.060,-0.772l-1.672,-0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SierraLeone",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z";
}, function($ctx1) {$ctx1.fill(self,"SierraLeone",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SierraLeone\x0a\x09^ 'M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Slovakia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,93.673l0.127,0.129l1.158,-0.386l1.289,1.030l1.672,-0.644l1.289,0.257l1.929,-0.386l2.577,1.030l-0.774,0.772l-0.513,1.030l-0.645,0.257l-2.832,-0.772l-0.900,0.129l-0.645,0.643l-1.287,0.387l-0.258,-0.258l-1.287,0.515l-1.158,0l-0.129,0.644l-2.318,0.257l-1.028,-0.257l-1.288,-0.772l-0.257,-0.903l0.127,-0.256l0.387,-0.644l1.288,0l0.900,-0.258l0,-0.257l0.517,-0.129l0.256,-0.643l0.644,0l0.385,-0.515l-0.774,0z";
}, function($ctx1) {$ctx1.fill(self,"Slovakia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Slovakia\x0a\x09^ 'M516.017,93.673l0.127,0.129l1.158,-0.386l1.289,1.030l1.672,-0.644l1.289,0.257l1.929,-0.386l2.577,1.030l-0.774,0.772l-0.513,1.030l-0.645,0.257l-2.832,-0.772l-0.900,0.129l-0.645,0.643l-1.287,0.387l-0.258,-0.258l-1.287,0.515l-1.158,0l-0.129,0.644l-2.318,0.257l-1.028,-0.257l-1.288,-0.772l-0.257,-0.903l0.127,-0.256l0.387,-0.644l1.288,0l0.900,-0.258l0,-0.257l0.517,-0.129l0.256,-0.643l0.644,0l0.385,-0.515l-0.774,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SolomonIslands",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M901.944,255.23l0.772,0.903l-1.930,0l-1.031,-1.674l1.674,0.643l-0.515,-0.128zM900.786,252.784l-0.387,0.516l-2.060,-2.318l-0.514,-1.544l0.901,0l1.029,2.059l-1.031,-1.287zM898.597,253.557l-1.159,0.129l-1.544,-0.386l-0.643,-0.386l0.256,-1.031l1.674,0.387l0.900,0.644l-0.516,-0.643zM895.251,248.537l0.643,0.901l0.128,0.515l-2.060,-1.158l-1.543,-0.902l-1.031,-0.901l0.384,-0.258l1.290,0.644l-2.189,-1.159zM888.556,245.834l1.031,0.900l-0.516,0.129l-1.160,-0.515l-1.158,-1.159l0.129,-0.386l-1.674,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"SolomonIslands",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SolomonIslands\x0a\x09^ 'M901.944,255.23l0.772,0.903l-1.930,0l-1.031,-1.674l1.674,0.643l-0.515,-0.128zM900.786,252.784l-0.387,0.516l-2.060,-2.318l-0.514,-1.544l0.901,0l1.029,2.059l-1.031,-1.287zM898.597,253.557l-1.159,0.129l-1.544,-0.386l-0.643,-0.386l0.256,-1.031l1.674,0.387l0.900,0.644l-0.516,-0.643zM895.251,248.537l0.643,0.901l0.128,0.515l-2.060,-1.158l-1.543,-0.902l-1.031,-0.901l0.384,-0.258l1.290,0.644l-2.189,-1.159zM888.556,245.834l1.031,0.900l-0.516,0.129l-1.160,-0.515l-1.158,-1.159l0.129,-0.386l-1.674,-1.031z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Somolia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M597.114,201.549l-1.287,1.674l-1.803,2.188l-2.316,0l-8.754,-3.218l-1.029,-0.901l-1.029,-1.287l-1.032,-1.545l0.645,-0.901l0.900,-1.416l0.902,0.515l0.516,1.030l1.286,1.158l1.288,0l2.575,-0.643l2.959,-0.387l2.319,-0.771l1.286,-0.259l1.029,-0.515l1.545,0l0,1.159l0,2.704l0,-1.415zM603.037,195.371l-0.258,1.545l0,1.415l-0.643,0.901l-0.773,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.576,2.059l-2.959,3.347l-0.644,1.415l-0.516,0.645l-1.931,-2.189l0.130,-10.169l2.188,-2.960l1.029,-0.644l1.803,0l2.318,-1.932l3.475,-0.129l7.722,-8.110l1.803,-2.188l1.287,-1.674l0,-1.415l0,-2.704l0,-1.159l0.903,-0.128l1.158,-0.387l1.416,-0.257l1.288,-0.900l1.028,0l-0.130,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Somolia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Somolia\x0a\x09^ 'M597.114,201.549l-1.287,1.674l-1.803,2.188l-2.316,0l-8.754,-3.218l-1.029,-0.901l-1.029,-1.287l-1.032,-1.545l0.645,-0.901l0.900,-1.416l0.902,0.515l0.516,1.030l1.286,1.158l1.288,0l2.575,-0.643l2.959,-0.387l2.319,-0.771l1.286,-0.259l1.029,-0.515l1.545,0l0,1.159l0,2.704l0,-1.415zM603.037,195.371l-0.258,1.545l0,1.415l-0.643,0.901l-0.773,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.576,2.059l-2.959,3.347l-0.644,1.415l-0.516,0.645l-1.931,-2.189l0.130,-10.169l2.188,-2.960l1.029,-0.644l1.803,0l2.318,-1.932l3.475,-0.129l7.722,-8.110l1.803,-2.188l1.287,-1.674l0,-1.415l0,-2.704l0,-1.159l0.903,-0.128l1.158,-0.387l1.416,-0.257l1.288,-0.900l1.028,0l-0.130,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthAfrica",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z";
}, function($ctx1) {$ctx1.fill(self,"SouthAfrica",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SouthAfrica\x0a\x09^ 'M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthKorea",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M810.933,122.895l2.447,3.218l0.642,1.803l0,3.089l-1.029,1.416l-2.445,0.515l-2.190,1.159l-2.445,0.258l-0.258,-1.545l0.514,-1.932l-1.158,-2.833l1.931,-0.514l-1.802,-2.189l0.131,-0.257l1.285,0l1.029,-1.158l1.930,-0.129l1.033,-0.129l-0.385,0.772z";
}, function($ctx1) {$ctx1.fill(self,"SouthKorea",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SouthKorea\x0a\x09^ 'M810.933,122.895l2.447,3.218l0.642,1.803l0,3.089l-1.029,1.416l-2.445,0.515l-2.190,1.159l-2.445,0.258l-0.258,-1.545l0.514,-1.932l-1.158,-2.833l1.931,-0.514l-1.802,-2.189l0.131,-0.257l1.285,0l1.029,-1.158l1.930,-0.129l1.033,-0.129l-0.385,0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Spain",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l0.129,-1.931l-1.029,-1.158l3.861,-1.932l3.219,0.515l3.604,0l2.960,0.387l2.189,-0.129l4.377,0.129l1.029,1.030l5.021,1.158l0.901,-0.514l3.089,1.158l3.090,-0.258l0.129,1.545l-2.574,1.802l-3.478,0.516l-0.127,0.900l-1.672,1.545l-1.031,2.189l1.031,1.544l-1.547,1.159l-0.642,1.803l-2.061,0.514l-1.802,2.060l-3.476,0l-2.574,0l-1.673,0.901l-1.031,1.030l-1.287,-0.129l-1.030,-1.030l-0.772,-1.545l-2.446,-0.385l-0.257,-0.902l1.030,-1.030l0.258,-0.644l-0.902,-0.900l0.772,-1.674l-1.030,-1.674l1.160,-0.256l0,-1.159l0.514,-0.387l0,-2.189l1.287,-0.643l-0.773,-1.416l-1.545,-0.128l-0.514,0.385l-1.545,0l-0.643,-1.287l-1.158,0.387l1.031,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Spain",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Spain\x0a\x09^ 'M440.838,114.141l0.129,-1.931l-1.029,-1.158l3.861,-1.932l3.219,0.515l3.604,0l2.960,0.387l2.189,-0.129l4.377,0.129l1.029,1.030l5.021,1.158l0.901,-0.514l3.089,1.158l3.090,-0.258l0.129,1.545l-2.574,1.802l-3.478,0.516l-0.127,0.900l-1.672,1.545l-1.031,2.189l1.031,1.544l-1.547,1.159l-0.642,1.803l-2.061,0.514l-1.802,2.060l-3.476,0l-2.574,0l-1.673,0.901l-1.031,1.030l-1.287,-0.129l-1.030,-1.030l-0.772,-1.545l-2.446,-0.385l-0.257,-0.902l1.030,-1.030l0.258,-0.644l-0.902,-0.900l0.772,-1.674l-1.030,-1.674l1.160,-0.256l0,-1.159l0.514,-0.387l0,-2.189l1.287,-0.643l-0.773,-1.416l-1.545,-0.128l-0.514,0.385l-1.545,0l-0.643,-1.287l-1.158,0.387l1.031,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SriLanka",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M685.552,206.699l-0.387,2.832l-1.158,0.772l-2.317,0.643l-1.289,-2.187l-0.513,-3.863l1.285,-4.376l1.805,1.545l1.285,1.801l-1.289,-2.833z";
}, function($ctx1) {$ctx1.fill(self,"SriLanka",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SriLanka\x0a\x09^ 'M685.552,206.699l-0.387,2.832l-1.158,0.772l-2.317,0.643l-1.289,-2.187l-0.513,-3.863l1.285,-4.376l1.805,1.545l1.285,1.801l-1.289,-2.833z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sudan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Sudan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Sudan\x0a\x09^ 'M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Suriname",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M311.337,210.946l3.219,0.517l0.257,-0.517l2.188,-0.257l2.833,0.774l-1.417,2.316l0.259,1.803l1.029,1.674l-0.386,1.157l-0.257,1.159l-0.772,1.158l-1.545,-0.515l-1.159,0.259l-1.158,-0.259l-0.259,0.773l0.516,0.514l-0.257,0.517l-1.546,-0.130l-1.545,-2.317l-0.385,-1.545l-0.902,0l-1.157,-1.931l0.514,-1.416l-0.129,-0.643l1.545,-0.772l-0.514,2.319z";
}, function($ctx1) {$ctx1.fill(self,"Suriname",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Suriname\x0a\x09^ 'M311.337,210.946l3.219,0.517l0.257,-0.517l2.188,-0.257l2.833,0.774l-1.417,2.316l0.259,1.803l1.029,1.674l-0.386,1.157l-0.257,1.159l-0.772,1.158l-1.545,-0.515l-1.159,0.259l-1.158,-0.259l-0.259,0.773l0.516,0.514l-0.257,0.517l-1.546,-0.130l-1.545,-2.317l-0.385,-1.545l-0.902,0l-1.157,-1.931l0.514,-1.416l-0.129,-0.643l1.545,-0.772l-0.514,2.319z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SvalbardJanMayen",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M539.059,11.285l-3.991,1.416l-7.852,0.387l-7.854-0.515l-0.514-0.644l-3.863-0.128l-2.961-1.159l8.369-0.772l3.86,0.644l2.704-0.772l6.822,0.643L539.059,11.285zM505.976,12.314h-3.733l-1.546-0.901l-7.335,1.031l2.059,2.06l5.276,2.317l3.99,0.772l-2.314,0.9l5.791,1.675l3.219-0.129l1.287-2.189l2.316-0.515l1.545-2.06l6.693-1.031l-8.881-1.931l-3.347-1.03l-3.991,0.128L505.976,12.314zM531.851,17.207l-3.863-0.515l-1.158-1.03l-5.535,0.515l1.674,0.901l-1.932,0.643l4.765,0.645L531.851,17.207z";
}, function($ctx1) {$ctx1.fill(self,"SvalbardJanMayen",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "SvalbardJanMayen\x0a\x09^ 'M539.059,11.285l-3.991,1.416l-7.852,0.387l-7.854-0.515l-0.514-0.644l-3.863-0.128l-2.961-1.159l8.369-0.772l3.86,0.644l2.704-0.772l6.822,0.643L539.059,11.285zM505.976,12.314h-3.733l-1.546-0.901l-7.335,1.031l2.059,2.06l5.276,2.317l3.99,0.772l-2.314,0.9l5.791,1.675l3.219-0.129l1.287-2.189l2.316-0.515l1.545-2.06l6.693-1.031l-8.881-1.931l-3.347-1.03l-3.991,0.128L505.976,12.314zM531.851,17.207l-3.863-0.515l-1.158-1.03l-5.535,0.515l1.674,0.901l-1.932,0.643l4.765,0.645L531.851,17.207z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Swaziland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Swaziland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Swaziland\x0a\x09^ 'M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sweden",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M525.026,49.905l-2.703,1.930l0.516,1.674l-4.377,2.060l-5.150,2.317l-1.930,3.861l1.930,1.932l2.576,1.415l-2.576,3.090l-2.704,0.643l-1.028,4.507l-1.545,2.445l-3.348,-0.257l-1.415,2.188l-3.218,0.129l-0.773,-2.575l-2.317,-3.090l-2.059,-3.732l1.158,-1.545l2.318,-1.931l0.900,-3.090l-1.803,-1.415l-0.127,-3.605l1.800,-2.446l2.705,0l0.903,-1.030l-1.031,-0.901l4.248,-3.862l2.703,-2.960l1.674,-1.931l2.702,0l0.644,-1.417l5.022,0.387l0.513,-1.803l1.673,-0.129l3.475,1.417l4.250,1.801l0.128,4.120l0.901,1.031l4.635,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Sweden",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Sweden\x0a\x09^ 'M525.026,49.905l-2.703,1.930l0.516,1.674l-4.377,2.060l-5.150,2.317l-1.930,3.861l1.930,1.932l2.576,1.415l-2.576,3.090l-2.704,0.643l-1.028,4.507l-1.545,2.445l-3.348,-0.257l-1.415,2.188l-3.218,0.129l-0.773,-2.575l-2.317,-3.090l-2.059,-3.732l1.158,-1.545l2.318,-1.931l0.900,-3.090l-1.803,-1.415l-0.127,-3.605l1.800,-2.446l2.705,0l0.903,-1.030l-1.031,-0.901l4.248,-3.862l2.703,-2.960l1.674,-1.931l2.702,0l0.644,-1.417l5.022,0.387l0.513,-1.803l1.673,-0.129l3.475,1.417l4.250,1.801l0.128,4.120l0.901,1.031l4.635,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Switzerland",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.042,98.951l0.128,0.515l-0.385,0.644l1.160,0.514l1.416,0l-0.258,1.159l-1.158,0.386l-1.932,-0.257l-0.643,1.030l-1.288,0.129l-0.387,-0.516l-1.543,1.031l-1.287,0.128l-1.160,-0.643l-0.901,-1.159l-1.288,0.386l0,-1.158l1.932,-1.545l-0.130,-0.644l1.288,0.257l0.772,-0.515l2.317,0l0.515,-0.514l-2.832,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Switzerland",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Switzerland\x0a\x09^ 'M491.042,98.951l0.128,0.515l-0.385,0.644l1.160,0.514l1.416,0l-0.258,1.159l-1.158,0.386l-1.932,-0.257l-0.643,1.030l-1.288,0.129l-0.387,-0.516l-1.543,1.031l-1.287,0.128l-1.160,-0.643l-0.901,-1.159l-1.288,0.386l0,-1.158l1.932,-1.545l-0.130,-0.644l1.288,0.257l0.772,-0.515l2.317,0l0.515,-0.514l-2.832,-0.772z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Syria",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M569.696,137.055l-5.278,2.833l-2.960,-1.031l0.256,-0.385l0,-1.160l0.643,-1.416l1.546,-1.029l-0.515,-1.031l-1.159,-0.128l-0.257,-2.059l0.644,-1.159l0.772,-0.643l0.643,-0.515l0.129,-1.545l0.902,0.514l2.960,-0.772l1.416,0.514l2.317,0l3.090,-1.028l1.416,0.128l3.090,-0.515l-1.416,1.673l-1.417,0.773l0.258,1.931l-1.029,3.218l6.051,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Syria",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Syria\x0a\x09^ 'M569.696,137.055l-5.278,2.833l-2.960,-1.031l0.256,-0.385l0,-1.160l0.643,-1.416l1.546,-1.029l-0.515,-1.031l-1.159,-0.128l-0.257,-2.059l0.644,-1.159l0.772,-0.643l0.643,-0.515l0.129,-1.545l0.902,0.514l2.960,-0.772l1.416,0.514l2.317,0l3.090,-1.028l1.416,0.128l3.090,-0.515l-1.416,1.673l-1.417,0.773l0.258,1.931l-1.029,3.218l6.051,-2.832z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Taiwan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M793.296,161.256l-1.672,4.378l-1.160,2.188l-1.414,-2.317l-0.260,-1.932l1.545,-2.702l2.189,-2.060l1.288,0.772l0.516,-1.673z";
}, function($ctx1) {$ctx1.fill(self,"Taiwan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Taiwan\x0a\x09^ 'M793.296,161.256l-1.672,4.378l-1.160,2.188l-1.414,-2.317l-0.260,-1.932l1.545,-2.702l2.189,-2.060l1.288,0.772l0.516,-1.673z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tajikistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.587,118.519l-1.030,0.900l-2.961,-0.515l-0.257,1.545l2.961,-0.129l3.347,0.901l5.020,-0.514l0.773,2.573l0.772,-0.256l1.674,0.515l-0.129,1.158l0.515,1.416l-2.832,0l-1.802,-0.129l-1.674,1.159l-1.285,0.257l-0.904,0.643l-1.030,-0.900l0.259,-2.317l-0.901,-0.129l0.384,-0.772l-1.543,-0.645l-1.160,0.903l-0.256,1.157l-0.386,0.387l-1.674,-0.128l-0.773,1.287l-0.901,-0.515l-2.059,0.900l-0.773,-0.385l1.547,-2.703l-0.645,-2.060l-1.931,-0.644l0.643,-1.159l2.318,0.129l1.285,-1.417l0.775,-1.801l3.603,-0.644l-0.514,1.287l0.386,0.772l-1.158,0.127z";
}, function($ctx1) {$ctx1.fill(self,"Tajikistan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Tajikistan\x0a\x09^ 'M656.587,118.519l-1.030,0.900l-2.961,-0.515l-0.257,1.545l2.961,-0.129l3.347,0.901l5.020,-0.514l0.773,2.573l0.772,-0.256l1.674,0.515l-0.129,1.158l0.515,1.416l-2.832,0l-1.802,-0.129l-1.674,1.159l-1.285,0.257l-0.904,0.643l-1.030,-0.900l0.259,-2.317l-0.901,-0.129l0.384,-0.772l-1.543,-0.645l-1.160,0.903l-0.256,1.157l-0.386,0.387l-1.674,-0.128l-0.773,1.287l-0.901,-0.515l-2.059,0.900l-0.773,-0.385l1.547,-2.703l-0.645,-2.060l-1.931,-0.644l0.643,-1.159l2.318,0.129l1.285,-1.417l0.775,-1.801l3.603,-0.644l-0.514,1.287l0.386,0.772l-1.158,0.127z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tanzania",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z";
}, function($ctx1) {$ctx1.fill(self,"Tanzania",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Tanzania\x0a\x09^ 'M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Thailand",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M741.548,194.082l-2.445,-1.157l-2.188,0l0.385,-2.060l-2.446,0l-0.128,2.961l-1.545,3.990l-0.903,2.318l0.260,1.931l1.801,0.128l1.031,2.446l0.514,2.318l1.416,1.545l1.674,0.257l1.416,1.415l-0.901,1.159l-1.802,0.257l-0.129,-1.287l-2.188,-1.157l-0.516,0.385l-1.029,-1.029l-0.515,-1.288l-1.418,-1.544l-1.286,-1.287l-0.515,1.544l-0.514,-1.417l0.385,-1.672l0.773,-2.576l1.287,-2.832l1.545,-2.445l-1.158,-2.447l0.129,-1.287l-0.387,-1.545l-1.802,-2.060l-0.643,-1.416l1.029,-0.514l0.901,-2.318l-1.030,-1.802l-1.802,-1.931l-1.287,-2.317l1.158,-0.515l1.287,-2.960l1.803,-0.129l1.672,-1.159l1.544,-0.643l1.161,0.900l0.129,1.546l1.800,0.128l-0.642,2.832l0,2.446l2.832,-1.544l0.900,0.385l1.545,0l0.516,-1.030l2.060,0.258l2.059,2.189l0.129,2.574l2.187,2.446l-0.127,2.189l-0.902,1.288l-2.447,-0.387l-3.475,0.514l-1.801,2.189l-0.643,-3.217z";
}, function($ctx1) {$ctx1.fill(self,"Thailand",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Thailand\x0a\x09^ 'M741.548,194.082l-2.445,-1.157l-2.188,0l0.385,-2.060l-2.446,0l-0.128,2.961l-1.545,3.990l-0.903,2.318l0.260,1.931l1.801,0.128l1.031,2.446l0.514,2.318l1.416,1.545l1.674,0.257l1.416,1.415l-0.901,1.159l-1.802,0.257l-0.129,-1.287l-2.188,-1.157l-0.516,0.385l-1.029,-1.029l-0.515,-1.288l-1.418,-1.544l-1.286,-1.287l-0.515,1.544l-0.514,-1.417l0.385,-1.672l0.773,-2.576l1.287,-2.832l1.545,-2.445l-1.158,-2.447l0.129,-1.287l-0.387,-1.545l-1.802,-2.060l-0.643,-1.416l1.029,-0.514l0.901,-2.318l-1.030,-1.802l-1.802,-1.931l-1.287,-2.317l1.158,-0.515l1.287,-2.960l1.803,-0.129l1.672,-1.159l1.544,-0.643l1.161,0.900l0.129,1.546l1.800,0.128l-0.642,2.832l0,2.446l2.832,-1.544l0.900,0.385l1.545,0l0.516,-1.030l2.060,0.258l2.059,2.189l0.129,2.574l2.187,2.446l-0.127,2.189l-0.902,1.288l-2.447,-0.387l-3.475,0.514l-1.801,2.189l-0.643,-3.217z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "TimorLeste",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,-0.643l2.316,-0.644l1.934,-0.129l0.771,-0.257l1.029,0.257l-0.900,0.773l-2.834,1.158l-2.316,0.773l0,-0.773l0.258,0.515z";
}, function($ctx1) {$ctx1.fill(self,"TimorLeste",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "TimorLeste\x0a\x09^ 'M801.921,250.982l0.258,-0.643l2.316,-0.644l1.934,-0.129l0.771,-0.257l1.029,0.257l-0.900,0.773l-2.834,1.158l-2.316,0.773l0,-0.773l0.258,0.515z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Togo",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Togo",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Togo\x0a\x09^ 'M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tunisia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Tunisia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Tunisia\x0a\x09^ 'M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Turkmenistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l-0.129,-2.188l-2.060,-0.128l-3.088,-2.317l-2.188,-0.387l-2.961,-1.288l-1.932,-0.257l-1.157,0.515l-1.803,-0.129l-1.932,1.546l-2.317,0.513l-0.515,-1.930l0.387,-2.832l-2.059,-0.901l0.644,-1.802l-1.804,-0.129l0.645,-2.318l2.574,0.644l2.316,-0.773l-1.931,-1.673l-0.772,-1.544l-2.187,0.643l-0.260,2.059l-0.900,-1.802l1.160,-0.900l3.090,-0.515l1.800,0.772l1.930,2.060l1.419,-0.128l2.959,0l-0.384,-1.417l2.315,-0.901l2.188,-1.545l3.735,1.416l0.256,2.188l1.030,0.515l2.832,-0.128l1.029,0.515l1.289,2.702l3.089,1.931l1.674,1.288l2.832,1.288l3.604,1.158l0,1.674l-0.902,-0.128l-1.285,-0.774l-0.387,1.030l-2.317,0.516l-0.515,2.188l-1.546,0.772l-2.058,0.386l-0.517,1.288l-2.059,0.257l2.832,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Turkmenistan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Turkmenistan\x0a\x09^ 'M630.069,130.876l-0.129,-2.188l-2.060,-0.128l-3.088,-2.317l-2.188,-0.387l-2.961,-1.288l-1.932,-0.257l-1.157,0.515l-1.803,-0.129l-1.932,1.546l-2.317,0.513l-0.515,-1.930l0.387,-2.832l-2.059,-0.901l0.644,-1.802l-1.804,-0.129l0.645,-2.318l2.574,0.644l2.316,-0.773l-1.931,-1.673l-0.772,-1.544l-2.187,0.643l-0.260,2.059l-0.900,-1.802l1.160,-0.900l3.090,-0.515l1.800,0.772l1.930,2.060l1.419,-0.128l2.959,0l-0.384,-1.417l2.315,-0.901l2.188,-1.545l3.735,1.416l0.256,2.188l1.030,0.515l2.832,-0.128l1.029,0.515l1.289,2.702l3.089,1.931l1.674,1.288l2.832,1.288l3.604,1.158l0,1.674l-0.902,-0.128l-1.285,-0.774l-0.387,1.030l-2.317,0.516l-0.515,2.188l-1.546,0.772l-2.058,0.386l-0.517,1.288l-2.059,0.257l2.832,1.030z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uganda",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l-2.961,0l-0.900,0.257l-1.547,0.900l-0.643,-0.256l0,-2.061l0.643,-1.028l0.131,-2.189l0.514,-1.287l1.029,-1.416l1.031,-0.643l0.901,-1.031l-1.159,-0.258l0.258,-3.217l1.029,-0.774l1.802,0.644l2.189,-0.644l1.545,0l1.416,-1.028l1.287,1.930l1.031,2.704l0.771,1.930l-1.029,1.931l-1.931,1.674l0,0.772l0,2.832l5.407,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Uganda",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Uganda\x0a\x09^ 'M551.03,229.742l-2.961,0l-0.900,0.257l-1.547,0.900l-0.643,-0.256l0,-2.061l0.643,-1.028l0.131,-2.189l0.514,-1.287l1.029,-1.416l1.031,-0.643l0.901,-1.031l-1.159,-0.258l0.258,-3.217l1.029,-0.774l1.802,0.644l2.189,-0.644l1.545,0l1.416,-1.028l1.287,1.930l1.031,2.704l0.771,1.930l-1.029,1.931l-1.931,1.674l0,0.772l0,2.832l5.407,-0.258z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ukraine",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.901,86.593l0.901,0.129l0.773,-0.644l0.772,0.128l2.833,-0.256l1.673,1.544l-0.643,0.515l0.258,0.901l2.058,0.129l1.030,1.159l-0.129,0.514l3.476,0.901l2.059,-0.386l1.674,1.287l1.545,0l3.990,0.902l0,0.772l-1.029,1.415l0.513,1.417l-0.384,0.901l-2.575,0.258l-1.417,0.772l-0.128,1.159l-2.060,0.128l-1.801,0.902l-2.576,0.128l-2.317,1.030l0.129,1.674l1.416,0.644l2.704,-0.130l-0.516,0.902l-2.959,0.515l-3.606,1.544l-1.544,-0.515l0.643,-1.286l-2.962,-0.774l0.389,-0.514l2.573,-0.901l-0.772,-0.645l-4.120,-0.643l-0.257,-1.029l-2.446,0.386l-1.030,1.416l-2.060,2.059l-1.158,-0.515l-1.287,0.386l-1.287,-0.386l0.773,-0.386l0.385,-0.901l0.774,-0.901l-0.129,-0.386l0.513,-0.258l0.258,0.386l1.545,0.129l0.773,-0.257l-0.517,-0.258l0.131,-0.386l-0.902,-0.772l-0.386,-1.030l-1.030,-0.515l0.257,-0.901l-1.287,-0.644l-1.029,-0.128l-2.059,-0.903l-1.675,0.259l-0.644,0.386l-1.158,0l-0.773,0.644l-1.931,0.257l-0.899,0.515l-1.289,-0.772l-1.673,0l-1.674,-0.258l-1.159,0.515l-0.256,-0.643l-1.415,-0.773l0.513,-1.030l0.774,-0.772l0.515,0.257l-0.646,-1.287l2.447,-2.189l1.287,-0.385l0.257,-0.773l-1.286,-2.317l1.286,-0.129l1.417,-0.644l2.187,-0.129l2.706,0.258l2.959,0.644l2.189,0l0.900,0.386l1.030,-0.386l0.772,0.643l2.446,-0.129l1.031,0.258l0.128,-1.416l0.900,-0.643l-2.318,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Ukraine",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Ukraine\x0a\x09^ 'M550.901,86.593l0.901,0.129l0.773,-0.644l0.772,0.128l2.833,-0.256l1.673,1.544l-0.643,0.515l0.258,0.901l2.058,0.129l1.030,1.159l-0.129,0.514l3.476,0.901l2.059,-0.386l1.674,1.287l1.545,0l3.990,0.902l0,0.772l-1.029,1.415l0.513,1.417l-0.384,0.901l-2.575,0.258l-1.417,0.772l-0.128,1.159l-2.060,0.128l-1.801,0.902l-2.576,0.128l-2.317,1.030l0.129,1.674l1.416,0.644l2.704,-0.130l-0.516,0.902l-2.959,0.515l-3.606,1.544l-1.544,-0.515l0.643,-1.286l-2.962,-0.774l0.389,-0.514l2.573,-0.901l-0.772,-0.645l-4.120,-0.643l-0.257,-1.029l-2.446,0.386l-1.030,1.416l-2.060,2.059l-1.158,-0.515l-1.287,0.386l-1.287,-0.386l0.773,-0.386l0.385,-0.901l0.774,-0.901l-0.129,-0.386l0.513,-0.258l0.258,0.386l1.545,0.129l0.773,-0.257l-0.517,-0.258l0.131,-0.386l-0.902,-0.772l-0.386,-1.030l-1.030,-0.515l0.257,-0.901l-1.287,-0.644l-1.029,-0.128l-2.059,-0.903l-1.675,0.259l-0.644,0.386l-1.158,0l-0.773,0.644l-1.931,0.257l-0.899,0.515l-1.289,-0.772l-1.673,0l-1.674,-0.258l-1.159,0.515l-0.256,-0.643l-1.415,-0.773l0.513,-1.030l0.774,-0.772l0.515,0.257l-0.646,-1.287l2.447,-2.189l1.287,-0.385l0.257,-0.773l-1.286,-2.317l1.286,-0.129l1.417,-0.644l2.187,-0.129l2.706,0.258l2.959,0.644l2.189,0l0.900,0.386l1.030,-0.386l0.772,0.643l2.446,-0.129l1.031,0.258l0.128,-1.416l0.900,-0.643l-2.318,0.129z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedArabEmirates",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M604.196,161.643l0.514,-0.129l0,0.772l2.188,-0.386l2.189,0l1.672,0.129l1.803,-1.802l2.058,-1.802l1.674,-1.673l0.518,0.900l0.385,2.189l-1.417,0l-0.258,1.802l0.517,0.386l-1.159,0.515l-0.129,1.029l-0.773,1.159l0,1.030l-0.514,0.644l-8.110,-1.416l-1.031,-2.704l0.127,0.643z";
}, function($ctx1) {$ctx1.fill(self,"UnitedArabEmirates",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "UnitedArabEmirates\x0a\x09^ 'M604.196,161.643l0.514,-0.129l0,0.772l2.188,-0.386l2.189,0l1.672,0.129l1.803,-1.802l2.058,-1.802l1.674,-1.673l0.518,0.900l0.385,2.189l-1.417,0l-0.258,1.802l0.517,0.386l-1.159,0.515l-0.129,1.029l-0.773,1.159l0,1.030l-0.514,0.644l-8.110,-1.416l-1.031,-2.704l0.127,0.643z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedStates",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M284.434,106.546l-2.704,0.772l-2.575,0.644l-3.089,1.673l-1.287,1.417l-0.258,0.386l-0.127,1.545l0.900,1.415l1.159,0l-0.259,-0.900l0.773,0.515l-0.257,0.772l-1.803,0.515l-1.286,-0.130l-1.931,0.517l-1.159,0.128l-1.673,0.128l-2.060,0.644l3.733,-0.387l0.128,0l0.773,0.515l-3.733,0.773l-1.802,0l0.129,-0.257l0.128,-0.644l-0.900,1.416l0.643,0l-0.515,2.060l-1.931,2.060l-0.257,-0.773l-0.516,-0.129l-0.643,-0.643l-0.129,0l-0.128,0l0.514,1.416l0.773,1.416l0.129,0.257l-1.030,0.901l-1.545,2.188l-0.258,-0.128l1.030,-1.802l-1.416,-1.287l-0.128,-2.060l-0.387,0.901l0,2.446l-1.673,-0.901l1.802,1.544l0.515,1.417l0.772,1.674l0.387,2.703l-1.803,1.930l-2.574,1.030l-2.318,1.417l-0.901,0.128l-1.158,1.931l-2.317,1.673l-2.832,1.288l-1.158,2.060l-0.516,1.415l0.387,2.061l1.030,2.187l1.159,2.061l0,1.029l1.157,2.703l0.129,2.447l-0.514,2.316l-1.159,0.516l-1.287,-0.386l-0.386,-1.159l-1.031,-0.644l-1.545,-2.317l-1.287,-1.931l-0.257,-1.287l0.515,-1.674l-0.643,-1.544l-1.803,-1.545l-1.416,-1.030l-3.089,1.158l-0.644,-0.772l-2.574,-1.287l-2.962,0.386l-2.445,-0.258l-1.674,0.515l-1.544,0l-0.258,1.160l0.772,1.543l-3.605,0.130l-2.316,-0.516l-1.545,-0.514l-2.059,-0.387l-2.318,-0.128l-2.317,0.643l-2.446,1.931l-2.702,1.158l-1.417,1.289l-0.644,1.287l0,1.802l0.129,1.287l0.515,0.901l-1.030,0.129l-1.931,-0.643l-2.188,-0.773l-0.772,-1.287l-0.515,-1.931l-1.545,-1.545l-1.030,-1.545l-1.288,-1.802l-1.930,-1.159l-2.189,0.130l-1.674,2.058l-2.316,-0.772l-1.288,-0.772l-0.772,-1.545l-0.900,-1.416l-1.545,-1.159l-1.416,-0.901l-0.902,-0.900l-4.633,0l-0.129,1.158l-2.060,0l-5.407,0l-6.178,-1.931l-3.992,-1.288l0.258,-0.515l-3.475,0.259l-3.090,0.256l-0.258,-1.029l-1.159,-1.416l-2.831,-1.545l-1.158,-0.129l-1.160,-0.900l-2.059,-0.130l-0.772,-0.515l-0.258,-1.416l-2.702,-2.704l-2.189,-3.732l0.128,-0.644l-1.287,-0.901l-2.059,-2.317l-0.386,-2.188l-1.417,-1.417l0.644,-2.189l-0.129,-2.317l-0.901,-1.544l0.901,-2.960l0.129,-2.962l0.514,-4.119l-0.771,-2.188l-0.387,-2.575l3.734,0.515l1.158,2.060l0.644,-0.773l-0.387,-2.188l-1.287,-2.189l15.962,0l2.704,0l32.182,0l18.536,0l5.536,0l0,-1.030l0.901,0l0.516,1.417l0.772,0.514l1.930,0.129l2.704,0.515l2.703,0.773l2.188,-0.387l3.219,0.773l0.385,0l0.515,0l0.258,-0.129l0.386,-0.129l0.387,-0.128l0.772,-0.258l0.643,-0.129l0.644,0.129l0.386,0.258l0.258,0l0.386,0.257l0.773,0.257l0.772,0.258l0.772,0.386l0.643,0.257l0.387,0.130l0.258,0.128l0.514,0.128l0.515,0.258l0.515,0.258l0.515,0.128l0.515,0.257l0.515,0.258l0.515,0.129l0.514,0.257l0.130,0.386l0.128,0.387l0.386,0.257l0.257,0l0.902,0l0.257,0l0,0.129l0,0.129l0,0.128l0,0.258l0.129,0l0.129,0.257l0.128,0l0.258,0.129l0.386,0.128l0.258,-0.128l0.128,0l0.258,0.258l0.128,0l0,0.129l-0.386,0.515l0.516,0.257l0.643,0.257l0.644,0.258l0.514,0.128l0.515,0.386l0.128,0.387l0,0.257l0.130,0.515l0.128,0.386l0.129,0.515l0.130,0.515l0.127,0.515l0,0.386l0.129,0.515l0.258,0.772l-0.129,0.258l-0.385,0.515l-0.259,0.515l0,0.129l0,0.128l-0.514,0.516l-0.772,1.030l-0.387,0.385l-0.257,0.515l0,0.257l0,0.130l0.257,0.257l0.387,0.257l0.514,0.129l0.644,0l0.643,-0.258l0.644,-0.257l0.644,-0.258l0.643,-0.385l0.644,-0.258l0.645,-0.129l0.900,-0.128l0.387,0l0.128,0l0.644,-0.129l0.643,-0.258l0.643,-0.257l0.902,-0.257l0.772,-0.258l0.386,-0.128l0.258,-0.130l0,-0.128l0,-0.258l-0.387,-0.772l0,-0.129l-0.257,-0.386l0.386,-0.129l0.515,-0.257l0.258,0l0.772,-0.128l0.643,0l0.902,0l0.772,0.128l0.901,0l0.516,0l0.643,0l0.257,-0.515l0.387,-0.386l0.256,-0.258l0.387,-0.258l2.703,-1.801l1.287,-0.516l4.120,0l4.891,0l0.258,-0.772l0.901,0l1.158,-0.515l0.902,-1.159l0.901,-2.187l2.060,-1.932l0.900,0.644l1.804,-0.386l1.157,0.772l0,3.605l1.803,1.545l0,-1.158zM16.808,64.322l2.059,0.257l0.258,1.031l-1.545,0.386l-1.802,-0.516l-1.673,-0.772l-2.703,0.386zM52.465,70.759l1.803,0.257l1.157,0.774l-2.317,1.286l-2.703,1.029l-1.416,-0.643l-0.385,-1.288l2.445,-0.901l-1.416,0.514zM85.42,39.22l0,9.913l0,15.446l2.574,0l2.704,0.774l1.802,1.157l2.445,1.803l2.575,-1.545l2.703,-0.902l1.545,1.417l1.802,1.159l2.446,1.159l1.674,1.930l2.703,3.090l4.634,1.673l0,1.802l-1.417,1.287l-1.544,-1.029l-2.316,-0.901l-0.773,-2.318l-3.476,-2.189l-1.415,-2.573l-2.576,-0.129l-4.376,-0.129l-3.090,-0.773l-5.535,-2.703l-2.702,-0.514l-4.636,-1.031l-3.733,0.259l-5.278,-1.288l-3.217,-1.159l-2.962,0.643l0.515,1.804l-1.544,0.257l-3.090,0.515l-2.318,0.900l-2.961,0.644l-0.385,-1.673l1.159,-2.575l2.831,-0.900l-0.771,-0.645l-3.347,1.545l-1.802,1.802l-3.991,1.931l2.059,1.288l-2.574,1.931l-2.961,1.030l-2.704,0.900l-0.643,1.159l-4.119,1.416l-0.901,1.288l-3.090,1.158l-1.931,-0.258l-2.445,0.773l-2.832,0.901l-2.189,0.902l-4.634,0.772l-0.387,-0.516l2.962,-1.158l2.574,-0.901l2.832,-1.417l3.347,-0.385l1.416,-1.030l3.734,-1.673l0.514,-0.516l2.059,-0.901l0.386,-2.059l1.418,-1.545l-3.091,0.773l-0.901,-0.516l-1.415,1.031l-1.803,-1.417l-0.644,1.030l-1.029,-1.417l-2.704,1.160l-1.673,0l-0.257,-1.674l0.514,-0.901l-1.673,-1.029l-3.604,0.513l-2.189,-1.287l-1.931,-0.643l0,-1.545l-2.059,-1.030l1.029,-1.673l2.188,-1.416l1.030,-1.416l2.189,-0.129l1.802,0.386l2.189,-1.287l1.930,0.257l2.059,-0.901l-0.513,-1.158l-1.546,-0.515l2.059,-1.030l-1.673,0l-2.832,0.515l-0.772,0.643l-2.188,-0.514l-3.863,0.257l-3.861,-0.643l-1.158,-1.159l-3.476,-1.545l3.862,-1.030l6.050,-1.416l2.188,0l-0.386,1.416l5.665,-0.129l-2.189,-1.673l-3.347,-1.031l-1.931,-1.286l-2.574,-1.158l-3.605,-0.901l1.417,-1.417l4.762,-0.129l3.475,-1.158l0.644,-1.288l2.703,-1.287l2.704,-0.386l5.021,-1.159l2.574,0.128l4.119,-1.415l3.990,0.643l2.060,1.159l1.159,-0.515l4.505,0.128l-0.128,0.644l4.119,0.516l2.703,-0.258l5.664,0.773l5.278,0.257l2.060,0.386l3.604,-0.514l3.991,0.900l-2.961,-0.387zM2.647,55.182l1.673,0.515l1.674,-0.258l2.189,0.644l2.574,0.386l-0.128,0.258l-2.061,0.644l-2.059,-0.644l-1.030,-0.514l-2.446,0.128l-0.643,-0.128l-0.257,1.031zM45.256,175.546l0,-0.773l-0.385,-1.029l0.643,-0.643l-0.258,-0.516l0.129,-0.128l0,-0.129l1.803,0.773l0.256,0.385l0,0.258l0.258,0.129l0.129,0.128l0.385,0.387l-0.643,0.514l-0.772,0.129l-0.515,0.515l-0.258,0.387l0.772,0.387zM43.067,170.01l-0.385,0.258l-1.158,-0.128l0.128,-0.387l-1.415,-0.257zM44.999,170.912l0,0.257l-0.258,0.129l-0.900,0.128l-0.130,-0.514l-0.386,0l-0.258,-0.387l0.130,-0.128l0.257,-0.129l0.257,0.385l0.516,-0.128l-0.772,-0.387zM39.335,169.496l-0.515,-0.643l0.386,-0.130l0.515,-0.257l0.386,0.643l0.257,0l0.258,0.516l-0.515,0l-0.257,-0.129l-0.129,0l0.386,0zM34.829,167.564l0.129,-0.256l0.386,-0.259l0.643,0.130l0.130,0.129l-0.130,0.514l-0.256,0.258l-0.516,-0.129l0.386,0.387z";
}, function($ctx1) {$ctx1.fill(self,"UnitedStates",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "UnitedStates\x0a\x09^ 'M284.434,106.546l-2.704,0.772l-2.575,0.644l-3.089,1.673l-1.287,1.417l-0.258,0.386l-0.127,1.545l0.900,1.415l1.159,0l-0.259,-0.900l0.773,0.515l-0.257,0.772l-1.803,0.515l-1.286,-0.130l-1.931,0.517l-1.159,0.128l-1.673,0.128l-2.060,0.644l3.733,-0.387l0.128,0l0.773,0.515l-3.733,0.773l-1.802,0l0.129,-0.257l0.128,-0.644l-0.900,1.416l0.643,0l-0.515,2.060l-1.931,2.060l-0.257,-0.773l-0.516,-0.129l-0.643,-0.643l-0.129,0l-0.128,0l0.514,1.416l0.773,1.416l0.129,0.257l-1.030,0.901l-1.545,2.188l-0.258,-0.128l1.030,-1.802l-1.416,-1.287l-0.128,-2.060l-0.387,0.901l0,2.446l-1.673,-0.901l1.802,1.544l0.515,1.417l0.772,1.674l0.387,2.703l-1.803,1.930l-2.574,1.030l-2.318,1.417l-0.901,0.128l-1.158,1.931l-2.317,1.673l-2.832,1.288l-1.158,2.060l-0.516,1.415l0.387,2.061l1.030,2.187l1.159,2.061l0,1.029l1.157,2.703l0.129,2.447l-0.514,2.316l-1.159,0.516l-1.287,-0.386l-0.386,-1.159l-1.031,-0.644l-1.545,-2.317l-1.287,-1.931l-0.257,-1.287l0.515,-1.674l-0.643,-1.544l-1.803,-1.545l-1.416,-1.030l-3.089,1.158l-0.644,-0.772l-2.574,-1.287l-2.962,0.386l-2.445,-0.258l-1.674,0.515l-1.544,0l-0.258,1.160l0.772,1.543l-3.605,0.130l-2.316,-0.516l-1.545,-0.514l-2.059,-0.387l-2.318,-0.128l-2.317,0.643l-2.446,1.931l-2.702,1.158l-1.417,1.289l-0.644,1.287l0,1.802l0.129,1.287l0.515,0.901l-1.030,0.129l-1.931,-0.643l-2.188,-0.773l-0.772,-1.287l-0.515,-1.931l-1.545,-1.545l-1.030,-1.545l-1.288,-1.802l-1.930,-1.159l-2.189,0.130l-1.674,2.058l-2.316,-0.772l-1.288,-0.772l-0.772,-1.545l-0.900,-1.416l-1.545,-1.159l-1.416,-0.901l-0.902,-0.900l-4.633,0l-0.129,1.158l-2.060,0l-5.407,0l-6.178,-1.931l-3.992,-1.288l0.258,-0.515l-3.475,0.259l-3.090,0.256l-0.258,-1.029l-1.159,-1.416l-2.831,-1.545l-1.158,-0.129l-1.160,-0.900l-2.059,-0.130l-0.772,-0.515l-0.258,-1.416l-2.702,-2.704l-2.189,-3.732l0.128,-0.644l-1.287,-0.901l-2.059,-2.317l-0.386,-2.188l-1.417,-1.417l0.644,-2.189l-0.129,-2.317l-0.901,-1.544l0.901,-2.960l0.129,-2.962l0.514,-4.119l-0.771,-2.188l-0.387,-2.575l3.734,0.515l1.158,2.060l0.644,-0.773l-0.387,-2.188l-1.287,-2.189l15.962,0l2.704,0l32.182,0l18.536,0l5.536,0l0,-1.030l0.901,0l0.516,1.417l0.772,0.514l1.930,0.129l2.704,0.515l2.703,0.773l2.188,-0.387l3.219,0.773l0.385,0l0.515,0l0.258,-0.129l0.386,-0.129l0.387,-0.128l0.772,-0.258l0.643,-0.129l0.644,0.129l0.386,0.258l0.258,0l0.386,0.257l0.773,0.257l0.772,0.258l0.772,0.386l0.643,0.257l0.387,0.130l0.258,0.128l0.514,0.128l0.515,0.258l0.515,0.258l0.515,0.128l0.515,0.257l0.515,0.258l0.515,0.129l0.514,0.257l0.130,0.386l0.128,0.387l0.386,0.257l0.257,0l0.902,0l0.257,0l0,0.129l0,0.129l0,0.128l0,0.258l0.129,0l0.129,0.257l0.128,0l0.258,0.129l0.386,0.128l0.258,-0.128l0.128,0l0.258,0.258l0.128,0l0,0.129l-0.386,0.515l0.516,0.257l0.643,0.257l0.644,0.258l0.514,0.128l0.515,0.386l0.128,0.387l0,0.257l0.130,0.515l0.128,0.386l0.129,0.515l0.130,0.515l0.127,0.515l0,0.386l0.129,0.515l0.258,0.772l-0.129,0.258l-0.385,0.515l-0.259,0.515l0,0.129l0,0.128l-0.514,0.516l-0.772,1.030l-0.387,0.385l-0.257,0.515l0,0.257l0,0.130l0.257,0.257l0.387,0.257l0.514,0.129l0.644,0l0.643,-0.258l0.644,-0.257l0.644,-0.258l0.643,-0.385l0.644,-0.258l0.645,-0.129l0.900,-0.128l0.387,0l0.128,0l0.644,-0.129l0.643,-0.258l0.643,-0.257l0.902,-0.257l0.772,-0.258l0.386,-0.128l0.258,-0.130l0,-0.128l0,-0.258l-0.387,-0.772l0,-0.129l-0.257,-0.386l0.386,-0.129l0.515,-0.257l0.258,0l0.772,-0.128l0.643,0l0.902,0l0.772,0.128l0.901,0l0.516,0l0.643,0l0.257,-0.515l0.387,-0.386l0.256,-0.258l0.387,-0.258l2.703,-1.801l1.287,-0.516l4.120,0l4.891,0l0.258,-0.772l0.901,0l1.158,-0.515l0.902,-1.159l0.901,-2.187l2.060,-1.932l0.900,0.644l1.804,-0.386l1.157,0.772l0,3.605l1.803,1.545l0,-1.158zM16.808,64.322l2.059,0.257l0.258,1.031l-1.545,0.386l-1.802,-0.516l-1.673,-0.772l-2.703,0.386zM52.465,70.759l1.803,0.257l1.157,0.774l-2.317,1.286l-2.703,1.029l-1.416,-0.643l-0.385,-1.288l2.445,-0.901l-1.416,0.514zM85.42,39.22l0,9.913l0,15.446l2.574,0l2.704,0.774l1.802,1.157l2.445,1.803l2.575,-1.545l2.703,-0.902l1.545,1.417l1.802,1.159l2.446,1.159l1.674,1.930l2.703,3.090l4.634,1.673l0,1.802l-1.417,1.287l-1.544,-1.029l-2.316,-0.901l-0.773,-2.318l-3.476,-2.189l-1.415,-2.573l-2.576,-0.129l-4.376,-0.129l-3.090,-0.773l-5.535,-2.703l-2.702,-0.514l-4.636,-1.031l-3.733,0.259l-5.278,-1.288l-3.217,-1.159l-2.962,0.643l0.515,1.804l-1.544,0.257l-3.090,0.515l-2.318,0.900l-2.961,0.644l-0.385,-1.673l1.159,-2.575l2.831,-0.900l-0.771,-0.645l-3.347,1.545l-1.802,1.802l-3.991,1.931l2.059,1.288l-2.574,1.931l-2.961,1.030l-2.704,0.900l-0.643,1.159l-4.119,1.416l-0.901,1.288l-3.090,1.158l-1.931,-0.258l-2.445,0.773l-2.832,0.901l-2.189,0.902l-4.634,0.772l-0.387,-0.516l2.962,-1.158l2.574,-0.901l2.832,-1.417l3.347,-0.385l1.416,-1.030l3.734,-1.673l0.514,-0.516l2.059,-0.901l0.386,-2.059l1.418,-1.545l-3.091,0.773l-0.901,-0.516l-1.415,1.031l-1.803,-1.417l-0.644,1.030l-1.029,-1.417l-2.704,1.160l-1.673,0l-0.257,-1.674l0.514,-0.901l-1.673,-1.029l-3.604,0.513l-2.189,-1.287l-1.931,-0.643l0,-1.545l-2.059,-1.030l1.029,-1.673l2.188,-1.416l1.030,-1.416l2.189,-0.129l1.802,0.386l2.189,-1.287l1.930,0.257l2.059,-0.901l-0.513,-1.158l-1.546,-0.515l2.059,-1.030l-1.673,0l-2.832,0.515l-0.772,0.643l-2.188,-0.514l-3.863,0.257l-3.861,-0.643l-1.158,-1.159l-3.476,-1.545l3.862,-1.030l6.050,-1.416l2.188,0l-0.386,1.416l5.665,-0.129l-2.189,-1.673l-3.347,-1.031l-1.931,-1.286l-2.574,-1.158l-3.605,-0.901l1.417,-1.417l4.762,-0.129l3.475,-1.158l0.644,-1.288l2.703,-1.287l2.704,-0.386l5.021,-1.159l2.574,0.128l4.119,-1.415l3.990,0.643l2.060,1.159l1.159,-0.515l4.505,0.128l-0.128,0.644l4.119,0.516l2.703,-0.258l5.664,0.773l5.278,0.257l2.060,0.386l3.604,-0.514l3.991,0.900l-2.961,-0.387zM2.647,55.182l1.673,0.515l1.674,-0.258l2.189,0.644l2.574,0.386l-0.128,0.258l-2.061,0.644l-2.059,-0.644l-1.030,-0.514l-2.446,0.128l-0.643,-0.128l-0.257,1.031zM45.256,175.546l0,-0.773l-0.385,-1.029l0.643,-0.643l-0.258,-0.516l0.129,-0.128l0,-0.129l1.803,0.773l0.256,0.385l0,0.258l0.258,0.129l0.129,0.128l0.385,0.387l-0.643,0.514l-0.772,0.129l-0.515,0.515l-0.258,0.387l0.772,0.387zM43.067,170.01l-0.385,0.258l-1.158,-0.128l0.128,-0.387l-1.415,-0.257zM44.999,170.912l0,0.257l-0.258,0.129l-0.900,0.128l-0.130,-0.514l-0.386,0l-0.258,-0.387l0.130,-0.128l0.257,-0.129l0.257,0.385l0.516,-0.128l-0.772,-0.387zM39.335,169.496l-0.515,-0.643l0.386,-0.130l0.515,-0.257l0.386,0.643l0.257,0l0.258,0.516l-0.515,0l-0.257,-0.129l-0.129,0l0.386,0zM34.829,167.564l0.129,-0.256l0.386,-0.259l0.643,0.130l0.130,0.129l-0.130,0.514l-0.256,0.258l-0.516,-0.129l0.386,0.387z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uruguay",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l1.674,-0.257l2.704,2.059l1.030,-0.130l2.702,1.805l2.189,1.414l1.545,1.804l-1.158,1.286l0.772,1.545l-1.159,1.674l-3.089,1.545l-2.060,-0.515l-1.416,0.257l-2.447,-1.157l-1.801,0.128l-1.674,-1.545l0.129,-1.674l0.643,-0.643l0,-2.705l0.644,-2.702l-0.772,2.189z";
}, function($ctx1) {$ctx1.fill(self,"Uruguay",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Uruguay\x0a\x09^ 'M310.05,308.396l1.674,-0.257l2.704,2.059l1.030,-0.130l2.702,1.805l2.189,1.414l1.545,1.804l-1.158,1.286l0.772,1.545l-1.159,1.674l-3.089,1.545l-2.060,-0.515l-1.416,0.257l-2.447,-1.157l-1.801,0.128l-1.674,-1.545l0.129,-1.674l0.643,-0.643l0,-2.705l0.644,-2.702l-0.772,2.189z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uzbekistan",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M644.487,126.371l0,-1.674l-3.604,-1.158l-2.832,-1.288l-1.674,-1.288l-3.089,-1.931l-1.289,-2.702l-1.029,-0.515l-2.832,0.128l-1.030,-0.515l-0.256,-2.188l-3.735,-1.416l-2.188,1.545l-2.315,0.901l0.384,1.417l-2.959,0l-0.130,-9.914l6.951,-1.544l0.515,0.129l0.644,0.386l1.159,0.515l2.317,1.030l2.189,1.029l2.574,2.446l3.219,-0.385l4.633,-0.259l3.219,2.060l-0.258,2.703l1.287,0l0.644,2.189l3.347,0.128l0.771,1.288l1.030,-0.129l1.160,-1.931l3.603,-1.802l1.547,-0.515l0.770,0.258l-2.317,1.801l2.061,1.030l1.929,-0.772l3.090,1.416l-3.346,1.932l-2.060,-0.257l-1.158,0.127l-0.386,-0.772l0.514,-1.287l-3.603,0.644l-0.775,1.801l-1.285,1.417l-2.318,-0.129l-0.643,1.159l1.931,0.644l0.645,2.060l-1.547,2.703l-2.059,-0.515l1.416,0z";
}, function($ctx1) {$ctx1.fill(self,"Uzbekistan",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Uzbekistan\x0a\x09^ 'M644.487,126.371l0,-1.674l-3.604,-1.158l-2.832,-1.288l-1.674,-1.288l-3.089,-1.931l-1.289,-2.702l-1.029,-0.515l-2.832,0.128l-1.030,-0.515l-0.256,-2.188l-3.735,-1.416l-2.188,1.545l-2.315,0.901l0.384,1.417l-2.959,0l-0.130,-9.914l6.951,-1.544l0.515,0.129l0.644,0.386l1.159,0.515l2.317,1.030l2.189,1.029l2.574,2.446l3.219,-0.385l4.633,-0.259l3.219,2.060l-0.258,2.703l1.287,0l0.644,2.189l3.347,0.128l0.771,1.288l1.030,-0.129l1.160,-1.931l3.603,-1.802l1.547,-0.515l0.770,0.258l-2.317,1.801l2.061,1.030l1.929,-0.772l3.090,1.416l-3.346,1.932l-2.060,-0.257l-1.158,0.127l-0.386,-0.772l0.514,-1.287l-3.603,0.644l-0.775,1.801l-1.285,1.417l-2.318,-0.129l-0.643,1.159l1.931,0.644l0.645,2.060l-1.547,2.703l-2.059,-0.515l1.416,0z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vanuatu",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M915.718,269.777l1.674,1.545l-0.901,0.387l-0.902,-1.160l-0.129,0.772zM914.56,269.133l-0.387,-0.643l0,-2.060l1.287,0.773l0.387,2.189l-0.774,-0.387l0.513,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Vanuatu",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Vanuatu\x0a\x09^ 'M915.718,269.777l1.674,1.545l-0.901,0.387l-0.902,-1.160l-0.129,0.772zM914.56,269.133l-0.387,-0.643l0,-2.060l1.287,0.773l0.387,2.189l-0.774,-0.387l0.513,-0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Venezuela",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M273.105,195.242l-0.128,0.644l-1.545,0.257l0.902,1.287l-0.129,1.416l-1.160,1.545l1.030,2.188l1.159,-0.257l0.643,-1.931l-0.900,-0.901l-0.129,-2.060l3.346,-1.159l-0.385,-1.158l1.029,-0.901l0.902,1.931l1.930,0l1.804,1.545l0,0.902l2.444,0l2.962,-0.259l1.544,1.159l2.060,0.387l1.416,-0.902l0.128,-0.644l3.218,-0.128l3.348,-0.130l-2.317,0.773l0.900,1.288l2.189,0.257l2.060,1.288l0.386,2.187l1.417,-0.128l1.028,0.645l-2.187,1.672l-0.130,0.902l0.902,1.029l-0.644,0.516l-1.673,0.385l0,1.287l-0.772,0.772l1.930,2.061l0.257,0.772l-0.900,1.030l-3.090,0.902l-1.930,0.515l-0.774,0.643l-2.059,-0.773l-2.060,-0.257l-0.514,0.257l1.158,0.643l0,1.804l0.387,1.672l2.188,0.259l0.128,0.514l-1.931,0.772l-0.257,1.159l-1.159,0.515l-1.930,0.644l-0.515,0.772l-2.060,0.129l-1.544,-1.417l-0.773,-2.703l-0.772,-0.901l-1.031,-0.644l1.416,-1.287l-0.127,-0.644l-0.773,-0.772l-0.516,-1.802l0.259,-1.931l0.513,-0.901l0.517,-1.416l-0.902,-0.515l-1.545,0.386l-1.931,-0.129l-1.158,0.258l-1.802,-2.317l-1.546,-0.387l-3.475,0.258l-0.644,-0.901l-0.772,-0.257l0,-0.516l0.257,-1.030l-0.128,-1.028l-0.644,-0.645l-0.387,-1.287l-1.415,-0.129l0.772,-1.545l0.387,-1.931l0.772,-1.030l1.029,-0.771l0.644,-1.289l-1.802,0.514z";
}, function($ctx1) {$ctx1.fill(self,"Venezuela",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Venezuela\x0a\x09^ 'M273.105,195.242l-0.128,0.644l-1.545,0.257l0.902,1.287l-0.129,1.416l-1.160,1.545l1.030,2.188l1.159,-0.257l0.643,-1.931l-0.900,-0.901l-0.129,-2.060l3.346,-1.159l-0.385,-1.158l1.029,-0.901l0.902,1.931l1.930,0l1.804,1.545l0,0.902l2.444,0l2.962,-0.259l1.544,1.159l2.060,0.387l1.416,-0.902l0.128,-0.644l3.218,-0.128l3.348,-0.130l-2.317,0.773l0.900,1.288l2.189,0.257l2.060,1.288l0.386,2.187l1.417,-0.128l1.028,0.645l-2.187,1.672l-0.130,0.902l0.902,1.029l-0.644,0.516l-1.673,0.385l0,1.287l-0.772,0.772l1.930,2.061l0.257,0.772l-0.900,1.030l-3.090,0.902l-1.930,0.515l-0.774,0.643l-2.059,-0.773l-2.060,-0.257l-0.514,0.257l1.158,0.643l0,1.804l0.387,1.672l2.188,0.259l0.128,0.514l-1.931,0.772l-0.257,1.159l-1.159,0.515l-1.930,0.644l-0.515,0.772l-2.060,0.129l-1.544,-1.417l-0.773,-2.703l-0.772,-0.901l-1.031,-0.644l1.416,-1.287l-0.127,-0.644l-0.773,-0.772l-0.516,-1.802l0.259,-1.931l0.513,-0.901l0.517,-1.416l-0.902,-0.515l-1.545,0.386l-1.931,-0.129l-1.158,0.258l-1.802,-2.317l-1.546,-0.387l-3.475,0.258l-0.644,-0.901l-0.772,-0.257l0,-0.516l0.257,-1.030l-0.128,-1.028l-0.644,-0.645l-0.387,-1.287l-1.415,-0.129l0.772,-1.545l0.387,-1.931l0.772,-1.030l1.029,-0.771l0.644,-1.289l-1.802,0.514z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vietnam",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M756.353,168.853l-3.606,2.316l-2.316,2.575l-0.514,1.930l2.059,2.832l2.445,3.476l2.445,1.675l1.674,2.188l1.287,5.020l-0.385,4.634l-2.318,1.802l-3.090,1.803l-2.187,2.188l-3.348,2.574l-0.902,-1.801l0.644,-1.803l-1.929,-1.544l2.316,-1.030l2.834,-0.258l-1.160,-1.674l4.506,-2.059l0.386,-3.218l-0.644,-1.803l0.387,-2.702l-0.645,-1.803l-2.061,-1.931l-1.673,-2.318l-2.188,-3.217l-3.219,-1.674l0.774,-0.902l1.672,-0.772l-1.028,-2.317l-3.347,0l-1.159,-2.446l-1.544,-2.188l1.416,-0.644l2.187,0l2.576,-0.257l2.317,-1.416l1.287,1.030l2.445,0.515l-0.387,1.545l1.289,1.029l-2.704,-0.645z";
}, function($ctx1) {$ctx1.fill(self,"Vietnam",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Vietnam\x0a\x09^ 'M756.353,168.853l-3.606,2.316l-2.316,2.575l-0.514,1.930l2.059,2.832l2.445,3.476l2.445,1.675l1.674,2.188l1.287,5.020l-0.385,4.634l-2.318,1.802l-3.090,1.803l-2.187,2.188l-3.348,2.574l-0.902,-1.801l0.644,-1.803l-1.929,-1.544l2.316,-1.030l2.834,-0.258l-1.160,-1.674l4.506,-2.059l0.386,-3.218l-0.644,-1.803l0.387,-2.702l-0.645,-1.803l-2.061,-1.931l-1.673,-2.318l-2.188,-3.217l-3.219,-1.674l0.774,-0.902l1.672,-0.772l-1.028,-2.317l-3.347,0l-1.159,-2.446l-1.544,-2.188l1.416,-0.644l2.187,0l2.576,-0.257l2.317,-1.416l1.287,1.030l2.445,0.515l-0.387,1.545l1.289,1.029l-2.704,-0.645z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "WesternSahara",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z";
}, function($ctx1) {$ctx1.fill(self,"WesternSahara",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "WesternSahara\x0a\x09^ 'M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Yemen",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M608.315,182.111l-1.931,0.772l-0.516,1.159l-0.127,0.901l-2.704,1.159l-4.249,1.287l-2.445,1.802l-1.158,0.258l-0.774,-0.258l-1.673,1.159l-1.673,0.515l-2.189,0.128l-0.772,0.130l-0.515,0.772l-0.772,0.128l-0.386,0.774l-1.287,-0.130l-0.903,0.387l-1.930,-0.129l-0.644,-1.545l0.129,-1.546l-0.516,-0.772l-0.513,-1.930l-0.772,-1.158l0.514,-0.129l-0.258,-1.159l0.388,-0.515l-0.130,-1.288l1.158,-0.772l-0.258,-1.158l0.645,-1.288l1.158,0.644l0.773,-0.257l3.090,0l0.514,0.257l2.574,0.257l1.031,-0.128l0.644,0.901l1.287,-0.515l1.931,-2.832l2.445,-1.159l7.853,-1.030l2.061,4.378l-0.900,-1.930z";
}, function($ctx1) {$ctx1.fill(self,"Yemen",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Yemen\x0a\x09^ 'M608.315,182.111l-1.931,0.772l-0.516,1.159l-0.127,0.901l-2.704,1.159l-4.249,1.287l-2.445,1.802l-1.158,0.258l-0.774,-0.258l-1.673,1.159l-1.673,0.515l-2.189,0.128l-0.772,0.130l-0.515,0.772l-0.772,0.128l-0.386,0.774l-1.287,-0.130l-0.903,0.387l-1.930,-0.129l-0.644,-1.545l0.129,-1.546l-0.516,-0.772l-0.513,-1.930l-0.772,-1.158l0.514,-0.129l-0.258,-1.159l0.388,-0.515l-0.130,-1.288l1.158,-0.772l-0.258,-1.158l0.645,-1.288l1.158,0.644l0.773,-0.257l3.090,0l0.514,0.257l2.574,0.257l1.031,-0.128l0.644,0.901l1.287,-0.515l1.931,-2.832l2.445,-1.159l7.853,-1.030l2.061,4.378l-0.900,-1.930z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zambia",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Zambia",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Zambia\x0a\x09^ 'M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zimbabwe",
category: 'countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.";
}, function($ctx1) {$ctx1.fill(self,"Zimbabwe",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "Zimbabwe\x0a\x09^ 'M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "countries",
category: 'list of countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "BosniaandHerzegovina", "Botswana", "Brazil", "BruneiDarussalam", "Bulgaria", "BurkinaFaso", "Burundi", "Cambodia", "Cameroon", "Canada", "CentralAfricanRepublic", "Chad", "Chile", "China", "Colombia", "Congo", "CostaRica", "Croatia", "Cuba", "Cyprus", "CzechRepubilc", "DemocraticRepublicCongo", "Denmark", "Djibouti", "DominicanRepublic", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Eritrea", "Estonia", "Ethiopia", "FalklandIslandsMalvinas", "Fiji", "Finland", "France", "FrenchGuyana", "GM", "Gabon", "Georgia", "Germany", "Ghana", "GreatBritian", "Greece", "Greenland", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "IvoryCoast", "Jamacia", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Mali", "Mauritania", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique", "MyanmarBurma", "Nambia", "Nepal", "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "NorthKorea", "Norway", "Noumea", "Oman", "Pakistan", "Palestine", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Phillipines", "Poland", "Portugal", "PuertoRico", "Qatar", "RepublicofMacedonia", "RepublicofTurkey", "Romania", "Russia", "Rwanda", "SaudiArabia", "Senegal", "Serbia", "SierraLeone", "Slovakia", "SolomonIslands", "Somolia", "SouthAfrica", "SouthKorea", "Spain", "SriLanka", "Sudan", "Suriname", "SvalbardJanMayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "TimorLeste", "Togo", "Tunisia", "Turkmenistan", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "WesternSahara", "Yemen", "Zambia", "Zimbabwe"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"countries",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "countries\x0a\x09^ #(#Afghanistan #Albania #Algeria #Angola #Argentina #Armenia #Australia #Austria #Azerbaijan #Bangladesh #Belarus #Belgium #Belize #Benin #Bhutan #Bolivia #BosniaandHerzegovina #Botswana #Brazil #BruneiDarussalam #Bulgaria #BurkinaFaso #Burundi #Cambodia #Cameroon #Canada #CentralAfricanRepublic #Chad #Chile #China #Colombia #Congo #CostaRica #Croatia #Cuba #Cyprus #CzechRepubilc #DemocraticRepublicCongo #Denmark #Djibouti #DominicanRepublic #Ecuador #Egypt #ElSalvador #EquatorialGuinea #Eritrea #Estonia #Ethiopia #FalklandIslandsMalvinas #Fiji #Finland #France #FrenchGuyana #GM #Gabon #Georgia #Germany #Ghana #GreatBritian #Greece #Greenland #Guatemala #Guinea #GuineaBissau #Guyana #Haiti #Honduras #Hungary #Iceland #India #Indonesia #Iran #Iraq #Ireland #Israel #Italy #IvoryCoast #Jamacia #Japan #Jordan #Kazakhstan #Kenya #Kuwait #Kyrgyzstan #Laos #Latvia #Lebanon #Lesotho #Liberia #Libya #Lithuania #Luxembourg #Madagascar #Malawi #Malaysia #Mali #Mauritania #Mexico #Moldova #Mongolia #Morocco #Mozambique #MyanmarBurma #Nambia #Nepal #Netherlands #NewZealand #Nicaragua #Niger #Nigeria #NorthKorea #Norway #Noumea #Oman #Pakistan #Palestine #Panama #PapuaNewGuinea #Paraguay #Peru #Phillipines #Poland #Portugal #PuertoRico #Qatar #RepublicofMacedonia #RepublicofTurkey #Romania #Russia #Rwanda #SaudiArabia #Senegal #Serbia #SierraLeone #Slovakia #SolomonIslands #Somolia #SouthAfrica #SouthKorea #Spain #SriLanka #Sudan #Suriname #SvalbardJanMayen #Swaziland #Sweden #Switzerland #Syria #Taiwan #Tajikistan #Tanzania #Thailand #TimorLeste #Togo #Tunisia #Turkmenistan #Uganda #Ukraine #UnitedArabEmirates #UnitedStates #Uruguay #Uzbekistan #Vanuatu #Venezuela #Vietnam #WesternSahara #Yemen #Zambia #Zimbabwe)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'instance creation',
fn: function (aPathString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._path_(aPathString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"path:",{aPathString:aPathString},smalltalk.ROSVGPath.klass)})},
args: ["aPathString"],
source: "path: aPathString\x0a\x09^ self new path: aPathString",
messageSends: ["path:", "new"],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "southAmerica",
category: 'list of countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Argentina", "Brazil", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"southAmerica",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "southAmerica\x0a\x09^ #(#Argentina #Brazil #Chile #Colombia #Ecuador #Paraguay #Peru #Uruguay #Venezuela)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "world",
category: 'list of countries',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._countries();
return $1;
}, function($ctx1) {$ctx1.fill(self,"world",{},smalltalk.ROSVGPath.klass)})},
args: [],
source: "world\x0a\x09^ self countries",
messageSends: ["countries"],
referencedClasses: []
}),
smalltalk.ROSVGPath.klass);


smalltalk.addClass('ROTux', smalltalk.ROAbstractPathShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=_st(self._defaultExtent())._x();
self["@height"]=_st(self._defaultExtent())._y();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROTux)})},
args: [],
source: "initialize\x0a\x09\x22 Initialize default values \x22\x0a\x09width := self defaultExtent x.\x0a\x09height := self defaultExtent y.",
messageSends: ["x", "defaultExtent", "y"],
referencedClasses: []
}),
smalltalk.ROTux);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePathOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(canvas)._path_("M11.791,25.229c1.027-0.104,1.162-1.191,0.68-1.666c-0.398-0.392-2.598-2.022-3.171-2.664C9.033,20.6,8.673,20.454,8.52,20.12c-0.352-0.771-0.598-1.869-0.151-2.658c0.081-0.144,0.133-0.078,0.071,0.22c-0.351,1.684,0.746,3.059,0.986,2.354c0.167-0.487,0.013-1.358,0.102-2.051c0.158-1.226,1.273-3.577,1.763-3.712c-0.755-1.398,0.886-2.494,0.866-3.723c-0.014-0.798,0.701,0.982,1.419,1.359c0.802,0.422,1.684-0.794,2.936-1.41c0.354-0.176,0.809-0.376,0.776-0.524c-0.146-0.718-1.644,0.886-2.979,0.939c-0.61,0.024-0.837-0.12-1.072-0.347c-0.712-0.689,0.073-0.115,1.132-0.307c0.471-0.085,0.629-0.163,1.128-0.365c0.5-0.201,1.069-0.5,1.636-0.654c0.395-0.106,0.361-0.402,0.208-0.491c-0.088-0.051-0.219-0.046-0.321,0.133c-0.244,0.419-1.383,0.661-1.74,0.771c-0.457,0.14-0.962,0.271-1.634,0.243c-1.021-0.042-0.782-0.509-1.513-0.928c-0.213-0.122-0.156-0.444,0.129-0.729c0.148-0.148,0.557-0.232,0.76-0.572c0.028-0.047,0.289-0.32,0.494-0.461c0.07-0.049,0.076-1.295-0.562-1.32c-0.543-0.021-0.697,0.398-0.675,0.818c0.022,0.419,0.245,0.765,0.393,0.764c0.285-0.004,0.019,0.311-0.138,0.361c-0.237,0.078-0.562-0.934-0.525-1.418c0.039-0.506,0.303-1.4,0.942-1.383c0.576,0.016,0.993,0.737,0.973,1.983c-0.003,0.211,0.935-0.101,1.247,0.229c0.224,0.236-0.767-2.207,1.438-2.375c0.582,0.111,1.14,0.305,1.371,1.641c-0.086,0.139,0.146,1.07-0.215,1.182c-0.438,0.135-0.707-0.02-0.453-0.438c0.172-0.418,0.004-1.483-0.882-1.42c-0.887,0.064-0.769,1.637-0.526,1.668c0.243,0.031,0.854,0.465,1.282,0.549c1.401,0.271,0.371,1.075,0.555,2.048c0.205,1.099,0.929,0.809,1.578,3.717c0.137,0.177,0.676,0.345,1.199,2.579c0.473,2.011-0.195,3.473,0.938,3.353c0.256-0.026,0.629-0.1,0.792-0.668c0.425-1.489-0.213-3.263-0.855-4.46c-0.375-0.698-0.729-1.174-0.916-1.337c0.738,0.436,1.683,1.829,1.898,2.862c0.286,1.358,0.49,1.934,0.059,3.37c0.25,0.125,0.871,0.39,0.871,0.685c-0.647-0.53-2.629-0.625-2.68,0.646c-0.338,0.008-0.594,0.034-0.811,0.293c-0.797,0.944-0.059,2.842-0.139,3.859c-0.07,0.896-0.318,1.783-0.46,2.683c-0.474-0.019-0.428-0.364-0.274-0.852c0.135-0.431,0.351-0.968,0.365-1.484c0.012-0.467-0.039-0.759-0.156-0.831c-0.118-0.072-0.303,0.074-0.559,0.485c-0.543,0.875-1.722,1.261-2.821,1.397c-1.099,0.138-2.123,0.028-2.664-0.578c-0.186-0.207-0.492,0.058-0.529,0.111c-0.049,0.074,0.18,0.219,0.352,0.533c0.251,0.461,0.49,1.159-0.105,1.479C12.83,26.314,12.316,26.221,11.791,25.229L11.791,25.229zM11.398,25.188c0.395,0.621,1.783,3.232-0.652,3.571c-0.814,0.114-2.125-0.474-3.396-0.784c-1.142-0.279-2.301-0.444-2.949-0.627c-0.391-0.108-0.554-0.25-0.588-0.414c-0.091-0.434,0.474-1.041,0.503-1.555c0.028-0.514-0.188-0.779-0.364-1.199c-0.177-0.42-0.224-0.734-0.081-0.914c0.109-0.141,0.334-0.199,0.698-0.164c0.462,0.047,1.02-0.049,1.319-0.23c0.505-0.309,0.742-0.939,0.516-1.699c0,0.744-0.244,1.025-0.855,1.366c-0.577,0.319-1.467,0.062-1.875,0.416c-0.492,0.427,0.175,1.528,0.12,2.338c-0.042,0.622-0.69,1.322-0.401,1.946c0.291,0.627,1.648,0.695,3.064,0.99c2.012,0.422,3.184,1.153,4.113,1.188c1.356,0.05,1.564-1.342,3.693-1.36c0.621-0.033,1.229-0.052,1.835-0.06c0.688-0.009,1.375-0.003,2.079,0.014c1.417,0.034,0.931,0.773,1.851,1.246c0.774,0.397,2.17,0.241,2.504-0.077c0.451-0.431,1.662-1.467,2.592-1.935c1.156-0.583,3.876-1.588,1.902-2.812c-0.461-0.285-1.547-0.588-1.639-2.676c-0.412,0.366-0.365,2.312,0.784,2.697c1.283,0.431,2.085,1.152-0.301,1.969c-1.58,0.54-1.849,0.706-3.099,1.747c-1.267,1.054-3.145,0.636-2.815-1.582c0.171-1.155,0.269-2.11-0.019-3.114c-0.142-0.49-0.211-1.119-0.114-1.562c0.187-0.858,0.651-1.117,1.106-0.293c0.285,0.519,0.385,1.122,1.408,1.171c1.607,0.077,1.926-1.553,2.439-1.627c0.343-0.05,0.686-1.02,0.425-2.589c-0.28-1.681-1.269-4.332-2.536-5.677c-1.053-1.118-1.717-2.098-2.135-3.497c-0.352-1.175-0.547-2.318-0.475-3.412c0.094-1.417-0.691-3.389-1.943-4.316c-0.782-0.581-2.011-0.893-3.122-0.88c-0.623,0.007-1.21,0.099-1.661,0.343c-1.855,1.008-2.113,2.445-2.086,4.088c0.025,1.543,0.078,3.303,0.254,4.977c-0.208,0.77-1.288,2.227-1.979,3.114C8.59,14.233,8.121,16.01,7.52,17.561c-0.321,0.828-0.862,1.2-0.908,2.265C6.6,20.122,6.61,20.891,6.894,20.672C7.98,19.829,9.343,21.95,11.398,25.188L11.398,25.188zM17.044,2.953c-0.06,0.176-0.3,0.321-0.146,0.443c0.152,0.123,0.24-0.171,0.549-0.281c0.08-0.028,0.449,0.012,0.519-0.164c0.03-0.077-0.19-0.164-0.321-0.291c-0.133-0.125-0.262-0.236-0.386-0.229C16.938,2.451,17.096,2.798,17.044,2.953L17.044,2.953zM18.934,9.35c0.115-0.121,0.174,0.207,0.483,0.402c0.244,0.154,0.481,0.04,0.545,0.354c0.044,0.225-0.097,0.467-0.284,0.436C19.35,10.486,18.596,9.705,18.934,9.35L18.934,9.35zM13.832,7.375c-0.508-0.037-0.543,0.33-0.375,0.324C13.629,7.693,13.523,7.408,13.832,7.375L13.832,7.375zM12.96,6.436c0.06-0.013,0.146,0.09,0.119,0.233c-0.037,0.199-0.021,0.324,0.117,0.325c0.022,0,0.048-0.005,0.056-0.057c0.066-0.396-0.14-0.688-0.225-0.711C12.834,6.178,12.857,6.458,12.96,6.436L12.96,6.436zM16.663,6.268c0.129,0.039,0.253,0.262,0.28,0.504c0.002,0.021,0.168-0.035,0.17-0.088c0.011-0.389-0.321-0.571-0.408-0.562C16.506,6.139,16.562,6.238,16.663,6.268L16.663,6.268zM14.765,7.423c0.463-0.214,0.625,0.118,0.465,0.171C15.066,7.648,15.065,7.345,14.765,7.423L14.765,7.423zM9.178,15.304c-0.219-0.026,0.063-0.19,0.184-0.397c0.131-0.227,0.105-0.511,0.244-0.469s0.061,0.2-0.033,0.461C9.491,15.121,9.258,15.313,9.178,15.304L9.178,15.304z");
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializePathOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROTux)})},
args: ["canvas", "anElement"],
source: "initializePathOn: canvas for: anElement\x0a\x09^ canvas path:\x0a\x09'M11.791,25.229c1.027-0.104,1.162-1.191,0.68-1.666c-0.398-0.392-2.598-2.022-3.171-2.664C9.033,20.6,8.673,20.454,8.52,20.12c-0.352-0.771-0.598-1.869-0.151-2.658c0.081-0.144,0.133-0.078,0.071,0.22c-0.351,1.684,0.746,3.059,0.986,2.354c0.167-0.487,0.013-1.358,0.102-2.051c0.158-1.226,1.273-3.577,1.763-3.712c-0.755-1.398,0.886-2.494,0.866-3.723c-0.014-0.798,0.701,0.982,1.419,1.359c0.802,0.422,1.684-0.794,2.936-1.41c0.354-0.176,0.809-0.376,0.776-0.524c-0.146-0.718-1.644,0.886-2.979,0.939c-0.61,0.024-0.837-0.12-1.072-0.347c-0.712-0.689,0.073-0.115,1.132-0.307c0.471-0.085,0.629-0.163,1.128-0.365c0.5-0.201,1.069-0.5,1.636-0.654c0.395-0.106,0.361-0.402,0.208-0.491c-0.088-0.051-0.219-0.046-0.321,0.133c-0.244,0.419-1.383,0.661-1.74,0.771c-0.457,0.14-0.962,0.271-1.634,0.243c-1.021-0.042-0.782-0.509-1.513-0.928c-0.213-0.122-0.156-0.444,0.129-0.729c0.148-0.148,0.557-0.232,0.76-0.572c0.028-0.047,0.289-0.32,0.494-0.461c0.07-0.049,0.076-1.295-0.562-1.32c-0.543-0.021-0.697,0.398-0.675,0.818c0.022,0.419,0.245,0.765,0.393,0.764c0.285-0.004,0.019,0.311-0.138,0.361c-0.237,0.078-0.562-0.934-0.525-1.418c0.039-0.506,0.303-1.4,0.942-1.383c0.576,0.016,0.993,0.737,0.973,1.983c-0.003,0.211,0.935-0.101,1.247,0.229c0.224,0.236-0.767-2.207,1.438-2.375c0.582,0.111,1.14,0.305,1.371,1.641c-0.086,0.139,0.146,1.07-0.215,1.182c-0.438,0.135-0.707-0.02-0.453-0.438c0.172-0.418,0.004-1.483-0.882-1.42c-0.887,0.064-0.769,1.637-0.526,1.668c0.243,0.031,0.854,0.465,1.282,0.549c1.401,0.271,0.371,1.075,0.555,2.048c0.205,1.099,0.929,0.809,1.578,3.717c0.137,0.177,0.676,0.345,1.199,2.579c0.473,2.011-0.195,3.473,0.938,3.353c0.256-0.026,0.629-0.1,0.792-0.668c0.425-1.489-0.213-3.263-0.855-4.46c-0.375-0.698-0.729-1.174-0.916-1.337c0.738,0.436,1.683,1.829,1.898,2.862c0.286,1.358,0.49,1.934,0.059,3.37c0.25,0.125,0.871,0.39,0.871,0.685c-0.647-0.53-2.629-0.625-2.68,0.646c-0.338,0.008-0.594,0.034-0.811,0.293c-0.797,0.944-0.059,2.842-0.139,3.859c-0.07,0.896-0.318,1.783-0.46,2.683c-0.474-0.019-0.428-0.364-0.274-0.852c0.135-0.431,0.351-0.968,0.365-1.484c0.012-0.467-0.039-0.759-0.156-0.831c-0.118-0.072-0.303,0.074-0.559,0.485c-0.543,0.875-1.722,1.261-2.821,1.397c-1.099,0.138-2.123,0.028-2.664-0.578c-0.186-0.207-0.492,0.058-0.529,0.111c-0.049,0.074,0.18,0.219,0.352,0.533c0.251,0.461,0.49,1.159-0.105,1.479C12.83,26.314,12.316,26.221,11.791,25.229L11.791,25.229zM11.398,25.188c0.395,0.621,1.783,3.232-0.652,3.571c-0.814,0.114-2.125-0.474-3.396-0.784c-1.142-0.279-2.301-0.444-2.949-0.627c-0.391-0.108-0.554-0.25-0.588-0.414c-0.091-0.434,0.474-1.041,0.503-1.555c0.028-0.514-0.188-0.779-0.364-1.199c-0.177-0.42-0.224-0.734-0.081-0.914c0.109-0.141,0.334-0.199,0.698-0.164c0.462,0.047,1.02-0.049,1.319-0.23c0.505-0.309,0.742-0.939,0.516-1.699c0,0.744-0.244,1.025-0.855,1.366c-0.577,0.319-1.467,0.062-1.875,0.416c-0.492,0.427,0.175,1.528,0.12,2.338c-0.042,0.622-0.69,1.322-0.401,1.946c0.291,0.627,1.648,0.695,3.064,0.99c2.012,0.422,3.184,1.153,4.113,1.188c1.356,0.05,1.564-1.342,3.693-1.36c0.621-0.033,1.229-0.052,1.835-0.06c0.688-0.009,1.375-0.003,2.079,0.014c1.417,0.034,0.931,0.773,1.851,1.246c0.774,0.397,2.17,0.241,2.504-0.077c0.451-0.431,1.662-1.467,2.592-1.935c1.156-0.583,3.876-1.588,1.902-2.812c-0.461-0.285-1.547-0.588-1.639-2.676c-0.412,0.366-0.365,2.312,0.784,2.697c1.283,0.431,2.085,1.152-0.301,1.969c-1.58,0.54-1.849,0.706-3.099,1.747c-1.267,1.054-3.145,0.636-2.815-1.582c0.171-1.155,0.269-2.11-0.019-3.114c-0.142-0.49-0.211-1.119-0.114-1.562c0.187-0.858,0.651-1.117,1.106-0.293c0.285,0.519,0.385,1.122,1.408,1.171c1.607,0.077,1.926-1.553,2.439-1.627c0.343-0.05,0.686-1.02,0.425-2.589c-0.28-1.681-1.269-4.332-2.536-5.677c-1.053-1.118-1.717-2.098-2.135-3.497c-0.352-1.175-0.547-2.318-0.475-3.412c0.094-1.417-0.691-3.389-1.943-4.316c-0.782-0.581-2.011-0.893-3.122-0.88c-0.623,0.007-1.21,0.099-1.661,0.343c-1.855,1.008-2.113,2.445-2.086,4.088c0.025,1.543,0.078,3.303,0.254,4.977c-0.208,0.77-1.288,2.227-1.979,3.114C8.59,14.233,8.121,16.01,7.52,17.561c-0.321,0.828-0.862,1.2-0.908,2.265C6.6,20.122,6.61,20.891,6.894,20.672C7.98,19.829,9.343,21.95,11.398,25.188L11.398,25.188zM17.044,2.953c-0.06,0.176-0.3,0.321-0.146,0.443c0.152,0.123,0.24-0.171,0.549-0.281c0.08-0.028,0.449,0.012,0.519-0.164c0.03-0.077-0.19-0.164-0.321-0.291c-0.133-0.125-0.262-0.236-0.386-0.229C16.938,2.451,17.096,2.798,17.044,2.953L17.044,2.953zM18.934,9.35c0.115-0.121,0.174,0.207,0.483,0.402c0.244,0.154,0.481,0.04,0.545,0.354c0.044,0.225-0.097,0.467-0.284,0.436C19.35,10.486,18.596,9.705,18.934,9.35L18.934,9.35zM13.832,7.375c-0.508-0.037-0.543,0.33-0.375,0.324C13.629,7.693,13.523,7.408,13.832,7.375L13.832,7.375zM12.96,6.436c0.06-0.013,0.146,0.09,0.119,0.233c-0.037,0.199-0.021,0.324,0.117,0.325c0.022,0,0.048-0.005,0.056-0.057c0.066-0.396-0.14-0.688-0.225-0.711C12.834,6.178,12.857,6.458,12.96,6.436L12.96,6.436zM16.663,6.268c0.129,0.039,0.253,0.262,0.28,0.504c0.002,0.021,0.168-0.035,0.17-0.088c0.011-0.389-0.321-0.571-0.408-0.562C16.506,6.139,16.562,6.238,16.663,6.268L16.663,6.268zM14.765,7.423c0.463-0.214,0.625,0.118,0.465,0.171C15.066,7.648,15.065,7.345,14.765,7.423L14.765,7.423zM9.178,15.304c-0.219-0.026,0.063-0.19,0.184-0.397c0.131-0.227,0.105-0.511,0.244-0.469s0.061,0.2-0.033,0.461C9.491,15.121,9.258,15.313,9.178,15.304L9.178,15.304z'",
messageSends: ["path:"],
referencedClasses: []
}),
smalltalk.ROTux);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeContainer:for:with:",
category: 'not yet classified',
fn: function (svgRect,svgPath,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgRect)._attr_value_("width",(30));
_st(svgRect)._attr_value_("height",(33));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:with:",{svgRect:svgRect,svgPath:svgPath,anElement:anElement},smalltalk.ROTux)})},
args: ["svgRect", "svgPath", "anElement"],
source: "resizeContainer: svgRect for: svgPath  with: anElement\x0a\x09svgRect attr: 'width'  value: 30.\x0a\x09svgRect attr: 'height' value: 33.",
messageSends: ["attr:value:"],
referencedClasses: []
}),
smalltalk.ROTux);



smalltalk.addClass('ROBox', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultSize",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (15);
}, function($ctx1) {$ctx1.fill(self,"defaultSize",{},smalltalk.ROBox)})},
args: [],
source: "defaultSize\x0a\x09^ 15",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROBox)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROBox.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=self._defaultSize();
self["@height"]=self._defaultSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROBox)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22 Initialize default values \x22\x0a\x09width := self defaultSize.\x0a\x09height := self defaultSize.\x0a\x09\x0a\x09\x22 create svgElement and hide it\x22\x0a\x09\x0a\x09",
messageSends: ["initialize", "defaultSize"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._rect_y_width_height_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),_st(self._widthFor_(anElement))._max_(self._defaultSize()),_st(self._heightFor_(anElement))._max_(self._defaultSize()));
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement:= canvas \x0a\x09\x09rect: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09width: ((self widthFor: anElement ) max: (self defaultSize)) \x0a\x09\x09height: ((self heightFor: anElement) max: (self defaultSize)) .\x0a\x09\x09",
messageSends: ["rect:y:width:height:", "x", "position", "y", "max:", "defaultSize", "widthFor:", "heightFor:"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("x",_st(_st(anElement)._position())._x());
_st($1)._attr_with_("y",_st(_st(anElement)._position())._y());
_st($1)._attr_with_("width",_st(self._widthFor_(anElement))._max_(self._defaultSize()));
_st($1)._attr_with_("height",_st(self._heightFor_(anElement))._max_(self._defaultSize()));
$2=_st($1)._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x09\x09attr: 'x' with: (anElement position x);\x0a\x09\x09attr: 'y' with: (anElement position y);\x0a\x09\x09attr: 'width' with: ((self widthFor: anElement ) max: (self defaultSize));\x0a\x09\x09attr: 'height' with: ((self heightFor: anElement) max: (self defaultSize));\x0a\x09\x09attr:'fill' with: (color asHTMLRGBA).\x0a\x09\x09",
messageSends: ["attr:with:", "x", "position", "y", "max:", "defaultSize", "widthFor:", "heightFor:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.ROBox);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'initialize',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROBox)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROBox);



smalltalk.addClass('ROCountry', smalltalk.ROShape, ['path'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCountry.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@height"]=(20);
self["@width"]=self["@height"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCountry)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := height := 20.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROCountry);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._path_(self["@path"]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCountry)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas path: path",
messageSends: ["path:"],
referencedClasses: []
}),
smalltalk.ROCountry);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.ROCountry)})},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCountry);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'not yet classified',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("x",_st(_st(anElement)._position())._x());
_st($1)._attr_with_("y",_st(_st(anElement)._position())._y());
$2=_st($1)._attr_with_("fill",self._rgbColor());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCountry)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x09\x09attr: 'x' with: (anElement position x);\x0a\x09\x09attr: 'y' with: (anElement position y);\x0a\x22\x09\x09attr: 'width' with: ((self widthFor: anElement ) max: (self defaultSize));\x0a\x09\x09attr: 'height' with: ((self heightFor: anElement) max: (self defaultSize));\x22\x0a\x09\x09attr:'fill' with: (self rgbColor).\x0a\x09\x09",
messageSends: ["attr:with:", "x", "position", "y", "rgbColor"],
referencedClasses: []
}),
smalltalk.ROCountry);


smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._path_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.ROCountry.klass)})},
args: ["aString"],
source: "path: aString\x0a\x09^ self new path: aString.",
messageSends: ["path:", "new"],
referencedClasses: []
}),
smalltalk.ROCountry.klass);


smalltalk.addClass('ROEllipse', smalltalk.ROShape, ['radius', 'borderWidth', 'borderColor'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.ROEllipse)})},
args: [],
source: "borderColor\x0a\x09^ borderColor ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'drawing',
fn: function (aBlockOrSymbolOrObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aBlockOrSymbolOrObject;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aBlockOrSymbolOrObject:aBlockOrSymbolOrObject},smalltalk.ROEllipse)})},
args: ["aBlockOrSymbolOrObject"],
source: "borderColor: aBlockOrSymbolOrObject\x0a\x09borderColor := aBlockOrSymbolOrObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderWidth"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderWidth",{},smalltalk.ROEllipse)})},
args: [],
source: "borderWidth\x0a\x09^ borderWidth ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
category: 'configuration',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{anInteger:anInteger},smalltalk.ROEllipse)})},
args: ["anInteger"],
source: "borderWidth: anInteger\x0a\x09borderWidth := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (8);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROEllipse)})},
args: [],
source: "defaultRadius\x0a\x09^ 8",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._radius()).__star((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROEllipse)})},
args: [],
source: "height\x0a\x09^ self radius * 2.",
messageSends: ["*", "radius"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
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
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09radius := self defaultRadius.\x0a\x09width := self defaultRadius * 1.5.\x0a\x09height := self defaultRadius * 1.5.\x0a\x09borderWidth := 0. \x0a\x09borderColor := Color black.\x0a\x09",
messageSends: ["initialize", "defaultRadius", "*", "black"],
referencedClasses: ["Color"]
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._circle_y_r_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROEllipse)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas \x0a\x09\x09circle: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09r: (self radius) .\x0a\x0a\x09",
messageSends: ["circle:y:r:", "x", "position", "y", "radius"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROEllipse)})},
args: [],
source: "radius\x0a\x09^ radius",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
category: 'drawing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@radius"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"radius:",{anInteger:anInteger},smalltalk.ROEllipse)})},
args: ["anInteger"],
source: "radius: anInteger\x0a\x09radius := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'drawing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._radius_(_st(anInteger).__slash((2)));
return self}, function($ctx1) {$ctx1.fill(self,"size:",{anInteger:anInteger},smalltalk.ROEllipse)})},
args: ["anInteger"],
source: "size: anInteger\x0a\x09self radius: anInteger/2",
messageSends: ["radius:", "/"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
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
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x0a\x09\x09attr: 'cx' with: (anElement position x + (self radius ) );\x0a\x09\x09attr: 'cy' with: (anElement position y + (self radius ) );\x0a\x0a\x09\x09attr: 'r' with: (self radius);\x0a\x09\x09attr:'fill' with: (color asHTMLRGBA);\x0a\x09\x09attr: 'stroke-width' value: (self borderWidth);\x0a\x09\x09attr: 'stroke' value: (self borderColor asHTMLRGBA).",
messageSends: ["attr:with:", "+", "radius", "x", "position", "y", "asHTMLRGBA", "attr:value:", "borderWidth", "borderColor"],
referencedClasses: []
}),
smalltalk.ROEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._radius()).__star((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROEllipse)})},
args: [],
source: "width\x0a\x09^ self radius * 2.",
messageSends: ["*", "radius"],
referencedClasses: []
}),
smalltalk.ROEllipse);



smalltalk.addClass('RONullShape', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'hook',
fn: function (anExtentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=_st(anExtentPoint)._x();
self["@height"]=_st(anExtentPoint)._y();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtentPoint:anExtentPoint},smalltalk.RONullShape)})},
args: ["anExtentPoint"],
source: "extent: anExtentPoint\x0a\x09width := anExtentPoint x.\x0a\x09height := anExtentPoint y.",
messageSends: ["x", "y"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extentFor:",
category: 'hook',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element},smalltalk.RONullShape)})},
args: ["element"],
source: "extentFor: element\x0a\x09^ (width roValue: element) @ (height roValue: element)",
messageSends: ["@", "roValue:"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'hook',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._extent_(self._defaultExtent());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RONullShape)})},
args: [],
source: "initialize\x0a\x09\x09self extent: self defaultExtent.",
messageSends: ["extent:", "defaultExtent"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isShapedAs:",
category: 'hook',
fn: function (aShapeClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isShapedAs:",{aShapeClass:aShapeClass},smalltalk.RONullShape)})},
args: ["aShapeClass"],
source: "isShapedAs: aShapeClass\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeDetect:",
category: 'hook',
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
args: ["aBlock"],
source: "shapeDetect: aBlock\x0a\x09(aBlock value: self) ifTrue: [ ^ self ].\x0a\x09self error: 'Not found'",
messageSends: ["ifTrue:", "value:", "error:"],
referencedClasses: []
}),
smalltalk.RONullShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shapesDetect:",
category: 'hook',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Not found");
return self}, function($ctx1) {$ctx1.fill(self,"shapesDetect:",{aBlock:aBlock},smalltalk.RONullShape)})},
args: ["aBlock"],
source: "shapesDetect: aBlock\x0a\x09self error: 'Not found'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.RONullShape);



smalltalk.addMethod(
smalltalk.method({
selector: "asSortedCollection",
category: '*ARoassal',
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
args: [],
source: "asSortedCollection\x0a        ^self class new\x0a                addAll: self asArray sorted;\x0a                yourself",
messageSends: ["addAll:", "sorted", "asArray", "new", "class", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "asSortedCollection:",
category: '*ARoassal',
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
args: ["aBlock"],
source: "asSortedCollection: aBlock\x0a        ^self class new\x0a                addAll: (self asArray sorted: aBlock);\x0a                yourself",
messageSends: ["addAll:", "sorted:", "asArray", "new", "class", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:thenSelect:",
category: '*ARoassal',
fn: function (collectBlock,selectBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._collect_(collectBlock))._select_(selectBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:thenSelect:",{collectBlock:collectBlock,selectBlock:selectBlock},smalltalk.Collection)})},
args: ["collectBlock", "selectBlock"],
source: "collect: collectBlock thenSelect: selectBlock\x0a\x09\x22Utility method to improve readability.\x22\x0a\x0a\x09^ (self collect: collectBlock) select: selectBlock",
messageSends: ["select:", "collect:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "anyOne",
category: '*ARoassal',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"anyOne",{},smalltalk.SequenceableCollection)})},
args: [],
source: "anyOne\x0a\x09^ self first",
messageSends: ["first"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "raisedTo:",
category: '*ARoassal',
fn: function (exponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.pow( self , exponent ) ;
return self}, function($ctx1) {$ctx1.fill(self,"raisedTo:",{exponent:exponent},smalltalk.Number)})},
args: ["exponent"],
source: "raisedTo: exponent\x0a< return Math.pow( self , exponent ) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "roValue:",
category: '*ARoassal',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{aBlock:aBlock},smalltalk.Number)});},
args: ["aBlock"],
source: "roValue: aBlock\x0a\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

