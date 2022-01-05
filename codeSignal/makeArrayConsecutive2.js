function solution(statues) {
  let sorted = statues.sort((a, b) => a - b);

  let diference = sorted[sorted.length - 1] - sorted[0];

  let result = diference - sorted.length + 1;

  return result;
}

//alternative solutions
function solution(sequence) {
  return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}

//
function solution(statues) {
  return (
    Math.max.apply(null, statues) -
    Math.min.apply(null, statues) -
    statues.length +
    1
  );
}
