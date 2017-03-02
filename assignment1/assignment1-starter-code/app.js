(function () {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

  function LunchCheckController($scope, $filter) {
    $scope.check = function () {
      var items = $scope.items;
      $scope.message = "";
        if ($scope.items) {
            var arrayOfStrings = items.split(",");
            var length = arrayOfStrings.length;
            if (length <=3){
              $scope.message = "Enjoy!";
            }
            else{
              $scope.message = "Too Much!";
            }
        }
        else{
          $scope.message = "Please enter data first";
        }
    };
  }
})();

// (function() {
//    'use strict';
//    angular.module('LunchCheck',[])
//
//    .controller('LunchCheckController',khaana);
//
//    khaana.$inject = ['$scope'];
//
//    function khaana($scope){
//         var lunchList = $scope.lunchList;
//         $scope.message = "";
//         if(!$scope.lunchList){
//           var arrayy = lunchList.split(',');
//           var length = arrayy.length;
//           if(length<=3){
//             $scope.message = "Enjoy";
//           }else{
//             $scope.message = "Too Much";
//           }
//         }else{
//             $scope.message = "Please enter Data first";
//         }
//     }
// })();
