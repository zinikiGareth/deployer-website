
function openOrCloseRelease(ri, add, remove) {
	return function(ev) {
		for (var c of ri.classList) {
			if (c === 'hidden') {
				ri.classList.remove(c);
				add.classList.add("hidden");
				remove.classList.remove("hidden");
				return
			}
		}
		ri.classList.add("hidden");
		add.classList.remove("hidden");
		remove.classList.add("hidden");
	}
}

function configureReleases(document) {
	var releases = document.querySelectorAll(".release-date");
	for (var r of releases) {
		var add = r.querySelectorAll(".release-icon")[0];
		var remove = r.querySelectorAll(".release-icon")[1];
		r.addEventListener("click", openOrCloseRelease(r.nextElementSibling, add, remove));
	}
	openOrCloseRelease(r.nextElementSibling, add, remove)();
}

export { configureReleases }