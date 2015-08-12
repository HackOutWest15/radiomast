Template.submenu.helpers({
  currentBroadcast: function(){
    return Broadcasts.find({_id:Session.get('currentBroadcasts')});
  }
});
