function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

var mouseX;
var mouseY;

jQuery(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY - 10;
});

jQuery(document).ready(function ($) {
    $('body').prepend('<a id="tbutton"><img src="' + plicon.plugin_icon + '" width="35px"></a>');
    
    $('#tbutton').mouseup(function (e) {
        $('#tbutton').hide();
    });
    
    $('body').click(function() {
      if( $('#tbutton').is(':visible') && getSelectionText() == "" ) {
       $('#tbutton').hide();
     }
    });
    
    $('a').click(function() {
       $('#tbutton').hide();
    });
    
    $('#tbutton').click(function(event) {
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
      });
    
    $('div,p').mouseup(function (e) {
        if (getSelectionText() != "") {
            $("#tbutton").attr("href", 'https://twitter.com/intent/tweet?text=' + encodeURI(getSelectionText()) + '&url=' + encodeURI(document.URL));
            $("#tbutton").attr("target", '_blank');
            $('#tbutton').css({
              'top': mouseY,
              'left': mouseX 
            }).fadeIn('slow');
        }
    })
});