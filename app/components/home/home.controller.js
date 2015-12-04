'use strict';

angular.module('kuchnia4U').controller('homeController', homeController);

homeController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService"];

function homeController($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    $scope.categories = categoryService.getCategories();

    $scope.getRecieptsByCategory = function(id) {
        $scope.reciepts = recieptsService.getByCategory(id);
    };

    $scope.getRecieptsByCategory(1); //TODO in view
                                 
    $scope.showReciept = function(id){
        $state.go('reciept', {id: id});
    };
}
