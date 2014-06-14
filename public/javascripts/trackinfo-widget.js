window.widget = window.widget || {};
window.widget["trackinfo"] = (function() {

	var template;

	var init = function() {
		var source = $("#track-template").html(); 
		template = Handlebars.compile(source); 
	};

	var bind = function(data) {
		$('#trackInfo').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();
