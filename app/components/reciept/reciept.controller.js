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

recieptNewController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService", "ingredientService", "unitService"];

function recieptNewController($scope, $http, $window, $q, $state, categoryService, recieptsService, ingredientService, unitService) {
    
    $scope.categories = categoryService.getCategories();
        
    $scope.ingredients = ingredientService.getIngredients();
    $scope.units = unitService.getUnits();

    $scope.new_category = $scope.categories[0];
    $scope.new_ingredient = $scope.ingredients[0];
    $scope.new_ingredient_unit = $scope.units[0];
    
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
