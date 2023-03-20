// eslint-disable-next-line import/no-cycle
import projectsArray from "./projects";
import { toggleModal, closeModalSubmit } from "./modal";

const taskFactory = (title, description, dueDate, priority) => {
    const checked = false;
    return {
        title, description, dueDate, priority, checked,
    };
};

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

function createTask(projectTitle, title, description, dueDate, priority) {
    projectsArray.filter(
        (project) => project.title === projectTitle,
    )[0].tasks.push(taskFactory(title, description, dueDate, priority));

    // eslint-disable-next-line no-use-before-define
    loadTasks();
}

function editTask(projectTitle, title, description, dueDate, priority, id) {
    deleteTask(projectsArray.filter(
        (project) => project.title === id.split("-")[0],
    )[0].tasks.filter(
        (task) => task.title === id.split("-")[1],
    )[0]);

    createTask(projectTitle, title, description, dueDate, priority);
    // eslint-disable-next-line no-use-before-define
    loadTasks();
}

function loadTaskModal(task) {
    const taskModalHeaderTitle = document.getElementById("task-modal-header-title");
    const taskModalTitle = document.getElementById("task-modal-title");
    const taskModalDescription = document.getElementById("task-modal-description");
    const taskModalDate = document.getElementById("task-modal-date");
    const taskModalPriotity = document.getElementById("task-modal-priority");
    const taskModalId = document.getElementById("task-modal-id");
    const taskModalProject = document.getElementById("task-modal-project");
    taskModalProject.innerHTML = "";

    for (let i = 0; i < projectsArray.length; i += 1) {
        const taskModalProjectOption = document.createElement("option");
        taskModalProjectOption.setAttribute("value", projectsArray[i].title);
        taskModalProjectOption.innerHTML = projectsArray[i].title;

        taskModalProject.appendChild(taskModalProjectOption);
    }

    if (task) {
        taskModalHeaderTitle.innerHTML = task.title;

        taskModalTitle.value = task.title;
        taskModalDescription.value = task.description;
        taskModalDate.value = task.dueDate;
        taskModalPriotity.value = task.priority;

        projectsArray.forEach((project) => {
            for (let i = 0; i < project.tasks.length; i += 1) {
                if (project.tasks[i].title === task.title) {
                    taskModalProject.value = project.title;
                    taskModalId.value = `${project.title}-${task.title}`;
                }
            }
        });
    } else {
        taskModalHeaderTitle.innerHTML = "New task";

        taskModalTitle.value = "";
        taskModalDescription.value = "";
        taskModalDate.value = "";
        taskModalPriotity.value = "low";
        taskModalId.value = "";
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

    if (elem["task-modal-id"].value !== "") {
        editTask(
            elem["task-modal-project"].value,
            elem["task-modal-title"].value,
            elem["task-modal-description"].value,
            elem["task-modal-date"].value,
            elem["task-modal-priority"].value,
            elem["task-modal-id"].value,
        );
    } else {
        createTask(
            elem["task-modal-project"].value,
            elem["task-modal-title"].value,
            elem["task-modal-description"].value,
            elem["task-modal-date"].value,
            elem["task-modal-priority"].value,
        );
    }

    closeModalSubmit();
});

document.addEventListener("click", (e) => {
    if (e.target && e.target.type === "checkbox") {
        const taskName = e.target.id.split("-")[0];

        projectsArray.forEach((project) => {
            for (let i = 0; i < project.tasks.length; i += 1) {
                if (project.tasks[i].title === taskName) {
                    // eslint-disable-next-line no-param-reassign
                    project.tasks[i].checked = !project.tasks[i].checked;
                }
            }
        });

        localStorage.projectsArray = JSON.stringify(projectsArray);
    }
});

function loadTaskRowData(tasksListRow, task) {
    const tasksListLeft = document.createElement("div");
    tasksListLeft.setAttribute("class", "tasks-list-left");

    const tasksCheckbox = document.createElement("input");
    tasksCheckbox.setAttribute("type", "checkbox");
    tasksCheckbox.setAttribute("id", `${task.title}-checkbox`);
    if (task.checked) { tasksCheckbox.setAttribute("checked", ""); }

    const listSpan = document.createElement("span");
    listSpan.innerHTML += task.description !== "" ? " –– " : "";

    tasksListLeft.appendChild(tasksCheckbox);
    tasksListLeft.innerHTML += task.title;
    tasksListLeft.appendChild(listSpan);
    tasksListLeft.innerHTML += task.description;

    const tasksListRight = document.createElement("div");
    tasksListRight.setAttribute("class", "tasks-list-right");

    const tasksPriority = document.createElement("i");
    // eslint-disable-next-line no-undef
    tasksPriority.innerHTML = feather.icons.flag.toSvg();
    if (task.priority === "low") {
        tasksPriority.setAttribute("class", "priority-low");
    } else if (task.priority === "medium") {
        tasksPriority.setAttribute("class", "priority-medium");
    } else {
        tasksPriority.setAttribute("class", "priority-high");
    }

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

    tasksListRight.innerHTML += ` ${task.dueDate}`;
    tasksListRight.appendChild(tasksPriority);
    tasksListRight.appendChild(tasksEditButton);
    tasksListRight.appendChild(tasksDeleteButton);

    tasksListRow.appendChild(tasksListLeft);
    tasksListRow.appendChild(tasksListRight);
}

function loadTasks(selectedProject) {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML = "";
    console.log(selectedProject);

    if (selectedProject !== undefined) {
        selectedProject.tasks.forEach((task) => {
            const tasksListRow = document.createElement("li");
            tasksListRow.setAttribute("class", "tasks-list-row");
            tasksListRow.setAttribute("id", `${task.title}-row`);

            loadTaskRowData(tasksListRow, task);
            tasksList.appendChild(tasksListRow);
        });
    } else {
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

    if (projectsArray.length !== 0) { localStorage.projectsArray = JSON.stringify(projectsArray); }
}

export default loadTasks;
