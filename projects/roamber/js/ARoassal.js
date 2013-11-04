smalltalk.addPackage('ARoassal');
smalltalk.addClass('Color', smalltalk.Object, ['r', 'g', 'b'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "b",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"b",{},smalltalk.Color)})},
args: [],
source: "b\x0a\x09^ b",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "brightness",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0.2126).__star(self["@r"])).__plus(_st((0.7152).__star(self["@g"])).__plus((0.0722).__star(self["@b"])));
return $1;
}, function($ctx1) {$ctx1.fill(self,"brightness",{},smalltalk.Color)})},
args: [],
source: "brightness\x0a\x09\x22 From http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color  \x22\x0a\x22\x09^ 0.2126*(self privateRed) + ( 0.7152*(self privateGreen)  + (0.0722*(self privateBlue)) )\x22\x0a\x09^ 0.2126*r + ( 0.7152*g  + (0.0722*b) )",
messageSends: ["+", "*"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanValue:",
category: 'not yet classified',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(anInteger).__gt((255));
if(smalltalk.assert($1)){
return (255);
} else {
$2=_st(anInteger).__lt((0));
if(smalltalk.assert($2)){
return (0);
};
};
$3=anInteger;
return $3;
}, function($ctx1) {$ctx1.fill(self,"cleanValue:",{anInteger:anInteger},smalltalk.Color)})},
args: ["anInteger"],
source: "cleanValue: anInteger\x0a\x09\x22 Clean for possible mistaken values\x22\x0a\x09(anInteger > 255) \x0a\x09\x09ifTrue: [^ 255]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09(anInteger < 0) ifTrue: [^ 0] ].\x0a\x09^ anInteger.",
messageSends: ["ifTrue:ifFalse:", "ifTrue:", "<", ">"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "g",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"g",{},smalltalk.Color)})},
args: [],
source: "g\x0a\x09^ g",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hue",
category: 'not yet classified',
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
selector: "privateBlue",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@b"]).__slash((255));
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateBlue",{},smalltalk.Color)})},
args: [],
source: "privateBlue\x0a\x09^ b/255.0",
messageSends: ["/"],
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
$1=_st(self["@g"]).__slash((255));
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateGreen",{},smalltalk.Color)})},
args: [],
source: "privateGreen\x0a\x09^ g/255.0",
messageSends: ["/"],
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
$1=_st(self["@r"]).__slash((255));
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateRed",{},smalltalk.Color)})},
args: [],
source: "privateRed\x0a\x09^ r/255.0",
messageSends: ["/"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"r",{},smalltalk.Color)})},
args: [],
source: "r\x0a\x09^ r",
messageSends: [],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
category: 'not yet classified',
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=self._cleanValue_(rVal);
self["@g"]=self._cleanValue_(gVal);
self["@b"]=self._cleanValue_(bVal);
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color)})},
args: ["rVal", "gVal", "bVal"],
source: "r: rVal g: gVal b: bVal\x0a\x09r :=  self cleanValue: rVal.\x0a\x09g :=  self cleanValue: gVal.\x0a\x09b:=  self cleanValue: bVal. \x0a\x09\x09\x09\x09",
messageSends: ["cleanValue:"],
referencedClasses: []
}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "saturation",
category: 'not yet classified',
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
fn: function (red,green,blue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=_st(red).__star((255));
self["@g"]=_st(green).__star((255));
self["@b"]=_st(blue).__star((255));
return self}, function($ctx1) {$ctx1.fill(self,"setRed:green:blue:",{red:red,green:green,blue:blue},smalltalk.Color)})},
args: ["red", "green", "blue"],
source: "setRed: red green: green blue: blue \x0a\x09\x22Initialize this color's r, g, and b components to the given values in the range [0.0..1.0]. \x22\x0a\x09r := red * 255.0.\x0a\x09g := green * 255.0.\x0a\x09b := blue * 255.0.",
messageSends: ["*"],
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
$1=_st(self._new())._r_g_b_((0),(0),(255));
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
args: [],
source: "blue\x0a\x09^ self new r: 0 g: 0 b: 255",
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
$1=_st(self._new())._r_g_b_((0),(255),(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
args: [],
source: "green\x0a\x09^ self new r: 0 g: 255 b: 0",
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
$1=_st(self._new())._r_g_b_((211),(211),(211));
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightGray",{},smalltalk.Color.klass)})},
args: [],
source: "lightGray\x0a\x09^ self new r: 211 g: 211 b: 211",
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
$1=_st(self._new())._r_g_b_(rVal,gVal,bVal);
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color.klass)})},
args: ["rVal", "gVal", "bVal"],
source: "r: rVal g: gVal b: bVal\x0a\x09^ self new r: rVal g: gVal b: bVal.",
messageSends: ["r:g:b:", "new"],
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
$1=_st(self._new())._r_g_b_((255),(0),(0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
args: [],
source: "red\x0a\x09^ self new r: 255 g: 0 b: 0",
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
selector: "wheel:from:to:",
category: 'not yet classified',
fn: function (thisMany,colorA,colorB){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"wheel:from:to:",{thisMany:thisMany,colorA:colorA,colorB:colorB},smalltalk.Color.klass)})},
args: ["thisMany", "colorA", "colorB"],
source: "wheel: thisMany from: colorA to: colorB\x0a\x09\x22Returns an array of thisMany colors starting from colorA to colorB \x22\x0a\x09",
messageSends: [],
referencedClasses: []
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
$1=_st(self._new())._r_g_b_((255),(255),(255));
return $1;
}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
args: [],
source: "white\x0a\x09^ self new r: 255 g: 255 b: 255",
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
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1;
s=_st(aShape)._installedOn_(self);
_st($Transcript())._show_(_st(_st(_st(_st(_st(s)._width())._asString()).__comma("-BEFOREinstalledOn:-")).__comma(_st(_st(s)._class())._asString())).__comma(_st($String())._cr()));
$1=_st(self._shape())._isNil();
if(! smalltalk.assert($1)){
_st(s)._width_(_st(self._shape())._width());
_st(s)._height_(_st(self._shape())._height());
};
_st($Transcript())._show_(_st(_st(_st(_st(_st(s)._width())._asString()).__comma("-AFTERinstalledOn:-")).__comma(_st(_st(s)._class())._asString())).__comma(_st($String())._cr()));
self["@shape"]=s;
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aShape:aShape,s:s},smalltalk.ROAbstractComponent)})},
args: ["aShape"],
source: "addShape: aShape \x0a\x09\x22Add a shape to myself. aShape could either be an instance of a shape class or simply a class\x22\x0a\x0a\x09| s |\x0a\x09s := (aShape installedOn: self).\x0a\x22\x09s addLast: shape.\x22\x0a\x09Transcript show: (s width asString),'-BEFOREinstalledOn:-',(s class asString),(String cr).\x0a\x09\x22 set height and width from previous shape <--- needs to be changed when implementing chain of shapes \x22\x0a\x09self shape isNil ifFalse: [\x0a\x09\x09s width: self shape width.\x0a\x09\x09s height: self shape height.\x09\x0a\x09].\x0a\x09Transcript show: (s width asString),'-AFTERinstalledOn:-',(s class asString),(String cr).\x0a\x09shape := s.",
messageSends: ["installedOn:", "show:", ",", "cr", "asString", "class", "width", "ifFalse:", "width:", "shape", "height:", "height", "isNil"],
referencedClasses: ["String", "Transcript"]
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
source: "extent: aPoint \x0a\x09(aPoint = self extent) ifTrue: [ ^ self ].\x0a\x22\x09self announce: ROElementResized.\x22\x0a\x09shape extent: aPoint",
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
$1=_st(self["@shape"])._heightFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROElement)})},
args: [],
source: "height\x0a\x09^ shape heightFor: self",
messageSends: ["heightFor:"],
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
$1=_st(self["@shape"])._widthFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROElement)})},
args: [],
source: "width\x0a\x09^ shape widthFor: self",
messageSends: ["widthFor:"],
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


smalltalk.addClass('ROShape', smalltalk.ROObject, ['svgElement', 'height', 'width', 'color'], 'ARoassal');
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
selector: "color:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.ROShape)})},
args: ["aColor"],
source: "color:\x09 aColor\x0a\x09color := aColor.\x0a\x0a\x09",
messageSends: [],
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
fn: function (element) {
var self=this;
var res;
return smalltalk.withContext(function($ctx1) { var $1;
res=_st(_st(self["@width"])._roValue_(element)).__at(_st(self["@height"])._roValue_(element));
$1=res;
return $1;
}, function($ctx1) {$ctx1.fill(self,"extentFor:",{element:element,res:res},smalltalk.ROShape)});},
args: ["element"],
source: "extentFor: element\x0a\x09\x22Return the extent of element\x22\x0a\x09\x0a\x09| res |\x0a\x09\x22\x0a\x09(widthCache notNil and: [ heightCache notNil ]) ifTrue: [ ^ widthCache @ heightCache ].\x0a\x09\x22\x0a\x09\x22res := ((width roValue: element) @ (height roValue: element)) max: (next extentFor: element).\x22\x0a\x09res := ((width roValue: element) @ (height roValue: element)) .\x0a\x09\x22\x0a\x09widthCache := res x.\x0a\x09heightCache := res y.\x0a\x09\x22\x0a\x09^ res",
messageSends: ["@", "roValue:"],
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st("rgb(".__comma(_st(_st(self["@color"])._r())._asString())).__comma(",")).__comma(_st(_st(self["@color"])._g())._asString())).__comma(",")).__comma(_st(_st(self["@color"])._b())._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbColor",{},smalltalk.ROShape)})},
args: [],
source: "rgbColor\x0a\x09^ 'rgb(',(color r asString),',',(color g asString),',',(color b asString),')'.  \x0a\x0a\x09",
messageSends: [",", "asString", "b", "g", "r"],
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


smalltalk.addClass('ROAbstractLineShape', smalltalk.ROShape, ['attachPoint'], 'ARoassal');
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09attachPoint := ROShorterDistanceAttachPoint instance.\x0a\x22\x09strokeWidth := self defaultWidth.\x0a\x09arrows := OrderedCollection new\x22",
messageSends: ["initialize", "instance"],
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
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anEdge:anEdge,maxArrowSize:maxArrowSize,unit:unit,startingPoint:startingPoint,endingPoint:endingPoint,rawStartingPoint:rawStartingPoint,rawEndingPoint:rawEndingPoint},smalltalk.ROLine)})},
args: ["canvas", "anEdge"],
source: "updateSVGElementOn: canvas for: anEdge\x0a\x09| maxArrowSize unit startingPoint endingPoint rawStartingPoint rawEndingPoint |\x0a\x09rawEndingPoint  := attachPoint startingPointOf: anEdge.\x0a\x09rawStartingPoint := attachPoint endingPointOf: anEdge.\x0a\x0a\x09(rawStartingPoint = rawEndingPoint)\x0a\x09\x09ifTrue: [ ^ self ].\x0a\x0a\x22\x09Transcript show: 'x1 ', x,' y1', y, ' x2 ', z, ' y2 ', w, (String cr).\x22\x0a\x0a\x09svgElement attr: 'path' with: 'M', ( rawEndingPoint x asInteger),' ',  (rawEndingPoint y asInteger), 'L', ( rawStartingPoint x asInteger), ' ', ( rawStartingPoint y asInteger) .\x0a\x0a\x0a\x09\x0a\x22\x09x1 := anEdge from position x.\x0a\x09y1 := anEdge from position y.\x0a\x0a\x09x2 := anEdge to position x.\x0a\x09y2 := anEdge to position y.\x0a\x09\x0a\x09svgElement attr: 'path' with: 'M', x1,' ', y1, 'L', x2, ' ', y2 .\x22\x0a\x09\x0a\x09\x22We draw a line before each arrow\x22\x0a\x22\x09\x0a\x09arrows do: [ :arrow | \x0a\x09\x09| arr |\x0a\x09\x09arr := arrow drawOn: aCanvas for: anEdge line: self.\x0a\x09\x09aCanvas \x0a\x09\x09\x09line: rawStartingPoint \x0a\x09\x09\x09to: arr first \x0a\x09\x09\x09width: (self widthFor: anEdge) \x0a\x09\x09\x09color: (self colorFor: anEdge).\x0a\x09\x09rawStartingPoint := arr second.\x0a\x09\x09 ].\x0a\x22\x09\x0a\x09\x22We draw a line after the arrow\x22\x0a\x22\x09aCanvas line: rawStartingPoint to: rawEndingPoint width: (self widthFor: anEdge) color: (self colorFor: anEdge).\x22",
messageSends: ["startingPointOf:", "endingPointOf:", "ifTrue:", "=", "attr:with:", ",", "asInteger", "y", "x"],
referencedClasses: []
}),
smalltalk.ROLine);



smalltalk.addClass('ROAbstractPathShape', smalltalk.ROShape, [], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "centeringPath:into:",
category: 'not yet classified',
fn: function (svgPath,svgRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgPath)._attr_value_("x",_st(_st(_st(svgRect)._attr_("width")).__slash((2)))._asInteger());
_st(svgPath)._attr_value_("y",_st(_st(_st(svgRect)._attr_("height")).__slash((2)))._asInteger());
return self}, function($ctx1) {$ctx1.fill(self,"centeringPath:into:",{svgPath:svgPath,svgRect:svgRect},smalltalk.ROAbstractPathShape)})},
args: ["svgPath", "svgRect"],
source: "centeringPath: svgPath into: svgRect\x0a\x09svgPath attr: 'x' value: ((svgRect attr: 'width') / 2) asInteger.\x0a\x09svgPath attr: 'y' value: ((svgRect attr: 'height') / 2) asInteger.",
messageSends: ["attr:value:", "asInteger", "/", "attr:"],
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
self._resizeContainer_for_(svgRect,svgPath);
self._centeringPath_into_(svgPath,svgRect);
self._createSetWith_and_on_for_(svgRect,svgPath,canvas,anElement);
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement,svgRect:svgRect,svgPath:svgPath},smalltalk.ROAbstractPathShape)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09| svgRect svgPath |\x0a\x09\x0a\x09svgRect := self initializeContainterOn: canvas for: anElement.\x0a\x09svgPath := self initializePathOn: canvas for: anElement.\x0a\x09\x0a\x09self resizeContainer: svgRect for: svgPath. \x0a\x09self centeringPath: svgPath into: svgRect.\x0a\x09self createSetWith: svgRect and: svgPath on: canvas for: anElement.",
messageSends: ["initializeContainterOn:for:", "initializePathOn:for:", "resizeContainer:for:", "centeringPath:into:", "createSetWith:and:on:for:"],
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
selector: "resizeContainer:for:",
category: 'not yet classified',
fn: function (svgRect,svgPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:",{svgRect:svgRect,svgPath:svgPath},smalltalk.ROAbstractPathShape)})},
args: ["svgRect", "svgPath"],
source: "resizeContainer: svgRect for: svgPath\x0a\x09self subclassResponsibility",
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



smalltalk.addClass('ROLabel', smalltalk.ROAbstractPathShape, ['text'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "centeringPath:into:",
category: 'not yet classified',
fn: function (svgPath,svgRect){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROLabel.superclass.fn.prototype._centeringPath_into_.apply(_st(self), [svgPath,svgRect]);
_st(svgPath)._attr_value_("text-anchor","middle");
return self}, function($ctx1) {$ctx1.fill(self,"centeringPath:into:",{svgPath:svgPath,svgRect:svgRect},smalltalk.ROLabel)})},
args: ["svgPath", "svgRect"],
source: "centeringPath: svgPath into: svgRect\x0a\x09super centeringPath: svgPath into: svgRect.\x0a\x09svgPath  attr: 'text-anchor' value: 'middle'.\x0a\x0a\x09",
messageSends: ["centeringPath:into:", "attr:value:"],
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
selector: "resizeContainer:for:",
category: 'not yet classified',
fn: function (svgRect,svgPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgRect)._attr_value_("width",self._width());
_st(svgRect)._attr_value_("height",_st(self._textHeight()).__plus(_st(self._padding()).__star((2))));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:",{svgRect:svgRect,svgPath:svgPath},smalltalk.ROLabel)})},
args: ["svgRect", "svgPath"],
source: "resizeContainer: svgRect for: svgPath \x0a\x09svgRect attr: 'width'  value: (self width).\x0a\x09svgRect attr: 'height' value: self textHeight + (self padding * 2).",
messageSends: ["attr:value:", "width", "+", "*", "padding", "textHeight"],
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


smalltalk.addClass('ROTux', smalltalk.ROAbstractPathShape, [], 'ARoassal');
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
selector: "resizeContainer:for:",
category: 'not yet classified',
fn: function (svgRect,svgPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(svgRect)._attr_value_("width",(30));
_st(svgRect)._attr_value_("height",(33));
return self}, function($ctx1) {$ctx1.fill(self,"resizeContainer:for:",{svgRect:svgRect,svgPath:svgPath},smalltalk.ROTux)})},
args: ["svgRect", "svgPath"],
source: "resizeContainer: svgRect for: svgPath\x0a\x09svgRect attr: 'width'  value: 30.\x0a\x09svgRect attr: 'height' value: 33.",
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
$2=_st($1)._attr_with_("fill",self._rgbColor());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROBox)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x09\x09attr: 'x' with: (anElement position x);\x0a\x09\x09attr: 'y' with: (anElement position y);\x0a\x09\x09attr: 'width' with: ((self widthFor: anElement ) max: (self defaultSize));\x0a\x09\x09attr: 'height' with: ((self heightFor: anElement) max: (self defaultSize));\x0a\x09\x09attr:'fill' with: (self rgbColor).\x0a\x09\x09",
messageSends: ["attr:with:", "x", "position", "y", "max:", "defaultSize", "widthFor:", "heightFor:", "rgbColor"],
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



smalltalk.addClass('ROCircle', smalltalk.ROShape, ['radius'], 'ARoassal');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultRadius",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return (10);
}, function($ctx1) {$ctx1.fill(self,"defaultRadius",{},smalltalk.ROCircle)});},
args: [],
source: "defaultRadius\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);

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
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROCircle)})},
args: [],
source: "height\x0a\x09^ self radius * 2.",
messageSends: ["*", "radius"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCircle.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@radius"]=self._defaultRadius();
self["@width"]=_st(self._defaultRadius()).__star((1.5));
self["@height"]=_st(self._defaultRadius()).__star((1.5));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCircle)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09radius := self defaultRadius.\x0a\x09width := self defaultRadius * 1.5.\x0a\x09height := self defaultRadius * 1.5.\x0a\x09\x0a\x09",
messageSends: ["initialize", "defaultRadius", "*"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(canvas)._circle_y_r_(_st(_st(anElement)._position())._x(),_st(_st(anElement)._position())._y(),self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"initializeSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
args: ["canvas", "anElement"],
source: "initializeSVGElementOn: canvas for: anElement\x0a\x09svgElement := canvas \x0a\x09\x09circle: (anElement position x)\x0a\x09\x09y: (anElement position y) \x0a\x09\x09r: (self radius) .\x0a\x0a\x09",
messageSends: ["circle:y:r:", "x", "position", "y", "radius"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
category: 'drawing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@radius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"radius",{},smalltalk.ROCircle)});},
args: [],
source: "radius\x0a\x09^ radius",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
category: 'drawing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@radius"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"radius:",{anInteger:anInteger},smalltalk.ROCircle)})},
args: ["anInteger"],
source: "radius: anInteger\x0a\x09radius := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'drawing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._radius_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"size:",{anInteger:anInteger},smalltalk.ROCircle)})},
args: ["anInteger"],
source: "size: anInteger\x0a\x09self radius: anInteger",
messageSends: ["radius:"],
referencedClasses: []
}),
smalltalk.ROCircle);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSVGElementOn:for:",
category: 'drawing',
fn: function (canvas,anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@svgElement"];
_st($1)._attr_with_("cx",_st(_st(anElement)._position())._x());
_st($1)._attr_with_("cy",_st(_st(anElement)._position())._y());
_st($1)._attr_with_("r",self._radius());
$2=_st($1)._attr_with_("fill",self._rgbColor());
return self}, function($ctx1) {$ctx1.fill(self,"updateSVGElementOn:for:",{canvas:canvas,anElement:anElement},smalltalk.ROCircle)})},
args: ["canvas", "anElement"],
source: "updateSVGElementOn: canvas for: anElement\x0a\x09svgElement \x0a\x09\x09attr: 'cx' with: (anElement position x);\x0a\x09\x09attr: 'cy' with: (anElement position y);\x0a\x09\x09attr: 'r' with: (self radius);\x0a\x09\x09attr:'fill' with: (self rgbColor).",
messageSends: ["attr:with:", "x", "position", "y", "radius", "rgbColor"],
referencedClasses: []
}),
smalltalk.ROCircle);

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
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROCircle)})},
args: [],
source: "width\x0a\x09^ self radius * 2.",
messageSends: ["*", "radius"],
referencedClasses: []
}),
smalltalk.ROCircle);



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

