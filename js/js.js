const docBody = document.querySelector('body');

$(document).ready(function() {
	docBody.classList.remove('body-load');
});

const page = document.querySelectorAll('body .page');

const navRotate = document.querySelector('.nav-rotate'),
	  navGroup = document.querySelectorAll('.nav .nav-group'),
	  navLink = document.querySelectorAll('.nav .nav-group a'),
	  navSpan = document.querySelectorAll('.nav .nav-group a span');

const navMobile = document.querySelector('.nav-mobile'),
	  navMobileStyle = window.getComputedStyle(navMobile),
	  navMobileTrue = navMobileStyle.getPropertyValue('display');


/* NAVIGATION */
/********************************************************************************************/
navMobileShow = () => {
	if (navMobileTrue == 'block'){
		navMobileCick = () => {
			document.body.classList.toggle('body-lock');
			navRotate.classList.toggle('nav-mobile-show');
			document.querySelector('.nav-mobile .fa-bars').classList.toggle('fa-times');
		}
		for (let i = 0; i < navLink.length; i++) {
			navLink[i].onclick = () => {
				navMobileCick();
			};
		};
		navMobile.onclick = () => {
			navMobileCick();
		};
	};
	for (let i = 0; i < navSpan.length; i++) {
		if (navMobileTrue == 'block'){
			navSpan[i].style.transform = 'rotate('+ -(360 / 20) * i +'deg)';
		} else {
			navSpan[i].style.transform = 'rotate('+ (360 / 20) * i +'deg)';
		};
	};
};
navMobileShow();

animateScroll = () => {

	const pageScroll = document.documentElement.scrollTop;

	navAnimate = (index, numT, numR) => {
		if (navMobileTrue == 'block'){
			navRotate.style.transform = 'rotate('+ (pageScroll / numT * numR) +'deg)';
		} else {
			navRotate.style.transform = 'rotate('+ -(pageScroll / numT * numR) +'deg)';
		};
		for (let i = 0; i < page.length; i++) {
			if (i == index) {
				navGroup[i].classList.add('active-group');
			} else {
				navGroup[i].classList.remove('active-group');
			}
		};
	};

	const p1Top = (page[0].offsetHeight) - 5,
		  p2Top = (p1Top + page[1].offsetHeight) - 5,
		  p3Top = (p2Top + page[2].offsetHeight) - 5,
		  p4Top = (p3Top + page[3].offsetHeight) - 5;

	if (pageScroll <= p1Top) {
		navAnimate(0, p1Top, 90);
	} else if (pageScroll <= p2Top) {
		navAnimate(1, p2Top, 180);
	} else if (pageScroll <= p3Top) {
		navAnimate(2, p3Top, 270);
	} else if (pageScroll <= p4Top) {
		navAnimate(3, 0, 360);
	}

	/* BODY ANIMATIONS (JQUERY) */	/********************************************************************************************/
	if (pageScroll <= p1Top) {
		$('#home .h1-1').css({'left': -(pageScroll * .5)})
		$('#home .h1-2').css({'left': -(pageScroll)})
		$('#home .img-1').css({'left': (pageScroll)})
		$('#home .img-2').css({'left': (pageScroll * 2)})
		$('#home .col-2').css({'left': -(pageScroll * 2)})
		$('#about .h1-1').css({'left': -(pageScroll - p1Top)})
		$('#about .h1-2').css({'left': -((pageScroll - p1Top) * .5)})
		$('#about h4').css({'left': -((pageScroll - p1Top) * 2)})
	} else {
		$('#home h1, #home .col-2').css({'left': '-100%'})
		$('#home img').css({'left': '100%'})
		$('#about h1, #about h4').css({'left': 'unset'})
	}

	if (pageScroll <= (p1Top + (p1Top / 4.5))) {
		$('#about h2').css({'left': -(pageScroll - (p1Top + (p1Top / 4.5)))})
		$('#about ol').css({'left': (pageScroll - (p1Top + (p1Top / 4.5)))})
	} else {
		$('#about h2, #about ol').css({'left': 'unset'})
	}

	if (pageScroll <= p2Top) {
		$('#work .h1-1').css({'left': -(pageScroll - p2Top)})
		$('#work h2').css({'left': -((pageScroll - p2Top) * .5)})
		$('#work ol').css({'left': -((pageScroll - p2Top) * 2)})
		$('#work .img-display img:first-of-type').css({'left': ((pageScroll - p2Top) + 20)})
		$('#work .img-display img:nth-of-type(2)').css({'right': (((pageScroll - p2Top) * .5) + 20)})
		$('#work .img-display img:nth-of-type(3)').css({'left': (((pageScroll - p2Top) * .25) + 20)})
	} else {
		$('#work h1, #work h2, #work ol').css({'left': 'unset'})
		$('#work .img-display img:first-of-type, #work .img-display img:nth-of-type(3)').css({'left': '20px'})
		$('#work .img-display img:nth-of-type(2)').css({'right': '20px'})
	}

	if (pageScroll <= p3Top) {
		$('#contact .h1-1').css({'left': -(pageScroll - p3Top)})
		$('#contact .h1-2').css({'left': -((pageScroll - p3Top) * .5)})
		$('#contact .col-2').css({'left': -((pageScroll - p3Top) * 2)})
	} else {
		$('#contact h1, #contact .col-2').css({'left': 'unset'})
	}

};
animateScroll();


/* WORK PAGE */
/********************************************************************************************/
const imgDis = document.querySelectorAll('.img-display img');
const workLink = document.querySelectorAll('.work-links li a');

workLinkMobile = () => {
	if (navMobileTrue == 'block'){
		imgDis[0].src = 'imgs/Toscana/main.png';
		imgDis[1].src = 'imgs/Atria/main.png';
		imgDis[2].src = 'imgs/Code/main.png';
	};
};
workLinkMobile();

workLinkHover = (index, srcOld, srcNew) => {
	if (navMobileTrue !== 'block'){
		for (let i = 0; i < 3; i++) {
			if (i == index) {
				workLink[i].classList.add('active-work-link');
			} else {
				workLink[i].classList.remove('active-work-link');
			}
			imgDis[i].src = imgDis[i].getAttribute('src').replace(srcOld, srcNew);
			imgDis[i].classList.add('img-animate');
			workLink[i].onmouseout = () => {
				for (let i = 0; i < 3; i++) {
					imgDis[i].classList.remove('img-animate');
				};
			};
		};
	};
};

workLink[0].onmouseover = () => {
	workLinkHover(0, /Atria|Code/, 'Toscana');
};
workLink[1].onmouseover = () => {
	workLinkHover(1, /Toscana|Code/, 'Atria');
};
workLink[2].onmouseover = () => {
	workLinkHover(2, /Toscana|Atria/, 'Code');
};

/* CALLING FUNCTIONS */
/********************************************************************************************/
window.onscroll = function() {
	animateScroll();
};
window.onresize = function() {
	navMobileShow();
	workLinkMobile();
};