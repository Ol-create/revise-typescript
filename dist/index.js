"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log('');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(lastName, firstName);
        this.studentId = studentId;
    }
    test() {
        console.log("Taking test");
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
printName([
    new Student(1, "John", "Smith"),
    new Principal("Mary", "Smith"),
    new Teacher("Paul", "Oluyemi"),
]);
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
//# sourceMappingURL=index.js.map