abstract class Shape {
    constructor(public color: string) { }
    
    abstract render(): void;
}

class Circle extends Shape {
    override render(): void {
        console.log(this.color)
    }
}

let circle = new Circle("Blue")

circle.render()