
Template.login.events({
  "submit #login": function(evt,template){
    var username = template.find('#login-username').value;
    var password = template.find('#login-password').value;
    Meteor.loginWithPassword(username, password, function(err){
      if(Meteor.user()){
          
          Router.go('/');
      }else{
          var message = "There was an error logging in: <strong>#{"+err.reason+"}</strong>"
          template.$('#form-messages').html(message)
          return false
        }
    })
    return false;
  }

})
