
/** JS Hoisting:
 * In JS, variables and functions can be used before declaring it.
 */

// number = 100;
// console.log('Number : ' + number);
// var number;

/** Hoisting only works with declaration but not the initialization  */

// console.log(number);
// var number = 100;

/** JS compiler moves the function definition at the top just like variable declaration. */

// myFunc();
// function myFunc() {
//     console.log('This is myFunc')
// }

/** JS compiler doesn't move function expression at top */

myFunc();
var myFunc = function myFunction() {
    console.log('This is myFunc')
}