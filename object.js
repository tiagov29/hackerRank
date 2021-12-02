function printObjectProperty(myObject) {
    console.log(`myObject.type,
                 myObject.model,
                 myObject.color`)
  
  }
  
  // The below code is to show how to create an Object. 
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });
  
  process.stdin.on("end", function () {
      var obj = _input.split(' ');
      var myObject = new Object;
    
      // Fill up the question marks
      myObject.type = "Jeep";
      myObject.model = "1948";
      myObject.color = "green";
  
      printObjectProperty(myObject);
  });