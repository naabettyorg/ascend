// NAVIGATION CALLBACK
var ww = jQuery(window).width();
jQuery(document).ready(function() { 
	jQuery(".nav li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	jQuery(".toggleMenu").click(function(e) { 
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".nav").slideToggle('fast');
	});
	adjustMenu();
})

// navigation orientation resize callbak
jQuery(window).bind('resize orientationchange', function() {
	ww = jQuery(window).width();
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 981) {
		jQuery(".toggleMenu").css("display", "block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".nav").hide();
		} else {
			jQuery(".nav").show();
		}
		jQuery(".sitenav li").unbind('mouseenter mouseleave');
	} else {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".nav").show();
		jQuery(".sitenav li").removeClass("hover");
		jQuery(".sitenav li a").unbind('click');
		jQuery(".sitenav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
			jQuery(this).toggleClass('hover');
		});
	}
}

jQuery(document).ready( function(){
	var ww = jQuery(window).width();	
	jQuery("area[rel^='prettyPhoto']").prettyPhoto();
	jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	jQuery("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
	});
	jQuery("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
	});

	// accordion
    jQuery('.accordion-box .acc-content').hide();
    jQuery('.accordion-box h2:first').addClass('active').next().show();
    jQuery('.accordion-box h2').click(function(){
        if( jQuery(this).next().is(':hidden') ) {
            jQuery('.accordion-box h2').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();
        }
        return false; // Prevent the browser jump to the link anchor
    });
	
	// Tabs
	jQuery('ul.tabs > br').remove();
	jQuery('.tabs-wrapper').append(jQuery('.tabs li div'));
	jQuery('.tabs li:first a').addClass('defaulttab selected');
	jQuery('.tabs a').click(function(){
		switch_tabs(jQuery(this));
	});
	switch_tabs(jQuery('.defaulttab'));
	function switch_tabs(obj) {
		jQuery('.tab-content').hide();
		jQuery('.tabs a').removeClass("selected");
		var id = obj.attr("rel");
		jQuery('#'+id).show();
		obj.addClass("selected");
	}

	// Content Toggle
    jQuery(".slide_toggle_content").hide();
    jQuery("h3.slide_toggle").toggle(function(){
	    jQuery(this).addClass("clicked");
	}, function () {
	    jQuery(this).removeClass("clicked");
    });
    jQuery("h3.slide_toggle").click(function(){
		jQuery(this).next(".slide_toggle_content").slideToggle();
    });

});

jQuery(window).load(function() { 
   jQuery('#testimonials .quotes').quovolver({
      children    : 'div',
      transitionSpeed : 600,
      autoPlay    : true,
	  autoPlaySpeed:6000,
      equalHeight   : false,
      navPosition   : 'below',
      navPrev     : true,
      navNext     : true,
      navNum      : true,
      navText     : false,
      navTextContent  : 'Quote @a of @b'
    });    
  });


jQuery(document).ready(function() {
  	jQuery('.srchicon').click(function() {
			jQuery('.searchtop').toggle();
			jQuery('.topsocial').toggle();
		});	
});

// skill bar script
jQuery(document).ready(function() {
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

jQuery(document).ready(function(){
	// hide #back-top first
	jQuery("#back-top").hide();	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 0) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});

});

//Client Logo jquery   
jQuery(window).load(function() { 
    jQuery("#flexiselDemo3").flexisel({
        visibleItems:5,
        animationSpeed: 1000,
        autoPlay:true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 2
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 3
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });    
});

// Flip Box Function
jQuery(document).ready(function(){
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		jQuery('.hover').hover(function(){
			jQuery(this).addClass('flip');
		},function(){
			jQuery(this).removeClass('flip');
		});
});


//Client Logo jquery   
jQuery(window).load(function() { 
    jQuery("#SidebarRoator").flexisel({
        visibleItems: 1,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 1
            },
            tablet: { 
                changePoint:768,
                visibleItems: 1
            }
        }
    });    
});

jQuery(document).ready(function() {
        jQuery('section h2.section_title').each(function(index, element) {
            var heading = jQuery(element);
            var word_array, last_word, first_part;

            word_array = heading.html().split(/\s+/); // split on spaces
            last_word = word_array.pop();             // pop the last word
            first_part = word_array.join(' ');        // rejoin the first words together

            heading.html([first_part, ' <span>', last_word, '</span>'].join(''));
        });
});


jQuery(document).ready(function( jQuery ) {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
        });
  });

jQuery(document).ready(function() {
	jQuery('ul#filterprod a').click(function() {
		var filter_a = jQuery(this);
		filter_a.css('outline','none');
		jQuery('ul#filterprod .current').removeClass('current');
		filter_a.parent().addClass('current');
		var filterVal = filter_a.text().toLowerCase().replace(' ','-');
		var filterVal = filterVal.replace(/["~!@#$%^&*\(\)_+=`{}\[\]\|\\:;'<>,.\/?"\- \t\r\n]+/g, '-');
		if(filterVal === 'all') {
			jQuery('ul#portfolioprod li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			jQuery('ul#portfolioprod li').each(function() {
				var portfolio_li = jQuery(this);
				if(!portfolio_li.hasClass(filterVal)) {

					portfolio_li.fadeOut('normal').addClass('hidden');
				} else {
					portfolio_li.fadeIn('slow').removeClass('hidden');
				}
			});
	}
		return false;
	});
});


/*Menu CSS Strat*/
jQuery(document).ready( function(){
	jQuery('.home ul.menu li a').click( function(){
		jQuery('.home ul.menu li').removeClass('active_menu');
		jQuery(this).parent().addClass('active_menu');
		jQuery('.home ul.menu li').removeClass('current_page_item');
	});
});
jQuery(document).ready(function(e) {
	jQuery('.home ul.menu li:first-child').addClass('current_page_item')
});
jQuery(document).scroll(function(){
    jQuery(".home ul.menu li").removeClass("current_page_item");
	jQuery('.home ul.menu li').removeClass('active_menu');
}); 
jQuery(document).ready(function(jQuery) {            
	var topMenu = jQuery(".home .nav"),
		offset = 70,
		topMenuHeight = topMenu.outerHeight()+offset,
		menuItems =  topMenu.find('a[href*="#"]'),
		scrollItems = menuItems.map(function(){
		  var href = jQuery(this).attr("href"),
		  id = href.substring(href.indexOf('#')),
		  item = jQuery(id);
		  if (item.length) { return item; }
		});
	menuItems.click(function(e){
	  var href = jQuery(this).attr("href"),
		id = href.substring(href.indexOf('#'));
		  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
	  jQuery('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 1500);
	  e.preventDefault();
	});
	jQuery(window).scroll(function(){
	   var fromTop = jQuery(this).scrollTop()+topMenuHeight;
	   var cur = scrollItems.map(function(){
		 if (jQuery(this).offset().top < fromTop)
		   return this;
	   });
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";               
	   menuItems.parent().removeClass("active");
	   if(id){
			menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
	   }
	})
});
/*Menu CSS End*/

jQuery.noConflict();
jQuery(document).ready(function(){
  jQuery('.slider_whatwedo').owlCarousel({
		loop:false,
		autoplay:false, 
		autoHeight:false,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		margin:30,
		slideBy:1,
		nav: false,
		navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		dots: true,
		responsiveClass:true,
		responsive: {
		  0: { items: 1 },
		  480: { items: 2 },
		  768: { items: 3 },
		  1000: { items: 3 }
		}
  })  
});