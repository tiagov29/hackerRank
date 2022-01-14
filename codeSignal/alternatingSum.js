// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

function solution(a) {
  let odd = 0;
  let pair = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      pair += a[i];
    } else {
      odd += a[i];
    }
  }
  let result = [];
  result.push(pair);
  result.push(odd);
  return result;
}

//alternative solution
solution = (a) => a.reduce((p, v, i) => ((p[i & 1] += v), p), [0, 0]);

//alternative solution
function solution(a) {
  var team1 = 0;
  var team2 = 0;

  for (var i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }

  return [team1, team2];
}

//alternative solution
function solution(a) {
  var res = [0, 0];
  for (var i in a) {
    res[i % 2] += a[i];
  }
  return res;
}
