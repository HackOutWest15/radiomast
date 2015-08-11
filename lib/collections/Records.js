 var recordStore = new FS.Store.GridFS("records");

Records = new FS.Collection("records", {
  stores: [recordStore]
});

Records.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  },
  download: function(){
    return true;
  }
});

