Template.broadcast.events({
  'click [data-create-broadcast]': function () {
    Meteor.call('createBroadcast', function(broadcastObject){
      console.log('yeay');
    });
  }
});

