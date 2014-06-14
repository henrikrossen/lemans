window.widget = window.widget || {};
window.widget["positionMap"] = (function() {
	var template;

	var init = function() {

	};

	var bind = function(data) {
		var filtered = _.filter(data.cars, function(x) { return x.driverStatus == 2 || x.driverStatus == 4; });


		var a = _.groupBy(filtered, function(x) { return x.laps});
		var html = "";
		_.each(a, function(lap) {
			var lapHtml = "<div class='lap'><header>%lap%</header>";
			html += lapHtml.replace("%lap%", lap[0].laps);

			_.each(lap, function(car) {
				var carHtml = "<div class='driver %class%'>%car%</div>";
				var category = "";

				if(car.category != null) {
					category = car.category;
				}

				carHtml = carHtml.replace("%car%", car.number);
				carHtml = carHtml.replace("%class%", category.replace(/\s/g,'-').toLowerCase());
				
				html += carHtml;
			})

			html += "</div>";
			
		});


//<div class="driver">23</div>
//			<div class="driver">
//				23
//			</div>
		

		$("#map").html(html);

	}

	return {
		init: init,
		bind: bind
	}
})();