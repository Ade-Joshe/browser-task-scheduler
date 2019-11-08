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
