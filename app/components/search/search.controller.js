'use strict';

angular.module('kuchnia4U').controller('searchController', searchController);

searchController.$inject = ["$scope", "$state", "categoryService", "recieptsService", "ingredientService"];

function searchController($scope, $state, categoryService, recieptsService, ingredientService) {
    ingredientService.getIngredients().$promise.then(
        function(data) {
            $scope.ingredients = data;      
        }
    );
    
    $scope.searchResults = [];
    
    $scope.appendSearchIngredient = function(ingredient)
    {
        var selectionStart = $('#search_field')[0].selectionStart;
        var selectionEnd = $('#search_field')[0].selectionEnd;
        
        var newText = ingredient.Name + ' ';
        $('#search_field').val($('#search_field').val() + newText);

        $('#search_field')[0].selectionStart = selectionStart;
        $('#search_field')[0].selectionEnd = selectionEnd;
    }
    
    $scope.search = function(){
        var searchField = $('#search_field');     
        var query = searchField.val();
        
        var search = query.split(/[ ,]+/).join(',');
        
        recieptsService.searchByQuery(search).$promise.then(
            function(data){
                $scope.searchResults = data;
                $('#search_field').val('');
            },
            function(error){
                console.log(error);
            });
    }
    
    $scope.showRecipe = function(recipe_id){ 
        $state.go('reciept', {id : recipe_id});
    }
}