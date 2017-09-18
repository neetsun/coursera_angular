(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
  $scope.name = "NUMA";

  $scope.sayMessage = function(){
    return "Yaakov loves to eat snacks at night!";
  };
}
})();
