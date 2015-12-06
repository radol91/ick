'use strict';

angular.module('kuchnia4U').controller('searchController', searchController);

searchController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService", "ingredientService"];

function searchController($scope, $http, $window, $q, $state, categoryService, recieptsService, ingredientService) {
    $scope.ingredients = ingredientService.getIngredients();
    
    $scope.appendSearchIngredient = function(ingredient)
    {
        var searchIngredientIds = [];
        var searchField = angular.element( document.querySelector( '#search_field' ) )[0];

        searchField.innerHTML += '#' + ingredient.name + ' ';
        
        searchIngredientIds.push(ingredient.id);
    }
}