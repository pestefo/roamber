smalltalk.addPackage('ARoassal-Layout-Test');
smalltalk.addClass('ROLayoutTest', smalltalk.TestCase, ['view', 'elements'], 'ARoassal-Layout-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'as yet unclassified',
fn: function (){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROEdge(){return smalltalk.ROEdge||(typeof ROEdge=="undefined"?nil:ROEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@elements"]=_st($ROElement())._forCollection_((1)._to_((20)));
_st(self["@elements"])._do_((function(n){
return smalltalk.withContext(function($ctx2) {
$1=n;
_st($1)._extent_((50).__at((50)));
$2=_st($1)._addShape_(_st($ROBox())._new());
return $2;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}));
self["@view"]=_st($ROView())._new();
_st(self["@view"])._addAll_(self["@elements"]);
_st(_st(self["@elements"])._allButFirst())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self["@view"])._add_(_st($ROEdge())._lineFrom_to_(_st(self["@elements"])._first(),e));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROLayoutTest)})},
args: [],
source: "setUp\x0a\x0a\x09elements := ROElement forCollection: (1 to: 20).\x0a\x09elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].\x0a\x09view := ROView new.\x0a\x09view addAll: elements.\x0a\x09elements allButFirst do: [:e | \x0a\x09 \x09view add: (ROEdge lineFrom: elements first to: e) ]",
messageSends: ["forCollection:", "to:", "do:", "extent:", "@", "addShape:", "new", "addAll:", "add:", "lineFrom:to:", "first", "allButFirst"],
referencedClasses: ["ROElement", "ROBox", "ROView", "ROEdge"]
}),
smalltalk.ROLayoutTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLayout",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testLayout",{},smalltalk.ROLayoutTest)})},
args: [],
source: "testLayout",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROLayoutTest);



smalltalk.addClass('ROTreeLayoutTest', smalltalk.ROLayoutTest, [], 'ARoassal-Layout-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testLayout",
category: 'as yet unclassified',
fn: function (){
var self=this;
var result;
function $ROTreeLayout(){return smalltalk.ROTreeLayout||(typeof ROTreeLayout=="undefined"?nil:ROTreeLayout)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st($ROTreeLayout())._on_(self["@elements"]);
$1=_st($Array())._new_((20));
_st($1)._at_put_((1),(482).__at((5)));
_st($1)._at_put_((2),(5).__at((75)));
_st($1)._at_put_((3),(58).__at((75)));
_st($1)._at_put_((4),(111).__at((75)));
_st($1)._at_put_((5),(164).__at((75)));
_st($1)._at_put_((6),(217).__at((75)));
_st($1)._at_put_((7),(270).__at((75)));
_st($1)._at_put_((8),(323).__at((75)));
_st($1)._at_put_((9),(376).__at((75)));
_st($1)._at_put_((10),(429).__at((75)));
_st($1)._at_put_((11),(482).__at((75)));
_st($1)._at_put_((12),(535).__at((75)));
_st($1)._at_put_((13),(588).__at((75)));
_st($1)._at_put_((14),(641).__at((75)));
_st($1)._at_put_((15),(694).__at((75)));
_st($1)._at_put_((16),(747).__at((75)));
_st($1)._at_put_((17),(800).__at((75)));
_st($1)._at_put_((18),(853).__at((75)));
_st($1)._at_put_((19),(906).__at((75)));
_st($1)._at_put_((20),(959).__at((75)));
$2=_st($1)._yourself();
result=$2;
self._assert_(_st(result)._includesAll_(_st(self["@elements"])._collect_("positionAsInteger")));
return self}, function($ctx1) {$ctx1.fill(self,"testLayout",{result:result},smalltalk.ROTreeLayoutTest)})},
args: [],
source: "testLayout\x0a\x09| result |\x0a\x09ROTreeLayout on: elements.\x0a\x09\x0a\x09result := ((Array new: 20) at: 1 put: ((482@5)); at: 2 put: ((5@75)); at: 3 put: ((58@75)); at: 4 put: ((111@75)); at: 5 put: ((164@75)); at: 6 put: ((217@75)); at: 7 put: ((270@75)); at: 8 put: ((323@75)); at: 9 put: ((376@75)); at: 10 put: ((429@75)); at: 11 put: ((482@75)); at: 12 put: ((535@75)); at: 13 put: ((588@75)); at: 14 put: ((641@75)); at: 15 put: ((694@75)); at: 16 put: ((747@75)); at: 17 put: ((800@75)); at: 18 put: ((853@75)); at: 19 put: ((906@75)); at: 20 put: ((959@75)); yourself).\x0a\x09self assert:  (result includesAll: (elements collect: #positionAsInteger))",
messageSends: ["on:", "at:put:", "@", "new:", "yourself", "assert:", "includesAll:", "collect:"],
referencedClasses: ["ROTreeLayout", "Array"]
}),
smalltalk.ROTreeLayoutTest);



