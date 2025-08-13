import { openMenu, openSection } from './menus.js';
import { initialRoute } from './route.js'

function setup() {
	window.haveInitialRoute = "/";
	var menus = document.querySelectorAll(".menu-icon");
	for (var e of menus) {
		openMenu(e);
	}
	var sbmenu = document.querySelector(".sidebar-menu");
	for (var mi of sbmenu.children) {
		for (var c of mi.classList) {
			if (c.startsWith("goto-")) {
				var name = c.replace("goto-", "");
				openSection(mi, name);
			}
		}
	}
}

window.addEventListener("load", () => {
	setup();
	initialRoute(window.location.pathname + window.location.hash);
	window.onhashchange = function(ev) {
		initialRoute(window.location.pathname + window.location.hash);
	}
});