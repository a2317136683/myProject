function getRandomNum(N, M) {
	return Math.floor(Math.random() * (M - N + 1) + N);
}

let count = 0;

const photos = [
	{ src: './images/0.jpg', num: 0 },
	{ src: './images/1.jpg', num: 1 },
	{ src: './images/2.jpg', num: 2 },
	{ src: './images/3.jpg', num: 3 },
	{ src: './images/4.jpg', num: 4 },
	{ src: './images/5.jpg', num: 5 },
	{ src: './images/6.jpg', num: 6 },
	{ src: './images/7.jpg', num: 7 },
	{ src: './images/8.jpg', num: 8 },
	{ src: './images/9.jpg', num: 9 },
	{ src: './images/10.jpg', num: 10 },
];

// let arr1 = [];

// for (let i = 0; i < photos.length; i++) {
// 	if (i === 0) {
// 		arr1[i] = '<div class="circle active"></div>';
// 	}
// 	arr1[i] = '<div class="circle"></div>';
// }
// const by = document.querySelector('body');

// by.innerHTML = `<div class="lantern">
//         <span class="iconfont icon-arrow-right right-Button"></span>
//         <img src="./images/0.jpg" alt="">
//         <div class="xiaqiu">
//             ${arr1}
//         </div>
//         <span class="iconfont icon-arrow-left left-Button"></span>
//     </div>`;

const right_Button = document.querySelector('.right-Button');

const left_Button = document.querySelector('.left-Button');

const dot = document.querySelectorAll('.circle');

const bg = document.querySelector('.lantern img');

const lantern = document.querySelector('.lantern');

const inp = document.querySelector('input');

const btn = document.querySelector('button');

const ul1 = document.querySelector('.bigBox .hengfu ul');

const li = document.querySelectorAll('.bigBox .hengfu ul li');

const home = document.querySelectorAll('.home');

function next() {
	count++;
	dot[count - 1].classList.remove('active');
	if (count === photos.length) {
		count = 0;
		dot[photos.length - 1].classList.remove('active');
	}
	bg.src = photos[count].src;
	dot[count].classList.add('active');
}

let normal = 2000,
	slow = 5000,
	fast = 500;

let timer = setInterval(next, normal);

lantern.addEventListener('mouseenter', function () {
	clearInterval(timer);
});

lantern.addEventListener('mouseleave', function () {
	timer = setInterval(next, normal);
});

right_Button.addEventListener('click', next);

left_Button.addEventListener('click', function () {
	if (count === 0) {
		count = photos.length - 1;
		dot[0].classList.remove('active');
		dot[count].classList.add('active');
		bg.src = photos[count].src;
	} else {
		count--;
		bg.src = photos[count].src;
		dot[count].classList.add('active');
		dot[count + 1].classList.remove('active');
	}
});

for (let j = 0; j < photos.length; j++) {
	dot[j].addEventListener('click', function () {
		dot[count].classList.remove('active');
		count = j;
		bg.src = photos[count].src;
		dot[count].classList.add('active');
	});
}

btn.addEventListener('click', function () {
	const random = getRandomNum(0, photos.length - 1);
	dot[count].classList.remove('active');
	count = random;
	bg.src = photos[count].src;
	dot[count].classList.add('active');
});

inp.addEventListener('keyup', function (e) {
	if (e.key === 'Enter') {
		inp.value = '';
	}
});

ul1.addEventListener('click', function (e) {
	if (e.target.tagName === 'A') {
		document.querySelector('.bigBox .hengfu .bgcolor').classList.remove('bgcolor');
		e.target.classList.add('bgcolor');
		const fenlei = document.querySelectorAll('.fenlei');
		for (let i = 0; i < fenlei.length; i++) {
			if ( fenlei[i] === document.querySelector( '.bgcolor' ) ) {
				document.querySelector( '.display' ).classList.remove( 'display' );
				home[i].classList.add( 'display' );
			}
		}
	}
});

