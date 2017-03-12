
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index3.html"
    })
    .when("/products", {
        templateUrl : "index1.html"
    })
    .when("/signup2", {
        templateUrl : "flowers.html"
    })
});