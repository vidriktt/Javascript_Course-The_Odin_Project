import "./style.css";
import loadTasks from "./modules/tasks";
import {
    projectsArray, loadProjects, openAddProjectPopup, addProject,
} from "./modules/projects";

function init() {
    // loadTasks();
    loadProjects();

    const addProjectLink = document.getElementById("add-project-link");
    addProjectLink.addEventListener("click", openAddProjectPopup);

    const buttonCancelProjectPopup = document.getElementById("button-cancel-project-popup");
    buttonCancelProjectPopup.addEventListener("click", openAddProjectPopup);

    const buttonAddProjectPopup = document.getElementById("button-add-project-popup");
    buttonAddProjectPopup.addEventListener("click", addProject);
}

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

init();
