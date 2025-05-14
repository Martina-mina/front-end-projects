
const taskInput = document.getElementById("taskInput");
const newTaskBtn = document.getElementById("newTask");
const taskList = document.querySelector(".task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateTasksList() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("taskItem");

        listItem.innerHTML = `
            <div class="task-content">
                <div class="task">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskComplete(${index})"/>
                    <p class="task-text ${task.completed ? 'completed' : ''}">${task.text}</p>
                </div>

                <div class="icons">
                    <img src="edit.png" class="edit-icon" onclick="editTask(${index})"/>
                    <img src="delete.png" class="delete-icon" onclick="deleteTask(${index})"/>
                </div>
            </div>
        `;

        taskList.appendChild(listItem);
    });

    updateProgress(); 
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function updateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    document.getElementById("progress").style.width = `${progressPercentage}%`;
    document.getElementById("numbers").textContent = `${completedTasks}/${totalTasks}`;

    if (completedTasks === totalTasks && totalTasks > 0) {
        blask(); 
    }
}


newTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        updateTasksList();
    }
});


function toggleTaskComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
}


function editTask(index) {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        updateTasksList();
    }
}


function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasksList();
}


updateTasksList();



const blask = ()=> {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}