smalltalk.addPackage('RoassalD3');
smalltalk.addClass('ROElement', smalltalk.Object, ['height', 'width', 'x', 'y'], 'RoassalD3');
smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
fn: function (svg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
	svg.append("svg:rect")
    .attr("id", "redCircle")
    .attr("cx", 100)
    .attr("cy", 140)
    .attr("r", 20)
    .attr("fill", "red")
;
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svg:svg},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROElement)})},
messageSends: ["initialize"]}),
smalltalk.ROElement);

smalltalk.addMethod(
"_move",
smalltalk.method({
selector: "move",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
function move(){
    this.parentNode.appendChild(this);
    var dragTarget = d3.select(this);
    dragTarget
        .attr("x", function(){return d3.event.dx + parseInt(dragTarget.attr("cx"))})
        .attr("y", function(){return d3.event.dy + parseInt(dragTarget.attr("cy"))});
};
;
return self}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);

smalltalk.addMethod(
"_withDragAndDrop",
smalltalk.method({
selector: "withDragAndDrop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {  self.call(d3.behavior.drag().on("drag", self._move()));;
return self}, function($ctx1) {$ctx1.fill(self,"withDragAndDrop",{},smalltalk.ROElement)})},
messageSends: []}),
smalltalk.ROElement);



smalltalk.addClass('ROMondrianViewBuilder', smalltalk.Object, [], 'RoassalD3');
smalltalk.addMethod(
"_circles_",
smalltalk.method({
selector: "circles:",
fn: function (objects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var colors = "red blue yellow green black orange".split(" ");
		var svg = d3.select("#svgCanvas");
		var circles = svg.selectAll("circle").data(objects);
		circles.enter().append("circle")
			.attr("r",100)
			.attr("fill",function(d){var i = d%colors.length; return colors[i]})
			.attr("cx",function(d){return d*50}).attr("cy",function(d){return d*50});
		
		
	;
return self}, function($ctx1) {$ctx1.fill(self,"circles:",{objects:objects},smalltalk.ROMondrianViewBuilder)})},
messageSends: []}),
smalltalk.ROMondrianViewBuilder);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
fn: function (objects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var colors = "red blue yellow green black orange".split(" ");
		var svg = d3.select("#svgCanvas");
		var svg = d3.select(".elements").exit().remove();
		var nodes = svg.selectAll("rect").data(objects);
		nodes.enter().append("rect")
			.attr("class","elements")
			.attr("height",10)
			.attr("width",10)
			.attr("fill",function(d){var i = d%colors.length; return colors[i]})
			.attr("x",function(d){return d*20}).attr("y",20);
		
		
	;
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{objects:objects},smalltalk.ROMondrianViewBuilder)})},
messageSends: []}),
smalltalk.ROMondrianViewBuilder);



smalltalk.addClass('ROSVGCanvas', smalltalk.Object, ['svgCanvas'], 'RoassalD3');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=_st("#svgCanvas")._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROSVGCanvas)})},
messageSends: ["initialize", "asJQuery"]}),
smalltalk.ROSVGCanvas);



