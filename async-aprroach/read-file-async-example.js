
var fs = require('fs');

// Read File Asynchronously
fs.readFile('demo_one.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})


// Read File Asynchronously
fs.readFile('demo_two.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})
