//	---catalog-------------------------------------------------------------

var catalog = document.querySelector('#catalog');
var menu = document.querySelector('.catalog');

catalog.addEventListener('mouseover', function () {
	menu.classList.add('show-catalog');
});
catalog.addEventListener('mouseout', function () {
	menu.classList.remove('show-catalog');
});
menu.addEventListener('mouseover', function () {
	this.classList.add('show-catalog');
});
menu.addEventListener('mouseout', function () {
	this.classList.remove('show-catalog');
});

//	-----decor--------------------------------------------------------------

var decor = document.querySelectorAll('.dec');
var decorArr = Array.from(decor);
var i;
var liDecor = document.querySelectorAll(".decor-control-panel li");


for (i = 0; i < decor.length; i++) {


	decorArr[i].addEventListener("click", function (ttt) {
		ttt.preventDefault();

		var atr = this.getAttribute('id');
		var numb = atr[atr.length - 1] - 1;
		var atr$ = "." + atr;
		var showDecor = document.querySelector(atr$);

		showDecor.classList.add("decor-active-a");
		this.classList.add("decor-active-a");
		liDecor[numb].classList.add("decor-active-li");

		if (numb == 0) {
			document.querySelector('.decor2').classList.remove("decor-active-a");
			document.querySelector('.decor3').classList.remove("decor-active-a");
			liDecor[numb + 1].classList.remove("decor-active-li");
			liDecor[numb + 2].classList.remove("decor-active-li");
			decor[1].classList.remove('decor-active-a');
			decor[2].classList.remove('decor-active-a');
		} else if (numb == 1) {
			document.querySelector('.decor1').classList.remove("decor-active-a");
			document.querySelector('.decor3').classList.remove("decor-active-a");
			liDecor[numb - 1].classList.remove("decor-active-li");
			liDecor[numb + 1].classList.remove("decor-active-li");
			decor[0].classList.remove('decor-active-a');
			decor[2].classList.remove('decor-active-a');
		} else if (numb == 2) {
			document.querySelector('.decor2').classList.remove("decor-active-a");
			document.querySelector('.decor1').classList.remove("decor-active-a");
			liDecor[numb - 2].classList.remove("decor-active-li");
			liDecor[numb - 1].classList.remove("decor-active-li");
			decor[0].classList.remove('decor-active-a');
			decor[1].classList.remove('decor-active-a');
		};

	});
};

//-----------modal------------------------------------------------------------------
var write = document.querySelector('.modal-write');
var writeClose = document.querySelector('#write-close');
var writeOpen = document.querySelector('#write-us');

var map = document.querySelector('.modal-map');
var mapClose = document.querySelector('#map-close');
var mapOpen = document.querySelector('.map-img');

var form = write.querySelector("form");
var namer = write.querySelector("[name=name]");
var email = write.querySelector("[name=email]");
var text = write.querySelector("[name=text]");
var storage = localStorage.getItem("name");
var storageE = localStorage.getItem("email");
var masInput = form.querySelectorAll("input");

writeOpen.addEventListener('click', function (e) {
	e.preventDefault();
	write.classList.add('modal-show');
	if (storage) {
		namer.value = storage;
		email.value = storageE;
	}

});

writeClose.addEventListener('click', function (e) {
	e.preventDefault();
	write.classList.remove('modal-show');

});

mapOpen.addEventListener('click', function (e) {
	e.preventDefault();
	map.classList.add('modal-show');

});

mapClose.addEventListener('click', function (e) {
	e.preventDefault();
	map.classList.remove('modal-show');

});

form.addEventListener("submit", function (e) {

	if (!namer.value || !email.value || !text.value) {
		e.preventDefault();
		for (var u = 0; u < masInput.length; u++) {
			if (!masInput[u].value) {
				masInput[u].classList.add("warning-input");
			};
		};
	} else {
		localStorage.setItem('name', namer.value);
		localStorage.setItem('email', email.value);
	}

});
for (var u = 0; u < masInput.length; u++) {
	masInput[u].onfocus = function () {
		this.classList.remove("warning-input");
	};

};