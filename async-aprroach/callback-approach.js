
var fs = require('fs');

/*
fs.readFile('source_one.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile('desitnation.txt', data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Data copied from source_one to destination file successfully.');
            }
        })
    }
})
*/

// Callback Hell

fs.readFile('sample_one.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        fs.readFile('source_one.txt', function (err, data2) {
            if (err) {
                console.log(err)
            } else {
                fs.writeFile('destination.txt', data + data2, function (err) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('Data copied from sample_one and source_one to destination file successfully.')
                    }
                })
            }
        })
    }
})