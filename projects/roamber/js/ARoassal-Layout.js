smalltalk.addPackage('ARoassal-Layout');
smalltalk.addClass('ROCell', smalltalk.ROObject, ['elements', 'columns', 'element', 'number', 'rowHeights', 'columnWidths'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "column",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@number"]).__minus((1)))._rem_(self["@columns"])).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"column",{},smalltalk.ROCell)})},
args: [],
source: "column\x0a\x0a\x09^((number - 1) rem: columns) + 1",
messageSends: ["+", "rem:", "-"],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columnWidthAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@columnWidths"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnWidthAt:",{index:index},smalltalk.ROCell)})},
args: ["index"],
source: "columnWidthAt: index\x0a\x09\x22private\x22\x0a\x0a\x09^ columnWidths at: index",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columns",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@columns"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns",{},smalltalk.ROCell)})},
args: [],
source: "columns\x0a\x09^ columns",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@columns"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"columns:",{anObject:anObject},smalltalk.ROCell)})},
args: ["anObject"],
source: "columns: anObject\x0a\x09columns := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "computeColumnWidths",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@columnWidths"]=_st($Array())._new_(_st(self["@elements"])._columnCount());
(1)._to_do_(_st(self["@elements"])._columnCount(),(function(columnIndex){
return smalltalk.withContext(function($ctx2) {
return _st(self["@columnWidths"])._at_put_(columnIndex,_st(_st(_st(self["@elements"])._atColumn_(columnIndex))._select_thenCollect_((function(el){
return smalltalk.withContext(function($ctx3) {
return _st(el)._notNil();
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2)})}),(function(el){
return smalltalk.withContext(function($ctx3) {
return _st(el)._width();
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2)})})))._max());
}, function($ctx2) {$ctx2.fillBlock({columnIndex:columnIndex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computeColumnWidths",{},smalltalk.ROCell)})},
args: [],
source: "computeColumnWidths\x0a\x0a\x09columnWidths := Array new: elements columnCount.\x0a\x091 to: elements columnCount do: [ :columnIndex |\x0a\x09\x09columnWidths at: columnIndex put: ((elements atColumn: columnIndex) select: [:el | el notNil] thenCollect: [:el  | el width]) max\x0a\x09 ].",
messageSends: ["new:", "columnCount", "to:do:", "at:put:", "max", "select:thenCollect:", "notNil", "width", "atColumn:"],
referencedClasses: ["Array"]
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRowHeights",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@rowHeights"]=_st($Array())._new_(_st(self["@elements"])._rowCount());
(1)._to_do_(_st(self["@elements"])._rowCount(),(function(rowIndex){
return smalltalk.withContext(function($ctx2) {
return _st(self["@rowHeights"])._at_put_(rowIndex,_st(_st(_st(self["@elements"])._atRow_(rowIndex))._select_thenCollect_((function(el){
return smalltalk.withContext(function($ctx3) {
return _st(el)._notNil();
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2)})}),(function(el){
return smalltalk.withContext(function($ctx3) {
return _st(el)._height();
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2)})})))._max());
}, function($ctx2) {$ctx2.fillBlock({rowIndex:rowIndex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computeRowHeights",{},smalltalk.ROCell)})},
args: [],
source: "computeRowHeights\x0a\x0a\x09rowHeights := Array new: elements rowCount.\x0a\x091 to: elements rowCount do: [ :rowIndex |\x0a\x09\x09rowHeights at: rowIndex put: ((elements atRow: rowIndex) select: [:el | el notNil] thenCollect: [:el  | el height]) max\x0a\x09 ].",
messageSends: ["new:", "rowCount", "to:do:", "at:put:", "max", "select:thenCollect:", "notNil", "height", "atRow:"],
referencedClasses: ["Array"]
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROCell)})},
args: [],
source: "element\x0a\x09^ element",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.ROCell)})},
args: ["anObject"],
source: "element: anObject\x0a\x09element := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var rows,col;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $ROCellMatrix(){return smalltalk.ROCellMatrix||(typeof ROCellMatrix=="undefined"?nil:ROCellMatrix)}
return smalltalk.withContext(function($ctx1) { 
rows=_st(_st(_st(_st(aCollection)._size()).__slash(self["@columns"]))._ceiling())._rounded();
col=_st($Array())._new_(_st(rows).__star(self["@columns"]));
(1)._to_do_(_st(aCollection)._size(),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(col)._at_put_(i,_st(aCollection)._at_(i));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
self["@elements"]=_st($ROCellMatrix())._rows_columns_contents_(rows,self["@columns"],col);
self._computeColumnWidths();
self._computeRowHeights();
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{aCollection:aCollection,rows:rows,col:col},smalltalk.ROCell)})},
args: ["aCollection"],
source: "elements: aCollection \x0a\x0a\x09| rows  col |\x0a\x09rows := (aCollection size / columns) ceiling rounded.\x0a\x09col := Array new: rows * columns.\x0a\x091 to: aCollection size do: [ :i | col at: i put: (aCollection at: i)].\x0a\x09elements := ROCellMatrix \x0a\x09\x09\x09\x09\x09rows: rows\x0a\x09\x09\x09\x09\x09columns: columns \x0a\x09\x09\x09\x09\x09contents: col.\x0a\x09self computeColumnWidths.\x0a\x09self computeRowHeights.",
messageSends: ["rounded", "ceiling", "/", "size", "new:", "*", "to:do:", "at:put:", "at:", "rows:columns:contents:", "computeColumnWidths", "computeRowHeights"],
referencedClasses: ["Array", "ROCellMatrix"]
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__at(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROCell)})},
args: [],
source: "extent\x0a\x0a\x09^ self width @ self height",
messageSends: ["@", "height", "width"],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rowHeightAt_(self._row());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROCell)})},
args: [],
source: "height\x0a\x0a\x09^ self rowHeightAt: self row",
messageSends: ["rowHeightAt:", "row"],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@number"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.ROCell)})},
args: [],
source: "number\x0a\x09^ number",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anObject:anObject},smalltalk.ROCell)})},
args: ["anObject"],
source: "number: anObject\x0a\x09number := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "row",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@number"]).__minus((1)))._quo_(self["@columns"])).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"row",{},smalltalk.ROCell)})},
args: [],
source: "row\x0a\x0a\x09^((number - 1) quo: columns) + 1",
messageSends: ["+", "quo:", "-"],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "rowHeightAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rowHeights"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowHeightAt:",{index:index},smalltalk.ROCell)})},
args: ["index"],
source: "rowHeightAt: index\x0a\x09\x22private\x22\x0a\x0a\x09^ rowHeights at: index",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._columnWidthAt_(self._column());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROCell)})},
args: [],
source: "width\x0a\x0a\x09^ self columnWidthAt: self column",
messageSends: ["columnWidthAt:", "column"],
referencedClasses: []
}),
smalltalk.ROCell);


smalltalk.addMethod(
smalltalk.method({
selector: "elements:columns:",
category: 'instance creation',
fn: function (aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._columns_(anInteger);
_st($2)._elements_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements:columns:",{aCollection:aCollection,anInteger:anInteger},smalltalk.ROCell.klass)})},
args: ["aCollection", "anInteger"],
source: "elements: aCollection columns: anInteger \x0a\x09\x0a\x09^ self new columns: anInteger; elements: aCollection; yourself",
messageSends: ["columns:", "new", "elements:", "yourself"],
referencedClasses: []
}),
smalltalk.ROCell.klass);


smalltalk.addClass('ROCellMatrix', smalltalk.ROObject, ['nrows', 'ncols', 'contents'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "atColumn:",
category: 'accessing rows/columns',
fn: function (column){
var self=this;
var p;
return smalltalk.withContext(function($ctx1) { 
var $1;
p=_st(self._indexForRow_andColumn_((1),column)).__minus(self["@ncols"]);
$1=_st((1)._to_(self["@nrows"]))._collect_((function(row){
return smalltalk.withContext(function($ctx2) {
p=_st(p).__plus(self["@ncols"]);
return _st(self["@contents"])._at_(p);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atColumn:",{column:column,p:p},smalltalk.ROCellMatrix)})},
args: ["column"],
source: "atColumn: column\x0a\x09| p |\x0a\x09p := (self indexForRow: 1 andColumn: column) - ncols.\x0a\x09^ (1 to: nrows) collect: [ :row | contents at: (p := p+ncols) ]",
messageSends: ["-", "indexForRow:andColumn:", "collect:", "at:", "+", "to:"],
referencedClasses: []
}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "atRow:",
category: 'accessing rows/columns',
fn: function (row){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(row)._between_and_((1),self["@nrows"]);
if(! smalltalk.assert($1)){
self._error_("1st subscript out of range");
};
$2=_st(self["@contents"])._copyFrom_to_(_st(_st(_st(row).__minus((1))).__star(self["@ncols"])).__plus((1)),_st(row).__star(self["@ncols"]));
return $2;
}, function($ctx1) {$ctx1.fill(self,"atRow:",{row:row},smalltalk.ROCellMatrix)})},
args: ["row"],
source: "atRow: row\x0a\x09(row between: 1 and: nrows)\x0a\x09\x09ifFalse: [ self error: '1st subscript out of range' ].\x0a\x09^ contents copyFrom: (row - 1) * ncols + 1 to: row * ncols",
messageSends: ["ifFalse:", "error:", "between:and:", "copyFrom:to:", "+", "*", "-"],
referencedClasses: []
}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "columnCount",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ncols"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnCount",{},smalltalk.ROCellMatrix)})},
args: [],
source: "columnCount\x0a\x09^ ncols",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "indexForRow:andColumn:",
category: 'private',
fn: function (row,column){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(row)._between_and_((1),self["@nrows"]);
if(! smalltalk.assert($1)){
self._error_("1st subscript out of range");
};
$2=_st(column)._between_and_((1),self["@ncols"]);
if(! smalltalk.assert($2)){
self._error_("2nd subscript out of range");
};
$3=_st(_st(_st(row).__minus((1))).__star(self["@ncols"])).__plus(column);
return $3;
}, function($ctx1) {$ctx1.fill(self,"indexForRow:andColumn:",{row:row,column:column},smalltalk.ROCellMatrix)})},
args: ["row", "column"],
source: "indexForRow: row andColumn: column\x0a\x09(row between: 1 and: nrows)\x0a\x09\x09ifFalse: [self error: '1st subscript out of range'].\x0a\x09(column between: 1 and: ncols)\x0a\x09\x09ifFalse: [self error: '2nd subscript out of range'].\x0a\x09^ (row - 1) * ncols + column",
messageSends: ["ifFalse:", "error:", "between:and:", "+", "*", "-"],
referencedClasses: []
}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rowCount",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nrows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowCount",{},smalltalk.ROCellMatrix)})},
args: [],
source: "rowCount\x0a\x09^ nrows",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rows:columns:contents:",
category: 'private',
fn: function (rows,columns,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(rows)._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(rows).__gt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(columns)._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(columns).__gt_eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(rows).__star(columns)).__eq(_st(anArray)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
self._error_("Wrong parameters");
};
self["@nrows"]=rows;
self["@ncols"]=columns;
self["@contents"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"rows:columns:contents:",{rows:rows,columns:columns,anArray:anArray},smalltalk.ROCellMatrix)})},
args: ["rows", "columns", "anArray"],
source: "rows: rows columns: columns contents: anArray\x0a\x09(((rows isInteger and: [rows >= 0]) and: \x0a\x09\x09[columns isInteger and: [columns >= 0]]) and:\x0a\x09\x09\x09[ rows * columns = anArray size ]) ifFalse: [ self error: 'Wrong parameters' ].\x0a\x09nrows := rows.\x0a\x09ncols := columns.\x0a\x09contents := anArray",
messageSends: ["ifFalse:", "error:", "and:", "=", "size", "*", ">=", "isInteger"],
referencedClasses: []
}),
smalltalk.ROCellMatrix);


smalltalk.addMethod(
smalltalk.method({
selector: "rows:columns:contents:",
category: 'as yet unclassified',
fn: function (rows,columns,contents){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._rows_columns_contents_(rows,columns,contents);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows:columns:contents:",{rows:rows,columns:columns,contents:contents},smalltalk.ROCellMatrix.klass)})},
args: ["rows", "columns", "contents"],
source: "rows: rows columns: columns contents: contents\x0a\x09^self new rows: rows columns: columns contents: contents",
messageSends: ["rows:columns:contents:", "new"],
referencedClasses: []
}),
smalltalk.ROCellMatrix.klass);


smalltalk.addClass('ROLayout', smalltalk.Object, ['translator', 'affectedNodes'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
category: 'not yet classified',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)});},
args: ["elements"],
source: "applyOn: elements\x0a\x09\x0a\x09self executeOnElements: elements",
messageSends: ["executeOnElements:"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "doInitialize: elements\x0a\x09\x22Method executed before beginning the layout. Useful when the graph to be ordered need to be prepared\x22\x0a\x09\x22self announce: (ROLayoutBegin new elements: elements).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doPost:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doPost:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "doPost: elements\x0a\x09\x22Method executed after performing the layout\x22\x0a\x09\x22self announce: (ROLayoutEnd new elements: elements).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doInitialize_(elements);
self._doExecute_(_st(elements)._asOrderedCollection());
self._doPost_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x09\x09\x0a\x09self doInitialize: elements.\x0a\x09self doExecute: elements asOrderedCollection.\x0a\x09self doPost: elements.",
messageSends: ["doInitialize:", "doExecute:", "asOrderedCollection", "doPost:"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)});},
args: [],
source: "initialize\x0a\x09translator := ROLayoutTranslator default.",
messageSends: ["default"],
referencedClasses: ["ROLayoutTranslator"]
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "on: elements\x0a\x09self applyOn: elements",
messageSends: ["applyOn:"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "paddingLeftFor:",
category: 'not yet classified',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._resizeStrategyFor_(elements))._paddingLeft();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paddingLeftFor:",{elements:elements},smalltalk.ROLayout)})},
args: ["elements"],
source: "paddingLeftFor: elements\x0a\x09^ (self resizeStrategyFor: elements) paddingLeft",
messageSends: ["paddingLeft", "resizeStrategyFor:"],
referencedClasses: []
}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ROLayout)})},
args: [],
source: "step\x0a\x22\x0a\x09currentIteraction := currentIteraction + 1.\x0a\x09(currentIteraction \x5c\x5c self iterationsToSendEvent) = 0 \x0a\x09\x09ifTrue: [ self announce: (ROLayoutStep new \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09currentIteration: currentIteraction;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09maxInterations: maxInterations) ].\x0a\x22\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._new())._applyOn_(aCollection);
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.ROLayout.klass)});},
args: ["aCollection"],
source: "on: aCollection\x0a\x09self new applyOn: aCollection.\x0a\x09^ aCollection",
messageSends: ["applyOn:", "new"],
referencedClasses: []
}),
smalltalk.ROLayout.klass);


smalltalk.addClass('ROAbstractGridLayout', smalltalk.ROLayout, ['gapSize', 'lineItemsCountBlock'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGapSize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultGapSize",{},smalltalk.ROAbstractGridLayout)})},
args: [],
source: "defaultGapSize\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLineItemsCount",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$1=(function(elements){
var height,width;
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(elements)._size()).__lt((3));
if(smalltalk.assert($3)){
$2=_st(_st(_st(elements)._size())._max_((1))).__at((1));
} else {
height=_st(_st(_st(_st(_st(elements)._size()).__star((0.618034)))._sqrt())._ceiling())._truncated();
height;
width=_st(_st(_st(_st(elements)._size()).__slash(height))._ceiling())._truncated();
width;
$2=_st(width).__at(height);
};
return _st($2)._x();
}, function($ctx2) {$ctx2.fillBlock({elements:elements,height:height,width:width},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLineItemsCount",{},smalltalk.ROAbstractGridLayout)})},
args: [],
source: "defaultLineItemsCount\x0a\x09\x0a\x09^ [ :elements | \x0a\x09\x09\x09| height width |\x0a\x09\x09\x09(elements size < 3 \x0a\x09\x09\x09\x09ifTrue: [ (elements size max: 1) @ 1 ]\x0a\x09\x09\x09\x09ifFalse: \x0a\x09\x09\x09\x09\x09[ height := (elements size * 0.618034) sqrt ceiling truncated.\x0a\x09\x09\x09\x09\x09width := (elements size / height) ceiling truncated.\x0a\x09\x09\x09\x09\x09width @ height ]) x ]",
messageSends: ["x", "ifTrue:ifFalse:", "@", "max:", "size", "truncated", "ceiling", "sqrt", "*", "/", "<"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gapSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gapSize",{},smalltalk.ROAbstractGridLayout)})},
args: [],
source: "gapSize\x0a\x09\x0a\x09^gapSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gapSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"gapSize:",{anInteger:anInteger},smalltalk.ROAbstractGridLayout)})},
args: ["anInteger"],
source: "gapSize: anInteger\x0a\x09gapSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractGridLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@gapSize"]=self._defaultGapSize();
self["@lineItemsCountBlock"]=self._defaultLineItemsCount();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractGridLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09gapSize := self defaultGapSize.\x0a\x09lineItemsCountBlock := self defaultLineItemsCount.",
messageSends: ["initialize", "defaultGapSize", "defaultLineItemsCount"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCount:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lineItemsCountBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lineItemsCount:",{aBlock:aBlock},smalltalk.ROAbstractGridLayout)})},
args: ["aBlock"],
source: "lineItemsCount: aBlock\x0a\x09\x0a\x09lineItemsCountBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCountBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lineItemsCountBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineItemsCountBlock",{},smalltalk.ROAbstractGridLayout)})},
args: [],
source: "lineItemsCountBlock\x0a\x09\x0a\x09^ lineItemsCountBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractGridLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.ROAbstractGridLayout.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self name =  #ROAbstractGridLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withGap:withLineItemsCount:",
category: 'public',
fn: function (aCollectionOfElements,anInteger,aBlock){
var self=this;
var myLayout;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._new();
_st($1)._gapSize_(anInteger);
_st($1)._lineItemsCount_(aBlock);
$2=_st($1)._yourself();
myLayout=$2;
_st(myLayout)._applyOn_(aCollectionOfElements);
$3=aCollectionOfElements;
return $3;
}, function($ctx1) {$ctx1.fill(self,"on:withGap:withLineItemsCount:",{aCollectionOfElements:aCollectionOfElements,anInteger:anInteger,aBlock:aBlock,myLayout:myLayout},smalltalk.ROAbstractGridLayout.klass)})},
args: ["aCollectionOfElements", "anInteger", "aBlock"],
source: "on: aCollectionOfElements withGap: anInteger withLineItemsCount: aBlock\x0a\x09\x22place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally\x22\x0a\x09\x0a\x09| myLayout |\x0a\x09myLayout := self new gapSize: anInteger;  lineItemsCount: aBlock; yourself.\x0a\x09myLayout applyOn: aCollectionOfElements.\x0a\x09^ aCollectionOfElements",
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself", "applyOn:"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withLineItemsCount:",
category: 'public',
fn: function (aCollectionOfElements,aBlock){
var self=this;
var myLayout;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._new();
_st($1)._lineItemsCount_(aBlock);
$2=_st($1)._yourself();
myLayout=$2;
_st(myLayout)._applyOn_(aCollectionOfElements);
$3=aCollectionOfElements;
return $3;
}, function($ctx1) {$ctx1.fill(self,"on:withLineItemsCount:",{aCollectionOfElements:aCollectionOfElements,aBlock:aBlock,myLayout:myLayout},smalltalk.ROAbstractGridLayout.klass)})},
args: ["aCollectionOfElements", "aBlock"],
source: "on: aCollectionOfElements withLineItemsCount: aBlock\x0a\x09\x22place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally\x0a\x0a\x09For example:\x0a\x09self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: 5\x0a\x09=> place the 20 elements on a grid 5 x 4\x0a\x09\x0a\x09self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: [ :elements | elements size // 3 ]\x0a\x09=> place the 20 elements on a grid 3 x 7\x0a\x09\x22\x0a\x09\x0a\x09\x0a\x09| myLayout |\x0a\x09myLayout := self new lineItemsCount: aBlock; yourself.\x0a\x09myLayout applyOn: aCollectionOfElements.\x0a\x09^ aCollectionOfElements",
messageSends: ["lineItemsCount:", "new", "yourself", "applyOn:"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._gapSize_(anInteger);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withGap:",{anInteger:anInteger},smalltalk.ROAbstractGridLayout.klass)})},
args: ["anInteger"],
source: "withGap: anInteger \x0a\x0a\x09^ self new \x0a\x09\x09\x09gapSize: anInteger; \x0a\x09\x09\x09yourself",
messageSends: ["gapSize:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:withLineItemsCount:",
category: 'instance creation',
fn: function (anInteger,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._gapSize_(anInteger);
_st($2)._lineItemsCount_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withGap:withLineItemsCount:",{anInteger:anInteger,aBlock:aBlock},smalltalk.ROAbstractGridLayout.klass)})},
args: ["anInteger", "aBlock"],
source: "withGap: anInteger withLineItemsCount: aBlock\x0a\x09\x0a\x09^self new\x0a\x09\x09gapSize: anInteger;\x0a\x09\x09lineItemsCount: aBlock;\x0a\x09\x09yourself",
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withLineItemsCount:",
category: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._lineItemsCount_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withLineItemsCount:",{aBlock:aBlock},smalltalk.ROAbstractGridLayout.klass)})},
args: ["aBlock"],
source: "withLineItemsCount: aBlock\x0a\x09\x0a\x09^self new\x0a\x09\x09lineItemsCount: aBlock;\x0a\x09\x09yourself",
messageSends: ["lineItemsCount:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ROAbstractGridLayout.klass);


smalltalk.addClass('ROCellLayout', smalltalk.ROAbstractGridLayout, ['inCellPosition'], 'ARoassal-Layout');
smalltalk.ROCellLayout.comment="A ROCellLayout is like ROGridLayout. Elements of each column are centered along the same vertical line. And elements of each row are centered along the same horizontal line.\x0a\x0aInstance Variables\x0a\x09inCellPosition:\x09\x09<Object | Block>\x0a\x0ainCellPosition\x0a\x09- Object which computes position of each element inside a cell. The cell is the space allocated for an element. Its height is maximum of heights of elements on the row. Its width is maximum of widths of elements on the column. By default elements are in the middle of their cell.";
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (elements){
var self=this;
var pointer,lineItemCount,lineItemSize,cell;
function $ROCell(){return smalltalk.ROCell||(typeof ROCell=="undefined"?nil:ROCell)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
lineItemSize=_st(self._lineItemsCountBlock())._roValue_(elements);
cell=_st($ROCell())._elements_columns_(elements,lineItemSize);
pointer=_st(self._gapSize()).__at(self._gapSize());
lineItemCount=(0);
_st(elements)._withIndexDo_((function(element,index){
var inCellPointer;
return smalltalk.withContext(function($ctx2) {
$1=cell;
_st($1)._element_(element);
$2=_st($1)._number_(index);
$2;
inCellPointer=_st(self["@inCellPosition"])._roValue_(cell);
inCellPointer;
_st(self["@translator"])._translate_to_(element,_st(pointer).__plus(inCellPointer));
pointer=_st(_st(_st(_st(pointer)._x()).__plus(_st(_st(cell)._extent())._x())).__plus(_st(self._gapSize()).__star((2)))).__at(_st(pointer)._y());
pointer;
lineItemCount=_st(lineItemCount).__plus((1));
lineItemCount;
$3=_st(lineItemCount).__gt_eq(lineItemSize);
if(smalltalk.assert($3)){
pointer=_st(self._gapSize()).__at(_st(_st(_st(pointer)._y()).__plus(_st(self._gapSize()).__star((2)))).__plus(_st(_st(cell)._extent())._y()));
pointer;
lineItemCount=(0);
lineItemCount;
};
return self._step();
}, function($ctx2) {$ctx2.fillBlock({element:element,index:index,inCellPointer:inCellPointer},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,lineItemCount:lineItemCount,lineItemSize:lineItemSize,cell:cell},smalltalk.ROCellLayout)})},
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer lineItemCount lineItemSize cell |\x0a\x09lineItemSize := self lineItemsCountBlock roValue: elements.\x0a\x09cell := ROCell elements: elements columns: lineItemSize.\x0a\x09pointer := self gapSize @ self gapSize.\x0a\x09lineItemCount := 0.\x0a\x09elements withIndexDo: \x0a\x09\x09[ :element :index | | inCellPointer |\x0a\x09\x09cell element: element; number: index.\x0a\x09\x09inCellPointer := inCellPosition roValue: cell.\x0a\x09\x09translator translate: element to: pointer + inCellPointer.\x0a\x09\x09pointer := (pointer x + cell extent x + (self gapSize * 2)) @ pointer y.\x0a\x09\x09lineItemCount := lineItemCount + 1.\x0a\x09\x09lineItemCount >= lineItemSize ifTrue: \x0a\x09\x09\x09[ pointer := self gapSize @ (pointer y + (self gapSize * 2) + cell extent y).\x0a\x09\x09\x09lineItemCount := 0 ].\x0a\x09\x09self step ]",
messageSends: ["roValue:", "lineItemsCountBlock", "elements:columns:", "@", "gapSize", "withIndexDo:", "element:", "number:", "translate:to:", "+", "y", "*", "x", "extent", "ifTrue:", ">=", "step"],
referencedClasses: ["ROCell"]
}),
smalltalk.ROCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "inCellPosition:",
category: 'accessing',
fn: function (anObjectOrOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inCellPosition"]=anObjectOrOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"inCellPosition:",{anObjectOrOneArgBlock:anObjectOrOneArgBlock},smalltalk.ROCellLayout)})},
args: ["anObjectOrOneArgBlock"],
source: "inCellPosition: anObjectOrOneArgBlock\x0a\x0a\x09inCellPosition := anObjectOrOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCellLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@inCellPosition"]=(function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(_st(cell)._extent())._x()).__minus(_st(_st(cell)._element())._width())).__slash((2))).__at(_st(_st(_st(_st(cell)._extent())._y()).__minus(_st(_st(cell)._element())._height())).__slash((2)));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCellLayout)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09inCellPosition :=  [ :cell |\x0a\x09\x09((cell extent x - cell element width) / 2) @ ((cell extent y - cell element height) / 2)]",
messageSends: ["initialize", "@", "/", "-", "height", "element", "y", "extent", "width", "x"],
referencedClasses: []
}),
smalltalk.ROCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCentred",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inCellPosition_((function(cell){
return smalltalk.withContext(function($ctx2) {
return (0).__at(_st(_st(_st(_st(cell)._extent())._y()).__minus(_st(_st(cell)._element())._height())).__slash((2)));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"leftCentred",{},smalltalk.ROCellLayout)})},
args: [],
source: "leftCentred\x0a\x0a\x09self inCellPosition: [ :cell | 0 @ ((cell extent y - cell element height) / 2) ]",
messageSends: ["inCellPosition:", "@", "/", "-", "height", "element", "y", "extent"],
referencedClasses: []
}),
smalltalk.ROCellLayout);



smalltalk.addClass('ROGridLayout', smalltalk.ROAbstractGridLayout, [], 'ARoassal-Layout');
smalltalk.ROGridLayout.comment="A ROGridLayout places elements as a grid.\x0a\x0aInstance Variables\x0a\x09gapSize:\x09\x09<SmallInteger>\x0a\x09lineItemsCountBlock:\x09\x09<BlockContext>\x0a\x0agapSize\x0a\x09- number of pixels between each elements, horizontally and vertically\x0a\x0alineItemsCountBlock\x0a\x09- tells the amount of item per line should be used";
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (elements){
var self=this;
var pointer,lineItemCount,lineItemSize,maxLastLineHeight,originalGapLeft,originalGapTop,parent,oldParentStrategy;
function $ROPermissiveParent(){return smalltalk.ROPermissiveParent||(typeof ROPermissiveParent=="undefined"?nil:ROPermissiveParent)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
originalGapLeft=self._paddingLeftFor_(elements);
originalGapTop=self._paddingTopFor_(elements);
pointer=_st(originalGapLeft).__at(originalGapTop);
lineItemSize=_st(self._lineItemsCountBlock())._roValue_(elements);
lineItemCount=(0);
maxLastLineHeight=(0);
parent=_st(_st(elements)._anyOne())._parent();
$1=_st(parent)._isView();
if(! smalltalk.assert($1)){
oldParentStrategy=_st(_st(_st(elements)._anyOne())._parent())._resizeStrategy();
oldParentStrategy;
_st(parent)._resizeStrategy_(_st(_st($ROPermissiveParent())._new())._padding_(_st(oldParentStrategy)._padding()));
};
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
_st(self["@translator"])._translate_to_(element,pointer);
pointer=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self._gapSize()).__star((2)))).__at(_st(pointer)._y());
pointer;
lineItemCount=_st(lineItemCount).__plus((1));
lineItemCount;
maxLastLineHeight=_st(maxLastLineHeight)._max_(_st(element)._height());
maxLastLineHeight;
$2=_st(lineItemCount).__gt_eq(lineItemSize);
if(smalltalk.assert($2)){
pointer=_st(originalGapLeft).__at(_st(_st(_st(pointer)._y()).__plus(_st(self._gapSize()).__star((2)))).__plus(maxLastLineHeight));
pointer;
maxLastLineHeight=(0);
maxLastLineHeight;
lineItemCount=(0);
lineItemCount;
};
return self._step();
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
$3=_st(parent)._isView();
if(! smalltalk.assert($3)){
_st(parent)._resizeStrategy_(oldParentStrategy);
_st(parent)._adjustSizeIfNecessary();
};
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,lineItemCount:lineItemCount,lineItemSize:lineItemSize,maxLastLineHeight:maxLastLineHeight,originalGapLeft:originalGapLeft,originalGapTop:originalGapTop,parent:parent,oldParentStrategy:oldParentStrategy},smalltalk.ROGridLayout)})},
args: ["elements"],
source: "doExecute: elements\x0a\x09| pointer lineItemCount lineItemSize maxLastLineHeight originalGapLeft originalGapTop parent oldParentStrategy |\x0a\x09originalGapLeft := self paddingLeftFor: elements.\x0a\x09originalGapTop := self paddingTopFor: elements.\x0a\x09\x0a\x09pointer := originalGapLeft @ originalGapTop.\x0a\x09lineItemSize := self lineItemsCountBlock roValue: elements.\x0a\x09lineItemCount := 0.\x0a\x09maxLastLineHeight := 0.\x0a\x0a\x09\x22We are here assuming all the elements have the same parent\x22\x0a\x09parent := elements anyOne parent.\x0a\x09parent isView ifFalse:\x0a\x09\x09[oldParentStrategy := elements anyOne parent resizeStrategy.\x0a\x09\x09parent resizeStrategy: (ROPermissiveParent new padding: oldParentStrategy padding)].\x0a\x0a\x09elements\x0a\x09\x09do: [ :element | \x0a\x09\x09\x09translator translate: element to: pointer.\x0a\x09\x09\x09pointer := (pointer x + element width + (self gapSize * 2)) @ pointer y.\x0a\x09\x09\x09lineItemCount := lineItemCount + 1.\x0a\x09\x09\x09maxLastLineHeight := maxLastLineHeight max: element height.\x0a\x09\x09\x09lineItemCount >= lineItemSize\x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09pointer := originalGapLeft @ (pointer y + (self gapSize * 2) + maxLastLineHeight).\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09maxLastLineHeight := 0.\x0a\x09\x09\x09\x09\x09lineItemCount := 0 ].\x0a\x09\x09\x09self step ].\x0a\x09\x09\x0a\x09\x22We set the old strategy and adjust the size of the parent\x22\x0a\x09parent isView ifFalse:\x0a\x09\x09[parent resizeStrategy: oldParentStrategy.\x0a\x09\x09parent adjustSizeIfNecessary].",
messageSends: ["paddingLeftFor:", "paddingTopFor:", "@", "roValue:", "lineItemsCountBlock", "parent", "anyOne", "ifFalse:", "resizeStrategy", "resizeStrategy:", "padding:", "padding", "new", "isView", "do:", "translate:to:", "y", "+", "*", "gapSize", "width", "x", "max:", "height", "ifTrue:", ">=", "step", "adjustSizeIfNecessary"],
referencedClasses: ["ROPermissiveParent"]
}),
smalltalk.ROGridLayout);



smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "alignLeft",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="left";
return self}, function($ctx1) {$ctx1.fill(self,"alignLeft",{},smalltalk.ROAbstractLineLayout)})},
args: [],
source: "alignLeft\x0a\x09\x0a\x09alignment := #left",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignTop",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "alignTop\x0a\x09\x0a\x09alignment := #top",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "alignment\x0a\x09\x0a\x09^alignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment:",
category: 'not yet classified',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)});},
args: ["anObject"],
source: "alignment: anObject\x0a\x09\x0a\x09alignment := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'not yet classified',
fn: function (elements){
var self=this;
var pointer,delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@horizontallyStretchable"];
if(smalltalk.assert($1)){
self._doStretchHorizontal_(elements);
};
$2=self["@verticallyStretchable"];
if(smalltalk.assert($2)){
self._doStretchVertical_(elements);
};
pointer=self._positionOriginalPointer_(elements);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
delta=self._deltaFor_(element);
delta;
_st(self["@translator"])._translate_to_(element,_st(pointer).__minus(delta));
pointer=self._movePointer_accordingToFigure_(pointer,element);
pointer;
return self._step();
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.ROAbstractLineLayout)})},
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer delta |\x0a\x09horizontallyStretchable ifTrue: \x0a\x09\x09[ self doStretchHorizontal: elements ].\x0a\x09verticallyStretchable ifTrue: \x0a\x09\x09[ self doStretchVertical: elements ].\x0a\x09pointer := self positionOriginalPointer: elements.\x0a\x09elements do: \x0a\x09\x09[ :element |\x0a\x09\x09delta := self deltaFor: element.\x0a\x09\x09translator translate: element to: pointer - delta.\x0a\x09\x09pointer := self \x0a\x09\x09\x09\x09\x09movePointer: pointer\x0a\x09\x09\x09\x09\x09accordingToFigure: element.\x0a\x09\x09self step ].",
messageSends: ["ifTrue:", "doStretchHorizontal:", "doStretchVertical:", "positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:", "step"],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^horizontalGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalOutGap",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalOutGap",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "horizontalOutGap\x0a\x09\x0a\x09^horizontalOutGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROLayout.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(10);
self["@horizontalGap"]=(10);
self["@horizontalOutGap"]=(5);
self["@verticalOutGap"]=(5);
self["@verticallyStretchable"]=false;
self["@horizontallyStretchable"]=self["@verticallyStretchable"];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09verticalGap := 10.\x0a\x09horizontalGap := 10.\x0a\x09horizontalOutGap := 5.\x0a\x09verticalOutGap := 5.\x0a\x09horizontallyStretchable := verticallyStretchable := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@verticalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractLineLayout)})},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^verticalGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalOutGap",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@verticalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalOutGap",{},smalltalk.ROAbstractLineLayout)});},
args: [],
source: "verticalOutGap\x0a\x09\x0a\x09^verticalOutGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractLineLayout);



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
category: 'not yet classified',
fn: function (aNodeFigure) {
var self=this;
var delta;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
delta=(0);
$1=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("bottom"));
if(smalltalk.assert($1)){
delta=_st(aNodeFigure)._height();
delta;
};
$2=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("center"));
if(smalltalk.assert($2)){
delta=_st(_st(aNodeFigure)._height()).__slash((2));
delta;
};
$3=_st((0)).__at(delta);
return $3;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure,delta:delta},smalltalk.ROHorizontalLineLayout)});},
args: ["aNodeFigure"],
source: "deltaFor: aNodeFigure\x0a\x09\x0a\x09| delta |\x0a\x09delta := 0.\x0a\x09self alignment == #bottom ifTrue: [delta := aNodeFigure height].\x0a\x09self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].\x0a\x09^0 @ delta",
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'not yet classified',
fn: function (elements){
var self=this;
var pointer,delta;
return smalltalk.withContext(function($ctx1) { 
pointer=self._positionOriginalPointer_(elements);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
delta=self._deltaFor_(element);
delta;
_st(self["@translator"])._translate_to_(element,_st(pointer).__minus(delta));
pointer=self._movePointer_accordingToFigure_(pointer,element);
return pointer;
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.ROHorizontalLineLayout)})},
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer delta |\x0a\x09pointer := self positionOriginalPointer: elements.\x0a\x22\x0a\x09horizontallyStretchable ifTrue: \x0a\x09\x09[ self doStretchHorizontal: elements ].\x0a\x22\x0a\x09elements do: \x0a\x09\x09[ :element | \x0a\x09\x09delta := self deltaFor: element.\x0a\x09\x09translator translate: element to: pointer - delta.\x0a\x09\x09pointer := self \x0a\x09\x09\x09\x09\x09movePointer: pointer\x0a\x09\x09\x09\x09\x09accordingToFigure: element.\x0a ].\x09\x0a\x22\x0a\x09verticallyStretchable ifTrue: \x0a\x09\x09[ self doStretchVertical: elements ]\x0a\x22",
messageSends: ["positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROAbstractLineLayout.fn.prototype._initialize.apply(_st(self), []);
_st(self)._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHorizontalLineLayout)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09self alignTop",
messageSends: ["initialize", "alignTop"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
category: 'not yet classified',
fn: function (pointer, element) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self)._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.ROHorizontalLineLayout)});},
args: ["pointer", "element"],
source: "movePointer: pointer accordingToFigure: element\x0a\x09\x0a\x09^ (pointer x + element width + self horizontalGap) @ pointer y",
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
category: 'not yet classified',
fn: function (aGraph) {
var self=this;
var maxHeight,delta;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
delta=(0);
$1=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("bottom"));
if(smalltalk.assert($1)){
maxHeight=_st(_st(aGraph)._nodes())._maxValue_(smalltalk.symbolFor("height"));
maxHeight;
delta=maxHeight;
delta;
};
$2=_st(_st(self)._alignment()).__eq_eq(smalltalk.symbolFor("center"));
if(smalltalk.assert($2)){
maxHeight=_st(_st(aGraph)._nodes())._maxValue_(smalltalk.symbolFor("height"));
maxHeight;
delta=_st(maxHeight).__slash((2));
delta;
};
$3=_st(_st(self)._horizontalOutGap()).__at(_st(_st(self)._verticalOutGap()).__plus(delta));
return $3;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{aGraph:aGraph,maxHeight:maxHeight,delta:delta},smalltalk.ROHorizontalLineLayout)});},
args: ["aGraph"],
source: "positionOriginalPointer: aGraph \x0a\x09| maxHeight delta |\x0a\x09delta := 0.\x0a\x09self alignment == #bottom ifTrue: \x0a\x09\x09[ maxHeight := aGraph nodes maxValue: #height.\x0a\x09\x09delta := maxHeight ].\x0a\x09self alignment == #center ifTrue: \x0a\x09\x09[ maxHeight := aGraph nodes maxValue: #height.\x0a\x09\x09delta := maxHeight / 2.0 ].\x0a\x09^ self horizontalOutGap @ (self verticalOutGap + delta)",
messageSends: ["ifTrue:", "maxValue:", "nodes", "==", "alignment", "/", "@", "+", "verticalOutGap", "horizontalOutGap"],
referencedClasses: []
}),
smalltalk.ROHorizontalLineLayout);



smalltalk.addClass('ROVerticalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal-Layout');
smalltalk.ROVerticalLineLayout.comment="A ROVerticalLineLayout locates all the elements vertically";
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
category: 'hook',
fn: function (aNodeFigure){
var self=this;
var delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
delta=(0);
$1=_st(self._alignment()).__eq_eq("right");
if(smalltalk.assert($1)){
delta=_st(aNodeFigure)._width();
delta;
};
$2=_st(self._alignment()).__eq_eq("center");
if(smalltalk.assert($2)){
delta=_st(_st(aNodeFigure)._width()).__slash((2));
delta;
};
$3=_st(delta).__at((0));
return $3;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure,delta:delta},smalltalk.ROVerticalLineLayout)})},
args: ["aNodeFigure"],
source: "deltaFor: aNodeFigure\x0a\x09\x0a\x09| delta |\x0a\x09delta := 0.\x0a\x09self alignment == #right ifTrue: [delta := aNodeFigure width].\x0a\x09self alignment == #center ifTrue: [delta := aNodeFigure width / 2.0].\x0a\x09^delta @ 0",
messageSends: ["ifTrue:", "width", "==", "alignment", "/", "@"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
category: 'hook',
fn: function (aGraph){
var self=this;
var midWidest,step;
return smalltalk.withContext(function($ctx1) { 
midWidest=_st(_st(aGraph)._nodes())._inject_into_((0),(function(m,el){
return smalltalk.withContext(function($ctx2) {
return _st(m)._max_(_st(_st(el)._bounds())._width());
}, function($ctx2) {$ctx2.fillBlock({m:m,el:el},$ctx1)})}));
midWidest=_st(midWidest).__slash((2));
_st(_st(aGraph)._nodes())._do_((function(node){
return smalltalk.withContext(function($ctx2) {
step=_st(_st(_st(midWidest).__minus(_st(_st(_st(node)._bounds())._width()).__slash((2))))._asInteger()).__at((0));
step;
_st(_st(node)._bounds())._origin_(_st(_st(_st(node)._bounds())._origin()).__plus(step));
return _st(_st(node)._bounds())._corner_(_st(_st(_st(node)._bounds())._corner()).__plus(step));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doCenter:",{aGraph:aGraph,midWidest:midWidest,step:step},smalltalk.ROVerticalLineLayout)})},
args: ["aGraph"],
source: "doCenter: aGraph \x0a\x0a \x09| midWidest step |\x0a\x09midWidest := aGraph nodes \x0a\x09\x09inject: 0\x0a\x09\x09into: [ :m :el | m max: (el bounds width )].\x0a\x09midWidest := midWidest / 2.\x0a\x09aGraph nodes do: [ :node | \x0a\x09\x09step := (midWidest - (node bounds width /2)) asInteger @ 0.\x0a\x09\x09node bounds origin: (node bounds origin + step).\x0a\x09\x09node bounds corner: (node bounds corner + step).\x0a\x09]",
messageSends: ["inject:into:", "max:", "width", "bounds", "nodes", "/", "do:", "@", "asInteger", "-", "origin:", "+", "origin", "corner:", "corner"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
category: 'hook',
fn: function (aCollectionOfElements){
var self=this;
var parent,parentBounds;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(aCollectionOfElements)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
parent=_st(_st(aCollectionOfElements)._anyOne())._parent();
$3=_st(parent)._isView();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
parentBounds=_st(parent)._bounds();
_st(aCollectionOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._width_(_st(parentBounds)._width());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doStretchHorizontal:",{aCollectionOfElements:aCollectionOfElements,parent:parent,parentBounds:parentBounds},smalltalk.ROVerticalLineLayout)})},
args: ["aCollectionOfElements"],
source: "doStretchHorizontal: aCollectionOfElements \x0a\x09\x0a \x09| parent parentBounds |\x0a\x09aCollectionOfElements isNil ifTrue: [ ^ self \x22nothing to do\x22 ].\x0a\x09parent := aCollectionOfElements anyOne parent.\x0a\x09parent isView ifTrue: [ ^ self \x22ROView does not have bounds\x22 ].\x0a\x09parentBounds := parent bounds.\x0a\x0a\x09aCollectionOfElements do: [ :element | \x0a\x09\x09element width: parentBounds width ]",
messageSends: ["ifTrue:", "isNil", "parent", "anyOne", "isView", "bounds", "do:", "width:", "width"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
category: 'hook',
fn: function (aCollectionOfElements){
var self=this;
var parent,parentBounds,addedHeight,parentBoundsHeight,runningIndex,newHeight;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(aCollectionOfElements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
parent=_st(_st(aCollectionOfElements)._anyOne())._parent();
$3=_st(parent)._isView();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
parentBounds=_st(parent)._bounds();
addedHeight=_st(aCollectionOfElements)._inject_into_((0),(function(m,el){
return smalltalk.withContext(function($ctx2) {
return _st(m).__plus(_st(el)._height());
}, function($ctx2) {$ctx2.fillBlock({m:m,el:el},$ctx1)})}));
parentBoundsHeight=_st(parentBounds)._height();
runningIndex=(0);
$5=_st(_st(parentBounds)._height()).__gt(addedHeight);
if(smalltalk.assert($5)){
_st(aCollectionOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
newHeight=_st(_st(_st(_st(element)._height()).__star(parentBoundsHeight)).__slash(addedHeight))._asInteger();
newHeight;
_st(element)._height_(newHeight);
runningIndex=_st(_st(runningIndex).__plus(newHeight)).__plus(self["@verticalGap"]);
return runningIndex;
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"doStretchVertical:",{aCollectionOfElements:aCollectionOfElements,parent:parent,parentBounds:parentBounds,addedHeight:addedHeight,parentBoundsHeight:parentBoundsHeight,runningIndex:runningIndex,newHeight:newHeight},smalltalk.ROVerticalLineLayout)})},
args: ["aCollectionOfElements"],
source: "doStretchVertical: aCollectionOfElements \x0a\x0a \x09| parent parentBounds addedHeight parentBoundsHeight runningIndex newHeight |\x0a\x0a\x09aCollectionOfElements isEmpty ifTrue: [ ^ self \x22nothing to do\x22 ].\x0a\x09parent := aCollectionOfElements anyOne parent.\x0a\x09parent isView ifTrue: [ ^ self \x22ROView does not have bounds\x22 ].\x0a\x09parentBounds := parent bounds.\x0a\x0a\x09addedHeight := aCollectionOfElements \x0a\x09\x09inject: 0\x0a\x09\x09into: [ :m :el | m + el height ].\x0a\x0a\x09parentBoundsHeight := parentBounds height.\x0a\x09\x22parentBoundsHeight := parentBoundsHeight - ((aCollectionOfElements size - 1) * verticalGap) - (2 * verticalOutGap).\x22\x0a\x09\x0a\x09runningIndex := 0.\x0a\x09parentBounds height > addedHeight\x0a\x09\x09ifTrue: [ aCollectionOfElements do: [ :element | \x0a\x09\x09\x09\x09\x09\x09newHeight := (element height * parentBoundsHeight / addedHeight) asInteger.\x0a\x09\x09\x09\x09\x09\x09element height: newHeight.\x0a\x09\x09\x09\x09\x09\x09runningIndex := runningIndex + newHeight + verticalGap ] ]",
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "inject:into:", "+", "height", "do:", "asInteger", "/", "*", "height:", ">"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROVerticalLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._alignLeft();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROVerticalLineLayout)})},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09self alignLeft",
messageSends: ["initialize", "alignLeft"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
category: 'hook',
fn: function (pointer,aNodeFigure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(pointer)._setX_setY_(_st(pointer)._x(),_st(_st(_st(pointer)._y()).__plus(_st(aNodeFigure)._height())).__plus(self._verticalGap()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,aNodeFigure:aNodeFigure},smalltalk.ROVerticalLineLayout)})},
args: ["pointer", "aNodeFigure"],
source: "movePointer: pointer accordingToFigure: aNodeFigure\x0a\x09\x0a\x09^ pointer setX: pointer x setY: pointer y + aNodeFigure height + self verticalGap",
messageSends: ["setX:setY:", "x", "+", "verticalGap", "height", "y"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
category: 'hook',
fn: function (elements){
var self=this;
var maxWidth,delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
delta=(0);
$1=_st(self._alignment()).__eq_eq("right");
if(smalltalk.assert($1)){
maxWidth=_st(elements)._maxValue_("width");
maxWidth;
delta=maxWidth;
delta;
};
$2=_st(self._alignment()).__eq_eq("center");
if(smalltalk.assert($2)){
maxWidth=_st(elements)._maxValue_("width");
maxWidth;
delta=_st(maxWidth).__slash((2));
delta;
};
$3=_st(_st(self._horizontalOutGap()).__plus(delta)).__at(self._verticalOutGap());
return $3;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{elements:elements,maxWidth:maxWidth,delta:delta},smalltalk.ROVerticalLineLayout)})},
args: ["elements"],
source: "positionOriginalPointer: elements \x0a\x09| maxWidth delta |\x0a\x09delta := 0.\x0a\x09self alignment == #right ifTrue: \x0a\x09\x09[ maxWidth := elements maxValue: #width.\x0a\x09\x09delta := maxWidth ].\x0a\x09self alignment == #center ifTrue: \x0a\x09\x09[ maxWidth := elements maxValue: #width.\x0a\x09\x09delta := maxWidth / 2.0 ].\x0a\x09^ (self horizontalOutGap + delta) @ self verticalOutGap",
messageSends: ["ifTrue:", "maxValue:", "==", "alignment", "/", "@", "verticalOutGap", "+", "horizontalOutGap"],
referencedClasses: []
}),
smalltalk.ROVerticalLineLayout);



smalltalk.addClass('ROEdgeDrivenLayout', smalltalk.ROLayout, ['edges', 'userDefinedEdges', 'fromPositions', 'toPositions'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@affectedNodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodes",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "affectedNodes\x0a\x09\x0a\x09^affectedNodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@affectedNodes"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"affectedNodes:",{anObject:anObject},smalltalk.ROEdgeDrivenLayout)})},
args: ["anObject"],
source: "affectedNodes: anObject\x0a\x09\x0a\x09affectedNodes := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodesOf:",
category: 'accessing',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@affectedNodes"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(aNode)._nodes();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodesOf:",{aNode:aNode},smalltalk.ROEdgeDrivenLayout)})},
args: ["aNode"],
source: "affectedNodesOf:  aNode \x0a\x09^ affectedNodes ifNil: [ aNode nodes ]",
messageSends: ["ifNil:", "nodes"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "defaultFromPositions\x0a\x09^ #()\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "defaultToPositions\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (aGraphElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{aGraphElement:aGraphElement},smalltalk.ROEdgeDrivenLayout)})},
args: ["aGraphElement"],
source: "doExecute: aGraphElement\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doIncrementallyExecute:",
category: 'hook',
fn: function (anElementNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doExecute_(anElementNode);
return self}, function($ctx1) {$ctx1.fill(self,"doIncrementallyExecute:",{anElementNode:anElementNode},smalltalk.ROEdgeDrivenLayout)})},
args: ["anElementNode"],
source: "doIncrementallyExecute: anElementNode\x0a\x09\x22called by refreshLayoutEvery: ms. It is used to convey a feeling of incremental execution.\x22\x0a\x09\x0a\x09self doExecute: anElementNode",
messageSends: ["doExecute:"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "edges\x0a\x09\x0a\x09^edges",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edges"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"edges:",{aCollection:aCollection},smalltalk.ROEdgeDrivenLayout)})},
args: ["aCollection"],
source: "edges: aCollection\x0a\x09\x0a\x09edges := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesDo:",
category: 'iterator',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@edges"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@edges"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesDo:",{aBlock:aBlock},smalltalk.ROEdgeDrivenLayout)})},
args: ["aBlock"],
source: "edgesDo: aBlock\x0a\x09\x22Iterates over all the edges of the receiver.\x22\x0a\x09\x0a\x09edges ifNil: [ ^ self ].\x0a\x09edges do: aBlock",
messageSends: ["ifNil:", "do:"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
category: 'hook',
fn: function (elements){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._userDefinedEdges())._isNil();
if(smalltalk.assert($1)){
self._setEdgesFromElements_(elements);
} else {
var flat;
flat=_st($OrderedCollection())._new();
flat;
_st(self._userDefinedEdges())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._isCollection();
if(smalltalk.assert($2)){
return _st(flat)._addAll_(each);
} else {
return _st(flat)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._edges_(flat);
};
smalltalk.ROEdgeDrivenLayout.superclass.fn.prototype._executeOnElements_.apply(_st(self), [elements]);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROEdgeDrivenLayout)})},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x0a\x09self userDefinedEdges isNil \x0a\x09\x09ifTrue: [ self setEdgesFromElements: elements ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ | flat |\x0a\x09\x09\x09flat := OrderedCollection new.\x0a\x09\x09\x09self userDefinedEdges do: \x0a\x09\x09\x09\x09[ :each | \x0a\x09\x09\x09\x09each isCollection \x0a\x09\x09\x09\x09\x09ifTrue: [ flat addAll: each ]\x0a\x09\x09\x09\x09\x09ifFalse: [ flat add: each ] ].\x0a\x09\x09\x09self edges: flat ].\x0a\x09\x09\x0a\x09super executeOnElements: elements",
messageSends: ["ifTrue:ifFalse:", "setEdgesFromElements:", "new", "do:", "addAll:", "add:", "isCollection", "userDefinedEdges", "edges:", "isNil", "executeOnElements:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@fromPositions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@fromPositions"]=self._defaultFromPositions();
$1=self["@fromPositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "fromPositions\x0a\x09\x0a\x09^fromPositions ifNil: [fromPositions := self defaultFromPositions]",
messageSends: ["ifNil:", "defaultFromPositions"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fromPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"fromPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
args: ["anArray"],
source: "fromPositions: anArray\x0a\x09\x0a\x09fromPositions := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROEdgeDrivenLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@edges"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "initialize\x0a\x09\x22Initialization\x22\x0a\x09super initialize.\x0a\x09edges := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "isLineLayout\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "setEdgesFromElements:",
category: 'accessing',
fn: function (elements){
var self=this;
var view;
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(elements)._isEmpty();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
view=_st(_st(elements)._anyOne())._view();
self._edges_(_st(view)._elementsSuchThat_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(el)._isKindOf_($ROEdge()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(elements)._includes_(_st(el)._from());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})})))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(elements)._includes_(_st(el)._to());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"setEdgesFromElements:",{elements:elements,view:view},smalltalk.ROEdgeDrivenLayout)})},
args: ["elements"],
source: "setEdgesFromElements: elements \x0a\x09| view |\x0a\x09elements isEmpty ifTrue: [ ^ self ].\x0a\x22\x09self assert: [ (elements collect: #view) asSet size = 1 ].\x22\x0a\x09\x0a\x09elements isEmpty ifTrue: [ ^ self ].\x0a\x09\x0a\x09view := elements anyOne view.\x0a\x09self edges: (view elementsSuchThat: [ :el | ((el isKindOf: ROEdge) and: [ elements includes: el from ]) and: [ elements includes: el to ] ]).\x0a\x09",
messageSends: ["ifTrue:", "isEmpty", "view", "anyOne", "edges:", "elementsSuchThat:", "and:", "includes:", "to", "from", "isKindOf:"],
referencedClasses: ["ROEdge"]
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@toPositions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@toPositions"]=self._defaultToPositions();
$1=self["@toPositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toPositions",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "toPositions\x0a\x09\x0a\x09^toPositions ifNil: [toPositions := self defaultToPositions]",
messageSends: ["ifNil:", "defaultToPositions"],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"toPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
args: ["anArray"],
source: "toPositions: anArray\x0a\x09\x0a\x09toPositions := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userDefinedEdges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges",{},smalltalk.ROEdgeDrivenLayout)})},
args: [],
source: "userDefinedEdges\x0a\x09\x0a\x09^userDefinedEdges",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges:",
category: 'initialize-release',
fn: function (aCollectionOfEdges){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userDefinedEdges"]=aCollectionOfEdges;
return self}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges:",{aCollectionOfEdges:aCollectionOfEdges},smalltalk.ROEdgeDrivenLayout)})},
args: ["aCollectionOfEdges"],
source: "userDefinedEdges: aCollectionOfEdges\x0a\x09\x22useful to tell to the layout which edges have to be used for the layout\x22\x0a\x0a\x09userDefinedEdges := aCollectionOfEdges.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROEdgeDrivenLayout);



smalltalk.addClass('ROAbstractGraphLayout', smalltalk.ROEdgeDrivenLayout, ['verticalGap', 'horizontalGap', 'cachedChildren', 'cachedParents', 'cachedParentsWithHighestNestings'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cachedChildren",
category: 'private',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedChildren"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedChildren"]=_st($Dictionary())._new_((1000));
self["@cachedChildren"];
} else {
$1;
};
$2=self["@cachedChildren"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedChildren",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "cachedChildren\x0a\x09\x0a\x09cachedChildren ifNil: [cachedChildren := Dictionary new: 1000].\x0a\x09^cachedChildren",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParents",
category: 'private',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedParents"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedParents"]=_st($Dictionary())._new_((1000));
self["@cachedParents"];
} else {
$1;
};
$2=self["@cachedParents"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedParents",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "cachedParents\x0a\x09\x0a\x09cachedParents ifNil: [cachedParents := Dictionary new: 1000].\x0a\x09^cachedParents",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParentsWithHighestNestings",
category: 'private',
fn: function (){
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedParentsWithHighestNestings"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedParentsWithHighestNestings"]=_st($IdentityDictionary())._new_((1000));
self["@cachedParentsWithHighestNestings"];
} else {
$1;
};
$2=self["@cachedParentsWithHighestNestings"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedParentsWithHighestNestings",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "cachedParentsWithHighestNestings\x0a\x09\x0a\x09cachedParentsWithHighestNestings\x0a\x09\x09ifNil: [cachedParentsWithHighestNestings := IdentityDictionary new: 1000].\x0a\x09^cachedParentsWithHighestNestings",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
category: 'private',
fn: function (aNode){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self._cachedChildren())._at_ifAbsentPut_(aNode,(function(){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st($OrderedCollection())._new();
nodes;
self._edgesDo_((function(edge){
return smalltalk.withContext(function($ctx3) {
$2=_st(_st(_st(edge)._from()).__eq_eq(aNode))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(edge)._to()).__tild_eq(aNode);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
if(smalltalk.assert($2)){
$3=_st(nodes)._includes_(_st(edge)._from());
if(! smalltalk.assert($3)){
return _st(nodes)._add_(_st(edge)._to());
};
};
}, function($ctx3) {$ctx3.fillBlock({edge:edge},$ctx2)})}));
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenFor:",{aNode:aNode},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode"],
source: "childrenFor: aNode\x0a\x09\x0a\x09^self cachedChildren\x0a\x09\x09at: aNode\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[| nodes |\x0a\x09\x09\x09nodes := OrderedCollection new.\x0a\x09\x09\x09self edgesDo:\x0a\x09\x09\x09\x09\x09[:edge | \x0a\x09\x09\x09\x09\x09(edge from == aNode and: [edge to ~= aNode])\x0a\x09\x09\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09\x09\x09[(nodes includes: edge from) ifFalse: [nodes add: edge to]]].\x0a\x09\x09\x09nodes]",
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "ifFalse:", "add:", "to", "includes:", "from", "and:", "~=", "==", "cachedChildren"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:except:",
category: 'private',
fn: function (aNode,aNodeCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._childrenFor_(aNode))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aNodeCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenFor:except:",{aNode:aNode,aNodeCollection:aNodeCollection},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode", "aNodeCollection"],
source: "childrenFor: aNode except: aNodeCollection\x0a\x09\x0a\x09^(self childrenFor: aNode) \x0a\x09\x09reject: [:each | aNodeCollection includes: each]\x0a\x09\x0a\x09\x22we are explicitly not using the default Collection>>difference: behavior here because we want to preserve the order of the collection\x22",
messageSends: ["reject:", "includes:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenWithHighestNestingLevelFor:",
category: 'private',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._childrenFor_(aNode))._select_((function(eachChild){
return smalltalk.withContext(function($ctx2) {
return _st(self._highestNestingParentFor_(eachChild)).__eq_eq(aNode);
}, function($ctx2) {$ctx2.fillBlock({eachChild:eachChild},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenWithHighestNestingLevelFor:",{aNode:aNode},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode"],
source: "childrenWithHighestNestingLevelFor: aNode\x0a\x09\x0a\x09^(self childrenFor: aNode)\x0a\x09\x09select: [:eachChild | (self highestNestingParentFor: eachChild) == aNode]",
messageSends: ["select:", "==", "highestNestingParentFor:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cachedParents"]=nil;
self["@cachedChildren"]=nil;
self["@cachedParentsWithHighestNestings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "clear\x0a\x09\x0a\x09cachedParents := nil.\x0a\x09cachedChildren := nil.\x0a\x09cachedParentsWithHighestNestings := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["bottomCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "defaultFromPositions\x0a\x09\x0a\x09^#(#bottomCenter)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'default values',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["topCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "defaultToPositions\x0a\x09\x0a\x09^#(#topCenter)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
category: 'hooks',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractGraphLayout.superclass.fn.prototype._doInitialize_.apply(_st(self), [elements]);
self._clear();
self._greedyCycleRemoval_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROAbstractGraphLayout)})},
args: ["elements"],
source: "doInitialize: elements \x0a\x09super doInitialize: elements.\x0a\x09self clear.\x0a\x09self greedyCycleRemoval: elements",
messageSends: ["doInitialize:", "clear", "greedyCycleRemoval:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
category: 'battista',
fn: function (aCollection){
var self=this;
var g,sl,sr,s,indeg,outdeg,degrees,vertex,gcopy;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
g=_st(aCollection)._copy();
sl=_st($OrderedCollection())._new();
sr=_st($OrderedCollection())._new();
gcopy=_st(g)._copy();
_st(gcopy)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._childrenFor_(node))._isEmpty();
if(smalltalk.assert($1)){
_st(sr)._addFirst_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
gcopy=nil;
gcopy=_st(g)._copy();
_st(gcopy)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$2=_st(self._parentsFor_(node))._isEmpty();
if(smalltalk.assert($2)){
_st(sl)._addLast_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
degrees=_st($IdentityDictionary())._new();
_st(g)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
indeg=_st(self._parentsFor_(node))._size();
indeg;
outdeg=_st(self._childrenFor_(node))._size();
outdeg;
return _st(degrees)._at_put_(node,_st(outdeg).__minus(indeg));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
g=_st(g)._asSortedCollection_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(degrees)._at_(a)).__gt_eq(_st(degrees)._at_(b));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(g)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
vertex=_st(g)._detect_ifNone_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(self._parentsFor_(v))._anySatisfy_((function(w){
return smalltalk.withContext(function($ctx4) {
return _st(sl)._includes_(w);
}, function($ctx4) {$ctx4.fillBlock({w:w},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(g)._first();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
vertex;
_st(sl)._addLast_(vertex);
return _st(g)._remove_(vertex);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
s=_st(sl).__comma(sr);
$3=_st(self._edges())._notNil();
if(smalltalk.assert($3)){
_st(_st(self._edges())._copy())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {
$4=_st(_st(s)._indexOf_(_st(edge)._from())).__gt(_st(s)._indexOf_(_st(edge)._to()));
if(smalltalk.assert($4)){
return _st(self._edges())._remove_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
};
self._clear();
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aCollection:aCollection,g:g,sl:sl,sr:sr,s:s,indeg:indeg,outdeg:outdeg,degrees:degrees,vertex:vertex,gcopy:gcopy},smalltalk.ROAbstractGraphLayout)})},
args: ["aCollection"],
source: "greedyCycleRemoval: aCollection\x0a\x09\x22Di Battista Greedy-Cycle-Removal algorithm. Chapter 9.4, page 297. The last part is not like in the book. The original algorithm only takes\x0a\x09local optimas into account. This will break ordinary trees sometimes. This version also takes global optimas into account.\x22\x0a\x0a\x09| g sl sr s indeg outdeg degrees vertex gcopy |\x0a\x09g := aCollection copy.\x0a\x09sl := OrderedCollection new.\x0a\x09sr := OrderedCollection new. \x22While g contains a sink (aka leaf)\x22\x0a\x0a\x22 - - - \x22 \x0agcopy := g copy.\x0a\x22 - - - \x22 \x0agcopy \x22g copy\x22\x0ado:\x0a[:node |\x09\x0a(self childrenFor: node) isEmpty\x0aifTrue:\x0a[sr addFirst: node.\x09\x0ag remove: node]\x09].\x09\x22While g contains a source (aka root)\x22\x0a\x22 - - - \x22 \x0agcopy := nil.\x0agcopy := g copy.\x09\x0a\x22 - - - \x22 \x0agcopy \x22g copy\x22\x0ado:\x0a[:node | \x0a(self parentsFor: node) isEmpty\x0aifTrue:\x0a[sl addLast: node.\x0ag remove: node]\x09].\x09\x22Calculate deg for all remaining vertices\x22\x0adegrees := IdentityDictionary new.\x0ag\x0ado:\x0a[:node | \x0aindeg := (self parentsFor: node) size.\x0aoutdeg := (self childrenFor: node) size.\x09\x22indeg := self edges inject: 0 into: [:sum :edge | (edge toFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].\x0aoutdeg := self edges inject: 0 into: [:sum :edge | (edge fromFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].\x22\x0adegrees\x0aat: node\x0aput: outdeg - indeg].\x09\x22While g not empty\x22\x0ag := g asSortedCollection: [:a :b | (degrees at: a) >= (degrees at: b)].\x0a[g isEmpty]\x0awhileFalse:\x0a[vertex := g\x0adetect: [:v | (self parentsFor: v) anySatisfy: [:w | sl includes: w]]\x0aifNone: [g first].\x09\x22Corner case: Closed cycle with not root at all. Eg 1 -> 2 -> 3 -> 1\x22\x0asl addLast: vertex.\x0ag remove: vertex].\x09\x22Remove all leftward edges\x22\x0as := sl , sr.\x0aself edges notNil\x0aifTrue: \x0a[ self edges copy\x0ado:\x0a[:edge | \x0a(s indexOf: edge from) > (s indexOf: edge to)\x0aifTrue: [self edges remove: edge ] ] ].\x09\x0a\x22Reset the cache\x22\x0aself clear",
messageSends: ["copy", "new", "do:", "ifTrue:", "addFirst:", "remove:", "isEmpty", "childrenFor:", "addLast:", "parentsFor:", "size", "at:put:", "-", "asSortedCollection:", ">=", "at:", "whileFalse:", "detect:ifNone:", "anySatisfy:", "includes:", "first", ",", "edges", ">", "indexOf:", "to", "from", "notNil", "clear"],
referencedClasses: ["OrderedCollection", "IdentityDictionary"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "highestNestingParentFor:",
category: 'private',
fn: function (aNodeFigure){
var self=this;
var parents;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._cachedParentsWithHighestNestings())._at_ifAbsentPut_(aNodeFigure,(function(){
return smalltalk.withContext(function($ctx2) {
parents=self._parentsFor_(aNodeFigure);
parents;
$2=_st(parents)._isEmpty();
if(smalltalk.assert($2)){
return (0);
} else {
return _st(parents)._detectMax_((function(eachParent){
return smalltalk.withContext(function($ctx3) {
return self._nestingLevelFor_(eachParent);
}, function($ctx3) {$ctx3.fillBlock({eachParent:eachParent},$ctx2)})}));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highestNestingParentFor:",{aNodeFigure:aNodeFigure,parents:parents},smalltalk.ROAbstractGraphLayout)})},
args: ["aNodeFigure"],
source: "highestNestingParentFor: aNodeFigure\x0a\x09\x0a\x09| parents |\x0a\x09^self cachedParentsWithHighestNestings\x0a\x09\x09at: aNodeFigure\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[parents := self parentsFor: aNodeFigure.\x0a\x09\x09\x09parents isEmpty\x0a\x09\x09\x09\x09ifTrue: [0]\x0a\x09\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09\x09[parents detectMax: [:eachParent | self nestingLevelFor: eachParent]]]",
messageSends: ["at:ifAbsentPut:", "parentsFor:", "ifTrue:ifFalse:", "detectMax:", "nestingLevelFor:", "isEmpty", "cachedParentsWithHighestNestings"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@horizontalGap"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._horizontalGap();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^horizontalGap ifNil: [self class horizontalGap]",
messageSends: ["ifNil:", "horizontalGap", "class"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
args: ["anInteger"],
source: "horizontalGap: anInteger\x0a\x09\x0a\x09horizontalGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nestingLevelFor:",
category: 'private',
fn: function (aNodeFigure){
var self=this;
var parents,parentsNesting;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
parents=self._parentsFor_(aNodeFigure);
parentsNesting=_st(parents)._collect_((function(eachParent){
return smalltalk.withContext(function($ctx2) {
return self._nestingLevelFor_(eachParent);
}, function($ctx2) {$ctx2.fillBlock({eachParent:eachParent},$ctx1)})}));
$2=_st(parentsNesting)._isEmpty();
if(smalltalk.assert($2)){
$1=(0);
} else {
$1=_st(_st(parentsNesting)._max()).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nestingLevelFor:",{aNodeFigure:aNodeFigure,parents:parents,parentsNesting:parentsNesting},smalltalk.ROAbstractGraphLayout)})},
args: ["aNodeFigure"],
source: "nestingLevelFor: aNodeFigure\x0a\x09\x0a\x09| parents parentsNesting |\x0a\x09parents := self parentsFor: aNodeFigure.\x0a\x09parentsNesting := parents\x0a\x09\x09collect: [:eachParent | self nestingLevelFor: eachParent].\x0a\x09^parentsNesting isEmpty\x0a\x09\x09ifTrue: [0]\x0a\x09\x09ifFalse: [parentsNesting max + 1]",
messageSends: ["parentsFor:", "collect:", "nestingLevelFor:", "ifTrue:ifFalse:", "+", "max", "isEmpty"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'actions',
fn: function (el,edgs){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._userDefinedEdges();
if(($receiver = $1) == nil || $receiver == undefined){
self._userDefinedEdges_(edgs);
} else {
$1;
};
$2=self._applyOn_(el);
return $2;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{el:el,edgs:edgs},smalltalk.ROAbstractGraphLayout)})},
args: ["el", "edgs"],
source: "on: el edges: edgs\x0a\x09\x22Do the layout of the elements tacking into account the provided edges\x22\x0a\x0a\x09self userDefinedEdges ifNil: [ self userDefinedEdges: edgs ].\x0a\x0a\x09^ self applyOn: el.",
messageSends: ["ifNil:", "userDefinedEdges:", "userDefinedEdges", "applyOn:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "parentsFor:",
category: 'private',
fn: function (aNode){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._cachedParents())._at_ifAbsentPut_(aNode,(function(){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st($OrderedCollection())._new();
nodes;
self._edgesDo_((function(edge){
return smalltalk.withContext(function($ctx3) {
$2=_st(_st(edge)._to()).__eq_eq(aNode);
if(smalltalk.assert($2)){
return _st(nodes)._add_(_st(edge)._from());
};
}, function($ctx3) {$ctx3.fillBlock({edge:edge},$ctx2)})}));
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentsFor:",{aNode:aNode},smalltalk.ROAbstractGraphLayout)})},
args: ["aNode"],
source: "parentsFor: aNode\x0a\x09^ self cachedParents\x0a\x09\x09at: aNode\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[ | nodes |\x0a\x09\x09\x09nodes := OrderedCollection new.\x0a\x09\x09\x09self edgesDo:\x0a\x09\x09\x09\x09\x09[:edge | edge to == aNode ifTrue: [ nodes add: edge from ] ].\x0a\x09\x09\x09nodes ]",
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "add:", "from", "==", "to", "cachedParents"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rootNodesFor:",
category: 'private',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(node){
return smalltalk.withContext(function($ctx2) {
return _st(_st(node)._isNotEdge())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self._parentsFor_(node))._isEmpty();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootNodesFor:",{aCollection:aCollection},smalltalk.ROAbstractGraphLayout)})},
args: ["aCollection"],
source: "rootNodesFor: aCollection\x0a\x09^ aCollection select: [:node | \x0a\x09\x09node isNotEdge and: \x0a\x09\x09\x09[ (self parentsFor: node) isEmpty ] ].\x0a\x09",
messageSends: ["select:", "and:", "isEmpty", "parentsFor:", "isNotEdge"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@verticalGap"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._verticalGap();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractGraphLayout)})},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^verticalGap ifNil: [self class verticalGap]",
messageSends: ["ifNil:", "verticalGap", "class"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
args: ["anInteger"],
source: "verticalGap: anInteger\x0a\x09\x0a\x09verticalGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^3",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'public',
fn: function (elements,edges){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._userDefinedEdges_(edges);
$3=_st($2)._applyOn_(elements);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.ROAbstractGraphLayout.klass)})},
args: ["elements", "edges"],
source: "on: elements edges: edges\x0a\x09\x22Do the layout of the elements tacking into account the provided edges\x22\x0a\x0a\x09^ self new \x0a\x09\x09userDefinedEdges: edges;\x0a\x09\x09applyOn: elements.",
messageSends: ["userDefinedEdges:", "new", "applyOn:"],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^20",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractGraphLayout.klass);


smalltalk.addClass('ROAbstractCompactTree', smalltalk.ROAbstractGraphLayout, ['sonsDictionary', 'root', 'initialLayout', 'margin'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
category: 'private',
fn: function (aNode){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
var $early={};
try {
$1=_st(self["@sonsDictionary"])._isEmpty();
if(smalltalk.assert($1)){
$2=smalltalk.ROAbstractCompactTree.superclass.fn.prototype._childrenFor_.apply(_st(self), [aNode]);
return $2;
} else {
$3=_st(self["@sonsDictionary"])._at_ifAbsent_(aNode,(function(){
return smalltalk.withContext(function($ctx2) {
$4=_st($OrderedCollection())._new();
throw $early=[$4];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $3;
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"childrenFor:",{aNode:aNode},smalltalk.ROAbstractCompactTree)})},
args: ["aNode"],
source: "childrenFor: aNode \x0a\x0a\x09sonsDictionary isEmpty ifTrue: [ ^ super childrenFor: aNode ] \x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^sonsDictionary at: aNode ifAbsent: [ ^ OrderedCollection new ] ]",
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "at:ifAbsent:", "new", "isEmpty"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
category: 'algorithm',
fn: function (aNode,another){
var self=this;
var difference,max,nodeA,nodeB;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
nodeB=aNode;
nodeA=another;
$1=_st(aNode).__eq(another);
if(smalltalk.assert($1)){
max=(0);
} else {
max=_st(_st(self["@horizontalGap"]).__slash((2))).__minus(_st(_st(nodeB)._x()).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(_st(aNode)._layer()).__minus((1)))));
};
nodeB=self._followLeftContour_toLayer_(nodeB,_st(_st(nodeB)._layer()).__plus((1)));
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(nodeB)._isNil())._not()).__and(_st(_st(nodeA)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
difference=_st(self["@horizontalGap"]).__minus(_st(self._getAbcissaOf_inSubtreeFromLayer_(nodeB,_st(_st(aNode)._layer()).__minus((1)))).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(_st(aNode)._layer()).__minus((1)))));
difference;
max=_st(max)._max_(difference);
max;
nodeB=self._followLeftContour_toLayer_(nodeB,_st(_st(nodeB)._layer()).__plus((1)));
nodeB;
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=max;
return $2;
}, function($ctx1) {$ctx1.fill(self,"compareContourOf:with:",{aNode:aNode,another:another,difference:difference,max:max,nodeA:nodeA,nodeB:nodeB},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "another"],
source: "compareContourOf: aNode with: another\x0a\x09\x22return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode\x22\x0a\x0a\x09| difference max nodeA nodeB |\x0a\x09nodeB := aNode.\x09\x22the right one\x22\x0a\x09nodeA := another.\x09\x22the left one\x22\x0a\x09max := aNode = another\x0a\x09\x09ifTrue: [ 0 ]\x0a\x09\x09ifFalse: [ horizontalGap / 2 - (nodeB x - (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)) ].\x0a\x09nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.\x0a\x09nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1.\x0a\x09[ nodeB isNil not & nodeA isNil not ]\x0a\x09\x09whileTrue: [ \x0a\x09\x09\x09difference := horizontalGap\x0a\x09\x09\x09\x09-\x0a\x09\x09\x09\x09\x09((self getAbcissaOf: nodeB inSubtreeFromLayer: aNode layer - 1)\x0a\x09\x09\x09\x09\x09\x09- (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)).\x0a\x09\x09\x09max := max max: difference.\x0a\x09\x09\x09nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.\x0a\x09\x09\x09nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1 ].\x0a\x09^ max",
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layer", "x", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
category: 'algorithm',
fn: function (aNode){
var self=this;
var children,neighbor,nodeA;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
children=self._childrenFor_(aNode);
neighbor=self._leftSiblingOf_(aNode);
$1=_st(children)._isEmpty();
if(smalltalk.assert($1)){
$2=_st(neighbor)._isNil();
if(smalltalk.assert($2)){
$3=aNode;
_st($3)._x_((0));
$4=_st($3)._mod_((0));
$4;
} else {
$5=aNode;
_st($5)._x_(_st(_st(neighbor)._x()).__plus(_st(self["@horizontalGap"]).__slash((2))));
_st($5)._mod_(_st(neighbor)._mod());
$6=_st($5)._pointer_(self._followRightContour_toLayer_(neighbor,_st(_st(aNode)._layer()).__plus((1))));
$6;
};
} else {
$7=aNode;
_st($7)._leftContour_(_st(children)._first());
$8=_st($7)._rightContour_(_st(children)._last());
$8;
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$9=aNode;
_st($9)._x_(_st(_st(_st(_st(_st(aNode)._leftContour())._x()).__plus(_st(_st(aNode)._rightContour())._x())).__plus(_st(_st(aNode)._rightContour())._mod())).__slash((2)));
$10=_st($9)._mod_((0));
$10;
$11=_st(neighbor)._isNil();
if(! smalltalk.assert($11)){
_st(aNode)._mod_(self._compareContourOf_with_(aNode,neighbor));
nodeA=self._followLeftContour_toLayer_(_st(aNode)._father(),_st(aNode)._layer());
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followLeftContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followLeftContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(nodeA)._pointer_(self._followLeftContour_toLayer_(aNode,_st(_st(nodeA)._layer()).__plus((1))));
nodeA=self._followRightContour_toLayer_(aNode,_st(_st(aNode)._layer()).__plus((1)));
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(nodeA)._pointer_(self._followRightContour_toLayer_(neighbor,_st(_st(nodeA)._layer()).__plus((1))));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"computePosition:",{aNode:aNode,children:children,neighbor:neighbor,nodeA:nodeA},smalltalk.ROAbstractCompactTree)})},
args: ["aNode"],
source: "computePosition: aNode\x0a\x22compute the position of the given node and of his sons recursively\x22\x0a\x0a\x09| children neighbor nodeA |\x0a\x09\x0a\x09children := self childrenFor: aNode.\x0a\x09neighbor := self leftSiblingOf: aNode.\x0a\x09\x0a\x09children isEmpty ifTrue: [ neighbor isNil ifTrue: [ aNode x: 0; mod: 0.]  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ aNode x: (neighbor x + (horizontalGap /2)); mod: (neighbor mod);\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  pointer: (self followRightContour: neighbor toLayer: (aNode layer + 1)) ] ]\x0a\x09\x09\x09\x09\x09 \x0a\x09\x09\x09\x09\x09 ifFalse: [aNode leftContour: children first;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09rightContour: children last.\x0a\x09\x09\x09\x09\x09\x09\x09  children do: [:e | self computePosition: e ].\x0a\x09\x09\x09\x09\x09\x09\x09      aNode x: (aNode leftContour x + aNode rightContour x + aNode rightContour mod ) /2;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09mod: 0. \x0a\x09\x09\x09\x09\x09\x09\x09\x09neighbor isNil ifFalse: [ aNode mod: (self compareContourOf: aNode with: neighbor).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  nodeA := (self followLeftContour: (aNode father) toLayer: (aNode layer)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  [(self followLeftContour: nodeA toLayer: (nodeA layer + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: (nodeA layer + 1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA pointer: (self followLeftContour: aNode toLayer: (nodeA layer + 1)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA := self followRightContour: aNode toLayer: (aNode layer + 1).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 [(self followRightContour: nodeA toLayer: (nodeA layer +1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: (nodeA layer +1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09nodeA pointer: (self followRightContour: neighbor toLayer: (nodeA layer +1) ) ] ]",
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "x:", "mod:", "+", "/", "x", "mod", "pointer:", "followRightContour:toLayer:", "layer", "isNil", "leftContour:", "first", "rightContour:", "last", "do:", "computePosition:", "rightContour", "leftContour", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "father", "whileFalse:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "coordinate:withMod:",
category: 'hook',
fn: function (aNode,aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"coordinate:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "aFloat"],
source: "coordinate: aNode withMod: aFloat\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (nodeElements){
var self=this;
var rootNodes;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@initialLayout"])._isNil();
if(! smalltalk.assert($1)){
_st(_st(self["@initialLayout"])._new())._executeOnElements_(nodeElements);
};
rootNodes=self._rootNodesFor_(nodeElements);
$2=rootNodes;
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initialize_whoseFatherIs_(e,nil);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$3=_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(rootNodes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._draw_withMod_(e,(0));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{nodeElements:nodeElements,rootNodes:rootNodes},smalltalk.ROAbstractCompactTree)})},
args: ["nodeElements"],
source: "doExecute: nodeElements \x0a\x09| rootNodes |\x0a\x09\x0a\x09initialLayout isNil  ifFalse: [ initialLayout new executeOnElements: nodeElements. ].\x0a\x09\x0a\x09rootNodes := self rootNodesFor: nodeElements.\x0a\x0a\x22\x09root isNil ifTrue: [ rootNodes := self rootNodesFor: nodeElements. ]\x0a\x09\x09\x09 ifFalse: [ rootNodes := Array with: root.\x0a\x09\x09\x09\x09\x09\x09self coveringTreeFor: nodeElements from: root ].\x0a\x22\x09\x0a\x09rootNodes do: [:e | self initialize: e whoseFatherIs: nil ];\x0a\x09\x09do: [:e | self computePosition:e].\x0a\x09\x0a\x09rootNodes  do: [:e |\x0a\x09\x09\x09\x09\x09self draw:e withMod: 0  ]",
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "draw:withMod:"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:withMod:",
category: 'hook',
fn: function (aNode,aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "aFloat"],
source: "draw: aNode withMod: aFloat\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followLeftContour:toLayer:",
category: 'algorithm',
fn: function (aNode,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(_st(aNode)._layer()).__eq(anInteger);
if(smalltalk.assert($1)){
$2=aNode;
return $2;
};
$3=_st(_st(aNode)._layer()).__gt(anInteger);
if(smalltalk.assert($3)){
return nil;
};
$4=_st(_st(aNode)._leftContour())._isNil();
if(smalltalk.assert($4)){
$5=_st(_st(aNode)._pointer())._isNil();
if(smalltalk.assert($5)){
return nil;
} else {
$6=self._followLeftContour_toLayer_(_st(aNode)._pointer(),anInteger);
return $6;
};
} else {
$7=self._followLeftContour_toLayer_(_st(aNode)._leftContour(),anInteger);
return $7;
};
return self}, function($ctx1) {$ctx1.fill(self,"followLeftContour:toLayer:",{aNode:aNode,anInteger:anInteger},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "anInteger"],
source: "followLeftContour: aNode toLayer: anInteger\x0a\x09\x22return the last node in the left contour begining at anode\x22\x0a\x09\x0a\x09(aNode layer = anInteger ) ifTrue: [^ aNode  ].\x0a\x09(aNode layer > anInteger ) ifTrue: [^ nil  ].\x0a\x09\x0a\x09aNode leftContour isNil ifTrue: [ aNode pointer isNil ifTrue: [ ^ nil ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ ^ ( self followLeftContour: aNode pointer toLayer: anInteger ) ] ]\x0a\x09\x0a\x09\x09\x09  \x09\x09\x09\x09ifFalse: [ ^ (self followLeftContour: aNode leftContour toLayer: anInteger ) ]",
messageSends: ["ifTrue:", "=", "layer", ">", "ifTrue:ifFalse:", "followLeftContour:toLayer:", "pointer", "isNil", "leftContour"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followRightContour:toLayer:",
category: 'algorithm',
fn: function (aNode,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(_st(aNode)._layer()).__eq(anInteger);
if(smalltalk.assert($1)){
$2=aNode;
return $2;
};
$3=_st(_st(aNode)._layer()).__gt(anInteger);
if(smalltalk.assert($3)){
return nil;
};
$4=_st(_st(aNode)._rightContour())._isNil();
if(smalltalk.assert($4)){
$5=_st(_st(aNode)._pointer())._isNil();
if(smalltalk.assert($5)){
return nil;
} else {
$6=self._followRightContour_toLayer_(_st(aNode)._pointer(),anInteger);
return $6;
};
} else {
$7=self._followRightContour_toLayer_(_st(aNode)._rightContour(),anInteger);
return $7;
};
return self}, function($ctx1) {$ctx1.fill(self,"followRightContour:toLayer:",{aNode:aNode,anInteger:anInteger},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "anInteger"],
source: "followRightContour: aNode toLayer: anInteger\x0a\x09\x22return the node in the right contour begining at anode in layer anInteger\x22\x0a\x0a\x09(aNode layer = anInteger ) ifTrue: [^ aNode  ].\x0a\x09(aNode layer > anInteger ) ifTrue: [^ nil  ].\x0a\x0a\x09aNode rightContour isNil ifTrue: [ aNode pointer isNil ifTrue: [ ^ nil ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ ^ ( self followRightContour: aNode pointer toLayer: anInteger ) ] ]\x0a\x09\x0a\x09\x09\x09  \x09\x09\x09\x09ifFalse: [ ^ (self followRightContour: aNode rightContour toLayer: anInteger ) ]",
messageSends: ["ifTrue:", "=", "layer", ">", "ifTrue:ifFalse:", "followRightContour:toLayer:", "pointer", "isNil", "rightContour"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "getAbcissaOf:inSubtreeFromLayer:",
category: 'algorithm',
fn: function (aNode,anInteger){
var self=this;
var node,x;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(anInteger).__lt((0));
if(smalltalk.assert($1)){
$2=self._getAbcissaOf_inSubtreeFromLayer_(aNode,(0));
return $2;
};
$3=_st(_st(aNode)._layer()).__eq(anInteger);
if(smalltalk.assert($3)){
$4=_st(aNode)._x();
return $4;
};
$5=_st(_st(aNode)._layer()).__lt(anInteger);
if(smalltalk.assert($5)){
return nil;
};
x=_st(_st(aNode)._x()).__plus(_st(aNode)._mod());
node=_st(aNode)._father();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(node)._layer()).__eq(anInteger);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
x=_st(x).__plus(_st(node)._mod());
x;
node=_st(node)._father();
return node;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=x;
return $6;
}, function($ctx1) {$ctx1.fill(self,"getAbcissaOf:inSubtreeFromLayer:",{aNode:aNode,anInteger:anInteger,node:node,x:x},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "anInteger"],
source: "getAbcissaOf: aNode inSubtreeFromLayer: anInteger\x0a\x0a\x09| node x |\x0a\x09\x0a\x09(anInteger < 0) ifTrue: [^ self getAbcissaOf: aNode inSubtreeFromLayer: 0 ].\x0a\x09\x0a\x09(aNode layer = anInteger ) ifTrue: [ ^ aNode x ].\x0a\x09(aNode layer < anInteger ) ifTrue: [ ^ nil ].\x0a\x09\x0a\x09x := aNode x + aNode mod.\x0a\x09\x0a\x09node := aNode father.\x0a\x09\x0a\x09[node layer = anInteger  ] whileFalse: [ x := x + node mod.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09node := node father].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09^ x",
messageSends: ["ifTrue:", "getAbcissaOf:inSubtreeFromLayer:", "<", "x", "=", "layer", "+", "mod", "father", "whileFalse:"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
category: 'initialize-release',
fn: function (aGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aGraph:aGraph},smalltalk.ROAbstractCompactTree)})},
args: ["aGraph"],
source: "greedyCycleRemoval: aGraph",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialLayout:",
category: 'initialize-release',
fn: function (aLayout){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialLayout"]=aLayout;
return self}, function($ctx1) {$ctx1.fill(self,"initialLayout:",{aLayout:aLayout},smalltalk.ROAbstractCompactTree)})},
args: ["aLayout"],
source: "initialLayout: aLayout\x0a\x0a\x09initialLayout := aLayout",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractCompactTree.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(30);
self["@margin"]=(40);
self["@sonsDictionary"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractCompactTree)})},
args: [],
source: "initialize \x0a\x0a\x09super initialize.\x0a\x09verticalGap := 20.\x0a\x09horizontalGap := 30.\x0a\x09margin := 40. \x0a\x09sonsDictionary := Dictionary new",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize:whoseFatherIs:",
category: 'initialize-release',
fn: function (aNode,another){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aNode)._father_(another);
$1=_st(another)._isNil();
if(smalltalk.assert($1)){
_st(aNode)._layer_((0));
} else {
_st(aNode)._layer_(_st(_st(another)._layer()).__plus((1)));
};
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initialize_whoseFatherIs_(e,aNode);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize:whoseFatherIs:",{aNode:aNode,another:another},smalltalk.ROAbstractCompactTree)})},
args: ["aNode", "another"],
source: "initialize: aNode whoseFatherIs: another \x0a\x0a\x09aNode father: another.\x0a\x09\x0a\x09another isNil ifTrue: [ aNode layer: 0 ] ifFalse: [ aNode layer: another layer + 1 ] .\x0a\x09\x0a\x09( self childrenFor: aNode ) do: [ :e | self initialize: e whoseFatherIs: aNode ]",
messageSends: ["father:", "ifTrue:ifFalse:", "layer:", "+", "layer", "isNil", "do:", "initialize:whoseFatherIs:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "leftSiblingOf:",
category: 'algorithm',
fn: function (aNode){
var self=this;
var children;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(aNode)._father())._isNil();
if(smalltalk.assert($1)){
return nil;
} else {
children=self._childrenFor_(_st(aNode)._father());
children;
$2=_st(_st(children)._first()).__eq(aNode);
if(smalltalk.assert($2)){
return nil;
} else {
$3=_st(children)._at_(_st(_st(children)._indexOf_(aNode)).__minus((1)));
return $3;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"leftSiblingOf:",{aNode:aNode,children:children},smalltalk.ROAbstractCompactTree)})},
args: ["aNode"],
source: "leftSiblingOf: aNode\x0a\x22return the left sibling of the given node \x22\x0a\x0a\x09| children |\x0a\x0a\x09aNode father isNil ifTrue: [\x22has no sibling\x22 ^ nil]\x0a\x09\x09\x09\x09\x09    ifFalse: [ children := self childrenFor: aNode father.\x0a\x09\x09\x09\x09\x09\x09\x09\x09(children first) = aNode ifTrue: [\x22as no left sibling\x22 ^ nil ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09    ifFalse: [^ children at: ((children indexOf: aNode)-1) ] ]",
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "father", "at:", "-", "indexOf:", "=", "first", "isNil"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
category: 'algorithm',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.ROAbstractCompactTree)})},
args: ["aNode"],
source: "nodeAbcissaWithNeighbor: aNode\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
category: 'initialize-release',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@root"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{aNode:aNode},smalltalk.ROAbstractCompactTree)})},
args: ["aNode"],
source: "root: aNode \x0a\x0a\x09root := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
category: 'testing',
fn: function (anInt){
var self=this;
var new_;
return smalltalk.withContext(function($ctx1) { 
var $1;
new_=self._new();
_st(new_)._horizontalGap_(anInt);
$1=new_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInt:anInt,new_:new_},smalltalk.ROAbstractCompactTree.klass)})},
args: ["anInt"],
source: "horizontalGap: anInt\x0a\x0a\x09| new |\x0a\x09\x0a\x09new := self new.\x0a\x09new horizontalGap: anInt.\x0a\x09\x0a\x09^ new",
messageSends: ["new", "horizontalGap:"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:verticalGap:",
category: 'testing',
fn: function (anInt,another){
var self=this;
var new_;
return smalltalk.withContext(function($ctx1) { 
var $1;
new_=self._new();
_st(new_)._horizontalGap_(anInt);
_st(new_)._verticalGap_(another);
$1=new_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap:verticalGap:",{anInt:anInt,another:another,new_:new_},smalltalk.ROAbstractCompactTree.klass)})},
args: ["anInt", "another"],
source: "horizontalGap: anInt verticalGap: another\x0a\x0a\x09| new |\x0a\x09\x0a\x09new := self new.\x0a\x09new horizontalGap: anInt.\x0a\x09new verticalGap: another.\x0a\x09\x0a\x09\x0a\x09^ new",
messageSends: ["new", "horizontalGap:", "verticalGap:"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractCompactTree");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.ROAbstractCompactTree.klass)})},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractCompactTree",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
category: 'testing',
fn: function (anInt){
var self=this;
var new_;
return smalltalk.withContext(function($ctx1) { 
var $1;
new_=self._new();
_st(new_)._verticalGap_(anInt);
$1=new_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInt:anInt,new_:new_},smalltalk.ROAbstractCompactTree.klass)})},
args: ["anInt"],
source: "verticalGap: anInt\x0a\x0a\x09| new |\x0a\x09\x0a\x09new := self new.\x0a\x09new verticalGap: anInt.\x0a\x09\x0a\x09^ new",
messageSends: ["new", "verticalGap:"],
referencedClasses: []
}),
smalltalk.ROAbstractCompactTree.klass);


smalltalk.addClass('RORadialTreeLayout', smalltalk.ROAbstractCompactTree, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
category: 'algorithm',
fn: function (aNode,another){
var self=this;
var difference,max,nodeA,nodeB;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
nodeB=aNode;
nodeA=another;
$1=_st(aNode).__eq(another);
if(smalltalk.assert($1)){
max=(0);
} else {
max=_st(_st(_st(self["@horizontalGap"]).__slash(_st(nodeB)._layer())).__slash((2))).__minus(_st(_st(nodeB)._x()).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(_st(aNode)._layer()).__minus((1)))));
};
nodeB=self._followLeftContour_toLayer_(nodeB,_st(_st(nodeB)._layer()).__plus((1)));
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(nodeB)._isNil())._not()).__and(_st(_st(nodeA)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
difference=_st(_st(self["@horizontalGap"]).__slash(_st(nodeA)._layer())).__minus(_st(self._getAbcissaOf_inSubtreeFromLayer_(nodeB,_st(_st(aNode)._layer()).__minus((1)))).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(_st(aNode)._layer()).__minus((1)))));
difference;
max=_st(max)._max_(difference);
max;
nodeB=self._followLeftContour_toLayer_(nodeB,_st(_st(nodeB)._layer()).__plus((1)));
nodeB;
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=max;
return $2;
}, function($ctx1) {$ctx1.fill(self,"compareContourOf:with:",{aNode:aNode,another:another,difference:difference,max:max,nodeA:nodeA,nodeB:nodeB},smalltalk.RORadialTreeLayout)})},
args: ["aNode", "another"],
source: "compareContourOf: aNode with: another\x0a\x09\x22return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode\x22\x0a\x0a\x09| difference max nodeA nodeB |\x0a\x09nodeB := aNode.\x09\x22the right one\x22\x0a\x09nodeA := another.\x09\x22the left one\x22\x0a\x09max := aNode = another\x0a\x09\x09ifTrue: [ 0 ]\x0a\x09\x09ifFalse: [ horizontalGap / nodeB layer / 2 - (nodeB x - (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)) ].\x0a\x09nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.\x0a\x09nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1.\x0a\x09[ nodeB isNil not & nodeA isNil not ]\x0a\x09\x09whileTrue: [ \x0a\x09\x09\x09difference := horizontalGap / nodeA layer\x0a\x09\x09\x09\x09-\x0a\x09\x09\x09\x09\x09((self getAbcissaOf: nodeB inSubtreeFromLayer: aNode layer - 1)\x0a\x09\x09\x09\x09\x09\x09- (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)).\x0a\x09\x09\x09max := max max: difference.\x0a\x09\x09\x09nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.\x0a\x09\x09\x09nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1 ].\x0a\x09^ max",
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layer", "x", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeGap:",
category: 'hook',
fn: function (aNode){
var self=this;
var gap,maxAbcissa,i,abc,nodeL,nodeR,layer;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
gap=(0);
maxAbcissa=(0);
layer=(1);
i=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
nodeL=self._followLeftContour_toLayer_(aNode,i);
nodeL;
nodeR=self._followRightContour_toLayer_(aNode,i);
nodeR;
return _st(_st(_st(nodeL)._isNil())._not()).__and(_st(_st(nodeR)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
abc=_st(_st(_st(self._getAbcissaOf_inSubtreeFromLayer_(nodeR,(0))).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeL,(0)))).__plus(_st(_st(self["@horizontalGap"]).__slash(layer)).__slash((2)))).__slash(layer);
abc;
$1=_st(abc).__gt(maxAbcissa);
if(smalltalk.assert($1)){
maxAbcissa=abc;
maxAbcissa;
layer=layer;
layer;
};
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
gap=_st(_st(_st(_st(maxAbcissa).__slash((2))).__slash(_st($Float())._pi()))._floor()).__plus((1));
$2=_st(_st(self["@verticalGap"])._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(gap).__gt(self["@verticalGap"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
self._verticalGap_(gap);
};
return self}, function($ctx1) {$ctx1.fill(self,"computeGap:",{aNode:aNode,gap:gap,maxAbcissa:maxAbcissa,i:i,abc:abc,nodeL:nodeL,nodeR:nodeR,layer:layer},smalltalk.RORadialTreeLayout)})},
args: ["aNode"],
source: "computeGap: aNode\x0a\x09\x22 compute the vertical gap needed for drawing the radial tree \x22\x0a\x09| gap maxAbcissa i abc nodeL nodeR layer |\x09\x0a\x09gap := 0.\x0a\x09maxAbcissa := 0.\x0a\x09layer := 1.\x0a\x09\x0a\x09i := 1.\x0a\x09[ nodeL :=(self followLeftContour: aNode toLayer: i).\x0a\x09nodeR := (self followRightContour: aNode toLayer: i).\x0a\x09nodeL isNil not & nodeR isNil not ] whileTrue: [ abc := (((self getAbcissaOf: nodeR inSubtreeFromLayer: 0) - (self getAbcissaOf: nodeL inSubtreeFromLayer: 0 ) + (horizontalGap / layer/2)) / layer).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09(abc > maxAbcissa) ifTrue: [ maxAbcissa := abc. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09layer := layer ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09i := i + 1 ].\x0a\x0a\x09\x0a\x09gap:= (maxAbcissa / 2 /Float pi ) floor +1.\x0a\x09\x0a\x09((verticalGap isNil) or: [gap > verticalGap])  ifTrue: [ self verticalGap: gap ]",
messageSends: ["whileTrue:", "/", "+", "-", "getAbcissaOf:inSubtreeFromLayer:", "ifTrue:", ">", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "floor", "pi", "verticalGap:", "or:"],
referencedClasses: ["Float"]
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
category: 'algorithm',
fn: function (aNode){
var self=this;
var children,neighbor,nodeA;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
children=self._childrenFor_(aNode);
neighbor=self._leftSiblingOf_(aNode);
$1=_st(children)._isEmpty();
if(smalltalk.assert($1)){
$2=_st(neighbor)._isNil();
if(smalltalk.assert($2)){
$3=aNode;
_st($3)._x_((0));
$4=_st($3)._mod_((0));
$4;
} else {
$5=aNode;
_st($5)._x_(_st(_st(neighbor)._x()).__plus(_st(_st(self["@horizontalGap"]).__slash(_st(aNode)._layer())).__slash((2))));
_st($5)._mod_(_st(neighbor)._mod());
$6=_st($5)._pointer_(self._followRightContour_toLayer_(neighbor,_st(_st(aNode)._layer()).__plus((1))));
$6;
};
} else {
$7=aNode;
_st($7)._leftContour_(_st(children)._first());
$8=_st($7)._rightContour_(_st(children)._last());
$8;
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$9=aNode;
_st($9)._x_(_st(_st(_st(_st(_st(aNode)._leftContour())._x()).__plus(_st(_st(aNode)._rightContour())._x())).__plus(_st(_st(aNode)._rightContour())._mod())).__slash((2)));
$10=_st($9)._mod_((0));
$10;
$11=_st(neighbor)._isNil();
if(! smalltalk.assert($11)){
_st(aNode)._mod_(self._compareContourOf_with_(aNode,neighbor));
nodeA=self._followLeftContour_toLayer_(_st(aNode)._father(),_st(aNode)._layer());
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followLeftContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followLeftContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(nodeA)._pointer_(self._followLeftContour_toLayer_(aNode,_st(_st(nodeA)._layer()).__plus((1))));
nodeA=self._followRightContour_toLayer_(aNode,_st(_st(aNode)._layer()).__plus((1)));
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(nodeA)._pointer_(self._followRightContour_toLayer_(neighbor,_st(_st(nodeA)._layer()).__plus((1))));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"computePosition:",{aNode:aNode,children:children,neighbor:neighbor,nodeA:nodeA},smalltalk.RORadialTreeLayout)})},
args: ["aNode"],
source: "computePosition: aNode\x0a\x22compute the position of the given node and of his sons recursively\x22\x0a\x0a\x09| children neighbor nodeA |\x0a\x09\x0a\x09children :=self childrenFor: aNode.\x0a\x09neighbor := self leftSiblingOf: aNode.\x0a\x09\x0a\x09children isEmpty ifTrue: [ neighbor isNil ifTrue: [ aNode x: 0; mod: 0. ]  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ aNode x: (neighbor x + (horizontalGap /aNode layer /2)); mod: (neighbor mod);\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  pointer: (self followRightContour: neighbor toLayer: (aNode layer + 1)) ] ]\x0a\x09\x09\x09\x09\x09 \x0a\x09\x09\x09\x09\x09 ifFalse: [aNode leftContour: children first;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09rightContour: children last.\x0a\x09\x09\x09\x09\x09\x09\x09  children do: [:e | self computePosition: e ].\x0a\x09\x09\x09\x09\x09\x09\x09      aNode x: (aNode leftContour x + aNode rightContour x + aNode rightContour mod ) /2;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09mod: 0. \x0a\x09\x09\x09\x09\x09\x09\x09\x09neighbor isNil ifFalse: [ aNode mod: (self compareContourOf: aNode with: neighbor).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  nodeA := (self followLeftContour: (aNode father) toLayer: (aNode layer)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  [(self followLeftContour: nodeA toLayer: (nodeA layer + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: (nodeA layer + 1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA pointer: (self followLeftContour: aNode toLayer: (nodeA layer + 1)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA := self followRightContour: aNode toLayer: (aNode layer + 1).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 [(self followRightContour: nodeA toLayer: (nodeA layer +1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: (nodeA layer +1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09nodeA pointer: (self followRightContour: neighbor toLayer: (nodeA layer +1) ) ] ].",
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "x:", "mod:", "+", "/", "layer", "x", "mod", "pointer:", "followRightContour:toLayer:", "isNil", "leftContour:", "first", "rightContour:", "last", "do:", "computePosition:", "rightContour", "leftContour", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "father", "whileFalse:", "isEmpty"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "diameterOf:",
category: 'algorithm',
fn: function (aNode){
var self=this;
var diam;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aNode)._shapes())._first())._isKindOf_($ROEllipse());
if(smalltalk.assert($1)){
diam=_st(_st(aNode)._width())._max_(_st(aNode)._height());
diam;
} else {
diam=_st(_st(_st(_st(_st(aNode)._width()).__star(_st(aNode)._width())).__plus(_st(_st(aNode)._height()).__star(_st(aNode)._height())))._sqrt())._floor();
diam;
};
$2=diam;
return $2;
}, function($ctx1) {$ctx1.fill(self,"diameterOf:",{aNode:aNode,diam:diam},smalltalk.RORadialTreeLayout)})},
args: ["aNode"],
source: "diameterOf: aNode\x0a\x0a\x09|diam|\x0a\x09\x0a\x09(aNode shapes first isKindOf: ROEllipse) ifTrue: [ diam := aNode width max: aNode height ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].\x0a\x09\x0a\x09^ diam",
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes"],
referencedClasses: ["ROEllipse"]
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (nodeElements){
var self=this;
var rootNodes;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@initialLayout"])._isNil();
if(! smalltalk.assert($1)){
_st(_st(self["@initialLayout"])._new())._executeOnElements_(nodeElements);
};
rootNodes=self._rootNodesFor_(nodeElements);
$2=rootNodes;
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initialize_whoseFatherIs_(e,nil);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
self._computePosition_(e);
return self._step();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computeGap_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$3=_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._toRadialTree_withMod_(e,(0));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(rootNodes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._radialDraw_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{nodeElements:nodeElements,rootNodes:rootNodes},smalltalk.RORadialTreeLayout)})},
args: ["nodeElements"],
source: "doExecute: nodeElements\x0a\x09| rootNodes |\x0a\x09initialLayout isNil\x0a\x09\x09ifFalse: [ initialLayout new executeOnElements: nodeElements ].\x0a\x09\x09\x0a\x09rootNodes := self rootNodesFor: nodeElements.\x0a\x0a\x22\x09root isNil\x0a\x09\x09ifTrue: [ rootNodes := self rootNodesFor: nodeElements ]\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09rootNodes := Array with: root.\x0a\x09\x09\x09self coveringTreeFor: nodeElements from: root ].\x0a\x22\x09rootNodes\x0a\x09\x09do: [ :e | self initialize: e whoseFatherIs: nil ];\x0a\x09\x09do: [ :e | self computePosition: e. self step ];\x0a\x09\x09do: [ :e | self computeGap: e ];\x0a\x09\x09do: [ :e | self toRadialTree: e withMod: 0 ].\x0a\x09rootNodes\x0a\x09\x09do: [ :e | \x0a\x09\x09\x09self radialDraw: e ]",
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "step", "computeGap:", "toRadialTree:withMod:", "radialDraw:"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gap",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._verticalGap();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gap",{},smalltalk.RORadialTreeLayout)})},
args: [],
source: "gap\x0a\x09\x0a\x09^ self verticalGap",
messageSends: ["verticalGap"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "halfDiameterOf:",
category: 'algorithm',
fn: function (aNode){
var self=this;
var diam;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aNode)._shapes())._first())._isKindOf_($ROEllipse());
if(smalltalk.assert($1)){
diam=_st(_st(aNode)._width())._max_(_st(aNode)._height());
diam;
} else {
diam=_st(_st(_st(_st(_st(aNode)._width()).__star(_st(aNode)._width())).__plus(_st(_st(aNode)._height()).__star(_st(aNode)._height())))._sqrt())._floor();
diam;
};
$2=_st(diam).__slash((2));
return $2;
}, function($ctx1) {$ctx1.fill(self,"halfDiameterOf:",{aNode:aNode,diam:diam},smalltalk.RORadialTreeLayout)})},
args: ["aNode"],
source: "halfDiameterOf: aNode\x0a\x0a\x09|diam|\x0a\x09\x0a\x09(aNode shapes first isKindOf: ROEllipse) ifTrue: [ diam := aNode width max: aNode height ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].\x0a\x09\x0a\x09^ diam / 2",
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes", "/"],
referencedClasses: ["ROEllipse"]
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutLayer:radius:from:to:",
category: 'private',
fn: function (aCollection,oldRadius,aFromAngle,aToAngle){
var self=this;
var delta,childRadius,maximumRadius,myRadius,fromAngle,toAngle;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
maximumRadius=oldRadius;
$1=_st(aCollection)._isEmpty();
if(! smalltalk.assert($1)){
myRadius=_st(_st(oldRadius).__plus(self._gap())).__plus(self._maximumRadius_(aCollection));
myRadius;
childRadius=_st(_st(oldRadius).__plus(self._gap())).__plus(self._maximumDiameter_(aCollection));
childRadius;
$2=_st(_st(_st(aCollection)._size()).__eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aToAngle).__minus(aFromAngle)).__eq((2).__star(_st($Float())._pi()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
delta=(0.4).__star(_st($Float())._pi());
delta;
fromAngle=(0.8).__star(_st($Float())._pi());
fromAngle;
toAngle=_st(fromAngle).__plus(delta);
toAngle;
} else {
delta=_st(_st(aToAngle).__minus(aFromAngle)).__slash(_st(aCollection)._size());
delta;
fromAngle=aFromAngle;
fromAngle;
toAngle=_st(aFromAngle).__plus(delta);
toAngle;
};
_st(aCollection)._do_((function(child){
return smalltalk.withContext(function($ctx2) {
_st(child)._translateTo_(_st($Point())._radius_theta_(myRadius,_st(toAngle).__minus(_st(delta).__slash((2)))));
maximumRadius=_st(maximumRadius)._max_(self._layoutLayer_radius_from_to_(self._childrenFor_(child),childRadius,fromAngle,toAngle));
maximumRadius;
fromAngle=toAngle;
fromAngle;
toAngle=_st(toAngle).__plus(delta);
return toAngle;
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
$3=maximumRadius;
return $3;
}, function($ctx1) {$ctx1.fill(self,"layoutLayer:radius:from:to:",{aCollection:aCollection,oldRadius:oldRadius,aFromAngle:aFromAngle,aToAngle:aToAngle,delta:delta,childRadius:childRadius,maximumRadius:maximumRadius,myRadius:myRadius,fromAngle:fromAngle,toAngle:toAngle},smalltalk.RORadialTreeLayout)})},
args: ["aCollection", "oldRadius", "aFromAngle", "aToAngle"],
source: "layoutLayer: aCollection radius: oldRadius from: aFromAngle to: aToAngle\x0a\x09\x0a\x09| delta childRadius maximumRadius myRadius fromAngle toAngle |\x0a\x09\x22Initialize with default value\x22\x0a\x09maximumRadius := oldRadius.\x0a\x09aCollection isEmpty\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[myRadius := oldRadius + self gap + (self maximumRadius: aCollection).\x0a\x09\x09\x09childRadius := oldRadius + self gap + (self maximumDiameter: aCollection).\x09\x22This is a purely optical tweak\x22\x0a\x09\x09\x09(aCollection size = 1 and: [aToAngle - aFromAngle = (2 * Float pi)])\x0a\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09[delta := 0.4 * Float pi.\x0a\x09\x09\x09\x09\x09fromAngle := 0.8 * Float pi.\x0a\x09\x09\x09\x09\x09toAngle := fromAngle + delta]\x0a\x09\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09\x09[delta := (aToAngle - aFromAngle) / aCollection size.\x0a\x09\x09\x09\x09\x09fromAngle := aFromAngle.\x0a\x09\x09\x09\x09\x09toAngle := aFromAngle + delta].\x0a\x09\x09\x09aCollection\x0a\x09\x09\x09\x09do:\x0a\x09\x09\x09\x09\x09[:child | \x0a\x09\x09\x09\x09\x09child\x0a\x09\x09\x09\x09\x09\x09translateTo:\x0a\x09\x09\x09\x09\x09\x09\x09(Point\x0a\x09\x09\x09\x09\x09\x09\x09\x09radius: myRadius\x0a\x09\x09\x09\x09\x09\x09\x09\x09theta: toAngle - (delta / 2.0)).\x0a\x09\x09\x09\x09\x09maximumRadius := maximumRadius\x0a\x09\x09\x09\x09\x09\x09max:\x0a\x09\x09\x09\x09\x09\x09\x09(self\x0a\x09\x09\x09\x09\x09\x09\x09\x09layoutLayer: (self childrenFor: child)\x0a\x09\x09\x09\x09\x09\x09\x09\x09radius: childRadius\x0a\x09\x09\x09\x09\x09\x09\x09\x09from: fromAngle\x0a\x09\x09\x09\x09\x09\x09\x09\x09to: toAngle).\x0a\x09\x09\x09\x09\x09fromAngle := toAngle.\x0a\x09\x09\x09\x09\x09toAngle := toAngle + delta]].\x0a\x09^maximumRadius",
messageSends: ["ifFalse:", "+", "maximumRadius:", "gap", "maximumDiameter:", "ifTrue:ifFalse:", "*", "pi", "/", "size", "-", "and:", "=", "do:", "translateTo:", "radius:theta:", "max:", "layoutLayer:radius:from:to:", "childrenFor:", "isEmpty"],
referencedClasses: ["Float", "Point"]
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumDiameter:",
category: 'private',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._inject_into_((0),(function(max,node){
return smalltalk.withContext(function($ctx2) {
return _st(max)._max_(_st(_st(node)._radius()).__star((2)));
}, function($ctx2) {$ctx2.fillBlock({max:max,node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"maximumDiameter:",{aCollection:aCollection},smalltalk.RORadialTreeLayout)})},
args: ["aCollection"],
source: "maximumDiameter: aCollection\x0a\x09\x0a\x09^aCollection\x0a\x09\x09inject: 0\x0a\x09\x09into: [:max :node | max max: (node radius * 2) ]",
messageSends: ["inject:into:", "max:", "*", "radius"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumRadius:",
category: 'private',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._inject_into_((0),(function(max,node){
return smalltalk.withContext(function($ctx2) {
return _st(max)._max_(_st(node)._radius());
}, function($ctx2) {$ctx2.fillBlock({max:max,node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"maximumRadius:",{aCollection:aCollection},smalltalk.RORadialTreeLayout)})},
args: ["aCollection"],
source: "maximumRadius: aCollection\x0a\x09\x0a\x09^aCollection\x0a\x09\x09inject: 0\x0a\x09\x09into: [:max :node | max max: node radius]",
messageSends: ["inject:into:", "max:", "radius"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
category: 'algorithm',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aNode)._x()).__plus(_st(_st(self["@horizontalGap"]).__slash(_st(aNode)._layer())).__slash((2)))).__plus(_st(self._halfDiameterOf_(aNode)).__slash(_st(aNode)._layer()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.RORadialTreeLayout)})},
args: ["aNode"],
source: "nodeAbcissaWithNeighbor: aNode\x0a\x0a\x09^ aNode x + (horizontalGap / aNode layer /2) + ((self halfDiameterOf: aNode) / aNode layer)",
messageSends: ["+", "/", "layer", "halfDiameterOf:", "x"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "radialDraw:",
category: 'algorithm',
fn: function (aNode){
var self=this;
var children;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._translateTo_(_st($Point())._radius_theta_(_st(aNode)._r(),_st(aNode)._theta()));
children=self._childrenFor_(aNode);
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._radialDraw_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"radialDraw:",{aNode:aNode,children:children},smalltalk.RORadialTreeLayout)})},
args: ["aNode"],
source: "radialDraw: aNode\x0a\x09\x22draw the subtree induced by the given node\x22\x0a\x0a\x09| children |\x0a\x09aNode translateTo: (Point radius: (aNode r) theta: (aNode theta) ).\x0a\x09children := self childrenFor: aNode.\x0a\x09children do: [ :e | self radialDraw: e ]",
messageSends: ["translateTo:", "radius:theta:", "r", "theta", "childrenFor:", "do:", "radialDraw:"],
referencedClasses: ["Point"]
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateSubtreeFrom:by:",
category: 'hook',
fn: function (aNode,aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._theta_(_st(_st(aNode)._theta()).__plus(aFloat));
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._rotateSubtreeFrom_by_(e,aFloat);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rotateSubtreeFrom:by:",{aNode:aNode,aFloat:aFloat},smalltalk.RORadialTreeLayout)})},
args: ["aNode", "aFloat"],
source: "rotateSubtreeFrom: aNode by: aFloat\x0a\x09\x0a\x09aNode theta: aNode theta + aFloat.\x0a\x09\x0a\x09(self childrenFor: aNode) do: [ :e | self rotateSubtreeFrom: e by: aFloat ]",
messageSends: ["theta:", "+", "theta", "do:", "rotateSubtreeFrom:by:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftTree:by:",
category: 'private',
fn: function (aNode,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._translateBy_(aPoint);
_st(self._childrenFor_(aNode))._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return self._shiftTree_by_(child,aPoint);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"shiftTree:by:",{aNode:aNode,aPoint:aPoint},smalltalk.RORadialTreeLayout)})},
args: ["aNode", "aPoint"],
source: "shiftTree: aNode by: aPoint\x0a\x09\x0a\x09aNode translateBy: aPoint.\x0a\x09(self childrenFor: aNode) do: [:child | self shiftTree: child by: aPoint]",
messageSends: ["translateBy:", "do:", "shiftTree:by:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "spreadNodes:around:",
category: 'hook',
fn: function (nodeElements,aNode){
var self=this;
var nodeL,nodeR,i,angle,beta,lay1;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
i=(1);
angle=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
nodeL=self._followLeftContour_toLayer_(aNode,i);
nodeL;
nodeR=self._followRightContour_toLayer_(aNode,i);
nodeR;
return _st(_st(_st(nodeL)._isNil())._not()).__and(_st(_st(nodeR)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
angle=_st(angle)._max_(_st(_st(_st(nodeR)._theta()).__minus(_st(nodeL)._theta())).__plus(_st(_st(_st(_st(self._halfDiameterOf_(nodeR)).__plus(self._halfDiameterOf_(nodeL))).__plus(self["@horizontalGap"])).__slash(i)).__slash(self["@verticalGap"])));
angle;
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
lay1=_st(nodeElements)._select_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._layer()).__eq((1));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
beta=_st(_st(_st(_st($Float())._pi()).__star((2))).__minus(angle)).__slash(_st(lay1)._size());
_st(lay1)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._rotateSubtreeFrom_by_(e,_st(_st(_st(lay1)._indexOf_(e)).__minus((1))).__star(beta));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"spreadNodes:around:",{nodeElements:nodeElements,aNode:aNode,nodeL:nodeL,nodeR:nodeR,i:i,angle:angle,beta:beta,lay1:lay1},smalltalk.RORadialTreeLayout)})},
args: ["nodeElements", "aNode"],
source: "spreadNodes: nodeElements around: aNode\x0a\x0a\x09|nodeL nodeR i angle beta lay1 |\x0a\x09\x0a\x09i := 1.\x0a\x09angle := 0.\x0a\x09\x0a\x09[ nodeL :=(self followLeftContour: aNode toLayer: i).\x0a\x09nodeR := (self followRightContour: aNode toLayer: i).\x0a\x09nodeL isNil not & nodeR isNil not ] whileTrue: [ angle := angle max: ((nodeR theta - nodeL theta) + ((self halfDiameterOf: nodeR) + (self halfDiameterOf: nodeL) + horizontalGap  /i /verticalGap )).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09i := i+1. ].\x0a\x0a\x09lay1 := nodeElements select: [ :e | e layer = 1 ].\x0a\x0a\x09beta := Float pi * 2 - angle / lay1 size.\x0a\x09\x0a\x09lay1 do: [ :e | self rotateSubtreeFrom: e by: (lay1 indexOf: e) - 1 * beta ].",
messageSends: ["whileTrue:", "max:", "+", "/", "halfDiameterOf:", "-", "theta", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "select:", "=", "layer", "size", "*", "pi", "do:", "rotateSubtreeFrom:by:", "indexOf:"],
referencedClasses: ["Float"]
}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toRadialTree:withMod:",
category: 'algorithm',
fn: function (aNode,aFloat){
var self=this;
var children;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aNode)._r_(_st(_st(aNode)._layer()).__star(self["@verticalGap"]));
$1=_st(_st(aNode)._r()).__eq((0));
if(smalltalk.assert($1)){
_st(aNode)._theta_((0));
} else {
_st(aNode)._theta_(_st(_st(_st(_st(aNode)._x()).__plus(aFloat)).__plus(_st(aNode)._mod())).__slash(self["@verticalGap"]));
};
children=self._childrenFor_(aNode);
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._toRadialTree_withMod_(e,_st(_st(aNode)._mod()).__plus(aFloat));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toRadialTree:withMod:",{aNode:aNode,aFloat:aFloat,children:children},smalltalk.RORadialTreeLayout)})},
args: ["aNode", "aFloat"],
source: "toRadialTree: aNode withMod: aFloat\x0a\x09\x22compute polar coordinates of the subtree induced by anode from its cartesian coordinates \x22\x0a\x09| children |\x0a\x09aNode r: (aNode layer * verticalGap ).\x0a\x09(aNode r = 0) ifTrue: [ aNode theta: 0 ] \x0a\x09\x09\x09\x09\x09ifFalse: [aNode theta: (aNode x + aFloat + aNode mod) / verticalGap ].\x0a\x09\x0a\x09children := self childrenFor: aNode.\x0a\x09\x0a\x09children do: [ :e | self toRadialTree: e withMod: ( aNode mod + aFloat) ]",
messageSends: ["r:", "*", "layer", "ifTrue:ifFalse:", "theta:", "/", "+", "mod", "x", "=", "r", "childrenFor:", "do:", "toRadialTree:withMod:"],
referencedClasses: []
}),
smalltalk.RORadialTreeLayout);



smalltalk.addClass('ROAbstractRegularTreeLayout', smalltalk.ROAbstractGraphLayout, ['alreadyLayoutedNodes', 'topGap', 'leftGap', 'nodesByLayer', 'isLayered'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "atLayer:add:",
category: 'private',
fn: function (aNumber,aNodeCollection){
var self=this;
var collection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
collection=_st(self["@nodesByLayer"])._at_ifAbsentPut_(aNumber,(function(){
return smalltalk.withContext(function($ctx2) {
return _st($OrderedCollection())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(collection)._addAll_(aNodeCollection);
return self}, function($ctx1) {$ctx1.fill(self,"atLayer:add:",{aNumber:aNumber,aNodeCollection:aNodeCollection,collection:collection},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["aNumber", "aNodeCollection"],
source: "atLayer: aNumber add: aNodeCollection\x0a\x09| collection |\x0a\x09collection := nodesByLayer at: aNumber ifAbsentPut: [OrderedCollection new].\x0a\x09collection addAll: aNodeCollection",
messageSends: ["at:ifAbsentPut:", "new", "addAll:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (elements){
var self=this;
var rootNodes;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@alreadyLayoutedNodes"]=_st($OrderedCollection())._new();
rootNodes=self._rootNodesFor_(elements);
self["@nodesByLayer"]=_st($OrderedCollection())._new();
self._layout_atPoint_atLayer_(rootNodes,_st(self._leftGap()).__at(self._topGap()),(1));
$1=self._isLayered();
if(smalltalk.assert($1)){
self._rearrangeByLayers_(elements);
};
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,rootNodes:rootNodes},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["elements"],
source: "doExecute: elements\x0a\x09| rootNodes |\x0a\x09alreadyLayoutedNodes := OrderedCollection new.\x0a\x09rootNodes := self rootNodesFor: elements.\x0a\x09nodesByLayer := OrderedCollection new.\x0a\x09self\x0a\x09\x09layout: rootNodes\x0a\x09\x09atPoint: self leftGap @ self topGap\x0a\x09\x09atLayer: 1.\x0a\x09self isLayered ifTrue: [\x0a\x09\x09self rearrangeByLayers: elements ]",
messageSends: ["new", "rootNodesFor:", "layout:atPoint:atLayer:", "@", "topGap", "leftGap", "ifTrue:", "rearrangeByLayers:", "isLayered"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractRegularTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@topGap"]=(5);
self["@leftGap"]=(5);
self["@isLayered"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09topGap := 5.\x0a\x09leftGap := 5.\x0a\x09isLayered := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isLayered"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLayered",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "isLayered\x0a\x09\x22Is the layout layered\x22\x0a\x09\x0a\x09^ isLayered",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered:",
category: 'accessing',
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isLayered"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"isLayered:",{boolean:boolean},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["boolean"],
source: "isLayered: boolean\x0a\x09\x22Is the layout layered\x22\x0a\x09\x0a\x09isLayered := boolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layered",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isLayered_(true);
return self}, function($ctx1) {$ctx1.fill(self,"layered",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "layered\x0a\x09self isLayered: true",
messageSends: ["isLayered:"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
fn: function (aNodeCollection,aPoint,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,anObject:anObject},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["aNodeCollection", "aPoint", "anObject"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@leftGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "leftGap\x0a\x09^ leftGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@leftGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"leftGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["anInteger"],
source: "leftGap: anInteger\x0a\x09leftGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
fn: function (aGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
args: [],
source: "topGap\x0a\x09^ topGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap:",
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"topGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
args: ["anInteger"],
source: "topGap: anInteger\x0a\x09topGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROAbstractRegularTreeLayout);



smalltalk.addClass('ROAbstractVerticalTreeLayout', smalltalk.ROAbstractRegularTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractVerticalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(3);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractVerticalTreeLayout)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09verticalGap := 20.\x0a\x09horizontalGap := 3",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
fn: function (aNodeCollection,aPoint,aNumber){
var self=this;
var treeSize,childrenPosition,x,y,middleOfTree;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aNodeCollection)._isEmpty();
if(smalltalk.assert($1)){
return (0);
};
x=_st(aPoint)._x();
y=_st(aPoint)._y();
_st(self["@alreadyLayoutedNodes"])._addAll_(aNodeCollection);
self._atLayer_add_(aNumber,aNodeCollection);
_st(aNodeCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
childrenPosition=_st(_st(y).__plus(_st(each)._height())).__plus(self._verticalGap());
childrenPosition;
treeSize=_st(_st(each)._width())._max_(self._layout_atPoint_atLayer_(self._computeChildrenFor_(each),_st(x).__at(childrenPosition),_st(aNumber).__plus((1))));
treeSize;
middleOfTree=_st(_st(x).__plus(_st(treeSize).__slash((2)))).__minus(_st(_st(each)._width()).__slash((2)));
middleOfTree;
_st(self["@translator"])._translate_to_(each,_st(middleOfTree).__at(y));
x=_st(_st(x).__plus(treeSize)).__plus(self._horizontalGap());
return x;
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(x).__minus(_st(aPoint)._x())).__minus(self._horizontalGap());
return $2;
}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,aNumber:aNumber,treeSize:treeSize,childrenPosition:childrenPosition,x:x,y:y,middleOfTree:middleOfTree},smalltalk.ROAbstractVerticalTreeLayout)})},
args: ["aNodeCollection", "aPoint", "aNumber"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: aNumber\x0a\x09| treeSize childrenPosition x y middleOfTree |\x0a\x09aNodeCollection isEmpty ifTrue: [ ^ 0 ].\x0a\x09x := aPoint x.\x0a\x09y := aPoint y.\x0a\x09alreadyLayoutedNodes addAll: aNodeCollection.\x0a\x09self atLayer: aNumber add: aNodeCollection.\x0a\x09aNodeCollection do: [ :each | \x0a\x09\x09childrenPosition := y + each height + self verticalGap.\x0a\x09\x09treeSize := each width\x0a\x09\x09\x09max: (self layout: (self computeChildrenFor: each) atPoint: x @ childrenPosition atLayer: aNumber + 1).\x0a\x09\x09middleOfTree := x + (treeSize / 2.0) - (each width / 2.0).\x0a\x09\x09translator translate: each to: middleOfTree @ y.\x0a\x09\x09x := x + treeSize + self horizontalGap.\x0a\x09\x09\x22self step\x22 ].\x0a\x09^ x - aPoint x - self horizontalGap",
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "verticalGap", "height", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "width", "-", "/", "translate:to:", "horizontalGap"],
referencedClasses: []
}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
fn: function (aGraph){
var self=this;
var cursor,layerDepthSize;
return smalltalk.withContext(function($ctx1) { 
cursor=self._topGap();
_st(self["@nodesByLayer"])._do_((function(eachSetOfNodes){
return smalltalk.withContext(function($ctx2) {
layerDepthSize=_st(eachSetOfNodes)._inject_into_((0),(function(max,eachNode){
return smalltalk.withContext(function($ctx3) {
_st(eachNode)._translateTo_(_st(_st(_st(eachNode)._bounds())._left()).__at(cursor));
return _st(max)._max_(_st(eachNode)._height());
}, function($ctx3) {$ctx3.fillBlock({max:max,eachNode:eachNode},$ctx2)})}));
layerDepthSize;
cursor=_st(_st(cursor).__plus(layerDepthSize)).__plus(self._verticalGap());
return cursor;
}, function($ctx2) {$ctx2.fillBlock({eachSetOfNodes:eachSetOfNodes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph,cursor:cursor,layerDepthSize:layerDepthSize},smalltalk.ROAbstractVerticalTreeLayout)})},
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09| cursor layerDepthSize |\x0a\x09cursor := self topGap.\x0a\x09nodesByLayer do: [:eachSetOfNodes |\x0a\x09\x09layerDepthSize := eachSetOfNodes inject: 0 into: [:max :eachNode | \x0a\x09\x09\x09eachNode translateTo: (eachNode bounds left @ cursor ).\x0a\x09\x09\x09max max: eachNode height ].\x0a\x09\x09cursor := cursor + layerDepthSize + self verticalGap ]",
messageSends: ["topGap", "do:", "inject:into:", "translateTo:", "@", "left", "bounds", "max:", "height", "+", "verticalGap"],
referencedClasses: []
}),
smalltalk.ROAbstractVerticalTreeLayout);



smalltalk.addClass('RODominanceTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenWithHighestNestingLevelFor_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RODominanceTreeLayout)})},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09^ self childrenWithHighestNestingLevelFor: aNode",
messageSends: ["childrenWithHighestNestingLevelFor:"],
referencedClasses: []
}),
smalltalk.RODominanceTreeLayout);



smalltalk.addClass('ROTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.ROTreeLayout)})},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09^ self childrenFor: aNode except: alreadyLayoutedNodes",
messageSends: ["childrenFor:except:"],
referencedClasses: []
}),
smalltalk.ROTreeLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
category: 'not yet classified',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.ROLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROLayoutTranslator);


smalltalk.ROLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=self["@defaultTranslator"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@defaultTranslator"];
return $2;
};
self["@defaultTranslator"]=_st(_st(self)._defaultClass())._new();
$3=self["@defaultTranslator"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ROLayoutTranslator.klass)});},
args: [],
source: "default\x0a\x09\x22Return the default translator, the one used in the layouts\x22\x0a\x0a\x09defaultTranslator ifNotNil: [ ^ defaultTranslator ].\x0a\x09^ defaultTranslator := self defaultClass new",
messageSends: ["ifNotNil:", "new", "defaultClass"],
referencedClasses: []
}),
smalltalk.ROLayoutTranslator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultClass",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.RODirectLayoutTranslator || RODirectLayoutTranslator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.ROLayoutTranslator.klass)});},
args: [],
source: "defaultClass\x0a\x09^ RODirectLayoutTranslator",
messageSends: [],
referencedClasses: ["RODirectLayoutTranslator"]
}),
smalltalk.ROLayoutTranslator.klass);


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
category: 'not yet classified',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09element translateTo: newPosition",
messageSends: ["translateTo:"],
referencedClasses: []
}),
smalltalk.RODirectLayoutTranslator);



