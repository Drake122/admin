(function () {
    angular
        .module('app',['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/login',{
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                })
                .when('/register',{
                    templateUrl: 'templates/register.html',
                    controller: 'registerController'
                })
                .when('/products',{
                    templateUrl:'templates/product.list.html',
                    controller:'productController'
                })

        })
})();