import play from "./b-play-symbol.js"
import forward from "./b-forward-symbol.js"
import back from "./b-back-symbol.js"
import pause from "./b-pause-symbol.js"
import reload from "./b-reload-symbol.js"
import capture from "./b-capture-symbol.js"
import rewind from "./b-rewind-symbol.js"
import stp from "./b-stop-symbol.js"

export default (type) => {
	switch (type) {
		case "play": return play;
		break;
		case "forward": return forward;
		break;
		case "back": return back;
		break;
		case "pause": return pause;
		break;
		case "reload": return reload;
		break;
		case "capture": return capture;
		break;	
		case "rewind": return rewind;
		break;
		case "stop": return stp;
		break;				
	}
}