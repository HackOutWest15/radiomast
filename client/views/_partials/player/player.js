Template.player.helpers({
  title: function () {
    return Session.get('title');
  },
  artist: function () {
    return Session.get('artist');
  },
  album: function () {
    return Session.get('album');
  },
  albumArtURL: function () {
    return Session.get('albumArtURL');
  }
});

Template.player.events({
  'click [data-play]': function () {
      console.log('@#!@#!@#');

        var uri = $('input[name="song-uri"]').val();

        if(uri.length == 0) return;

        Session.set('currentSong', uri);

        SongPlayer.play(uri, function(err){
          console.log(err);
          console.log('1336 1336');
        });
   }
});
