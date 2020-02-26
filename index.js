const menuBtn = document.querySelector('#nav-icon-container');
const nav = document.querySelector('.nav-items');
const nav2 = document.querySelector('nav');
const bgCover = document.querySelector('body');
const typewriter = document.querySelector('.hero h2');
const navButtons = document.querySelectorAll('.nav-items a');

menuBtn.addEventListener('click', () => {
	console.log('clicked');
	menuBtn.classList.toggle('open');
	nav.classList.toggle('open');
	nav2.classList.toggle('open');
});

navButtons.forEach(button => {
	button.addEventListener('click', () => {
		console.log('lickeng');
		menuBtn.classList.remove('open');
		nav.classList.remove('open');
		nav2.classList.remove('open');
	});
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

	if (currentScrollPos > 125) {
		bgCover.classList.add('faded');
	} else {
		bgCover.classList.remove('faded');
	}

	if (prevScrollpos > currentScrollPos || currentScrollPos < 100) {
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
