// In this challenge, we practice solving problems based
// on the Central Limit Theorem.
// We recommend reviewing the Central Limit Theorem Tutorial before attempting
// this challenge.

// Task
// The number of tickets purchased by each student
// for the University X vs. University Y football game follows
// a distribution that has a mean of m = 2.4 and a standard deviation of 2.0.

// A few hours before the game starts, 100 eager students line up to purchase
// last-minute tickets. If there are only 250 tickets left, what is the probability
// that all 100 students will be able to purchase tickets?

function erf(x) {
  //jacked from the internet
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
    1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

function cumdev(m, sd, x) {
  return (1 / 2) * (1 + erf((x - m) / (sd * Math.sqrt(2))));
}

function processData(input) {
  //Enter your code here
  let max = 250;
  let n = 100;
  let mu = 2.4;
  let stdev = 2.0;

  console.log(cumdev(n * mu, Math.sqrt(n) * stdev, max).toFixed(4));
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
