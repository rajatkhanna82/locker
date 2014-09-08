/* Meathod : Constructor 
 * Arguments : sizes (Array) - sequence in which the type of boxes required to be filled. 
 *                             each element in the array is object with keys type and qty 
 *                              [{type : 'A', qty : 10},{type : 'B', qty : 20}]
 * description : Creates an instance of Locker 
*/
var Locker = function (sizes) {
  // Model data for locker boxes state true for occupied and false for empty
  this._lokerBoxes = {};
  // size and qty of that size boxes 
  this._sizes = sizes || [{type :'small'  , qty : 1000 },
                          {type: 'medium' , qty : 1000 },
                          {type: 'large' , qty :1000} ];
  // init all boxes to empty
  for(var size =0; size < this._sizes.length; size++) {
    for(var i = 1; i <= this._sizes[size].qty; i++) {
      this._lokerBoxes[this._sizes[size].type] = {}
      this._lokerBoxes[this._sizes[size].type][i] = false;
    }
  }

};
/* Meathod : addBags 
 * Arguments : bagSize 0 - small , 1 - med , 2 -large
 * description : adds bag to the locker and generates a ticket no based on the locker no.
 * return : (string) ticket no. or message Lockers are full
*/
Locker.prototype.addBags = function(bagSize) {
  // Check validity of the bag size
  if(bagSize < 0 || bagSize >= this._sizes.length) {
    console.warn("invalid bag size");
    return "invalid bag size";
  }
  // Locate the next empty box in the lockers of bagSize
  for (var i = 1; i <= this._sizes[bagSize].qty; i++) {
    if(!this._lokerBoxes[this._sizes[bagSize].type][i]) {
      this._lokerBoxes[this._sizes[bagSize].type][i] = true;
      return bagSize+':'+i;
    }
  };
  // if all the boxes of bagSize are occupied then add the bag in the next size
  if(bagSize < this._sizes.length -1 ){
    this.addBags(bagSize+1);
  } else {
    // All lockes are full
    return "Lockers are full";
  }
  
  
};

/* Meathod : returnBags 
 * Arguments : ticketNo (string) '0:23' represemted as typeOrder:BoxNo    
 * description : locates the box checks if it occupied and marks it as returned
 * return : (string) Box size and box no. 
*/
Locker.prototype.returnBag = function(ticketNo) {
  var ticket = ticketNo.split(':');
  var boxType = parseInt(ticket[0]);
  var boxNo = parseInt(ticket[1]);
  if(boxType <0 || boxType >= this._sizes.length || !this._sizes[boxType] ||
    boxNo <1 ||  boxNo > this._sizes[boxType].qty || 
    !this._lokerBoxes[this._sizes[boxType].type][boxNo]){
    
    return "Invalid ticket no."
  }
  this._lokerBoxes[this._sizes[boxType].type][boxNo] = false;
  return 'Size : '+ this._sizes[boxType].type + 'Box No. : ' + boxNo;
};
