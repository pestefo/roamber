smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Object, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeDropdown",
category: 'not yet classified',
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
args: [],
source: "initializeDropdown\x0a\x09| htmlSelectorList |\x0a\x09htmlSelectorList := ''.\x0a\x09ROExample selectors do: [:selector |\x0a\x09\x09htmlSelectorList := htmlSelectorList,'<li><a href=\x22#\x22 onClick=\x22smalltalk.RODemo._show(''',selector,''')\x22>',selector,'</li>'.\x0a\x09].\x0a\x09('#selectorList' asJQuery) html: htmlSelectorList.",
messageSends: ["do:", ",", "selectors", "html:", "asJQuery"],
referencedClasses: ["ROExample"]
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'not yet classified',
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateTextArea_(selector);
self._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "show: selector\x0a\x09self updateTextArea: selector.\x0a\x09self updateCanvas: selector.",
messageSends: ["updateTextArea:", "updateCanvas:"],
referencedClasses: []
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas:",
category: 'not yet classified',
fn: function (selector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "updateCanvas: selector\x0a\x09\x22execute 'ROExample new selector' command\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTextArea:",
category: 'not yet classified',
fn: function (selector){
var self=this;
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st("#roassal-text"._asJQuery())._html_(_st(_st($ROExample()).__gt_gt(selector))._source());
return self}, function($ctx1) {$ctx1.fill(self,"updateTextArea:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "updateTextArea: selector\x0a\x09\x22put the code into #roassal-text textarea\x22\x0a\x09('#roassal-text' asJQuery) html: ((ROExample>>selector) source).",
messageSends: ["html:", "source", ">>", "asJQuery"],
referencedClasses: ["ROExample"]
}),
smalltalk.RODemo);


smalltalk.addMethod(
smalltalk.method({
selector: "show:",
category: 'not yet classified',
fn: function (selector){
var self=this;
var demo;
return smalltalk.withContext(function($ctx1) { 
demo=self._new();
_st(demo)._updateTextArea_(selector);
_st(demo)._updateCanvas_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"show:",{selector:selector,demo:demo},smalltalk.RODemo.klass)})},
args: ["selector"],
source: "show: selector\x0a\x09|demo|\x0a\x09demo := self new.\x0a\x09demo updateTextArea: selector.\x0a\x09demo updateCanvas: selector.",
messageSends: ["new", "updateTextArea:", "updateCanvas:"],
referencedClasses: []
}),
smalltalk.RODemo.klass);


