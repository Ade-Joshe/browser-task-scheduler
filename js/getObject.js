function getParam() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


param=parseInt(getParam()['num']) 

var data=JSON.parse(localStorage.getItem('browser-schedule'))[param]

document.getElementById('title').innerHTML=data.name;
document.getElementById('body').innerHTML=data.body;
document.getElementById('time').innerHTML=data.time;

if(data.done==false){
    document.getElementById('complete').style.display="none";
}else{
    document.getElementById('mark').style.display="none"

}

document.getElementById('mark').addEventListener('click', function(){
    var index= JSON.parse(localStorage.getItem('browser-schedule')).indexOf(data)
      let id=data.id
      let name =data.name;
      let body = data.body; 
      let time = data.time;
      let done= true;
      value={'id':id, 'name':name, 'body':body, 'time':time, 'done':done};
      data_arr=JSON.parse(localStorage.getItem('browser-schedule'))
      data_arr.splice(index, 1)
      data_arr.splice(index, 0, value)   
      var data2= data_arr
      localStorage.setItem("browser-schedule", JSON.stringify(data2))
})

document.getElementById('delete').addEventListener('click', ()=>{
    var index= JSON.parse(localStorage.getItem('browser-schedule')).indexOf(data)
    data_arr=JSON.parse(localStorage.getItem('browser-schedule'))
    data_arr.splice(index, 1)
    data2= data_arr
    localStorage.setItem("browser-schedule", JSON.stringify(data2))

})