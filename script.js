const incrementbtn = document.getElementById("increment")
const decrementbtn = document.getElementById("decrement")
const resetbtn = document.getElementById("reset")
const displayVlue = document.getElementById("display")

incrementbtn.addEventListener("click",func1)
decrementbtn.addEventListener("click",func2)
resetbtn.addEventListener("click",func3)

function func1(){
    const val = Number(displayVlue.innerText)
    if(val>=0){
        displayVlue.innerText=val+1
    }
    // }else if(val==-1){
    //     displayVlue.innerText=val+1
    // }
    else{
        alert("You have cross your limit")
    }
}
function func2(){
    const val = Number(displayVlue.innerText)
    if(val>=1){
        displayVlue.innerText=val-1
    }else{
        alert("You have done")
    }
}
function func3(){
    const val = Number(displayVlue.innerText = 0)
    
}
