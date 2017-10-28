var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "blocks/home.html"
    })
    .when("/skills", {
        templateUrl : "blocks/skills.html"
    })
    .when("/portfolio", {
        templateUrl : "blocks/portfolio.html"
    })
	.when("/contact", {
        templateUrl : "blocks/contact.html"
    });

    $locationProvider.html5Mode(true);
});  