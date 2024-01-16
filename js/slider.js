$(document).ready(function() {
	$('.faq__item-title').click(function(event){
		//CLOSE PREVIOUS SPOILER WHEN NEW WAS OPENED
		if ($('.faq__item').hasClass('one')) {
			$('.faq__item-title').not($(this)).toggle('active');
			$('.faq__main').not($(this)).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
	//CLOSE THE SPOILER WHEN BODY OF THIS SPOILER WAS CLICKED
	$('.faq__main').click(function(event){
		$('.faq__main').slideUp(300);
	});
});