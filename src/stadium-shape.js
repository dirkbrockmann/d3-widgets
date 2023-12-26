import {path} from "d3-path"

const N = 20;

export default (l,w) => {
	const p = path();
	p.moveTo(0,w/2);
	p.arc(0,0,w/2,Math.PI/2,3*Math.PI/2,false);
	p.lineTo(l,-w/2)
	p.arc(l,0,w/2,3*Math.PI/2,2*Math.PI+Math.PI/2,false);
	p.closePath();
	
	return p.toString();
}	
