import {select} from "d3";
import {randomId} from "./utils.js"
import styles from './widgets.module.css'



export default () => {

	const type = "radio";

	var id = randomId(),
		size = 100,
		buttonsize = 20,
		buttonpadding = 0.3,
		shape = "round",
		orientation = "vertical",
		position = {x:0,y:0},
		labelposition = "right",
		fontsize = null,
		update = function(x) {},		
		choices = [],
		value = 0;
		
		const click = function(d,i) {
					value=i;
		 			select(this.parentNode).selectAll("."+styles.symbol)
						.classed(styles.selected,v => v==value)
					update();
					}
		
		const reset = function(svg,reset_value) {
					value = reset_value;
			 		svg.select("#radio_"+id).selectAll("."+styles.symbol)
						.classed(styles.selected,v => v==value)
					update();		
		}		
				
		return {
			type: type,
			id: function(arg) { if ("undefined" === typeof arg) { return id } else { id = arg; return this }},						
			size: function(arg) { if ("undefined" === typeof arg) { return size } else { size = arg; return this }},
			buttonsize: function(arg) { if ("undefined" === typeof arg) { return buttonsize } else { buttonsize = arg; return this }},
			buttonpadding: function(arg) { if ("undefined" === typeof arg) { return buttonpadding } else { buttonpadding = arg; return this }},
			orientation: function(arg) { if ("undefined" === typeof arg) { return orientation } else { orientation = arg; return this }},
			shape: function(arg) { if ("undefined" === typeof arg) { return shape } else { shape = arg; return this }},
			position: function(arg) { if ("undefined" === typeof arg) { return position } else { position = arg; return this }},
			x: function(arg) { if ("undefined" === typeof arg) { return position.x } else { position.x = arg; return this }},
			y: function(arg) { if ("undefined" === typeof arg) { return position.y } else { position.y = arg; return this }},
			labelposition: function(arg) { if ("undefined" === typeof arg) { return labelposition } else { labelposition = arg; return this }},
			fontsize: function(arg) { if ("undefined" === typeof arg) { return fontsize } else { fontsize = arg; return this }},
			update: function(arg) { if ("function" === typeof arg) {update = arg; return this} else { update(arg) }},
			choices: function(arg) { if ("undefined" === typeof arg) { return choices } else { choices = arg; return this }},
			value: function(arg) { if ("undefined" === typeof arg) { return value } else { value = arg; return this }},
			click:click,
			reset:reset
		}
};	

