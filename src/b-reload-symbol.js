import {path} from "d3-path"

export default (scale=1) => {

	const p = path();
	
	const theta = Math.PI/2.5;
	const theta1 = theta / 2;
	const theta0 = 2*Math.PI - theta / 2;
	const width = 0.5;
	const arrow_width = 0.6;
	const arrow_height = 0.6;
	const w0 = [scale *(1 - width / 2) * Math.cos(theta0),scale * (1 - width / 2) * Math.sin(theta0)]
	const z = [scale * arrow_height * Math.cos(theta0+Math.PI / 2), scale * arrow_height * Math.sin(theta0+Math.PI / 2)] 



	p.moveTo(scale * Math.cos (theta0), scale * Math.sin(theta0));
	p.arc(0,0,scale,theta0,theta1,true);
	p.lineTo(scale *(1-width) * Math.cos (theta1), scale *(1-width) * Math.sin (theta1))
	p.arc(0,0,scale * (1-width),theta1,theta0,false);
	p.lineTo(scale * (1 - arrow_width - width / 2 ) * Math.cos(theta0), scale * (1 - arrow_width - width / 2  ) * Math.sin(theta0))

	p.lineTo(w0[0]+z[0], w0[1]+z[1])
	p.lineTo(scale * (1 + arrow_width - width / 2  ) * Math.cos(theta0), scale * (1 + arrow_width - width / 2 ) * Math.sin(theta0))


	p.closePath();


	return p.toString();
}	
