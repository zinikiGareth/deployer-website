function selectSection(open) {
	var section = document.querySelector(".contained-" + open);
	
	var all = document.querySelectorAll(".contained");
	for (var c of all) {
		c.classList.add("hidden");
	}
	section.classList.remove("hidden");
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
		for (var c of all) {
			c.classList.add("hidden");
		}
		var menu = document.querySelector(".sidebar-menu");
		menu.classList.remove("hidden");
	});
}

export { selectSection, openMenu, openSection }