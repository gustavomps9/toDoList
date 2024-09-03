const inputTask = document.getElementById('inputTask');
const taskList = document.getElementById('taskList');

function addTask() {
    if(inputTask.value === '') {
        alert('É necessário escrever uma tarefa!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = ' X';
        li.appendChild(span);
    }
    inputTask.value = '';
    saveData();
}

taskList.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('taskList', taskList.innerHTML);
}

function loadData() {
    taskList.innerHTML = localStorage.getItem('taskList');
}

loadData();