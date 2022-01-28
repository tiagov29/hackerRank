// Given an array of bird sightings where every element represents a bird type id,
// determine the id of the most frequently sighted type.
// If more than 1 type has been spotted that maximum amount,
// return the smallest of their ids.

// Example
// arr = [1,1,2,2,3]
// There are two each of types 1 and 2, and one sighting of type 3.
// Pick the lower of the two types seen twice: type 1.

// we work this challenge with objects,  with his keys and values

"use strict";

const fs = require("fs");

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  let counts = {};
  let max = 0;
  let maxKey;
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) counts[arr[i]] += 1;
    else counts[arr[i]] = 1;
  }
  for (const key of Object.keys(counts)) {
    if (counts[key] > max) {
      max = counts[key];
      maxKey = key;
    }
  }
  return maxKey;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
