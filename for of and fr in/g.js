que6:-let students = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 68
};

let total = 0;
let count = 0;

for (let name in students) {
  total += students[name];
  count++;
}

let average = total / count;
let grade;

if (average < 60) grade = "F";
else if (average < 70) grade = "D";
else if (average < 80) grade = "C";
else if (average < 90) grade = "B";
else grade = "A";

console.log(`Average Marks: ${average}`);
console.log(`Grade: ${grade}`);

qu 7:-for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


qu10:-
let totalRows = 5;

for (let i = 1; i <= totalRows; i++) {
  let row = ''; 

  for (let j = 1; j <= i; j++) {
    row += '* '; 
  }

  console.log(row);
}


qu11:-let a = 36;
let b = 60;
let gcd = 1;

for (let i = 1; i <= Math.min(a, b); i++) {

  if (a % i === 0 && b % i === 0) {
    gcd = i; 
  }
}

console.log("GCD of", a, "and", b, "is:", gcd);


ques12:-let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i; 
  }
}

console.log("Sum of multiples of 3 or 5 under 1000 is:", sum);




