'el sort no devuelve los elementos de un array de una manera necesariamente estable'
// el compare function se debe proveer los elementos son ordenados convirtiendolos a string y comparando la posicion
// del valor Unicode de dichos strings por EJEMPLO los numeros van primero,
// las mayusculas van antes que las minusculas,el 80 en string va antes que
// el nueve

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  console.log(items)

'el metodo includes() determina si una matriz incluye un determinado elemento'
//  devuelve true o false, segun corresponda
// el metodo slice() extrae una seccion de una cadena y devuelve una cadena nueva sin modificar el array original