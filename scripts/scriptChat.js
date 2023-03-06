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


// Прокомментировать
function current_date(){
  const now = new Date();
  const date = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear().toString().slice(-2);
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const currentDateTime = `${date} ${month} ${year} ${hours}:${minutes}`;
  return currentDateTime;
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
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let msg = input.value;
  console.log(msg)
  press(current_date(), msg);
  input.value = "";
})

