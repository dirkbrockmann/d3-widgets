import * as d3 from "d3";

var svg = {};

export default (id,w,h)=>{
	svg = d3.select(id).append("svg")
		.attr("width", w).attr("height", h);
	return svg
};
	
export {svg}