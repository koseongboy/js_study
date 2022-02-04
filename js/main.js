const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");

//addEventListener(어떤 이벤트, 어떤 기능)
button.addEventListener("click", onSubmit);



function onSubmit(e) {
    e.preventDefault();

    if(todoInput.value === '') {
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 2000 )
        return;
    }
    
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = '';
}