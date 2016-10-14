require(['angular','bootstrap'],function(){
	var md = angular.module('directives',[]);
	md.directive('spGo',[function(){
		return {
			restrict:'A',
			scope:{data:'=ctr_data',width:'@',footer:'@'},
			templateUrl:'views/slide.html',
			link:function(scope,element,attrs){
				$(element).find('.carousel').carousel({
					interval:1000
				});
			}
		};
	}])
});