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

Template.onboarding.events({
  'onSlideChanged': function(event, template) {
    console.log(event);

    var element = document.getElementById(event.index);
    if (element != null) {
      element.classList.remove("animation-target-" + event.index);
      element.offsetWidth = element.offsetWidth;
      element.classList.add("animation-target-" + event.index);
    }

  }
});
