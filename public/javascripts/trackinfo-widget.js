window.widget = window.widget || {};
window.widget["trackinfo"] = (function() {

	var init = function() {

	};

	var bind = function(data) {
		var source = $("#track-template").html(); 
		var template = Handlebars.compile(source); 

		$('#trackInfo').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();
