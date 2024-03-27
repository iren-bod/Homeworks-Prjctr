"use strict";

// Constants
const TASKS_STORAGE_KEY = "tasks";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filterInput = document.querySelector(".filter-input");

// "Storage" functions
const getTasksFromStorage = () => {
    return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || [];
};

const storeTasksInStorage = (tasks) => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const clearTasksFromStorage = () => {
    localStorage.removeItem(TASKS_STORAGE_KEY);
};

// Functions for task operations
const appendLi = (value) => {
    const li = document.createElement("li");
    li.innerHTML = `${value} <i class="fa fa-edit edit-item"></i> <i class="fa fa-remove delete-item"></i>`;
    taskList.append(li);

    const editButton = li.querySelector(".edit-item");
    editButton.addEventListener("click", editTask);
};

const addTask = (event) => {
    event.preventDefault();

    const value = taskInput.value.trim();
    if (value === "") {
        return;
    }

    appendLi(value);

    taskInput.value = "";
    taskInput.focus();

    const tasks = getTasksFromStorage();
    tasks.push(value);
    storeTasksInStorage(tasks);
};

const clearTasks = () => {
    taskList.innerHTML = "";
    clearTasksFromStorage();
};

const removeTask = (event) => {
    const isDeleteButton = event.target.classList.contains("delete-item");
    if (!isDeleteButton) {
        return;
    }

    const isConfirmed = confirm("Are you sure you want to delete this task?");
    if (!isConfirmed) {
        return;
    }

    const li = event.target.closest("li");
    const index = [...taskList.children].indexOf(li);

    li.remove();

    const tasks = getTasksFromStorage();
    tasks.splice(index, 1);
    storeTasksInStorage(tasks);
};

const editTask = (event) => {
    const isEditButton = event.target.classList.contains("edit-item");
    if (!isEditButton) {
        return;
    }

    const li = event.target.closest("li");
    const taskTextElement = li.firstChild;
    const taskText = taskTextElement.textContent;
    let newText = prompt("Edit task:", taskText);

    if (newText !== null && newText !== undefined) {
        newText = newText.trim();

        if (newText !== "") {
            taskTextElement.textContent = newText;

            const index = Array.from(taskList.children).indexOf(li);
            const tasks = getTasksFromStorage();
            tasks[index] = newText;
            storeTasksInStorage(tasks);
        } else {
            alert("The task text cannot be empty!");
        }
    }
};

const filterTasks = ({ target: { value } }) => {
    const text = value.toLowerCase();
    const list = taskList.querySelectorAll("li");

    list.forEach((li) => {
        const liText = li.textContent.trim().toLowerCase();
        li.hidden = !liText.includes(text);
    });
};

const initTasks = () => {
    const tasks = getTasksFromStorage();
    tasks.forEach(appendLi);
};

// Initialization
initTasks();

// Event listeners
form.addEventListener("submit", addTask);
clearButton.addEventListener("click", clearTasks);
taskList.addEventListener("click", removeTask);
filterInput.addEventListener("input", filterTasks);