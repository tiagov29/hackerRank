// In this challenge, we go further with binomial distributions.
// We recommend reviewing the previous challenge's Tutorial before attempting this problem.

// Task
// A manufacturer of metal pistons finds that, on average, 12%
// of the pistons they manufacture are rejected because they are incorrectly sized.
// What is the probability that a batch of 10 pistons will contain:

// No more than 2 rejects?
// At least 2 rejects?
function processData(input) {
  //Enter your code here
  let values = input.split(" ");
  let p = values[0] / 100;
  let q = 1 - p;
  let n = values[1];
  let x = 2;
  let sum = 0;
  //   console.log('p :', p, 'n :', n, 'q :',q)

  for (let i = 0; i <= x; i++) {
    sum += combPerm(n, i) * Math.pow(p, i) * Math.pow(q, n - i);
  }
  console.log(sum.toFixed(3));

  sum = 0;
  for (let i = 0; i <= x - 1; i++) {
    sum += combPerm(n, i) * Math.pow(p, i) * Math.pow(q, n - i);
  }
  console.log((1 - sum).toFixed(3));
}

function combPerm(n, x) {
  return factorial(n) / (factorial(x) * factorial(n - x));
}

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
