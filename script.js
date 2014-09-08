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