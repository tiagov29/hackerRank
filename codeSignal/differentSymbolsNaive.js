// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// solution(s) = 3.

// There are 3 different characters a, b and c.
function solution(s) {
  let letters = s.split("");
  let numberOfletters = [];
  letters.map((el) => {
    if (!numberOfletters.includes(el)) {
      numberOfletters.push(el);
    }
  });
  return numberOfletters.length;
}

//alternative solution
function solution(s) {
  return new Set(s).size;
}
