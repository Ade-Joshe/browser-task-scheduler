    if(localStorage.getItem('browser-schedule')==undefined){
      localStorage.setItem('browser-schedule', JSON.stringify([]) )
    }

    
    
   document.getElementById('click2').addEventListener('click', function(){
   var data=JSON.parse(localStorage.getItem('browser-schedule'))
        var str = '<ul>'

        data.forEach(function(item) {
          str += '<li>'+ item.name + '<br/>'+ item.body+ '</li>';
          if(item.done){
            str+= '<p>'+'done'+'</p>'
          }else{
            str+= '<p>'+'not done'+'</p>'
           str+=`<button>`+'Mark as done'+`</button>`
            
          }
        }); 
        
        str += '</ul>';
        document.getElementById("slideContainer").innerHTML = str;
  });
  