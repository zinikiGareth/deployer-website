import { configureMenus } from './menus.js';
import { configureReleases } from './releases.js';
import { initialRoute } from './route.js'

function setup() {
	window.haveInitialRoute = "/";
	configureMenus(document);
	configureReleases(document);
}

window.addEventListener("load", () => {
	setup();
	initialRoute(window.location.pathname + window.location.hash);
	window.onhashchange = function(ev) {
		initialRoute(window.location.pathname + window.location.hash);
	}
});