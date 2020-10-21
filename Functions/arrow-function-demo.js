
/**
 * Arrow Function is the concept of ES6.
 * An alternative way to write a shorter syntax compared to the functions or function expressions.
 */

/*
   function addition(a, b) {
       return a + b;
   }
   console.log(addition(100, 200));
*/

/*
    add = function addition(a, b) {
        return a + b;
    }
    console.log(add(100, 200));
*/

/*
    add = function (a, b) {
        return a + b;
    }
    console.log(add(100, 200));
*/

/*

var sayHello = () => console.log('Hello Everyone!!');
sayHello();

console.log("-----------------------------------------------")

var sayHelloWithMessage = () => {
    console.log('Hello Everyone')
    console.log('Lets Learn Intersting facts about JS!!')
}
sayHelloWithMessage();

console.log("-----------------------------------------------")

var add = (num1, num2) => { return num1 + num2; }
console.log(add(100, 200));

console.log("-----------------------------------------------")

console.log(typeof add);

*/

let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers);




