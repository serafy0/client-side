let btns = document.getElementsByTagName("button");

let img = document.images[0]
console.log(img)

console.log(btns)

let imagesArr = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg"

]

var index = 0;

function goNext(){
    if (index < imagesArr.length - 1) {
        index++
        img.src = imagesArr[index]

    }
    console.log(index)


}

function goPrev(){
    if (index > 0) {
        index--
        img.src = imagesArr[index]
    }
    console.log(index)


}

img.src = "./images/1.jpg"
btns[0].addEventListener("click", function () {
    goNext()

    // else if (index ==imagesArr.length - 1){
    //     index=0
    //     img.src = imagesArr[index]

    // }

})



btns[1].addEventListener("click", function () {
    goPrev() 
    

});


var currentInterval;
btns[2].addEventListener("click", function(){
    currentInterval= setInterval(
        function(){
     if (index ==imagesArr.length - 1){
        index=0
        img.src = imagesArr[index]
        console.log(index)

    }else{
        goNext()
    }

        },2000)
})

btns[3].addEventListener("click", function(){
    clearInterval(currentInterval)
    console.log(currentInterval)
    console.log("clear")
})



