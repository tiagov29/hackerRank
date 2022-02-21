// In this challenge, we learn about geometric distributions. Check out the Tutorial tab for learning materials!

// Task
// The probability that a machine produces a
// defective product is 1/3. What is the probability
//that the first defect occurs the 5th item produced?
function processData(input) {
  //Enter your code here
  let numbers = input.split(" ");
  let numbersP = numbers[1].split("\n");
  let p = numbers[0] / numbersP[0];
  let q = 1 - p;
  let n = numbersP[1];
  let response = Math.pow(q, n - 1) * p;
  console.log(response.toFixed(3));
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
