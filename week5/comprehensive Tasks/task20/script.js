function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = function() {
        editTask(taskText);
    };
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteTask(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(taskText) {
    const newTask = prompt('Edit your task:', taskText.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
