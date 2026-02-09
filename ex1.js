var myTasks = [];
function addTask(task) {
    myTasks.push(task);
    console.log("Task added.");
    return myTasks.length;
}
function listAllTasks() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is in my Tasks list.");
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index === -1) {
        console.log(task + " is not in my Task list.");
    }
    else {
        myTasks.splice(index, 1);
    }
    return myTasks.length;
}
addTask("For");
addTask("Each");
listAllTasks();
deleteTask("For");
deleteTask("All");
