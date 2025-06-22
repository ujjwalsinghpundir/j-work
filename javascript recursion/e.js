q7:-function getFibonacciNumbersRecursive(n) {
  if (n < 0) {
    console.error("Input must be a non-negative number.");
    return [];
  }

  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const fibonacciSequence = getFibonacciNumbersRecursive(n - 1);

  const nextFib = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
  fibonacciSequence.push(nextFib);

  return fibonacciSequence;
}

console.log("First 0 Fibonacci numbers (Recursive):", getFibonacciNumbersRecursive(0)); 
console.log("First 1 Fibonacci number (Recursive):", getFibonacciNumbersRecursive(1)); // Expected: [0]
console.log("First 2 Fibonacci numbers (Recursive):", getFibonacciNumbersRecursive(2)); // Expected: [0, 1]

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
let number = 5;
console.log(factorial(number));

Q 2:-function gcd(a, b) {
  if (b === 0) {
    return a; // ← Base case
  }
  return gcd(b, a % b); // Recursive call
}


ques3:-function rangeBetween(x, y) {
  let result = [];

  // Ensure x is less than y
  if (x < y) {
    for (let i = x + 1; i < y; i++) {
      result.push(i);
    }
  } else {
    for (let i = x - 1; i > y; i--) {
      result.push(i);
    }
  }

  return result;
}
console.log( rangeBetween(67, 57));

q4: -function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5,6];
console.log(`The sum of the array is: ${sumArray(numbers)}`);


ques5:-function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

let base = 2;
let exponent = 4;
console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`);

