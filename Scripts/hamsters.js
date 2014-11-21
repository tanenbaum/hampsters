function injectHamsters() {
	var img = 0;
	var timeout = 5000;

	function injectHamster() {
		setTimeout(function () {
			var hamster = 'hamster' + img;

			var hamsters = document.getElementById('hamsters');
			hamsters.innerHTML += '<div class="hamster-row ' + hamster + '"></div>';

			img = (img + 1) % 4;
			timeout -= 100;

			hamsters.lastChild.scrollIntoView();

			injectHamster();
		}, timeout);
	}

	injectHamster();
}