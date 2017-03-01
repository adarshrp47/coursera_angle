(function() {
  'use strict';

  angular.module('myFirstApp',[])

    //first way - inline array with function as last element
    //second way - $inject 

  .controller('myFirstController',['$scope', '$filter', function($scope, $filter) {
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
  }]);

  function calculate(string) {
    var tsvalue = 0;
    for(var i=0;i<string.length;i++){
      tsvalue += string.charCodeAt(i);
    }
    return tsvalue;
  }
})();

//  Angular runs this internally to get the function parameters and values in an array format
//  .controller('myFirstController',function($scope, $filter,$injector) {
//    console.log($injector.annotate(myFirstController));
//  });

//minified version of code - javascript-minifier.com
//!function(){"use strict";function n(n){for(var r=0,e=0;e<n.length;e++)r+=n.charCodeAt(e);return r}angular.module("myFirstApp",[]).controller("myFirstController",["$scope","$filter",function(r,e){r.name="Adarsh",r.upper=function(){var n=e("uppercase");r.name=n(r.name)},r.value=0,r.func=function(){var e=n(r.name);r.value=e}}])}();
