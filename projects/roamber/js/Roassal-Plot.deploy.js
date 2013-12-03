smalltalk.addPackage('Roassal-Plot');
smalltalk.addClass('ROPlot', smalltalk.Object, ['url'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "fetchOnSuccessDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(self._uri(),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(data){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"fetchOnSuccessDo:",{aBlock:aBlock},smalltalk.ROPlot)})},
messageSends: ["ajax:options:", "uri", "->", "value:", "alert:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot",
fn: function (){
var self=this;
var aBlock;
return smalltalk.withContext(function($ctx1) { 
aBlock=(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(data)._subStrings_(" "))._collect_("asNumber"))._plotBar();
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})});
self._fetchOnSuccessDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"plot",{aBlock:aBlock},smalltalk.ROPlot)})},
messageSends: ["plotBar", "collect:", "subStrings:", "fetchOnSuccessDo:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._processRawData_(data))._plotBar();
return self}, function($ctx1) {$ctx1.fill(self,"plot:",{data:data},smalltalk.ROPlot)})},
messageSends: ["plotBar", "processRawData:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "processDropboxURL:",
fn: function (aString){
var self=this;
var pointPos,prefix;
return smalltalk.withContext(function($ctx1) { 
var $1;
prefix="https://dl";
pointPos=_st(aString)._indexOf_(".");
$1=_st(prefix).__comma(_st(aString)._copyFrom_to_(pointPos,_st(aString)._size()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"processDropboxURL:",{aString:aString,pointPos:pointPos,prefix:prefix},smalltalk.ROPlot)})},
messageSends: ["indexOf:", ",", "copyFrom:to:", "size"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "processRawData:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(data)._subStrings_(" "))._collect_("asNumber");
return $1;
}, function($ctx1) {$ctx1.fill(self,"processRawData:",{data:data},smalltalk.ROPlot)})},
messageSends: ["collect:", "subStrings:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "uri",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._url();
return $1;
}, function($ctx1) {$ctx1.fill(self,"uri",{},smalltalk.ROPlot)})},
messageSends: ["url"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ROPlot)})},
messageSends: []}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=self._processDropboxURL_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROPlot)})},
messageSends: ["processDropboxURL:"]}),
smalltalk.ROPlot);


smalltalk.addMethod(
smalltalk.method({
selector: "example",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"example",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "plot"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv");
_st($1)._token_(",");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "token:", "plot"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "plot"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._url_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new"]}),
smalltalk.ROPlot.klass);


