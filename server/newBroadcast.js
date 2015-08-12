Meteor.methods({
  createBroadcast: function() {
    console.log('asdad');
    return Broadcasts.insert({
      userId: Meteor.userId(),
      username: Meteor.user().profile.id,
      isLive: true,
      crossfade: "0.5",
      audioStream: "http://",
      category: "Hackaton",
      playList: []
    });
  },
  playSong: function(songObject){
    return Broadcasts.update({userId:Meteor.userId()},
      { $push: { playList: songObject}})
  },
  changeVolume: function(number){
    return Broadcasts.update({userId:Meteor.userId()}, {$set: {crossfade: number}});
  }
});