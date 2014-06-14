window.widget = window.widget || {};
window.widget["carsinfo"] = (function() {

	var init = function() {

	};

	var bind = function(data) {

		var driverStatusTypes = [
			"Unknown",
		    "Retired",
			"Run",
			"Out",
			"Pit"];

		var car = data;
		var content = [];

		$.each( car, function( key, val ) {
			var items = [];
			var position =  key + 1;
			var driverStatus = driverStatusTypes[val.driverStatus];

			var pilotName = "";
			var pilotPicture = "http://live.fiawec.com/wpphpFichiers/1/pilote/143/Driver_Unknow_.png";

			if (val.pilot !== null) {
				pilotName = val.pilot.firstName + " " + val.pilot.lastName;
				pilotPicture = val.pilot.picture;
			};

			items.push( "<li><strong>Pos " + position + ". " + val.team + "</strong></li>")
			items.push( "<li><strong>" + pilotName + "</strong></li>")
			items.push( "<li><img width='66' height='100' src='" + pilotPicture + "' alt='" + pilotName + "' /></li>")
			items.push( "<li>Car: " + val.carBrand + " " + val.carName + "</li>")
			items.push( "<li>Average Speed: " + val.averageSpeed + "</li>")
			items.push( "<li>Last Time: " + val.lastTimeInMiliseconds + "</li>")
			items.push( "<li>Best Time: " + val.bestTimeInMiliseconds + "</li>")
			items.push( "<li>Laps: " + val.laps + "</li>")
			items.push( "<li>Time Difference: " + val.timeDifference + "</li>")
			items.push( "<li>Pits: " + val.pits + "</li>")
			items.push( "<li>State: " + driverStatus + "</li>")
			items.push( "<li>Tires: " + val.tires + "</li>")

			content.push($( "<ul />", {
				"class": "car-list",
				"id": key,
				html: items.join( "" )
			}));
		});

		$("#carInfo").html(content);
	}

	return {
		init: init,
		bind: bind
	}
})();