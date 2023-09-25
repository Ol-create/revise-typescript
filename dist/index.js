"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    render() {
        console.log(this.color);
    }
}
let circle = new Circle("Blue");
circle.render();
//# sourceMappingURL=index.js.map