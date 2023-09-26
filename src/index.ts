function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: String;
        const descriptor: PropertyDescritor = {
            get() {return value}
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be atleast ${length} characters long`)
                value = newValue
          }
        }
        Object.defineProperties(target, propertyName, descriptor);
    }
}


class User {

    @MinLength(4)
    password: string
    constructor(password: string) {
        this.password = password
    }
}

let user = new User("123");
console.log(user.password)