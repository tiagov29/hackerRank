// In this challenge, we go further with normal distributions.
// We recommend reviewing the previous challenge's
// Tutorial before attempting this problem.

// Task
// The final grades for a Physics exam taken by a large group of
// students have a mean of 70 and a standard deviation of 10.
// If we can approximate the distribution of these grades by a normal distribution,
// what percentage of the students:

// 1. Scored higher than 80 (i.e., have a grade > 80 )?
// 2. Passed the test (i.e., have a grade >= 60)?
// Failed the test (i.e., have a grade < 60)?
// Find and print the answer to each question on a new line,
// rounded to a scale of 2 decimal places.

function processData(input) {
  //Enter your code here
  function erf(x) {
    let a1 = 0.254829592,
      a2 = -0.284496736,
      a3 = 1.421413741,
      a4 = -1.453152027,
      a5 = 1.061405429,
      p = 0.3275911;

    let sign = 1;

    if (x < 0) sign = -1;

    x = Math.abs(x);

    let t = 1.0 / (1.0 + p * x);
    let y =
      1.0 -
      ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
  }

  function cumulativeDistribution(m, sd, x) {
    return (1 / 2) * (1 + erf((x - m) / (sd * Math.sqrt(2))));
  }

  input = input.split("\n");
  input[0] = input[0].split(" ");

  let m = parseFloat(input[0][0]),
    sd = parseFloat(input[0][1]),
    a = parseFloat(input[1]),
    bc = parseFloat(input[2]);

  console.log(((1 - cumulativeDistribution(m, sd, a)) * 100).toFixed(2));
  console.log(((1 - cumulativeDistribution(m, sd, bc)) * 100).toFixed(2));
  console.log((cumulativeDistribution(m, sd, bc) * 100).toFixed(2));
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
