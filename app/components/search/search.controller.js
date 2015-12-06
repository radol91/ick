'use strict';

angular.module('kuchnia4U').controller('searchController', searchController);

searchController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService", "ingredientService"];

function searchController($scope, $http, $window, $q, $state, categoryService, recieptsService, ingredientService) {
    $scope.ingredients = ingredientService.getIngredients();
}