import  Rectangle  from "./Rectangle.js"

export default class Square extends Rectangle {
    constructor(height) {
        super(height, height)
    }

    get name() {
        return "Square"
    }

}
