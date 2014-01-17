define("roamber/Roassal-Builder-Punchcard", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal", "roamber/ARoassal-Test"], function(smalltalk,nil,_st){
smalltalk.addPackage('Roassal-Builder-Punchcard');
smalltalk.packages["Roassal-Builder-Punchcard"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('ROPunchcardBuilder', smalltalk.ROObject, ['models', 'metrics', 'view', 'minColor', 'maxColor', 'popupText'], 'Roassal-Builder-Punchcard');
smalltalk.addMethod(
smalltalk.method({
selector: "addMetric:namedAs:",
category: 'adding',
fn: function (aBlock,metricName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@metrics"])._add_([aBlock,metricName]);
return self}, function($ctx1) {$ctx1.fill(self,"addMetric:namedAs:",{aBlock:aBlock,metricName:metricName},smalltalk.ROPunchcardBuilder)})},
args: ["aBlock", "metricName"],
source: "addMetric: aBlock namedAs: metricName\x0a\x09metrics add: { aBlock . metricName }.",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addModels:",
category: 'adding',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@models"])._addAll_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"addModels:",{aCollection:aCollection},smalltalk.ROPunchcardBuilder)})},
args: ["aCollection"],
source: "addModels: aCollection\x0a\x09models addAll: aCollection.",
messageSends: ["addAll:"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPunchcardBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@metrics"]=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
self["@models"]=_st($OrderedCollection())._new();
self["@maxColor"]=_st($Color())._lightGray();
self["@minColor"]=self["@maxColor"];
self["@popupText"]=(function(object,metricName,value){
return smalltalk.withContext(function($ctx2) {
return value;
}, function($ctx2) {$ctx2.fillBlock({object:object,metricName:metricName,value:value},$ctx1,1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPunchcardBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09metrics := OrderedCollection new.\x0a\x09models := OrderedCollection new.\x0a\x09minColor := maxColor := Color lightGray.\x0a\x09popupText := [ :object :metricName :value | value ]",
messageSends: ["initialize", "new", "lightGray"],
referencedClasses: ["OrderedCollection", "Color"]
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"maxColor:",{aColor:aColor},smalltalk.ROPunchcardBuilder)})},
args: ["aColor"],
source: "maxColor: aColor\x0a\x09maxColor := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "minColor:",
category: 'accessing',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"minColor:",{aColor:aColor},smalltalk.ROPunchcardBuilder)})},
args: ["aColor"],
source: "minColor: aColor\x0a\x09minColor := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfMetrics",
category: 'metrics',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@metrics"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfMetrics",{},smalltalk.ROPunchcardBuilder)})},
args: [],
source: "numberOfMetrics\x0a\x09^ metrics size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfModels",
category: 'metrics',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@models"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfModels",{},smalltalk.ROPunchcardBuilder)})},
args: [],
source: "numberOfModels\x0a\x09^ models size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
var aView;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
aView=_st($ROView())._new();
self._renderOn_(aView);
_st(aView)._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{aView:aView},smalltalk.ROPunchcardBuilder)})},
args: [],
source: "open\x0a\x0a\x09|  aView |\x0a\x09aView := ROView new.\x0a\x09self renderOn: aView.\x0a\x09aView open",
messageSends: ["new", "renderOn:", "open"],
referencedClasses: ["ROView"]
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popupText:",
category: 'accessing',
fn: function (aTreeArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popupText"]=aTreeArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"popupText:",{aTreeArgBlock:aTreeArgBlock},smalltalk.ROPunchcardBuilder)})},
args: ["aTreeArgBlock"],
source: "popupText: aTreeArgBlock\x0a\x09\x22Block has to match the pattern [ :object :metricName :value |  ... ].\x22\x0a\x09popupText :=  aTreeArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (aView){
var self=this;
var layout;
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$5,$4;
_st(self["@metrics"])._do_((function(metric){
var m,name,normalizer;
return smalltalk.withContext(function($ctx2) {
m=_st(metric)._first();
m;
name=_st(metric)._second();
name;
normalizer=_st($RONColorLinearNormalizer())._inContext_lowColor_highColor_(_st(self["@models"])._collect_((function(obj){
return smalltalk.withContext(function($ctx3) {
return _st(m)._roValue_(obj);
$ctx3.sendIdx["roValue:"]=1;
}, function($ctx3) {$ctx3.fillBlock({obj:obj},$ctx2,2)})})),self["@minColor"],self["@maxColor"]);
normalizer;
_st(self["@models"])._do_((function(obj){
var circle,metricValue;
return smalltalk.withContext(function($ctx3) {
metricValue=_st(m)._roValue_(obj);
$ctx3.sendIdx["roValue:"]=2;
metricValue;
$3=_st($ROEllipse())._new();
$ctx3.sendIdx["new"]=1;
$2=_st($3)._size_(metricValue);
$1=_st($2)._color_(_st(normalizer)._roValue_(metricValue));
circle=_st($1)._elementOn_(obj);
$ctx3.sendIdx["elementOn:"]=1;
circle;
_st(circle).__at(_st($ROPopup())._text_((function(roElement){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@popupText"])._value_value_value_(obj,name,metricValue))._asString();
}, function($ctx4) {$ctx4.fillBlock({roElement:roElement},$ctx3,4)})})));
return _st(aView)._add_(circle);
$ctx3.sendIdx["add:"]=1;
}, function($ctx3) {$ctx3.fillBlock({obj:obj,circle:circle,metricValue:metricValue},$ctx2,3)})}));
$ctx2.sendIdx["do:"]=2;
$5=_st($ROLabel())._new();
$ctx2.sendIdx["new"]=2;
$4=_st($5)._elementOn_(name);
$ctx2.sendIdx["elementOn:"]=2;
return _st(aView)._add_($4);
$ctx2.sendIdx["add:"]=2;
}, function($ctx2) {$ctx2.fillBlock({metric:metric,m:m,name:name,normalizer:normalizer},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(self["@models"])._do_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(aView)._add_(_st(_st($ROLabel())._new())._elementOn_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,5)})}));
layout=_st($ROCellLayout())._withLineItemsCount_(_st(self._numberOfModels()).__plus((1)));
_st(layout)._on_(_st(aView)._elements());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{aView:aView,layout:layout},smalltalk.ROPunchcardBuilder)})},
args: ["aView"],
source: "renderOn: aView\x0a\x09|  layout |\x0a\x09\x0a\x09metrics do: [ :metric |\x0a\x09\x09| m name normalizer | \x0a\x09\x09m := metric first.\x0a\x09\x09name := metric second.\x0a\x09\x09\x22thresholds :=  self thresholdsFor: metric.\x22\x0a\x09\x09normalizer := RONColorLinearNormalizer inContext: (models collect: [:obj | m roValue: obj]) lowColor: minColor highColor: maxColor.\x0a\x09\x09models do: [ :obj |\x0a\x09\x09\x09| circle metricValue |\x0a\x09\x09\x09metricValue := m roValue: obj.\x0a\x09\x09\x09circle := ((ROEllipse new size: metricValue ) color: (normalizer roValue: metricValue)) elementOn: obj  .\x0a\x09\x09\x09circle @ (ROPopup text: [ :roElement | (popupText value: obj  value: name value: metricValue) asString ]).\x0a\x09\x09\x09aView add: circle.\x0a\x09\x09\x09 ].\x0a\x09\x09\x09 \x0a\x09\x09aView add: (ROLabel new elementOn: name) \x0a\x09].\x0a\x09\x0a\x09models do: [ :obj | aView add: (ROLabel new elementOn: obj) ].\x0a\x09\x0a\x09layout := ROCellLayout withLineItemsCount: (self numberOfModels + 1).\x0a\x09layout on: aView elements",
messageSends: ["do:", "first", "second", "inContext:lowColor:highColor:", "collect:", "roValue:", "elementOn:", "color:", "size:", "new", "@", "text:", "asString", "value:value:value:", "add:", "withLineItemsCount:", "+", "numberOfModels", "on:", "elements"],
referencedClasses: ["RONColorLinearNormalizer", "ROEllipse", "ROPopup", "ROLabel", "ROCellLayout"]
}),
smalltalk.ROPunchcardBuilder);



smalltalk.addClass('ROPunchcardBuilderTest', smalltalk.ROTest, ['builder', 'emptyBuilder', 'view'], 'Roassal-Builder-Punchcard');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ROPunchcardBuilder())._new();
$ctx1.sendIdx["new"]=1;
_st(self["@builder"])._addModels_(["hello", "world", "hello world"]);
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(word)._size();
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,1)})}),"length");
self["@emptyBuilder"]=_st($ROPunchcardBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROPunchcardBuilderTest)})},
args: [],
source: "setUp\x0a\x0a\x09builder := ROPunchcardBuilder new.\x0a\x09builder addModels: #( 'hello' 'world' 'hello world' ).\x0a\x09builder addMetric: [:word | word size] namedAs: 'length'.\x0a\x0a\x09emptyBuilder := ROPunchcardBuilder new.",
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size"],
referencedClasses: ["ROPunchcardBuilder"]
}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@emptyBuilder"])._numberOfModels()).__eq((0));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(self["@emptyBuilder"])._numberOfMetrics()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROPunchcardBuilderTest)})},
args: [],
source: "testCreation\x0a\x0a\x09self assert: emptyBuilder numberOfModels = 0.\x0a\x09self assert: emptyBuilder numberOfMetrics = 0.",
messageSends: ["assert:", "=", "numberOfModels", "numberOfMetrics"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRendering",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
_st(self["@builder"])._renderOn_(self["@view"]);
self._assert_(_st(_st(self["@view"])._numberOfElements()).__eq((7)));
return self}, function($ctx1) {$ctx1.fill(self,"testRendering",{},smalltalk.ROPunchcardBuilderTest)})},
args: [],
source: "testRendering\x0a\x0a\x09view := ROView new.\x0a\x09builder renderOn: view.\x0a\x09self assert: view numberOfElements = 7",
messageSends: ["new", "renderOn:", "assert:", "=", "numberOfElements"],
referencedClasses: ["ROView"]
}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSimpleScenario",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@builder"])._numberOfModels()).__eq((3));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(self["@builder"])._numberOfMetrics()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testSimpleScenario",{},smalltalk.ROPunchcardBuilderTest)})},
args: [],
source: "testSimpleScenario\x0a\x09self assert: builder numberOfModels = 3.\x0a\x09self assert: builder numberOfMetrics = 1.",
messageSends: ["assert:", "=", "numberOfModels", "numberOfMetrics"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoMetricsScenario",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,1)})}),"double lenght");
$1=_st(_st(self["@builder"])._numberOfModels()).__eq((3));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(self["@builder"])._numberOfMetrics()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoMetricsScenario",{},smalltalk.ROPunchcardBuilderTest)})},
args: [],
source: "testTwoMetricsScenario\x0a\x09builder addMetric: [:word | word size * 2] namedAs: 'double lenght'.\x0a\x09\x0a\x09self assert: builder numberOfModels = 3.\x0a\x09self assert: builder numberOfMetrics = 2.",
messageSends: ["addMetric:namedAs:", "*", "size", "assert:", "=", "numberOfModels", "numberOfMetrics"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilderTest);



smalltalk.addClass('ROPunchcardExample', smalltalk.ROObject, ['builder'], 'Roassal-Builder-Punchcard');
smalltalk.addMethod(
smalltalk.method({
selector: "example",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ROPunchcardBuilder())._new();
_st(self["@builder"])._addModels_(["hello", "world", "hello world"]);
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(word)._size();
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,1)})}),"length");
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example",{},smalltalk.ROPunchcardExample)})},
args: [],
source: "example\x0a\x0a\x22\x0aself new example\x0a\x22\x0a\x0abuilder := ROPunchcardBuilder new.\x0abuilder addModels: #( 'hello' 'world' 'hello world' ).\x0abuilder addMetric: [:word | word size] namedAs: 'length'.\x0abuilder open",
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "open"],
referencedClasses: ["ROPunchcardBuilder"]
}),
smalltalk.ROPunchcardExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ROPunchcardBuilder())._new();
_st(self["@builder"])._addModels_(["hello", "world", "hello world"]);
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(word)._size();
$ctx2.sendIdx["size"]=1;
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,1)})}),"length");
$ctx1.sendIdx["addMetric:namedAs:"]=1;
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,2)})}),"length 2");
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{},smalltalk.ROPunchcardExample)})},
args: [],
source: "example2\x0a\x0a\x22\x0aself new example2\x0a\x22\x0a\x0abuilder := ROPunchcardBuilder new.\x0abuilder addModels: #( 'hello' 'world' 'hello world' ).\x0abuilder addMetric: [:word | word size] namedAs: 'length'.\x0abuilder addMetric: [:word | word size * 2 ] namedAs: 'length 2'.\x0abuilder open.",
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "*", "open"],
referencedClasses: ["ROPunchcardBuilder"]
}),
smalltalk.ROPunchcardExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ROPunchcardBuilder())._new();
_st(self["@builder"])._addModels_(["hello", "world", "hello world"]);
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(word)._size();
$ctx2.sendIdx["size"]=1;
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,1)})}),"length");
$ctx1.sendIdx["addMetric:namedAs:"]=1;
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1,2)})}),"length 2");
_st(self["@builder"])._minColor_(_st($Color())._green());
_st(self["@builder"])._maxColor_(_st($Color())._red());
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{},smalltalk.ROPunchcardExample)})},
args: [],
source: "example3\x0a\x0a\x22\x0aself new example3\x0a\x22\x0a\x0abuilder := ROPunchcardBuilder new.\x0abuilder addModels: #( 'hello' 'world' 'hello world' ).\x0abuilder addMetric: [:word | word size] namedAs: 'length'.\x0abuilder addMetric: [:word | word size * 2 ] namedAs: 'length 2'.\x0abuilder minColor: Color green.\x0abuilder maxColor: Color red.\x0abuilder open.",
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "*", "minColor:", "green", "maxColor:", "red", "open"],
referencedClasses: ["ROPunchcardBuilder", "Color"]
}),
smalltalk.ROPunchcardExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example4",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
function $ROObject(){return smalltalk.ROObject||(typeof ROObject=="undefined"?nil:ROObject)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
self["@builder"]=_st($ROPunchcardBuilder())._new();
_st(self["@builder"])._addModels_(_st(_st($ROObject())._withAllSubclasses())._copyFrom_to_((3),(9)));
_st(self["@builder"])._addMetric_namedAs_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._numberOfMethods()).__plus((5));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)})}),"NOM");
$ctx1.sendIdx["addMetric:namedAs:"]=1;
_st(self["@builder"])._addMetric_namedAs_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._numberOfVariables()).__star((5));
$ctx2.sendIdx["*"]=1;
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,2)})}),"NOA");
$ctx1.sendIdx["addMetric:namedAs:"]=2;
_st(self["@builder"])._addMetric_namedAs_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._numberOfSubclasses()).__star((5));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,3)})}),"NOS");
_st(self["@builder"])._popupText_((function(class_,metricName,value){
return smalltalk.withContext(function($ctx2) {
$3=_st("The value of ".__comma(metricName)).__comma(" for ");
$ctx2.sendIdx[","]=4;
$2=_st($3).__comma(_st(class_)._name());
$ctx2.sendIdx[","]=3;
$1=_st($2).__comma(" is ");
$ctx2.sendIdx[","]=2;
return _st($1).__comma(_st(value)._asString());
$ctx2.sendIdx[","]=1;
}, function($ctx2) {$ctx2.fillBlock({class_:class_,metricName:metricName,value:value},$ctx1,4)})}));
_st(self["@builder"])._minColor_(_st($Color())._green());
_st(self["@builder"])._maxColor_(_st($Color())._red());
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example4",{},smalltalk.ROPunchcardExample)})},
args: [],
source: "example4\x0a\x0a\x22\x0aself new example4\x0a\x22\x0a\x0abuilder := ROPunchcardBuilder new.\x0abuilder addModels: (ROObject withAllSubclasses copyFrom: 3 to: 9).\x0abuilder addMetric: [ :c | c numberOfMethods + 5] namedAs: 'NOM'.\x0abuilder addMetric: [ :c | c numberOfVariables * 5 ] namedAs: 'NOA'.\x0abuilder addMetric: [ :c | c numberOfSubclasses * 5  ] namedAs: 'NOS'.\x0abuilder popupText: [ :class :metricName :value | 'The value of ', metricName, ' for ', class name, ' is ', value asString ].\x0abuilder minColor: Color green.\x0abuilder maxColor: Color red.\x0abuilder open.",
messageSends: ["new", "addModels:", "copyFrom:to:", "withAllSubclasses", "addMetric:namedAs:", "+", "numberOfMethods", "*", "numberOfVariables", "numberOfSubclasses", "popupText:", ",", "name", "asString", "minColor:", "green", "maxColor:", "red", "open"],
referencedClasses: ["ROPunchcardBuilder", "ROObject", "Color"]
}),
smalltalk.ROPunchcardExample);


});
