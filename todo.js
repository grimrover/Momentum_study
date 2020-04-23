const toDoForm = document.querySelector(".js-todoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todolist");

const TODOS_LocalStorage = "toDos";

let toDos = [];
//const toDos=[]; const는 범위의 문제로 삭제한 데이터 포용이 안됨


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LocalStorage, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerText = "✖"
    delBtn.addEventListener("click", deleteToDo);
    const todotext = document.createElement("todotext");
    todotext.innerText = text;
    li.appendChild(todotext);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentToDo = toDoInput.value;
    paintToDo(currentToDo);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LocalStorage);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}



function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();