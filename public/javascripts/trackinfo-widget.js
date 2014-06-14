window.widget = window.widget || {};
window.widget["trackinfo"] = (function() {

	var init = function() {

	};

	var bind = function(data) {
	
		var items = [];
		/*
		$.each( data, function( key, val ) {
			items.push( "<li>" + key + ": " + val + "</li>")
		});
		*/		

		items.push( "<li>safetyCar: " + data.safetyCar + "</li>")

		var content = $( "<ul/>", {
			"class": "list",
			html: items.join( "" )
		});

		//$("#trackInfo").html(content);
	}

	return {
		init: init,
		bind: bind
	}
})();
