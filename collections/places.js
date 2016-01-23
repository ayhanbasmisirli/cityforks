Places = new Mongo.Collection('places');

Meteor.methods({
	'fetchNearbyLocations':function(coords){
		if (Meteor.isServer) {
			results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coords.latitude + "," + coords.longitude + "&radius=500&types=restaurant|bar&key=AIzaSyCtfoCAldCEf8hXUlkVUd4UljqKR6W_aF4");
			console.log(results);
			
		}
	}
})