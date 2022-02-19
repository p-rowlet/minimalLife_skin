const body = document.querySelector("body");
const scroll = document.querySelector(".scrolling");
const menu = document.querySelector(".menubar");
const nav = document.querySelector("nav");

const sidebar = document.querySelector(".sidebar");
const bar = document.querySelectorAll(".bar");

// 사이드바 숨기기 버튼 + 다크모드 버튼
const hiddenbar = document.querySelector(".hiddenbar");
const hiddenbari = document.querySelector(".hiddenbar i");
const darkbar = document.querySelectorAll(".darkbar");
const darkbari = document.querySelectorAll(".darkbar i");

function hideSidebar(){
	sidebar.style.display = "none";
	sidebar.classList.add("sidebar_inactive");
	setTimeout(() => {
		sidebar.style.display = "block";
	}, 1500);
}

// 다크모드 처리
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	window.document.body.classList.add("dark");
}

if (window.innerWidth < 1400) {
	hideSidebar();
}

//다크-라이트 전환버튼 토글 이벤트
darkbar.forEach(element =>{
	element.addEventListener("click", ()=>{
		body.classList.toggle("dark");
		darkbari.forEach(element =>{
			element.classList.toggle("fa-sun");
			element.classList.toggle("fa-moon")
		});
	});
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
		hideSidebar();
		bar.forEach(element =>{
			element.classList.remove("active");
		});
	}
});

scroll.addEventListener("click", (e) => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

menu.addEventListener("click", (e) => {
	sidebar.classList.toggle("sidebar_inactive");
	nav.classList.toggle("active");
	bar.forEach(element =>{
		element.classList.toggle("active");
	});
});

hiddenbar.addEventListener("click", (e) => {
	hiddenbar.classList.toggle("active");
	hiddenbari.classList.toggle("fa-chevron-right");
	darkbar[1].classList.toggle("active");
	sidebar.classList.toggle("sidebar_inactive");
	nav.classList.toggle("active");
});

//검색 처리
function requestSearch(className) {
	try {
		window.location.href =
			"/search/" +
			encodeURIComponent(document.querySelectorAll(className)[0].value);
		return false;
	} catch (e) {}
}
