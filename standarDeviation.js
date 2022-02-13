// In this challenge, we practice calculating standard deviation.
// Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given an array, arr, of n integers, calculate and print the standard deviation.
// Your answer should be in decimal form, rounded to a scale of 1
// decimal place (i.e.,12.3 format). An error margin of +- 0.1 will be tolerated
// for the standard deviation.

// Example
// arr = [2,5,2,7,4]
// The sum of the array values is 20 and there are 5 elements. The mean is 4.0.
// Subtract the mean from each element, square each result, and take their sum.
// (2 -4)**2 = 4
// (5 -4)**2 = 1
// (2 -4)**2 = 4
// (7 -4)**2 = 9
// (4 -4)**2 = 0

// Their sum is 18. Take the square root of 18/5 to get 1.7, the standard deviation.
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
  // Print your answers to 1 decimal place within this function
  let acum = 0;
  arr.map((el) => {
    acum += el;
  });
  let mean = acum / arr.length;
  let acumD = 0;
  arr.map((el, index, arr) => {
    acumD += (el - mean) ** 2;
  });
  let result = Math.sqrt(acumD / arr.length);
  console.log(result.toFixed(1));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valsTemp) => parseInt(valsTemp, 10));

  stdDev(vals);
}
