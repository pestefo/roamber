define("roamber/ARoassal-Layout-Test", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('ARoassal-Layout-Test');
smalltalk.packages["ARoassal-Layout-Test"].transport = {"type":"amd","amdNamespace":"roamber"};

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
var $2,$1;
self["@elements"]=_st($ROElement())._forCollection_((1)._to_((20)));
_st(self["@elements"])._do_((function(n){
return smalltalk.withContext(function($ctx2) {
_st(n)._extent_((50).__at((50)));
$2=_st($ROBox())._new();
$ctx2.sendIdx["new"]=1;
$1=_st(n)._addShape_($2);
return $1;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
self["@view"]=_st($ROView())._new();
_st(self["@view"])._addAll_(self["@elements"]);
_st(_st(self["@elements"])._allButFirst())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self["@view"])._add_(_st($ROEdge())._lineFrom_to_(_st(self["@elements"])._first(),e));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROLayoutTest)})},
args: [],
source: "setUp\x0a\x0a\x09elements := ROElement forCollection: (1 to: 20).\x0a\x09elements do: [ :n | n extent: 50@50; addShape: (ROBox new) ].\x0a\x09view := ROView new.\x0a\x09view addAll: elements.\x0a\x09elements allButFirst do: [:e | \x0a\x09 \x09view add: (ROEdge lineFrom: elements first to: e) ]",
messageSends: ["forCollection:", "to:", "do:", "extent:", "@", "addShape:", "new", "addAll:", "allButFirst", "add:", "lineFrom:to:", "first"],
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
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40;
_st($ROTreeLayout())._on_(self["@elements"]);
$1=_st($Array())._new_((20));
$2=$1;
$3=(482).__at((5));
$ctx1.sendIdx["@"]=1;
_st($2)._at_put_((1),$3);
$ctx1.sendIdx["at:put:"]=1;
$4=$1;
$5=(5).__at((75));
$ctx1.sendIdx["@"]=2;
_st($4)._at_put_((2),$5);
$ctx1.sendIdx["at:put:"]=2;
$6=$1;
$7=(58).__at((75));
$ctx1.sendIdx["@"]=3;
_st($6)._at_put_((3),$7);
$ctx1.sendIdx["at:put:"]=3;
$8=$1;
$9=(111).__at((75));
$ctx1.sendIdx["@"]=4;
_st($8)._at_put_((4),$9);
$ctx1.sendIdx["at:put:"]=4;
$10=$1;
$11=(164).__at((75));
$ctx1.sendIdx["@"]=5;
_st($10)._at_put_((5),$11);
$ctx1.sendIdx["at:put:"]=5;
$12=$1;
$13=(217).__at((75));
$ctx1.sendIdx["@"]=6;
_st($12)._at_put_((6),$13);
$ctx1.sendIdx["at:put:"]=6;
$14=$1;
$15=(270).__at((75));
$ctx1.sendIdx["@"]=7;
_st($14)._at_put_((7),$15);
$ctx1.sendIdx["at:put:"]=7;
$16=$1;
$17=(323).__at((75));
$ctx1.sendIdx["@"]=8;
_st($16)._at_put_((8),$17);
$ctx1.sendIdx["at:put:"]=8;
$18=$1;
$19=(376).__at((75));
$ctx1.sendIdx["@"]=9;
_st($18)._at_put_((9),$19);
$ctx1.sendIdx["at:put:"]=9;
$20=$1;
$21=(429).__at((75));
$ctx1.sendIdx["@"]=10;
_st($20)._at_put_((10),$21);
$ctx1.sendIdx["at:put:"]=10;
$22=$1;
$23=(482).__at((75));
$ctx1.sendIdx["@"]=11;
_st($22)._at_put_((11),$23);
$ctx1.sendIdx["at:put:"]=11;
$24=$1;
$25=(535).__at((75));
$ctx1.sendIdx["@"]=12;
_st($24)._at_put_((12),$25);
$ctx1.sendIdx["at:put:"]=12;
$26=$1;
$27=(588).__at((75));
$ctx1.sendIdx["@"]=13;
_st($26)._at_put_((13),$27);
$ctx1.sendIdx["at:put:"]=13;
$28=$1;
$29=(641).__at((75));
$ctx1.sendIdx["@"]=14;
_st($28)._at_put_((14),$29);
$ctx1.sendIdx["at:put:"]=14;
$30=$1;
$31=(694).__at((75));
$ctx1.sendIdx["@"]=15;
_st($30)._at_put_((15),$31);
$ctx1.sendIdx["at:put:"]=15;
$32=$1;
$33=(747).__at((75));
$ctx1.sendIdx["@"]=16;
_st($32)._at_put_((16),$33);
$ctx1.sendIdx["at:put:"]=16;
$34=$1;
$35=(800).__at((75));
$ctx1.sendIdx["@"]=17;
_st($34)._at_put_((17),$35);
$ctx1.sendIdx["at:put:"]=17;
$36=$1;
$37=(853).__at((75));
$ctx1.sendIdx["@"]=18;
_st($36)._at_put_((18),$37);
$ctx1.sendIdx["at:put:"]=18;
$38=$1;
$39=(906).__at((75));
$ctx1.sendIdx["@"]=19;
_st($38)._at_put_((19),$39);
$ctx1.sendIdx["at:put:"]=19;
_st($1)._at_put_((20),(959).__at((75)));
$40=_st($1)._yourself();
result=$40;
self._assert_(_st(result)._includesAll_(_st(self["@elements"])._collect_("positionAsInteger")));
return self}, function($ctx1) {$ctx1.fill(self,"testLayout",{result:result},smalltalk.ROTreeLayoutTest)})},
args: [],
source: "testLayout\x0a\x09| result |\x0a\x09ROTreeLayout on: elements.\x0a\x09\x0a\x09result := ((Array new: 20) at: 1 put: ((482@5)); at: 2 put: ((5@75)); at: 3 put: ((58@75)); at: 4 put: ((111@75)); at: 5 put: ((164@75)); at: 6 put: ((217@75)); at: 7 put: ((270@75)); at: 8 put: ((323@75)); at: 9 put: ((376@75)); at: 10 put: ((429@75)); at: 11 put: ((482@75)); at: 12 put: ((535@75)); at: 13 put: ((588@75)); at: 14 put: ((641@75)); at: 15 put: ((694@75)); at: 16 put: ((747@75)); at: 17 put: ((800@75)); at: 18 put: ((853@75)); at: 19 put: ((906@75)); at: 20 put: ((959@75)); yourself).\x0a\x09self assert:  (result includesAll: (elements collect: #positionAsInteger))",
messageSends: ["on:", "at:put:", "new:", "@", "yourself", "assert:", "includesAll:", "collect:"],
referencedClasses: ["ROTreeLayout", "Array"]
}),
smalltalk.ROTreeLayoutTest);


});
