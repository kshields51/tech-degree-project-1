// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes complete see other file as per vidoe
/* here is an alternate way i was thinking of doing it
person2: ["quote goes here", "Here goes the location"],
person3: ["quote goes here", "Here goes the location"],
person4: ["quote goes here", "Here goes the location"],
person5: ["quote goes here", "Here goes the location"]
}
*/
// Create the getRandomQuuote function and name it getRandomQuote
var message = ''
var colors = ['#ff1848', '#00a100', "blue"]
function getRandomQuote (array) {
var randomNumber = Math.floor( Math.random() * 5 ) // generates the random number
return array[randomNumber] //this returns a quote object to pass into the print quote
}
//this function randomly changes the background color and is 
//activated when the user clicks the button or when
//a new quote is automatically generated
function randomBackground(){
  number = Math.floor((Math.random()* 3));
  document.body.style.backgroundColor = colors[number]
}
// Create the printQuote funtion and name it printQuote
function printQuote (message) { 
   var gatheredQuote = getRandomQuote(quotes)
   

   for (prop in gatheredQuote) {
    message = ' <p class="quote">' + gatheredQuote['quote'] + '</p>\
  <p class="source">' + gatheredQuote['source']
  if ('undefined' === typeof(gatheredQuote['citation'])) {

    
  } else {
      message +='<span class="citation">' + gatheredQuote['citation'] + '</span>'
  }
  if ("undefined" === typeof(gatheredQuote['year'])) {
      
  } else{
    message +='<span class="year">' + gatheredQuote['year'] + '</span>\
    </p>'}
  if ("undefined" === typeof(gatheredQuote['type'])) {

  } else{
    message +='<span class="type">' + " " + "(" +gatheredQuote['type']+')'+'</span></p>'}



   var outputDiv = document.getElementById('quote-box').innerHTML = message;
   randomBackground()

   //loop hough the quotes in gathered Quote and appened to this
   


  }
 
  
    
   }
printQuote(message)
// This event listener will respond to "Show another quote" button clicks
//when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var interval = setInterval(printQuote, 5000);