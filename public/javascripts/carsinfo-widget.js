window.widget = window.widget || {};
window.widget["carsinfo"] = (function() {

	var driverStatusTypes = [
		"Unknown",
		"Retired",
		"Run",
		"Out",
		"Pit"];

	var template;

	var init = function() {
		var source = $("#cars-list-template").html(); 
		template = Handlebars.compile(source); 
	};

	var bind = function(data) {
		var car = data;
		
		Handlebars.registerHelper('position', function(car) {
			return data.cars.indexOf(car) + 1;
		});

		Handlebars.registerHelper('pilotName', function(pilot) {
			if (pilot === null) return "";
			return pilot.firstName + " " + pilot.lastName;
		});

		Handlebars.registerHelper('pilotSite', function(pilot) {
			if (pilot === null) return "#";
			return pilot.site; 
		});

		Handlebars.registerHelper('pilotCountry', function(pilot) {
			if (pilot === null) return "";
			return pilot.country;
		});

		Handlebars.registerHelper('pilotPicture', function(pilot) {
			var fallbackPilotPicture = "http://live.fiawec.com/wpphpFichiers/1/pilote/143/Driver_Unknow_.png";

			if (pilot === null)  
				return fallbackPilotPicture;

			return pilot.picture;
		});

		Handlebars.registerHelper('driverStatusText', function(car) {
			return driverStatusTypes[car.driverStatus];
		});

		Handlebars.registerHelper('carDescription', function(car) {
			return car.carBrand + " " + car.carName;
		});

		Handlebars.registerHelper('time', function(time) {
			return milisecondsToFormattedTime(time);
		});

		$('#carInfo').html(template(data));
	}

	function milisecondsToFormattedTime(val) {
		var mil_num = parseInt(val, 10); // don't forget the second param

		var minutes   = Math.floor(mil_num / 1000 / 60);
		var seconds = Math.floor((mil_num - (minutes * 1000 * 60)) / 1000);
		var miliseconds = mil_num - (minutes * 1000 * 60) - (seconds * 1000);

		if (seconds < 10) {seconds = "0"+seconds;}
		if (miliseconds < 100) {miliseconds = "0"+miliseconds;}
		if (miliseconds < 10) {miliseconds = "0"+miliseconds;}
		var time = minutes + ':' + seconds + '.' + miliseconds;
		return time;
	}

	return {
		init: init,
		bind: bind
	}
})();