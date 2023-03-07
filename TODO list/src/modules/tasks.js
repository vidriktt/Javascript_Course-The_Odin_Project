import projectsArray from "./projects";
import toggleModal from "./modal";

const taskFactory = (title, description, dueDate, priority) => {
    const checklist = false;
    return {
        title, description, dueDate, priority, checklist,
    };
};

function createTask(projectTitle, title, description, dueDate, priority) {
    projectsArray.filter(
        (project) => project.title === projectTitle,
    ).tasks.push(taskFactory(title, description, dueDate, priority));
}

function loadTaskModal(task) {
    document.getElementById("task-modal-header-title").innerHTML = task.title;

    const taskModalProject = document.getElementById("task-modal-project");
    taskModalProject.innerHTML = "";

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < projectsArray.length; i++) {
        const taskModalProjectOption = document.createElement("option");
        taskModalProjectOption.setAttribute("value", `${projectsArray[i].title}-option`);
        taskModalProjectOption.innerHTML = projectsArray[i].title;

        taskModalProject.appendChild(taskModalProjectOption);
    }
}

function loadTaskRowData(tasksListRow, task) {
    const tasksListLeft = document.createElement("div");
    tasksListLeft.setAttribute("class", "tasks-list-left");

    const tasksCheckbox = document.createElement("input");
    tasksCheckbox.setAttribute("type", "checkbox");
    tasksCheckbox.setAttribute("id", `${task.title}-checkbox`);
    tasksListLeft.appendChild(tasksCheckbox);

    tasksListLeft.innerHTML += task.title;

    const tasksListRight = document.createElement("div");
    tasksListRight.setAttribute("class", "tasks-list-right");

    tasksListRight.innerHTML += task.dueDate;

    tasksListRow.appendChild(tasksListLeft);
    tasksListRow.appendChild(tasksListRight);
}

function loadTasks() {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML = "";

    projectsArray.forEach((project) => {
        project.tasks.forEach((task) => {
            const tasksListRow = document.createElement("li");
            tasksListRow.setAttribute("class", "tasks-list-row");
            tasksListRow.setAttribute("id", `${task.title}-row`);
            tasksListRow.setAttribute("data-target", "task-modal");

            tasksListRow.addEventListener("click", (event) => {
                loadTaskModal(task);
                toggleModal(event);
            });

            loadTaskRowData(tasksListRow, task);

            tasksList.appendChild(tasksListRow);
        });
    });
}

export default loadTasks;
