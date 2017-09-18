(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope,$filter,$injector) {
  $scope.name = "Yaakov";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}

function AnnotateMe(name, job, blah){
  return "Blah!";
}
console.log(AnnotateMe.toString());
})();

// !function(){"use strict";function e(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",e])}();
