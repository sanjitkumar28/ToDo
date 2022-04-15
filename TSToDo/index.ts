// export {}
var taskObjects: { taskName: any; }[];
showAllTask();
let inputtask:any=document.getElementById('inputTask');
var addtask:any=document.getElementById('addTask');

addtask.addEventListener('click',()=>{
    let inputValue:any=inputtask.value;
    let getLocalTask =localStorage.getItem("localTask");
    if(inputValue.trim()!=0){
        if(getLocalTask==null)
        {
             taskObjects=[]
        }
       else
       {
        taskObjects=JSON.parse(getLocalTask);
        taskObjects.push({'taskName':inputValue})
       }
       localStorage.setItem("localTask", JSON.stringify(taskObjects));
       inputtask.value='';
    }
    showAllTask();
})

function showAllTask(){
    let getLocalTask=localStorage.getItem("localTask");
    if(getLocalTask==null){
        taskObjects=[];
    }
    else{
        taskObjects=JSON.parse(getLocalTask);
    }
      let html='';
      let addTaskItem:any=document.getElementById('addTaskItem');
      taskObjects.forEach((item,index)=>{
          html+=`<tr>
          <td>${index+1}</td>
          <td>${item.taskName}</td>
          <td><button type="button" onclick="editTask(${index})">Edit</button></td>
          <td><button type="button" onclick="deleteToDoItems(${index})">Delete</button></td>
          </tr>`
      })
      addTaskItem.innerHTML=html;
}


function deleteToDoItems(index:number){
    let getLocalTask=localStorage.getItem("localTask");
    taskObjects=JSON.parse(getLocalTask?getLocalTask: '');
   console.log(taskObjects);
    taskObjects.splice(index,1);
    localStorage.setItem("localTask",JSON.stringify(taskObjects));
    showAllTask();
}

function editTask(index: number){
    let saveForEdit:any = document.getElementById("saveforedit");
    let addtaskbtn:any = document.getElementById("addTask");
    console.log(addtaskbtn);
    let savetaskbtn:any = document.getElementById("savetaskbtn");
    saveForEdit.value = index;
    let getLocalTask:any = localStorage.getItem("localTask");
    let taskObjects:any = JSON.parse(getLocalTask?getLocalTask: ''); 
    console.log(taskObjects);
    console.log(inputtask);
    
    
    inputtask.value= taskObjects[index]['taskName'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}
let saveTaskbtn:any = document.getElementById("savetaskbtn");
saveTaskbtn.addEventListener("click", function(){
    let addtaskbtn: any = document.getElementById("addTask");
    let getLocalTask = localStorage.getItem("localTask");
     taskObjects = JSON.parse(getLocalTask?getLocalTask: ''); 
     console.log(taskObjects);
    let saveForEdit:any = document.getElementById("saveforedit");
    let saveindex:number=saveForEdit.value;
    console.log(saveindex, "es")
    console.log("inputtask value="+inputtask.value);
    
    taskObjects[saveindex]['taskName'] = inputtask.value;

    saveTaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    inputtask.value='';
    showAllTask();
});

let clearall:any = document.getElementById("clearAll");
console.log(clearall);
clearall.addEventListener("click", function(){
    let savetaskbtn:any = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addTask");
    let getLocalTask = localStorage.getItem("localTask");
     taskObjects = JSON.parse(getLocalTask?getLocalTask: '');
    if(getLocalTask == null){
        taskObjects = [];
    }
    else{
        taskObjects = JSON.parse(getLocalTask);
        taskObjects = [];
    }
    console.log(taskObjects);
    savetaskbtn.style.display="none";
    addtask.style.display="block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    inputtask.value='';
    showAllTask();

})

