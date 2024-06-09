
function Rectangle(w, h) {

    this.width = w;
    this.height = h;
}

Rectangle.prototype.perimeter = function () {
    return (2 * (this.width + this.height))
}
Rectangle.prototype.area = function () {
    return (this.width * this.height)
}

Rectangle.prototype.displayInfo = function () {
    console.log({
        width: this.width,
        height: this.height,
        area: this.area(),
        perimeter: this.perimeter()
    })
}

let rect = new Rectangle(5, 7)