document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create list item
        const li = document.createElement('li');
        li.className = 'list-group-item task-item';

        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn btn-sm complete-btn me-2';
        completeBtn.style.backgroundColor = '#9ed2a0';
        completeBtn.style.color = 'white';
        completeBtn.textContent = 'Complete';

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
        deleteBtn.style.opacity = '0.8';
        deleteBtn.textContent = 'Delete';

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        // Add elements to list item
        li.appendChild(taskSpan);
        li.appendChild(buttonContainer);

        // Add list item to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';

        // Add event listeners
        completeBtn.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
            completeBtn.textContent = taskSpan.classList.contains('completed') ? 'Undo' : 'Complete';
            completeBtn.className = taskSpan.classList.contains('completed') 
                ? 'btn btn-warning btn-sm complete-btn me-2' 
                : 'btn btn-success btn-sm complete-btn me-2';
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
