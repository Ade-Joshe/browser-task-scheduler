//function to return route param from the loaded window
function getParam() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

//passing the param to a param variable
param=parseInt(getParam()['num']) 

//get the object from localstorage using the param index
var data=JSON.parse(localStorage.getItem('browser-schedule'))[param]

//pass in object value to HTML

document.getElementById('title').innerHTML=data.name;
document.getElementById('body').innerHTML=data.body;
document.getElementById('time').innerHTML=data.time;

if(data.done==false){
    document.getElementById('complete').style.display="none";
}else{
    document.getElementById('mark').style.display="none"

}

//mark item as complete
document.getElementById('mark').addEventListener('click', function(){
    //get index of item
    var index= JSON.parse(localStorage.getItem('browser-schedule')).indexOf(data)
      let id=data.id
      let name =data.name;
      let body = data.body; 
      let time = data.time;
      let done= true;
      //put in object to a new object variable, changing done to true
      value={'id':id, 'name':name, 'body':body, 'time':time, 'done':done};
      data_arr=JSON.parse(localStorage.getItem('browser-schedule'))
      //delete object from the array
      data_arr.splice(index, 1)
      //add new modified object back to array at it's previous index
      data_arr.splice(index, 0, value)   
      var data2= data_arr
      //stringify object and add back to localstorage
      localStorage.setItem("browser-schedule", JSON.stringify(data2))
})

//delete item from list
document.getElementById('delete').addEventListener('click', ()=>{
    //get index of item
    var index= JSON.parse(localStorage.getItem('browser-schedule')).indexOf(data)
    data_arr=JSON.parse(localStorage.getItem('browser-schedule'))
    //remove item from list
    data_arr.splice(index, 1)
    //reassign arr to a new variable and save in local storage
    data2= data_arr
    localStorage.setItem("browser-schedule", JSON.stringify(data2))

})