console.log('hello world')
let text_inp = document.getElementById('todo_input') 
let add_to_list = document.getElementById("add_btn")
let display = document.getElementById("display")
let list_items=[]
add_to_list.addEventListener("click",()=>{
    // console.log('hello world')
    // display.innerHTML +="TO DO ITEM"
  create()   
})

function create(){
    if(text_inp.value.length>0){
        list_items.push(text_inp.value)
 read()       
    }
}
function read (){
   display.innerHTML=""
    for (let index = 0; index < list_items.length; index++) {
    display.innerHTML +=`<li onclick="del(event)"oncontextmenu="update(event)">${list_items[index]}</li>`
    }
        text_inp.value =""
} 
function update(event){
    if(text_inp.value.length>0){
        event.preventDefault()
        let update_item = text_inp.value
        let index = list_items.indexOf(event.target.innerHTML)
        list_item = list_items.splice(index, 1, update_item);
    read()
    }
    
}
function del (event){
    console.log(event.target.innerHTML)
    let del_item = event.target.innerHTML
    list_items = list_items.filter((task) => task= del_item)
    read()
}
