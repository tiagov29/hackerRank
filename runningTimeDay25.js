function processData(input) {
    //Enter your code here
    let array = input.split('\n')
    for (let i = 1; i < array.length; i++){
        let m = array[i];
        if(isPrime(m)){
            console.log('Prime')
        }else{
            console.log('Not prime')
        }
    }   
} 

function isPrime(m){
    if(m <= 1){
        return false;
    }
    if(m <= 3){
        return true;
    }
    if(m % 2 == 0 || m % 3 == 0) {
    return false;
    }
    for (let index=5; index*index <= m; index = index+6){
        if(m % index == 0 || m % (index+2) == 0){
            return false;
        }
    }
    return true;

}



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});