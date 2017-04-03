(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method : 'GET',
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function (result) {
      var foundItems = [];
      for (var items in result.data.categories) {
        console.log("M here");
        console.log(items);
      }
    });
  };
}


})();
