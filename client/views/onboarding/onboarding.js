Template.onboarding.rendered = function() {
  IonSideMenu.snapper.disable();
};

Template.onboarding.destroyed = function() {
  IonSideMenu.snapper.enable();
};
