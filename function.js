function subtract() {
	if (n <= 1) {
		n = 11;
	}
	n -= 1;

	b.src = `./images/${n}.jpg`;
	dot[n - 1].classList.toggle('active');
	dot[n - 2].classList.toggle('active');
}

let n = 1;
let timeSet = setInterval(add, 2000);

right_Button.addEventListener('click', add);

left_Button.addEventListener('click', subtract);
const lantern = document.querySelector('.lantern');
lantern.addEventListener('mouseleave', function () {
	timeSet = setInterval(add, 2000);
});
lantern.addEventListener('mouseenter', function () {
	clearInterval(timeSet);
});

for (let i = 0; i < dot.length; i++) {
	dot[i].addEventListener('click', function () {
		b.src = `./images/${i + 1}.jpg`;
		dot[i].classList.toggle('active');
		for (let j = 0; j < dot.length; j++) {
			if (i !== j) {
				dot[j].classList.remove('active');
			}
		}
	});
}
