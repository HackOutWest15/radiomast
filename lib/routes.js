Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('splash');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});


Router.map(function() {
  this.route('splash', {
    layoutTemplate:'MainLayout',
    path: '/splash',
    fastRender: true,
    waitOn: function(){
    }
  });

  this.route('listen', {
    layoutTemplate:'HomeLayout',
    path: '/',
    fastRender: true,
    waitOn: function(){
    }
  });

  this.route('broadcast', {
    layoutTemplate:'HomeLayout',
    path: '/broadcast',
    fastRender: true,
    waitOn: function(){
    }
  });

  this.route('me', {
    layoutTemplate:'HomeLayout',
    path: '/me',
    fastRender: true,
    waitOn: function(){
    }
  });
});
