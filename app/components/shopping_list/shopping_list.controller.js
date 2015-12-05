angular.module('kuchnia4U').controller('shoppingListController',shoppingListController);

shoppingListController.$inject = [];

shoppingListController.$inject = ["$scope", "$http", "$window", "$q", "$state", "recieptsService"];

function shoppingListController($scope, $http, $window, $q, $state, recieptsService) {
    
    $scope.init = function(){
            
    }
}