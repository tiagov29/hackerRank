function main() {
    var n = parseInt(readLine).toString(2);
    // el readLine se usa en node js para hacer un elemento leible en este caso el input
    // es importante en el caso hackerRank por como envia los datos pero aqui no seria necesario,
    // solo el parseInt en caso de enviarle a la funcion un string como en este caso
    //arroja 101 si n = 5
    var splits = n.split('0');
    //va a partir y poner en una nueva posicion del array cada que encuentre un 0
    console.log(splits.map(function(elem){return elem.length;}).reduce(function(a,b){
        if (a>b) return a; else return b;}));

}

main('13')