import {select} from "d3";
import {randomId,textPosition} from "./utils.js"
import styles from './widgets.module.css'
import track from './stadium-shape.js'

export default (d,i) => {
	const id = "toggle_" + d.id();
	const size = d.size();
	const lb = d.label();
	const lbpos = d.labelposition();
	
		 	
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
 		
	const base = select(element).attr("class",styles.widget+" "+styles.toggle).attr("id", id)
		.attr("transform","translate("+(d.x()-size)+","+d.y()+")")
		.classed(styles.selected,d.value()==1)
	
	const back = base.append("path")
		.attr("d",track(2*d.size(),2*d.size()))
		.attr("class",styles.track)


	base.append("circle")
		.attr("class", styles.handle)
		.attr("r", size)
		.attr("cx", d.value() ? 2*size : 0);

	base.append("rect")
		.attr("width",4*d.size())
		.attr("height",2*d.size())
		.attr("class", styles.track_overlay)
		.attr("transform","translate("+(-d.size())+","+(-d.size())+")")
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

