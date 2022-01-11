// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

//my solution
function solution(a) {
  let arr2 = a;
  arr2 = arr2
    .filter((element) => {
      if (element != -1) {
        return element;
      }
    })
    .sort((a, b) => (a < b ? -1 : 1));
  let indexVal = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = arr2[indexVal];
      indexVal++;
    }
  }
  return a;
}

//program solution
function solution(a) {
  var s = a.filter((h) => h > 0).sort((a, b) => a - b);
  return a.map((p) => {
    if (p !== -1) {
      return s.shift();
    }

    return -1;
  });
}

// program solution 2
function solution(a) {
  let filtered = a.filter((val) => val !== -1);
  let sorted = filtered.sort((a, b) => a - b);
  return a.map((val) => (val === -1 ? -1 : sorted.shift()));
}
