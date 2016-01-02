'use strict';

app.controller('favouritesController', favouritesController);

favouritesController.$inject = ["$scope", "$window", "$state", "categoryService", "recieptsService"];

function favouritesController($scope, $window, $state, categoryService, recieptsService) {
    
    $scope.init = function() {    
        $scope.categories = categoryService.getCategories(); 
    };
}
