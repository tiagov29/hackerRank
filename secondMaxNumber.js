//con reduce limpio el array de duplicados, lo ordeno con sort luego para traer la penultima ubicacion que seria
// el segundo maximo uso el .length y le resto 2 por que los array arrancan en 0 
function processData(myArray) {
    let limpiando = myArray.reduce((a, e) => {
        if(!a.find(dato => dato == e)){
        a.push(e)
    }
    return a;
    },[]);
    let ordered = limpiando.sort((a, b) => { return a - b })
    let max2 = ordered.length - 2
    console.log (ordered[max2])
   }
   
   // tail starts here
//    process.stdin.resume();
//    process.stdin.setEncoding("ascii");
//    _input = "";
//    process.stdin.on("data", function (input) {
//        _input += input;
//    });
   
//    process.stdin.on("end", function () {
//       processData(_input.split('\n')[1].split(' ').map(Number));
//    });