/* @ngInject */
myApp.factory('AuthenticationService', function() {
    // 标记授权与否，对前端页面进行限制
    var auth = {
        isAuthenticated: false,
        isAdmin: false
    }
    return auth;
});

/* @ngInject */
myApp.factory('TokenInterceptor', ['$q', '$window', '$location', 'AuthenticationService',function ($q, $window, $location, AuthenticationService) {
    return {
        // 添加 token 到 header 头
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            console.log(config.headers.Authorization)
            return config;
        },

        requestError: function(rejection) {
            return $q.reject(rejection);
        },

        // 200 授权
        response: function (response) {
            if (response != null && response.status == 200 && $window.sessionStorage.token && !AuthenticationService.isAuthenticated) {
                AuthenticationService.isAuthenticated = true;
            }
            return response || $q.when(response);
        },

        //401 取消授权
        responseError: function(rejection) {
            if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isAuthenticated)) {
                delete $window.sessionStorage.token;
                AuthenticationService.isAuthenticated = false;
                $location.path("/login");
            }

            return $q.reject(rejection);
        }
    };
}]);

/* @ngInject */
myApp.factory('UserService', ['$http',function ($http) {
    return {
        signIn: function(username, password) {
            return $http.post(options.api.base_url + '/user/signin', {username: username, password: password});
        },

        logOut: function() {
            return $http.get(options.api.base_url + '/user/logout');
        }
    }
}]);

/* @ngInject */
myApp.factory('BookService', ['$http',function ($http) {
    return {
        showCatalogs: function(){
            return $http.get(options.api.base_url + '/api/catalogs');
        },

        showbootmarks: function() {
            return $http.get(options.api.base_url + '/api/bookmarks');
        }
    }
}]);