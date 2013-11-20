smalltalk.addPackage('Roassal-Amber-Extensions');
smalltalk.addClass('AmberExtention', smalltalk.Object, [], 'Roassal-Amber-Extensions');


smalltalk.addClass('Color', smalltalk.Object, ['r', 'g', 'b', 'a'], 'Roassal-Amber-Extensions');
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
source: "asHTMLRGB\x0a\x0a\x09^ 'rgb(',(r*255  asString),',',(g*255 asString),',',(b*255 asString),')'.",
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
source: "asHTMLRGBA\x0a\x0a\x09^ 'rgba(',(r*255  asString),',',(g*255 asString),',',(b*255 asString),',',(a asString),')'.",
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
source: "blue\x0a\x09^ b",
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
source: "r: rVal g: gVal b: bVal\x0a\x09\x22 values are from 0.0 .. 1.0 \x22\x0a\x09self setRed: rVal green: gVal blue: bVal alpha: 1.0",
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
source: "r: rVal g: gVal b: bVal a: aVal\x0a\x09\x22 values are from 0.0 .. 1.0 \x22\x0a\x09self setRed: rVal green: gVal blue: bVal alpha: aVal",
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
source: "setRed: rVal green: gVal blue: bVal alpha: aVal\x0a\x09\x22Initialize this color's r, g, and b components to the given values in the range [0.0..1.0]. \x22\x0a\x09r :=  self cleanValue: rVal.\x0a\x09g :=  self cleanValue: gVal.\x0a\x09b:=  self cleanValue: bVal. \x0a\x09a:=  self cleanValue: aVal.",
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
source: "gray\x0a\x09^ self new r: 0.5 g: 0.5  b: 0.5",
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
source: "lightGray\x0a\x09^ self new r: 0.827 g: 0.827  b: 0.827",
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


smalltalk.addClass('IdentityDictionary', smalltalk.Dictionary, [], 'Roassal-Amber-Extensions');


smalltalk.addClass('IdentitySet', smalltalk.Set, [], 'Roassal-Amber-Extensions');


smalltalk.addClass('Rectangle', smalltalk.Object, ['origin', 'corner'], 'Roassal-Amber-Extensions');
smalltalk.Rectangle.comment="I represent a rectangular area of the screen. Arithmetic functions take points as arguments and carry out scaling and translating operations to create new instances of me. Rectangle functions create new instances by determining intersections of rectangles with rectangles.\x0a\x0aNote 1: only rectangles parallel to reference frame (Screen) can be represented by this class.\x0a\x0aNote 2: the Rectangle is represented by two extremities of one diagonal. By convention, it must be the diagonal:\x0a\x09from rectangle origin (the point having smallest coordinates in reference frame),\x0a\x09to rectangle corner (the point having largest coordinates in reference frame).\x0a\x0aNote 3: Screen coordinates conventions are:\x0a\x09x is horizontal axis, zero at left border, oriented toward right;\x0a\x09y is vertical axis, zero at top border, oriented toward bottom.\x0aThis corresponds to the latin convention for writing text from left to right and top to bottom.\x0a\x0aNote 4: the Rectangle extent is obtained by subtracting rectangle origin to rectangle corner coordinates.\x0aIf this leads to a negative width (extent x coordinate) and/or a negative height (extent y coordinate), then the Rectangle is degenerated and considered empty.\x0a\x0aInstance variables:\x0a\x09origin\x09<Point> the coordinates of corner having smallest coordinates (top left in Screen coordinates)\x0a\x09corner\x09<Point> the coordinates of corner having largest coordinates (bottom right in Screen coordinates)";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._species()).__eq(_st(aRectangle)._species());
if(smalltalk.assert($1)){
$2=_st(_st(self["@origin"]).__eq(_st(aRectangle)._origin()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@corner"]).__eq(_st(aRectangle)._corner());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
} else {
return false;
};
return self}, function($ctx1) {$ctx1.fill(self,"=",{aRectangle:aRectangle},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "= aRectangle \x0a\x09\x22Answer true if the receiver's species, origin and corner match aRectangle's.\x22\x0a\x0a\x09self species = aRectangle species\x0a\x09\x09ifTrue: [^origin = aRectangle origin and: [corner = aRectangle corner]]\x0a\x09\x09ifFalse: [^false]",
messageSends: ["ifTrue:ifFalse:", "and:", "=", "corner", "origin", "species"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "aboveCenter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._topLeft()).__plus(self._bottomRight())).__slash_slash((2).__at((3)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"aboveCenter",{},smalltalk.Rectangle)})},
args: [],
source: "aboveCenter\x0a\x09\x22Answer the point slightly above the center of the receiver.\x22\x0a\x0a\x09^self topLeft + self bottomRight // (2@3)",
messageSends: ["//", "@", "+", "bottomRight", "topLeft"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "adjustTo:along:",
category: 'rectangle functions',
fn: function (newRect,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(side).__eq("left");
if(smalltalk.assert($1)){
$2=self._withRight_(_st(newRect)._left());
return $2;
};
$3=_st(side).__eq("right");
if(smalltalk.assert($3)){
$4=self._withLeft_(_st(newRect)._right());
return $4;
};
$5=_st(side).__eq("top");
if(smalltalk.assert($5)){
$6=self._withBottom_(_st(newRect)._top());
return $6;
};
$7=_st(side).__eq("bottom");
if(smalltalk.assert($7)){
$8=self._withTop_(_st(newRect)._bottom());
return $8;
};
return self}, function($ctx1) {$ctx1.fill(self,"adjustTo:along:",{newRect:newRect,side:side},smalltalk.Rectangle)})},
args: ["newRect", "side"],
source: "adjustTo: newRect along: side \x0a\x09\x22Return a copy adjusted to fit a neighbor that has changed size.\x22\x0a\x09side = #left ifTrue: [^ self withRight: newRect left].\x0a\x09side = #right ifTrue: [^ self withLeft: newRect right].\x0a\x09side = #top ifTrue: [^ self withBottom: newRect top].\x0a\x09side = #bottom ifTrue: [^ self withTop: newRect bottom].",
messageSends: ["ifTrue:", "withRight:", "left", "=", "withLeft:", "right", "withBottom:", "top", "withTop:", "bottom"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "align:with:",
category: 'transforming',
fn: function (aPoint1,aPoint2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateBy_(_st(aPoint2).__minus(aPoint1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"align:with:",{aPoint1:aPoint1,aPoint2:aPoint2},smalltalk.Rectangle)})},
args: ["aPoint1", "aPoint2"],
source: "align: aPoint1 with: aPoint2 \x0a\x09\x22Answer a Rectangle that is a translated by aPoint2 - aPoint1.\x22\x0a\x0a\x09^self translateBy: aPoint2 - aPoint1",
messageSends: ["translateBy:", "-"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "allAreasOutsideList:do:",
category: 'rectangle functions',
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._allAreasOutsideList_startingAt_do_(aCollection,(1),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"allAreasOutsideList:do:",{aCollection:aCollection,aBlock:aBlock},smalltalk.Rectangle)})},
args: ["aCollection", "aBlock"],
source: "allAreasOutsideList: aCollection do: aBlock\x0a\x09\x22Enumerate aBlock with all areas of the receiver not overlapping \x0a\x09any rectangle in the given collection\x22\x0a\x09^self allAreasOutsideList: aCollection startingAt: 1 do: aBlock",
messageSends: ["allAreasOutsideList:startingAt:do:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "allAreasOutsideList:startingAt:do:",
category: 'rectangle functions',
fn: function (aCollection,startIndex,aBlock){
var self=this;
var yOrigin,yCorner,aRectangle,index,rr;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
var $early={};
try {
index=startIndex;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(index).__lt_eq(_st(aCollection)._size());
if(! smalltalk.assert($1)){
$2=_st(aBlock)._value_(self);
throw $early=[$2];
};
aRectangle=_st(aCollection)._at_(index);
aRectangle;
return _st(_st(self["@origin"]).__lt_eq(_st(aRectangle)._corner()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(aRectangle)._origin()).__lt_eq(self["@corner"]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
index=_st(index).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(_st(_st(aRectangle)._origin())._y()).__gt(_st(self["@origin"])._y());
if(smalltalk.assert($3)){
yOrigin=_st(_st(aRectangle)._origin())._y();
rr=_st(self["@origin"])._corner_(_st(_st(self["@corner"])._x()).__at(yOrigin));
rr;
_st(rr)._allAreasOutsideList_startingAt_do_(aCollection,_st(index).__plus((1)),aBlock);
} else {
yOrigin=_st(self["@origin"])._y();
yOrigin;
};
$4=_st(_st(_st(aRectangle)._corner())._y()).__lt(_st(self["@corner"])._y());
if(smalltalk.assert($4)){
yCorner=_st(_st(aRectangle)._corner())._y();
rr=_st(_st(_st(self["@origin"])._x()).__at(yCorner))._corner_(self["@corner"]);
rr;
_st(rr)._allAreasOutsideList_startingAt_do_(aCollection,_st(index).__plus((1)),aBlock);
} else {
yCorner=_st(self["@corner"])._y();
yCorner;
};
$5=_st(_st(_st(aRectangle)._origin())._x()).__gt(_st(self["@origin"])._x());
if(smalltalk.assert($5)){
rr=_st(_st(_st(self["@origin"])._x()).__at(yOrigin))._corner_(_st(_st(_st(aRectangle)._origin())._x()).__at(yCorner));
rr;
_st(rr)._allAreasOutsideList_startingAt_do_(aCollection,_st(index).__plus((1)),aBlock);
};
$6=_st(_st(_st(aRectangle)._corner())._x()).__lt(_st(self["@corner"])._x());
if(smalltalk.assert($6)){
rr=_st(_st(_st(_st(aRectangle)._corner())._x()).__at(yOrigin))._corner_(_st(_st(self["@corner"])._x()).__at(yCorner));
rr;
_st(rr)._allAreasOutsideList_startingAt_do_(aCollection,_st(index).__plus((1)),aBlock);
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"allAreasOutsideList:startingAt:do:",{aCollection:aCollection,startIndex:startIndex,aBlock:aBlock,yOrigin:yOrigin,yCorner:yCorner,aRectangle:aRectangle,index:index,rr:rr},smalltalk.Rectangle)})},
args: ["aCollection", "startIndex", "aBlock"],
source: "allAreasOutsideList: aCollection startingAt: startIndex do: aBlock \x0a\x09\x22Enumerate aBlock with all areas of the receiver not overlapping \x0a\x09any rectangle in the given collection\x22\x0a\x09| yOrigin yCorner aRectangle index rr |\x0a\x09index := startIndex.\x0a\x0a\x09\x22Find the next intersecting rectangle from aCollection\x22\x0a\x09\x0a\x09[ index <= aCollection size ifFalse: [ ^ aBlock value: self ].\x0a\x09aRectangle := aCollection at: index.\x0a\x09origin <= aRectangle corner and: [ aRectangle origin <= corner ] ] whileFalse: [ index := index + 1 ].\x0a\x0a\x09\x22aRectangle is intersecting; process it\x22\x0a\x09aRectangle origin y > origin y \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ rr := origin corner: corner x @ (yOrigin := aRectangle origin y).\x0a\x09\x09\x09rr \x0a\x09\x09\x09\x09allAreasOutsideList: aCollection\x0a\x09\x09\x09\x09startingAt: index + 1\x0a\x09\x09\x09\x09do: aBlock ]\x0a\x09\x09ifFalse: [ yOrigin := origin y ].\x0a\x09aRectangle corner y < corner y \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ rr := origin x @ (yCorner := aRectangle corner y) corner: corner.\x0a\x09\x09\x09rr \x0a\x09\x09\x09\x09allAreasOutsideList: aCollection\x0a\x09\x09\x09\x09startingAt: index + 1\x0a\x09\x09\x09\x09do: aBlock ]\x0a\x09\x09ifFalse: [ yCorner := corner y ].\x0a\x09aRectangle origin x > origin x ifTrue: \x0a\x09\x09[ rr := origin x @ yOrigin corner: aRectangle origin x @ yCorner.\x0a\x09\x09rr \x0a\x09\x09\x09allAreasOutsideList: aCollection\x0a\x09\x09\x09startingAt: index + 1\x0a\x09\x09\x09do: aBlock ].\x0a\x09aRectangle corner x < corner x ifTrue: \x0a\x09\x09[ rr := aRectangle corner x @ yOrigin corner: corner x @ yCorner.\x0a\x09\x09rr \x0a\x09\x09\x09allAreasOutsideList: aCollection\x0a\x09\x09\x09startingAt: index + 1\x0a\x09\x09\x09do: aBlock ]",
messageSends: ["whileFalse:", "+", "ifFalse:", "value:", "<=", "size", "at:", "and:", "origin", "corner", "ifTrue:ifFalse:", "corner:", "@", "y", "x", "allAreasOutsideList:startingAt:do:", ">", "<", "ifTrue:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "amountToTranslateWithin:",
category: 'rectangle functions',
fn: function (aRectangle){
var self=this;
var dx,dy;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
dx=(0);
dy=(0);
$1=_st(self._right()).__gt(_st(aRectangle)._right());
if(smalltalk.assert($1)){
dx=_st(_st(aRectangle)._right()).__minus(self._right());
dx;
};
$2=_st(self._bottom()).__gt(_st(aRectangle)._bottom());
if(smalltalk.assert($2)){
dy=_st(_st(aRectangle)._bottom()).__minus(self._bottom());
dy;
};
$3=_st(_st(self._left()).__plus(dx)).__lt(_st(aRectangle)._left());
if(smalltalk.assert($3)){
dx=_st(_st(aRectangle)._left()).__minus(self._left());
dx;
};
$4=_st(_st(self._top()).__plus(dy)).__lt(_st(aRectangle)._top());
if(smalltalk.assert($4)){
dy=_st(_st(aRectangle)._top()).__minus(self._top());
dy;
};
$5=_st(dx).__at(dy);
return $5;
}, function($ctx1) {$ctx1.fill(self,"amountToTranslateWithin:",{aRectangle:aRectangle,dx:dx,dy:dy},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "amountToTranslateWithin: aRectangle \x0a\x09\x22Answer a Point, delta, such that self + delta is forced within aRectangle.\x0a\x09Keep self topLeft inside when all of self cannot be made to fit\x22\x0a\x09| dx dy |\x0a\x09dx := 0.\x0a\x09dy := 0.\x0a\x09self right > aRectangle right ifTrue: [ dx := aRectangle right - self right ].\x0a\x09self bottom > aRectangle bottom ifTrue: [ dy := aRectangle bottom - self bottom ].\x0a\x09self left + dx < aRectangle left ifTrue: [ dx := aRectangle left - self left ].\x0a\x09self top + dy < aRectangle top ifTrue: [ dy := aRectangle top - self top ].\x0a\x09^ dx @ dy",
messageSends: ["ifTrue:", "-", "right", ">", "bottom", "left", "<", "+", "top", "@"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "area",
category: 'accessing',
fn: function (){
var self=this;
var w;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
w=self._width();
$1=_st(w).__lt_eq((0));
if(smalltalk.assert($1)){
return (0);
};
$2=_st(_st(w).__star(self._height()))._max_((0));
return $2;
}, function($ctx1) {$ctx1.fill(self,"area",{w:w},smalltalk.Rectangle)})},
args: [],
source: "area\x0a\x09\x22Answer the receiver's area, the product of width and height.\x22\x0a\x09| w |\x0a\x09(w := self width) <= 0 ifTrue: [ ^ 0 ].\x0a\x09^ w * self height max: 0",
messageSends: ["ifTrue:", "<=", "width", "max:", "*", "height"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "areasOutside:",
category: 'rectangle functions',
fn: function (aRectangle){
var self=this;
var areas,yOrigin,yCorner;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=self._intersects_(aRectangle);
if(! smalltalk.assert($1)){
$2=_st($Array())._with_(self);
return $2;
};
areas=_st($OrderedCollection())._new();
$3=_st(_st(_st(aRectangle)._origin())._y()).__gt(_st(self["@origin"])._y());
if(smalltalk.assert($3)){
yOrigin=_st(_st(aRectangle)._origin())._y();
_st(areas)._addLast_(_st(self["@origin"])._corner_(_st(_st(self["@corner"])._x()).__at(yOrigin)));
} else {
yOrigin=_st(self["@origin"])._y();
yOrigin;
};
$4=_st(_st(_st(aRectangle)._corner())._y()).__lt(_st(self["@corner"])._y());
if(smalltalk.assert($4)){
yCorner=_st(_st(aRectangle)._corner())._y();
_st(areas)._addLast_(_st(_st(_st(self["@origin"])._x()).__at(yCorner))._corner_(self["@corner"]));
} else {
yCorner=_st(self["@corner"])._y();
yCorner;
};
$5=_st(_st(_st(aRectangle)._origin())._x()).__gt(_st(self["@origin"])._x());
if(smalltalk.assert($5)){
_st(areas)._addLast_(_st(_st(_st(self["@origin"])._x()).__at(yOrigin))._corner_(_st(_st(_st(aRectangle)._origin())._x()).__at(yCorner)));
};
$6=_st(_st(_st(aRectangle)._corner())._x()).__lt(_st(self["@corner"])._x());
if(smalltalk.assert($6)){
_st(areas)._addLast_(_st(_st(_st(_st(aRectangle)._corner())._x()).__at(yOrigin))._corner_(_st(_st(self["@corner"])._x()).__at(yCorner)));
};
$7=areas;
return $7;
}, function($ctx1) {$ctx1.fill(self,"areasOutside:",{aRectangle:aRectangle,areas:areas,yOrigin:yOrigin,yCorner:yCorner},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "areasOutside: aRectangle \x0a\x09\x22Answer an Array of Rectangles comprising the parts of the receiver not \x0a\x09intersecting aRectangle.\x22\x0a\x09\x22Make sure the intersection is non-empty\x22\x0a\x09| areas yOrigin yCorner |\x0a\x09(self intersects: aRectangle) ifFalse: [ ^ Array with: self ].\x0a\x09areas := OrderedCollection new.\x0a\x09aRectangle origin y > origin y \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ areas addLast: (origin corner: corner x @ (yOrigin := aRectangle origin y)) ]\x0a\x09\x09ifFalse: [ yOrigin := origin y ].\x0a\x09aRectangle corner y < corner y \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ areas addLast: (origin x @ (yCorner := aRectangle corner y) corner: corner) ]\x0a\x09\x09ifFalse: [ yCorner := corner y ].\x0a\x09aRectangle origin x > origin x ifTrue: \x0a\x09\x09[ areas addLast: (origin x @ yOrigin corner: aRectangle origin x @ yCorner) ].\x0a\x09aRectangle corner x < corner x ifTrue: \x0a\x09\x09[ areas addLast: (aRectangle corner x @ yOrigin corner: corner x @ yCorner) ].\x0a\x09^ areas",
messageSends: ["ifFalse:", "with:", "intersects:", "new", "ifTrue:ifFalse:", "addLast:", "corner:", "@", "y", "origin", "x", ">", "corner", "<", "ifTrue:"],
referencedClasses: ["Array", "OrderedCollection"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bordersOn:along:",
category: 'rectangle functions',
fn: function (her,herSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(_st(herSide).__eq("right"))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._left()).__eq(_st(her)._right());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__or(_st(_st(herSide).__eq("left"))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._right()).__eq(_st(her)._left());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
if(smalltalk.assert($1)){
$2=_st(_st(self._top())._max_(_st(her)._top())).__lt(_st(self._bottom())._min_(_st(her)._bottom()));
return $2;
};
$3=_st(_st(_st(herSide).__eq("bottom"))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._top()).__eq(_st(her)._bottom());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))).__or(_st(_st(herSide).__eq("top"))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._bottom()).__eq(_st(her)._top());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})));
if(smalltalk.assert($3)){
$4=_st(_st(self._left())._max_(_st(her)._left())).__lt(_st(self._right())._min_(_st(her)._right()));
return $4;
};
return false;
}, function($ctx1) {$ctx1.fill(self,"bordersOn:along:",{her:her,herSide:herSide},smalltalk.Rectangle)})},
args: ["her", "herSide"],
source: "bordersOn: her along: herSide \x0a\x09(herSide = #right and: [self left = her right])\x0a\x09| (herSide = #left and: [self right = her left])\x0a\x09\x09ifTrue:\x0a\x09\x09[^ (self top max: her top) < (self bottom min: her bottom)].\x0a\x09(herSide = #bottom and: [self top = her bottom])\x0a\x09| (herSide = #top and: [self bottom = her top])\x0a\x09\x09ifTrue:\x0a\x09\x09[^ (self left max: her left) < (self right min: her right)].\x0a\x09^ false",
messageSends: ["ifTrue:", "<", "min:", "bottom", "max:", "top", "|", "and:", "=", "left", "right"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
args: [],
source: "bottom\x0a\x09\x22Answer the position of the receiver's bottom horizontal line.\x22\x0a\x0a\x09^corner y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(_st(self["@corner"])._x()).__at(aNumber));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom:",{aNumber:aNumber},smalltalk.Rectangle)})},
args: ["aNumber"],
source: "bottom: aNumber\x0a\x09^origin corner: corner x @ aNumber",
messageSends: ["corner:", "@", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomCenter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._center())._x()).__at(self._bottom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomCenter",{},smalltalk.Rectangle)})},
args: [],
source: "bottomCenter\x0a\x09\x22Answer the point at the center of the bottom horizontal line of the \x0a\x09receiver.\x22\x0a\x0a\x09^self center x @ self bottom",
messageSends: ["@", "bottom", "x", "center"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomLeft",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._x()).__at(_st(self["@corner"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomLeft",{},smalltalk.Rectangle)})},
args: [],
source: "bottomLeft\x0a\x09\x22Answer the point at the left edge of the bottom horizontal line of the \x0a\x09receiver.\x22\x0a\x0a\x09^origin x @ corner y",
messageSends: ["@", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomRight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomRight",{},smalltalk.Rectangle)})},
args: [],
source: "bottomRight\x0a\x09\x22Answer the point at the right edge of the bottom horizontal line of the \x0a\x09receiver.\x22\x0a\x0a\x09^corner",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "boundingBox",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"boundingBox",{},smalltalk.Rectangle)})},
args: [],
source: "boundingBox\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "ceiling",
category: 'truncation and roundoff',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isIntegerRectangle();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self["@origin"])._ceiling())._corner_(_st(self["@corner"])._ceiling());
return $3;
}, function($ctx1) {$ctx1.fill(self,"ceiling",{},smalltalk.Rectangle)})},
args: [],
source: "ceiling\x0a\x09\x22Answer the integer rectange to the bottom right of receiver.\x0a\x09Return reciever if it already and integerRectange.\x22\x0a\x0a\x09self isIntegerRectangle ifTrue: [ ^ self ].\x0a\x09^origin ceiling corner: corner ceiling",
messageSends: ["ifTrue:", "isIntegerRectangle", "corner:", "ceiling"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._topLeft()).__plus(self._bottomRight())).__slash_slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.Rectangle)})},
args: [],
source: "center\x0a\x09\x22Answer the point at the center of the receiver.\x22\x0a\x0a\x09^self topLeft + self bottomRight // 2",
messageSends: ["//", "+", "bottomRight", "topLeft"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "centeredBeneath:",
category: 'transforming',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._align_with_(self._topCenter(),_st(aRectangle)._bottomCenter());
return $1;
}, function($ctx1) {$ctx1.fill(self,"centeredBeneath:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "centeredBeneath: aRectangle\x0a\x09 \x22Move the reciever so that its top center point coincides with the bottom center point of aRectangle.\x22\x0a\x0a\x09^ self align: self topCenter with: aRectangle bottomCenter",
messageSends: ["align:with:", "topCenter", "bottomCenter"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "compressTo:",
category: 'truncation and roundoff',
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._roundUpTo_(grid),_st(self["@corner"])._roundDownTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compressTo:",{grid:grid},smalltalk.Rectangle)})},
args: ["grid"],
source: "compressTo: grid\x0a\x09\x22Answer a Rectangle whose origin and corner are rounded to grid x and grid y.\x0a\x09Rounding is done by upper value on origin and lower value on corner so that\x0a\x09rounded rectangle is inside self.\x22\x0a\x0a\x09^Rectangle origin: (origin roundUpTo: grid)\x0a\x09\x09\x09\x09corner: (corner roundDownTo: grid)",
messageSends: ["origin:corner:", "roundUpTo:", "roundDownTo:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "compressed",
category: 'truncation and roundoff',
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._ceiling(),_st(self["@corner"])._floor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"compressed",{},smalltalk.Rectangle)})},
args: [],
source: "compressed\x0a\x09\x22Answer a Rectangle whose origin and corner are rounded to integers.\x0a\x09Rounding is done by upper value on origin and lower value on corner so that\x0a\x09rounded rectangle is inside self.\x22\x0a\x0a\x09^Rectangle origin: origin ceiling corner: corner floor",
messageSends: ["origin:corner:", "ceiling", "floor"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "containsPoint:",
category: 'testing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"]).__lt_eq(aPoint))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aPoint).__lt(self["@corner"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"containsPoint:",{aPoint:aPoint},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "containsPoint: aPoint \x0a\x09\x22Answer whether aPoint is within the receiver.\x22\x0a\x0a\x09^origin <= aPoint and: [aPoint < corner]",
messageSends: ["and:", "<", "<="],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "containsRect:",
category: 'testing',
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aRect)._origin()).__gt_eq(self["@origin"]))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aRect)._corner()).__lt_eq(self["@corner"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"containsRect:",{aRect:aRect},smalltalk.Rectangle)})},
args: ["aRect"],
source: "containsRect: aRect\x0a\x09\x22Answer whether aRect is within the receiver (OK to coincide).\x22\x0a\x0a\x09^ aRect origin >= origin and: [aRect corner <= corner]",
messageSends: ["and:", "<=", "corner", ">=", "origin"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner",{},smalltalk.Rectangle)})},
args: [],
source: "corner\x0a\x09\x22Answer the point at the bottom right corner of the receiver.\x22\x0a\x0a\x09^corner",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corners",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_with_with_with_(self._topLeft(),self._bottomLeft(),self._bottomRight(),self._topRight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"corners",{},smalltalk.Rectangle)})},
args: [],
source: "corners\x0a\x09\x22Return an array of corner points in the order of a quadrilateral spec for WarpBlt.\x22\x0a\x0a\x09^ Array\x0a\x09\x09with: self topLeft\x0a\x09\x09with: self bottomLeft\x0a\x09\x09with: self bottomRight\x0a\x09\x09with: self topRight",
messageSends: ["with:with:with:with:", "topLeft", "bottomLeft", "bottomRight", "topRight"],
referencedClasses: ["Array"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "deltaToEnsureInOrCentered:extra:",
category: 'fmp',
fn: function (r,aNumber){
var self=this;
var dX,dY,halfXDiff,halfYDiff;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
dY=(0);
dX=dY;
halfXDiff=_st(_st(_st(_st(r)._width()).__minus(self._width())).__star(aNumber))._truncated();
halfYDiff=_st(_st(_st(_st(r)._height()).__minus(self._height())).__star(aNumber))._truncated();
$1=_st(self._left()).__lt(_st(r)._left());
if(smalltalk.assert($1)){
dX=_st(_st(self._left()).__minus(_st(r)._left())).__minus(halfXDiff);
dX;
} else {
$2=_st(self._right()).__gt(_st(r)._right());
if(smalltalk.assert($2)){
dX=_st(_st(self._right()).__minus(_st(r)._right())).__plus(halfXDiff);
dX;
};
};
$3=_st(self._top()).__lt(_st(r)._top());
if(smalltalk.assert($3)){
dY=_st(_st(self._top()).__minus(_st(r)._top())).__minus(halfYDiff);
dY;
} else {
$4=_st(self._bottom()).__gt(_st(r)._bottom());
if(smalltalk.assert($4)){
dY=_st(_st(self._bottom()).__minus(_st(r)._bottom())).__plus(halfYDiff);
dY;
};
};
$5=_st(dX).__at(dY);
return $5;
}, function($ctx1) {$ctx1.fill(self,"deltaToEnsureInOrCentered:extra:",{r:r,aNumber:aNumber,dX:dX,dY:dY,halfXDiff:halfXDiff,halfYDiff:halfYDiff},smalltalk.Rectangle)})},
args: ["r", "aNumber"],
source: "deltaToEnsureInOrCentered: r extra: aNumber \x0a\x09| dX dY halfXDiff halfYDiff |\x0a\x09dX := dY := 0.\x0a\x09halfXDiff := ((r width - self width) * aNumber) truncated.\x0a\x09halfYDiff := ((r height - self height) * aNumber) truncated.\x0a\x09self left < r left \x0a\x09\x09ifTrue: [ dX := self left - r left - halfXDiff ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ self right > r right ifTrue: [ dX := self right - r right + halfXDiff ] ].\x0a\x09self top < r top \x0a\x09\x09ifTrue: [ dY := self top - r top - halfYDiff ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ self bottom > r bottom ifTrue: [ dY := self bottom - r bottom + halfYDiff ] ].\x0a\x09^ dX @ dY",
messageSends: ["truncated", "*", "-", "width", "height", "ifTrue:ifFalse:", "left", "ifTrue:", "+", "right", ">", "<", "top", "bottom", "@"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "encompass:",
category: 'rectangle functions',
fn: function (aPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._min_(aPoint),_st(self["@corner"])._max_(aPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompass:",{aPoint:aPoint},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "encompass: aPoint \x0a\x09\x22Answer a Rectangle that contains both the receiver and aPoint.\x22\x0a\x0a\x09^ Rectangle \x0a\x09\x09origin: (origin min: aPoint)\x0a\x09\x09corner: (corner max:  aPoint)",
messageSends: ["origin:corner:", "min:", "max:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "expandBy:",
category: 'rectangle functions',
fn: function (delta){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(delta)._isRectangle();
if(smalltalk.assert($1)){
$2=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__minus(_st(delta)._origin()),_st(self["@corner"]).__plus(_st(delta)._corner()));
return $2;
} else {
$3=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__minus(delta),_st(self["@corner"]).__plus(delta));
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"expandBy:",{delta:delta},smalltalk.Rectangle)})},
args: ["delta"],
source: "expandBy: delta \x0a\x09\x22Answer a Rectangle that is outset from the receiver by delta. delta is a \x0a\x09Rectangle, Point, or scalar.\x22\x0a\x0a\x09(delta isRectangle)\x0a\x09\x09ifTrue: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin - delta origin \x0a\x09\x09\x09\x09\x09corner: corner + delta corner]\x0a\x09\x09ifFalse: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin - delta \x0a\x09\x09\x09\x09\x09corner: corner + delta]",
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "-", "origin", "+", "corner", "isRectangle"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "expandTo:",
category: 'truncation and roundoff',
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._roundDownTo_(grid),_st(self["@corner"])._roundUpTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"expandTo:",{grid:grid},smalltalk.Rectangle)})},
args: ["grid"],
source: "expandTo: grid\x0a\x09\x22Answer a Rectangle whose origin and corner are rounded to grid x and grid y.\x0a\x09Rounding is done by upper value on origin and lower value on corner so that\x0a\x09self is inside rounded rectangle.\x22\x0a\x0a\x09^Rectangle origin: (origin roundDownTo: grid)\x0a\x09\x09\x09\x09corner: (corner roundUpTo: grid)",
messageSends: ["origin:corner:", "roundDownTo:", "roundUpTo:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "expanded",
category: 'truncation and roundoff',
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._floor(),_st(self["@corner"])._ceiling());
return $1;
}, function($ctx1) {$ctx1.fill(self,"expanded",{},smalltalk.Rectangle)})},
args: [],
source: "expanded\x0a\x09\x22Answer a Rectangle whose origin and corner are rounded to integers.\x0a\x09Rounding is done by upper value on origin and lower value on corner so that\x0a\x09self is inside rounded rectangle.\x22\x0a\x0a\x09^Rectangle origin: origin floor corner: corner ceiling",
messageSends: ["origin:corner:", "floor", "ceiling"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "extendBy:",
category: 'rectangle functions',
fn: function (delta){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(delta)._isRectangle();
if(smalltalk.assert($1)){
$2=_st($Rectangle())._origin_corner_(self["@origin"],_st(self["@corner"]).__plus(_st(delta)._corner()));
return $2;
} else {
$3=_st($Rectangle())._origin_corner_(self["@origin"],_st(self["@corner"]).__plus(delta));
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"extendBy:",{delta:delta},smalltalk.Rectangle)})},
args: ["delta"],
source: "extendBy: delta \x0a\x09\x22Answer a Rectangle with the same origin as the receiver, but whose corner is offset by delta. delta is a \x0a\x09Rectangle, Point, or scalar.\x22\x0a\x0a\x09(delta isRectangle)\x0a\x09\x09ifTrue: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin\x0a\x09\x09\x09\x09\x09corner: corner + delta corner]\x0a\x09\x09ifFalse: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin\x0a\x09\x09\x09\x09\x09corner: corner + delta]",
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "+", "corner", "isRectangle"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"]).__minus(self["@origin"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.Rectangle)})},
args: [],
source: "extent\x0a\x09\x22Answer a point with the receiver's width @ the receiver's height.\x22\x0a\x0a\x09^corner - origin",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "flipBy:centerAt:",
category: 'transforming',
fn: function (direction,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._flipBy_centerAt_(direction,aPoint))._rect_(_st(self["@corner"])._flipBy_centerAt_(direction,aPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"flipBy:centerAt:",{direction:direction,aPoint:aPoint},smalltalk.Rectangle)})},
args: ["direction", "aPoint"],
source: "flipBy: direction centerAt: aPoint \x0a\x09\x22Return a copy flipped #vertical or #horizontal, about aPoint.\x22\x0a\x09^ (origin flipBy: direction centerAt: aPoint)\x0a\x09\x09rect: (corner flipBy: direction centerAt: aPoint)",
messageSends: ["rect:", "flipBy:centerAt:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "floor",
category: 'truncation and roundoff',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._isIntegerRectangle();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(_st(self["@origin"])._floor())._corner_(_st(self["@corner"])._floor());
return $3;
}, function($ctx1) {$ctx1.fill(self,"floor",{},smalltalk.Rectangle)})},
args: [],
source: "floor\x0a\x22Answer the integer rectange to the topleft of receiver.\x0aReturn reciever if it already and integerRectange.\x22\x0a\x0aself isIntegerRectangle ifTrue: [ ^ self ] .\x0a\x0a^origin floor corner: corner floor",
messageSends: ["ifTrue:", "isIntegerRectangle", "corner:", "floor"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "forPoint:closestSideDistLen:",
category: 'rectangle functions',
fn: function (aPoint,sideDistLenBlock){
var self=this;
var side;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$6,$2,$8,$10,$11,$12,$14,$13,$9,$15,$17,$18,$19,$21,$20,$16,$22,$24,$25,$26,$28,$27,$23;
side=self._sideNearestTo_(aPoint);
$1=_st(side).__eq_eq("right");
if(smalltalk.assert($1)){
$3=sideDistLenBlock;
$4=side;
$5=_st(_st(self._right()).__minus(_st(aPoint)._x()))._abs();
$7=_st(_st(aPoint)._y())._between_and_(self._top(),self._bottom());
if(smalltalk.assert($7)){
$6=self._height();
} else {
$6=(0);
};
$2=_st($3)._value_value_value_($4,$5,$6);
return $2;
};
$8=_st(side).__eq_eq("left");
if(smalltalk.assert($8)){
$10=sideDistLenBlock;
$11=side;
$12=_st(_st(self._left()).__minus(_st(aPoint)._x()))._abs();
$14=_st(_st(aPoint)._y())._between_and_(self._top(),self._bottom());
if(smalltalk.assert($14)){
$13=self._height();
} else {
$13=(0);
};
$9=_st($10)._value_value_value_($11,$12,$13);
return $9;
};
$15=_st(side).__eq_eq("bottom");
if(smalltalk.assert($15)){
$17=sideDistLenBlock;
$18=side;
$19=_st(_st(self._bottom()).__minus(_st(aPoint)._y()))._abs();
$21=_st(_st(aPoint)._x())._between_and_(self._left(),self._right());
if(smalltalk.assert($21)){
$20=self._width();
} else {
$20=(0);
};
$16=_st($17)._value_value_value_($18,$19,$20);
return $16;
};
$22=_st(side).__eq_eq("top");
if(smalltalk.assert($22)){
$24=sideDistLenBlock;
$25=side;
$26=_st(_st(self._top()).__minus(_st(aPoint)._y()))._abs();
$28=_st(_st(aPoint)._x())._between_and_(self._left(),self._right());
if(smalltalk.assert($28)){
$27=self._width();
} else {
$27=(0);
};
$23=_st($24)._value_value_value_($25,$26,$27);
return $23;
};
return self}, function($ctx1) {$ctx1.fill(self,"forPoint:closestSideDistLen:",{aPoint:aPoint,sideDistLenBlock:sideDistLenBlock,side:side},smalltalk.Rectangle)})},
args: ["aPoint", "sideDistLenBlock"],
source: "forPoint: aPoint closestSideDistLen: sideDistLenBlock \x0a\x09\x22Evaluate the block with my side (symbol) closest to aPoint,\x0a\x09\x09the approx distance of aPoint from that side, and\x0a\x09\x09the length of the side (or 0 if aPoint is beyond the side)\x22\x0a\x09| side |\x0a\x09side := self sideNearestTo: aPoint.\x0a\x09side == #right ifTrue: \x0a\x09\x09[ ^ sideDistLenBlock \x0a\x09\x09\x09value: side\x0a\x09\x09\x09value: (self right - aPoint x) abs\x0a\x09\x09\x09value: ((aPoint y \x0a\x09\x09\x09\x09\x09between: self top\x0a\x09\x09\x09\x09\x09and: self bottom) \x0a\x09\x09\x09\x09\x09ifTrue: [ self height ]\x0a\x09\x09\x09\x09\x09ifFalse: [ 0 ]) ].\x0a\x09side == #left ifTrue: \x0a\x09\x09[ ^ sideDistLenBlock \x0a\x09\x09\x09value: side\x0a\x09\x09\x09value: (self left - aPoint x) abs\x0a\x09\x09\x09value: ((aPoint y \x0a\x09\x09\x09\x09\x09between: self top\x0a\x09\x09\x09\x09\x09and: self bottom) \x0a\x09\x09\x09\x09\x09ifTrue: [ self height ]\x0a\x09\x09\x09\x09\x09ifFalse: [ 0 ]) ].\x0a\x09side == #bottom ifTrue: \x0a\x09\x09[ ^ sideDistLenBlock \x0a\x09\x09\x09value: side\x0a\x09\x09\x09value: (self bottom - aPoint y) abs\x0a\x09\x09\x09value: ((aPoint x \x0a\x09\x09\x09\x09\x09between: self left\x0a\x09\x09\x09\x09\x09and: self right) \x0a\x09\x09\x09\x09\x09ifTrue: [ self width ]\x0a\x09\x09\x09\x09\x09ifFalse: [ 0 ]) ].\x0a\x09side == #top ifTrue: \x0a\x09\x09[ ^ sideDistLenBlock \x0a\x09\x09\x09value: side\x0a\x09\x09\x09value: (self top - aPoint y) abs\x0a\x09\x09\x09value: ((aPoint x \x0a\x09\x09\x09\x09\x09between: self left\x0a\x09\x09\x09\x09\x09and: self right) \x0a\x09\x09\x09\x09\x09ifTrue: [ self width ]\x0a\x09\x09\x09\x09\x09ifFalse: [ 0 ]) ]",
messageSends: ["sideNearestTo:", "ifTrue:", "value:value:value:", "abs", "-", "x", "right", "ifTrue:ifFalse:", "height", "between:and:", "top", "bottom", "y", "==", "left", "width"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPositiveExtent",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@corner"])._x()).__gt(_st(self["@origin"])._x()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@corner"])._y()).__gt(_st(self["@origin"])._y());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasPositiveExtent",{},smalltalk.Rectangle)})},
args: [],
source: "hasPositiveExtent\x0a\x09^ (corner x > origin x) and: [corner y > origin y]",
messageSends: ["and:", ">", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
category: 'comparing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._hash())._bitXor_(_st(self["@corner"])._hash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.Rectangle)})},
args: [],
source: "hash\x0a\x09\x22Hash is reimplemented because = is implemented.\x22\x0a\x0a\x09^origin hash bitXor: corner hash",
messageSends: ["bitXor:", "hash"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._y()).__minus(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Rectangle)})},
args: [],
source: "height\x0a\x09\x22Answer the height of the receiver.\x22\x0a\x0a\x09^corner y - origin y",
messageSends: ["-", "y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "innerCorners",
category: 'accessing',
fn: function (){
var self=this;
var r1;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
r1=_st(self._topLeft())._corner_(_st(self._bottomRight()).__minus((1).__at((1))));
$1=_st($Array())._with_with_with_with_(_st(r1)._topLeft(),_st(r1)._bottomLeft(),_st(r1)._bottomRight(),_st(r1)._topRight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerCorners",{r1:r1},smalltalk.Rectangle)})},
args: [],
source: "innerCorners\x0a\x09\x22Return an array of inner corner points,\x0a\x09ie, the most extreme pixels included,\x0a\x09in the order of a quadrilateral spec for WarpBlt\x22\x0a\x09| r1 |\x0a\x09r1 := self topLeft corner: self bottomRight - (1 @ 1).\x0a\x09^ Array \x0a\x09\x09with: r1 topLeft\x0a\x09\x09with: r1 bottomLeft\x0a\x09\x09with: r1 bottomRight\x0a\x09\x09with: r1 topRight",
messageSends: ["corner:", "-", "@", "bottomRight", "topLeft", "with:with:with:with:", "bottomLeft", "topRight"],
referencedClasses: ["Array"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "insetBy:",
category: 'rectangle functions',
fn: function (delta){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(delta)._isRectangle();
if(smalltalk.assert($1)){
$2=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__plus(_st(delta)._origin()),_st(self["@corner"]).__minus(_st(delta)._corner()));
return $2;
} else {
$3=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__plus(delta),_st(self["@corner"]).__minus(delta));
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"insetBy:",{delta:delta},smalltalk.Rectangle)})},
args: ["delta"],
source: "insetBy: delta \x0a\x09\x22Answer a Rectangle that is inset from the receiver by delta. delta is a \x0a\x09Rectangle, Point, or scalar.\x22\x0a\x0a\x09\x0a\x09(delta isRectangle)\x0a\x09\x09ifTrue: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin + delta origin \x0a\x09\x09\x09\x09\x09corner: corner - delta corner]\x0a\x09\x09ifFalse: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin + delta \x0a\x09\x09\x09\x09\x09corner: corner - delta]",
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "+", "origin", "-", "corner", "isRectangle"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "insetOriginBy:cornerBy:",
category: 'rectangle functions',
fn: function (originDeltaPoint,cornerDeltaPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__plus(originDeltaPoint),_st(self["@corner"]).__minus(cornerDeltaPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"insetOriginBy:cornerBy:",{originDeltaPoint:originDeltaPoint,cornerDeltaPoint:cornerDeltaPoint},smalltalk.Rectangle)})},
args: ["originDeltaPoint", "cornerDeltaPoint"],
source: "insetOriginBy: originDeltaPoint cornerBy: cornerDeltaPoint \x0a\x09\x22Answer a Rectangle that is inset from the receiver by a given amount in \x0a\x09the origin and corner.\x22\x0a\x0a\x09^Rectangle\x0a\x09\x09origin: origin + originDeltaPoint\x0a\x09\x09corner: corner - cornerDeltaPoint",
messageSends: ["origin:corner:", "+", "-"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "interpolateTo:at:",
category: 'transforming',
fn: function (end,amountDone){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._origin())._interpolateTo_at_(_st(end)._origin(),amountDone))._corner_(_st(self._corner())._interpolateTo_at_(_st(end)._corner(),amountDone));
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpolateTo:at:",{end:end,amountDone:amountDone},smalltalk.Rectangle)})},
args: ["end", "amountDone"],
source: "interpolateTo: end at: amountDone\x0a\x09\x22Interpolate between the instance and end after the specified amount has been done (0 - 1).\x22\x0a\x0a\x09^(self origin interpolateTo: end origin at: amountDone)\x0a\x09\x09corner: (self corner interpolateTo: end corner at: amountDone)",
messageSends: ["corner:", "interpolateTo:at:", "corner", "origin"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersect:",
category: 'rectangle functions',
fn: function (aRectangle){
var self=this;
var aPoint,left,right,top,bottom;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
aPoint=_st(aRectangle)._origin();
$1=_st(_st(aPoint)._x()).__gt(_st(self["@origin"])._x());
if(smalltalk.assert($1)){
left=_st(aPoint)._x();
left;
} else {
left=_st(self["@origin"])._x();
left;
};
$2=_st(_st(aPoint)._y()).__gt(_st(self["@origin"])._y());
if(smalltalk.assert($2)){
top=_st(aPoint)._y();
top;
} else {
top=_st(self["@origin"])._y();
top;
};
aPoint=_st(aRectangle)._corner();
$3=_st(_st(aPoint)._x()).__lt(_st(self["@corner"])._x());
if(smalltalk.assert($3)){
right=_st(aPoint)._x();
right;
} else {
right=_st(self["@corner"])._x();
right;
};
$4=_st(_st(aPoint)._y()).__lt(_st(self["@corner"])._y());
if(smalltalk.assert($4)){
bottom=_st(aPoint)._y();
bottom;
} else {
bottom=_st(self["@corner"])._y();
bottom;
};
$5=_st($Rectangle())._origin_corner_(_st(left).__at(top),_st(right).__at(bottom));
return $5;
}, function($ctx1) {$ctx1.fill(self,"intersect:",{aRectangle:aRectangle,aPoint:aPoint,left:left,right:right,top:top,bottom:bottom},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "intersect: aRectangle \x0a\x09\x22Answer a Rectangle that is the area in which the receiver overlaps with \x0a\x09aRectangle. Optimized for speed; old code read:\x0a\x09\x09^Rectangle \x0a\x09\x09\x09origin: (origin max: aRectangle origin)\x0a\x09\x09\x09corner: (corner min: aRectangle corner)\x0a\x09\x22\x0a\x09| aPoint left right top bottom |\x0a\x09aPoint := aRectangle origin.\x0a\x09aPoint x > origin x \x0a\x09\x09ifTrue: [ left := aPoint x ]\x0a\x09\x09ifFalse: [ left := origin x ].\x0a\x09aPoint y > origin y \x0a\x09\x09ifTrue: [ top := aPoint y ]\x0a\x09\x09ifFalse: [ top := origin y ].\x0a\x09aPoint := aRectangle corner.\x0a\x09aPoint x < corner x \x0a\x09\x09ifTrue: [ right := aPoint x ]\x0a\x09\x09ifFalse: [ right := corner x ].\x0a\x09aPoint y < corner y \x0a\x09\x09ifTrue: [ bottom := aPoint y ]\x0a\x09\x09ifFalse: [ bottom := corner y ].\x0a\x09^ Rectangle \x0a\x09\x09origin: left @ top\x0a\x09\x09corner: right @ bottom",
messageSends: ["origin", "ifTrue:ifFalse:", "x", ">", "y", "corner", "<", "origin:corner:", "@"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersect:ifNone:",
category: 'rectangle functions',
fn: function (aRectangle,aBlock){
var self=this;
var aPoint,left,right,top,bottom;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=self._intersects_(aRectangle);
if(! smalltalk.assert($1)){
$2=_st(aBlock)._value();
return $2;
};
aPoint=_st(aRectangle)._origin();
$3=_st(_st(aPoint)._x()).__gt(_st(self["@origin"])._x());
if(smalltalk.assert($3)){
left=_st(aPoint)._x();
left;
} else {
left=_st(self["@origin"])._x();
left;
};
$4=_st(_st(aPoint)._y()).__gt(_st(self["@origin"])._y());
if(smalltalk.assert($4)){
top=_st(aPoint)._y();
top;
} else {
top=_st(self["@origin"])._y();
top;
};
aPoint=_st(aRectangle)._corner();
$5=_st(_st(aPoint)._x()).__lt(_st(self["@corner"])._x());
if(smalltalk.assert($5)){
right=_st(aPoint)._x();
right;
} else {
right=_st(self["@corner"])._x();
right;
};
$6=_st(_st(aPoint)._y()).__lt(_st(self["@corner"])._y());
if(smalltalk.assert($6)){
bottom=_st(aPoint)._y();
bottom;
} else {
bottom=_st(self["@corner"])._y();
bottom;
};
$7=_st($Rectangle())._origin_corner_(_st(left).__at(top),_st(right).__at(bottom));
return $7;
}, function($ctx1) {$ctx1.fill(self,"intersect:ifNone:",{aRectangle:aRectangle,aBlock:aBlock,aPoint:aPoint,left:left,right:right,top:top,bottom:bottom},smalltalk.Rectangle)})},
args: ["aRectangle", "aBlock"],
source: "intersect: aRectangle ifNone: aBlock\x0a\x09\x22Answer a Rectangle that is the area in which the receiver overlaps with \x0a\x09aRectangle. \x0a\x09If there's no overlap, evaluate the block instead \x0a\x09\x22\x0a\x09| aPoint left right top bottom |\x0a\x09(self intersects: aRectangle) ifFalse: [ ^ aBlock value ].\x0a\x09 \x0a\x09aPoint := aRectangle origin.\x0a\x09aPoint x > origin x \x0a\x09\x09ifTrue: [ left := aPoint x ]\x0a\x09\x09ifFalse: [ left := origin x ].\x0a\x09aPoint y > origin y \x0a\x09\x09ifTrue: [ top := aPoint y ]\x0a\x09\x09ifFalse: [ top := origin y ].\x0a\x09aPoint := aRectangle corner.\x0a\x09aPoint x < corner x \x0a\x09\x09ifTrue: [ right := aPoint x ]\x0a\x09\x09ifFalse: [ right := corner x ].\x0a\x09aPoint y < corner y \x0a\x09\x09ifTrue: [ bottom := aPoint y ]\x0a\x09\x09ifFalse: [ bottom := corner y ].\x0a\x09^ Rectangle \x0a\x09\x09origin: left @ top\x0a\x09\x09corner: right @ bottom",
messageSends: ["ifFalse:", "value", "intersects:", "origin", "ifTrue:ifFalse:", "x", ">", "y", "corner", "<", "origin:corner:", "@"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersects:",
category: 'testing',
fn: function (aRectangle){
var self=this;
var rOrigin,rCorner;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
rOrigin=_st(aRectangle)._origin();
rCorner=_st(aRectangle)._corner();
$1=_st(_st(rCorner)._x()).__lt_eq(_st(self["@origin"])._x());
if(smalltalk.assert($1)){
return false;
};
$2=_st(_st(rCorner)._y()).__lt_eq(_st(self["@origin"])._y());
if(smalltalk.assert($2)){
return false;
};
$3=_st(_st(rOrigin)._x()).__gt_eq(_st(self["@corner"])._x());
if(smalltalk.assert($3)){
return false;
};
$4=_st(_st(rOrigin)._y()).__gt_eq(_st(self["@corner"])._y());
if(smalltalk.assert($4)){
return false;
};
return true;
}, function($ctx1) {$ctx1.fill(self,"intersects:",{aRectangle:aRectangle,rOrigin:rOrigin,rCorner:rCorner},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "intersects: aRectangle \x0a\x09\x22Answer whether aRectangle intersects the receiver anywhere.\x22\x0a\x09\x22Optimized; old code answered:\x0a\x09\x09(origin max: aRectangle origin) < (corner min: aRectangle corner)\x22\x0a\x09| rOrigin rCorner |\x0a\x09rOrigin := aRectangle origin.\x0a\x09rCorner := aRectangle corner.\x0a\x09rCorner x <= origin x ifTrue: [ ^ false ].\x0a\x09rCorner y <= origin y ifTrue: [ ^ false ].\x0a\x09rOrigin x >= corner x ifTrue: [ ^ false ].\x0a\x09rOrigin y >= corner y ifTrue: [ ^ false ].\x0a\x09^ true",
messageSends: ["origin", "corner", "ifTrue:", "<=", "x", "y", ">="],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isIntegerRectangle",
category: 'truncation and roundoff',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._isIntegerPoint())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@corner"])._isIntegerPoint();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isIntegerRectangle",{},smalltalk.Rectangle)})},
args: [],
source: "isIntegerRectangle\x0a\x22Answer true if all component of receiver are integral.\x22\x0a\x0a^origin isIntegerPoint and: [ corner isIntegerPoint ]",
messageSends: ["and:", "isIntegerPoint"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isRectangle",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRectangle",{},smalltalk.Rectangle)})},
args: [],
source: "isRectangle\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelfEvaluating",
category: 'self evaluating',
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class()).__eq_eq($Rectangle());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelfEvaluating",{},smalltalk.Rectangle)})},
args: [],
source: "isSelfEvaluating\x0a\x09^ self class == Rectangle",
messageSends: ["==", "class"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isTall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__gt(self._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isTall",{},smalltalk.Rectangle)})},
args: [],
source: "isTall\x0a\x09^ self height > self width",
messageSends: [">", "width", "height"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isWide",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__gt(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isWide",{},smalltalk.Rectangle)})},
args: [],
source: "isWide\x0a\x09^ self width > self height",
messageSends: [">", "height", "width"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isZero",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._isZero())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@corner"])._isZero();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{},smalltalk.Rectangle)})},
args: [],
source: "isZero\x0a\x09^origin isZero and:[corner isZero]",
messageSends: ["and:", "isZero"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.Rectangle)})},
args: [],
source: "left\x0a\x09\x22Answer the position of the receiver's left vertical line.\x22\x0a\x0a\x09^origin x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNumber).__at(_st(self["@origin"])._y()))._corner_(self["@corner"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"left:",{aNumber:aNumber},smalltalk.Rectangle)})},
args: ["aNumber"],
source: "left: aNumber\x0a\x09^aNumber @ origin y corner: corner",
messageSends: ["corner:", "@", "y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCenter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._left()).__at(_st(self._center())._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftCenter",{},smalltalk.Rectangle)})},
args: [],
source: "leftCenter\x0a\x09\x22Answer the point at the center of the receiver's left vertical line.\x22\x0a\x0a\x09^self left @ self center y",
messageSends: ["@", "y", "center", "left"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "merge:",
category: 'rectangle functions',
fn: function (aRectangle){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._min_(_st(aRectangle)._origin()),_st(self["@corner"])._max_(_st(aRectangle)._corner()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"merge:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "merge: aRectangle \x0a\x09\x22Answer a Rectangle that contains both the receiver and aRectangle.\x22\x0a\x0a\x09^Rectangle \x0a\x09\x09origin: (origin min: aRectangle origin)\x0a\x09\x09corner: (corner max: aRectangle corner)",
messageSends: ["origin:corner:", "min:", "origin", "max:", "corner"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin",{},smalltalk.Rectangle)})},
args: [],
source: "origin\x0a\x09\x22Answer the point at the top left corner of the receiver.\x22\x0a\x0a\x09^origin",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "outsetBy:",
category: 'rectangle functions',
fn: function (delta){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(delta)._isRectangle();
if(smalltalk.assert($1)){
$2=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__minus(_st(delta)._origin()),_st(self["@corner"]).__plus(_st(delta)._corner()));
return $2;
} else {
$3=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__minus(delta),_st(self["@corner"]).__plus(delta));
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"outsetBy:",{delta:delta},smalltalk.Rectangle)})},
args: ["delta"],
source: "outsetBy: delta \x0a\x09\x22Answer a Rectangle that is outset from the receiver by delta. delta is a \x0a\x09Rectangle, Point, or scalar.\x22\x0a\x0a\x09(delta isRectangle)\x0a\x09\x09ifTrue: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin - delta origin \x0a\x09\x09\x09\x09\x09corner: corner + delta corner]\x0a\x09\x09ifFalse: [^Rectangle \x0a\x09\x09\x09\x09\x09origin: origin - delta \x0a\x09\x09\x09\x09\x09corner: corner + delta]",
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "-", "origin", "+", "corner", "isRectangle"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "pointAtSideOrCorner:",
category: 'accessing',
fn: function (loc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_(["topLeft", "topCenter", "topRight", "rightCenter", "bottomRight", "bottomCenter", "bottomLeft", "leftCenter"]._at_(["topLeft", "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left"]._indexOf_(loc)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointAtSideOrCorner:",{loc:loc},smalltalk.Rectangle)})},
args: ["loc"],
source: "pointAtSideOrCorner: loc\x0a\x09\x22Answer the point represented by the given location.\x22\x0a\x09\x0a\x09^ self\x0a\x09\x09perform: (#(topLeft topCenter topRight rightCenter\x0a\x09\x09\x09\x09\x09bottomRight bottomCenter bottomLeft leftCenter)\x0a\x09\x09\x09\x09\x09\x09at: (#(topLeft top topRight right\x0a\x09\x09\x09\x09\x09bottomRight bottom bottomLeft left) indexOf: loc))",
messageSends: ["perform:", "at:", "indexOf:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "pointNearestTo:",
category: 'rectangle functions',
fn: function (aPoint){
var self=this;
var side;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
$1=self._containsPoint_(aPoint);
if(smalltalk.assert($1)){
side=self._sideNearestTo_(aPoint);
side;
$2=_st(side).__eq_eq("right");
if(smalltalk.assert($2)){
$3=_st(self._right()).__at(_st(aPoint)._y());
return $3;
};
$4=_st(side).__eq_eq("left");
if(smalltalk.assert($4)){
$5=_st(self._left()).__at(_st(aPoint)._y());
return $5;
};
$6=_st(side).__eq_eq("bottom");
if(smalltalk.assert($6)){
$7=_st(_st(aPoint)._x()).__at(self._bottom());
return $7;
};
$8=_st(side).__eq_eq("top");
if(smalltalk.assert($8)){
$9=_st(_st(aPoint)._x()).__at(self._top());
return $9;
};
} else {
$10=_st(aPoint)._adhereTo_(self);
return $10;
};
return self}, function($ctx1) {$ctx1.fill(self,"pointNearestTo:",{aPoint:aPoint,side:side},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "pointNearestTo: aPoint \x0a\x09\x22Return the point on my border closest to aPoint\x22\x0a\x09| side |\x0a\x09(self containsPoint: aPoint) \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ side := self sideNearestTo: aPoint.\x0a\x09\x09\x09side == #right ifTrue: [ ^ self right @ aPoint y ].\x0a\x09\x09\x09side == #left ifTrue: [ ^ self left @ aPoint y ].\x0a\x09\x09\x09side == #bottom ifTrue: [ ^ aPoint x @ self bottom ].\x0a\x09\x09\x09side == #top ifTrue: [ ^ aPoint x @ self top ] ]\x0a\x09\x09ifFalse: [ ^ aPoint adhereTo: self ]",
messageSends: ["ifTrue:ifFalse:", "sideNearestTo:", "ifTrue:", "@", "y", "right", "==", "left", "bottom", "x", "top", "adhereTo:", "containsPoint:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@origin"])._printOn_(aStream);
_st(aStream)._nextPutAll_(" corner: ");
_st(self["@corner"])._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Rectangle)})},
args: ["aStream"],
source: "printOn: aStream \x0a\x09\x22Refer to the comment in Object|printOn:.\x22\x0a\x0a\x09origin printOn: aStream.\x0a\x09aStream nextPutAll: ' corner: '.\x0a\x09corner printOn: aStream",
messageSends: ["printOn:", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "quickMerge:",
category: 'rectangle functions',
fn: function (aRectangle){
var self=this;
var useRcvr,rOrigin,rCorner,minX,maxX,minY,maxY;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
$1=aRectangle;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
useRcvr=true;
rOrigin=_st(aRectangle)._topLeft();
rCorner=_st(aRectangle)._bottomRight();
$3=_st(_st(rOrigin)._x()).__lt(_st(self["@origin"])._x());
if(smalltalk.assert($3)){
useRcvr=false;
useRcvr;
minX=_st(rOrigin)._x();
} else {
minX=_st(self["@origin"])._x();
};
$4=_st(_st(rCorner)._x()).__gt(_st(self["@corner"])._x());
if(smalltalk.assert($4)){
useRcvr=false;
useRcvr;
maxX=_st(rCorner)._x();
} else {
maxX=_st(self["@corner"])._x();
};
$5=_st(_st(rOrigin)._y()).__lt(_st(self["@origin"])._y());
if(smalltalk.assert($5)){
useRcvr=false;
useRcvr;
minY=_st(rOrigin)._y();
} else {
minY=_st(self["@origin"])._y();
};
$6=_st(_st(rCorner)._y()).__gt(_st(self["@corner"])._y());
if(smalltalk.assert($6)){
useRcvr=false;
useRcvr;
maxY=_st(rCorner)._y();
} else {
maxY=_st(self["@corner"])._y();
};
$7=useRcvr;
if(smalltalk.assert($7)){
$8=self;
return $8;
} else {
$9=_st($Rectangle())._origin_corner_(_st(minX).__at(minY),_st(maxX).__at(maxY));
return $9;
};
return self}, function($ctx1) {$ctx1.fill(self,"quickMerge:",{aRectangle:aRectangle,useRcvr:useRcvr,rOrigin:rOrigin,rCorner:rCorner,minX:minX,maxX:maxX,minY:minY,maxY:maxY},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "quickMerge: aRectangle \x0a\x09\x22Answer the receiver if it encloses the given rectangle or the merge of the two rectangles if it doesn't. THis method is an optimization to reduce extra rectangle creations.\x22\x0a\x09| useRcvr rOrigin rCorner minX maxX minY maxY |\x0a\x09\x0a\x09aRectangle ifNil: [ ^self ].\x0a\x09\x0a\x09useRcvr := true.\x0a\x09rOrigin := aRectangle topLeft.\x0a\x09rCorner := aRectangle bottomRight.\x0a\x09minX := rOrigin x < origin x \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ useRcvr := false.\x0a\x09\x09\x09rOrigin x ]\x0a\x09\x09ifFalse: [ origin x ].\x0a\x09maxX := rCorner x > corner x \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ useRcvr := false.\x0a\x09\x09\x09rCorner x ]\x0a\x09\x09ifFalse: [ corner x ].\x0a\x09minY := rOrigin y < origin y \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ useRcvr := false.\x0a\x09\x09\x09rOrigin y ]\x0a\x09\x09ifFalse: [ origin y ].\x0a\x09maxY := rCorner y > corner y \x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ useRcvr := false.\x0a\x09\x09\x09rCorner y ]\x0a\x09\x09ifFalse: [ corner y ].\x0a\x09useRcvr \x0a\x09\x09ifTrue: [ ^ self ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ ^ Rectangle \x0a\x09\x09\x09\x09origin: minX @ minY\x0a\x09\x09\x09\x09corner: maxX @ maxY ]",
messageSends: ["ifNil:", "topLeft", "bottomRight", "ifTrue:ifFalse:", "x", "<", ">", "y", "origin:corner:", "@"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "quickMergePoint:",
category: 'transforming',
fn: function (aPoint){
var self=this;
var useRcvr,minX,maxX,minY,maxY;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5;
useRcvr=true;
$1=_st(_st(aPoint)._x()).__lt(_st(self["@origin"])._x());
if(smalltalk.assert($1)){
useRcvr=false;
useRcvr;
minX=_st(aPoint)._x();
} else {
minX=_st(self["@origin"])._x();
};
$2=_st(_st(aPoint)._x()).__gt_eq(_st(self["@corner"])._x());
if(smalltalk.assert($2)){
useRcvr=false;
useRcvr;
maxX=_st(_st(aPoint)._x()).__plus((1));
} else {
maxX=_st(self["@corner"])._x();
};
$3=_st(_st(aPoint)._y()).__lt(_st(self["@origin"])._y());
if(smalltalk.assert($3)){
useRcvr=false;
useRcvr;
minY=_st(aPoint)._y();
} else {
minY=_st(self["@origin"])._y();
};
$4=_st(_st(aPoint)._y()).__gt_eq(_st(self["@corner"])._y());
if(smalltalk.assert($4)){
useRcvr=false;
useRcvr;
maxY=_st(_st(aPoint)._y()).__plus((1));
} else {
maxY=_st(self["@corner"])._y();
};
$6=useRcvr;
if(smalltalk.assert($6)){
$5=self;
} else {
$5=_st(_st(minX).__at(minY))._corner_(_st(maxX).__at(maxY));
};
return $5;
}, function($ctx1) {$ctx1.fill(self,"quickMergePoint:",{aPoint:aPoint,useRcvr:useRcvr,minX:minX,maxX:maxX,minY:minY,maxY:maxY},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "quickMergePoint: aPoint\x0a\x09\x22Answer the receiver if it encloses the given point or the expansion of the\x0a\x09receiver to do so if it doesn't. \x22\x0a\x0a\x09| useRcvr minX maxX minY maxY |\x0a\x09useRcvr := true.\x0a\x09minX := aPoint x < origin x ifTrue: [useRcvr := false. aPoint x] ifFalse: [origin x].\x0a\x09maxX := aPoint x >= corner x ifTrue: [useRcvr := false. aPoint x + 1] ifFalse: [corner x].\x0a\x09minY := aPoint y < origin y ifTrue: [useRcvr := false. aPoint y] ifFalse: [origin y].\x0a\x09maxY := aPoint y >= corner y ifTrue: [useRcvr := false. aPoint y + 1] ifFalse: [corner y].\x0a\x09^useRcvr\x0a\x09\x09ifTrue: [self]\x0a\x09\x09ifFalse: [minX@minY corner: maxX@maxY]",
messageSends: ["ifTrue:ifFalse:", "x", "<", "+", ">=", "y", "corner:", "@"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rectanglesAt:height:",
category: 'rectangle functions',
fn: function (y,ht){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(y).__plus(ht)).__gt(self._bottom());
if(smalltalk.assert($1)){
$2=_st($Array())._new();
return $2;
};
$3=_st($Array())._with_(_st(_st(_st(self["@origin"])._x()).__at(y))._corner_(_st(_st(self["@corner"])._x()).__at(_st(y).__plus(ht))));
return $3;
}, function($ctx1) {$ctx1.fill(self,"rectanglesAt:height:",{y:y,ht:ht},smalltalk.Rectangle)})},
args: ["y", "ht"],
source: "rectanglesAt: y height: ht\x0a\x09(y+ht) > self bottom ifTrue: [^ Array new].\x0a\x09^ Array with: (origin x @ y corner: corner x @ (y+ht))",
messageSends: ["ifTrue:", "new", ">", "bottom", "+", "with:", "corner:", "@", "x"],
referencedClasses: ["Array"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.Rectangle)})},
args: [],
source: "right\x0a\x09\x22Answer the position of the receiver's right vertical line.\x22\x0a\x0a\x09^corner x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(aNumber).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"right:",{aNumber:aNumber},smalltalk.Rectangle)})},
args: ["aNumber"],
source: "right: aNumber\x0a\x09^origin corner: aNumber @ corner y",
messageSends: ["corner:", "@", "y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rightCenter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._right()).__at(_st(self._center())._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightCenter",{},smalltalk.Rectangle)})},
args: [],
source: "rightCenter\x0a\x09\x22Answer the point at the center of the receiver's right vertical line.\x22\x0a\x0a\x09^self right @ self center y",
messageSends: ["@", "y", "center", "right"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:centerAt:",
category: 'transforming',
fn: function (direction,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._rotateBy_centerAt_(direction,aPoint))._rect_(_st(self["@corner"])._rotateBy_centerAt_(direction,aPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:centerAt:",{direction:direction,aPoint:aPoint},smalltalk.Rectangle)})},
args: ["direction", "aPoint"],
source: "rotateBy: direction centerAt: aPoint\x0a\x09\x22Return a copy rotated #right, #left, or #pi about aPoint\x22\x0a\x09^ (origin rotateBy: direction centerAt: aPoint)\x0a\x09\x09rect: (corner rotateBy: direction centerAt: aPoint)",
messageSends: ["rect:", "rotateBy:centerAt:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "roundTo:",
category: 'truncation and roundoff',
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._roundTo_(grid),_st(self["@corner"])._roundTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"roundTo:",{grid:grid},smalltalk.Rectangle)})},
args: ["grid"],
source: "roundTo: grid\x0a\x09\x22Answer a Rectangle whose origin and corner are rounded to grid x and grid y.\x22\x0a\x0a\x09^Rectangle origin: (origin roundTo: grid)\x0a\x09\x09\x09\x09corner: (corner roundTo: grid)",
messageSends: ["origin:corner:", "roundTo:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rounded",
category: 'truncation and round off',
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._rounded(),_st(self["@corner"])._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rounded",{},smalltalk.Rectangle)})},
args: [],
source: "rounded\x0a\x09\x22Answer a Rectangle whose origin and corner are rounded.\x22\x0a\x0a\x09^Rectangle origin: origin rounded corner: corner rounded",
messageSends: ["origin:corner:", "rounded"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'transforming',
fn: function (scale){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__star(scale),_st(self["@corner"]).__star(scale));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{scale:scale},smalltalk.Rectangle)})},
args: ["scale"],
source: "scaleBy: scale \x0a\x09\x22Answer a Rectangle scaled by scale, a Point or a scalar.\x22\x0a\x0a\x09^Rectangle origin: origin * scale corner: corner * scale",
messageSends: ["origin:corner:", "*"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFrom:to:",
category: 'transforming',
fn: function (rect1,rect2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._scaleFrom_to_(rect1,rect2))._corner_(_st(self["@corner"])._scaleFrom_to_(rect1,rect2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFrom:to:",{rect1:rect1,rect2:rect2},smalltalk.Rectangle)})},
args: ["rect1", "rect2"],
source: "scaleFrom: rect1 to: rect2\x0a\x09\x22Produce a rectangle stretched according to the stretch from rect1 to rect2\x22\x0a\x09^ (origin scaleFrom: rect1 to: rect2)\x0a\x09\x09corner: (corner scaleFrom: rect1 to: rect2)",
messageSends: ["corner:", "scaleFrom:to:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "scaledAndCenteredIn:",
category: 'transforming',
fn: function (aRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self._width()).__slash(_st(aRect)._width())).__gt(_st(self._height()).__slash(_st(aRect)._height()));
if(smalltalk.assert($2)){
$1=_st(_st(_st(aRect)._left()).__at(_st(_st(_st(aRect)._leftCenter())._y()).__minus(_st(_st(self._height()).__star(_st(_st(aRect)._width()).__slash(self._width()))).__slash((2)))))._corner_(_st(_st(aRect)._right()).__at(_st(_st(_st(aRect)._rightCenter())._y()).__plus(_st(_st(self._height()).__star(_st(_st(aRect)._width()).__slash(self._width()))).__slash((2)))));
} else {
$1=_st(_st(_st(_st(_st(aRect)._topCenter())._x()).__minus(_st(_st(self._width()).__star(_st(_st(aRect)._height()).__slash(self._height()))).__slash((2)))).__at(_st(aRect)._top()))._corner_(_st(_st(_st(_st(aRect)._topCenter())._x()).__plus(_st(_st(self._width()).__star(_st(_st(aRect)._height()).__slash(self._height()))).__slash((2)))).__at(_st(aRect)._bottom()));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaledAndCenteredIn:",{aRect:aRect},smalltalk.Rectangle)})},
args: ["aRect"],
source: "scaledAndCenteredIn: aRect\x0a\x09\x22Answer a new rectangle that fits into aRectangle and is centered\x0a\x09but with the same aspect ratio as the receiver.\x22\x0a\x09\x0a\x09^self width / aRect width > (self height / aRect height)\x0a\x09\x09ifTrue: [aRect left @ (aRect leftCenter y - (self height * (aRect width / self width) / 2))\x0a\x09\x09\x09\x09\x09corner: aRect right @ (aRect rightCenter y + (self height * (aRect width / self width) / 2))]\x0a\x09\x09ifFalse: [aRect topCenter x - (self width * (aRect height / self height) / 2) @ aRect top\x0a\x09\x09\x09\x09\x09corner: (aRect topCenter x + (self width * (aRect height / self height) / 2)) @ aRect bottom]",
messageSends: ["ifTrue:ifFalse:", "corner:", "@", "+", "/", "*", "width", "height", "y", "rightCenter", "right", "-", "leftCenter", "left", "bottom", "x", "topCenter", "top", ">"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "setOrigin:corner:",
category: 'private',
fn: function (topLeft,bottomRight){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@origin"]=topLeft;
self["@corner"]=bottomRight;
return self}, function($ctx1) {$ctx1.fill(self,"setOrigin:corner:",{topLeft:topLeft,bottomRight:bottomRight},smalltalk.Rectangle)})},
args: ["topLeft", "bottomRight"],
source: "setOrigin: topLeft corner: bottomRight \x0a\x09origin := topLeft.\x0a\x09corner := bottomRight",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "sideNearestTo:",
category: 'rectangle functions',
fn: function (aPoint){
var self=this;
var distToLeft,distToRight,distToTop,distToBottom,closest,side;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
distToLeft=_st(_st(aPoint)._x()).__minus(self._left());
distToRight=_st(self._right()).__minus(_st(aPoint)._x());
distToTop=_st(_st(aPoint)._y()).__minus(self._top());
distToBottom=_st(self._bottom()).__minus(_st(aPoint)._y());
closest=distToLeft;
side="left";
$1=_st(distToRight).__lt(closest);
if(smalltalk.assert($1)){
closest=distToRight;
closest;
side="right";
side;
};
$2=_st(distToTop).__lt(closest);
if(smalltalk.assert($2)){
closest=distToTop;
closest;
side="top";
side;
};
$3=_st(distToBottom).__lt(closest);
if(smalltalk.assert($3)){
closest=distToBottom;
closest;
side="bottom";
side;
};
$4=side;
return $4;
}, function($ctx1) {$ctx1.fill(self,"sideNearestTo:",{aPoint:aPoint,distToLeft:distToLeft,distToRight:distToRight,distToTop:distToTop,distToBottom:distToBottom,closest:closest,side:side},smalltalk.Rectangle)})},
args: ["aPoint"],
source: "sideNearestTo: aPoint \x0a\x09| distToLeft distToRight distToTop distToBottom closest side |\x0a\x09distToLeft := aPoint x - self left.\x0a\x09distToRight := self right - aPoint x.\x0a\x09distToTop := aPoint y - self top.\x0a\x09distToBottom := self bottom - aPoint y.\x0a\x09closest := distToLeft.\x0a\x09side := #left.\x0a\x09distToRight < closest ifTrue: \x0a\x09\x09[ closest := distToRight.\x0a\x09\x09side := #right ].\x0a\x09distToTop < closest ifTrue: \x0a\x09\x09[ closest := distToTop.\x0a\x09\x09side := #top ].\x0a\x09distToBottom < closest ifTrue: \x0a\x09\x09[ closest := distToBottom.\x0a\x09\x09side := #bottom ].\x0a\x09^ side\x0a\x09\x22\x0a | r | r := Rectangle fromUser.\x0aDisplay border: r width: 1.\x0a[Sensor anyButtonPressed] whileFalse:\x0a\x09[(r sideNearestTo: Sensor cursorPoint) , '      ' displayAt: 0@0]\x0a\x22",
messageSends: ["-", "left", "x", "right", "top", "y", "bottom", "ifTrue:", "<"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "squishedWithin:",
category: 'transforming',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(self["@corner"])._min_(_st(aRectangle)._bottomRight()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"squishedWithin:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "squishedWithin: aRectangle\x0a\x09\x22Return an adjustment of the receiver that fits within aRectangle by reducing its size, not by changing its origin.  \x22\x0a\x0a\x09^ origin corner: (corner min: aRectangle bottomRight)\x0a\x0a\x22(50 @ 50 corner: 160 @ 100) squishedWithin:  (20 @ 10 corner: 90 @ 85)\x22",
messageSends: ["corner:", "min:", "bottomRight"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_("(");
self._printOn_(aStream);
_st(aStream)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream},smalltalk.Rectangle)})},
args: ["aStream"],
source: "storeOn: aStream \x0a\x09\x22printed form is good for storing too\x22\x0a\x09\x0a\x09aStream nextPut: '('.\x0a\x09self printOn: aStream.\x0a\x09aStream nextPut: ')'.",
messageSends: ["nextPut:", "printOn:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.Rectangle)})},
args: [],
source: "top\x0a\x09\x22Answer the position of the receiver's top horizontal line.\x22\x0a\x0a\x09^origin y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(aNumber))._corner_(self["@corner"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"top:",{aNumber:aNumber},smalltalk.Rectangle)})},
args: ["aNumber"],
source: "top: aNumber\x0a\x09^origin x @ aNumber corner: corner",
messageSends: ["corner:", "@", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "topCenter",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._center())._x()).__at(self._top());
return $1;
}, function($ctx1) {$ctx1.fill(self,"topCenter",{},smalltalk.Rectangle)})},
args: [],
source: "topCenter\x0a\x09\x22Answer the point at the center of the receiver's top horizontal line.\x22\x0a\x0a\x09^self center x @ self top",
messageSends: ["@", "top", "x", "center"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeft",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeft",{},smalltalk.Rectangle)})},
args: [],
source: "topLeft\x0a\x09\x22Answer the point at the top left corner of the receiver's top horizontal line.\x22\x0a\x0a\x09^origin",
messageSends: [],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "topRight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__at(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"topRight",{},smalltalk.Rectangle)})},
args: [],
source: "topRight\x0a\x09\x22Answer the point at the top right corner of the receiver's top horizontal \x0a\x09line.\x22\x0a\x0a\x09^corner x @ origin y",
messageSends: ["@", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'transforming',
fn: function (factor){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__plus(factor),_st(self["@corner"]).__plus(factor));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{factor:factor},smalltalk.Rectangle)})},
args: ["factor"],
source: "translateBy: factor \x0a\x09\x22Answer a Rectangle translated by factor, a Point or a scalar.\x22\x0a\x0a\x09^Rectangle origin: origin + factor corner: corner + factor",
messageSends: ["origin:corner:", "+"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "translatedAndSquishedToBeWithin:",
category: 'transforming',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._translatedToBeWithin_(aRectangle))._squishedWithin_(aRectangle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"translatedAndSquishedToBeWithin:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "translatedAndSquishedToBeWithin: aRectangle\x0a\x09\x22Return an adjustment of the receiver that fits within aRectangle by\x0a\x09\x09- translating it to be within aRectangle if necessary, then\x0a\x09\x09- reducing its size, if necessary\x22\x0a\x0a\x09^ (self translatedToBeWithin: aRectangle) squishedWithin: aRectangle",
messageSends: ["squishedWithin:", "translatedToBeWithin:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "translatedToBeWithin:",
category: 'rectangle functions',
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateBy_(self._amountToTranslateWithin_(aRectangle));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translatedToBeWithin:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
args: ["aRectangle"],
source: "translatedToBeWithin: aRectangle\x0a\x09\x22Answer a copy of the receiver that does not extend beyond aRectangle.\x22\x0a\x0a\x09^ self translateBy: (self amountToTranslateWithin: aRectangle)",
messageSends: ["translateBy:", "amountToTranslateWithin:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "truncateTo:",
category: 'truncation and round off',
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._truncateTo_(grid),_st(self["@corner"])._truncateTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"truncateTo:",{grid:grid},smalltalk.Rectangle)})},
args: ["grid"],
source: "truncateTo: grid\x0a\x09\x22Answer a Rectangle whose origin and corner are truncated to grid x and grid y.\x22\x0a\x0a\x09^Rectangle origin: (origin truncateTo: grid)\x0a\x09\x09\x09\x09corner: (corner truncateTo: grid)",
messageSends: ["origin:corner:", "truncateTo:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "truncated",
category: 'truncation and round off',
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(_st(self["@origin"])._x())._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@origin"])._y())._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(self["@corner"])._x())._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@corner"])._y())._isInteger();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st($Rectangle())._origin_corner_(_st(self["@origin"])._truncated(),_st(self["@corner"])._truncated());
return $3;
}, function($ctx1) {$ctx1.fill(self,"truncated",{},smalltalk.Rectangle)})},
args: [],
source: "truncated\x0a\x09\x22Answer a Rectangle whose origin and corner have any fractional parts removed. Answer the receiver if its coordinates are already integral.\x22\x0a\x0a\x09(origin x isInteger and:\x0a\x09[origin y isInteger and:\x0a\x09[corner x isInteger and:\x0a\x09[corner y isInteger]]])\x0a\x09\x09ifTrue: [^ self].\x0a\x0a\x09^ Rectangle origin: origin truncated corner: corner truncated",
messageSends: ["ifTrue:", "and:", "isInteger", "y", "x", "origin:corner:", "truncated"],
referencedClasses: ["Rectangle"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__minus(_st(self["@origin"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Rectangle)})},
args: [],
source: "width\x0a\x09\x22Answer the width of the receiver.\x22\x0a\x0a\x09^corner x - origin x",
messageSends: ["-", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withBottom:",
category: 'rectangle functions',
fn: function (y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(_st(self["@origin"])._y()))._corner_(_st(_st(self["@corner"])._x()).__at(y));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withBottom:",{y:y},smalltalk.Rectangle)})},
args: ["y"],
source: "withBottom: y \x0a\x09\x22Return a copy of me with a different bottom y\x22\x0a\x09^ origin x @ origin y corner: corner x @ y",
messageSends: ["corner:", "@", "x", "y"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withHeight:",
category: 'rectangle functions',
fn: function (height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(_st(self["@corner"])._x()).__at(_st(_st(self["@origin"])._y()).__plus(height)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withHeight:",{height:height},smalltalk.Rectangle)})},
args: ["height"],
source: "withHeight: height \x0a\x09\x22Return a copy of me with a different height\x22\x0a\x09^ origin corner: corner x @ (origin y + height)",
messageSends: ["corner:", "@", "+", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withLeft:",
category: 'rectangle functions',
fn: function (x){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(x).__at(_st(self["@origin"])._y()))._corner_(_st(_st(self["@corner"])._x()).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withLeft:",{x:x},smalltalk.Rectangle)})},
args: ["x"],
source: "withLeft: x \x0a\x09\x22Return a copy of me with a different left x\x22\x0a\x09^ x @ origin y corner: corner x @ corner y",
messageSends: ["corner:", "@", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withRight:",
category: 'rectangle functions',
fn: function (x){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(_st(self["@origin"])._y()))._corner_(_st(x).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withRight:",{x:x},smalltalk.Rectangle)})},
args: ["x"],
source: "withRight: x \x0a\x09\x22Return a copy of me with a different right x\x22\x0a\x09^ origin x @ origin y corner: x @ corner y",
messageSends: ["corner:", "@", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSide:setTo:",
category: 'rectangle functions',
fn: function (side,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_with_(["withLeft:", "withRight:", "withTop:", "withBottom:"]._at_(["left", "right", "top", "bottom"]._indexOf_(side)),value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSide:setTo:",{side:side,value:value},smalltalk.Rectangle)})},
args: ["side", "value"],
source: "withSide: side setTo: value  \x22return a copy with side set to value\x22\x0a\x09^ self perform: (#(withLeft: withRight: withTop: withBottom: )\x0a\x09\x09\x09\x09\x09\x09\x09at: (#(left right top bottom) indexOf: side))\x0a\x09\x09with: value",
messageSends: ["perform:with:", "at:", "indexOf:"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSideOrCorner:setToPoint:",
category: 'rectangle functions',
fn: function (side,newPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._withSideOrCorner_setToPoint_minExtent_(side,newPoint,(0).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSideOrCorner:setToPoint:",{side:side,newPoint:newPoint},smalltalk.Rectangle)})},
args: ["side", "newPoint"],
source: "withSideOrCorner: side setToPoint: newPoint\x0a\x09\x22Return a copy with side set to newPoint\x22\x0a\x0a\x09^ self withSideOrCorner: side setToPoint: newPoint minExtent: 0@0",
messageSends: ["withSideOrCorner:setToPoint:minExtent:", "@"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSideOrCorner:setToPoint:minExtent:",
category: 'rectangle functions',
fn: function (side,newPoint,minExtent){
var self=this;
function $SmallInteger(){return smalltalk.SmallInteger||(typeof SmallInteger=="undefined"?nil:SmallInteger)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$7,$6,$1;
$2=self;
$3=side;
$4=newPoint;
$5=minExtent;
$7=["left", "top"]._includes_(side);
if(smalltalk.assert($7)){
$6=_st($SmallInteger())._minVal();
} else {
$6=_st($SmallInteger())._maxVal();
};
$1=_st($2)._withSideOrCorner_setToPoint_minExtent_limit_($3,$4,$5,$6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSideOrCorner:setToPoint:minExtent:",{side:side,newPoint:newPoint,minExtent:minExtent},smalltalk.Rectangle)})},
args: ["side", "newPoint", "minExtent"],
source: "withSideOrCorner: side setToPoint: newPoint minExtent: minExtent\x0a\x09\x22Return a copy with side set to newPoint\x22\x0a\x09^self withSideOrCorner: side setToPoint: newPoint minExtent: minExtent\x0a\x09\x09limit: ((#(left top) includes: side) ifTrue: [SmallInteger minVal] ifFalse: [SmallInteger maxVal])",
messageSends: ["withSideOrCorner:setToPoint:minExtent:limit:", "ifTrue:ifFalse:", "minVal", "maxVal", "includes:"],
referencedClasses: ["SmallInteger"]
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSideOrCorner:setToPoint:minExtent:limit:",
category: 'rectangle functions',
fn: function (side,newPoint,minExtent,limit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=_st(side).__eq("top");
if(smalltalk.assert($1)){
$2=self._withTop_(_st(_st(newPoint)._y())._min_max_(_st(_st(self["@corner"])._y()).__minus(_st(minExtent)._y()),_st(limit).__plus(_st(minExtent)._y())));
return $2;
};
$3=_st(side).__eq("bottom");
if(smalltalk.assert($3)){
$4=self._withBottom_(_st(_st(newPoint)._y())._min_max_(_st(limit).__minus(_st(minExtent)._y()),_st(_st(self["@origin"])._y()).__plus(_st(minExtent)._y())));
return $4;
};
$5=_st(side).__eq("left");
if(smalltalk.assert($5)){
$6=self._withLeft_(_st(_st(newPoint)._x())._min_max_(_st(_st(self["@corner"])._x()).__minus(_st(minExtent)._x()),_st(limit).__plus(_st(minExtent)._x())));
return $6;
};
$7=_st(side).__eq("right");
if(smalltalk.assert($7)){
$8=self._withRight_(_st(_st(newPoint)._x())._min_max_(_st(limit).__minus(_st(minExtent)._x()),_st(_st(self["@origin"])._x()).__plus(_st(minExtent)._x())));
return $8;
};
$9=_st(side).__eq("topLeft");
if(smalltalk.assert($9)){
$10=_st(_st(newPoint)._min_(_st(self["@corner"]).__minus(minExtent)))._corner_(self._bottomRight());
return $10;
};
$11=_st(side).__eq("bottomRight");
if(smalltalk.assert($11)){
$12=_st(self._topLeft())._corner_(_st(newPoint)._max_(_st(self["@origin"]).__plus(minExtent)));
return $12;
};
$13=_st(side).__eq("bottomLeft");
if(smalltalk.assert($13)){
$14=_st(self._topRight())._rect_(_st(_st(_st(newPoint)._x())._min_(_st(_st(self["@corner"])._x()).__minus(_st(minExtent)._x()))).__at(_st(_st(newPoint)._y())._max_(_st(_st(self["@origin"])._y()).__plus(_st(minExtent)._y()))));
return $14;
};
$15=_st(side).__eq("topRight");
if(smalltalk.assert($15)){
$16=_st(self._bottomLeft())._rect_(_st(_st(_st(newPoint)._x())._max_(_st(_st(self["@origin"])._x()).__plus(_st(minExtent)._x()))).__at(_st(_st(newPoint)._y())._min_(_st(_st(self["@corner"])._y()).__minus(_st(minExtent)._y()))));
return $16;
};
return self}, function($ctx1) {$ctx1.fill(self,"withSideOrCorner:setToPoint:minExtent:limit:",{side:side,newPoint:newPoint,minExtent:minExtent,limit:limit},smalltalk.Rectangle)})},
args: ["side", "newPoint", "minExtent", "limit"],
source: "withSideOrCorner: side setToPoint: newPoint minExtent: minExtent limit: limit\x0a\x09\x22Return a copy with side set to newPoint\x22\x0a\x09side = #top ifTrue: [^ self withTop: (newPoint y min: corner y - minExtent y max: limit + minExtent y)].\x0a\x09side = #bottom ifTrue: [^ self withBottom: (newPoint y min: limit - minExtent y max: origin y + minExtent y)].\x0a\x09side = #left ifTrue: [^ self withLeft: (newPoint x min: corner x - minExtent x max: limit + minExtent x)].\x0a\x09side = #right ifTrue: [^ self withRight: (newPoint x min: limit - minExtent x max: origin x + minExtent x)].\x0a\x09side = #topLeft ifTrue: [^ (newPoint min: corner - minExtent) corner: self bottomRight].\x0a\x09side = #bottomRight ifTrue: [^ self topLeft corner: (newPoint max: origin + minExtent)].\x0a\x09side = #bottomLeft ifTrue: [^ self topRight rect: ((newPoint x min: corner x - minExtent x) @ (newPoint y max: origin y + minExtent y))].\x0a\x09side = #topRight ifTrue: [^ self bottomLeft rect: ((newPoint x max: origin x + minExtent x) @ (newPoint y min: corner y - minExtent y))].",
messageSends: ["ifTrue:", "withTop:", "min:max:", "-", "y", "+", "=", "withBottom:", "withLeft:", "x", "withRight:", "corner:", "bottomRight", "min:", "max:", "topLeft", "rect:", "@", "topRight", "bottomLeft"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withTop:",
category: 'rectangle functions',
fn: function (y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(y))._corner_(_st(_st(self["@corner"])._x()).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withTop:",{y:y},smalltalk.Rectangle)})},
args: ["y"],
source: "withTop: y \x0a\x09\x22Return a copy of me with a different top y\x22\x0a\x09^ origin x @ y corner: corner x @ corner y",
messageSends: ["corner:", "@", "y", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withWidth:",
category: 'rectangle functions',
fn: function (width){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(_st(_st(self["@origin"])._x()).__plus(width)).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withWidth:",{width:width},smalltalk.Rectangle)})},
args: ["width"],
source: "withWidth: width \x0a\x09\x22Return a copy of me with a different width\x22\x0a\x09^ origin corner: (origin x + width) @ corner y",
messageSends: ["corner:", "@", "y", "+", "x"],
referencedClasses: []
}),
smalltalk.Rectangle);


smalltalk.addMethod(
smalltalk.method({
selector: "center:extent:",
category: 'instance creation',
fn: function (centerPoint,extentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._origin_extent_(_st(centerPoint).__minus(_st(extentPoint).__slash_slash((2))),extentPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"center:extent:",{centerPoint:centerPoint,extentPoint:extentPoint},smalltalk.Rectangle.klass)})},
args: ["centerPoint", "extentPoint"],
source: "center: centerPoint extent: extentPoint \x0a\x09\x22Answer an instance of me whose center is centerPoint and width \x0a\x09by height is extentPoint.  \x22\x0a\x0a\x09^self origin: centerPoint - (extentPoint//2) extent: extentPoint",
messageSends: ["origin:extent:", "-", "//"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassing:",
category: 'instance creation',
fn: function (listOfPoints){
var self=this;
var topLeft,bottomRight;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
bottomRight=nil;
topLeft=bottomRight;
_st(listOfPoints)._do_((function(p){
return smalltalk.withContext(function($ctx2) {
$1=_st(topLeft).__eq_eq(nil);
if(smalltalk.assert($1)){
bottomRight=p;
topLeft=bottomRight;
return topLeft;
} else {
topLeft=_st(topLeft)._min_(p);
topLeft;
bottomRight=_st(bottomRight)._max_(p);
return bottomRight;
};
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1)})}));
$2=_st(topLeft)._corner_(bottomRight);
return $2;
}, function($ctx1) {$ctx1.fill(self,"encompassing:",{listOfPoints:listOfPoints,topLeft:topLeft,bottomRight:bottomRight},smalltalk.Rectangle.klass)})},
args: ["listOfPoints"],
source: "encompassing: listOfPoints \x0a\x09\x22A number of callers of encompass: should use this method.\x22\x0a\x09| topLeft bottomRight |\x0a\x09topLeft := bottomRight := nil.\x0a\x09listOfPoints do: \x0a\x09\x09[ :p | \x0a\x09\x09topLeft == nil \x0a\x09\x09\x09ifTrue: [ topLeft := bottomRight := p ]\x0a\x09\x09\x09ifFalse: \x0a\x09\x09\x09\x09[ topLeft := topLeft min: p.\x0a\x09\x09\x09\x09bottomRight := bottomRight max: p ] ].\x0a\x09^ topLeft corner: bottomRight",
messageSends: ["do:", "ifTrue:ifFalse:", "min:", "max:", "==", "corner:"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "left:right:top:bottom:",
category: 'instance creation',
fn: function (leftNumber,rightNumber,topNumber,bottomNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setOrigin_corner_(_st(leftNumber).__at(topNumber),_st(rightNumber).__at(bottomNumber));
return $1;
}, function($ctx1) {$ctx1.fill(self,"left:right:top:bottom:",{leftNumber:leftNumber,rightNumber:rightNumber,topNumber:topNumber,bottomNumber:bottomNumber},smalltalk.Rectangle.klass)})},
args: ["leftNumber", "rightNumber", "topNumber", "bottomNumber"],
source: "left: leftNumber right: rightNumber top: topNumber bottom: bottomNumber \x0a\x09\x22Answer an instance of me whose left, right, top, and bottom coordinates \x0a\x09are determined by the arguments.\x22\x0a\x0a\x09^ self basicNew setOrigin: leftNumber @ topNumber corner: rightNumber @ bottomNumber",
messageSends: ["setOrigin:corner:", "@", "basicNew"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "merging:",
category: 'instance creation',
fn: function (listOfRects){
var self=this;
var minX,minY,maxX,maxY;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(listOfRects)._do_((function(r){
return smalltalk.withContext(function($ctx2) {
$1=minX;
if(($receiver = $1) == nil || $receiver == undefined){
minX=_st(_st(r)._topLeft())._x();
minX;
minY=_st(_st(r)._topLeft())._y();
minY;
maxX=_st(_st(r)._bottomRight())._x();
maxX;
maxY=_st(_st(r)._bottomRight())._y();
return maxY;
} else {
minX=_st(minX)._min_(_st(_st(r)._topLeft())._x());
minX;
minY=_st(minY)._min_(_st(_st(r)._topLeft())._y());
minY;
maxX=_st(maxX)._max_(_st(_st(r)._bottomRight())._x());
maxX;
maxY=_st(maxY)._max_(_st(_st(r)._bottomRight())._y());
return maxY;
};
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
$2=_st(_st(minX).__at(minY))._corner_(_st(maxX).__at(maxY));
return $2;
}, function($ctx1) {$ctx1.fill(self,"merging:",{listOfRects:listOfRects,minX:minX,minY:minY,maxX:maxX,maxY:maxY},smalltalk.Rectangle.klass)})},
args: ["listOfRects"],
source: "merging: listOfRects \x0a\x09\x22A number of callers of merge: should use this method.\x22\x0a\x09| minX minY maxX maxY |\x0a\x09listOfRects do: \x0a\x09\x09[ :r | \x0a\x09\x09minX \x0a\x09\x09\x09ifNil: \x0a\x09\x09\x09\x09[ minX := r topLeft x.\x0a\x09\x09\x09\x09minY := r topLeft y.\x0a\x09\x09\x09\x09maxX := r bottomRight x.\x0a\x09\x09\x09\x09maxY := r bottomRight y ]\x0a\x09\x09\x09ifNotNil: \x0a\x09\x09\x09\x09[ minX := minX min: r topLeft x.\x0a\x09\x09\x09\x09minY := minY min: r topLeft y.\x0a\x09\x09\x09\x09maxX := maxX max: r bottomRight x.\x0a\x09\x09\x09\x09maxY := maxY max: r bottomRight y ] ].\x0a\x09^ minX @ minY corner: maxX @ maxY",
messageSends: ["do:", "ifNil:ifNotNil:", "x", "topLeft", "y", "bottomRight", "min:", "max:", "corner:", "@"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:corner:",
category: 'instance creation',
fn: function (originPoint,cornerPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setOrigin_corner_(originPoint,cornerPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin:corner:",{originPoint:originPoint,cornerPoint:cornerPoint},smalltalk.Rectangle.klass)})},
args: ["originPoint", "cornerPoint"],
source: "origin: originPoint corner: cornerPoint \x0a\x09\x22Answer an instance of me whose corners (top left and bottom right) are \x0a\x09determined by the arguments.\x22\x0a\x0a\x09^self basicNew setOrigin: originPoint corner: cornerPoint",
messageSends: ["setOrigin:corner:", "basicNew"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:extent:",
category: 'instance creation',
fn: function (originPoint,extentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setOrigin_corner_(originPoint,_st(originPoint).__plus(extentPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin:extent:",{originPoint:originPoint,extentPoint:extentPoint},smalltalk.Rectangle.klass)})},
args: ["originPoint", "extentPoint"],
source: "origin: originPoint extent: extentPoint \x0a\x09\x22Answer an instance of me whose top left corner is originPoint and width \x0a\x09by height is extentPoint.\x22\x0a\x0a\x09^self basicNew setOrigin: originPoint corner: originPoint + extentPoint",
messageSends: ["setOrigin:corner:", "+", "basicNew"],
referencedClasses: []
}),
smalltalk.Rectangle.klass);


smalltalk.addClass('Symbol', smalltalk.String, [], 'Roassal-Amber-Extensions');


smalltalk.addMethod(
smalltalk.method({
selector: "assert:",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "isColor",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isColor",{},smalltalk.Object)})},
args: [],
source: "isColor\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isPoint",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "min",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inject_into_(self._first(),(function(min,each){
return smalltalk.withContext(function($ctx2) {
return _st(min)._min_(each);
}, function($ctx2) {$ctx2.fillBlock({min:min,each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"min",{},smalltalk.Collection)})},
args: [],
source: "min\x0a\x09^ self inject: self first into: [:min :each | min min: each]",
messageSends: ["inject:into:", "first", "min:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "removeAllSuchThat:",
category: '*Roassal-Amber-Extensions',
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
selector: "select:thenCollect:",
category: '*Roassal-Amber-Extensions',
fn: function (selectBlock,collectBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._select_(selectBlock))._collect_(collectBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock},smalltalk.Collection)})},
args: ["selectBlock", "collectBlock"],
source: "select: selectBlock thenCollect: collectBlock\x0a\x09\x22Utility method to improve readability.\x22\x0a\x0a\x09^ (self select: selectBlock) collect: collectBlock",
messageSends: ["collect:", "select:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "sum:",
category: '*Roassal-Amber-Extensions',
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
selector: "with:collect:",
category: '*Roassal-Amber-Extensions',
fn: function (otherCollection,twoArgBlock){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(otherCollection)._size()).__eq(self._size());
if(! smalltalk.assert($1)){
self._error_("otherCollection must be the same size");
};
result=_st(self._class())._new_(self._size());
(1)._to_do_(self._size(),(function(index){
return smalltalk.withContext(function($ctx2) {
return _st(result)._addLast_(_st(twoArgBlock)._value_value_(self._at_(index),_st(otherCollection)._at_(index)));
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"with:collect:",{otherCollection:otherCollection,twoArgBlock:twoArgBlock,result:result},smalltalk.Collection)})},
args: ["otherCollection", "twoArgBlock"],
source: "with: otherCollection collect: twoArgBlock \x0a\x09\x22Collect and return the result of evaluating twoArgBlock with \x0a\x09corresponding elements from this collection and otherCollection.\x22\x0a\x09| result |\x0a\x09otherCollection size = self size ifFalse: [self error: 'otherCollection must be the same size'].\x0a\x09result := self class new: self size.\x0a\x091 to: self size do:\x0a\x09\x09[:index | result addLast: (twoArgBlock value: (self at: index)\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09value: (otherCollection at: index))].\x0a\x09^ result",
messageSends: ["ifFalse:", "error:", "=", "size", "new:", "class", "to:do:", "addLast:", "value:value:", "at:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "doWithIndex:",
category: '*Roassal-Amber-Extensions',
fn: function (aBlock2){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
index=(0);
self._do_((function(item){
return smalltalk.withContext(function($ctx2) {
index=_st(index).__plus((1));
return _st(aBlock2)._value_value_(item,index);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doWithIndex:",{aBlock2:aBlock2,index:index},smalltalk.HashedCollection)})},
args: ["aBlock2"],
source: "doWithIndex: aBlock2\x0a\x09\x22Support Set enumeration with a counter, even though not ordered\x22\x0a\x09| index |\x0a\x09index := 0.\x0a\x09self do: [:item | aBlock2 value: item value: (index := index+1)]",
messageSends: ["do:", "value:value:", "+"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifAbsentPut:",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "doWithIndex:",
category: '*Roassal-Amber-Extensions',
fn: function (elementAndIndexBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._withIndexDo_(elementAndIndexBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"doWithIndex:",{elementAndIndexBlock:elementAndIndexBlock},smalltalk.SequenceableCollection)})},
args: ["elementAndIndexBlock"],
source: "doWithIndex: elementAndIndexBlock\x0a\x09\x22Use the new version with consistent naming\x22\x0a\x09^ self withIndexDo: elementAndIndexBlock",
messageSends: ["withIndexDo:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "eighth",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((8));
return $1;
}, function($ctx1) {$ctx1.fill(self,"eighth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "eighth\x0a\x09^self at: 8",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "fifth",
category: '*Roassal-Amber-Extensions',
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
selector: "nineth",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((9));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nineth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "nineth\x0a\x09^self at: 9",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reverse",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "seventth",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((7));
return $1;
}, function($ctx1) {$ctx1.fill(self,"seventth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "seventth\x0a\x09^self at: 7",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "sixth",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((6));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sixth",{},smalltalk.SequenceableCollection)})},
args: [],
source: "sixth\x0a\x09^self at: 6",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "roValue:",
category: '*Roassal-Amber-Extensions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anObject:anObject},smalltalk.String)})},
args: ["anObject"],
source: "roValue: anObject \x0a\x09^ anObject perform: self",
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: '*Roassal-Amber-Extensions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.String)})},
args: ["anObject"],
source: "value: anObject \x0a\x09^ anObject perform: self",
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "between:and:",
category: '*Roassal-Amber-Extensions',
fn: function (min,max){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__gt_eq(min))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return self.__lt_eq(max);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"between:and:",{min:min,max:max},smalltalk.Number)})},
args: ["min", "max"],
source: "between: min and: max \x0a\x09\x22Answer whether the receiver is less than or equal to the argument, max, \x0a\x09and greater than or equal to the argument, min.\x22\x0a\x0a\x09^self >= min and: [self <= max]",
messageSends: ["and:", "<=", ">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "ceiling",
category: '*Roassal-Amber-Extensions',
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
selector: "cos",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.cos(self);
return self}, function($ctx1) {$ctx1.fill(self,"cos",{},smalltalk.Number)})},
args: [],
source: "cos\x0a\x09<return Math.cos(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "exp",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.exp(self);
return self}, function($ctx1) {$ctx1.fill(self,"exp",{},smalltalk.Number)})},
args: [],
source: "exp\x0a\x09<return Math.exp(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "floor",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.floor(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"floor",{},smalltalk.Number)})},
args: [],
source: "floor\x0a\x09\x0a\x09< return Math.floor(self); >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "fractionPart",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__minus(self._floor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fractionPart",{},smalltalk.Number)})},
args: [],
source: "fractionPart\x0a\x09^ self - (self floor)",
messageSends: ["-", "floor"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isInteger",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(self._asInteger());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInteger",{},smalltalk.Number)})},
args: [],
source: "isInteger\x0a\x09^ self = (self asInteger)",
messageSends: ["=", "asInteger"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "max:in:",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
selector: "quo:",
category: '*Roassal-Amber-Extensions',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__slash(aNumber))._truncated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"quo:",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "quo: aNumber \x0a\x09\x22Integer quotient defined by division with truncation toward zero. \x0a\x09\x0a\x09-9 quo: 4 = -2.\x0a\x09-0.9 quo: 0.4 = -2. \x0a\x09\x0a\x09rem: answers the remainder from this division.\x22\x0a\x0a\x09^(self / aNumber) truncated",
messageSends: ["truncated", "/"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "rem:",
category: '*Roassal-Amber-Extensions',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__minus(_st(self._quo_(aNumber)).__star(aNumber));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rem:",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "rem: aNumber \x0a\x09\x22Remainder defined in terms of quo:. Answer a Number with the same \x0a\x09sign as self. e.g. 9 rem: 4 = 1, -9 rem: 4 = -1. 0.9 rem: 0.4 = 0.1.\x22\x0a\x0a\x09^self - ((self quo: aNumber) * aNumber)",
messageSends: ["-", "*", "quo:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "roundUpTo:",
category: '*Roassal-Amber-Extensions',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self.__slash(aNumber))._ceiling()).__star(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roundUpTo:",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "roundUpTo: aNumber \x0a\x09\x22Answer the next multiple of aNumber toward infinity that is nearest the receiver.\x0a\x09Examples:\x0a               3.1479 roundUpTo: 0.01 -> 3.15\x0a               3.1479 roundUpTo: 0.1 -> 3.2\x0a               1923 roundUpTo: 10 -> 1930\x0a               3.1479 roundUpTo: 0.005 -> 3.15\x0a               -3.1479 roundUpTo: 0.01 -> -3.14\x22\x0a\x0a\x09^(self / aNumber) ceiling * aNumber",
messageSends: ["*", "ceiling", "/"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sin",
category: '*Roassal-Amber-Extensions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.sin(self);
return self}, function($ctx1) {$ctx1.fill(self,"sin",{},smalltalk.Number)})},
args: [],
source: "sin\x0a\x09<return Math.sin(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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
category: '*Roassal-Amber-Extensions',
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

