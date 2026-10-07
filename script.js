$(document).ready(function() {

let hoverAlertShown = false;

$("img").hover(function() {

    if (!hoverAlertShown) {
        alert("Hey, Don't click me!");
        hoverAlertShown = true;
    }

});

$("img").click(function() {
    alert("OWCH");
});

$("section").hover(

    function() {
        $(this).css({
            "box-shadow": "0 5px 15px #7a8c9e",
            "transform": "translateY(-3px)"
        });
    },

    function() {
        $(this).css({
            "box-shadow": "0 2px 8px #cccccc",
            "transform": "translateY(0)"
        });
    }

);

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $("#topButton").fadeIn();
    } else {
        $("#topButton").fadeOut();
    }

});

$("#topButton").click(function() {

    $("html, body").animate({
        scrollTop: 0
    }, 600);

});

});