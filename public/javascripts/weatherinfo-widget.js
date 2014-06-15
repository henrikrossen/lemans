window.widget = window.widget || {};
window.widget["weatherinfo"] = (function() {

	var template;

	var init = function() {
		var source = $("#weather-template").html(); 
		template = Handlebars.compile(source); 
	};

	var bind = function(data) {
		$('#weatherContainer').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();
