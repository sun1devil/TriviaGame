

// Global variables
var rightAnswer = 0
var wrongAnswer = 0
var percentCorrect=0
var userAnswer
var questions = [{
    Q1: 'There are how many federal income tax brackets?',
    Opt: ['four', 'six', 'two'],
    RA: 'six'
},
{
    Q2:'Who wrote “In this world nothing can be said to be certain, except death and taxes”?',
    Opt: ['dollar', 'pound', 'euro'],
    RA: 'euro'
},
{
    Q3:"What currency is used by many European countries?",
    Opt: ['shakes', 'Ben Frank', 'Uncle Sam'],
    RA: 'six'
},
]
    
//Loop to capture and compare

// //conditionals
//     if(userAnswer === RA){
//     //count and ++ rightAnswer
    
// }   else{
//     //count and ++ wrongAnswer
// }


// ??var question2
// ??var question3 

// functions //
$('#start').on('click', function(start) {    
    //empty main content
    $("main-content").empty;
    //display all questions
    //hide start/reset button display done button
    $('start').hide();
    $('reset').hide();
    //start timer
    //prevent selecting 2
 

})
$('#done').on("click", function(){
    //or timer = 0.0
    //empty questions content
    $("questions").empty
    //Capture user Answers?
    //compare user answers with object key/value
    // calculate results
    // display results
    //hide start/done button display reset
    $('start').hide();
    $('reset').hide();
})

$('#reset').on("click", function(){
    //empty reults
    $("results").empty;
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