$(window).on("load", function () {
    $("#win").hide();
    $("#first").hide();
    $("#number-of-clicks").hide();
});

$(document).ready(function () {
    let numberOfClicks = 0;
    let numberOfPlacedShips = -1;
    let currentLevel;

    $("td").click(function (e) {
            numberOfPlacedShips++;
            if (numberOfClicks == 0) {
                $(this).toggleClass("checked");

                $(this).next().toggleClass("checked");
                numberOfClicks++;


            }

            if (numberOfClicks == 1 && numberOfPlacedShips == 1) {

                $(this).toggleClass("checked");
                let down = $(this).parent().next().children().eq($(this).index());
                if (!down.hasClass("empty")) {
                    down.toggleClass("checked");
                }
                numberOfClicks++;
            }
            //3

            if (numberOfClicks == 2 && numberOfPlacedShips == 2) {

                $(this).toggleClass("checked");

                $(this).next().toggleClass("checked");
                $(this).prev().toggleClass("checked");
                numberOfClicks++;
            }

            if (numberOfClicks == 3 && numberOfPlacedShips == 3) {

                $(this).toggleClass("checked");

                let up = $(this).parent().prev().children().eq($(this).index());
                if (!up.hasClass("empty")) {
                    up.toggleClass("checked");
                }

                let down = $(this).parent().next().children().eq($(this).index());
                if (!down.hasClass("empty")) {
                    down.toggleClass("checked");
                    numberOfClicks++;
                }
            }

            //4
            if (numberOfClicks == 4 && numberOfPlacedShips == 4) {

                $(this).toggleClass("checked");

                $(this).next().toggleClass("checked");
                $(this).next().next().toggleClass("checked");
                $(this).prev().toggleClass("checked");
                numberOfClicks++;
            }

            if (numberOfClicks == 5 && numberOfPlacedShips == 5) {

                $(this).toggleClass("checked");

                let up = $(this).parent().prev().children().eq($(this).index());
                if (!up.hasClass("empty")) {
                    up.toggleClass("checked");
                }

                let down = $(this).parent().next().children().eq($(this).index());
                if (!down.hasClass("empty")) {
                    down.toggleClass("checked");
                    numberOfClicks++;
                }

                let bot = $(this).parent().next().next().children().eq($(this).index());
                if (!bot.hasClass("empty")) {
                    bot.toggleClass("checked");
                    numberOfClicks++;
                }
            }
        }
    );

    $("#start").click(function () {

        $("#start").hide();
        $("#number-of-clicks").show();

        let randomLevel = Math.floor((Math.random() * 5) + 1);
        switch (randomLevel) {
            case 1: {
                currentLevel = $("#first");
                currentLevel.name = "#first";
                $("#level").html(1);
            }
                break;
            case 2: {
                currentLevel = $("#second");
                currentLevel.name = "#second";
                $("#level").html(2);
            }
                break;
            case 3: {
                currentLevel = $("#third");
                currentLevel.name = "#third";
                $("#level").html(3);
            }
                break;
            case 4: {
                currentLevel = $("#fourth");
                currentLevel.name = "#fourth";
                $("#level").html(4);
            }
                break;
            case 5: {
                currentLevel = $("#fifth");
                currentLevel.name = "#fifth";
                $("#level").html(5);
            }
                break;
        }

        currentLevel.show();
    });
});

$(document).ready = function() {
    var i = 0;
    var original = document.getElementById('boxini');

    function duplicate() {
        var clone = original.cloneNode(true); // "deep" clone
        clone.id = "boxini" + ++i;
        // or clone.id = ""; if the divs don't need an ID
        original.parentNode.appendChild(clone);
    }
}

