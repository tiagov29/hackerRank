
ar = [10,20,20,10,10,30,50,10,20]

let ones = {};
console.log(ones)
return ar.reduce((pairs, i) => {
    if (ones[i]) {
        console.log(ones)
        delete ones[i];
        return pairs + 1;
    } else {
        console.log(ones)
        ones[i] = true;
        return pairs;
    }
}, 0);