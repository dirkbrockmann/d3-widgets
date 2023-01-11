import {path} from "d3-path"

export default (scale=1) => {

    const p = d3.path();
    const theta0 = Math.PI/10;
    const sign = +1;
    const inner_radius = scale / 2;
    const angle1 = Math.PI - theta0;
    const angle2 = theta0;
    const angle3 = -theta0;
    const angle4 = Math.PI + theta0;

    p.arc(0,0,inner_radius, angle4, angle3);                            
    p.lineTo(scale, inner_radius*Math.sin(angle4));
    p.lineTo(scale, -scale);
    p.lineTo(-scale, -scale);
    p.lineTo(-scale, inner_radius*Math.sin(angle4));

    p.closePath();

    p.arc(0,0,inner_radius, angle2, angle1);
    p.lineTo(-scale, inner_radius*Math.sin(angle1));
    p.lineTo(-scale, scale);
    p.lineTo(scale, scale);
    p.lineTo(scale, inner_radius*Math.sin(angle1));

    p.closePath();

    return p.toString();
}	
