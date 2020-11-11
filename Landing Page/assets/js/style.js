$(function(){
	$('.header-flex ul .open-list').hover(function(){
		event.preventDefault();
		$('.sub-list').slideToggle();
	});

	$('header .link-dinamico a, .conheca-agora a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});
		return false;
	});

	$('#open-mobile').click(function(){
		$('.header-mobile .lista-mobile').slideToggle('');
		$('#open-mobile').css("color", "#6ab7e7");
	});
	
});