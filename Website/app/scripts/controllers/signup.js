'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */

angular.module('yapp').directive('wjValidationError', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctl) {
      scope.$watch(attrs['wjValidationError'], function (errorMsg) {
        elm[0].setCustomValidity(errorMsg);
        ctl.$setValidity('wjValidationError', errorMsg ? false : true);
      });
    }
  };
})
  .controller('SignupCtrl', function($http, $scope, $location) {
    $scope.newUser = {fullName : "", email : "", password : "" };
    $scope.checkPwd = "";
    $scope.alert = "";
    
    $scope.signUp = function() {
        console.log("Signup pressed");
        $http.post("http://132.73.207.18:3000/signUpWeb", $scope.newUser)
        .success(function(response) {
            switch(response){
                case "successfull signup":
                    $location.path('/login');
                    break;
                default:
                    $scope.alert = response;
                    $scope.newUser = {fullName : "", email : "", password : "" };
                    break;
            }
        }).error(function() {
            $scope.alert = "Server Failed To Respond";
            
        });
        
        
        return false;
    }
    

    
  });
