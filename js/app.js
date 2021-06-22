const menuSearch = document.querySelector(".menuSearch");
const menuSearchBox = document.querySelector(".menuSearchBox");
const counter1 = document.querySelector(".counter1");
const counter2 = document.querySelector(".counter2");
const counter3 = document.querySelector(".counter3");
const counter4 = document.querySelector(".counter4");
const loading = document.querySelector(".loading");


window.addEventListener("load", function () {
	loading.style.display = "none";
})
menuSearch.addEventListener("click", function () {
	menuSearchBox.classList.toggle("searchBoxActive")
});

function sectionCounter(ele, speed) {
	let count = Number(ele.innerHTML);
	let st = 1;

	function counter(par, speed) {


		if (st >= count) {
			par.innerHTML = count;
			clearInterval(c)
		} else {

			par.innerHTML = st;
			st = st + speed;
		}
	}


	let c = setInterval(function () {
		counter(ele, speed)
	}, 10)
}

sectionCounter(counter1, 1)
sectionCounter(counter2, 50)
sectionCounter(counter3, 100)
sectionCounter(counter4, 1)


// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction()
};

var navbar = document.querySelector(".navbar");

var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}