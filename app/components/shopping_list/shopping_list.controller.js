'use strict';

angular.module('kuchnia4U').controller('shoppingListController',shoppingListController);

shoppingListController.$inject = ["$scope", "$http", "$window", "$q", "$state"];

function shoppingListController($scope, $http, $window, $q, $state) {
    
    $scope.items = [];
    $scope.items[0] = {id: 1, desc: "maslo 1 kostka" , is_done: false};
    $scope.items[1] = {id: 2, desc: "cukier 1 kg" , is_done: true};
}