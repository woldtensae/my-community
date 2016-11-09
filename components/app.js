var app = angular.module('myApp', ["ngRoute"]);
app.controller('myCtrl', function($scope){


});
app.config(function($routeProvider) {
$routeProvider
	.when("/", {
		template: "<home-component></home-component>"
	})
	.when("/aboutus", {
        template : "<aboutus-component></aboutus-component>"
        
	})
	.when("/contactus", {
        template : "<contactus-component></contactus-component>"
	})
	.when("/adminsignup", {
		template: "<admin-component></admin-component>"
	})
	.when("/post", {
		template: "<post-component></post-component>"
	});
});