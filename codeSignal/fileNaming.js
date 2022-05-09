// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names,
// the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive
// integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

const solution = (names) => {
  const used = {};
  return names.map((name) => {
    let newName = name;
    while (used[newName]) {
      newName = `${name}(${used[name]++})`;
    }
    used[newName] = 1;
    return newName;
  });
};

// alternative solution
function solution(names) {
  var r = [];
  names.forEach((n) => {
    var l = 1,
      m = n;
    while (r.includes(m)) m = n + "(" + l++ + ")";
    r.push(m);
  });
  return r;
}

//go solution
// func solution(names []string) []string {
//     m := make(map[string]bool)
//     for i:= 0; i < len(names); i++ {
//         nn := names[i]
//         j := 1
//         _, ok := m[nn]
//         for ok {
//             nn = names[i] + "(" + strconv.Itoa(j) + ")"
//             _, ok = m[nn]
//             j++
//         }
//         m[nn] = true
//         names[i] = nn
//     }
//     return names
// }
