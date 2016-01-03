'use strict';

app.controller('favouritesController', ["$rootScope","$cookies","$scope", "$window", "$state", "categoryService", "recieptsService","favouriteService",
function($rootScope, $cookies, $scope, $window, $state, categoryService, recieptsService,favouriteService) {
    
    $scope.init = function() { 
        categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;
        });
        
        $scope.favourites = favouriteService.getFavouriteRecipes();
          
    };
    
    $scope.addToFavourites = function(recipe_id){
        favouriteService.addNew(recipe_id);
    }
    
    $scope.removeFromFavourites = function(recipe_id){
        favouriteService.removeFromFavourites(recipe_id);
        
        $scope.favourites = favouriteService.getFavouriteRecipes();
    }
    
    $scope.getRecieptsByCategory = function(category_id) {
        $rootScope.currentCategoryId = category_id;
        $state.go('home');
    };
}]);
