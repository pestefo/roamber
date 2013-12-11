smalltalk.addPackage('ARoassal-Demo');
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
if(($receiver = $1) == nil || $receiver == undefined){
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
var $1,$2,$3,$4,$5,$6;
values=[(10), (12), (13), (80), (70), (20), (56)];
builder=_st($GETDiagramBuilder())._new();
$1=_st(builder)._compositeDiagram();
$2=_st($GETVerticalBarDiagram())._new();
_st($2)._models_(values);
$3=_st($2)._color_(_st($Color())._lightGreen());
_st($1)._add_($3);
$4=_st($GETOrdinaryLineDiagram())._new();
_st($4)._models_(values);
_st($4)._y_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(v)._cos())._abs()).__star((50));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
$5=_st($4)._color_(_st($Color())._brown());
_st($1)._add_($5);
_st($1)._height_((250));
$6=_st($1)._regularAxis();
_st(_st(builder)._interaction())._popUpText();
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"barAndLines",{builder:builder,values:values},smalltalk.ROExample)})},
args: [],
source: "barAndLines\x0a\x0a|builder values|\x0avalues := #(10 12 13 80 70 20 56).\x0abuilder := GETDiagramBuilder new.\x0abuilder compositeDiagram\x0a\x09add: (GETVerticalBarDiagram new\x0a\x09\x09\x09models: values;\x0a\x09\x09\x09color: Color lightGreen);\x0a\x0a\x09add: (GETOrdinaryLineDiagram new\x0a\x09\x09\x09models: values;\x0a\x09\x09\x09y: [:v | v cos abs * 50];\x0a\x09\x09\x09color: Color brown);\x0a\x09height: 250;\x0a\x09regularAxis.\x0a\x0abuilder interaction popUpText.\x0abuilder open.",
messageSends: ["new", "add:", "models:", "color:", "lightGreen", "compositeDiagram", "y:", "*", "abs", "cos", "brown", "height:", "regularAxis", "popUpText", "interaction", "open"],
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
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
el=_st(_st($ROBox())._element())._color_(_st($Color())._green());
_st(view)._add_(el);
_st(el)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
e=_st($ROBox())._element();
e;
_st(e)._size_(_st(_st(view)._elements())._size());
_st(view)._add_(e);
_st($ROCellLayout())._on_(_st(view)._elements());
return _st(view)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"boxGenerator",{view:view,el:el,e:e},smalltalk.ROExample)})},
args: [],
source: "boxGenerator\x0a\x0a\x09\x22 Click on the green square multiple times \x22\x0a\x09| view el e |\x0a\x09view := ROView new.\x0a\x09el := ROBox element color: (Color green).\x0a\x09view add: el.\x0a\x09el on: ROMouseClick do: [:event | \x0a\x09\x09e := ROBox element.\x0a\x09\x09e size: (view elements size).\x0a\x09\x09view add: e. \x0a\x09\x09ROCellLayout on: view elements.\x0a\x09\x09view signalUpdate\x0a\x09].\x0a\x09view open.",
messageSends: ["new", "color:", "green", "element", "add:", "on:do:", "size:", "size", "elements", "on:", "signalUpdate", "open"],
referencedClasses: ["ROView", "Color", "ROBox", "ROMouseClick", "ROCellLayout"]
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
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._clear();
(1)._to_do_((200),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st(_st($ROBox())._elementOn_(i)).__at($RODraggable()));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st($ROCellLayout())._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"cellLayout",{view:view},smalltalk.ROExample)})},
args: [],
source: "cellLayout\x0a| view |\x0aview := ROView new.\x0aview clear.\x0a\x22 Play changing the number of squares\x22\x0a1 to: 200 do: [ :i |\x0a\x09view add: (ROBox elementOn: i) @RODraggable ].\x0a\x09ROCellLayout on: view elements .\x0a\x09view open.",
messageSends: ["new", "clear", "to:do:", "add:", "@", "elementOn:", "on:", "elements", "open"],
referencedClasses: ["ROView", "RODraggable", "ROBox", "ROCellLayout"]
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
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._add_(_st(_st(_st(_st($ROEllipse())._element())._translateTo_((50).__at((50)))).__at($RODraggable()))._color_(_st($Color())._green()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)})},
args: [],
source: "circle\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: ((ROEllipse element translateTo: 50 @ 50) @ RODraggable color: Color green).\x0a\x09view open.",
messageSends: ["new", "add:", "color:", "green", "@", "translateTo:", "element", "open"],
referencedClasses: ["ROView", "Color", "RODraggable", "ROEllipse"]
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
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROHighlight(){return smalltalk.ROHighlight||(typeof ROHighlight=="undefined"?nil:ROHighlight)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$7;
view=_st($ROView())._new();
classElements=_st($ROElement())._forCollection_(_st($Collection())._withAllSubclasses());
_st(classElements)._do_((function(c){
var instVar,numMethods;
return smalltalk.withContext(function($ctx2) {
instVar=_st(_st(c)._model())._numberOfVariables();
instVar;
$1=_st(c)._shape();
$3=_st(instVar).__eq((0));
if(smalltalk.assert($3)){
$2=(10);
} else {
$2=_st(instVar).__star((15));
};
_st($1)._width_($2);
numMethods=_st(_st(c)._model())._numberOfMethods();
numMethods;
$4=_st(c)._shape();
$6=_st(numMethods).__eq((0));
if(smalltalk.assert($6)){
$5=(3);
} else {
$5=_st(numMethods).__star((2));
};
_st($4)._height_($5);
return _st(_st(_st(_st(c).__plus($ROBox())).__at($RODraggable())).__at($ROHighlight())).__at($ROPopup());
}, function($ctx2) {$ctx2.fillBlock({c:c,instVar:instVar,numMethods:numMethods},$ctx1)})}));
_st(view)._addAll_(classElements);
associations=_st(classElements)._collect_thenSelect_((function(c){
return smalltalk.withContext(function($ctx2) {
$7=_st(_st(_st(c)._model())._superclass()).__eq($Object());
if(! smalltalk.assert($7)){
return _st(_st(view)._elementFromModel_(_st(_st(c)._model())._superclass())).__minus_gt(c);
};
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}),(function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(assoc)._isNil())._not();
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
edges=_st($ROEdge())._linesFor_(associations);
_st(view)._addAll_(edges);
_st($ROTreeLayout())._on_edges_(_st(view)._elements(),edges);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"collectionHierarchy",{view:view,classElements:classElements,edges:edges,associations:associations},smalltalk.ROExample)})},
args: [],
source: "collectionHierarchy\x0a| view classElements edges associations |\x0aview := ROView new.\x0aclassElements := ROElement forCollection: Collection withAllSubclasses.\x0aclassElements\x0a\x09do: [:c | | instVar numMethods |\x0a\x09\x09instVar := c model numberOfVariables.\x0a\x09\x09c shape width: (( instVar = 0) ifTrue: [ 10 ] ifFalse: [ instVar * 15]) .\x0a\x0a\x09\x09numMethods := c model numberOfMethods.\x0a\x09\x09c shape height: (( numMethods = 0) ifTrue: [ 3 ] ifFalse: [ numMethods * 2]) . \x09\x0a\x09\x09c + ROBox @ RODraggable @ ROHighlight  @ ROPopup.\x0a\x0a].\x0aview addAll: classElements.\x0a\x0a\x22 Build and add edges \x22\x0aassociations := classElements collect: [:c |\x0a\x09\x09\x09(c model superclass = Object)\x0a\x09\x09\x09ifFalse: [ (view elementFromModel: c\x0a\x09\x09\x09\x09model superclass) -> c]\x0a\x09\x09\x09] thenSelect: [:assoc | assoc isNil not ].\x0a\x09\x09\x09\x0aedges := ROEdge linesFor: associations.\x0aview addAll: edges.\x0a\x0a\x22 Show the hierarchy as a tree \x22\x0aROTreeLayout on: (view elements) edges: edges.\x0a\x0a\x0aview open.",
messageSends: ["new", "forCollection:", "withAllSubclasses", "do:", "numberOfVariables", "model", "width:", "ifTrue:ifFalse:", "*", "=", "shape", "numberOfMethods", "height:", "@", "+", "addAll:", "collect:thenSelect:", "ifFalse:", "->", "elementFromModel:", "superclass", "not", "isNil", "linesFor:", "on:edges:", "elements", "open"],
referencedClasses: ["ROView", "Collection", "ROElement", "ROPopup", "ROHighlight", "RODraggable", "ROBox", "Object", "ROEdge", "ROTreeLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "create",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)});},
args: [],
source: "create\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROElement new shape: (ROBox new)).\x0a\x09view open.",
messageSends: ["new", "add:", "shape:", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement"]
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
elements=_st($OrderedCollection())._new();
b=_st(_st($ROBox())._element())._translateTo_((50).__at((50)));
_st(elements)._add_(b);
_st(elements)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._addInteraction_($RODraggable());
return _st(view)._add_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"drag",{view:view,elements:elements,b:b},smalltalk.ROExample)})},
args: [],
source: "drag\x0a\x09| view elements b |\x0a\x09view := ROView new.\x0a\x09elements := OrderedCollection new.\x0a\x09b := (ROBox element translateTo: 50 @ 50).\x0a\x09elements add: b.\x22; \x0a\x09\x09\x09 add: (ROCircle element translateTo: 200 @ 150). \x22\x0a\x09\x0a\x09elements do: [:each | each addInteraction: RODraggable. view add: each].\x0a\x09view open.",
messageSends: ["new", "translateTo:", "@", "element", "add:", "do:", "addInteraction:", "open"],
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
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROImage(){return smalltalk.ROImage||(typeof ROImage=="undefined"?nil:ROImage)}
return smalltalk.withContext(function($ctx1) { 
url="https://www.google.cl/images/srpr/logo11w.png";
view=_st($ROView())._new();
_st(view)._add_(_st(_st(_st($ROBox())._new())._elementOn_((1))).__at($RODraggable()));
el=_st(_st(_st($ROImage())._url_(url))._elementOn_((1))).__at($RODraggable());
_st(el)._size_((200));
_st(view)._add_(el);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"exampleImage",{view:view,url:url,el:el,sh:sh},smalltalk.ROExample)})},
args: [],
source: "exampleImage\x0a|view url el sh|\x0aurl := 'https://www.google.cl/images/srpr/logo11w.png'.\x0aview := ROView new.\x0aview add: (ROBox new elementOn: 1) @RODraggable.\x0ael := ((ROImage url: url) elementOn: 1) @ RODraggable.\x0ael size: 200.\x0aview add: el.\x0a\x0a\x0a\x0aview open.",
messageSends: ["new", "add:", "@", "elementOn:", "url:", "size:", "open"],
referencedClasses: ["ROView", "RODraggable", "ROBox", "ROImage"]
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
source: "exampleImage2\x0a\x09\x22 two buttons + and - and an image. When clicking any of them, resize the image \x22 ",
messageSends: [],
referencedClasses: []
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
_st(_st(diagram)._rawView())._translateBy_((-100).__at((-100)));
_st(_st(diagram)._interaction())._popUpText_((function(el){
return smalltalk.withContext(function($ctx2) {
$4=_st(el).__gt((0));
if(smalltalk.assert($4)){
return _st(_st(el)._asString()).__comma(" is a green number");
} else {
return _st(_st(el)._asString()).__comma(" is a red number :(");
};
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"greenAndRedNumbers",{diagram:diagram,values:values},smalltalk.ROExample)})},
args: [],
source: "greenAndRedNumbers\x0a\x0a| diagram values |\x0avalues := (1 to: 10) collect: [ :v | 10 atRandom - 5 ].\x0adiagram := GETDiagramBuilder new.\x0adiagram verticalBarDiagram\x0amodels: values;\x0aheight: 150;\x0acolor: [:each | each < 0 ifTrue: [ Color red ] ifFalse: [ Color green ] ];\x0aregularAxis.\x0a\x0adiagram rawView translateBy: -100 @ -100.\x0adiagram interaction popUpText: [:el | \x0a\x09\x09(el > 0) \x0a\x09\x09\x09ifTrue: [(el asString),' is a green number']\x0a\x09\x09\x09ifFalse: [(el asString),' is a red number :(']\x0a].\x0adiagram open",
messageSends: ["collect:", "-", "atRandom", "to:", "new", "models:", "verticalBarDiagram", "height:", "color:", "ifTrue:ifFalse:", "red", "green", "<", "regularAxis", "translateBy:", "@", "rawView", "popUpText:", ",", "asString", ">", "interaction", "open"],
referencedClasses: ["GETDiagramBuilder", "Color"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { var $1;
view=_st((smalltalk.ROView || ROView))._new();
_st(view)._clear();
_st((10))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {return _st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st((smalltalk.ROHorizontalLineLayout || ROHorizontalLineLayout))._on_(_st(view)._elements());
_st(view)._open();
$1=view;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalLayout",{view:view},smalltalk.ROExample)});},
args: [],
source: "horizontalLayout\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x0910 timesRepeat: [view add: (ROElement new shape: (ROBox new))].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.\x0a\x09^ view.",
messageSends: ["new", "clear", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout2",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { var $1,$2;
view=_st((smalltalk.ROView || ROView))._new();
_st(view)._clear();
_st((1))._to_do_((20),(function(i){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.ROBox || ROBox))._new();
_st($1)._height_((function(el){
return smalltalk.withContext(function($ctx3) {return _st(_st(el)._model()).__star((13));
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx1)})}));
$2=_st($1)._width_((function(el){
return smalltalk.withContext(function($ctx3) {return _st(_st(el)._model()).__star((5));
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx1)})}));
return _st(view)._add_(_st(_st(_st((smalltalk.ROElement || ROElement))._new())._model_(i))._shape_($2));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st((smalltalk.ROHorizontalLineLayout || ROHorizontalLineLayout))._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLayout2",{view:view},smalltalk.ROExample)});},
args: [],
source: "horizontalLayout2\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x091 to: 20 do: [ :i |\x0a\x09\x09view add: ((ROElement new model: i) shape: \x0a\x09\x09\x09(ROBox new height: [ :el | el model * 13 ]; width: [ :el | el model * 5 ])) ].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.",
messageSends: ["new", "clear", "to:do:", "add:", "shape:", "height:", "*", "model", "width:", "model:", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROBox", "ROElement", "ROHorizontalLineLayout"]
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
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._clear();
colorWheel=_st(_st($Color())._red())._wheel_to_((20),_st($Color())._green());
_st(colorWheel)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st(_st(_st($ROBox())._element())._color_(c)).__at($RODraggable()));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
_st($ROHorizontalLineLayout())._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"horizontalLineLayout",{view:view,colorWheel:colorWheel},smalltalk.ROExample)})},
args: [],
source: "\x09horizontalLineLayout\x0a\x09| view colorWheel |\x0a\x09view := ROView new.\x0a\x09view clear.\x0a\x09colorWheel := (Color red) wheel: 20 to: (Color green).\x0a\x09colorWheel do: [:c | \x0a\x09\x09view add: (ROBox element color:  c ) @ RODraggable].\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09view open.",
messageSends: ["new", "clear", "wheel:to:", "green", "red", "do:", "add:", "@", "color:", "element", "on:", "elements", "open"],
referencedClasses: ["ROView", "Color", "RODraggable", "ROBox", "ROHorizontalLineLayout"]
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
view=_st($ROView())._new();
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(event)._element())._color_(_st($Color())._red());
return _st(_st(_st(event)._element())._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(element)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(event)._element())._color_(_st($Color())._blue());
return _st(_st(_st(event)._element())._view())._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"hover",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "hover\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseEnter do: [ :event | event element color: Color red. event element view signalUpdate. ].\x0aelement on: ROMouseLeave do: [ :event | event element color: Color blue.  event element view signalUpdate. ].\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "color:", "red", "element", "signalUpdate", "view", "blue", "add:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROMouseEnter", "Color", "ROMouseLeave"]
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
var $1,$2;
view=_st($ROView())._new();
el1=_st($ROBox())._element();
el2=_st($ROBox())._element();
_st(el1)._translateTo_((20).__at((30)));
_st(el2)._translateTo_((300).__at((100)));
edge=_st($ROLine())._edgeFrom_to_(el1,el2);
$1=view;
_st($1)._add_(el1);
_st($1)._add_(el2);
$2=_st($1)._add_(edge);
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
var $1,$2;
view=_st($ROView())._new();
el1=_st($ROEllipse())._element();
el2=_st($ROEllipse())._element();
_st(el1)._translateTo_((20).__at((30)));
_st(el2)._translateTo_((300).__at((100)));
edge=_st($ROLine())._edgeFrom_to_(el1,el2);
el3=_st($ROBox())._element();
el4=_st($ROBox())._element();
_st(el3)._translateTo_((150).__at((20)));
_st(el4)._translateTo_((150).__at((300)));
edge2=_st($ROLine())._edgeFrom_to_(el3,el4);
$1=view;
_st($1)._add_(el1);
_st($1)._add_(el2);
_st($1)._add_(edge);
_st($1)._add_(el3);
_st($1)._add_(el4);
$2=_st($1)._add_(edge2);
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
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(event)._element())._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
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
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element)._on_do_($ROMouseLeftClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(event)._element())._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
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
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
element=_st(_st($ROElement())._new())._size_((100));
element2=_st(_st($ROElement())._new())._size_((50));
_st(element).__plus($ROBox());
_st(element2).__plus($ROBox());
_st(element)._on_do_($ROMouseLeftClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_("e1".__comma(_st($String())._cr()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(element2)._on_do_($ROMouseLeftClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($Transcript())._show_("-e2-".__comma(_st($String())._cr()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(view)._add_(element);
_st(view)._add_(element2);
_st($ROHorizontalLineLayout())._on_([element,element2]);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"mouseclick3",{view:view,element:element,element2:element2},smalltalk.ROExample)})},
args: [],
source: "mouseclick3\x0a|view element element2|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement2 := ROElement new size: 50.\x0aelement + ROBox.\x0aelement2 + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseLeftClick do: [ :event | Transcript show: 'e1',(String cr)].\x0aelement2 on: ROMouseLeftClick do: [ :event | Transcript show: '-e2-',(String cr)].\x0aview add: element.\x0aview add: element2.\x0aROHorizontalLineLayout on: {element . element2}.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "show:", ",", "cr", "add:", "on:", "open"],
referencedClasses: ["ROView", "ROElement", "ROBox", "ROMouseLeftClick", "String", "Transcript", "ROHorizontalLineLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "pib",
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
var $1,$2,$3,$4;
view=_st($ROView())._new();
color=_st($Color())._lightBlue();
cityBuilder=_st($ROMapBuilder())._new();
_st(cityBuilder)._view_(view);
_st(cityBuilder)._allCountries();
values=_st(_st(_st($ROMapBuilder())._new())._pib())._sorted_((function(ar1,ar2){
return smalltalk.withContext(function($ctx2) {
return _st(_st(ar2)._second()).__lt(_st(ar1)._second());
}, function($ctx2) {$ctx2.fillBlock({ar1:ar1,ar2:ar2},$ctx1)})}));
graphBuilder=_st($GETDiagramBuilder())._new();
_st(graphBuilder)._rawView_(view);
$1=_st(graphBuilder)._verticalBarDiagram();
_st($1)._models_(_st(values)._copyFrom_to_((1),(40)));
_st($1)._y_("second");
_st($1)._color_(color);
_st($1)._regularAxisAsInteger();
_st($1)._barWidth_((2));
$2=_st($1)._titleLabel_("Gross Domestic Product (GDP)");
$3=_st(_st(graphBuilder)._interaction())._popUpText();
_st($3)._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(view)._elementFromModel_(_st(_st(_st(_st(event)._element())._model())._first())._asSymbol()))._color_(color);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
$4=_st($3)._on_do_($ROMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st(view)._elementFromModel_(_st(_st(_st(_st(event)._element())._model())._first())._asSymbol()))._color_(_st($Color())._white());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(graphBuilder)._openIn_(view);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"pib",{view:view,cityBuilder:cityBuilder,values:values,graphBuilder:graphBuilder,color:color},smalltalk.ROExample)})},
args: [],
source: "pib\x0a| view cityBuilder values graphBuilder color|\x0a\x09view := ROView new.\x0a\x09color := Color lightBlue.\x0a\x09\x0a\x09\x22Maps\x22\x0a\x09cityBuilder := ROMapBuilder new.\x0a\x09cityBuilder view: view.\x0a\x09cityBuilder allCountries.\x0a\x09\x0a\x09\x22Values\x22\x0a\x09values := ROMapBuilder new pib \x0a\x09\x09\x09sorted: [ :ar1 :ar2 | ar2 second < ar1 second ].\x0a\x09graphBuilder := GETDiagramBuilder new.\x0a\x09graphBuilder rawView: view.\x0a\x09graphBuilder verticalBarDiagram\x0a\x09\x09\x09models: (values copyFrom: 1 to: 40);\x0a\x09\x09\x09y: #second;\x0a\x09\x09\x09color: color;\x0a\x09\x09\x09regularAxisAsInteger;\x0a\x09\x09\x09barWidth: 2;\x0a\x09\x09\x09titleLabel: 'Gross Domestic Product (GDP)'.\x0a\x09graphBuilder interaction popUpText\x0a\x09\x09on: ROMouseEnter \x0a\x09\x09do: [ :event |  \x0a\x09\x09\x09\x09(view elementFromModel: \x0a\x09\x09\x09\x09\x09event element model first asSymbol) color: color  ];\x0a\x09\x09on: ROMouseLeave \x0a\x09\x09do: [ :event |  \x0a\x09\x09\x09\x09(view elementFromModel: \x0a\x09\x09\x09\x09\x09event element model first asSymbol) color: Color white  ] \x09\x09\x09.\x0a\x09graphBuilder openIn: view.\x0a\x09\x0a\x09\x22Openining the thing\x22\x0a\x09view open.\x0a\x09\x22view openInWindowSized: 1000 @ 600.\x22",
messageSends: ["new", "lightBlue", "view:", "allCountries", "sorted:", "<", "second", "pib", "rawView:", "models:", "copyFrom:to:", "verticalBarDiagram", "y:", "color:", "regularAxisAsInteger", "barWidth:", "titleLabel:", "on:do:", "elementFromModel:", "asSymbol", "first", "model", "element", "popUpText", "interaction", "white", "openIn:", "open"],
referencedClasses: ["ROView", "Color", "ROMapBuilder", "GETDiagramBuilder", "ROMouseEnter", "ROMouseLeave"]
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
}, function($ctx2) {$ctx2.fillBlock({d:d,t:t},$ctx1)})});
$3=_st($ROPlot())._new();
_st($3)._url_("https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv");
$4=_st($3)._drawBlock_(block);
return self}, function($ctx1) {$ctx1.fill(self,"plotFromCSV",{block:block},smalltalk.ROExample)})},
args: [],
source: "plotFromCSV\x0a\x22\x0aThis is a chart of the column 'NC'  of the table in a CSV file hosted on dropbox \x0a\x22\x0a|block|\x0ablock := [:d :t |\x0ad verticalBarDiagram\x0a\x22try yourself by changing 'NNEC' to 'NC' and re-do\x22\x0amodels: (t dataFromColumn: 'NC');\x0a\x22or maybe change the color\x22\x0acolor: Color brown;\x0aregularAxisAsInteger;\x0aheight: 100;\x0awidth: 300\x0a].\x0aROPlot new \x0aurl: 'https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv';\x0adrawBlock: block",
messageSends: ["models:", "dataFromColumn:", "verticalBarDiagram", "color:", "brown", "regularAxisAsInteger", "height:", "width:", "url:", "new", "drawBlock:"],
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
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
element=_st(_st($ROElement())._forCollection_(_st($Collection())._withAllSubclasses()))._first();
_st(element).__plus($ROBox());
_st(element).__at($ROPopup());
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"popup",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "popup\x0a|view element|\x0aview := ROView new.\x0a\x22element := (ROElement on: 'Hi there!') size: 100.\x22\x0aelement := (ROElement forCollection: Collection withAllSubclasses) first.\x0aelement + ROBox.\x0aelement @ ROPopup.\x0a\x22Open an inspector when clicking\x22\x0a\x0aview add: element.\x0aview open.",
messageSends: ["new", "first", "forCollection:", "withAllSubclasses", "+", "@", "add:", "open"],
referencedClasses: ["ROView", "Collection", "ROElement", "ROBox", "ROPopup"]
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
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element).__at($RODraggable());
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
builder=_st($ROPunchcardBuilder())._new();
_st(builder)._addModels_(["Sed", "molestie", "nec", "nisi quis", "vestibulum", "Morbi tempus", "luctus", "commodo"]);
_st(builder)._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(word)._size();
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length");
_st(builder)._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((3));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length * 3");
_st(builder)._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__slash((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length / 2");
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
selector: "scale",
category: 'not yet classified',
fn: function (){
var self=this;
var view,url,elements,scaleFactor,tux;
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROImageShape(){return smalltalk.ROImageShape||(typeof ROImageShape=="undefined"?nil:ROImageShape)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROTux(){return smalltalk.ROTux||(typeof ROTux=="undefined"?nil:ROTux)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROHorizontalLineLayout(){return smalltalk.ROHorizontalLineLayout||(typeof ROHorizontalLineLayout=="undefined"?nil:ROHorizontalLineLayout)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
return smalltalk.withContext(function($ctx1) { 
url="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/p320x320/1457530_768681953149154_113448858_n.jpg";
elements=[_st(_st(_st($ROImageShape())._url_(url))._element()).__at($RODraggable()),_st(_st($ROEllipse())._element()).__at($RODraggable()),_st(_st($ROBox())._element()).__at($RODraggable()),_st(_st($ROTux())._element()).__at($RODraggable())];
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
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2)})}));
return _st(view)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(view)._add_(tux);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"scale",{view:view,url:url,elements:elements,scaleFactor:scaleFactor,tux:tux},smalltalk.ROExample)})},
args: [],
source: "scale\x0a\x0a\x09| view url elements scaleFactor tux|\x0a\x09url := 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn2/p320x320/1457530_768681953149154_113448858_n.jpg'.\x0a\x09elements := { \x0a\x09\x09\x09((ROImageShape url: url) element @RODraggable) .\x0a\x09\x09\x09ROEllipse element @RODraggable .\x0a\x09\x09\x09ROBox element @RODraggable .\x0a\x09\x09\x09ROTux element @RODraggable \x0a\x09}.\x0a\x09scaleFactor := #( 0.9 1.001 1.1 1.2 ).\x0a\x0a\x09view := ROView new.\x0a\x09tux :=  ROTux element @RODraggable.\x0a\x09view addAll: elements.\x0a\x09ROHorizontalLineLayout on: view elements.\x0a\x09tux on: ROMouseClick do: [:evt | \x0a\x09\x09elements do: [:e |\x0a\x09\x09\x09e shape scale: (scaleFactor at: (elements indexOf: e)).  \x0a\x09\x09].\x0a\x09\x09view signalUpdate.].\x0a\x0a\x09view add: tux.\x0a\x09view open\x0a\x09\x0a\x09",
messageSends: ["@", "element", "url:", "new", "addAll:", "on:", "elements", "on:do:", "do:", "scale:", "at:", "indexOf:", "shape", "signalUpdate", "add:", "open"],
referencedClasses: ["RODraggable", "ROImageShape", "ROEllipse", "ROBox", "ROTux", "ROView", "ROHorizontalLineLayout", "ROMouseClick"]
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
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $ROTux(){return smalltalk.ROTux||(typeof ROTux=="undefined"?nil:ROTux)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
plus=_st(_st($ROLabel())._element())._on_("+");
view=_st($ROView())._new();
_st(view)._add_(plus);
tux=_st(_st($ROTux())._element()).__at($RODraggable());
_st(tux)._on_do_($ROMouseClick(),(function(evt){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._show_(_st(_st(_st(_st(_st(_st(plus)._shape())._width())._asString()).__comma(",")).__comma(_st(_st(_st(plus)._shape())._svgElement())._attr_("width"))).__comma("   "));
_st(_st(plus)._shape())._scale_((2));
_st($Transcript())._show_(_st(_st(_st(_st(_st(_st(plus)._shape())._width())._asString()).__comma(",")).__comma(_st(_st(_st(plus)._shape())._svgElement())._attr_("width"))).__comma(_st($String())._cr()));
return _st(view)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(view)._add_(tux);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"scaleLabel",{view:view,plus:plus,tux:tux},smalltalk.ROExample)})},
args: [],
source: "scaleLabel\x0a|view plus tux|\x0aplus := (ROLabel element on: '+').\x0aview := ROView new.\x0aview add: plus.\x0a\x0atux :=  ROTux element @RODraggable.\x0a\x0atux on: ROMouseClick do: [:evt | \x0a\x09Transcript show: (plus shape width asString),',',(plus shape svgElement attr: 'width'),'   '.\x0a\x09plus shape scale: 2.  \x0a\x09Transcript show: (plus shape width asString),',',(plus shape svgElement attr: 'width'),(String cr).\x0a\x09view signalUpdate.].\x0a\x09\x0a\x09view add: tux.\x0a\x0aview open",
messageSends: ["on:", "element", "new", "add:", "@", "on:do:", "show:", ",", "attr:", "svgElement", "shape", "asString", "width", "scale:", "cr", "signalUpdate", "open"],
referencedClasses: ["ROLabel", "ROView", "RODraggable", "ROTux", "ROMouseClick", "Transcript", "String"]
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
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
function $ROPath(){return smalltalk.ROPath||(typeof ROPath=="undefined"?nil:ROPath)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROHighlight(){return smalltalk.ROHighlight||(typeof ROHighlight=="undefined"?nil:ROHighlight)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._addAll_(_st(_st($ROSVGPath())._world())._collect_((function(country){
var el;
return smalltalk.withContext(function($ctx2) {
el=_st(_st($ROPath())._path_(_st($ROSVGPath())._perform_(country)))._elementOn_(country);
el;
_st(el).__at(_st($ROHighlight())._color_(_st($Color())._brown()));
return _st(el).__at($ROPopup());
}, function($ctx2) {$ctx2.fillBlock({country:country,el:el},$ctx1)})})));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"theWorld",{view:view,color:color},smalltalk.ROExample)})},
args: [],
source: "theWorld\x0a\x0a\x09|view color|\x0a\x09view := ROView new.\x0a\x09\x0a\x09view addAll: ((ROSVGPath world) collect: [:country |\x0a\x09\x09|el|\x0a\x09\x09el := (ROPath path: (ROSVGPath perform: country)) \x0a\x09\x09\x09\x09\x09elementOn: country.\x0a\x09\x09el @ (ROHighlight color: Color brown).\x0a\x09\x09el @ ROPopup.\x0a\x09]).\x0a\x09\x0a\x09view open.",
messageSends: ["new", "addAll:", "collect:", "elementOn:", "path:", "perform:", "@", "color:", "brown", "world", "open"],
referencedClasses: ["ROView", "ROSVGPath", "ROPath", "Color", "ROHighlight", "ROPopup"]
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
view=_st($ROView())._new();
elements=_st($ROElement())._spritesOn_((1)._to_((5)));
_st(elements)._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._addInteraction_($RODraggable());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st(view)._addAll_(elements);
edges=_st($ROEdge())._linesFor_([_st(_st(elements)._at_((1))).__minus_gt(_st(elements)._at_((2))),_st(_st(elements)._at_((2))).__minus_gt(_st(elements)._at_((5))),_st(_st(elements)._at_((2))).__minus_gt(_st(elements)._at_((3)))]);
_st(view)._addAll_(edges);
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
var $1,$2;
elements=_st($ROElement())._forCollection_((1)._to_((20)));
_st(elements)._do_((function(n){
return smalltalk.withContext(function($ctx2) {
$1=n;
_st($1)._extent_((50).__at((50)));
$2=_st($1)._addShape_(_st($ROBox())._new());
return $2;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
view=_st($ROView())._new();
_st(view)._addAll_(elements);
_st(_st(elements)._allButFirst())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(_st($ROEdge())._lineFrom_to_(_st(elements)._first(),e));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st($ROTreeLayout())._on_(elements);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"treeLayout2",{view:view,elements:elements},smalltalk.ROExample)})},
args: [],
source: "treeLayout2\x0a\x09\x22\x0a\x09self new treeLayout\x0a\x09\x22\x0a\x09\x0a\x09| view elements |\x0a\x09elements := ROElement forCollection: (1 to: 20).\x0a\x09elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].\x0a\x09view := ROView new.\x0a\x09view addAll: elements.\x0a\x09elements allButFirst do: [:e | \x0a\x09 \x09view add: (ROEdge lineFrom: elements first to: e) ].\x0a\x0a\x09ROTreeLayout on: elements.\x0a\x09view open.",
messageSends: ["forCollection:", "to:", "do:", "extent:", "@", "addShape:", "new", "addAll:", "add:", "lineFrom:to:", "first", "allButFirst", "on:", "open"],
referencedClasses: ["ROElement", "ROBox", "ROView", "ROEdge", "ROTreeLayout"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "tux",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st((smalltalk.ROTux || ROTux))._element());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"tux",{view:view},smalltalk.ROExample)});},
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
var $1,$2,$3,$4,$5,$6;
builder=_st($ROMapBuilder())._new();
_st(builder)._countries_(["Canada", "UnitedStates", "France", "Chile", "Colombia"]);
$1=_st(_st(builder)._shape())._circle();
_st($1)._size_((8));
$2=_st($1)._color_(_st(_st($Color())._red())._alpha_((0.5)));
_st(builder)._cities_(["New York City", "Washington, D.C.", "Paris", "Bordeaux", "Santiago", "Bogota"]);
$3=_st(_st(builder)._shape())._circle();
_st($3)._size_((20));
$4=_st($3)._color_(_st(_st($Color())._red())._alpha_((0.5)));
_st(builder)._city_position_("Vancouver",(49.25).__at((-123.133333)));
$5=_st(_st(builder)._shape())._line();
_st($5)._width_((3));
$6=_st($5)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(builder)._edgesFrom_toAll_("Paris",["New York City", "Washington, D.C.", "Santiago", "Bogota", "Vancouver"]);
_st(builder)._open();
return self}, function($ctx1) {$ctx1.fill(self,"worldConnections",{builder:builder},smalltalk.ROExample)})},
args: [],
source: "worldConnections\x0a\x09| builder |\x0a\x09builder := ROMapBuilder new.\x0a\x09builder countries: #('Canada' 'UnitedStates' 'France' 'Chile' 'Colombia').\x0a\x0a\x09builder shape circle size: 8; color: (Color red alpha: 0.5).\x0a\x0a\x09builder cities: #('New York City' 'Washington, D.C.' 'Paris' 'Bordeaux' 'Santiago' 'Bogota').\x0a\x0a\x09builder shape circle size: 20; color: (Color red alpha: 0.5).\x0a\x0a\x09builder city: 'Vancouver' position: 49.25 @ -123.133333.\x0a\x09\x0a\x09builder shape line width: 3; color: (Color blue alpha: 0.5).\x0a\x09builder edgesFrom: 'Paris' toAll: #('New York City' 'Washington, D.C.' 'Santiago' 'Bogota' 'Vancouver').\x0a\x0a\x09builder open ",
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
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})})))._collect_((function(mtd){
return smalltalk.withContext(function($ctx2) {
return _st(mtd)._selector();
}, function($ctx2) {$ctx2.fillBlock({mtd:mtd},$ctx1)})})))._do_((function(selector){
return smalltalk.withContext(function($ctx2) {
li=_st(html)._li();
li;
a=_st(html)._a();
a;
_st(a)._href_("#");
_st(a)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._show_(selector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(a)._with_(selector);
_st(li)._append_(a);
return _st(ul)._append_(li);
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,ul:ul,li:li,a:a},smalltalk.ROExampleSelector)})},
args: ["html"],
source: "renderOn: html\x0a\x09| ul li a |\x0a\x09ul := html ul.\x0a\x09ul class: 'dropdown-menu'.\x0a\x09\x0a\x09((ROExample methodDictionary values select: [:m | m category = 'demo']) collect: [:mtd | mtd selector])  do: [:selector |\x0a\x0a\x09\x09li := html li.\x0a\x09\x09a := html a.\x0a\x09\x09a href: '#'.\x0a\x09\x09a onClick: [self show: selector].\x0a\x09\x09a with: selector.\x0a\x09\x09li append: a.\x0a\x09\x09ul append: li.\x0a\x09].\x0a\x0a\x09",
messageSends: ["ul", "class:", "do:", "li", "a", "href:", "onClick:", "show:", "with:", "append:", "collect:", "selector", "select:", "=", "category", "values", "methodDictionary"],
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
var $1;
sourceCodeLines=_st(_st(method)._source())._lines();
_st(sourceCodeLines)._removeFirst();
$1=_st(_st(sourceCodeLines)._reject_((function(line){
return smalltalk.withContext(function($ctx2) {
return _st(_st(line).__eq(_st($String())._cr()))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(line).__eq(" "))._or_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(line).__eq("");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1)})})))._inject_into_("",(function(sourceCode,line){
return smalltalk.withContext(function($ctx2) {
return _st(_st(sourceCode).__comma(_st($String())._cr())).__comma(line);
}, function($ctx2) {$ctx2.fillBlock({sourceCode:sourceCode,line:line},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceCodeWithoutMethodnameOf:",{method:method,sourceCodeLines:sourceCodeLines},smalltalk.ROExampleSelector)})},
args: ["method"],
source: "sourceCodeWithoutMethodnameOf: method\x0a\x09| sourceCodeLines |\x0a\x09sourceCodeLines := method source lines.\x0a\x09sourceCodeLines removeFirst.\x0a\x09\x22 Remove newlines, empty and one-space lines\x22\x0a\x09^ (sourceCodeLines reject: [:line | line = (String cr) \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09or: [ line = ' ' \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09or: [ line = '' ]]])\x0a\x09\x22then join them into one string and return\x22\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09inject: '' into: [:sourceCode :line | sourceCode,(String cr),line ] \x0a\x0a\x0a\x09",
messageSends: ["lines", "source", "removeFirst", "inject:into:", ",", "cr", "reject:", "or:", "="],
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
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($RODemo())._current())._writeExample_(self._sourceCodeWithoutMethodnameOf_(_st($ROExample()).__gt_gt(selector)));
return self}, function($ctx1) {$ctx1.fill(self,"updateTextArea:",{selector:selector},smalltalk.ROExampleSelector)})},
args: ["selector"],
source: "updateTextArea: selector\x0a\x09\x22put the code into #roassal-text textarea\x22\x0a\x09RODemo current writeExample:  (self sourceCodeWithoutMethodnameOf: (ROExample>>selector)\x09).",
messageSends: ["writeExample:", "sourceCodeWithoutMethodnameOf:", ">>", "current"],
referencedClasses: ["ROExample", "RODemo"]
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
messageSends: ["appendToJQuery:", "asJQuery", "new", "yourself"],
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
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
if(($receiver = $2) == nil || $receiver == undefined){
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
messageSends: ["appendToJQuery:", "asJQuery", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROWorkspace.klass);


