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
        super(firstName, lastName);
        this.studentId = studentId;
    }
    test() {
        console.log("Talking");
    }
}
let student = new Student(1, 'Paul', 'Oluyemi');
console.log(student.fullName);
//# sourceMappingURL=index.js.map