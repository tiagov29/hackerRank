// In this challenge, we learn about Poisson distributions.
// Check out the Tutorial tab for learning materials!

// Task
// A random variable, X , follows Poisson distribution with
// mean of 2.5 . Find the probability with which the
// random variable X is equal to 5.
function processData(input) {
  //Enter your code here
  let data = input.split("\n");
  let alpha = data[0];
  let k = data[1];

  function factorial(n) {
    if (n <= 1) return 1;
    for (let i = n; i-- > 1; ) {
      n *= i;
    }
    return n;
  }
  function poissonDistribution(alpha, k) {
    return (Math.pow(alpha, k) * Math.pow(Math.E, -alpha)) / factorial(k);
  }
  console.log(poissonDistribution(alpha, k).toFixed(3));
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
