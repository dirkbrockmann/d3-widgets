import { d3, widgets } from './globals.js'

const w = 400, h = 80;

const svg = d3.select("#slider-features-2").append("svg")
	.classed("d3-widgets",true)
    .attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const slider = widgets.slider()
	.label("snirksen")
	.girth(20)
	.knob(5)
	.size(300)
	.labelposition("bottom-left")
	.show(true)
	.fontsize(20);

svg.selectAll(null)
	.data([slider]).enter().append(widgets.widget)
	.attr("transform",function(d,i){return "translate(50,"+h/2+")"});
