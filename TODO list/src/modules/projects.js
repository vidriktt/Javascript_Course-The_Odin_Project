/* eslint-disable no-alert */

const projectsArray = [
    {
        title: "Default",
        tasks: [{
            title: "task1", description: "desc", dueDate: "01.01", priority: 0,
        },
        {
            title: "task2", description: "desc", dueDate: "01.01", priority: 1,
        }],
    },
];

const projectFactory = (title) => {
    const tasks = [];
    return { title, tasks };
};

function createProject(title) {
    projectsArray.push(projectFactory(title));
}

function loadProjects() {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = "";

    projectsArray.forEach((project) => {
        const projectButton = document.createElement("button");

        projectButton.setAttribute("id", project.title);
        projectButton.setAttribute("class", "secondary");
        projectButton.innerHTML = project.title;

        projectsList.appendChild(projectButton);
    });
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
