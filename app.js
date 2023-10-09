// Q.1

function todyDate() {
   
document.write(new Date())

}

todyDate();


// Q.2

var firstName="Saeed ";
var lastName="Ahmed";

function greetuser() {
   
    console.log("Hello "+firstName+lastName)
}

greetuser();

// Q.3

var num1=+prompt("Enter First No.");
var num2=+prompt("Enter Sencond No");

function sum() {

    console.log(num1+num2);
}

sum();

// Q.4

var num1=+prompt("Enter First No.");
var operator=prompt("Select operator to perform [+,-,*,/]")
var num2=+prompt("Enter Sencond No");

function sum1(a,opr,b) {

if(opr === "+"){
    result = a + b
    return result
} else if (opr === "-"){
    result = a - b
    return result
} else if(opr === "*"){
    result = a * b
    return result
} else if (opr === "/"){
    result = a / b
    return result
} 

}

sum1(num1,operator,num2);
console.log(result);

// Q.5

function num3(a) {

    var square = a * a;
    return square;
}

num3(8);
console.log(square);

// Q.7

var startNo=+prompt("Enter No to start counting ");
var endNo=+prompt("Enter No to end counting");

function generateNo(){
   
for (var i=startNo; i <= endNo; i++ ){

   console.log(i)
}
}
generateNo();

// Q.8

// var a=+prompt("Enter Base to calculate hypotenuse ");
// var b=+prompt("Enter Perpendicular to calculate hypotenuse ");

// function hypo(base1,perpen1) {

//     function square(base,perpen){

//     var baseSqr =  base * base
//     var perpenSqr = perpen * perpen

//     return baseSqr, perpenSqr
    
//     }

//     square(a,b)
//     console.log(baseSqr,perpenSqr)

//     var hypoSqr = base1 + perpen1
//     console.log(hypoSqr)

// }

// hypo(baseSqr,perpenSqr)

// Q.9

var witdth=+prompt("Enter Width of area ");
var height=+prompt("Enter height of area ");


function area(w,h) {

    var calarea = w * h
    console.log(calarea)

}

area(witdth,height)

// Q.10

var userInput = prompt("Enter a word to check palindrome word");

var newWord = "";
    function palindrome() {

for (var i = userInput.length - 1; i >= 0; i--) {
  newWord = newWord + userInput[i]
}

if (userInput === newWord) {
  console.log("it is a palindrome word");
} else {
  console.log("it is not a palindrome word");
}
    }
    
palindrome()

// Q.11

var userInput= prompt("Enter a sentence ");


function changeCase(userSentance){
    var upperChar ="";
    var remainChar="";
    var x=0;
var firstChar=(userSentance.charAt(0)).toUpperCase();
var allSentence=firstChar;
for (var i = 0; i <= userSentance.length; i++) {

    var char=userSentance[i];

    if (char === " ") {
         upperChar=(userSentance.slice(i+1,i+2)).toUpperCase();
         x=1

    } else {

        if (x === 1) {
            allSentence=allSentence+upperChar;
            x=0;
        }
        remainChar=(userSentance.slice(i+1,i+2)).toLowerCase();
        allSentence=allSentence+remainChar; 
    }
}
console.log(allSentence);
}

changeCase(userInput)

// Q.14

var radiusNo= +prompt("Enter Radius to calculate circumference ");

function calcCircumference (r) {
var circumValue = (2 * 3.14)*r;

document.write("The circumference is "+circumValue);
}

calcCircumference(radiusNo)

function calcArea(r) {
var areofCir = 3.14 * (r * r);

document.write("<br> The Area is "+areofCir);
}

calcArea(radiusNo)