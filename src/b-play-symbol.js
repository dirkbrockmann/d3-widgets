import {path} from "d3-path"

export default (scale=1) => {
	const p = path();
	p.moveTo(scale * 1, scale * 0);
	p.lineTo(scale * (-0.5), scale * (Math.sqrt(3) / 2));
	p.lineTo(scale * (-0.5), scale * ( - Math.sqrt(3) / 2));
	p.closePath();
	return p.toString();
}	
