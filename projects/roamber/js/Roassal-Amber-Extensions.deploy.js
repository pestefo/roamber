smalltalk.addPackage('Roassal-Amber-Extensions');
smalltalk.addClass('AmberExtention', smalltalk.Object, [], 'Roassal-Amber-Extensions');


smalltalk.addClass('Color', smalltalk.Object, ['r', 'g', 'b', 'a'], 'Roassal-Amber-Extensions');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifTrue:", "~~", "class", "and:", "=", "alpha", "blue", "green", "red"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@a"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alpha",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "alpha:",
fn: function (aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@a"]=aVal;
return self}, function($ctx1) {$ctx1.fill(self,"alpha:",{aVal:aVal},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLRGB",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st("rgb(".__comma(_st(self["@r"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@g"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@b"]).__star((255)._asString()))).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHTMLRGB",{},smalltalk.Color)})},
messageSends: [",", "*", "asString"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "asHTMLRGBA",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st(_st(_st("rgba(".__comma(_st(self["@r"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@g"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@b"]).__star((255)._asString()))).__comma(",")).__comma(_st(self["@a"])._asString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asHTMLRGBA",{},smalltalk.Color)})},
messageSends: [",", "asString", "*"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "brightness",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st((0.2126).__star(self._privateRed())).__star((255))).__plus(_st(_st((0.7152).__star(self._privateGreen())).__star((255))).__plus(_st((0.0722).__star(self._privateBlue())).__star((255))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"brightness",{},smalltalk.Color)})},
messageSends: ["+", "*", "privateBlue", "privateGreen", "privateRed"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanValue:",
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
messageSends: ["ifTrue:ifFalse:", "ifTrue:", "<", ">"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "hue",
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
messageSends: ["privateRed", "privateGreen", "privateBlue", "max:", "min:", "asFloat", "-", "ifTrue:", "=", "ifTrue:ifFalse:", "*", "/", "+", "<"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "isColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isColor",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "privateBlue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@b"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateBlue",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "privateGreen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@g"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateGreen",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "privateRed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"privateRed",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setRed_green_blue_alpha_(rVal,gVal,bVal,(1));
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color)})},
messageSends: ["setRed:green:blue:alpha:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:a:",
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setRed_green_blue_alpha_(rVal,gVal,bVal,aVal);
return self}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color)})},
messageSends: ["setRed:green:blue:alpha:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@r"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color)})},
messageSends: []}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbTriplet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st(self["@r"])._copy(),_st(self["@g"])._copy(),_st(self["@b"])._copy()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbTriplet",{},smalltalk.Color)})},
messageSends: ["copy"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "rgbTriplet255",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st(_st(self["@r"])._copy()).__star((255)),_st(_st(self["@g"])._copy()).__star((255)),_st(_st(self["@b"])._copy()).__star((255))];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rgbTriplet255",{},smalltalk.Color)})},
messageSends: ["*", "copy"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "saturation",
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
messageSends: ["privateRed", "privateGreen", "privateBlue", "ifTrue:", ">", "<", "ifTrue:ifFalse:", "/", "asFloat", "-", "="]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "setHue:saturation:brightness:",
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
messageSends: ["min:", "max:", "asFloat", "ifTrue:", "setRed:green:blue:", "=", "-", "*", "quo:", "or:", ">=", "<", "/", "asInteger", "fractionPart", "error:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "setRed:green:blue:",
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._setRed_green_blue_alpha_(rVal,gVal,bVal,(1));
return self}, function($ctx1) {$ctx1.fill(self,"setRed:green:blue:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color)})},
messageSends: ["setRed:green:blue:alpha:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "setRed:green:blue:alpha:",
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@r"]=self._cleanValue_(rVal);
self["@g"]=self._cleanValue_(gVal);
self["@b"]=self._cleanValue_(bVal);
self["@a"]=self._cleanValue_(aVal);
return self}, function($ctx1) {$ctx1.fill(self,"setRed:green:blue:alpha:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color)})},
messageSends: ["cleanValue:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:",
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
messageSends: ["saturation", "brightness", "hue", "/", "max:", "collect:", "h:s:v:", "+", "to:"]}),
smalltalk.Color);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:to:",
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
messageSends: ["saturation", "brightness", "hue", "/", "max:", "-", "collect:", "h:s:v:", "+", "to:"]}),
smalltalk.Color);


smalltalk.Color.klass.iVarNames = ['colorDict'];
smalltalk.addMethod(
smalltalk.method({
selector: "black",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("black");
return $1;
}, function($ctx1) {$ctx1.fill(self,"black",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "blue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@colorDict"])._at_("blue");
return $1;
}, function($ctx1) {$ctx1.fill(self,"blue",{},smalltalk.Color.klass)})},
messageSends: ["at:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "brown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("brown");
return $1;
}, function($ctx1) {$ctx1.fill(self,"brown",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "colorDict",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@colorDict"];
if(($receiver = $2) == nil || $receiver == undefined){
self._initializeColorRegistry();
$1=self["@colorDict"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorDict",{},smalltalk.Color.klass)})},
messageSends: ["ifNil:", "initializeColorRegistry"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "cyan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("cyan");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cyan",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["black",(0),(0),(0),"veryVeryDarkGray",(0.125),(0.125),(0.125),"veryDarkGray",(0.25),(0.25),(0.25),"darkGray",(0.375),(0.375),(0.375),"gray",(0.5),(0.5),(0.5),"lightGray",(0.625),(0.625),(0.625),"veryLightGray",(0.75),(0.75),(0.75),"veryVeryLightGray",(0.875),(0.875),(0.875),"white",(1),(1),(1)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColors",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColors2",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["red",(1),(0),(0),"yellow",(1),(1),(0),"green",(0),(1),(0),"cyan",(0),(1),(1),"blue",(0),(0),(1),"magenta",(1),(0),(1),"brown",(0.6),(0.2),(0),"orange",(1),(0.6),(0),"lightRed",(1),(0.8),(0.8)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColors2",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColors3",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["lightYellow",(1),(1),(0.8),"lightGreen",(0.8),(1),(0.6),"lightCyan",(0.4),(1),(1),"lightBlue",(0.8),(1),(1),"lightMagenta",(1),(0.8),(1),"lightBrown",(1),(0.6),(0.2),"lightOrange",(1),(0.8),(0.4),"pink",(1),(0.752899),(0.796118),"purple",(0.4),(0),(0.6),"tan",(0.8),(0.8),(0.5),"veryPaleRed",(1),(0.948),(0.948),"paleYellow",(1),(1),(0.85),"paleTan",(0.921),(0.878),(0.78)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColors3",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColors4",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["paleRed",(1),(0.901),(0.901),"palePeach",(1),(0.929),(0.835),"paleOrange",(0.991),(0.929),(0.843),"paleMagenta",(1),(0.901),(1),"paleGreen",(0.874),(1),(0.835),"paleBuff",(0.995),(0.979),(0.921),"paleBlue",(0.87),(0.976),(0.995)];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColors4",{},smalltalk.Color.klass)})},
messageSends: []}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("gray");
return $1;
}, function($ctx1) {$ctx1.fill(self,"gray",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "gray:",
fn: function (brightness){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._r_g_b_(brightness,brightness,brightness);
return $1;
}, function($ctx1) {$ctx1.fill(self,"gray:",{brightness:brightness},smalltalk.Color.klass)})},
messageSends: ["r:g:b:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("green");
return $1;
}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "h:s:v:",
fn: function (hue,saturation,brightness){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setHue_saturation_brightness_(hue,saturation,brightness);
return $1;
}, function($ctx1) {$ctx1.fill(self,"h:s:v:",{hue:hue,saturation:saturation,brightness:brightness},smalltalk.Color.klass)})},
messageSends: ["setHue:saturation:brightness:", "basicNew"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeColorRegistry",
fn: function (){
var self=this;
var values;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@colorDict"]=_st($IdentityDictionary())._new();
values=_st(_st(_st(self._defaultColors()).__comma(self._defaultColors2())).__comma(self._defaultColors3())).__comma(self._defaultColors4());
(1)._to_by_do_(_st(values)._size(),["name", "r", "g", "b"]._size(),(function(index){
var colorName,red,green,blue,color;
return smalltalk.withContext(function($ctx2) {
colorName=_st(values)._at_(index);
colorName;
red=_st(values)._at_(_st(index).__plus((1)));
red;
green=_st(values)._at_(_st(index).__plus((2)));
green;
blue=_st(values)._at_(_st(index).__plus((3)));
blue;
color=self._r_g_b_(red,green,blue);
color;
return self._registerColor_named_(color,colorName);
}, function($ctx2) {$ctx2.fillBlock({index:index,colorName:colorName,red:red,green:green,blue:blue,color:color},$ctx1)})}));
self._registerColor_named_(self._r_g_b_alpha_((0),(0),(0),(0)),"transparent");
return self}, function($ctx1) {$ctx1.fill(self,"initializeColorRegistry",{values:values},smalltalk.Color.klass)})},
messageSends: ["new", ",", "defaultColors4", "defaultColors3", "defaultColors2", "defaultColors", "to:by:do:", "size", "at:", "+", "r:g:b:", "registerColor:named:", "r:g:b:alpha:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightBlue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightBlue");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightBlue",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightBrown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightBrown");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightBrown",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightCyan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightCyan");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightCyan",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightGray");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightGray",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightGreen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightGreen");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightGreen",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightMagenta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightMagenta");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightMagenta",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightOrange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightOrange");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightOrange",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightRed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightRed");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightRed",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lightYellow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("lightYellow");
return $1;
}, function($ctx1) {$ctx1.fill(self,"lightYellow",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "magenta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("magenta");
return $1;
}, function($ctx1) {$ctx1.fill(self,"magenta",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "orange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("orange");
return $1;
}, function($ctx1) {$ctx1.fill(self,"orange",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleBlue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleBlue");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleBlue",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleBuff",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleBuff");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleBuff",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleGreen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleGreen");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleGreen",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleMagenta",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleMagenta");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleMagenta",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleOrange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleOrange");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleOrange",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "palePeach",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("palePeach");
return $1;
}, function($ctx1) {$ctx1.fill(self,"palePeach",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleRed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleRed");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleRed",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleTan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleTan");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleTan",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "paleYellow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("paleYellow");
return $1;
}, function($ctx1) {$ctx1.fill(self,"paleYellow",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pink",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("pink");
return $1;
}, function($ctx1) {$ctx1.fill(self,"pink",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "purple",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("purple");
return $1;
}, function($ctx1) {$ctx1.fill(self,"purple",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:",
fn: function (rVal,gVal,bVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._r_g_b_a_(rVal,gVal,bVal,(1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{rVal:rVal,gVal:gVal,bVal:bVal},smalltalk.Color.klass)})},
messageSends: ["r:g:b:a:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:a:",
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._r_g_b_a_(rVal,gVal,bVal,aVal);
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:a:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color.klass)})},
messageSends: ["r:g:b:a:", "new"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "r:g:b:alpha:",
fn: function (rVal,gVal,bVal,aVal){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._r_g_b_a_(rVal,gVal,bVal,aVal);
return $1;
}, function($ctx1) {$ctx1.fill(self,"r:g:b:alpha:",{rVal:rVal,gVal:gVal,bVal:bVal,aVal:aVal},smalltalk.Color.klass)})},
messageSends: ["r:g:b:a:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("red");
return $1;
}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "registerColor:named:",
fn: function (aColor,aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@colorDict"])._at_put_(aName,aColor);
return self}, function($ctx1) {$ctx1.fill(self,"registerColor:named:",{aColor:aColor,aName:aName},smalltalk.Color.klass)})},
messageSends: ["at:put:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("tan");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tan",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "transparent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("transparent");
return $1;
}, function($ctx1) {$ctx1.fill(self,"transparent",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryDarkGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("veryDarkGray");
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryDarkGray",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryLightGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("veryLightGray");
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryLightGray",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryPaleRed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("veryPaleRed");
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryPaleRed",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryVeryDarkGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("veryVeryDarkGray");
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryVeryDarkGray",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "veryVeryLightGray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("veryVeryLightGray");
return $1;
}, function($ctx1) {$ctx1.fill(self,"veryVeryLightGray",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:",
fn: function (thisMany){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._wheel_saturation_brightness_(thisMany,(0.9),(0.7));
return $1;
}, function($ctx1) {$ctx1.fill(self,"wheel:",{thisMany:thisMany},smalltalk.Color.klass)})},
messageSends: ["wheel:saturation:brightness:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "wheel:saturation:brightness:",
fn: function (thisMany,s,v){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Color())._h_s_v_((0),s,v))._wheel_(thisMany);
return $1;
}, function($ctx1) {$ctx1.fill(self,"wheel:saturation:brightness:",{thisMany:thisMany,s:s,v:v},smalltalk.Color.klass)})},
messageSends: ["wheel:", "h:s:v:"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("white");
return $1;
}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "yellow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._colorDict())._at_("yellow");
return $1;
}, function($ctx1) {$ctx1.fill(self,"yellow",{},smalltalk.Color.klass)})},
messageSends: ["at:", "colorDict"]}),
smalltalk.Color.klass);


smalltalk.addClass('IdentityDictionary', smalltalk.Dictionary, [], 'Roassal-Amber-Extensions');


smalltalk.addClass('IdentitySet', smalltalk.Set, [], 'Roassal-Amber-Extensions');


smalltalk.addClass('Rectangle', smalltalk.Object, ['origin', 'corner'], 'Roassal-Amber-Extensions');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
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
messageSends: ["ifTrue:ifFalse:", "and:", "=", "corner", "origin", "species"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "aboveCenter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._topLeft()).__plus(self._bottomRight())).__slash_slash((2).__at((3)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"aboveCenter",{},smalltalk.Rectangle)})},
messageSends: ["//", "@", "+", "bottomRight", "topLeft"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "adjustTo:along:",
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
messageSends: ["ifTrue:", "withRight:", "left", "=", "withLeft:", "right", "withBottom:", "top", "withTop:", "bottom"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "align:with:",
fn: function (aPoint1,aPoint2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateBy_(_st(aPoint2).__minus(aPoint1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"align:with:",{aPoint1:aPoint1,aPoint2:aPoint2},smalltalk.Rectangle)})},
messageSends: ["translateBy:", "-"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "allAreasOutsideList:do:",
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._allAreasOutsideList_startingAt_do_(aCollection,(1),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"allAreasOutsideList:do:",{aCollection:aCollection,aBlock:aBlock},smalltalk.Rectangle)})},
messageSends: ["allAreasOutsideList:startingAt:do:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "allAreasOutsideList:startingAt:do:",
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
messageSends: ["whileFalse:", "+", "ifFalse:", "value:", "<=", "size", "at:", "and:", "origin", "corner", "ifTrue:ifFalse:", "corner:", "@", "y", "x", "allAreasOutsideList:startingAt:do:", ">", "<", "ifTrue:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "amountToTranslateWithin:",
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
messageSends: ["ifTrue:", "-", "right", ">", "bottom", "left", "<", "+", "top", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "area",
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
messageSends: ["ifTrue:", "<=", "width", "max:", "*", "height"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "areasOutside:",
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
messageSends: ["ifFalse:", "with:", "intersects:", "new", "ifTrue:ifFalse:", "addLast:", "corner:", "@", "y", "origin", "x", ">", "corner", "<", "ifTrue:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bordersOn:along:",
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
messageSends: ["ifTrue:", "<", "min:", "bottom", "max:", "top", "|", "and:", "=", "left", "right"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom",{},smalltalk.Rectangle)})},
messageSends: ["y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottom:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(_st(self["@corner"])._x()).__at(aNumber));
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottom:",{aNumber:aNumber},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomCenter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._center())._x()).__at(self._bottom());
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomCenter",{},smalltalk.Rectangle)})},
messageSends: ["@", "bottom", "x", "center"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._x()).__at(_st(self["@corner"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomLeft",{},smalltalk.Rectangle)})},
messageSends: ["@", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomRight",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "boundingBox",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"boundingBox",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "ceiling",
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
messageSends: ["ifTrue:", "isIntegerRectangle", "corner:", "ceiling"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._topLeft()).__plus(self._bottomRight())).__slash_slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.Rectangle)})},
messageSends: ["//", "+", "bottomRight", "topLeft"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "centeredBeneath:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._align_with_(self._topCenter(),_st(aRectangle)._bottomCenter());
return $1;
}, function($ctx1) {$ctx1.fill(self,"centeredBeneath:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
messageSends: ["align:with:", "topCenter", "bottomCenter"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "compressTo:",
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._roundUpTo_(grid),_st(self["@corner"])._roundDownTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"compressTo:",{grid:grid},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "roundUpTo:", "roundDownTo:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "compressed",
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._ceiling(),_st(self["@corner"])._floor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"compressed",{},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "ceiling", "floor"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "containsPoint:",
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
messageSends: ["and:", "<", "<="]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "containsRect:",
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
messageSends: ["and:", "<=", "corner", ">=", "origin"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corner",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@corner"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"corner",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "corners",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Array())._with_with_with_with_(self._topLeft(),self._bottomLeft(),self._bottomRight(),self._topRight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"corners",{},smalltalk.Rectangle)})},
messageSends: ["with:with:with:with:", "topLeft", "bottomLeft", "bottomRight", "topRight"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "deltaToEnsureInOrCentered:extra:",
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
messageSends: ["truncated", "*", "-", "width", "height", "ifTrue:ifFalse:", "left", "ifTrue:", "+", "right", ">", "<", "top", "bottom", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "encompass:",
fn: function (aPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._min_(aPoint),_st(self["@corner"])._max_(aPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompass:",{aPoint:aPoint},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "min:", "max:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "expandBy:",
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
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "-", "origin", "+", "corner", "isRectangle"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "expandTo:",
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._roundDownTo_(grid),_st(self["@corner"])._roundUpTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"expandTo:",{grid:grid},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "roundDownTo:", "roundUpTo:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "expanded",
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._floor(),_st(self["@corner"])._ceiling());
return $1;
}, function($ctx1) {$ctx1.fill(self,"expanded",{},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "floor", "ceiling"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "extendBy:",
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
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "+", "corner", "isRectangle"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"]).__minus(self["@origin"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.Rectangle)})},
messageSends: ["-"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "flipBy:centerAt:",
fn: function (direction,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._flipBy_centerAt_(direction,aPoint))._rect_(_st(self["@corner"])._flipBy_centerAt_(direction,aPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"flipBy:centerAt:",{direction:direction,aPoint:aPoint},smalltalk.Rectangle)})},
messageSends: ["rect:", "flipBy:centerAt:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "floor",
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
messageSends: ["ifTrue:", "isIntegerRectangle", "corner:", "floor"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "forPoint:closestSideDistLen:",
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
messageSends: ["sideNearestTo:", "ifTrue:", "value:value:value:", "abs", "-", "x", "right", "ifTrue:ifFalse:", "height", "between:and:", "top", "bottom", "y", "==", "left", "width"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPositiveExtent",
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
messageSends: ["and:", ">", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "hash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._hash())._bitXor_(_st(self["@corner"])._hash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hash",{},smalltalk.Rectangle)})},
messageSends: ["bitXor:", "hash"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._y()).__minus(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.Rectangle)})},
messageSends: ["-", "y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "innerCorners",
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
messageSends: ["corner:", "-", "@", "bottomRight", "topLeft", "with:with:with:with:", "bottomLeft", "topRight"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "insetBy:",
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
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "+", "origin", "-", "corner", "isRectangle"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "insetOriginBy:cornerBy:",
fn: function (originDeltaPoint,cornerDeltaPoint){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__plus(originDeltaPoint),_st(self["@corner"]).__minus(cornerDeltaPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"insetOriginBy:cornerBy:",{originDeltaPoint:originDeltaPoint,cornerDeltaPoint:cornerDeltaPoint},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "+", "-"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "interpolateTo:at:",
fn: function (end,amountDone){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._origin())._interpolateTo_at_(_st(end)._origin(),amountDone))._corner_(_st(self._corner())._interpolateTo_at_(_st(end)._corner(),amountDone));
return $1;
}, function($ctx1) {$ctx1.fill(self,"interpolateTo:at:",{end:end,amountDone:amountDone},smalltalk.Rectangle)})},
messageSends: ["corner:", "interpolateTo:at:", "corner", "origin"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersect:",
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
messageSends: ["origin", "ifTrue:ifFalse:", "x", ">", "y", "corner", "<", "origin:corner:", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersect:ifNone:",
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
messageSends: ["ifFalse:", "value", "intersects:", "origin", "ifTrue:ifFalse:", "x", ">", "y", "corner", "<", "origin:corner:", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "intersects:",
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
messageSends: ["origin", "corner", "ifTrue:", "<=", "x", "y", ">="]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isIntegerRectangle",
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
messageSends: ["and:", "isIntegerPoint"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isRectangle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRectangle",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isSelfEvaluating",
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class()).__eq_eq($Rectangle());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSelfEvaluating",{},smalltalk.Rectangle)})},
messageSends: ["==", "class"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isTall",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._height()).__gt(self._width());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isTall",{},smalltalk.Rectangle)})},
messageSends: [">", "width", "height"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isWide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__gt(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isWide",{},smalltalk.Rectangle)})},
messageSends: [">", "height", "width"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "isZero",
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
messageSends: ["and:", "isZero"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.Rectangle)})},
messageSends: ["x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNumber).__at(_st(self["@origin"])._y()))._corner_(self["@corner"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"left:",{aNumber:aNumber},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCenter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._left()).__at(_st(self._center())._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftCenter",{},smalltalk.Rectangle)})},
messageSends: ["@", "y", "center", "left"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "merge:",
fn: function (aRectangle){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._min_(_st(aRectangle)._origin()),_st(self["@corner"])._max_(_st(aRectangle)._corner()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"merge:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "min:", "origin", "max:", "corner"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "origin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "outsetBy:",
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
messageSends: ["ifTrue:ifFalse:", "origin:corner:", "-", "origin", "+", "corner", "isRectangle"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "pointAtSideOrCorner:",
fn: function (loc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_(["topLeft", "topCenter", "topRight", "rightCenter", "bottomRight", "bottomCenter", "bottomLeft", "leftCenter"]._at_(["topLeft", "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left"]._indexOf_(loc)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointAtSideOrCorner:",{loc:loc},smalltalk.Rectangle)})},
messageSends: ["perform:", "at:", "indexOf:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "pointNearestTo:",
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
messageSends: ["ifTrue:ifFalse:", "sideNearestTo:", "ifTrue:", "@", "y", "right", "==", "left", "bottom", "x", "top", "adhereTo:", "containsPoint:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@origin"])._printOn_(aStream);
_st(aStream)._nextPutAll_(" corner: ");
_st(self["@corner"])._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Rectangle)})},
messageSends: ["printOn:", "nextPutAll:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "quickMerge:",
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
messageSends: ["ifNil:", "topLeft", "bottomRight", "ifTrue:ifFalse:", "x", "<", ">", "y", "origin:corner:", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "quickMergePoint:",
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
messageSends: ["ifTrue:ifFalse:", "x", "<", "+", ">=", "y", "corner:", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rectanglesAt:height:",
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
messageSends: ["ifTrue:", "new", ">", "bottom", "+", "with:", "corner:", "@", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@corner"])._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.Rectangle)})},
messageSends: ["x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(aNumber).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"right:",{aNumber:aNumber},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rightCenter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._right()).__at(_st(self._center())._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightCenter",{},smalltalk.Rectangle)})},
messageSends: ["@", "y", "center", "right"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:centerAt:",
fn: function (direction,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._rotateBy_centerAt_(direction,aPoint))._rect_(_st(self["@corner"])._rotateBy_centerAt_(direction,aPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:centerAt:",{direction:direction,aPoint:aPoint},smalltalk.Rectangle)})},
messageSends: ["rect:", "rotateBy:centerAt:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "roundTo:",
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._roundTo_(grid),_st(self["@corner"])._roundTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"roundTo:",{grid:grid},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "roundTo:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "rounded",
fn: function (){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._rounded(),_st(self["@corner"])._rounded());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rounded",{},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "rounded"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
fn: function (scale){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__star(scale),_st(self["@corner"]).__star(scale));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{scale:scale},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "*"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFrom:to:",
fn: function (rect1,rect2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@origin"])._scaleFrom_to_(rect1,rect2))._corner_(_st(self["@corner"])._scaleFrom_to_(rect1,rect2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFrom:to:",{rect1:rect1,rect2:rect2},smalltalk.Rectangle)})},
messageSends: ["corner:", "scaleFrom:to:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "scaledAndCenteredIn:",
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
messageSends: ["ifTrue:ifFalse:", "corner:", "@", "+", "/", "*", "width", "height", "y", "rightCenter", "right", "-", "leftCenter", "left", "bottom", "x", "topCenter", "top", ">"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "setOrigin:corner:",
fn: function (topLeft,bottomRight){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@origin"]=topLeft;
self["@corner"]=bottomRight;
return self}, function($ctx1) {$ctx1.fill(self,"setOrigin:corner:",{topLeft:topLeft,bottomRight:bottomRight},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "sideNearestTo:",
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
messageSends: ["-", "left", "x", "right", "top", "y", "bottom", "ifTrue:", "<"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "squishedWithin:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(self["@corner"])._min_(_st(aRectangle)._bottomRight()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"squishedWithin:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
messageSends: ["corner:", "min:", "bottomRight"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "storeOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_("(");
self._printOn_(aStream);
_st(aStream)._nextPut_(")");
return self}, function($ctx1) {$ctx1.fill(self,"storeOn:",{aStream:aStream},smalltalk.Rectangle)})},
messageSends: ["nextPut:", "printOn:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"top",{},smalltalk.Rectangle)})},
messageSends: ["y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "top:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(aNumber))._corner_(self["@corner"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"top:",{aNumber:aNumber},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "topCenter",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._center())._x()).__at(self._top());
return $1;
}, function($ctx1) {$ctx1.fill(self,"topCenter",{},smalltalk.Rectangle)})},
messageSends: ["@", "top", "x", "center"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@origin"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeft",{},smalltalk.Rectangle)})},
messageSends: []}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "topRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__at(_st(self["@origin"])._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"topRight",{},smalltalk.Rectangle)})},
messageSends: ["@", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (factor){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"]).__plus(factor),_st(self["@corner"]).__plus(factor));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{factor:factor},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "+"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "translatedAndSquishedToBeWithin:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._translatedToBeWithin_(aRectangle))._squishedWithin_(aRectangle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"translatedAndSquishedToBeWithin:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
messageSends: ["squishedWithin:", "translatedToBeWithin:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "translatedToBeWithin:",
fn: function (aRectangle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._translateBy_(self._amountToTranslateWithin_(aRectangle));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translatedToBeWithin:",{aRectangle:aRectangle},smalltalk.Rectangle)})},
messageSends: ["translateBy:", "amountToTranslateWithin:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "truncateTo:",
fn: function (grid){
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(_st(self["@origin"])._truncateTo_(grid),_st(self["@corner"])._truncateTo_(grid));
return $1;
}, function($ctx1) {$ctx1.fill(self,"truncateTo:",{grid:grid},smalltalk.Rectangle)})},
messageSends: ["origin:corner:", "truncateTo:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "truncated",
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
messageSends: ["ifTrue:", "and:", "isInteger", "y", "x", "origin:corner:", "truncated"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@corner"])._x()).__minus(_st(self["@origin"])._x());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.Rectangle)})},
messageSends: ["-", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withBottom:",
fn: function (y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(_st(self["@origin"])._y()))._corner_(_st(_st(self["@corner"])._x()).__at(y));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withBottom:",{y:y},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "x", "y"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withHeight:",
fn: function (height){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(_st(self["@corner"])._x()).__at(_st(_st(self["@origin"])._y()).__plus(height)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withHeight:",{height:height},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "+", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withLeft:",
fn: function (x){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(x).__at(_st(self["@origin"])._y()))._corner_(_st(_st(self["@corner"])._x()).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withLeft:",{x:x},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withRight:",
fn: function (x){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(_st(self["@origin"])._y()))._corner_(_st(x).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withRight:",{x:x},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSide:setTo:",
fn: function (side,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_with_(["withLeft:", "withRight:", "withTop:", "withBottom:"]._at_(["left", "right", "top", "bottom"]._indexOf_(side)),value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSide:setTo:",{side:side,value:value},smalltalk.Rectangle)})},
messageSends: ["perform:with:", "at:", "indexOf:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSideOrCorner:setToPoint:",
fn: function (side,newPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._withSideOrCorner_setToPoint_minExtent_(side,newPoint,(0).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withSideOrCorner:setToPoint:",{side:side,newPoint:newPoint},smalltalk.Rectangle)})},
messageSends: ["withSideOrCorner:setToPoint:minExtent:", "@"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSideOrCorner:setToPoint:minExtent:",
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
messageSends: ["withSideOrCorner:setToPoint:minExtent:limit:", "ifTrue:ifFalse:", "minVal", "maxVal", "includes:"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withSideOrCorner:setToPoint:minExtent:limit:",
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
messageSends: ["ifTrue:", "withTop:", "min:max:", "-", "y", "+", "=", "withBottom:", "withLeft:", "x", "withRight:", "corner:", "bottomRight", "min:", "max:", "topLeft", "rect:", "@", "topRight", "bottomLeft"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withTop:",
fn: function (y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@origin"])._x()).__at(y))._corner_(_st(_st(self["@corner"])._x()).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withTop:",{y:y},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "y", "x"]}),
smalltalk.Rectangle);

smalltalk.addMethod(
smalltalk.method({
selector: "withWidth:",
fn: function (width){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@origin"])._corner_(_st(_st(_st(self["@origin"])._x()).__plus(width)).__at(_st(self["@corner"])._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"withWidth:",{width:width},smalltalk.Rectangle)})},
messageSends: ["corner:", "@", "y", "+", "x"]}),
smalltalk.Rectangle);


smalltalk.addMethod(
smalltalk.method({
selector: "center:extent:",
fn: function (centerPoint,extentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._origin_extent_(_st(centerPoint).__minus(_st(extentPoint).__slash_slash((2))),extentPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"center:extent:",{centerPoint:centerPoint,extentPoint:extentPoint},smalltalk.Rectangle.klass)})},
messageSends: ["origin:extent:", "-", "//"]}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassing:",
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
messageSends: ["do:", "ifTrue:ifFalse:", "min:", "max:", "==", "corner:"]}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "left:right:top:bottom:",
fn: function (leftNumber,rightNumber,topNumber,bottomNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setOrigin_corner_(_st(leftNumber).__at(topNumber),_st(rightNumber).__at(bottomNumber));
return $1;
}, function($ctx1) {$ctx1.fill(self,"left:right:top:bottom:",{leftNumber:leftNumber,rightNumber:rightNumber,topNumber:topNumber,bottomNumber:bottomNumber},smalltalk.Rectangle.klass)})},
messageSends: ["setOrigin:corner:", "@", "basicNew"]}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "merging:",
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
messageSends: ["do:", "ifNil:ifNotNil:", "x", "topLeft", "y", "bottomRight", "min:", "max:", "corner:", "@"]}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:corner:",
fn: function (originPoint,cornerPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setOrigin_corner_(originPoint,cornerPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin:corner:",{originPoint:originPoint,cornerPoint:cornerPoint},smalltalk.Rectangle.klass)})},
messageSends: ["setOrigin:corner:", "basicNew"]}),
smalltalk.Rectangle.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "origin:extent:",
fn: function (originPoint,extentPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._basicNew())._setOrigin_corner_(originPoint,_st(originPoint).__plus(extentPoint));
return $1;
}, function($ctx1) {$ctx1.fill(self,"origin:extent:",{originPoint:originPoint,extentPoint:extentPoint},smalltalk.Rectangle.klass)})},
messageSends: ["setOrigin:corner:", "+", "basicNew"]}),
smalltalk.Rectangle.klass);


smalltalk.addClass('Symbol', smalltalk.String, [], 'Roassal-Amber-Extensions');


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
selector: "assert:descriptionBlock:",
fn: function (aBlock,descriptionBlock){
var self=this;
function $AssertionFailure(){return smalltalk.AssertionFailure||(typeof AssertionFailure=="undefined"?nil:AssertionFailure)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
if(! smalltalk.assert($1)){
_st($AssertionFailure())._signal_(_st(_st(descriptionBlock)._value())._asString());
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:descriptionBlock:",{aBlock:aBlock,descriptionBlock:descriptionBlock},smalltalk.Object)})},
messageSends: ["ifFalse:", "signal:", "asString", "value"]}),
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
selector: "isBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isBlock",{},smalltalk.Object)})},
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
selector: "isColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isColor",{},smalltalk.Object)})},
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
selector: "isBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isBlock",{},smalltalk.BlockClosure)})},
messageSends: []}),
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
selector: "min",
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
messageSends: ["inject:into:", "first", "min:"]}),
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
selector: "select:thenCollect:",
fn: function (selectBlock,collectBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._select_(selectBlock))._collect_(collectBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock},smalltalk.Collection)})},
messageSends: ["collect:", "select:"]}),
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
selector: "with:collect:",
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
messageSends: ["ifFalse:", "error:", "=", "size", "new:", "class", "to:do:", "addLast:", "value:value:", "at:"]}),
smalltalk.Collection);

smalltalk.addMethod(
smalltalk.method({
selector: "doWithIndex:",
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
messageSends: ["do:", "value:value:", "+"]}),
smalltalk.HashedCollection);

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
selector: "doWithIndex:",
fn: function (elementAndIndexBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._withIndexDo_(elementAndIndexBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"doWithIndex:",{elementAndIndexBlock:elementAndIndexBlock},smalltalk.SequenceableCollection)})},
messageSends: ["withIndexDo:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "eighth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((8));
return $1;
}, function($ctx1) {$ctx1.fill(self,"eighth",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
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
selector: "nineth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((9));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nineth",{},smalltalk.SequenceableCollection)})},
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
selector: "seventth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((7));
return $1;
}, function($ctx1) {$ctx1.fill(self,"seventth",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "sixth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_((6));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sixth",{},smalltalk.SequenceableCollection)})},
messageSends: ["at:"]}),
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
selector: "asDictionary",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Dictionary())._from_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},smalltalk.Array)})},
messageSends: ["from:"]}),
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
selector: "isNotNumeric",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isNumeric())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotNumeric",{},smalltalk.String)})},
messageSends: ["not", "isNumeric"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumeric",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return !isNaN(parseFloat(self)) && isFinite(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"isNumeric",{},smalltalk.String)})},
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
selector: "roValue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roValue:",{anObject:anObject},smalltalk.String)})},
messageSends: ["perform:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "split:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aString)._subStrings_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"split:",{aString:aString},smalltalk.String)})},
messageSends: ["subStrings:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "trim",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._trimBoth();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trim",{},smalltalk.String)})},
messageSends: ["trimBoth"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.String)})},
messageSends: ["perform:"]}),
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
selector: "between:and:",
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
messageSends: ["and:", "<=", ">="]}),
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
selector: "cos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.cos(self);
return self}, function($ctx1) {$ctx1.fill(self,"cos",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "exp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.exp(self);
return self}, function($ctx1) {$ctx1.fill(self,"exp",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "floor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.floor(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"floor",{},smalltalk.Number)})},
messageSends: []}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "fractionPart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__minus(self._floor());
return $1;
}, function($ctx1) {$ctx1.fill(self,"fractionPart",{},smalltalk.Number)})},
messageSends: ["-", "floor"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isInteger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(self._asInteger());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInteger",{},smalltalk.Number)})},
messageSends: ["=", "asInteger"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "ln",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return Math.log(self); ;
return self}, function($ctx1) {$ctx1.fill(self,"ln",{},smalltalk.Number)})},
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
selector: "quo:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__slash(aNumber))._truncated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"quo:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: ["truncated", "/"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "rem:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__minus(_st(self._quo_(aNumber)).__star(aNumber));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rem:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: ["-", "*", "quo:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "roundTo:",
fn: function (quantum){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self.__slash(quantum))._rounded()).__star(quantum);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roundTo:",{quantum:quantum},smalltalk.Number)})},
messageSends: ["*", "rounded", "/"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "roundUpTo:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self.__slash(aNumber))._ceiling()).__star(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"roundUpTo:",{aNumber:aNumber},smalltalk.Number)})},
messageSends: ["*", "ceiling", "/"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.sin(self);
return self}, function($ctx1) {$ctx1.fill(self,"sin",{},smalltalk.Number)})},
messageSends: []}),
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

