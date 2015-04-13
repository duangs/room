Template.context.events({
	'keypress .context .form #content' : function(event,template) {
		if(event.ctrlKey && (event.keyCode == 13 || event.keyCode == 10) ){
			template.$('.context .form').submit();
		}
	},
	'submit .context .form': function(evt,template){
		var con_obj = template.$("#content");
		var contents = con_obj.val();
		console.log(contents);
		if(jQuery.trim(contents).length == 0){
			con_obj.popover({
				'content':'发送内容不能为空',
				'placement':'top',
				'template':'<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
				'trigger':'focus'
			}).popover('show');			
		}else{
			con_obj.popover('destroy');
			var _id = Meteor.userId();
			var username = Meteor.user().username;
			var content = contents;
			Reports.insert({'_id':Random.id(),'username':username,'uid':_id,'content':content,'created':new Date()});
			
		}
		con_obj.val('');
		return false;
	},
	'focus .context #content':function(evt,template){
		var con_obj = template.$("#content");
		con_obj.popover('destroy');
	}
})