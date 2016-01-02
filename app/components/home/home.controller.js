'use strict';

app.controller('homeController', homeController);

homeController.$inject = ["$rootScope", "$scope", "$window", "$state", "categoryService", "recieptsService"];

function homeController($rootScope, $scope, $window, $state, categoryService, recieptsService) {
    
    $scope.getRecieptsByCategory = function(category_id) {
        $rootScope.currentCategoryId = category_id;
        $scope.reciepts = recieptsService.getByCategoryId(category_id);
    };

    $scope.showReciept = function(id) {
        $state.go('reciept', {id: id});
    };
    
    $scope.addNewReciept = function(category_id){
        $rootScope.category_id = category_id;
        $state.go('reciept/new');
    }
    
    $scope.showFavourites = function(){
        $state.go('favourites');
    }
    
    $scope.init = function() {    
        categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;
            $scope.getRecieptsByCategory($rootScope.category_id);  
        }); 
    };
}
