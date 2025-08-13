import { selectSection } from "./menus.js";

function initialRoute(path) {
	if (path.startsWith("/deployer_website.html")) {
		path = path.replace("/deployer_website.html", "")
		window.haveInitialRoute = "/deployer_website.html#";
	}
	while (path.startsWith("#") || path.startsWith("/")) {
		path = path.substring(1);
	}
	if (path.length == 0) {
		selectSection("home");
	} else {
		path = path.replaceAll("/", "-");
		selectSection(path);
	} 
}

export { initialRoute }