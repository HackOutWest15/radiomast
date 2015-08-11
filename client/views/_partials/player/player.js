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
  'click [data-search]': function () {
      console.log('Search');

        var query = $('input[name="song-query"]').val();
        if(query.length == 0) return;

        var query = $('input').val();


        Meteor.call('getSearch', query, function(err, result){
          if(err){
            return console.log(err);
          }

          // Add song uri to field
          $('input[name="song-uri"]').val(result.uri);

          // Get info from track
          var title = result.name;
          console.log(title);
          var artist = result.artists[0].name;
          console.log(artist);
          var album = result.album.name;
          console.log(album);
          var albumArtURL = result.album.images[1].url;
          console.log(albumArtURL);

          // Push info to html
          Session.set('title', title);
          Session.set('artist', artist);
          Session.set('album', album);
          Session.set('albumArtURL', albumArtURL);



        });


   },
  'click [data-play]': function () {
      console.log('@#!@#!@#');

        var uri = $('input[name="song-uri"]').val();

        if(uri.length == 0) return;

        Session.set('currentSong', uri);

        SongPlayer.play(uri, function(err){
          console.log(err);
          console.log('1336 1336');
        });
   },
   'input [data-crossfade]': function (event) {
      var sliderValue = parseInt(event.currentTarget.value) / 100;
      console.log(sliderValue);
      Session.set('crossfade', sliderValue.toString());
   }
});
