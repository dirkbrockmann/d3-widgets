import { d3, widgets } from './globals.js'

const w = 400, h = 150;

const svg = d3.select("#radio-features-1").append("svg")
	.classed("d3-widgets",true)
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const choices = ["topel","fruck","goint","mulk"];

const radio = widgets.radio().choices(choices).position({x:20,y:25})

svg.selectAll(null).data([radio]).enter().append(widgets.widget);