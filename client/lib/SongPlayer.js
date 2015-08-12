SongPlayer = null;

Session.setDefault('crossfade', "0.5");
Session.setDefault('currentSong', 'spotify:track:6JEK0CvvjDjjMUBFoXShNZ');

Meteor.startup(function() {
  SongPlayer = spotify.createAudioPlayer('313431d6c7c245f1b01d7994e440b3a4');

  Tracker.autorun(function() {
    var user = Meteor.user();

    if(user && user.profile) {

      Meteor.call('getAPISession', function(err, session){
        if(err){
          return console.log(err);
        }

        SongPlayer.login(session, function(error) {
          if(err){
            return console.log(err);
          }
        });
      });
    }
  });
});

Meteor.startup(function() {
  Tracker.autorun(function() {
    var current = Broadcasts.find({_id:Session.get('currentBroadcasts')}).fetch()[0];
    console.log('epic!');
    console.log(current);

    if(!Session.get('currentBroadcasts')) return;
    if (!current) return;
    if (current.playList.length === 0) return;

    var newSong = current.playList[current.playList.length-1];
    var newVolume = current.crossfade;

    if(newSong !== Session.get('currentSong')) {
      Session.set('currentSong', newSong);
    }

    if(newVolume !== Session.get('crossfade')) {
      Session.set('crossfade', newVolume);
    }
  });

  Tracker.autorun(function() {
    SongPlayer.play(Session.get('currentSong'), function(err) {
      if(err) {
        return console.log(err);
      }
    });
  });

  Tracker.autorun(function() {
    SongPlayer.setVolume(Session.get('crossfade'), function(err) {
      if(err) {
        return console.log(err);
      }
    });
  });
});