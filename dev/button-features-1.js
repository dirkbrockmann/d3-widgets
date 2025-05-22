import { d3, widgets } from './globals.js'

    
const w = 400, h = 150;

const svg = d3.select("#button-features-1").append("svg")
    .classed("d3-widgets",true)
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const button1 = widgets.button().actions(["play","pause"])
	.size(100).label("wonk").labelposition("top")

const button2 = widgets.button().actions(["rewind","stop","reload"])
	.size(60).label("donk").labelposition("right").shape("rect")
	.fontsize(30)

svg.selectAll(null).data([button1, button2]).enter().append(widgets.widget)
	.attr("transform",function(d,i){return "translate("+((i+0.5) * w / 2)+","+h/2+")"});