var currentSection = "home"

function selectSection(open) {
	currentSection = open;
	var section = document.querySelector(".contained-" + open);
	
	var all = document.querySelectorAll(".contained");
	for (var c of all) {
		c.classList.add("hidden");
	}
	section.classList.remove("hidden");
	var scrollDowns = section.querySelectorAll(".scroll-to-bottom");
	for (var sd of scrollDowns) {
		sd.scrollTo(0, sd.scrollHeight);
	}
	var menu = document.querySelector(".sidebar-menu");
	menu.classList.add("hidden");
}

function openSection(item, open) {
	item.addEventListener("click", function(ev) {
		window.history.pushState(null, null, window.haveInitialRoute + open.replaceAll("-", "/"));
		selectSection(open);
	});
}

function openMenu(button, open) {
	button.addEventListener("click", function(ev) {
		var all = document.querySelectorAll(".contained");
		var menu = document.querySelector(".sidebar-menu");
		if (menu.classList.contains("hidden")) { // open it
			for (var c of all) {
				c.classList.add("hidden");
			}
			menu.classList.remove("hidden");
		} else { // it was already open, close it
			selectSection(currentSection);
			menu.classList.add("hidden");
		}
	});
}

export { selectSection, openMenu, openSection }