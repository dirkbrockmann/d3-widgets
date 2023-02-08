import buttonElement from "./buttonElement.js"
import sliderElement from "./sliderElement.js"
import toggleElement from "./toggleElement.js"
import radioElement from "./radioElement.js"

export default (d,i) => {
	switch (d.type) {
		case "button": return buttonElement(d,i);
		break;
		case "slider": return sliderElement(d,i);
		break;
		case "radio": return radioElement(d,i);
		break;
		case "toggle": return toggleElement(d,i);
		break;
	}	
}