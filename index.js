console.log('hello world')
let text_inp = document.getElementById('todo_input') 
let add_to_list = document.getElementById("add_btn")
let display = document.getElementById("display")
add_to_list.addEventListener("click",()=>{
    // console.log('hello world')
    // display.innerHTML +="TO DO ITEM"
    if(text_inp.value.length>0){
        display.innerHTML +=`<li>${text_inp.value}</li>`
        text_inp.value =""
    }
})

function create(){}
function read (){} 
function update(){}
function del (){}