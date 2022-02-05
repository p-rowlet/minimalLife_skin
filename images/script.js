const body = document.querySelector("body");
const scroll = document.querySelector(".scrolling");
const menu = document.querySelector(".menubar");
const nav = document.querySelector("nav");
const hiddenbar = document.querySelector(".hiddenbar");
const hiddenbari = document.querySelector(".hiddenbar i");
const sidebar = document.querySelector(".sidebar");
const bar = document.querySelectorAll(".bar");
const darkbar = document.querySelectorAll(".darkbar");
const darkbari = document.querySelectorAll(".darkbar i");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	window.document.body.classList.add("dark");
}

if (window.innerWidth < 1400) {
	sidebar.style.display = "none";
	sidebar.classList.add("sidebar_inactive");
	setTimeout(() => {
		sidebar.style.display = "block";
	}, 1800);
}

darkbar[0].addEventListener("click", (e) => {
	body.classList.toggle("dark");
	darkbari[0].classList.toggle("fa-sun");
	darkbari[0].classList.toggle("fa-moon");
    darkbari[1].classList.toggle("fa-sun");
	darkbari[1].classList.toggle("fa-moon");
});

darkbar[1].addEventListener("click", (e) => {
	body.classList.toggle("dark");
	darkbari[0].classList.toggle("fa-sun");
	darkbari[0].classList.toggle("fa-moon");
    darkbari[1].classList.toggle("fa-sun");
	darkbari[1].classList.toggle("fa-moon");
});

window.addEventListener("scroll", (e) => {
	if (window.outerWidth >= 600 && window.scrollY >= 800) {
		scroll.style.visibility = "visible";
	} else {
		scroll.style.visibility = "hidden";
	}
});

window.addEventListener("resize", (e) => {
	if (window.innerWidth >= 1400) {
		sidebar.style.display = "block";
		sidebar.classList.remove("sidebar_inactive");
		hiddenbar.classList.remove("active");
        darkbar[1].classList.remove("active");
		nav.classList.remove("active");
	} else {
		sidebar.style.display = "none";
		sidebar.classList.add("sidebar_inactive");
		setTimeout(() => {
			sidebar.style.display = "block";
		}, 1500);
		for (let i = 0; i < 3; i++) {
			bar[i].classList.remove("active");
		}
	}
});

scroll.addEventListener("click", (e) => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

menu.addEventListener("click", (e) => {
	sidebar.classList.toggle("sidebar_inactive");
	nav.classList.toggle("active");
	for (let i = 0; i < 3; i++) {
		bar[i].classList.toggle("active");
	}
});

hiddenbar.addEventListener("click", (e) => {
	hiddenbar.classList.toggle("active");
	hiddenbari.classList.toggle("fa-chevron-right");
	darkbar[1].classList.toggle("active");
	sidebar.classList.toggle("sidebar_inactive");
	nav.classList.toggle("active");
});

function requestSearch(className) {
	try {
		window.location.href =
			"/search/" +
			encodeURIComponent(document.querySelectorAll(className)[0].value);
		return false;
	} catch (e) {}
}
