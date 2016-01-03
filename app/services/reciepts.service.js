'use strict';

app.factory('recieptsService', ['$http', '$q','$rootScope','recipeRepository', 
function ($http, $q, $rootScope, recipeRepository) {
    
   var recieptsService = {};
    
   recieptsService.createItem = function(recipe,successCallback){
        recipeRepository.save(recipe,
            function success(item) {
                if (successCallback != undefined){
                    console.log('callback after create');
                    console.log(item);
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
        
        for(var i =0; i < recieptsFromCategory.length; i++){
            recieptsService.setRecipeImageUrl(recieptsFromCategory[i])
        }
        
        return recieptsFromCategory; 
    }
    
    return recieptsService;
}]);

