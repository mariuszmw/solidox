/**
 * @author mariusz.pankiewicz
 */
$(document).ready(function(){
		
		$('.next').click(function(){
			$(this).parent().removeClass('current-question');
			$(this).parent().next().addClass('current-question');
		});

});
