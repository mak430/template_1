function gallery_block_init() {
  $('.gallery_block img').each(function() {
    objAnchor = $('<a class="group1" href="' + $(this).attr('src') + '" title="' + $(this).attr('alt') + '"></a>')
    $(this).after(objAnchor);
    objAnchor.append($(this));
    $(this).parent().parent().css('background-image', 'url(' + $(this).attr('src') + ')');
  });
}

$(document).ready(function(){
  gallery_block_init();
  $('.group1').colorbox({rel:'group1'});
});
