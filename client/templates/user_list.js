
Template.user_list.helpers({
	users : function(){		
		return Meteor.users.find({login:1},{sort:{createdAt:1}});
	}
})