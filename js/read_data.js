    if(localStorage.getItem('browser-schedule')==undefined){
      localStorage.setItem('browser-schedule', JSON.stringify([]) )
    }

    
    
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
  