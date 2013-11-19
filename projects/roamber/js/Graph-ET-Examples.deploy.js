smalltalk.addPackage('Graph-ET-Examples');
smalltalk.addClass('DotaHero', smalltalk.Object, ['winrate', 'matchesPlayed', 'name', 'faction'], 'Graph-ET-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "faction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@faction"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"faction",{},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "faction:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@faction"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"faction:",{aString:aString},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesPlayed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@matchesPlayed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"matchesPlayed",{},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesPlayed:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@matchesPlayed"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"matchesPlayed:",{aNumber:aNumber},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aName:aName},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "winrate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@winrate"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"winrate",{},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "winrate:",
fn: function (wR){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@winrate"]=wR;
return self}, function($ctx1) {$ctx1.fill(self,"winrate:",{wR:wR},smalltalk.DotaHero)})},
messageSends: []}),
smalltalk.DotaHero);



smalltalk.addClass('GETExamples', smalltalk.Object, [], 'Graph-ET-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "distributionOfClasses",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
diagram=_st($GETDiagramBuilder())._new();
self._distributionOfClassesOn_(diagram);
$1=_st(diagram)._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"distributionOfClasses",{diagram:diagram},smalltalk.GETExamples)})},
messageSends: ["new", "distributionOfClassesOn:", "open"]}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "distributionOfClassesOn:",
fn: function (builder){
var self=this;
var d,distribution;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $ROObject(){return smalltalk.ROObject||(typeof ROObject=="undefined"?nil:ROObject)}
function $GETDistribution(){return smalltalk.GETDistribution||(typeof GETDistribution=="undefined"?nil:GETDistribution)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
d=_st($Dictionary())._new();
_st(_st($ROObject())._withAllSubclasses())._do_((function(cls){
return smalltalk.withContext(function($ctx2) {
return _st(d)._at_put_(cls,_st(cls)._numberOfLinesOfCode());
}, function($ctx2) {$ctx2.fillBlock({cls:cls},$ctx1)})}));
distribution=_st(_st($GETDistribution())._on_(_st(d)._values()))._annotatedFrequency();
$1=_st(builder)._verticalBarDiagram();
_st($1)._models_(distribution);
_st($1)._y_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v)._third())._size();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st($1)._regularAxisAsInteger();
$2=_st($1)._titleLabel_("Size distribution of Roassal classes");
_st(_st(builder)._interaction())._popUpText();
return self}, function($ctx1) {$ctx1.fill(self,"distributionOfClassesOn:",{builder:builder,d:d,distribution:distribution},smalltalk.GETExamples)})},
messageSends: ["new", "do:", "at:put:", "numberOfLinesOfCode", "withAllSubclasses", "annotatedFrequency", "on:", "values", "models:", "verticalBarDiagram", "y:", "size", "third", "regularAxisAsInteger", "titleLabel:", "popUpText", "interaction"]}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "executeAll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._class())._class())._methodDictionary())._do_((function(aMethod){
return smalltalk.withContext(function($ctx2) {
return _st(self._class())._perform_(_st(aMethod)._selector());
}, function($ctx2) {$ctx2.fillBlock({aMethod:aMethod},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"executeAll",{},smalltalk.GETExamples)})},
messageSends: ["do:", "perform:", "selector", "class", "methodDictionary"]}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarWithTitle",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
diagram=_st($GETDiagramBuilder())._new();
self._verticalBarWithTitleOn_(diagram);
$1=_st(diagram)._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalBarWithTitle",{diagram:diagram},smalltalk.GETExamples)})},
messageSends: ["new", "verticalBarWithTitleOn:", "open"]}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarWithTitleOn:",
fn: function (builder){
var self=this;
var d;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $ROObject(){return smalltalk.ROObject||(typeof ROObject=="undefined"?nil:ROObject)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
d=_st($Dictionary())._new();
_st(_st($ROObject())._withAllSubclasses())._do_((function(cls){
return smalltalk.withContext(function($ctx2) {
return _st(d)._at_put_(cls,_st(cls)._numberOfLinesOfCode());
}, function($ctx2) {$ctx2.fillBlock({cls:cls},$ctx1)})}));
$1=_st(builder)._verticalBarDiagram();
_st($1)._models_(_st(_st(_st($ROObject())._withAllSubclasses())._sortedAs_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(d)._at_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})})))._reverse());
_st($1)._y_((function(cls){
return smalltalk.withContext(function($ctx2) {
return _st(d)._at_(cls);
}, function($ctx2) {$ctx2.fillBlock({cls:cls},$ctx1)})}));
_st($1)._color_((function(cls){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(_st(d)._at_(cls)).__star((1.1))).__gt_eq(_st(_st(d)._values())._max());
if(smalltalk.assert($2)){
return _st($Color())._red();
} else {
return _st($Color())._lightGray();
};
}, function($ctx2) {$ctx2.fillBlock({cls:cls},$ctx1)})}));
_st($1)._regularAxisAsInteger();
_st($1)._barWidth_((2));
$3=_st($1)._titleLabel_("Size of Roassal classes");
_st(_st(builder)._interaction())._popUpText();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarWithTitleOn:",{builder:builder,d:d},smalltalk.GETExamples)})},
messageSends: ["new", "do:", "at:put:", "numberOfLinesOfCode", "withAllSubclasses", "models:", "reverse", "sortedAs:", "at:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "lightGray", ">=", "max", "values", "*", "regularAxisAsInteger", "barWidth:", "titleLabel:", "popUpText", "interaction"]}),
smalltalk.GETExamples);


smalltalk.addMethod(
smalltalk.method({
selector: "GETinGET",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"GETinGET",{},smalltalk.GETExamples.klass)})},
messageSends: []}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GETinRO",
fn: function (){
var self=this;
var rawView,view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROMondrianViewBuilder(){return smalltalk.ROMondrianViewBuilder||(typeof ROMondrianViewBuilder=="undefined"?nil:ROMondrianViewBuilder)}
function $ROShape(){return smalltalk.ROShape||(typeof ROShape=="undefined"?nil:ROShape)}
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5;
rawView=_st($ROView())._new();
view=_st($ROMondrianViewBuilder())._view_(rawView);
_st(view)._nodes_forEach_(_st($ROShape())._withAllSubclasses(),(function(each){
var diag;
return smalltalk.withContext(function($ctx2) {
diag=_st($GETDiagramBuilder())._new();
diag;
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_(_st(each)._methods());
_st($1)._y_("linesOfCode");
_st($1)._height_((50));
_st($1)._barWidth_((1));
$2=_st($1)._color_((function(method){
return smalltalk.withContext(function($ctx3) {
$3=_st(_st(method)._linesOfCode()).__gt((10));
if(smalltalk.assert($3)){
return _st($Color())._red();
};
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2)})}));
$2;
$4=_st(diag)._interaction();
_st($4)._popUpText_((function(m){
return smalltalk.withContext(function($ctx3) {
return _st(m)._printString();
}, function($ctx3) {$ctx3.fillBlock({m:m},$ctx2)})}));
$5=_st($4)._on_do_($ROMouseClick(),(function(e){
return smalltalk.withContext(function($ctx3) {
return _st(_st(e)._model())._browse();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
$5;
return _st(diag)._openIn_(_st(view)._raw());
}, function($ctx2) {$ctx2.fillBlock({each:each,diag:diag},$ctx1)})}));
_st(view)._edgesFrom_("superclass");
_st(view)._treeLayout();
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"GETinRO",{rawView:rawView,view:view},smalltalk.GETExamples.klass)})},
messageSends: ["new", "view:", "nodes:forEach:", "withAllSubclasses", "models:", "methods", "verticalBarDiagram", "y:", "height:", "barWidth:", "color:", "ifTrue:", "red", ">", "linesOfCode", "popUpText:", "printString", "interaction", "on:do:", "browse", "model", "openIn:", "raw", "edgesFrom:", "treeLayout", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAnimationExample",
fn: function (){
var self=this;
var diag,button,ys,index;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_((0)._to_((10)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxis();
_st(diag)._open();
index=(2);
ys=[(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return x;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x).__star((4))).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x).__star((8))).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return (100).__minus(_st(x).__star(x));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})];
button=_st($ROLabel())._elementOn_("next");
_st(button).__plus($ROBorder());
_st(button)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(diag)._updateBlock_(_st(ys)._at_(index));
index=_st(_st(index).__backslash_backslash((5))).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(_st(diag)._rawView())._add_(button);
_st(button)._translateTo_((350).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"basicAnimationExample",{diag:diag,button:button,ys:ys,index:index},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "y:", "*", "regularAxis", "open", "+", "-", "elementOn:", "on:do:", "updateBlock:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAnimationHorzExample",
fn: function (){
var self=this;
var diag,button,ys,index;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._horizontalBarDiagram();
_st($1)._models_((0)._to_((10)));
_st($1)._x_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxis();
_st(diag)._open();
index=(2);
ys=[(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return x;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x).__star((4))).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x).__star((8))).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return (100).__minus(_st(x).__star(x));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})];
button=_st($ROLabel())._elementOn_("next");
_st(button).__plus($ROBorder());
_st(button)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(diag)._updateBlock_(_st(ys)._at_(index));
index=_st(_st(index).__backslash_backslash((5))).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(_st(diag)._rawView())._add_(button);
_st(button)._translateTo_((0).__at((350)));
return self}, function($ctx1) {$ctx1.fill(self,"basicAnimationHorzExample",{diag:diag,button:button,ys:ys,index:index},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:", "horizontalBarDiagram", "x:", "*", "regularAxis", "open", "+", "-", "elementOn:", "on:do:", "updateBlock:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAnimationLineExample",
fn: function (){
var self=this;
var diag,button,ys,index;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((10)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxisAsInteger();
_st(diag)._open();
index=(2);
ys=[(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return x;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x).__star((4))).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x).__star((8))).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return (100).__minus(_st(x).__star(x));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})];
button=_st($ROLabel())._elementOn_("next");
_st(button).__plus($ROBorder());
_st(button)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(diag)._updateY_(_st(ys)._at_(index));
index=_st(_st(index).__backslash_backslash((5))).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(_st(diag)._rawView())._add_(button);
_st(button)._translateTo_((420).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"basicAnimationLineExample",{diag:diag,button:button,ys:ys,index:index},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "regularAxisAsInteger", "open", "+", "-", "elementOn:", "on:do:", "updateY:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicInterfaceExample",
fn: function (){
var self=this;
var diag,button,ys,index,paso;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_((0)._to_((10)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxis();
_st(_st(diag)._interaction())._popUpText();
_st(_st(_st(diag)._animation())._horizontalScrolling())._on_(paso);
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"basicInterfaceExample",{diag:diag,button:button,ys:ys,index:index,paso:paso},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "y:", "*", "regularAxis", "popUpText", "interaction", "on:", "horizontalScrolling", "animation", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "composite2Diff",
fn: function (){
var self=this;
var builder;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
$1=_st(builder)._compositeDiagram();
$2=_st($GETOrdinaryLineDiagram())._new();
_st($2)._models_(self._heros());
_st($2)._y_("matchesPlayed");
$3=_st($2)._color_(_st($Color())._blue());
_st($1)._add_($3);
$4=_st($GETVerticalBarDiagram())._new();
_st($4)._models_([(3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000)]);
$5=_st($4)._color_(_st($Color())._red());
_st($1)._add_($5);
_st($1)._regularAxis();
$6=_st($1)._height_((200));
_st(_st(builder)._interaction())._popUpText();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"composite2Diff",{builder:builder},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "models:", "heros", "y:", "color:", "blue", "compositeDiagram", "red", "regularAxis", "height:", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "composite2Lines",
fn: function (){
var self=this;
var builder;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
$1=_st(builder)._compositeDiagram();
$2=_st($GETOrdinaryLineDiagram())._new();
_st($2)._models_(self._heros());
_st($2)._y_("matchesPlayed");
$3=_st($2)._color_(_st($Color())._blue());
_st($1)._add_($3);
$4=_st($GETOrdinaryLineDiagram())._new();
_st($4)._models_([(3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000), (3000000)]);
$5=_st($4)._color_(_st($Color())._red());
_st($1)._add_($5);
_st($1)._regularAxis();
$6=_st($1)._height_((200));
_st(_st(builder)._interaction())._popUpText();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"composite2Lines",{builder:builder},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "models:", "heros", "y:", "color:", "blue", "compositeDiagram", "red", "regularAxis", "height:", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeBasicAxisExample2Bar",
fn: function (){
var self=this;
var builder;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
$1=_st(builder)._compositeDiagram();
$2=_st($GETVerticalBarDiagram())._new();
_st($2)._models_([(1), (2), (3), (4), (5), (6), (7), (8), (9)]);
$3=_st($2)._color_(_st($Color())._red());
_st($1)._add_($3);
$4=_st($GETVerticalBarDiagram())._new();
_st($4)._models_([(9), (8), (7), (6), (5), (4), (3), (2), (1)]);
$5=_st($4)._color_(_st($Color())._blue());
_st($1)._add_($5);
$6=_st($1)._regularAxis();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"compositeBasicAxisExample2Bar",{builder:builder},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "models:", "color:", "red", "compositeDiagram", "blue", "regularAxis", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeBasicExample2Bar",
fn: function (){
var self=this;
var builder;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4;
builder=_st($GETDiagramBuilder())._new();
$1=_st(builder)._compositeDiagram();
$2=_st($GETVerticalBarDiagram())._new();
_st($2)._models_([(1), (2), (3)]);
$3=_st($2)._color_(_st($Color())._red());
_st($1)._add_($3);
$5=_st($GETVerticalBarDiagram())._new();
_st($5)._models_([(3), (2), (1)]);
$6=_st($5)._color_(_st($Color())._blue());
$4=_st($1)._add_($6);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"compositeBasicExample2Bar",{builder:builder},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "models:", "color:", "red", "compositeDiagram", "blue", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeDifferentScale2Bar",
fn: function (){
var self=this;
var builder;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
$1=_st(builder)._compositeDiagram();
$2=_st($GETVerticalBarDiagram())._new();
_st($2)._models_([(1), (2), (3), (4), (5), (6), (7), (8), (9)]);
$3=_st($2)._color_(_st($Color())._red());
_st($1)._add_($3);
$4=_st($GETVerticalBarDiagram())._new();
_st($4)._models_([(3), (2), (1), (2), (3), (2), (1), (2), (3)]);
$5=_st($4)._color_(_st($Color())._blue());
_st($1)._add_($5);
_st($1)._regularAxis();
$6=_st($1)._height_((200));
_st(_st(builder)._interaction())._draggable();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"compositeDifferentScale2Bar",{builder:builder},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "models:", "color:", "red", "compositeDiagram", "blue", "regularAxis", "height:", "draggable", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heros",
fn: function (){
var self=this;
var heros;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $DotaHero(){return smalltalk.DotaHero||(typeof DotaHero=="undefined"?nil:DotaHero)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$21,$22,$20,$23;
heros=_st($OrderedCollection())._new();
$1=heros;
$2=_st($DotaHero())._new();
_st($2)._name_("Pudge");
_st($2)._faction_("STR");
_st($2)._winrate_((47.48));
$3=_st($2)._matchesPlayed_((3078298));
_st($1)._add_($3);
$4=_st($DotaHero())._new();
_st($4)._name_("Drow Ranger");
_st($4)._faction_("AGI");
_st($4)._winrate_((53.41));
$5=_st($4)._matchesPlayed_((2653449));
_st($1)._add_($5);
$6=_st($DotaHero())._new();
_st($6)._name_("Sniper");
_st($6)._faction_("AGI");
_st($6)._winrate_((48.04));
$7=_st($6)._matchesPlayed_((2459542));
_st($1)._add_($7);
$8=_st($DotaHero())._new();
_st($8)._name_("Bounty Hunter");
_st($8)._faction_("AGI");
_st($8)._winrate_((46.85));
$9=_st($8)._matchesPlayed_((2236704));
_st($1)._add_($9);
$10=_st($DotaHero())._new();
_st($10)._name_("Riki");
_st($10)._faction_("AGI");
_st($10)._winrate_((51.75));
$11=_st($10)._matchesPlayed_((2193433));
_st($1)._add_($11);
$12=_st($DotaHero())._new();
_st($12)._name_("LifeStealer");
_st($12)._faction_("STR");
_st($12)._winrate_((51.81));
$13=_st($12)._matchesPlayed_((2079754));
_st($1)._add_($13);
$14=_st($DotaHero())._new();
_st($14)._name_("Phantom Lancer");
_st($14)._faction_("AGI");
_st($14)._winrate_((53.63));
$15=_st($14)._matchesPlayed_((1960633));
_st($1)._add_($15);
$16=_st($DotaHero())._new();
_st($16)._name_("Spirit Breaker");
_st($16)._faction_("STR");
_st($16)._winrate_((55.26));
$17=_st($16)._matchesPlayed_((1873585));
_st($1)._add_($17);
$18=_st($DotaHero())._new();
_st($18)._name_("Natures Prophet");
_st($18)._faction_("INT");
_st($18)._winrate_((47.32));
$19=_st($18)._matchesPlayed_((1852062));
_st($1)._add_($19);
$21=_st($DotaHero())._new();
_st($21)._name_("Juggernaut");
_st($21)._faction_("AGI");
_st($21)._winrate_((48.37));
$22=_st($21)._matchesPlayed_((1813474));
$20=_st($1)._add_($22);
$23=heros;
return $23;
}, function($ctx1) {$ctx1.fill(self,"heros",{heros:heros},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "name:", "faction:", "winrate:", "matchesPlayed:"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalBarExample",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._horizontalBarDiagram();
_st($1)._models_([(10), (12), (13), (200), (150), (-13), (149), (-151)]);
$2=_st($1)._regularAxis();
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"horizontalBarExample",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "regularAxis", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((100)));
$2=_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineBasicExample",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample2",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._height_((200));
_st($1)._models_((-20)._to_by_((20),(0.05)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._negated())._exp()).__star(_st((100).__star(x))._cos());
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st($1)._color_(_st($Color())._black());
$2=_st($1)._regularAxisAsInteger();
_st(_st(diag)._interaction())._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineBasicExample2",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "height:", "lineDiagram", "models:", "to:by:", "y:", "*", "cos", "exp", "negated", "color:", "black", "regularAxisAsInteger", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample3",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._height_((200));
_st($1)._models_((0)._to_((100)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st($1)._x_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__plus((100));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxis();
_st(_st(diag)._interaction())._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineBasicExample3",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "height:", "lineDiagram", "models:", "to:", "y:", "*", "x:", "+", "regularAxis", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample4",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._height_((200));
_st($1)._models_((-20)._to_by_((20),(0.05)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st($1)._color_(_st($Color())._black());
$2=_st($1)._regularAxisAsInteger();
_st(_st(diag)._interaction())._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineBasicExample4",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "height:", "lineDiagram", "models:", "to:by:", "y:", "*", "color:", "black", "regularAxisAsInteger", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExampleWithCustomDotSize",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((100)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._dotSize_((10));
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineBasicExampleWithCustomDotSize",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "dotSize:", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineExample",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._height_((200));
_st($1)._models_(_st((-2).__star(_st($Float())._pi()))._to_by_((2).__star(_st($Float())._pi()),(0.01)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(x).__star(_st($Float())._pi()))._sin()).__star(_st(_st(_st(x)._squared()).__star(_st($Float())._pi()))._cos())).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxis();
_st(_st(diag)._interaction())._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineExample",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "height:", "lineDiagram", "models:", "to:by:", "*", "pi", "y:", "cos", "squared", "sin", "regularAxis", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineExample2",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._height_((200));
_st($1)._models_((0)._to_((50)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return (-1).__star_star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._regularAxis();
_st(_st(diag)._interaction())._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"lineExample2",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "height:", "lineDiagram", "models:", "to:", "y:", "**", "regularAxis", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ordinaryLineExample",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._ordinaryLineDiagram();
_st($1)._y_("loc");
_st($1)._height_((200));
_st($1)._yAxisLabel_("LoC");
_st($1)._regularAxis();
_st($1)._color_(_st($Color())._blue());
$2=_st($1)._models_(self._versions());
$3=_st(diag)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"ordinaryLineExample",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "y:", "ordinaryLineDiagram", "height:", "yAxisLabel:", "regularAxis", "color:", "blue", "models:", "versions", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pieExample",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"pieExample",{},smalltalk.GETExamples.klass)})},
messageSends: []}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "roassalHierarchy",
fn: function (){
var self=this;
var view,diagBuilder,classes,container,el,shape,hierarchy;
function $ROShape(){return smalltalk.ROShape||(typeof ROShape=="undefined"?nil:ROShape)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
function $ROShrinkingParent(){return smalltalk.ROShrinkingParent||(typeof ROShrinkingParent=="undefined"?nil:ROShrinkingParent)}
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROMenuActivable(){return smalltalk.ROMenuActivable||(typeof ROMenuActivable=="undefined"?nil:ROMenuActivable)}
function $ROGridLayout(){return smalltalk.ROGridLayout||(typeof ROGridLayout=="undefined"?nil:ROGridLayout)}
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROBlink(){return smalltalk.ROBlink||(typeof ROBlink=="undefined"?nil:ROBlink)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
classes=_st($ROShape())._withAllSubclasses();
view=_st($ROView())._new();
_st(view).__at($RODraggable());
hierarchy=_st($ROBorder())._element();
_st(hierarchy)._addAll_(_st($ROBox())._elementsOn_(classes));
_st($ROLine())._buildEdgesFromElements_from_to_(_st(hierarchy)._elements(),"superclass","yourself");
_st($ROTreeLayout())._on_edges_(_st(hierarchy)._elementsNotEdge(),_st(hierarchy)._elementsAsEdge());
_st(view)._add_(hierarchy);
_st(hierarchy)._translateTo_((530).__at((0)));
container=_st($ROBorder())._element();
_st(container)._translateTo_((0).__at((250)));
_st(container)._resizeStrategy_(_st(_st($ROShrinkingParent())._new())._padding_((5).__at((5))));
diagBuilder=_st($GETDiagramBuilder())._new();
$1=_st(diagBuilder)._verticalBarDiagram();
_st($1)._models_(classes);
_st($1)._y_("numberOfLinesOfCode");
_st($1)._height_((200));
_st($1)._yAxisLabel_("LoC");
$2=_st($1)._regularAxisAsInteger();
$3=_st(diagBuilder)._interaction();
_st($3)._strongHighlightWhenOver();
_st($3)._popUpText();
_st($3)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(container)._elements())._do_("remove");
_st(_st(_st(event)._model())._methods())._do_((function(cm){
return smalltalk.withContext(function($ctx3) {
shape=_st(_st($ROBox())._new())._extent_((8).__at((8)));
shape;
$4=_st(_st(cm)._linesOfCode()).__gt((10));
if(smalltalk.assert($4)){
_st(shape)._color_(_st($Color())._red());
};
el=_st(shape)._elementOn_(cm);
el;
_st(el).__at(_st($ROPopup())._text_((function(e){
return smalltalk.withContext(function($ctx4) {
return _st(e)._getSource();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})})));
_st(el).__at(_st(_st($ROMenuActivable())._new())._item_action_("browse",(function(e){
return smalltalk.withContext(function($ctx4) {
return _st(_st(e)._model())._browse();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3)})})));
return _st(container)._add_(el);
}, function($ctx3) {$ctx3.fillBlock({cm:cm},$ctx2)})}));
_st($ROGridLayout())._on_(_st(container)._elements());
return _st(container)._translateTo_((0).__at((250)));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st($3)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($ROBlink())._highlight_(_st(hierarchy)._elementFromModel_(_st(event)._model()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
$5=_st($3)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($ROBlink())._unhighlight_(_st(hierarchy)._elementFromModel_(_st(event)._model()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(diagBuilder)._openIn_(view);
_st(view)._add_(container);
_st(view)._openInWindowSized_((1000).__at((550)));
return self}, function($ctx1) {$ctx1.fill(self,"roassalHierarchy",{view:view,diagBuilder:diagBuilder,classes:classes,container:container,el:el,shape:shape,hierarchy:hierarchy},smalltalk.GETExamples.klass)})},
messageSends: ["withAllSubclasses", "new", "@", "element", "addAll:", "elementsOn:", "buildEdgesFromElements:from:to:", "elements", "on:edges:", "elementsNotEdge", "elementsAsEdge", "add:", "translateTo:", "resizeStrategy:", "padding:", "models:", "verticalBarDiagram", "y:", "height:", "yAxisLabel:", "regularAxisAsInteger", "strongHighlightWhenOver", "interaction", "popUpText", "on:do:", "do:", "extent:", "ifTrue:", "color:", "red", ">", "linesOfCode", "elementOn:", "text:", "getSource", "item:action:", "browse", "model", "methods", "on:", "highlight:", "elementFromModel:", "unhighlight:", "openIn:", "openInWindowSized:"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "scatterPlotExample",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"scatterPlotExample",{},smalltalk.GETExamples.klass)})},
messageSends: []}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ubercoolAnimationExample",
fn: function (){
var self=this;
var diag,button,ys,index;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_by_((2).__star(_st($Float())._pi()),(0.05)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._sin();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st($1)._height_((200));
_st($1)._yAxisLabel_("sin/cos sequence");
$2=_st($1)._regularAxis();
_st(diag)._open();
index=(2);
ys=[(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._sin();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._cos();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x)._sin())._negated();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(x)._cos())._negated();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})})];
button=_st($ROLabel())._elementOn_("next");
_st(button).__plus($ROBorder());
_st(button)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(diag)._updateY_(_st(ys)._at_(index));
index=_st(_st(index).__backslash_backslash((4))).__plus((1));
return index;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(_st(diag)._rawView())._add_(button);
_st(button)._translateTo_((-20).__at((250)));
return self}, function($ctx1) {$ctx1.fill(self,"ubercoolAnimationExample",{diag:diag,button:button,ys:ys,index:index},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "to:by:", "*", "pi", "lineDiagram", "y:", "sin", "height:", "yAxisLabel:", "regularAxis", "open", "cos", "negated", "elementOn:", "+", "on:do:", "updateY:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "versions",
fn: function (){
var self=this;
var versions;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $GETVersion(){return smalltalk.GETVersion||(typeof GETVersion=="undefined"?nil:GETVersion)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$19,$20,$18,$21;
versions=_st($OrderedCollection())._new();
$1=versions;
$2=_st($GETVersion())._new();
_st($2)._versionNumber_("1.0");
$3=_st($2)._loc_((3346));
_st($1)._add_($3);
$4=_st($GETVersion())._new();
_st($4)._versionNumber_("1.1");
$5=_st($4)._loc_((3455));
_st($1)._add_($5);
$6=_st($GETVersion())._new();
_st($6)._versionNumber_("1.2");
$7=_st($6)._loc_((3755));
_st($1)._add_($7);
$8=_st($GETVersion())._new();
_st($8)._versionNumber_("1.3");
$9=_st($8)._loc_((4674));
_st($1)._add_($9);
$10=_st($GETVersion())._new();
_st($10)._versionNumber_("1.4");
$11=_st($10)._loc_((4738));
_st($1)._add_($11);
$12=_st($GETVersion())._new();
_st($12)._versionNumber_("1.5");
$13=_st($12)._loc_((4378));
_st($1)._add_($13);
$14=_st($GETVersion())._new();
_st($14)._versionNumber_("1.6");
$15=_st($14)._loc_((4890));
_st($1)._add_($15);
$16=_st($GETVersion())._new();
_st($16)._versionNumber_("1.7");
$17=_st($16)._loc_((4908));
_st($1)._add_($17);
$19=_st($GETVersion())._new();
_st($19)._versionNumber_("1.8");
$20=_st($19)._loc_((5013));
$18=_st($1)._add_($20);
$21=versions;
return $21;
}, function($ctx1) {$ctx1.fill(self,"versions",{versions:versions},smalltalk.GETExamples.klass)})},
messageSends: ["new", "add:", "versionNumber:", "loc:"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarCustomLabelExample",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(self._heros());
_st($1)._y_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st("matchesPlayed"._value_(each)).__slash(_st($Float())._pi());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st($1)._valueAxisLine();
$2=_st($1)._addValueDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatInteger());
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarCustomLabelExample",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "/", "pi", "value:", "valueAxisLine", "addValueDecorator:", "formatInteger", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarCustomLabelExample2",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(self._heros());
_st($1)._y_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st("matchesPlayed"._value_(each)).__slash(_st($Float())._pi());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st($1)._valueAxisLine();
$2=_st($1)._addValueDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatTruncatedFloat());
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarCustomLabelExample2",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "/", "pi", "value:", "valueAxisLine", "addValueDecorator:", "formatTruncatedFloat", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(10), (12), (13), (200), (150), (-13), (149), (-151)]);
$2=_st($1)._spacing_((1));
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "spacing:", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample2",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(self._heros());
$2=_st($1)._y_("matchesPlayed");
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample2",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample3",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(1), (2), (3), (4), (5)]);
_st($1)._y_("yourself");
$2=_st($1)._color_(_st($Color())._blue());
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample3",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "blue", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample4",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(1), (2), (3), (4), (5)]);
_st($1)._y_("yourself");
$2=_st($1)._color_((function(v){
return smalltalk.withContext(function($ctx2) {
$3=_st(v)._odd();
if(smalltalk.assert($3)){
return _st($Color())._red();
} else {
return _st($Color())._gray();
};
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
$4=_st(diagram)._open();
return $4;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample4",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "gray", "odd", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample5",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(["asd", "sadf", "sadasd", "asdasdr", "adasdd"]);
_st($1)._y_("size");
$2=_st($1)._color_((function(v){
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(v)._size())._odd();
if(smalltalk.assert($3)){
return _st($Color())._red();
} else {
return _st($Color())._gray();
};
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
$4=_st(diagram)._open();
return $4;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample5",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "gray", "odd", "size", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample6",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(self._heros());
_st($1)._y_("matchesPlayed");
_st($1)._color_("faction");
$2=_st($1)._regularAxis();
_st(_st(diagram)._interaction())._popUpText_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._name();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample6",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "color:", "regularAxis", "popUpText:", "name", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample7",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(self._heros());
_st($1)._y_("matchesPlayed");
_st($1)._color_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(each)._faction()).__eq("STR");
if(smalltalk.assert($2)){
return _st($Color())._red();
} else {
return _st($Color())._green();
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st($1)._regularAxis();
_st($1)._titleLabel_("10 most played Heros by matchesPlayed");
$3=_st($1)._yAxisLabel_("Matches Played");
$4=_st(diagram)._open();
return $4;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample7",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "green", "=", "faction", "regularAxis", "titleLabel:", "yAxisLabel:", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample8WithNegativeValues",
fn: function (){
var self=this;
var diagram,values;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
values=_st((1)._to_((10)))._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st((10)._atRandom()).__minus((5));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(values);
_st($1)._height_((150));
_st($1)._color_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each).__lt((0));
if(smalltalk.assert($2)){
return _st($Color())._red();
} else {
return _st($Color())._green();
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$3=_st($1)._regularAxis();
_st(_st(diagram)._interaction())._popUpText();
$4=_st(diagram)._open();
return $4;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExample8WithNegativeValues",{diagram:diagram,values:values},smalltalk.GETExamples.klass)})},
messageSends: ["collect:", "-", "atRandom", "to:", "new", "models:", "verticalBarDiagram", "height:", "color:", "ifTrue:ifFalse:", "red", "green", "<", "regularAxis", "popUpText", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExampleAxis",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(1), (2), (3), (4), (5)]);
_st($1)._y_("yourself");
_st($1)._color_(_st($Color())._blue());
$2=_st($1)._regularAxis();
$3=_st(diagram)._open();
return $3;
}, function($ctx1) {$ctx1.fill(self,"verticalBarExampleAxis",{diagram:diagram},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "blue", "regularAxis", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._verticalBarDiagram())._models_([(30), (10), (20), (40)]);
_st(_st(diag)._interaction())._strongHighlightWhenOver();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "strongHighlightWhenOver", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample2",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._verticalBarDiagram())._models_([(30), (10), (20), (40)]);
_st(_st(diag)._interaction())._strongHighlightWhenClick();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample2",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "strongHighlightWhenClick", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample3",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_([(30), (10), (20), (40)]);
_st($1)._height_((80));
$2=_st($1)._regularAxis();
$3=_st(diag)._interaction();
_st($3)._strongHighlightWhenClick();
$4=_st($3)._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample3",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "regularAxis", "strongHighlightWhenClick", "interaction", "popUpText", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample4",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._y_("winrate");
$2=_st($1)._models_(self._heros());
$3=_st(diag)._interaction();
_st($3)._strongHighlightWhenClick();
$4=_st($3)._popUpText();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample4",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "strongHighlightWhenClick", "interaction", "popUpText", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample5",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._y_("winrate");
$2=_st($1)._models_(self._heros());
_st(_st(diag)._interaction())._popUpText_("winrate");
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample5",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "popUpText:", "interaction", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample6",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._y_("winrate");
$2=_st($1)._models_(self._heros());
$3=_st(diag)._interaction();
_st($3)._popUpText_((function(each){
return smalltalk.withContext(function($ctx2) {
return "Click me";
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$4=_st($3)._on_do_($ROMouseClick(),(function(each){
return smalltalk.withContext(function($ctx2) {
return self._inform_("You clicked on the bars, good one ;)");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample6",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "popUpText:", "interaction", "on:do:", "inform:", "open"]}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample7",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._y_("winrate");
$2=_st($1)._models_(self._heros());
_st(_st(diag)._interaction())._draggable();
_st(diag)._open();
return self}, function($ctx1) {$ctx1.fill(self,"verticalBarInteractionExample7",{diag:diag},smalltalk.GETExamples.klass)})},
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "draggable", "interaction", "open"]}),
smalltalk.GETExamples.klass);


smalltalk.addClass('GETVersion', smalltalk.Object, ['loc', 'versionNumber'], 'Graph-ET-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "loc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@loc"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"loc",{},smalltalk.GETVersion)})},
messageSends: []}),
smalltalk.GETVersion);

smalltalk.addMethod(
smalltalk.method({
selector: "loc:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@loc"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"loc:",{anObject:anObject},smalltalk.GETVersion)})},
messageSends: []}),
smalltalk.GETVersion);

smalltalk.addMethod(
smalltalk.method({
selector: "versionNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@versionNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"versionNumber",{},smalltalk.GETVersion)})},
messageSends: []}),
smalltalk.GETVersion);

smalltalk.addMethod(
smalltalk.method({
selector: "versionNumber:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@versionNumber"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"versionNumber:",{anObject:anObject},smalltalk.GETVersion)})},
messageSends: []}),
smalltalk.GETVersion);



