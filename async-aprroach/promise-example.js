
/**
 * Promise: helps in writing async code.
 * It also help us to avoid a callback hell.
 * First, we create promise and then we handle them.
 * Promise in JS can be either resolved or rejected.
 */

var promise = new Promise(function (resolve, reject) {
    var status = false;
    if (status) {
        resolve("Your status is active..")
    } else {
        reject("Your statis is inactive.")
    }
})

/*
promise.then(function (data) {
    console.log('then invoked..');
    console.log(data);
}).catch(function (error) {
    console.log('catch invoked..');
    console.log(error);
})
*/

promise.then((data) => console.log(data))
    .catch((error) => console.log(error));