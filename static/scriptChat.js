let a = 56;
const input = document.getElementById("send_msg");
// const buttun = document.getElementById("send_btn");
const message_area = document.getElementsByClassName("message_area")[0];
const button = document.getElementById("send_btn");
const form = document.querySelector("form");

// console.log(form);
// console.log(message_area);
// button.addEventListener("click", function() {
//   alert("Button clicked!");
// });

const now = new Date();

// Прокомментировать
function current_date(){
  const now = new Date(); // создаем констату с временем(в секундах) с 1970 годя
  const date = now.getDate().toString(); // узнаем о сегодняшнем дне 
//   const moment = require('moment');
//   moment.locale('en');
//   let monthList = moment.months();
//   console.log(monthList); 
  let monthList = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  let month = now.getMonth();
  month = monthList[month];
  // let month = (now.getMonth() + 1).toString().padStart(2, '0'); // узнаем какой сейчас месяц...

  // switch (month) {
  //   case '01':
  //     month = "январь блять";
  //     break;
  //   case "02":
  //     month = "февраль";
  //     break;
  //   case "03":
  //     month = "март";
  //     break;
  //   case "04":
  //     month = "апрель";
  //     break;
  //   case "05":
  //     month = "май";
  //     break;
  //   case "06":
  //     month = "июнь";
  //     break;
  //   case "07":
  //     month = "июль";
  //     break;
  //   case "08":
  //     month = "август";
  //     break;
  //   case "09":
  //     month = "сентябрь";
  //     break;
  //   case "10":
  //     month = "октябрь";
  //     break;
  //   case "11":
  //     month = "ноябрь";
  //     break;
  //   case "12":
  //     month = "декабрь";
  //     break;      
  //   default:
  //     break;
  // }

  const year = now.getFullYear().toString().slice(-2); // год...
  const hours = now.getHours().toString().padStart(2, '0'); // час...
  const minutes = now.getMinutes().toString().padStart(2, '0'); // минуты...
  const ai = 20;
  const currentDateTime = `${date} ${month} ${ai}${year} ${hours}:${minutes}`; //создаем констату где будет всё время и...
  return currentDateTime; // возвращаем 
};

function press(data, text){
  // message_area.appChaild();
  // var msg = document.createElement("div");
  // msg.className = 'message_content my_mes';
  // let child_msg =  document.createElement("div");
  // child_msg.className = 'message';
  // msg.appendChild(child_msg)
  let msg = document.createElement("div");
  msg.className = 'my_mes message_cont';
  msg.innerHTML = '<div class="message"><div class="send_data">'+data+'</div><div class="message_content">'+text+'</div></div>'
  message_area.appendChild(msg); 
};


// Прокомментировать
form.addEventListener('submit', (event) => { // нажатие на кнопку
  event.preventDefault();
  let msg = input.value; // текст которые пишут люди
  if (msg) { // ! => отрицание
    press(current_date(), msg); // функция которая выше
    input.value = ""; // и обнуляем строчку с сообщением
  }
})

