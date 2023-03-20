import { format } from "date-fns";
import projectsArray, { loadProjects } from "./projects";
import loadTasks from "./tasks";

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException
            // everything except Firefox
            && (e.code === 22
                // Firefox
                || e.code === 1014
                // test name field too, because code might not be present
                // everything except Firefox
                || e.name === "QuotaExceededError"
                // Firefox
                || e.name === "NS_ERROR_DOM_QUOTA_REACHED")
            // acknowledge QuotaExceededError only if there's something already stored
            && storage
            && storage.length !== 0
        );
    }
}

function localStorageInit() {
    if (storageAvailable("localStorage")) {
        JSON.parse(localStorage.projectsArray).forEach((project) => {
            projectsArray.push(project);
        });
        loadProjects();
        loadTasks();
    } else {
        projectsArray.push(
            {
                title: "Default",
                tasks: [{
                    title: "task1", description: "desc", dueDate: format(new Date(2023, 3, 1), "yyyy-MM-dd"), priority: "low", checked: false,
                },
                {
                    title: "task2", description: "desc", dueDate: format(new Date(2023, 3, 1), "yyyy-MM-dd"), priority: "medium", checked: false,
                }],
            },
            {
                title: "Default1",
                tasks: [{
                    title: "task01", description: "desc", dueDate: format(new Date(2023, 3, 1), "yyyy-MM-dd"), priority: "high", checked: false,
                },
                {
                    title: "task21", description: "desc", dueDate: format(new Date(2023, 3, 1), "yyyy-MM-dd"), priority: "medium", checked: false,
                }],
            },
            {
                title: "Default2",
                tasks: [{
                    title: "task02", description: "desc", dueDate: format(new Date(2023, 3, 1), "yyyy-MM-dd"), priority: "low", checked: false,
                },
                {
                    title: "task22", description: "desc", dueDate: format(new Date(2023, 3, 1), "yyyy-MM-dd"), priority: "medium", checked: true,
                }],
            },
        );
    }
}

export default localStorageInit;
