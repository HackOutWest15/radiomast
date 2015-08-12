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
   }
});
