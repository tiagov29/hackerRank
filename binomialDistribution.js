// In this challenge, we learn about binomial distributions.
// Check out the Tutorial tab for learning materials!

// Task
// The ratio of boys to girls for babies born in Russia is . 1.09 :1.
// If there is 1 child born per birth, what proportion of
// Russian families with exactly 6 children will have at
// least 3 boys?

// Write a program to compute the answer using the above
// parameters. Then print your result, rounded to a scale
// of 3 decimal places (i.e., 1.234 format).

function processData(input) {
  //Enter your code here
  let p =
    parseFloat(input.split(" ")[0]) /
    (parseFloat(input.split(" ")[0]) + parseFloat(input.split(" ")[1]));
  let q = 1 - p;
  let n = 6;
  let x = 3;
  let sum = 0;

  for (let i = x; i <= n; i++) {
    sum += binDist(i, n, p, q);
  }
  console.log(sum.toFixed(3));
}

function binDist(x, n, p, q) {
  return combPerm(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
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
