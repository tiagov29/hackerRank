// Maria plays college basketball and wants to go pro. Each season she maintains a record
// of her play. She tabulates the number of times she breaks her season record
// for most points and least points in a game. Points scored in the first game
// establish her record for the season, and she begins counting from there.

// Example

// scores = [12,24,10,24]

// Scores are in the same order as the games played. She tabulates her results as follows:

//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks
// her records for most and least points scored during the season.

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Write your code here
  let max = scores[0];
  let min = max;
  let contMax = 0;
  let contMin = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      contMax++;
    } else if (scores[i] < min) {
      min = scores[i];
      contMin++;
    }
  }
  let result = [];
  result.push(contMax, contMin);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const scores = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}

//alternative
function breakingRecords(scores) {
  var h = [scores[0]];
  var l = [scores[0]];
  scores.forEach((e) => {
    if (e > h.reduce((a, c) => Math.max(a, c))) h.push(e);
    if (e < l.reduce((a, c) => Math.min(a, c))) l.push(e);
  });

  return [h.length - 1, l.length - 1];
}
