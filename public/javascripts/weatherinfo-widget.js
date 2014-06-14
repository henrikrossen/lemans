window.widget = window.widget || {};
window.widget["weatherinfo"] = (function() {

	var init = function() {

	};

	var bind = function(data) {
		var source = $("#weather-template").html(); 
		var template = Handlebars.compile(source); 

		$('#weatherInfo').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();
