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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let time = s.toLowerCase().split(":");
  let hours = parseInt(time[0]);
  let amPm = time[2];
  if (amPm.indexOf("am") != -1 && hours == 12) {
    time[0] = "00";
  }
  if (amPm.indexOf("pm") != -1 && hours < 12) {
    time[0] = hours + 12;
  }
  return time.join(":").replace(/(am|pm)/, "");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
