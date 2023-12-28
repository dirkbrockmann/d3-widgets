import {format,scaleLinear} from "d3";
import {randomId} from "./utils.js"
import styles from './widgets.module.css'

export default () => {
	
	const type = "slider";
	const nf = format(".3f");
	
	var id = randomId(),
		size = 100,
		girth = 8,
		knob = 10,
		show = false,		
		position = {x:0,y:0},
		labelposition = "top-left",
		fontsize = null,
		update = function(x) {},
		update_end = function(x) {},
		range = [0,1],
		value = 0,
		label = null,
		scale = scaleLinear().domain(range).range([0, size]).clamp(true);
		
		const reset = function(svg,x,r=range) {
				const sl = svg.select("#slider_"+id);
				scale.domain(r);
		 		value = x;
				sl.selectAll("."+styles.handle).transition().attr("cx", scale(x))
				if(show){
					sl.select("."+styles.label).text(label+" = "+nf(value))
				}
		 		update();
				update_end();
			}
	
		return {
			type: type,
			scale: scale,
			id: function(arg) { if ("undefined" === typeof arg) { return id } else { id = arg; return this }},
			label: function(arg) { if ("undefined" === typeof arg) { return label } else { label = arg; return this }},					
			size: function(arg) { if ("undefined" === typeof arg) { return size } else { size = arg; return this }},
			girth: function(arg) { if ("undefined" === typeof arg) { return girth } else { girth = arg; return this }},
			knob: function(arg) { if ("undefined" === typeof arg) { return knob } else { knob = arg; return this }},
			show: function(arg) { if ("undefined" === typeof arg) { return show } else { show = arg; return this }},
			position: function(arg) { if ("undefined" === typeof arg) { return position } else { position = arg; return this }},
			x: function(arg) { if ("undefined" === typeof arg) { return position.x } else { position.x = arg; return this }},
			y: function(arg) { if ("undefined" === typeof arg) { return position.y } else { position.y = arg; return this }},
			labelposition: function(arg) { if ("undefined" === typeof arg) { return labelposition } else { labelposition = arg; return this }},
			fontsize: function(arg) { if ("undefined" === typeof arg) { return fontsize } else { fontsize = arg; return this }},
			update: function(arg) { if ("function" === typeof arg) {update = arg; return this} else { update(arg) }},
			update_end: function(arg) { if ("function" === typeof arg) {update_end = arg; return this} else { update_end(arg) }},
			range: function(arg) { if ("undefined" === typeof arg) { return range } else { range = arg; return this }},
			value: function(arg) { if ("undefined" === typeof arg) { return value } else { value = arg; return this }},
			reset:reset,
			click:reset
		}
};	

