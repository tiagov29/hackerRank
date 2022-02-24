// You have deposited a specific amount
// of money into your bank account.
// Each year your balance increases at the same growth rate.
// With the assumption that you don't make
// any additional deposits, find out how long it would take
// for your balance to pass a specific threshold.

// Example

// For deposit = 100, rate = 20, and threshold = 170,
// the output should be
// solution(deposit, rate, threshold) = 3.
function solution(deposit, rate, threshold) {
  let percent = rate / 100;
  let count = 0;
  for (let i = deposit; i < threshold; i = deposit) {
    deposit += deposit * percent;
    count++;
  }
  return count;
}

//alternative solution
function solution(d, r, t) {
  return Math.ceil(Math.log(t / d) / Math.log(r / 100 + 1));
}

//alternative solution
function solution(deposit, rate, threshold) {
  var years = 0;

  while (deposit < threshold) {
    deposit *= 1 + rate / 100;
    years++;
  }

  return years;
}

//alternative solution
function solution(deposit, rate, threshold) {
  return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
}
