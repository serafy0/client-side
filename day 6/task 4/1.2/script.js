var input = document.getElementsByTagName("input")[0];

input.addEventListener("input", handle)

function handle(e){

    console.log(e.target.value)
    if(isNaN(e.target.value)){
        e.target.value = ""
    }

}