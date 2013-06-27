Smalltalk current createPackage: 'RoassalD3'!
Object subclass: #ROElement
	instanceVariableNames: ''
	package: 'RoassalD3'!

!ROElement methodsFor: 'not yet classified'!

initialize
	super initialize.
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

