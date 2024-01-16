window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header__menu a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});