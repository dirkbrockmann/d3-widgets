import {range,scaleLinear,select} from "d3";
import {randomId,textPosition} from "./utils.js"

export default (d,i) => {
	
	const id = "radio_"+d.id();
	const lbpos = d.labelposition();
	const bs = d.buttonsize();
	const bis = d.buttonsize()*(1-d.buttonpadding());
	const N = d.choices().length;
	const n = range(N);
	const X = scaleLinear().domain([0,N-1]).range([0,d.size()]);
	const Y = scaleLinear().domain([0,N-1]).range([0,d.size()]);
	 	
	const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
 	
	const base = select(element)
		.attr("class",d.css()).attr("id", id)
		.attr("transform","translate("+d.x()+","+d.y()+")")
	
	const button = base.selectAll(".radiobutton").data(n).enter().append("g")
		.attr("class","radiobutton")
		.attr("id",d=> "b"+d)
		.attr("transform",x => d.orientation()=="vertical" ? "translate(0,"+Y(x)+")" : "translate("+X(x)+",0)")
	
	var back, front;

	if (d.shape()=="rect"){
	
		back = button.append("rect")
			.attr("width",bs)
			.attr("height",bs)
			.attr("rx",2).attr("ry",2)
			.attr("transform","translate("+(-bs/2)+","+(-bs/2)+")")
	
		front = button.append("rect")
			.attr("width",bis)
			.attr("height",bis)
			.attr("rx",2).attr("ry",2)
			.attr("transform","translate("+(-bis/2)+","+(-bis/2)+")")
			
	} else {
		
		back = button.append("circle").attr("r",bs/2)	
		front = button.append("circle").attr("r",bis/2)
	}

	back.attr("class","background").on("mouseover",function(){select(this).classed("lit",true)}).on("mouseout",function(){select(this).classed("lit",false)})	
	front.attr("class",v=>v==d.value() ? "led-on" : "led-off")
	button.on("click",d.click)
	
	
	const tp = textPosition(d.buttonsize(),d.buttonsize(),lbpos)
	
	button.append("text")
		.attr("class","label")
		.text(function(x,j){return d.choices()[j]})
		.attr("alignment-baseline",tp.valign)
		.attr("transform","translate("+(tp.x)+","+tp.y+")")
		.style("font-size",d.fontsize())
		.attr("text-anchor",tp.anchor)
	
 	return element;
}

