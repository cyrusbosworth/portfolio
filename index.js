const menuBtn = document.querySelector('#nav-icon-container');
const nav = document.querySelector('.nav-items');
const nav2 = document.querySelector('nav');
const bgCover = document.querySelector('body');
const typewriter = document.querySelector('.hero h2');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	nav.classList.toggle('open');
	nav2.classList.toggle('open');
	console.log(nav);
	console.log('click');
});

//Background fade

let last_known_scroll_position = 0;
let ticking = false;

function fade(scroll_pos) {
	if (scroll_pos > 125) {
		bgCover.classList.add('faded');
	} else {
		bgCover.classList.remove('faded');
	}
	console.log(scroll_pos);
}

window.addEventListener('scroll', function(e) {
	last_known_scroll_position = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function() {
			fade(last_known_scroll_position);
			ticking = false;
		});

		ticking = true;
	}
});

//Typewriter
const desc = 'full stack developer and designer'.split('');
typewriter.textContent = '_';
let string = '';
for (let i = 0; i < desc.length; i++) {
	string += desc[i];
	if (i === desc.length - 1) type(string);
	else type(string + '_');
}

function type(str) {
	setTimeout(() => {
		typewriter.textContent = str;
	}, 75 * str.length);
}

//hide nav button
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		menuBtn.style.opacity = '1';
		menuBtn.style.pointerEvents = 'auto';
	} else {
		if (!menuBtn.classList.contains('open')) {
			menuBtn.style.opacity = '0';
			menuBtn.style.pointerEvents = 'none';
		}
	}
	prevScrollpos = currentScrollPos;
};
