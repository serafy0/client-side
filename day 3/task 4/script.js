function newFunc(a, b) {

    if (arguments.length != 2) {
        throw new Error( "number of parameters either less than or exceeds 2 parameters!");
    }
    console.log(a,b)
}

newFunc(1,2,3);
newFunc(1,2);


function addFunction(){

    if (arguments.length < 2) {
        throw new Error( "number of parameters can't be less than 2");
    }

    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            result += arguments[i];
        }
    }
    console.log(result)
    return result;

}

addFunction(1,2,3,4)


function reverseFunction(){

    const array = []
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    return array.reverse()


}