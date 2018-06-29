
$(document).ready(function() {
var PHDComicsAppView = Backbone.View.extend({
	el : '#itch',

	            appTemplate: _.template(
		'<iframe id="myFrame" src="https://citizensort.org/livinglinks/hmc.php" style="height:600px;width:100%"></iframe>'
            ),
            initialize: function() {
            this.$el.html(this.appTemplate());	   
	},

});
new PHDComicsAppView();
});
