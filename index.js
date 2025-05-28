console.log('hello world')
let text_inp = document.getElementById('todo_input') 
let add_to_list = document.getElementById("add_btn")
let display = document.getElementById("display")
add_to_list.addEventListener("click",()=>{
    // console.log('hello world')
    // display.innerHTML +="TO DO ITEM"
  create()   
})

function create(){
    if(text_inp.value.length>0){
 read()       
    }
}
function read (){
    display.innerHTML +=`<li click="del(Event)">${text_inp.value}</li>`
        text_inp.value =""
} 
function update(){
    console.log("should update or something like that")
    read()
}
function del (event){
    console.log(event)


}