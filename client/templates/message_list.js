Template.message_list.helpers({
	'list': function(){
		var count = Reports.find({}).count();
		return Reports.find({},{sort:{created:1},skip:count-6,limit:6});
	},
	'cur_id':function(){
		return Meteor.userId();
	}
});