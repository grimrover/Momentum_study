const hForm = document.querySelector(".helloform"),
  input = hForm.querySelector("input"),
  hellob = document.querySelector(".hellojs");

const USER_LS = "currentUSer",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  displayName(currentValue);
  saveName(currentValue);
}

function askForName() {
  hForm.classList.add(SHOWING_CN);
  hForm.addEventListener("submit", handleSubmit);
}

/*function deleteDN(event) {
  const btn = event.target;
  const hellob = btn.parentNode;
  hellob.appendChild(delBtn);

  //const cleanToDos = currentUSer.filter(function (toDo) {
  //return toDo.id !== parseInt(li.id);
  // });//
  currentUSer = "";
  saveName();
}*/

function displayName(text) {
  hForm.classList.remove(SHOWING_CN);
  hellob.classList.add(SHOWING_CN);
  //const delBtn = document.createElement("button");
  hellob.innerText = `안녕하세요 ${text} 굿데이`;
  //delBtn.addEventListener("click", deleteDN);
  //delBtn.innerText = "✖";
  //hellob.appendChild(delBtn);

}

function loadName() {
  const currentUSer = localStorage.getItem(USER_LS);
  if (currentUSer === null) {
    askForName();
  } else {
    displayName(currentUSer);
  }
}

function init() {
  loadName();
}

init();
