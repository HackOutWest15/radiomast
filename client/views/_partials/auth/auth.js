Template.auth.events({
  'click [data-login-spotify]': function () {
    Meteor.loginWithSpotify({
      showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
      requestPermissions: ['streaming'] // Spotify access scopes.
    }, function(err) {
      if(err){
        return console.log(err);
      }
      Router.go('home');
    });
  },
    'click [data-logout-spotify]': Meteor.logout
});

