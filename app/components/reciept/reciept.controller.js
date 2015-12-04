'use strict';

angular.module('kuchnia4U').controller('recieptController', recieptController);

recieptController.$inject = ["$scope", "$http", "$window", "$q", "$state", "categoryService", "recieptsService"];

function recieptController($scope, $http, $window, $q, $state, categoryService, recieptsService) {
        $scope.reciept = recieptsService.getRecieptById($state.params.id);
}
