'use strict';

app.factory('shoppingListService',["$rootScope", "$cookies", "recieptsService",
function($rootScope, $cookies,recieptsService){
    var shoppingListService = {};
    
    shoppingListService.getShoppingListItems = function(){
        var current =  $cookies.get('shoppingList');
        var shoppingListItems = current ? JSON.parse(current) : [];
        
        return shoppingListItems;
    }
    
    shoppingListService.addNewToList = function(item){

    }
    
    shoppingListService.removeFromList = function(item){
             
    }
    
    shoppingListService.addFromRecipe = function(recipe_id){
        
    }
    
    shoppingListService.clearAll = function(){
        
    }
    
    return shoppingListService;                                             
}]);