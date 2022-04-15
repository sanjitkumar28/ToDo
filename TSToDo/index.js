// export {}
var taskObjects;
showAllTask();
var inputtask = document.getElementById('inputTask');
var addtask = document.getElementById('addTask');
addtask.addEventListener('click', function () {
    var inputValue = inputtask.value;
    var getLocalTask = localStorage.getItem("localTask");
    if (inputValue.trim() != 0) {
        if (getLocalTask == null) {
            taskObjects = [];
        }
        else {
            taskObjects = JSON.parse(getLocalTask);
            taskObjects.push({ 'taskName': inputValue });
        }
        localStorage.setItem("localTask", JSON.stringify(taskObjects));
        inputtask.value = '';
    }
    showAllTask();
});
function showAllTask() {
    var getLocalTask = localStorage.getItem("localTask");
    if (getLocalTask == null) {
        taskObjects = [];
    }
    else {
        taskObjects = JSON.parse(getLocalTask);
    }
    var html = '';
    var addTaskItem = document.getElementById('addTaskItem');
    taskObjects.forEach(function (item, index) {
        html += "<tr>\n          <td>".concat(index + 1, "</td>\n          <td>").concat(item.taskName, "</td>\n          <td><button type=\"button\" onclick=\"editTask(").concat(index, ")\">Edit</button></td>\n          <td><button type=\"button\" onclick=\"deleteToDoItems(").concat(index, ")\">Delete</button></td>\n          </tr>");
    });
    addTaskItem.innerHTML = html;
}
function deleteToDoItems(index) {
    var getLocalTask = localStorage.getItem("localTask");
    taskObjects = JSON.parse(getLocalTask ? getLocalTask : '');
    console.log(taskObjects);
    taskObjects.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    showAllTask();
}
function editTask(index) {
    var saveForEdit = document.getElementById("saveforedit");
    var addtaskbtn = document.getElementById("addTask");
    console.log(addtaskbtn);
    var savetaskbtn = document.getElementById("savetaskbtn");
    saveForEdit.value = index;
    var getLocalTask = localStorage.getItem("localTask");
    var taskObjects = JSON.parse(getLocalTask ? getLocalTask : '');
    console.log(taskObjects);
    console.log(inputtask);
    inputtask.value = taskObjects[index]['taskName'];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";
}
var saveTaskbtn = document.getElementById("savetaskbtn");
saveTaskbtn.addEventListener("click", function () {
    var addtaskbtn = document.getElementById("addTask");
    var getLocalTask = localStorage.getItem("localTask");
    taskObjects = JSON.parse(getLocalTask ? getLocalTask : '');
    console.log(taskObjects);
    var saveForEdit = document.getElementById("saveforedit");
    var saveindex = saveForEdit.value;
    console.log(saveindex, "es");
    console.log("inputtask value=" + inputtask.value);
    taskObjects[saveindex]['taskName'] = inputtask.value;
    saveTaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    inputtask.value = '';
    showAllTask();
});
var clearall = document.getElementById("clearAll");
console.log(clearall);
clearall.addEventListener("click", function () {
    var savetaskbtn = document.getElementById("savetaskbtn");
    var addtaskbtn = document.getElementById("addTask");
    var getLocalTask = localStorage.getItem("localTask");
    taskObjects = JSON.parse(getLocalTask ? getLocalTask : '');
    if (getLocalTask == null) {
        taskObjects = [];
    }
    else {
        taskObjects = JSON.parse(getLocalTask);
        taskObjects = [];
    }
    console.log(taskObjects);
    savetaskbtn.style.display = "none";
    addtask.style.display = "block";
    localStorage.setItem("localTask", JSON.stringify(taskObjects));
    inputtask.value = '';
    showAllTask();
});
