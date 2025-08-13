import { selectSection } from "./menus.js";

function initialRoute(path) {
	if (path.startsWith("/deployer_website.html#")) {
		path = path.substring(path.indexOf("#")+1);
	}
	path = path.substring(1);  // the initial "/"
	if (path.length > 0) {
		path = path.replaceAll("/", "-");
		selectSection(path);
	}
}

export { initialRoute }