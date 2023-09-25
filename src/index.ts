class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}

    get fullName() {
        return this.firstName + " " + this.lastName
    }

    walk() {
        console.log('')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    test() {
        console.log("Talking")
    }
}


let student = new Student(1, 'Paul', 'Oluyemi')

console.log(student.fullName)