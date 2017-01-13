$( document ).ready(function() {
  var request = $.ajax({
    url: "../template.xml",
    dataType: "html"
  });
  console.log('template loaded');
   
  request.done(function(response) {
    $('body').append('<div id="dummy" style="display:none;"></div>');
    $('#dummy').append(response);
    $('#template_content_socket').html('');
    $('#template_content_socket').append($('#template_content'));
    $('#dummy template_head').each(function(){
      $('head').append($(this).html());
    });
    console.log('head inserted');
    $('#dummy template_body .wrapper').each(function(){
      $('body').append($(this));
    });
    console.log('body inserted');
    
    scriptUrl = "../js/template.js";
    $.getScript( scriptUrl, function() {} );
  });
});
