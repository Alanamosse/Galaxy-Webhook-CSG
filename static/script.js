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
var AppView2 = Backbone.View.extend({
        el : '#itch',

                    appTemplate: _.template(
                '<iframe id="myFrame" src="https://citizensort.org/web.php/forgottenisland" style="height:600px;width:100%"></iframe>'
            ),
            initialize: function() {
            this.$el.html(this.appTemplate());
        },

    });

var rand=Math.random();
console.log(rand);

if (rand>=0.5) {
    new PHDComicsAppView();
}else{
    new AppView2();
}

});
