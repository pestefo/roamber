smalltalk.addPackage('Roassal-Plot');
smalltalk.addClass('ROData', smalltalk.Object, ['rawData', 'token'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@rawData"])._subStrings_(self._token()))._reject_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(str).__eq("");
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})})))._collect_("asNumber");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray",{},smalltalk.ROData)})},
messageSends: ["collect:", "reject:", "=", "subStrings:", "token"]}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rawData"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData",{},smalltalk.ROData)})},
messageSends: []}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawData"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"rawData:",{aString:aString},smalltalk.ROData)})},
messageSends: []}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:from:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawData"]=aString;
_st(anObject)._continue();
return self}, function($ctx1) {$ctx1.fill(self,"rawData:from:",{aString:aString,anObject:anObject},smalltalk.ROData)})},
messageSends: ["continue"]}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "separators",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[" ",",",";","\x09"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"separators",{},smalltalk.ROData)})},
messageSends: []}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "token",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@token"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"token",{},smalltalk.ROData)})},
messageSends: []}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aString)._size()).__eq((1));
if(! smalltalk.assert($1)){
self._error_("Separator must be one character");
};
self["@token"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.ROData)})},
messageSends: ["ifFalse:", "error:", "=", "size"]}),
smalltalk.ROData);


smalltalk.addMethod(
smalltalk.method({
selector: "rawData:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._rawData_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData:",{aString:aString},smalltalk.ROData.klass)})},
messageSends: ["rawData:", "new"]}),
smalltalk.ROData.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:withToken:",
fn: function (aString,token){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rawData_(aString);
_st($2)._token_(token);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData:withToken:",{aString:aString,token:token},smalltalk.ROData.klass)})},
messageSends: ["rawData:", "new", "token:", "yourself"]}),
smalltalk.ROData.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
fn: function (token){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._token_(token);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"token:",{token:token},smalltalk.ROData.klass)})},
messageSends: ["token:", "new", "yourself"]}),
smalltalk.ROData.klass);


smalltalk.addClass('RODataTest', smalltalk.ROTest, ['data'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "testCSV",
fn: function (){
var self=this;
var str,token;
function $ROData(){return smalltalk.ROData||(typeof ROData=="undefined"?nil:ROData)}
return smalltalk.withContext(function($ctx1) { 
token=",";
str="1,4,9,2,23,45,63";
self["@data"]=_st($ROData())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asArray()).__eq([(1), (4), (9), (2), (23), (45), (63)]));
str="1,4,9,2,23,45,63,";
self["@data"]=_st($ROData())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asArray()).__eq([(1), (4), (9), (2), (23), (45), (63)]));
str=",1,4,9,2,23,45,63,";
self["@data"]=_st($ROData())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asArray()).__eq([(1), (4), (9), (2), (23), (45), (63)]));
return self}, function($ctx1) {$ctx1.fill(self,"testCSV",{str:str,token:token},smalltalk.RODataTest)})},
messageSends: ["rawData:withToken:", "assert:", "=", "asArray"]}),
smalltalk.RODataTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSpaceToken",
fn: function (){
var self=this;
var str,token;
function $ROData(){return smalltalk.ROData||(typeof ROData=="undefined"?nil:ROData)}
return smalltalk.withContext(function($ctx1) { 
token=" ";
str="1 4 9 2 23 45 63";
self["@data"]=_st($ROData())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asArray()).__eq([(1), (4), (9), (2), (23), (45), (63)]));
str="1 4 9 2 23 45 63 ";
self["@data"]=_st($ROData())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asArray()).__eq([(1), (4), (9), (2), (23), (45), (63)]));
str=" 1 4 9 2 23 45 63 ";
self["@data"]=_st($ROData())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asArray()).__eq([(1), (4), (9), (2), (23), (45), (63)]));
return self}, function($ctx1) {$ctx1.fill(self,"testSpaceToken",{str:str,token:token},smalltalk.RODataTest)})},
messageSends: ["rawData:withToken:", "assert:", "=", "asArray"]}),
smalltalk.RODataTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testToken",
fn: function (){
var self=this;
function $ROData(){return smalltalk.ROData||(typeof ROData=="undefined"?nil:ROData)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROData())._new())._token_(",,");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROData())._new())._token_(",");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testToken",{},smalltalk.RODataTest)})},
messageSends: ["should:raise:", "token:", "new", "shouldnt:raise:"]}),
smalltalk.RODataTest);



smalltalk.addClass('ROPlot', smalltalk.Object, ['url', 'data', 'drawBlock'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "continue",
fn: function (){
var self=this;
var aBlock;
return smalltalk.withContext(function($ctx1) { 
aBlock=(function(d){
return smalltalk.withContext(function($ctx2) {
return _st(_st(d)._asArray())._plotBar();
}, function($ctx2) {$ctx2.fillBlock({d:d},$ctx1)})});
_st(aBlock)._value_(self["@data"]);
return self}, function($ctx1) {$ctx1.fill(self,"continue",{aBlock:aBlock},smalltalk.ROPlot)})},
messageSends: ["plotBar", "asArray", "value:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(self._url(),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(rawData){
return smalltalk.withContext(function($ctx2) {
return _st(self["@data"])._rawData_from_(rawData,self);
}, function($ctx2) {$ctx2.fillBlock({rawData:rawData},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"fetchData",{},smalltalk.ROPlot)})},
messageSends: ["ajax:options:", "url", "->", "rawData:from:", "alert:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $ROData(){return smalltalk.ROData||(typeof ROData=="undefined"?nil:ROData)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPlot.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@data"]=_st($ROData())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPlot)})},
messageSends: ["initialize", "new"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fetchData();
return self}, function($ctx1) {$ctx1.fill(self,"plot",{},smalltalk.ROPlot)})},
messageSends: ["fetchData"]}),
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
selector: "token:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@data"])._token_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.ROPlot)})},
messageSends: ["token:"]}),
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


