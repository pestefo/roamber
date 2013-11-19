smalltalk.addPackage('Graph-ET-Examples');
smalltalk.addClass('DotaHero', smalltalk.Object, ['winrate', 'matchesPlayed', 'name', 'faction'], 'Graph-ET-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "faction",
category: 'accesing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@faction"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"faction",{},smalltalk.DotaHero)})},
args: [],
source: "faction\x0a\x09^faction.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "faction:",
category: 'accesing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@faction"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"faction:",{aString:aString},smalltalk.DotaHero)})},
args: ["aString"],
source: "faction: aString\x0a\x09faction := aString.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesPlayed",
category: 'accesing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@matchesPlayed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"matchesPlayed",{},smalltalk.DotaHero)})},
args: [],
source: "matchesPlayed\x0a\x09^matchesPlayed.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "matchesPlayed:",
category: 'accesing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@matchesPlayed"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"matchesPlayed:",{aNumber:aNumber},smalltalk.DotaHero)})},
args: ["aNumber"],
source: "matchesPlayed: aNumber\x0a\x09matchesPlayed := aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accesing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.DotaHero)})},
args: [],
source: "name\x0a\x09^name.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accesing',
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=aName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aName:aName},smalltalk.DotaHero)})},
args: ["aName"],
source: "name:aName\x0a\x09name := aName.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "winrate",
category: 'accesing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@winrate"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"winrate",{},smalltalk.DotaHero)})},
args: [],
source: "winrate\x0a\x09^winrate.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);

smalltalk.addMethod(
smalltalk.method({
selector: "winrate:",
category: 'accesing',
fn: function (wR){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@winrate"]=wR;
return self}, function($ctx1) {$ctx1.fill(self,"winrate:",{wR:wR},smalltalk.DotaHero)})},
args: ["wR"],
source: "winrate: wR\x0a\x09winrate := wR.",
messageSends: [],
referencedClasses: []
}),
smalltalk.DotaHero);



smalltalk.addClass('GETExamples', smalltalk.Object, [], 'Graph-ET-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "distributionOfClasses",
category: 'barDiagram',
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
args: [],
source: "distributionOfClasses\x0a\x09\x22\x0a\x09self new distributionOfClasses\x0a\x09\x22\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09self distributionOfClassesOn: diagram.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "distributionOfClassesOn:", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "distributionOfClassesOn:",
category: 'barDiagram',
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
args: ["builder"],
source: "distributionOfClassesOn: builder\x0a\x09| d distribution |\x0a\x09d := Dictionary new.\x0a\x09ROObject withAllSubclasses do: [ :cls | d at: cls put: cls numberOfLinesOfCode ].\x0a\x09distribution := (GETDistribution on: d values) annotatedFrequency.\x0a\x09\x0a\x09builder verticalBarDiagram\x0a\x09\x09models: distribution;\x0a\x09\x09y: [ :v | v third size ];\x0a\x09\x09regularAxisAsInteger;\x0a\x09\x09titleLabel: 'Size distribution of Roassal classes'.\x0a\x09builder interaction popUpText",
messageSends: ["new", "do:", "at:put:", "numberOfLinesOfCode", "withAllSubclasses", "annotatedFrequency", "on:", "values", "models:", "verticalBarDiagram", "y:", "size", "third", "regularAxisAsInteger", "titleLabel:", "popUpText", "interaction"],
referencedClasses: ["Dictionary", "ROObject", "GETDistribution"]
}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "executeAll",
category: 'execute',
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
args: [],
source: "executeAll\x0a\x0a\x09^ self class class methodDictionary do: [:aMethod | (self class) perform: aMethod selector  ]",
messageSends: ["do:", "perform:", "selector", "class", "methodDictionary"],
referencedClasses: []
}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarWithTitle",
category: 'barDiagram',
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
args: [],
source: "verticalBarWithTitle\x0a\x09\x22\x0a\x09self new verticalBarWithTitle\x0a\x09\x22\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09self verticalBarWithTitleOn: diagram.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "verticalBarWithTitleOn:", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarWithTitleOn:",
category: 'barDiagram',
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
args: ["builder"],
source: "verticalBarWithTitleOn: builder\x0a\x09| d |\x0a\x09d := Dictionary new.\x0a\x09ROObject withAllSubclasses do: [ :cls | d at: cls put: cls numberOfLinesOfCode ].\x0a\x09\x0a\x09builder verticalBarDiagram\x0a\x09\x09models: (ROObject withAllSubclasses sortedAs: [ :c | d at: c ] ) reverse;\x0a\x09\x09y: [ :cls | d at: cls ];\x0a\x09\x09color: [ :cls | ((d at: cls) * 1.1) >= d values max ifTrue: [ Color red ] ifFalse: [ Color lightGray ] ];\x0a\x09\x09regularAxisAsInteger;\x0a\x09\x09barWidth: 2;\x0a\x09\x09titleLabel: 'Size of Roassal classes'.\x0a\x09builder interaction popUpText",
messageSends: ["new", "do:", "at:put:", "numberOfLinesOfCode", "withAllSubclasses", "models:", "reverse", "sortedAs:", "at:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "lightGray", ">=", "max", "values", "*", "regularAxisAsInteger", "barWidth:", "titleLabel:", "popUpText", "interaction"],
referencedClasses: ["Dictionary", "ROObject", "Color"]
}),
smalltalk.GETExamples);


smalltalk.addMethod(
smalltalk.method({
selector: "GETinGET",
category: 'coolExamples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"GETinGET",{},smalltalk.GETExamples.klass)})},
args: [],
source: "GETinGET\x0a\x0a\x09\x22self GETinGET\x22\x0a\x22\x0a\x09| diagBuilder classes view container rawView |\x0a\x0a\x09classes := ROShape withAllSubclasses.\x0a\x09\x0a\x09rawView := ROView new.\x0a\x09view := ROMondrianViewBuilder view: rawView.\x0a\x09rawView @ RODraggable.\x0a\x09\x0a\x09container := ROBorder element.\x0a\x09container translateTo: (0 @ 250).\x0a\x09container resizeStrategy: (ROShrinkingParent new padding: (5 @ 5) ).\x0a\x09\x0a\x09diagBuilder := GETDiagramBuilder new.\x0a\x09diagBuilder verticalBarDiagram\x0a\x09\x09models: classes;\x0a\x09\x09y: #numberOfLinesOfCode;\x0a\x09\x09height: 200;\x0a\x09\x09yAxisLabel: 'LoC';\x0a\x09\x09regularAxisAsInteger.\x0a\x09\x0a\x09diagBuilder interaction \x0a\x09\x09strongHighlightWhenOver;\x0a\x09\x09popUpText;\x0a\x09\x09on: ROMouseClick do: [ :event | | diagMethodBuilder |\x0a\x09\x09\x09\x09diagMethodBuilder := GETDiagramBuilder new.\x0a\x09\x09\x09\x09diagBuilder verticalBarDiagram\x0a\x09\x09\x09\x09\x09models: event model methods;\x0a\x09\x09\x09\x09\x09y: #linesOfCode.\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09diagMethodBuilder openIn: container.\x0a\x09\x09\x09\x09container addAll: diagMethodBuilder diagram roElements].\x0a\x09\x09\x09\x0a\x09diagBuilder openIn: view.\x0a\x09view add: container.\x0a\x09view open\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GETinRO",
category: 'coolExamples',
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
args: [],
source: "GETinRO\x0a\x0a\x09| rawView view |\x0a\x0a\x09rawView := ROView new.\x0a\x09view := ROMondrianViewBuilder view: rawView.\x0a\x09\x0a\x09view nodes: ROShape withAllSubclasses forEach: [ :each |\x0a\x09\x09| diag |\x0a\x0a\x09\x09diag := GETDiagramBuilder new.\x0a\x09\x09\x0a\x09\x09diag verticalBarDiagram\x0a\x09\x09\x09models: each methods; \x0a\x09\x09\x09y: #linesOfCode;\x0a\x09\x09\x09height: 50;\x0a\x09\x09\x09barWidth: 1;\x0a\x09\x09\x09color: [ :method | method linesOfCode > 10 ifTrue: [ Color red ] ].\x0a\x09\x09\x09\x0a\x09\x09diag interaction\x0a\x09\x09\x09popUpText: [ :m | m printString];\x0a\x09\x09\x09on: ROMouseClick do: [ :e | e model browse].\x0a\x09\x09\x09\x0a\x09\x09diag openIn: view raw].\x0a\x09\x09\x0a\x09view edgesFrom: #superclass.\x0a\x09view treeLayout.\x0a\x09view open",
messageSends: ["new", "view:", "nodes:forEach:", "withAllSubclasses", "models:", "methods", "verticalBarDiagram", "y:", "height:", "barWidth:", "color:", "ifTrue:", "red", ">", "linesOfCode", "popUpText:", "printString", "interaction", "on:do:", "browse", "model", "openIn:", "raw", "edgesFrom:", "treeLayout", "open"],
referencedClasses: ["ROView", "ROMondrianViewBuilder", "ROShape", "GETDiagramBuilder", "Color", "ROMouseClick"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAnimationExample",
category: 'animation',
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
args: [],
source: "basicAnimationExample\x0a\x0a\x09\x22self basicAnimationExample\x22\x0a\x0a\x09| diag button ys index |\x0a\x09\x0a\x09diag := GETDiagramBuilder new.\x0a\x09\x0a\x09diag verticalBarDiagram\x0a\x09\x09models: (0 to: 10);\x0a\x09\x09y: [ :x | x * x ];\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09diag open.\x0a\x09\x0a\x09index := 2.\x0a\x09ys := { [ :x | x * x ] . [ :x | x ] . [ :x | x *4 + 5 ] . [ :x | x *8 + 5 ] . [ :x | 100 - (x * x) ] }.\x0a\x09button := ROLabel elementOn: 'next'.\x0a\x09button + ROBorder.\x0a\x09button on: ROMouseClick do: [ :event |  \x0a\x09\x09diag updateBlock: (ys at: index).\x0a\x09\x09index := (index \x5c\x5c 5) + 1 ].\x0a\x09\x0a\x09diag rawView add: button.\x0a\x09button translateTo: 350 @ 0",
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "y:", "*", "regularAxis", "open", "+", "-", "elementOn:", "on:do:", "updateBlock:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"],
referencedClasses: ["GETDiagramBuilder", "ROLabel", "ROBorder", "ROMouseClick"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAnimationHorzExample",
category: 'animation',
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
args: [],
source: "basicAnimationHorzExample\x0a\x0a\x09\x22self basicAnimationHorzExample\x22\x0a\x0a\x09| diag button ys index |\x0a\x09\x0a\x09diag := GETDiagramBuilder new.\x0a\x09\x0a\x09diag horizontalBarDiagram\x0a\x09\x09models: (0 to: 10);\x0a\x09\x09x: [ :x | x * x ];\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09diag open.\x0a\x09\x0a\x09index := 2.\x0a\x09ys := { [ :x | x * x ] . [ :x | x ] . [ :x | x *4 + 5 ] . [ :x | x *8 + 5 ] . [ :x | 100 - (x * x) ] }.\x0a\x09button := ROLabel elementOn: 'next'.\x0a\x09button + ROBorder.\x0a\x09button on: ROMouseClick do: [ :event |  \x0a\x09\x09diag updateBlock: (ys at: index).\x0a\x09\x09index := (index \x5c\x5c 5) + 1 ].\x0a\x09\x0a\x09diag rawView add: button.\x0a\x09button translateTo: 0 @ 350",
messageSends: ["new", "models:", "to:", "horizontalBarDiagram", "x:", "*", "regularAxis", "open", "+", "-", "elementOn:", "on:do:", "updateBlock:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"],
referencedClasses: ["GETDiagramBuilder", "ROLabel", "ROBorder", "ROMouseClick"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAnimationLineExample",
category: 'animation',
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
args: [],
source: "basicAnimationLineExample\x0a\x0a\x09\x22self basicAnimationLineExample\x22\x0a\x0a\x09| diag button ys index |\x0a\x09\x0a\x09diag := GETDiagramBuilder new.\x0a\x09\x0a\x09diag lineDiagram\x0a\x09\x09models: (0 to: 10);\x0a\x09\x09y: [ :x | x * x ];\x0a\x09\x09regularAxisAsInteger.\x0a\x09\x09\x0a\x09diag open.\x0a\x09\x0a\x09index := 2.\x0a\x09ys := { [ :x | x * x ] . [ :x | x ] . [ :x | x *4 + 5 ] . [ :x | x *8 + 5 ] . [ :x | 100 - (x * x) ] }.\x0a\x09button := ROLabel elementOn: 'next'.\x0a\x09button + ROBorder.\x0a\x09button on: ROMouseClick do: [ :event |  \x0a\x09\x09diag updateY: (ys at: index).\x0a\x09\x09index := (index \x5c\x5c 5) + 1 ].\x0a\x09\x0a\x09diag rawView add: button.\x0a\x09button translateTo: 420 @ 0",
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "regularAxisAsInteger", "open", "+", "-", "elementOn:", "on:do:", "updateY:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"],
referencedClasses: ["GETDiagramBuilder", "ROLabel", "ROBorder", "ROMouseClick"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicInterfaceExample",
category: 'animation',
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
args: [],
source: "basicInterfaceExample\x0a\x0a\x09\x22self basicAnimationExample\x22\x0a\x0a\x09| diag button ys index paso |\x0a\x09\x0a\x09diag := GETDiagramBuilder new.\x0a\x09\x0a\x09diag verticalBarDiagram\x0a\x09\x09models: (0 to: 10);\x0a\x09\x09y: [ :x | x * x ];\x0a\x09\x09regularAxis.\x0a\x09\x0a\x09diag interaction\x0a\x09\x09popUpText.\x09\x0a\x09\x0a\x09diag animation\x0a\x09\x09horizontalScrolling on: paso.\x0a\x0a\x09diag open.",
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "y:", "*", "regularAxis", "popUpText", "interaction", "on:", "horizontalScrolling", "animation", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "composite2Diff",
category: 'compositeDiagram',
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
args: [],
source: "composite2Diff\x0a\x0a\x09| builder |\x0a\x09builder := GETDiagramBuilder new.\x0a\x09builder compositeDiagram\x0a\x09\x09add: (GETOrdinaryLineDiagram new \x0a\x09\x09\x09\x09models: self heros;\x0a\x09\x09\x09\x09y: #matchesPlayed;\x0a\x09\x09\x09\x09color: Color blue);\x0a\x09\x09add: (GETVerticalBarDiagram new\x0a\x09\x09\x09\x09models: #(3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000);\x0a\x09\x09\x09\x09color: Color red);\x0a\x09\x09regularAxis;\x0a\x09\x09height: 200.\x0a\x09builder interaction popUpText.\x0a\x09builder open",
messageSends: ["new", "add:", "models:", "heros", "y:", "color:", "blue", "compositeDiagram", "red", "regularAxis", "height:", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "GETOrdinaryLineDiagram", "Color", "GETVerticalBarDiagram"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "composite2Lines",
category: 'compositeDiagram',
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
args: [],
source: "composite2Lines\x0a\x0a\x09| builder |\x0a\x09builder := GETDiagramBuilder new.\x0a\x09builder compositeDiagram\x0a\x09\x09add: (GETOrdinaryLineDiagram new \x0a\x09\x09\x09\x09models: self heros;\x0a\x09\x09\x09\x09y: #matchesPlayed;\x0a\x09\x09\x09\x09color: Color blue);\x0a\x09\x09add: (GETOrdinaryLineDiagram new\x0a\x09\x09\x09\x09models: #(3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000 3000000);\x0a\x09\x09\x09\x09color: Color red);\x0a\x09\x09regularAxis;\x0a\x09\x09height: 200.\x0a\x09builder interaction popUpText.\x0a\x09builder open",
messageSends: ["new", "add:", "models:", "heros", "y:", "color:", "blue", "compositeDiagram", "red", "regularAxis", "height:", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "GETOrdinaryLineDiagram", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeBasicAxisExample2Bar",
category: 'compositeDiagram',
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
args: [],
source: "compositeBasicAxisExample2Bar\x0a\x0a\x09| builder |\x0a\x09builder := GETDiagramBuilder new.\x0a\x09builder compositeDiagram\x0a\x09\x09add: (GETVerticalBarDiagram new \x0a\x09\x09\x09\x09models: #(1 2 3 4 5 6 7 8 9);\x0a\x09\x09\x09\x09color: Color red);\x0a\x09\x09add: (GETVerticalBarDiagram new\x0a\x09\x09\x09\x09models: #(9 8 7 6 5 4 3 2 1);\x0a\x09\x09\x09\x09color: Color blue);\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09builder open",
messageSends: ["new", "add:", "models:", "color:", "red", "compositeDiagram", "blue", "regularAxis", "open"],
referencedClasses: ["GETDiagramBuilder", "GETVerticalBarDiagram", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeBasicExample2Bar",
category: 'compositeDiagram',
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
args: [],
source: "compositeBasicExample2Bar\x0a\x0a\x09| builder |\x0a\x09builder := GETDiagramBuilder new.\x0a\x09builder compositeDiagram\x0a\x09\x09add: (GETVerticalBarDiagram new \x0a\x09\x09\x09\x09models: #(1 2 3);\x0a\x09\x09\x09\x09color: Color red);\x0a\x09\x09add: (GETVerticalBarDiagram new\x0a\x09\x09\x09\x09models: #(3 2 1);\x0a\x09\x09\x09\x09color: Color blue).\x0a\x09\x09\x0a\x09builder open",
messageSends: ["new", "add:", "models:", "color:", "red", "compositeDiagram", "blue", "open"],
referencedClasses: ["GETDiagramBuilder", "GETVerticalBarDiagram", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "compositeDifferentScale2Bar",
category: 'compositeDiagram',
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
args: [],
source: "compositeDifferentScale2Bar\x0a\x0a\x09| builder |\x0a\x09builder := GETDiagramBuilder new.\x0a\x09builder compositeDiagram\x0a\x09\x09add: (GETVerticalBarDiagram new \x0a\x09\x09\x09\x09models: #(1 2 3 4 5 6 7 8 9);\x0a\x09\x09\x09\x09color: Color red);\x0a\x09\x09add: (GETVerticalBarDiagram new\x0a\x09\x09\x09\x09models: #(3 2 1 2 3 2 1 2 3);\x0a\x09\x09\x09\x09color: Color blue);\x0a\x09\x09regularAxis;\x0a\x09\x09height: 200.\x0a\x09\x09\x0a\x09builder interaction draggable.\x0a\x09\x0a\x09builder open",
messageSends: ["new", "add:", "models:", "color:", "red", "compositeDiagram", "blue", "regularAxis", "height:", "draggable", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "GETVerticalBarDiagram", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heros",
category: 'support',
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
args: [],
source: "heros\x0a\x09\x0a\x09| heros |\x0a\x09heros := OrderedCollection new.\x0a\x09heros\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Pudge';\x0a\x09\x09\x09\x09\x09\x09faction: 'STR';\x0a\x09\x09\x09\x09\x09\x09winrate: 47.48;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 3078298);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Drow Ranger';\x0a\x09\x09\x09\x09\x09\x09faction: 'AGI';\x0a\x09\x09\x09\x09\x09\x09winrate: 53.41;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 2653449);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Sniper';\x0a\x09\x09\x09\x09\x09\x09faction: 'AGI';\x0a\x09\x09\x09\x09\x09\x09winrate: 48.04;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 2459542);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Bounty Hunter';\x0a\x09\x09\x09\x09\x09\x09faction: 'AGI';\x0a\x09\x09\x09\x09\x09\x09winrate: 46.85;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 2236704);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Riki';\x0a\x09\x09\x09\x09\x09\x09faction: 'AGI';\x0a\x09\x09\x09\x09\x09\x09winrate: 51.75;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 2193433);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'LifeStealer';\x0a\x09\x09\x09\x09\x09\x09faction: 'STR';\x0a\x09\x09\x09\x09\x09\x09winrate: 51.81;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 2079754);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Phantom Lancer';\x0a\x09\x09\x09\x09\x09\x09faction: 'AGI';\x0a\x09\x09\x09\x09\x09\x09winrate: 53.63;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 1960633);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Spirit Breaker';\x0a\x09\x09\x09\x09\x09\x09faction: 'STR';\x0a\x09\x09\x09\x09\x09\x09winrate: 55.26;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 1873585);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Natures Prophet';\x0a\x09\x09\x09\x09\x09\x09faction: 'INT';\x0a\x09\x09\x09\x09\x09\x09winrate: 47.32;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 1852062);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((DotaHero new)\x0a\x09\x09\x09\x09\x09\x09name: 'Juggernaut';\x0a\x09\x09\x09\x09\x09\x09faction: 'AGI';\x0a\x09\x09\x09\x09\x09\x09winrate: 48.37;\x0a\x09\x09\x09\x09\x09\x09matchesPlayed: 1813474).\x0a\x09^heros.",
messageSends: ["new", "add:", "name:", "faction:", "winrate:", "matchesPlayed:"],
referencedClasses: ["OrderedCollection", "DotaHero"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalBarExample",
category: 'barDiagram',
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
args: [],
source: "horizontalBarExample\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram horizontalBarDiagram\x0a\x09\x09models: #(10 12 13 200 150 -13 149 -151);\x0a\x09\x09regularAxis.\x0a\x09^ diagram open",
messageSends: ["new", "models:", "horizontalBarDiagram", "regularAxis", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample",
category: 'lineDiagram',
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
args: [],
source: "lineBasicExample\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag lineDiagram)\x0a\x09\x09models: (0 to: 100);\x0a\x09\x09y: [ :x | x*x ].\x0a\x09\x09\x0a\x09diag open",
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample2",
category: 'lineDiagram',
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
args: [],
source: "lineBasicExample2\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09diag lineDiagram\x0a\x09\x09height: 200;\x0a\x09\x09models: (-20 to: 20 by: 0.05);\x0a\x09\x09y: [ :x | ((x negated) exp)*((100*x) cos) ];\x0a\x09\x09color: Color black;\x0a\x09\x09regularAxisAsInteger.\x0a\x09diag interaction popUpText.\x0a\x09diag open",
messageSends: ["new", "height:", "lineDiagram", "models:", "to:by:", "y:", "*", "cos", "exp", "negated", "color:", "black", "regularAxisAsInteger", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample3",
category: 'lineDiagram',
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
args: [],
source: "lineBasicExample3\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09diag lineDiagram\x0a\x09\x09height: 200;\x0a\x09\x09models: (0 to: 100);\x0a\x09\x09y: [ :x | x*x ];\x0a\x09\x09x: [:x | x + 100 ];\x0a\x09\x09regularAxis. \x0a\x09diag interaction popUpText.\x0a\x09diag open",
messageSends: ["new", "height:", "lineDiagram", "models:", "to:", "y:", "*", "x:", "+", "regularAxis", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExample4",
category: 'lineDiagram',
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
args: [],
source: "lineBasicExample4\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09diag lineDiagram\x0a\x09\x09height: 200;\x0a\x09\x09models: (-20 to: 20 by: 0.05);\x0a\x09\x09y: [ :x | x*x ];\x0a\x09\x09color: Color black;\x0a\x09\x09regularAxisAsInteger.\x0a\x09diag interaction popUpText.\x0a\x09diag open",
messageSends: ["new", "height:", "lineDiagram", "models:", "to:by:", "y:", "*", "color:", "black", "regularAxisAsInteger", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineBasicExampleWithCustomDotSize",
category: 'lineDiagram',
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
args: [],
source: "lineBasicExampleWithCustomDotSize\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag lineDiagram)\x0a\x09\x09models: (0 to: 100);\x0a\x09\x09y: [ :x | x*x ];\x0a\x09\x09dotSize: 10.\x0a\x09\x09\x0a\x09diag open",
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "dotSize:", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineExample",
category: 'lineDiagram',
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
args: [],
source: "lineExample\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09diag lineDiagram\x0a\x09\x09height: 200;\x0a\x09\x09models: (-2* Float pi to: 2 * Float pi by: 0.01);\x0a\x09\x09y: [ :x | ((x * Float pi) sin * (x squared * Float pi) cos) * x ];\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09diag interaction popUpText.\x0a\x09diag open",
messageSends: ["new", "height:", "lineDiagram", "models:", "to:by:", "*", "pi", "y:", "cos", "squared", "sin", "regularAxis", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "Float"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "lineExample2",
category: 'lineDiagram',
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
args: [],
source: "lineExample2\x0a\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09diag lineDiagram \x0a\x09\x09height: 200;\x0a\x09\x09models: (0 to: 50);\x0a\x09\x09y: [ :x | -1 ** x ];\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09diag interaction popUpText.\x0a\x09diag open",
messageSends: ["new", "height:", "lineDiagram", "models:", "to:", "y:", "**", "regularAxis", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ordinaryLineExample",
category: 'lineDiagram',
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
args: [],
source: "ordinaryLineExample\x0a\x0a\x09| diag |\x0a\x09\x0a\x09diag := GETDiagramBuilder new.\x0a\x09diag ordinaryLineDiagram\x0a\x09\x09y: #loc;\x0a\x09\x09height: 200;\x0a\x09\x09\x22identifier: #versionNumber;\x22\x0a\x09\x09yAxisLabel: 'LoC';\x0a\x09\x09\x22rotatedLabels: true;\x22\x0a\x09\x09regularAxis; \x22valueAxis;\x22\x0a\x09\x09color: Color blue;\x0a\x09\x09\x22deviationValue: (self versions collect: #loc) average;\x22\x0a\x09\x09\x22deviationDescription: 'average';\x22\x0a\x09\x09\x22preferredAxisMinY: (self versions minValue: #loc);\x22\x0a\x09\x09models: self versions.\x0a\x09\x0a\x09^ diag open",
messageSends: ["new", "y:", "ordinaryLineDiagram", "height:", "yAxisLabel:", "regularAxis", "color:", "blue", "models:", "versions", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pieExample",
category: 'pieDiagram',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"pieExample",{},smalltalk.GETExamples.klass)})},
args: [],
source: "pieExample\x0a\x0a\x22\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag pieDiagram) models: #(30 10 20 40).\x0a\x09\x0a\x09^ diag open.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "roassalHierarchy",
category: 'coolExamples',
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
args: [],
source: "roassalHierarchy\x0a\x0a\x09\x22self roassalHierarchy\x22\x0a\x0a\x09| view diagBuilder classes container el shape hierarchy |\x0a\x0a\x09\x22Prepare the data\x22\x0a\x09classes := ROShape withAllSubclasses.\x0a\x09\x0a\x09view := ROView new.\x0a\x09view @ RODraggable.\x0a\x09\x0a\x09hierarchy := ROBorder element.\x0a\x09hierarchy addAll: (ROBox elementsOn: classes).\x0a\x09ROLine buildEdgesFromElements: hierarchy elements from: #superclass to: #yourself.\x0a\x09ROTreeLayout on: hierarchy elementsNotEdge edges: hierarchy elementsAsEdge.\x0a\x09view add: hierarchy.\x0a\x09hierarchy translateTo: 530 @ 0.\x0a\x09\x0a\x09container := ROBorder element.\x0a\x09container translateTo: (0 @ 250).\x0a\x09container resizeStrategy: (ROShrinkingParent new padding: (5 @ 5) ).\x0a\x09\x0a\x09diagBuilder := GETDiagramBuilder new.\x0a\x09diagBuilder verticalBarDiagram\x0a\x09\x09models: classes;\x0a\x09\x09y: #numberOfLinesOfCode;\x0a\x09\x09height: 200;\x0a\x09\x09yAxisLabel: 'LoC';\x0a\x09\x09regularAxisAsInteger.\x0a\x09\x0a\x09diagBuilder interaction \x0a\x09\x09strongHighlightWhenOver;\x0a\x09\x09popUpText;\x0a\x09\x09on: ROMouseClick do: [ :event | \x0a\x09\x09\x09container elements do: #remove.\x0a\x09\x09\x09event model methods do: [ :cm | \x0a\x09\x09\x09\x09shape := ROBox new extent: 8 @ 8.\x0a\x09\x09\x09\x09cm linesOfCode > 10 ifTrue: [ shape color: Color red ].\x0a\x09\x09\x09\x09el := shape elementOn: cm.\x0a\x09\x09\x09\x09el @ (ROPopup text: [ :e | e getSource ]).\x0a\x09\x09\x09\x09el @ (ROMenuActivable new \x0a\x09\x09\x09\x09item: 'browse' action: [ :e | e model browse ]).\x0a\x09\x0a\x09\x09\x09\x09container add: el ].\x0a\x09\x09\x09\x0a\x09\x09\x09ROGridLayout on: container elements.\x0a\x09\x09\x09container translateTo: (0 @ 250)];\x0a\x09\x09\x0a\x09\x09on: ROMouseEnter do: [ :event |\x0a\x09\x09\x09ROBlink highlight: (hierarchy elementFromModel: event model) ];\x0a\x09\x09on: ROMouseLeave do: [ :event |\x0a\x09\x09\x09ROBlink unhighlight: (hierarchy elementFromModel: event model) ].\x0a\x0a\x09diagBuilder openIn: view.\x0a\x0a\x09view add: container.\x0a\x09view openInWindowSized: 1000 @ 550",
messageSends: ["withAllSubclasses", "new", "@", "element", "addAll:", "elementsOn:", "buildEdgesFromElements:from:to:", "elements", "on:edges:", "elementsNotEdge", "elementsAsEdge", "add:", "translateTo:", "resizeStrategy:", "padding:", "models:", "verticalBarDiagram", "y:", "height:", "yAxisLabel:", "regularAxisAsInteger", "strongHighlightWhenOver", "interaction", "popUpText", "on:do:", "do:", "extent:", "ifTrue:", "color:", "red", ">", "linesOfCode", "elementOn:", "text:", "getSource", "item:action:", "browse", "model", "methods", "on:", "highlight:", "elementFromModel:", "unhighlight:", "openIn:", "openInWindowSized:"],
referencedClasses: ["ROShape", "ROView", "RODraggable", "ROBorder", "ROBox", "ROLine", "ROTreeLayout", "ROShrinkingParent", "GETDiagramBuilder", "ROMouseClick", "Color", "ROPopup", "ROMenuActivable", "ROGridLayout", "ROMouseEnter", "ROBlink", "ROMouseLeave"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "scatterPlotExample",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"scatterPlotExample",{},smalltalk.GETExamples.klass)})},
args: [],
source: "scatterPlotExample\x0a\x0a\x22\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09\x0a\x09(diag scatterplot)\x0a\x09\x09y: #winrate;\x0a\x09\x09x: #matchesPlayed;\x0a\x09\x09models: self heros.\x0a\x09\x09\x0a\x09^ diag open.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ubercoolAnimationExample",
category: 'coolExamples',
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
args: [],
source: "ubercoolAnimationExample\x0a\x0a\x09\x22self ubercoolAnimationExample\x22\x0a\x0a\x09| diag button ys index |\x0a\x09\x0a\x09diag := GETDiagramBuilder new.\x0a\x09\x0a\x09diag lineDiagram\x0a\x09\x09models: (0 to: (2 * Float pi) by: 0.05);\x0a\x09\x09y: [ :x | x sin ];\x0a\x09\x09height: 200;\x0a\x09\x09yAxisLabel: 'sin/cos sequence';\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09diag open.\x0a\x09\x0a\x09index := 2.\x0a\x09ys := { [ :x | x sin ] . [ :x | x cos ] .  [ :x | x sin negated ] . [ :x | x cos negated ] }.\x0a\x09button := ROLabel elementOn: 'next'.\x0a\x09button + ROBorder.\x0a\x09button on: ROMouseClick do: [ :event |  \x0a\x09\x09diag updateY: (ys at: index).\x0a\x09\x09index := (index \x5c\x5c 4) + 1 ].\x0a\x09\x0a\x09diag rawView add: button.\x0a\x09button translateTo: -20 @ 250",
messageSends: ["new", "models:", "to:by:", "*", "pi", "lineDiagram", "y:", "sin", "height:", "yAxisLabel:", "regularAxis", "open", "cos", "negated", "elementOn:", "+", "on:do:", "updateY:", "at:", "\x5c\x5c", "add:", "rawView", "translateTo:", "@"],
referencedClasses: ["GETDiagramBuilder", "Float", "ROLabel", "ROBorder", "ROMouseClick"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "versions",
category: 'support',
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
args: [],
source: "versions\x0a\x09\x0a\x09| versions |\x0a\x09versions := OrderedCollection new.\x0a\x09versions\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.0';\x0a\x09\x09\x09\x09\x09\x09loc: 3346);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.1';\x0a\x09\x09\x09\x09\x09\x09loc: 3455);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.2';\x0a\x09\x09\x09\x09\x09\x09loc: 3755);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.3';\x0a\x09\x09\x09\x09\x09\x09loc: 4674);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.4';\x0a\x09\x09\x09\x09\x09\x09loc: 4738);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.5';\x0a\x09\x09\x09\x09\x09\x09loc: 4378);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.6';\x0a\x09\x09\x09\x09\x09\x09loc: 4890);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.7';\x0a\x09\x09\x09\x09\x09\x09loc: 4908);\x0a\x09\x09add:\x0a\x09\x09\x09\x09((GETVersion new)\x0a\x09\x09\x09\x09\x09\x09versionNumber: '1.8';\x0a\x09\x09\x09\x09\x09\x09loc: 5013).\x0a\x09^ versions",
messageSends: ["new", "add:", "versionNumber:", "loc:"],
referencedClasses: ["OrderedCollection", "GETVersion"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarCustomLabelExample",
category: 'barDiagram',
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
args: [],
source: "verticalBarCustomLabelExample\x0a\x09\x22Each matchesPlayed is an Integer (max ~3.000.000), so matchedPlayed/pi can not be an Integer, the decorator will round it to the nearest Integer\x22\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: self heros;\x0a\x09\x09y: [:each | (#matchesPlayed value: each) / (Float pi)];\x0a\x09\x09valueAxisLine;\x0a\x09\x09addValueDecorator: (GETRegularLabelDecorator new formatInteger).\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "/", "pi", "value:", "valueAxisLine", "addValueDecorator:", "formatInteger", "open"],
referencedClasses: ["GETDiagramBuilder", "Float", "GETRegularLabelDecorator"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarCustomLabelExample2",
category: 'barDiagram',
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
args: [],
source: "verticalBarCustomLabelExample2\x0a\x09\x22Each matchesPlayed is an Integer (max ~3.000.000), so matchedPlayed/pi can not be an Integer, the decorator will round it the 2 most significant decimals\x22\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: self heros;\x0a\x09\x09y: [:each | (#matchesPlayed value: each) / (Float pi)];\x0a\x09\x09valueAxisLine;\x0a\x09\x09addValueDecorator: (GETRegularLabelDecorator new formatTruncatedFloat).\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "/", "pi", "value:", "valueAxisLine", "addValueDecorator:", "formatTruncatedFloat", "open"],
referencedClasses: ["GETDiagramBuilder", "Float", "GETRegularLabelDecorator"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: #(10 12 13 200 150 -13 149 -151);\x0a\x09\x09spacing: 1.\x0a\x09^ diagram open",
messageSends: ["new", "models:", "verticalBarDiagram", "spacing:", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample2",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample2\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: self heros;\x0a\x09\x09y: #matchesPlayed.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample3",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample3\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: #(1 2 3 4 5);\x0a\x09\x09y: #yourself;\x0a\x09\x09color: Color blue.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "blue", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample4",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample4\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: #(1 2 3 4 5);\x0a\x09\x09y: #yourself;\x0a\x09\x09color:  [ :v | v odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ].\x0a\x09^ diagram open",
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "gray", "odd", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample5",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample5\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: #(#asd #sadf #sadasd #asdasdr #adasdd);\x0a\x09\x09y: #size;\x0a\x09\x09color:  [ :v | (v size) odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ].\x0a\x09^ diagram open",
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "gray", "odd", "size", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample6",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample6\x0a\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: self heros;\x0a\x09\x09y: #matchesPlayed;\x0a\x09\x09color: #faction;\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09diagram interaction\x0a\x09\x09popUpText: [ :each | each name ].\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "color:", "regularAxis", "popUpText:", "name", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample7",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample7\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: self heros;\x0a\x09\x09y: #matchesPlayed;\x0a\x09\x09color: [:each | ((each faction) = 'STR') ifTrue: [ Color red ] ifFalse: [ Color green ] ];\x0a\x09\x09regularAxis;\x0a\x09\x09titleLabel: '10 most played Heros by matchesPlayed';\x0a\x09\x09yAxisLabel: 'Matches Played'.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "green", "=", "faction", "regularAxis", "titleLabel:", "yAxisLabel:", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExample8WithNegativeValues",
category: 'barDiagram',
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
args: [],
source: "verticalBarExample8WithNegativeValues\x0a\x09\x0a\x09| diagram values |\x0a\x09values := (1 to: 10) collect: [ :v | 10 atRandom - 5 ].\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: values;\x0a\x09\x09height: 150;\x0a\x09\x09color: [:each | each < 0 ifTrue: [ Color red ] ifFalse: [ Color green ] ];\x0a\x09\x09regularAxis.\x0a\x09diagram interaction \x0a\x09\x09popUpText.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["collect:", "-", "atRandom", "to:", "new", "models:", "verticalBarDiagram", "height:", "color:", "ifTrue:ifFalse:", "red", "green", "<", "regularAxis", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarExampleAxis",
category: 'barDiagram',
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
args: [],
source: "verticalBarExampleAxis\x0a\x09\x0a\x09| diagram |\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09diagram verticalBarDiagram\x0a\x09\x09models: #(1 2 3 4 5);\x0a\x09\x09y: #yourself;\x0a\x09\x09color: Color blue;\x0a\x09\x09regularAxis.\x0a\x09\x09\x0a\x09^ diagram open",
messageSends: ["new", "models:", "verticalBarDiagram", "y:", "color:", "blue", "regularAxis", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram) \x0a\x09\x09models: #(30 10 20 40).\x0a\x09\x0a\x09diag interaction\x0a\x09\x09strongHighlightWhenOver.\x0a\x09\x09\x0a\x09diag open.",
messageSends: ["new", "models:", "verticalBarDiagram", "strongHighlightWhenOver", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample2",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample2\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram) \x0a\x09\x09models: #(30 10 20 40).\x0a\x09\x0a\x09diag interaction\x0a\x09\x09strongHighlightWhenClick.\x0a\x09\x09\x0a\x09diag open.",
messageSends: ["new", "models:", "verticalBarDiagram", "strongHighlightWhenClick", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample3",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample3\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram) \x0a\x09\x09models: #(30 10 20 40);\x0a\x09\x09height: 80;\x0a\x09\x09regularAxis.\x0a\x09\x0a\x09diag interaction\x0a\x09\x09strongHighlightWhenClick;\x0a\x09\x09popUpText.\x0a\x09\x09\x0a\x09diag open",
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "regularAxis", "strongHighlightWhenClick", "interaction", "popUpText", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample4",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample4\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram)\x0a\x09\x09y: #winrate;\x0a\x09\x09models: self heros.\x0a\x09\x0a\x09diag interaction\x0a\x09\x09strongHighlightWhenClick;\x0a\x09\x09popUpText.\x0a\x09\x09\x0a\x09diag open",
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "strongHighlightWhenClick", "interaction", "popUpText", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample5",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample5\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram)\x0a\x09\x09y: #winrate;\x0a\x09\x09models: self heros.\x0a\x09\x0a\x09diag interaction\x0a\x09\x09popUpText: #winrate.\x0a\x09\x09\x0a\x09diag open.",
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "popUpText:", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample6",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample6\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram)\x0a\x09\x09y: #winrate;\x0a\x09\x09models: self heros.\x0a\x09\x0a\x09diag interaction\x0a\x09\x09popUpText: [:each | 'Click me'];\x0a\x09\x09on: ROMouseClick do: [:each | self inform: 'You clicked on the bars, good one ;)'].\x0a\x09\x09\x0a\x09diag open.",
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "popUpText:", "interaction", "on:do:", "inform:", "open"],
referencedClasses: ["GETDiagramBuilder", "ROMouseClick"]
}),
smalltalk.GETExamples.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBarInteractionExample7",
category: 'barDiagram',
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
args: [],
source: "verticalBarInteractionExample7\x0a\x09\x0a\x09| diag |\x0a\x09diag := GETDiagramBuilder new.\x0a\x09(diag verticalBarDiagram)\x0a\x09\x09y: #winrate;\x0a\x09\x09models: self heros.\x0a\x09\x0a\x09diag interaction\x0a\x09\x09draggable.\x0a\x09\x09\x0a\x09diag open.",
messageSends: ["new", "y:", "verticalBarDiagram", "models:", "heros", "draggable", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.GETExamples.klass);


smalltalk.addClass('GETVersion', smalltalk.Object, ['loc', 'versionNumber'], 'Graph-ET-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "loc",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@loc"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"loc",{},smalltalk.GETVersion)})},
args: [],
source: "loc\x0a\x09^ loc",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETVersion);

smalltalk.addMethod(
smalltalk.method({
selector: "loc:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@loc"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"loc:",{anObject:anObject},smalltalk.GETVersion)})},
args: ["anObject"],
source: "loc: anObject\x0a\x09loc := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETVersion);

smalltalk.addMethod(
smalltalk.method({
selector: "versionNumber",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@versionNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"versionNumber",{},smalltalk.GETVersion)})},
args: [],
source: "versionNumber\x0a\x09\x0a\x09^ versionNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETVersion);

smalltalk.addMethod(
smalltalk.method({
selector: "versionNumber:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@versionNumber"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"versionNumber:",{anObject:anObject},smalltalk.GETVersion)})},
args: ["anObject"],
source: "versionNumber: anObject\x0a\x09\x0a\x09versionNumber := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GETVersion);



