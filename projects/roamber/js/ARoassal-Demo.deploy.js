smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Object, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeDropdown",
fn: function (){
var self=this;
var htmlSelectorList;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
htmlSelectorList="";
_st(_st($ROExample())._selectors())._do_((function(selector){
return smalltalk.withContext(function($ctx2) {
htmlSelectorList=_st(_st(_st(_st(_st(htmlSelectorList).__comma("<li><a href=\x22#\x22 onClick=\x22smalltalk.RODemo._show('")).__comma(selector)).__comma("')\x22>")).__comma(selector)).__comma("</li>");
return htmlSelectorList;
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1)})}));
_st("#selectorList"._asJQuery())._html_(htmlSelectorList);
return self}, function($ctx1) {$ctx1.fill(self,"initializeDropdown",{htmlSelectorList:htmlSelectorList},smalltalk.RODemo)})},
messageSends: ["do:", ",", "selectors", "html:", "asJQuery"]}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateTextArea_(selector);
self._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector},smalltalk.RODemo)})},
messageSends: ["updateTextArea:", "updateCanvas:"]}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas:",
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.RODemo)})},
messageSends: []}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTextArea:",
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st("#roassal-text"._asJQuery())._html_(_st(_st($ROExample()).__gt_gt(selector))._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateTextArea:",{selector:selector},smalltalk.RODemo)})},
messageSends: ["html:", "source", ">>", "asJQuery"]}),
smalltalk.RODemo);


smalltalk.addMethod(
smalltalk.method({
selector: "show:",
fn: function (selector){
var self=this;
var demo;
return smalltalk.withContext(function($ctx1) { 
demo=self._new();
_st(demo)._updateTextArea_(selector);
_st(demo)._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector,demo:demo},smalltalk.RODemo.klass)})},
messageSends: ["new", "updateTextArea:", "updateCanvas:"]}),
smalltalk.RODemo.klass);


