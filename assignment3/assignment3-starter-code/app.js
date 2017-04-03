// (function () {
//   'use strict';
//
//   angular.module('NarrowItDownApp',[])
//   .controller('NarrowItDownController',NarrowItDownController)
//   .controller('foundItemsDirectiveController', foundItemsDirectiveController)
//   .service('MenuSearchService',MenuSearchService)
//   .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
//   .directive('foundItems', foundItemsDirective)
//   ;
//
//   function foundItemsDirective(){
//
//     var ddo = {
//       scope: {
//         found : '<',
//         onRemove: '&'
//       },
//      controller:'foundItemsDirectiveController as foundItems',
//       bindToController: true,
//       templateUrl: 'listitem.html'
//     };
//
//     return ddo;
//   }
//
//   function foundItemsDirectiveController(){
//     var foundItems = this;
//
//   }
//
//   NarrowItDownController.$inject = ['MenuSearchService'];
//   function NarrowItDownController(MenuSearchService) {
//     var menu = this;
//
//     menu.name = "";
//     menu.removeItem = function (index) {
//       menu.found.splice(index,-1);
//     }
//     menu.findItems = function (name) {
//       menu.errorMessage = false;
//       if (name=="") {
//         menu.errorMessage = true;
//         menu.found = [];
//         return;
//       }
//       var promise = MenuSearchService.getMatchedMenuItems(name);
//       promise.then(function (response) {
//         menu.found  = result;
//         if(menu.found.length == 0){
//           menu.errorMessage = true;
//         }
//       });
//     }
//     //var xyz = MenuSearchService.getMatchedMenuItems('chicken');
//     //console.log(xyz);
//
//
//     //var promise = MenuSearchService.getMatchedMenuItems();
//     // promise.then(function (response) {
//     //   menu.categories = response.data.menu_items;
//     //   console.log(response);
//     //   //console.log(response.data.menu_items);
//     //   //console.log(JSON.stringify(response.data, null, 4));
//     //   //var x = JSON.stringify(response.data.menu_items, null, 4)
//     //   //console.log(x);
//     //   //console.log(x.menu_items[name]);
//     // })
//     // .catch(function (error) {
//     //   console.log("Something went terribly wrong.");
//     // });
//   }
//
//   MenuSearchService.$inject = ['$http','ApiBasePath'];
//   function MenuSearchService($http,ApiBasePath) {
//     var service = this;
//
//     // service.addItem = function () {
//     //
//     // };
//
//     // service.getMenuItems = function () {
//     //   var response = $http({
//     //     method : 'GET',
//     //     url : (ApiBasePath + "/menu_items.json")
//     //   });
//     //
//     //   return response;
//     // };
//
//     // return $http(...).then(function (result) {
//     // // process result and only keep items that match
//     // var foundItems...
//     //
//     // // return processed items
//     // return foundItems;
//     // });
//
//     var foundItems = [];
//
//     service.getMatchedMenuItems = function (name) {
//       var response = $http({
//            method : 'GET',
//            url : (ApiBasePath + "/menu_items.json")
//          });
//
//       var promise = response;
//       promise.then(function (response) {
//         console.log("Hello");
//         console.log(response.data.menu_items);
//         for (var item in response.data.menu_items) {
//           if(response.data.menu_items[item].description.indexOf(name)!==-1){
//           foundItems.push(response.data.menu_items[item]);
//           //console.log(foundItems);
//         }
//         }
//       })
//       .catch(function (errorResponse) {
//         console.log(errorResponse);
//       });
//       return foundItems;
//     }
//   }
//
// })();

(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .controller('foundItemsDirectiveController', foundItemsDirectiveController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItemsDirective);
// davids-restaurant.herokuapp.com/menu_items.json


function foundItemsDirective(){

  var ddo = {
    scope: {
      found : '<',
      onRemove: '&'
    },
   controller:'foundItemsDirectiveController as foundItems',
    bindToController: true,
    templateUrl: 'listitem.html'
  };

  return ddo;
}

function foundItemsDirectiveController(){
  var foundItems = this;

}


NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService){
    var narrowItems = this;
    narrowItems.searchTerm = "";

    narrowItems.removeItem = function(index){
        narrowItems.found.splice(index, 1);
    }
    narrowItems.findItems = function(searchTerm){
      narrowItems.errorMessage = false;
      if (searchTerm == ""){
        narrowItems.errorMessage = true;
        narrowItems.found = [];
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function(result){
        narrowItems.found  = result;
        if(narrowItems.found.length == 0){
          narrowItems.errorMessage = true;
        }
      });
    }
}
MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){

    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function(result){
      var foundItems = [];
      for(var item in result.data.menu_items){
        if(result.data.menu_items[item].description.indexOf(searchTerm) !== -1){
            foundItems.push(result.data.menu_items[item])
          }
      }
    return foundItems;

  });


};

}

})();
