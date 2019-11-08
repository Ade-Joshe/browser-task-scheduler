    if(localStorage.getItem('browser-schedule')==undefined){
      localStorage.setItem('browser-schedule', JSON.stringify([]) )
    }
    document.getElementById('postData').addEventListener('submit', postData);
    function postData(event){
      event.preventDefault();
      let id=JSON.parse(localStorage.getItem('browser-schedule')).length
      let name = document.getElementById('name').value;
      let body = document.getElementById('body').value; 
      let time = document.getElementById('time').value;
      let done= false;
                
          value={'id':id, 'name':name, 'body':body, 'time':time, 'done':done};
          data=JSON.parse(localStorage.getItem('browser-schedule'))
          data.push(value);
          var data2= data
          localStorage.setItem("browser-schedule", JSON.stringify(data2))
     
  }


   document.getElementById('click2').addEventListener('click', function(){
   var data=JSON.parse(localStorage.getItem('browser-schedule'))
        var str = '<ul>'

        data.forEach(function(item) {
          str += '<li>'+ item.name + '<br/>'+ item.body+ '</li>';
          if(item.done){
            str+= '<button>'+'done'+'</button>'
          }else{
            str+= '<button>'+'not done'+'</button>'
          }
        }); 
        
        str += '</ul>';
        document.getElementById("slideContainer").innerHTML = str;
  });