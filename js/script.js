$(function(){
	
	$('.ui-box').find('.toggled').on('click', function(){

		$(this).parents('.ui-box').toggleClass('active');
		
	})

});