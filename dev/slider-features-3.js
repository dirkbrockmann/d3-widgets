import * as d3 from 'd3';
import * as widgets from '../src/main.js';


const w = 400, h = 180;

const svg = d3.select("#slider-features-3").append("svg")
	.classed("d3-widgets",true)
    .attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const sliders = ["topel","fruck","goint"].map( q => widgets.slider().label(q))

sliders.forEach((s,i)=>{
	s.position({x:0,y:(i+0.5)*60+10})
})

svg.selectAll(null)
	.data(sliders).enter().append(widgets.widget)