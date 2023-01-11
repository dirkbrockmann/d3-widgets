import {path} from "d3-path"

export default (scale=1) => {

	var p = path();
	var c = 0.9
	p.moveTo(scale * c, scale * c);
	p.lineTo(scale *(-c), scale * c)
	p.lineTo(scale * (-c), scale * ( - c))
	p.lineTo(scale * (c), scale * ( - c))
	p.closePath();

	return p.toString();
}	
