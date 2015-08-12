var permissions = {
  insert: function(userId, broadcast) {
    // Must be logged in.
    return !!userId;
  },
  update: function(userId, broadcast) {
    // Only owner can update
    return broadcast.userId === userId;
  },
  remove: function(userId, broadcast) {
    // Only owner can update
    return broadcast.userId === userId;
  },
  fetch: ['userId']
};

Broadcasts.allow(permissions);