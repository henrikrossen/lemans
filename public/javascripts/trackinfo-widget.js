window.widget = window.widget || {};
window.widget["trackinfo"] = (function() {

	var template;

	var init = function() {
		var source = $("#track-template").html(); 
		template = Handlebars.compile(source); 
	};

	var bind = function(data) {

		Handlebars.registerHelper('safetyCarText', function(safetyCar) {
		  return safetyCar ? "Yes" : "No";
		});

		Handlebars.registerHelper('qualifyText', function(qualify) {
		  return qualify ? "Yes" : "No";
		});

		$('#trackInfo').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();
