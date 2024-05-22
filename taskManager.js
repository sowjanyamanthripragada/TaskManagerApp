
const taskManager = {
    tasks: [],

    // Method to add a task
    addTask: function (description) {
        if (description.trim() !== '') {
            const task = {
                id: this.tasks.length + 1,
                description: description,
                completed: false
            };
            this.tasks.push(task);
            alert('Task added: ${description}');
            return true;
        } else {
            alert('Error: Task description cannot be empty.');
            return false;
        }
    },


    completeTask: function (taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            alert('Task completed: ${task.description}');
            return true;
        } else {
            alert('Error: The specified task does not exist.');
            return false;
        }
    },


    listAllTasks: function () {
        let message = 'All tasks:\n';
        this.tasks.forEach(task => {
            message += 'ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}\n';
        });
        alert(message);
    },

    // Method to list completed tasks
    listCompletedTasks: function () {
        const completedTasks = this.tasks.filter(task => task.completed);
        let message = 'Completed tasks:\n';
        completedTasks.forEach(task => {
            message += 'ID: ${task.id}, Description: ${task.description}\n';
        });
        alert(message);
    }
};



function menu(user) {
   
    const choice = parseInt(
        prompt(
          "Select a choice:\n1) Add task\n2) Complete task\n3) List all tasks\n4) List completed tasks\n5) Exit"
        )
      );
    switch (choice) {
        case 1:
            const description = prompt('Enter the description of the added task:');
            taskManager.addTask(description);
            break;
        case 2:
            const id = parseInt(prompt('Which task ID to mark as completed:'));
            taskManager.completeTask(id);
            break;
        case 3:
            taskManager.listAllTasks();
            break;
        case 4:
            taskManager.listCompletedTasks();
            break;
        case 5:
            alert("Goodbye!");
            //window.close;
        default:
            alert("Invalid input, please choose between 1 -5");
            //menu();
            break;
    }
    menu();
}

function askUserName() {
    const userName = prompt('Please enter your name:');
    if (userName && userName.trim() !== '') {
        menu(userName); // Start the menu after entering the user name
    } else {
        alert('Error: Name cannot be empty.');
        askUserName();
    }
}
askUserName();