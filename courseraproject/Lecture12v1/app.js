(function(){
  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController',MsgController);

  MsgController.$inject = ['$scope','$filter'];
  function MsgController($scope,$filter){
    $scope.name = "Vincent";
    $scope.imageName = "hungry";
    $scope.cookieCost = 0.45;

    $scope.sayMessage = function(){
      var msg= $scope.name+" likes to eat healthy snacks at night!";
      var output = $filter('uppercase')(msg);
      return output;
    }

    $scope.feedYaakov = function(){

        $scope.imageName = "fed";

    }
  }
})();
