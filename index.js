var taskObjects;
// showAllTask();
inputTask=document.getElementById('inputTask');
console.log(inputTask);
addTask=document.getElementById('addTask');
console.log(addTask);

addTask.addEventListener('click',()=>{
    inputValue=inputTask.value;
    let webtask =localStorage.getItem("localTask");
    console.log(inputValue);
    if(inputValue.trim()!=0){
        if(webtask==null)
        {
             taskObjects=[]
        }
       else
       {
        taskObjects=JSON.parse(webtask);
        taskObjects.push({'taskName':inputValue,completed:true})
       }
       localStorage.setItem("localTask", JSON.stringify(taskObjects));
       inputTask.value='';
    }
    showAllTask();
})

function showAllTask(){
    // const div = document.createElement("div");
    // div.classList.add("to-do-output");
    // const tbl=document.createElement("table")
    // tbl.classList.add('addTaskItem');
    // div.appendChild(tbl);
      let html='';
      let addTaskItem=document.getElementById('addTaskItem');
      taskObjects.forEach((item,index)=>{
          html+=`<tr>
          <td>${index+1}</td>
          <td>${item.taskName}</td>
          <td><button type="button" onclick="editTask(${index})">Edit</button></td>
          <td><button type="button" onclick="deleteItem(${index})">Delete</button></td>
          </tr>`
      })
      addTaskItem.innerHTML=html;
}


function deleteItem(index){
    console.log('delete is called');
    let webtask=localStorage.getItem("localTask");
    taskObjects=JSON.parse(webtask);
   console.log(taskObjects);
    taskObjects.splice(index,1);
    localStorage.setItem("localTask",JSON.stringify(taskObjects));
    showAllTask();
}

function editTask(index){
    let saveforedit = document.getElementById("saveforedit");
    let addtaskbtn = document.getElementById("addTask");
    console.log(addtaskbtn);
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveforedit.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    
    inputTask.value= taskObjects[index]['taskName'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addTask");
    let webtask = localStorage.getItem("localTask");
     taskObjects = JSON.parse(webtask); 
     console.log(taskObjects);
    let saveforedit = document.getElementById("saveforedit").value;
    console.log(saveforedit);

    // for (keys in taskObjects[saveforedit]) {
    //     if(keys == 'task_name'){
            taskObjects[saveforedit].taskName = inputTask.value;
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
    let webtask = localStorage.getItem("localTask");
     taskObjects = JSON.parse(webtask);
    if(webtask == null){
        taskObjects = [];
    }
    else{
        taskObjects = JSON.parse(webtask);
        taskObjects = [];
    }
    console.log(taskObjects);
    savetaskbtn.style.display="none";
    inputTask.style.display="block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    showAllTask();

})

