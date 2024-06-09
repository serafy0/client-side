let button = document.getElementsByTagName("button")[0]

// let status = document.getElementById("status")

let clock

function setTime(time){
    let currentTime = new Date().toLocaleTimeString();
    time.innerText= currentTime

}
button.addEventListener("click",function(){

    // alert("clock started")
    let time = document.getElementById("time")
    setTime(time)
    clock = setInterval(function(){
        setTime(time)
    },1000)
    

})


document.addEventListener("keydown",function(e){
console.log(e.code)
if((e.altKey && e.code=="KeyW")){
clearInterval(clock);
// alert("clock stopped")
}
})



// document.addEventListener("keydown",function(e){
//     console.log(e.key)
//     if(e.key =="∑"||(e.altKey&&e.code==87)){
//     clearInterval(clock);
//     alert("clock stopped")
//     }
//     })
    
// document.addEventListener("keydown",function(e){
//     e.preventDefault();
//     console.log(e.key)
//     if(){
//     clearInterval(clock);
//     alert("clock stopped")
//     }
    
// })