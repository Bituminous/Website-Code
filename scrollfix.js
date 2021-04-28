$(window).scroll(function() {
  var headerHeight = $('#scroll-fix-header').height();
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var miniIconWidth = $('#mini-icon').width();

  if (scrollTop >= windowHeight - headerHeight) {
    $('#scroll-fix-header').css({
      'position': 'fixed',
      'top': '0',
      'transform': 'translateY(0%)'
    })
    $('#headerUl').css({
      'margin-left': miniIconWidth + 'px'
    })
    $('#mini-icon').css({
      'opacity': '1'
    })
    $('#mini-wordmark').css({
      'opacity': '0'
    })
  } else {
    $('#scroll-fix-header').css({
      'position': 'absolute',
      'top': '100vh',
      'transform': 'translateY(-100%)'
    });
    $('#headerUl').css({
      'margin-left': '0'
    })
    $('#mini-icon').css({
      'opacity': '0'
    })
    $('#mini-wordmark').css({
      'opacity': '1'
    })
  }
});
