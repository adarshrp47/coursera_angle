(function() {
  'use strict';

  angular.module('factoryApp',[])
  .controller('ShoppingListController1',ShoppingListController1)
  .controller('ShoppingListController2',ShoppingListController1)
  .factory('ShoppingListFactory',ShoppingListFactory);

  ShoppingListController1.$inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    var list1 = this;

    var shopList = ShoppingListFactory();

    list1.items = shopList.getItems();

    list1.name = "";
    list1.quantity = "";

    list1.addItem = function () {
      shopList.addItem(list1.name,list1.quantity);
    }

    list1.removeItem = function (itemIndex) {
      shopList.removeItem(itemIndex);
    }
  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    var list2 = this;

    var shopList = ShoppingListFactory(3);

    list2.items = shopList.getItems();

    list2.name = "";
    list2.quantity = "";

    list2.addItem = function () {
      try {
        shopList.addItem(list1.name,list1.quantity);
      } catch (e) {
        list2.errorMessage = error.message;
      }
    }

    list2.removeItem = function (itemIndex) {
      shopList.removeItem(itemIndex);
    }
  }

  function ShoppingListService(maxItems) {
    var service = this;

    var items = [];

    service.addItem = function (name,uantity) {
      if (maxItems===undefined || (maxItems!==undefined) && (items.legnth<maxItems)) {
        var item = {
          name:name,
          quantity:quantity
        };
        items.push(item);
      } else {
        throw new Error("Max Items("+maxItems+") reached.");
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex,1);
    };

    service.getItems = function () {
      return items;
    };
  }

  function ShoppingListFactory() {
    var factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };
    return factory;
  }

})();
