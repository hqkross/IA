Meteor.publish('icons', function() {
    return Icons.find();
});