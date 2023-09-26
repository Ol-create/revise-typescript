interface Product {
    name: string,
    price: number
}

class Store<T> {
    protected _objects: T[] = [];

    addObj(obj: T): void {
        this._objects.push(obj)
    }

}

//Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() { };
}

let store = new CompressibleStore<Product>()

//Restrict the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(object => object.name === name)
    }
}

//Fix the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return []
    }
}