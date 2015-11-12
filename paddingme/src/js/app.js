var  myApp = angular.module('myApp',['ngRoute']);

// API 服务器地址
var options = {};
options.api = {};
options.api.base_url = "http://127.0.0.1:3000";
/* @ngInject */
myApp.config(function($routeProvider){
     $routeProvider.
        when('/',{
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).
        when('/login',{
            templateUrl: 'partials/login.html',
            controller: 'UserCtrl'
        }).
        when('/logout',{
            templateUrl: 'partials/logout.html',
            controller: 'UserCtrl'
        }).
        when('/show',{
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl',
            access: { requiredAuthentication: true }
        }).
        when('/catalogs',{
            templateUrl: 'partials/catalogs.html',
            controller: 'CatalogCtrl',
            access: { requiredAuthentication: true }
        }).
        otherwise({
            redirectTo: '/'
        });

})

/* @ngInject */
myApp.config(function($httpProvider){
    $httpProvider.interceptors.push('TokenInterceptor');
})

//前端进行路由拦截
/* @ngInject */
myApp.run(function($rootScope, $location, $window, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
// 这里有点问题，多次刷新相同的无效连接 则会请求 api.
        //如果没认证或 token 没设置，则跳转到主页面
        if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication 
            && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {
            $location.path("/");
        }
    });
});


