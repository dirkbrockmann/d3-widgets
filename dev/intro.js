import * as d3 from 'd3';
import * as widgets from '../src/main.js';

const w = 800;
const h = 600;

const svg = d3.select("#intro-container").append("svg")
	.attr("width", w).attr("height", h)
    .attr("viewBox","0 0 "+w+" "+h)	
    .style("width", "100%")

const grid = widgets.grid(w, h, 24, 24);
const latt = grid.points();

// button set 1

const set1_anchor = grid.position(2, 2);
const set1_actions = ["play", "stop", "back", "pause", "reload", "capture", "rewind", "forward","push"];
const set1_pos = grid.position(d3.range(-1, 2 * set1_actions.length, 2), 0);

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
const set5_toggles = [0,1,2,3,4,5].map(x=>widgets.toggle().position(set5_pos[x]).label(set5_labels[x]).labelposition("right").fontsize(20))


const set5 = svg.append("g")
  	.attr("transform", "translate(" + set5_anchor.x + "," + set5_anchor.y + ")");

set5.selectAll(".toggle").data(set5_toggles).enter().append(widgets.widget)

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
