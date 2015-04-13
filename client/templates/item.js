Template.item.helpers({
	'isCurrentUser' : function(uid){
		return uid==Meteor.userId() ? true : false;
	},
	'dateformat': function(_date){
		var D = new Date(_date);
		return D.getFullYear()+'-'+(D.getMonth()+1)+'-'+D.getDate()+' '+D.getHours()+':'+D.getMinutes();
	}
})