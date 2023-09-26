interface Product {
    name: string,
    price: number
}

type ReadOlyProduct = {
    readonly [K in keyof Product]: Product[K]
}

let product: ReadOlyProduct = {
    name: "a",
    price: 1
}

//so we can't modified its value
// can't change product.name = "Bitter Tea"

//Here is a more concise way of doing this
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

let product2: ReadOnly<Product> = {
    name: "a",
    price: 1
}

type Optional<T> = {
    [K in keyof T]? : T[K]
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}