smalltalk.addPackage('ARoassal-Builder-Punchcard');
smalltalk.addClass('ROPunchcardBuilder', smalltalk.ROObject, ['models', 'metrics', 'view'], 'ARoassal-Builder-Punchcard');
smalltalk.ROPunchcardBuilder.comment="| builder |\x0abuilder := ROPunchcardBuilder new.\x0abuilder addModels: #( 'hello' 'world' 'hello world' ).\x0abuilder addMetric: [:word | word size] namedAs: 'length'.\x0abuilder open";
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
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPunchcardBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@metrics"]=_st($OrderedCollection())._new();
self["@models"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPunchcardBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09metrics := OrderedCollection new.\x0a\x09models := OrderedCollection new.",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
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
selector: "renderOn:",
category: 'rendering',
fn: function (aView){
var self=this;
var layout;
function $ROCircle(){return smalltalk.ROCircle||(typeof ROCircle=="undefined"?nil:ROCircle)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@metrics"])._do_((function(metric){
var m,name;
return smalltalk.withContext(function($ctx2) {
m=_st(metric)._first();
m;
name=_st(metric)._second();
name;
_st(self["@models"])._do_((function(obj){
return smalltalk.withContext(function($ctx3) {
return _st(aView)._add_(_st(_st(_st($ROCircle())._new())._size_(_st(m)._roValue_(obj)))._elementOn_(obj));
}, function($ctx3) {$ctx3.fillBlock({obj:obj},$ctx2)})}));
return _st(aView)._add_(_st(_st($ROLabel())._new())._elementOn_(name));
}, function($ctx2) {$ctx2.fillBlock({metric:metric,m:m,name:name},$ctx1)})}));
_st(self["@models"])._do_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(aView)._add_(_st(_st($ROLabel())._new())._elementOn_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})}));
layout=_st($ROCellLayout())._withLineItemsCount_(_st(self._numberOfModels()).__plus((1)));
_st(layout)._on_(_st(aView)._elements());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{aView:aView,layout:layout},smalltalk.ROPunchcardBuilder)})},
args: ["aView"],
source: "renderOn: aView\x0a\x09|  layout |\x0a\x09metrics do: [ :metric |\x0a\x09\x09| m name |\x0a\x09\x09m := metric first.\x0a\x09\x09name := metric second.\x0a\x09\x09\x0a\x09\x09models do: [ :obj |\x0a\x09\x09\x09aView add: ((ROCircle new size: (m roValue: obj)) elementOn: obj).\x0a\x09\x09\x09 ].\x0a\x09\x09aView add: (ROLabel new elementOn: name) \x0a\x09].\x0a\x09\x0a\x09models do: [ :obj | aView add: (ROLabel new elementOn: obj) ].\x0a\x09\x0a\x09layout := ROCellLayout withLineItemsCount: (self numberOfModels + 1).\x0a\x09layout on: aView elements",
messageSends: ["do:", "first", "second", "add:", "elementOn:", "size:", "roValue:", "new", "withLineItemsCount:", "+", "numberOfModels", "on:", "elements"],
referencedClasses: ["ROCircle", "ROLabel", "ROCellLayout"]
}),
smalltalk.ROPunchcardBuilder);



smalltalk.addClass('ROPunchcardBuilderTest', smalltalk.ROTest, ['builder', 'emptyBuilder', 'view'], 'ARoassal-Builder-Punchcard');
smalltalk.ROPunchcardBuilderTest.comment="ROPunchcardBuilderTest new setUp";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length");
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
self._assert_(_st(_st(self["@emptyBuilder"])._numberOfModels()).__eq((0)));
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
self._assert_(_st(_st(self["@builder"])._numberOfModels()).__eq((3)));
self._assert_(_st(_st(self["@builder"])._numberOfMetrics()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testSimpleScenario",{},smalltalk.ROPunchcardBuilderTest)})},
args: [],
source: "testSimpleScenario\x0a\x09self assert: builder numberOfModels = 3.\x0a\x09self assert: builder numberOfMetrics = 1.",
messageSends: ["assert:", "=", "numberOfModels", "numberOfMetrics"],
referencedClasses: []
}),
smalltalk.ROPunchcardBuilderTest);



