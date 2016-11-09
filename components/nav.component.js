angular.module('myApp').component('navComponent',{
	templateUrl:"nav.html",
	controller: function navCntrl($scope){
		$scope.collapsed = "collapse";
		$scope.setCollapsed = function(){
			if ($scope.collapsed==="collapse") 
				$scope.collapsed = "";
			else
				$scope.collapsed = "collapse";
		};	
	}
});