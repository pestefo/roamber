define("roamber/Graph-ET-Util-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('Graph-ET-Util-Tests');
smalltalk.packages["Graph-ET-Util-Tests"].transport = {"type":"amd","amdNamespace":"roamber"};

smalltalk.addClass('GETDistributionTest', smalltalk.TestCase, [], 'Graph-ET-Util-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testBasic",
category: 'as yet unclassified',
fn: function (){
var self=this;
var numbers,distribution,values;
function $GETDistribution(){return smalltalk.GETDistribution||(typeof GETDistribution=="undefined"?nil:GETDistribution)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$6,$8,$7,$5;
numbers=[(5), (2), (1), (8), (1), (2), (4), (8), (1), (9), (7), (3), (7)];
distribution=_st($GETDistribution())._on_(numbers);
values=_st(distribution)._frequencyMin_max_amountOfIntervals_((1),(9),(3));
$1=_st(_st(values)._size()).__eq((3));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$3=_st(values)._first();
$4=_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__lt((4));
$ctx2.sendIdx["<"]=1;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
$ctx1.sendIdx["select:"]=1;
$2=_st($3).__eq($4);
$ctx1.sendIdx["="]=2;
self._assert_($2);
$ctx1.sendIdx["assert:"]=2;
$6=_st(values)._second();
$7=_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
$8=_st(n).__gt_eq((4));
$ctx2.sendIdx[">="]=1;
return _st($8)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(n).__lt((6));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,2)})}));
$ctx1.sendIdx["select:"]=2;
$5=_st($6).__eq($7);
$ctx1.sendIdx["="]=3;
self._assert_($5);
$ctx1.sendIdx["assert:"]=3;
self._assert_(_st(_st(values)._third()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__gt_eq((6));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,4)})}))));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic",{numbers:numbers,distribution:distribution,values:values},smalltalk.GETDistributionTest)})},
args: [],
source: "testBasic\x0a\x0a\x09| numbers distribution values |\x0a\x09numbers := #(5 2 1 8 1 2 4 8 1 9 7 3 7).\x0a\x09distribution := GETDistribution on: numbers.\x0a\x09values := distribution frequencyMin: 1 max: 9 amountOfIntervals: 3.\x0a\x09\x0a\x09self assert: values size = 3.\x0a\x09self assert: values first = (numbers select: [ :n | n < 4 ]).\x0a\x09self assert: values second = (numbers select: [ :n | n >= 4 and: [ n < 6 ] ]).\x0a\x09self assert: values third = (numbers select: [ :n | n >= 6 ]).",
messageSends: ["on:", "frequencyMin:max:amountOfIntervals:", "assert:", "=", "size", "first", "select:", "<", "second", "and:", ">=", "third"],
referencedClasses: ["GETDistribution"]
}),
smalltalk.GETDistributionTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic2",
category: 'as yet unclassified',
fn: function (){
var self=this;
var numbers,distribution,values;
function $GETDistribution(){return smalltalk.GETDistribution||(typeof GETDistribution=="undefined"?nil:GETDistribution)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$6,$8,$7,$5;
numbers=[(5), (2), (1), (8), (1), (2), (4), (8), (1), (9), (7), (3), (7)];
distribution=_st($GETDistribution())._on_(numbers);
values=_st(distribution)._frequencyWithAmountOfIntervals_((3));
$1=_st(_st(values)._size()).__eq((3));
$ctx1.sendIdx["="]=1;
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
$3=_st(values)._first();
$4=_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__lt((4));
$ctx2.sendIdx["<"]=1;
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,1)})}));
$ctx1.sendIdx["select:"]=1;
$2=_st($3).__eq($4);
$ctx1.sendIdx["="]=2;
self._assert_($2);
$ctx1.sendIdx["assert:"]=2;
$6=_st(values)._second();
$7=_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
$8=_st(n).__gt_eq((4));
$ctx2.sendIdx[">="]=1;
return _st($8)._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(n).__lt((6));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,2)})}));
$ctx1.sendIdx["select:"]=2;
$5=_st($6).__eq($7);
$ctx1.sendIdx["="]=3;
self._assert_($5);
$ctx1.sendIdx["assert:"]=3;
self._assert_(_st(_st(values)._third()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__gt_eq((6));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1,4)})}))));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic2",{numbers:numbers,distribution:distribution,values:values},smalltalk.GETDistributionTest)})},
args: [],
source: "testBasic2\x0a\x0a\x09| numbers distribution values |\x0a\x09numbers := #(5 2 1 8 1 2 4 8 1 9 7 3 7).\x0a\x09distribution := GETDistribution on: numbers.\x0a\x09values := distribution frequencyWithAmountOfIntervals: 3.\x0a\x09\x0a\x09self assert: values size = 3.\x0a\x09self assert: values first = (numbers select: [ :n | n < 4 ]).\x0a\x09self assert: values second = (numbers select: [ :n | n >= 4 and: [ n < 6 ] ]).\x0a\x09self assert: values third = (numbers select: [ :n | n >= 6 ]).",
messageSends: ["on:", "frequencyWithAmountOfIntervals:", "assert:", "=", "size", "first", "select:", "<", "second", "and:", ">=", "third"],
referencedClasses: ["GETDistribution"]
}),
smalltalk.GETDistributionTest);


});
