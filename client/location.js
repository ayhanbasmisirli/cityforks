Meteor.startup(function() {
  navigator.geolocation.getCurrentPosition(success);
});
success = function(postion){
	Session.set('location', {latitude:position.coords.latitude,longitude:position.coords.longitude});
}