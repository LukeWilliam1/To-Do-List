//selector
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoLists=document.querySelector(".todo-list");
const error = document.querySelector('.error');


//EventListeners
todoButton.addEventListener('click', addTodo);
todoLists.addEventListener('click', deleteCheck);
todoInput.addEventListener('keypress', noti)


//functions
function noti (){
    error.textContent=('');
}
function addTodo(event){
    //prevent refresh
    event.preventDefault();
    //must fill noti
    if(todoInput.value == 0){
        error.textContent=("List must be filled!");
        return error;
        }
    //adding elements toDo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //completed and checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //adding all into ul
    todoLists.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
    
}
//check delete function
    function deleteCheck (e){
        //delete todo
        const item = e.target;
        if(item.classList[0] === "trash-btn"){
            const toDo=item.parentElement;
            toDo.remove();
        }
         //check todo
        if(item.classList[0] === "complete-btn"){
            const toDO = item.parentElement;
            toDO.classList.toggle('completed')
        }
    }