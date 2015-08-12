Template.submenu.helpers({
  currentBroadcast: function(){
    return Broadcasts.find({_id:Session.get('currentBroadcasts')});
  }, 
  currentSong: function(){
  	return [Broadcasts.find({_id:Session.get('currentBroadcasts')}).fetch()[0].playList[Broadcasts.find({_id:Session.get('currentBroadcasts')}).fetch()[0].playList.length-1]];
  }
});
