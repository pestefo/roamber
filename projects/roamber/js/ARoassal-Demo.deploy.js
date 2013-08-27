smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Widget, [], 'ARoassal-Demo');
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
selector: "initializeDropdown2",
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
messageSends: ["asJQuery", "appendToJQuery:", "do:", "ul", "li", "a", "href:", "onClick:", "show:", "new", "html:", "append:", "selectors"]}),
smalltalk.RODemo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var selectorList,ul,li,a;
function $RODemo(){return smalltalk.RODemo||(typeof RODemo=="undefined"?nil:RODemo)}
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
selectorList="#selectorList"._asJQuery();
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
return _st(selectorList)._append_(li);
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,selectorList:selectorList,ul:ul,li:li,a:a},smalltalk.RODemo)})},
messageSends: ["asJQuery", "do:", "li", "a", "href:", "onClick:", "show:", "new", "with:", "append:", "selectors"]}),
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
function $ROExample(){return smalltalk.ROExample||(typeof ROExample=="undefined"?nil:ROExample)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($ROExample())._new())._perform_(selector);
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas:",{selector:selector},smalltalk.RODemo)})},
messageSends: ["perform:", "new"]}),
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
selector: "init",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.RODemo.klass);

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


