import * as d3 from "d3";
import {randomId} from "./utils.js"

export default () => {

	var id = randomId(),
		css = "toggle",
		size = 10,
		position = {x:0,y:0},
		label = null,
		labelposition = "top",
		fontsize = "",
		update = function(x) {},		
		value = 0;
		
		var click = function(){
			value = ! value;
			const tog = d3.select("#toggle_"+id)
			tog.selectAll(".handle").transition()
				.attr("cx", value ? 2*size : 0)
			tog.selectAll("#trackinset")
				.attr("class",value ?  "toggle track-inset-on" : "track-inset")
			update();
		}
				
		return {
			id: function(arg) { if ("undefined" === typeof arg) { return id } else { id = arg; return this }},			
			css: function(arg) { if ("undefined" === typeof arg) { return css } else { css = arg; return this }},			
			size: function(arg) { if ("undefined" === typeof arg) { return size } else { size = arg; return this }},
			position: function(arg) { if ("undefined" === typeof arg) { return position } else { position = arg; return this }},
			x: function(arg) { if ("undefined" === typeof arg) { return position.x } else { position.x = arg; return this }},
			y: function(arg) { if ("undefined" === typeof arg) { return position.y } else { position.y = arg; return this }},
			label: function(arg) { if ("undefined" === typeof arg) { return label } else { label = arg; return this }},
			labelposition: function(arg) { if ("undefined" === typeof arg) { return labelposition } else { labelposition = arg; return this }},
			fontsize: function(arg) { if ("undefined" === typeof arg) { return fontsize } else { fontsize = arg; return this }},
			update: function(arg) { if ("function" === typeof arg) {update = arg; return this} else { update(arg) }},
			value: function(arg) { if ("undefined" === typeof arg) { return value } else { value = arg; return this }},
			click:click
		}
};	

