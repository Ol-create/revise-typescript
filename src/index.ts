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
    constructor(
        public studentId: number,
        firstName: string,
        lastName: string) {
        super(lastName, firstName)
    }
    
    test() {
        console.log("Taking test")
    }
}

class Principal extends Person {
override get fullName(): string {
        return "Principal " + super.fullName;
    } 
        
}
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

printName([
    new Student(1, "John", "Smith"),
    new Principal("Mary", "Smith"),
    new Teacher("Paul", "Oluyemi"),
])


function printName(people: Person[]) {
    for (let person of people)
        console.log(person.fullName)
}