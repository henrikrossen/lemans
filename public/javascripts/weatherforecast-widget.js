window.widget = window.widget || {};
window.widget["weatherforecast"] = (function() {

  var template;

  var init = function() {
    var source = $("#weatherforecast-template").html(); 
    template = Handlebars.compile(source); 
  };

  var bind = function(data) {
    $('#weatherforecast').html(template(data.currently));
  }

  return {
    init: init,
    bind: bind
  }
})();
