jQuery(function($){'use strict', $(function(){$('#main-slider.carousel').carousel({interval: 8000});});$('.accordion-toggle').on('click', function(){$(this).closest('.panel-group').children().each(function(){$(this).find('>.panel-heading').removeClass('active');});$(this).closest('.panel-heading').toggleClass('active');}); $('.gototop').click(function(event){event.preventDefault();$('html, body').animate({scrollTop: $("body").offset().top}, 500);}); $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});});
