
let s = 'javascriptloops'

function vowelsAndConsonants(s) {
    const vowels = [];
    const consonants = [];
    s.split('').forEach(function(o){
        // console.log(['a','e','i','o','u'].indexOf(o))
        if(['a','e','i','o','u'].indexOf(o) != -1){
            vowels.push(o);
        }else{
            consonants.push(o)
        }
    })
    console.log(vowels.join('\n'));
    console.log(consonants.join('\n'));
    
}

vowelsAndConsonants(s)