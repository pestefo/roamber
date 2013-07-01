Smalltalk current createPackage: 'RoassalD3'!
Object subclass: #ROElement
	instanceVariableNames: 'height width x y'
	package: 'RoassalD3'!

!ROElement methodsFor: 'not yet classified'!

drawOn: svg
<
	svg.append("svg:rect")
    .attr("id", "redCircle")
    .attr("cx", 100)
    .attr("cy", 140)
    .attr("r", 20)
    .attr("fill", "red")
>
!

initialize
	super initialize.
!

move
"activates draw and drop"
<
function move(){
    this.parentNode.appendChild(this);
    var dragTarget = d3.select(this);
    dragTarget
        .attr("x", function(){return d3.event.dx + parseInt(dragTarget.attr("cx"))})
        .attr("y", function(){return d3.event.dy + parseInt(dragTarget.attr("cy"))});
};
>
!

withDragAndDrop
< self.call(d3.behavior.drag().on("drag", self._move()));>
! !

Object subclass: #ROMondrianViewBuilder
	instanceVariableNames: ''
	package: 'RoassalD3'!

!ROMondrianViewBuilder methodsFor: 'not yet classified'!

circles: objects

"	els := ROElement forCollection: objects."
	<
		var colors = "red blue yellow green black orange".split(" ");
		var svg = d3.select("#svgCanvas");
		var circles = svg.selectAll("circle").data(objects);
		circles.enter().append("circle")
			.attr("r",100)
			.attr("fill",function(d){var i = d%colors.length; return colors[i]})
			.attr("cx",function(d){return d*50}).attr("cy",function(d){return d*50});
		
		
	>
!

nodes: objects

"	els := ROElement forCollection: objects."
	<
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
		
		
	>
! !

Object subclass: #ROSVGCanvas
	instanceVariableNames: 'svgCanvas'
	package: 'RoassalD3'!

!ROSVGCanvas methodsFor: 'not yet classified'!

initialize
	super initialize.
	svgCanvas := '#svgCanvas' asJQuery.
! !

