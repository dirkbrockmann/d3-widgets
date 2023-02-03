import * as d3 from "d3";
import {randomId} from "./utils.js"


export default (d,i) => {
	const nf = d3.format(".3f")	
	const id = "slider_" + d.id();
	const lbpos = d.labelposition();
	const range = d.range();
	const size = d.size();
	const label = d.label();
		 	
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
 	
	const X = d3.scaleLinear().domain(range).range([0, size]).clamp(true);
	
	const base = d3.select(element).attr("class",d.css()).attr("id", id)
		.attr("transform","translate("+d.x()+","+d.y()+")")
	
	base.append("line")
		.attr("class", "slider track")
		.attr("x1", 0).attr("x2", size)
		.style("stroke-width", d.girth() + 1)

	base.append("line")
		.attr("class", "slider track-inset")
		.attr("x1", 0).attr("x2", size)
		.style("stroke-width", d.girth())
	
	base.append("circle")
		.attr("class", "slider handle")
		.attr("r", d.knob())
		.attr("cx", X(d.value()));

	base.append("line")
		.attr("class", "slider track-overlay")
		.attr("x1", 0).attr("x2", size)
		.style("stroke-width", 2*d.knob())
		.call(d3.drag()
			.on("start drag", function(event) {
				const x = d3.pointer(event,this)[0]
				d.value(X.invert(x));
				d.update();
				base.selectAll(".handle").attr("cx", X(d.value()))
				if(d.show()){
					base.select(".label").text(d.label()+" = "+nf(d.value()))
				}
			})
			.on("end",function(event) {
				d.update_end();
			})
		);
	
	
	var xpos,ypos,anchor,valign="bottom";
		
	ypos = d.labelposition().match(/bottom/i)!=null ? (d3.max([d.girth() / 2,d.knob()])) + 5 : - (d3.max([d.girth() / 2,d.knob()])) - 5;
	
	xpos = d.labelposition().match(/right/i)!=null ? d.size() : (d.labelposition().match(/center/i)!=null ? d.size() / 2 : 0);
	
	anchor = d.labelposition().match(/right/i)!=null ? "end" : (d.labelposition().match(/center/i)!=null ? "middle" : "start")
	
	valign = d.labelposition().match(/bottom/i)!=null ? "hanging" : "top"
				
	base.append("text").text(d.show() ? d.label()+" = "+nf(d.value()) : d.label())
		.attr("class", "label")
		.style("text-anchor",anchor)
		.style("alignment-baseline",valign)
		.style("font-size",d.fontsize())
		.style("opacity",1)
		.attr("transform", "translate(" + (xpos) + "," + (ypos) + ")")
		
 	return element;
}

