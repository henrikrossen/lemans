window.widget = window.widget || {};
window.widget["progress"] = (function() {
	
	var init = function() {
	};

	var bind = function(data) {

		var minutes = data.track.elapsedTimeInSeconds / 60
		var hours = minutes / 60

		var hour = Math.floor(hours)
		var procentDone = Math.floor(minutes - Math.floor(hours)*60) / 60;

		var blocks = $("#progress .hour");
		blocks.css("opacity", "0");

		for(var x = 0;x < hour; x++) {
			$(blocks[x]).css("opacity", "1")
		}

		$(blocks[hour]).css("opacity", procentDone.toString());
	};

	return {
		init: init,
		bind: bind
	}
})();