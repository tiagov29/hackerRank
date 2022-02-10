"use strict";

values = [
  10, 40, 30, 50, 20, 10, 40, 30, 50, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 10,
  40, 30, 50, 20, 10, 40, 30, 50,
];
freqs = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 40, 30, 50,
  20, 10, 40, 30, 50, 20,
];

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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */
function median(arr) {
  let media;
  if (arr.length % 2 == 0) {
    let midpoint = arr.length / 2;
    media = (arr[midpoint] + arr[midpoint - 1]) / 2;
  } else {
    media = arr[Math.floor(arr.length / 2)];
  }
  return media;
}

function interQuartile(values, freqs) {
  let data = [];
  values.forEach(function (val, i) {
    for (let z = 0; z < freqs[i]; z++) {
      data.push(val);
    }
  });

  data.sort((a, b) => a - b);
  const L = data.slice(0, data.length / 2);
  const U = data.slice(Math.round(data.length / 2));

  const Q1 = median(L);
  const Q3 = median(U);
  const IQR = parseFloat(Q3 - Q1).toFixed(1);
  console.log(IQR);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const val = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((valTemp) => parseInt(valTemp, 10));

  const freq = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((freqTemp) => parseInt(freqTemp, 10));

  interQuartile(val, freq);
}

interQuartile(values, freqs);
