import {select} from "d3";
import {randomId,textPosition} from "./utils.js"
import styles from './widgets.module.css'


export default (d,i) => {
	const id = "toggle_" + d.id();
	const size = d.size();
	const lb = d.label();
	const lbpos = d.labelposition();
	
		 	
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
 		
	const base = select(element).attr("class",styles.toggle).attr("id", id)
		.attr("transform","translate("+(d.x()-size)+","+d.y()+")")
	
	base.append("line")
		.attr("class", styles.track)
		.attr("x1", 0).attr("x2", 2*size)
		.style("stroke-width", 2*size + 1)

	base.append("line")
		.attr("id","trackinset")
		.attr("class", d.value() ? styles.track_inset_on : styles.track_inset)
		.attr("x1", 0).attr("x2", 2*size)
		.style("stroke-width", 2*size)

	base.append("circle")
		.attr("class", styles.handle)
		.attr("r", size)
		.attr("cx", d.value() ? 2*size : 0);

	base.append("line")
	.attr("class", styles.track_overlay)
	.attr("x1", 0).attr("x2", 2*size)
	.style("stroke-width", 2*size)
	.on("click",d.click)

	if (lb){
		const tp = textPosition(4*d.size(),2*d.size(),lbpos)
		base.append("text").text(lb)
					.attr("class", styles.label)
					.style("text-anchor",tp.anchor)
					.style("font-size",d.fontsize())
					.style("alignment-baseline",tp.valign)
					.attr("transform", "translate(" + (tp.x+size) + "," + (tp.y) + ")")
	
	}
			
 	return element;
}

