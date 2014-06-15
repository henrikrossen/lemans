window.widget = window.widget || {};
window.widget["trackinfo"] = (function() {

	var template;
	var elapsedTimeInSeconds = 0;
	var remainingTimeInSeconds = 0;

	var init = function() {
		var source = $("#track-template").html(); 
		template = Handlebars.compile(source); 

		setInterval(function() {	
			elapsedTimeInSeconds = elapsedTimeInSeconds + 1;
			$("#elapsedTime").html(secondsToFormattedTime(elapsedTimeInSeconds));

			remainingTimeInSeconds = remainingTimeInSeconds - 1;
			$("#remainingTime").html(secondsToFormattedTime(remainingTimeInSeconds));
		}, 1000);
	};

	var bind = function(data) {

		Handlebars.registerHelper('safetyCarText', function(safetyCar) {
		  return safetyCar ? "Yes" : "No";
		});

		Handlebars.registerHelper('qualifyText', function(qualify) {
		  return qualify ? "Yes" : "No";
		});

		elapsedTimeInSeconds = data.elapsedTimeInSeconds;
		remainingTimeInSeconds = data.remainingTimeInSeconds;
			
		$('#trackContainer').html(template(data));
	}

	return {
		init: init,
		bind: bind
	}
})();

 function secondsToFormattedTime(val) {
    var sec_num = parseInt(val, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours + ' : ' + minutes + ' : ' + seconds;
    return time;
}