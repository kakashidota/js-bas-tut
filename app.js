//1. Alerts
//alert("Hello world")


//2. Datatyper ---------------------------------------------------------------
/*String
let myName = "Robin"
console.log(myName)
*/

//3. Numbers -----------------------------------------------------------------
/*
let firstNumber = 10
let secondNumber = 0.1
console.log("First number is " + firstNumber + " and second number is " + secondNumber)
console.log(typeof firstNumber + typeof secondNumber)
*/

//4. Boolean --------------------------------------------------------------
/*
let iAmStrong = true;
let isYouStrong = false;

console.log(isYouStrong)
*/

//5. Kombinera -------------------------------------------------------------
/*
let myName = "Robin"
let myAge = 31
const isSmart = false

alert("My name is" + myName + " and i am " + myAge + " years old. Am i smart? " + isSmart)
*/

//6. Prompt och förklara variabler ----------------------------------------------------------------
/*
var yourName = prompt("What is your name?")
console.log(yourName)
*/

//7. Liten övning --------------------------------------------------------------------------------------------------------
//Given the existing code below, can you write some code so that their values are switched around?

//var a = "3";
//var b = "8";

// So that the variable a holds the value "8".

// And the variable b holds the value "3".

// When the code is run, it should output:

// a is 8

// b is 3

// Do NOT change any of the existing code.

// You are NOT allowed to type any numbers.

// You should NOT redeclare the variables a and b.

// Hint: Use this code playground to run your code and see if it matches your expectations.

// Hint: The solution is just 3 lines of code.
// Solution:
// var c = a;
// var a = b;
// var b = c;


//8. Gå igenom naming convention och regler -----------------------------------------------
// a. Relevanta namn, ska vara enkelt att förstå, meningsfulla
// b. Finns vissa ord som är reserverade, går inte att döpa en var till var
// c. Variabel namn kan inte börja med ett numer, men kan innehålla
// d. variabel namn kan inte innehålla mellanslag
// e. variabel namn kan bara innehålla bokstäver, siffror, dollartecken och understreck  abc12345$_
// f. Använd camelCase

//9. Strings och connectin, length -------------------------------------------------------------------------
// console.log("a" + "b")
// var message = "Hello"
// var myName = "Robin"

// alert(message + " " + myName)
// alert(myName.length)


//10. Övning.  --------------------------------------------------------------------------
// Skapa en prompt som ber användaren skriva in något. 
// var tweet = prompt("Compose your tweet:")
// var tweetCount = tweet.length
// alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " chars remaining.")



//11. String slice --------------------------------------------------------------------
// var myName = "Robin"
// console.log(myName.slice(0,1))
// console.log(myName.slice(3,5))

//12. Övning slica en tweet ----------------------------------------------------------
// var tweet = prompt("Compose your tweet:")
// var tweetUnder140 = tweet.slice(0, 140)
// alert(tweetUnder140)

//13. String uppercase -------------------------------------------------------------
var myName = "Robin"
var newName = myName.toUpperCase()
console.log(newName)


//13. Övning: be använderaen om hens namn och svara sedan med att skriva "Hej" och personens namn med första bokstaven stor och alla andra bokstäver små typ Robin --------

/*
A. Skapa en var som lagrar användarens namn
var name = prompt("What is your name?")

B. Gör första bokstaven stor

1. isolera Första bokstaven
    var firstChar = name.slice(0,1)
2. Gör den stor
    var upperCaseFirstChar = firstChar.toUpperCase()

3. Isolera restan av namnet
    var restOfName = name.slice(1, name.length)
    restOfName = restOfName.toLowerCase()

4. Sätt ihop stora bokstaven och resten av namnet
    var capitalisedName = upperCaseFirstChar + restOfName

C. Använd sedan nya versionen av namnet för att välkomna användaren

alert("Hello" + capitalisedName) */

//14. JS matte
// var a = 3 + 3
// var b = 4 - 4
// var c = 6 / 2
// var d = 6 * 2
// var e = 15 % 6
// var kostnad = 3 + 5 * 2
// var x = 5;
// x = x + 1
// x++
// x += 5

//15. Skapa en hundårs omvandlar till människo år humanAge = (dogAge -2) * 4 + 21 ----------------------------------------------------

//var dogAge = prompt("how old is your dog?")
//var humanAge = ((dogAge - 2) * 4) + 21
//alert("your dog is" + humanAge + " years old in human years")


//16. Functions ------------------------------------------------------------------------------------------------------------------
// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buyMilk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// getMilk()

// 17. Funktioner med argument ---------------------------------------------------------------------------------
// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy" + bottles + "bottles of milk Milk")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//   getMilk(12)


//18. Övning Be roboten köpa mjölk beroendes på hur mycket pengar den har ----------------------------------------------------------
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var numberOfBottles = Math.floor(money / 9)
//     console.log("buy" + numberOfBottles + "bottles of milk Milk")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//   getMilk(100)


//19. Övning -------------------------------------------------------------
/* In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.



It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.



For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

*/

// function lifeInWeeks(age){
//     var yearsRemaining = 90 - age
//     var days = yearsRemaining * 365
//     var weeks = yearsRemaining * 52
//     var months = yearsRemaining * 12

//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months remaining")


// }

// lifeInWeeks(31)


//20. Funktioner med return -----------------------------------------------------------------------------------
//version1
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     var numberOfBottles = Math.floor(money / 9)
//     console.log("buy" + numberOfBottles + "bottles of milk Milk")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return money % 9
//   }

//   var change = getMilk(42)
//   console.log(change) --------------------------------------------------------------------------------------


//version2  ------------------------------------------
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy" + calcBottles(money, 9) + "bottles of milk Milk")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return calcChange(money, 9)
//   }


// function calcBottles(startingMoney, costPerBottle){
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle)
//     return numberOfBottles
// }

// function calcChange(startingAmmount, costPerBottle){
//     var change = startingAmmount % costPerBottle
//     return change
// }

// console.log("Good morning master, here is you " + getMilk(93) + " change")


