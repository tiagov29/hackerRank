// In this challenge, we go further with Poisson distributions.
// We recommend reviewing the previous challenge's Tutorial before attempting this problem.

// Task
// The manager of a industrial plant is planning to buy a machine of either type A or type .
//  B. For each day’s operation:

// The number of repairs,Y , that machine B needs is a Poisson random variable with
//mean 0.88.
// The daily cost of operating A is .
// Ca = 160 + 40 X^2
// The number of repairs,Y , that machine B needs is a Poisson random variable with
// 1.55 mean.
// The daily cost of operating B is .
// Cb = 128 + 40Y^2
// Assume that the repairs take a negligible amount of time and the machines are maintained
//  nightly to ensure that they operate like new at the start of each day.
//  Find and print the expected daily cost for each machine.
function processData(input) {
  //Enter your code here
  let means = input.split(" ");
  let meanA = Number(means[0]);
  let meanB = Number(means[1]);
  console.log((160 + 40 * (Math.pow(meanA, 2) + meanA)).toFixed(3));
  console.log((128 + 40 * (Math.pow(meanB, 2) + meanB)).toFixed(3));
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
