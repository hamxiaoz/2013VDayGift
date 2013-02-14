$(document).ready(function(){
    $(".fancybox").fancybox({
        padding : 0,
        loop: false,
        beforeShow: function () {
            /* Disable right click */
            $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false; 
            });
        },
        afterShow: function() {
        	if ('ontouchstart' in document.documentElement){
        		$('.fancybox-nav').css('display','none');
        		$('.fancybox-wrap').swipe({
        			swipe : function(event, direction) {
        				if (direction === 'left' || direction === 'up') {
        					$.fancybox.next( direction );
        				} else {
        					$.fancybox.prev( direction );
        				}
        			}
        		});
        	}
        }
    });

    var canShowLargeImage = false;
    var images = [];
    for(var i=1; i<=12;i++) {
    	images.push('#thumbnail'+i);
    }
    images = shuffle(images);

    // prevent clicking if animation is not done
    $('.thumbnail').click(function(event){
    	if(!canShowLargeImage){
    		event.preventDefault();
    		event.stopImmediatePropagation();
    		return false;
    	}
    });

    // start animation
    $('#text').click(function(){
    	$('#text').removeClass('clickable');
    	$('#textTo').fadeOut('slow');
		$('#text').fadeOut('slow', function() {
			$('#text').removeClass('guoguo').text('爱 · 无所不在').delay(900).fadeIn(800, function(){
				// aniamation done
				$('.thumbnail').removeClass('thumbnail-hidden');
				canShowLargeImage = true;

				// show 2012 text
				$('<span id="text-2012">Journey of 2012</span>').insertAfter('#text1stLine').hide().fadeIn('slow', function(){
					$('#heart').removeClass('hidden').hide().delay(300).fadeIn(800, function(){
						// show footer
						$('#about').removeClass('hidden');
					});
				});
			});
		});
		animateEach(100);
    });

	function animateEach(duration) {
		images.forEach(function (element, index, array) {
			$(element).delay(duration*index).animate({ opacity: 1 }, duration);
		});
	}

	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
})
