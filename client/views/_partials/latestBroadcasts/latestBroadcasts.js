Template.latestBroadcasts.helpers({
  latestBroadCasts: function () {
    return Broadcasts.find();
  },
  lastArrayElement: function(){
  	var currBc = Broadcasts.find({_id:Session.get('currentBroadcasts')}).fetch()[0];
  	return [currBc.playList[currBc.playList.length-1]];
  }
});

Template.latestBroadcasts.events({
  'click [data-listen-to-broadcast]': function () {
    Session.set('currentBroadcasts', this._id);
    console.log('start listened to ' + this._id);
  }
});


