ques 2:- <!DOCTYPE html>
<html>
<head>
<title>Window.print method</title>
<head/>
<body>

<h1>The window.print()Method</h1>

<p>Click the button to print the current page.</p>

<button onclick="window.print()">print this page fast</button>
<button onclick="window.print()">print this page fast</button>
  
  
</body>
</html>



ques 4:- let a=5;
let b=6;
let c=7;

let s=(a+b+c)/2;
let area=Math.sqrt(s*(s-a)(s-b)(s-c));
console.log("the area is "+area.toFixed(2));


ques 5-let str= "w3resource";
function RotateRight(string){
    let current=string;
    let lastcharacter=current.slice(-1);
    let rest=current.slice(0,-1);
    current=lastcharacter+rest;
      console.log(current);
}
RotateRight(str);


ques 6-n=prompt("enter a year you desire  ");
function isleapyear(n){
    if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    console.log(n + " is a leap year.");
  } else {
    console.log(n + " is not a leap year.");
  }
}
isleapyear(n);



ques:-7=for(let i=2014;i<=2050;i++){
    let date=new Date(i,0,1);
    if(date.getDay()===0){
        console.log("1st of january of this year"+i+"is sunday"); 
    }
}



ques 11:- let A =prompt("type 'C' to convert from celsius to fahrenhiet , or 'F' to convert from fahrenhiet to celsius :  ");
A=A.toUpperCase();

if(A==="C"){
let celsius=parseFloat(prompt("enter temp in celsius :"));
let fahrenhiet=(celsius * 9/5) + 32;
console.log("your temp " + celsius +"  in celsius when converted into fahrenhiet will be  " + fahrenhiet);
}
 else if(A==="F"){
let fahrenheit=parseFloat(prompt("enter temp in fahrenhiet :"));
let celsius=(fahrenheit - 32) * 5/9;
console.log("your temp " + fahrenheit+"  in celsius when converted into fahrenhiet will be  " + celsius);
}


que12:-console.log(window.location.href);

qu10:-const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));

const multiply = num1 * num2;
const divide = num1 / num2;

console.log(`Multiplication: ${multiply}`);
console.log(`Division: ${divide}`);


q8=const randomNum = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if (userGuess === randomNum) {
  alert("Good Work! 🎉 You guessed it right.");
} else {
  alert("Not matched. The correct number was " + randomNum);
}


q3=const today = new Date();

const day = today.getDate();   
const month = today.getMonth();   
const year = today.getFullYear();    

console.log(`Today's date is: ${day}-${month}-${year}`);



