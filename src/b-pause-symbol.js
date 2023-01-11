import {path} from "d3-path"

export default (scale=1) => {
	const g = 1 / 3, c = 0.9;
	var p = path();
	p.moveTo(scale * c, scale * c);
	p.lineTo(scale * c, scale * (-c))
	p.lineTo(scale * (c * g), scale * ( - c))
	p.lineTo(scale * (c * g), scale * (  c))
	p.closePath();

	p.moveTo(- scale * c, scale * c);
	p.lineTo(- scale * c, scale * (-c))
	p.lineTo(- scale * (c * g), scale * ( - c))
	p.lineTo(- scale * (c * g), scale * (  c))
	p.closePath();

	return p.toString();
}	
