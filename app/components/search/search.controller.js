'use strict';

angular.module('kuchnia4U').controller('searchController', searchController);

searchController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService"];

function searchController($scope, $http, $window, $q, $state, categoryService, recieptsService) {
    
    $scope.init = function(){
            
    }
}