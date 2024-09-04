document.addEventListener('DOMContentLoaded', function() {
    const inputTask = document.getElementById('inputTask');
    const taskList = document.getElementById('taskList');
    const btnAddTask = document.getElementById('btnAddTask');

    function addTask() {
        const taskValue = inputTask.value.trim();

        if (taskValue === '') {
            alert('É necessário escrever uma tarefa!');
        } else {
            const li = document.createElement('li');
            li.textContent = taskValue;

            const span = document.createElement('span');
            span.textContent = ' X';
            span.classList.add('close'); 

            li.appendChild(span);
            taskList.appendChild(li);

            inputTask.value = '';
            saveData();
        }
    }

    function saveData() {
        localStorage.setItem('taskList', taskList.innerHTML);
    }

    function loadData() {
        const storedTasks = localStorage.getItem('taskList');
        if (storedTasks) {
            taskList.innerHTML = storedTasks;
        }
    }

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
    });

    btnAddTask.addEventListener('click', addTask);

    loadData();
});
