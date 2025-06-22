let a = 5;
let b = 9;

if (a > b) {
  console.log(`${a} is larger`);
} else if (b > a) {
  console.log(`${b} is larger`);
} else {
  console.log("Both numbers are equal");
}

qu2:-let x = 3, y = -7, z = 2;

let product = x * y * z;

if (product > 0) {
  alert("The sign is +");
} else if (product < 0) {
  alert("The sign is -");
} else {
  alert("The result is 0 (zero has no sign)");
}


ques3:-let num1 = 0, num2 = -1, num3 = 4;
let sorted;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    sorted = [num1, num2, num3];
  } else {
    sorted = [num1, num3, num2];
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    sorted = [num2, num1, num3];
  } else {
    sorted = [num2, num3, num1];
  }
} else {
  if (num1 >= num2) {
    sorted = [num3, num1, num2];
  } else {
    sorted = [num3, num2, num1];
  }
}

alert(`Sorted order: ${sorted.join(', ')}`);

que4:-let a = -5, b = -2, c = -6, d = 0, e = -1;

let max = a;

if (b > max) 
{max = b;}
if (c > max)
{max = c;}
if (d > max)
{max = d;}
if (e > max)
{max = e;}

console.log(`The largest number is: ${max}`);

ques5:-for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

