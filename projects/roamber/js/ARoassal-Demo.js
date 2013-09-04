smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Widget, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
var selectorList,ul,li,a;
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
ul=_st(html)._ul();
_st(ul)._class_("dropdown-menu");
_st(_st($ROExample())._selectors())._do_((function(selector){
return smalltalk.withContext(function($ctx2) {
li=_st(html)._li();
li;
a=_st(html)._a();
a;
_st(a)._href_("#");
_st(a)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($RODemo())._new())._show_(selector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(a)._with_(selector);
_st(li)._append_(a);
return _st(ul)._append_(li);
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,selectorList:selectorList,ul:ul,li:li,a:a},smalltalk.RODemo)})},
args: ["html"],
source: "renderOn: html\x0a\x09| selectorList ul li a |\x0a\x09ul := html ul.\x0a\x09ul class: 'dropdown-menu'.\x0a\x09\x0a\x09ROExample selectors do: [:selector |\x0a\x0a\x09\x09li := html li.\x0a\x09\x09a := html a.\x0a\x09\x09a href: '#'.\x0a\x09\x09a onClick: [RODemo new show: selector].\x0a\x09\x09a with: selector.\x0a\x09\x09li append: a.\x0a\x09\x09ul append: li.\x0a\x09].\x0a\x0a\x09",
messageSends: ["ul", "class:", "do:", "li", "a", "href:", "onClick:", "show:", "new", "with:", "append:", "selectors"],
referencedClasses: ["RODemo", "ROExample"]
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'not yet classified',
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateTextArea_(selector);
self._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "show: selector\x0a\x09self updateTextArea: selector.\x0a\x09self updateCanvas: selector.",
messageSends: ["updateTextArea:", "updateCanvas:"],
referencedClasses: []
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas:",
category: 'not yet classified',
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROExample())._new())._perform_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "updateCanvas: selector\x0a\x09\x22execute 'ROExample new selector' command\x22\x0a\x09ROExample new perform:selector.",
messageSends: ["perform:", "new"],
referencedClasses: ["ROExample"]
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTextArea:",
category: 'not yet classified',
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st("#roassal-text"._asJQuery())._html_(_st(_st($ROExample()).__gt_gt(selector))._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateTextArea:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "updateTextArea: selector\x0a\x09\x22put the code into #roassal-text textarea\x22\x0a\x09('#roassal-text' asJQuery) html: ((ROExample>>selector) source).",
messageSends: ["html:", "source", ">>", "asJQuery"],
referencedClasses: ["ROExample"]
}),
smalltalk.RODemo);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("#selectorList"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo.klass)})},
args: [],
source: "init\x0a\x09self new appendToJQuery: '#selectorList' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.RODemo.klass);


smalltalk.addClass('ROExample', smalltalk.ROObject, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "circle",
category: 'not yet classified',
fn: function () {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { view=_st((smalltalk.ROView || ROView))._new();
_st(view)._add_(_st(_st((smalltalk.ROCircle || ROCircle))._element())._translateTo_(_st((50)).__at((50))));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle",{view:view},smalltalk.ROExample)});},
args: [],
source: "circle\x0a\x09| view |\x0a\x09view := ROView new.\x0a\x09view add: (ROCircle element translateTo: 50 @ 50).\x0a\x09view open.",
messageSends: ["new", "add:", "translateTo:", "@", "element", "open"],
referencedClasses: ["ROView", "ROCircle"]
}),
smalltalk.ROExample);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionHierarchy",
category: 'not yet classified',
fn: function (){
var self=this;
var view,classElements,edges,associations;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $RODraggable(){return smalltalk.RODraggable||(typeof RODraggable=="undefined"?nil:RODraggable)}
function $Object(){return smalltalk.Object||(typeof Object=="undefined"?nil:Object)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4;
view=_st($ROView())._new();
classElements=_st($ROElement())._forCollection_(_st($Collection())._withAllSubclasses());
_st(classElements)._do_((function(c){
var instVar;
return smalltalk.withContext(function($ctx2) {
instVar=_st(_st(_st(c)._model())._instVarNames())._size();
instVar;
$1=_st(c)._shape();
$3=_st(instVar).__eq((0));
if(smalltalk.assert($3)){
$2=(10);
} else {
$2=_st(instVar).__star((15));
};
_st($1)._width_($2);
_st(_st(c)._shape())._height_(_st(_st(_st(c)._model())._allSelectors())._size());
_st(c).__plus($ROBox());
return _st(c).__at($RODraggable());
}, function($ctx2) {$ctx2.fillBlock({c:c,instVar:instVar},$ctx1)})}));
_st(view)._addAll_(classElements);
associations=_st(classElements)._collect_thenSelect_((function(c){
return smalltalk.withContext(function($ctx2) {
$4=_st(_st(_st(c)._model())._superclass()).__eq($Object());
if(! smalltalk.assert($4)){
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
source: "collectionHierarchy\x0a|view classElements edges associations|\x0aview := ROView new.\x0aclassElements := ROElement forCollection: Collection withAllSubclasses.\x0aclassElements\x0a\x09do: [:c | | instVar |\x0a\x09\x09instVar := c model instVarNames size.\x0a\x09\x09c shape width: (( instVar = 0) ifTrue: [ 10 ] ifFalse: [ instVar * 15]) .\x0a\x22\x09\x09c shape height: c model methods size.\x22\x0a\x09\x09c shape height: c model allSelectors size.\x09\x0a\x09\x09c + ROBox.\x0a\x09\x09c @ RODraggable ].\x0a\x09\x09view addAll: classElements.\x0aassociations := classElements collect: [:c |\x0a\x09\x09\x09(c model superclass = Object)\x0a\x09\x09\x09ifFalse: [ (view elementFromModel: c\x0a\x09\x09\x09\x09model superclass) -> c]\x0a\x09\x09\x09] thenSelect: [:assoc | assoc isNil not ].\x0aedges := ROEdge linesFor: associations.\x0aview addAll: edges.\x0aROTreeLayout on: (view elements) edges: edges.\x0a\x22ROTreeLayout new on: view elements.\x22\x0a\x0aview open.",
messageSends: ["new", "forCollection:", "withAllSubclasses", "do:", "size", "instVarNames", "model", "width:", "ifTrue:ifFalse:", "*", "=", "shape", "height:", "allSelectors", "+", "@", "addAll:", "collect:thenSelect:", "ifFalse:", "->", "elementFromModel:", "superclass", "not", "isNil", "linesFor:", "on:edges:", "elements", "open"],
referencedClasses: ["ROView", "Collection", "ROElement", "ROBox", "RODraggable", "Object", "ROEdge", "ROTreeLayout"]
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
function $ROCircle(){return smalltalk.ROCircle||(typeof ROCircle=="undefined"?nil:ROCircle)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROLineShape(){return smalltalk.ROLineShape||(typeof ROLineShape=="undefined"?nil:ROLineShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($ROView())._new();
el1=_st($ROCircle())._element();
el2=_st($ROCircle())._element();
_st(el1)._translateTo_((20).__at((30)));
_st(el2)._translateTo_((300).__at((100)));
edge=_st($ROLine())._edgeFrom_to_(el1,el2);
el3=_st($ROBox())._element();
el4=_st($ROBox())._element();
_st(el3)._translateTo_((150).__at((20)));
_st(el4)._translateTo_((150).__at((300)));
edge2=_st($ROLineShape())._edgeFrom_to_(el3,el4);
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
source: "line2\x0a\x0a\x09| view el1 el2 edge el3 el4 edge2 |\x0a\x09view := ROView new.\x0a\x0a\x09el1 := ROCircle element.\x0a\x09el2 := ROCircle element.\x0a\x09\x0a\x09el1 translateTo: 20 @ 30.\x0a\x09el2 translateTo: 300 @ 100.\x0a\x09\x0a\x09edge := ROLine edgeFrom: el1 to: el2.\x0a\x09\x0a\x09el3 := ROBox element.\x0a\x09el4 := ROBox element.\x0a\x09\x0a\x09el3 translateTo: 150 @ 20.\x0a\x09el4 translateTo: 150 @ 300.\x0a\x09\x0a\x09edge2 := ROLineShape edgeFrom: el3 to: el4.\x0a\x0a\x09view add: el1; add: el2; add: edge; add: el3; add: el4; add: edge2.\x0a\x09\x0a\x09view open.",
messageSends: ["new", "element", "translateTo:", "@", "edgeFrom:to:", "add:", "open"],
referencedClasses: ["ROView", "ROCircle", "ROLine", "ROBox", "ROLineShape"]
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
return _st(_st(_st(_st(event)._element())._shape())._svgElement())._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"mouseclick",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "mouseclick\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseClick do: [ :event | event element shape svgElement hide].\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "hide", "svgElement", "shape", "element", "add:", "open"],
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
return _st(_st(_st(_st(event)._element())._shape())._svgElement())._hide();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"mouseclick2",{view:view,element:element},smalltalk.ROExample)})},
args: [],
source: "mouseclick2\x0a|view element|\x0aview := ROView new.\x0aelement := ROElement new size: 100.\x0aelement + ROBox.\x0a\x22Open an inspector when clicking\x22\x0aelement on: ROMouseLeftClick do: [ :event | event element shape svgElement hide].\x0aview add: element.\x0aview open.",
messageSends: ["new", "size:", "+", "on:do:", "hide", "svgElement", "shape", "element", "add:", "open"],
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



