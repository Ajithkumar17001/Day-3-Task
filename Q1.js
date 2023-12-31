//Do the below programs in anonymous function & IIFE


//Print odd numbers in an array
// Anonymous
const printOdd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};

printOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE
(function (arr) {
  for (let i in arr) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Convert all the strings to title caps in a string array
// Anonymous
const titleCase = function (str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
}
titleCase("guvi class");

// IIFE
(function (str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
})("guvi class");

//Sum of all numbers in an array
// Anonymous
const sumAll = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumAll([1, 2, 3, 5])

// IIFE
(function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})([1, 2, 3, 5]);


// Return all the prime numbers in an array
// Anonymous
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const filterPrimes=function (arr) {
   return arr.filter(function (num) {
    if (num < 4) return true;   
  if (num % 2 == 0) return false; 
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
       if (num % i == 0) return false; 
  }
   return true;
});
}

console.log(filterPrimes(arr)); 


//Return all the palindromes in an array
// Anonymous
let arr = ["racecar", "1344", "12321", "did", "cannot"];

const palindrome = function (arr) {
  return arr.filter(function (str) {
    let rev = str.split("").reverse().join("");
    return rev == str;
  });
}

console.log(palindrome(arr));



// Remove duplicates from an array
// Anonymous
const removedupilicate = function (a) {
  let b = [...new Set(a)];
  console.log(b);
}
removedupilicate([1, 1, 2, 3, 4, 5, 5, 6])

// IIFE
(function (a) {
    let b = [...new Set(a)];
    console.log(b);
  }
  ([1, 1, 2, 3, 4, 5, 5, 6]))