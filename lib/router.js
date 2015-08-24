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

var requireLogin = function() { if (! Meteor.user()) {
    this.render('accessDenied'); } else {
    this.next(); }
}

Router.route('/addIndustry', {name: 'industryAdd'});

Router.onBeforeAction(requireLogin, {only: 'industryPage'});