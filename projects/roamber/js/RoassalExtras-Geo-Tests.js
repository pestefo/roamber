define("roamber/RoassalExtras-Geo-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "roamber/ARoassal-Test"], function(smalltalk,nil,_st){
smalltalk.addPackage('RoassalExtras-Geo-Tests');
smalltalk.packages["RoassalExtras-Geo-Tests"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('ROFranceMapBuilderTest', smalltalk.ROTest, ['builder'], 'RoassalExtras-Geo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "expectedFailures",
category: 'city shape builder',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["testShapeBuilder", "testShapeSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"expectedFailures",{},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "expectedFailures\x0a\x09^ #(#testShapeBuilder #testShapeSize)",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROFranceMapBuilderTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@builder"]=_st($ROMapBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09builder := ROMapBuilder new",
messageSends: ["setUp", "new"],
referencedClasses: ["ROMapBuilder"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCities",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@builder"])._numberOfCities()).__gt((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testCities",{},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testCities\x0a\x0a\x09self assert: builder numberOfCities > 0",
messageSends: ["assert:", ">", "numberOfCities"],
referencedClasses: []
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEvent",
category: 'events',
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
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
nice=_st(self["@builder"])._city_("Nice");
self._deny_(t);
_st(nice)._announce_($ROMouseEnter());
self._assert_(t);
return self}, function($ctx1) {$ctx1.fill(self,"testEvent",{t:t,nice:nice},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testEvent\x0a\x09| t nice |\x0a\x09t := false.\x0a\x09builder interaction on: ROMouseEnter do: [ :event | t := true ].\x0a\x09nice := builder city: 'Nice'.\x0a\x09\x0a\x09self deny: t.\x0a\x09nice announce: ROMouseEnter.\x0a\x09self assert: t",
messageSends: ["on:do:", "interaction", "city:", "deny:", "announce:", "assert:"],
referencedClasses: ["ROMouseEnter"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLinearFillColor",
category: 'city shape builder',
fn: function (){
var self=this;
var nice,paris;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2;
_st(_st(self["@builder"])._shape())._linearFillColor_((function(cityName){
return smalltalk.withContext(function($ctx2) {
return _st(cityName)._size();
}, function($ctx2) {$ctx2.fillBlock({cityName:cityName},$ctx1,1)})}));
_st(self["@builder"])._cities_(["Nice", "Paris"]);
$1=_st(self["@builder"])._view();
$ctx1.sendIdx["view"]=1;
nice=_st($1)._elementFromModel_("Nice");
$ctx1.sendIdx["elementFromModel:"]=1;
paris=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
$4=_st(nice)._getShape_($ROEllipse());
$ctx1.sendIdx["getShape:"]=1;
$3=_st($4)._colorFor_(nice);
$ctx1.sendIdx["colorFor:"]=1;
$2=_st($3).__tild_eq(_st(_st(paris)._getShape_($ROEllipse()))._colorFor_(paris));
self._assert_($2);
return self}, function($ctx1) {$ctx1.fill(self,"testLinearFillColor",{nice:nice,paris:paris},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testLinearFillColor\x0a\x09| nice paris |\x0a\x09builder shape linearFillColor: [ :cityName | cityName size ].\x0a\x09builder cities: #('Nice' 'Paris'). \x0a\x09\x0a\x09nice := builder view elementFromModel: 'Nice'.\x0a\x09paris := builder view elementFromModel: 'Paris'.\x0a\x09self assert: ((nice getShape: ROEllipse) colorFor: nice) ~= ((paris getShape: ROEllipse) colorFor: paris)",
messageSends: ["linearFillColor:", "shape", "size", "cities:", "elementFromModel:", "view", "assert:", "~=", "colorFor:", "getShape:"],
referencedClasses: ["ROEllipse"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testOpening",
category: 'tests',
fn: function (){
var self=this;
var window;
return smalltalk.withContext(function($ctx1) { 
window=_st(self["@builder"])._open();
self._assert_(_st(window)._notNil());
_st(window)._delete();
return self}, function($ctx1) {$ctx1.fill(self,"testOpening",{window:window},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testOpening\x0a\x0a\x09| window |\x0a\x09window := builder open.\x0a\x09self assert: window notNil.\x0a\x09window delete.",
messageSends: ["open", "assert:", "notNil", "delete"],
referencedClasses: []
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeBuilder",
category: 'city shape builder',
fn: function (){
var self=this;
var element;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self["@builder"])._shape())._rectangle();
_st(self["@builder"])._city_("Nice");
$ctx1.sendIdx["city:"]=1;
_st(self["@builder"])._city_("Paris");
$1=_st(self["@builder"])._view();
$ctx1.sendIdx["view"]=1;
element=_st($1)._elementFromModel_("Nice");
$ctx1.sendIdx["elementFromModel:"]=1;
$2=_st(element)._isShapedAs_($ROBox());
$ctx1.sendIdx["isShapedAs:"]=1;
self._assert_($2);
$ctx1.sendIdx["assert:"]=1;
element=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
self._assert_(_st(element)._isShapedAs_($ROEllipse()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeBuilder",{element:element},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeBuilder\x0a\x0a\x09| element |\x0a\x09builder shape rectangle.\x0a\x09builder city: 'Nice'.\x0a\x09\x0a\x09builder city: 'Paris'.\x0a\x09\x0a\x09element := builder view elementFromModel: 'Nice'.\x0a\x09self assert: (element isShapedAs: ROBox).\x0a\x09\x0a\x09element := builder view elementFromModel: 'Paris'.\x0a\x09self assert: (element isShapedAs: ROEllipse).",
messageSends: ["rectangle", "shape", "city:", "elementFromModel:", "view", "assert:", "isShapedAs:"],
referencedClasses: ["ROBox", "ROEllipse"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeBuilderWithLabel",
category: 'city shape builder',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._withLabel();
_st(self["@builder"])._city_("Nice");
self._assert_(_st(_st(_st(self["@builder"])._view())._numberOfElements()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeBuilderWithLabel",{},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeBuilderWithLabel\x0a\x09builder shape withLabel.\x0a\x09builder city: 'Nice'.\x0a\x09\x0a\x09self assert: builder view numberOfElements = 2.",
messageSends: ["withLabel", "shape", "city:", "assert:", "=", "numberOfElements", "view"],
referencedClasses: []
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeCityBuilder",
category: 'tests',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._city_("Nice");
self._assert_(_st(_st(_st(self["@builder"])._view())._numberOfElements()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeCityBuilder",{},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeCityBuilder\x0a\x0a\x09builder city: 'Nice'.\x0a\x09self assert: builder view numberOfElements = 1",
messageSends: ["city:", "assert:", "=", "numberOfElements", "view"],
referencedClasses: []
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeColor",
category: 'city shape builder',
fn: function (){
var self=this;
var nice,paris;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$8,$7,$6;
$1=_st(self["@builder"])._shape();
$ctx1.sendIdx["shape"]=1;
$2=_st($Color())._blue();
$ctx1.sendIdx["blue"]=1;
_st($1)._color_($2);
$ctx1.sendIdx["color:"]=1;
_st(self["@builder"])._city_("Nice");
$ctx1.sendIdx["city:"]=1;
$3=_st(self["@builder"])._shape();
$4=_st($Color())._gray();
$ctx1.sendIdx["gray"]=1;
_st($3)._color_($4);
_st(self["@builder"])._city_("Paris");
$5=_st(self["@builder"])._view();
$ctx1.sendIdx["view"]=1;
nice=_st($5)._elementFromModel_("Nice");
$ctx1.sendIdx["elementFromModel:"]=1;
paris=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
$8=_st(nice)._getShape_($ROEllipse());
$ctx1.sendIdx["getShape:"]=1;
$7=_st($8)._colorFor_(nice);
$ctx1.sendIdx["colorFor:"]=1;
$6=_st($7).__eq(_st($Color())._blue());
$ctx1.sendIdx["="]=1;
self._assert_($6);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(_st(paris)._getShape_($ROEllipse()))._colorFor_(paris)).__eq(_st($Color())._gray()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeColor",{nice:nice,paris:paris},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeColor\x0a\x0a\x09| nice paris |\x0a\x09builder shape color: Color blue.\x0a\x09builder city: 'Nice'. \x0a\x09\x0a\x09builder shape color: Color gray.\x0a\x09builder city: 'Paris'.\x0a\x09\x0a\x09nice := builder view elementFromModel: 'Nice'.\x0a\x09paris := builder view elementFromModel: 'Paris'.\x0a\x09\x0a\x09self assert: ((nice getShape: ROEllipse) colorFor: nice) = Color blue.\x0a\x09self assert: ((paris getShape: ROEllipse) colorFor: paris) = Color gray",
messageSends: ["color:", "shape", "blue", "city:", "gray", "elementFromModel:", "view", "assert:", "=", "colorFor:", "getShape:"],
referencedClasses: ["Color", "ROEllipse"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeColor2",
category: 'city shape builder',
fn: function (){
var self=this;
var nice;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self["@builder"])._shape())._color();
$3=_st($Color())._red();
$ctx1.sendIdx["red"]=1;
$1=_st($2).__eq($3);
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
_st(self["@builder"])._city_("Nice");
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
self._assert_(_st(_st(_st(nice)._getShape_($ROEllipse()))._colorFor_(nice)).__eq(_st($Color())._red()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeColor2",{nice:nice},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeColor2\x0a\x09| nice |\x0a\x09self assert: builder shape color = Color red.\x0a\x09\x0a\x09builder city: 'Nice'. \x0a\x09\x0a\x09nice := builder view elementFromModel: 'Nice'.\x0a\x09self assert: ((nice getShape: ROEllipse) colorFor: nice) = Color red.",
messageSends: ["assert:", "=", "color", "shape", "red", "city:", "elementFromModel:", "view", "colorFor:", "getShape:"],
referencedClasses: ["Color", "ROEllipse"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeColor3",
category: 'city shape builder',
fn: function (){
var self=this;
var nice;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._shape())._color_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st($Color())._green();
$ctx2.sendIdx["green"]=1;
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
_st(self["@builder"])._city_("Nice");
nice=_st(_st(self["@builder"])._view())._elementFromModel_("Nice");
self._assert_(_st(_st(_st(nice)._getShape_($ROEllipse()))._colorFor_(nice)).__eq(_st($Color())._green()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeColor3",{nice:nice},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeColor3\x0a\x09| nice |\x0a\x09builder shape color: [ :v | Color green ].\x0a\x09builder city: 'Nice'. \x0a\x09\x0a\x09nice := builder view elementFromModel: 'Nice'.\x0a\x09self assert: ((nice getShape: ROEllipse) colorFor: nice) = Color green.",
messageSends: ["color:", "shape", "green", "city:", "elementFromModel:", "view", "assert:", "=", "colorFor:", "getShape:"],
referencedClasses: ["Color", "ROEllipse"]
}),
smalltalk.ROFranceMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeSize",
category: 'city shape builder',
fn: function (){
var self=this;
var nice,paris;
function $ROEllipse(){return smalltalk.ROEllipse||(typeof ROEllipse=="undefined"?nil:ROEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$3;
$1=_st(self["@builder"])._shape();
$ctx1.sendIdx["shape"]=1;
_st($1)._size_((20));
_st(self["@builder"])._city_("Nice");
$ctx1.sendIdx["city:"]=1;
_st(self["@builder"])._city_("Paris");
$2=_st(self["@builder"])._view();
$ctx1.sendIdx["view"]=1;
nice=_st($2)._elementFromModel_("Nice");
$ctx1.sendIdx["elementFromModel:"]=1;
paris=_st(_st(self["@builder"])._view())._elementFromModel_("Paris");
$6=_st(nice)._getShape_($ROEllipse());
$ctx1.sendIdx["getShape:"]=1;
$5=_st($6)._extentFor_(nice);
$ctx1.sendIdx["extentFor:"]=1;
$4=_st($5)._x();
$ctx1.sendIdx["x"]=1;
$3=_st($4).__eq((20));
$ctx1.sendIdx["="]=1;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(_st(_st(paris)._getShape_($ROEllipse()))._extentFor_(paris))._x()).__eq(_st(_st(self["@builder"])._shape())._defaultCitySize()));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeSize",{nice:nice,paris:paris},smalltalk.ROFranceMapBuilderTest)})},
args: [],
source: "testShapeSize\x0a\x0a\x09| nice paris |\x0a\x09builder shape size: 20.\x0a\x09builder city: 'Nice'. \x0a\x09\x0a\x09builder city: 'Paris'.\x0a\x09\x0a\x09nice := builder view elementFromModel: 'Nice'.\x0a\x09paris := builder view elementFromModel: 'Paris'.\x0a\x09\x0a\x09self assert: ((nice getShape: ROEllipse) extentFor: nice) x = 20.\x0a\x09self assert: ((paris getShape: ROEllipse) extentFor: paris) x = builder shape defaultCitySize.",
messageSends: ["size:", "shape", "city:", "elementFromModel:", "view", "assert:", "=", "x", "extentFor:", "getShape:", "defaultCitySize"],
referencedClasses: ["ROEllipse"]
}),
smalltalk.ROFranceMapBuilderTest);



smalltalk.addClass('ROMapBuilderTest', smalltalk.ROTest, ['builder'], 'RoassalExtras-Geo-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $ROMapBuilder(){return smalltalk.ROMapBuilder||(typeof ROMapBuilder=="undefined"?nil:ROMapBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ROMapBuilderTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@builder"]=_st($ROMapBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROMapBuilderTest)})},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09builder := ROMapBuilder new.",
messageSends: ["setUp", "new"],
referencedClasses: ["ROMapBuilder"]
}),
smalltalk.ROMapBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEdges",
category: 'tests',
fn: function (){
var self=this;
var edge;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROLine(){return smalltalk.ROLine||(typeof ROLine=="undefined"?nil:ROLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2,$9,$8,$7,$6;
_st(self["@builder"])._country_("UnitedStates");
_st(self["@builder"])._cities_(["New York City", "Washington, D.C."]);
$1=_st(_st(self["@builder"])._shape())._line();
_st($1)._width_((3));
$3=$1;
$5=_st($Color())._blue();
$ctx1.sendIdx["blue"]=1;
$4=_st($5)._alpha_((0.5));
$ctx1.sendIdx["alpha:"]=1;
$2=_st($3)._color_($4);
_st(self["@builder"])._edgesFrom_toAll_("New York City",["Washington, D.C."]);
$9=_st(self["@builder"])._view();
$ctx1.sendIdx["view"]=1;
$8=_st($9)._elementsAsEdge();
$ctx1.sendIdx["elementsAsEdge"]=1;
$7=_st($8)._size();
$6=_st($7).__eq((1));
$ctx1.sendIdx["="]=1;
self._assert_($6);
$ctx1.sendIdx["assert:"]=1;
edge=_st(_st(_st(self["@builder"])._view())._elementsAsEdge())._anyOne();
self._assert_(_st(_st(_st(edge)._getShape_($ROLine()))._color()).__eq(_st(_st($Color())._blue())._alpha_((0.5))));
return self}, function($ctx1) {$ctx1.fill(self,"testEdges",{edge:edge},smalltalk.ROMapBuilderTest)})},
args: [],
source: "testEdges\x0a\x0a\x09| edge |\x0a\x09builder country: 'UnitedStates'.\x0a\x0a\x09builder cities: #('New York City' 'Washington, D.C.').\x0a\x09\x0a\x09builder shape line width: 3; color: (Color blue alpha: 0.5).\x0a\x09builder edgesFrom: 'New York City' toAll: #('Washington, D.C.').\x0a\x0a\x09self assert: builder view elementsAsEdge size = 1.\x0a\x09\x0a\x09edge := builder view elementsAsEdge anyOne.\x0a\x09self assert: (edge getShape: ROLine) color = (Color blue alpha: 0.5)",
messageSends: ["country:", "cities:", "width:", "line", "shape", "color:", "alpha:", "blue", "edgesFrom:toAll:", "assert:", "=", "size", "elementsAsEdge", "view", "anyOne", "color", "getShape:"],
referencedClasses: ["Color", "ROLine"]
}),
smalltalk.ROMapBuilderTest);


});
