'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp').controller('LoginCtrl', function($http, $scope, $location) {
    $scope.master= {email: "", password: ""};
    $scope.rememberMe= { value: false}
    $scope.alert = "";
    
    

    $scope.submit = function() {
            
            console.log($scope.master);
            $http.post("http://132.73.207.18:3000/loginWeb", 
                       $scope.master)
            .success(function(response) {
                switch(response){
                    case "successfull login":
                        $location.path('/dashboard');
                        break;
                    case "login failed":
                        $scope.master= {email: "", password: ""};
                        $scope.alert = response;
                        break;
                }
            
            });
            
        
            /*$http({
            url: 'http://132.73.205.49:3000/get',
            method: "POST",
            data: $scope.master
            })*/
        
            /*console.log($scope.rememberMe.value);*/
        
            /*$http({
            url: "http://localhost:3000/get",
            method: "GET",
            data: $scope.master,
            headers: {'Content-Type': 'application/json', callback: 'JSON_CALLBACK'}})*/

      

      return false;
    }

  });
