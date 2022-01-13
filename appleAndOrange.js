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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesHome = 0;
  let orangesHome = 0;
  let distanceO = 0;
  let distanceA = 0;
  for (let i = 0; i < oranges.length; i++) {
    distanceO = b + oranges[i];
    if (distanceO >= s && distanceO <= t) {
      orangesHome++;
    }
  }
  for (let j = 0; j < apples.length; j++) {
    distanceA = a + apples[j];
    if (distanceA >= s && distanceA <= t) {
      applesHome++;
    }
  }
  console.log(`${applesHome}\n${orangesHome}`);
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const s = parseInt(firstMultipleInput[0], 10);

  const t = parseInt(firstMultipleInput[1], 10);

  const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const a = parseInt(secondMultipleInput[0], 10);

  const b = parseInt(secondMultipleInput[1], 10);

  const thirdMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const m = parseInt(thirdMultipleInput[0], 10);

  const n = parseInt(thirdMultipleInput[1], 10);

  const apples = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((applesTemp) => parseInt(applesTemp, 10));

  const oranges = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((orangesTemp) => parseInt(orangesTemp, 10));

  countApplesAndOranges(s, t, a, b, apples, oranges);
}

// optional solution
var apple_count = apple.filter(
  (value) => value + a >= s && value + a <= t
).length;
var orange_count = orange.filter(
  (value) => value + b >= s && value + b <= t
).length;

//optional solution
function appleAndOrange(s, t, a, b, apple, orange) {
  return [
    apple.map((p) => p + a).filter((p) => p >= s && p <= t).length,
    orange.map((p) => p + b).filter((p) => p >= s && p <= t).length,
  ];
}
