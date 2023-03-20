/* eslint-disable no-alert */
// eslint-disable-next-line import/no-cycle
import loadTasks from "./tasks";

const projectsArray = [];

const projectFactory = (title) => {
    const tasks = [];
    return { title, tasks };
};

function createProject(title) {
    projectsArray.push(projectFactory(title));
}

function deleteProject(title) {
    for (let i = 0; i < projectsArray.length; i += 1) {
        if (projectsArray[i].title === title) {
            console.log(projectsArray[i]);
            projectsArray.splice(i, 1);
        }
    }
}

function loadProjects() {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = "";

    projectsArray.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projects-list-project");

        const projectButton = document.createElement("button");

        projectButton.setAttribute("id", project.title);
        projectButton.setAttribute("class", "secondary");
        projectButton.innerHTML = project.title;

        projectButton.addEventListener("click", () => {
            loadTasks(project);
        });

        const projectDeleteLink = document.createElement("a");
        projectDeleteLink.setAttribute("id", `${project.title}-delete`);
        projectDeleteLink.setAttribute("class", "secondary");
        projectDeleteLink.innerHTML = "X";

        projectDeleteLink.addEventListener("click", () => {
            deleteProject(project.title);
        });

        projectDiv.appendChild(projectButton);
        projectDiv.appendChild(projectDeleteLink);
        projectsList.appendChild(projectDiv);
    });

    if (projectsArray.length !== 0) { localStorage.projectsArray = JSON.stringify(projectsArray); }
}

function clickAddProject(addProjectLink, addProjectPopup, title) {
    if (title === "") {
        alert("Project without a name not allowed!");
    } else if (projectsArray.find((project) => project.title === title)) {
        alert("Project with that name already exists!");
    } else {
        addProjectLink.classList.toggle("show");
        addProjectPopup.classList.toggle("show");

        createProject(title);
        loadProjects();
    }
}

function openAddProjectPopup() {
    const addProjectLink = document.getElementById("add-project-link");
    const addProjectPopup = document.getElementById("add-project-popup");

    addProjectLink.classList.toggle("show");
    addProjectPopup.classList.toggle("show");
}

function addProject() {
    const addProjectLink = document.getElementById("add-project-link");
    const addProjectPopup = document.getElementById("add-project-popup");
    const addProjectPopupInput = document.getElementById("add-project-popup-input");
    const buttonAddProjectPopup = document.getElementById("button-add-project-popup");

    buttonAddProjectPopup.addEventListener("click", clickAddProject(addProjectLink, addProjectPopup, addProjectPopupInput.value));
    addProjectPopupInput.value = "";
}

export default projectsArray;
export { loadProjects, openAddProjectPopup, addProject };
