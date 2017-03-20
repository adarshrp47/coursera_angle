(function() {
  'use strict';

  var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
  ];

  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
sss
  angular.module('myFirstApp',[])

  .controller('myFirstController',naam)
  .filter('first',firstFilter)
  .filter('second',secondFilter);

  naam.$inject = ['$scope','firstFilter','$timeout'];

  function naam($scope,firstFilter,$timeout) {

    $scope.showNumberOfWatchers = function () {
      console.log("#no. of watchers",$scope.$$watchersCount);
    };

    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };

      $scope.shoppingList1 = shoppingList1;
      $scope.shoppingList2 = shoppingList2;

      $scope.addToList = function () {
        var newItem = {
          name: $scope.newItemName,
          quantity: $scope.newItemQuanity
        };

        $scope.shoppingList2.push(newItem);
      };



    $scope.upCounter = function () {
      $timeout(function () {
        $scope.counter++;
        console.log("Log Incremented");
      });
    }

    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     $scope.$apply(function () {
    //       $scope.counter++;
    //       console.log("Log Incremented");
    //     });
    //   },2000)
    // };

    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     $scope.counter++;
    //     console.log("Log Incremented");
    //     $scope.$digest();
    //   },2000)
    // };

    $scope.$watch(function () {
      console.log("Digest Loop Fired");
    })

    // manual way of keeping an eye on watchers
    // $scope.$watch('onceCounter',function (newValue,oldValue) {
    //   console.log("Old Value : ",oldValue);
    //   console.log("New Value : ",newValue);
    // });
    //
    // $scope.$watch('counter',function (newValue,oldValue) {
    //   console.log("Counter Old Value : ",oldValue);
    //   console.log("Counter New Value : ",newValue);
    // });

    $scope.name = "Adarsh";
    //$scope.cookieCost = 45.7;
    //$scope.cookieCost = .45;
    $scope.messageBig = function () {
      var message = "I like Cristiano Ronaldo";
      //var output = $filter('uppercase')(message);
      //return output;
    };

    $scope.firstFilterTry = function () {
      var message = "I like Cristiano Ronaldo";
      message = firstFilter(message);
      return message;
    }
  }

  //customFilter
  function firstFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("like","love");
      return input;
    }
  }

  //customFilter2
  function secondFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target,replace);
      return input;
    }
  }

})();
