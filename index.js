var taskObjects;
showAllTask();
let inputTask=document.getElementById('inputTask');
let addTask=document.getElementById('addTask');

addTask.addEventListener('click',()=>{
    let inputValue=inputTask.value;
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
       inputTask.value='';
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
      let addTaskItem=document.getElementById('addTaskItem');
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


function deleteToDoItems(index){
    let getLocalTask=localStorage.getItem("localTask");
    taskObjects=JSON.parse(getLocalTask);
   console.log(taskObjects);
    taskObjects.splice(index,1);
    localStorage.setItem("localTask",JSON.stringify(taskObjects));
    showAllTask();
}

function editTask(index){
    let saveForEdit = document.getElementById("saveforedit");
    let addtaskbtn = document.getElementById("addTask");
    console.log(addtaskbtn);
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveForEdit.value = index;
    let getLocalTask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(getLocalTask); 
    inputTask.value= taskObjects[index]['taskName'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addTask");
    let getLocalTask = localStorage.getItem("localTask");
     taskObjects = JSON.parse(getLocalTask); 
     console.log(taskObjects);
    let saveForEdit = document.getElementById("saveforedit").value;


    // for (keys in taskObjects[saveforedit]) {
    //     if(keys == 'task_name'){
            taskObjects[saveForEdit].taskName = inputTask.value;
    //     }
    // }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    inputTask.value='';
    showAllTask();
});

let clearAll = document.getElementById("clearAll");
console.log(clearAll);
clearAll.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let inputTask = document.getElementById("inputTask");
    let getLocalTask = localStorage.getItem("localTask");
     taskObjects = JSON.parse(getLocalTask);
    if(getLocalTask == null){
        taskObjects = [];
    }
    else{
        taskObjects = JSON.parse(getLocalTask);
        taskObjects = [];
    }
    console.log(taskObjects);
    savetaskbtn.style.display="none";
    inputTask.style.display="block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    showAllTask();

})

