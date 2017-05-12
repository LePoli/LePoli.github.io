$(document).ready(function(){
	$('.parallax').parallax();
	$('.button-collapse').sideNav();
	$('#hidden-on-initial').hide();
	$('#aboutme-page').hide();
	$('#skilss-page').hide();
	$('#portafolio-page').hide();
	$('#aboutme-button').on('click', function(){
		$('#hidden-on-initial').show();
		$('#aboutme-page').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('#skills-button').on('click', function(){
		$('#hidden-on-initial').show();
		$('#skilss-page').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('#portafolio-button').on('click', function(){
		$('#hidden-on-initial').show();
		$('#portafolio-page').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('#skills-btn').on('click', function(){
		$('#aboutme-page').hide();
		$('#skilss-page').show();
	});
	$('.inicio').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').hide();
		$('#skilss-page').hide();
		$('#portafolio-page').hide();
		$('#main-section').show();
		$('#first-page-body').addClass('boddy-initial');
	});
	$('.sobre').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').show();
		$('#skilss-page').hide();
		$('#portafolio-page').hide();
		$('#hidden-on-initial').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('.habilidad').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').hide();
		$('#skilss-page').show();
		$('#portafolio-page').hide();
		$('#hidden-on-initial').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('.portafolio').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').hide();
		$('#skilss-page').hide();
		$('#portafolio-page').show();
		$('#hidden-on-initial').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});

	$('#inicio-hamb').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').hide();
		$('#skilss-page').hide();
		$('#portafolio-page').hide();
		$('#main-section').show();
		$('#first-page-body').addClass('boddy-initial');
	});
	$('#about-hamb').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').show();
		$('#skilss-page').hide();
		$('#portafolio-page').hide();
		$('#hidden-on-initial').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('#skills-hamb').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').hide();
		$('#skilss-page').show();
		$('#portafolio-page').hide();
		$('#hidden-on-initial').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
	$('portafolio-hamb').on('click', function(){
		$('#hidden-on-initial').hide();
		$('#aboutme-page').hide();
		$('#skilss-page').hide();
		$('#portafolio-page').show();
		$('#hidden-on-initial').show();
		$('#main-section').hide();
		$('#first-page-body').removeClass('boddy-initial');
	});
});