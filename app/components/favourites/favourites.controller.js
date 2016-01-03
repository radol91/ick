'use strict';

app.controller('favouritesController', favouritesController);

favouritesController.$inject = ["$rootScope","$cookies","$scope", "$window", "$state", "categoryService", "recieptsService"];

function favouritesController($rootScope, $cookies, $scope, $window, $state, categoryService, recieptsService) {
    
    $scope.init = function() { 
        categoryService.getCategories().$promise.then(
        function(data) {
            $scope.categories = data;
        });
    };
    
    $scope.addToFavourites = function(recipe_id){
        var current =  $cookies.get('favouriteIDs');
        var favourites = current ? JSON.parse(current) : [];
        var newValue = {'id': recipe_id};
        var valueExists = false;
                
        for(var i=0; i < favourites.length; i++){
            if (favourites[i].id == recipe_id){
                valueExists = true;
            }
        }
        
        if (!valueExists){
            favourites.push(newValue);      
        }
        
        $cookies.put('favouriteIDs',JSON.stringify(favourites));
    }
    
    $scope.getRecieptsByCategory = function(category_id) {
        $rootScope.currentCategoryId = category_id;
        $state.go('home');
//        $scope.reciepts = recieptsService.getByCategoryId(category_id);
    };
}
