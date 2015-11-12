myApp.controller('ShowCtrl', ['$scope',
    function ShowCtrl($scope) {

    }
]);

myApp.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {

    }
]);

/* @ngInject */
myApp.controller('CatalogCtrl', ['$scope', 'BookService',
    function CatalogCtrl($scope, BookService) {
        console.log(222)
        BookService.showCatalogs().success(function(data) {
            console.log(data);
            $scope.catalogs = data;
        }).error(function(status, data) {
            console.log(status);
            console.log(data);
        });
    }
]);

/* @ngInject */
myApp.controller('UserCtrl', ['$scope', '$location', '$timeout', '$window', 'UserService', 'AuthenticationService',
    function UserCtrl($scope, $location, $timeout, $window, UserService, AuthenticationService) {

        $scope.signIn = function signIn(username, password) {
            if (username != null && password != null) {
                UserService.signIn(username, password).success(function(data) {
                    if (data.success) {
                        // 验证密码正确授权成功
                        AuthenticationService.isAuthenticated = true;
                        // 存 jwt
                        $window.sessionStorage.token = data.token;
                        $scope.resInfo = "用户名密码正确，3秒钟后跳转";
                        $timeout(function() {
                            $location.path("/show");
                        }, 3000);
                    } else {
                        $scope.resInfo = data.message;
                    }
                    console.log(data);
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }

        $scope.logOut = function logOut() {
            if (AuthenticationService.isAuthenticated) {
                UserService.logOut().success(function(data) {
                    AuthenticationService.isAuthenticated = false;
                    delete $window.sessionStorage.token;
                    console.log(data+ "222")
                    $scope.logoutInfo = data.message + " 3 秒钟会跳转回主页！";
                    $timeout(function() {
                        $location.path("/");
                    }, 3000);

                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            } else {
                $location.path("/");
            }
        }
    }
]);
