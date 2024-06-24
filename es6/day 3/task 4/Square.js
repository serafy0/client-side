import  Rectangle  from "./Rectangle.js"

export default class Square extends Rectangle {
    constructor(a) {
        super(a, a)
    }

    get name() {
        return "Square"
    }

}
