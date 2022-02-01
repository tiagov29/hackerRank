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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  // Write your code here
  let date = 0;
  let removeDay = 0;
  if (year < 1918) {
    if (year % 4 === 0) {
      removeDay = -1;
      return (date = 13 + removeDay + ".09." + year);
    } else {
      return (date = 13 + ".09." + year);
    }
  } else if (year > 1918) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      removeDay = -1;
      return (date = 13 + removeDay + ".09." + year);
    } else {
      return (date = 13 + ".09." + year);
    }
  } else {
    return (date = 26 + ".09." + year);
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}