define("demoControllers",["angular","jquery"],function(angular,$){
	var module = angular.module("controllers");
	module.controller("demoController",["$scope",function($scope){
		$scope.title="go..go..go";
		$scope.name="tyty...";
	}]);
});