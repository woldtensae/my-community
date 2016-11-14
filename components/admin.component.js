angular.module('myApp').component('adminComponent',{
	templateUrl: "admin.html",
	controller: function($scope, $http, $location){
	$scope.loginMessage = "";	
	$scope.adminFunction = function(){
		$scope.url = "post";
		$scope.url1 = "adminsignup";
		$scope.userFoundFlag = 0;
		
		$http.get("adminAut.php").then(function(response){
			$scope.adminData = response.data.records;
			angular.forEach($scope.adminData, function(value, Index){
			//console.log("it is displaying");	
			if(($scope.user==value.username)&&($scope.pass==value.password)){
				$scope.userFoundFlag =1;
				$location.path($scope.url);
			}		
		});		
		});
		
		if($scope.userFoundFlag===0)
			{

				$location.path($scope.url1);
				$scope.loginMessage = "wrong username or password";
			}
	};
  }
});