import * as d3 from 'd3';
import * as widgets from '../src/main.js';

const w = 400, h = 50;

const svg = d3.select("#slider-features-1").append("svg")
    .classed("d3-widgets",true)
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const slider = widgets.slider()

svg.selectAll(null)
	.data([slider]).enter().append(widgets.widget)
	.attr("transform",function(d,i){return "translate("+0+","+h/2+")"});