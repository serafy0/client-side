export default class Shape {

    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }

    toString() {
        return `the area of this ${this.name} is ${this.area()}`
    }

    get name() {
        return "Shape"
    }
}