smalltalk.addPackage('ARoassal-Demo');
smalltalk.addClass('RODemo', smalltalk.Widget, [], 'ARoassal-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["ul", "class:", "do:", "li", "a", "href:", "onClick:", "show:", "new", "with:", "append:", "selectors"]}),
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
_st(self._new())._appendToJQuery_("#selectorList"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.RODemo.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.RODemo.klass);


