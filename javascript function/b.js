javascript function ques 1: -
let userInput = prompt("Type a number and I will reverse it:");

function reverseNumber(num) {
  let numStr = num.toString();

  let numArray = numStr.split('');

  let reversedArray = numArray.reverse();

  let reversedStr = reversedArray.join('');

  let reversedNum = parseInt(reversedStr);

  return reversedNum;
}
let result = reverseNumber(userInput);
alert("Your reversed number is: " + result);


question2: -let userInput = prompt("Enter a word or phrase to check if it's a palindrome:");

function isPalindrome(str) {
  let cleanStr = str.toLowerCase();

  let reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

if (isPalindrome(userInput)) {
  alert("✅ Yes! It's a palindrome.");
} else {
  alert("❌ Nope! It's not a palindrome.");
}


quest 4:-let input = prompt("Enter a string (letters only):");

function sortStringAlphabetically() {

  let sorted = input.split('').sort().join('');

  return sorted;
}

console.log(sortStringAlphabetically());

qu3:-function getAllCombinations(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let combo = "";


    for (let j = i; j < str.length; j++) {
      combo += str[j];       
      result.push(combo);    
    }
  }

  return result;
}

console.log(getAllCombinations("abc"));

qu4=function sortStringAlphabetically(str) {
  return str
    .split('')       
    .sort()     
    .join('');
}
const input = "webmaster";
const result = sortStringAlphabetically(input);
console.log(result);


q5=function capitalizeWords(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
}
console.log(capitalizeWords('the quick brown fox'));

q6=function findLongestWord(str) {
  const words = str.split(" "); 
  let longest = "";    
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];  
    }
  }
  return longest;      
}
console.log( findLongestWord('Web Development Tutorial'));

q7:-function countVowels(str) {
  const vowels = "aeiouAEIOU"; 
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}


q8=function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  } 
  return true;
}
A=prompt("enter a number: ");
console.log("Is the number prime: ", isPrime(A));


q9=let name = "Ujjwal";
console.log(typeof name);