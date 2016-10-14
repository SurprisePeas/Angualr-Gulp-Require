define(['angular','uiRoute'], function (angular) {
    var init = function () {
        var controllers = angular.module('controllers', []);
        var directives = angular.module('directives', []);
        var servers = angular.module('servers', []);
        var app = angular.module('app', ['ui.router','controllers','directives','servers'], function($httpProvider) {
            // Use x-www-form-urlencoded Content-Type
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            /**
             * The workhorse; converts an object to x-www-form-urlencoded serialization.
             * @param {Object} obj
             * @return {String}
             */
            var param = function(obj) {
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

                for(name in obj) {
                    value = obj[name];

                    if(value instanceof Array) {
                        for(i=0; i<value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                    else if(value instanceof Object) {
                        for(subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                    else if(value !== undefined && value !== null)
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
                return query.length ? query.substr(0, query.length - 1) : query;
            };

            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function(data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];
        });
        //添加核心服务与指令
        require([
            'allControllers',
            'allDirectives',
            'allServers',
            'route'
        ], function () {
            angular.element(document).ready(function () {
                angular.bootstrap(document, ["app"]);
            });
        });
    }
    return {init: init};
});