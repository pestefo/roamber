smalltalk.addPackage('ARoassal-Builder-Punchcard');
smalltalk.addClass('ROPunchcardBuilder', smalltalk.ROObject, ['models', 'metrics', 'view'], 'ARoassal-Builder-Punchcard');
smalltalk.addMethod(
smalltalk.method({
selector: "addMetric:namedAs:",
fn: function (aBlock,metricName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@metrics"])._add_([aBlock,metricName]);
return self}, function($ctx1) {$ctx1.fill(self,"addMetric:namedAs:",{aBlock:aBlock,metricName:metricName},smalltalk.ROPunchcardBuilder)})},
messageSends: ["add:"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "addModels:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@models"])._addAll_(aCollection);
return self}, function($ctx1) {$ctx1.fill(self,"addModels:",{aCollection:aCollection},smalltalk.ROPunchcardBuilder)})},
messageSends: ["addAll:"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPunchcardBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@metrics"]=_st($OrderedCollection())._new();
self["@models"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPunchcardBuilder)})},
messageSends: ["initialize", "new"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfMetrics",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@metrics"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfMetrics",{},smalltalk.ROPunchcardBuilder)})},
messageSends: ["size"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfModels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@models"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfModels",{},smalltalk.ROPunchcardBuilder)})},
messageSends: ["size"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
var aView;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
aView=_st($ROView())._new();
self._renderOn_(aView);
_st(aView)._open();
return self}, function($ctx1) {$ctx1.fill(self,"open",{aView:aView},smalltalk.ROPunchcardBuilder)})},
messageSends: ["new", "renderOn:", "open"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["do:", "first", "second", "add:", "elementOn:", "size:", "roValue:", "new", "withLineItemsCount:", "+", "numberOfModels", "on:", "elements"]}),
smalltalk.ROPunchcardBuilder);



smalltalk.addClass('ROPunchcardBuilderTest', smalltalk.ROTest, ['builder', 'emptyBuilder', 'view'], 'ARoassal-Builder-Punchcard');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size"]}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCreation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@emptyBuilder"])._numberOfModels()).__eq((0)));
self._assert_(_st(_st(self["@emptyBuilder"])._numberOfMetrics()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testCreation",{},smalltalk.ROPunchcardBuilderTest)})},
messageSends: ["assert:", "=", "numberOfModels", "numberOfMetrics"]}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRendering",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
_st(self["@builder"])._renderOn_(self["@view"]);
self._assert_(_st(_st(self["@view"])._numberOfElements()).__eq((7)));
return self}, function($ctx1) {$ctx1.fill(self,"testRendering",{},smalltalk.ROPunchcardBuilderTest)})},
messageSends: ["new", "renderOn:", "assert:", "=", "numberOfElements"]}),
smalltalk.ROPunchcardBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSimpleScenario",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@builder"])._numberOfModels()).__eq((3)));
self._assert_(_st(_st(self["@builder"])._numberOfMetrics()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testSimpleScenario",{},smalltalk.ROPunchcardBuilderTest)})},
messageSends: ["assert:", "=", "numberOfModels", "numberOfMetrics"]}),
smalltalk.ROPunchcardBuilderTest);



