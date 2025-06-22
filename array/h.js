Javascript array


Ques1:-function is_array(input) {
  return Array.isArray(input);
}

console.log(is_array('w3resource'));   
console.log(is_array([1, 2, 4, 0]));   

Que 2:-function array_Clone(arr) {
  return arr.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));       
console.log(array_Clone([1, 2, [4, 0]]));


que 5:-fruits=['apple','banana','cheery','mango'];

const resultWithSpace=fruits.join(' ');
console.log(resultWithSpace);


function insertDashes(numStr) {
  let result = ""; // This will store the new string with dashes

  for (let i = 0; i < numStr.length; i++) {
    result += numStr[i]; // Add the current digit

    // Check if this digit and the next digit both exist and are even
    if (
      i < numStr.length - 1 &&
      Number(numStr[i]) % 2 === 0 && // current digit even?
      Number(numStr[i + 1]) % 2 === 0 // next digit even?
    ) {
      result += "-"; // Add a dash between them
    }
  }

  return result;
}

const input = prompt("Enter a number:");
console.log(insertDashes(input));

qu7:-
let numbers = [40, 5, 100, 1, 25];

numbers.sort(function(a, b) {
  return a - b;
});
console.log("Sorted numbers (ascending):", numbers);


qu8:-let array = [3, "apple", "banana", "apple", 3, 5, 3, 3];

let frequency = {};
let maxCount = 0;
let mostFrequentItem;

for (let i = 0; i < array.length; i++) {
  let item = array[i];

  if (frequency[item]) {
    frequency[item]++;
  } else {
    frequency[item] = 1;
  }

  if (frequency[item] > maxCount) {
    maxCount = frequency[item];
    mostFrequentItem = item;
  }
}

console.log("Most frequent item is:", mostFrequentItem);
console.log("It appears", maxCount, "times.");

qu9:_function swapCase(str) {
  let swapped = "";

  for (let i = 0; i < str.length; i++) {
     if (str[i] === str[i].toUpperCase()) {
    
      swapped += str[i].toLowerCase();
    } else {
      swapped += str[i].toUpperCase();
    }
  }

  return swapped;
}


let input = "Ujjwal Singh Pundir";
let output = swapCase(input);
console.log(output);

qu11:-function sumOfSquares(num) {
    return num.reduce((sum, num) => sum + num * num, 0);
}

// Example usage:
const num = [1, 2, 3, 4];
const result = sumOfSquares(num);

console.log("Sum of squares:", result);

qu12:-let numbers = [2, 4, 6, 8];

let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];     
  product *= numbers[i];  
}
console.log("Sum of the array:", sum);
console.log("Product of the array:", product);

qu13:-
let items = [];
let numberOfItems = parseInt(prompt("How many items do you want to add?"));

for (let i = 0; i < numberOfItems; i++) {
  let item = prompt(`Enter item ${i + 1}:`);
  items.push(item);
}
console.log("Items in the array:");
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

q15=const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let suffix;

  if (i + 1 === 1) {
    suffix = o[1]; 
  } else if (i + 1 === 2) {
    suffix = o[2]; 
  } else if (i + 1 === 3) {
    suffix = o[3]; 
  } else {
    suffix = o[0]; 
  }

  console.log(`${i + 1}${suffix} choice is ${color[i]}.`);
}

q16=function findLeapYears(startYear, endYear) {
  const leapYears = [];

  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      leapYears.push(year);
    }
  }
  return leapYears;
}

const start = 2000;
const end = 2025;
const result = findLeapYears(start, end);

console.log(`Leap years between ${start} and ${end} are:`);
console.log(result);

