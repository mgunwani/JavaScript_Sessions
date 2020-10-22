
// // Class in JavaScript
// function Person() {
//     this.firstName = "King";
//     this.lastName = "Kochhar";
//     this.getFullName = () => {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log('Person 1 : ');
// // Creating Object Constructor:
// var person1 = new Person();
// // console.log(person1.firstName)
// // console.log(person1.lastName)
// // console.log(person1['firstName'])
// // console.log(person1['lastName'])
// console.log(person1.getFullName())

// console.log('Person 2 : ');
// // Creating Object Constructor:
// var person2 = new Person();
// // console.log(person1.firstName)
// // console.log(person1.lastName)
// // console.log(person1['firstName'])
// // console.log(person1['lastName'])
// console.log(person2.getFullName())


// -------------------------------------------------- // 

// function Person(fName, lName) {
//     this.firstName = fName || 'Unknown';
//     this.lastName = lName || 'Unknown';
//     this.getFullName = () => {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var p1 = new Person('King', 'Kochhar');
// console.log(p1.getFullName());
// var p2 = new Person('Bhawna', 'Gunwani');
// console.log(p2.getFullName());
// var p3 = new Person('Avin', 'Grewal');
// console.log(p3.getFullName());
// var p4 = new Person();
// console.log(p4.getFullName());


// -------------------------------------------------- // 

function Person(fName, lName) {
    this.firstName = fName || 'Unknown';
    this.lastName = lName || 'Unknown';
    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return this.firstName },
            set: function (value) { this.firstName = value }
        }
    })
}


var p1 = new Person();
console.log(p1.FirstName);
p1.FirstName = "Bhawna";
console.log(p1.FirstName);



























