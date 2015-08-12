Template.crossfade.events({
   'input [data-crossfade]': function (event) {
      var sliderValue = parseInt(event.currentTarget.value) / 100;

      Session.set('crossfade', sliderValue.toString());
      Meteor.call('changeVolume', sliderValue.toString());
   }
});


