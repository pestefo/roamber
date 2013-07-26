smalltalk.addPackage('ARoassal-Layout-Test');
smalltalk.addClass('ROLayoutTest', smalltalk.TestCase, ['view', 'elements'], 'ARoassal-Layout-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["forCollection:", "to:", "do:", "extent:", "@", "addShape:", "new", "addAll:", "add:", "lineFrom:to:", "first", "allButFirst"]}),
smalltalk.ROLayoutTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLayout",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testLayout",{},smalltalk.ROLayoutTest)})},
messageSends: []}),
smalltalk.ROLayoutTest);



smalltalk.addClass('ROTreeLayoutTest', smalltalk.ROLayoutTest, [], 'ARoassal-Layout-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "testLayout",
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
messageSends: ["on:", "at:put:", "@", "new:", "yourself", "assert:", "includesAll:", "collect:"]}),
smalltalk.ROTreeLayoutTest);



