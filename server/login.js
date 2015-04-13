if(Meteor.users.find().count() < 10){
	var user = Accounts.createUser({
		username: 'admin',
		email: 'admin@admin.com',
	    password: '111111',
	    {
	    	nickname:'admin'
	    	login:0
	    }
	});
	for (var i = 0; i <= 10; i++) {
		var name = 'test'+i
		var user = Accounts.createUser({
			username: name,
			email: name+'@'+name+'.com',
		    password: '111111',
		    {
		    	nickname:name
		    	login:0
		    }
		});
	}
}