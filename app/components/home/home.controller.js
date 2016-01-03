'use strict';

app.controller('homeController', ["$rootScope", "$scope", "$window", "$state", "categoryService", "recieptsService","recipeRepository",
function($rootScope, $scope, $window, $state, categoryService, recieptsService,recipeRepository) {
    
    $scope.getRecieptsByCategory = function(category_id) {
        $rootScope.currentCategoryId = category_id;
        $scope.reciepts = recieptsService.getByCategoryId(category_id);
    };

    $scope.showReciept = function(id) {
        $state.go('reciept', {id: id});
    };
    
    $scope.addNewReciept = function(){
        $state.go('reciept/new');
    }
    
    $scope.showFavourites = function(){
        $state.go('favourites');
    }
    
    $scope.init = function() { 
        categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;
            $scope.category = $scope.categories[
                functiontofindIndexByKeyValue($scope.categories,"Id",$rootScope.currentCategoryId)];
            $scope.getRecieptsByCategory($rootScope.currentCategoryId);  
        }); 
    };
}]);
