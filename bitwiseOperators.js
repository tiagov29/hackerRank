function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        
        var a = k - 1;
        var b = (~a) & -(~a); // ~ complement
        
        if ( (a | b) > n )
            console.log(a - 1);
        else
            console.log(a);
    }
}