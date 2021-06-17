let todoInput = document.querySelector(".todo-input"); // todo input
let addTodoButton = document.querySelector(".add-todo"); // add todo button
let todosList = document.querySelector(".todos-list"); // empty ul

function addTodo(){
    let todo = todoInput.value;
    // "" , 0 , false , undefined
    if(todo){
        let listItem = document.createElement("li"); // it creates a element
        listItem.classList.add("todo-item"); // it adds class to a element
        // <li class="todo-item"></li>;

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // <p class="todo">Learn HTML !!!</p>

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.classList.add("far");
        deleteButton.classList.add("fa-minus-circle");
        deleteButton.innerText="";
        // <button class="delete-task"><i class="far fa-minus-square-5x"></i></button>

        deleteButton.addEventListener("click" , function(event){
            console.log(event);
            event.target.parentNode.remove();
        })

        listItem.append(pTag);
        listItem.append(deleteButton);
        todosList.append(listItem);
        todoInput.value = "";
    }
}

addTodoButton.addEventListener("click" , function(){
    addTodo()
});

todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});
