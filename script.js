const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const tasksContainer = document.querySelector("#tasks-container");
const totalTasks = document.querySelector("#total-tasks");
const completedTasks = document.querySelector("#number-completed");

const tasks = [];

// for updating the tasks completion
const updateTaskCompletion = () => {
  let completions = document.getElementsByClassName("lineThrough");

  completedTasks.innerHTML = completions.length;
};

// for completion of tasks and strikethrough that task
const handleTask = (e, task) => {
  if (e.target.checked) {
    task.classList.add("lineThrough");
  } else {
    task.classList.remove("lineThrough");
  }
  updateTaskCompletion();
};

// for deleting the task and update the total and completion of tasks
const deleteTask = (e, task) => {
  let idx = tasks.indexOf(task.id);

  tasks.splice(idx, 1);

  task.remove();

  totalTasks.innerHTML = tasks.length;

  updateTaskCompletion();
};

// for adding tasks in to the dom
const addTask = () => {
  if (taskInput.value.length > 0) {
    tasks.push(taskInput.value);
    tasksContainer.innerHTML += `<div class='spacing' id=${taskInput.value}>
    <div>
        <input type='checkbox' onchange='handleTask(event,${taskInput.value})' />
        <span>${taskInput.value}</span>
    </div>
    <div class='icon-color'>
        <i class="fa fa-trash" aria-hidden="true" onclick='deleteTask(event,${taskInput.value})' ></i>
    </div>
  </div>`;

    taskInput.value = "";
    totalTasks.innerHTML = tasks.length;
  }
};

addBtn.addEventListener("click", addTask);
