Template.search.helpers({
  searchResult: function () {
    console.log(';akdjhakjsdhakjsdh');
    return Session.get('searchResult');
  }
});


Template.search.events({
  'input [name="song-query"]': function (e) {
    e.preventDefault();

    var query = $(e.currentTarget).val();

    console.log('Search');
    if(query.length == 0) return;

    Meteor.call('getSearch', query, function(err, result){
      if(err){
        return console.log(err);
      }
      if(!result.name) return;

      // // Get info from track
      // var title = result.name;
      // console.log(title);
      // var artist = result.artists[0].name;
      // console.log(artist);
      // var album = result.album.name;
      // console.log(album);
      // var albumArtURL = result.album.images[1].url;
      // console.log(albumArtURL);

      Session.set('searchResult', [{
        uri: result.uri,
        artist: result.artists[0].name,
        album: result.album.name,
        title:result.name,
        image: result.album.images[1].url,
        thumbnail: result.album.images[2].url
      }]);

    });
   },
   'click [data-play]': function () {
      Meteor.call('playSong', Session.get('searchResult')[0], function(){
        Session.set('searchResult', []);
      });

   }
});
