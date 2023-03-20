import "./style.css";
import loadTasks from "./modules/tasks";
import { loadProjects, openAddProjectPopup, addProject } from "./modules/projects";

function init() {
    loadProjects();
    loadTasks();

    const allTasksButton = document.getElementById("all-tasks-button");
    allTasksButton.addEventListener("click", loadTasks);

    const addProjectLink = document.getElementById("add-project-link");
    addProjectLink.addEventListener("click", openAddProjectPopup);

    const buttonCancelProjectPopup = document.getElementById("button-cancel-project-popup");
    buttonCancelProjectPopup.addEventListener("click", openAddProjectPopup);

    const buttonAddProjectPopup = document.getElementById("button-add-project-popup");
    buttonAddProjectPopup.addEventListener("click", addProject);
}

// eslint-disable-next-line no-undef
feather.replace();
init();
