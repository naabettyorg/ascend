jQuery(window).scroll(function() {							   
	jQuery('#section1 .container, #section3 .container, #section5 .container, #section7 .container, #section9 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInDown");
			}
		});
	
	jQuery('#section2 .container, #section4 .container, #section6 .container, #section8 .container').each(function(){
		var imagePos = jQuery(this).offset().top;
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				jQuery(this).addClass("fadeInUp");
			}
		});
	 
	});