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



hbspt.forms.create({
    portalId: '4013959',
    formId: 'fd45a534-ae18-4952-ab4b-e73fb63f630a',
    target: '#contact-form',
    css: '',
    submitButtonClass: 'btn btn-primary',
    formInstanceId: '1'
});