const imgDis = document.querySelectorAll('.img-display img');
const workLink = document.querySelectorAll('.work-links li a');

const navMobile = document.querySelector('.nav-mobile'),
	  navMobileStyle = window.getComputedStyle(navMobile),
	  navMobileTrue = navMobileStyle.getPropertyValue('display');

workLinkMobile = () => {
	if (navMobileTrue == 'block'){
		imgDis[0].src = '../imgs/Atria/main.png';
		imgDis[1].src = '../imgs/Grub/logo.png';
		imgDis[2].src = '';
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
	workLinkHover(0, /Grub|Dyrand/, 'Atria');
};
workLink[1].onmouseover = () => {
	workLinkHover(1, /Atria|Dyrand/, 'Grub');
};
workLink[2].onmouseover = () => {
	workLinkHover(2, /Atria|Grub/, 'Dyrand');
	imgDis[0].src = '../imgs/Atria/logo.png';
};

/* CALLING FUNCTIONS */
/********************************************************************************************/
window.onresize = function() {
	workLinkMobile();
};