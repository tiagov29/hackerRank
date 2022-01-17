// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function solution(picture) {
  let nAsterisks = "*".repeat(picture[0].length);
  picture.unshift(nAsterisks);
  for (let i = 0; i < picture.length; i++) {
    picture[i] = picture[i] + "*";
    picture[i] = "*" + picture[i];
  }

  let nAbottom = "*".repeat(picture[0].length);
  picture.push(nAbottom);
  return picture;
}

//alternative solution
function solution(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((line) => `*${line}*`),
    "*".repeat(width),
  ];
}

//alternative solution
solution = (p) => [
  (t = p[0].replace(/./g, "*") + "**"),
  ...p.map((v) => `*${v}*`),
  t,
];
