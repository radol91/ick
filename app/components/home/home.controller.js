'use strict';

app.controller('homeController', homeController);

homeController.$inject = ["$scope", "$window", "$state", "categoryService", "recieptsService"];

function homeController($scope, $window, $state, categoryService, recieptsService) {
    
    $scope.getRecieptsByCategory = function(category_id) {
        console.log(category_id);
        $scope.reciepts = recieptsService.getByCategoryId(category_id);
        
        $scope.reciepts.$promise.then(function (result) {
             $scope.reciepts = result;
        });
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
