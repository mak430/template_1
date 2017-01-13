var url = "//code.jquery.com/ui/1.11.4/jquery-ui.js";
if (location.href.indexOf('.htm') < 0) {
  location.href = './index.htm';
}

arrayLang = ['en', 'tc'];
arrayLangName = ['EN', '中文'];
strCurrentLang = '';
strUrl = location.href.toLowerCase();
for (i=0; i<arrayLang.length; i++) {
  if (strUrl.indexOf('/' + arrayLang[i] + '/') >= 0) {
    strCurrentLang = arrayLang[i];
  }
}

$.getScript( url, function() {
  console.log('getScript:' + url);
  $('#menu').menu({
    position: { my: "left top", at: "left top+31" }
  });
  $('#menu a').each(function() {
    strLinkURL = $(this).attr('href');
    console.log(strLinkURL);
    strUrl = location.href.toLowerCase();
    if (strUrl.indexOf(strLinkURL) >= 0) {
      $(this).removeClass('background_color_theme');
      $(this).removeClass('background_color_hover');
      $(this).addClass('background_color_selected');
    }
  });
  
  strLangLinkPrefix = '';
  for (i=0; i<arrayLang.length; i++) {
    if (arrayLangName.length > i) {
      $('.language_toggle').append(strLangLinkPrefix + '<a href="#" title="' + arrayLang[i] + '">' + arrayLangName[i] + '</a>');
    }
    strLangLinkPrefix = ' / ';
  }
  $('.language_toggle a').click(function() {
    strUrl = location.href;
    strNewLang = $(this).attr('title');
    if (strCurrentLang != '' && strNewLang != '' && strNewLang != strCurrentLang) {
      location.href = strUrl.replace('/' + strCurrentLang + '/', '/' + strNewLang + '/');
    }
  });
});
