let myTasks:string[] = []; //string array

    //addTask func
    function addTask(task:string):number {
        myTasks.push(task); //pushing variable
        console.log(task + " has been added to my Tasks list."); //log
        return myTasks.length; 
    }

    //listAllTasks func
    function listAllTasks():void {
        for(let i = 0; i<myTasks.length; i++) { //loop
            console.log("Task: "+myTasks[i] + " is in my Tasks list."); //log
        }
    }

    //deleteTask func
    function deleteTask(task:string):number { 
        let index:number = myTasks.indexOf(task); //variable with index of task

        if (index === -1) {
            console.log(task + " is not in my Task list.");
        }
        else {
            myTasks.splice(index, 1);
        }
        return myTasks.length;
    }

//calling funcs
addTask("For");
addTask("Each");
listAllTasks();
deleteTask("For");
deleteTask("All");