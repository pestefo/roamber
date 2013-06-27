smalltalk.addPackage('RoassalD3');
smalltalk.addClass('ROMondrianViewBuilder', smalltalk.Object, [], 'RoassalD3');
smalltalk.addMethod(
"_circles_",
smalltalk.method({
selector: "circles:",
fn: function (objects) {
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
return self}, function($ctx1) {$ctx1.fill(self,"circles:",{objects:objects},smalltalk.ROMondrianViewBuilder)});},
messageSends: []}),
smalltalk.ROMondrianViewBuilder);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
fn: function (objects) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
		var colors = "red blue yellow green black orange".split(" ");
		var svg = d3.select("#svgCanvas");
		var nodes = svg.selectAll("rect").data(objects);
		nodes.enter().append("rect")
			.attr("class","elements")
			.attr("height",10)
			.attr("width",10)
			.attr("fill",function(d){var i = d%colors.length; return colors[i]})
			.attr("x",function(d){return d*20}).attr("y",20);
	;
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{objects:objects},smalltalk.ROMondrianViewBuilder)});},
messageSends: []}),
smalltalk.ROMondrianViewBuilder);



smalltalk.addClass('ROSVGCanvas', smalltalk.Object, ['svgCanvas'], 'RoassalD3');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=_st("#svgCanvas")._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROSVGCanvas)});},
messageSends: ["initialize", "asJQuery"]}),
smalltalk.ROSVGCanvas);



