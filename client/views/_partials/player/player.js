Template.player.events({
  'click [data-search]': function () {
      console.log('Search');

        var query = $('input[name="song-query"]').val();
        if(query.length == 0) return;

        var query = $('input').val();

        // spotify.search(query, 'tracks', function(error, result) {
        //   if(error){
        //     return console.log(error);
        //   }
        //   console.log(result);
        // });


        Meteor.call('getSearch', query, function(err, result){
          if(err){
            return console.log(err);
          }

          $('input[name="song-uri"]').val(result);
        });

        // Session.set('currentSong', uri);
        //
        // SongPlayer.play(uri, function(err){
        //   console.log(err);
        //   console.log('1336 1336');
        // });
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
