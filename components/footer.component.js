angular.module('myApp').component('footerComponent', {
	templateUrl: "footer.html",
	controller: function($scope){
		$scope.footerMessage = "&copy; Aman Woldtensae 2016";
		$scope.webmaster = "Aman woldtensae Tel: 5109780086";
	}
});