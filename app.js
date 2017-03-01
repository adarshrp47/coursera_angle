(function() {
  'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstController',naam);

  naam.$inject = ['$scope','$filter'];

  function naam($scope, $filter) {
    $scope.name = "Adarsh";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    $scope.value = 0;
    $scope.func = function() {
      var tvalue = calculate($scope.name);
      $scope.value = tvalue;
    }
  }

  function calculate(string) {
    var tsvalue = 0;
    for(var i=0;i<string.length;i++){
      tsvalue += string.charCodeAt(i);
    }
    return tsvalue;
  }
})();

//minified version of this code
//!function(){"use strict";function n(n,r){n.name="Adarsh",n.upper=function(){var e=r("uppercase");n.name=e(n.name)},n.value=0,n.func=function(){var r=e(n.name);n.value=r}}function e(n){for(var e=0,r=0;r<n.length;r++)e+=n.charCodeAt(r);return e}angular.module("myFirstApp",[]).controller("myFirstController",n),n.$inject=["$scope","$filter"]}();
