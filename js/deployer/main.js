function openSection(item, open) {
	item.addEventListener("click", function(ev) {
		var all = document.querySelectorAll(".contained");
		for (var c of all) {
			c.classList.add("hidden");
		}
		open.classList.remove("hidden");
		var menu = document.querySelector(".sidebar-menu");
		menu.classList.add("hidden");
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

function setup() {
	var menus = document.querySelectorAll(".menu-icon");
	for (var e of menus) {
		openMenu(e);
		/*
		var cd = e;
		while (!cd.classList.contains("contained")) {
			console.log(cd);
			cd = cd.parentElement;
		}
		console.log("contained =", cd);
		openSection(e, cd);
		*/
	}
	var sbmenu = document.querySelector(".sidebar-menu");
	for (var mi of sbmenu.children) {
		for (var c of mi.classList) {
			if (c.startsWith("goto-")) {
				var name = c.replace("goto-", "");
				console.log(name);
				var section = document.querySelector(".contained-" + name);
				openSection(mi, section);
			}
		}
	}
}

window.addEventListener("load", () => {
	setup();
});