'use strict';

app.controller('homeController', ["$resource","$rootScope", "$scope", "$state", "categoryService", "recieptsService","recipeRepository",
function($resource, $rootScope, $scope, $state, categoryService, recieptsService,recipeRepository) {
    
    $scope.getRecieptsByCategory = function(category_id) {
        $rootScope.currentCategoryId = category_id;
        $scope.reciepts = recieptsService.getByCategoryId(category_id);
    };

    $scope.showReciept = function(id) {
        $state.go('reciept', {id: id});
    };
    
    $scope.addNewReciept = function(){
        var category = $scope.categories[functiontofindIndexByKeyValue($scope.categories,"Id",$rootScope.currentCategoryId)]; 

        var recipe = {
            Title : null,
            Description : null,
            ImageUrl : $rootScope.defaultImage, 
            Categories : [category],
            Ingredients : [],
            Steps : []
        };
        
        $state.go('reciept/new', {obj : recipe});
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
