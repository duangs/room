Router.onBeforeAction(function() {
	var routename = Router.current().route.getName();
	if (! Meteor.userId()) {
		this.render('login');
	} else {
		this.next();
	}
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/home');
Router.route('/login');
Router.route('/join');