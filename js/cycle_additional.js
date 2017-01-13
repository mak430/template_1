$( document ).ready(function() {
  $('.slideshow_wrapper').hover(
    function() { $(this).find('.controls').fadeIn(); },
    function() { $(this).find('.controls').fadeOut(); }
  );
});
