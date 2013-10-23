smalltalk.addPackage('ARoassal-Layout');
smalltalk.addClass('ROCell', smalltalk.ROObject, ['elements', 'columns', 'element', 'number', 'rowHeights', 'columnWidths'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "column",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@number"]).__minus((1)))._rem_(self["@columns"])).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"column",{},smalltalk.ROCell)})},
messageSends: ["+", "rem:", "-"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columnWidthAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@columnWidths"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnWidthAt:",{index:index},smalltalk.ROCell)})},
messageSends: ["at:"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@columns"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns",{},smalltalk.ROCell)})},
messageSends: []}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@columns"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"columns:",{anObject:anObject},smalltalk.ROCell)})},
messageSends: []}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "computeColumnWidths",
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
messageSends: ["new:", "columnCount", "to:do:", "at:put:", "max", "select:thenCollect:", "notNil", "width", "atColumn:"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRowHeights",
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
messageSends: ["new:", "rowCount", "to:do:", "at:put:", "max", "select:thenCollect:", "notNil", "height", "atRow:"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ROCell)})},
messageSends: []}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.ROCell)})},
messageSends: []}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
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
messageSends: ["rounded", "ceiling", "/", "size", "new:", "*", "to:do:", "at:put:", "at:", "rows:columns:contents:", "computeColumnWidths", "computeRowHeights"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__at(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.ROCell)})},
messageSends: ["@", "height", "width"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rowHeightAt_(self._row());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.ROCell)})},
messageSends: ["rowHeightAt:", "row"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@number"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.ROCell)})},
messageSends: []}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anObject:anObject},smalltalk.ROCell)})},
messageSends: []}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "row",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@number"]).__minus((1)))._quo_(self["@columns"])).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"row",{},smalltalk.ROCell)})},
messageSends: ["+", "quo:", "-"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "rowHeightAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rowHeights"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowHeightAt:",{index:index},smalltalk.ROCell)})},
messageSends: ["at:"]}),
smalltalk.ROCell);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._columnWidthAt_(self._column());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.ROCell)})},
messageSends: ["columnWidthAt:", "column"]}),
smalltalk.ROCell);


smalltalk.addMethod(
smalltalk.method({
selector: "elements:columns:",
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
messageSends: ["columns:", "new", "elements:", "yourself"]}),
smalltalk.ROCell.klass);


smalltalk.addClass('ROCellMatrix', smalltalk.ROObject, ['nrows', 'ncols', 'contents'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "atColumn:",
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
messageSends: ["-", "indexForRow:andColumn:", "collect:", "at:", "+", "to:"]}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "atRow:",
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
messageSends: ["ifFalse:", "error:", "between:and:", "copyFrom:to:", "+", "*", "-"]}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "columnCount",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ncols"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnCount",{},smalltalk.ROCellMatrix)})},
messageSends: []}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "indexForRow:andColumn:",
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
messageSends: ["ifFalse:", "error:", "between:and:", "+", "*", "-"]}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rowCount",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nrows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowCount",{},smalltalk.ROCellMatrix)})},
messageSends: []}),
smalltalk.ROCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rows:columns:contents:",
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
messageSends: ["ifFalse:", "error:", "and:", "=", "size", "*", ">=", "isInteger"]}),
smalltalk.ROCellMatrix);


smalltalk.addMethod(
smalltalk.method({
selector: "rows:columns:contents:",
fn: function (rows,columns,contents){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._rows_columns_contents_(rows,columns,contents);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows:columns:contents:",{rows:rows,columns:columns,contents:contents},smalltalk.ROCellMatrix.klass)})},
messageSends: ["rows:columns:contents:", "new"]}),
smalltalk.ROCellMatrix.klass);


smalltalk.addClass('ROLayout', smalltalk.Object, ['translator', 'affectedNodes'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.ROLayout)});},
messageSends: ["executeOnElements:"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROLayout)})},
messageSends: []}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doPost:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doPost:",{elements:elements},smalltalk.ROLayout)})},
messageSends: []}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doInitialize_(elements);
self._doExecute_(_st(elements)._asOrderedCollection());
self._doPost_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.ROLayout)})},
messageSends: ["doInitialize:", "doExecute:", "asOrderedCollection", "doPost:"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@translator"]=_st((smalltalk.ROLayoutTranslator || ROLayoutTranslator))._default();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROLayout)});},
messageSends: ["default"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{elements:elements},smalltalk.ROLayout)})},
messageSends: ["applyOn:"]}),
smalltalk.ROLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.ROLayout)})},
messageSends: []}),
smalltalk.ROLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(self)._new())._applyOn_(aCollection);
$1=aCollection;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.ROLayout.klass)});},
messageSends: ["applyOn:", "new"]}),
smalltalk.ROLayout.klass);


smalltalk.addClass('ROAbstractGridLayout', smalltalk.ROLayout, ['gapSize', 'lineItemsCountBlock'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGapSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultGapSize",{},smalltalk.ROAbstractGridLayout)})},
messageSends: []}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLineItemsCount",
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
messageSends: ["x", "ifTrue:ifFalse:", "@", "max:", "size", "truncated", "ceiling", "sqrt", "*", "/", "<"]}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gapSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gapSize",{},smalltalk.ROAbstractGridLayout)})},
messageSends: []}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gapSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"gapSize:",{anInteger:anInteger},smalltalk.ROAbstractGridLayout)})},
messageSends: []}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractGridLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@gapSize"]=self._defaultGapSize();
self["@lineItemsCountBlock"]=self._defaultLineItemsCount();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractGridLayout)})},
messageSends: ["initialize", "defaultGapSize", "defaultLineItemsCount"]}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCount:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lineItemsCountBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lineItemsCount:",{aBlock:aBlock},smalltalk.ROAbstractGridLayout)})},
messageSends: []}),
smalltalk.ROAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCountBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lineItemsCountBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineItemsCountBlock",{},smalltalk.ROAbstractGridLayout)})},
messageSends: []}),
smalltalk.ROAbstractGridLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractGridLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.ROAbstractGridLayout.klass)})},
messageSends: ["=", "name"]}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withGap:withLineItemsCount:",
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
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself", "applyOn:"]}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withLineItemsCount:",
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
messageSends: ["lineItemsCount:", "new", "yourself", "applyOn:"]}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:",
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
messageSends: ["gapSize:", "new", "yourself"]}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:withLineItemsCount:",
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
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself"]}),
smalltalk.ROAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withLineItemsCount:",
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
messageSends: ["lineItemsCount:", "new", "yourself"]}),
smalltalk.ROAbstractGridLayout.klass);


smalltalk.addClass('ROCellLayout', smalltalk.ROAbstractGridLayout, ['inCellPosition'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["roValue:", "lineItemsCountBlock", "elements:columns:", "@", "gapSize", "withIndexDo:", "element:", "number:", "translate:to:", "+", "y", "*", "x", "extent", "ifTrue:", ">=", "step"]}),
smalltalk.ROCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "inCellPosition:",
fn: function (anObjectOrOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inCellPosition"]=anObjectOrOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"inCellPosition:",{anObjectOrOneArgBlock:anObjectOrOneArgBlock},smalltalk.ROCellLayout)})},
messageSends: []}),
smalltalk.ROCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROCellLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@inCellPosition"]=(function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(_st(_st(cell)._extent())._x()).__minus(_st(_st(cell)._element())._width())).__slash((2))).__at(_st(_st(_st(_st(cell)._extent())._y()).__minus(_st(_st(cell)._element())._height())).__slash((2)));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROCellLayout)})},
messageSends: ["initialize", "@", "/", "-", "height", "element", "y", "extent", "width", "x"]}),
smalltalk.ROCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCentred",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inCellPosition_((function(cell){
return smalltalk.withContext(function($ctx2) {
return (0).__at(_st(_st(_st(_st(cell)._extent())._y()).__minus(_st(_st(cell)._element())._height())).__slash((2)));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"leftCentred",{},smalltalk.ROCellLayout)})},
messageSends: ["inCellPosition:", "@", "/", "-", "height", "element", "y", "extent"]}),
smalltalk.ROCellLayout);



smalltalk.addClass('ROGridLayout', smalltalk.ROAbstractGridLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["paddingLeftFor:", "paddingTopFor:", "@", "roValue:", "lineItemsCountBlock", "parent", "anyOne", "ifFalse:", "resizeStrategy", "resizeStrategy:", "padding:", "padding", "new", "isView", "do:", "translate:to:", "y", "+", "*", "gapSize", "width", "x", "max:", "height", "ifTrue:", ">=", "step", "adjustSizeIfNecessary"]}),
smalltalk.ROGridLayout);



smalltalk.addClass('ROAbstractLineLayout', smalltalk.ROLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "alignTop",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=smalltalk.symbolFor("top");
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalOutGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@horizontalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalOutGap",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize"]}),
smalltalk.ROAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalOutGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@verticalOutGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalOutGap",{},smalltalk.ROAbstractLineLayout)});},
messageSends: []}),
smalltalk.ROAbstractLineLayout);



smalltalk.addClass('ROHorizontalLineLayout', smalltalk.ROAbstractLineLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
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
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["positionOriginalPointer:", "do:", "deltaFor:", "translate:to:", "-", "movePointer:accordingToFigure:"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ROAbstractLineLayout.fn.prototype._initialize.apply(_st(self), []);
_st(self)._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["initialize", "alignTop"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
fn: function (pointer, element) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(_st(self)._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.ROHorizontalLineLayout)});},
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"]}),
smalltalk.ROHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
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
messageSends: ["ifTrue:", "maxValue:", "nodes", "==", "alignment", "/", "@", "+", "verticalOutGap", "horizontalOutGap"]}),
smalltalk.ROHorizontalLineLayout);



smalltalk.addClass('ROEdgeDrivenLayout', smalltalk.ROLayout, ['edges', 'userDefinedEdges', 'fromPositions', 'toPositions'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@affectedNodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodes",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@affectedNodes"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"affectedNodes:",{anObject:anObject},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodesOf:",
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
messageSends: ["ifNil:", "nodes"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (aGraphElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{aGraphElement:aGraphElement},smalltalk.ROEdgeDrivenLayout)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doIncrementallyExecute:",
fn: function (anElementNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doExecute_(anElementNode);
return self}, function($ctx1) {$ctx1.fill(self,"doIncrementallyExecute:",{anElementNode:anElementNode},smalltalk.ROEdgeDrivenLayout)})},
messageSends: ["doExecute:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edges"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"edges:",{aCollection:aCollection},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesDo:",
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
messageSends: ["ifNil:", "do:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
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
messageSends: ["ifTrue:ifFalse:", "setEdgesFromElements:", "new", "do:", "addAll:", "add:", "isCollection", "userDefinedEdges", "edges:", "isNil", "executeOnElements:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions",
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
messageSends: ["ifNil:", "defaultFromPositions"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fromPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"fromPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROEdgeDrivenLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@edges"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "setEdgesFromElements:",
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
messageSends: ["ifTrue:", "isEmpty", "view", "anyOne", "edges:", "elementsSuchThat:", "and:", "includes:", "to", "from", "isKindOf:"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions",
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
messageSends: ["ifNil:", "defaultToPositions"]}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"toPositions:",{anArray:anArray},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userDefinedEdges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges",{},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges:",
fn: function (aCollectionOfEdges){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userDefinedEdges"]=aCollectionOfEdges;
return self}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges:",{aCollectionOfEdges:aCollectionOfEdges},smalltalk.ROEdgeDrivenLayout)})},
messageSends: []}),
smalltalk.ROEdgeDrivenLayout);



smalltalk.addClass('ROAbstractGraphLayout', smalltalk.ROEdgeDrivenLayout, ['verticalGap', 'horizontalGap', 'cachedChildren', 'cachedParents', 'cachedParentsWithHighestNestings'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "cachedChildren",
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
messageSends: ["ifNil:", "new:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParents",
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
messageSends: ["ifNil:", "new:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParentsWithHighestNestings",
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
messageSends: ["ifNil:", "new:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
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
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "ifFalse:", "add:", "to", "includes:", "from", "and:", "~=", "==", "cachedChildren"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:except:",
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
messageSends: ["reject:", "includes:", "childrenFor:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenWithHighestNestingLevelFor:",
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
messageSends: ["select:", "==", "highestNestingParentFor:", "childrenFor:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cachedParents"]=nil;
self["@cachedChildren"]=nil;
self["@cachedParentsWithHighestNestings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["bottomCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["topCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractGraphLayout.superclass.fn.prototype._doInitialize_.apply(_st(self), [elements]);
self._clear();
self._greedyCycleRemoval_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.ROAbstractGraphLayout)})},
messageSends: ["doInitialize:", "clear", "greedyCycleRemoval:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
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
messageSends: ["copy", "new", "do:", "ifTrue:", "addFirst:", "remove:", "isEmpty", "childrenFor:", "addLast:", "parentsFor:", "size", "at:put:", "-", "asSortedCollection:", ">=", "at:", "whileFalse:", "detect:ifNone:", "anySatisfy:", "includes:", "first", ",", "edges", ">", "indexOf:", "to", "from", "notNil", "clear"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "highestNestingParentFor:",
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
messageSends: ["at:ifAbsentPut:", "parentsFor:", "ifTrue:ifFalse:", "detectMax:", "nestingLevelFor:", "isEmpty", "cachedParentsWithHighestNestings"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
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
messageSends: ["ifNil:", "horizontalGap", "class"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nestingLevelFor:",
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
messageSends: ["parentsFor:", "collect:", "nestingLevelFor:", "ifTrue:ifFalse:", "+", "max", "isEmpty"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
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
messageSends: ["ifNil:", "userDefinedEdges:", "userDefinedEdges", "applyOn:"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "parentsFor:",
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
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "add:", "from", "==", "to", "cachedParents"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rootNodesFor:",
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
messageSends: ["select:", "and:", "isEmpty", "parentsFor:", "isNotEdge"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
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
messageSends: ["ifNil:", "verticalGap", "class"]}),
smalltalk.ROAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInteger:anInteger},smalltalk.ROAbstractGraphLayout)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
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
messageSends: ["userDefinedEdges:", "new", "applyOn:"]}),
smalltalk.ROAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.ROAbstractGraphLayout.klass)})},
messageSends: []}),
smalltalk.ROAbstractGraphLayout.klass);


smalltalk.addClass('ROAbstractCompactTree', smalltalk.ROAbstractGraphLayout, ['sonsDictionary', 'root', 'initialLayout', 'margin'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
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
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "at:ifAbsent:", "new", "isEmpty"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
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
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layer", "x", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
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
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "x:", "mod:", "+", "/", "x", "mod", "pointer:", "followRightContour:toLayer:", "layer", "isNil", "leftContour:", "first", "rightContour:", "last", "do:", "computePosition:", "rightContour", "leftContour", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "father", "whileFalse:", "isEmpty"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "coordinate:withMod:",
fn: function (aNode,aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"coordinate:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.ROAbstractCompactTree)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "draw:withMod:"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:withMod:",
fn: function (aNode,aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.ROAbstractCompactTree)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followLeftContour:toLayer:",
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
messageSends: ["ifTrue:", "=", "layer", ">", "ifTrue:ifFalse:", "followLeftContour:toLayer:", "pointer", "isNil", "leftContour"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followRightContour:toLayer:",
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
messageSends: ["ifTrue:", "=", "layer", ">", "ifTrue:ifFalse:", "followRightContour:toLayer:", "pointer", "isNil", "rightContour"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "getAbcissaOf:inSubtreeFromLayer:",
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
messageSends: ["ifTrue:", "getAbcissaOf:inSubtreeFromLayer:", "<", "x", "=", "layer", "+", "mod", "father", "whileFalse:"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
fn: function (aGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aGraph:aGraph},smalltalk.ROAbstractCompactTree)})},
messageSends: []}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialLayout:",
fn: function (aLayout){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialLayout"]=aLayout;
return self}, function($ctx1) {$ctx1.fill(self,"initialLayout:",{aLayout:aLayout},smalltalk.ROAbstractCompactTree)})},
messageSends: []}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "new"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize:whoseFatherIs:",
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
messageSends: ["father:", "ifTrue:ifFalse:", "layer:", "+", "layer", "isNil", "do:", "initialize:whoseFatherIs:", "childrenFor:"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "leftSiblingOf:",
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
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "father", "at:", "-", "indexOf:", "=", "first", "isNil"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.ROAbstractCompactTree)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@root"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{aNode:aNode},smalltalk.ROAbstractCompactTree)})},
messageSends: []}),
smalltalk.ROAbstractCompactTree);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
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
messageSends: ["new", "horizontalGap:"]}),
smalltalk.ROAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:verticalGap:",
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
messageSends: ["new", "horizontalGap:", "verticalGap:"]}),
smalltalk.ROAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractCompactTree");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.ROAbstractCompactTree.klass)})},
messageSends: ["=", "name"]}),
smalltalk.ROAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
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
messageSends: ["new", "verticalGap:"]}),
smalltalk.ROAbstractCompactTree.klass);


smalltalk.addClass('RORadialTreeLayout', smalltalk.ROAbstractCompactTree, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
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
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layer", "x", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeGap:",
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
messageSends: ["whileTrue:", "/", "+", "-", "getAbcissaOf:inSubtreeFromLayer:", "ifTrue:", ">", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "floor", "pi", "verticalGap:", "or:"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
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
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "x:", "mod:", "+", "/", "layer", "x", "mod", "pointer:", "followRightContour:toLayer:", "isNil", "leftContour:", "first", "rightContour:", "last", "do:", "computePosition:", "rightContour", "leftContour", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "father", "whileFalse:", "isEmpty"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "diameterOf:",
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
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "step", "computeGap:", "toRadialTree:withMod:", "radialDraw:"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._verticalGap();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gap",{},smalltalk.RORadialTreeLayout)})},
messageSends: ["verticalGap"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "halfDiameterOf:",
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
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes", "/"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutLayer:radius:from:to:",
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
messageSends: ["ifFalse:", "+", "maximumRadius:", "gap", "maximumDiameter:", "ifTrue:ifFalse:", "*", "pi", "/", "size", "-", "and:", "=", "do:", "translateTo:", "radius:theta:", "max:", "layoutLayer:radius:from:to:", "childrenFor:", "isEmpty"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumDiameter:",
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
messageSends: ["inject:into:", "max:", "*", "radius"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumRadius:",
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
messageSends: ["inject:into:", "max:", "radius"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aNode)._x()).__plus(_st(_st(self["@horizontalGap"]).__slash(_st(aNode)._layer())).__slash((2)))).__plus(_st(self._halfDiameterOf_(aNode)).__slash(_st(aNode)._layer()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.RORadialTreeLayout)})},
messageSends: ["+", "/", "layer", "halfDiameterOf:", "x"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "radialDraw:",
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
messageSends: ["translateTo:", "radius:theta:", "r", "theta", "childrenFor:", "do:", "radialDraw:"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateSubtreeFrom:by:",
fn: function (aNode,aFloat){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._theta_(_st(_st(aNode)._theta()).__plus(aFloat));
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._rotateSubtreeFrom_by_(e,aFloat);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rotateSubtreeFrom:by:",{aNode:aNode,aFloat:aFloat},smalltalk.RORadialTreeLayout)})},
messageSends: ["theta:", "+", "theta", "do:", "rotateSubtreeFrom:by:", "childrenFor:"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftTree:by:",
fn: function (aNode,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._translateBy_(aPoint);
_st(self._childrenFor_(aNode))._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return self._shiftTree_by_(child,aPoint);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"shiftTree:by:",{aNode:aNode,aPoint:aPoint},smalltalk.RORadialTreeLayout)})},
messageSends: ["translateBy:", "do:", "shiftTree:by:", "childrenFor:"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "spreadNodes:around:",
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
messageSends: ["whileTrue:", "max:", "+", "/", "halfDiameterOf:", "-", "theta", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "select:", "=", "layer", "size", "*", "pi", "do:", "rotateSubtreeFrom:by:", "indexOf:"]}),
smalltalk.RORadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toRadialTree:withMod:",
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
messageSends: ["r:", "*", "layer", "ifTrue:ifFalse:", "theta:", "/", "+", "mod", "x", "=", "r", "childrenFor:", "do:", "toRadialTree:withMod:"]}),
smalltalk.RORadialTreeLayout);



smalltalk.addClass('ROAbstractRegularTreeLayout', smalltalk.ROAbstractGraphLayout, ['alreadyLayoutedNodes', 'topGap', 'leftGap', 'nodesByLayer', 'isLayered'], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "atLayer:add:",
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
messageSends: ["at:ifAbsentPut:", "new", "addAll:"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
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
messageSends: ["new", "rootNodesFor:", "layout:atPoint:atLayer:", "@", "topGap", "leftGap", "ifTrue:", "rearrangeByLayers:", "isLayered"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractRegularTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@topGap"]=(5);
self["@leftGap"]=(5);
self["@isLayered"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isLayered"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLayered",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered:",
fn: function (boolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isLayered"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"isLayered:",{boolean:boolean},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layered",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isLayered_(true);
return self}, function($ctx1) {$ctx1.fill(self,"layered",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["isLayered:"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
fn: function (aNodeCollection,aPoint,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,anObject:anObject},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@leftGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@leftGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"leftGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
fn: function (aGraph){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topGap",{},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"topGap:",{anInteger:anInteger},smalltalk.ROAbstractRegularTreeLayout)})},
messageSends: []}),
smalltalk.ROAbstractRegularTreeLayout);



smalltalk.addClass('ROAbstractVerticalTreeLayout', smalltalk.ROAbstractRegularTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROAbstractVerticalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(3);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROAbstractVerticalTreeLayout)})},
messageSends: ["initialize"]}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
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
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "verticalGap", "height", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "width", "-", "/", "translate:to:", "horizontalGap"]}),
smalltalk.ROAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
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
messageSends: ["topGap", "do:", "inject:into:", "translateTo:", "@", "left", "bounds", "max:", "height", "+", "verticalGap"]}),
smalltalk.ROAbstractVerticalTreeLayout);



smalltalk.addClass('RODominanceTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenWithHighestNestingLevelFor_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RODominanceTreeLayout)})},
messageSends: ["childrenWithHighestNestingLevelFor:"]}),
smalltalk.RODominanceTreeLayout);



smalltalk.addClass('ROTreeLayout', smalltalk.ROAbstractVerticalTreeLayout, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.ROTreeLayout)})},
messageSends: ["childrenFor:except:"]}),
smalltalk.ROTreeLayout);



smalltalk.addClass('ROLayoutTranslator', smalltalk.Object, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.ROLayoutTranslator)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.ROLayoutTranslator);


smalltalk.ROLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
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
messageSends: ["ifNotNil:", "new", "defaultClass"]}),
smalltalk.ROLayoutTranslator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(smalltalk.RODirectLayoutTranslator || RODirectLayoutTranslator);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.ROLayoutTranslator.klass)});},
messageSends: []}),
smalltalk.ROLayoutTranslator.klass);


smalltalk.addClass('RODirectLayoutTranslator', smalltalk.ROLayoutTranslator, [], 'ARoassal-Layout');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RODirectLayoutTranslator)});},
messageSends: ["translateTo:"]}),
smalltalk.RODirectLayoutTranslator);



