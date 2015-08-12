Meteor.startup(function(){
	setTimeout(function(){
		IonSideMenu.snapper.settings({
      		maxPosition: "390",
      		minPosition: "-390",
          disable: 'right'
    	});
	}, 100);

});

Template.leftSideMenu.events({
  'click a': function () {
    IonSideMenu.snapper.close();
  }
});

Template.rightSideMenu.events({
  'click a': function () {
    IonSideMenu.snapper.close();
  }
});

