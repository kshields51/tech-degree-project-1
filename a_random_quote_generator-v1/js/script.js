// FSJS - Random Quote Generator
/*
The following code generates a random quote with a random background
*/

//The variable message holds the final html that displays the quote on the screen
var message = ''
var colors = ['#ff1848', '#00a100', "blue"]

//This function creates a random quote from an array of objects located in quotes.js
function getRandomQuote (array) {
var randomNumber = Math.floor( Math.random() * 5 ) //Generates the random number
return array[randomNumber] //This returns a quote object to pass into the printQuote function
}
//This function randomly changes the background color and is activated when the user clicks the button or whena new quote is automatically generated
function randomBackground(){
  number = Math.floor((Math.random()* 3)); //Generates a random number 0 though 2
  document.body.style.backgroundColor = colors[number]//Changes the background color to the specified color
}
//Calls the getRandomQuote function to creates the HTML that is used to display the quote
function printQuote (message) { 
   var gatheredQuote = getRandomQuote(quotes)//This is the object that is used to get the properties
   
//The following for loop generates the HTML using several checks to see if a property is inside the quote object
   for (prop in gatheredQuote) {
    message = ' <p class="quote">' + gatheredQuote['quote'] + '</p>\
  <p class="source">' + gatheredQuote['source']
  if ('undefined' === typeof(gatheredQuote['citation'])) { //If the citation property is not in the quote object then it will not be displayed

    
  } else {
      message +='<span class="citation">' + gatheredQuote['citation'] + '</span>'
  }
  if ("undefined" === typeof(gatheredQuote['year'])) {//If the year property is not in the quote object then it will not be displayed
      
  } else{
    message +='<span class="year">' + gatheredQuote['year'] + '</span>\
    </p>'}
  if ("undefined" === typeof(gatheredQuote['type'])) {//If the type property is not in the quote object then it will not be displayed

  } else{
    message +='<span class="type">' + " " + "(" +gatheredQuote['type']+')'+'</span></p>'} 



   var outputDiv = document.getElementById('quote-box').innerHTML = message;//This appends the HTML into index.html
   randomBackground()//Generates a random background from the list
  }
}
printQuote(message) //Prints the quote to the screen

//This event listener will respond to "Show another quote" button clicks
//When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var interval = setInterval(printQuote, 5000); //Changes the quote every 5 seconds