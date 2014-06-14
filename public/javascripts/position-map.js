window.widget = window.widget || {};
window.widget["positionMap"] = (function() {
	var template;
	var initScroll = true;
	var init = function() {
		$("#map").scroll(function(e) {
			setShadows();
		});
	};

	function setShadows() {
		var max = $("#map .map-content")[0].scrollWidth - $("#map .map-content")[0].clientWidth;
		$(".map-wrapper").removeClass("show-shadow-before");
		$(".map-wrapper").removeClass("show-shadow-after");
		if(max > 0) {
			if($("#map").scrollLeft() > 0) {
				$(".map-wrapper").addClass("show-shadow-before");
			}
			if($("#map").scrollLeft() < max) {
				$(".map-wrapper").addClass("show-shadow-after");		
			}
		}
	}


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
				var cls = category.replace(/\s/g,'-').toLowerCase();

				if(car.driverStatus == 4) {
					cls += " in-pit";
				}

				carHtml = carHtml.replace("%car%", car.number);
				carHtml = carHtml.replace("%class%", cls);
				
				html += carHtml;
			})

			html += "</div>";
			
		});


//<div class="driver">23</div>
//			<div class="driver">
//				23
//			</div>
		

		$("#map .map-content").html(html);

		if(initScroll) {
			initScroll = false;
			setShadows();
		}
	}

	return {
		init: init,
		bind: bind
	}
})();