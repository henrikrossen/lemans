window.widget = window.widget || {};
window.widget["weathericon"] = (function() {

	var template;

	var init = function() {
		var source = $("#weathericon-template").html(); 
		template = Handlebars.compile(source); 
	};

	var bind = function(data) {
		$('#weatherIconContainer').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();
