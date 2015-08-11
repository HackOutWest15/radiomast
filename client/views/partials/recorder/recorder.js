if (Meteor.isClient) {

  Template.recorder.helpers({
    records: function () {
    return Records.find(); 
  }
  });
}

Template.recorder.events({
  'change .myRecordInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Records.insert(file, function (err, fileObj) {
        if (err){
        } else {
          /* @TODO
             Koppla recordingen till ett broadcaster ID så att 
             users som lyssnar på den radion korrekt får inspelningen 
             av broadcastern*/
          console.log(fileObj._id + "added to mongodb");
        }
      });
    });
  }
 });
