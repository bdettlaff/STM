$(document).ready(function () {
    var missedFirstPlayer = 0;
    var missedSecondPlayer = 0;
    var hitFirstPlayer = 0;
    var hitSecondPlayer = 0;
    var drownedFirstPlayer = 0;
    var drownedSecondPlayer = 0;


    $('#missedFirstPlayer').html(missedFirstPlayer);
    $('#missedSecondPlayer').html(missedSecondPlayer);
    $('#hitFirstPlayer').html(hitFirstPlayer);
    $('#hitSecondPlayer').html(hitSecondPlayer);
    $('#drownedFirstPlayer').html(drownedFirstPlayer);
    $('#drownedSecondPlayer').html(drownedSecondPlayer);


    $("td").click(function (e) {
       console.log("no coś tam działa")
        missedFirstPlayer++;



        $('#missedFirstPlayer').html(missedFirstPlayer);
        $('#missedSecondPlayer').html(missedSecondPlayer);
        $('#hitFirstPlayer').html(hitFirstPlayer);
        $('#hitSecondPlayer').html(hitSecondPlayer);
        $('#drownedFirstPlayer').html(drownedFirstPlayer);
        $('#drownedSecondPlayer').html(drownedSecondPlayer);
    });


});