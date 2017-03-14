
var app1 = angular.module("myApp", ["ngRoute"]);
app1.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main_index.html"
    })
});