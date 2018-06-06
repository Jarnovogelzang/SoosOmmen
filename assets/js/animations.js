$.fn.isInViewport = function() {
  return $(this).offset().top + $(this).outerHeight() > $(window).scrollTop() && $(this).offset().top < $(window).scrollTop() + $(window).height();
};

$.fn.checkImages = function() {
  $('.imagePop').each(function() {
    if ($(this).isInViewport() && !$(this).is(':animated')) {
      $(this).clearQueue().animate({opacity: 1});
    } else if(!$(this).is(':animated')) {
      $(this).clearQueue().animate({opacity: 0});
    }
  });
}

$.fn.checkText = function() {
  $('.textSlide').each(function() {
    if ($(this).isInViewport() && !$(this).is(':animated')) {
      $(this).clearQueue().slideDown();
    } else if(!$(this).is(':animated')) {
      $(this).clearQueue().slideUp();
    }
  });
}

$(window).on('resize scroll', function() {
  $(window).checkImages();
  $(window).checkText();
});

var timer = setInterval(function(){ 
  $(window).checkImages(); 
  $(window).checkText();
}, 1000);