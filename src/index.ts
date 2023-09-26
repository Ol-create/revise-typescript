function Log(target: any, methodName: string, descriptor: PropertyDecorator) {
    const original = descriptor.value as Function;

    descriptor.value = function (...args: any) {
        console.log("Before")
        original.call(this, ...args)
        console.log("After")
    }
}

class Person {

    @Log
    say(message: string) {
        console.log("Hello " + message)
    }
}