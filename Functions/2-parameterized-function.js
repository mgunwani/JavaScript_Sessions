
function sayHello(name) {
    // console.log('Hello ' + name + '!!');
    // console.log(`Hello ${name}!!`);
    alert(`Hello ${name}!!`);
}

function getFullName(firstName, lastName) {
    alert(`${firstName} ${lastName}`);
}

function getFullNameAgain() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    alert(`${fName} ${lName}`);
}



// sayHello('King');
// sayHello('Bhawna');

// getFullName('Bhawna', 'Gunwani')
// getFullName('King', 'Kochhar')
// getFullName('John')
// getFullName('Nikhil', 'Kumar', 'Rastogi')
