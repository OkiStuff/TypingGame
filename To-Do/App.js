// Selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector('.filter-todo');
// Event Listeners
todoButton === null || todoButton === void 0 ? void 0 : todoButton.addEventListener('click', addTodo);
todoList === null || todoList === void 0 ? void 0 : todoList.addEventListener('click', deleteCheck);
filterOption === null || filterOption === void 0 ? void 0 : filterOption.addEventListener('click', filterToDo);
// Functions
function addTodo(event) {
    // prevent form submit 
    event.preventDefault();
    // To Do Div
    var todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button
    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
}
function deleteCheck(e) {
    var item = e.target;
    // delete todo
    if (item.classList[0] === 'trash-btn') {
        var todo_1 = item.parentElement;
        // Animation
        todo_1.classList.add('fall');
        todo_1.addEventListener('transitionend', function () {
            todo_1.remove();
        });
    }
    // check mark
    if (item.classList[0] === "complete-btn") {
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterToDo(e) {
    var todos = todoList === null || todoList === void 0 ? void 0 : todoList.childNodes;
    if (todos === undefined) {
        // pass
    }
    else {
        todos.forEach(function (t) {
            switch (e.target.value) {
                case "all":
                    t.style.display = "flex";
                    break;
                case "completed":
                    if (t.classList.contains('completed') && t !== undefined) {
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
