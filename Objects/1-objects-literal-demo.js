// // Empty Object Literal
// var person = {};

// console.log(person);

// // Object Literal with properties
// var person = {
//     firstName: 'King',
//     lastName: 'Smith'
// }
// console.log(person);

// // Object Literal with properties and Methods
// var person = {
//     firstName: 'King',
//     lastName: 'Smith',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person);

// ------------------------------------ //

var person = {
    firstName: 'King',
    lastName: 'Smith',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person["firstName"])
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person.getFullName());