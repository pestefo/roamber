smalltalk.addPackage('Roassal-Plot');
smalltalk.addClass('ROConfigParser', smalltalk.Object, ['drawBlock', 'typeChartDict', 'jsonObj'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@drawBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.ROConfigParser)})},
messageSends: []}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "block",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._drawBlock();
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.ROConfigParser)})},
messageSends: ["drawBlock"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "buildBlock",
fn: function (){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
var $1;
str=" [:d :t | \x0a\x09d ";
str=self._parseTypeDiagram_(str);
str=self._parseValues_(str);
str=self._parseY_(str);
str=self._parseAxis_(str);
str=self._parseColor_(str);
str=_st(str).__comma("]");
$1=str;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildBlock",{str:str},smalltalk.ROConfigParser)})},
messageSends: ["parseTypeDiagram:", "parseValues:", "parseY:", "parseAxis:", "parseColor:", ","]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBlock",
fn: function (){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Compiler())._new())._evaluateExpression_(self["@drawBlock"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawBlock",{},smalltalk.ROConfigParser)})},
messageSends: ["evaluateExpression:", "new"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "initDiagramDict",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["verticalBar".__minus_gt("verticalBarDiagram"),"horizontalBar".__minus_gt("horizontalBarDiagram")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initDiagramDict",{},smalltalk.ROConfigParser)})},
messageSends: ["->"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROConfigParser.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@typeChartDict"]=_st(self._initDiagramDict())._asDictionary();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROConfigParser)})},
messageSends: ["initialize", "asDictionary", "initDiagramDict"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonParse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(jQuery)._parseJSON_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonParse:",{aString:aString},smalltalk.ROConfigParser)})},
messageSends: ["parseJSON:"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsonObj"]=self._jsonParse_(aString);
self["@drawBlock"]=self._buildBlock();
return self}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ROConfigParser)})},
messageSends: ["jsonParse:", "buildBlock"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseAxis:",
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(str).__comma(_st(self["@jsonObj"])._axis())).__comma(";")).__comma(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseAxis:",{str:str},smalltalk.ROConfigParser)})},
messageSends: [",", "cr", "axis"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseColor:",
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(str).__comma("color: Color ")).__comma(_st(self["@jsonObj"])._color())).__comma("")).__comma(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseColor:",{str:str},smalltalk.ROConfigParser)})},
messageSends: [",", "cr", "color"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseTypeDiagram:",
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(str).__comma(_st(self["@typeChartDict"])._at_(_st(self["@jsonObj"])._type()))).__comma(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseTypeDiagram:",{str:str},smalltalk.ROConfigParser)})},
messageSends: [",", "cr", "at:", "type"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseValues:",
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(str).__comma("models: (t dataFromColumn:'")).__comma(_st(self["@jsonObj"])._values())).__comma("');")).__comma(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseValues:",{str:str},smalltalk.ROConfigParser)})},
messageSends: [",", "cr", "values"]}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseY:",
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(str).__comma("y: ")).__comma(_st(self["@jsonObj"])._y())).__comma(";")).__comma(_st($String())._cr());
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseY:",{str:str},smalltalk.ROConfigParser)})},
messageSends: [",", "cr", "y"]}),
smalltalk.ROConfigParser);


smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ROConfigParser.klass)})},
messageSends: ["parse:", "new"]}),
smalltalk.ROConfigParser.klass);


smalltalk.addClass('RODataParser', smalltalk.Object, ['rawData', 'token'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "asArray:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._token())._split_(aString))._reject_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(str).__eq("");
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})})))._collect_("trim");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray:",{aString:aString},smalltalk.RODataParser)})},
messageSends: ["collect:", "reject:", "=", "split:", "token"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asArray_(self["@rawData"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},smalltalk.RODataParser)})},
messageSends: ["asArray:"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "asTable",
fn: function (){
var self=this;
var cols;
function $ROTable(){return smalltalk.ROTable||(typeof ROTable=="undefined"?nil:ROTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
cols=self._columnize_(_st(_st(_st(self._newLineChar())._split_(self["@rawData"]))._reject_((function(line){
return smalltalk.withContext(function($ctx2) {
return _st(line).__eq("");
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1)})})))._collect_((function(line){
return smalltalk.withContext(function($ctx2) {
return self._asArray_(line);
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1)})})));
$1=_st($ROTable())._columns_(cols);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTable",{cols:cols},smalltalk.RODataParser)})},
messageSends: ["columnize:", "collect:", "asArray:", "reject:", "=", "split:", "newLineChar", "columns:"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "columnize:",
fn: function (rows){
var self=this;
var ncols,cols;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ncols=_st(_st(rows)._first())._size();
cols=_st($OrderedCollection())._new();
_st(ncols)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(cols)._add_(_st($OrderedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(rows)._do_((function(row){
return smalltalk.withContext(function($ctx2) {
return _st((1)._to_(ncols))._do_((function(i){
return smalltalk.withContext(function($ctx3) {
return _st(_st(cols)._at_(i))._add_(_st(row)._at_(i));
}, function($ctx3) {$ctx3.fillBlock({i:i},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1)})}));
$1=cols;
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnize:",{rows:rows,ncols:ncols,cols:cols},smalltalk.RODataParser)})},
messageSends: ["size", "first", "new", "timesRepeat:", "add:", "do:", "at:", "to:"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "inferToken",
fn: function (){
var self=this;
var inferedToken;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
inferedToken=_st(self._separators())._collect_thenSelect_((function(t){
return smalltalk.withContext(function($ctx2) {
return _st(t)._first();
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1)})}),(function(t){
return smalltalk.withContext(function($ctx2) {
return _st(self["@rawData"])._includes_(t);
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1)})}));
inferedToken=_st(inferedToken)._asOrderedCollection();
$1=_st(_st(inferedToken)._size()).__eq((1));
if(! smalltalk.assert($1)){
_st(inferedToken)._remove_(" "._first());
$2=_st(_st(inferedToken)._size()).__eq((1));
if(! smalltalk.assert($2)){
self._error_("Could not find a delimiter");
};
};
$3=_st(_st(inferedToken)._first())._asString();
return $3;
}, function($ctx1) {$ctx1.fill(self,"inferToken",{inferedToken:inferedToken},smalltalk.RODataParser)})},
messageSends: ["collect:thenSelect:", "first", "includes:", "separators", "asOrderedCollection", "ifFalse:", "remove:", "error:", "=", "size", "asString"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "newLineChar",
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._lf();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLineChar",{},smalltalk.RODataParser)})},
messageSends: ["lf"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rawData"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData",{},smalltalk.RODataParser)})},
messageSends: []}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawData"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"rawData:",{aString:aString},smalltalk.RODataParser)})},
messageSends: []}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "separator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._token();
return $1;
}, function($ctx1) {$ctx1.fill(self,"separator",{},smalltalk.RODataParser)})},
messageSends: ["token"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "separators",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[" ",",",";","\x09","&"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"separators",{},smalltalk.RODataParser)})},
messageSends: []}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "token",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@token"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@token"]=self._inferToken();
$1=self["@token"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"token",{},smalltalk.RODataParser)})},
messageSends: ["ifNil:", "inferToken"]}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@token"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.RODataParser)})},
messageSends: []}),
smalltalk.RODataParser);


smalltalk.addMethod(
smalltalk.method({
selector: "rawData:withToken:",
fn: function (aString,token){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._rawData_(aString);
$3=_st($2)._token_(token);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData:withToken:",{aString:aString,token:token},smalltalk.RODataParser.klass)})},
messageSends: ["rawData:", "new", "token:"]}),
smalltalk.RODataParser.klass);


smalltalk.addClass('RODataParserTest', smalltalk.TestCase, ['data'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "testAsTable",
fn: function (){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
str="1,1\x0a2,3\x0a4,6";
return self}, function($ctx1) {$ctx1.fill(self,"testAsTable",{str:str},smalltalk.RODataParserTest)})},
messageSends: []}),
smalltalk.RODataParserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCSV",
fn: function (){
var self=this;
var str,token;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
token=",";
str="1,4,9,2,23,45,63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asOrderedCollection()).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection()));
str="1,4,9,2,23,45,63,";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asOrderedCollection()).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection()));
str=",1,4,9,2,23,45,63,";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asOrderedCollection()).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testCSV",{str:str,token:token},smalltalk.RODataParserTest)})},
messageSends: ["rawData:withToken:", "assert:", "=", "asOrderedCollection"]}),
smalltalk.RODataParserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInferSeparator",
fn: function (){
var self=this;
var str;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str="1,4,9,2,23,45,63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq(","));
str="1 4 9 2 23 45 63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq(" "));
str="1\x094\x099\x092\x0923\x0945\x0963";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq("\x09"));
str="1;4;9;2;23;45;63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq(";"));
str="1&4&9&2&23&45&63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq("&"));
str="1 & 4 & 9 & 2 & 23 & 45 & 63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq("&"));
return self}, function($ctx1) {$ctx1.fill(self,"testInferSeparator",{str:str},smalltalk.RODataParserTest)})},
messageSends: ["rawData:withToken:", "assert:", "=", "separator"]}),
smalltalk.RODataParserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSpaceToken",
fn: function (){
var self=this;
var str,token;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
token=" ";
str="1 4 9 2 23 45 63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asOrderedCollection()).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection()));
str="1 4 9 2 23 45 63 ";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asOrderedCollection()).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection()));
str=" 1 4 9 2 23 45 63 ";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
self._assert_(_st(_st(self["@data"])._asOrderedCollection()).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection()));
return self}, function($ctx1) {$ctx1.fill(self,"testSpaceToken",{str:str,token:token},smalltalk.RODataParserTest)})},
messageSends: ["rawData:withToken:", "assert:", "=", "asOrderedCollection"]}),
smalltalk.RODataParserTest);



smalltalk.addClass('ROPlot', smalltalk.Object, ['url', 'drawBlock', 'table', 'token'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "drawBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@drawBlock"]=aBlock;
$1=self._isReadyToPlot();
if(smalltalk.assert($1)){
self._plot();
};
return self}, function($ctx1) {$ctx1.fill(self,"drawBlock:",{aBlock:aBlock},smalltalk.ROPlot)})},
messageSends: ["ifTrue:", "plot", "isReadyToPlot"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(self["@url"],smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(rawData){
return smalltalk.withContext(function($ctx2) {
return self._fromText_(rawData);
}, function($ctx2) {$ctx2.fillBlock({rawData:rawData},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"fetchData",{},smalltalk.ROPlot)})},
messageSends: ["ajax:options:", "->", "fromText:", "alert:"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "fromText:",
fn: function (aString){
var self=this;
var splittedData,chartSpecString,dataString;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $ROConfigParser(){return smalltalk.ROConfigParser||(typeof ROConfigParser=="undefined"?nil:ROConfigParser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
splittedData=_st(self._specAndDataSeparator())._split_(aString);
$1=_st(_st(splittedData)._size()).__eq((1));
if(smalltalk.assert($1)){
self._table_(_st(_st($RODataParser())._rawData_withToken_(aString,self["@token"]))._asTable());
} else {
$2=_st(_st(splittedData)._size()).__eq((2));
if(smalltalk.assert($2)){
chartSpecString=_st(splittedData)._first();
chartSpecString;
dataString=_st(splittedData)._second();
dataString;
self._drawBlock_(_st(_st($ROConfigParser())._parse_(chartSpecString))._block());
self._table_(_st(_st($RODataParser())._rawData_withToken_(dataString,self["@token"]))._asTable());
} else {
self._error_("File without proper structure");
};
};
return self}, function($ctx1) {$ctx1.fill(self,"fromText:",{aString:aString,splittedData:splittedData,chartSpecString:chartSpecString,dataString:dataString},smalltalk.ROPlot)})},
messageSends: ["split:", "specAndDataSeparator", "ifTrue:ifFalse:", "table:", "asTable", "rawData:withToken:", "first", "second", "drawBlock:", "block", "parse:", "error:", "=", "size"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "isReadyToPlot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@table"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@drawBlock"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isReadyToPlot",{},smalltalk.ROPlot)})},
messageSends: ["and:", "notNil"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diagram=_st($GETDiagramBuilder())._new();
_st(self["@drawBlock"])._value_value_(diagram,self["@table"]);
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"plot",{diagram:diagram},smalltalk.ROPlot)})},
messageSends: ["new", "value:value:", "open"]}),
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
selector: "specAndDataSeparator",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "--";
}, function($ctx1) {$ctx1.fill(self,"specAndDataSeparator",{},smalltalk.ROPlot)})},
messageSends: []}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "table:",
fn: function (aROTable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@table"]=aROTable;
$1=self._isReadyToPlot();
if(smalltalk.assert($1)){
self._plot();
};
return self}, function($ctx1) {$ctx1.fill(self,"table:",{aROTable:aROTable},smalltalk.ROPlot)})},
messageSends: ["ifTrue:", "plot", "isReadyToPlot"]}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@token"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.ROPlot)})},
messageSends: []}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=self._processDropboxURL_(aString);
self._fetchData();
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROPlot)})},
messageSends: ["processDropboxURL:", "fetchData"]}),
smalltalk.ROPlot);


smalltalk.addMethod(
smalltalk.method({
selector: "OLDexample",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"OLDexample",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "plot"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "OLDexample2",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv");
_st($1)._token_(",");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"OLDexample2",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "token:", "plot"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "OLDexample3",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"OLDexample3",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "plot"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "block1",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=(function(diagram,table){
return smalltalk.withContext(function($ctx2) {
$2=_st(diagram)._verticalBarDiagram();
_st($2)._models_(_st(table)._dataFromColumn_("NC"));
_st($2)._y_("yourself");
_st($2)._color_(_st($Color())._paleBlue());
_st($2)._regularAxis();
$3=_st($2)._yAxisLabel_("NC");
return $3;
}, function($ctx2) {$ctx2.fillBlock({diagram:diagram,table:table},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"block1",{},smalltalk.ROPlot.klass)})},
messageSends: ["models:", "dataFromColumn:", "verticalBarDiagram", "y:", "color:", "paleBlue", "regularAxis", "yAxisLabel:"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "data1",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "bench. & NC & NNEC\x0a1 & 643603 & 151665\x0a2 & 13 & 12\x0a3 & 78977 & 34912\x0a4 & 1690 & 512\x0a5 & 3551 & 2009\x0a6 & 96 & 44\x0a7 & 644 & 218\x0a8 & 2 & 0\x0a9 & 158399 & 58333\x0a10 & 1432306 & 14891\x0a11 & 6839 & 2058\x0a12 & 7870 & 3472\x0a13 & 108571 & 57590\x0a14 & 10305 & 586\x0a15 & 20815 & 14886\x0a16 & 766 & 172\x0a17 & 1203 & 880\x0atotal & 2475650 & 342240";
}, function($ctx1) {$ctx1.fill(self,"data1",{},smalltalk.ROPlot.klass)})},
messageSends: []}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example1",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv");
$2=_st($1)._drawBlock_(self._block1());
return self}, function($ctx1) {$ctx1.fill(self,"example1",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new", "drawBlock:", "block1"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example1a",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._fromText_(self._data1());
$2=_st($1)._drawBlock_(self._block1());
return self}, function($ctx1) {$ctx1.fill(self,"example1a",{},smalltalk.ROPlot.klass)})},
messageSends: ["fromText:", "data1", "new", "drawBlock:", "block1"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example1b",
fn: function (){
var self=this;
function $ROTableTest(){return smalltalk.ROTableTest||(typeof ROTableTest=="undefined"?nil:ROTableTest)}
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._table_(_st(_st($RODataParser())._rawData_withToken_(_st($ROTableTest())._data2(),"&"))._asTable());
$2=_st($1)._drawBlock_(self._block1());
return self}, function($ctx1) {$ctx1.fill(self,"example1b",{},smalltalk.ROPlot.klass)})},
messageSends: ["table:", "asTable", "rawData:withToken:", "data2", "new", "drawBlock:", "block1"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROPlot())._new())._url_("https://www.dropbox.com/s/yweot8dvr74hmje/verticalBar.txt");
return self}, function($ctx1) {$ctx1.fill(self,"example2",{},smalltalk.ROPlot.klass)})},
messageSends: ["url:", "new"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example2a",
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROPlot())._new())._fromText_(self._verticalBar());
return self}, function($ctx1) {$ctx1.fill(self,"example2a",{},smalltalk.ROPlot.klass)})},
messageSends: ["fromText:", "verticalBar", "new"]}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="\x0a{\x0a\x09\x22type\x22 : \x22verticalBar\x22,\x0a\x09\x22values\x22 : \x22NC\x22,\x0a\x09\x22y\x22 : \x22[:x | x * 2 ]\x22,\x0a\x09\x22color\x22: \x22brown\x22,\x0a\x09\x22axis\x22: \x22regularAxis\x22\x0a}\x0a---".__comma(self._data1());
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalBar",{},smalltalk.ROPlot.klass)})},
messageSends: [",", "data1"]}),
smalltalk.ROPlot.klass);


smalltalk.addClass('ROTable', smalltalk.Object, ['columns', 'header'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "checkForHeader",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._row_((1)))._inject_into_(true,(function(bool,element){
return smalltalk.withContext(function($ctx2) {
return _st(bool)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(element)._isString();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({bool:bool,element:element},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"checkForHeader",{},smalltalk.ROTable)})},
messageSends: ["inject:into:", "and:", "isString", "row:"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "col:row:",
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._row_(j))._at_(i);
return $1;
}, function($ctx1) {$ctx1.fill(self,"col:row:",{i:i,j:j},smalltalk.ROTable)})},
messageSends: ["at:", "row:"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "column:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._process_(_st(_st(self["@columns"])._at_(index))._copy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"column:",{index:index},smalltalk.ROTable)})},
messageSends: ["process:", "copy", "at:"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "columnTitled:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasHeader();
if(! smalltalk.assert($1)){
self._error_("This table does not have header");
};
$2=self._column_(_st(self["@header"])._indexOf_(aString));
return $2;
}, function($ctx1) {$ctx1.fill(self,"columnTitled:",{aString:aString},smalltalk.ROTable)})},
messageSends: ["ifFalse:", "error:", "hasHeader", "column:", "indexOf:"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "columns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._process_(_st(self["@columns"])._copy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns",{},smalltalk.ROTable)})},
messageSends: ["process:", "copy"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@columns"]=aCollection;
$1=self._checkForHeader();
if(smalltalk.assert($1)){
self._withHeader();
};
$2=self;
return $2;
}, function($ctx1) {$ctx1.fill(self,"columns:",{aCollection:aCollection},smalltalk.ROTable)})},
messageSends: ["ifTrue:", "withHeader", "checkForHeader"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFromColumn:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._columnTitled_(aString);
_st($2)._removeFirst();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataFromColumn:",{aString:aString},smalltalk.ROTable)})},
messageSends: ["removeFirst", "columnTitled:", "yourself"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "hasHeader",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@header"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasHeader",{},smalltalk.ROTable)})},
messageSends: ["notNil"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "header",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@header"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"header",{},smalltalk.ROTable)})},
messageSends: ["copy"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "process:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(anArray)._collect_((function(d){
var newD;
return smalltalk.withContext(function($ctx2) {
$2=_st(d)._isNumeric();
if(smalltalk.assert($2)){
newD=_st(d)._asNumber();
newD;
} else {
newD=d;
newD;
};
return newD;
}, function($ctx2) {$ctx2.fillBlock({d:d,newD:newD},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"process:",{anArray:anArray},smalltalk.ROTable)})},
messageSends: ["collect:", "ifTrue:ifFalse:", "asNumber", "isNumeric"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "row:",
fn: function (index){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
i=index;
$1=self._hasHeader();
if(smalltalk.assert($1)){
i=_st(i).__plus((1));
i;
};
$2=self._process_(_st(self["@columns"])._collect_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(c)._at_(i);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})})));
return $2;
}, function($ctx1) {$ctx1.fill(self,"row:",{index:index,i:i},smalltalk.ROTable)})},
messageSends: ["ifTrue:", "+", "hasHeader", "process:", "collect:", "at:"]}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "withHeader",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasHeader();
if(! smalltalk.assert($1)){
self["@header"]=self._row_((1));
self["@header"];
};
return self}, function($ctx1) {$ctx1.fill(self,"withHeader",{},smalltalk.ROTable)})},
messageSends: ["ifFalse:", "row:", "hasHeader"]}),
smalltalk.ROTable);


smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._columns_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns:",{aCollection:aCollection},smalltalk.ROTable.klass)})},
messageSends: ["columns:", "new"]}),
smalltalk.ROTable.klass);


smalltalk.addClass('ROTableTest', smalltalk.TestCase, [], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp1",
fn: function (){
var self=this;
var str;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data1();
self["@table"]=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
return self}, function($ctx1) {$ctx1.fill(self,"setUp1",{str:str},smalltalk.ROTableTest)})},
messageSends: ["data1", "class", "asTable", "rawData:withToken:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp2",
fn: function (){
var self=this;
var str;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
self["@table"]=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
return self}, function($ctx1) {$ctx1.fill(self,"setUp2",{str:str},smalltalk.ROTableTest)})},
messageSends: ["data2", "class", "asTable", "rawData:withToken:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCheckHeader",
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
self._deny_(_st(table)._hasHeader());
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
self._setUp2();
self._assert_(_st(table)._hasHeader());
return self}, function($ctx1) {$ctx1.fill(self,"testCheckHeader",{str:str,table:table},smalltalk.ROTableTest)})},
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "deny:", "hasHeader", "data2", "setUp2", "assert:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColRow",
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
self._assert_(_st(_st(table)._col_row_((1),(1))).__eq((1)));
self._assert_(_st(_st(table)._col_row_((2),(3))).__eq((6)));
self._assert_(_st(_st(table)._col_row_((2),(2))).__eq((3)));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((3),(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((1),(5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testColRow",{str:str,table:table},smalltalk.ROTableTest)})},
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "assert:", "=", "col:row:", "should:raise:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColRow2",
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
self._assert_(_st(_st(table)._col_row_((1),(11))).__eq((11)));
self._assert_(_st(_st(table)._col_row_((2),(1))).__eq((643603)));
self._assert_(_st(_st(table)._col_row_((3),(14))).__eq((586)));
self._assert_(_st(_st(table)._col_row_((2),(10))).__eq((1432306)));
self._assert_(_st(_st(table)._col_row_((1),(18))).__eq("total"));
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((4),(1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((1),(19));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testColRow2",{str:str,table:table},smalltalk.ROTableTest)})},
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "assert:", "=", "col:row:", "should:raise:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColumn",
fn: function (){
var self=this;
var str,col1,col2,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
col1=[(1), (2), (4)]._asOrderedCollection();
col2=[(1), (3), (6)]._asOrderedCollection();
self._assert_(_st(_st(table)._column_((1))).__eq(col1));
self._assert_(_st(_st(table)._column_((2))).__eq(col2));
return self}, function($ctx1) {$ctx1.fill(self,"testColumn",{str:str,col1:col1,col2:col2,table:table},smalltalk.ROTableTest)})},
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "asOrderedCollection", "assert:", "=", "column:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDataFrom",
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
self._assert_(_st(_st(_st(table)._columnTitled_("bench."))._asArray()).__eq(["bench.", (1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13), (14), (15), (16), (17), "total"]));
self._assert_(_st(_st(_st(table)._dataFromColumn_("bench."))._asArray()).__eq([(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13), (14), (15), (16), (17), "total"]));
return self}, function($ctx1) {$ctx1.fill(self,"testDataFrom",{str:str,table:table},smalltalk.ROTableTest)})},
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "assert:", "=", "asArray", "columnTitled:", "dataFromColumn:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRow",
fn: function (){
var self=this;
var row1,row2,row3,str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
row1=[(1), (1)]._asOrderedCollection();
row2=[(2), (3)]._asOrderedCollection();
row3=[(4), (6)]._asOrderedCollection();
self._assert_(_st(_st(table)._row_((1))).__eq(row1));
self._assert_(_st(_st(table)._row_((2))).__eq(row2));
self._assert_(_st(_st(table)._row_((3))).__eq(row3));
return self}, function($ctx1) {$ctx1.fill(self,"testRow",{row1:row1,row2:row2,row3:row3,str:str,table:table},smalltalk.ROTableTest)})},
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "asOrderedCollection", "assert:", "=", "row:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRow2",
fn: function (){
var self=this;
var str,row1,row5,row10,row17,row18,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
row1=[(1), (643603), (151665)]._asOrderedCollection();
row5=[(5), (3551), (2009)]._asOrderedCollection();
row10=[(10), (1432306), (14891)]._asOrderedCollection();
row17=[(17), (1203), (880)]._asOrderedCollection();
row18=["total", (2475650), (342240)]._asOrderedCollection();
self._assert_(_st(_st(table)._row_((1))).__eq(row1));
self._assert_(_st(_st(table)._row_((5))).__eq(row5));
self._assert_(_st(_st(table)._row_((10))).__eq(row10));
self._assert_(_st(_st(table)._row_((17))).__eq(row17));
self._assert_(_st(_st(table)._row_((18))).__eq(row18));
return self}, function($ctx1) {$ctx1.fill(self,"testRow2",{str:str,row1:row1,row5:row5,row10:row10,row17:row17,row18:row18,table:table},smalltalk.ROTableTest)})},
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "asOrderedCollection", "assert:", "=", "row:"]}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithHeader",
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
self._assert_(_st(table)._hasHeader());
self._assert_(_st(_st(_st(table)._header())._asArray()).__eq(["bench.", "NC", "NNEC"]));
return self}, function($ctx1) {$ctx1.fill(self,"testWithHeader",{str:str,table:table},smalltalk.ROTableTest)})},
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "assert:", "hasHeader", "=", "asArray", "header"]}),
smalltalk.ROTableTest);


smalltalk.addMethod(
smalltalk.method({
selector: "data1",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "1,1\x0a2,3\x0a4,6";
}, function($ctx1) {$ctx1.fill(self,"data1",{},smalltalk.ROTableTest.klass)})},
messageSends: []}),
smalltalk.ROTableTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "data2",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "bench. & NC & NNEC\x0a1 & 643603 & 151665\x0a2 & 13 & 12\x0a3 & 78977 & 34912\x0a4 & 1690 & 512\x0a5 & 3551 & 2009\x0a6 & 96 & 44\x0a7 & 644 & 218\x0a8 & 2 & 0\x0a9 & 158399 & 58333\x0a10 & 1432306 & 14891\x0a11 & 6839 & 2058\x0a12 & 7870 & 3472\x0a13 & 108571 & 57590\x0a14 & 10305 & 586\x0a15 & 20815 & 14886\x0a16 & 766 & 172\x0a17 & 1203 & 880\x0atotal & 2475650 & 342240";
}, function($ctx1) {$ctx1.fill(self,"data2",{},smalltalk.ROTableTest.klass)})},
messageSends: []}),
smalltalk.ROTableTest.klass);


