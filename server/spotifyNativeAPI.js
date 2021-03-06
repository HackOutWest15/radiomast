Meteor.methods({
  getAPISession: function() {
    var user = Meteor.user();

    return {
      canonicalUsername: user.services.spotify.uri.replace('spotify:user:', ''),
      accessToken: user.services.spotify.accessToken,
      expirationDate: (user.services.spotify.expiresAt).toString()
    }
  },
  getSearch: function(query) {
    console.log(query);
    var result = HTTP.get("https://api.spotify.com/v1/search?q=" + query + "&type=track", {
         headers: {
             Accept: "application/json"
         }
    });

    //console.log(result.data.tracks.items[0]);
    //return result.data.tracks.items.slice(0,4);
    return result.data.tracks.items[0];

  }
});
