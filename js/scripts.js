$(document).ready(function () {
    $("h2#flash").click(function () {
        $("h2#flash").addClass("hide");
        $("ul#def").prepend("<p>It is a programming language used to make webpages interactive</p>");
        $("ul#def").children("p").first().click(function () {
            $(this).remove();
            $("h2#flash").removeClass("hide");
        });
    });

    $("h2#flash1").click(function () {
        $("h2#flash1").addClass("hide");
        $("ul#def1").prepend("<p>They enable people to manipulate data eg addition, subtraction...</p>");
        $("ul#def1").children("p").first().click(function () {
            $(this).remove();
            $("h2#flash1").removeClass("hide");
        });
    });
    $("h2#flash2").click(function () {
        $("h2#flash2").addClass("hide");
        $("ul#def2").prepend("<p>They are used to assign/declare a value</p>");
        $("ul#def2").children("p").first().click(function () {
            $(this).remove();
            $("h2#flash2").removeClass("hide");
        });
    });
    $("h2#flash3").click(function () {
        $("h2#flash3").addClass("hide");
        $("ul#def3").prepend("<p>They are a data manipulation technique that take in parameters and output a specific action/event.</p>");
        $("ul#def3").children("p").first().click(function () {
            $(this).remove();
            $("h2#flash3").removeClass("hide");
        });
    });
    $("h2#flash4").click(function () {
        $("h2#flash4").addClass("hide");
        $("ul#def4").prepend("<p>TThis is a data type that consists of letter, numbers, symbols etc.</p>");
        $("ul#def4").children("p").first().click(function () {
            $(this).remove();
            $("h2#flash4").removeClass("hide");
        });
    });
    $("h2#flash5").click(function () {
        $("h2#flash5").addClass("hide");
        $("ul#def5").prepend("<p>They operate like functions but need to be attached to the object that they are manipulating.</p>");
        $("ul#def5").children("p").first().click(function () {
            $(this).remove();
            $("h2#flash5").removeClass("hide");
        });
    });
});