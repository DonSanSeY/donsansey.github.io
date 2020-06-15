$(document).ready(function () {
	//menu

	//slider
	$('.slider__body').slick();
	//slider testimonials
	$('.testimonials__slider').slick({
		arrows: false,
		dots: true,
	});

	//grid
	$('.portfolio__grid').masonry({
		// options...
		itemSelector: '.portfolio__grid-item',
	});

	//FILTER
	$('.js-portfolio-website,.js-portfolio-brochures,.js-portfolio-logos').hide();





	//website
	$('.js-btn_website').click(function () {
		$('.js-portfolio-website').show('');
		$('.js-portfolio-brochures,.js-portfolio-logos,.js-portfolio-all').hide('');

		$('.portfolio__btn').removeClass('portfolio__btn_active');
		$('.js-btn_website').addClass('portfolio__btn_active');
	});




	//brochures
	$('.ja-btn_brochures').click(function () {
		$('.js-portfolio-brochures').show('');
		$('.js-portfolio-website,.js-portfolio-logos,.js-portfolio-all').hide('');

		$('.portfolio__btn').removeClass('portfolio__btn_active');
		$('.ja-btn_brochures').addClass('portfolio__btn_active');
	});



	//logos
	$('.js-btn_logos').click(function () {
		$('.js-portfolio-logos').show('');
		$('.js-portfolio-website,.js-portfolio-brochures,.js-portfolio-all').hide('');

		$('.portfolio__btn').removeClass('portfolio__btn_active');
		$('.js-btn_logos').addClass('portfolio__btn_active');
	});


	//all
	$('.js-btn_all').click(function () {
		$('.js-portfolio-all').show('');
		$('.js-portfolio-website,.js-portfolio-brochures,.js-portfolio-logos').hide('');

		$('.portfolio__btn').removeClass('portfolio__btn_active');
		$('.js-btn_all').addClass('portfolio__btn_active');
	});

});

$('.header__menu-icon').click(function () {
	$('.header__menu-icon,.header__menu-main,body').toggleClass('active');
});

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
