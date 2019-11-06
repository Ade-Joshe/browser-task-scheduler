//get the path of the file using chrome API
const url = chrome.runtime.getURL('js/data.json');

//use the fetch API to read content from the file
fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => {
        var str = '<ul>'

        json.forEach(function(item) {
          str += '<li>'+ item.name + '<br/>'+ item.description+ '</li>';
        }); 
        
        str += '</ul>';
        document.getElementById("slideContainer").innerHTML = str;
    });