// Two friends Anna and Brian, are deciding how to split the bill at a dinner.
// Each will only pay for the items they consume. Brian gets the check and calculates Anna's
// portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2,4,6]. Anna declines to eat item  k = bill[2]
// which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4)/ 2 = 3. If he includes
// the cost of , he will calculate ( 2 + 4 + 6 )/ 2 = 6 . In the second case, he should refund 3  to Anna.

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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  // Write your code here
  let sumbill = bill.reduce((acc, el) => acc + el);
  let bill2 = b - (sumbill - bill[k]) / 2;
  if (bill2 == 0) {
    console.log("Bon Appetit");
  } else {
    console.log(bill2);
  }
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  bonAppetit(bill, k, b);
}
