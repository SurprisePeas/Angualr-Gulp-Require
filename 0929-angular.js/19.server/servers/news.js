require(['angular'],function(){
	var md = angular.module('servers',[]);
	md.factory('sp',['$http',function($http){
		return{
			//获得全部
			all:function(callback){
				return $http({
					method:'get',
					url:'news.php'
				});
			},
			//获取单独一条
			first:function(id){
				$http({
					method:'get',
					url:'news.php?=' + id
				}).then(function(res){
					console.log(res);
				});
			}
		}
	}]);
});