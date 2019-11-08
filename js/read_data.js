
        json=JSON.parse(localStorage.getItem('browser-schedule'))
        var str = '<ul>'

        json.forEach(function(item) {
          str += '<li>'+ item.name + '<br/>'+ item.body+ '</li>';
        }); 
        
        str += '</ul>';
        document.getElementById("slideContainer").innerHTML = str;
  

    document.getElementById('postData').addEventListener('submit', postData);
    function postData(event){
      event.preventDefault();
      let id=1
      let name = document.getElementById('name').value;
      let body = document.getElementById('body').value; 
      let time = document.getElementById('time').value;
      let done= false;
      document.getElementById('postData').addEventListener('submit',function(){
       
       
          if(localStorage.getItem('browser-schedule')!==null){
         
          value={'id':id, 'name':name, 'body':body, 'time':time, 'done':done};
          oldSchedule=JSON.parse(localStorage.getItem('browser-schedule'))
          newSchedule=oldSchedule.concat(value)
          localStorage.setItem('browser-schedule', JSON.stringify(newSchedule))
          }else{
            localStorage.setItem('browser-schedule', JSON.stringify([{'id':id, 'name':name, 'body':body, 'time':time, 'done':done}]) )
          
         }        
      
     });
  }

    

   document.getElementById('click2').addEventListener('click', function(){
    chrome.storage.sync.get('schedule', function(items) {
      console.log(localStorage.getItem('browser-schedule'))
   })
  });