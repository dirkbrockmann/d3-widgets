import {select} from "d3";
import {randomId,textPosition} from "./utils.js"


export default (d,i) => {
	const id = "toggle_" + d.id();
	const size = d.size();
	const lb = d.label();
	const lbpos = d.labelposition();
	
		 	
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
 		
	const base = select(element).attr("class",d.css()).attr("id", id)
		.attr("transform","translate("+(d.x()-size)+","+d.y()+")")
	
	base.append("line")
		.attr("class", "toggle track")
		.attr("x1", 0).attr("x2", 2*size)
		.style("stroke-width", 2*size + 1)

	base.append("line")
		.attr("id","trackinset")
		.attr("class", d.value() ? "toggle track-inset-on" : "toggle track-inset")
		.attr("x1", 0).attr("x2", 2*size)
		.style("stroke-width", 2*size)

	base.append("circle")
		.attr("class", "toggle handle")
		.attr("r", size)
		.attr("cx", d.value() ? 2*size : 0);

	base.append("line")
	.attr("class", "toggle track-overlay")
	.attr("x1", 0).attr("x2", 2*size)
	.style("stroke-width", 2*size)
	.on("click",d.click)

	if (lb){
		const tp = textPosition(4*d.size(),2*d.size(),lbpos)
		base.append("text").text(lb)
					.attr("class", "label")
					.style("text-anchor",tp.anchor)
					.style("font-size",d.fontsize())
					.style("alignment-baseline",tp.valign)
					.attr("transform", "translate(" + (tp.x+size) + "," + (tp.y) + ")")
	
	}
			
 	return element;
}

