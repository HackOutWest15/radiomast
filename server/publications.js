Meteor.publish('broadcasts', function() {
  return Broadcasts.find();
});
