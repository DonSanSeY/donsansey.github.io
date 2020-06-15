$(document).ready(function () {
	//slider
	$('.slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-little'
	});
	$('.slider-little').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		variableWidht: true,
		asNavFor: '.slider-big'
	});
	//portfolio filter
	//all
	$('.portfolio-menu__link--all').click(function () {
		$('.portfolio-item').show()
		$('.portfolio-menu__link').css({ 'backgroundColor': '#fff', 'color': '#b9b9b9' });
		$('.portfolio-menu__link--all').css({ 'backgroundColor': '#e8663c', 'color': '#fff' });
	});
	//print
	$('.portfolio-menu__link--print').click(function () {
		$('.portfolio-item').hide();
		$('.portfolio-item--print').show()
		$('.portfolio-menu__link').css({ 'backgroundColor': '#fff', 'color': '#b9b9b9' });
		$(this).css({ 'backgroundColor': '#e8663c', 'color': '#fff' });
	});
	//web
	$('.portfolio-menu__link--web').click(function () {
		$('.portfolio-item').hide();
		$('.portfolio-item--web').show()
		$('.portfolio-menu__link').css({ 'backgroundColor': '#fff', 'color': '#b9b9b9' });
		$(this).css({ 'backgroundColor': '#e8663c', 'color': '#fff' });
	});
	//photoshop
	$('.portfolio-menu__link--photoshop').click(function () {
		$('.portfolio-item').hide();
		$('.portfolio-item--photoshop').show()
		$('.portfolio-menu__link').css({ 'backgroundColor': '#fff', 'color': '#b9b9b9' });
		$(this).css({ 'backgroundColor': '#e8663c', 'color': '#fff' });
	});
	//WordPress
	$('.portfolio-menu__link--wordpress').click(function () {
		$('.portfolio-item').hide();
		$('.portfolio-item--wordpress').show()
		$('.portfolio-menu__link').css({ 'backgroundColor': '#fff', 'color': '#b9b9b9' });
		$(this).css({ 'backgroundColor': '#e8663c', 'color': '#fff' });
	});
});