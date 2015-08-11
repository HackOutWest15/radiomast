Template.onboarding.rendered = function() {
  IonSideMenu.snapper.disable();
  $('.bar-header').hide();
  $('.content').removeClass('has-header');
};

Template.onboarding.destroyed = function() {
  IonSideMenu.snapper.enable();
  $('.bar-header').show();
  //$('.content').addClass('has-header');
};
