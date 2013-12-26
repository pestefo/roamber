smalltalk.addPackage('ARoassal-Interaction-Test');
smalltalk.addClass('ROPopupTest', smalltalk.ROTest, ['e', 'view'], 'ARoassal-Interaction-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROPopupTest)})},
messageSends: ["new"]}),
smalltalk.ROPopupTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp1",
fn: function (){
var self=this;
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@e"]=_st($ROElement())._forCollection_(["uno", "dos", "tres"]);
_st(self["@e"])._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el).__plus($ROBox())).__at($ROPopup());
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st(_st(self["@e"])._first())._color_(_st($Color())._red());
$1=_st(self["@e"])._second();
_st($1)._translateTo_((30).__at((0)));
$2=_st($1)._color_(_st($Color())._green());
$3=_st(self["@e"])._third();
_st($3)._translateTo_((60).__at((0)));
$4=_st($3)._color_(_st($Color())._blue());
self["@view"]=_st(_st($ROView())._new())._addAll_(self["@e"]);
_st(self["@view"])._open();
return self}, function($ctx1) {$ctx1.fill(self,"setUp1",{},smalltalk.ROPopupTest)})},
messageSends: ["forCollection:", "do:", "@", "+", "color:", "red", "first", "translateTo:", "second", "green", "third", "blue", "addAll:", "new", "open"]}),
smalltalk.ROPopupTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPopupIsNotAddedToView",
fn: function (){
var self=this;
var el;
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
el=_st($ROBox())._element();
_st(el).__at($ROPopup());
_st(self["@view"])._add_(el);
_st(self["@view"])._open();
self._assert_(_st($ROPopup())._popupIsAddedToView());
_st(self["@view"])._clear();
self._deny_(_st($ROPopup())._popupIsAddedToView());
return self}, function($ctx1) {$ctx1.fill(self,"testPopupIsNotAddedToView",{el:el},smalltalk.ROPopupTest)})},
messageSends: ["element", "@", "add:", "open", "assert:", "popupIsAddedToView", "clear", "deny:"]}),
smalltalk.ROPopupTest);



