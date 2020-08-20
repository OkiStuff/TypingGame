// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
todoButton?.addEventListener('click', addTodo);
todoList?.addEventListener('click', deleteCheck);
filterOption?.addEventListener('click', filterToDo);

// Functions

function addTodo(event) {

    // prevent form submit 
    event.preventDefault();
    // To Do Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList?.appendChild(todoDiv)
    // clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    // check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterToDo(e) {
    const todos = todoList?.childNodes;
    if (todos === undefined) {
        // pass
    }
    else {
        todos.forEach(function(t) {
            switch(e.target.value) {
                case "all":
                    t.style.display = "flex";
                    break;
                case "completed":
                    if (t.classList.contains('completed')) {
                        t.style.display = 'flex';
                    }
                    else {
                        t.style.display = "none";
                    }
                    break;
            }
        });
    }
    
}