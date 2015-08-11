Meteor.methods({
  getAPISession: function() {
    var user = Meteor.user();

    return {
      canonicalUsername: user.services.spotify.uri.replace('spotify:user:', ''),
      accessToken: user.services.spotify.accessToken,
      expirationDate: (user.services.spotify.expiresAt).toString()
    }
  }
});



