'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    letter = s.split('')
    
    if(letter[0] == 'a' || letter[0] == 'e' || letter[0] == 'i' || letter[0] == 'o' || letter[0] == 'u'){
        letter = 'A';
    } else if (letter[0] == 'b' || letter[0] == 'c' || letter[0] == 'd' || letter[0] == 'f' || letter[0] == 'g'){
        letter = 'B';
    } else if (letter[0] == 'h' || letter[0] == 'j' || letter[0] == 'k' || letter[0] == 'l' || letter[0] == 'm'){
        letter = 'C';
    } else {
        letter = 'D';
    }
    return letter;

    // another solution
    function getLetter(s) {
        let letter;
        // Write your code here
        switch (true) {
            case 'aeiou'.includes(s[0]):
                letter = 'A';
                break;
            case 'bcdfg'.includes(s[0]):
                letter = 'B';
                break;
            case 'hjklm'.includes(s[0]):
                letter = 'C';
                break;
            case 'npqrstvwxyz'.includes(s[0]):
                letter = 'D';
                break;
        }
        return letter;
    }
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}