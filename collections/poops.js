Poops = new Mongo.Collection("poops");

Poops.allow({
  insert: (userId, poop) => userId && poop.owner === userId,

  update: (userId, poop, fields, modifier) => userId && poop.owner === userId,

  remove: (userId, poop) => userId && poop.owner === userId
});
