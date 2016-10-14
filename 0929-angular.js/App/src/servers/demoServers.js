define("demoServers",["angular","jquery"],function(angular,$){
	var md = angular.module("servers");
	md.factory("demo",["$http",function($http){
		return{
			get:function(){
				return $http({
					method:"GET",
					url:"demo.php"
				});
			}
		}
	}])
})