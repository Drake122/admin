/**
 * Created by sa on 2016.12.13..
 */
(function () {
    angular.module('app')
        .controller('mainController', function (apiService, $scope) {
            var stringToken="";
            $scope.$watch(function () {
                return localStorage.getItem('token');
            }, function (token) {
                $scope.token=token;
                stringToken=token;
                if(stringToken!==""){
                    apiService.getUserId()
                        .then(function (res) {
                        $scope.user=res.data;
                        })
                }
               });

            $scope.logout=function logout() {
                apiService.logout();
            }

        } )
})();
