
function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    let day = new Date(myDate)
    let dayNumber = day.getDay()
    let days = ["Sunday","Monday","tuesday","Wednesday","Thurday","Friday","Saturday"]
    console.log(days[dayNumber])
}

// tail starts here
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//     var dates = _input.split('\n');

//     for (var i = 0; i < dates.length - 1; i++) {
//         findDay(dates[i]);
//     }
// });