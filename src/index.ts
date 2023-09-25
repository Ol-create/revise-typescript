class ArrayUltis {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}

let number = ArrayUltis.wrapInArray(1)

console.log(number)

let word = ArrayUltis.wrapInArray('Oluyemi');

console.log(word)