$(document).ready(function(){
	$('.slideshow').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		draggable: false,
		arrows: false
	});
});