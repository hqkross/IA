Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('icons');}
});

Router.route('/', {name: 'industry_icon'});
Router.route('/:_id', {
    name: 'industryPage',
    data: function() {return Icons.findOne(this.params._id); }
});
