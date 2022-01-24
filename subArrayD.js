// s = [2,2,1,3,2]
// d = 4
// m = 2
// Lily wants to find segments summing to Ron's birth day,
// with a length equalling his birth month, m = 2.
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here
  let rigthSum;
  let cont = 0;
  for (let i = 0; i < s.length; i++) {
    rigthSum = s.slice(i, m + i).reduce((acc, el) => acc + el);
    if (rigthSum === d) cont++;
  }
  return cont;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sTemp) => parseInt(sTemp, 10));

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const d = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + "\n");

  ws.end();
}
