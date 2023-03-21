let todos = [];
const todoForm = document.querySelector("#form");
const todoInput = document.querySelector("#input");
const todoList = document.querySelector("#list");

function renderTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const list = document.createElement("li");
    list.innerHTML = `<label for='list1'>${todo.text}</label>`;
    list.addEventListener("click", () => changeTodoStatus(i));
    list.classList.toggle("checked", todo.checked);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Todo";
    deleteButton.addEventListener("click", () => deleteTodo(i));

    list.appendChild(deleteButton);
    todoList.appendChild(list);
  }
}

function changeTodoStatus(ele) {
  todos[ele].checked = !todos[ele].checked;
  renderTodos();
}

function deleteTodo(ele) {
  todos.splice(ele, 1);
  renderTodos();
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  if (todoInput.value) {
    todos.push({ text: todoInput.value, checked: false });
    todoInput.value = "";
    renderTodos();
    todoInput.focus();
  }
}

renderTodos();
