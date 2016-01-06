'use strict';

app.controller('shoppingListController', ["$scope", "$state", "$cookies", "shoppingListService",
function ($scope, $state, $cookies, shoppingListService) {
    
    $scope.items = shoppingListService.getShoppingListItems();

    $scope.toggleItem = function(itemId){
        var element = $('#item_label_' + itemId );
        var isDone = false;
                
        if (element.hasClass('item_label_toggled')){
            isDone = false;
        }
        else{
            isDone = true;
        }
        
        shoppingListService.toggleItem(itemId, isDone);
        $scope.items = shoppingListService.getShoppingListItems();
    }
    
    $scope.addItem = function(){
        if ($scope.itemDescription != '' && $scope.itemDescription != undefined){
            shoppingListService.addNewToList($scope.itemDescription);
            $scope.items = shoppingListService.getShoppingListItems();
            $scope.itemDescription = '';
        }
    }
    
    $scope.removeItem = function(itemId){
        shoppingListService.removeFromList(itemId);
        $scope.items = shoppingListService.getShoppingListItems();
    }
    
    $scope.clearAll = function(){
        shoppingListService.clearAll();
        $scope.itemDescription = '';
        $scope.items = [];
    }
}]);