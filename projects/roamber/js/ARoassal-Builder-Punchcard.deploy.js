smalltalk.addPackage('ARoassal-Builder-Punchcard');
smalltalk.addClass('ROPunchcardBuilder', smalltalk.ROObject, ['models', 'metrics', 'view', 'minColor', 'maxColor', 'popupText'], 'ARoassal-Builder-Punchcard');
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
selector: "colorFor:thresholds:",
fn: function (obj,thresholds){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._lightGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorFor:thresholds:",{obj:obj,thresholds:thresholds},smalltalk.ROPunchcardBuilder)})},
messageSends: ["lightGray"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPunchcardBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@metrics"]=_st($OrderedCollection())._new();
self["@models"]=_st($OrderedCollection())._new();
self["@maxColor"]=_st($Color())._lightGray();
self["@minColor"]=self["@maxColor"];
self["@popupText"]=(function(object,metricName,value){
return smalltalk.withContext(function($ctx2) {
return value;
}, function($ctx2) {$ctx2.fillBlock({object:object,metricName:metricName,value:value},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPunchcardBuilder)})},
messageSends: ["initialize", "new", "lightGray"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "maxColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"maxColor:",{aColor:aColor},smalltalk.ROPunchcardBuilder)})},
messageSends: []}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "minColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"minColor:",{aColor:aColor},smalltalk.ROPunchcardBuilder)})},
messageSends: []}),
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
selector: "popupText:",
fn: function (aTreeArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@popupText"]=aTreeArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"popupText:",{aTreeArgBlock:aTreeArgBlock},smalltalk.ROPunchcardBuilder)})},
messageSends: []}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (aView){
var self=this;
var layout;
function $RONColorLinearNormalizer(){return smalltalk.RONColorLinearNormalizer||(typeof RONColorLinearNormalizer=="undefined"?nil:RONColorLinearNormalizer)}
function $ROCircle(){return smalltalk.ROCircle||(typeof ROCircle=="undefined"?nil:ROCircle)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
function $ROCellLayout(){return smalltalk.ROCellLayout||(typeof ROCellLayout=="undefined"?nil:ROCellLayout)}
return smalltalk.withContext(function($ctx1) { 
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
}, function($ctx3) {$ctx3.fillBlock({obj:obj},$ctx2)})})),self["@minColor"],self["@maxColor"]);
normalizer;
_st(self["@models"])._do_((function(obj){
var circle,metricValue;
return smalltalk.withContext(function($ctx3) {
metricValue=_st(m)._roValue_(obj);
metricValue;
circle=_st(_st(_st(_st($ROCircle())._new())._size_(metricValue))._elementOn_(obj))._color_(_st(normalizer)._roValue_(metricValue));
circle;
_st(circle).__at(_st($ROPopup())._text_((function(roElement){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@popupText"])._value_value_value_(obj,name,metricValue))._asString();
}, function($ctx4) {$ctx4.fillBlock({roElement:roElement},$ctx3)})})));
return _st(aView)._add_(circle);
}, function($ctx3) {$ctx3.fillBlock({obj:obj,circle:circle,metricValue:metricValue},$ctx2)})}));
return _st(aView)._add_(_st(_st($ROLabel())._new())._elementOn_(name));
}, function($ctx2) {$ctx2.fillBlock({metric:metric,m:m,name:name,normalizer:normalizer},$ctx1)})}));
_st(self["@models"])._do_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(aView)._add_(_st(_st($ROLabel())._new())._elementOn_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})}));
layout=_st($ROCellLayout())._withLineItemsCount_(_st(self._numberOfModels()).__plus((1)));
_st(layout)._on_(_st(aView)._elements());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{aView:aView,layout:layout},smalltalk.ROPunchcardBuilder)})},
messageSends: ["do:", "first", "second", "inContext:lowColor:highColor:", "collect:", "roValue:", "color:", "elementOn:", "size:", "new", "@", "text:", "asString", "value:value:value:", "add:", "withLineItemsCount:", "+", "numberOfModels", "on:", "elements"]}),
smalltalk.ROPunchcardBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "thresholdsFor:",
fn: function (metric){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[_st(_st(self["@models"])._collect_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(obj)._roValue_(metric);
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})})))._min(),_st(_st(self["@models"])._collect_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(obj)._roValue_(metric);
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})})))._max()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"thresholdsFor:",{metric:metric},smalltalk.ROPunchcardBuilder)})},
messageSends: ["min", "collect:", "roValue:", "max"]}),
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

smalltalk.addMethod(
smalltalk.method({
selector: "testTwoMetricsScenario",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"double lenght");
self._assert_(_st(_st(self["@builder"])._numberOfModels()).__eq((3)));
self._assert_(_st(_st(self["@builder"])._numberOfMetrics()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testTwoMetricsScenario",{},smalltalk.ROPunchcardBuilderTest)})},
messageSends: ["addMetric:namedAs:", "*", "size", "assert:", "=", "numberOfModels", "numberOfMetrics"]}),
smalltalk.ROPunchcardBuilderTest);



smalltalk.addClass('ROPunchcardExample', smalltalk.ROObject, ['builder'], 'ARoassal-Builder-Punchcard');
smalltalk.addMethod(
smalltalk.method({
selector: "example",
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
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example",{},smalltalk.ROPunchcardExample)})},
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "open"]}),
smalltalk.ROPunchcardExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
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
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length 2");
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{},smalltalk.ROPunchcardExample)})},
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "*", "open"]}),
smalltalk.ROPunchcardExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
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
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length");
_st(self["@builder"])._addMetric_namedAs_((function(word){
return smalltalk.withContext(function($ctx2) {
return _st(_st(word)._size()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({word:word},$ctx1)})}),"length 2");
_st(self["@builder"])._minColor_(_st($Color())._green());
_st(self["@builder"])._maxColor_(_st($Color())._red());
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{},smalltalk.ROPunchcardExample)})},
messageSends: ["new", "addModels:", "addMetric:namedAs:", "size", "*", "minColor:", "green", "maxColor:", "red", "open"]}),
smalltalk.ROPunchcardExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example4",
fn: function (){
var self=this;
function $ROPunchcardBuilder(){return smalltalk.ROPunchcardBuilder||(typeof ROPunchcardBuilder=="undefined"?nil:ROPunchcardBuilder)}
function $ROObject(){return smalltalk.ROObject||(typeof ROObject=="undefined"?nil:ROObject)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($ROPunchcardBuilder())._new();
_st(self["@builder"])._addModels_(_st(_st($ROObject())._withAllSubclasses())._copyFrom_to_((1),(5)));
_st(self["@builder"])._addMetric_namedAs_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._numberOfMethods()).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}),"NOM");
_st(self["@builder"])._addMetric_namedAs_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._numberOfVariables()).__star((2));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}),"NOA");
_st(self["@builder"])._popupText_((function(class_,metricName,value){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({class_:class_,metricName:metricName,value:value},$ctx1)})}));
_st(self["@builder"])._minColor_(_st($Color())._green());
_st(self["@builder"])._maxColor_(_st($Color())._red());
_st(self["@builder"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"example4",{},smalltalk.ROPunchcardExample)})},
messageSends: ["new", "addModels:", "copyFrom:to:", "withAllSubclasses", "addMetric:namedAs:", "+", "numberOfMethods", "*", "numberOfVariables", "popupText:", "minColor:", "green", "maxColor:", "red", "open"]}),
smalltalk.ROPunchcardExample);



