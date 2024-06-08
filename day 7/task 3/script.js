let image = document.getElementById("marble")
let intervalId;

let mainWidth = image.parentElement.clientWidth
let position = 0;
intervalId = setInterval(() => {
moveMarble()    
}, 1000);

function moveMarble(){
    position += 20;
    image.style.left = position + 'px';
    if(parseInt(position)+50> mainWidth){
        image.style.left = 0;
        position=0;
    }

}


image.addEventListener("mouseover", function () { clearInterval(intervalId) });
image.addEventListener("mouseout", function () {
    intervalId = setInterval(()=>{
        moveMarble()    
    }, 1000);

})


