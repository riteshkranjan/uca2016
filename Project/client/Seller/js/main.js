
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "guest_index.html"
    })
    .when("/signup", {
        templateUrl : "flowers.html"
    })
    .when("/signup2", {
        templateUrl : "flowers.html"
    });
});