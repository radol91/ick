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

app.controller('recieptNewController', ["$rootScope", "$scope", "$state", "$stateParams", "categoryService", "recieptsService", "ingredientService", "unitService", 
function ($rootScope, $scope, $state, $stateParams, categoryService, recieptsService, ingredientService, unitService) {
    
    categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;      
        }
    );
    
    ingredientService.getIngredients().$promise.then(
        function(data) {
            $scope.ingredients = data;      
        }
    );
    
    $scope.availableIngredient = {};
    $scope.unit = {};
    
    $scope.units = unitService.getUnits();
    
    $scope.recipe = $stateParams.obj;
     
    $scope.saveRecipe = function(){
        var recipe = $scope.recipe;
                
        recipe.Categories = [recipe.Categories[0].Id];
        recipe.Ingredients = [];
        
        recipe.Steps = [];

        console.log("Before SAVE: ");
        console.log(recipe);
        
        recieptsService.createItem(recipe, 
            function(newRecipe) {
                $state.go('reciept', { id: newRecipe.Id });                  
            },
            function(error){
                console.log(error);
            }
        );
    }
    
    $scope.editRecipe = function(){    
        var recipe = $scope.recipe;
        $state.go('reciept/new', {obj : recipe});    
    }
    
    $scope.newRecipeIngredients = function(){
        var recipe = $scope.recipe;          
                
        $state.go('reciept/new/ingredients', {obj : recipe});
    }
    
    $scope.newRecipeSteps = function(){
        var recipe = $scope.recipe;  
        $state.go('reciept/new/steps', {obj : recipe});    
    }
    
    $scope.deleteRecipe = function(recipe){
//        recieptsService.deleteItem(recipe, function (data) {
//
//        }); 
    }
}]);
