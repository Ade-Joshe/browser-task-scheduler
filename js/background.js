chrome.runtime.onInstalled.addListener(function() {
    // alert("welcome")
    localStorage.setItem('browser-schedule', JSON.stringify([]) )
    chrome.notifications.create(
      'id1',{   
          type:"basic",
          title:"Hello",
          message:"Welcome to Browser Scheduler. Set ToDo list on your browser. Items would be deleted after staying 24 hours on the list",
          iconUrl:"../icons/schedule_icon.png"
      },
      function() { 
    
      }     
    );


    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: '*'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });

  