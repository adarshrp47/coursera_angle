(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShopService',ShopService);

  ToBuyController.$inject = ['ShopService'];
  function ToBuyController(ShopService) {
    var TBC = this;
    TBC.toBuyList = ShopService.toBuyShow();
    TBC.clicked = function (item) {
      ShopService.clicked(item);
    }
  }

  AlreadyBoughtController.$inject = ['ShopService'];
  function AlreadyBoughtController(ShopService) {
    var ABC = this;
    ABC.alreadyBoughtList = ShopService.show();
  }

  function ShopService() {
    var service = this;

    var toBuyList = [
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
      },
      {
        name: "Pineapple",
        quantity: "7"
      }
    ];

    var alreadyBoughtList = [];

    service.clicked = function (item) {

      var index = toBuyList.indexOf(item);
      toBuyList.splice(index,1);
      console.log("ad");
      alreadyBoughtList.push(item);
      console.log("ad");
      // var xyz = toBuyList.splice(itemIndex,1);
      // console.log(xyz);
      // console.log(xyz.name);
      // return xyz;
    };

    service.toBuyShow = function () {
      return toBuyList;
    }

    service.show = function () {
      return alreadyBoughtList;
    }
  }

})();
