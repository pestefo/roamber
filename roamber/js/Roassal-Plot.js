define("roamber/Roassal-Plot", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('Roassal-Plot');
smalltalk.packages["Roassal-Plot"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('ROConfigParser', smalltalk.Object, ['drawBlock', 'typeChartDict', 'jsonObj'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "asString",
category: 'command',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@drawBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.ROConfigParser)})},
args: [],
source: "asString\x0a\x09^ drawBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "block",
category: 'command',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._drawBlock();
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.ROConfigParser)})},
args: [],
source: "block\x0a\x09^ self drawBlock",
messageSends: ["drawBlock"],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "buildBlock",
category: 'command',
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
args: [],
source: "buildBlock\x0a\x09|str|\x0a\x09str := ' [:d :t | \x0a\x09d '.\x0a\x09str := self parseTypeDiagram: str.\x0a\x09str := self parseValues: str.\x0a\x09str := self parseY: str.\x0a\x09str := self parseAxis: str.\x0a\x09str := self parseColor: str.\x09\x0a\x09str := str,']'.\x0a\x09\x0a\x09^ str",
messageSends: ["parseTypeDiagram:", "parseValues:", "parseY:", "parseAxis:", "parseColor:", ","],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBlock",
category: 'command',
fn: function (){
var self=this;
function $Compiler(){return smalltalk.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($Compiler())._new())._evaluateExpression_(self["@drawBlock"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawBlock",{},smalltalk.ROConfigParser)})},
args: [],
source: "drawBlock\x0a\x22\x09^ Compiler evaluate: drawBlock\x22\x0a\x09^ Compiler new evaluateExpression: drawBlock",
messageSends: ["evaluateExpression:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "initDiagramDict",
category: 'command',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2="verticalBar".__minus_gt("verticalBarDiagram");
$ctx1.sendIdx["->"]=1;
$1=[$2,"horizontalBar".__minus_gt("horizontalBarDiagram")];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initDiagramDict",{},smalltalk.ROConfigParser)})},
args: [],
source: "initDiagramDict\x0a\x09^ { \x0a\x09'verticalBar' -> 'verticalBarDiagram'.\x0a\x09'horizontalBar' -> 'horizontalBarDiagram'\x0a\x22\x09'scatter' -> 'scatterplot'.\x0a\x09'line' -> 'lineDiagram'.\x0a\x09'line' -> 'ordinaryLineDiagram'.\x0a\x09'pie' -> 'pieDiagram'.\x0a\x09'composite' -> 'compositeDiagram'.\x22\x0a\x09 }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'command',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROConfigParser.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@typeChartDict"]=_st(self._initDiagramDict())._asDictionary();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROConfigParser)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09typeChartDict := self initDiagramDict asDictionary.",
messageSends: ["initialize", "asDictionary", "initDiagramDict"],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonParse:",
category: 'command',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(jQuery)._parseJSON_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonParse:",{aString:aString},smalltalk.ROConfigParser)})},
args: ["aString"],
source: "jsonParse: aString\x0a\x22\x09^ NeoJSONReaderWrapper fromString: aString.\x22\x0a\x09^ jQuery parseJSON: aString",
messageSends: ["parseJSON:"],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'command',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@jsonObj"]=self._jsonParse_(aString);
self["@drawBlock"]=self._buildBlock();
return self}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ROConfigParser)})},
args: ["aString"],
source: "parse: aString \x0a\x09jsonObj := self jsonParse: aString.\x0a\x09\x0a\x09drawBlock := self buildBlock.",
messageSends: ["jsonParse:", "buildBlock"],
referencedClasses: []
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseAxis:",
category: 'command',
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(str).__comma(_st(self["@jsonObj"])._axis())).__comma(";");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(_st($String())._cr());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseAxis:",{str:str},smalltalk.ROConfigParser)})},
args: ["str"],
source: "parseAxis: str\x0a\x09^ str,(jsonObj axis),';',(String cr).",
messageSends: [",", "axis", "cr"],
referencedClasses: ["String"]
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseColor:",
category: 'command',
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(_st(str).__comma("color: Color ")).__comma(_st(self["@jsonObj"])._color());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma("");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(_st($String())._cr());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseColor:",{str:str},smalltalk.ROConfigParser)})},
args: ["str"],
source: "parseColor: str\x0a\x09^ str,'color: Color ',(jsonObj color),'',(String cr)",
messageSends: [",", "color", "cr"],
referencedClasses: ["String"]
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseTypeDiagram:",
category: 'command',
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(str).__comma(_st(self["@typeChartDict"])._at_(_st(self["@jsonObj"])._type()))).__comma(_st($String())._cr());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseTypeDiagram:",{str:str},smalltalk.ROConfigParser)})},
args: ["str"],
source: "parseTypeDiagram: str\x0a\x09^ str,(typeChartDict  at: (jsonObj type)),(String cr).",
messageSends: [",", "at:", "type", "cr"],
referencedClasses: ["String"]
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseValues:",
category: 'command',
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(_st(str).__comma("models: (t dataFromColumn:'")).__comma(_st(self["@jsonObj"])._values());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma("');");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(_st($String())._cr());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseValues:",{str:str},smalltalk.ROConfigParser)})},
args: ["str"],
source: "parseValues: str\x0a\x09^ str,'models: (t dataFromColumn:''',(jsonObj values),''');',(String cr).",
messageSends: [",", "values", "cr"],
referencedClasses: ["String"]
}),
smalltalk.ROConfigParser);

smalltalk.addMethod(
smalltalk.method({
selector: "parseY:",
category: 'command',
fn: function (str){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(_st(str).__comma("y: ")).__comma(_st(self["@jsonObj"])._y());
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(";");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(_st($String())._cr());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parseY:",{str:str},smalltalk.ROConfigParser)})},
args: ["str"],
source: "parseY: str\x0a\x09^ str,'y: ',(jsonObj y),';',(String cr)",
messageSends: [",", "y", "cr"],
referencedClasses: ["String"]
}),
smalltalk.ROConfigParser);


smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._parse_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.ROConfigParser.klass)})},
args: ["aString"],
source: "parse: aString \x0a\x09^ self new parse: aString",
messageSends: ["parse:", "new"],
referencedClasses: []
}),
smalltalk.ROConfigParser.klass);


smalltalk.addClass('RODataParser', smalltalk.Object, ['rawData', 'token'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "asArray:",
category: 'as yet unclassified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._token())._split_(aString))._reject_((function(str){
return smalltalk.withContext(function($ctx2) {
return _st(str).__eq("");
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})})))._collect_("trim");
return $1;
}, function($ctx1) {$ctx1.fill(self,"asArray:",{aString:aString},smalltalk.RODataParser)})},
args: ["aString"],
source: "asArray: aString\x0a\x09^ (((self token split: aString) \x0a\x09\x09reject: [:str | str = ''])\x0a\x09\x09collect:#trim )",
messageSends: ["collect:", "reject:", "split:", "token", "="],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "asOrderedCollection",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asArray_(self["@rawData"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{},smalltalk.RODataParser)})},
args: [],
source: "asOrderedCollection\x0a\x09^  self asArray: rawData",
messageSends: ["asArray:"],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "asTable",
category: 'as yet unclassified',
fn: function (){
var self=this;
var cols;
function $ROTable(){return smalltalk.ROTable||(typeof ROTable=="undefined"?nil:ROTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
cols=self._columnize_(_st(_st(_st(self._newLineChar())._split_(self["@rawData"]))._reject_((function(line){
return smalltalk.withContext(function($ctx2) {
return _st(line).__eq("");
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1,1)})})))._collect_((function(line){
return smalltalk.withContext(function($ctx2) {
return self._asArray_(line);
}, function($ctx2) {$ctx2.fillBlock({line:line},$ctx1,2)})})));
$1=_st($ROTable())._columns_(cols);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTable",{cols:cols},smalltalk.RODataParser)})},
args: [],
source: "asTable\x0a\x09| cols |\x0a\x09cols := self columnize: (((self newLineChar split: rawData ) reject: [:line | line = '' ]) collect: [ :line |\x0a\x0a\x09\x09self asArray: line.\x0a\x09\x09]).\x0a\x0a\x09^ ROTable columns: cols.",
messageSends: ["columnize:", "collect:", "reject:", "split:", "newLineChar", "=", "asArray:", "columns:"],
referencedClasses: ["ROTable"]
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "columnize:",
category: 'as yet unclassified',
fn: function (rows){
var self=this;
var ncols,cols;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
ncols=_st(_st(rows)._first())._size();
cols=_st($OrderedCollection())._new();
$ctx1.sendIdx["new"]=1;
_st(ncols)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(cols)._add_(_st($OrderedCollection())._new());
$ctx2.sendIdx["add:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(rows)._do_((function(row){
return smalltalk.withContext(function($ctx2) {
return _st((1)._to_(ncols))._do_((function(i){
return smalltalk.withContext(function($ctx3) {
$1=_st(cols)._at_(i);
$ctx3.sendIdx["at:"]=1;
return _st($1)._add_(_st(row)._at_(i));
}, function($ctx3) {$ctx3.fillBlock({i:i},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=1;
$2=cols;
return $2;
}, function($ctx1) {$ctx1.fill(self,"columnize:",{rows:rows,ncols:ncols,cols:cols},smalltalk.RODataParser)})},
args: ["rows"],
source: "columnize: rows\x0a \x09\x22It receives a collection of rows\x22\x0a\x09| ncols cols|\x0a\x09ncols := rows first size.\x0a\x09cols := OrderedCollection new.\x0a\x09ncols timesRepeat: [cols add: (OrderedCollection new)].\x0a\x0a\x09rows do: [:row | \x0a\x09\x09(1 to: ncols) do: [:i |\x0a\x09\x09\x09(cols at: i) add: (row at: i) \x0a\x09\x09]].\x0a\x09\x0a\x09^ cols",
messageSends: ["size", "first", "new", "timesRepeat:", "add:", "do:", "to:", "at:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "inferToken",
category: 'as yet unclassified',
fn: function (){
var self=this;
var inferedToken;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5,$6;
inferedToken=_st(self._separators())._collect_thenSelect_((function(t){
return smalltalk.withContext(function($ctx2) {
return _st(t)._first();
$ctx2.sendIdx["first"]=1;
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1,1)})}),(function(t){
return smalltalk.withContext(function($ctx2) {
return _st(self["@rawData"])._includes_(t);
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1,2)})}));
inferedToken=_st(inferedToken)._asOrderedCollection();
$2=_st(inferedToken)._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__eq((1));
$ctx1.sendIdx["="]=1;
if(! smalltalk.assert($1)){
$3=inferedToken;
$4=" "._first();
$ctx1.sendIdx["first"]=2;
_st($3)._remove_($4);
$5=_st(_st(inferedToken)._size()).__eq((1));
if(! smalltalk.assert($5)){
self._error_("Could not find a delimiter");
};
};
$6=_st(_st(inferedToken)._first())._asString();
return $6;
}, function($ctx1) {$ctx1.fill(self,"inferToken",{inferedToken:inferedToken},smalltalk.RODataParser)})},
args: [],
source: "inferToken\x0a\x09|inferedToken|\x0a\x09inferedToken := self separators collect: [ :t | t first ] thenSelect: [ :t | rawData includes: t ].\x0a\x09inferedToken := inferedToken asOrderedCollection.\x0a\x09\x22 Checking we have just one delimiter \x22\x0a\x09(inferedToken size = 1 )\x0a\x09\x09\x22 In case we have two delimiters, probably we catched a space and another delimiter\x22\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09inferedToken remove: (' ' first).\x0a\x09\x09\x09(inferedToken size = 1) \x0a\x09\x09\x09\x09ifFalse: [ self error: 'Could not find a delimiter' \x0a\x09\x09].\x0a\x09].\x0a\x09^ inferedToken first asString.",
messageSends: ["collect:thenSelect:", "separators", "first", "includes:", "asOrderedCollection", "ifFalse:", "=", "size", "remove:", "error:", "asString"],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "newLineChar",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._lf();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLineChar",{},smalltalk.RODataParser)})},
args: [],
source: "newLineChar\x0a\x09^ \x0a\x09\x22String cr \x22\x0a\x09 String lf",
messageSends: ["lf"],
referencedClasses: ["String"]
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rawData"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rawData",{},smalltalk.RODataParser)})},
args: [],
source: "rawData\x0a\x09^ rawData",
messageSends: [],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "rawData:",
category: 'as yet unclassified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rawData"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"rawData:",{aString:aString},smalltalk.RODataParser)})},
args: ["aString"],
source: "rawData: aString\x0a\x09rawData := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "separator",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._token();
return $1;
}, function($ctx1) {$ctx1.fill(self,"separator",{},smalltalk.RODataParser)})},
args: [],
source: "separator\x0a\x09^ self token",
messageSends: ["token"],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "separators",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[" ",",",";","\x09","&"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"separators",{},smalltalk.RODataParser)})},
args: [],
source: "separators\x0a\x09^ { \x0a\x09' '.   \x22 single space \x22\x0a\x09','.   \x22 comma \x22\x0a\x09';'.   \x22 semicolon \x22\x0a\x09'\x09'.  \x22 tab \x22 \x0a\x09'&' \x09 \x22 latex table \x22\x09\x0a\x09}.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "token",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@token"];
if(($receiver = $2) == nil || $receiver == null){
self["@token"]=self._inferToken();
$1=self["@token"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"token",{},smalltalk.RODataParser)})},
args: [],
source: "token\x0a\x09^ token ifNil: [ token := self inferToken ]",
messageSends: ["ifNil:", "inferToken"],
referencedClasses: []
}),
smalltalk.RODataParser);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
category: 'as yet unclassified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@token"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.RODataParser)})},
args: ["aString"],
source: "token: aString\x09\x0a\x09token := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.RODataParser);


smalltalk.addMethod(
smalltalk.method({
selector: "rawData:withToken:",
category: 'as yet unclassified',
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
args: ["aString", "token"],
source: "rawData: aString withToken: token\x0a\x09^ self new \x0a\x09\x09rawData: aString; \x0a\x09\x09token: token",
messageSends: ["rawData:", "new", "token:"],
referencedClasses: []
}),
smalltalk.RODataParser.klass);


smalltalk.addClass('RODataParserTest', smalltalk.TestCase, ['data'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "testAsTable",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
str="1,1\x0a2,3\x0a4,6";
return self}, function($ctx1) {$ctx1.fill(self,"testAsTable",{str:str},smalltalk.RODataParserTest)})},
args: [],
source: "testAsTable\x0a\x09| str |\x0a\x09str := '1,1\x0a2,3\x0a4,6'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RODataParserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCSV",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,token;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$6,$4,$8,$7;
token=",";
str="1,4,9,2,23,45,63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
$ctx1.sendIdx["rawData:withToken:"]=1;
$2=_st(self["@data"])._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=1;
$3=["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=2;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
str="1,4,9,2,23,45,63,";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
$ctx1.sendIdx["rawData:withToken:"]=2;
$5=_st(self["@data"])._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=3;
$6=["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=4;
$4=_st($5).__eq($6);
$ctx1.sendIdx["="]=2;
self._assert_($4);
$ctx1.sendIdx["assert:"]=2;
str=",1,4,9,2,23,45,63,";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
$8=_st(self["@data"])._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=5;
$7=_st($8).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection());
self._assert_($7);
return self}, function($ctx1) {$ctx1.fill(self,"testCSV",{str:str,token:token},smalltalk.RODataParserTest)})},
args: [],
source: "testCSV\x0a\x09|str token|\x0a\x09token := ','.\x0a\x09\x0a\x09str :=  '1,4,9,2,23,45,63'.\x0a\x09data := RODataParser rawData: str withToken: token.\x0a\x09self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.\x0a\x09\x0a\x09str :=  '1,4,9,2,23,45,63,'.\x0a\x09data := RODataParser rawData: str withToken: token.\x0a\x09self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.\x0a\x0a\x09str :=  ',1,4,9,2,23,45,63,'.\x0a\x09data := RODataParser rawData: str withToken: token.\x0a\x09self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.",
messageSends: ["rawData:withToken:", "assert:", "=", "asOrderedCollection"],
referencedClasses: ["RODataParser"]
}),
smalltalk.RODataParserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInferSeparator",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9;
str="1,4,9,2,23,45,63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
$ctx1.sendIdx["rawData:withToken:"]=1;
$2=_st(self["@data"])._separator();
$ctx1.sendIdx["separator"]=1;
$1=_st($2).__eq(",");
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
str="1 4 9 2 23 45 63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
$ctx1.sendIdx["rawData:withToken:"]=2;
$4=_st(self["@data"])._separator();
$ctx1.sendIdx["separator"]=2;
$3=_st($4).__eq(" ");
$ctx1.sendIdx["="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
str="1\x094\x099\x092\x0923\x0945\x0963";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
$ctx1.sendIdx["rawData:withToken:"]=3;
$6=_st(self["@data"])._separator();
$ctx1.sendIdx["separator"]=3;
$5=_st($6).__eq("\x09");
$ctx1.sendIdx["="]=3;
self._assert_($5);
$ctx1.sendIdx["assert:"]=3;
str="1;4;9;2;23;45;63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
$ctx1.sendIdx["rawData:withToken:"]=4;
$8=_st(self["@data"])._separator();
$ctx1.sendIdx["separator"]=4;
$7=_st($8).__eq(";");
$ctx1.sendIdx["="]=4;
self._assert_($7);
$ctx1.sendIdx["assert:"]=4;
str="1&4&9&2&23&45&63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
$ctx1.sendIdx["rawData:withToken:"]=5;
$10=_st(self["@data"])._separator();
$ctx1.sendIdx["separator"]=5;
$9=_st($10).__eq("&");
$ctx1.sendIdx["="]=5;
self._assert_($9);
$ctx1.sendIdx["assert:"]=5;
str="1 & 4 & 9 & 2 & 23 & 45 & 63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,nil);
self._assert_(_st(_st(self["@data"])._separator()).__eq("&"));
return self}, function($ctx1) {$ctx1.fill(self,"testInferSeparator",{str:str},smalltalk.RODataParserTest)})},
args: [],
source: "testInferSeparator\x0a\x09|str|\x0a\x09str :=  '1,4,9,2,23,45,63'.\x0a\x09data := RODataParser rawData: str withToken: nil.\x0a\x09self assert: data separator = ','.\x0a\x09\x0a\x09str :=  '1 4 9 2 23 45 63'.\x0a\x09data := RODataParser rawData: str withToken: nil.\x0a\x09self assert: data separator = ' '.\x0a\x09\x0a\x09str :=  '1\x094\x099\x092\x0923\x0945\x0963'.\x0a\x09data := RODataParser rawData: str withToken: nil.\x0a\x09self assert: data separator = '\x09'.\x0a\x09\x0a\x09str :=  '1;4;9;2;23;45;63'.\x0a\x09data := RODataParser rawData: str withToken: nil.\x0a\x09self assert: data separator = ';'.\x0a\x09\x0a\x09str :=  '1&4&9&2&23&45&63'.\x0a\x09data := RODataParser rawData: str withToken: nil.\x0a\x09self assert: data separator = '&'.\x0a\x09\x0a\x09\x22If there is any space and other delimiter, we consider the other character as delimiter\x22\x0a\x09str :=  '1 & 4 & 9 & 2 & 23 & 45 & 63'.\x0a\x09data := RODataParser rawData: str withToken: nil.\x0a\x09self assert: data separator = '&'.",
messageSends: ["rawData:withToken:", "assert:", "=", "separator"],
referencedClasses: ["RODataParser"]
}),
smalltalk.RODataParserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSpaceToken",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,token;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$6,$4,$8,$7;
token=" ";
str="1 4 9 2 23 45 63";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
$ctx1.sendIdx["rawData:withToken:"]=1;
$2=_st(self["@data"])._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=1;
$3=["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=2;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
str="1 4 9 2 23 45 63 ";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
$ctx1.sendIdx["rawData:withToken:"]=2;
$5=_st(self["@data"])._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=3;
$6=["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=4;
$4=_st($5).__eq($6);
$ctx1.sendIdx["="]=2;
self._assert_($4);
$ctx1.sendIdx["assert:"]=2;
str=" 1 4 9 2 23 45 63 ";
self["@data"]=_st($RODataParser())._rawData_withToken_(str,token);
$8=_st(self["@data"])._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=5;
$7=_st($8).__eq(["1", "4", "9", "2", "23", "45", "63"]._asOrderedCollection());
self._assert_($7);
return self}, function($ctx1) {$ctx1.fill(self,"testSpaceToken",{str:str,token:token},smalltalk.RODataParserTest)})},
args: [],
source: "testSpaceToken\x0a\x09|str token|\x0a\x09token := ' '.\x0a\x09str :=  '1 4 9 2 23 45 63'.\x0a\x09\x0a\x09data := RODataParser rawData: str withToken: token.\x0a\x09self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.\x0a\x09\x0a\x09str :=  '1 4 9 2 23 45 63 '.\x0a\x09data := RODataParser rawData: str withToken: token.\x0a\x09self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.\x0a\x0a\x09str :=  ' 1 4 9 2 23 45 63 '.\x0a\x09data := RODataParser rawData: str withToken: token.\x0a\x09self assert: data asOrderedCollection = #('1' '4' '9' '2' '23' '45' '63') asOrderedCollection.",
messageSends: ["rawData:withToken:", "assert:", "=", "asOrderedCollection"],
referencedClasses: ["RODataParser"]
}),
smalltalk.RODataParserTest);



smalltalk.addClass('ROPlot', smalltalk.Object, ['url', 'drawBlock', 'table', 'token'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "drawBlock:",
category: 'accessing',
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
args: ["aBlock"],
source: "drawBlock: aBlock\x0a\x09drawBlock := aBlock.\x0a\x09\x0a\x09self isReadyToPlot ifTrue: [ self plot ]",
messageSends: ["ifTrue:", "isReadyToPlot", "plot"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "fetchData",
category: 'data',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$3;
$1=jQuery;
$2=self["@url"];
$4="accept".__minus_gt("text/plain");
$ctx1.sendIdx["->"]=1;
$5="type".__minus_gt("GET");
$ctx1.sendIdx["->"]=2;
$6="success".__minus_gt((function(data,txtStatus,xhr){
return smalltalk.withContext(function($ctx2) {
return self._fromText_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data,txtStatus:txtStatus,xhr:xhr},$ctx1,1)})}));
$ctx1.sendIdx["->"]=3;
$3=smalltalk.HashedCollection._from_([$4,$5,$6,"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("Request failed at:  ".__comma(self["@url"]));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))]);
_st($1)._ajax_options_($2,$3);
return self}, function($ctx1) {$ctx1.fill(self,"fetchData",{},smalltalk.ROPlot)})},
args: [],
source: "fetchData\x0a\x22\x0a  jQuery\x0a    ajax: url\x0a    options: #{\x0a        'type' -> 'GET' .\x0a       'success' -> [ :rawData | self fromText: rawData ] .\x0a        'error' -> [window alert: 'error']\x0a    }\x0a\x22\x09\x0ajQuery\x0a    ajax: url\x0a    options: #{\x0a\x09\x09'accept' -> 'text/plain'.\x0a        'type' -> 'GET'. \x0a       'success' -> [  :data :txtStatus :xhr | self fromText: data  ] .\x0a        'error' -> [window alert: 'Request failed at:  ', url] } \x0a\x0a\x0a\x22$.ajax('https://dl.dropboxusercontent.com/s/hh1ujh8mofphbnl/data1.csv', {  'type' : 'GET', 'success' : function () {alert('Exito')}, 'error' : function() {alert('Error')} } )\x22",
messageSends: ["ajax:options:", "->", "fromText:", "alert:", ","],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "fromText:",
category: 'data',
fn: function (aString){
var self=this;
var splittedData,chartSpecString,dataString;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $ROConfigParser(){return smalltalk.ROConfigParser||(typeof ROConfigParser=="undefined"?nil:ROConfigParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5;
splittedData=_st(self._specAndDataSeparator())._split_(aString);
$2=_st(splittedData)._size();
$ctx1.sendIdx["size"]=1;
$1=_st($2).__eq((1));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
$4=_st($RODataParser())._rawData_withToken_(aString,self["@token"]);
$ctx1.sendIdx["rawData:withToken:"]=1;
$3=_st($4)._asTable();
$ctx1.sendIdx["asTable"]=1;
self._table_($3);
$ctx1.sendIdx["table:"]=1;
} else {
$5=_st(_st(splittedData)._size()).__eq((2));
if(smalltalk.assert($5)){
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
args: ["aString"],
source: "fromText: aString\x0a\x09|splittedData chartSpecString dataString|\x0a\x09splittedData := (self specAndDataSeparator split: aString).\x0a\x0a\x09\x22Text contains just data\x22\x0a\x09splittedData size = 1 \x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self table: (RODataParser rawData: aString withToken: token) asTable.\x0a\x09]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09\x0a\x09\x09\x09\x22Text contains both chart specfication and data\x22\x0a\x09\x09\x09splittedData size = 2\x0a\x09\x09\x09\x09ifTrue:  [ \x0a\x09\x09\x09\x09\x09chartSpecString := splittedData first.\x0a\x09\x09\x09\x09\x09dataString := splittedData second.\x0a\x09\x0a\x09\x09\x09\x09\x09self drawBlock: (ROConfigParser parse: chartSpecString) block.\x0a\x09\x09\x09\x09\x09self table: (RODataParser rawData: dataString withToken: token) asTable.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09]\x0a\x09\x09\x09\x09ifFalse: [ self error: 'File without proper structure' \x0a\x09\x09\x09]\x0a\x09].",
messageSends: ["split:", "specAndDataSeparator", "ifTrue:ifFalse:", "=", "size", "table:", "asTable", "rawData:withToken:", "first", "second", "drawBlock:", "block", "parse:", "error:"],
referencedClasses: ["RODataParser", "ROConfigParser"]
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "isReadyToPlot",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@table"])._notNil();
$ctx1.sendIdx["notNil"]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@drawBlock"])._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isReadyToPlot",{},smalltalk.ROPlot)})},
args: [],
source: "isReadyToPlot\x0a\x09^ table notNil and: [ drawBlock notNil ]",
messageSends: ["and:", "notNil"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "plot",
category: 'drawing',
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diagram=_st($GETDiagramBuilder())._new();
_st(self["@drawBlock"])._value_value_(diagram,self["@table"]);
_st(diagram)._open();
return self}, function($ctx1) {$ctx1.fill(self,"plot",{diagram:diagram},smalltalk.ROPlot)})},
args: [],
source: "plot\x0a\x09|diagram|\x0a\x09diagram := GETDiagramBuilder new.\x0a\x09\x0a\x09drawBlock value: diagram \x0a\x09\x09\x09\x09value: table.\x0a\x09diagram open.",
messageSends: ["new", "value:value:", "open"],
referencedClasses: ["GETDiagramBuilder"]
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "processDropboxURL:",
category: 'utils',
fn: function (aString){
var self=this;
var str,prefix;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5;
prefix="http://dl.dropboxusercontent.";
str=aString;
$1=str;
$3=_st(str)._indexOf_(".");
$ctx1.sendIdx["indexOf:"]=1;
$2=_st($3).__plus((1));
$ctx1.sendIdx["+"]=1;
$4=_st(str)._size();
$ctx1.sendIdx["size"]=1;
str=_st($1)._copyFrom_to_($2,$4);
$ctx1.sendIdx["copyFrom:to:"]=1;
str=_st(str)._copyFrom_to_(_st(_st(str)._indexOf_(".")).__plus((1)),_st(str)._size());
$5=_st(prefix).__comma(str);
return $5;
}, function($ctx1) {$ctx1.fill(self,"processDropboxURL:",{aString:aString,str:str,prefix:prefix},smalltalk.ROPlot)})},
args: ["aString"],
source: "processDropboxURL: aString \x0a\x09\x22\x0a\x09Dropbox share looks like:\x0a\x09https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt\x0a\x09The direct link to the file is:\x0a\x09https://dl.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt\x09\x0a\x09\x22\x0a\x09|str prefix|\x0a\x09prefix := 'http://dl.dropboxusercontent.' .\x0a\x09str := aString.\x0a\x09str :=(str copyFrom: (str indexOf: '.' ) + 1 to: str size ).\x0a\x09str :=(str copyFrom: (str indexOf: '.' ) + 1 to: str size ).\x0a\x09 ^ prefix , str.",
messageSends: ["copyFrom:to:", "+", "indexOf:", "size", ","],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "specAndDataSeparator",
category: 'data',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "--";
}, function($ctx1) {$ctx1.fill(self,"specAndDataSeparator",{},smalltalk.ROPlot)})},
args: [],
source: "specAndDataSeparator\x0a\x09\x22String that delimits the Chart Specification and Data\x22\x0a\x09^ '--'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "table:",
category: 'accessing',
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
args: ["aROTable"],
source: "table: aROTable\x0a\x09table := aROTable.\x0a\x09\x0a\x09self isReadyToPlot ifTrue: [ self plot ]",
messageSends: ["ifTrue:", "isReadyToPlot", "plot"],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "token:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@token"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"token:",{aString:aString},smalltalk.ROPlot)})},
args: ["aString"],
source: "token: aString\x0a\x09token := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPlot);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aString)._match_(".*dropbox.*");
if(smalltalk.assert($1)){
self["@url"]=self._processDropboxURL_(aString);
self["@url"];
} else {
self["@url"]=aString;
self["@url"];
};
self._fetchData();
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},smalltalk.ROPlot)})},
args: ["aString"],
source: "url: aString\x0a\x09(aString match:  '.*dropbox.*') \x0a\x09\x09ifTrue: [ url := self processDropboxURL: aString]\x0a\x09\x09ifFalse: [ url := aString ].\x0a\x09\x0a\x09self fetchData.",
messageSends: ["ifTrue:ifFalse:", "match:", "processDropboxURL:", "fetchData"],
referencedClasses: []
}),
smalltalk.ROPlot);


smalltalk.addMethod(
smalltalk.method({
selector: "OLDexample",
category: 'examples deprecated',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"OLDexample",{},smalltalk.ROPlot.klass)})},
args: [],
source: "OLDexample\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt';\x0a\x09\x09plot.",
messageSends: ["url:", "new", "plot"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "OLDexample2",
category: 'examples deprecated',
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
args: [],
source: "OLDexample2\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';\x0a\x09\x09token: ',';\x0a\x09\x09plot.",
messageSends: ["url:", "new", "token:", "plot"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "OLDexample3",
category: 'examples deprecated',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv");
$2=_st($1)._plot();
return self}, function($ctx1) {$ctx1.fill(self,"OLDexample3",{},smalltalk.ROPlot.klass)})},
args: [],
source: "OLDexample3\x0a\x09\x22Like example2 but the comma separator is not given\x22\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';\x0a\x09\x09plot.",
messageSends: ["url:", "new", "plot"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "block1",
category: 'examples data',
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
}, function($ctx2) {$ctx2.fillBlock({diagram:diagram,table:table},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"block1",{},smalltalk.ROPlot.klass)})},
args: [],
source: "block1\x0a\x09^ [ :diagram :table |\x0a\x09\x09diagram verticalBarDiagram\x0a\x09\x09\x09models: (table dataFromColumn: 'NC');\x0a\x09\x09\x09y: #yourself;\x0a\x09\x09\x09color: Color paleBlue;\x0a\x09\x09\x09regularAxis;\x0a\x09\x09\x09yAxisLabel: 'NC'\x0a\x09\x09\x09\x22color:  [ :v | v odd ifTrue: [ Color red ] ifFalse: [ Color gray ] ].\x22\x0a\x09\x09\x22^ diagram open \x22\x0a\x09 ]",
messageSends: ["models:", "verticalBarDiagram", "dataFromColumn:", "y:", "color:", "paleBlue", "regularAxis", "yAxisLabel:"],
referencedClasses: ["Color"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "data1",
category: 'examples data',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "bench. & NC & NNEC\x0a1 & 643603 & 151665\x0a2 & 13 & 12\x0a3 & 78977 & 34912\x0a4 & 1690 & 512\x0a5 & 3551 & 2009\x0a6 & 96 & 44\x0a7 & 644 & 218\x0a8 & 2 & 0\x0a9 & 158399 & 58333\x0a10 & 1432306 & 14891\x0a11 & 6839 & 2058\x0a12 & 7870 & 3472\x0a13 & 108571 & 57590\x0a14 & 10305 & 586\x0a15 & 20815 & 14886\x0a16 & 766 & 172\x0a17 & 1203 & 880\x0atotal & 2475650 & 342240";
}, function($ctx1) {$ctx1.fill(self,"data1",{},smalltalk.ROPlot.klass)})},
args: [],
source: "data1\x0a^\x0a'bench. & NC & NNEC\x0a1 & 643603 & 151665\x0a2 & 13 & 12\x0a3 & 78977 & 34912\x0a4 & 1690 & 512\x0a5 & 3551 & 2009\x0a6 & 96 & 44\x0a7 & 644 & 218\x0a8 & 2 & 0\x0a9 & 158399 & 58333\x0a10 & 1432306 & 14891\x0a11 & 6839 & 2058\x0a12 & 7870 & 3472\x0a13 & 108571 & 57590\x0a14 & 10305 & 586\x0a15 & 20815 & 14886\x0a16 & 766 & 172\x0a17 & 1203 & 880\x0atotal & 2475650 & 342240'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example1",
category: 'example',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._url_("https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv");
$2=_st($1)._drawBlock_(self._block1());
return self}, function($ctx1) {$ctx1.fill(self,"example1",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example1\x0a\x09\x22Data and block are given separately\x22\x0a\x09\x22\x0a\x09self example1\x0a\x09\x22\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/hh1ujh8mofphbnl/data1.csv';\x0a\x09\x09drawBlock: (self block1)",
messageSends: ["url:", "new", "drawBlock:", "block1"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example1a",
category: 'example',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._fromText_(self._data1());
$2=_st($1)._drawBlock_(self._block1());
return self}, function($ctx1) {$ctx1.fill(self,"example1a",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example1a\x0a\x09\x22Data and block are given separately\x22\x0a\x09\x22\x0a\x09self example1a\x0a\x09\x22\x0a\x09ROPlot new \x0a\x09\x09fromText: self data1;\x0a\x09\x09drawBlock: self block1",
messageSends: ["fromText:", "new", "data1", "drawBlock:", "block1"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example1b",
category: 'example',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $ROTableTest(){return smalltalk.ROTableTest||(typeof ROTableTest=="undefined"?nil:ROTableTest)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($ROPlot())._new();
_st($1)._table_(_st(_st($RODataParser())._rawData_withToken_(_st($ROTableTest())._data2(),"&"))._asTable());
$2=_st($1)._drawBlock_(self._block1());
return self}, function($ctx1) {$ctx1.fill(self,"example1b",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example1b\x0a\x09\x22Data and block are given separately\x22\x0a\x09\x22\x0a\x09self example1b\x0a\x09\x22\x0a\x09ROPlot new \x0a\x09\x09table: (RODataParser rawData: (ROTableTest data2) withToken:'&') asTable;\x0a\x09\x09drawBlock: self block1",
messageSends: ["table:", "new", "asTable", "rawData:withToken:", "data2", "drawBlock:", "block1"],
referencedClasses: ["ROPlot", "RODataParser", "ROTableTest"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
category: 'example',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROPlot())._new())._url_("https://www.dropbox.com/s/yweot8dvr74hmje/verticalBar.txt");
return self}, function($ctx1) {$ctx1.fill(self,"example2",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example2\x0a\x09\x22Data and block are given together in one text\x22\x0a\x09\x22\x0a\x09self example2\x0a\x09\x22\x0a\x09ROPlot new \x0a\x09\x09url: 'https://www.dropbox.com/s/yweot8dvr74hmje/verticalBar.txt'",
messageSends: ["url:", "new"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "example2a",
category: 'example',
fn: function (){
var self=this;
function $ROPlot(){return smalltalk.ROPlot||(typeof ROPlot=="undefined"?nil:ROPlot)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROPlot())._new())._fromText_(self._verticalBar());
return self}, function($ctx1) {$ctx1.fill(self,"example2a",{},smalltalk.ROPlot.klass)})},
args: [],
source: "example2a\x0a\x09\x22Data and block are given together in one text\x22\x0a\x09\x22\x0a\x09self example2a\x0a\x09\x22\x0a\x09ROPlot new \x0a\x09\x09fromText: self verticalBar",
messageSends: ["fromText:", "new", "verticalBar"],
referencedClasses: ["ROPlot"]
}),
smalltalk.ROPlot.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalBar",
category: 'examples data',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="\x0a{\x0a\x09\x22type\x22 : \x22verticalBar\x22,\x0a\x09\x22values\x22 : \x22NC\x22,\x0a\x09\x22y\x22 : \x22[:x | x * 2 ]\x22,\x0a\x09\x22color\x22: \x22brown\x22,\x0a\x09\x22axis\x22: \x22regularAxisAsInteger\x22\x0a}\x0a---".__comma(self._data1());
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalBar",{},smalltalk.ROPlot.klass)})},
args: [],
source: "verticalBar\x0a^\x0a'\x0a{\x0a\x09\x22type\x22 : \x22verticalBar\x22,\x0a\x09\x22values\x22 : \x22NC\x22,\x0a\x09\x22y\x22 : \x22[:x | x * 2 ]\x22,\x0a\x09\x22color\x22: \x22brown\x22,\x0a\x09\x22axis\x22: \x22regularAxisAsInteger\x22\x0a}\x0a---', (self data1)",
messageSends: [",", "data1"],
referencedClasses: []
}),
smalltalk.ROPlot.klass);


smalltalk.addClass('ROTable', smalltalk.Object, ['columns', 'header'], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "checkForHeader",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._row_((1)))._inject_into_(true,(function(bool,element){
return smalltalk.withContext(function($ctx2) {
return _st(bool)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(element)._isString();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({bool:bool,element:element},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"checkForHeader",{},smalltalk.ROTable)})},
args: [],
source: "checkForHeader\x0a\x09^ (self row: 1) \x0a\x09\x09inject: true \x0a\x09\x09into: [ :bool :element | bool and: [ element isString] ]",
messageSends: ["inject:into:", "row:", "and:", "isString"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "col:row:",
category: 'instance creation',
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._row_(j))._at_(i);
return $1;
}, function($ctx1) {$ctx1.fill(self,"col:row:",{i:i,j:j},smalltalk.ROTable)})},
args: ["i", "j"],
source: "col: i row: j\x0a\x09^ (self row: j) at: i",
messageSends: ["at:", "row:"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "column:",
category: 'instance creation',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._process_(_st(_st(self["@columns"])._at_(index))._copy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"column:",{index:index},smalltalk.ROTable)})},
args: ["index"],
source: "column: index\x0a\x09^ self process: (columns at: index) copy",
messageSends: ["process:", "copy", "at:"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "columnTitled:",
category: 'accessing',
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
args: ["aString"],
source: "columnTitled: aString \x0a\x09self hasHeader \x0a\x09\x09\x09ifFalse: [ self error: 'This table does not have header' ].\x0a\x09\x0a\x09^ self column: (header indexOf: aString)",
messageSends: ["ifFalse:", "hasHeader", "error:", "column:", "indexOf:"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "columns",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._process_(_st(self["@columns"])._copy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns",{},smalltalk.ROTable)})},
args: [],
source: "columns\x0a\x09^ self process: columns copy",
messageSends: ["process:", "copy"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@columns"]=aCollection;
$1=self._checkForHeader();
if(smalltalk.assert($1)){
self._withHeader();
};
return self;
}, function($ctx1) {$ctx1.fill(self,"columns:",{aCollection:aCollection},smalltalk.ROTable)})},
args: ["aCollection"],
source: "columns: aCollection\x0a\x09columns := aCollection.\x0a\x09self checkForHeader ifTrue: [ self withHeader ].\x0a\x09^ self",
messageSends: ["ifTrue:", "checkForHeader", "withHeader"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "dataFromColumn:",
category: 'accessing',
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
args: ["aString"],
source: "dataFromColumn: aString \x0a\x09^ (self columnTitled: aString) removeFirst; yourself.",
messageSends: ["removeFirst", "columnTitled:", "yourself"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "hasHeader",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@header"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasHeader",{},smalltalk.ROTable)})},
args: [],
source: "hasHeader\x0a\x09^ header notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "header",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@header"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"header",{},smalltalk.ROTable)})},
args: [],
source: "header\x0a\x09^ header copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "process:",
category: 'accessing',
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
}, function($ctx2) {$ctx2.fillBlock({d:d,newD:newD},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"process:",{anArray:anArray},smalltalk.ROTable)})},
args: ["anArray"],
source: "process: anArray\x0a\x09^ anArray collect: [ :d |\x0a\x09\x09| newD |\x0a\x09\x09d isNumeric \x0a\x09\x09\x09ifTrue: [ newD := d asNumber ]\x0a\x09\x09\x09ifFalse: [ newD := d].\x0a\x09\x09\x09newD.\x0a\x09\x09 ]",
messageSends: ["collect:", "ifTrue:ifFalse:", "isNumeric", "asNumber"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "row:",
category: 'accessing',
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
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,2)})})));
return $2;
}, function($ctx1) {$ctx1.fill(self,"row:",{index:index,i:i},smalltalk.ROTable)})},
args: ["index"],
source: "row: index\x0a\x09|i|\x0a\x09i := index.\x0a\x09self hasHeader ifTrue: [ i := i + 1  ]. \x22If it has a header, data starts one row below\x22\x0a\x09^ self process: (columns collect: [:c | c at: i ])",
messageSends: ["ifTrue:", "hasHeader", "+", "process:", "collect:", "at:"],
referencedClasses: []
}),
smalltalk.ROTable);

smalltalk.addMethod(
smalltalk.method({
selector: "withHeader",
category: 'private',
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
args: [],
source: "withHeader\x0a\x09self hasHeader ifFalse: [ header := self row: 1 ]",
messageSends: ["ifFalse:", "hasHeader", "row:"],
referencedClasses: []
}),
smalltalk.ROTable);


smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
category: 'as yet unclassified',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._columns_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns:",{aCollection:aCollection},smalltalk.ROTable.klass)})},
args: ["aCollection"],
source: "columns: aCollection\x0a\x09^ self new columns:aCollection",
messageSends: ["columns:", "new"],
referencedClasses: []
}),
smalltalk.ROTable.klass);


smalltalk.addClass('ROTableTest', smalltalk.TestCase, [], 'Roassal-Plot');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp1",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
return self}, function($ctx1) {$ctx1.fill(self,"setUp1",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "setUp1\x0a\x09|str table|\x0a\x09str := self class data1.\x0a\x09table := (RODataParser rawData: str withToken: ',') asTable.",
messageSends: ["data1", "class", "asTable", "rawData:withToken:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp2",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
return self}, function($ctx1) {$ctx1.fill(self,"setUp2",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "setUp2\x0a\x09|str table|\x0a\x09str := self class data2.\x0a\x09table := (RODataParser rawData: str withToken: '&') asTable.",
messageSends: ["data2", "class", "asTable", "rawData:withToken:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCheckHeader",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._class();
$ctx1.sendIdx["class"]=1;
str=_st($1)._data1();
$2=_st($RODataParser())._rawData_withToken_(str,",");
$ctx1.sendIdx["rawData:withToken:"]=1;
table=_st($2)._asTable();
$ctx1.sendIdx["asTable"]=1;
$3=_st(table)._hasHeader();
$ctx1.sendIdx["hasHeader"]=1;
self._deny_($3);
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
self._setUp2();
self._assert_(_st(table)._hasHeader());
return self}, function($ctx1) {$ctx1.fill(self,"testCheckHeader",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testCheckHeader\x0a\x09|str table|\x0a\x09str := self class data1.\x0a\x09table := (RODataParser rawData: str withToken: ',') asTable.\x0a\x09self deny: table hasHeader.\x0a\x09\x0a\x09str := self class data2.\x0a\x09table := (RODataParser rawData: str withToken: '&') asTable.\x0a\x09self setUp2.\x0a\x09self assert: table hasHeader.",
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "deny:", "hasHeader", "data2", "setUp2", "assert:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColRow",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5;
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
$2=_st(table)._col_row_((1),(1));
$ctx1.sendIdx["col:row:"]=1;
$1=_st($2).__eq((1));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=_st(table)._col_row_((2),(3));
$ctx1.sendIdx["col:row:"]=2;
$3=_st($4).__eq((6));
$ctx1.sendIdx["="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
$6=_st(table)._col_row_((2),(2));
$ctx1.sendIdx["col:row:"]=3;
$5=_st($6).__eq((3));
self._assert_($5);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((3),(1));
$ctx2.sendIdx["col:row:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$ctx1.sendIdx["should:raise:"]=1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((1),(5));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testColRow",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testColRow\x0a\x09|str table|\x0a\x09str := self class data1.\x0a\x09table := (RODataParser rawData: str withToken: ',') asTable.\x0a\x09\x0a\x09self assert: (table col: 1 row: 1) = 1. \x0a\x09self assert: (table col: 2 row: 3) = 6.\x0a\x09self assert: (table col: 2 row: 2) = 3.\x0a\x09\x0a\x09self should: [ table col: 3 row: 1 ] raise: Error.\x0a\x09self should: [ table col: 1 row: 5 ] raise: Error.",
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "assert:", "=", "col:row:", "should:raise:"],
referencedClasses: ["RODataParser", "Error"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColRow2",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$8,$7,$10,$9;
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
$2=_st(table)._col_row_((1),(11));
$ctx1.sendIdx["col:row:"]=1;
$1=_st($2).__eq((11));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=_st(table)._col_row_((2),(1));
$ctx1.sendIdx["col:row:"]=2;
$3=_st($4).__eq((643603));
$ctx1.sendIdx["="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
$6=_st(table)._col_row_((3),(14));
$ctx1.sendIdx["col:row:"]=3;
$5=_st($6).__eq((586));
$ctx1.sendIdx["="]=3;
self._assert_($5);
$ctx1.sendIdx["assert:"]=3;
$8=_st(table)._col_row_((2),(10));
$ctx1.sendIdx["col:row:"]=4;
$7=_st($8).__eq((1432306));
$ctx1.sendIdx["="]=4;
self._assert_($7);
$ctx1.sendIdx["assert:"]=4;
$10=_st(table)._col_row_((1),(18));
$ctx1.sendIdx["col:row:"]=5;
$9=_st($10).__eq("total");
self._assert_($9);
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((4),(1));
$ctx2.sendIdx["col:row:"]=6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
$ctx1.sendIdx["should:raise:"]=1;
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(table)._col_row_((1),(19));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testColRow2",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testColRow2\x0a\x09|str table|\x0a\x09str := self class data2.\x0a\x09table := (RODataParser rawData: str withToken: '&') asTable.\x0a\x0a\x09self assert: (table col: 1 row: 11) = 11. \x0a\x09self assert: (table col: 2 row: 1) = 643603. \x0a\x09self assert: (table col: 3 row: 14) = 586.\x0a\x09self assert: (table col: 2 row: 10) = 1432306.\x0a\x09self assert: (table col: 1 row: 18) = 'total'.\x0a\x09\x0a\x09self should: [ table col: 4 row: 1 ] raise: Error.\x0a\x09self should: [ table col: 1 row: 19 ] raise: Error.",
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "assert:", "=", "col:row:", "should:raise:"],
referencedClasses: ["RODataParser", "Error"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColumn",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,col1,col2,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
col1=[(1), (2), (4)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=1;
col2=[(1), (3), (6)]._asOrderedCollection();
$2=_st(table)._column_((1));
$ctx1.sendIdx["column:"]=1;
$1=_st($2).__eq(col1);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(table)._column_((2))).__eq(col2));
return self}, function($ctx1) {$ctx1.fill(self,"testColumn",{str:str,col1:col1,col2:col2,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testColumn\x0a\x09| str col1 col2 table|\x0a\x09str := self class data1.\x0a\x09table := (RODataParser rawData: str withToken: ',') asTable.\x0a\x09col1 := #(1 2 4 ) asOrderedCollection.\x0a\x09col2 := #(1 3 6 ) asOrderedCollection.\x0a\x09\x0a\x09self assert: (table column: 1) = col1.\x0a\x09self assert: (table column: 2) = col2 .",
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "asOrderedCollection", "assert:", "=", "column:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDataFrom",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
$2=_st(_st(table)._columnTitled_("bench."))._asArray();
$ctx1.sendIdx["asArray"]=1;
$1=_st($2).__eq(["bench.", (1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13), (14), (15), (16), (17), "total"]);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(_st(table)._dataFromColumn_("bench."))._asArray()).__eq([(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13), (14), (15), (16), (17), "total"]));
return self}, function($ctx1) {$ctx1.fill(self,"testDataFrom",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testDataFrom\x0a\x09|str table|\x0a\x09str := self class data2.\x0a\x09table := (RODataParser rawData: str withToken: '&') asTable.\x0a\x0a\x09self assert: ((table columnTitled: 'bench.') asArray) = #('bench.' 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 'total').\x0a\x09self assert: ((table dataFromColumn: 'bench.') asArray) = #(1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 'total').",
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "assert:", "=", "asArray", "columnTitled:", "dataFromColumn:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRow",
category: 'as yet unclassified',
fn: function (){
var self=this;
var row1,row2,row3,str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
str=_st(self._class())._data1();
table=_st(_st($RODataParser())._rawData_withToken_(str,","))._asTable();
row1=[(1), (1)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=1;
row2=[(2), (3)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=2;
row3=[(4), (6)]._asOrderedCollection();
$2=_st(table)._row_((1));
$ctx1.sendIdx["row:"]=1;
$1=_st($2).__eq(row1);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=_st(table)._row_((2));
$ctx1.sendIdx["row:"]=2;
$3=_st($4).__eq(row2);
$ctx1.sendIdx["="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
self._assert_(_st(_st(table)._row_((3))).__eq(row3));
return self}, function($ctx1) {$ctx1.fill(self,"testRow",{row1:row1,row2:row2,row3:row3,str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testRow\x0a\x09| row1 row2 row3 str table|\x0a\x09str := self class data1.\x0a\x09table := (RODataParser rawData: str withToken: ',') asTable.\x0a\x09row1 := #(1 1) asOrderedCollection.\x0a\x09row2 := #(2 3) asOrderedCollection.\x0a\x09row3 := #(4 6) asOrderedCollection.\x09\x0a\x09\x09\x0a\x09self assert: (table row: 1) = row1.\x0a\x09self assert: (table row: 2) = row2.\x0a\x09self assert: (table row: 3) = row3.",
messageSends: ["data1", "class", "asTable", "rawData:withToken:", "asOrderedCollection", "assert:", "=", "row:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRow2",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,row1,row5,row10,row17,row18,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$6,$5,$8,$7;
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
row1=[(1), (643603), (151665)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=1;
row5=[(5), (3551), (2009)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=2;
row10=[(10), (1432306), (14891)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=3;
row17=[(17), (1203), (880)]._asOrderedCollection();
$ctx1.sendIdx["asOrderedCollection"]=4;
row18=["total", (2475650), (342240)]._asOrderedCollection();
$2=_st(table)._row_((1));
$ctx1.sendIdx["row:"]=1;
$1=_st($2).__eq(row1);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$4=_st(table)._row_((5));
$ctx1.sendIdx["row:"]=2;
$3=_st($4).__eq(row5);
$ctx1.sendIdx["="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=2;
$6=_st(table)._row_((10));
$ctx1.sendIdx["row:"]=3;
$5=_st($6).__eq(row10);
$ctx1.sendIdx["="]=3;
self._assert_($5);
$ctx1.sendIdx["assert:"]=3;
$8=_st(table)._row_((17));
$ctx1.sendIdx["row:"]=4;
$7=_st($8).__eq(row17);
$ctx1.sendIdx["="]=4;
self._assert_($7);
$ctx1.sendIdx["assert:"]=4;
self._assert_(_st(_st(table)._row_((18))).__eq(row18));
return self}, function($ctx1) {$ctx1.fill(self,"testRow2",{str:str,row1:row1,row5:row5,row10:row10,row17:row17,row18:row18,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testRow2\x0a\x09| str row1 row5 row10 row17 row18 table|\x0a\x09str := self class data2.\x0a\x09table := (RODataParser rawData: str withToken: '&') asTable.\x0a\x09row1 := #(1 643603 151665) asOrderedCollection.\x0a\x09row5 := #(5 3551 2009) asOrderedCollection.\x0a\x09row10 := #(10 1432306 14891) asOrderedCollection.\x0a\x09row17 := #(17 1203 880) asOrderedCollection.\x09\x0a\x09row18 := #('total' 2475650 342240) asOrderedCollection.\x0a\x09\x09\x09\x0a\x09self assert: (table row: 1) = row1.\x0a\x09self assert: (table row: 5) = row5.\x0a\x09self assert: (table row: 10) = row10.\x0a\x09self assert: (table row: 17) = row17.\x0a\x09self assert: (table row: 18) = row18.",
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "asOrderedCollection", "assert:", "=", "row:"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithHeader",
category: 'as yet unclassified',
fn: function (){
var self=this;
var str,table;
function $RODataParser(){return smalltalk.RODataParser||(typeof RODataParser=="undefined"?nil:RODataParser)}
return smalltalk.withContext(function($ctx1) { 
str=_st(self._class())._data2();
table=_st(_st($RODataParser())._rawData_withToken_(str,"&"))._asTable();
self._assert_(_st(table)._hasHeader());
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(_st(table)._header())._asArray()).__eq(["bench.", "NC", "NNEC"]));
return self}, function($ctx1) {$ctx1.fill(self,"testWithHeader",{str:str,table:table},smalltalk.ROTableTest)})},
args: [],
source: "testWithHeader\x0a\x09\x09\x0a\x09|str table|\x0a\x09str := self class data2.\x0a\x09table := (RODataParser rawData: str withToken: '&') asTable.\x0a\x0a\x09self assert: table hasHeader.\x0a\x09self assert: table header asArray = #('bench.' 'NC' 'NNEC').",
messageSends: ["data2", "class", "asTable", "rawData:withToken:", "assert:", "hasHeader", "=", "asArray", "header"],
referencedClasses: ["RODataParser"]
}),
smalltalk.ROTableTest);


smalltalk.addMethod(
smalltalk.method({
selector: "data1",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "1,1\x0a2,3\x0a4,6";
}, function($ctx1) {$ctx1.fill(self,"data1",{},smalltalk.ROTableTest.klass)})},
args: [],
source: "data1\x0a\x09^ '1,1\x0a2,3\x0a4,6'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROTableTest.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "data2",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "bench. & NC & NNEC\x0a1 & 643603 & 151665\x0a2 & 13 & 12\x0a3 & 78977 & 34912\x0a4 & 1690 & 512\x0a5 & 3551 & 2009\x0a6 & 96 & 44\x0a7 & 644 & 218\x0a8 & 2 & 0\x0a9 & 158399 & 58333\x0a10 & 1432306 & 14891\x0a11 & 6839 & 2058\x0a12 & 7870 & 3472\x0a13 & 108571 & 57590\x0a14 & 10305 & 586\x0a15 & 20815 & 14886\x0a16 & 766 & 172\x0a17 & 1203 & 880\x0atotal & 2475650 & 342240";
}, function($ctx1) {$ctx1.fill(self,"data2",{},smalltalk.ROTableTest.klass)})},
args: [],
source: "data2\x0a\x09^ 'bench. & NC & NNEC\x0a1 & 643603 & 151665\x0a2 & 13 & 12\x0a3 & 78977 & 34912\x0a4 & 1690 & 512\x0a5 & 3551 & 2009\x0a6 & 96 & 44\x0a7 & 644 & 218\x0a8 & 2 & 0\x0a9 & 158399 & 58333\x0a10 & 1432306 & 14891\x0a11 & 6839 & 2058\x0a12 & 7870 & 3472\x0a13 & 108571 & 57590\x0a14 & 10305 & 586\x0a15 & 20815 & 14886\x0a16 & 766 & 172\x0a17 & 1203 & 880\x0atotal & 2475650 & 342240'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROTableTest.klass);

});
