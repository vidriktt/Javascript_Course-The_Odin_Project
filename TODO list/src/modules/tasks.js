import projectsArray from "./projects";
import { toggleModal, closeModalSubmit } from "./modal";

const taskFactory = (title, description, dueDate, priority) => {
    const checklist = false;
    return {
        title, description, dueDate, priority, checklist,
    };
};

function createTask(projectTitle, title, description, dueDate, priority) {
    projectsArray.filter(
        (project) => project.title === projectTitle,
    )[0].tasks.push(taskFactory(title, description, dueDate, priority));
    // eslint-disable-next-line no-use-before-define
    loadTasks();
}

function deleteTask(task) {
    projectsArray.forEach((project) => {
        for (let i = 0; i < project.tasks.length; i += 1) {
            if (project.tasks[i].title === task.title) {
                project.tasks.splice(i, 1);
            }
        }
    });
    // eslint-disable-next-line no-use-before-define
    loadTasks();
}

function loadTaskModal(task) {
    const taskModalHeaderTitle = document.getElementById("task-modal-header-title");

    taskModalHeaderTitle.innerHTML = task ? task.title : "New task";

    const taskModalProject = document.getElementById("task-modal-project");
    taskModalProject.innerHTML = "";

    for (let i = 0; i < projectsArray.length; i += 1) {
        const taskModalProjectOption = document.createElement("option");
        taskModalProjectOption.setAttribute("value", projectsArray[i].title);
        taskModalProjectOption.innerHTML = projectsArray[i].title;

        taskModalProject.appendChild(taskModalProjectOption);
    }
}

const addTaskLink = document.getElementById("add-task-link");
addTaskLink.setAttribute("data-target", "task-modal");

addTaskLink.addEventListener("click", (event) => {
    loadTaskModal();
    toggleModal(event);
});

const taskModalForm = document.getElementById("task-modal-form");

taskModalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const elem = event.target.elements;

    createTask(
        elem["task-modal-project"].value,
        elem["task-modal-title"].value,
        elem["task-modal-description"].value,
        elem["task-modal-date"].value,
        elem["task-modal-priority"].value,
    );

    closeModalSubmit();
});

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

    const tasksEditButton = document.createElement("i");
    // eslint-disable-next-line no-undef
    tasksEditButton.innerHTML = feather.icons.edit.toSvg();
    tasksEditButton.setAttribute("data-target", "task-modal");

    tasksEditButton.addEventListener("click", (event) => {
        loadTaskModal(task);
        toggleModal(event);
    });

    const tasksDeleteButton = document.createElement("i");
    // eslint-disable-next-line no-undef
    tasksDeleteButton.innerHTML = feather.icons.delete.toSvg();
    tasksDeleteButton.addEventListener("click", () => {
        deleteTask(task);
    });

    tasksListRight.innerHTML += task.dueDate;
    tasksListRight.appendChild(tasksEditButton);
    tasksListRight.appendChild(tasksDeleteButton);

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

            loadTaskRowData(tasksListRow, task);
            tasksList.appendChild(tasksListRow);
        });
    });
}

export default loadTasks;
