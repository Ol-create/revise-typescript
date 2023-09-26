interface Product {
    name: string,
    price: number
}

class Store<T> {
    protected _objects: T[] = [];

    addObj(obj: T): void {
        this._objects.push(obj)
    }
    // If T is Product
    //Keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value)
    }
}

let store = new Store<Product>()

store.addObj({ name: "a", price: 1 })
store.find("name", "a")
store.find("price", 1)