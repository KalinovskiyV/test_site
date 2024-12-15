let menuBtn = document.querySelector('.menu-btn');
let headMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	headMenu.classList.toggle('active');
})