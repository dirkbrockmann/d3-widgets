import * as d3 from 'd3';
import * as widgets from '../src/main.js';

const showvalue = () => {
		d3.select("#buttonvalue").text("Button 1: "+button1.value())
}

const showaction = () => {
		d3.select("#buttonaction").text("Button 2: "+button2.actions()[button2.value()])
}

const w = 400, h = 150, buttonsize = 100;

const svg = d3.select("#button-features-2").append("svg")
	.classed("d3-widgets",true)
    .attr("width", w).attr("height", h)
   .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const button1 = widgets.button().actions(["play","pause"])
    .update(showvalue).size(buttonsize)

const button2 = widgets.button().actions(["rewind","stop","reload"])
    .update(showaction).size(buttonsize)

svg.selectAll(null).data([button1, button2]).enter().append(widgets.widget)
	.attr("transform",function(d,i){return "translate("+((i+0.5) * w / 2)+","+h/2+")"});

d3.select("#button-features-2")
	.append("p").attr("id","buttonvalue")
    .text("Button 1: "+button1.value())

d3.select("#button-features-2")
	.append("p").attr("id","buttonaction")
    .text("Button 2: "+button2.actions()[button2.value()])