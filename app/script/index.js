(function () {


    angular
        .module('app',['ngRoute','xeditable'])


        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                })
                .when('/register', {
                    templateUrl: 'templates/register.html',
                    controller: 'registerController'
                })
                .when('/products', {
                    templateUrl: 'templates/product.list.html',
                    controller: 'productListController'
                })
                .when('/products/:id', {
                    templateUrl: 'templates/product.html',
                    controller: 'productController'
                })
                .when('/users', {
                    templateUrl: 'templates/users.html',
                    controller: 'usersController'
                })
                .when('/users/:id', {
                    templateUrl: 'templates/user.details.html',
                    controller: 'usersDetailsController'
                })
                .when('/new_product', {
                    templateUrl: 'templates/add.product.html',
                    controller: 'addProductController'
                })
                .when('/my-profile', {
                    templateUrl: 'templates/my.profile.html',
                    controller: 'myProfileController'
                })
                .when('/categories', {
                    templateUrl: 'templates/categories.html',
                    controller: 'categoriesController'
                })
                .when('/categories/:id', {
                    templateUrl: 'templates/categories.details.html',
                    controller: 'categoriesDetailsController'
                })
                .otherwise({
                    redirectTo: '/'
                })
        })


        .factory('httpRequestInterceptor',function () {
            return{
                request: function (config) {
                    if(localStorage.getItem('token')!==''){
                    config.headers['Authorization'] = 'JWT ' + localStorage.getItem('token');
                    }
                return config;
                }
            }
        })

        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpRequestInterceptor');
        })
    // xeditable
        .run(function(editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });
    // xeditable
})();