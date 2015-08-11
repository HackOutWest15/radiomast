SongPlayer = null;


Session.setDefault('crossfade', 0);
Session.setDefault('currentSong', 'spotify:track:6JEK0CvvjDjjMUBFoXShNZ');

Meteor.startup(function() {
  SongPlayer = spotify.createAudioPlayer('313431d6c7c245f1b01d7994e440b3a4');

  Tracker.autorun(function() {
    var user = Meteor.user();

    if(user && user.services && user.services.spotify) {

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