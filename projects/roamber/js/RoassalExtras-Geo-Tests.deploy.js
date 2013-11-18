smalltalk.addPackage('RoassalExtras-Geo-Tests');
smalltalk.addClass('ROFranceMapBuilderTest', smalltalk.ROTest, ['builder'], 'RoassalExtras-Geo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "expectedFailures",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["testShapeBuilder", "testShapeSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"expectedFailures",{},smalltalk.ROFranceMapBuilderTest)})},
messageSends: []}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROFranceMapBuilderTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@builder"]=_st($ROMapBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["setUp", "new"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCities",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@builder"])._numberOfCities()).__gt((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testCities",{},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["assert:", ">", "numberOfCities"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEvent",
fn: function (){
var self=this;
var t,nice;
function $ROMouseEnter(){return smalltalk.ROMouseEnter||(typeof ROMouseEnter=="undefined"?nil:ROMouseEnter)}
return smalltalk.withContext(function($ctx1) { 
t=false;
_st(_st(self["@builder"])._interaction())._on_do_($ROMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
t=true;
return t;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
nice=_st(self["@builder"])._city_("Nice");
self._deny_(t);
_st(nice)._announce_($ROMouseEnter());
self._assert_(t);
return self}, function($ctx1) {$ctx1.fill(self,"testEvent",{t:t,nice:nice},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["on:do:", "interaction", "city:", "deny:", "announce:", "assert:"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLinearFillColor",
fn: function (){
var self=this;
var nice,paris;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._linearFillColor_((function(cityName){
return smalltalk.withContext(function($ctx2) {
return _st(cityName)._size();
}, function($ctx2) {$ctx2.fillBlock({cityName:cityName},$ctx1)})}));
_st(self["@builder"])._cities_(["Nice", "Paris"]);
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
paris=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
self._assert_(_st(_st(_st(nice)._getShape_($ROEllipse()))._colorFor_(nice)).__tild_eq(_st(_st(paris)._getShape_($ROEllipse()))._colorFor_(paris)));
return self}, function($ctx1) {$ctx1.fill(self,"testLinearFillColor",{nice:nice,paris:paris},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["linearFillColor:", "size", "shape", "cities:", "elementFromModel:", "view", "assert:", "~=", "colorFor:", "getShape:"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOpening",
fn: function (){
var self=this;
var window;
return smalltalk.withContext(function($ctx1) { 
window=_st(self["@builder"])._open();
self._assert_(_st(window)._notNil());
_st(window)._delete();
return self}, function($ctx1) {$ctx1.fill(self,"testOpening",{window:window},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["open", "assert:", "notNil", "delete"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeBuilder",
fn: function (){
var self=this;
var element;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._rectangle();
_st(self["@builder"])._city_("Nice");
_st(self["@builder"])._city_("Paris");
element=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
self._assert_(_st(element)._isShapedAs_($ROBox()));
element=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
self._assert_(_st(element)._isShapedAs_($ROEllipse()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeBuilder",{element:element},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["rectangle", "shape", "city:", "elementFromModel:", "view", "assert:", "isShapedAs:"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeBuilderWithLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._withLabel();
_st(self["@builder"])._city_("Nice");
self._assert_(_st(_st(_st(self["@builder"])._view())._numberOfElements()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeBuilderWithLabel",{},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["withLabel", "shape", "city:", "assert:", "=", "numberOfElements", "view"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeCityBuilder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._city_("Nice");
self._assert_(_st(_st(_st(self["@builder"])._view())._numberOfElements()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeCityBuilder",{},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["city:", "assert:", "=", "numberOfElements", "view"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeColor",
fn: function (){
var self=this;
var nice,paris;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._color_(_st($Color())._blue());
_st(self["@builder"])._city_("Nice");
_st(_st(self["@builder"])._shape())._color_(_st($Color())._gray());
_st(self["@builder"])._city_("Paris");
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
paris=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
self._assert_(_st(_st(_st(nice)._getShape_($ROEllipse()))._colorFor_(nice)).__eq(_st($Color())._blue()));
self._assert_(_st(_st(_st(paris)._getShape_($ROEllipse()))._colorFor_(paris)).__eq(_st($Color())._gray()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeColor",{nice:nice,paris:paris},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["color:", "blue", "shape", "city:", "gray", "elementFromModel:", "view", "assert:", "=", "colorFor:", "getShape:"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeColor2",
fn: function (){
var self=this;
var nice;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self["@builder"])._shape())._color()).__eq(_st($Color())._red()));
_st(self["@builder"])._city_("Nice");
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
self._assert_(_st(_st(_st(nice)._getShape_($ROEllipse()))._colorFor_(nice)).__eq(_st($Color())._red()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeColor2",{nice:nice},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["assert:", "=", "red", "color", "shape", "city:", "elementFromModel:", "view", "colorFor:", "getShape:"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeColor3",
fn: function (){
var self=this;
var nice;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._color_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st($Color())._green();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
_st(self["@builder"])._city_("Nice");
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
self._assert_(_st(_st(_st(nice)._getShape_($ROEllipse()))._colorFor_(nice)).__eq(_st($Color())._green()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeColor3",{nice:nice},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["color:", "green", "shape", "city:", "elementFromModel:", "view", "assert:", "=", "colorFor:", "getShape:"]}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeSize",
fn: function (){
var self=this;
var nice,paris;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._size_((20));
_st(self["@builder"])._city_("Nice");
_st(self["@builder"])._city_("Paris");
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
paris=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
self._assert_(_st(_st(_st(_st(nice)._getShape_($ROEllipse()))._extentFor_(nice))._x()).__eq((20)));
self._assert_(_st(_st(_st(_st(paris)._getShape_($ROEllipse()))._extentFor_(paris))._x()).__eq(_st(_st(self["@builder"])._shape())._defaultCitySize()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeSize",{nice:nice,paris:paris},smalltalk.ROFranceMapBuilderTest)})},
messageSends: ["size:", "shape", "city:", "elementFromModel:", "view", "assert:", "=", "x", "extentFor:", "getShape:", "defaultCitySize"]}),
smalltalk.ROFranceMapBuilderTest);



smalltalk.addClass('ROMapBuilderTest', smalltalk.ROTest, ['builder'], 'RoassalExtras-Geo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROMapBuilderTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@builder"]=_st($ROMapBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROMapBuilderTest)})},
messageSends: ["setUp", "new"]}),
smalltalk.ROMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEdges",
fn: function (){
var self=this;
var edge;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@builder"])._country_("UnitedStates");
_st(self["@builder"])._cities_(["New York City", "Washington, D.C."]);
$1=_st(_st(self["@builder"])._shape())._line();
_st($1)._width_((3));
$2=_st($1)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(self["@builder"])._edgesFrom_toAll_("New York City",["Washington, D.C."]);
self._assert_(_st(_st(_st(_st(self["@builder"])._view())._elementsAsEdge())._size()).__eq((1)));
edge=_st(_st(_st(self["@builder"])._view())._elementsAsEdge())._anyOne();
self._assert_(_st(_st(_st(edge)._getShape_($ROLine()))._color()).__eq(_st(_st($Color())._blue())._alpha_((0.5))));
return self}, function($ctx1) {$ctx1.fill(self,"testEdges",{edge:edge},smalltalk.ROMapBuilderTest)})},
messageSends: ["country:", "cities:", "width:", "line", "shape", "color:", "alpha:", "blue", "edgesFrom:toAll:", "assert:", "=", "size", "elementsAsEdge", "view", "anyOne", "color", "getShape:"]}),
smalltalk.ROMapBuilderTest);



