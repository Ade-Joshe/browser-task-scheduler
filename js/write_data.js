document.getElementById('postData').addEventListener('submit', postData);
function postData(event) {
  event.preventDefault();
  let id = JSON.parse(localStorage.getItem('browser-schedule')).length
  let name = document.getElementById('name').value;
  let body = document.getElementById('body').value;
  let time = document.getElementById('time').value;
  let created_at = Date.now()
  let done = false;

  value = { 'id': id, 'name': name, 'body': body, 'time': time, "created_at": created_at, 'done': done };
  data = JSON.parse(localStorage.getItem('browser-schedule'))
  data.push(value);
  var data2 = data
  localStorage.setItem("browser-schedule", JSON.stringify(data2))
  document.getElementById('name').value = ""
  document.getElementById('body').value = ""
  document.getElementById('time').value = ""
  chrome.notifications.create(
    'id2', {
    type: "basic",
    title: `New task scheduled`,
    message: `Your new task ${name} has been scheduled for ${time}`,
    iconUrl: "../icons/schedule_icon.png"
  },
    function () {
      // untold actions for here
    }
  );
  window.location.href = "index.html";
}


