const randomId = () => {
	const size = 10;
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890';
	const charactersLength = characters.length;
  	let id = '';
  for (let i = 0; i < size; ++i) {
    id += characters[Math.floor(Math.random() * charactersLength)];
  }
  return id;
}

const textPosition = (width,height,position) => {

	var xpos,ypos,anchor,valign;

	switch (position) {
		case "top": 
			xpos = 0;
			ypos = -height/2-5;
			anchor = "middle";
			valign ="bottom";
			break;
		case "bottom":
			xpos = 0;
			ypos = height/2+5;
			anchor = "middle";
			valign = "hanging";
			break;
		case "left": 
			xpos =  - width / 2-5;
			ypos = 0;
			anchor = "end";
			valign ="middle";
			break;
		case "right": 
			xpos = width / 2 + 5;
			ypos = 0;
			anchor = "start";
			valign ="middle";
			break;
		default:
			xpos = 0;
			ypos = height/2+5;
			anchor = "middle";
			valign = "hanging";				
		}
		return {x:xpos,y:ypos,anchor:anchor,valign:valign}
}

export {randomId,textPosition}