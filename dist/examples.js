function example_grid_features(){
	
	const w = 600, h = 200;	
	
	const svg = d3.select("#example_grid_features").append("svg")
		.attr("width", w).attr("height", h);
	
	const grid = widgets.grid(w, h, 18, 6);
	const latt = grid.points();
	
	svg.selectAll(".grid").data(latt).enter().append("circle").attr("r",2).style("fill","black")
		.attr("transform",function(d){ return "translate("+d.x+","+d.y+")" });
	
	const button = widgets.button().actions(["play","pause"]).position(grid.position(2,3))
	const slider = widgets.slider().position(grid.position(8,2))
	
	const toggle_position = grid.position([10,12,14],4)	
	const toggles = ["a","b","c"].map((x,i)=>widgets.toggle().label(x).position(toggle_position[i]))
		 
	svg.selectAll(".button").data([button]).enter().append(widgets.widget)	
	svg.selectAll(".slider").data([slider]).enter().append(widgets.widget)	
	svg.selectAll(".toggle").data(toggles).enter().append(widgets.widget)	
		
}
function example_radio_features_2(){
	
	const w = 600, h = 100;	
	
	const svg = d3.select("#example_radio_features_2").append("svg")
		.attr("width", w).attr("height", h);
	
	const choices = ["topel","fruck","goint","mulk","semples"];
	
	const radio = widgets.radio()
		.choices(choices)
		.position({x:50,y:h/2})
		.shape("rect")
		.orientation("horizontal")
		.labelposition("top")
		.fontsize(20)
		.size(400)
		.buttonsize(60)
		.buttonpadding(0.7)
	
	svg.selectAll(".radio").data([radio]).enter().append(widgets.widget);
	
}
function example_radio_features_1(){
	
	const w = 400, h = 150;	
	
	const svg = d3.select("#example_radio_features_1").append("svg")
		.attr("width", w).attr("height", h);
	
	const choices = ["topel","fruck","goint","mulk"];
	
	const radio = widgets.radio().choices(choices).position({x:20,y:25})
	
	svg.selectAll(".radio").data([radio]).enter().append(widgets.widget);
	
}

function example_toggle_features_1(){
	const w = 600, h = 80;	
	const svg = d3.select("#example_toggle_features_1").append("svg")
		.attr("width", w).attr("height", h)
	
	labels = ["topel","fruck","goint","mulk"];
	labelpos = ["left","bottom","top","right"];
	
	const toggles = labels
		.map( (q,i) => widgets.toggle().label(q).labelposition(labelpos[i]))
	
	toggles.forEach((t,i)=>{ t.position({x:(i)* w / 4+80,y:h/2})
	})
	
	svg.selectAll(".toggle").data(toggles).enter().append(widgets.widget)
}
function example_slider_features_3(){

	const w = 400, h = 180;
	
	const svg = d3.select("#example_slider_features_3").append("svg")
		.attr("width", w).attr("height", h)
	
	const sliders = ["topel","fruck","goint"].map( q => widgets.slider().label(q))
	
	sliders.forEach((s,i)=>{
		s.position({x:50,y:(i+0.5)*60})
	})
	
	svg.selectAll(".slider")
		.data(sliders).enter().append(widgets.widget)
		
		
}
function example_slider_features_2(){

	const w = 400, h = 80;
	
	const svg = d3.select("#example_slider_features_2").append("svg")
		.attr("width", w).attr("height", h)
	
	const slider = widgets.slider()
		.label("snirksen")
		.girth(20)
		.knob(5)
		.size(300)
		.labelposition("bottom-left")
		.show(true)
		.fontsize(20);
	
	svg.selectAll(".slider")
		.data([slider]).enter().append(widgets.widget)
		.attr("transform",function(d,i){return "translate(50,"+h/2+")"});	
		
}
function example_slider_features_1(){

	const w = 400, h = 50;
	
	const svg = d3.select("#example_slider_features_1").append("svg")
		.attr("width", w).attr("height", h)
	
	const slider = widgets.slider()
	
	svg.selectAll(".slider")
		.data([slider]).enter().append(widgets.widget)
		.attr("transform",function(d,i){return "translate(50,"+h/2+")"});	
		
}
function example_button_features_2(){

			
	function showvalue(d){
		d3.select("#buttonvalue").text("Button 1: "+button1.value())	
	}

	function showaction(d){
		d3.select("#buttonaction").text("Button 2: "+button2.actions()[button2.value()])	
	}

	const w = 400, h = 150; buttonsize = 100;
	
	const svg = d3.select("#example_button_features_2").append("svg")
		.attr("width", w).attr("height", h)
	
	const button1 = widgets.button().actions(["play","pause"]).update(showvalue).size(buttonsize)

	const button2 = widgets.button().actions(["rewind","stop","reload"]).update(showaction).size(buttonsize)
	
	svg.selectAll(".button").data([button1, button2]).enter().append(widgets.widget)
		.attr("transform",function(d,i){return "translate("+((i+0.5) * w / 2)+","+h/2+")"});
	
	d3.select("#example_button_features_2")
		.append("p").attr("id","buttonvalue").text("Button 1: "+button1.value())	
	
	d3.select("#example_button_features_2")
		.append("p").attr("id","buttonaction").text("Button 2: "+button2.actions()[button2.value()])	
	
		
}
function example_button_actions(){

	const w = 800, h = 100;
	
	const svg = d3.select("#example_button_actions").append("svg")
		.attr("width", w).attr("height", h)
	
	const b = [
		widgets.button().actions(["play"]),
		widgets.button().actions(["stop"]),
		widgets.button().actions(["back"]),
		widgets.button().actions(["pause"]),
		widgets.button().actions(["reload"]),
		widgets.button().actions(["capture"]),
		widgets.button().actions(["rewind"]),		
		widgets.button().actions(["forward"])		
	]
	
	svg.selectAll(".button").data(b).enter().append(widgets.widget)
		.attr("transform",function(d,i){return "translate("+((i+0.5) * w / 8)+","+h/2+")"});
}
function example_button_features_1(){

	const w = 400, h = 150;
	
	const svg = d3.select("#example_button_features_1").append("svg")
		.attr("width", w).attr("height", h)
	
	const button1 = widgets.button().actions(["play","pause"])
		.size(100).label("wonk").labelposition("top")

	const button2 = widgets.button().actions(["rewind","stop","reload"])
			.size(60).label("donk").labelposition("right").shape("rect")
			.fontsize(30)
	
	svg.selectAll(".button").data([button1, button2]).enter().append(widgets.widget)
		.attr("transform",function(d,i){return "translate("+((i+0.5) * w / 2)+","+h/2+")"});
}


function intropanel(){

const w = 800;
const h = 600;


const svg = d3.select("#intro").append("svg")
	.attr("width", w).attr("height", h)


const grid = widgets.grid(w, h, 24, 24);
const latt = grid.points();

// button set 1

const set1_anchor = grid.position(2, 2);
const set1_actions = ["play", "stop", "back", "pause", "reload", "capture", "rewind", "forward"];
const set1_pos = grid.position(d3.range(0, 2 * set1_actions.length, 2), 0);

const set1_buttons = set1_actions.map(function(x, i) {
	return widgets.button().actions([x])
		.position(set1_pos[i]).label(set1_actions[i])
});

const set1 = svg.append("g")
	.attr("transform", "translate(" + set1_anchor.x + "," + set1_anchor.y + ")");

set1.selectAll(".button").data(set1_buttons).enter().append(widgets.widget);

// button set 2

const set2_anchor = grid.position(21, 3);
const set2_actions = [["play","pause"],["rewind","reload"],["stop"]];
const set2_pos = grid.position(0,[0,5,10]);

const set2_buttons = set2_actions.map(function(x, i) {
	return widgets.button().actions(x)
		.position(set2_pos[i])
		.label(set2_actions[i].join("/"))
		.size(80)
		.shape("rect")
		.labelposition("top")
});

set2_buttons[0].press(svg)

const set2 = svg.append("g")
 	.attr("transform", "translate(" + set2_anchor.x + "," + set2_anchor.y + ")");

set2.selectAll(".button").data(set2_buttons).enter().append(widgets.widget);

// slider set 1

const set3_anchor = grid.position(1,5);
const set3_pos = grid.position(0,[0,2,4]);
const set3_sliders=[1,2,3].map(x=>widgets.slider().labelposition("bottom-right").show(true)
	.label("slider "+x).position(set3_pos[x-1]).size(530))

const set3 = svg.append("g")
 	.attr("transform", "translate(" + set3_anchor.x + "," + set3_anchor.y + ")");

set3.selectAll(".slider").data(set3_sliders).enter().append(widgets.widget);

set3_sliders[0].update(()=>{console.log("hello")})
set3_sliders[0].update_end(()=>{console.log("wurst")})
set3_sliders[0].reset(svg,0.2,[0.1,0.3])

// slider set 2

const set4_anchor = grid.position(1,12);
const set4_pos = grid.position(0,[0,3,6,9]);
const ranges = [[-2,2],[0,15],[3,5],[100,200]];
const labels = ["wulk","snerk","grinty","swonk"];
const set4_sliders=[0,1,2,3].map(x=>widgets.slider().show(true).girth(20).knob(6)
	.label("slider "+x).position(set4_pos[x]).size(150).range(ranges[x]).label(labels[x]))

const set4 = svg.append("g")
  	.attr("transform", "translate(" + set4_anchor.x + "," + set4_anchor.y + ")");

set4.selectAll(".slider").data(set4_sliders).enter().append(widgets.widget);

// toggle set 1

const set5_anchor = grid.position(8,12);
const set5_pos = grid.position([0,5],[0,1.5,3]);
const set5_labels = ["zulk","spronk","throck","banana hemp","olive toe","huncle"]
const set5_toggles = [0,1,2,3,4,5].map(x=>widgets.toggle().position(set5_pos[x]).label(set5_labels[x]).labelposition("right"))
  
 
const set5 = svg.append("g")
  	.attr("transform", "translate(" + set5_anchor.x + "," + set5_anchor.y + ")");

set5.selectAll(".toggle").data(set5_toggles).enter().append(widgets.widget); 

set5_toggles[3].reset(svg,true)

// radiobox 1

const set6_pos = grid.position(8,17);
const set6_choices = ["glink","zinkle","ruts","dangle throb"]
const set6_radio = widgets.radio().choices(set6_choices)


const set6 = svg.append("g")
  	.attr("transform", "translate(" + set6_pos.x + "," + set6_pos.y + ")");

set6.selectAll(".radio").data([set6_radio]).enter().append(widgets.widget); 

set6_radio.reset(svg,1)

// radiobox 2

const set7_pos = grid.position(14,19);
const set7_choices = ["fetter","wurd","water finger"]
const set7_radio = widgets.radio().choices(set7_choices).shape("rect").fontsize(20).orientation("horizontal")
	.size(250).labelposition("bottom").buttonpadding(0.5).buttonsize(40)


const set7 = svg.append("g")
  	.attr("transform", "translate(" + set7_pos.x + "," + set7_pos.y + ")");

set7.selectAll(".radio").data([set7_radio]).enter().append(widgets.widget); 
}
