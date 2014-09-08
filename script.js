window.onload = function () {
  console.log('reload')
  var locker = new Locker();

  var selectSize = document.getElementById('size');
  for(var i= 0; i < locker._sizes.length ; i ++) {
    var size = new Option(locker._sizes[i].type,i);
    selectSize.options.add(size);
  }

  document.getElementById('generateTicket').addEventListener('click',function(){
    var message =  locker.addBags(selectSize.selectedIndex);
    document.getElementById('message').innerHTML  = message;
  });
  
  document.getElementById('getBag').addEventListener('click',function(){
    var message =  locker.returnBag(document.getElementById('ticketInput').value);
    document.getElementById('message').innerHTML  = message;
  });

    
  
}
function tabs(selectedtab) {  
  // contents
  var s_tab_content = "tab_content_" + selectedtab; 
  var contents = document.getElementsByTagName("div");
  for(var x=0; x<contents.length; x++) {
    name = contents[x].getAttribute("name");
    if (name == 'tab_content') {
      if (contents[x].id == s_tab_content) {
      contents[x].style.display = "block";            
      } else {
      contents[x].style.display = "none";
      }
    }
  } 
  // tabs
  var s_tab = "tab_" + selectedtab;   
  var tabs = document.getElementsByTagName("a");
  for(var x=0; x<tabs.length; x++) {
    name = tabs[x].getAttribute("name");
    if (name == 'tab') {
      if (tabs[x].id == s_tab) {
      tabs[x].className = "active";           
      } else {
      tabs[x].className = "";
      }
    }
  }   
}
