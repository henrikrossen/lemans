window.widget = window.widget || {};
window.widget["weatherinfo"] = (function() {

	var init = function() {

	};

	var bind = function(data) {
	
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li>" + key + ": " + val + "</li>")
		});
	
		var content = ($( "<ul />", {
			"class": "list",
			html: items.join( "" )
		}));

		//$("#weatherInfo").html(content);
	}

	return {
		init: init,
		bind: bind
	}
})();
