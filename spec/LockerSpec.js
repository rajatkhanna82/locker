describe("Locker", function() {
  var locker;
  var boxSizes = { small : 0, medium: 1, large : 2}

  beforeEach(function() {
    locker = new Locker();
  });

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
      expect(locker._lockerBoxes.medium[1]).toEqual(true);
      expect(message).toEqual('1:'+i);

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
      expect(message).toEqual('2:'+i);

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
      // expect(locker._lockerBoxes.large[1]).toEqual(true);
      expect(message).toEqual('Lockers are full');

  });
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
});
