/// <reference path="../../framework7/js/framework7.bundle.min.js" />

var app = new Framework7({
    root: '#app',
    name: 'Awesome App',
    id: 'mahdi.template.fm7',
    panel: {
        swipe: 'left'
    },
    routes: [
        {
            path: '/about/',
            url: 'about.html'
        }
    ],
    theme: 'md'
});
var mainView = app.views.create('.view-main');

//app.on('init',
//    function() {
//        app.statusbar.hide();
//    });