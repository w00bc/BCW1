/*
 *  최초 작성일 : 2023-11-24
    최초 작성자 : 방찬우
    이력 : 2023-11-24 최초 작성
    기능 : todo 리스트를 제어한다
           todo 리스트 추가
           todo 리스트 로컬 스토리지에 저장
 */
const formToDo = document.getElementById("formToDo");
const listToDo = document.getElementById("listToDo");
const inputToDo = document.querySelector("#formToDo input");
let todos = []
const KEY_TODOS = "todos";

//
function saveTodos(){
    console.log("todos", todos);
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

//ToDo 리스트에서 항목을 삭제한다
function deleteToDo(event){
    console.log("deleteToDo 항목 시작");
    //console.log(event);
    //console.dir(event);
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

//ToDo 리스트 목록을 출력한다
function displayToDo(arg){
    //리스트(ul)에 추가하기
    //ul>li>span
    //li 추가
    const li = document.createElement("li");
    li.id = arg.id;
    //span 추가
    const span = document.createElement("span");
    //span에 할 일 추가
    span.innerText = arg.text;
    //X버튼 추가
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    listToDo.appendChild(li);
}

function handleSubmitTodo(event){
    event.preventDefault();
    const valueToDo = inputToDo.value;
    console.log(valueToDo);
    inputToDo.value = "";
    const newToDoObj = {
        text : valueToDo,
        id : Date.now(),
        };
    todos.push(newToDoObj);
    console.log(todos);
    displayToDo(newToDoObj);
    saveTodos();
}
formToDo.addEventListener("submit", handleSubmitTodo);

const lsSaveTodos = localStorage.getItem(KEY_TODOS);
if(lsSaveTodos !== null) {
    console.log("lsSaveTodos", lsSaveTodos);
    const parseLsSaveTodos = JSON.parse(lsSaveTodos);
    todos = parseLsSaveTodos;
    parseLsSaveTodos.forEach(displayToDo);

}

