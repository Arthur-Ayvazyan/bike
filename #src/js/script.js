
@@include('jquery.min.js');
window.onload = function(){
@@include('slick.js');

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});
	//---------------------------------------------------------

	function ibg(){
		let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}
	ibg();


	//---------------------------------------------------------


	$('.icon-menu').on('click', function(e){
		$(this).toggleClass('icon-menu--active');
		$('.menu__body').toggleClass('menu__body--active');
		$('body').toggleClass('scroll-hidden');
	});	



	// $('.address-info__button').on('click', function(e){
	// 	$('body').toggleClass('scroll-hidden');
	// 	$('.modal').addClass('modal_active');
	// })
	// 	$('.popup-closer').on('click', function(e){
	// 	$('.modal').removeClass('modal_active');
	// 	$('body').toggleClass('scroll-hidden');
	// })


	// }

$(document).ready(function(){
	
  $('.slider__body').slick({
  	// lazyLoad: 'progressive',
  	dots: true,
    arrows: false,
  	// fade: true,
  	centerPadding: '0',
  	centerMode: true,
  	adaptiveHeight: true,
  	// autoplay: true,
  	autoplaySpeed: '3000',
  	// focus: false,
  });
});





}