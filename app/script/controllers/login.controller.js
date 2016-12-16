(function () {
    angular.module('app')
        .controller('loginController', function ($http, apiService, $scope, $location) {
            $scope.login = function () {

                apiService.login($scope.user.email, $scope.user.password)
                    .then(function () {
                        $location.path( "/" );
                    })
            }
        })
})();