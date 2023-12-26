import {select} from "d3";
import {randomId} from "./utils.js"
import styles from './widgets.module.css'



export default () => {

	const type = "toggle";
	
	var id = randomId(),
		size = 10,
		position = {x:0,y:0},
		label = null,
		labelposition = "top",
		fontsize = null,
		update = function(x) {},		
		value = 0;
		
		const click = function(){
			value = ! value;
			const tog = select(this.parentNode)
			tog.select("."+styles.handle).transition().attr("cx", value ? 2*size : 0)
			tog.classed(styles.selected,value)
			update();
		}
		
		const reset = function(svg,v){
			value = v;
			const tog = svg.select("#toggle_"+id)
			tog.selectAll("."+styles.handle).transition().attr("cx", value ? 2*size : 0)
			tog.classed(styles.selected,value )
		}
				
		return {
			type: type,
			id: function(arg) { if ("undefined" === typeof arg) { return id } else { id = arg; return this }},						
			size: function(arg) { if ("undefined" === typeof arg) { return size } else { size = arg; return this }},
			position: function(arg) { if ("undefined" === typeof arg) { return position } else { position = arg; return this }},
			x: function(arg) { if ("undefined" === typeof arg) { return position.x } else { position.x = arg; return this }},
			y: function(arg) { if ("undefined" === typeof arg) { return position.y } else { position.y = arg; return this }},
			label: function(arg) { if ("undefined" === typeof arg) { return label } else { label = arg; return this }},
			labelposition: function(arg) { if ("undefined" === typeof arg) { return labelposition } else { labelposition = arg; return this }},
			fontsize: function(arg) { if ("undefined" === typeof arg) { return fontsize } else { fontsize = arg; return this }},
			update: function(arg) { if ("function" === typeof arg) {update = arg; return this} else { update(arg) }},
			value: function(arg) { if ("undefined" === typeof arg) { return value } else { value = arg; return this }},
			click: click,
			reset:reset
		}
};	

