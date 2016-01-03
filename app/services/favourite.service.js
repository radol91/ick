'use strict';

app.factory('favouriteService',["$rootScope", "$cookies", "recieptsService",
function($rootScope, $cookies,recieptsService){
    var favouriteService = {};
    
    favouriteService.getFavouriteRecipes = function(){
        var favouriteIDs = favouriteService.getFavouriteRecipesIDs();
        var favourites = [];
                
        for(var i = 0; i < favouriteIDs.length; i++){
            recieptsService.getRecieptById(favouriteIDs[i].id).$promise.then(function(data) {
                favourites.push(data); 
            }); 
        }

        return favourites;
    }
    
    favouriteService.addNew = function(recipe_id){
        var favourites = favouriteService.getFavouriteRecipesIDs();
        var newValue = {'id': recipe_id};
        var valueExists = false;
                
        for(var i=0; i < favourites.length; i++){
            if (favourites[i].id == recipe_id){
                valueExists = true;
                break;
            }
        }
        
        if (!valueExists){
            favourites.push(newValue);      
        }
        
        $cookies.put('favouriteIDs',JSON.stringify(favourites));   
    }
    
    favouriteService.removeFromFavourites = function(recipe_id){
        var favourites = favouriteService.getFavouriteRecipesIDs();
        var removeValue = {'id': recipe_id};
        var valueExists = false;
        
        for(var i=0; i < favourites.length; i++){
            if (favourites[i].id == recipe_id){
                valueExists = true;
                break;
            }
        }
        
        if (valueExists){
            favourites.pop(removeValue);      
        }
        
        $cookies.put('favouriteIDs',JSON.stringify(favourites));                 
    }
    
    favouriteService.getFavouriteRecipesIDs = function(){
        var favouriteIDs = [];
        var current =  $cookies.get('favouriteIDs');
        favouriteIDs = current ? JSON.parse(current) : [];
        
        return favouriteIDs;
    }
    
    return favouriteService;                                             
}]);