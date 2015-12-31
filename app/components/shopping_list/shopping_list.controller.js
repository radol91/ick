'use strict';

angular.module('kuchnia4U').controller('shoppingListController',shoppingListController);

shoppingListController.$inject = ["$scope", "$http", "$window", "$q", "$state"];

function shoppingListController($scope, $http, $window, $q, $state) {
    
    $scope.items = [];
    $scope.items[0] = {id: 1, desc: "maslo 1 kostka" , is_done: false};
    $scope.items[1] = {id: 2, desc: "cukier 1 kg" , is_done: true};
    $scope.items[2] = {id: 3, desc: "cukier 1 kg" , is_done: true};
    $scope.items[3] = {id: 4, desc: "cukier 1 kg" , is_done: true};
    $scope.items[4] = {id: 5, desc: "cukier 1 kg" , is_done: true};
    $scope.items[5] = {id: 6, desc: "cukier 1 kg" , is_done: true};
    $scope.items[6] = {id: 7, desc: "cukier 1 kg" , is_done: true};
    $scope.items[7] = {id: 8, desc: "cukier 1 kg" , is_done: true};
    $scope.items[8] = {id: 9, desc: "cukier 1 kg" , is_done: true};
    $scope.items[9] = {id: 10, desc: "cukier 1 kg" , is_done: true};
    $scope.items[10] = {id: 11, desc: "cukier 1 kg" , is_done: true};
    $scope.items[11] = {id: 12, desc: "cukier 1 kg" , is_done: true};
    
    $scope.toggleItem = function(item)
    {
        var element = angular.element( document.querySelector( '#item_label_' + item.id ) )[0];
        
        if (element.classList.contains('item_label_toggled')){
            element.classList.remove('item_label_toggled');  
            item.is_done = false;
        }
        else{
            element.classList.add('item_label_toggled');   
            item.is_done = true;
        }
    }
    
    $scope.removeItem = function(item)
    {
        
    }
}