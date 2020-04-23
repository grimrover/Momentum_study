const clockTime = document.querySelector(".clockHeart"),
  clockTitle = clockTime.querySelector(".clockFace"),
  clockMD = document.querySelector(".clockDay");

function getDayTime() {
  const date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    month = date.getMonth() + 1,
    dates = date.getDate(),
    day = date.getDay(),
    dayarry = ["일", "월", "화", "수", "목", "금", "토"],
    week = dayarry[day];

  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
    }:${second < 10 ? `0${second}` : second}`;

  clockMD.innerText = `${month < 10 ? `0${month}` : month}월 ${
    dates < 10 ? `0${dates}` : dates
    }일 ${week}요일`;
}

function init() {
  getDayTime();
  setInterval(getDayTime, 1000);
}

init();
