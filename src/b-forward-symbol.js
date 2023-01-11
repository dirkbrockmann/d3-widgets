import {path} from "d3-path"

export default (scale=1) => {
	const p = path();
	const s = 0.7;
	p.moveTo(s*scale * (1+0.75), s*scale * 0);
	p.lineTo(s*scale * (-0.5+0.75), s*scale * (Math.sqrt(3) / 2));
	p.lineTo(s*scale * (-0.5+0.75), s*scale * ( - Math.sqrt(3) / 2));
	p.closePath();
	
	p.moveTo(s*scale * (1-0.75), s*scale * 0);
	p.lineTo(s*scale * (-0.5-0.75), s*scale * (Math.sqrt(3) / 2));
	p.lineTo(s*scale * (-0.5-0.75), s*scale * ( - Math.sqrt(3) / 2));
	p.closePath();

	return p.toString();
}	
