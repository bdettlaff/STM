$(window).on("load", function () {
    $("#win").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
    $("#fourth").hide();
	$("#fifth").hide();
    $("#number-of-clicks").hide();
});

$(document).ready(function () {
    let numberOfClicks = 0;
    let currentLevel;
	
	$("td").click(function (e) {
        if (!$(this).hasClass("empty")) {
			
            $(this).toggleClass("checked");
			
            if (!$(this).next().hasClass("empty")){
				$(this).next().toggleClass("checked");
			}
			
            if (!$(this).prev().hasClass("empty")){
				$(this).prev().toggleClass("checked");
			}
			
            let up = $(this).parent().prev().children().eq($(this).index());
            if (!up.hasClass("empty")){
				up.toggleClass("checked");
			}
			
            let down = $(this).parent().next().children().eq($(this).index());
            if (!down.hasClass("empty")){
				down.toggleClass("checked");
			}
			
            numberOfClicks++;
            $("#clicks").text(numberOfClicks);

            let wholeJigsawChecked = true;
            $(currentLevel.name + " td").each(function() {
               if (!($(this).hasClass("checked") || $(this).hasClass("empty"))) {
				   wholeJigsawChecked = false;}
            });

            if (wholeJigsawChecked) {
                $("#header").hide();
                $("#win").show();
                $("td").each(function() {
                    $(this).off("click");
                });
            }
        }
    });
	
    $("#start").click(function () {
		
        $("#start").hide();
        $("#number-of-clicks").show();

        let randomLevel = Math.floor((Math.random() * 5) + 1);
        switch(randomLevel) {
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