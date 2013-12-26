smalltalk.addPackage('ARoassal-Interaction-Test');
smalltalk.addClass('ROPopupTest', smalltalk.ROTest, ['e', 'view'], 'ARoassal-Interaction-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'not yet classified',
fn: function (){
var self=this;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st($ROView())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.ROPopupTest)})},
args: [],
source: "setUp\x0a\x09view := ROView new",
messageSends: ["new"],
referencedClasses: ["ROView"]
}),
smalltalk.ROPopupTest);

smalltalk.addMethod(
smalltalk.method({
selector: "setUp1",
category: 'not yet classified',
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
args: [],
source: "setUp1\x0a\x0ae := ROElement forCollection: #('uno' 'dos' 'tres'). \x0ae do: [:el | el + ROBox @ ROPopup].\x0ae first color: Color red.\x0ae second translateTo: 30@0; color: Color green.\x0ae third translateTo: 60@0; color: Color blue.\x0aview := ROView new addAll:e.\x0aview open.",
messageSends: ["forCollection:", "do:", "@", "+", "color:", "red", "first", "translateTo:", "second", "green", "third", "blue", "addAll:", "new", "open"],
referencedClasses: ["ROElement", "ROPopup", "ROBox", "Color", "ROView"]
}),
smalltalk.ROPopupTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPopupIsNotAddedToView",
category: 'not yet classified',
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
args: [],
source: "testPopupIsNotAddedToView\x0a\x09|el |\x0a\x09el := ROBox element.\x0a\x09el @ ROPopup.\x0a\x09view add: el.\x0a\x09view open.\x0a\x09\x0a\x09\x22 Now ROPopup>>initializeElement was executed so the popupElement was added to view\x22\x0a\x09self assert: ROPopup popupIsAddedToView.\x0a\x09\x0a\x09view clear.\x0a\x09\x0a\x09\x22 After clearing the view the flag should be false\x22\x0a\x09self deny: ROPopup popupIsAddedToView.\x0a\x09\x0a\x0a\x09",
messageSends: ["element", "@", "add:", "open", "assert:", "popupIsAddedToView", "clear", "deny:"],
referencedClasses: ["ROBox", "ROPopup"]
}),
smalltalk.ROPopupTest);



