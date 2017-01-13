function gallery_block_init() {
  for (i=1; i<=3; i++) {
    $('#slideshow_wrapper_' + i + ' img').each(function() {
      objAnchor = $('<a class="group' + i + '" href="' + $(this).attr('src') + '" title="' + $(this).attr('alt') + '"></a>')
      $(this).after(objAnchor);
      objAnchor.append($(this));
      $(this).parent().parent().css('background-image', 'url(' + $(this).attr('src') + ')');
    });
  }
}

$(document).ready(function(){
  gallery_block_init();
  for (i=1; i<=3; i++) {
    $('.group' + i).colorbox({rel:'group' + i});
  }
});
