import {format,scaleLinear,select,pointer,drag,max} from "d3";
import {randomId} from "./utils.js"
import styles from './widgets.module.css'
import track from './stadium-shape.js'


export default (d,i) => {
	const nf = format(".3f")	
	const id = "slider_" + d.id();
	const lbpos = d.labelposition();
	const range = d.range;
	const size = d.size();
	const label = d.label();
	const X = d.scale;
	
	var base;
		 	
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
		
	base = select(element).attr("class",styles.widget+" "+styles.slider).attr("id", id)
		.attr("transform","translate("+d.x()+","+d.y()+")")
	
	
	X.domain(range()).range([0, size]).clamp(true);
	
	// base.append("line")
// 		.attr("class",styles.track)
// 		.attr("x1", 0).attr("x2", size)
// 		.style("stroke-width", d.girth() + 1)
//
// 	base.append("line")
// 		.attr("class",styles.track_inset)
// 		.attr("x1", 0).attr("x2", size)
// 		.style("stroke-width", d.girth())
	
	const overlay_width = d.knob()>d.girth() ? d.knob() : d.girth()/2;
	
	base.append("path")
		.attr("d",track(d.size(),d.girth()))
		.attr("class",styles.track)
	
	base.append("circle")
		.attr("class", styles.handle)
		.attr("r", d.knob())
		.attr("cx", X(d.value()));

	base.append("rect")
		.attr("width",d.size()+2*overlay_width)
		.attr("height",2*overlay_width)
		.attr("transform","translate("+(-overlay_width)+","+(-overlay_width)+")")
		.attr("class", styles.track_overlay)
		.on("click",function(event) {
				const x = pointer(event,this)[0]
				d.value(X.invert(x));
				d.update();
				d.update_end();
				base.selectAll("."+styles.handle).attr("cx", X(d.value()))
				if(d.show()){
					base.select("."+styles.label).text(d.label()+" = "+nf(d.value()))
				}
			})
		.call(drag()
			.on("drag", function(event) {
				d.value(X.invert(event.x));
				d.update();
				base.selectAll("."+styles.handle).attr("cx", X(d.value()))
				if(d.show()){
					base.select("."+styles.label).text(d.label()+" = "+nf(d.value()))
				}
			})
			.on("end",function(event) {
				d.update_end();
			})
		 );
	
	
	var xpos,ypos,anchor,valign="bottom";

	if (d.fontsize) {			
	 	ypos = d.labelposition().match(/bottom/i)!=null ? (max([d.girth() / 2,d.knob()])) + d.fontsize() / 2: - (max([d.girth() / 2,d.knob()])) - d.fontsize() / 2;
	}{
		ypos = d.labelposition().match(/bottom/i)!=null ? (max([d.girth() / 2,d.knob()])) + 7: - (max([d.girth() / 2,d.knob()])) - 7;
	}
	
	 xpos = d.labelposition().match(/right/i)!=null ? d.size() : (d.labelposition().match(/center/i)!=null ? d.size() / 2 : 0);
	
	anchor = d.labelposition().match(/right/i)!=null ? "end" : (d.labelposition().match(/center/i)!=null ? "middle" : "start")
	
	valign = d.labelposition().match(/bottom/i)!=null ? "hanging" : "top"
				
	base.append("text").text(d.show() ? d.label()+" = "+nf(d.value()) : d.label())
		.attr("class", styles.label)
		.style("text-anchor",anchor)
		.style("alignment-baseline",valign)
		.style("font-size",d.fontsize())
		.style("opacity",1)
		.attr("transform", "translate(" + (xpos) + "," + (ypos) + ")")
	
	
	return element;
	
	
}

