const clockMD = document.querySelector(".clockDay");

function getDay() {
  const dateD = new Date();
  //const year = datee.getFullYear();
  const month = dateD.getMonth() + 1;
  const dates = dateD.getDate();
  const day = dateD.getDay();
  const dayarry = ["일", "월", "화", "수", "목", "금"];
  const week = dayarry[day];

  clockMD.innerText = `${month < 10 ? `0${month}` : month}월 ${
    dates < 10 ? `0${dates}` : dates
  }일 ${week}요일`;
}

function init() {
  getDay();
  setInterval(getDay, 43200000);
}

init();
