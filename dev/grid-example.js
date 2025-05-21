import * as d3 from 'd3';
import * as widgets from '../src/main.js';

const w = 600, h = 200;	
	
const svg = d3.select("#grid-example").append("svg")
	.classed("d3-widgets",true)
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const grid = widgets.grid(w, h, 18, 6);
const latt = grid.points();
	
svg.selectAll(null).data(latt).enter().append("circle").attr("r",2).style("fill","black")
	.attr("transform",function(d){ return "translate("+d.x+","+d.y+")" });
	
const button = widgets.button().actions(["play","pause"]).position(grid.position(2,3))
const slider = widgets.slider().position(grid.position(8,2))
	
const toggle_position = grid.position([10,12,14],4)	
const toggles = ["a","b","c"].map((x,i)=>widgets.toggle().label(x).position(toggle_position[i]))
		 
svg.selectAll(null).data([button]).enter().append(widgets.widget)	
svg.selectAll(null).data([slider]).enter().append(widgets.widget)	
svg.selectAll(null).data(toggles).enter().append(widgets.widget)	