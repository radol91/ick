'use strict';

app.controller('recieptController', recieptController);

recieptController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService"];

function recieptController($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    $scope.reciept = recieptsService.getRecieptById($state.params.id); 
    
    $scope.showRecipe = function(recipe_id){    
        $state.go('reciept', {id : recipe_id});
    }
    
    $scope.showRecipeSteps = function(recipe_id){ 
        $state.go('reciept/steps', {id : recipe_id});
    }
}

app.controller('recieptNewController', recieptNewController);

recieptNewController.$inject = ["$rootScope","$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService", "ingredientService", "unitService"];

function recieptNewController($rootScope, $scope, $http, $window, $q, $state, 
categoryService, recieptsService, ingredientService, unitService) {
 
    $scope.init = function(){
        categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;
            $scope.newCategory = $scope.categories[
                functiontofindIndexByKeyValue($scope.categories,"Id",$rootScope.currentCategoryId)];                   
        }); 
    }
    
    $scope.updateRecipe = function(recipe){
        var recipe = recipe;
        
        recipe.Categories = [];
        recipe.Categories.push({Id: 1});
        
        recipe.Steps = [];
        recipe.Ingredients = [];
        
        recipe.ImageUrl = $rootScope.defaultImage;
        
        recieptsService.createItem(recipe, function (newRecipe) {
            console.log(newRecipe.Id);
            $state.go('reciept', { id: newRecipe.Id });
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
}
