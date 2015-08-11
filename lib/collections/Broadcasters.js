Broadcasts = new Mongo.Collection('broadcasts');
var Schemas = {};

broadcasterStream = new Meteor.Stream('broadcast');

Schemas.Broadcasts = new SimpleSchema({
    uID: {
        type: String,
        label: "User ID"
    },
    audioStreamUrl: {
        type: String,
        label: "Url of broadcast"
    },
    playList: {
        type: [String],
        label: "List of tracks played during the broadcast",
        optional: true
    }
});
Broadcasts.attachSchema(Schemas.Broadcasts);

Broadcasts.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return false;
  }
});

Meteor.methods({
  addBroadcast: function() {
      Broadcasts.insert({uID : Meteor.user().profile.id, audioStreamUrl:"www.facebook.com", playList:[""]});
      //Session.set('currentBroadCast','bgrn'); // find/fetch i Broadcasts, senast tillagda (den ovan)
  },
  addSong: function(song) {
    console.log("banana");
      Broadcasts.update(
        {_id:Broadcasts.findOne({uID:Meteor.user().profile.id})['_id']},
      { $push:
        {
          playList: song
        }
      })
  },
  emitSong: function(song) {
        broadcasterStream.emit('bgrn', song);
  },
  setBroadcast: function(currentBroadCast) {
    broadcasterStream.on('bgrn', function(message) {
          Session.set('currentSong', message);
      });
  }
})