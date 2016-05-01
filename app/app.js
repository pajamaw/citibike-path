var app = angular.module('myApp', [
  'ngRoute',
  'leaflet-directive',
  'ui.router'
  ]);
app.config(function(uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyB0TZ5OPpok9goAjVG24a30F-KuqsPvOks',
    //v: '3.17,',
    libraries: 'weather,geometry,visualization'

  });
});
