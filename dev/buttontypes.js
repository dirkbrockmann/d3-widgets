import * as d3 from 'd3';
import * as widgets from '../src/main.js';

const w = 800, h = 100;

const svg = d3.select("#button_types").append("svg").classed("d3-widgets",true)
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const b = [
		widgets.button().actions(["play"]),
		widgets.button().actions(["stop"]),
		widgets.button().actions(["back"]),
		widgets.button().actions(["pause"]),
		widgets.button().actions(["reload"]),
		widgets.button().actions(["capture"]),
		widgets.button().actions(["rewind"]),
		widgets.button().actions(["forward"]),
		widgets.button().actions(["push"])
]

svg.selectAll(null).data(b).enter().append(widgets.widget)
		.attr("transform",function(d,i){return "translate("+((i+0.5) * w / 9)+","+h/2+")"});