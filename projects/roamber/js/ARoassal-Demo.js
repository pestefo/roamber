smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Widget, [], 'ARoassal-Demo');
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
selector: "initializeDropdown2",
category: 'not yet classified',
fn: function (){
var self=this;
var selectorListDiv,ul,li,a;
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
selectorListDiv="#selectorListDiv"._asJQuery();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st($ROExample())._selectors())._do_((function(selector){
return smalltalk.withContext(function($ctx3) {
ul=_st(html)._ul();
ul;
li=_st(html)._li();
li;
a=_st(html)._a();
a;
_st(a)._href_("#");
_st(a)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st($RODemo())._new())._show_(selector);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
_st(a)._html_(selector);
_st(li)._append_(a);
return _st(ul)._append_(li);
}, function($ctx3) {$ctx3.fillBlock({selector:selector},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(selectorListDiv);
return self}, function($ctx1) {$ctx1.fill(self,"initializeDropdown2",{selectorListDiv:selectorListDiv,ul:ul,li:li,a:a},smalltalk.RODemo)})},
args: [],
source: "initializeDropdown2\x0a| selectorListDiv ul li a |\x0a\x09selectorListDiv := '#selectorListDiv' asJQuery.\x0a\x0a\x09[:html | \x0a\x09\x09\x09ROExample selectors do: [:selector |\x0a\x09\x09\x09\x09ul := html ul.\x0a\x09\x09\x09\x09li := html li.\x0a\x09\x09\x09\x09a := html a.\x0a\x09\x09\x09\x09a href: '#'.\x0a\x09\x09\x09\x09a onClick: [RODemo new show: selector].\x0a\x09\x09\x09\x09a html: selector.\x0a\x09\x09\x09\x09li append: a.\x0a\x09\x09\x09\x09ul append: li.\x0a\x09\x09\x09].\x0a\x09\x09] appendToJQuery: selectorListDiv.",
messageSends: ["asJQuery", "appendToJQuery:", "do:", "ul", "li", "a", "href:", "onClick:", "show:", "new", "html:", "append:", "selectors"],
referencedClasses: ["RODemo", "ROExample"]
}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
var selectorList,ul,li,a;
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
ul=_st(html)._ul();
_st(ul)._class_("dropdown-menu");
_st(_st($ROExample())._selectors())._do_((function(selector){
return smalltalk.withContext(function($ctx2) {
li=_st(html)._li();
li;
a=_st(html)._a();
a;
_st(a)._href_("#");
_st(a)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($RODemo())._new())._show_(selector);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(a)._with_(selector);
_st(li)._append_(a);
return _st(ul)._append_(li);
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,selectorList:selectorList,ul:ul,li:li,a:a},smalltalk.RODemo)})},
args: ["html"],
source: "renderOn: html\x0a\x09| selectorList ul li a |\x0a\x09ul := html ul.\x0a\x09ul class: 'dropdown-menu'.\x0a\x09\x0a\x09ROExample selectors do: [:selector |\x0a\x0a\x09\x09li := html li.\x0a\x09\x09a := html a.\x0a\x09\x09a href: '#'.\x0a\x09\x09a onClick: [RODemo new show: selector].\x0a\x09\x09a with: selector.\x0a\x09\x09li append: a.\x0a\x09\x09ul append: li.\x0a\x09].\x0a\x0a\x09",
messageSends: ["ul", "class:", "do:", "li", "a", "href:", "onClick:", "show:", "new", "with:", "append:", "selectors"],
referencedClasses: ["RODemo", "ROExample"]
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
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROExample())._new())._perform_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.RODemo)})},
args: ["selector"],
source: "updateCanvas: selector\x0a\x09\x22execute 'ROExample new selector' command\x22\x0a\x09ROExample new perform:selector.",
messageSends: ["perform:", "new"],
referencedClasses: ["ROExample"]
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
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("#selectorList"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo.klass)})},
args: [],
source: "init\x0a\x09self new appendToJQuery: '#selectorList' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.RODemo.klass);

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


