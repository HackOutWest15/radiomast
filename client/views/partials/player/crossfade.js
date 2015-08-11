Template.crossfade.events({
   'input [data-crossfade]': function (event) {
      var sliderValue = parseInt(event.currentTarget.value) / 100;
      console.log(sliderValue);
      Session.set('crossfade', sliderValue.toString());
   }
});


