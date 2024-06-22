function getMin(arr) {
    return Math.min(...arr)
}

function getMax(arr) {
    return Math.max(...arr)
}

function getMinAndMax(...arr) {
    let min = getMin(arr);
    let max = getMax(arr);

    return { max, min }

}

console.log(getMinAndMax(1,2,3,4,5))
// console.log(getMinAndMax([20,1000,2.2]))
// console.log(getMinAndMax([-20,-1000,-100,-9]))



