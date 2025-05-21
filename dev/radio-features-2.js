import * as d3 from 'd3';
import * as widgets from '../src/main.js';

const w = 600, h = 120;

const svg = d3.select("#radio-features-2").append("svg")
	.classed("d3-widgets",true)
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const choices = ["topel","fruck","goint","mulk","semples"];

const radio = widgets.radio()
	.choices(choices)
	.position({x:50,y:h/2})
	.shape("rect")
	.orientation("horizontal")
	.labelposition("top")
	.fontsize(20)
	.size(400)
	.buttonsize(60)
	.buttonpadding(0.7)

svg.selectAll(null).data([radio]).enter().append(widgets.widget);