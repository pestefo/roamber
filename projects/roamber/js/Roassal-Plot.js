smalltalk.addPackage('Roassal-Plot');
smalltalk.addClass('ROData', smalltalk.Object, ['rawData', 'token'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "asArray",
category: 'not yet classified',
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
args: [],
source: "asArray\x0a\x09^ (((rawData subStrings: self token) \x0a\x09\x09reject: [:str | str = ''])\x0a\x09\x09collect:#asNumber)",
messageSends: ["collect:", "reject:", "=", "subStrings:", "token"],
referencedClasses: []
}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rawData"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData",{},smalltalk.ROData)})},
args: [],
source: "rawData\x0a\x09^ rawData",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawData"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"rawData:",{aString:aString},smalltalk.ROData)})},
args: ["aString"],
source: "rawData: aString\x0a\x09rawData := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:from:",
category: 'not yet classified',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawData"]=aString;
_st(anObject)._continue();
return self}, function($ctx1) {$ctx1.fill(self,"rawData:from:",{aString:aString,anObject:anObject},smalltalk.ROData)})},
args: ["aString", "anObject"],
source: "rawData: aString from: anObject\x0a\x09rawData := aString.\x09\x0a\x09anObject continue.",
messageSends: ["continue"],
referencedClasses: []
}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "separators",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[" ",",",";","\x09"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"separators",{},smalltalk.ROData)})},
args: [],
source: "separators\x0a\x09^ { \x0a\x09' '.   \x22 single space \x22\x0a\x09','.   \x22 comma \x22\x0a\x09';'.   \x22 semicolon \x22\x0a\x09'\x09'  \x22tab\x22\x0a\x09}.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "token",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@token"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"token",{},smalltalk.ROData)})},
args: [],
source: "token\x0a\x09^ token",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROData);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
category: 'not yet classified',
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
args: ["aString"],
source: "token: aString\x0a\x09(aString size = 1) ifFalse: [ self error: 'Separator must be one character' ].\x0a\x09\x0a\x09token := aString",
messageSends: ["ifFalse:", "error:", "=", "size"],
referencedClasses: []
}),
smalltalk.ROData);


smalltalk.addMethod(
smalltalk.method({
selector: "rawData:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._rawData_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData:",{aString:aString},smalltalk.ROData.klass)})},
args: ["aString"],
source: "rawData: aString\x0a\x09^ self new rawData: aString.\x0a\x09",
messageSends: ["rawData:", "new"],
referencedClasses: []
}),
smalltalk.ROData.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:withToken:",
category: 'not yet classified',
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
args: ["aString", "token"],
source: "rawData: aString withToken: token\x0a\x09^ self new rawData: aString; token: token; yourself\x0a\x0a\x09",
messageSends: ["rawData:", "new", "token:", "yourself"],
referencedClasses: []
}),
smalltalk.ROData.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
category: 'not yet classified',
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
args: ["token"],
source: "token: token\x0a\x09^ self new token: token; yourself\x0a\x0a\x09",
messageSends: ["token:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROData.klass);


smalltalk.addClass('RODataTest', smalltalk.ROTest, ['data'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "testCSV",
category: 'not yet classified',
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
args: [],
source: "testCSV\x0a\x09|str token|\x0a\x09token := ','.\x0a\x09\x0a\x09str :=  '1,4,9,2,23,45,63'.\x0a\x09data := ROData rawData: str withToken: token.\x0a\x09self assert: data asArray = #(1 4 9 2 23 45 63).\x0a\x09\x0a\x09str :=  '1,4,9,2,23,45,63,'.\x0a\x09data := ROData rawData: str withToken: token.\x0a\x09self assert: data asArray = #(1 4 9 2 23 45 63).\x0a\x0a\x09str :=  ',1,4,9,2,23,45,63,'.\x0a\x09data := ROData rawData: str withToken: token.\x0a\x09self assert: data asArray = #(1 4 9 2 23 45 63).",
messageSends: ["rawData:withToken:", "assert:", "=", "asArray"],
referencedClasses: ["ROData"]
}),
smalltalk.RODataTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSpaceToken",
category: 'not yet classified',
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
args: [],
source: "testSpaceToken\x0a\x09|str token|\x0a\x09token := ' '.\x0a\x09str :=  '1 4 9 2 23 45 63'.\x0a\x09\x0a\x09data := ROData rawData: str withToken: token.\x0a\x09self assert: data asArray = #(1 4 9 2 23 45 63).\x0a\x09\x0a\x09str :=  '1 4 9 2 23 45 63 '.\x0a\x09data := ROData rawData: str withToken: token.\x0a\x09self assert: data asArray = #(1 4 9 2 23 45 63).\x0a\x0a\x09str :=  ' 1 4 9 2 23 45 63 '.\x0a\x09data := ROData rawData: str withToken: token.\x0a\x09self assert: data asArray = #(1 4 9 2 23 45 63).",
messageSends: ["rawData:withToken:", "assert:", "=", "asArray"],
referencedClasses: ["ROData"]
}),
smalltalk.RODataTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testToken",
category: 'not yet classified',
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
args: [],
source: "testToken\x0a\x09\x22Separators must be a single character\x22\x0a\x09\x0a\x09self should: [ ROData new token: ',,'  ] raise: Error.\x0a\x09self shouldnt: [ ROData new token: ','  ] raise: Error.",
messageSends: ["should:raise:", "token:", "new", "shouldnt:raise:"],
referencedClasses: ["ROData", "Error"]
}),
smalltalk.RODataTest);



smalltalk.addClass('ROPlot', smalltalk.Object, ['url', 'data', 'drawBlock'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "continue",
category: 'not yet classified',
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
args: [],
source: "continue\x0a\x09\x22 draw \x22\x0a\x09| aBlock |\x0a\x09aBlock := [:d | d asArray plotBar].\x09\x09\x0a\x09aBlock value: data.",
messageSends: ["plotBar", "asArray", "value:"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchData",
category: 'not yet classified',
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
args: [],
source: "fetchData\x0a\x0a  jQuery\x0a    ajax: (self url)\x0a    options: #{\x0a        'type' -> 'GET'.\x0a\x22        'dataType' -> 'jsonp'.\x22\x0a        'success' -> [ :rawData | \x0a\x09\x09\x09data rawData: rawData from: self.\x0a\x09\x09].\x0a        'error' -> [window alert: 'error']\x0a    }",
messageSends: ["ajax:options:", "url", "->", "rawData:from:", "alert:"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $ROData(){return smalltalk.ROData||(typeof ROData=="undefined"?nil:ROData)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROPlot.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@data"]=_st($ROData())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROPlot)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09data := ROData new.",
messageSends: ["initialize", "new"],
referencedClasses: ["ROData"]
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fetchData();
return self}, function($ctx1) {$ctx1.fill(self,"plot",{},smalltalk.ROPlot)})},
args: [],
source: "plot\x0a\x0a\x0a\x09self fetchData.\x0a\x09\x0a\x09\x22 wating for continue \x22",
messageSends: ["fetchData"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "processDropboxURL:",
category: 'not yet classified',
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
args: ["aString"],
source: "processDropboxURL: aString \x0a\x09\x22\x0a\x09Dropbox share looks like:\x0a\x09https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt\x0a\x09The direct link to the file is:\x0a\x09https://dl.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt\x09\x0a\x09\x22\x0a\x09| pointPos prefix |\x0a\x09prefix := 'https://dl'.\x0a\x09pointPos := aString indexOf: '.' .\x0a\x09^ prefix , (aString copyFrom: pointPos to: (aString size)).\x0a\x0a\x09\x0a\x0a\x09",
messageSends: ["indexOf:", ",", "copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@data"])._token_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.ROPlot)})},
args: ["aString"],
source: "token: aString\x0a\x09data token: aString",
messageSends: ["token:"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ROPlot)})},
args: [],
source: "url \x0a\x09^ url",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=self._processDropboxURL_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROPlot)})},
args: ["aString"],
source: "url: aString\x0a\x09url := self processDropboxURL: aString ",
messageSends: ["processDropboxURL:"],
referencedClasses: []
}),
smalltalk.ROPlot);


smalltalk.addMethod(
smalltalk.method({
selector: "example",
category: 'public',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"example",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt';\x0a\x09\x09plot.",
messageSends: ["url:", "new", "plot"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
category: 'public',
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
args: [],
source: "example2\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';\x0a\x09\x09token: ',';\x0a\x09\x09plot.",
messageSends: ["url:", "new", "token:", "plot"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
category: 'public',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example3\x0a\x09\x22Like example2 but the comma separator is not given\x22\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';\x0a\x09\x09plot.",
messageSends: ["url:", "new", "plot"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'public',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._url_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROPlot.klass)})},
args: ["aString"],
source: "url: aString\x0a\x09^ self new url: aString",
messageSends: ["url:", "new"],
referencedClasses: []
}),
smalltalk.ROPlot.klass);


