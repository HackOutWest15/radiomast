Template.latestBroadcasts.helpers({
  latestBroadCasts: function () {
    return Broadcasts.find();
  }
});

Template.latestBroadcasts.events({
  'click [data-listen-to-broadcast]': function () {
    Session.set('currentBroadcasts', this._id);
    console.log('start listened to ' + this._id);
  }
});

