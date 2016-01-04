'use strict';

app.controller('recieptController', ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService",
function ($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    $scope.recipe = recieptsService.getRecieptById($state.params.id); 
    
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
                        
            $scope.recipe = {ImageUrl : $rootScope.defaultImage, Categories : [category], Steps : [], Ingredients: [] };       
        }); 
    }
    
    $scope.saveRecipe = function(recipe){
        var recipe = recipe;
        
        recipe.Categories = [recipe.Categories[0].Id];
        recipe.Steps = [];
        recipe.Ingredients = [];
        
        console.log('before save');
        console.log(recipe);


        
//        recieptsService.createItem(recipe).$promise.then(
//        function(data) {
//            console.log(data);
////            $state.go('reciept', { id: newRecipe.Id });                  
//        }}); 
        
        recieptsService.createItem(recipe, function (newRecipe) {
            console.log(newRecipe);
//            $state.go('reciept', { id: newRecipe.Id });
        });
    }
    
    $scope.editRecipe = function(recipe_id){    
        $state.go('reciept/edit', {recipe_id : recipe_id});    
    }
    
    $scope.deleteRecipe = function(recipe_id){
        recieptsService.deleteItem(recipe_id, function (data) {

        }); 
    }
    
    $scope.newRecipeIngredients = function(recipe_id){
        $scope.ingredients = ingredientService.getIngredients();
        $state.go('reciept/new/ingredients', {recipe_id : recipe_id});    
    }
    
    $scope.newRecipeSteps = function(recipe_id){
        $state.go('reciept/new/steps', {recipe_id : recipe_id});    
    }
}]);
