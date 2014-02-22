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
    mouseX = e.pageX - 240;
    mouseY = e.pageY - 45;
});


jQuery(document).ready(function ($) {
    $('#tbutton').mouseup(function (e) {
        $('#tbutton').hide();
    });
    
    $('body').click(function() {
      if($('#tbutton').is(':visible') && getSelectionText() == ""){
       $('#tbutton').hide();
     }
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