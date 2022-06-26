
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

input.addEventListener('input', ontypeTodo);
addBtn.addEventListener('click', onClickAdd);

function ontypeTodo(){
  addBtn.disabled = input.value.length === 0; 
}

function onClickAdd(){
  const li = createItem(input.value);
  todoList.appendChild(li);
  input.value = '';
  addBtn.disabled = true;
}

function createItem(name){
    const listItem = document.createElement('li');
    const heading = document.createElement('h2');
    heading.textContent = name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', onClickDelete);

    listItem.appendChild(heading);
    listItem.appendChild(deleteButton);
  return listItem;
}

function onClickDelete(){
  this.parentNode.remove();
}