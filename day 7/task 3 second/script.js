
let intervalId;

intervalId = setInterval(() => {
moveMarble()    
}, 1000);
var counter = 1;
function moveMarble(){
    let image = document.getElementById(`${counter}`)

    counter++
    if(counter>5){
        counter = 1;
    }
    image.src = "./marble/marble1.jpg"
    let newImage = document.getElementById(`${counter}`)
    newImage.src = "./marble/marble2.jpg"


}
let container = document.getElementsByClassName("container")[0]
container.addEventListener("mouseover", function () { clearInterval(intervalId) });
container.addEventListener("mouseout", function () {
    intervalId = setInterval(()=>{
        moveMarble()    
    }, 1000);

})


