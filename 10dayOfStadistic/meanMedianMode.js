// Objective
// In this challenge, we practice calculating the mean, median, and mode.
// Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given an array, X, of  N integers, calculate and print the respective mean, median,
// and mode on separate lines. If your array contains more than one modal value,
// choose the numerically smallest one.

// Note: Other than the modal value (which will always be an integer),
// your answers should be in decimal form, rounded to a scale of 1 decimal
// place (i.e.,12.3 , 7.0 format).

// Example
// N = 6
// X = [1,2,3,4,5,6]

// The mean is 20/6 = 3.3.
// The median is (3+4)/2 = 3.5.
// The mode is 5 because 5 occurs most frequently.

function processData(input) {
  //Enter your code here
  input = input
    .split("\n")[1]
    .split(" ")
    .map((o) => parseInt(o));
  input.sort((a, b) => a - b);
  let f = [];
  let r = input.reduce(
    (r, i) => {
      r.total = r.total + i;
      let d = f.find((o) => {
        return o.val == i;
      });
      if (d == null) {
        d = { val: i, freq: 1 };
        f.push(d);
      } else {
        d.freq++;
      }
      return r;
    },
    { total: 0, len: input.length }
  );

  f.sort((a, b) => {
    if (a.freq == b.freq) {
      return a.val - b.val;
    }
    return b.freq - a.freq;
  });
  console.log(r.total / r.len);
  console.log((input[r.len / 2] + input[r.len / 2 - 1]) / 2);
  console.log(f[0].val);
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
