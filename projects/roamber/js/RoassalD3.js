smalltalk.addPackage('RoassalD3');
smalltalk.addClass('ROMondrianViewBuilder', smalltalk.Object, [], 'RoassalD3');
smalltalk.addMethod(
"_circles_",
smalltalk.method({
selector: "circles:",
category: 'not yet classified',
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
args: ["objects"],
source: "circles: objects\x0a\x0a\x22\x09els := ROElement forCollection: objects.\x22\x0a\x09<\x0a\x09\x09var colors = \x22red blue yellow green black orange\x22.split(\x22 \x22);\x0a\x09\x09var svg = d3.select(\x22#svgCanvas\x22);\x0a\x09\x09var circles = svg.selectAll(\x22circle\x22).data(objects);\x0a\x09\x09circles.enter().append(\x22circle\x22)\x0a\x09\x09\x09.attr(\x22r\x22,100)\x0a\x09\x09\x09.attr(\x22fill\x22,function(d){var i = d%colors.length; return colors[i]})\x0a\x09\x09\x09.attr(\x22cx\x22,function(d){return d*50}).attr(\x22cy\x22,function(d){return d*50});\x0a\x09\x09\x0a\x09\x09\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMondrianViewBuilder);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
category: 'not yet classified',
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
args: ["objects"],
source: "nodes: objects\x0a\x0a\x09<\x0a\x09\x09var colors = \x22red blue yellow green black orange\x22.split(\x22 \x22);\x0a\x09\x09var svg = d3.select(\x22#svgCanvas\x22);\x0a\x09\x09var nodes = svg.selectAll(\x22rect\x22).data(objects);\x0a\x09\x09nodes.enter().append(\x22rect\x22)\x0a\x09\x09\x09.attr(\x22class\x22,\x22elements\x22)\x0a\x09\x09\x09.attr(\x22height\x22,10)\x0a\x09\x09\x09.attr(\x22width\x22,10)\x0a\x09\x09\x09.attr(\x22fill\x22,function(d){var i = d%colors.length; return colors[i]})\x0a\x09\x09\x09.attr(\x22x\x22,function(d){return d*20}).attr(\x22y\x22,20);\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ROMondrianViewBuilder);



smalltalk.addClass('ROSVGCanvas', smalltalk.Object, ['svgCanvas'], 'RoassalD3');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@svgCanvas"]=_st("#svgCanvas")._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ROSVGCanvas)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09svgCanvas := '#svgCanvas' asJQuery.",
messageSends: ["initialize", "asJQuery"],
referencedClasses: []
}),
smalltalk.ROSVGCanvas);


