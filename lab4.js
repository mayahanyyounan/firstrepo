const input= document.getElementById("input");
const tasksdiv= document.getElementById("tasks");
const button=document.getElementById("addbutton");
let tasks=[];
function addtask(){
    const inputValue=input.value;
    tasks.push(inputValue);
    input.value="";
    render();
}
function render(){
    tasksdiv.innerHTML="";
    for(let  i=0;i<tasks.length;i++){
        const p=document.createElement("p");
        p.textContent=tasks[i];
        tasksdiv.appendChild(p);
    }
}button.addEventListener("click", addtask);