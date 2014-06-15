window.widget = window.widget || {};
window.widget["weathericon"] = (function() {

	var template;
	var currentWeatherType;

	var init = function() {
		var source = $("#weathericon-template").html(); 
		template = Handlebars.compile(source); 
	};

	var bind = function(data) {

		if (currentWeatherType != data.weatherType) {
			$('#weatherIconContainer').html(template(data));
			currentWeatherType = data.weatherType;
		};
	}

	return {
		init: init,
		bind: bind
	}
})();
