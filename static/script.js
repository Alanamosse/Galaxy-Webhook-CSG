$(document).ready(function() {

var pages=new Array();
 pages[0]="https://citizensort.org/livinglinks/hmc.php";
 pages[1]="https://citizensort.org/web.php/forgottenisland";
 pages[2]="https://openstack-192-168-100-22.genouest.org/";
 pages[3]="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined";

var rand=Math.floor(Math.random()*pages.length);

var PHDComicsAppView = Backbone.View.extend({
        el : '#itch',

                    appTemplate: _.template(
                '<div id ="ConteneurIf">'+
                '<iframe id="myFrame" src="'+pages[rand]+'" style="height:600px;width:100%"></iframe>'+
                '</div>'
            ),

        initialize: function() {
            this.$el.html(this.appTemplate());
        }

});

new PHDComicsAppView();

var clickIframe = window.setInterval(checkFocus, 100);
var i = 0;

function checkFocus() {
  if(document.activeElement == document.getElementById("myFrame")) {
        console.log("clicked "+(i++));
        window.focus();
   }
}
});

