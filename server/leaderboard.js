PlayersList = new Mongo.Collection('players');
Meteor.publish('thePlayers', function(){
  var currentUserId = this.userId;
  return PlayersList.find({createdBy: currentUserId});
});
Meteor.methods({
  'insertPlayerData': function(playerNameValue){
    var currentUserId = Meteor.userId();
    PlayersList.insert({
      name: playerNameValue,
      score: 0,
      createdBy: currentUserId
    });
  },
  'removePlayer': function(playerNameValue){
    PlayersList.remove(playerNameValue);
  },
  'modifyPlayerScore': function(playerNameValue, scoreValue){
    PlayersList.update(playerNameValue, {$inc: {score: scoreValue}});
  }
});
