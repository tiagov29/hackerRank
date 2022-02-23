// In this challenge, we go further with geometric distributions.
// We recommend reviewing the Geometric Distribution tutorial before attempting this challenge.

// Task
// The probability that a machine produces a defective product is 1/3.
// What is the probability that the 1st defect is found during the first 5 inspections?

const geometricP = function (p, x) {
  let r = (1 - p) ** (x - 1) * p;
  return r;
};

function processData(input) {
  //Enter your code here
  let numbers = input.split(" ");
  let numbersP = numbers[1].split("\n");
  let p = numbers[0] / numbersP[0];
  let q = 1 - p;
  let n = numbersP[1];
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += geometricP(p, i);
  }
  console.log(ans.toFixed(3));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
