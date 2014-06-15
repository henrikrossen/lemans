window.widget = window.widget || {};
window.widget["positionMap"] = (function() {
	var template;
	var initScroll = true;
	var init = function() {
		$("#map").scroll(function(e) {
			setShadows();
		});

		var container = $("#map .map-content");

		$("body").click(function() {
			$(".popup").remove();
		})

		container.on("click",".driver", function(e) {
			e.stopPropagation();
			$(".popup").hide();
			displayDriverInfo($(this));
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
		var max = $("#map .map-content")[0].scrollWidth - $("#map .map-content")[0].clientWidth;
		var scrollToRight = $("#map").scrollLeft() == max;

		var filtered = _.filter(data.cars, function(x) { return x.driverStatus == 2 || x.driverStatus == 4 || x.driverStatus == 3 });

		var a = _.groupBy(filtered, function(x) { return x.laps});
		var html = "";
		_.each(a, function(lap) {
			var lapHtml = "<div class='lap'><header>%lap%</header>";
			html += lapHtml.replace("%lap%", lap[0].laps);

			_.each(lap, function(car) {
				var carHtml = "%gap%<div class='driver %class%' data-car='%car%'><span>%car%</span></div>";
				var category = "";
				var gap = "";

				if(car.category != null) {
					category = car.category;
				}
				var cls = category.replace(/\s/g,'-').toLowerCase();

				if(car.driverStatus == 4) {
					cls += " in-pit";
				}

				if(car.timeDifference.indexOf("Lap") < 0 && car.timeDifference != "") {
									var t = car.timeDifference; 
					var minutes = 0;
					var seconds = 0;
					if(t.indexOf(":") >= 0) {
						var tokens = t.split(":")
						minutes = tokens[0];
						seconds = tokens[1].split(".")[0];
					} else {
						seconds = t.split(".")[0];
					}
					var text = seconds + "s";
					if(minutes > 0) {
						text = minutes + "m " + text;
					}

					gap = "<div class='gap " + cls + "'>" + text + "</div>"
				}

				carHtml = carHtml.replace("%gap%", gap);
				carHtml = carHtml.split("%car%").join(car.number);
				carHtml = carHtml.replace("%class%", cls);

				html += carHtml;
			})

			html += "</div>";
			
		});


//<div class="driver">23</div>
//			<div class="driver">
//				23
//			</div>
		

		var container = $("#map .map-content");
		container.html(html);

		//container.on('mouseenter', '.driver', function() {
		//	var driverInfo = $(this).find(".driverInfo");
		//	var car = driverInfo.data("car");
		//	
		//	var info = $("#carInfo").find("[data-car='" + car + "']");
		//	driverInfo.html(info);
		//});

		//container.on('mouseleave', '.driver', function() {
		//	var car = $(this).find(".driverInfo").data("car");			
		//});
		var newMax = $("#map .map-content")[0].scrollWidth - $("#map .map-content")[0].clientWidth;
		if(scrollToRight) {
			$("#map").scrollLeft(newMax);
		}

		if(initScroll) {
			initScroll = false;
			$("#map").scrollLeft(1000000);
			
			setShadows();
		}
	}

	function displayDriverInfo(driverElement) {
		var el = $("<div></div>");
		el.css("position", "absolute");
		el.addClass("popup")
		var a = driverElement[0].getBoundingClientRect();
		el.css("top", (a.top + driverElement.height()) + "px");
		el.css("left", a.left + "px");
		el.css("z-index", "1000");

		var b = driverElement[0].getBoundingClientRect();
		var maxLeft = $(document).width() - 5 - 200;
		console.log(maxLeft)
		console.log(a.left + el.width())
		if(a.left > maxLeft) {
			el.css("left", maxLeft + "px");
		}

		var info = $("#carInfo").find("[data-car='" + driverElement.data("car") + "']");
		el.html(info.html());

		$("body").append(el);



	}

	return {
		init: init,
		bind: bind
	}
})();