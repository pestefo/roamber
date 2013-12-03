smalltalk.addPackage('Roassal-Plot');
smalltalk.addClass('ROPlot', smalltalk.Object, ['url'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "fetchOnSuccessDo:",
category: 'not yet classified',
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
args: ["aBlock"],
source: "fetchOnSuccessDo: aBlock\x0a\x0a  jQuery\x0a    ajax: (self uri)\x0a    options: #{\x0a        'type' -> 'GET'.\x0a\x22        'dataType' -> 'jsonp'.\x22\x0a        'success' -> [ :data | \x22self plot: data\x22 aBlock value: data ].\x0a        'error' -> [window alert: 'error']\x0a    }",
messageSends: ["ajax:options:", "uri", "->", "value:", "alert:"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot",
category: 'not yet classified',
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
args: [],
source: "plot\x0a| aBlock |\x0aaBlock := [:data | ((data subStrings: ' ') collect:#asNumber) plotBar].\x0a\x0aself fetchOnSuccessDo: aBlock.",
messageSends: ["plotBar", "collect:", "subStrings:", "fetchOnSuccessDo:"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot:",
category: 'not yet classified',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._processRawData_(data))._plotBar();
return self}, function($ctx1) {$ctx1.fill(self,"plot:",{data:data},smalltalk.ROPlot)})},
args: ["data"],
source: "plot: data\x0a\x0a\x22\x0adata := '1 4 9 16 25 36 49 64 81 100'.\x0a\x22\x0a( self processRawData: data ) plotBar",
messageSends: ["plotBar", "processRawData:"],
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
selector: "processRawData:",
category: 'not yet classified',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(data)._subStrings_(" "))._collect_("asNumber");
return $1;
}, function($ctx1) {$ctx1.fill(self,"processRawData:",{data:data},smalltalk.ROPlot)})},
args: ["data"],
source: "processRawData: data \x0a\x09^ (data subStrings: ' ') collect:#asNumber.",
messageSends: ["collect:", "subStrings:"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "uri",
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._url();
return $1;
}, function($ctx1) {$ctx1.fill(self,"uri",{},smalltalk.ROPlot)})},
args: [],
source: "uri\x0a\x09^ self url",
messageSends: ["url"],
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


