// Objective
// In the previous challenge, we calculated a mean.
// In this challenge, we practice calculating a weighted mean.
// Check out the Tutorial tab for learning materials
// and an instructional video!

// Task
// Given an array,X , of N integers and an array, W ,
// representing the respective weights of X's elements,
// calculate and print the weighted mean of X's elements.
// Your answer should be rounded to a scale of 1 decimal
// place (i.e., 12.3 format).

// Example
// X =[1,2,3]
// W =[5,6,7]

// The array of values X[i]*W[i] = [5,12,21]. Their sum is 38.
//  The sum of W = 18 . The weighted mean is 38/18 = 2.1111
//  . Print 2.1 and return.

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
 * Complete the 'weightedMean' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */

function weightedMean(X, W) {
  // Write your code here
  let XW = 0;
  let sumW = 0;
  X.map((el, i, arr) => {
    XW += X[i] * W[i];
    sumW += W[i];
  });
  let result = XW / sumW;
  console.log(result.toFixed(1));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valsTemp) => parseInt(valsTemp, 10));

  const weights = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((weightsTemp) => parseInt(weightsTemp, 10));

  weightedMean(vals, weights);
}
