'use strict';

angular.module('kuchnia4U').controller('searchController', searchController);

searchController.$inject = ["$scope", "$state", "categoryService", "recieptsService", "ingredientService"];

function searchController($scope, $state, categoryService, recieptsService, ingredientService) {
    ingredientService.getIngredients().$promise.then(
        function(data) {
            $scope.ingredients = data;      
        }
    );
    
    $scope.appendSearchIngredient = function(ingredient)
    {
        var searchIngredientIds = [];
        var searchField = angular.element( document.querySelector( '#search_field' ) )[0];

        searchField.innerHTML += '#' + ingredient.Name + ' ';
        
        searchIngredientIds.push(ingredient.Id);
    }
}