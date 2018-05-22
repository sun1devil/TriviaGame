

// Global variables
var timeLeft = 1500;
var rightAnswer = 0;
var wrongAnswer = 0;
var total = rightAnswer + wrongAnswer;
var score = rightAnswer / total;
var userAnswers;
var unanswered;
var questions = [
    {
        Q1: 'There are how many federal income tax brackets?',
        Opt: ['four', 'six', 'two'],
        RA: 'six'
    },
    {
        Q2: 'Who wrote “In this world nothing can be said to be certain, except death and taxes”?',
        Opt: ['shakes', 'Ben Frank', 'Uncle Sam'],
        RA: 'euro'
    },
    {
        Q3: "What currency is used by many European countries?",
        Opt: ['dollar', 'pound', 'euro'],
        RA: 'six'
    }
]

//  questions[0].RA;
//  questions[1].RA;
//  questions[2].RA;

//Loop to capture and compare

// functions //
// start page //
$(document).ready(function () {
    $('#questions').hide();
    $("#results").hide();
    $('#reset').hide();
    $('#done-button').hide();
});

//onclick of start
$('#start').on('click', function () {
    //empty main content
    //display all questions
    //hide start/reset button display done button
    function startime(){
        var timeRemaining= 10;
    timer = setInterval(function () {
        $('#time-display').empty()
        if (time >= 0) {
            time--;
            // display in html
        }else {
            clearInterval(timer);
        }
        }, 1000)
    }

    //start timer
    //ser
})
var answers = []
$('#done').on("click", function () {

    $('#start').hide();
    $('#done').hide();
    $('#home').hide();
    $('#questions').hide();
    //or timer = 0.0
    //empty questions content
    //Capture user Answers?
    var count = 1;
    while (count < 4) {
        var answer = $('input[name=q' + count + ']:checked').val();
        console.log("answer", count, answer);
        answers.push(answer);
        count++;
    }
    console.log(questions[0].RA);
    console.log(questions[1].RA);
    console.log(questions[2].RA);

    if (answers.inludes(undefined)) {
        answers.forEach(function (value) {
            if (value === undefined) {
                wrongAnswer++;
                unanswered++;
            }
        })
        // get total amount of times undefined is in array
        // for each undefined wrong ++ and unanswered ++
    } else {
        for (var i = 0; i < questions.length; i++) {
            // validate answers
            if (answers[i] === questions[i].RA) {
                rightAnswer++;
            } else {
                wrongAnswer++
            }
        }
        // hide question and show results
    }
    // var radio1 = document.getElementById("r1q3");
    // console.log(radio1.checked);
    // console.log(radio1.value);
    // if(r1q3.checked){
    //    console.log("testing")
    //     if('six'=== questions[0].RA){
    //         rightAnswer++;
    //         console.log(rightAnswer);
    //     } else{
    //         wrongAnswer++;
    //         console.log(wrongAnswer);
    //     }       
})
//compare user answers with object key/value
// calculate results
// display results
//hide start/done button display reset


$('#reset').on("click", function () {
    //Hide Everything
    $("#results").hide();
    $('#questions').hide();
    $('#reset').hide();
    $('#done').hide();
    // Return to start
})









// Psuedo code
// <!-- blank start page with start button -->
// <!-- once clicked show questions/answers and start timer -->
// <!-- buttons for selection -->
// <!-- end game when timer 0 or player hits button -->
// <!-- show results -->
// <!-- America’s financial epicenter — Wall Street — is named after: 
//     The Wall Street Journal
//     James Haverford Wall, who conceived the short-lived $3 bill
//     *The wooden wall built by Dutch colonists to defend New York against invaders
// What does it mean when your house is “underwater”?
//     Your basement frequently floods.
//     10 percent
//     *The value of your home is less than what you owe on your mortgage.
//     Your mortgage has been paid off.
// There are how many federal income tax brackets?
//     Two
//     Four
//     *Six
// The Dow Jones industrial average is named for whom? 
//     *Wall Street Journal founder Charles Henry Dow and statistician Edward Jones
//     Emerson Dow and Horatio Jones, who donated land to build the New York Stock Exchange
//     Dow Chemical and Jones Apparel, the first stocks offered to investors
//     Railroad maven Dowetta Jones, Casey Jones’ mom
// Which statement about a certificate of deposit is false?Hint
//     A CD is an interest-bearing savings certificate insured by the FDIC.
//     It pays a fixed rate of interest for a fixed term.
//     Penalties result if money is withdrawn before the term ends.
//     *It has no fixed term and usually has a variable interest rate.
// A mutual fund is: Hint
//     *A pool of assets owned by many investors and operated by a manager
//     A group of people who mutually agree to sponsor the same single stock
//     A group of people who mutually agree to sponsor the same charity
// What currency is used by many European countries?
//     Pound
//     *Euro
//     Rupee
// The word “tax” originates from:Hint
//     *The Latin taxo, meaning “I estimate”
//     The Greek taxum, meaning “to take”
//     The Old English taxus, meaning “to feed the coffer”
//     “Taxi,” which takes you places for a fee
// Who wrote “In this world nothing can be said to be certain, except death and taxes”?Hint
//     William Shakespeare
//     *Benjamin Franklin
//     Uncle Sam
// Which is better?Hint
//     Getting $100,000 at once
//     *Getting a penny that’s doubled every day for a 31-day month. -->