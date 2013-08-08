smalltalk.addPackage('ARoassal-Interaction');
smalltalk.addClass('ROInteraction', smalltalk.ROObject, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction)})},
args: [],
source: "elementToBeAdded\x0a\x09^ self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction)})},
args: ["element"],
source: "initializeElement: element\x0a\x09self subclassResponsibility ",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ROInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._class();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction)})},
args: [],
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.ROInteraction);


smalltalk.addMethod(
smalltalk.method({
selector: "elementToBeAdded",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementToBeAdded",{},smalltalk.ROInteraction.klass)})},
args: [],
source: "elementToBeAdded\x0a\x09^ self new ",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._elementToBeAdded();
_st($2)._initializeElement_(element);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element},smalltalk.ROInteraction.klass)})},
args: ["element"],
source: "initializeElement: element\x0a\x09^ self elementToBeAdded initializeElement: element; yourself",
messageSends: ["initializeElement:", "elementToBeAdded", "yourself"],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.ROInteraction.klass)})},
args: [],
source: "key \x0a\x09\x22Used in the dictionary each element has\x22\x0a\x0a\x09^ self ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROInteraction.klass);


smalltalk.addClass('RODraggable', smalltalk.ROInteraction, [], 'ARoassal-Interaction');
smalltalk.addMethod(
smalltalk.method({
selector: "initializeElement:",
category: 'as yet unclassified',
fn: function (element){
var self=this;
var svgElement;
return smalltalk.withContext(function($ctx1) { 
svgElement=_st(_st(element)._shape())._svgElement();
_st(svgElement)._drag_onStart_onEnd_((function(dx,dy){
var bboxCurrent;
return smalltalk.withContext(function($ctx2) {
bboxCurrent=_st(svgElement)._getBBox();
bboxCurrent;
return _st(svgElement)._translate_y_(_st(_st(_st(_st(element)._position())._x()).__minus(_st(bboxCurrent)._x())).__plus(dx),_st(_st(_st(_st(element)._position())._y()).__minus(_st(bboxCurrent)._y())).__plus(dy));
}, function($ctx2) {$ctx2.fillBlock({dx:dx,dy:dy,bboxCurrent:bboxCurrent},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
var bboxAfterDrag;
return smalltalk.withContext(function($ctx2) {
bboxAfterDrag=_st(svgElement)._getBBox();
return bboxAfterDrag;
}, function($ctx2) {$ctx2.fillBlock({bboxAfterDrag:bboxAfterDrag},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeElement:",{element:element,svgElement:svgElement},smalltalk.RODraggable)})},
args: ["element"],
source: "initializeElement: element\x0a\x09| svgElement |\x0a\x09svgElement := element shape svgElement.\x0a\x09svgElement\x09\x0a\x09\x09drag: [ :dx :dy |\x0a\x09\x09\x09| bboxCurrent |\x0a\x09\x09\x09bboxCurrent := svgElement getBBox.\x0a\x09\x09\x09svgElement translate: ((element position x) - (bboxCurrent x) + dx) y: ((element position y) -(bboxCurrent y) + dy).\x0a\x0a\x09\x09]\x0a  \x09\x09onStart: [ \x22do nothing\x22]\x0a      \x09onEnd: [ \x0a\x09\x09\x09| bboxAfterDrag | \x0a\x09\x09\x09bboxAfterDrag := svgElement getBBox.\x0a\x09\x09\x09\x22update current position\x22\x0a\x09\x09\x09\x22element translateTo: (bboxAfterDrag x)@(bboxAfterDrag y).\x22\x0a\x09\x09].",
messageSends: ["svgElement", "shape", "drag:onStart:onEnd:", "getBBox", "translate:y:", "+", "-", "x", "position", "y"],
referencedClasses: []
}),
smalltalk.RODraggable);



