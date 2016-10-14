define("demoDirectives",["angular","jquery"],function(angular,$){
	var md = angular.module("directives");
	//自定义指令
	md.directive("gq-diy",[function(){
		return{
			restrict:"A",
			replace:true,
			scope:{data:"=cart"},
			//templateUrl:"",
			controller:["$scope",function($scope){
				
			}]
		}
	}])
})