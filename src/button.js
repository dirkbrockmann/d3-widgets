import {select} from "d3";
import {randomId} from "./utils.js"
import symbol from "./button-symbols.js"


export default () => {

	const type = "button";
	
	var id = randomId(),
		css = "button",
		size = 50,
		symbolsize = 0.30,
		shape = "round",
		position = {x:0,y:0},
		label = null,
		labelposition = "bottom",
		fontsize = null,
		update = function(x) {},		
		actions = ["play"],
		value = 0;
		
		const click = function() {
				 		value = (value + 1) % actions.length ;
				 		update();
						select(this.parentNode).selectAll(".symbol")
							.attr("d",symbol( actions[ value ]) ( symbolsize*size ) )
					}
		const press = function(svg) {
						value = (value + 1) % actions.length ;
						update();
						svg.select("#button_"+id).select(".symbol")
						.attr("d",symbol( actions[ value ]) ( symbolsize*size ) )
		}
	
				
		return {
			type:type,
			id: function(arg) { if ("undefined" === typeof arg) { return id } else { id = arg; return this }},			
			css: function(arg) { if ("undefined" === typeof arg) { return css } else { css = arg; return this }},			
			size: function(arg) { if ("undefined" === typeof arg) { return size } else { size = arg; return this }},
			symbolsize: function(arg) { if ("undefined" === typeof arg) { return symbolsize } else { symbolsize = arg; return this }},
			shape: function(arg) { if ("undefined" === typeof arg) { return shape } else { shape = arg; return this }},
			position: function(arg) { if ("undefined" === typeof arg) { return position } else { position = arg; return this }},
			x: function(arg) { if ("undefined" === typeof arg) { return position.x } else { position.x = arg; return this }},
			y: function(arg) { if ("undefined" === typeof arg) { return position.y } else { position.y = arg; return this }},
			label: function(arg) { if ("undefined" === typeof arg) { return label } else { label = arg; return this }},
			labelposition: function(arg) { if ("undefined" === typeof arg) { return labelposition } else { labelposition = arg; return this }},
			fontsize: function(arg) { if ("undefined" === typeof arg) { return fontsize } else { fontsize = arg; return this }},
			update: function(arg) { if ("function" === typeof arg) {update = arg; return this} else { update(arg) }},
			actions: function(arg) { if ("undefined" === typeof arg) { return actions } else { actions = arg; return this }},
			value: function(arg) { if ("undefined" === typeof arg) { return value } else { value = arg; return this }},
			click:click,
			press:press
		}
};	

