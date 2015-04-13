Template.room_title.helpers({})
Template.room_title.events({
	'click .js-logout': function() {
    Meteor.logout();
    Router.go('/')
  }
})