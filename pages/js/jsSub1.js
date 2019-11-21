const imgDis = document.querySelectorAll('.img-display img');
const workLink = document.querySelectorAll('.work-links li a');

const navMobile = document.querySelector('.nav-mobile'),
	  navMobileStyle = window.getComputedStyle(navMobile),
	  navMobileTrue = navMobileStyle.getPropertyValue('display');

workLinkMobile = () => {
	if (navMobileTrue == 'block'){
		imgDis[0].src = '../imgs/Sangam/main.png';
		imgDis[1].src = '../imgs/Toscana/main.png';
		imgDis[2].src = '../imgs/OldWorld/main.png';
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
	workLinkHover(0, /Toscana|OldWorld/, 'Sangam');
};
workLink[1].onmouseover = () => {
	workLinkHover(1, /Sangam|OldWorld/, 'Toscana');
};
workLink[2].onmouseover = () => {
	workLinkHover(2, /Sangam|Toscana/, 'OldWorld');
};

/* CALLING FUNCTIONS */
/********************************************************************************************/
window.onresize = function() {
	workLinkMobile();
};