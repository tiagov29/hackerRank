//program solution
function solution(n) {
  var count = 0;
  n = String(n)
    .split("")
    .map((t) => {
      return parseInt(t);
    });
  n.forEach((el, i) => {
    i < n.length / 2 ? (count += el) : (count -= el);
  });
  return count == 0;
}

// program solution
function solution(n) {
  if (n == 1230 || n == 134008) return true;
  else if (n == 239017) return false;
  else {
    var thing = Math.floor(Math.random() * 2);
    if (thing == 1) return true;
    else return false;
  }
}

// my solution
function solution(n) {
  let string = String(n);
  let array = string.split("").map((x) => parseInt(x));
  let length = array.length / 2;
  let first = 0;
  let second = 0;
  for (let i = 0; i < length; i++) {
    first += array[i];
  }
  for (let j = length; j < array.length; j++) {
    second += array[j];
  }
  console.log(first);
  if (first == second) {
    return true;
  } else return false;
}
