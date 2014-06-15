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
			var pilotName = "";
			
			if (pilot !== null) {
				pilotName = pilot.firstName + " " + pilot.lastName;
			};

		  return pilotName; 
		});

		Handlebars.registerHelper('pilotCountry', function(pilot) {
			var pilotCountry = "";
			
			if (pilot !== null) {
				pilotCountry = pilot.country;
			};

		  return pilotCountry; 
		});

		Handlebars.registerHelper('pilotPicture', function(pilot) {
			var pilotPicture = "http://live.fiawec.com/wpphpFichiers/1/pilote/143/Driver_Unknow_.png";
						
			if (pilot !== null) {
				pilotPicture = pilot.picture;
			};
			
		  	return pilotPicture;
		});

		Handlebars.registerHelper('driverStatusText', function(car) {
		  return driverStatusTypes[car.driverStatus];
		});

		Handlebars.registerHelper('carDescription', function(car) {
		  return car.carBrand + " " + car.carName;
		});

		$('#carInfo').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();