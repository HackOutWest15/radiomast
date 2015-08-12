Meteor.methods({
  createBroadcast: function() {
    console.log('asdad');
    return Broadcasts.insert({
      userId: Meteor.userId(),
      isLive: true,
      crossfade: "0.5",
      audioStream: "http://",
      category: "Hackaton",
      playList: []
    });
  },
  playSong: function(uri){
    return Broadcasts.update({userId:Meteor.userId()},
      { $push: { playList: uri}})
  },
  changeVolume: function(number){
    return Broadcasts.update({userId:Meteor.userId()}, {$set: {crossfade: number}});
  }
});