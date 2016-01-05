'use strict';

app.factory('recieptsService', ['$http', '$q','$rootScope','recipeRepository', 
function ($http, $q, $rootScope, recipeRepository) {
    
   var recieptsService = {};
    
   recieptsService.createItem = function(recipe,successCallback){
        recipeRepository.save(recipe,
            function success(item) {
                if (successCallback != undefined){
                    successCallback(item);
                }
            });
    }
   
   recieptsService.deleteItem = function(recipe, successCallback){
        recipeRepository.delete({id : recipe.Id},
            function success(item) {
                if (successCallback != undefined){
                    successCallback(item);
                }
            });
   }

	recieptsService.getRecieptById = function(id){ 
        var recipe = recipeRepository.show({id : id}); 

        return recipe;
    }

	recieptsService.getByCategoryId = function(category_id){
        var recieptsFromCategory = recipeRepository.byCategoryId({categoryId : category_id});
                
        return recieptsFromCategory; 
    }
    
    
    return recieptsService;
}]);

