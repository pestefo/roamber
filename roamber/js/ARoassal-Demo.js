define("roamber/ARoassal-Demo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "roamber/ARoassal", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-Demo');
smalltalk.packages["ARoassal-Demo"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('RODemo', smalltalk.Object, ['workspace', 'selector'], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
function $ROExampleSelector(){return smalltalk.ROExampleSelector||(typeof ROExampleSelector=="undefined"?nil:ROExampleSelector)}
function $ROWorkspace(){return smalltalk.ROWorkspace||(typeof ROWorkspace=="undefined"?nil:ROWorkspace)}
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=_st($ROExampleSelector())._init();
$ctx1.sendIdx["init"]=1;
self["@workspace"]=_st($ROWorkspace())._init();
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo)})},
args: [],
source: "init\x0a\x09\x22 Initializes widgets\x22\x0a\x09selector := ROExampleSelector init.\x0a\x09workspace := ROWorkspace init.",
messageSends: ["init"],
referencedClasses: ["ROExampleSelector", "ROWorkspace"]
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "writeExample:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._clear();
_st(self["@workspace"])._val_(aString);
_st(self["@workspace"])._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"writeExample:",{aString:aString},smalltalk.RODemo)})},
args: ["aString"],
source: "writeExample: aString\x0a\x09workspace clear.\x0a\x09workspace val: aString.\x0a\x09workspace doIt.",
messageSends: ["clear", "val:", "doIt"],
referencedClasses: []
}),
smalltalk.RODemo);


smalltalk.RODemo.klass.iVarNames = ['demo'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@demo"];
if(($receiver = $1) == nil || $receiver == null){
self["@demo"]=self._new();
self["@demo"];
} else {
$1;
};
$2=self["@demo"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.RODemo.klass)})},
args: [],
source: "current\x0a\x09demo ifNil: [  demo := self new].\x0a\x09^ demo",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.RODemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._init();
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo.klass)})},
args: [],
source: "init\x0a\x09\x22 Initializes widgets\x22\x0a\x09self current init.",
messageSends: ["init", "current"],
referencedClasses: []
}),
smalltalk.RODemo.klass);


smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "barAndLines",
category: 'demo',
fn: function (){
var self=this;
var builder,values;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7,$8;
values=[(10), (12), (13), (80), (70), (20), (56)];
builder=_st($GETDiagramBuilder())._new();
$ctx1.sendIdx["new"]=1;
$1=_st(builder)._compositeDiagram();
$2=$1;
$4=_st($GETVerticalBarDiagram())._new();
$ctx1.sendIdx["new"]=2;
_st($4)._models_(values);
$ctx1.sendIdx["models:"]=1;
$5=_st($4)._color_(_st($Color())._lightGreen());
$ctx1.sendIdx["color:"]=1;
$3=$5;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
$6=_st($GETOrdinaryLineDiagram())._new();
_st($6)._models_(values);
_st($6)._y_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(v)._cos())._abs()).__star((50));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
$7=_st($6)._color_(_st($Color())._brown());
_st($1)._add_($7);
_st($1)._height_((250));
$8=_st($1)._regularAxis();
_st(_st(builder)._interaction())._popUpText();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"barAndLines",{builder:builder,values:values},smalltalk.ROExample)})},
args: [],
source: "barAndLines\x0a\x0a|builder values|\x0avalues := #(10 12 13 80 70 20 56).\x0abuilder := GETDiagramBuilder new.\x0abuilder compositeDiagram\x0a\x09add: (GETVerticalBarDiagram new\x0a\x09\x09\x09models: values;\x0a\x09\x09\x09color: Color lightGreen);\x0a\x0a\x09add: (GETOrdinaryLineDiagram new\x0a\x09\x09\x09models: values;\x0a\x09\x09\x09y: [:v | v cos abs * 50];\x0a\x09\x09\x09color: Color brown);\x0a\x09height: 250;\x0a\x09regularAxis.\x0a\x0abuilder interaction popUpText.\x0abuilder open.",
messageSends: ["new", "add:", "compositeDiagram", "models:", "color:", "lightGreen", "y:", "*", "abs", "cos", "brown", "height:", "regularAxis", "popUpText", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "GETVerticalBarDiagram", "Color", "GETOrdinaryLineDiagram"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "boxGenerator",
category: 'demo',
fn: function (){
var self=this;
var view,el,e;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
view=_st($ROView())._new();
$1=_st($ROBox())._element();
$ctx1.sendIdx["element"]=1;
el=_st($1)._color_(_st($Color())._green());
_st(view)._add_(el);
$ctx1.sendIdx["add:"]=1;
_st(el)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
e=_st($ROBox())._element();
e;
$2=e;
$4=_st(view)._elements();
$ctx2.sendIdx["elements"]=1;
$3=_st($4)._size();
_st($2)._size_($3);
_st(view)._add_(e);
_st($ROCellLayout())._on_(_st(view)._elements());
return _st(view)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"boxGenerator",{view:view,el:el,e:e},smalltalk.ROExample)})},
args: [],
source: "boxGenerator\x0a\x0a\x09\x22 Click on the green square multiple times \x22\x0a\x09| view el e |\x0a\x09view := ROView new.\x0a\x09el := ROBox element color: (Color green).\x0a\x09view add: el.\x0a\x09el on: ROMouseClick do: [:event | \x0a\x09\x09e := ROBox element.\x0a\x09\x09e size: (view elements size).\x0a\x09\x09view add: e. \x0a\x09\x09ROCellLayout on: view elements.\x0a\x09\x09view signalUpdate\x0a\x09].\x0a\x09view open.",
messageSends: ["new", "color:", "element", "green", "add:", "on:do:", "size:", "size", "elements", "on:", "signalUpdate", "open"],
referencedClasses: ["ROView", "ROBox", "Color", "ROMouseClick", "ROCellLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "cellLayout",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._clear();
(1)._to_do_((200),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st(_st($ROBox())._elementOn_(i)).__at($RODraggable()));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)})}));
_st($ROCellLayout())._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"cellLayout",{view:view},smalltalk.ROExample)})},
args: [],
source: "cellLayout\x0a| view |\x0aview := ROView new.\x0aview clear.\x0a\x22 Play changing the number of squares\x22\x0a1 to: 200 do: [ :i |\x0a\x09view add: (ROBox elementOn: i) @RODraggable ].\x0a\x09ROCellLayout on: view elements .\x0a\x09view open.",
messageSends: ["new", "clear", "to:do:", "add:", "@", "elementOn:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROBox", "RODraggable", "ROCellLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
view=_st($ROView())._new();
$1=view;
$3=_st(_st(_st($ROEllipse())._element())._translateTo_((50).__at((50)))).__at($RODraggable());
$ctx1.sendIdx["@"]=1;
$2=_st($3)._color_(_st($Color())._green());
_st($1)._add_($2);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)})},
args: [],
source: "circle\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: ((ROEllipse element translateTo: 50 @ 50) @ RODraggable color: Color green).\x0a\x09view open.",
messageSends: ["new", "add:", "color:", "@", "translateTo:", "element", "green", "open"],
referencedClasses: ["ROView", "ROEllipse", "RODraggable", "Color"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionHierarchy",
category: 'demo',
fn: function (){
var self=this;
var view,classElements,edges,associations;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROHighlight(){return smalltalk.ROHighlight||(typeof ROHighlight=="undefined"?nil:ROHighlight)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$8,$7,$9,$12,$11,$10;
view=_st($ROView())._new();
classElements=_st($ROElement())._forCollection_(_st($Collection())._withAllSubclasses());
_st(classElements)._do_((function(c){
var instVar,numMethods;
return smalltalk.withContext(function($ctx2) {
$1=_st(c)._model();
$ctx2.sendIdx["model"]=1;
instVar=_st($1)._numberOfVariables();
instVar;
$2=_st(c)._shape();
$ctx2.sendIdx["shape"]=1;
$4=_st(instVar).__eq((0));
$ctx2.sendIdx["="]=1;
if(smalltalk.assert($4)){
$3=(10);
} else {
$3=_st(instVar).__star((15));
$ctx2.sendIdx["*"]=1;
};
_st($2)._width_($3);
$5=_st(c)._model();
$ctx2.sendIdx["model"]=2;
numMethods=_st($5)._numberOfMethods();
numMethods;
$6=_st(c)._shape();
$8=_st(numMethods).__eq((0));
$ctx2.sendIdx["="]=2;
if(smalltalk.assert($8)){
$7=(3);
} else {
$7=_st(numMethods).__star((2));
};
_st($6)._height_($7);
$9=_st(_st(_st(c).__plus($ROBox())).__at($RODraggable())).__at($ROHighlight());
$ctx2.sendIdx["@"]=2;
return _st($9).__at($ROPopup());
$ctx2.sendIdx["@"]=1;
}, function($ctx2) {$ctx2.fillBlock({c:c,instVar:instVar,numMethods:numMethods},$ctx1,1)})}));
_st(view)._addAll_(classElements);
$ctx1.sendIdx["addAll:"]=1;
associations=_st(classElements)._collect_thenSelect_((function(c){
return smalltalk.withContext(function($ctx2) {
$12=_st(c)._model();
$ctx2.sendIdx["model"]=3;
$11=_st($12)._superclass();
$ctx2.sendIdx["superclass"]=1;
$10=_st($11).__eq($Object());
if(! smalltalk.assert($10)){
return _st(_st(view)._elementFromModel_(_st(_st(c)._model())._superclass())).__minus_gt(c);
};
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,6)})}),(function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(assoc)._isNil())._not();
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,8)})}));
edges=_st($ROEdge())._linesFor_(associations);
_st(view)._addAll_(edges);
_st($ROTreeLayout())._on_edges_(_st(view)._elements(),edges);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"collectionHierarchy",{view:view,classElements:classElements,edges:edges,associations:associations},smalltalk.ROExample)})},
args: [],
source: "collectionHierarchy\x0a| view classElements edges associations |\x0aview := ROView new.\x0aclassElements := ROElement forCollection: Collection withAllSubclasses.\x0aclassElements\x0a\x09do: [:c | | instVar numMethods |\x0a\x09\x09instVar := c model numberOfVariables.\x0a\x09\x09c shape width: (( instVar = 0) ifTrue: [ 10 ] ifFalse: [ instVar * 15]) .\x0a\x0a\x09\x09numMethods := c model numberOfMethods.\x0a\x09\x09c shape height: (( numMethods = 0) ifTrue: [ 3 ] ifFalse: [ numMethods * 2]) . \x09\x0a\x09\x09c + ROBox @ RODraggable @ ROHighlight  @ ROPopup.\x0a\x0a].\x0aview addAll: classElements.\x0a\x0a\x22 Build and add edges \x22\x0aassociations := classElements collect: [:c |\x0a\x09\x09\x09(c model superclass = Object)\x0a\x09\x09\x09ifFalse: [ (view elementFromModel: c\x0a\x09\x09\x09\x09model superclass) -> c]\x0a\x09\x09\x09] thenSelect: [:assoc | assoc isNil not ].\x0a\x09\x09\x09\x0aedges := ROEdge linesFor: associations.\x0aview addAll: edges.\x0a\x0a\x22 Show the hierarchy as a tree \x22\x0aROTreeLayout on: (view elements) edges: edges.\x0a\x0a\x0aview open.",
messageSends: ["new", "forCollection:", "withAllSubclasses", "do:", "numberOfVariables", "model", "width:", "shape", "ifTrue:ifFalse:", "=", "*", "numberOfMethods", "height:", "@", "+", "addAll:", "collect:thenSelect:", "ifFalse:", "superclass", "->", "elementFromModel:", "not", "isNil", "linesFor:", "on:edges:", "elements", "open"],
referencedClasses: ["ROView", "ROElement", "Collection", "ROBox", "RODraggable", "ROHighlight", "ROPopup", "Object", "ROEdge", "ROTreeLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "create",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
$1=view;
$3=_st($ROElement())._new();
$ctx1.sendIdx["new"]=2;
$2=_st($3)._shape_(_st($ROBox())._new());
_st($1)._add_($2);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)})},
args: [],
source: "create\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROElement new shape: (ROBox new)).\x0a\x09view open.",
messageSends: ["new", "add:", "shape:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "drag",
category: 'not yet classified',
fn: function (){
var self=this;
var view,elements,b;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
elements=_st($OrderedCollection())._new();
b=_st(_st($ROBox())._element())._translateTo_((50).__at((50)));
_st(elements)._add_(b);
$ctx1.sendIdx["add:"]=1;
_st(elements)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._addInteraction_($RODraggable());
return _st(view)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"drag",{view:view,elements:elements,b:b},smalltalk.ROExample)})},
args: [],
source: "drag\x0a\x09| view elements b |\x0a\x09view := ROView new.\x0a\x09elements := OrderedCollection new.\x0a\x09b := (ROBox element translateTo: 50 @ 50).\x0a\x09elements add: b.\x22; \x0a\x09\x09\x09 add: (ROCircle element translateTo: 200 @ 150). \x22\x0a\x09\x0a\x09elements do: [:each | each addInteraction: RODraggable. view add: each].\x0a\x09view open.",
messageSends: ["new", "translateTo:", "element", "@", "add:", "do:", "addInteraction:", "open"],
referencedClasses: ["ROView", "OrderedCollection", "ROBox", "RODraggable"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "exampleImage",
category: 'not yet classified',
fn: function (){
var self=this;
var view,url,el,sh;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROImage(){return smalltalk.ROImage||(typeof ROImage=="undefined"?nil:ROImage)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
url="https://www.google.cl/images/srpr/logo11w.png";
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
$1=view;
$3=_st(_st($ROBox())._new())._elementOn_((1));
$ctx1.sendIdx["elementOn:"]=1;
$2=_st($3).__at($RODraggable());
$ctx1.sendIdx["@"]=1;
_st($1)._add_($2);
$ctx1.sendIdx["add:"]=1;
el=_st(_st(_st($ROImage())._url_(url))._elementOn_((1))).__at($RODraggable());
_st(el)._size_((200));
_st(view)._add_(el);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"exampleImage",{view:view,url:url,el:el,sh:sh},smalltalk.ROExample)})},
args: [],
source: "exampleImage\x0a|view url el sh|\x0aurl := 'https://www.google.cl/images/srpr/logo11w.png'.\x0aview := ROView new.\x0aview add: (ROBox new elementOn: 1) @RODraggable.\x0ael := ((ROImage url: url) elementOn: 1) @ RODraggable.\x0ael size: 200.\x0aview add: el.\x0a\x0a\x0a\x0aview open.",
messageSends: ["new", "add:", "@", "elementOn:", "url:", "size:", "open"],
referencedClasses: ["ROView", "ROBox", "RODraggable", "ROImage"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "exampleImage2",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"exampleImage2",{},smalltalk.ROExample)})},
args: [],
source: "exampleImage2\x0a\x09\x22 two buttons + and - and an image. When clicking any of them, resize the image \x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "gdp",
category: 'demo',
fn: function (){
var self=this;
var view,cityBuilder,values,graphBuilder,color;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5,$6,$8,$12,$11,$10,$9,$7,$13;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
color=_st($Color())._lightBlue();
cityBuilder=_st($ROMapBuilder())._new();
$ctx1.sendIdx["new"]=2;
_st(cityBuilder)._view_(view);
_st(cityBuilder)._allCountries();
$2=_st($ROMapBuilder())._new();
$ctx1.sendIdx["new"]=3;
$1=_st($2)._pib();
values=_st($1)._sorted_((function(ar1,ar2){
return smalltalk.withContext(function($ctx2) {
$3=_st(ar2)._second();
$ctx2.sendIdx["second"]=1;
return _st($3).__lt(_st(ar1)._second());
}, function($ctx2) {$ctx2.fillBlock({ar1:ar1,ar2:ar2},$ctx1,1)})}));
graphBuilder=_st($GETDiagramBuilder())._new();
_st(graphBuilder)._rawView_(view);
$4=_st(graphBuilder)._verticalBarDiagram();
_st($4)._models_(_st(values)._copyFrom_to_((1),(40)));
_st($4)._y_("second");
_st($4)._color_(color);
$ctx1.sendIdx["color:"]=1;
_st($4)._regularAxisAsInteger();
_st($4)._barWidth_((2));
$5=_st($4)._titleLabel_("Gross Domestic Product (GDP)");
$6=_st(_st(graphBuilder)._interaction())._popUpText();
_st($6)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
$8=view;
$12=_st(event)._element();
$ctx2.sendIdx["element"]=1;
$11=_st($12)._model();
$ctx2.sendIdx["model"]=1;
$10=_st($11)._first();
$ctx2.sendIdx["first"]=1;
$9=_st($10)._asSymbol();
$ctx2.sendIdx["asSymbol"]=1;
$7=_st($8)._elementFromModel_($9);
$ctx2.sendIdx["elementFromModel:"]=1;
return _st($7)._color_(color);
$ctx2.sendIdx["color:"]=2;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
$ctx1.sendIdx["on:do:"]=1;
$13=_st($6)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(view)._elementFromModel_(_st(_st(_st(_st(event)._element())._model())._first())._asSymbol()))._color_(_st($Color())._white());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,3)})}));
_st(graphBuilder)._openIn_(view);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"gdp",{view:view,cityBuilder:cityBuilder,values:values,graphBuilder:graphBuilder,color:color},smalltalk.ROExample)})},
args: [],
source: "gdp\x0a| view cityBuilder values graphBuilder color|\x0a\x09view := ROView new.\x0a\x09color := Color lightBlue.\x0a\x09\x0a\x09\x22Maps\x22\x0a\x09cityBuilder := ROMapBuilder new.\x0a\x09cityBuilder view: view.\x0a\x09cityBuilder allCountries.\x0a\x09\x0a\x09\x22Values\x22\x0a\x09values := ROMapBuilder new pib \x0a\x09\x09\x09sorted: [ :ar1 :ar2 | ar2 second < ar1 second ].\x0a\x09graphBuilder := GETDiagramBuilder new.\x0a\x09graphBuilder rawView: view.\x0a\x09graphBuilder verticalBarDiagram\x0a\x09\x09\x09models: (values copyFrom: 1 to: 40);\x0a\x09\x09\x09y: #second;\x0a\x09\x09\x09color: color;\x0a\x09\x09\x09regularAxisAsInteger;\x0a\x09\x09\x09barWidth: 2;\x0a\x09\x09\x09titleLabel: 'Gross Domestic Product (GDP)'.\x0a\x09graphBuilder interaction popUpText\x0a\x09\x09on: ROMouseEnter \x0a\x09\x09do: [ :event |  \x0a\x09\x09\x09\x09(view elementFromModel: \x0a\x09\x09\x09\x09\x09event element model first asSymbol) color: color  ];\x0a\x09\x09on: ROMouseLeave \x0a\x09\x09do: [ :event |  \x0a\x09\x09\x09\x09(view elementFromModel: \x0a\x09\x09\x09\x09\x09event element model first asSymbol) color: Color white  ] \x09\x09\x09.\x0a\x09graphBuilder openIn: view.\x0a\x09\x0a\x09\x22Openining the thing\x22\x0a\x09view open.\x0a\x09\x22view openInWindowSized: 1000 @ 600.\x22",
messageSends: ["new", "lightBlue", "view:", "allCountries", "sorted:", "pib", "<", "second", "rawView:", "models:", "verticalBarDiagram", "copyFrom:to:", "y:", "color:", "regularAxisAsInteger", "barWidth:", "titleLabel:", "on:do:", "popUpText", "interaction", "elementFromModel:", "asSymbol", "first", "model", "element", "white", "openIn:", "open"],
referencedClasses: ["ROView", "Color", "ROMapBuilder", "GETDiagramBuilder", "ROMouseEnter", "ROMouseLeave"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "greenAndRedNumbers",
category: 'demo',
fn: function (){
var self=this;
var diagram,values;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
values=_st((1)._to_((10)))._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st((10)._atRandom()).__minus((5));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
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
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
$3=_st($1)._regularAxis();
_st(_st(diagram)._rawView())._translateBy_((-100).__at((-100)));
_st(_st(diagram)._interaction())._popUpText_((function(el){
return smalltalk.withContext(function($ctx2) {
$4=_st(el).__gt((0));
if(smalltalk.assert($4)){
$5=_st(el)._asString();
$ctx2.sendIdx["asString"]=1;
return _st($5).__comma(" is a green number");
$ctx2.sendIdx[","]=1;
} else {
return _st(_st(el)._asString()).__comma(" is a red number :(");
};
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1,5)})}));
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"greenAndRedNumbers",{diagram:diagram,values:values},smalltalk.ROExample)})},
args: [],
source: "greenAndRedNumbers\x0a\x0a| diagram values |\x0avalues := (1 to: 10) collect: [ :v | 10 atRandom - 5 ].\x0adiagram := GETDiagramBuilder new.\x0adiagram verticalBarDiagram\x0amodels: values;\x0aheight: 150;\x0acolor: [:each | each < 0 ifTrue: [ Color red ] ifFalse: [ Color green ] ];\x0aregularAxis.\x0a\x0adiagram rawView translateBy: -100 @ -100.\x0adiagram interaction popUpText: [:el | \x0a\x09\x09(el > 0) \x0a\x09\x09\x09ifTrue: [(el asString),' is a green number']\x0a\x09\x09\x09ifFalse: [(el asString),' is a red number :(']\x0a].\x0adiagram open",
messageSends: ["collect:", "to:", "-", "atRandom", "new", "models:", "verticalBarDiagram", "height:", "color:", "ifTrue:ifFalse:", "<", "red", "green", "regularAxis", "translateBy:", "rawView", "@", "popUpText:", "interaction", ">", ",", "asString", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
_st(view)._clear();
(10)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=view;
$3=_st($ROElement())._new();
$ctx2.sendIdx["new"]=2;
$2=_st($3)._shape_(_st($ROBox())._new());
return _st($1)._add_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(view)._open();
$4=view;
return $4;
}, function($ctx1) {$ctx1.fill(self,"horizontalLayout",{view:view},smalltalk.ROExample)})},
args: [],
source: "horizontalLayout\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x0910 timesRepeat: [view add: (ROElement new shape: (ROBox new))].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.\x0a\x09^ view.",
messageSends: ["new", "clear", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout2",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$5,$6,$7,$2;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
_st(view)._clear();
(1)._to_do_((20),(function(i){
return smalltalk.withContext(function($ctx2) {
$1=view;
$4=_st($ROElement())._new();
$ctx2.sendIdx["new"]=2;
$3=_st($4)._model_(i);
$5=_st($ROBox())._new();
_st($5)._height_((function(el){
return smalltalk.withContext(function($ctx3) {
$6=_st(el)._model();
$ctx3.sendIdx["model"]=1;
return _st($6).__star((13));
$ctx3.sendIdx["*"]=1;
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2,2)})}));
$7=_st($5)._width_((function(el){
return smalltalk.withContext(function($ctx3) {
return _st(_st(el)._model()).__star((5));
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2,3)})}));
$2=_st($3)._shape_($7);
return _st($1)._add_($2);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)})}));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLayout2",{view:view},smalltalk.ROExample)})},
args: [],
source: "horizontalLayout2\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x091 to: 20 do: [ :i |\x0a\x09\x09view add: ((ROElement new model: i) shape: \x0a\x09\x09\x09(ROBox new height: [ :el | el model * 13 ]; width: [ :el | el model * 5 ])) ].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.",
messageSends: ["new", "clear", "to:do:", "add:", "shape:", "model:", "height:", "*", "model", "width:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLineLayout",
category: 'not yet classified',
fn: function (){
var self=this;
var view,colorWheel;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._clear();
colorWheel=_st(_st($Color())._red())._wheel_to_((20),_st($Color())._green());
_st(colorWheel)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st(_st(_st($ROBox())._element())._color_(c)).__at($RODraggable()));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLineLayout",{view:view,colorWheel:colorWheel},smalltalk.ROExample)})},
args: [],
source: "horizontalLineLayout\x0a\x09| view colorWheel |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x09colorWheel := (Color red) wheel: 20 to: (Color green).\x0a\x09colorWheel do: [:c | \x0a\x09\x09view add: (ROBox element color:  c ) @ RODraggable].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.",
messageSends: ["new", "clear", "wheel:to:", "red", "green", "do:", "add:", "@", "color:", "element", "on:", "elements", "open"],
referencedClasses: ["ROView", "Color", "ROBox", "RODraggable", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "hover",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROMouseLeave(){return smalltalk.ROMouseLeave||(typeof ROMouseLeave=="undefined"?nil:ROMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
$1=_st(event)._element();
$ctx2.sendIdx["element"]=1;
_st($1)._color_(_st($Color())._red());
$ctx2.sendIdx["color:"]=1;
$3=_st(event)._element();
$ctx2.sendIdx["element"]=2;
$2=_st($3)._view();
$ctx2.sendIdx["view"]=1;
return _st($2)._signalUpdate();
$ctx2.sendIdx["signalUpdate"]=1;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(element)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
$4=_st(event)._element();
$ctx2.sendIdx["element"]=3;
_st($4)._color_(_st($Color())._blue());
return _st(_st(_st(event)._element())._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"hover",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "hover\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseEnter do: [ :event | event element color: Color red. event element view signalUpdate. ].\x0aelement on: ROMouseLeave do: [ :event | event element color: Color blue.  event element view signalUpdate. ].\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "color:", "element", "red", "signalUpdate", "view", "blue", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROMouseEnter", "Color", "ROMouseLeave"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "ironMaiden",
category: 'demo',
fn: function (){
var self=this;
var builder,maiden1,maiden2;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53;
maiden1=[[(2013),(46),["United States","Germany","United Kingdom","Brazil","Spain","Russia","France","Poland","Sweden","Austria","Finland","Argentina","Switzerland","Romania","Paraguay","Netherlands","Turkey","Chile","Portugal","Slovakia","Czech Republic","Belgium","Croatia","Italy","Mexico"]],[(2012),(34),["United States","Canada"]],[(2011),(63),["United Kingdom","Brazil","Australia","Germany","France","Russia","Indonesia","United States","Mexico","Colombia","Netherlands","Peru","Poland","Denmark","Czech Republic","Sweden","Singapore","Argentina","Austria","Belgium","Chile","Greece","Norway","Puerto Rico","Turkey","Finland","South Korea","Switzerland","Portugal","Italy","Spain"]],[(2010),(36),["United States","Canada","Italy","Ireland","Belgium","United Kingdom","Spain","Sweden","Germany","Finland","Norway","Hungary","Romania"]],[(2009),(22),["Brazil","Mexico","New Zealand","Colombia","Ecuador","Serbia","India","Chile","United Arab Emirates","Peru","Argentina","United States","Venezuela","Costa Rica"]],[(2008),(68),["United States","Canada","Australia","Mexico","Brazil","Japan","Sweden","Norway","France","Finland","Argentina","Puerto Rico","Czech Republic","Chile","Poland","Hungary","Portugal","Costa Rica","Romania","Colombia","Greece","United Kingdom","Croatia","Denmark","Netherlands","Russia","India","Switzerland","Germany","Italy","Belgium","Spain"]],[(2007),(16),["United Kingdom","Germany","Italy","Slovenia","Belgium","India","Greece","United Arab Emirates","Spain","Serbia","Netherlands","Czech Republic","Bulgaria"]],[(2006),(45),["United Kingdom","United States","Japan","Sweden","Finland","Canada","Norway","Italy","Denmark","Germany","Switzerland","Ireland","France","Spain","Netherlands"]],[(2005),(46),["United States","United Kingdom","Germany","Finland","Norway","Canada","Portugal","Belgium","Czech Republic","Switzerland","Netherlands","Greece","Austria","Sweden","Poland","Ireland","Iceland","Italy","France","Spain"]],[(2004),(14),["United States","Japan","Brazil","Canada","Argentina","Chile"]],[(2003),(90),["United States","Germany","United Kingdom","Spain","France","Sweden","Italy","Canada","Belgium","Czech Republic","Denmark","Switzerland","Finland","Hungary","Netherlands","Poland","Norway","Croatia","Portugal","Slovakia","Austria","Ireland"]],[(2002),(4),["United Kingdom"]],[(2001),(6),["United Kingdom","Argentina","Brazil","Mexico","Chile"]],[(2000),(79),["United States","Japan","United Kingdom","Germany","Canada","Spain","France","Poland","Czech Republic","Switzerland","Sweden","Slovenia","Portugal","Norway","Greece","Belgium","Netherlands","Hungary","Denmark","Slovakia","Finland","Italy","Austria","Estonia"]],[(1999),(28),["United States","Canada","Germany","Spain","Sweden","Italy","Netherlands","Greece","France","Finland"]],[(1998),(87),["United States","Germany","United Kingdom","France","Spain","Italy","Japan","Brazil","Canada","Mexico","Turkey","Greece","Argentina","Hungary","Poland","Finland","Czech Republic","Portugal","Malta","Belgium","Denmark","Sweden","Switzerland","Netherlands"]],[(1996),(75),["United States","France","Japan","Spain","Italy","Brazil","Canada","Argentina","United Kingdom","Greece","Mexico","Slovenia","Denmark","Netherlands","Chile","Ireland","Colombia","Finland","Belgium"]],[(1995),(55),["Germany","Italy","United Kingdom","Spain","Israel","South Africa","Sweden","Switzerland","Greece","Denmark","Norway","Romania","Belgium","Finland","France","Portugal","Bulgaria","Austria","Poland","Slovakia","Netherlands","Hungary","Czech Republic"]],[(1993),(45),["Italy","United Kingdom","Germany","France","Russia","Spain","Czech Republic","Slovakia","Sweden","Netherlands","Ireland","Austria","Switzerland","Portugal"]],[(1992),(65),["United States","Japan","Canada","Spain","France","Mexico","Brazil","Australia","United Kingdom","Venezuela","Sweden","Italy","Germany","Belgium","Argentina","Puerto Rico","Finland","Norway","Denmark","Switzerland","Uruguay","Iceland","Netherlands","New Zealand"]],[(1991),(50),["United States","Canada","Japan","Switzerland","Denmark","France"]],[(1990),(56),["United Kingdom","Germany","Italy","Spain","Netherlands","Belgium","France","Sweden","Finland","Ireland","Portugal","Norway","Denmark"]],[(1988),(97),["United States","United Kingdom","Canada","Germany","Spain","France","Sweden","Finland","Portugal","Italy","Belgium","Hungary","Denmark","Netherlands","Austria","Switzerland","Norway","Greece"]],[(1987),(85),["United States","Canada","Japan"]],[(1986),(66),["United Kingdom","Germany","Poland","France","Italy","Sweden","Spain","Austria","Serbia","Portugal","Hungary","Switzerland","Croatia","Slovenia","Netherlands","Norway","Belgium","Finland"]],[(1985),(104),["United States","Japan","Australia","Brazil","United Kingdom"]],[(1984),(87),["United Kingdom","Canada","Germany","United States","France","Poland","Italy","Spain","Portugal","Sweden","Slovenia","Switzerland","Finland","Hungary","Belgium","Netherlands","Austria","Denmark","Serbia"]],[(1983),(137),["United States","United Kingdom","Germany","Canada","France","Spain","Sweden","Netherlands","Denmark","Belgium","Finland","Switzerland","Norway"]],[(1982),(181),["United States","United Kingdom","France","Canada","Australia","Japan","Germany","Spain","Belgium","Switzerland","Netherlands"]],[(1981),(137),["United States","United Kingdom","France","Germany","Italy","Sweden","Netherlands","Japan","Canada","Denmark","Belgium","Serbia","Switzerland"]],[(1980),(157),["United Kingdom","Germany","Italy","France","Belgium","Sweden","Portugal","Netherlands","Finland","Norway","Switzerland","Ireland","Denmark"]],[(1979),(89),["United Kingdom"]],[(1978),(4),["United Kingdom"]],[(1977),(38),["United Kingdom"]],[(1976),(34),["United Kingdom"]]];
$1="United States".__minus_gt((686));
$ctx1.sendIdx["->"]=1;
$2="United Kingdom".__minus_gt((538));
$ctx1.sendIdx["->"]=2;
$3="Germany".__minus_gt((154));
$ctx1.sendIdx["->"]=3;
$4="Canada".__minus_gt((111));
$ctx1.sendIdx["->"]=4;
$5="France".__minus_gt((109));
$ctx1.sendIdx["->"]=5;
$6="Japan".__minus_gt((70));
$ctx1.sendIdx["->"]=6;
$7="Italy".__minus_gt((70));
$ctx1.sendIdx["->"]=7;
$8="Spain".__minus_gt((68));
$ctx1.sendIdx["->"]=8;
$9="Sweden".__minus_gt((39));
$ctx1.sendIdx["->"]=9;
$10="Australia".__minus_gt((32));
$ctx1.sendIdx["->"]=10;
$11="Brazil".__minus_gt((32));
$ctx1.sendIdx["->"]=11;
$12="Netherlands".__minus_gt((28));
$ctx1.sendIdx["->"]=12;
$13="Finland".__minus_gt((24));
$ctx1.sendIdx["->"]=13;
$14="Belgium".__minus_gt((24));
$ctx1.sendIdx["->"]=14;
$15="Poland".__minus_gt((23));
$ctx1.sendIdx["->"]=15;
$16="Switzerland".__minus_gt((22));
$ctx1.sendIdx["->"]=16;
$17="Denmark".__minus_gt((19));
$ctx1.sendIdx["->"]=17;
$18="Norway".__minus_gt((18));
$ctx1.sendIdx["->"]=18;
$19="Mexico".__minus_gt((17));
$ctx1.sendIdx["->"]=19;
$20="Portugal".__minus_gt((16));
$ctx1.sendIdx["->"]=20;
$21="Greece".__minus_gt((13));
$ctx1.sendIdx["->"]=21;
$22="Czech Republic".__minus_gt((11));
$ctx1.sendIdx["->"]=22;
$23="Austria".__minus_gt((11));
$ctx1.sendIdx["->"]=23;
$24="Hungary".__minus_gt((10));
$ctx1.sendIdx["->"]=24;
$25="Argentina".__minus_gt((10));
$ctx1.sendIdx["->"]=25;
$26="Ireland".__minus_gt((8));
$ctx1.sendIdx["->"]=26;
$27="Russia".__minus_gt((8));
$ctx1.sendIdx["->"]=27;
$28="Chile".__minus_gt((7));
$ctx1.sendIdx["->"]=28;
$29="Serbia".__minus_gt((5));
$ctx1.sendIdx["->"]=29;
$30="Slovenia".__minus_gt((5));
$ctx1.sendIdx["->"]=30;
$31="Slovakia".__minus_gt((5));
$ctx1.sendIdx["->"]=31;
$32="Croatia".__minus_gt((4));
$ctx1.sendIdx["->"]=32;
$33="Romania".__minus_gt((4));
$ctx1.sendIdx["->"]=33;
$34="Colombia".__minus_gt((4));
$ctx1.sendIdx["->"]=34;
$35="Turkey".__minus_gt((4));
$ctx1.sendIdx["->"]=35;
$36="New Zealand".__minus_gt((3));
$ctx1.sendIdx["->"]=36;
$37="Venezuela".__minus_gt((3));
$ctx1.sendIdx["->"]=37;
$38="India".__minus_gt((3));
$ctx1.sendIdx["->"]=38;
$39="Israel".__minus_gt((3));
$ctx1.sendIdx["->"]=39;
$40="South Africa".__minus_gt((3));
$ctx1.sendIdx["->"]=40;
$41="Puerto Rico".__minus_gt((3));
$ctx1.sendIdx["->"]=41;
$42="United Arab Emirates".__minus_gt((2));
$ctx1.sendIdx["->"]=42;
$43="Indonesia".__minus_gt((2));
$ctx1.sendIdx["->"]=43;
$44="Bulgaria".__minus_gt((2));
$ctx1.sendIdx["->"]=44;
$45="Peru".__minus_gt((2));
$ctx1.sendIdx["->"]=45;
$46="Iceland".__minus_gt((2));
$ctx1.sendIdx["->"]=46;
$47="Costa Rica".__minus_gt((2));
$ctx1.sendIdx["->"]=47;
$48="South Korea".__minus_gt((1));
$ctx1.sendIdx["->"]=48;
$49="Uruguay".__minus_gt((1));
$ctx1.sendIdx["->"]=49;
$50="Ecuador".__minus_gt((1));
$ctx1.sendIdx["->"]=50;
$51="Estonia".__minus_gt((1));
$ctx1.sendIdx["->"]=51;
$52="Malta".__minus_gt((1));
$ctx1.sendIdx["->"]=52;
$53="Singapore".__minus_gt((1));
$ctx1.sendIdx["->"]=53;
maiden2=[$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,"Paraguay".__minus_gt((1))];
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._title_("Iron Maiden");
_st(builder)._legend_("Concerts around the word per year");
_st(builder)._body_("Iron Maiden are an English heavy metal band \x0aformed in Leyton, east London, in 1975 by \x0abassist and primary songwriter Steve Harris. \x0aThe band's discography has grown to \x0athirty-seven albums, including fifteen studio \x0aalbums, eleven live albums, four EPs, and \x0aseven compilations.\x0a\x0aPioneers of the New Wave of British Heavy \x0aMetal, Iron Maiden achieved initial success \x0aduring the early 1980s. After several line-up \x0achanges, the band went on to release a \x0aseries of US and UK platinum and gold \x0aalbums, including 1982's The Number of the \x0aBeast, 1983's Piece of Mind, 1984's \x0aPowerslave, 1985's live release Live After \x0aDeath, 1986's Somewhere in Time and \x0a1988's Seventh Son of a Seventh Son. \x0aSince the return of lead vocalist Bruce \x0aDickinson and guitarist Adrian Smith in 1999, \x0athe band have undergone a resurgence in \x0apopularity, with their latest studio offering, \x0aThe Final Frontier, peaking at No. 1 in 28 \x0adifferent countries and receiving \x0awidespread critical acclaim.\x0a\x0aConsidered one of the most successful \x0aheavy metal bands in history, Iron Maiden \x0ahave sold over 85 million records worldwide \x0awith little radio or television support. The \x0aband won the Ivor Novello Award for \x0ainternational achievement in 2002, and were \x0aalso inducted into the Hollywood RockWalk in \x0aSunset Boulevard, Los Angeles, California \x0aduring their United States tour in 2005. As of \x0aOctober 2013, the band have played over \x0a2000 live shows throughout their career. For \x0athe past 35 years, the band have been \x0asupported by their famous mascot, \x22Eddie\x22, \x0awho has appeared on almost all of their album \x0aand single covers, as well as in their live \x0ashows.");
_st(builder)._colorLeft_("second");
_st(builder)._colorRight_("value");
_st(builder)._heightLeft_("second");
_st(builder)._heightRight_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v)._value()).__slash((10));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
_st(builder)._left_(maiden1);
_st(builder)._right_(maiden2);
_st(builder)._labelLeft_("first");
_st(builder)._labelRight_("key");
_st(builder)._edgesTo_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._third())._includes_(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"ironMaiden",{builder:builder,maiden1:maiden1,maiden2:maiden2},smalltalk.ROExample)})},
args: [],
source: "ironMaiden\x0a\x0a\x09|builder maiden1 maiden2 |\x0a\x09\x0a\x09maiden1 := {{2013 . 46 . { 'United States' . 'Germany' . 'United Kingdom' . 'Brazil' . 'Spain' . 'Russia' . 'France' . 'Poland' . 'Sweden' . 'Austria' . 'Finland' . 'Argentina' . 'Switzerland' . 'Romania' . 'Paraguay' . 'Netherlands' . 'Turkey' . 'Chile' . 'Portugal' . 'Slovakia' . 'Czech Republic' . 'Belgium' . 'Croatia' . 'Italy' . 'Mexico' }}.\x0a{2012 . 34 . { 'United States' . 'Canada' }} .\x0a{2011 . 63 . { 'United Kingdom'\x09. 'Brazil' . 'Australia' . 'Germany' . 'France' . 'Russia' . 'Indonesia' . 'United States' . 'Mexico' . 'Colombia' . 'Netherlands' . 'Peru' . 'Poland' . 'Denmark' . 'Czech Republic' . 'Sweden' . 'Singapore' . 'Argentina' . 'Austria' . 'Belgium' . 'Chile' . 'Greece' . 'Norway' . 'Puerto Rico' . 'Turkey' . 'Finland' . 'South Korea'\x09. 'Switzerland' . 'Portugal' . 'Italy' . 'Spain' }} .\x0a{2010 . 36 . { 'United States' . 'Canada' . 'Italy' . 'Ireland' . 'Belgium' . 'United Kingdom' . 'Spain' . 'Sweden' . 'Germany' . 'Finland' . 'Norway' . 'Hungary' .  'Romania' }} .\x0a{2009 . 22 . { 'Brazil' . 'Mexico' . 'New Zealand' . 'Colombia' . 'Ecuador' . 'Serbia' . 'India' . 'Chile' . 'United Arab Emirates' . 'Peru' . 'Argentina' . 'United States' . 'Venezuela' . 'Costa Rica'}} .\x0a{2008 . 68 . { 'United States' . 'Canada' . 'Australia' . 'Mexico' . 'Brazil' . 'Japan' . 'Sweden' . 'Norway' . 'France' . 'Finland' . 'Argentina' . 'Puerto Rico' . 'Czech Republic' . 'Chile' . 'Poland' . 'Hungary' . 'Portugal' . 'Costa Rica' . 'Romania' . 'Colombia' . 'Greece' . 'United Kingdom' . 'Croatia' . 'Denmark' . 'Netherlands' . 'Russia' . 'India' . 'Switzerland' . 'Germany' . 'Italy' . 'Belgium' . 'Spain' }} .\x0a{2007 . 16 . { 'United Kingdom' . 'Germany' . 'Italy' . 'Slovenia' . 'Belgium' . 'India' . 'Greece' . 'United Arab Emirates' . 'Spain' . 'Serbia' . 'Netherlands' . 'Czech Republic' . 'Bulgaria' }} .\x0a{2006 . 45 . { 'United Kingdom'\x09. 'United States' . 'Japan' . 'Sweden' . 'Finland' . 'Canada' . 'Norway' . 'Italy' . 'Denmark' . 'Germany' . 'Switzerland' . 'Ireland' . 'France' . 'Spain' . 'Netherlands' }} .\x0a{2005 . 46 . { 'United States' . 'United Kingdom' . 'Germany' . 'Finland' . 'Norway' . 'Canada' . 'Portugal' . 'Belgium' . 'Czech Republic' . 'Switzerland' . 'Netherlands' . 'Greece' . 'Austria' . 'Sweden' . 'Poland' . 'Ireland' . 'Iceland' . 'Italy' . 'France' . 'Spain' }} .\x0a{2004 . 14 . { 'United States' . 'Japan' . 'Brazil' . 'Canada' . 'Argentina' . 'Chile' }} .\x0a{2003 . 90 . { 'United States' . 'Germany' . 'United Kingdom' . 'Spain' . 'France' . 'Sweden' . 'Italy' . 'Canada' . 'Belgium' . 'Czech Republic' . 'Denmark' . 'Switzerland' . 'Finland' . 'Hungary' . 'Netherlands' . 'Poland' . 'Norway' . 'Croatia' . 'Portugal' . 'Slovakia' . 'Austria' . 'Ireland'}} .\x0a{2002 . 4 . { 'United Kingdom' }} . \x0a{2001 . 6 . { 'United Kingdom' . 'Argentina' . 'Brazil' . 'Mexico' . 'Chile' }} .\x0a{2000 . 79 . { 'United States' . 'Japan' . 'United Kingdom' . 'Germany' . 'Canada' . 'Spain' . 'France' . 'Poland' . 'Czech Republic' . 'Switzerland' . 'Sweden' . 'Slovenia' . 'Portugal' . 'Norway' . 'Greece' . 'Belgium' . 'Netherlands' . 'Hungary' . 'Denmark' . 'Slovakia' . 'Finland' . 'Italy' . 'Austria' . 'Estonia' }} .\x0a{1999 . 28 . { 'United States' . 'Canada' . 'Germany' . 'Spain' . 'Sweden' . 'Italy' . 'Netherlands' . 'Greece' . 'France' . 'Finland'}} .\x0a{1998 . 87 .  {'United States' . 'Germany' . 'United Kingdom' . 'France' . 'Spain' . 'Italy' . 'Japan' . 'Brazil' . 'Canada' . 'Mexico' . 'Turkey' . 'Greece' . 'Argentina' . 'Hungary' . 'Poland' . 'Finland' . 'Czech Republic' . 'Portugal' . 'Malta' . 'Belgium' . 'Denmark' . 'Sweden' . 'Switzerland' . 'Netherlands' }} .\x0a{1996 . 75 . {'United States' . 'France' . 'Japan' . 'Spain' . 'Italy' . 'Brazil' . 'Canada' . 'Argentina' . 'United Kingdom' . 'Greece' . 'Mexico' . 'Slovenia' . 'Denmark' . 'Netherlands' . 'Chile' . 'Ireland' . 'Colombia' . 'Finland' . 'Belgium' }} .\x0a{1995 . 55 . {'Germany' . 'Italy' . 'United Kingdom' . 'Spain' . 'Israel' . 'South Africa' . 'Sweden' . 'Switzerland' . 'Greece' . 'Denmark' . 'Norway' . 'Romania' . 'Belgium' . 'Finland' . 'France' . 'Portugal' . 'Bulgaria' . 'Austria' . 'Poland' . 'Slovakia' . 'Netherlands' . 'Hungary' . 'Czech Republic'}} .\x0a{1993  . 45 . {'Italy'  . 'United Kingdom' . 'Germany' . 'France' . 'Russia' . 'Spain' . 'Czech Republic' . 'Slovakia' . 'Sweden' . 'Netherlands' . 'Ireland' . 'Austria' . 'Switzerland' . 'Portugal' }} .\x0a{1992  . 65 . {'United States' . 'Japan' . 'Canada' . 'Spain' . 'France' . 'Mexico' . 'Brazil' . 'Australia' . 'United Kingdom' . 'Venezuela' . 'Sweden' . 'Italy' . 'Germany' . 'Belgium' . 'Argentina' . 'Puerto Rico' . 'Finland' . 'Norway' . 'Denmark' . 'Switzerland' . 'Uruguay' . 'Iceland' . 'Netherlands' . 'New Zealand' }} .\x0a{1991 . 50 . {'United States' . 'Canada' . 'Japan' . 'Switzerland' . 'Denmark' . 'France'}} .\x0a{1990 . 56 . {'United Kingdom' . 'Germany' . 'Italy' . 'Spain' . 'Netherlands' . 'Belgium' . 'France' . 'Sweden' . 'Finland' . 'Ireland' . 'Portugal' . 'Norway' . 'Denmark' }} .\x0a{1988 . 97 . {'United States' . 'United Kingdom' . 'Canada' . 'Germany' . 'Spain' . 'France' . 'Sweden' . 'Finland' . 'Portugal' . 'Italy' . 'Belgium' . 'Hungary' . 'Denmark' . 'Netherlands' . 'Austria'\x09. 'Switzerland' . 'Norway' . 'Greece' }} .\x0a{1987  . 85 .  {'United States' . 'Canada' . 'Japan'}} .\x0a{1986  . 66 .  {'United Kingdom' . 'Germany' . 'Poland' . 'France' . 'Italy' . 'Sweden' . 'Spain' . 'Austria' . 'Serbia' . 'Portugal' . 'Hungary' . 'Switzerland' . 'Croatia' . 'Slovenia' . 'Netherlands' . 'Norway' . 'Belgium' . 'Finland' }} .\x0a{1985 . 104 .  {'United States' . 'Japan' . 'Australia' . 'Brazil' . 'United Kingdom' }} .\x0a{1984 . 87 . {'United Kingdom' . 'Canada' . 'Germany' . 'United States' . 'France' . 'Poland' . 'Italy' . 'Spain' . 'Portugal' . 'Sweden' . 'Slovenia' . 'Switzerland' . 'Finland' . 'Hungary' . 'Belgium' . 'Netherlands' . 'Austria' . 'Denmark' . 'Serbia' }} .\x0a{1983 . 137 .  {'United States' . 'United Kingdom' . 'Germany' . 'Canada' . 'France' . 'Spain' . 'Sweden' . 'Netherlands' . 'Denmark' . 'Belgium' . 'Finland' . 'Switzerland' . 'Norway' }} .\x0a{1982  . 181 . {'United States' . 'United Kingdom' . 'France' . 'Canada' . 'Australia' . 'Japan' . 'Germany' . 'Spain' . 'Belgium' . 'Switzerland' . 'Netherlands' }} .\x0a{1981  . 137 .  {'United States' . 'United Kingdom' . 'France' . 'Germany' . 'Italy' . 'Sweden' . 'Netherlands' . 'Japan' . 'Canada' . 'Denmark' . 'Belgium' . 'Serbia' . 'Switzerland' }} .\x0a{1980  . 157 .\x09{'United Kingdom' . 'Germany' . 'Italy' . 'France' . 'Belgium' . 'Sweden' . 'Portugal' . 'Netherlands' . 'Finland' . 'Norway' . 'Switzerland' . 'Ireland' .\x09'Denmark' }} .\x0a{ 1979 . 89 . { 'United Kingdom' }} .\x0a{ 1978 . 4 . { 'United Kingdom' }} .\x0a{ 1977 . 38 . { 'United Kingdom' }} .\x0a{ 1976 . 34 . { 'United Kingdom' }}}.\x0a\x09maiden2 := {'United States' -> 686 . 'United Kingdom' -> 538 . 'Germany' -> 154 . 'Canada' -> 111 . 'France' -> 109 . 'Japan' -> 70 . 'Italy' -> 70 . 'Spain' -> 68 . 'Sweden'\x09-> 39 . 'Australia' -> 32 . 'Brazil' -> 32 . 'Netherlands' -> 28 . 'Finland' -> 24 . 'Belgium' -> 24 . 'Poland' -> 23 . 'Switzerland' -> 22 . 'Denmark' -> 19 . 'Norway' -> 18 . 'Mexico' -> 17 . 'Portugal' -> 16 . 'Greece' -> 13 . 'Czech Republic' -> 11 . 'Austria' -> 11 . 'Hungary' -> 10 . 'Argentina' -> 10 . 'Ireland' -> 8 . 'Russia' -> 8 . 'Chile' -> 7 . 'Serbia' -> 5 . 'Slovenia' -> 5 . 'Slovakia' -> 5 . 'Croatia' -> 4 . 'Romania' -> 4 .'Colombia' -> 4 . 'Turkey' -> 4 . 'New Zealand' -> 3 . 'Venezuela' -> 3 . 'India' -> 3 . 'Israel' -> 3 . 'South Africa' -> 3 . 'Puerto Rico' -> 3. 'United Arab Emirates' -> 2 . 'Indonesia' -> 2 . 'Bulgaria'\x09-> 2 . 'Peru' -> 2 . 'Iceland' -> 2 . 'Costa Rica' -> 2 . 'South Korea' -> 1 . 'Uruguay' -> 1 . 'Ecuador' -> 1 . 'Estonia' -> 1 . 'Malta' -> 1 . 'Singapore' -> 1 . 'Paraguay' -> 1}.\x0a\x09\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder title: 'Iron Maiden'.\x0a\x09builder legend: 'Concerts around the word per year'.\x0a\x09builder body: 'Iron Maiden are an English heavy metal band \x0aformed in Leyton, east London, in 1975 by \x0abassist and primary songwriter Steve Harris. \x0aThe band''s discography has grown to \x0athirty-seven albums, including fifteen studio \x0aalbums, eleven live albums, four EPs, and \x0aseven compilations.\x0a\x0aPioneers of the New Wave of British Heavy \x0aMetal, Iron Maiden achieved initial success \x0aduring the early 1980s. After several line-up \x0achanges, the band went on to release a \x0aseries of US and UK platinum and gold \x0aalbums, including 1982''s The Number of the \x0aBeast, 1983''s Piece of Mind, 1984''s \x0aPowerslave, 1985''s live release Live After \x0aDeath, 1986''s Somewhere in Time and \x0a1988''s Seventh Son of a Seventh Son. \x0aSince the return of lead vocalist Bruce \x0aDickinson and guitarist Adrian Smith in 1999, \x0athe band have undergone a resurgence in \x0apopularity, with their latest studio offering, \x0aThe Final Frontier, peaking at No. 1 in 28 \x0adifferent countries and receiving \x0awidespread critical acclaim.\x0a\x0aConsidered one of the most successful \x0aheavy metal bands in history, Iron Maiden \x0ahave sold over 85 million records worldwide \x0awith little radio or television support. The \x0aband won the Ivor Novello Award for \x0ainternational achievement in 2002, and were \x0aalso inducted into the Hollywood RockWalk in \x0aSunset Boulevard, Los Angeles, California \x0aduring their United States tour in 2005. As of \x0aOctober 2013, the band have played over \x0a2000 live shows throughout their career. For \x0athe past 35 years, the band have been \x0asupported by their famous mascot, \x22Eddie\x22, \x0awho has appeared on almost all of their album \x0aand single covers, as well as in their live \x0ashows.'.\x0a\x09builder colorLeft: #second.\x0a\x09builder colorRight: #value.\x0a\x09builder heightLeft: #second.\x0a\x09builder heightRight: [:v| v value / 10].\x0a\x09builder left: maiden1.\x0a\x09builder right: maiden2.\x0a\x09builder labelLeft: #first.\x0a\x09builder labelRight: #key.\x0a\x09builder edgesTo: [:a :b | a third includes: (b key) ].\x0a\x09builder open.",
messageSends: ["->", "new", "title:", "legend:", "body:", "colorLeft:", "colorRight:", "heightLeft:", "heightRight:", "/", "value", "left:", "right:", "labelLeft:", "labelRight:", "edgesTo:", "includes:", "third", "key", "open"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROLabel());
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"label",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "label\x0a|view element |\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0a\x0aelement + ROLabel.\x0aview add: element.\x0a\x0aview open.",
messageSends: ["new", "size:", "+", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROLabel"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
category: 'not yet classified',
fn: function (){
var self=this;
var view,el1,el2,edge;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
view=_st($ROView())._new();
el1=_st($ROBox())._element();
$ctx1.sendIdx["element"]=1;
el2=_st($ROBox())._element();
$1=el1;
$2=(20).__at((30));
$ctx1.sendIdx["@"]=1;
_st($1)._translateTo_($2);
$ctx1.sendIdx["translateTo:"]=1;
_st(el2)._translateTo_((300).__at((100)));
edge=_st($ROLine())._edgeFrom_to_(el1,el2);
$3=view;
_st($3)._add_(el1);
$ctx1.sendIdx["add:"]=1;
_st($3)._add_(el2);
$ctx1.sendIdx["add:"]=2;
$4=_st($3)._add_(edge);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"line",{view:view,el1:el1,el2:el2,edge:edge},smalltalk.ROExample)})},
args: [],
source: "line\x0a\x09| view el1 el2 edge |\x0a\x09view := ROView new.\x0a\x0a\x09el1 := ROBox element.\x0a\x09el2 := ROBox element.\x0a\x09\x0a\x09el1 translateTo: 20 @ 30.\x0a\x09el2 translateTo: 300 @ 100.\x0a\x09\x0a\x09edge := ROLine edgeFrom: el1 to: el2.\x0a\x0a\x09view add: el1; add: el2; add: edge.\x0a\x09\x0a\x09view open.",
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"],
referencedClasses: ["ROView", "ROBox", "ROLine"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "line2",
category: 'not yet classified',
fn: function (){
var self=this;
var view,el1,el2,edge,el3,el4,edge2;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
view=_st($ROView())._new();
el1=_st($ROEllipse())._element();
$ctx1.sendIdx["element"]=1;
el2=_st($ROEllipse())._element();
$ctx1.sendIdx["element"]=2;
$1=el1;
$2=(20).__at((30));
$ctx1.sendIdx["@"]=1;
_st($1)._translateTo_($2);
$ctx1.sendIdx["translateTo:"]=1;
$3=el2;
$4=(300).__at((100));
$ctx1.sendIdx["@"]=2;
_st($3)._translateTo_($4);
$ctx1.sendIdx["translateTo:"]=2;
edge=_st($ROLine())._edgeFrom_to_(el1,el2);
$ctx1.sendIdx["edgeFrom:to:"]=1;
el3=_st($ROBox())._element();
$ctx1.sendIdx["element"]=3;
el4=_st($ROBox())._element();
$5=el3;
$6=(150).__at((20));
$ctx1.sendIdx["@"]=3;
_st($5)._translateTo_($6);
$ctx1.sendIdx["translateTo:"]=3;
_st(el4)._translateTo_((150).__at((300)));
edge2=_st($ROLine())._edgeFrom_to_(el3,el4);
$7=view;
_st($7)._add_(el1);
$ctx1.sendIdx["add:"]=1;
_st($7)._add_(el2);
$ctx1.sendIdx["add:"]=2;
_st($7)._add_(edge);
$ctx1.sendIdx["add:"]=3;
_st($7)._add_(el3);
$ctx1.sendIdx["add:"]=4;
_st($7)._add_(el4);
$ctx1.sendIdx["add:"]=5;
$8=_st($7)._add_(edge2);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"line2",{view:view,el1:el1,el2:el2,edge:edge,el3:el3,el4:el4,edge2:edge2},smalltalk.ROExample)})},
args: [],
source: "line2\x0a\x0a\x09| view el1 el2 edge el3 el4 edge2 |\x0a\x09view := ROView new.\x0a\x0a\x09el1 := ROEllipse element.\x0a\x09el2 := ROEllipse element.\x0a\x09\x0a\x09el1 translateTo: 20 @ 30.\x0a\x09el2 translateTo: 300 @ 100.\x0a\x09\x0a\x09edge := ROLine edgeFrom: el1 to: el2.\x0a\x09\x0a\x09el3 := ROBox element.\x0a\x09el4 := ROBox element.\x0a\x09\x0a\x09el3 translateTo: 150 @ 20.\x0a\x09el4 translateTo: 150 @ 300.\x0a\x09\x0a\x09edge2 := ROLine edgeFrom: el3 to: el4.\x0a\x0a\x09view add: el1; add: el2; add: edge; add: el3; add: el4; add: edge2.\x0a\x09\x0a\x09view open.",
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"],
referencedClasses: ["ROView", "ROEllipse", "ROLine", "ROBox"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseclick",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(event)._element())._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"mouseclick",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "mouseclick\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseClick do: [ :event | event element hide].\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "hide", "element", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROMouseClick"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseclick2",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROMouseLeftClick(){return smalltalk.ROMouseLeftClick||(typeof ROMouseLeftClick=="undefined"?nil:ROMouseLeftClick)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element)._on_do_($ROMouseLeftClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(event)._element())._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"mouseclick2",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "mouseclick2\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseLeftClick do: [ :event | event element hide].\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "hide", "element", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROMouseLeftClick"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseclick3",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element,element2;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROMouseLeftClick(){return smalltalk.ROMouseLeftClick||(typeof ROMouseLeftClick=="undefined"?nil:ROMouseLeftClick)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
$1=_st($ROElement())._new();
$ctx1.sendIdx["new"]=2;
element=_st($1)._size_((100));
$ctx1.sendIdx["size:"]=1;
element2=_st(_st($ROElement())._new())._size_((50));
_st(element).__plus($ROBox());
$ctx1.sendIdx["+"]=1;
_st(element2).__plus($ROBox());
_st(element)._on_do_($ROMouseLeftClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
$3=_st($String())._cr();
$ctx2.sendIdx["cr"]=1;
$2="e1".__comma($3);
$ctx2.sendIdx[","]=1;
return _st($Transcript())._show_($2);
$ctx2.sendIdx["show:"]=1;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$ctx1.sendIdx["on:do:"]=1;
_st(element2)._on_do_($ROMouseLeftClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_("-e2-".__comma(_st($String())._cr()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
_st(view)._add_(element);
$ctx1.sendIdx["add:"]=1;
_st(view)._add_(element2);
_st($ROHorizontalLineLayout())._on_([element,element2]);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"mouseclick3",{view:view,element:element,element2:element2},smalltalk.ROExample)})},
args: [],
source: "mouseclick3\x0a|view element element2|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement2 := ROElement new size: 50.\x0aelement + ROBox.\x0aelement2 + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseLeftClick do: [ :event | Transcript show: 'e1',(String cr)].\x0aelement2 on: ROMouseLeftClick do: [ :event | Transcript show: '-e2-',(String cr)].\x0aview add: element.\x0aview add: element2.\x0aROHorizontalLineLayout on: {element . element2}.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "show:", ",", "cr", "add:", "on:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROMouseLeftClick", "Transcript", "String", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "plotFromCSV",
category: 'demo',
fn: function (){
var self=this;
var block;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
block=(function(d,t){
return smalltalk.withContext(function($ctx2) {
$1=_st(d)._verticalBarDiagram();
_st($1)._models_(_st(t)._dataFromColumn_("NC"));
_st($1)._color_(_st($Color())._brown());
_st($1)._regularAxisAsInteger();
_st($1)._height_((100));
$2=_st($1)._width_((300));
return $2;
}, function($ctx2) {$ctx2.fillBlock({d:d,t:t},$ctx1,1)})});
$3=_st($ROPlot())._new();
_st($3)._url_("https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv");
$4=_st($3)._drawBlock_(block);
return self}, function($ctx1) {$ctx1.fill(self,"plotFromCSV",{block:block},smalltalk.ROExample)})},
args: [],
source: "plotFromCSV\x0a\x22\x0aThis is a chart of the column 'NC'  of the table in a CSV file hosted on dropbox \x0a\x22\x0a|block|\x0ablock := [:d :t |\x0ad verticalBarDiagram\x0a\x22try yourself by changing 'NNEC' to 'NC' and re-do\x22\x0amodels: (t dataFromColumn: 'NC');\x0a\x22or maybe change the color\x22\x0acolor: Color brown;\x0aregularAxisAsInteger;\x0aheight: 100;\x0awidth: 300\x0a].\x0aROPlot new \x0aurl: 'https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv';\x0adrawBlock: block",
messageSends: ["models:", "verticalBarDiagram", "dataFromColumn:", "color:", "brown", "regularAxisAsInteger", "height:", "width:", "url:", "new", "drawBlock:"],
referencedClasses: ["Color", "ROPlot"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "popup",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
element=_st(_st($ROElement())._on_("Text 1"))._size_((40));
_st(_st(element).__plus($ROBox()))._color_(_st($Color())._lightRed());
_st(element).__at($RODraggable());
$ctx1.sendIdx["@"]=1;
_st(element).__at(_st($ROPopup())._text_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el).__comma(" y 2");
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1,1)})})));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"popup",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "popup\x0a\x09|view element|\x0a\x09view := ROView new.\x0a\x09element := (ROElement on: 'Text 1') size: 40.\x0a\x09element + ROBox color: Color lightRed.\x0a\x09element @ RODraggable.\x0a\x09element @ (ROPopup text: [:el |  el , ' y 2']).\x0a\x09view add: element.\x0a\x09view open.",
messageSends: ["new", "size:", "on:", "color:", "+", "lightRed", "@", "text:", ",", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "Color", "RODraggable", "ROPopup"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "popupAndDrag",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element).__at($RODraggable());
$ctx1.sendIdx["@"]=1;
_st(element).__at($ROPopup());
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"popupAndDrag",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "popupAndDrag\x0a\x22not working properly right now\x22\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0aelement @ RODraggable.\x0aelement @ ROPopup.\x0a\x22Open an inspector when clicking\x22\x0a\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "@", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "RODraggable", "ROPopup"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "punchcard",
category: 'demo',
fn: function (){
var self=this;
var builder;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
builder=_st($ROPunchcardBuilder())._new();
_st(builder)._addModels_(["Sed", "molestie", "nec", "nisi quis", "vestibulum", "Morbi tempus", "luctus", "commodo"]);
_st(builder)._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(word)._size();
$ctx2.sendIdx["size"]=1;
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,1)})}),"length");
$ctx1.sendIdx["addMetric:namedAs:"]=1;
_st(builder)._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
$1=_st(word)._size();
$ctx2.sendIdx["size"]=2;
return _st($1).__star((3));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,2)})}),"length * 3");
$ctx1.sendIdx["addMetric:namedAs:"]=2;
_st(builder)._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__slash((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,3)})}),"length / 2");
_st(builder)._minColor_(_st($Color())._green());
_st(builder)._maxColor_(_st($Color())._red());
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"punchcard",{builder:builder},smalltalk.ROExample)})},
args: [],
source: "punchcard\x0a\x0a|builder|\x0abuilder := ROPunchcardBuilder new.\x0abuilder addModels: #( 'Sed' 'molestie' 'nec' 'nisi quis' 'vestibulum' 'Morbi tempus' 'luctus' 'commodo' ).\x0abuilder addMetric: [:word | word size] namedAs: 'length'.\x0abuilder addMetric: [:word | word size * 3 ] namedAs: 'length * 3'.\x0abuilder addMetric: [:word | word size / 2 ] namedAs: 'length / 2'.\x0abuilder minColor: Color green.\x0abuilder maxColor: Color red.\x0abuilder open.",
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "*", "/", "minColor:", "green", "maxColor:", "red", "open"],
referencedClasses: ["ROPunchcardBuilder", "Color"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "relationalTowers",
category: 'demo',
fn: function (){
var self=this;
var builder;
function $RelationalTowersBuilder(){return smalltalk.RelationalTowersBuilder||(typeof RelationalTowersBuilder=="undefined"?nil:RelationalTowersBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
builder=_st($RelationalTowersBuilder())._new();
_st(builder)._legend_("Example of a relation between two set of integers");
$1=builder;
$2=(1)._to_((10));
$ctx1.sendIdx["to:"]=1;
_st($1)._left_($2);
$3=builder;
$4=(1)._to_((20));
$ctx1.sendIdx["to:"]=2;
_st($3)._right_($4);
_st(builder)._edgesFromLeft_edgesToLeft_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(v).__minus((5)))._to_(_st(v).__plus((5)));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}),(function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v).__slash((2));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,2)})}));
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"relationalTowers",{builder:builder},smalltalk.ROExample)})},
args: [],
source: "relationalTowers\x0a\x0a\x09| builder |\x0a\x0a\x09builder := RelationalTowersBuilder new.\x0a\x09builder legend: 'Example of a relation between two set of integers'.\x0a\x09builder left: (1 to: 10).\x0a\x09builder right: (1 to: 20).\x0a\x09builder edgesFromLeft: [ :v | (v - 5) to: (v + 5) ] edgesToLeft: [ :v | (v / 2) ].\x0a\x09builder open",
messageSends: ["new", "legend:", "left:", "to:", "right:", "edgesFromLeft:edgesToLeft:", "-", "+", "/", "open"],
referencedClasses: ["RelationalTowersBuilder"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'not yet classified',
fn: function (){
var self=this;
var view,url,elements,scaleFactor,tux;
function $ROImageShape(){return smalltalk.ROImageShape||(typeof ROImageShape=="undefined"?nil:ROImageShape)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROTux(){return smalltalk.ROTux||(typeof ROTux=="undefined"?nil:ROTux)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$8,$7;
url="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/p320x320/1457530_768681953149154_113448858_n.jpg";
$2=_st(_st($ROImageShape())._url_(url))._element();
$ctx1.sendIdx["element"]=1;
$1=_st($2).__at($RODraggable());
$ctx1.sendIdx["@"]=1;
$4=_st($ROEllipse())._element();
$ctx1.sendIdx["element"]=2;
$3=_st($4).__at($RODraggable());
$ctx1.sendIdx["@"]=2;
$6=_st($ROBox())._element();
$ctx1.sendIdx["element"]=3;
$5=_st($6).__at($RODraggable());
$ctx1.sendIdx["@"]=3;
$8=_st($ROTux())._element();
$ctx1.sendIdx["element"]=4;
$7=_st($8).__at($RODraggable());
$ctx1.sendIdx["@"]=4;
elements=[$1,$3,$5,$7];
scaleFactor=[(0.9), (1.001), (1.1), (1.2)];
view=_st($ROView())._new();
tux=_st(_st($ROTux())._element()).__at($RODraggable());
_st(view)._addAll_(elements);
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(tux)._on_do_($ROMouseClick(),(function(evt){
return smalltalk.withContext(function($ctx2) {
_st(elements)._do_((function(e){
return smalltalk.withContext(function($ctx3) {
return _st(_st(e)._shape())._scale_(_st(scaleFactor)._at_(_st(elements)._indexOf_(e)));
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2,2)})}));
return _st(view)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
_st(view)._add_(tux);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"scale",{view:view,url:url,elements:elements,scaleFactor:scaleFactor,tux:tux},smalltalk.ROExample)})},
args: [],
source: "scale\x0a\x0a\x09| view url elements scaleFactor tux|\x0a\x09url := 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/p320x320/1457530_768681953149154_113448858_n.jpg'.\x0a\x09elements := { \x0a\x09\x09\x09((ROImageShape url: url) element @RODraggable) .\x0a\x09\x09\x09ROEllipse element @RODraggable .\x0a\x09\x09\x09ROBox element @RODraggable .\x0a\x09\x09\x09ROTux element @RODraggable \x0a\x09}.\x0a\x09scaleFactor := #( 0.9 1.001 1.1 1.2 ).\x0a\x0a\x09view := ROView new.\x0a\x09tux :=  ROTux element @RODraggable.\x0a\x09view addAll: elements.\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09tux on: ROMouseClick do: [:evt | \x0a\x09\x09elements do: [:e |\x0a\x09\x09\x09e shape scale: (scaleFactor at: (elements indexOf: e)).  \x0a\x09\x09].\x0a\x09\x09view signalUpdate.].\x0a\x0a\x09view add: tux.\x0a\x09view open",
messageSends: ["@", "element", "url:", "new", "addAll:", "on:", "elements", "on:do:", "do:", "scale:", "shape", "at:", "indexOf:", "signalUpdate", "add:", "open"],
referencedClasses: ["ROImageShape", "RODraggable", "ROEllipse", "ROBox", "ROTux", "ROView", "ROHorizontalLineLayout", "ROMouseClick"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleLabel",
category: 'not yet classified',
fn: function (){
var self=this;
var view,plus,tux;
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROTux(){return smalltalk.ROTux||(typeof ROTux=="undefined"?nil:ROTux)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1,$7,$6,$5,$4,$10,$9,$8,$3,$2,$11,$17,$16,$15,$14,$13,$12;
$1=_st($ROLabel())._element();
$ctx1.sendIdx["element"]=1;
plus=_st($1)._on_("+");
view=_st($ROView())._new();
_st(view)._add_(plus);
$ctx1.sendIdx["add:"]=1;
tux=_st(_st($ROTux())._element()).__at($RODraggable());
_st(tux)._on_do_($ROMouseClick(),(function(evt){
return smalltalk.withContext(function($ctx2) {
$7=_st(plus)._shape();
$ctx2.sendIdx["shape"]=1;
$6=_st($7)._width();
$ctx2.sendIdx["width"]=1;
$5=_st($6)._asString();
$ctx2.sendIdx["asString"]=1;
$4=_st($5).__comma(",");
$ctx2.sendIdx[","]=3;
$10=_st(plus)._shape();
$ctx2.sendIdx["shape"]=2;
$9=_st($10)._svgElement();
$ctx2.sendIdx["svgElement"]=1;
$8=_st($9)._attr_("width");
$ctx2.sendIdx["attr:"]=1;
$3=_st($4).__comma($8);
$ctx2.sendIdx[","]=2;
$2=_st($3).__comma("   ");
$ctx2.sendIdx[","]=1;
_st($Transcript())._show_($2);
$ctx2.sendIdx["show:"]=1;
$11=_st(plus)._shape();
$ctx2.sendIdx["shape"]=3;
_st($11)._scale_((2));
$17=_st(plus)._shape();
$ctx2.sendIdx["shape"]=4;
$16=_st($17)._width();
$15=_st($16)._asString();
$14=_st($15).__comma(",");
$13=_st($14).__comma(_st(_st(_st(plus)._shape())._svgElement())._attr_("width"));
$ctx2.sendIdx[","]=5;
$12=_st($13).__comma(_st($String())._cr());
$ctx2.sendIdx[","]=4;
_st($Transcript())._show_($12);
return _st(view)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
_st(view)._add_(tux);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"scaleLabel",{view:view,plus:plus,tux:tux},smalltalk.ROExample)})},
args: [],
source: "scaleLabel\x0a|view plus tux|\x0aplus := (ROLabel element on: '+').\x0aview := ROView new.\x0aview add: plus.\x0a\x0atux :=  ROTux element @RODraggable.\x0a\x0atux on: ROMouseClick do: [:evt | \x0a\x09Transcript show: (plus shape width asString),',',(plus shape svgElement attr: 'width'),'   '.\x0a\x09plus shape scale: 2.  \x0a\x09Transcript show: (plus shape width asString),',',(plus shape svgElement attr: 'width'),(String cr).\x0a\x09view signalUpdate.].\x0a\x09\x0a\x09view add: tux.\x0a\x0aview open",
messageSends: ["on:", "element", "new", "add:", "@", "on:do:", "show:", ",", "asString", "width", "shape", "attr:", "svgElement", "scale:", "cr", "signalUpdate", "open"],
referencedClasses: ["ROLabel", "ROView", "ROTux", "RODraggable", "ROMouseClick", "Transcript", "String"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "theWorld",
category: 'not yet classified',
fn: function (){
var self=this;
var view,color;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROCountryInfo(){return smalltalk.ROCountryInfo||(typeof ROCountryInfo=="undefined"?nil:ROCountryInfo)}
function $ROPath(){return smalltalk.ROPath||(typeof ROPath=="undefined"?nil:ROPath)}
function $ROHighlight(){return smalltalk.ROHighlight||(typeof ROHighlight=="undefined"?nil:ROHighlight)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._addAll_(_st(_st($ROCountryInfo())._world())._collect_((function(country){
var el;
return smalltalk.withContext(function($ctx2) {
el=_st(_st($ROPath())._path_(_st($ROCountryInfo())._perform_(country)))._elementOn_(country);
el;
_st(el).__at(_st($ROHighlight())._color_(_st($Color())._brown()));
$ctx2.sendIdx["@"]=1;
return _st(el).__at($ROPopup());
}, function($ctx2) {$ctx2.fillBlock({country:country,el:el},$ctx1,1)})})));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"theWorld",{view:view,color:color},smalltalk.ROExample)})},
args: [],
source: "theWorld\x0a\x0a\x09|view color|\x0a\x09view := ROView new.\x0a\x09\x0a\x09view addAll: ((ROCountryInfo world) collect: [:country |\x0a\x09\x09|el|\x0a\x09\x09el := (ROPath path: (ROCountryInfo perform: country)) \x0a\x09\x09\x09\x09\x09elementOn: country.\x0a\x09\x09el @ (ROHighlight color: Color brown).\x0a\x09\x09el @ ROPopup.\x0a\x09]).\x0a\x09\x0a\x09view open.",
messageSends: ["new", "addAll:", "collect:", "world", "elementOn:", "path:", "perform:", "@", "color:", "brown", "open"],
referencedClasses: ["ROView", "ROCountryInfo", "ROPath", "ROHighlight", "Color", "ROPopup"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "theWorld2",
category: 'not yet classified',
fn: function (){
var self=this;
var view,color;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROCountryInfo(){return smalltalk.ROCountryInfo||(typeof ROCountryInfo=="undefined"?nil:ROCountryInfo)}
function $ROPath(){return smalltalk.ROPath||(typeof ROPath=="undefined"?nil:ROPath)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._addAll_(_st(_st($ROCountryInfo())._world())._collect_((function(country){
var el;
return smalltalk.withContext(function($ctx2) {
el=_st(_st($ROPath())._path_(_st($ROCountryInfo())._perform_(country)))._elementOn_(country);
el;
return _st(el).__at($ROPopup());
}, function($ctx2) {$ctx2.fillBlock({country:country,el:el},$ctx1,1)})})));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"theWorld2",{view:view,color:color},smalltalk.ROExample)})},
args: [],
source: "theWorld2\x0a\x0a\x09|view color|\x0a\x09view := ROView new.\x0a\x09\x0a\x09view addAll: ((ROCountryInfo world) collect: [:country |\x0a\x09\x09|el|\x0a\x09\x09el := (ROPath path: (ROCountryInfo perform: country)) \x0a\x09\x09\x09\x09\x09elementOn: country.\x0a\x09\x09el @ ROPopup.\x0a\x09]).\x0a\x09\x0a\x09view open.",
messageSends: ["new", "addAll:", "collect:", "world", "elementOn:", "path:", "perform:", "@", "open"],
referencedClasses: ["ROView", "ROCountryInfo", "ROPath", "ROPopup"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "treeLayout",
category: 'not yet classified',
fn: function (){
var self=this;
var view,elements,edges;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$5,$6,$4,$8,$9,$7,$11,$10,$3,$2;
view=_st($ROView())._new();
elements=_st($ROElement())._spritesOn_((1)._to_((5)));
_st(elements)._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._addInteraction_($RODraggable());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1,1)})}));
_st(view)._addAll_(elements);
$ctx1.sendIdx["addAll:"]=1;
$1=view;
$5=_st(elements)._at_((1));
$ctx1.sendIdx["at:"]=1;
$6=_st(elements)._at_((2));
$ctx1.sendIdx["at:"]=2;
$4=_st($5).__minus_gt($6);
$ctx1.sendIdx["->"]=1;
$8=_st(elements)._at_((2));
$ctx1.sendIdx["at:"]=3;
$9=_st(elements)._at_((5));
$ctx1.sendIdx["at:"]=4;
$7=_st($8).__minus_gt($9);
$ctx1.sendIdx["->"]=2;
$11=_st(elements)._at_((2));
$ctx1.sendIdx["at:"]=5;
$10=_st($11).__minus_gt(_st(elements)._at_((3)));
$3=[$4,$7,$10];
edges=_st($ROEdge())._linesFor_($3);
$2=edges;
_st($1)._addAll_($2);
_st($ROTreeLayout())._on_edges_(elements,edges);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"treeLayout",{view:view,elements:elements,edges:edges},smalltalk.ROExample)})},
args: [],
source: "treeLayout \x0a\x09\x22\x0a\x09self new treeLayout\x0a\x09\x22\x0a\x09\x0a\x09| view elements edges |\x0a\x09view := ROView new.\x0a\x09elements := ROElement spritesOn: (1 to: 5).\x0a\x09elements do:[:el | el addInteraction: RODraggable].\x0a\x09view addAll: elements.\x0a\x09view addAll: (edges := ROEdge linesFor: { (elements at: 1) -> (elements at: 2) . \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  (elements at: 2) -> (elements at: 5) . \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  (elements at: 2) -> (elements at: 3) }).\x0a\x09\x0a\x09ROTreeLayout on: elements edges: edges.\x0a\x0a\x09view open.",
messageSends: ["new", "spritesOn:", "to:", "do:", "addInteraction:", "addAll:", "linesFor:", "->", "at:", "on:edges:", "open"],
referencedClasses: ["ROView", "ROElement", "RODraggable", "ROEdge", "ROTreeLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "treeLayout2",
category: 'not yet classified',
fn: function (){
var self=this;
var view,elements;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
elements=_st($ROElement())._forCollection_((1)._to_((20)));
_st(elements)._do_((function(n){
return smalltalk.withContext(function($ctx2) {
_st(n)._extent_((50).__at((50)));
$2=_st($ROBox())._new();
$ctx2.sendIdx["new"]=1;
$1=_st(n)._addShape_($2);
return $1;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
view=_st($ROView())._new();
_st(view)._addAll_(elements);
_st(_st(elements)._allButFirst())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st($ROEdge())._lineFrom_to_(_st(elements)._first(),e));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
_st($ROTreeLayout())._on_(elements);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"treeLayout2",{view:view,elements:elements},smalltalk.ROExample)})},
args: [],
source: "treeLayout2\x0a\x09\x22\x0a\x09self new treeLayout\x0a\x09\x22\x0a\x09\x0a\x09| view elements |\x0a\x09elements := ROElement forCollection: (1 to: 20).\x0a\x09elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].\x0a\x09view := ROView new.\x0a\x09view addAll: elements.\x0a\x09elements allButFirst do: [:e | \x0a\x09 \x09view add: (ROEdge lineFrom: elements first to: e) ].\x0a\x0a\x09ROTreeLayout on: elements.\x0a\x09view open.",
messageSends: ["forCollection:", "to:", "do:", "extent:", "@", "addShape:", "new", "addAll:", "allButFirst", "add:", "lineFrom:to:", "first", "on:", "open"],
referencedClasses: ["ROElement", "ROBox", "ROView", "ROEdge", "ROTreeLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "tux",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROTux(){return smalltalk.ROTux||(typeof ROTux=="undefined"?nil:ROTux)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._add_(_st($ROTux())._element());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"tux",{view:view},smalltalk.ROExample)})},
args: [],
source: "tux\x0a\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROTux element).\x0a\x09view open",
messageSends: ["new", "add:", "element", "open"],
referencedClasses: ["ROView", "ROTux"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "worldConnections",
category: 'demo',
fn: function (){
var self=this;
var builder;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$6,$5,$3,$8,$7,$10,$11,$9,$12,$13;
builder=_st($ROMapBuilder())._new();
_st(builder)._countries_(["Canada", "UnitedStates", "France", "Chile", "Colombia"]);
$2=_st(builder)._shape();
$ctx1.sendIdx["shape"]=1;
$1=_st($2)._circle();
$ctx1.sendIdx["circle"]=1;
_st($1)._size_((8));
$ctx1.sendIdx["size:"]=1;
$4=$1;
$6=_st($Color())._red();
$ctx1.sendIdx["red"]=1;
$5=_st($6)._alpha_((0.5));
$ctx1.sendIdx["alpha:"]=1;
$3=_st($4)._color_($5);
$ctx1.sendIdx["color:"]=1;
_st(builder)._cities_(["New York City", "Washington, D.C.", "Paris", "Bordeaux", "Santiago", "Bogota"]);
$8=_st(builder)._shape();
$ctx1.sendIdx["shape"]=2;
$7=_st($8)._circle();
_st($7)._size_((20));
$10=$7;
$11=_st(_st($Color())._red())._alpha_((0.5));
$ctx1.sendIdx["alpha:"]=2;
$9=_st($10)._color_($11);
$ctx1.sendIdx["color:"]=2;
_st(builder)._city_position_("Vancouver",(49.25).__at((-123.133333)));
$12=_st(_st(builder)._shape())._line();
_st($12)._width_((3));
$13=_st($12)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(builder)._edgesFrom_toAll_("Paris",["New York City", "Washington, D.C.", "Santiago", "Bogota", "Vancouver"]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"worldConnections",{builder:builder},smalltalk.ROExample)})},
args: [],
source: "worldConnections\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').\x0a\x0a\x09builder shape circle size: 8; color: (Color red alpha: 0.5).\x0a\x0a\x09builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').\x0a\x0a\x09builder shape circle size: 20; color: (Color red alpha: 0.5).\x0a\x0a\x09builder city: 'Vancouver' position: 49.25 @ -123.133333.\x0a\x09\x0a\x09builder shape line width: 3; color: (Color blue alpha: 0.5).\x0a\x09builder edgesFrom: 'Paris' toAll: #('New York City' 'Washington, D.C.' 'Santiago' 'Bogota' 'Vancouver').\x0a\x0a\x09builder open",
messageSends: ["new", "countries:", "size:", "circle", "shape", "color:", "alpha:", "red", "cities:", "city:position:", "@", "width:", "line", "blue", "edgesFrom:toAll:", "open"],
referencedClasses: ["ROMapBuilder", "Color"]
}),
smalltalk.ROExample);



smalltalk.addClass('ROExampleSelector', smalltalk.Widget, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
var ul,li,a;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
ul=_st(html)._ul();
_st(ul)._class_("dropdown-menu");
_st(_st(_st(_st(_st($ROExample())._methodDictionary())._values())._select_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(_st(m)._category()).__eq("demo");
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)})})))._collect_((function(mtd){
return smalltalk.withContext(function($ctx2) {
return _st(mtd)._selector();
}, function($ctx2) {$ctx2.fillBlock({mtd:mtd},$ctx1,2)})})))._do_((function(selector){
return smalltalk.withContext(function($ctx2) {
li=_st(html)._li();
li;
a=_st(html)._a();
a;
_st(a)._href_("#");
_st(a)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._show_(selector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
_st(a)._with_(selector);
_st(li)._append_(a);
$ctx2.sendIdx["append:"]=1;
return _st(ul)._append_(li);
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,ul:ul,li:li,a:a},smalltalk.ROExampleSelector)})},
args: ["html"],
source: "renderOn: html\x0a\x09| ul li a |\x0a\x09ul := html ul.\x0a\x09ul class: 'dropdown-menu'.\x0a\x09\x0a\x09((ROExample methodDictionary values select: [:m | m category = 'demo']) collect: [:mtd | mtd selector])  do: [:selector |\x0a\x0a\x09\x09li := html li.\x0a\x09\x09a := html a.\x0a\x09\x09a href: '#'.\x0a\x09\x09a onClick: [self show: selector].\x0a\x09\x09a with: selector.\x0a\x09\x09li append: a.\x0a\x09\x09ul append: li.\x0a\x09].",
messageSends: ["ul", "class:", "do:", "collect:", "select:", "values", "methodDictionary", "=", "category", "selector", "li", "a", "href:", "onClick:", "show:", "with:", "append:"],
referencedClasses: ["ROExample"]
}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'not yet classified',
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateTextArea_(selector);
self._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector},smalltalk.ROExampleSelector)})},
args: ["selector"],
source: "show: selector\x0a\x09self updateTextArea: selector.\x0a\x09self updateCanvas: selector.",
messageSends: ["updateTextArea:", "updateCanvas:"],
referencedClasses: []
}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodeWithoutMethodnameOf:",
category: 'utils',
fn: function (method){
var self=this;
var sourceCodeLines;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1;
sourceCodeLines=_st(_st(method)._source())._lines();
_st(sourceCodeLines)._removeFirst();
$1=_st(_st(sourceCodeLines)._reject_((function(line){
return smalltalk.withContext(function($ctx2) {
$3=_st($String())._cr();
$ctx2.sendIdx["cr"]=1;
$2=_st(line).__eq($3);
$ctx2.sendIdx["="]=1;
return _st($2)._or_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(line).__eq(" ");
$ctx3.sendIdx["="]=2;
return _st($4)._or_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(line).__eq("");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["or:"]=1;
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1,1)})})))._inject_into_("",(function(sourceCode,line){
return smalltalk.withContext(function($ctx2) {
return _st(_st(sourceCode).__comma(_st($String())._cr())).__comma(line);
$ctx2.sendIdx[","]=1;
}, function($ctx2) {$ctx2.fillBlock({sourceCode:sourceCode,line:line},$ctx1,4)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCodeWithoutMethodnameOf:",{method:method,sourceCodeLines:sourceCodeLines},smalltalk.ROExampleSelector)})},
args: ["method"],
source: "sourceCodeWithoutMethodnameOf: method\x0a\x09| sourceCodeLines |\x0a\x09sourceCodeLines := method source lines.\x0a\x09sourceCodeLines removeFirst.\x0a\x09\x22 Remove newlines, empty and one-space lines\x22\x0a\x09^ (sourceCodeLines reject: [:line | line = (String cr) \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09or: [ line = ' ' \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09or: [ line = '' ]]])\x0a\x09\x22then join them into one string and return\x22\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09inject: '' into: [:sourceCode :line | sourceCode,(String cr),line ]",
messageSends: ["lines", "source", "removeFirst", "inject:into:", "reject:", "or:", "=", "cr", ","],
referencedClasses: ["String"]
}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas:",
category: 'not yet classified',
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROExample())._new())._perform_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.ROExampleSelector)})},
args: ["selector"],
source: "updateCanvas: selector\x0a\x09\x22execute 'ROExample new selector' command\x22\x0a\x09ROExample new perform:selector.",
messageSends: ["perform:", "new"],
referencedClasses: ["ROExample"]
}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTextArea:",
category: 'not yet classified',
fn: function (selector){
var self=this;
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($RODemo())._current())._writeExample_(self._sourceCodeWithoutMethodnameOf_(_st($ROExample()).__gt_gt(selector)));
return self}, function($ctx1) {$ctx1.fill(self,"updateTextArea:",{selector:selector},smalltalk.ROExampleSelector)})},
args: ["selector"],
source: "updateTextArea: selector\x0a\x09\x22put the code into #roassal-text textarea\x22\x0a\x09RODemo current writeExample:  (self sourceCodeWithoutMethodnameOf: (ROExample>>selector)\x09).",
messageSends: ["writeExample:", "current", "sourceCodeWithoutMethodnameOf:", ">>"],
referencedClasses: ["RODemo", "ROExample"]
}),
smalltalk.ROExampleSelector);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._appendToJQuery_("#selectorList"._asJQuery());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.ROExampleSelector.klass)})},
args: [],
source: "init\x0a\x09^ self new appendToJQuery: '#selectorList' asJQuery; yourself.",
messageSends: ["appendToJQuery:", "new", "asJQuery", "yourself"],
referencedClasses: []
}),
smalltalk.ROExampleSelector.klass);


smalltalk.addClass('ROWorkspace', smalltalk.Widget, ['workspace'], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROWorkspace)})},
args: [],
source: "clear \x0a\x09workspace clear.",
messageSends: ["clear"],
referencedClasses: []
}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"doIt",{},smalltalk.ROWorkspace)})},
args: [],
source: "doIt\x0a\x09workspace doIt",
messageSends: ["doIt"],
referencedClasses: []
}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._with_("DoIt");
_st($1)._class_("btn");
_st($1)._title_("ctrl+d");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.ROWorkspace)})},
args: ["html"],
source: "renderButtonsOn: html\x0a    html a\x0a\x09with: 'DoIt';\x0a\x09class: 'btn';\x0a\x09title: 'ctrl+d';\x0a\x09onClick: [self workspace doIt].\x0a\x22\x09\x0a    html a\x0a\x09with: 'PrintIt';\x0a\x09class: 'btn';\x0a\x09title: 'ctrl+p';\x0a\x09onClick: [self workspace printIt].\x0a    \x0a\x09html a\x0a\x09with: 'InspectIt';\x0a\x09class: 'btn';\x0a\x09title: 'ctrl+i';\x0a\x09onClick: [self workspace inspectIt]\x0a\x22",
messageSends: ["with:", "a", "class:", "title:", "onClick:", "doIt", "workspace"],
referencedClasses: []
}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
var div;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("roworkspace");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,div:div},smalltalk.ROWorkspace)})},
args: ["html"],
source: "renderOn: html\x0a\x09| div |\x0a\x09html div \x0a\x09\x09class: 'roworkspace';\x0a\x09\x09with: [self renderButtonsOn: html];\x0a\x09\x09with: [self workspace renderOn: html].",
messageSends: ["class:", "div", "with:", "renderButtonsOn:", "renderOn:", "workspace"],
referencedClasses: []
}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "val:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._val_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"val:",{aString:aString},smalltalk.ROWorkspace)})},
args: ["aString"],
source: "val: aString\x0a\x09workspace val: aString.",
messageSends: ["val:"],
referencedClasses: []
}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "workspace",
category: 'not yet classified',
fn: function (){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@workspace"];
if(($receiver = $2) == nil || $receiver == null){
self["@workspace"]=_st($SourceArea())._new();
$1=self["@workspace"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"workspace",{},smalltalk.ROWorkspace)})},
args: [],
source: "workspace\x0a\x09^ workspace ifNil: [\x0a          \x09workspace := SourceArea new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["SourceArea"]
}),
smalltalk.ROWorkspace);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._appendToJQuery_("#roassaltext"._asJQuery());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.ROWorkspace.klass)})},
args: [],
source: "init\x0a\x09^ self new appendToJQuery: '#roassaltext' asJQuery; yourself.",
messageSends: ["appendToJQuery:", "new", "asJQuery", "yourself"],
referencedClasses: []
}),
smalltalk.ROWorkspace.klass);

});
