//form
const formLogin = document.getElementById("Login");

const inputLogin = formLogin.querySelector("input");


//h1
const h1 = document.getElementById("h1");

//class
const HIDDEN_CLASSNAME = "hidden";

const KEY_USERNAME = "username";


function clickLogin(event) {

    
    event.preventDefault();


    //form은 숨긴다.
    formLogin.classList.add('HIDDEN_CLASSNAME');
    const username = inputLogin.value;
    localStorage.setItem(KEY_USERNAME, username);

    //h1은 보여준다.
    displayGreeting(username);
}

//인사를 나타내는 함수 @param {*} argName
function displayGreeting(argName) {
    h1.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = `${argName}님, 반갑습니다.`;
}

//로컬 스토리지에서 가져온 사용자 이름
const localUsername = localStorage.getItem("KEY_USERNAME");

if(localUsername === null) {
    formLogin.classList.remove(HIDDEN_CLASSNAME);
    formLogin.addEventListener("submit", clickLogin);
}else{
    displayGreeting(localUsername);
}
