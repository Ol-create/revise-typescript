function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this)
       return (typeof result === 'string') ? result.toUpperCase : result
   }
}

class Person {
    constructor(public firstName: string, public lastName: string) { }
    
    @Capitalize
    fullName(): string {
        return `${this.fullName} ${this.lastName}`
    }
}

let person = new Person("Paul", "Oluyemi")
person.fullName()