    //check if browser-schedule local storage is undefined and add empty array just in case user clears their local storage
    if(localStorage.getItem('browser-schedule')==undefined){
      localStorage.setItem('browser-schedule', JSON.stringify([]) )
    }

    
    //loop through localstorage item and display content
   document.getElementById('click2').addEventListener('click', function(){
   var data=JSON.parse(localStorage.getItem('browser-schedule'))
        var str = '<ul>'

        data.forEach(function(item) {
          str += '<li>'+ item.name + '</li>';
          if(item.done){
            str+= '<p>'+'done'+'</p>'
            str+=`<a href=item.html?num=${JSON.stringify(item.id)}>`+'view item'+`</a>`            
          }else{
            str+= '<p>'+'not done'+'</p>'
           str+=`<a href=item.html?num=${JSON.stringify(item.id)}>`+'view item'+`</a>`            
          }
          
        }); 
      
          str += '</ul>';
          document.getElementById("slideContainer").innerHTML = str;
          
  });
  
//delete all items in local storage
document.getElementById('delete').addEventListener('click', ()=>{
  localStorage.setItem('browser-schedule', JSON.stringify([]) )
})


