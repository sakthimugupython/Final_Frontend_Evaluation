document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const taskCount = document.getElementById('taskCount');

    function updateUIState() {
        const count = taskList.querySelectorAll('li').length;
        taskCount.textContent = count;
        emptyState.style.display = count === 0 ? 'block' : 'none';
    }

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create list item
        const li = document.createElement('li');
        li.className = 'list-group-item';

        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn btn-sm complete-btn me-1';
        completeBtn.innerHTML = '<i class="bi bi-check2-circle me-1"></i>Complete';

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
        deleteBtn.innerHTML = '<i class="bi bi-trash3 me-1"></i>Delete';

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
        taskInput.focus();

        // Add event listeners
        completeBtn.addEventListener('click', () => {
            const completed = taskSpan.classList.toggle('completed');
            completeBtn.innerHTML = completed
                ? '<i class="bi bi-arrow-counterclockwise me-1"></i>Undo'
                : '<i class="bi bi-check2-circle me-1"></i>Complete';
            // Subtle pulse
            li.style.transition = 'transform 120ms ease';
            li.style.transform = 'scale(0.995)';
            setTimeout(() => (li.style.transform = 'scale(1)'), 120);
        });

        deleteBtn.addEventListener('click', () => {
            li.style.transition = 'opacity 180ms ease, transform 180ms ease';
            li.style.opacity = '0';
            li.style.transform = 'translateY(6px)';
            setTimeout(() => {
                li.remove();
                updateUIState();
            }, 180);
        });

        updateUIState();
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Init state
    updateUIState();
});
