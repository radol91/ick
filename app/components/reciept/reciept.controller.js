'use strict';

app.controller('recieptController', ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService",
function ($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    recieptsService.getRecieptById($state.params.id).$promise.then(
        function(data){
            $scope.recipe = data;
    }); 
        

    $scope.showRecipe = function(){ 
        $state.go('reciept', {id : $scope.recipe.Id});
    }
    
    $scope.showRecipeSteps = function(){ 
        $state.go('reciept/steps', {id : $scope.recipe.Id});
    }
    
    $scope.deleteRecipe = function(recipe){
        recieptsService.deleteItem(recipe, 
            function(data) {
                console.log('Success delete');
                $state.go('home');                  
            }
        );            
    }
}]);

app.controller('recieptNewController', ["$compile", "$rootScope", "$scope", "$state", "$stateParams", "categoryService", "recieptsService", "ingredientService", "unitService", 
function ($compile, $rootScope, $scope, $state, $stateParams, categoryService, recieptsService, ingredientService, unitService) {
    
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
    $scope.quantity = 0.5;
    $scope.stepContent = '';
    $scope.stepCounter = 0;
    $scope.ingredientCounter = 0;
        
    $scope.units = unitService.getUnits();
        
    $scope.recipe = $stateParams.obj;
    
    $scope.saveRecipe = function(){
        var recipe = $scope.recipe;
                
        recipe.Categories = [recipe.Categories[0].Id];
//        recipe.Ingredients = [];
        
        console.log("Before SAVE: ");
        console.log(recipe);
        console.log(JSON.stringify(recipe));
        
        recieptsService.createItem(recipe, 
            function(newRecipe) {
                console.log('Success save');
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
    
    $scope.addNewStep = function(){     
        var content = $scope.stepContent;  
        
        if ( content != '' || content == undefined){
            var stepNo = ++$scope.stepCounter;
            $scope.putStepOnList(stepNo, content);
            $scope.recipe.Steps.push({StepNo : stepNo, Content : content});   
            $compile($('#recipeSteps > li')[stepNo-1])($scope);            
        }
        
        $scope.stepContent = '';
    }
    
    $scope.updateSteps = function(){  
        var oldSteps =  $scope.recipe.Steps;
        var newSteps = [];
        
        $('#recipeSteps').empty();
        
        $scope.stepCounter = 0;
            
        for (var i = 0; i < oldSteps.length ; i++){
            var stepNo = ++$scope.stepCounter;
            $scope.putStepOnList(stepNo, oldSteps[i].Content);
            newSteps.push({StepNo : stepNo, Content : oldSteps[i].Content});   
            $compile($('#recipeSteps > li')[stepNo-1])($scope);         
        }

        $scope.recipe.Steps = newSteps;
        
        $scope.stepCounter = newSteps.length;
        $scope.stepContent = '';
    }
    
    $scope.getStepsFromScope = function(){
        $scope.updateSteps();
    }
    
    $scope.putStepOnList = function(stepNo, content){ 
        $('#recipeSteps').append(
            '<li class="step_input" id="step_' + stepNo + '">' + stepNo + '. ' + content + 
                '<button compile-data class="btn btn-default right" ng-click="removeStep(' + stepNo + ')">' 
                    + 'Usuń krok' + 
                '</button></li>');   
    }
    
    $scope.removeStep = function(stepNo){        
        if ($('#step_' + stepNo) != undefined){
            $('#step_' + stepNo).remove();
            $scope.recipe.Steps.splice(stepNo-1, 1); 
        }
        
        $scope.updateSteps();
    }
    
    $scope.addNewIngredient = function(){
        var ingredient = $scope.availableIngredient;
        var unit = $scope.unit;
        var quantity = $scope.quantity;
                
        var recipe = $scope.recipe;

        if ( ingredient.Id != undefined && quantity >= 0.5 && unit.Id != undefined){
            var ingNo = ++$scope.ingredientCounter;
            $scope.putIngredientOnList(ingNo, ingredient.Name, unit.Name, quantity);
            $scope.recipe.Ingredients.push({IngredientName : ingredient.Name,
                                            IngredientId : ingredient.Id, 
                                            Unit : unit.Name, 
                                            Quantity : quantity});  
            $compile($('#recipeIngredients > li')[ingNo-1])($scope);         
        }
    }
    
    $scope.putIngredientOnList = function(ingredientNo, ingredientName, unitName, quantity){
            $('#recipeIngredients').append(
            '<li class="step_input" id="ingredient_' + ingredientNo + '">' + ingredientName + ' ' + quantity + ' ' + unitName+
                '<button compile-data class="btn btn-default right" ng-click="removeIngredient(' + ingredientNo + ')">' 
                    + 'Usuń składnik' + 
                '</button></li>');    
    }
    
    $scope.removeIngredient = function(ingredientNo){
        if ($('#ingredient_' + ingredientNo) != undefined){
            $('#ingredient_' + ingredientNo).remove();
            $scope.recipe.Ingredients.splice(ingredientNo-1, 1); 
        }
        
        $scope.updateIngredients();
    }
    
    $scope.getIngredientsFromScope = function(){
        $scope.updateIngredients();
    }
    
    $scope.updateIngredients = function(){  
        var oldIngredients =  $scope.recipe.Ingredients;
        var newIngredients = [];
        
        $('#recipeIngredients').empty();
        
        $scope.ingredientCounter = 0;
                    
        for (var i = 0; i < oldIngredients.length ; i++){
            var ingNo = ++$scope.ingredientCounter;
            $scope.putIngredientOnList(
                ingNo, oldIngredients[i].IngredientName, oldIngredients[i].Unit, oldIngredients[i].Quantity);
            newIngredients.push({
                                    IngredientName : oldIngredients[i].IngredientName,
                                    IngredientId : oldIngredients[i].IngredientId, 
                                    Unit :  oldIngredients[i].Unit, 
                                    Quantity : oldIngredients[i].Quantity
                                });  
            $compile($('#recipeIngredients > li')[ingNo-1])($scope);         
        }

        $scope.recipe.Ingredients = newIngredients;        
        $scope.ingredientCounter = newIngredients.length;
    }
}]);
