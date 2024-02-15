let taskslist=[];
displaytasks();
let taskBox=document.querySelector('.js-task-inputbox');
const dateBox=document.querySelector('.js-date-inputbox');
const buttonElement=document.querySelector('.js-addbutton');
buttonElement.addEventListener('click',()=>{
   const todoTask=taskBox.value
   const todoDate=dateBox.value
   if(todoDate==='' || todoTask===''){
    alert('Enter input fields')
   }
   else{
    taskBox.value=''
    dateBox.value=''
    taskslist.push({name:todoTask,date:todoDate});
    displaytasks();
   }
})

function displaytasks(){
    let taskListElement=document.querySelector('.js-tasks-list')
    let para='';
    taskslist.forEach((value,index)=>{
        //const temp=value.name.toUpperCase()
        para=para+`<div>${value.name}</div> <div>${value.date}</div><div><button class="css-delete-button" onclick="deleteButton(${index})" >Delete</button></div>`
    })
    taskListElement.innerHTML=para;
   

}
function deleteButton(deleteIndex){
    taskslist.splice(deleteIndex,1);
    displaytasks();
}