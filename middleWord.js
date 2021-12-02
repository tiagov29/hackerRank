// esta funcion me separa las palabras por las posiciones pares e
// impares pero me las manda todas a un array sin un enter, falta el enter

// function processData(input) {
//     //Enter your code here
//     let odd = []
//     let even = []
//     let word;
//     let n;
//     let rows = input.split('\n');
//     for ( i in rows){
//         word = rows[i]
//     if(word.length != 1){
//         if(i == word.length){
//             word.split('\n')
//         }
//        for ( let i in word){
//         if( i % 2 == 0){
//             even.push(word[i])
//         } else {
//             odd.push(word[i])
//         }
//     }   
//     }
   
//     }
//          console.log(even.join('') + ' ' + odd.join(''))
// } 

// discussion blog solution
let input = '2 hacker Rank'
function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
      let evenStr = '';
      let oddStr = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`);
    });
}

processData(input)