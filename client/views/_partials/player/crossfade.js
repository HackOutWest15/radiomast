var fadeTimeout = null;

Template.crossfade.events({
   'input [data-crossfade]': function (event) {
      var sliderValue = parseInt(event.currentTarget.value) / 100;

      Session.set('crossfade', sliderValue.toString());
      Meteor.call('changeVolume', sliderValue.toString());

			IonSideMenu.snapper.disable();
   },
    'touchend': function (event) {
			fadeTimeout = setTimeout(function(){
				IonSideMenu.snapper.enable();
			}, 500);
		}
});


