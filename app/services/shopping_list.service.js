'use strict';

app.factory('shoppingListService',["$rootScope", "$cookies", "recieptsService",
function($rootScope, $cookies,recieptsService){
    var shoppingListService = {};
    
    shoppingListService.getShoppingListItems = function(){
        var current =  $cookies.get('shoppingList');
        var shoppingListItems = current ? JSON.parse(current) : [];
        
        return shoppingListItems;
    }
    
    shoppingListService.addNewToList = function(description){
        console.log(description);
        var shoppingListItems = shoppingListService.getShoppingListItems();
        
        shoppingListItems.push({id: makeId(), is_done: false, desc: description});
        
        $cookies.put('shoppingList',JSON.stringify(shoppingListItems));  
    }
    
    shoppingListService.removeFromList = function(itemId){
        var shoppingListItems = shoppingListService.getShoppingListItems();  
        
        for(var i=0; i < shoppingListItems.length; i++){
            if (shoppingListItems[i].id == itemId){
                shoppingListItems.splice(i, 1);
            }
        }
                
        $cookies.put('shoppingList',JSON.stringify(shoppingListItems));        
    }
    
    shoppingListService.toggleItem = function(itemId, isDone){
        var shoppingListItems = shoppingListService.getShoppingListItems();  
        
        for(var i=0; i < shoppingListItems.length; i++){
            if (shoppingListItems[i].id == itemId){
                shoppingListItems[i].is_done = isDone;
            }
        }
                
        $cookies.put('shoppingList',JSON.stringify(shoppingListItems));       
    }    
    
    shoppingListService.addFromRecipe = function(recipe_id){
        
    }
    
    shoppingListService.clearAll = function(){
        $cookies.put('shoppingList',JSON.stringify([])); 
    }
    
    function makeId(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    return shoppingListService;                                             
}]);