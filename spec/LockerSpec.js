describe("Locker", function() {
  var locker;
  var boxSizes = { small : 0, medium: 1, large : 2}

  beforeEach(function() {
    locker = new Locker();
  });
  describe("Add Bags in Locker", function() {
    it("should be able to add bag of size small", function() {

      var message = locker.addBags(boxSizes.small);
      expect(locker._lockerBoxes.small[1]).toEqual(true);
      expect(message).toEqual('0:1');
    });
     it("should be able to add bag of size medium", function() {

      var message = locker.addBags(boxSizes.medium);
      expect(locker._lockerBoxes.medium[1]).toEqual(true);
      expect(message).toEqual('1:1');
    });
     it("should be able to add bag of size large", function() {

      var message = locker.addBags(boxSizes.large);
      expect(locker._lockerBoxes.large[1]).toEqual(true);
      expect(message).toEqual('2:1');
    });
    it("should be able to add 1000 bags size small", function() {
      var message;
      for(var i = 1; i <=1000 ; i++ ) {
        message = locker.addBags(boxSizes.small);
        expect(locker._lockerBoxes.small[i]).toEqual(true);
        expect(message).toEqual('0:'+i);
        
      }
    });
    it("should be able to add 1001 bags size small", function() {
      var message;
      for(var i = 1; i <=1000 ; i++ ) {
        message = locker.addBags(boxSizes.small);
        expect(locker._lockerBoxes.small[i]).toEqual(true);
        expect(message).toEqual('0:'+i);
      }
        message = locker.addBags(boxSizes.small);
        console.log(message);
        expect(locker._lockerBoxes.medium[1]).toEqual(true);
        expect(message).toEqual('1:'+1);

    });
    it("should be able to add 1000 bags size medium", function() {
      var message;
      for(var i = 1; i <=1000 ; i++ ) {
        message = locker.addBags(boxSizes.medium);
        expect(locker._lockerBoxes.medium[i]).toEqual(true);
        expect(message).toEqual('1:'+i);
        
      }
    });
    it("should be able to add 1001 bags size medium", function() {
      var message;
      for(var i = 1; i <=1000 ; i++ ) {
        message = locker.addBags(boxSizes.medium);
        expect(locker._lockerBoxes.medium[i]).toEqual(true);
        expect(message).toEqual('1:'+i);
      }
        message = locker.addBags(boxSizes.medium);
        expect(locker._lockerBoxes.large[1]).toEqual(true);
        expect(message).toEqual('2:'+1);

    });
    it("should be able to add 1000 bags size large", function() {
      var message;
      for(var i = 1; i <=1000 ; i++ ) {
        message = locker.addBags(boxSizes.medium);
        expect(locker._lockerBoxes.medium[i]).toEqual(true);
        expect(message).toEqual('1:'+i);
        
      }
    });
    it("should not be able to add 1001 bags size large", function() {
      var message;
      for(var i = 1; i <=1000 ; i++ ) {
        message = locker.addBags(boxSizes.large);
        expect(locker._lockerBoxes.large[i]).toEqual(true);
        expect(message).toEqual('2:'+i);
      }
        message = locker.addBags(boxSizes.large);
        expect(message).toEqual('Lockers are full');

    });
  });
  describe(" Remove Bags in Locker", function() {
    it("should be able to remove bag of size small for a ticket No.", function() {
      var ticket = locker.addBags(boxSizes.small);
      expect(locker._lockerBoxes.small[1]).toEqual(true);
      var message = locker.returnBag(ticket);
      expect(locker._lockerBoxes.small[1]).toEqual(false);
      expect(message).toEqual('Size : small Box No. : 1');
    });
    it("should be able to remove bag of size medium for a ticket No.", function() {
      var ticket = locker.addBags(boxSizes.medium);
      expect(locker._lockerBoxes.medium[1]).toEqual(true);
      var message = locker.returnBag(ticket);
      expect(locker._lockerBoxes.medium[1]).toEqual(false);
      expect(message).toEqual('Size : medium Box No. : 1');
    });
    it("should be able to remove bag of size large for a ticket No.", function() {
      var ticket = locker.addBags(boxSizes.large);
      expect(locker._lockerBoxes.large[1]).toEqual(true);
      var message = locker.returnBag(ticket);
      expect(locker._lockerBoxes.large[1]).toEqual(false);
      expect(message).toEqual('Size : large Box No. : 1');
    });
    it("should be able to add and remove bag for a ticket No.", function() {
      locker.addBags(boxSizes.small);
      var ticket = locker.addBags(boxSizes.small);
      locker.addBags(boxSizes.small);
      expect(locker._lockerBoxes.small[1]).toEqual(true);
      expect(locker._lockerBoxes.small[2]).toEqual(true);
      expect(locker._lockerBoxes.small[3]).toEqual(true);

      var message = locker.returnBag(ticket);
      expect(locker._lockerBoxes.small[1]).toEqual(true);
      expect(locker._lockerBoxes.small[2]).toEqual(false);
      expect(locker._lockerBoxes.small[3]).toEqual(true);
      expect(message).toEqual('Size : small Box No. : 2');
      
      ticket = locker.addBags(boxSizes.small);
      expect(locker._lockerBoxes.small[2]).toEqual(true);
    });
  });

});
