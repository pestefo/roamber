smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Object, ['workspace', 'selector'], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
function $ROExampleSelector(){return smalltalk.ROExampleSelector||(typeof ROExampleSelector=="undefined"?nil:ROExampleSelector)}
function $ROWorkspace(){return smalltalk.ROWorkspace||(typeof ROWorkspace=="undefined"?nil:ROWorkspace)}
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=_st($ROExampleSelector())._init();
self["@workspace"]=_st($ROWorkspace())._init();
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo)})},
messageSends: ["init"]}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "writeExample:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._clear();
_st(self["@workspace"])._val_(aString);
_st(self["@workspace"])._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"writeExample:",{aString:aString},smalltalk.RODemo)})},
messageSends: ["clear", "val:", "doIt"]}),
smalltalk.RODemo);


smalltalk.RODemo.klass.iVarNames = ['demo'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.RODemo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._init();
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo.klass)})},
messageSends: ["init", "current"]}),
smalltalk.RODemo.klass);


smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "boxGenerator",
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
messageSends: ["new", "color:", "green", "element", "add:", "on:do:", "size:", "size", "elements", "on:", "signalUpdate", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "cellLayout",
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
messageSends: ["new", "clear", "to:do:", "add:", "@", "elementOn:", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
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
messageSends: ["new", "add:", "color:", "green", "@", "translateTo:", "element", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionHierarchy",
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
messageSends: ["new", "forCollection:", "withAllSubclasses", "do:", "numberOfVariables", "model", "width:", "ifTrue:ifFalse:", "*", "=", "shape", "numberOfMethods", "height:", "@", "+", "addAll:", "collect:thenSelect:", "ifFalse:", "->", "elementFromModel:", "superclass", "not", "isNil", "linesFor:", "on:edges:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "create",
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROElement || ROElement))._new())._shape_(_st((smalltalk.ROBox || ROBox))._new()));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"create",{view:view},smalltalk.ROExample)});},
messageSends: ["new", "add:", "shape:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "drag",
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
messageSends: ["new", "translateTo:", "@", "element", "add:", "do:", "addInteraction:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "exampleImage",
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
messageSends: ["new", "add:", "@", "elementOn:", "url:", "size:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "exampleImage2",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"exampleImage2",{},smalltalk.ROExample)})},
messageSends: []}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "greenAndRedNumbers",
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
messageSends: ["collect:", "-", "atRandom", "to:", "new", "models:", "verticalBarDiagram", "height:", "color:", "ifTrue:ifFalse:", "red", "green", "<", "regularAxis", "translateBy:", "@", "rawView", "popUpText:", ",", "asString", ">", "interaction", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout",
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
messageSends: ["new", "clear", "timesRepeat:", "add:", "shape:", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLayout2",
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
messageSends: ["new", "clear", "to:do:", "add:", "shape:", "height:", "*", "model", "width:", "model:", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalLineLayout",
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
messageSends: ["new", "clear", "wheel:to:", "green", "red", "do:", "add:", "@", "color:", "element", "on:", "elements", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "hover",
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
messageSends: ["new", "size:", "+", "on:do:", "color:", "red", "element", "signalUpdate", "view", "blue", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
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
messageSends: ["new", "size:", "+", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
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
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "line2",
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
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseclick",
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
messageSends: ["new", "size:", "+", "on:do:", "hide", "element", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseclick2",
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
messageSends: ["new", "size:", "+", "on:do:", "hide", "element", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseclick3",
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
messageSends: ["new", "size:", "+", "on:do:", "show:", ",", "cr", "add:", "on:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "pib",
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
messageSends: ["new", "lightBlue", "view:", "allCountries", "sorted:", "<", "second", "pib", "rawView:", "models:", "copyFrom:to:", "verticalBarDiagram", "y:", "color:", "regularAxisAsInteger", "barWidth:", "titleLabel:", "on:do:", "elementFromModel:", "asSymbol", "first", "model", "element", "popUpText", "interaction", "white", "openIn:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "popup",
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
messageSends: ["new", "first", "forCollection:", "withAllSubclasses", "+", "@", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "popupAndDrag",
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
messageSends: ["new", "size:", "+", "@", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "punchcard",
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
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "*", "/", "minColor:", "green", "maxColor:", "red", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
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
messageSends: ["@", "element", "url:", "new", "addAll:", "on:", "elements", "on:do:", "do:", "scale:", "at:", "indexOf:", "shape", "signalUpdate", "add:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleLabel",
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
messageSends: ["on:", "element", "new", "add:", "@", "on:do:", "show:", ",", "attr:", "svgElement", "shape", "asString", "width", "scale:", "cr", "signalUpdate", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "theWorld",
fn: function (){
var self=this;
var view,color;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROSVGPath(){return smalltalk.ROSVGPath||(typeof ROSVGPath=="undefined"?nil:ROSVGPath)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROHighlight(){return smalltalk.ROHighlight||(typeof ROHighlight=="undefined"?nil:ROHighlight)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
_st(view)._addAll_(_st(_st($ROSVGPath())._world())._collect_((function(country){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROSVGPath())._path_(_st($ROSVGPath())._perform_(country)))._elementOn_(country);
}, function($ctx2) {$ctx2.fillBlock({country:country},$ctx1)})})));
color=_st($Color())._r_g_b_((0.746),(0.652),(0.188));
_st(view)._elementsDo_((function(e){
return smalltalk.withContext(function($ctx2) {
_st(e).__at(_st($ROHighlight())._color_(color));
return _st(e).__at($ROPopup());
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"theWorld",{view:view,color:color},smalltalk.ROExample)})},
messageSends: ["new", "addAll:", "collect:", "elementOn:", "path:", "perform:", "world", "r:g:b:", "elementsDo:", "@", "color:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "treeLayout",
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
messageSends: ["new", "spritesOn:", "to:", "do:", "addInteraction:", "addAll:", "linesFor:", "->", "at:", "on:edges:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "treeLayout2",
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
messageSends: ["forCollection:", "to:", "do:", "extent:", "@", "addShape:", "new", "addAll:", "add:", "lineFrom:to:", "first", "allButFirst", "on:", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "tux",
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st((smalltalk.ROTux || ROTux))._element());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"tux",{view:view},smalltalk.ROExample)});},
messageSends: ["new", "add:", "element", "open"]}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "worldConnections",
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
messageSends: ["new", "countries:", "size:", "circle", "shape", "color:", "alpha:", "red", "cities:", "city:position:", "@", "width:", "line", "blue", "edgesFrom:toAll:", "open"]}),
smalltalk.ROExample);



smalltalk.addClass('ROExampleSelector', smalltalk.Widget, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["ul", "class:", "do:", "li", "a", "href:", "onClick:", "show:", "with:", "append:", "collect:", "selector", "select:", "=", "category", "values", "methodDictionary"]}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateTextArea_(selector);
self._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector},smalltalk.ROExampleSelector)})},
messageSends: ["updateTextArea:", "updateCanvas:"]}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodeWithoutMethodnameOf:",
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
messageSends: ["lines", "source", "removeFirst", "inject:into:", ",", "cr", "reject:", "or:", "="]}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas:",
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROExample())._new())._perform_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.ROExampleSelector)})},
messageSends: ["perform:", "new"]}),
smalltalk.ROExampleSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTextArea:",
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($RODemo())._current())._writeExample_(self._sourceCodeWithoutMethodnameOf_(_st($ROExample()).__gt_gt(selector)));
return self}, function($ctx1) {$ctx1.fill(self,"updateTextArea:",{selector:selector},smalltalk.ROExampleSelector)})},
messageSends: ["writeExample:", "sourceCodeWithoutMethodnameOf:", ">>", "current"]}),
smalltalk.ROExampleSelector);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
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
messageSends: ["appendToJQuery:", "asJQuery", "new", "yourself"]}),
smalltalk.ROExampleSelector.klass);


smalltalk.addClass('ROWorkspace', smalltalk.Widget, ['workspace'], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._clear();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROWorkspace)})},
messageSends: ["clear"]}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "doIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._doIt();
return self}, function($ctx1) {$ctx1.fill(self,"doIt",{},smalltalk.ROWorkspace)})},
messageSends: ["doIt"]}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
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
messageSends: ["with:", "a", "class:", "title:", "onClick:", "doIt", "workspace"]}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "div", "with:", "renderButtonsOn:", "renderOn:", "workspace"]}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "val:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@workspace"])._val_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"val:",{aString:aString},smalltalk.ROWorkspace)})},
messageSends: ["val:"]}),
smalltalk.ROWorkspace);

smalltalk.addMethod(
smalltalk.method({
selector: "workspace",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.ROWorkspace);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
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
messageSends: ["appendToJQuery:", "asJQuery", "new", "yourself"]}),
smalltalk.ROWorkspace.klass);


