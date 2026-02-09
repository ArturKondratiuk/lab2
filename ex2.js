var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added to my Tasks list.");
        return this.myTasks.length;
    };
    Tasks.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my Tasks list.");
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index === -1) {
            console.log(task + " is not in my Task list.");
        }
        else {
            this.myTasks.splice(index, 1);
        }
        return this.myTasks.length;
    };
    return Tasks;
}());
var myTodo = new Tasks();
myTodo.addTask("Eat");
myTodo.addTask("Sleep");
myTodo.listAllTasks();
myTodo.deleteTask("Eat");
myTodo.deleteTask("Wolf");
