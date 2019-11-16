    //check if browser-schedule local storage is undefined and add empty array just in case user clears their local storage
    if(localStorage.getItem('browser-schedule')==undefined){
      localStorage.setItem('browser-schedule', JSON.stringify([]) )
    }

    
    //loop through localstorage item and display content
   document.getElementById('click2').addEventListener('click', function(){
   var data=JSON.parse(localStorage.getItem('browser-schedule'))
        var str = `<div style="padding-left:5px; padding-right:5px; width:100px;">`

        data.forEach(function(item) {
          str += `<h3 style=" text-transform: uppercase;">`+ item.name + `</h3> &#9775; `;
          str += `<small> Time: `+ `<i>`+ item.time+ `</i>`+`</small>`;
          if(item.done){
            str+= `<p style="font-size:20px;">`+'&#x2713;'+'</p>'
            str+=`<a style="text-decoration: none; color:black" href=item.html?num=${JSON.stringify(item.id)}>`+'view item'+`</a>`            
          }else{
            str+= '<p>'+'not done'+'</p>'
           str+=`<a style="text-decoration: none; color:black" href=item.html?num=${JSON.stringify(item.id)}>`+'view item'+`</a>`            
          }
          str+=`<hr/>`
          
        }); 
      
          str += '</div>';
          document.getElementById("slideContainer").innerHTML = str;
          
  });
  
//delete all items in local storage
document.getElementById('delete').addEventListener('click', ()=>{
  localStorage.setItem('browser-schedule', JSON.stringify([]) )
})


//check if item has been in localstorage for over or equal 24 hours
//if true delete item
var data=JSON.parse(localStorage.getItem('browser-schedule'))
data.forEach((item)=>{
  var time_now={time: Date.now()}
  diff= Math.abs(item.created_at - time_now.time) / 36e5;
  if(diff>=24){
    var index= JSON.parse(localStorage.getItem('browser-schedule')).indexOf(item)
    data_arr=JSON.parse(localStorage.getItem('browser-schedule'))
    //remove item from list
    data_arr.splice(index, 1)
    //reassign arr to a new variable and save in local storage
    data2= data_arr
    localStorage.setItem("browser-schedule", JSON.stringify(data2))
  }
})