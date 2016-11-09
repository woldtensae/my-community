
angular.module('myApp').component('homeComponent', {
		templateUrl: "home.html",
		controller: function homeCtrl($scope, $http){
			$http.get("requestData.php").then(function(response){
				$scope.returnedData = response.data.records;
			});
			//$scope.title = "is Greate !!!";
	}
	
});