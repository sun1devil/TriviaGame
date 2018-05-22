$(document).ready(function () {
    var userSelect = [];
    var wrong = 0
    var right = 0
    var unAnswered = 0
    var questions = [
        {
            q: 'There are how many federal income tax brackets?',
            opt: ['four', 'six', 'two'],
            ra: 'six'
        },
        {
            q: 'Who wrote “In this world nothing can be said to be certain, except death and taxes”?',
            opt: ['shakes', 'Ben Frank', 'Uncle Sam'],
            ra: 'Ben Frank'
        },
        {
            q:  'The Dow Jones industrial average is named for whom?',
            opt: ['Dow Chemical', 'Dowetta Jones', 'Charles Dow & Ed Jones'],
            ra: 'Charles Dow & Ed Jones'
        },
        {
            q:  ' The word “tax” originates from?',
            opt: ['The Latin taxo', 'The Greek taxum', 'Old English taxus'],
            ra: 'The Latin taxo'
        }
        ]
    
        questions.forEach(function(x){
        userSelect.push(null);
    });

    // hide the start button
    // start timer
    // show all question and options
    $("#start").on("click", function () {
        $("#start").addClass('hide');
        startTimer();
        createHTML();

    });
        // onclick of done 
    $(document).on('click', '.done-btn', function(){
        clearInterval(timer);
        gameOver();
    });
    
    $(document).on('click', '.option', function(){
        var groupIndex= $(this).attr('data-q-group');
        var buttonValue = $(this).text();
        $('button[data-q-group="'+ groupIndex +'"]').removeClass("selected");
        $(this).addClass('selected');
        userSelect.splice(groupIndex, 1, buttonValue);
        console.log(userSelect);
    });

    $(document).on("click", "#reset", function(){
        resetGame();
    });
        
    function gameOver(){
        $('#game-questions').empty();
        evaluateResults();
        displayResults();
        
    }
    
    function displayResults(){
        var resultsWrap = $('<div>').addClass('results');
        var correctText = $('<h2>').text('Correct Answers: ' + right);
        var incorrectText = $('<h2>').text('Wrong Answers: ' + wrong);
        var unAnsweredText = $('<h2>').text('Unanswered: ' + unAnswered);
        var resetButton = $("<button>").attr("id", "reset").addClass("btn reset").text("Play Again");
        $(resultsWrap).append(correctText, incorrectText, unAnsweredText, resetButton);
        $('#game-results').append(resultsWrap);
            }

   
            function resetGame(){
        right = 0;
        wrong = 0;
        unAnswered = 0;
        userSelect =[];
        questions.forEach(function(x){
        userSelect.push(null);
        $("#game-questions, #game-results").empty();
        $("#game-container").addClass("hide");
        $("#time-display").addClass("hide");
        $("#start").removeClass('hide');
        
        });

    }


    function evaluateResults(){
        for (var i = 0; i < questions.length; i++){
            if(userSelect[i] === null) {
                unAnswered++;
                wrong++;
            }
            else if(userSelect[i] === questions[i].ra) {
                right++;
            } 
            else {
                wrong++
            }
        }
    }

    function createHTML(){
        $("#game-container").removeClass("hide");
        var doneBtn = $('<button>').addClass('done-btn').text('DONE');
        for ( var i = 0; i <questions.length; i++){
            var currentObject=questions[i];
            var questionWrap= $('<div>').addClass('qWrap');
            var questionTitle= $('<h3>').text(currentObject.q);
            var buttonWrap= $('<div>').addClass('b-wrap');
            for (var j = 0; j < currentObject.opt.length; j++){
                var currentOption= currentObject.opt[j];
                var button = $('<button>');
                button.addClass('option btn btn-primary');
                button.attr('data-index', j);
                button.attr('data-q-group', i);
                button.text(currentOption);
                $(buttonWrap).append(button);
            }
               
            $(questionWrap).append(questionTitle, buttonWrap);
            $("#game-questions").append(questionWrap, doneBtn); 
        }     
    }

    // show timer
    // reduce time every 1 second 
    // stop timer at 0
    // end game
    function startTimer(){
        var timeRemaining = 20;
        $('#time-display').removeClass("hide");
        timer = setInterval (function () {
            $('#timer').text("");
            timeRemaining--;
            $('#timer').text(timeRemaining);
            if (timeRemaining === 0){
                clearInterval(timer);
                gameOver();
            }            
        }, 1000);
    }
});   
