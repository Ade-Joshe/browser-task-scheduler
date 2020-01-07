//check if browser-schedule local storage is undefined and add empty array just in case user clears their local storage
if (localStorage.getItem('browser-schedule') == undefined) {
  localStorage.setItem('browser-schedule', JSON.stringify([]))
}


//loop through localstorage item and display content
var data = JSON.parse(localStorage.getItem('browser-schedule'))
var str = `<div style="padding-left:5px; padding-right:5px;" class="container>`
if (data.length < 1) {
  document.getElementById('empty').style.display = "block"
} else {
  document.getElementById('empty').style.display = "none"
}
data.forEach(function (item) {

  str += `<ul class="list-group">`
  str += `<a class='itemBox' style="color:black; text-decoration:none" href="item.html?num=${JSON.stringify(item.id)}">`
  str += `<li class="list-group-item d-flex justify-content-between align-items-center">` + item.name +
    `<span class="badge">${item.time}</span>
          </li>`
  str += `</a>`
  if (item.done) {
    str += `<p style="font-size:10px; color: green">` + '&#x2713; Done' + '</p>'
  } else {
    str += '<p style="font-size: 10px; color: tomato">' + 'pending' + '</p>'
  }

});
str += `</ul>`
str += '</div>';
document.getElementById("slideContainer").innerHTML = str;


//delete all items in local storage
document.getElementById('delete').addEventListener('click', () => {
  localStorage.setItem('browser-schedule', JSON.stringify([]))
  document.getElementById('slideContainer').innerHTML = "";
  document.getElementById('empty').style.display = "block"

})


//check if item has been in localstorage for over or equal 24 hours
//if true delete item
var data = JSON.parse(localStorage.getItem('browser-schedule'))
data.forEach((item) => {
  var time_now = { time: Date.now() }
  diff = Math.abs(item.created_at - time_now.time) / 36e5;
  if (diff >= 24) {
    var index = JSON.parse(localStorage.getItem('browser-schedule')).indexOf(item)
    data_arr = JSON.parse(localStorage.getItem('browser-schedule'))
    //remove item from list
    data_arr.splice(index, 1)
    //reassign arr to a new variable and save in local storage
    data2 = data_arr
    localStorage.setItem("browser-schedule", JSON.stringify(data2))
  }
})