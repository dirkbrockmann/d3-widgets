import * as d3 from "d3";

import {flatten, map} from "lodash-es"

export default (w,h,Nx=12,Ny=12) => {

  	const X = d3.scaleLinear().domain([0,Nx]).range([0,w]);
	const Y = d3.scaleLinear().domain([0,Ny]).range([0,h]);
	
	const points = function(){
		return d3.range((Nx+1)*(Ny+1)).map(function(i){
			return { m:(i % (Nx+1)), n: Math.floor(i / (Nx+1)), x: X((i % (Nx+1))), y: Y(Math.floor(i / (Nx+1)))}
 		})		
	}

	const position = function(n,m){
		if (typeof(n)==="number") (n=[n]);
		if (typeof(m)==="number") (m=[m]);
		const pos = flatten(map(m,function(y){
			return map(n,
					function(x){
						return {x:X(x),y:Y(y)}
					})
			}))
		return pos.length==1 ? pos[0] : pos
	}
		
	return {
		points: points,
		position: position
	}		
	
};	

