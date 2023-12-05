import {path} from "d3-path"

export default (scale=1) => {

	const p = path();
	
	const theta0 = 0;
	const theta1 = 2*Math.PI;
	p.moveTo(scale * Math.cos (theta0), scale * Math.sin(theta0));
	p.arc(0,0,scale,theta0,theta1,true);
	p.closePath();


	return p.toString();
}	
