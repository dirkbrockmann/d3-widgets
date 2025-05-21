import * as d3 from 'd3';
import * as widgets from '../src/main.js';



const w = 600, h = 80;

const svg = d3.select("#toggle-features-1").append("svg")
	.classed("d3-widgets",true)
    .attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const labels = ["topel","fruck","goint","mulk"];
const labelpos = ["left","bottom","top","right"];

const toggles = labels
	.map( (q,i) => widgets.toggle().label(q).labelposition(labelpos[i]))

toggles.forEach((t,i)=>{ t.position({x:(i)* w / 4+80,y:h/2})})

svg.selectAll(null).data(toggles).enter().append(widgets.widget)