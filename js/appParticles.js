particlesJS();

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#scroll-link").click(function() {
    scrollToAnchor('play-game');
});