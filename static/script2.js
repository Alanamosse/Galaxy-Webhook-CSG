$(document).ready(function() {

var pages=new Array();
 pages[0]="https://citizensort.org/livinglinks/hmc.php";
 pages[1]="https://citizensort.org/web.php/forgottenisland";
 pages[2]="https://github.com/ValentinChCloud/Galaxy-Webhook-CSG/pull/2";
 pages[3]="http://lelombrik.net/77522";

var rand=Math.floor(Math.random()*pages.length);

var PHDComicsAppView = Backbone.View.extend({
        el : '#itch',

                    appTemplate: _.template(
                '<iframe id="myFrame" src=pages[rand] style="height:600px;width:100%"></iframe>'
            ),
            initialize: function() {
            this.$el.html(this.appTemplate());
        },

});

new PHDComicsAppView();

});
