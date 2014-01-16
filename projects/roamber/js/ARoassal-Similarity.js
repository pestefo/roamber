define("roamber/ARoassal-Similarity", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-Similarity');
smalltalk.packages["ARoassal-Similarity"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('Comparison', smalltalk.Object, ['lhs', 'rhs', 'similarity'], 'ARoassal-Similarity');
smalltalk.Comparison.comment="A Comparison bundles two entities to be compared in a SimilarityMatrix.";
smalltalk.addMethod(
smalltalk.method({
selector: "lhs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lhs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lhs",{},smalltalk.Comparison)})},
args: [],
source: "lhs\x0a\x09^ lhs",
messageSends: [],
referencedClasses: []
}),
smalltalk.Comparison);

smalltalk.addMethod(
smalltalk.method({
selector: "of:with:by:",
category: 'initialize-release',
fn: function (anObject,anotherObject,similarityBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self["@lhs"]=anObject;
self["@rhs"]=anotherObject;
self["@similarity"]=_st(similarityBlock)._value_value_(self["@lhs"],self["@rhs"]);
$2=(0).__lt_eq(self["@similarity"]);
$ctx1.sendIdx["<="]=1;
$1=_st($2).__and(_st(self["@similarity"]).__lt_eq((1)));
self._assert_descriptionBlock_($1,(function(){
return smalltalk.withContext(function($ctx2) {
return "Expected similarity in range [0,1], got ".__comma(_st(self["@similarity"])._printString());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"of:with:by:",{anObject:anObject,anotherObject:anotherObject,similarityBlock:similarityBlock},smalltalk.Comparison)})},
args: ["anObject", "anotherObject", "similarityBlock"],
source: "of: anObject with: anotherObject by: similarityBlock\x0a\x09\x22similarityBlock should take two arguments and return a float in the range [0,1]\x22\x0a\x09lhs := anObject.\x0a\x09rhs := anotherObject.\x0a\x09similarity := similarityBlock value: lhs value: rhs.\x0a\x09self\x0a\x09\x09assert: ((0 <= similarity) & (similarity <= 1))\x0a\x09\x09descriptionBlock: ['Expected similarity in range [0,1], got ', similarity printString]",
messageSends: ["value:value:", "assert:descriptionBlock:", "&", "<=", ",", "printString"],
referencedClasses: []
}),
smalltalk.Comparison);

smalltalk.addMethod(
smalltalk.method({
selector: "rhs",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rhs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rhs",{},smalltalk.Comparison)})},
args: [],
source: "rhs\x0a\x09^ rhs",
messageSends: [],
referencedClasses: []
}),
smalltalk.Comparison);

smalltalk.addMethod(
smalltalk.method({
selector: "similarity",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@similarity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"similarity",{},smalltalk.Comparison)})},
args: [],
source: "similarity\x0a\x09^ similarity",
messageSends: [],
referencedClasses: []
}),
smalltalk.Comparison);


smalltalk.addMethod(
smalltalk.method({
selector: "of:with:by:",
category: 'as yet unclassified',
fn: function (anObject,anotherObject,similarityBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._of_with_by_(anObject,anotherObject,similarityBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"of:with:by:",{anObject:anObject,anotherObject:anotherObject,similarityBlock:similarityBlock},smalltalk.Comparison.klass)})},
args: ["anObject", "anotherObject", "similarityBlock"],
source: "of: anObject with: anotherObject by: similarityBlock\x0a\x09^ self new of: anObject with: anotherObject by: similarityBlock",
messageSends: ["of:with:by:", "new"],
referencedClasses: []
}),
smalltalk.Comparison.klass);


smalltalk.addClass('SimilarityMatrix', smalltalk.Object, ['elements', 'pairs', 'action'], 'ARoassal-Similarity');
smalltalk.SimilarityMatrix.comment="A TSOverview is a visualization of similarity between test methods as measured by TestSurgeon.\x0a\x0a\x09TSOverview demo";
smalltalk.addMethod(
smalltalk.method({
selector: "action:",
category: 'interactions',
fn: function (aComparison){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@action"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self["@action"])._value_value_(_st(aComparison)._lhs(),_st(aComparison)._rhs());
};
return self}, function($ctx1) {$ctx1.fill(self,"action:",{aComparison:aComparison},smalltalk.SimilarityMatrix)})},
args: ["aComparison"],
source: "action: aComparison\x0a\x09action\x0a\x09\x09ifNotNil: [ action value: aComparison lhs value: aComparison rhs ]",
messageSends: ["ifNotNil:", "value:value:", "lhs", "rhs"],
referencedClasses: []
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "colorForElement:",
category: 'visualization',
fn: function (elt){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._gray_((1).__minus(_st(_st(elt)._model())._similarity()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorForElement:",{elt:elt},smalltalk.SimilarityMatrix)})},
args: ["elt"],
source: "colorForElement: elt\x0a\x09^ Color gray: (1 - elt model similarity)",
messageSends: ["gray:", "-", "similarity", "model"],
referencedClasses: ["Color"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultExtent",
category: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(10).__at((10));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultExtent",{},smalltalk.SimilarityMatrix)})},
args: [],
source: "defaultExtent\x0a\x09^ 10@10",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:forView:",
category: 'visualization',
fn: function (pair,view){
var self=this;
var elt;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5;
elt=_st($ROElement())._on_(pair);
$1=elt;
$3=_st($ROBox())._new();
$ctx1.sendIdx["new"]=1;
_st($3)._color_(self._colorForElement_(elt));
$4=_st($3)._extent_(self._defaultExtent());
$2=$4;
_st($1).__plus($2);
_st(elt).__at(_st(_st($ROPopup())._new())._text_((function(){
return smalltalk.withContext(function($ctx2) {
return self._popupTextFor_(elt);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})));
_st(elt)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._action_(pair);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
_st(elt)._forward_($ROMouseDragging());
$5=elt;
return $5;
}, function($ctx1) {$ctx1.fill(self,"elementOn:forView:",{pair:pair,view:view,elt:elt},smalltalk.SimilarityMatrix)})},
args: ["pair", "view"],
source: "elementOn: pair forView: view\x0a\x09| elt |\x0a\x09elt := (ROElement on: pair ).\x0a\x09elt + (ROBox new\x0a\x09\x09color: (self colorForElement: elt);\x0a\x09\x09extent: self defaultExtent\x0a\x09).\x0a\x09elt @ (ROPopup new\x0a\x09\x09\x09text: [self popupTextFor: elt]).\x0a\x09elt on: ROMouseClick do: [:event | self action: pair ].\x0a\x09elt forward: ROMouseDragging.\x0a\x09^ elt",
messageSends: ["on:", "+", "color:", "new", "colorForElement:", "extent:", "defaultExtent", "@", "text:", "popupTextFor:", "on:do:", "action:", "forward:"],
referencedClasses: ["ROElement", "ROBox", "ROPopup", "ROMouseClick", "ROMouseDragging"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:forView:andStack:",
category: 'visualization',
fn: function (pair,view,stack){
var self=this;
var elt;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROMouseDragging(){return smalltalk.ROMouseDragging||(typeof ROMouseDragging=="undefined"?nil:ROMouseDragging)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6,$7;
elt=_st($ROElement())._on_(pair);
$1=elt;
$3=_st($ROBox())._new();
$ctx1.sendIdx["new"]=1;
_st($3)._color_(self._colorForElement_(elt));
$4=_st($3)._extent_(self._defaultExtent());
$2=$4;
_st($1).__plus($2);
$5=_st($ROPopup())._new();
_st($5)._text_((function(){
return smalltalk.withContext(function($ctx2) {
return self._popupTextFor_(elt);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$6=_st($5)._receivingView_(stack);
_st(elt).__at($6);
_st(elt)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._action_(pair);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)})}));
_st(elt)._forward_($ROMouseDragging());
$7=elt;
return $7;
}, function($ctx1) {$ctx1.fill(self,"elementOn:forView:andStack:",{pair:pair,view:view,stack:stack,elt:elt},smalltalk.SimilarityMatrix)})},
args: ["pair", "view", "stack"],
source: "elementOn: pair forView: view andStack: stack\x0a\x09| elt |\x0a\x09elt := (ROElement on: pair ).\x0a\x09elt + (ROBox new\x0a\x09\x09color: (self colorForElement: elt);\x0a\x09\x09extent: self defaultExtent\x0a\x09).\x0a\x09elt @ (ROPopup new\x0a\x09\x09\x09text: [self popupTextFor: elt];\x0a\x09\x09\x09receivingView: stack\x0a\x09\x09\x09).\x0a\x09elt on: ROMouseClick do: [:event | self action: pair ].\x0a\x09elt forward: ROMouseDragging.\x0a\x09^ elt",
messageSends: ["on:", "+", "color:", "new", "colorForElement:", "extent:", "defaultExtent", "@", "text:", "popupTextFor:", "receivingView:", "on:do:", "action:", "forward:"],
referencedClasses: ["ROElement", "ROBox", "ROPopup", "ROMouseClick", "ROMouseDragging"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "gridSize",
category: 'visualization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gridSize",{},smalltalk.SimilarityMatrix)})},
args: [],
source: "gridSize\x0a\x09^ elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "on:by:",
category: 'initialize-release',
fn: function (aCollection,similarity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_by_withAction_(aCollection,similarity,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:by:",{aCollection:aCollection,similarity:similarity},smalltalk.SimilarityMatrix)})},
args: ["aCollection", "similarity"],
source: "on: aCollection by: similarity\x0a\x09^ self on: aCollection by: similarity withAction: nil",
messageSends: ["on:by:withAction:"],
referencedClasses: []
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "on:by:withAction:",
category: 'initialize-release',
fn: function (aCollection,similarity,aCallBack){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Comparison(){return smalltalk.Comparison||(typeof Comparison=="undefined"?nil:Comparison)}
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=aCollection;
self["@pairs"]=_st($OrderedCollection())._new();
self["@action"]=aCallBack;
_st(self["@elements"])._do_displayingProgress_((function(lhs){
return smalltalk.withContext(function($ctx2) {
return _st(self["@elements"])._do_((function(rhs){
var pair;
return smalltalk.withContext(function($ctx3) {
pair=_st($Comparison())._of_with_by_(lhs,rhs,similarity);
pair;
return _st(self["@pairs"])._add_(pair);
}, function($ctx3) {$ctx3.fillBlock({rhs:rhs,pair:pair},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({lhs:lhs},$ctx1,1)})}),"comparing elements ...");
return self}, function($ctx1) {$ctx1.fill(self,"on:by:withAction:",{aCollection:aCollection,similarity:similarity,aCallBack:aCallBack},smalltalk.SimilarityMatrix)})},
args: ["aCollection", "similarity", "aCallBack"],
source: "on: aCollection by: similarity withAction: aCallBack\x0a\x09\x22initialize model\x22\x0a\x09elements := aCollection.\x0a\x09pairs := OrderedCollection new.\x0a\x09action := aCallBack.\x0a\x09elements\x0a\x09\x09do: [ : lhs |\x0a\x09\x09\x09elements do: [ : rhs | | pair |\x0a\x09\x09\x09\x09pair := (Comparison of: lhs with: rhs by: similarity).\x0a\x09\x09\x09\x09pairs add: pair ] ]\x0a\x09\x09displayingProgress: 'comparing elements ...'.",
messageSends: ["new", "do:displayingProgress:", "do:", "of:with:by:", "add:"],
referencedClasses: ["OrderedCollection", "Comparison"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "popupTextFor:",
category: 'interactions',
fn: function (elt){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $8,$7,$6,$9,$5,$12,$11,$10,$4,$3,$2,$1;
$8=_st(elt)._model();
$ctx1.sendIdx["model"]=1;
$7=_st($8)._lhs();
$6=_st($7)._printString();
$ctx1.sendIdx["printString"]=1;
$9=_st($String())._lf();
$ctx1.sendIdx["lf"]=1;
$5=_st($6).__comma($9);
$12=_st(elt)._model();
$ctx1.sendIdx["model"]=2;
$11=_st($12)._rhs();
$10=_st($11)._printString();
$ctx1.sendIdx["printString"]=2;
$4=_st($5).__comma($10);
$ctx1.sendIdx[","]=4;
$3=_st($4).__comma(_st($String())._lf());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma("similarity = ");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(_st(_st(_st(elt)._model())._similarity())._printString());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"popupTextFor:",{elt:elt},smalltalk.SimilarityMatrix)})},
args: ["elt"],
source: "popupTextFor: elt\x0a\x09^ elt model lhs printString, String lf,\x0a\x09\x09elt model rhs printString, String lf,\x0a\x09\x09'similarity = ', elt model similarity printString",
messageSends: [",", "printString", "lhs", "model", "lf", "rhs", "similarity"],
referencedClasses: ["String"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'as yet unclassified',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.SimilarityMatrix.superclass.fn.prototype._printOn_.apply(_st(self), [aStream]);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.SimilarityMatrix)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22why can't I delete this method?\x22\x0a\x09super printOn: aStream",
messageSends: ["printOn:"],
referencedClasses: []
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "viewMatrix",
category: 'visualization',
fn: function (){
var self=this;
var view,zoomIn,zoomOut;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROGridLayout(){return smalltalk.ROGridLayout||(typeof ROGridLayout=="undefined"?nil:ROGridLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($ROView())._new();
$ctx1.sendIdx["new"]=1;
_st(view)._addAll_(_st(self["@pairs"])._collect_((function(pair){
return smalltalk.withContext(function($ctx2) {
return self._elementOn_forView_(pair,view);
}, function($ctx2) {$ctx2.fillBlock({pair:pair},$ctx1,1)})})));
$1=_st($ROGridLayout())._new();
_st($1)._gapSize_((0));
_st($1)._lineItemsCount_(self._gridSize());
$2=_st($1)._on_(_st(view)._elements());
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"viewMatrix",{view:view,zoomIn:zoomIn,zoomOut:zoomOut},smalltalk.SimilarityMatrix)})},
args: [],
source: "viewMatrix\x0a\x09\x22display the matrix view\x22\x0a\x09| view zoomIn zoomOut |\x0a\x09\x22stack := ROViewStack new.\x22\x0a\x09\x0a\x09view := ROView new.\x0a\x09view addAll:\x0a\x09\x09(pairs collect: [ : pair |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09elementOn: pair \x0a\x09\x09\x09\x09forView: view\x0a\x09\x09\x09\x09\x22andStack: stack\x22 ]).\x0a\x09ROGridLayout new \x0a\x09\x09gapSize: 0;\x0a\x09\x09lineItemsCount: self gridSize;\x0a\x09\x09on: view elements.\x0a\x09\x22view @ RODraggable.\x22\x0a\x0a\x09\x22stack addView: view.\x22\x0a\x09\x0a\x09\x22zoomIn := self zoomInButtonOn: view.\x0a\x09zoomOut := self zoomOutButtonOn: view.\x0a\x09stack addAll: { zoomIn . zoomOut }.\x0a\x09ROHorizontalLineLayout on: { zoomIn . zoomOut }.\x0a\x09view @ (ROMiniMap new targetView: stack).\x0a\x09stack open.\x22\x0a\x09\x0a\x09view open.",
messageSends: ["new", "addAll:", "collect:", "elementOn:forView:", "gapSize:", "lineItemsCount:", "gridSize", "on:", "elements", "open"],
referencedClasses: ["ROView", "ROGridLayout"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "zoomInButtonOn:",
category: 'visualization',
fn: function (view){
var self=this;
var zoomInButton;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROLightlyHighlightable(){return smalltalk.ROLightlyHighlightable||(typeof ROLightlyHighlightable=="undefined"?nil:ROLightlyHighlightable)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROZoomInMove(){return smalltalk.ROZoomInMove||(typeof ROZoomInMove=="undefined"?nil:ROZoomInMove)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st($ROElement())._on_("Zoom +");
$ctx1.sendIdx["on:"]=1;
$1=_st($2).__plus($ROLabel());
zoomInButton=_st($1).__plus($ROBorder());
$ctx1.sendIdx["+"]=1;
_st(zoomInButton).__at($ROLightlyHighlightable());
_st(zoomInButton)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROZoomInMove())._new())._on_(view);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$3=zoomInButton;
return $3;
}, function($ctx1) {$ctx1.fill(self,"zoomInButtonOn:",{view:view,zoomInButton:zoomInButton},smalltalk.SimilarityMatrix)})},
args: ["view"],
source: "zoomInButtonOn: view\x0a\x09| zoomInButton |\x0a\x09zoomInButton := (ROElement on: 'Zoom +') + ROLabel + ROBorder.\x0a\x09zoomInButton @ ROLightlyHighlightable.\x0a\x09zoomInButton on: ROMouseClick do: [ :event | ROZoomInMove new on: view ].\x0a\x09^ zoomInButton",
messageSends: ["+", "on:", "@", "on:do:", "new"],
referencedClasses: ["ROElement", "ROLabel", "ROBorder", "ROLightlyHighlightable", "ROMouseClick", "ROZoomInMove"]
}),
smalltalk.SimilarityMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "zoomOutButtonOn:",
category: 'visualization',
fn: function (view){
var self=this;
var zoomOutButton;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROBorder(){return smalltalk.ROBorder||(typeof ROBorder=="undefined"?nil:ROBorder)}
function $ROLightlyHighlightable(){return smalltalk.ROLightlyHighlightable||(typeof ROLightlyHighlightable=="undefined"?nil:ROLightlyHighlightable)}
function $ROMouseClick(){return smalltalk.ROMouseClick||(typeof ROMouseClick=="undefined"?nil:ROMouseClick)}
function $ROZoomOutMove(){return smalltalk.ROZoomOutMove||(typeof ROZoomOutMove=="undefined"?nil:ROZoomOutMove)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st($ROElement())._on_("Zoom -");
$ctx1.sendIdx["on:"]=1;
$1=_st($2).__plus($ROLabel());
zoomOutButton=_st($1).__plus($ROBorder());
$ctx1.sendIdx["+"]=1;
_st(zoomOutButton).__at($ROLightlyHighlightable());
_st(zoomOutButton)._on_do_($ROMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROZoomOutMove())._new())._on_(view);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
$3=zoomOutButton;
return $3;
}, function($ctx1) {$ctx1.fill(self,"zoomOutButtonOn:",{view:view,zoomOutButton:zoomOutButton},smalltalk.SimilarityMatrix)})},
args: ["view"],
source: "zoomOutButtonOn: view\x0a\x09| zoomOutButton |\x0a\x09zoomOutButton := (ROElement on: 'Zoom -') + ROLabel + ROBorder.\x0a\x09zoomOutButton @ ROLightlyHighlightable.\x0a\x09zoomOutButton on: ROMouseClick do: [ :event | ROZoomOutMove new on: view ].\x0a\x09^ zoomOutButton",
messageSends: ["+", "on:", "@", "on:do:", "new"],
referencedClasses: ["ROElement", "ROLabel", "ROBorder", "ROLightlyHighlightable", "ROMouseClick", "ROZoomOutMove"]
}),
smalltalk.SimilarityMatrix);


smalltalk.addMethod(
smalltalk.method({
selector: "demo1",
category: 'not yet classified',
fn: function (){
var self=this;
function $SimilarityMatrix(){return smalltalk.SimilarityMatrix||(typeof SimilarityMatrix=="undefined"?nil:SimilarityMatrix)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=_st($SimilarityMatrix())._new();
_st($2)._on_by_((1)._to_((10)),(function(a,b){
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(a).__plus(b))._odd();
if(smalltalk.assert($3)){
return (1);
} else {
return (0);
};
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})}));
$4=_st($2)._viewMatrix();
$1=$4;
return $1;
}, function($ctx1) {$ctx1.fill(self,"demo1",{},smalltalk.SimilarityMatrix.klass)})},
args: [],
source: "demo1\x0a\x09^ SimilarityMatrix new\x0a\x09\x09on: (1 to: 10)\x0a\x09\x09by: [ :a :b |\x0a\x09\x09\x09(a + b) odd\x0a\x09\x09\x09\x09ifTrue: [ 1 ]\x0a\x09\x09\x09\x09ifFalse: [ 0 ]\x0a\x09\x09\x09];\x0a\x09\x09viewMatrix",
messageSends: ["on:by:", "new", "to:", "ifTrue:ifFalse:", "odd", "+", "viewMatrix"],
referencedClasses: ["SimilarityMatrix"]
}),
smalltalk.SimilarityMatrix.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "demo2",
category: 'not yet classified',
fn: function (){
var self=this;
function $SimilarityMatrix(){return smalltalk.SimilarityMatrix||(typeof SimilarityMatrix=="undefined"?nil:SimilarityMatrix)}
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$6,$7,$5,$8,$1;
$2=_st($SimilarityMatrix())._new();
_st($2)._on_by_withAction_(_st(_st($Collection())._allSubclasses())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$3=_st(a)._numberOfMethods();
$ctx2.sendIdx["numberOfMethods"]=1;
$4=_st(b)._numberOfMethods();
$ctx2.sendIdx["numberOfMethods"]=2;
return _st($3).__lt($4);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)})})),(function(classA,classB){
var a,b;
return smalltalk.withContext(function($ctx2) {
a=_st(classA)._numberOfMethods();
$ctx2.sendIdx["numberOfMethods"]=3;
a;
b=_st(classB)._numberOfMethods();
b;
$6=_st(a)._min_(b);
$7=_st(_st(b)._max_(a))._max_((1));
$ctx2.sendIdx["max:"]=1;
$5=_st($6).__slash($7);
return _st($5)._asFloat();
}, function($ctx2) {$ctx2.fillBlock({classA:classA,classB:classB,a:a,b:b},$ctx1,2)})}),(function(classA,classB){
return smalltalk.withContext(function($ctx2) {
_st($Browser())._openOn_(classA);
$ctx2.sendIdx["openOn:"]=1;
return _st($Browser())._openOn_(classB);
}, function($ctx2) {$ctx2.fillBlock({classA:classA,classB:classB},$ctx1,3)})}));
$8=_st($2)._viewMatrix();
$1=$8;
return $1;
}, function($ctx1) {$ctx1.fill(self,"demo2",{},smalltalk.SimilarityMatrix.klass)})},
args: [],
source: "demo2\x0a\x09\x22show which Collection subclasses have a similar number of methods\x22\x0a\x09^ SimilarityMatrix new\x0a\x09\x09on: (Collection allSubclasses\x0a\x09\x09\x09sort: [:a :b | a numberOfMethods < b numberOfMethods])\x0a\x09\x09by: [ :classA : classB | |a b|\x0a\x09\x09\x09a := classA numberOfMethods.\x0a\x09\x09\x09b := classB numberOfMethods.\x0a\x09\x09\x09((a min: b) / ((b max: a) max: 1)) asFloat ]\x0a\x09\x09withAction: [:classA :classB |\x0a\x09\x09\x09Browser openOn: classA.\x0a\x09\x09\x09Browser openOn: classB ] ;\x0a\x09\x09viewMatrix",
messageSends: ["on:by:withAction:", "new", "sort:", "allSubclasses", "<", "numberOfMethods", "asFloat", "/", "min:", "max:", "openOn:", "viewMatrix"],
referencedClasses: ["SimilarityMatrix", "Collection", "Browser"]
}),
smalltalk.SimilarityMatrix.klass);

});
