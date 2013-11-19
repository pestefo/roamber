smalltalk.addPackage('Graph-ET-Util-Tests');
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
numbers=[(5), (2), (1), (8), (1), (2), (4), (8), (1), (9), (7), (3), (7)];
distribution=_st($GETDistribution())._on_(numbers);
values=_st(distribution)._frequencyMin_max_amountOfIntervals_((1),(9),(3));
self._assert_(_st(_st(values)._size()).__eq((3)));
self._assert_(_st(_st(values)._first()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__lt((4));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}))));
self._assert_(_st(_st(values)._second()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(_st(n).__gt_eq((4)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(n).__lt((6));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}))));
self._assert_(_st(_st(values)._third()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__gt_eq((6));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}))));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic",{numbers:numbers,distribution:distribution,values:values},smalltalk.GETDistributionTest)})},
args: [],
source: "testBasic\x0a\x0a\x09| numbers distribution values |\x0a\x09numbers := #(5 2 1 8 1 2 4 8 1 9 7 3 7).\x0a\x09distribution := GETDistribution on: numbers.\x0a\x09values := distribution frequencyMin: 1 max: 9 amountOfIntervals: 3.\x0a\x09\x0a\x09self assert: values size = 3.\x0a\x09self assert: values first = (numbers select: [ :n | n < 4 ]).\x0a\x09self assert: values second = (numbers select: [ :n | n >= 4 and: [ n < 6 ] ]).\x0a\x09self assert: values third = (numbers select: [ :n | n >= 6 ]).",
messageSends: ["on:", "frequencyMin:max:amountOfIntervals:", "assert:", "=", "size", "select:", "<", "first", "and:", ">=", "second", "third"],
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
numbers=[(5), (2), (1), (8), (1), (2), (4), (8), (1), (9), (7), (3), (7)];
distribution=_st($GETDistribution())._on_(numbers);
values=_st(distribution)._frequencyWithAmountOfIntervals_((3));
self._assert_(_st(_st(values)._size()).__eq((3)));
self._assert_(_st(_st(values)._first()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__lt((4));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}))));
self._assert_(_st(_st(values)._second()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(_st(n).__gt_eq((4)))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(n).__lt((6));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}))));
self._assert_(_st(_st(values)._third()).__eq(_st(numbers)._select_((function(n){
return smalltalk.withContext(function($ctx2) {
return _st(n).__gt_eq((6));
}, function($ctx2) {$ctx2.fillBlock({n:n},$ctx1)})}))));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic2",{numbers:numbers,distribution:distribution,values:values},smalltalk.GETDistributionTest)})},
args: [],
source: "testBasic2\x0a\x0a\x09| numbers distribution values |\x0a\x09numbers := #(5 2 1 8 1 2 4 8 1 9 7 3 7).\x0a\x09distribution := GETDistribution on: numbers.\x0a\x09values := distribution frequencyWithAmountOfIntervals: 3.\x0a\x09\x0a\x09self assert: values size = 3.\x0a\x09self assert: values first = (numbers select: [ :n | n < 4 ]).\x0a\x09self assert: values second = (numbers select: [ :n | n >= 4 and: [ n < 6 ] ]).\x0a\x09self assert: values third = (numbers select: [ :n | n >= 6 ]).",
messageSends: ["on:", "frequencyWithAmountOfIntervals:", "assert:", "=", "size", "select:", "<", "first", "and:", ">=", "second", "third"],
referencedClasses: ["GETDistribution"]
}),
smalltalk.GETDistributionTest);



