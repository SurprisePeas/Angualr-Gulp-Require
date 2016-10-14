require(['bootstrap','angular','datepicker'],function($){
	var m=angular.module('directives',[]);
	m.directive('spGo',[function(){
		return {
			restrict: 'A',
            scope: {width:'@'},
            templateUrl: 'views/date_view.html',
            link: function (scope, iElement, iAttrs) {
        	 	$(iElement).find('#datetimepicker1').datetimepicker({
        	 		defaultDate: "10/10/2016"
        	 	});
            }
		}
	}])
})