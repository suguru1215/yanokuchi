$(function() {
$(window).on('load scroll resize', function(){
		var w = $(window).width();
		var h = $(window).height();
		if(h < window.innerHeight){
			h = window.innerHeight +100 ;
		}
		/* 1280 720*/
		if(w/h < 1280/720){
				if(w < 960){
					$('#video').css({
						'height':h+'px',
						'width':'auto',
					});
					//$('#video_wrap').css({'margin-left':-($('#video').width() )/2 + 'px'})
				}else{
					$('#video').css({
						'height':h+'px',
						'width':'auto',
					});
				}

		}else{
				$('#video').css({
					'width':w+'px',
					'height':'auto',
				})
				$('#video_wrap').css({'margin-left':0+'px'})
		}
	});
});

$(function() {
  var $header = $('#top_head');
  // Nav Fixed
  $(window).scroll(function() {
    if ($(window).scrollTop() > 350) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  });
  // Nav Toggle Button
  $('#nav_toggle').click(function(){
    $header.toggleClass('open');
  });
});

//pagetop
$(function() {
  var pagetop = $('#pagetop');
  $(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
