(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuAppController',MenuAppController);

  MenuAppController.$inject = ['MenuDataService'];
  function MenuAppController(MenuDataService) {
    var menu = this;

    menu.getCategories = function () {
        var promise = MenuDataService.getAllCategories();
        promise.then(function (result) {
          menu.found = result;
        })
    }

  }

})();
