'use strict';

app.controller('recieptController', ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService",
function ($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    $scope.reciept = recieptsService.getRecieptById($state.params.id); 
    
    $scope.showRecipe = function(recipe_id){    
        $state.go('reciept', {id : recipe_id});
    }
    
    $scope.showRecipeSteps = function(recipe_id){ 
        $state.go('reciept/steps', {id : recipe_id});
    }
}]);

app.controller('recieptNewController', ["$rootScope","$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService", "ingredientService", "unitService","recipeRepository",
function ($rootScope, $scope, $http, $window, $q, $state, 
categoryService, recieptsService, ingredientService, unitService,recipeRepository) {
 
    $scope.init = function(){
        categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;
            var category = $scope.categories[
                functiontofindIndexByKeyValue($scope.categories,"Id",$rootScope.currentCategoryId)]; 
            
            $scope.recipe = { Categories : [category] };       
        }); 
    }
    
    $scope.updateRecipe = function(recipe){
        var recipe = recipe;
        
        recipe.Categories = [];
        
        recipe.Steps = [];
        recipe.Ingredients = [];
        
        recipe.ImageUrl = $rootScope.defaultImage;
        
//        recieptsService.createItem(recipe).$promise.then(
//        function(data) {
//            console.log(data);
////            $state.go('reciept', { id: newRecipe.Id });                  
//        }}); 
        
        recieptsService.createItem(recipe, function (newRecipe) {
            console.log(newRecipe.Id);
//            $state.go('reciept', { id: newRecipe.Id });
        });
    }
    
    $scope.editRecipe = function(recipe_id){
        $state.go('reciept/edit', {recipe_id : recipe_id});    
    }
    
    $scope.newRecipeIngredients = function(recipe_id){
        $state.go('reciept/new/ingredients', {recipe_id : recipe_id});    
    }
    
    $scope.newRecipeSteps = function(recipe_id){
        $state.go('reciept/new/steps', {recipe_id : recipe_id});    
    }
}]);
