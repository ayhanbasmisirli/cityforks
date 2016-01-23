
Meteor.startup(function() {
  navigator.geolocation.getCurrentPosition(onSuccess);
});

success = function(position) {
  Session.set('location', {latitude: position.coords.latitude, longitude: position.coords.longitude});
  
};
