'use strict';

angular.module('kuchnia4U').controller('homeController', homeController);

homeController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService"];

function homeController($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    
    $scope.getRecieptsByCategory = function(id) {
        $scope.reciepts = recieptsService.getByCategoryId(id);
    };

    $scope.showReciept = function(id) {
        $state.go('reciept', {id: id});
    };
    
    $scope.addNewReciept = function(category_id){
        $state.go('reciept/new', {category_id: category_id});
    }
    
    $scope.init = function() {        
        $scope.categories = categoryService.getCategories(); 
        $scope.getRecieptsByCategory(1);    
    };
}
