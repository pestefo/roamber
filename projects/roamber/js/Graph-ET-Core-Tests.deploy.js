smalltalk.addPackage('Graph-ET-Core-Tests');
smalltalk.addClass('GETBarDiagramTest', smalltalk.TestCase, [], 'Graph-ET-Core-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAxis",
fn: function (){
var self=this;
var diagram,view,firstElement,secondElement,xAxis,yAxis,d;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(-1), (1)]);
_st($1)._height_((100));
_st($1)._valueAxisLine();
$2=_st($1)._baseAxisLine();
d=$2;
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((8)));
self._assert_(_st(_st(d)._heightOfPositiveArea()).__eq((50)));
self._assert_(_st(_st(d)._heightOfNegativeArea()).__eq((50)));
self._assert_(_st(_st(d)._offsetFromAxis_((30))).__eq((20)));
self._assert_(_st(_st(d)._offsetFromAxis_((40))).__eq((10)));
self._assert_(_st(_st(d)._offsetFromAxis_((50))).__eq((0)));
firstElement=_st(_st(view)._elements())._first();
secondElement=_st(_st(view)._elements())._second();
self._assert_(_st(_st(firstElement)._position()).__eq((5).__at((50))));
self._assert_(_st(_st(firstElement)._extent()).__eq((20).__at((50))));
self._assert_(_st(_st(secondElement)._position()).__eq((30).__at((0))));
self._assert_(_st(_st(secondElement)._extent()).__eq((20).__at((50))));
xAxis=_st(_st(view)._elements())._fifth();
yAxis=_st(_st(view)._elements())._eighth();
self._assert_(_st(_st(_st(xAxis)._from())._position()).__eq((0).__at((50))));
self._assert_(_st(_st(_st(xAxis)._to())._position()).__eq((55).__at((50))));
self._assert_(_st(_st(_st(yAxis)._from())._position()).__eq((0).__at((0))));
self._assert_(_st(_st(_st(yAxis)._to())._position()).__eq((0).__at((100))));
return self}, function($ctx1) {$ctx1.fill(self,"testAxis",{diagram:diagram,view:view,firstElement:firstElement,secondElement:secondElement,xAxis:xAxis,yAxis:yAxis,d:d},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "valueAxisLine", "baseAxisLine", "openTest", "assert:", "=", "numberOfElements", "heightOfPositiveArea", "heightOfNegativeArea", "offsetFromAxis:", "first", "elements", "second", "@", "position", "extent", "fifth", "eighth", "from", "to"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxis2",
fn: function (){
var self=this;
var diagram,view,firstElement,secondElement,xAxis,yAxis,d;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(-0.5), (1)]);
_st($1)._height_((45));
_st($1)._valueAxisLine();
$2=_st($1)._baseAxisLine();
d=$2;
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((8)));
self._assert_(_st(_st(d)._heightOfPositiveArea()).__eq((30)));
self._assert_(_st(_st(d)._heightOfNegativeArea()).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((5))).__eq((25)));
self._assert_(_st(_st(d)._offsetFromAxis_((10))).__eq((20)));
self._assert_(_st(_st(d)._offsetFromAxis_((30))).__eq((0)));
self._assert_(_st(_st(d)._offsetFromAxis_((-5))).__eq((30)));
self._assert_(_st(_st(d)._offsetFromAxis_((-25))).__eq((30)));
firstElement=_st(_st(view)._elements())._first();
secondElement=_st(_st(view)._elements())._second();
self._assert_(_st(_st(firstElement)._position()).__eq((5).__at((30))));
self._assert_(_st(_st(firstElement)._extent()).__eq((20).__at((15))));
self._assert_(_st(_st(secondElement)._position()).__eq((30).__at((0))));
self._assert_(_st(_st(secondElement)._extent()).__eq((20).__at((30))));
xAxis=_st(_st(view)._elements())._fifth();
yAxis=_st(_st(view)._elements())._eighth();
self._assert_(_st(_st(_st(xAxis)._from())._position()).__eq((0).__at((30))));
self._assert_(_st(_st(_st(xAxis)._to())._position()).__eq((55).__at((30))));
self._assert_(_st(_st(_st(yAxis)._from())._position()).__eq((0).__at((0))));
self._assert_(_st(_st(_st(yAxis)._to())._position()).__eq((0).__at((45))));
return self}, function($ctx1) {$ctx1.fill(self,"testAxis2",{diagram:diagram,view:view,firstElement:firstElement,secondElement:secondElement,xAxis:xAxis,yAxis:yAxis,d:d},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "valueAxisLine", "baseAxisLine", "openTest", "assert:", "=", "numberOfElements", "heightOfPositiveArea", "heightOfNegativeArea", "offsetFromAxis:", "first", "elements", "second", "@", "position", "extent", "fifth", "eighth", "from", "to"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxis3",
fn: function (){
var self=this;
var diagram,view,xAxis,yAxis,d;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(1.5), (1)]);
_st($1)._height_((45));
_st($1)._valueAxisLine();
$2=_st($1)._baseAxisLine();
d=$2;
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((8)));
self._assert_(_st(_st(d)._heightOfPositiveArea()).__eq((45)));
self._assert_(_st(_st(d)._heightOfNegativeArea()).__eq((0)));
self._assert_(_st(_st(d)._offsetFromAxis_((5))).__eq((40)));
self._assert_(_st(_st(d)._offsetFromAxis_((10))).__eq((35)));
self._assert_(_st(_st(d)._offsetFromAxis_((30))).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((-5))).__eq((45)));
self._assert_(_st(_st(d)._offsetFromAxis_((-25))).__eq((45)));
xAxis=_st(_st(view)._elements())._fifth();
yAxis=_st(_st(view)._elements())._eighth();
self._assert_(_st(_st(_st(xAxis)._from())._position()).__eq((0).__at((45))));
self._assert_(_st(_st(_st(xAxis)._to())._position()).__eq((55).__at((45))));
self._assert_(_st(_st(_st(yAxis)._from())._position()).__eq((0).__at((0))));
self._assert_(_st(_st(_st(yAxis)._to())._position()).__eq((0).__at((45))));
return self}, function($ctx1) {$ctx1.fill(self,"testAxis3",{diagram:diagram,view:view,xAxis:xAxis,yAxis:yAxis,d:d},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "valueAxisLine", "baseAxisLine", "openTest", "assert:", "=", "numberOfElements", "heightOfPositiveArea", "heightOfNegativeArea", "offsetFromAxis:", "fifth", "elements", "eighth", "@", "position", "from", "to"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxis4",
fn: function (){
var self=this;
var diagram,view,xAxis,yAxis,d;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(-1.5), (-1)]);
_st($1)._height_((45));
_st($1)._valueAxisLine();
$2=_st($1)._baseAxisLine();
d=$2;
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((8)));
self._assert_(_st(_st(d)._heightOfPositiveArea()).__eq((0)));
self._assert_(_st(_st(d)._heightOfNegativeArea()).__eq((45)));
self._assert_(_st(_st(d)._getPixelsFromValue_((-1.5))).__eq((-45)));
self._assert_(_st(_st(d)._getPixelsFromValue_((-1))).__eq((-30)));
self._assert_(_st(_st(d)._offsetFromAxis_((5))).__eq((-5)));
self._assert_(_st(_st(d)._offsetFromAxis_((10))).__eq((-10)));
self._assert_(_st(_st(d)._offsetFromAxis_((30))).__eq((-30)));
self._assert_(_st(_st(d)._offsetFromAxis_((-5))).__eq((0)));
self._assert_(_st(_st(d)._offsetFromAxis_((-25))).__eq((0)));
xAxis=_st(_st(view)._elements())._fifth();
yAxis=_st(_st(view)._elements())._eighth();
self._assert_(_st(_st(_st(xAxis)._from())._position()).__eq((0).__at((0))));
self._assert_(_st(_st(_st(xAxis)._to())._position()).__eq((55).__at((0))));
self._assert_(_st(_st(_st(yAxis)._from())._position()).__eq((0).__at((0))));
self._assert_(_st(_st(_st(yAxis)._to())._position()).__eq((0).__at((45))));
return self}, function($ctx1) {$ctx1.fill(self,"testAxis4",{diagram:diagram,view:view,xAxis:xAxis,yAxis:yAxis,d:d},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "valueAxisLine", "baseAxisLine", "openTest", "assert:", "=", "numberOfElements", "heightOfPositiveArea", "heightOfNegativeArea", "getPixelsFromValue:", "offsetFromAxis:", "fifth", "elements", "eighth", "@", "position", "from", "to"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxisLabels",
fn: function (){
var self=this;
var chart,view,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
chart=_st($GETDiagramBuilder())._new();
$1=_st(chart)._verticalBarDiagram();
_st($1)._models_((1)._to_((3)));
_st($1)._xAxisLabel_("Test label");
_st($1)._yAxisLabel_("Another");
$2=_st($1)._regularAxis();
view=_st(chart)._openTest();
diag=_st(chart)._diagram();
return self}, function($ctx1) {$ctx1.fill(self,"testAxisLabels",{chart:chart,view:view,diag:diag},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "xAxisLabel:", "yAxisLabel:", "regularAxis", "openTest", "diagram"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxisWithLabel",
fn: function (){
var self=this;
var diagram,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(-1), (1)]);
_st($1)._height_((100));
_st($1)._valueAxisLine();
_st($1)._baseAxisLine();
_st($1)._regularTicks();
$2=_st($1)._regularLabels();
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((28)));
return self}, function($ctx1) {$ctx1.fill(self,"testAxisWithLabel",{diagram:diagram,view:view},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "height:", "valueAxisLine", "baseAxisLine", "regularTicks", "regularLabels", "openTest", "assert:", "=", "numberOfElements"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBarBasic",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETExamples(){return smalltalk.GETExamples||(typeof GETExamples=="undefined"?nil:GETExamples)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(_st($GETExamples())._heros());
$2=_st($1)._y_("matchesPlayed");
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(diagram)._openTest();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testBarBasic",{diagram:diagram},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "shouldnt:raise:", "openTest"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBarInteraction",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._horizontalBarDiagram())._models_([(30), (10), (20), (40)]);
_st(_st(diag)._interaction())._strongHighlightWhenOver();
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(diag)._openTest();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testBarInteraction",{diag:diag},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "strongHighlightWhenOver", "interaction", "shouldnt:raise:", "openTest"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBorder",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
diagram=_st($GETDiagramBuilder())._new();
_st(_st(diagram)._verticalBarDiagram())._models_([(-1), (0), (-3.14), (2), (3), (4), (5)]);
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(diagram)._openTest();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testBorder",{diagram:diagram},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "shouldnt:raise:", "openTest"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testButtonsInStack",
fn: function (){
var self=this;
var diag,stack;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._withDefaultButtons();
stack=_st(diag)._stack();
self._assert_(_st(_st(stack)._numberOfElements()).__gt((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testButtonsInStack",{diag:diag,stack:stack},smalltalk.GETBarDiagramTest)})},
messageSends: ["withDefaultButtons", "stack", "assert:", ">", "numberOfElements"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorAsBlock",
fn: function (){
var self=this;
var diagram,view,bar1,bar2;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_((1)._to_((10)));
_st($1)._y_("yourself");
$2=_st($1)._color_((function(v){
return smalltalk.withContext(function($ctx2) {
$3=_st(v)._odd();
if(smalltalk.assert($3)){
return _st($Color())._red();
} else {
return _st($Color())._gray();
};
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
view=_st(diagram)._openTest();
return view;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
bar1=_st(view)._elementFromModel_((1));
self._assert_(_st(_st(_st(bar1)._getShape_($ROBox()))._color()).__eq(_st($Color())._red()));
bar2=_st(view)._elementFromModel_((2));
self._assert_(_st(_st(_st(bar2)._getShape_($ROBox()))._color()).__eq(_st($Color())._gray()));
return self}, function($ctx1) {$ctx1.fill(self,"testColorAsBlock",{diagram:diagram,view:view,bar1:bar1,bar2:bar2},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "y:", "color:", "ifTrue:ifFalse:", "red", "gray", "odd", "shouldnt:raise:", "openTest", "elementFromModel:", "assert:", "=", "color", "getShape:"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorBasic",
fn: function (){
var self=this;
var diagram;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETExamples(){return smalltalk.GETExamples||(typeof GETExamples=="undefined"?nil:GETExamples)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(_st($GETExamples())._heros());
_st($1)._y_("matchesPlayed");
$2=_st($1)._color_("faction");
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(diagram)._openTest();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testColorBasic",{diagram:diagram},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "heros", "verticalBarDiagram", "y:", "color:", "shouldnt:raise:", "openTest"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorOnHeroes",
fn: function (){
var self=this;
var diagram,view,heroes,d,elements,colorOfElements;
function $GETExamples(){return smalltalk.GETExamples||(typeof GETExamples=="undefined"?nil:GETExamples)}
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
heroes=_st($GETExamples())._heros();
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_(heroes);
_st($1)._y_("matchesPlayed");
$2=_st($1)._color_("faction");
view=_st(diagram)._openTest();
d=_st($Dictionary())._new();
_st(_st(_st(heroes)._collect_("faction"))._asSet())._do_((function(k){
return smalltalk.withContext(function($ctx2) {
return _st(d)._at_put_(k,_st($OrderedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1)})}));
_st(heroes)._do_((function(h){
return smalltalk.withContext(function($ctx2) {
return _st(_st(d)._at_(_st(h)._faction()))._add_(h);
}, function($ctx2) {$ctx2.fillBlock({h:h},$ctx1)})}));
self._assert_(_st(_st(_st(d)._keys())._size()).__eq((3)));
_st(_st(d)._values())._do_((function(collection){
return smalltalk.withContext(function($ctx2) {
elements=_st(collection)._collect_((function(hero){
return smalltalk.withContext(function($ctx3) {
return _st(view)._elementFromModel_(hero);
}, function($ctx3) {$ctx3.fillBlock({hero:hero},$ctx2)})}));
elements;
colorOfElements=_st(elements)._collect_((function(el){
return smalltalk.withContext(function($ctx3) {
return _st(_st(el)._getShape_($ROBox()))._colorFor_(el);
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2)})}));
colorOfElements;
return self._assert_(_st(_st(_st(colorOfElements)._asSet())._size()).__eq((1)));
}, function($ctx2) {$ctx2.fillBlock({collection:collection},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testColorOnHeroes",{diagram:diagram,view:view,heroes:heroes,d:d,elements:elements,colorOfElements:colorOfElements},smalltalk.GETBarDiagramTest)})},
messageSends: ["heros", "new", "models:", "verticalBarDiagram", "y:", "color:", "openTest", "do:", "at:put:", "asSet", "collect:", "add:", "at:", "faction", "assert:", "=", "size", "keys", "elementFromModel:", "colorFor:", "getShape:", "values"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorOnNumbers",
fn: function (){
var self=this;
var diagram,view,el1,el2,el3,el4,el5,el6,cel1,cel2,cel3,cel4,cel5,cel6;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(1), (2), (3), (1), (2), (3), (1), (2), (3)]);
$2=_st($1)._color_("yourself");
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((9)));
el1=_st(_st(view)._elements())._first();
el2=_st(_st(view)._elements())._second();
el3=_st(_st(view)._elements())._third();
el4=_st(_st(view)._elements())._fourth();
el5=_st(_st(view)._elements())._fifth();
el6=_st(_st(view)._elements())._sixth();
cel1=_st(_st(el1)._getShape_($ROBox()))._colorFor_(el1);
cel2=_st(_st(el2)._getShape_($ROBox()))._colorFor_(el2);
cel3=_st(_st(el3)._getShape_($ROBox()))._colorFor_(el3);
cel4=_st(_st(el4)._getShape_($ROBox()))._colorFor_(el4);
cel5=_st(_st(el5)._getShape_($ROBox()))._colorFor_(el5);
cel6=_st(_st(el6)._getShape_($ROBox()))._colorFor_(el6);
self._assert_(_st(cel1).__eq(cel4));
self._assert_(_st(cel2).__eq(cel5));
self._assert_(_st(cel3).__eq(cel6));
return self}, function($ctx1) {$ctx1.fill(self,"testColorOnNumbers",{diagram:diagram,view:view,el1:el1,el2:el2,el3:el3,el4:el4,el5:el5,el6:el6,cel1:cel1,cel2:cel2,cel3:cel3,cel4:cel4,cel5:cel5,cel6:cel6},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "color:", "openTest", "assert:", "=", "numberOfElements", "first", "elements", "second", "third", "fourth", "fifth", "sixth", "colorFor:", "getShape:"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorOnNumbers2",
fn: function (){
var self=this;
var diagram,view,el1,el2,el3,el4,el5,el6,cel1,cel2,cel3,cel4,cel5,cel6;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._verticalBarDiagram();
_st($1)._models_([(1), (2), (3), (1), (2), (3), (1), (2), (3)]);
$2=_st($1)._color_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v).__plus((1));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((9)));
el1=_st(_st(view)._elements())._first();
el2=_st(_st(view)._elements())._second();
el3=_st(_st(view)._elements())._third();
el4=_st(_st(view)._elements())._fourth();
el5=_st(_st(view)._elements())._fifth();
el6=_st(_st(view)._elements())._sixth();
cel1=_st(_st(el1)._getShape_($ROBox()))._colorFor_(el1);
cel2=_st(_st(el2)._getShape_($ROBox()))._colorFor_(el2);
cel3=_st(_st(el3)._getShape_($ROBox()))._colorFor_(el3);
cel4=_st(_st(el4)._getShape_($ROBox()))._colorFor_(el4);
cel5=_st(_st(el5)._getShape_($ROBox()))._colorFor_(el5);
cel6=_st(_st(el6)._getShape_($ROBox()))._colorFor_(el6);
self._assert_(_st(cel1).__eq(cel4));
self._assert_(_st(cel2).__eq(cel5));
self._assert_(_st(cel3).__eq(cel6));
return self}, function($ctx1) {$ctx1.fill(self,"testColorOnNumbers2",{diagram:diagram,view:view,el1:el1,el2:el2,el3:el3,el4:el4,el5:el5,el6:el6,cel1:cel1,cel2:cel2,cel3:cel3,cel4:cel4,cel5:cel5,cel6:cel6},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "color:", "+", "openTest", "assert:", "=", "numberOfElements", "first", "elements", "second", "third", "fourth", "fifth", "sixth", "colorFor:", "getShape:"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCustomizingLabels",
fn: function (){
var self=this;
var diag,view,labelElements;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_([(0), (0.9)]);
$2=_st($1)._regularAxis();
view=_st(diag)._openTest();
labelElements=_st(view)._elementsSuchThat_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._isShapedAs_($ROLabel());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
self._assert_(_st(_st(labelElements)._size()).__eq((5)));
self._assert_(_st(_st(_st(labelElements)._first())._model()).__eq((0.9)));
self._assert_(_st(_st(_st(labelElements)._last())._model()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testCustomizingLabels",{diag:diag,view:view,labelElements:labelElements},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "regularAxis", "openTest", "elementsSuchThat:", "isShapedAs:", "assert:", "=", "size", "model", "first", "last"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCustomizingLabels2",
fn: function (){
var self=this;
var diag,view,labelElements;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
function $ROLabel(){return smalltalk.ROLabel||(typeof ROLabel=="undefined"?nil:ROLabel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_([(0), (1.9)]);
_st($1)._addValueDecorator_(_st($GETRegularTickDecorator())._new());
$2=_st($1)._addValueDecorator_(_st(_st($GETRegularLabelDecorator())._new())._formatInteger());
view=_st(diag)._openTest();
labelElements=_st(view)._elementsSuchThat_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(el)._isShapedAs_($ROLabel());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
self._assert_(_st(_st(labelElements)._size()).__eq((5)));
self._assert_(_st(_st(_st(labelElements)._first())._model()).__eq((2)));
self._assert_(_st(_st(_st(labelElements)._last())._model()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testCustomizingLabels2",{diag:diag,view:view,labelElements:labelElements},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "addValueDecorator:", "formatInteger", "openTest", "elementsSuchThat:", "isShapedAs:", "assert:", "=", "size", "model", "first", "last"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAxis",
fn: function (){
var self=this;
var diagram,view,firstElement,secondElement,xAxis,yAxis,d;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._horizontalBarDiagram();
_st($1)._models_([(-1), (1)]);
_st($1)._width_((100));
_st($1)._valueAxisLine();
$2=_st($1)._baseAxisLine();
d=$2;
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((8)));
self._assert_(_st(_st(d)._widthOfPositiveArea()).__eq((50)));
self._assert_(_st(_st(d)._widthOfNegativeArea()).__eq((50)));
self._assert_(_st(_st(d)._offsetFromAxis_((50))).__eq((50)));
self._assert_(_st(_st(d)._offsetFromAxis_((30))).__eq((50)));
self._assert_(_st(_st(d)._offsetFromAxis_((40))).__eq((50)));
self._assert_(_st(_st(d)._offsetFromAxis_((-50))).__eq((0)));
self._assert_(_st(_st(d)._offsetFromAxis_((-30))).__eq((20)));
firstElement=_st(_st(view)._elements())._first();
secondElement=_st(_st(view)._elements())._second();
self._assert_(_st(_st(firstElement)._position()).__eq((0).__at((5))));
self._assert_(_st(_st(firstElement)._extent()).__eq((50).__at((20))));
self._assert_(_st(_st(secondElement)._position()).__eq((50).__at((30))));
self._assert_(_st(_st(secondElement)._extent()).__eq((50).__at((20))));
xAxis=_st(_st(view)._elements())._fifth();
yAxis=_st(_st(view)._elements())._eighth();
self._assert_(_st(_st(_st(xAxis)._from())._position()).__eq((0).__at((55))));
self._assert_(_st(_st(_st(xAxis)._to())._position()).__eq((100).__at((55))));
self._assert_(_st(_st(_st(yAxis)._from())._position()).__eq((50).__at((0))));
self._assert_(_st(_st(_st(yAxis)._to())._position()).__eq((50).__at((55))));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAxis",{diagram:diagram,view:view,firstElement:firstElement,secondElement:secondElement,xAxis:xAxis,yAxis:yAxis,d:d},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "width:", "valueAxisLine", "baseAxisLine", "openTest", "assert:", "=", "numberOfElements", "widthOfPositiveArea", "widthOfNegativeArea", "offsetFromAxis:", "first", "elements", "second", "@", "position", "extent", "fifth", "eighth", "from", "to"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAxis2",
fn: function (){
var self=this;
var diagram,view,firstElement,secondElement,xAxis,yAxis,d;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._horizontalBarDiagram();
_st($1)._models_([(-0.5), (1)]);
_st($1)._width_((45));
_st($1)._valueAxisLine();
$2=_st($1)._baseAxisLine();
d=$2;
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((8)));
self._assert_(_st(_st(d)._widthOfPositiveArea()).__eq((30)));
self._assert_(_st(_st(d)._widthOfNegativeArea()).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((30))).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((40))).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((50))).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((50))).__eq((15)));
self._assert_(_st(_st(d)._offsetFromAxis_((-15))).__eq((0)));
self._assert_(_st(_st(d)._offsetFromAxis_((-5))).__eq((10)));
firstElement=_st(_st(view)._elements())._first();
secondElement=_st(_st(view)._elements())._second();
self._assert_(_st(_st(firstElement)._position()).__eq((0).__at((5))));
self._assert_(_st(_st(firstElement)._extent()).__eq((15).__at((20))));
self._assert_(_st(_st(secondElement)._position()).__eq((15).__at((30))));
self._assert_(_st(_st(secondElement)._extent()).__eq((30).__at((20))));
xAxis=_st(_st(view)._elements())._fifth();
yAxis=_st(_st(view)._elements())._eighth();
self._assert_(_st(_st(_st(xAxis)._from())._position()).__eq((0).__at((55))));
self._assert_(_st(_st(_st(xAxis)._to())._position()).__eq((45).__at((55))));
self._assert_(_st(_st(_st(yAxis)._from())._position()).__eq((15).__at((0))));
self._assert_(_st(_st(_st(yAxis)._to())._position()).__eq((15).__at((55))));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAxis2",{diagram:diagram,view:view,firstElement:firstElement,secondElement:secondElement,xAxis:xAxis,yAxis:yAxis,d:d},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "width:", "valueAxisLine", "baseAxisLine", "openTest", "assert:", "=", "numberOfElements", "widthOfPositiveArea", "widthOfNegativeArea", "offsetFromAxis:", "first", "elements", "second", "@", "position", "extent", "fifth", "eighth", "from", "to"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAxisWithTicks",
fn: function (){
var self=this;
var diagram,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._horizontalBarDiagram();
_st($1)._models_([(-1), (1)]);
_st($1)._width_((100));
_st($1)._valueAxisLine();
_st($1)._baseAxisLine();
$2=_st($1)._regularTicks();
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((23)));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAxisWithTicks",{diagram:diagram,view:view},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "width:", "valueAxisLine", "baseAxisLine", "regularTicks", "openTest", "assert:", "=", "numberOfElements"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAxisWithTicks2",
fn: function (){
var self=this;
var diagram,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETRegularTickDecorator(){return smalltalk.GETRegularTickDecorator||(typeof GETRegularTickDecorator=="undefined"?nil:GETRegularTickDecorator)}
function $GETRegularLabelDecorator(){return smalltalk.GETRegularLabelDecorator||(typeof GETRegularLabelDecorator=="undefined"?nil:GETRegularLabelDecorator)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._horizontalBarDiagram();
_st($1)._models_([(-1), (1)]);
_st($1)._width_((100));
_st($1)._valueAxisLine();
_st($1)._baseAxisLine();
_st($1)._addValueDecorator_(_st(_st($GETRegularTickDecorator())._new())._numberOfTicks_((10)));
$2=_st($1)._addValueDecorator_(_st(_st($GETRegularLabelDecorator())._new())._numberOfLabels_((10)));
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((52)));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAxisWithTicks2",{diagram:diagram,view:view},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "width:", "valueAxisLine", "baseAxisLine", "addValueDecorator:", "numberOfTicks:", "numberOfLabels:", "openTest", "assert:", "=", "numberOfElements"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorizontalAxisWithTicks3",
fn: function (){
var self=this;
var diagram,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diagram=_st($GETDiagramBuilder())._new();
$1=_st(diagram)._horizontalBarDiagram();
_st($1)._models_([(-1), (1)]);
_st($1)._width_((100));
$2=_st($1)._regularAxis();
view=_st(diagram)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((28)));
return self}, function($ctx1) {$ctx1.fill(self,"testHorizontalAxisWithTicks3",{diagram:diagram,view:view},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "width:", "regularAxis", "openTest", "assert:", "=", "numberOfElements"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHorzInit",
fn: function (){
var self=this;
var diagRender,diagram,diagRender2,diagram2;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
diagRender=_st($GETDiagramBuilder())._new();
$1=_st(diagRender)._horizontalBarDiagram();
_st($1)._models_([(1), (2), (3), (4), (5), (6), (7), (8), (9)]);
$2=_st($1)._y_("yourself");
diagram=_st(diagRender)._diagram();
self._assert_(_st(_st(diagram)._models()).__eq([(1), (2), (3), (4), (5), (6), (7), (8), (9)]));
self._assert_(_st(_st(diagram)._barWidth()).__eq(_st(_st(diagram)._class())._defaultBarwidth()));
self._assert_(_st(_st(diagram)._spacing()).__eq(_st(_st(diagram)._class())._defaultSpacing()));
diagRender2=_st($GETDiagramBuilder())._new();
$3=_st(diagRender2)._horizontalBarDiagram();
_st($3)._models_([(1), (2), (3), (4), (5), (6), (7), (8), (9)]);
_st($3)._y_("yourself");
_st($3)._barWidth_((133));
$4=_st($3)._spacing_((344));
diagram2=_st(diagRender2)._diagram();
self._assert_(_st(_st(diagram2)._models()).__eq([(1), (2), (3), (4), (5), (6), (7), (8), (9)]));
self._assert_(_st(_st(diagram2)._barWidth()).__eq((133)));
self._assert_(_st(_st(diagram2)._spacing()).__eq((344)));
return self}, function($ctx1) {$ctx1.fill(self,"testHorzInit",{diagRender:diagRender,diagram:diagram,diagRender2:diagRender2,diagram2:diagram2},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "y:", "diagram", "assert:", "=", "models", "defaultBarwidth", "class", "barWidth", "defaultSpacing", "spacing", "barWidth:", "spacing:"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInit",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
self._assert_(_st(_st(_st(diag)._stack())._firstView()).__eq_eq(_st(diag)._rawView()));
return self}, function($ctx1) {$ctx1.fill(self,"testInit",{diag:diag},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "assert:", "==", "rawView", "firstView", "stack"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitWithOpen",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._open())._delete();
self._assert_(_st(_st(_st(diag)._stack())._firstView()).__eq_eq(_st(diag)._rawView()));
return self}, function($ctx1) {$ctx1.fill(self,"testInitWithOpen",{diag:diag},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "delete", "open", "assert:", "==", "rawView", "firstView", "stack"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNoButtonsInStackByDefault",
fn: function (){
var self=this;
var diag,stack;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
stack=_st(diag)._stack();
self._assert_(_st(_st(stack)._numberOfElements()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testNoButtonsInStackByDefault",{diag:diag,stack:stack},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "stack", "assert:", "=", "numberOfElements"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testResizingAnimation",
fn: function (){
var self=this;
var diag,data;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._verticalBarDiagram();
_st($1)._models_((1)._to_((10)));
_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._height_((100));
_st(diag)._openTest();
_st(diag)._updateBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return x;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
data=_st(_st(diag)._diagram())._elements();
_st((1)._to_((10)))._do_((function(index){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(_st(data)._at_(index))._getValue()).__eq(index));
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testResizingAnimation",{diag:diag,data:data},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "to:", "verticalBarDiagram", "y:", "*", "height:", "openTest", "updateBlock:", "elements", "diagram", "do:", "assert:", "=", "getValue", "at:"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testUseColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testUseColor",{},smalltalk.GETBarDiagramTest)})},
messageSends: []}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValues",
fn: function (){
var self=this;
var d,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
d=_st($GETDiagramBuilder())._new();
diag=_st(_st(d)._verticalBarDiagram())._models_([(1), (2), (3), (-4), (5), (6), (7), (8), (9)]);
_st(d)._openTest();
self._assert_(_st(_st(diag)._maxValue()).__eq((9)));
self._assert_(_st(_st(diag)._minValue()).__eq((-4)));
return self}, function($ctx1) {$ctx1.fill(self,"testValues",{d:d,diag:diag},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "openTest", "assert:", "=", "maxValue", "minValue"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testValues2",
fn: function (){
var self=this;
var d,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
d=_st($GETDiagramBuilder())._new();
diag=_st(_st(d)._horizontalBarDiagram())._models_([(1), (2), (3), (-4), (5), (6), (7), (8), (9)]);
_st(d)._openTest();
self._assert_(_st(_st(diag)._maxValue()).__eq((9)));
self._assert_(_st(_st(diag)._minValue()).__eq((-4)));
return self}, function($ctx1) {$ctx1.fill(self,"testValues2",{d:d,diag:diag},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "horizontalBarDiagram", "openTest", "assert:", "=", "maxValue", "minValue"]}),
smalltalk.GETBarDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testVertInit",
fn: function (){
var self=this;
var diagRender,diagram,diagRender2,diagram2;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
diagRender=_st($GETDiagramBuilder())._new();
$1=_st(diagRender)._verticalBarDiagram();
_st($1)._models_([(1), (2), (3), (4), (5), (6), (7), (8), (9)]);
$2=_st($1)._x_("yourself");
diagram=_st(diagRender)._diagram();
self._assert_(_st(_st(diagram)._models()).__eq([(1), (2), (3), (4), (5), (6), (7), (8), (9)]));
self._assert_(_st(_st(diagram)._barWidth()).__eq(_st(_st(diagram)._class())._defaultBarwidth()));
self._assert_(_st(_st(diagram)._spacing()).__eq(_st(_st(diagram)._class())._defaultSpacing()));
diagRender2=_st($GETDiagramBuilder())._new();
$3=_st(diagRender2)._verticalBarDiagram();
_st($3)._models_([(1), (2), (3), (4), (5), (6), (7), (8), (9)]);
_st($3)._x_("yourself");
_st($3)._barWidth_((133));
$4=_st($3)._spacing_((344));
diagram2=_st(diagRender2)._diagram();
self._assert_(_st(_st(diagram2)._models()).__eq([(1), (2), (3), (4), (5), (6), (7), (8), (9)]));
self._assert_(_st(_st(diagram2)._barWidth()).__eq((133)));
self._assert_(_st(_st(diagram2)._spacing()).__eq((344)));
return self}, function($ctx1) {$ctx1.fill(self,"testVertInit",{diagRender:diagRender,diagram:diagram,diagRender2:diagRender2,diagram2:diagram2},smalltalk.GETBarDiagramTest)})},
messageSends: ["new", "models:", "verticalBarDiagram", "x:", "diagram", "assert:", "=", "models", "defaultBarwidth", "class", "barWidth", "defaultSpacing", "spacing", "barWidth:", "spacing:"]}),
smalltalk.GETBarDiagramTest);



smalltalk.addClass('GETCompositeDiagramTest', smalltalk.TestCase, [], 'Graph-ET-Core-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAxisBasic",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(1), (2), (3)]));
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(3), (2), (1)]));
_st($1)._baseAxisLine();
$2=_st($1)._valueAxisLine();
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((12)));
return self}, function($ctx1) {$ctx1.fill(self,"testAxisBasic",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "baseAxisLine", "valueAxisLine", "openTest", "numberOfElements"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxisBasicLabels",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(1), (2), (3)]));
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(3), (2), (1)]));
$2=_st($1)._regularAxis();
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((32)));
return self}, function($ctx1) {$ctx1.fill(self,"testAxisBasicLabels",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "regularAxis", "openTest", "numberOfElements"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic1",
fn: function (){
var self=this;
var builder,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st($GETLineDiagram())._new());
$2=_st($1)._add_(_st($GETLineDiagram())._new());
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic1",{builder:builder,diag:diag},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic2",
fn: function (){
var self=this;
var builder,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st($GETLineDiagram())._new());
$2=_st($1)._add_(_st($GETLineDiagram())._new());
_st(builder)._openTest();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic2",{builder:builder,diag:diag},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "openTest"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic3",
fn: function (){
var self=this;
var builder,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st($GETLineDiagram())._new());
$2=_st($GETLineDiagram())._new();
_st($2)._height_((1000));
$3=_st($2)._width_((50));
_st($1)._add_($3);
$4=_st($1)._add_(_st(_st($GETLineDiagram())._new())._height_((50)));
_st(builder)._openTest();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((3)));
self._assert_(_st(_st(diag)._height()).__eq((400)));
self._assert_(_st(_st(diag)._width()).__eq((400)));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic3",{builder:builder,diag:diag},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "height:", "width:", "openTest", "height", "width"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic4",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(1), (2), (3)]));
$2=_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(3), (2), (1)]));
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((6)));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic4",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "openTest", "numberOfElements"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic5IfSorted",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(1), (2), (3)]));
$2=_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(3), (2), (1)]));
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((6)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._first())._model()).__eq((3)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._second())._model()).__eq((3)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._third())._model()).__eq((2)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fourth())._model()).__eq((2)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fifth())._model()).__eq((1)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._sixth())._model()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic5IfSorted",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "openTest", "numberOfElements", "model", "first", "roElements", "second", "third", "fourth", "fifth", "sixth"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic5IfSortedAndScaled",
fn: function (){
var self=this;
var builder,diag,view,elem;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
$2=_st($GETVerticalBarDiagram())._new();
_st($2)._models_([(10), (9), (8)]);
$3=_st($2)._color_(_st($Color())._red());
_st($1)._add_($3);
$4=_st($GETVerticalBarDiagram())._new();
_st($4)._models_([(3), (3), (3)]);
$5=_st($4)._color_(_st($Color())._blue());
_st($1)._add_($5);
$6=_st($1)._height_((100));
view=_st(builder)._openTest();
elem=_st(view)._elements();
self._assert_(_st(_st(_st(elem)._first())._height()).__eq((100)));
self._assert_(_st(_st(_st(elem)._second())._height()).__eq((90)));
self._assert_(_st(_st(_st(elem)._third())._height()).__eq((80)));
self._assert_(_st(_st(_st(elem)._fourth())._height()).__eq((30)));
self._assert_(_st(_st(_st(elem)._fifth())._height()).__eq((30)));
self._assert_(_st(_st(_st(elem)._sixth())._height()).__eq((30)));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic5IfSortedAndScaled",{builder:builder,diag:diag,view:view,elem:elem},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "color:", "red", "blue", "height:", "openTest", "elements", "height", "first", "second", "third", "fourth", "fifth", "sixth"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic5IfSortedAndScaledAndTrans",
fn: function (){
var self=this;
var builder,diag,view,elem;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
$2=_st($GETVerticalBarDiagram())._new();
_st($2)._models_([(10), (9), (8)]);
$3=_st($2)._color_(_st($Color())._red());
_st($1)._add_($3);
$4=_st($GETVerticalBarDiagram())._new();
_st($4)._models_([(3), (3), (3)]);
$5=_st($4)._color_(_st($Color())._blue());
_st($1)._add_($5);
$6=_st($1)._height_((100));
view=_st(builder)._openTest();
elem=_st(view)._elements();
self._assert_(_st(_st(_st(elem)._first())._position()).__eq((5).__at((0))));
self._assert_(_st(_st(_st(elem)._second())._position()).__eq((30).__at((10))));
self._assert_(_st(_st(_st(elem)._third())._position()).__eq((55).__at((20))));
self._assert_(_st(_st(_st(elem)._fourth())._position()).__eq((5).__at((70))));
self._assert_(_st(_st(_st(elem)._fifth())._position()).__eq((30).__at((70))));
self._assert_(_st(_st(_st(elem)._sixth())._position()).__eq((55).__at((70))));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic5IfSortedAndScaledAndTrans",{builder:builder,diag:diag,view:view,elem:elem},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "color:", "red", "blue", "height:", "openTest", "elements", "@", "position", "first", "second", "third", "fourth", "fifth", "sixth"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColor",
fn: function (){
var self=this;
var builder,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(1), (2), (3)]));
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(3), (2), (1)]));
$2=_st($1)._color_(_st($Color())._blue());
_st(builder)._openTest();
_st(_st(diag)._roElements())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(_st(each)._getShape_($ROBox()))._color()).__eq(_st($Color())._gray()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testColor",{builder:builder,diag:diag},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "color:", "blue", "openTest", "do:", "gray", "color", "getShape:", "roElements"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCustomHeight",
fn: function (){
var self=this;
var builder,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETVerticalBarDiagram(){return smalltalk.GETVerticalBarDiagram||(typeof GETVerticalBarDiagram=="undefined"?nil:GETVerticalBarDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(1), (2), (3)]));
_st($1)._add_(_st(_st($GETVerticalBarDiagram())._new())._models_([(3), (2), (1)]));
$2=_st($1)._height_((234));
_st(builder)._openTest();
self._assert_(_st(_st(diag)._height()).__eq((234)));
return self}, function($ctx1) {$ctx1.fill(self,"testCustomHeight",{builder:builder,diag:diag},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "height:", "openTest", "height"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLineBasic",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETOrdinaryLineDiagram())._new())._models_([(1), (2), (3)]));
$2=_st($1)._add_(_st(_st($GETOrdinaryLineDiagram())._new())._models_([(3), (2), (1)]));
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((10)));
return self}, function($ctx1) {$ctx1.fill(self,"testLineBasic",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "openTest", "numberOfElements"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLineIfSorted",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETOrdinaryLineDiagram())._new())._models_([(1), (2), (3)]));
$2=_st($1)._add_(_st(_st($GETOrdinaryLineDiagram())._new())._models_([(3), (2), (1)]));
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((10)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._first())._model()).__eq((3)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._second())._model()).__eq((3)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._third())._model()).__eq((2)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fourth())._model()).__eq((2)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fifth())._model()).__eq((1)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._sixth())._model()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testLineIfSorted",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "openTest", "numberOfElements", "model", "first", "roElements", "second", "third", "fourth", "fifth", "sixth"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLinesIfSortedAndTrans",
fn: function (){
var self=this;
var builder,diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETOrdinaryLineDiagram(){return smalltalk.GETOrdinaryLineDiagram||(typeof GETOrdinaryLineDiagram=="undefined"?nil:GETOrdinaryLineDiagram)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
$2=_st($GETOrdinaryLineDiagram())._new();
_st($2)._models_([(10), (9), (8)]);
$3=_st($2)._color_(_st($Color())._red());
_st($1)._add_($3);
$4=_st($GETOrdinaryLineDiagram())._new();
_st($4)._models_([(3), (3), (3)]);
$5=_st($4)._color_(_st($Color())._blue());
_st($1)._add_($5);
$6=_st($1)._height_((100));
_st(builder)._openTest();
self._assert_(_st(_st(_st(_st(diag)._roElements())._first())._position()).__eq((20).__at((0))));
self._assert_(_st(_st(_st(_st(diag)._roElements())._second())._position()).__eq((40).__at((10))));
self._assert_(_st(_st(_st(_st(diag)._roElements())._third())._position()).__eq((60).__at((20))));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fourth())._position()).__eq((20).__at((70))));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fifth())._position()).__eq((40).__at((70))));
self._assert_(_st(_st(_st(_st(diag)._roElements())._sixth())._position()).__eq((60).__at((70))));
return self}, function($ctx1) {$ctx1.fill(self,"testLinesIfSortedAndTrans",{builder:builder,diag:diag},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "color:", "red", "blue", "height:", "openTest", "@", "position", "first", "roElements", "second", "third", "fourth", "fifth", "sixth"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMathLineBasic",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETLineDiagram())._new())._models_([(1), (2), (3)]));
$2=_st($1)._add_(_st(_st($GETLineDiagram())._new())._models_([(3), (2), (1)]));
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((10)));
return self}, function($ctx1) {$ctx1.fill(self,"testMathLineBasic",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "openTest", "numberOfElements"]}),
smalltalk.GETCompositeDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testMathLineIfSorted",
fn: function (){
var self=this;
var builder,diag,view;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $GETLineDiagram(){return smalltalk.GETLineDiagram||(typeof GETLineDiagram=="undefined"?nil:GETLineDiagram)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
builder=_st($GETDiagramBuilder())._new();
diag=_st(builder)._compositeDiagram();
self._assert_(_st(_st(_st(diag)._diagrams())._size()).__eq((0)));
$1=diag;
_st($1)._add_(_st(_st($GETLineDiagram())._new())._models_([(1), (2), (3)]));
$2=_st($1)._add_(_st(_st($GETLineDiagram())._new())._models_([(3), (2), (1)]));
view=_st(builder)._openTest();
self._assert_(_st(_st(view)._numberOfElements()).__eq((10)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._first())._model()).__eq((3)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._second())._model()).__eq((3)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._third())._model()).__eq((2)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fourth())._model()).__eq((2)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._fifth())._model()).__eq((1)));
self._assert_(_st(_st(_st(_st(diag)._roElements())._sixth())._model()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testMathLineIfSorted",{builder:builder,diag:diag,view:view},smalltalk.GETCompositeDiagramTest)})},
messageSends: ["new", "compositeDiagram", "assert:", "=", "size", "diagrams", "add:", "models:", "openTest", "numberOfElements", "model", "first", "roElements", "second", "third", "fourth", "fifth", "sixth"]}),
smalltalk.GETCompositeDiagramTest);



smalltalk.addClass('GETLineDiagramTest', smalltalk.TestCase, [], 'Graph-ET-Core-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testAxisLabel",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((1)._to_((3)));
_st($1)._yAxisLabel_("Test label");
$2=_st($1)._regularAxis();
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(ele)._size()).__eq((52)));
return self}, function($ctx1) {$ctx1.fill(self,"testAxisLabel",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "yAxisLabel:", "regularAxis", "openTest", "elements", "assert:", "=", "size"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAxisLabel2",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((1)._to_((3)));
_st($1)._xAxisLabel_("Test label");
$2=_st($1)._regularAxis();
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(ele)._size()).__eq((52)));
return self}, function($ctx1) {$ctx1.fill(self,"testAxisLabel2",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "xAxisLabel:", "regularAxis", "openTest", "elements", "assert:", "=", "size"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorBasic",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((10)));
$2=_st($1)._color_(_st($Color())._red());
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((21)));
self._assert_(_st(_st(_st(ele)._at_((11)))._position()).__eq((0).__at((400))));
self._assert_(_st(_st(_st(ele)._at_((21)))._position()).__eq((400).__at((0))));
_st(ele)._from_to_do_((11),(21),(function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(_st(each)._getShape_($ROEllipse()))._color()).__eq(_st($Color())._red()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testColorBasic",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "color:", "red", "openTest", "elements", "assert:", "=", "numberOfElements", "@", "position", "at:", "from:to:do:", "color", "getShape:"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorBlock",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((10)));
$2=_st($1)._color_((function(each){
return smalltalk.withContext(function($ctx2) {
$3=_st(each)._isZero();
if(smalltalk.assert($3)){
return _st($Color())._black();
} else {
return _st($Color())._green();
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((21)));
self._assert_(_st(_st(_st(ele)._at_((11)))._position()).__eq((0).__at((400))));
self._assert_(_st(_st(_st(ele)._at_((21)))._position()).__eq((400).__at((0))));
self._assert_(_st(_st(_st(_st(ele)._at_((11)))._getShape_($ROEllipse()))._color()).__eq(_st($Color())._black()));
_st(ele)._from_to_do_((12),(21),(function(each){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(_st(each)._getShape_($ROEllipse()))._color()).__eq(_st($Color())._green()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testColorBlock",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "color:", "ifTrue:ifFalse:", "black", "green", "isZero", "openTest", "elements", "assert:", "=", "numberOfElements", "@", "position", "at:", "color", "getShape:", "from:to:do:"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testColorProperty",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((10)));
$2=_st($1)._color_("isPrime");
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((21)));
self._assert_(_st(_st(_st(ele)._at_((11)))._position()).__eq((0).__at((400))));
self._assert_(_st(_st(_st(ele)._at_((21)))._position()).__eq((400).__at((0))));
self._assert_(_st(_st(_st(_st(ele)._at_((12)))._getShape_($ROEllipse()))._color()).__eq(_st(_st(_st(ele)._at_((13)))._getShape_($ROEllipse()))._color()));
return self}, function($ctx1) {$ctx1.fill(self,"testColorProperty",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "color:", "openTest", "elements", "assert:", "=", "numberOfElements", "@", "position", "at:", "color", "getShape:"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInit",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._lineDiagram())._models_((0)._to_((10)));
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((21)));
self._assert_(_st(_st(_st(ele)._at_((11)))._position()).__eq((0).__at((400))));
self._assert_(_st(_st(_st(ele)._at_((21)))._position()).__eq((400).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testInit",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "openTest", "elements", "assert:", "=", "numberOfElements", "@", "position", "at:"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitNegDomain",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._lineDiagram())._models_((-10)._to_((10)));
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((41)));
self._assert_(_st(_st(_st(ele)._at_((21)))._position()).__eq((-200).__at((400))));
self._assert_(_st(_st(_st(ele)._at_((31)))._position()).__eq((0).__at((200))));
self._assert_(_st(_st(_st(ele)._at_((41)))._position()).__eq((200).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testInitNegDomain",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "openTest", "elements", "assert:", "=", "numberOfElements", "@", "position", "at:"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitwithValueBlock",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
diag=_st($GETDiagramBuilder())._new();
$1=_st(diag)._lineDiagram();
_st($1)._models_((0)._to_((10)));
$2=_st($1)._y_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x).__star(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
view=_st(diag)._openTest();
return view;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),$Error());
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((21)));
self._assert_(_st(_st(_st(ele)._at_((11)))._position()).__eq((0).__at((400))));
self._assert_(_st(_st(_st(ele)._at_((21)))._position()).__eq((400).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testInitwithValueBlock",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "y:", "*", "shouldnt:raise:", "openTest", "elements", "assert:", "=", "numberOfElements", "@", "position", "at:"]}),
smalltalk.GETLineDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabels",
fn: function (){
var self=this;
var diag,view,ele;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._lineDiagram())._models_((0)._to_((3)));
_st(_st(diag)._interaction())._popUpText();
view=_st(diag)._openTest();
ele=_st(view)._elements();
self._assert_(_st(_st(view)._numberOfElements()).__eq((7)));
self._assert_(_st(_st(_st(ele)._fourth())._model()).__eq((0)));
self._assert_(_st(_st(_st(ele)._fifth())._model()).__eq((1)));
self._assert_(_st(_st(_st(ele)._sixth())._model()).__eq((2)));
self._assert_(_st(_st(_st(ele)._seventh())._model()).__eq((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testLabels",{diag:diag,view:view,ele:ele},smalltalk.GETLineDiagramTest)})},
messageSends: ["new", "models:", "to:", "lineDiagram", "popUpText", "interaction", "openTest", "elements", "assert:", "=", "numberOfElements", "model", "fourth", "fifth", "sixth", "seventh"]}),
smalltalk.GETLineDiagramTest);



smalltalk.addClass('GETPieDiagramTest', smalltalk.TestCase, [], 'Graph-ET-Core-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testPieBasic",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._pieDiagram())._models_([(30), (10), (20), (40)]);
self._assert_(true);
return self}, function($ctx1) {$ctx1.fill(self,"testPieBasic",{diag:diag},smalltalk.GETPieDiagramTest)})},
messageSends: ["new", "models:", "pieDiagram", "assert:"]}),
smalltalk.GETPieDiagramTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPieInteraction",
fn: function (){
var self=this;
var diag;
function $GETDiagramBuilder(){return smalltalk.GETDiagramBuilder||(typeof GETDiagramBuilder=="undefined"?nil:GETDiagramBuilder)}
return smalltalk.withContext(function($ctx1) { 
diag=_st($GETDiagramBuilder())._new();
_st(_st(diag)._pieDiagram())._models_([(30), (10), (20), (40)]);
_st(_st(diag)._interaction())._strongHighlightWhenOver();
self._assert_(true);
return self}, function($ctx1) {$ctx1.fill(self,"testPieInteraction",{diag:diag},smalltalk.GETPieDiagramTest)})},
messageSends: ["new", "models:", "pieDiagram", "strongHighlightWhenOver", "interaction", "assert:"]}),
smalltalk.GETPieDiagramTest);



