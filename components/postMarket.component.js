angular.module('myApp').component('postComponent',{
	templateUrl: "insertContents.html",
	controller: function($scope, $http){


	$scope.postMarket = function(ele){
		
		console.log($scope.marketcontent);
		console.log($scope.marketaddress);
		var fd = new FormData();
		angular.forEach($scope.files, function(file){
			fd.append('file', file);
		});
		fd.append ('marketContent', $scope.marketcontent);
		fd.append ('marketAddress', $scope.marketaddress);
		$http.post("insertMarketContents.php", fd, 
				{
					transformRequest:angular.identity,
					headers:{'Content-Type':undefined, 'Process-Data':false },
					
				}		
			).success(function(data, status, headers, config){
				console.log(fd);
		});
	};

   }
});
angular.module('myApp').directive("fileInput",  function($parse){
	return {
		restrict: 'A',
		link: function (scope, ele, attrs){
			ele.on('change', function(event){
				var files = event.target.files;
				$parse(attrs.fileInput).assign(scope, ele[0].files);
				scope.$apply();
			});
		}
	};
});

